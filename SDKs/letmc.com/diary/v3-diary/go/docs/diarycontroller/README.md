# DiaryController

### Available Operations

* [DiaryControllerAddFeedbackForm](#diarycontrolleraddfeedbackform) - Submit appointment feedback
* [DiaryControllerAddFeedbackJSON](#diarycontrolleraddfeedbackjson) - Submit appointment feedback
* [DiaryControllerAddFeedbackRaw](#diarycontrolleraddfeedbackraw) - Submit appointment feedback
* [DiaryControllerCancelAppointment](#diarycontrollercancelappointment) - Cancel an existing appointment using its unique identifier
* [DiaryControllerDeleteAppointment](#diarycontrollerdeleteappointment) - Delete an existing appointment using its unique identifier
* [DiaryControllerGetAllocations](#diarycontrollergetallocations) - Get a list of all available allocations for a date + 7 days for a specified appointment type
* [DiaryControllerGetAppointment](#diarycontrollergetappointment) - Get an appointment by ID
* [DiaryControllerGetAppointmentTypes](#diarycontrollergetappointmenttypes) - A collection of all diary appointment types
* [DiaryControllerGetAppointmentsBetweenDates](#diarycontrollergetappointmentsbetweendates) - A collection of diary appointments linked to a company filtered between specific dates and by appointment type
* [DiaryControllerGetRecurringAppointments](#diarycontrollergetrecurringappointments) - Retrieves all recurring appointments:-
* [DiaryControllerPostAppointmentForm](#diarycontrollerpostappointmentform) - Post an appointment into a valid diary allocation
* [DiaryControllerPostAppointmentJSON](#diarycontrollerpostappointmentjson) - Post an appointment into a valid diary allocation
* [DiaryControllerPostAppointmentRaw](#diarycontrollerpostappointmentraw) - Post an appointment into a valid diary allocation
* [DiaryControllerPutAppointmentForm](#diarycontrollerputappointmentform) - Update an existing appointment using its unique identifier
* [DiaryControllerPutAppointmentJSON](#diarycontrollerputappointmentjson) - Update an existing appointment using its unique identifier
* [DiaryControllerPutAppointmentRaw](#diarycontrollerputappointmentraw) - Update an existing appointment using its unique identifier
* [DiaryControllerSearchGuest](#diarycontrollersearchguest) - Match Guest Parameters with existing applicants

## DiaryControllerAddFeedbackForm

Submit appointment feedback

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
    res, err := s.DiaryController.DiaryControllerAddFeedbackForm(ctx, operations.DiaryControllerAddFeedbackFormRequest{
        FeedbackSubmissionModel: shared.FeedbackSubmissionModel{
            AppointmentID: sdk.String("vel"),
            Feedback: sdk.String("error"),
            PropertyID: sdk.String("deserunt"),
        },
        ShortName: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiaryControllerAddFeedbackForm200ApplicationJSONString != nil {
        // handle response
    }
}
```

## DiaryControllerAddFeedbackJSON

Submit appointment feedback

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
    res, err := s.DiaryController.DiaryControllerAddFeedbackJSON(ctx, operations.DiaryControllerAddFeedbackJSONRequest{
        FeedbackSubmissionModel: shared.FeedbackSubmissionModel{
            AppointmentID: sdk.String("iure"),
            Feedback: sdk.String("magnam"),
            PropertyID: sdk.String("debitis"),
        },
        ShortName: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiaryControllerAddFeedbackJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## DiaryControllerAddFeedbackRaw

Submit appointment feedback

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
    res, err := s.DiaryController.DiaryControllerAddFeedbackRaw(ctx, operations.DiaryControllerAddFeedbackRawRequest{
        RequestBody: []byte("delectus"),
        ShortName: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiaryControllerAddFeedbackRaw200ApplicationJSONString != nil {
        // handle response
    }
}
```

## DiaryControllerCancelAppointment

Cancel an existing appointment using its unique identifier

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
    res, err := s.DiaryController.DiaryControllerCancelAppointment(ctx, operations.DiaryControllerCancelAppointmentRequest{
        AppointmentID: "suscipit",
        ShortName: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiaryControllerCancelAppointment200ApplicationJSONString != nil {
        // handle response
    }
}
```

## DiaryControllerDeleteAppointment

Delete an existing appointment using its unique identifier

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
    res, err := s.DiaryController.DiaryControllerDeleteAppointment(ctx, operations.DiaryControllerDeleteAppointmentRequest{
        AppointmentID: "minus",
        ShortName: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiaryControllerDeleteAppointment200ApplicationJSONString != nil {
        // handle response
    }
}
```

## DiaryControllerGetAllocations

Get a list of all available allocations for a date + 7 days for a specified appointment type

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
    res, err := s.DiaryController.DiaryControllerGetAllocations(ctx, operations.DiaryControllerGetAllocationsRequest{
        AppointmentType: "voluptatum",
        BranchID: sdk.String("iusto"),
        Lettings: sdk.Bool(false),
        PreferredDate: types.MustTimeFromString("2022-03-20T06:24:36.919Z"),
        PropertyIdentifier: sdk.String("recusandae"),
        ShortName: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiaryBookingModels != nil {
        // handle response
    }
}
```

## DiaryControllerGetAppointment

Get an appointment by ID

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
    res, err := s.DiaryController.DiaryControllerGetAppointment(ctx, operations.DiaryControllerGetAppointmentRequest{
        AppointmentID: "ab",
        ShortName: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiaryAppointmentModel != nil {
        // handle response
    }
}
```

## DiaryControllerGetAppointmentTypes

A collection of all diary appointment types

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
    res, err := s.DiaryController.DiaryControllerGetAppointmentTypes(ctx, operations.DiaryControllerGetAppointmentTypesRequest{
        Count: 87129,
        Offset: 648172,
        ShortName: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiaryAppointmentTypeModelResults != nil {
        // handle response
    }
}
```

## DiaryControllerGetAppointmentsBetweenDates

A collection of diary appointments linked to a company filtered between specific dates and by appointment type

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
    res, err := s.DiaryController.DiaryControllerGetAppointmentsBetweenDates(ctx, operations.DiaryControllerGetAppointmentsBetweenDatesRequest{
        AppointmentTypesToSearch: []string{
            "repellendus",
            "sapiente",
        },
        BranchID: "quo",
        Count: 140350,
        EndDate: types.MustTimeFromString("2020-05-23T06:06:25.221Z"),
        Offset: 978619,
        ShortName: "molestiae",
        StartDate: types.MustTimeFromString("2020-08-07T00:03:55.328Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiaryAppointmentModelResults != nil {
        // handle response
    }
}
```

## DiaryControllerGetRecurringAppointments

Retrieves all recurring appointments:-

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
    res, err := s.DiaryController.DiaryControllerGetRecurringAppointments(ctx, operations.DiaryControllerGetRecurringAppointmentsRequest{
        AppointmentTypesToSearch: []string{
            "totam",
            "porro",
        },
        BranchID: "dolorum",
        Count: 118274,
        Offset: 720633,
        ShortName: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiaryAppointmentModelResults != nil {
        // handle response
    }
}
```

## DiaryControllerPostAppointmentForm

Post an appointment into a valid diary allocation

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
    res, err := s.DiaryController.DiaryControllerPostAppointmentForm(ctx, operations.DiaryControllerPostAppointmentFormRequest{
        DiaryAppointmentDetails: shared.DiaryAppointmentDetails{
            AllocationDetails: &shared.DiaryBookingModel{
                End: types.MustTimeFromString("2022-09-18T08:27:00.721Z"),
                StaffID: sdk.String("deleniti"),
                StaffName: sdk.String("hic"),
                Start: types.MustTimeFromString("2021-06-08T13:49:32.889Z"),
            },
            AppointmentType: sdk.String("beatae"),
            ExtraComments: sdk.String("commodi"),
            Guests: []shared.DiaryGuestDetails{
                shared.DiaryGuestDetails{
                    AllowMarketingCorrespondence: sdk.Bool(false),
                    EmailAddress: sdk.String("modi"),
                    Forename: sdk.String("qui"),
                    MobilePhone: sdk.String("impedit"),
                    Oid: sdk.String("cum"),
                    Surname: sdk.String("esse"),
                },
                shared.DiaryGuestDetails{
                    AllowMarketingCorrespondence: sdk.Bool(false),
                    EmailAddress: sdk.String("ipsum"),
                    Forename: sdk.String("excepturi"),
                    MobilePhone: sdk.String("aspernatur"),
                    Oid: sdk.String("perferendis"),
                    Surname: sdk.String("ad"),
                },
            },
            Subject: sdk.String("natus"),
        },
        Lettings: sdk.Bool(false),
        PropertyIdentifier: []string{
            "iste",
        },
        ShortName: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiaryControllerPostAppointmentForm200ApplicationJSONString != nil {
        // handle response
    }
}
```

## DiaryControllerPostAppointmentJSON

Post an appointment into a valid diary allocation

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
    res, err := s.DiaryController.DiaryControllerPostAppointmentJSON(ctx, operations.DiaryControllerPostAppointmentJSONRequest{
        DiaryAppointmentDetails: shared.DiaryAppointmentDetails{
            AllocationDetails: &shared.DiaryBookingModel{
                End: types.MustTimeFromString("2022-03-24T20:42:46.563Z"),
                StaffID: sdk.String("hic"),
                StaffName: sdk.String("saepe"),
                Start: types.MustTimeFromString("2022-02-06T12:52:33.708Z"),
            },
            AppointmentType: sdk.String("corporis"),
            ExtraComments: sdk.String("iste"),
            Guests: []shared.DiaryGuestDetails{
                shared.DiaryGuestDetails{
                    AllowMarketingCorrespondence: sdk.Bool(false),
                    EmailAddress: sdk.String("saepe"),
                    Forename: sdk.String("quidem"),
                    MobilePhone: sdk.String("architecto"),
                    Oid: sdk.String("ipsa"),
                    Surname: sdk.String("reiciendis"),
                },
                shared.DiaryGuestDetails{
                    AllowMarketingCorrespondence: sdk.Bool(false),
                    EmailAddress: sdk.String("est"),
                    Forename: sdk.String("mollitia"),
                    MobilePhone: sdk.String("laborum"),
                    Oid: sdk.String("dolores"),
                    Surname: sdk.String("dolorem"),
                },
            },
            Subject: sdk.String("corporis"),
        },
        Lettings: sdk.Bool(false),
        PropertyIdentifier: []string{
            "nobis",
        },
        ShortName: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiaryControllerPostAppointmentJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## DiaryControllerPostAppointmentRaw

Post an appointment into a valid diary allocation

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
    res, err := s.DiaryController.DiaryControllerPostAppointmentRaw(ctx, operations.DiaryControllerPostAppointmentRawRequest{
        RequestBody: []byte("omnis"),
        Lettings: sdk.Bool(false),
        PropertyIdentifier: []string{
            "minima",
            "excepturi",
        },
        ShortName: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiaryControllerPostAppointmentRaw200ApplicationJSONString != nil {
        // handle response
    }
}
```

## DiaryControllerPutAppointmentForm

Update an existing appointment using its unique identifier

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
    res, err := s.DiaryController.DiaryControllerPutAppointmentForm(ctx, operations.DiaryControllerPutAppointmentFormRequest{
        AllowMarketingCorrespondence: sdk.Bool(false),
        DiaryAppointmentDetails: shared.DiaryAppointmentDetails{
            AllocationDetails: &shared.DiaryBookingModel{
                End: types.MustTimeFromString("2022-05-14T11:45:33.094Z"),
                StaffID: sdk.String("doloribus"),
                StaffName: sdk.String("sapiente"),
                Start: types.MustTimeFromString("2022-05-07T17:33:24.154Z"),
            },
            AppointmentType: sdk.String("dolorem"),
            ExtraComments: sdk.String("culpa"),
            Guests: []shared.DiaryGuestDetails{
                shared.DiaryGuestDetails{
                    AllowMarketingCorrespondence: sdk.Bool(false),
                    EmailAddress: sdk.String("repellat"),
                    Forename: sdk.String("mollitia"),
                    MobilePhone: sdk.String("occaecati"),
                    Oid: sdk.String("numquam"),
                    Surname: sdk.String("commodi"),
                },
            },
            Subject: sdk.String("quam"),
        },
        AppointmentID: "molestiae",
        Lettings: sdk.Bool(false),
        ShortName: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiaryControllerPutAppointmentForm200ApplicationJSONString != nil {
        // handle response
    }
}
```

## DiaryControllerPutAppointmentJSON

Update an existing appointment using its unique identifier

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
    res, err := s.DiaryController.DiaryControllerPutAppointmentJSON(ctx, operations.DiaryControllerPutAppointmentJSONRequest{
        AllowMarketingCorrespondence: sdk.Bool(false),
        DiaryAppointmentDetails: shared.DiaryAppointmentDetails{
            AllocationDetails: &shared.DiaryBookingModel{
                End: types.MustTimeFromString("2022-09-06T22:51:09.401Z"),
                StaffID: sdk.String("quis"),
                StaffName: sdk.String("vitae"),
                Start: types.MustTimeFromString("2021-09-08T21:06:19.630Z"),
            },
            AppointmentType: sdk.String("enim"),
            ExtraComments: sdk.String("odit"),
            Guests: []shared.DiaryGuestDetails{
                shared.DiaryGuestDetails{
                    AllowMarketingCorrespondence: sdk.Bool(false),
                    EmailAddress: sdk.String("sequi"),
                    Forename: sdk.String("tenetur"),
                    MobilePhone: sdk.String("ipsam"),
                    Oid: sdk.String("id"),
                    Surname: sdk.String("possimus"),
                },
                shared.DiaryGuestDetails{
                    AllowMarketingCorrespondence: sdk.Bool(false),
                    EmailAddress: sdk.String("aut"),
                    Forename: sdk.String("quasi"),
                    MobilePhone: sdk.String("error"),
                    Oid: sdk.String("temporibus"),
                    Surname: sdk.String("laborum"),
                },
                shared.DiaryGuestDetails{
                    AllowMarketingCorrespondence: sdk.Bool(false),
                    EmailAddress: sdk.String("quasi"),
                    Forename: sdk.String("reiciendis"),
                    MobilePhone: sdk.String("voluptatibus"),
                    Oid: sdk.String("vero"),
                    Surname: sdk.String("nihil"),
                },
                shared.DiaryGuestDetails{
                    AllowMarketingCorrespondence: sdk.Bool(false),
                    EmailAddress: sdk.String("praesentium"),
                    Forename: sdk.String("voluptatibus"),
                    MobilePhone: sdk.String("ipsa"),
                    Oid: sdk.String("omnis"),
                    Surname: sdk.String("voluptate"),
                },
            },
            Subject: sdk.String("cum"),
        },
        AppointmentID: "perferendis",
        Lettings: sdk.Bool(false),
        ShortName: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiaryControllerPutAppointmentJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## DiaryControllerPutAppointmentRaw

Update an existing appointment using its unique identifier

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
    res, err := s.DiaryController.DiaryControllerPutAppointmentRaw(ctx, operations.DiaryControllerPutAppointmentRawRequest{
        AllowMarketingCorrespondence: sdk.Bool(false),
        RequestBody: []byte("reprehenderit"),
        AppointmentID: "ut",
        Lettings: sdk.Bool(false),
        ShortName: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiaryControllerPutAppointmentRaw200ApplicationJSONString != nil {
        // handle response
    }
}
```

## DiaryControllerSearchGuest

Match Guest Parameters with existing applicants

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
    res, err := s.DiaryController.DiaryControllerSearchGuest(ctx, operations.DiaryControllerSearchGuestRequest{
        BranchID: "dicta",
        Count: 359444,
        Emailaddress: "dolore",
        Forename: "iusto",
        Offset: 118727,
        Shortname: "harum",
        Surname: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GuestDiaryParametersResultsModel != nil {
        // handle response
    }
}
```
