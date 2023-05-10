# applicationDetailService

### Available Operations

* [testingApplicationDetailServiceGetApkDetails](#testingapplicationdetailservicegetapkdetails) - Gets the details of an Android application APK.

## testingApplicationDetailServiceGetApkDetails

Gets the details of an Android application APK.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->fileReference = new FileReference();
    $request->fileReference->gcsPath = 'iure';
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'delectus';
    $request->key = 'tempora';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

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
