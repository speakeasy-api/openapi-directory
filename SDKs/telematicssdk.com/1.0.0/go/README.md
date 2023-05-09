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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TwoForMobileAppOptional.TripsTripDetails(ctx, operations.TripsTripDetailsRequest{
        TrackToken: sdk.String("corrupti"),
    })
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


### [TwoForMobileAppOptional](docs/twoformobileappoptional/README.md)

* [TripsTripDetails](docs/twoformobileappoptional/README.md#tripstripdetails) - Trips - trip details
* [UserSafeScoringAccumulatedValueV1ScoringsIndividual](docs/twoformobileappoptional/README.md#usersafescoringaccumulatedvaluev1scoringsindividual) - User safe scoring - Accumulated value - v1/Scorings/individual
* [UserSafeScoringDailyValueV1ScoringsIndividualDaily](docs/twoformobileappoptional/README.md#usersafescoringdailyvaluev1scoringsindividualdaily) - User safe scoring - daily value - /v1/Scorings/individual/daily
* [UserStatisticeDailyValueV1StatisticsIndividualDaily](docs/twoformobileappoptional/README.md#userstatisticedailyvaluev1statisticsindividualdaily) - User statistice - Daily value - v1/Statistics/individual/daily
* [UserStatisticsAccumulatedValueV1StatisticsIndividual](docs/twoformobileappoptional/README.md#userstatisticsaccumulatedvaluev1statisticsindividual) - User statistics - Accumulated value - /v1/Statistics/individual

### [Two1UserStatisticsOptional](docs/two1userstatisticsoptional/README.md)

* [UserStatisticeDailyValueV1StatisticsIndividualDaily](docs/two1userstatisticsoptional/README.md#userstatisticedailyvaluev1statisticsindividualdaily) - User statistice - Daily value - v1/Statistics/individual/daily
* [UserStatisticsAccumulatedValueV1StatisticsIndividual](docs/two1userstatisticsoptional/README.md#userstatisticsaccumulatedvaluev1statisticsindividual) - User statistics - Accumulated value - /v1/Statistics/individual

### [Two2UserTripsOptional](docs/two2usertripsoptional/README.md)

* [TripsTripDetails](docs/two2usertripsoptional/README.md#tripstripdetails) - Trips - trip details

### [Two4UserSafeScoringOptional](docs/two4usersafescoringoptional/README.md)

* [UserSafeScoringAccumulatedValueV1ScoringsIndividual](docs/two4usersafescoringoptional/README.md#usersafescoringaccumulatedvaluev1scoringsindividual) - User safe scoring - Accumulated value - v1/Scorings/individual
* [UserSafeScoringDailyValueV1ScoringsIndividualDaily](docs/two4usersafescoringoptional/README.md#usersafescoringdailyvaluev1scoringsindividualdaily) - User safe scoring - daily value - /v1/Scorings/individual/daily

### [ThreeForBackEndOptional](docs/threeforbackendoptional/README.md)

* [RootV1ScoringsConsolidated](docs/threeforbackendoptional/README.md#rootv1scoringsconsolidated) - /v1/Scorings/consolidated
* [RootV1ScoringsConsolidatedDaily](docs/threeforbackendoptional/README.md#rootv1scoringsconsolidateddaily) - /v1/Scorings/consolidated/daily
* [RootV1StatisticsConsolidated](docs/threeforbackendoptional/README.md#rootv1statisticsconsolidated) - /v1/Statistics/consolidated
* [RootV1StatisticsConsolidatedDaily](docs/threeforbackendoptional/README.md#rootv1statisticsconsolidateddaily) - /v1/Statistics/consolidated/daily

### [ConsolidatedSafeScoring](docs/consolidatedsafescoring/README.md)

* [RootV1ScoringsConsolidated](docs/consolidatedsafescoring/README.md#rootv1scoringsconsolidated) - /v1/Scorings/consolidated
* [RootV1ScoringsConsolidatedDaily](docs/consolidatedsafescoring/README.md#rootv1scoringsconsolidateddaily) - /v1/Scorings/consolidated/daily

### [ConsolidatedStatistics](docs/consolidatedstatistics/README.md)

* [RootV1StatisticsConsolidated](docs/consolidatedstatistics/README.md#rootv1statisticsconsolidated) - /v1/Statistics/consolidated
* [RootV1StatisticsConsolidatedDaily](docs/consolidatedstatistics/README.md#rootv1statisticsconsolidateddaily) - /v1/Statistics/consolidated/daily
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
