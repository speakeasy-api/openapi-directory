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
            BookedBy: "sit",
            CalendarID: "voluptas",
            CustomerID: "culpa",
            Email: "expedita",
            EndDate: "1997-12-26T13:41:25Z",
            Lastname: "dolor",
            Limit: 1774932891286980153,
            LocationID: "voluptas",
            Offset: 8274930044578894929,
            ResourceID: "et",
            ServiceAllocationID: "nihil",
            ServiceID: "rerum",
            StartDate: "2004-06-02T10:14:12Z",
            Status: "voluptatum",
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