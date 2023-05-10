<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LatestPackageRequest;
use \OpenAPI\OpenAPI\Models\Operations\LatestPackageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LatestPackageRequest();
    $request->packageName = 'corrupti';

    $requestSecurity = new LatestPackageSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->latestPackage($request, $requestSecurity);

    if ($response->controllersPackageDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->