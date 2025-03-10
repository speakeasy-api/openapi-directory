# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/viator.com/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
    ),
)


req = operations.BookingAvailabilityRequest(
    accept_language="en-US",
    request_body=operations.BookingAvailabilityRequestBody(
        age_bands=[
            operations.BookingAvailabilityRequestBodyAgeBands(
                band_id=592845,
                count=715190,
            ),
            operations.BookingAvailabilityRequestBodyAgeBands(
                band_id=844266,
                count=602763,
            ),
            operations.BookingAvailabilityRequestBodyAgeBands(
                band_id=857946,
                count=544883,
            ),
        ],
        currency_code="illum",
        month="vel",
        product_code="error",
        year="deserunt",
    ),
)
    
res = s.booking_services.booking_availability(req)

if res.booking_availability_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### booking_services

* `booking_availability` - /booking/availability
* `booking_availability_dates` - /booking/availability/dates
* `booking_availability_tourgrades` - /booking/availability/tourgrades
* `booking_availability_tourgrades_pricingmatrix` - /booking/availability/tourgrades/pricingmatrix
* `booking_book` - /booking/book
* `booking_calculateprice` - /booking/calculateprice
* `booking_hotels` - /booking/hotels
* `booking_mybookings` - /booking/mybookings
* `booking_pastbooking` - /booking/pastbooking
* `booking_pricingmatrix` - /booking/pricingmatrix
* `booking_status` - /booking/status
* `booking_status_items` - /booking/status/items
* `booking_voucher` - /booking/voucher
* `cancel_booking` - /bookings/{booking-reference}/cancel
* `cancel_booking_quote` - /bookings/{booking-reference}/cancel-quote
* `cancellation_reasons` - /bookings/cancel-reasons

### deprecated_services

* `merchant_cancellation` - /merchant/cancellation

### general_services

* `health_check` - /health/check

### product_services

* `available_products` - /available/products
* `product` - /product
* `product_photos` - /product/photos
* `product_reviews` - /product/reviews
* `search_freetext` - /search/freetext
* `search_products` - /search/products
* `search_products_codes` - /search/products/codes

### taxonomy_services

* `taxonomy_attractions` - /taxonomy/attractions
* `taxonomy_categories` - /taxonomy/categories
* `taxonomy_destinations` - /taxonomy/destinations
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
