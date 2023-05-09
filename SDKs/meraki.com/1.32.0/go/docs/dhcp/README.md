# Dhcp

### Available Operations

* [GetDeviceApplianceDhcpSubnets](#getdeviceappliancedhcpsubnets) - Return the DHCP subnet information for an appliance
* [GetDeviceSwitchRoutingInterfaceDhcp](#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [GetNetworkCellularGatewayDhcp](#getnetworkcellulargatewaydhcp) - List common DHCP settings of MGs
* [GetNetworkSwitchDhcpV4ServersSeen](#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
* [GetNetworkSwitchStackRoutingInterfaceDhcp](#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [UpdateDeviceSwitchRoutingInterfaceDhcp](#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [UpdateNetworkCellularGatewayDhcp](#updatenetworkcellulargatewaydhcp) - Update common DHCP settings of MGs
* [UpdateNetworkSwitchStackRoutingInterfaceDhcp](#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack

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
    res, err := s.Dhcp.GetDeviceApplianceDhcpSubnets(ctx, operations.GetDeviceApplianceDhcpSubnetsRequest{
        Serial: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceApplianceDhcpSubnets200ApplicationJSONObjects != nil {
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
    res, err := s.Dhcp.GetDeviceSwitchRoutingInterfaceDhcp(ctx, operations.GetDeviceSwitchRoutingInterfaceDhcpRequest{
        InterfaceID: "dicta",
        Serial: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkCellularGatewayDhcp

List common DHCP settings of MGs

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
    res, err := s.Dhcp.GetNetworkCellularGatewayDhcp(ctx, operations.GetNetworkCellularGatewayDhcpRequest{
        NetworkID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCellularGatewayDhcp200ApplicationJSONObject != nil {
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
    res, err := s.Dhcp.GetNetworkSwitchDhcpV4ServersSeen(ctx, operations.GetNetworkSwitchDhcpV4ServersSeenRequest{
        EndingBefore: sdk.String("ut"),
        NetworkID: "repellat",
        PerPage: sdk.Int64(269063),
        StartingAfter: sdk.String("dolores"),
        T0: sdk.String("ratione"),
        Timespan: sdk.Float32(8671.61),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONObjects != nil {
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
    res, err := s.Dhcp.GetNetworkSwitchStackRoutingInterfaceDhcp(ctx, operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest{
        InterfaceID: "ipsam",
        NetworkID: "tempora",
        SwitchStackID: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject != nil {
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
    res, err := s.Dhcp.UpdateDeviceSwitchRoutingInterfaceDhcp(ctx, operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest{
        RequestBody: &operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody{
            BootFileName: sdk.String("sint"),
            BootNextServer: sdk.String("ratione"),
            BootOptionsEnabled: sdk.Bool(false),
            DhcpLeaseTime: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumOneWeek.ToPointer(),
            DhcpMode: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnumDhcpServer.ToPointer(),
            DhcpOptions: []UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions{
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "in",
                    Type: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumInteger,
                    Value: "dolorum",
                },
            },
            DhcpRelayServerIps: []string{
                "voluptas",
                "impedit",
                "excepturi",
                "nam",
            },
            DNSCustomNameservers: []string{
                "officiis",
                "iste",
            },
            DNSNameserversOption: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnumCustom.ToPointer(),
            FixedIPAssignments: []UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "suscipit",
                    Mac: "id",
                    Name: "Jacquelyn Hansen",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "quasi",
                    Mac: "doloremque",
                    Name: "Patti Kshlerin",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "quaerat",
                    Mac: "impedit",
                    Name: "Preston Abernathy",
                },
            },
            ReservedIPRanges: []UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("voluptatum"),
                    End: "beatae",
                    Start: "explicabo",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("est"),
                    End: "laboriosam",
                    Start: "ea",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("beatae"),
                    End: "eius",
                    Start: "atque",
                },
            },
        },
        InterfaceID: "unde",
        Serial: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkCellularGatewayDhcp

Update common DHCP settings of MGs

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
    res, err := s.Dhcp.UpdateNetworkCellularGatewayDhcp(ctx, operations.UpdateNetworkCellularGatewayDhcpRequest{
        RequestBody: &operations.UpdateNetworkCellularGatewayDhcpRequestBody{
            DhcpLeaseTime: sdk.String("magnam"),
            DNSCustomNameservers: []string{
                "voluptatum",
                "recusandae",
                "sint",
            },
            DNSNameservers: sdk.String("doloremque"),
        },
        NetworkID: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkCellularGatewayDhcp200ApplicationJSONObject != nil {
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
    res, err := s.Dhcp.UpdateNetworkSwitchStackRoutingInterfaceDhcp(ctx, operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest{
        RequestBody: &operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody{
            BootFileName: sdk.String("veniam"),
            BootNextServer: sdk.String("consequatur"),
            BootOptionsEnabled: sdk.Bool(false),
            DhcpLeaseTime: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumOneWeek.ToPointer(),
            DhcpMode: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnumDhcpRelay.ToPointer(),
            DhcpOptions: []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "quisquam",
                    Type: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumHex,
                    Value: "exercitationem",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "dolorem",
                    Type: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumIP,
                    Value: "sed",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "exercitationem",
                    Type: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumHex,
                    Value: "nesciunt",
                },
            },
            DhcpRelayServerIps: []string{
                "nesciunt",
                "asperiores",
            },
            DNSCustomNameservers: []string{
                "doloremque",
                "similique",
                "modi",
            },
            DNSNameserversOption: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnumOpenDNS.ToPointer(),
            FixedIPAssignments: []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "autem",
                    Mac: "earum",
                    Name: "Ricky Koss",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "praesentium",
                    Mac: "fugiat",
                    Name: "Allison Borer",
                },
            },
            ReservedIPRanges: []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("eius"),
                    End: "veritatis",
                    Start: "totam",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("ab"),
                    End: "deleniti",
                    Start: "maiores",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("optio"),
                    End: "aliquid",
                    Start: "in",
                },
            },
        },
        InterfaceID: "cupiditate",
        NetworkID: "facilis",
        SwitchStackID: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject != nil {
        // handle response
    }
}
```
