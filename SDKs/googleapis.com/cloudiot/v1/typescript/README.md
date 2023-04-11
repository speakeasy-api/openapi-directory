# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudiot/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudiot/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest,
  CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest = {
  dollarXgafv: XgafvEnum.Two,
  bindDeviceToGatewayRequest: {
    deviceId: "provident",
    gatewayId: "distinctio",
  },
  accessToken: "quibusdam",
  alt: AltEnum.Media,
  callback: "nulla",
  fields: "corrupti",
  key: "illum",
  oauthToken: "vel",
  parent: "error",
  prettyPrint: false,
  quotaUser: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.projects.cloudiotProjectsLocationsRegistriesBindDeviceToGateway(req).then((res: CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `cloudiotProjectsLocationsRegistriesBindDeviceToGateway` - Associates the device with the gateway.
* `cloudiotProjectsLocationsRegistriesCreate` - Creates a device registry that contains devices.
* `cloudiotProjectsLocationsRegistriesDevicesConfigVersionsList` - Lists the last few versions of the device configuration in descending order (i.e.: newest first).
* `cloudiotProjectsLocationsRegistriesDevicesCreate` - Creates a device in a device registry.
* `cloudiotProjectsLocationsRegistriesDevicesDelete` - Deletes a device.
* `cloudiotProjectsLocationsRegistriesDevicesGet` - Gets details about a device.
* `cloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfig` - Modifies the configuration for the device, which is eventually sent from the Cloud IoT Core servers. Returns the modified configuration version and its metadata.
* `cloudiotProjectsLocationsRegistriesDevicesPatch` - Updates a device.
* `cloudiotProjectsLocationsRegistriesDevicesSendCommandToDevice` - Sends a command to the specified device. In order for a device to be able to receive commands, it must: 1) be connected to Cloud IoT Core using the MQTT protocol, and 2) be subscribed to the group of MQTT topics specified by /devices/{device-id}/commands/#. This subscription will receive commands at the top-level topic /devices/{device-id}/commands as well as commands for subfolders, like /devices/{device-id}/commands/subfolder. Note that subscribing to specific subfolders is not supported. If the command could not be delivered to the device, this method will return an error; in particular, if the device is not subscribed, this method will return FAILED_PRECONDITION. Otherwise, this method will return OK. If the subscription is QoS 1, at least once delivery will be guaranteed; for QoS 0, no acknowledgment will be expected from the device.
* `cloudiotProjectsLocationsRegistriesDevicesStatesList` - Lists the last few versions of the device state in descending order (i.e.: newest first).
* `cloudiotProjectsLocationsRegistriesGroupsDevicesList` - List devices in a device registry.
* `cloudiotProjectsLocationsRegistriesGroupsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `cloudiotProjectsLocationsRegistriesGroupsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `cloudiotProjectsLocationsRegistriesGroupsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
* `cloudiotProjectsLocationsRegistriesList` - Lists device registries.
* `cloudiotProjectsLocationsRegistriesUnbindDeviceFromGateway` - Deletes the association between the device and the gateway.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

