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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuthentication: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Bookings.CancelBooking(ctx, operations.CancelBookingRequest{
        BookingID: "corrupti",
    })
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


### [Bookings](docs/bookings/README.md)

* [CancelBooking](docs/bookings/README.md#cancelbooking) - Cancel a booking
* [CreateBooking](docs/bookings/README.md#createbooking) - Create a booking
* [ListBookings](docs/bookings/README.md#listbookings) - List all bookings
* [RetrieveBooking](docs/bookings/README.md#retrievebooking) - Retrieve a booking
* [UpdateBooking](docs/bookings/README.md#updatebooking) - Change a booking
* [UpdateBookingContact](docs/bookings/README.md#updatebookingcontact) - Change a booking contact

### [Hotels](docs/hotels/README.md)

* [ListHotels](docs/hotels/README.md#listhotels) - List all hotels
* [RetrieveHotel](docs/hotels/README.md#retrievehotel) - Retrieve a hotel

### [RateCalendar](docs/ratecalendar/README.md)

* [ListRatePlanForHotelForRatePlanID](docs/ratecalendar/README.md#listrateplanforhotelforrateplanid) - List a rate plan (rate calendar) for a hotel (Beta endpoint).
* [ListRatePlansForHotel](docs/ratecalendar/README.md#listrateplansforhotel) - List all rate plans (rate calendar) for a hotel (Beta endpoint)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
