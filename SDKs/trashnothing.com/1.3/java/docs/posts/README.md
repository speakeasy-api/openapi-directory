# posts

## Overview

Retrieve and update posts.

### Available Operations

* [getAllPosts](#getallposts) - List all posts
* [getAllPostsChanges](#getallpostschanges) - List all post changes
* [getPost](#getpost) - Retrieve a post
* [getPostAndRelatedData](#getpostandrelateddata) - Retrieve post display data
* [getPosts](#getposts) - List posts
* [getPostsByIds](#getpostsbyids) - Retrieve multiple posts
* [searchPosts](#searchposts) - Search posts

## getAllPosts

This endpoint provides an easy way to get a feed of all the publicly published posts on trash nothing. It provides access to all publicly published offer and wanted posts from the last 30 days. The posts are sorted by date (newest first). <br /><br /> There are fewer options for filtering, sorting and searching posts with this endpoint but there is no 1,000 post limit and posts that are crossposted to multiple groups are not merged together in the response.  In most cases, crossposted posts are easy to detect because they have the same user_id, title and content.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllPostsRequest;
import org.openapis.openapi.models.operations.GetAllPostsResponse;
import org.openapis.openapi.models.operations.GetAllPostsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllPostsRequest req = new GetAllPostsRequest(OffsetDateTime.parse("2022-01-28T03:46:24.500Z"), OffsetDateTime.parse("2022-10-15T05:10:19.629Z"), "quis") {{
                devicePixelRatio = 871.29;
                page = 648172L;
                perPage = 20218L;
            }};            

            GetAllPostsResponse res = sdk.posts.getAllPosts(req, new GetAllPostsSecurity("ipsam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getAllPosts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllPostsChanges

This endpoint provides an easy way to get a feed of all the changes that have been made to publicly published posts on trash nothing.  Similar to the /posts/all endpoint, only data from the last 30 days is available and the changes are sorted by date (newest first).  Every change includes the date of the change, the post_id of the post that was changed and the type of change. <br /><br /> The different types of changes that are returned are listed below. <br /><br /> - deleted<br /> - undeleted<br /> - satisfied<br /> - promised<br /> - unpromised<br /> - withdrawn<br /> - edited<br /> <br /> For edited changes, clients can use the retrieve post API endpoint to get the edits that have been made to the post.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllPostsChangesRequest;
import org.openapis.openapi.models.operations.GetAllPostsChangesResponse;
import org.openapis.openapi.models.operations.GetAllPostsChangesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllPostsChangesRequest req = new GetAllPostsChangesRequest(OffsetDateTime.parse("2020-02-17T21:57:45.117Z"), OffsetDateTime.parse("2022-07-31T07:34:52.790Z")) {{
                page = 870013L;
                perPage = 870088L;
            }};            

            GetAllPostsChangesResponse res = sdk.posts.getAllPostsChanges(req, new GetAllPostsChangesSecurity("maiores") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getAllPostsChanges200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPost

Retrieve a post

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPostRequest;
import org.openapis.openapi.models.operations.GetPostResponse;
import org.openapis.openapi.models.operations.GetPostSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPostRequest req = new GetPostRequest("molestiae");            

            GetPostResponse res = sdk.posts.getPost(req, new GetPostSecurity("quod") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.post != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPostAndRelatedData

Retrieve a post and other data related to the post that is useful for displaying the post such as data about the user who posted the post and the groups the post was posted on.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPostAndRelatedDataRequest;
import org.openapis.openapi.models.operations.GetPostAndRelatedDataResponse;
import org.openapis.openapi.models.operations.GetPostAndRelatedDataSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPostAndRelatedDataRequest req = new GetPostAndRelatedDataRequest("quod");            

            GetPostAndRelatedDataResponse res = sdk.posts.getPostAndRelatedData(req, new GetPostAndRelatedDataSecurity("esse") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPostAndRelatedData200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPosts

NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.
NOTE: Passing the latitude, longitude and radius parameters filters all posts by their location and so these parameters will temporarily override the current users' location preferences. When latitude, longitude and radius are not specified, public posts will be filtered by the current users' location preferences.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPostsRequest;
import org.openapis.openapi.models.operations.GetPostsResponse;
import org.openapis.openapi.models.operations.GetPostsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPostsRequest req = new GetPostsRequest("totam", "porro") {{
                dateMax = OffsetDateTime.parse("2022-10-06T15:49:54.663Z");
                dateMin = OffsetDateTime.parse("2021-09-20T20:35:01.256Z");
                devicePixelRatio = 5820.2;
                groupIds = "fugit";
                includeReposts = 537373L;
                latitude = 9446.69;
                longitude = 7586.16;
                outcomes = "totam";
                page = 105907L;
                perPage = 414662L;
                radius = 4736;
                sortBy = "modi";
                userState = "qui";
            }};            

            GetPostsResponse res = sdk.posts.getPosts(req, new GetPostsSecurity("impedit") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPosts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPostsByIds

Retrieve multiple posts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPostsByIdsRequest;
import org.openapis.openapi.models.operations.GetPostsByIdsResponse;
import org.openapis.openapi.models.operations.GetPostsByIdsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPostsByIdsRequest req = new GetPostsByIdsRequest("cum");            

            GetPostsByIdsResponse res = sdk.posts.getPostsByIds(req, new GetPostsByIdsSecurity("esse") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPostsByIds200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchPosts

Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchPostsRequest;
import org.openapis.openapi.models.operations.SearchPostsResponse;
import org.openapis.openapi.models.operations.SearchPostsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchPostsRequest req = new SearchPostsRequest("ipsum", "excepturi", "aspernatur") {{
                dateMax = OffsetDateTime.parse("2022-09-04T16:31:28.618Z");
                dateMin = OffsetDateTime.parse("2022-09-13T17:41:46.141Z");
                devicePixelRatio = 6120.96;
                groupIds = "dolor";
                includeReposts = 616934L;
                latitude = 3864.89;
                longitude = 9437.49;
                outcomes = "saepe";
                page = 681820L;
                perPage = 449950L;
                radius = 3595.08;
                sortBy = "iste";
                userState = "iure";
            }};            

            SearchPostsResponse res = sdk.posts.searchPosts(req, new SearchPostsSecurity("saepe") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.searchPosts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
