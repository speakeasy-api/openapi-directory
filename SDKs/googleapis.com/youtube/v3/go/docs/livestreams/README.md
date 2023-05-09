# LiveStreams

### Available Operations

* [YoutubeLiveStreamsDelete](#youtubelivestreamsdelete) - Deletes an existing stream for the authenticated user.
* [YoutubeLiveStreamsInsert](#youtubelivestreamsinsert) - Inserts a new stream for the authenticated user.
* [YoutubeLiveStreamsList](#youtubelivestreamslist) - Retrieve the list of streams associated with the given channel. --
* [YoutubeLiveStreamsUpdate](#youtubelivestreamsupdate) - Updates an existing stream for the authenticated user.

## YoutubeLiveStreamsDelete

Deletes an existing stream for the authenticated user.

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
    res, err := s.LiveStreams.YoutubeLiveStreamsDelete(ctx, operations.YoutubeLiveStreamsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("quisquam"),
        ID: "5fde10a0-ce21-469e-9100-19c6dc5e3476",
        Key: sdk.String("sed"),
        OauthToken: sdk.String("odio"),
        OnBehalfOfContentOwner: sdk.String("natus"),
        OnBehalfOfContentOwnerChannel: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.YoutubeLiveStreamsDeleteSecurity{
        Option1: &operations.YoutubeLiveStreamsDeleteSecurityOption1{
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

## YoutubeLiveStreamsInsert

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
    res, err := s.LiveStreams.YoutubeLiveStreamsInsert(ctx, operations.YoutubeLiveStreamsInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LiveStream: &shared.LiveStream{
            Cdn: &shared.CdnSettings{
                Format: sdk.String("itaque"),
                FrameRate: shared.CdnSettingsFrameRateEnumSixtyfps.ToPointer(),
                IngestionInfo: &shared.IngestionInfo{
                    BackupIngestionAddress: sdk.String("unde"),
                    IngestionAddress: sdk.String("modi"),
                    RtmpsBackupIngestionAddress: sdk.String("perspiciatis"),
                    RtmpsIngestionAddress: sdk.String("hic"),
                    StreamName: sdk.String("cum"),
                },
                IngestionType: shared.CdnSettingsIngestionTypeEnumRtmp.ToPointer(),
                Resolution: shared.CdnSettingsResolutionEnumOneThousandFourHundredAndFortyp.ToPointer(),
            },
            ContentDetails: &shared.LiveStreamContentDetails{
                ClosedCaptionsIngestionURL: sdk.String("nam"),
                IsReusable: sdk.Bool(false),
            },
            Etag: sdk.String("incidunt"),
            ID: sdk.String("ecae6c3d-5db3-4ade-bd5d-aea4c506a8aa"),
            Kind: sdk.String("occaecati"),
            Snippet: &shared.LiveStreamSnippet{
                ChannelID: sdk.String("labore"),
                Description: sdk.String("quo"),
                IsDefaultStream: sdk.Bool(false),
                PublishedAt: types.MustTimeFromString("2022-11-09T14:41:22.235Z"),
                Title: sdk.String("Mrs."),
            },
            Status: &shared.LiveStreamStatus{
                HealthStatus: &shared.LiveStreamHealthStatus{
                    ConfigurationIssues: []shared.LiveStreamConfigurationIssue{
                        shared.LiveStreamConfigurationIssue{
                            Description: sdk.String("quaerat"),
                            Reason: sdk.String("eligendi"),
                            Severity: shared.LiveStreamConfigurationIssueSeverityEnumError.ToPointer(),
                            Type: shared.LiveStreamConfigurationIssueTypeEnumVideoCodec.ToPointer(),
                        },
                        shared.LiveStreamConfigurationIssue{
                            Description: sdk.String("officiis"),
                            Reason: sdk.String("unde"),
                            Severity: shared.LiveStreamConfigurationIssueSeverityEnumError.ToPointer(),
                            Type: shared.LiveStreamConfigurationIssueTypeEnumVideoInterlaceMismatch.ToPointer(),
                        },
                    },
                    LastUpdateTimeSeconds: sdk.String("mollitia"),
                    Status: shared.LiveStreamHealthStatusStatusEnumOk.ToPointer(),
                },
                StreamStatus: shared.LiveStreamStatusStreamStatusEnumReady.ToPointer(),
            },
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("facere"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("quasi"),
        OnBehalfOfContentOwner: sdk.String("deserunt"),
        OnBehalfOfContentOwnerChannel: sdk.String("quod"),
        Part: []string{
            "doloremque",
            "voluptatem",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("maxime"),
    }, operations.YoutubeLiveStreamsInsertSecurity{
        Option1: &operations.YoutubeLiveStreamsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiveStream != nil {
        // handle response
    }
}
```

## YoutubeLiveStreamsList

Retrieve the list of streams associated with the given channel. --

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
    res, err := s.LiveStreams.YoutubeLiveStreamsList(ctx, operations.YoutubeLiveStreamsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("similique"),
        Fields: sdk.String("porro"),
        ID: []string{
            "quae",
            "magni",
            "officiis",
        },
        Key: sdk.String("sed"),
        MaxResults: sdk.Int64(898111),
        Mine: sdk.Bool(false),
        OauthToken: sdk.String("impedit"),
        OnBehalfOfContentOwner: sdk.String("ipsa"),
        OnBehalfOfContentOwnerChannel: sdk.String("excepturi"),
        PageToken: sdk.String("a"),
        Part: []string{
            "laudantium",
            "maiores",
            "alias",
            "asperiores",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.YoutubeLiveStreamsListSecurity{
        Option1: &operations.YoutubeLiveStreamsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiveStreamListResponse != nil {
        // handle response
    }
}
```

## YoutubeLiveStreamsUpdate

Updates an existing stream for the authenticated user.

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
    res, err := s.LiveStreams.YoutubeLiveStreamsUpdate(ctx, operations.YoutubeLiveStreamsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LiveStream: &shared.LiveStream{
            Cdn: &shared.CdnSettings{
                Format: sdk.String("doloribus"),
                FrameRate: shared.CdnSettingsFrameRateEnumThirtyfps.ToPointer(),
                IngestionInfo: &shared.IngestionInfo{
                    BackupIngestionAddress: sdk.String("eius"),
                    IngestionAddress: sdk.String("esse"),
                    RtmpsBackupIngestionAddress: sdk.String("in"),
                    RtmpsIngestionAddress: sdk.String("eligendi"),
                    StreamName: sdk.String("quasi"),
                },
                IngestionType: shared.CdnSettingsIngestionTypeEnumRtmp.ToPointer(),
                Resolution: shared.CdnSettingsResolutionEnumVariable.ToPointer(),
            },
            ContentDetails: &shared.LiveStreamContentDetails{
                ClosedCaptionsIngestionURL: sdk.String("excepturi"),
                IsReusable: sdk.Bool(false),
            },
            Etag: sdk.String("accusantium"),
            ID: sdk.String("2c14125b-0960-4a66-8151-a472af923c59"),
            Kind: sdk.String("aliquam"),
            Snippet: &shared.LiveStreamSnippet{
                ChannelID: sdk.String("excepturi"),
                Description: sdk.String("maiores"),
                IsDefaultStream: sdk.Bool(false),
                PublishedAt: types.MustTimeFromString("2022-07-06T22:48:19.114Z"),
                Title: sdk.String("Dr."),
            },
            Status: &shared.LiveStreamStatus{
                HealthStatus: &shared.LiveStreamHealthStatus{
                    ConfigurationIssues: []shared.LiveStreamConfigurationIssue{
                        shared.LiveStreamConfigurationIssue{
                            Description: sdk.String("nemo"),
                            Reason: sdk.String("ipsa"),
                            Severity: shared.LiveStreamConfigurationIssueSeverityEnumError.ToPointer(),
                            Type: shared.LiveStreamConfigurationIssueTypeEnumVideoIngestionStarved.ToPointer(),
                        },
                    },
                    LastUpdateTimeSeconds: sdk.String("quas"),
                    Status: shared.LiveStreamHealthStatusStatusEnumBad.ToPointer(),
                },
                StreamStatus: shared.LiveStreamStatusStreamStatusEnumReady.ToPointer(),
            },
        },
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("perspiciatis"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("dicta"),
        OnBehalfOfContentOwner: sdk.String("minus"),
        OnBehalfOfContentOwnerChannel: sdk.String("commodi"),
        Part: []string{
            "porro",
            "tempore",
            "quidem",
            "modi",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("eius"),
    }, operations.YoutubeLiveStreamsUpdateSecurity{
        Option1: &operations.YoutubeLiveStreamsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiveStream != nil {
        // handle response
    }
}
```
