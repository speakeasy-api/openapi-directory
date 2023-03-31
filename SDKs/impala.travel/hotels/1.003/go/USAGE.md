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
            APIKeyAuthentication: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CancelBookingRequest{
        BookingID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Bookings.CancelBooking(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Booking != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->