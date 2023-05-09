# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_lookups_v2/1.43.0/go
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
    res, err := s.FetchPhoneNumber(ctx, operations.FetchPhoneNumberRequest{
        AddressCountryCode: sdk.String("corrupti"),
        AddressLine1: sdk.String("provident"),
        AddressLine2: sdk.String("distinctio"),
        City: sdk.String("New Orleans"),
        CountryCode: sdk.String("TC"),
        DateOfBirth: sdk.String("corrupti"),
        Fields: sdk.String("illum"),
        FirstName: sdk.String("Henry"),
        LastName: sdk.String("Mueller"),
        NationalID: sdk.String("deserunt"),
        PhoneNumber: "suscipit",
        PostalCode: sdk.String("28092"),
        State: sdk.String("suscipit"),
    }, operations.FetchPhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LookupsV2PhoneNumber != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [FetchPhoneNumber](docs/sdk/README.md#fetchphonenumber)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
