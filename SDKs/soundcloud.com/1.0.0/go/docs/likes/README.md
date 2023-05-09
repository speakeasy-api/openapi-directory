# Likes

## Overview

Liking Tracks & Playlists.

### Available Operations

* [DeleteLikesPlaylistsPlaylistID](#deletelikesplaylistsplaylistid) - Unlikes a playlist.
* [DeleteLikesTracksTrackID](#deletelikestrackstrackid) - Unlikes a track.
* [PostLikesPlaylistsPlaylistID](#postlikesplaylistsplaylistid) - Likes a playlist.
* [PostLikesTracksTrackID](#postlikestrackstrackid) - Likes a track.

## DeleteLikesPlaylistsPlaylistID

Unlikes a playlist.

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
    res, err := s.Likes.DeleteLikesPlaylistsPlaylistID(ctx, operations.DeleteLikesPlaylistsPlaylistIDRequest{
        PlaylistID: 592845,
    }, operations.DeleteLikesPlaylistsPlaylistIDSecurity{
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

## DeleteLikesTracksTrackID

Unlikes a track.

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
    res, err := s.Likes.DeleteLikesTracksTrackID(ctx, operations.DeleteLikesTracksTrackIDRequest{
        TrackID: 715190,
    }, operations.DeleteLikesTracksTrackIDSecurity{
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

## PostLikesPlaylistsPlaylistID

Likes a playlist.

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
    res, err := s.Likes.PostLikesPlaylistsPlaylistID(ctx, operations.PostLikesPlaylistsPlaylistIDRequest{
        PlaylistID: 844266,
    }, operations.PostLikesPlaylistsPlaylistIDSecurity{
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

## PostLikesTracksTrackID

Likes a track.

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
    res, err := s.Likes.PostLikesTracksTrackID(ctx, operations.PostLikesTracksTrackIDRequest{
        TrackID: 602763,
    }, operations.PostLikesTracksTrackIDSecurity{
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
