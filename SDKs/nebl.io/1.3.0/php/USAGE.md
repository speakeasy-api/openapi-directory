<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddressRequest();
    $request->address = '5786 Little Streets';

    $response = $sdk->insight->getAddress($request);

    if ($response->getAddressResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->