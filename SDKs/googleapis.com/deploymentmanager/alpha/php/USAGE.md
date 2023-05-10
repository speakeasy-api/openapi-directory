<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerCompositeTypesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->compositeType = 'unde';
    $request->fields = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new DeploymentmanagerCompositeTypesDeleteSecurity();
    $requestSecurity->option1 = new DeploymentmanagerCompositeTypesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->compositeTypes->deploymentmanagerCompositeTypesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->