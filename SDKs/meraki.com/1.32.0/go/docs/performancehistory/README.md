# PerformanceHistory

### Available Operations

* [GetNetworkSmDevicePerformanceHistory](#getnetworksmdeviceperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.

## GetNetworkSmDevicePerformanceHistory

Return historical records of various Systems Manager client metrics for desktop devices.

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
    res, err := s.PerformanceHistory.GetNetworkSmDevicePerformanceHistory(ctx, operations.GetNetworkSmDevicePerformanceHistoryRequest{
        DeviceID: "consectetur",
        EndingBefore: sdk.String("suscipit"),
        NetworkID: "modi",
        PerPage: sdk.Int64(524154),
        StartingAfter: sdk.String("aut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDevicePerformanceHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
