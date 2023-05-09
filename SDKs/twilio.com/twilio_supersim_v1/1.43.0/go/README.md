# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_supersim_v1/1.43.0/go
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
    res, err := s.CreateEsimProfile(ctx, operations.CreateEsimProfileCreateEsimProfileRequest{
        CallbackMethod: operations.CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnumPatch.ToPointer(),
        CallbackURL: sdk.String("provident"),
        Eid: sdk.String("distinctio"),
        GenerateMatchingID: sdk.Bool(false),
    }, operations.CreateEsimProfileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1EsimProfile != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateEsimProfile](docs/sdk/README.md#createesimprofile) - Order an eSIM Profile.
* [CreateFleet](docs/sdk/README.md#createfleet) - Create a Fleet
* [CreateIPCommand](docs/sdk/README.md#createipcommand) - Send an IP Command to a Super SIM.
* [CreateNetworkAccessProfile](docs/sdk/README.md#createnetworkaccessprofile) - Create a new Network Access Profile
* [CreateNetworkAccessProfileNetwork](docs/sdk/README.md#createnetworkaccessprofilenetwork) - Add a Network resource to the Network Access Profile resource.
* [CreateSim](docs/sdk/README.md#createsim) - Register a Super SIM to your Account
* [CreateSmsCommand](docs/sdk/README.md#createsmscommand) - Send SMS Command to a Sim.
* [DeleteNetworkAccessProfileNetwork](docs/sdk/README.md#deletenetworkaccessprofilenetwork) - Remove a Network resource from the Network Access Profile resource's.
* [FetchEsimProfile](docs/sdk/README.md#fetchesimprofile) - Fetch an eSIM Profile.
* [FetchFleet](docs/sdk/README.md#fetchfleet) - Fetch a Fleet instance from your account.
* [FetchIPCommand](docs/sdk/README.md#fetchipcommand) - Fetch IP Command instance from your account.
* [FetchNetwork](docs/sdk/README.md#fetchnetwork) - Fetch a Network resource.
* [FetchNetworkAccessProfile](docs/sdk/README.md#fetchnetworkaccessprofile) - Fetch a Network Access Profile instance from your account.
* [FetchNetworkAccessProfileNetwork](docs/sdk/README.md#fetchnetworkaccessprofilenetwork) - Fetch a Network Access Profile resource's Network resource.
* [FetchSim](docs/sdk/README.md#fetchsim) - Fetch a Super SIM instance from your account.
* [FetchSmsCommand](docs/sdk/README.md#fetchsmscommand) - Fetch SMS Command instance from your account.
* [ListBillingPeriod](docs/sdk/README.md#listbillingperiod) - Retrieve a list of Billing Periods for a Super SIM.
* [ListEsimProfile](docs/sdk/README.md#listesimprofile) - Retrieve a list of eSIM Profiles.
* [ListFleet](docs/sdk/README.md#listfleet) - Retrieve a list of Fleets from your account.
* [ListIPCommand](docs/sdk/README.md#listipcommand) - Retrieve a list of IP Commands from your account.
* [ListNetwork](docs/sdk/README.md#listnetwork) - Retrieve a list of Network resources.
* [ListNetworkAccessProfile](docs/sdk/README.md#listnetworkaccessprofile) - Retrieve a list of Network Access Profiles from your account.
* [ListNetworkAccessProfileNetwork](docs/sdk/README.md#listnetworkaccessprofilenetwork) - Retrieve a list of Network Access Profile resource's Network resource.
* [ListSettingsUpdate](docs/sdk/README.md#listsettingsupdate) - Retrieve a list of Settings Updates.
* [ListSim](docs/sdk/README.md#listsim) - Retrieve a list of Super SIMs from your account.
* [ListSimIPAddress](docs/sdk/README.md#listsimipaddress) - Retrieve a list of IP Addresses for the given Super SIM.
* [ListSmsCommand](docs/sdk/README.md#listsmscommand) - Retrieve a list of SMS Commands from your account.
* [ListUsageRecord](docs/sdk/README.md#listusagerecord) - List UsageRecords
* [UpdateFleet](docs/sdk/README.md#updatefleet) - Updates the given properties of a Super SIM Fleet instance from your account.
* [UpdateNetworkAccessProfile](docs/sdk/README.md#updatenetworkaccessprofile) - Updates the given properties of a Network Access Profile in your account.
* [UpdateSim](docs/sdk/README.md#updatesim) - Updates the given properties of a Super SIM instance from your account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
