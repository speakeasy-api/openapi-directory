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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("impedit"),
        ID: "354aa432-b47e-4176-bc52-08c23e9802d8",
        Key: sdk.String("ratione"),
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "alias",
        QuotaUser: sdk.String("repellendus"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("quis"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("soluta"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("blanditiis"),
        ID: "b674ee5c-fc18-4edc-bf78-7e32e04b3d3e",
        Key: sdk.String("facere"),
        OauthToken: sdk.String("quae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "cumque",
        QuotaUser: sdk.String("ullam"),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("reprehenderit"),
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
            AccountID: sdk.String("recusandae"),
            AdvertiserID: sdk.String("voluptatibus"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("dolore"),
                Etag: sdk.String("aspernatur"),
                ID: sdk.String("bd3c9f1c-c503-4f6c-b9bc-d0a6290f957f"),
                Kind: sdk.String("nesciunt"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("nemo"),
            },
            ID: sdk.String("ab"),
            Kind: sdk.String("atque"),
            Name: sdk.String("Shannon Schuster"),
            SubaccountID: sdk.String("reiciendis"),
        },
        AccessToken: sdk.String("voluptatum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        Fields: sdk.String("animi"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("eveniet"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quae",
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("dolorem"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("optio"),
        AdvertiserIds: []string{
            "odio",
            "unde",
            "asperiores",
        },
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("fugiat"),
        Ids: []string{
            "non",
            "aut",
            "neque",
            "quia",
        },
        Key: sdk.String("soluta"),
        MaxResults: sdk.Int64(684419),
        OauthToken: sdk.String("qui"),
        PageToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "a",
        QuotaUser: sdk.String("temporibus"),
        SearchString: sdk.String("sequi"),
        SortField: operations.DfareportingCreativeFieldsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingCreativeFieldsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("animi"),
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
            AccountID: sdk.String("dolores"),
            AdvertiserID: sdk.String("dicta"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("laboriosam"),
                Etag: sdk.String("distinctio"),
                ID: sdk.String("cb415835-c736-4417-a313-3edc046bc516"),
                Kind: sdk.String("amet"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("libero"),
            },
            ID: sdk.String("maxime"),
            Kind: sdk.String("deserunt"),
            Name: sdk.String("Jenny Daniel"),
            SubaccountID: sdk.String("minus"),
        },
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("aspernatur"),
        ID: "2c553504-95c5-4dbb-bc57-c1e4981e8aa2",
        Key: sdk.String("enim"),
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "assumenda",
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("quasi"),
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
            AccountID: sdk.String("inventore"),
            AdvertiserID: sdk.String("fugit"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("earum"),
                Etag: sdk.String("quidem"),
                ID: sdk.String("de64bfcc-5469-4d40-95df-a796206bef2b"),
                Kind: sdk.String("aperiam"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("ratione"),
            },
            ID: sdk.String("itaque"),
            Kind: sdk.String("non"),
            Name: sdk.String("Robyn Braun"),
            SubaccountID: sdk.String("perferendis"),
        },
        AccessToken: sdk.String("illo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eveniet"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quo",
        QuotaUser: sdk.String("sunt"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("iste"),
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
