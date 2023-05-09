# CreativeGroups

### Available Operations

* [DfareportingCreativeGroupsGet](#dfareportingcreativegroupsget) - Gets one creative group by ID.
* [DfareportingCreativeGroupsInsert](#dfareportingcreativegroupsinsert) - Inserts a new creative group.
* [DfareportingCreativeGroupsList](#dfareportingcreativegroupslist) - Retrieves a list of creative groups, possibly filtered. This method supports paging.
* [DfareportingCreativeGroupsPatch](#dfareportingcreativegroupspatch) - Updates an existing creative group. This method supports patch semantics.
* [DfareportingCreativeGroupsUpdate](#dfareportingcreativegroupsupdate) - Updates an existing creative group.

## DfareportingCreativeGroupsGet

Gets one creative group by ID.

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
    res, err := s.CreativeGroups.DfareportingCreativeGroupsGet(ctx, operations.DfareportingCreativeGroupsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("quos"),
        ID: "6d18f9f9-7a4b-4fad-abf7-d67ca84ad99b",
        Key: sdk.String("eius"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quibusdam",
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("magni"),
    }, operations.DfareportingCreativeGroupsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeGroup != nil {
        // handle response
    }
}
```

## DfareportingCreativeGroupsInsert

Inserts a new creative group.

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
    res, err := s.CreativeGroups.DfareportingCreativeGroupsInsert(ctx, operations.DfareportingCreativeGroupsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreativeGroup: &shared.CreativeGroup{
            AccountID: sdk.String("velit"),
            AdvertiserID: sdk.String("quis"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("nesciunt"),
                Etag: sdk.String("sunt"),
                ID: sdk.String("870cf68b-03ad-4421-bd43-d1f0cb0a0003"),
                Kind: sdk.String("earum"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("eos"),
            },
            GroupNumber: sdk.Int(152141),
            ID: sdk.String("fugiat"),
            Kind: sdk.String("sint"),
            Name: sdk.String("Leonard Padberg PhD"),
            SubaccountID: sdk.String("excepturi"),
        },
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quasi",
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("odio"),
    }, operations.DfareportingCreativeGroupsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeGroup != nil {
        // handle response
    }
}
```

## DfareportingCreativeGroupsList

Retrieves a list of creative groups, possibly filtered. This method supports paging.

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
    res, err := s.CreativeGroups.DfareportingCreativeGroupsList(ctx, operations.DfareportingCreativeGroupsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dicta"),
        AdvertiserIds: []string{
            "vero",
            "quibusdam",
            "maxime",
            "consequuntur",
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nostrum"),
        Fields: sdk.String("doloremque"),
        GroupNumber: sdk.Int64(831188),
        Ids: []string{
            "quos",
        },
        Key: sdk.String("pariatur"),
        MaxResults: sdk.Int64(776186),
        OauthToken: sdk.String("sequi"),
        PageToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "repudiandae",
        QuotaUser: sdk.String("ab"),
        SearchString: sdk.String("praesentium"),
        SortField: operations.DfareportingCreativeGroupsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingCreativeGroupsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("sunt"),
    }, operations.DfareportingCreativeGroupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeGroupsListResponse != nil {
        // handle response
    }
}
```

## DfareportingCreativeGroupsPatch

Updates an existing creative group. This method supports patch semantics.

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
    res, err := s.CreativeGroups.DfareportingCreativeGroupsPatch(ctx, operations.DfareportingCreativeGroupsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreativeGroup: &shared.CreativeGroup{
            AccountID: sdk.String("occaecati"),
            AdvertiserID: sdk.String("necessitatibus"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("necessitatibus"),
                Etag: sdk.String("autem"),
                ID: sdk.String("9166a8be-3444-4eac-8b3a-2875c6c1fe60"),
                Kind: sdk.String("nisi"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("alias"),
            },
            GroupNumber: sdk.Int(455550),
            ID: sdk.String("repellendus"),
            Kind: sdk.String("qui"),
            Name: sdk.String("Evan Russel"),
            SubaccountID: sdk.String("officia"),
        },
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("quod"),
        ID: "16661a1d-9136-4a7e-8d53-213f3f658752",
        Key: sdk.String("assumenda"),
        OauthToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "molestiae",
        QuotaUser: sdk.String("autem"),
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("maxime"),
    }, operations.DfareportingCreativeGroupsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeGroup != nil {
        // handle response
    }
}
```

## DfareportingCreativeGroupsUpdate

Updates an existing creative group.

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
    res, err := s.CreativeGroups.DfareportingCreativeGroupsUpdate(ctx, operations.DfareportingCreativeGroupsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreativeGroup: &shared.CreativeGroup{
            AccountID: sdk.String("occaecati"),
            AdvertiserID: sdk.String("asperiores"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("doloremque"),
                Etag: sdk.String("id"),
                ID: sdk.String("56cebcad-a29c-4a79-981c-95671663c530"),
                Kind: sdk.String("nam"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("vel"),
            },
            GroupNumber: sdk.Int(390583),
            ID: sdk.String("minima"),
            Kind: sdk.String("et"),
            Name: sdk.String("Carmen Nicolas"),
            SubaccountID: sdk.String("amet"),
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illo"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("tempore"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "fugit",
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("sunt"),
    }, operations.DfareportingCreativeGroupsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeGroup != nil {
        // handle response
    }
}
```
