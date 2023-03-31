# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BookingAvailabilityHeaders;
import org.openapis.openapi.models.operations.BookingAvailabilityRequestBodyAgeBands;
import org.openapis.openapi.models.operations.BookingAvailabilityRequestBody;
import org.openapis.openapi.models.operations.BookingAvailabilityRequest;
import org.openapis.openapi.models.operations.BookingAvailabilityResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            BookingAvailabilityRequest req = new BookingAvailabilityRequest() {{
                headers = new BookingAvailabilityHeaders() {{
                    acceptLanguage = "en-US";
                }};
                request = new BookingAvailabilityRequestBody() {{
                    ageBands = new org.openapis.openapi.models.operations.BookingAvailabilityRequestBodyAgeBands[]{{
                        add(new BookingAvailabilityRequestBodyAgeBands() {{
                            bandId = 592845;
                            count = 715190;
                        }}),
                        add(new BookingAvailabilityRequestBodyAgeBands() {{
                            bandId = 844266;
                            count = 602763;
                        }}),
                        add(new BookingAvailabilityRequestBodyAgeBands() {{
                            bandId = 857946;
                            count = 544883;
                        }}),
                    }};
                    currencyCode = "illum";
                    month = "vel";
                    productCode = "error";
                    year = "deserunt";
                }};
            }};            

            BookingAvailabilityResponse res = sdk.bookingServices.bookingAvailability(req);

            if (res.bookingAvailability200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### bookingServices

* `bookingAvailability` - /booking/availability
* `bookingAvailabilityDates` - /booking/availability/dates
* `bookingAvailabilityTourgrades` - /booking/availability/tourgrades
* `bookingAvailabilityTourgradesPricingmatrix` - /booking/availability/tourgrades/pricingmatrix
* `bookingBook` - /booking/book
* `bookingCalculateprice` - /booking/calculateprice
* `bookingHotels` - /booking/hotels
* `bookingMybookings` - /booking/mybookings
* `bookingPastbooking` - /booking/pastbooking
* `bookingPricingmatrix` - /booking/pricingmatrix
* `bookingStatus` - /booking/status
* `bookingStatusItems` - /booking/status/items
* `bookingVoucher` - /booking/voucher
* `cancelBooking` - /bookings/{booking-reference}/cancel
* `cancelBookingQuote` - /bookings/{booking-reference}/cancel-quote
* `cancellationReasons` - /bookings/cancel-reasons

### deprecatedServices

* `merchantCancellation` - /merchant/cancellation

### generalServices

* `healthCheck` - /health/check

### productServices

* `availableProducts` - /available/products
* `product` - /product
* `productPhotos` - /product/photos
* `productReviews` - /product/reviews
* `searchFreetext` - /search/freetext
* `searchProducts` - /search/products
* `searchProductsCodes` - /search/products/codes

### taxonomyServices

* `taxonomyAttractions` - /taxonomy/attractions
* `taxonomyCategories` - /taxonomy/categories
* `taxonomyDestinations` - /taxonomy/destinations
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
