# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/telematicssdk.com/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/telematicssdk.com/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  TripsTripDetailsRequest,
  TripsTripDetailsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: TripsTripDetailsRequest = {
  trackToken: "corrupti",
};

sdk.twoForMobileAppOptional.tripsTripDetails(req).then((res: TripsTripDetailsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### twoForMobileAppOptional

* `tripsTripDetails` - Trips - trip details
* `userSafeScoringAccumulatedValueV1ScoringsIndividual` - User safe scoring - Accumulated value - v1/Scorings/individual
* `userSafeScoringDailyValueV1ScoringsIndividualDaily` - User safe scoring - daily value - /v1/Scorings/individual/daily
* `userStatisticeDailyValueV1StatisticsIndividualDaily` - User statistice - Daily value - v1/Statistics/individual/daily
* `userStatisticsAccumulatedValueV1StatisticsIndividual` - User statistics - Accumulated value - /v1/Statistics/individual

### two1UserStatisticsOptional

* `userStatisticeDailyValueV1StatisticsIndividualDaily` - User statistice - Daily value - v1/Statistics/individual/daily
* `userStatisticsAccumulatedValueV1StatisticsIndividual` - User statistics - Accumulated value - /v1/Statistics/individual

### two2UserTripsOptional

* `tripsTripDetails` - Trips - trip details

### two4UserSafeScoringOptional

* `userSafeScoringAccumulatedValueV1ScoringsIndividual` - User safe scoring - Accumulated value - v1/Scorings/individual
* `userSafeScoringDailyValueV1ScoringsIndividualDaily` - User safe scoring - daily value - /v1/Scorings/individual/daily

### threeForBackEndOptional

* `rootV1ScoringsConsolidated` - /v1/Scorings/consolidated
* `rootV1ScoringsConsolidatedDaily` - /v1/Scorings/consolidated/daily
* `rootV1StatisticsConsolidated` - /v1/Statistics/consolidated
* `rootV1StatisticsConsolidatedDaily` - /v1/Statistics/consolidated/daily

### consolidatedSafeScoring

* `rootV1ScoringsConsolidated` - /v1/Scorings/consolidated
* `rootV1ScoringsConsolidatedDaily` - /v1/Scorings/consolidated/daily

### consolidatedStatistics

* `rootV1StatisticsConsolidated` - /v1/Statistics/consolidated
* `rootV1StatisticsConsolidatedDaily` - /v1/Statistics/consolidated/daily
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

