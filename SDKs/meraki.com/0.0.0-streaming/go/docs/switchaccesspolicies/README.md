# SwitchAccessPolicies

### Available Operations

* [GetNetworkAccessPolicies](#getnetworkaccesspolicies) - List the access policies for this network

## GetNetworkAccessPolicies

List the access policies for this network. Only valid for MS networks.

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
    res, err := s.SwitchAccessPolicies.GetNetworkAccessPolicies(ctx, operations.GetNetworkAccessPoliciesRequest{
        NetworkID: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAccessPolicies200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
