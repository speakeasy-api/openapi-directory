# HealthByTime

### Available Operations

* [GetNetworkInsightApplicationHealthByTime](#getnetworkinsightapplicationhealthbytime) - Get application health by time

## GetNetworkInsightApplicationHealthByTime

Get application health by time

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
    res, err := s.HealthByTime.GetNetworkInsightApplicationHealthByTime(ctx, operations.GetNetworkInsightApplicationHealthByTimeRequest{
        ApplicationID: "optio",
        NetworkID: "beatae",
        Resolution: sdk.Int64(73989),
        T0: sdk.String("itaque"),
        T1: sdk.String("officia"),
        Timespan: sdk.Float32(2813.35),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkInsightApplicationHealthByTime200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
