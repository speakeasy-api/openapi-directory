# MXStaticRoutes

### Available Operations

* [CreateNetworkStaticRoute](#createnetworkstaticroute) - Add a static route for an MX or teleworker network
* [DeleteNetworkStaticRoute](#deletenetworkstaticroute) - Delete a static route from an MX or teleworker network
* [GetNetworkStaticRoute](#getnetworkstaticroute) - Return a static route for an MX or teleworker network
* [GetNetworkStaticRoutes](#getnetworkstaticroutes) - List the static routes for an MX or teleworker network
* [UpdateNetworkStaticRoute](#updatenetworkstaticroute) - Update a static route for an MX or teleworker network

## CreateNetworkStaticRoute

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
    res, err := s.MXStaticRoutes.CreateNetworkStaticRoute(ctx, operations.CreateNetworkStaticRouteRequest{
        RequestBody: operations.CreateNetworkStaticRouteRequestBody{
            GatewayIP: "aspernatur",
            Name: "Joyce O'Kon",
            Subnet: "provident",
        },
        NetworkID: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkStaticRoute201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkStaticRoute

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
    res, err := s.MXStaticRoutes.DeleteNetworkStaticRoute(ctx, operations.DeleteNetworkStaticRouteRequest{
        NetworkID: "animi",
        StaticRouteID: "ex",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkStaticRoute

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
    res, err := s.MXStaticRoutes.GetNetworkStaticRoute(ctx, operations.GetNetworkStaticRouteRequest{
        NetworkID: "aliquid",
        StaticRouteID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkStaticRoute200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkStaticRoutes

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
    res, err := s.MXStaticRoutes.GetNetworkStaticRoutes(ctx, operations.GetNetworkStaticRoutesRequest{
        NetworkID: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkStaticRoutes200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkStaticRoute

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
    res, err := s.MXStaticRoutes.UpdateNetworkStaticRoute(ctx, operations.UpdateNetworkStaticRouteRequest{
        RequestBody: &operations.UpdateNetworkStaticRouteRequestBody{
            Enabled: sdk.Bool(false),
            FixedIPAssignments: map[string]interface{}{
                "ullam": "in",
                "nam": "earum",
                "officia": "laborum",
                "placeat": "modi",
            },
            GatewayIP: sdk.String("voluptatibus"),
            Name: sdk.String("Stewart Will MD"),
            ReservedIPRanges: []UpdateNetworkStaticRouteRequestBodyReservedIPRanges{
                operations.UpdateNetworkStaticRouteRequestBodyReservedIPRanges{
                    Comment: "quis",
                    End: "inventore",
                    Start: "fugit",
                },
                operations.UpdateNetworkStaticRouteRequestBodyReservedIPRanges{
                    Comment: "cumque",
                    End: "quae",
                    Start: "perferendis",
                },
            },
            Subnet: sdk.String("velit"),
        },
        NetworkID: "aspernatur",
        StaticRouteID: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkStaticRoute200ApplicationJSONObject != nil {
        // handle response
    }
}
```
