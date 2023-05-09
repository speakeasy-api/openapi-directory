# Appointments

### Available Operations

* [GetSetupV1Appointments](#getsetupv1appointments) - List Appointments
* [GetSetupV1AppointmentsID](#getsetupv1appointmentsid) - Get Appointment
* [PutSetupV1AppointmentsIDReassignResourceResourceID](#putsetupv1appointmentsidreassignresourceresourceid) - Reassign Appointment

## GetSetupV1Appointments

<p>Use this endpoint to return a <b>List of Appointments</b>. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appointments.GetSetupV1Appointments(ctx, operations.GetSetupV1AppointmentsRequest{
        BookedBy: sdk.String("minus"),
        CalendarID: sdk.String("placeat"),
        CustomerID: sdk.String("voluptatum"),
        Email: sdk.String("Kenyon_Huel7@yahoo.com"),
        EndDate: types.MustTimeFromString("2022-11-30T04:44:49.578Z"),
        Lastname: sdk.String("O'Connell"),
        Limit: sdk.Int(20218),
        LocationID: sdk.String("ipsam"),
        Offset: sdk.Int(832620),
        ResourceID: sdk.String("sapiente"),
        ServiceAllocationID: sdk.String("quo"),
        ServiceID: sdk.String("odit"),
        StartDate: types.MustTimeFromString("2020-05-23T06:06:25.221Z"),
        Status: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentListViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1AppointmentsID

<p>Use this endpoint to return an <b>Appointment</b> object. A valid <b>appointment id</b> is required. Find appointment id's by using the <i>GET​/setup​/v1​/appointments</i> endpoint.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appointments.GetSetupV1AppointmentsID(ctx, operations.GetSetupV1AppointmentsIDRequest{
        ID: "7cc78ca1-ba92-48fc-8167-42cb73920592",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1AppointmentsIDReassignResourceResourceID

<p>Use this endpoint to <b>Reassign</b> an appointment from one resource to another. The result returned is a single appointment that was reassigned to the target resource. A valid <b>appointment id</b> and <b>resource id</b> is required. Find appointment id's by using the <i>GET /setup/v1/appointments</i> endpoint, find resource id's by using the <i>GET ​/setup​/v1​/resources</i> endpoint.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appointments.PutSetupV1AppointmentsIDReassignResourceResourceID(ctx, operations.PutSetupV1AppointmentsIDReassignResourceResourceIDRequest{
        ID: "9396fea7-596e-4b10-baaa-2352c5955907",
        ResourceID: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentViewModel != nil {
        // handle response
    }
}
```
