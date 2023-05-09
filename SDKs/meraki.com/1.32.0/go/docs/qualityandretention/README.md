# QualityAndRetention

### Available Operations

* [GetDeviceCameraQualityAndRetention](#getdevicecameraqualityandretention) - Returns quality and retention settings for the given camera
* [UpdateDeviceCameraQualityAndRetention](#updatedevicecameraqualityandretention) - Update quality and retention settings for the given camera

## GetDeviceCameraQualityAndRetention

Returns quality and retention settings for the given camera

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
    res, err := s.QualityAndRetention.GetDeviceCameraQualityAndRetention(ctx, operations.GetDeviceCameraQualityAndRetentionRequest{
        Serial: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraQualityAndRetention200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCameraQualityAndRetention

Update quality and retention settings for the given camera

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
    res, err := s.QualityAndRetention.UpdateDeviceCameraQualityAndRetention(ctx, operations.UpdateDeviceCameraQualityAndRetentionRequest{
        RequestBody: &operations.UpdateDeviceCameraQualityAndRetentionRequestBody{
            AudioRecordingEnabled: sdk.Bool(false),
            MotionBasedRetentionEnabled: sdk.Bool(false),
            MotionDetectorVersion: operations.UpdateDeviceCameraQualityAndRetentionRequestBodyMotionDetectorVersionEnumTwo.ToPointer(),
            ProfileID: sdk.String("cupiditate"),
            Quality: operations.UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnumEnhanced.ToPointer(),
            Resolution: operations.UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnumThreeThousandEightHundredAndFortyx2160.ToPointer(),
            RestrictedBandwidthModeEnabled: sdk.Bool(false),
        },
        Serial: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCameraQualityAndRetention200ApplicationJSONObject != nil {
        // handle response
    }
}
```
