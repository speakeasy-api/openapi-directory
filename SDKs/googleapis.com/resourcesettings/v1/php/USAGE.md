<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResourcesettingsProjectsSettingsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResourcesettingsProjectsSettingsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResourcesettingsProjectsSettingsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResourcesettingsProjectsSettingsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->name = 'Dallas Kassulke';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'debitis';
    $request->view = ResourcesettingsProjectsSettingsGetViewEnum::SETTING_VIEW_UNSPECIFIED;

    $requestSecurity = new ResourcesettingsProjectsSettingsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->resourcesettingsProjectsSettingsGet($request, $requestSecurity);

    if ($response->googleCloudResourcesettingsV1Setting !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->