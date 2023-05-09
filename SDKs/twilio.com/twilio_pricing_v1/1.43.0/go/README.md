# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_pricing_v1/1.43.0/go
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
    res, err := s.FetchMessagingCountry(ctx, operations.FetchMessagingCountryRequest{
        IsoCountry: "corrupti",
    }, operations.FetchMessagingCountrySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PricingV1MessagingMessagingCountryInstance != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [FetchMessagingCountry](docs/sdk/README.md#fetchmessagingcountry)
* [FetchPhoneNumberCountry](docs/sdk/README.md#fetchphonenumbercountry)
* [FetchVoiceCountry](docs/sdk/README.md#fetchvoicecountry)
* [FetchVoiceNumber](docs/sdk/README.md#fetchvoicenumber)
* [ListMessagingCountry](docs/sdk/README.md#listmessagingcountry)
* [ListPhoneNumberCountry](docs/sdk/README.md#listphonenumbercountry)
* [ListVoiceCountry](docs/sdk/README.md#listvoicecountry)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
