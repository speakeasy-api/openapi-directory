# Two1UserStatisticsOptional

### Available Operations

* [UserStatisticeDailyValueV1StatisticsIndividualDaily](#userstatisticedailyvaluev1statisticsindividualdaily) - User statistice - Daily value - v1/Statistics/individual/daily
* [UserStatisticsAccumulatedValueV1StatisticsIndividual](#userstatisticsaccumulatedvaluev1statisticsindividual) - User statistics - Accumulated value - /v1/Statistics/individual

## UserStatisticeDailyValueV1StatisticsIndividualDaily

User statistice - Daily value - v1/Statistics/individual/daily

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
    res, err := s.Two1UserStatisticsOptional.UserStatisticeDailyValueV1StatisticsIndividualDaily(ctx, operations.UserStatisticeDailyValueV1StatisticsIndividualDailyRequest{
        EndDate: sdk.String("2021-03-30"),
        StartDate: sdk.String("2021-03-30"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UserStatisticsAccumulatedValueV1StatisticsIndividual

User statistics - Accumulated value - /v1/Statistics/individual

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
    res, err := s.Two1UserStatisticsOptional.UserStatisticsAccumulatedValueV1StatisticsIndividual(ctx, operations.UserStatisticsAccumulatedValueV1StatisticsIndividualRequest{
        EndDate: sdk.String("2021-01-30"),
        StartDate: sdk.String("2021-01-01"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSONObject != nil {
        // handle response
    }
}
```
