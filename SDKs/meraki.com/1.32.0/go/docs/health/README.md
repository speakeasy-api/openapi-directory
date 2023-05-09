# Health

### Available Operations

* [GetNetworkHealthAlerts](#getnetworkhealthalerts) - Return all global alerts on this network

## GetNetworkHealthAlerts

Return all global alerts on this network

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
    res, err := s.Health.GetNetworkHealthAlerts(ctx, operations.GetNetworkHealthAlertsRequest{
        NetworkID: "expedita",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkHealthAlerts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
