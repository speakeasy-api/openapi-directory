# predictions

### Available Operations

* [predictions](#predictions) - Get predictions for a given year

## predictions

Get all predictions for a given year.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PredictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PredictionsRequest();
    $request->year = 844266;

    $response = $sdk->predictions->predictions($request);

    if ($response->predictions200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
