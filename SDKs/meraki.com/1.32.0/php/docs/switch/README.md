# switch

### Available Operations

* [addNetworkSwitchStack](#addnetworkswitchstack) - Add a switch to a stack
* [cloneOrganizationSwitchDevices](#cloneorganizationswitchdevices) - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* [createDeviceSwitchRoutingInterface](#createdeviceswitchroutinginterface) - Create a layer 3 interface for a switch
* [createDeviceSwitchRoutingStaticRoute](#createdeviceswitchroutingstaticroute) - Create a layer 3 static route for a switch
* [createNetworkSwitchAccessPolicy](#createnetworkswitchaccesspolicy) - Create an access policy for a switch network
* [createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [createNetworkSwitchLinkAggregation](#createnetworkswitchlinkaggregation) - Create a link aggregation group
* [createNetworkSwitchPortSchedule](#createnetworkswitchportschedule) - Add a switch port schedule
* [createNetworkSwitchQosRule](#createnetworkswitchqosrule) - Add a quality of service rule
* [createNetworkSwitchRoutingMulticastRendezvousPoint](#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [createNetworkSwitchStack](#createnetworkswitchstack) - Create a stack
* [createNetworkSwitchStackRoutingInterface](#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [createNetworkSwitchStackRoutingStaticRoute](#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [cycleDeviceSwitchPorts](#cycledeviceswitchports) - Cycle a set of switch ports
* [deleteDeviceSwitchRoutingInterface](#deletedeviceswitchroutinginterface) - Delete a layer 3 interface from the switch
* [deleteDeviceSwitchRoutingStaticRoute](#deletedeviceswitchroutingstaticroute) - Delete a layer 3 static route for a switch
* [deleteNetworkSwitchAccessPolicy](#deletenetworkswitchaccesspolicy) - Delete an access policy for a switch network
* [deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [deleteNetworkSwitchLinkAggregation](#deletenetworkswitchlinkaggregation) - Split a link aggregation group into separate ports
* [deleteNetworkSwitchPortSchedule](#deletenetworkswitchportschedule) - Delete a switch port schedule
* [deleteNetworkSwitchQosRule](#deletenetworkswitchqosrule) - Delete a quality of service rule
* [deleteNetworkSwitchRoutingMulticastRendezvousPoint](#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [deleteNetworkSwitchStack](#deletenetworkswitchstack) - Delete a stack
* [deleteNetworkSwitchStackRoutingInterface](#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [deleteNetworkSwitchStackRoutingStaticRoute](#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [getDeviceSwitchPort](#getdeviceswitchport) - Return a switch port
* [getDeviceSwitchPorts](#getdeviceswitchports) - List the switch ports for a switch
* [getDeviceSwitchPortsStatuses](#getdeviceswitchportsstatuses) - Return the status for all the ports of a switch
* [getDeviceSwitchPortsStatusesPackets](#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch
* [getDeviceSwitchRoutingInterface](#getdeviceswitchroutinginterface) - Return a layer 3 interface for a switch
* [getDeviceSwitchRoutingInterfaceDhcp](#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [getDeviceSwitchRoutingInterfaces](#getdeviceswitchroutinginterfaces) - List layer 3 interfaces for a switch
* [getDeviceSwitchRoutingStaticRoute](#getdeviceswitchroutingstaticroute) - Return a layer 3 static route for a switch
* [getDeviceSwitchRoutingStaticRoutes](#getdeviceswitchroutingstaticroutes) - List layer 3 static routes for a switch
* [getDeviceSwitchWarmSpare](#getdeviceswitchwarmspare) - Return warm spare configuration for a switch
* [getNetworkSwitchAccessControlLists](#getnetworkswitchaccesscontrollists) - Return the access control lists for a MS network
* [getNetworkSwitchAccessPolicies](#getnetworkswitchaccesspolicies) - List the access policies for a switch network
* [getNetworkSwitchAccessPolicy](#getnetworkswitchaccesspolicy) - Return a specific access policy for a switch network
* [getNetworkSwitchAlternateManagementInterface](#getnetworkswitchalternatemanagementinterface) - Return the switch alternate management interface for the network
* [getNetworkSwitchDhcpServerPolicy](#getnetworkswitchdhcpserverpolicy) - Return the DHCP server settings
* [getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
* [getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [getNetworkSwitchDhcpV4ServersSeen](#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
* [getNetworkSwitchDscpToCosMappings](#getnetworkswitchdscptocosmappings) - Return the DSCP to CoS mappings
* [getNetworkSwitchLinkAggregations](#getnetworkswitchlinkaggregations) - List link aggregation groups
* [getNetworkSwitchMtu](#getnetworkswitchmtu) - Return the MTU configuration
* [getNetworkSwitchPortSchedules](#getnetworkswitchportschedules) - List switch port schedules
* [getNetworkSwitchQosRule](#getnetworkswitchqosrule) - Return a quality of service rule
* [getNetworkSwitchQosRules](#getnetworkswitchqosrules) - List quality of service rules
* [getNetworkSwitchQosRulesOrder](#getnetworkswitchqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [getNetworkSwitchRoutingMulticast](#getnetworkswitchroutingmulticast) - Return multicast settings for a network
* [getNetworkSwitchRoutingMulticastRendezvousPoint](#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [getNetworkSwitchRoutingMulticastRendezvousPoints](#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [getNetworkSwitchRoutingOspf](#getnetworkswitchroutingospf) - Return layer 3 OSPF routing configuration
* [getNetworkSwitchSettings](#getnetworkswitchsettings) - Returns the switch network settings
* [getNetworkSwitchStack](#getnetworkswitchstack) - Show a switch stack
* [getNetworkSwitchStackRoutingInterface](#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [getNetworkSwitchStackRoutingInterfaceDhcp](#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [getNetworkSwitchStackRoutingInterfaces](#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [getNetworkSwitchStackRoutingStaticRoute](#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [getNetworkSwitchStackRoutingStaticRoutes](#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [getNetworkSwitchStacks](#getnetworkswitchstacks) - List the switch stacks in a network
* [getNetworkSwitchStormControl](#getnetworkswitchstormcontrol) - Return the storm control configuration for a switch network
* [getNetworkSwitchStp](#getnetworkswitchstp) - Returns STP settings
* [getOrganizationConfigTemplateSwitchProfilePort](#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [getOrganizationConfigTemplateSwitchProfilePorts](#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [getOrganizationConfigTemplateSwitchProfiles](#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration
* [getOrganizationSwitchPortsBySwitch](#getorganizationswitchportsbyswitch) - List the switchports in an organization by switch
* [removeNetworkSwitchStack](#removenetworkswitchstack) - Remove a switch from a stack
* [updateDeviceSwitchPort](#updatedeviceswitchport) - Update a switch port
* [updateDeviceSwitchRoutingInterface](#updatedeviceswitchroutinginterface) - Update a layer 3 interface for a switch
* [updateDeviceSwitchRoutingInterfaceDhcp](#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [updateDeviceSwitchRoutingStaticRoute](#updatedeviceswitchroutingstaticroute) - Update a layer 3 static route for a switch
* [updateDeviceSwitchWarmSpare](#updatedeviceswitchwarmspare) - Update warm spare configuration for a switch
* [updateNetworkSwitchAccessControlLists](#updatenetworkswitchaccesscontrollists) - Update the access control lists for a MS network
* [updateNetworkSwitchAccessPolicy](#updatenetworkswitchaccesspolicy) - Update an access policy for a switch network
* [updateNetworkSwitchAlternateManagementInterface](#updatenetworkswitchalternatemanagementinterface) - Update the switch alternate management interface for the network
* [updateNetworkSwitchDhcpServerPolicy](#updatenetworkswitchdhcpserverpolicy) - Update the DHCP server settings
* [updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#updatenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Update a server that is trusted by Dynamic ARP Inspection on this network
* [updateNetworkSwitchDscpToCosMappings](#updatenetworkswitchdscptocosmappings) - Update the DSCP to CoS mappings
* [updateNetworkSwitchLinkAggregation](#updatenetworkswitchlinkaggregation) - Update a link aggregation group
* [updateNetworkSwitchMtu](#updatenetworkswitchmtu) - Update the MTU configuration
* [updateNetworkSwitchPortSchedule](#updatenetworkswitchportschedule) - Update a switch port schedule
* [updateNetworkSwitchQosRule](#updatenetworkswitchqosrule) - Update a quality of service rule
* [updateNetworkSwitchQosRulesOrder](#updatenetworkswitchqosrulesorder) - Update the order in which the rules should be processed by the switch
* [updateNetworkSwitchRoutingMulticast](#updatenetworkswitchroutingmulticast) - Update multicast settings for a network
* [updateNetworkSwitchRoutingMulticastRendezvousPoint](#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point
* [updateNetworkSwitchRoutingOspf](#updatenetworkswitchroutingospf) - Update layer 3 OSPF routing configuration
* [updateNetworkSwitchSettings](#updatenetworkswitchsettings) - Update switch network settings
* [updateNetworkSwitchStackRoutingInterface](#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [updateNetworkSwitchStackRoutingInterfaceDhcp](#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack
* [updateNetworkSwitchStackRoutingStaticRoute](#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack
* [updateNetworkSwitchStormControl](#updatenetworkswitchstormcontrol) - Update the storm control configuration for a switch network
* [updateNetworkSwitchStp](#updatenetworkswitchstp) - Updates STP settings
* [updateOrganizationConfigTemplateSwitchProfilePort](#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port

## addNetworkSwitchStack

Add a switch to a stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddNetworkSwitchStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddNetworkSwitchStackRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddNetworkSwitchStackRequest();
    $request->requestBody = new AddNetworkSwitchStackRequestBody();
    $request->requestBody->serial = 'voluptate';
    $request->networkId = 'blanditiis';
    $request->switchStackId = 'sint';

    $response = $sdk->switch->addNetworkSwitchStack($request);

    if ($response->addNetworkSwitchStack200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloneOrganizationSwitchDevices

Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CloneOrganizationSwitchDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\CloneOrganizationSwitchDevicesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloneOrganizationSwitchDevicesRequest();
    $request->requestBody = new CloneOrganizationSwitchDevicesRequestBody();
    $request->requestBody->sourceSerial = 'dolorem';
    $request->requestBody->targetSerials = [
        'fugiat',
        'fugit',
        'neque',
    ];
    $request->organizationId = 'asperiores';

    $response = $sdk->switch->cloneOrganizationSwitchDevices($request);

    if ($response->cloneOrganizationSwitchDevices200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeviceSwitchRoutingInterface

Create a layer 3 interface for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingInterfaceRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingInterfaceRequestBodyOspfV3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceSwitchRoutingInterfaceRequest();
    $request->requestBody = new CreateDeviceSwitchRoutingInterfaceRequestBody();
    $request->requestBody->defaultGateway = 'corrupti';
    $request->requestBody->interfaceIp = 'autem';
    $request->requestBody->ipv6 = new CreateDeviceSwitchRoutingInterfaceRequestBodyIpv6();
    $request->requestBody->ipv6->address = '0074 Ova Lane';
    $request->requestBody->ipv6->assignmentMode = 'voluptatum';
    $request->requestBody->ipv6->gateway = 'consectetur';
    $request->requestBody->ipv6->prefix = 'aliquam';
    $request->requestBody->multicastRouting = CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum::IGMP_SNOOPING_QUERIER;
    $request->requestBody->name = 'Tiffany Ryan';
    $request->requestBody->ospfSettings = new CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings();
    $request->requestBody->ospfSettings->area = 'provident';
    $request->requestBody->ospfSettings->cost = 110903;
    $request->requestBody->ospfSettings->isPassiveEnabled = false;
    $request->requestBody->ospfV3 = new CreateDeviceSwitchRoutingInterfaceRequestBodyOspfV3();
    $request->requestBody->ospfV3->area = 'quae';
    $request->requestBody->ospfV3->cost = 531247;
    $request->requestBody->ospfV3->isPassiveEnabled = false;
    $request->requestBody->subnet = 'tempore';
    $request->requestBody->vlanId = 198695;
    $request->serial = 'atque';

    $response = $sdk->switch->createDeviceSwitchRoutingInterface($request);

    if ($response->createDeviceSwitchRoutingInterface201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeviceSwitchRoutingStaticRoute

Create a layer 3 static route for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingStaticRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingStaticRouteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceSwitchRoutingStaticRouteRequest();
    $request->requestBody = new CreateDeviceSwitchRoutingStaticRouteRequestBody();
    $request->requestBody->advertiseViaOspfEnabled = false;
    $request->requestBody->name = 'Harold Ritchie MD';
    $request->requestBody->nextHopIp = 'non';
    $request->requestBody->preferOverOspfRoutesEnabled = false;
    $request->requestBody->subnet = 'ratione';
    $request->serial = 'inventore';

    $response = $sdk->switch->createDeviceSwitchRoutingStaticRoute($request);

    if ($response->createDeviceSwitchRoutingStaticRoute201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchAccessPolicy

Create an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyDot1x;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyRadius;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchAccessPolicyRequest();
    $request->requestBody = new CreateNetworkSwitchAccessPolicyRequestBody();
    $request->requestBody->accessPolicyType = CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum::MAC_AUTHENTICATION_BYPASS;
    $request->requestBody->dot1x = new CreateNetworkSwitchAccessPolicyRequestBodyDot1x();
    $request->requestBody->dot1x->controlDirection = CreateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum::BOTH;
    $request->requestBody->guestPortBouncing = false;
    $request->requestBody->guestVlanId = 266037;
    $request->requestBody->hostMode = CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum::SINGLE_HOST;
    $request->requestBody->increaseAccessSpeed = false;
    $request->requestBody->name = 'Stephen Bartell';
    $request->requestBody->radius = new CreateNetworkSwitchAccessPolicyRequestBodyRadius();
    $request->requestBody->radius->criticalAuth = new CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth();
    $request->requestBody->radius->criticalAuth->dataVlanId = 267445;
    $request->requestBody->radius->criticalAuth->suspendPortBounce = false;
    $request->requestBody->radius->criticalAuth->voiceVlanId = 971439;
    $request->requestBody->radius->failedAuthVlanId = 624080;
    $request->requestBody->radius->reAuthenticationInterval = 175850;
    $request->requestBody->radiusAccountingEnabled = false;
    $request->requestBody->radiusAccountingServers = [
        new CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers(),
        new CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers(),
        new CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers(),
        new CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers(),
    ];
    $request->requestBody->radiusCoaSupportEnabled = false;
    $request->requestBody->radiusGroupAttribute = 'debitis';
    $request->requestBody->radiusServers = [
        new CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers(),
        new CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers(),
        new CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers(),
        new CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers(),
    ];
    $request->requestBody->radiusTestingEnabled = false;
    $request->requestBody->urlRedirectWalledGardenEnabled = false;
    $request->requestBody->urlRedirectWalledGardenRanges = [
        'nesciunt',
        'perspiciatis',
        'expedita',
    ];
    $request->requestBody->voiceVlanClients = false;
    $request->networkId = 'mollitia';

    $response = $sdk->switch->createNetworkSwitchAccessPolicy($request);

    if ($response->createNetworkSwitchAccessPolicy201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Add a server to be trusted by Dynamic ARP Inspection on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest();
    $request->requestBody = new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody();
    $request->requestBody->ipv4 = new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4();
    $request->requestBody->ipv4->address = '9409 Ladarius Parkways';
    $request->requestBody->mac = 'aspernatur';
    $request->requestBody->vlan = 810331;
    $request->networkId = 'magni';

    $response = $sdk->switch->createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer($request);

    if ($response->createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchLinkAggregation

Create a link aggregation group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchLinkAggregationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchLinkAggregationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchLinkAggregationRequest();
    $request->requestBody = new CreateNetworkSwitchLinkAggregationRequestBody();
    $request->requestBody->switchPorts = [
        new CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts(),
    ];
    $request->requestBody->switchProfilePorts = [
        new CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
        new CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
        new CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
        new CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
    ];
    $request->networkId = 'officiis';

    $response = $sdk->switch->createNetworkSwitchLinkAggregation($request);

    if ($response->createNetworkSwitchLinkAggregation201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchPortSchedule

Add a switch port schedule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortSchedule;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchPortScheduleRequest();
    $request->requestBody = new CreateNetworkSwitchPortScheduleRequestBody();
    $request->requestBody->name = 'Rachel Conn';
    $request->requestBody->portSchedule = new CreateNetworkSwitchPortScheduleRequestBodyPortSchedule();
    $request->requestBody->portSchedule->friday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday();
    $request->requestBody->portSchedule->friday->active = false;
    $request->requestBody->portSchedule->friday->from = 'cumque';
    $request->requestBody->portSchedule->friday->to = 'dolor';
    $request->requestBody->portSchedule->monday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday();
    $request->requestBody->portSchedule->monday->active = false;
    $request->requestBody->portSchedule->monday->from = 'id';
    $request->requestBody->portSchedule->monday->to = 'assumenda';
    $request->requestBody->portSchedule->saturday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday();
    $request->requestBody->portSchedule->saturday->active = false;
    $request->requestBody->portSchedule->saturday->from = 'optio';
    $request->requestBody->portSchedule->saturday->to = 'commodi';
    $request->requestBody->portSchedule->sunday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday();
    $request->requestBody->portSchedule->sunday->active = false;
    $request->requestBody->portSchedule->sunday->from = 'dolore';
    $request->requestBody->portSchedule->sunday->to = 'iusto';
    $request->requestBody->portSchedule->thursday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday();
    $request->requestBody->portSchedule->thursday->active = false;
    $request->requestBody->portSchedule->thursday->from = 'nulla';
    $request->requestBody->portSchedule->thursday->to = 'explicabo';
    $request->requestBody->portSchedule->tuesday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday();
    $request->requestBody->portSchedule->tuesday->active = false;
    $request->requestBody->portSchedule->tuesday->from = 'numquam';
    $request->requestBody->portSchedule->tuesday->to = 'voluptatem';
    $request->requestBody->portSchedule->wednesday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday();
    $request->requestBody->portSchedule->wednesday->active = false;
    $request->requestBody->portSchedule->wednesday->from = 'expedita';
    $request->requestBody->portSchedule->wednesday->to = 'optio';
    $request->networkId = 'beatae';

    $response = $sdk->switch->createNetworkSwitchPortSchedule($request);

    if ($response->createNetworkSwitchPortSchedule201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchQosRule

Add a quality of service rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchQosRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchQosRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchQosRuleRequestBodyProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchQosRuleRequest();
    $request->requestBody = new CreateNetworkSwitchQosRuleRequestBody();
    $request->requestBody->dscp = 73989;
    $request->requestBody->dstPort = 933363;
    $request->requestBody->dstPortRange = 'officia';
    $request->requestBody->protocol = CreateNetworkSwitchQosRuleRequestBodyProtocolEnum::ANY;
    $request->requestBody->srcPort = 537531;
    $request->requestBody->srcPortRange = 'explicabo';
    $request->requestBody->vlan = 518491;
    $request->networkId = 'sunt';

    $response = $sdk->switch->createNetworkSwitchQosRule($request);

    if ($response->createNetworkSwitchQosRule201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchRoutingMulticastRendezvousPoint

Create a multicast rendezvous point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchRoutingMulticastRendezvousPointRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchRoutingMulticastRendezvousPointRequest();
    $request->requestBody = new CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody();
    $request->requestBody->interfaceIp = 'magnam';
    $request->requestBody->multicastGroup = 'quisquam';
    $request->networkId = 'eligendi';

    $response = $sdk->switch->createNetworkSwitchRoutingMulticastRendezvousPoint($request);

    if ($response->createNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchStack

Create a stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchStackRequest();
    $request->requestBody = new CreateNetworkSwitchStackRequestBody();
    $request->requestBody->name = 'Marc Pacocha';
    $request->requestBody->serials = [
        'reiciendis',
    ];
    $request->networkId = 'nostrum';

    $response = $sdk->switch->createNetworkSwitchStack($request);

    if ($response->createNetworkSwitchStack201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchStackRoutingInterface

Create a layer 3 interface for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchStackRoutingInterfaceRequest();
    $request->requestBody = new CreateNetworkSwitchStackRoutingInterfaceRequestBody();
    $request->requestBody->defaultGateway = 'libero';
    $request->requestBody->interfaceIp = 'omnis';
    $request->requestBody->ipv6 = new CreateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6();
    $request->requestBody->ipv6->address = '277 Bernard Pike';
    $request->requestBody->ipv6->assignmentMode = 'nihil';
    $request->requestBody->ipv6->gateway = 'commodi';
    $request->requestBody->ipv6->prefix = 'deleniti';
    $request->requestBody->multicastRouting = CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum::DISABLED;
    $request->requestBody->name = 'Mr. Rodney Carroll';
    $request->requestBody->ospfSettings = new CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings();
    $request->requestBody->ospfSettings->area = 'deleniti';
    $request->requestBody->ospfSettings->cost = 922793;
    $request->requestBody->ospfSettings->isPassiveEnabled = false;
    $request->requestBody->subnet = 'sed';
    $request->requestBody->vlanId = 741192;
    $request->networkId = 'sint';
    $request->switchStackId = 'soluta';

    $response = $sdk->switch->createNetworkSwitchStackRoutingInterface($request);

    if ($response->createNetworkSwitchStackRoutingInterface201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchStackRoutingStaticRoute

Create a layer 3 static route for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingStaticRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingStaticRouteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchStackRoutingStaticRouteRequest();
    $request->requestBody = new CreateNetworkSwitchStackRoutingStaticRouteRequestBody();
    $request->requestBody->advertiseViaOspfEnabled = false;
    $request->requestBody->name = 'Estelle Kulas';
    $request->requestBody->nextHopIp = 'possimus';
    $request->requestBody->preferOverOspfRoutesEnabled = false;
    $request->requestBody->subnet = 'quia';
    $request->networkId = 'dolorum';
    $request->switchStackId = 'nihil';

    $response = $sdk->switch->createNetworkSwitchStackRoutingStaticRoute($request);

    if ($response->createNetworkSwitchStackRoutingStaticRoute201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cycleDeviceSwitchPorts

Cycle a set of switch ports

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CycleDeviceSwitchPortsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CycleDeviceSwitchPortsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CycleDeviceSwitchPortsRequest();
    $request->requestBody = new CycleDeviceSwitchPortsRequestBody();
    $request->requestBody->ports = [
        'molestiae',
        'fugiat',
        'ab',
        'debitis',
    ];
    $request->serial = 'dolorum';

    $response = $sdk->switch->cycleDeviceSwitchPorts($request);

    if ($response->cycleDeviceSwitchPorts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeviceSwitchRoutingInterface

Delete a layer 3 interface from the switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeviceSwitchRoutingInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeviceSwitchRoutingInterfaceRequest();
    $request->interfaceId = 'perferendis';
    $request->serial = 'voluptates';

    $response = $sdk->switch->deleteDeviceSwitchRoutingInterface($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeviceSwitchRoutingStaticRoute

Delete a layer 3 static route for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeviceSwitchRoutingStaticRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeviceSwitchRoutingStaticRouteRequest();
    $request->serial = 'quam';
    $request->staticRouteId = 'iste';

    $response = $sdk->switch->deleteDeviceSwitchRoutingStaticRoute($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchAccessPolicy

Delete an access policy for a switch network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchAccessPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchAccessPolicyRequest();
    $request->accessPolicyNumber = 'tenetur';
    $request->networkId = 'similique';

    $response = $sdk->switch->deleteNetworkSwitchAccessPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Remove a server from being trusted by Dynamic ARP Inspection on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest();
    $request->networkId = 'sint';
    $request->trustedServerId = 'nobis';

    $response = $sdk->switch->deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchLinkAggregation

Split a link aggregation group into separate ports

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchLinkAggregationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchLinkAggregationRequest();
    $request->linkAggregationId = 'distinctio';
    $request->networkId = 'earum';

    $response = $sdk->switch->deleteNetworkSwitchLinkAggregation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchPortSchedule

Delete a switch port schedule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchPortScheduleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchPortScheduleRequest();
    $request->networkId = 'veniam';
    $request->portScheduleId = 'maiores';

    $response = $sdk->switch->deleteNetworkSwitchPortSchedule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchQosRule

Delete a quality of service rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchQosRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchQosRuleRequest();
    $request->networkId = 'et';
    $request->qosRuleId = 'dignissimos';

    $response = $sdk->switch->deleteNetworkSwitchQosRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchRoutingMulticastRendezvousPoint

Delete a multicast rendezvous point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest();
    $request->networkId = 'sint';
    $request->rendezvousPointId = 'hic';

    $response = $sdk->switch->deleteNetworkSwitchRoutingMulticastRendezvousPoint($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchStack

Delete a stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchStackRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchStackRequest();
    $request->networkId = 'vel';
    $request->switchStackId = 'corporis';

    $response = $sdk->switch->deleteNetworkSwitchStack($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchStackRoutingInterface

Delete a layer 3 interface from a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchStackRoutingInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchStackRoutingInterfaceRequest();
    $request->interfaceId = 'sit';
    $request->networkId = 'libero';
    $request->switchStackId = 'quasi';

    $response = $sdk->switch->deleteNetworkSwitchStackRoutingInterface($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchStackRoutingStaticRoute

Delete a layer 3 static route for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchStackRoutingStaticRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchStackRoutingStaticRouteRequest();
    $request->networkId = 'earum';
    $request->staticRouteId = 'quam';
    $request->switchStackId = 'aut';

    $response = $sdk->switch->deleteNetworkSwitchStackRoutingStaticRoute($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchPort

Return a switch port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchPortRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchPortRequest();
    $request->portId = 'ducimus';
    $request->serial = 'repudiandae';

    $response = $sdk->switch->getDeviceSwitchPort($request);

    if ($response->getDeviceSwitchPort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchPorts

List the switch ports for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchPortsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchPortsRequest();
    $request->serial = 'ducimus';

    $response = $sdk->switch->getDeviceSwitchPorts($request);

    if ($response->getDeviceSwitchPorts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchPortsStatuses

Return the status for all the ports of a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchPortsStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchPortsStatusesRequest();
    $request->serial = 'officiis';
    $request->t0 = 'dolore';
    $request->timespan = 2054.86;

    $response = $sdk->switch->getDeviceSwitchPortsStatuses($request);

    if ($response->getDeviceSwitchPortsStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchPortsStatusesPackets

Return the packet counters for all the ports of a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchPortsStatusesPacketsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchPortsStatusesPacketsRequest();
    $request->serial = 'molestias';
    $request->t0 = 'ea';
    $request->timespan = 4886.99;

    $response = $sdk->switch->getDeviceSwitchPortsStatusesPackets($request);

    if ($response->getDeviceSwitchPortsStatusesPackets200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchRoutingInterface

Return a layer 3 interface for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchRoutingInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchRoutingInterfaceRequest();
    $request->interfaceId = 'sunt';
    $request->serial = 'non';

    $response = $sdk->switch->getDeviceSwitchRoutingInterface($request);

    if ($response->getDeviceSwitchRoutingInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchRoutingInterfaceDhcp

Return a layer 3 interface DHCP configuration for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchRoutingInterfaceDhcpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchRoutingInterfaceDhcpRequest();
    $request->interfaceId = 'soluta';
    $request->serial = 'similique';

    $response = $sdk->switch->getDeviceSwitchRoutingInterfaceDhcp($request);

    if ($response->getDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchRoutingInterfaces

List layer 3 interfaces for a switch. Those for a stack may be found under switch stack routing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchRoutingInterfacesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchRoutingInterfacesRequest();
    $request->serial = 'quo';

    $response = $sdk->switch->getDeviceSwitchRoutingInterfaces($request);

    if ($response->getDeviceSwitchRoutingInterfaces200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchRoutingStaticRoute

Return a layer 3 static route for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchRoutingStaticRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchRoutingStaticRouteRequest();
    $request->serial = 'optio';
    $request->staticRouteId = 'accusamus';

    $response = $sdk->switch->getDeviceSwitchRoutingStaticRoute($request);

    if ($response->getDeviceSwitchRoutingStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchRoutingStaticRoutes

List layer 3 static routes for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchRoutingStaticRoutesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchRoutingStaticRoutesRequest();
    $request->serial = 'ipsa';

    $response = $sdk->switch->getDeviceSwitchRoutingStaticRoutes($request);

    if ($response->getDeviceSwitchRoutingStaticRoutes200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchWarmSpare

Return warm spare configuration for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchWarmSpareRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchWarmSpareRequest();
    $request->serial = 'reprehenderit';

    $response = $sdk->switch->getDeviceSwitchWarmSpare($request);

    if ($response->getDeviceSwitchWarmSpare200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchAccessControlLists

Return the access control lists for a MS network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchAccessControlListsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchAccessControlListsRequest();
    $request->networkId = 'qui';

    $response = $sdk->switch->getNetworkSwitchAccessControlLists($request);

    if ($response->getNetworkSwitchAccessControlLists200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchAccessPolicies

List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchAccessPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchAccessPoliciesRequest();
    $request->networkId = 'similique';

    $response = $sdk->switch->getNetworkSwitchAccessPolicies($request);

    if ($response->getNetworkSwitchAccessPolicies200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchAccessPolicy

Return a specific access policy for a switch network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchAccessPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchAccessPolicyRequest();
    $request->accessPolicyNumber = 'expedita';
    $request->networkId = 'quibusdam';

    $response = $sdk->switch->getNetworkSwitchAccessPolicy($request);

    if ($response->getNetworkSwitchAccessPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchAlternateManagementInterface

Return the switch alternate management interface for the network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchAlternateManagementInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchAlternateManagementInterfaceRequest();
    $request->networkId = 'ex';

    $response = $sdk->switch->getNetworkSwitchAlternateManagementInterface($request);

    if ($response->getNetworkSwitchAlternateManagementInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchDhcpServerPolicy

Return the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchDhcpServerPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchDhcpServerPolicyRequest();
    $request->networkId = 'et';

    $response = $sdk->switch->getNetworkSwitchDhcpServerPolicy($request);

    if ($response->getNetworkSwitchDhcpServerPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers

Return the list of servers trusted by Dynamic ARP Inspection on this network. These are also known as whitelisted snoop entries

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest();
    $request->endingBefore = 'cupiditate';
    $request->networkId = 'dicta';
    $request->perPage = 526273;
    $request->startingAfter = 'facere';

    $response = $sdk->switch->getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers($request);

    if ($response->getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice

Return the devices that have a Dynamic ARP Inspection warning and their warnings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest();
    $request->endingBefore = 'magni';
    $request->networkId = 'reprehenderit';
    $request->perPage = 607180;
    $request->startingAfter = 'maxime';

    $response = $sdk->switch->getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice($request);

    if ($response->getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchDhcpV4ServersSeen

Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchDhcpV4ServersSeenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchDhcpV4ServersSeenRequest();
    $request->endingBefore = 'vitae';
    $request->networkId = 'alias';
    $request->perPage = 807007;
    $request->startingAfter = 'vitae';
    $request->t0 = 'blanditiis';
    $request->timespan = 3683.43;

    $response = $sdk->switch->getNetworkSwitchDhcpV4ServersSeen($request);

    if ($response->getNetworkSwitchDhcpV4ServersSeen200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchDscpToCosMappings

Return the DSCP to CoS mappings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchDscpToCosMappingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchDscpToCosMappingsRequest();
    $request->networkId = 'ab';

    $response = $sdk->switch->getNetworkSwitchDscpToCosMappings($request);

    if ($response->getNetworkSwitchDscpToCosMappings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchLinkAggregations

List link aggregation groups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchLinkAggregationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchLinkAggregationsRequest();
    $request->networkId = 'aliquid';

    $response = $sdk->switch->getNetworkSwitchLinkAggregations($request);

    if ($response->getNetworkSwitchLinkAggregations200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchMtu

Return the MTU configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchMtuRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchMtuRequest();
    $request->networkId = 'doloribus';

    $response = $sdk->switch->getNetworkSwitchMtu($request);

    if ($response->getNetworkSwitchMtu200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchPortSchedules

List switch port schedules

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchPortSchedulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchPortSchedulesRequest();
    $request->networkId = 'repellendus';

    $response = $sdk->switch->getNetworkSwitchPortSchedules($request);

    if ($response->getNetworkSwitchPortSchedules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchQosRule

Return a quality of service rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchQosRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchQosRuleRequest();
    $request->networkId = 'in';
    $request->qosRuleId = 'praesentium';

    $response = $sdk->switch->getNetworkSwitchQosRule($request);

    if ($response->getNetworkSwitchQosRule200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchQosRules

List quality of service rules

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchQosRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchQosRulesRequest();
    $request->networkId = 'rerum';

    $response = $sdk->switch->getNetworkSwitchQosRules($request);

    if ($response->getNetworkSwitchQosRules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchQosRulesOrder

Return the quality of service rule IDs by order in which they will be processed by the switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchQosRulesOrderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchQosRulesOrderRequest();
    $request->networkId = 'repudiandae';

    $response = $sdk->switch->getNetworkSwitchQosRulesOrder($request);

    if ($response->getNetworkSwitchQosRulesOrder200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchRoutingMulticast

Return multicast settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchRoutingMulticastRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchRoutingMulticastRequest();
    $request->networkId = 'fugit';

    $response = $sdk->switch->getNetworkSwitchRoutingMulticast($request);

    if ($response->getNetworkSwitchRoutingMulticast200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchRoutingMulticastRendezvousPoint

Return a multicast rendezvous point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchRoutingMulticastRendezvousPointRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchRoutingMulticastRendezvousPointRequest();
    $request->networkId = 'vel';
    $request->rendezvousPointId = 'fugit';

    $response = $sdk->switch->getNetworkSwitchRoutingMulticastRendezvousPoint($request);

    if ($response->getNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchRoutingMulticastRendezvousPoints

List multicast rendezvous points

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchRoutingMulticastRendezvousPointsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchRoutingMulticastRendezvousPointsRequest();
    $request->networkId = 'ab';

    $response = $sdk->switch->getNetworkSwitchRoutingMulticastRendezvousPoints($request);

    if ($response->getNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJSONArrays !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchRoutingOspf

Return layer 3 OSPF routing configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchRoutingOspfRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchRoutingOspfRequest();
    $request->networkId = 'quia';

    $response = $sdk->switch->getNetworkSwitchRoutingOspf($request);

    if ($response->getNetworkSwitchRoutingOspf200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchSettings

Returns the switch network settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchSettingsRequest();
    $request->networkId = 'esse';

    $response = $sdk->switch->getNetworkSwitchSettings($request);

    if ($response->getNetworkSwitchSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStack

Show a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStackRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStackRequest();
    $request->networkId = 'sed';
    $request->switchStackId = 'ea';

    $response = $sdk->switch->getNetworkSwitchStack($request);

    if ($response->getNetworkSwitchStack200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStackRoutingInterface

Return a layer 3 interface from a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStackRoutingInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStackRoutingInterfaceRequest();
    $request->interfaceId = 'odit';
    $request->networkId = 'quos';
    $request->switchStackId = 'doloribus';

    $response = $sdk->switch->getNetworkSwitchStackRoutingInterface($request);

    if ($response->getNetworkSwitchStackRoutingInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStackRoutingInterfaceDhcp

Return a layer 3 interface DHCP configuration for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStackRoutingInterfaceDhcpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStackRoutingInterfaceDhcpRequest();
    $request->interfaceId = 'officia';
    $request->networkId = 'ullam';
    $request->switchStackId = 'ipsa';

    $response = $sdk->switch->getNetworkSwitchStackRoutingInterfaceDhcp($request);

    if ($response->getNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStackRoutingInterfaces

List layer 3 interfaces for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStackRoutingInterfacesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStackRoutingInterfacesRequest();
    $request->networkId = 'ratione';
    $request->switchStackId = 'natus';

    $response = $sdk->switch->getNetworkSwitchStackRoutingInterfaces($request);

    if ($response->getNetworkSwitchStackRoutingInterfaces200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStackRoutingStaticRoute

Return a layer 3 static route for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStackRoutingStaticRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStackRoutingStaticRouteRequest();
    $request->networkId = 'vel';
    $request->staticRouteId = 'aspernatur';
    $request->switchStackId = 'blanditiis';

    $response = $sdk->switch->getNetworkSwitchStackRoutingStaticRoute($request);

    if ($response->getNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStackRoutingStaticRoutes

List layer 3 static routes for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStackRoutingStaticRoutesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStackRoutingStaticRoutesRequest();
    $request->networkId = 'eum';
    $request->switchStackId = 'esse';

    $response = $sdk->switch->getNetworkSwitchStackRoutingStaticRoutes($request);

    if ($response->getNetworkSwitchStackRoutingStaticRoutes200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStacks

List the switch stacks in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStacksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStacksRequest();
    $request->networkId = 'debitis';

    $response = $sdk->switch->getNetworkSwitchStacks($request);

    if ($response->getNetworkSwitchStacks200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStormControl

Return the storm control configuration for a switch network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStormControlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStormControlRequest();
    $request->networkId = 'esse';

    $response = $sdk->switch->getNetworkSwitchStormControl($request);

    if ($response->getNetworkSwitchStormControl200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStp

Returns STP settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStpRequest();
    $request->networkId = 'aspernatur';

    $response = $sdk->switch->getNetworkSwitchStp($request);

    if ($response->getNetworkSwitchStp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConfigTemplateSwitchProfilePort

Return a switch profile port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigTemplateSwitchProfilePortRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigTemplateSwitchProfilePortRequest();
    $request->configTemplateId = 'nam';
    $request->organizationId = 'neque';
    $request->portId = 'laborum';
    $request->profileId = 'autem';

    $response = $sdk->switch->getOrganizationConfigTemplateSwitchProfilePort($request);

    if ($response->getOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConfigTemplateSwitchProfilePorts

Return all the ports of a switch profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigTemplateSwitchProfilePortsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigTemplateSwitchProfilePortsRequest();
    $request->configTemplateId = 'minima';
    $request->organizationId = 'ipsa';
    $request->profileId = 'qui';

    $response = $sdk->switch->getOrganizationConfigTemplateSwitchProfilePorts($request);

    if ($response->getOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConfigTemplateSwitchProfiles

List the switch profiles for your switch template configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigTemplateSwitchProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigTemplateSwitchProfilesRequest();
    $request->configTemplateId = 'labore';
    $request->organizationId = 'rerum';

    $response = $sdk->switch->getOrganizationConfigTemplateSwitchProfiles($request);

    if ($response->getOrganizationConfigTemplateSwitchProfiles200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSwitchPortsBySwitch

List the switchports in an organization by switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSwitchPortsBySwitchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSwitchPortsBySwitchRequest();
    $request->configurationUpdatedAfter = 'inventore';
    $request->endingBefore = 'minima';
    $request->mac = 'molestiae';
    $request->macs = [
        'sint',
        'libero',
        'nobis',
        'laboriosam',
    ];
    $request->name = 'Edmond Kertzmann';
    $request->networkIds = [
        'ipsa',
        'voluptatum',
    ];
    $request->organizationId = 'molestiae';
    $request->perPage = 124093;
    $request->portProfileIds = [
        'unde',
        'provident',
        'nam',
        'voluptas',
    ];
    $request->serial = 'autem';
    $request->serials = [
        'officia',
    ];
    $request->startingAfter = 'ducimus';

    $response = $sdk->switch->getOrganizationSwitchPortsBySwitch($request);

    if ($response->getOrganizationSwitchPortsBySwitch200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeNetworkSwitchStack

Remove a switch from a stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveNetworkSwitchStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveNetworkSwitchStackRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveNetworkSwitchStackRequest();
    $request->requestBody = new RemoveNetworkSwitchStackRequestBody();
    $request->requestBody->serial = 'vero';
    $request->networkId = 'repudiandae';
    $request->switchStackId = 'sapiente';

    $response = $sdk->switch->removeNetworkSwitchStack($request);

    if ($response->removeNetworkSwitchStack200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceSwitchPort

Update a switch port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequestBodyProfile;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequestBodyStpGuardEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequestBodyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequestBodyUdldEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceSwitchPortRequest();
    $request->requestBody = new UpdateDeviceSwitchPortRequestBody();
    $request->requestBody->accessPolicyNumber = 73894;
    $request->requestBody->accessPolicyType = UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum::MAC_ALLOW_LIST;
    $request->requestBody->adaptivePolicyGroupId = 'voluptatum';
    $request->requestBody->allowedVlans = 'nam';
    $request->requestBody->daiTrusted = false;
    $request->requestBody->enabled = false;
    $request->requestBody->flexibleStackingEnabled = false;
    $request->requestBody->isolationEnabled = false;
    $request->requestBody->linkNegotiation = 'vel';
    $request->requestBody->macAllowList = [
        'optio',
        'facilis',
        'sed',
        'deleniti',
    ];
    $request->requestBody->name = 'Jacqueline Rau';
    $request->requestBody->peerSgtCapable = false;
    $request->requestBody->poeEnabled = false;
    $request->requestBody->portScheduleId = 'perspiciatis';
    $request->requestBody->profile = new UpdateDeviceSwitchPortRequestBodyProfile();
    $request->requestBody->profile->enabled = false;
    $request->requestBody->profile->id = '850ed2f4-a1e9-4c4a-a551-40e75726e003';
    $request->requestBody->profile->iname = 'porro';
    $request->requestBody->rstpEnabled = false;
    $request->requestBody->stickyMacAllowList = [
        'asperiores',
    ];
    $request->requestBody->stickyMacAllowListLimit = 12738;
    $request->requestBody->stormControlEnabled = false;
    $request->requestBody->stpGuard = UpdateDeviceSwitchPortRequestBodyStpGuardEnum::BPDU_GUARD;
    $request->requestBody->tags = [
        'aliquam',
        'architecto',
        'excepturi',
    ];
    $request->requestBody->type = UpdateDeviceSwitchPortRequestBodyTypeEnum::ACCESS;
    $request->requestBody->udld = UpdateDeviceSwitchPortRequestBodyUdldEnum::ALERT_ONLY;
    $request->requestBody->vlan = 99113;
    $request->requestBody->voiceVlan = 543177;
    $request->portId = 'cumque';
    $request->serial = 'saepe';

    $response = $sdk->switch->updateDeviceSwitchPort($request);

    if ($response->updateDeviceSwitchPort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceSwitchRoutingInterface

Update a layer 3 interface for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfV3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceSwitchRoutingInterfaceRequest();
    $request->requestBody = new UpdateDeviceSwitchRoutingInterfaceRequestBody();
    $request->requestBody->defaultGateway = 'accusamus';
    $request->requestBody->interfaceIp = 'incidunt';
    $request->requestBody->ipv6 = new UpdateDeviceSwitchRoutingInterfaceRequestBodyIpv6();
    $request->requestBody->ipv6->address = '76569 Gladys Oval';
    $request->requestBody->ipv6->assignmentMode = 'delectus';
    $request->requestBody->ipv6->gateway = 'eum';
    $request->requestBody->ipv6->prefix = 'delectus';
    $request->requestBody->multicastRouting = UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum::IGMP_SNOOPING_QUERIER;
    $request->requestBody->name = 'Darrin Boyer';
    $request->requestBody->ospfSettings = new UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings();
    $request->requestBody->ospfSettings->area = 'a';
    $request->requestBody->ospfSettings->cost = 60284;
    $request->requestBody->ospfSettings->isPassiveEnabled = false;
    $request->requestBody->ospfV3 = new UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfV3();
    $request->requestBody->ospfV3->area = 'sed';
    $request->requestBody->ospfV3->cost = 193299;
    $request->requestBody->ospfV3->isPassiveEnabled = false;
    $request->requestBody->subnet = 'minus';
    $request->requestBody->vlanId = 380543;
    $request->interfaceId = 'autem';
    $request->serial = 'omnis';

    $response = $sdk->switch->updateDeviceSwitchRoutingInterface($request);

    if ($response->updateDeviceSwitchRoutingInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceSwitchRoutingInterfaceDhcp

Update a layer 3 interface DHCP configuration for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceSwitchRoutingInterfaceDhcpRequest();
    $request->requestBody = new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody();
    $request->requestBody->bootFileName = 'itaque';
    $request->requestBody->bootNextServer = 'laboriosam';
    $request->requestBody->bootOptionsEnabled = false;
    $request->requestBody->dhcpLeaseTime = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum::THIRTY_MINUTES;
    $request->requestBody->dhcpMode = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum::DHCP_RELAY;
    $request->requestBody->dhcpOptions = [
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions(),
    ];
    $request->requestBody->dhcpRelayServerIps = [
        'voluptatem',
        'ab',
    ];
    $request->requestBody->dnsCustomNameservers = [
        'vero',
    ];
    $request->requestBody->dnsNameserversOption = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum::OPEN_DNS;
    $request->requestBody->fixedIpAssignments = [
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
    ];
    $request->requestBody->reservedIpRanges = [
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
    ];
    $request->interfaceId = 'quis';
    $request->serial = 'iusto';

    $response = $sdk->switch->updateDeviceSwitchRoutingInterfaceDhcp($request);

    if ($response->updateDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceSwitchRoutingStaticRoute

Update a layer 3 static route for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingStaticRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingStaticRouteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceSwitchRoutingStaticRouteRequest();
    $request->requestBody = new UpdateDeviceSwitchRoutingStaticRouteRequestBody();
    $request->requestBody->advertiseViaOspfEnabled = false;
    $request->requestBody->name = 'Isaac Legros';
    $request->requestBody->nextHopIp = 'in';
    $request->requestBody->preferOverOspfRoutesEnabled = false;
    $request->requestBody->subnet = 'odit';
    $request->serial = 'alias';
    $request->staticRouteId = 'impedit';

    $response = $sdk->switch->updateDeviceSwitchRoutingStaticRoute($request);

    if ($response->updateDeviceSwitchRoutingStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceSwitchWarmSpare

Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchWarmSpareRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchWarmSpareRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceSwitchWarmSpareRequest();
    $request->requestBody = new UpdateDeviceSwitchWarmSpareRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->spareSerial = 'ipsum';
    $request->serial = 'illo';

    $response = $sdk->switch->updateDeviceSwitchWarmSpare($request);

    if ($response->updateDeviceSwitchWarmSpare200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchAccessControlLists

Update the access control lists for a MS network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessControlListsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessControlListsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessControlListsRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchAccessControlListsRequest();
    $request->requestBody = new UpdateNetworkSwitchAccessControlListsRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkSwitchAccessControlListsRequestBodyRules(),
    ];
    $request->networkId = 'sequi';

    $response = $sdk->switch->updateNetworkSwitchAccessControlLists($request);

    if ($response->updateNetworkSwitchAccessControlLists200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchAccessPolicy

Update an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyDot1x;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyRadius;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchAccessPolicyRequest();
    $request->requestBody = new UpdateNetworkSwitchAccessPolicyRequestBody();
    $request->requestBody->accessPolicyType = UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum::MAC_AUTHENTICATION_BYPASS;
    $request->requestBody->dot1x = new UpdateNetworkSwitchAccessPolicyRequestBodyDot1x();
    $request->requestBody->dot1x->controlDirection = UpdateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum::BOTH;
    $request->requestBody->guestPortBouncing = false;
    $request->requestBody->guestVlanId = 638422;
    $request->requestBody->hostMode = UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum::MULTI_DOMAIN;
    $request->requestBody->increaseAccessSpeed = false;
    $request->requestBody->name = 'Lynne Batz';
    $request->requestBody->radius = new UpdateNetworkSwitchAccessPolicyRequestBodyRadius();
    $request->requestBody->radius->criticalAuth = new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth();
    $request->requestBody->radius->criticalAuth->dataVlanId = 895105;
    $request->requestBody->radius->criticalAuth->suspendPortBounce = false;
    $request->requestBody->radius->criticalAuth->voiceVlanId = 778856;
    $request->requestBody->radius->failedAuthVlanId = 536123;
    $request->requestBody->radius->reAuthenticationInterval = 399019;
    $request->requestBody->radiusAccountingEnabled = false;
    $request->requestBody->radiusAccountingServers = [
        new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers(),
        new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers(),
        new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers(),
    ];
    $request->requestBody->radiusCoaSupportEnabled = false;
    $request->requestBody->radiusGroupAttribute = 'blanditiis';
    $request->requestBody->radiusServers = [
        new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers(),
        new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers(),
        new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers(),
        new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers(),
    ];
    $request->requestBody->radiusTestingEnabled = false;
    $request->requestBody->urlRedirectWalledGardenEnabled = false;
    $request->requestBody->urlRedirectWalledGardenRanges = [
        'blanditiis',
        'debitis',
        'nobis',
        'vel',
    ];
    $request->requestBody->voiceVlanClients = false;
    $request->accessPolicyNumber = 'tenetur';
    $request->networkId = 'optio';

    $response = $sdk->switch->updateNetworkSwitchAccessPolicy($request);

    if ($response->updateNetworkSwitchAccessPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchAlternateManagementInterface

Update the switch alternate management interface for the network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAlternateManagementInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAlternateManagementInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchAlternateManagementInterfaceRequest();
    $request->requestBody = new UpdateNetworkSwitchAlternateManagementInterfaceRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->protocols = [
        UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum::RADIUS,
    ];
    $request->requestBody->switches = [
        new UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches(),
    ];
    $request->requestBody->vlanId = 175186;
    $request->networkId = 'rem';

    $response = $sdk->switch->updateNetworkSwitchAlternateManagementInterface($request);

    if ($response->updateNetworkSwitchAlternateManagementInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchDhcpServerPolicy

Update the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlerts;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlertsEmail;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyRequestBodyArpInspection;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchDhcpServerPolicyRequest();
    $request->requestBody = new UpdateNetworkSwitchDhcpServerPolicyRequestBody();
    $request->requestBody->alerts = new UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlerts();
    $request->requestBody->alerts->email = new UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlertsEmail();
    $request->requestBody->alerts->email->enabled = false;
    $request->requestBody->allowedServers = [
        'alias',
        'officia',
        'mollitia',
        'animi',
    ];
    $request->requestBody->arpInspection = new UpdateNetworkSwitchDhcpServerPolicyRequestBodyArpInspection();
    $request->requestBody->arpInspection->enabled = false;
    $request->requestBody->blockedServers = [
        'vero',
        'repudiandae',
        'sit',
        'aut',
    ];
    $request->requestBody->defaultPolicy = UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum::ALLOW;
    $request->networkId = 'accusamus';

    $response = $sdk->switch->updateNetworkSwitchDhcpServerPolicy($request);

    if ($response->updateNetworkSwitchDhcpServerPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Update a server that is trusted by Dynamic ARP Inspection on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest();
    $request->requestBody = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody();
    $request->requestBody->ipv4 = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4();
    $request->requestBody->ipv4->address = '647 Lueilwitz Lake';
    $request->requestBody->mac = 'neque';
    $request->requestBody->vlan = 127032;
    $request->networkId = 'harum';
    $request->trustedServerId = 'eveniet';

    $response = $sdk->switch->updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer($request);

    if ($response->updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchDscpToCosMappings

Update the DSCP to CoS mappings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDscpToCosMappingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDscpToCosMappingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchDscpToCosMappingsRequest();
    $request->requestBody = new UpdateNetworkSwitchDscpToCosMappingsRequestBody();
    $request->requestBody->mappings = [
        new UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings(),
        new UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings(),
    ];
    $request->networkId = 'alias';

    $response = $sdk->switch->updateNetworkSwitchDscpToCosMappings($request);

    if ($response->updateNetworkSwitchDscpToCosMappings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchLinkAggregation

Update a link aggregation group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchLinkAggregationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchLinkAggregationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchLinkAggregationRequest();
    $request->requestBody = new UpdateNetworkSwitchLinkAggregationRequestBody();
    $request->requestBody->switchPorts = [
        new UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts(),
        new UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts(),
        new UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts(),
    ];
    $request->requestBody->switchProfilePorts = [
        new UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
        new UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
        new UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
        new UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
    ];
    $request->linkAggregationId = 'exercitationem';
    $request->networkId = 'consequatur';

    $response = $sdk->switch->updateNetworkSwitchLinkAggregation($request);

    if ($response->updateNetworkSwitchLinkAggregation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchMtu

Update the MTU configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchMtuRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchMtuRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchMtuRequestBodyOverrides;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchMtuRequest();
    $request->requestBody = new UpdateNetworkSwitchMtuRequestBody();
    $request->requestBody->defaultMtuSize = 543079;
    $request->requestBody->overrides = [
        new UpdateNetworkSwitchMtuRequestBodyOverrides(),
        new UpdateNetworkSwitchMtuRequestBodyOverrides(),
    ];
    $request->networkId = 'sunt';

    $response = $sdk->switch->updateNetworkSwitchMtu($request);

    if ($response->updateNetworkSwitchMtu200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchPortSchedule

Update a switch port schedule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchPortScheduleRequest();
    $request->requestBody = new UpdateNetworkSwitchPortScheduleRequestBody();
    $request->requestBody->name = 'Mrs. Amy Wilderman';
    $request->requestBody->portSchedule = new UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule();
    $request->requestBody->portSchedule->friday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday();
    $request->requestBody->portSchedule->friday->active = false;
    $request->requestBody->portSchedule->friday->from = 'voluptatem';
    $request->requestBody->portSchedule->friday->to = 'tempore';
    $request->requestBody->portSchedule->monday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday();
    $request->requestBody->portSchedule->monday->active = false;
    $request->requestBody->portSchedule->monday->from = 'quo';
    $request->requestBody->portSchedule->monday->to = 'voluptates';
    $request->requestBody->portSchedule->saturday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday();
    $request->requestBody->portSchedule->saturday->active = false;
    $request->requestBody->portSchedule->saturday->from = 'enim';
    $request->requestBody->portSchedule->saturday->to = 'enim';
    $request->requestBody->portSchedule->sunday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday();
    $request->requestBody->portSchedule->sunday->active = false;
    $request->requestBody->portSchedule->sunday->from = 'officia';
    $request->requestBody->portSchedule->sunday->to = 'quas';
    $request->requestBody->portSchedule->thursday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday();
    $request->requestBody->portSchedule->thursday->active = false;
    $request->requestBody->portSchedule->thursday->from = 'ex';
    $request->requestBody->portSchedule->thursday->to = 'voluptatum';
    $request->requestBody->portSchedule->tuesday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday();
    $request->requestBody->portSchedule->tuesday->active = false;
    $request->requestBody->portSchedule->tuesday->from = 'iure';
    $request->requestBody->portSchedule->tuesday->to = 'veritatis';
    $request->requestBody->portSchedule->wednesday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday();
    $request->requestBody->portSchedule->wednesday->active = false;
    $request->requestBody->portSchedule->wednesday->from = 'modi';
    $request->requestBody->portSchedule->wednesday->to = 'ratione';
    $request->networkId = 'quisquam';
    $request->portScheduleId = 'iste';

    $response = $sdk->switch->updateNetworkSwitchPortSchedule($request);

    if ($response->updateNetworkSwitchPortSchedule200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchQosRule

Update a quality of service rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchQosRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchQosRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchQosRuleRequest();
    $request->requestBody = new UpdateNetworkSwitchQosRuleRequestBody();
    $request->requestBody->dscp = 463720;
    $request->requestBody->dstPort = 613344;
    $request->requestBody->dstPortRange = 'doloremque';
    $request->requestBody->protocol = UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum::TCP;
    $request->requestBody->srcPort = 944768;
    $request->requestBody->srcPortRange = 'asperiores';
    $request->requestBody->vlan = 496921;
    $request->networkId = 'sint';
    $request->qosRuleId = 'odio';

    $response = $sdk->switch->updateNetworkSwitchQosRule($request);

    if ($response->updateNetworkSwitchQosRule200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchQosRulesOrder

Update the order in which the rules should be processed by the switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchQosRulesOrderRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchQosRulesOrderRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchQosRulesOrderRequest();
    $request->requestBody = new UpdateNetworkSwitchQosRulesOrderRequestBody();
    $request->requestBody->ruleIds = [
        'exercitationem',
        'repellendus',
        'culpa',
    ];
    $request->networkId = 'vel';

    $response = $sdk->switch->updateNetworkSwitchQosRulesOrder($request);

    if ($response->updateNetworkSwitchQosRulesOrder200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchRoutingMulticast

Update multicast settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchRoutingMulticastRequest();
    $request->requestBody = new UpdateNetworkSwitchRoutingMulticastRequestBody();
    $request->requestBody->defaultSettings = new UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings();
    $request->requestBody->defaultSettings->floodUnknownMulticastTrafficEnabled = false;
    $request->requestBody->defaultSettings->igmpSnoopingEnabled = false;
    $request->requestBody->overrides = [
        new UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides(),
        new UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides(),
    ];
    $request->networkId = 'non';

    $response = $sdk->switch->updateNetworkSwitchRoutingMulticast($request);

    if ($response->updateNetworkSwitchRoutingMulticast200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchRoutingMulticastRendezvousPoint

Update a multicast rendezvous point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest();
    $request->requestBody = new UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody();
    $request->requestBody->interfaceIp = 'nobis';
    $request->requestBody->multicastGroup = 'in';
    $request->networkId = 'vero';
    $request->rendezvousPointId = 'reprehenderit';

    $response = $sdk->switch->updateNetworkSwitchRoutingMulticastRendezvousPoint($request);

    if ($response->updateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchRoutingOspf

Update layer 3 OSPF routing configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyAreas;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyV3;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchRoutingOspfRequest();
    $request->requestBody = new UpdateNetworkSwitchRoutingOspfRequestBody();
    $request->requestBody->areas = [
        new UpdateNetworkSwitchRoutingOspfRequestBodyAreas(),
        new UpdateNetworkSwitchRoutingOspfRequestBodyAreas(),
    ];
    $request->requestBody->deadTimerInSeconds = 531039;
    $request->requestBody->enabled = false;
    $request->requestBody->helloTimerInSeconds = 652552;
    $request->requestBody->md5AuthenticationEnabled = false;
    $request->requestBody->md5AuthenticationKey = new UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey();
    $request->requestBody->md5AuthenticationKey->id = 467320;
    $request->requestBody->md5AuthenticationKey->passphrase = 'dolore';
    $request->requestBody->v3 = new UpdateNetworkSwitchRoutingOspfRequestBodyV3();
    $request->requestBody->v3->areas = [
        new UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas(),
        new UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas(),
        new UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas(),
    ];
    $request->requestBody->v3->deadTimerInSeconds = 625403;
    $request->requestBody->v3->enabled = false;
    $request->requestBody->v3->helloTimerInSeconds = 635993;
    $request->networkId = 'culpa';

    $response = $sdk->switch->updateNetworkSwitchRoutingOspf($request);

    if ($response->updateNetworkSwitchRoutingOspf200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchSettings

Update switch network settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsRequestBodyPowerExceptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchSettingsRequest();
    $request->requestBody = new UpdateNetworkSwitchSettingsRequestBody();
    $request->requestBody->powerExceptions = [
        new UpdateNetworkSwitchSettingsRequestBodyPowerExceptions(),
    ];
    $request->requestBody->useCombinedPower = false;
    $request->requestBody->vlan = 511975;
    $request->networkId = 'dolor';

    $response = $sdk->switch->updateNetworkSwitchSettings($request);

    if ($response->updateNetworkSwitchSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchStackRoutingInterface

Update a layer 3 interface for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchStackRoutingInterfaceRequest();
    $request->requestBody = new UpdateNetworkSwitchStackRoutingInterfaceRequestBody();
    $request->requestBody->defaultGateway = 'consequuntur';
    $request->requestBody->interfaceIp = 'libero';
    $request->requestBody->ipv6 = new UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6();
    $request->requestBody->ipv6->address = '435 Bud Summit';
    $request->requestBody->ipv6->assignmentMode = 'odit';
    $request->requestBody->ipv6->gateway = 'dolorum';
    $request->requestBody->ipv6->prefix = 'velit';
    $request->requestBody->multicastRouting = UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum::IGMP_SNOOPING_QUERIER;
    $request->requestBody->name = 'Mrs. Virgil Raynor';
    $request->requestBody->ospfSettings = new UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings();
    $request->requestBody->ospfSettings->area = 'deserunt';
    $request->requestBody->ospfSettings->cost = 394652;
    $request->requestBody->ospfSettings->isPassiveEnabled = false;
    $request->requestBody->subnet = 'harum';
    $request->requestBody->vlanId = 812999;
    $request->interfaceId = 'debitis';
    $request->networkId = 'quo';
    $request->switchStackId = 'reprehenderit';

    $response = $sdk->switch->updateNetworkSwitchStackRoutingInterface($request);

    if ($response->updateNetworkSwitchStackRoutingInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchStackRoutingInterfaceDhcp

Update a layer 3 interface DHCP configuration for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest();
    $request->requestBody = new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody();
    $request->requestBody->bootFileName = 'repellat';
    $request->requestBody->bootNextServer = 'eius';
    $request->requestBody->bootOptionsEnabled = false;
    $request->requestBody->dhcpLeaseTime = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum::ONE_HOUR;
    $request->requestBody->dhcpMode = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum::DHCP_DISABLED;
    $request->requestBody->dhcpOptions = [
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions(),
    ];
    $request->requestBody->dhcpRelayServerIps = [
        'qui',
    ];
    $request->requestBody->dnsCustomNameservers = [
        'unde',
        'mollitia',
        'veniam',
        'at',
    ];
    $request->requestBody->dnsNameserversOption = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum::OPEN_DNS;
    $request->requestBody->fixedIpAssignments = [
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
    ];
    $request->requestBody->reservedIpRanges = [
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
    ];
    $request->interfaceId = 'laborum';
    $request->networkId = 'cumque';
    $request->switchStackId = 'repellendus';

    $response = $sdk->switch->updateNetworkSwitchStackRoutingInterfaceDhcp($request);

    if ($response->updateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchStackRoutingStaticRoute

Update a layer 3 static route for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingStaticRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingStaticRouteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchStackRoutingStaticRouteRequest();
    $request->requestBody = new UpdateNetworkSwitchStackRoutingStaticRouteRequestBody();
    $request->requestBody->advertiseViaOspfEnabled = false;
    $request->requestBody->name = 'Jane Nienow';
    $request->requestBody->nextHopIp = 'excepturi';
    $request->requestBody->preferOverOspfRoutesEnabled = false;
    $request->requestBody->subnet = 'voluptatum';
    $request->networkId = 'ab';
    $request->staticRouteId = 'rerum';
    $request->switchStackId = 'quis';

    $response = $sdk->switch->updateNetworkSwitchStackRoutingStaticRoute($request);

    if ($response->updateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchStormControl

Update the storm control configuration for a switch network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStormControlRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStormControlRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchStormControlRequest();
    $request->requestBody = new UpdateNetworkSwitchStormControlRequestBody();
    $request->requestBody->broadcastThreshold = 545706;
    $request->requestBody->multicastThreshold = 947032;
    $request->requestBody->unknownUnicastThreshold = 922472;
    $request->networkId = 'ex';

    $response = $sdk->switch->updateNetworkSwitchStormControl($request);

    if ($response->updateNetworkSwitchStormControl200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchStp

Updates STP settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStpRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStpRequestBodyStpBridgePriority;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchStpRequest();
    $request->requestBody = new UpdateNetworkSwitchStpRequestBody();
    $request->requestBody->rstpEnabled = false;
    $request->requestBody->stpBridgePriority = [
        new UpdateNetworkSwitchStpRequestBodyStpBridgePriority(),
        new UpdateNetworkSwitchStpRequestBodyStpBridgePriority(),
        new UpdateNetworkSwitchStpRequestBodyStpBridgePriority(),
    ];
    $request->networkId = 'magni';

    $response = $sdk->switch->updateNetworkSwitchStp($request);

    if ($response->updateNetworkSwitchStp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationConfigTemplateSwitchProfilePort

Update a switch profile port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationConfigTemplateSwitchProfilePortRequest();
    $request->requestBody = new UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody();
    $request->requestBody->accessPolicyNumber = 919666;
    $request->requestBody->accessPolicyType = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum::CUSTOM_ACCESS_POLICY;
    $request->requestBody->allowedVlans = 'maxime';
    $request->requestBody->daiTrusted = false;
    $request->requestBody->enabled = false;
    $request->requestBody->flexibleStackingEnabled = false;
    $request->requestBody->isolationEnabled = false;
    $request->requestBody->linkNegotiation = 'aspernatur';
    $request->requestBody->macAllowList = [
        'facilis',
        'necessitatibus',
        'sed',
        'nesciunt',
    ];
    $request->requestBody->name = 'Gordon Lemke';
    $request->requestBody->poeEnabled = false;
    $request->requestBody->portScheduleId = 'sed';
    $request->requestBody->profile = new UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile();
    $request->requestBody->profile->enabled = false;
    $request->requestBody->profile->id = '47d122c9-f676-478f-a279-58367363da07';
    $request->requestBody->profile->iname = 'excepturi';
    $request->requestBody->rstpEnabled = false;
    $request->requestBody->stickyMacAllowList = [
        'natus',
    ];
    $request->requestBody->stickyMacAllowListLimit = 406724;
    $request->requestBody->stormControlEnabled = false;
    $request->requestBody->stpGuard = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum::ROOT_GUARD;
    $request->requestBody->tags = [
        'officiis',
        'nam',
        'totam',
    ];
    $request->requestBody->type = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum::ACCESS;
    $request->requestBody->udld = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum::ALERT_ONLY;
    $request->requestBody->vlan = 543778;
    $request->requestBody->voiceVlan = 10185;
    $request->configTemplateId = 'reprehenderit';
    $request->organizationId = 'adipisci';
    $request->portId = 'voluptatem';
    $request->profileId = 'illum';

    $response = $sdk->switch->updateOrganizationConfigTemplateSwitchProfilePort($request);

    if ($response->updateOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
