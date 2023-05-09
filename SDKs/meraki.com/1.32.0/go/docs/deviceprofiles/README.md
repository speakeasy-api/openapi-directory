# DeviceProfiles

### Available Operations

* [GetNetworkSmDeviceDeviceProfiles](#getnetworksmdevicedeviceprofiles) - Get the installed profiles associated with a device
* [GetNetworkSmUserDeviceProfiles](#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user

## GetNetworkSmDeviceDeviceProfiles

Get the installed profiles associated with a device

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
    res, err := s.DeviceProfiles.GetNetworkSmDeviceDeviceProfiles(ctx, operations.GetNetworkSmDeviceDeviceProfilesRequest{
        DeviceID: "nemo",
        NetworkID: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceDeviceProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmUserDeviceProfiles

Get the profiles associated with a user

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
    res, err := s.DeviceProfiles.GetNetworkSmUserDeviceProfiles(ctx, operations.GetNetworkSmUserDeviceProfilesRequest{
        NetworkID: "a",
        UserID: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmUserDeviceProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
