# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/sportsdata.io/nba-v3-stats/1.0/go
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
    res, err := s.AllStars(ctx, operations.AllStarsRequest{
        Format: operations.AllStarsFormatEnumJSON,
        Season: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerInfos != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AllStars](docs/sdk/README.md#allstars) - All-Stars
* [AreGamesInProgress](docs/sdk/README.md#aregamesinprogress) - Are Games In Progress
* [BoxScore](docs/sdk/README.md#boxscore) - Box Score
* [BoxScoresByDate](docs/sdk/README.md#boxscoresbydate) - Box Scores by Date
* [BoxScoresByDateDelta](docs/sdk/README.md#boxscoresbydatedelta) - Box Scores by Date Delta
* [CurrentSeason](docs/sdk/README.md#currentseason) - Current Season
* [DfsSlatesByDate](docs/sdk/README.md#dfsslatesbydate) - DFS Slates by Date
* [GamesByDate](docs/sdk/README.md#gamesbydate) - Games by Date
* [News](docs/sdk/README.md#news) - News
* [NewsByDate](docs/sdk/README.md#newsbydate) - News by Date
* [NewsByPlayer](docs/sdk/README.md#newsbyplayer) - News by Player
* [PlayerDetailsByActive](docs/sdk/README.md#playerdetailsbyactive) - Player Details by Active
* [PlayerDetailsByFreeAgent](docs/sdk/README.md#playerdetailsbyfreeagent) - Player Details by Free Agent
* [PlayerDetailsByPlayer](docs/sdk/README.md#playerdetailsbyplayer) - Player Details by Player
* [PlayerGameLogsBySeason](docs/sdk/README.md#playergamelogsbyseason) - Player Game Logs By Season
* [PlayerGameStatsByDate](docs/sdk/README.md#playergamestatsbydate) - Player Game Stats by Date
* [PlayerGameStatsByPlayer](docs/sdk/README.md#playergamestatsbyplayer) - Player Game Stats by Player
* [PlayerSeasonStats](docs/sdk/README.md#playerseasonstats) - Player Season Stats
* [PlayerSeasonStatsByPlayer](docs/sdk/README.md#playerseasonstatsbyplayer) - Player Season Stats By Player
* [PlayerSeasonStatsByTeam](docs/sdk/README.md#playerseasonstatsbyteam) - Player Season Stats by Team
* [PlayersByTeam](docs/sdk/README.md#playersbyteam) - Players by Team
* [Schedules](docs/sdk/README.md#schedules) - Schedules
* [Stadiums](docs/sdk/README.md#stadiums) - Stadiums
* [Standings](docs/sdk/README.md#standings) - Standings
* [TeamGameLogsBySeason](docs/sdk/README.md#teamgamelogsbyseason) - Team Game Logs By Season
* [TeamGameStatsByDate](docs/sdk/README.md#teamgamestatsbydate) - Team Game Stats by Date
* [TeamSeasonStats](docs/sdk/README.md#teamseasonstats) - Team Season Stats
* [TeamStatsAllowedByPosition](docs/sdk/README.md#teamstatsallowedbyposition) - Team Stats Allowed by Position
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
