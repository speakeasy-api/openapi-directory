# team

## Overview

Calls that return team or team-specific information.

### Available Operations

* [getDistrictRankings](#getdistrictrankings) - Gets a list of team district rankings for the given district.
* [getDistrictTeams](#getdistrictteams) - Gets a list of `Team` objects that competed in events in the given district.
* [getDistrictTeamsKeys](#getdistrictteamskeys) - Gets a list of `Team` objects that competed in events in the given district.
* [getDistrictTeamsSimple](#getdistrictteamssimple) - Gets a short-form list of `Team` objects that competed in events in the given district.
* [getEventTeams](#geteventteams) - Gets a list of `Team` objects that competed in the given event.
* [getEventTeamsKeys](#geteventteamskeys) - Gets a list of `Team` keys that competed in the given event.
* [getEventTeamsSimple](#geteventteamssimple) - Gets a short-form list of `Team` objects that competed in the given event.
* [getEventTeamsStatuses](#geteventteamsstatuses) - Gets a key-value list of the event statuses for teams competing at the given event.
* [getTeam](#getteam) - Gets a `Team` object for the team referenced by the given key.
* [getTeamAwards](#getteamawards) - Gets a list of awards the given team has won.
* [getTeamAwardsByYear](#getteamawardsbyyear) - Gets a list of awards the given team has won in a given year.
* [getTeamDistricts](#getteamdistricts) - Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.
* [getTeamEventAwards](#getteameventawards) - Gets a list of awards the given team won at the given event.
* [getTeamEventMatches](#getteameventmatches) - Gets a list of matches for the given team and event.
* [getTeamEventMatchesKeys](#getteameventmatcheskeys) - Gets a list of match keys for matches for the given team and event.
* [getTeamEventMatchesSimple](#getteameventmatchessimple) - Gets a short-form list of matches for the given team and event.
* [getTeamEventStatus](#getteameventstatus) - Gets the competition rank and status of the team at the given event.
* [getTeamEvents](#getteamevents) - Gets a list of all events this team has competed at.
* [getTeamEventsByYear](#getteameventsbyyear) - Gets a list of events this team has competed at in the given year.
* [getTeamEventsByYearKeys](#getteameventsbyyearkeys) - Gets a list of the event keys for events this team has competed at in the given year.
* [getTeamEventsByYearSimple](#getteameventsbyyearsimple) - Gets a short-form list of events this team has competed at in the given year.
* [getTeamEventsKeys](#getteameventskeys) - Gets a list of the event keys for all events this team has competed at.
* [getTeamEventsSimple](#getteameventssimple) - Gets a short-form list of all events this team has competed at.
* [getTeamEventsStatusesByYear](#getteameventsstatusesbyyear) - Gets a key-value list of the event statuses for events this team has competed at in the given year.
* [getTeamMatchesByYear](#getteammatchesbyyear) - Gets a list of matches for the given team and year.
* [getTeamMatchesByYearKeys](#getteammatchesbyyearkeys) - Gets a list of match keys for matches for the given team and year.
* [getTeamMatchesByYearSimple](#getteammatchesbyyearsimple) - Gets a short-form list of matches for the given team and year.
* [getTeamMediaByTag](#getteammediabytag) - Gets a list of Media (videos / pictures) for the given team and tag.
* [getTeamMediaByTagYear](#getteammediabytagyear) - Gets a list of Media (videos / pictures) for the given team, tag and year.
* [getTeamMediaByYear](#getteammediabyyear) - Gets a list of Media (videos / pictures) for the given team and year.
* [getTeamRobots](#getteamrobots) - Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.
* [getTeamSimple](#getteamsimple) - Gets a `Team_Simple` object for the team referenced by the given key.
* [getTeamSocialMedia](#getteamsocialmedia) - Gets a list of Media (social media) for the given team.
* [getTeamYearsParticipated](#getteamyearsparticipated) - Gets a list of years in which the team participated in at least one competition.
* [getTeams](#getteams) - Gets a list of `Team` objects, paginated in groups of 500.
* [getTeamsByYear](#getteamsbyyear) - Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
* [getTeamsByYearKeys](#getteamsbyyearkeys) - Gets a list Team Keys that competed in the given year, paginated in groups of 500.
* [getTeamsByYearSimple](#getteamsbyyearsimple) - Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
* [getTeamsKeys](#getteamskeys) - Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
* [getTeamsSimple](#getteamssimple) - Gets a list of short form `Team_Simple` objects, paginated in groups of 500.

## getDistrictRankings

Gets a list of team district rankings for the given district.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictRankingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictRankingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistrictRankingsRequest();
    $request->ifNoneMatch = 'consequatur';
    $request->districtKey = 'est';

    $requestSecurity = new GetDistrictRankingsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getDistrictRankings($request, $requestSecurity);

    if ($response->districtRankings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistrictTeams

Gets a list of `Team` objects that competed in events in the given district.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictTeamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictTeamsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistrictTeamsRequest();
    $request->ifNoneMatch = 'quibusdam';
    $request->districtKey = 'explicabo';

    $requestSecurity = new GetDistrictTeamsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getDistrictTeams($request, $requestSecurity);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistrictTeamsKeys

Gets a list of `Team` objects that competed in events in the given district.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictTeamsKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictTeamsKeysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistrictTeamsKeysRequest();
    $request->ifNoneMatch = 'deserunt';
    $request->districtKey = 'distinctio';

    $requestSecurity = new GetDistrictTeamsKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getDistrictTeamsKeys($request, $requestSecurity);

    if ($response->getDistrictTeamsKeys200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistrictTeamsSimple

Gets a short-form list of `Team` objects that competed in events in the given district.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictTeamsSimpleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictTeamsSimpleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistrictTeamsSimpleRequest();
    $request->ifNoneMatch = 'quibusdam';
    $request->districtKey = 'labore';

    $requestSecurity = new GetDistrictTeamsSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getDistrictTeamsSimple($request, $requestSecurity);

    if ($response->teamSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventTeams

Gets a list of `Team` objects that competed in the given event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventTeamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventTeamsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventTeamsRequest();
    $request->ifNoneMatch = 'modi';
    $request->eventKey = 'qui';

    $requestSecurity = new GetEventTeamsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getEventTeams($request, $requestSecurity);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventTeamsKeys

Gets a list of `Team` keys that competed in the given event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventTeamsKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventTeamsKeysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventTeamsKeysRequest();
    $request->ifNoneMatch = 'aliquid';
    $request->eventKey = 'cupiditate';

    $requestSecurity = new GetEventTeamsKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getEventTeamsKeys($request, $requestSecurity);

    if ($response->getEventTeamsKeys200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventTeamsSimple

Gets a short-form list of `Team` objects that competed in the given event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventTeamsSimpleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventTeamsSimpleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventTeamsSimpleRequest();
    $request->ifNoneMatch = 'quos';
    $request->eventKey = 'perferendis';

    $requestSecurity = new GetEventTeamsSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getEventTeamsSimple($request, $requestSecurity);

    if ($response->teamSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventTeamsStatuses

Gets a key-value list of the event statuses for teams competing at the given event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventTeamsStatusesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventTeamsStatusesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventTeamsStatusesRequest();
    $request->ifNoneMatch = 'magni';
    $request->eventKey = 'assumenda';

    $requestSecurity = new GetEventTeamsStatusesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getEventTeamsStatuses($request, $requestSecurity);

    if ($response->getEventTeamsStatuses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeam

Gets a `Team` object for the team referenced by the given key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamRequest();
    $request->ifNoneMatch = 'ipsam';
    $request->teamKey = 'alias';

    $requestSecurity = new GetTeamSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeam($request, $requestSecurity);

    if ($response->team !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamAwards

Gets a list of awards the given team has won.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamAwardsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamAwardsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamAwardsRequest();
    $request->ifNoneMatch = 'fugit';
    $request->teamKey = 'dolorum';

    $requestSecurity = new GetTeamAwardsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamAwards($request, $requestSecurity);

    if ($response->awards !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamAwardsByYear

Gets a list of awards the given team has won in a given year.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamAwardsByYearRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamAwardsByYearSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamAwardsByYearRequest();
    $request->ifNoneMatch = 'excepturi';
    $request->teamKey = 'tempora';
    $request->year = 703737;

    $requestSecurity = new GetTeamAwardsByYearSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamAwardsByYear($request, $requestSecurity);

    if ($response->awards !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamDistricts

Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamDistrictsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamDistrictsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamDistrictsRequest();
    $request->ifNoneMatch = 'tempore';
    $request->teamKey = 'labore';

    $requestSecurity = new GetTeamDistrictsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamDistricts($request, $requestSecurity);

    if ($response->districtLists !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamEventAwards

Gets a list of awards the given team won at the given event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventAwardsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventAwardsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamEventAwardsRequest();
    $request->ifNoneMatch = 'delectus';
    $request->eventKey = 'eum';
    $request->teamKey = 'non';

    $requestSecurity = new GetTeamEventAwardsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamEventAwards($request, $requestSecurity);

    if ($response->awards !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamEventMatches

Gets a list of matches for the given team and event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventMatchesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventMatchesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamEventMatchesRequest();
    $request->ifNoneMatch = 'eligendi';
    $request->eventKey = 'sint';
    $request->teamKey = 'aliquid';

    $requestSecurity = new GetTeamEventMatchesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamEventMatches($request, $requestSecurity);

    if ($response->matches !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamEventMatchesKeys

Gets a list of match keys for matches for the given team and event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventMatchesKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventMatchesKeysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamEventMatchesKeysRequest();
    $request->ifNoneMatch = 'provident';
    $request->eventKey = 'necessitatibus';
    $request->teamKey = 'sint';

    $requestSecurity = new GetTeamEventMatchesKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamEventMatchesKeys($request, $requestSecurity);

    if ($response->getTeamEventMatchesKeys200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamEventMatchesSimple

Gets a short-form list of matches for the given team and event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventMatchesSimpleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventMatchesSimpleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamEventMatchesSimpleRequest();
    $request->ifNoneMatch = 'officia';
    $request->eventKey = 'dolor';
    $request->teamKey = 'debitis';

    $requestSecurity = new GetTeamEventMatchesSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamEventMatchesSimple($request, $requestSecurity);

    if ($response->matches !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamEventStatus

Gets the competition rank and status of the team at the given event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamEventStatusRequest();
    $request->ifNoneMatch = 'a';
    $request->eventKey = 'dolorum';
    $request->teamKey = 'in';

    $requestSecurity = new GetTeamEventStatusSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamEventStatus($request, $requestSecurity);

    if ($response->teamEventStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamEvents

Gets a list of all events this team has competed at.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamEventsRequest();
    $request->ifNoneMatch = 'in';
    $request->teamKey = 'illum';

    $requestSecurity = new GetTeamEventsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamEvents($request, $requestSecurity);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamEventsByYear

Gets a list of events this team has competed at in the given year.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventsByYearRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventsByYearSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamEventsByYearRequest();
    $request->ifNoneMatch = 'maiores';
    $request->teamKey = 'rerum';
    $request->year = 116202;

    $requestSecurity = new GetTeamEventsByYearSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamEventsByYear($request, $requestSecurity);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamEventsByYearKeys

Gets a list of the event keys for events this team has competed at in the given year.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventsByYearKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventsByYearKeysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamEventsByYearKeysRequest();
    $request->ifNoneMatch = 'magnam';
    $request->teamKey = 'cumque';
    $request->year = 813798;

    $requestSecurity = new GetTeamEventsByYearKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamEventsByYearKeys($request, $requestSecurity);

    if ($response->getTeamEventsByYearKeys200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamEventsByYearSimple

Gets a short-form list of events this team has competed at in the given year.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventsByYearSimpleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventsByYearSimpleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamEventsByYearSimpleRequest();
    $request->ifNoneMatch = 'ea';
    $request->teamKey = 'aliquid';
    $request->year = 675439;

    $requestSecurity = new GetTeamEventsByYearSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamEventsByYearSimple($request, $requestSecurity);

    if ($response->eventSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamEventsKeys

Gets a list of the event keys for all events this team has competed at.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventsKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventsKeysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamEventsKeysRequest();
    $request->ifNoneMatch = 'accusamus';
    $request->teamKey = 'non';

    $requestSecurity = new GetTeamEventsKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamEventsKeys($request, $requestSecurity);

    if ($response->getTeamEventsKeys200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamEventsSimple

Gets a short-form list of all events this team has competed at.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventsSimpleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventsSimpleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamEventsSimpleRequest();
    $request->ifNoneMatch = 'occaecati';
    $request->teamKey = 'enim';

    $requestSecurity = new GetTeamEventsSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamEventsSimple($request, $requestSecurity);

    if ($response->eventSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamEventsStatusesByYear

Gets a key-value list of the event statuses for events this team has competed at in the given year.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventsStatusesByYearRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamEventsStatusesByYearSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamEventsStatusesByYearRequest();
    $request->ifNoneMatch = 'accusamus';
    $request->teamKey = 'delectus';
    $request->year = 692532;

    $requestSecurity = new GetTeamEventsStatusesByYearSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamEventsStatusesByYear($request, $requestSecurity);

    if ($response->getTeamEventsStatusesByYear200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamMatchesByYear

Gets a list of matches for the given team and year.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMatchesByYearRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMatchesByYearSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamMatchesByYearRequest();
    $request->ifNoneMatch = 'provident';
    $request->teamKey = 'nam';
    $request->year = 659669;

    $requestSecurity = new GetTeamMatchesByYearSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamMatchesByYear($request, $requestSecurity);

    if ($response->matches !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamMatchesByYearKeys

Gets a list of match keys for matches for the given team and year.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMatchesByYearKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMatchesByYearKeysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamMatchesByYearKeysRequest();
    $request->ifNoneMatch = 'blanditiis';
    $request->teamKey = 'deleniti';
    $request->year = 956084;

    $requestSecurity = new GetTeamMatchesByYearKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamMatchesByYearKeys($request, $requestSecurity);

    if ($response->getTeamMatchesByYearKeys200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamMatchesByYearSimple

Gets a short-form list of matches for the given team and year.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMatchesByYearSimpleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMatchesByYearSimpleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamMatchesByYearSimpleRequest();
    $request->ifNoneMatch = 'amet';
    $request->teamKey = 'deserunt';
    $request->year = 394869;

    $requestSecurity = new GetTeamMatchesByYearSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamMatchesByYearSimple($request, $requestSecurity);

    if ($response->matchSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamMediaByTag

Gets a list of Media (videos / pictures) for the given team and tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMediaByTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMediaByTagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamMediaByTagRequest();
    $request->ifNoneMatch = 'vel';
    $request->mediaTag = 'natus';
    $request->teamKey = 'omnis';

    $requestSecurity = new GetTeamMediaByTagSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamMediaByTag($request, $requestSecurity);

    if ($response->media !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamMediaByTagYear

Gets a list of Media (videos / pictures) for the given team, tag and year.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMediaByTagYearRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMediaByTagYearSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamMediaByTagYearRequest();
    $request->ifNoneMatch = 'molestiae';
    $request->mediaTag = 'perferendis';
    $request->teamKey = 'nihil';
    $request->year = 301575;

    $requestSecurity = new GetTeamMediaByTagYearSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamMediaByTagYear($request, $requestSecurity);

    if ($response->media !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamMediaByYear

Gets a list of Media (videos / pictures) for the given team and year.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMediaByYearRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMediaByYearSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamMediaByYearRequest();
    $request->ifNoneMatch = 'distinctio';
    $request->teamKey = 'id';
    $request->year = 287991;

    $requestSecurity = new GetTeamMediaByYearSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamMediaByYear($request, $requestSecurity);

    if ($response->media !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamRobots

Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamRobotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamRobotsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamRobotsRequest();
    $request->ifNoneMatch = 'labore';
    $request->teamKey = 'suscipit';

    $requestSecurity = new GetTeamRobotsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamRobots($request, $requestSecurity);

    if ($response->teamRobots !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamSimple

Gets a `Team_Simple` object for the team referenced by the given key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamSimpleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamSimpleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamSimpleRequest();
    $request->ifNoneMatch = 'natus';
    $request->teamKey = 'nobis';

    $requestSecurity = new GetTeamSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamSimple($request, $requestSecurity);

    if ($response->teamSimple !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamSocialMedia

Gets a list of Media (social media) for the given team.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamSocialMediaRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamSocialMediaSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamSocialMediaRequest();
    $request->ifNoneMatch = 'eum';
    $request->teamKey = 'vero';

    $requestSecurity = new GetTeamSocialMediaSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamSocialMedia($request, $requestSecurity);

    if ($response->media !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamYearsParticipated

Gets a list of years in which the team participated in at least one competition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamYearsParticipatedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamYearsParticipatedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamYearsParticipatedRequest();
    $request->ifNoneMatch = 'aspernatur';
    $request->teamKey = 'architecto';

    $requestSecurity = new GetTeamYearsParticipatedSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamYearsParticipated($request, $requestSecurity);

    if ($response->getTeamYearsParticipated200ApplicationJSONIntegers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeams

Gets a list of `Team` objects, paginated in groups of 500.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamsRequest();
    $request->ifNoneMatch = 'magnam';
    $request->pageNum = 92373;

    $requestSecurity = new GetTeamsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeams($request, $requestSecurity);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamsByYear

Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamsByYearRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamsByYearSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamsByYearRequest();
    $request->ifNoneMatch = 'excepturi';
    $request->pageNum = 354047;
    $request->year = 590873;

    $requestSecurity = new GetTeamsByYearSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamsByYear($request, $requestSecurity);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamsByYearKeys

Gets a list Team Keys that competed in the given year, paginated in groups of 500.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamsByYearKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamsByYearKeysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamsByYearKeysRequest();
    $request->ifNoneMatch = 'quos';
    $request->pageNum = 574325;
    $request->year = 33625;

    $requestSecurity = new GetTeamsByYearKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamsByYearKeys($request, $requestSecurity);

    if ($response->getTeamsByYearKeys200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamsByYearSimple

Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamsByYearSimpleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamsByYearSimpleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamsByYearSimpleRequest();
    $request->ifNoneMatch = 'mollitia';
    $request->pageNum = 968962;
    $request->year = 652103;

    $requestSecurity = new GetTeamsByYearSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamsByYearSimple($request, $requestSecurity);

    if ($response->teamSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamsKeys

Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamsKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamsKeysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamsKeysRequest();
    $request->ifNoneMatch = 'ad';
    $request->pageNum = 431418;

    $requestSecurity = new GetTeamsKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamsKeys($request, $requestSecurity);

    if ($response->getTeamsKeys200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamsSimple

Gets a list of short form `Team_Simple` objects, paginated in groups of 500.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamsSimpleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamsSimpleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamsSimpleRequest();
    $request->ifNoneMatch = 'dolor';
    $request->pageNum = 896547;

    $requestSecurity = new GetTeamsSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->team->getTeamsSimple($request, $requestSecurity);

    if ($response->teamSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
