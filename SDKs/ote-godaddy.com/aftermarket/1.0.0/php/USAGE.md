<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AftermarketListingExpiryCreate;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new AftermarketListingExpiryCreate(),
        new AftermarketListingExpiryCreate(),
        new AftermarketListingExpiryCreate(),
    ]

    $response = $sdk->v1->addExpiryListingsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->