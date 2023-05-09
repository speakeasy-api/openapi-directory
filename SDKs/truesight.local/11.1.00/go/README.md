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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.CollectNow(ctx, operations.CollectNowRequest{
        DeviceID: 548814,
        MonitorClass: "provident",
    })
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


### [Actions](docs/actions/README.md)

* [CollectNow](docs/actions/README.md#collectnow) - Triggers a new collect on a specific device.
* [Rediscover](docs/actions/README.md#rediscover) - Triggers a new discovery on a specific device.
* [Reinitialize](docs/actions/README.md#reinitialize) - Sends a 'Reinitialize KM' command.
* [Remove](docs/actions/README.md#remove) - Removes a specific instance from the monitoring environment.
* [Reset](docs/actions/README.md#reset) - Resets the Error Count parameter.

### [Applications](docs/applications/README.md)

* [GetApplications](docs/applications/README.md#getapplications) - Gets summarized information about all monitored applications.
* [GetOneApplication](docs/applications/README.md#getoneapplication) - Gets detailed information for a specific application.

### [Devices](docs/devices/README.md)

* [GetAgentDevices](docs/devices/README.md#getagentdevices) - Gets a list of all the devices monitored by an Agent.
* [GetDevice](docs/devices/README.md#getdevice) - Gets detailed information about a specific device.
* [GetDeviceAgent](docs/devices/README.md#getdeviceagent) - Gets detailed information about an Agent.
* [GetDeviceEnergyUsage](docs/devices/README.md#getdeviceenergyusage) - Gets the energy usage for a specific device and a given period.
* [GetDeviceMonitors](docs/devices/README.md#getdevicemonitors) - Gets the Monitors for a specific device.
* [GetDeviceParameterHistory](docs/devices/README.md#getdeviceparameterhistory) - Gets data history for a parameter of a specific device over a given period.
* [GetDevices](docs/devices/README.md#getdevices) - Gets summarized information about all monitored devices.
* [GetDevicesSummary](docs/devices/README.md#getdevicessummary) - Gets overall information for all devices.
* [GetHeatingMarginCoverage](docs/devices/README.md#getheatingmargincoverage) - Gets the heating margin values for each monitored device, when available.
* [SearchDevices](docs/devices/README.md#searchdevices) - Searches devices by name, model, manufacturer or serial number.

### [Groups](docs/groups/README.md)

* [GetGroups](docs/groups/README.md#getgroups) - Gets all group summaries.
* [GetOneGroup](docs/groups/README.md#getonegroup) - Gets detailed information about a specific group.
* [UpdateEnergyCost](docs/groups/README.md#updateenergycost) - Updates the values of the energy footprint parameter for a specific group.

### [HistoricalData](docs/historicaldata/README.md)

* [GetHistory](docs/historicaldata/README.md#gethistory) - Gets historical data for a specific group, application or service.

### [Services](docs/services/README.md)

* [GetOneService](docs/services/README.md#getoneservice) - Gets detailed information about a specific service.
* [GetServices](docs/services/README.md#getservices) - Gets summarized information about all monitored services.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
