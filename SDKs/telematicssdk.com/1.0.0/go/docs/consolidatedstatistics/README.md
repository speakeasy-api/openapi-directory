# ConsolidatedStatistics

### Available Operations

* [RootV1StatisticsConsolidated](#rootv1statisticsconsolidated) - /v1/Statistics/consolidated
* [RootV1StatisticsConsolidatedDaily](#rootv1statisticsconsolidateddaily) - /v1/Statistics/consolidated/daily

## RootV1StatisticsConsolidated

/v1/Statistics/consolidated

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ConsolidatedStatistics.RootV1StatisticsConsolidated(ctx, operations.RootV1StatisticsConsolidatedRequest{
        AppID: sdk.String("sapiente"),
        CompanyID: sdk.String("quo"),
        DeviceToken: sdk.String("odit"),
        EndDate: sdk.String("2021-03-18"),
        InstanceID: sdk.String("at"),
        StartDate: sdk.String("2021-01-18"),
        Tag: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RootV1StatisticsConsolidatedDaily

/v1/Statistics/consolidated/daily

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ConsolidatedStatistics.RootV1StatisticsConsolidatedDaily(ctx, operations.RootV1StatisticsConsolidatedDailyRequest{
        AppID: sdk.String("maiores"),
        CompanyID: sdk.String("molestiae"),
        DeviceToken: sdk.String("quod"),
        EndDate: sdk.String("2021-01-18"),
        InstanceID: sdk.String("quod"),
        StartDate: sdk.String("2021-01-17"),
        Tag: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
