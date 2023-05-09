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
        AccessToken: sdk.String("inventore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("unde"),
        CampaignID: sdk.String("eum"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("autem"),
        PlacementIds: []string{
            "fugiat",
            "laboriosam",
            "necessitatibus",
        },
        PrettyPrint: sdk.Bool(false),
        ProfileID: "amet",
        QuotaUser: sdk.String("recusandae"),
        TagFormats: []DfareportingPlacementsGeneratetagsTagFormatsEnum{
            operations.DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagInterstitialJavascriptLegacy,
        },
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("fugiat"),
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
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("perferendis"),
        ID: "334a11aa-1d5d-4224-bde9-b3d46170e768",
        Key: sdk.String("est"),
        OauthToken: sdk.String("perspiciatis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "vel",
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("sequi"),
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
            AccountID: sdk.String("totam"),
            AdBlockingOptOut: sdk.Bool(false),
            AdditionalSizes: []shared.Size{
                shared.Size{
                    Height: sdk.Int(532481),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("corrupti"),
                    Kind: sdk.String("sequi"),
                    Width: sdk.Int(598149),
                },
                shared.Size{
                    Height: sdk.Int(523191),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("vero"),
                    Kind: sdk.String("tempore"),
                    Width: sdk.Int(676871),
                },
            },
            AdvertiserID: sdk.String("architecto"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("expedita"),
                Etag: sdk.String("cum"),
                ID: sdk.String("f7143356-f634-49a1-a424-9b211ce46b95"),
                Kind: sdk.String("veritatis"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("enim"),
            },
            Archived: sdk.Bool(false),
            CampaignID: sdk.String("sunt"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("facilis"),
                Etag: sdk.String("beatae"),
                ID: sdk.String("58ca9142-f052-4632-b31c-ad692ffc8745"),
                Kind: sdk.String("ipsa"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("enim"),
            },
            Comment: sdk.String("itaque"),
            Compatibility: shared.PlacementCompatibilityEnumAppInterstitial.ToPointer(),
            ContentCategoryID: sdk.String("pariatur"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("velit"),
            },
            DirectorySiteID: sdk.String("temporibus"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("excepturi"),
                Etag: sdk.String("consectetur"),
                ID: sdk.String("4e036f5c-3886-464f-a985-530a2e2aed6a"),
                Kind: sdk.String("est"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("atque"),
            },
            ExternalID: sdk.String("ea"),
            ID: sdk.String("nesciunt"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("impedit"),
                Etag: sdk.String("eos"),
                ID: sdk.String("8d040c69-a3d9-406f-aebd-5ad7ec7394f2"),
                Kind: sdk.String("corporis"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("ex"),
            },
            KeyName: sdk.String("ratione"),
            Kind: sdk.String("tempora"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("rerum"),
            },
            LookbackConfiguration: &shared.LookbackConfiguration{
                ClickDuration: sdk.Int(191655),
                PostImpressionActivitiesDuration: sdk.Int(462072),
            },
            Name: sdk.String("Mrs. Donna Kunze"),
            PaymentApproved: sdk.Bool(false),
            PaymentSource: shared.PlacementPaymentSourceEnumPlacementAgencyPaid.ToPointer(),
            PlacementGroupID: sdk.String("soluta"),
            PlacementGroupIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("recusandae"),
                Etag: sdk.String("corrupti"),
                ID: sdk.String("c3e09c64-d342-4ac2-99a6-e5e7aef13402"),
                Kind: sdk.String("repudiandae"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("modi"),
            },
            PlacementStrategyID: sdk.String("ullam"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostCumulative.ToPointer(),
                EndDate: types.MustDateFromString("2022-10-11"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("quam"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-02-03"),
                        PricingComment: sdk.String("hic"),
                        RateOrCostNanos: sdk.String("placeat"),
                        StartDate: types.MustDateFromString("2022-09-16"),
                        Units: sdk.String("quae"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2021-12-27"),
                        PricingComment: sdk.String("quia"),
                        RateOrCostNanos: sdk.String("dolores"),
                        StartDate: types.MustDateFromString("2022-01-02"),
                        Units: sdk.String("iste"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeFlatRateClicks.ToPointer(),
                StartDate: types.MustDateFromString("2022-01-20"),
                TestingStartDate: types.MustDateFromString("2022-02-22"),
            },
            Primary: sdk.Bool(false),
            PublisherUpdateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("iste"),
            },
            SiteID: sdk.String("deserunt"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("earum"),
                Etag: sdk.String("a"),
                ID: sdk.String("e69682ac-eefb-404f-8c51-2caabea708ed"),
                Kind: sdk.String("corporis"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("iste"),
            },
            Size: &shared.Size{
                Height: sdk.Int(526368),
                Iab: sdk.Bool(false),
                ID: sdk.String("facere"),
                Kind: sdk.String("velit"),
                Width: sdk.Int(555464),
            },
            SslRequired: sdk.Bool(false),
            Status: shared.PlacementStatusEnumPaymentAccepted.ToPointer(),
            SubaccountID: sdk.String("illum"),
            TagFormats: []shared.PlacementTagFormatsEnum{
                shared.PlacementTagFormatsEnumPlacementTagClickCommands,
                shared.PlacementTagFormatsEnumPlacementTagStandard,
            },
            TagSetting: &shared.TagSetting{
                AdditionalKeyValues: sdk.String("ullam"),
                IncludeClickThroughUrls: sdk.Bool(false),
                IncludeClickTracking: sdk.Bool(false),
                KeywordOption: shared.TagSettingKeywordOptionEnumIgnore.ToPointer(),
            },
            VideoActiveViewOptOut: sdk.Bool(false),
            VideoSettings: &shared.VideoSettings{
                CompanionSettings: &shared.CompanionSetting{
                    CompanionsDisabled: sdk.Bool(false),
                    EnabledSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(842652),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("nostrum"),
                            Kind: sdk.String("impedit"),
                            Width: sdk.Int(202175),
                        },
                        shared.Size{
                            Height: sdk.Int(246585),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("magnam"),
                            Kind: sdk.String("cupiditate"),
                            Width: sdk.Int(364199),
                        },
                        shared.Size{
                            Height: sdk.Int(490431),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("eum"),
                            Kind: sdk.String("facere"),
                            Width: sdk.Int(326707),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("ullam"),
                },
                Kind: sdk.String("dolores"),
                ObaEnabled: sdk.Bool(false),
                ObaSettings: &shared.ObaIcon{
                    IconClickThroughURL: sdk.String("accusantium"),
                    IconClickTrackingURL: sdk.String("error"),
                    IconViewTrackingURL: sdk.String("officiis"),
                    Program: sdk.String("perspiciatis"),
                    ResourceURL: sdk.String("est"),
                    Size: &shared.Size{
                        Height: sdk.Int(180046),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("qui"),
                        Kind: sdk.String("corporis"),
                        Width: sdk.Int(205704),
                    },
                    XPosition: sdk.String("facilis"),
                    YPosition: sdk.String("aliquid"),
                },
                Orientation: shared.VideoSettingsOrientationEnumPortrait.ToPointer(),
                SkippableSettings: &shared.SkippableSetting{
                    Kind: sdk.String("molestiae"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(391682),
                        OffsetSeconds: sdk.Int(330300),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(508526),
                        OffsetSeconds: sdk.Int(515670),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.TranscodeSetting{
                    EnabledVideoFormats: []int{
                        892451,
                        934512,
                    },
                    Kind: sdk.String("similique"),
                },
            },
            VpaidAdapterChoice: shared.PlacementVpaidAdapterChoiceEnumBoth.ToPointer(),
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("dolore"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "perspiciatis",
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("mollitia"),
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
        AccessToken: sdk.String("eius"),
        AdvertiserIds: []string{
            "perferendis",
            "aliquid",
            "in",
        },
        Alt: shared.AltEnumMedia.ToPointer(),
        Archived: sdk.Bool(false),
        Callback: sdk.String("reiciendis"),
        CampaignIds: []string{
            "dolor",
        },
        Compatibilities: []DfareportingPlacementsListCompatibilitiesEnum{
            operations.DfareportingPlacementsListCompatibilitiesEnumApp,
            operations.DfareportingPlacementsListCompatibilitiesEnumAppInterstitial,
            operations.DfareportingPlacementsListCompatibilitiesEnumApp,
            operations.DfareportingPlacementsListCompatibilitiesEnumInStreamVideo,
        },
        ContentCategoryIds: []string{
            "neque",
            "omnis",
            "earum",
        },
        DirectorySiteIds: []string{
            "occaecati",
            "saepe",
            "illo",
            "esse",
        },
        Fields: sdk.String("enim"),
        GroupIds: []string{
            "maiores",
            "similique",
            "iste",
            "consequatur",
        },
        Ids: []string{
            "similique",
            "voluptates",
        },
        Key: sdk.String("enim"),
        MaxEndDate: sdk.String("corporis"),
        MaxResults: sdk.Int64(623929),
        MaxStartDate: sdk.String("soluta"),
        MinEndDate: sdk.String("nihil"),
        MinStartDate: sdk.String("fugit"),
        OauthToken: sdk.String("debitis"),
        PageToken: sdk.String("quidem"),
        PaymentSource: operations.DfareportingPlacementsListPaymentSourceEnumPlacementAgencyPaid.ToPointer(),
        PlacementStrategyIds: []string{
            "magnam",
            "vel",
        },
        PrettyPrint: sdk.Bool(false),
        PricingTypes: []DfareportingPlacementsListPricingTypesEnum{
            operations.DfareportingPlacementsListPricingTypesEnumPricingTypeCpc,
        },
        ProfileID: "sit",
        QuotaUser: sdk.String("doloribus"),
        SearchString: sdk.String("accusamus"),
        SiteIds: []string{
            "molestias",
        },
        SizeIds: []string{
            "reprehenderit",
        },
        SortField: operations.DfareportingPlacementsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingPlacementsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("expedita"),
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
            AccountID: sdk.String("at"),
            AdBlockingOptOut: sdk.Bool(false),
            AdditionalSizes: []shared.Size{
                shared.Size{
                    Height: sdk.Int(876660),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("iure"),
                    Kind: sdk.String("aliquid"),
                    Width: sdk.Int(492401),
                },
                shared.Size{
                    Height: sdk.Int(598689),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("quae"),
                    Kind: sdk.String("recusandae"),
                    Width: sdk.Int(839373),
                },
                shared.Size{
                    Height: sdk.Int(41824),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("porro"),
                    Kind: sdk.String("inventore"),
                    Width: sdk.Int(393289),
                },
                shared.Size{
                    Height: sdk.Int(671982),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("molestiae"),
                    Kind: sdk.String("harum"),
                    Width: sdk.Int(659362),
                },
            },
            AdvertiserID: sdk.String("dolore"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quam"),
                Etag: sdk.String("rem"),
                ID: sdk.String("404489f6-770e-4f04-8091-a2ba25ee6c75"),
                Kind: sdk.String("id"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("voluptatum"),
            },
            Archived: sdk.Bool(false),
            CampaignID: sdk.String("est"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("autem"),
                Etag: sdk.String("perferendis"),
                ID: sdk.String("a7ae346e-0979-4e5a-be60-acaca645de98"),
                Kind: sdk.String("laboriosam"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("ad"),
            },
            Comment: sdk.String("veniam"),
            Compatibility: shared.PlacementCompatibilityEnumDisplay.ToPointer(),
            ContentCategoryID: sdk.String("deserunt"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("iste"),
            },
            DirectorySiteID: sdk.String("porro"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("porro"),
                Etag: sdk.String("eveniet"),
                ID: sdk.String("61ec2c79-a39a-4e5a-8d5a-65b4d5562d9b"),
                Kind: sdk.String("odio"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("excepturi"),
            },
            ExternalID: sdk.String("recusandae"),
            ID: sdk.String("eos"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("facere"),
                Etag: sdk.String("iure"),
                ID: sdk.String("fcf55762-9db8-475c-ba89-0282a51f41cf"),
                Kind: sdk.String("iure"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("iste"),
            },
            KeyName: sdk.String("iure"),
            Kind: sdk.String("necessitatibus"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("illum"),
            },
            LookbackConfiguration: &shared.LookbackConfiguration{
                ClickDuration: sdk.Int(222133),
                PostImpressionActivitiesDuration: sdk.Int(831476),
            },
            Name: sdk.String("Kelly Funk IV"),
            PaymentApproved: sdk.Bool(false),
            PaymentSource: shared.PlacementPaymentSourceEnumPlacementPublisherPaid.ToPointer(),
            PlacementGroupID: sdk.String("ad"),
            PlacementGroupIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("rem"),
                Etag: sdk.String("beatae"),
                ID: sdk.String("e98cce3f-7166-400d-a0e3-aa61c6fe09d8"),
                Kind: sdk.String("minima"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("soluta"),
            },
            PlacementStrategyID: sdk.String("ad"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostNone.ToPointer(),
                EndDate: types.MustDateFromString("2022-08-06"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("eos"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2021-06-19"),
                        PricingComment: sdk.String("dignissimos"),
                        RateOrCostNanos: sdk.String("placeat"),
                        StartDate: types.MustDateFromString("2022-03-30"),
                        Units: sdk.String("esse"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-12-31"),
                        PricingComment: sdk.String("accusamus"),
                        RateOrCostNanos: sdk.String("inventore"),
                        StartDate: types.MustDateFromString("2022-07-11"),
                        Units: sdk.String("ipsum"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2021-04-19"),
                        PricingComment: sdk.String("perferendis"),
                        RateOrCostNanos: sdk.String("nostrum"),
                        StartDate: types.MustDateFromString("2020-11-14"),
                        Units: sdk.String("labore"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2021-02-23"),
                        PricingComment: sdk.String("illum"),
                        RateOrCostNanos: sdk.String("itaque"),
                        StartDate: types.MustDateFromString("2022-04-27"),
                        Units: sdk.String("quod"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeCpm.ToPointer(),
                StartDate: types.MustDateFromString("2022-07-22"),
                TestingStartDate: types.MustDateFromString("2022-05-10"),
            },
            Primary: sdk.Bool(false),
            PublisherUpdateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("excepturi"),
            },
            SiteID: sdk.String("aperiam"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("molestias"),
                Etag: sdk.String("iste"),
                ID: sdk.String("5528250d-cbbc-4d3b-921b-88c1ee5e7a06"),
                Kind: sdk.String("quasi"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("excepturi"),
            },
            Size: &shared.Size{
                Height: sdk.Int(97600),
                Iab: sdk.Bool(false),
                ID: sdk.String("placeat"),
                Kind: sdk.String("maxime"),
                Width: sdk.Int(513775),
            },
            SslRequired: sdk.Bool(false),
            Status: shared.PlacementStatusEnumDraft.ToPointer(),
            SubaccountID: sdk.String("deserunt"),
            TagFormats: []shared.PlacementTagFormatsEnum{
                shared.PlacementTagFormatsEnumPlacementTagIframeJavascriptLegacy,
            },
            TagSetting: &shared.TagSetting{
                AdditionalKeyValues: sdk.String("iusto"),
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
                            Height: sdk.Int(498103),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("autem"),
                            Kind: sdk.String("ut"),
                            Width: sdk.Int(580613),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("aspernatur"),
                },
                Kind: sdk.String("eum"),
                ObaEnabled: sdk.Bool(false),
                ObaSettings: &shared.ObaIcon{
                    IconClickThroughURL: sdk.String("facilis"),
                    IconClickTrackingURL: sdk.String("perferendis"),
                    IconViewTrackingURL: sdk.String("cumque"),
                    Program: sdk.String("doloribus"),
                    ResourceURL: sdk.String("minima"),
                    Size: &shared.Size{
                        Height: sdk.Int(925805),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("ex"),
                        Kind: sdk.String("impedit"),
                        Width: sdk.Int(688764),
                    },
                    XPosition: sdk.String("aliquid"),
                    YPosition: sdk.String("necessitatibus"),
                },
                Orientation: shared.VideoSettingsOrientationEnumPortrait.ToPointer(),
                SkippableSettings: &shared.SkippableSetting{
                    Kind: sdk.String("similique"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(709769),
                        OffsetSeconds: sdk.Int(894615),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(340254),
                        OffsetSeconds: sdk.Int(883011),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.TranscodeSetting{
                    EnabledVideoFormats: []int{
                        735850,
                    },
                    Kind: sdk.String("error"),
                },
            },
            VpaidAdapterChoice: shared.PlacementVpaidAdapterChoiceEnumHtml5.ToPointer(),
        },
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("illo"),
        ID: "358d6a87-bb7a-4ecb-a569-d70cb069907f",
        Key: sdk.String("provident"),
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "omnis",
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("vitae"),
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
            AccountID: sdk.String("nostrum"),
            AdBlockingOptOut: sdk.Bool(false),
            AdditionalSizes: []shared.Size{
                shared.Size{
                    Height: sdk.Int(634079),
                    Iab: sdk.Bool(false),
                    ID: sdk.String("sint"),
                    Kind: sdk.String("voluptatibus"),
                    Width: sdk.Int(59269),
                },
            },
            AdvertiserID: sdk.String("quasi"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("sapiente"),
                Etag: sdk.String("dolorem"),
                ID: sdk.String("442c61be-133b-4acd-a532-b6526f862853"),
                Kind: sdk.String("hic"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("eos"),
            },
            Archived: sdk.Bool(false),
            CampaignID: sdk.String("laudantium"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("enim"),
                Etag: sdk.String("provident"),
                ID: sdk.String("ce322231-fe66-464c-81d2-fba5cba069b8"),
                Kind: sdk.String("at"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("cupiditate"),
            },
            Comment: sdk.String("dicta"),
            Compatibility: shared.PlacementCompatibilityEnumInStreamVideo.ToPointer(),
            ContentCategoryID: sdk.String("recusandae"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("libero"),
            },
            DirectorySiteID: sdk.String("blanditiis"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quae"),
                Etag: sdk.String("eaque"),
                ID: sdk.String("a2aa8749-479e-4dd4-bcf7-b50cf87f08f3"),
                Kind: sdk.String("excepturi"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("esse"),
            },
            ExternalID: sdk.String("illo"),
            ID: sdk.String("perferendis"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("reprehenderit"),
                Etag: sdk.String("vel"),
                ID: sdk.String("a24b40c8-f08b-4ff1-881e-88f86996c8e2"),
                Kind: sdk.String("eos"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("eveniet"),
            },
            KeyName: sdk.String("aut"),
            Kind: sdk.String("similique"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("ipsum"),
            },
            LookbackConfiguration: &shared.LookbackConfiguration{
                ClickDuration: sdk.Int(805607),
                PostImpressionActivitiesDuration: sdk.Int(947724),
            },
            Name: sdk.String("Colleen Kutch"),
            PaymentApproved: sdk.Bool(false),
            PaymentSource: shared.PlacementPaymentSourceEnumPlacementPublisherPaid.ToPointer(),
            PlacementGroupID: sdk.String("fugiat"),
            PlacementGroupIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("fugit"),
                Etag: sdk.String("neque"),
                ID: sdk.String("f86600c6-1c78-4342-b3ca-a9118b38f1b6"),
                Kind: sdk.String("inventore"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("non"),
            },
            PlacementStrategyID: sdk.String("ratione"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostNone.ToPointer(),
                EndDate: types.MustDateFromString("2022-04-05"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("modi"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-10-19"),
                        PricingComment: sdk.String("voluptatem"),
                        RateOrCostNanos: sdk.String("magni"),
                        StartDate: types.MustDateFromString("2022-06-19"),
                        Units: sdk.String("reiciendis"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-08-25"),
                        PricingComment: sdk.String("voluptatibus"),
                        RateOrCostNanos: sdk.String("debitis"),
                        StartDate: types.MustDateFromString("2021-03-07"),
                        Units: sdk.String("nesciunt"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2021-07-31"),
                        PricingComment: sdk.String("mollitia"),
                        RateOrCostNanos: sdk.String("quas"),
                        StartDate: types.MustDateFromString("2021-07-11"),
                        Units: sdk.String("et"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-07-05"),
                        PricingComment: sdk.String("provident"),
                        RateOrCostNanos: sdk.String("iste"),
                        StartDate: types.MustDateFromString("2022-03-11"),
                        Units: sdk.String("magni"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeCpm.ToPointer(),
                StartDate: types.MustDateFromString("2020-05-03"),
                TestingStartDate: types.MustDateFromString("2022-11-04"),
            },
            Primary: sdk.Bool(false),
            PublisherUpdateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("odit"),
            },
            SiteID: sdk.String("quas"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("mollitia"),
                Etag: sdk.String("cumque"),
                ID: sdk.String("3adc647d-240b-4c11-aa48-2824ccc6a2f0"),
                Kind: sdk.String("reiciendis"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("libero"),
            },
            Size: &shared.Size{
                Height: sdk.Int(608055),
                Iab: sdk.Bool(false),
                ID: sdk.String("quibusdam"),
                Kind: sdk.String("dolor"),
                Width: sdk.Int(776373),
            },
            SslRequired: sdk.Bool(false),
            Status: shared.PlacementStatusEnumAcknowledgeAcceptance.ToPointer(),
            SubaccountID: sdk.String("inventore"),
            TagFormats: []shared.PlacementTagFormatsEnum{
                shared.PlacementTagFormatsEnumPlacementTagTrackingJavascript,
            },
            TagSetting: &shared.TagSetting{
                AdditionalKeyValues: sdk.String("nihil"),
                IncludeClickThroughUrls: sdk.Bool(false),
                IncludeClickTracking: sdk.Bool(false),
                KeywordOption: shared.TagSettingKeywordOptionEnumIgnore.ToPointer(),
            },
            VideoActiveViewOptOut: sdk.Bool(false),
            VideoSettings: &shared.VideoSettings{
                CompanionSettings: &shared.CompanionSetting{
                    CompanionsDisabled: sdk.Bool(false),
                    EnabledSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(489164),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("possimus"),
                            Kind: sdk.String("dolor"),
                            Width: sdk.Int(117947),
                        },
                        shared.Size{
                            Height: sdk.Int(29462),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("alias"),
                            Kind: sdk.String("necessitatibus"),
                            Width: sdk.Int(533710),
                        },
                        shared.Size{
                            Height: sdk.Int(922793),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("sed"),
                            Kind: sdk.String("cum"),
                            Width: sdk.Int(571693),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("soluta"),
                },
                Kind: sdk.String("voluptatem"),
                ObaEnabled: sdk.Bool(false),
                ObaSettings: &shared.ObaIcon{
                    IconClickThroughURL: sdk.String("repellendus"),
                    IconClickTrackingURL: sdk.String("dignissimos"),
                    IconViewTrackingURL: sdk.String("quaerat"),
                    Program: sdk.String("nisi"),
                    ResourceURL: sdk.String("possimus"),
                    Size: &shared.Size{
                        Height: sdk.Int(156247),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("dolorum"),
                        Kind: sdk.String("nihil"),
                        Width: sdk.Int(787591),
                    },
                    XPosition: sdk.String("molestiae"),
                    YPosition: sdk.String("fugiat"),
                },
                Orientation: shared.VideoSettingsOrientationEnumAny.ToPointer(),
                SkippableSettings: &shared.SkippableSetting{
                    Kind: sdk.String("debitis"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(676908),
                        OffsetSeconds: sdk.Int(21102),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(913700),
                        OffsetSeconds: sdk.Int(461817),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.TranscodeSetting{
                    EnabledVideoFormats: []int{
                        948895,
                        627191,
                        576904,
                    },
                    Kind: sdk.String("nobis"),
                },
            },
            VpaidAdapterChoice: shared.PlacementVpaidAdapterChoiceEnumHtml5.ToPointer(),
        },
        AccessToken: sdk.String("earum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("et"),
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "hic",
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("sit"),
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
