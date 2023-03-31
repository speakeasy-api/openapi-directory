# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/viator.com/1.0.0/go
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
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    req := operations.BookingAvailabilityRequest{
        AcceptLanguage: "en-US",
        RequestBody: &operations.BookingAvailabilityRequestBody{
            AgeBands: []BookingAvailabilityRequestBodyAgeBands{
                operations.BookingAvailabilityRequestBodyAgeBands{
                    BandID: 592845,
                    Count: 715190,
                },
                operations.BookingAvailabilityRequestBodyAgeBands{
                    BandID: 844266,
                    Count: 602763,
                },
                operations.BookingAvailabilityRequestBodyAgeBands{
                    BandID: 857946,
                    Count: 544883,
                },
            },
            CurrencyCode: "illum",
            Month: "vel",
            ProductCode: "error",
            Year: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.BookingServices.BookingAvailability(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BookingAvailability200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### BookingServices

* `BookingAvailability` - /booking/availability
* `BookingAvailabilityDates` - /booking/availability/dates
* `BookingAvailabilityTourgrades` - /booking/availability/tourgrades
* `BookingAvailabilityTourgradesPricingmatrix` - /booking/availability/tourgrades/pricingmatrix
* `BookingBook` - /booking/book
* `BookingCalculateprice` - /booking/calculateprice
* `BookingHotels` - /booking/hotels
* `BookingMybookings` - /booking/mybookings
* `BookingPastbooking` - /booking/pastbooking
* `BookingPricingmatrix` - /booking/pricingmatrix
* `BookingStatus` - /booking/status
* `BookingStatusItems` - /booking/status/items
* `BookingVoucher` - /booking/voucher
* `CancelBooking` - /bookings/{booking-reference}/cancel
* `CancelBookingQuote` - /bookings/{booking-reference}/cancel-quote
* `CancellationReasons` - /bookings/cancel-reasons

### DeprecatedServices

* `MerchantCancellation` - /merchant/cancellation

### GeneralServices

* `HealthCheck` - /health/check

### ProductServices

* `AvailableProducts` - /available/products
* `Product` - /product
* `ProductPhotos` - /product/photos
* `ProductReviews` - /product/reviews
* `SearchFreetext` - /search/freetext
* `SearchProducts` - /search/products
* `SearchProductsCodes` - /search/products/codes

### TaxonomyServices

* `TaxonomyAttractions` - /taxonomy/attractions
* `TaxonomyCategories` - /taxonomy/categories
* `TaxonomyDestinations` - /taxonomy/destinations
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
