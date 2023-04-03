# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `dfsSlateOwnershipProjectionsBySlateid` - DFS Slate Ownership Projections by SlateID
* `dfsSlatesByDate` - DFS Slates by Date
* `dfsSlatesByWeek` - DFS Slates by Week
* `idpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries` - IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
* `idpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries` - IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
* `idpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries` - IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
* `injuredPlayers` - Injured Players
* `projectedFantasyDefenseGameStatsWDfsSalaries` - Projected Fantasy Defense Game Stats (w/ DFS Salaries)
* `projectedFantasyDefenseSeasonStatsWAdp` - Projected Fantasy Defense Season Stats (w/ ADP)
* `projectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries` - Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
* `projectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries` - Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
* `projectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries` - Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
* `projectedPlayerSeasonStatsByPlayerWAdp` - Projected Player Season Stats by Player (w/ ADP)
* `projectedPlayerSeasonStatsByTeamWAdp` - Projected Player Season Stats by Team (w/ ADP)
* `projectedPlayerSeasonStatsWAdp` - Projected Player Season Stats (w/ ADP)
* `upcomingDfsSlateOwnershipProjections` - Upcoming DFS Slate Ownership Projections
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
