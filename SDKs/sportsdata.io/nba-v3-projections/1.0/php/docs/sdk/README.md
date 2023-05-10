# SDK

### Available Operations

* [depthCharts](#depthcharts) - Depth Charts
* [dfsSlatesByDate](#dfsslatesbydate) - DFS Slates by Date
* [injuredPlayers](#injuredplayers) - Injured Players
* [projectedPlayerGameStatsByDateWInjuriesDfsSalaries](#projectedplayergamestatsbydatewinjuriesdfssalaries) - Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
* [projectedPlayerGameStatsByPlayerWInjuriesDfsSalaries](#projectedplayergamestatsbyplayerwinjuriesdfssalaries) - Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)
* [projectedPlayerSeasonStats](#projectedplayerseasonstats) - Projected Player Season Stats
* [projectedPlayerSeasonStatsByPlayer](#projectedplayerseasonstatsbyplayer) - Projected Player Season Stats by Player
* [projectedPlayerSeasonStatsByTeam](#projectedplayerseasonstatsbyteam) - Projected Player Season Stats by Team
* [startingLineupsByDate](#startinglineupsbydate) - Starting Lineups by Date

## depthCharts

This endpoint provides a depth chart for each NBA team.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DepthChartsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DepthChartsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DepthChartsRequest();
    $request->format = DepthChartsFormatEnum::JSON;

    $response = $sdk->sdk->depthCharts($request);

    if ($response->teamDepthCharts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfsSlatesByDate

DFS Slates by Date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DfsSlatesByDateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DfsSlatesByDateFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfsSlatesByDateRequest();
    $request->date = 'distinctio';
    $request->format = DfsSlatesByDateFormatEnum::JSON;

    $response = $sdk->sdk->dfsSlatesByDate($request);

    if ($response->dfsSlates !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## injuredPlayers

This endpoint provides all currently injured NBA players, along with injury details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InjuredPlayersRequest;
use \OpenAPI\OpenAPI\Models\Operations\InjuredPlayersFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InjuredPlayersRequest();
    $request->format = InjuredPlayersFormatEnum::JSON;

    $response = $sdk->sdk->injuredPlayers($request);

    if ($response->players !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectedPlayerGameStatsByDateWInjuriesDfsSalaries

Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesRequest();
    $request->date = 'nulla';
    $request->format = ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum::JSON;

    $response = $sdk->sdk->projectedPlayerGameStatsByDateWInjuriesDfsSalaries($request);

    if ($response->playerGameProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectedPlayerGameStatsByPlayerWInjuriesDfsSalaries

Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesRequest();
    $request->date = 'illum';
    $request->format = ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnum::XML;
    $request->playerid = 'error';

    $response = $sdk->sdk->projectedPlayerGameStatsByPlayerWInjuriesDfsSalaries($request);

    if ($response->playerGameProjection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectedPlayerSeasonStats

Projected Player Season Stats

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerSeasonStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerSeasonStatsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedPlayerSeasonStatsRequest();
    $request->format = ProjectedPlayerSeasonStatsFormatEnum::JSON;
    $request->season = 'suscipit';

    $response = $sdk->sdk->projectedPlayerSeasonStats($request);

    if ($response->playerSeasonProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectedPlayerSeasonStatsByPlayer

Projected Player Season Stats by Player

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerSeasonStatsByPlayerRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerSeasonStatsByPlayerFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedPlayerSeasonStatsByPlayerRequest();
    $request->format = ProjectedPlayerSeasonStatsByPlayerFormatEnum::XML;
    $request->playerid = 'magnam';
    $request->season = 'debitis';

    $response = $sdk->sdk->projectedPlayerSeasonStatsByPlayer($request);

    if ($response->playerSeasonProjection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectedPlayerSeasonStatsByTeam

Projected Player Season Stats by Team

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerSeasonStatsByTeamRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerSeasonStatsByTeamFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedPlayerSeasonStatsByTeamRequest();
    $request->format = ProjectedPlayerSeasonStatsByTeamFormatEnum::XML;
    $request->season = 'delectus';
    $request->team = 'tempora';

    $response = $sdk->sdk->projectedPlayerSeasonStatsByTeam($request);

    if ($response->playerSeasonProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startingLineupsByDate

This endpoint provides the projected & confirmed starting lineups for NBA games on a given date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartingLineupsByDateRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartingLineupsByDateFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartingLineupsByDateRequest();
    $request->date = 'suscipit';
    $request->format = StartingLineupsByDateFormatEnum::XML;

    $response = $sdk->sdk->startingLineupsByDate($request);

    if ($response->startingLineups !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
