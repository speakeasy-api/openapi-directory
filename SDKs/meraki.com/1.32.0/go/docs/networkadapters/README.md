# NetworkAdapters

### Available Operations

* [GetNetworkSmDeviceNetworkAdapters](#getnetworksmdevicenetworkadapters) - List the network adapters of a device

## GetNetworkSmDeviceNetworkAdapters

List the network adapters of a device

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
    res, err := s.NetworkAdapters.GetNetworkSmDeviceNetworkAdapters(ctx, operations.GetNetworkSmDeviceNetworkAdaptersRequest{
        DeviceID: "architecto",
        NetworkID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceNetworkAdapters200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
