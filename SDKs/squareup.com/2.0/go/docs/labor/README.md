# Labor

### Available Operations

* [CreateBreakType](#createbreaktype) - CreateBreakType
* [CreateShift](#createshift) - CreateShift
* [DeleteBreakType](#deletebreaktype) - DeleteBreakType
* [DeleteShift](#deleteshift) - DeleteShift
* [GetBreakType](#getbreaktype) - GetBreakType
* [GetEmployeeWage](#getemployeewage) - GetEmployeeWage
* [GetShift](#getshift) - GetShift
* [GetTeamMemberWage](#getteammemberwage) - GetTeamMemberWage
* [ListBreakTypes](#listbreaktypes) - ListBreakTypes
* [ListEmployeeWages](#listemployeewages) - ListEmployeeWages
* [ListTeamMemberWages](#listteammemberwages) - ListTeamMemberWages
* [ListWorkweekConfigs](#listworkweekconfigs) - ListWorkweekConfigs
* [SearchShifts](#searchshifts) - SearchShifts
* [UpdateBreakType](#updatebreaktype) - UpdateBreakType
* [UpdateShift](#updateshift) - UpdateShift
* [UpdateWorkweekConfig](#updateworkweekconfig) - UpdateWorkweekConfig

## CreateBreakType

Creates a new `BreakType`.

A `BreakType` is a template for creating `Break` objects.
You must provide the following values in your request to this
endpoint:

- `location_id`
- `break_name`
- `expected_duration`
- `is_paid`

You can only have three `BreakType` instances per location. If you attempt to add a fourth
`BreakType` for a location, an `INVALID_REQUEST_ERROR` "Exceeded limit of 3 breaks per location."
is returned.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Labor.CreateBreakType(ctx, shared.CreateBreakTypeRequest{
        BreakType: shared.BreakType{
            BreakName: "quo",
            CreatedAt: sdk.String("ullam"),
            ExpectedDuration: "ipsa",
            ID: sdk.String("c8a3512c-7378-4489-b075-0a00e966ec73"),
            IsPaid: false,
            LocationID: "eum",
            UpdatedAt: sdk.String("possimus"),
            Version: sdk.Int64(295912),
        },
        IdempotencyKey: sdk.String("neque"),
    }, operations.CreateBreakTypeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBreakTypeResponse != nil {
        // handle response
    }
}
```

## CreateShift

Creates a new `Shift`.

A `Shift` represents a complete workday for a single employee.
You must provide the following values in your request to this
endpoint:

- `location_id`
- `employee_id`
- `start_at`

An attempt to create a new `Shift` can result in a `BAD_REQUEST` error when:
- The `status` of the new `Shift` is `OPEN` and the employee has another
shift with an `OPEN` status.
- The `start_at` date is in the future.
- The `start_at` or `end_at` date overlaps another shift for the same employee.
- The `Break` instances are set in the request and a break `start_at`
is before the `Shift.start_at`, a break `end_at` is after
the `Shift.end_at`, or both.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Labor.CreateShift(ctx, shared.CreateShiftRequest{
        IdempotencyKey: sdk.String("inventore"),
        Shift: shared.Shift{
            Breaks: []shared.Break{
                shared.Break{
                    BreakTypeID: "quaerat",
                    EndAt: sdk.String("nesciunt"),
                    ExpectedDuration: "omnis",
                    ID: sdk.String("8c783c92-398e-4d3d-bab7-ca3c5ca8649a"),
                    IsPaid: false,
                    Name: "Dorothy Rutherford",
                    StartAt: "veniam",
                },
                shared.Break{
                    BreakTypeID: "pariatur",
                    EndAt: sdk.String("commodi"),
                    ExpectedDuration: "iste",
                    ID: sdk.String("89b72064-5107-47d1-9ea8-3d492ed14b8a"),
                    IsPaid: false,
                    Name: "Bethany Casper",
                    StartAt: "magnam",
                },
                shared.Break{
                    BreakTypeID: "veniam",
                    EndAt: sdk.String("quaerat"),
                    ExpectedDuration: "minima",
                    ID: sdk.String("e955dcc1-85ea-4490-9c7c-43ad2daa784a"),
                    IsPaid: false,
                    Name: "Oliver Dibbert",
                    StartAt: "amet",
                },
            },
            CreatedAt: sdk.String("aut"),
            EmployeeID: sdk.String("voluptates"),
            EndAt: sdk.String("nulla"),
            ID: sdk.String("f73811a1-1538-42bd-bed5-6507621c58f4"),
            LocationID: sdk.String("nulla"),
            StartAt: "iusto",
            Status: sdk.String("adipisci"),
            TeamMemberID: sdk.String("provident"),
            Timezone: sdk.String("voluptas"),
            UpdatedAt: sdk.String("nostrum"),
            Version: sdk.Int64(431165),
            Wage: &shared.ShiftWage{
                HourlyRate: &shared.Money{
                    Amount: sdk.Int64(268168),
                    Currency: sdk.String("cumque"),
                },
                Title: sdk.String("Mr."),
            },
        },
    }, operations.CreateShiftSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateShiftResponse != nil {
        // handle response
    }
}
```

## DeleteBreakType

Deletes an existing `BreakType`.

A `BreakType` can be deleted even if it is referenced from a `Shift`.

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
    res, err := s.Labor.DeleteBreakType(ctx, operations.DeleteBreakTypeRequest{
        ID: "0a0711a9-61d2-44a7-9bb8-f532d892cf78",
    }, operations.DeleteBreakTypeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBreakTypeResponse != nil {
        // handle response
    }
}
```

## DeleteShift

Deletes a `Shift`.

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
    res, err := s.Labor.DeleteShift(ctx, operations.DeleteShiftRequest{
        ID: "12cb512c-8782-440b-b548-f88f8f1bf0bc",
    }, operations.DeleteShiftSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteShiftResponse != nil {
        // handle response
    }
}
```

## GetBreakType

Returns a single `BreakType` specified by `id`.

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
    res, err := s.Labor.GetBreakType(ctx, operations.GetBreakTypeRequest{
        ID: "8e1f206d-5d83-41d0-8810-90f6706673f3",
    }, operations.GetBreakTypeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBreakTypeResponse != nil {
        // handle response
    }
}
```

## GetEmployeeWage

Returns a single `EmployeeWage` specified by `id`.

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
    res, err := s.Labor.GetEmployeeWage(ctx, operations.GetEmployeeWageRequest{
        ID: "a681c576-8dce-4742-809a-215e08601489",
    }, operations.GetEmployeeWageSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEmployeeWageResponse != nil {
        // handle response
    }
}
```

## GetShift

Returns a single `Shift` specified by `id`.

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
    res, err := s.Labor.GetShift(ctx, operations.GetShiftRequest{
        ID: "a5f63e3a-f3dd-49dd-a33d-cd63483e4a7a",
    }, operations.GetShiftSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetShiftResponse != nil {
        // handle response
    }
}
```

## GetTeamMemberWage

Returns a single `TeamMemberWage` specified by `id `.

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
    res, err := s.Labor.GetTeamMemberWage(ctx, operations.GetTeamMemberWageRequest{
        ID: "98e4df37-e45b-4895-9d41-3e13a4823109",
    }, operations.GetTeamMemberWageSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTeamMemberWageResponse != nil {
        // handle response
    }
}
```

## ListBreakTypes

Returns a paginated list of `BreakType` instances for a business.

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
    res, err := s.Labor.ListBreakTypes(ctx, operations.ListBreakTypesRequest{
        Cursor: sdk.String("perferendis"),
        Limit: sdk.Int64(439135),
        LocationID: sdk.String("cum"),
    }, operations.ListBreakTypesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBreakTypesResponse != nil {
        // handle response
    }
}
```

## ListEmployeeWages

Returns a paginated list of `EmployeeWage` instances for a business.

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
    res, err := s.Labor.ListEmployeeWages(ctx, operations.ListEmployeeWagesRequest{
        Cursor: sdk.String("facere"),
        EmployeeID: sdk.String("ratione"),
        Limit: sdk.Int64(337161),
    }, operations.ListEmployeeWagesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEmployeeWagesResponse != nil {
        // handle response
    }
}
```

## ListTeamMemberWages

Returns a paginated list of `TeamMemberWage` instances for a business.

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
    res, err := s.Labor.ListTeamMemberWages(ctx, operations.ListTeamMemberWagesRequest{
        Cursor: sdk.String("modi"),
        Limit: sdk.Int64(780157),
        TeamMemberID: sdk.String("aut"),
    }, operations.ListTeamMemberWagesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTeamMemberWagesResponse != nil {
        // handle response
    }
}
```

## ListWorkweekConfigs

Returns a list of `WorkweekConfig` instances for a business.

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
    res, err := s.Labor.ListWorkweekConfigs(ctx, operations.ListWorkweekConfigsRequest{
        Cursor: sdk.String("cupiditate"),
        Limit: sdk.Int64(150639),
    }, operations.ListWorkweekConfigsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkweekConfigsResponse != nil {
        // handle response
    }
}
```

## SearchShifts

Returns a paginated list of `Shift` records for a business.
The list to be returned can be filtered by:
- Location IDs.
- Employee IDs.
- Shift status (`OPEN` and `CLOSED`).
- Shift start.
- Shift end.
- Workday details.

The list can be sorted by:
- `start_at`.
- `end_at`.
- `created_at`.
- `updated_at`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Labor.SearchShifts(ctx, shared.SearchShiftsRequest{
        Cursor: sdk.String("harum"),
        Limit: sdk.Int64(874446),
        Query: &shared.ShiftQuery{
            Filter: &shared.ShiftFilter{
                EmployeeIds: []string{
                    "velit",
                    "incidunt",
                },
                End: &shared.TimeRange{
                    EndAt: sdk.String("a"),
                    StartAt: sdk.String("consequatur"),
                },
                LocationIds: []string{
                    "numquam",
                },
                Start: &shared.TimeRange{
                    EndAt: sdk.String("numquam"),
                    StartAt: sdk.String("excepturi"),
                },
                Status: sdk.String("pariatur"),
                TeamMemberIds: []string{
                    "vel",
                    "delectus",
                    "modi",
                },
                Workday: &shared.ShiftWorkday{
                    DateRange: &shared.DateRange{
                        EndDate: sdk.String("expedita"),
                        StartDate: sdk.String("quidem"),
                    },
                    DefaultTimezone: sdk.String("consequuntur"),
                    MatchShiftsBy: sdk.String("eaque"),
                },
            },
            Sort: &shared.ShiftSort{
                Field: sdk.String("asperiores"),
                Order: sdk.String("debitis"),
            },
        },
    }, operations.SearchShiftsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchShiftsResponse != nil {
        // handle response
    }
}
```

## UpdateBreakType

Updates an existing `BreakType`.

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
    res, err := s.Labor.UpdateBreakType(ctx, operations.UpdateBreakTypeRequest{
        UpdateBreakTypeRequest: shared.UpdateBreakTypeRequest{
            BreakType: shared.BreakType{
                BreakName: "nostrum",
                CreatedAt: sdk.String("quibusdam"),
                ExpectedDuration: "provident",
                ID: sdk.String("11cbfe74-9caf-445a-a7f6-9e2c9e6d10e9"),
                IsPaid: false,
                LocationID: "temporibus",
                UpdatedAt: sdk.String("quidem"),
                Version: sdk.Int64(206011),
            },
        },
        ID: "ad4c6b03-108d-49c3-b747-3082b94f2ab1",
    }, operations.UpdateBreakTypeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBreakTypeResponse != nil {
        // handle response
    }
}
```

## UpdateShift

Updates an existing `Shift`.

When adding a `Break` to a `Shift`, any earlier `Break` instances in the `Shift` have
the `end_at` property set to a valid RFC-3339 datetime string.

When closing a `Shift`, all `Break` instances in the `Shift` must be complete with `end_at`
set on each `Break`.

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
    res, err := s.Labor.UpdateShift(ctx, operations.UpdateShiftRequest{
        UpdateShiftRequest: shared.UpdateShiftRequest{
            Shift: shared.Shift{
                Breaks: []shared.Break{
                    shared.Break{
                        BreakTypeID: "possimus",
                        EndAt: sdk.String("nemo"),
                        ExpectedDuration: "eum",
                        ID: sdk.String("71e9c326-350a-4467-9437-89ce0e991594"),
                        IsPaid: false,
                        Name: "Arturo Fay",
                        StartAt: "modi",
                    },
                    shared.Break{
                        BreakTypeID: "impedit",
                        EndAt: sdk.String("ipsa"),
                        ExpectedDuration: "dolores",
                        ID: sdk.String("52fe3b4b-4db8-4b77-8ebb-6e1d2cf502ba"),
                        IsPaid: false,
                        Name: "Ira Christiansen",
                        StartAt: "placeat",
                    },
                    shared.Break{
                        BreakTypeID: "aliquam",
                        EndAt: sdk.String("aliquid"),
                        ExpectedDuration: "adipisci",
                        ID: sdk.String("5d5e65da-028c-43e9-91a1-e30fda966489"),
                        IsPaid: false,
                        Name: "Adrian Reichert",
                        StartAt: "laboriosam",
                    },
                    shared.Break{
                        BreakTypeID: "odio",
                        EndAt: sdk.String("adipisci"),
                        ExpectedDuration: "necessitatibus",
                        ID: sdk.String("13a12a6b-9924-4945-9448-7f5c843836b8"),
                        IsPaid: false,
                        Name: "Opal Feest",
                        StartAt: "a",
                    },
                },
                CreatedAt: sdk.String("ex"),
                EmployeeID: sdk.String("dolore"),
                EndAt: sdk.String("dicta"),
                ID: sdk.String("5b0449f9-df13-4f4e-adbe-78bf60682589"),
                LocationID: sdk.String("eius"),
                StartAt: "necessitatibus",
                Status: sdk.String("culpa"),
                TeamMemberID: sdk.String("in"),
                Timezone: sdk.String("aliquid"),
                UpdatedAt: sdk.String("amet"),
                Version: sdk.Int64(853721),
                Wage: &shared.ShiftWage{
                    HourlyRate: &shared.Money{
                        Amount: sdk.Int64(358740),
                        Currency: sdk.String("impedit"),
                    },
                    Title: sdk.String("Ms."),
                },
            },
        },
        ID: "2795b785-148d-46d5-89e5-635b33bc0f97",
    }, operations.UpdateShiftSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateShiftResponse != nil {
        // handle response
    }
}
```

## UpdateWorkweekConfig

Updates a `WorkweekConfig`.

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
    res, err := s.Labor.UpdateWorkweekConfig(ctx, operations.UpdateWorkweekConfigRequest{
        UpdateWorkweekConfigRequest: shared.UpdateWorkweekConfigRequest{
            WorkweekConfig: shared.WorkweekConfig{
                CreatedAt: sdk.String("voluptatem"),
                ID: sdk.String("c42fc9f4-8442-425e-b5b7-96065c0efa6f"),
                StartOfDayLocalTime: "perspiciatis",
                StartOfWeek: "ratione",
                UpdatedAt: sdk.String("libero"),
                Version: sdk.Int64(563937),
            },
        },
        ID: "0a1b8c95-be12-454b-b39f-4fe77210d1f6",
    }, operations.UpdateWorkweekConfigSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWorkweekConfigResponse != nil {
        // handle response
    }
}
```
