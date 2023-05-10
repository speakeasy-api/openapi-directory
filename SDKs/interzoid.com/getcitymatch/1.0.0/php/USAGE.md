<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetcitymatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetcitymatchRequest();
    $request->city = 'Laruecester';
    $request->license = 'quibusdam';

    $response = $sdk->cityNameSimilarityKey->getcitymatch($request);

    if ($response->getcitymatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->