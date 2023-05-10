# switchPorts

### Available Operations

* [getDeviceSwitchPortStatuses](#getdeviceswitchportstatuses) - Return the status for all the ports of a switch
* [getDeviceSwitchPortStatusesPackets](#getdeviceswitchportstatusespackets) - Return the packet counters for all the ports of a switch

## getDeviceSwitchPortStatuses

Return the status for all the ports of a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchPortStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchPortStatusesRequest();
    $request->serial = 'aspernatur';
    $request->t0 = 'ullam';
    $request->timespan = 968.04;

    $response = $sdk->switchPorts->getDeviceSwitchPortStatuses($request);

    if ($response->getDeviceSwitchPortStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchPortStatusesPackets

Return the packet counters for all the ports of a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchPortStatusesPacketsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchPortStatusesPacketsRequest();
    $request->serial = 'animi';
    $request->t0 = 'nostrum';
    $request->timespan = 6523.09;

    $response = $sdk->switchPorts->getDeviceSwitchPortStatusesPackets($request);

    if ($response->getDeviceSwitchPortStatusesPackets200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
