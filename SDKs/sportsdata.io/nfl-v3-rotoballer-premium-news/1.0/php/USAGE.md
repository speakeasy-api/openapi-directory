<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PremiumNewsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PremiumNewsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PremiumNewsRequest();
    $request->format = PremiumNewsFormatEnum::JSON;

    $response = $sdk->premiumNews($request);

    if ($response->news !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->