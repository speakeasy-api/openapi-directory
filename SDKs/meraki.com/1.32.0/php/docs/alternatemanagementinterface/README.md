# alternateManagementInterface

### Available Operations

* [getNetworkSwitchAlternateManagementInterface](#getnetworkswitchalternatemanagementinterface) - Return the switch alternate management interface for the network
* [getNetworkWirelessAlternateManagementInterface](#getnetworkwirelessalternatemanagementinterface) - Return alternate management interface and devices with IP assigned
* [updateNetworkSwitchAlternateManagementInterface](#updatenetworkswitchalternatemanagementinterface) - Update the switch alternate management interface for the network
* [updateNetworkWirelessAlternateManagementInterface](#updatenetworkwirelessalternatemanagementinterface) - Update alternate management interface and device static IP

## getNetworkSwitchAlternateManagementInterface

Return the switch alternate management interface for the network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchAlternateManagementInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchAlternateManagementInterfaceRequest();
    $request->networkId = 'deleniti';

    $response = $sdk->alternateManagementInterface->getNetworkSwitchAlternateManagementInterface($request);

    if ($response->getNetworkSwitchAlternateManagementInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessAlternateManagementInterface

Return alternate management interface and devices with IP assigned

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessAlternateManagementInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessAlternateManagementInterfaceRequest();
    $request->networkId = 'itaque';

    $response = $sdk->alternateManagementInterface->getNetworkWirelessAlternateManagementInterface($request);

    if ($response->getNetworkWirelessAlternateManagementInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchAlternateManagementInterface

Update the switch alternate management interface for the network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAlternateManagementInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAlternateManagementInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchAlternateManagementInterfaceRequest();
    $request->requestBody = new UpdateNetworkSwitchAlternateManagementInterfaceRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->protocols = [
        UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum::RADIUS,
        UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum::SNMP,
        UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum::SYSLOG,
    ];
    $request->requestBody->switches = [
        new UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches(),
    ];
    $request->requestBody->vlanId = 869489;
    $request->networkId = 'et';

    $response = $sdk->alternateManagementInterface->updateNetworkSwitchAlternateManagementInterface($request);

    if ($response->updateNetworkSwitchAlternateManagementInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessAlternateManagementInterface

Update alternate management interface and device static IP

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessAlternateManagementInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessAlternateManagementInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessAlternateManagementInterfaceRequest();
    $request->requestBody = new UpdateNetworkWirelessAlternateManagementInterfaceRequestBody();
    $request->requestBody->accessPoints = [
        new UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints(),
        new UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints(),
    ];
    $request->requestBody->enabled = false;
    $request->requestBody->protocols = [
        UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum::RADIUS,
    ];
    $request->requestBody->vlanId = 86532;
    $request->networkId = 'consectetur';

    $response = $sdk->alternateManagementInterface->updateNetworkWirelessAlternateManagementInterface($request);

    if ($response->updateNetworkWirelessAlternateManagementInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
