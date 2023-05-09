# FloodlightActivityGroups

### Available Operations

* [DfareportingFloodlightActivityGroupsGet](#dfareportingfloodlightactivitygroupsget) - Gets one floodlight activity group by ID.
* [DfareportingFloodlightActivityGroupsInsert](#dfareportingfloodlightactivitygroupsinsert) - Inserts a new floodlight activity group.
* [DfareportingFloodlightActivityGroupsList](#dfareportingfloodlightactivitygroupslist) - Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
* [DfareportingFloodlightActivityGroupsPatch](#dfareportingfloodlightactivitygroupspatch) - Updates an existing floodlight activity group. This method supports patch semantics.
* [DfareportingFloodlightActivityGroupsUpdate](#dfareportingfloodlightactivitygroupsupdate) - Updates an existing floodlight activity group.

## DfareportingFloodlightActivityGroupsGet

Gets one floodlight activity group by ID.

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
    res, err := s.FloodlightActivityGroups.DfareportingFloodlightActivityGroupsGet(ctx, operations.DfareportingFloodlightActivityGroupsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("dolorum"),
        ID: "91ec5262-4d00-4014-af45-cea11ac53ebb",
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("nostrum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "corrupti",
        QuotaUser: sdk.String("odio"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("consectetur"),
    }, operations.DfareportingFloodlightActivityGroupsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightActivityGroup != nil {
        // handle response
    }
}
```

## DfareportingFloodlightActivityGroupsInsert

Inserts a new floodlight activity group.

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
    res, err := s.FloodlightActivityGroups.DfareportingFloodlightActivityGroupsInsert(ctx, operations.DfareportingFloodlightActivityGroupsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FloodlightActivityGroup: &shared.FloodlightActivityGroup{
            AccountID: sdk.String("voluptatem"),
            AdvertiserID: sdk.String("magnam"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quae"),
                Etag: sdk.String("dolore"),
                ID: sdk.String("c5b9acee-400a-4e9f-92ca-f1b025f1d147"),
                Kind: sdk.String("sunt"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("maxime"),
            },
            FloodlightConfigurationID: sdk.String("nisi"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("voluptatibus"),
                Etag: sdk.String("est"),
                ID: sdk.String("2fad0c06-c5d9-4547-acdd-14fc43b70bca"),
                Kind: sdk.String("laudantium"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("reiciendis"),
            },
            ID: sdk.String("est"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("dignissimos"),
                Etag: sdk.String("eaque"),
                ID: sdk.String("c43351c3-dd1e-4b8f-bf75-f4f23f1c0a58"),
                Kind: sdk.String("commodi"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("non"),
            },
            Kind: sdk.String("mollitia"),
            Name: sdk.String("Lonnie Smith"),
            SubaccountID: sdk.String("voluptas"),
            TagString: sdk.String("odio"),
            Type: shared.FloodlightActivityGroupTypeEnumSale.ToPointer(),
        },
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("veniam"),
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("quae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "eius",
        QuotaUser: sdk.String("quia"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("perspiciatis"),
    }, operations.DfareportingFloodlightActivityGroupsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightActivityGroup != nil {
        // handle response
    }
}
```

## DfareportingFloodlightActivityGroupsList

Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.

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
    res, err := s.FloodlightActivityGroups.DfareportingFloodlightActivityGroupsList(ctx, operations.DfareportingFloodlightActivityGroupsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nam"),
        AdvertiserID: sdk.String("sunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("eveniet"),
        FloodlightConfigurationID: sdk.String("placeat"),
        Ids: []string{
            "doloribus",
            "voluptatibus",
            "iusto",
            "quo",
        },
        Key: sdk.String("non"),
        MaxResults: sdk.Int64(733211),
        OauthToken: sdk.String("quae"),
        PageToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "commodi",
        QuotaUser: sdk.String("itaque"),
        SearchString: sdk.String("occaecati"),
        SortField: operations.DfareportingFloodlightActivityGroupsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingFloodlightActivityGroupsListSortOrderEnumAscending.ToPointer(),
        Type: operations.DfareportingFloodlightActivityGroupsListTypeEnumSale.ToPointer(),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.DfareportingFloodlightActivityGroupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightActivityGroupsListResponse != nil {
        // handle response
    }
}
```

## DfareportingFloodlightActivityGroupsPatch

Updates an existing floodlight activity group. This method supports patch semantics.

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
    res, err := s.FloodlightActivityGroups.DfareportingFloodlightActivityGroupsPatch(ctx, operations.DfareportingFloodlightActivityGroupsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FloodlightActivityGroup: &shared.FloodlightActivityGroup{
            AccountID: sdk.String("debitis"),
            AdvertiserID: sdk.String("repudiandae"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("officia"),
                Etag: sdk.String("esse"),
                ID: sdk.String("68174680-63f7-499b-b956-c0b0fa0bb20a"),
                Kind: sdk.String("labore"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("voluptates"),
            },
            FloodlightConfigurationID: sdk.String("reprehenderit"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quo"),
                Etag: sdk.String("incidunt"),
                ID: sdk.String("ae640642-7265-47b0-9a07-c08fd3921c25"),
                Kind: sdk.String("reprehenderit"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("ratione"),
            },
            ID: sdk.String("consequatur"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("pariatur"),
                Etag: sdk.String("eum"),
                ID: sdk.String("f093a3ef-a46d-4366-9fa1-011a091b3ec8"),
                Kind: sdk.String("tempore"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("velit"),
            },
            Kind: sdk.String("totam"),
            Name: sdk.String("Bonnie Stokes MD"),
            SubaccountID: sdk.String("molestias"),
            TagString: sdk.String("at"),
            Type: shared.FloodlightActivityGroupTypeEnumCounter.ToPointer(),
        },
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("reprehenderit"),
        ID: "2e521f90-303d-4fc3-b839-7fffa6d1d320",
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "doloribus",
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.DfareportingFloodlightActivityGroupsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightActivityGroup != nil {
        // handle response
    }
}
```

## DfareportingFloodlightActivityGroupsUpdate

Updates an existing floodlight activity group.

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
    res, err := s.FloodlightActivityGroups.DfareportingFloodlightActivityGroupsUpdate(ctx, operations.DfareportingFloodlightActivityGroupsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FloodlightActivityGroup: &shared.FloodlightActivityGroup{
            AccountID: sdk.String("mollitia"),
            AdvertiserID: sdk.String("cumque"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("molestias"),
                Etag: sdk.String("asperiores"),
                ID: sdk.String("e1961ce9-be41-4c86-9dd7-d9719d07b200"),
                Kind: sdk.String("deserunt"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("praesentium"),
            },
            FloodlightConfigurationID: sdk.String("delectus"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("a"),
                Etag: sdk.String("temporibus"),
                ID: sdk.String("2967df8f-d882-4a8e-a0be-620cd9c5afdd"),
                Kind: sdk.String("doloremque"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("eligendi"),
            },
            ID: sdk.String("nesciunt"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("voluptate"),
                Etag: sdk.String("corporis"),
                ID: sdk.String("2512beae-1d87-4ecc-9fdc-ea8e7a883116"),
                Kind: sdk.String("laboriosam"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("porro"),
            },
            Kind: sdk.String("at"),
            Name: sdk.String("Duane Spencer"),
            SubaccountID: sdk.String("cumque"),
            TagString: sdk.String("sunt"),
            Type: shared.FloodlightActivityGroupTypeEnumSale.ToPointer(),
        },
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloremque"),
        Fields: sdk.String("nisi"),
        Key: sdk.String("eum"),
        OauthToken: sdk.String("odit"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nesciunt",
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.DfareportingFloodlightActivityGroupsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightActivityGroup != nil {
        // handle response
    }
}
```
