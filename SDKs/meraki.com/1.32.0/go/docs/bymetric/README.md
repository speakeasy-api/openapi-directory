# ByMetric

### Available Operations

* [GetNetworkSensorAlertsCurrentOverviewByMetric](#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [GetNetworkSensorAlertsOverviewByMetric](#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric

## GetNetworkSensorAlertsCurrentOverviewByMetric

Return an overview of currently alerting sensors by metric

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
    res, err := s.ByMetric.GetNetworkSensorAlertsCurrentOverviewByMetric(ctx, operations.GetNetworkSensorAlertsCurrentOverviewByMetricRequest{
        NetworkID: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSensorAlertsOverviewByMetric

Return an overview of alert occurrences over a timespan, by metric

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
    res, err := s.ByMetric.GetNetworkSensorAlertsOverviewByMetric(ctx, operations.GetNetworkSensorAlertsOverviewByMetricRequest{
        Interval: sdk.Int64(281454),
        NetworkID: "facere",
        T0: sdk.String("voluptas"),
        T1: sdk.String("doloribus"),
        Timespan: sdk.Float32(9260.27),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSensorAlertsOverviewByMetric200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
