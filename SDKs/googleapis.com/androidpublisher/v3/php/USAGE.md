<!-- Start SDK Example Usage -->
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
        new DeviceGroup(),
        new DeviceGroup(),
    ];
    $request->deviceTierConfigInput->deviceTierSet = new DeviceTierSet();
    $request->deviceTierConfigInput->deviceTierSet->deviceTiers = [
        new DeviceTier(),
        new DeviceTier(),
        new DeviceTier(),
    ];
    $request->deviceTierConfigInput->userCountrySets = [
        new UserCountrySet(),
        new UserCountrySet(),
        new UserCountrySet(),
        new UserCountrySet(),
    ];
    $request->accessToken = 'unde';
    $request->allowUnknownDevices = false;
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corrupti';
    $request->fields = 'illum';
    $request->key = 'vel';
    $request->oauthToken = 'error';
    $request->packageName = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'magnam';

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
<!-- End SDK Example Usage -->