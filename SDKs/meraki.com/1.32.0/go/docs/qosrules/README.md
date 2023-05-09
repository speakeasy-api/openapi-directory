# QosRules

### Available Operations

* [CreateNetworkSwitchQosRule](#createnetworkswitchqosrule) - Add a quality of service rule
* [DeleteNetworkSwitchQosRule](#deletenetworkswitchqosrule) - Delete a quality of service rule
* [GetNetworkSwitchQosRule](#getnetworkswitchqosrule) - Return a quality of service rule
* [GetNetworkSwitchQosRules](#getnetworkswitchqosrules) - List quality of service rules
* [GetNetworkSwitchQosRulesOrder](#getnetworkswitchqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [UpdateNetworkSwitchQosRule](#updatenetworkswitchqosrule) - Update a quality of service rule
* [UpdateNetworkSwitchQosRulesOrder](#updatenetworkswitchqosrulesorder) - Update the order in which the rules should be processed by the switch

## CreateNetworkSwitchQosRule

Add a quality of service rule

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
    res, err := s.QosRules.CreateNetworkSwitchQosRule(ctx, operations.CreateNetworkSwitchQosRuleRequest{
        RequestBody: operations.CreateNetworkSwitchQosRuleRequestBody{
            Dscp: sdk.Int64(440396),
            DstPort: sdk.Int64(948017),
            DstPortRange: sdk.String("fugiat"),
            Protocol: operations.CreateNetworkSwitchQosRuleRequestBodyProtocolEnumTCP.ToPointer(),
            SrcPort: sdk.Int64(734282),
            SrcPortRange: sdk.String("dolorum"),
            Vlan: 335665,
        },
        NetworkID: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchQosRule201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkSwitchQosRule

Delete a quality of service rule

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
    res, err := s.QosRules.DeleteNetworkSwitchQosRule(ctx, operations.DeleteNetworkSwitchQosRuleRequest{
        NetworkID: "necessitatibus",
        QosRuleID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkSwitchQosRule

Return a quality of service rule

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
    res, err := s.QosRules.GetNetworkSwitchQosRule(ctx, operations.GetNetworkSwitchQosRuleRequest{
        NetworkID: "enim",
        QosRuleID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchQosRule200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchQosRules

List quality of service rules

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
    res, err := s.QosRules.GetNetworkSwitchQosRules(ctx, operations.GetNetworkSwitchQosRulesRequest{
        NetworkID: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchQosRules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

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
    res, err := s.QosRules.GetNetworkSwitchQosRulesOrder(ctx, operations.GetNetworkSwitchQosRulesOrderRequest{
        NetworkID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchQosRulesOrder200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchQosRule

Update a quality of service rule

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
    res, err := s.QosRules.UpdateNetworkSwitchQosRule(ctx, operations.UpdateNetworkSwitchQosRuleRequest{
        RequestBody: &operations.UpdateNetworkSwitchQosRuleRequestBody{
            Dscp: sdk.Int64(789833),
            DstPort: sdk.Int64(191173),
            DstPortRange: sdk.String("corporis"),
            Protocol: operations.UpdateNetworkSwitchQosRuleRequestBodyProtocolEnumUDP.ToPointer(),
            SrcPort: sdk.Int64(524493),
            SrcPortRange: sdk.String("incidunt"),
            Vlan: sdk.Int64(459432),
        },
        NetworkID: "modi",
        QosRuleID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchQosRule200ApplicationJSONObject != nil {
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
    res, err := s.QosRules.UpdateNetworkSwitchQosRulesOrder(ctx, operations.UpdateNetworkSwitchQosRulesOrderRequest{
        RequestBody: operations.UpdateNetworkSwitchQosRulesOrderRequestBody{
            RuleIds: []string{
                "libero",
            },
        },
        NetworkID: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchQosRulesOrder200ApplicationJSONObject != nil {
        // handle response
    }
}
```
