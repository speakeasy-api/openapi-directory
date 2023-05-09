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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("eveniet"),
        ID: "26c2dcac-68b4-4d15-9a9b-b6e09716ae01",
        Key: sdk.String("optio"),
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nihil",
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("voluptates"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Size: &shared.Size{
            Height: sdk.Int(213703),
            Iab: sdk.Bool(false),
            ID: sdk.String("magnam"),
            Kind: sdk.String("id"),
            Width: sdk.Int(553723),
        },
        AccessToken: sdk.String("ratione"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("optio"),
        Fields: sdk.String("expedita"),
        Key: sdk.String("voluptatem"),
        OauthToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "autem",
        QuotaUser: sdk.String("aliquam"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("eveniet"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("sit"),
        Height: sdk.Int64(482453),
        IabStandard: sdk.Bool(false),
        Ids: []string{
            "optio",
            "quia",
            "inventore",
            "id",
        },
        Key: sdk.String("at"),
        OauthToken: sdk.String("animi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "doloremque",
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("quidem"),
        Width: sdk.Int64(475052),
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
