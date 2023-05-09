# Restrictions

### Available Operations

* [GetNetworkSmDeviceRestrictions](#getnetworksmdevicerestrictions) - List the restrictions on a device

## GetNetworkSmDeviceRestrictions

List the restrictions on a device

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
    res, err := s.Restrictions.GetNetworkSmDeviceRestrictions(ctx, operations.GetNetworkSmDeviceRestrictionsRequest{
        DeviceID: "facere",
        NetworkID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceRestrictions200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
