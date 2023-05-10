<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningCustomersConfigurationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningCustomersConfigurationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->configurationInput = new ConfigurationInput();
    $request->configurationInput->companyName = 'provident';
    $request->configurationInput->configurationName = 'distinctio';
    $request->configurationInput->contactEmail = 'quibusdam';
    $request->configurationInput->contactPhone = 'unde';
    $request->configurationInput->customMessage = 'nulla';
    $request->configurationInput->dpcExtras = 'corrupti';
    $request->configurationInput->dpcResourcePath = 'illum';
    $request->configurationInput->isDefault = false;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->oauthToken = 'magnam';
    $request->parent = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'tempora';

    $response = $sdk->customers->androiddeviceprovisioningCustomersConfigurationsCreate($request);

    if ($response->configuration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->