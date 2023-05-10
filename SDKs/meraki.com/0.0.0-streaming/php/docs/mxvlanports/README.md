# mxVLANPorts

### Available Operations

* [getNetworkAppliancePort](#getnetworkapplianceport) - Return per-port VLAN settings for a single MX port.
* [getNetworkAppliancePorts](#getnetworkapplianceports) - List per-port VLAN settings for all ports of a MX.
* [updateNetworkAppliancePort](#updatenetworkapplianceport) - Update the per-port VLAN settings for a single MX port.

## getNetworkAppliancePort

Return per-port VLAN settings for a single MX port.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAppliancePortRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAppliancePortRequest();
    $request->appliancePortId = 'delectus';
    $request->networkId = 'voluptate';

    $response = $sdk->mxVLANPorts->getNetworkAppliancePort($request);

    if ($response->getNetworkAppliancePort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAppliancePorts

List per-port VLAN settings for all ports of a MX.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAppliancePortsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAppliancePortsRequest();
    $request->networkId = 'consectetur';

    $response = $sdk->mxVLANPorts->getNetworkAppliancePorts($request);

    if ($response->getNetworkAppliancePorts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkAppliancePort

Update the per-port VLAN settings for a single MX port.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePortRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePortRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkAppliancePortRequest();
    $request->requestBody = new UpdateNetworkAppliancePortRequestBody();
    $request->requestBody->accessPolicy = 'vero';
    $request->requestBody->allowedVlans = 'tenetur';
    $request->requestBody->dropUntaggedTraffic = false;
    $request->requestBody->enabled = false;
    $request->requestBody->type = 'dignissimos';
    $request->requestBody->vlan = 941378;
    $request->appliancePortId = 'distinctio';
    $request->networkId = 'quod';

    $response = $sdk->mxVLANPorts->updateNetworkAppliancePort($request);

    if ($response->updateNetworkAppliancePort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
