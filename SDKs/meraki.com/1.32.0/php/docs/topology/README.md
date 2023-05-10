# topology

### Available Operations

* [getNetworkTopologyLinkLayer](#getnetworktopologylinklayer) - List the LLDP and CDP information for all discovered devices and connections in a network.

## getNetworkTopologyLinkLayer

List the LLDP and CDP information for all discovered devices and connections in a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkTopologyLinkLayerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkTopologyLinkLayerRequest();
    $request->networkId = 'voluptatem';

    $response = $sdk->topology->getNetworkTopologyLinkLayer($request);

    if ($response->getNetworkTopologyLinkLayer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
