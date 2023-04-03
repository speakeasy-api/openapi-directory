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
import org.openapis.openapi.models.operations.CurrentSeasonFormatEnum;
import org.openapis.openapi.models.operations.CurrentSeasonRequest;
import org.openapis.openapi.models.operations.CurrentSeasonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            CurrentSeasonRequest req = new CurrentSeasonRequest() {{
                format = "JSON";
            }}            

            CurrentSeasonResponse res = sdk.currentSeason(req);

            if (res.season.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `currentSeason` - Current Season
* `dfsSlates` - DFS Slates
* `injuries` - Injuries
* `injuriesHistorical` - Injuries (Historical)
* `leaderboard` - Leaderboard
* `news` - News
* `newsByDate` - News by Date
* `newsByPlayer` - News by Player
* `player` - Player
* `playerSeasonStatsWWorldGolfRankings` - Player Season Stats (w/ World Golf Rankings)
* `playerTournamentProjectedStatsWDraftkingsSalaries` - Player Tournament Projected Stats (w/ DraftKings Salaries)
* `playerTournamentStatsByPlayer` - Player Tournament Stats By Player
* `players` - Players
* `schedule` - Schedule
* `scheduleBySeason` - Schedule by Season
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
