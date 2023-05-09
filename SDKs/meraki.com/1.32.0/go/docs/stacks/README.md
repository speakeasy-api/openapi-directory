# Stacks

### Available Operations

* [AddNetworkSwitchStack](#addnetworkswitchstack) - Add a switch to a stack
* [CreateNetworkSwitchStack](#createnetworkswitchstack) - Create a stack
* [CreateNetworkSwitchStackRoutingInterface](#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [CreateNetworkSwitchStackRoutingStaticRoute](#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [DeleteNetworkSwitchStack](#deletenetworkswitchstack) - Delete a stack
* [DeleteNetworkSwitchStackRoutingInterface](#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [DeleteNetworkSwitchStackRoutingStaticRoute](#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [GetNetworkSwitchStack](#getnetworkswitchstack) - Show a switch stack
* [GetNetworkSwitchStackRoutingInterface](#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [GetNetworkSwitchStackRoutingInterfaceDhcp](#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [GetNetworkSwitchStackRoutingInterfaces](#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [GetNetworkSwitchStackRoutingStaticRoute](#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [GetNetworkSwitchStackRoutingStaticRoutes](#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [GetNetworkSwitchStacks](#getnetworkswitchstacks) - List the switch stacks in a network
* [RemoveNetworkSwitchStack](#removenetworkswitchstack) - Remove a switch from a stack
* [UpdateNetworkSwitchStackRoutingInterface](#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [UpdateNetworkSwitchStackRoutingInterfaceDhcp](#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack
* [UpdateNetworkSwitchStackRoutingStaticRoute](#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack

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
    res, err := s.Stacks.AddNetworkSwitchStack(ctx, operations.AddNetworkSwitchStackRequest{
        RequestBody: operations.AddNetworkSwitchStackRequestBody{
            Serial: "labore",
        },
        NetworkID: "laboriosam",
        SwitchStackID: "illo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddNetworkSwitchStack200ApplicationJSONObject != nil {
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
    res, err := s.Stacks.CreateNetworkSwitchStack(ctx, operations.CreateNetworkSwitchStackRequest{
        RequestBody: operations.CreateNetworkSwitchStackRequestBody{
            Name: "Brandon Wehner",
            Serials: []string{
                "praesentium",
                "ratione",
            },
        },
        NetworkID: "officiis",
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
    res, err := s.Stacks.CreateNetworkSwitchStackRoutingInterface(ctx, operations.CreateNetworkSwitchStackRoutingInterfaceRequest{
        RequestBody: operations.CreateNetworkSwitchStackRoutingInterfaceRequestBody{
            DefaultGateway: sdk.String("dolorum"),
            InterfaceIP: sdk.String("in"),
            Ipv6: &operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6{
                Address: sdk.String("670 Pollich Mountains"),
                AssignmentMode: sdk.String("totam"),
                Gateway: sdk.String("soluta"),
                Prefix: sdk.String("nihil"),
            },
            MulticastRouting: operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumEnabled.ToPointer(),
            Name: "Luke Vandervort",
            OspfSettings: &operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings{
                Area: sdk.String("quas"),
                Cost: sdk.Int64(902155),
                IsPassiveEnabled: sdk.Bool(false),
            },
            Subnet: sdk.String("est"),
            VlanID: 637234,
        },
        NetworkID: "molestiae",
        SwitchStackID: "repudiandae",
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
    res, err := s.Stacks.CreateNetworkSwitchStackRoutingStaticRoute(ctx, operations.CreateNetworkSwitchStackRoutingStaticRouteRequest{
        RequestBody: operations.CreateNetworkSwitchStackRoutingStaticRouteRequestBody{
            AdvertiseViaOspfEnabled: sdk.Bool(false),
            Name: sdk.String("Alex Romaguera"),
            NextHopIP: "quam",
            PreferOverOspfRoutesEnabled: sdk.Bool(false),
            Subnet: "aperiam",
        },
        NetworkID: "fugit",
        SwitchStackID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchStackRoutingStaticRoute201ApplicationJSONObject != nil {
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
    res, err := s.Stacks.DeleteNetworkSwitchStack(ctx, operations.DeleteNetworkSwitchStackRequest{
        NetworkID: "minus",
        SwitchStackID: "ea",
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
    res, err := s.Stacks.DeleteNetworkSwitchStackRoutingInterface(ctx, operations.DeleteNetworkSwitchStackRoutingInterfaceRequest{
        InterfaceID: "labore",
        NetworkID: "itaque",
        SwitchStackID: "perferendis",
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
    res, err := s.Stacks.DeleteNetworkSwitchStackRoutingStaticRoute(ctx, operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest{
        NetworkID: "quia",
        StaticRouteID: "deleniti",
        SwitchStackID: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
    res, err := s.Stacks.GetNetworkSwitchStack(ctx, operations.GetNetworkSwitchStackRequest{
        NetworkID: "sequi",
        SwitchStackID: "explicabo",
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
    res, err := s.Stacks.GetNetworkSwitchStackRoutingInterface(ctx, operations.GetNetworkSwitchStackRoutingInterfaceRequest{
        InterfaceID: "asperiores",
        NetworkID: "impedit",
        SwitchStackID: "debitis",
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
    res, err := s.Stacks.GetNetworkSwitchStackRoutingInterfaceDhcp(ctx, operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest{
        InterfaceID: "debitis",
        NetworkID: "rerum",
        SwitchStackID: "soluta",
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
    res, err := s.Stacks.GetNetworkSwitchStackRoutingInterfaces(ctx, operations.GetNetworkSwitchStackRoutingInterfacesRequest{
        NetworkID: "omnis",
        SwitchStackID: "tenetur",
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
    res, err := s.Stacks.GetNetworkSwitchStackRoutingStaticRoute(ctx, operations.GetNetworkSwitchStackRoutingStaticRouteRequest{
        NetworkID: "non",
        StaticRouteID: "unde",
        SwitchStackID: "dolor",
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
    res, err := s.Stacks.GetNetworkSwitchStackRoutingStaticRoutes(ctx, operations.GetNetworkSwitchStackRoutingStaticRoutesRequest{
        NetworkID: "ut",
        SwitchStackID: "minima",
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
    res, err := s.Stacks.GetNetworkSwitchStacks(ctx, operations.GetNetworkSwitchStacksRequest{
        NetworkID: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStacks200ApplicationJSONObjects != nil {
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
    res, err := s.Stacks.RemoveNetworkSwitchStack(ctx, operations.RemoveNetworkSwitchStackRequest{
        RequestBody: operations.RemoveNetworkSwitchStackRequestBody{
            Serial: "eos",
        },
        NetworkID: "nobis",
        SwitchStackID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveNetworkSwitchStack200ApplicationJSONObject != nil {
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
    res, err := s.Stacks.UpdateNetworkSwitchStackRoutingInterface(ctx, operations.UpdateNetworkSwitchStackRoutingInterfaceRequest{
        RequestBody: &operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBody{
            DefaultGateway: sdk.String("temporibus"),
            InterfaceIP: sdk.String("inventore"),
            Ipv6: &operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6{
                Address: sdk.String("6881 VonRueden Loaf"),
                AssignmentMode: sdk.String("amet"),
                Gateway: sdk.String("cumque"),
                Prefix: sdk.String("porro"),
            },
            MulticastRouting: operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumEnabled.ToPointer(),
            Name: sdk.String("Rita Ward"),
            OspfSettings: &operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings{
                Area: sdk.String("praesentium"),
                Cost: sdk.Int64(936132),
                IsPassiveEnabled: sdk.Bool(false),
            },
            Subnet: sdk.String("fuga"),
            VlanID: sdk.Int64(548736),
        },
        InterfaceID: "repudiandae",
        NetworkID: "eos",
        SwitchStackID: "suscipit",
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
    res, err := s.Stacks.UpdateNetworkSwitchStackRoutingInterfaceDhcp(ctx, operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest{
        RequestBody: &operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody{
            BootFileName: sdk.String("illo"),
            BootNextServer: sdk.String("consequuntur"),
            BootOptionsEnabled: sdk.Bool(false),
            DhcpLeaseTime: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumTwelveHours.ToPointer(),
            DhcpMode: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnumDhcpRelay.ToPointer(),
            DhcpOptions: []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "cupiditate",
                    Type: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumInteger,
                    Value: "iusto",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "architecto",
                    Type: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumIP,
                    Value: "vero",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "atque",
                    Type: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumIP,
                    Value: "quisquam",
                },
            },
            DhcpRelayServerIps: []string{
                "aliquam",
                "nisi",
                "officia",
                "natus",
            },
            DNSCustomNameservers: []string{
                "iusto",
                "quia",
                "maiores",
            },
            DNSNameserversOption: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnumGooglePublicDNS.ToPointer(),
            FixedIPAssignments: []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "optio",
                    Mac: "facere",
                    Name: "Daisy Gerhold",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "ea",
                    Mac: "fuga",
                    Name: "Tabitha Runolfsdottir",
                },
            },
            ReservedIPRanges: []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("dicta"),
                    End: "perspiciatis",
                    Start: "impedit",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("eos"),
                    End: "esse",
                    Start: "deserunt",
                },
            },
        },
        InterfaceID: "minima",
        NetworkID: "aliquid",
        SwitchStackID: "voluptas",
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
    res, err := s.Stacks.UpdateNetworkSwitchStackRoutingStaticRoute(ctx, operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest{
        RequestBody: &operations.UpdateNetworkSwitchStackRoutingStaticRouteRequestBody{
            AdvertiseViaOspfEnabled: sdk.Bool(false),
            Name: sdk.String("Janice O'Keefe"),
            NextHopIP: sdk.String("dolores"),
            PreferOverOspfRoutesEnabled: sdk.Bool(false),
            Subnet: sdk.String("illo"),
        },
        NetworkID: "esse",
        StaticRouteID: "voluptates",
        SwitchStackID: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject != nil {
        // handle response
    }
}
```
