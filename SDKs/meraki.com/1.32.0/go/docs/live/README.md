# Live

### Available Operations

* [GetDeviceCameraAnalyticsLive](#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones

## GetDeviceCameraAnalyticsLive

Returns live state from camera of analytics zones

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
    res, err := s.Live.GetDeviceCameraAnalyticsLive(ctx, operations.GetDeviceCameraAnalyticsLiveRequest{
        Serial: "veniam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraAnalyticsLive200ApplicationJSONObject != nil {
        // handle response
    }
}
```
