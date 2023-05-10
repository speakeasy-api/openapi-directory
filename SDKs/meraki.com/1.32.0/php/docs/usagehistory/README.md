# usageHistory

### Available Operations

* [getNetworkApplianceUplinksUsageHistory](#getnetworkapplianceuplinksusagehistory) - Get the sent and received bytes for each uplink of a network.
* [getNetworkClientUsageHistory](#getnetworkclientusagehistory) - Return the client's daily usage history
* [getNetworkWirelessUsageHistory](#getnetworkwirelessusagehistory) - Return AP usage over time for a device or network client

## getNetworkApplianceUplinksUsageHistory

Get the sent and received bytes for each uplink of a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceUplinksUsageHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceUplinksUsageHistoryRequest();
    $request->networkId = 'ad';
    $request->resolution = 228056;
    $request->t0 = 'error';
    $request->t1 = 'magnam';
    $request->timespan = 5063.52;

    $response = $sdk->usageHistory->getNetworkApplianceUplinksUsageHistory($request);

    if ($response->getNetworkApplianceUplinksUsageHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientUsageHistory

Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientUsageHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientUsageHistoryRequest();
    $request->clientId = 'sequi';
    $request->networkId = 'maiores';

    $response = $sdk->usageHistory->getNetworkClientUsageHistory($request);

    if ($response->getNetworkClientUsageHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessUsageHistory

Return AP usage over time for a device or network client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessUsageHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessUsageHistoryBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessUsageHistoryRequest();
    $request->apTag = 'reprehenderit';
    $request->autoResolution = false;
    $request->band = GetNetworkWirelessUsageHistoryBandEnum::TWO4;
    $request->clientId = 'blanditiis';
    $request->deviceSerial = 'eveniet';
    $request->networkId = 'necessitatibus';
    $request->resolution = 963770;
    $request->ssid = 770755;
    $request->t0 = 'quisquam';
    $request->t1 = 'distinctio';
    $request->timespan = 4281.09;

    $response = $sdk->usageHistory->getNetworkWirelessUsageHistory($request);

    if ($response->getNetworkWirelessUsageHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
