# relationships

### Available Operations

* [getDeviceSensorRelationships](#getdevicesensorrelationships) - List the sensor roles for a given sensor or camera device.
* [getNetworkSensorRelationships](#getnetworksensorrelationships) - List the sensor roles for devices in a given network
* [updateDeviceSensorRelationships](#updatedevicesensorrelationships) - Assign one or more sensor roles to a given sensor or camera device.

## getDeviceSensorRelationships

List the sensor roles for a given sensor or camera device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSensorRelationshipsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSensorRelationshipsRequest();
    $request->serial = 'veniam';

    $response = $sdk->relationships->getDeviceSensorRelationships($request);

    if ($response->getDeviceSensorRelationships200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSensorRelationships

List the sensor roles for devices in a given network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSensorRelationshipsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSensorRelationshipsRequest();
    $request->networkId = 'perspiciatis';

    $response = $sdk->relationships->getNetworkSensorRelationships($request);

    if ($response->getNetworkSensorRelationships200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceSensorRelationships

Assign one or more sensor roles to a given sensor or camera device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSensorRelationshipsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSensorRelationshipsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSensorRelationshipsRequestBodyLivestream;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceSensorRelationshipsRequest();
    $request->requestBody = new UpdateDeviceSensorRelationshipsRequestBody();
    $request->requestBody->livestream = new UpdateDeviceSensorRelationshipsRequestBodyLivestream();
    $request->requestBody->livestream->relatedDevices = [
        new UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices(),
        new UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices(),
        new UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices(),
    ];
    $request->serial = 'incidunt';

    $response = $sdk->relationships->updateDeviceSensorRelationships($request);

    if ($response->updateDeviceSensorRelationships200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
