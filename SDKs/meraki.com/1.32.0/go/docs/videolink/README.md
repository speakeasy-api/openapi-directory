# VideoLink

### Available Operations

* [GetDeviceCameraVideoLink](#getdevicecameravideolink) - Returns video link to the specified camera

## GetDeviceCameraVideoLink

Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.VideoLink.GetDeviceCameraVideoLink(ctx, operations.GetDeviceCameraVideoLinkRequest{
        Serial: "ullam",
        Timestamp: types.MustTimeFromString("2022-09-02T15:27:52.184Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraVideoLink200ApplicationJSONObject != nil {
        // handle response
    }
}
```
