# Topology

### Available Operations

* [GetNetworkTopologyLinkLayer](#getnetworktopologylinklayer) - List the LLDP and CDP information for all discovered devices and connections in a network.

## GetNetworkTopologyLinkLayer

List the LLDP and CDP information for all discovered devices and connections in a network.

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
    res, err := s.Topology.GetNetworkTopologyLinkLayer(ctx, operations.GetNetworkTopologyLinkLayerRequest{
        NetworkID: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkTopologyLinkLayer200ApplicationJSONObject != nil {
        // handle response
    }
}
```
