# PaySchedule

### Available Operations

* [DeletePaySchedule](#deletepayschedule) - Deletes a pay schedule
* [GetAllPayScheduleTags](#getallpayscheduletags) - Get all pay schedule tags
* [GetEmployeesFromPaySchedule](#getemployeesfrompayschedule) - Get all employees revisions from a pay schedule.
* [GetEmployeesFromPayScheduleOnEffectiveDate](#getemployeesfrompayscheduleoneffectivedate) - Get employees from a pay schedule on effective date.
* [GetPayRunFromPaySchedule](#getpayrunfrompayschedule) - Gets the pay run from the pay schedule
* [GetPayRunsFromPaySchedule](#getpayrunsfrompayschedule) - Gets the pay runs from the pay schedule
* [GetPayScheduleFromEmployer](#getpayschedulefromemployer) - Gets the specified pay schedule from the employer
* [GetPaySchedulesFromEmployer](#getpayschedulesfromemployer) - Gets the pay schedule from the specified employer
* [GetPaySchedulesWithTag](#getpayscheduleswithtag) - Get pay schedule with tag
* [PostPaySchedule](#postpayschedule) - Create a new pay schedule
* [PutPaySchedule](#putpayschedule) - Updates a pay schedule

## DeletePaySchedule

Delete the specified pay schedule

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
    res, err := s.PaySchedule.DeletePaySchedule(ctx, operations.DeletePayScheduleRequest{
        APIVersion: "quaerat",
        Authorization: "commodi",
        EmployerID: "officiis",
        PayScheduleID: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllPayScheduleTags

Gets all the pay schedule tags

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
    res, err := s.PaySchedule.GetAllPayScheduleTags(ctx, operations.GetAllPayScheduleTagsRequest{
        APIVersion: "quidem",
        Authorization: "exercitationem",
        EmployerID: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployeesFromPaySchedule

Gets links to all employee revisions that have ever existed in the specified pay schedule.

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
    res, err := s.PaySchedule.GetEmployeesFromPaySchedule(ctx, operations.GetEmployeesFromPayScheduleRequest{
        APIVersion: "dolorem",
        Authorization: "modi",
        EmployerID: "ipsa",
        PayScheduleID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployeesFromPayScheduleOnEffectiveDate

Gets links to all employee revisions in the specified pay schedule for the given effective date.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PaySchedule.GetEmployeesFromPayScheduleOnEffectiveDate(ctx, operations.GetEmployeesFromPayScheduleOnEffectiveDateRequest{
        APIVersion: "vero",
        Authorization: "sequi",
        EffectiveDate: types.MustDateFromString("2020-10-11"),
        EmployerID: "dicta",
        PayScheduleID: "earum",
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
    res, err := s.PaySchedule.GetPayRunFromPaySchedule(ctx, operations.GetPayRunFromPayScheduleRequest{
        APIVersion: "veniam",
        Authorization: "animi",
        EmployerID: "dolores",
        PayRunID: "nam",
        PayScheduleID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayRun != nil {
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
    res, err := s.PaySchedule.GetPayRunsFromPaySchedule(ctx, operations.GetPayRunsFromPayScheduleRequest{
        APIVersion: "consequuntur",
        Authorization: "necessitatibus",
        EmployerID: "nobis",
        PayScheduleID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetPayScheduleFromEmployer

Returns the specified pay schedule object from employer

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
    res, err := s.PaySchedule.GetPayScheduleFromEmployer(ctx, operations.GetPayScheduleFromEmployerRequest{
        APIVersion: "ducimus",
        Authorization: "maiores",
        EmployerID: "veritatis",
        PayScheduleID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaySchedule != nil {
        // handle response
    }
}
```

## GetPaySchedulesFromEmployer

Get links to all pay schedules for the specified employer

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
    res, err := s.PaySchedule.GetPaySchedulesFromEmployer(ctx, operations.GetPaySchedulesFromEmployerRequest{
        APIVersion: "laboriosam",
        Authorization: "pariatur",
        EmployerID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetPaySchedulesWithTag

Gets the pay schedules with the tag

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
    res, err := s.PaySchedule.GetPaySchedulesWithTag(ctx, operations.GetPaySchedulesWithTagRequest{
        APIVersion: "excepturi",
        Authorization: "occaecati",
        EmployerID: "nemo",
        TagID: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PostPaySchedule

Create a new pay schedule object

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
    res, err := s.PaySchedule.PostPaySchedule(ctx, operations.PostPayScheduleRequest{
        APIVersion: "nostrum",
        Authorization: "doloribus",
        EmployerID: "eligendi",
        PaySchedule: shared.PaySchedule{
            PaySchedule: &shared.PaySchedulePaySchedule{
                MetaData: map[string]interface{}{
                    "enim": "hic",
                    "animi": "quas",
                    "totam": "molestias",
                },
                Name: sdk.String("Ms. Jessica Turcotte"),
                PayFrequency: shared.PaySchedulePaySchedulePayFrequencyEnumYearly.ToPointer(),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PutPaySchedule

Updates the existing specified pay schedule object

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
    res, err := s.PaySchedule.PutPaySchedule(ctx, operations.PutPayScheduleRequest{
        APIVersion: "tempore",
        Authorization: "libero",
        EmployerID: "velit",
        PaySchedule: shared.PaySchedule{
            PaySchedule: &shared.PaySchedulePaySchedule{
                MetaData: map[string]interface{}{
                    "delectus": "impedit",
                },
                Name: sdk.String("Dale Ferry"),
                PayFrequency: shared.PaySchedulePaySchedulePayFrequencyEnumWeekly.ToPointer(),
            },
        },
        PayScheduleID: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaySchedule != nil {
        // handle response
    }
}
```
