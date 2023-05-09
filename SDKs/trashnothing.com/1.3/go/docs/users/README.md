# Users

## Overview

Retrieve and update user data.

### Available Operations

* [GetUserPosts](#getuserposts) - List posts by a user
* [SearchUserPosts](#searchuserposts) - Search posts by a user

## GetUserPosts

List posts by a user

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
    res, err := s.Users.GetUserPosts(ctx, operations.GetUserPostsRequest{
        DateMax: types.MustTimeFromString("2020-12-15T09:45:44.943Z"),
        DateMin: types.MustTimeFromString("2022-08-22T18:42:38.160Z"),
        DevicePixelRatio: sdk.Float64(6130.64),
        GroupIds: sdk.String("iure"),
        IncludeReposts: sdk.Int64(902349),
        Latitude: sdk.Float64(6976.31),
        Longitude: sdk.Float64(992.8),
        Outcomes: sdk.String("ipsa"),
        Page: sdk.Int64(969810),
        PerPage: sdk.Int64(666767),
        Radius: sdk.Float64(6531.4),
        SortBy: sdk.String("laborum"),
        Sources: "dolores",
        Types: "dolorem",
        UserID: "corporis",
    }, operations.GetUserPostsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUserPosts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SearchUserPosts

Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.


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
    res, err := s.Users.SearchUserPosts(ctx, operations.SearchUserPostsRequest{
        DateMax: types.MustTimeFromString("2022-04-01T23:59:21.675Z"),
        DateMin: types.MustTimeFromString("2022-05-24T03:24:11.703Z"),
        DevicePixelRatio: sdk.Float64(3637.11),
        GroupIds: sdk.String("minima"),
        IncludeReposts: sdk.Int64(570197),
        Latitude: sdk.Float64(384.25),
        Longitude: sdk.Float64(4386.01),
        Outcomes: sdk.String("culpa"),
        Page: sdk.Int64(988374),
        PerPage: sdk.Int64(958950),
        Radius: sdk.Float64(1020.44),
        Search: "mollitia",
        SortBy: sdk.String("dolorem"),
        Sources: "culpa",
        Types: "consequuntur",
        UserID: "repellat",
    }, operations.SearchUserPostsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchUserPosts200ApplicationJSONObject != nil {
        // handle response
    }
}
```
