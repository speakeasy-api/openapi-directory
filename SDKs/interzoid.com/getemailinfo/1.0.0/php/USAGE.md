<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetemailinfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetemailinfoRequest();
    $request->email = 'Larue_Rau85@yahoo.com';
    $request->license = 'corrupti';

    $response = $sdk->emailAddressInformation->getemailinfo($request);

    if ($response->getemailinfo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->