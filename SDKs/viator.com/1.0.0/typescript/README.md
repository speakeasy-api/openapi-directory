# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/viator.com/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/viator.com/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  BookingAvailabilityRequest,
  BookingAvailabilityResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: BookingAvailabilityRequest = {
  acceptLanguage: "en-US",
  requestBody: {
    ageBands: [
      {
        bandId: 592845,
        count: 715190,
      },
      {
        bandId: 844266,
        count: 602763,
      },
      {
        bandId: 857946,
        count: 544883,
      },
    ],
    currencyCode: "illum",
    month: "vel",
    productCode: "error",
    year: "deserunt",
  },
};

sdk.bookingServices.bookingAvailability(req).then((res: BookingAvailabilityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

