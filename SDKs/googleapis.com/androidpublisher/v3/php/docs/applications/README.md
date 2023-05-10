# applications

### Available Operations

* [androidpublisherApplicationsDeviceTierConfigsCreate](#androidpublisherapplicationsdevicetierconfigscreate) - Creates a new device tier config for an app.
* [androidpublisherApplicationsDeviceTierConfigsGet](#androidpublisherapplicationsdevicetierconfigsget) - Returns a particular device tier config.
* [androidpublisherApplicationsDeviceTierConfigsList](#androidpublisherapplicationsdevicetierconfigslist) - Returns created device tier configs, ordered by descending creation time.

## androidpublisherApplicationsDeviceTierConfigsCreate

Creates a new device tier config for an app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherApplicationsDeviceTierConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTierConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceGroup;
use \OpenAPI\OpenAPI\Models\Shared\DeviceSelector;
use \OpenAPI\OpenAPI\Models\Shared\DeviceRam;
use \OpenAPI\OpenAPI\Models\Shared\DeviceId;
use \OpenAPI\OpenAPI\Models\Shared\SystemFeature;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTierSet;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTier;
use \OpenAPI\OpenAPI\Models\Shared\UserCountrySet;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherApplicationsDeviceTierConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->deviceTierConfigInput = new DeviceTierConfigInput();
    $request->deviceTierConfigInput->deviceGroups = [
        new DeviceGroup(),
    ];
    $request->deviceTierConfigInput->deviceTierSet = new DeviceTierSet();
    $request->deviceTierConfigInput->deviceTierSet->deviceTiers = [
        new DeviceTier(),
        new DeviceTier(),
        new DeviceTier(),
        new DeviceTier(),
    ];
    $request->deviceTierConfigInput->userCountrySets = [
        new UserCountrySet(),
        new UserCountrySet(),
    ];
    $request->accessToken = 'suscipit';
    $request->allowUnknownDevices = false;
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minus';
    $request->fields = 'placeat';
    $request->key = 'voluptatum';
    $request->oauthToken = 'iusto';
    $request->packageName = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->applications->androidpublisherApplicationsDeviceTierConfigsCreate($request, $requestSecurity);

    if ($response->deviceTierConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherApplicationsDeviceTierConfigsGet

Returns a particular device tier config.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherApplicationsDeviceTierConfigsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherApplicationsDeviceTierConfigsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherApplicationsDeviceTierConfigsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->deviceTierConfigId = 'perferendis';
    $request->fields = 'ipsam';
    $request->key = 'repellendus';
    $request->oauthToken = 'sapiente';
    $request->packageName = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'at';

    $requestSecurity = new AndroidpublisherApplicationsDeviceTierConfigsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->applications->androidpublisherApplicationsDeviceTierConfigsGet($request, $requestSecurity);

    if ($response->deviceTierConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherApplicationsDeviceTierConfigsList

Returns created device tier configs, ordered by descending creation time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherApplicationsDeviceTierConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherApplicationsDeviceTierConfigsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherApplicationsDeviceTierConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'esse';
    $request->key = 'totam';
    $request->oauthToken = 'porro';
    $request->packageName = 'dolorum';
    $request->pageSize = 118274;
    $request->pageToken = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new AndroidpublisherApplicationsDeviceTierConfigsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->applications->androidpublisherApplicationsDeviceTierConfigsList($request, $requestSecurity);

    if ($response->listDeviceTierConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
