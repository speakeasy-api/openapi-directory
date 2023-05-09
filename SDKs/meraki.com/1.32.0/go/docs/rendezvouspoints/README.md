# RendezvousPoints

### Available Operations

* [CreateNetworkSwitchRoutingMulticastRendezvousPoint](#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [DeleteNetworkSwitchRoutingMulticastRendezvousPoint](#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [GetNetworkSwitchRoutingMulticastRendezvousPoint](#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [GetNetworkSwitchRoutingMulticastRendezvousPoints](#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [UpdateNetworkSwitchRoutingMulticastRendezvousPoint](#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point

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
    res, err := s.RendezvousPoints.CreateNetworkSwitchRoutingMulticastRendezvousPoint(ctx, operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest{
        RequestBody: operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody{
            InterfaceIP: "ea",
            MulticastGroup: "sequi",
        },
        NetworkID: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJSONObject != nil {
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
    res, err := s.RendezvousPoints.DeleteNetworkSwitchRoutingMulticastRendezvousPoint(ctx, operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest{
        NetworkID: "necessitatibus",
        RendezvousPointID: "vitae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
    res, err := s.RendezvousPoints.GetNetworkSwitchRoutingMulticastRendezvousPoint(ctx, operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest{
        NetworkID: "quisquam",
        RendezvousPointID: "vitae",
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
    res, err := s.RendezvousPoints.GetNetworkSwitchRoutingMulticastRendezvousPoints(ctx, operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest{
        NetworkID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJSONArrays != nil {
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
    res, err := s.RendezvousPoints.UpdateNetworkSwitchRoutingMulticastRendezvousPoint(ctx, operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest{
        RequestBody: operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody{
            InterfaceIP: "dolores",
            MulticastGroup: "odit",
        },
        NetworkID: "magni",
        RendezvousPointID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject != nil {
        // handle response
    }
}
```
