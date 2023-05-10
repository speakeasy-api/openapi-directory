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
use \OpenAPI\OpenAPI\Models\Operations\AllStarsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AllStarsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllStarsRequest();
    $request->format = AllStarsFormatEnum::JSON;
    $request->season = 'provident';

    $response = $sdk->allStars($request);

    if ($response->playerInfos !== null) {
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

* [allStars](docs/sdk/README.md#allstars) - All-Stars
* [areGamesInProgress](docs/sdk/README.md#aregamesinprogress) - Are Games In Progress
* [boxScore](docs/sdk/README.md#boxscore) - Box Score
* [boxScoresByDate](docs/sdk/README.md#boxscoresbydate) - Box Scores by Date
* [boxScoresByDateDelta](docs/sdk/README.md#boxscoresbydatedelta) - Box Scores by Date Delta
* [currentSeason](docs/sdk/README.md#currentseason) - Current Season
* [dfsSlatesByDate](docs/sdk/README.md#dfsslatesbydate) - DFS Slates by Date
* [gamesByDate](docs/sdk/README.md#gamesbydate) - Games by Date
* [news](docs/sdk/README.md#news) - News
* [newsByDate](docs/sdk/README.md#newsbydate) - News by Date
* [newsByPlayer](docs/sdk/README.md#newsbyplayer) - News by Player
* [playerDetailsByActive](docs/sdk/README.md#playerdetailsbyactive) - Player Details by Active
* [playerDetailsByFreeAgent](docs/sdk/README.md#playerdetailsbyfreeagent) - Player Details by Free Agent
* [playerDetailsByPlayer](docs/sdk/README.md#playerdetailsbyplayer) - Player Details by Player
* [playerGameLogsBySeason](docs/sdk/README.md#playergamelogsbyseason) - Player Game Logs By Season
* [playerGameStatsByDate](docs/sdk/README.md#playergamestatsbydate) - Player Game Stats by Date
* [playerGameStatsByPlayer](docs/sdk/README.md#playergamestatsbyplayer) - Player Game Stats by Player
* [playerSeasonStats](docs/sdk/README.md#playerseasonstats) - Player Season Stats
* [playerSeasonStatsByPlayer](docs/sdk/README.md#playerseasonstatsbyplayer) - Player Season Stats By Player
* [playerSeasonStatsByTeam](docs/sdk/README.md#playerseasonstatsbyteam) - Player Season Stats by Team
* [playersByTeam](docs/sdk/README.md#playersbyteam) - Players by Team
* [schedules](docs/sdk/README.md#schedules) - Schedules
* [stadiums](docs/sdk/README.md#stadiums) - Stadiums
* [standings](docs/sdk/README.md#standings) - Standings
* [teamGameLogsBySeason](docs/sdk/README.md#teamgamelogsbyseason) - Team Game Logs By Season
* [teamGameStatsByDate](docs/sdk/README.md#teamgamestatsbydate) - Team Game Stats by Date
* [teamSeasonStats](docs/sdk/README.md#teamseasonstats) - Team Season Stats
* [teamStatsAllowedByPosition](docs/sdk/README.md#teamstatsallowedbyposition) - Team Stats Allowed by Position
* [teamsActive](docs/sdk/README.md#teamsactive) - Teams (Active)
* [teamsAll](docs/sdk/README.md#teamsall) - Teams (All)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
