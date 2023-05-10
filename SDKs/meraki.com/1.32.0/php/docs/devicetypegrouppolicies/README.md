# deviceTypeGroupPolicies

### Available Operations

* [getNetworkWirelessSsidDeviceTypeGroupPolicies](#getnetworkwirelessssiddevicetypegrouppolicies) - List the device type group policies for the SSID
* [updateNetworkWirelessSsidDeviceTypeGroupPolicies](#updatenetworkwirelessssiddevicetypegrouppolicies) - Update the device type group policies for the SSID

## getNetworkWirelessSsidDeviceTypeGroupPolicies

List the device type group policies for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest();
    $request->networkId = 'cumque';
    $request->number = 'in';

    $response = $sdk->deviceTypeGroupPolicies->getNetworkWirelessSsidDeviceTypeGroupPolicies($request);

    if ($response->getNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidDeviceTypeGroupPolicies

Update the device type group policies for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody();
    $request->requestBody->deviceTypePolicies = [
        new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(),
        new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(),
        new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(),
        new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(),
    ];
    $request->requestBody->enabled = false;
    $request->networkId = 'quibusdam';
    $request->number = 'culpa';

    $response = $sdk->deviceTypeGroupPolicies->updateNetworkWirelessSsidDeviceTypeGroupPolicies($request);

    if ($response->updateNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
