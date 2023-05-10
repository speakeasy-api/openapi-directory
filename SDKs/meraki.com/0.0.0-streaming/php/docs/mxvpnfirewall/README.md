# mxVPNFirewall

### Available Operations

* [getOrganizationVpnFirewallRules](#getorganizationvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [updateOrganizationVpnFirewallRules](#updateorganizationvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN

## getOrganizationVpnFirewallRules

Return the firewall rules for an organization's site-to-site VPN

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationVpnFirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationVpnFirewallRulesRequest();
    $request->organizationId = 'odio';

    $response = $sdk->mxVPNFirewall->getOrganizationVpnFirewallRules($request);

    if ($response->getOrganizationVpnFirewallRules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationVpnFirewallRules

Update the firewall rules of an organization's site-to-site VPN

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationVpnFirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationVpnFirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationVpnFirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationVpnFirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationVpnFirewallRulesRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationVpnFirewallRulesRequest();
    $request->requestBody = new UpdateOrganizationVpnFirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateOrganizationVpnFirewallRulesRequestBodyRules(),
        new UpdateOrganizationVpnFirewallRulesRequestBodyRules(),
        new UpdateOrganizationVpnFirewallRulesRequestBodyRules(),
    ];
    $request->requestBody->syslogDefaultRule = false;
    $request->organizationId = 'facilis';

    $response = $sdk->mxVPNFirewall->updateOrganizationVpnFirewallRules($request);

    if ($response->updateOrganizationVpnFirewallRules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
