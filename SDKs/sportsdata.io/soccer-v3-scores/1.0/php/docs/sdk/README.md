# SDK

### Available Operations

* [areasCountries](#areascountries) - Areas (Countries)
* [canceledMemberships](#canceledmemberships) - Canceled Memberships
* [competitionFixturesLeagueDetails](#competitionfixturesleaguedetails) - Competition Fixtures (League Details)
* [competitionHierarchyLeagueHierarchy](#competitionhierarchyleaguehierarchy) - Competition Hierarchy (League Hierarchy)
* [competitionsLeagues](#competitionsleagues) - Competitions (Leagues)
* [gamesByDate](#gamesbydate) - Games by Date
* [membershipsActive](#membershipsactive) - Memberships (Active)
* [membershipsByCompetitionActive](#membershipsbycompetitionactive) - Memberships by Competition (Active)
* [membershipsByCompetitionHistorical](#membershipsbycompetitionhistorical) - Memberships by Competition (Historical)
* [membershipsByTeamActive](#membershipsbyteamactive) - Memberships by Team (Active)
* [membershipsByTeamHistorical](#membershipsbyteamhistorical) - Memberships by Team (Historical)
* [membershipsHistorical](#membershipshistorical) - Memberships (Historical)
* [membershipsRecentlyChanged](#membershipsrecentlychanged) - Memberships (Recently Changed)
* [player](#player) - Player
* [players](#players) - Players
* [playersByTeam](#playersbyteam) - Players by Team
* [schedule](#schedule) - Schedule
* [seasonTeams](#seasonteams) - Season Teams
* [standings](#standings) - Standings
* [teamGameStatsByDate](#teamgamestatsbydate) - Team Game Stats by Date
* [teamSeasonStats](#teamseasonstats) - Team Season Stats
* [teams](#teams) - Teams
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

## canceledMemberships

Canceled Memberships

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CanceledMembershipsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CanceledMembershipsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CanceledMembershipsRequest();
    $request->format = CanceledMembershipsFormatEnum::JSON;

    $response = $sdk->sdk->canceledMemberships($request);

    if ($response->canceledMembership !== null) {
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
    $request->competition = 'quibusdam';
    $request->format = CompetitionFixturesLeagueDetailsFormatEnum::JSON;

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
    $request->format = CompetitionHierarchyLeagueHierarchyFormatEnum::JSON;

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
    $request->format = CompetitionsLeaguesFormatEnum::JSON;

    $response = $sdk->sdk->competitionsLeagues($request);

    if ($response->competitions !== null) {
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
    $request->competition = 'deserunt';
    $request->format = MembershipsByCompetitionActiveFormatEnum::XML;

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
    $request->competition = 'iure';
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
    $request->format = MembershipsByTeamActiveFormatEnum::JSON;
    $request->teamid = 'ipsa';

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
    $request->teamid = 'tempora';

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
    $request->days = 'molestiae';
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
    $request->playerid = 'voluptatum';

    $response = $sdk->sdk->player($request);

    if ($response->player !== null) {
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
    $request->format = PlayersFormatEnum::XML;

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
    $request->format = PlayersByTeamFormatEnum::JSON;
    $request->teamid = 'nisi';

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
    $request->roundid = 'temporibus';

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
    $request->format = SeasonTeamsFormatEnum::XML;
    $request->seasonid = 'quis';

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
    $request->roundid = 'deserunt';

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
    $request->date = 'perferendis';
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
    $request->roundid = 'sapiente';

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
    $request->format = TeamsFormatEnum::JSON;

    $response = $sdk->sdk->teams($request);

    if ($response->teams !== null) {
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
    $request->playerid = 'at';

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
    $request->format = VenuesFormatEnum::JSON;

    $response = $sdk->sdk->venues($request);

    if ($response->venues !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
