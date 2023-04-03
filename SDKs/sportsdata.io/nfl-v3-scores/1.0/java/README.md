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
import org.openapis.openapi.models.operations.AreGamesInProgressFormatEnum;
import org.openapis.openapi.models.operations.AreGamesInProgressRequest;
import org.openapis.openapi.models.operations.AreGamesInProgressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            AreGamesInProgressRequest req = new AreGamesInProgressRequest() {{
                format = "JSON";
            }}            

            AreGamesInProgressResponse res = sdk.areGamesInProgress(req);

            if (res.areGamesInProgress200ApplicationJSONBoolean.isPresent()) {
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

* `areGamesInProgress` - Are Games In Progress
* `byeWeeks` - Bye Weeks
* `depthCharts` - Depth Charts
* `gameStatsBySeasonDeprecatedUseTeamGameStatsInstead` - Game Stats by Season (Deprecated, use Team Game Stats instead)
* `gameStatsByWeekDeprecatedUseTeamGameStatsInstead` - Game Stats by Week (Deprecated, use Team Game Stats instead)
* `news` - News
* `newsByDate` - News by Date
* `newsByPlayer` - News by Player
* `newsByTeam` - News by Team
* `playerDetailsByAvailable` - Player Details by Available
* `playerDetailsByFreeAgents` - Player Details by Free Agents
* `playerDetailsByPlayer` - Player Details by Player
* `playerDetailsByRookieDraftYear` - Player Details by Rookie Draft Year
* `playerDetailsByTeam` - Player Details by Team
* `referees` - Referees
* `schedule` - Schedule
* `scoresByDate` - Scores by Date
* `scoresBySeason` - Scores by Season 
* `scoresByWeek` - Scores by Week
* `scoresByWeekSimulation` - Scores by Week Simulation
* `seasonCurrent` - Season Current
* `seasonLastCompleted` - Season Last Completed
* `seasonUpcoming` - Season Upcoming
* `stadiums` - Stadiums
* `standings` - Standings
* `teamGameLogsBySeason` - Team Game Logs By Season
* `teamGameStats` - Team Game Stats
* `teamSeasonStats` - Team Season Stats
* `teamsActive` - Teams (Active)
* `teamsAll` - Teams (All)
* `teamsBySeason` - Teams by Season
* `timeframes` - Timeframes
* `weekCurrent` - Week Current
* `weekLastCompleted` - Week Last Completed
* `weekUpcoming` - Week Upcoming
* `xPing` - X Ping
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
