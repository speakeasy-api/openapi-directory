# Placements

### Available Operations

* [DfareportingPlacementsGeneratetags](#dfareportingplacementsgeneratetags) - Generates tags for a placement.
* [DfareportingPlacementsGet](#dfareportingplacementsget) - Gets one placement by ID.
* [DfareportingPlacementsInsert](#dfareportingplacementsinsert) - Inserts a new placement.
* [DfareportingPlacementsList](#dfareportingplacementslist) - Retrieves a list of placements, possibly filtered. This method supports paging.
* [DfareportingPlacementsPatch](#dfareportingplacementspatch) - Updates an existing placement. This method supports patch semantics.
* [DfareportingPlacementsUpdate](#dfareportingplacementsupdate) - Updates an existing placement.

## DfareportingPlacementsGeneratetags

Generates tags for a placement.

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
    res, err := s.Placements.DfareportingPlacementsGeneratetags(ctx, operations.DfareportingPlacementsGeneratetagsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("culpa"),
        CampaignID: sdk.String("excepturi"),
        Fields: sdk.String("et"),
        Key: sdk.String("non"),
        OauthToken: sdk.String("odit"),
        PlacementIds: []string{
            "voluptatem",
            "veniam",
            "consequuntur",
            "iure",
        },
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dolor",
        QuotaUser: sdk.String("quia"),
        TagFormats: []DfareportingPlacementsGeneratetagsTagFormatsEnum{
            operations.DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagInternalRedirect,
            operations.DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagIframeJavascript,
            operations.DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagJavascriptLegacy,
        },
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("at"),
    }, operations.DfareportingPlacementsGeneratetagsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlacementsGenerateTagsResponse != nil {
        // handle response
    }
}
```

## DfareportingPlacementsGet

Gets one placement by ID.

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
    res, err := s.Placements.DfareportingPlacementsGet(ctx, operations.DfareportingPlacementsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("unde"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("maiores"),
        ID: "c8745005-e9d3-4d93-8e03-6f5c388664f6",
        Key: sdk.String("error"),
        OauthToken: sdk.String("laudantium"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "corporis",
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.DfareportingPlacementsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Placement != nil {
        // handle response
    }
}
```

## DfareportingPlacementsInsert

Inserts a new placement.

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
    res, err := s.Placements.DfareportingPlacementsInsert(ctx, operations.DfareportingPlacementsInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Placement: &shared.Placement{
            AccountID: sdk.String("fugit"),
            AdBlockingOptOut: sdk.Bool(false),
            AdditionalSizes: []shared.Size{
                shared.Size{
                    Height: sdk.Int(151641),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("similique"),
                    Kind: sdk.String("repudiandae"),
                    Width: sdk.Int(829393),
                },
                shared.Size{
                    Height: sdk.Int(428476),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("fuga"),
                    Kind: sdk.String("est"),
                    Width: sdk.Int(947182),
                },
                shared.Size{
                    Height: sdk.Int(538750),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("ea"),
                    Kind: sdk.String("nesciunt"),
                    Width: sdk.Int(772726),
                },
                shared.Size{
                    Height: sdk.Int(176157),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("praesentium"),
                    Kind: sdk.String("illum"),
                    Width: sdk.Int(49491),
                },
            },
            AdvertiserID: sdk.String("incidunt"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("aut"),
                Etag: sdk.String("eligendi"),
                ID: sdk.String("69a3d906-f6eb-4d5a-97ec-7394f25f634b"),
                Kind: sdk.String("ratione"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("dolorem"),
            },
            Archived: sdk.Bool(false),
            CampaignID: sdk.String("accusantium"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ducimus"),
                Etag: sdk.String("inventore"),
                ID: sdk.String("4e6be8c3-e09c-464d-b42a-c299a6e5e7ae"),
                Kind: sdk.String("sapiente"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("amet"),
            },
            Comment: sdk.String("quaerat"),
            Compatibility: shared.PlacementCompatibilityEnumDisplay.ToPointer(),
            ContentCategoryID: sdk.String("qui"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("repudiandae"),
            },
            DirectorySiteID: sdk.String("natus"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("modi"),
                Etag: sdk.String("ullam"),
                ID: sdk.String("f53743ef-de11-4982-a1f9-b1f7d9affe69"),
                Kind: sdk.String("aliquid"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("sed"),
            },
            ExternalID: sdk.String("mollitia"),
            ID: sdk.String("minus"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("recusandae"),
                Etag: sdk.String("recusandae"),
                ID: sdk.String("fb04f8c5-12ca-4abe-a708-ed5798d385d4"),
                Kind: sdk.String("ea"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("ullam"),
            },
            KeyName: sdk.String("cupiditate"),
            Kind: sdk.String("omnis"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("quibusdam"),
            },
            LookbackConfiguration: &shared.LookbackConfiguration{
                ClickDuration: sdk.Int(341516),
                PostImpressionActivitiesDuration: sdk.Int(770313),
            },
            Name: sdk.String("Sheila Gusikowski"),
            PartnerWrappingData: &shared.MeasurementPartnerWrappingData{
                LinkStatus: shared.MeasurementPartnerWrappingDataLinkStatusEnumMeasurementPartnerLinkFailure.ToPointer(),
                MeasurementPartner: shared.MeasurementPartnerWrappingDataMeasurementPartnerEnumIntegralAdScience.ToPointer(),
                TagWrappingMode: shared.MeasurementPartnerWrappingDataTagWrappingModeEnumVpaidOnlyFiltering.ToPointer(),
                WrappedTag: sdk.String("minima"),
            },
            PaymentApproved: sdk.Bool(false),
            PaymentSource: shared.PlacementPaymentSourceEnumPlacementAgencyPaid.ToPointer(),
            PlacementGroupID: sdk.String("dolores"),
            PlacementGroupIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("accusantium"),
                Etag: sdk.String("error"),
                ID: sdk.String("e9a2253b-6d76-4588-aeea-e5fd4b39f8a1"),
                Kind: sdk.String("eius"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("perferendis"),
            },
            PlacementStrategyID: sdk.String("aliquid"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostMonthly.ToPointer(),
                EndDate: types.MustDateFromString("2021-01-23"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("sunt"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2021-10-01"),
                        PricingComment: sdk.String("laudantium"),
                        RateOrCostNanos: sdk.String("laboriosam"),
                        StartDate: types.MustDateFromString("2021-05-06"),
                        Units: sdk.String("neque"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeFlatRateImpressions.ToPointer(),
                StartDate: types.MustDateFromString("2020-09-24"),
                TestingStartDate: types.MustDateFromString("2021-03-11"),
            },
            Primary: sdk.Bool(false),
            PublisherUpdateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("illo"),
            },
            SiteID: sdk.String("esse"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("enim"),
                Etag: sdk.String("reiciendis"),
                ID: sdk.String("fa906ae5-59b7-42eb-a746-030fe18376c2"),
                Kind: sdk.String("expedita"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("at"),
            },
            Size: &shared.Size{
                Height: sdk.Int(910382),
                Iab: sdk.Bool(false),
                ID: sdk.String("vero"),
                Kind: sdk.String("iure"),
                Width: sdk.Int(400393),
            },
            SslRequired: sdk.Bool(false),
            Status: shared.PlacementStatusEnumPaymentRejected.ToPointer(),
            SubaccountID: sdk.String("perspiciatis"),
            TagFormats: []shared.PlacementTagFormatsEnum{
                shared.PlacementTagFormatsEnumPlacementTagInstreamVideoPrefetchVast4,
            },
            TagSetting: &shared.TagSetting{
                AdditionalKeyValues: sdk.String("temporibus"),
                IncludeClickThroughUrls: sdk.Bool(false),
                IncludeClickTracking: sdk.Bool(false),
                KeywordOption: shared.TagSettingKeywordOptionEnumPlaceholderWithListOfKeywords.ToPointer(),
            },
            VideoActiveViewOptOut: sdk.Bool(false),
            VideoSettings: &shared.VideoSettings{
                CompanionSettings: &shared.CompanionSetting{
                    CompanionsDisabled: sdk.Bool(false),
                    EnabledSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(79021),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("nisi"),
                            Kind: sdk.String("laborum"),
                            Width: sdk.Int(477087),
                        },
                        shared.Size{
                            Height: sdk.Int(691533),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("id"),
                            Kind: sdk.String("dolore"),
                            Width: sdk.Int(465579),
                        },
                        shared.Size{
                            Height: sdk.Int(525538),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("tempora"),
                            Kind: sdk.String("alias"),
                            Width: sdk.Int(297485),
                        },
                        shared.Size{
                            Height: sdk.Int(281698),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("totam"),
                            Kind: sdk.String("unde"),
                            Width: sdk.Int(994532),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("voluptas"),
                },
                DurationSeconds: sdk.Int(489926),
                Kind: sdk.String("dignissimos"),
                ObaEnabled: sdk.Bool(false),
                ObaSettings: &shared.ObaIcon{
                    IconClickThroughURL: sdk.String("ipsa"),
                    IconClickTrackingURL: sdk.String("itaque"),
                    IconViewTrackingURL: sdk.String("earum"),
                    Program: sdk.String("ipsa"),
                    ResourceURL: sdk.String("aliquam"),
                    Size: &shared.Size{
                        Height: sdk.Int(507568),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("doloremque"),
                        Kind: sdk.String("occaecati"),
                        Width: sdk.Int(72285),
                    },
                    XPosition: sdk.String("id"),
                    YPosition: sdk.String("dolores"),
                },
                Orientation: shared.VideoSettingsOrientationEnumPortrait.ToPointer(),
                SkippableSettings: &shared.SkippableSetting{
                    Kind: sdk.String("culpa"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(147597),
                        OffsetSeconds: sdk.Int(367986),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(923003),
                        OffsetSeconds: sdk.Int(917300),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.TranscodeSetting{
                    EnabledVideoFormats: []int{
                        793274,
                        488968,
                    },
                    Kind: sdk.String("ad"),
                },
            },
            VpaidAdapterChoice: shared.PlacementVpaidAdapterChoiceEnumHtml5.ToPointer(),
            WrappingOptOut: sdk.Bool(false),
        },
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("autem"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quam",
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("eveniet"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.DfareportingPlacementsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Placement != nil {
        // handle response
    }
}
```

## DfareportingPlacementsList

Retrieves a list of placements, possibly filtered. This method supports paging.

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
    res, err := s.Placements.DfareportingPlacementsList(ctx, operations.DfareportingPlacementsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vel"),
        AdvertiserIds: []string{
            "perferendis",
            "iste",
            "esse",
            "cupiditate",
        },
        Alt: shared.AltEnumProto.ToPointer(),
        Archived: sdk.Bool(false),
        Callback: sdk.String("nemo"),
        CampaignIds: []string{
            "sapiente",
            "debitis",
            "eum",
        },
        Compatibilities: []DfareportingPlacementsListCompatibilitiesEnum{
            operations.DfareportingPlacementsListCompatibilitiesEnumAppInterstitial,
        },
        ContentCategoryIds: []string{
            "culpa",
            "quisquam",
            "deserunt",
            "nisi",
        },
        DirectorySiteIds: []string{
            "nemo",
            "pariatur",
        },
        Fields: sdk.String("repudiandae"),
        GroupIds: []string{
            "atque",
            "laboriosam",
            "voluptate",
        },
        Ids: []string{
            "veniam",
            "vitae",
        },
        Key: sdk.String("deserunt"),
        MaxEndDate: sdk.String("iste"),
        MaxResults: sdk.Int64(784983),
        MaxStartDate: sdk.String("porro"),
        MinEndDate: sdk.String("eveniet"),
        MinStartDate: sdk.String("autem"),
        OauthToken: sdk.String("quae"),
        PageToken: sdk.String("voluptates"),
        PaymentSource: operations.DfareportingPlacementsListPaymentSourceEnumPlacementPublisherPaid.ToPointer(),
        PlacementStrategyIds: []string{
            "optio",
        },
        PrettyPrint: sdk.Bool(false),
        PricingTypes: []DfareportingPlacementsListPricingTypesEnum{
            operations.DfareportingPlacementsListPricingTypesEnumPricingTypeFlatRateImpressions,
            operations.DfareportingPlacementsListPricingTypesEnumPricingTypeFlatRateImpressions,
        },
        ProfileID: "consectetur",
        QuotaUser: sdk.String("excepturi"),
        SearchString: sdk.String("fuga"),
        SiteIds: []string{
            "ipsam",
            "fuga",
            "magnam",
            "assumenda",
        },
        SizeIds: []string{
            "id",
            "laboriosam",
        },
        SortField: operations.DfareportingPlacementsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingPlacementsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("fugiat"),
    }, operations.DfareportingPlacementsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlacementsListResponse != nil {
        // handle response
    }
}
```

## DfareportingPlacementsPatch

Updates an existing placement. This method supports patch semantics.

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
    res, err := s.Placements.DfareportingPlacementsPatch(ctx, operations.DfareportingPlacementsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Placement: &shared.Placement{
            AccountID: sdk.String("veniam"),
            AdBlockingOptOut: sdk.Bool(false),
            AdditionalSizes: []shared.Size{
                shared.Size{
                    Height: sdk.Int(135918),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("assumenda"),
                    Kind: sdk.String("cupiditate"),
                    Width: sdk.Int(710936),
                },
                shared.Size{
                    Height: sdk.Int(487702),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("assumenda"),
                    Kind: sdk.String("excepturi"),
                    Width: sdk.Int(925137),
                },
            },
            AdvertiserID: sdk.String("eos"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("facere"),
                Etag: sdk.String("iure"),
                ID: sdk.String("fcf55762-9db8-475c-ba89-0282a51f41cf"),
                Kind: sdk.String("iure"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("iste"),
            },
            Archived: sdk.Bool(false),
            CampaignID: sdk.String("iure"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("necessitatibus"),
                Etag: sdk.String("illum"),
                ID: sdk.String("3d724c18-f581-4e98-8ce3-f716600da0e3"),
                Kind: sdk.String("harum"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("laboriosam"),
            },
            Comment: sdk.String("veritatis"),
            Compatibility: shared.PlacementCompatibilityEnumInStreamVideo.ToPointer(),
            ContentCategoryID: sdk.String("ex"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("repellat"),
            },
            DirectorySiteID: sdk.String("earum"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("alias"),
                Etag: sdk.String("sint"),
                ID: sdk.String("d852b53b-32c8-4c7c-bc71-0e1673d905cb"),
                Kind: sdk.String("labore"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("recusandae"),
            },
            ExternalID: sdk.String("illum"),
            ID: sdk.String("itaque"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("asperiores"),
                Etag: sdk.String("amet"),
                ID: sdk.String("c127c390-9955-4282-90dc-bbcd3b121b88"),
                Kind: sdk.String("placeat"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("officiis"),
            },
            KeyName: sdk.String("saepe"),
            Kind: sdk.String("minima"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("saepe"),
            },
            LookbackConfiguration: &shared.LookbackConfiguration{
                ClickDuration: sdk.Int(454717),
                PostImpressionActivitiesDuration: sdk.Int(627864),
            },
            Name: sdk.String("Ella Boyer"),
            PartnerWrappingData: &shared.MeasurementPartnerWrappingData{
                LinkStatus: shared.MeasurementPartnerWrappingDataLinkStatusEnumMeasurementPartnerUnlinked.ToPointer(),
                MeasurementPartner: shared.MeasurementPartnerWrappingDataMeasurementPartnerEnumDoubleVerify.ToPointer(),
                TagWrappingMode: shared.MeasurementPartnerWrappingDataTagWrappingModeEnumVpaidOnlyFiltering.ToPointer(),
                WrappedTag: sdk.String("laudantium"),
            },
            PaymentApproved: sdk.Bool(false),
            PaymentSource: shared.PlacementPaymentSourceEnumPlacementPublisherPaid.ToPointer(),
            PlacementGroupID: sdk.String("deserunt"),
            PlacementGroupIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("aut"),
                Etag: sdk.String("soluta"),
                ID: sdk.String("7d176492-6b0c-4f5e-acb6-ebabe5e0b99f"),
                Kind: sdk.String("velit"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("illo"),
            },
            PlacementStrategyID: sdk.String("amet"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostNone.ToPointer(),
                EndDate: types.MustDateFromString("2021-04-14"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("nisi"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-02-13"),
                        PricingComment: sdk.String("nam"),
                        RateOrCostNanos: sdk.String("soluta"),
                        StartDate: types.MustDateFromString("2022-05-01"),
                        Units: sdk.String("voluptates"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2020-12-04"),
                        PricingComment: sdk.String("recusandae"),
                        RateOrCostNanos: sdk.String("ullam"),
                        StartDate: types.MustDateFromString("2022-05-22"),
                        Units: sdk.String("at"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-12-30"),
                        PricingComment: sdk.String("minus"),
                        RateOrCostNanos: sdk.String("expedita"),
                        StartDate: types.MustDateFromString("2022-08-13"),
                        Units: sdk.String("cupiditate"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeFlatRateImpressions.ToPointer(),
                StartDate: types.MustDateFromString("2022-07-05"),
                TestingStartDate: types.MustDateFromString("2021-03-23"),
            },
            Primary: sdk.Bool(false),
            PublisherUpdateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("praesentium"),
            },
            SiteID: sdk.String("omnis"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("incidunt"),
                Etag: sdk.String("incidunt"),
                ID: sdk.String("1452a9f0-1f34-442c-a1be-133bacde532b"),
                Kind: sdk.String("ea"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("eos"),
            },
            Size: &shared.Size{
                Height: sdk.Int(388287),
                Iab: sdk.Bool(false),
                ID: sdk.String("reiciendis"),
                Kind: sdk.String("praesentium"),
                Width: sdk.Int(382313),
            },
            SslRequired: sdk.Bool(false),
            Status: shared.PlacementStatusEnumPendingReview.ToPointer(),
            SubaccountID: sdk.String("quos"),
            TagFormats: []shared.PlacementTagFormatsEnum{
                shared.PlacementTagFormatsEnumPlacementTagJavascript,
                shared.PlacementTagFormatsEnumPlacementTagInstreamVideoPrefetchVast4,
            },
            TagSetting: &shared.TagSetting{
                AdditionalKeyValues: sdk.String("eveniet"),
                IncludeClickThroughUrls: sdk.Bool(false),
                IncludeClickTracking: sdk.Bool(false),
                KeywordOption: shared.TagSettingKeywordOptionEnumPlaceholderWithListOfKeywords.ToPointer(),
            },
            VideoActiveViewOptOut: sdk.Bool(false),
            VideoSettings: &shared.VideoSettings{
                CompanionSettings: &shared.CompanionSetting{
                    CompanionsDisabled: sdk.Bool(false),
                    EnabledSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(315164),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("provident"),
                            Kind: sdk.String("maxime"),
                            Width: sdk.Int(887693),
                        },
                        shared.Size{
                            Height: sdk.Int(249978),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("magni"),
                            Kind: sdk.String("consequuntur"),
                            Width: sdk.Int(159283),
                        },
                        shared.Size{
                            Height: sdk.Int(190514),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("illo"),
                            Kind: sdk.String("doloribus"),
                            Width: sdk.Int(934357),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("commodi"),
                },
                DurationSeconds: sdk.Int(390591),
                Kind: sdk.String("aliquid"),
                ObaEnabled: sdk.Bool(false),
                ObaSettings: &shared.ObaIcon{
                    IconClickThroughURL: sdk.String("dolore"),
                    IconClickTrackingURL: sdk.String("eligendi"),
                    IconViewTrackingURL: sdk.String("numquam"),
                    Program: sdk.String("quae"),
                    ResourceURL: sdk.String("pariatur"),
                    Size: &shared.Size{
                        Height: sdk.Int(169538),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("maiores"),
                        Kind: sdk.String("nam"),
                        Width: sdk.Int(665638),
                    },
                    XPosition: sdk.String("ad"),
                    YPosition: sdk.String("quod"),
                },
                Orientation: shared.VideoSettingsOrientationEnumPortrait.ToPointer(),
                SkippableSettings: &shared.SkippableSetting{
                    Kind: sdk.String("culpa"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(22860),
                        OffsetSeconds: sdk.Int(430293),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(590360),
                        OffsetSeconds: sdk.Int(731755),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.TranscodeSetting{
                    EnabledVideoFormats: []int{
                        868627,
                        144856,
                        582943,
                    },
                    Kind: sdk.String("dicta"),
                },
            },
            VpaidAdapterChoice: shared.PlacementVpaidAdapterChoiceEnumHtml5.ToPointer(),
            WrappingOptOut: sdk.Bool(false),
        },
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("quae"),
        ID: "0a2aa874-9479-4edd-8fcf-7b50cf87f08f",
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "fugit",
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("illo"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.DfareportingPlacementsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Placement != nil {
        // handle response
    }
}
```

## DfareportingPlacementsUpdate

Updates an existing placement.

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
    res, err := s.Placements.DfareportingPlacementsUpdate(ctx, operations.DfareportingPlacementsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Placement: &shared.Placement{
            AccountID: sdk.String("vel"),
            AdBlockingOptOut: sdk.Bool(false),
            AdditionalSizes: []shared.Size{
                shared.Size{
                    Height: sdk.Int(183270),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("dolore"),
                    Kind: sdk.String("distinctio"),
                    Width: sdk.Int(274809),
                },
                shared.Size{
                    Height: sdk.Int(7866),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("porro"),
                    Kind: sdk.String("deleniti"),
                    Width: sdk.Int(980532),
                },
                shared.Size{
                    Height: sdk.Int(43716),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("praesentium"),
                    Kind: sdk.String("distinctio"),
                    Width: sdk.Int(956253),
                },
            },
            AdvertiserID: sdk.String("a"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quae"),
                Etag: sdk.String("doloremque"),
                ID: sdk.String("81e88f86-996c-48e2-abe0-a3cf47893bd2"),
                Kind: sdk.String("neque"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("corrupti"),
            },
            Archived: sdk.Bool(false),
            CampaignID: sdk.String("autem"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("autem"),
                Etag: sdk.String("alias"),
                ID: sdk.String("0c61c783-4273-4caa-9118-b38f1b61a331"),
                Kind: sdk.String("dolorum"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("modi"),
            },
            Comment: sdk.String("possimus"),
            Compatibility: shared.PlacementCompatibilityEnumInStreamVideo.ToPointer(),
            ContentCategoryID: sdk.String("ab"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("voluptatem"),
            },
            DirectorySiteID: sdk.String("magni"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("iste"),
                Etag: sdk.String("modi"),
                ID: sdk.String("f92fed93-9ba8-4f71-a299-2c20ee1228ac"),
                Kind: sdk.String("dolor"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("assumenda"),
            },
            ExternalID: sdk.String("optio"),
            ID: sdk.String("commodi"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("dolore"),
                Etag: sdk.String("iusto"),
                ID: sdk.String("d240bc11-ea48-4282-8ccc-6a2f0f5b9d3c"),
                Kind: sdk.String("soluta"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("beatae"),
            },
            KeyName: sdk.String("similique"),
            Kind: sdk.String("nihil"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("commodi"),
            },
            LookbackConfiguration: &shared.LookbackConfiguration{
                ClickDuration: sdk.Int(536704),
                PostImpressionActivitiesDuration: sdk.Int(489164),
            },
            Name: sdk.String("Mr. Rodney Carroll"),
            PartnerWrappingData: &shared.MeasurementPartnerWrappingData{
                LinkStatus: shared.MeasurementPartnerWrappingDataLinkStatusEnumMeasurementPartnerLinkOptOut.ToPointer(),
                MeasurementPartner: shared.MeasurementPartnerWrappingDataMeasurementPartnerEnumDoubleVerify.ToPointer(),
                TagWrappingMode: shared.MeasurementPartnerWrappingDataTagWrappingModeEnumMonitoring.ToPointer(),
                WrappedTag: sdk.String("cum"),
            },
            PaymentApproved: sdk.Bool(false),
            PaymentSource: shared.PlacementPaymentSourceEnumPlacementPublisherPaid.ToPointer(),
            PlacementGroupID: sdk.String("soluta"),
            PlacementGroupIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("voluptatem"),
                Etag: sdk.String("repellendus"),
                ID: sdk.String("746d2a7c-7d1e-4a0e-b9fa-9bbe5f179f65"),
                Kind: sdk.String("sit"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("quasi"),
            },
            PlacementStrategyID: sdk.String("earum"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostMonthly.ToPointer(),
                EndDate: types.MustDateFromString("2022-07-02"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("repudiandae"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-02-11"),
                        PricingComment: sdk.String("neque"),
                        RateOrCostNanos: sdk.String("molestias"),
                        StartDate: types.MustDateFromString("2022-07-06"),
                        Units: sdk.String("sunt"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-04-03"),
                        PricingComment: sdk.String("similique"),
                        RateOrCostNanos: sdk.String("quo"),
                        StartDate: types.MustDateFromString("2020-05-11"),
                        Units: sdk.String("ipsa"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeCpa.ToPointer(),
                StartDate: types.MustDateFromString("2022-05-16"),
                TestingStartDate: types.MustDateFromString("2021-04-25"),
            },
            Primary: sdk.Bool(false),
            PublisherUpdateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("ex"),
            },
            SiteID: sdk.String("et"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("cupiditate"),
                Etag: sdk.String("dicta"),
                ID: sdk.String("8d279c10-c185-416f-978b-e2621272628f"),
                Kind: sdk.String("officia"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("ipsa"),
            },
            Size: &shared.Size{
                Height: sdk.Int(191804),
                Iab: sdk.Bool(false),
                ID: sdk.String("natus"),
                Kind: sdk.String("vel"),
                Width: sdk.Int(132273),
            },
            SslRequired: sdk.Bool(false),
            Status: shared.PlacementStatusEnumAcknowledgeRejection.ToPointer(),
            SubaccountID: sdk.String("eum"),
            TagFormats: []shared.PlacementTagFormatsEnum{
                shared.PlacementTagFormatsEnumPlacementTagInterstitialJavascriptLegacy,
                shared.PlacementTagFormatsEnumPlacementTagInstreamVideoPrefetch,
            },
            TagSetting: &shared.TagSetting{
                AdditionalKeyValues: sdk.String("aspernatur"),
                IncludeClickThroughUrls: sdk.Bool(false),
                IncludeClickTracking: sdk.Bool(false),
                KeywordOption: shared.TagSettingKeywordOptionEnumGenerateSeparateTagForEachKeyword.ToPointer(),
            },
            VideoActiveViewOptOut: sdk.Bool(false),
            VideoSettings: &shared.VideoSettings{
                CompanionSettings: &shared.CompanionSetting{
                    CompanionsDisabled: sdk.Bool(false),
                    EnabledSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(675452),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("autem"),
                            Kind: sdk.String("minima"),
                            Width: sdk.Int(60393),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("qui"),
                },
                DurationSeconds: sdk.Int(286276),
                Kind: sdk.String("rerum"),
                ObaEnabled: sdk.Bool(false),
                ObaSettings: &shared.ObaIcon{
                    IconClickThroughURL: sdk.String("inventore"),
                    IconClickTrackingURL: sdk.String("minima"),
                    IconViewTrackingURL: sdk.String("molestiae"),
                    Program: sdk.String("voluptatibus"),
                    ResourceURL: sdk.String("sint"),
                    Size: &shared.Size{
                        Height: sdk.Int(729927),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("nobis"),
                        Kind: sdk.String("laboriosam"),
                        Width: sdk.Int(923240),
                    },
                    XPosition: sdk.String("repellat"),
                    YPosition: sdk.String("iure"),
                },
                Orientation: shared.VideoSettingsOrientationEnumAny.ToPointer(),
                SkippableSettings: &shared.SkippableSetting{
                    Kind: sdk.String("similique"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(323153),
                        OffsetSeconds: sdk.Int(60068),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(528320),
                        OffsetSeconds: sdk.Int(475314),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.TranscodeSetting{
                    EnabledVideoFormats: []int{
                        870008,
                    },
                    Kind: sdk.String("unde"),
                },
            },
            VpaidAdapterChoice: shared.PlacementVpaidAdapterChoiceEnumHtml5.ToPointer(),
            WrappingOptOut: sdk.Bool(false),
        },
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("autem"),
        Fields: sdk.String("et"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("ducimus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "vero",
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("illo"),
    }, operations.DfareportingPlacementsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Placement != nil {
        // handle response
    }
}
```
