# Order

### Available Operations

* [GetNetworkSwitchQosRulesOrder](#getnetworkswitchqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [UpdateNetworkSwitchQosRulesOrder](#updatenetworkswitchqosrulesorder) - Update the order in which the rules should be processed by the switch

## GetNetworkSwitchQosRulesOrder

Return the quality of service rule IDs by order in which they will be processed by the switch

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
    res, err := s.Order.GetNetworkSwitchQosRulesOrder(ctx, operations.GetNetworkSwitchQosRulesOrderRequest{
        NetworkID: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchQosRulesOrder200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchQosRulesOrder

Update the order in which the rules should be processed by the switch

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
    res, err := s.Order.UpdateNetworkSwitchQosRulesOrder(ctx, operations.UpdateNetworkSwitchQosRulesOrderRequest{
        RequestBody: operations.UpdateNetworkSwitchQosRulesOrderRequestBody{
            RuleIds: []string{
                "voluptatum",
                "fugiat",
                "nobis",
            },
        },
        NetworkID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchQosRulesOrder200ApplicationJSONObject != nil {
        // handle response
    }
}
```
