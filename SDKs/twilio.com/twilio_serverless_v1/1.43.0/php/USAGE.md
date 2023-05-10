<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssetCreateAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAssetRequest();
    $request->requestBody = new CreateAssetCreateAssetRequest();
    $request->requestBody->friendlyName = 'corrupti';
    $request->serviceSid = 'provident';

    $requestSecurity = new CreateAssetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createAsset($request, $requestSecurity);

    if ($response->serverlessV1ServiceAsset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->