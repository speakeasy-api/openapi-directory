# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/keyserv.solutions/1.4.5/go
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
    res, err := s.KeysAPI.KeysAPICurrent(ctx, operations.KeysAPICurrentRequest{
        Serial: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeysAPICurrent200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [KeysAPI](docs/keysapi/README.md)

* [KeysAPICurrent](docs/keysapi/README.md#keysapicurrent)
* [KeysAPICustom](docs/keysapi/README.md#keysapicustom)
* [KeysAPIExpiry](docs/keysapi/README.md#keysapiexpiry)
* [KeysAPIFind](docs/keysapi/README.md#keysapifind)

### [ProductsAPI](docs/productsapi/README.md)

* [ProductsAPICount](docs/productsapi/README.md#productsapicount)
* [ProductsAPIDeleteProduct](docs/productsapi/README.md#productsapideleteproduct)
* [ProductsAPIDeleteProduct2](docs/productsapi/README.md#productsapideleteproduct2)
* [ProductsAPIFind](docs/productsapi/README.md#productsapifind)
* [ProductsAPIList](docs/productsapi/README.md#productsapilist)
* [ProductsAPIPatchProduct](docs/productsapi/README.md#productsapipatchproduct)
* [ProductsAPIPatchProduct2](docs/productsapi/README.md#productsapipatchproduct2)
* [ProductsAPISave](docs/productsapi/README.md#productsapisave)

### [SubscriptionsAPI](docs/subscriptionsapi/README.md)

* [SubscriptionsAPICount](docs/subscriptionsapi/README.md#subscriptionsapicount)
* [SubscriptionsAPIDeleteSubscription](docs/subscriptionsapi/README.md#subscriptionsapideletesubscription)
* [SubscriptionsAPIDeleteSubscription2](docs/subscriptionsapi/README.md#subscriptionsapideletesubscription2)
* [SubscriptionsAPIDisable](docs/subscriptionsapi/README.md#subscriptionsapidisable)
* [SubscriptionsAPIDisable2](docs/subscriptionsapi/README.md#subscriptionsapidisable2)
* [SubscriptionsAPIEnable](docs/subscriptionsapi/README.md#subscriptionsapienable)
* [SubscriptionsAPIEnable2](docs/subscriptionsapi/README.md#subscriptionsapienable2)
* [SubscriptionsAPIFind](docs/subscriptionsapi/README.md#subscriptionsapifind)
* [SubscriptionsAPIList](docs/subscriptionsapi/README.md#subscriptionsapilist)
* [SubscriptionsAPIPutSubscription](docs/subscriptionsapi/README.md#subscriptionsapiputsubscription)
* [SubscriptionsAPIPutSubscription2](docs/subscriptionsapi/README.md#subscriptionsapiputsubscription2)
* [SubscriptionsAPISave](docs/subscriptionsapi/README.md#subscriptionsapisave)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
