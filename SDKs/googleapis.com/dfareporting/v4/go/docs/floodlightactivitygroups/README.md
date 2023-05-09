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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("necessitatibus"),
        ID: "88ddb36f-d1cc-4c34-9c86-573474f0a740",
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "incidunt",
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("magnam"),
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
            AccountID: sdk.String("illo"),
            AdvertiserID: sdk.String("impedit"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ipsum"),
                Etag: sdk.String("deserunt"),
                ID: sdk.String("09e76399-5d80-48bb-a794-455ebc550a1c"),
                Kind: sdk.String("ut"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("nisi"),
            },
            FloodlightConfigurationID: sdk.String("rerum"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("nemo"),
                Etag: sdk.String("cupiditate"),
                ID: sdk.String("c8366fdc-c135-4582-81b8-55e889d9ef93"),
                Kind: sdk.String("fugit"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("omnis"),
            },
            ID: sdk.String("eaque"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("perferendis"),
                Etag: sdk.String("voluptatem"),
                ID: sdk.String("a13ad812-4208-4efd-a341-1898e73879ef"),
                Kind: sdk.String("facilis"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("voluptatum"),
            },
            Kind: sdk.String("rerum"),
            Name: sdk.String("Elias Renner"),
            SubaccountID: sdk.String("tempore"),
            TagString: sdk.String("odio"),
            Type: shared.FloodlightActivityGroupTypeEnumSale.ToPointer(),
        },
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("neque"),
        Fields: sdk.String("eum"),
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ipsa",
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("inventore"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        AdvertiserID: sdk.String("unde"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("adipisci"),
        FloodlightConfigurationID: sdk.String("architecto"),
        Ids: []string{
            "odit",
            "voluptatem",
        },
        Key: sdk.String("quidem"),
        MaxResults: sdk.Int64(476105),
        OauthToken: sdk.String("odio"),
        PageToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quis",
        QuotaUser: sdk.String("mollitia"),
        SearchString: sdk.String("voluptas"),
        SortField: operations.DfareportingFloodlightActivityGroupsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingFloodlightActivityGroupsListSortOrderEnumAscending.ToPointer(),
        Type: operations.DfareportingFloodlightActivityGroupsListTypeEnumCounter.ToPointer(),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("odio"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FloodlightActivityGroup: &shared.FloodlightActivityGroup{
            AccountID: sdk.String("sapiente"),
            AdvertiserID: sdk.String("ab"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ipsam"),
                Etag: sdk.String("quia"),
                ID: sdk.String("71f01c0d-361f-4ed8-9c5e-ffb453e9089e"),
                Kind: sdk.String("totam"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("inventore"),
            },
            FloodlightConfigurationID: sdk.String("asperiores"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("nulla"),
                Etag: sdk.String("soluta"),
                ID: sdk.String("4d697bdd-9c98-45e4-b734-a5d72d9edd78"),
                Kind: sdk.String("nostrum"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("vero"),
            },
            ID: sdk.String("quis"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("earum"),
                Etag: sdk.String("esse"),
                ID: sdk.String("afe55297-ba62-481f-84e3-a23394a68cc8"),
                Kind: sdk.String("sit"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("ratione"),
            },
            Kind: sdk.String("alias"),
            Name: sdk.String("Terrell Kuphal III"),
            SubaccountID: sdk.String("quaerat"),
            TagString: sdk.String("temporibus"),
            Type: shared.FloodlightActivityGroupTypeEnumCounter.ToPointer(),
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("repellat"),
        ID: "e9d96553-b89e-4000-9c66-92de7b356220",
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "voluptas",
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("cum"),
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
            AccountID: sdk.String("deserunt"),
            AdvertiserID: sdk.String("voluptates"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("in"),
                Etag: sdk.String("harum"),
                ID: sdk.String("1a5b908d-4e30-4491-aa35-d4a839f03bab"),
                Kind: sdk.String("molestiae"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("nam"),
            },
            FloodlightConfigurationID: sdk.String("occaecati"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quasi"),
                Etag: sdk.String("blanditiis"),
                ID: sdk.String("f0313984-507e-40e3-9c7e-23ecb0604652"),
                Kind: sdk.String("recusandae"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("ipsum"),
            },
            ID: sdk.String("similique"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("dolor"),
                Etag: sdk.String("nulla"),
                ID: sdk.String("6c657e9d-e8f7-4f00-ad19-86aa99d3a1d3"),
                Kind: sdk.String("odit"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("dolores"),
            },
            Kind: sdk.String("provident"),
            Name: sdk.String("Bernard Hermann"),
            SubaccountID: sdk.String("voluptate"),
            TagString: sdk.String("eveniet"),
            Type: shared.FloodlightActivityGroupTypeEnumSale.ToPointer(),
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("tempore"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "harum",
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("debitis"),
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
