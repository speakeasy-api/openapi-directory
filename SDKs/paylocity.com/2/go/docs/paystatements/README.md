# PayStatements

### Available Operations

* [GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear](#getsemployeepaystatementdetaildatabasedonthespecifiedyear) - Get employee pay statement details data for the specified year.
* [GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate](#getsemployeepaystatementdetaildatabasedonthespecifiedyearandcheckdate) - Get employee pay statement details data for the specified year and check date.
* [GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear](#getsemployeepaystatementsummarydatabasedonthespecifiedyear) - Get employee pay statement summary data for the specified year.
* [GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate](#getsemployeepaystatementsummarydatabasedonthespecifiedyearandcheckdate) - Get employee pay statement summary data for the specified year and check date.

## GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear

Get pay statement details API will return employee pay statement details data currently available in Web Pay for the specified year.

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
    res, err := s.PayStatements.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear(ctx, operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest{
        Codegroup: sdk.String("necessitatibus"),
        CompanyID: "nulla",
        EmployeeID: "consequatur",
        Includetotalcount: sdk.Bool(false),
        Pagenumber: sdk.Int64(97258),
        Pagesize: sdk.Int64(90233),
        Year: "ducimus",
    }, operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayStatementDetails != nil {
        // handle response
    }
}
```

## GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate

Get pay statement details API will return employee pay statement detail data currently available in Web Pay for the specified year and check date.

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
    res, err := s.PayStatements.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate(ctx, operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest{
        CheckDate: "natus",
        Codegroup: sdk.String("occaecati"),
        CompanyID: "suscipit",
        EmployeeID: "adipisci",
        Includetotalcount: sdk.Bool(false),
        Pagenumber: sdk.Int64(96562),
        Pagesize: sdk.Int64(169025),
        Year: "doloribus",
    }, operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayStatementDetails != nil {
        // handle response
    }
}
```

## GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear

Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year.

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
    res, err := s.PayStatements.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear(ctx, operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest{
        Codegroup: sdk.String("nulla"),
        CompanyID: "necessitatibus",
        EmployeeID: "ipsa",
        Includetotalcount: sdk.Bool(false),
        Pagenumber: sdk.Int64(271113),
        Pagesize: sdk.Int64(470621),
        Year: "molestiae",
    }, operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayStatementSummaries != nil {
        // handle response
    }
}
```

## GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate

Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year and check date.

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
    res, err := s.PayStatements.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate(ctx, operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest{
        CheckDate: "dicta",
        Codegroup: sdk.String("iusto"),
        CompanyID: "esse",
        EmployeeID: "praesentium",
        Includetotalcount: sdk.Bool(false),
        Pagenumber: sdk.Int64(979963),
        Pagesize: sdk.Int64(967260),
        Year: "vel",
    }, operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayStatementSummaries != nil {
        // handle response
    }
}
```
