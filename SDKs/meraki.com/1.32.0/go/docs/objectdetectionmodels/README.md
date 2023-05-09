# ObjectDetectionModels

### Available Operations

* [GetDeviceCameraSenseObjectDetectionModels](#getdevicecamerasenseobjectdetectionmodels) - Returns the MV Sense object detection model list for the given camera

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
    res, err := s.ObjectDetectionModels.GetDeviceCameraSenseObjectDetectionModels(ctx, operations.GetDeviceCameraSenseObjectDetectionModelsRequest{
        Serial: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraSenseObjectDetectionModels200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
