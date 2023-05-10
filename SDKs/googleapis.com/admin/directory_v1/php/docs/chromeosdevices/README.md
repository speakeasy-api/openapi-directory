# chromeosdevices

### Available Operations

* [directoryChromeosdevicesAction](#directorychromeosdevicesaction) - Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).
* [directoryChromeosdevicesGet](#directorychromeosdevicesget) - Retrieves a Chrome OS device's properties.
* [directoryChromeosdevicesList](#directorychromeosdeviceslist) - Retrieves a paginated list of Chrome OS devices within an account.
* [directoryChromeosdevicesMoveDevicesToOu](#directorychromeosdevicesmovedevicestoou) - Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.
* [directoryChromeosdevicesPatch](#directorychromeosdevicespatch) - Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* [directoryChromeosdevicesUpdate](#directorychromeosdevicesupdate) - Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.

## directoryChromeosdevicesAction

Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceAction;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesActionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryChromeosdevicesActionRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->chromeOsDeviceAction = new ChromeOsDeviceAction();
    $request->chromeOsDeviceAction->action = 'repellat';
    $request->chromeOsDeviceAction->deprovisionReason = 'mollitia';
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->customerId = 'quam';
    $request->fields = 'molestiae';
    $request->key = 'velit';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'quia';
    $request->resourceId = 'quis';
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new DirectoryChromeosdevicesActionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->chromeosdevices->directoryChromeosdevicesAction($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryChromeosdevicesGet

Retrieves a Chrome OS device's properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesGetProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryChromeosdevicesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->customerId = 'sequi';
    $request->deviceId = 'tenetur';
    $request->fields = 'ipsam';
    $request->key = 'id';
    $request->oauthToken = 'possimus';
    $request->prettyPrint = false;
    $request->projection = DirectoryChromeosdevicesGetProjectionEnum::BASIC;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new DirectoryChromeosdevicesGetSecurity();
    $requestSecurity->option1 = new DirectoryChromeosdevicesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->chromeosdevices->directoryChromeosdevicesGet($request, $requestSecurity);

    if ($response->chromeOsDevice !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryChromeosdevicesList

Retrieves a paginated list of Chrome OS devices within an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesListOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesListProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryChromeosdevicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->customerId = 'vero';
    $request->fields = 'nihil';
    $request->includeChildOrgunits = false;
    $request->key = 'praesentium';
    $request->maxResults = 976762;
    $request->oauthToken = 'ipsa';
    $request->orderBy = DirectoryChromeosdevicesListOrderByEnum::NOTES;
    $request->orgUnitPath = 'voluptate';
    $request->pageToken = 'cum';
    $request->prettyPrint = false;
    $request->projection = DirectoryChromeosdevicesListProjectionEnum::BASIC;
    $request->query = 'doloremque';
    $request->quotaUser = 'reprehenderit';
    $request->sortOrder = DirectoryChromeosdevicesListSortOrderEnum::ASCENDING;
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DirectoryChromeosdevicesListSecurity();
    $requestSecurity->option1 = new DirectoryChromeosdevicesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->chromeosdevices->directoryChromeosdevicesList($request, $requestSecurity);

    if ($response->chromeOsDevices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryChromeosdevicesMoveDevicesToOu

Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesMoveDevicesToOuRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsMoveDevicesToOu;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesMoveDevicesToOuSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryChromeosdevicesMoveDevicesToOuRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->chromeOsMoveDevicesToOu = new ChromeOsMoveDevicesToOu();
    $request->chromeOsMoveDevicesToOu->deviceIds = [
        'iusto',
        'dicta',
    ];
    $request->accessToken = 'harum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->customerId = 'commodi';
    $request->fields = 'repudiandae';
    $request->key = 'quae';
    $request->oauthToken = 'ipsum';
    $request->orgUnitPath = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestias';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new DirectoryChromeosdevicesMoveDevicesToOuSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->chromeosdevices->directoryChromeosdevicesMoveDevicesToOu($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryChromeosdevicesPatch

Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDevice;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceActiveTimeRanges;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceCpuInfo;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceCpuInfoLogicalCpus;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceCpuInfoLogicalCpusCStates;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceCpuStatusReports;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceDeprovisionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceDeviceFiles;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceDiskVolumeReports;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceDiskVolumeReportsVolumeInfo;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceLastKnownNetwork;
use \OpenAPI\OpenAPI\Models\Shared\OsUpdateStatus;
use \OpenAPI\OpenAPI\Models\Shared\OsUpdateStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceRecentUsers;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceScreenshotFiles;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceSystemRamFreeReports;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceTpmVersionInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesPatchProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryChromeosdevicesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->chromeOsDevice = new ChromeOsDevice();
    $request->chromeOsDevice->activeTimeRanges = [
        new ChromeOsDeviceActiveTimeRanges(),
        new ChromeOsDeviceActiveTimeRanges(),
        new ChromeOsDeviceActiveTimeRanges(),
    ];
    $request->chromeOsDevice->annotatedAssetId = 'rem';
    $request->chromeOsDevice->annotatedLocation = 'voluptates';
    $request->chromeOsDevice->annotatedUser = 'quasi';
    $request->chromeOsDevice->autoUpdateExpiration = 'repudiandae';
    $request->chromeOsDevice->bootMode = 'sint';
    $request->chromeOsDevice->cpuInfo = [
        new ChromeOsDeviceCpuInfo(),
    ];
    $request->chromeOsDevice->cpuStatusReports = [
        new ChromeOsDeviceCpuStatusReports(),
        new ChromeOsDeviceCpuStatusReports(),
        new ChromeOsDeviceCpuStatusReports(),
        new ChromeOsDeviceCpuStatusReports(),
    ];
    $request->chromeOsDevice->deprovisionReason = ChromeOsDeviceDeprovisionReasonEnum::DEPROVISION_REASON_DOMAIN_MOVE;
    $request->chromeOsDevice->deviceFiles = [
        new ChromeOsDeviceDeviceFiles(),
        new ChromeOsDeviceDeviceFiles(),
    ];
    $request->chromeOsDevice->deviceId = 'consequatur';
    $request->chromeOsDevice->diskVolumeReports = [
        new ChromeOsDeviceDiskVolumeReports(),
        new ChromeOsDeviceDiskVolumeReports(),
        new ChromeOsDeviceDiskVolumeReports(),
    ];
    $request->chromeOsDevice->dockMacAddress = 'quibusdam';
    $request->chromeOsDevice->etag = 'explicabo';
    $request->chromeOsDevice->ethernetMacAddress = 'deserunt';
    $request->chromeOsDevice->ethernetMacAddress0 = 'distinctio';
    $request->chromeOsDevice->firmwareVersion = 'quibusdam';
    $request->chromeOsDevice->firstEnrollmentTime = 'labore';
    $request->chromeOsDevice->kind = 'modi';
    $request->chromeOsDevice->lastDeprovisionTimestamp = 'qui';
    $request->chromeOsDevice->lastEnrollmentTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-31T22:08:47.731Z');
    $request->chromeOsDevice->lastKnownNetwork = [
        new ChromeOsDeviceLastKnownNetwork(),
        new ChromeOsDeviceLastKnownNetwork(),
        new ChromeOsDeviceLastKnownNetwork(),
    ];
    $request->chromeOsDevice->lastSync = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-01T19:07:16.800Z');
    $request->chromeOsDevice->macAddress = 'assumenda';
    $request->chromeOsDevice->manufactureDate = 'ipsam';
    $request->chromeOsDevice->meid = 'alias';
    $request->chromeOsDevice->model = 'fugit';
    $request->chromeOsDevice->notes = 'dolorum';
    $request->chromeOsDevice->orderNumber = 'excepturi';
    $request->chromeOsDevice->orgUnitId = 'tempora';
    $request->chromeOsDevice->orgUnitPath = 'facilis';
    $request->chromeOsDevice->osUpdateStatus = new OsUpdateStatus();
    $request->chromeOsDevice->osUpdateStatus->rebootTime = 'tempore';
    $request->chromeOsDevice->osUpdateStatus->state = OsUpdateStatusStateEnum::UPDATE_STATE_NOT_STARTED;
    $request->chromeOsDevice->osUpdateStatus->targetKioskAppVersion = 'delectus';
    $request->chromeOsDevice->osUpdateStatus->targetOsVersion = 'eum';
    $request->chromeOsDevice->osUpdateStatus->updateCheckTime = 'non';
    $request->chromeOsDevice->osUpdateStatus->updateTime = 'eligendi';
    $request->chromeOsDevice->osVersion = 'sint';
    $request->chromeOsDevice->platformVersion = 'aliquid';
    $request->chromeOsDevice->recentUsers = [
        new ChromeOsDeviceRecentUsers(),
        new ChromeOsDeviceRecentUsers(),
        new ChromeOsDeviceRecentUsers(),
    ];
    $request->chromeOsDevice->screenshotFiles = [
        new ChromeOsDeviceScreenshotFiles(),
        new ChromeOsDeviceScreenshotFiles(),
        new ChromeOsDeviceScreenshotFiles(),
        new ChromeOsDeviceScreenshotFiles(),
    ];
    $request->chromeOsDevice->serialNumber = 'sint';
    $request->chromeOsDevice->status = 'officia';
    $request->chromeOsDevice->supportEndDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-09T13:58:59.361Z');
    $request->chromeOsDevice->systemRamFreeReports = [
        new ChromeOsDeviceSystemRamFreeReports(),
        new ChromeOsDeviceSystemRamFreeReports(),
        new ChromeOsDeviceSystemRamFreeReports(),
        new ChromeOsDeviceSystemRamFreeReports(),
    ];
    $request->chromeOsDevice->systemRamTotal = 'dolorum';
    $request->chromeOsDevice->tpmVersionInfo = new ChromeOsDeviceTpmVersionInfo();
    $request->chromeOsDevice->tpmVersionInfo->family = 'in';
    $request->chromeOsDevice->tpmVersionInfo->firmwareVersion = 'in';
    $request->chromeOsDevice->tpmVersionInfo->manufacturer = 'illum';
    $request->chromeOsDevice->tpmVersionInfo->specLevel = 'maiores';
    $request->chromeOsDevice->tpmVersionInfo->tpmModel = 'rerum';
    $request->chromeOsDevice->tpmVersionInfo->vendorSpecific = 'dicta';
    $request->chromeOsDevice->willAutoRenew = false;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facere';
    $request->customerId = 'ea';
    $request->deviceId = 'aliquid';
    $request->fields = 'laborum';
    $request->key = 'accusamus';
    $request->oauthToken = 'non';
    $request->prettyPrint = false;
    $request->projection = DirectoryChromeosdevicesPatchProjectionEnum::FULL;
    $request->quotaUser = 'enim';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new DirectoryChromeosdevicesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->chromeosdevices->directoryChromeosdevicesPatch($request, $requestSecurity);

    if ($response->chromeOsDevice !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryChromeosdevicesUpdate

Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDevice;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceActiveTimeRanges;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceCpuInfo;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceCpuInfoLogicalCpus;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceCpuInfoLogicalCpusCStates;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceCpuStatusReports;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceDeprovisionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceDeviceFiles;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceDiskVolumeReports;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceDiskVolumeReportsVolumeInfo;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceLastKnownNetwork;
use \OpenAPI\OpenAPI\Models\Shared\OsUpdateStatus;
use \OpenAPI\OpenAPI\Models\Shared\OsUpdateStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceRecentUsers;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceScreenshotFiles;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceSystemRamFreeReports;
use \OpenAPI\OpenAPI\Models\Shared\ChromeOsDeviceTpmVersionInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesUpdateProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryChromeosdevicesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryChromeosdevicesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->chromeOsDevice = new ChromeOsDevice();
    $request->chromeOsDevice->activeTimeRanges = [
        new ChromeOsDeviceActiveTimeRanges(),
        new ChromeOsDeviceActiveTimeRanges(),
        new ChromeOsDeviceActiveTimeRanges(),
    ];
    $request->chromeOsDevice->annotatedAssetId = 'nam';
    $request->chromeOsDevice->annotatedLocation = 'id';
    $request->chromeOsDevice->annotatedUser = 'blanditiis';
    $request->chromeOsDevice->autoUpdateExpiration = 'deleniti';
    $request->chromeOsDevice->bootMode = 'sapiente';
    $request->chromeOsDevice->cpuInfo = [
        new ChromeOsDeviceCpuInfo(),
    ];
    $request->chromeOsDevice->cpuStatusReports = [
        new ChromeOsDeviceCpuStatusReports(),
        new ChromeOsDeviceCpuStatusReports(),
        new ChromeOsDeviceCpuStatusReports(),
    ];
    $request->chromeOsDevice->deprovisionReason = ChromeOsDeviceDeprovisionReasonEnum::DEPROVISION_REASON_SERVICE_EXPIRATION;
    $request->chromeOsDevice->deviceFiles = [
        new ChromeOsDeviceDeviceFiles(),
        new ChromeOsDeviceDeviceFiles(),
    ];
    $request->chromeOsDevice->deviceId = 'natus';
    $request->chromeOsDevice->diskVolumeReports = [
        new ChromeOsDeviceDiskVolumeReports(),
        new ChromeOsDeviceDiskVolumeReports(),
        new ChromeOsDeviceDiskVolumeReports(),
    ];
    $request->chromeOsDevice->dockMacAddress = 'molestiae';
    $request->chromeOsDevice->etag = 'perferendis';
    $request->chromeOsDevice->ethernetMacAddress = 'nihil';
    $request->chromeOsDevice->ethernetMacAddress0 = 'magnam';
    $request->chromeOsDevice->firmwareVersion = 'distinctio';
    $request->chromeOsDevice->firstEnrollmentTime = 'id';
    $request->chromeOsDevice->kind = 'labore';
    $request->chromeOsDevice->lastDeprovisionTimestamp = 'labore';
    $request->chromeOsDevice->lastEnrollmentTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T10:11:05.115Z');
    $request->chromeOsDevice->lastKnownNetwork = [
        new ChromeOsDeviceLastKnownNetwork(),
        new ChromeOsDeviceLastKnownNetwork(),
        new ChromeOsDeviceLastKnownNetwork(),
    ];
    $request->chromeOsDevice->lastSync = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-14T08:45:31.579Z');
    $request->chromeOsDevice->macAddress = 'aspernatur';
    $request->chromeOsDevice->manufactureDate = 'architecto';
    $request->chromeOsDevice->meid = 'magnam';
    $request->chromeOsDevice->model = 'et';
    $request->chromeOsDevice->notes = 'excepturi';
    $request->chromeOsDevice->orderNumber = 'ullam';
    $request->chromeOsDevice->orgUnitId = 'provident';
    $request->chromeOsDevice->orgUnitPath = 'quos';
    $request->chromeOsDevice->osUpdateStatus = new OsUpdateStatus();
    $request->chromeOsDevice->osUpdateStatus->rebootTime = 'sint';
    $request->chromeOsDevice->osUpdateStatus->state = OsUpdateStatusStateEnum::UPDATE_STATE_UNSPECIFIED;
    $request->chromeOsDevice->osUpdateStatus->targetKioskAppVersion = 'mollitia';
    $request->chromeOsDevice->osUpdateStatus->targetOsVersion = 'reiciendis';
    $request->chromeOsDevice->osUpdateStatus->updateCheckTime = 'mollitia';
    $request->chromeOsDevice->osUpdateStatus->updateTime = 'ad';
    $request->chromeOsDevice->osVersion = 'eum';
    $request->chromeOsDevice->platformVersion = 'dolor';
    $request->chromeOsDevice->recentUsers = [
        new ChromeOsDeviceRecentUsers(),
        new ChromeOsDeviceRecentUsers(),
        new ChromeOsDeviceRecentUsers(),
        new ChromeOsDeviceRecentUsers(),
    ];
    $request->chromeOsDevice->screenshotFiles = [
        new ChromeOsDeviceScreenshotFiles(),
    ];
    $request->chromeOsDevice->serialNumber = 'nemo';
    $request->chromeOsDevice->status = 'quasi';
    $request->chromeOsDevice->supportEndDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-06T19:47:24.047Z');
    $request->chromeOsDevice->systemRamFreeReports = [
        new ChromeOsDeviceSystemRamFreeReports(),
        new ChromeOsDeviceSystemRamFreeReports(),
        new ChromeOsDeviceSystemRamFreeReports(),
        new ChromeOsDeviceSystemRamFreeReports(),
    ];
    $request->chromeOsDevice->systemRamTotal = 'eius';
    $request->chromeOsDevice->tpmVersionInfo = new ChromeOsDeviceTpmVersionInfo();
    $request->chromeOsDevice->tpmVersionInfo->family = 'maxime';
    $request->chromeOsDevice->tpmVersionInfo->firmwareVersion = 'deleniti';
    $request->chromeOsDevice->tpmVersionInfo->manufacturer = 'facilis';
    $request->chromeOsDevice->tpmVersionInfo->specLevel = 'in';
    $request->chromeOsDevice->tpmVersionInfo->tpmModel = 'architecto';
    $request->chromeOsDevice->tpmVersionInfo->vendorSpecific = 'architecto';
    $request->chromeOsDevice->willAutoRenew = false;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'expedita';
    $request->customerId = 'nihil';
    $request->deviceId = 'repellat';
    $request->fields = 'quibusdam';
    $request->key = 'sed';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->projection = DirectoryChromeosdevicesUpdateProjectionEnum::FULL;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new DirectoryChromeosdevicesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->chromeosdevices->directoryChromeosdevicesUpdate($request, $requestSecurity);

    if ($response->chromeOsDevice !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
