# vpn

### Available Operations

* [getNetworkApplianceVpnBgp](#getnetworkappliancevpnbgp) - Return a Hub BGP Configuration
* [getNetworkApplianceVpnSiteToSiteVpn](#getnetworkappliancevpnsitetositevpn) - Return the site-to-site VPN settings of a network
* [getNetworkWirelessSsidVpn](#getnetworkwirelessssidvpn) - List the VPN settings for the SSID.
* [getOrganizationApplianceVpnStats](#getorganizationappliancevpnstats) - Show VPN history stat for networks in an organization
* [getOrganizationApplianceVpnStatuses](#getorganizationappliancevpnstatuses) - Show VPN status for networks in an organization
* [getOrganizationApplianceVPNThirdPartyVPNPeers](#getorganizationappliancevpnthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [getOrganizationApplianceVpnVpnFirewallRules](#getorganizationappliancevpnvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [updateNetworkApplianceVpnBgp](#updatenetworkappliancevpnbgp) - Update a Hub BGP Configuration
* [updateNetworkApplianceVpnSiteToSiteVpn](#updatenetworkappliancevpnsitetositevpn) - Update the site-to-site VPN settings of a network
* [updateNetworkWirelessSsidVpn](#updatenetworkwirelessssidvpn) - Update the VPN settings for the SSID
* [updateOrganizationApplianceVPNThirdPartyVPNPeers](#updateorganizationappliancevpnthirdpartyvpnpeers) - Update the third party VPN peers for an organization
* [updateOrganizationApplianceVpnVpnFirewallRules](#updateorganizationappliancevpnvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN

## getNetworkApplianceVpnBgp

Return a Hub BGP Configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceVpnBgpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceVpnBgpRequest();
    $request->networkId = 'culpa';

    $response = $sdk->vpn->getNetworkApplianceVpnBgp($request);

    if ($response->getNetworkApplianceVpnBgp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceVpnSiteToSiteVpn

Return the site-to-site VPN settings of a network. Only valid for MX networks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceVpnSiteToSiteVpnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceVpnSiteToSiteVpnRequest();
    $request->networkId = 'aut';

    $response = $sdk->vpn->getNetworkApplianceVpnSiteToSiteVpn($request);

    if ($response->getNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidVpn

List the VPN settings for the SSID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidVpnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidVpnRequest();
    $request->networkId = 'animi';
    $request->number = 'distinctio';

    $response = $sdk->vpn->getNetworkWirelessSsidVpn($request);

    if ($response->getNetworkWirelessSsidVpn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApplianceVpnStats

Show VPN history stat for networks in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceVpnStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceVpnStatsRequest();
    $request->endingBefore = 'itaque';
    $request->networkIds = [
        'totam',
        'repudiandae',
    ];
    $request->organizationId = 'expedita';
    $request->perPage = 242120;
    $request->startingAfter = 'nulla';
    $request->t0 = 'quis';
    $request->t1 = 'labore';
    $request->timespan = 7473.36;

    $response = $sdk->vpn->getOrganizationApplianceVpnStats($request);

    if ($response->getOrganizationApplianceVpnStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApplianceVpnStatuses

Show VPN status for networks in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceVpnStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceVpnStatusesRequest();
    $request->endingBefore = 'animi';
    $request->networkIds = [
        'eligendi',
    ];
    $request->organizationId = 'facilis';
    $request->perPage = 198870;
    $request->startingAfter = 'laborum';

    $response = $sdk->vpn->getOrganizationApplianceVpnStatuses($request);

    if ($response->getOrganizationApplianceVpnStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApplianceVPNThirdPartyVPNPeers

Return the third party VPN peers for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceVPNThirdPartyVPNPeersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceVPNThirdPartyVPNPeersRequest();
    $request->organizationId = 'quibusdam';

    $response = $sdk->vpn->getOrganizationApplianceVPNThirdPartyVPNPeers($request);

    if ($response->getOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->organizationId = 'aliquam';

    $response = $sdk->vpn->getOrganizationApplianceVpnVpnFirewallRules($request);

    if ($response->getOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceVpnBgp

Update a Hub BGP Configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnBgpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnBgpRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnBgpRequestBodyNeighbors;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceVpnBgpRequest();
    $request->requestBody = new UpdateNetworkApplianceVpnBgpRequestBody();
    $request->requestBody->asNumber = 574121;
    $request->requestBody->enabled = false;
    $request->requestBody->ibgpHoldTimer = 712770;
    $request->requestBody->neighbors = [
        new UpdateNetworkApplianceVpnBgpRequestBodyNeighbors(),
        new UpdateNetworkApplianceVpnBgpRequestBodyNeighbors(),
        new UpdateNetworkApplianceVpnBgpRequestBodyNeighbors(),
    ];
    $request->networkId = 'saepe';

    $response = $sdk->vpn->updateNetworkApplianceVpnBgp($request);

    if ($response->updateNetworkApplianceVpnBgp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceVpnSiteToSiteVpn

Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnSiteToSiteVpnRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceVpnSiteToSiteVpnRequest();
    $request->requestBody = new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody();
    $request->requestBody->hubs = [
        new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs(),
        new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs(),
    ];
    $request->requestBody->mode = UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum::SPOKE;
    $request->requestBody->subnets = [
        new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets(),
    ];
    $request->networkId = 'totam';

    $response = $sdk->vpn->updateNetworkApplianceVpnSiteToSiteVpn($request);

    if ($response->updateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidVpn

Update the VPN settings for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBodyConcentrator;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBodyFailover;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidVpnRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidVpnRequestBody();
    $request->requestBody->concentrator = new UpdateNetworkWirelessSsidVpnRequestBodyConcentrator();
    $request->requestBody->concentrator->networkId = 'harum';
    $request->requestBody->concentrator->vlanId = 132445;
    $request->requestBody->failover = new UpdateNetworkWirelessSsidVpnRequestBodyFailover();
    $request->requestBody->failover->heartbeatInterval = 371271;
    $request->requestBody->failover->idleTimeout = 892340;
    $request->requestBody->failover->requestIp = 'rem';
    $request->requestBody->splitTunnel = new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel();
    $request->requestBody->splitTunnel->enabled = false;
    $request->requestBody->splitTunnel->rules = [
        new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules(),
        new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules(),
    ];
    $request->networkId = 'maiores';
    $request->number = 'ea';

    $response = $sdk->vpn->updateNetworkWirelessSsidVpn($request);

    if ($response->updateNetworkWirelessSsidVpn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationApplianceVPNThirdPartyVPNPeers

Update the third party VPN peers for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest();
    $request->requestBody = new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBody();
    $request->requestBody->peers = [
        new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers(),
        new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers(),
    ];
    $request->organizationId = 'corrupti';

    $response = $sdk->vpn->updateOrganizationApplianceVPNThirdPartyVPNPeers($request);

    if ($response->updateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject !== null) {
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
    ];
    $request->requestBody->syslogDefaultRule = false;
    $request->organizationId = 'dolorem';

    $response = $sdk->vpn->updateOrganizationApplianceVpnVpnFirewallRules($request);

    if ($response->updateOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
