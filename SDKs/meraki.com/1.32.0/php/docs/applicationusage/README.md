# applicationUsage

### Available Operations

* [getNetworkClientsApplicationUsage](#getnetworkclientsapplicationusage) - Return the application usage data for clients

## getNetworkClientsApplicationUsage

Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsApplicationUsageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsApplicationUsageSsidNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientsApplicationUsageRequest();
    $request->clients = 'fugiat';
    $request->endingBefore = 'doloremque';
    $request->networkId = 'dicta';
    $request->perPage = 483706;
    $request->ssidNumber = GetNetworkClientsApplicationUsageSsidNumberEnum::FOUR;
    $request->startingAfter = 'esse';
    $request->t0 = 'ex';
    $request->t1 = 'consectetur';
    $request->timespan = 3998.12;

    $response = $sdk->applicationUsage->getNetworkClientsApplicationUsage($request);

    if ($response->getNetworkClientsApplicationUsage200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
