# list

## Overview

Calls that return a list of records.

### Available Operations

* [getDistrictEvents](#getdistrictevents) - Gets a list of events in the given district.
* [getDistrictEventsKeys](#getdistricteventskeys) - Gets a list of event keys for events in the given district.
* [getDistrictEventsSimple](#getdistricteventssimple) - Gets a short-form list of events in the given district.
* [getDistrictRankings](#getdistrictrankings) - Gets a list of team district rankings for the given district.
* [getDistrictTeams](#getdistrictteams) - Gets a list of `Team` objects that competed in events in the given district.
* [getDistrictTeamsKeys](#getdistrictteamskeys) - Gets a list of `Team` objects that competed in events in the given district.
* [getDistrictTeamsSimple](#getdistrictteamssimple) - Gets a short-form list of `Team` objects that competed in events in the given district.
* [getEventTeams](#geteventteams) - Gets a list of `Team` objects that competed in the given event.
* [getEventTeamsKeys](#geteventteamskeys) - Gets a list of `Team` keys that competed in the given event.
* [getEventTeamsSimple](#geteventteamssimple) - Gets a short-form list of `Team` objects that competed in the given event.
* [getEventTeamsStatuses](#geteventteamsstatuses) - Gets a key-value list of the event statuses for teams competing at the given event.
* [getEventsByYear](#geteventsbyyear) - Gets a list of events in the given year.
* [getEventsByYearKeys](#geteventsbyyearkeys) - Gets a list of event keys in the given year.
* [getEventsByYearSimple](#geteventsbyyearsimple) - Gets a short-form list of events in the given year.
* [getTeamEventsStatusesByYear](#getteameventsstatusesbyyear) - Gets a key-value list of the event statuses for events this team has competed at in the given year.
* [getTeams](#getteams) - Gets a list of `Team` objects, paginated in groups of 500.
* [getTeamsByYear](#getteamsbyyear) - Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
* [getTeamsByYearKeys](#getteamsbyyearkeys) - Gets a list Team Keys that competed in the given year, paginated in groups of 500.
* [getTeamsByYearSimple](#getteamsbyyearsimple) - Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
* [getTeamsKeys](#getteamskeys) - Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
* [getTeamsSimple](#getteamssimple) - Gets a list of short form `Team_Simple` objects, paginated in groups of 500.

## getDistrictEvents

Gets a list of events in the given district.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictEventsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistrictEventsRequest();
    $request->ifNoneMatch = 'accusantium';
    $request->districtKey = 'iure';

    $requestSecurity = new GetDistrictEventsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getDistrictEvents($request, $requestSecurity);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistrictEventsKeys

Gets a list of event keys for events in the given district.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictEventsKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictEventsKeysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistrictEventsKeysRequest();
    $request->ifNoneMatch = 'culpa';
    $request->districtKey = 'doloribus';

    $requestSecurity = new GetDistrictEventsKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getDistrictEventsKeys($request, $requestSecurity);

    if ($response->getDistrictEventsKeys200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistrictEventsSimple

Gets a short-form list of events in the given district.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictEventsSimpleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictEventsSimpleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistrictEventsSimpleRequest();
    $request->ifNoneMatch = 'sapiente';
    $request->districtKey = 'architecto';

    $requestSecurity = new GetDistrictEventsSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getDistrictEventsSimple($request, $requestSecurity);

    if ($response->eventSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->ifNoneMatch = 'mollitia';
    $request->districtKey = 'dolorem';

    $requestSecurity = new GetDistrictRankingsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getDistrictRankings($request, $requestSecurity);

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
    $request->ifNoneMatch = 'culpa';
    $request->districtKey = 'consequuntur';

    $requestSecurity = new GetDistrictTeamsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getDistrictTeams($request, $requestSecurity);

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
    $request->ifNoneMatch = 'repellat';
    $request->districtKey = 'mollitia';

    $requestSecurity = new GetDistrictTeamsKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getDistrictTeamsKeys($request, $requestSecurity);

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
    $request->ifNoneMatch = 'occaecati';
    $request->districtKey = 'numquam';

    $requestSecurity = new GetDistrictTeamsSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getDistrictTeamsSimple($request, $requestSecurity);

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
    $request->ifNoneMatch = 'commodi';
    $request->eventKey = 'quam';

    $requestSecurity = new GetEventTeamsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getEventTeams($request, $requestSecurity);

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
    $request->ifNoneMatch = 'molestiae';
    $request->eventKey = 'velit';

    $requestSecurity = new GetEventTeamsKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getEventTeamsKeys($request, $requestSecurity);

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
    $request->ifNoneMatch = 'error';
    $request->eventKey = 'quia';

    $requestSecurity = new GetEventTeamsSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getEventTeamsSimple($request, $requestSecurity);

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
    $request->ifNoneMatch = 'quis';
    $request->eventKey = 'vitae';

    $requestSecurity = new GetEventTeamsStatusesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getEventTeamsStatuses($request, $requestSecurity);

    if ($response->getEventTeamsStatuses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventsByYear

Gets a list of events in the given year.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsByYearRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsByYearSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsByYearRequest();
    $request->ifNoneMatch = 'laborum';
    $request->year = 656330;

    $requestSecurity = new GetEventsByYearSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getEventsByYear($request, $requestSecurity);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventsByYearKeys

Gets a list of event keys in the given year.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsByYearKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsByYearKeysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsByYearKeysRequest();
    $request->ifNoneMatch = 'enim';
    $request->year = 138183;

    $requestSecurity = new GetEventsByYearKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getEventsByYearKeys($request, $requestSecurity);

    if ($response->getEventsByYearKeys200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventsByYearSimple

Gets a short-form list of events in the given year.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsByYearSimpleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsByYearSimpleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsByYearSimpleRequest();
    $request->ifNoneMatch = 'quo';
    $request->year = 196582;

    $requestSecurity = new GetEventsByYearSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getEventsByYearSimple($request, $requestSecurity);

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
    $request->ifNoneMatch = 'tenetur';
    $request->teamKey = 'ipsam';
    $request->year = 662527;

    $requestSecurity = new GetTeamEventsStatusesByYearSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getTeamEventsStatusesByYear($request, $requestSecurity);

    if ($response->getTeamEventsStatusesByYear200ApplicationJSONObject !== null) {
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
    $request->ifNoneMatch = 'possimus';
    $request->pageNum = 13571;

    $requestSecurity = new GetTeamsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getTeams($request, $requestSecurity);

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
    $request->ifNoneMatch = 'quasi';
    $request->pageNum = 622846;
    $request->year = 837945;

    $requestSecurity = new GetTeamsByYearSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getTeamsByYear($request, $requestSecurity);

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
    $request->ifNoneMatch = 'laborum';
    $request->pageNum = 96098;
    $request->year = 971945;

    $requestSecurity = new GetTeamsByYearKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getTeamsByYearKeys($request, $requestSecurity);

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
    $request->ifNoneMatch = 'voluptatibus';
    $request->pageNum = 878194;
    $request->year = 468651;

    $requestSecurity = new GetTeamsByYearSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getTeamsByYearSimple($request, $requestSecurity);

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
    $request->ifNoneMatch = 'praesentium';
    $request->pageNum = 976762;

    $requestSecurity = new GetTeamsKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getTeamsKeys($request, $requestSecurity);

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
    $request->ifNoneMatch = 'ipsa';
    $request->pageNum = 604846;

    $requestSecurity = new GetTeamsSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->list->getTeamsSimple($request, $requestSecurity);

    if ($response->teamSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
