# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ote-godaddy.com/countries/1.0.0/go
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

    req := operations.GetCountriesRequest{
        MarketID: "corrupti",
        Order: "descending",
        RegionName: "distinctio",
        RegionTypeID: 844266,
        Sort: "label",
    }

    ctx := context.Background()
    res, err := s.V1.GetCountries(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ArrayOfCountrySummary != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### V1

* `GetCountries` - Retrieves summary country information for the provided marketId and filters
* `GetCountry` - Retrieves country and summary state information for provided countryKey
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
