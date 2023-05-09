# CreativeFields

### Available Operations

* [DfareportingCreativeFieldsDelete](#dfareportingcreativefieldsdelete) - Deletes an existing creative field.
* [DfareportingCreativeFieldsGet](#dfareportingcreativefieldsget) - Gets one creative field by ID.
* [DfareportingCreativeFieldsInsert](#dfareportingcreativefieldsinsert) - Inserts a new creative field.
* [DfareportingCreativeFieldsList](#dfareportingcreativefieldslist) - Retrieves a list of creative fields, possibly filtered. This method supports paging.
* [DfareportingCreativeFieldsPatch](#dfareportingcreativefieldspatch) - Updates an existing creative field. This method supports patch semantics.
* [DfareportingCreativeFieldsUpdate](#dfareportingcreativefieldsupdate) - Updates an existing creative field.

## DfareportingCreativeFieldsDelete

Deletes an existing creative field.

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
    res, err := s.CreativeFields.DfareportingCreativeFieldsDelete(ctx, operations.DfareportingCreativeFieldsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("iste"),
        ID: "6206bef2-b0a3-4e42-81aa-010e9aac2e91",
        Key: sdk.String("adipisci"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quis",
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("fugiat"),
    }, operations.DfareportingCreativeFieldsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DfareportingCreativeFieldsGet

Gets one creative field by ID.

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
    res, err := s.CreativeFields.DfareportingCreativeFieldsGet(ctx, operations.DfareportingCreativeFieldsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quas"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("voluptatibus"),
        ID: "97a4bfad-2bf7-4d67-8a84-ad99b41d6124",
        Key: sdk.String("velit"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nesciunt",
        QuotaUser: sdk.String("sunt"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("quam"),
    }, operations.DfareportingCreativeFieldsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeField != nil {
        // handle response
    }
}
```

## DfareportingCreativeFieldsInsert

Inserts a new creative field.

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
    res, err := s.CreativeFields.DfareportingCreativeFieldsInsert(ctx, operations.DfareportingCreativeFieldsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreativeField: &shared.CreativeField{
            AccountID: sdk.String("cumque"),
            AdvertiserID: sdk.String("delectus"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ea"),
                Etag: sdk.String("totam"),
                ID: sdk.String("b03ad421-bd43-4d1f-8cb0-a0003eb22d9b"),
                Kind: sdk.String("dolorem"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("in"),
            },
            ID: sdk.String("aperiam"),
            Kind: sdk.String("pariatur"),
            Name: sdk.String("Jay Wiza"),
            SubaccountID: sdk.String("iure"),
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("odio"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dicta",
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.DfareportingCreativeFieldsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeField != nil {
        // handle response
    }
}
```

## DfareportingCreativeFieldsList

Retrieves a list of creative fields, possibly filtered. This method supports paging.

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
    res, err := s.CreativeFields.DfareportingCreativeFieldsList(ctx, operations.DfareportingCreativeFieldsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        AdvertiserIds: []string{
            "nostrum",
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("ratione"),
        Ids: []string{
            "pariatur",
            "quo",
            "sequi",
        },
        Key: sdk.String("quo"),
        MaxResults: sdk.Int64(921724),
        OauthToken: sdk.String("ab"),
        PageToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nostrum",
        QuotaUser: sdk.String("labore"),
        SearchString: sdk.String("iusto"),
        SortField: operations.DfareportingCreativeFieldsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingCreativeFieldsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.DfareportingCreativeFieldsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeFieldsListResponse != nil {
        // handle response
    }
}
```

## DfareportingCreativeFieldsPatch

Updates an existing creative field. This method supports patch semantics.

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
    res, err := s.CreativeFields.DfareportingCreativeFieldsPatch(ctx, operations.DfareportingCreativeFieldsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreativeField: &shared.CreativeField{
            AccountID: sdk.String("autem"),
            AdvertiserID: sdk.String("natus"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quasi"),
                Etag: sdk.String("iure"),
                ID: sdk.String("6a8be344-4eac-48b3-a287-5c6c1fe606d0"),
                Kind: sdk.String("voluptate"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("qui"),
            },
            ID: sdk.String("deserunt"),
            Kind: sdk.String("error"),
            Name: sdk.String("Dwight Kovacek"),
            SubaccountID: sdk.String("nemo"),
        },
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("vel"),
        ID: "661a1d91-36a7-4e8d-9321-3f3f658752db",
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("autem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aliquam",
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("nostrum"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.DfareportingCreativeFieldsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeField != nil {
        // handle response
    }
}
```

## DfareportingCreativeFieldsUpdate

Updates an existing creative field.

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
    res, err := s.CreativeFields.DfareportingCreativeFieldsUpdate(ctx, operations.DfareportingCreativeFieldsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreativeField: &shared.CreativeField{
            AccountID: sdk.String("doloremque"),
            AdvertiserID: sdk.String("id"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("veniam"),
                Etag: sdk.String("ea"),
                ID: sdk.String("cebcada2-9ca7-4918-9c95-671663c530b5"),
                Kind: sdk.String("vel"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("minima"),
            },
            ID: sdk.String("et"),
            Kind: sdk.String("autem"),
            Name: sdk.String("Cecilia Friesen"),
            SubaccountID: sdk.String("deleniti"),
        },
        AccessToken: sdk.String("exercitationem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("id"),
        Key: sdk.String("tempore"),
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nostrum",
        QuotaUser: sdk.String("magni"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.DfareportingCreativeFieldsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeField != nil {
        // handle response
    }
}
```
