# schedules

### Available Operations

* [getNetworkCameraSchedules](#getnetworkcameraschedules) - Returns a list of all camera recording schedules.
* [getNetworkWirelessSsidSchedules](#getnetworkwirelessssidschedules) - List the outage schedule for the SSID
* [updateNetworkWirelessSsidSchedules](#updatenetworkwirelessssidschedules) - Update the outage schedule for the SSID

## getNetworkCameraSchedules

Returns a list of all camera recording schedules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCameraSchedulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCameraSchedulesRequest();
    $request->networkId = 'in';

    $response = $sdk->schedules->getNetworkCameraSchedules($request);

    if ($response->getNetworkCameraSchedules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidSchedules

List the outage schedule for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidSchedulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidSchedulesRequest();
    $request->networkId = 'magnam';
    $request->number = 'repellendus';

    $response = $sdk->schedules->getNetworkWirelessSsidSchedules($request);

    if ($response->getNetworkWirelessSsidSchedules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidSchedules

Update the outage schedule for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSchedulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSchedulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSchedulesRequestBodyRanges;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidSchedulesRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidSchedulesRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->ranges = [
        new UpdateNetworkWirelessSsidSchedulesRequestBodyRanges(),
        new UpdateNetworkWirelessSsidSchedulesRequestBodyRanges(),
        new UpdateNetworkWirelessSsidSchedulesRequestBodyRanges(),
        new UpdateNetworkWirelessSsidSchedulesRequestBodyRanges(),
    ];
    $request->requestBody->rangesInSeconds = [
        new UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds(),
        new UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds(),
    ];
    $request->networkId = 'a';
    $request->number = 'voluptates';

    $response = $sdk->schedules->updateNetworkWirelessSsidSchedules($request);

    if ($response->updateNetworkWirelessSsidSchedules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
