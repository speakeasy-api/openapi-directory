# Stats

### Available Operations

* [GetCommissionStats](#getcommissionstats) - Returns the total commissions stats.
* [GetCommissionStatsByFilter](#getcommissionstatsbyfilter) - Returns the total commissions stats by report filter.
* [GetPopularPairs](#getpopularpairs) - View your popular language pairs
* [GetProjectStats](#getprojectstats) - View your project statistics
* [GetStringStats](#getstringstats) - View your translation statistics

## GetCommissionStats

Returns the total commissions stats.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Stats.GetCommissionStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CommissionStats != nil {
        // handle response
    }
}
```

## GetCommissionStatsByFilter

Returns the total commissions stats by report filter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Stats.GetCommissionStatsByFilter(ctx, shared.ReportFilter{
        BudgetCode: sdk.String("architecto"),
        DateFrom: types.MustTimeFromString("2021-02-09T22:19:01.627Z"),
        DateTo: types.MustTimeFromString("2022-02-17T15:16:49.489Z"),
        SourceLanguages: []string{
            "voluptate",
        },
        TargetLanguages: []string{
            "minima",
        },
        Users: []int64{
            232744,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommissionStats != nil {
        // handle response
    }
}
```

## GetPopularPairs

View your popular language pairs

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Stats.GetPopularPairs(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PopularLanguagePairs != nil {
        // handle response
    }
}
```

## GetProjectStats

View your project statistics

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Stats.GetProjectStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientProjectStats != nil {
        // handle response
    }
}
```

## GetStringStats

View your translation statistics

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Stats.GetStringStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientStringStats != nil {
        // handle response
    }
}
```
