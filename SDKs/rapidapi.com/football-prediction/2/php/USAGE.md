<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2ListFederationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2ListFederationsRequest();
    $request->xRapidApiKey = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';

    $response = $sdk->getApiV2ListFederations($request);

    if ($response->getApiV2ListFederations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->