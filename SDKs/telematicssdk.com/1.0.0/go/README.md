# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/telematicssdk.com/1.0.0/go
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
    s := sdk.New()

    req := operations.TripsTripDetailsRequest{
        TrackToken: "corrupti",
    }

    ctx := context.Background()
    res, err := s.TwoForMobileAppOptional.TripsTripDetails(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TripsTripDetails200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### TwoForMobileAppOptional

* `TripsTripDetails` - Trips - trip details
* `UserSafeScoringAccumulatedValueV1ScoringsIndividual` - User safe scoring - Accumulated value - v1/Scorings/individual
* `UserSafeScoringDailyValueV1ScoringsIndividualDaily` - User safe scoring - daily value - /v1/Scorings/individual/daily
* `UserStatisticeDailyValueV1StatisticsIndividualDaily` - User statistice - Daily value - v1/Statistics/individual/daily
* `UserStatisticsAccumulatedValueV1StatisticsIndividual` - User statistics - Accumulated value - /v1/Statistics/individual

### Two1UserStatisticsOptional

* `UserStatisticeDailyValueV1StatisticsIndividualDaily` - User statistice - Daily value - v1/Statistics/individual/daily
* `UserStatisticsAccumulatedValueV1StatisticsIndividual` - User statistics - Accumulated value - /v1/Statistics/individual

### Two2UserTripsOptional

* `TripsTripDetails` - Trips - trip details

### Two4UserSafeScoringOptional

* `UserSafeScoringAccumulatedValueV1ScoringsIndividual` - User safe scoring - Accumulated value - v1/Scorings/individual
* `UserSafeScoringDailyValueV1ScoringsIndividualDaily` - User safe scoring - daily value - /v1/Scorings/individual/daily

### ThreeForBackEndOptional

* `RootV1ScoringsConsolidated` - /v1/Scorings/consolidated
* `RootV1ScoringsConsolidatedDaily` - /v1/Scorings/consolidated/daily
* `RootV1StatisticsConsolidated` - /v1/Statistics/consolidated
* `RootV1StatisticsConsolidatedDaily` - /v1/Statistics/consolidated/daily

### ConsolidatedSafeScoring

* `RootV1ScoringsConsolidated` - /v1/Scorings/consolidated
* `RootV1ScoringsConsolidatedDaily` - /v1/Scorings/consolidated/daily

### ConsolidatedStatistics

* `RootV1StatisticsConsolidated` - /v1/Statistics/consolidated
* `RootV1StatisticsConsolidatedDaily` - /v1/Statistics/consolidated/daily
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
