<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetaddressmatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetaddressmatchRequest();
    $request->address = '5786 Little Streets';
    $request->license = 'vel';

    $response = $sdk->streetAddressSimilarityKey->getaddressmatch($request);

    if ($response->getaddressmatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->