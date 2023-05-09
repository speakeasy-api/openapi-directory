# Routing

### Available Operations

* [CreateDeviceSwitchRoutingInterface](#createdeviceswitchroutinginterface) - Create a layer 3 interface for a switch
* [CreateDeviceSwitchRoutingStaticRoute](#createdeviceswitchroutingstaticroute) - Create a layer 3 static route for a switch
* [CreateNetworkSwitchRoutingMulticastRendezvousPoint](#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [CreateNetworkSwitchStackRoutingInterface](#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [CreateNetworkSwitchStackRoutingStaticRoute](#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [DeleteDeviceSwitchRoutingInterface](#deletedeviceswitchroutinginterface) - Delete a layer 3 interface from the switch
* [DeleteDeviceSwitchRoutingStaticRoute](#deletedeviceswitchroutingstaticroute) - Delete a layer 3 static route for a switch
* [DeleteNetworkSwitchRoutingMulticastRendezvousPoint](#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [DeleteNetworkSwitchStackRoutingInterface](#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [DeleteNetworkSwitchStackRoutingStaticRoute](#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [GetDeviceSwitchRoutingInterface](#getdeviceswitchroutinginterface) - Return a layer 3 interface for a switch
* [GetDeviceSwitchRoutingInterfaceDhcp](#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [GetDeviceSwitchRoutingInterfaces](#getdeviceswitchroutinginterfaces) - List layer 3 interfaces for a switch
* [GetDeviceSwitchRoutingStaticRoute](#getdeviceswitchroutingstaticroute) - Return a layer 3 static route for a switch
* [GetDeviceSwitchRoutingStaticRoutes](#getdeviceswitchroutingstaticroutes) - List layer 3 static routes for a switch
* [GetNetworkSwitchRoutingMulticast](#getnetworkswitchroutingmulticast) - Return multicast settings for a network
* [GetNetworkSwitchRoutingMulticastRendezvousPoint](#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [GetNetworkSwitchRoutingMulticastRendezvousPoints](#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [GetNetworkSwitchRoutingOspf](#getnetworkswitchroutingospf) - Return layer 3 OSPF routing configuration
* [GetNetworkSwitchStackRoutingInterface](#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [GetNetworkSwitchStackRoutingInterfaceDhcp](#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [GetNetworkSwitchStackRoutingInterfaces](#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [GetNetworkSwitchStackRoutingStaticRoute](#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [GetNetworkSwitchStackRoutingStaticRoutes](#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [UpdateDeviceSwitchRoutingInterface](#updatedeviceswitchroutinginterface) - Update a layer 3 interface for a switch
* [UpdateDeviceSwitchRoutingInterfaceDhcp](#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [UpdateDeviceSwitchRoutingStaticRoute](#updatedeviceswitchroutingstaticroute) - Update a layer 3 static route for a switch
* [UpdateNetworkSwitchRoutingMulticast](#updatenetworkswitchroutingmulticast) - Update multicast settings for a network
* [UpdateNetworkSwitchRoutingMulticastRendezvousPoint](#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point
* [UpdateNetworkSwitchRoutingOspf](#updatenetworkswitchroutingospf) - Update layer 3 OSPF routing configuration
* [UpdateNetworkSwitchStackRoutingInterface](#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [UpdateNetworkSwitchStackRoutingInterfaceDhcp](#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack
* [UpdateNetworkSwitchStackRoutingStaticRoute](#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack

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
    res, err := s.Routing.CreateDeviceSwitchRoutingInterface(ctx, operations.CreateDeviceSwitchRoutingInterfaceRequest{
        RequestBody: &operations.CreateDeviceSwitchRoutingInterfaceRequestBody{
            DefaultGateway: sdk.String("soluta"),
            InterfaceIP: sdk.String("numquam"),
            Ipv6: &operations.CreateDeviceSwitchRoutingInterfaceRequestBodyIpv6{
                Address: sdk.String("601 Tomas Throughway"),
                AssignmentMode: sdk.String("eligendi"),
                Gateway: sdk.String("facere"),
                Prefix: sdk.String("sed"),
            },
            MulticastRouting: operations.CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnumIgmpSnoopingQuerier.ToPointer(),
            Name: sdk.String("Sophia Walter"),
            OspfSettings: &operations.CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings{
                Area: sdk.String("illo"),
                Cost: sdk.Int64(251343),
                IsPassiveEnabled: sdk.Bool(false),
            },
            OspfV3: &operations.CreateDeviceSwitchRoutingInterfaceRequestBodyOspfV3{
                Area: sdk.String("nam"),
                Cost: sdk.Int64(171866),
                IsPassiveEnabled: sdk.Bool(false),
            },
            Subnet: sdk.String("eaque"),
            VlanID: sdk.Int64(689614),
        },
        Serial: "nulla",
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
    res, err := s.Routing.CreateDeviceSwitchRoutingStaticRoute(ctx, operations.CreateDeviceSwitchRoutingStaticRouteRequest{
        RequestBody: operations.CreateDeviceSwitchRoutingStaticRouteRequestBody{
            AdvertiseViaOspfEnabled: sdk.Bool(false),
            Name: sdk.String("Mrs. Gregg Gerhold"),
            NextHopIP: "corporis",
            PreferOverOspfRoutesEnabled: sdk.Bool(false),
            Subnet: "molestias",
        },
        Serial: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeviceSwitchRoutingStaticRoute201ApplicationJSONObject != nil {
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
    res, err := s.Routing.CreateNetworkSwitchRoutingMulticastRendezvousPoint(ctx, operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest{
        RequestBody: operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody{
            InterfaceIP: "illo",
            MulticastGroup: "eius",
        },
        NetworkID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJSONObject != nil {
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
    res, err := s.Routing.CreateNetworkSwitchStackRoutingInterface(ctx, operations.CreateNetworkSwitchStackRoutingInterfaceRequest{
        RequestBody: operations.CreateNetworkSwitchStackRoutingInterfaceRequestBody{
            DefaultGateway: sdk.String("quas"),
            InterfaceIP: sdk.String("accusamus"),
            Ipv6: &operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6{
                Address: sdk.String("949 Kaylie View"),
                AssignmentMode: sdk.String("necessitatibus"),
                Gateway: sdk.String("quos"),
                Prefix: sdk.String("consectetur"),
            },
            MulticastRouting: operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumIgmpSnoopingQuerier.ToPointer(),
            Name: "Greg Jakubowski",
            OspfSettings: &operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings{
                Area: sdk.String("et"),
                Cost: sdk.Int64(980929),
                IsPassiveEnabled: sdk.Bool(false),
            },
            Subnet: sdk.String("accusantium"),
            VlanID: 231185,
        },
        NetworkID: "expedita",
        SwitchStackID: "quibusdam",
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
    res, err := s.Routing.CreateNetworkSwitchStackRoutingStaticRoute(ctx, operations.CreateNetworkSwitchStackRoutingStaticRouteRequest{
        RequestBody: operations.CreateNetworkSwitchStackRoutingStaticRouteRequestBody{
            AdvertiseViaOspfEnabled: sdk.Bool(false),
            Name: sdk.String("Dr. Leo Kovacek V"),
            NextHopIP: "rerum",
            PreferOverOspfRoutesEnabled: sdk.Bool(false),
            Subnet: "eligendi",
        },
        NetworkID: "veritatis",
        SwitchStackID: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchStackRoutingStaticRoute201ApplicationJSONObject != nil {
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
    res, err := s.Routing.DeleteDeviceSwitchRoutingInterface(ctx, operations.DeleteDeviceSwitchRoutingInterfaceRequest{
        InterfaceID: "ducimus",
        Serial: "quisquam",
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
    res, err := s.Routing.DeleteDeviceSwitchRoutingStaticRoute(ctx, operations.DeleteDeviceSwitchRoutingStaticRouteRequest{
        Serial: "laboriosam",
        StaticRouteID: "quaerat",
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
    res, err := s.Routing.DeleteNetworkSwitchRoutingMulticastRendezvousPoint(ctx, operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest{
        NetworkID: "quo",
        RendezvousPointID: "dicta",
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
    res, err := s.Routing.DeleteNetworkSwitchStackRoutingInterface(ctx, operations.DeleteNetworkSwitchStackRoutingInterfaceRequest{
        InterfaceID: "in",
        NetworkID: "doloremque",
        SwitchStackID: "laborum",
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
    res, err := s.Routing.DeleteNetworkSwitchStackRoutingStaticRoute(ctx, operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest{
        NetworkID: "nisi",
        StaticRouteID: "cupiditate",
        SwitchStackID: "consequatur",
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
    res, err := s.Routing.GetDeviceSwitchRoutingInterface(ctx, operations.GetDeviceSwitchRoutingInterfaceRequest{
        InterfaceID: "nesciunt",
        Serial: "cum",
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
    res, err := s.Routing.GetDeviceSwitchRoutingInterfaceDhcp(ctx, operations.GetDeviceSwitchRoutingInterfaceDhcpRequest{
        InterfaceID: "recusandae",
        Serial: "voluptate",
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
    res, err := s.Routing.GetDeviceSwitchRoutingInterfaces(ctx, operations.GetDeviceSwitchRoutingInterfacesRequest{
        Serial: "dicta",
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
    res, err := s.Routing.GetDeviceSwitchRoutingStaticRoute(ctx, operations.GetDeviceSwitchRoutingStaticRouteRequest{
        Serial: "tempore",
        StaticRouteID: "nihil",
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
    res, err := s.Routing.GetDeviceSwitchRoutingStaticRoutes(ctx, operations.GetDeviceSwitchRoutingStaticRoutesRequest{
        Serial: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchRoutingStaticRoutes200ApplicationJSONObjects != nil {
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
    res, err := s.Routing.GetNetworkSwitchRoutingMulticast(ctx, operations.GetNetworkSwitchRoutingMulticastRequest{
        NetworkID: "dignissimos",
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
    res, err := s.Routing.GetNetworkSwitchRoutingMulticastRendezvousPoint(ctx, operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest{
        NetworkID: "aut",
        RendezvousPointID: "totam",
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
    res, err := s.Routing.GetNetworkSwitchRoutingMulticastRendezvousPoints(ctx, operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest{
        NetworkID: "at",
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
    res, err := s.Routing.GetNetworkSwitchRoutingOspf(ctx, operations.GetNetworkSwitchRoutingOspfRequest{
        NetworkID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchRoutingOspf200ApplicationJSONObject != nil {
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
    res, err := s.Routing.GetNetworkSwitchStackRoutingInterface(ctx, operations.GetNetworkSwitchStackRoutingInterfaceRequest{
        InterfaceID: "repudiandae",
        NetworkID: "perferendis",
        SwitchStackID: "unde",
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
    res, err := s.Routing.GetNetworkSwitchStackRoutingInterfaceDhcp(ctx, operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest{
        InterfaceID: "explicabo",
        NetworkID: "rerum",
        SwitchStackID: "esse",
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
    res, err := s.Routing.GetNetworkSwitchStackRoutingInterfaces(ctx, operations.GetNetworkSwitchStackRoutingInterfacesRequest{
        NetworkID: "quae",
        SwitchStackID: "non",
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
    res, err := s.Routing.GetNetworkSwitchStackRoutingStaticRoute(ctx, operations.GetNetworkSwitchStackRoutingStaticRouteRequest{
        NetworkID: "quidem",
        StaticRouteID: "architecto",
        SwitchStackID: "veritatis",
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
    res, err := s.Routing.GetNetworkSwitchStackRoutingStaticRoutes(ctx, operations.GetNetworkSwitchStackRoutingStaticRoutesRequest{
        NetworkID: "cupiditate",
        SwitchStackID: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStackRoutingStaticRoutes200ApplicationJSONObjects != nil {
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
    res, err := s.Routing.UpdateDeviceSwitchRoutingInterface(ctx, operations.UpdateDeviceSwitchRoutingInterfaceRequest{
        RequestBody: &operations.UpdateDeviceSwitchRoutingInterfaceRequestBody{
            DefaultGateway: sdk.String("natus"),
            InterfaceIP: sdk.String("magnam"),
            Ipv6: &operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyIpv6{
                Address: sdk.String("87490 Deangelo Underpass"),
                AssignmentMode: sdk.String("reprehenderit"),
                Gateway: sdk.String("nulla"),
                Prefix: sdk.String("tenetur"),
            },
            MulticastRouting: operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnumDisabled.ToPointer(),
            Name: sdk.String("Vicki Ryan"),
            OspfSettings: &operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings{
                Area: sdk.String("tempore"),
                Cost: sdk.Int64(642336),
                IsPassiveEnabled: sdk.Bool(false),
            },
            OspfV3: &operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfV3{
                Area: sdk.String("amet"),
                Cost: sdk.Int64(225584),
                IsPassiveEnabled: sdk.Bool(false),
            },
            Subnet: sdk.String("eius"),
            VlanID: sdk.Int64(771987),
        },
        InterfaceID: "deserunt",
        Serial: "atque",
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
    res, err := s.Routing.UpdateDeviceSwitchRoutingInterfaceDhcp(ctx, operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest{
        RequestBody: &operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody{
            BootFileName: sdk.String("error"),
            BootNextServer: sdk.String("debitis"),
            BootOptionsEnabled: sdk.Bool(false),
            DhcpLeaseTime: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumOneWeek.ToPointer(),
            DhcpMode: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnumDhcpDisabled.ToPointer(),
            DhcpOptions: []UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions{
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "ratione",
                    Type: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumHex,
                    Value: "cumque",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "recusandae",
                    Type: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumInteger,
                    Value: "animi",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "ab",
                    Type: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumHex,
                    Value: "rerum",
                },
            },
            DhcpRelayServerIps: []string{
                "aspernatur",
                "dolor",
                "dicta",
                "maxime",
            },
            DNSCustomNameservers: []string{
                "vero",
                "ea",
                "fugit",
            },
            DNSNameserversOption: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnumCustom.ToPointer(),
            FixedIPAssignments: []UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "laborum",
                    Mac: "totam",
                    Name: "Lila Pfannerstill",
                },
            },
            ReservedIPRanges: []UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("assumenda"),
                    End: "repellat",
                    Start: "sint",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("porro"),
                    End: "placeat",
                    Start: "animi",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("error"),
                    End: "nihil",
                    Start: "corporis",
                },
            },
        },
        InterfaceID: "reprehenderit",
        Serial: "laboriosam",
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
    res, err := s.Routing.UpdateDeviceSwitchRoutingStaticRoute(ctx, operations.UpdateDeviceSwitchRoutingStaticRouteRequest{
        RequestBody: &operations.UpdateDeviceSwitchRoutingStaticRouteRequestBody{
            AdvertiseViaOspfEnabled: sdk.Bool(false),
            Name: sdk.String("Mr. Jasmine Daniel"),
            NextHopIP: sdk.String("molestiae"),
            PreferOverOspfRoutesEnabled: sdk.Bool(false),
            Subnet: sdk.String("similique"),
        },
        Serial: "minus",
        StaticRouteID: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceSwitchRoutingStaticRoute200ApplicationJSONObject != nil {
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
    res, err := s.Routing.UpdateNetworkSwitchRoutingMulticast(ctx, operations.UpdateNetworkSwitchRoutingMulticastRequest{
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
                        "ratione",
                        "impedit",
                        "tempore",
                        "maiores",
                    },
                    SwitchProfiles: []string{
                        "repudiandae",
                        "illum",
                        "autem",
                        "nesciunt",
                    },
                    Switches: []string{
                        "autem",
                        "dolore",
                        "amet",
                        "itaque",
                    },
                },
                operations.UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides{
                    FloodUnknownMulticastTrafficEnabled: false,
                    IgmpSnoopingEnabled: false,
                    Stacks: []string{
                        "repellat",
                        "maiores",
                    },
                    SwitchProfiles: []string{
                        "iusto",
                        "veniam",
                        "repellat",
                    },
                    Switches: []string{
                        "architecto",
                        "doloremque",
                        "dolores",
                        "ea",
                    },
                },
                operations.UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides{
                    FloodUnknownMulticastTrafficEnabled: false,
                    IgmpSnoopingEnabled: false,
                    Stacks: []string{
                        "praesentium",
                    },
                    SwitchProfiles: []string{
                        "laudantium",
                        "cum",
                    },
                    Switches: []string{
                        "temporibus",
                    },
                },
            },
        },
        NetworkID: "ex",
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
    res, err := s.Routing.UpdateNetworkSwitchRoutingMulticastRendezvousPoint(ctx, operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest{
        RequestBody: operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody{
            InterfaceIP: "totam",
            MulticastGroup: "expedita",
        },
        NetworkID: "fugiat",
        RendezvousPointID: "quo",
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
    res, err := s.Routing.UpdateNetworkSwitchRoutingOspf(ctx, operations.UpdateNetworkSwitchRoutingOspfRequest{
        RequestBody: &operations.UpdateNetworkSwitchRoutingOspfRequestBody{
            Areas: []UpdateNetworkSwitchRoutingOspfRequestBodyAreas{
                operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreas{
                    AreaID: "distinctio",
                    AreaName: "alias",
                    AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnumNormal,
                },
                operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreas{
                    AreaID: "magni",
                    AreaName: "laborum",
                    AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnumNormal,
                },
                operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreas{
                    AreaID: "adipisci",
                    AreaName: "asperiores",
                    AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnumNssa,
                },
                operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreas{
                    AreaID: "necessitatibus",
                    AreaName: "suscipit",
                    AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnumNormal,
                },
            },
            DeadTimerInSeconds: sdk.Int64(573501),
            Enabled: sdk.Bool(false),
            HelloTimerInSeconds: sdk.Int64(991502),
            Md5AuthenticationEnabled: sdk.Bool(false),
            Md5AuthenticationKey: &operations.UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey{
                ID: sdk.Int64(224738),
                Passphrase: sdk.String("eos"),
            },
            V3: &operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3{
                Areas: []UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas{
                    operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas{
                        AreaID: "ad",
                        AreaName: "saepe",
                        AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnumStub,
                    },
                    operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas{
                        AreaID: "veniam",
                        AreaName: "perferendis",
                        AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnumNormal,
                    },
                    operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas{
                        AreaID: "ad",
                        AreaName: "earum",
                        AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnumNssa,
                    },
                },
                DeadTimerInSeconds: sdk.Int64(549045),
                Enabled: sdk.Bool(false),
                HelloTimerInSeconds: sdk.Int64(73080),
            },
        },
        NetworkID: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchRoutingOspf200ApplicationJSONObject != nil {
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
    res, err := s.Routing.UpdateNetworkSwitchStackRoutingInterface(ctx, operations.UpdateNetworkSwitchStackRoutingInterfaceRequest{
        RequestBody: &operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBody{
            DefaultGateway: sdk.String("fuga"),
            InterfaceIP: sdk.String("tenetur"),
            Ipv6: &operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6{
                Address: sdk.String("89589 Hyman Burgs"),
                AssignmentMode: sdk.String("non"),
                Gateway: sdk.String("vero"),
                Prefix: sdk.String("at"),
            },
            MulticastRouting: operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumIgmpSnoopingQuerier.ToPointer(),
            Name: sdk.String("Carlos Beier"),
            OspfSettings: &operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings{
                Area: sdk.String("dolorem"),
                Cost: sdk.Int64(335133),
                IsPassiveEnabled: sdk.Bool(false),
            },
            Subnet: sdk.String("quis"),
            VlanID: sdk.Int64(860098),
        },
        InterfaceID: "cum",
        NetworkID: "velit",
        SwitchStackID: "velit",
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
    res, err := s.Routing.UpdateNetworkSwitchStackRoutingInterfaceDhcp(ctx, operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest{
        RequestBody: &operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody{
            BootFileName: sdk.String("occaecati"),
            BootNextServer: sdk.String("dicta"),
            BootOptionsEnabled: sdk.Bool(false),
            DhcpLeaseTime: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumOneDay.ToPointer(),
            DhcpMode: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnumDhcpServer.ToPointer(),
            DhcpOptions: []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "accusantium",
                    Type: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumHex,
                    Value: "tempora",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "deserunt",
                    Type: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumInteger,
                    Value: "amet",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "incidunt",
                    Type: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumText,
                    Value: "debitis",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "qui",
                    Type: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumHex,
                    Value: "optio",
                },
            },
            DhcpRelayServerIps: []string{
                "praesentium",
            },
            DNSCustomNameservers: []string{
                "facilis",
            },
            DNSNameserversOption: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnumCustom.ToPointer(),
            FixedIPAssignments: []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "voluptatem",
                    Mac: "quas",
                    Name: "Geneva Rutherford V",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "repellendus",
                    Mac: "modi",
                    Name: "Danielle Volkman",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "amet",
                    Mac: "perspiciatis",
                    Name: "Mr. Caleb Gusikowski",
                },
            },
            ReservedIPRanges: []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("nihil"),
                    End: "iure",
                    Start: "iusto",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("hic"),
                    End: "natus",
                    Start: "commodi",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("vero"),
                    End: "consequatur",
                    Start: "distinctio",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("nesciunt"),
                    End: "rerum",
                    Start: "temporibus",
                },
            },
        },
        InterfaceID: "dicta",
        NetworkID: "corporis",
        SwitchStackID: "molestias",
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
    res, err := s.Routing.UpdateNetworkSwitchStackRoutingStaticRoute(ctx, operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest{
        RequestBody: &operations.UpdateNetworkSwitchStackRoutingStaticRouteRequestBody{
            AdvertiseViaOspfEnabled: sdk.Bool(false),
            Name: sdk.String("Morris Howell"),
            NextHopIP: sdk.String("voluptatem"),
            PreferOverOspfRoutesEnabled: sdk.Bool(false),
            Subnet: sdk.String("quod"),
        },
        NetworkID: "cumque",
        StaticRouteID: "illo",
        SwitchStackID: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject != nil {
        // handle response
    }
}
```
