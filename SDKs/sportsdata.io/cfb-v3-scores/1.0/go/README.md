# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/sportsdata.io/cfb-v3-scores/1.0/go
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
* [ConferenceHierarchyWithTeams](docs/sdk/README.md#conferencehierarchywithteams) - Conference Hierarchy (with Teams)
* [CurrentSeason](docs/sdk/README.md#currentseason) - Current Season
* [CurrentSeasonDetails](docs/sdk/README.md#currentseasondetails) - Current Season Details
* [CurrentSeasontype](docs/sdk/README.md#currentseasontype) - Current SeasonType
* [CurrentWeek](docs/sdk/README.md#currentweek) - Current Week
* [GamesByDate](docs/sdk/README.md#gamesbydate) - Games by Date
* [GamesByWeek](docs/sdk/README.md#gamesbyweek) - Games by Week
* [GamesByWeekBasic](docs/sdk/README.md#gamesbyweekbasic) - Games by Week (Basic)
* [InjuredPlayers](docs/sdk/README.md#injuredplayers) - Injured Players
* [PlayerDetailsByActive](docs/sdk/README.md#playerdetailsbyactive) - Player Details By Active
* [PlayerDetailsByPlayer](docs/sdk/README.md#playerdetailsbyplayer) - Player Details By Player
* [PlayerDetailsByTeam](docs/sdk/README.md#playerdetailsbyteam) - Player Details by Team
* [PlayersByTeamBasic](docs/sdk/README.md#playersbyteambasic) - Players by Team (Basic)
* [Schedules](docs/sdk/README.md#schedules) - Schedules
* [SchedulesBasic](docs/sdk/README.md#schedulesbasic) - Schedules (Basic)
* [Stadiums](docs/sdk/README.md#stadiums) - Stadiums
* [TeamGameLogsBySeason](docs/sdk/README.md#teamgamelogsbyseason) - Team Game Logs By Season
* [TeamGameStatsByWeek](docs/sdk/README.md#teamgamestatsbyweek) - Team Game Stats by Week
* [TeamSeasonStatsStandings](docs/sdk/README.md#teamseasonstatsstandings) - Team Season Stats & Standings
* [Teams](docs/sdk/README.md#teams) - Teams
* [TeamsBasic](docs/sdk/README.md#teamsbasic) - Teams (Basic)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
