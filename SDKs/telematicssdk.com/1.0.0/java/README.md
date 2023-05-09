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
import org.openapis.openapi.models.operations.TripsTripDetailsRequest;
import org.openapis.openapi.models.operations.TripsTripDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TripsTripDetailsRequest req = new TripsTripDetailsRequest() {{
                trackToken = "corrupti";
            }};            

            TripsTripDetailsResponse res = sdk.twoForMobileAppOptional.tripsTripDetails(req);

            if (res.tripsTripDetails200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [twoForMobileAppOptional](docs/twoformobileappoptional/README.md)

* [tripsTripDetails](docs/twoformobileappoptional/README.md#tripstripdetails) - Trips - trip details
* [userSafeScoringAccumulatedValueV1ScoringsIndividual](docs/twoformobileappoptional/README.md#usersafescoringaccumulatedvaluev1scoringsindividual) - User safe scoring - Accumulated value - v1/Scorings/individual
* [userSafeScoringDailyValueV1ScoringsIndividualDaily](docs/twoformobileappoptional/README.md#usersafescoringdailyvaluev1scoringsindividualdaily) - User safe scoring - daily value - /v1/Scorings/individual/daily
* [userStatisticeDailyValueV1StatisticsIndividualDaily](docs/twoformobileappoptional/README.md#userstatisticedailyvaluev1statisticsindividualdaily) - User statistice - Daily value - v1/Statistics/individual/daily
* [userStatisticsAccumulatedValueV1StatisticsIndividual](docs/twoformobileappoptional/README.md#userstatisticsaccumulatedvaluev1statisticsindividual) - User statistics - Accumulated value - /v1/Statistics/individual

### [two1UserStatisticsOptional](docs/two1userstatisticsoptional/README.md)

* [userStatisticeDailyValueV1StatisticsIndividualDaily](docs/two1userstatisticsoptional/README.md#userstatisticedailyvaluev1statisticsindividualdaily) - User statistice - Daily value - v1/Statistics/individual/daily
* [userStatisticsAccumulatedValueV1StatisticsIndividual](docs/two1userstatisticsoptional/README.md#userstatisticsaccumulatedvaluev1statisticsindividual) - User statistics - Accumulated value - /v1/Statistics/individual

### [two2UserTripsOptional](docs/two2usertripsoptional/README.md)

* [tripsTripDetails](docs/two2usertripsoptional/README.md#tripstripdetails) - Trips - trip details

### [two4UserSafeScoringOptional](docs/two4usersafescoringoptional/README.md)

* [userSafeScoringAccumulatedValueV1ScoringsIndividual](docs/two4usersafescoringoptional/README.md#usersafescoringaccumulatedvaluev1scoringsindividual) - User safe scoring - Accumulated value - v1/Scorings/individual
* [userSafeScoringDailyValueV1ScoringsIndividualDaily](docs/two4usersafescoringoptional/README.md#usersafescoringdailyvaluev1scoringsindividualdaily) - User safe scoring - daily value - /v1/Scorings/individual/daily

### [threeForBackEndOptional](docs/threeforbackendoptional/README.md)

* [rootV1ScoringsConsolidated](docs/threeforbackendoptional/README.md#rootv1scoringsconsolidated) - /v1/Scorings/consolidated
* [rootV1ScoringsConsolidatedDaily](docs/threeforbackendoptional/README.md#rootv1scoringsconsolidateddaily) - /v1/Scorings/consolidated/daily
* [rootV1StatisticsConsolidated](docs/threeforbackendoptional/README.md#rootv1statisticsconsolidated) - /v1/Statistics/consolidated
* [rootV1StatisticsConsolidatedDaily](docs/threeforbackendoptional/README.md#rootv1statisticsconsolidateddaily) - /v1/Statistics/consolidated/daily

### [consolidatedSafeScoring](docs/consolidatedsafescoring/README.md)

* [rootV1ScoringsConsolidated](docs/consolidatedsafescoring/README.md#rootv1scoringsconsolidated) - /v1/Scorings/consolidated
* [rootV1ScoringsConsolidatedDaily](docs/consolidatedsafescoring/README.md#rootv1scoringsconsolidateddaily) - /v1/Scorings/consolidated/daily

### [consolidatedStatistics](docs/consolidatedstatistics/README.md)

* [rootV1StatisticsConsolidated](docs/consolidatedstatistics/README.md#rootv1statisticsconsolidated) - /v1/Statistics/consolidated
* [rootV1StatisticsConsolidatedDaily](docs/consolidatedstatistics/README.md#rootv1statisticsconsolidateddaily) - /v1/Statistics/consolidated/daily
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
