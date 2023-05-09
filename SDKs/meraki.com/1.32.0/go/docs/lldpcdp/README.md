# LldpCdp

### Available Operations

* [GetDeviceLldpCdp](#getdevicelldpcdp) - List LLDP and CDP information for a device

## GetDeviceLldpCdp

List LLDP and CDP information for a device

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
    res, err := s.LldpCdp.GetDeviceLldpCdp(ctx, operations.GetDeviceLldpCdpRequest{
        Serial: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceLldpCdp200ApplicationJSONObject != nil {
        // handle response
    }
}
```
