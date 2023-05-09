# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/sportsdata.io/nfl-v3-scores/1.0/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.AreGamesInProgress(ctx, operations.AreGamesInProgressRequest{
        Format: operations.AreGamesInProgressFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AreGamesInProgress200ApplicationJSONBoolean != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AreGamesInProgress](docs/sdk/README.md#aregamesinprogress) - Are Games In Progress
* [ByeWeeks](docs/sdk/README.md#byeweeks) - Bye Weeks
* [DepthCharts](docs/sdk/README.md#depthcharts) - Depth Charts
* [GameStatsBySeasonDeprecatedUseTeamGameStatsInstead](docs/sdk/README.md#gamestatsbyseasondeprecateduseteamgamestatsinstead) - Game Stats by Season (Deprecated, use Team Game Stats instead)
* [GameStatsByWeekDeprecatedUseTeamGameStatsInstead](docs/sdk/README.md#gamestatsbyweekdeprecateduseteamgamestatsinstead) - Game Stats by Week (Deprecated, use Team Game Stats instead)
* [News](docs/sdk/README.md#news) - News
* [NewsByDate](docs/sdk/README.md#newsbydate) - News by Date
* [NewsByPlayer](docs/sdk/README.md#newsbyplayer) - News by Player
* [NewsByTeam](docs/sdk/README.md#newsbyteam) - News by Team
* [PlayerDetailsByAvailable](docs/sdk/README.md#playerdetailsbyavailable) - Player Details by Available
* [PlayerDetailsByFreeAgents](docs/sdk/README.md#playerdetailsbyfreeagents) - Player Details by Free Agents
* [PlayerDetailsByPlayer](docs/sdk/README.md#playerdetailsbyplayer) - Player Details by Player
* [PlayerDetailsByRookieDraftYear](docs/sdk/README.md#playerdetailsbyrookiedraftyear) - Player Details by Rookie Draft Year
* [PlayerDetailsByTeam](docs/sdk/README.md#playerdetailsbyteam) - Player Details by Team
* [PlayersByTeamBasic](docs/sdk/README.md#playersbyteambasic) - Players by Team (Basic)
* [Referees](docs/sdk/README.md#referees) - Referees
* [Schedule](docs/sdk/README.md#schedule) - Schedule
* [ScheduleBasic](docs/sdk/README.md#schedulebasic) - Schedule (Basic)
* [ScoresByDate](docs/sdk/README.md#scoresbydate) - Scores by Date
* [ScoresBySeason](docs/sdk/README.md#scoresbyseason) - Scores by Season 
* [ScoresByWeek](docs/sdk/README.md#scoresbyweek) - Scores by Week
* [ScoresByWeekBasic](docs/sdk/README.md#scoresbyweekbasic) - Scores by Week (Basic)
* [ScoresByWeekSimulation](docs/sdk/README.md#scoresbyweeksimulation) - Scores by Week Simulation
* [SeasonCurrent](docs/sdk/README.md#seasoncurrent) - Season Current
* [SeasonLastCompleted](docs/sdk/README.md#seasonlastcompleted) - Season Last Completed
* [SeasonUpcoming](docs/sdk/README.md#seasonupcoming) - Season Upcoming
* [Stadiums](docs/sdk/README.md#stadiums) - Stadiums
* [Standings](docs/sdk/README.md#standings) - Standings
* [TeamGameLogsBySeason](docs/sdk/README.md#teamgamelogsbyseason) - Team Game Logs By Season
* [TeamGameStats](docs/sdk/README.md#teamgamestats) - Team Game Stats
* [TeamSeasonStats](docs/sdk/README.md#teamseasonstats) - Team Season Stats
* [TeamsActive](docs/sdk/README.md#teamsactive) - Teams (Active)
* [TeamsAll](docs/sdk/README.md#teamsall) - Teams (All)
* [TeamsBasic](docs/sdk/README.md#teamsbasic) - Teams (Basic)
* [TeamsBySeason](docs/sdk/README.md#teamsbyseason) - Teams by Season
* [Timeframes](docs/sdk/README.md#timeframes) - Timeframes
* [WeekCurrent](docs/sdk/README.md#weekcurrent) - Week Current
* [WeekLastCompleted](docs/sdk/README.md#weeklastcompleted) - Week Last Completed
* [WeekUpcoming](docs/sdk/README.md#weekupcoming) - Week Upcoming
* [XPing](docs/sdk/README.md#xping) - X Ping
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
