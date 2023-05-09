# PlacementGroups

### Available Operations

* [DfareportingPlacementGroupsGet](#dfareportingplacementgroupsget) - Gets one placement group by ID.
* [DfareportingPlacementGroupsInsert](#dfareportingplacementgroupsinsert) - Inserts a new placement group.
* [DfareportingPlacementGroupsList](#dfareportingplacementgroupslist) - Retrieves a list of placement groups, possibly filtered. This method supports paging.
* [DfareportingPlacementGroupsPatch](#dfareportingplacementgroupspatch) - Updates an existing placement group. This method supports patch semantics.
* [DfareportingPlacementGroupsUpdate](#dfareportingplacementgroupsupdate) - Updates an existing placement group.

## DfareportingPlacementGroupsGet

Gets one placement group by ID.

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
    res, err := s.PlacementGroups.DfareportingPlacementGroupsGet(ctx, operations.DfareportingPlacementGroupsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("sit"),
        ID: "b6879216-3e67-4d48-8605-43c0a3049c3c",
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("voluptas"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "porro",
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.DfareportingPlacementGroupsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlacementGroup != nil {
        // handle response
    }
}
```

## DfareportingPlacementGroupsInsert

Inserts a new placement group.

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
    res, err := s.PlacementGroups.DfareportingPlacementGroupsInsert(ctx, operations.DfareportingPlacementGroupsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PlacementGroup: &shared.PlacementGroup{
            AccountID: sdk.String("necessitatibus"),
            AdvertiserID: sdk.String("dignissimos"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("libero"),
                Etag: sdk.String("qui"),
                ID: sdk.String("1bad90d2-743f-4d6c-aa10-e6c2978ec256"),
                Kind: sdk.String("officia"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("cum"),
            },
            Archived: sdk.Bool(false),
            CampaignID: sdk.String("voluptatem"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("sint"),
                Etag: sdk.String("consequuntur"),
                ID: sdk.String("27fcc479-96c9-477b-bc57-f38928a8600c"),
                Kind: sdk.String("ad"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("illum"),
            },
            ChildPlacementIds: []string{
                "iusto",
                "facere",
            },
            Comment: sdk.String("ea"),
            ContentCategoryID: sdk.String("sequi"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("voluptates"),
            },
            DirectorySiteID: sdk.String("tempora"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("similique"),
                Etag: sdk.String("officia"),
                ID: sdk.String("56846457-9cfc-46c0-a503-f56831f1d8ed"),
                Kind: sdk.String("rem"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("nobis"),
            },
            ExternalID: sdk.String("qui"),
            ID: sdk.String("totam"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("recusandae"),
                Etag: sdk.String("atque"),
                ID: sdk.String("afabc986-e241-4e43-b234-2417d13e3f62"),
                Kind: sdk.String("similique"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("cupiditate"),
            },
            Kind: sdk.String("culpa"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("recusandae"),
            },
            Name: sdk.String("Lee Tromp"),
            PlacementGroupType: shared.PlacementGroupPlacementGroupTypeEnumPlacementRoadblock.ToPointer(),
            PlacementStrategyID: sdk.String("numquam"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostMonthly.ToPointer(),
                DisregardOverdelivery: sdk.Bool(false),
                EndDate: types.MustDateFromString("2021-06-19"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("dolore"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-03-12"),
                        PricingComment: sdk.String("exercitationem"),
                        RateOrCostNanos: sdk.String("necessitatibus"),
                        StartDate: types.MustDateFromString("2021-08-10"),
                        Units: sdk.String("mollitia"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-03-02"),
                        PricingComment: sdk.String("incidunt"),
                        RateOrCostNanos: sdk.String("laborum"),
                        StartDate: types.MustDateFromString("2022-05-27"),
                        Units: sdk.String("similique"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-12-23"),
                        PricingComment: sdk.String("quas"),
                        RateOrCostNanos: sdk.String("soluta"),
                        StartDate: types.MustDateFromString("2022-05-03"),
                        Units: sdk.String("rem"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeCpm.ToPointer(),
                StartDate: types.MustDateFromString("2022-07-17"),
                TestingStartDate: types.MustDateFromString("2021-09-08"),
            },
            PrimaryPlacementID: sdk.String("deserunt"),
            PrimaryPlacementIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("rem"),
                Etag: sdk.String("fugiat"),
                ID: sdk.String("d71bddaa-30b7-4b91-849a-e69c088d418b"),
                Kind: sdk.String("libero"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("dicta"),
            },
            SiteID: sdk.String("totam"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("accusantium"),
                Etag: sdk.String("ut"),
                ID: sdk.String("f423d543-935f-4377-ac5c-9b7e93b6a3c5"),
                Kind: sdk.String("fugit"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("quasi"),
            },
            SubaccountID: sdk.String("doloremque"),
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "impedit",
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("alias"),
    }, operations.DfareportingPlacementGroupsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlacementGroup != nil {
        // handle response
    }
}
```

## DfareportingPlacementGroupsList

Retrieves a list of placement groups, possibly filtered. This method supports paging.

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
    res, err := s.PlacementGroups.DfareportingPlacementGroupsList(ctx, operations.DfareportingPlacementGroupsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("optio"),
        AdvertiserIds: []string{
            "voluptatum",
            "beatae",
            "explicabo",
        },
        Alt: shared.AltEnumMedia.ToPointer(),
        Archived: sdk.Bool(false),
        Callback: sdk.String("laboriosam"),
        CampaignIds: []string{
            "beatae",
            "eius",
        },
        ContentCategoryIds: []string{
            "unde",
            "ut",
            "magnam",
        },
        DirectorySiteIds: []string{
            "voluptatum",
            "recusandae",
            "sint",
        },
        Fields: sdk.String("doloremque"),
        Ids: []string{
            "veniam",
            "consequatur",
            "nihil",
        },
        Key: sdk.String("exercitationem"),
        MaxEndDate: sdk.String("nam"),
        MaxResults: sdk.Int64(790463),
        MaxStartDate: sdk.String("qui"),
        MinEndDate: sdk.String("exercitationem"),
        MinStartDate: sdk.String("dolorem"),
        OauthToken: sdk.String("praesentium"),
        PageToken: sdk.String("sed"),
        PlacementGroupType: operations.DfareportingPlacementGroupsListPlacementGroupTypeEnumPlacementPackage.ToPointer(),
        PlacementStrategyIds: []string{
            "nesciunt",
        },
        PrettyPrint: sdk.Bool(false),
        PricingTypes: []DfareportingPlacementGroupsListPricingTypesEnum{
            operations.DfareportingPlacementGroupsListPricingTypesEnumPricingTypeCpc,
            operations.DfareportingPlacementGroupsListPricingTypesEnumPricingTypeCpmActiveview,
        },
        ProfileID: "nobis",
        QuotaUser: sdk.String("doloremque"),
        SearchString: sdk.String("similique"),
        SiteIds: []string{
            "itaque",
            "autem",
        },
        SortField: operations.DfareportingPlacementGroupsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingPlacementGroupsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.DfareportingPlacementGroupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlacementGroupsListResponse != nil {
        // handle response
    }
}
```

## DfareportingPlacementGroupsPatch

Updates an existing placement group. This method supports patch semantics.

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
    res, err := s.PlacementGroups.DfareportingPlacementGroupsPatch(ctx, operations.DfareportingPlacementGroupsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PlacementGroup: &shared.PlacementGroup{
            AccountID: sdk.String("exercitationem"),
            AdvertiserID: sdk.String("molestiae"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("praesentium"),
                Etag: sdk.String("fugiat"),
                ID: sdk.String("171e2941-818f-4c67-9b6b-2f25359b855d"),
                Kind: sdk.String("aperiam"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("ad"),
            },
            Archived: sdk.Bool(false),
            CampaignID: sdk.String("quidem"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("aliquid"),
                Etag: sdk.String("quia"),
                ID: sdk.String("c8b83a38-a8a8-48c1-8420-0c2caeb1ae1e"),
                Kind: sdk.String("impedit"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("laudantium"),
            },
            ChildPlacementIds: []string{
                "adipisci",
                "eius",
                "cupiditate",
                "modi",
            },
            Comment: sdk.String("commodi"),
            ContentCategoryID: sdk.String("harum"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("quidem"),
            },
            DirectorySiteID: sdk.String("dolorum"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ducimus"),
                Etag: sdk.String("id"),
                ID: sdk.String("05a8b4a9-ec5b-4368-8cca-363272760e96"),
                Kind: sdk.String("autem"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("sint"),
            },
            ExternalID: sdk.String("nihil"),
            ID: sdk.String("voluptates"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("accusantium"),
                Etag: sdk.String("veniam"),
                ID: sdk.String("4103347d-78ff-4249-9145-fab9e59a4af3"),
                Kind: sdk.String("amet"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("aliquid"),
            },
            Kind: sdk.String("ex"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("dolore"),
            },
            Name: sdk.String("Gerard O'Conner"),
            PlacementGroupType: shared.PlacementGroupPlacementGroupTypeEnumPlacementRoadblock.ToPointer(),
            PlacementStrategyID: sdk.String("dolores"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostCumulative.ToPointer(),
                DisregardOverdelivery: sdk.Bool(false),
                EndDate: types.MustDateFromString("2022-09-16"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("quaerat"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2021-05-28"),
                        PricingComment: sdk.String("beatae"),
                        RateOrCostNanos: sdk.String("expedita"),
                        StartDate: types.MustDateFromString("2022-08-21"),
                        Units: sdk.String("magni"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2021-06-10"),
                        PricingComment: sdk.String("placeat"),
                        RateOrCostNanos: sdk.String("recusandae"),
                        StartDate: types.MustDateFromString("2020-12-20"),
                        Units: sdk.String("maxime"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-01-15"),
                        PricingComment: sdk.String("consequuntur"),
                        RateOrCostNanos: sdk.String("qui"),
                        StartDate: types.MustDateFromString("2022-06-16"),
                        Units: sdk.String("architecto"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-01-28"),
                        PricingComment: sdk.String("porro"),
                        RateOrCostNanos: sdk.String("fuga"),
                        StartDate: types.MustDateFromString("2022-11-25"),
                        Units: sdk.String("vel"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeFlatRateClicks.ToPointer(),
                StartDate: types.MustDateFromString("2022-02-02"),
                TestingStartDate: types.MustDateFromString("2022-01-30"),
            },
            PrimaryPlacementID: sdk.String("harum"),
            PrimaryPlacementIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quae"),
                Etag: sdk.String("consectetur"),
                ID: sdk.String("42d4104a-25ef-471d-a57a-11d614a43176"),
                Kind: sdk.String("sint"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("repudiandae"),
            },
            SiteID: sdk.String("fuga"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ut"),
                Etag: sdk.String("totam"),
                ID: sdk.String("673d522b-828a-4903-8660-f024c79b4cc6"),
                Kind: sdk.String("dolore"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("magni"),
            },
            SubaccountID: sdk.String("libero"),
        },
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ratione"),
        Fields: sdk.String("odit"),
        ID: "c488ade6-2f6a-4a55-8a65-e2083016ca34",
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "molestias",
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("labore"),
    }, operations.DfareportingPlacementGroupsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlacementGroup != nil {
        // handle response
    }
}
```

## DfareportingPlacementGroupsUpdate

Updates an existing placement group.

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
    res, err := s.PlacementGroups.DfareportingPlacementGroupsUpdate(ctx, operations.DfareportingPlacementGroupsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PlacementGroup: &shared.PlacementGroup{
            AccountID: sdk.String("eum"),
            AdvertiserID: sdk.String("quia"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quae"),
                Etag: sdk.String("sed"),
                ID: sdk.String("7a607d16-0629-4451-8c3d-b9ca9f38bd2b"),
                Kind: sdk.String("vero"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("in"),
            },
            Archived: sdk.Bool(false),
            CampaignID: sdk.String("laudantium"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("molestiae"),
                Etag: sdk.String("voluptatem"),
                ID: sdk.String("3493f49a-a846-45a3-a832-79b719d1cea6"),
                Kind: sdk.String("reprehenderit"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("facere"),
            },
            ChildPlacementIds: []string{
                "suscipit",
                "itaque",
                "nesciunt",
            },
            Comment: sdk.String("quidem"),
            ContentCategoryID: sdk.String("sequi"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("quis"),
            },
            DirectorySiteID: sdk.String("voluptates"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("aliquam"),
                Etag: sdk.String("perspiciatis"),
                ID: sdk.String("a3135778-ce54-4cac-b0e3-ea975045bacf"),
                Kind: sdk.String("ea"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("nam"),
            },
            ExternalID: sdk.String("sed"),
            ID: sdk.String("quasi"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("nemo"),
                Etag: sdk.String("sunt"),
                ID: sdk.String("86ab5e3a-0226-4143-95d1-568299e61afc"),
                Kind: sdk.String("in"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("totam"),
            },
            Kind: sdk.String("suscipit"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("asperiores"),
            },
            Name: sdk.String("Todd Abernathy"),
            PlacementGroupType: shared.PlacementGroupPlacementGroupTypeEnumPlacementRoadblock.ToPointer(),
            PlacementStrategyID: sdk.String("nihil"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostNone.ToPointer(),
                DisregardOverdelivery: sdk.Bool(false),
                EndDate: types.MustDateFromString("2020-02-07"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("labore"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2021-01-07"),
                        PricingComment: sdk.String("alias"),
                        RateOrCostNanos: sdk.String("at"),
                        StartDate: types.MustDateFromString("2022-08-07"),
                        Units: sdk.String("ad"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeCpa.ToPointer(),
                StartDate: types.MustDateFromString("2022-10-21"),
                TestingStartDate: types.MustDateFromString("2022-09-26"),
            },
            PrimaryPlacementID: sdk.String("ab"),
            PrimaryPlacementIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("distinctio"),
                Etag: sdk.String("facilis"),
                ID: sdk.String("f055271b-2511-4dd6-86dd-1b28272bc9c3"),
                Kind: sdk.String("magni"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("vitae"),
            },
            SiteID: sdk.String("ex"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("sint"),
                Etag: sdk.String("dignissimos"),
                ID: sdk.String("b1880fcb-b2b9-43c1-9f67-0bd178483165"),
                Kind: sdk.String("dolor"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("necessitatibus"),
            },
            SubaccountID: sdk.String("harum"),
        },
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("vero"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dicta",
        QuotaUser: sdk.String("quisquam"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.DfareportingPlacementGroupsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlacementGroup != nil {
        // handle response
    }
}
```
