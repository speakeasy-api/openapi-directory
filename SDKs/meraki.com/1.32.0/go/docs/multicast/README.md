# Multicast

### Available Operations

* [CreateNetworkSwitchRoutingMulticastRendezvousPoint](#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [DeleteNetworkSwitchRoutingMulticastRendezvousPoint](#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [GetNetworkSwitchRoutingMulticast](#getnetworkswitchroutingmulticast) - Return multicast settings for a network
* [GetNetworkSwitchRoutingMulticastRendezvousPoint](#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [GetNetworkSwitchRoutingMulticastRendezvousPoints](#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [UpdateNetworkSwitchRoutingMulticast](#updatenetworkswitchroutingmulticast) - Update multicast settings for a network
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
    res, err := s.Multicast.CreateNetworkSwitchRoutingMulticastRendezvousPoint(ctx, operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest{
        RequestBody: operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody{
            InterfaceIP: "fugit",
            MulticastGroup: "impedit",
        },
        NetworkID: "ut",
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
    res, err := s.Multicast.DeleteNetworkSwitchRoutingMulticastRendezvousPoint(ctx, operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest{
        NetworkID: "modi",
        RendezvousPointID: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
    res, err := s.Multicast.GetNetworkSwitchRoutingMulticast(ctx, operations.GetNetworkSwitchRoutingMulticastRequest{
        NetworkID: "repudiandae",
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
    res, err := s.Multicast.GetNetworkSwitchRoutingMulticastRendezvousPoint(ctx, operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest{
        NetworkID: "explicabo",
        RendezvousPointID: "dolor",
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
    res, err := s.Multicast.GetNetworkSwitchRoutingMulticastRendezvousPoints(ctx, operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest{
        NetworkID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJSONArrays != nil {
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
    res, err := s.Multicast.UpdateNetworkSwitchRoutingMulticast(ctx, operations.UpdateNetworkSwitchRoutingMulticastRequest{
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
                        "vitae",
                        "magnam",
                        "dignissimos",
                    },
                    SwitchProfiles: []string{
                        "sed",
                        "iusto",
                    },
                    Switches: []string{
                        "eveniet",
                        "iste",
                        "ullam",
                        "voluptatibus",
                    },
                },
                operations.UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides{
                    FloodUnknownMulticastTrafficEnabled: false,
                    IgmpSnoopingEnabled: false,
                    Stacks: []string{
                        "odit",
                        "fuga",
                    },
                    SwitchProfiles: []string{
                        "fuga",
                        "tempore",
                        "hic",
                        "laboriosam",
                    },
                    Switches: []string{
                        "perferendis",
                        "eaque",
                        "tempore",
                    },
                },
                operations.UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides{
                    FloodUnknownMulticastTrafficEnabled: false,
                    IgmpSnoopingEnabled: false,
                    Stacks: []string{
                        "quasi",
                    },
                    SwitchProfiles: []string{
                        "placeat",
                        "tempore",
                        "quod",
                    },
                    Switches: []string{
                        "ipsum",
                    },
                },
            },
        },
        NetworkID: "sunt",
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
    res, err := s.Multicast.UpdateNetworkSwitchRoutingMulticastRendezvousPoint(ctx, operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest{
        RequestBody: operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody{
            InterfaceIP: "delectus",
            MulticastGroup: "fugit",
        },
        NetworkID: "minus",
        RendezvousPointID: "illo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject != nil {
        // handle response
    }
}
```
