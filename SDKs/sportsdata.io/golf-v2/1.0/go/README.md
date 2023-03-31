# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/sportsdata.io/golf-v2/1.0/go
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

    req := operations.CurrentSeasonRequest{
        Format: "JSON",
    }

    ctx := context.Background()
    res, err := s.CurrentSeason(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Season != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CurrentSeason` - Current Season
* `DfsSlates` - DFS Slates
* `Injuries` - Injuries
* `InjuriesHistorical` - Injuries (Historical)
* `Leaderboard` - Leaderboard
* `News` - News
* `NewsByDate` - News by Date
* `NewsByPlayer` - News by Player
* `Player` - Player
* `PlayerSeasonStatsWWorldGolfRankings` - Player Season Stats (w/ World Golf Rankings)
* `PlayerTournamentProjectedStatsWDraftkingsSalaries` - Player Tournament Projected Stats (w/ DraftKings Salaries)
* `PlayerTournamentStatsByPlayer` - Player Tournament Stats By Player
* `Players` - Players
* `Schedule` - Schedule
* `ScheduleBySeason` - Schedule by Season
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
