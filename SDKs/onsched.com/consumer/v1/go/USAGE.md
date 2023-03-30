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

    req := operations.DeleteConsumerV1AppointmentsIDRequest{
        PathParams: operations.DeleteConsumerV1AppointmentsIDPathParams{
            ID: "corrupti",
        },
    }

    ctx := context.Background()
    res, err := s.Appointments.DeleteConsumerV1AppointmentsID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentViewModel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->