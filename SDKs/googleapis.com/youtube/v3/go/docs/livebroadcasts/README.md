# LiveBroadcasts

### Available Operations

* [YoutubeLiveBroadcastsBind](#youtubelivebroadcastsbind) - Bind a broadcast to a stream.
* [YoutubeLiveBroadcastsDelete](#youtubelivebroadcastsdelete) - Delete a given broadcast.
* [YoutubeLiveBroadcastsInsert](#youtubelivebroadcastsinsert) - Inserts a new stream for the authenticated user.
* [YoutubeLiveBroadcastsInsertCuepoint](#youtubelivebroadcastsinsertcuepoint) - Insert cuepoints in a broadcast
* [YoutubeLiveBroadcastsList](#youtubelivebroadcastslist) - Retrieve the list of broadcasts associated with the given channel.
* [YoutubeLiveBroadcastsTransition](#youtubelivebroadcaststransition) - Transition a broadcast to a given status.
* [YoutubeLiveBroadcastsUpdate](#youtubelivebroadcastsupdate) - Updates an existing broadcast for the authenticated user.

## YoutubeLiveBroadcastsBind

Bind a broadcast to a stream.

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
    res, err := s.LiveBroadcasts.YoutubeLiveBroadcastsBind(ctx, operations.YoutubeLiveBroadcastsBindRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("voluptas"),
        ID: "ef1caa33-83c2-4beb-8773-73c8d72f64d1",
        Key: sdk.String("facere"),
        OauthToken: sdk.String("libero"),
        OnBehalfOfContentOwner: sdk.String("architecto"),
        OnBehalfOfContentOwnerChannel: sdk.String("voluptatibus"),
        Part: []string{
            "porro",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquam"),
        StreamID: sdk.String("velit"),
        UploadType: sdk.String("illo"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.YoutubeLiveBroadcastsBindSecurity{
        Option1: &operations.YoutubeLiveBroadcastsBindSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiveBroadcast != nil {
        // handle response
    }
}
```

## YoutubeLiveBroadcastsDelete

Delete a given broadcast.

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
    res, err := s.LiveBroadcasts.YoutubeLiveBroadcastsDelete(ctx, operations.YoutubeLiveBroadcastsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("excepturi"),
        ID: "6349e1cf-9e06-4e3a-8370-00ae6b6bc9b8",
        Key: sdk.String("a"),
        OauthToken: sdk.String("voluptate"),
        OnBehalfOfContentOwner: sdk.String("ullam"),
        OnBehalfOfContentOwnerChannel: sdk.String("unde"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.YoutubeLiveBroadcastsDeleteSecurity{
        Option1: &operations.YoutubeLiveBroadcastsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## YoutubeLiveBroadcastsInsert

Inserts a new stream for the authenticated user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LiveBroadcasts.YoutubeLiveBroadcastsInsert(ctx, operations.YoutubeLiveBroadcastsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LiveBroadcast: &shared.LiveBroadcast{
            ContentDetails: &shared.LiveBroadcastContentDetails{
                BoundStreamID: sdk.String("corporis"),
                BoundStreamLastUpdateTimeMs: types.MustTimeFromString("2021-10-04T04:25:17.046Z"),
                ClosedCaptionsType: shared.LiveBroadcastContentDetailsClosedCaptionsTypeEnumClosedCaptionsDisabled.ToPointer(),
                EnableAutoStart: sdk.Bool(false),
                EnableAutoStop: sdk.Bool(false),
                EnableClosedCaptions: sdk.Bool(false),
                EnableContentEncryption: sdk.Bool(false),
                EnableDvr: sdk.Bool(false),
                EnableEmbed: sdk.Bool(false),
                EnableLowLatency: sdk.Bool(false),
                LatencyPreference: shared.LiveBroadcastContentDetailsLatencyPreferenceEnumNormal.ToPointer(),
                Mesh: sdk.String("veritatis"),
                MonitorStream: &shared.MonitorStreamInfo{
                    BroadcastStreamDelayMs: sdk.Int64(874400),
                    EmbedHTML: sdk.String("consectetur"),
                    EnableMonitorStream: sdk.Bool(false),
                },
                Projection: shared.LiveBroadcastContentDetailsProjectionEnumProjectionUnspecified.ToPointer(),
                RecordFromStart: sdk.Bool(false),
                StartWithSlate: sdk.Bool(false),
                StereoLayout: shared.LiveBroadcastContentDetailsStereoLayoutEnumStereoLayoutUnspecified.ToPointer(),
            },
            Etag: sdk.String("dolorem"),
            ID: sdk.String("52965bb8-a720-4261-9435-e139dbc2259b"),
            Kind: sdk.String("dicta"),
            Snippet: &shared.LiveBroadcastSnippet{
                ActualEndTime: types.MustTimeFromString("2021-07-18T15:23:57.911Z"),
                ActualStartTime: types.MustTimeFromString("2021-02-01T23:29:28.274Z"),
                ChannelID: sdk.String("quos"),
                Description: sdk.String("placeat"),
                IsDefaultBroadcast: sdk.Bool(false),
                LiveChatID: sdk.String("sit"),
                PublishedAt: types.MustTimeFromString("2022-12-11T01:52:16.024Z"),
                ScheduledEndTime: types.MustTimeFromString("2022-10-05T07:59:39.108Z"),
                ScheduledStartTime: types.MustTimeFromString("2022-06-26T05:52:38.352Z"),
                Thumbnails: &shared.ThumbnailDetails{
                    High: &shared.Thumbnail{
                        Height: sdk.Int64(292888),
                        URL: sdk.String("eligendi"),
                        Width: sdk.Int64(715053),
                    },
                    Maxres: &shared.Thumbnail{
                        Height: sdk.Int64(32273),
                        URL: sdk.String("autem"),
                        Width: sdk.Int64(456688),
                    },
                    Medium: &shared.Thumbnail{
                        Height: sdk.Int64(172951),
                        URL: sdk.String("assumenda"),
                        Width: sdk.Int64(107210),
                    },
                    Standard: &shared.Thumbnail{
                        Height: sdk.Int64(668606),
                        URL: sdk.String("facere"),
                        Width: sdk.Int64(545918),
                    },
                },
                Title: sdk.String("Ms."),
            },
            Statistics: &shared.LiveBroadcastStatistics{
                ConcurrentViewers: sdk.String("provident"),
            },
            Status: &shared.LiveBroadcastStatus{
                LifeCycleStatus: shared.LiveBroadcastStatusLifeCycleStatusEnumTestStarting.ToPointer(),
                LiveBroadcastPriority: shared.LiveBroadcastStatusLiveBroadcastPriorityEnumHigh.ToPointer(),
                MadeForKids: sdk.Bool(false),
                PrivacyStatus: shared.LiveBroadcastStatusPrivacyStatusEnumPrivate.ToPointer(),
                RecordingStatus: shared.LiveBroadcastStatusRecordingStatusEnumRecording.ToPointer(),
                SelfDeclaredMadeForKids: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("laudantium"),
        OauthToken: sdk.String("corporis"),
        OnBehalfOfContentOwner: sdk.String("officiis"),
        OnBehalfOfContentOwnerChannel: sdk.String("voluptatibus"),
        Part: []string{
            "at",
            "alias",
            "quia",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.YoutubeLiveBroadcastsInsertSecurity{
        Option1: &operations.YoutubeLiveBroadcastsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiveBroadcast != nil {
        // handle response
    }
}
```

## YoutubeLiveBroadcastsInsertCuepoint

Insert cuepoints in a broadcast

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
    res, err := s.LiveBroadcasts.YoutubeLiveBroadcastsInsertCuepoint(ctx, operations.YoutubeLiveBroadcastsInsertCuepointRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Cuepoint: &shared.Cuepoint{
            CueType: shared.CuepointCueTypeEnumCueTypeAd.ToPointer(),
            DurationSecs: sdk.Int64(885208),
            Etag: sdk.String("eos"),
            ID: sdk.String("d782259e-3ea4-4b51-97f9-2443da7ce52b"),
            InsertionOffsetTimeMs: sdk.String("voluptatum"),
            WalltimeMs: sdk.String("cupiditate"),
        },
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("neque"),
        ID: sdk.String("7c6454ef-b0b3-4489-ac3c-a5acfbe2fd57"),
        Key: sdk.String("aperiam"),
        OauthToken: sdk.String("odio"),
        OnBehalfOfContentOwner: sdk.String("minima"),
        OnBehalfOfContentOwnerChannel: sdk.String("in"),
        Part: []string{
            "excepturi",
            "dolores",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("ducimus"),
    }, operations.YoutubeLiveBroadcastsInsertCuepointSecurity{
        Option1: &operations.YoutubeLiveBroadcastsInsertCuepointSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Cuepoint != nil {
        // handle response
    }
}
```

## YoutubeLiveBroadcastsList

Retrieve the list of broadcasts associated with the given channel.

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
    res, err := s.LiveBroadcasts.YoutubeLiveBroadcastsList(ctx, operations.YoutubeLiveBroadcastsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        BroadcastStatus: operations.YoutubeLiveBroadcastsListBroadcastStatusEnumUpcoming.ToPointer(),
        BroadcastType: operations.YoutubeLiveBroadcastsListBroadcastTypeEnumPersistent.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("quaerat"),
        ID: []string{
            "officiis",
            "placeat",
        },
        Key: sdk.String("quidem"),
        MaxResults: sdk.Int64(348192),
        Mine: sdk.Bool(false),
        OauthToken: sdk.String("quam"),
        OnBehalfOfContentOwner: sdk.String("dolorem"),
        OnBehalfOfContentOwnerChannel: sdk.String("modi"),
        PageToken: sdk.String("ipsa"),
        Part: []string{
            "vero",
            "sequi",
            "repudiandae",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("earum"),
    }, operations.YoutubeLiveBroadcastsListSecurity{
        Option1: &operations.YoutubeLiveBroadcastsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiveBroadcastListResponse != nil {
        // handle response
    }
}
```

## YoutubeLiveBroadcastsTransition

Transition a broadcast to a given status.

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
    res, err := s.LiveBroadcasts.YoutubeLiveBroadcastsTransition(ctx, operations.YoutubeLiveBroadcastsTransitionRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("animi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BroadcastStatus: operations.YoutubeLiveBroadcastsTransitionBroadcastStatusEnumLive,
        Callback: sdk.String("dicta"),
        Fields: sdk.String("consequuntur"),
        ID: "eb07f116-db99-4545-bc95-fa88970e189d",
        Key: sdk.String("tempore"),
        OauthToken: sdk.String("libero"),
        OnBehalfOfContentOwner: sdk.String("velit"),
        OnBehalfOfContentOwnerChannel: sdk.String("doloremque"),
        Part: []string{
            "impedit",
            "cum",
            "ipsum",
            "adipisci",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("doloremque"),
    }, operations.YoutubeLiveBroadcastsTransitionSecurity{
        Option1: &operations.YoutubeLiveBroadcastsTransitionSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiveBroadcast != nil {
        // handle response
    }
}
```

## YoutubeLiveBroadcastsUpdate

Updates an existing broadcast for the authenticated user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LiveBroadcasts.YoutubeLiveBroadcastsUpdate(ctx, operations.YoutubeLiveBroadcastsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LiveBroadcast: &shared.LiveBroadcast{
            ContentDetails: &shared.LiveBroadcastContentDetails{
                BoundStreamID: sdk.String("veniam"),
                BoundStreamLastUpdateTimeMs: types.MustTimeFromString("2022-10-20T04:40:42.736Z"),
                ClosedCaptionsType: shared.LiveBroadcastContentDetailsClosedCaptionsTypeEnumClosedCaptionsHTTPPost.ToPointer(),
                EnableAutoStart: sdk.Bool(false),
                EnableAutoStop: sdk.Bool(false),
                EnableClosedCaptions: sdk.Bool(false),
                EnableContentEncryption: sdk.Bool(false),
                EnableDvr: sdk.Bool(false),
                EnableEmbed: sdk.Bool(false),
                EnableLowLatency: sdk.Bool(false),
                LatencyPreference: shared.LiveBroadcastContentDetailsLatencyPreferenceEnumNormal.ToPointer(),
                Mesh: sdk.String("eligendi"),
                MonitorStream: &shared.MonitorStreamInfo{
                    BroadcastStreamDelayMs: sdk.Int64(820023),
                    EmbedHTML: sdk.String("non"),
                    EnableMonitorStream: sdk.Bool(false),
                },
                Projection: shared.LiveBroadcastContentDetailsProjectionEnumRectangular.ToPointer(),
                RecordFromStart: sdk.Bool(false),
                StartWithSlate: sdk.Bool(false),
                StereoLayout: shared.LiveBroadcastContentDetailsStereoLayoutEnumTopBottom.ToPointer(),
            },
            Etag: sdk.String("sed"),
            ID: sdk.String("f52d82d3-513b-4b6f-88b6-56bcdb35ff2e"),
            Kind: sdk.String("labore"),
            Snippet: &shared.LiveBroadcastSnippet{
                ActualEndTime: types.MustTimeFromString("2022-08-22T17:59:10.804Z"),
                ActualStartTime: types.MustTimeFromString("2022-08-27T21:22:12.876Z"),
                ChannelID: sdk.String("neque"),
                Description: sdk.String("iusto"),
                IsDefaultBroadcast: sdk.Bool(false),
                LiveChatID: sdk.String("est"),
                PublishedAt: types.MustTimeFromString("2021-06-29T15:50:45.661Z"),
                ScheduledEndTime: types.MustTimeFromString("2021-03-10T12:50:31.117Z"),
                ScheduledStartTime: types.MustTimeFromString("2021-07-07T07:11:27.227Z"),
                Thumbnails: &shared.ThumbnailDetails{
                    High: &shared.Thumbnail{
                        Height: sdk.Int64(220104),
                        URL: sdk.String("dicta"),
                        Width: sdk.Int64(622894),
                    },
                    Maxres: &shared.Thumbnail{
                        Height: sdk.Int64(784731),
                        URL: sdk.String("vitae"),
                        Width: sdk.Int64(491591),
                    },
                    Medium: &shared.Thumbnail{
                        Height: sdk.Int64(458970),
                        URL: sdk.String("fugiat"),
                        Width: sdk.Int64(322333),
                    },
                    Standard: &shared.Thumbnail{
                        Height: sdk.Int64(134818),
                        URL: sdk.String("enim"),
                        Width: sdk.Int64(965090),
                    },
                },
                Title: sdk.String("Ms."),
            },
            Statistics: &shared.LiveBroadcastStatistics{
                ConcurrentViewers: sdk.String("dignissimos"),
            },
            Status: &shared.LiveBroadcastStatus{
                LifeCycleStatus: shared.LiveBroadcastStatusLifeCycleStatusEnumRevoked.ToPointer(),
                LiveBroadcastPriority: shared.LiveBroadcastStatusLiveBroadcastPriorityEnumLiveBroadcastPriorityUnspecified.ToPointer(),
                MadeForKids: sdk.Bool(false),
                PrivacyStatus: shared.LiveBroadcastStatusPrivacyStatusEnumPublic.ToPointer(),
                RecordingStatus: shared.LiveBroadcastStatusRecordingStatusEnumNotRecording.ToPointer(),
                SelfDeclaredMadeForKids: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("veniam"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("reiciendis"),
        OnBehalfOfContentOwner: sdk.String("earum"),
        OnBehalfOfContentOwnerChannel: sdk.String("reprehenderit"),
        Part: []string{
            "nemo",
            "repellat",
            "quisquam",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sequi"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.YoutubeLiveBroadcastsUpdateSecurity{
        Option1: &operations.YoutubeLiveBroadcastsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiveBroadcast != nil {
        // handle response
    }
}
```
