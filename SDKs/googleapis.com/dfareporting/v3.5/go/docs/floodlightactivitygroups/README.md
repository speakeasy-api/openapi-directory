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
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("delectus"),
        ID: "d1ccc341-c865-4734-b4f0-a740fb4ab441",
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "deserunt",
        QuotaUser: sdk.String("doloremque"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("saepe"),
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
            AccountID: sdk.String("commodi"),
            AdvertiserID: sdk.String("velit"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("perspiciatis"),
                Etag: sdk.String("omnis"),
                ID: sdk.String("5d808bbe-7944-455e-bc55-0a1c426b59c8"),
                Kind: sdk.String("dolor"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("ea"),
            },
            FloodlightConfigurationID: sdk.String("asperiores"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("facere"),
                Etag: sdk.String("maxime"),
                ID: sdk.String("c135582c-1b85-45e8-89d9-ef932e9000a1"),
                Kind: sdk.String("nesciunt"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("nulla"),
            },
            ID: sdk.String("voluptatum"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("veritatis"),
                Etag: sdk.String("consequuntur"),
                ID: sdk.String("4208efd2-3411-4898-a738-79efbe8baeba"),
                Kind: sdk.String("libero"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("odio"),
            },
            Kind: sdk.String("iste"),
            Name: sdk.String("Melanie DuBuque"),
            SubaccountID: sdk.String("excepturi"),
            TagString: sdk.String("ipsa"),
            Type: shared.FloodlightActivityGroupTypeEnumCounter.ToPointer(),
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("unde"),
        OauthToken: sdk.String("odio"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "eum",
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("iure"),
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
        AccessToken: sdk.String("voluptatem"),
        AdvertiserID: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("culpa"),
        FloodlightConfigurationID: sdk.String("quis"),
        Ids: []string{
            "voluptas",
            "dolorem",
            "eum",
        },
        Key: sdk.String("ipsam"),
        MaxResults: sdk.Int64(683057),
        OauthToken: sdk.String("odio"),
        PageToken: sdk.String("unde"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "sapiente",
        QuotaUser: sdk.String("ab"),
        SearchString: sdk.String("ipsam"),
        SortField: operations.DfareportingFloodlightActivityGroupsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingFloodlightActivityGroupsListSortOrderEnumAscending.ToPointer(),
        Type: operations.DfareportingFloodlightActivityGroupsListTypeEnumCounter.ToPointer(),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("accusantium"),
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
            AccountID: sdk.String("quo"),
            AdvertiserID: sdk.String("alias"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("illum"),
                Etag: sdk.String("neque"),
                ID: sdk.String("61fed8dc-5eff-4b45-be90-89e871fdb4d6"),
                Kind: sdk.String("perspiciatis"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("tempore"),
            },
            FloodlightConfigurationID: sdk.String("facere"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("at"),
                Etag: sdk.String("perspiciatis"),
                ID: sdk.String("c985e437-34a5-4d72-99ed-d785be5e7afe"),
                Kind: sdk.String("ullam"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("dolores"),
            },
            ID: sdk.String("occaecati"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("nihil"),
                Etag: sdk.String("tempore"),
                ID: sdk.String("a6281f44-e3a2-4339-8a68-cc80d30ff721"),
                Kind: sdk.String("aliquid"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("temporibus"),
            },
            Kind: sdk.String("alias"),
            Name: sdk.String("Marion Carroll"),
            SubaccountID: sdk.String("provident"),
            TagString: sdk.String("illum"),
            Type: shared.FloodlightActivityGroupTypeEnumSale.ToPointer(),
        },
        AccessToken: sdk.String("autem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("adipisci"),
        ID: "b89e0009-c669-42de-bb35-62201a6aab4a",
        Key: sdk.String("voluptates"),
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "harum",
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("ipsam"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FloodlightActivityGroup: &shared.FloodlightActivityGroup{
            AccountID: sdk.String("omnis"),
            AdvertiserID: sdk.String("alias"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("rem"),
                Etag: sdk.String("placeat"),
                ID: sdk.String("4e30491a-a35d-44a8-b9f0-3bab77b918f0"),
                Kind: sdk.String("neque"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("dolor"),
            },
            FloodlightConfigurationID: sdk.String("iste"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quos"),
                Etag: sdk.String("ut"),
                ID: sdk.String("507e0e39-c7e2-43ec-b060-4652e23a3d6c"),
                Kind: sdk.String("voluptas"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("reprehenderit"),
            },
            ID: sdk.String("vero"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("unde"),
                Etag: sdk.String("quibusdam"),
                ID: sdk.String("e8f7f002-d198-46aa-99d3-a1d32329e458"),
                Kind: sdk.String("ipsum"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("eveniet"),
            },
            Kind: sdk.String("atque"),
            Name: sdk.String("Clarence Nienow"),
            SubaccountID: sdk.String("tempore"),
            TagString: sdk.String("harum"),
            Type: shared.FloodlightActivityGroupTypeEnumCounter.ToPointer(),
        },
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("nostrum"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "repellendus",
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("corrupti"),
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
