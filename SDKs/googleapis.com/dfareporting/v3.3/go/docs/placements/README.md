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
        AccessToken: sdk.String("eligendi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("autem"),
        CampaignID: sdk.String("laborum"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("asperiores"),
        PlacementIds: []string{
            "quis",
            "nisi",
            "vitae",
            "unde",
        },
        PrettyPrint: sdk.Bool(false),
        ProfileID: "odit",
        QuotaUser: sdk.String("omnis"),
        TagFormats: []DfareportingPlacementsGeneratetagsTagFormatsEnum{
            operations.DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagJavascriptLegacy,
            operations.DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagTrackingJavascript,
            operations.DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagTrackingIframe,
            operations.DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagInterstitialJavascript,
        },
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("eaque"),
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
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("exercitationem"),
        ID: "918da1d4-8e78-4e3c-b8e1-143da9308b27",
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "voluptatum",
        QuotaUser: sdk.String("animi"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("qui"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Placement: &shared.Placement{
            AccountID: sdk.String("et"),
            AdBlockingOptOut: sdk.Bool(false),
            AdditionalSizes: []shared.Size{
                shared.Size{
                    Height: sdk.Int(263325),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("quaerat"),
                    Kind: sdk.String("amet"),
                    Width: sdk.Int(612689),
                },
                shared.Size{
                    Height: sdk.Int(729673),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("nesciunt"),
                    Kind: sdk.String("illum"),
                    Width: sdk.Int(925393),
                },
                shared.Size{
                    Height: sdk.Int(533936),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("iure"),
                    Kind: sdk.String("quis"),
                    Width: sdk.Int(431771),
                },
            },
            AdvertiserID: sdk.String("eligendi"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quisquam"),
                Etag: sdk.String("optio"),
                ID: sdk.String("e470cd21-47b6-4e61-92cf-01d0d8c3a4b9"),
                Kind: sdk.String("laborum"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("quidem"),
            },
            Archived: sdk.Bool(false),
            CampaignID: sdk.String("repellat"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("molestias"),
                Etag: sdk.String("amet"),
                ID: sdk.String("5dfe974f-a4b1-4e9c-897e-da623442e1a9"),
                Kind: sdk.String("consequuntur"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("quam"),
            },
            Comment: sdk.String("recusandae"),
            Compatibility: shared.PlacementCompatibilityEnumAppInterstitial.ToPointer(),
            ContentCategoryID: sdk.String("cupiditate"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("blanditiis"),
            },
            DirectorySiteID: sdk.String("numquam"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("porro"),
                Etag: sdk.String("quas"),
                ID: sdk.String("0b479e89-1923-4c18-8a8d-69c5689214fa"),
                Kind: sdk.String("consequuntur"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("magni"),
            },
            ExternalID: sdk.String("alias"),
            ID: sdk.String("reprehenderit"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("officiis"),
                Etag: sdk.String("eius"),
                ID: sdk.String("fae038cd-7f1b-4c2c-abaf-7fc2ccba4bef"),
                Kind: sdk.String("aperiam"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("reiciendis"),
            },
            KeyName: sdk.String("nisi"),
            Kind: sdk.String("voluptatum"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("earum"),
            },
            LookbackConfiguration: &shared.LookbackConfiguration{
                ClickDuration: sdk.Int(652714),
                PostImpressionActivitiesDuration: sdk.Int(875166),
            },
            Name: sdk.String("Johnathan Crooks"),
            PaymentApproved: sdk.Bool(false),
            PaymentSource: shared.PlacementPaymentSourceEnumPlacementAgencyPaid.ToPointer(),
            PlacementGroupID: sdk.String("consequatur"),
            PlacementGroupIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("expedita"),
                Etag: sdk.String("itaque"),
                ID: sdk.String("069fb36a-dd70-4408-8e0a-3fc73a5a034b"),
                Kind: sdk.String("inventore"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("ut"),
            },
            PlacementStrategyID: sdk.String("sint"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostMonthly.ToPointer(),
                DisregardOverdelivery: sdk.Bool(false),
                EndDate: types.MustDateFromString("2022-09-27"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("ratione"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2021-01-15"),
                        PricingComment: sdk.String("suscipit"),
                        RateOrCostNanos: sdk.String("occaecati"),
                        StartDate: types.MustDateFromString("2022-02-08"),
                        Units: sdk.String("est"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-07-03"),
                        PricingComment: sdk.String("fugit"),
                        RateOrCostNanos: sdk.String("libero"),
                        StartDate: types.MustDateFromString("2022-12-22"),
                        Units: sdk.String("iste"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-10-09"),
                        PricingComment: sdk.String("minima"),
                        RateOrCostNanos: sdk.String("ipsum"),
                        StartDate: types.MustDateFromString("2022-06-18"),
                        Units: sdk.String("fugit"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeCpc.ToPointer(),
                StartDate: types.MustDateFromString("2022-11-19"),
                TestingStartDate: types.MustDateFromString("2022-07-31"),
            },
            Primary: sdk.Bool(false),
            PublisherUpdateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("rem"),
            },
            SiteID: sdk.String("ad"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ipsum"),
                Etag: sdk.String("omnis"),
                ID: sdk.String("ce0932d1-0acd-415d-8cc3-06b786b3d37b"),
                Kind: sdk.String("fugiat"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("aut"),
            },
            Size: &shared.Size{
                Height: sdk.Int(281986),
                Iab: sdk.Bool(false),
                ID: sdk.String("similique"),
                Kind: sdk.String("quae"),
                Width: sdk.Int(986910),
            },
            SslRequired: sdk.Bool(false),
            Status: shared.PlacementStatusEnumPaymentAccepted.ToPointer(),
            SubaccountID: sdk.String("dolore"),
            TagFormats: []shared.PlacementTagFormatsEnum{
                shared.PlacementTagFormatsEnumPlacementTagIframeJavascriptLegacy,
            },
            TagSetting: &shared.TagSetting{
                AdditionalKeyValues: sdk.String("rerum"),
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
                            Height: sdk.Int(973066),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("voluptas"),
                            Kind: sdk.String("reprehenderit"),
                            Width: sdk.Int(485638),
                        },
                        shared.Size{
                            Height: sdk.Int(676892),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("eius"),
                            Kind: sdk.String("praesentium"),
                            Width: sdk.Int(360333),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("inventore"),
                },
                Kind: sdk.String("provident"),
                Orientation: shared.VideoSettingsOrientationEnumPortrait.ToPointer(),
                SkippableSettings: &shared.SkippableSetting{
                    Kind: sdk.String("dolor"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(242479),
                        OffsetSeconds: sdk.Int(461968),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(279150),
                        OffsetSeconds: sdk.Int(574923),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.TranscodeSetting{
                    EnabledVideoFormats: []int{
                        138094,
                    },
                    Kind: sdk.String("quas"),
                },
            },
            VpaidAdapterChoice: shared.PlacementVpaidAdapterChoiceEnumFlash.ToPointer(),
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("ex"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aperiam",
        QuotaUser: sdk.String("consectetur"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("nihil"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("possimus"),
        AdvertiserIds: []string{
            "odit",
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Archived: sdk.Bool(false),
        Callback: sdk.String("debitis"),
        CampaignIds: []string{
            "in",
            "corrupti",
        },
        Compatibilities: []DfareportingPlacementsListCompatibilitiesEnum{
            operations.DfareportingPlacementsListCompatibilitiesEnumDisplay,
            operations.DfareportingPlacementsListCompatibilitiesEnumAppInterstitial,
        },
        ContentCategoryIds: []string{
            "atque",
            "necessitatibus",
            "possimus",
        },
        DirectorySiteIds: []string{
            "qui",
            "laborum",
        },
        Fields: sdk.String("explicabo"),
        GroupIds: []string{
            "eius",
            "est",
            "repellat",
            "quaerat",
        },
        Ids: []string{
            "minima",
        },
        Key: sdk.String("voluptatum"),
        MaxEndDate: sdk.String("id"),
        MaxResults: sdk.Int64(773381),
        MaxStartDate: sdk.String("magni"),
        MinEndDate: sdk.String("repellendus"),
        MinStartDate: sdk.String("doloremque"),
        OauthToken: sdk.String("sapiente"),
        PageToken: sdk.String("sit"),
        PaymentSource: operations.DfareportingPlacementsListPaymentSourceEnumPlacementPublisherPaid.ToPointer(),
        PlacementStrategyIds: []string{
            "quos",
            "optio",
        },
        PrettyPrint: sdk.Bool(false),
        PricingTypes: []DfareportingPlacementsListPricingTypesEnum{
            operations.DfareportingPlacementsListPricingTypesEnumPricingTypeFlatRateClicks,
        },
        ProfileID: "totam",
        QuotaUser: sdk.String("in"),
        SearchString: sdk.String("tempore"),
        SiteIds: []string{
            "molestiae",
            "eaque",
        },
        SizeIds: []string{
            "aut",
            "possimus",
        },
        SortField: operations.DfareportingPlacementsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingPlacementsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("quos"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Placement: &shared.Placement{
            AccountID: sdk.String("unde"),
            AdBlockingOptOut: sdk.Bool(false),
            AdditionalSizes: []shared.Size{
                shared.Size{
                    Height: sdk.Int(513534),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("eos"),
                    Kind: sdk.String("porro"),
                    Width: sdk.Int(341224),
                },
                shared.Size{
                    Height: sdk.Int(887079),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("adipisci"),
                    Kind: sdk.String("alias"),
                    Width: sdk.Int(394613),
                },
                shared.Size{
                    Height: sdk.Int(973627),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("corporis"),
                    Kind: sdk.String("nostrum"),
                    Width: sdk.Int(474190),
                },
                shared.Size{
                    Height: sdk.Int(399127),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("maiores"),
                    Kind: sdk.String("nemo"),
                    Width: sdk.Int(787052),
                },
            },
            AdvertiserID: sdk.String("quibusdam"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("voluptates"),
                Etag: sdk.String("cum"),
                ID: sdk.String("0286d0bc-43b1-48ab-b78f-2fcff81ddf7e"),
                Kind: sdk.String("eaque"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("totam"),
            },
            Archived: sdk.Bool(false),
            CampaignID: sdk.String("repellat"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("iusto"),
                Etag: sdk.String("labore"),
                ID: sdk.String("ef54c921-6e89-4263-93bb-6fc2c8d27010"),
                Kind: sdk.String("unde"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("quidem"),
            },
            Comment: sdk.String("vel"),
            Compatibility: shared.PlacementCompatibilityEnumApp.ToPointer(),
            ContentCategoryID: sdk.String("id"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("fugiat"),
            },
            DirectorySiteID: sdk.String("laboriosam"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("necessitatibus"),
                Etag: sdk.String("amet"),
                ID: sdk.String("e1d9d3b6-6033-44a1-9aa1-d5d2247de9b3"),
                Kind: sdk.String("pariatur"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("laboriosam"),
            },
            ExternalID: sdk.String("quasi"),
            ID: sdk.String("ducimus"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("eaque"),
                Etag: sdk.String("debitis"),
                ID: sdk.String("768a96bb-3987-4883-98eb-a1bbf7143356"),
                Kind: sdk.String("tenetur"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("amet"),
            },
            KeyName: sdk.String("ut"),
            Kind: sdk.String("molestias"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("id"),
            },
            LookbackConfiguration: &shared.LookbackConfiguration{
                ClickDuration: sdk.Int(117761),
                PostImpressionActivitiesDuration: sdk.Int(378582),
            },
            Name: sdk.String("Janice Gorczany"),
            PaymentApproved: sdk.Bool(false),
            PaymentSource: shared.PlacementPaymentSourceEnumPlacementAgencyPaid.ToPointer(),
            PlacementGroupID: sdk.String("beatae"),
            PlacementGroupIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("dicta"),
                Etag: sdk.String("eligendi"),
                ID: sdk.String("e46b9516-52b1-458c-a914-2f052632b31c"),
                Kind: sdk.String("harum"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("ex"),
            },
            PlacementStrategyID: sdk.String("unde"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostNone.ToPointer(),
                DisregardOverdelivery: sdk.Bool(false),
                EndDate: types.MustDateFromString("2020-01-21"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("quisquam"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-09-15"),
                        PricingComment: sdk.String("nostrum"),
                        RateOrCostNanos: sdk.String("ipsa"),
                        StartDate: types.MustDateFromString("2022-09-08"),
                        Units: sdk.String("itaque"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2021-04-10"),
                        PricingComment: sdk.String("velit"),
                        RateOrCostNanos: sdk.String("temporibus"),
                        StartDate: types.MustDateFromString("2022-07-16"),
                        Units: sdk.String("incidunt"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-11-13"),
                        PricingComment: sdk.String("non"),
                        RateOrCostNanos: sdk.String("commodi"),
                        StartDate: types.MustDateFromString("2021-12-06"),
                        Units: sdk.String("quo"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeCpc.ToPointer(),
                StartDate: types.MustDateFromString("2021-12-10"),
                TestingStartDate: types.MustDateFromString("2022-08-11"),
            },
            Primary: sdk.Bool(false),
            PublisherUpdateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("numquam"),
            },
            SiteID: sdk.String("tenetur"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ea"),
                Etag: sdk.String("error"),
                ID: sdk.String("85530a2e-2aed-46aa-b863-c28d040c69a3"),
                Kind: sdk.String("pariatur"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("voluptatem"),
            },
            Size: &shared.Size{
                Height: sdk.Int(378600),
                Iab: sdk.Bool(false),
                ID: sdk.String("hic"),
                Kind: sdk.String("ea"),
                Width: sdk.Int(884761),
            },
            SslRequired: sdk.Bool(false),
            Status: shared.PlacementStatusEnumAcknowledgeAcceptance.ToPointer(),
            SubaccountID: sdk.String("at"),
            TagFormats: []shared.PlacementTagFormatsEnum{
                shared.PlacementTagFormatsEnumPlacementTagTrackingJavascript,
                shared.PlacementTagFormatsEnumPlacementTagInterstitialJavascriptLegacy,
            },
            TagSetting: &shared.TagSetting{
                AdditionalKeyValues: sdk.String("quam"),
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
                            Height: sdk.Int(494158),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("neque"),
                            Kind: sdk.String("provident"),
                            Width: sdk.Int(292291),
                        },
                        shared.Size{
                            Height: sdk.Int(967531),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("dolores"),
                            Kind: sdk.String("corporis"),
                            Width: sdk.Int(997982),
                        },
                        shared.Size{
                            Height: sdk.Int(404661),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("ratione"),
                            Kind: sdk.String("tempora"),
                            Width: sdk.Int(700751),
                        },
                        shared.Size{
                            Height: sdk.Int(191655),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("quam"),
                            Kind: sdk.String("dolorem"),
                            Width: sdk.Int(33295),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("ducimus"),
                },
                Kind: sdk.String("inventore"),
                Orientation: shared.VideoSettingsOrientationEnumAny.ToPointer(),
                SkippableSettings: &shared.SkippableSetting{
                    Kind: sdk.String("itaque"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(416171),
                        OffsetSeconds: sdk.Int(744543),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(926650),
                        OffsetSeconds: sdk.Int(546010),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.TranscodeSetting{
                    EnabledVideoFormats: []int{
                        209465,
                        891380,
                        6356,
                        595944,
                    },
                    Kind: sdk.String("impedit"),
                },
            },
            VpaidAdapterChoice: shared.PlacementVpaidAdapterChoiceEnumFlash.ToPointer(),
        },
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("aliquam"),
        ID: "2ac299a6-e5e7-4aef-9340-2e945f53743e",
        Key: sdk.String("hic"),
        OauthToken: sdk.String("placeat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "repudiandae",
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("sint"),
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
            AccountID: sdk.String("quia"),
            AdBlockingOptOut: sdk.Bool(false),
            AdditionalSizes: []shared.Size{
                shared.Size{
                    Height: sdk.Int(71671),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("repellat"),
                    Kind: sdk.String("iste"),
                    Width: sdk.Int(730646),
                },
            },
            AdvertiserID: sdk.String("inventore"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("tenetur"),
                Etag: sdk.String("nihil"),
                ID: sdk.String("d9affe69-682a-4cee-bb04-f8c512caabea"),
                Kind: sdk.String("esse"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("blanditiis"),
            },
            Archived: sdk.Bool(false),
            CampaignID: sdk.String("voluptates"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("temporibus"),
                Etag: sdk.String("corporis"),
                ID: sdk.String("798d385d-4605-499d-9c33-49576d55209e"),
                Kind: sdk.String("perspiciatis"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("eos"),
            },
            Comment: sdk.String("qui"),
            Compatibility: shared.PlacementCompatibilityEnumApp.ToPointer(),
            ContentCategoryID: sdk.String("neque"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("facilis"),
            },
            DirectorySiteID: sdk.String("aliquid"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("possimus"),
                Etag: sdk.String("molestiae"),
                ID: sdk.String("65886eea-e5fd-44b3-9f8a-1490678f13c6"),
                Kind: sdk.String("laudantium"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("repellendus"),
            },
            ExternalID: sdk.String("quos"),
            ID: sdk.String("neque"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("omnis"),
                Etag: sdk.String("earum"),
                ID: sdk.String("c9e175ff-a906-4ae5-99b7-2eb6746030fe"),
                Kind: sdk.String("sunt"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("neque"),
            },
            KeyName: sdk.String("reprehenderit"),
            Kind: sdk.String("voluptas"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("eligendi"),
            },
            LookbackConfiguration: &shared.LookbackConfiguration{
                ClickDuration: sdk.Int(131120),
                PostImpressionActivitiesDuration: sdk.Int(710921),
            },
            Name: sdk.String("Wilfred Vandervort"),
            PaymentApproved: sdk.Bool(false),
            PaymentSource: shared.PlacementPaymentSourceEnumPlacementAgencyPaid.ToPointer(),
            PlacementGroupID: sdk.String("dignissimos"),
            PlacementGroupIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("perspiciatis"),
                Etag: sdk.String("quae"),
                ID: sdk.String("ed0c16a7-ba47-4840-8489-f6770ef04809"),
                Kind: sdk.String("illo"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("dolores"),
            },
            PlacementStrategyID: sdk.String("soluta"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostMonthly.ToPointer(),
                DisregardOverdelivery: sdk.Bool(false),
                EndDate: types.MustDateFromString("2022-08-19"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("repudiandae"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-03-17"),
                        PricingComment: sdk.String("odio"),
                        RateOrCostNanos: sdk.String("ad"),
                        StartDate: types.MustDateFromString("2021-01-11"),
                        Units: sdk.String("voluptatum"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-02-26"),
                        PricingComment: sdk.String("perferendis"),
                        RateOrCostNanos: sdk.String("laborum"),
                        StartDate: types.MustDateFromString("2022-05-01"),
                        Units: sdk.String("eveniet"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-09-14"),
                        PricingComment: sdk.String("vel"),
                        RateOrCostNanos: sdk.String("recusandae"),
                        StartDate: types.MustDateFromString("2022-05-21"),
                        Units: sdk.String("esse"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2021-03-21"),
                        PricingComment: sdk.String("nemo"),
                        RateOrCostNanos: sdk.String("officia"),
                        StartDate: types.MustDateFromString("2020-04-28"),
                        Units: sdk.String("eum"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeCpm.ToPointer(),
                StartDate: types.MustDateFromString("2021-06-14"),
                TestingStartDate: types.MustDateFromString("2021-06-06"),
            },
            Primary: sdk.Bool(false),
            PublisherUpdateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("deserunt"),
            },
            SiteID: sdk.String("nisi"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("aliquam"),
                Etag: sdk.String("nemo"),
                ID: sdk.String("de986755-1a9c-4ce6-9ec2-c79a39ae5a4d"),
                Kind: sdk.String("nemo"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("laboriosam"),
            },
            Size: &shared.Size{
                Height: sdk.Int(344243),
                Iab: sdk.Bool(false),
                ID: sdk.String("expedita"),
                Kind: sdk.String("tempora"),
                Width: sdk.Int(853750),
            },
            SslRequired: sdk.Bool(false),
            Status: shared.PlacementStatusEnumPaymentRejected.ToPointer(),
            SubaccountID: sdk.String("veniam"),
            TagFormats: []shared.PlacementTagFormatsEnum{
                shared.PlacementTagFormatsEnumPlacementTagIframeIlayer,
                shared.PlacementTagFormatsEnumPlacementTagInterstitialIframeJavascriptLegacy,
            },
            TagSetting: &shared.TagSetting{
                AdditionalKeyValues: sdk.String("cupiditate"),
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
                            Height: sdk.Int(826843),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("excepturi"),
                            Kind: sdk.String("recusandae"),
                            Width: sdk.Int(177443),
                        },
                        shared.Size{
                            Height: sdk.Int(814797),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("iure"),
                            Kind: sdk.String("delectus"),
                            Width: sdk.Int(798905),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("tenetur"),
                },
                Kind: sdk.String("veniam"),
                Orientation: shared.VideoSettingsOrientationEnumAny.ToPointer(),
                SkippableSettings: &shared.SkippableSetting{
                    Kind: sdk.String("esse"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(392307),
                        OffsetSeconds: sdk.Int(175103),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(575206),
                        OffsetSeconds: sdk.Int(861197),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.TranscodeSetting{
                    EnabledVideoFormats: []int{
                        547119,
                        464706,
                        323318,
                    },
                    Kind: sdk.String("quisquam"),
                },
            },
            VpaidAdapterChoice: shared.PlacementVpaidAdapterChoiceEnumDefault.ToPointer(),
        },
        AccessToken: sdk.String("culpa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perspiciatis"),
        Fields: sdk.String("sit"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dolores",
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("quasi"),
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
