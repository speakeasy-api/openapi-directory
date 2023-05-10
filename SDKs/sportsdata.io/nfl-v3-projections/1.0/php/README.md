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
use \OpenAPI\OpenAPI\Models\Operations\DfsSlateOwnershipProjectionsBySlateidRequest;
use \OpenAPI\OpenAPI\Models\Operations\DfsSlateOwnershipProjectionsBySlateidFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfsSlateOwnershipProjectionsBySlateidRequest();
    $request->format = DfsSlateOwnershipProjectionsBySlateidFormatEnum::JSON;
    $request->slateId = 'provident';

    $response = $sdk->dfsSlateOwnershipProjectionsBySlateid($request);

    if ($response->dfsSlateWithOwnershipProjection !== null) {
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

* [dfsSlateOwnershipProjectionsBySlateid](docs/sdk/README.md#dfsslateownershipprojectionsbyslateid) - DFS Slate Ownership Projections by SlateID
* [dfsSlatesByDate](docs/sdk/README.md#dfsslatesbydate) - DFS Slates by Date
* [dfsSlatesByWeek](docs/sdk/README.md#dfsslatesbyweek) - DFS Slates by Week
* [idpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries](docs/sdk/README.md#idpprojectedplayergamestatsbyplayerwinjurieslineupsdfssalaries) - IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
* [idpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries](docs/sdk/README.md#idpprojectedplayergamestatsbyteamwinjurieslineupsdfssalaries) - IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
* [idpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries](docs/sdk/README.md#idpprojectedplayergamestatsbyweekwinjurieslineupsdfssalaries) - IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
* [injuredPlayers](docs/sdk/README.md#injuredplayers) - Injured Players
* [projectedFantasyDefenseGameStatsWDfsSalaries](docs/sdk/README.md#projectedfantasydefensegamestatswdfssalaries) - Projected Fantasy Defense Game Stats (w/ DFS Salaries)
* [projectedFantasyDefenseSeasonStatsWAdp](docs/sdk/README.md#projectedfantasydefenseseasonstatswadp) - Projected Fantasy Defense Season Stats (w/ ADP)
* [projectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries](docs/sdk/README.md#projectedplayergamestatsbyplayerwinjurieslineupsdfssalaries) - Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
* [projectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries](docs/sdk/README.md#projectedplayergamestatsbyteamwinjurieslineupsdfssalaries) - Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
* [projectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries](docs/sdk/README.md#projectedplayergamestatsbyweekwinjurieslineupsdfssalaries) - Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
* [projectedPlayerSeasonStatsByPlayerWAdp](docs/sdk/README.md#projectedplayerseasonstatsbyplayerwadp) - Projected Player Season Stats by Player (w/ ADP)
* [projectedPlayerSeasonStatsByTeamWAdp](docs/sdk/README.md#projectedplayerseasonstatsbyteamwadp) - Projected Player Season Stats by Team (w/ ADP)
* [projectedPlayerSeasonStatsWAdp](docs/sdk/README.md#projectedplayerseasonstatswadp) - Projected Player Season Stats (w/ ADP)
* [upcomingDfsSlateOwnershipProjections](docs/sdk/README.md#upcomingdfsslateownershipprojections) - Upcoming DFS Slate Ownership Projections
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
