# objectDetectionModels

### Available Operations

* [getDeviceCameraSenseObjectDetectionModels](#getdevicecamerasenseobjectdetectionmodels) - Returns the MV Sense object detection model list for the given camera

## getDeviceCameraSenseObjectDetectionModels

Returns the MV Sense object detection model list for the given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraSenseObjectDetectionModelsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraSenseObjectDetectionModelsRequest();
    $request->serial = 'vero';

    $response = $sdk->objectDetectionModels->getDeviceCameraSenseObjectDetectionModels($request);

    if ($response->getDeviceCameraSenseObjectDetectionModels200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
