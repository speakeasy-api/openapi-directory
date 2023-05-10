# firewall

### Available Operations

* [getNetworkApplianceFirewallCellularFirewallRules](#getnetworkappliancefirewallcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [getNetworkApplianceFirewallFirewalledService](#getnetworkappliancefirewallfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [getNetworkApplianceFirewallFirewalledServices](#getnetworkappliancefirewallfirewalledservices) - List the appliance services and their accessibility rules
* [getNetworkApplianceFirewallInboundCellularFirewallRules](#getnetworkappliancefirewallinboundcellularfirewallrules) - Return the inbound cellular firewall rules for an MX network
* [getNetworkApplianceFirewallInboundFirewallRules](#getnetworkappliancefirewallinboundfirewallrules) - Return the inbound firewall rules for an MX network
* [getNetworkApplianceFirewallL3FirewallRules](#getnetworkappliancefirewalll3firewallrules) - Return the L3 firewall rules for an MX network
* [getNetworkApplianceFirewallL7FirewallRules](#getnetworkappliancefirewalll7firewallrules) - List the MX L7 firewall rules for an MX network
* [getNetworkApplianceFirewallL7FirewallRulesApplicationCategories](#getnetworkappliancefirewalll7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network
* [getNetworkApplianceFirewallOneToManyNatRules](#getnetworkappliancefirewallonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [getNetworkApplianceFirewallOneToOneNatRules](#getnetworkappliancefirewallonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [getNetworkApplianceFirewallPortForwardingRules](#getnetworkappliancefirewallportforwardingrules) - Return the port forwarding rules for an MX network
* [getNetworkApplianceFirewallSettings](#getnetworkappliancefirewallsettings) - Return the firewall settings for this network
* [getNetworkWirelessSsidFirewallL3FirewallRules](#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [getNetworkWirelessSsidFirewallL7FirewallRules](#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [updateNetworkApplianceFirewallCellularFirewallRules](#updatenetworkappliancefirewallcellularfirewallrules) - Update the cellular firewall rules of an MX network
* [updateNetworkApplianceFirewallFirewalledService](#updatenetworkappliancefirewallfirewalledservice) - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* [updateNetworkApplianceFirewallInboundCellularFirewallRules](#updatenetworkappliancefirewallinboundcellularfirewallrules) - Update the inbound cellular firewall rules of an MX network
* [updateNetworkApplianceFirewallInboundFirewallRules](#updatenetworkappliancefirewallinboundfirewallrules) - Update the inbound firewall rules of an MX network
* [updateNetworkApplianceFirewallL3FirewallRules](#updatenetworkappliancefirewalll3firewallrules) - Update the L3 firewall rules of an MX network
* [updateNetworkApplianceFirewallL7FirewallRules](#updatenetworkappliancefirewalll7firewallrules) - Update the MX L7 firewall rules for an MX network
* [updateNetworkApplianceFirewallOneToManyNatRules](#updatenetworkappliancefirewallonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network
* [updateNetworkApplianceFirewallOneToOneNatRules](#updatenetworkappliancefirewallonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network
* [updateNetworkApplianceFirewallPortForwardingRules](#updatenetworkappliancefirewallportforwardingrules) - Update the port forwarding rules for an MX network
* [updateNetworkApplianceFirewallSettings](#updatenetworkappliancefirewallsettings) - Update the firewall settings for this network
* [updateNetworkWirelessSsidFirewallL3FirewallRules](#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network
* [updateNetworkWirelessSsidFirewallL7FirewallRules](#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network

## getNetworkApplianceFirewallCellularFirewallRules

Return the cellular firewall rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallCellularFirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallCellularFirewallRulesRequest();
    $request->networkId = 'ipsa';

    $response = $sdk->firewall->getNetworkApplianceFirewallCellularFirewallRules($request);

    if ($response->getNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->networkId = 'quo';
    $request->service = 'libero';

    $response = $sdk->firewall->getNetworkApplianceFirewallFirewalledService($request);

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
    $request->networkId = 'eaque';

    $response = $sdk->firewall->getNetworkApplianceFirewallFirewalledServices($request);

    if ($response->getNetworkApplianceFirewallFirewalledServices200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallInboundCellularFirewallRules

Return the inbound cellular firewall rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest();
    $request->networkId = 'animi';

    $response = $sdk->firewall->getNetworkApplianceFirewallInboundCellularFirewallRules($request);

    if ($response->getNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallInboundFirewallRules

Return the inbound firewall rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallInboundFirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallInboundFirewallRulesRequest();
    $request->networkId = 'doloremque';

    $response = $sdk->firewall->getNetworkApplianceFirewallInboundFirewallRules($request);

    if ($response->getNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->networkId = 'consequatur';

    $response = $sdk->firewall->getNetworkApplianceFirewallL3FirewallRules($request);

    if ($response->getNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallL7FirewallRules

List the MX L7 firewall rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallL7FirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallL7FirewallRulesRequest();
    $request->networkId = 'perferendis';

    $response = $sdk->firewall->getNetworkApplianceFirewallL7FirewallRules($request);

    if ($response->getNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallL7FirewallRulesApplicationCategories

Return the L7 firewall application categories and their associated applications for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest();
    $request->networkId = 'dolor';

    $response = $sdk->firewall->getNetworkApplianceFirewallL7FirewallRulesApplicationCategories($request);

    if ($response->getNetworkApplianceFirewallL7FirewallRulesApplicationCategories200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallOneToManyNatRules

Return the 1:Many NAT mapping rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallOneToManyNatRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallOneToManyNatRulesRequest();
    $request->networkId = 'earum';

    $response = $sdk->firewall->getNetworkApplianceFirewallOneToManyNatRules($request);

    if ($response->getNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallOneToOneNatRules

Return the 1:1 NAT mapping rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallOneToOneNatRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallOneToOneNatRulesRequest();
    $request->networkId = 'facilis';

    $response = $sdk->firewall->getNetworkApplianceFirewallOneToOneNatRules($request);

    if ($response->getNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject !== null) {
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
    $request->networkId = 'eos';

    $response = $sdk->firewall->getNetworkApplianceFirewallPortForwardingRules($request);

    if ($response->getNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallSettings

Return the firewall settings for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallSettingsRequest();
    $request->networkId = 'sed';

    $response = $sdk->firewall->getNetworkApplianceFirewallSettings($request);

    if ($response->getNetworkApplianceFirewallSettings200ApplicationJSONObject !== null) {
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
    $request->networkId = 'fugiat';
    $request->number = 'sint';

    $response = $sdk->firewall->getNetworkWirelessSsidFirewallL3FirewallRules($request);

    if ($response->getNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidFirewallL7FirewallRules

Return the L7 firewall rules for an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidFirewallL7FirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidFirewallL7FirewallRulesRequest();
    $request->networkId = 'tempore';
    $request->number = 'dolorem';

    $response = $sdk->firewall->getNetworkWirelessSsidFirewallL7FirewallRules($request);

    if ($response->getNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallCellularFirewallRules

Update the cellular firewall rules of an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallCellularFirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallCellularFirewallRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules(),
    ];
    $request->networkId = 'in';

    $response = $sdk->firewall->updateNetworkApplianceFirewallCellularFirewallRules($request);

    if ($response->updateNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject !== null) {
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
    $request->requestBody->access = UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum::BLOCKED;
    $request->requestBody->allowedIps = [
        'excepturi',
        'aliquam',
        'voluptatibus',
        'fuga',
    ];
    $request->networkId = 'deserunt';
    $request->service = 'iure';

    $response = $sdk->firewall->updateNetworkApplianceFirewallFirewalledService($request);

    if ($response->updateNetworkApplianceFirewallFirewalledService200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallInboundCellularFirewallRules

Update the inbound cellular firewall rules of an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules(),
    ];
    $request->networkId = 'quasi';

    $response = $sdk->firewall->updateNetworkApplianceFirewallInboundCellularFirewallRules($request);

    if ($response->updateNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallInboundFirewallRules

Update the inbound firewall rules of an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundFirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallInboundFirewallRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules(),
    ];
    $request->requestBody->syslogDefaultRule = false;
    $request->networkId = 'corporis';

    $response = $sdk->firewall->updateNetworkApplianceFirewallInboundFirewallRules($request);

    if ($response->updateNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject !== null) {
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
    $request->networkId = 'quibusdam';

    $response = $sdk->firewall->updateNetworkApplianceFirewallL3FirewallRules($request);

    if ($response->updateNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallL7FirewallRules

Update the MX L7 firewall rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallL7FirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallL7FirewallRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules(),
    ];
    $request->networkId = 'voluptatibus';

    $response = $sdk->firewall->updateNetworkApplianceFirewallL7FirewallRules($request);

    if ($response->updateNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallOneToManyNatRules

Set the 1:Many NAT mapping rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToManyNatRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallOneToManyNatRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules(),
    ];
    $request->networkId = 'quibusdam';

    $response = $sdk->firewall->updateNetworkApplianceFirewallOneToManyNatRules($request);

    if ($response->updateNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallOneToOneNatRules

Set the 1:1 NAT mapping rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToOneNatRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallOneToOneNatRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules(),
    ];
    $request->networkId = 'consequuntur';

    $response = $sdk->firewall->updateNetworkApplianceFirewallOneToOneNatRules($request);

    if ($response->updateNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject !== null) {
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
    ];
    $request->networkId = 'nostrum';

    $response = $sdk->firewall->updateNetworkApplianceFirewallPortForwardingRules($request);

    if ($response->updateNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallSettings

Update the firewall settings for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtection;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuard;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuardModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallSettingsRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallSettingsRequestBody();
    $request->requestBody->spoofingProtection = new UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtection();
    $request->requestBody->spoofingProtection->ipSourceGuard = new UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuard();
    $request->requestBody->spoofingProtection->ipSourceGuard->mode = UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuardModeEnum::BLOCK;
    $request->networkId = 'repellendus';

    $response = $sdk->firewall->updateNetworkApplianceFirewallSettings($request);

    if ($response->updateNetworkApplianceFirewallSettings200ApplicationJSONObject !== null) {
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
    ];
    $request->networkId = 'quos';
    $request->number = 'pariatur';

    $response = $sdk->firewall->updateNetworkWirelessSsidFirewallL3FirewallRules($request);

    if ($response->updateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidFirewallL7FirewallRules

Update the L7 firewall rules of an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules(),
        new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules(),
        new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules(),
        new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules(),
    ];
    $request->networkId = 'sequi';
    $request->number = 'quo';

    $response = $sdk->firewall->updateNetworkWirelessSsidFirewallL7FirewallRules($request);

    if ($response->updateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
