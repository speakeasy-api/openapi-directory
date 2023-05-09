# V3

### Available Operations

* [PlayablelocationsLogImpressions](#playablelocationslogimpressions) - Logs new events when playable locations are displayed, and when they are interacted with. Impressions are not partially saved; either all impressions are saved and this request succeeds, or no impressions are saved, and this request fails.
* [PlayablelocationsLogPlayerReports](#playablelocationslogplayerreports) - Logs bad playable location reports submitted by players. Reports are not partially saved; either all reports are saved and this request succeeds, or no reports are saved, and this request fails.
* [PlayablelocationsSamplePlayableLocations](#playablelocationssampleplayablelocations) - Returns a set of playable locations that lie within a specified area, that satisfy optional filter criteria. Note: Identical `SamplePlayableLocations` requests can return different results as the state of the world changes over time.

## PlayablelocationsLogImpressions

Logs new events when playable locations are displayed, and when they are interacted with. Impressions are not partially saved; either all impressions are saved and this request succeeds, or no impressions are saved, and this request fails.

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
    res, err := s.V3.PlayablelocationsLogImpressions(ctx, operations.PlayablelocationsLogImpressionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleMapsPlayablelocationsV3LogImpressionsRequest: &shared.GoogleMapsPlayablelocationsV3LogImpressionsRequest{
            ClientInfo: &shared.GoogleMapsUnityClientInfo{
                APIClient: sdk.String("veritatis"),
                ApplicationID: sdk.String("deserunt"),
                ApplicationVersion: sdk.String("perferendis"),
                DeviceModel: sdk.String("ipsam"),
                LanguageCode: sdk.String("repellendus"),
                OperatingSystem: sdk.String("sapiente"),
                OperatingSystemBuild: sdk.String("quo"),
                Platform: shared.GoogleMapsUnityClientInfoPlatformEnumEditor.ToPointer(),
            },
            Impressions: []shared.GoogleMapsPlayablelocationsV3Impression{
                shared.GoogleMapsPlayablelocationsV3Impression{
                    GameObjectType: sdk.Int(870088),
                    ImpressionType: shared.GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnumInteracted.ToPointer(),
                    LocationName: sdk.String("molestiae"),
                },
                shared.GoogleMapsPlayablelocationsV3Impression{
                    GameObjectType: sdk.Int(799159),
                    ImpressionType: shared.GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnumInteracted.ToPointer(),
                    LocationName: sdk.String("esse"),
                },
                shared.GoogleMapsPlayablelocationsV3Impression{
                    GameObjectType: sdk.Int(520478),
                    ImpressionType: shared.GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnumInteracted.ToPointer(),
                    LocationName: sdk.String("dolorum"),
                },
                shared.GoogleMapsPlayablelocationsV3Impression{
                    GameObjectType: sdk.Int(118274),
                    ImpressionType: shared.GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnumInteracted.ToPointer(),
                    LocationName: sdk.String("officia"),
                },
            },
            RequestID: sdk.String("occaecati"),
        },
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("optio"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleMapsPlayablelocationsV3LogImpressionsResponse != nil {
        // handle response
    }
}
```

## PlayablelocationsLogPlayerReports

Logs bad playable location reports submitted by players. Reports are not partially saved; either all reports are saved and this request succeeds, or no reports are saved, and this request fails.

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
    res, err := s.V3.PlayablelocationsLogPlayerReports(ctx, operations.PlayablelocationsLogPlayerReportsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleMapsPlayablelocationsV3LogPlayerReportsRequest: &shared.GoogleMapsPlayablelocationsV3LogPlayerReportsRequest{
            ClientInfo: &shared.GoogleMapsUnityClientInfo{
                APIClient: sdk.String("impedit"),
                ApplicationID: sdk.String("cum"),
                ApplicationVersion: sdk.String("esse"),
                DeviceModel: sdk.String("ipsum"),
                LanguageCode: sdk.String("excepturi"),
                OperatingSystem: sdk.String("aspernatur"),
                OperatingSystemBuild: sdk.String("perferendis"),
                Platform: shared.GoogleMapsUnityClientInfoPlatformEnumMacOs.ToPointer(),
            },
            PlayerReports: []shared.GoogleMapsPlayablelocationsV3PlayerReport{
                shared.GoogleMapsPlayablelocationsV3PlayerReport{
                    LanguageCode: sdk.String("sed"),
                    LocationName: sdk.String("iste"),
                    ReasonDetails: sdk.String("dolor"),
                    Reasons: []shared.GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum{
                        shared.GoogleMapsPlayablelocationsV3PlayerReportReasonsEnumNotPedestrianAccessible,
                        shared.GoogleMapsPlayablelocationsV3PlayerReportReasonsEnumTemporarilyInaccessible,
                        shared.GoogleMapsPlayablelocationsV3PlayerReportReasonsEnumTemporarilyInaccessible,
                    },
                },
                shared.GoogleMapsPlayablelocationsV3PlayerReport{
                    LanguageCode: sdk.String("fuga"),
                    LocationName: sdk.String("in"),
                    ReasonDetails: sdk.String("corporis"),
                    Reasons: []shared.GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum{
                        shared.GoogleMapsPlayablelocationsV3PlayerReportReasonsEnumNotPedestrianAccessible,
                        shared.GoogleMapsPlayablelocationsV3PlayerReportReasonsEnumTemporarilyInaccessible,
                        shared.GoogleMapsPlayablelocationsV3PlayerReportReasonsEnumPermanentlyClosed,
                    },
                },
                shared.GoogleMapsPlayablelocationsV3PlayerReport{
                    LanguageCode: sdk.String("architecto"),
                    LocationName: sdk.String("ipsa"),
                    ReasonDetails: sdk.String("reiciendis"),
                    Reasons: []shared.GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum{
                        shared.GoogleMapsPlayablelocationsV3PlayerReportReasonsEnumNotOpenToPublic,
                        shared.GoogleMapsPlayablelocationsV3PlayerReportReasonsEnumPermanentlyClosed,
                        shared.GoogleMapsPlayablelocationsV3PlayerReportReasonsEnumOther,
                    },
                },
            },
            RequestID: sdk.String("dolorem"),
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("enim"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleMapsPlayablelocationsV3LogPlayerReportsResponse != nil {
        // handle response
    }
}
```

## PlayablelocationsSamplePlayableLocations

Returns a set of playable locations that lie within a specified area, that satisfy optional filter criteria. Note: Identical `SamplePlayableLocations` requests can return different results as the state of the world changes over time.

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
    res, err := s.V3.PlayablelocationsSamplePlayableLocations(ctx, operations.PlayablelocationsSamplePlayableLocationsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest: &shared.GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest{
            AreaFilter: &shared.GoogleMapsPlayablelocationsV3SampleAreaFilter{
                S2CellID: sdk.String("culpa"),
            },
            Criteria: []shared.GoogleMapsPlayablelocationsV3SampleCriterion{
                shared.GoogleMapsPlayablelocationsV3SampleCriterion{
                    FieldsToReturn: sdk.String("sapiente"),
                    Filter: &shared.GoogleMapsPlayablelocationsV3SampleFilter{
                        IncludedTypes: []string{
                            "mollitia",
                        },
                        MaxLocationCount: sdk.Int(208876),
                        Spacing: &shared.GoogleMapsPlayablelocationsV3SampleSpacingOptions{
                            MinSpacingMeters: sdk.Float64(6350.59),
                            PointType: shared.GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnumPointTypeUnspecified.ToPointer(),
                        },
                    },
                    GameObjectType: sdk.Int(995300),
                },
                shared.GoogleMapsPlayablelocationsV3SampleCriterion{
                    FieldsToReturn: sdk.String("mollitia"),
                    Filter: &shared.GoogleMapsPlayablelocationsV3SampleFilter{
                        IncludedTypes: []string{
                            "numquam",
                            "commodi",
                            "quam",
                        },
                        MaxLocationCount: sdk.Int(474697),
                        Spacing: &shared.GoogleMapsPlayablelocationsV3SampleSpacingOptions{
                            MinSpacingMeters: sdk.Float64(2444.25),
                            PointType: shared.GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnumCenterPoint.ToPointer(),
                        },
                    },
                    GameObjectType: sdk.Int(158969),
                },
                shared.GoogleMapsPlayablelocationsV3SampleCriterion{
                    FieldsToReturn: sdk.String("quis"),
                    Filter: &shared.GoogleMapsPlayablelocationsV3SampleFilter{
                        IncludedTypes: []string{
                            "laborum",
                        },
                        MaxLocationCount: sdk.Int(656330),
                        Spacing: &shared.GoogleMapsPlayablelocationsV3SampleSpacingOptions{
                            MinSpacingMeters: sdk.Float64(3172.02),
                            PointType: shared.GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnumPointTypeUnspecified.ToPointer(),
                        },
                    },
                    GameObjectType: sdk.Int(778346),
                },
                shared.GoogleMapsPlayablelocationsV3SampleCriterion{
                    FieldsToReturn: sdk.String("sequi"),
                    Filter: &shared.GoogleMapsPlayablelocationsV3SampleFilter{
                        IncludedTypes: []string{
                            "ipsam",
                            "id",
                            "possimus",
                            "aut",
                        },
                        MaxLocationCount: sdk.Int(97101),
                        Spacing: &shared.GoogleMapsPlayablelocationsV3SampleSpacingOptions{
                            MinSpacingMeters: sdk.Float64(6228.46),
                            PointType: shared.GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnumSnappedPoint.ToPointer(),
                        },
                    },
                    GameObjectType: sdk.Int(673660),
                },
            },
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("vero"),
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse != nil {
        // handle response
    }
}
```
