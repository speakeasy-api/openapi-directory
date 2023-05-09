# users

## Overview

Retrieve and update user data.

### Available Operations

* [getUserPosts](#getuserposts) - List posts by a user
* [searchUserPosts](#searchuserposts) - Search posts by a user

## getUserPosts

List posts by a user

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserPostsRequest;
import org.openapis.openapi.models.operations.GetUserPostsResponse;
import org.openapis.openapi.models.operations.GetUserPostsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserPostsRequest req = new GetUserPostsRequest("quidem", "architecto", "ipsa") {{
                dateMax = OffsetDateTime.parse("2020-12-31T21:22:14.646Z");
                dateMin = OffsetDateTime.parse("2021-08-29T10:25:27.700Z");
                devicePixelRatio = 1709.09;
                groupIds = "dolorem";
                includeReposts = 358152L;
                latitude = 1289.26;
                longitude = 7506.86;
                outcomes = "enim";
                page = 607831L;
                perPage = 363711L;
                radius = 3250.47;
                sortBy = "excepturi";
            }};            

            GetUserPostsResponse res = sdk.users.getUserPosts(req, new GetUserPostsSecurity("accusantium") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getUserPosts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchUserPosts

Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchUserPostsRequest;
import org.openapis.openapi.models.operations.SearchUserPostsResponse;
import org.openapis.openapi.models.operations.SearchUserPostsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchUserPostsRequest req = new SearchUserPostsRequest("iure", "culpa", "doloribus", "sapiente") {{
                dateMax = OffsetDateTime.parse("2022-05-07T17:33:24.154Z");
                dateMin = OffsetDateTime.parse("2022-05-14T04:53:02.888Z");
                devicePixelRatio = 1613.09;
                groupIds = "repellat";
                includeReposts = 653108L;
                latitude = 5818.5;
                longitude = 2532.91;
                outcomes = "commodi";
                page = 466311L;
                perPage = 474697L;
                radius = 2444.25;
                sortBy = "error";
            }};            

            SearchUserPostsResponse res = sdk.users.searchUserPosts(req, new SearchUserPostsSecurity("quia") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.searchUserPosts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
