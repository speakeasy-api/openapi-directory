# machineLearning

### Available Operations

* [getDeliveryPrediction](#getdeliveryprediction) - Get a delivery prediction for a project

## getDeliveryPrediction

Get a delivery prediction for a project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryPredictionPayload;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeliveryPredictionPayload();
    $request->projectId = 185636;

    $response = $sdk->machineLearning->getDeliveryPrediction($request);

    if ($response->deliveryPredictionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
