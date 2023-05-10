# SDK

## Overview

NFL projected stats API.

### Available Operations

* [dfsSlateOwnershipProjectionsBySlateid](#dfsslateownershipprojectionsbyslateid) - DFS Slate Ownership Projections by SlateID
* [dfsSlatesByDate](#dfsslatesbydate) - DFS Slates by Date
* [dfsSlatesByWeek](#dfsslatesbyweek) - DFS Slates by Week
* [idpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries](#idpprojectedplayergamestatsbyplayerwinjurieslineupsdfssalaries) - IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
* [idpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries](#idpprojectedplayergamestatsbyteamwinjurieslineupsdfssalaries) - IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
* [idpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries](#idpprojectedplayergamestatsbyweekwinjurieslineupsdfssalaries) - IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
* [injuredPlayers](#injuredplayers) - Injured Players
* [projectedFantasyDefenseGameStatsWDfsSalaries](#projectedfantasydefensegamestatswdfssalaries) - Projected Fantasy Defense Game Stats (w/ DFS Salaries)
* [projectedFantasyDefenseSeasonStatsWAdp](#projectedfantasydefenseseasonstatswadp) - Projected Fantasy Defense Season Stats (w/ ADP)
* [projectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries](#projectedplayergamestatsbyplayerwinjurieslineupsdfssalaries) - Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
* [projectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries](#projectedplayergamestatsbyteamwinjurieslineupsdfssalaries) - Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
* [projectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries](#projectedplayergamestatsbyweekwinjurieslineupsdfssalaries) - Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
* [projectedPlayerSeasonStatsByPlayerWAdp](#projectedplayerseasonstatsbyplayerwadp) - Projected Player Season Stats by Player (w/ ADP)
* [projectedPlayerSeasonStatsByTeamWAdp](#projectedplayerseasonstatsbyteamwadp) - Projected Player Season Stats by Team (w/ ADP)
* [projectedPlayerSeasonStatsWAdp](#projectedplayerseasonstatswadp) - Projected Player Season Stats (w/ ADP)
* [upcomingDfsSlateOwnershipProjections](#upcomingdfsslateownershipprojections) - Upcoming DFS Slate Ownership Projections

## dfsSlateOwnershipProjectionsBySlateid

Slate Ownership Projections for a specific slate. Projections are for GPP format ownership. Will return an empty list if the slate is not yet projected or not a slate we have projections for.

### Example Usage

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
    $request->slateId = 'quibusdam';

    $response = $sdk->sdk->dfsSlateOwnershipProjectionsBySlateid($request);

    if ($response->dfsSlateWithOwnershipProjection !== null) {
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
    $request->date = 'unde';
    $request->format = DfsSlatesByDateFormatEnum::JSON;

    $response = $sdk->sdk->dfsSlatesByDate($request);

    if ($response->dfsSlates !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfsSlatesByWeek

DFS Slates by Week

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DfsSlatesByWeekRequest;
use \OpenAPI\OpenAPI\Models\Operations\DfsSlatesByWeekFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfsSlatesByWeekRequest();
    $request->format = DfsSlatesByWeekFormatEnum::JSON;
    $request->season = 'illum';
    $request->week = 'vel';

    $response = $sdk->sdk->dfsSlatesByWeek($request);

    if ($response->dfsSlates !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## idpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries

IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest();
    $request->format = IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum::JSON;
    $request->playerid = 'deserunt';
    $request->season = 'suscipit';
    $request->week = 'iure';

    $response = $sdk->sdk->idpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries($request);

    if ($response->playerGameProjection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## idpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries

IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest();
    $request->format = IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum::XML;
    $request->season = 'debitis';
    $request->team = 'ipsa';
    $request->week = 'delectus';

    $response = $sdk->sdk->idpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries($request);

    if ($response->playerGameProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## idpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries

IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest();
    $request->format = IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum::XML;
    $request->season = 'suscipit';
    $request->week = 'molestiae';

    $response = $sdk->sdk->idpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries($request);

    if ($response->playerGameProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## injuredPlayers

This endpoint provides all currently injured NFL players, along with injury details.

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

## projectedFantasyDefenseGameStatsWDfsSalaries

Projected Fantasy Defense Game Stats (w/ DFS Salaries)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedFantasyDefenseGameStatsWDfsSalariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedFantasyDefenseGameStatsWDfsSalariesRequest();
    $request->format = ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum::JSON;
    $request->season = 'voluptatum';
    $request->week = 'iusto';

    $response = $sdk->sdk->projectedFantasyDefenseGameStatsWDfsSalaries($request);

    if ($response->fantasyDefenseGameProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectedFantasyDefenseSeasonStatsWAdp

Projected Fantasy Defense Season Stats (w/ ADP)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedFantasyDefenseSeasonStatsWAdpRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedFantasyDefenseSeasonStatsWAdpFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedFantasyDefenseSeasonStatsWAdpRequest();
    $request->format = ProjectedFantasyDefenseSeasonStatsWAdpFormatEnum::JSON;
    $request->season = 'nisi';

    $response = $sdk->sdk->projectedFantasyDefenseSeasonStatsWAdp($request);

    if ($response->fantasyDefenseSeasonProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries

Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest();
    $request->format = ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum::JSON;
    $request->playerid = 'temporibus';
    $request->season = 'ab';
    $request->week = 'quis';

    $response = $sdk->sdk->projectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries($request);

    if ($response->playerGameProjection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries

Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest();
    $request->format = ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum::XML;
    $request->season = 'deserunt';
    $request->team = 'perferendis';
    $request->week = 'ipsam';

    $response = $sdk->sdk->projectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries($request);

    if ($response->playerGameProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries

Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest();
    $request->format = ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum::JSON;
    $request->season = 'sapiente';
    $request->week = 'quo';

    $response = $sdk->sdk->projectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries($request);

    if ($response->playerGameProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectedPlayerSeasonStatsByPlayerWAdp

Projected Player Season Stats by Player (w/ ADP)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerSeasonStatsByPlayerWAdpRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerSeasonStatsByPlayerWAdpFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedPlayerSeasonStatsByPlayerWAdpRequest();
    $request->format = ProjectedPlayerSeasonStatsByPlayerWAdpFormatEnum::XML;
    $request->playerid = 'at';
    $request->season = 'at';

    $response = $sdk->sdk->projectedPlayerSeasonStatsByPlayerWAdp($request);

    if ($response->playerSeasonProjection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectedPlayerSeasonStatsByTeamWAdp

Projected Player Season Stats by Team (w/ ADP)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerSeasonStatsByTeamWAdpRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerSeasonStatsByTeamWAdpFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedPlayerSeasonStatsByTeamWAdpRequest();
    $request->format = ProjectedPlayerSeasonStatsByTeamWAdpFormatEnum::JSON;
    $request->season = 'molestiae';
    $request->team = 'quod';

    $response = $sdk->sdk->projectedPlayerSeasonStatsByTeamWAdp($request);

    if ($response->playerSeasonProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectedPlayerSeasonStatsWAdp

Projected Player Season Stats (w/ ADP)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerSeasonStatsWAdpRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerSeasonStatsWAdpFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedPlayerSeasonStatsWAdpRequest();
    $request->format = ProjectedPlayerSeasonStatsWAdpFormatEnum::JSON;
    $request->season = 'esse';

    $response = $sdk->sdk->projectedPlayerSeasonStatsWAdp($request);

    if ($response->playerSeasonProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## upcomingDfsSlateOwnershipProjections

Grabs DFS Slates which have not yet started for which we have DFS Ownership projections. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpcomingDfsSlateOwnershipProjectionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpcomingDfsSlateOwnershipProjectionsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpcomingDfsSlateOwnershipProjectionsRequest();
    $request->format = UpcomingDfsSlateOwnershipProjectionsFormatEnum::JSON;

    $response = $sdk->sdk->upcomingDfsSlateOwnershipProjections($request);

    if ($response->dfsSlateWithOwnershipProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
