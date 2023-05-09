# Reposts

## Overview

Reposting Tracks & Playlists.

### Available Operations

* [DeleteRepostsPlaylistsPlaylistID](#deleterepostsplaylistsplaylistid) - Removes a repost on a playlist as the authenticated user
* [DeleteRepostsTracksTrackID](#deleterepoststrackstrackid) - Removes a repost on a track as the authenticated user
* [PostRepostsPlaylistsPlaylistID](#postrepostsplaylistsplaylistid) - Reposts a playlist as the authenticated user
* [PostRepostsTracksTrackID](#postrepoststrackstrackid) - Reposts a track as the authenticated user

## DeleteRepostsPlaylistsPlaylistID

Removes a repost on a playlist as the authenticated user

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
    res, err := s.Reposts.DeleteRepostsPlaylistsPlaylistID(ctx, operations.DeleteRepostsPlaylistsPlaylistIDRequest{
        PlaylistID: 164940,
    }, operations.DeleteRepostsPlaylistsPlaylistIDSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRepostsTracksTrackID

Removes a repost on a track as the authenticated user

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
    res, err := s.Reposts.DeleteRepostsTracksTrackID(ctx, operations.DeleteRepostsTracksTrackIDRequest{
        TrackID: 828940,
    }, operations.DeleteRepostsTracksTrackIDSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostRepostsPlaylistsPlaylistID

Reposts a playlist as the authenticated user

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
    res, err := s.Reposts.PostRepostsPlaylistsPlaylistID(ctx, operations.PostRepostsPlaylistsPlaylistIDRequest{
        PlaylistID: 369808,
    }, operations.PostRepostsPlaylistsPlaylistIDSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostRepostsTracksTrackID

Reposts a track as the authenticated user

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
    res, err := s.Reposts.PostRepostsTracksTrackID(ctx, operations.PostRepostsTracksTrackIDRequest{
        TrackID: 4695,
    }, operations.PostRepostsTracksTrackIDSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
