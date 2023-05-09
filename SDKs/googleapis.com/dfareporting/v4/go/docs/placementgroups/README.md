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
            ActiveStatus: shared.PlacementGroupActiveStatusEnumPlacementStatusActive.ToPointer(),
            AdvertiserID: sdk.String("beatae"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("magnam"),
                Etag: sdk.String("cumque"),
                ID: sdk.String("3db9ca9f-38bd-42be-8787-03493f49aa84"),
                Kind: sdk.String("ex"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("mollitia"),
            },
            CampaignID: sdk.String("sequi"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("eos"),
                Etag: sdk.String("laudantium"),
                ID: sdk.String("3279b719-d1ce-4a67-bd86-e3b35e49a313"),
                Kind: sdk.String("nemo"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("iusto"),
            },
            ChildPlacementIds: []string{
                "optio",
                "necessitatibus",
                "minima",
            },
            Comment: sdk.String("numquam"),
            ContentCategoryID: sdk.String("minus"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("id"),
            },
            DirectorySiteID: sdk.String("porro"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("libero"),
                Etag: sdk.String("perferendis"),
                ID: sdk.String("e3ea9750-45ba-4cf6-bb21-5186ab5e3a02"),
                Kind: sdk.String("qui"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("architecto"),
            },
            ExternalID: sdk.String("tempora"),
            ID: sdk.String("velit"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ab"),
                Etag: sdk.String("ad"),
                ID: sdk.String("d1568299-e61a-4fc7-986f-f20b7a73df40"),
                Kind: sdk.String("quo"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("alias"),
            },
            Kind: sdk.String("at"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("dignissimos"),
            },
            Name: sdk.String("Erin Kihn III"),
            PlacementGroupType: shared.PlacementGroupPlacementGroupTypeEnumPlacementPackage.ToPointer(),
            PlacementStrategyID: sdk.String("ab"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostCumulative.ToPointer(),
                EndDate: types.MustDateFromString("2021-01-13"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("aut"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-11-07"),
                        PricingComment: sdk.String("ducimus"),
                        RateOrCostNanos: sdk.String("et"),
                        StartDate: types.MustDateFromString("2022-08-22"),
                        Units: sdk.String("quaerat"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-11-24"),
                        PricingComment: sdk.String("repellendus"),
                        RateOrCostNanos: sdk.String("assumenda"),
                        StartDate: types.MustDateFromString("2022-12-28"),
                        Units: sdk.String("aliquid"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeCpmActiveview.ToPointer(),
                StartDate: types.MustDateFromString("2022-09-06"),
                TestingStartDate: types.MustDateFromString("2022-10-01"),
            },
            PrimaryPlacementID: sdk.String("rem"),
            PrimaryPlacementIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("magni"),
                Etag: sdk.String("ducimus"),
                ID: sdk.String("2bc9c322-1697-4b18-80fc-bb2b93c15f67"),
                Kind: sdk.String("alias"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("at"),
            },
            SiteID: sdk.String("quasi"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("nihil"),
                Etag: sdk.String("blanditiis"),
                ID: sdk.String("4831653e-eb3b-46e2-81c3-109983663c66"),
                Kind: sdk.String("quibusdam"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("libero"),
            },
            SubaccountID: sdk.String("expedita"),
        },
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("soluta"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aperiam",
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("totam"),
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
        AccessToken: sdk.String("modi"),
        ActiveStatus: []DfareportingPlacementGroupsListActiveStatusEnum{
            operations.DfareportingPlacementGroupsListActiveStatusEnumPlacementStatusInactive,
        },
        AdvertiserIds: []string{
            "eaque",
            "nihil",
            "dicta",
            "adipisci",
        },
        Alt: shared.AltEnumMedia.ToPointer(),
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
            ActiveStatus: shared.PlacementGroupActiveStatusEnumPlacementStatusInactive.ToPointer(),
            AdvertiserID: sdk.String("accusamus"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ut"),
                Etag: sdk.String("quae"),
                ID: sdk.String("48f90009-ed29-4027-8eb4-ae9d64161e91"),
                Kind: sdk.String("corporis"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("alias"),
            },
            CampaignID: sdk.String("ratione"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("sed"),
                Etag: sdk.String("amet"),
                ID: sdk.String("b2c09b92-4771-4f56-a9e5-b7ec7626649d"),
                Kind: sdk.String("atque"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("necessitatibus"),
            },
            ChildPlacementIds: []string{
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
            ActiveStatus: shared.PlacementGroupActiveStatusEnumPlacementStatusUnknown.ToPointer(),
            AdvertiserID: sdk.String("tempora"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("doloribus"),
                Etag: sdk.String("animi"),
                ID: sdk.String("20207e4f-ae03-48cd-bf1b-c2cabaf7fc2c"),
                Kind: sdk.String("minus"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("id"),
            },
            CampaignID: sdk.String("numquam"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("libero"),
                Etag: sdk.String("recusandae"),
                ID: sdk.String("f0df68ea-edb2-4ee7-8be0-69fb36add704"),
                Kind: sdk.String("sit"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("accusantium"),
            },
            ChildPlacementIds: []string{
                "consequatur",
                "fuga",
                "dolorem",
                "tenetur",
            },
            Comment: sdk.String("maxime"),
            ContentCategoryID: sdk.String("in"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("dolor"),
            },
            DirectorySiteID: sdk.String("animi"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ullam"),
                Etag: sdk.String("similique"),
                ID: sdk.String("034b1149-9243-4afa-a987-a472b709a153"),
                Kind: sdk.String("accusamus"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("fugit"),
            },
            ExternalID: sdk.String("amet"),
            ID: sdk.String("voluptatem"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("dicta"),
                Etag: sdk.String("quae"),
                ID: sdk.String("68539ce0-932d-410a-8d15-d8cc306b786b"),
                Kind: sdk.String("dolorem"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("amet"),
            },
            Kind: sdk.String("ducimus"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("harum"),
            },
            Name: sdk.String("Jeremy Ankunding"),
            PlacementGroupType: shared.PlacementGroupPlacementGroupTypeEnumPlacementPackage.ToPointer(),
            PlacementStrategyID: sdk.String("doloribus"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostNone.ToPointer(),
                EndDate: types.MustDateFromString("2022-12-18"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("nam"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-08-06"),
                        PricingComment: sdk.String("voluptatibus"),
                        RateOrCostNanos: sdk.String("voluptas"),
                        StartDate: types.MustDateFromString("2022-07-07"),
                        Units: sdk.String("dolorum"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-06-29"),
                        PricingComment: sdk.String("corporis"),
                        RateOrCostNanos: sdk.String("inventore"),
                        StartDate: types.MustDateFromString("2021-05-29"),
                        Units: sdk.String("dolor"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-07-16"),
                        PricingComment: sdk.String("incidunt"),
                        RateOrCostNanos: sdk.String("sint"),
                        StartDate: types.MustDateFromString("2022-11-11"),
                        Units: sdk.String("quas"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeCpc.ToPointer(),
                StartDate: types.MustDateFromString("2021-11-23"),
                TestingStartDate: types.MustDateFromString("2022-08-07"),
            },
            PrimaryPlacementID: sdk.String("nam"),
            PrimaryPlacementIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("distinctio"),
                Etag: sdk.String("aperiam"),
                ID: sdk.String("3c7fd225-e478-471a-88ed-72a2d4af4158"),
                Kind: sdk.String("id"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("magni"),
            },
            SiteID: sdk.String("repellendus"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("doloremque"),
                Etag: sdk.String("sapiente"),
                ID: sdk.String("0f58c3b8-7b47-4040-90d9-8e9d82c5e306"),
                Kind: sdk.String("voluptatibus"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("nostrum"),
            },
            SubaccountID: sdk.String("molestiae"),
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("quisquam"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("voluptates"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "cum",
        QuotaUser: sdk.String("consequatur"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("totam"),
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
