# WlanLists

### Available Operations

* [GetNetworkSmDeviceWlanLists](#getnetworksmdevicewlanlists) - List the saved SSID names on a device

## GetNetworkSmDeviceWlanLists

List the saved SSID names on a device

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
    res, err := s.WlanLists.GetNetworkSmDeviceWlanLists(ctx, operations.GetNetworkSmDeviceWlanListsRequest{
        DeviceID: "deserunt",
        NetworkID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceWlanLists200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
