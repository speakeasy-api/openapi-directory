# Appliance

### Available Operations

* [CreateDeviceApplianceVmxAuthenticationToken](#createdeviceappliancevmxauthenticationtoken) - Generate a new vMX authentication token
* [CreateNetworkAppliancePrefixesDelegatedStatic](#createnetworkapplianceprefixesdelegatedstatic) - Add a static delegated prefix from a network
* [CreateNetworkApplianceStaticRoute](#createnetworkappliancestaticroute) - Add a static route for an MX or teleworker network
* [CreateNetworkApplianceTrafficShapingCustomPerformanceClass](#createnetworkappliancetrafficshapingcustomperformanceclass) - Add a custom performance class for an MX network
* [CreateNetworkApplianceVlan](#createnetworkappliancevlan) - Add a VLAN
* [DeleteNetworkAppliancePrefixesDelegatedStatic](#deletenetworkapplianceprefixesdelegatedstatic) - Delete a static delegated prefix from a network
* [DeleteNetworkApplianceStaticRoute](#deletenetworkappliancestaticroute) - Delete a static route from an MX or teleworker network
* [DeleteNetworkApplianceTrafficShapingCustomPerformanceClass](#deletenetworkappliancetrafficshapingcustomperformanceclass) - Delete a custom performance class from an MX network
* [DeleteNetworkApplianceVlan](#deletenetworkappliancevlan) - Delete a VLAN from a network
* [GetDeviceApplianceDhcpSubnets](#getdeviceappliancedhcpsubnets) - Return the DHCP subnet information for an appliance
* [GetDeviceAppliancePerformance](#getdeviceapplianceperformance) - Return the performance score for a single MX
* [GetDeviceAppliancePrefixesDelegated](#getdeviceapplianceprefixesdelegated) - Return current delegated IPv6 prefixes on an appliance.
* [GetDeviceAppliancePrefixesDelegatedVlanAssignments](#getdeviceapplianceprefixesdelegatedvlanassignments) - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* [GetDeviceApplianceUplinksSettings](#getdeviceapplianceuplinkssettings) - Return the uplink settings for an MX appliance
* [GetNetworkApplianceClientSecurityEvents](#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [GetNetworkApplianceConnectivityMonitoringDestinations](#getnetworkapplianceconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MX network
* [GetNetworkApplianceContentFiltering](#getnetworkappliancecontentfiltering) - Return the content filtering settings for an MX network
* [GetNetworkApplianceContentFilteringCategories](#getnetworkappliancecontentfilteringcategories) - List all available content filtering categories for an MX network
* [GetNetworkApplianceFirewallCellularFirewallRules](#getnetworkappliancefirewallcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [GetNetworkApplianceFirewallFirewalledService](#getnetworkappliancefirewallfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [GetNetworkApplianceFirewallFirewalledServices](#getnetworkappliancefirewallfirewalledservices) - List the appliance services and their accessibility rules
* [GetNetworkApplianceFirewallInboundCellularFirewallRules](#getnetworkappliancefirewallinboundcellularfirewallrules) - Return the inbound cellular firewall rules for an MX network
* [GetNetworkApplianceFirewallInboundFirewallRules](#getnetworkappliancefirewallinboundfirewallrules) - Return the inbound firewall rules for an MX network
* [GetNetworkApplianceFirewallL3FirewallRules](#getnetworkappliancefirewalll3firewallrules) - Return the L3 firewall rules for an MX network
* [GetNetworkApplianceFirewallL7FirewallRules](#getnetworkappliancefirewalll7firewallrules) - List the MX L7 firewall rules for an MX network
* [GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories](#getnetworkappliancefirewalll7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network
* [GetNetworkApplianceFirewallOneToManyNatRules](#getnetworkappliancefirewallonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [GetNetworkApplianceFirewallOneToOneNatRules](#getnetworkappliancefirewallonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [GetNetworkApplianceFirewallPortForwardingRules](#getnetworkappliancefirewallportforwardingrules) - Return the port forwarding rules for an MX network
* [GetNetworkApplianceFirewallSettings](#getnetworkappliancefirewallsettings) - Return the firewall settings for this network
* [GetNetworkAppliancePort](#getnetworkapplianceport) - Return per-port VLAN settings for a single MX port.
* [GetNetworkAppliancePorts](#getnetworkapplianceports) - List per-port VLAN settings for all ports of a MX.
* [GetNetworkAppliancePrefixesDelegatedStatic](#getnetworkapplianceprefixesdelegatedstatic) - Return a static delegated prefix from a network
* [GetNetworkAppliancePrefixesDelegatedStatics](#getnetworkapplianceprefixesdelegatedstatics) - List static delegated prefixes for a network
* [GetNetworkApplianceSecurityEvents](#getnetworkappliancesecurityevents) - List the security events for a network
* [GetNetworkApplianceSecurityIntrusion](#getnetworkappliancesecurityintrusion) - Returns all supported intrusion settings for an MX network
* [GetNetworkApplianceSecurityMalware](#getnetworkappliancesecuritymalware) - Returns all supported malware settings for an MX network
* [GetNetworkApplianceSettings](#getnetworkappliancesettings) - Return the appliance settings for a network
* [GetNetworkApplianceSingleLan](#getnetworkappliancesinglelan) - Return single LAN configuration
* [GetNetworkApplianceSsid](#getnetworkappliancessid) - Return a single MX SSID
* [GetNetworkApplianceSsids](#getnetworkappliancessids) - List the MX SSIDs in a network
* [GetNetworkApplianceStaticRoute](#getnetworkappliancestaticroute) - Return a static route for an MX or teleworker network
* [GetNetworkApplianceStaticRoutes](#getnetworkappliancestaticroutes) - List the static routes for an MX or teleworker network
* [GetNetworkApplianceTrafficShaping](#getnetworkappliancetrafficshaping) - Display the traffic shaping settings for an MX network
* [GetNetworkApplianceTrafficShapingCustomPerformanceClass](#getnetworkappliancetrafficshapingcustomperformanceclass) - Return a custom performance class for an MX network
* [GetNetworkApplianceTrafficShapingCustomPerformanceClasses](#getnetworkappliancetrafficshapingcustomperformanceclasses) - List all custom performance classes for an MX network
* [GetNetworkApplianceTrafficShapingRules](#getnetworkappliancetrafficshapingrules) - Display the traffic shaping settings rules for an MX network
* [GetNetworkApplianceTrafficShapingUplinkBandwidth](#getnetworkappliancetrafficshapinguplinkbandwidth) - Returns the uplink bandwidth limits for your MX network
* [GetNetworkApplianceTrafficShapingUplinkSelection](#getnetworkappliancetrafficshapinguplinkselection) - Show uplink selection settings for an MX network
* [GetNetworkApplianceUplinksUsageHistory](#getnetworkapplianceuplinksusagehistory) - Get the sent and received bytes for each uplink of a network.
* [GetNetworkApplianceVlan](#getnetworkappliancevlan) - Return a VLAN
* [GetNetworkApplianceVlans](#getnetworkappliancevlans) - List the VLANs for an MX network
* [GetNetworkApplianceVlansSettings](#getnetworkappliancevlanssettings) - Returns the enabled status of VLANs for the network
* [GetNetworkApplianceVpnBgp](#getnetworkappliancevpnbgp) - Return a Hub BGP Configuration
* [GetNetworkApplianceVpnSiteToSiteVpn](#getnetworkappliancevpnsitetositevpn) - Return the site-to-site VPN settings of a network
* [GetNetworkApplianceWarmSpare](#getnetworkappliancewarmspare) - Return MX warm spare settings
* [GetOrganizationApplianceSecurityEvents](#getorganizationappliancesecurityevents) - List the security events for an organization
* [GetOrganizationApplianceSecurityIntrusion](#getorganizationappliancesecurityintrusion) - Returns all supported intrusion settings for an organization
* [GetOrganizationApplianceUplinkStatuses](#getorganizationapplianceuplinkstatuses) - List the uplink status of every Meraki MX and Z series appliances in the organization
* [GetOrganizationApplianceVpnStats](#getorganizationappliancevpnstats) - Show VPN history stat for networks in an organization
* [GetOrganizationApplianceVpnStatuses](#getorganizationappliancevpnstatuses) - Show VPN status for networks in an organization
* [GetOrganizationApplianceVPNThirdPartyVPNPeers](#getorganizationappliancevpnthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [GetOrganizationApplianceVpnVpnFirewallRules](#getorganizationappliancevpnvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [SwapNetworkApplianceWarmSpare](#swapnetworkappliancewarmspare) - Swap MX primary and warm spare appliances
* [UpdateDeviceApplianceUplinksSettings](#updatedeviceapplianceuplinkssettings) - Update the uplink settings for an MX appliance
* [UpdateNetworkApplianceConnectivityMonitoringDestinations](#updatenetworkapplianceconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MX network
* [UpdateNetworkApplianceContentFiltering](#updatenetworkappliancecontentfiltering) - Update the content filtering settings for an MX network
* [UpdateNetworkApplianceFirewallCellularFirewallRules](#updatenetworkappliancefirewallcellularfirewallrules) - Update the cellular firewall rules of an MX network
* [UpdateNetworkApplianceFirewallFirewalledService](#updatenetworkappliancefirewallfirewalledservice) - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* [UpdateNetworkApplianceFirewallInboundCellularFirewallRules](#updatenetworkappliancefirewallinboundcellularfirewallrules) - Update the inbound cellular firewall rules of an MX network
* [UpdateNetworkApplianceFirewallInboundFirewallRules](#updatenetworkappliancefirewallinboundfirewallrules) - Update the inbound firewall rules of an MX network
* [UpdateNetworkApplianceFirewallL3FirewallRules](#updatenetworkappliancefirewalll3firewallrules) - Update the L3 firewall rules of an MX network
* [UpdateNetworkApplianceFirewallL7FirewallRules](#updatenetworkappliancefirewalll7firewallrules) - Update the MX L7 firewall rules for an MX network
* [UpdateNetworkApplianceFirewallOneToManyNatRules](#updatenetworkappliancefirewallonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network
* [UpdateNetworkApplianceFirewallOneToOneNatRules](#updatenetworkappliancefirewallonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network
* [UpdateNetworkApplianceFirewallPortForwardingRules](#updatenetworkappliancefirewallportforwardingrules) - Update the port forwarding rules for an MX network
* [UpdateNetworkApplianceFirewallSettings](#updatenetworkappliancefirewallsettings) - Update the firewall settings for this network
* [UpdateNetworkAppliancePort](#updatenetworkapplianceport) - Update the per-port VLAN settings for a single MX port.
* [UpdateNetworkAppliancePrefixesDelegatedStatic](#updatenetworkapplianceprefixesdelegatedstatic) - Update a static delegated prefix from a network
* [UpdateNetworkApplianceSecurityIntrusion](#updatenetworkappliancesecurityintrusion) - Set the supported intrusion settings for an MX network
* [UpdateNetworkApplianceSecurityMalware](#updatenetworkappliancesecuritymalware) - Set the supported malware settings for an MX network
* [UpdateNetworkApplianceSettings](#updatenetworkappliancesettings) - Update the appliance settings for a network
* [UpdateNetworkApplianceSingleLan](#updatenetworkappliancesinglelan) - Update single LAN configuration
* [UpdateNetworkApplianceSsid](#updatenetworkappliancessid) - Update the attributes of an MX SSID
* [UpdateNetworkApplianceStaticRoute](#updatenetworkappliancestaticroute) - Update a static route for an MX or teleworker network
* [UpdateNetworkApplianceTrafficShaping](#updatenetworkappliancetrafficshaping) - Update the traffic shaping settings for an MX network
* [UpdateNetworkApplianceTrafficShapingCustomPerformanceClass](#updatenetworkappliancetrafficshapingcustomperformanceclass) - Update a custom performance class for an MX network
* [UpdateNetworkApplianceTrafficShapingRules](#updatenetworkappliancetrafficshapingrules) - Update the traffic shaping settings rules for an MX network
* [UpdateNetworkApplianceTrafficShapingUplinkBandwidth](#updatenetworkappliancetrafficshapinguplinkbandwidth) - Updates the uplink bandwidth settings for your MX network.
* [UpdateNetworkApplianceTrafficShapingUplinkSelection](#updatenetworkappliancetrafficshapinguplinkselection) - Update uplink selection settings for an MX network
* [UpdateNetworkApplianceVlan](#updatenetworkappliancevlan) - Update a VLAN
* [UpdateNetworkApplianceVlansSettings](#updatenetworkappliancevlanssettings) - Enable/Disable VLANs for the given network
* [UpdateNetworkApplianceVpnBgp](#updatenetworkappliancevpnbgp) - Update a Hub BGP Configuration
* [UpdateNetworkApplianceVpnSiteToSiteVpn](#updatenetworkappliancevpnsitetositevpn) - Update the site-to-site VPN settings of a network
* [UpdateNetworkApplianceWarmSpare](#updatenetworkappliancewarmspare) - Update MX warm spare settings
* [UpdateOrganizationApplianceSecurityIntrusion](#updateorganizationappliancesecurityintrusion) - Sets supported intrusion settings for an organization
* [UpdateOrganizationApplianceVPNThirdPartyVPNPeers](#updateorganizationappliancevpnthirdpartyvpnpeers) - Update the third party VPN peers for an organization
* [UpdateOrganizationApplianceVpnVpnFirewallRules](#updateorganizationappliancevpnvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN

## CreateDeviceApplianceVmxAuthenticationToken

Generate a new vMX authentication token

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.CreateDeviceApplianceVmxAuthenticationToken(ctx, operations.CreateDeviceApplianceVmxAuthenticationTokenRequest{
        Serial: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeviceApplianceVmxAuthenticationToken201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkAppliancePrefixesDelegatedStatic

Add a static delegated prefix from a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.CreateNetworkAppliancePrefixesDelegatedStatic(ctx, operations.CreateNetworkAppliancePrefixesDelegatedStaticRequest{
        RequestBody: operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBody{
            Description: sdk.String("quae"),
            Origin: operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin{
                Interfaces: []string{
                    "modi",
                },
                Type: operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnumIndependent.ToPointer(),
            },
            Prefix: "exercitationem",
        },
        NetworkID: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkAppliancePrefixesDelegatedStatic201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkApplianceStaticRoute

Add a static route for an MX or teleworker network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.CreateNetworkApplianceStaticRoute(ctx, operations.CreateNetworkApplianceStaticRouteRequest{
        RequestBody: operations.CreateNetworkApplianceStaticRouteRequestBody{
            GatewayIP: "et",
            GatewayVlanID: sdk.String("ipsum"),
            Name: "Orville Ratke",
            Subnet: "quia",
        },
        NetworkID: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkApplianceStaticRoute201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkApplianceTrafficShapingCustomPerformanceClass

Add a custom performance class for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.CreateNetworkApplianceTrafficShapingCustomPerformanceClass(ctx, operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest{
        RequestBody: operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody{
            MaxJitter: sdk.Int64(605712),
            MaxLatency: sdk.Int64(727250),
            MaxLossPercentage: sdk.Int64(115661),
            Name: "Wm Steuber",
        },
        NetworkID: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkApplianceVlan

Add a VLAN

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.CreateNetworkApplianceVlan(ctx, operations.CreateNetworkApplianceVlanRequest{
        RequestBody: operations.CreateNetworkApplianceVlanRequestBody{
            ApplianceIP: sdk.String("sit"),
            Cidr: sdk.String("iusto"),
            GroupPolicyID: sdk.String("ipsa"),
            ID: "e1084cb0-672d-41ad-879e-eb9665b85efb",
            Ipv6: &operations.CreateNetworkApplianceVlanRequestBodyIpv6{
                Enabled: sdk.Bool(false),
                PrefixAssignments: []CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                    operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "quia",
                            },
                            Type: operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumInternet,
                        },
                        StaticApplianceIp6: sdk.String("fuga"),
                        StaticPrefix: sdk.String("repudiandae"),
                    },
                    operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "expedita",
                            },
                            Type: operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumInternet,
                        },
                        StaticApplianceIp6: sdk.String("eos"),
                        StaticPrefix: sdk.String("quibusdam"),
                    },
                    operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "praesentium",
                                "odit",
                            },
                            Type: operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumIndependent,
                        },
                        StaticApplianceIp6: sdk.String("corporis"),
                        StaticPrefix: sdk.String("error"),
                    },
                    operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "adipisci",
                                "recusandae",
                                "similique",
                                "ut",
                            },
                            Type: operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumInternet,
                        },
                        StaticApplianceIp6: sdk.String("quis"),
                        StaticPrefix: sdk.String("beatae"),
                    },
                },
            },
            MandatoryDhcp: &operations.CreateNetworkApplianceVlanRequestBodyMandatoryDhcp{
                Enabled: sdk.Bool(false),
            },
            Mask: sdk.Int64(600213),
            Name: "Lucia McDermott",
            Subnet: sdk.String("numquam"),
            TemplateVlanType: operations.CreateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnumSame.ToPointer(),
        },
        NetworkID: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkApplianceVlan201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkAppliancePrefixesDelegatedStatic

Delete a static delegated prefix from a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.DeleteNetworkAppliancePrefixesDelegatedStatic(ctx, operations.DeleteNetworkAppliancePrefixesDelegatedStaticRequest{
        NetworkID: "officia",
        StaticDelegatedPrefixID: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkApplianceStaticRoute

Delete a static route from an MX or teleworker network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.DeleteNetworkApplianceStaticRoute(ctx, operations.DeleteNetworkApplianceStaticRouteRequest{
        NetworkID: "optio",
        StaticRouteID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkApplianceTrafficShapingCustomPerformanceClass

Delete a custom performance class from an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.DeleteNetworkApplianceTrafficShapingCustomPerformanceClass(ctx, operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest{
        CustomPerformanceClassID: "corporis",
        NetworkID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkApplianceVlan

Delete a VLAN from a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.DeleteNetworkApplianceVlan(ctx, operations.DeleteNetworkApplianceVlanRequest{
        NetworkID: "expedita",
        VlanID: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDeviceApplianceDhcpSubnets

Return the DHCP subnet information for an appliance

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetDeviceApplianceDhcpSubnets(ctx, operations.GetDeviceApplianceDhcpSubnetsRequest{
        Serial: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceApplianceDhcpSubnets200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceAppliancePerformance

Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetDeviceAppliancePerformance(ctx, operations.GetDeviceAppliancePerformanceRequest{
        Serial: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceAppliancePerformance200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceAppliancePrefixesDelegated

Return current delegated IPv6 prefixes on an appliance.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetDeviceAppliancePrefixesDelegated(ctx, operations.GetDeviceAppliancePrefixesDelegatedRequest{
        Serial: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceAppliancePrefixesDelegated200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceAppliancePrefixesDelegatedVlanAssignments

Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetDeviceAppliancePrefixesDelegatedVlanAssignments(ctx, operations.GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest{
        Serial: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceAppliancePrefixesDelegatedVlanAssignments200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceApplianceUplinksSettings

Return the uplink settings for an MX appliance

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetDeviceApplianceUplinksSettings(ctx, operations.GetDeviceApplianceUplinksSettingsRequest{
        Serial: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceApplianceUplinksSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceClientSecurityEvents

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceClientSecurityEvents(ctx, operations.GetNetworkApplianceClientSecurityEventsRequest{
        ClientID: "in",
        EndingBefore: sdk.String("minus"),
        NetworkID: "eum",
        PerPage: sdk.Int64(266408),
        SortOrder: operations.GetNetworkApplianceClientSecurityEventsSortOrderEnumAscending.ToPointer(),
        StartingAfter: sdk.String("magnam"),
        T0: sdk.String("voluptates"),
        T1: sdk.String("maiores"),
        Timespan: sdk.Float32(7317.44),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceClientSecurityEvents200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceConnectivityMonitoringDestinations

Return the connectivity testing destinations for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceConnectivityMonitoringDestinations(ctx, operations.GetNetworkApplianceConnectivityMonitoringDestinationsRequest{
        NetworkID: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceContentFiltering

Return the content filtering settings for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceContentFiltering(ctx, operations.GetNetworkApplianceContentFilteringRequest{
        NetworkID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceContentFiltering200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceContentFilteringCategories

List all available content filtering categories for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceContentFilteringCategories(ctx, operations.GetNetworkApplianceContentFilteringCategoriesRequest{
        NetworkID: "ratione",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceContentFilteringCategories200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallCellularFirewallRules

Return the cellular firewall rules for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceFirewallCellularFirewallRules(ctx, operations.GetNetworkApplianceFirewallCellularFirewallRulesRequest{
        NetworkID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallFirewalledService

Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceFirewallFirewalledService(ctx, operations.GetNetworkApplianceFirewallFirewalledServiceRequest{
        NetworkID: "totam",
        Service: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallFirewalledService200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallFirewalledServices

List the appliance services and their accessibility rules

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceFirewallFirewalledServices(ctx, operations.GetNetworkApplianceFirewallFirewalledServicesRequest{
        NetworkID: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallFirewalledServices200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallInboundCellularFirewallRules

Return the inbound cellular firewall rules for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceFirewallInboundCellularFirewallRules(ctx, operations.GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest{
        NetworkID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallInboundFirewallRules

Return the inbound firewall rules for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceFirewallInboundFirewallRules(ctx, operations.GetNetworkApplianceFirewallInboundFirewallRulesRequest{
        NetworkID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallL3FirewallRules

Return the L3 firewall rules for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceFirewallL3FirewallRules(ctx, operations.GetNetworkApplianceFirewallL3FirewallRulesRequest{
        NetworkID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallL7FirewallRules

List the MX L7 firewall rules for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceFirewallL7FirewallRules(ctx, operations.GetNetworkApplianceFirewallL7FirewallRulesRequest{
        NetworkID: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories

Return the L7 firewall application categories and their associated applications for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories(ctx, operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest{
        NetworkID: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallOneToManyNatRules

Return the 1:Many NAT mapping rules for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceFirewallOneToManyNatRules(ctx, operations.GetNetworkApplianceFirewallOneToManyNatRulesRequest{
        NetworkID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallOneToOneNatRules

Return the 1:1 NAT mapping rules for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceFirewallOneToOneNatRules(ctx, operations.GetNetworkApplianceFirewallOneToOneNatRulesRequest{
        NetworkID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallPortForwardingRules

Return the port forwarding rules for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceFirewallPortForwardingRules(ctx, operations.GetNetworkApplianceFirewallPortForwardingRulesRequest{
        NetworkID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallSettings

Return the firewall settings for this network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceFirewallSettings(ctx, operations.GetNetworkApplianceFirewallSettingsRequest{
        NetworkID: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkAppliancePort

Return per-port VLAN settings for a single MX port.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkAppliancePort(ctx, operations.GetNetworkAppliancePortRequest{
        NetworkID: "vero",
        PortID: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAppliancePort200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkAppliancePorts

List per-port VLAN settings for all ports of a MX.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkAppliancePorts(ctx, operations.GetNetworkAppliancePortsRequest{
        NetworkID: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAppliancePorts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkAppliancePrefixesDelegatedStatic

Return a static delegated prefix from a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkAppliancePrefixesDelegatedStatic(ctx, operations.GetNetworkAppliancePrefixesDelegatedStaticRequest{
        NetworkID: "pariatur",
        StaticDelegatedPrefixID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkAppliancePrefixesDelegatedStatics

List static delegated prefixes for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkAppliancePrefixesDelegatedStatics(ctx, operations.GetNetworkAppliancePrefixesDelegatedStaticsRequest{
        NetworkID: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAppliancePrefixesDelegatedStatics200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceSecurityEvents

List the security events for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceSecurityEvents(ctx, operations.GetNetworkApplianceSecurityEventsRequest{
        EndingBefore: sdk.String("aperiam"),
        NetworkID: "odio",
        PerPage: sdk.Int64(325297),
        SortOrder: operations.GetNetworkApplianceSecurityEventsSortOrderEnumAscending.ToPointer(),
        StartingAfter: sdk.String("ducimus"),
        T0: sdk.String("excepturi"),
        T1: sdk.String("dolores"),
        Timespan: sdk.Float32(6211.69),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSecurityEvents200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceSecurityIntrusion

Returns all supported intrusion settings for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceSecurityIntrusion(ctx, operations.GetNetworkApplianceSecurityIntrusionRequest{
        NetworkID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSecurityIntrusion200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceSecurityMalware

Returns all supported malware settings for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceSecurityMalware(ctx, operations.GetNetworkApplianceSecurityMalwareRequest{
        NetworkID: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSecurityMalware200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceSettings

Return the appliance settings for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceSettings(ctx, operations.GetNetworkApplianceSettingsRequest{
        NetworkID: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceSingleLan

Return single LAN configuration

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceSingleLan(ctx, operations.GetNetworkApplianceSingleLanRequest{
        NetworkID: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSingleLan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceSsid

Return a single MX SSID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceSsid(ctx, operations.GetNetworkApplianceSsidRequest{
        NetworkID: "itaque",
        Number: "similique",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSsid200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceSsids

List the MX SSIDs in a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceSsids(ctx, operations.GetNetworkApplianceSsidsRequest{
        NetworkID: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSsids200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceStaticRoute

Return a static route for an MX or teleworker network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceStaticRoute(ctx, operations.GetNetworkApplianceStaticRouteRequest{
        NetworkID: "ex",
        StaticRouteID: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceStaticRoute200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceStaticRoutes

List the static routes for an MX or teleworker network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceStaticRoutes(ctx, operations.GetNetworkApplianceStaticRoutesRequest{
        NetworkID: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceStaticRoutes200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceTrafficShaping

Display the traffic shaping settings for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceTrafficShaping(ctx, operations.GetNetworkApplianceTrafficShapingRequest{
        NetworkID: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShaping200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceTrafficShapingCustomPerformanceClass

Return a custom performance class for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceTrafficShapingCustomPerformanceClass(ctx, operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest{
        CustomPerformanceClassID: "placeat",
        NetworkID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceTrafficShapingCustomPerformanceClasses

List all custom performance classes for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceTrafficShapingCustomPerformanceClasses(ctx, operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest{
        NetworkID: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShapingCustomPerformanceClasses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceTrafficShapingRules

Display the traffic shaping settings rules for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceTrafficShapingRules(ctx, operations.GetNetworkApplianceTrafficShapingRulesRequest{
        NetworkID: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShapingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceTrafficShapingUplinkBandwidth

Returns the uplink bandwidth limits for your MX network. This may not reflect the affected device's hardware capabilities.  For more information on your device's hardware capabilities, please consult our MX Family Datasheet - [https://meraki.cisco.com/product-collateral/mx-family-datasheet/?file]

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceTrafficShapingUplinkBandwidth(ctx, operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest{
        NetworkID: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceTrafficShapingUplinkSelection

Show uplink selection settings for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceTrafficShapingUplinkSelection(ctx, operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest{
        NetworkID: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceUplinksUsageHistory

Get the sent and received bytes for each uplink of a network.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceUplinksUsageHistory(ctx, operations.GetNetworkApplianceUplinksUsageHistoryRequest{
        NetworkID: "ipsa",
        Resolution: sdk.Int64(575534),
        T0: sdk.String("vero"),
        T1: sdk.String("sequi"),
        Timespan: sdk.Float32(9185.47),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceUplinksUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceVlan

Return a VLAN

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceVlan(ctx, operations.GetNetworkApplianceVlanRequest{
        NetworkID: "cum",
        VlanID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceVlan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceVlans

List the VLANs for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceVlans(ctx, operations.GetNetworkApplianceVlansRequest{
        NetworkID: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceVlans200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceVlansSettings

Returns the enabled status of VLANs for the network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceVlansSettings(ctx, operations.GetNetworkApplianceVlansSettingsRequest{
        NetworkID: "veniam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceVlansSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceVpnBgp

Return a Hub BGP Configuration

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceVpnBgp(ctx, operations.GetNetworkApplianceVpnBgpRequest{
        NetworkID: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceVpnBgp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceVpnSiteToSiteVpn

Return the site-to-site VPN settings of a network. Only valid for MX networks.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceVpnSiteToSiteVpn(ctx, operations.GetNetworkApplianceVpnSiteToSiteVpnRequest{
        NetworkID: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceWarmSpare

Return MX warm spare settings

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetNetworkApplianceWarmSpare(ctx, operations.GetNetworkApplianceWarmSpareRequest{
        NetworkID: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceWarmSpare200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceSecurityEvents

List the security events for an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetOrganizationApplianceSecurityEvents(ctx, operations.GetOrganizationApplianceSecurityEventsRequest{
        EndingBefore: sdk.String("dicta"),
        OrganizationID: "consequuntur",
        PerPage: sdk.Int64(899867),
        SortOrder: operations.GetOrganizationApplianceSecurityEventsSortOrderEnumDescending.ToPointer(),
        StartingAfter: sdk.String("ipsa"),
        T0: sdk.String("ducimus"),
        T1: sdk.String("maiores"),
        Timespan: sdk.Float32(873.82),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceSecurityEvents200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceSecurityIntrusion

Returns all supported intrusion settings for an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetOrganizationApplianceSecurityIntrusion(ctx, operations.GetOrganizationApplianceSecurityIntrusionRequest{
        OrganizationID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceSecurityIntrusion200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceUplinkStatuses

List the uplink status of every Meraki MX and Z series appliances in the organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetOrganizationApplianceUplinkStatuses(ctx, operations.GetOrganizationApplianceUplinkStatusesRequest{
        EndingBefore: sdk.String("laboriosam"),
        Iccids: []string{
            "libero",
            "excepturi",
            "occaecati",
            "nemo",
        },
        NetworkIds: []string{
            "nostrum",
            "doloribus",
        },
        OrganizationID: "eligendi",
        PerPage: sdk.Int64(574032),
        Serials: []string{
            "hic",
            "animi",
        },
        StartingAfter: sdk.String("quas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceUplinkStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceVpnStats

Show VPN history stat for networks in an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetOrganizationApplianceVpnStats(ctx, operations.GetOrganizationApplianceVpnStatsRequest{
        EndingBefore: sdk.String("totam"),
        NetworkIds: []string{
            "odio",
            "eaque",
            "saepe",
        },
        OrganizationID: "architecto",
        PerPage: sdk.Int64(554645),
        StartingAfter: sdk.String("iste"),
        T0: sdk.String("assumenda"),
        T1: sdk.String("tempore"),
        Timespan: sdk.Float32(7255.74),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceVpnStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceVpnStatuses

Show VPN status for networks in an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetOrganizationApplianceVpnStatuses(ctx, operations.GetOrganizationApplianceVpnStatusesRequest{
        EndingBefore: sdk.String("velit"),
        NetworkIds: []string{
            "delectus",
        },
        OrganizationID: "impedit",
        PerPage: sdk.Int64(741238),
        StartingAfter: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceVpnStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceVPNThirdPartyVPNPeers

Return the third party VPN peers for an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetOrganizationApplianceVPNThirdPartyVPNPeers(ctx, operations.GetOrganizationApplianceVPNThirdPartyVPNPeersRequest{
        OrganizationID: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceVpnVpnFirewallRules

Return the firewall rules for an organization's site-to-site VPN

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.GetOrganizationApplianceVpnVpnFirewallRules(ctx, operations.GetOrganizationApplianceVpnVpnFirewallRulesRequest{
        OrganizationID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SwapNetworkApplianceWarmSpare

Swap MX primary and warm spare appliances

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.SwapNetworkApplianceWarmSpare(ctx, operations.SwapNetworkApplianceWarmSpareRequest{
        NetworkID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwapNetworkApplianceWarmSpare200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceApplianceUplinksSettings

Update the uplink settings for an MX appliance

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateDeviceApplianceUplinksSettings(ctx, operations.UpdateDeviceApplianceUplinksSettingsRequest{
        RequestBody: operations.UpdateDeviceApplianceUplinksSettingsRequestBody{
            Interfaces: operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfaces{
                Wan1: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1{
                    Enabled: sdk.Bool(false),
                    Pppoe: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Pppoe{
                        Authentication: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1PppoeAuthentication{
                            Enabled: sdk.Bool(false),
                            Password: sdk.String("doloremque"),
                            Username: sdk.String("Euna.Hartmann58"),
                        },
                        Enabled: sdk.Bool(false),
                    },
                    Svis: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Svis{
                        Ipv4: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4{
                            Address: sdk.String("7822 Corwin Well"),
                            AssignmentMode: operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4AssignmentModeEnumDynamic.ToPointer(),
                            Gateway: sdk.String("consequuntur"),
                            Nameservers: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4Nameservers{
                                Addresses: []string{
                                    "laudantium",
                                    "odit",
                                    "pariatur",
                                    "amet",
                                },
                            },
                        },
                        Ipv6: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6{
                            Address: sdk.String("0277 Wilbert Garden"),
                            AssignmentMode: operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6AssignmentModeEnumStatic.ToPointer(),
                            Gateway: sdk.String("distinctio"),
                            Nameservers: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6Nameservers{
                                Addresses: []string{
                                    "quis",
                                    "nisi",
                                },
                            },
                        },
                    },
                    VlanTagging: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1VlanTagging{
                        Enabled: sdk.Bool(false),
                        VlanID: sdk.Int64(727771),
                    },
                },
                Wan2: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2{
                    Enabled: sdk.Bool(false),
                    Pppoe: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe{
                        Authentication: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2PppoeAuthentication{
                            Enabled: sdk.Bool(false),
                            Password: sdk.String("minus"),
                            Username: sdk.String("Raul31"),
                        },
                        Enabled: sdk.Bool(false),
                    },
                    Svis: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis{
                        Ipv4: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4{
                            Address: sdk.String("918 Maya Dam"),
                            AssignmentMode: operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4AssignmentModeEnumDynamic.ToPointer(),
                            Gateway: sdk.String("nostrum"),
                            Nameservers: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4Nameservers{
                                Addresses: []string{
                                    "iusto",
                                },
                            },
                        },
                        Ipv6: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6{
                            Address: sdk.String("5786 Kunze Extension"),
                            AssignmentMode: operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6AssignmentModeEnumDynamic.ToPointer(),
                            Gateway: sdk.String("error"),
                            Nameservers: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6Nameservers{
                                Addresses: []string{
                                    "vitae",
                                    "dignissimos",
                                    "esse",
                                    "fugiat",
                                },
                            },
                        },
                    },
                    VlanTagging: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging{
                        Enabled: sdk.Bool(false),
                        VlanID: sdk.Int64(322333),
                    },
                },
            },
        },
        Serial: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceApplianceUplinksSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceConnectivityMonitoringDestinations

Update the connectivity testing destinations for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceConnectivityMonitoringDestinations(ctx, operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest{
        RequestBody: &operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody{
            Destinations: []UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations{
                operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations{
                    Default: sdk.Bool(false),
                    Description: sdk.String("delectus"),
                    IP: "iusto",
                },
                operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations{
                    Default: sdk.Bool(false),
                    Description: sdk.String("dignissimos"),
                    IP: "libero",
                },
            },
        },
        NetworkID: "illo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceContentFiltering

Update the content filtering settings for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceContentFiltering(ctx, operations.UpdateNetworkApplianceContentFilteringRequest{
        RequestBody: &operations.UpdateNetworkApplianceContentFilteringRequestBody{
            AllowedURLPatterns: []string{
                "incidunt",
            },
            BlockedURLCategories: []string{
                "saepe",
                "tempore",
                "veniam",
                "eos",
            },
            BlockedURLPatterns: []string{
                "earum",
                "reprehenderit",
                "praesentium",
                "nemo",
            },
            URLCategoryListSize: operations.UpdateNetworkApplianceContentFilteringRequestBodyURLCategoryListSizeEnumTopSites.ToPointer(),
        },
        NetworkID: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceContentFiltering200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallCellularFirewallRules

Update the cellular firewall rules of an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceFirewallCellularFirewallRules(ctx, operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("nihil"),
                    DestCidr: "deleniti",
                    DestPort: sdk.String("illo"),
                    Policy: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnumUDP,
                    SrcCidr: "aliquam",
                    SrcPort: sdk.String("quisquam"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
        },
        NetworkID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallFirewalledService

Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceFirewallFirewalledService(ctx, operations.UpdateNetworkApplianceFirewallFirewalledServiceRequest{
        RequestBody: operations.UpdateNetworkApplianceFirewallFirewalledServiceRequestBody{
            Access: operations.UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnumRestricted,
            AllowedIps: []string{
                "consequatur",
                "maxime",
                "aspernatur",
                "nam",
            },
        },
        NetworkID: "expedita",
        Service: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallFirewalledService200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallInboundCellularFirewallRules

Update the inbound cellular firewall rules of an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceFirewallInboundCellularFirewallRules(ctx, operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("repudiandae"),
                    DestCidr: "rerum",
                    DestPort: sdk.String("dignissimos"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnumUDP,
                    SrcCidr: "similique",
                    SrcPort: sdk.String("repellendus"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("iure"),
                    DestCidr: "dolorem",
                    DestPort: sdk.String("commodi"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnumIcmp6,
                    SrcCidr: "aut",
                    SrcPort: sdk.String("voluptatem"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("ad"),
                    DestCidr: "quae",
                    DestPort: sdk.String("amet"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnumIcmp6,
                    SrcCidr: "quidem",
                    SrcPort: sdk.String("cum"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
        },
        NetworkID: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallInboundFirewallRules

Update the inbound firewall rules of an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceFirewallInboundFirewallRules(ctx, operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules{
                    Comment: sdk.String("dicta"),
                    DestCidr: "laudantium",
                    DestPort: sdk.String("doloremque"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnumIcmp6,
                    SrcCidr: "amet",
                    SrcPort: sdk.String("provident"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
            SyslogDefaultRule: sdk.Bool(false),
        },
        NetworkID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallL3FirewallRules

Update the L3 firewall rules of an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceFirewallL3FirewallRules(ctx, operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("provident"),
                    DestCidr: "repudiandae",
                    DestPort: sdk.String("consequatur"),
                    Policy: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnumIcmp6,
                    SrcCidr: "itaque",
                    SrcPort: sdk.String("facilis"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("corrupti"),
                    DestCidr: "aperiam",
                    DestPort: sdk.String("sint"),
                    Policy: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnumAny,
                    SrcCidr: "totam",
                    SrcPort: sdk.String("dicta"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("voluptatem"),
                    DestCidr: "velit",
                    DestPort: sdk.String("dolor"),
                    Policy: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnumUDP,
                    SrcCidr: "dolor",
                    SrcPort: sdk.String("occaecati"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("atque"),
                    DestCidr: "beatae",
                    DestPort: sdk.String("at"),
                    Policy: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnumTCP,
                    SrcCidr: "esse",
                    SrcPort: sdk.String("voluptatem"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
            SyslogDefaultRule: sdk.Bool(false),
        },
        NetworkID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallL7FirewallRules

Update the MX L7 firewall rules for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceFirewallL7FirewallRules(ctx, operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnumHost.ToPointer(),
                    Value: sdk.String("aperiam"),
                },
                operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnumHost.ToPointer(),
                    Value: sdk.String("repellat"),
                },
                operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnumApplicationCategory.ToPointer(),
                    Value: sdk.String("porro"),
                },
            },
        },
        NetworkID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallOneToManyNatRules

Set the 1:Many NAT mapping rules for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceFirewallOneToManyNatRules(ctx, operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequest{
        RequestBody: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules{
                    PortRules: []UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "consectetur",
                                "soluta",
                            },
                            LocalIP: sdk.String("natus"),
                            LocalPort: sdk.String("temporibus"),
                            Name: sdk.String("Marvin White"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumUDP.ToPointer(),
                            PublicPort: sdk.String("illum"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "dignissimos",
                                "vero",
                                "qui",
                            },
                            LocalIP: sdk.String("consectetur"),
                            LocalPort: sdk.String("repellat"),
                            Name: sdk.String("Rose Heller"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("illo"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "deserunt",
                                "delectus",
                                "non",
                                "distinctio",
                            },
                            LocalIP: sdk.String("in"),
                            LocalPort: sdk.String("exercitationem"),
                            Name: sdk.String("Marjorie Waelchi"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("accusamus"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "aperiam",
                                "odit",
                                "deleniti",
                            },
                            LocalIP: sdk.String("enim"),
                            LocalPort: sdk.String("voluptate"),
                            Name: sdk.String("Warren Rempel I"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("nesciunt"),
                        },
                    },
                    PublicIP: "mollitia",
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnumInternet1,
                },
            },
        },
        NetworkID: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallOneToOneNatRules

Set the 1:1 NAT mapping rules for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceFirewallOneToOneNatRules(ctx, operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequest{
        RequestBody: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules{
                    AllowedInbound: []UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "reiciendis",
                                "ab",
                            },
                            DestinationPorts: []string{
                                "aut",
                                "aut",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumUDP.ToPointer(),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "commodi",
                                "numquam",
                            },
                            DestinationPorts: []string{
                                "possimus",
                                "voluptate",
                                "consectetur",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumAny.ToPointer(),
                        },
                    },
                    LanIP: "quaerat",
                    Name: sdk.String("Sylvester Casper"),
                    PublicIP: sdk.String("quas"),
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnumInternet1.ToPointer(),
                },
                operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules{
                    AllowedInbound: []UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "autem",
                            },
                            DestinationPorts: []string{
                                "alias",
                                "rem",
                                "aut",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumTCP.ToPointer(),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "repellendus",
                                "veritatis",
                                "quae",
                            },
                            DestinationPorts: []string{
                                "saepe",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumUDP.ToPointer(),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "nulla",
                                "officia",
                                "sed",
                            },
                            DestinationPorts: []string{
                                "alias",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumUDP.ToPointer(),
                        },
                    },
                    LanIP: "hic",
                    Name: sdk.String("Eva Denesik"),
                    PublicIP: sdk.String("harum"),
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnumInternet1.ToPointer(),
                },
            },
        },
        NetworkID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallPortForwardingRules

Update the port forwarding rules for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceFirewallPortForwardingRules(ctx, operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequest{
        RequestBody: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules{
                    AllowedIps: []string{
                        "optio",
                        "voluptatibus",
                    },
                    LanIP: "molestias",
                    LocalPort: "officia",
                    Name: sdk.String("Everett Dickinson"),
                    Protocol: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnumUDP,
                    PublicPort: "ducimus",
                    Uplink: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnumBoth.ToPointer(),
                },
                operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules{
                    AllowedIps: []string{
                        "reiciendis",
                    },
                    LanIP: "repellat",
                    LocalPort: "nulla",
                    Name: sdk.String("Mrs. Luther Torp"),
                    Protocol: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnumUDP,
                    PublicPort: "voluptates",
                    Uplink: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnumBoth.ToPointer(),
                },
            },
        },
        NetworkID: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallSettings

Update the firewall settings for this network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceFirewallSettings(ctx, operations.UpdateNetworkApplianceFirewallSettingsRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallSettingsRequestBody{
            SpoofingProtection: &operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtection{
                IPSourceGuard: &operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIPSourceGuard{
                    Mode: operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIPSourceGuardModeEnumBlock.ToPointer(),
                },
            },
        },
        NetworkID: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkAppliancePort

Update the per-port VLAN settings for a single MX port.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkAppliancePort(ctx, operations.UpdateNetworkAppliancePortRequest{
        RequestBody: &operations.UpdateNetworkAppliancePortRequestBody{
            AccessPolicy: sdk.String("quisquam"),
            AllowedVlans: sdk.String("dicta"),
            DropUntaggedTraffic: sdk.Bool(false),
            Enabled: sdk.Bool(false),
            Type: sdk.String("voluptatibus"),
            Vlan: sdk.Int64(754901),
        },
        NetworkID: "quae",
        PortID: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkAppliancePort200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkAppliancePrefixesDelegatedStatic

Update a static delegated prefix from a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkAppliancePrefixesDelegatedStatic(ctx, operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequest{
        RequestBody: &operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody{
            Description: sdk.String("architecto"),
            Origin: &operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin{
                Interfaces: []string{
                    "enim",
                },
                Type: operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnumInternet.ToPointer(),
            },
            Prefix: sdk.String("rem"),
        },
        NetworkID: "perferendis",
        StaticDelegatedPrefixID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceSecurityIntrusion

Set the supported intrusion settings for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceSecurityIntrusion(ctx, operations.UpdateNetworkApplianceSecurityIntrusionRequest{
        RequestBody: &operations.UpdateNetworkApplianceSecurityIntrusionRequestBody{
            IdsRulesets: operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnumSecurity.ToPointer(),
            Mode: operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnumPrevention.ToPointer(),
            ProtectedNetworks: &operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks{
                ExcludedCidr: []string{
                    "dicta",
                    "quos",
                    "ullam",
                },
                IncludedCidr: []string{
                    "modi",
                    "itaque",
                },
                UseDefault: sdk.Bool(false),
            },
        },
        NetworkID: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceSecurityIntrusion200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceSecurityMalware

Set the supported malware settings for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceSecurityMalware(ctx, operations.UpdateNetworkApplianceSecurityMalwareRequest{
        RequestBody: operations.UpdateNetworkApplianceSecurityMalwareRequestBody{
            AllowedFiles: []UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles{
                operations.UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles{
                    Comment: "consequuntur",
                    Sha256: "assumenda",
                },
                operations.UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles{
                    Comment: "vero",
                    Sha256: "doloribus",
                },
            },
            AllowedUrls: []UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls{
                operations.UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls{
                    Comment: "porro",
                    URL: "accusamus",
                },
                operations.UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls{
                    Comment: "totam",
                    URL: "reiciendis",
                },
                operations.UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls{
                    Comment: "ab",
                    URL: "sint",
                },
                operations.UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls{
                    Comment: "nihil",
                    URL: "esse",
                },
            },
            Mode: operations.UpdateNetworkApplianceSecurityMalwareRequestBodyModeEnumDisabled,
        },
        NetworkID: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceSecurityMalware200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceSettings

Update the appliance settings for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceSettings(ctx, operations.UpdateNetworkApplianceSettingsRequest{
        RequestBody: &operations.UpdateNetworkApplianceSettingsRequestBody{
            ClientTrackingMethod: operations.UpdateNetworkApplianceSettingsRequestBodyClientTrackingMethodEnumIPAddress.ToPointer(),
            DeploymentMode: operations.UpdateNetworkApplianceSettingsRequestBodyDeploymentModeEnumRouted.ToPointer(),
            DynamicDNS: &operations.UpdateNetworkApplianceSettingsRequestBodyDynamicDNS{
                Enabled: sdk.Bool(false),
                Prefix: sdk.String("vel"),
            },
        },
        NetworkID: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceSingleLan

Update single LAN configuration

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceSingleLan(ctx, operations.UpdateNetworkApplianceSingleLanRequest{
        RequestBody: &operations.UpdateNetworkApplianceSingleLanRequestBody{
            ApplianceIP: sdk.String("corporis"),
            Ipv6: &operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6{
                Enabled: sdk.Bool(false),
                PrefixAssignments: []UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments{
                    operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "officia",
                            },
                            Type: operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumIndependent,
                        },
                        StaticApplianceIp6: sdk.String("distinctio"),
                        StaticPrefix: sdk.String("eius"),
                    },
                    operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "rem",
                            },
                            Type: operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumInternet,
                        },
                        StaticApplianceIp6: sdk.String("accusantium"),
                        StaticPrefix: sdk.String("veniam"),
                    },
                },
            },
            MandatoryDhcp: &operations.UpdateNetworkApplianceSingleLanRequestBodyMandatoryDhcp{
                Enabled: sdk.Bool(false),
            },
            Subnet: sdk.String("saepe"),
        },
        NetworkID: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceSingleLan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceSsid

Update the attributes of an MX SSID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceSsid(ctx, operations.UpdateNetworkApplianceSsidRequest{
        RequestBody: &operations.UpdateNetworkApplianceSsidRequestBody{
            AuthMode: operations.UpdateNetworkApplianceSsidRequestBodyAuthModeEnumPsk.ToPointer(),
            DefaultVlanID: sdk.Int64(307173),
            DhcpEnforcedDeauthentication: &operations.UpdateNetworkApplianceSsidRequestBodyDhcpEnforcedDeauthentication{
                Enabled: sdk.Bool(false),
            },
            Enabled: sdk.Bool(false),
            EncryptionMode: operations.UpdateNetworkApplianceSsidRequestBodyEncryptionModeEnumWpa.ToPointer(),
            Name: sdk.String("Clint Ortiz"),
            Psk: sdk.String("vitae"),
            RadiusServers: []UpdateNetworkApplianceSsidRequestBodyRadiusServers{
                operations.UpdateNetworkApplianceSsidRequestBodyRadiusServers{
                    Host: sdk.String("similique"),
                    Port: sdk.Int64(74895),
                    Secret: sdk.String("repellat"),
                },
            },
            Visible: sdk.Bool(false),
            WpaEncryptionMode: operations.UpdateNetworkApplianceSsidRequestBodyWpaEncryptionModeEnumWpa2Only.ToPointer(),
        },
        NetworkID: "doloribus",
        Number: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceSsid200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceStaticRoute

Update a static route for an MX or teleworker network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceStaticRoute(ctx, operations.UpdateNetworkApplianceStaticRouteRequest{
        RequestBody: &operations.UpdateNetworkApplianceStaticRouteRequestBody{
            Enabled: sdk.Bool(false),
            FixedIPAssignments: map[string]interface{}{
                "incidunt": "explicabo",
                "ipsam": "cupiditate",
                "optio": "alias",
            },
            GatewayIP: sdk.String("quidem"),
            GatewayVlanID: sdk.String("nesciunt"),
            Name: sdk.String("Jeannie Cruickshank"),
            ReservedIPRanges: []UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges{
                operations.UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges{
                    Comment: "sint",
                    End: "ut",
                    Start: "numquam",
                },
                operations.UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges{
                    Comment: "tenetur",
                    End: "adipisci",
                    Start: "libero",
                },
                operations.UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges{
                    Comment: "in",
                    End: "minima",
                    Start: "ex",
                },
            },
            Subnet: sdk.String("minus"),
        },
        NetworkID: "ab",
        StaticRouteID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceStaticRoute200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceTrafficShaping

Update the traffic shaping settings for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceTrafficShaping(ctx, operations.UpdateNetworkApplianceTrafficShapingRequest{
        RequestBody: &operations.UpdateNetworkApplianceTrafficShapingRequestBody{
            GlobalBandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits{
                LimitDown: sdk.Int64(943143),
                LimitUp: sdk.Int64(392319),
            },
        },
        NetworkID: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceTrafficShaping200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceTrafficShapingCustomPerformanceClass

Update a custom performance class for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceTrafficShapingCustomPerformanceClass(ctx, operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest{
        RequestBody: &operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody{
            MaxJitter: sdk.Int64(221218),
            MaxLatency: sdk.Int64(496548),
            MaxLossPercentage: sdk.Int64(683727),
            Name: sdk.String("Julie Davis"),
        },
        CustomPerformanceClassID: "incidunt",
        NetworkID: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceTrafficShapingRules

Update the traffic shaping settings rules for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceTrafficShapingRules(ctx, operations.UpdateNetworkApplianceTrafficShapingRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBody{
            DefaultRulesEnabled: sdk.Bool(false),
            Rules: []UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules{
                operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumHost,
                            Value: "expedita",
                        },
                    },
                    DscpTagValue: sdk.Int64(706411),
                    PerClientBandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(769634),
                            LimitUp: sdk.Int64(24577),
                        },
                        Settings: sdk.String("nemo"),
                    },
                    Priority: sdk.String("culpa"),
                },
                operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplicationCategory,
                            Value: "deserunt",
                        },
                    },
                    DscpTagValue: sdk.Int64(268709),
                    PerClientBandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(332831),
                            LimitUp: sdk.Int64(800256),
                        },
                        Settings: sdk.String("itaque"),
                    },
                    Priority: sdk.String("a"),
                },
                operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplicationCategory,
                            Value: "doloribus",
                        },
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumLocalNet,
                            Value: "officiis",
                        },
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplication,
                            Value: "alias",
                        },
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumIPRange,
                            Value: "ipsa",
                        },
                    },
                    DscpTagValue: sdk.Int64(751033),
                    PerClientBandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(898193),
                            LimitUp: sdk.Int64(155978),
                        },
                        Settings: sdk.String("dicta"),
                    },
                    Priority: sdk.String("vel"),
                },
            },
        },
        NetworkID: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceTrafficShapingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceTrafficShapingUplinkBandwidth

Updates the uplink bandwidth settings for your MX network.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceTrafficShapingUplinkBandwidth(ctx, operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest{
        RequestBody: &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody{
            BandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits{
                Cellular: &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular{
                    LimitDown: sdk.Int64(892708),
                    LimitUp: sdk.Int64(354821),
                },
                Wan1: &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1{
                    LimitDown: sdk.Int64(103578),
                    LimitUp: sdk.Int64(33771),
                },
                Wan2: &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2{
                    LimitDown: sdk.Int64(18096),
                    LimitUp: sdk.Int64(82876),
                },
            },
        },
        NetworkID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceTrafficShapingUplinkSelection

Update uplink selection settings for an MX network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceTrafficShapingUplinkSelection(ctx, operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest{
        RequestBody: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody{
            ActiveActiveAutoVpnEnabled: sdk.Bool(false),
            DefaultUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnumWan2.ToPointer(),
            FailoverAndFailback: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailback{
                Immediate: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailbackImmediate{
                    Enabled: false,
                },
            },
            LoadBalancingEnabled: sdk.Bool(false),
            VpnTrafficUplinkPreferences: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences{
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences{
                    FailOverCriterion: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnumUplinkDown.ToPointer(),
                    PerformanceClass: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass{
                        BuiltinPerformanceClassName: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnumVoIP.ToPointer(),
                        CustomPerformanceClassID: sdk.String("quod"),
                        Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnumBuiltin,
                    },
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnumWan2,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplication,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("dignissimos"),
                                    Fqdn: sdk.String("laboriosam"),
                                    Host: sdk.Int64(152283),
                                    Network: sdk.String("odio"),
                                    Port: sdk.String("natus"),
                                    Vlan: sdk.Int64(588152),
                                },
                                ID: sdk.String("bfbbe694-9fb2-4bb4-acae-6c3d5db3adeb"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumUDP.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("ad"),
                                    Host: sdk.Int64(816151),
                                    Network: sdk.String("laborum"),
                                    Port: sdk.String("eveniet"),
                                    Vlan: sdk.Int64(673191),
                                },
                            },
                        },
                    },
                },
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences{
                    FailOverCriterion: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnumPoorPerformance.ToPointer(),
                    PerformanceClass: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass{
                        BuiltinPerformanceClassName: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnumVoIP.ToPointer(),
                        CustomPerformanceClassID: sdk.String("maxime"),
                        Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnumBuiltin,
                    },
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnumBestForVoIP,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplicationCategory,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("molestias"),
                                    Fqdn: sdk.String("laborum"),
                                    Host: sdk.Int64(668218),
                                    Network: sdk.String("occaecati"),
                                    Port: sdk.String("labore"),
                                    Vlan: sdk.Int64(777378),
                                },
                                ID: sdk.String("02644cf5-e9d9-4a45-b8ad-c1ac600dec00"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumAny.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("similique"),
                                    Host: sdk.Int64(783274),
                                    Network: sdk.String("blanditiis"),
                                    Port: sdk.String("quae"),
                                    Vlan: sdk.Int64(169819),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("sed"),
                                    Fqdn: sdk.String("necessitatibus"),
                                    Host: sdk.Int64(773259),
                                    Network: sdk.String("ipsa"),
                                    Port: sdk.String("excepturi"),
                                    Vlan: sdk.Int64(950956),
                                },
                                ID: sdk.String("f8f0f816-ff34-477c-93e9-02c14125b096"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumAny.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("id"),
                                    Host: sdk.Int64(388169),
                                    Network: sdk.String("ex"),
                                    Port: sdk.String("quas"),
                                    Vlan: sdk.Int64(85794),
                                },
                            },
                        },
                    },
                },
            },
            WanTrafficUplinkPreferences: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences{
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences{
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnumWan1,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("incidunt"),
                                    Port: sdk.String("quam"),
                                },
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumAny.ToPointer(),
                                Source: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("deserunt"),
                                    Host: sdk.Int64(965095),
                                    Port: sdk.String("omnis"),
                                    Vlan: sdk.Int64(151230),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("nesciunt"),
                                    Port: sdk.String("maxime"),
                                },
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumIcmp6.ToPointer(),
                                Source: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("cupiditate"),
                                    Host: sdk.Int64(303253),
                                    Port: sdk.String("excepturi"),
                                    Vlan: sdk.Int64(980410),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("laudantium"),
                                    Port: sdk.String("velit"),
                                },
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumUDP.ToPointer(),
                                Source: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("amet"),
                                    Host: sdk.Int64(363845),
                                    Port: sdk.String("ipsa"),
                                    Vlan: sdk.Int64(787916),
                                },
                            },
                        },
                    },
                },
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences{
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnumWan2,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("molestiae"),
                                    Port: sdk.String("aliquid"),
                                },
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumUDP.ToPointer(),
                                Source: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("a"),
                                    Host: sdk.Int64(749702),
                                    Port: sdk.String("perspiciatis"),
                                    Vlan: sdk.Int64(34245),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("dicta"),
                                    Port: sdk.String("minus"),
                                },
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumIcmp6.ToPointer(),
                                Source: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("eveniet"),
                                    Host: sdk.Int64(781582),
                                    Port: sdk.String("tempore"),
                                    Vlan: sdk.Int64(693747),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("modi"),
                                    Port: sdk.String("voluptates"),
                                },
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumAny.ToPointer(),
                                Source: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("eius"),
                                    Host: sdk.Int64(194058),
                                    Port: sdk.String("eligendi"),
                                    Vlan: sdk.Int64(992887),
                                },
                            },
                        },
                    },
                },
            },
        },
        NetworkID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceVlan

Update a VLAN

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceVlan(ctx, operations.UpdateNetworkApplianceVlanRequest{
        RequestBody: &operations.UpdateNetworkApplianceVlanRequestBody{
            ApplianceIP: sdk.String("blanditiis"),
            Cidr: sdk.String("sint"),
            DhcpBootFilename: sdk.String("repellat"),
            DhcpBootNextServer: sdk.String("a"),
            DhcpBootOptionsEnabled: sdk.Bool(false),
            DhcpHandling: operations.UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnumRelayDhcpToAnotherServer.ToPointer(),
            DhcpLeaseTime: operations.UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnumFourHours.ToPointer(),
            DhcpOptions: []UpdateNetworkApplianceVlanRequestBodyDhcpOptions{
                operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptions{
                    Code: "nulla",
                    Type: operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnumIP,
                    Value: "corporis",
                },
                operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptions{
                    Code: "velit",
                    Type: operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnumText,
                    Value: "enim",
                },
                operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptions{
                    Code: "officia",
                    Type: operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnumText,
                    Value: "eum",
                },
                operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptions{
                    Code: "repudiandae",
                    Type: operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnumHex,
                    Value: "officia",
                },
            },
            DhcpRelayServerIps: []string{
                "quasi",
                "blanditiis",
                "eius",
                "quisquam",
            },
            DNSNameservers: sdk.String("eos"),
            FixedIPAssignments: map[string]interface{}{
                "natus": "minus",
                "quia": "magnam",
                "reprehenderit": "quod",
            },
            GroupPolicyID: sdk.String("quos"),
            Ipv6: &operations.UpdateNetworkApplianceVlanRequestBodyIpv6{
                Enabled: sdk.Bool(false),
                PrefixAssignments: []UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                    operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "molestiae",
                            },
                            Type: operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumIndependent,
                        },
                        StaticApplianceIp6: sdk.String("laborum"),
                        StaticPrefix: sdk.String("modi"),
                    },
                    operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "necessitatibus",
                            },
                            Type: operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumIndependent,
                        },
                        StaticApplianceIp6: sdk.String("molestias"),
                        StaticPrefix: sdk.String("dolore"),
                    },
                    operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "maiores",
                            },
                            Type: operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumIndependent,
                        },
                        StaticApplianceIp6: sdk.String("odit"),
                        StaticPrefix: sdk.String("earum"),
                    },
                },
            },
            MandatoryDhcp: &operations.UpdateNetworkApplianceVlanRequestBodyMandatoryDhcp{
                Enabled: sdk.Bool(false),
            },
            Mask: sdk.Int64(330596),
            Name: sdk.String("Jessica Heller"),
            ReservedIPRanges: []UpdateNetworkApplianceVlanRequestBodyReservedIPRanges{
                operations.UpdateNetworkApplianceVlanRequestBodyReservedIPRanges{
                    Comment: "nisi",
                    End: "tenetur",
                    Start: "quis",
                },
                operations.UpdateNetworkApplianceVlanRequestBodyReservedIPRanges{
                    Comment: "quibusdam",
                    End: "nemo",
                    Start: "suscipit",
                },
            },
            Subnet: sdk.String("pariatur"),
            TemplateVlanType: operations.UpdateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnumSame.ToPointer(),
            VpnNatSubnet: sdk.String("quidem"),
        },
        NetworkID: "repellendus",
        VlanID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceVlan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceVlansSettings

Enable/Disable VLANs for the given network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceVlansSettings(ctx, operations.UpdateNetworkApplianceVlansSettingsRequest{
        RequestBody: &operations.UpdateNetworkApplianceVlansSettingsRequestBody{
            VlansEnabled: sdk.Bool(false),
        },
        NetworkID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceVlansSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceVpnBgp

Update a Hub BGP Configuration

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceVpnBgp(ctx, operations.UpdateNetworkApplianceVpnBgpRequest{
        RequestBody: operations.UpdateNetworkApplianceVpnBgpRequestBody{
            AsNumber: sdk.Int64(958146),
            Enabled: false,
            IbgpHoldTimer: sdk.Int64(152364),
            Neighbors: []UpdateNetworkApplianceVpnBgpRequestBodyNeighbors{
                operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors{
                    AllowTransit: sdk.Bool(false),
                    EbgpHoldTimer: 996072,
                    EbgpMultihop: 921060,
                    IP: sdk.String("architecto"),
                    Ipv6: &operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6{
                        Address: "86294 Pete Roads",
                    },
                    ReceiveLimit: sdk.Int64(677509),
                    RemoteAsNumber: 242531,
                },
                operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors{
                    AllowTransit: sdk.Bool(false),
                    EbgpHoldTimer: 937865,
                    EbgpMultihop: 510020,
                    IP: sdk.String("error"),
                    Ipv6: &operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6{
                        Address: "06867 Merritt Mission",
                    },
                    ReceiveLimit: sdk.Int64(53733),
                    RemoteAsNumber: 643199,
                },
                operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors{
                    AllowTransit: sdk.Bool(false),
                    EbgpHoldTimer: 396223,
                    EbgpMultihop: 570423,
                    IP: sdk.String("magni"),
                    Ipv6: &operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6{
                        Address: "82718 Wisoky Skyway",
                    },
                    ReceiveLimit: sdk.Int64(774748),
                    RemoteAsNumber: 550338,
                },
                operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors{
                    AllowTransit: sdk.Bool(false),
                    EbgpHoldTimer: 994234,
                    EbgpMultihop: 532326,
                    IP: sdk.String("iste"),
                    Ipv6: &operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6{
                        Address: "0009 Santos Squares",
                    },
                    ReceiveLimit: sdk.Int64(205499),
                    RemoteAsNumber: 866135,
                },
            },
        },
        NetworkID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceVpnBgp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceVpnSiteToSiteVpn

Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceVpnSiteToSiteVpn(ctx, operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequest{
        RequestBody: operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody{
            Hubs: []UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs{
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs{
                    HubID: "mollitia",
                    UseDefaultRoute: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs{
                    HubID: "quae",
                    UseDefaultRoute: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs{
                    HubID: "quos",
                    UseDefaultRoute: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs{
                    HubID: "aperiam",
                    UseDefaultRoute: sdk.Bool(false),
                },
            },
            Mode: operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnumHub,
            Subnets: []UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets{
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets{
                    LocalSubnet: "ad",
                    UseVpn: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets{
                    LocalSubnet: "aliquam",
                    UseVpn: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets{
                    LocalSubnet: "quisquam",
                    UseVpn: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets{
                    LocalSubnet: "quas",
                    UseVpn: sdk.Bool(false),
                },
            },
        },
        NetworkID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceWarmSpare

Update MX warm spare settings

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateNetworkApplianceWarmSpare(ctx, operations.UpdateNetworkApplianceWarmSpareRequest{
        RequestBody: operations.UpdateNetworkApplianceWarmSpareRequestBody{
            Enabled: false,
            SpareSerial: sdk.String("maiores"),
            UplinkMode: sdk.String("inventore"),
            VirtualIp1: sdk.String("aliquid"),
            VirtualIp2: sdk.String("laudantium"),
        },
        NetworkID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceWarmSpare200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationApplianceSecurityIntrusion

Sets supported intrusion settings for an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateOrganizationApplianceSecurityIntrusion(ctx, operations.UpdateOrganizationApplianceSecurityIntrusionRequest{
        RequestBody: operations.UpdateOrganizationApplianceSecurityIntrusionRequestBody{
            AllowedRules: []UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules{
                operations.UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules{
                    Message: sdk.String("aliquid"),
                    RuleID: "consectetur",
                },
            },
        },
        OrganizationID: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationApplianceSecurityIntrusion200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationApplianceVPNThirdPartyVPNPeers

Update the third party VPN peers for an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateOrganizationApplianceVPNThirdPartyVPNPeers(ctx, operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest{
        RequestBody: operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBody{
            Peers: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers{
                operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers{
                    IkeVersion: operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnumTwo.ToPointer(),
                    IpsecPolicies: &operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies{
                        ChildAuthAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumMd5,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumSha256,
                        },
                        ChildCipherAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumDes,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumAes192,
                        },
                        ChildLifetime: sdk.Int64(196374),
                        ChildPfsGroup: []string{
                            "sit",
                            "rerum",
                            "veritatis",
                        },
                        IkeAuthAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumSha1,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumSha256,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumSha1,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumSha256,
                        },
                        IkeCipherAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes128,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes256,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes192,
                        },
                        IkeDiffieHellmanGroup: []string{
                            "commodi",
                            "alias",
                            "fuga",
                        },
                        IkeLifetime: sdk.Int64(14780),
                        IkePrfAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha256,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfmd5,
                        },
                    },
                    IpsecPoliciesPreset: sdk.String("iste"),
                    LocalID: sdk.String("ullam"),
                    Name: "Clark Hodkiewicz",
                    NetworkTags: []string{
                        "nihil",
                    },
                    PrivateSubnets: []string{
                        "libero",
                    },
                    PublicIP: sdk.String("ipsam"),
                    RemoteID: sdk.String("quasi"),
                    Secret: "cumque",
                },
                operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers{
                    IkeVersion: operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnumOne.ToPointer(),
                    IpsecPolicies: &operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies{
                        ChildAuthAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumSha256,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumSha256,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumMd5,
                        },
                        ChildCipherAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumTripledes,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumAes192,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumNull,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumDes,
                        },
                        ChildLifetime: sdk.Int64(523995),
                        ChildPfsGroup: []string{
                            "officiis",
                            "cum",
                            "pariatur",
                        },
                        IkeAuthAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumSha256,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumMd5,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumSha256,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumSha256,
                        },
                        IkeCipherAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumDes,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes256,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes256,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumDes,
                        },
                        IkeDiffieHellmanGroup: []string{
                            "esse",
                            "hic",
                            "maxime",
                            "accusantium",
                        },
                        IkeLifetime: sdk.Int64(743531),
                        IkePrfAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha256,
                        },
                    },
                    IpsecPoliciesPreset: sdk.String("eligendi"),
                    LocalID: sdk.String("recusandae"),
                    Name: "Maria Larson",
                    NetworkTags: []string{
                        "tempora",
                        "magni",
                        "rerum",
                        "doloremque",
                    },
                    PrivateSubnets: []string{
                        "eum",
                    },
                    PublicIP: sdk.String("at"),
                    RemoteID: sdk.String("eum"),
                    Secret: "reprehenderit",
                },
                operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers{
                    IkeVersion: operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnumTwo.ToPointer(),
                    IpsecPolicies: &operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies{
                        ChildAuthAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumSha1,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumSha1,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumSha256,
                        },
                        ChildCipherAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumDes,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumAes256,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumDes,
                        },
                        ChildLifetime: sdk.Int64(101107),
                        ChildPfsGroup: []string{
                            "enim",
                            "rem",
                            "magni",
                        },
                        IkeAuthAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumSha1,
                        },
                        IkeCipherAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes192,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes192,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumTripledes,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumTripledes,
                        },
                        IkeDiffieHellmanGroup: []string{
                            "officia",
                            "natus",
                            "cumque",
                            "natus",
                        },
                        IkeLifetime: sdk.Int64(312511),
                        IkePrfAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumDefault,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha256,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha1,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha256,
                        },
                    },
                    IpsecPoliciesPreset: sdk.String("quis"),
                    LocalID: sdk.String("enim"),
                    Name: "Ida Stanton IV",
                    NetworkTags: []string{
                        "asperiores",
                        "recusandae",
                        "voluptates",
                        "praesentium",
                    },
                    PrivateSubnets: []string{
                        "fugit",
                    },
                    PublicIP: sdk.String("sit"),
                    RemoteID: sdk.String("aliquid"),
                    Secret: "necessitatibus",
                },
            },
        },
        OrganizationID: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationApplianceVpnVpnFirewallRules

Update the firewall rules of an organization's site-to-site VPN

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appliance.UpdateOrganizationApplianceVpnVpnFirewallRules(ctx, operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequest{
        RequestBody: &operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody{
            Rules: []UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules{
                operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules{
                    Comment: sdk.String("sunt"),
                    DestCidr: "nesciunt",
                    DestPort: sdk.String("delectus"),
                    Policy: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnumIcmp,
                    SrcCidr: "deserunt",
                    SrcPort: sdk.String("modi"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules{
                    Comment: sdk.String("sunt"),
                    DestCidr: "impedit",
                    DestPort: sdk.String("eius"),
                    Policy: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnumAny,
                    SrcCidr: "at",
                    SrcPort: sdk.String("dolorem"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules{
                    Comment: sdk.String("repellat"),
                    DestCidr: "aspernatur",
                    DestPort: sdk.String("inventore"),
                    Policy: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnumAny,
                    SrcCidr: "fuga",
                    SrcPort: sdk.String("hic"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
            SyslogDefaultRule: sdk.Bool(false),
        },
        OrganizationID: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```
