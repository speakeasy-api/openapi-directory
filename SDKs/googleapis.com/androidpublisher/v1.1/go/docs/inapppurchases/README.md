# Inapppurchases

### Available Operations

* [AndroidpublisherInapppurchasesGet](#androidpublisherinapppurchasesget) - Checks the purchase and consumption status of an inapp item.

## AndroidpublisherInapppurchasesGet

Checks the purchase and consumption status of an inapp item.

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
    res, err := s.Inapppurchases.AndroidpublisherInapppurchasesGet(ctx, operations.AndroidpublisherInapppurchasesGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("vel"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("deserunt"),
        PackageName: "suscipit",
        PrettyPrint: sdk.Bool(false),
        ProductID: "iure",
        QuotaUser: sdk.String("magnam"),
        Token: "debitis",
        UserIP: sdk.String("ipsa"),
    }, operations.AndroidpublisherInapppurchasesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
