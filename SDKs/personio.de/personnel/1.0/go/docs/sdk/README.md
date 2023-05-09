# SDK

## Overview

API for reading and writing personnel data incl. data about attendances and absences

### Available Operations

* [DeleteCompanyAttendancesID](#deletecompanyattendancesid) - This endpoint is responsible for deleting attendance data for the company employees.
* [DeleteCompanyTimeOffsID](#deletecompanytimeoffsid) - This endpoint is responsible for deleting absence period data for the company employees.
* [GetCompanyAttendances](#getcompanyattendances) - This endpoint is responsible for fetching attendance data for the company employees. It is possible to paginate results, filter by period, the date and/or time it was updated, and/or specific employees. The result will contain a list of attendance periods, structured as defined here.
* [GetCompanyEmployees](#getcompanyemployees) - List Employees
* [GetCompanyEmployeesEmployeeID](#getcompanyemployeesemployeeid) - Show employee by ID
* [GetCompanyEmployeesEmployeeIDProfilePictureWidth](#getcompanyemployeesemployeeidprofilepicturewidth) - Show employee profile picture
* [GetCompanyTimeOffTypes](#getcompanytimeofftypes) - Provides a list of available time-off types, for example 'Paid vacation', 'Parental leave' or 'Home office'
* [GetCompanyTimeOffs](#getcompanytimeoffs) - This endpoint is responsible for fetching absence data for the company employees. It is possible to paginate results, filter by period and/or specific employees. The result will contain a list of absence periods, structured as defined here.
* [GetCompanyTimeOffsID](#getcompanytimeoffsid) - Absence Period
* [PatchCompanyAttendancesID](#patchcompanyattendancesid) - This endpoint is responsible for updating attendance data for the company employees. Attributes are not required and if not specified, the current value will be used. It is not possible to change the employee id.
* [PostCompanyAttendances](#postcompanyattendances) - This endpoint is responsible for adding attendance data for the company employees. It is possible to add attendances for one or many employees at the same time. The payload sent on the request should be a list of attendance periods, in the form of an array containing attendance period objects.
* [PostCompanyEmployees](#postcompanyemployees) - Create an employee
* [PostCompanyTimeOffs](#postcompanytimeoffs) - This endpoint is responsible for adding absence data for the company employees.

## DeleteCompanyAttendancesID

This endpoint is responsible for deleting attendance data for the company employees.

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
    res, err := s.SDK.DeleteCompanyAttendancesID(ctx, operations.DeleteCompanyAttendancesIDRequest{
        ID: 592845,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
}
```

## DeleteCompanyTimeOffsID

This endpoint is responsible for deleting absence period data for the company employees.

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
    res, err := s.SDK.DeleteCompanyTimeOffsID(ctx, operations.DeleteCompanyTimeOffsIDRequest{
        ID: 715190,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
}
```

## GetCompanyAttendances

This endpoint is responsible for fetching attendance data for the company employees. It is possible to paginate results, filter by period, the date and/or time it was updated, and/or specific employees. The result will contain a list of attendance periods, structured as defined here.

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
    res, err := s.SDK.GetCompanyAttendances(ctx, operations.GetCompanyAttendancesRequest{
        Employees: []int64{
            602763,
            857946,
            544883,
            847252,
        },
        EndDate: types.MustDateFromString("2022-05-18"),
        Limit: sdk.Int64(645894),
        Offset: sdk.Int64(384382),
        StartDate: types.MustDateFromString("2022-09-14"),
        UpdatedFrom: sdk.String("debitis"),
        UpdatedTo: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AttendancePeriodsResponse != nil {
        // handle response
    }
}
```

## GetCompanyEmployees

List Employees

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetCompanyEmployees(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EmployeesResponse != nil {
        // handle response
    }
}
```

## GetCompanyEmployeesEmployeeID

Show employee by ID

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
    res, err := s.SDK.GetCompanyEmployeesEmployeeID(ctx, operations.GetCompanyEmployeesEmployeeIDRequest{
        EmployeeID: 963663,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmployeeResponse != nil {
        // handle response
    }
}
```

## GetCompanyEmployeesEmployeeIDProfilePictureWidth

Show employee profile picture

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
    res, err := s.SDK.GetCompanyEmployeesEmployeeIDProfilePictureWidth(ctx, operations.GetCompanyEmployeesEmployeeIDProfilePictureWidthRequest{
        EmployeeID: 272656,
        Width: 383441,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCompanyEmployeesEmployeeIDProfilePictureWidth200ImagePngBinaryString != nil {
        // handle response
    }
}
```

## GetCompanyTimeOffTypes

Provides a list of available time-off types, for example 'Paid vacation', 'Parental leave' or 'Home office'

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
    res, err := s.SDK.GetCompanyTimeOffTypes(ctx, operations.GetCompanyTimeOffTypesRequest{
        Limit: sdk.Int64(477665),
        Offset: sdk.Int64(791725),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCompanyTimeOffTypes200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetCompanyTimeOffs

This endpoint is responsible for fetching absence data for the company employees. It is possible to paginate results, filter by period and/or specific employees. The result will contain a list of absence periods, structured as defined here.

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
    res, err := s.SDK.GetCompanyTimeOffs(ctx, operations.GetCompanyTimeOffsRequest{
        Employees: []int64{
            528895,
            479977,
            568045,
            392785,
        },
        EndDate: types.MustDateFromString("2020-06-29"),
        Limit: sdk.Int64(71036),
        Offset: sdk.Int64(337396),
        StartDate: types.MustDateFromString("2022-05-09"),
        UpdatedFrom: sdk.String("perferendis"),
        UpdatedTo: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AbsencePeriodsResponse != nil {
        // handle response
    }
}
```

## GetCompanyTimeOffsID

Absence Period

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
    res, err := s.SDK.GetCompanyTimeOffsID(ctx, operations.GetCompanyTimeOffsIDRequest{
        ID: 832620,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AbsencePeriodResponse != nil {
        // handle response
    }
}
```

## PatchCompanyAttendancesID

This endpoint is responsible for updating attendance data for the company employees. Attributes are not required and if not specified, the current value will be used. It is not possible to change the employee id.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PatchCompanyAttendancesID(ctx, operations.PatchCompanyAttendancesIDRequest{
        UpdateAttendancePeriodRequest: shared.UpdateAttendancePeriodRequest{
            Break: sdk.Int(957156),
            Comment: sdk.String("quo"),
            Date: types.MustDateFromString("2022-02-17"),
            EndTime: sdk.String("at"),
            StartTime: sdk.String("maiores"),
        },
        ID: 473608,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
}
```

## PostCompanyAttendances

This endpoint is responsible for adding attendance data for the company employees. It is possible to add attendances for one or many employees at the same time. The payload sent on the request should be a list of attendance periods, in the form of an array containing attendance period objects.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostCompanyAttendances(ctx, shared.NewAttendancePeriodRequest{
        Attendances: []shared.NewAttendancePeriodRequestAttendances{
            shared.NewAttendancePeriodRequestAttendances{
                Break: 800911,
                Comment: "esse",
                Date: types.MustDateFromString("2021-06-10"),
                Employee: 678880,
                EndTime: "dicta",
                StartTime: "nam",
            },
            shared.NewAttendancePeriodRequestAttendances{
                Break: 639921,
                Comment: "occaecati",
                Date: types.MustDateFromString("2022-06-18"),
                Employee: 944669,
                EndTime: "optio",
                StartTime: "totam",
            },
            shared.NewAttendancePeriodRequestAttendances{
                Break: 105907,
                Comment: "commodi",
                Date: types.MustDateFromString("2022-09-26"),
                Employee: 186332,
                EndTime: "impedit",
                StartTime: "cum",
            },
            shared.NewAttendancePeriodRequestAttendances{
                Break: 456150,
                Comment: "ipsum",
                Date: types.MustDateFromString("2022-09-24"),
                Employee: 18789,
                EndTime: "ad",
                StartTime: "natus",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NewAttendancePeriodResponse != nil {
        // handle response
    }
}
```

## PostCompanyEmployees

Creates new employee. Status of the employee will be set to `active` if `hire_date` provided is in past. Otherwise status will be set to `onboarding`. This endpoint will respond with `id` of created employee in case of success.


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
    res, err := s.SDK.PostCompanyEmployees(ctx, operations.PostCompanyEmployeesRequestBody{
        EmployeeDepartment: sdk.String("sed"),
        EmployeeEmail: "iste",
        EmployeeFirstName: "dolor",
        EmployeeGender: operations.PostCompanyEmployeesRequestBodyEmployeeGenderEnumFemale.ToPointer(),
        EmployeeHireDate: types.MustDateFromString("2022-01-21"),
        EmployeeLastName: "saepe",
        EmployeePosition: sdk.String("fuga"),
        EmployeeWeeklyHours: sdk.Float64(4499.5),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
}
```

## PostCompanyTimeOffs

This endpoint is responsible for adding absence data for the company employees.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostCompanyTimeOffs(ctx, shared.CreateTimeOffPeriodRequest{
        Comment: sdk.String("corporis"),
        EmployeeID: 613064,
        EndDate: types.MustDateFromString("2022-02-05"),
        HalfDayEnd: false,
        HalfDayStart: false,
        StartDate: types.MustDateFromString("2022-10-20"),
        TimeOffTypeID: 60225,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostCompanyTimeOffs201ApplicationJSONObject != nil {
        // handle response
    }
}
```
