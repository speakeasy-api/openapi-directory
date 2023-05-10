# portForwardingRules

### Available Operations

* [getDeviceCellularGatewayPortForwardingRules](#getdevicecellulargatewayportforwardingrules) - Returns the port forwarding rules for a single MG.
* [getNetworkApplianceFirewallPortForwardingRules](#getnetworkappliancefirewallportforwardingrules) - Return the port forwarding rules for an MX network
* [updateDeviceCellularGatewayPortForwardingRules](#updatedevicecellulargatewayportforwardingrules) - Updates the port forwarding rules for a single MG.
* [updateNetworkApplianceFirewallPortForwardingRules](#updatenetworkappliancefirewallportforwardingrules) - Update the port forwarding rules for an MX network

## getDeviceCellularGatewayPortForwardingRules

Returns the port forwarding rules for a single MG.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCellularGatewayPortForwardingRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCellularGatewayPortForwardingRulesRequest();
    $request->serial = 'vitae';

    $response = $sdk->portForwardingRules->getDeviceCellularGatewayPortForwardingRules($request);

    if ($response->getDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallPortForwardingRules

Return the port forwarding rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallPortForwardingRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallPortForwardingRulesRequest();
    $request->networkId = 'fuga';

    $response = $sdk->portForwardingRules->getNetworkApplianceFirewallPortForwardingRules($request);

    if ($response->getNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCellularGatewayPortForwardingRules

Updates the port forwarding rules for a single MG.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayPortForwardingRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayPortForwardingRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCellularGatewayPortForwardingRulesRequest();
    $request->requestBody = new UpdateDeviceCellularGatewayPortForwardingRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules(),
        new UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules(),
    ];
    $request->serial = 'harum';

    $response = $sdk->portForwardingRules->updateDeviceCellularGatewayPortForwardingRules($request);

    if ($response->updateDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallPortForwardingRules

Update the port forwarding rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallPortForwardingRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallPortForwardingRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules(),
    ];
    $request->networkId = 'alias';

    $response = $sdk->portForwardingRules->updateNetworkApplianceFirewallPortForwardingRules($request);

    if ($response->updateNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
