<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetcompanymatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetcompanymatchRequest();
    $request->company = 'Medhurst - Rau';
    $request->license = 'quibusdam';

    $response = $sdk->companyNameSimilarityKey->getcompanymatch($request);

    if ($response->getcompanymatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->