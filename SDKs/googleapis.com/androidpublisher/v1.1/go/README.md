# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/androidpublisher/v1.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        Fields: sdk.String("corrupti"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("distinctio"),
        PackageName: "quibusdam",
        PrettyPrint: sdk.Bool(false),
        ProductID: "unde",
        QuotaUser: sdk.String("nulla"),
        Token: "corrupti",
        UserIP: sdk.String("illum"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Inapppurchases](docs/inapppurchases/README.md)

* [AndroidpublisherInapppurchasesGet](docs/inapppurchases/README.md#androidpublisherinapppurchasesget) - Checks the purchase and consumption status of an inapp item.

### [Purchases](docs/purchases/README.md)

* [AndroidpublisherPurchasesCancel](docs/purchases/README.md#androidpublisherpurchasescancel) - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* [AndroidpublisherPurchasesGet](docs/purchases/README.md#androidpublisherpurchasesget) - Checks whether a user's subscription purchase is valid and returns its expiry time.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
