# Posts

## Overview

Retrieve and update posts.

### Available Operations

* [GetAllPosts](#getallposts) - List all posts
* [GetAllPostsChanges](#getallpostschanges) - List all post changes
* [GetPost](#getpost) - Retrieve a post
* [GetPostAndRelatedData](#getpostandrelateddata) - Retrieve post display data
* [GetPosts](#getposts) - List posts
* [GetPostsByIds](#getpostsbyids) - Retrieve multiple posts
* [SearchPosts](#searchposts) - Search posts

## GetAllPosts

This endpoint provides an easy way to get a feed of all the publicly published posts on trash nothing. It provides access to all publicly published offer and wanted posts from the last 30 days. The posts are sorted by date (newest first). <br /><br /> There are fewer options for filtering, sorting and searching posts with this endpoint but there is no 1,000 post limit and posts that are crossposted to multiple groups are not merged together in the response.  In most cases, crossposted posts are easy to detect because they have the same user_id, title and content.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Posts.GetAllPosts(ctx, operations.GetAllPostsRequest{
        DateMax: types.MustTimeFromString("2022-01-28T03:46:24.500Z"),
        DateMin: types.MustTimeFromString("2022-10-15T05:10:19.629Z"),
        DevicePixelRatio: sdk.Float64(3373.96),
        Page: sdk.Int64(87129),
        PerPage: sdk.Int64(648172),
        Types: "perferendis",
    }, operations.GetAllPostsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllPosts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAllPostsChanges

This endpoint provides an easy way to get a feed of all the changes that have been made to publicly published posts on trash nothing.  Similar to the /posts/all endpoint, only data from the last 30 days is available and the changes are sorted by date (newest first).  Every change includes the date of the change, the post_id of the post that was changed and the type of change. <br /><br /> The different types of changes that are returned are listed below. <br /><br /> - deleted<br /> - undeleted<br /> - satisfied<br /> - promised<br /> - unpromised<br /> - withdrawn<br /> - edited<br /> <br /> For edited changes, clients can use the retrieve post API endpoint to get the edits that have been made to the post.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Posts.GetAllPostsChanges(ctx, operations.GetAllPostsChangesRequest{
        DateMax: types.MustTimeFromString("2022-03-03T02:15:00.468Z"),
        DateMin: types.MustTimeFromString("2020-08-31T22:02:25.322Z"),
        Page: sdk.Int64(140350),
        PerPage: sdk.Int64(870013),
    }, operations.GetAllPostsChangesSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllPostsChanges200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPost

Retrieve a post

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Posts.GetPost(ctx, operations.GetPostRequest{
        PostID: "at",
    }, operations.GetPostSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Post != nil {
        // handle response
    }
}
```

## GetPostAndRelatedData

Retrieve a post and other data related to the post that is useful for displaying the post such as data about the user who posted the post and the groups the post was posted on.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Posts.GetPostAndRelatedData(ctx, operations.GetPostAndRelatedDataRequest{
        PostID: "maiores",
    }, operations.GetPostAndRelatedDataSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPostAndRelatedData200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPosts

NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.
NOTE: Passing the latitude, longitude and radius parameters filters all posts by their location and so these parameters will temporarily override the current users' location preferences. When latitude, longitude and radius are not specified, public posts will be filtered by the current users' location preferences.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Posts.GetPosts(ctx, operations.GetPostsRequest{
        DateMax: types.MustTimeFromString("2022-03-15T07:22:15.330Z"),
        DateMin: types.MustTimeFromString("2021-08-13T16:19:19.906Z"),
        DevicePixelRatio: sdk.Float64(5204.78),
        GroupIds: sdk.String("porro"),
        IncludeReposts: sdk.Int64(678880),
        Latitude: sdk.Float64(1182.74),
        Longitude: sdk.Float64(7206.33),
        Outcomes: sdk.String("officia"),
        Page: sdk.Int64(582020),
        PerPage: sdk.Int64(143353),
        Radius: sdk.Float64(5373.73),
        SortBy: sdk.String("hic"),
        Sources: "optio",
        Types: "totam",
        UserState: sdk.String("beatae"),
    }, operations.GetPostsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPosts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPostsByIds

Retrieve multiple posts

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Posts.GetPostsByIds(ctx, operations.GetPostsByIdsRequest{
        PostIds: "commodi",
    }, operations.GetPostsByIdsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPostsByIds200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SearchPosts

Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Posts.SearchPosts(ctx, operations.SearchPostsRequest{
        DateMax: types.MustTimeFromString("2022-09-26T10:29:33.503Z"),
        DateMin: types.MustTimeFromString("2022-03-24T09:42:46.236Z"),
        DevicePixelRatio: sdk.Float64(7369.18),
        GroupIds: sdk.String("esse"),
        IncludeReposts: sdk.Int64(216550),
        Latitude: sdk.Float64(5684.34),
        Longitude: sdk.Float64(1352.18),
        Outcomes: sdk.String("perferendis"),
        Page: sdk.Int64(324141),
        PerPage: sdk.Int64(617636),
        Radius: sdk.Float64(1496.75),
        Search: "iste",
        SortBy: sdk.String("dolor"),
        Sources: "natus",
        Types: "laboriosam",
        UserState: sdk.String("hic"),
    }, operations.SearchPostsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchPosts200ApplicationJSONObject != nil {
        // handle response
    }
}
```
