# SDK

### Available Operations

* [areGamesInProgress](#aregamesinprogress) - Are Games In Progress
* [boxScore](#boxscore) - Box Score
* [boxScoresByDate](#boxscoresbydate) - Box Scores by Date
* [boxScoresByDateDelta](#boxscoresbydatedelta) - Box Scores by Date Delta
* [currentSeason](#currentseason) - Current Season
* [gamesByDate](#gamesbydate) - Games by Date
* [injuredPlayers](#injuredplayers) - Injured Players
* [leagueHierarchy](#leaguehierarchy) - League Hierarchy
* [playerDetailsByActive](#playerdetailsbyactive) - Player Details by Active
* [playerDetailsByPlayer](#playerdetailsbyplayer) - Player Details by Player
* [playerDetailsByTeam](#playerdetailsbyteam) - Player Details by Team
* [playerGameLogsBySeason](#playergamelogsbyseason) - Player Game Logs By Season
* [playerGameStatsByDate](#playergamestatsbydate) - Player Game Stats by Date
* [playerGameStatsByPlayer](#playergamestatsbyplayer) - Player Game Stats by Player
* [playerSeasonStats](#playerseasonstats) - Player Season Stats
* [playerSeasonStatsByPlayer](#playerseasonstatsbyplayer) - Player Season Stats By Player
* [playerSeasonStatsByTeam](#playerseasonstatsbyteam) - Player Season Stats by Team
* [projectedPlayerGameStatsByDate](#projectedplayergamestatsbydate) - Projected Player Game Stats by Date
* [projectedPlayerGameStatsByPlayer](#projectedplayergamestatsbyplayer) - Projected Player Game Stats by Player
* [schedules](#schedules) - Schedules
* [stadiums](#stadiums) - Stadiums
* [teamGameLogsBySeason](#teamgamelogsbyseason) - Team Game Logs By Season
* [teamGameStatsByDate](#teamgamestatsbydate) - Team Game Stats by Date
* [teamSeasonStats](#teamseasonstats) - Team Season Stats
* [teams](#teams) - Teams
* [tournamentHierarchy](#tournamenthierarchy) - Tournament Hierarchy

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

## boxScore

Box Score

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BoxScoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\BoxScoreFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BoxScoreRequest();
    $request->format = BoxScoreFormatEnum::JSON;
    $request->gameid = 'quibusdam';

    $response = $sdk->sdk->boxScore($request);

    if ($response->boxScore !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## boxScoresByDate

Box Scores by Date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BoxScoresByDateRequest;
use \OpenAPI\OpenAPI\Models\Operations\BoxScoresByDateFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BoxScoresByDateRequest();
    $request->date = 'unde';
    $request->format = BoxScoresByDateFormatEnum::JSON;

    $response = $sdk->sdk->boxScoresByDate($request);

    if ($response->boxScores !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## boxScoresByDateDelta

Box Scores by Date Delta

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BoxScoresByDateDeltaRequest;
use \OpenAPI\OpenAPI\Models\Operations\BoxScoresByDateDeltaFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BoxScoresByDateDeltaRequest();
    $request->date = 'corrupti';
    $request->format = BoxScoresByDateDeltaFormatEnum::JSON;
    $request->minutes = 'vel';

    $response = $sdk->sdk->boxScoresByDateDelta($request);

    if ($response->boxScores !== null) {
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

    if ($response->season !== null) {
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
    $request->date = 'deserunt';
    $request->format = GamesByDateFormatEnum::XML;

    $response = $sdk->sdk->gamesByDate($request);

    if ($response->games !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## injuredPlayers

This endpoint provides all currently injured college basketball players, along with injury details.

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

## leagueHierarchy

League Hierarchy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LeagueHierarchyRequest;
use \OpenAPI\OpenAPI\Models\Operations\LeagueHierarchyFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LeagueHierarchyRequest();
    $request->format = LeagueHierarchyFormatEnum::XML;

    $response = $sdk->sdk->leagueHierarchy($request);

    if ($response->conferences !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerDetailsByActive

Player Details by Active

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

Player Details by Player

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
    $request->playerid = 'delectus';

    $response = $sdk->sdk->playerDetailsByPlayer($request);

    if ($response->player !== null) {
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
    $request->team = 'suscipit';

    $response = $sdk->sdk->playerDetailsByTeam($request);

    if ($response->players !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerGameLogsBySeason

Player Game Logs By Season

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerGameLogsBySeasonRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerGameLogsBySeasonFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerGameLogsBySeasonRequest();
    $request->format = PlayerGameLogsBySeasonFormatEnum::XML;
    $request->numberofgames = 'minus';
    $request->playerid = 'placeat';
    $request->season = 'voluptatum';

    $response = $sdk->sdk->playerGameLogsBySeason($request);

    if ($response->playerGames !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerGameStatsByDate

Player Game Stats by Date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerGameStatsByDateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerGameStatsByDateFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerGameStatsByDateRequest();
    $request->date = 'iusto';
    $request->format = PlayerGameStatsByDateFormatEnum::JSON;

    $response = $sdk->sdk->playerGameStatsByDate($request);

    if ($response->playerGames !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerGameStatsByPlayer

Player Game Stats by Player

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerGameStatsByPlayerRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerGameStatsByPlayerFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerGameStatsByPlayerRequest();
    $request->date = 'nisi';
    $request->format = PlayerGameStatsByPlayerFormatEnum::JSON;
    $request->playerid = 'temporibus';

    $response = $sdk->sdk->playerGameStatsByPlayer($request);

    if ($response->playerGame !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerSeasonStats

Player Season Stats

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerSeasonStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerSeasonStatsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerSeasonStatsRequest();
    $request->format = PlayerSeasonStatsFormatEnum::XML;
    $request->season = 'quis';

    $response = $sdk->sdk->playerSeasonStats($request);

    if ($response->playerSeasons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerSeasonStatsByPlayer

Player Season Stats By Player

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerSeasonStatsByPlayerRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerSeasonStatsByPlayerFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerSeasonStatsByPlayerRequest();
    $request->format = PlayerSeasonStatsByPlayerFormatEnum::XML;
    $request->playerid = 'deserunt';
    $request->season = 'perferendis';

    $response = $sdk->sdk->playerSeasonStatsByPlayer($request);

    if ($response->playerSeason !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerSeasonStatsByTeam

Player Season Stats by Team

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerSeasonStatsByTeamRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerSeasonStatsByTeamFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerSeasonStatsByTeamRequest();
    $request->format = PlayerSeasonStatsByTeamFormatEnum::XML;
    $request->season = 'repellendus';
    $request->team = 'sapiente';

    $response = $sdk->sdk->playerSeasonStatsByTeam($request);

    if ($response->playerSeasons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectedPlayerGameStatsByDate

Projected Player Game Stats by Date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByDateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByDateFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedPlayerGameStatsByDateRequest();
    $request->date = 'quo';
    $request->format = ProjectedPlayerGameStatsByDateFormatEnum::XML;

    $response = $sdk->sdk->projectedPlayerGameStatsByDate($request);

    if ($response->playerGameProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectedPlayerGameStatsByPlayer

Projected Player Game Stats by Player

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByPlayerRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectedPlayerGameStatsByPlayerFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectedPlayerGameStatsByPlayerRequest();
    $request->date = 'at';
    $request->format = ProjectedPlayerGameStatsByPlayerFormatEnum::JSON;
    $request->playerid = 'maiores';

    $response = $sdk->sdk->projectedPlayerGameStatsByPlayer($request);

    if ($response->playerGameProjection !== null) {
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
    $request->season = 'quod';

    $response = $sdk->sdk->schedules($request);

    if ($response->games !== null) {
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
    $request->numberofgames = 'totam';
    $request->season = 'porro';
    $request->teamid = 'dolorum';

    $response = $sdk->sdk->teamGameLogsBySeason($request);

    if ($response->teamGames !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamGameStatsByDate

Team Game Stats by Date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TeamGameStatsByDateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamGameStatsByDateFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamGameStatsByDateRequest();
    $request->date = 'dicta';
    $request->format = TeamGameStatsByDateFormatEnum::JSON;

    $response = $sdk->sdk->teamGameStatsByDate($request);

    if ($response->teamGames !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamSeasonStats

Team Season Stats

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TeamSeasonStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamSeasonStatsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamSeasonStatsRequest();
    $request->format = TeamSeasonStatsFormatEnum::JSON;
    $request->season = 'occaecati';

    $response = $sdk->sdk->teamSeasonStats($request);

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

## tournamentHierarchy

Tournament Hierarchy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TournamentHierarchyRequest;
use \OpenAPI\OpenAPI\Models\Operations\TournamentHierarchyFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TournamentHierarchyRequest();
    $request->format = TournamentHierarchyFormatEnum::JSON;
    $request->season = 'hic';

    $response = $sdk->sdk->tournamentHierarchy($request);

    if ($response->tournament !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
