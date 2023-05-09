# DesktopLogs

### Available Operations

* [GetNetworkSmDeviceDesktopLogs](#getnetworksmdevicedesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.

## GetNetworkSmDeviceDesktopLogs

Return historical records of various Systems Manager network connection details for desktop devices.

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
    res, err := s.DesktopLogs.GetNetworkSmDeviceDesktopLogs(ctx, operations.GetNetworkSmDeviceDesktopLogsRequest{
        DeviceID: "illum",
        EndingBefore: sdk.String("neque"),
        NetworkID: "commodi",
        PerPage: sdk.Int64(85354),
        StartingAfter: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceDesktopLogs200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
