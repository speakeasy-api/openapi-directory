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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.KeysAPICurrentRequest{
        Serial: "corrupti",
    }

    ctx := context.Background()
    res, err := s.KeysAPI.KeysAPICurrent(ctx, req)
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


### KeysAPI

* `KeysAPICurrent`
* `KeysAPICustom`
* `KeysAPIExpiry`
* `KeysAPIFind`

### ProductsAPI

* `ProductsAPICount`
* `ProductsAPIDeleteProduct`
* `ProductsAPIDeleteProduct2`
* `ProductsAPIFind`
* `ProductsAPIList`
* `ProductsAPIPatchProduct`
* `ProductsAPIPatchProduct2`
* `ProductsAPISave`

### SubscriptionsAPI

* `SubscriptionsAPICount`
* `SubscriptionsAPIDeleteSubscription`
* `SubscriptionsAPIDeleteSubscription2`
* `SubscriptionsAPIDisable`
* `SubscriptionsAPIDisable2`
* `SubscriptionsAPIEnable`
* `SubscriptionsAPIEnable2`
* `SubscriptionsAPIFind`
* `SubscriptionsAPIList`
* `SubscriptionsAPIPutSubscription`
* `SubscriptionsAPIPutSubscription2`
* `SubscriptionsAPISave`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
