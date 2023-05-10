# match

## Overview

Calls that return match, or match-specific information.

### Available Operations

* [getEventMatchTimeseries](#geteventmatchtimeseries) - Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* [getEventMatches](#geteventmatches) - Gets a list of matches for the given event.
* [getEventMatchesKeys](#geteventmatcheskeys) - Gets a list of match keys for the given event.
* [getEventMatchesSimple](#geteventmatchessimple) - Gets a short-form list of matches for the given event.
* [getMatch](#getmatch) - Gets a `Match` object for the given match key.
* [getMatchSimple](#getmatchsimple) - Gets a short-form `Match` object for the given match key.
* [getMatchTimeseries](#getmatchtimeseries) - Gets an array of game-specific Match Timeseries objects for the given match key or an empty array if not available.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* [getMatchZebra](#getmatchzebra) - Gets Zebra MotionWorks data for a Match for the given match key.
* [getTeamEventMatches](#getteameventmatches) - Gets a list of matches for the given team and event.
* [getTeamEventMatchesKeys](#getteameventmatcheskeys) - Gets a list of match keys for matches for the given team and event.
* [getTeamEventMatchesSimple](#getteameventmatchessimple) - Gets a short-form list of matches for the given team and event.
* [getTeamMatchesByYear](#getteammatchesbyyear) - Gets a list of matches for the given team and year.
* [getTeamMatchesByYearKeys](#getteammatchesbyyearkeys) - Gets a list of match keys for matches for the given team and year.
* [getTeamMatchesByYearSimple](#getteammatchesbyyearsimple) - Gets a short-form list of matches for the given team and year.

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
    $request->ifNoneMatch = 'voluptate';
    $request->eventKey = 'cum';

    $requestSecurity = new GetEventMatchTimeseriesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->match->getEventMatchTimeseries($request, $requestSecurity);

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
    $request->ifNoneMatch = 'perferendis';
    $request->eventKey = 'doloremque';

    $requestSecurity = new GetEventMatchesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->match->getEventMatches($request, $requestSecurity);

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
    $request->ifNoneMatch = 'reprehenderit';
    $request->eventKey = 'ut';

    $requestSecurity = new GetEventMatchesKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->match->getEventMatchesKeys($request, $requestSecurity);

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
    $request->ifNoneMatch = 'maiores';
    $request->eventKey = 'dicta';

    $requestSecurity = new GetEventMatchesSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->match->getEventMatchesSimple($request, $requestSecurity);

    if ($response->matchSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMatch

Gets a `Match` object for the given match key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMatchRequest();
    $request->ifNoneMatch = 'corporis';
    $request->matchKey = 'dolore';

    $requestSecurity = new GetMatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->match->getMatch($request, $requestSecurity);

    if ($response->match !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMatchSimple

Gets a short-form `Match` object for the given match key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMatchSimpleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMatchSimpleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMatchSimpleRequest();
    $request->ifNoneMatch = 'iusto';
    $request->matchKey = 'dicta';

    $requestSecurity = new GetMatchSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->match->getMatchSimple($request, $requestSecurity);

    if ($response->matchSimple !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMatchTimeseries

Gets an array of game-specific Match Timeseries objects for the given match key or an empty array if not available.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMatchTimeseriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMatchTimeseriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMatchTimeseriesRequest();
    $request->ifNoneMatch = 'harum';
    $request->matchKey = 'enim';

    $requestSecurity = new GetMatchTimeseriesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->match->getMatchTimeseries($request, $requestSecurity);

    if ($response->getMatchTimeseries200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMatchZebra

Gets Zebra MotionWorks data for a Match for the given match key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMatchZebraRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMatchZebraSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMatchZebraRequest();
    $request->ifNoneMatch = 'accusamus';
    $request->matchKey = 'commodi';

    $requestSecurity = new GetMatchZebraSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->match->getMatchZebra($request, $requestSecurity);

    if ($response->zebra !== null) {
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
    $request->ifNoneMatch = 'repudiandae';
    $request->eventKey = 'quae';
    $request->teamKey = 'ipsum';

    $requestSecurity = new GetTeamEventMatchesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->match->getTeamEventMatches($request, $requestSecurity);

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
    $request->ifNoneMatch = 'quidem';
    $request->eventKey = 'molestias';
    $request->teamKey = 'excepturi';

    $requestSecurity = new GetTeamEventMatchesKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->match->getTeamEventMatchesKeys($request, $requestSecurity);

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
    $request->ifNoneMatch = 'pariatur';
    $request->eventKey = 'modi';
    $request->teamKey = 'praesentium';

    $requestSecurity = new GetTeamEventMatchesSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->match->getTeamEventMatchesSimple($request, $requestSecurity);

    if ($response->matches !== null) {
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
    $request->ifNoneMatch = 'rem';
    $request->teamKey = 'voluptates';
    $request->year = 93940;

    $requestSecurity = new GetTeamMatchesByYearSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->match->getTeamMatchesByYear($request, $requestSecurity);

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
    $request->ifNoneMatch = 'repudiandae';
    $request->teamKey = 'sint';
    $request->year = 83112;

    $requestSecurity = new GetTeamMatchesByYearKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->match->getTeamMatchesByYearKeys($request, $requestSecurity);

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
    $request->ifNoneMatch = 'itaque';
    $request->teamKey = 'incidunt';
    $request->year = 318569;

    $requestSecurity = new GetTeamMatchesByYearSimpleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->match->getTeamMatchesByYearSimple($request, $requestSecurity);

    if ($response->matchSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
