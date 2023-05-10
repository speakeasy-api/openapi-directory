# SDK

## Overview

CS:GO v3 Scores

### Available Operations

* [areasCountries](#areascountries) - Areas (Countries)
* [competitionFixturesLeagueDetails](#competitionfixturesleaguedetails) - Competition Fixtures (League Details)
* [competitionsLeagues](#competitionsleagues) - Competitions (Leagues)
* [gamesByDate](#gamesbydate) - Games by Date
* [membershipsActive](#membershipsactive) - Memberships (Active)
* [membershipsByTeamActive](#membershipsbyteamactive) - Memberships by Team (Active)
* [membershipsByTeamHistorical](#membershipsbyteamhistorical) - Memberships by Team (Historical)
* [membershipsHistorical](#membershipshistorical) - Memberships (Historical)
* [player](#player) - Player
* [players](#players) - Players
* [playersByTeam](#playersbyteam) - Players by Team
* [schedule](#schedule) - Schedule
* [seasonTeams](#seasonteams) - Season Teams
* [standings](#standings) - Standings
* [teams](#teams) - Teams
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
    $request->competitionid = 'distinctio';
    $request->format = CompetitionFixturesLeagueDetailsFormatEnum::JSON;

    $response = $sdk->sdk->competitionFixturesLeagueDetails($request);

    if ($response->competitionDetail !== null) {
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
    $request->date = 'nulla';
    $request->format = GamesByDateFormatEnum::JSON;

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
    $request->teamid = 'error';

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
    $request->teamid = 'suscipit';

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
    $request->teamid = 'tempora';

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
    $request->format = ScheduleFormatEnum::XML;
    $request->roundid = 'molestiae';

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
    $request->seasonid = 'placeat';

    $response = $sdk->sdk->seasonTeams($request);

    if ($response->seasonTeams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## standings

Schedule

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
    $request->format = StandingsFormatEnum::JSON;
    $request->roundid = 'iusto';

    $response = $sdk->sdk->standings($request);

    if ($response->standings !== null) {
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
