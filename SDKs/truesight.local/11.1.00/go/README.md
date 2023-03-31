# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/truesight.local/11.1.00/go
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

    req := operations.CollectNowRequest{
        DeviceID: 548814,
        MonitorClass: "provident",
    }

    ctx := context.Background()
    res, err := s.Actions.CollectNow(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Actions

* `CollectNow` - Triggers a new collect on a specific device.
* `Rediscover` - Triggers a new discovery on a specific device.
* `Reinitialize` - Sends a 'Reinitialize KM' command.
* `Remove` - Removes a specific instance from the monitoring environment.
* `Reset` - Resets the Error Count parameter.

### Applications

* `GetApplications` - Gets summarized information about all monitored applications.
* `GetOneApplication` - Gets detailed information for a specific application.

### Devices

* `GetAgentDevices` - Gets a list of all the devices monitored by an Agent.
* `GetDevice` - Gets detailed information about a specific device.
* `GetDeviceAgent` - Gets detailed information about an Agent.
* `GetDeviceEnergyUsage` - Gets the energy usage for a specific device and a given period.
* `GetDeviceMonitors` - Gets the Monitors for a specific device.
* `GetDeviceParameterHistory` - Gets data history for a parameter of a specific device over a given period.
* `GetDevices` - Gets summarized information about all monitored devices.
* `GetDevicesSummary` - Gets overall information for all devices.
* `GetHeatingMarginCoverage` - Gets the heating margin values for each monitored device, when available.
* `SearchDevices` - Searches devices by name, model, manufacturer or serial number.

### Groups

* `GetGroups` - Gets all group summaries.
* `GetOneGroup` - Gets detailed information about a specific group.
* `UpdateEnergyCost` - Updates the values of the energy footprint parameter for a specific group.

### HistoricalData

* `GetHistory` - Gets historical data for a specific group, application or service.

### Services

* `GetOneService` - Gets detailed information about a specific service.
* `GetServices` - Gets summarized information about all monitored services.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
