# Tracks

## Overview

Tracks Endpoints.

### Available Operations

* [DeleteTracksTrackID](#deletetrackstrackid) - Deletes a track.
* [GetTracksTrackID](#gettrackstrackid) - Returns a track.
* [GetTracksTrackIDComments](#gettrackstrackidcomments) - Returns the comments posted on the track(track_id).
* [GetTracksTrackIDFavoriters](#gettrackstrackidfavoriters) - Returns a list of users who have favorited or liked the track.
* [GetTracksTrackIDRelated](#gettrackstrackidrelated) - Returns all related tracks of track on SoundCloud.
* [GetTracksTrackIDReposters](#gettrackstrackidreposters) - Returns a collection of track's reposters.
* [GetTracksTrackIDStreams](#gettrackstrackidstreams) - Returns a track's streamable URLs
* [PostTracks](#posttracks) - Uploads a new track.
* [PostTracksTrackIDComments](#posttrackstrackidcomments) - Returns the newly created comment on success
* [PutTracksTrackIDJSON](#puttrackstrackidjson) - Updates a track's information.
* [PutTracksTrackIDMultipart](#puttrackstrackidmultipart) - Updates a track's information.

## DeleteTracksTrackID

Deletes a track.

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
    res, err := s.Tracks.DeleteTracksTrackID(ctx, operations.DeleteTracksTrackIDRequest{
        TrackID: 952749,
    }, operations.DeleteTracksTrackIDSecurity{
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

## GetTracksTrackID

Returns a track.

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
    res, err := s.Tracks.GetTracksTrackID(ctx, operations.GetTracksTrackIDRequest{
        SecretToken: sdk.String("dolorum"),
        TrackID: 447125,
    }, operations.GetTracksTrackIDSecurity{
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Track != nil {
        // handle response
    }
}
```

## GetTracksTrackIDComments

Returns the comments posted on the track(track_id).

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
    res, err := s.Tracks.GetTracksTrackIDComments(ctx, operations.GetTracksTrackIDCommentsRequest{
        Limit: sdk.Int64(449198),
        LinkedPartitioning: sdk.Bool(false),
        Offset: sdk.Int64(846409),
        TrackID: 978571,
    }, operations.GetTracksTrackIDCommentsSecurity{
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTracksTrackIDComments200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## GetTracksTrackIDFavoriters

Returns a list of users who have favorited or liked the track.

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
    res, err := s.Tracks.GetTracksTrackIDFavoriters(ctx, operations.GetTracksTrackIDFavoritersRequest{
        Limit: sdk.Int64(699479),
        Offset: sdk.Int64(116202),
        TrackID: 297437,
    }, operations.GetTracksTrackIDFavoritersSecurity{
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UsersList != nil {
        // handle response
    }
}
```

## GetTracksTrackIDRelated

Returns all related tracks of track on SoundCloud.

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
    res, err := s.Tracks.GetTracksTrackIDRelated(ctx, operations.GetTracksTrackIDRelatedRequest{
        Access: []shared.AccessEnum{
            shared.AccessEnumBlocked,
            shared.AccessEnumPreview,
            shared.AccessEnumPreview,
            shared.AccessEnumBlocked,
        },
        Limit: sdk.Int64(881104),
        LinkedPartitioning: sdk.Bool(false),
        Offset: sdk.Int64(249796),
        TrackID: 581273,
    }, operations.GetTracksTrackIDRelatedSecurity{
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTracksTrackIDRelated200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## GetTracksTrackIDReposters

Returns a collection of track's reposters.

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
    res, err := s.Tracks.GetTracksTrackIDReposters(ctx, operations.GetTracksTrackIDRepostersRequest{
        Limit: sdk.Int64(313218),
        TrackID: 881736,
    }, operations.GetTracksTrackIDRepostersSecurity{
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

## GetTracksTrackIDStreams

Returns a track's streamable URLs

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
    res, err := s.Tracks.GetTracksTrackIDStreams(ctx, operations.GetTracksTrackIDStreamsRequest{
        SecretToken: sdk.String("delectus"),
        TrackID: 692532,
    }, operations.GetTracksTrackIDStreamsSecurity{
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Streams != nil {
        // handle response
    }
}
```

## PostTracks

Uploads a new track.

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
    res, err := s.Tracks.PostTracks(ctx, shared.TrackDataRequest{
        TrackArtworkData: &shared.TrackDataRequestOnlyForUploadingForPROUsers{
            OnlyForUploadingForPROUsers: "provident",
            Content: []byte("nam"),
        },
        TrackAssetData: &shared.TrackDataRequestOnlyForUploading{
            OnlyForUploading: "id",
            Content: []byte("blanditiis"),
        },
        TrackCommentable: sdk.Bool(false),
        TrackDescription: sdk.String("deleniti"),
        TrackDownloadable: sdk.Bool(false),
        TrackEmbeddableBy: shared.TrackDataRequestTrackEmbeddableByEnumNone.ToPointer(),
        TrackGenre: sdk.String("amet"),
        TrackIsrc: sdk.String("deserunt"),
        TrackLabelName: sdk.String("nisi"),
        TrackLicense: shared.TrackDataRequestTrackLicenseEnumCcByNc.ToPointer(),
        TrackPermalink: sdk.String("natus"),
        TrackPurchaseURL: sdk.String("omnis"),
        TrackRelease: sdk.String("molestiae"),
        TrackReleaseDate: sdk.String("perferendis"),
        TrackSharing: shared.TrackDataRequestTrackSharingEnumPublic.ToPointer(),
        TrackStreamable: sdk.Bool(false),
        TrackTagList: sdk.String("magnam"),
        TrackTitle: sdk.String("distinctio"),
    }, operations.PostTracksSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Track != nil {
        // handle response
    }
}
```

## PostTracksTrackIDComments

Returns the newly created comment on success

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
    res, err := s.Tracks.PostTracksTrackIDComments(ctx, operations.PostTracksTrackIDCommentsRequest{
        RequestBody: operations.PostTracksTrackIDCommentsRequestBody{
            Comment: &operations.PostTracksTrackIDCommentsRequestBodyComment{
                Body: "test comment",
                Timestamp: &operations.PostTracksTrackIDCommentsRequestBodyCommentTimestamp{},
            },
        },
        TrackID: 660174,
    }, operations.PostTracksTrackIDCommentsSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Comment != nil {
        // handle response
    }
}
```

## PutTracksTrackIDJSON

Updates a track's information.

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
    res, err := s.Tracks.PutTracksTrackIDJSON(ctx, operations.PutTracksTrackIDJSONRequest{
        TrackMetadataRequest: &shared.TrackMetadataRequest{
            Track: &shared.TrackMetadataRequestTrack{
                Commentable: sdk.Bool(false),
                Description: sdk.String("labore"),
                Downloadable: sdk.Bool(false),
                EmbeddableBy: shared.TrackMetadataRequestTrackEmbeddableByEnumAll.ToPointer(),
                Genre: sdk.String("suscipit"),
                Isrc: sdk.String("natus"),
                LabelName: sdk.String("nobis"),
                License: shared.TrackMetadataRequestTrackLicenseEnumCcByNc.ToPointer(),
                Permalink: sdk.String("vero"),
                PurchaseURL: sdk.String("aspernatur"),
                Release: sdk.String("architecto"),
                ReleaseDate: sdk.String("magnam"),
                Sharing: shared.TrackMetadataRequestTrackSharingEnumPublic.ToPointer(),
                Streamable: sdk.Bool(false),
                TagList: sdk.String("excepturi"),
                Title: sdk.String("Mrs."),
            },
        },
        TrackID: 590873,
    }, operations.PutTracksTrackIDJSONSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Track != nil {
        // handle response
    }
}
```

## PutTracksTrackIDMultipart

Updates a track's information.

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
    res, err := s.Tracks.PutTracksTrackIDMultipart(ctx, operations.PutTracksTrackIDMultipartRequest{
        TrackDataRequest: &shared.TrackDataRequest{
            TrackArtworkData: &shared.TrackDataRequestOnlyForUploadingForPROUsers{
                OnlyForUploadingForPROUsers: "quos",
                Content: []byte("sint"),
            },
            TrackAssetData: &shared.TrackDataRequestOnlyForUploading{
                OnlyForUploading: "accusantium",
                Content: []byte("mollitia"),
            },
            TrackCommentable: sdk.Bool(false),
            TrackDescription: sdk.String("reiciendis"),
            TrackDownloadable: sdk.Bool(false),
            TrackEmbeddableBy: shared.TrackDataRequestTrackEmbeddableByEnumMe.ToPointer(),
            TrackGenre: sdk.String("ad"),
            TrackIsrc: sdk.String("eum"),
            TrackLabelName: sdk.String("dolor"),
            TrackLicense: shared.TrackDataRequestTrackLicenseEnumCcByNcSa.ToPointer(),
            TrackPermalink: sdk.String("odit"),
            TrackPurchaseURL: sdk.String("nemo"),
            TrackRelease: sdk.String("quasi"),
            TrackReleaseDate: sdk.String("iure"),
            TrackSharing: shared.TrackDataRequestTrackSharingEnumPrivate.ToPointer(),
            TrackStreamable: sdk.Bool(false),
            TrackTagList: sdk.String("debitis"),
            TrackTitle: sdk.String("eius"),
        },
        TrackID: 806194,
    }, operations.PutTracksTrackIDMultipartSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Track != nil {
        // handle response
    }
}
```
