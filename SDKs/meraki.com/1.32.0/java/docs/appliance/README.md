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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeviceApplianceVmxAuthenticationTokenRequest;
import org.openapis.openapi.models.operations.CreateDeviceApplianceVmxAuthenticationTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeviceApplianceVmxAuthenticationTokenRequest req = new CreateDeviceApplianceVmxAuthenticationTokenRequest("recusandae");            

            CreateDeviceApplianceVmxAuthenticationTokenResponse res = sdk.appliance.createDeviceApplianceVmxAuthenticationToken(req);

            if (res.createDeviceApplianceVmxAuthenticationToken201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkAppliancePrefixesDelegatedStatic

Add a static delegated prefix from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkAppliancePrefixesDelegatedStaticRequest;
import org.openapis.openapi.models.operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin;
import org.openapis.openapi.models.operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum;
import org.openapis.openapi.models.operations.CreateNetworkAppliancePrefixesDelegatedStaticResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkAppliancePrefixesDelegatedStaticRequest req = new CreateNetworkAppliancePrefixesDelegatedStaticRequest(                new CreateNetworkAppliancePrefixesDelegatedStaticRequestBody(                new CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin() {{
                                                interfaces = new String[]{{
                                                    add("voluptas"),
                                                    add("facilis"),
                                                    add("placeat"),
                                                }};
                                                type = CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum.INTERNET;
                                            }};, "expedita") {{
                                description = "deleniti";
                            }};, "a");            

            CreateNetworkAppliancePrefixesDelegatedStaticResponse res = sdk.appliance.createNetworkAppliancePrefixesDelegatedStatic(req);

            if (res.createNetworkAppliancePrefixesDelegatedStatic201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkApplianceStaticRoute

Add a static route for an MX or teleworker network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkApplianceStaticRouteRequest;
import org.openapis.openapi.models.operations.CreateNetworkApplianceStaticRouteRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkApplianceStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkApplianceStaticRouteRequest req = new CreateNetworkApplianceStaticRouteRequest(                new CreateNetworkApplianceStaticRouteRequestBody("ullam", "unde", "necessitatibus") {{
                                gatewayVlanId = "animi";
                            }};, "impedit");            

            CreateNetworkApplianceStaticRouteResponse res = sdk.appliance.createNetworkApplianceStaticRoute(req);

            if (res.createNetworkApplianceStaticRoute201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkApplianceTrafficShapingCustomPerformanceClass

Add a custom performance class for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
import org.openapis.openapi.models.operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest req = new CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest(                new CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody("corporis") {{
                                maxJitter = 668234L;
                                maxLatency = 621666L;
                                maxLossPercentage = 456885L;
                            }};, "labore");            

            CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse res = sdk.appliance.createNetworkApplianceTrafficShapingCustomPerformanceClass(req);

            if (res.createNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkApplianceVlan

Add a VLAN

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkApplianceVlanRequest;
import org.openapis.openapi.models.operations.CreateNetworkApplianceVlanRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkApplianceVlanRequestBodyIpv6;
import org.openapis.openapi.models.operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments;
import org.openapis.openapi.models.operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin;
import org.openapis.openapi.models.operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum;
import org.openapis.openapi.models.operations.CreateNetworkApplianceVlanRequestBodyMandatoryDhcp;
import org.openapis.openapi.models.operations.CreateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum;
import org.openapis.openapi.models.operations.CreateNetworkApplianceVlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkApplianceVlanRequest req = new CreateNetworkApplianceVlanRequest(                new CreateNetworkApplianceVlanRequestBody("vero", "consectetur") {{
                                applianceIp = "vitae";
                                cidr = "inventore";
                                groupPolicyId = "dolorem";
                                ipv6 = new CreateNetworkApplianceVlanRequestBodyIpv6() {{
                                    enabled = false;
                                    prefixAssignments = new org.openapis.openapi.models.operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments[]{{
                                        add(new CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments() {{
                                            autonomous = false;
                                            origin = new CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin(CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INDEPENDENT) {{
                                                interfaces = new String[]{{
                                                    add("iste"),
                                                }};
                                                type = CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INDEPENDENT;
                                            }};
                                            staticApplianceIp6 = "soluta";
                                            staticPrefix = "libero";
                                        }}),
                                        add(new CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments() {{
                                            autonomous = false;
                                            origin = new CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin(CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INDEPENDENT) {{
                                                interfaces = new String[]{{
                                                    add("dolorum"),
                                                    add("odio"),
                                                    add("fugit"),
                                                }};
                                                type = CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INDEPENDENT;
                                            }};
                                            staticApplianceIp6 = "vel";
                                            staticPrefix = "quae";
                                        }}),
                                    }};
                                }};;
                                mandatoryDhcp = new CreateNetworkApplianceVlanRequestBodyMandatoryDhcp() {{
                                    enabled = false;
                                }};;
                                mask = 63553L;
                                subnet = "modi";
                                templateVlanType = CreateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum.SAME;
                            }};, "exercitationem");            

            CreateNetworkApplianceVlanResponse res = sdk.appliance.createNetworkApplianceVlan(req);

            if (res.createNetworkApplianceVlan201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkAppliancePrefixesDelegatedStatic

Delete a static delegated prefix from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkAppliancePrefixesDelegatedStaticRequest;
import org.openapis.openapi.models.operations.DeleteNetworkAppliancePrefixesDelegatedStaticResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkAppliancePrefixesDelegatedStaticRequest req = new DeleteNetworkAppliancePrefixesDelegatedStaticRequest("et", "ipsum");            

            DeleteNetworkAppliancePrefixesDelegatedStaticResponse res = sdk.appliance.deleteNetworkAppliancePrefixesDelegatedStatic(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkApplianceStaticRoute

Delete a static route from an MX or teleworker network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkApplianceStaticRouteRequest;
import org.openapis.openapi.models.operations.DeleteNetworkApplianceStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkApplianceStaticRouteRequest req = new DeleteNetworkApplianceStaticRouteRequest("nulla", "distinctio");            

            DeleteNetworkApplianceStaticRouteResponse res = sdk.appliance.deleteNetworkApplianceStaticRoute(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkApplianceTrafficShapingCustomPerformanceClass

Delete a custom performance class from an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
import org.openapis.openapi.models.operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest req = new DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest("quia", "quia");            

            DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse res = sdk.appliance.deleteNetworkApplianceTrafficShapingCustomPerformanceClass(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkApplianceVlan

Delete a VLAN from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkApplianceVlanRequest;
import org.openapis.openapi.models.operations.DeleteNetworkApplianceVlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkApplianceVlanRequest req = new DeleteNetworkApplianceVlanRequest("omnis", "libero");            

            DeleteNetworkApplianceVlanResponse res = sdk.appliance.deleteNetworkApplianceVlan(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceApplianceDhcpSubnets

Return the DHCP subnet information for an appliance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceApplianceDhcpSubnetsRequest;
import org.openapis.openapi.models.operations.GetDeviceApplianceDhcpSubnetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceApplianceDhcpSubnetsRequest req = new GetDeviceApplianceDhcpSubnetsRequest("id");            

            GetDeviceApplianceDhcpSubnetsResponse res = sdk.appliance.getDeviceApplianceDhcpSubnets(req);

            if (res.getDeviceApplianceDhcpSubnets200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceAppliancePerformance

Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceAppliancePerformanceRequest;
import org.openapis.openapi.models.operations.GetDeviceAppliancePerformanceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceAppliancePerformanceRequest req = new GetDeviceAppliancePerformanceRequest("fugiat");            

            GetDeviceAppliancePerformanceResponse res = sdk.appliance.getDeviceAppliancePerformance(req);

            if (res.getDeviceAppliancePerformance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceAppliancePrefixesDelegated

Return current delegated IPv6 prefixes on an appliance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceAppliancePrefixesDelegatedRequest;
import org.openapis.openapi.models.operations.GetDeviceAppliancePrefixesDelegatedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceAppliancePrefixesDelegatedRequest req = new GetDeviceAppliancePrefixesDelegatedRequest("quos");            

            GetDeviceAppliancePrefixesDelegatedResponse res = sdk.appliance.getDeviceAppliancePrefixesDelegated(req);

            if (res.getDeviceAppliancePrefixesDelegated200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceAppliancePrefixesDelegatedVlanAssignments

Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest;
import org.openapis.openapi.models.operations.GetDeviceAppliancePrefixesDelegatedVlanAssignmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest req = new GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest("sit");            

            GetDeviceAppliancePrefixesDelegatedVlanAssignmentsResponse res = sdk.appliance.getDeviceAppliancePrefixesDelegatedVlanAssignments(req);

            if (res.getDeviceAppliancePrefixesDelegatedVlanAssignments200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceApplianceUplinksSettings

Return the uplink settings for an MX appliance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceApplianceUplinksSettingsRequest;
import org.openapis.openapi.models.operations.GetDeviceApplianceUplinksSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceApplianceUplinksSettingsRequest req = new GetDeviceApplianceUplinksSettingsRequest("ipsa");            

            GetDeviceApplianceUplinksSettingsResponse res = sdk.appliance.getDeviceApplianceUplinksSettings(req);

            if (res.getDeviceApplianceUplinksSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceClientSecurityEvents

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceClientSecurityEventsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceClientSecurityEventsResponse;
import org.openapis.openapi.models.operations.GetNetworkApplianceClientSecurityEventsSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceClientSecurityEventsRequest req = new GetNetworkApplianceClientSecurityEventsRequest("inventore", "aperiam") {{
                endingBefore = "totam";
                perPage = 292888L;
                sortOrder = GetNetworkApplianceClientSecurityEventsSortOrderEnum.DESCENDING;
                startingAfter = "distinctio";
                t0 = "voluptatem";
                t1 = "autem";
                timespan = 4566.88;
            }};            

            GetNetworkApplianceClientSecurityEventsResponse res = sdk.appliance.getNetworkApplianceClientSecurityEvents(req);

            if (res.getNetworkApplianceClientSecurityEvents200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceConnectivityMonitoringDestinations

Return the connectivity testing destinations for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceConnectivityMonitoringDestinationsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceConnectivityMonitoringDestinationsRequest req = new GetNetworkApplianceConnectivityMonitoringDestinationsRequest("assumenda");            

            GetNetworkApplianceConnectivityMonitoringDestinationsResponse res = sdk.appliance.getNetworkApplianceConnectivityMonitoringDestinations(req);

            if (res.getNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceContentFiltering

Return the content filtering settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceContentFilteringRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceContentFilteringResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceContentFilteringRequest req = new GetNetworkApplianceContentFilteringRequest("est");            

            GetNetworkApplianceContentFilteringResponse res = sdk.appliance.getNetworkApplianceContentFiltering(req);

            if (res.getNetworkApplianceContentFiltering200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceContentFilteringCategories

List all available content filtering categories for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceContentFilteringCategoriesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceContentFilteringCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceContentFilteringCategoriesRequest req = new GetNetworkApplianceContentFilteringCategoriesRequest("corrupti");            

            GetNetworkApplianceContentFilteringCategoriesResponse res = sdk.appliance.getNetworkApplianceContentFilteringCategories(req);

            if (res.getNetworkApplianceContentFilteringCategories200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallCellularFirewallRules

Return the cellular firewall rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallCellularFirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallCellularFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallCellularFirewallRulesRequest req = new GetNetworkApplianceFirewallCellularFirewallRulesRequest("provident");            

            GetNetworkApplianceFirewallCellularFirewallRulesResponse res = sdk.appliance.getNetworkApplianceFirewallCellularFirewallRules(req);

            if (res.getNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallFirewalledService

Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallFirewalledServiceRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallFirewalledServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallFirewalledServiceRequest req = new GetNetworkApplianceFirewallFirewalledServiceRequest("necessitatibus", "tempore");            

            GetNetworkApplianceFirewallFirewalledServiceResponse res = sdk.appliance.getNetworkApplianceFirewallFirewalledService(req);

            if (res.getNetworkApplianceFirewallFirewalledService200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallFirewalledServices

List the appliance services and their accessibility rules

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallFirewalledServicesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallFirewalledServicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallFirewalledServicesRequest req = new GetNetworkApplianceFirewallFirewalledServicesRequest("ea");            

            GetNetworkApplianceFirewallFirewalledServicesResponse res = sdk.appliance.getNetworkApplianceFirewallFirewalledServices(req);

            if (res.getNetworkApplianceFirewallFirewalledServices200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallInboundCellularFirewallRules

Return the inbound cellular firewall rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallInboundCellularFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest req = new GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest("ipsam");            

            GetNetworkApplianceFirewallInboundCellularFirewallRulesResponse res = sdk.appliance.getNetworkApplianceFirewallInboundCellularFirewallRules(req);

            if (res.getNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallInboundFirewallRules

Return the inbound firewall rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallInboundFirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallInboundFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallInboundFirewallRulesRequest req = new GetNetworkApplianceFirewallInboundFirewallRulesRequest("laudantium");            

            GetNetworkApplianceFirewallInboundFirewallRulesResponse res = sdk.appliance.getNetworkApplianceFirewallInboundFirewallRules(req);

            if (res.getNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallL3FirewallRules

Return the L3 firewall rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallL3FirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallL3FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallL3FirewallRulesRequest req = new GetNetworkApplianceFirewallL3FirewallRulesRequest("officiis");            

            GetNetworkApplianceFirewallL3FirewallRulesResponse res = sdk.appliance.getNetworkApplianceFirewallL3FirewallRules(req);

            if (res.getNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallL7FirewallRules

List the MX L7 firewall rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallL7FirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallL7FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallL7FirewallRulesRequest req = new GetNetworkApplianceFirewallL7FirewallRulesRequest("cum");            

            GetNetworkApplianceFirewallL7FirewallRulesResponse res = sdk.appliance.getNetworkApplianceFirewallL7FirewallRules(req);

            if (res.getNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallL7FirewallRulesApplicationCategories

Return the L7 firewall application categories and their associated applications for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest req = new GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest("alias");            

            GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse res = sdk.appliance.getNetworkApplianceFirewallL7FirewallRulesApplicationCategories(req);

            if (res.getNetworkApplianceFirewallL7FirewallRulesApplicationCategories200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallOneToManyNatRules

Return the 1:Many NAT mapping rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallOneToManyNatRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallOneToManyNatRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallOneToManyNatRulesRequest req = new GetNetworkApplianceFirewallOneToManyNatRulesRequest("quidem");            

            GetNetworkApplianceFirewallOneToManyNatRulesResponse res = sdk.appliance.getNetworkApplianceFirewallOneToManyNatRules(req);

            if (res.getNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallOneToOneNatRules

Return the 1:1 NAT mapping rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallOneToOneNatRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallOneToOneNatRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallOneToOneNatRulesRequest req = new GetNetworkApplianceFirewallOneToOneNatRulesRequest("repudiandae");            

            GetNetworkApplianceFirewallOneToOneNatRulesResponse res = sdk.appliance.getNetworkApplianceFirewallOneToOneNatRules(req);

            if (res.getNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallPortForwardingRules

Return the port forwarding rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallPortForwardingRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallPortForwardingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallPortForwardingRulesRequest req = new GetNetworkApplianceFirewallPortForwardingRulesRequest("expedita");            

            GetNetworkApplianceFirewallPortForwardingRulesResponse res = sdk.appliance.getNetworkApplianceFirewallPortForwardingRules(req);

            if (res.getNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallSettings

Return the firewall settings for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallSettingsRequest req = new GetNetworkApplianceFirewallSettingsRequest("eos");            

            GetNetworkApplianceFirewallSettingsResponse res = sdk.appliance.getNetworkApplianceFirewallSettings(req);

            if (res.getNetworkApplianceFirewallSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkAppliancePort

Return per-port VLAN settings for a single MX port.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkAppliancePortRequest;
import org.openapis.openapi.models.operations.GetNetworkAppliancePortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAppliancePortRequest req = new GetNetworkAppliancePortRequest("odio", "praesentium");            

            GetNetworkAppliancePortResponse res = sdk.appliance.getNetworkAppliancePort(req);

            if (res.getNetworkAppliancePort200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkAppliancePorts

List per-port VLAN settings for all ports of a MX.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkAppliancePortsRequest;
import org.openapis.openapi.models.operations.GetNetworkAppliancePortsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAppliancePortsRequest req = new GetNetworkAppliancePortsRequest("explicabo");            

            GetNetworkAppliancePortsResponse res = sdk.appliance.getNetworkAppliancePorts(req);

            if (res.getNetworkAppliancePorts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkAppliancePrefixesDelegatedStatic

Return a static delegated prefix from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkAppliancePrefixesDelegatedStaticRequest;
import org.openapis.openapi.models.operations.GetNetworkAppliancePrefixesDelegatedStaticResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAppliancePrefixesDelegatedStaticRequest req = new GetNetworkAppliancePrefixesDelegatedStaticRequest("error", "earum");            

            GetNetworkAppliancePrefixesDelegatedStaticResponse res = sdk.appliance.getNetworkAppliancePrefixesDelegatedStatic(req);

            if (res.getNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkAppliancePrefixesDelegatedStatics

List static delegated prefixes for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkAppliancePrefixesDelegatedStaticsRequest;
import org.openapis.openapi.models.operations.GetNetworkAppliancePrefixesDelegatedStaticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAppliancePrefixesDelegatedStaticsRequest req = new GetNetworkAppliancePrefixesDelegatedStaticsRequest("recusandae");            

            GetNetworkAppliancePrefixesDelegatedStaticsResponse res = sdk.appliance.getNetworkAppliancePrefixesDelegatedStatics(req);

            if (res.getNetworkAppliancePrefixesDelegatedStatics200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceSecurityEvents

List the security events for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityEventsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityEventsResponse;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityEventsSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceSecurityEventsRequest req = new GetNetworkApplianceSecurityEventsRequest("ut") {{
                endingBefore = "quidem";
                perPage = 339631L;
                sortOrder = GetNetworkApplianceSecurityEventsSortOrderEnum.ASCENDING;
                startingAfter = "unde";
                t0 = "molestiae";
                t1 = "delectus";
                timespan = 5855.93;
            }};            

            GetNetworkApplianceSecurityEventsResponse res = sdk.appliance.getNetworkApplianceSecurityEvents(req);

            if (res.getNetworkApplianceSecurityEvents200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceSecurityIntrusion

Returns all supported intrusion settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityIntrusionRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityIntrusionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceSecurityIntrusionRequest req = new GetNetworkApplianceSecurityIntrusionRequest("numquam");            

            GetNetworkApplianceSecurityIntrusionResponse res = sdk.appliance.getNetworkApplianceSecurityIntrusion(req);

            if (res.getNetworkApplianceSecurityIntrusion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceSecurityMalware

Returns all supported malware settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityMalwareRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityMalwareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceSecurityMalwareRequest req = new GetNetworkApplianceSecurityMalwareRequest("nesciunt");            

            GetNetworkApplianceSecurityMalwareResponse res = sdk.appliance.getNetworkApplianceSecurityMalware(req);

            if (res.getNetworkApplianceSecurityMalware200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceSettings

Return the appliance settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceSettingsRequest req = new GetNetworkApplianceSettingsRequest("officia");            

            GetNetworkApplianceSettingsResponse res = sdk.appliance.getNetworkApplianceSettings(req);

            if (res.getNetworkApplianceSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceSingleLan

Return single LAN configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceSingleLanRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceSingleLanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceSingleLanRequest req = new GetNetworkApplianceSingleLanRequest("optio");            

            GetNetworkApplianceSingleLanResponse res = sdk.appliance.getNetworkApplianceSingleLan(req);

            if (res.getNetworkApplianceSingleLan200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceSsid

Return a single MX SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceSsidRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceSsidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceSsidRequest req = new GetNetworkApplianceSsidRequest("corporis", "qui");            

            GetNetworkApplianceSsidResponse res = sdk.appliance.getNetworkApplianceSsid(req);

            if (res.getNetworkApplianceSsid200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceSsids

List the MX SSIDs in a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceSsidsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceSsidsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceSsidsRequest req = new GetNetworkApplianceSsidsRequest("voluptatum");            

            GetNetworkApplianceSsidsResponse res = sdk.appliance.getNetworkApplianceSsids(req);

            if (res.getNetworkApplianceSsids200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceStaticRoute

Return a static route for an MX or teleworker network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceStaticRouteRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceStaticRouteRequest req = new GetNetworkApplianceStaticRouteRequest("minima", "placeat");            

            GetNetworkApplianceStaticRouteResponse res = sdk.appliance.getNetworkApplianceStaticRoute(req);

            if (res.getNetworkApplianceStaticRoute200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceStaticRoutes

List the static routes for an MX or teleworker network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceStaticRoutesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceStaticRoutesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceStaticRoutesRequest req = new GetNetworkApplianceStaticRoutesRequest("neque");            

            GetNetworkApplianceStaticRoutesResponse res = sdk.appliance.getNetworkApplianceStaticRoutes(req);

            if (res.getNetworkApplianceStaticRoutes200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceTrafficShaping

Display the traffic shaping settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceTrafficShapingRequest req = new GetNetworkApplianceTrafficShapingRequest("minus");            

            GetNetworkApplianceTrafficShapingResponse res = sdk.appliance.getNetworkApplianceTrafficShaping(req);

            if (res.getNetworkApplianceTrafficShaping200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceTrafficShapingCustomPerformanceClass

Return a custom performance class for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest req = new GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest("modi", "corporis");            

            GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse res = sdk.appliance.getNetworkApplianceTrafficShapingCustomPerformanceClass(req);

            if (res.getNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceTrafficShapingCustomPerformanceClasses

List all custom performance classes for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest req = new GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest("voluptates");            

            GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse res = sdk.appliance.getNetworkApplianceTrafficShapingCustomPerformanceClasses(req);

            if (res.getNetworkApplianceTrafficShapingCustomPerformanceClasses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceTrafficShapingRules

Display the traffic shaping settings rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceTrafficShapingRulesRequest req = new GetNetworkApplianceTrafficShapingRulesRequest("tempore");            

            GetNetworkApplianceTrafficShapingRulesResponse res = sdk.appliance.getNetworkApplianceTrafficShapingRules(req);

            if (res.getNetworkApplianceTrafficShapingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceTrafficShapingUplinkBandwidth

Returns the uplink bandwidth limits for your MX network. This may not reflect the affected device's hardware capabilities.  For more information on your device's hardware capabilities, please consult our MX Family Datasheet - [https://meraki.cisco.com/product-collateral/mx-family-datasheet/?file]

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceTrafficShapingUplinkBandwidthRequest req = new GetNetworkApplianceTrafficShapingUplinkBandwidthRequest("libero");            

            GetNetworkApplianceTrafficShapingUplinkBandwidthResponse res = sdk.appliance.getNetworkApplianceTrafficShapingUplinkBandwidth(req);

            if (res.getNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceTrafficShapingUplinkSelection

Show uplink selection settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceTrafficShapingUplinkSelectionRequest req = new GetNetworkApplianceTrafficShapingUplinkSelectionRequest("labore");            

            GetNetworkApplianceTrafficShapingUplinkSelectionResponse res = sdk.appliance.getNetworkApplianceTrafficShapingUplinkSelection(req);

            if (res.getNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceUplinksUsageHistory

Get the sent and received bytes for each uplink of a network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceUplinksUsageHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceUplinksUsageHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceUplinksUsageHistoryRequest req = new GetNetworkApplianceUplinksUsageHistoryRequest("occaecati") {{
                resolution = 375994L;
                t0 = "quo";
                t1 = "velit";
                timespan = 7955.91;
            }};            

            GetNetworkApplianceUplinksUsageHistoryResponse res = sdk.appliance.getNetworkApplianceUplinksUsageHistory(req);

            if (res.getNetworkApplianceUplinksUsageHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceVlan

Return a VLAN

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceVlanRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceVlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceVlanRequest req = new GetNetworkApplianceVlanRequest("nostrum", "est");            

            GetNetworkApplianceVlanResponse res = sdk.appliance.getNetworkApplianceVlan(req);

            if (res.getNetworkApplianceVlan200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceVlans

List the VLANs for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceVlansRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceVlansResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceVlansRequest req = new GetNetworkApplianceVlansRequest("delectus");            

            GetNetworkApplianceVlansResponse res = sdk.appliance.getNetworkApplianceVlans(req);

            if (res.getNetworkApplianceVlans200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceVlansSettings

Returns the enabled status of VLANs for the network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceVlansSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceVlansSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceVlansSettingsRequest req = new GetNetworkApplianceVlansSettingsRequest("vero");            

            GetNetworkApplianceVlansSettingsResponse res = sdk.appliance.getNetworkApplianceVlansSettings(req);

            if (res.getNetworkApplianceVlansSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceVpnBgp

Return a Hub BGP Configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceVpnBgpRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceVpnBgpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceVpnBgpRequest req = new GetNetworkApplianceVpnBgpRequest("repellat");            

            GetNetworkApplianceVpnBgpResponse res = sdk.appliance.getNetworkApplianceVpnBgp(req);

            if (res.getNetworkApplianceVpnBgp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceVpnSiteToSiteVpn

Return the site-to-site VPN settings of a network. Only valid for MX networks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceVpnSiteToSiteVpnRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceVpnSiteToSiteVpnResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceVpnSiteToSiteVpnRequest req = new GetNetworkApplianceVpnSiteToSiteVpnRequest("nemo");            

            GetNetworkApplianceVpnSiteToSiteVpnResponse res = sdk.appliance.getNetworkApplianceVpnSiteToSiteVpn(req);

            if (res.getNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceWarmSpare

Return MX warm spare settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceWarmSpareRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceWarmSpareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceWarmSpareRequest req = new GetNetworkApplianceWarmSpareRequest("aperiam");            

            GetNetworkApplianceWarmSpareResponse res = sdk.appliance.getNetworkApplianceWarmSpare(req);

            if (res.getNetworkApplianceWarmSpare200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceSecurityEvents

List the security events for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceSecurityEventsRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceSecurityEventsResponse;
import org.openapis.openapi.models.operations.GetOrganizationApplianceSecurityEventsSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceSecurityEventsRequest req = new GetOrganizationApplianceSecurityEventsRequest("minima") {{
                endingBefore = "in";
                perPage = 496915L;
                sortOrder = GetOrganizationApplianceSecurityEventsSortOrderEnum.DESCENDING;
                startingAfter = "dolores";
                t0 = "error";
                t1 = "veritatis";
                timespan = 4981.8;
            }};            

            GetOrganizationApplianceSecurityEventsResponse res = sdk.appliance.getOrganizationApplianceSecurityEvents(req);

            if (res.getOrganizationApplianceSecurityEvents200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceSecurityIntrusion

Returns all supported intrusion settings for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceSecurityIntrusionRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceSecurityIntrusionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceSecurityIntrusionRequest req = new GetOrganizationApplianceSecurityIntrusionRequest("pariatur");            

            GetOrganizationApplianceSecurityIntrusionResponse res = sdk.appliance.getOrganizationApplianceSecurityIntrusion(req);

            if (res.getOrganizationApplianceSecurityIntrusion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceUplinkStatuses

List the uplink status of every Meraki MX and Z series appliances in the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceUplinkStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceUplinkStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceUplinkStatusesRequest req = new GetOrganizationApplianceUplinkStatusesRequest("similique") {{
                endingBefore = "optio";
                iccids = new String[]{{
                    add("quaerat"),
                    add("commodi"),
                }};
                networkIds = new String[]{{
                    add("placeat"),
                    add("quidem"),
                    add("exercitationem"),
                    add("quam"),
                }};
                perPage = 211455L;
                serials = new String[]{{
                    add("ipsa"),
                    add("sint"),
                }};
                startingAfter = "vero";
            }};            

            GetOrganizationApplianceUplinkStatusesResponse res = sdk.appliance.getOrganizationApplianceUplinkStatuses(req);

            if (res.getOrganizationApplianceUplinkStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceVpnStats

Show VPN history stat for networks in an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVpnStatsRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVpnStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceVpnStatsRequest req = new GetOrganizationApplianceVpnStatsRequest("repudiandae") {{
                endingBefore = "cum";
                networkIds = new String[]{{
                    add("earum"),
                }};
                perPage = 334474L;
                startingAfter = "animi";
                t0 = "dolores";
                t1 = "nam";
                timespan = 1158.98;
            }};            

            GetOrganizationApplianceVpnStatsResponse res = sdk.appliance.getOrganizationApplianceVpnStats(req);

            if (res.getOrganizationApplianceVpnStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceVpnStatuses

Show VPN status for networks in an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVpnStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVpnStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceVpnStatusesRequest req = new GetOrganizationApplianceVpnStatusesRequest("necessitatibus") {{
                endingBefore = "nobis";
                networkIds = new String[]{{
                    add("ducimus"),
                }};
                perPage = 980486L;
                startingAfter = "veritatis";
            }};            

            GetOrganizationApplianceVpnStatusesResponse res = sdk.appliance.getOrganizationApplianceVpnStatuses(req);

            if (res.getOrganizationApplianceVpnStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceVPNThirdPartyVPNPeers

Return the third party VPN peers for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVPNThirdPartyVPNPeersRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVPNThirdPartyVPNPeersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceVPNThirdPartyVPNPeersRequest req = new GetOrganizationApplianceVPNThirdPartyVPNPeersRequest("laboriosam");            

            GetOrganizationApplianceVPNThirdPartyVPNPeersResponse res = sdk.appliance.getOrganizationApplianceVPNThirdPartyVPNPeers(req);

            if (res.getOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceVpnVpnFirewallRules

Return the firewall rules for an organization's site-to-site VPN

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVpnVpnFirewallRulesRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVpnVpnFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceVpnVpnFirewallRulesRequest req = new GetOrganizationApplianceVpnVpnFirewallRulesRequest("libero");            

            GetOrganizationApplianceVpnVpnFirewallRulesResponse res = sdk.appliance.getOrganizationApplianceVpnVpnFirewallRules(req);

            if (res.getOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## swapNetworkApplianceWarmSpare

Swap MX primary and warm spare appliances

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SwapNetworkApplianceWarmSpareRequest;
import org.openapis.openapi.models.operations.SwapNetworkApplianceWarmSpareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SwapNetworkApplianceWarmSpareRequest req = new SwapNetworkApplianceWarmSpareRequest("occaecati");            

            SwapNetworkApplianceWarmSpareResponse res = sdk.appliance.swapNetworkApplianceWarmSpare(req);

            if (res.swapNetworkApplianceWarmSpare200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceApplianceUplinksSettings

Update the uplink settings for an MX appliance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequest;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfaces;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Pppoe;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1PppoeAuthentication;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Svis;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4AssignmentModeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4Nameservers;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6AssignmentModeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6Nameservers;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1VlanTagging;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2PppoeAuthentication;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4AssignmentModeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4Nameservers;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6AssignmentModeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6Nameservers;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceApplianceUplinksSettingsRequest req = new UpdateDeviceApplianceUplinksSettingsRequest(                new UpdateDeviceApplianceUplinksSettingsRequestBody(                new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfaces() {{
                                                wan1 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1() {{
                                                    enabled = false;
                                                    pppoe = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Pppoe() {{
                                                        authentication = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1PppoeAuthentication() {{
                                                            enabled = false;
                                                            password = "aliquam";
                                                            username = "Eve_Yundt31";
                                                        }};;
                                                        enabled = false;
                                                    }};;
                                                    svis = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Svis() {{
                                                        ipv4 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4() {{
                                                            address = "655 Kuhic Camp";
                                                            assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4AssignmentModeEnum.STATIC_;
                                                            gateway = "architecto";
                                                            nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4Nameservers() {{
                                                                addresses = new String[]{{
                                                                    add("iste"),
                                                                    add("assumenda"),
                                                                    add("tempore"),
                                                                }};
                                                            }};;
                                                        }};;
                                                        ipv6 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6() {{
                                                            address = "209 Robel Extension";
                                                            assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6AssignmentModeEnum.DYNAMIC;
                                                            gateway = "saepe";
                                                            nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6Nameservers() {{
                                                                addresses = new String[]{{
                                                                    add("doloremque"),
                                                                    add("quis"),
                                                                    add("veniam"),
                                                                }};
                                                            }};;
                                                        }};;
                                                    }};;
                                                    vlanTagging = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1VlanTagging() {{
                                                        enabled = false;
                                                        vlanId = 727481L;
                                                    }};;
                                                }};;
                                                wan2 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2() {{
                                                    enabled = false;
                                                    pppoe = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe() {{
                                                        authentication = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2PppoeAuthentication() {{
                                                            enabled = false;
                                                            password = "architecto";
                                                            username = "Kurt_Krajcik25";
                                                        }};;
                                                        enabled = false;
                                                    }};;
                                                    svis = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis() {{
                                                        ipv4 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4() {{
                                                            address = "91931 Langworth Coves";
                                                            assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4AssignmentModeEnum.STATIC_;
                                                            gateway = "amet";
                                                            nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4Nameservers() {{
                                                                addresses = new String[]{{
                                                                    add("ab"),
                                                                    add("velit"),
                                                                }};
                                                            }};;
                                                        }};;
                                                        ipv6 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6() {{
                                                            address = "739 Joanie Rest";
                                                            assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6AssignmentModeEnum.DYNAMIC;
                                                            gateway = "quis";
                                                            nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6Nameservers() {{
                                                                addresses = new String[]{{
                                                                    add("libero"),
                                                                    add("minus"),
                                                                }};
                                                            }};;
                                                        }};;
                                                    }};;
                                                    vlanTagging = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging() {{
                                                        enabled = false;
                                                        vlanId = 815200L;
                                                    }};;
                                                }};;
                                            }};);, "facilis");            

            UpdateDeviceApplianceUplinksSettingsResponse res = sdk.appliance.updateDeviceApplianceUplinksSettings(req);

            if (res.updateDeviceApplianceUplinksSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceConnectivityMonitoringDestinations

Update the connectivity testing destinations for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest req = new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest("ad") {{
                requestBody = new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody() {{
                    destinations = new org.openapis.openapi.models.operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations[]{{
                        add(new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations("debitis") {{
                            default_ = false;
                            description = "voluptatibus";
                            ip = "consequuntur";
                        }}),
                        add(new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations("eos") {{
                            default_ = false;
                            description = "labore";
                            ip = "rerum";
                        }}),
                        add(new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations("neque") {{
                            default_ = false;
                            description = "reprehenderit";
                            ip = "nostrum";
                        }}),
                        add(new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations("rem") {{
                            default_ = false;
                            description = "iusto";
                            ip = "est";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse res = sdk.appliance.updateNetworkApplianceConnectivityMonitoringDestinations(req);

            if (res.updateNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceContentFiltering

Update the content filtering settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceContentFilteringRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceContentFilteringRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceContentFilteringResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceContentFilteringRequest req = new UpdateNetworkApplianceContentFilteringRequest("fugiat") {{
                requestBody = new UpdateNetworkApplianceContentFilteringRequestBody() {{
                    allowedUrlPatterns = new String[]{{
                        add("officiis"),
                        add("ducimus"),
                        add("dolor"),
                    }};
                    blockedUrlCategories = new String[]{{
                        add("error"),
                    }};
                    blockedUrlPatterns = new String[]{{
                        add("vitae"),
                        add("dignissimos"),
                        add("esse"),
                        add("fugiat"),
                    }};
                    urlCategoryListSize = UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum.FULL_LIST;
                }};;
            }};            

            UpdateNetworkApplianceContentFilteringResponse res = sdk.appliance.updateNetworkApplianceContentFiltering(req);

            if (res.updateNetworkApplianceContentFiltering200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallCellularFirewallRules

Update the cellular firewall rules of an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallCellularFirewallRulesRequest req = new UpdateNetworkApplianceFirewallCellularFirewallRulesRequest("enim") {{
                requestBody = new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules("saepe", UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum.ICMP, "eos") {{
                            comment = "iusto";
                            destCidr = "dignissimos";
                            destPort = "libero";
                            policy = UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum.ANY;
                            srcCidr = "incidunt";
                            srcPort = "accusamus";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules("sequi", UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum.ICMP6, "illo") {{
                            comment = "reiciendis";
                            destCidr = "earum";
                            destPort = "reprehenderit";
                            policy = UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum.ICMP;
                            srcCidr = "repellat";
                            srcPort = "quisquam";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules("consequatur", UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum.ANY, "nam") {{
                            comment = "labore";
                            destCidr = "assumenda";
                            destPort = "aliquam";
                            policy = UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum.ICMP6;
                            srcCidr = "laudantium";
                            srcPort = "repudiandae";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules("vero", UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum.UDP, "iure") {{
                            comment = "expedita";
                            destCidr = "quas";
                            destPort = "provident";
                            policy = UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum.TCP;
                            srcCidr = "dignissimos";
                            srcPort = "corporis";
                            syslogEnabled = false;
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkApplianceFirewallCellularFirewallRulesResponse res = sdk.appliance.updateNetworkApplianceFirewallCellularFirewallRules(req);

            if (res.updateNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallFirewalledService

Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallFirewalledServiceRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallFirewalledServiceRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallFirewalledServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallFirewalledServiceRequest req = new UpdateNetworkApplianceFirewallFirewalledServiceRequest(                new UpdateNetworkApplianceFirewallFirewalledServiceRequestBody(UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum.RESTRICTED) {{
                                allowedIps = new String[]{{
                                    add("commodi"),
                                    add("aut"),
                                    add("voluptatem"),
                                    add("ad"),
                                }};
                            }};, "quae", "amet");            

            UpdateNetworkApplianceFirewallFirewalledServiceResponse res = sdk.appliance.updateNetworkApplianceFirewallFirewalledService(req);

            if (res.updateNetworkApplianceFirewallFirewalledService200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallInboundCellularFirewallRules

Update the inbound cellular firewall rules of an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest req = new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest("praesentium") {{
                requestBody = new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules("iusto", UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.ICMP6, "dolorum") {{
                            comment = "cum";
                            destCidr = "amet";
                            destPort = "quasi";
                            policy = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.ICMP6;
                            srcCidr = "doloremque";
                            srcPort = "earum";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules("facilis", UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.ANY, "sint") {{
                            comment = "necessitatibus";
                            destCidr = "provident";
                            destPort = "repudiandae";
                            policy = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.ICMP;
                            srcCidr = "molestiae";
                            srcPort = "itaque";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules("sunt", UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.ICMP, "occaecati") {{
                            comment = "accusamus";
                            destCidr = "eos";
                            destPort = "totam";
                            policy = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.ANY;
                            srcCidr = "velit";
                            srcPort = "dolor";
                            syslogEnabled = false;
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkApplianceFirewallInboundCellularFirewallRulesResponse res = sdk.appliance.updateNetworkApplianceFirewallInboundCellularFirewallRules(req);

            if (res.updateNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallInboundFirewallRules

Update the inbound firewall rules of an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallInboundFirewallRulesRequest req = new UpdateNetworkApplianceFirewallInboundFirewallRulesRequest("beatae") {{
                requestBody = new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules("aperiam", UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum.UDP, "velit") {{
                            comment = "labore";
                            destCidr = "minus";
                            destPort = "esse";
                            policy = UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum.ANY;
                            srcCidr = "rerum";
                            srcPort = "ea";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules("natus", UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum.TCP, "amet") {{
                            comment = "porro";
                            destCidr = "provident";
                            destPort = "consectetur";
                            policy = UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum.ICMP6;
                            srcCidr = "consectetur";
                            srcPort = "soluta";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules("vero", UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum.ICMP, "repellat") {{
                            comment = "tenetur";
                            destCidr = "aspernatur";
                            destPort = "quo";
                            policy = UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum.UDP;
                            srcCidr = "laborum";
                            srcPort = "dignissimos";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules("hic", UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum.UDP, "non") {{
                            comment = "explicabo";
                            destCidr = "explicabo";
                            destPort = "exercitationem";
                            policy = UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum.ICMP;
                            srcCidr = "ab";
                            srcPort = "illo";
                            syslogEnabled = false;
                        }}),
                    }};
                    syslogDefaultRule = false;
                }};;
            }};            

            UpdateNetworkApplianceFirewallInboundFirewallRulesResponse res = sdk.appliance.updateNetworkApplianceFirewallInboundFirewallRules(req);

            if (res.updateNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallL3FirewallRules

Update the L3 firewall rules of an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallL3FirewallRulesRequest req = new UpdateNetworkApplianceFirewallL3FirewallRulesRequest("in") {{
                requestBody = new UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules("rem", UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.ANY, "deleniti") {{
                            comment = "labore";
                            destCidr = "numquam";
                            destPort = "repudiandae";
                            policy = UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.ICMP6;
                            srcCidr = "explicabo";
                            srcPort = "accusamus";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules("modi", UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.ANY, "mollitia") {{
                            comment = "enim";
                            destCidr = "voluptate";
                            destPort = "similique";
                            policy = UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.TCP;
                            srcCidr = "magnam";
                            srcPort = "sit";
                            syslogEnabled = false;
                        }}),
                    }};
                    syslogDefaultRule = false;
                }};;
            }};            

            UpdateNetworkApplianceFirewallL3FirewallRulesResponse res = sdk.appliance.updateNetworkApplianceFirewallL3FirewallRules(req);

            if (res.updateNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallL7FirewallRules

Update the MX L7 firewall rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL7FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallL7FirewallRulesRequest req = new UpdateNetworkApplianceFirewallL7FirewallRulesRequest("fugiat") {{
                requestBody = new UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules() {{
                            policy = UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            type = UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum.HOST;
                            value = "veniam";
                        }}),
                        add(new UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules() {{
                            policy = UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            type = UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum.PORT;
                            value = "ab";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkApplianceFirewallL7FirewallRulesResponse res = sdk.appliance.updateNetworkApplianceFirewallL7FirewallRules(req);

            if (res.updateNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallOneToManyNatRules

Set the 1:Many NAT mapping rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallOneToManyNatRulesRequest req = new UpdateNetworkApplianceFirewallOneToManyNatRulesRequest(                new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules[]{{
                                                add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules[]{{
                                                                    add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                                        allowedIps = new String[]{{
                                                                            add("amet"),
                                                                            add("autem"),
                                                                            add("fuga"),
                                                                        }};
                                                                        localIp = "alias";
                                                                        localPort = "rem";
                                                                        name = "Brandy Langosh Jr.";
                                                                        protocol = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.TCP;
                                                                        publicPort = "saepe";
                                                                    }}),
                                                                }}, "delectus", UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum.INTERNET2) {{
                                                    portRules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules[]{{
                                                        add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                            allowedIps = new String[]{{
                                                                add("odio"),
                                                                add("commodi"),
                                                                add("numquam"),
                                                                add("dolorum"),
                                                            }};
                                                            localIp = "possimus";
                                                            localPort = "voluptate";
                                                            name = "Peggy Hagenes";
                                                            protocol = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.TCP;
                                                            publicPort = "distinctio";
                                                        }}),
                                                    }};
                                                    publicIp = "iusto";
                                                    uplink = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum.INTERNET2;
                                                }}),
                                            }});, "nulla");            

            UpdateNetworkApplianceFirewallOneToManyNatRulesResponse res = sdk.appliance.updateNetworkApplianceFirewallOneToManyNatRules(req);

            if (res.updateNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallOneToOneNatRules

Set the 1:1 NAT mapping rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallOneToOneNatRulesRequest req = new UpdateNetworkApplianceFirewallOneToOneNatRulesRequest(                new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules[]{{
                                                add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules("officia") {{
                                                    allowedInbound = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound[]{{
                                                        add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound() {{
                                                            allowedIps = new String[]{{
                                                                add("eveniet"),
                                                            }};
                                                            destinationPorts = new String[]{{
                                                                add("voluptatem"),
                                                                add("incidunt"),
                                                                add("qui"),
                                                                add("qui"),
                                                            }};
                                                            protocol = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum.UDP;
                                                        }}),
                                                    }};
                                                    lanIp = "harum";
                                                    name = "Doris Jacobi";
                                                    publicIp = "voluptatibus";
                                                    uplink = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum.INTERNET2;
                                                }}),
                                            }});, "libero");            

            UpdateNetworkApplianceFirewallOneToOneNatRulesResponse res = sdk.appliance.updateNetworkApplianceFirewallOneToOneNatRules(req);

            if (res.updateNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallPortForwardingRules

Update the port forwarding rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallPortForwardingRulesRequest req = new UpdateNetworkApplianceFirewallPortForwardingRulesRequest(                new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules[]{{
                                                add(new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules(                new String[]{{
                                                                    add("rerum"),
                                                                    add("recusandae"),
                                                                }}, "voluptates", "non", UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum.UDP, "quia") {{
                                                    allowedIps = new String[]{{
                                                        add("ea"),
                                                        add("impedit"),
                                                    }};
                                                    lanIp = "ducimus";
                                                    localPort = "odit";
                                                    name = "Faith Zulauf";
                                                    protocol = UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum.UDP;
                                                    publicPort = "accusamus";
                                                    uplink = UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum.BOTH;
                                                }}),
                                            }});, "ullam");            

            UpdateNetworkApplianceFirewallPortForwardingRulesResponse res = sdk.appliance.updateNetworkApplianceFirewallPortForwardingRules(req);

            if (res.updateNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallSettings

Update the firewall settings for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtection;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuard;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuardModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallSettingsRequest req = new UpdateNetworkApplianceFirewallSettingsRequest("dicta") {{
                requestBody = new UpdateNetworkApplianceFirewallSettingsRequestBody() {{
                    spoofingProtection = new UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtection() {{
                        ipSourceGuard = new UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuard() {{
                            mode = UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuardModeEnum.LOG;
                        }};;
                    }};;
                }};;
            }};            

            UpdateNetworkApplianceFirewallSettingsResponse res = sdk.appliance.updateNetworkApplianceFirewallSettings(req);

            if (res.updateNetworkApplianceFirewallSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkAppliancePort

Update the per-port VLAN settings for a single MX port.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePortRequest;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePortRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkAppliancePortRequest req = new UpdateNetworkAppliancePortRequest("quae", "officiis") {{
                requestBody = new UpdateNetworkAppliancePortRequestBody() {{
                    accessPolicy = "architecto";
                    allowedVlans = "architecto";
                    dropUntaggedTraffic = false;
                    enabled = false;
                    type = "enim";
                    vlan = 758985L;
                }};;
            }};            

            UpdateNetworkAppliancePortResponse res = sdk.appliance.updateNetworkAppliancePort(req);

            if (res.updateNetworkAppliancePort200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkAppliancePrefixesDelegatedStatic

Update a static delegated prefix from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequest;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePrefixesDelegatedStaticResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkAppliancePrefixesDelegatedStaticRequest req = new UpdateNetworkAppliancePrefixesDelegatedStaticRequest("perferendis", "facilis") {{
                requestBody = new UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody() {{
                    description = "reiciendis";
                    origin = new UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin() {{
                        interfaces = new String[]{{
                            add("iste"),
                            add("dicta"),
                            add("quos"),
                            add("ullam"),
                        }};
                        type = UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum.INDEPENDENT;
                    }};;
                    prefix = "modi";
                }};;
            }};            

            UpdateNetworkAppliancePrefixesDelegatedStaticResponse res = sdk.appliance.updateNetworkAppliancePrefixesDelegatedStatic(req);

            if (res.updateNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceSecurityIntrusion

Set the supported intrusion settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityIntrusionRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityIntrusionRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityIntrusionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceSecurityIntrusionRequest req = new UpdateNetworkApplianceSecurityIntrusionRequest("maxime") {{
                requestBody = new UpdateNetworkApplianceSecurityIntrusionRequestBody() {{
                    idsRulesets = UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum.BALANCED;
                    mode = UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum.DETECTION;
                    protectedNetworks = new UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks() {{
                        excludedCidr = new String[]{{
                            add("vero"),
                            add("doloribus"),
                            add("impedit"),
                            add("porro"),
                        }};
                        includedCidr = new String[]{{
                            add("totam"),
                            add("reiciendis"),
                            add("ab"),
                            add("sint"),
                        }};
                        useDefault = false;
                    }};;
                }};;
            }};            

            UpdateNetworkApplianceSecurityIntrusionResponse res = sdk.appliance.updateNetworkApplianceSecurityIntrusion(req);

            if (res.updateNetworkApplianceSecurityIntrusion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceSecurityMalware

Set the supported malware settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityMalwareRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityMalwareRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityMalwareRequestBodyModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityMalwareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceSecurityMalwareRequest req = new UpdateNetworkApplianceSecurityMalwareRequest(                new UpdateNetworkApplianceSecurityMalwareRequestBody(UpdateNetworkApplianceSecurityMalwareRequestBodyModeEnum.DISABLED) {{
                                allowedFiles = new org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles[]{{
                                    add(new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles("debitis", "vel") {{
                                        comment = "odio";
                                        sha256 = "nesciunt";
                                    }}),
                                    add(new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles("voluptas", "consequuntur") {{
                                        comment = "neque";
                                        sha256 = "corporis";
                                    }}),
                                }};
                                allowedUrls = new org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls[]{{
                                    add(new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls("eius", "ipsa") {{
                                        comment = "reprehenderit";
                                        url = "distinctio";
                                    }}),
                                    add(new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls("accusantium", "veniam") {{
                                        comment = "rem";
                                        url = "maiores";
                                    }}),
                                    add(new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls("facere", "aliquam") {{
                                        comment = "saepe";
                                        url = "neque";
                                    }}),
                                }};
                            }};, "quos");            

            UpdateNetworkApplianceSecurityMalwareResponse res = sdk.appliance.updateNetworkApplianceSecurityMalware(req);

            if (res.updateNetworkApplianceSecurityMalware200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceSettings

Update the appliance settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSettingsRequestBodyClientTrackingMethodEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSettingsRequestBodyDeploymentModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSettingsRequestBodyDynamicDns;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceSettingsRequest req = new UpdateNetworkApplianceSettingsRequest("fugiat") {{
                requestBody = new UpdateNetworkApplianceSettingsRequestBody() {{
                    clientTrackingMethod = UpdateNetworkApplianceSettingsRequestBodyClientTrackingMethodEnum.UNIQUE_CLIENT_IDENTIFIER;
                    deploymentMode = UpdateNetworkApplianceSettingsRequestBodyDeploymentModeEnum.ROUTED;
                    dynamicDns = new UpdateNetworkApplianceSettingsRequestBodyDynamicDns() {{
                        enabled = false;
                        prefix = "velit";
                    }};;
                }};;
            }};            

            UpdateNetworkApplianceSettingsResponse res = sdk.appliance.updateNetworkApplianceSettings(req);

            if (res.updateNetworkApplianceSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceSingleLan

Update single LAN configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSingleLanRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSingleLanRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSingleLanRequestBodyMandatoryDhcp;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSingleLanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceSingleLanRequest req = new UpdateNetworkApplianceSingleLanRequest("nesciunt") {{
                requestBody = new UpdateNetworkApplianceSingleLanRequestBody() {{
                    applianceIp = "similique";
                    ipv6 = new UpdateNetworkApplianceSingleLanRequestBodyIpv6() {{
                        enabled = false;
                        prefixAssignments = new org.openapis.openapi.models.operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments[]{{
                            add(new UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments() {{
                                autonomous = false;
                                origin = new UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin(UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INDEPENDENT) {{
                                    interfaces = new String[]{{
                                        add("nemo"),
                                        add("doloribus"),
                                        add("possimus"),
                                        add("unde"),
                                    }};
                                    type = UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INDEPENDENT;
                                }};
                                staticApplianceIp6 = "ipsam";
                                staticPrefix = "cupiditate";
                            }}),
                        }};
                    }};;
                    mandatoryDhcp = new UpdateNetworkApplianceSingleLanRequestBodyMandatoryDhcp() {{
                        enabled = false;
                    }};;
                    subnet = "optio";
                }};;
            }};            

            UpdateNetworkApplianceSingleLanResponse res = sdk.appliance.updateNetworkApplianceSingleLan(req);

            if (res.updateNetworkApplianceSingleLan200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceSsid

Update the attributes of an MX SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSsidRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSsidRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSsidRequestBodyAuthModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSsidRequestBodyDhcpEnforcedDeauthentication;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSsidRequestBodyEncryptionModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSsidRequestBodyRadiusServers;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSsidRequestBodyWpaEncryptionModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSsidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceSsidRequest req = new UpdateNetworkApplianceSsidRequest("quidem", "nesciunt") {{
                requestBody = new UpdateNetworkApplianceSsidRequestBody() {{
                    authMode = UpdateNetworkApplianceSsidRequestBodyAuthModeEnum.EIGHT_THOUSAND_AND_TWENTY_ONEX_RADIUS;
                    defaultVlanId = 956124L;
                    dhcpEnforcedDeauthentication = new UpdateNetworkApplianceSsidRequestBodyDhcpEnforcedDeauthentication() {{
                        enabled = false;
                    }};;
                    enabled = false;
                    encryptionMode = UpdateNetworkApplianceSsidRequestBodyEncryptionModeEnum.WEP;
                    name = "Henrietta Nienow";
                    psk = "numquam";
                    radiusServers = new org.openapis.openapi.models.operations.UpdateNetworkApplianceSsidRequestBodyRadiusServers[]{{
                        add(new UpdateNetworkApplianceSsidRequestBodyRadiusServers() {{
                            host = "adipisci";
                            port = 728559L;
                            secret = "in";
                        }}),
                        add(new UpdateNetworkApplianceSsidRequestBodyRadiusServers() {{
                            host = "minima";
                            port = 403147L;
                            secret = "minus";
                        }}),
                        add(new UpdateNetworkApplianceSsidRequestBodyRadiusServers() {{
                            host = "ab";
                            port = 108165L;
                            secret = "hic";
                        }}),
                        add(new UpdateNetworkApplianceSsidRequestBodyRadiusServers() {{
                            host = "nisi";
                            port = 786954L;
                            secret = "dolor";
                        }}),
                    }};
                    visible = false;
                    wpaEncryptionMode = UpdateNetworkApplianceSsidRequestBodyWpaEncryptionModeEnum.WPA2_ONLY;
                }};;
            }};            

            UpdateNetworkApplianceSsidResponse res = sdk.appliance.updateNetworkApplianceSsid(req);

            if (res.updateNetworkApplianceSsid200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceStaticRoute

Update a static route for an MX or teleworker network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceStaticRouteRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceStaticRouteRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceStaticRouteRequest req = new UpdateNetworkApplianceStaticRouteRequest("minima", "architecto") {{
                requestBody = new UpdateNetworkApplianceStaticRouteRequestBody() {{
                    enabled = false;
                    fixedIpAssignments = new java.util.HashMap<String, Object>() {{
                        put("aliquid", "magni");
                    }};
                    gatewayIp = "incidunt";
                    gatewayVlanId = "adipisci";
                    name = "Rodney Heller";
                    reservedIpRanges = new org.openapis.openapi.models.operations.UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges[]{{
                        add(new UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges("consequuntur", "amet", "deserunt") {{
                            comment = "sit";
                            end = "nemo";
                            start = "culpa";
                        }}),
                        add(new UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges("itaque", "a", "quisquam") {{
                            comment = "modi";
                            end = "veniam";
                            start = "quod";
                        }}),
                        add(new UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges("officiis", "architecto", "alias") {{
                            comment = "enim";
                            end = "doloribus";
                            start = "assumenda";
                        }}),
                        add(new UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges("necessitatibus", "quia", "dicta") {{
                            comment = "culpa";
                            end = "ipsa";
                            start = "nobis";
                        }}),
                    }};
                    subnet = "vel";
                }};;
            }};            

            UpdateNetworkApplianceStaticRouteResponse res = sdk.appliance.updateNetworkApplianceStaticRoute(req);

            if (res.updateNetworkApplianceStaticRoute200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceTrafficShaping

Update the traffic shaping settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceTrafficShapingRequest req = new UpdateNetworkApplianceTrafficShapingRequest("debitis") {{
                requestBody = new UpdateNetworkApplianceTrafficShapingRequestBody() {{
                    globalBandwidthLimits = new UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits() {{
                        limitDown = 354821L;
                        limitUp = 103578L;
                    }};;
                }};;
            }};            

            UpdateNetworkApplianceTrafficShapingResponse res = sdk.appliance.updateNetworkApplianceTrafficShaping(req);

            if (res.updateNetworkApplianceTrafficShaping200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceTrafficShapingCustomPerformanceClass

Update a custom performance class for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest req = new UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest("perferendis", "veritatis") {{
                requestBody = new UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody() {{
                    maxJitter = 590585L;
                    maxLatency = 765833L;
                    maxLossPercentage = 435531L;
                    name = "Jermaine Hettinger";
                }};;
            }};            

            UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse res = sdk.appliance.updateNetworkApplianceTrafficShapingCustomPerformanceClass(req);

            if (res.updateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceTrafficShapingRules

Update the traffic shaping settings rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceTrafficShapingRulesRequest req = new UpdateNetworkApplianceTrafficShapingRulesRequest("dignissimos") {{
                requestBody = new UpdateNetworkApplianceTrafficShapingRulesRequestBody() {{
                    defaultRulesEnabled = false;
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules[]{{
                        add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT, "cum") {{
                                                type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                                value = "perspiciatis";
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET, "incidunt") {{
                                                type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION;
                                                value = "libero";
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE, "saepe") {{
                                                type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT;
                                                value = "quod";
                                            }}),
                                        }}) {{
                            definitions = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE, "cum") {{
                                    type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST;
                                    value = "natus";
                                }}),
                            }};
                            dscpTagValue = 983854L;
                            perClientBandwidthLimits = new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits() {{
                                bandwidthLimits = new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                    limitDown = 703966L;
                                    limitUp = 697330L;
                                }};
                                settings = "itaque";
                            }};
                            priority = "laboriosam";
                        }}),
                        add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET, "incidunt") {{
                                                type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET;
                                                value = "eveniet";
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION, "suscipit") {{
                                                type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET;
                                                value = "ipsam";
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET, "est") {{
                                                type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE;
                                                value = "molestias";
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET, "perferendis") {{
                                                type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE;
                                                value = "labore";
                                            }}),
                                        }}) {{
                            definitions = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT, "nemo") {{
                                    type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET;
                                    value = "nesciunt";
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY, "mollitia") {{
                                    type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT;
                                    value = "facilis";
                                }}),
                            }};
                            dscpTagValue = 827051L;
                            perClientBandwidthLimits = new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits() {{
                                bandwidthLimits = new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                    limitDown = 927977L;
                                    limitUp = 718981L;
                                }};
                                settings = "pariatur";
                            }};
                            priority = "ad";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkApplianceTrafficShapingRulesResponse res = sdk.appliance.updateNetworkApplianceTrafficShapingRules(req);

            if (res.updateNetworkApplianceTrafficShapingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceTrafficShapingUplinkBandwidth

Updates the uplink bandwidth settings for your MX network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest req = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest("aliquid") {{
                requestBody = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody() {{
                    bandwidthLimits = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits() {{
                        cellular = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular() {{
                            limitDown = 301309L;
                            limitUp = 308528L;
                        }};;
                        wan1 = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1() {{
                            limitDown = 755868L;
                            limitUp = 942185L;
                        }};;
                        wan2 = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2() {{
                            limitDown = 342921L;
                            limitUp = 888265L;
                        }};;
                    }};;
                }};;
            }};            

            UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse res = sdk.appliance.updateNetworkApplianceTrafficShapingUplinkBandwidth(req);

            if (res.updateNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceTrafficShapingUplinkSelection

Update uplink selection settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailback;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailbackImmediate;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest req = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest("nulla") {{
                requestBody = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody() {{
                    activeActiveAutoVpnEnabled = false;
                    defaultUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum.WAN2;
                    failoverAndFailback = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailback() {{
                        immediate = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailbackImmediate(false);;
                    }};;
                    loadBalancingEnabled = false;
                    vpnTrafficUplinkPreferences = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences[]{{
                        add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum.LOAD_BALANCING,                 new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "sit";
                                                                    fqdn = "aliquid";
                                                                    host = 898638L;
                                                                    network = "sed";
                                                                    port = "deleniti";
                                                                    vlan = 122744L;
                                                                }};;
                                                                id = "3fa4a41c-480d-43f2-932a-f03102d514f4";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "nobis";
                                                                    host = 404422L;
                                                                    network = "repellat";
                                                                    port = "quae";
                                                                    vlan = 533978L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "atque";
                                                        fqdn = "rerum";
                                                        host = 645544L;
                                                        network = "atque";
                                                        port = "nostrum";
                                                        vlan = 542340L;
                                                    }};
                                                    id = "1a58208c-54fe-4fa9-895f-2eac5565d307";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "asperiores";
                                                        host = 924293L;
                                                        network = "voluptates";
                                                        port = "praesentium";
                                                        vlan = 118349L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "iusto";
                                                                    fqdn = "enim";
                                                                    host = 881189L;
                                                                    network = "aperiam";
                                                                    port = "voluptates";
                                                                    vlan = 512310L;
                                                                }};;
                                                                id = "419d8f84-f144-4f3e-87ed-cc4aa5f3cabd";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "aut";
                                                                    host = 369941L;
                                                                    network = "officia";
                                                                    port = "cupiditate";
                                                                    vlan = 442873L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "hic";
                                                        fqdn = "excepturi";
                                                        host = 396610L;
                                                        network = "sed";
                                                        port = "beatae";
                                                        vlan = 627341L;
                                                    }};
                                                    id = "6a4f77a8-7ee3-4e4b-a752-c65b34418e3b";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "iste";
                                                        host = 74921L;
                                                        network = "minus";
                                                        port = "quos";
                                                        vlan = 835646L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "voluptatem";
                                                                    fqdn = "optio";
                                                                    host = 193623L;
                                                                    network = "sunt";
                                                                    port = "vitae";
                                                                    vlan = 973096L;
                                                                }};;
                                                                id = "023b75d2-367f-4e1a-8cc8-df79f0a396d9";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "impedit";
                                                                    host = 196700L;
                                                                    network = "commodi";
                                                                    port = "labore";
                                                                    vlan = 710059L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "necessitatibus";
                                                        fqdn = "accusantium";
                                                        host = 321473L;
                                                        network = "nisi";
                                                        port = "molestiae";
                                                        vlan = 154130L;
                                                    }};
                                                    id = "8227b2d3-0947-40bf-ba4f-a87cf535a6fa";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "corporis";
                                                        host = 252567L;
                                                        network = "necessitatibus";
                                                        port = "distinctio";
                                                        vlan = 983275L;
                                                    }};
                                                }};
                                            }}),
                                        }}) {{
                            failOverCriterion = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum.POOR_PERFORMANCE;
                            performanceClass = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum.CUSTOM) {{
                                builtinPerformanceClassName = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum.VO_IP;
                                customPerformanceClassId = "nostrum";
                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum.BUILTIN;
                            }};
                            preferredUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum.WAN1;
                            trafficFilters = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[]{{
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "qui";
                                                        fqdn = "impedit";
                                                        host = 104736L;
                                                        network = "incidunt";
                                                        port = "dicta";
                                                        vlan = 139133L;
                                                    }};;
                                                    id = "5b0960a6-6815-41a4-b2af-923c5949f83f";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "nemo";
                                                        host = 57470L;
                                                        network = "quisquam";
                                                        port = "tenetur";
                                                        vlan = 555294L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "quasi";
                                            fqdn = "deserunt";
                                            host = 801075L;
                                            network = "laboriosam";
                                            port = "doloremque";
                                            vlan = 31574L;
                                        }};
                                        id = "dec001ac-802e-42ec-89ff-8f0f816ff347";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "eligendi";
                                            host = 94697L;
                                            network = "neque";
                                            port = "vero";
                                            vlan = 566312L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "quisquam";
                                                        fqdn = "eos";
                                                        host = 748023L;
                                                        network = "natus";
                                                        port = "minus";
                                                        vlan = 154389L;
                                                    }};;
                                                    id = "47c88373-a40e-4194-af32-e55055756f5d";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "suscipit";
                                                        host = 866459L;
                                                        network = "sit";
                                                        port = "quidem";
                                                        vlan = 831031L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "aliquid";
                                            fqdn = "asperiores";
                                            host = 955466L;
                                            network = "nobis";
                                            port = "perspiciatis";
                                            vlan = 34245L;
                                        }};
                                        id = "1c6ecbb4-e243-4cf7-89ff-afeda53e5ae6";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "accusantium";
                                            host = 637840L;
                                            network = "impedit";
                                            port = "quasi";
                                            vlan = 502106L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "quo";
                                                        fqdn = "quos";
                                                        host = 994234L;
                                                        network = "voluptatum";
                                                        port = "iste";
                                                        vlan = 361106L;
                                                    }};;
                                                    id = "010f5dd3-d6fa-4180-8e54-c82f168a363c";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "voluptatum";
                                                        host = 498534L;
                                                        network = "adipisci";
                                                        port = "recusandae";
                                                        vlan = 271306L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "id";
                                            fqdn = "sapiente";
                                            host = 152364L;
                                            network = "possimus";
                                            port = "repellat";
                                            vlan = 921060L;
                                        }};
                                        id = "13db4f62-cba3-4f89-81ae-bc0b80a6924d";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "rerum";
                                            host = 153582L;
                                            network = "accusamus";
                                            port = "optio";
                                            vlan = 966576L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "labore";
                                                        fqdn = "expedita";
                                                        host = 548256L;
                                                        network = "rem";
                                                        port = "atque";
                                                        vlan = 886118L;
                                                    }};;
                                                    id = "bdfc4ccc-a99b-4c7f-80b2-dce10873e42b";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "voluptatem";
                                                        host = 430146L;
                                                        network = "at";
                                                        port = "eum";
                                                        vlan = 444479L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "numquam";
                                            fqdn = "sequi";
                                            host = 532320L;
                                            network = "sit";
                                            port = "rerum";
                                            vlan = 84178L;
                                        }};
                                        id = "f6b8ca27-5a60-4a04-8495-cc699171b51c";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "harum";
                                            host = 813224L;
                                            network = "facilis";
                                            port = "beatae";
                                            vlan = 767210L;
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum.DEFAULT_UPLINK,                 new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "quod";
                                                                    fqdn = "dolores";
                                                                    host = 808050L;
                                                                    network = "excepturi";
                                                                    port = "recusandae";
                                                                    vlan = 551778L;
                                                                }};;
                                                                id = "1f30be3e-4320-42d7-a165-76506641870d";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "facere";
                                                                    host = 152887L;
                                                                    network = "inventore";
                                                                    port = "voluptatibus";
                                                                    vlan = 601228L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "molestias";
                                                        fqdn = "beatae";
                                                        host = 420233L;
                                                        network = "ducimus";
                                                        port = "libero";
                                                        vlan = 562065L;
                                                    }};
                                                    id = "e3c8db03-408d-46d3-a4ff-d455906d1263";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "numquam";
                                                        host = 523109L;
                                                        network = "officiis";
                                                        port = "omnis";
                                                        vlan = 206451L;
                                                    }};
                                                }};
                                            }}),
                                        }}) {{
                            failOverCriterion = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum.POOR_PERFORMANCE;
                            performanceClass = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum.BUILTIN) {{
                                builtinPerformanceClassName = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum.VO_IP;
                                customPerformanceClassId = "quisquam";
                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum.BUILTIN;
                            }};
                            preferredUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum.WAN2;
                            trafficFilters = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[]{{
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "odit";
                                                        fqdn = "ad";
                                                        host = 193990L;
                                                        network = "beatae";
                                                        port = "iusto";
                                                        vlan = 456865L;
                                                    }};;
                                                    id = "47dc915a-d2ca-4f5d-9672-3dc0f5ae2f3a";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "harum";
                                                        host = 496578L;
                                                        network = "doloremque";
                                                        port = "perferendis";
                                                        vlan = 514480L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "mollitia";
                                            fqdn = "impedit";
                                            host = 880998L;
                                            network = "et";
                                            port = "quas";
                                            vlan = 501462L;
                                        }};
                                        id = "b1c4ee2c-8c6c-4e61-9fee-b1c7cbdb6eec";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "quaerat";
                                            host = 215959L;
                                            network = "ducimus";
                                            port = "laudantium";
                                            vlan = 701786L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "provident";
                                                        fqdn = "adipisci";
                                                        host = 34267L;
                                                        network = "magnam";
                                                        port = "repellat";
                                                        vlan = 607631L;
                                                    }};;
                                                    id = "26bad255-3819-4b47-8b0e-d20e56248fff";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "nesciunt";
                                                        host = 585628L;
                                                        network = "animi";
                                                        port = "provident";
                                                        vlan = 106495L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "corrupti";
                                            fqdn = "molestiae";
                                            host = 340101L;
                                            network = "iure";
                                            port = "ab";
                                            vlan = 308658L;
                                        }};
                                        id = "3f5a6c98-b555-4540-80d4-0bcacc6cbd6b";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "maiores";
                                            host = 235482L;
                                            network = "necessitatibus";
                                            port = "maxime";
                                            vlan = 586717L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "aliquam";
                                                        fqdn = "provident";
                                                        host = 875693L;
                                                        network = "earum";
                                                        port = "doloremque";
                                                        vlan = 217504L;
                                                    }};;
                                                    id = "004978a6-1fa1-4cf2-8688-f77c1ffc71dc";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "ab";
                                                        host = 405789L;
                                                        network = "consectetur";
                                                        port = "maiores";
                                                        vlan = 153097L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "mollitia";
                                            fqdn = "nam";
                                            host = 827314L;
                                            network = "quo";
                                            port = "fuga";
                                            vlan = 733763L;
                                        }};
                                        id = "62676696-e1ec-4002-a1b3-35d89acb3ecf";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "id";
                                            host = 542017L;
                                            network = "quibusdam";
                                            port = "sit";
                                            vlan = 778039L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "recusandae";
                                                        fqdn = "quisquam";
                                                        host = 818078L;
                                                        network = "dignissimos";
                                                        port = "iste";
                                                        vlan = 588473L;
                                                    }};;
                                                    id = "390066a6-d2d0-4003-9533-8cec086fa21e";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "dicta";
                                                        host = 369099L;
                                                        network = "consequuntur";
                                                        port = "cumque";
                                                        vlan = 696219L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "sequi";
                                            fqdn = "eligendi";
                                            host = 528315L;
                                            network = "perferendis";
                                            port = "laborum";
                                            vlan = 609172L;
                                        }};
                                        id = "7ff334cd-df85-47a9-a618-76c6ab21d29d";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "impedit";
                                            host = 601803L;
                                            network = "ut";
                                            port = "facere";
                                            vlan = 377269L;
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum.DEFAULT_UPLINK,                 new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "libero";
                                                                    fqdn = "quia";
                                                                    host = 609094L;
                                                                    network = "dicta";
                                                                    port = "qui";
                                                                    vlan = 130934L;
                                                                }};;
                                                                id = "030d83f5-aeb7-4799-922e-8c1f8493825f";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "porro";
                                                                    host = 309634L;
                                                                    network = "magni";
                                                                    port = "cumque";
                                                                    vlan = 552687L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "sint";
                                                        fqdn = "nobis";
                                                        host = 186130L;
                                                        network = "accusantium";
                                                        port = "consequatur";
                                                        vlan = 773262L;
                                                    }};
                                                    id = "e78a1bd8-fb7a-40a1-96ce-723d4097fa30";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "iste";
                                                        host = 646776L;
                                                        network = "hic";
                                                        port = "ducimus";
                                                        vlan = 160260L;
                                                    }};
                                                }};
                                            }}),
                                        }}) {{
                            failOverCriterion = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum.UPLINK_DOWN;
                            performanceClass = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum.BUILTIN) {{
                                builtinPerformanceClassName = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum.VO_IP;
                                customPerformanceClassId = "repellendus";
                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum.BUILTIN;
                            }};
                            preferredUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum.BEST_FOR_VO_IP;
                            trafficFilters = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[]{{
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "rerum";
                                                        fqdn = "dolorum";
                                                        host = 841816L;
                                                        network = "earum";
                                                        port = "excepturi";
                                                        vlan = 256567L;
                                                    }};;
                                                    id = "7c9a867b-c424-4266-a581-6ddca8ef51fc";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "modi";
                                                        host = 768244L;
                                                        network = "ipsam";
                                                        port = "occaecati";
                                                        vlan = 219279L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "debitis";
                                            fqdn = "cumque";
                                            host = 806124L;
                                            network = "et";
                                            port = "beatae";
                                            vlan = 662068L;
                                        }};
                                        id = "08364290-68b8-4502-a55e-7f73bc845e32";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "est";
                                            host = 226181L;
                                            network = "veritatis";
                                            port = "error";
                                            vlan = 973894L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "facilis";
                                                        fqdn = "maiores";
                                                        host = 622968L;
                                                        network = "recusandae";
                                                        port = "a";
                                                        vlan = 234964L;
                                                    }};;
                                                    id = "ffdd9f7f-079a-4f4d-b572-4cdb0f4d2811";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "iusto";
                                                        host = 854800L;
                                                        network = "enim";
                                                        port = "iure";
                                                        vlan = 512408L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "quisquam";
                                            fqdn = "quasi";
                                            host = 144240L;
                                            network = "quo";
                                            port = "temporibus";
                                            vlan = 652092L;
                                        }};
                                        id = "ad0ec7af-edbd-480d-b448-a47f9390c588";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "voluptatem";
                                            host = 591774L;
                                            network = "quas";
                                            port = "ipsum";
                                            vlan = 874283L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "itaque";
                                                        fqdn = "et";
                                                        host = 181267L;
                                                        network = "impedit";
                                                        port = "ex";
                                                        vlan = 507874L;
                                                    }};;
                                                    id = "91f82ce1-1571-4723-8537-7dcfa89df975";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "sequi";
                                                        host = 336640L;
                                                        network = "commodi";
                                                        port = "vel";
                                                        vlan = 522824L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "magnam";
                                            fqdn = "accusamus";
                                            host = 861823L;
                                            network = "repudiandae";
                                            port = "quibusdam";
                                            vlan = 505799L;
                                        }};
                                        id = "5a9065e6-28bd-4fc2-832b-6c879923b7e1";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "ad";
                                            host = 539886L;
                                            network = "ut";
                                            port = "asperiores";
                                            vlan = 444625L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "sit";
                                                        fqdn = "possimus";
                                                        host = 718879L;
                                                        network = "distinctio";
                                                        port = "assumenda";
                                                        vlan = 850406L;
                                                    }};;
                                                    id = "b484708f-b4e3-491e-abc1-58c4c4e54599";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "fuga";
                                                        host = 234845L;
                                                        network = "modi";
                                                        port = "aspernatur";
                                                        vlan = 129762L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "aperiam";
                                            fqdn = "perspiciatis";
                                            host = 145841L;
                                            network = "itaque";
                                            port = "unde";
                                            vlan = 767778L;
                                        }};
                                        id = "3ddc5f11-1dea-4102-ad54-1a4d190feb21";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "quas";
                                            host = 55407L;
                                            network = "distinctio";
                                            port = "placeat";
                                            vlan = 801958L;
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                    wanTrafficUplinkPreferences = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences[]{{
                        add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum.WAN2,                 new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                                cidr = "odio";
                                                                                port = "sit";
                                                                            }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                                cidr = "voluptatum";
                                                                                host = 271550L;
                                                                                port = "delectus";
                                                                                vlan = 461853L;
                                                                            }};) {{
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "cupiditate";
                                                                    port = "modi";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "nisi";
                                                                    host = 131596L;
                                                                    port = "modi";
                                                                    vlan = 39210L;
                                                                }};) {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "magni";
                                                        port = "consequuntur";
                                                    }};
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "eius";
                                                        host = 417030L;
                                                        port = "ipsam";
                                                        vlan = 426819L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                                cidr = "labore";
                                                                                port = "fugiat";
                                                                            }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                                cidr = "quidem";
                                                                                host = 350202L;
                                                                                port = "veniam";
                                                                                vlan = 267988L;
                                                                            }};) {{
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "sed";
                                                                    port = "eos";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "consequuntur";
                                                                    host = 338514L;
                                                                    port = "vitae";
                                                                    vlan = 577496L;
                                                                }};) {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "libero";
                                                        port = "ratione";
                                                    }};
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "optio";
                                                        host = 904051L;
                                                        port = "maiores";
                                                        vlan = 35219L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                                cidr = "autem";
                                                                                port = "quo";
                                                                            }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                                cidr = "molestiae";
                                                                                host = 805128L;
                                                                                port = "facere";
                                                                                vlan = 769247L;
                                                                            }};) {{
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "est";
                                                                    port = "doloribus";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "provident";
                                                                    host = 1594L;
                                                                    port = "deserunt";
                                                                    vlan = 145450L;
                                                                }};) {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "quae";
                                                        port = "similique";
                                                    }};
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "quo";
                                                        host = 379666L;
                                                        port = "ex";
                                                        vlan = 571550L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                                cidr = "amet";
                                                                                port = "adipisci";
                                                                            }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                                cidr = "minus";
                                                                                host = 943828L;
                                                                                port = "similique";
                                                                                vlan = 686784L;
                                                                            }};) {{
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "corrupti";
                                                                    port = "quae";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "facere";
                                                                    host = 409857L;
                                                                    port = "libero";
                                                                    vlan = 722500L;
                                                                }};) {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "deleniti";
                                                        port = "quasi";
                                                    }};
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "voluptatem";
                                                        host = 396184L;
                                                        port = "laudantium";
                                                        vlan = 601944L;
                                                    }};
                                                }};
                                            }}),
                                        }}) {{
                            preferredUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum.WAN1;
                            trafficFilters = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters[]{{
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "nisi";
                                                                    port = "explicabo";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "sequi";
                                                                    host = 4787L;
                                                                    port = "reiciendis";
                                                                    vlan = 553766L;
                                                                }};) {{
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "eligendi";
                                                        port = "hic";
                                                    }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "quo";
                                                        host = 75610L;
                                                        port = "nobis";
                                                        vlan = 460803L;
                                                    }};) {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "sed";
                                            port = "minus";
                                        }};
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "possimus";
                                            host = 963470L;
                                            port = "harum";
                                            vlan = 304964L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "pariatur";
                                                                    port = "expedita";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "autem";
                                                                    host = 731931L;
                                                                    port = "recusandae";
                                                                    vlan = 342226L;
                                                                }};) {{
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "dolorem";
                                                        port = "hic";
                                                    }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "repellendus";
                                                        host = 721044L;
                                                        port = "ab";
                                                        vlan = 297970L;
                                                    }};) {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "vitae";
                                            port = "maiores";
                                        }};
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "architecto";
                                            host = 698117L;
                                            port = "assumenda";
                                            vlan = 176333L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "temporibus";
                                                                    port = "id";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "quae";
                                                                    host = 414439L;
                                                                    port = "a";
                                                                    vlan = 791282L;
                                                                }};) {{
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "aspernatur";
                                                        port = "dolores";
                                                    }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "laborum";
                                                        host = 875200L;
                                                        port = "eos";
                                                        vlan = 27653L;
                                                    }};) {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "voluptas";
                                            port = "laudantium";
                                        }};
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "excepturi";
                                            host = 616619L;
                                            port = "deleniti";
                                            vlan = 900411L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "nemo";
                                                                    port = "non";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "recusandae";
                                                                    host = 605043L;
                                                                    port = "ipsa";
                                                                    vlan = 302905L;
                                                                }};) {{
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "sint";
                                                        port = "placeat";
                                                    }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "ullam";
                                                        host = 476084L;
                                                        port = "itaque";
                                                        vlan = 523156L;
                                                    }};) {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "nam";
                                            port = "quia";
                                        }};
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "ab";
                                            host = 643864L;
                                            port = "sed";
                                            vlan = 501773L;
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum.WAN2,                 new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                                cidr = "placeat";
                                                                                port = "reiciendis";
                                                                            }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                                cidr = "dolores";
                                                                                host = 295307L;
                                                                                port = "pariatur";
                                                                                vlan = 705307L;
                                                                            }};) {{
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "praesentium";
                                                                    port = "sint";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "exercitationem";
                                                                    host = 739938L;
                                                                    port = "voluptatum";
                                                                    vlan = 704665L;
                                                                }};) {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "possimus";
                                                        port = "ipsam";
                                                    }};
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "fugit";
                                                        host = 134267L;
                                                        port = "at";
                                                        vlan = 850628L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                                cidr = "adipisci";
                                                                                port = "cupiditate";
                                                                            }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                                cidr = "occaecati";
                                                                                host = 258036L;
                                                                                port = "fugiat";
                                                                                vlan = 473386L;
                                                                            }};) {{
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "qui";
                                                                    port = "tenetur";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "molestiae";
                                                                    host = 292571L;
                                                                    port = "ullam";
                                                                    vlan = 245990L;
                                                                }};) {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "nemo";
                                                        port = "natus";
                                                    }};
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "provident";
                                                        host = 230594L;
                                                        port = "dolor";
                                                        vlan = 344010L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                                cidr = "soluta";
                                                                                port = "cum";
                                                                            }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                                cidr = "in";
                                                                                host = 966956L;
                                                                                port = "commodi";
                                                                                vlan = 414438L;
                                                                            }};) {{
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "nesciunt";
                                                                    port = "corrupti";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "cupiditate";
                                                                    host = 974724L;
                                                                    port = "ullam";
                                                                    vlan = 680370L;
                                                                }};) {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "repellendus";
                                                        port = "saepe";
                                                    }};
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "distinctio";
                                                        host = 426691L;
                                                        port = "necessitatibus";
                                                        vlan = 610490L;
                                                    }};
                                                }};
                                            }}),
                                        }}) {{
                            preferredUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum.WAN1;
                            trafficFilters = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters[]{{
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "sapiente";
                                                                    port = "alias";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "impedit";
                                                                    host = 254240L;
                                                                    port = "aspernatur";
                                                                    vlan = 749101L;
                                                                }};) {{
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "ducimus";
                                                        port = "itaque";
                                                    }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "necessitatibus";
                                                        host = 252854L;
                                                        port = "doloribus";
                                                        vlan = 757824L;
                                                    }};) {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "cumque";
                                            port = "adipisci";
                                        }};
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "nam";
                                            host = 974775L;
                                            port = "magnam";
                                            vlan = 49285L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "impedit";
                                                                    port = "ducimus";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "nisi";
                                                                    host = 392022L;
                                                                    port = "dolor";
                                                                    vlan = 143976L;
                                                                }};) {{
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "ratione";
                                                        port = "excepturi";
                                                    }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "corrupti";
                                                        host = 667977L;
                                                        port = "perferendis";
                                                        vlan = 840831L;
                                                    }};) {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "voluptatum";
                                            port = "reiciendis";
                                        }};
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "ullam";
                                            host = 393630L;
                                            port = "consequuntur";
                                            vlan = 375549L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "dolores";
                                                                    port = "enim";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "aspernatur";
                                                                    host = 595585L;
                                                                    port = "magni";
                                                                    vlan = 486606L;
                                                                }};) {{
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "optio";
                                                        port = "est";
                                                    }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "inventore";
                                                        host = 164805L;
                                                        port = "repellendus";
                                                        vlan = 27197L;
                                                    }};) {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "maxime";
                                            port = "maxime";
                                        }};
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "accusantium";
                                            host = 408677L;
                                            port = "impedit";
                                            vlan = 518432L;
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse res = sdk.appliance.updateNetworkApplianceTrafficShapingUplinkSelection(req);

            if (res.updateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceVlan

Update a VLAN

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptions;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyIpv6;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyMandatoryDhcp;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyReservedIpRanges;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceVlanRequest req = new UpdateNetworkApplianceVlanRequest("ullam", "doloremque") {{
                requestBody = new UpdateNetworkApplianceVlanRequestBody() {{
                    applianceIp = "est";
                    cidr = "qui";
                    dhcpBootFilename = "praesentium";
                    dhcpBootNextServer = "adipisci";
                    dhcpBootOptionsEnabled = false;
                    dhcpHandling = UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum.RELAY_DHCP_TO_ANOTHER_SERVER;
                    dhcpLeaseTime = UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum.ONE_HOUR;
                    dhcpOptions = new org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptions[]{{
                        add(new UpdateNetworkApplianceVlanRequestBodyDhcpOptions("dolor", UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum.IP, "reiciendis") {{
                            code = "eligendi";
                            type = UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum.INTEGER;
                            value = "deleniti";
                        }}),
                        add(new UpdateNetworkApplianceVlanRequestBodyDhcpOptions("inventore", UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum.INTEGER, "facilis") {{
                            code = "possimus";
                            type = UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum.HEX;
                            value = "consectetur";
                        }}),
                        add(new UpdateNetworkApplianceVlanRequestBodyDhcpOptions("ipsam", UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum.HEX, "illo") {{
                            code = "facilis";
                            type = UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum.IP;
                            value = "nisi";
                        }}),
                    }};
                    dhcpRelayServerIps = new String[]{{
                        add("incidunt"),
                        add("eveniet"),
                    }};
                    dnsNameservers = "quae";
                    fixedIpAssignments = new java.util.HashMap<String, Object>() {{
                        put("asperiores", "veniam");
                        put("quidem", "asperiores");
                    }};
                    groupPolicyId = "eum";
                    ipv6 = new UpdateNetworkApplianceVlanRequestBodyIpv6() {{
                        enabled = false;
                        prefixAssignments = new org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments[]{{
                            add(new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments() {{
                                autonomous = false;
                                origin = new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin(UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INTERNET) {{
                                    interfaces = new String[]{{
                                        add("nemo"),
                                        add("molestias"),
                                        add("architecto"),
                                        add("expedita"),
                                    }};
                                    type = UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INTERNET;
                                }};
                                staticApplianceIp6 = "facilis";
                                staticPrefix = "assumenda";
                            }}),
                            add(new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments() {{
                                autonomous = false;
                                origin = new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin(UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INTERNET) {{
                                    interfaces = new String[]{{
                                        add("maiores"),
                                        add("ipsum"),
                                        add("commodi"),
                                        add("vitae"),
                                    }};
                                    type = UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INDEPENDENT;
                                }};
                                staticApplianceIp6 = "ex";
                                staticPrefix = "neque";
                            }}),
                            add(new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments() {{
                                autonomous = false;
                                origin = new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin(UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INTERNET) {{
                                    interfaces = new String[]{{
                                        add("eos"),
                                        add("alias"),
                                        add("ad"),
                                        add("a"),
                                    }};
                                    type = UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INTERNET;
                                }};
                                staticApplianceIp6 = "atque";
                                staticPrefix = "quaerat";
                            }}),
                        }};
                    }};;
                    mandatoryDhcp = new UpdateNetworkApplianceVlanRequestBodyMandatoryDhcp() {{
                        enabled = false;
                    }};;
                    mask = 45850L;
                    name = "Constance Gislason";
                    reservedIpRanges = new org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyReservedIpRanges[]{{
                        add(new UpdateNetworkApplianceVlanRequestBodyReservedIpRanges("dolor", "ad", "illum") {{
                            comment = "officia";
                            end = "sint";
                            start = "laborum";
                        }}),
                        add(new UpdateNetworkApplianceVlanRequestBodyReservedIpRanges("expedita", "voluptas", "maiores") {{
                            comment = "sit";
                            end = "molestias";
                            start = "voluptas";
                        }}),
                        add(new UpdateNetworkApplianceVlanRequestBodyReservedIpRanges("accusamus", "reiciendis", "consequatur") {{
                            comment = "ea";
                            end = "vel";
                            start = "delectus";
                        }}),
                    }};
                    subnet = "sed";
                    templateVlanType = UpdateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum.SAME;
                    vpnNatSubnet = "voluptates";
                }};;
            }};            

            UpdateNetworkApplianceVlanResponse res = sdk.appliance.updateNetworkApplianceVlan(req);

            if (res.updateNetworkApplianceVlan200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceVlansSettings

Enable/Disable VLANs for the given network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlansSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlansSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlansSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceVlansSettingsRequest req = new UpdateNetworkApplianceVlansSettingsRequest("maiores") {{
                requestBody = new UpdateNetworkApplianceVlansSettingsRequestBody() {{
                    vlansEnabled = false;
                }};;
            }};            

            UpdateNetworkApplianceVlansSettingsResponse res = sdk.appliance.updateNetworkApplianceVlansSettings(req);

            if (res.updateNetworkApplianceVlansSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceVpnBgp

Update a Hub BGP Configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnBgpRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnBgpRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnBgpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceVpnBgpRequest req = new UpdateNetworkApplianceVpnBgpRequest(                new UpdateNetworkApplianceVpnBgpRequestBody(false) {{
                                asNumber = 256647L;
                                ibgpHoldTimer = 248276L;
                                neighbors = new org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors[]{{
                                    add(new UpdateNetworkApplianceVpnBgpRequestBodyNeighbors(414644L, 630747L, 421273L) {{
                                        allowTransit = false;
                                        ebgpHoldTimer = 277935L;
                                        ebgpMultihop = 175455L;
                                        ip = "enim";
                                        ipv6 = new UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6("cum") {{
                                            address = "7651 Lockman Station";
                                        }};
                                        receiveLimit = 842935L;
                                        remoteAsNumber = 667418L;
                                    }}),
                                    add(new UpdateNetworkApplianceVpnBgpRequestBodyNeighbors(630286L, 612181L, 908587L) {{
                                        allowTransit = false;
                                        ebgpHoldTimer = 120432L;
                                        ebgpMultihop = 926266L;
                                        ip = "sapiente";
                                        ipv6 = new UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6("doloribus") {{
                                            address = "1065 Flavie Mill";
                                        }};
                                        receiveLimit = 867434L;
                                        remoteAsNumber = 13655L;
                                    }}),
                                    add(new UpdateNetworkApplianceVpnBgpRequestBodyNeighbors(294650L, 29789L, 849029L) {{
                                        allowTransit = false;
                                        ebgpHoldTimer = 723623L;
                                        ebgpMultihop = 658544L;
                                        ip = "labore";
                                        ipv6 = new UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6("quaerat") {{
                                            address = "9482 Wilkinson Bridge";
                                        }};
                                        receiveLimit = 569872L;
                                        remoteAsNumber = 399946L;
                                    }}),
                                }};
                            }};, "laboriosam");            

            UpdateNetworkApplianceVpnBgpResponse res = sdk.appliance.updateNetworkApplianceVpnBgp(req);

            if (res.updateNetworkApplianceVpnBgp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceVpnSiteToSiteVpn

Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceVpnSiteToSiteVpnRequest req = new UpdateNetworkApplianceVpnSiteToSiteVpnRequest(                new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody(UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum.HUB) {{
                                hubs = new org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs[]{{
                                    add(new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs("vitae") {{
                                        hubId = "ratione";
                                        useDefaultRoute = false;
                                    }}),
                                    add(new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs("atque") {{
                                        hubId = "quisquam";
                                        useDefaultRoute = false;
                                    }}),
                                    add(new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs("culpa") {{
                                        hubId = "nihil";
                                        useDefaultRoute = false;
                                    }}),
                                }};
                                subnets = new org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets[]{{
                                    add(new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets("ad") {{
                                        localSubnet = "a";
                                        useVpn = false;
                                    }}),
                                    add(new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets("suscipit") {{
                                        localSubnet = "cupiditate";
                                        useVpn = false;
                                    }}),
                                    add(new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets("repellendus") {{
                                        localSubnet = "reiciendis";
                                        useVpn = false;
                                    }}),
                                    add(new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets("ab") {{
                                        localSubnet = "delectus";
                                        useVpn = false;
                                    }}),
                                }};
                            }};, "mollitia");            

            UpdateNetworkApplianceVpnSiteToSiteVpnResponse res = sdk.appliance.updateNetworkApplianceVpnSiteToSiteVpn(req);

            if (res.updateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceWarmSpare

Update MX warm spare settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceWarmSpareRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceWarmSpareRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceWarmSpareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceWarmSpareRequest req = new UpdateNetworkApplianceWarmSpareRequest(                new UpdateNetworkApplianceWarmSpareRequestBody(false) {{
                                spareSerial = "praesentium";
                                uplinkMode = "neque";
                                virtualIp1 = "quam";
                                virtualIp2 = "animi";
                            }};, "debitis");            

            UpdateNetworkApplianceWarmSpareResponse res = sdk.appliance.updateNetworkApplianceWarmSpare(req);

            if (res.updateNetworkApplianceWarmSpare200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationApplianceSecurityIntrusion

Sets supported intrusion settings for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceSecurityIntrusionRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceSecurityIntrusionRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceSecurityIntrusionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationApplianceSecurityIntrusionRequest req = new UpdateOrganizationApplianceSecurityIntrusionRequest(                new UpdateOrganizationApplianceSecurityIntrusionRequestBody(                new org.openapis.openapi.models.operations.UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules[]{{
                                                add(new UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules("cumque") {{
                                                    message = "quisquam";
                                                    ruleId = "vitae";
                                                }}),
                                            }});, "architecto");            

            UpdateOrganizationApplianceSecurityIntrusionResponse res = sdk.appliance.updateOrganizationApplianceSecurityIntrusion(req);

            if (res.updateOrganizationApplianceSecurityIntrusion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationApplianceVPNThirdPartyVPNPeers

Update the third party VPN peers for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest req = new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest(                new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBody(                new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers[]{{
                                                add(new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers("exercitationem",                 new String[]{{
                                                                    add("laboriosam"),
                                                                }}, "doloremque") {{
                                                    ikeVersion = UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum.TWO;
                                                    ipsecPolicies = new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies() {{
                                                        childAuthAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA256),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA1),
                                                        }};
                                                        childCipherAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.DES),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.DES),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.AES256),
                                                        }};
                                                        childLifetime = 497695L;
                                                        childPfsGroup = new String[]{{
                                                            add("sapiente"),
                                                            add("deserunt"),
                                                            add("dolor"),
                                                        }};
                                                        ikeAuthAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA1),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA1),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA1),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA1),
                                                        }};
                                                        ikeCipherAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.AES128),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.DES),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.TRIPLEDES),
                                                        }};
                                                        ikeDiffieHellmanGroup = new String[]{{
                                                            add("voluptatum"),
                                                        }};
                                                        ikeLifetime = 561858L;
                                                        ikePrfAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.PRFSHA256),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.DEFAULT_),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.DEFAULT_),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.PRFMD5),
                                                        }};
                                                    }};
                                                    ipsecPoliciesPreset = "vitae";
                                                    localId = "numquam";
                                                    name = "Emma Lueilwitz";
                                                    networkTags = new String[]{{
                                                        add("reprehenderit"),
                                                        add("reprehenderit"),
                                                        add("animi"),
                                                    }};
                                                    privateSubnets = new String[]{{
                                                        add("voluptates"),
                                                    }};
                                                    publicIp = "delectus";
                                                    remoteId = "qui";
                                                    secret = "delectus";
                                                }}),
                                                add(new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers("repellat",                 new String[]{{
                                                                    add("soluta"),
                                                                    add("tempore"),
                                                                    add("culpa"),
                                                                }}, "fugiat") {{
                                                    ikeVersion = UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum.ONE;
                                                    ipsecPolicies = new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies() {{
                                                        childAuthAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA256),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA256),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA256),
                                                        }};
                                                        childCipherAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.TRIPLEDES),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.DES),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.AES192),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.AES192),
                                                        }};
                                                        childLifetime = 71751L;
                                                        childPfsGroup = new String[]{{
                                                            add("sed"),
                                                            add("necessitatibus"),
                                                        }};
                                                        ikeAuthAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA1),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA256),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.MD5),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA1),
                                                        }};
                                                        ikeCipherAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.TRIPLEDES),
                                                        }};
                                                        ikeDiffieHellmanGroup = new String[]{{
                                                            add("quod"),
                                                            add("sunt"),
                                                        }};
                                                        ikeLifetime = 353493L;
                                                        ikePrfAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.PRFSHA256),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.PRFSHA256),
                                                        }};
                                                    }};
                                                    ipsecPoliciesPreset = "officia";
                                                    localId = "est";
                                                    name = "Dr. Pamela Klein";
                                                    networkTags = new String[]{{
                                                        add("nemo"),
                                                        add("est"),
                                                    }};
                                                    privateSubnets = new String[]{{
                                                        add("maxime"),
                                                        add("delectus"),
                                                        add("laboriosam"),
                                                        add("laboriosam"),
                                                    }};
                                                    publicIp = "quam";
                                                    remoteId = "fuga";
                                                    secret = "officia";
                                                }}),
                                                add(new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers("porro",                 new String[]{{
                                                                    add("reiciendis"),
                                                                    add("voluptate"),
                                                                    add("tempore"),
                                                                }}, "in") {{
                                                    ikeVersion = UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum.ONE;
                                                    ipsecPolicies = new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies() {{
                                                        childAuthAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.MD5),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA256),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA256),
                                                        }};
                                                        childCipherAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.AES192),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.AES128),
                                                        }};
                                                        childLifetime = 843591L;
                                                        childPfsGroup = new String[]{{
                                                            add("quidem"),
                                                            add("delectus"),
                                                        }};
                                                        ikeAuthAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA256),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA1),
                                                        }};
                                                        ikeCipherAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.AES256),
                                                        }};
                                                        ikeDiffieHellmanGroup = new String[]{{
                                                            add("expedita"),
                                                            add("rerum"),
                                                            add("totam"),
                                                            add("quod"),
                                                        }};
                                                        ikeLifetime = 133076L;
                                                        ikePrfAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.PRFSHA256),
                                                        }};
                                                    }};
                                                    ipsecPoliciesPreset = "nam";
                                                    localId = "ex";
                                                    name = "Lucia Schinner";
                                                    networkTags = new String[]{{
                                                        add("eos"),
                                                        add("veniam"),
                                                    }};
                                                    privateSubnets = new String[]{{
                                                        add("sint"),
                                                        add("occaecati"),
                                                        add("debitis"),
                                                        add("laboriosam"),
                                                    }};
                                                    publicIp = "eos";
                                                    remoteId = "amet";
                                                    secret = "incidunt";
                                                }}),
                                                add(new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers("sequi",                 new String[]{{
                                                                    add("numquam"),
                                                                    add("laborum"),
                                                                    add("eligendi"),
                                                                    add("autem"),
                                                                }}, "adipisci") {{
                                                    ikeVersion = UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum.TWO;
                                                    ipsecPolicies = new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies() {{
                                                        childAuthAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA256),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA256),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA256),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA1),
                                                        }};
                                                        childCipherAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.NULL_),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.AES192),
                                                        }};
                                                        childLifetime = 801059L;
                                                        childPfsGroup = new String[]{{
                                                            add("totam"),
                                                        }};
                                                        ikeAuthAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.MD5),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA256),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA1),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA256),
                                                        }};
                                                        ikeCipherAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.AES128),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.TRIPLEDES),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.AES192),
                                                        }};
                                                        ikeDiffieHellmanGroup = new String[]{{
                                                            add("ex"),
                                                        }};
                                                        ikeLifetime = 910132L;
                                                        ikePrfAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.PRFSHA1),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.PRFSHA1),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.DEFAULT_),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.PRFSHA1),
                                                        }};
                                                    }};
                                                    ipsecPoliciesPreset = "nostrum";
                                                    localId = "tempora";
                                                    name = "Jesus Kuhn";
                                                    networkTags = new String[]{{
                                                        add("autem"),
                                                    }};
                                                    privateSubnets = new String[]{{
                                                        add("minima"),
                                                        add("ex"),
                                                        add("possimus"),
                                                        add("nesciunt"),
                                                    }};
                                                    publicIp = "corrupti";
                                                    remoteId = "nostrum";
                                                    secret = "fuga";
                                                }}),
                                            }});, "sunt");            

            UpdateOrganizationApplianceVPNThirdPartyVPNPeersResponse res = sdk.appliance.updateOrganizationApplianceVPNThirdPartyVPNPeers(req);

            if (res.updateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationApplianceVpnVpnFirewallRules

Update the firewall rules of an organization's site-to-site VPN

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationApplianceVpnVpnFirewallRulesRequest req = new UpdateOrganizationApplianceVpnVpnFirewallRulesRequest("occaecati") {{
                requestBody = new UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules[]{{
                        add(new UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules("a", UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum.UDP, "repellendus") {{
                            comment = "necessitatibus";
                            destCidr = "fugit";
                            destPort = "autem";
                            policy = UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum.UDP;
                            srcCidr = "fugiat";
                            srcPort = "blanditiis";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules("velit", UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum.TCP, "hic") {{
                            comment = "facilis";
                            destCidr = "molestias";
                            destPort = "dolore";
                            policy = UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum.ANY;
                            srcCidr = "maiores";
                            srcPort = "nisi";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules("aperiam", UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum.TCP, "asperiores") {{
                            comment = "blanditiis";
                            destCidr = "vitae";
                            destPort = "iusto";
                            policy = UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum.ICMP;
                            srcCidr = "molestiae";
                            srcPort = "nam";
                            syslogEnabled = false;
                        }}),
                    }};
                    syslogDefaultRule = false;
                }};;
            }};            

            UpdateOrganizationApplianceVpnVpnFirewallRulesResponse res = sdk.appliance.updateOrganizationApplianceVpnVpnFirewallRules(req);

            if (res.updateOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
