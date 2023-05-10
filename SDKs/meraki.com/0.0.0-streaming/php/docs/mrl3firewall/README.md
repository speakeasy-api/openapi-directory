# mrL3Firewall

### Available Operations

* [getNetworkSsidL3FirewallRules](#getnetworkssidl3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [updateNetworkSsidL3FirewallRules](#updatenetworkssidl3firewallrules) - Update the L3 firewall rules of an SSID on an MR network

## getNetworkSsidL3FirewallRules

Return the L3 firewall rules for an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSsidL3FirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSsidL3FirewallRulesRequest();
    $request->networkId = 'ipsum';
    $request->number = 'veritatis';

    $response = $sdk->mrL3Firewall->getNetworkSsidL3FirewallRules($request);

    if ($response->getNetworkSsidL3FirewallRules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSsidL3FirewallRules

Update the L3 firewall rules of an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSsidL3FirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSsidL3FirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSsidL3FirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSsidL3FirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSsidL3FirewallRulesRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSsidL3FirewallRulesRequest();
    $request->requestBody = new UpdateNetworkSsidL3FirewallRulesRequestBody();
    $request->requestBody->allowLanAccess = false;
    $request->requestBody->rules = [
        new UpdateNetworkSsidL3FirewallRulesRequestBodyRules(),
        new UpdateNetworkSsidL3FirewallRulesRequestBodyRules(),
        new UpdateNetworkSsidL3FirewallRulesRequestBodyRules(),
    ];
    $request->networkId = 'quos';
    $request->number = 'tempore';

    $response = $sdk->mrL3Firewall->updateNetworkSsidL3FirewallRules($request);

    if ($response->updateNetworkSsidL3FirewallRules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
