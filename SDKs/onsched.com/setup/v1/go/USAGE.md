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
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        }),
    )

    req := operations.GetSetupV1AppointmentsRequest{
        QueryParams: operations.GetSetupV1AppointmentsQueryParams{
            BookedBy: "corrupti",
            CalendarID: "provident",
            CustomerID: "distinctio",
            Email: "Leda_Stiedemann@hotmail.com",
            EndDate: "2022-10-26T11:55:06.324Z",
            Lastname: "Mueller",
            Limit: 645894,
            LocationID: "suscipit",
            Offset: 437587,
            ResourceID: "magnam",
            ServiceAllocationID: "debitis",
            ServiceID: "ipsa",
            StartDate: "2022-04-12T09:26:55.610Z",
            Status: "tempora",
        },
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