# Networks

### Available Operations

* [BindNetwork](#bindnetwork) - Bind a network to a template.
* [CombineOrganizationNetworks](#combineorganizationnetworks) - Combine multiple networks into a single network
* [CreateOrganizationNetwork](#createorganizationnetwork) - Create a network
* [DeleteNetwork](#deletenetwork) - Delete a network
* [GetNetwork](#getnetwork) - Return a network
* [GetNetworkAirMarshal](#getnetworkairmarshal) - List Air Marshal scan results from a network
* [GetNetworkSiteToSiteVpn](#getnetworksitetositevpn) - Return the site-to-site VPN settings of a network
* [GetNetworkTraffic](#getnetworktraffic) - Return the traffic analysis data for this network
* [GetOrganizationNetworks](#getorganizationnetworks) - List the networks in an organization
* [SplitNetwork](#splitnetwork) - Split a combined network into individual networks for each type of device
* [UnbindNetwork](#unbindnetwork) - Unbind a network from a template.
* [UpdateNetwork](#updatenetwork) - Update a network
* [UpdateNetworkSiteToSiteVpn](#updatenetworksitetositevpn) - Update the site-to-site VPN settings of a network

## BindNetwork

Bind a network to a template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.BindNetwork(ctx, operations.BindNetworkRequest{
        RequestBody: operations.BindNetworkRequestBody{
            AutoBind: sdk.Bool(false),
            ConfigTemplateID: "tempora",
        },
        NetworkID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CombineOrganizationNetworks

Combine multiple networks into a single network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.CombineOrganizationNetworks(ctx, operations.CombineOrganizationNetworksRequest{
        RequestBody: operations.CombineOrganizationNetworksRequestBody{
            EnrollmentString: sdk.String("molestiae"),
            Name: "Marlene Koch",
            NetworkIds: []string{
                "vel",
                "architecto",
                "fugiat",
                "doloremque",
            },
        },
        OrganizationID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CombineOrganizationNetworks200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationNetwork

Create a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.CreateOrganizationNetwork(ctx, operations.CreateOrganizationNetworkRequest{
        RequestBody: operations.CreateOrganizationNetworkRequestBody{
            CopyFromNetworkID: sdk.String("odio"),
            DisableMyMerakiCom: sdk.Bool(false),
            DisableRemoteStatusPage: sdk.Bool(false),
            Name: "Joy Jacobson",
            Tags: sdk.String("ipsa"),
            TimeZone: sdk.String("laborum"),
            Type: "sunt",
        },
        OrganizationID: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationNetwork201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetwork

Delete a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.DeleteNetwork(ctx, operations.DeleteNetworkRequest{
        NetworkID: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetwork

Return a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetwork(ctx, operations.GetNetworkRequest{
        NetworkID: "expedita",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetwork200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkAirMarshal

List Air Marshal scan results from a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkAirMarshal(ctx, operations.GetNetworkAirMarshalRequest{
        NetworkID: "aliquid",
        T0: sdk.String("officia"),
        Timespan: sdk.Float32(3813.97),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAirMarshal200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSiteToSiteVpn

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
    res, err := s.Networks.GetNetworkSiteToSiteVpn(ctx, operations.GetNetworkSiteToSiteVpnRequest{
        NetworkID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSiteToSiteVpn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkTraffic

Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkTraffic(ctx, operations.GetNetworkTrafficRequest{
        DeviceType: operations.GetNetworkTrafficDeviceTypeEnumAppliance.ToPointer(),
        NetworkID: "eum",
        T0: sdk.String("voluptas"),
        Timespan: sdk.Float32(6145.28),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkTraffic200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationNetworks

List the networks in an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetOrganizationNetworks(ctx, operations.GetOrganizationNetworksRequest{
        ConfigTemplateID: sdk.String("id"),
        OrganizationID: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationNetworks200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## SplitNetwork

Split a combined network into individual networks for each type of device

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.SplitNetwork(ctx, operations.SplitNetworkRequest{
        NetworkID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SplitNetwork200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UnbindNetwork

Unbind a network from a template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UnbindNetwork(ctx, operations.UnbindNetworkRequest{
        NetworkID: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateNetwork

Update a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UpdateNetwork(ctx, operations.UpdateNetworkRequest{
        RequestBody: &operations.UpdateNetworkRequestBody{
            DisableMyMerakiCom: sdk.Bool(false),
            DisableRemoteStatusPage: sdk.Bool(false),
            EnrollmentString: sdk.String("voluptates"),
            Name: sdk.String("Cameron Reinger"),
            Tags: sdk.String("enim"),
            TimeZone: sdk.String("vitae"),
        },
        NetworkID: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetwork200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSiteToSiteVpn

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
    res, err := s.Networks.UpdateNetworkSiteToSiteVpn(ctx, operations.UpdateNetworkSiteToSiteVpnRequest{
        RequestBody: operations.UpdateNetworkSiteToSiteVpnRequestBody{
            Hubs: []UpdateNetworkSiteToSiteVpnRequestBodyHubs{
                operations.UpdateNetworkSiteToSiteVpnRequestBodyHubs{
                    HubID: "quo",
                    UseDefaultRoute: sdk.Bool(false),
                },
                operations.UpdateNetworkSiteToSiteVpnRequestBodyHubs{
                    HubID: "ex",
                    UseDefaultRoute: sdk.Bool(false),
                },
            },
            Mode: operations.UpdateNetworkSiteToSiteVpnRequestBodyModeEnumHub,
            Subnets: []UpdateNetworkSiteToSiteVpnRequestBodySubnets{
                operations.UpdateNetworkSiteToSiteVpnRequestBodySubnets{
                    LocalSubnet: "expedita",
                    UseVpn: sdk.Bool(false),
                },
                operations.UpdateNetworkSiteToSiteVpnRequestBodySubnets{
                    LocalSubnet: "voluptatem",
                    UseVpn: sdk.Bool(false),
                },
            },
        },
        NetworkID: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSiteToSiteVpn200ApplicationJSONObject != nil {
        // handle response
    }
}
```
