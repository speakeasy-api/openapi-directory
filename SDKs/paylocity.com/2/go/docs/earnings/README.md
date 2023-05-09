# Earnings

### Available Operations

* [AddOrUpdateAnEmployeeEarning](#addorupdateanemployeeearning) - Add/Update Earning
* [DeleteEarningByEarningCodeAndStartDate](#deleteearningbyearningcodeandstartdate) - Delete Earning by Earning Code and Start Date
* [GetAllEarnings](#getallearnings) - Get All Earnings
* [GetEarningByEarningCodeAndStartDate](#getearningbyearningcodeandstartdate) - Get Earning by Earning Code and Start Date
* [GetEarningsByEarningCode](#getearningsbyearningcode) - Get Earnings by Earning Code

## AddOrUpdateAnEmployeeEarning

Add/Update Earning API sends new or updated employee earnings information directly to Web Pay.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Earnings.AddOrUpdateAnEmployeeEarning(ctx, operations.AddOrUpdateAnEmployeeEarningRequest{
        CompanyID: "odit",
        Earning: shared.Earning{
            Agency: sdk.String("at"),
            Amount: sdk.Float64(8700.88),
            AnnualMaximum: sdk.Float64(9786.19),
            CalculationCode: sdk.String("molestiae"),
            CostCenter1: sdk.String("quod"),
            CostCenter2: sdk.String("quod"),
            CostCenter3: sdk.String("esse"),
            EarningCode: "totam",
            EffectiveDate: sdk.String("porro"),
            EndDate: sdk.String("dolorum"),
            Frequency: sdk.String("dicta"),
            Goal: sdk.Float64(7206.33),
            HoursOrUnits: sdk.Float64(6399.21),
            IsSelfInsured: sdk.Bool(false),
            JobCode: sdk.String("occaecati"),
            MiscellaneousInfo: sdk.String("fugit"),
            PaidTowardsGoal: sdk.Float64(5373.73),
            PayPeriodMaximum: sdk.Float64(9446.69),
            PayPeriodMinimum: sdk.Float64(7586.16),
            Rate: sdk.Float64(5218.48),
            RateCode: sdk.String("beatae"),
            StartDate: "commodi",
        },
        EmployeeID: "molestiae",
    }, operations.AddOrUpdateAnEmployeeEarningSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteEarningByEarningCodeAndStartDate

Delete Earning by Earning Code and Start Date

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
    res, err := s.Earnings.DeleteEarningByEarningCodeAndStartDate(ctx, operations.DeleteEarningByEarningCodeAndStartDateRequest{
        CompanyID: "modi",
        EarningCode: "qui",
        EmployeeID: "impedit",
        StartDate: "cum",
    }, operations.DeleteEarningByEarningCodeAndStartDateSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllEarnings

Get All Earnings returns all earnings for the selected employee.

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
    res, err := s.Earnings.GetAllEarnings(ctx, operations.GetAllEarningsRequest{
        CompanyID: "esse",
        EmployeeID: "ipsum",
    }, operations.GetAllEarningsSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Earnings != nil {
        // handle response
    }
}
```

## GetEarningByEarningCodeAndStartDate

Get Earnings returns the single earning with the provided earning code and start date for the selected employee.

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
    res, err := s.Earnings.GetEarningByEarningCodeAndStartDate(ctx, operations.GetEarningByEarningCodeAndStartDateRequest{
        CompanyID: "excepturi",
        EarningCode: "aspernatur",
        EmployeeID: "perferendis",
        StartDate: "ad",
    }, operations.GetEarningByEarningCodeAndStartDateSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Earning != nil {
        // handle response
    }
}
```

## GetEarningsByEarningCode

Get Earnings returns all earnings with the provided earning code for the selected employee.

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
    res, err := s.Earnings.GetEarningsByEarningCode(ctx, operations.GetEarningsByEarningCodeRequest{
        CompanyID: "natus",
        EarningCode: "sed",
        EmployeeID: "iste",
    }, operations.GetEarningsByEarningCodeSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Earnings != nil {
        // handle response
    }
}
```
