# SDK

## Overview

NFL rosters, player stats, team stats, and fantasy stats API.

### Available Operations

* [areGamesInProgress](#aregamesinprogress) - Are Games In Progress
* [boxScoreByScoreidV](#boxscorebyscoreidv) - Box Score by ScoreID V3
* [boxScoreV](#boxscorev) - Box Score V3
* [boxScoresDeltaV](#boxscoresdeltav) - Box Scores Delta V3
* [boxScoresVSimulation](#boxscoresvsimulation) - Box Scores V3 Simulation
* [byeWeeks](#byeweeks) - Bye Weeks
* [dailyFantasyPlayers](#dailyfantasyplayers) - Daily Fantasy Players
* [dailyFantasyScoring](#dailyfantasyscoring) - Daily Fantasy Scoring
* [dfsSlatesByDate](#dfsslatesbydate) - DFS Slates by Date
* [dfsSlatesByWeek](#dfsslatesbyweek) - DFS Slates by Week
* [fantasyDefenseGameStats](#fantasydefensegamestats) - Fantasy Defense Game Stats
* [fantasyDefenseGameStatsByTeam](#fantasydefensegamestatsbyteam) - Fantasy Defense Game Stats by Team
* [fantasyDefenseSeasonStats](#fantasydefenseseasonstats) - Fantasy Defense Season Stats
* [fantasyDefenseSeasonStatsByTeam](#fantasydefenseseasonstatsbyteam) - Fantasy Defense Season Stats by Team
* [fantasyPlayerOwnershipPercentagesSeasonLong](#fantasyplayerownershippercentagesseasonlong) - Fantasy Player Ownership Percentages (Season-Long)
* [fantasyPlayersWithAdp](#fantasyplayerswithadp) - Fantasy Players with ADP
* [gameStatsBySeasonDeprecatedUseTeamGameStatsInstead](#gamestatsbyseasondeprecateduseteamgamestatsinstead) - Game Stats by Season (Deprecated, use Team Game Stats instead)
* [gameStatsByWeekDeprecatedUseTeamGameStatsInstead](#gamestatsbyweekdeprecateduseteamgamestatsinstead) - Game Stats by Week (Deprecated, use Team Game Stats instead)
* [idpFantasyPlayersWithAdp](#idpfantasyplayerswithadp) - IDP Fantasy Players with ADP
* [injuries](#injuries) - Injuries
* [injuriesByTeam](#injuriesbyteam) - Injuries by Team
* [leagueLeadersBySeason](#leagueleadersbyseason) - League Leaders by Season
* [leagueLeadersByWeek](#leagueleadersbyweek) - League Leaders by Week
* [legacyBoxScore](#legacyboxscore) - Legacy Box Score
* [legacyBoxScores](#legacyboxscores) - Legacy Box Scores
* [legacyBoxScoresActive](#legacyboxscoresactive) - Legacy Box Scores Active
* [legacyBoxScoresDelta](#legacyboxscoresdelta) - Legacy Box Scores Delta
* [legacyBoxScoresDeltaCurrentWeek](#legacyboxscoresdeltacurrentweek) - Legacy Box Scores Delta (Current Week)
* [legacyBoxScoresFinal](#legacyboxscoresfinal) - Legacy Box Scores Final
* [legacyBoxScoresLive](#legacyboxscoreslive) - Legacy Box Scores Live
* [news](#news) - News
* [newsByDate](#newsbydate) - News by Date
* [newsByPlayer](#newsbyplayer) - News by Player
* [newsByTeam](#newsbyteam) - News by Team
* [playerDetailsByAvailable](#playerdetailsbyavailable) - Player Details by Available
* [playerDetailsByFreeAgents](#playerdetailsbyfreeagents) - Player Details by Free Agents
* [playerDetailsByPlayer](#playerdetailsbyplayer) - Player Details by Player
* [playerDetailsByRookieDraftYear](#playerdetailsbyrookiedraftyear) - Player Details by Rookie Draft Year
* [playerDetailsByTeam](#playerdetailsbyteam) - Player Details by Team
* [playerGameLogsBySeason](#playergamelogsbyseason) - Player Game Logs By Season
* [playerGameRedZoneStats](#playergameredzonestats) - Player Game Red Zone Stats
* [playerGameRedZoneStatsInsideFive](#playergameredzonestatsinsidefive) - Player Game Red Zone Stats Inside Five
* [playerGameRedZoneStatsInsideTen](#playergameredzonestatsinsideten) - Player Game Red Zone Stats Inside Ten
* [playerGameStatsByPlayer](#playergamestatsbyplayer) - Player Game Stats by Player
* [playerGameStatsByTeam](#playergamestatsbyteam) - Player Game Stats by Team
* [playerGameStatsByWeek](#playergamestatsbyweek) - Player Game Stats by Week
* [playerGameStatsByWeekDelta](#playergamestatsbyweekdelta) - Player Game Stats by Week Delta
* [playerGameStatsDelta](#playergamestatsdelta) - Player Game Stats Delta
* [playerSeasonRedZoneStats](#playerseasonredzonestats) - Player Season Red Zone Stats
* [playerSeasonRedZoneStatsInsideFive](#playerseasonredzonestatsinsidefive) - Player Season Red Zone Stats Inside Five
* [playerSeasonRedZoneStatsInsideTen](#playerseasonredzonestatsinsideten) - Player Season Red Zone Stats Inside Ten
* [playerSeasonStats](#playerseasonstats) - Player Season Stats
* [playerSeasonStatsByPlayer](#playerseasonstatsbyplayer) - Player Season Stats by Player
* [playerSeasonStatsByTeam](#playerseasonstatsbyteam) - Player Season Stats by Team
* [playerSeasonThirdDownStats](#playerseasonthirddownstats) - Player Season Third Down Stats
* [proBowlers](#probowlers) - Pro Bowlers
* [schedule](#schedule) - Schedule
* [scoresByDate](#scoresbydate) - Scores by Date
* [scoresBySeason](#scoresbyseason) - Scores by Season 
* [scoresByWeek](#scoresbyweek) - Scores by Week
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
* [teamsBySeason](#teamsbyseason) - Teams by Season
* [timeframes](#timeframes) - Timeframes
* [weekCurrent](#weekcurrent) - Week Current
* [weekLastCompleted](#weeklastcompleted) - Week Last Completed
* [weekUpcoming](#weekupcoming) - Week Upcoming

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

## boxScoreByScoreidV

Box Score by ScoreID V3

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BoxScoreByScoreidVRequest;
use \OpenAPI\OpenAPI\Models\Operations\BoxScoreByScoreidVFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BoxScoreByScoreidVRequest();
    $request->format = BoxScoreByScoreidVFormatEnum::JSON;
    $request->scoreid = 'quibusdam';

    $response = $sdk->sdk->boxScoreByScoreidV($request);

    if ($response->boxScoreV3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## boxScoreV

Box Score V3

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BoxScoreVRequest;
use \OpenAPI\OpenAPI\Models\Operations\BoxScoreVFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BoxScoreVRequest();
    $request->format = BoxScoreVFormatEnum::JSON;
    $request->hometeam = 'nulla';
    $request->season = 'corrupti';
    $request->week = 'illum';

    $response = $sdk->sdk->boxScoreV($request);

    if ($response->boxScoreV3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## boxScoresDeltaV

This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes. You can also filter by type of player stats to include, such as traditional fantasy players, IDP players or all players.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BoxScoresDeltaVRequest;
use \OpenAPI\OpenAPI\Models\Operations\BoxScoresDeltaVFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\BoxScoresDeltaVPlayerstoincludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BoxScoresDeltaVRequest();
    $request->format = BoxScoresDeltaVFormatEnum::XML;
    $request->minutes = 'error';
    $request->playerstoinclude = BoxScoresDeltaVPlayerstoincludeEnum::FANTASY;
    $request->season = 'suscipit';
    $request->week = 'iure';

    $response = $sdk->sdk->boxScoresDeltaV($request);

    if ($response->boxScoreV3s !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## boxScoresVSimulation

Gets simulated live box scores of NFL games, covering the Conference Championship games on January 21, 2018.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BoxScoresVSimulationRequest;
use \OpenAPI\OpenAPI\Models\Operations\BoxScoresVSimulationFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BoxScoresVSimulationRequest();
    $request->format = BoxScoresVSimulationFormatEnum::XML;
    $request->numberofplays = 'debitis';

    $response = $sdk->sdk->boxScoresVSimulation($request);

    if ($response->boxScoreV3s !== null) {
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

$sdk = SDK::builder()
    ->build();

try {
    $request = new ByeWeeksRequest();
    $request->format = 'ipsa';
    $request->season = 'delectus';

    $response = $sdk->sdk->byeWeeks($request);

    if ($response->byes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dailyFantasyPlayers

Daily Fantasy Players

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DailyFantasyPlayersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DailyFantasyPlayersFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DailyFantasyPlayersRequest();
    $request->date = 'tempora';
    $request->format = DailyFantasyPlayersFormatEnum::XML;

    $response = $sdk->sdk->dailyFantasyPlayers($request);

    if ($response->dailyFantasyPlayers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dailyFantasyScoring

Daily Fantasy Scoring

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DailyFantasyScoringRequest;
use \OpenAPI\OpenAPI\Models\Operations\DailyFantasyScoringFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DailyFantasyScoringRequest();
    $request->date = 'molestiae';
    $request->format = DailyFantasyScoringFormatEnum::JSON;

    $response = $sdk->sdk->dailyFantasyScoring($request);

    if ($response->dailyFantasyScorings !== null) {
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
    $request->date = 'placeat';
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
    $request->format = DfsSlatesByWeekFormatEnum::XML;
    $request->season = 'excepturi';
    $request->week = 'nisi';

    $response = $sdk->sdk->dfsSlatesByWeek($request);

    if ($response->dfsSlates !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fantasyDefenseGameStats

Fantasy Defense Game Stats

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FantasyDefenseGameStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FantasyDefenseGameStatsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FantasyDefenseGameStatsRequest();
    $request->format = FantasyDefenseGameStatsFormatEnum::JSON;
    $request->season = 'temporibus';
    $request->week = 'ab';

    $response = $sdk->sdk->fantasyDefenseGameStats($request);

    if ($response->fantasyDefenseGames !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fantasyDefenseGameStatsByTeam

Fantasy Defense Game Stats by Team

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FantasyDefenseGameStatsByTeamRequest;
use \OpenAPI\OpenAPI\Models\Operations\FantasyDefenseGameStatsByTeamFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FantasyDefenseGameStatsByTeamRequest();
    $request->format = FantasyDefenseGameStatsByTeamFormatEnum::XML;
    $request->season = 'veritatis';
    $request->team = 'deserunt';
    $request->week = 'perferendis';

    $response = $sdk->sdk->fantasyDefenseGameStatsByTeam($request);

    if ($response->fantasyDefenseGame !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fantasyDefenseSeasonStats

Fantasy Defense Season Stats

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FantasyDefenseSeasonStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FantasyDefenseSeasonStatsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FantasyDefenseSeasonStatsRequest();
    $request->format = FantasyDefenseSeasonStatsFormatEnum::XML;
    $request->season = 'repellendus';

    $response = $sdk->sdk->fantasyDefenseSeasonStats($request);

    if ($response->fantasyDefenseSeasons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fantasyDefenseSeasonStatsByTeam

Fantasy Defense Season Stats by Team

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FantasyDefenseSeasonStatsByTeamRequest;
use \OpenAPI\OpenAPI\Models\Operations\FantasyDefenseSeasonStatsByTeamFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FantasyDefenseSeasonStatsByTeamRequest();
    $request->format = FantasyDefenseSeasonStatsByTeamFormatEnum::JSON;
    $request->season = 'quo';
    $request->team = 'odit';

    $response = $sdk->sdk->fantasyDefenseSeasonStatsByTeam($request);

    if ($response->fantasyDefenseSeason !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fantasyPlayerOwnershipPercentagesSeasonLong

Fantasy Player Ownership Percentages (Season-Long)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FantasyPlayerOwnershipPercentagesSeasonLongRequest;
use \OpenAPI\OpenAPI\Models\Operations\FantasyPlayerOwnershipPercentagesSeasonLongFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FantasyPlayerOwnershipPercentagesSeasonLongRequest();
    $request->format = FantasyPlayerOwnershipPercentagesSeasonLongFormatEnum::JSON;
    $request->season = 'at';
    $request->week = 'maiores';

    $response = $sdk->sdk->fantasyPlayerOwnershipPercentagesSeasonLong($request);

    if ($response->playerOwnerships !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fantasyPlayersWithAdp

This method returns a comprehensive list of draftable fantasy football players, including QB, RB, WR, TE, K and DEF.  Players are sorted by ADP (AverageDraftPosition).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FantasyPlayersWithAdpRequest;
use \OpenAPI\OpenAPI\Models\Operations\FantasyPlayersWithAdpFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FantasyPlayersWithAdpRequest();
    $request->format = FantasyPlayersWithAdpFormatEnum::XML;

    $response = $sdk->sdk->fantasyPlayersWithAdp($request);

    if ($response->fantasyPlayers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gameStatsBySeasonDeprecatedUseTeamGameStatsInstead

Game stats for a specified season.

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
    $request->season = 'quod';

    $response = $sdk->sdk->gameStatsBySeasonDeprecatedUseTeamGameStatsInstead($request);

    if ($response->games !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gameStatsByWeekDeprecatedUseTeamGameStatsInstead

Game stats for a specified season and week.

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
    $request->format = GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum::XML;
    $request->season = 'totam';
    $request->week = 'porro';

    $response = $sdk->sdk->gameStatsByWeekDeprecatedUseTeamGameStatsInstead($request);

    if ($response->games !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## idpFantasyPlayersWithAdp

This method returns the top 300+ IDP Fantasy Players for the current or upcoming season, ordered by AverageDraftPositionIDP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\IdpFantasyPlayersWithAdpRequest;
use \OpenAPI\OpenAPI\Models\Operations\IdpFantasyPlayersWithAdpFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdpFantasyPlayersWithAdpRequest();
    $request->format = IdpFantasyPlayersWithAdpFormatEnum::JSON;

    $response = $sdk->sdk->idpFantasyPlayersWithAdp($request);

    if ($response->fantasyPlayers !== null) {
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
    $request->format = InjuriesFormatEnum::XML;
    $request->season = 'nam';
    $request->week = 'officia';

    $response = $sdk->sdk->injuries($request);

    if ($response->injuries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## injuriesByTeam

Injuries by Team

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InjuriesByTeamRequest;
use \OpenAPI\OpenAPI\Models\Operations\InjuriesByTeamFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InjuriesByTeamRequest();
    $request->format = InjuriesByTeamFormatEnum::JSON;
    $request->season = 'fugit';
    $request->team = 'deleniti';
    $request->week = 'hic';

    $response = $sdk->sdk->injuriesByTeam($request);

    if ($response->injuries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## leagueLeadersBySeason

League Leaders by Season

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LeagueLeadersBySeasonRequest;
use \OpenAPI\OpenAPI\Models\Operations\LeagueLeadersBySeasonColumnEnum;
use \OpenAPI\OpenAPI\Models\Operations\LeagueLeadersBySeasonFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\LeagueLeadersBySeasonPositionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LeagueLeadersBySeasonRequest();
    $request->column = LeagueLeadersBySeasonColumnEnum::INTERCEPTIONS;
    $request->format = LeagueLeadersBySeasonFormatEnum::JSON;
    $request->position = LeagueLeadersBySeasonPositionEnum::OFFENSE;
    $request->season = 'commodi';

    $response = $sdk->sdk->leagueLeadersBySeason($request);

    if ($response->playerSeasons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## leagueLeadersByWeek

League Leaders by Week

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LeagueLeadersByWeekRequest;
use \OpenAPI\OpenAPI\Models\Operations\LeagueLeadersByWeekColumnEnum;
use \OpenAPI\OpenAPI\Models\Operations\LeagueLeadersByWeekFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\LeagueLeadersByWeekPositionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LeagueLeadersByWeekRequest();
    $request->column = LeagueLeadersByWeekColumnEnum::RECEPTIONS;
    $request->format = LeagueLeadersByWeekFormatEnum::XML;
    $request->position = LeagueLeadersByWeekPositionEnum::QB;
    $request->season = 'impedit';
    $request->week = 'cum';

    $response = $sdk->sdk->leagueLeadersByWeek($request);

    if ($response->playerGames !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## legacyBoxScore

Legacy Box Score

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LegacyBoxScoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\LegacyBoxScoreFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LegacyBoxScoreRequest();
    $request->format = LegacyBoxScoreFormatEnum::XML;
    $request->hometeam = 'ipsum';
    $request->season = 'excepturi';
    $request->week = 'aspernatur';

    $response = $sdk->sdk->legacyBoxScore($request);

    if ($response->boxScore !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## legacyBoxScores

This method returns all box scores for a given season and week.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LegacyBoxScoresRequest;
use \OpenAPI\OpenAPI\Models\Operations\LegacyBoxScoresFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LegacyBoxScoresRequest();
    $request->format = LegacyBoxScoresFormatEnum::XML;
    $request->season = 'ad';
    $request->week = 'natus';

    $response = $sdk->sdk->legacyBoxScores($request);

    if ($response->boxScores !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## legacyBoxScoresActive

This method returns box scores for all games that are either in-progress or have been updated within the last 30 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LegacyBoxScoresActiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\LegacyBoxScoresActiveFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LegacyBoxScoresActiveRequest();
    $request->format = LegacyBoxScoresActiveFormatEnum::XML;

    $response = $sdk->sdk->legacyBoxScoresActive($request);

    if ($response->boxScores !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## legacyBoxScoresDelta

This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LegacyBoxScoresDeltaRequest;
use \OpenAPI\OpenAPI\Models\Operations\LegacyBoxScoresDeltaFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LegacyBoxScoresDeltaRequest();
    $request->format = LegacyBoxScoresDeltaFormatEnum::JSON;
    $request->minutes = 'dolor';
    $request->season = 'natus';
    $request->week = 'laboriosam';

    $response = $sdk->sdk->legacyBoxScoresDelta($request);

    if ($response->boxScores !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## legacyBoxScoresDeltaCurrentWeek

Legacy Box Scores Delta (Current Week)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LegacyBoxScoresDeltaCurrentWeekRequest;
use \OpenAPI\OpenAPI\Models\Operations\LegacyBoxScoresDeltaCurrentWeekFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LegacyBoxScoresDeltaCurrentWeekRequest();
    $request->format = LegacyBoxScoresDeltaCurrentWeekFormatEnum::JSON;
    $request->minutes = 'saepe';

    $response = $sdk->sdk->legacyBoxScoresDeltaCurrentWeek($request);

    if ($response->boxScores !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## legacyBoxScoresFinal

Legacy Box Scores Final

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LegacyBoxScoresFinalRequest;
use \OpenAPI\OpenAPI\Models\Operations\LegacyBoxScoresFinalFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LegacyBoxScoresFinalRequest();
    $request->format = LegacyBoxScoresFinalFormatEnum::JSON;

    $response = $sdk->sdk->legacyBoxScoresFinal($request);

    if ($response->boxScores !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## legacyBoxScoresLive

Legacy Box Scores Live

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LegacyBoxScoresLiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\LegacyBoxScoresLiveFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LegacyBoxScoresLiveRequest();
    $request->format = LegacyBoxScoresLiveFormatEnum::XML;

    $response = $sdk->sdk->legacyBoxScoresLive($request);

    if ($response->boxScores !== null) {
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

$sdk = SDK::builder()
    ->build();

try {
    $request = new NewsRequest();
    $request->format = 'corporis';

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new NewsByDateRequest();
    $request->date = 'iste';
    $request->format = 'iure';

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new NewsByPlayerRequest();
    $request->format = 'saepe';
    $request->playerid = 'quidem';

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new NewsByTeamRequest();
    $request->format = 'architecto';
    $request->team = 'ipsa';

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
    $request->format = PlayerDetailsByAvailableFormatEnum::JSON;

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
    $request->format = PlayerDetailsByFreeAgentsFormatEnum::JSON;

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
    $request->format = PlayerDetailsByPlayerFormatEnum::JSON;
    $request->playerid = 'laborum';

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerDetailsByRookieDraftYearRequest();
    $request->format = 'dolores';
    $request->season = 'dolorem';

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
    $request->team = 'explicabo';

    $response = $sdk->sdk->playerDetailsByTeam($request);

    if ($response->playerDetails !== null) {
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
    $request->numberofgames = 'enim';
    $request->playerid = 'omnis';
    $request->season = 'nemo';

    $response = $sdk->sdk->playerGameLogsBySeason($request);

    if ($response->playerGames !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerGameRedZoneStats

Player Game Red Zone Stats

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerGameRedZoneStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerGameRedZoneStatsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerGameRedZoneStatsRequest();
    $request->format = PlayerGameRedZoneStatsFormatEnum::XML;
    $request->season = 'excepturi';
    $request->week = 'accusantium';

    $response = $sdk->sdk->playerGameRedZoneStats($request);

    if ($response->playerGameRedZones !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerGameRedZoneStatsInsideFive

Player Game Red Zone Stats Inside Five

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerGameRedZoneStatsInsideFiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerGameRedZoneStatsInsideFiveFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerGameRedZoneStatsInsideFiveRequest();
    $request->format = PlayerGameRedZoneStatsInsideFiveFormatEnum::XML;
    $request->season = 'culpa';
    $request->week = 'doloribus';

    $response = $sdk->sdk->playerGameRedZoneStatsInsideFive($request);

    if ($response->playerGameRedZones !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerGameRedZoneStatsInsideTen

Player Game Red Zone Stats Inside Ten

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerGameRedZoneStatsInsideTenRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerGameRedZoneStatsInsideTenFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerGameRedZoneStatsInsideTenRequest();
    $request->format = PlayerGameRedZoneStatsInsideTenFormatEnum::JSON;
    $request->season = 'architecto';
    $request->week = 'mollitia';

    $response = $sdk->sdk->playerGameRedZoneStatsInsideTen($request);

    if ($response->playerGameRedZones !== null) {
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
    $request->format = PlayerGameStatsByPlayerFormatEnum::XML;
    $request->playerid = 'culpa';
    $request->season = 'consequuntur';
    $request->week = 'repellat';

    $response = $sdk->sdk->playerGameStatsByPlayer($request);

    if ($response->playerGame !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerGameStatsByTeam

Player Game Stats by Team

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerGameStatsByTeamRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerGameStatsByTeamFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerGameStatsByTeamRequest();
    $request->format = PlayerGameStatsByTeamFormatEnum::JSON;
    $request->season = 'occaecati';
    $request->team = 'numquam';
    $request->week = 'commodi';

    $response = $sdk->sdk->playerGameStatsByTeam($request);

    if ($response->playerGames !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerGameStatsByWeek

Player Game Stats by Week

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerGameStatsByWeekRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerGameStatsByWeekFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerGameStatsByWeekRequest();
    $request->format = PlayerGameStatsByWeekFormatEnum::XML;
    $request->season = 'molestiae';
    $request->week = 'velit';

    $response = $sdk->sdk->playerGameStatsByWeek($request);

    if ($response->playerGames !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerGameStatsByWeekDelta

Player Game Stats by Week Delta

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerGameStatsByWeekDeltaRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerGameStatsByWeekDeltaFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerGameStatsByWeekDeltaRequest();
    $request->format = PlayerGameStatsByWeekDeltaFormatEnum::JSON;
    $request->minutes = 'quia';
    $request->season = 'quis';
    $request->week = 'vitae';

    $response = $sdk->sdk->playerGameStatsByWeekDelta($request);

    if ($response->playerGames !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerGameStatsDelta

Player Game Stats Delta

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerGameStatsDeltaRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerGameStatsDeltaFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerGameStatsDeltaRequest();
    $request->format = PlayerGameStatsDeltaFormatEnum::JSON;
    $request->minutes = 'animi';

    $response = $sdk->sdk->playerGameStatsDelta($request);

    if ($response->playerGames !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerSeasonRedZoneStats

Player Season Red Zone Stats

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerSeasonRedZoneStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerSeasonRedZoneStatsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerSeasonRedZoneStatsRequest();
    $request->format = PlayerSeasonRedZoneStatsFormatEnum::XML;
    $request->season = 'odit';

    $response = $sdk->sdk->playerSeasonRedZoneStats($request);

    if ($response->playerSeasonRedZones !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerSeasonRedZoneStatsInsideFive

Player Season Red Zone Stats Inside Five

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerSeasonRedZoneStatsInsideFiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerSeasonRedZoneStatsInsideFiveFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerSeasonRedZoneStatsInsideFiveRequest();
    $request->format = PlayerSeasonRedZoneStatsInsideFiveFormatEnum::JSON;
    $request->season = 'sequi';

    $response = $sdk->sdk->playerSeasonRedZoneStatsInsideFive($request);

    if ($response->playerSeasonRedZones !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerSeasonRedZoneStatsInsideTen

Player Season Red Zone Stats Inside Ten

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerSeasonRedZoneStatsInsideTenRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerSeasonRedZoneStatsInsideTenFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerSeasonRedZoneStatsInsideTenRequest();
    $request->format = PlayerSeasonRedZoneStatsInsideTenFormatEnum::JSON;
    $request->season = 'ipsam';

    $response = $sdk->sdk->playerSeasonRedZoneStatsInsideTen($request);

    if ($response->playerSeasonRedZones !== null) {
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
    $request->season = 'possimus';

    $response = $sdk->sdk->playerSeasonStats($request);

    if ($response->playerSeasons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerSeasonStatsByPlayer

Player Season Stats by Player

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
    $request->playerid = 'quasi';
    $request->season = 'error';

    $response = $sdk->sdk->playerSeasonStatsByPlayer($request);

    if ($response->playerSeasons !== null) {
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
    $request->season = 'laborum';
    $request->team = 'quasi';

    $response = $sdk->sdk->playerSeasonStatsByTeam($request);

    if ($response->playerSeasons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerSeasonThirdDownStats

Player Season Third Down Stats

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerSeasonThirdDownStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlayerSeasonThirdDownStatsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerSeasonThirdDownStatsRequest();
    $request->format = PlayerSeasonThirdDownStatsFormatEnum::JSON;
    $request->season = 'voluptatibus';

    $response = $sdk->sdk->playerSeasonThirdDownStats($request);

    if ($response->playerSeasonThirdDowns !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## proBowlers

Pro Bowlers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProBowlersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProBowlersFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProBowlersRequest();
    $request->format = ProBowlersFormatEnum::JSON;
    $request->season = 'nihil';

    $response = $sdk->sdk->proBowlers($request);

    if ($response->playerInfos !== null) {
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

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScheduleRequest();
    $request->format = 'praesentium';
    $request->season = 'voluptatibus';

    $response = $sdk->sdk->schedule($request);

    if ($response->schedules !== null) {
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

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScoresByDateRequest();
    $request->date = 'ipsa';
    $request->format = 'omnis';

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScoresBySeasonRequest();
    $request->format = 'voluptate';
    $request->season = 'cum';

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScoresByWeekRequest();
    $request->format = 'perferendis';
    $request->season = 'doloremque';
    $request->week = 'reprehenderit';

    $response = $sdk->sdk->scoresByWeek($request);

    if ($response->scores !== null) {
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
    $request->format = ScoresByWeekSimulationFormatEnum::XML;
    $request->numberofplays = 'maiores';

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new SeasonCurrentRequest();
    $request->format = 'dicta';

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new SeasonLastCompletedRequest();
    $request->format = 'corporis';

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new SeasonUpcomingRequest();
    $request->format = 'dolore';

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new StadiumsRequest();
    $request->format = 'iusto';

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new StandingsRequest();
    $request->format = 'dicta';
    $request->season = 'harum';

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
    $request->numberofgames = 'accusamus';
    $request->season = 'commodi';
    $request->teamid = 'repudiandae';

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
    $request->format = TeamGameStatsFormatEnum::XML;
    $request->season = 'ipsum';
    $request->week = 'quidem';

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
    $request->format = TeamSeasonStatsFormatEnum::JSON;
    $request->season = 'excepturi';

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsActiveRequest();
    $request->format = 'pariatur';

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsAllRequest();
    $request->format = 'modi';

    $response = $sdk->sdk->teamsAll($request);

    if ($response->teams !== null) {
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

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsBySeasonRequest();
    $request->format = 'praesentium';
    $request->season = 'rem';

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new TimeframesRequest();
    $request->format = 'voluptates';
    $request->type = 'quasi';

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new WeekCurrentRequest();
    $request->format = 'repudiandae';

    $response = $sdk->sdk->weekCurrent($request);

    if ($response->weekCurrent200ApplicationJSONInteger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## weekLastCompleted

Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WeekLastCompletedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WeekLastCompletedRequest();
    $request->format = 'sint';

    $response = $sdk->sdk->weekLastCompleted($request);

    if ($response->weekLastCompleted200ApplicationJSONInteger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## weekUpcoming

Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WeekUpcomingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WeekUpcomingRequest();
    $request->format = 'veritatis';

    $response = $sdk->sdk->weekUpcoming($request);

    if ($response->weekUpcoming200ApplicationJSONInteger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
