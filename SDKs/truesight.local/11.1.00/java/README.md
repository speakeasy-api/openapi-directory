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

import org.openapis.openapi.models.operations.CollectNowPathParams;
import org.openapis.openapi.models.operations.CollectNowQueryParams;
import org.openapis.openapi.models.operations.CollectNowRequest;
import org.openapis.openapi.models.operations.CollectNowResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectNowRequest req = new CollectNowRequest() {{
                pathParams = new CollectNowPathParams() {{
                    deviceId = 548814;
                }};
                queryParams = new CollectNowQueryParams() {{
                    monitorClass = "provident";
                }};
            }};            

            CollectNowResponse res = sdk.actions.collectNow(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### actions

* `collectNow` - Triggers a new collect on a specific device.
* `rediscover` - Triggers a new discovery on a specific device.
* `reinitialize` - Sends a 'Reinitialize KM' command.
* `remove` - Removes a specific instance from the monitoring environment.
* `reset` - Resets the Error Count parameter.

### applications

* `getApplications` - Gets summarized information about all monitored applications.
* `getOneApplication` - Gets detailed information for a specific application.

### devices

* `getAgentDevices` - Gets a list of all the devices monitored by an Agent.
* `getDevice` - Gets detailed information about a specific device.
* `getDeviceAgent` - Gets detailed information about an Agent.
* `getDeviceEnergyUsage` - Gets the energy usage for a specific device and a given period.
* `getDeviceMonitors` - Gets the Monitors for a specific device.
* `getDeviceParameterHistory` - Gets data history for a parameter of a specific device over a given period.
* `getDevices` - Gets summarized information about all monitored devices.
* `getDevicesSummary` - Gets overall information for all devices.
* `getHeatingMarginCoverage` - Gets the heating margin values for each monitored device, when available.
* `searchDevices` - Searches devices by name, model, manufacturer or serial number.

### groups

* `getGroups` - Gets all group summaries.
* `getOneGroup` - Gets detailed information about a specific group.
* `updateEnergyCost` - Updates the values of the energy footprint parameter for a specific group.

### historicalData

* `getHistory` - Gets historical data for a specific group, application or service.

### services

* `getOneService` - Gets detailed information about a specific service.
* `getServices` - Gets summarized information about all monitored services.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
