# ConsolidatedSafeScoring

### Available Operations

* [RootV1ScoringsConsolidated](#rootv1scoringsconsolidated) - /v1/Scorings/consolidated
* [RootV1ScoringsConsolidatedDaily](#rootv1scoringsconsolidateddaily) - /v1/Scorings/consolidated/daily

## RootV1ScoringsConsolidated

/v1/Scorings/consolidated

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
    res, err := s.ConsolidatedSafeScoring.RootV1ScoringsConsolidated(ctx, operations.RootV1ScoringsConsolidatedRequest{
        AppID: sdk.String("nisi"),
        CompanyID: sdk.String("recusandae"),
        DeviceToken: sdk.String("temporibus"),
        EndDate: sdk.String("2021-01-18T01:04:22.840Z"),
        InstanceID: sdk.String("ab"),
        StartDate: sdk.String("2021-01-17T01:04:22.840Z"),
        Tag: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RootV1ScoringsConsolidatedDaily

/v1/Scorings/consolidated/daily

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
    res, err := s.ConsolidatedSafeScoring.RootV1ScoringsConsolidatedDaily(ctx, operations.RootV1ScoringsConsolidatedDailyRequest{
        AppID: sdk.String("veritatis"),
        CompanyID: sdk.String("deserunt"),
        DeviceToken: sdk.String("perferendis"),
        EndDate: sdk.String("2021-01-18T01:04:22.840Z"),
        InstanceID: sdk.String("ipsam"),
        StartDate: sdk.String("2021-01-17T01:04:22.840Z"),
        Tag: sdk.String("repellendus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RootV1ScoringsConsolidatedDaily200ApplicationJSONObject != nil {
        // handle response
    }
}
```
