<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTrunkingCountryRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTrunkingCountrySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTrunkingCountryRequest();
    $request->isoCountry = 'corrupti';

    $requestSecurity = new FetchTrunkingCountrySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->fetchTrunkingCountry($request, $requestSecurity);

    if ($response->pricingV2TrunkingCountryInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->