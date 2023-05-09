# StatsFindMarketplaceStatistics

### Available Operations

* [GetStatsSeriesPeriodFields](#getstatsseriesperiodfields) - Return a timeseries for a particular field
* [GetStatsTotal](#getstatstotal) - Returns the total number of events for a particular field.
* [PostStatsIncrementField](#poststatsincrementfield) - Increments a statistics field

## GetStatsSeriesPeriodFields

Return a timeseries nested array containing date and value. Example: [[1406520000000,2],[1406606400000,34],[1406692800000,245],...]

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.StatsFindMarketplaceStatistics.GetStatsSeriesPeriodFields(ctx, operations.GetStatsSeriesPeriodFieldsRequest{
        End: sdk.Int64(230533),
        Fields: "deserunt",
        Period: operations.GetStatsSeriesPeriodFieldsPeriodEnumDay,
        Query: sdk.String("vel"),
        Start: sdk.Int64(618809),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetStatsTotal

Returns the total number of events for a particular field.

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.StatsFindMarketplaceStatistics.GetStatsTotal(ctx, operations.GetStatsTotalRequest{
        End: sdk.Int64(606393),
        Fields: "molestiae",
        Query: sdk.String("perferendis"),
        Start: sdk.Int64(470132),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostStatsIncrementField

increment a statistics field

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.StatsFindMarketplaceStatistics.PostStatsIncrementField(ctx, operations.PostStatsIncrementFieldRequest{
        AppID: "magnam",
        Date: sdk.Int64(716075),
        Field: "id",
        UserID: sdk.String("labore"),
        Value: sdk.Int64(290077),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
