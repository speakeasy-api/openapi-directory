# Playlists

## Overview

Playlists Endpoints.

### Available Operations

* [DeletePlaylistsPlaylistID](#deleteplaylistsplaylistid) - Deletes a playlist.
* [GetPlaylistsPlaylistID](#getplaylistsplaylistid) - Returns a playlist.
* [GetPlaylistsPlaylistIDReposters](#getplaylistsplaylistidreposters) - Returns a collection of playlist's reposters.
* [GetPlaylistsPlaylistIDTracks](#getplaylistsplaylistidtracks) - Returns tracks under a playlist.
* [PostPlaylists](#postplaylists) - Creates a playlist.
* [PutPlaylistsPlaylistID](#putplaylistsplaylistid) - Updates a playlist.

## DeletePlaylistsPlaylistID

Deletes a playlist.

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
    res, err := s.Playlists.DeletePlaylistsPlaylistID(ctx, operations.DeletePlaylistsPlaylistIDRequest{
        PlaylistID: 780529,
    }, operations.DeletePlaylistsPlaylistIDSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPlaylistsPlaylistID

Returns a playlist.

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
    res, err := s.Playlists.GetPlaylistsPlaylistID(ctx, operations.GetPlaylistsPlaylistIDRequest{
        Access: []shared.AccessEnum{
            shared.AccessEnumPlayable,
            shared.AccessEnumBlocked,
            shared.AccessEnumPreview,
        },
        PlaylistID: 582020,
        SecretToken: sdk.String("fugit"),
    }, operations.GetPlaylistsPlaylistIDSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Playlist != nil {
        // handle response
    }
}
```

## GetPlaylistsPlaylistIDReposters

Returns a collection of playlist's reposters.

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
    res, err := s.Playlists.GetPlaylistsPlaylistIDReposters(ctx, operations.GetPlaylistsPlaylistIDRepostersRequest{
        Limit: sdk.Int64(537373),
        PlaylistID: 944669,
    }, operations.GetPlaylistsPlaylistIDRepostersSecurity{
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MetaUsers != nil {
        // handle response
    }
}
```

## GetPlaylistsPlaylistIDTracks

Returns tracks under a playlist.

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
    res, err := s.Playlists.GetPlaylistsPlaylistIDTracks(ctx, operations.GetPlaylistsPlaylistIDTracksRequest{
        Access: []shared.AccessEnum{
            shared.AccessEnumPreview,
            shared.AccessEnumPlayable,
            shared.AccessEnumPreview,
            shared.AccessEnumPreview,
        },
        LinkedPartitioning: sdk.Bool(false),
        PlaylistID: 264555,
        SecretToken: sdk.String("qui"),
    }, operations.GetPlaylistsPlaylistIDTracksSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPlaylistsPlaylistIDTracks200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## PostPlaylists

Creates a playlist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Playlists.PostPlaylists(ctx, shared.CreateUpdatePlaylistRequest{
        Playlist: &shared.CreateUpdatePlaylistRequestPlaylist{
            Description: sdk.String("impedit"),
            Sharing: shared.CreateUpdatePlaylistRequestPlaylistSharingEnumPrivate.ToPointer(),
            Title: sdk.String("Ms."),
            Tracks: []shared.CreateUpdatePlaylistRequestPlaylistTracks{
                shared.CreateUpdatePlaylistRequestPlaylistTracks{
                    ID: "92059293-96fe-4a75-96eb-10faaa2352c5",
                },
            },
        },
    }, operations.PostPlaylistsSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPlaylists201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PutPlaylistsPlaylistID

Updates a playlist.

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
    res, err := s.Playlists.PutPlaylistsPlaylistID(ctx, operations.PutPlaylistsPlaylistIDRequest{
        CreateUpdatePlaylistRequest: &shared.CreateUpdatePlaylistRequest{
            Playlist: &shared.CreateUpdatePlaylistRequestPlaylist{
                Description: sdk.String("omnis"),
                Sharing: shared.CreateUpdatePlaylistRequestPlaylistSharingEnumPublic.ToPointer(),
                Title: sdk.String("Mrs."),
                Tracks: []shared.CreateUpdatePlaylistRequestPlaylistTracks{
                    shared.CreateUpdatePlaylistRequestPlaylistTracks{
                        ID: "07aff1a3-a2fa-4946-b739-251aa52c3f5a",
                    },
                    shared.CreateUpdatePlaylistRequestPlaylistTracks{
                        ID: "d019da1f-fe78-4f09-bb00-74f15471b5e6",
                    },
                    shared.CreateUpdatePlaylistRequestPlaylistTracks{
                        ID: "e13b99d4-88e1-4e91-a450-ad2abd442698",
                    },
                },
            },
        },
        PlaylistID: 20107,
    }, operations.PutPlaylistsPlaylistIDSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutPlaylistsPlaylistID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
