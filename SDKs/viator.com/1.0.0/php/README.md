# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BookingAvailabilityRequest;
use \OpenAPI\OpenAPI\Models\Operations\BookingAvailabilityRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\BookingAvailabilityRequestBodyAgeBands;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BookingAvailabilityRequest();
    $request->acceptLanguage = 'en-US';
    $request->requestBody = new BookingAvailabilityRequestBody();
    $request->requestBody->ageBands = [
        new BookingAvailabilityRequestBodyAgeBands(),
        new BookingAvailabilityRequestBodyAgeBands(),
        new BookingAvailabilityRequestBodyAgeBands(),
    ];
    $request->requestBody->currencyCode = 'provident';
    $request->requestBody->month = 'distinctio';
    $request->requestBody->productCode = 'quibusdam';
    $request->requestBody->year = 'unde';

    $response = $sdk->bookingServices->bookingAvailability($request);

    if ($response->bookingAvailability200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [bookingServices](docs/bookingservices/README.md)

* [bookingAvailability](docs/bookingservices/README.md#bookingavailability) - /booking/availability
* [bookingAvailabilityDates](docs/bookingservices/README.md#bookingavailabilitydates) - /booking/availability/dates
* [bookingAvailabilityTourgrades](docs/bookingservices/README.md#bookingavailabilitytourgrades) - /booking/availability/tourgrades
* [bookingAvailabilityTourgradesPricingmatrix](docs/bookingservices/README.md#bookingavailabilitytourgradespricingmatrix) - /booking/availability/tourgrades/pricingmatrix
* [bookingBook](docs/bookingservices/README.md#bookingbook) - /booking/book
* [bookingCalculateprice](docs/bookingservices/README.md#bookingcalculateprice) - /booking/calculateprice
* [bookingHotels](docs/bookingservices/README.md#bookinghotels) - /booking/hotels
* [bookingMybookings](docs/bookingservices/README.md#bookingmybookings) - /booking/mybookings
* [bookingPastbooking](docs/bookingservices/README.md#bookingpastbooking) - /booking/pastbooking
* [bookingPricingmatrix](docs/bookingservices/README.md#bookingpricingmatrix) - /booking/pricingmatrix
* [bookingStatus](docs/bookingservices/README.md#bookingstatus) - /booking/status
* [bookingStatusItems](docs/bookingservices/README.md#bookingstatusitems) - /booking/status/items
* [bookingVoucher](docs/bookingservices/README.md#bookingvoucher) - /booking/voucher
* [cancelBooking](docs/bookingservices/README.md#cancelbooking) - /bookings/{booking-reference}/cancel
* [cancelBookingQuote](docs/bookingservices/README.md#cancelbookingquote) - /bookings/{booking-reference}/cancel-quote
* [cancellationReasons](docs/bookingservices/README.md#cancellationreasons) - /bookings/cancel-reasons

### [deprecatedServices](docs/deprecatedservices/README.md)

* [~~merchantCancellation~~](docs/deprecatedservices/README.md#merchantcancellation) - /merchant/cancellation :warning: **Deprecated**

### [generalServices](docs/generalservices/README.md)

* [healthCheck](docs/generalservices/README.md#healthcheck) - /health/check

### [productServices](docs/productservices/README.md)

* [availableProducts](docs/productservices/README.md#availableproducts) - /available/products
* [product](docs/productservices/README.md#product) - /product
* [productPhotos](docs/productservices/README.md#productphotos) - /product/photos
* [productReviews](docs/productservices/README.md#productreviews) - /product/reviews
* [searchFreetext](docs/productservices/README.md#searchfreetext) - /search/freetext
* [searchProducts](docs/productservices/README.md#searchproducts) - /search/products
* [searchProductsCodes](docs/productservices/README.md#searchproductscodes) - /search/products/codes

### [taxonomyServices](docs/taxonomyservices/README.md)

* [taxonomyAttractions](docs/taxonomyservices/README.md#taxonomyattractions) - /taxonomy/attractions
* [taxonomyCategories](docs/taxonomyservices/README.md#taxonomycategories) - /taxonomy/categories
* [taxonomyDestinations](docs/taxonomyservices/README.md#taxonomydestinations) - /taxonomy/destinations
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
