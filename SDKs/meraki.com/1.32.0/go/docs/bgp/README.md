# Bgp

### Available Operations

* [GetNetworkApplianceVpnBgp](#getnetworkappliancevpnbgp) - Return a Hub BGP Configuration
* [UpdateNetworkApplianceVpnBgp](#updatenetworkappliancevpnbgp) - Update a Hub BGP Configuration

## GetNetworkApplianceVpnBgp

Return a Hub BGP Configuration

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
    res, err := s.Bgp.GetNetworkApplianceVpnBgp(ctx, operations.GetNetworkApplianceVpnBgpRequest{
        NetworkID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceVpnBgp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceVpnBgp

Update a Hub BGP Configuration

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
    res, err := s.Bgp.UpdateNetworkApplianceVpnBgp(ctx, operations.UpdateNetworkApplianceVpnBgpRequest{
        RequestBody: operations.UpdateNetworkApplianceVpnBgpRequestBody{
            AsNumber: sdk.Int64(16252),
            Enabled: false,
            IbgpHoldTimer: sdk.Int64(369941),
            Neighbors: []UpdateNetworkApplianceVpnBgpRequestBodyNeighbors{
                operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors{
                    AllowTransit: sdk.Bool(false),
                    EbgpHoldTimer: 584640,
                    EbgpMultihop: 442873,
                    IP: sdk.String("quia"),
                    Ipv6: &operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6{
                        Address: "033 Cara Manor",
                    },
                    ReceiveLimit: sdk.Int64(152742),
                    RemoteAsNumber: 140439,
                },
                operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors{
                    AllowTransit: sdk.Bool(false),
                    EbgpHoldTimer: 479830,
                    EbgpMultihop: 712893,
                    IP: sdk.String("eos"),
                    Ipv6: &operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6{
                        Address: "105 Jacques Burgs",
                    },
                    ReceiveLimit: sdk.Int64(718119),
                    RemoteAsNumber: 956545,
                },
                operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors{
                    AllowTransit: sdk.Bool(false),
                    EbgpHoldTimer: 463050,
                    EbgpMultihop: 667169,
                    IP: sdk.String("aliquam"),
                    Ipv6: &operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6{
                        Address: "654 Wolff Highway",
                    },
                    ReceiveLimit: sdk.Int64(247767),
                    RemoteAsNumber: 353819,
                },
            },
        },
        NetworkID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceVpnBgp200ApplicationJSONObject != nil {
        // handle response
    }
}
```
