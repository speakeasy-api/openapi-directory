# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/klarna.com/payments/1.0.0/go
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.CancelAuthorization(ctx, operations.CancelAuthorizationRequest{
        AuthorizationToken: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Orders](docs/orders/README.md)

* [CancelAuthorization](docs/orders/README.md#cancelauthorization) - Cancel an existing authorization
* [CreateOrder](docs/orders/README.md#createorder) - Create a new order
* [PurchaseToken](docs/orders/README.md#purchasetoken) - Generate a consumer token

### [Sessions](docs/sessions/README.md)

* [CreateCreditSession](docs/sessions/README.md#createcreditsession) - Create a new payment session
* [ReadCreditSession](docs/sessions/README.md#readcreditsession) - Read an existing payment session
* [UpdateCreditSession](docs/sessions/README.md#updatecreditsession) - Update an existing payment session
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
