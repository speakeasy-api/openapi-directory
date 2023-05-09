# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ote-godaddy.com/aftermarket/1.0.0/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1.AddExpiryListingsJSON(ctx, []shared.AftermarketListingExpiryCreate{
        shared.AftermarketListingExpiryCreate{
            Domain: "provident",
            ExpiresAt: "distinctio",
            LosingRegistrarID: 844266,
            PageViewsMonthly: sdk.Int64(602763),
            RevenueMonthly: sdk.Int64(857946),
        },
        shared.AftermarketListingExpiryCreate{
            Domain: "corrupti",
            ExpiresAt: "illum",
            LosingRegistrarID: 423655,
            PageViewsMonthly: sdk.Int64(623564),
            RevenueMonthly: sdk.Int64(645894),
        },
        shared.AftermarketListingExpiryCreate{
            Domain: "suscipit",
            ExpiresAt: "iure",
            LosingRegistrarID: 297534,
            PageViewsMonthly: sdk.Int64(891773),
            RevenueMonthly: sdk.Int64(56713),
        },
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


### [V1](docs/v1/README.md)

* [AddExpiryListingsJSON](docs/v1/README.md#addexpirylistingsjson) - Add expiry listings into GoDaddy Auction
* [AddExpiryListingsRaw](docs/v1/README.md#addexpirylistingsraw) - Add expiry listings into GoDaddy Auction
* [DeleteListings](docs/v1/README.md#deletelistings) - Remove listings from GoDaddy Auction
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
