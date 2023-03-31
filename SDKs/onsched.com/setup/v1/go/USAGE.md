<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    req := operations.GetSetupV1AppointmentsRequest{
        BookedBy: "corrupti",
        CalendarID: "provident",
        CustomerID: "distinctio",
        Email: "Leda_Stiedemann@hotmail.com",
        EndDate: "2022-05-18T09:34:54.894Z",
        Lastname: "Oberbrunner",
        Limit: 384382,
        LocationID: "iure",
        Offset: 297534,
        ResourceID: "debitis",
        ServiceAllocationID: "ipsa",
        ServiceID: "delectus",
        StartDate: "2022-08-14T01:03:07.567Z",
        Status: "molestiae",
    }

    ctx := context.Background()
    res, err := s.Appointments.GetSetupV1Appointments(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentListViewModel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->