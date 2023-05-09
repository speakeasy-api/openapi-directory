# Claim

### Available Operations

* [VmxNetworkDevicesClaim](#vmxnetworkdevicesclaim) - Claim a vMX into a network

## VmxNetworkDevicesClaim

Claim a vMX into a network

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
    res, err := s.Claim.VmxNetworkDevicesClaim(ctx, operations.VmxNetworkDevicesClaimRequest{
        RequestBody: operations.VmxNetworkDevicesClaimRequestBody{
            Size: operations.VmxNetworkDevicesClaimRequestBodySizeEnumLarge,
        },
        NetworkID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VmxNetworkDevicesClaim200ApplicationJSONObject != nil {
        // handle response
    }
}
```
