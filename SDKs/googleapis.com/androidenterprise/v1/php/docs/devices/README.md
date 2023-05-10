# devices

### Available Operations

* [androidenterpriseDevicesForceReportUpload](#androidenterprisedevicesforcereportupload) - Uploads a report containing any changes in app states on the device since the last report was generated. You can call this method up to 3 times every 24 hours for a given device. If you exceed the quota, then the Google Play EMM API returns HTTP 429 Too Many Requests.
* [androidenterpriseDevicesGet](#androidenterprisedevicesget) - Retrieves the details of a device.
* [androidenterpriseDevicesGetState](#androidenterprisedevicesgetstate) - Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
* [androidenterpriseDevicesList](#androidenterprisedeviceslist) - Retrieves the IDs of all of a user's devices.
* [androidenterpriseDevicesSetState](#androidenterprisedevicessetstate) - Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
* [androidenterpriseDevicesUpdate](#androidenterprisedevicesupdate) - Updates the device policy. To ensure the policy is properly enforced, you need to prevent unmanaged accounts from accessing Google Play by setting the allowed_accounts in the managed configuration for the Google Play package. See restrict accounts in Google Play. When provisioning a new device, you should set the device policy using this method before adding the managed Google Play Account to the device, otherwise the policy will not be applied for a short period of time after adding the account to the device.

## androidenterpriseDevicesForceReportUpload

Uploads a report containing any changes in app states on the device since the last report was generated. You can call this method up to 3 times every 24 hours for a given device. If you exceed the quota, then the Google Play EMM API returns HTTP 429 Too Many Requests.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseDevicesForceReportUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseDevicesForceReportUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseDevicesForceReportUploadRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->deviceId = 'tempora';
    $request->enterpriseId = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatum';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'excepturi';
    $request->userId = 'nisi';

    $requestSecurity = new AndroidenterpriseDevicesForceReportUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->androidenterpriseDevicesForceReportUpload($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseDevicesGet

Retrieves the details of a device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseDevicesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseDevicesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseDevicesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->deviceId = 'veritatis';
    $request->enterpriseId = 'deserunt';
    $request->fields = 'perferendis';
    $request->key = 'ipsam';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';
    $request->userId = 'at';

    $requestSecurity = new AndroidenterpriseDevicesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->androidenterpriseDevicesGet($request, $requestSecurity);

    if ($response->device !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseDevicesGetState

Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseDevicesGetStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseDevicesGetStateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseDevicesGetStateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->deviceId = 'quod';
    $request->enterpriseId = 'esse';
    $request->fields = 'totam';
    $request->key = 'porro';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'officia';
    $request->userId = 'occaecati';

    $requestSecurity = new AndroidenterpriseDevicesGetStateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->androidenterpriseDevicesGetState($request, $requestSecurity);

    if ($response->deviceState !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseDevicesList

Retrieves the IDs of all of a user's devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseDevicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseDevicesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseDevicesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'optio';
    $request->enterpriseId = 'totam';
    $request->fields = 'beatae';
    $request->key = 'commodi';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'impedit';
    $request->userId = 'cum';

    $requestSecurity = new AndroidenterpriseDevicesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->androidenterpriseDevicesList($request, $requestSecurity);

    if ($response->devicesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseDevicesSetState

Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseDevicesSetStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceState;
use \OpenAPI\OpenAPI\Models\Shared\DeviceStateAccountStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseDevicesSetStateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseDevicesSetStateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->deviceState = new DeviceState();
    $request->deviceState->accountState = DeviceStateAccountStateEnum::ENABLED;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->deviceId = 'ad';
    $request->enterpriseId = 'natus';
    $request->fields = 'sed';
    $request->key = 'iste';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'hic';
    $request->userId = 'saepe';

    $requestSecurity = new AndroidenterpriseDevicesSetStateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->androidenterpriseDevicesSetState($request, $requestSecurity);

    if ($response->deviceState !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseDevicesUpdate

Updates the device policy. To ensure the policy is properly enforced, you need to prevent unmanaged accounts from accessing Google Play by setting the allowed_accounts in the managed configuration for the Google Play package. See restrict accounts in Google Play. When provisioning a new device, you should set the device policy using this method before adding the managed Google Play Account to the device, otherwise the policy will not be applied for a short period of time after adding the account to the device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseDevicesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Device;
use \OpenAPI\OpenAPI\Models\Shared\DeviceManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\PolicyAutoUpdatePolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\PolicyDeviceReportPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\PolicyProductAvailabilityPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AutoInstallPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AutoInstallConstraint;
use \OpenAPI\OpenAPI\Models\Shared\AutoInstallConstraintChargingStateConstraintEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoInstallConstraintDeviceIdleStateConstraintEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoInstallConstraintNetworkTypeConstraintEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoInstallPolicyAutoInstallModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductPolicyAutoUpdateModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseAuthenticationAppLinkConfig;
use \OpenAPI\OpenAPI\Models\Shared\ManagedConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationVariables;
use \OpenAPI\OpenAPI\Models\Shared\VariableSet;
use \OpenAPI\OpenAPI\Models\Shared\ManagedProperty;
use \OpenAPI\OpenAPI\Models\Shared\ManagedPropertyBundle;
use \OpenAPI\OpenAPI\Models\Shared\ProductPolicyTracksEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceReport;
use \OpenAPI\OpenAPI\Models\Shared\AppState;
use \OpenAPI\OpenAPI\Models\Shared\KeyedAppState;
use \OpenAPI\OpenAPI\Models\Shared\KeyedAppStateSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseDevicesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseDevicesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->device = new Device();
    $request->device->androidId = 'in';
    $request->device->device = 'corporis';
    $request->device->latestBuildFingerprint = 'iste';
    $request->device->maker = 'iure';
    $request->device->managementType = DeviceManagementTypeEnum::UNMANAGED_PROFILE;
    $request->device->model = 'quidem';
    $request->device->policy = new Policy();
    $request->device->policy->autoUpdatePolicy = PolicyAutoUpdatePolicyEnum::AUTO_UPDATE_POLICY_UNSPECIFIED;
    $request->device->policy->deviceReportPolicy = PolicyDeviceReportPolicyEnum::DEVICE_REPORT_POLICY_UNSPECIFIED;
    $request->device->policy->maintenanceWindow = new MaintenanceWindow();
    $request->device->policy->maintenanceWindow->durationMs = 'reiciendis';
    $request->device->policy->maintenanceWindow->startTimeAfterMidnightMs = 'est';
    $request->device->policy->productAvailabilityPolicy = PolicyProductAvailabilityPolicyEnum::WHITELIST;
    $request->device->policy->productPolicy = [
        new ProductPolicy(),
        new ProductPolicy(),
        new ProductPolicy(),
    ];
    $request->device->product = 'dolores';
    $request->device->report = new DeviceReport();
    $request->device->report->appState = [
        new AppState(),
    ];
    $request->device->report->lastUpdatedTimestampMillis = 'corporis';
    $request->device->retailBrand = 'explicabo';
    $request->device->sdkVersion = 750686;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nemo';
    $request->deviceId = 'minima';
    $request->enterpriseId = 'excepturi';
    $request->fields = 'accusantium';
    $request->key = 'iure';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->updateMask = 'sapiente';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'mollitia';
    $request->userId = 'dolorem';

    $requestSecurity = new AndroidenterpriseDevicesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->androidenterpriseDevicesUpdate($request, $requestSecurity);

    if ($response->device !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
