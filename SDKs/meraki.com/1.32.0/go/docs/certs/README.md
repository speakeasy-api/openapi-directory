# Certs

### Available Operations

* [GetNetworkSmDeviceCerts](#getnetworksmdevicecerts) - List the certs on a device

## GetNetworkSmDeviceCerts

List the certs on a device

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
    res, err := s.Certs.GetNetworkSmDeviceCerts(ctx, operations.GetNetworkSmDeviceCertsRequest{
        DeviceID: "iste",
        NetworkID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceCerts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
