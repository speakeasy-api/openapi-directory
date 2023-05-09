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
    res, err := s.DfsSlateOwnershipProjectionsBySlateid(ctx, operations.DfsSlateOwnershipProjectionsBySlateidRequest{
        Format: operations.DfsSlateOwnershipProjectionsBySlateidFormatEnumJSON,
        SlateID: "provident",
    })
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

### [SDK](docs/sdk/README.md)

* [DfsSlateOwnershipProjectionsBySlateid](docs/sdk/README.md#dfsslateownershipprojectionsbyslateid) - DFS Slate Ownership Projections by SlateID
* [DfsSlatesByDate](docs/sdk/README.md#dfsslatesbydate) - DFS Slates by Date
* [DfsSlatesByWeek](docs/sdk/README.md#dfsslatesbyweek) - DFS Slates by Week
* [IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries](docs/sdk/README.md#idpprojectedplayergamestatsbyplayerwinjurieslineupsdfssalaries) - IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
* [IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries](docs/sdk/README.md#idpprojectedplayergamestatsbyteamwinjurieslineupsdfssalaries) - IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
* [IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries](docs/sdk/README.md#idpprojectedplayergamestatsbyweekwinjurieslineupsdfssalaries) - IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
* [InjuredPlayers](docs/sdk/README.md#injuredplayers) - Injured Players
* [ProjectedFantasyDefenseGameStatsWDfsSalaries](docs/sdk/README.md#projectedfantasydefensegamestatswdfssalaries) - Projected Fantasy Defense Game Stats (w/ DFS Salaries)
* [ProjectedFantasyDefenseSeasonStatsWAdp](docs/sdk/README.md#projectedfantasydefenseseasonstatswadp) - Projected Fantasy Defense Season Stats (w/ ADP)
* [ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries](docs/sdk/README.md#projectedplayergamestatsbyplayerwinjurieslineupsdfssalaries) - Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
* [ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries](docs/sdk/README.md#projectedplayergamestatsbyteamwinjurieslineupsdfssalaries) - Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
* [ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries](docs/sdk/README.md#projectedplayergamestatsbyweekwinjurieslineupsdfssalaries) - Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
* [ProjectedPlayerSeasonStatsByPlayerWAdp](docs/sdk/README.md#projectedplayerseasonstatsbyplayerwadp) - Projected Player Season Stats by Player (w/ ADP)
* [ProjectedPlayerSeasonStatsByTeamWAdp](docs/sdk/README.md#projectedplayerseasonstatsbyteamwadp) - Projected Player Season Stats by Team (w/ ADP)
* [ProjectedPlayerSeasonStatsWAdp](docs/sdk/README.md#projectedplayerseasonstatswadp) - Projected Player Season Stats (w/ ADP)
* [UpcomingDfsSlateOwnershipProjections](docs/sdk/README.md#upcomingdfsslateownershipprojections) - Upcoming DFS Slate Ownership Projections
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
