# StaticRoutes

### Available Operations

* [CreateDeviceSwitchRoutingStaticRoute](#createdeviceswitchroutingstaticroute) - Create a layer 3 static route for a switch
* [CreateNetworkApplianceStaticRoute](#createnetworkappliancestaticroute) - Add a static route for an MX or teleworker network
* [CreateNetworkSwitchStackRoutingStaticRoute](#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [DeleteDeviceSwitchRoutingStaticRoute](#deletedeviceswitchroutingstaticroute) - Delete a layer 3 static route for a switch
* [DeleteNetworkApplianceStaticRoute](#deletenetworkappliancestaticroute) - Delete a static route from an MX or teleworker network
* [DeleteNetworkSwitchStackRoutingStaticRoute](#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [GetDeviceSwitchRoutingStaticRoute](#getdeviceswitchroutingstaticroute) - Return a layer 3 static route for a switch
* [GetDeviceSwitchRoutingStaticRoutes](#getdeviceswitchroutingstaticroutes) - List layer 3 static routes for a switch
* [GetNetworkApplianceStaticRoute](#getnetworkappliancestaticroute) - Return a static route for an MX or teleworker network
* [GetNetworkApplianceStaticRoutes](#getnetworkappliancestaticroutes) - List the static routes for an MX or teleworker network
* [GetNetworkSwitchStackRoutingStaticRoute](#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [GetNetworkSwitchStackRoutingStaticRoutes](#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [UpdateDeviceSwitchRoutingStaticRoute](#updatedeviceswitchroutingstaticroute) - Update a layer 3 static route for a switch
* [UpdateNetworkApplianceStaticRoute](#updatenetworkappliancestaticroute) - Update a static route for an MX or teleworker network
* [UpdateNetworkSwitchStackRoutingStaticRoute](#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack

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
    res, err := s.StaticRoutes.CreateDeviceSwitchRoutingStaticRoute(ctx, operations.CreateDeviceSwitchRoutingStaticRouteRequest{
        RequestBody: operations.CreateDeviceSwitchRoutingStaticRouteRequestBody{
            AdvertiseViaOspfEnabled: sdk.Bool(false),
            Name: sdk.String("Wilson Huel"),
            NextHopIP: "tempora",
            PreferOverOspfRoutesEnabled: sdk.Bool(false),
            Subnet: "illum",
        },
        Serial: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeviceSwitchRoutingStaticRoute201ApplicationJSONObject != nil {
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
    res, err := s.StaticRoutes.CreateNetworkApplianceStaticRoute(ctx, operations.CreateNetworkApplianceStaticRouteRequest{
        RequestBody: operations.CreateNetworkApplianceStaticRouteRequestBody{
            GatewayIP: "ipsam",
            GatewayVlanID: sdk.String("quis"),
            Name: "Enrique Powlowski",
            Subnet: "officiis",
        },
        NetworkID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkApplianceStaticRoute201ApplicationJSONObject != nil {
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
    res, err := s.StaticRoutes.CreateNetworkSwitchStackRoutingStaticRoute(ctx, operations.CreateNetworkSwitchStackRoutingStaticRouteRequest{
        RequestBody: operations.CreateNetworkSwitchStackRoutingStaticRouteRequestBody{
            AdvertiseViaOspfEnabled: sdk.Bool(false),
            Name: sdk.String("Tyrone Breitenberg"),
            NextHopIP: "eveniet",
            PreferOverOspfRoutesEnabled: sdk.Bool(false),
            Subnet: "voluptatem",
        },
        NetworkID: "illo",
        SwitchStackID: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchStackRoutingStaticRoute201ApplicationJSONObject != nil {
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
    res, err := s.StaticRoutes.DeleteDeviceSwitchRoutingStaticRoute(ctx, operations.DeleteDeviceSwitchRoutingStaticRouteRequest{
        Serial: "doloribus",
        StaticRouteID: "nihil",
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
    res, err := s.StaticRoutes.DeleteNetworkApplianceStaticRoute(ctx, operations.DeleteNetworkApplianceStaticRouteRequest{
        NetworkID: "harum",
        StaticRouteID: "harum",
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
    res, err := s.StaticRoutes.DeleteNetworkSwitchStackRoutingStaticRoute(ctx, operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest{
        NetworkID: "voluptates",
        StaticRouteID: "temporibus",
        SwitchStackID: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
    res, err := s.StaticRoutes.GetDeviceSwitchRoutingStaticRoute(ctx, operations.GetDeviceSwitchRoutingStaticRouteRequest{
        Serial: "magnam",
        StaticRouteID: "id",
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
    res, err := s.StaticRoutes.GetDeviceSwitchRoutingStaticRoutes(ctx, operations.GetDeviceSwitchRoutingStaticRoutesRequest{
        Serial: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchRoutingStaticRoutes200ApplicationJSONObjects != nil {
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
    res, err := s.StaticRoutes.GetNetworkApplianceStaticRoute(ctx, operations.GetNetworkApplianceStaticRouteRequest{
        NetworkID: "ratione",
        StaticRouteID: "tempora",
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
    res, err := s.StaticRoutes.GetNetworkApplianceStaticRoutes(ctx, operations.GetNetworkApplianceStaticRoutesRequest{
        NetworkID: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceStaticRoutes200ApplicationJSONObjects != nil {
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
    res, err := s.StaticRoutes.GetNetworkSwitchStackRoutingStaticRoute(ctx, operations.GetNetworkSwitchStackRoutingStaticRouteRequest{
        NetworkID: "expedita",
        StaticRouteID: "voluptatem",
        SwitchStackID: "commodi",
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
    res, err := s.StaticRoutes.GetNetworkSwitchStackRoutingStaticRoutes(ctx, operations.GetNetworkSwitchStackRoutingStaticRoutesRequest{
        NetworkID: "autem",
        SwitchStackID: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStackRoutingStaticRoutes200ApplicationJSONObjects != nil {
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
    res, err := s.StaticRoutes.UpdateDeviceSwitchRoutingStaticRoute(ctx, operations.UpdateDeviceSwitchRoutingStaticRouteRequest{
        RequestBody: &operations.UpdateDeviceSwitchRoutingStaticRouteRequestBody{
            AdvertiseViaOspfEnabled: sdk.Bool(false),
            Name: sdk.String("Laverne Rutherford"),
            NextHopIP: sdk.String("odit"),
            PreferOverOspfRoutesEnabled: sdk.Bool(false),
            Subnet: sdk.String("sit"),
        },
        Serial: "iusto",
        StaticRouteID: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceSwitchRoutingStaticRoute200ApplicationJSONObject != nil {
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
    res, err := s.StaticRoutes.UpdateNetworkApplianceStaticRoute(ctx, operations.UpdateNetworkApplianceStaticRouteRequest{
        RequestBody: &operations.UpdateNetworkApplianceStaticRouteRequestBody{
            Enabled: sdk.Bool(false),
            FixedIPAssignments: map[string]interface{}{
                "quia": "inventore",
                "id": "at",
                "animi": "doloremque",
                "laborum": "quasi",
            },
            GatewayIP: sdk.String("quidem"),
            GatewayVlanID: sdk.String("molestiae"),
            Name: sdk.String("Adrian Hahn"),
            ReservedIPRanges: []UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges{
                operations.UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges{
                    Comment: "iste",
                    End: "occaecati",
                    Start: "ducimus",
                },
                operations.UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges{
                    Comment: "accusantium",
                    End: "iure",
                    Start: "cum",
                },
                operations.UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges{
                    Comment: "debitis",
                    End: "qui",
                    Start: "maxime",
                },
                operations.UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges{
                    Comment: "nobis",
                    End: "praesentium",
                    Start: "quas",
                },
            },
            Subnet: sdk.String("enim"),
        },
        NetworkID: "consequatur",
        StaticRouteID: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceStaticRoute200ApplicationJSONObject != nil {
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
    res, err := s.StaticRoutes.UpdateNetworkSwitchStackRoutingStaticRoute(ctx, operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest{
        RequestBody: &operations.UpdateNetworkSwitchStackRoutingStaticRouteRequestBody{
            AdvertiseViaOspfEnabled: sdk.Bool(false),
            Name: sdk.String("Dallas Langosh"),
            NextHopIP: sdk.String("recusandae"),
            PreferOverOspfRoutesEnabled: sdk.Bool(false),
            Subnet: sdk.String("in"),
        },
        NetworkID: "vel",
        StaticRouteID: "illum",
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
