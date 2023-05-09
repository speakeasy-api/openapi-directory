# UserAccessDevices

### Available Operations

* [DeleteNetworkSmUserAccessDevice](#deletenetworksmuseraccessdevice) - Delete a User Access Device
* [GetNetworkSmUserAccessDevices](#getnetworksmuseraccessdevices) - List User Access Devices and its Trusted Access Connections

## DeleteNetworkSmUserAccessDevice

Delete a User Access Device

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
    res, err := s.UserAccessDevices.DeleteNetworkSmUserAccessDevice(ctx, operations.DeleteNetworkSmUserAccessDeviceRequest{
        NetworkID: "accusamus",
        UserAccessDeviceID: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkSmUserAccessDevices

List User Access Devices and its Trusted Access Connections

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
    res, err := s.UserAccessDevices.GetNetworkSmUserAccessDevices(ctx, operations.GetNetworkSmUserAccessDevicesRequest{
        EndingBefore: sdk.String("debitis"),
        NetworkID: "earum",
        PerPage: sdk.Int64(434673),
        StartingAfter: sdk.String("soluta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmUserAccessDevices200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
