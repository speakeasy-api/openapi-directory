# UplinkBandwidth

### Available Operations

* [GetNetworkApplianceTrafficShapingUplinkBandwidth](#getnetworkappliancetrafficshapinguplinkbandwidth) - Returns the uplink bandwidth limits for your MX network
* [UpdateNetworkApplianceTrafficShapingUplinkBandwidth](#updatenetworkappliancetrafficshapinguplinkbandwidth) - Updates the uplink bandwidth settings for your MX network.

## GetNetworkApplianceTrafficShapingUplinkBandwidth

Returns the uplink bandwidth limits for your MX network. This may not reflect the affected device's hardware capabilities.  For more information on your device's hardware capabilities, please consult our MX Family Datasheet - [https://meraki.cisco.com/product-collateral/mx-family-datasheet/?file]

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
    res, err := s.UplinkBandwidth.GetNetworkApplianceTrafficShapingUplinkBandwidth(ctx, operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest{
        NetworkID: "expedita",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceTrafficShapingUplinkBandwidth

Updates the uplink bandwidth settings for your MX network.

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
    res, err := s.UplinkBandwidth.UpdateNetworkApplianceTrafficShapingUplinkBandwidth(ctx, operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest{
        RequestBody: &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody{
            BandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits{
                Cellular: &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular{
                    LimitDown: sdk.Int64(961541),
                    LimitUp: sdk.Int64(437265),
                },
                Wan1: &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1{
                    LimitDown: sdk.Int64(256821),
                    LimitUp: sdk.Int64(457608),
                },
                Wan2: &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2{
                    LimitDown: sdk.Int64(134103),
                    LimitUp: sdk.Int64(425763),
                },
            },
        },
        NetworkID: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject != nil {
        // handle response
    }
}
```
