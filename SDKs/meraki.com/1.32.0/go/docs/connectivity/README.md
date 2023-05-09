# Connectivity

### Available Operations

* [GetNetworkSmDeviceConnectivity](#getnetworksmdeviceconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

## GetNetworkSmDeviceConnectivity

Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

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
    res, err := s.Connectivity.GetNetworkSmDeviceConnectivity(ctx, operations.GetNetworkSmDeviceConnectivityRequest{
        DeviceID: "ducimus",
        EndingBefore: sdk.String("dolor"),
        NetworkID: "magnam",
        PerPage: sdk.Int64(439123),
        StartingAfter: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceConnectivity200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
