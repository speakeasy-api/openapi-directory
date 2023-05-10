# SDK

## Overview

MLB projections API.

### Available Operations

* [depthCharts](#depthcharts) - Depth Charts
* [dfsSlatesByDate](#dfsslatesbydate) - DFS Slates by Date
* [injuredPlayers](#injuredplayers) - Injured Players
* [projectedPlayerGameStatsByDateWInjuriesDfsSalaries](#projectedplayergamestatsbydatewinjuriesdfssalaries) - Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
* [projectedPlayerGameStatsByPlayerWInjuriesDfsSalaries](#projectedplayergamestatsbyplayerwinjuriesdfssalaries) - Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)
* [projectedPlayerSeasonStatsWithAdp](#projectedplayerseasonstatswithadp) - Projected Player Season Stats (with ADP)
* [startingLineupsByDate](#startinglineupsbydate) - Starting Lineups by Date

## depthCharts

Returns Depth Charts for all active MLB teams.

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

This endpoint provides all currently injured MLB players, along with injury details.

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

    if ($response->playerGameProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectedPlayerSeasonStatsWithAdp

Projected Player Season Stats (with ADP)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerSeasonStatsWithAdpRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerSeasonStatsWithAdpFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedPlayerSeasonStatsWithAdpRequest();
    $request->format = ProjectedPlayerSeasonStatsWithAdpFormatEnum::JSON;
    $request->season = 'suscipit';

    $response = $sdk->sdk->projectedPlayerSeasonStatsWithAdp($request);

    if ($response->playerSeasonProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startingLineupsByDate

Starting Lineups by Date

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
    $request->date = 'iure';
    $request->format = StartingLineupsByDateFormatEnum::XML;

    $response = $sdk->sdk->startingLineupsByDate($request);

    if ($response->startingLineups !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
