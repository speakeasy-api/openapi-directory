<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchMessagingCountryRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchMessagingCountrySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchMessagingCountryRequest();
    $request->isoCountry = 'corrupti';

    $requestSecurity = new FetchMessagingCountrySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->fetchMessagingCountry($request, $requestSecurity);

    if ($response->pricingV1MessagingMessagingCountryInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->