# customers

### Available Operations

* [chromemanagementCustomersAppsCountChromeAppRequests](#chromemanagementcustomersappscountchromeapprequests) - Generate summary of app installation requests.
* [chromemanagementCustomersReportsCountChromeBrowsersNeedingAttention](#chromemanagementcustomersreportscountchromebrowsersneedingattention) - Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.
* [chromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate](#chromemanagementcustomersreportscountchromedevicesreachingautoexpirationdate) - Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).
* [chromemanagementCustomersReportsCountChromeDevicesThatNeedAttention](#chromemanagementcustomersreportscountchromedevicesthatneedattention) - Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947
* [chromemanagementCustomersReportsCountChromeHardwareFleetDevices](#chromemanagementcustomersreportscountchromehardwarefleetdevices) - Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947
* [chromemanagementCustomersReportsCountChromeVersions](#chromemanagementcustomersreportscountchromeversions) - Generate report of installed Chrome versions.
* [chromemanagementCustomersReportsCountInstalledApps](#chromemanagementcustomersreportscountinstalledapps) - Generate report of app installations.
* [chromemanagementCustomersReportsFindInstalledAppDevices](#chromemanagementcustomersreportsfindinstalledappdevices) - Generate report of managed Chrome browser devices that have a specified app installed.
* [chromemanagementCustomersTelemetryDevicesList](#chromemanagementcustomerstelemetrydeviceslist) - List all telemetry devices.
* [chromemanagementCustomersTelemetryEventsList](#chromemanagementcustomerstelemetryeventslist) - List telemetry events.
* [chromemanagementCustomersTelemetryUsersGet](#chromemanagementcustomerstelemetryusersget) - Get telemetry user.
* [chromemanagementCustomersTelemetryUsersList](#chromemanagementcustomerstelemetryuserslist) - List all telemetry users.

## chromemanagementCustomersAppsCountChromeAppRequests

Generate summary of app installation requests.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->customer = 'molestiae';
    $request->fields = 'minus';
    $request->key = 'placeat';
    $request->oauthToken = 'voluptatum';
    $request->orderBy = 'iusto';
    $request->orgUnitId = 'excepturi';
    $request->pageSize = 392785;
    $request->pageToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

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

## chromemanagementCustomersReportsCountChromeBrowsersNeedingAttention

Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttentionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttentionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttentionRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->customer = 'repellendus';
    $request->fields = 'sapiente';
    $request->key = 'quo';
    $request->oauthToken = 'odit';
    $request->orgUnitId = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttentionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromemanagementCustomersReportsCountChromeBrowsersNeedingAttention($request, $requestSecurity);

    if ($response->googleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate

Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->customer = 'porro';
    $request->fields = 'dolorum';
    $request->key = 'dicta';
    $request->maxAueDate = 'nam';
    $request->minAueDate = 'officia';
    $request->oauthToken = 'occaecati';
    $request->orgUnitId = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'optio';

    $requestSecurity = new ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate($request, $requestSecurity);

    if ($response->googleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromemanagementCustomersReportsCountChromeDevicesThatNeedAttention

Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->customer = 'modi';
    $request->fields = 'qui';
    $request->key = 'impedit';
    $request->oauthToken = 'cum';
    $request->orgUnitId = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->readMask = 'excepturi';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromemanagementCustomersReportsCountChromeDevicesThatNeedAttention($request, $requestSecurity);

    if ($response->googleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromemanagementCustomersReportsCountChromeHardwareFleetDevices

Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->customer = 'dolor';
    $request->fields = 'natus';
    $request->key = 'laboriosam';
    $request->oauthToken = 'hic';
    $request->orgUnitId = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->readMask = 'in';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromemanagementCustomersReportsCountChromeHardwareFleetDevices($request, $requestSecurity);

    if ($response->googleChromeManagementV1CountChromeHardwareFleetDevicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromemanagementCustomersReportsCountChromeVersions

Generate report of installed Chrome versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersReportsCountChromeVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersReportsCountChromeVersionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromemanagementCustomersReportsCountChromeVersionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->customer = 'ipsa';
    $request->fields = 'reiciendis';
    $request->filter = 'est';
    $request->key = 'mollitia';
    $request->oauthToken = 'laborum';
    $request->orgUnitId = 'dolores';
    $request->pageSize = 210382;
    $request->pageToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new ChromemanagementCustomersReportsCountChromeVersionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromemanagementCustomersReportsCountChromeVersions($request, $requestSecurity);

    if ($response->googleChromeManagementV1CountChromeVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromemanagementCustomersReportsCountInstalledApps

Generate report of app installations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersReportsCountInstalledAppsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersReportsCountInstalledAppsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromemanagementCustomersReportsCountInstalledAppsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->customer = 'accusantium';
    $request->fields = 'iure';
    $request->filter = 'culpa';
    $request->key = 'doloribus';
    $request->oauthToken = 'sapiente';
    $request->orderBy = 'architecto';
    $request->orgUnitId = 'mollitia';
    $request->pageSize = 208876;
    $request->pageToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new ChromemanagementCustomersReportsCountInstalledAppsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromemanagementCustomersReportsCountInstalledApps($request, $requestSecurity);

    if ($response->googleChromeManagementV1CountInstalledAppsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromemanagementCustomersReportsFindInstalledAppDevices

Generate report of managed Chrome browser devices that have a specified app installed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersReportsFindInstalledAppDevicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromemanagementCustomersReportsFindInstalledAppDevicesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::MEDIA;
    $request->appId = 'quam';
    $request->appType = ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum::APP;
    $request->callback = 'velit';
    $request->customer = 'error';
    $request->fields = 'quia';
    $request->filter = 'quis';
    $request->key = 'vitae';
    $request->oauthToken = 'laborum';
    $request->orderBy = 'animi';
    $request->orgUnitId = 'enim';
    $request->pageSize = 138183;
    $request->pageToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromemanagementCustomersReportsFindInstalledAppDevices($request, $requestSecurity);

    if ($response->googleChromeManagementV1FindInstalledAppDevicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromemanagementCustomersTelemetryDevicesList

List all telemetry devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersTelemetryDevicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersTelemetryDevicesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromemanagementCustomersTelemetryDevicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->fields = 'error';
    $request->filter = 'temporibus';
    $request->key = 'laborum';
    $request->oauthToken = 'quasi';
    $request->pageSize = 971945;
    $request->pageToken = 'voluptatibus';
    $request->parent = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->readMask = 'praesentium';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new ChromemanagementCustomersTelemetryDevicesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromemanagementCustomersTelemetryDevicesList($request, $requestSecurity);

    if ($response->googleChromeManagementV1ListTelemetryDevicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromemanagementCustomersTelemetryEventsList

List telemetry events.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersTelemetryEventsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersTelemetryEventsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromemanagementCustomersTelemetryEventsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'doloremque';
    $request->filter = 'reprehenderit';
    $request->key = 'ut';
    $request->oauthToken = 'maiores';
    $request->pageSize = 120196;
    $request->pageToken = 'corporis';
    $request->parent = 'dolore';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->readMask = 'dicta';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new ChromemanagementCustomersTelemetryEventsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromemanagementCustomersTelemetryEventsList($request, $requestSecurity);

    if ($response->googleChromeManagementV1ListTelemetryEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromemanagementCustomersTelemetryUsersGet

Get telemetry user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersTelemetryUsersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersTelemetryUsersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromemanagementCustomersTelemetryUsersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->fields = 'ipsum';
    $request->key = 'quidem';
    $request->name = 'Andy Streich';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptates';
    $request->readMask = 'quasi';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new ChromemanagementCustomersTelemetryUsersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromemanagementCustomersTelemetryUsersGet($request, $requestSecurity);

    if ($response->googleChromeManagementV1TelemetryUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromemanagementCustomersTelemetryUsersList

List all telemetry users.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersTelemetryUsersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromemanagementCustomersTelemetryUsersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromemanagementCustomersTelemetryUsersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->fields = 'consequatur';
    $request->filter = 'est';
    $request->key = 'quibusdam';
    $request->oauthToken = 'explicabo';
    $request->pageSize = 647174;
    $request->pageToken = 'distinctio';
    $request->parent = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->readMask = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new ChromemanagementCustomersTelemetryUsersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromemanagementCustomersTelemetryUsersList($request, $requestSecurity);

    if ($response->googleChromeManagementV1ListTelemetryUsersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
