# l3FirewallRules

### Available Operations

* [getNetworkApplianceFirewallL3FirewallRules](#getnetworkappliancefirewalll3firewallrules) - Return the L3 firewall rules for an MX network
* [getNetworkWirelessSsidFirewallL3FirewallRules](#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [updateNetworkApplianceFirewallL3FirewallRules](#updatenetworkappliancefirewalll3firewallrules) - Update the L3 firewall rules of an MX network
* [updateNetworkWirelessSsidFirewallL3FirewallRules](#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network

## getNetworkApplianceFirewallL3FirewallRules

Return the L3 firewall rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallL3FirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallL3FirewallRulesRequest();
    $request->networkId = 'ipsam';

    $response = $sdk->l3FirewallRules->getNetworkApplianceFirewallL3FirewallRules($request);

    if ($response->getNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidFirewallL3FirewallRules

Return the L3 firewall rules for an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidFirewallL3FirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidFirewallL3FirewallRulesRequest();
    $request->networkId = 'rem';
    $request->number = 'molestias';

    $response = $sdk->l3FirewallRules->getNetworkWirelessSsidFirewallL3FirewallRules($request);

    if ($response->getNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallL3FirewallRules

Update the L3 firewall rules of an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallL3FirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallL3FirewallRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules(),
    ];
    $request->requestBody->syslogDefaultRule = false;
    $request->networkId = 'necessitatibus';

    $response = $sdk->l3FirewallRules->updateNetworkApplianceFirewallL3FirewallRules($request);

    if ($response->updateNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidFirewallL3FirewallRules

Update the L3 firewall rules of an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody();
    $request->requestBody->allowLanAccess = false;
    $request->requestBody->rules = [
        new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules(),
        new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules(),
        new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules(),
    ];
    $request->networkId = 'in';
    $request->number = 'aliquid';

    $response = $sdk->l3FirewallRules->updateNetworkWirelessSsidFirewallL3FirewallRules($request);

    if ($response->updateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
