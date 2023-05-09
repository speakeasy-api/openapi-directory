# Sense

### Available Operations

* [GetDeviceCameraSense](#getdevicecamerasense) - Returns sense settings for a given camera
* [GetDeviceCameraSenseObjectDetectionModels](#getdevicecamerasenseobjectdetectionmodels) - Returns the MV Sense object detection model list for the given camera
* [UpdateDeviceCameraSense](#updatedevicecamerasense) - Update sense settings for the given camera

## GetDeviceCameraSense

Returns sense settings for a given camera

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
    res, err := s.Sense.GetDeviceCameraSense(ctx, operations.GetDeviceCameraSenseRequest{
        Serial: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraSense200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCameraSenseObjectDetectionModels

Returns the MV Sense object detection model list for the given camera

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
    res, err := s.Sense.GetDeviceCameraSenseObjectDetectionModels(ctx, operations.GetDeviceCameraSenseObjectDetectionModelsRequest{
        Serial: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraSenseObjectDetectionModels200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateDeviceCameraSense

Update sense settings for the given camera

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
    res, err := s.Sense.UpdateDeviceCameraSense(ctx, operations.UpdateDeviceCameraSenseRequest{
        RequestBody: &operations.UpdateDeviceCameraSenseRequestBody{
            AudioDetection: &operations.UpdateDeviceCameraSenseRequestBodyAudioDetection{
                Enabled: sdk.Bool(false),
            },
            DetectionModelID: sdk.String("officia"),
            MqttBrokerID: sdk.String("reprehenderit"),
            SenseEnabled: sdk.Bool(false),
        },
        Serial: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCameraSense200ApplicationJSONObject != nil {
        // handle response
    }
}
```
