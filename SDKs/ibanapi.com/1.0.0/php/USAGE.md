<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBalanceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetBalanceSecurity();
    $requestSecurity->apiKeySecurity = 'YOUR_API_KEY_HERE';

    $response = $sdk->ibanapi->getBalance($requestSecurity);

    if ($response->balanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->