# fields

### Available Operations

* [updateNetworkSmDevicesFields](#updatenetworksmdevicesfields) - Modify the fields of a device

## updateNetworkSmDevicesFields

Modify the fields of a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSmDevicesFieldsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSmDevicesFieldsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSmDevicesFieldsRequest();
    $request->requestBody = new UpdateNetworkSmDevicesFieldsRequestBody();
    $request->requestBody->deviceFields = new UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields();
    $request->requestBody->deviceFields->name = 'Edwin Olson';
    $request->requestBody->deviceFields->notes = 'unde';
    $request->requestBody->id = 'b41d6124-3531-4870-8f68-b03ad421bd43';
    $request->requestBody->serial = 'facere';
    $request->requestBody->wifiMac = 'beatae';
    $request->networkId = 'delectus';

    $response = $sdk->fields->updateNetworkSmDevicesFields($request);

    if ($response->updateNetworkSmDevicesFields200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
