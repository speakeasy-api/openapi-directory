# route

### Available Operations

* [getOptimalRouteOutputFormat](#getoptimalrouteoutputformat) - Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* [getRouteOutputFormat](#getrouteoutputformat) - Get the path, distance and travel time between a series of geographic points
* [getTruckOptimalRouteOutputFormat](#gettruckoptimalrouteoutputformat) - Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
* [getTruckRouteOutputFormat](#gettruckrouteoutputformat) - Get the path, distance and travel time between a series of geographic points for a commercial vehicle
* [postOptimalRouteOutputFormat](#postoptimalrouteoutputformat) - Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* [postRouteOutputFormat](#postrouteoutputformat) - Get the path, distance and travel time between a series of geographic points
* [postTruckOptimalRouteOutputFormat](#posttruckoptimalrouteoutputformat) - Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* [postTruckRouteOutputFormat](#posttruckrouteoutputformat) - Get the path, distance and travel time between a series of geographic points

## getOptimalRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOptimalRouteOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOptimalRouteOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOptimalRouteOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOptimalRouteOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOptimalRouteOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOptimalRouteOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = GetOptimalRouteOutputFormatCriteriaEnum::SHORTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-15T00:41:38.329Z');
    $request->disable = 'voluptates';
    $request->distanceUnit = GetOptimalRouteOutputFormatDistanceUnitEnum::KM;
    $request->outputFormat = GetOptimalRouteOutputFormatOutputFormatEnum::HTML;
    $request->outputSRS = GetOptimalRouteOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;
    $request->points = 'veritatis';
    $request->roundTrip = false;
    $request->routeDescription = 'itaque';

    $response = $sdk->route->getOptimalRouteOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRouteOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRouteOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetRouteOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetRouteOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetRouteOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRouteOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = GetRouteOutputFormatCriteriaEnum::SHORTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-28T14:02:06.064Z');
    $request->disable = 'est';
    $request->distanceUnit = GetRouteOutputFormatDistanceUnitEnum::MI;
    $request->outputFormat = GetRouteOutputFormatOutputFormatEnum::JSON;
    $request->outputSRS = GetRouteOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_NINE;
    $request->points = 'distinctio';
    $request->roundTrip = false;
    $request->routeDescription = 'quibusdam';

    $response = $sdk->route->getRouteOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTruckOptimalRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time for a commercial vehicle.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckOptimalRouteOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckOptimalRouteOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckOptimalRouteOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckOptimalRouteOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckOptimalRouteOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTruckOptimalRouteOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = GetTruckOptimalRouteOutputFormatCriteriaEnum::SHORTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-26T03:14:36.345Z');
    $request->disable = 'aliquid';
    $request->distanceUnit = GetTruckOptimalRouteOutputFormatDistanceUnitEnum::MI;
    $request->outputFormat = GetTruckOptimalRouteOutputFormatOutputFormatEnum::KML;
    $request->outputSRS = GetTruckOptimalRouteOutputFormatOutputSrsEnum::FOUR_THOUSAND_THREE_HUNDRED_AND_TWENTY_SIX;
    $request->partition = 'magni';
    $request->points = 'assumenda';
    $request->roundTrip = false;
    $request->routeDescription = 'ipsam';
    $request->truckRouteMultiplier = 4695;

    $response = $sdk->route->getTruckOptimalRouteOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTruckRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between given start and end points for a commercial vehicle.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckRouteOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckRouteOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckRouteOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckRouteOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckRouteOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTruckRouteOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = GetTruckRouteOutputFormatCriteriaEnum::SHORTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-11T04:17:07.569Z');
    $request->disable = 'tempora';
    $request->distanceUnit = GetTruckRouteOutputFormatDistanceUnitEnum::MI;
    $request->outputFormat = GetTruckRouteOutputFormatOutputFormatEnum::HTML;
    $request->outputSRS = GetTruckRouteOutputFormatOutputSrsEnum::THREE_THOUSAND_AND_FIVE;
    $request->partition = 'delectus';
    $request->points = 'eum';
    $request->roundTrip = false;
    $request->routeDescription = 'non';
    $request->truckRouteMultiplier = 756107;

    $response = $sdk->route->getTruckRouteOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOptimalRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostOptimalRouteOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostOptimalRouteOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostOptimalRouteOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostOptimalRouteOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostOptimalRouteOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOptimalRouteOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = PostOptimalRouteOutputFormatCriteriaEnum::FASTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-29T21:42:45.399Z');
    $request->disable = 'necessitatibus';
    $request->distanceUnit = PostOptimalRouteOutputFormatDistanceUnitEnum::MI;
    $request->outputFormat = PostOptimalRouteOutputFormatOutputFormatEnum::KML;
    $request->outputSRS = PostOptimalRouteOutputFormatOutputSrsEnum::FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
    $request->points = 'debitis';
    $request->roundTrip = false;
    $request->routeDescription = 'a';

    $response = $sdk->route->postOptimalRouteOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostRouteOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRouteOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostRouteOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostRouteOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostRouteOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRouteOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = PostRouteOutputFormatCriteriaEnum::FASTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-21T01:01:39.776Z');
    $request->disable = 'illum';
    $request->distanceUnit = PostRouteOutputFormatDistanceUnitEnum::MI;
    $request->outputFormat = PostRouteOutputFormatOutputFormatEnum::HTML;
    $request->outputSRS = PostRouteOutputFormatOutputSrsEnum::FOUR_THOUSAND_THREE_HUNDRED_AND_TWENTY_SIX;
    $request->points = 'magnam';
    $request->roundTrip = false;
    $request->routeDescription = 'cumque';

    $response = $sdk->route->postRouteOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTruckOptimalRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckOptimalRouteOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckOptimalRouteOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckOptimalRouteOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckOptimalRouteOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckOptimalRouteOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTruckOptimalRouteOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = PostTruckOptimalRouteOutputFormatCriteriaEnum::FASTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-09T06:36:34.417Z');
    $request->disable = 'laborum';
    $request->distanceUnit = PostTruckOptimalRouteOutputFormatDistanceUnitEnum::MI;
    $request->outputFormat = PostTruckOptimalRouteOutputFormatOutputFormatEnum::JSON;
    $request->outputSRS = PostTruckOptimalRouteOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;
    $request->partition = 'enim';
    $request->points = 'accusamus';
    $request->roundTrip = false;
    $request->routeDescription = 'delectus';
    $request->truckRouteMultiplier = 692532;

    $response = $sdk->route->postTruckOptimalRouteOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTruckRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckRouteOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckRouteOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckRouteOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckRouteOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckRouteOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTruckRouteOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = PostTruckRouteOutputFormatCriteriaEnum::FASTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-06T10:36:33.442Z');
    $request->disable = 'blanditiis';
    $request->distanceUnit = PostTruckRouteOutputFormatDistanceUnitEnum::MI;
    $request->outputFormat = PostTruckRouteOutputFormatOutputFormatEnum::HTML;
    $request->outputSRS = PostTruckRouteOutputFormatOutputSrsEnum::FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
    $request->partition = 'deserunt';
    $request->points = 'nisi';
    $request->roundTrip = false;
    $request->routeDescription = 'vel';
    $request->truckRouteMultiplier = 618809;

    $response = $sdk->route->postTruckRouteOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
