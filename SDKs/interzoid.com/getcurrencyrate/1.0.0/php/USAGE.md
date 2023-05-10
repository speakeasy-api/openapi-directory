<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetcurrencyrateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetcurrencyrateRequest();
    $request->license = 'corrupti';
    $request->symbol = 'provident';

    $response = $sdk->currencyRates->getcurrencyrate($request);

    if ($response->getcurrencyrate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->