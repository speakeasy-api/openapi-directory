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
import org.openapis.openapi.models.operations.AllStarsFormatEnum;
import org.openapis.openapi.models.operations.AllStarsRequest;
import org.openapis.openapi.models.operations.AllStarsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            AllStarsRequest req = new AllStarsRequest() {{
                format = "JSON";
                season = "provident";
            }}            

            AllStarsResponse res = sdk.allStars(req);

            if (res.playerInfos.isPresent()) {
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

* `allStars` - All-Stars
* `areGamesInProgress` - Are Games In Progress
* `boxScore` - Box Score
* `boxScoresByDate` - Box Scores by Date
* `boxScoresByDateDelta` - Box Scores by Date Delta
* `currentSeason` - Current Season
* `dfsSlatesByDate` - DFS Slates by Date
* `gamesByDate` - Games by Date
* `news` - News
* `newsByDate` - News by Date
* `newsByPlayer` - News by Player
* `playerDetailsByActive` - Player Details by Active
* `playerDetailsByFreeAgent` - Player Details by Free Agent
* `playerDetailsByPlayer` - Player Details by Player
* `playerGameLogsBySeason` - Player Game Logs By Season
* `playerGameStatsByDate` - Player Game Stats by Date
* `playerGameStatsByPlayer` - Player Game Stats by Player
* `playerSeasonStats` - Player Season Stats
* `playerSeasonStatsByPlayer` - Player Season Stats By Player
* `playerSeasonStatsByTeam` - Player Season Stats by Team
* `playersByTeam` - Players by Team
* `schedules` - Schedules
* `stadiums` - Stadiums
* `standings` - Standings
* `teamGameLogsBySeason` - Team Game Logs By Season
* `teamGameStatsByDate` - Team Game Stats by Date
* `teamSeasonStats` - Team Season Stats
* `teamStatsAllowedByPosition` - Team Stats Allowed by Position
* `teamsActive` - Teams (Active)
* `teamsAll` - Teams (All)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
