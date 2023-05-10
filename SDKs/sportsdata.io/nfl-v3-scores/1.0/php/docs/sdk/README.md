# SDK

## Overview

NFL schedules, scores, odds, weather, and news API.

### Available Operations

* [areGamesInProgress](#aregamesinprogress) - Are Games In Progress
* [byeWeeks](#byeweeks) - Bye Weeks
* [depthCharts](#depthcharts) - Depth Charts
* [gameStatsBySeasonDeprecatedUseTeamGameStatsInstead](#gamestatsbyseasondeprecateduseteamgamestatsinstead) - Game Stats by Season (Deprecated, use Team Game Stats instead)
* [gameStatsByWeekDeprecatedUseTeamGameStatsInstead](#gamestatsbyweekdeprecateduseteamgamestatsinstead) - Game Stats by Week (Deprecated, use Team Game Stats instead)
* [news](#news) - News
* [newsByDate](#newsbydate) - News by Date
* [newsByPlayer](#newsbyplayer) - News by Player
* [newsByTeam](#newsbyteam) - News by Team
* [playerDetailsByAvailable](#playerdetailsbyavailable) - Player Details by Available
* [playerDetailsByFreeAgents](#playerdetailsbyfreeagents) - Player Details by Free Agents
* [playerDetailsByPlayer](#playerdetailsbyplayer) - Player Details by Player
* [playerDetailsByRookieDraftYear](#playerdetailsbyrookiedraftyear) - Player Details by Rookie Draft Year
* [playerDetailsByTeam](#playerdetailsbyteam) - Player Details by Team
* [playersByTeamBasic](#playersbyteambasic) - Players by Team (Basic)
* [referees](#referees) - Referees
* [schedule](#schedule) - Schedule
* [scheduleBasic](#schedulebasic) - Schedule (Basic)
* [scoresByDate](#scoresbydate) - Scores by Date
* [scoresBySeason](#scoresbyseason) - Scores by Season 
* [scoresByWeek](#scoresbyweek) - Scores by Week
* [scoresByWeekBasic](#scoresbyweekbasic) - Scores by Week (Basic)
* [scoresByWeekSimulation](#scoresbyweeksimulation) - Scores by Week Simulation
* [seasonCurrent](#seasoncurrent) - Season Current
* [seasonLastCompleted](#seasonlastcompleted) - Season Last Completed
* [seasonUpcoming](#seasonupcoming) - Season Upcoming
* [stadiums](#stadiums) - Stadiums
* [standings](#standings) - Standings
* [teamGameLogsBySeason](#teamgamelogsbyseason) - Team Game Logs By Season
* [teamGameStats](#teamgamestats) - Team Game Stats
* [teamSeasonStats](#teamseasonstats) - Team Season Stats
* [teamsActive](#teamsactive) - Teams (Active)
* [teamsAll](#teamsall) - Teams (All)
* [teamsBasic](#teamsbasic) - Teams (Basic)
* [teamsBySeason](#teamsbyseason) - Teams by Season
* [timeframes](#timeframes) - Timeframes
* [weekCurrent](#weekcurrent) - Week Current
* [weekLastCompleted](#weeklastcompleted) - Week Last Completed
* [weekUpcoming](#weekupcoming) - Week Upcoming
* [xPing](#xping) - X Ping

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

## byeWeeks

Get bye weeks for the teams during a specified NFL season. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ByeWeeksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ByeWeeksFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ByeWeeksRequest();
    $request->format = ByeWeeksFormatEnum::JSON;
    $request->season = 'quibusdam';

    $response = $sdk->sdk->byeWeeks($request);

    if ($response->byes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## depthCharts

Depth charts for all NFL teams split by offensive, defensive, and special teams position groupings.

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

## gameStatsBySeasonDeprecatedUseTeamGameStatsInstead

Game Stats by Season (Deprecated, use Team Game Stats instead)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest;
use \OpenAPI\OpenAPI\Models\Operations\GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest();
    $request->format = GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum::JSON;
    $request->season = 'corrupti';

    $response = $sdk->sdk->gameStatsBySeasonDeprecatedUseTeamGameStatsInstead($request);

    if ($response->games !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gameStatsByWeekDeprecatedUseTeamGameStatsInstead

Game Stats by Week (Deprecated, use Team Game Stats instead)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest;
use \OpenAPI\OpenAPI\Models\Operations\GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest();
    $request->format = GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum::JSON;
    $request->season = 'vel';
    $request->week = 'error';

    $response = $sdk->sdk->gameStatsByWeekDeprecatedUseTeamGameStatsInstead($request);

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
    $request->format = NewsFormatEnum::JSON;

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
    $request->format = NewsByPlayerFormatEnum::XML;
    $request->playerid = 'debitis';

    $response = $sdk->sdk->newsByPlayer($request);

    if ($response->news !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## newsByTeam

News by Team

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NewsByTeamRequest;
use \OpenAPI\OpenAPI\Models\Operations\NewsByTeamFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NewsByTeamRequest();
    $request->format = NewsByTeamFormatEnum::XML;
    $request->team = 'delectus';

    $response = $sdk->sdk->newsByTeam($request);

    if ($response->news !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerDetailsByAvailable

Player Details by Available

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerDetailsByAvailableRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerDetailsByAvailableFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerDetailsByAvailableRequest();
    $request->format = PlayerDetailsByAvailableFormatEnum::XML;

    $response = $sdk->sdk->playerDetailsByAvailable($request);

    if ($response->players !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerDetailsByFreeAgents

Player Details by Free Agents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerDetailsByFreeAgentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerDetailsByFreeAgentsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerDetailsByFreeAgentsRequest();
    $request->format = PlayerDetailsByFreeAgentsFormatEnum::XML;

    $response = $sdk->sdk->playerDetailsByFreeAgents($request);

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
    $request->playerid = 'minus';

    $response = $sdk->sdk->playerDetailsByPlayer($request);

    if ($response->playerDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerDetailsByRookieDraftYear

Player Details by Rookie Draft Year

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerDetailsByRookieDraftYearRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerDetailsByRookieDraftYearFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerDetailsByRookieDraftYearRequest();
    $request->format = PlayerDetailsByRookieDraftYearFormatEnum::JSON;
    $request->season = 'voluptatum';

    $response = $sdk->sdk->playerDetailsByRookieDraftYear($request);

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
    $request->team = 'excepturi';

    $response = $sdk->sdk->playerDetailsByTeam($request);

    if ($response->playerDetails !== null) {
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
    $request->format = PlayersByTeamBasicFormatEnum::XML;
    $request->team = 'recusandae';

    $response = $sdk->sdk->playersByTeamBasic($request);

    if ($response->playersByTeamBasic200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## referees

Returns full list of NFL Referees

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RefereesRequest;
use \OpenAPI\OpenAPI\Models\Operations\RefereesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RefereesRequest();
    $request->format = RefereesFormatEnum::JSON;

    $response = $sdk->sdk->referees($request);

    if ($response->referees !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## schedule

Game schedule for a specified season.

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
    $request->season = 'quis';

    $response = $sdk->sdk->schedule($request);

    if ($response->schedules !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scheduleBasic

Game schedule for a specified season.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ScheduleBasicRequest;
use \OpenAPI\OpenAPI\Models\Operations\ScheduleBasicFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScheduleBasicRequest();
    $request->format = ScheduleBasicFormatEnum::XML;
    $request->season = 'deserunt';

    $response = $sdk->sdk->scheduleBasic($request);

    if ($response->scheduleBasics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scoresByDate

Get game scores for a specified week of a season.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ScoresByDateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ScoresByDateFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScoresByDateRequest();
    $request->date = 'perferendis';
    $request->format = ScoresByDateFormatEnum::XML;

    $response = $sdk->sdk->scoresByDate($request);

    if ($response->scores !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scoresBySeason

Game scores for a specified season.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ScoresBySeasonRequest;
use \OpenAPI\OpenAPI\Models\Operations\ScoresBySeasonFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScoresBySeasonRequest();
    $request->format = ScoresBySeasonFormatEnum::JSON;
    $request->season = 'sapiente';

    $response = $sdk->sdk->scoresBySeason($request);

    if ($response->scores !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scoresByWeek

Get game scores for a specified week of a season.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ScoresByWeekRequest;
use \OpenAPI\OpenAPI\Models\Operations\ScoresByWeekFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScoresByWeekRequest();
    $request->format = ScoresByWeekFormatEnum::JSON;
    $request->season = 'odit';
    $request->week = 'at';

    $response = $sdk->sdk->scoresByWeek($request);

    if ($response->scores !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scoresByWeekBasic

Get game scores for a specified week of a season.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ScoresByWeekBasicRequest;
use \OpenAPI\OpenAPI\Models\Operations\ScoresByWeekBasicFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScoresByWeekBasicRequest();
    $request->format = ScoresByWeekBasicFormatEnum::JSON;
    $request->season = 'maiores';
    $request->week = 'molestiae';

    $response = $sdk->sdk->scoresByWeekBasic($request);

    if ($response->scoreBasics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scoresByWeekSimulation

Gets simulated live scores of NFL games, covering the Conference Championship games on January 21, 2018.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ScoresByWeekSimulationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ScoresByWeekSimulationFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScoresByWeekSimulationRequest();
    $request->format = ScoresByWeekSimulationFormatEnum::JSON;
    $request->numberofplays = 'quod';

    $response = $sdk->sdk->scoresByWeekSimulation($request);

    if ($response->scores !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## seasonCurrent

Year of the current NFL season. This value changes at the start of the new NFL league year. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SeasonCurrentRequest;
use \OpenAPI\OpenAPI\Models\Operations\SeasonCurrentFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SeasonCurrentRequest();
    $request->format = SeasonCurrentFormatEnum::XML;

    $response = $sdk->sdk->seasonCurrent($request);

    if ($response->seasonCurrent200ApplicationJSONInteger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## seasonLastCompleted

Year of the most recently completed season. this value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SeasonLastCompletedRequest;
use \OpenAPI\OpenAPI\Models\Operations\SeasonLastCompletedFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SeasonLastCompletedRequest();
    $request->format = SeasonLastCompletedFormatEnum::JSON;

    $response = $sdk->sdk->seasonLastCompleted($request);

    if ($response->seasonLastCompleted200ApplicationJSONInteger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## seasonUpcoming

Year of the current NFL season, if we are in the mid-season. If we are in the off-season, then year of the next upcoming season. This value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SeasonUpcomingRequest;
use \OpenAPI\OpenAPI\Models\Operations\SeasonUpcomingFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SeasonUpcomingRequest();
    $request->format = SeasonUpcomingFormatEnum::JSON;

    $response = $sdk->sdk->seasonUpcoming($request);

    if ($response->seasonUpcoming200ApplicationJSONInteger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stadiums

This method returns all stadiums.

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

## teamGameStats

Team Game Stats

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TeamGameStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamGameStatsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamGameStatsRequest();
    $request->format = TeamGameStatsFormatEnum::JSON;
    $request->season = 'optio';
    $request->week = 'totam';

    $response = $sdk->sdk->teamGameStats($request);

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
    $request->format = TeamSeasonStatsFormatEnum::XML;
    $request->season = 'commodi';

    $response = $sdk->sdk->teamSeasonStats($request);

    if ($response->teamSeasons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsActive

Gets all active teams.

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

Gets all teams, including pro bowl teams.

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

## teamsBasic

Gets all teams, including pro bowl teams.

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
    $request->format = TeamsBasicFormatEnum::XML;

    $response = $sdk->sdk->teamsBasic($request);

    if ($response->teamBasics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsBySeason

List of teams playing in a specified season.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TeamsBySeasonRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsBySeasonFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsBySeasonRequest();
    $request->format = TeamsBySeasonFormatEnum::JSON;
    $request->season = 'cum';

    $response = $sdk->sdk->teamsBySeason($request);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## timeframes

Get detailed information about past, present, and future timeframes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TimeframesRequest;
use \OpenAPI\OpenAPI\Models\Operations\TimeframesFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\TimeframesTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TimeframesRequest();
    $request->format = TimeframesFormatEnum::XML;
    $request->type = TimeframesTypeEnum::UPCOMING;

    $response = $sdk->sdk->timeframes($request);

    if ($response->timeframes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## weekCurrent

Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WeekCurrentRequest;
use \OpenAPI\OpenAPI\Models\Operations\WeekCurrentFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WeekCurrentRequest();
    $request->format = WeekCurrentFormatEnum::JSON;

    $response = $sdk->sdk->weekCurrent($request);

    if ($response->weekCurrent200ApplicationJSONInteger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## weekLastCompleted

Number of the last completed week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WeekLastCompletedRequest;
use \OpenAPI\OpenAPI\Models\Operations\WeekLastCompletedFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WeekLastCompletedRequest();
    $request->format = WeekLastCompletedFormatEnum::XML;

    $response = $sdk->sdk->weekLastCompleted($request);

    if ($response->weekLastCompleted200ApplicationJSONInteger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## weekUpcoming

Number of the upcoming week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WeekUpcomingRequest;
use \OpenAPI\OpenAPI\Models\Operations\WeekUpcomingFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WeekUpcomingRequest();
    $request->format = WeekUpcomingFormatEnum::XML;

    $response = $sdk->sdk->weekUpcoming($request);

    if ($response->weekUpcoming200ApplicationJSONInteger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## xPing

Ping NFL API

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\XPingRequest;
use \OpenAPI\OpenAPI\Models\Operations\XPingFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new XPingRequest();
    $request->format = XPingFormatEnum::XML;
    $request->seconds = 'natus';

    $response = $sdk->sdk->xPing($request);

    if ($response->xPing200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
