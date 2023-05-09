# SwitchStacks

### Available Operations

* [GetNetworkSwitchStacks](#getnetworkswitchstacks) - List the switch stacks in a network

## GetNetworkSwitchStacks

List the switch stacks in a network

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
    res, err := s.SwitchStacks.GetNetworkSwitchStacks(ctx, operations.GetNetworkSwitchStacksRequest{
        NetworkID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStacks200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
