# v4

### Available Operations

* [getNetworkSwitchDhcpV4ServersSeen](#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

## getNetworkSwitchDhcpV4ServersSeen

Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchDhcpV4ServersSeenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchDhcpV4ServersSeenRequest();
    $request->endingBefore = 'quae';
    $request->networkId = 'illo';
    $request->perPage = 839549;
    $request->startingAfter = 'recusandae';
    $request->t0 = 'porro';
    $request->timespan = 1943.46;

    $response = $sdk->v4->getNetworkSwitchDhcpV4ServersSeen($request);

    if ($response->getNetworkSwitchDhcpV4ServersSeen200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
