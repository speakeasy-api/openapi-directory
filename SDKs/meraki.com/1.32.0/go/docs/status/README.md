# Status

### Available Operations

* [GetDeviceWirelessStatus](#getdevicewirelessstatus) - Return the SSID statuses of an access point

## GetDeviceWirelessStatus

Return the SSID statuses of an access point

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
    res, err := s.Status.GetDeviceWirelessStatus(ctx, operations.GetDeviceWirelessStatusRequest{
        Serial: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceWirelessStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```
