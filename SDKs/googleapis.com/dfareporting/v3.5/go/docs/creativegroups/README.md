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
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("ipsa"),
        ID: "72467b8a-40bc-405f-ab0d-650edf22a94d",
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("aperiam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "itaque",
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("perspiciatis"),
        UploadProtocol: sdk.String("accusantium"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreativeGroup: &shared.CreativeGroup{
            AccountID: sdk.String("animi"),
            AdvertiserID: sdk.String("aliquam"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quasi"),
                Etag: sdk.String("repellendus"),
                ID: sdk.String("1f465e85-156f-4ff7-bfdf-54fdd5ea9543"),
                Kind: sdk.String("sequi"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("voluptatum"),
            },
            GroupNumber: sdk.Int(850699),
            ID: sdk.String("laborum"),
            Kind: sdk.String("sapiente"),
            Name: sdk.String("Ray Dach"),
            SubaccountID: sdk.String("assumenda"),
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("neque"),
        Fields: sdk.String("laudantium"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "incidunt",
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("aut"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("error"),
        AdvertiserIds: []string{
            "culpa",
            "quis",
            "asperiores",
            "iste",
        },
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sunt"),
        Fields: sdk.String("atque"),
        GroupNumber: sdk.Int64(630017),
        Ids: []string{
            "tempora",
        },
        Key: sdk.String("modi"),
        MaxResults: sdk.Int64(956532),
        OauthToken: sdk.String("possimus"),
        PageToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ab",
        QuotaUser: sdk.String("omnis"),
        SearchString: sdk.String("aut"),
        SortField: operations.DfareportingCreativeGroupsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingCreativeGroupsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("dolorum"),
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
            AccountID: sdk.String("assumenda"),
            AdvertiserID: sdk.String("velit"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("voluptatum"),
                Etag: sdk.String("eveniet"),
                ID: sdk.String("d0dc671d-c7f1-4e3a-b159-20c90d1b4901"),
                Kind: sdk.String("repellat"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("harum"),
            },
            GroupNumber: sdk.Int(845115),
            ID: sdk.String("totam"),
            Kind: sdk.String("provident"),
            Name: sdk.String("Everett Ondricka"),
            SubaccountID: sdk.String("vel"),
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("similique"),
        ID: "5b7b6902-b881-4a94-b643-664a8f0af8c6",
        Key: sdk.String("natus"),
        OauthToken: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "placeat",
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("quia"),
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
            AccountID: sdk.String("occaecati"),
            AdvertiserID: sdk.String("doloribus"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("libero"),
                Etag: sdk.String("culpa"),
                ID: sdk.String("f9476a2a-e8dc-4c50-88a3-512c73784893"),
                Kind: sdk.String("alias"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("minima"),
            },
            GroupNumber: sdk.Int(52819),
            ID: sdk.String("mollitia"),
            Kind: sdk.String("alias"),
            Name: sdk.String("Sophia Mayer"),
            SubaccountID: sdk.String("eveniet"),
        },
        AccessToken: sdk.String("eligendi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("eum"),
        Key: sdk.String("possimus"),
        OauthToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "neque",
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("quaerat"),
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
