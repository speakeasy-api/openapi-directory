<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaxRatesByCountryCodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxRatesByCountryCodeRequest();
    $request->countryCode = 'US';
    $request->date = '2020-09-02';
    $request->domain = 'api.taxrates.io';
    $request->filter = 'corrupti';
    $request->productCodes = 'C010';
    $request->province = 'provident';
    $request->zip = '71642';

    $response = $sdk->v1Tax->taxRatesByCountryCode($request);

    if ($response->taxRatesByCountryCode200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->