# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_wireless_v1/1.40.0/go
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

    req := operations.CreateCommandCreateCommandRequest{
        CallbackMethod: "PATCH",
        CallbackURL: "https://salty-stag.name",
        Command: "nulla",
        CommandMode: "binary",
        DeliveryReceiptRequested: false,
        IncludeSid: "illum",
        Sim: "vel",
    }

    ctx := context.Background()
    res, err := s.CreateCommand(ctx, req, operations.CreateCommandSecurity{
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

### SDK SDK

* `CreateCommand` - Send a Command to a Sim.
* `CreateRatePlan`
* `DeleteCommand` - Delete a Command instance from your account.
* `DeleteRatePlan`
* `DeleteSim` - Delete a Sim resource on your Account.
* `FetchCommand` - Fetch a Command instance from your account.
* `FetchRatePlan`
* `FetchSim` - Fetch a Sim resource on your Account.
* `ListAccountUsageRecord`
* `ListCommand` - Retrieve a list of Commands from your account.
* `ListDataSession`
* `ListRatePlan`
* `ListSim` - Retrieve a list of Sim resources on your Account.
* `ListUsageRecord`
* `UpdateRatePlan`
* `UpdateSim` - Updates the given properties of a Sim resource on your Account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
