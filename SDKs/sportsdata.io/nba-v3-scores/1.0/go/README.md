# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/sportsdata.io/nba-v3-scores/1.0/go
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
* [CurrentSeason](docs/sdk/README.md#currentseason) - Current Season
* [DepthCharts](docs/sdk/README.md#depthcharts) - Depth Charts
* [GamesByDate](docs/sdk/README.md#gamesbydate) - Games by Date
* [GamesByDateBasic](docs/sdk/README.md#gamesbydatebasic) - Games by Date (Basic)
* [News](docs/sdk/README.md#news) - News
* [NewsByDate](docs/sdk/README.md#newsbydate) - News by Date
* [NewsByPlayer](docs/sdk/README.md#newsbyplayer) - News by Player
* [PlayerDetailsByActive](docs/sdk/README.md#playerdetailsbyactive) - Player Details by Active
* [PlayerDetailsByFreeAgent](docs/sdk/README.md#playerdetailsbyfreeagent) - Player Details by Free Agent
* [PlayerDetailsByPlayer](docs/sdk/README.md#playerdetailsbyplayer) - Player Details by Player
* [PlayersByTeam](docs/sdk/README.md#playersbyteam) - Players by Team
* [PlayersByTeamBasic](docs/sdk/README.md#playersbyteambasic) - Players by Team (Basic)
* [Referees](docs/sdk/README.md#referees) - Referees
* [Schedules](docs/sdk/README.md#schedules) - Schedules
* [SchedulesBasic](docs/sdk/README.md#schedulesbasic) - Schedules (Basic)
* [Stadiums](docs/sdk/README.md#stadiums) - Stadiums
* [Standings](docs/sdk/README.md#standings) - Standings
* [TeamGameLogsBySeason](docs/sdk/README.md#teamgamelogsbyseason) - Team Game Logs By Season
* [TeamGameStatsByDate](docs/sdk/README.md#teamgamestatsbydate) - Team Game Stats by Date
* [TeamSeasonStats](docs/sdk/README.md#teamseasonstats) - Team Season Stats
* [TeamsActive](docs/sdk/README.md#teamsactive) - Teams (Active)
* [TeamsAll](docs/sdk/README.md#teamsall) - Teams (All)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
