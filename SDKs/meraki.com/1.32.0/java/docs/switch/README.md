# switch_

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddNetworkSwitchStackRequest;
import org.openapis.openapi.models.operations.AddNetworkSwitchStackRequestBody;
import org.openapis.openapi.models.operations.AddNetworkSwitchStackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddNetworkSwitchStackRequest req = new AddNetworkSwitchStackRequest(                new AddNetworkSwitchStackRequestBody("aliquam");, "commodi", "modi");            

            AddNetworkSwitchStackResponse res = sdk.switch_.addNetworkSwitchStack(req);

            if (res.addNetworkSwitchStack200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloneOrganizationSwitchDevices

Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloneOrganizationSwitchDevicesRequest;
import org.openapis.openapi.models.operations.CloneOrganizationSwitchDevicesRequestBody;
import org.openapis.openapi.models.operations.CloneOrganizationSwitchDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CloneOrganizationSwitchDevicesRequest req = new CloneOrganizationSwitchDevicesRequest(                new CloneOrganizationSwitchDevicesRequestBody("neque",                 new String[]{{
                                                add("minima"),
                                                add("ipsa"),
                                            }});, "perferendis");            

            CloneOrganizationSwitchDevicesResponse res = sdk.switch_.cloneOrganizationSwitchDevices(req);

            if (res.cloneOrganizationSwitchDevices200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeviceSwitchRoutingInterface

Create a layer 3 interface for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeviceSwitchRoutingInterfaceRequest;
import org.openapis.openapi.models.operations.CreateDeviceSwitchRoutingInterfaceRequestBody;
import org.openapis.openapi.models.operations.CreateDeviceSwitchRoutingInterfaceRequestBodyIpv6;
import org.openapis.openapi.models.operations.CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum;
import org.openapis.openapi.models.operations.CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings;
import org.openapis.openapi.models.operations.CreateDeviceSwitchRoutingInterfaceRequestBodyOspfV3;
import org.openapis.openapi.models.operations.CreateDeviceSwitchRoutingInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeviceSwitchRoutingInterfaceRequest req = new CreateDeviceSwitchRoutingInterfaceRequest("aliquam") {{
                requestBody = new CreateDeviceSwitchRoutingInterfaceRequestBody() {{
                    defaultGateway = "earum";
                    interfaceIp = "commodi";
                    ipv6 = new CreateDeviceSwitchRoutingInterfaceRequestBodyIpv6() {{
                        address = "756 Lesch Ridge";
                        assignmentMode = "eaque";
                        gateway = "in";
                        prefix = "explicabo";
                    }};;
                    multicastRouting = CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum.ENABLED;
                    name = "Debra Nikolaus Sr.";
                    ospfSettings = new CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings() {{
                        area = "id";
                        cost = 107027L;
                        isPassiveEnabled = false;
                    }};;
                    ospfV3 = new CreateDeviceSwitchRoutingInterfaceRequestBodyOspfV3() {{
                        area = "illum";
                        cost = 203752L;
                        isPassiveEnabled = false;
                    }};;
                    subnet = "magni";
                    vlanId = 568498L;
                }};;
            }};            

            CreateDeviceSwitchRoutingInterfaceResponse res = sdk.switch_.createDeviceSwitchRoutingInterface(req);

            if (res.createDeviceSwitchRoutingInterface201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeviceSwitchRoutingStaticRoute

Create a layer 3 static route for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeviceSwitchRoutingStaticRouteRequest;
import org.openapis.openapi.models.operations.CreateDeviceSwitchRoutingStaticRouteRequestBody;
import org.openapis.openapi.models.operations.CreateDeviceSwitchRoutingStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeviceSwitchRoutingStaticRouteRequest req = new CreateDeviceSwitchRoutingStaticRouteRequest(                new CreateDeviceSwitchRoutingStaticRouteRequestBody("quasi", "quibusdam") {{
                                advertiseViaOspfEnabled = false;
                                name = "Betsy Stark";
                                preferOverOspfRoutesEnabled = false;
                            }};, "maiores");            

            CreateDeviceSwitchRoutingStaticRouteResponse res = sdk.switch_.createDeviceSwitchRoutingStaticRoute(req);

            if (res.createDeviceSwitchRoutingStaticRoute201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkSwitchAccessPolicy

Create an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBodyDot1x;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBodyRadius;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchAccessPolicyRequest req = new CreateNetworkSwitchAccessPolicyRequest(                new CreateNetworkSwitchAccessPolicyRequestBody(CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum.MULTI_DOMAIN, "non", false, false,                 new org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers[]{{
                                                add(new CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers("nemo", 898735L, "fuga") {{
                                                    host = "suscipit";
                                                    port = 447463L;
                                                    secret = "reiciendis";
                                                }}),
                                                add(new CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers("suscipit", 547484L, "sed") {{
                                                    host = "cumque";
                                                    port = 416414L;
                                                    secret = "aut";
                                                }}),
                                            }}, false, false) {{
                                accessPolicyType = CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum.MAC_AUTHENTICATION_BYPASS;
                                dot1x = new CreateNetworkSwitchAccessPolicyRequestBodyDot1x() {{
                                    controlDirection = CreateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum.INBOUND;
                                }};;
                                guestPortBouncing = false;
                                guestVlanId = 988428L;
                                increaseAccessSpeed = false;
                                radius = new CreateNetworkSwitchAccessPolicyRequestBodyRadius() {{
                                    criticalAuth = new CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth() {{
                                        dataVlanId = 766556L;
                                        suspendPortBounce = false;
                                        voiceVlanId = 759893L;
                                    }};;
                                    failedAuthVlanId = 333405L;
                                    reAuthenticationInterval = 753127L;
                                }};;
                                radiusAccountingServers = new org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers[]{{
                                    add(new CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers("odio", 197440L, "doloribus") {{
                                        host = "aperiam";
                                        port = 453811L;
                                        secret = "earum";
                                    }}),
                                    add(new CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers("corrupti", 697724L, "facere") {{
                                        host = "voluptas";
                                        port = 116820L;
                                        secret = "fugiat";
                                    }}),
                                    add(new CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers("magnam", 239827L, "excepturi") {{
                                        host = "cumque";
                                        port = 514883L;
                                        secret = "cupiditate";
                                    }}),
                                    add(new CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers("ipsam", 44892L, "neque") {{
                                        host = "earum";
                                        port = 990604L;
                                        secret = "dolorem";
                                    }}),
                                }};
                                radiusGroupAttribute = "aut";
                                urlRedirectWalledGardenRanges = new String[]{{
                                    add("quia"),
                                    add("esse"),
                                }};
                                voiceVlanClients = false;
                            }};, "libero");            

            CreateNetworkSwitchAccessPolicyResponse res = sdk.switch_.createNetworkSwitchAccessPolicy(req);

            if (res.createNetworkSwitchAccessPolicy201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Add a server to be trusted by Dynamic ARP Inspection on this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4;
import org.openapis.openapi.models.operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest req = new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest(                new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody(                new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4() {{
                                                address = "10519 Hartmann Tunnel";
                                            }};, "quos", 966280L);, "modi");            

            CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse res = sdk.switch_.createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req);

            if (res.createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkSwitchLinkAggregation

Create a link aggregation group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchLinkAggregationRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchLinkAggregationRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts;
import org.openapis.openapi.models.operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts;
import org.openapis.openapi.models.operations.CreateNetworkSwitchLinkAggregationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchLinkAggregationRequest req = new CreateNetworkSwitchLinkAggregationRequest("ab") {{
                requestBody = new CreateNetworkSwitchLinkAggregationRequestBody() {{
                    switchPorts = new org.openapis.openapi.models.operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts[]{{
                        add(new CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts("distinctio", "quas") {{
                            portId = "eaque";
                            serial = "quos";
                        }}),
                        add(new CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts("recusandae", "aliquam") {{
                            portId = "iure";
                            serial = "minus";
                        }}),
                        add(new CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts("nostrum", "sint") {{
                            portId = "magnam";
                            serial = "eum";
                        }}),
                        add(new CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts("placeat", "odio") {{
                            portId = "quam";
                            serial = "quae";
                        }}),
                    }};
                    switchProfilePorts = new org.openapis.openapi.models.operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts[]{{
                        add(new CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts("veritatis", "impedit") {{
                            portId = "aliquam";
                            profile = "reiciendis";
                        }}),
                    }};
                }};;
            }};            

            CreateNetworkSwitchLinkAggregationResponse res = sdk.switch_.createNetworkSwitchLinkAggregation(req);

            if (res.createNetworkSwitchLinkAggregation201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkSwitchPortSchedule

Add a switch port schedule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleRequestBodyPortSchedule;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchPortScheduleRequest req = new CreateNetworkSwitchPortScheduleRequest(                new CreateNetworkSwitchPortScheduleRequestBody("architecto") {{
                                portSchedule = new CreateNetworkSwitchPortScheduleRequestBodyPortSchedule() {{
                                    friday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday() {{
                                        active = false;
                                        from = "asperiores";
                                        to = "ratione";
                                    }};;
                                    monday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday() {{
                                        active = false;
                                        from = "libero";
                                        to = "dicta";
                                    }};;
                                    saturday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday() {{
                                        active = false;
                                        from = "harum";
                                        to = "ipsam";
                                    }};;
                                    sunday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday() {{
                                        active = false;
                                        from = "ea";
                                        to = "maiores";
                                    }};;
                                    thursday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday() {{
                                        active = false;
                                        from = "impedit";
                                        to = "minima";
                                    }};;
                                    tuesday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday() {{
                                        active = false;
                                        from = "temporibus";
                                        to = "quisquam";
                                    }};;
                                    wednesday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday() {{
                                        active = false;
                                        from = "veritatis";
                                        to = "accusamus";
                                    }};;
                                }};;
                            }};, "ullam");            

            CreateNetworkSwitchPortScheduleResponse res = sdk.switch_.createNetworkSwitchPortSchedule(req);

            if (res.createNetworkSwitchPortSchedule201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkSwitchQosRule

Add a quality of service rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchQosRuleRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchQosRuleRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchQosRuleRequestBodyProtocolEnum;
import org.openapis.openapi.models.operations.CreateNetworkSwitchQosRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchQosRuleRequest req = new CreateNetworkSwitchQosRuleRequest(                new CreateNetworkSwitchQosRuleRequestBody(894190L) {{
                                dscp = 743032L;
                                dstPort = 423621L;
                                dstPortRange = "ut";
                                protocol = CreateNetworkSwitchQosRuleRequestBodyProtocolEnum.TCP;
                                srcPort = 727222L;
                                srcPortRange = "magni";
                            }};, "nostrum");            

            CreateNetworkSwitchQosRuleResponse res = sdk.switch_.createNetworkSwitchQosRule(req);

            if (res.createNetworkSwitchQosRule201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkSwitchRoutingMulticastRendezvousPoint

Create a multicast rendezvous point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchRoutingMulticastRendezvousPointRequest req = new CreateNetworkSwitchRoutingMulticastRendezvousPointRequest(                new CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody("itaque", "a");, "perferendis");            

            CreateNetworkSwitchRoutingMulticastRendezvousPointResponse res = sdk.switch_.createNetworkSwitchRoutingMulticastRendezvousPoint(req);

            if (res.createNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkSwitchStack

Create a stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchStackRequest req = new CreateNetworkSwitchStackRequest(                new CreateNetworkSwitchStackRequestBody("exercitationem",                 new String[]{{
                                                add("reiciendis"),
                                            }});, "quisquam");            

            CreateNetworkSwitchStackResponse res = sdk.switch_.createNetworkSwitchStack(req);

            if (res.createNetworkSwitchStack201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkSwitchStackRoutingInterface

Create a layer 3 interface for a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRoutingInterfaceRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRoutingInterfaceRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRoutingInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchStackRoutingInterfaceRequest req = new CreateNetworkSwitchStackRoutingInterfaceRequest(                new CreateNetworkSwitchStackRoutingInterfaceRequestBody("veritatis", 890534L) {{
                                defaultGateway = "sed";
                                interfaceIp = "aliquam";
                                ipv6 = new CreateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6() {{
                                    address = "383 Will Point";
                                    assignmentMode = "unde";
                                    gateway = "consequuntur";
                                    prefix = "ex";
                                }};;
                                multicastRouting = CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum.IGMP_SNOOPING_QUERIER;
                                ospfSettings = new CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings() {{
                                    area = "itaque";
                                    cost = 644775L;
                                    isPassiveEnabled = false;
                                }};;
                                subnet = "reiciendis";
                            }};, "at", "explicabo");            

            CreateNetworkSwitchStackRoutingInterfaceResponse res = sdk.switch_.createNetworkSwitchStackRoutingInterface(req);

            if (res.createNetworkSwitchStackRoutingInterface201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkSwitchStackRoutingStaticRoute

Create a layer 3 static route for a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRoutingStaticRouteRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRoutingStaticRouteRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRoutingStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchStackRoutingStaticRouteRequest req = new CreateNetworkSwitchStackRoutingStaticRouteRequest(                new CreateNetworkSwitchStackRoutingStaticRouteRequestBody("tempore", "beatae") {{
                                advertiseViaOspfEnabled = false;
                                name = "Fred Lindgren DDS";
                                preferOverOspfRoutesEnabled = false;
                            }};, "animi", "repellat");            

            CreateNetworkSwitchStackRoutingStaticRouteResponse res = sdk.switch_.createNetworkSwitchStackRoutingStaticRoute(req);

            if (res.createNetworkSwitchStackRoutingStaticRoute201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cycleDeviceSwitchPorts

Cycle a set of switch ports

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CycleDeviceSwitchPortsRequest;
import org.openapis.openapi.models.operations.CycleDeviceSwitchPortsRequestBody;
import org.openapis.openapi.models.operations.CycleDeviceSwitchPortsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CycleDeviceSwitchPortsRequest req = new CycleDeviceSwitchPortsRequest(                new CycleDeviceSwitchPortsRequestBody(                new String[]{{
                                                add("voluptate"),
                                                add("id"),
                                                add("beatae"),
                                            }});, "eveniet");            

            CycleDeviceSwitchPortsResponse res = sdk.switch_.cycleDeviceSwitchPorts(req);

            if (res.cycleDeviceSwitchPorts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDeviceSwitchRoutingInterface

Delete a layer 3 interface from the switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDeviceSwitchRoutingInterfaceRequest;
import org.openapis.openapi.models.operations.DeleteDeviceSwitchRoutingInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDeviceSwitchRoutingInterfaceRequest req = new DeleteDeviceSwitchRoutingInterfaceRequest("corporis", "harum");            

            DeleteDeviceSwitchRoutingInterfaceResponse res = sdk.switch_.deleteDeviceSwitchRoutingInterface(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDeviceSwitchRoutingStaticRoute

Delete a layer 3 static route for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDeviceSwitchRoutingStaticRouteRequest;
import org.openapis.openapi.models.operations.DeleteDeviceSwitchRoutingStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDeviceSwitchRoutingStaticRouteRequest req = new DeleteDeviceSwitchRoutingStaticRouteRequest("eos", "ad");            

            DeleteDeviceSwitchRoutingStaticRouteResponse res = sdk.switch_.deleteDeviceSwitchRoutingStaticRoute(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchAccessPolicy

Delete an access policy for a switch network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchAccessPolicyRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchAccessPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchAccessPolicyRequest req = new DeleteNetworkSwitchAccessPolicyRequest("ex", "at");            

            DeleteNetworkSwitchAccessPolicyResponse res = sdk.switch_.deleteNetworkSwitchAccessPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Remove a server from being trusted by Dynamic ARP Inspection on this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest req = new DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest("eveniet", "consequuntur");            

            DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse res = sdk.switch_.deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchLinkAggregation

Split a link aggregation group into separate ports

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchLinkAggregationRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchLinkAggregationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchLinkAggregationRequest req = new DeleteNetworkSwitchLinkAggregationRequest("asperiores", "deserunt");            

            DeleteNetworkSwitchLinkAggregationResponse res = sdk.switch_.deleteNetworkSwitchLinkAggregation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchPortSchedule

Delete a switch port schedule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchPortScheduleRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchPortScheduleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchPortScheduleRequest req = new DeleteNetworkSwitchPortScheduleRequest("veniam", "iste");            

            DeleteNetworkSwitchPortScheduleResponse res = sdk.switch_.deleteNetworkSwitchPortSchedule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchQosRule

Delete a quality of service rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchQosRuleRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchQosRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchQosRuleRequest req = new DeleteNetworkSwitchQosRuleRequest("animi", "modi");            

            DeleteNetworkSwitchQosRuleResponse res = sdk.switch_.deleteNetworkSwitchQosRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchRoutingMulticastRendezvousPoint

Delete a multicast rendezvous point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest req = new DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest("laboriosam", "illum");            

            DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse res = sdk.switch_.deleteNetworkSwitchRoutingMulticastRendezvousPoint(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchStack

Delete a stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchStackRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchStackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchStackRequest req = new DeleteNetworkSwitchStackRequest("provident", "aliquam");            

            DeleteNetworkSwitchStackResponse res = sdk.switch_.deleteNetworkSwitchStack(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchStackRoutingInterface

Delete a layer 3 interface from a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchStackRoutingInterfaceRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchStackRoutingInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchStackRoutingInterfaceRequest req = new DeleteNetworkSwitchStackRoutingInterfaceRequest("sit", "tenetur", "dolores");            

            DeleteNetworkSwitchStackRoutingInterfaceResponse res = sdk.switch_.deleteNetworkSwitchStackRoutingInterface(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchStackRoutingStaticRoute

Delete a layer 3 static route for a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchStackRoutingStaticRouteRequest req = new DeleteNetworkSwitchStackRoutingStaticRouteRequest("veritatis", "nam", "suscipit");            

            DeleteNetworkSwitchStackRoutingStaticRouteResponse res = sdk.switch_.deleteNetworkSwitchStackRoutingStaticRoute(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchPort

Return a switch port

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchPortRequest req = new GetDeviceSwitchPortRequest("temporibus", "adipisci");            

            GetDeviceSwitchPortResponse res = sdk.switch_.getDeviceSwitchPort(req);

            if (res.getDeviceSwitchPort200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchPorts

List the switch ports for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortsRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchPortsRequest req = new GetDeviceSwitchPortsRequest("laborum");            

            GetDeviceSwitchPortsResponse res = sdk.switch_.getDeviceSwitchPorts(req);

            if (res.getDeviceSwitchPorts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchPortsStatuses

Return the status for all the ports of a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortsStatusesRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortsStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchPortsStatusesRequest req = new GetDeviceSwitchPortsStatusesRequest("aliquid") {{
                t0 = "enim";
                timespan = 6735.03;
            }};            

            GetDeviceSwitchPortsStatusesResponse res = sdk.switch_.getDeviceSwitchPortsStatuses(req);

            if (res.getDeviceSwitchPortsStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchPortsStatusesPackets

Return the packet counters for all the ports of a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortsStatusesPacketsRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortsStatusesPacketsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchPortsStatusesPacketsRequest req = new GetDeviceSwitchPortsStatusesPacketsRequest("reprehenderit") {{
                t0 = "esse";
                timespan = 2785.53;
            }};            

            GetDeviceSwitchPortsStatusesPacketsResponse res = sdk.switch_.getDeviceSwitchPortsStatusesPackets(req);

            if (res.getDeviceSwitchPortsStatusesPackets200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchRoutingInterface

Return a layer 3 interface for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchRoutingInterfaceRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchRoutingInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchRoutingInterfaceRequest req = new GetDeviceSwitchRoutingInterfaceRequest("iste", "odit");            

            GetDeviceSwitchRoutingInterfaceResponse res = sdk.switch_.getDeviceSwitchRoutingInterface(req);

            if (res.getDeviceSwitchRoutingInterface200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchRoutingInterfaceDhcp

Return a layer 3 interface DHCP configuration for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchRoutingInterfaceDhcpRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchRoutingInterfaceDhcpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchRoutingInterfaceDhcpRequest req = new GetDeviceSwitchRoutingInterfaceDhcpRequest("tempore", "cum");            

            GetDeviceSwitchRoutingInterfaceDhcpResponse res = sdk.switch_.getDeviceSwitchRoutingInterfaceDhcp(req);

            if (res.getDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchRoutingInterfaces

List layer 3 interfaces for a switch. Those for a stack may be found under switch stack routing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchRoutingInterfacesRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchRoutingInterfacesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchRoutingInterfacesRequest req = new GetDeviceSwitchRoutingInterfacesRequest("pariatur");            

            GetDeviceSwitchRoutingInterfacesResponse res = sdk.switch_.getDeviceSwitchRoutingInterfaces(req);

            if (res.getDeviceSwitchRoutingInterfaces200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchRoutingStaticRoute

Return a layer 3 static route for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchRoutingStaticRouteRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchRoutingStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchRoutingStaticRouteRequest req = new GetDeviceSwitchRoutingStaticRouteRequest("neque", "pariatur");            

            GetDeviceSwitchRoutingStaticRouteResponse res = sdk.switch_.getDeviceSwitchRoutingStaticRoute(req);

            if (res.getDeviceSwitchRoutingStaticRoute200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchRoutingStaticRoutes

List layer 3 static routes for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchRoutingStaticRoutesRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchRoutingStaticRoutesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchRoutingStaticRoutesRequest req = new GetDeviceSwitchRoutingStaticRoutesRequest("a");            

            GetDeviceSwitchRoutingStaticRoutesResponse res = sdk.switch_.getDeviceSwitchRoutingStaticRoutes(req);

            if (res.getDeviceSwitchRoutingStaticRoutes200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchWarmSpare

Return warm spare configuration for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchWarmSpareRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchWarmSpareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchWarmSpareRequest req = new GetDeviceSwitchWarmSpareRequest("quis");            

            GetDeviceSwitchWarmSpareResponse res = sdk.switch_.getDeviceSwitchWarmSpare(req);

            if (res.getDeviceSwitchWarmSpare200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchAccessControlLists

Return the access control lists for a MS network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchAccessControlListsRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchAccessControlListsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchAccessControlListsRequest req = new GetNetworkSwitchAccessControlListsRequest("rem");            

            GetNetworkSwitchAccessControlListsResponse res = sdk.switch_.getNetworkSwitchAccessControlLists(req);

            if (res.getNetworkSwitchAccessControlLists200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchAccessPolicies

List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchAccessPoliciesRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchAccessPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchAccessPoliciesRequest req = new GetNetworkSwitchAccessPoliciesRequest("minus");            

            GetNetworkSwitchAccessPoliciesResponse res = sdk.switch_.getNetworkSwitchAccessPolicies(req);

            if (res.getNetworkSwitchAccessPolicies200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchAccessPolicy

Return a specific access policy for a switch network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchAccessPolicyRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchAccessPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchAccessPolicyRequest req = new GetNetworkSwitchAccessPolicyRequest("consequuntur", "doloribus");            

            GetNetworkSwitchAccessPolicyResponse res = sdk.switch_.getNetworkSwitchAccessPolicy(req);

            if (res.getNetworkSwitchAccessPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchAlternateManagementInterface

Return the switch alternate management interface for the network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchAlternateManagementInterfaceRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchAlternateManagementInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchAlternateManagementInterfaceRequest req = new GetNetworkSwitchAlternateManagementInterfaceRequest("id");            

            GetNetworkSwitchAlternateManagementInterfaceResponse res = sdk.switch_.getNetworkSwitchAlternateManagementInterface(req);

            if (res.getNetworkSwitchAlternateManagementInterface200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchDhcpServerPolicy

Return the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpServerPolicyRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpServerPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchDhcpServerPolicyRequest req = new GetNetworkSwitchDhcpServerPolicyRequest("suscipit");            

            GetNetworkSwitchDhcpServerPolicyResponse res = sdk.switch_.getNetworkSwitchDhcpServerPolicy(req);

            if (res.getNetworkSwitchDhcpServerPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers

Return the list of servers trusted by Dynamic ARP Inspection on this network. These are also known as whitelisted snoop entries

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest req = new GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest("quae") {{
                endingBefore = "temporibus";
                perPage = 330920L;
                startingAfter = "beatae";
            }};            

            GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersResponse res = sdk.switch_.getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers(req);

            if (res.getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice

Return the devices that have a Dynamic ARP Inspection warning and their warnings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest req = new GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest("eum") {{
                endingBefore = "sequi";
                perPage = 83131L;
                startingAfter = "vitae";
            }};            

            GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceResponse res = sdk.switch_.getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice(req);

            if (res.getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchDhcpV4ServersSeen

Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpV4ServersSeenRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpV4ServersSeenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchDhcpV4ServersSeenRequest req = new GetNetworkSwitchDhcpV4ServersSeenRequest("quidem") {{
                endingBefore = "sapiente";
                perPage = 356058L;
                startingAfter = "consequuntur";
                t0 = "eveniet";
                timespan = 9912.24;
            }};            

            GetNetworkSwitchDhcpV4ServersSeenResponse res = sdk.switch_.getNetworkSwitchDhcpV4ServersSeen(req);

            if (res.getNetworkSwitchDhcpV4ServersSeen200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchDscpToCosMappings

Return the DSCP to CoS mappings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchDscpToCosMappingsRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchDscpToCosMappingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchDscpToCosMappingsRequest req = new GetNetworkSwitchDscpToCosMappingsRequest("placeat");            

            GetNetworkSwitchDscpToCosMappingsResponse res = sdk.switch_.getNetworkSwitchDscpToCosMappings(req);

            if (res.getNetworkSwitchDscpToCosMappings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchLinkAggregations

List link aggregation groups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchLinkAggregationsRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchLinkAggregationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchLinkAggregationsRequest req = new GetNetworkSwitchLinkAggregationsRequest("inventore");            

            GetNetworkSwitchLinkAggregationsResponse res = sdk.switch_.getNetworkSwitchLinkAggregations(req);

            if (res.getNetworkSwitchLinkAggregations200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchMtu

Return the MTU configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchMtuRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchMtuResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchMtuRequest req = new GetNetworkSwitchMtuRequest("libero");            

            GetNetworkSwitchMtuResponse res = sdk.switch_.getNetworkSwitchMtu(req);

            if (res.getNetworkSwitchMtu200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchPortSchedules

List switch port schedules

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchPortSchedulesRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchPortSchedulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchPortSchedulesRequest req = new GetNetworkSwitchPortSchedulesRequest("voluptatum");            

            GetNetworkSwitchPortSchedulesResponse res = sdk.switch_.getNetworkSwitchPortSchedules(req);

            if (res.getNetworkSwitchPortSchedules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchQosRule

Return a quality of service rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchQosRuleRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchQosRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchQosRuleRequest req = new GetNetworkSwitchQosRuleRequest("beatae", "nesciunt");            

            GetNetworkSwitchQosRuleResponse res = sdk.switch_.getNetworkSwitchQosRule(req);

            if (res.getNetworkSwitchQosRule200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchQosRules

List quality of service rules

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchQosRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchQosRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchQosRulesRequest req = new GetNetworkSwitchQosRulesRequest("provident");            

            GetNetworkSwitchQosRulesResponse res = sdk.switch_.getNetworkSwitchQosRules(req);

            if (res.getNetworkSwitchQosRules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchQosRulesOrder

Return the quality of service rule IDs by order in which they will be processed by the switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchQosRulesOrderRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchQosRulesOrderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchQosRulesOrderRequest req = new GetNetworkSwitchQosRulesOrderRequest("voluptates");            

            GetNetworkSwitchQosRulesOrderResponse res = sdk.switch_.getNetworkSwitchQosRulesOrder(req);

            if (res.getNetworkSwitchQosRulesOrder200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchRoutingMulticast

Return multicast settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchRoutingMulticastRequest req = new GetNetworkSwitchRoutingMulticastRequest("corporis");            

            GetNetworkSwitchRoutingMulticastResponse res = sdk.switch_.getNetworkSwitchRoutingMulticast(req);

            if (res.getNetworkSwitchRoutingMulticast200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchRoutingMulticastRendezvousPoint

Return a multicast rendezvous point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchRoutingMulticastRendezvousPointRequest req = new GetNetworkSwitchRoutingMulticastRendezvousPointRequest("necessitatibus", "hic");            

            GetNetworkSwitchRoutingMulticastRendezvousPointResponse res = sdk.switch_.getNetworkSwitchRoutingMulticastRendezvousPoint(req);

            if (res.getNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchRoutingMulticastRendezvousPoints

List multicast rendezvous points

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchRoutingMulticastRendezvousPointsRequest req = new GetNetworkSwitchRoutingMulticastRendezvousPointsRequest("possimus");            

            GetNetworkSwitchRoutingMulticastRendezvousPointsResponse res = sdk.switch_.getNetworkSwitchRoutingMulticastRendezvousPoints(req);

            if (res.getNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJSONArrays != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchRoutingOspf

Return layer 3 OSPF routing configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingOspfRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingOspfResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchRoutingOspfRequest req = new GetNetworkSwitchRoutingOspfRequest("natus");            

            GetNetworkSwitchRoutingOspfResponse res = sdk.switch_.getNetworkSwitchRoutingOspf(req);

            if (res.getNetworkSwitchRoutingOspf200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchSettings

Returns the switch network settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchSettingsRequest req = new GetNetworkSwitchSettingsRequest("culpa");            

            GetNetworkSwitchSettingsResponse res = sdk.switch_.getNetworkSwitchSettings(req);

            if (res.getNetworkSwitchSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchStack

Show a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRequest req = new GetNetworkSwitchStackRequest("enim", "voluptates");            

            GetNetworkSwitchStackResponse res = sdk.switch_.getNetworkSwitchStack(req);

            if (res.getNetworkSwitchStack200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchStackRoutingInterface

Return a layer 3 interface from a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRoutingInterfaceRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRoutingInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRoutingInterfaceRequest req = new GetNetworkSwitchStackRoutingInterfaceRequest("delectus", "adipisci", "fugit");            

            GetNetworkSwitchStackRoutingInterfaceResponse res = sdk.switch_.getNetworkSwitchStackRoutingInterface(req);

            if (res.getNetworkSwitchStackRoutingInterface200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchStackRoutingInterfaceDhcp

Return a layer 3 interface DHCP configuration for a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRoutingInterfaceDhcpRequest req = new GetNetworkSwitchStackRoutingInterfaceDhcpRequest("fuga", "mollitia", "non");            

            GetNetworkSwitchStackRoutingInterfaceDhcpResponse res = sdk.switch_.getNetworkSwitchStackRoutingInterfaceDhcp(req);

            if (res.getNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchStackRoutingInterfaces

List layer 3 interfaces for a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRoutingInterfacesRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRoutingInterfacesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRoutingInterfacesRequest req = new GetNetworkSwitchStackRoutingInterfacesRequest("sint", "sequi");            

            GetNetworkSwitchStackRoutingInterfacesResponse res = sdk.switch_.getNetworkSwitchStackRoutingInterfaces(req);

            if (res.getNetworkSwitchStackRoutingInterfaces200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchStackRoutingStaticRoute

Return a layer 3 static route for a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRoutingStaticRouteRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRoutingStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRoutingStaticRouteRequest req = new GetNetworkSwitchStackRoutingStaticRouteRequest("vel", "explicabo", "occaecati");            

            GetNetworkSwitchStackRoutingStaticRouteResponse res = sdk.switch_.getNetworkSwitchStackRoutingStaticRoute(req);

            if (res.getNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchStackRoutingStaticRoutes

List layer 3 static routes for a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRoutingStaticRoutesRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRoutingStaticRoutesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRoutingStaticRoutesRequest req = new GetNetworkSwitchStackRoutingStaticRoutesRequest("non", "exercitationem");            

            GetNetworkSwitchStackRoutingStaticRoutesResponse res = sdk.switch_.getNetworkSwitchStackRoutingStaticRoutes(req);

            if (res.getNetworkSwitchStackRoutingStaticRoutes200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchStacks

List the switch stacks in a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchStacksRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchStacksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStacksRequest req = new GetNetworkSwitchStacksRequest("voluptate");            

            GetNetworkSwitchStacksResponse res = sdk.switch_.getNetworkSwitchStacks(req);

            if (res.getNetworkSwitchStacks200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchStormControl

Return the storm control configuration for a switch network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchStormControlRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchStormControlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStormControlRequest req = new GetNetworkSwitchStormControlRequest("eligendi");            

            GetNetworkSwitchStormControlResponse res = sdk.switch_.getNetworkSwitchStormControl(req);

            if (res.getNetworkSwitchStormControl200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchStp

Returns STP settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchStpRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchStpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStpRequest req = new GetNetworkSwitchStpRequest("saepe");            

            GetNetworkSwitchStpResponse res = sdk.switch_.getNetworkSwitchStp(req);

            if (res.getNetworkSwitchStp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationConfigTemplateSwitchProfilePort

Return a switch profile port

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilePortRequest;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilePortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationConfigTemplateSwitchProfilePortRequest req = new GetOrganizationConfigTemplateSwitchProfilePortRequest("culpa", "deleniti", "enim", "nam");            

            GetOrganizationConfigTemplateSwitchProfilePortResponse res = sdk.switch_.getOrganizationConfigTemplateSwitchProfilePort(req);

            if (res.getOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationConfigTemplateSwitchProfilePorts

Return all the ports of a switch profile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationConfigTemplateSwitchProfilePortsRequest req = new GetOrganizationConfigTemplateSwitchProfilePortsRequest("recusandae", "exercitationem", "id");            

            GetOrganizationConfigTemplateSwitchProfilePortsResponse res = sdk.switch_.getOrganizationConfigTemplateSwitchProfilePorts(req);

            if (res.getOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationConfigTemplateSwitchProfiles

List the switch profiles for your switch template configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilesRequest;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationConfigTemplateSwitchProfilesRequest req = new GetOrganizationConfigTemplateSwitchProfilesRequest("eligendi", "similique");            

            GetOrganizationConfigTemplateSwitchProfilesResponse res = sdk.switch_.getOrganizationConfigTemplateSwitchProfiles(req);

            if (res.getOrganizationConfigTemplateSwitchProfiles200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSwitchPortsBySwitch

List the switchports in an organization by switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSwitchPortsBySwitchRequest;
import org.openapis.openapi.models.operations.GetOrganizationSwitchPortsBySwitchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSwitchPortsBySwitchRequest req = new GetOrganizationSwitchPortsBySwitchRequest("minus") {{
                configurationUpdatedAfter = "aliquam";
                endingBefore = "neque";
                mac = "amet";
                macs = new String[]{{
                    add("totam"),
                }};
                name = "Frank Boehm";
                networkIds = new String[]{{
                    add("maiores"),
                    add("saepe"),
                }};
                perPage = 806268L;
                portProfileIds = new String[]{{
                    add("dolorem"),
                }};
                serial = "fuga";
                serials = new String[]{{
                    add("dignissimos"),
                }};
                startingAfter = "animi";
            }};            

            GetOrganizationSwitchPortsBySwitchResponse res = sdk.switch_.getOrganizationSwitchPortsBySwitch(req);

            if (res.getOrganizationSwitchPortsBySwitch200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeNetworkSwitchStack

Remove a switch from a stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveNetworkSwitchStackRequest;
import org.openapis.openapi.models.operations.RemoveNetworkSwitchStackRequestBody;
import org.openapis.openapi.models.operations.RemoveNetworkSwitchStackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveNetworkSwitchStackRequest req = new RemoveNetworkSwitchStackRequest(                new RemoveNetworkSwitchStackRequestBody("neque");, "labore", "labore");            

            RemoveNetworkSwitchStackResponse res = sdk.switch_.removeNetworkSwitchStack(req);

            if (res.removeNetworkSwitchStack200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceSwitchPort

Update a switch port

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchPortRequest;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchPortRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchPortRequestBodyProfile;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchPortRequestBodyStpGuardEnum;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchPortRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchPortRequestBodyUdldEnum;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchPortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceSwitchPortRequest req = new UpdateDeviceSwitchPortRequest("sint", "facere") {{
                requestBody = new UpdateDeviceSwitchPortRequestBody() {{
                    accessPolicyNumber = 514210L;
                    accessPolicyType = UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum.STICKY_MAC_ALLOW_LIST;
                    adaptivePolicyGroupId = "sit";
                    allowedVlans = "ad";
                    daiTrusted = false;
                    enabled = false;
                    flexibleStackingEnabled = false;
                    isolationEnabled = false;
                    linkNegotiation = "est";
                    macAllowList = new String[]{{
                        add("sapiente"),
                        add("laborum"),
                        add("cupiditate"),
                    }};
                    name = "Jesus Sawayn";
                    peerSgtCapable = false;
                    poeEnabled = false;
                    portScheduleId = "ad";
                    profile = new UpdateDeviceSwitchPortRequestBodyProfile() {{
                        enabled = false;
                        id = "346b8be2-fb5c-4543-b1b7-95d5b49da195";
                        iname = "pariatur";
                    }};;
                    rstpEnabled = false;
                    stickyMacAllowList = new String[]{{
                        add("et"),
                        add("explicabo"),
                    }};
                    stickyMacAllowListLimit = 86406L;
                    stormControlEnabled = false;
                    stpGuard = UpdateDeviceSwitchPortRequestBodyStpGuardEnum.BPDU_GUARD;
                    tags = new String[]{{
                        add("autem"),
                        add("odio"),
                    }};
                    type = UpdateDeviceSwitchPortRequestBodyTypeEnum.TRUNK;
                    udld = UpdateDeviceSwitchPortRequestBodyUdldEnum.ENFORCE;
                    vlan = 42880L;
                    voiceVlan = 625417L;
                }};;
            }};            

            UpdateDeviceSwitchPortResponse res = sdk.switch_.updateDeviceSwitchPort(req);

            if (res.updateDeviceSwitchPort200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceSwitchRoutingInterface

Update a layer 3 interface for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceRequest;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyIpv6;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfV3;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceSwitchRoutingInterfaceRequest req = new UpdateDeviceSwitchRoutingInterfaceRequest("odio", "perferendis") {{
                requestBody = new UpdateDeviceSwitchRoutingInterfaceRequestBody() {{
                    defaultGateway = "aspernatur";
                    interfaceIp = "dicta";
                    ipv6 = new UpdateDeviceSwitchRoutingInterfaceRequestBodyIpv6() {{
                        address = "1143 Johns Wall";
                        assignmentMode = "eos";
                        gateway = "delectus";
                        prefix = "recusandae";
                    }};;
                    multicastRouting = UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum.IGMP_SNOOPING_QUERIER;
                    name = "Agnes Jacobs";
                    ospfSettings = new UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings() {{
                        area = "reiciendis";
                        cost = 559293L;
                        isPassiveEnabled = false;
                    }};;
                    ospfV3 = new UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfV3() {{
                        area = "perferendis";
                        cost = 265735L;
                        isPassiveEnabled = false;
                    }};;
                    subnet = "sed";
                    vlanId = 467197L;
                }};;
            }};            

            UpdateDeviceSwitchRoutingInterfaceResponse res = sdk.switch_.updateDeviceSwitchRoutingInterface(req);

            if (res.updateDeviceSwitchRoutingInterface200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceSwitchRoutingInterfaceDhcp

Update a layer 3 interface DHCP configuration for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceSwitchRoutingInterfaceDhcpRequest req = new UpdateDeviceSwitchRoutingInterfaceDhcpRequest("eius", "nesciunt") {{
                requestBody = new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody() {{
                    bootFileName = "ex";
                    bootNextServer = "magnam";
                    bootOptionsEnabled = false;
                    dhcpLeaseTime = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum.ONE_DAY;
                    dhcpMode = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum.DHCP_RELAY;
                    dhcpOptions = new org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions[]{{
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions("neque", UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.TEXT, "hic") {{
                            code = "error";
                            type = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.TEXT;
                            value = "voluptate";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions("sit", UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.TEXT, "sequi") {{
                            code = "animi";
                            type = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.IP;
                            value = "error";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions("praesentium", UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER, "vel") {{
                            code = "labore";
                            type = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.IP;
                            value = "aliquam";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions("eveniet", UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.TEXT, "ad") {{
                            code = "debitis";
                            type = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER;
                            value = "eaque";
                        }}),
                    }};
                    dhcpRelayServerIps = new String[]{{
                        add("dicta"),
                    }};
                    dnsCustomNameservers = new String[]{{
                        add("similique"),
                        add("aspernatur"),
                        add("molestias"),
                    }};
                    dnsNameserversOption = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum.CUSTOM;
                    fixedIpAssignments = new org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments[]{{
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments("architecto", "voluptatum", "accusantium") {{
                            ip = "consequatur";
                            mac = "earum";
                            name = "Essie Gulgowski";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments("nemo", "laboriosam", "debitis") {{
                            ip = "earum";
                            mac = "ipsam";
                            name = "Marcella Koch";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments("dolorem", "molestiae", "quae") {{
                            ip = "eveniet";
                            mac = "quae";
                            name = "Tiffany Schultz Sr.";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments("consequatur", "est", "quaerat") {{
                            ip = "repellendus";
                            mac = "fugiat";
                            name = "Jenny Sipes";
                        }}),
                    }};
                    reservedIpRanges = new org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges[]{{
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges("nemo", "blanditiis") {{
                            comment = "quidem";
                            end = "veritatis";
                            start = "error";
                        }}),
                    }};
                }};;
            }};            

            UpdateDeviceSwitchRoutingInterfaceDhcpResponse res = sdk.switch_.updateDeviceSwitchRoutingInterfaceDhcp(req);

            if (res.updateDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceSwitchRoutingStaticRoute

Update a layer 3 static route for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingStaticRouteRequest;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingStaticRouteRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceSwitchRoutingStaticRouteRequest req = new UpdateDeviceSwitchRoutingStaticRouteRequest("impedit", "consequuntur") {{
                requestBody = new UpdateDeviceSwitchRoutingStaticRouteRequestBody() {{
                    advertiseViaOspfEnabled = false;
                    name = "Jackie Swaniawski";
                    nextHopIp = "dolorum";
                    preferOverOspfRoutesEnabled = false;
                    subnet = "cum";
                }};;
            }};            

            UpdateDeviceSwitchRoutingStaticRouteResponse res = sdk.switch_.updateDeviceSwitchRoutingStaticRoute(req);

            if (res.updateDeviceSwitchRoutingStaticRoute200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceSwitchWarmSpare

Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchWarmSpareRequest;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchWarmSpareRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchWarmSpareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceSwitchWarmSpareRequest req = new UpdateDeviceSwitchWarmSpareRequest(                new UpdateDeviceSwitchWarmSpareRequestBody(false) {{
                                spareSerial = "odit";
                            }};, "praesentium");            

            UpdateDeviceSwitchWarmSpareResponse res = sdk.switch_.updateDeviceSwitchWarmSpare(req);

            if (res.updateDeviceSwitchWarmSpare200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchAccessControlLists

Update the access control lists for a MS network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessControlListsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessControlListsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessControlListsRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessControlListsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchAccessControlListsRequest req = new UpdateNetworkSwitchAccessControlListsRequest(                new UpdateNetworkSwitchAccessControlListsRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessControlListsRequestBodyRules[]{{
                                                add(new UpdateNetworkSwitchAccessControlListsRequestBodyRules("illum", UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum.DENY, UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum.ANY, "distinctio") {{
                                                    comment = "voluptatum";
                                                    dstCidr = "eveniet";
                                                    dstPort = "consequuntur";
                                                    ipVersion = UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum.ANY;
                                                    policy = UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum.ALLOW;
                                                    protocol = UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum.UDP;
                                                    srcCidr = "rem";
                                                    srcPort = "ipsa";
                                                    vlan = "voluptas";
                                                }}),
                                            }});, "at");            

            UpdateNetworkSwitchAccessControlListsResponse res = sdk.switch_.updateNetworkSwitchAccessControlLists(req);

            if (res.updateNetworkSwitchAccessControlLists200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchAccessPolicy

Update an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBodyDot1x;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadius;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchAccessPolicyRequest req = new UpdateNetworkSwitchAccessPolicyRequest("eos", "in") {{
                requestBody = new UpdateNetworkSwitchAccessPolicyRequestBody() {{
                    accessPolicyType = UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum.HYBRID_AUTHENTICATION;
                    dot1x = new UpdateNetworkSwitchAccessPolicyRequestBodyDot1x() {{
                        controlDirection = UpdateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum.BOTH;
                    }};;
                    guestPortBouncing = false;
                    guestVlanId = 56175L;
                    hostMode = UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum.SINGLE_HOST;
                    increaseAccessSpeed = false;
                    name = "Jacquelyn Gusikowski";
                    radius = new UpdateNetworkSwitchAccessPolicyRequestBodyRadius() {{
                        criticalAuth = new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth() {{
                            dataVlanId = 355896L;
                            suspendPortBounce = false;
                            voiceVlanId = 451782L;
                        }};;
                        failedAuthVlanId = 331310L;
                        reAuthenticationInterval = 807928L;
                    }};;
                    radiusAccountingEnabled = false;
                    radiusAccountingServers = new org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers[]{{
                        add(new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers("quidem", 430379L, "ipsum") {{
                            host = "odit";
                            port = 985064L;
                            secret = "natus";
                        }}),
                    }};
                    radiusCoaSupportEnabled = false;
                    radiusGroupAttribute = "quae";
                    radiusServers = new org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers[]{{
                        add(new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers("facere", 644172L, "rem") {{
                            host = "temporibus";
                            port = 517313L;
                            secret = "nam";
                        }}),
                    }};
                    radiusTestingEnabled = false;
                    urlRedirectWalledGardenEnabled = false;
                    urlRedirectWalledGardenRanges = new String[]{{
                        add("odio"),
                    }};
                    voiceVlanClients = false;
                }};;
            }};            

            UpdateNetworkSwitchAccessPolicyResponse res = sdk.switch_.updateNetworkSwitchAccessPolicy(req);

            if (res.updateNetworkSwitchAccessPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchAlternateManagementInterface

Update the switch alternate management interface for the network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAlternateManagementInterfaceRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAlternateManagementInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchAlternateManagementInterfaceRequest req = new UpdateNetworkSwitchAlternateManagementInterfaceRequest("quidem") {{
                requestBody = new UpdateNetworkSwitchAlternateManagementInterfaceRequestBody() {{
                    enabled = false;
                    protocols = new org.openapis.openapi.models.operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum[]{{
                        add(UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum.SYSLOG),
                        add(UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum.SYSLOG),
                        add(UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum.SYSLOG),
                        add(UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum.RADIUS),
                    }};
                    switches = new org.openapis.openapi.models.operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches[]{{
                        add(new UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches("animi", "nemo") {{
                            alternateManagementIp = "nostrum";
                            gateway = "tempora";
                            serial = "numquam";
                            subnetMask = "maiores";
                        }}),
                        add(new UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches("quam", "quasi") {{
                            alternateManagementIp = "incidunt";
                            gateway = "laborum";
                            serial = "quis";
                            subnetMask = "voluptate";
                        }}),
                        add(new UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches("ad", "sapiente") {{
                            alternateManagementIp = "exercitationem";
                            gateway = "neque";
                            serial = "tempore";
                            subnetMask = "incidunt";
                        }}),
                    }};
                    vlanId = 661429L;
                }};;
            }};            

            UpdateNetworkSwitchAlternateManagementInterfaceResponse res = sdk.switch_.updateNetworkSwitchAlternateManagementInterface(req);

            if (res.updateNetworkSwitchAlternateManagementInterface200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchDhcpServerPolicy

Update the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlerts;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlertsEmail;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyRequestBodyArpInspection;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchDhcpServerPolicyRequest req = new UpdateNetworkSwitchDhcpServerPolicyRequest("assumenda") {{
                requestBody = new UpdateNetworkSwitchDhcpServerPolicyRequestBody() {{
                    alerts = new UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlerts() {{
                        email = new UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlertsEmail() {{
                            enabled = false;
                        }};;
                    }};;
                    allowedServers = new String[]{{
                        add("vero"),
                        add("fuga"),
                        add("expedita"),
                        add("corporis"),
                    }};
                    arpInspection = new UpdateNetworkSwitchDhcpServerPolicyRequestBodyArpInspection() {{
                        enabled = false;
                    }};;
                    blockedServers = new String[]{{
                        add("saepe"),
                    }};
                    defaultPolicy = UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum.ALLOW;
                }};;
            }};            

            UpdateNetworkSwitchDhcpServerPolicyResponse res = sdk.switch_.updateNetworkSwitchDhcpServerPolicy(req);

            if (res.updateNetworkSwitchDhcpServerPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Update a server that is trusted by Dynamic ARP Inspection on this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest req = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest("dolorum", "laborum") {{
                requestBody = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody() {{
                    ipv4 = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4() {{
                        address = "3661 Cecelia Plaza";
                    }};;
                    mac = "provident";
                    vlan = 334425L;
                }};;
            }};            

            UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse res = sdk.switch_.updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req);

            if (res.updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchDscpToCosMappings

Update the DSCP to CoS mappings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDscpToCosMappingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDscpToCosMappingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDscpToCosMappingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchDscpToCosMappingsRequest req = new UpdateNetworkSwitchDscpToCosMappingsRequest(                new UpdateNetworkSwitchDscpToCosMappingsRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings[]{{
                                                add(new UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings(9269L, 866287L) {{
                                                    cos = 587939L;
                                                    dscp = 823481L;
                                                    title = "Mrs.";
                                                }}),
                                            }});, "consequatur");            

            UpdateNetworkSwitchDscpToCosMappingsResponse res = sdk.switch_.updateNetworkSwitchDscpToCosMappings(req);

            if (res.updateNetworkSwitchDscpToCosMappings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchLinkAggregation

Update a link aggregation group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchLinkAggregationRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchLinkAggregationRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchLinkAggregationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchLinkAggregationRequest req = new UpdateNetworkSwitchLinkAggregationRequest("tempore", "quibusdam") {{
                requestBody = new UpdateNetworkSwitchLinkAggregationRequestBody() {{
                    switchPorts = new org.openapis.openapi.models.operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts[]{{
                        add(new UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts("quasi", "maiores") {{
                            portId = "maiores";
                            serial = "optio";
                        }}),
                        add(new UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts("labore", "ipsam") {{
                            portId = "dicta";
                            serial = "iure";
                        }}),
                        add(new UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts("non", "labore") {{
                            portId = "doloremque";
                            serial = "delectus";
                        }}),
                        add(new UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts("quod", "enim") {{
                            portId = "nulla";
                            serial = "soluta";
                        }}),
                    }};
                    switchProfilePorts = new org.openapis.openapi.models.operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts[]{{
                        add(new UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts("doloremque", "veniam") {{
                            portId = "minus";
                            profile = "ratione";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkSwitchLinkAggregationResponse res = sdk.switch_.updateNetworkSwitchLinkAggregation(req);

            if (res.updateNetworkSwitchLinkAggregation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchMtu

Update the MTU configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchMtuRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchMtuRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchMtuRequestBodyOverrides;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchMtuResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchMtuRequest req = new UpdateNetworkSwitchMtuRequest("animi") {{
                requestBody = new UpdateNetworkSwitchMtuRequestBody() {{
                    defaultMtuSize = 624558L;
                    overrides = new org.openapis.openapi.models.operations.UpdateNetworkSwitchMtuRequestBodyOverrides[]{{
                        add(new UpdateNetworkSwitchMtuRequestBodyOverrides(18766L) {{
                            mtuSize = 164131L;
                            switchProfiles = new String[]{{
                                add("blanditiis"),
                                add("reprehenderit"),
                                add("odio"),
                                add("recusandae"),
                            }};
                            switches = new String[]{{
                                add("beatae"),
                                add("consequuntur"),
                            }};
                        }}),
                        add(new UpdateNetworkSwitchMtuRequestBodyOverrides(806065L) {{
                            mtuSize = 779950L;
                            switchProfiles = new String[]{{
                                add("maxime"),
                                add("error"),
                                add("asperiores"),
                                add("quae"),
                            }};
                            switches = new String[]{{
                                add("nisi"),
                                add("recusandae"),
                            }};
                        }}),
                        add(new UpdateNetworkSwitchMtuRequestBodyOverrides(724153L) {{
                            mtuSize = 543566L;
                            switchProfiles = new String[]{{
                                add("perspiciatis"),
                                add("delectus"),
                            }};
                            switches = new String[]{{
                                add("fuga"),
                                add("culpa"),
                            }};
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkSwitchMtuResponse res = sdk.switch_.updateNetworkSwitchMtu(req);

            if (res.updateNetworkSwitchMtu200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchPortSchedule

Update a switch port schedule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchPortScheduleRequest req = new UpdateNetworkSwitchPortScheduleRequest("doloribus", "quibusdam") {{
                requestBody = new UpdateNetworkSwitchPortScheduleRequestBody() {{
                    name = "Ignacio Parker";
                    portSchedule = new UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule() {{
                        friday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday() {{
                            active = false;
                            from = "labore";
                            to = "fugiat";
                        }};;
                        monday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday() {{
                            active = false;
                            from = "tempore";
                            to = "animi";
                        }};;
                        saturday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday() {{
                            active = false;
                            from = "fugit";
                            to = "consequatur";
                        }};;
                        sunday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday() {{
                            active = false;
                            from = "aliquam";
                            to = "fuga";
                        }};;
                        thursday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday() {{
                            active = false;
                            from = "voluptate";
                            to = "molestiae";
                        }};;
                        tuesday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday() {{
                            active = false;
                            from = "ipsa";
                            to = "unde";
                        }};;
                        wednesday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday() {{
                            active = false;
                            from = "explicabo";
                            to = "dignissimos";
                        }};;
                    }};;
                }};;
            }};            

            UpdateNetworkSwitchPortScheduleResponse res = sdk.switch_.updateNetworkSwitchPortSchedule(req);

            if (res.updateNetworkSwitchPortSchedule200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchQosRule

Update a quality of service rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchQosRuleRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchQosRuleRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchQosRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchQosRuleRequest req = new UpdateNetworkSwitchQosRuleRequest("sit", "velit") {{
                requestBody = new UpdateNetworkSwitchQosRuleRequestBody() {{
                    dscp = 884187L;
                    dstPort = 697960L;
                    dstPortRange = "voluptates";
                    protocol = UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum.TCP;
                    srcPort = 464662L;
                    srcPortRange = "voluptatem";
                    vlan = 882434L;
                }};;
            }};            

            UpdateNetworkSwitchQosRuleResponse res = sdk.switch_.updateNetworkSwitchQosRule(req);

            if (res.updateNetworkSwitchQosRule200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchQosRulesOrder

Update the order in which the rules should be processed by the switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchQosRulesOrderRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchQosRulesOrderRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchQosRulesOrderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchQosRulesOrderRequest req = new UpdateNetworkSwitchQosRulesOrderRequest(                new UpdateNetworkSwitchQosRulesOrderRequestBody(                new String[]{{
                                                add("esse"),
                                                add("maxime"),
                                                add("architecto"),
                                                add("doloribus"),
                                            }});, "nostrum");            

            UpdateNetworkSwitchQosRulesOrderResponse res = sdk.switch_.updateNetworkSwitchQosRulesOrder(req);

            if (res.updateNetworkSwitchQosRulesOrder200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchRoutingMulticast

Update multicast settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchRoutingMulticastRequest req = new UpdateNetworkSwitchRoutingMulticastRequest("praesentium") {{
                requestBody = new UpdateNetworkSwitchRoutingMulticastRequestBody() {{
                    defaultSettings = new UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings() {{
                        floodUnknownMulticastTrafficEnabled = false;
                        igmpSnoopingEnabled = false;
                    }};;
                    overrides = new org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides[]{{
                        add(new UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides(false, false) {{
                            floodUnknownMulticastTrafficEnabled = false;
                            igmpSnoopingEnabled = false;
                            stacks = new String[]{{
                                add("ea"),
                            }};
                            switchProfiles = new String[]{{
                                add("voluptates"),
                                add("rerum"),
                            }};
                            switches = new String[]{{
                                add("nisi"),
                            }};
                        }}),
                        add(new UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides(false, false) {{
                            floodUnknownMulticastTrafficEnabled = false;
                            igmpSnoopingEnabled = false;
                            stacks = new String[]{{
                                add("molestiae"),
                                add("magni"),
                                add("beatae"),
                                add("nobis"),
                            }};
                            switchProfiles = new String[]{{
                                add("libero"),
                                add("maiores"),
                                add("occaecati"),
                                add("excepturi"),
                            }};
                            switches = new String[]{{
                                add("porro"),
                                add("quo"),
                            }};
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkSwitchRoutingMulticastResponse res = sdk.switch_.updateNetworkSwitchRoutingMulticast(req);

            if (res.updateNetworkSwitchRoutingMulticast200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchRoutingMulticastRendezvousPoint

Update a multicast rendezvous point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest req = new UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest(                new UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody("at", "dignissimos");, "voluptatem", "quasi");            

            UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse res = sdk.switch_.updateNetworkSwitchRoutingMulticastRendezvousPoint(req);

            if (res.updateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchRoutingOspf

Update layer 3 OSPF routing configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreas;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchRoutingOspfRequest req = new UpdateNetworkSwitchRoutingOspfRequest("aperiam") {{
                requestBody = new UpdateNetworkSwitchRoutingOspfRequestBody() {{
                    areas = new org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreas[]{{
                        add(new UpdateNetworkSwitchRoutingOspfRequestBodyAreas("voluptatem", "inventore", UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum.NORMAL) {{
                            areaId = "nisi";
                            areaName = "praesentium";
                            areaType = UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum.STUB;
                        }}),
                        add(new UpdateNetworkSwitchRoutingOspfRequestBodyAreas("molestias", "fugit", UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum.STUB) {{
                            areaId = "dolores";
                            areaName = "magnam";
                            areaType = UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum.NORMAL;
                        }}),
                    }};
                    deadTimerInSeconds = 814005L;
                    enabled = false;
                    helloTimerInSeconds = 865198L;
                    md5AuthenticationEnabled = false;
                    md5AuthenticationKey = new UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey() {{
                        id = 864533L;
                        passphrase = "sapiente";
                    }};;
                    v3 = new UpdateNetworkSwitchRoutingOspfRequestBodyV3() {{
                        areas = new org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas[]{{
                            add(new UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas("amet", "asperiores", UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnum.STUB) {{
                                areaId = "consequatur";
                                areaName = "ratione";
                                areaType = UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnum.NSSA;
                            }}),
                            add(new UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas("nobis", "facere", UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnum.NSSA) {{
                                areaId = "deleniti";
                                areaName = "tempora";
                                areaType = UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnum.NORMAL;
                            }}),
                        }};
                        deadTimerInSeconds = 488718L;
                        enabled = false;
                        helloTimerInSeconds = 877527L;
                    }};;
                }};;
            }};            

            UpdateNetworkSwitchRoutingOspfResponse res = sdk.switch_.updateNetworkSwitchRoutingOspf(req);

            if (res.updateNetworkSwitchRoutingOspf200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchSettings

Update switch network settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptions;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchSettingsRequest req = new UpdateNetworkSwitchSettingsRequest("alias") {{
                requestBody = new UpdateNetworkSwitchSettingsRequestBody() {{
                    powerExceptions = new org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptions[]{{
                        add(new UpdateNetworkSwitchSettingsRequestBodyPowerExceptions(UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum.COMBINED, "laboriosam") {{
                            powerType = UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum.USE_NETWORK_SETTING;
                            serial = "architecto";
                        }}),
                        add(new UpdateNetworkSwitchSettingsRequestBodyPowerExceptions(UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum.COMBINED, "quidem") {{
                            powerType = UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum.USE_NETWORK_SETTING;
                            serial = "provident";
                        }}),
                        add(new UpdateNetworkSwitchSettingsRequestBodyPowerExceptions(UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum.COMBINED, "veritatis") {{
                            powerType = UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum.COMBINED;
                            serial = "accusantium";
                        }}),
                    }};
                    useCombinedPower = false;
                    vlan = 175168L;
                }};;
            }};            

            UpdateNetworkSwitchSettingsResponse res = sdk.switch_.updateNetworkSwitchSettings(req);

            if (res.updateNetworkSwitchSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchStackRoutingInterface

Update a layer 3 interface for a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchStackRoutingInterfaceRequest req = new UpdateNetworkSwitchStackRoutingInterfaceRequest("rerum", "iusto", "totam") {{
                requestBody = new UpdateNetworkSwitchStackRoutingInterfaceRequestBody() {{
                    defaultGateway = "rem";
                    interfaceIp = "pariatur";
                    ipv6 = new UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6() {{
                        address = "8025 Anderson View";
                        assignmentMode = "veniam";
                        gateway = "commodi";
                        prefix = "similique";
                    }};;
                    multicastRouting = UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum.DISABLED;
                    name = "Shari Bode";
                    ospfSettings = new UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings() {{
                        area = "dicta";
                        cost = 149378L;
                        isPassiveEnabled = false;
                    }};;
                    subnet = "quae";
                    vlanId = 916674L;
                }};;
            }};            

            UpdateNetworkSwitchStackRoutingInterfaceResponse res = sdk.switch_.updateNetworkSwitchStackRoutingInterface(req);

            if (res.updateNetworkSwitchStackRoutingInterface200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchStackRoutingInterfaceDhcp

Update a layer 3 interface DHCP configuration for a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest req = new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest("aliquam", "cum", "autem") {{
                requestBody = new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody() {{
                    bootFileName = "voluptas";
                    bootNextServer = "omnis";
                    bootOptionsEnabled = false;
                    dhcpLeaseTime = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum.ONE_HOUR;
                    dhcpMode = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum.DHCP_RELAY;
                    dhcpOptions = new org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions[]{{
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions("voluptatum", UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER, "saepe") {{
                            code = "repellat";
                            type = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.HEX;
                            value = "consequatur";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions("cupiditate", UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.TEXT, "distinctio") {{
                            code = "odit";
                            type = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.IP;
                            value = "earum";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions("voluptate", UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.HEX, "beatae") {{
                            code = "veniam";
                            type = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER;
                            value = "natus";
                        }}),
                    }};
                    dhcpRelayServerIps = new String[]{{
                        add("necessitatibus"),
                        add("eum"),
                        add("alias"),
                        add("totam"),
                    }};
                    dnsCustomNameservers = new String[]{{
                        add("fugit"),
                        add("maiores"),
                        add("nulla"),
                    }};
                    dnsNameserversOption = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum.OPEN_DNS;
                    fixedIpAssignments = new org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments[]{{
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments("veritatis", "ut", "quas") {{
                            ip = "voluptatibus";
                            mac = "cum";
                            name = "Agnes Lemke";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments("tempora", "ad", "sed") {{
                            ip = "neque";
                            mac = "voluptas";
                            name = "Kerry Lowe";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments("dolorum", "eos", "doloribus") {{
                            ip = "architecto";
                            mac = "harum";
                            name = "Benny Wyman";
                        }}),
                    }};
                    reservedIpRanges = new org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges[]{{
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges("tempore", "aliquam") {{
                            comment = "nihil";
                            end = "et";
                            start = "amet";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges("officiis", "accusantium") {{
                            comment = "aliquid";
                            end = "eaque";
                            start = "distinctio";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges("aliquam", "maxime") {{
                            comment = "quis";
                            end = "ea";
                            start = "porro";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse res = sdk.switch_.updateNetworkSwitchStackRoutingInterfaceDhcp(req);

            if (res.updateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchStackRoutingStaticRoute

Update a layer 3 static route for a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingStaticRouteRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchStackRoutingStaticRouteRequest req = new UpdateNetworkSwitchStackRoutingStaticRouteRequest("repellendus", "laborum", "numquam") {{
                requestBody = new UpdateNetworkSwitchStackRoutingStaticRouteRequestBody() {{
                    advertiseViaOspfEnabled = false;
                    name = "Donna Kassulke";
                    nextHopIp = "corporis";
                    preferOverOspfRoutesEnabled = false;
                    subnet = "tempora";
                }};;
            }};            

            UpdateNetworkSwitchStackRoutingStaticRouteResponse res = sdk.switch_.updateNetworkSwitchStackRoutingStaticRoute(req);

            if (res.updateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchStormControl

Update the storm control configuration for a switch network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStormControlRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStormControlRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStormControlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchStormControlRequest req = new UpdateNetworkSwitchStormControlRequest("alias") {{
                requestBody = new UpdateNetworkSwitchStormControlRequestBody() {{
                    broadcastThreshold = 995487L;
                    multicastThreshold = 67391L;
                    unknownUnicastThreshold = 87650L;
                }};;
            }};            

            UpdateNetworkSwitchStormControlResponse res = sdk.switch_.updateNetworkSwitchStormControl(req);

            if (res.updateNetworkSwitchStormControl200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchStp

Updates STP settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStpRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStpRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStpRequestBodyStpBridgePriority;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchStpRequest req = new UpdateNetworkSwitchStpRequest("quod") {{
                requestBody = new UpdateNetworkSwitchStpRequestBody() {{
                    rstpEnabled = false;
                    stpBridgePriority = new org.openapis.openapi.models.operations.UpdateNetworkSwitchStpRequestBodyStpBridgePriority[]{{
                        add(new UpdateNetworkSwitchStpRequestBodyStpBridgePriority(885871L) {{
                            stacks = new String[]{{
                                add("aperiam"),
                                add("vitae"),
                            }};
                            stpPriority = 452778L;
                            switchProfiles = new String[]{{
                                add("maxime"),
                                add("at"),
                                add("perspiciatis"),
                            }};
                            switches = new String[]{{
                                add("nihil"),
                            }};
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkSwitchStpResponse res = sdk.switch_.updateNetworkSwitchStp(req);

            if (res.updateNetworkSwitchStp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationConfigTemplateSwitchProfilePort

Update a switch profile port

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationConfigTemplateSwitchProfilePortRequest req = new UpdateOrganizationConfigTemplateSwitchProfilePortRequest("ex", "recusandae", "minima", "assumenda") {{
                requestBody = new UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody() {{
                    accessPolicyNumber = 21793L;
                    accessPolicyType = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum.OPEN;
                    allowedVlans = "adipisci";
                    daiTrusted = false;
                    enabled = false;
                    flexibleStackingEnabled = false;
                    isolationEnabled = false;
                    linkNegotiation = "quia";
                    macAllowList = new String[]{{
                        add("maiores"),
                        add("sit"),
                        add("ad"),
                    }};
                    name = "Willie Huel";
                    poeEnabled = false;
                    portScheduleId = "est";
                    profile = new UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile() {{
                        enabled = false;
                        id = "50a22109-7b6d-448a-b200-ce7191808fe8";
                        iname = "ea";
                    }};;
                    rstpEnabled = false;
                    stickyMacAllowList = new String[]{{
                        add("fugiat"),
                        add("eius"),
                    }};
                    stickyMacAllowListLimit = 93624L;
                    stormControlEnabled = false;
                    stpGuard = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum.LOOP_GUARD;
                    tags = new String[]{{
                        add("deleniti"),
                        add("quaerat"),
                    }};
                    type = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum.ACCESS;
                    udld = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum.ENFORCE;
                    vlan = 114781L;
                    voiceVlan = 623399L;
                }};;
            }};            

            UpdateOrganizationConfigTemplateSwitchProfilePortResponse res = sdk.switch_.updateOrganizationConfigTemplateSwitchProfilePort(req);

            if (res.updateOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
