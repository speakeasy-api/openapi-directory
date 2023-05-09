# CellularUsageHistory

### Available Operations

* [GetNetworkSmDeviceCellularUsageHistory](#getnetworksmdevicecellularusagehistory) - Return the client's daily cellular data usage history

## GetNetworkSmDeviceCellularUsageHistory

Return the client's daily cellular data usage history. Usage data is in kilobytes.

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
    res, err := s.CellularUsageHistory.GetNetworkSmDeviceCellularUsageHistory(ctx, operations.GetNetworkSmDeviceCellularUsageHistoryRequest{
        DeviceID: "ipsa",
        NetworkID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceCellularUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
