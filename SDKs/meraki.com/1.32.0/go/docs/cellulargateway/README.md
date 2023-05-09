# CellularGateway

### Available Operations

* [GetDeviceCellularGatewayLan](#getdevicecellulargatewaylan) - Show the LAN Settings of a MG
* [GetDeviceCellularGatewayPortForwardingRules](#getdevicecellulargatewayportforwardingrules) - Returns the port forwarding rules for a single MG.
* [GetNetworkCellularGatewayConnectivityMonitoringDestinations](#getnetworkcellulargatewayconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MG network
* [GetNetworkCellularGatewayDhcp](#getnetworkcellulargatewaydhcp) - List common DHCP settings of MGs
* [GetNetworkCellularGatewaySubnetPool](#getnetworkcellulargatewaysubnetpool) - Return the subnet pool and mask configured for MGs in the network.
* [GetNetworkCellularGatewayUplink](#getnetworkcellulargatewayuplink) - Returns the uplink settings for your MG network.
* [GetOrganizationCellularGatewayUplinkStatuses](#getorganizationcellulargatewayuplinkstatuses) - List the uplink status of every Meraki MG cellular gateway in the organization
* [UpdateDeviceCellularGatewayLan](#updatedevicecellulargatewaylan) - Update the LAN Settings for a single MG.
* [UpdateDeviceCellularGatewayPortForwardingRules](#updatedevicecellulargatewayportforwardingrules) - Updates the port forwarding rules for a single MG.
* [UpdateNetworkCellularGatewayConnectivityMonitoringDestinations](#updatenetworkcellulargatewayconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MG network
* [UpdateNetworkCellularGatewayDhcp](#updatenetworkcellulargatewaydhcp) - Update common DHCP settings of MGs
* [UpdateNetworkCellularGatewaySubnetPool](#updatenetworkcellulargatewaysubnetpool) - Update the subnet pool and mask configuration for MGs in the network.
* [UpdateNetworkCellularGatewayUplink](#updatenetworkcellulargatewayuplink) - Updates the uplink settings for your MG network.

## GetDeviceCellularGatewayLan

Show the LAN Settings of a MG

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
    res, err := s.CellularGateway.GetDeviceCellularGatewayLan(ctx, operations.GetDeviceCellularGatewayLanRequest{
        Serial: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCellularGatewayLan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCellularGatewayPortForwardingRules

Returns the port forwarding rules for a single MG.

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
    res, err := s.CellularGateway.GetDeviceCellularGatewayPortForwardingRules(ctx, operations.GetDeviceCellularGatewayPortForwardingRulesRequest{
        Serial: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkCellularGatewayConnectivityMonitoringDestinations

Return the connectivity testing destinations for an MG network

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
    res, err := s.CellularGateway.GetNetworkCellularGatewayConnectivityMonitoringDestinations(ctx, operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest{
        NetworkID: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject != nil {
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
    res, err := s.CellularGateway.GetNetworkCellularGatewayDhcp(ctx, operations.GetNetworkCellularGatewayDhcpRequest{
        NetworkID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCellularGatewayDhcp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkCellularGatewaySubnetPool

Return the subnet pool and mask configured for MGs in the network.

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
    res, err := s.CellularGateway.GetNetworkCellularGatewaySubnetPool(ctx, operations.GetNetworkCellularGatewaySubnetPoolRequest{
        NetworkID: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCellularGatewaySubnetPool200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkCellularGatewayUplink

Returns the uplink settings for your MG network.

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
    res, err := s.CellularGateway.GetNetworkCellularGatewayUplink(ctx, operations.GetNetworkCellularGatewayUplinkRequest{
        NetworkID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCellularGatewayUplink200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationCellularGatewayUplinkStatuses

List the uplink status of every Meraki MG cellular gateway in the organization

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
    res, err := s.CellularGateway.GetOrganizationCellularGatewayUplinkStatuses(ctx, operations.GetOrganizationCellularGatewayUplinkStatusesRequest{
        EndingBefore: sdk.String("numquam"),
        Iccids: []string{
            "est",
        },
        NetworkIds: []string{
            "facere",
            "vitae",
        },
        OrganizationID: "omnis",
        PerPage: sdk.Int64(3860),
        Serials: []string{
            "officiis",
            "expedita",
            "quia",
            "vitae",
        },
        StartingAfter: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationCellularGatewayUplinkStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateDeviceCellularGatewayLan

Update the LAN Settings for a single MG.

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
    res, err := s.CellularGateway.UpdateDeviceCellularGatewayLan(ctx, operations.UpdateDeviceCellularGatewayLanRequest{
        RequestBody: &operations.UpdateDeviceCellularGatewayLanRequestBody{
            FixedIPAssignments: []UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments{
                operations.UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments{
                    IP: "ipsa",
                    Mac: "distinctio",
                    Name: sdk.String("Dr. Forrest Roob"),
                },
                operations.UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments{
                    IP: "distinctio",
                    Mac: "assumenda",
                    Name: sdk.String("Dominic Gulgowski"),
                },
                operations.UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments{
                    IP: "esse",
                    Mac: "doloremque",
                    Name: sdk.String("Dominick Purdy"),
                },
            },
            ReservedIPRanges: []UpdateDeviceCellularGatewayLanRequestBodyReservedIPRanges{
                operations.UpdateDeviceCellularGatewayLanRequestBodyReservedIPRanges{
                    Comment: "natus",
                    End: "ab",
                    Start: "officiis",
                },
            },
        },
        Serial: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCellularGatewayLan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCellularGatewayPortForwardingRules

Updates the port forwarding rules for a single MG.

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
    res, err := s.CellularGateway.UpdateDeviceCellularGatewayPortForwardingRules(ctx, operations.UpdateDeviceCellularGatewayPortForwardingRulesRequest{
        RequestBody: &operations.UpdateDeviceCellularGatewayPortForwardingRulesRequestBody{
            Rules: []UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules{
                operations.UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules{
                    Access: "placeat",
                    AllowedIps: []string{
                        "ad",
                    },
                    LanIP: "blanditiis",
                    LocalPort: "porro",
                    Name: sdk.String("Pat Graham"),
                    Protocol: "numquam",
                    PublicPort: "enim",
                },
                operations.UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules{
                    Access: "cupiditate",
                    AllowedIps: []string{
                        "itaque",
                        "fuga",
                        "consectetur",
                    },
                    LanIP: "modi",
                    LocalPort: "aspernatur",
                    Name: sdk.String("Jeanette Beer"),
                    Protocol: "nobis",
                    PublicPort: "qui",
                },
                operations.UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules{
                    Access: "accusantium",
                    AllowedIps: []string{
                        "impedit",
                    },
                    LanIP: "recusandae",
                    LocalPort: "voluptate",
                    Name: sdk.String("Carlton Bosco"),
                    Protocol: "quos",
                    PublicPort: "maiores",
                },
            },
        },
        Serial: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkCellularGatewayConnectivityMonitoringDestinations

Update the connectivity testing destinations for an MG network

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
    res, err := s.CellularGateway.UpdateNetworkCellularGatewayConnectivityMonitoringDestinations(ctx, operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest{
        RequestBody: &operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody{
            Destinations: []UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations{
                operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations{
                    Default: sdk.Bool(false),
                    Description: sdk.String("culpa"),
                    IP: "doloremque",
                },
                operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations{
                    Default: sdk.Bool(false),
                    Description: sdk.String("fuga"),
                    IP: "dicta",
                },
            },
        },
        NetworkID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject != nil {
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
    res, err := s.CellularGateway.UpdateNetworkCellularGatewayDhcp(ctx, operations.UpdateNetworkCellularGatewayDhcpRequest{
        RequestBody: &operations.UpdateNetworkCellularGatewayDhcpRequestBody{
            DhcpLeaseTime: sdk.String("suscipit"),
            DNSCustomNameservers: []string{
                "officiis",
                "dignissimos",
                "fugit",
                "ratione",
            },
            DNSNameservers: sdk.String("possimus"),
        },
        NetworkID: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkCellularGatewayDhcp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkCellularGatewaySubnetPool

Update the subnet pool and mask configuration for MGs in the network.

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
    res, err := s.CellularGateway.UpdateNetworkCellularGatewaySubnetPool(ctx, operations.UpdateNetworkCellularGatewaySubnetPoolRequest{
        RequestBody: &operations.UpdateNetworkCellularGatewaySubnetPoolRequestBody{
            Cidr: sdk.String("aut"),
            Mask: sdk.Int64(620534),
        },
        NetworkID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkCellularGatewaySubnetPool200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkCellularGatewayUplink

Updates the uplink settings for your MG network.

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
    res, err := s.CellularGateway.UpdateNetworkCellularGatewayUplink(ctx, operations.UpdateNetworkCellularGatewayUplinkRequest{
        RequestBody: &operations.UpdateNetworkCellularGatewayUplinkRequestBody{
            BandwidthLimits: &operations.UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits{
                LimitDown: sdk.Int64(963908),
                LimitUp: sdk.Int64(644397),
            },
        },
        NetworkID: "ratione",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkCellularGatewayUplink200ApplicationJSONObject != nil {
        // handle response
    }
}
```
