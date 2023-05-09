# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/sportsdata.io/cbb-v3-stats/1.0/go
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
* [BoxScore](docs/sdk/README.md#boxscore) - Box Score
* [BoxScoresByDate](docs/sdk/README.md#boxscoresbydate) - Box Scores by Date
* [BoxScoresByDateDelta](docs/sdk/README.md#boxscoresbydatedelta) - Box Scores by Date Delta
* [CurrentSeason](docs/sdk/README.md#currentseason) - Current Season
* [GamesByDate](docs/sdk/README.md#gamesbydate) - Games by Date
* [InjuredPlayers](docs/sdk/README.md#injuredplayers) - Injured Players
* [LeagueHierarchy](docs/sdk/README.md#leaguehierarchy) - League Hierarchy
* [PlayerDetailsByActive](docs/sdk/README.md#playerdetailsbyactive) - Player Details by Active
* [PlayerDetailsByPlayer](docs/sdk/README.md#playerdetailsbyplayer) - Player Details by Player
* [PlayerDetailsByTeam](docs/sdk/README.md#playerdetailsbyteam) - Player Details by Team
* [PlayerGameLogsBySeason](docs/sdk/README.md#playergamelogsbyseason) - Player Game Logs By Season
* [PlayerGameStatsByDate](docs/sdk/README.md#playergamestatsbydate) - Player Game Stats by Date
* [PlayerGameStatsByPlayer](docs/sdk/README.md#playergamestatsbyplayer) - Player Game Stats by Player
* [PlayerSeasonStats](docs/sdk/README.md#playerseasonstats) - Player Season Stats
* [PlayerSeasonStatsByPlayer](docs/sdk/README.md#playerseasonstatsbyplayer) - Player Season Stats By Player
* [PlayerSeasonStatsByTeam](docs/sdk/README.md#playerseasonstatsbyteam) - Player Season Stats by Team
* [ProjectedPlayerGameStatsByDate](docs/sdk/README.md#projectedplayergamestatsbydate) - Projected Player Game Stats by Date
* [ProjectedPlayerGameStatsByPlayer](docs/sdk/README.md#projectedplayergamestatsbyplayer) - Projected Player Game Stats by Player
* [Schedules](docs/sdk/README.md#schedules) - Schedules
* [Stadiums](docs/sdk/README.md#stadiums) - Stadiums
* [TeamGameLogsBySeason](docs/sdk/README.md#teamgamelogsbyseason) - Team Game Logs By Season
* [TeamGameStatsByDate](docs/sdk/README.md#teamgamestatsbydate) - Team Game Stats by Date
* [TeamSeasonStats](docs/sdk/README.md#teamseasonstats) - Team Season Stats
* [Teams](docs/sdk/README.md#teams) - Teams
* [TournamentHierarchy](docs/sdk/README.md#tournamenthierarchy) - Tournament Hierarchy
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
