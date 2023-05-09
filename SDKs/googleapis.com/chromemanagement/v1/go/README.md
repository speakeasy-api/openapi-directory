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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Customers.ChromemanagementCustomersAppsCountChromeAppRequests(ctx, operations.ChromemanagementCustomersAppsCountChromeAppRequestsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Customer: "unde",
        Fields: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        OrderBy: sdk.String("vel"),
        OrgUnitID: sdk.String("error"),
        PageSize: sdk.Int64(645894),
        PageToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.ChromemanagementCustomersAppsCountChromeAppRequestsSecurity{
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


### [Customers](docs/customers/README.md)

* [ChromemanagementCustomersAppsCountChromeAppRequests](docs/customers/README.md#chromemanagementcustomersappscountchromeapprequests) - Generate summary of app installation requests.
* [ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttention](docs/customers/README.md#chromemanagementcustomersreportscountchromebrowsersneedingattention) - Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.
* [ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate](docs/customers/README.md#chromemanagementcustomersreportscountchromedevicesreachingautoexpirationdate) - Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).
* [ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttention](docs/customers/README.md#chromemanagementcustomersreportscountchromedevicesthatneedattention) - Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947
* [ChromemanagementCustomersReportsCountChromeHardwareFleetDevices](docs/customers/README.md#chromemanagementcustomersreportscountchromehardwarefleetdevices) - Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947
* [ChromemanagementCustomersReportsCountChromeVersions](docs/customers/README.md#chromemanagementcustomersreportscountchromeversions) - Generate report of installed Chrome versions.
* [ChromemanagementCustomersReportsCountInstalledApps](docs/customers/README.md#chromemanagementcustomersreportscountinstalledapps) - Generate report of app installations.
* [ChromemanagementCustomersReportsFindInstalledAppDevices](docs/customers/README.md#chromemanagementcustomersreportsfindinstalledappdevices) - Generate report of managed Chrome browser devices that have a specified app installed.
* [ChromemanagementCustomersTelemetryDevicesList](docs/customers/README.md#chromemanagementcustomerstelemetrydeviceslist) - List all telemetry devices.
* [ChromemanagementCustomersTelemetryEventsList](docs/customers/README.md#chromemanagementcustomerstelemetryeventslist) - List telemetry events.
* [ChromemanagementCustomersTelemetryUsersGet](docs/customers/README.md#chromemanagementcustomerstelemetryusersget) - Get telemetry user.
* [ChromemanagementCustomersTelemetryUsersList](docs/customers/README.md#chromemanagementcustomerstelemetryuserslist) - List all telemetry users.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
