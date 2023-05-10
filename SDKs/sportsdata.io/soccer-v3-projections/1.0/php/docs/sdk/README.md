# SDK

### Available Operations

* [dfsSlatesByDate](#dfsslatesbydate) - Dfs Slates By Date
* [injuredPlayersByCompetition](#injuredplayersbycompetition) - Injured Players By Competition
* [projectedPlayerGameStatsByCompetitionWDfsSalaries](#projectedplayergamestatsbycompetitionwdfssalaries) - Projected Player Game Stats by Competition (w/ DFS Salaries)
* [projectedPlayerGameStatsByDateWDfsSalaries](#projectedplayergamestatsbydatewdfssalaries) - Projected Player Game Stats by Date (w/ DFS Salaries)
* [projectedPlayerGameStatsByPlayerWDfsSalaries](#projectedplayergamestatsbyplayerwdfssalaries) - Projected Player Game Stats by Player (w/ DFS Salaries)
* [upcomingDfsSlatesByCompetition](#upcomingdfsslatesbycompetition) - Upcoming Dfs Slates By Competition

## dfsSlatesByDate

Dfs Slates By Date

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
    $request->format = DfsSlatesByDateFormatEnum::XML;

    $response = $sdk->sdk->dfsSlatesByDate($request);

    if ($response->dfsSlates !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## injuredPlayersByCompetition

This endpoint provides all currently injured soccer players by competition, along with injury details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InjuredPlayersByCompetitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\InjuredPlayersByCompetitionFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InjuredPlayersByCompetitionRequest();
    $request->competition = 'unde';
    $request->format = InjuredPlayersByCompetitionFormatEnum::JSON;

    $response = $sdk->sdk->injuredPlayersByCompetition($request);

    if ($response->players !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectedPlayerGameStatsByCompetitionWDfsSalaries

Projected Player Game Stats by Competition (w/ DFS Salaries)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByCompetitionWDfsSalariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedPlayerGameStatsByCompetitionWDfsSalariesRequest();
    $request->competition = 'corrupti';
    $request->date = 'illum';
    $request->format = ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum::XML;

    $response = $sdk->sdk->projectedPlayerGameStatsByCompetitionWDfsSalaries($request);

    if ($response->playerGameProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectedPlayerGameStatsByDateWDfsSalaries

Projected Player Game Stats by Date (w/ DFS Salaries)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByDateWDfsSalariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedPlayerGameStatsByDateWDfsSalariesRequest();
    $request->date = 'error';
    $request->format = ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum::JSON;

    $response = $sdk->sdk->projectedPlayerGameStatsByDateWDfsSalaries($request);

    if ($response->playerGameProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectedPlayerGameStatsByPlayerWDfsSalaries

Projected Player Game Stats by Player (w/ DFS Salaries)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByPlayerWDfsSalariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByPlayerWDfsSalariesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedPlayerGameStatsByPlayerWDfsSalariesRequest();
    $request->date = 'suscipit';
    $request->format = ProjectedPlayerGameStatsByPlayerWDfsSalariesFormatEnum::XML;
    $request->playerid = 'magnam';

    $response = $sdk->sdk->projectedPlayerGameStatsByPlayerWDfsSalaries($request);

    if ($response->playerGameProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## upcomingDfsSlatesByCompetition

Upcoming Dfs Slates By Competition

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpcomingDfsSlatesByCompetitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpcomingDfsSlatesByCompetitionFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpcomingDfsSlatesByCompetitionRequest();
    $request->competitionId = 'debitis';
    $request->format = UpcomingDfsSlatesByCompetitionFormatEnum::JSON;

    $response = $sdk->sdk->upcomingDfsSlatesByCompetition($request);

    if ($response->dfsSlates !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
