# directions

### Available Operations

* [getDirectionsOutputFormat](#getdirectionsoutputformat) - Get the directions, path, distance and travel time between a series of geographic points
* [getOptimalDirectionsOutputFormat](#getoptimaldirectionsoutputformat) - Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* [getTruckDirectionsOutputFormat](#gettruckdirectionsoutputformat) - Get the directions, path, distance and travel time between a series of geographic points for a commercial vehicle
* [getTruckOptimalDirectionsOutputFormat](#gettruckoptimaldirectionsoutputformat) - Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
* [postDirectionsOutputFormat](#postdirectionsoutputformat) - Get the directions, path, distance and travel time between a series of geographic points
* [postOptimalDirectionsOutputFormat](#postoptimaldirectionsoutputformat) - Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.
* [postTruckDirectionsOutputFormat](#posttruckdirectionsoutputformat) - Get the directions, path, distance and travel time between a series of geographic points
* [postTruckOptimalDirectionsOutputFormat](#posttruckoptimaldirectionsoutputformat) - Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.

## getDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDirectionsOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDirectionsOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDirectionsOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDirectionsOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDirectionsOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDirectionsOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = GetDirectionsOutputFormatCriteriaEnum::FASTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-26T09:37:56.283Z');
    $request->disable = 'iure';
    $request->distanceUnit = GetDirectionsOutputFormatDistanceUnitEnum::KM;
    $request->outputFormat = GetDirectionsOutputFormatOutputFormatEnum::HTML;
    $request->outputSRS = GetDirectionsOutputFormatOutputSrsEnum::FOUR_THOUSAND_THREE_HUNDRED_AND_TWENTY_SIX;
    $request->points = 'delectus';
    $request->roundTrip = false;
    $request->routeDescription = 'tempora';

    $response = $sdk->directions->getDirectionsOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOptimalDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOptimalDirectionsOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOptimalDirectionsOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOptimalDirectionsOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOptimalDirectionsOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOptimalDirectionsOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOptimalDirectionsOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = GetOptimalDirectionsOutputFormatCriteriaEnum::SHORTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-18T00:29:19.137Z');
    $request->disable = 'placeat';
    $request->distanceUnit = GetOptimalDirectionsOutputFormatDistanceUnitEnum::MI;
    $request->outputFormat = GetOptimalDirectionsOutputFormatOutputFormatEnum::KML;
    $request->outputSRS = GetOptimalDirectionsOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;
    $request->points = 'nisi';
    $request->roundTrip = false;
    $request->routeDescription = 'recusandae';

    $response = $sdk->directions->getOptimalDirectionsOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTruckDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points for a commercial vehicle

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckDirectionsOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckDirectionsOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckDirectionsOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckDirectionsOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckDirectionsOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTruckDirectionsOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = GetTruckDirectionsOutputFormatCriteriaEnum::FASTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-30T20:24:33.984Z');
    $request->disable = 'veritatis';
    $request->distanceUnit = GetTruckDirectionsOutputFormatDistanceUnitEnum::MI;
    $request->outputFormat = GetTruckDirectionsOutputFormatOutputFormatEnum::JSON;
    $request->outputSRS = GetTruckDirectionsOutputFormatOutputSrsEnum::THREE_THOUSAND_AND_FIVE;
    $request->partition = 'repellendus';
    $request->points = 'sapiente';
    $request->roundTrip = false;
    $request->routeDescription = 'quo';
    $request->truckRouteMultiplier = 140350;

    $response = $sdk->directions->getTruckDirectionsOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTruckOptimalDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time for a commercial vehicle.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckOptimalDirectionsOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckOptimalDirectionsOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckOptimalDirectionsOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckOptimalDirectionsOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTruckOptimalDirectionsOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = GetTruckOptimalDirectionsOutputFormatCriteriaEnum::FASTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-25T09:54:35.794Z');
    $request->disable = 'molestiae';
    $request->distanceUnit = GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum::MI;
    $request->outputFormat = GetTruckOptimalDirectionsOutputFormatOutputFormatEnum::HTML;
    $request->outputSRS = GetTruckOptimalDirectionsOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_SEVEN;
    $request->partition = 'totam';
    $request->points = 'porro';
    $request->roundTrip = false;
    $request->routeDescription = 'dolorum';
    $request->truckRouteMultiplier = 118274;

    $response = $sdk->directions->getTruckOptimalDirectionsOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostDirectionsOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostDirectionsOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostDirectionsOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostDirectionsOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostDirectionsOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostDirectionsOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = PostDirectionsOutputFormatCriteriaEnum::FASTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-02T03:00:47.309Z');
    $request->disable = 'fugit';
    $request->distanceUnit = PostDirectionsOutputFormatDistanceUnitEnum::MI;
    $request->outputFormat = PostDirectionsOutputFormatOutputFormatEnum::HTML;
    $request->outputSRS = PostDirectionsOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_TEN;
    $request->points = 'totam';
    $request->roundTrip = false;
    $request->routeDescription = 'beatae';

    $response = $sdk->directions->postDirectionsOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOptimalDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostOptimalDirectionsOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostOptimalDirectionsOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostOptimalDirectionsOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostOptimalDirectionsOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostOptimalDirectionsOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOptimalDirectionsOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = PostOptimalDirectionsOutputFormatCriteriaEnum::SHORTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-26T10:29:33.503Z');
    $request->disable = 'qui';
    $request->distanceUnit = PostOptimalDirectionsOutputFormatDistanceUnitEnum::MI;
    $request->outputFormat = PostOptimalDirectionsOutputFormatOutputFormatEnum::HTML;
    $request->outputSRS = PostOptimalDirectionsOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_SEVEN;
    $request->points = 'ipsum';
    $request->roundTrip = false;
    $request->routeDescription = 'excepturi';

    $response = $sdk->directions->postOptimalDirectionsOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTruckDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckDirectionsOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckDirectionsOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckDirectionsOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckDirectionsOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckDirectionsOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTruckDirectionsOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = PostTruckDirectionsOutputFormatCriteriaEnum::SHORTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-04T16:31:28.618Z');
    $request->disable = 'natus';
    $request->distanceUnit = PostTruckDirectionsOutputFormatDistanceUnitEnum::KM;
    $request->outputFormat = PostTruckDirectionsOutputFormatOutputFormatEnum::KML;
    $request->outputSRS = PostTruckDirectionsOutputFormatOutputSrsEnum::FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
    $request->partition = 'natus';
    $request->points = 'laboriosam';
    $request->roundTrip = false;
    $request->routeDescription = 'hic';
    $request->truckRouteMultiplier = 902599;

    $response = $sdk->directions->postTruckDirectionsOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTruckOptimalDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckOptimalDirectionsOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckOptimalDirectionsOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckOptimalDirectionsOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckOptimalDirectionsOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckOptimalDirectionsOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTruckOptimalDirectionsOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = PostTruckOptimalDirectionsOutputFormatCriteriaEnum::FASTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T18:42:38.160Z');
    $request->disable = 'iste';
    $request->distanceUnit = PostTruckOptimalDirectionsOutputFormatDistanceUnitEnum::KM;
    $request->outputFormat = PostTruckOptimalDirectionsOutputFormatOutputFormatEnum::HTML;
    $request->outputSRS = PostTruckOptimalDirectionsOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_NINE;
    $request->partition = 'architecto';
    $request->points = 'ipsa';
    $request->roundTrip = false;
    $request->routeDescription = 'reiciendis';
    $request->truckRouteMultiplier = 666767;

    $response = $sdk->directions->postTruckOptimalDirectionsOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
