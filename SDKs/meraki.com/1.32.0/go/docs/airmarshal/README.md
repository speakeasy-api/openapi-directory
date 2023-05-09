# AirMarshal

### Available Operations

* [GetNetworkWirelessAirMarshal](#getnetworkwirelessairmarshal) - List Air Marshal scan results from a network

## GetNetworkWirelessAirMarshal

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
    res, err := s.AirMarshal.GetNetworkWirelessAirMarshal(ctx, operations.GetNetworkWirelessAirMarshalRequest{
        NetworkID: "molestias",
        T0: sdk.String("magnam"),
        Timespan: sdk.Float32(9063.55),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessAirMarshal200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
