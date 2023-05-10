# additionalDeviceInformation

### Available Operations

* [additionalDeviceInformationGet](#additionaldeviceinformationget) - Gets the additional information (e.g. Firmware Version) about a device.

## additionalDeviceInformationGet

Gets the additional information (e.g. Firmware Version) about a device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdditionalDeviceInformationGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdditionalDeviceInformationGetRequest();
    $request->id = 'c78ca1ba-928f-4c81-a742-cb7392059293';

    $response = $sdk->additionalDeviceInformation->additionalDeviceInformationGet($request);

    if ($response->additionalDeviceInformation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
