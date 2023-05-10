<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConvertcurrencyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConvertcurrencyRequest();
    $request->amount = 'corrupti';
    $request->from = 'provident';
    $request->license = 'distinctio';
    $request->to = 'quibusdam';

    $response = $sdk->liveCurrencyRateConversion->convertcurrency($request);

    if ($response->convertcurrency200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->