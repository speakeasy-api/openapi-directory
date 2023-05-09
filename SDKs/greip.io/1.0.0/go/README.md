# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/greip.io/1.0.0/go
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
    res, err := s.GetASNLookup(ctx, operations.GetASNLookupRequest{
        Asn: "15169",
        Format: sdk.String("JSON"),
        IsList: sdk.String("no"),
        Key: "2517bc4fc3f790e8f09bc808bb63b899",
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

### [SDK](docs/sdk/README.md)

* [GetASNLookup](docs/sdk/README.md#getasnlookup) - ASNLookup endpoint: This method helps you lookup any AS Number. It returns the type, organisation details, routes, etc.
* [GetBINLookup](docs/sdk/README.md#getbinlookup) - This method helps you validate any BIN/IIN number and retrieve the full details related to the bank, brand, type, scheme, country, etc.
* [GetBulkLookup](docs/sdk/README.md#getbulklookup) - BulkLookup endpoint: Returns the geolocation data of multiple IP Addresses.
* [GetCountry](docs/sdk/README.md#getcountry) - Country endpoint: Returns the information of a specific country by passing the `countrCode`.
* [GetGeoIP](docs/sdk/README.md#getgeoip) - Returns the geolocation data of the visitor.
* [GetIPLookup](docs/sdk/README.md#getiplookup) - Returns the geolocation data of a specific IP Address.
* [GetBadWords](docs/sdk/README.md#getbadwords) - badWords endpoint: Detects whether user inputs contain profanity or not.
* [GetValidateEmail](docs/sdk/README.md#getvalidateemail) - This method can be used as an extra-layer of your system for validating email addresses.
* [GetValidatePhone](docs/sdk/README.md#getvalidatephone) - This method can be used as an extra-layer of your system for validating phone numbers.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
