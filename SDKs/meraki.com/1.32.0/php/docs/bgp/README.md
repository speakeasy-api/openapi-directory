# bgp

### Available Operations

* [getNetworkApplianceVpnBgp](#getnetworkappliancevpnbgp) - Return a Hub BGP Configuration
* [updateNetworkApplianceVpnBgp](#updatenetworkappliancevpnbgp) - Update a Hub BGP Configuration

## getNetworkApplianceVpnBgp

Return a Hub BGP Configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceVpnBgpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceVpnBgpRequest();
    $request->networkId = 'modi';

    $response = $sdk->bgp->getNetworkApplianceVpnBgp($request);

    if ($response->getNetworkApplianceVpnBgp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceVpnBgp

Update a Hub BGP Configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnBgpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnBgpRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnBgpRequestBodyNeighbors;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceVpnBgpRequest();
    $request->requestBody = new UpdateNetworkApplianceVpnBgpRequestBody();
    $request->requestBody->asNumber = 144286;
    $request->requestBody->enabled = false;
    $request->requestBody->ibgpHoldTimer = 66149;
    $request->requestBody->neighbors = [
        new UpdateNetworkApplianceVpnBgpRequestBodyNeighbors(),
        new UpdateNetworkApplianceVpnBgpRequestBodyNeighbors(),
        new UpdateNetworkApplianceVpnBgpRequestBodyNeighbors(),
    ];
    $request->networkId = 'quae';

    $response = $sdk->bgp->updateNetworkApplianceVpnBgp($request);

    if ($response->updateNetworkApplianceVpnBgp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
