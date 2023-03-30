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
            BookedBy: "unde",
            CalendarID: "deserunt",
            CustomerID: "porro",
            Email: "Leatha_Stiedemann@hotmail.com",
            EndDate: "2022-10-26T09:35:47.073Z",
            Lastname: "Mueller",
            Limit: 645894,
            LocationID: "eum",
            Offset: 437587,
            ResourceID: "ullam",
            ServiceAllocationID: "saepe",
            ServiceID: "inventore",
            StartDate: "2022-04-12T07:07:36.357Z",
            Status: "enim",
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