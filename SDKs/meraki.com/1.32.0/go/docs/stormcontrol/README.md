# StormControl

### Available Operations

* [GetNetworkSwitchStormControl](#getnetworkswitchstormcontrol) - Return the storm control configuration for a switch network
* [UpdateNetworkSwitchStormControl](#updatenetworkswitchstormcontrol) - Update the storm control configuration for a switch network

## GetNetworkSwitchStormControl

Return the storm control configuration for a switch network

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
    res, err := s.StormControl.GetNetworkSwitchStormControl(ctx, operations.GetNetworkSwitchStormControlRequest{
        NetworkID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStormControl200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchStormControl

Update the storm control configuration for a switch network

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
    res, err := s.StormControl.UpdateNetworkSwitchStormControl(ctx, operations.UpdateNetworkSwitchStormControlRequest{
        RequestBody: &operations.UpdateNetworkSwitchStormControlRequestBody{
            BroadcastThreshold: sdk.Int64(239772),
            MulticastThreshold: sdk.Int64(118343),
            UnknownUnicastThreshold: sdk.Int64(300375),
        },
        NetworkID: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchStormControl200ApplicationJSONObject != nil {
        // handle response
    }
}
```
