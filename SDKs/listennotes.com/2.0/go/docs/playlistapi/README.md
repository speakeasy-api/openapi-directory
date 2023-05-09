# PlaylistAPI

## Overview

Endpoints to fetch Listen Later playlists data

### Available Operations

* [GetPlaylistByID](#getplaylistbyid) - Fetch a playlist's info and items (i.e., episodes or podcasts).
* [GetPlaylists](#getplaylists) - Fetch a list of your playlists.

## GetPlaylistByID

A playlist can be an episode list (i.e., all items are episodes) or a podcast list (i.e., all items are podcasts),
which is essentially the same as those created via listennotes.com/listen/.
This endpoint fetches a list of items (i.e., episodes or podcasts) in the playlist.
You can use the **last_pub_date_ms** parameter to do pagination and fetch more items.
A playlist can be **public** (discoverable on ListenNotes.com),
**unlisted** (accessible to anyone who knows the playlist id),
or **private** (accessible to its owner).
You can fetch all playlists created by you, and **public** / **unlisted** playlists created by others.


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
    res, err := s.PlaylistAPI.GetPlaylistByID(ctx, operations.GetPlaylistByIDRequest{
        XListenAPIKey: "accusamus",
        ID: "395efb9b-a88f-43a6-a997-074ba4469b6e",
        LastTimestampMs: sdk.Int64(135474),
        Sort: operations.GetPlaylistByIDSortEnumRecentAddedFirst.ToPointer(),
        Type: operations.GetPlaylistByIDTypeEnumEpisodeList.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlaylistResponse != nil {
        // handle response
    }
}
```

## GetPlaylists

This endpoint returns same data as listennotes.com/listen under your account.
You can use the **page** parameter to do pagination and fetch more playlists.


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
    res, err := s.PlaylistAPI.GetPlaylists(ctx, operations.GetPlaylistsRequest{
        XListenAPIKey: "et",
        Page: sdk.Int64(569965),
        Sort: operations.GetPlaylistsSortEnumOldestAddedFirst.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlaylistsResponse != nil {
        // handle response
    }
}
```
