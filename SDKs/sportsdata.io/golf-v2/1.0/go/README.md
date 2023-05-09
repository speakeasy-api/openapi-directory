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
    res, err := s.CurrentSeason(ctx, operations.CurrentSeasonRequest{
        Format: operations.CurrentSeasonFormatEnumJSON,
    })
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

### [SDK](docs/sdk/README.md)

* [CurrentSeason](docs/sdk/README.md#currentseason) - Current Season
* [DfsSlates](docs/sdk/README.md#dfsslates) - DFS Slates
* [Injuries](docs/sdk/README.md#injuries) - Injuries
* [InjuriesHistorical](docs/sdk/README.md#injurieshistorical) - Injuries (Historical)
* [Leaderboard](docs/sdk/README.md#leaderboard) - Leaderboard
* [News](docs/sdk/README.md#news) - News
* [NewsByDate](docs/sdk/README.md#newsbydate) - News by Date
* [NewsByPlayer](docs/sdk/README.md#newsbyplayer) - News by Player
* [Player](docs/sdk/README.md#player) - Player
* [PlayerSeasonStatsWWorldGolfRankings](docs/sdk/README.md#playerseasonstatswworldgolfrankings) - Player Season Stats (w/ World Golf Rankings)
* [PlayerTournamentProjectedStatsWDraftkingsSalaries](docs/sdk/README.md#playertournamentprojectedstatswdraftkingssalaries) - Player Tournament Projected Stats (w/ DraftKings Salaries)
* [PlayerTournamentStatsByPlayer](docs/sdk/README.md#playertournamentstatsbyplayer) - Player Tournament Stats By Player
* [Players](docs/sdk/README.md#players) - Players
* [Schedule](docs/sdk/README.md#schedule) - Schedule
* [ScheduleBySeason](docs/sdk/README.md#schedulebyseason) - Schedule by Season
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
