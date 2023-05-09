# Appointments

### Available Operations

* [DeleteConsumerV1AppointmentsID](#deleteconsumerv1appointmentsid) - Delete Appointment
* [GetConsumerV1Appointments](#getconsumerv1appointments) - Get Appointments
* [GetConsumerV1AppointmentsBookingfields](#getconsumerv1appointmentsbookingfields) - Get Custom Fields Labels
* [GetConsumerV1AppointmentsCustomfields](#getconsumerv1appointmentscustomfields) - Get Custom Fields List
* [GetConsumerV1AppointmentsID](#getconsumerv1appointmentsid) - Get Appointment
* [PostConsumerV1Appointments](#postconsumerv1appointments) - Create Appointment
* [PutConsumerV1AppointmentsIDBook](#putconsumerv1appointmentsidbook) - Book Appointment
* [PutConsumerV1AppointmentsIDCancel](#putconsumerv1appointmentsidcancel) - Cancel Appointment
* [PutConsumerV1AppointmentsIDConfirm](#putconsumerv1appointmentsidconfirm) - Confirm Appointment
* [PutConsumerV1AppointmentsIDNoshow](#putconsumerv1appointmentsidnoshow) - Set NoShow Status
* [PutConsumerV1AppointmentsIDReschedule](#putconsumerv1appointmentsidreschedule) - Reschedule Appointment
* [PutConsumerV1AppointmentsIDReserve](#putconsumerv1appointmentsidreserve) - Reserve Appointment

## DeleteConsumerV1AppointmentsID

<p>Use this endpoint to permanently <b>Delete</b> an appointment. Only appointments with a of "IN" status, initial, can be deleted. Past dated appointments cannot be deleted. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint.</p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>

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
    res, err := s.Appointments.DeleteConsumerV1AppointmentsID(ctx, operations.DeleteConsumerV1AppointmentsIDRequest{
        ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentViewModel != nil {
        // handle response
    }
}
```

## GetConsumerV1Appointments

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
    res, err := s.Appointments.GetConsumerV1Appointments(ctx, operations.GetConsumerV1AppointmentsRequest{
        BookedBy: sdk.String("impedit"),
        CalendarID: sdk.String("cum"),
        CustomerID: sdk.String("esse"),
        Email: sdk.String("Keshaun32@gmail.com"),
        EndDate: types.MustTimeFromString("2022-09-13T17:41:46.141Z"),
        Lastname: sdk.String("Moore"),
        Limit: sdk.Int(222321),
        LocationID: sdk.String("natus"),
        Offset: sdk.Int(386489),
        Phone: sdk.String("964.464.9600 x96661"),
        ResourceID: sdk.String("dolorem"),
        ServiceAllocationID: sdk.String("corporis"),
        ServiceID: sdk.String("explicabo"),
        StartDate: types.MustTimeFromString("2022-01-20T14:32:34.011Z"),
        Status: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentListViewModel != nil {
        // handle response
    }
}
```

## GetConsumerV1AppointmentsBookingfields

<p>Use this endpoint to return a locations <b>Appointment Booking Fields</b>. Appointment booking fields are stored with each Appointment record. They are used when you need additional information collected during your booking process. It is tied to an appointment/visit and will be stored in the appointment record. Use the field name, type, and length to determine how to update these field values when posting an appointment.</p>

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
    res, err := s.Appointments.GetConsumerV1AppointmentsBookingfields(ctx, operations.GetConsumerV1AppointmentsBookingfieldsRequest{
        LocationID: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BookingFieldListViewModel != nil {
        // handle response
    }
}
```

## GetConsumerV1AppointmentsCustomfields

<p>Use this endpoint to return a locations <b>Appointment Custom Field</b> definitions. Appointment custom fields are stored with each appointment. They are used when the information collected during the booking is specific to a particular appointment/visit. The response will list the custom fields used (customField1 - 10), the field type (string, number, date, boolean) and the length of each one.</p>

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
    res, err := s.Appointments.GetConsumerV1AppointmentsCustomfields(ctx, operations.GetConsumerV1AppointmentsCustomfieldsRequest{
        LocationID: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomFieldDefinitionListViewModel != nil {
        // handle response
    }
}
```

## GetConsumerV1AppointmentsID

<p>Use this endpoint to return an <b>Appointment</b> object. A valid <b>appointment id</b> is required. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

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
    res, err := s.Appointments.GetConsumerV1AppointmentsID(ctx, operations.GetConsumerV1AppointmentsIDRequest{
        ID: "907aff1a-3a2f-4a94-a773-9251aa52c3f5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentViewModel != nil {
        // handle response
    }
}
```

## PostConsumerV1Appointments

<p>Use this endpoint to <b>Create</b> a new appointment. The appointment will be created with an "IN", Initial status. Posting an appointment with "IN" status requires minimal information and requires a "PUT book" call to complete the booking transaction, <i>PUT ​/consumer​/v1​/appointments​/{id}​/book</i>. Alternatively, you can post an appointment using the <b>completeBooking</b> option which completes the booking in one transaction, but it will require more data. The method you choose depends on your solutions workflow. </p>
<p>
  <b>StartDateTime</b> and <b>EndDateTime</b> are required. Use the ISO 8601 format for DateTime Timezone, e.g., <b>2016-10-30T09:00:00-5:00</b></p>
<p>A valid <b>serviceId</b> is required. The serviceId provided must be valid for the location being booked. A valid serviceId is one that is scoped to a Primary Company Location or is associated with a Business Location</p>
<p>OPTIONAL FIELDS INCLUDE: </p>
<p>
  <b>locationId</b> - if not supplied, the appointment will be posted to the primary business location. If you support multiple location, we recommend always supplying the locationId. </p>
<p>
  <b>resourceId</b> - not required when posting with an "IN" status but is required when the appointment is booked. Use <i>GET /consumer/v1/resources</i> for a list of resources. </p>
<p>
  <b>customerId</b> - if supplied the name and email will be retrieved from the customer record. </p>
<p>
  <b>BookedBy</b> - if not supplied the email address of the booked appointment is used or the ip address if no email address is provided. BookedBy is used in the Appointment Audit trail which can be viewed in the appointment object.</p>
<p>
  <b>Location</b> - is a string value representing the location of the appointment. It provides no added functionality in OnSched and should not be confused with locationId.</p>
<p>
  <b>TimezoneName</b> - if used timezoneName must be in IANA format, <i>America/New_York</i>. This is the timezone the appointment was booked in. Populating this information can help later in situations where appointments are booked before a Daylight Savings change. If no timezoneName is supplied, the Business Locations timezone will be used.</p>
<p>
  <b>COMPLETE BOOKING:</b> This parameter provides a mechanism for immediate booking with the POST appointment endpoint. To complete the booking in one transaction, populate the <b>completeBooking</b> parameter with a "BK", booked or an "RS", reserved status and provide an (<b>email</b> and <b>name</b>) or a <b>customerId</b> in the post body. Doing so will book the appointment and send notifications all in one transaction. <b>Note:</b> "IN" can also be used as a completeBooking option to support payment flows. With the "IN" option, notifications are NOT sent.</p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appointments.PostConsumerV1Appointments(ctx, operations.PostConsumerV1AppointmentsRequest{
        AppointmentInitialModel: &shared.AppointmentInitialModel{
            AppointmentBookingFields: []shared.BookingFieldItem{
                shared.BookingFieldItem{
                    Name: sdk.String("Richard Boyer"),
                    Value: sdk.String("laborum"),
                },
                shared.BookingFieldItem{
                    Name: sdk.String("Johanna Wolf"),
                    Value: sdk.String("praesentium"),
                },
                shared.BookingFieldItem{
                    Name: sdk.String("Jose Moen"),
                    Value: sdk.String("perferendis"),
                },
            },
            BookedBy: sdk.String("doloremque"),
            BookingWindowID: sdk.String("reprehenderit"),
            CalendarID: sdk.String("ut"),
            CustomFields: &shared.CustomFieldInputModel{
                Field1: sdk.String("maiores"),
                Field10: sdk.String("dicta"),
                Field2: sdk.String("corporis"),
                Field3: sdk.String("dolore"),
                Field4: sdk.String("iusto"),
                Field5: sdk.String("dicta"),
                Field6: sdk.String("harum"),
                Field7: sdk.String("enim"),
                Field8: sdk.String("accusamus"),
                Field9: sdk.String("commodi"),
            },
            CustomerBookingFields: []shared.BookingFieldItem{
                shared.BookingFieldItem{
                    Name: sdk.String("Edna Pouros"),
                    Value: sdk.String("pariatur"),
                },
                shared.BookingFieldItem{
                    Name: sdk.String("Irma Ledner DVM"),
                    Value: sdk.String("sint"),
                },
                shared.BookingFieldItem{
                    Name: sdk.String("Patti Gottlieb MD"),
                    Value: sdk.String("quibusdam"),
                },
                shared.BookingFieldItem{
                    Name: sdk.String("Joanna Rau"),
                    Value: sdk.String("modi"),
                },
            },
            CustomerID: sdk.String("qui"),
            CustomerMessage: sdk.String("aliquid"),
            Email: sdk.String("Kavon82@yahoo.com"),
            EndDateTime: types.MustTimeFromString("2022-12-30T06:52:02.282Z"),
            GroupSize: sdk.Int(146441),
            Location: sdk.String("dolorum"),
            LocationID: sdk.String("excepturi"),
            Name: sdk.String("Olivia Rice"),
            Notes: sdk.String("eum"),
            Phone: sdk.String("853.685.6289"),
            PhoneType: sdk.String("dolorum"),
            ResourceGroupID: sdk.String("in"),
            ResourceID: sdk.String("in"),
            ResourceIds: sdk.String("illum"),
            ServiceAllocationID: sdk.String("maiores"),
            ServiceID: sdk.String("rerum"),
            StartDateTime: types.MustTimeFromString("2022-09-14T10:27:07.590Z"),
            TimezoneName: sdk.String("cumque"),
            TravelAppointmentID: sdk.String("facere"),
            TravelTimeMins: sdk.Int(411820),
        },
        CompleteBooking: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentInitialViewModel != nil {
        // handle response
    }
}
```

## PutConsumerV1AppointmentsIDBook

<p>Use this endpoint to <b>Book</b> an appointment. Only appointments with an "IN" status, Initial, can be booked. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint. Other pertinent fields can also be updated at the time of booking by including them in the post body. <b>Note: If no name or email address was provided in the initial Post Appointment, it will be required in the post body.</b></p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appointments.PutConsumerV1AppointmentsIDBook(ctx, operations.PutConsumerV1AppointmentsIDBookRequest{
        AppointmentBookModel: &shared.AppointmentBookModel{
            AppointmentBookingFields: []shared.BookingFieldItem{
                shared.BookingFieldItem{
                    Name: sdk.String("Alfred McClure"),
                    Value: sdk.String("delectus"),
                },
                shared.BookingFieldItem{
                    Name: sdk.String("Rene Reinger"),
                    Value: sdk.String("deleniti"),
                },
                shared.BookingFieldItem{
                    Name: sdk.String("Vincent Nolan"),
                    Value: sdk.String("natus"),
                },
            },
            CustomFields: &shared.CustomFieldInputModel{
                Field1: sdk.String("omnis"),
                Field10: sdk.String("molestiae"),
                Field2: sdk.String("perferendis"),
                Field3: sdk.String("nihil"),
                Field4: sdk.String("magnam"),
                Field5: sdk.String("distinctio"),
                Field6: sdk.String("id"),
                Field7: sdk.String("labore"),
                Field8: sdk.String("labore"),
                Field9: sdk.String("suscipit"),
            },
            CustomerBookingFields: []shared.BookingFieldItem{
                shared.BookingFieldItem{
                    Name: sdk.String("Duane Thiel II"),
                    Value: sdk.String("et"),
                },
                shared.BookingFieldItem{
                    Name: sdk.String("Derrick McLaughlin"),
                    Value: sdk.String("accusantium"),
                },
                shared.BookingFieldItem{
                    Name: sdk.String("Abel O'Hara"),
                    Value: sdk.String("dolor"),
                },
            },
            CustomerMessage: sdk.String("necessitatibus"),
            Email: sdk.String("Fredrick_Boyle@gmail.com"),
            GroupSize: sdk.Int(891924),
            Name: sdk.String("Jasmine Lind"),
            Notes: sdk.String("architecto"),
            Phone: sdk.String("(937) 598-1980"),
            PhoneExt: sdk.String("consequuntur"),
            PhoneType: sdk.String("praesentium"),
        },
        ID: "921cddc6-9260-41fb-976b-0d5f0d30c5fb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentViewModel != nil {
        // handle response
    }
}
```

## PutConsumerV1AppointmentsIDCancel

<p>Use this endpoint to <b>Cancel</b> an appointment booking or reservation. Only appointments with a "BK", booked or "RS", reserved status can be cancelled. Past dated appointments cannot be cancelled. A valid <b>appointment id</b> is required. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>

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
    res, err := s.Appointments.PutConsumerV1AppointmentsIDCancel(ctx, operations.PutConsumerV1AppointmentsIDCancelRequest{
        ID: "b2587053-202c-473d-9fe9-b90c28909b3f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentViewModel != nil {
        // handle response
    }
}
```

## PutConsumerV1AppointmentsIDConfirm

<p>Use this endpoint to <b>Confirm</b> an appointment. This updates the boolean confirmed field to TRUE. <b>NOTE:</b> If the appointment status is set to "RS", Reserved, it also updates the status of the appointment to "BK", Booked. </p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>

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
    res, err := s.Appointments.PutConsumerV1AppointmentsIDConfirm(ctx, operations.PutConsumerV1AppointmentsIDConfirmRequest{
        ID: 934214,
        Undo: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutConsumerV1AppointmentsIDNoshow

<p>Use this endpoint to change the status of an appointment from "BK", Booked to <b>"NS", NoShow</b>. This gives API consumers a way to internally track No Show appointments. It provides no added functionality in OnSched.</p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>

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
    res, err := s.Appointments.PutConsumerV1AppointmentsIDNoshow(ctx, operations.PutConsumerV1AppointmentsIDNoshowRequest{
        RequestBody: map[string]interface{}{
            "iste": "dolorum",
            "deleniti": "pariatur",
        },
        ID: 589910,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutConsumerV1AppointmentsIDReschedule

<p>Use this endpoint to <b>Reschedule</b> an appointment booking. Only appointments in "BK", booked status, can be Rescheduled. Past dated appointments cannot be rescheduled. A valid <b>appointment id</b> is required.</p>
<p>The <b>StartDateTime</b> and <b>EndDateTime</b> are required. Use the ISO 8601 format for DateTime Timezone, e.g., <b>2016-10-30T09:00:00-5:00</b>.</p>
<p>The serviceId is optional. If changing the <b>serviceId</b>, the new service id's duration must match the original service's duration.</p>
<p>The resourceId is optional. If changing the <b>resourceId</b>, verify the availability of the new resource prior to rescheduling.</p>
<p>
  <b>IMPORTANT:</b> Always run availability before rescheduling an appointment to verify the timeslot is open and available for the new time, service and/or resource requested. This is the only way to assure the slot is available. You cannot reschedule an appointment to a different location. If necessary, you should cancel and then book an appointment in the other location.</p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appointments.PutConsumerV1AppointmentsIDReschedule(ctx, operations.PutConsumerV1AppointmentsIDRescheduleRequest{
        AppointmentRescheduleModel: &shared.AppointmentRescheduleModel{
            EndDateTime: types.MustTimeFromString("2020-10-23T12:23:35.067Z"),
            ResourceID: sdk.String("delectus"),
            ResourceIds: sdk.String("quaerat"),
            ServiceID: sdk.String("quos"),
            StartDateTime: types.MustTimeFromString("2022-10-15T11:27:32.342Z"),
            TravelAppointmentID: sdk.String("dolorem"),
            TravelTimeMins: sdk.Int(222443),
        },
        ID: "23f9b77f-3a41-4006-b4eb-f69280d1ba77",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentViewModel != nil {
        // handle response
    }
}
```

## PutConsumerV1AppointmentsIDReserve

<p>Use this endpoint to <b>Reserve</b> an appointment. Only appointments with an "IN" status, Initial, can be reserved. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint.</p>
<p>
  <b>NOTE: Reservations are different from Bookings as reservations are a two-step booking process that must be managed by the API consumer.</b> An appointment that is reserved is not completely booked until other business conditions have been met. For example, an appointment may be reserved if it is not yet assigned to a resource or until the customer or resource explicitly confirms it.</p>
<p>With reservations you have the ability to notify the customer of a reservation prior to officially booking and the workflow can be designed to indicate what conditions will need to be met in order to convert the reservation to a complete booking. A reservation converts to a complete booking when it is either Confirmed or Booked. </p>
<p>
  <b>IMPORTANT: A reserved appointment time will not be released, i.e., become available to others, until it is Cancelled. The booking timer is not used with reserved appointments.</b>
</p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Appointments.PutConsumerV1AppointmentsIDReserve(ctx, operations.PutConsumerV1AppointmentsIDReserveRequest{
        AppointmentReserveModel: &shared.AppointmentReserveModel{
            AppointmentBookingFields: []shared.BookingFieldItem{
                shared.BookingFieldItem{
                    Name: sdk.String("Arturo Treutel"),
                    Value: sdk.String("nihil"),
                },
                shared.BookingFieldItem{
                    Name: sdk.String("Tamara Ondricka"),
                    Value: sdk.String("aspernatur"),
                },
                shared.BookingFieldItem{
                    Name: sdk.String("Wendy Rosenbaum"),
                    Value: sdk.String("saepe"),
                },
            },
            CustomFields: &shared.CustomFieldInputModel{
                Field1: sdk.String("suscipit"),
                Field10: sdk.String("deserunt"),
                Field2: sdk.String("provident"),
                Field3: sdk.String("minima"),
                Field4: sdk.String("repellendus"),
                Field5: sdk.String("totam"),
                Field6: sdk.String("similique"),
                Field7: sdk.String("alias"),
                Field8: sdk.String("at"),
                Field9: sdk.String("quaerat"),
            },
            CustomerBookingFields: []shared.BookingFieldItem{
                shared.BookingFieldItem{
                    Name: sdk.String("Bernadette Torp"),
                    Value: sdk.String("a"),
                },
                shared.BookingFieldItem{
                    Name: sdk.String("Fannie Kub"),
                    Value: sdk.String("tenetur"),
                },
            },
            CustomerMessage: sdk.String("amet"),
            Email: sdk.String("Shania21@hotmail.com"),
            Name: sdk.String("Miss Jimmie Kozey"),
            Notes: sdk.String("sed"),
            Phone: sdk.String("1-736-522-1588 x716"),
            PhoneExt: sdk.String("totam"),
            PhoneType: sdk.String("incidunt"),
        },
        ID: "22bb679d-2322-4715-bf0c-bb1e31b8b90f",
        SendNotifications: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
