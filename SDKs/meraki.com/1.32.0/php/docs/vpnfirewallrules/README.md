# vpnFirewallRules

### Available Operations

* [getOrganizationApplianceVpnVpnFirewallRules](#getorganizationappliancevpnvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [updateOrganizationApplianceVpnVpnFirewallRules](#updateorganizationappliancevpnvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN

## getOrganizationApplianceVpnVpnFirewallRules

Return the firewall rules for an organization's site-to-site VPN

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceVpnVpnFirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceVpnVpnFirewallRulesRequest();
    $request->organizationId = 'odit';

    $response = $sdk->vpnFirewallRules->getOrganizationApplianceVpnVpnFirewallRules($request);

    if ($response->getOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationApplianceVpnVpnFirewallRules

Update the firewall rules of an organization's site-to-site VPN

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVpnVpnFirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationApplianceVpnVpnFirewallRulesRequest();
    $request->requestBody = new UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules(),
        new UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules(),
    ];
    $request->requestBody->syslogDefaultRule = false;
    $request->organizationId = 'voluptas';

    $response = $sdk->vpnFirewallRules->updateOrganizationApplianceVpnVpnFirewallRules($request);

    if ($response->updateOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
