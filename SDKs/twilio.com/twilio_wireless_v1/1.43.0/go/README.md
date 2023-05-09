# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_wireless_v1/1.43.0/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateCommand(ctx, operations.CreateCommandCreateCommandRequest{
        CallbackMethod: operations.CreateCommandCreateCommandRequestCallbackMethodEnumPatch.ToPointer(),
        CallbackURL: sdk.String("https://salty-stag.name"),
        Command: "nulla",
        CommandMode: shared.CommandEnumCommandModeEnumBinary.ToPointer(),
        DeliveryReceiptRequested: sdk.Bool(false),
        IncludeSid: sdk.String("illum"),
        Sim: sdk.String("vel"),
    }, operations.CreateCommandSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WirelessV1Command != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateCommand](docs/sdk/README.md#createcommand) - Send a Command to a Sim.
* [CreateRatePlan](docs/sdk/README.md#createrateplan)
* [DeleteCommand](docs/sdk/README.md#deletecommand) - Delete a Command instance from your account.
* [DeleteRatePlan](docs/sdk/README.md#deleterateplan)
* [DeleteSim](docs/sdk/README.md#deletesim) - Delete a Sim resource on your Account.
* [FetchCommand](docs/sdk/README.md#fetchcommand) - Fetch a Command instance from your account.
* [FetchRatePlan](docs/sdk/README.md#fetchrateplan)
* [FetchSim](docs/sdk/README.md#fetchsim) - Fetch a Sim resource on your Account.
* [ListAccountUsageRecord](docs/sdk/README.md#listaccountusagerecord)
* [ListCommand](docs/sdk/README.md#listcommand) - Retrieve a list of Commands from your account.
* [ListDataSession](docs/sdk/README.md#listdatasession)
* [ListRatePlan](docs/sdk/README.md#listrateplan)
* [ListSim](docs/sdk/README.md#listsim) - Retrieve a list of Sim resources on your Account.
* [ListUsageRecord](docs/sdk/README.md#listusagerecord)
* [UpdateRatePlan](docs/sdk/README.md#updaterateplan)
* [UpdateSim](docs/sdk/README.md#updatesim) - Updates the given properties of a Sim resource on your Account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
