# Cameras

### Available Operations

* [GenerateNetworkCameraSnapshot](#generatenetworkcamerasnapshot) - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* [GetDeviceCameraVideoSettings](#getdevicecameravideosettings) - Returns video settings for the given camera
* [GetNetworkCameraSchedules](#getnetworkcameraschedules) - Returns a list of all camera recording schedules.
* [GetNetworkCameraVideoLink](#getnetworkcameravideolink) - Returns video link to the specified camera
* [UpdateDeviceCameraVideoSettings](#updatedevicecameravideosettings) - Update video settings for the given camera

## GenerateNetworkCameraSnapshot

Generate a snapshot of what the camera sees at the specified time and return a link to that image.

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
    res, err := s.Cameras.GenerateNetworkCameraSnapshot(ctx, operations.GenerateNetworkCameraSnapshotRequest{
        RequestBody: &operations.GenerateNetworkCameraSnapshotRequestBody{
            Fullframe: sdk.Bool(false),
            Timestamp: types.MustTimeFromString("2021-05-02T21:10:21.125Z"),
        },
        NetworkID: "porro",
        Serial: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateNetworkCameraSnapshot202ApplicationJSONObject != nil {
        // handle response
    }
}
```

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
    res, err := s.Cameras.GetDeviceCameraVideoSettings(ctx, operations.GetDeviceCameraVideoSettingsRequest{
        Serial: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraVideoSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkCameraSchedules

Returns a list of all camera recording schedules.

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
    res, err := s.Cameras.GetNetworkCameraSchedules(ctx, operations.GetNetworkCameraSchedulesRequest{
        NetworkID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCameraSchedules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkCameraVideoLink

Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.

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
    res, err := s.Cameras.GetNetworkCameraVideoLink(ctx, operations.GetNetworkCameraVideoLinkRequest{
        NetworkID: "cupiditate",
        Serial: "qui",
        Timestamp: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCameraVideoLink200ApplicationJSONObject != nil {
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
    res, err := s.Cameras.UpdateDeviceCameraVideoSettings(ctx, operations.UpdateDeviceCameraVideoSettingsRequest{
        RequestBody: &operations.UpdateDeviceCameraVideoSettingsRequestBody{
            ExternalRtspEnabled: sdk.Bool(false),
        },
        Serial: "laudantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCameraVideoSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```
