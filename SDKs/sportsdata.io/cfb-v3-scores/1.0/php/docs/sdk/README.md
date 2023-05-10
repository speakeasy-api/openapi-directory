# SDK

## Overview

CFB schedules, scores, team stats, odds, weather, and news API.

### Available Operations

* [areGamesInProgress](#aregamesinprogress) - Are Games In Progress
* [conferenceHierarchyWithTeams](#conferencehierarchywithteams) - Conference Hierarchy (with Teams)
* [currentSeason](#currentseason) - Current Season
* [currentSeasonDetails](#currentseasondetails) - Current Season Details
* [currentSeasontype](#currentseasontype) - Current SeasonType
* [currentWeek](#currentweek) - Current Week
* [gamesByDate](#gamesbydate) - Games by Date
* [gamesByWeek](#gamesbyweek) - Games by Week
* [gamesByWeekBasic](#gamesbyweekbasic) - Games by Week (Basic)
* [injuredPlayers](#injuredplayers) - Injured Players
* [playerDetailsByActive](#playerdetailsbyactive) - Player Details By Active
* [playerDetailsByPlayer](#playerdetailsbyplayer) - Player Details By Player
* [playerDetailsByTeam](#playerdetailsbyteam) - Player Details by Team
* [playersByTeamBasic](#playersbyteambasic) - Players by Team (Basic)
* [schedules](#schedules) - Schedules
* [schedulesBasic](#schedulesbasic) - Schedules (Basic)
* [stadiums](#stadiums) - Stadiums
* [teamGameLogsBySeason](#teamgamelogsbyseason) - Team Game Logs By Season
* [teamGameStatsByWeek](#teamgamestatsbyweek) - Team Game Stats by Week
* [teamSeasonStatsStandings](#teamseasonstatsstandings) - Team Season Stats & Standings
* [teams](#teams) - Teams
* [teamsBasic](#teamsbasic) - Teams (Basic)

## areGamesInProgress

Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AreGamesInProgressRequest;
use \OpenAPI\OpenAPI\Models\Operations\AreGamesInProgressFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AreGamesInProgressRequest();
    $request->format = AreGamesInProgressFormatEnum::JSON;

    $response = $sdk->sdk->areGamesInProgress($request);

    if ($response->areGamesInProgress200ApplicationJSONBoolean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conferenceHierarchyWithTeams

Conference Hierarchy (with Teams)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConferenceHierarchyWithTeamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConferenceHierarchyWithTeamsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConferenceHierarchyWithTeamsRequest();
    $request->format = ConferenceHierarchyWithTeamsFormatEnum::JSON;

    $response = $sdk->sdk->conferenceHierarchyWithTeams($request);

    if ($response->conferences !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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

    if ($response->currentSeason200ApplicationJSONInteger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## currentSeasonDetails

Current Season Details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CurrentSeasonDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CurrentSeasonDetailsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CurrentSeasonDetailsRequest();
    $request->format = CurrentSeasonDetailsFormatEnum::JSON;

    $response = $sdk->sdk->currentSeasonDetails($request);

    if ($response->season !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## currentSeasontype

Current SeasonType

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CurrentSeasontypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CurrentSeasontypeFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CurrentSeasontypeRequest();
    $request->format = CurrentSeasontypeFormatEnum::JSON;

    $response = $sdk->sdk->currentSeasontype($request);

    if ($response->currentSeasontype200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## currentWeek

Current Week

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CurrentWeekRequest;
use \OpenAPI\OpenAPI\Models\Operations\CurrentWeekFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CurrentWeekRequest();
    $request->format = CurrentWeekFormatEnum::JSON;

    $response = $sdk->sdk->currentWeek($request);

    if ($response->currentWeek200ApplicationJSONInteger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesByDate

Games by Date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GamesByDateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GamesByDateFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesByDateRequest();
    $request->date = 'illum';
    $request->format = GamesByDateFormatEnum::XML;

    $response = $sdk->sdk->gamesByDate($request);

    if ($response->games !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesByWeek

Games by Week

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GamesByWeekRequest;
use \OpenAPI\OpenAPI\Models\Operations\GamesByWeekFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesByWeekRequest();
    $request->format = GamesByWeekFormatEnum::JSON;
    $request->season = 'deserunt';
    $request->week = 'suscipit';

    $response = $sdk->sdk->gamesByWeek($request);

    if ($response->games !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesByWeekBasic

Games by Week (Basic)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GamesByWeekBasicRequest;
use \OpenAPI\OpenAPI\Models\Operations\GamesByWeekBasicFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesByWeekBasicRequest();
    $request->format = GamesByWeekBasicFormatEnum::XML;
    $request->season = 'magnam';
    $request->week = 'debitis';

    $response = $sdk->sdk->gamesByWeekBasic($request);

    if ($response->gamesByWeekBasic200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## injuredPlayers

This endpoint provides all currently injured college football players, along with injury details.

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
    $request->format = InjuredPlayersFormatEnum::XML;

    $response = $sdk->sdk->injuredPlayers($request);

    if ($response->players !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerDetailsByActive

Player Details By Active

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerDetailsByActiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerDetailsByActiveFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerDetailsByActiveRequest();
    $request->format = PlayerDetailsByActiveFormatEnum::JSON;

    $response = $sdk->sdk->playerDetailsByActive($request);

    if ($response->players !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerDetailsByPlayer

Player Details By Player

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerDetailsByPlayerRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerDetailsByPlayerFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerDetailsByPlayerRequest();
    $request->format = PlayerDetailsByPlayerFormatEnum::XML;
    $request->playerid = 'suscipit';

    $response = $sdk->sdk->playerDetailsByPlayer($request);

    if ($response->players !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerDetailsByTeam

Player Details by Team

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerDetailsByTeamRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerDetailsByTeamFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerDetailsByTeamRequest();
    $request->format = PlayerDetailsByTeamFormatEnum::XML;
    $request->team = 'minus';

    $response = $sdk->sdk->playerDetailsByTeam($request);

    if ($response->players !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playersByTeamBasic

Players by Team (Basic)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayersByTeamBasicRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayersByTeamBasicFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayersByTeamBasicRequest();
    $request->format = PlayersByTeamBasicFormatEnum::JSON;
    $request->team = 'voluptatum';

    $response = $sdk->sdk->playersByTeamBasic($request);

    if ($response->playerBasics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## schedules

Schedules

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SchedulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\SchedulesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SchedulesRequest();
    $request->format = SchedulesFormatEnum::XML;
    $request->season = 'excepturi';

    $response = $sdk->sdk->schedules($request);

    if ($response->games !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## schedulesBasic

Schedules (Basic)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SchedulesBasicRequest;
use \OpenAPI\OpenAPI\Models\Operations\SchedulesBasicFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SchedulesBasicRequest();
    $request->format = SchedulesBasicFormatEnum::XML;
    $request->season = 'recusandae';

    $response = $sdk->sdk->schedulesBasic($request);

    if ($response->scheduleBasics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stadiums

Stadiums

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StadiumsRequest;
use \OpenAPI\OpenAPI\Models\Operations\StadiumsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StadiumsRequest();
    $request->format = StadiumsFormatEnum::JSON;

    $response = $sdk->sdk->stadiums($request);

    if ($response->stadiums !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamGameLogsBySeason

Game by game log of total team statistics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TeamGameLogsBySeasonRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamGameLogsBySeasonFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamGameLogsBySeasonRequest();
    $request->format = TeamGameLogsBySeasonFormatEnum::XML;
    $request->numberofgames = 'quis';
    $request->season = 'veritatis';
    $request->teamid = 'deserunt';

    $response = $sdk->sdk->teamGameLogsBySeason($request);

    if ($response->teamGames !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamGameStatsByWeek

Team Game Stats by Week

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TeamGameStatsByWeekRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamGameStatsByWeekFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamGameStatsByWeekRequest();
    $request->format = TeamGameStatsByWeekFormatEnum::XML;
    $request->season = 'ipsam';
    $request->week = 'repellendus';

    $response = $sdk->sdk->teamGameStatsByWeek($request);

    if ($response->teamGames !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamSeasonStatsStandings

Team Season Stats & Standings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TeamSeasonStatsStandingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamSeasonStatsStandingsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamSeasonStatsStandingsRequest();
    $request->format = TeamSeasonStatsStandingsFormatEnum::JSON;
    $request->season = 'quo';

    $response = $sdk->sdk->teamSeasonStatsStandings($request);

    if ($response->teamSeasons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teams

Teams

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TeamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsRequest();
    $request->format = TeamsFormatEnum::XML;

    $response = $sdk->sdk->teams($request);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsBasic

Teams (Basic)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TeamsBasicRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsBasicFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsBasicRequest();
    $request->format = TeamsBasicFormatEnum::JSON;

    $response = $sdk->sdk->teamsBasic($request);

    if ($response->teamBasics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
