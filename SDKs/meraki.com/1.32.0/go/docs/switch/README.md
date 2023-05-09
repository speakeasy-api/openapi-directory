# Switch

### Available Operations

* [AddNetworkSwitchStack](#addnetworkswitchstack) - Add a switch to a stack
* [CloneOrganizationSwitchDevices](#cloneorganizationswitchdevices) - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* [CreateDeviceSwitchRoutingInterface](#createdeviceswitchroutinginterface) - Create a layer 3 interface for a switch
* [CreateDeviceSwitchRoutingStaticRoute](#createdeviceswitchroutingstaticroute) - Create a layer 3 static route for a switch
* [CreateNetworkSwitchAccessPolicy](#createnetworkswitchaccesspolicy) - Create an access policy for a switch network
* [CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [CreateNetworkSwitchLinkAggregation](#createnetworkswitchlinkaggregation) - Create a link aggregation group
* [CreateNetworkSwitchPortSchedule](#createnetworkswitchportschedule) - Add a switch port schedule
* [CreateNetworkSwitchQosRule](#createnetworkswitchqosrule) - Add a quality of service rule
* [CreateNetworkSwitchRoutingMulticastRendezvousPoint](#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [CreateNetworkSwitchStack](#createnetworkswitchstack) - Create a stack
* [CreateNetworkSwitchStackRoutingInterface](#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [CreateNetworkSwitchStackRoutingStaticRoute](#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [CycleDeviceSwitchPorts](#cycledeviceswitchports) - Cycle a set of switch ports
* [DeleteDeviceSwitchRoutingInterface](#deletedeviceswitchroutinginterface) - Delete a layer 3 interface from the switch
* [DeleteDeviceSwitchRoutingStaticRoute](#deletedeviceswitchroutingstaticroute) - Delete a layer 3 static route for a switch
* [DeleteNetworkSwitchAccessPolicy](#deletenetworkswitchaccesspolicy) - Delete an access policy for a switch network
* [DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [DeleteNetworkSwitchLinkAggregation](#deletenetworkswitchlinkaggregation) - Split a link aggregation group into separate ports
* [DeleteNetworkSwitchPortSchedule](#deletenetworkswitchportschedule) - Delete a switch port schedule
* [DeleteNetworkSwitchQosRule](#deletenetworkswitchqosrule) - Delete a quality of service rule
* [DeleteNetworkSwitchRoutingMulticastRendezvousPoint](#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [DeleteNetworkSwitchStack](#deletenetworkswitchstack) - Delete a stack
* [DeleteNetworkSwitchStackRoutingInterface](#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [DeleteNetworkSwitchStackRoutingStaticRoute](#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [GetDeviceSwitchPort](#getdeviceswitchport) - Return a switch port
* [GetDeviceSwitchPorts](#getdeviceswitchports) - List the switch ports for a switch
* [GetDeviceSwitchPortsStatuses](#getdeviceswitchportsstatuses) - Return the status for all the ports of a switch
* [GetDeviceSwitchPortsStatusesPackets](#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch
* [GetDeviceSwitchRoutingInterface](#getdeviceswitchroutinginterface) - Return a layer 3 interface for a switch
* [GetDeviceSwitchRoutingInterfaceDhcp](#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [GetDeviceSwitchRoutingInterfaces](#getdeviceswitchroutinginterfaces) - List layer 3 interfaces for a switch
* [GetDeviceSwitchRoutingStaticRoute](#getdeviceswitchroutingstaticroute) - Return a layer 3 static route for a switch
* [GetDeviceSwitchRoutingStaticRoutes](#getdeviceswitchroutingstaticroutes) - List layer 3 static routes for a switch
* [GetDeviceSwitchWarmSpare](#getdeviceswitchwarmspare) - Return warm spare configuration for a switch
* [GetNetworkSwitchAccessControlLists](#getnetworkswitchaccesscontrollists) - Return the access control lists for a MS network
* [GetNetworkSwitchAccessPolicies](#getnetworkswitchaccesspolicies) - List the access policies for a switch network
* [GetNetworkSwitchAccessPolicy](#getnetworkswitchaccesspolicy) - Return a specific access policy for a switch network
* [GetNetworkSwitchAlternateManagementInterface](#getnetworkswitchalternatemanagementinterface) - Return the switch alternate management interface for the network
* [GetNetworkSwitchDhcpServerPolicy](#getnetworkswitchdhcpserverpolicy) - Return the DHCP server settings
* [GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
* [GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [GetNetworkSwitchDhcpV4ServersSeen](#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
* [GetNetworkSwitchDscpToCosMappings](#getnetworkswitchdscptocosmappings) - Return the DSCP to CoS mappings
* [GetNetworkSwitchLinkAggregations](#getnetworkswitchlinkaggregations) - List link aggregation groups
* [GetNetworkSwitchMtu](#getnetworkswitchmtu) - Return the MTU configuration
* [GetNetworkSwitchPortSchedules](#getnetworkswitchportschedules) - List switch port schedules
* [GetNetworkSwitchQosRule](#getnetworkswitchqosrule) - Return a quality of service rule
* [GetNetworkSwitchQosRules](#getnetworkswitchqosrules) - List quality of service rules
* [GetNetworkSwitchQosRulesOrder](#getnetworkswitchqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [GetNetworkSwitchRoutingMulticast](#getnetworkswitchroutingmulticast) - Return multicast settings for a network
* [GetNetworkSwitchRoutingMulticastRendezvousPoint](#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [GetNetworkSwitchRoutingMulticastRendezvousPoints](#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [GetNetworkSwitchRoutingOspf](#getnetworkswitchroutingospf) - Return layer 3 OSPF routing configuration
* [GetNetworkSwitchSettings](#getnetworkswitchsettings) - Returns the switch network settings
* [GetNetworkSwitchStack](#getnetworkswitchstack) - Show a switch stack
* [GetNetworkSwitchStackRoutingInterface](#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [GetNetworkSwitchStackRoutingInterfaceDhcp](#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [GetNetworkSwitchStackRoutingInterfaces](#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [GetNetworkSwitchStackRoutingStaticRoute](#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [GetNetworkSwitchStackRoutingStaticRoutes](#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [GetNetworkSwitchStacks](#getnetworkswitchstacks) - List the switch stacks in a network
* [GetNetworkSwitchStormControl](#getnetworkswitchstormcontrol) - Return the storm control configuration for a switch network
* [GetNetworkSwitchStp](#getnetworkswitchstp) - Returns STP settings
* [GetOrganizationConfigTemplateSwitchProfilePort](#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [GetOrganizationConfigTemplateSwitchProfilePorts](#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [GetOrganizationConfigTemplateSwitchProfiles](#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration
* [GetOrganizationSwitchPortsBySwitch](#getorganizationswitchportsbyswitch) - List the switchports in an organization by switch
* [RemoveNetworkSwitchStack](#removenetworkswitchstack) - Remove a switch from a stack
* [UpdateDeviceSwitchPort](#updatedeviceswitchport) - Update a switch port
* [UpdateDeviceSwitchRoutingInterface](#updatedeviceswitchroutinginterface) - Update a layer 3 interface for a switch
* [UpdateDeviceSwitchRoutingInterfaceDhcp](#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [UpdateDeviceSwitchRoutingStaticRoute](#updatedeviceswitchroutingstaticroute) - Update a layer 3 static route for a switch
* [UpdateDeviceSwitchWarmSpare](#updatedeviceswitchwarmspare) - Update warm spare configuration for a switch
* [UpdateNetworkSwitchAccessControlLists](#updatenetworkswitchaccesscontrollists) - Update the access control lists for a MS network
* [UpdateNetworkSwitchAccessPolicy](#updatenetworkswitchaccesspolicy) - Update an access policy for a switch network
* [UpdateNetworkSwitchAlternateManagementInterface](#updatenetworkswitchalternatemanagementinterface) - Update the switch alternate management interface for the network
* [UpdateNetworkSwitchDhcpServerPolicy](#updatenetworkswitchdhcpserverpolicy) - Update the DHCP server settings
* [UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#updatenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Update a server that is trusted by Dynamic ARP Inspection on this network
* [UpdateNetworkSwitchDscpToCosMappings](#updatenetworkswitchdscptocosmappings) - Update the DSCP to CoS mappings
* [UpdateNetworkSwitchLinkAggregation](#updatenetworkswitchlinkaggregation) - Update a link aggregation group
* [UpdateNetworkSwitchMtu](#updatenetworkswitchmtu) - Update the MTU configuration
* [UpdateNetworkSwitchPortSchedule](#updatenetworkswitchportschedule) - Update a switch port schedule
* [UpdateNetworkSwitchQosRule](#updatenetworkswitchqosrule) - Update a quality of service rule
* [UpdateNetworkSwitchQosRulesOrder](#updatenetworkswitchqosrulesorder) - Update the order in which the rules should be processed by the switch
* [UpdateNetworkSwitchRoutingMulticast](#updatenetworkswitchroutingmulticast) - Update multicast settings for a network
* [UpdateNetworkSwitchRoutingMulticastRendezvousPoint](#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point
* [UpdateNetworkSwitchRoutingOspf](#updatenetworkswitchroutingospf) - Update layer 3 OSPF routing configuration
* [UpdateNetworkSwitchSettings](#updatenetworkswitchsettings) - Update switch network settings
* [UpdateNetworkSwitchStackRoutingInterface](#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [UpdateNetworkSwitchStackRoutingInterfaceDhcp](#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack
* [UpdateNetworkSwitchStackRoutingStaticRoute](#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack
* [UpdateNetworkSwitchStormControl](#updatenetworkswitchstormcontrol) - Update the storm control configuration for a switch network
* [UpdateNetworkSwitchStp](#updatenetworkswitchstp) - Updates STP settings
* [UpdateOrganizationConfigTemplateSwitchProfilePort](#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port

## AddNetworkSwitchStack

Add a switch to a stack

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
    res, err := s.Switch.AddNetworkSwitchStack(ctx, operations.AddNetworkSwitchStackRequest{
        RequestBody: operations.AddNetworkSwitchStackRequestBody{
            Serial: "aperiam",
        },
        NetworkID: "minus",
        SwitchStackID: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddNetworkSwitchStack200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CloneOrganizationSwitchDevices

Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring

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
    res, err := s.Switch.CloneOrganizationSwitchDevices(ctx, operations.CloneOrganizationSwitchDevicesRequest{
        RequestBody: operations.CloneOrganizationSwitchDevicesRequestBody{
            SourceSerial: "laborum",
            TargetSerials: []string{
                "nisi",
                "sit",
                "expedita",
            },
        },
        OrganizationID: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloneOrganizationSwitchDevices200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateDeviceSwitchRoutingInterface

Create a layer 3 interface for a switch

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
    res, err := s.Switch.CreateDeviceSwitchRoutingInterface(ctx, operations.CreateDeviceSwitchRoutingInterfaceRequest{
        RequestBody: &operations.CreateDeviceSwitchRoutingInterfaceRequestBody{
            DefaultGateway: sdk.String("dolorem"),
            InterfaceIP: sdk.String("provident"),
            Ipv6: &operations.CreateDeviceSwitchRoutingInterfaceRequestBodyIpv6{
                Address: sdk.String("53095 Bahringer Springs"),
                AssignmentMode: sdk.String("labore"),
                Gateway: sdk.String("reiciendis"),
                Prefix: sdk.String("velit"),
            },
            MulticastRouting: operations.CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnumEnabled.ToPointer(),
            Name: sdk.String("Carla Pacocha"),
            OspfSettings: &operations.CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings{
                Area: sdk.String("alias"),
                Cost: sdk.Int64(247352),
                IsPassiveEnabled: sdk.Bool(false),
            },
            OspfV3: &operations.CreateDeviceSwitchRoutingInterfaceRequestBodyOspfV3{
                Area: sdk.String("culpa"),
                Cost: sdk.Int64(268821),
                IsPassiveEnabled: sdk.Bool(false),
            },
            Subnet: sdk.String("animi"),
            VlanID: sdk.Int64(910424),
        },
        Serial: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeviceSwitchRoutingInterface201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateDeviceSwitchRoutingStaticRoute

Create a layer 3 static route for a switch

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
    res, err := s.Switch.CreateDeviceSwitchRoutingStaticRoute(ctx, operations.CreateDeviceSwitchRoutingStaticRouteRequest{
        RequestBody: operations.CreateDeviceSwitchRoutingStaticRouteRequestBody{
            AdvertiseViaOspfEnabled: sdk.Bool(false),
            Name: sdk.String("Ms. Jamie Funk"),
            NextHopIP: "voluptas",
            PreferOverOspfRoutesEnabled: sdk.Bool(false),
            Subnet: "ipsam",
        },
        Serial: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeviceSwitchRoutingStaticRoute201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSwitchAccessPolicy

Create an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.

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
    res, err := s.Switch.CreateNetworkSwitchAccessPolicy(ctx, operations.CreateNetworkSwitchAccessPolicyRequest{
        RequestBody: operations.CreateNetworkSwitchAccessPolicyRequestBody{
            AccessPolicyType: operations.CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnumEightHundredAndTwo1x.ToPointer(),
            Dot1x: &operations.CreateNetworkSwitchAccessPolicyRequestBodyDot1x{
                ControlDirection: operations.CreateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnumBoth.ToPointer(),
            },
            GuestPortBouncing: sdk.Bool(false),
            GuestVlanID: sdk.Int64(451716),
            HostMode: operations.CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnumMultiAuth,
            IncreaseAccessSpeed: sdk.Bool(false),
            Name: "Terence Murphy",
            Radius: &operations.CreateNetworkSwitchAccessPolicyRequestBodyRadius{
                CriticalAuth: &operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth{
                    DataVlanID: sdk.Int64(2264),
                    SuspendPortBounce: sdk.Bool(false),
                    VoiceVlanID: sdk.Int64(532544),
                },
                FailedAuthVlanID: sdk.Int64(498786),
                ReAuthenticationInterval: sdk.Int64(804258),
            },
            RadiusAccountingEnabled: false,
            RadiusAccountingServers: []CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                    Host: "numquam",
                    Port: 178532,
                    Secret: "consequuntur",
                },
                operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                    Host: "repellendus",
                    Port: 762504,
                    Secret: "a",
                },
                operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                    Host: "ut",
                    Port: 860203,
                    Secret: "harum",
                },
                operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                    Host: "quo",
                    Port: 542970,
                    Secret: "labore",
                },
            },
            RadiusCoaSupportEnabled: false,
            RadiusGroupAttribute: sdk.String("perferendis"),
            RadiusServers: []CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers{
                operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers{
                    Host: "ullam",
                    Port: 157078,
                    Secret: "consectetur",
                },
                operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers{
                    Host: "laudantium",
                    Port: 832292,
                    Secret: "assumenda",
                },
            },
            RadiusTestingEnabled: false,
            URLRedirectWalledGardenEnabled: false,
            URLRedirectWalledGardenRanges: []string{
                "ducimus",
            },
            VoiceVlanClients: sdk.Bool(false),
        },
        NetworkID: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchAccessPolicy201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Add a server to be trusted by Dynamic ARP Inspection on this network

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
    res, err := s.Switch.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(ctx, operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest{
        RequestBody: operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody{
            Ipv4: operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4{
                Address: sdk.String("145 Ottilie Court"),
            },
            Mac: "velit",
            Vlan: 12787,
        },
        NetworkID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSwitchLinkAggregation

Create a link aggregation group

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
    res, err := s.Switch.CreateNetworkSwitchLinkAggregation(ctx, operations.CreateNetworkSwitchLinkAggregationRequest{
        RequestBody: &operations.CreateNetworkSwitchLinkAggregationRequestBody{
            SwitchPorts: []CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "dolorum",
                    Serial: "possimus",
                },
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "libero",
                    Serial: "nostrum",
                },
            },
            SwitchProfilePorts: []CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                    PortID: "possimus",
                    Profile: "voluptatem",
                },
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                    PortID: "harum",
                    Profile: "alias",
                },
            },
        },
        NetworkID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchLinkAggregation201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSwitchPortSchedule

Add a switch port schedule

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
    res, err := s.Switch.CreateNetworkSwitchPortSchedule(ctx, operations.CreateNetworkSwitchPortScheduleRequest{
        RequestBody: operations.CreateNetworkSwitchPortScheduleRequestBody{
            Name: "Anthony Lemke",
            PortSchedule: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortSchedule{
                Friday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday{
                    Active: sdk.Bool(false),
                    From: sdk.String("excepturi"),
                    To: sdk.String("distinctio"),
                },
                Monday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday{
                    Active: sdk.Bool(false),
                    From: sdk.String("quam"),
                    To: sdk.String("doloremque"),
                },
                Saturday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday{
                    Active: sdk.Bool(false),
                    From: sdk.String("voluptatibus"),
                    To: sdk.String("deserunt"),
                },
                Sunday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday{
                    Active: sdk.Bool(false),
                    From: sdk.String("nobis"),
                    To: sdk.String("voluptas"),
                },
                Thursday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday{
                    Active: sdk.Bool(false),
                    From: sdk.String("nostrum"),
                    To: sdk.String("officiis"),
                },
                Tuesday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("quis"),
                    To: sdk.String("numquam"),
                },
                Wednesday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("iste"),
                    To: sdk.String("corporis"),
                },
            },
        },
        NetworkID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchPortSchedule201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSwitchQosRule

Add a quality of service rule

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
    res, err := s.Switch.CreateNetworkSwitchQosRule(ctx, operations.CreateNetworkSwitchQosRuleRequest{
        RequestBody: operations.CreateNetworkSwitchQosRuleRequestBody{
            Dscp: sdk.Int64(358369),
            DstPort: sdk.Int64(541409),
            DstPortRange: sdk.String("alias"),
            Protocol: operations.CreateNetworkSwitchQosRuleRequestBodyProtocolEnumTCP.ToPointer(),
            SrcPort: sdk.Int64(432110),
            SrcPortRange: sdk.String("animi"),
            Vlan: 484732,
        },
        NetworkID: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchQosRule201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSwitchRoutingMulticastRendezvousPoint

Create a multicast rendezvous point

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
    res, err := s.Switch.CreateNetworkSwitchRoutingMulticastRendezvousPoint(ctx, operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest{
        RequestBody: operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody{
            InterfaceIP: "a",
            MulticastGroup: "id",
        },
        NetworkID: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSwitchStack

Create a stack

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
    res, err := s.Switch.CreateNetworkSwitchStack(ctx, operations.CreateNetworkSwitchStackRequest{
        RequestBody: operations.CreateNetworkSwitchStackRequestBody{
            Name: "Lyle Bahringer",
            Serials: []string{
                "voluptatem",
                "animi",
            },
        },
        NetworkID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchStack201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSwitchStackRoutingInterface

Create a layer 3 interface for a switch stack

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
    res, err := s.Switch.CreateNetworkSwitchStackRoutingInterface(ctx, operations.CreateNetworkSwitchStackRoutingInterfaceRequest{
        RequestBody: operations.CreateNetworkSwitchStackRoutingInterfaceRequestBody{
            DefaultGateway: sdk.String("dolore"),
            InterfaceIP: sdk.String("explicabo"),
            Ipv6: &operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6{
                Address: sdk.String("47186 Lowe Cape"),
                AssignmentMode: sdk.String("doloremque"),
                Gateway: sdk.String("molestiae"),
                Prefix: sdk.String("nobis"),
            },
            MulticastRouting: operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumIgmpSnoopingQuerier.ToPointer(),
            Name: "Kevin Kling",
            OspfSettings: &operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings{
                Area: sdk.String("provident"),
                Cost: sdk.Int64(784448),
                IsPassiveEnabled: sdk.Bool(false),
            },
            Subnet: sdk.String("quaerat"),
            VlanID: 871651,
        },
        NetworkID: "corrupti",
        SwitchStackID: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchStackRoutingInterface201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSwitchStackRoutingStaticRoute

Create a layer 3 static route for a switch stack

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
    res, err := s.Switch.CreateNetworkSwitchStackRoutingStaticRoute(ctx, operations.CreateNetworkSwitchStackRoutingStaticRouteRequest{
        RequestBody: operations.CreateNetworkSwitchStackRoutingStaticRouteRequestBody{
            AdvertiseViaOspfEnabled: sdk.Bool(false),
            Name: sdk.String("Cody Rempel"),
            NextHopIP: "enim",
            PreferOverOspfRoutesEnabled: sdk.Bool(false),
            Subnet: "nam",
        },
        NetworkID: "magnam",
        SwitchStackID: "autem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchStackRoutingStaticRoute201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CycleDeviceSwitchPorts

Cycle a set of switch ports

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
    res, err := s.Switch.CycleDeviceSwitchPorts(ctx, operations.CycleDeviceSwitchPortsRequest{
        RequestBody: operations.CycleDeviceSwitchPortsRequestBody{
            Ports: []string{
                "nihil",
                "omnis",
            },
        },
        Serial: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CycleDeviceSwitchPorts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteDeviceSwitchRoutingInterface

Delete a layer 3 interface from the switch

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
    res, err := s.Switch.DeleteDeviceSwitchRoutingInterface(ctx, operations.DeleteDeviceSwitchRoutingInterfaceRequest{
        InterfaceID: "quos",
        Serial: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDeviceSwitchRoutingStaticRoute

Delete a layer 3 static route for a switch

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
    res, err := s.Switch.DeleteDeviceSwitchRoutingStaticRoute(ctx, operations.DeleteDeviceSwitchRoutingStaticRouteRequest{
        Serial: "quae",
        StaticRouteID: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSwitchAccessPolicy

Delete an access policy for a switch network

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
    res, err := s.Switch.DeleteNetworkSwitchAccessPolicy(ctx, operations.DeleteNetworkSwitchAccessPolicyRequest{
        AccessPolicyNumber: "quaerat",
        NetworkID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Remove a server from being trusted by Dynamic ARP Inspection on this network

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
    res, err := s.Switch.DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(ctx, operations.DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest{
        NetworkID: "exercitationem",
        TrustedServerID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSwitchLinkAggregation

Split a link aggregation group into separate ports

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
    res, err := s.Switch.DeleteNetworkSwitchLinkAggregation(ctx, operations.DeleteNetworkSwitchLinkAggregationRequest{
        LinkAggregationID: "vitae",
        NetworkID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSwitchPortSchedule

Delete a switch port schedule

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
    res, err := s.Switch.DeleteNetworkSwitchPortSchedule(ctx, operations.DeleteNetworkSwitchPortScheduleRequest{
        NetworkID: "quas",
        PortScheduleID: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSwitchQosRule

Delete a quality of service rule

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
    res, err := s.Switch.DeleteNetworkSwitchQosRule(ctx, operations.DeleteNetworkSwitchQosRuleRequest{
        NetworkID: "distinctio",
        QosRuleID: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSwitchRoutingMulticastRendezvousPoint

Delete a multicast rendezvous point

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
    res, err := s.Switch.DeleteNetworkSwitchRoutingMulticastRendezvousPoint(ctx, operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest{
        NetworkID: "aspernatur",
        RendezvousPointID: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSwitchStack

Delete a stack

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
    res, err := s.Switch.DeleteNetworkSwitchStack(ctx, operations.DeleteNetworkSwitchStackRequest{
        NetworkID: "velit",
        SwitchStackID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSwitchStackRoutingInterface

Delete a layer 3 interface from a switch stack

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
    res, err := s.Switch.DeleteNetworkSwitchStackRoutingInterface(ctx, operations.DeleteNetworkSwitchStackRoutingInterfaceRequest{
        InterfaceID: "odio",
        NetworkID: "veniam",
        SwitchStackID: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSwitchStackRoutingStaticRoute

Delete a layer 3 static route for a switch stack

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
    res, err := s.Switch.DeleteNetworkSwitchStackRoutingStaticRoute(ctx, operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest{
        NetworkID: "soluta",
        StaticRouteID: "officiis",
        SwitchStackID: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDeviceSwitchPort

Return a switch port

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
    res, err := s.Switch.GetDeviceSwitchPort(ctx, operations.GetDeviceSwitchPortRequest{
        PortID: "magnam",
        Serial: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchPort200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceSwitchPorts

List the switch ports for a switch

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
    res, err := s.Switch.GetDeviceSwitchPorts(ctx, operations.GetDeviceSwitchPortsRequest{
        Serial: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchPorts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceSwitchPortsStatuses

Return the status for all the ports of a switch

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
    res, err := s.Switch.GetDeviceSwitchPortsStatuses(ctx, operations.GetDeviceSwitchPortsStatusesRequest{
        Serial: "molestiae",
        T0: sdk.String("totam"),
        Timespan: sdk.Float32(7601.54),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchPortsStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceSwitchPortsStatusesPackets

Return the packet counters for all the ports of a switch

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
    res, err := s.Switch.GetDeviceSwitchPortsStatusesPackets(ctx, operations.GetDeviceSwitchPortsStatusesPacketsRequest{
        Serial: "unde",
        T0: sdk.String("commodi"),
        Timespan: sdk.Float32(7047.81),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchPortsStatusesPackets200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceSwitchRoutingInterface

Return a layer 3 interface for a switch

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
    res, err := s.Switch.GetDeviceSwitchRoutingInterface(ctx, operations.GetDeviceSwitchRoutingInterfaceRequest{
        InterfaceID: "quidem",
        Serial: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchRoutingInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceSwitchRoutingInterfaceDhcp

Return a layer 3 interface DHCP configuration for a switch

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
    res, err := s.Switch.GetDeviceSwitchRoutingInterfaceDhcp(ctx, operations.GetDeviceSwitchRoutingInterfaceDhcpRequest{
        InterfaceID: "atque",
        Serial: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceSwitchRoutingInterfaces

List layer 3 interfaces for a switch. Those for a stack may be found under switch stack routing.

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
    res, err := s.Switch.GetDeviceSwitchRoutingInterfaces(ctx, operations.GetDeviceSwitchRoutingInterfacesRequest{
        Serial: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchRoutingInterfaces200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceSwitchRoutingStaticRoute

Return a layer 3 static route for a switch

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
    res, err := s.Switch.GetDeviceSwitchRoutingStaticRoute(ctx, operations.GetDeviceSwitchRoutingStaticRouteRequest{
        Serial: "numquam",
        StaticRouteID: "eveniet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchRoutingStaticRoute200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceSwitchRoutingStaticRoutes

List layer 3 static routes for a switch

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
    res, err := s.Switch.GetDeviceSwitchRoutingStaticRoutes(ctx, operations.GetDeviceSwitchRoutingStaticRoutesRequest{
        Serial: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchRoutingStaticRoutes200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceSwitchWarmSpare

Return warm spare configuration for a switch

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
    res, err := s.Switch.GetDeviceSwitchWarmSpare(ctx, operations.GetDeviceSwitchWarmSpareRequest{
        Serial: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchWarmSpare200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchAccessControlLists

Return the access control lists for a MS network

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
    res, err := s.Switch.GetNetworkSwitchAccessControlLists(ctx, operations.GetNetworkSwitchAccessControlListsRequest{
        NetworkID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchAccessControlLists200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchAccessPolicies

List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method

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
    res, err := s.Switch.GetNetworkSwitchAccessPolicies(ctx, operations.GetNetworkSwitchAccessPoliciesRequest{
        NetworkID: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchAccessPolicies200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchAccessPolicy

Return a specific access policy for a switch network

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
    res, err := s.Switch.GetNetworkSwitchAccessPolicy(ctx, operations.GetNetworkSwitchAccessPolicyRequest{
        AccessPolicyNumber: "veniam",
        NetworkID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchAccessPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchAlternateManagementInterface

Return the switch alternate management interface for the network

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
    res, err := s.Switch.GetNetworkSwitchAlternateManagementInterface(ctx, operations.GetNetworkSwitchAlternateManagementInterfaceRequest{
        NetworkID: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchAlternateManagementInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchDhcpServerPolicy

Return the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively

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
    res, err := s.Switch.GetNetworkSwitchDhcpServerPolicy(ctx, operations.GetNetworkSwitchDhcpServerPolicyRequest{
        NetworkID: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDhcpServerPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers

Return the list of servers trusted by Dynamic ARP Inspection on this network. These are also known as whitelisted snoop entries

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
    res, err := s.Switch.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers(ctx, operations.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest{
        EndingBefore: sdk.String("nam"),
        NetworkID: "temporibus",
        PerPage: sdk.Int64(595144),
        StartingAfter: sdk.String("quam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice

Return the devices that have a Dynamic ARP Inspection warning and their warnings

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
    res, err := s.Switch.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice(ctx, operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest{
        EndingBefore: sdk.String("iste"),
        NetworkID: "rerum",
        PerPage: sdk.Int64(515870),
        StartingAfter: sdk.String("necessitatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchDhcpV4ServersSeen

Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

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
    res, err := s.Switch.GetNetworkSwitchDhcpV4ServersSeen(ctx, operations.GetNetworkSwitchDhcpV4ServersSeenRequest{
        EndingBefore: sdk.String("ex"),
        NetworkID: "perspiciatis",
        PerPage: sdk.Int64(23322),
        StartingAfter: sdk.String("est"),
        T0: sdk.String("perspiciatis"),
        Timespan: sdk.Float32(2055.97),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchDscpToCosMappings

Return the DSCP to CoS mappings

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
    res, err := s.Switch.GetNetworkSwitchDscpToCosMappings(ctx, operations.GetNetworkSwitchDscpToCosMappingsRequest{
        NetworkID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDscpToCosMappings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchLinkAggregations

List link aggregation groups

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
    res, err := s.Switch.GetNetworkSwitchLinkAggregations(ctx, operations.GetNetworkSwitchLinkAggregationsRequest{
        NetworkID: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchLinkAggregations200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchMtu

Return the MTU configuration

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
    res, err := s.Switch.GetNetworkSwitchMtu(ctx, operations.GetNetworkSwitchMtuRequest{
        NetworkID: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchMtu200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchPortSchedules

List switch port schedules

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
    res, err := s.Switch.GetNetworkSwitchPortSchedules(ctx, operations.GetNetworkSwitchPortSchedulesRequest{
        NetworkID: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchPortSchedules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchQosRule

Return a quality of service rule

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
    res, err := s.Switch.GetNetworkSwitchQosRule(ctx, operations.GetNetworkSwitchQosRuleRequest{
        NetworkID: "velit",
        QosRuleID: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchQosRule200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchQosRules

List quality of service rules

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
    res, err := s.Switch.GetNetworkSwitchQosRules(ctx, operations.GetNetworkSwitchQosRulesRequest{
        NetworkID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchQosRules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchQosRulesOrder

Return the quality of service rule IDs by order in which they will be processed by the switch

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
    res, err := s.Switch.GetNetworkSwitchQosRulesOrder(ctx, operations.GetNetworkSwitchQosRulesOrderRequest{
        NetworkID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchQosRulesOrder200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchRoutingMulticast

Return multicast settings for a network

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
    res, err := s.Switch.GetNetworkSwitchRoutingMulticast(ctx, operations.GetNetworkSwitchRoutingMulticastRequest{
        NetworkID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchRoutingMulticast200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchRoutingMulticastRendezvousPoint

Return a multicast rendezvous point

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
    res, err := s.Switch.GetNetworkSwitchRoutingMulticastRendezvousPoint(ctx, operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest{
        NetworkID: "fugiat",
        RendezvousPointID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchRoutingMulticastRendezvousPoints

List multicast rendezvous points

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
    res, err := s.Switch.GetNetworkSwitchRoutingMulticastRendezvousPoints(ctx, operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest{
        NetworkID: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJSONArrays != nil {
        // handle response
    }
}
```

## GetNetworkSwitchRoutingOspf

Return layer 3 OSPF routing configuration

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
    res, err := s.Switch.GetNetworkSwitchRoutingOspf(ctx, operations.GetNetworkSwitchRoutingOspfRequest{
        NetworkID: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchRoutingOspf200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchSettings

Returns the switch network settings

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
    res, err := s.Switch.GetNetworkSwitchSettings(ctx, operations.GetNetworkSwitchSettingsRequest{
        NetworkID: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchStack

Show a switch stack

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
    res, err := s.Switch.GetNetworkSwitchStack(ctx, operations.GetNetworkSwitchStackRequest{
        NetworkID: "iste",
        SwitchStackID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStack200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchStackRoutingInterface

Return a layer 3 interface from a switch stack

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
    res, err := s.Switch.GetNetworkSwitchStackRoutingInterface(ctx, operations.GetNetworkSwitchStackRoutingInterfaceRequest{
        InterfaceID: "incidunt",
        NetworkID: "eum",
        SwitchStackID: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStackRoutingInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchStackRoutingInterfaceDhcp

Return a layer 3 interface DHCP configuration for a switch stack

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
    res, err := s.Switch.GetNetworkSwitchStackRoutingInterfaceDhcp(ctx, operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest{
        InterfaceID: "cupiditate",
        NetworkID: "ducimus",
        SwitchStackID: "autem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchStackRoutingInterfaces

List layer 3 interfaces for a switch stack

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
    res, err := s.Switch.GetNetworkSwitchStackRoutingInterfaces(ctx, operations.GetNetworkSwitchStackRoutingInterfacesRequest{
        NetworkID: "fugit",
        SwitchStackID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStackRoutingInterfaces200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchStackRoutingStaticRoute

Return a layer 3 static route for a switch stack

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
    res, err := s.Switch.GetNetworkSwitchStackRoutingStaticRoute(ctx, operations.GetNetworkSwitchStackRoutingStaticRouteRequest{
        NetworkID: "ab",
        StaticRouteID: "sequi",
        SwitchStackID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchStackRoutingStaticRoutes

List layer 3 static routes for a switch stack

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
    res, err := s.Switch.GetNetworkSwitchStackRoutingStaticRoutes(ctx, operations.GetNetworkSwitchStackRoutingStaticRoutesRequest{
        NetworkID: "nemo",
        SwitchStackID: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStackRoutingStaticRoutes200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchStacks

List the switch stacks in a network

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
    res, err := s.Switch.GetNetworkSwitchStacks(ctx, operations.GetNetworkSwitchStacksRequest{
        NetworkID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStacks200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchStormControl

Return the storm control configuration for a switch network

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
    res, err := s.Switch.GetNetworkSwitchStormControl(ctx, operations.GetNetworkSwitchStormControlRequest{
        NetworkID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStormControl200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchStp

Returns STP settings

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
    res, err := s.Switch.GetNetworkSwitchStp(ctx, operations.GetNetworkSwitchStpRequest{
        NetworkID: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationConfigTemplateSwitchProfilePort

Return a switch profile port

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
    res, err := s.Switch.GetOrganizationConfigTemplateSwitchProfilePort(ctx, operations.GetOrganizationConfigTemplateSwitchProfilePortRequest{
        ConfigTemplateID: "dicta",
        OrganizationID: "recusandae",
        PortID: "sapiente",
        ProfileID: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationConfigTemplateSwitchProfilePorts

Return all the ports of a switch profile

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
    res, err := s.Switch.GetOrganizationConfigTemplateSwitchProfilePorts(ctx, operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest{
        ConfigTemplateID: "aspernatur",
        OrganizationID: "odit",
        ProfileID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationConfigTemplateSwitchProfiles

List the switch profiles for your switch template configuration

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
    res, err := s.Switch.GetOrganizationConfigTemplateSwitchProfiles(ctx, operations.GetOrganizationConfigTemplateSwitchProfilesRequest{
        ConfigTemplateID: "nemo",
        OrganizationID: "atque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigTemplateSwitchProfiles200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationSwitchPortsBySwitch

List the switchports in an organization by switch

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
    res, err := s.Switch.GetOrganizationSwitchPortsBySwitch(ctx, operations.GetOrganizationSwitchPortsBySwitchRequest{
        ConfigurationUpdatedAfter: sdk.String("labore"),
        EndingBefore: sdk.String("dolorem"),
        Mac: sdk.String("repellendus"),
        Macs: []string{
            "reiciendis",
        },
        Name: sdk.String("Mrs. Carroll Casper"),
        NetworkIds: []string{
            "similique",
            "rerum",
            "nihil",
        },
        OrganizationID: "labore",
        PerPage: sdk.Int64(919840),
        PortProfileIds: []string{
            "error",
        },
        Serial: sdk.String("error"),
        Serials: []string{
            "atque",
            "maxime",
            "ipsa",
        },
        StartingAfter: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSwitchPortsBySwitch200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## RemoveNetworkSwitchStack

Remove a switch from a stack

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
    res, err := s.Switch.RemoveNetworkSwitchStack(ctx, operations.RemoveNetworkSwitchStackRequest{
        RequestBody: operations.RemoveNetworkSwitchStackRequestBody{
            Serial: "quos",
        },
        NetworkID: "debitis",
        SwitchStackID: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveNetworkSwitchStack200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceSwitchPort

Update a switch port

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
    res, err := s.Switch.UpdateDeviceSwitchPort(ctx, operations.UpdateDeviceSwitchPortRequest{
        RequestBody: &operations.UpdateDeviceSwitchPortRequestBody{
            AccessPolicyNumber: sdk.Int64(454983),
            AccessPolicyType: operations.UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnumStickyMacAllowList.ToPointer(),
            AdaptivePolicyGroupID: sdk.String("labore"),
            AllowedVlans: sdk.String("ullam"),
            DaiTrusted: sdk.Bool(false),
            Enabled: sdk.Bool(false),
            FlexibleStackingEnabled: sdk.Bool(false),
            IsolationEnabled: sdk.Bool(false),
            LinkNegotiation: sdk.String("quidem"),
            MacAllowList: []string{
                "sequi",
                "totam",
                "dignissimos",
            },
            Name: sdk.String("Ron Medhurst"),
            PeerSgtCapable: sdk.Bool(false),
            PoeEnabled: sdk.Bool(false),
            PortScheduleID: sdk.String("aliquid"),
            Profile: &operations.UpdateDeviceSwitchPortRequestBodyProfile{
                Enabled: sdk.Bool(false),
                ID: sdk.String("692f70b5-8696-4cb0-882b-9f3dfc55f7ea"),
                Iname: sdk.String("nam"),
            },
            RstpEnabled: sdk.Bool(false),
            StickyMacAllowList: []string{
                "mollitia",
                "asperiores",
                "itaque",
                "minus",
            },
            StickyMacAllowListLimit: sdk.Int64(832116),
            StormControlEnabled: sdk.Bool(false),
            StpGuard: operations.UpdateDeviceSwitchPortRequestBodyStpGuardEnumLoopGuard.ToPointer(),
            Tags: []string{
                "repellat",
                "odio",
                "temporibus",
            },
            Type: operations.UpdateDeviceSwitchPortRequestBodyTypeEnumTrunk.ToPointer(),
            Udld: operations.UpdateDeviceSwitchPortRequestBodyUdldEnumEnforce.ToPointer(),
            Vlan: sdk.Int64(355981),
            VoiceVlan: sdk.Int64(530493),
        },
        PortID: "dolorem",
        Serial: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceSwitchPort200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceSwitchRoutingInterface

Update a layer 3 interface for a switch

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
    res, err := s.Switch.UpdateDeviceSwitchRoutingInterface(ctx, operations.UpdateDeviceSwitchRoutingInterfaceRequest{
        RequestBody: &operations.UpdateDeviceSwitchRoutingInterfaceRequestBody{
            DefaultGateway: sdk.String("incidunt"),
            InterfaceIP: sdk.String("veniam"),
            Ipv6: &operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyIpv6{
                Address: sdk.String("77224 Maida Harbor"),
                AssignmentMode: sdk.String("pariatur"),
                Gateway: sdk.String("corporis"),
                Prefix: sdk.String("fuga"),
            },
            MulticastRouting: operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnumEnabled.ToPointer(),
            Name: sdk.String("Tiffany Hilll"),
            OspfSettings: &operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings{
                Area: sdk.String("molestias"),
                Cost: sdk.Int64(460524),
                IsPassiveEnabled: sdk.Bool(false),
            },
            OspfV3: &operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfV3{
                Area: sdk.String("esse"),
                Cost: sdk.Int64(34822),
                IsPassiveEnabled: sdk.Bool(false),
            },
            Subnet: sdk.String("natus"),
            VlanID: sdk.Int64(451919),
        },
        InterfaceID: "rerum",
        Serial: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceSwitchRoutingInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceSwitchRoutingInterfaceDhcp

Update a layer 3 interface DHCP configuration for a switch

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
    res, err := s.Switch.UpdateDeviceSwitchRoutingInterfaceDhcp(ctx, operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest{
        RequestBody: &operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody{
            BootFileName: sdk.String("culpa"),
            BootNextServer: sdk.String("omnis"),
            BootOptionsEnabled: sdk.Bool(false),
            DhcpLeaseTime: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumThirtyMinutes.ToPointer(),
            DhcpMode: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnumDhcpServer.ToPointer(),
            DhcpOptions: []UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions{
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "pariatur",
                    Type: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumIP,
                    Value: "earum",
                },
            },
            DhcpRelayServerIps: []string{
                "voluptatibus",
                "ut",
                "aperiam",
            },
            DNSCustomNameservers: []string{
                "saepe",
                "consequatur",
                "atque",
            },
            DNSNameserversOption: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnumCustom.ToPointer(),
            FixedIPAssignments: []UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "culpa",
                    Mac: "vel",
                    Name: "Terry Powlowski",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "rem",
                    Mac: "perspiciatis",
                    Name: "Theresa Cartwright IV",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "accusantium",
                    Mac: "explicabo",
                    Name: "Miss Dolores Barrows",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "earum",
                    Mac: "repellendus",
                    Name: "Peggy Thiel",
                },
            },
            ReservedIPRanges: []UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("illo"),
                    End: "architecto",
                    Start: "at",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("quod"),
                    End: "nihil",
                    Start: "iste",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("sapiente"),
                    End: "quas",
                    Start: "consequatur",
                },
            },
        },
        InterfaceID: "temporibus",
        Serial: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceSwitchRoutingStaticRoute

Update a layer 3 static route for a switch

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
    res, err := s.Switch.UpdateDeviceSwitchRoutingStaticRoute(ctx, operations.UpdateDeviceSwitchRoutingStaticRouteRequest{
        RequestBody: &operations.UpdateDeviceSwitchRoutingStaticRouteRequestBody{
            AdvertiseViaOspfEnabled: sdk.Bool(false),
            Name: sdk.String("Mr. Gladys Schmeler"),
            NextHopIP: sdk.String("eos"),
            PreferOverOspfRoutesEnabled: sdk.Bool(false),
            Subnet: sdk.String("ducimus"),
        },
        Serial: "deleniti",
        StaticRouteID: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceSwitchRoutingStaticRoute200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceSwitchWarmSpare

Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.

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
    res, err := s.Switch.UpdateDeviceSwitchWarmSpare(ctx, operations.UpdateDeviceSwitchWarmSpareRequest{
        RequestBody: operations.UpdateDeviceSwitchWarmSpareRequestBody{
            Enabled: false,
            SpareSerial: sdk.String("vero"),
        },
        Serial: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceSwitchWarmSpare200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchAccessControlLists

Update the access control lists for a MS network

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
    res, err := s.Switch.UpdateNetworkSwitchAccessControlLists(ctx, operations.UpdateNetworkSwitchAccessControlListsRequest{
        RequestBody: operations.UpdateNetworkSwitchAccessControlListsRequestBody{
            Rules: []UpdateNetworkSwitchAccessControlListsRequestBodyRules{
                operations.UpdateNetworkSwitchAccessControlListsRequestBodyRules{
                    Comment: sdk.String("ad"),
                    DstCidr: "quisquam",
                    DstPort: sdk.String("aperiam"),
                    IPVersion: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesIPVersionEnumIpv4.ToPointer(),
                    Policy: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnumTCP,
                    SrcCidr: "eveniet",
                    SrcPort: sdk.String("architecto"),
                    Vlan: sdk.String("cupiditate"),
                },
                operations.UpdateNetworkSwitchAccessControlListsRequestBodyRules{
                    Comment: sdk.String("quibusdam"),
                    DstCidr: "adipisci",
                    DstPort: sdk.String("corrupti"),
                    IPVersion: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesIPVersionEnumAny.ToPointer(),
                    Policy: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnumTCP,
                    SrcCidr: "dolores",
                    SrcPort: sdk.String("at"),
                    Vlan: sdk.String("laudantium"),
                },
            },
        },
        NetworkID: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchAccessControlLists200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchAccessPolicy

Update an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.

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
    res, err := s.Switch.UpdateNetworkSwitchAccessPolicy(ctx, operations.UpdateNetworkSwitchAccessPolicyRequest{
        RequestBody: &operations.UpdateNetworkSwitchAccessPolicyRequestBody{
            AccessPolicyType: operations.UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnumEightHundredAndTwo1x.ToPointer(),
            Dot1x: &operations.UpdateNetworkSwitchAccessPolicyRequestBodyDot1x{
                ControlDirection: operations.UpdateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnumBoth.ToPointer(),
            },
            GuestPortBouncing: sdk.Bool(false),
            GuestVlanID: sdk.Int64(202887),
            HostMode: operations.UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnumMultiAuth.ToPointer(),
            IncreaseAccessSpeed: sdk.Bool(false),
            Name: sdk.String("Roderick Stracke"),
            Radius: &operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadius{
                CriticalAuth: &operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth{
                    DataVlanID: sdk.Int64(880015),
                    SuspendPortBounce: sdk.Bool(false),
                    VoiceVlanID: sdk.Int64(623811),
                },
                FailedAuthVlanID: sdk.Int64(461339),
                ReAuthenticationInterval: sdk.Int64(327110),
            },
            RadiusAccountingEnabled: sdk.Bool(false),
            RadiusAccountingServers: []UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                    Host: "numquam",
                    Port: 874075,
                    Secret: "excepturi",
                },
                operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                    Host: "ut",
                    Port: 622564,
                    Secret: "soluta",
                },
                operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                    Host: "itaque",
                    Port: 243315,
                    Secret: "itaque",
                },
            },
            RadiusCoaSupportEnabled: sdk.Bool(false),
            RadiusGroupAttribute: sdk.String("illo"),
            RadiusServers: []UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers{
                operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers{
                    Host: "in",
                    Port: 161213,
                    Secret: "perferendis",
                },
                operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers{
                    Host: "reiciendis",
                    Port: 735674,
                    Secret: "quibusdam",
                },
            },
            RadiusTestingEnabled: sdk.Bool(false),
            URLRedirectWalledGardenEnabled: sdk.Bool(false),
            URLRedirectWalledGardenRanges: []string{
                "doloremque",
            },
            VoiceVlanClients: sdk.Bool(false),
        },
        AccessPolicyNumber: "necessitatibus",
        NetworkID: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchAccessPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchAlternateManagementInterface

Update the switch alternate management interface for the network

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
    res, err := s.Switch.UpdateNetworkSwitchAlternateManagementInterface(ctx, operations.UpdateNetworkSwitchAlternateManagementInterfaceRequest{
        RequestBody: &operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBody{
            Enabled: sdk.Bool(false),
            Protocols: []UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum{
                operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnumRadius,
            },
            Switches: []UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches{
                operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches{
                    AlternateManagementIP: "autem",
                    Gateway: sdk.String("ea"),
                    Serial: "occaecati",
                    SubnetMask: sdk.String("asperiores"),
                },
                operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches{
                    AlternateManagementIP: "ipsam",
                    Gateway: sdk.String("aliquid"),
                    Serial: "laudantium",
                    SubnetMask: sdk.String("harum"),
                },
            },
            VlanID: sdk.Int64(157759),
        },
        NetworkID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchAlternateManagementInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchDhcpServerPolicy

Update the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively

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
    res, err := s.Switch.UpdateNetworkSwitchDhcpServerPolicy(ctx, operations.UpdateNetworkSwitchDhcpServerPolicyRequest{
        RequestBody: &operations.UpdateNetworkSwitchDhcpServerPolicyRequestBody{
            Alerts: &operations.UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlerts{
                Email: &operations.UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlertsEmail{
                    Enabled: sdk.Bool(false),
                },
            },
            AllowedServers: []string{
                "atque",
                "corrupti",
            },
            ArpInspection: &operations.UpdateNetworkSwitchDhcpServerPolicyRequestBodyArpInspection{
                Enabled: sdk.Bool(false),
            },
            BlockedServers: []string{
                "inventore",
                "non",
            },
            DefaultPolicy: operations.UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnumBlock.ToPointer(),
        },
        NetworkID: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchDhcpServerPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Update a server that is trusted by Dynamic ARP Inspection on this network

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
    res, err := s.Switch.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(ctx, operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest{
        RequestBody: &operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody{
            Ipv4: &operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4{
                Address: sdk.String("83806 Herman Mews"),
            },
            Mac: sdk.String("impedit"),
            Vlan: sdk.Int64(301838),
        },
        NetworkID: "impedit",
        TrustedServerID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchDscpToCosMappings

Update the DSCP to CoS mappings

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
    res, err := s.Switch.UpdateNetworkSwitchDscpToCosMappings(ctx, operations.UpdateNetworkSwitchDscpToCosMappingsRequest{
        RequestBody: operations.UpdateNetworkSwitchDscpToCosMappingsRequestBody{
            Mappings: []UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings{
                operations.UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings{
                    Cos: 273652,
                    Dscp: 906331,
                    Title: sdk.String("Dr."),
                },
                operations.UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings{
                    Cos: 306525,
                    Dscp: 665370,
                    Title: sdk.String("Ms."),
                },
                operations.UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings{
                    Cos: 481295,
                    Dscp: 577512,
                    Title: sdk.String("Mr."),
                },
                operations.UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings{
                    Cos: 200609,
                    Dscp: 137335,
                    Title: sdk.String("Dr."),
                },
            },
        },
        NetworkID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchDscpToCosMappings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchLinkAggregation

Update a link aggregation group

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
    res, err := s.Switch.UpdateNetworkSwitchLinkAggregation(ctx, operations.UpdateNetworkSwitchLinkAggregationRequest{
        RequestBody: &operations.UpdateNetworkSwitchLinkAggregationRequestBody{
            SwitchPorts: []UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "cum",
                    Serial: "optio",
                },
                operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "corrupti",
                    Serial: "quam",
                },
                operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "sit",
                    Serial: "pariatur",
                },
            },
            SwitchProfilePorts: []UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                    PortID: "pariatur",
                    Profile: "architecto",
                },
                operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                    PortID: "ab",
                    Profile: "nisi",
                },
            },
        },
        LinkAggregationID: "quibusdam",
        NetworkID: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchLinkAggregation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchMtu

Update the MTU configuration

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
    res, err := s.Switch.UpdateNetworkSwitchMtu(ctx, operations.UpdateNetworkSwitchMtuRequest{
        RequestBody: &operations.UpdateNetworkSwitchMtuRequestBody{
            DefaultMtuSize: sdk.Int64(850203),
            Overrides: []UpdateNetworkSwitchMtuRequestBodyOverrides{
                operations.UpdateNetworkSwitchMtuRequestBodyOverrides{
                    MtuSize: 825390,
                    SwitchProfiles: []string{
                        "laboriosam",
                        "libero",
                        "cupiditate",
                        "quod",
                    },
                    Switches: []string{
                        "error",
                        "nobis",
                        "vitae",
                    },
                },
            },
        },
        NetworkID: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchMtu200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchPortSchedule

Update a switch port schedule

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
    res, err := s.Switch.UpdateNetworkSwitchPortSchedule(ctx, operations.UpdateNetworkSwitchPortScheduleRequest{
        RequestBody: &operations.UpdateNetworkSwitchPortScheduleRequestBody{
            Name: sdk.String("Frank Kuhlman"),
            PortSchedule: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule{
                Friday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday{
                    Active: sdk.Bool(false),
                    From: sdk.String("autem"),
                    To: sdk.String("officia"),
                },
                Monday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday{
                    Active: sdk.Bool(false),
                    From: sdk.String("voluptas"),
                    To: sdk.String("sed"),
                },
                Saturday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday{
                    Active: sdk.Bool(false),
                    From: sdk.String("provident"),
                    To: sdk.String("repellendus"),
                },
                Sunday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday{
                    Active: sdk.Bool(false),
                    From: sdk.String("neque"),
                    To: sdk.String("velit"),
                },
                Thursday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday{
                    Active: sdk.Bool(false),
                    From: sdk.String("at"),
                    To: sdk.String("id"),
                },
                Tuesday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("eaque"),
                    To: sdk.String("minus"),
                },
                Wednesday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("architecto"),
                    To: sdk.String("deserunt"),
                },
            },
        },
        NetworkID: "facere",
        PortScheduleID: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchPortSchedule200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchQosRule

Update a quality of service rule

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
    res, err := s.Switch.UpdateNetworkSwitchQosRule(ctx, operations.UpdateNetworkSwitchQosRuleRequest{
        RequestBody: &operations.UpdateNetworkSwitchQosRuleRequestBody{
            Dscp: sdk.Int64(690674),
            DstPort: sdk.Int64(213333),
            DstPortRange: sdk.String("tempore"),
            Protocol: operations.UpdateNetworkSwitchQosRuleRequestBodyProtocolEnumUDP.ToPointer(),
            SrcPort: sdk.Int64(380305),
            SrcPortRange: sdk.String("et"),
            Vlan: sdk.Int64(713078),
        },
        NetworkID: "molestiae",
        QosRuleID: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchQosRule200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchQosRulesOrder

Update the order in which the rules should be processed by the switch

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
    res, err := s.Switch.UpdateNetworkSwitchQosRulesOrder(ctx, operations.UpdateNetworkSwitchQosRulesOrderRequest{
        RequestBody: operations.UpdateNetworkSwitchQosRulesOrderRequestBody{
            RuleIds: []string{
                "porro",
                "explicabo",
                "aspernatur",
            },
        },
        NetworkID: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchQosRulesOrder200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchRoutingMulticast

Update multicast settings for a network

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
    res, err := s.Switch.UpdateNetworkSwitchRoutingMulticast(ctx, operations.UpdateNetworkSwitchRoutingMulticastRequest{
        RequestBody: &operations.UpdateNetworkSwitchRoutingMulticastRequestBody{
            DefaultSettings: &operations.UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings{
                FloodUnknownMulticastTrafficEnabled: sdk.Bool(false),
                IgmpSnoopingEnabled: sdk.Bool(false),
            },
            Overrides: []UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides{
                operations.UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides{
                    FloodUnknownMulticastTrafficEnabled: false,
                    IgmpSnoopingEnabled: false,
                    Stacks: []string{
                        "nulla",
                        "quis",
                        "alias",
                        "numquam",
                    },
                    SwitchProfiles: []string{
                        "impedit",
                        "tempora",
                    },
                    Switches: []string{
                        "quo",
                    },
                },
                operations.UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides{
                    FloodUnknownMulticastTrafficEnabled: false,
                    IgmpSnoopingEnabled: false,
                    Stacks: []string{
                        "eos",
                        "saepe",
                    },
                    SwitchProfiles: []string{
                        "voluptatibus",
                        "quae",
                    },
                    Switches: []string{
                        "eius",
                        "alias",
                        "sequi",
                        "sed",
                    },
                },
                operations.UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides{
                    FloodUnknownMulticastTrafficEnabled: false,
                    IgmpSnoopingEnabled: false,
                    Stacks: []string{
                        "error",
                        "maxime",
                        "excepturi",
                        "earum",
                    },
                    SwitchProfiles: []string{
                        "modi",
                        "omnis",
                        "dolorem",
                    },
                    Switches: []string{
                        "excepturi",
                    },
                },
                operations.UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides{
                    FloodUnknownMulticastTrafficEnabled: false,
                    IgmpSnoopingEnabled: false,
                    Stacks: []string{
                        "culpa",
                        "saepe",
                    },
                    SwitchProfiles: []string{
                        "reprehenderit",
                        "error",
                        "quas",
                        "velit",
                    },
                    Switches: []string{
                        "quam",
                        "tempora",
                        "suscipit",
                    },
                },
            },
        },
        NetworkID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchRoutingMulticast200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchRoutingMulticastRendezvousPoint

Update a multicast rendezvous point

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
    res, err := s.Switch.UpdateNetworkSwitchRoutingMulticastRendezvousPoint(ctx, operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest{
        RequestBody: operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody{
            InterfaceIP: "beatae",
            MulticastGroup: "quos",
        },
        NetworkID: "exercitationem",
        RendezvousPointID: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchRoutingOspf

Update layer 3 OSPF routing configuration

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
    res, err := s.Switch.UpdateNetworkSwitchRoutingOspf(ctx, operations.UpdateNetworkSwitchRoutingOspfRequest{
        RequestBody: &operations.UpdateNetworkSwitchRoutingOspfRequestBody{
            Areas: []UpdateNetworkSwitchRoutingOspfRequestBodyAreas{
                operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreas{
                    AreaID: "hic",
                    AreaName: "iusto",
                    AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnumStub,
                },
                operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreas{
                    AreaID: "quia",
                    AreaName: "non",
                    AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnumNormal,
                },
                operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreas{
                    AreaID: "quaerat",
                    AreaName: "hic",
                    AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnumNssa,
                },
            },
            DeadTimerInSeconds: sdk.Int64(190227),
            Enabled: sdk.Bool(false),
            HelloTimerInSeconds: sdk.Int64(328800),
            Md5AuthenticationEnabled: sdk.Bool(false),
            Md5AuthenticationKey: &operations.UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey{
                ID: sdk.Int64(528655),
                Passphrase: sdk.String("quae"),
            },
            V3: &operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3{
                Areas: []UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas{
                    operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas{
                        AreaID: "nihil",
                        AreaName: "optio",
                        AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnumNssa,
                    },
                    operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas{
                        AreaID: "nobis",
                        AreaName: "consequatur",
                        AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnumStub,
                    },
                    operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas{
                        AreaID: "culpa",
                        AreaName: "a",
                        AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnumNormal,
                    },
                    operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas{
                        AreaID: "voluptates",
                        AreaName: "vitae",
                        AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnumNssa,
                    },
                },
                DeadTimerInSeconds: sdk.Int64(144768),
                Enabled: sdk.Bool(false),
                HelloTimerInSeconds: sdk.Int64(185594),
            },
        },
        NetworkID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchRoutingOspf200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchSettings

Update switch network settings

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
    res, err := s.Switch.UpdateNetworkSwitchSettings(ctx, operations.UpdateNetworkSwitchSettingsRequest{
        RequestBody: &operations.UpdateNetworkSwitchSettingsRequestBody{
            PowerExceptions: []UpdateNetworkSwitchSettingsRequestBodyPowerExceptions{
                operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptions{
                    PowerType: operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnumRedundant,
                    Serial: "recusandae",
                },
            },
            UseCombinedPower: sdk.Bool(false),
            Vlan: sdk.Int64(175454),
        },
        NetworkID: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchStackRoutingInterface

Update a layer 3 interface for a switch stack

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
    res, err := s.Switch.UpdateNetworkSwitchStackRoutingInterface(ctx, operations.UpdateNetworkSwitchStackRoutingInterfaceRequest{
        RequestBody: &operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBody{
            DefaultGateway: sdk.String("consectetur"),
            InterfaceIP: sdk.String("doloribus"),
            Ipv6: &operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6{
                Address: sdk.String("20035 Shanie Park"),
                AssignmentMode: sdk.String("nam"),
                Gateway: sdk.String("nisi"),
                Prefix: sdk.String("atque"),
            },
            MulticastRouting: operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumIgmpSnoopingQuerier.ToPointer(),
            Name: sdk.String("Miss Valerie Anderson"),
            OspfSettings: &operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings{
                Area: sdk.String("expedita"),
                Cost: sdk.Int64(662928),
                IsPassiveEnabled: sdk.Bool(false),
            },
            Subnet: sdk.String("dolorem"),
            VlanID: sdk.Int64(261109),
        },
        InterfaceID: "impedit",
        NetworkID: "occaecati",
        SwitchStackID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchStackRoutingInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchStackRoutingInterfaceDhcp

Update a layer 3 interface DHCP configuration for a switch stack

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
    res, err := s.Switch.UpdateNetworkSwitchStackRoutingInterfaceDhcp(ctx, operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest{
        RequestBody: &operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody{
            BootFileName: sdk.String("expedita"),
            BootNextServer: sdk.String("debitis"),
            BootOptionsEnabled: sdk.Bool(false),
            DhcpLeaseTime: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumOneHour.ToPointer(),
            DhcpMode: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnumDhcpServer.ToPointer(),
            DhcpOptions: []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "quasi",
                    Type: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumText,
                    Value: "quas",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "mollitia",
                    Type: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumHex,
                    Value: "modi",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "molestias",
                    Type: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumIP,
                    Value: "excepturi",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "saepe",
                    Type: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumInteger,
                    Value: "rerum",
                },
            },
            DhcpRelayServerIps: []string{
                "error",
                "explicabo",
                "excepturi",
            },
            DNSCustomNameservers: []string{
                "modi",
                "maxime",
                "tempora",
                "est",
            },
            DNSNameserversOption: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnumGooglePublicDNS.ToPointer(),
            FixedIPAssignments: []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "voluptates",
                    Mac: "id",
                    Name: "Melanie Jacobson III",
                },
            },
            ReservedIPRanges: []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("tempore"),
                    End: "omnis",
                    Start: "doloremque",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("distinctio"),
                    End: "consequuntur",
                    Start: "a",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("eum"),
                    End: "quos",
                    Start: "unde",
                },
            },
        },
        InterfaceID: "possimus",
        NetworkID: "perferendis",
        SwitchStackID: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchStackRoutingStaticRoute

Update a layer 3 static route for a switch stack

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
    res, err := s.Switch.UpdateNetworkSwitchStackRoutingStaticRoute(ctx, operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest{
        RequestBody: &operations.UpdateNetworkSwitchStackRoutingStaticRouteRequestBody{
            AdvertiseViaOspfEnabled: sdk.Bool(false),
            Name: sdk.String("Marty Doyle Sr."),
            NextHopIP: sdk.String("quidem"),
            PreferOverOspfRoutesEnabled: sdk.Bool(false),
            Subnet: sdk.String("repellat"),
        },
        NetworkID: "magni",
        StaticRouteID: "illum",
        SwitchStackID: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchStormControl

Update the storm control configuration for a switch network

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
    res, err := s.Switch.UpdateNetworkSwitchStormControl(ctx, operations.UpdateNetworkSwitchStormControlRequest{
        RequestBody: &operations.UpdateNetworkSwitchStormControlRequestBody{
            BroadcastThreshold: sdk.Int64(140895),
            MulticastThreshold: sdk.Int64(60548),
            UnknownUnicastThreshold: sdk.Int64(874298),
        },
        NetworkID: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchStormControl200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchStp

Updates STP settings

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
    res, err := s.Switch.UpdateNetworkSwitchStp(ctx, operations.UpdateNetworkSwitchStpRequest{
        RequestBody: &operations.UpdateNetworkSwitchStpRequestBody{
            RstpEnabled: sdk.Bool(false),
            StpBridgePriority: []UpdateNetworkSwitchStpRequestBodyStpBridgePriority{
                operations.UpdateNetworkSwitchStpRequestBodyStpBridgePriority{
                    Stacks: []string{
                        "illum",
                        "totam",
                        "consequuntur",
                    },
                    StpPriority: 589137,
                    SwitchProfiles: []string{
                        "facilis",
                        "quod",
                        "ea",
                    },
                    Switches: []string{
                        "ex",
                        "adipisci",
                    },
                },
            },
        },
        NetworkID: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchStp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationConfigTemplateSwitchProfilePort

Update a switch profile port

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
    res, err := s.Switch.UpdateOrganizationConfigTemplateSwitchProfilePort(ctx, operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest{
        RequestBody: &operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody{
            AccessPolicyNumber: sdk.Int64(505850),
            AccessPolicyType: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnumStickyMacAllowList.ToPointer(),
            AllowedVlans: sdk.String("at"),
            DaiTrusted: sdk.Bool(false),
            Enabled: sdk.Bool(false),
            FlexibleStackingEnabled: sdk.Bool(false),
            IsolationEnabled: sdk.Bool(false),
            LinkNegotiation: sdk.String("porro"),
            MacAllowList: []string{
                "eligendi",
                "amet",
            },
            Name: sdk.String("Claudia Beatty DDS"),
            PoeEnabled: sdk.Bool(false),
            PortScheduleID: sdk.String("est"),
            Profile: &operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile{
                Enabled: sdk.Bool(false),
                ID: sdk.String("df0ba581-075a-4072-823d-eea8fe4bc45c"),
                Iname: sdk.String("rem"),
            },
            RstpEnabled: sdk.Bool(false),
            StickyMacAllowList: []string{
                "labore",
                "laudantium",
                "architecto",
                "sequi",
            },
            StickyMacAllowListLimit: sdk.Int64(122900),
            StormControlEnabled: sdk.Bool(false),
            StpGuard: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnumBpduGuard.ToPointer(),
            Tags: []string{
                "officia",
                "aut",
            },
            Type: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnumAccess.ToPointer(),
            Udld: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnumEnforce.ToPointer(),
            Vlan: sdk.Int64(898318),
            VoiceVlan: sdk.Int64(524768),
        },
        ConfigTemplateID: "atque",
        OrganizationID: "suscipit",
        PortID: "velit",
        ProfileID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject != nil {
        // handle response
    }
}
```
