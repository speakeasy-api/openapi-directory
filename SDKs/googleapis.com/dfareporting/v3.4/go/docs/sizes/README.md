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
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("itaque"),
        ID: "028d32fc-eebb-49f3-9345-d2bcd18ade1c",
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("odio"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "amet",
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("itaque"),
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
            Height: sdk.Int(206123),
            Iab: sdk.Bool(false),
            ID: sdk.String("itaque"),
            Kind: sdk.String("reprehenderit"),
            Width: sdk.Int(951610),
        },
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("eos"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "suscipit",
        QuotaUser: sdk.String("illo"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("error"),
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
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("iusto"),
        Height: sdk.Int64(102322),
        IabStandard: sdk.Bool(false),
        Ids: []string{
            "vero",
            "atque",
            "libero",
        },
        Key: sdk.String("quisquam"),
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aliquam",
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("natus"),
        Width: sdk.Int64(522541),
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
