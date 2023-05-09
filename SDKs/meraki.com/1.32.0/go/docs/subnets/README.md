# Subnets

### Available Operations

* [GetDeviceApplianceDhcpSubnets](#getdeviceappliancedhcpsubnets) - Return the DHCP subnet information for an appliance

## GetDeviceApplianceDhcpSubnets

Return the DHCP subnet information for an appliance

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
    res, err := s.Subnets.GetDeviceApplianceDhcpSubnets(ctx, operations.GetDeviceApplianceDhcpSubnetsRequest{
        Serial: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceApplianceDhcpSubnets200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
