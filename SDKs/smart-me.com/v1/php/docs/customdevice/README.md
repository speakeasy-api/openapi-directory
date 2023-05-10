# customDevice

### Available Operations

* [customDeviceGet](#customdeviceget) - Gets all Custom Devices
* [customDevicePostForm](#customdevicepostform) - Creates or updates a Custom Device or updates it's values.
* [customDevicePostJson](#customdevicepostjson) - Creates or updates a Custom Device or updates it's values.
* [customDevicePostRaw](#customdevicepostraw) - Creates or updates a Custom Device or updates it's values.
* [getApiCustomDeviceId](#getapicustomdeviceid) - Gets a Custom Device by it's ID

## customDeviceGet

Gets all Devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->customDevice->customDeviceGet();

    if ($response->customDeviceToPosts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customDevicePostForm

Creates or updates a Custom Device or updates it's values.
            A Custom Device can be any device that like to add some measurement values to the smart-me Cloud.
            Only use a custom device for all non meters.
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CustomDeviceToPost;
use \OpenAPI\OpenAPI\Models\Shared\CustomDeviceValues;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomDeviceToPost();
    $request->id = '96fea759-6eb1-40fa-aa23-52c5955907af';
    $request->name = 'Juan O'Hara';
    $request->serial = 161309;
    $request->valueDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-15T20:18:47.519Z');
    $request->values = [
        new CustomDeviceValues(),
        new CustomDeviceValues(),
        new CustomDeviceValues(),
    ];

    $response = $sdk->customDevice->customDevicePostForm($request);

    if ($response->customDeviceToPost !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customDevicePostJson

Creates or updates a Custom Device or updates it's values.
            A Custom Device can be any device that like to add some measurement values to the smart-me Cloud.
            Only use a custom device for all non meters.
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CustomDeviceToPost;
use \OpenAPI\OpenAPI\Models\Shared\CustomDeviceValues;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomDeviceToPost();
    $request->id = '46773925-1aa5-42c3-b5ad-019da1ffe78f';
    $request->name = 'Geneva Klein Jr.';
    $request->serial = 441711;
    $request->valueDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-08T10:49:12.847Z');
    $request->values = [
        new CustomDeviceValues(),
    ];

    $response = $sdk->customDevice->customDevicePostJson($request);

    if ($response->customDeviceToPost !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customDevicePostRaw

Creates or updates a Custom Device or updates it's values.
            A Custom Device can be any device that like to add some measurement values to the smart-me Cloud.
            Only use a custom device for all non meters.
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'corporis'

    $response = $sdk->customDevice->customDevicePostRaw($request);

    if ($response->customDeviceToPost !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiCustomDeviceId

Gets a Device by it's ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiCustomDeviceIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiCustomDeviceIdRequest();
    $request->id = '471b5e6e-13b9-49d4-88e1-e91e450ad2ab';

    $response = $sdk->customDevice->getApiCustomDeviceId($request);

    if ($response->customDeviceToPost !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
