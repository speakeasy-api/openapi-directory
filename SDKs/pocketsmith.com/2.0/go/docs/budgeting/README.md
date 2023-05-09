# Budgeting

### Available Operations

* [DeleteUsersIDForecastCache](#deleteusersidforecastcache) - Delete forecast cache for user
* [GetUsersIDBudget](#getusersidbudget) - List budget for user
* [GetUsersIDBudgetSummary](#getusersidbudgetsummary) - Get budget summary for user
* [GetUsersIDTrendAnalysis](#getusersidtrendanalysis) - Get trend analysis for user

## DeleteUsersIDForecastCache

Delete the user's cached forecast by recalculating the forecast.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Budgeting.DeleteUsersIDForecastCache(ctx, operations.DeleteUsersIDForecastCacheRequest{
        ID: 264555,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUsersIDBudget

Lists the user's budget, consisting of one or more budget analysis packages, one per category. Akin to the list on the Budget page in PocketSmith.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Budgeting.GetUsersIDBudget(ctx, operations.GetUsersIDBudgetRequest{
        ID: 186332,
        RollUp: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BudgetAnalysisPackages != nil {
        // handle response
    }
}
```

## GetUsersIDBudgetSummary

Get the user's budget summary, containing an expense and income analysis for all categories (excluding transfer categories) for the given period and date range. Akin to the overall budget shown on the Budget page in PocketSmith.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Budgeting.GetUsersIDBudgetSummary(ctx, operations.GetUsersIDBudgetSummaryRequest{
        EndDate: "impedit",
        ID: 736918,
        Interval: 456150,
        Period: operations.GetUsersIDBudgetSummaryPeriodEnumWeeks,
        StartDate: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BudgetAnalysisPackages != nil {
        // handle response
    }
}
```

## GetUsersIDTrendAnalysis

Get an income and/or expense budget analysis for the given date range and period across any number of categories and scenarios. Akin to the Trends page in PocketSmith.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Budgeting.GetUsersIDTrendAnalysis(ctx, operations.GetUsersIDTrendAnalysisRequest{
        Categories: "aspernatur",
        EndDate: "perferendis",
        ID: 324141,
        Interval: 617636,
        Period: operations.GetUsersIDTrendAnalysisPeriodEnumWeeks,
        Scenarios: "iste",
        StartDate: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BudgetAnalysisPackages != nil {
        // handle response
    }
}
```
