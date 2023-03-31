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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    req := operations.AreGamesInProgressRequest{
        Format: "JSON",
    }

    ctx := context.Background()
    res, err := s.AreGamesInProgress(ctx, req)
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

### SDK SDK

* `AreGamesInProgress` - Are Games In Progress
* `BoxScoreByScoreidV` - Box Score by ScoreID V3
* `BoxScoreV` - Box Score V3
* `BoxScoresDeltaV` - Box Scores Delta V3
* `BoxScoresVSimulation` - Box Scores V3 Simulation
* `ByeWeeks` - Bye Weeks
* `DailyFantasyPlayers` - Daily Fantasy Players
* `DailyFantasyScoring` - Daily Fantasy Scoring
* `DfsSlatesByDate` - DFS Slates by Date
* `DfsSlatesByWeek` - DFS Slates by Week
* `FantasyDefenseGameStats` - Fantasy Defense Game Stats
* `FantasyDefenseGameStatsByTeam` - Fantasy Defense Game Stats by Team
* `FantasyDefenseSeasonStats` - Fantasy Defense Season Stats
* `FantasyDefenseSeasonStatsByTeam` - Fantasy Defense Season Stats by Team
* `FantasyPlayerOwnershipPercentagesSeasonLong` - Fantasy Player Ownership Percentages (Season-Long)
* `FantasyPlayersWithAdp` - Fantasy Players with ADP
* `GameStatsBySeasonDeprecatedUseTeamGameStatsInstead` - Game Stats by Season (Deprecated, use Team Game Stats instead)
* `GameStatsByWeekDeprecatedUseTeamGameStatsInstead` - Game Stats by Week (Deprecated, use Team Game Stats instead)
* `IdpFantasyPlayersWithAdp` - IDP Fantasy Players with ADP
* `Injuries` - Injuries
* `InjuriesByTeam` - Injuries by Team
* `LeagueLeadersBySeason` - League Leaders by Season
* `LeagueLeadersByWeek` - League Leaders by Week
* `LegacyBoxScore` - Legacy Box Score
* `LegacyBoxScores` - Legacy Box Scores
* `LegacyBoxScoresActive` - Legacy Box Scores Active
* `LegacyBoxScoresDelta` - Legacy Box Scores Delta
* `LegacyBoxScoresDeltaCurrentWeek` - Legacy Box Scores Delta (Current Week)
* `LegacyBoxScoresFinal` - Legacy Box Scores Final
* `LegacyBoxScoresLive` - Legacy Box Scores Live
* `News` - News
* `NewsByDate` - News by Date
* `NewsByPlayer` - News by Player
* `NewsByTeam` - News by Team
* `PlayerDetailsByAvailable` - Player Details by Available
* `PlayerDetailsByFreeAgents` - Player Details by Free Agents
* `PlayerDetailsByPlayer` - Player Details by Player
* `PlayerDetailsByRookieDraftYear` - Player Details by Rookie Draft Year
* `PlayerDetailsByTeam` - Player Details by Team
* `PlayerGameLogsBySeason` - Player Game Logs By Season
* `PlayerGameRedZoneStats` - Player Game Red Zone Stats
* `PlayerGameRedZoneStatsInsideFive` - Player Game Red Zone Stats Inside Five
* `PlayerGameRedZoneStatsInsideTen` - Player Game Red Zone Stats Inside Ten
* `PlayerGameStatsByPlayer` - Player Game Stats by Player
* `PlayerGameStatsByTeam` - Player Game Stats by Team
* `PlayerGameStatsByWeek` - Player Game Stats by Week
* `PlayerGameStatsByWeekDelta` - Player Game Stats by Week Delta
* `PlayerGameStatsDelta` - Player Game Stats Delta
* `PlayerSeasonRedZoneStats` - Player Season Red Zone Stats
* `PlayerSeasonRedZoneStatsInsideFive` - Player Season Red Zone Stats Inside Five
* `PlayerSeasonRedZoneStatsInsideTen` - Player Season Red Zone Stats Inside Ten
* `PlayerSeasonStats` - Player Season Stats
* `PlayerSeasonStatsByPlayer` - Player Season Stats by Player
* `PlayerSeasonStatsByTeam` - Player Season Stats by Team
* `PlayerSeasonThirdDownStats` - Player Season Third Down Stats
* `ProBowlers` - Pro Bowlers
* `Schedule` - Schedule
* `ScoresByDate` - Scores by Date
* `ScoresBySeason` - Scores by Season 
* `ScoresByWeek` - Scores by Week
* `ScoresByWeekSimulation` - Scores by Week Simulation
* `SeasonCurrent` - Season Current
* `SeasonLastCompleted` - Season Last Completed
* `SeasonUpcoming` - Season Upcoming
* `Stadiums` - Stadiums
* `Standings` - Standings
* `TeamGameLogsBySeason` - Team Game Logs By Season
* `TeamGameStats` - Team Game Stats
* `TeamSeasonStats` - Team Season Stats
* `TeamsActive` - Teams (Active)
* `TeamsAll` - Teams (All)
* `TeamsBySeason` - Teams by Season
* `Timeframes` - Timeframes
* `WeekCurrent` - Week Current
* `WeekLastCompleted` - Week Last Completed
* `WeekUpcoming` - Week Upcoming
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
