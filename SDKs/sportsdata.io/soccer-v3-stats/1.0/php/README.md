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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AreasCountriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\AreasCountriesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AreasCountriesRequest();
    $request->format = AreasCountriesFormatEnum::JSON;

    $response = $sdk->areasCountries($request);

    if ($response->areas !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [areasCountries](docs/sdk/README.md#areascountries) - Areas (Countries)
* [boxScore](docs/sdk/README.md#boxscore) - Box Score
* [boxScoresByDate](docs/sdk/README.md#boxscoresbydate) - Box Scores by Date
* [boxScoresByDateByCompetition](docs/sdk/README.md#boxscoresbydatebycompetition) - Box Scores by Date by Competition
* [boxScoresByDateDelta](docs/sdk/README.md#boxscoresbydatedelta) - Box Scores by Date Delta
* [boxScoresDeltaByDateByCompetition](docs/sdk/README.md#boxscoresdeltabydatebycompetition) - Box Scores Delta by Date by Competition
* [competitionFixturesLeagueDetails](docs/sdk/README.md#competitionfixturesleaguedetails) - Competition Fixtures (League Details)
* [competitionHierarchyLeagueHierarchy](docs/sdk/README.md#competitionhierarchyleaguehierarchy) - Competition Hierarchy (League Hierarchy)
* [competitionsLeagues](docs/sdk/README.md#competitionsleagues) - Competitions (Leagues)
* [dfsSlatesByDate](docs/sdk/README.md#dfsslatesbydate) - Dfs Slates By Date
* [gamesByDate](docs/sdk/README.md#gamesbydate) - Games by Date
* [membershipsActive](docs/sdk/README.md#membershipsactive) - Memberships (Active)
* [membershipsByCompetitionActive](docs/sdk/README.md#membershipsbycompetitionactive) - Memberships by Competition (Active)
* [membershipsByCompetitionHistorical](docs/sdk/README.md#membershipsbycompetitionhistorical) - Memberships by Competition (Historical)
* [membershipsByTeamActive](docs/sdk/README.md#membershipsbyteamactive) - Memberships by Team (Active)
* [membershipsByTeamHistorical](docs/sdk/README.md#membershipsbyteamhistorical) - Memberships by Team (Historical)
* [membershipsHistorical](docs/sdk/README.md#membershipshistorical) - Memberships (Historical)
* [membershipsRecentlyChanged](docs/sdk/README.md#membershipsrecentlychanged) - Memberships (Recently Changed)
* [player](docs/sdk/README.md#player) - Player
* [playerGameStatsByDate](docs/sdk/README.md#playergamestatsbydate) - Player Game Stats by Date
* [playerGameStatsByPlayer](docs/sdk/README.md#playergamestatsbyplayer) - Player Game Stats by Player
* [playerSeasonStats](docs/sdk/README.md#playerseasonstats) - Player Season Stats
* [playerSeasonStatsByPlayer](docs/sdk/README.md#playerseasonstatsbyplayer) - Player Season Stats by Player
* [playerSeasonStatsByTeam](docs/sdk/README.md#playerseasonstatsbyteam) - Player Season Stats by Team
* [players](docs/sdk/README.md#players) - Players
* [playersByTeam](docs/sdk/README.md#playersbyteam) - Players by Team
* [schedule](docs/sdk/README.md#schedule) - Schedule
* [seasonTeams](docs/sdk/README.md#seasonteams) - Season Teams
* [standings](docs/sdk/README.md#standings) - Standings
* [teamGameStatsByDate](docs/sdk/README.md#teamgamestatsbydate) - Team Game Stats by Date
* [teamSeasonStats](docs/sdk/README.md#teamseasonstats) - Team Season Stats
* [teams](docs/sdk/README.md#teams) - Teams
* [upcomingDfsSlatesByCompetition](docs/sdk/README.md#upcomingdfsslatesbycompetition) - Upcoming Dfs Slates By Competition
* [upcomingScheduleByPlayer](docs/sdk/README.md#upcomingschedulebyplayer) - Upcoming Schedule By Player
* [venues](docs/sdk/README.md#venues) - Venues
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
