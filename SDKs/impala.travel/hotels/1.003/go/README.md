# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/impala.travel/hotels/1.003/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Bookings

* `CancelBooking` - Cancel a booking
* `CreateBooking` - Create a booking
* `ListBookings` - List all bookings
* `RetrieveBooking` - Retrieve a booking
* `UpdateBooking` - Change a booking
* `UpdateBookingContact` - Change a booking contact

### Hotels

* `ListHotels` - List all hotels
* `RetrieveHotel` - Retrieve a hotel

### RateCalendar

* `ListRatePlanForHotelForRatePlanID` - List a rate plan (rate calendar) for a hotel (Beta endpoint).
* `ListRatePlansForHotel` - List all rate plans (rate calendar) for a hotel (Beta endpoint)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
