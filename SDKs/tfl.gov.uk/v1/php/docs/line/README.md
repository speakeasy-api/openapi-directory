# line

### Available Operations

* [lineArrivals](#linearrivals) - Get the list of arrival predictions for given line ids based at the given stop
* [lineDisruption](#linedisruption) - Get disruptions for the given line ids
* [lineDisruptionByMode](#linedisruptionbymode) - Get disruptions for all lines of the given modes.
* [lineGet](#lineget) - Gets lines that match the specified line ids.
* [lineGetByMode](#linegetbymode) - Gets lines that serve the given modes.
* [lineLineRoutesByIds](#linelineroutesbyids) - Get all valid routes for given line ids, including the name and id of the originating and terminating stops for each route.
* [lineMetaDisruptionCategories](#linemetadisruptioncategories) - Gets a list of valid disruption categories
* [lineMetaModes](#linemetamodes) - Gets a list of valid modes
* [lineMetaServiceTypes](#linemetaservicetypes) - Gets a list of valid ServiceTypes to filter on
* [lineMetaSeverity](#linemetaseverity) - Gets a list of valid severity codes
* [lineRoute](#lineroute) - Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.
* [lineRouteByMode](#lineroutebymode) - Gets all lines and their valid routes for given modes, including the name and id of the originating and terminating stops for each route
* [lineRouteSequence](#lineroutesequence) - Gets all valid routes for given line id, including the sequence of stops on each route.
* [lineSearch](#linesearch) - Search for lines or routes matching the query string
* [lineStatus](#linestatus) - Gets the line status for given line ids during the provided dates e.g Minor Delays
* [lineStatusByIds](#linestatusbyids) - Gets the line status of for given line ids e.g Minor Delays
* [lineStatusByMode](#linestatusbymode) - Gets the line status of for all lines for the given modes
* [lineStatusBySeverity](#linestatusbyseverity) - Gets the line status for all lines with a given severity
            A list of valid severity codes can be obtained from a call to Line/Meta/Severity
* [lineStopPoints](#linestoppoints) - Gets a list of the stations that serve the given line id
* [lineTimetable](#linetimetable) - Gets the timetable for a specified station on the give line
* [lineTimetableTo](#linetimetableto) - Gets the timetable for a specified station on the give line with specified destination

## lineArrivals

Get the list of arrival predictions for given line ids based at the given stop

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineArrivalsRequest;
use \OpenAPI\OpenAPI\Models\Operations\LineArrivalsDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineArrivalsRequest();
    $request->destinationStationId = 'natus';
    $request->direction = LineArrivalsDirectionEnum::INBOUND;
    $request->ids = [
        'dolor',
        'natus',
        'laboriosam',
    ];
    $request->stopPointId = 'hic';

    $response = $sdk->line->lineArrivals($request);

    if ($response->tflApiPresentationEntitiesPredictions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineDisruption

Get disruptions for the given line ids

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineDisruptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineDisruptionRequest();
    $request->ids = [
        'fuga',
        'in',
        'corporis',
        'iste',
    ];

    $response = $sdk->line->lineDisruption($request);

    if ($response->tflApiPresentationEntitiesDisruptions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineDisruptionByMode

Get disruptions for all lines of the given modes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineDisruptionByModeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineDisruptionByModeRequest();
    $request->modes = [
        'saepe',
        'quidem',
    ];

    $response = $sdk->line->lineDisruptionByMode($request);

    if ($response->tflApiPresentationEntitiesDisruptions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineGet

Gets lines that match the specified line ids.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineGetRequest();
    $request->ids = [
        'ipsa',
    ];

    $response = $sdk->line->lineGet($request);

    if ($response->tflApiPresentationEntitiesLines !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineGetByMode

Gets lines that serve the given modes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineGetByModeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineGetByModeRequest();
    $request->modes = [
        'est',
        'mollitia',
        'laborum',
        'dolores',
    ];

    $response = $sdk->line->lineGetByMode($request);

    if ($response->tflApiPresentationEntitiesLines !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineLineRoutesByIds

Get all valid routes for given line ids, including the name and id of the originating and terminating stops for each route.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineLineRoutesByIdsRequest;
use \OpenAPI\OpenAPI\Models\Operations\LineLineRoutesByIdsServiceTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineLineRoutesByIdsRequest();
    $request->ids = [
        'corporis',
    ];
    $request->serviceTypes = [
        LineLineRoutesByIdsServiceTypesEnum::NIGHT,
    ];

    $response = $sdk->line->lineLineRoutesByIds($request);

    if ($response->tflApiPresentationEntitiesLines !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineMetaDisruptionCategories

Gets a list of valid disruption categories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->line->lineMetaDisruptionCategories();

    if ($response->lineMetaDisruptionCategories200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineMetaModes

Gets a list of valid modes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->line->lineMetaModes();

    if ($response->tflApiPresentationEntitiesModes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineMetaServiceTypes

Gets a list of valid ServiceTypes to filter on

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->line->lineMetaServiceTypes();

    if ($response->lineMetaServiceTypes200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineMetaSeverity

Gets a list of valid severity codes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->line->lineMetaSeverity();

    if ($response->tflApiPresentationEntitiesStatusSeverities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineRoute

Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\LineRouteServiceTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineRouteRequest();
    $request->serviceTypes = [
        LineRouteServiceTypesEnum::NIGHT,
        LineRouteServiceTypesEnum::REGULAR,
    ];

    $response = $sdk->line->lineRoute($request);

    if ($response->tflApiPresentationEntitiesLines !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineRouteByMode

Gets all lines and their valid routes for given modes, including the name and id of the originating and terminating stops for each route

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineRouteByModeRequest;
use \OpenAPI\OpenAPI\Models\Operations\LineRouteByModeServiceTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineRouteByModeRequest();
    $request->modes = [
        'excepturi',
        'accusantium',
    ];
    $request->serviceTypes = [
        LineRouteByModeServiceTypesEnum::NIGHT,
        LineRouteByModeServiceTypesEnum::NIGHT,
    ];

    $response = $sdk->line->lineRouteByMode($request);

    if ($response->tflApiPresentationEntitiesLines !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineRouteSequence

Gets all valid routes for given line id, including the sequence of stops on each route.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineRouteSequenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\LineRouteSequenceDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\LineRouteSequenceServiceTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineRouteSequenceRequest();
    $request->direction = LineRouteSequenceDirectionEnum::ALL;
    $request->excludeCrowding = false;
    $request->id = '1a3a2fa9-4677-4392-91aa-52c3f5ad019d';
    $request->serviceTypes = [
        LineRouteSequenceServiceTypesEnum::REGULAR,
        LineRouteSequenceServiceTypesEnum::NIGHT,
        LineRouteSequenceServiceTypesEnum::NIGHT,
    ];

    $response = $sdk->line->lineRouteSequence($request);

    if ($response->tflApiPresentationEntitiesRouteSequence !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineSearch

Search for lines or routes matching the query string

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\LineSearchServiceTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineSearchRequest();
    $request->modes = [
        'nihil',
        'praesentium',
        'voluptatibus',
        'ipsa',
    ];
    $request->query = 'omnis';
    $request->serviceTypes = [
        LineSearchServiceTypesEnum::NIGHT,
        LineSearchServiceTypesEnum::REGULAR,
    ];

    $response = $sdk->line->lineSearch($request);

    if ($response->tflApiPresentationEntitiesRouteSearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineStatus

Gets the line status for given line ids during the provided dates e.g Minor Delays

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineStatusRequest();
    $request->endDatePathParameter = 'doloremque';
    $request->startDatePathParameter = 'reprehenderit';
    $request->dateRangeEndDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-08T10:49:12.847Z');
    $request->dateRangeStartDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T19:15:58.586Z');
    $request->detail = false;
    $request->endDateQueryParameter = 'dolore';
    $request->ids = [
        'dicta',
        'harum',
    ];
    $request->startDateQueryParameter = 'enim';

    $response = $sdk->line->lineStatus($request);

    if ($response->tflApiPresentationEntitiesLines !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineStatusByIds

Gets the line status of for given line ids e.g Minor Delays

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineStatusByIdsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineStatusByIdsRequest();
    $request->detail = false;
    $request->ids = [
        'commodi',
        'repudiandae',
        'quae',
        'ipsum',
    ];

    $response = $sdk->line->lineStatusByIds($request);

    if ($response->tflApiPresentationEntitiesLines !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineStatusByMode

Gets the line status of for all lines for the given modes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineStatusByModeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineStatusByModeRequest();
    $request->detail = false;
    $request->modes = [
        'molestias',
        'excepturi',
        'pariatur',
    ];
    $request->severityLevel = 'modi';

    $response = $sdk->line->lineStatusByMode($request);

    if ($response->tflApiPresentationEntitiesLines !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineStatusBySeverity

Gets the line status for all lines with a given severity
            A list of valid severity codes can be obtained from a call to Line/Meta/Severity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineStatusBySeverityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineStatusBySeverityRequest();
    $request->severity = 508969;

    $response = $sdk->line->lineStatusBySeverity($request);

    if ($response->tflApiPresentationEntitiesLines !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineStopPoints

Gets a list of the stations that serve the given line id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineStopPointsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineStopPointsRequest();
    $request->id = '8e1e91e4-50ad-42ab-9442-69802d502a94';
    $request->tflOperatedNationalRailStationsOnly = false;

    $response = $sdk->line->lineStopPoints($request);

    if ($response->tflApiPresentationEntitiesStopPoints !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineTimetable

Gets the timetable for a specified station on the give line

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineTimetableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineTimetableRequest();
    $request->fromStopPointId = 'facilis';
    $request->id = 'b4f63c96-9e9a-43ef-a77d-fb14cd66ae39';

    $response = $sdk->line->lineTimetable($request);

    if ($response->tflApiPresentationEntitiesTimetableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineTimetableTo

Gets the timetable for a specified station on the give line with specified destination

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineTimetableToRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineTimetableToRequest();
    $request->fromStopPointId = 'enim';
    $request->id = 'efb9ba88-f3a6-4699-b074-ba4469b6e214';
    $request->toStopPointId = 'et';

    $response = $sdk->line->lineTimetableTo($request);

    if ($response->tflApiPresentationEntitiesTimetableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
