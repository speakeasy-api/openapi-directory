# managementInterface

### Available Operations

* [getDeviceManagementInterface](#getdevicemanagementinterface) - Return the management interface settings for a device
* [updateDeviceManagementInterface](#updatedevicemanagementinterface) - Update the management interface settings for a device

## getDeviceManagementInterface

Return the management interface settings for a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceManagementInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceManagementInterfaceRequest();
    $request->serial = 'explicabo';

    $response = $sdk->managementInterface->getDeviceManagementInterface($request);

    if ($response->getDeviceManagementInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceManagementInterface

Update the management interface settings for a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceManagementInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceManagementInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceManagementInterfaceRequestBodyWan1;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceManagementInterfaceRequestBodyWan2;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceManagementInterfaceRequest();
    $request->requestBody = new UpdateDeviceManagementInterfaceRequestBody();
    $request->requestBody->wan1 = new UpdateDeviceManagementInterfaceRequestBodyWan1();
    $request->requestBody->wan1->staticDns = [
        'corrupti',
    ];
    $request->requestBody->wan1->staticGatewayIp = 'officiis';
    $request->requestBody->wan1->staticIp = 'inventore';
    $request->requestBody->wan1->staticSubnetMask = 'officia';
    $request->requestBody->wan1->usingStaticIp = false;
    $request->requestBody->wan1->vlan = 446860;
    $request->requestBody->wan1->wanEnabled = UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum::DISABLED;
    $request->requestBody->wan2 = new UpdateDeviceManagementInterfaceRequestBodyWan2();
    $request->requestBody->wan2->staticDns = [
        'fuga',
        'quisquam',
    ];
    $request->requestBody->wan2->staticGatewayIp = 'qui';
    $request->requestBody->wan2->staticIp = 'suscipit';
    $request->requestBody->wan2->staticSubnetMask = 'officia';
    $request->requestBody->wan2->usingStaticIp = false;
    $request->requestBody->wan2->vlan = 901496;
    $request->requestBody->wan2->wanEnabled = UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum::DISABLED;
    $request->serial = 'ratione';

    $response = $sdk->managementInterface->updateDeviceManagementInterface($request);

    if ($response->updateDeviceManagementInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
