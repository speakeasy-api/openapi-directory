# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/taxrates.io/1.0.0/go
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
    res, err := s.V1Tax.TaxRatesByCountryCode(ctx, operations.TaxRatesByCountryCodeRequest{
        CountryCode: sdk.String("US"),
        Date: sdk.String("2020-09-02"),
        Domain: sdk.String("api.taxrates.io"),
        Filter: sdk.String("corrupti"),
        ProductCodes: sdk.String("C010"),
        Province: sdk.String("provident"),
        Zip: sdk.String("71642"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxRatesByCountryCode200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [V1Tax](docs/v1tax/README.md)

* [TaxRatesByCountryCode](docs/v1tax/README.md#taxratesbycountrycode) - Tax rates by Country Code
* [TaxRatesByIPAddress](docs/v1tax/README.md#taxratesbyipaddress) - Tax rates by IP address

### [V3Tax](docs/v3tax/README.md)

* [AllTaxRates](docs/v3tax/README.md#alltaxrates) - All tax rates
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
