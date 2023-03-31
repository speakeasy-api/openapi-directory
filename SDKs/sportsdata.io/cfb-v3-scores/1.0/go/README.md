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
* `ConferenceHierarchyWithTeams` - Conference Hierarchy (with Teams)
* `CurrentSeason` - Current Season
* `CurrentSeasonDetails` - Current Season Details
* `CurrentSeasontype` - Current SeasonType
* `CurrentWeek` - Current Week
* `GamesByDate` - Games by Date
* `GamesByWeek` - Games by Week
* `InjuredPlayers` - Injured Players
* `PlayerDetailsByActive` - Player Details By Active
* `PlayerDetailsByPlayer` - Player Details By Player
* `PlayerDetailsByTeam` - Player Details by Team
* `Schedules` - Schedules
* `Stadiums` - Stadiums
* `TeamGameLogsBySeason` - Team Game Logs By Season
* `TeamGameStatsByWeek` - Team Game Stats by Week
* `TeamSeasonStatsStandings` - Team Season Stats & Standings
* `Teams` - Teams
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
