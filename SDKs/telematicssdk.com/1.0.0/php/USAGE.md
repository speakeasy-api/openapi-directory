<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TripsTripDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TripsTripDetailsRequest();
    $request->trackToken = 'corrupti';

    $response = $sdk->twoForMobileAppOptional->tripsTripDetails($request);

    if ($response->tripsTripDetails200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->