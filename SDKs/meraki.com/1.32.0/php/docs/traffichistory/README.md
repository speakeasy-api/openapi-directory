# trafficHistory

### Available Operations

* [getNetworkClientTrafficHistory](#getnetworkclienttraffichistory) - Return the client's network traffic data over time

## getNetworkClientTrafficHistory

Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientTrafficHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientTrafficHistoryRequest();
    $request->clientId = 'tenetur';
    $request->endingBefore = 'laboriosam';
    $request->networkId = 'recusandae';
    $request->perPage = 835707;
    $request->startingAfter = 'quia';

    $response = $sdk->trafficHistory->getNetworkClientTrafficHistory($request);

    if ($response->getNetworkClientTrafficHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
