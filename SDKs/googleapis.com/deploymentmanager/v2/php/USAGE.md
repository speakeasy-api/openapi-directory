<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsCancelPreviewRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentsCancelPreviewRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsCancelPreviewSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsCancelPreviewSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsCancelPreviewSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerDeploymentsCancelPreviewRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->deploymentsCancelPreviewRequest = new DeploymentsCancelPreviewRequest();
    $request->deploymentsCancelPreviewRequest->fingerprint = 'provident';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->deployment = 'nulla';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->project = 'error';
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new DeploymentmanagerDeploymentsCancelPreviewSecurity();
    $requestSecurity->option1 = new DeploymentmanagerDeploymentsCancelPreviewSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->deployments->deploymentmanagerDeploymentsCancelPreview($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->