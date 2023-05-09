# Vmx

### Available Operations

* [CreateDeviceApplianceVmxAuthenticationToken](#createdeviceappliancevmxauthenticationtoken) - Generate a new vMX authentication token

## CreateDeviceApplianceVmxAuthenticationToken

Generate a new vMX authentication token

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
    res, err := s.Vmx.CreateDeviceApplianceVmxAuthenticationToken(ctx, operations.CreateDeviceApplianceVmxAuthenticationTokenRequest{
        Serial: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeviceApplianceVmxAuthenticationToken201ApplicationJSONObject != nil {
        // handle response
    }
}
```
