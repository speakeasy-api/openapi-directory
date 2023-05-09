# Sizes

### Available Operations

* [DfareportingSizesGet](#dfareportingsizesget) - Gets one size by ID.
* [DfareportingSizesInsert](#dfareportingsizesinsert) - Inserts a new size.
* [DfareportingSizesList](#dfareportingsizeslist) - Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.

## DfareportingSizesGet

Gets one size by ID.

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
    res, err := s.Sizes.DfareportingSizesGet(ctx, operations.DfareportingSizesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("animi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("id"),
        ID: "34c96be4-ce1f-48a2-89b9-e4b9a29d4c4a",
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "voluptates",
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("illo"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.DfareportingSizesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Size != nil {
        // handle response
    }
}
```

## DfareportingSizesInsert

Inserts a new size.

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
    res, err := s.Sizes.DfareportingSizesInsert(ctx, operations.DfareportingSizesInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Size: &shared.Size{
            Height: sdk.Int(542838),
            Iab: sdk.Bool(false),
            ID: sdk.String("consequatur"),
            Kind: sdk.String("autem"),
            Width: sdk.Int(504874),
        },
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloremque"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "eum",
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("unde"),
        UploadProtocol: sdk.String("possimus"),
    }, operations.DfareportingSizesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Size != nil {
        // handle response
    }
}
```

## DfareportingSizesList

Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.

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
    res, err := s.Sizes.DfareportingSizesList(ctx, operations.DfareportingSizesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("neque"),
        Height: sdk.Int64(881230),
        IabStandard: sdk.Bool(false),
        Ids: []string{
            "eos",
        },
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "magni",
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("odit"),
        Width: sdk.Int64(60548),
    }, operations.DfareportingSizesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SizesListResponse != nil {
        // handle response
    }
}
```
