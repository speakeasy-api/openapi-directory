# servers

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
    $request->endingBefore = 'quam';
    $request->networkId = 'recusandae';
    $request->perPage = 614594;
    $request->startingAfter = 'cupiditate';
    $request->t0 = 'blanditiis';
    $request->timespan = 2539.29;

    $response = $sdk->servers->getNetworkSwitchDhcpV4ServersSeen($request);

    if ($response->getNetworkSwitchDhcpV4ServersSeen200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
