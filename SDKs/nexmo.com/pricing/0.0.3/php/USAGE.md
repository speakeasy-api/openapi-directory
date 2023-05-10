<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrievePrefixPricingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrievePrefixPricingRequest();
    $request->apiKey = 'corrupti';
    $request->apiSecret = 'provident';
    $request->prefix = 'distinctio';
    $request->type = 'quibusdam';

    $response = $sdk->pricing->retrievePrefixPricing($request);

    if ($response->pricingCountriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->