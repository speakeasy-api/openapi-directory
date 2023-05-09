# Recent

### Available Operations

* [GetDeviceCameraAnalyticsRecent](#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones

## GetDeviceCameraAnalyticsRecent

Returns most recent record for analytics zones

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
    res, err := s.Recent.GetDeviceCameraAnalyticsRecent(ctx, operations.GetDeviceCameraAnalyticsRecentRequest{
        ObjectType: operations.GetDeviceCameraAnalyticsRecentObjectTypeEnumPerson.ToPointer(),
        Serial: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraAnalyticsRecent200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
