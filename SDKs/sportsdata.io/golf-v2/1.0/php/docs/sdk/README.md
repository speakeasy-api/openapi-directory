# SDK

### Available Operations

* [currentSeason](#currentseason) - Current Season
* [dfsSlates](#dfsslates) - DFS Slates
* [injuries](#injuries) - Injuries
* [injuriesHistorical](#injurieshistorical) - Injuries (Historical)
* [leaderboard](#leaderboard) - Leaderboard
* [news](#news) - News
* [newsByDate](#newsbydate) - News by Date
* [newsByPlayer](#newsbyplayer) - News by Player
* [player](#player) - Player
* [playerSeasonStatsWWorldGolfRankings](#playerseasonstatswworldgolfrankings) - Player Season Stats (w/ World Golf Rankings)
* [playerTournamentProjectedStatsWDraftkingsSalaries](#playertournamentprojectedstatswdraftkingssalaries) - Player Tournament Projected Stats (w/ DraftKings Salaries)
* [playerTournamentStatsByPlayer](#playertournamentstatsbyplayer) - Player Tournament Stats By Player
* [players](#players) - Players
* [schedule](#schedule) - Schedule
* [scheduleBySeason](#schedulebyseason) - Schedule by Season

## currentSeason

Current Season

### Example Usage

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

    $response = $sdk->sdk->currentSeason($request);

    if ($response->season !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfsSlates

DFS Slates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DfsSlatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DfsSlatesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfsSlatesRequest();
    $request->format = DfsSlatesFormatEnum::JSON;
    $request->tournamentid = 'quibusdam';

    $response = $sdk->sdk->dfsSlates($request);

    if ($response->dfsSlates !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## injuries

Injuries

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InjuriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\InjuriesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InjuriesRequest();
    $request->format = InjuriesFormatEnum::JSON;

    $response = $sdk->sdk->injuries($request);

    if ($response->injuries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## injuriesHistorical

Injuries (Historical)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InjuriesHistoricalRequest;
use \OpenAPI\OpenAPI\Models\Operations\InjuriesHistoricalFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InjuriesHistoricalRequest();
    $request->format = InjuriesHistoricalFormatEnum::JSON;

    $response = $sdk->sdk->injuriesHistorical($request);

    if ($response->injuries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## leaderboard

Leaderboard

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LeaderboardRequest;
use \OpenAPI\OpenAPI\Models\Operations\LeaderboardFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LeaderboardRequest();
    $request->format = LeaderboardFormatEnum::JSON;
    $request->tournamentid = 'illum';

    $response = $sdk->sdk->leaderboard($request);

    if ($response->leaderboard !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## news

News

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NewsRequest;
use \OpenAPI\OpenAPI\Models\Operations\NewsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NewsRequest();
    $request->format = NewsFormatEnum::XML;

    $response = $sdk->sdk->news($request);

    if ($response->news !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## newsByDate

News by Date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NewsByDateRequest;
use \OpenAPI\OpenAPI\Models\Operations\NewsByDateFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NewsByDateRequest();
    $request->date = 'error';
    $request->format = NewsByDateFormatEnum::JSON;

    $response = $sdk->sdk->newsByDate($request);

    if ($response->news !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## newsByPlayer

News by Player

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NewsByPlayerRequest;
use \OpenAPI\OpenAPI\Models\Operations\NewsByPlayerFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NewsByPlayerRequest();
    $request->format = NewsByPlayerFormatEnum::XML;
    $request->playerid = 'iure';

    $response = $sdk->sdk->newsByPlayer($request);

    if ($response->news !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## player

Player

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerRequest();
    $request->format = PlayerFormatEnum::XML;
    $request->playerid = 'debitis';

    $response = $sdk->sdk->player($request);

    if ($response->player !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerSeasonStatsWWorldGolfRankings

Player Season Stats (w/ World Golf Rankings)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerSeasonStatsWWorldGolfRankingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerSeasonStatsWWorldGolfRankingsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerSeasonStatsWWorldGolfRankingsRequest();
    $request->format = PlayerSeasonStatsWWorldGolfRankingsFormatEnum::XML;
    $request->season = 'delectus';

    $response = $sdk->sdk->playerSeasonStatsWWorldGolfRankings($request);

    if ($response->playerSeasons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerTournamentProjectedStatsWDraftkingsSalaries

Player Tournament Projected Stats (w/ DraftKings Salaries)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerTournamentProjectedStatsWDraftkingsSalariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerTournamentProjectedStatsWDraftkingsSalariesRequest();
    $request->format = PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum::XML;
    $request->tournamentid = 'suscipit';

    $response = $sdk->sdk->playerTournamentProjectedStatsWDraftkingsSalaries($request);

    if ($response->playerTournamentProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerTournamentStatsByPlayer

Player Tournament Stats By Player

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerTournamentStatsByPlayerRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerTournamentStatsByPlayerFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerTournamentStatsByPlayerRequest();
    $request->format = PlayerTournamentStatsByPlayerFormatEnum::XML;
    $request->playerid = 'minus';
    $request->tournamentid = 'placeat';

    $response = $sdk->sdk->playerTournamentStatsByPlayer($request);

    if ($response->playerTournament !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## players

Players

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayersRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayersFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayersRequest();
    $request->format = PlayersFormatEnum::JSON;

    $response = $sdk->sdk->players($request);

    if ($response->players !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## schedule

Schedule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\ScheduleFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScheduleRequest();
    $request->format = ScheduleFormatEnum::XML;

    $response = $sdk->sdk->schedule($request);

    if ($response->tournaments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scheduleBySeason

Schedule by Season

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ScheduleBySeasonRequest;
use \OpenAPI\OpenAPI\Models\Operations\ScheduleBySeasonFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScheduleBySeasonRequest();
    $request->format = ScheduleBySeasonFormatEnum::JSON;
    $request->season = 'nisi';

    $response = $sdk->sdk->scheduleBySeason($request);

    if ($response->tournaments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
