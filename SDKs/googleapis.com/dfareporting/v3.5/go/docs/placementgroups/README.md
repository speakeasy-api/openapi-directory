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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("exercitationem"),
        Fields: sdk.String("molestias"),
        ID: "a65e2083-016c-4a34-bb87-d4f62127a607",
        Key: sdk.String("facere"),
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "voluptas",
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("explicabo"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PlacementGroup: &shared.PlacementGroup{
            AccountID: sdk.String("quaerat"),
            AdvertiserID: sdk.String("nostrum"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("beatae"),
                Etag: sdk.String("magnam"),
                ID: sdk.String("c3db9ca9-f38b-4d2b-a878-703493f49aa8"),
                Kind: sdk.String("labore"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("minima"),
            },
            Archived: sdk.Bool(false),
            CampaignID: sdk.String("mollitia"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("sequi"),
                Etag: sdk.String("eos"),
                ID: sdk.String("83279b71-9d1c-4ea6-b3d8-6e3b35e49a31"),
                Kind: sdk.String("consectetur"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("iusto"),
            },
            ChildPlacementIds: []string{
                "quas",
                "optio",
            },
            Comment: sdk.String("necessitatibus"),
            ContentCategoryID: sdk.String("minima"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("numquam"),
            },
            DirectorySiteID: sdk.String("minus"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("id"),
                Etag: sdk.String("porro"),
                ID: sdk.String("b0e3ea97-5045-4bac-b63b-215186ab5e3a"),
                Kind: sdk.String("alias"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("qui"),
            },
            ExternalID: sdk.String("autem"),
            ID: sdk.String("architecto"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("tempora"),
                Etag: sdk.String("velit"),
                ID: sdk.String("15d15682-99e6-41af-8718-6ff20b7a73df"),
                Kind: sdk.String("labore"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("quo"),
            },
            Kind: sdk.String("id"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("alias"),
            },
            Name: sdk.String("Cody Jacobs"),
            PlacementGroupType: shared.PlacementGroupPlacementGroupTypeEnumPlacementRoadblock.ToPointer(),
            PlacementStrategyID: sdk.String("quae"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostMonthly.ToPointer(),
                EndDate: types.MustDateFromString("2022-12-06"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("distinctio"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-12-17"),
                        PricingComment: sdk.String("nostrum"),
                        RateOrCostNanos: sdk.String("veniam"),
                        StartDate: types.MustDateFromString("2022-07-03"),
                        Units: sdk.String("et"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-08-22"),
                        PricingComment: sdk.String("quaerat"),
                        RateOrCostNanos: sdk.String("vitae"),
                        StartDate: types.MustDateFromString("2022-03-04"),
                        Units: sdk.String("assumenda"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-12-28"),
                        PricingComment: sdk.String("aliquid"),
                        RateOrCostNanos: sdk.String("at"),
                        StartDate: types.MustDateFromString("2022-09-06"),
                        Units: sdk.String("soluta"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeCpm.ToPointer(),
                StartDate: types.MustDateFromString("2022-09-01"),
                TestingStartDate: types.MustDateFromString("2022-11-07"),
            },
            PrimaryPlacementID: sdk.String("quidem"),
            PrimaryPlacementIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("minus"),
                Etag: sdk.String("cupiditate"),
                ID: sdk.String("c3221697-b188-40fc-bb2b-93c15f670bd1"),
                Kind: sdk.String("nihil"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("numquam"),
            },
            SiteID: sdk.String("blanditiis"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("sequi"),
                Etag: sdk.String("sunt"),
                ID: sdk.String("653eeb3b-6e24-41c3-9099-83663c66dcbb"),
                Kind: sdk.String("reprehenderit"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("reiciendis"),
            },
            SubaccountID: sdk.String("aliquid"),
        },
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aperiam"),
        Fields: sdk.String("molestias"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "distinctio",
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("praesentium"),
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
        AccessToken: sdk.String("eaque"),
        AdvertiserIds: []string{
            "dicta",
            "adipisci",
        },
        Alt: shared.AltEnumMedia.ToPointer(),
        Archived: sdk.Bool(false),
        Callback: sdk.String("in"),
        CampaignIds: []string{
            "repellendus",
            "saepe",
        },
        ContentCategoryIds: []string{
            "a",
            "voluptates",
        },
        DirectorySiteIds: []string{
            "quae",
            "doloremque",
            "et",
            "possimus",
        },
        Fields: sdk.String("unde"),
        Ids: []string{
            "praesentium",
            "aperiam",
        },
        Key: sdk.String("laborum"),
        MaxEndDate: sdk.String("dicta"),
        MaxResults: sdk.Int64(43445),
        MaxStartDate: sdk.String("minus"),
        MinEndDate: sdk.String("eius"),
        MinStartDate: sdk.String("odio"),
        OauthToken: sdk.String("rerum"),
        PageToken: sdk.String("provident"),
        PlacementGroupType: operations.DfareportingPlacementGroupsListPlacementGroupTypeEnumPlacementPackage.ToPointer(),
        PlacementStrategyIds: []string{
            "aliquam",
        },
        PrettyPrint: sdk.Bool(false),
        PricingTypes: []DfareportingPlacementGroupsListPricingTypesEnum{
            operations.DfareportingPlacementGroupsListPricingTypesEnumPricingTypeFlatRateClicks,
        },
        ProfileID: "vel",
        QuotaUser: sdk.String("minus"),
        SearchString: sdk.String("blanditiis"),
        SiteIds: []string{
            "quia",
            "similique",
            "ipsam",
        },
        SortField: operations.DfareportingPlacementGroupsListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingPlacementGroupsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("aspernatur"),
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
            AccountID: sdk.String("sit"),
            AdvertiserID: sdk.String("esse"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("accusamus"),
                Etag: sdk.String("ut"),
                ID: sdk.String("048f9000-9ed2-4902-b8eb-4ae9d64161e9"),
                Kind: sdk.String("sunt"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("quae"),
            },
            Archived: sdk.Bool(false),
            CampaignID: sdk.String("alias"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ratione"),
                Etag: sdk.String("sed"),
                ID: sdk.String("3b2c09b9-2477-41f5-a69e-5b7ec7626649"),
                Kind: sdk.String("possimus"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("aliquam"),
            },
            ChildPlacementIds: []string{
                "tempore",
                "provident",
                "recusandae",
                "numquam",
            },
            Comment: sdk.String("cumque"),
            ContentCategoryID: sdk.String("a"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("at"),
            },
            DirectorySiteID: sdk.String("dolores"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("odit"),
                Etag: sdk.String("molestiae"),
                ID: sdk.String("6e0b88fb-87d6-4fa5-b6e8-dbf812f83b1c"),
                Kind: sdk.String("animi"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("laborum"),
            },
            ExternalID: sdk.String("omnis"),
            ID: sdk.String("voluptatibus"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("asperiores"),
                Etag: sdk.String("impedit"),
                ID: sdk.String("561929cc-a956-40a1-b959-18da1d48e78e"),
                Kind: sdk.String("ipsum"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("asperiores"),
            },
            Kind: sdk.String("praesentium"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("accusamus"),
            },
            Name: sdk.String("Virginia Greenholt"),
            PlacementGroupType: shared.PlacementGroupPlacementGroupTypeEnumPlacementRoadblock.ToPointer(),
            PlacementStrategyID: sdk.String("natus"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostNone.ToPointer(),
                EndDate: types.MustDateFromString("2022-06-18"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("nobis"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-04-30"),
                        PricingComment: sdk.String("aut"),
                        RateOrCostNanos: sdk.String("voluptatum"),
                        StartDate: types.MustDateFromString("2021-01-23"),
                        Units: sdk.String("qui"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeCpm.ToPointer(),
                StartDate: types.MustDateFromString("2022-06-21"),
                TestingStartDate: types.MustDateFromString("2022-09-09"),
            },
            PrimaryPlacementID: sdk.String("amet"),
            PrimaryPlacementIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("iste"),
                Etag: sdk.String("libero"),
                ID: sdk.String("3de8756c-cce4-470c-9214-7b6e6152cf01"),
                Kind: sdk.String("quibusdam"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("vero"),
            },
            SiteID: sdk.String("voluptatum"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("eligendi"),
                Etag: sdk.String("dolor"),
                ID: sdk.String("a4b9a5bf-935d-4fe9-b4fa-4b1e9c097eda"),
                Kind: sdk.String("autem"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("neque"),
            },
            SubaccountID: sdk.String("magnam"),
        },
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptates"),
        Fields: sdk.String("beatae"),
        ID: "a9237e99-84c8-40b4-b9e8-91923c18ca8d",
        Key: sdk.String("vel"),
        OauthToken: sdk.String("cupiditate"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "porro",
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("rem"),
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
            AccountID: sdk.String("explicabo"),
            AdvertiserID: sdk.String("vitae"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("tempora"),
                Etag: sdk.String("doloribus"),
                ID: sdk.String("a20207e4-fae0-438c-97f1-bc2cabaf7fc2"),
                Kind: sdk.String("impedit"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("facilis"),
            },
            Archived: sdk.Bool(false),
            CampaignID: sdk.String("id"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("numquam"),
                Etag: sdk.String("libero"),
                ID: sdk.String("ef0df68e-aedb-42ee-b0be-069fb36add70"),
                Kind: sdk.String("ut"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("corrupti"),
            },
            ChildPlacementIds: []string{
                "saepe",
            },
            Comment: sdk.String("consequatur"),
            ContentCategoryID: sdk.String("fuga"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("dolorem"),
            },
            DirectorySiteID: sdk.String("tenetur"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("maxime"),
                Etag: sdk.String("in"),
                ID: sdk.String("3a5a034b-1149-4924-bafa-6987a472b709"),
                Kind: sdk.String("dolorum"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("minima"),
            },
            ExternalID: sdk.String("ipsum"),
            ID: sdk.String("accusamus"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("eos"),
                Etag: sdk.String("fugit"),
                ID: sdk.String("30106853-9ce0-4932-910a-cd15d8cc306b"),
                Kind: sdk.String("esse"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("nisi"),
            },
            Kind: sdk.String("libero"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("dolorem"),
            },
            Name: sdk.String("Allen Kunde"),
            PlacementGroupType: shared.PlacementGroupPlacementGroupTypeEnumPlacementPackage.ToPointer(),
            PlacementStrategyID: sdk.String("aut"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostNone.ToPointer(),
                EndDate: types.MustDateFromString("2022-11-15"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("doloribus"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-12-18"),
                        PricingComment: sdk.String("nam"),
                        RateOrCostNanos: sdk.String("rerum"),
                        StartDate: types.MustDateFromString("2022-08-06"),
                        Units: sdk.String("voluptatibus"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeCpa.ToPointer(),
                StartDate: types.MustDateFromString("2022-07-07"),
                TestingStartDate: types.MustDateFromString("2022-06-24"),
            },
            PrimaryPlacementID: sdk.String("praesentium"),
            PrimaryPlacementIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("corporis"),
                Etag: sdk.String("inventore"),
                ID: sdk.String("9c337490-2848-4826-bb03-c7fd225e4787"),
                Kind: sdk.String("architecto"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("blanditiis"),
            },
            SiteID: sdk.String("atque"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("necessitatibus"),
                Etag: sdk.String("possimus"),
                ID: sdk.String("72a2d4af-4158-4ac2-90f0-f58c3b87b470"),
                Kind: sdk.String("tempora"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("possimus"),
            },
            SubaccountID: sdk.String("aut"),
        },
        AccessToken: sdk.String("assumenda"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("unde"),
        OauthToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "laudantium",
        QuotaUser: sdk.String("eos"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("nostrum"),
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
