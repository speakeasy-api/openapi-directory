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
use \OpenAPI\OpenAPI\Models\Operations\CurrentSeasonRequest;
use \OpenAPI\OpenAPI\Models\Operations\CurrentSeasonFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CurrentSeasonRequest();
    $request->format = CurrentSeasonFormatEnum::JSON;

    $response = $sdk->currentSeason($request);

    if ($response->season !== null) {
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

* [currentSeason](docs/sdk/README.md#currentseason) - Current Season
* [dfsSlates](docs/sdk/README.md#dfsslates) - DFS Slates
* [injuries](docs/sdk/README.md#injuries) - Injuries
* [injuriesHistorical](docs/sdk/README.md#injurieshistorical) - Injuries (Historical)
* [leaderboard](docs/sdk/README.md#leaderboard) - Leaderboard
* [news](docs/sdk/README.md#news) - News
* [newsByDate](docs/sdk/README.md#newsbydate) - News by Date
* [newsByPlayer](docs/sdk/README.md#newsbyplayer) - News by Player
* [player](docs/sdk/README.md#player) - Player
* [playerSeasonStatsWWorldGolfRankings](docs/sdk/README.md#playerseasonstatswworldgolfrankings) - Player Season Stats (w/ World Golf Rankings)
* [playerTournamentProjectedStatsWDraftkingsSalaries](docs/sdk/README.md#playertournamentprojectedstatswdraftkingssalaries) - Player Tournament Projected Stats (w/ DraftKings Salaries)
* [playerTournamentStatsByPlayer](docs/sdk/README.md#playertournamentstatsbyplayer) - Player Tournament Stats By Player
* [players](docs/sdk/README.md#players) - Players
* [schedule](docs/sdk/README.md#schedule) - Schedule
* [scheduleBySeason](docs/sdk/README.md#schedulebyseason) - Schedule by Season
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
