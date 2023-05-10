# instanceSettings

### Available Operations

* [computeInstanceSettingsGet](#computeinstancesettingsget) - Get Instance settings.
* [computeInstanceSettingsPatch](#computeinstancesettingspatch) - Patch Instance settings

## computeInstanceSettingsGet

Get Instance settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceSettingsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceSettingsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceSettingsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceSettingsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceSettingsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceSettingsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'nobis';
    $request->key = 'expedita';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->project = 'adipisci';
    $request->quotaUser = 'atque';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'rem';
    $request->userIp = 'exercitationem';
    $request->zone = 'tempore';

    $requestSecurity = new ComputeInstanceSettingsGetSecurity();
    $requestSecurity->option1 = new ComputeInstanceSettingsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceSettings->computeInstanceSettingsGet($request, $requestSecurity);

    if ($response->instanceSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceSettingsPatch

Patch Instance settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceSettingsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceSettings;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceSettingsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceSettingsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceSettingsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceSettingsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceSettings = new InstanceSettings();
    $request->instanceSettings->email = 'Alyson.Hansen@yahoo.com';
    $request->instanceSettings->kind = 'assumenda';
    $request->instanceSettings->machineType = 'reprehenderit';
    $request->instanceSettings->zone = 'tempora';
    $request->accessToken = 'ad';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sequi';
    $request->fields = 'eligendi';
    $request->key = 'consequuntur';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->project = 'veniam';
    $request->quotaUser = 'sint';
    $request->requestId = 'minus';
    $request->updateMask = 'excepturi';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'nesciunt';
    $request->userIp = 'maiores';
    $request->zone = 'veniam';

    $requestSecurity = new ComputeInstanceSettingsPatchSecurity();
    $requestSecurity->option1 = new ComputeInstanceSettingsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceSettings->computeInstanceSettingsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
