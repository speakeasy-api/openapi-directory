# Traffic

### Available Operations

* [GetNetworkTraffic](#getnetworktraffic) - Return the traffic analysis data for this network

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
    res, err := s.Traffic.GetNetworkTraffic(ctx, operations.GetNetworkTrafficRequest{
        DeviceType: operations.GetNetworkTrafficDeviceTypeEnumSwitch.ToPointer(),
        NetworkID: "voluptatem",
        T0: sdk.String("sapiente"),
        Timespan: sdk.Float32(8539.23),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkTraffic200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
