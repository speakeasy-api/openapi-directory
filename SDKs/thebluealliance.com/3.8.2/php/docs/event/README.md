# event

## Overview

Calls that return event, or event-specific information.

### Available Operations

* [getDistrictEvents](#getdistrictevents) - Gets a list of events in the given district.
* [getDistrictEventsKeys](#getdistricteventskeys) - Gets a list of event keys for events in the given district.
* [getDistrictEventsSimple](#getdistricteventssimple) - Gets a short-form list of events in the given district.
* [getEvent](#getevent) - Gets an Event.
* [getEventAlliances](#geteventalliances) - Gets a list of Elimination Alliances for the given Event.
* [getEventAwards](#geteventawards) - Gets a list of awards from the given event.
* [getEventDistrictPoints](#geteventdistrictpoints) - Gets a list of team rankings for the Event.
* [getEventInsights](#geteventinsights) - Gets a set of Event-specific insights for the given Event.
* [getEventMatchTimeseries](#geteventmatchtimeseries) - Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* [getEventMatches](#geteventmatches) - Gets a list of matches for the given event.
* [getEventMatchesKeys](#geteventmatcheskeys) - Gets a list of match keys for the given event.
* [getEventMatchesSimple](#geteventmatchessimple) - Gets a short-form list of matches for the given event.
* [getEventOPRs](#geteventoprs) - Gets a set of Event OPRs (including OPR, DPR, and CCWM) for the given Event.
* [getEventPredictions](#geteventpredictions) - Gets information on TBA-generated predictions for the given Event. Contains year-specific information. *WARNING* This endpoint is currently under development and may change at any time.
* [getEventRankings](#geteventrankings) - Gets a list of team rankings for the Event.
* [getEventSimple](#geteventsimple) - Gets a short-form Event.
* [getEventTeams](#geteventteams) - Gets a list of `Team` objects that competed in the given event.
* [getEventTeamsKeys](#geteventteamskeys) - Gets a list of `Team` keys that competed in the given event.
* [getEventTeamsSimple](#geteventteamssimple) - Gets a short-form list of `Team` objects that competed in the given event.
* [getEventTeamsStatuses](#geteventteamsstatuses) - Gets a key-value list of the event statuses for teams competing at the given event.
* [getEventsByYear](#geteventsbyyear) - Gets a list of events in the given year.
* [getEventsByYearKeys](#geteventsbyyearkeys) - Gets a list of event keys in the given year.
* [getEventsByYearSimple](#geteventsbyyearsimple) - Gets a short-form list of events in the given year.
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
    $request->ifNoneMatch = 'voluptatum';
    $request->districtKey = 'iusto';

    $requestSecurity = new GetDistrictEventsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getDistrictEvents($request, $requestSecurity);

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
    $request->ifNoneMatch = 'excepturi';
    $request->districtKey = 'nisi';

    $requestSecurity = new GetDistrictEventsKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getDistrictEventsKeys($request, $requestSecurity);

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
    $request->ifNoneMatch = 'recusandae';
    $request->districtKey = 'temporibus';

    $requestSecurity = new GetDistrictEventsSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getDistrictEventsSimple($request, $requestSecurity);

    if ($response->eventSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEvent

Gets an Event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventRequest();
    $request->ifNoneMatch = 'ab';
    $request->eventKey = 'quis';

    $requestSecurity = new GetEventSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getEvent($request, $requestSecurity);

    if ($response->event !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventAlliances

Gets a list of Elimination Alliances for the given Event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventAlliancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventAlliancesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventAlliancesRequest();
    $request->ifNoneMatch = 'veritatis';
    $request->eventKey = 'deserunt';

    $requestSecurity = new GetEventAlliancesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getEventAlliances($request, $requestSecurity);

    if ($response->eliminationAlliances !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventAwards

Gets a list of awards from the given event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventAwardsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventAwardsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventAwardsRequest();
    $request->ifNoneMatch = 'perferendis';
    $request->eventKey = 'ipsam';

    $requestSecurity = new GetEventAwardsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getEventAwards($request, $requestSecurity);

    if ($response->awards !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventDistrictPoints

Gets a list of team rankings for the Event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventDistrictPointsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventDistrictPointsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventDistrictPointsRequest();
    $request->ifNoneMatch = 'repellendus';
    $request->eventKey = 'sapiente';

    $requestSecurity = new GetEventDistrictPointsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getEventDistrictPoints($request, $requestSecurity);

    if ($response->eventDistrictPoints !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventInsights

Gets a set of Event-specific insights for the given Event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventInsightsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventInsightsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventInsightsRequest();
    $request->ifNoneMatch = 'quo';
    $request->eventKey = 'odit';

    $requestSecurity = new GetEventInsightsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getEventInsights($request, $requestSecurity);

    if ($response->eventInsights !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventMatchTimeseries

Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventMatchTimeseriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventMatchTimeseriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventMatchTimeseriesRequest();
    $request->ifNoneMatch = 'at';
    $request->eventKey = 'at';

    $requestSecurity = new GetEventMatchTimeseriesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getEventMatchTimeseries($request, $requestSecurity);

    if ($response->getEventMatchTimeseries200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventMatches

Gets a list of matches for the given event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventMatchesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventMatchesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventMatchesRequest();
    $request->ifNoneMatch = 'maiores';
    $request->eventKey = 'molestiae';

    $requestSecurity = new GetEventMatchesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getEventMatches($request, $requestSecurity);

    if ($response->matches !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventMatchesKeys

Gets a list of match keys for the given event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventMatchesKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventMatchesKeysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventMatchesKeysRequest();
    $request->ifNoneMatch = 'quod';
    $request->eventKey = 'quod';

    $requestSecurity = new GetEventMatchesKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getEventMatchesKeys($request, $requestSecurity);

    if ($response->getEventMatchesKeys200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventMatchesSimple

Gets a short-form list of matches for the given event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventMatchesSimpleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventMatchesSimpleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventMatchesSimpleRequest();
    $request->ifNoneMatch = 'esse';
    $request->eventKey = 'totam';

    $requestSecurity = new GetEventMatchesSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getEventMatchesSimple($request, $requestSecurity);

    if ($response->matchSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventOPRs

Gets a set of Event OPRs (including OPR, DPR, and CCWM) for the given Event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventOPRsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventOPRsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventOPRsRequest();
    $request->ifNoneMatch = 'porro';
    $request->eventKey = 'dolorum';

    $requestSecurity = new GetEventOPRsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getEventOPRs($request, $requestSecurity);

    if ($response->eventOPRs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventPredictions

Gets information on TBA-generated predictions for the given Event. Contains year-specific information. *WARNING* This endpoint is currently under development and may change at any time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventPredictionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventPredictionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventPredictionsRequest();
    $request->ifNoneMatch = 'dicta';
    $request->eventKey = 'nam';

    $requestSecurity = new GetEventPredictionsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getEventPredictions($request, $requestSecurity);

    if ($response->eventPredictions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventRankings

Gets a list of team rankings for the Event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventRankingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventRankingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventRankingsRequest();
    $request->ifNoneMatch = 'officia';
    $request->eventKey = 'occaecati';

    $requestSecurity = new GetEventRankingsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getEventRankings($request, $requestSecurity);

    if ($response->eventRanking !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventSimple

Gets a short-form Event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventSimpleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventSimpleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventSimpleRequest();
    $request->ifNoneMatch = 'fugit';
    $request->eventKey = 'deleniti';

    $requestSecurity = new GetEventSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getEventSimple($request, $requestSecurity);

    if ($response->eventSimple !== null) {
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
    $request->ifNoneMatch = 'hic';
    $request->eventKey = 'optio';

    $requestSecurity = new GetEventTeamsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getEventTeams($request, $requestSecurity);

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
    $request->ifNoneMatch = 'totam';
    $request->eventKey = 'beatae';

    $requestSecurity = new GetEventTeamsKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getEventTeamsKeys($request, $requestSecurity);

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
    $request->ifNoneMatch = 'commodi';
    $request->eventKey = 'molestiae';

    $requestSecurity = new GetEventTeamsSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getEventTeamsSimple($request, $requestSecurity);

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
    $request->ifNoneMatch = 'modi';
    $request->eventKey = 'qui';

    $requestSecurity = new GetEventTeamsStatusesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getEventTeamsStatuses($request, $requestSecurity);

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
    $request->ifNoneMatch = 'impedit';
    $request->year = 736918;

    $requestSecurity = new GetEventsByYearSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getEventsByYear($request, $requestSecurity);

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
    $request->ifNoneMatch = 'esse';
    $request->year = 216550;

    $requestSecurity = new GetEventsByYearKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getEventsByYearKeys($request, $requestSecurity);

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
    $request->ifNoneMatch = 'excepturi';
    $request->year = 135218;

    $requestSecurity = new GetEventsByYearSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getEventsByYearSimple($request, $requestSecurity);

    if ($response->eventSimples !== null) {
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
    $request->ifNoneMatch = 'perferendis';
    $request->eventKey = 'ad';
    $request->teamKey = 'natus';

    $requestSecurity = new GetTeamEventAwardsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getTeamEventAwards($request, $requestSecurity);

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
    $request->ifNoneMatch = 'sed';
    $request->eventKey = 'iste';
    $request->teamKey = 'dolor';

    $requestSecurity = new GetTeamEventMatchesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getTeamEventMatches($request, $requestSecurity);

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
    $request->ifNoneMatch = 'natus';
    $request->eventKey = 'laboriosam';
    $request->teamKey = 'hic';

    $requestSecurity = new GetTeamEventMatchesKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getTeamEventMatchesKeys($request, $requestSecurity);

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
    $request->ifNoneMatch = 'saepe';
    $request->eventKey = 'fuga';
    $request->teamKey = 'in';

    $requestSecurity = new GetTeamEventMatchesSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getTeamEventMatchesSimple($request, $requestSecurity);

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
    $request->ifNoneMatch = 'corporis';
    $request->eventKey = 'iste';
    $request->teamKey = 'iure';

    $requestSecurity = new GetTeamEventStatusSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getTeamEventStatus($request, $requestSecurity);

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
    $request->ifNoneMatch = 'saepe';
    $request->teamKey = 'quidem';

    $requestSecurity = new GetTeamEventsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getTeamEvents($request, $requestSecurity);

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
    $request->ifNoneMatch = 'architecto';
    $request->teamKey = 'ipsa';
    $request->year = 969810;

    $requestSecurity = new GetTeamEventsByYearSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getTeamEventsByYear($request, $requestSecurity);

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
    $request->ifNoneMatch = 'est';
    $request->teamKey = 'mollitia';
    $request->year = 670638;

    $requestSecurity = new GetTeamEventsByYearKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getTeamEventsByYearKeys($request, $requestSecurity);

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
    $request->ifNoneMatch = 'dolores';
    $request->teamKey = 'dolorem';
    $request->year = 358152;

    $requestSecurity = new GetTeamEventsByYearSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getTeamEventsByYearSimple($request, $requestSecurity);

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
    $request->ifNoneMatch = 'explicabo';
    $request->teamKey = 'nobis';

    $requestSecurity = new GetTeamEventsKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getTeamEventsKeys($request, $requestSecurity);

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
    $request->ifNoneMatch = 'enim';
    $request->teamKey = 'omnis';

    $requestSecurity = new GetTeamEventsSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getTeamEventsSimple($request, $requestSecurity);

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
    $request->ifNoneMatch = 'nemo';
    $request->teamKey = 'minima';
    $request->year = 570197;

    $requestSecurity = new GetTeamEventsStatusesByYearSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->event->getTeamEventsStatusesByYear($request, $requestSecurity);

    if ($response->getTeamEventsStatusesByYear200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
