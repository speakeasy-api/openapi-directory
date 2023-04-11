# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/chromemanagement/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/chromemanagement/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ChromemanagementCustomersAppsCountChromeAppRequestsRequest,
  ChromemanagementCustomersAppsCountChromeAppRequestsResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ChromemanagementCustomersAppsCountChromeAppRequestsRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  customer: "unde",
  fields: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  orderBy: "vel",
  orgUnitId: "error",
  pageSize: 645894,
  pageToken: "suscipit",
  prettyPrint: false,
  quotaUser: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.customers.chromemanagementCustomersAppsCountChromeAppRequests(req).then((res: ChromemanagementCustomersAppsCountChromeAppRequestsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### customers

* `chromemanagementCustomersAppsCountChromeAppRequests` - Generate summary of app installation requests.
* `chromemanagementCustomersReportsCountChromeBrowsersNeedingAttention` - Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.
* `chromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate` - Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).
* `chromemanagementCustomersReportsCountChromeDevicesThatNeedAttention` - Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947
* `chromemanagementCustomersReportsCountChromeHardwareFleetDevices` - Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947
* `chromemanagementCustomersReportsCountChromeVersions` - Generate report of installed Chrome versions.
* `chromemanagementCustomersReportsCountInstalledApps` - Generate report of app installations.
* `chromemanagementCustomersReportsCountPrintJobsByPrinter` - Get a summary of printing done by each printer.
* `chromemanagementCustomersReportsCountPrintJobsByUser` - Get a summary of printing done by each user.
* `chromemanagementCustomersReportsFindInstalledAppDevices` - Generate report of managed Chrome browser devices that have a specified app installed.
* `chromemanagementCustomersTelemetryDevicesList` - List all telemetry devices.
* `chromemanagementCustomersTelemetryEventsList` - List telemetry events.
* `chromemanagementCustomersTelemetryUsersGet` - Get telemetry user.
* `chromemanagementCustomersTelemetryUsersList` - List all telemetry users.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

