# Purchases

### Available Operations

* [AndroidpublisherPurchasesCancel](#androidpublisherpurchasescancel) - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* [AndroidpublisherPurchasesGet](#androidpublisherpurchasesget) - Checks whether a user's subscription purchase is valid and returns its expiry time.

## AndroidpublisherPurchasesCancel

Cancels a user's subscription purchase. The subscription remains valid until its expiration time.

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
    res, err := s.Purchases.AndroidpublisherPurchasesCancel(ctx, operations.AndroidpublisherPurchasesCancelRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("delectus"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("suscipit"),
        PackageName: "molestiae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        SubscriptionID: "placeat",
        Token: "voluptatum",
        UserIP: sdk.String("iusto"),
    }, operations.AndroidpublisherPurchasesCancelSecurity{
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

## AndroidpublisherPurchasesGet

Checks whether a user's subscription purchase is valid and returns its expiry time.

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
    res, err := s.Purchases.AndroidpublisherPurchasesGet(ctx, operations.AndroidpublisherPurchasesGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("recusandae"),
        PackageName: "temporibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        SubscriptionID: "quis",
        Token: "veritatis",
        UserIP: sdk.String("deserunt"),
    }, operations.AndroidpublisherPurchasesGetSecurity{
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
