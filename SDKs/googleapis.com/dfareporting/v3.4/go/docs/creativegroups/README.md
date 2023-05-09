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
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("fuga"),
        ID: "d2bf7d67-ca84-4ad9-9b41-d61243531870",
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ea",
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("eaque"),
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
            AccountID: sdk.String("fuga"),
            AdvertiserID: sdk.String("assumenda"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("modi"),
                Etag: sdk.String("dolores"),
                ID: sdk.String("1bd43d1f-0cb0-4a00-83eb-22d9b3a70d94"),
                Kind: sdk.String("voluptatibus"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("deserunt"),
            },
            GroupNumber: sdk.Int(438281),
            ID: sdk.String("labore"),
            Kind: sdk.String("quasi"),
            Name: sdk.String("Zachary Kuhic DVM"),
            SubaccountID: sdk.String("vero"),
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("sit"),
        Key: sdk.String("nostrum"),
        OauthToken: sdk.String("doloremque"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "repellendus",
        QuotaUser: sdk.String("ratione"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("pariatur"),
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
        AccessToken: sdk.String("sequi"),
        AdvertiserIds: []string{
            "repudiandae",
            "ab",
            "praesentium",
            "nostrum",
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("sunt"),
        GroupNumber: sdk.Int64(945225),
        Ids: []string{
            "necessitatibus",
            "necessitatibus",
            "autem",
        },
        Key: sdk.String("natus"),
        MaxResults: sdk.Int64(95666),
        OauthToken: sdk.String("iure"),
        PageToken: sdk.String("ex"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "error",
        QuotaUser: sdk.String("deleniti"),
        SearchString: sdk.String("tempore"),
        SortField: operations.DfareportingCreativeGroupsListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingCreativeGroupsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("tempora"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreativeGroup: &shared.CreativeGroup{
            AccountID: sdk.String("debitis"),
            AdvertiserID: sdk.String("similique"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("porro"),
                Etag: sdk.String("blanditiis"),
                ID: sdk.String("b3a2875c-6c1f-4e60-ad07-d2a9c87ae50c"),
                Kind: sdk.String("vitae"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("voluptas"),
            },
            GroupNumber: sdk.Int(388490),
            ID: sdk.String("veritatis"),
            Kind: sdk.String("similique"),
            Name: sdk.String("Mrs. Paulette Mante"),
            SubaccountID: sdk.String("similique"),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("possimus"),
        ID: "53213f3f-6587-452d-b764-c59f0a56cebc",
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "laborum",
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("omnis"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreativeGroup: &shared.CreativeGroup{
            AccountID: sdk.String("iusto"),
            AdvertiserID: sdk.String("natus"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ab"),
                Etag: sdk.String("deleniti"),
                ID: sdk.String("1c956716-63c5-430b-9665-163a3638512a"),
                Kind: sdk.String("tempore"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("nostrum"),
            },
            GroupNumber: sdk.Int(168917),
            ID: sdk.String("sunt"),
            Kind: sdk.String("quidem"),
            Name: sdk.String("Emmett Daugherty IV"),
            SubaccountID: sdk.String("consequuntur"),
        },
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("quas"),
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "modi",
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("minus"),
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
