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
import org.openapis.openapi.models.operations.AreGamesInProgressFormatEnum;
import org.openapis.openapi.models.operations.AreGamesInProgressRequest;
import org.openapis.openapi.models.operations.AreGamesInProgressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            AreGamesInProgressRequest req = new AreGamesInProgressRequest(AreGamesInProgressFormatEnum.JSON);            

            AreGamesInProgressResponse res = sdk.areGamesInProgress(req);

            if (res.areGamesInProgress200ApplicationJSONBoolean != null) {
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

### [SDK](docs/sdk/README.md)

* [areGamesInProgress](docs/sdk/README.md#aregamesinprogress) - Are Games In Progress
* [byeWeeks](docs/sdk/README.md#byeweeks) - Bye Weeks
* [depthCharts](docs/sdk/README.md#depthcharts) - Depth Charts
* [gameStatsBySeasonDeprecatedUseTeamGameStatsInstead](docs/sdk/README.md#gamestatsbyseasondeprecateduseteamgamestatsinstead) - Game Stats by Season (Deprecated, use Team Game Stats instead)
* [gameStatsByWeekDeprecatedUseTeamGameStatsInstead](docs/sdk/README.md#gamestatsbyweekdeprecateduseteamgamestatsinstead) - Game Stats by Week (Deprecated, use Team Game Stats instead)
* [news](docs/sdk/README.md#news) - News
* [newsByDate](docs/sdk/README.md#newsbydate) - News by Date
* [newsByPlayer](docs/sdk/README.md#newsbyplayer) - News by Player
* [newsByTeam](docs/sdk/README.md#newsbyteam) - News by Team
* [playerDetailsByAvailable](docs/sdk/README.md#playerdetailsbyavailable) - Player Details by Available
* [playerDetailsByFreeAgents](docs/sdk/README.md#playerdetailsbyfreeagents) - Player Details by Free Agents
* [playerDetailsByPlayer](docs/sdk/README.md#playerdetailsbyplayer) - Player Details by Player
* [playerDetailsByRookieDraftYear](docs/sdk/README.md#playerdetailsbyrookiedraftyear) - Player Details by Rookie Draft Year
* [playerDetailsByTeam](docs/sdk/README.md#playerdetailsbyteam) - Player Details by Team
* [playersByTeamBasic](docs/sdk/README.md#playersbyteambasic) - Players by Team (Basic)
* [referees](docs/sdk/README.md#referees) - Referees
* [schedule](docs/sdk/README.md#schedule) - Schedule
* [scheduleBasic](docs/sdk/README.md#schedulebasic) - Schedule (Basic)
* [scoresByDate](docs/sdk/README.md#scoresbydate) - Scores by Date
* [scoresBySeason](docs/sdk/README.md#scoresbyseason) - Scores by Season 
* [scoresByWeek](docs/sdk/README.md#scoresbyweek) - Scores by Week
* [scoresByWeekBasic](docs/sdk/README.md#scoresbyweekbasic) - Scores by Week (Basic)
* [scoresByWeekSimulation](docs/sdk/README.md#scoresbyweeksimulation) - Scores by Week Simulation
* [seasonCurrent](docs/sdk/README.md#seasoncurrent) - Season Current
* [seasonLastCompleted](docs/sdk/README.md#seasonlastcompleted) - Season Last Completed
* [seasonUpcoming](docs/sdk/README.md#seasonupcoming) - Season Upcoming
* [stadiums](docs/sdk/README.md#stadiums) - Stadiums
* [standings](docs/sdk/README.md#standings) - Standings
* [teamGameLogsBySeason](docs/sdk/README.md#teamgamelogsbyseason) - Team Game Logs By Season
* [teamGameStats](docs/sdk/README.md#teamgamestats) - Team Game Stats
* [teamSeasonStats](docs/sdk/README.md#teamseasonstats) - Team Season Stats
* [teamsActive](docs/sdk/README.md#teamsactive) - Teams (Active)
* [teamsAll](docs/sdk/README.md#teamsall) - Teams (All)
* [teamsBasic](docs/sdk/README.md#teamsbasic) - Teams (Basic)
* [teamsBySeason](docs/sdk/README.md#teamsbyseason) - Teams by Season
* [timeframes](docs/sdk/README.md#timeframes) - Timeframes
* [weekCurrent](docs/sdk/README.md#weekcurrent) - Week Current
* [weekLastCompleted](docs/sdk/README.md#weeklastcompleted) - Week Last Completed
* [weekUpcoming](docs/sdk/README.md#weekupcoming) - Week Upcoming
* [xPing](docs/sdk/README.md#xping) - X Ping
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
