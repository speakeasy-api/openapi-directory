# SDK

### Available Operations

* [dfsSlatesByDate](#dfsslatesbydate) - DFS Slates by Date
* [injuredPlayers](#injuredplayers) - Injured Players
* [projectedPlayerGameStatsByDateWInjuriesDfsSalaries](#projectedplayergamestatsbydatewinjuriesdfssalaries) - Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
* [projectedPlayerGameStatsByPlayerWInjuriesDfsSalaries](#projectedplayergamestatsbyplayerwinjuriesdfssalaries) - Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)
* [startingGoaltendersByDate](#startinggoaltendersbydate) - Starting Goaltenders by Date

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

This endpoint provides all currently injured NHL players, along with injury details.

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

## startingGoaltendersByDate

This endpoint provides the projected & confirmed starting goaltenders for NHL games on a given date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartingGoaltendersByDateRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartingGoaltendersByDateFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartingGoaltendersByDateRequest();
    $request->date = 'deserunt';
    $request->format = StartingGoaltendersByDateFormatEnum::XML;

    $response = $sdk->sdk->startingGoaltendersByDate($request);

    if ($response->startingGoaltenders !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
