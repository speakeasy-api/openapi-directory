<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetSetupV1AppointmentsRequest{
        QueryParams: operations.GetSetupV1AppointmentsQueryParams{
            BookedBy: "minima",
            CalendarID: "tempora",
            CustomerID: "maiores",
            Email: "sit",
            EndDate: "1999-12-30T11:47:08Z",
            Lastname: "aliquid",
            Limit: 1418207719976502374,
            LocationID: "ipsam",
            Offset: 8231441313111630060,
            ResourceID: "eos",
            ServiceAllocationID: "doloribus",
            ServiceID: "non",
            StartDate: "2017-11-21T16:45:10Z",
            Status: "at",
        },
    }
    
    res, err := s.Appointments.GetSetupV1Appointments(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentListViewModel != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->