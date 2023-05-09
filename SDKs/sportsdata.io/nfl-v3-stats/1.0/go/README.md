# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/sportsdata.io/nfl-v3-stats/1.0/go
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
* [BoxScoreByScoreidV](docs/sdk/README.md#boxscorebyscoreidv) - Box Score by ScoreID V3
* [BoxScoreV](docs/sdk/README.md#boxscorev) - Box Score V3
* [BoxScoresDeltaV](docs/sdk/README.md#boxscoresdeltav) - Box Scores Delta V3
* [BoxScoresVSimulation](docs/sdk/README.md#boxscoresvsimulation) - Box Scores V3 Simulation
* [ByeWeeks](docs/sdk/README.md#byeweeks) - Bye Weeks
* [DailyFantasyPlayers](docs/sdk/README.md#dailyfantasyplayers) - Daily Fantasy Players
* [DailyFantasyScoring](docs/sdk/README.md#dailyfantasyscoring) - Daily Fantasy Scoring
* [DfsSlatesByDate](docs/sdk/README.md#dfsslatesbydate) - DFS Slates by Date
* [DfsSlatesByWeek](docs/sdk/README.md#dfsslatesbyweek) - DFS Slates by Week
* [FantasyDefenseGameStats](docs/sdk/README.md#fantasydefensegamestats) - Fantasy Defense Game Stats
* [FantasyDefenseGameStatsByTeam](docs/sdk/README.md#fantasydefensegamestatsbyteam) - Fantasy Defense Game Stats by Team
* [FantasyDefenseSeasonStats](docs/sdk/README.md#fantasydefenseseasonstats) - Fantasy Defense Season Stats
* [FantasyDefenseSeasonStatsByTeam](docs/sdk/README.md#fantasydefenseseasonstatsbyteam) - Fantasy Defense Season Stats by Team
* [FantasyPlayerOwnershipPercentagesSeasonLong](docs/sdk/README.md#fantasyplayerownershippercentagesseasonlong) - Fantasy Player Ownership Percentages (Season-Long)
* [FantasyPlayersWithAdp](docs/sdk/README.md#fantasyplayerswithadp) - Fantasy Players with ADP
* [GameStatsBySeasonDeprecatedUseTeamGameStatsInstead](docs/sdk/README.md#gamestatsbyseasondeprecateduseteamgamestatsinstead) - Game Stats by Season (Deprecated, use Team Game Stats instead)
* [GameStatsByWeekDeprecatedUseTeamGameStatsInstead](docs/sdk/README.md#gamestatsbyweekdeprecateduseteamgamestatsinstead) - Game Stats by Week (Deprecated, use Team Game Stats instead)
* [IdpFantasyPlayersWithAdp](docs/sdk/README.md#idpfantasyplayerswithadp) - IDP Fantasy Players with ADP
* [Injuries](docs/sdk/README.md#injuries) - Injuries
* [InjuriesByTeam](docs/sdk/README.md#injuriesbyteam) - Injuries by Team
* [LeagueLeadersBySeason](docs/sdk/README.md#leagueleadersbyseason) - League Leaders by Season
* [LeagueLeadersByWeek](docs/sdk/README.md#leagueleadersbyweek) - League Leaders by Week
* [LegacyBoxScore](docs/sdk/README.md#legacyboxscore) - Legacy Box Score
* [LegacyBoxScores](docs/sdk/README.md#legacyboxscores) - Legacy Box Scores
* [LegacyBoxScoresActive](docs/sdk/README.md#legacyboxscoresactive) - Legacy Box Scores Active
* [LegacyBoxScoresDelta](docs/sdk/README.md#legacyboxscoresdelta) - Legacy Box Scores Delta
* [LegacyBoxScoresDeltaCurrentWeek](docs/sdk/README.md#legacyboxscoresdeltacurrentweek) - Legacy Box Scores Delta (Current Week)
* [LegacyBoxScoresFinal](docs/sdk/README.md#legacyboxscoresfinal) - Legacy Box Scores Final
* [LegacyBoxScoresLive](docs/sdk/README.md#legacyboxscoreslive) - Legacy Box Scores Live
* [News](docs/sdk/README.md#news) - News
* [NewsByDate](docs/sdk/README.md#newsbydate) - News by Date
* [NewsByPlayer](docs/sdk/README.md#newsbyplayer) - News by Player
* [NewsByTeam](docs/sdk/README.md#newsbyteam) - News by Team
* [PlayerDetailsByAvailable](docs/sdk/README.md#playerdetailsbyavailable) - Player Details by Available
* [PlayerDetailsByFreeAgents](docs/sdk/README.md#playerdetailsbyfreeagents) - Player Details by Free Agents
* [PlayerDetailsByPlayer](docs/sdk/README.md#playerdetailsbyplayer) - Player Details by Player
* [PlayerDetailsByRookieDraftYear](docs/sdk/README.md#playerdetailsbyrookiedraftyear) - Player Details by Rookie Draft Year
* [PlayerDetailsByTeam](docs/sdk/README.md#playerdetailsbyteam) - Player Details by Team
* [PlayerGameLogsBySeason](docs/sdk/README.md#playergamelogsbyseason) - Player Game Logs By Season
* [PlayerGameRedZoneStats](docs/sdk/README.md#playergameredzonestats) - Player Game Red Zone Stats
* [PlayerGameRedZoneStatsInsideFive](docs/sdk/README.md#playergameredzonestatsinsidefive) - Player Game Red Zone Stats Inside Five
* [PlayerGameRedZoneStatsInsideTen](docs/sdk/README.md#playergameredzonestatsinsideten) - Player Game Red Zone Stats Inside Ten
* [PlayerGameStatsByPlayer](docs/sdk/README.md#playergamestatsbyplayer) - Player Game Stats by Player
* [PlayerGameStatsByTeam](docs/sdk/README.md#playergamestatsbyteam) - Player Game Stats by Team
* [PlayerGameStatsByWeek](docs/sdk/README.md#playergamestatsbyweek) - Player Game Stats by Week
* [PlayerGameStatsByWeekDelta](docs/sdk/README.md#playergamestatsbyweekdelta) - Player Game Stats by Week Delta
* [PlayerGameStatsDelta](docs/sdk/README.md#playergamestatsdelta) - Player Game Stats Delta
* [PlayerSeasonRedZoneStats](docs/sdk/README.md#playerseasonredzonestats) - Player Season Red Zone Stats
* [PlayerSeasonRedZoneStatsInsideFive](docs/sdk/README.md#playerseasonredzonestatsinsidefive) - Player Season Red Zone Stats Inside Five
* [PlayerSeasonRedZoneStatsInsideTen](docs/sdk/README.md#playerseasonredzonestatsinsideten) - Player Season Red Zone Stats Inside Ten
* [PlayerSeasonStats](docs/sdk/README.md#playerseasonstats) - Player Season Stats
* [PlayerSeasonStatsByPlayer](docs/sdk/README.md#playerseasonstatsbyplayer) - Player Season Stats by Player
* [PlayerSeasonStatsByTeam](docs/sdk/README.md#playerseasonstatsbyteam) - Player Season Stats by Team
* [PlayerSeasonThirdDownStats](docs/sdk/README.md#playerseasonthirddownstats) - Player Season Third Down Stats
* [ProBowlers](docs/sdk/README.md#probowlers) - Pro Bowlers
* [Schedule](docs/sdk/README.md#schedule) - Schedule
* [ScoresByDate](docs/sdk/README.md#scoresbydate) - Scores by Date
* [ScoresBySeason](docs/sdk/README.md#scoresbyseason) - Scores by Season 
* [ScoresByWeek](docs/sdk/README.md#scoresbyweek) - Scores by Week
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
* [TeamsBySeason](docs/sdk/README.md#teamsbyseason) - Teams by Season
* [Timeframes](docs/sdk/README.md#timeframes) - Timeframes
* [WeekCurrent](docs/sdk/README.md#weekcurrent) - Week Current
* [WeekLastCompleted](docs/sdk/README.md#weeklastcompleted) - Week Last Completed
* [WeekUpcoming](docs/sdk/README.md#weekupcoming) - Week Upcoming
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
