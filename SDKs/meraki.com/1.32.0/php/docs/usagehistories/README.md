# usageHistories

### Available Operations

* [getNetworkClientsUsageHistories](#getnetworkclientsusagehistories) - Return the usage histories for clients

## getNetworkClientsUsageHistories

Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsUsageHistoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsUsageHistoriesSsidNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientsUsageHistoriesRequest();
    $request->clients = 'recusandae';
    $request->endingBefore = 'accusantium';
    $request->networkId = 'eaque';
    $request->perPage = 983308;
    $request->ssidNumber = GetNetworkClientsUsageHistoriesSsidNumberEnum::FOUR;
    $request->startingAfter = 'reprehenderit';
    $request->t0 = 'deleniti';
    $request->t1 = 'saepe';
    $request->timespan = 7401.97;

    $response = $sdk->usageHistories->getNetworkClientsUsageHistories($request);

    if ($response->getNetworkClientsUsageHistories200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
