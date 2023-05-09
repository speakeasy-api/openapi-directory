# Performance

### Available Operations

* [GetDeviceAppliancePerformance](#getdeviceapplianceperformance) - Return the performance score for a single MX

## GetDeviceAppliancePerformance

Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.

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
    res, err := s.Performance.GetDeviceAppliancePerformance(ctx, operations.GetDeviceAppliancePerformanceRequest{
        Serial: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceAppliancePerformance200ApplicationJSONObject != nil {
        // handle response
    }
}
```
