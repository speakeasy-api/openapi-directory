# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/sportsdata.io/nfl-v3-projections/1.0/go
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

    req := operations.DfsSlateOwnershipProjectionsBySlateidRequest{
        Format: "JSON",
        SlateID: "provident",
    }

    ctx := context.Background()
    res, err := s.DfsSlateOwnershipProjectionsBySlateid(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DfsSlateWithOwnershipProjection != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `DfsSlateOwnershipProjectionsBySlateid` - DFS Slate Ownership Projections by SlateID
* `DfsSlatesByDate` - DFS Slates by Date
* `DfsSlatesByWeek` - DFS Slates by Week
* `IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries` - IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
* `IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries` - IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
* `IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries` - IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
* `InjuredPlayers` - Injured Players
* `ProjectedFantasyDefenseGameStatsWDfsSalaries` - Projected Fantasy Defense Game Stats (w/ DFS Salaries)
* `ProjectedFantasyDefenseSeasonStatsWAdp` - Projected Fantasy Defense Season Stats (w/ ADP)
* `ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries` - Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
* `ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries` - Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
* `ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries` - Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
* `ProjectedPlayerSeasonStatsByPlayerWAdp` - Projected Player Season Stats by Player (w/ ADP)
* `ProjectedPlayerSeasonStatsByTeamWAdp` - Projected Player Season Stats by Team (w/ ADP)
* `ProjectedPlayerSeasonStatsWAdp` - Projected Player Season Stats (w/ ADP)
* `UpcomingDfsSlateOwnershipProjections` - Upcoming DFS Slate Ownership Projections
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
