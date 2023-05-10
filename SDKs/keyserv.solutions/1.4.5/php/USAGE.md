<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeysApiCurrentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeysApiCurrentRequest();
    $request->serial = 'corrupti';

    $response = $sdk->keysApi->keysApiCurrent($request);

    if ($response->keysApiCurrent200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->