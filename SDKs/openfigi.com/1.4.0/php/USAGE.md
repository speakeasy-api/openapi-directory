<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMappingValuesKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMappingValuesKeyKeyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMappingValuesKeyRequest();
    $request->key = GetMappingValuesKeyKeyEnum::CURRENCY;

    $response = $sdk->getMappingValuesKey($request);

    if ($response->getMappingValuesKey200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->