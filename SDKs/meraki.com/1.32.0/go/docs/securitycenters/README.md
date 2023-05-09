# SecurityCenters

### Available Operations

* [GetNetworkSmDeviceSecurityCenters](#getnetworksmdevicesecuritycenters) - List the security centers on a device

## GetNetworkSmDeviceSecurityCenters

List the security centers on a device

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
    res, err := s.SecurityCenters.GetNetworkSmDeviceSecurityCenters(ctx, operations.GetNetworkSmDeviceSecurityCentersRequest{
        DeviceID: "sapiente",
        NetworkID: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceSecurityCenters200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
