# vehicle

### Available Operations

* [vehicleGet](#vehicleget) - Gets the predictions for a given list of vehicle Id's.

## vehicleGet

Gets the predictions for a given list of vehicle Id's.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VehicleGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VehicleGetRequest();
    $request->ids = [
        'iste',
    ];

    $response = $sdk->vehicle->vehicleGet($request);

    if ($response->tflApiPresentationEntitiesPredictions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
