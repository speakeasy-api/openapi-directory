# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_routes_v2/1.43.0/go
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
        PhoneNumber: "corrupti",
    }, operations.FetchPhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoutesV2PhoneNumber != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [FetchPhoneNumber](docs/sdk/README.md#fetchphonenumber) - Fetch the Inbound Processing Region assigned to a phone number.
* [FetchSipDomain](docs/sdk/README.md#fetchsipdomain)
* [FetchTrunks](docs/sdk/README.md#fetchtrunks) - Fetch the Inbound Processing Region assigned to a SIP Trunk.
* [UpdatePhoneNumber](docs/sdk/README.md#updatephonenumber) - Assign an Inbound Processing Region to a phone number.
* [UpdateSipDomain](docs/sdk/README.md#updatesipdomain)
* [UpdateTrunks](docs/sdk/README.md#updatetrunks) - Assign an Inbound Processing Region to a SIP Trunk
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
