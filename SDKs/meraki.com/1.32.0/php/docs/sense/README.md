# sense

### Available Operations

* [getDeviceCameraSense](#getdevicecamerasense) - Returns sense settings for a given camera
* [getDeviceCameraSenseObjectDetectionModels](#getdevicecamerasenseobjectdetectionmodels) - Returns the MV Sense object detection model list for the given camera
* [updateDeviceCameraSense](#updatedevicecamerasense) - Update sense settings for the given camera

## getDeviceCameraSense

Returns sense settings for a given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraSenseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraSenseRequest();
    $request->serial = 'accusamus';

    $response = $sdk->sense->getDeviceCameraSense($request);

    if ($response->getDeviceCameraSense200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->serial = 'quidem';

    $response = $sdk->sense->getDeviceCameraSenseObjectDetectionModels($request);

    if ($response->getDeviceCameraSenseObjectDetectionModels200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCameraSense

Update sense settings for the given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraSenseRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraSenseRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraSenseRequestBodyAudioDetection;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCameraSenseRequest();
    $request->requestBody = new UpdateDeviceCameraSenseRequestBody();
    $request->requestBody->audioDetection = new UpdateDeviceCameraSenseRequestBodyAudioDetection();
    $request->requestBody->audioDetection->enabled = false;
    $request->requestBody->detectionModelId = 'aliquam';
    $request->requestBody->mqttBrokerId = 'fuga';
    $request->requestBody->senseEnabled = false;
    $request->serial = 'itaque';

    $response = $sdk->sense->updateDeviceCameraSense($request);

    if ($response->updateDeviceCameraSense200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
