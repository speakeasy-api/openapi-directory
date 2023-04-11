# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/impala.travel/hotels/1.003/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/impala.travel/hotels/1.003/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CancelBookingRequest,
  CancelBookingResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyAuthentication: "YOUR_API_KEY_HERE",
  },
});

const req: CancelBookingRequest = {
  bookingId: "corrupti",
};

sdk.bookings.cancelBooking(req).then((res: CancelBookingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### bookings

* `cancelBooking` - Cancel a booking
* `createBooking` - Create a booking
* `listBookings` - List all bookings
* `retrieveBooking` - Retrieve a booking
* `updateBooking` - Change a booking
* `updateBookingContact` - Change a booking contact

### hotels

* `listHotels` - List all hotels
* `retrieveHotel` - Retrieve a hotel

### rateCalendar

* `listRatePlanForHotelForRatePlanId` - List a rate plan (rate calendar) for a hotel (Beta endpoint).
* `listRatePlansForHotel` - List all rate plans (rate calendar) for a hotel (Beta endpoint)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

