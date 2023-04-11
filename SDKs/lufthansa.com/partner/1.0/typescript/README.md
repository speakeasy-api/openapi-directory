# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/lufthansa.com/partner/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/lufthansa.com/partner/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  BaggageTripAndContactRequest,
  BaggageTripAndContactResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BaggageTripAndContactRequest = {
  accept: "corrupti",
  searchID: "provident",
};

sdk.baggage.baggageTripAndContact(req).then((res: BaggageTripAndContactResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### baggage

* `baggageTripAndContact` - Baggage Trip and Contact

### offers

* `allFares` - All Fares
* `bestFares` - Best Fares
* `deepLinks` - Deep Links
* `fares` - Fares
* `faresSubscriptions` - Fares Subscriptions
* `lhDeepLinksFFP` - LH Deep Links - FFP
* `lhDeepLinksITCO` - LH Deep Links - ITCO
* `lowestFares` - Lowest Fares
* `ondRoute` - OND Route
* `ondStatus` - OND Status
* `topOND` - Top OND

### orders

* `orders` - Orders

### preflight

* `autoCheckIn` - Auto Check-In

### promotions

* `priceOffers` - Price Offers

### referenceData

* `seatDetails` - Seat Details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

