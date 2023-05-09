# PayRun

### Available Operations

* [DeletePayRun](#deletepayrun) - Deletes a pay run
* [DeletePayRunEmployee](#deletepayrunemployee) - Deletes a pay run employee
* [GetAEAssessmentsFromPayRun](#getaeassessmentsfrompayrun) - Get the auto enrolment assessments
* [GetAllPayRunTags](#getallpayruntags) - Get all pay run tags
* [GetCommentariesFromPayRun](#getcommentariesfrompayrun) - Get links to all commentaries for the specified pay run
* [GetCommentaryFromPayRunByEmployee](#getcommentaryfrompayrunbyemployee) - Get commentary from payrun by specified employee.
* [GetEmployeesFromPayRun](#getemployeesfrompayrun) - Get employees from the pay run
* [GetPayRunFromPaySchedule](#getpayrunfrompayschedule) - Gets the pay run from the pay schedule
* [GetPayRunsFromEmployee](#getpayrunsfromemployee) - Gets the pay runs from the employee
* [GetPayRunsFromPaySchedule](#getpayrunsfrompayschedule) - Gets the pay runs from the pay schedule
* [GetPayRunsWithTag](#getpayrunswithtag) - Get pay runs with tag
* [GetReportLinesFromPayRun](#getreportlinesfrompayrun) - Gets the report lines from the specified pay run

## DeletePayRun

Delete the specified pay run

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
    res, err := s.PayRun.DeletePayRun(ctx, operations.DeletePayRunRequest{
        APIVersion: "dignissimos",
        Authorization: "optio",
        EmployerID: "necessitatibus",
        PayRunID: "corporis",
        PayScheduleID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePayRunEmployee

Delete pay run results for a single employee

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
    res, err := s.PayRun.DeletePayRunEmployee(ctx, operations.DeletePayRunEmployeeRequest{
        APIVersion: "expedita",
        Authorization: "voluptatum",
        EmployeeID: "cupiditate",
        EmployerID: "minima",
        PayRunID: "placeat",
        PayScheduleID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAEAssessmentsFromPayRun

Gets all auto enrolment assessments from the specified pay run

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
    res, err := s.PayRun.GetAEAssessmentsFromPayRun(ctx, operations.GetAEAssessmentsFromPayRunRequest{
        APIVersion: "neque",
        Authorization: "in",
        EmployerID: "minus",
        PayRunID: "eum",
        PayScheduleID: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetAllPayRunTags

Gets all the pay run tags

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
    res, err := s.PayRun.GetAllPayRunTags(ctx, operations.GetAllPayRunTagsRequest{
        APIVersion: "corporis",
        Authorization: "magnam",
        EmployerID: "voluptates",
        PayScheduleID: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetCommentariesFromPayRun

Get links to all commentaries for the specified pay run.

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
    res, err := s.PayRun.GetCommentariesFromPayRun(ctx, operations.GetCommentariesFromPayRunRequest{
        APIVersion: "tempore",
        Authorization: "aperiam",
        EmployerID: "libero",
        PayRunID: "ratione",
        PayScheduleID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetCommentaryFromPayRunByEmployee

Get commentary from payrun by specified employee.

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
    res, err := s.PayRun.GetCommentaryFromPayRunByEmployee(ctx, operations.GetCommentaryFromPayRunByEmployeeRequest{
        APIVersion: "totam",
        Authorization: "occaecati",
        EmployeeID: "voluptas",
        EmployerID: "quo",
        PayRunID: "velit",
        PayScheduleID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Commentary != nil {
        // handle response
    }
}
```

## GetEmployeesFromPayRun

Gets links to all employees included in the specified pay run.

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
    res, err := s.PayRun.GetEmployeesFromPayRun(ctx, operations.GetEmployeesFromPayRunRequest{
        APIVersion: "fuga",
        Authorization: "nostrum",
        EmployerID: "est",
        PayRunID: "impedit",
        PayScheduleID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetPayRunFromPaySchedule

Returns the pay run from the pay schedule

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
    res, err := s.PayRun.GetPayRunFromPaySchedule(ctx, operations.GetPayRunFromPayScheduleRequest{
        APIVersion: "tempore",
        Authorization: "vero",
        EmployerID: "odit",
        PayRunID: "repellat",
        PayScheduleID: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayRun != nil {
        // handle response
    }
}
```

## GetPayRunsFromEmployee

Get links to all pay runs for the specified employee.

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
    res, err := s.PayRun.GetPayRunsFromEmployee(ctx, operations.GetPayRunsFromEmployeeRequest{
        APIVersion: "nemo",
        Authorization: "reprehenderit",
        EmployeeID: "aperiam",
        EmployerID: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetPayRunsFromPaySchedule

Get links to all pay runs for the specified pay schedule

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
    res, err := s.PayRun.GetPayRunsFromPaySchedule(ctx, operations.GetPayRunsFromPayScheduleRequest{
        APIVersion: "minima",
        Authorization: "in",
        EmployerID: "ducimus",
        PayScheduleID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetPayRunsWithTag

Gets the pay runs with the tag

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
    res, err := s.PayRun.GetPayRunsWithTag(ctx, operations.GetPayRunsWithTagRequest{
        APIVersion: "dolores",
        Authorization: "error",
        EmployerID: "veritatis",
        PayScheduleID: "ducimus",
        TagID: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetReportLinesFromPayRun

Returns all report lines associated with the specified pay run

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
    res, err := s.PayRun.GetReportLinesFromPayRun(ctx, operations.GetReportLinesFromPayRunRequest{
        APIVersion: "pariatur",
        Authorization: "itaque",
        EmployerID: "similique",
        PayRunID: "optio",
        PayScheduleID: "ex",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```
