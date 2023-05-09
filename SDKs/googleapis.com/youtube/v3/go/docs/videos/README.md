# Videos

### Available Operations

* [YoutubeVideosDelete](#youtubevideosdelete) - Deletes a resource.
* [YoutubeVideosGetRating](#youtubevideosgetrating) - Retrieves the ratings that the authorized user gave to a list of specified videos.
* [YoutubeVideosInsert](#youtubevideosinsert) - Inserts a new resource into this collection.
* [YoutubeVideosList](#youtubevideoslist) - Retrieves a list of resources, possibly filtered.
* [YoutubeVideosRate](#youtubevideosrate) - Adds a like or dislike rating to a video or removes a rating from a video.
* [YoutubeVideosReportAbuse](#youtubevideosreportabuse) - Report abuse for a video.
* [YoutubeVideosUpdate](#youtubevideosupdate) - Updates an existing resource.

## YoutubeVideosDelete

Deletes a resource.

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
    res, err := s.Videos.YoutubeVideosDelete(ctx, operations.YoutubeVideosDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("quidem"),
        ID: "3119167b-8e3c-48db-8340-8d6d364ffd45",
        Key: sdk.String("ullam"),
        OauthToken: sdk.String("perspiciatis"),
        OnBehalfOfContentOwner: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ex"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.YoutubeVideosDeleteSecurity{
        Option1: &operations.YoutubeVideosDeleteSecurityOption1{
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

## YoutubeVideosGetRating

Retrieves the ratings that the authorized user gave to a list of specified videos.

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
    res, err := s.Videos.YoutubeVideosGetRating(ctx, operations.YoutubeVideosGetRatingRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("numquam"),
        ID: []string{
            "officiis",
            "omnis",
            "neque",
        },
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("quod"),
        OnBehalfOfContentOwner: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.YoutubeVideosGetRatingSecurity{
        Option1: &operations.YoutubeVideosGetRatingSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoGetRatingResponse != nil {
        // handle response
    }
}
```

## YoutubeVideosInsert

Inserts a new resource into this collection.

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
    res, err := s.Videos.YoutubeVideosInsert(ctx, operations.YoutubeVideosInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: []byte("dicta"),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AutoLevels: sdk.Bool(false),
        Callback: sdk.String("consequatur"),
        Fields: sdk.String("soluta"),
        Key: sdk.String("necessitatibus"),
        NotifySubscribers: sdk.Bool(false),
        OauthToken: sdk.String("sequi"),
        OnBehalfOfContentOwner: sdk.String("recusandae"),
        OnBehalfOfContentOwnerChannel: sdk.String("labore"),
        Part: []string{
            "magni",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aperiam"),
        Stabilize: sdk.Bool(false),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("illum"),
    }, operations.YoutubeVideosInsertSecurity{
        Option1: &operations.YoutubeVideosInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Video != nil {
        // handle response
    }
}
```

## YoutubeVideosList

Retrieves a list of resources, possibly filtered.

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
    res, err := s.Videos.YoutubeVideosList(ctx, operations.YoutubeVideosListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        Chart: operations.YoutubeVideosListChartEnumChartUnspecified.ToPointer(),
        Fields: sdk.String("voluptate"),
        Hl: sdk.String("vel"),
        ID: []string{
            "sit",
            "vel",
        },
        Key: sdk.String("laboriosam"),
        Locale: sdk.String("quaerat"),
        MaxHeight: sdk.Int64(94122),
        MaxResults: sdk.Int64(525223),
        MaxWidth: sdk.Int64(493579),
        MyRating: operations.YoutubeVideosListMyRatingEnumNone.ToPointer(),
        OauthToken: sdk.String("assumenda"),
        OnBehalfOfContentOwner: sdk.String("provident"),
        PageToken: sdk.String("facere"),
        Part: []string{
            "inventore",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        RegionCode: sdk.String("unde"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("repellendus"),
        VideoCategoryID: sdk.String("consequatur"),
    }, operations.YoutubeVideosListSecurity{
        Option1: &operations.YoutubeVideosListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoListResponse != nil {
        // handle response
    }
}
```

## YoutubeVideosRate

Adds a like or dislike rating to a video or removes a rating from a video.

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
    res, err := s.Videos.YoutubeVideosRate(ctx, operations.YoutubeVideosRateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("doloremque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("debitis"),
        ID: "cc11a083-6429-4068-b850-2a55e7f73bc8",
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        Rating: operations.YoutubeVideosRateRatingEnumNone,
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("voluptatem"),
    }, operations.YoutubeVideosRateSecurity{
        Option1: &operations.YoutubeVideosRateSecurityOption1{
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

## YoutubeVideosReportAbuse

Report abuse for a video.

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
    res, err := s.Videos.YoutubeVideosReportAbuse(ctx, operations.YoutubeVideosReportAbuseRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        VideoAbuseReport: &shared.VideoAbuseReport{
            Comments: sdk.String("amet"),
            Language: sdk.String("veritatis"),
            ReasonID: sdk.String("error"),
            SecondaryReasonID: sdk.String("voluptatibus"),
            VideoID: sdk.String("numquam"),
        },
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("earum"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("numquam"),
        OnBehalfOfContentOwner: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("animi"),
    }, operations.YoutubeVideosReportAbuseSecurity{
        Option1: &operations.YoutubeVideosReportAbuseSecurityOption1{
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

## YoutubeVideosUpdate

Updates an existing resource.

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
    res, err := s.Videos.YoutubeVideosUpdate(ctx, operations.YoutubeVideosUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Video: &shared.Video{
            AgeGating: &shared.VideoAgeGating{
                AlcoholContent: sdk.Bool(false),
                Restricted: sdk.Bool(false),
                VideoGameRating: shared.VideoAgeGatingVideoGameRatingEnumM15Plus.ToPointer(),
            },
            ContentDetails: &shared.VideoContentDetails{
                Caption: shared.VideoContentDetailsCaptionEnumTrue.ToPointer(),
                ContentRating: &shared.ContentRating{
                    AcbRating: shared.ContentRatingAcbRatingEnumAcbMa15plus.ToPointer(),
                    AgcomRating: shared.ContentRatingAgcomRatingEnumAgcomVm18.ToPointer(),
                    AnatelRating: shared.ContentRatingAnatelRatingEnumAnatelI.ToPointer(),
                    BbfcRating: shared.ContentRatingBbfcRatingEnumBbfcU.ToPointer(),
                    BfvcRating: shared.ContentRatingBfvcRatingEnumBfvcE.ToPointer(),
                    BmukkRating: shared.ContentRatingBmukkRatingEnumBmukkAa.ToPointer(),
                    CatvRating: shared.ContentRatingCatvRatingEnumCatvG.ToPointer(),
                    CatvfrRating: shared.ContentRatingCatvfrRatingEnumCatvfr13plus.ToPointer(),
                    CbfcRating: shared.ContentRatingCbfcRatingEnumCbfcUa7plus.ToPointer(),
                    CccRating: shared.ContentRatingCccRatingEnumCcc6.ToPointer(),
                    CceRating: shared.ContentRatingCceRatingEnumCceM16.ToPointer(),
                    ChfilmRating: shared.ContentRatingChfilmRatingEnumChfilmUnspecified.ToPointer(),
                    ChvrsRating: shared.ContentRatingChvrsRatingEnumChvrs14a.ToPointer(),
                    CicfRating: shared.ContentRatingCicfRatingEnumCicfUnrated.ToPointer(),
                    CnaRating: shared.ContentRatingCnaRatingEnumCna18plus.ToPointer(),
                    CncRating: shared.ContentRatingCncRatingEnumCncE.ToPointer(),
                    CsaRating: shared.ContentRatingCsaRatingEnumCsa18.ToPointer(),
                    CscfRating: shared.ContentRatingCscfRatingEnumCscf9.ToPointer(),
                    CzfilmRating: shared.ContentRatingCzfilmRatingEnumCzfilmUnrated.ToPointer(),
                    DjctqRating: shared.ContentRatingDjctqRatingEnumDjctqUnrated.ToPointer(),
                    DjctqRatingReasons: []shared.ContentRatingDjctqRatingReasonsEnum{
                        shared.ContentRatingDjctqRatingReasonsEnumDjctqRatingReasonUnspecified,
                        shared.ContentRatingDjctqRatingReasonsEnumDjctqImpactingContent,
                    },
                    EcbmctRating: shared.ContentRatingEcbmctRatingEnumEcbmct15plus.ToPointer(),
                    EefilmRating: shared.ContentRatingEefilmRatingEnumEefilmK14.ToPointer(),
                    EgfilmRating: shared.ContentRatingEgfilmRatingEnumEgfilmGn.ToPointer(),
                    EirinRating: shared.ContentRatingEirinRatingEnumEirinR18plus.ToPointer(),
                    FcbmRating: shared.ContentRatingFcbmRatingEnumFcbmP13.ToPointer(),
                    FcoRating: shared.ContentRatingFcoRatingEnumFcoIi.ToPointer(),
                    FmocRating: shared.ContentRatingFmocRatingEnumFmocU.ToPointer(),
                    FpbRating: shared.ContentRatingFpbRatingEnumFpbUnrated.ToPointer(),
                    FpbRatingReasons: []shared.ContentRatingFpbRatingReasonsEnum{
                        shared.ContentRatingFpbRatingReasonsEnumFpbBlasphemy,
                        shared.ContentRatingFpbRatingReasonsEnumFpbBlasphemy,
                        shared.ContentRatingFpbRatingReasonsEnumFpbHorror,
                        shared.ContentRatingFpbRatingReasonsEnumFpbCriminalTechniques,
                    },
                    FskRating: shared.ContentRatingFskRatingEnumFsk16.ToPointer(),
                    GrfilmRating: shared.ContentRatingGrfilmRatingEnumGrfilmK15.ToPointer(),
                    IcaaRating: shared.ContentRatingIcaaRatingEnumIcaaX.ToPointer(),
                    IfcoRating: shared.ContentRatingIfcoRatingEnumIfcoUnspecified.ToPointer(),
                    IlfilmRating: shared.ContentRatingIlfilmRatingEnumIlfilmUnrated.ToPointer(),
                    IncaaRating: shared.ContentRatingIncaaRatingEnumIncaaC.ToPointer(),
                    KfcbRating: shared.ContentRatingKfcbRatingEnumKfcbPg.ToPointer(),
                    KijkwijzerRating: shared.ContentRatingKijkwijzerRatingEnumKijkwijzer16.ToPointer(),
                    KmrbRating: shared.ContentRatingKmrbRatingEnumKmrbUnrated.ToPointer(),
                    LsfRating: shared.ContentRatingLsfRatingEnumLsfUnrated.ToPointer(),
                    MccaaRating: shared.ContentRatingMccaaRatingEnumMccaa18.ToPointer(),
                    MccypRating: shared.ContentRatingMccypRatingEnumMccyp15.ToPointer(),
                    McstRating: shared.ContentRatingMcstRatingEnumMcstGPg.ToPointer(),
                    MdaRating: shared.ContentRatingMdaRatingEnumMdaNc16.ToPointer(),
                    MedietilsynetRating: shared.ContentRatingMedietilsynetRatingEnumMedietilsynetUnspecified.ToPointer(),
                    MekuRating: shared.ContentRatingMekuRatingEnumMeku18.ToPointer(),
                    MenaMpaaRating: shared.ContentRatingMenaMpaaRatingEnumMenaMpaaUnrated.ToPointer(),
                    MibacRating: shared.ContentRatingMibacRatingEnumMibacVap.ToPointer(),
                    MocRating: shared.ContentRatingMocRatingEnumMocT.ToPointer(),
                    MoctwRating: shared.ContentRatingMoctwRatingEnumMoctwR.ToPointer(),
                    MpaaRating: shared.ContentRatingMpaaRatingEnumMpaaNc17.ToPointer(),
                    MpaatRating: shared.ContentRatingMpaatRatingEnumMpaatUnspecified.ToPointer(),
                    MtrcbRating: shared.ContentRatingMtrcbRatingEnumMtrcbR13.ToPointer(),
                    NbcRating: shared.ContentRatingNbcRatingEnumNbcUnrated.ToPointer(),
                    NbcplRating: shared.ContentRatingNbcplRatingEnumNbcplIv.ToPointer(),
                    NfrcRating: shared.ContentRatingNfrcRatingEnumNfrcA.ToPointer(),
                    NfvcbRating: shared.ContentRatingNfvcbRatingEnumNfvcb15.ToPointer(),
                    NkclvRating: shared.ContentRatingNkclvRatingEnumNkclvUnspecified.ToPointer(),
                    NmcRating: shared.ContentRatingNmcRatingEnumNmc18plus.ToPointer(),
                    OflcRating: shared.ContentRatingOflcRatingEnumOflcM.ToPointer(),
                    PefilmRating: shared.ContentRatingPefilmRatingEnumPefilm14.ToPointer(),
                    RcnofRating: shared.ContentRatingRcnofRatingEnumRcnofIv.ToPointer(),
                    ResorteviolenciaRating: shared.ContentRatingResorteviolenciaRatingEnumResorteviolenciaC.ToPointer(),
                    RtcRating: shared.ContentRatingRtcRatingEnumRtcUnspecified.ToPointer(),
                    RteRating: shared.ContentRatingRteRatingEnumRtePs.ToPointer(),
                    RussiaRating: shared.ContentRatingRussiaRatingEnumRussia12.ToPointer(),
                    SkfilmRating: shared.ContentRatingSkfilmRatingEnumSkfilmG.ToPointer(),
                    SmaisRating: shared.ContentRatingSmaisRatingEnumSmais18.ToPointer(),
                    SmsaRating: shared.ContentRatingSmsaRatingEnumSmsa15.ToPointer(),
                    TvpgRating: shared.ContentRatingTvpgRatingEnumPg14.ToPointer(),
                    YtRating: shared.ContentRatingYtRatingEnumYtAgeRestricted.ToPointer(),
                },
                CountryRestriction: &shared.AccessPolicy{
                    Allowed: sdk.Bool(false),
                    Exception: []string{
                        "recusandae",
                        "a",
                        "consectetur",
                    },
                },
                Definition: shared.VideoContentDetailsDefinitionEnumHd.ToPointer(),
                Dimension: sdk.String("voluptatibus"),
                Duration: sdk.String("assumenda"),
                HasCustomThumbnail: sdk.Bool(false),
                LicensedContent: sdk.Bool(false),
                Projection: shared.VideoContentDetailsProjectionEnumThreeHundredAndSixty.ToPointer(),
                RegionRestriction: &shared.VideoContentDetailsRegionRestriction{
                    Allowed: []string{
                        "delectus",
                        "odio",
                        "voluptatibus",
                    },
                    Blocked: []string{
                        "quam",
                    },
                },
            },
            Etag: sdk.String("omnis"),
            FileDetails: &shared.VideoFileDetails{
                AudioStreams: []shared.VideoFileDetailsAudioStream{
                    shared.VideoFileDetailsAudioStream{
                        BitrateBps: sdk.String("asperiores"),
                        ChannelCount: sdk.Int64(266289),
                        Codec: sdk.String("facere"),
                        Vendor: sdk.String("neque"),
                    },
                    shared.VideoFileDetailsAudioStream{
                        BitrateBps: sdk.String("quis"),
                        ChannelCount: sdk.Int64(448407),
                        Codec: sdk.String("sed"),
                        Vendor: sdk.String("non"),
                    },
                    shared.VideoFileDetailsAudioStream{
                        BitrateBps: sdk.String("porro"),
                        ChannelCount: sdk.Int64(852610),
                        Codec: sdk.String("soluta"),
                        Vendor: sdk.String("ipsa"),
                    },
                },
                BitrateBps: sdk.String("reiciendis"),
                Container: sdk.String("labore"),
                CreationTime: sdk.String("vero"),
                DurationMs: sdk.String("eos"),
                FileName: sdk.String("quas"),
                FileSize: sdk.String("quasi"),
                FileType: shared.VideoFileDetailsFileTypeEnumVideo.ToPointer(),
                VideoStreams: []shared.VideoFileDetailsVideoStream{
                    shared.VideoFileDetailsVideoStream{
                        AspectRatio: sdk.Float64(4835.01),
                        BitrateBps: sdk.String("fugiat"),
                        Codec: sdk.String("enim"),
                        FrameRateFps: sdk.Float64(4357.13),
                        HeightPixels: sdk.Int64(512408),
                        Rotation: shared.VideoFileDetailsVideoStreamRotationEnumClockwise.ToPointer(),
                        Vendor: sdk.String("magnam"),
                        WidthPixels: sdk.Int64(882157),
                    },
                    shared.VideoFileDetailsVideoStream{
                        AspectRatio: sdk.Float64(8618.23),
                        BitrateBps: sdk.String("repudiandae"),
                        Codec: sdk.String("quibusdam"),
                        FrameRateFps: sdk.Float64(5057.99),
                        HeightPixels: sdk.Int64(315465),
                        Rotation: shared.VideoFileDetailsVideoStreamRotationEnumCounterClockwise.ToPointer(),
                        Vendor: sdk.String("unde"),
                        WidthPixels: sdk.Int64(61498),
                    },
                    shared.VideoFileDetailsVideoStream{
                        AspectRatio: sdk.Float64(4301.81),
                        BitrateBps: sdk.String("nostrum"),
                        Codec: sdk.String("eveniet"),
                        FrameRateFps: sdk.Float64(3896.3),
                        HeightPixels: sdk.Int64(187361),
                        Rotation: shared.VideoFileDetailsVideoStreamRotationEnumUpsideDown.ToPointer(),
                        Vendor: sdk.String("quidem"),
                        WidthPixels: sdk.Int64(848649),
                    },
                },
            },
            ID: sdk.String("fc2032b6-c879-4923-b7e1-3584f7ae12c6"),
            Kind: sdk.String("praesentium"),
            LiveStreamingDetails: &shared.VideoLiveStreamingDetails{
                ActiveLiveChatID: sdk.String("natus"),
                ActualEndTime: types.MustTimeFromString("2022-01-20T12:09:35.713Z"),
                ActualStartTime: types.MustTimeFromString("2022-09-25T19:14:36.297Z"),
                ConcurrentViewers: sdk.String("eligendi"),
                ScheduledEndTime: types.MustTimeFromString("2022-08-25T17:30:39.266Z"),
                ScheduledStartTime: types.MustTimeFromString("2022-08-23T23:11:51.264Z"),
            },
            Localizations: map[string]shared.VideoLocalization{
                "inventore": shared.VideoLocalization{
                    Description: sdk.String("voluptate"),
                    Title: sdk.String("Mr."),
                },
                "dolorem": shared.VideoLocalization{
                    Description: sdk.String("eaque"),
                    Title: sdk.String("Mrs."),
                },
            },
            MonetizationDetails: &shared.VideoMonetizationDetails{
                Access: &shared.AccessPolicy{
                    Allowed: sdk.Bool(false),
                    Exception: []string{
                        "voluptate",
                    },
                },
            },
            Player: &shared.VideoPlayer{
                EmbedHeight: sdk.String("voluptate"),
                EmbedHTML: sdk.String("pariatur"),
                EmbedWidth: sdk.String("minus"),
            },
            ProcessingDetails: &shared.VideoProcessingDetails{
                EditorSuggestionsAvailability: sdk.String("a"),
                FileDetailsAvailability: sdk.String("fuga"),
                ProcessingFailureReason: shared.VideoProcessingDetailsProcessingFailureReasonEnumStreamingFailed.ToPointer(),
                ProcessingIssuesAvailability: sdk.String("cupiditate"),
                ProcessingProgress: &shared.VideoProcessingDetailsProcessingProgress{
                    PartsProcessed: sdk.String("at"),
                    PartsTotal: sdk.String("doloribus"),
                    TimeLeftMs: sdk.String("omnis"),
                },
                ProcessingStatus: shared.VideoProcessingDetailsProcessingStatusEnumSucceeded.ToPointer(),
                TagSuggestionsAvailability: sdk.String("exercitationem"),
                ThumbnailsAvailability: sdk.String("voluptates"),
            },
            ProjectDetails: map[string]interface{}{
                "quis": "commodi",
            },
            RecordingDetails: &shared.VideoRecordingDetails{
                Location: &shared.GeoPoint{
                    Altitude: sdk.Float64(4264.81),
                    Latitude: sdk.Float64(5228.24),
                    Longitude: sdk.Float64(3972.68),
                },
                LocationDescription: sdk.String("aperiam"),
                RecordingDate: types.MustTimeFromString("2022-09-16T12:51:45.497Z"),
            },
            Snippet: &shared.VideoSnippet{
                CategoryID: sdk.String("itaque"),
                ChannelID: sdk.String("unde"),
                ChannelTitle: sdk.String("cumque"),
                DefaultAudioLanguage: sdk.String("dolor"),
                DefaultLanguage: sdk.String("repellendus"),
                Description: sdk.String("temporibus"),
                LiveBroadcastContent: shared.VideoSnippetLiveBroadcastContentEnumCompleted.ToPointer(),
                Localized: &shared.VideoLocalization{
                    Description: sdk.String("minima"),
                    Title: sdk.String("Dr."),
                },
                PublishedAt: types.MustTimeFromString("2022-11-20T07:29:54.943Z"),
                Tags: []string{
                    "facere",
                },
                Thumbnails: &shared.ThumbnailDetails{
                    High: &shared.Thumbnail{
                        Height: sdk.Int64(937123),
                        URL: sdk.String("laborum"),
                        Width: sdk.Int64(118020),
                    },
                    Maxres: &shared.Thumbnail{
                        Height: sdk.Int64(32737),
                        URL: sdk.String("odit"),
                        Width: sdk.Int64(398847),
                    },
                    Medium: &shared.Thumbnail{
                        Height: sdk.Int64(862666),
                        URL: sdk.String("enim"),
                        Width: sdk.Int64(254288),
                    },
                    Standard: &shared.Thumbnail{
                        Height: sdk.Int64(103193),
                        URL: sdk.String("est"),
                        Width: sdk.Int64(309852),
                    },
                },
                Title: sdk.String("Dr."),
            },
            Statistics: &shared.VideoStatistics{
                CommentCount: sdk.String("vitae"),
                DislikeCount: sdk.String("omnis"),
                FavoriteCount: sdk.String("alias"),
                LikeCount: sdk.String("sapiente"),
                ViewCount: sdk.String("officiis"),
            },
            Status: &shared.VideoStatus{
                Embeddable: sdk.Bool(false),
                FailureReason: shared.VideoStatusFailureReasonEnumCodec.ToPointer(),
                License: shared.VideoStatusLicenseEnumYoutube.ToPointer(),
                MadeForKids: sdk.Bool(false),
                PrivacyStatus: shared.VideoStatusPrivacyStatusEnumPublic.ToPointer(),
                PublicStatsViewable: sdk.Bool(false),
                PublishAt: types.MustTimeFromString("2022-06-11T04:19:40.908Z"),
                RejectionReason: shared.VideoStatusRejectionReasonEnumCopyright.ToPointer(),
                SelfDeclaredMadeForKids: sdk.Bool(false),
                UploadStatus: shared.VideoStatusUploadStatusEnumRejected.ToPointer(),
            },
            Suggestions: &shared.VideoSuggestions{
                EditorSuggestions: []shared.VideoSuggestionsEditorSuggestionsEnum{
                    shared.VideoSuggestionsEditorSuggestionsEnumAudioQuietAudioSwap,
                    shared.VideoSuggestionsEditorSuggestionsEnumAudioQuietAudioSwap,
                    shared.VideoSuggestionsEditorSuggestionsEnumVideoAutoLevels,
                    shared.VideoSuggestionsEditorSuggestionsEnumAudioQuietAudioSwap,
                },
                ProcessingErrors: []shared.VideoSuggestionsProcessingErrorsEnum{
                    shared.VideoSuggestionsProcessingErrorsEnumArchiveFile,
                    shared.VideoSuggestionsProcessingErrorsEnumArchiveFile,
                    shared.VideoSuggestionsProcessingErrorsEnumArchiveFile,
                },
                ProcessingHints: []shared.VideoSuggestionsProcessingHintsEnum{
                    shared.VideoSuggestionsProcessingHintsEnumSendBestQualityVideo,
                    shared.VideoSuggestionsProcessingHintsEnumSpatialAudio,
                    shared.VideoSuggestionsProcessingHintsEnumSendBestQualityVideo,
                },
                ProcessingWarnings: []shared.VideoSuggestionsProcessingWarningsEnum{
                    shared.VideoSuggestionsProcessingWarningsEnumUnknownContainer,
                    shared.VideoSuggestionsProcessingWarningsEnumProblematicAudioCodec,
                },
                TagSuggestions: []shared.VideoSuggestionsTagSuggestion{
                    shared.VideoSuggestionsTagSuggestion{
                        CategoryRestricts: []string{
                            "aliquam",
                            "repudiandae",
                            "amet",
                        },
                        Tag: sdk.String("natus"),
                    },
                    shared.VideoSuggestionsTagSuggestion{
                        CategoryRestricts: []string{
                            "officiis",
                        },
                        Tag: sdk.String("eum"),
                    },
                    shared.VideoSuggestionsTagSuggestion{
                        CategoryRestricts: []string{
                            "placeat",
                            "ab",
                            "ad",
                        },
                        Tag: sdk.String("blanditiis"),
                    },
                    shared.VideoSuggestionsTagSuggestion{
                        CategoryRestricts: []string{
                            "labore",
                            "impedit",
                            "ut",
                            "earum",
                        },
                        Tag: sdk.String("ullam"),
                    },
                },
            },
            TopicDetails: &shared.VideoTopicDetails{
                RelevantTopicIds: []string{
                    "enim",
                    "cupiditate",
                },
                TopicCategories: []string{
                    "itaque",
                    "fuga",
                    "consectetur",
                },
                TopicIds: []string{
                    "aspernatur",
                    "explicabo",
                },
            },
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eveniet"),
        Fields: sdk.String("sint"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("qui"),
        OnBehalfOfContentOwner: sdk.String("accusantium"),
        Part: []string{
            "impedit",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.YoutubeVideosUpdateSecurity{
        Option1: &operations.YoutubeVideosUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Video != nil {
        // handle response
    }
}
```
