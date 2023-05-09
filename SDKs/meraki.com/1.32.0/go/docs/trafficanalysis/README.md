# TrafficAnalysis

### Available Operations

* [GetNetworkTrafficAnalysis](#getnetworktrafficanalysis) - Return the traffic analysis settings for a network
* [UpdateNetworkTrafficAnalysis](#updatenetworktrafficanalysis) - Update the traffic analysis settings for a network

## GetNetworkTrafficAnalysis

Return the traffic analysis settings for a network

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
    res, err := s.TrafficAnalysis.GetNetworkTrafficAnalysis(ctx, operations.GetNetworkTrafficAnalysisRequest{
        NetworkID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkTrafficAnalysis200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkTrafficAnalysis

Update the traffic analysis settings for a network

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
    res, err := s.TrafficAnalysis.UpdateNetworkTrafficAnalysis(ctx, operations.UpdateNetworkTrafficAnalysisRequest{
        RequestBody: &operations.UpdateNetworkTrafficAnalysisRequestBody{
            CustomPieChartItems: []UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems{
                operations.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems{
                    Name: "Adam Hane",
                    Type: operations.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnumIPRange,
                    Value: "iusto",
                },
            },
            Mode: operations.UpdateNetworkTrafficAnalysisRequestBodyModeEnumDisabled.ToPointer(),
        },
        NetworkID: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkTrafficAnalysis200ApplicationJSONObject != nil {
        // handle response
    }
}
```
