# Interfaces

### Available Operations

* [CreateDeviceSwitchRoutingInterface](#createdeviceswitchroutinginterface) - Create a layer 3 interface for a switch
* [CreateNetworkSwitchStackRoutingInterface](#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [DeleteDeviceSwitchRoutingInterface](#deletedeviceswitchroutinginterface) - Delete a layer 3 interface from the switch
* [DeleteNetworkSwitchStackRoutingInterface](#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [GetDeviceSwitchRoutingInterface](#getdeviceswitchroutinginterface) - Return a layer 3 interface for a switch
* [GetDeviceSwitchRoutingInterfaceDhcp](#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [GetDeviceSwitchRoutingInterfaces](#getdeviceswitchroutinginterfaces) - List layer 3 interfaces for a switch
* [GetNetworkSwitchStackRoutingInterface](#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [GetNetworkSwitchStackRoutingInterfaceDhcp](#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [GetNetworkSwitchStackRoutingInterfaces](#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [UpdateDeviceSwitchRoutingInterface](#updatedeviceswitchroutinginterface) - Update a layer 3 interface for a switch
* [UpdateDeviceSwitchRoutingInterfaceDhcp](#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [UpdateNetworkSwitchStackRoutingInterface](#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [UpdateNetworkSwitchStackRoutingInterfaceDhcp](#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack

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
    res, err := s.Interfaces.CreateDeviceSwitchRoutingInterface(ctx, operations.CreateDeviceSwitchRoutingInterfaceRequest{
        RequestBody: &operations.CreateDeviceSwitchRoutingInterfaceRequestBody{
            DefaultGateway: sdk.String("ea"),
            InterfaceIP: sdk.String("doloribus"),
            Ipv6: &operations.CreateDeviceSwitchRoutingInterfaceRequestBodyIpv6{
                Address: sdk.String("8754 Karine Avenue"),
                AssignmentMode: sdk.String("reprehenderit"),
                Gateway: sdk.String("adipisci"),
                Prefix: sdk.String("voluptatem"),
            },
            MulticastRouting: operations.CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnumEnabled.ToPointer(),
            Name: sdk.String("Boyd Lueilwitz"),
            OspfSettings: &operations.CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings{
                Area: sdk.String("unde"),
                Cost: sdk.Int64(867531),
                IsPassiveEnabled: sdk.Bool(false),
            },
            OspfV3: &operations.CreateDeviceSwitchRoutingInterfaceRequestBodyOspfV3{
                Area: sdk.String("omnis"),
                Cost: sdk.Int64(778183),
                IsPassiveEnabled: sdk.Bool(false),
            },
            Subnet: sdk.String("mollitia"),
            VlanID: sdk.Int64(392609),
        },
        Serial: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeviceSwitchRoutingInterface201ApplicationJSONObject != nil {
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
    res, err := s.Interfaces.CreateNetworkSwitchStackRoutingInterface(ctx, operations.CreateNetworkSwitchStackRoutingInterfaceRequest{
        RequestBody: operations.CreateNetworkSwitchStackRoutingInterfaceRequestBody{
            DefaultGateway: sdk.String("reprehenderit"),
            InterfaceIP: sdk.String("ipsam"),
            Ipv6: &operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6{
                Address: sdk.String("3397 Simone River"),
                AssignmentMode: sdk.String("earum"),
                Gateway: sdk.String("ex"),
                Prefix: sdk.String("iusto"),
            },
            MulticastRouting: operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumIgmpSnoopingQuerier.ToPointer(),
            Name: "Dr. Ana Toy III",
            OspfSettings: &operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings{
                Area: sdk.String("fuga"),
                Cost: sdk.Int64(215019),
                IsPassiveEnabled: sdk.Bool(false),
            },
            Subnet: sdk.String("sit"),
            VlanID: 445111,
        },
        NetworkID: "aut",
        SwitchStackID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchStackRoutingInterface201ApplicationJSONObject != nil {
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
    res, err := s.Interfaces.DeleteDeviceSwitchRoutingInterface(ctx, operations.DeleteDeviceSwitchRoutingInterfaceRequest{
        InterfaceID: "vel",
        Serial: "earum",
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
    res, err := s.Interfaces.DeleteNetworkSwitchStackRoutingInterface(ctx, operations.DeleteNetworkSwitchStackRoutingInterfaceRequest{
        InterfaceID: "explicabo",
        NetworkID: "natus",
        SwitchStackID: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
    res, err := s.Interfaces.GetDeviceSwitchRoutingInterface(ctx, operations.GetDeviceSwitchRoutingInterfaceRequest{
        InterfaceID: "hic",
        Serial: "nemo",
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
    res, err := s.Interfaces.GetDeviceSwitchRoutingInterfaceDhcp(ctx, operations.GetDeviceSwitchRoutingInterfaceDhcpRequest{
        InterfaceID: "totam",
        Serial: "architecto",
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
    res, err := s.Interfaces.GetDeviceSwitchRoutingInterfaces(ctx, operations.GetDeviceSwitchRoutingInterfacesRequest{
        Serial: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchRoutingInterfaces200ApplicationJSONObjects != nil {
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
    res, err := s.Interfaces.GetNetworkSwitchStackRoutingInterface(ctx, operations.GetNetworkSwitchStackRoutingInterfaceRequest{
        InterfaceID: "officia",
        NetworkID: "soluta",
        SwitchStackID: "mollitia",
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
    res, err := s.Interfaces.GetNetworkSwitchStackRoutingInterfaceDhcp(ctx, operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest{
        InterfaceID: "dolorum",
        NetworkID: "deserunt",
        SwitchStackID: "odio",
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
    res, err := s.Interfaces.GetNetworkSwitchStackRoutingInterfaces(ctx, operations.GetNetworkSwitchStackRoutingInterfacesRequest{
        NetworkID: "pariatur",
        SwitchStackID: "laudantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStackRoutingInterfaces200ApplicationJSONObjects != nil {
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
    res, err := s.Interfaces.UpdateDeviceSwitchRoutingInterface(ctx, operations.UpdateDeviceSwitchRoutingInterfaceRequest{
        RequestBody: &operations.UpdateDeviceSwitchRoutingInterfaceRequestBody{
            DefaultGateway: sdk.String("consequatur"),
            InterfaceIP: sdk.String("et"),
            Ipv6: &operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyIpv6{
                Address: sdk.String("55043 Wintheiser Harbor"),
                AssignmentMode: sdk.String("tenetur"),
                Gateway: sdk.String("laboriosam"),
                Prefix: sdk.String("recusandae"),
            },
            MulticastRouting: operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnumEnabled.ToPointer(),
            Name: sdk.String("Mrs. Sabrina Larkin V"),
            OspfSettings: &operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings{
                Area: sdk.String("voluptatum"),
                Cost: sdk.Int64(127271),
                IsPassiveEnabled: sdk.Bool(false),
            },
            OspfV3: &operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfV3{
                Area: sdk.String("aliquid"),
                Cost: sdk.Int64(595322),
                IsPassiveEnabled: sdk.Bool(false),
            },
            Subnet: sdk.String("tempore"),
            VlanID: sdk.Int64(393835),
        },
        InterfaceID: "similique",
        Serial: "esse",
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
    res, err := s.Interfaces.UpdateDeviceSwitchRoutingInterfaceDhcp(ctx, operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest{
        RequestBody: &operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody{
            BootFileName: sdk.String("alias"),
            BootNextServer: sdk.String("libero"),
            BootOptionsEnabled: sdk.Bool(false),
            DhcpLeaseTime: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumOneDay.ToPointer(),
            DhcpMode: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnumDhcpServer.ToPointer(),
            DhcpOptions: []UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions{
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "quos",
                    Type: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumHex,
                    Value: "earum",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "excepturi",
                    Type: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumInteger,
                    Value: "hic",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "repellat",
                    Type: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumText,
                    Value: "quidem",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "quibusdam",
                    Type: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumHex,
                    Value: "officiis",
                },
            },
            DhcpRelayServerIps: []string{
                "saepe",
            },
            DNSCustomNameservers: []string{
                "illo",
            },
            DNSNameserversOption: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnumOpenDNS.ToPointer(),
            FixedIPAssignments: []UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "quisquam",
                    Mac: "commodi",
                    Name: "Anthony Dickinson",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "dicta",
                    Mac: "quibusdam",
                    Name: "Maxine Koss",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "vitae",
                    Mac: "accusamus",
                    Name: "Ronnie Yost",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "alias",
                    Mac: "tempore",
                    Name: "Merle Becker",
                },
            },
            ReservedIPRanges: []UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("sit"),
                    End: "minus",
                    Start: "sapiente",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("odit"),
                    End: "eaque",
                    Start: "sed",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("exercitationem"),
                    End: "aliquam",
                    Start: "id",
                },
            },
        },
        InterfaceID: "omnis",
        Serial: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject != nil {
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
    res, err := s.Interfaces.UpdateNetworkSwitchStackRoutingInterface(ctx, operations.UpdateNetworkSwitchStackRoutingInterfaceRequest{
        RequestBody: &operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBody{
            DefaultGateway: sdk.String("unde"),
            InterfaceIP: sdk.String("consequatur"),
            Ipv6: &operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6{
                Address: sdk.String("28723 Regan Inlet"),
                AssignmentMode: sdk.String("cum"),
                Gateway: sdk.String("minus"),
                Prefix: sdk.String("cupiditate"),
            },
            MulticastRouting: operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumDisabled.ToPointer(),
            Name: sdk.String("Stella Wunsch"),
            OspfSettings: &operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings{
                Area: sdk.String("accusamus"),
                Cost: sdk.Int64(260179),
                IsPassiveEnabled: sdk.Bool(false),
            },
            Subnet: sdk.String("dignissimos"),
            VlanID: sdk.Int64(602135),
        },
        InterfaceID: "aspernatur",
        NetworkID: "facilis",
        SwitchStackID: "cupiditate",
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
    res, err := s.Interfaces.UpdateNetworkSwitchStackRoutingInterfaceDhcp(ctx, operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest{
        RequestBody: &operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody{
            BootFileName: sdk.String("nihil"),
            BootNextServer: sdk.String("perspiciatis"),
            BootOptionsEnabled: sdk.Bool(false),
            DhcpLeaseTime: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumTwelveHours.ToPointer(),
            DhcpMode: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnumDhcpDisabled.ToPointer(),
            DhcpOptions: []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "sequi",
                    Type: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumText,
                    Value: "laboriosam",
                },
            },
            DhcpRelayServerIps: []string{
                "rem",
                "impedit",
                "perspiciatis",
            },
            DNSCustomNameservers: []string{
                "suscipit",
            },
            DNSNameserversOption: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnumGooglePublicDNS.ToPointer(),
            FixedIPAssignments: []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "quidem",
                    Mac: "at",
                    Name: "Elmer Boyle PhD",
                },
            },
            ReservedIPRanges: []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("molestias"),
                    End: "quod",
                    Start: "quo",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("repellat"),
                    End: "voluptatum",
                    Start: "excepturi",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("illum"),
                    End: "amet",
                    Start: "totam",
                },
            },
        },
        InterfaceID: "ex",
        NetworkID: "quae",
        SwitchStackID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject != nil {
        // handle response
    }
}
```
