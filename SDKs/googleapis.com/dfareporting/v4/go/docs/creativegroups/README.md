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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("dolorum"),
        ID: "70d94faa-741c-457d-9fed-c2050d38dc3c",
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "praesentium",
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("iusto"),
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
            AccountID: sdk.String("tenetur"),
            AdvertiserID: sdk.String("occaecati"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("necessitatibus"),
                Etag: sdk.String("necessitatibus"),
                ID: sdk.String("69166a8b-e344-44ea-88b3-a2875c6c1fe6"),
                Kind: sdk.String("perferendis"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("quibusdam"),
            },
            GroupNumber: sdk.Int(1819),
            ID: sdk.String("voluptate"),
            Kind: sdk.String("repellendus"),
            Name: sdk.String("Joanna Mueller"),
            SubaccountID: sdk.String("nihil"),
        },
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("vitae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "vel",
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("veritatis"),
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
        AccessToken: sdk.String("veritatis"),
        AdvertiserIds: []string{
            "excepturi",
            "veritatis",
            "ipsum",
            "iure",
        },
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("itaque"),
        GroupNumber: sdk.Int64(531941),
        Ids: []string{
            "minima",
            "non",
            "qui",
            "et",
        },
        Key: sdk.String("amet"),
        MaxResults: sdk.Int64(950193),
        OauthToken: sdk.String("velit"),
        PageToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "commodi",
        QuotaUser: sdk.String("voluptas"),
        SearchString: sdk.String("quos"),
        SortField: operations.DfareportingCreativeGroupsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingCreativeGroupsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("assumenda"),
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
            AccountID: sdk.String("molestiae"),
            AdvertiserID: sdk.String("autem"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("aliquam"),
                Etag: sdk.String("maxime"),
                ID: sdk.String("59f0a56c-ebca-4da2-9ca7-9181c9567166"),
                Kind: sdk.String("dolorem"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("ad"),
            },
            GroupNumber: sdk.Int(215011),
            ID: sdk.String("ipsa"),
            Kind: sdk.String("nam"),
            Name: sdk.String("Kristin Hudson III"),
            SubaccountID: sdk.String("dolor"),
        },
        AccessToken: sdk.String("culpa"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("amet"),
        ID: "8512ab25-21b9-4f2e-8724-67b8a40bc05f",
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "voluptatem",
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("quis"),
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
            AccountID: sdk.String("itaque"),
            AdvertiserID: sdk.String("facere"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("asperiores"),
                Etag: sdk.String("ratione"),
                ID: sdk.String("2a94d20e-c90e-4a41-91f4-65e85156fff7"),
                Kind: sdk.String("amet"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("temporibus"),
            },
            GroupNumber: sdk.Int(945921),
            ID: sdk.String("nostrum"),
            Kind: sdk.String("tempora"),
            Name: sdk.String("Carroll Stanton"),
            SubaccountID: sdk.String("deserunt"),
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("sequi"),
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "voluptatum",
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("sapiente"),
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
