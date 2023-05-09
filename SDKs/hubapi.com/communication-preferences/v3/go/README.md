# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/hubapi.com/communication-preferences/v3/go
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
    res, err := s.Definition.GetCommunicationPreferencesV3DefinitionsGetPage(ctx, operations.GetCommunicationPreferencesV3DefinitionsGetPageSecurity{
        Hapikey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionDefinitionsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Definition](docs/definition/README.md)

* [GetCommunicationPreferencesV3DefinitionsGetPage](docs/definition/README.md#getcommunicationpreferencesv3definitionsgetpage) - Get subscription definitions

### [Status](docs/status/README.md)

* [GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatus](docs/status/README.md#getcommunicationpreferencesv3statusemailemailaddressgetemailstatus) - Get subscription statuses for a contact
* [PostCommunicationPreferencesV3SubscribeSubscribe](docs/status/README.md#postcommunicationpreferencesv3subscribesubscribe) - Subscribe a contact
* [PostCommunicationPreferencesV3UnsubscribeUnsubscribe](docs/status/README.md#postcommunicationpreferencesv3unsubscribeunsubscribe) - Unsubscribe a contact
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
