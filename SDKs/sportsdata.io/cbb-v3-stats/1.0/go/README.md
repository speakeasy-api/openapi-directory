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
* `BoxScore` - Box Score
* `BoxScoresByDate` - Box Scores by Date
* `BoxScoresByDateDelta` - Box Scores by Date Delta
* `CurrentSeason` - Current Season
* `GamesByDate` - Games by Date
* `InjuredPlayers` - Injured Players
* `LeagueHierarchy` - League Hierarchy
* `PlayerDetailsByActive` - Player Details by Active
* `PlayerDetailsByPlayer` - Player Details by Player
* `PlayerDetailsByTeam` - Player Details by Team
* `PlayerGameLogsBySeason` - Player Game Logs By Season
* `PlayerGameStatsByDate` - Player Game Stats by Date
* `PlayerGameStatsByPlayer` - Player Game Stats by Player
* `PlayerSeasonStats` - Player Season Stats
* `PlayerSeasonStatsByPlayer` - Player Season Stats By Player
* `PlayerSeasonStatsByTeam` - Player Season Stats by Team
* `ProjectedPlayerGameStatsByDate` - Projected Player Game Stats by Date
* `ProjectedPlayerGameStatsByPlayer` - Projected Player Game Stats by Player
* `Schedules` - Schedules
* `Stadiums` - Stadiums
* `TeamGameLogsBySeason` - Team Game Logs By Season
* `TeamGameStatsByDate` - Team Game Stats by Date
* `TeamSeasonStats` - Team Season Stats
* `Teams` - Teams
* `TournamentHierarchy` - Tournament Hierarchy
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
