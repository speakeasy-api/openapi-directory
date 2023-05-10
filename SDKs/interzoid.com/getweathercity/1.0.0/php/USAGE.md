<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetweatherRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetweatherRequest();
    $request->city = 'Laruecester';
    $request->license = 'quibusdam';
    $request->state = 'unde';

    $response = $sdk->weatherByCityAndState->getweather($request);

    if ($response->getweather200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->