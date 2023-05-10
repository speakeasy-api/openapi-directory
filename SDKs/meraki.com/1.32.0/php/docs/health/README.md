# health

### Available Operations

* [getNetworkHealthAlerts](#getnetworkhealthalerts) - Return all global alerts on this network

## getNetworkHealthAlerts

Return all global alerts on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkHealthAlertsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkHealthAlertsRequest();
    $request->networkId = 'officiis';

    $response = $sdk->health->getNetworkHealthAlerts($request);

    if ($response->getNetworkHealthAlerts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
