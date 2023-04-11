# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/truesight.local/11.1.00/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/truesight.local/11.1.00/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CollectNowRequest,
  CollectNowResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CollectNowRequest = {
  deviceId: 548814,
  monitorClass: "provident",
};

sdk.actions.collectNow(req).then((res: CollectNowResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

