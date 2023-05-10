# SDK

### Available Operations

* [areasCountries](#areascountries) - Areas (Countries)
* [boxScore](#boxscore) - Box Score
* [boxScoresByDate](#boxscoresbydate) - Box Scores by Date
* [boxScoresByDateByCompetition](#boxscoresbydatebycompetition) - Box Scores by Date by Competition
* [boxScoresByDateDelta](#boxscoresbydatedelta) - Box Scores by Date Delta
* [boxScoresDeltaByDateByCompetition](#boxscoresdeltabydatebycompetition) - Box Scores Delta by Date by Competition
* [competitionFixturesLeagueDetails](#competitionfixturesleaguedetails) - Competition Fixtures (League Details)
* [competitionHierarchyLeagueHierarchy](#competitionhierarchyleaguehierarchy) - Competition Hierarchy (League Hierarchy)
* [competitionsLeagues](#competitionsleagues) - Competitions (Leagues)
* [dfsSlatesByDate](#dfsslatesbydate) - Dfs Slates By Date
* [gamesByDate](#gamesbydate) - Games by Date
* [membershipsActive](#membershipsactive) - Memberships (Active)
* [membershipsByCompetitionActive](#membershipsbycompetitionactive) - Memberships by Competition (Active)
* [membershipsByCompetitionHistorical](#membershipsbycompetitionhistorical) - Memberships by Competition (Historical)
* [membershipsByTeamActive](#membershipsbyteamactive) - Memberships by Team (Active)
* [membershipsByTeamHistorical](#membershipsbyteamhistorical) - Memberships by Team (Historical)
* [membershipsHistorical](#membershipshistorical) - Memberships (Historical)
* [membershipsRecentlyChanged](#membershipsrecentlychanged) - Memberships (Recently Changed)
* [player](#player) - Player
* [playerGameStatsByDate](#playergamestatsbydate) - Player Game Stats by Date
* [playerGameStatsByPlayer](#playergamestatsbyplayer) - Player Game Stats by Player
* [playerSeasonStats](#playerseasonstats) - Player Season Stats
* [playerSeasonStatsByPlayer](#playerseasonstatsbyplayer) - Player Season Stats by Player
* [playerSeasonStatsByTeam](#playerseasonstatsbyteam) - Player Season Stats by Team
* [players](#players) - Players
* [playersByTeam](#playersbyteam) - Players by Team
* [schedule](#schedule) - Schedule
* [seasonTeams](#seasonteams) - Season Teams
* [standings](#standings) - Standings
* [teamGameStatsByDate](#teamgamestatsbydate) - Team Game Stats by Date
* [teamSeasonStats](#teamseasonstats) - Team Season Stats
* [teams](#teams) - Teams
* [upcomingDfsSlatesByCompetition](#upcomingdfsslatesbycompetition) - Upcoming Dfs Slates By Competition
* [upcomingScheduleByPlayer](#upcomingschedulebyplayer) - Upcoming Schedule By Player
* [venues](#venues) - Venues

## areasCountries

Areas (Countries)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AreasCountriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\AreasCountriesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AreasCountriesRequest();
    $request->format = AreasCountriesFormatEnum::JSON;

    $response = $sdk->sdk->areasCountries($request);

    if ($response->areas !== null) {
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

## boxScoresByDateByCompetition

Box Scores by Date by Competition

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BoxScoresByDateByCompetitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\BoxScoresByDateByCompetitionFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BoxScoresByDateByCompetitionRequest();
    $request->competition = 'corrupti';
    $request->date = 'illum';
    $request->format = BoxScoresByDateByCompetitionFormatEnum::XML;

    $response = $sdk->sdk->boxScoresByDateByCompetition($request);

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

## boxScoresDeltaByDateByCompetition

Box Scores Delta by Date by Competition

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BoxScoresDeltaByDateByCompetitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\BoxScoresDeltaByDateByCompetitionFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BoxScoresDeltaByDateByCompetitionRequest();
    $request->competition = 'iure';
    $request->date = 'magnam';
    $request->format = BoxScoresDeltaByDateByCompetitionFormatEnum::JSON;
    $request->minutes = 'ipsa';

    $response = $sdk->sdk->boxScoresDeltaByDateByCompetition($request);

    if ($response->boxScores !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## competitionFixturesLeagueDetails

Competition Fixtures (League Details)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompetitionFixturesLeagueDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompetitionFixturesLeagueDetailsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompetitionFixturesLeagueDetailsRequest();
    $request->competition = 'delectus';
    $request->format = CompetitionFixturesLeagueDetailsFormatEnum::XML;

    $response = $sdk->sdk->competitionFixturesLeagueDetails($request);

    if ($response->competitionDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## competitionHierarchyLeagueHierarchy

Competition Hierarchy (League Hierarchy)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompetitionHierarchyLeagueHierarchyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompetitionHierarchyLeagueHierarchyFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompetitionHierarchyLeagueHierarchyRequest();
    $request->format = CompetitionHierarchyLeagueHierarchyFormatEnum::XML;

    $response = $sdk->sdk->competitionHierarchyLeagueHierarchy($request);

    if ($response->areas !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## competitionsLeagues

Competitions (Leagues)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompetitionsLeaguesRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompetitionsLeaguesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompetitionsLeaguesRequest();
    $request->format = CompetitionsLeaguesFormatEnum::XML;

    $response = $sdk->sdk->competitionsLeagues($request);

    if ($response->competitions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->date = 'minus';
    $request->format = DfsSlatesByDateFormatEnum::XML;

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
    $request->date = 'voluptatum';
    $request->format = GamesByDateFormatEnum::XML;

    $response = $sdk->sdk->gamesByDate($request);

    if ($response->games !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## membershipsActive

Memberships (Active)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MembershipsActiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\MembershipsActiveFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MembershipsActiveRequest();
    $request->format = MembershipsActiveFormatEnum::JSON;

    $response = $sdk->sdk->membershipsActive($request);

    if ($response->memberships !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## membershipsByCompetitionActive

Memberships by Competition (Active)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MembershipsByCompetitionActiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\MembershipsByCompetitionActiveFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MembershipsByCompetitionActiveRequest();
    $request->competition = 'nisi';
    $request->format = MembershipsByCompetitionActiveFormatEnum::JSON;

    $response = $sdk->sdk->membershipsByCompetitionActive($request);

    if ($response->memberships !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## membershipsByCompetitionHistorical

Memberships by Competition (Historical)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MembershipsByCompetitionHistoricalRequest;
use \OpenAPI\OpenAPI\Models\Operations\MembershipsByCompetitionHistoricalFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MembershipsByCompetitionHistoricalRequest();
    $request->competition = 'temporibus';
    $request->format = MembershipsByCompetitionHistoricalFormatEnum::XML;

    $response = $sdk->sdk->membershipsByCompetitionHistorical($request);

    if ($response->memberships !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## membershipsByTeamActive

Memberships by Team (Active)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MembershipsByTeamActiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\MembershipsByTeamActiveFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MembershipsByTeamActiveRequest();
    $request->format = MembershipsByTeamActiveFormatEnum::XML;
    $request->teamid = 'veritatis';

    $response = $sdk->sdk->membershipsByTeamActive($request);

    if ($response->memberships !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## membershipsByTeamHistorical

Memberships by Team (Historical)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MembershipsByTeamHistoricalRequest;
use \OpenAPI\OpenAPI\Models\Operations\MembershipsByTeamHistoricalFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MembershipsByTeamHistoricalRequest();
    $request->format = MembershipsByTeamHistoricalFormatEnum::JSON;
    $request->teamid = 'perferendis';

    $response = $sdk->sdk->membershipsByTeamHistorical($request);

    if ($response->memberships !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## membershipsHistorical

Memberships (Historical)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MembershipsHistoricalRequest;
use \OpenAPI\OpenAPI\Models\Operations\MembershipsHistoricalFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MembershipsHistoricalRequest();
    $request->format = MembershipsHistoricalFormatEnum::XML;

    $response = $sdk->sdk->membershipsHistorical($request);

    if ($response->memberships !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## membershipsRecentlyChanged

Memberships (Recently Changed)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MembershipsRecentlyChangedRequest;
use \OpenAPI\OpenAPI\Models\Operations\MembershipsRecentlyChangedFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MembershipsRecentlyChangedRequest();
    $request->days = 'repellendus';
    $request->format = MembershipsRecentlyChangedFormatEnum::JSON;

    $response = $sdk->sdk->membershipsRecentlyChanged($request);

    if ($response->memberships !== null) {
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
    $request->format = PlayerFormatEnum::JSON;
    $request->playerid = 'odit';

    $response = $sdk->sdk->player($request);

    if ($response->player !== null) {
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
    $request->date = 'at';
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
    $request->date = 'maiores';
    $request->format = PlayerGameStatsByPlayerFormatEnum::XML;
    $request->playerid = 'quod';

    $response = $sdk->sdk->playerGameStatsByPlayer($request);

    if ($response->playerGames !== null) {
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
    $request->roundid = 'esse';

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
    $request->format = PlayerSeasonStatsByPlayerFormatEnum::JSON;
    $request->playerid = 'porro';
    $request->roundid = 'dolorum';

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
    $request->format = PlayerSeasonStatsByTeamFormatEnum::XML;
    $request->roundid = 'nam';
    $request->team = 'officia';

    $response = $sdk->sdk->playerSeasonStatsByTeam($request);

    if ($response->playerSeasons !== null) {
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

## playersByTeam

Players by Team

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
    $request->format = PlayersByTeamFormatEnum::XML;
    $request->teamid = 'deleniti';

    $response = $sdk->sdk->playersByTeam($request);

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
    $request->format = ScheduleFormatEnum::JSON;
    $request->roundid = 'optio';

    $response = $sdk->sdk->schedule($request);

    if ($response->games !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## seasonTeams

Season Teams

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SeasonTeamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SeasonTeamsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SeasonTeamsRequest();
    $request->format = SeasonTeamsFormatEnum::JSON;
    $request->seasonid = 'beatae';

    $response = $sdk->sdk->seasonTeams($request);

    if ($response->seasonTeams !== null) {
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
    $request->roundid = 'molestiae';

    $response = $sdk->sdk->standings($request);

    if ($response->standings !== null) {
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
    $request->date = 'modi';
    $request->format = TeamGameStatsByDateFormatEnum::XML;

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
    $request->roundid = 'cum';

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
    $request->competitionId = 'ipsum';
    $request->format = UpcomingDfsSlatesByCompetitionFormatEnum::XML;

    $response = $sdk->sdk->upcomingDfsSlatesByCompetition($request);

    if ($response->dfsSlates !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## upcomingScheduleByPlayer

Upcoming Schedule By Player

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpcomingScheduleByPlayerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpcomingScheduleByPlayerFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpcomingScheduleByPlayerRequest();
    $request->format = UpcomingScheduleByPlayerFormatEnum::XML;
    $request->playerid = 'perferendis';

    $response = $sdk->sdk->upcomingScheduleByPlayer($request);

    if ($response->games !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## venues

Venues

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\VenuesRequest;
use \OpenAPI\OpenAPI\Models\Operations\VenuesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VenuesRequest();
    $request->format = VenuesFormatEnum::XML;

    $response = $sdk->sdk->venues($request);

    if ($response->venues !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
