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

    req := operations.AllStarsRequest{
        Format: "JSON",
        Season: "provident",
    }

    ctx := context.Background()
    res, err := s.AllStars(ctx, req)
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

### SDK SDK

* `AllStars` - All-Stars
* `AreGamesInProgress` - Are Games In Progress
* `BoxScore` - Box Score
* `BoxScoresByDate` - Box Scores by Date
* `BoxScoresByDateDelta` - Box Scores by Date Delta
* `CurrentSeason` - Current Season
* `DfsSlatesByDate` - DFS Slates by Date
* `GamesByDate` - Games by Date
* `News` - News
* `NewsByDate` - News by Date
* `NewsByPlayer` - News by Player
* `PlayerDetailsByActive` - Player Details by Active
* `PlayerDetailsByFreeAgent` - Player Details by Free Agent
* `PlayerDetailsByPlayer` - Player Details by Player
* `PlayerGameLogsBySeason` - Player Game Logs By Season
* `PlayerGameStatsByDate` - Player Game Stats by Date
* `PlayerGameStatsByPlayer` - Player Game Stats by Player
* `PlayerSeasonStats` - Player Season Stats
* `PlayerSeasonStatsByPlayer` - Player Season Stats By Player
* `PlayerSeasonStatsByTeam` - Player Season Stats by Team
* `PlayersByTeam` - Players by Team
* `Schedules` - Schedules
* `Stadiums` - Stadiums
* `Standings` - Standings
* `TeamGameLogsBySeason` - Team Game Logs By Season
* `TeamGameStatsByDate` - Team Game Stats by Date
* `TeamSeasonStats` - Team Season Stats
* `TeamStatsAllowedByPosition` - Team Stats Allowed by Position
* `TeamsActive` - Teams (Active)
* `TeamsAll` - Teams (All)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
