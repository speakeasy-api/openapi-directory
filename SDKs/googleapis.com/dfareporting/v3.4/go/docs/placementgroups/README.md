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
        AccessToken: sdk.String("autem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("dolores"),
        ID: "ff14e8c1-b352-4acc-adac-c5227814eca0",
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "cum",
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("inventore"),
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
            AccountID: sdk.String("harum"),
            AdvertiserID: sdk.String("quae"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("consectetur"),
                Etag: sdk.String("quaerat"),
                ID: sdk.String("2d4104a2-5ef7-41de-97a1-1d614a431769"),
                Kind: sdk.String("dolores"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("fuga"),
            },
            Archived: sdk.Bool(false),
            CampaignID: sdk.String("ut"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("totam"),
                Etag: sdk.String("laboriosam"),
                ID: sdk.String("73d522b8-28a9-4030-a60f-024c79b4cc64"),
                Kind: sdk.String("eligendi"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("libero"),
            },
            ChildPlacementIds: []string{
                "culpa",
            },
            Comment: sdk.String("ratione"),
            ContentCategoryID: sdk.String("odit"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("optio"),
            },
            DirectorySiteID: sdk.String("labore"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("voluptatum"),
                Etag: sdk.String("deleniti"),
                ID: sdk.String("ade62f6a-a558-4a65-a208-3016ca34bb87"),
                Kind: sdk.String("repellendus"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("repellat"),
            },
            ExternalID: sdk.String("eum"),
            ID: sdk.String("quia"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quae"),
                Etag: sdk.String("sed"),
                ID: sdk.String("7a607d16-0629-4451-8c3d-b9ca9f38bd2b"),
                Kind: sdk.String("vero"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("in"),
            },
            Kind: sdk.String("laudantium"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("molestiae"),
            },
            Name: sdk.String("Gladys Gulgowski"),
            PlacementGroupType: shared.PlacementGroupPlacementGroupTypeEnumPlacementRoadblock.ToPointer(),
            PlacementStrategyID: sdk.String("dolore"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostMonthly.ToPointer(),
                EndDate: types.MustDateFromString("2021-09-11"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("laudantium"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-09-04"),
                        PricingComment: sdk.String("mollitia"),
                        RateOrCostNanos: sdk.String("sequi"),
                        StartDate: types.MustDateFromString("2022-06-27"),
                        Units: sdk.String("adipisci"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-07-09"),
                        PricingComment: sdk.String("natus"),
                        RateOrCostNanos: sdk.String("facilis"),
                        StartDate: types.MustDateFromString("2022-11-22"),
                        Units: sdk.String("error"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeCpmActiveview.ToPointer(),
                StartDate: types.MustDateFromString("2022-03-30"),
                TestingStartDate: types.MustDateFromString("2021-01-27"),
            },
            PrimaryPlacementID: sdk.String("voluptas"),
            PrimaryPlacementIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("reprehenderit"),
                Etag: sdk.String("neque"),
                ID: sdk.String("d86e3b35-e49a-4313-9778-ce54cacb0e3e"),
                Kind: sdk.String("mollitia"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("ducimus"),
            },
            SiteID: sdk.String("minima"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("voluptatem"),
                Etag: sdk.String("labore"),
                ID: sdk.String("5bacf63b-2151-486a-b5e3-a022614315d1"),
                Kind: sdk.String("nostrum"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("totam"),
            },
            SubaccountID: sdk.String("magni"),
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "reiciendis",
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("veritatis"),
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
        AccessToken: sdk.String("suscipit"),
        AdvertiserIds: []string{
            "voluptatibus",
            "dolores",
            "alias",
            "tempore",
        },
        Alt: shared.AltEnumMedia.ToPointer(),
        Archived: sdk.Bool(false),
        Callback: sdk.String("fuga"),
        CampaignIds: []string{
            "dolor",
            "possimus",
        },
        ContentCategoryIds: []string{
            "labore",
            "accusantium",
            "quo",
            "id",
        },
        DirectorySiteIds: []string{
            "at",
        },
        Fields: sdk.String("dignissimos"),
        Ids: []string{
            "ad",
            "reprehenderit",
        },
        Key: sdk.String("placeat"),
        MaxEndDate: sdk.String("quae"),
        MaxResults: sdk.Int64(402947),
        MaxStartDate: sdk.String("eius"),
        MinEndDate: sdk.String("ab"),
        MinStartDate: sdk.String("distinctio"),
        OauthToken: sdk.String("facilis"),
        PageToken: sdk.String("maiores"),
        PlacementGroupType: operations.DfareportingPlacementGroupsListPlacementGroupTypeEnumPlacementPackage.ToPointer(),
        PlacementStrategyIds: []string{
            "veniam",
            "fugit",
        },
        PrettyPrint: sdk.Bool(false),
        PricingTypes: []DfareportingPlacementGroupsListPricingTypesEnum{
            operations.DfareportingPlacementGroupsListPricingTypesEnumPricingTypeCpm,
            operations.DfareportingPlacementGroupsListPricingTypesEnumPricingTypeFlatRateClicks,
        },
        ProfileID: "eos",
        QuotaUser: sdk.String("quaerat"),
        SearchString: sdk.String("vitae"),
        SiteIds: []string{
            "repellendus",
        },
        SortField: operations.DfareportingPlacementGroupsListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingPlacementGroupsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("aliquid"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PlacementGroup: &shared.PlacementGroup{
            AccountID: sdk.String("quibusdam"),
            AdvertiserID: sdk.String("beatae"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("soluta"),
                Etag: sdk.String("sunt"),
                ID: sdk.String("8272bc9c-3221-4697-b188-0fcbb2b93c15"),
                Kind: sdk.String("repellat"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("molestiae"),
            },
            Archived: sdk.Bool(false),
            CampaignID: sdk.String("alias"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("libero"),
                Etag: sdk.String("at"),
                ID: sdk.String("17848316-53ee-4b3b-ae24-1c3109983663"),
                Kind: sdk.String("placeat"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("commodi"),
            },
            ChildPlacementIds: []string{
                "cumque",
                "libero",
                "expedita",
                "reprehenderit",
            },
            Comment: sdk.String("nulla"),
            ContentCategoryID: sdk.String("reiciendis"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("aliquid"),
            },
            DirectorySiteID: sdk.String("porro"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("soluta"),
                Etag: sdk.String("aperiam"),
                ID: sdk.String("9c8b408e-0713-4774-9e4f-ee101d9780a1"),
                Kind: sdk.String("doloremque"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("eius"),
            },
            ExternalID: sdk.String("odio"),
            ID: sdk.String("rerum"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("provident"),
                Etag: sdk.String("nostrum"),
                ID: sdk.String("040d6c8b-2a5f-4002-a07e-4048f90009ed"),
                Kind: sdk.String("consequuntur"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("doloremque"),
            },
            Kind: sdk.String("qui"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("esse"),
            },
            Name: sdk.String("Tomas Price"),
            PlacementGroupType: shared.PlacementGroupPlacementGroupTypeEnumPlacementRoadblock.ToPointer(),
            PlacementStrategyID: sdk.String("iste"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostCumulative.ToPointer(),
                EndDate: types.MustDateFromString("2022-09-20"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("sunt"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-01-28"),
                        PricingComment: sdk.String("iste"),
                        RateOrCostNanos: sdk.String("sunt"),
                        StartDate: types.MustDateFromString("2022-12-09"),
                        Units: sdk.String("alias"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2022-11-07"),
                        PricingComment: sdk.String("amet"),
                        RateOrCostNanos: sdk.String("rerum"),
                        StartDate: types.MustDateFromString("2022-03-30"),
                        Units: sdk.String("voluptatem"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeFlatRateImpressions.ToPointer(),
                StartDate: types.MustDateFromString("2021-10-16"),
                TestingStartDate: types.MustDateFromString("2022-09-23"),
            },
            PrimaryPlacementID: sdk.String("voluptate"),
            PrimaryPlacementIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("odio"),
                Etag: sdk.String("dicta"),
                ID: sdk.String("f5669e5b-7ec7-4626-a49d-84eb9e4cfd22"),
                Kind: sdk.String("molestiae"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("officiis"),
            },
            SiteID: sdk.String("sit"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("expedita"),
                Etag: sdk.String("rem"),
                ID: sdk.String("8fb87d6f-a5b6-4e8d-bf81-2f83b1ca6a9f"),
                Kind: sdk.String("asperiores"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("quis"),
            },
            SubaccountID: sdk.String("nisi"),
        },
        AccessToken: sdk.String("vitae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("omnis"),
        ID: "cca9560a-1395-4918-9a1d-48e78e3cf8e1",
        Key: sdk.String("ab"),
        OauthToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "amet",
        QuotaUser: sdk.String("nulla"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("natus"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PlacementGroup: &shared.PlacementGroup{
            AccountID: sdk.String("eaque"),
            AdvertiserID: sdk.String("deleniti"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("nobis"),
                Etag: sdk.String("magni"),
                ID: sdk.String("7a08af22-1844-439b-bde8-756ccce470cd"),
                Kind: sdk.String("fugit"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("non"),
            },
            Archived: sdk.Bool(false),
            CampaignID: sdk.String("reprehenderit"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quidem"),
                Etag: sdk.String("eum"),
                ID: sdk.String("e6152cf0-1d0d-48c3-a4b9-a5bf935dfe97"),
                Kind: sdk.String("incidunt"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("similique"),
            },
            ChildPlacementIds: []string{
                "tempore",
                "et",
            },
            Comment: sdk.String("voluptates"),
            ContentCategoryID: sdk.String("excepturi"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("placeat"),
            },
            DirectorySiteID: sdk.String("consequatur"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("natus"),
                Etag: sdk.String("molestiae"),
                ID: sdk.String("eda62344-2e1a-4923-be99-84c80b479e89"),
                Kind: sdk.String("architecto"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("dolores"),
            },
            ExternalID: sdk.String("dolorem"),
            ID: sdk.String("eligendi"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("veritatis"),
                Etag: sdk.String("deleniti"),
                ID: sdk.String("ca8d69c5-6892-414f-a202-07e4fae038cd"),
                Kind: sdk.String("esse"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("ab"),
            },
            Kind: sdk.String("cum"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("minus"),
            },
            Name: sdk.String("Nichole Ortiz"),
            PlacementGroupType: shared.PlacementGroupPlacementGroupTypeEnumPlacementRoadblock.ToPointer(),
            PlacementStrategyID: sdk.String("dignissimos"),
            PricingSchedule: &shared.PricingSchedule{
                CapCostOption: shared.PricingScheduleCapCostOptionEnumCapCostCumulative.ToPointer(),
                EndDate: types.MustDateFromString("2022-06-18"),
                Flighted: sdk.Bool(false),
                FloodlightActivityID: sdk.String("impedit"),
                PricingPeriods: []shared.PricingSchedulePricingPeriod{
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2021-09-06"),
                        PricingComment: sdk.String("numquam"),
                        RateOrCostNanos: sdk.String("libero"),
                        StartDate: types.MustDateFromString("2020-01-11"),
                        Units: sdk.String("aperiam"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2020-02-02"),
                        PricingComment: sdk.String("nisi"),
                        RateOrCostNanos: sdk.String("voluptatum"),
                        StartDate: types.MustDateFromString("2021-01-16"),
                        Units: sdk.String("vero"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2020-11-18"),
                        PricingComment: sdk.String("consequuntur"),
                        RateOrCostNanos: sdk.String("earum"),
                        StartDate: types.MustDateFromString("2021-08-12"),
                        Units: sdk.String("consequatur"),
                    },
                    shared.PricingSchedulePricingPeriod{
                        EndDate: types.MustDateFromString("2021-02-21"),
                        PricingComment: sdk.String("alias"),
                        RateOrCostNanos: sdk.String("ea"),
                        StartDate: types.MustDateFromString("2021-01-04"),
                        Units: sdk.String("nam"),
                    },
                },
                PricingType: shared.PricingSchedulePricingTypeEnumPricingTypeCpc.ToPointer(),
                StartDate: types.MustDateFromString("2022-05-02"),
                TestingStartDate: types.MustDateFromString("2020-06-15"),
            },
            PrimaryPlacementID: sdk.String("odio"),
            PrimaryPlacementIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("sit"),
                Etag: sdk.String("ut"),
                ID: sdk.String("080e0a3f-c73a-45a0-b4b1-1499243afa69"),
                Kind: sdk.String("totam"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("est"),
            },
            SiteID: sdk.String("eius"),
            SiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ducimus"),
                Etag: sdk.String("fugit"),
                ID: sdk.String("b709a153-e223-4010-a853-9ce0932d10ac"),
                Kind: sdk.String("possimus"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("ad"),
            },
            SubaccountID: sdk.String("quibusdam"),
        },
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quisquam"),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ex"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quidem",
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("nisi"),
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
