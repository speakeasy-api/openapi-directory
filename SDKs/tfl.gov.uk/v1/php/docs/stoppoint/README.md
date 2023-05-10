# stopPoint

### Available Operations

* [stopPointArrivalDepartures](#stoppointarrivaldepartures) - Gets the list of arrival and departure predictions for the given stop point id (overground, Elizabeth line and thameslink only)
* [stopPointArrivals](#stoppointarrivals) - Gets the list of arrival predictions for the given stop point id
* [stopPointCrowding](#stoppointcrowding) - Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.
* [stopPointDirection](#stoppointdirection) - Returns the canonical direction, "inbound" or "outbound", for a given pair of stop point Ids in the direction from -&gt; to.
* [stopPointDisruption](#stoppointdisruption) - Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.
* [stopPointDisruptionByMode](#stoppointdisruptionbymode) - Gets a distinct list of disrupted stop points for the given modes
* [stopPointGet](#stoppointget) - Gets a list of StopPoints corresponding to the given list of stop ids.
* [stopPointGetByGeoPoint](#stoppointgetbygeopoint) - Gets a list of StopPoints within {radius} by the specified criteria
* [stopPointGetByMode](#stoppointgetbymode) - Gets a list of StopPoints filtered by the modes available at that StopPoint.
* [stopPointGetBySms](#stoppointgetbysms) - Gets a StopPoint for a given sms code.
* [stopPointGetByType](#stoppointgetbytype) - Gets all stop points of a given type
* [stopPointGetByTypeWithPagination](#stoppointgetbytypewithpagination) - Gets all the stop points of given type(s) with a page number
* [stopPointGetCarParksById](#stoppointgetcarparksbyid) - Get car parks corresponding to the given stop point id.
* [stopPointGetServiceTypes](#stoppointgetservicetypes) - Gets the service types for a given stoppoint
* [stopPointGetTaxiRanksByIds](#stoppointgettaxiranksbyids) - Gets a list of taxi ranks corresponding to the given stop point id.
* [stopPointMetaCategories](#stoppointmetacategories) - Gets the list of available StopPoint additional information categories
* [stopPointMetaModes](#stoppointmetamodes) - Gets the list of available StopPoint modes
* [stopPointMetaStopTypes](#stoppointmetastoptypes) - Gets the list of available StopPoint types
* [stopPointReachableFrom](#stoppointreachablefrom) - Gets Stopoints that are reachable from a station/line combination.
* [stopPointRoute](#stoppointroute) - Returns the route sections for all the lines that service the given stop point ids
* [stopPointSearch](#stoppointsearch) - Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
* [getStopPointSearch](#getstoppointsearch) - Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
* [getStopPointIdPlaceTypes](#getstoppointidplacetypes) - Get a list of places corresponding to a given id and place types.

## stopPointArrivalDepartures

Gets the list of arrival and departure predictions for the given stop point id (overground, Elizabeth line and thameslink only)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopPointArrivalDeparturesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPointArrivalDeparturesRequest();
    $request->id = '37ae4203-ce5e-46a9-9d8a-0d446ce2af7a';
    $request->lineIds = [
        'ipsum',
        'quisquam',
    ];

    $response = $sdk->stopPoint->stopPointArrivalDepartures($request);

    if ($response->tflApiPresentationEntitiesArrivalDepartures !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPointArrivals

Gets the list of arrival predictions for the given stop point id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopPointArrivalsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPointArrivalsRequest();
    $request->id = 'f3be453f-870b-4326-b5a7-3429cdb1a842';

    $response = $sdk->stopPoint->stopPointArrivals($request);

    if ($response->tflApiPresentationEntitiesPredictions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPointCrowding

Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopPointCrowdingRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopPointCrowdingDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPointCrowdingRequest();
    $request->direction = StopPointCrowdingDirectionEnum::INBOUND;
    $request->id = 'bb679d23-2271-45bf-8cbb-1e31b8b90f34';
    $request->line = 'labore';

    $response = $sdk->stopPoint->stopPointCrowding($request);

    if ($response->tflApiPresentationEntitiesStopPoints !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPointDirection

Returns the canonical direction, "inbound" or "outbound", for a given pair of stop point Ids in the direction from -&gt; to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopPointDirectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPointDirectionRequest();
    $request->id = '3a1108e0-adcf-44b9-a187-9fce953f73ef';
    $request->lineId = 'dignissimos';
    $request->toStopPointId = 'hic';

    $response = $sdk->stopPoint->stopPointDirection($request);

    if ($response->stopPointDirection200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPointDisruption

Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopPointDisruptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPointDisruptionRequest();
    $request->flattenResponse = false;
    $request->getFamily = false;
    $request->ids = [
        'quod',
        'odio',
        'similique',
    ];
    $request->includeRouteBlockedStops = false;

    $response = $sdk->stopPoint->stopPointDisruption($request);

    if ($response->tflApiPresentationEntitiesDisruptedPoints !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPointDisruptionByMode

Gets a distinct list of disrupted stop points for the given modes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopPointDisruptionByModeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPointDisruptionByModeRequest();
    $request->includeRouteBlockedStops = false;
    $request->modes = [
        'vero',
        'ducimus',
        'dolore',
    ];

    $response = $sdk->stopPoint->stopPointDisruptionByMode($request);

    if ($response->tflApiPresentationEntitiesDisruptedPoints !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPointGet

Gets a list of StopPoints corresponding to the given list of stop ids.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopPointGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPointGetRequest();
    $request->ids = [
        'illum',
        'sequi',
        'natus',
        'impedit',
    ];
    $request->includeCrowdingData = false;

    $response = $sdk->stopPoint->stopPointGet($request);

    if ($response->tflApiPresentationEntitiesStopPoints !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPointGetByGeoPoint

Gets a list of StopPoints within {radius} by the specified criteria

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopPointGetByGeoPointRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPointGetByGeoPointRequest();
    $request->categories = [
        'voluptatibus',
    ];
    $request->locationLat = 3472.33;
    $request->locationLon = 8623.1;
    $request->modes = [
        'porro',
    ];
    $request->radius = 981830;
    $request->returnLines = false;
    $request->stopTypes = [
        'iusto',
        'eligendi',
        'ducimus',
        'alias',
    ];
    $request->useStopPointHierarchy = false;

    $response = $sdk->stopPoint->stopPointGetByGeoPoint($request);

    if ($response->tflApiPresentationEntitiesStopPointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPointGetByMode

Gets a list of StopPoints filtered by the modes available at that StopPoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopPointGetByModeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPointGetByModeRequest();
    $request->modes = [
        'tempora',
        'ipsam',
        'ea',
    ];
    $request->page = 136900;

    $response = $sdk->stopPoint->stopPointGetByMode($request);

    if ($response->tflApiPresentationEntitiesStopPointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPointGetBySms

Gets a StopPoint for a given sms code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopPointGetBySmsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPointGetBySmsRequest();
    $request->id = '6d436813-f16d-49f5-bce6-c556146c3e25';
    $request->output = 'eaque';

    $response = $sdk->stopPoint->stopPointGetBySms($request);

    if ($response->systemObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPointGetByType

Gets all stop points of a given type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopPointGetByTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPointGetByTypeRequest();
    $request->types = [
        'libero',
        'aut',
        'aut',
        'deleniti',
    ];

    $response = $sdk->stopPoint->stopPointGetByType($request);

    if ($response->tflApiPresentationEntitiesStopPoints !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPointGetByTypeWithPagination

Gets all the stop points of given type(s) with a page number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopPointGetByTypeWithPaginationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPointGetByTypeWithPaginationRequest();
    $request->page = 770581;
    $request->types = [
        'fugit',
        'accusamus',
    ];

    $response = $sdk->stopPoint->stopPointGetByTypeWithPagination($request);

    if ($response->tflApiPresentationEntitiesStopPoints !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPointGetCarParksById

Get car parks corresponding to the given stop point id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopPointGetCarParksByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPointGetCarParksByIdRequest();
    $request->stopPointId = 'inventore';

    $response = $sdk->stopPoint->stopPointGetCarParksById($request);

    if ($response->tflApiPresentationEntitiesPlaces !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPointGetServiceTypes

Gets the service types for a given stoppoint

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopPointGetServiceTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPointGetServiceTypesRequest();
    $request->id = '41aac366-c8dd-46b1-8429-07474778a7bd';
    $request->lineIds = [
        'eum',
        'suscipit',
    ];
    $request->modes = [
        'eos',
        'praesentium',
        'quisquam',
        'veritatis',
    ];

    $response = $sdk->stopPoint->stopPointGetServiceTypes($request);

    if ($response->tflApiPresentationEntitiesLineServiceTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPointGetTaxiRanksByIds

Gets a list of taxi ranks corresponding to the given stop point id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopPointGetTaxiRanksByIdsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPointGetTaxiRanksByIdsRequest();
    $request->stopPointId = 'ipsa';

    $response = $sdk->stopPoint->stopPointGetTaxiRanksByIds($request);

    if ($response->tflApiPresentationEntitiesPlaces !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPointMetaCategories

Gets the list of available StopPoint additional information categories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->stopPoint->stopPointMetaCategories();

    if ($response->tflApiPresentationEntitiesStopPointCategories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPointMetaModes

Gets the list of available StopPoint modes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->stopPoint->stopPointMetaModes();

    if ($response->tflApiPresentationEntitiesModes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPointMetaStopTypes

Gets the list of available StopPoint types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->stopPoint->stopPointMetaStopTypes();

    if ($response->stopPointMetaStopTypes200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPointReachableFrom

Gets Stopoints that are reachable from a station/line combination.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopPointReachableFromRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopPointReachableFromServiceTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPointReachableFromRequest();
    $request->id = 'ab3cdca4-2519-404e-923c-7e0bc7178e47';
    $request->lineId = 'occaecati';
    $request->serviceTypes = [
        StopPointReachableFromServiceTypesEnum::NIGHT,
        StopPointReachableFromServiceTypesEnum::REGULAR,
    ];

    $response = $sdk->stopPoint->stopPointReachableFrom($request);

    if ($response->tflApiPresentationEntitiesStopPoints !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPointRoute

Returns the route sections for all the lines that service the given stop point ids

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopPointRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopPointRouteServiceTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPointRouteRequest();
    $request->id = 'a70c6882-82aa-4482-962f-222e9817ee17';
    $request->serviceTypes = [
        StopPointRouteServiceTypesEnum::NIGHT,
        StopPointRouteServiceTypesEnum::NIGHT,
        StopPointRouteServiceTypesEnum::REGULAR,
        StopPointRouteServiceTypesEnum::REGULAR,
    ];

    $response = $sdk->stopPoint->stopPointRoute($request);

    if ($response->tflApiPresentationEntitiesStopPointRouteSections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPointSearch

Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopPointSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPointSearchRequest();
    $request->faresOnly = false;
    $request->includeHubs = false;
    $request->lines = [
        'vel',
        'harum',
        'molestiae',
        'rerum',
    ];
    $request->maxResults = 580197;
    $request->modes = [
        'distinctio',
        'eligendi',
    ];
    $request->query = 'sit';
    $request->tflOperatedNationalRailStationsOnly = false;

    $response = $sdk->stopPoint->stopPointSearch($request);

    if ($response->tflApiPresentationEntitiesSearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStopPointSearch

Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStopPointSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStopPointSearchRequest();
    $request->faresOnly = false;
    $request->includeHubs = false;
    $request->lines = [
        'tempore',
        'adipisci',
        'cumque',
    ];
    $request->maxResults = 160538;
    $request->modes = [
        'minus',
    ];
    $request->query = 'quaerat';
    $request->tflOperatedNationalRailStationsOnly = false;

    $response = $sdk->stopPoint->getStopPointSearch($request);

    if ($response->tflApiPresentationEntitiesSearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStopPointIdPlaceTypes

Get a list of places corresponding to a given id and place types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStopPointIdPlaceTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStopPointIdPlaceTypesRequest();
    $request->id = 'f3789fd8-71f9-49dd-aefd-121aa6f1e674';
    $request->placeTypes = [
        'illum',
        'soluta',
        'accusantium',
    ];

    $response = $sdk->stopPoint->getStopPointIdPlaceTypes($request);

    if ($response->tflApiPresentationEntitiesPlaces !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
