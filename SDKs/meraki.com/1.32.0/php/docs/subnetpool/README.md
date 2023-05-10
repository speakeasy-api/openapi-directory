# subnetPool

### Available Operations

* [getNetworkCellularGatewaySubnetPool](#getnetworkcellulargatewaysubnetpool) - Return the subnet pool and mask configured for MGs in the network.
* [updateNetworkCellularGatewaySubnetPool](#updatenetworkcellulargatewaysubnetpool) - Update the subnet pool and mask configuration for MGs in the network.

## getNetworkCellularGatewaySubnetPool

Return the subnet pool and mask configured for MGs in the network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCellularGatewaySubnetPoolRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCellularGatewaySubnetPoolRequest();
    $request->networkId = 'deleniti';

    $response = $sdk->subnetPool->getNetworkCellularGatewaySubnetPool($request);

    if ($response->getNetworkCellularGatewaySubnetPool200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkCellularGatewaySubnetPool

Update the subnet pool and mask configuration for MGs in the network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewaySubnetPoolRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewaySubnetPoolRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkCellularGatewaySubnetPoolRequest();
    $request->requestBody = new UpdateNetworkCellularGatewaySubnetPoolRequestBody();
    $request->requestBody->cidr = 'maiores';
    $request->requestBody->mask = 43716;
    $request->networkId = 'praesentium';

    $response = $sdk->subnetPool->updateNetworkCellularGatewaySubnetPool($request);

    if ($response->updateNetworkCellularGatewaySubnetPool200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
