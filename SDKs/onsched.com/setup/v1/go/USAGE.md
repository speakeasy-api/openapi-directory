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
            BookedBy: "ut",
            CalendarID: "eum",
            CustomerID: "similique",
            Email: "laborum",
            EndDate: "2007-03-12T18:50:24Z",
            Lastname: "quasi",
            Limit: 6235266708457036196,
            LocationID: "est",
            Offset: 7726756373010514897,
            ResourceID: "nulla",
            ServiceAllocationID: "natus",
            ServiceID: "commodi",
            StartDate: "1982-06-20T12:09:00Z",
            Status: "adipisci",
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