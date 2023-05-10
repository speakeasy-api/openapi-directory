# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersAppsCountChromeAppRequestsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersAppsCountChromeAppRequestsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromemanagementCustomersAppsCountChromeAppRequestsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->customer = 'unde';
    $request->fields = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->orderBy = 'vel';
    $request->orgUnitId = 'error';
    $request->pageSize = 645894;
    $request->pageToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new ChromemanagementCustomersAppsCountChromeAppRequestsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromemanagementCustomersAppsCountChromeAppRequests($request, $requestSecurity);

    if ($response->googleChromeManagementV1CountChromeAppRequestsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [customers](docs/customers/README.md)

* [chromemanagementCustomersAppsCountChromeAppRequests](docs/customers/README.md#chromemanagementcustomersappscountchromeapprequests) - Generate summary of app installation requests.
* [chromemanagementCustomersReportsCountChromeBrowsersNeedingAttention](docs/customers/README.md#chromemanagementcustomersreportscountchromebrowsersneedingattention) - Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.
* [chromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate](docs/customers/README.md#chromemanagementcustomersreportscountchromedevicesreachingautoexpirationdate) - Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).
* [chromemanagementCustomersReportsCountChromeDevicesThatNeedAttention](docs/customers/README.md#chromemanagementcustomersreportscountchromedevicesthatneedattention) - Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947
* [chromemanagementCustomersReportsCountChromeHardwareFleetDevices](docs/customers/README.md#chromemanagementcustomersreportscountchromehardwarefleetdevices) - Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947
* [chromemanagementCustomersReportsCountChromeVersions](docs/customers/README.md#chromemanagementcustomersreportscountchromeversions) - Generate report of installed Chrome versions.
* [chromemanagementCustomersReportsCountInstalledApps](docs/customers/README.md#chromemanagementcustomersreportscountinstalledapps) - Generate report of app installations.
* [chromemanagementCustomersReportsFindInstalledAppDevices](docs/customers/README.md#chromemanagementcustomersreportsfindinstalledappdevices) - Generate report of managed Chrome browser devices that have a specified app installed.
* [chromemanagementCustomersTelemetryDevicesList](docs/customers/README.md#chromemanagementcustomerstelemetrydeviceslist) - List all telemetry devices.
* [chromemanagementCustomersTelemetryEventsList](docs/customers/README.md#chromemanagementcustomerstelemetryeventslist) - List telemetry events.
* [chromemanagementCustomersTelemetryUsersGet](docs/customers/README.md#chromemanagementcustomerstelemetryusersget) - Get telemetry user.
* [chromemanagementCustomersTelemetryUsersList](docs/customers/README.md#chromemanagementcustomerstelemetryuserslist) - List all telemetry users.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
