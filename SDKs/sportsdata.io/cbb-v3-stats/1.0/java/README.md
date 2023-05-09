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
* [boxScore](docs/sdk/README.md#boxscore) - Box Score
* [boxScoresByDate](docs/sdk/README.md#boxscoresbydate) - Box Scores by Date
* [boxScoresByDateDelta](docs/sdk/README.md#boxscoresbydatedelta) - Box Scores by Date Delta
* [currentSeason](docs/sdk/README.md#currentseason) - Current Season
* [gamesByDate](docs/sdk/README.md#gamesbydate) - Games by Date
* [injuredPlayers](docs/sdk/README.md#injuredplayers) - Injured Players
* [leagueHierarchy](docs/sdk/README.md#leaguehierarchy) - League Hierarchy
* [playerDetailsByActive](docs/sdk/README.md#playerdetailsbyactive) - Player Details by Active
* [playerDetailsByPlayer](docs/sdk/README.md#playerdetailsbyplayer) - Player Details by Player
* [playerDetailsByTeam](docs/sdk/README.md#playerdetailsbyteam) - Player Details by Team
* [playerGameLogsBySeason](docs/sdk/README.md#playergamelogsbyseason) - Player Game Logs By Season
* [playerGameStatsByDate](docs/sdk/README.md#playergamestatsbydate) - Player Game Stats by Date
* [playerGameStatsByPlayer](docs/sdk/README.md#playergamestatsbyplayer) - Player Game Stats by Player
* [playerSeasonStats](docs/sdk/README.md#playerseasonstats) - Player Season Stats
* [playerSeasonStatsByPlayer](docs/sdk/README.md#playerseasonstatsbyplayer) - Player Season Stats By Player
* [playerSeasonStatsByTeam](docs/sdk/README.md#playerseasonstatsbyteam) - Player Season Stats by Team
* [projectedPlayerGameStatsByDate](docs/sdk/README.md#projectedplayergamestatsbydate) - Projected Player Game Stats by Date
* [projectedPlayerGameStatsByPlayer](docs/sdk/README.md#projectedplayergamestatsbyplayer) - Projected Player Game Stats by Player
* [schedules](docs/sdk/README.md#schedules) - Schedules
* [stadiums](docs/sdk/README.md#stadiums) - Stadiums
* [teamGameLogsBySeason](docs/sdk/README.md#teamgamelogsbyseason) - Team Game Logs By Season
* [teamGameStatsByDate](docs/sdk/README.md#teamgamestatsbydate) - Team Game Stats by Date
* [teamSeasonStats](docs/sdk/README.md#teamseasonstats) - Team Season Stats
* [teams](docs/sdk/README.md#teams) - Teams
* [tournamentHierarchy](docs/sdk/README.md#tournamenthierarchy) - Tournament Hierarchy
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
