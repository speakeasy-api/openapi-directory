# SDK

### Available Operations

* [allStars](#allstars) - All-Stars
* [areGamesInProgress](#aregamesinprogress) - Are Games In Progress
* [boxScore](#boxscore) - Box Score
* [boxScoresByDate](#boxscoresbydate) - Box Scores by Date
* [boxScoresByDateDelta](#boxscoresbydatedelta) - Box Scores by Date Delta
* [currentSeason](#currentseason) - Current Season
* [dfsSlatesByDate](#dfsslatesbydate) - DFS Slates by Date
* [gamesByDate](#gamesbydate) - Games by Date
* [news](#news) - News
* [newsByDate](#newsbydate) - News by Date
* [newsByPlayer](#newsbyplayer) - News by Player
* [playerDetailsByActive](#playerdetailsbyactive) - Player Details by Active
* [playerDetailsByFreeAgent](#playerdetailsbyfreeagent) - Player Details by Free Agent
* [playerDetailsByPlayer](#playerdetailsbyplayer) - Player Details by Player
* [playerGameLogsBySeason](#playergamelogsbyseason) - Player Game Logs By Season
* [playerGameStatsByDate](#playergamestatsbydate) - Player Game Stats by Date
* [playerGameStatsByPlayer](#playergamestatsbyplayer) - Player Game Stats by Player
* [playerSeasonStats](#playerseasonstats) - Player Season Stats
* [playerSeasonStatsByPlayer](#playerseasonstatsbyplayer) - Player Season Stats By Player
* [playerSeasonStatsByTeam](#playerseasonstatsbyteam) - Player Season Stats by Team
* [playersByTeam](#playersbyteam) - Players by Team
* [schedules](#schedules) - Schedules
* [stadiums](#stadiums) - Stadiums
* [standings](#standings) - Standings
* [teamGameLogsBySeason](#teamgamelogsbyseason) - Team Game Logs By Season
* [teamGameStatsByDate](#teamgamestatsbydate) - Team Game Stats by Date
* [teamSeasonStats](#teamseasonstats) - Team Season Stats
* [teamStatsAllowedByPosition](#teamstatsallowedbyposition) - Team Stats Allowed by Position
* [teamsActive](#teamsactive) - Teams (Active)
* [teamsAll](#teamsall) - Teams (All)

## allStars

All-Stars

### Example Usage

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
    $request->season = 'quibusdam';

    $response = $sdk->sdk->allStars($request);

    if ($response->playerInfos !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->gameid = 'corrupti';

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
    $request->date = 'illum';
    $request->format = BoxScoresByDateFormatEnum::XML;

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
    $request->date = 'error';
    $request->format = BoxScoresByDateDeltaFormatEnum::JSON;
    $request->minutes = 'suscipit';

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
    $request->format = CurrentSeasonFormatEnum::XML;

    $response = $sdk->sdk->currentSeason($request);

    if ($response->season !== null) {
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
    $request->date = 'magnam';
    $request->format = DfsSlatesByDateFormatEnum::JSON;

    $response = $sdk->sdk->dfsSlatesByDate($request);

    if ($response->dfsSlates !== null) {
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
    $request->date = 'ipsa';
    $request->format = GamesByDateFormatEnum::JSON;

    $response = $sdk->sdk->gamesByDate($request);

    if ($response->games !== null) {
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
    $request->date = 'suscipit';
    $request->format = NewsByDateFormatEnum::XML;

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
    $request->format = NewsByPlayerFormatEnum::JSON;
    $request->playerid = 'placeat';

    $response = $sdk->sdk->newsByPlayer($request);

    if ($response->news !== null) {
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

## playerDetailsByFreeAgent

Player Details by Free Agent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerDetailsByFreeAgentRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerDetailsByFreeAgentFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerDetailsByFreeAgentRequest();
    $request->format = PlayerDetailsByFreeAgentFormatEnum::XML;

    $response = $sdk->sdk->playerDetailsByFreeAgent($request);

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
    $request->format = PlayerDetailsByPlayerFormatEnum::JSON;
    $request->playerid = 'nisi';

    $response = $sdk->sdk->playerDetailsByPlayer($request);

    if ($response->player !== null) {
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
    $request->format = PlayerGameLogsBySeasonFormatEnum::JSON;
    $request->numberofgames = 'temporibus';
    $request->playerid = 'ab';
    $request->season = 'quis';

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
    $request->date = 'veritatis';
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
    $request->date = 'perferendis';
    $request->format = PlayerGameStatsByPlayerFormatEnum::XML;
    $request->playerid = 'repellendus';

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
    $request->format = PlayerSeasonStatsFormatEnum::JSON;
    $request->season = 'quo';

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
    $request->playerid = 'at';
    $request->season = 'at';

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
    $request->format = PlayerSeasonStatsByTeamFormatEnum::JSON;
    $request->season = 'molestiae';
    $request->team = 'quod';

    $response = $sdk->sdk->playerSeasonStatsByTeam($request);

    if ($response->playerSeasons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playersByTeam

This endpoint provides active player details by team.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayersByTeamRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayersByTeamFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayersByTeamRequest();
    $request->format = PlayersByTeamFormatEnum::JSON;
    $request->team = 'esse';

    $response = $sdk->sdk->playersByTeam($request);

    if ($response->players !== null) {
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
    $request->format = SchedulesFormatEnum::JSON;
    $request->season = 'porro';

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

## standings

Standings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StandingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\StandingsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StandingsRequest();
    $request->format = StandingsFormatEnum::XML;
    $request->season = 'nam';

    $response = $sdk->sdk->standings($request);

    if ($response->standings !== null) {
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
    $request->format = TeamGameLogsBySeasonFormatEnum::JSON;
    $request->numberofgames = 'occaecati';
    $request->season = 'fugit';
    $request->teamid = 'deleniti';

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
    $request->date = 'hic';
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
    $request->season = 'beatae';

    $response = $sdk->sdk->teamSeasonStats($request);

    if ($response->teamSeasons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamStatsAllowedByPosition

Team Stats Allowed by Position

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TeamStatsAllowedByPositionRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamStatsAllowedByPositionFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamStatsAllowedByPositionRequest();
    $request->format = TeamStatsAllowedByPositionFormatEnum::XML;
    $request->season = 'molestiae';

    $response = $sdk->sdk->teamStatsAllowedByPosition($request);

    if ($response->teamSeasons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsActive

Teams (Active)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TeamsActiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsActiveFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsActiveRequest();
    $request->format = TeamsActiveFormatEnum::XML;

    $response = $sdk->sdk->teamsActive($request);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsAll

Teams (All)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAllFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsAllRequest();
    $request->format = TeamsAllFormatEnum::XML;

    $response = $sdk->sdk->teamsAll($request);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
