# Billing

### Available Operations

* [GetNetworkWirelessBilling](#getnetworkwirelessbilling) - Return the billing settings of this network
* [UpdateNetworkWirelessBilling](#updatenetworkwirelessbilling) - Update the billing settings

## GetNetworkWirelessBilling

Return the billing settings of this network

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
    res, err := s.Billing.GetNetworkWirelessBilling(ctx, operations.GetNetworkWirelessBillingRequest{
        NetworkID: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessBilling200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessBilling

Update the billing settings

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
    res, err := s.Billing.UpdateNetworkWirelessBilling(ctx, operations.UpdateNetworkWirelessBillingRequest{
        RequestBody: &operations.UpdateNetworkWirelessBillingRequestBody{
            Currency: sdk.String("doloribus"),
            Plans: []UpdateNetworkWirelessBillingRequestBodyPlans{
                operations.UpdateNetworkWirelessBillingRequestBodyPlans{
                    BandwidthLimits: operations.UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits{
                        LimitDown: sdk.Int64(925994),
                        LimitUp: sdk.Int64(359453),
                    },
                    ID: sdk.String("4ebf60c3-21f0-423b-b5d2-367fe1a0cc8d"),
                    Price: 9804.67,
                    TimeLimit: operations.UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnumOneHour,
                },
                operations.UpdateNetworkWirelessBillingRequestBodyPlans{
                    BandwidthLimits: operations.UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits{
                        LimitDown: sdk.Int64(588662),
                        LimitUp: sdk.Int64(960933),
                    },
                    ID: sdk.String("0a396d90-c364-4b7c-95df-bace188b1c4e"),
                    Price: 9205.48,
                    TimeLimit: operations.UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnumOneDay,
                },
                operations.UpdateNetworkWirelessBillingRequestBodyPlans{
                    BandwidthLimits: operations.UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits{
                        LimitDown: sdk.Int64(772628),
                        LimitUp: sdk.Int64(558283),
                    },
                    ID: sdk.String("c6ce611f-eeb1-4c7c-bdb6-eec74378ba25"),
                    Price: 1939.9,
                    TimeLimit: operations.UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnumOneDay,
                },
            },
        },
        NetworkID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessBilling200ApplicationJSONObject != nil {
        // handle response
    }
}
```
