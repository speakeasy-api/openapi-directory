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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("harum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ex"),
        CampaignID: sdk.String("unde"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("a"),
        OauthToken: sdk.String("maiores"),
        PlacementIds: []string{
            "blanditiis",
            "reprehenderit",
            "dolore",
            "nostrum",
        },
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ipsa",
        QuotaUser: sdk.String("alias"),
        TagFormats: []DfareportingPlacementsGeneratetagsTagFormatsEnum{
            operations.DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagInstreamVideoPrefetchVast4,
            operations.DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagTrackingJavascript,
        },
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("velit"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("vero"),
        ID: "036f5c38-8664-4f69-8553-0a2e2aed6aaf",
        Key: sdk.String("atque"),
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nesciunt",
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("praesentium"),
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
            AccountID: sdk.String("eaque"),
            ActiveStatus: shared.PlacementActiveStatusEnumPlacementStatusActive.ToPointer(),
            AdBlockingOptOut: sdk.Bool(false),
            AdditionalSizes: []shared.Size{
                shared.Size{
                    Height: sdk.Int(755026),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("vel"),
                    Kind: sdk.String("perspiciatis"),
                    Width: sdk.Int(659975),
                },
            },
            AdvertiserID: sdk.String("amet"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("pariatur"),
                Etag: sdk.String("iste"),
                ID: sdk.String("06f6ebd5-ad7e-4c73-94f2-5f634b373071"),
                Kind: sdk.String("numquam"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("commodi"),
            },
            CampaignID: sdk.String("soluta"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("recusandae"),
                Etag: sdk.String("corrupti"),
                ID: sdk.String("c3e09c64-d342-4ac2-99a6-e5e7aef13402"),
                Kind: sdk.String("repudiandae"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("modi"),
            },
            Comment: sdk.String("ullam"),
            Compatibility: shared.PlacementCompatibilityEnumInStreamAudio.ToPointer(),
            ContentCategoryID: sdk.String("nemo"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("dolor"),
            },
            DirectorySiteID: sdk.String("quam"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("incidunt"),
                Etag: sdk.String("consectetur"),
                ID: sdk.String("efde1198-221f-49b1-b7d9-affe69682ace"),
                Kind: sdk.String("recusandae"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("cum"),
            },
            ExternalID: sdk.String("accusantium"),
            ID: sdk.String("magnam"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("reiciendis"),
                Etag: sdk.String("voluptatum"),
                ID: sdk.String("c512caab-ea70-48ed-9798-d385d460599d"),
                Kind: sdk.String("nostrum"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("nesciunt"),
            },
            KeyName: sdk.String("velit"),
            Kind: sdk.String("magnam"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("cupiditate"),
            },
            LookbackConfiguration: &shared.LookbackConfiguration{
                ClickDuration: sdk.Int(364199),
                PostImpressionActivitiesDuration: sdk.Int(490431),
            },
            Name: sdk.String("Ernestine Hansen"),
            PartnerWrappingData: &shared.MeasurementPartnerWrappingData{
                LinkStatus: shared.MeasurementPartnerWrappingDataLinkStatusEnumMeasurementPartnerUnlinked.ToPointer(),
                MeasurementPartner: shared.MeasurementPartnerWrappingDataMeasurementPartnerEnumIntegralAdScience.ToPointer(),
                TagWrappingMode: shared.MeasurementPartnerWrappingDataTagWrappingModeEnumVpaidFiltering.ToPointer(),
                WrappedTag: sdk.String("perspiciatis"),
            },
            PaymentApproved: sdk.Bool(false),
            PaymentSource: shared.PlacementPaymentSourceEnumPlacementPublisherPaid.ToPointer(),
            PlacementGroupID: sdk.String("eos"),
            PlacementGroupIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("qui"),
                Etag: sdk.String("corporis"),
                ID: sdk.String("3b6d7658-86ee-4ae5-bd4b-39f8a1490678"),
                Kind: sdk.String("reiciendis"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("dolor"),
            },
            PlacementStrategyID: sdk.String("quisquam"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostMonthly.ToPointer(),
                EndDate: types.MustDateFromString("2022-03-23"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("repellendus"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-05-23"),
                        PricingComment: sdk.String("earum"),
                        RateOrCostNanos: sdk.String("eligendi"),
                        StartDate: types.MustDateFromString("2021-03-11"),
                        Units: sdk.String("illo"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-09-08"),
                        PricingComment: sdk.String("reiciendis"),
                        RateOrCostNanos: sdk.String("maiores"),
                        StartDate: types.MustDateFromString("2021-10-10"),
                        Units: sdk.String("consequatur"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-05-17"),
                        PricingComment: sdk.String("voluptates"),
                        RateOrCostNanos: sdk.String("enim"),
                        StartDate: types.MustDateFromString("2022-05-18"),
                        Units: sdk.String("soluta"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeCpa.ToPointer(),
                StartDate: types.MustDateFromString("2022-02-08"),
                TestingStartDate: types.MustDateFromString("2022-02-23"),
            },
            Primary: sdk.Bool(false),
            PublisherUpdateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("dignissimos"),
            },
            SiteID: sdk.String("magnam"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("vel"),
                Etag: sdk.String("accusantium"),
                ID: sdk.String("30fe1837-6c2b-4ede-a767-90ed0c16a7ba"),
                Kind: sdk.String("dolore"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("rem"),
            },
            Size: &shared.Size{
                Height: sdk.Int(273190),
                Iab: sdk.Bool(false),
                ID: sdk.String("alias"),
                Kind: sdk.String("magnam"),
                Width: sdk.Int(281698),
            },
            SslRequired: sdk.Bool(false),
            Status: shared.PlacementStatusEnumAcknowledgeRejection.ToPointer(),
            SubaccountID: sdk.String("unde"),
            TagFormats: []shared.PlacementTagFormatsEnum{
                shared.PlacementTagFormatsEnumPlacementTagInterstitialJavascript,
                shared.PlacementTagFormatsEnumPlacementTagInstreamVideoPrefetch,
                shared.PlacementTagFormatsEnumPlacementTagInstreamVideoPrefetch,
                shared.PlacementTagFormatsEnumPlacementTagIframeJavascript,
            },
            TagSetting: &shared.TagSetting{
                AdditionalKeyValues: sdk.String("itaque"),
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
                            Height: sdk.Int(305971),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("praesentium"),
                            Kind: sdk.String("doloremque"),
                            Width: sdk.Int(581997),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("illo"),
                },
                DurationSeconds: sdk.Int(661292),
                Kind: sdk.String("dolores"),
                ObaEnabled: sdk.Bool(false),
                ObaSettings: &shared.ObaIcon{
                    IconClickThroughURL: sdk.String("soluta"),
                    IconClickTrackingURL: sdk.String("culpa"),
                    IconViewTrackingURL: sdk.String("fugit"),
                    Program: sdk.String("nemo"),
                    ResourceURL: sdk.String("repudiandae"),
                    Size: &shared.Size{
                        Height: sdk.Int(917300),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("commodi"),
                        Kind: sdk.String("minus"),
                        Width: sdk.Int(488968),
                    },
                    XPosition: sdk.String("ad"),
                    YPosition: sdk.String("id"),
                },
                Orientation: shared.VideoSettingsOrientationEnumPortrait.ToPointer(),
                PublisherSpecificationID: sdk.String("voluptatum"),
                SkippableSettings: &shared.SkippableSetting{
                    Kind: sdk.String("est"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(422343),
                        OffsetSeconds: sdk.Int(17438),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(672676),
                        OffsetSeconds: sdk.Int(463088),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.TranscodeSetting{
                    EnabledVideoFormats: []int{
                        910324,
                        222654,
                        295960,
                    },
                    Kind: sdk.String("vel"),
                },
            },
            VpaidAdapterChoice: shared.PlacementVpaidAdapterChoiceEnumBoth.ToPointer(),
            WrappingOptOut: sdk.Bool(false),
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "officia",
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("eum"),
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
        AccessToken: sdk.String("culpa"),
        ActiveStatus: []DfareportingPlacementsListActiveStatusEnum{
            operations.DfareportingPlacementsListActiveStatusEnumPlacementStatusArchived,
            operations.DfareportingPlacementsListActiveStatusEnumPlacementStatusArchived,
            operations.DfareportingPlacementsListActiveStatusEnumPlacementStatusArchived,
            operations.DfareportingPlacementsListActiveStatusEnumPlacementStatusActive,
        },
        AdvertiserIds: []string{
            "nemo",
            "pariatur",
        },
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perspiciatis"),
        CampaignIds: []string{
            "laboriosam",
            "voluptate",
            "ad",
        },
        Compatibilities: []DfareportingPlacementsListCompatibilitiesEnum{
            operations.DfareportingPlacementsListCompatibilitiesEnumDisplay,
            operations.DfareportingPlacementsListCompatibilitiesEnumAppInterstitial,
        },
        ContentCategoryIds: []string{
            "porro",
            "porro",
            "eveniet",
        },
        DirectorySiteIds: []string{
            "quae",
            "voluptates",
        },
        Fields: sdk.String("impedit"),
        GroupIds: []string{
            "optio",
        },
        Ids: []string{
            "occaecati",
            "officia",
        },
        Key: sdk.String("consectetur"),
        MaxEndDate: sdk.String("excepturi"),
        MaxResults: sdk.Int64(686016),
        MaxStartDate: sdk.String("officiis"),
        MinEndDate: sdk.String("ipsam"),
        MinStartDate: sdk.String("fuga"),
        OauthToken: sdk.String("magnam"),
        PageToken: sdk.String("assumenda"),
        PaymentSource: operations.DfareportingPlacementsListPaymentSourceEnumPlacementAgencyPaid.ToPointer(),
        PlacementStrategyIds: []string{
            "laboriosam",
            "nostrum",
            "expedita",
        },
        PrettyPrint: sdk.Bool(false),
        PricingTypes: []DfareportingPlacementsListPricingTypesEnum{
            operations.DfareportingPlacementsListPricingTypesEnumPricingTypeCpmActiveview,
            operations.DfareportingPlacementsListPricingTypesEnumPricingTypeCpa,
        },
        ProfileID: "veniam",
        QuotaUser: sdk.String("ea"),
        SearchString: sdk.String("aspernatur"),
        SiteIds: []string{
            "cupiditate",
            "expedita",
            "odio",
            "assumenda",
        },
        SizeIds: []string{
            "recusandae",
            "eos",
            "facere",
        },
        SortField: operations.DfareportingPlacementsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingPlacementsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("tenetur"),
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
            AccountID: sdk.String("ad"),
            ActiveStatus: shared.PlacementActiveStatusEnumPlacementStatusInactive.ToPointer(),
            AdBlockingOptOut: sdk.Bool(false),
            AdditionalSizes: []shared.Size{
                shared.Size{
                    Height: sdk.Int(175103),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("sint"),
                    Kind: sdk.String("nulla"),
                    Width: sdk.Int(690546),
                },
                shared.Size{
                    Height: sdk.Int(547119),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("quam"),
                    Kind: sdk.String("ad"),
                    Width: sdk.Int(787769),
                },
            },
            AdvertiserID: sdk.String("sequi"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("culpa"),
                Etag: sdk.String("blanditiis"),
                ID: sdk.String("90282a51-f41c-4f67-96ed-3d724c18f581"),
                Kind: sdk.String("necessitatibus"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("laudantium"),
            },
            CampaignID: sdk.String("porro"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("minus"),
                Etag: sdk.String("officiis"),
                ID: sdk.String("3f716600-da0e-43aa-a1c6-fe09d852b53b"),
                Kind: sdk.String("nesciunt"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("placeat"),
            },
            Comment: sdk.String("blanditiis"),
            Compatibility: shared.PlacementCompatibilityEnumInStreamVideo.ToPointer(),
            ContentCategoryID: sdk.String("dignissimos"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("placeat"),
            },
            DirectorySiteID: sdk.String("ratione"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("eligendi"),
                Etag: sdk.String("esse"),
                ID: sdk.String("10e1673d-905c-4b4b-adef-3c127c390995"),
                Kind: sdk.String("veniam"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("blanditiis"),
            },
            ExternalID: sdk.String("dolores"),
            ID: sdk.String("ipsam"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ipsa"),
                Etag: sdk.String("pariatur"),
                ID: sdk.String("cbbcd3b1-21b8-48c1-ae5e-7a061391cc8f"),
                Kind: sdk.String("deserunt"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("soluta"),
            },
            KeyName: sdk.String("iusto"),
            Kind: sdk.String("repellendus"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("beatae"),
            },
            LookbackConfiguration: &shared.LookbackConfiguration{
                ClickDuration: sdk.Int(498103),
                PostImpressionActivitiesDuration: sdk.Int(418539),
            },
            Name: sdk.String("Toni Cole"),
            PartnerWrappingData: &shared.MeasurementPartnerWrappingData{
                LinkStatus: shared.MeasurementPartnerWrappingDataLinkStatusEnumMeasurementPartnerUnlinked.ToPointer(),
                MeasurementPartner: shared.MeasurementPartnerWrappingDataMeasurementPartnerEnumDoubleVerify.ToPointer(),
                TagWrappingMode: shared.MeasurementPartnerWrappingDataTagWrappingModeEnumNonVpaidFiltering.ToPointer(),
                WrappedTag: sdk.String("minima"),
            },
            PaymentApproved: sdk.Bool(false),
            PaymentSource: shared.PlacementPaymentSourceEnumPlacementPublisherPaid.ToPointer(),
            PlacementGroupID: sdk.String("ex"),
            PlacementGroupIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("impedit"),
                Etag: sdk.String("harum"),
                ID: sdk.String("6ebabe5e-0b99-4f3b-9358-d6a87bb7aecb"),
                Kind: sdk.String("recusandae"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("eum"),
            },
            PlacementStrategyID: sdk.String("iste"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostCumulative.ToPointer(),
                EndDate: types.MustDateFromString("2022-12-30"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("minus"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-08-13"),
                        PricingComment: sdk.String("cupiditate"),
                        RateOrCostNanos: sdk.String("occaecati"),
                        StartDate: types.MustDateFromString("2022-07-05"),
                        Units: sdk.String("maiores"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2021-12-26"),
                        PricingComment: sdk.String("omnis"),
                        RateOrCostNanos: sdk.String("incidunt"),
                        StartDate: types.MustDateFromString("2022-11-21"),
                        Units: sdk.String("incidunt"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-11-15"),
                        PricingComment: sdk.String("culpa"),
                        RateOrCostNanos: sdk.String("sint"),
                        StartDate: types.MustDateFromString("2022-10-28"),
                        Units: sdk.String("quasi"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeCpmActiveview.ToPointer(),
                StartDate: types.MustDateFromString("2022-09-09"),
                TestingStartDate: types.MustDateFromString("2022-10-27"),
            },
            Primary: sdk.Bool(false),
            PublisherUpdateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("cumque"),
            },
            SiteID: sdk.String("vel"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("inventore"),
                Etag: sdk.String("quidem"),
                ID: sdk.String("e133bacd-e532-4b65-a6f8-62853fe2859c"),
                Kind: sdk.String("officiis"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("magni"),
            },
            Size: &shared.Size{
                Height: sdk.Int(164790),
                Iab: sdk.Bool(false),
                ID: sdk.String("quia"),
                Kind: sdk.String("ratione"),
                Width: sdk.Int(71884),
            },
            SslRequired: sdk.Bool(false),
            Status: shared.PlacementStatusEnumDraft.ToPointer(),
            SubaccountID: sdk.String("earum"),
            TagFormats: []shared.PlacementTagFormatsEnum{
                shared.PlacementTagFormatsEnumPlacementTagInterstitialJavascript,
                shared.PlacementTagFormatsEnumPlacementTagInterstitialJavascript,
            },
            TagSetting: &shared.TagSetting{
                AdditionalKeyValues: sdk.String("dolore"),
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
                            Height: sdk.Int(62739),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("pariatur"),
                            Kind: sdk.String("magni"),
                            Width: sdk.Int(980584),
                        },
                        shared.Size{
                            Height: sdk.Int(719880),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("est"),
                            Kind: sdk.String("ad"),
                            Width: sdk.Int(800836),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("rerum"),
                },
                DurationSeconds: sdk.Int(633216),
                Kind: sdk.String("sit"),
                ObaEnabled: sdk.Bool(false),
                ObaSettings: &shared.ObaIcon{
                    IconClickThroughURL: sdk.String("eum"),
                    IconClickTrackingURL: sdk.String("provident"),
                    IconViewTrackingURL: sdk.String("tempore"),
                    Program: sdk.String("corrupti"),
                    ResourceURL: sdk.String("at"),
                    Size: &shared.Size{
                        Height: sdk.Int(144856),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("cupiditate"),
                        Kind: sdk.String("dicta"),
                        Width: sdk.Int(729491),
                    },
                    XPosition: sdk.String("recusandae"),
                    YPosition: sdk.String("libero"),
                },
                Orientation: shared.VideoSettingsOrientationEnumLandscape.ToPointer(),
                PublisherSpecificationID: sdk.String("quae"),
                SkippableSettings: &shared.SkippableSetting{
                    Kind: sdk.String("eaque"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(665338),
                        OffsetSeconds: sdk.Int(148557),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(679842),
                        OffsetSeconds: sdk.Int(672553),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.TranscodeSetting{
                    EnabledVideoFormats: []int{
                        476764,
                        302334,
                        597663,
                    },
                    Kind: sdk.String("labore"),
                },
            },
            VpaidAdapterChoice: shared.PlacementVpaidAdapterChoiceEnumFlash.ToPointer(),
            WrappingOptOut: sdk.Bool(false),
        },
        AccessToken: sdk.String("unde"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("assumenda"),
        ID: "4fcf7b50-cf87-4f08-b392-71076a24b40c",
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "doloremque",
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("sapiente"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Placement: &shared.Placement{
            AccountID: sdk.String("quae"),
            ActiveStatus: shared.PlacementActiveStatusEnumPlacementStatusUnknown.ToPointer(),
            AdBlockingOptOut: sdk.Bool(false),
            AdditionalSizes: []shared.Size{
                shared.Size{
                    Height: sdk.Int(103084),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("saepe"),
                    Kind: sdk.String("laudantium"),
                    Width: sdk.Int(508621),
                },
                shared.Size{
                    Height: sdk.Int(982463),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("blanditiis"),
                    Kind: sdk.String("ea"),
                    Width: sdk.Int(579733),
                },
                shared.Size{
                    Height: sdk.Int(615573),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("voluptas"),
                    Kind: sdk.String("optio"),
                    Width: sdk.Int(519189),
                },
            },
            AdvertiserID: sdk.String("recusandae"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("odit"),
                Etag: sdk.String("eos"),
                ID: sdk.String("be0a3cf4-7893-4bd2-bf86-600c61c78342"),
                Kind: sdk.String("in"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("impedit"),
            },
            CampaignID: sdk.String("est"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("est"),
                Etag: sdk.String("provident"),
                ID: sdk.String("118b38f1-b61a-4331-a54d-c10294f92fed"),
                Kind: sdk.String("omnis"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("perspiciatis"),
            },
            Comment: sdk.String("expedita"),
            Compatibility: shared.PlacementCompatibilityEnumAppInterstitial.ToPointer(),
            ContentCategoryID: sdk.String("quas"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("asperiores"),
            },
            DirectorySiteID: sdk.String("dignissimos"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("et"),
                Etag: sdk.String("eveniet"),
                ID: sdk.String("2992c20e-e122-48ac-badc-647d240bc11e"),
                Kind: sdk.String("officia"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("deleniti"),
            },
            ExternalID: sdk.String("explicabo"),
            ID: sdk.String("totam"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("sunt"),
                Etag: sdk.String("magnam"),
                ID: sdk.String("ccc6a2f0-f5b9-4d3c-b11a-7687d3100e8e"),
                Kind: sdk.String("sed"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("sint"),
            },
            KeyName: sdk.String("soluta"),
            Kind: sdk.String("voluptatem"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("repellendus"),
            },
            LookbackConfiguration: &shared.LookbackConfiguration{
                ClickDuration: sdk.Int(490675),
                PostImpressionActivitiesDuration: sdk.Int(311838),
            },
            Name: sdk.String("Marcella Crist"),
            PartnerWrappingData: &shared.MeasurementPartnerWrappingData{
                LinkStatus: shared.MeasurementPartnerWrappingDataLinkStatusEnumMeasurementPartnerLinkWrappingPending.ToPointer(),
                MeasurementPartner: shared.MeasurementPartnerWrappingDataMeasurementPartnerEnumIntegralAdScience.ToPointer(),
                TagWrappingMode: shared.MeasurementPartnerWrappingDataTagWrappingModeEnumVpaidOnlyFiltering.ToPointer(),
                WrappedTag: sdk.String("ab"),
            },
            PaymentApproved: sdk.Bool(false),
            PaymentSource: shared.PlacementPaymentSourceEnumPlacementPublisherPaid.ToPointer(),
            PlacementGroupID: sdk.String("dolorum"),
            PlacementGroupIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("perferendis"),
                Etag: sdk.String("voluptates"),
                ID: sdk.String("79fa9bbe-5f17-49f6-90b1-e707e7e43967"),
                Kind: sdk.String("sunt"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("soluta"),
            },
            PlacementStrategyID: sdk.String("similique"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostCumulative.ToPointer(),
                EndDate: types.MustDateFromString("2020-05-11"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("ipsa"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-05-16"),
                        PricingComment: sdk.String("expedita"),
                        RateOrCostNanos: sdk.String("quibusdam"),
                        StartDate: types.MustDateFromString("2022-11-27"),
                        Units: sdk.String("cupiditate"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-06-22"),
                        PricingComment: sdk.String("facere"),
                        RateOrCostNanos: sdk.String("magni"),
                        StartDate: types.MustDateFromString("2022-05-24"),
                        Units: sdk.String("maxime"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeCpm.ToPointer(),
                StartDate: types.MustDateFromString("2022-03-12"),
                TestingStartDate: types.MustDateFromString("2022-07-02"),
            },
            Primary: sdk.Bool(false),
            PublisherUpdateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("ipsam"),
            },
            SiteID: sdk.String("ab"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("aliquid"),
                Etag: sdk.String("doloribus"),
                ID: sdk.String("d78be262-1272-4628-ba50-3962867e72b3"),
                Kind: sdk.String("laborum"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("minima"),
            },
            Size: &shared.Size{
                Height: sdk.Int(60393),
                Iab: sdk.Bool(false),
                ID: sdk.String("qui"),
                Kind: sdk.String("labore"),
                Width: sdk.Int(699392),
            },
            SslRequired: sdk.Bool(false),
            Status: shared.PlacementStatusEnumPendingReview.ToPointer(),
            SubaccountID: sdk.String("minima"),
            TagFormats: []shared.PlacementTagFormatsEnum{
                shared.PlacementTagFormatsEnumPlacementTagTrackingThirdPartyMeasurement,
                shared.PlacementTagFormatsEnumPlacementTagTrackingIframe,
            },
            TagSetting: &shared.TagSetting{
                AdditionalKeyValues: sdk.String("libero"),
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
                            Height: sdk.Int(923240),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("repellat"),
                            Kind: sdk.String("iure"),
                            Width: sdk.Int(134114),
                        },
                        shared.Size{
                            Height: sdk.Int(627810),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("ad"),
                            Kind: sdk.String("ipsa"),
                            Width: sdk.Int(528320),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("molestiae"),
                },
                DurationSeconds: sdk.Int(124093),
                Kind: sdk.String("at"),
                ObaEnabled: sdk.Bool(false),
                ObaSettings: &shared.ObaIcon{
                    IconClickThroughURL: sdk.String("unde"),
                    IconClickTrackingURL: sdk.String("provident"),
                    IconViewTrackingURL: sdk.String("nam"),
                    Program: sdk.String("voluptas"),
                    ResourceURL: sdk.String("autem"),
                    Size: &shared.Size{
                        Height: sdk.Int(89246),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("officia"),
                        Kind: sdk.String("ducimus"),
                        Width: sdk.Int(874137),
                    },
                    XPosition: sdk.String("repudiandae"),
                    YPosition: sdk.String("sapiente"),
                },
                Orientation: shared.VideoSettingsOrientationEnumAny.ToPointer(),
                PublisherSpecificationID: sdk.String("commodi"),
                SkippableSettings: &shared.SkippableSetting{
                    Kind: sdk.String("voluptatum"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(721629),
                        OffsetSeconds: sdk.Int(426323),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(769788),
                        OffsetSeconds: sdk.Int(759464),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.TranscodeSetting{
                    EnabledVideoFormats: []int{
                        151150,
                        534610,
                        171195,
                    },
                    Kind: sdk.String("dolores"),
                },
            },
            VpaidAdapterChoice: shared.PlacementVpaidAdapterChoiceEnumHtml5.ToPointer(),
            WrappingOptOut: sdk.Bool(false),
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perspiciatis"),
        Fields: sdk.String("totam"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "repudiandae",
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("doloribus"),
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
