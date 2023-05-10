# two2UserTripsOptional

### Available Operations

* [tripsTripDetails](#tripstripdetails) - Trips - trip details

## tripsTripDetails

Trips - trip details

### Example Usage

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
    $request->trackToken = 'quibusdam';

    $response = $sdk->two2UserTripsOptional->tripsTripDetails($request);

    if ($response->tripsTripDetails200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
