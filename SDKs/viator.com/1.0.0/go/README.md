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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.BookingServices.BookingAvailability(ctx, operations.BookingAvailabilityRequest{
        AcceptLanguage: "en-US",
        RequestBody: &operations.BookingAvailabilityRequestBody{
            AgeBands: []BookingAvailabilityRequestBodyAgeBands{
                operations.BookingAvailabilityRequestBodyAgeBands{
                    BandID: sdk.Int64(592845),
                    Count: sdk.Int64(715190),
                },
                operations.BookingAvailabilityRequestBodyAgeBands{
                    BandID: sdk.Int64(844266),
                    Count: sdk.Int64(602763),
                },
                operations.BookingAvailabilityRequestBodyAgeBands{
                    BandID: sdk.Int64(857946),
                    Count: sdk.Int64(544883),
                },
            },
            CurrencyCode: sdk.String("illum"),
            Month: sdk.String("vel"),
            ProductCode: sdk.String("error"),
            Year: sdk.String("deserunt"),
        },
    })
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


### [BookingServices](docs/bookingservices/README.md)

* [BookingAvailability](docs/bookingservices/README.md#bookingavailability) - /booking/availability
* [BookingAvailabilityDates](docs/bookingservices/README.md#bookingavailabilitydates) - /booking/availability/dates
* [BookingAvailabilityTourgrades](docs/bookingservices/README.md#bookingavailabilitytourgrades) - /booking/availability/tourgrades
* [BookingAvailabilityTourgradesPricingmatrix](docs/bookingservices/README.md#bookingavailabilitytourgradespricingmatrix) - /booking/availability/tourgrades/pricingmatrix
* [BookingBook](docs/bookingservices/README.md#bookingbook) - /booking/book
* [BookingCalculateprice](docs/bookingservices/README.md#bookingcalculateprice) - /booking/calculateprice
* [BookingHotels](docs/bookingservices/README.md#bookinghotels) - /booking/hotels
* [BookingMybookings](docs/bookingservices/README.md#bookingmybookings) - /booking/mybookings
* [BookingPastbooking](docs/bookingservices/README.md#bookingpastbooking) - /booking/pastbooking
* [BookingPricingmatrix](docs/bookingservices/README.md#bookingpricingmatrix) - /booking/pricingmatrix
* [BookingStatus](docs/bookingservices/README.md#bookingstatus) - /booking/status
* [BookingStatusItems](docs/bookingservices/README.md#bookingstatusitems) - /booking/status/items
* [BookingVoucher](docs/bookingservices/README.md#bookingvoucher) - /booking/voucher
* [CancelBooking](docs/bookingservices/README.md#cancelbooking) - /bookings/{booking-reference}/cancel
* [CancelBookingQuote](docs/bookingservices/README.md#cancelbookingquote) - /bookings/{booking-reference}/cancel-quote
* [CancellationReasons](docs/bookingservices/README.md#cancellationreasons) - /bookings/cancel-reasons

### [DeprecatedServices](docs/deprecatedservices/README.md)

* [~~MerchantCancellation~~](docs/deprecatedservices/README.md#merchantcancellation) - /merchant/cancellation :warning: **Deprecated**

### [GeneralServices](docs/generalservices/README.md)

* [HealthCheck](docs/generalservices/README.md#healthcheck) - /health/check

### [ProductServices](docs/productservices/README.md)

* [AvailableProducts](docs/productservices/README.md#availableproducts) - /available/products
* [Product](docs/productservices/README.md#product) - /product
* [ProductPhotos](docs/productservices/README.md#productphotos) - /product/photos
* [ProductReviews](docs/productservices/README.md#productreviews) - /product/reviews
* [SearchFreetext](docs/productservices/README.md#searchfreetext) - /search/freetext
* [SearchProducts](docs/productservices/README.md#searchproducts) - /search/products
* [SearchProductsCodes](docs/productservices/README.md#searchproductscodes) - /search/products/codes

### [TaxonomyServices](docs/taxonomyservices/README.md)

* [TaxonomyAttractions](docs/taxonomyservices/README.md#taxonomyattractions) - /taxonomy/attractions
* [TaxonomyCategories](docs/taxonomyservices/README.md#taxonomycategories) - /taxonomy/categories
* [TaxonomyDestinations](docs/taxonomyservices/README.md#taxonomydestinations) - /taxonomy/destinations
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
