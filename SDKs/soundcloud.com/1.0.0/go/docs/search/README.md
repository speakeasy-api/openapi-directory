# Search

## Overview

Search Endpoints.

### Available Operations

* [GetPlaylists](#getplaylists) - Performs a playlist search based on a query
* [GetTracks](#gettracks) - Performs a track search based on a query
* [GetUsers](#getusers) - Performs a user search based on a query

## GetPlaylists

Performs a playlist search based on a query

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Search.GetPlaylists(ctx, operations.GetPlaylistsRequest{
        Access: []shared.AccessEnum{
            shared.AccessEnumBlocked,
        },
        Limit: sdk.Int64(569618),
        LinkedPartitioning: sdk.Bool(false),
        Offset: sdk.Int64(270008),
        Q: "facilis",
    }, operations.GetPlaylistsSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPlaylists200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## GetTracks

Performs a track search based on a query

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Search.GetTracks(ctx, operations.GetTracksRequest{
        Access: []shared.AccessEnum{
            shared.AccessEnumPlayable,
            shared.AccessEnumBlocked,
            shared.AccessEnumPreview,
        },
        Bpm: &shared.Bpm{
            From: sdk.Int64(123),
            To: sdk.Int64(456),
        },
        CreatedAt: &shared.CreatedAt{
            From: sdk.String("2020-12-24T00:00:00.000Z"),
            To: sdk.String("2020-12-26T00:00:00.000Z"),
        },
        Duration: &shared.Duration{
            From: sdk.Int64(123456),
            To: sdk.Int64(456789),
        },
        Genres: sdk.String("non"),
        Ids: sdk.String("eligendi"),
        Limit: sdk.Int64(576157),
        LinkedPartitioning: sdk.Bool(false),
        Offset: sdk.Int64(396098),
        Q: "provident",
        Tags: sdk.String("necessitatibus"),
    }, operations.GetTracksSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTracks200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## GetUsers

Performs a user search based on a query

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
    res, err := s.Search.GetUsers(ctx, operations.GetUsersRequest{
        Ids: sdk.String("sint"),
        Limit: sdk.Int64(638921),
        LinkedPartitioning: sdk.Bool(false),
        Offset: sdk.Int64(223081),
        Q: "debitis",
    }, operations.GetUsersSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsers200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```
