<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestingApplicationDetailServiceGetApkDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FileReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TestingApplicationDetailServiceGetApkDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestingApplicationDetailServiceGetApkDetailsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->fileReference = new FileReference();
    $request->fileReference->gcsPath = 'provident';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new TestingApplicationDetailServiceGetApkDetailsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->applicationDetailService->testingApplicationDetailServiceGetApkDetails($request, $requestSecurity);

    if ($response->getApkDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->