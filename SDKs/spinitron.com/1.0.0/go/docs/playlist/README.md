# Playlist

### Available Operations

* [GetPlaylists](#getplaylists) - Returns playlists optionally filtered by {start} and/or {end} datetimes
* [GetPlaylistsID](#getplaylistsid) - Get a Playlist by id

## GetPlaylists

Get Playlists optionally filtered by a datetime range.
Only past Playlists will be returned (with allowed tolerance equals 1 hour in future).

Ordered chronologically from newest to oldest.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Playlist.GetPlaylists(ctx, operations.GetPlaylistsRequest{
        Count: sdk.Int64(799159),
        End: types.MustTimeFromString("2021-08-13T16:19:19.906Z"),
        Expand: []string{
            "porro",
            "dolorum",
            "dicta",
        },
        Fields: []string{
            "officia",
            "occaecati",
            "fugit",
        },
        Page: sdk.Int64(537373),
        PersonaID: sdk.Int64(944669),
        ShowID: sdk.Int64(758616),
        Start: types.MustTimeFromString("2022-10-15T16:29:54.554Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPlaylists200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPlaylistsID

The response object represents the playlist specified by {id}.

Status 404 is returned if a playlist with {id} does not exist or if it does but starts in the future (with allowed tolerance equals 1 hour in future).


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Playlist.GetPlaylistsID(ctx, operations.GetPlaylistsIDRequest{
        Expand: []string{
            "molestiae",
            "modi",
        },
        Fields: []string{
            "impedit",
        },
        ID: 736918,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Playlist != nil {
        // handle response
    }
}
```
