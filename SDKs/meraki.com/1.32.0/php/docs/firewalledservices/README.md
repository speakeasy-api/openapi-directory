# firewalledServices

### Available Operations

* [getNetworkApplianceFirewallFirewalledService](#getnetworkappliancefirewallfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [getNetworkApplianceFirewallFirewalledServices](#getnetworkappliancefirewallfirewalledservices) - List the appliance services and their accessibility rules
* [updateNetworkApplianceFirewallFirewalledService](#updatenetworkappliancefirewallfirewalledservice) - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

## getNetworkApplianceFirewallFirewalledService

Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallFirewalledServiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallFirewalledServiceRequest();
    $request->networkId = 'repudiandae';
    $request->service = 'ab';

    $response = $sdk->firewalledServices->getNetworkApplianceFirewallFirewalledService($request);

    if ($response->getNetworkApplianceFirewallFirewalledService200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallFirewalledServices

List the appliance services and their accessibility rules

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallFirewalledServicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallFirewalledServicesRequest();
    $request->networkId = 'praesentium';

    $response = $sdk->firewalledServices->getNetworkApplianceFirewallFirewalledServices($request);

    if ($response->getNetworkApplianceFirewallFirewalledServices200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallFirewalledService

Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallFirewalledServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallFirewalledServiceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallFirewalledServiceRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallFirewalledServiceRequestBody();
    $request->requestBody->access = UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum::RESTRICTED;
    $request->requestBody->allowedIps = [
        'iusto',
        'sunt',
    ];
    $request->networkId = 'tenetur';
    $request->service = 'occaecati';

    $response = $sdk->firewalledServices->updateNetworkApplianceFirewallFirewalledService($request);

    if ($response->updateNetworkApplianceFirewallFirewalledService200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
