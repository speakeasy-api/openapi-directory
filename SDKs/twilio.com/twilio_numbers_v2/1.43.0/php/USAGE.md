<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateBundleCreateBundleRequest;
use \OpenAPI\OpenAPI\Models\Shared\BundleEnumEndUserTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBundleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBundleCreateBundleRequest();
    $request->email = 'Larue_Rau85@yahoo.com';
    $request->endUserType = BundleEnumEndUserTypeEnum::BUSINESS;
    $request->friendlyName = 'illum';
    $request->isoCountry = 'vel';
    $request->numberType = 'error';
    $request->regulationSid = 'deserunt';
    $request->statusCallback = 'http://innocent-effect.org';

    $requestSecurity = new CreateBundleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createBundle($request, $requestSecurity);

    if ($response->numbersV2RegulatoryComplianceBundle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->