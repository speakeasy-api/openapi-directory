# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/chromemanagement/v1/go
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

    req := operations.ChromemanagementCustomersAppsCountChromeAppRequestsRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Customer: "unde",
        Fields: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        OrderBy: "vel",
        OrgUnitID: "error",
        PageSize: 645894,
        PageToken: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Customers.ChromemanagementCustomersAppsCountChromeAppRequests(ctx, req, operations.ChromemanagementCustomersAppsCountChromeAppRequestsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromeManagementV1CountChromeAppRequestsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Customers

* `ChromemanagementCustomersAppsCountChromeAppRequests` - Generate summary of app installation requests.
* `ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttention` - Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.
* `ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate` - Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).
* `ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttention` - Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947
* `ChromemanagementCustomersReportsCountChromeHardwareFleetDevices` - Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947
* `ChromemanagementCustomersReportsCountChromeVersions` - Generate report of installed Chrome versions.
* `ChromemanagementCustomersReportsCountInstalledApps` - Generate report of app installations.
* `ChromemanagementCustomersReportsCountPrintJobsByPrinter` - Get a summary of printing done by each printer.
* `ChromemanagementCustomersReportsCountPrintJobsByUser` - Get a summary of printing done by each user.
* `ChromemanagementCustomersReportsFindInstalledAppDevices` - Generate report of managed Chrome browser devices that have a specified app installed.
* `ChromemanagementCustomersTelemetryDevicesList` - List all telemetry devices.
* `ChromemanagementCustomersTelemetryEventsList` - List telemetry events.
* `ChromemanagementCustomersTelemetryUsersGet` - Get telemetry user.
* `ChromemanagementCustomersTelemetryUsersList` - List all telemetry users.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
