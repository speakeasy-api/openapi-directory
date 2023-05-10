<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetcitystandardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetcitystandardRequest();
    $request->city = 'Laruecester';
    $request->license = 'quibusdam';

    $response = $sdk->cityDataStandardization->getcitystandard($request);

    if ($response->getcitystandard200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->