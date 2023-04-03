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

* `areasCountries` - Areas (Countries)
* `canceledMemberships` - Canceled Memberships
* `competitionFixturesLeagueDetails` - Competition Fixtures (League Details)
* `competitionHierarchyLeagueHierarchy` - Competition Hierarchy (League Hierarchy)
* `competitionsLeagues` - Competitions (Leagues)
* `gamesByDate` - Games by Date
* `membershipsActive` - Memberships (Active)
* `membershipsByCompetitionActive` - Memberships by Competition (Active)
* `membershipsByCompetitionHistorical` - Memberships by Competition (Historical)
* `membershipsByTeamActive` - Memberships by Team (Active)
* `membershipsByTeamHistorical` - Memberships by Team (Historical)
* `membershipsHistorical` - Memberships (Historical)
* `membershipsRecentlyChanged` - Memberships (Recently Changed)
* `player` - Player
* `players` - Players
* `playersByTeam` - Players by Team
* `schedule` - Schedule
* `seasonTeams` - Season Teams
* `standings` - Standings
* `teamGameStatsByDate` - Team Game Stats by Date
* `teamSeasonStats` - Team Season Stats
* `teams` - Teams
* `upcomingScheduleByPlayer` - Upcoming Schedule By Player
* `venues` - Venues
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
