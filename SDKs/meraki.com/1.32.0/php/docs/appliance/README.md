# appliance

### Available Operations

* [createDeviceApplianceVmxAuthenticationToken](#createdeviceappliancevmxauthenticationtoken) - Generate a new vMX authentication token
* [createNetworkAppliancePrefixesDelegatedStatic](#createnetworkapplianceprefixesdelegatedstatic) - Add a static delegated prefix from a network
* [createNetworkApplianceStaticRoute](#createnetworkappliancestaticroute) - Add a static route for an MX or teleworker network
* [createNetworkApplianceTrafficShapingCustomPerformanceClass](#createnetworkappliancetrafficshapingcustomperformanceclass) - Add a custom performance class for an MX network
* [createNetworkApplianceVlan](#createnetworkappliancevlan) - Add a VLAN
* [deleteNetworkAppliancePrefixesDelegatedStatic](#deletenetworkapplianceprefixesdelegatedstatic) - Delete a static delegated prefix from a network
* [deleteNetworkApplianceStaticRoute](#deletenetworkappliancestaticroute) - Delete a static route from an MX or teleworker network
* [deleteNetworkApplianceTrafficShapingCustomPerformanceClass](#deletenetworkappliancetrafficshapingcustomperformanceclass) - Delete a custom performance class from an MX network
* [deleteNetworkApplianceVlan](#deletenetworkappliancevlan) - Delete a VLAN from a network
* [getDeviceApplianceDhcpSubnets](#getdeviceappliancedhcpsubnets) - Return the DHCP subnet information for an appliance
* [getDeviceAppliancePerformance](#getdeviceapplianceperformance) - Return the performance score for a single MX
* [getDeviceAppliancePrefixesDelegated](#getdeviceapplianceprefixesdelegated) - Return current delegated IPv6 prefixes on an appliance.
* [getDeviceAppliancePrefixesDelegatedVlanAssignments](#getdeviceapplianceprefixesdelegatedvlanassignments) - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* [getDeviceApplianceUplinksSettings](#getdeviceapplianceuplinkssettings) - Return the uplink settings for an MX appliance
* [getNetworkApplianceClientSecurityEvents](#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [getNetworkApplianceConnectivityMonitoringDestinations](#getnetworkapplianceconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MX network
* [getNetworkApplianceContentFiltering](#getnetworkappliancecontentfiltering) - Return the content filtering settings for an MX network
* [getNetworkApplianceContentFilteringCategories](#getnetworkappliancecontentfilteringcategories) - List all available content filtering categories for an MX network
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
* [getNetworkAppliancePort](#getnetworkapplianceport) - Return per-port VLAN settings for a single MX port.
* [getNetworkAppliancePorts](#getnetworkapplianceports) - List per-port VLAN settings for all ports of a MX.
* [getNetworkAppliancePrefixesDelegatedStatic](#getnetworkapplianceprefixesdelegatedstatic) - Return a static delegated prefix from a network
* [getNetworkAppliancePrefixesDelegatedStatics](#getnetworkapplianceprefixesdelegatedstatics) - List static delegated prefixes for a network
* [getNetworkApplianceSecurityEvents](#getnetworkappliancesecurityevents) - List the security events for a network
* [getNetworkApplianceSecurityIntrusion](#getnetworkappliancesecurityintrusion) - Returns all supported intrusion settings for an MX network
* [getNetworkApplianceSecurityMalware](#getnetworkappliancesecuritymalware) - Returns all supported malware settings for an MX network
* [getNetworkApplianceSettings](#getnetworkappliancesettings) - Return the appliance settings for a network
* [getNetworkApplianceSingleLan](#getnetworkappliancesinglelan) - Return single LAN configuration
* [getNetworkApplianceSsid](#getnetworkappliancessid) - Return a single MX SSID
* [getNetworkApplianceSsids](#getnetworkappliancessids) - List the MX SSIDs in a network
* [getNetworkApplianceStaticRoute](#getnetworkappliancestaticroute) - Return a static route for an MX or teleworker network
* [getNetworkApplianceStaticRoutes](#getnetworkappliancestaticroutes) - List the static routes for an MX or teleworker network
* [getNetworkApplianceTrafficShaping](#getnetworkappliancetrafficshaping) - Display the traffic shaping settings for an MX network
* [getNetworkApplianceTrafficShapingCustomPerformanceClass](#getnetworkappliancetrafficshapingcustomperformanceclass) - Return a custom performance class for an MX network
* [getNetworkApplianceTrafficShapingCustomPerformanceClasses](#getnetworkappliancetrafficshapingcustomperformanceclasses) - List all custom performance classes for an MX network
* [getNetworkApplianceTrafficShapingRules](#getnetworkappliancetrafficshapingrules) - Display the traffic shaping settings rules for an MX network
* [getNetworkApplianceTrafficShapingUplinkBandwidth](#getnetworkappliancetrafficshapinguplinkbandwidth) - Returns the uplink bandwidth limits for your MX network
* [getNetworkApplianceTrafficShapingUplinkSelection](#getnetworkappliancetrafficshapinguplinkselection) - Show uplink selection settings for an MX network
* [getNetworkApplianceUplinksUsageHistory](#getnetworkapplianceuplinksusagehistory) - Get the sent and received bytes for each uplink of a network.
* [getNetworkApplianceVlan](#getnetworkappliancevlan) - Return a VLAN
* [getNetworkApplianceVlans](#getnetworkappliancevlans) - List the VLANs for an MX network
* [getNetworkApplianceVlansSettings](#getnetworkappliancevlanssettings) - Returns the enabled status of VLANs for the network
* [getNetworkApplianceVpnBgp](#getnetworkappliancevpnbgp) - Return a Hub BGP Configuration
* [getNetworkApplianceVpnSiteToSiteVpn](#getnetworkappliancevpnsitetositevpn) - Return the site-to-site VPN settings of a network
* [getNetworkApplianceWarmSpare](#getnetworkappliancewarmspare) - Return MX warm spare settings
* [getOrganizationApplianceSecurityEvents](#getorganizationappliancesecurityevents) - List the security events for an organization
* [getOrganizationApplianceSecurityIntrusion](#getorganizationappliancesecurityintrusion) - Returns all supported intrusion settings for an organization
* [getOrganizationApplianceUplinkStatuses](#getorganizationapplianceuplinkstatuses) - List the uplink status of every Meraki MX and Z series appliances in the organization
* [getOrganizationApplianceVpnStats](#getorganizationappliancevpnstats) - Show VPN history stat for networks in an organization
* [getOrganizationApplianceVpnStatuses](#getorganizationappliancevpnstatuses) - Show VPN status for networks in an organization
* [getOrganizationApplianceVPNThirdPartyVPNPeers](#getorganizationappliancevpnthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [getOrganizationApplianceVpnVpnFirewallRules](#getorganizationappliancevpnvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [swapNetworkApplianceWarmSpare](#swapnetworkappliancewarmspare) - Swap MX primary and warm spare appliances
* [updateDeviceApplianceUplinksSettings](#updatedeviceapplianceuplinkssettings) - Update the uplink settings for an MX appliance
* [updateNetworkApplianceConnectivityMonitoringDestinations](#updatenetworkapplianceconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MX network
* [updateNetworkApplianceContentFiltering](#updatenetworkappliancecontentfiltering) - Update the content filtering settings for an MX network
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
* [updateNetworkAppliancePort](#updatenetworkapplianceport) - Update the per-port VLAN settings for a single MX port.
* [updateNetworkAppliancePrefixesDelegatedStatic](#updatenetworkapplianceprefixesdelegatedstatic) - Update a static delegated prefix from a network
* [updateNetworkApplianceSecurityIntrusion](#updatenetworkappliancesecurityintrusion) - Set the supported intrusion settings for an MX network
* [updateNetworkApplianceSecurityMalware](#updatenetworkappliancesecuritymalware) - Set the supported malware settings for an MX network
* [updateNetworkApplianceSettings](#updatenetworkappliancesettings) - Update the appliance settings for a network
* [updateNetworkApplianceSingleLan](#updatenetworkappliancesinglelan) - Update single LAN configuration
* [updateNetworkApplianceSsid](#updatenetworkappliancessid) - Update the attributes of an MX SSID
* [updateNetworkApplianceStaticRoute](#updatenetworkappliancestaticroute) - Update a static route for an MX or teleworker network
* [updateNetworkApplianceTrafficShaping](#updatenetworkappliancetrafficshaping) - Update the traffic shaping settings for an MX network
* [updateNetworkApplianceTrafficShapingCustomPerformanceClass](#updatenetworkappliancetrafficshapingcustomperformanceclass) - Update a custom performance class for an MX network
* [updateNetworkApplianceTrafficShapingRules](#updatenetworkappliancetrafficshapingrules) - Update the traffic shaping settings rules for an MX network
* [updateNetworkApplianceTrafficShapingUplinkBandwidth](#updatenetworkappliancetrafficshapinguplinkbandwidth) - Updates the uplink bandwidth settings for your MX network.
* [updateNetworkApplianceTrafficShapingUplinkSelection](#updatenetworkappliancetrafficshapinguplinkselection) - Update uplink selection settings for an MX network
* [updateNetworkApplianceVlan](#updatenetworkappliancevlan) - Update a VLAN
* [updateNetworkApplianceVlansSettings](#updatenetworkappliancevlanssettings) - Enable/Disable VLANs for the given network
* [updateNetworkApplianceVpnBgp](#updatenetworkappliancevpnbgp) - Update a Hub BGP Configuration
* [updateNetworkApplianceVpnSiteToSiteVpn](#updatenetworkappliancevpnsitetositevpn) - Update the site-to-site VPN settings of a network
* [updateNetworkApplianceWarmSpare](#updatenetworkappliancewarmspare) - Update MX warm spare settings
* [updateOrganizationApplianceSecurityIntrusion](#updateorganizationappliancesecurityintrusion) - Sets supported intrusion settings for an organization
* [updateOrganizationApplianceVPNThirdPartyVPNPeers](#updateorganizationappliancevpnthirdpartyvpnpeers) - Update the third party VPN peers for an organization
* [updateOrganizationApplianceVpnVpnFirewallRules](#updateorganizationappliancevpnvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN

## createDeviceApplianceVmxAuthenticationToken

Generate a new vMX authentication token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceApplianceVmxAuthenticationTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceApplianceVmxAuthenticationTokenRequest();
    $request->serial = 'quos';

    $response = $sdk->appliance->createDeviceApplianceVmxAuthenticationToken($request);

    if ($response->createDeviceApplianceVmxAuthenticationToken201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkAppliancePrefixesDelegatedStatic

Add a static delegated prefix from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAppliancePrefixesDelegatedStaticRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAppliancePrefixesDelegatedStaticRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkAppliancePrefixesDelegatedStaticRequest();
    $request->requestBody = new CreateNetworkAppliancePrefixesDelegatedStaticRequestBody();
    $request->requestBody->description = 'vel';
    $request->requestBody->origin = new CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin();
    $request->requestBody->origin->interfaces = [
        'possimus',
        'facilis',
    ];
    $request->requestBody->origin->type = CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum::INTERNET;
    $request->requestBody->prefix = 'commodi';
    $request->networkId = 'in';

    $response = $sdk->appliance->createNetworkAppliancePrefixesDelegatedStatic($request);

    if ($response->createNetworkAppliancePrefixesDelegatedStatic201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkApplianceStaticRoute

Add a static route for an MX or teleworker network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceStaticRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceStaticRouteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkApplianceStaticRouteRequest();
    $request->requestBody = new CreateNetworkApplianceStaticRouteRequestBody();
    $request->requestBody->gatewayIp = 'corporis';
    $request->requestBody->gatewayVlanId = 'reiciendis';
    $request->requestBody->name = 'Corey Walsh DDS';
    $request->requestBody->subnet = 'consectetur';
    $request->networkId = 'in';

    $response = $sdk->appliance->createNetworkApplianceStaticRoute($request);

    if ($response->createNetworkApplianceStaticRoute201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkApplianceTrafficShapingCustomPerformanceClass

Add a custom performance class for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest();
    $request->requestBody = new CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody();
    $request->requestBody->maxJitter = 348519;
    $request->requestBody->maxLatency = 937285;
    $request->requestBody->maxLossPercentage = 814967;
    $request->requestBody->name = 'Melba Homenick';
    $request->networkId = 'saepe';

    $response = $sdk->appliance->createNetworkApplianceTrafficShapingCustomPerformanceClass($request);

    if ($response->createNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkApplianceVlan

Add a VLAN

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBodyMandatoryDhcp;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkApplianceVlanRequest();
    $request->requestBody = new CreateNetworkApplianceVlanRequestBody();
    $request->requestBody->applianceIp = 'necessitatibus';
    $request->requestBody->cidr = 'dolore';
    $request->requestBody->groupPolicyId = 'sunt';
    $request->requestBody->id = 'f33317fe-35b6-40eb-9ea4-26555ba3c287';
    $request->requestBody->ipv6 = new CreateNetworkApplianceVlanRequestBodyIpv6();
    $request->requestBody->ipv6->enabled = false;
    $request->requestBody->ipv6->prefixAssignments = [
        new CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments(),
        new CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments(),
    ];
    $request->requestBody->mandatoryDhcp = new CreateNetworkApplianceVlanRequestBodyMandatoryDhcp();
    $request->requestBody->mandatoryDhcp->enabled = false;
    $request->requestBody->mask = 304468;
    $request->requestBody->name = 'Lionel Herman';
    $request->requestBody->subnet = 'blanditiis';
    $request->requestBody->templateVlanType = CreateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum::UNIQUE;
    $request->networkId = 'hic';

    $response = $sdk->appliance->createNetworkApplianceVlan($request);

    if ($response->createNetworkApplianceVlan201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkAppliancePrefixesDelegatedStatic

Delete a static delegated prefix from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkAppliancePrefixesDelegatedStaticRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkAppliancePrefixesDelegatedStaticRequest();
    $request->networkId = 'nesciunt';
    $request->staticDelegatedPrefixId = 'culpa';

    $response = $sdk->appliance->deleteNetworkAppliancePrefixesDelegatedStatic($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkApplianceStaticRoute

Delete a static route from an MX or teleworker network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkApplianceStaticRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkApplianceStaticRouteRequest();
    $request->networkId = 'corrupti';
    $request->staticRouteId = 'pariatur';

    $response = $sdk->appliance->deleteNetworkApplianceStaticRoute($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkApplianceTrafficShapingCustomPerformanceClass

Delete a custom performance class from an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest();
    $request->customPerformanceClassId = 'totam';
    $request->networkId = 'hic';

    $response = $sdk->appliance->deleteNetworkApplianceTrafficShapingCustomPerformanceClass($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkApplianceVlan

Delete a VLAN from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkApplianceVlanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkApplianceVlanRequest();
    $request->networkId = 'exercitationem';
    $request->vlanId = 'nobis';

    $response = $sdk->appliance->deleteNetworkApplianceVlan($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceApplianceDhcpSubnets

Return the DHCP subnet information for an appliance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceApplianceDhcpSubnetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceApplianceDhcpSubnetsRequest();
    $request->serial = 'sit';

    $response = $sdk->appliance->getDeviceApplianceDhcpSubnets($request);

    if ($response->getDeviceApplianceDhcpSubnets200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceAppliancePerformance

Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceAppliancePerformanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceAppliancePerformanceRequest();
    $request->serial = 'rerum';

    $response = $sdk->appliance->getDeviceAppliancePerformance($request);

    if ($response->getDeviceAppliancePerformance200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceAppliancePrefixesDelegated

Return current delegated IPv6 prefixes on an appliance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceAppliancePrefixesDelegatedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceAppliancePrefixesDelegatedRequest();
    $request->serial = 'sed';

    $response = $sdk->appliance->getDeviceAppliancePrefixesDelegated($request);

    if ($response->getDeviceAppliancePrefixesDelegated200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceAppliancePrefixesDelegatedVlanAssignments

Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest();
    $request->serial = 'reiciendis';

    $response = $sdk->appliance->getDeviceAppliancePrefixesDelegatedVlanAssignments($request);

    if ($response->getDeviceAppliancePrefixesDelegatedVlanAssignments200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceApplianceUplinksSettings

Return the uplink settings for an MX appliance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceApplianceUplinksSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceApplianceUplinksSettingsRequest();
    $request->serial = 'explicabo';

    $response = $sdk->appliance->getDeviceApplianceUplinksSettings($request);

    if ($response->getDeviceApplianceUplinksSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceClientSecurityEvents

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceClientSecurityEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceClientSecurityEventsSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceClientSecurityEventsRequest();
    $request->clientId = 'asperiores';
    $request->endingBefore = 'facilis';
    $request->networkId = 'voluptate';
    $request->perPage = 709072;
    $request->sortOrder = GetNetworkApplianceClientSecurityEventsSortOrderEnum::ASCENDING;
    $request->startingAfter = 'iste';
    $request->t0 = 'dolore';
    $request->t1 = 'laborum';
    $request->timespan = 1523.54;

    $response = $sdk->appliance->getNetworkApplianceClientSecurityEvents($request);

    if ($response->getNetworkApplianceClientSecurityEvents200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceConnectivityMonitoringDestinations

Return the connectivity testing destinations for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceConnectivityMonitoringDestinationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceConnectivityMonitoringDestinationsRequest();
    $request->networkId = 'in';

    $response = $sdk->appliance->getNetworkApplianceConnectivityMonitoringDestinations($request);

    if ($response->getNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceContentFiltering

Return the content filtering settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceContentFilteringRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceContentFilteringRequest();
    $request->networkId = 'commodi';

    $response = $sdk->appliance->getNetworkApplianceContentFiltering($request);

    if ($response->getNetworkApplianceContentFiltering200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceContentFilteringCategories

List all available content filtering categories for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceContentFilteringCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceContentFilteringCategoriesRequest();
    $request->networkId = 'quidem';

    $response = $sdk->appliance->getNetworkApplianceContentFilteringCategories($request);

    if ($response->getNetworkApplianceContentFilteringCategories200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->networkId = 'explicabo';

    $response = $sdk->appliance->getNetworkApplianceFirewallCellularFirewallRules($request);

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
    $request->networkId = 'voluptas';
    $request->service = 'unde';

    $response = $sdk->appliance->getNetworkApplianceFirewallFirewalledService($request);

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
    $request->networkId = 'architecto';

    $response = $sdk->appliance->getNetworkApplianceFirewallFirewalledServices($request);

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
    $request->networkId = 'suscipit';

    $response = $sdk->appliance->getNetworkApplianceFirewallInboundCellularFirewallRules($request);

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
    $request->networkId = 'sapiente';

    $response = $sdk->appliance->getNetworkApplianceFirewallInboundFirewallRules($request);

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
    $request->networkId = 'debitis';

    $response = $sdk->appliance->getNetworkApplianceFirewallL3FirewallRules($request);

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
    $request->networkId = 'illo';

    $response = $sdk->appliance->getNetworkApplianceFirewallL7FirewallRules($request);

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
    $request->networkId = 'reiciendis';

    $response = $sdk->appliance->getNetworkApplianceFirewallL7FirewallRulesApplicationCategories($request);

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
    $request->networkId = 'perferendis';

    $response = $sdk->appliance->getNetworkApplianceFirewallOneToManyNatRules($request);

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
    $request->networkId = 'corrupti';

    $response = $sdk->appliance->getNetworkApplianceFirewallOneToOneNatRules($request);

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
    $request->networkId = 'maiores';

    $response = $sdk->appliance->getNetworkApplianceFirewallPortForwardingRules($request);

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
    $request->networkId = 'incidunt';

    $response = $sdk->appliance->getNetworkApplianceFirewallSettings($request);

    if ($response->getNetworkApplianceFirewallSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAppliancePort

Return per-port VLAN settings for a single MX port.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAppliancePortRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAppliancePortRequest();
    $request->networkId = 'sed';
    $request->portId = 'provident';

    $response = $sdk->appliance->getNetworkAppliancePort($request);

    if ($response->getNetworkAppliancePort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAppliancePorts

List per-port VLAN settings for all ports of a MX.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAppliancePortsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAppliancePortsRequest();
    $request->networkId = 'eius';

    $response = $sdk->appliance->getNetworkAppliancePorts($request);

    if ($response->getNetworkAppliancePorts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAppliancePrefixesDelegatedStatic

Return a static delegated prefix from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAppliancePrefixesDelegatedStaticRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAppliancePrefixesDelegatedStaticRequest();
    $request->networkId = 'necessitatibus';
    $request->staticDelegatedPrefixId = 'ipsum';

    $response = $sdk->appliance->getNetworkAppliancePrefixesDelegatedStatic($request);

    if ($response->getNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAppliancePrefixesDelegatedStatics

List static delegated prefixes for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAppliancePrefixesDelegatedStaticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAppliancePrefixesDelegatedStaticsRequest();
    $request->networkId = 'ea';

    $response = $sdk->appliance->getNetworkAppliancePrefixesDelegatedStatics($request);

    if ($response->getNetworkAppliancePrefixesDelegatedStatics200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceSecurityEvents

List the security events for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSecurityEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSecurityEventsSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSecurityEventsRequest();
    $request->endingBefore = 'occaecati';
    $request->networkId = 'quos';
    $request->perPage = 975752;
    $request->sortOrder = GetNetworkApplianceSecurityEventsSortOrderEnum::ASCENDING;
    $request->startingAfter = 'tempora';
    $request->t0 = 'voluptate';
    $request->t1 = 'reiciendis';
    $request->timespan = 4017.13;

    $response = $sdk->appliance->getNetworkApplianceSecurityEvents($request);

    if ($response->getNetworkApplianceSecurityEvents200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceSecurityIntrusion

Returns all supported intrusion settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSecurityIntrusionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSecurityIntrusionRequest();
    $request->networkId = 'sit';

    $response = $sdk->appliance->getNetworkApplianceSecurityIntrusion($request);

    if ($response->getNetworkApplianceSecurityIntrusion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceSecurityMalware

Returns all supported malware settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSecurityMalwareRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSecurityMalwareRequest();
    $request->networkId = 'non';

    $response = $sdk->appliance->getNetworkApplianceSecurityMalware($request);

    if ($response->getNetworkApplianceSecurityMalware200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceSettings

Return the appliance settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSettingsRequest();
    $request->networkId = 'officiis';

    $response = $sdk->appliance->getNetworkApplianceSettings($request);

    if ($response->getNetworkApplianceSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceSingleLan

Return single LAN configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSingleLanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSingleLanRequest();
    $request->networkId = 'praesentium';

    $response = $sdk->appliance->getNetworkApplianceSingleLan($request);

    if ($response->getNetworkApplianceSingleLan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceSsid

Return a single MX SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSsidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSsidRequest();
    $request->networkId = 'facilis';
    $request->number = 'quaerat';

    $response = $sdk->appliance->getNetworkApplianceSsid($request);

    if ($response->getNetworkApplianceSsid200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceSsids

List the MX SSIDs in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSsidsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSsidsRequest();
    $request->networkId = 'incidunt';

    $response = $sdk->appliance->getNetworkApplianceSsids($request);

    if ($response->getNetworkApplianceSsids200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceStaticRoute

Return a static route for an MX or teleworker network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceStaticRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceStaticRouteRequest();
    $request->networkId = 'ipsam';
    $request->staticRouteId = 'debitis';

    $response = $sdk->appliance->getNetworkApplianceStaticRoute($request);

    if ($response->getNetworkApplianceStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceStaticRoutes

List the static routes for an MX or teleworker network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceStaticRoutesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceStaticRoutesRequest();
    $request->networkId = 'rem';

    $response = $sdk->appliance->getNetworkApplianceStaticRoutes($request);

    if ($response->getNetworkApplianceStaticRoutes200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceTrafficShaping

Display the traffic shaping settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceTrafficShapingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceTrafficShapingRequest();
    $request->networkId = 'sit';

    $response = $sdk->appliance->getNetworkApplianceTrafficShaping($request);

    if ($response->getNetworkApplianceTrafficShaping200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceTrafficShapingCustomPerformanceClass

Return a custom performance class for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest();
    $request->customPerformanceClassId = 'nobis';
    $request->networkId = 'error';

    $response = $sdk->appliance->getNetworkApplianceTrafficShapingCustomPerformanceClass($request);

    if ($response->getNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceTrafficShapingCustomPerformanceClasses

List all custom performance classes for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest();
    $request->networkId = 'veniam';

    $response = $sdk->appliance->getNetworkApplianceTrafficShapingCustomPerformanceClasses($request);

    if ($response->getNetworkApplianceTrafficShapingCustomPerformanceClasses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceTrafficShapingRules

Display the traffic shaping settings rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceTrafficShapingRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceTrafficShapingRulesRequest();
    $request->networkId = 'minima';

    $response = $sdk->appliance->getNetworkApplianceTrafficShapingRules($request);

    if ($response->getNetworkApplianceTrafficShapingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceTrafficShapingUplinkBandwidth

Returns the uplink bandwidth limits for your MX network. This may not reflect the affected device's hardware capabilities.  For more information on your device's hardware capabilities, please consult our MX Family Datasheet - [https://meraki.cisco.com/product-collateral/mx-family-datasheet/?file]

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceTrafficShapingUplinkBandwidthRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceTrafficShapingUplinkBandwidthRequest();
    $request->networkId = 'recusandae';

    $response = $sdk->appliance->getNetworkApplianceTrafficShapingUplinkBandwidth($request);

    if ($response->getNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceTrafficShapingUplinkSelection

Show uplink selection settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceTrafficShapingUplinkSelectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceTrafficShapingUplinkSelectionRequest();
    $request->networkId = 'reiciendis';

    $response = $sdk->appliance->getNetworkApplianceTrafficShapingUplinkSelection($request);

    if ($response->getNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->networkId = 'nulla';
    $request->resolution = 168576;
    $request->t0 = 'aperiam';
    $request->t1 = 'saepe';
    $request->timespan = 2536.42;

    $response = $sdk->appliance->getNetworkApplianceUplinksUsageHistory($request);

    if ($response->getNetworkApplianceUplinksUsageHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceVlan

Return a VLAN

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceVlanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceVlanRequest();
    $request->networkId = 'veniam';
    $request->vlanId = 'in';

    $response = $sdk->appliance->getNetworkApplianceVlan($request);

    if ($response->getNetworkApplianceVlan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceVlans

List the VLANs for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceVlansRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceVlansRequest();
    $request->networkId = 'officiis';

    $response = $sdk->appliance->getNetworkApplianceVlans($request);

    if ($response->getNetworkApplianceVlans200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceVlansSettings

Returns the enabled status of VLANs for the network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceVlansSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceVlansSettingsRequest();
    $request->networkId = 'beatae';

    $response = $sdk->appliance->getNetworkApplianceVlansSettings($request);

    if ($response->getNetworkApplianceVlansSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->networkId = 'laudantium';

    $response = $sdk->appliance->getNetworkApplianceVpnBgp($request);

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
    $request->networkId = 'exercitationem';

    $response = $sdk->appliance->getNetworkApplianceVpnSiteToSiteVpn($request);

    if ($response->getNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceWarmSpare

Return MX warm spare settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceWarmSpareRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceWarmSpareRequest();
    $request->networkId = 'praesentium';

    $response = $sdk->appliance->getNetworkApplianceWarmSpare($request);

    if ($response->getNetworkApplianceWarmSpare200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApplianceSecurityEvents

List the security events for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceSecurityEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceSecurityEventsSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceSecurityEventsRequest();
    $request->endingBefore = 'cum';
    $request->organizationId = 'laboriosam';
    $request->perPage = 680515;
    $request->sortOrder = GetOrganizationApplianceSecurityEventsSortOrderEnum::DESCENDING;
    $request->startingAfter = 'error';
    $request->t0 = 'hic';
    $request->t1 = 'expedita';
    $request->timespan = 8928.63;

    $response = $sdk->appliance->getOrganizationApplianceSecurityEvents($request);

    if ($response->getOrganizationApplianceSecurityEvents200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApplianceSecurityIntrusion

Returns all supported intrusion settings for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceSecurityIntrusionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceSecurityIntrusionRequest();
    $request->organizationId = 'neque';

    $response = $sdk->appliance->getOrganizationApplianceSecurityIntrusion($request);

    if ($response->getOrganizationApplianceSecurityIntrusion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApplianceUplinkStatuses

List the uplink status of every Meraki MX and Z series appliances in the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceUplinkStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceUplinkStatusesRequest();
    $request->endingBefore = 'dolorum';
    $request->iccids = [
        'officia',
        'dolorum',
    ];
    $request->networkIds = [
        'accusamus',
        'tempora',
        'atque',
    ];
    $request->organizationId = 'fugit';
    $request->perPage = 282699;
    $request->serials = [
        'voluptatem',
        'culpa',
        'expedita',
        'magnam',
    ];
    $request->startingAfter = 'consequatur';

    $response = $sdk->appliance->getOrganizationApplianceUplinkStatuses($request);

    if ($response->getOrganizationApplianceUplinkStatuses200ApplicationJSONObjects !== null) {
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
    $request->endingBefore = 'esse';
    $request->networkIds = [
        'sit',
        'voluptatum',
    ];
    $request->organizationId = 'quas';
    $request->perPage = 922112;
    $request->startingAfter = 'corporis';
    $request->t0 = 'et';
    $request->t1 = 'blanditiis';
    $request->timespan = 4059.42;

    $response = $sdk->appliance->getOrganizationApplianceVpnStats($request);

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
    $request->endingBefore = 'sed';
    $request->networkIds = [
        'vel',
    ];
    $request->organizationId = 'nostrum';
    $request->perPage = 906172;
    $request->startingAfter = 'error';

    $response = $sdk->appliance->getOrganizationApplianceVpnStatuses($request);

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
    $request->organizationId = 'consequatur';

    $response = $sdk->appliance->getOrganizationApplianceVPNThirdPartyVPNPeers($request);

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
    $request->organizationId = 'incidunt';

    $response = $sdk->appliance->getOrganizationApplianceVpnVpnFirewallRules($request);

    if ($response->getOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## swapNetworkApplianceWarmSpare

Swap MX primary and warm spare appliances

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SwapNetworkApplianceWarmSpareRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SwapNetworkApplianceWarmSpareRequest();
    $request->networkId = 'reiciendis';

    $response = $sdk->appliance->swapNetworkApplianceWarmSpare($request);

    if ($response->swapNetworkApplianceWarmSpare200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceApplianceUplinksSettings

Update the uplink settings for an MX appliance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfaces;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Pppoe;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1PppoeAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Svis;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4AssignmentModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4Nameservers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6AssignmentModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6Nameservers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1VlanTagging;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2PppoeAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4AssignmentModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4Nameservers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6AssignmentModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6Nameservers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceApplianceUplinksSettingsRequest();
    $request->requestBody = new UpdateDeviceApplianceUplinksSettingsRequestBody();
    $request->requestBody->interfaces = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfaces();
    $request->requestBody->interfaces->wan1 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1();
    $request->requestBody->interfaces->wan1->enabled = false;
    $request->requestBody->interfaces->wan1->pppoe = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Pppoe();
    $request->requestBody->interfaces->wan1->pppoe->authentication = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1PppoeAuthentication();
    $request->requestBody->interfaces->wan1->pppoe->authentication->enabled = false;
    $request->requestBody->interfaces->wan1->pppoe->authentication->password = 'dolorem';
    $request->requestBody->interfaces->wan1->pppoe->authentication->username = 'Mason57';
    $request->requestBody->interfaces->wan1->pppoe->enabled = false;
    $request->requestBody->interfaces->wan1->svis = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Svis();
    $request->requestBody->interfaces->wan1->svis->ipv4 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4();
    $request->requestBody->interfaces->wan1->svis->ipv4->address = '65679 Abdul Fall';
    $request->requestBody->interfaces->wan1->svis->ipv4->assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4AssignmentModeEnum::STATIC;
    $request->requestBody->interfaces->wan1->svis->ipv4->gateway = 'voluptate';
    $request->requestBody->interfaces->wan1->svis->ipv4->nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4Nameservers();
    $request->requestBody->interfaces->wan1->svis->ipv4->nameservers->addresses = [
        'reiciendis',
        'provident',
        'repellendus',
    ];
    $request->requestBody->interfaces->wan1->svis->ipv6 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6();
    $request->requestBody->interfaces->wan1->svis->ipv6->address = '906 Kiehn Spurs';
    $request->requestBody->interfaces->wan1->svis->ipv6->assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6AssignmentModeEnum::STATIC;
    $request->requestBody->interfaces->wan1->svis->ipv6->gateway = 'praesentium';
    $request->requestBody->interfaces->wan1->svis->ipv6->nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6Nameservers();
    $request->requestBody->interfaces->wan1->svis->ipv6->nameservers->addresses = [
        'veniam',
        'voluptatem',
        'quisquam',
    ];
    $request->requestBody->interfaces->wan1->vlanTagging = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1VlanTagging();
    $request->requestBody->interfaces->wan1->vlanTagging->enabled = false;
    $request->requestBody->interfaces->wan1->vlanTagging->vlanId = 919532;
    $request->requestBody->interfaces->wan2 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2();
    $request->requestBody->interfaces->wan2->enabled = false;
    $request->requestBody->interfaces->wan2->pppoe = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe();
    $request->requestBody->interfaces->wan2->pppoe->authentication = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2PppoeAuthentication();
    $request->requestBody->interfaces->wan2->pppoe->authentication->enabled = false;
    $request->requestBody->interfaces->wan2->pppoe->authentication->password = 'quasi';
    $request->requestBody->interfaces->wan2->pppoe->authentication->username = 'Kari_Kihn38';
    $request->requestBody->interfaces->wan2->pppoe->enabled = false;
    $request->requestBody->interfaces->wan2->svis = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis();
    $request->requestBody->interfaces->wan2->svis->ipv4 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4();
    $request->requestBody->interfaces->wan2->svis->ipv4->address = '804 Reyna Isle';
    $request->requestBody->interfaces->wan2->svis->ipv4->assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4AssignmentModeEnum::STATIC;
    $request->requestBody->interfaces->wan2->svis->ipv4->gateway = 'error';
    $request->requestBody->interfaces->wan2->svis->ipv4->nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4Nameservers();
    $request->requestBody->interfaces->wan2->svis->ipv4->nameservers->addresses = [
        'officiis',
        'accusamus',
        'natus',
        'minima',
    ];
    $request->requestBody->interfaces->wan2->svis->ipv6 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6();
    $request->requestBody->interfaces->wan2->svis->ipv6->address = '49586 Hoeger Valleys';
    $request->requestBody->interfaces->wan2->svis->ipv6->assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6AssignmentModeEnum::STATIC;
    $request->requestBody->interfaces->wan2->svis->ipv6->gateway = 'atque';
    $request->requestBody->interfaces->wan2->svis->ipv6->nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6Nameservers();
    $request->requestBody->interfaces->wan2->svis->ipv6->nameservers->addresses = [
        'recusandae',
    ];
    $request->requestBody->interfaces->wan2->vlanTagging = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging();
    $request->requestBody->interfaces->wan2->vlanTagging->enabled = false;
    $request->requestBody->interfaces->wan2->vlanTagging->vlanId = 680697;
    $request->serial = 'repellendus';

    $response = $sdk->appliance->updateDeviceApplianceUplinksSettings($request);

    if ($response->updateDeviceApplianceUplinksSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceConnectivityMonitoringDestinations

Update the connectivity testing destinations for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest();
    $request->requestBody = new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody();
    $request->requestBody->destinations = [
        new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations(),
        new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations(),
    ];
    $request->networkId = 'reiciendis';

    $response = $sdk->appliance->updateNetworkApplianceConnectivityMonitoringDestinations($request);

    if ($response->updateNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceContentFiltering

Update the content filtering settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceContentFilteringRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceContentFilteringRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceContentFilteringRequest();
    $request->requestBody = new UpdateNetworkApplianceContentFilteringRequestBody();
    $request->requestBody->allowedUrlPatterns = [
        'repudiandae',
    ];
    $request->requestBody->blockedUrlCategories = [
        'accusantium',
    ];
    $request->requestBody->blockedUrlPatterns = [
        'dolores',
    ];
    $request->requestBody->urlCategoryListSize = UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum::FULL_LIST;
    $request->networkId = 'laboriosam';

    $response = $sdk->appliance->updateNetworkApplianceContentFiltering($request);

    if ($response->updateNetworkApplianceContentFiltering200ApplicationJSONObject !== null) {
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
    ];
    $request->networkId = 'a';

    $response = $sdk->appliance->updateNetworkApplianceFirewallCellularFirewallRules($request);

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
    $request->requestBody->access = UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum::RESTRICTED;
    $request->requestBody->allowedIps = [
        'saepe',
        'consequuntur',
    ];
    $request->networkId = 'occaecati';
    $request->service = 'officiis';

    $response = $sdk->appliance->updateNetworkApplianceFirewallFirewalledService($request);

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
        new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules(),
    ];
    $request->networkId = 'in';

    $response = $sdk->appliance->updateNetworkApplianceFirewallInboundCellularFirewallRules($request);

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
    ];
    $request->requestBody->syslogDefaultRule = false;
    $request->networkId = 'eveniet';

    $response = $sdk->appliance->updateNetworkApplianceFirewallInboundFirewallRules($request);

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
        new UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules(),
    ];
    $request->requestBody->syslogDefaultRule = false;
    $request->networkId = 'consequuntur';

    $response = $sdk->appliance->updateNetworkApplianceFirewallL3FirewallRules($request);

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
    $request->networkId = 'id';

    $response = $sdk->appliance->updateNetworkApplianceFirewallL7FirewallRules($request);

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
    ];
    $request->networkId = 'reprehenderit';

    $response = $sdk->appliance->updateNetworkApplianceFirewallOneToManyNatRules($request);

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
    ];
    $request->networkId = 'illo';

    $response = $sdk->appliance->updateNetworkApplianceFirewallOneToOneNatRules($request);

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
        new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules(),
    ];
    $request->networkId = 'quidem';

    $response = $sdk->appliance->updateNetworkApplianceFirewallPortForwardingRules($request);

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
    $request->requestBody->spoofingProtection->ipSourceGuard->mode = UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuardModeEnum::LOG;
    $request->networkId = 'non';

    $response = $sdk->appliance->updateNetworkApplianceFirewallSettings($request);

    if ($response->updateNetworkApplianceFirewallSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkAppliancePort

Update the per-port VLAN settings for a single MX port.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePortRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePortRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkAppliancePortRequest();
    $request->requestBody = new UpdateNetworkAppliancePortRequestBody();
    $request->requestBody->accessPolicy = 'vero';
    $request->requestBody->allowedVlans = 'doloremque';
    $request->requestBody->dropUntaggedTraffic = false;
    $request->requestBody->enabled = false;
    $request->requestBody->type = 'iure';
    $request->requestBody->vlan = 59944;
    $request->networkId = 'totam';
    $request->portId = 'quae';

    $response = $sdk->appliance->updateNetworkAppliancePort($request);

    if ($response->updateNetworkAppliancePort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkAppliancePrefixesDelegatedStatic

Update a static delegated prefix from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePrefixesDelegatedStaticRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkAppliancePrefixesDelegatedStaticRequest();
    $request->requestBody = new UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody();
    $request->requestBody->description = 'molestiae';
    $request->requestBody->origin = new UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin();
    $request->requestBody->origin->interfaces = [
        'qui',
        'cum',
        'iure',
        'necessitatibus',
    ];
    $request->requestBody->origin->type = UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum::INDEPENDENT;
    $request->requestBody->prefix = 'laborum';
    $request->networkId = 'distinctio';
    $request->staticDelegatedPrefixId = 'voluptatum';

    $response = $sdk->appliance->updateNetworkAppliancePrefixesDelegatedStatic($request);

    if ($response->updateNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceSecurityIntrusion

Set the supported intrusion settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityIntrusionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityIntrusionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceSecurityIntrusionRequest();
    $request->requestBody = new UpdateNetworkApplianceSecurityIntrusionRequestBody();
    $request->requestBody->idsRulesets = UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum::CONNECTIVITY;
    $request->requestBody->mode = UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum::DETECTION;
    $request->requestBody->protectedNetworks = new UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks();
    $request->requestBody->protectedNetworks->excludedCidr = [
        'repellat',
        'alias',
    ];
    $request->requestBody->protectedNetworks->includedCidr = [
        'perspiciatis',
        'nihil',
    ];
    $request->requestBody->protectedNetworks->useDefault = false;
    $request->networkId = 'mollitia';

    $response = $sdk->appliance->updateNetworkApplianceSecurityIntrusion($request);

    if ($response->updateNetworkApplianceSecurityIntrusion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceSecurityMalware

Set the supported malware settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityMalwareRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityMalwareRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityMalwareRequestBodyModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceSecurityMalwareRequest();
    $request->requestBody = new UpdateNetworkApplianceSecurityMalwareRequestBody();
    $request->requestBody->allowedFiles = [
        new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles(),
        new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles(),
    ];
    $request->requestBody->allowedUrls = [
        new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls(),
    ];
    $request->requestBody->mode = UpdateNetworkApplianceSecurityMalwareRequestBodyModeEnum::ENABLED;
    $request->networkId = 'reiciendis';

    $response = $sdk->appliance->updateNetworkApplianceSecurityMalware($request);

    if ($response->updateNetworkApplianceSecurityMalware200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceSettings

Update the appliance settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSettingsRequestBodyClientTrackingMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSettingsRequestBodyDeploymentModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSettingsRequestBodyDynamicDns;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceSettingsRequest();
    $request->requestBody = new UpdateNetworkApplianceSettingsRequestBody();
    $request->requestBody->clientTrackingMethod = UpdateNetworkApplianceSettingsRequestBodyClientTrackingMethodEnum::IP_ADDRESS;
    $request->requestBody->deploymentMode = UpdateNetworkApplianceSettingsRequestBodyDeploymentModeEnum::ROUTED;
    $request->requestBody->dynamicDns = new UpdateNetworkApplianceSettingsRequestBodyDynamicDns();
    $request->requestBody->dynamicDns->enabled = false;
    $request->requestBody->dynamicDns->prefix = 'minima';
    $request->networkId = 'dolore';

    $response = $sdk->appliance->updateNetworkApplianceSettings($request);

    if ($response->updateNetworkApplianceSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceSingleLan

Update single LAN configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequestBodyMandatoryDhcp;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceSingleLanRequest();
    $request->requestBody = new UpdateNetworkApplianceSingleLanRequestBody();
    $request->requestBody->applianceIp = 'dolorum';
    $request->requestBody->ipv6 = new UpdateNetworkApplianceSingleLanRequestBodyIpv6();
    $request->requestBody->ipv6->enabled = false;
    $request->requestBody->ipv6->prefixAssignments = [
        new UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments(),
    ];
    $request->requestBody->mandatoryDhcp = new UpdateNetworkApplianceSingleLanRequestBodyMandatoryDhcp();
    $request->requestBody->mandatoryDhcp->enabled = false;
    $request->requestBody->subnet = 'quae';
    $request->networkId = 'recusandae';

    $response = $sdk->appliance->updateNetworkApplianceSingleLan($request);

    if ($response->updateNetworkApplianceSingleLan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceSsid

Update the attributes of an MX SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequestBodyAuthModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequestBodyDhcpEnforcedDeauthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequestBodyEncryptionModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequestBodyRadiusServers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequestBodyWpaEncryptionModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceSsidRequest();
    $request->requestBody = new UpdateNetworkApplianceSsidRequestBody();
    $request->requestBody->authMode = UpdateNetworkApplianceSsidRequestBodyAuthModeEnum::OPEN;
    $request->requestBody->defaultVlanId = 309251;
    $request->requestBody->dhcpEnforcedDeauthentication = new UpdateNetworkApplianceSsidRequestBodyDhcpEnforcedDeauthentication();
    $request->requestBody->dhcpEnforcedDeauthentication->enabled = false;
    $request->requestBody->enabled = false;
    $request->requestBody->encryptionMode = UpdateNetworkApplianceSsidRequestBodyEncryptionModeEnum::WEP;
    $request->requestBody->name = 'April Nader';
    $request->requestBody->psk = 'laudantium';
    $request->requestBody->radiusServers = [
        new UpdateNetworkApplianceSsidRequestBodyRadiusServers(),
        new UpdateNetworkApplianceSsidRequestBodyRadiusServers(),
    ];
    $request->requestBody->visible = false;
    $request->requestBody->wpaEncryptionMode = UpdateNetworkApplianceSsidRequestBodyWpaEncryptionModeEnum::WPA2_ONLY;
    $request->networkId = 'recusandae';
    $request->number = 'esse';

    $response = $sdk->appliance->updateNetworkApplianceSsid($request);

    if ($response->updateNetworkApplianceSsid200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceStaticRoute

Update a static route for an MX or teleworker network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceStaticRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceStaticRouteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceStaticRouteRequest();
    $request->requestBody = new UpdateNetworkApplianceStaticRouteRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->fixedIpAssignments = [
        'quis' => 'eum',
        'reiciendis' => 'provident',
        'aspernatur' => 'ullam',
    ];
    $request->requestBody->gatewayIp = 'quasi';
    $request->requestBody->gatewayVlanId = 'animi';
    $request->requestBody->name = 'Angie McLaughlin';
    $request->requestBody->reservedIpRanges = [
        new UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges(),
        new UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges(),
    ];
    $request->requestBody->subnet = 'aliquid';
    $request->networkId = 'accusantium';
    $request->staticRouteId = 'repellat';

    $response = $sdk->appliance->updateNetworkApplianceStaticRoute($request);

    if ($response->updateNetworkApplianceStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceTrafficShaping

Update the traffic shaping settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceTrafficShapingRequest();
    $request->requestBody = new UpdateNetworkApplianceTrafficShapingRequestBody();
    $request->requestBody->globalBandwidthLimits = new UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits();
    $request->requestBody->globalBandwidthLimits->limitDown = 984632;
    $request->requestBody->globalBandwidthLimits->limitUp = 351893;
    $request->networkId = 'in';

    $response = $sdk->appliance->updateNetworkApplianceTrafficShaping($request);

    if ($response->updateNetworkApplianceTrafficShaping200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceTrafficShapingCustomPerformanceClass

Update a custom performance class for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest();
    $request->requestBody = new UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody();
    $request->requestBody->maxJitter = 721407;
    $request->requestBody->maxLatency = 937636;
    $request->requestBody->maxLossPercentage = 637583;
    $request->requestBody->name = 'Irving Gleichner';
    $request->customPerformanceClassId = 'officiis';
    $request->networkId = 'sapiente';

    $response = $sdk->appliance->updateNetworkApplianceTrafficShapingCustomPerformanceClass($request);

    if ($response->updateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceTrafficShapingRules

Update the traffic shaping settings rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceTrafficShapingRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceTrafficShapingRulesRequestBody();
    $request->requestBody->defaultRulesEnabled = false;
    $request->requestBody->rules = [
        new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules(),
        new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules(),
        new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules(),
        new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules(),
    ];
    $request->networkId = 'vitae';

    $response = $sdk->appliance->updateNetworkApplianceTrafficShapingRules($request);

    if ($response->updateNetworkApplianceTrafficShapingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceTrafficShapingUplinkBandwidth

Updates the uplink bandwidth settings for your MX network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest();
    $request->requestBody = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody();
    $request->requestBody->bandwidthLimits = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits();
    $request->requestBody->bandwidthLimits->cellular = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular();
    $request->requestBody->bandwidthLimits->cellular->limitDown = 698249;
    $request->requestBody->bandwidthLimits->cellular->limitUp = 272229;
    $request->requestBody->bandwidthLimits->wan1 = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1();
    $request->requestBody->bandwidthLimits->wan1->limitDown = 335498;
    $request->requestBody->bandwidthLimits->wan1->limitUp = 82057;
    $request->requestBody->bandwidthLimits->wan2 = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2();
    $request->requestBody->bandwidthLimits->wan2->limitDown = 147685;
    $request->requestBody->bandwidthLimits->wan2->limitUp = 765271;
    $request->networkId = 'quae';

    $response = $sdk->appliance->updateNetworkApplianceTrafficShapingUplinkBandwidth($request);

    if ($response->updateNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceTrafficShapingUplinkSelection

Update uplink selection settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailback;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailbackImmediate;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest();
    $request->requestBody = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody();
    $request->requestBody->activeActiveAutoVpnEnabled = false;
    $request->requestBody->defaultUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum::WAN1;
    $request->requestBody->failoverAndFailback = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailback();
    $request->requestBody->failoverAndFailback->immediate = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailbackImmediate();
    $request->requestBody->failoverAndFailback->immediate->enabled = false;
    $request->requestBody->loadBalancingEnabled = false;
    $request->requestBody->vpnTrafficUplinkPreferences = [
        new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences(),
    ];
    $request->requestBody->wanTrafficUplinkPreferences = [
        new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences(),
    ];
    $request->networkId = 'eum';

    $response = $sdk->appliance->updateNetworkApplianceTrafficShapingUplinkSelection($request);

    if ($response->updateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceVlan

Update a VLAN

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyDhcpOptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyMandatoryDhcp;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyReservedIpRanges;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceVlanRequest();
    $request->requestBody = new UpdateNetworkApplianceVlanRequestBody();
    $request->requestBody->applianceIp = 'eius';
    $request->requestBody->cidr = 'rem';
    $request->requestBody->dhcpBootFilename = 'at';
    $request->requestBody->dhcpBootNextServer = 'impedit';
    $request->requestBody->dhcpBootOptionsEnabled = false;
    $request->requestBody->dhcpHandling = UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum::DO_NOT_RESPOND_TO_DHCP_REQUESTS;
    $request->requestBody->dhcpLeaseTime = UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum::FOUR_HOURS;
    $request->requestBody->dhcpOptions = [
        new UpdateNetworkApplianceVlanRequestBodyDhcpOptions(),
        new UpdateNetworkApplianceVlanRequestBodyDhcpOptions(),
    ];
    $request->requestBody->dhcpRelayServerIps = [
        'minima',
    ];
    $request->requestBody->dnsNameservers = 'beatae';
    $request->requestBody->fixedIpAssignments = [
        'provident' => 'earum',
        'soluta' => 'hic',
        'illum' => 'eaque',
    ];
    $request->requestBody->groupPolicyId = 'earum';
    $request->requestBody->ipv6 = new UpdateNetworkApplianceVlanRequestBodyIpv6();
    $request->requestBody->ipv6->enabled = false;
    $request->requestBody->ipv6->prefixAssignments = [
        new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments(),
        new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments(),
        new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments(),
    ];
    $request->requestBody->mandatoryDhcp = new UpdateNetworkApplianceVlanRequestBodyMandatoryDhcp();
    $request->requestBody->mandatoryDhcp->enabled = false;
    $request->requestBody->mask = 983427;
    $request->requestBody->name = 'Gene Sauer';
    $request->requestBody->reservedIpRanges = [
        new UpdateNetworkApplianceVlanRequestBodyReservedIpRanges(),
    ];
    $request->requestBody->subnet = 'cumque';
    $request->requestBody->templateVlanType = UpdateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum::UNIQUE;
    $request->requestBody->vpnNatSubnet = 'ratione';
    $request->networkId = 'animi';
    $request->vlanId = 'necessitatibus';

    $response = $sdk->appliance->updateNetworkApplianceVlan($request);

    if ($response->updateNetworkApplianceVlan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceVlansSettings

Enable/Disable VLANs for the given network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlansSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlansSettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceVlansSettingsRequest();
    $request->requestBody = new UpdateNetworkApplianceVlansSettingsRequestBody();
    $request->requestBody->vlansEnabled = false;
    $request->networkId = 'nulla';

    $response = $sdk->appliance->updateNetworkApplianceVlansSettings($request);

    if ($response->updateNetworkApplianceVlansSettings200ApplicationJSONObject !== null) {
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
    $request->requestBody->asNumber = 8931;
    $request->requestBody->enabled = false;
    $request->requestBody->ibgpHoldTimer = 97258;
    $request->requestBody->neighbors = [
        new UpdateNetworkApplianceVpnBgpRequestBodyNeighbors(),
    ];
    $request->networkId = 'ducimus';

    $response = $sdk->appliance->updateNetworkApplianceVpnBgp($request);

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
        new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs(),
    ];
    $request->requestBody->mode = UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum::NONE;
    $request->requestBody->subnets = [
        new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets(),
        new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets(),
    ];
    $request->networkId = 'adipisci';

    $response = $sdk->appliance->updateNetworkApplianceVpnSiteToSiteVpn($request);

    if ($response->updateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceWarmSpare

Update MX warm spare settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceWarmSpareRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceWarmSpareRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceWarmSpareRequest();
    $request->requestBody = new UpdateNetworkApplianceWarmSpareRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->spareSerial = 'quasi';
    $request->requestBody->uplinkMode = 'magni';
    $request->requestBody->virtualIp1 = 'doloribus';
    $request->requestBody->virtualIp2 = 'nulla';
    $request->networkId = 'necessitatibus';

    $response = $sdk->appliance->updateNetworkApplianceWarmSpare($request);

    if ($response->updateNetworkApplianceWarmSpare200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationApplianceSecurityIntrusion

Sets supported intrusion settings for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceSecurityIntrusionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceSecurityIntrusionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationApplianceSecurityIntrusionRequest();
    $request->requestBody = new UpdateOrganizationApplianceSecurityIntrusionRequestBody();
    $request->requestBody->allowedRules = [
        new UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules(),
    ];
    $request->organizationId = 'tempora';

    $response = $sdk->appliance->updateOrganizationApplianceSecurityIntrusion($request);

    if ($response->updateOrganizationApplianceSecurityIntrusion200ApplicationJSONObject !== null) {
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
    $request->organizationId = 'molestiae';

    $response = $sdk->appliance->updateOrganizationApplianceVPNThirdPartyVPNPeers($request);

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
    $request->organizationId = 'iusto';

    $response = $sdk->appliance->updateOrganizationApplianceVpnVpnFirewallRules($request);

    if ($response->updateOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
