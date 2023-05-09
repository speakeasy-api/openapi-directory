# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectNowRequest;
import org.openapis.openapi.models.operations.CollectNowResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectNowRequest req = new CollectNowRequest(548814, "provident");            

            CollectNowResponse res = sdk.actions.collectNow(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [actions](docs/actions/README.md)

* [collectNow](docs/actions/README.md#collectnow) - Triggers a new collect on a specific device.
* [rediscover](docs/actions/README.md#rediscover) - Triggers a new discovery on a specific device.
* [reinitialize](docs/actions/README.md#reinitialize) - Sends a 'Reinitialize KM' command.
* [remove](docs/actions/README.md#remove) - Removes a specific instance from the monitoring environment.
* [reset](docs/actions/README.md#reset) - Resets the Error Count parameter.

### [applications](docs/applications/README.md)

* [getApplications](docs/applications/README.md#getapplications) - Gets summarized information about all monitored applications.
* [getOneApplication](docs/applications/README.md#getoneapplication) - Gets detailed information for a specific application.

### [devices](docs/devices/README.md)

* [getAgentDevices](docs/devices/README.md#getagentdevices) - Gets a list of all the devices monitored by an Agent.
* [getDevice](docs/devices/README.md#getdevice) - Gets detailed information about a specific device.
* [getDeviceAgent](docs/devices/README.md#getdeviceagent) - Gets detailed information about an Agent.
* [getDeviceEnergyUsage](docs/devices/README.md#getdeviceenergyusage) - Gets the energy usage for a specific device and a given period.
* [getDeviceMonitors](docs/devices/README.md#getdevicemonitors) - Gets the Monitors for a specific device.
* [getDeviceParameterHistory](docs/devices/README.md#getdeviceparameterhistory) - Gets data history for a parameter of a specific device over a given period.
* [getDevices](docs/devices/README.md#getdevices) - Gets summarized information about all monitored devices.
* [getDevicesSummary](docs/devices/README.md#getdevicessummary) - Gets overall information for all devices.
* [getHeatingMarginCoverage](docs/devices/README.md#getheatingmargincoverage) - Gets the heating margin values for each monitored device, when available.
* [searchDevices](docs/devices/README.md#searchdevices) - Searches devices by name, model, manufacturer or serial number.

### [groups](docs/groups/README.md)

* [getGroups](docs/groups/README.md#getgroups) - Gets all group summaries.
* [getOneGroup](docs/groups/README.md#getonegroup) - Gets detailed information about a specific group.
* [updateEnergyCost](docs/groups/README.md#updateenergycost) - Updates the values of the energy footprint parameter for a specific group.

### [historicalData](docs/historicaldata/README.md)

* [getHistory](docs/historicaldata/README.md#gethistory) - Gets historical data for a specific group, application or service.

### [services](docs/services/README.md)

* [getOneService](docs/services/README.md#getoneservice) - Gets detailed information about a specific service.
* [getServices](docs/services/README.md#getservices) - Gets summarized information about all monitored services.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
