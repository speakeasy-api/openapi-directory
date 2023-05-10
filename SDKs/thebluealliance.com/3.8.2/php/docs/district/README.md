# district

## Overview

Calls that return district, or district-related information.

### Available Operations

* [getDistrictEvents](#getdistrictevents) - Gets a list of events in the given district.
* [getDistrictEventsKeys](#getdistricteventskeys) - Gets a list of event keys for events in the given district.
* [getDistrictEventsSimple](#getdistricteventssimple) - Gets a short-form list of events in the given district.
* [getDistrictRankings](#getdistrictrankings) - Gets a list of team district rankings for the given district.
* [getDistrictTeams](#getdistrictteams) - Gets a list of `Team` objects that competed in events in the given district.
* [getDistrictTeamsKeys](#getdistrictteamskeys) - Gets a list of `Team` objects that competed in events in the given district.
* [getDistrictTeamsSimple](#getdistrictteamssimple) - Gets a short-form list of `Team` objects that competed in events in the given district.
* [getDistrictsByYear](#getdistrictsbyyear) - Gets a list of districts and their corresponding district key, for the given year.
* [getEventDistrictPoints](#geteventdistrictpoints) - Gets a list of team rankings for the Event.
* [getTeamDistricts](#getteamdistricts) - Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.

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
    $request->ifNoneMatch = 'distinctio';
    $request->districtKey = 'quibusdam';

    $requestSecurity = new GetDistrictEventsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->district->getDistrictEvents($request, $requestSecurity);

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
    $request->ifNoneMatch = 'unde';
    $request->districtKey = 'nulla';

    $requestSecurity = new GetDistrictEventsKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->district->getDistrictEventsKeys($request, $requestSecurity);

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
    $request->ifNoneMatch = 'corrupti';
    $request->districtKey = 'illum';

    $requestSecurity = new GetDistrictEventsSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->district->getDistrictEventsSimple($request, $requestSecurity);

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
    $request->ifNoneMatch = 'vel';
    $request->districtKey = 'error';

    $requestSecurity = new GetDistrictRankingsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->district->getDistrictRankings($request, $requestSecurity);

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
    $request->ifNoneMatch = 'deserunt';
    $request->districtKey = 'suscipit';

    $requestSecurity = new GetDistrictTeamsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->district->getDistrictTeams($request, $requestSecurity);

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
    $request->ifNoneMatch = 'iure';
    $request->districtKey = 'magnam';

    $requestSecurity = new GetDistrictTeamsKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->district->getDistrictTeamsKeys($request, $requestSecurity);

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
    $request->ifNoneMatch = 'debitis';
    $request->districtKey = 'ipsa';

    $requestSecurity = new GetDistrictTeamsSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->district->getDistrictTeamsSimple($request, $requestSecurity);

    if ($response->teamSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistrictsByYear

Gets a list of districts and their corresponding district key, for the given year.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictsByYearRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictsByYearSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistrictsByYearRequest();
    $request->ifNoneMatch = 'delectus';
    $request->year = 272656;

    $requestSecurity = new GetDistrictsByYearSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->district->getDistrictsByYear($request, $requestSecurity);

    if ($response->districtLists !== null) {
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
    $request->ifNoneMatch = 'suscipit';
    $request->eventKey = 'molestiae';

    $requestSecurity = new GetEventDistrictPointsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->district->getEventDistrictPoints($request, $requestSecurity);

    if ($response->eventDistrictPoints !== null) {
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
    $request->ifNoneMatch = 'minus';
    $request->teamKey = 'placeat';

    $requestSecurity = new GetTeamDistrictsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->district->getTeamDistricts($request, $requestSecurity);

    if ($response->districtLists !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
