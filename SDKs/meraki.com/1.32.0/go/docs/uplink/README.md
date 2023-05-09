# Uplink

### Available Operations

* [GetNetworkCellularGatewayUplink](#getnetworkcellulargatewayuplink) - Returns the uplink settings for your MG network.
* [GetOrganizationCellularGatewayUplinkStatuses](#getorganizationcellulargatewayuplinkstatuses) - List the uplink status of every Meraki MG cellular gateway in the organization
* [UpdateNetworkCellularGatewayUplink](#updatenetworkcellulargatewayuplink) - Updates the uplink settings for your MG network.

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
    res, err := s.Uplink.GetNetworkCellularGatewayUplink(ctx, operations.GetNetworkCellularGatewayUplinkRequest{
        NetworkID: "a",
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
    res, err := s.Uplink.GetOrganizationCellularGatewayUplinkStatuses(ctx, operations.GetOrganizationCellularGatewayUplinkStatusesRequest{
        EndingBefore: sdk.String("nisi"),
        Iccids: []string{
            "illo",
        },
        NetworkIds: []string{
            "possimus",
            "illo",
            "saepe",
        },
        OrganizationID: "exercitationem",
        PerPage: sdk.Int64(300946),
        Serials: []string{
            "minima",
        },
        StartingAfter: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationCellularGatewayUplinkStatuses200ApplicationJSONObjects != nil {
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
    res, err := s.Uplink.UpdateNetworkCellularGatewayUplink(ctx, operations.UpdateNetworkCellularGatewayUplinkRequest{
        RequestBody: &operations.UpdateNetworkCellularGatewayUplinkRequestBody{
            BandwidthLimits: &operations.UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits{
                LimitDown: sdk.Int64(391849),
                LimitUp: sdk.Int64(544707),
            },
        },
        NetworkID: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkCellularGatewayUplink200ApplicationJSONObject != nil {
        // handle response
    }
}
```
