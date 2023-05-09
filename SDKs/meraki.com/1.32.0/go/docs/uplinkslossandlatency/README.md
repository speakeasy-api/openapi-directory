# UplinksLossAndLatency

### Available Operations

* [GetOrganizationDevicesUplinksLossAndLatency](#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

## GetOrganizationDevicesUplinksLossAndLatency

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

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
    res, err := s.UplinksLossAndLatency.GetOrganizationDevicesUplinksLossAndLatency(ctx, operations.GetOrganizationDevicesUplinksLossAndLatencyRequest{
        IP: sdk.String("totam"),
        OrganizationID: "hic",
        T0: sdk.String("sit"),
        T1: sdk.String("saepe"),
        Timespan: sdk.Float32(9119.22),
        Uplink: operations.GetOrganizationDevicesUplinksLossAndLatencyUplinkEnumCellular.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesUplinksLossAndLatency200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
