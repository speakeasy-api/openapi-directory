<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CheckUpgradeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->checkUpgradeRequest = new CheckUpgradeRequest();
    $request->checkUpgradeRequest->imageVersion = 'provident';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->environment = 'nulla';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->composerProjectsLocationsEnvironmentsCheckUpgrade($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->