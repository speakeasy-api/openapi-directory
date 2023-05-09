<!-- Start SDK Example Usage -->
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
        BookedBy: sdk.String("corrupti"),
        CalendarID: sdk.String("provident"),
        CustomerID: sdk.String("distinctio"),
        Email: sdk.String("Leda_Stiedemann@hotmail.com"),
        EndDate: types.MustTimeFromString("2022-05-18T09:34:54.894Z"),
        Lastname: sdk.String("Oberbrunner"),
        Limit: sdk.Int(384382),
        LocationID: sdk.String("iure"),
        Offset: sdk.Int(297534),
        ResourceID: sdk.String("debitis"),
        ServiceAllocationID: sdk.String("ipsa"),
        ServiceID: sdk.String("delectus"),
        StartDate: types.MustTimeFromString("2022-08-14T01:03:07.567Z"),
        Status: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentListViewModel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->