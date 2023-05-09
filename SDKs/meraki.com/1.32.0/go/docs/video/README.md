# Video

### Available Operations

* [GetDeviceCameraVideoSettings](#getdevicecameravideosettings) - Returns video settings for the given camera
* [UpdateDeviceCameraVideoSettings](#updatedevicecameravideosettings) - Update video settings for the given camera

## GetDeviceCameraVideoSettings

Returns video settings for the given camera

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
    res, err := s.Video.GetDeviceCameraVideoSettings(ctx, operations.GetDeviceCameraVideoSettingsRequest{
        Serial: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraVideoSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCameraVideoSettings

Update video settings for the given camera

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
    res, err := s.Video.UpdateDeviceCameraVideoSettings(ctx, operations.UpdateDeviceCameraVideoSettingsRequest{
        RequestBody: &operations.UpdateDeviceCameraVideoSettingsRequestBody{
            ExternalRtspEnabled: sdk.Bool(false),
        },
        Serial: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCameraVideoSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```
