<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationsApplicationIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationsApplicationIdRequest();
    $request->applicationId = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';

    $response = $sdk->applications->getApplicationsApplicationId($request);

    if ($response->getApplicationsApplicationId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->