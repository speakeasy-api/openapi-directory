# firewalledServices

### Available Operations

* [getNetworkFirewalledService](#getnetworkfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [getNetworkFirewalledServices](#getnetworkfirewalledservices) - List the appliance services and their accessibility rules

## getNetworkFirewalledService

Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFirewalledServiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFirewalledServiceRequest();
    $request->networkId = 'iusto';
    $request->service = 'voluptate';

    $response = $sdk->firewalledServices->getNetworkFirewalledService($request);

    if ($response->getNetworkFirewalledService200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFirewalledServices

List the appliance services and their accessibility rules

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFirewalledServicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFirewalledServicesRequest();
    $request->networkId = 'dolorum';

    $response = $sdk->firewalledServices->getNetworkFirewalledServices($request);

    if ($response->getNetworkFirewalledServices200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
