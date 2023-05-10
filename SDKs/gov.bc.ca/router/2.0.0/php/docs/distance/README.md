# distance

### Available Operations

* [getDistanceOutputFormat](#getdistanceoutputformat) - Get distance and travel time between two geographic points
* [getDistanceBetweenPairsOutputFormat](#getdistancebetweenpairsoutputformat) - Get distance and travel time between each pair of geographic points
* [getTruckDistanceOutputFormat](#gettruckdistanceoutputformat) - Get distance and travel time between two geographic points for a commercial vehicle
* [getTruckDistanceBetweenPairsOutputFormat](#gettruckdistancebetweenpairsoutputformat) - Get distance and travel time between each pair of geographic points for a commercial vehicle
* [postDistanceOutputFormat](#postdistanceoutputformat) - Get distance and travel time between two geographic points
* [postDistanceBetweenPairsOutputFormat](#postdistancebetweenpairsoutputformat) - Get distance and travel time between each pair of geographic points
* [postTruckDistanceOutputFormat](#posttruckdistanceoutputformat) - Get distance and travel time between two geographic points
* [postTruckDistanceBetweenPairsOutputFormat](#posttruckdistancebetweenpairsoutputformat) - Get distance and travel time between each pair of geographic points

## getDistanceOutputFormat

Represents the distance and time of the shortest or fastest path between given start and end points.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDistanceOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDistanceOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDistanceOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDistanceOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDistanceOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistanceOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = GetDistanceOutputFormatCriteriaEnum::FASTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-29T05:39:49.755Z');
    $request->disable = 'dolorem';
    $request->distanceUnit = GetDistanceOutputFormatDistanceUnitEnum::KM;
    $request->outputFormat = GetDistanceOutputFormatOutputFormatEnum::JSON;
    $request->outputSRS = GetDistanceOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_TEN;
    $request->points = 'enim';
    $request->roundTrip = false;
    $request->routeDescription = 'omnis';

    $response = $sdk->distance->getDistanceOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistanceBetweenPairsOutputFormat

Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDistanceBetweenPairsOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDistanceBetweenPairsOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDistanceBetweenPairsOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDistanceBetweenPairsOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDistanceBetweenPairsOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistanceBetweenPairsOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = GetDistanceBetweenPairsOutputFormatCriteriaEnum::SHORTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-06T21:04:34.044Z');
    $request->disable = 'accusantium';
    $request->distanceUnit = GetDistanceBetweenPairsOutputFormatDistanceUnitEnum::KM;
    $request->fromPoints = 'culpa';
    $request->maxPairs = 988374;
    $request->outputFormat = GetDistanceBetweenPairsOutputFormatOutputFormatEnum::HTML;
    $request->outputSRS = GetDistanceBetweenPairsOutputFormatOutputSrsEnum::FOUR_THOUSAND_THREE_HUNDRED_AND_TWENTY_SIX;
    $request->routeDescription = 'mollitia';
    $request->toPoints = 'dolorem';

    $response = $sdk->distance->getDistanceBetweenPairsOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTruckDistanceOutputFormat

Represents the distance and time of the shortest or fastest path between given start and end points.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckDistanceOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckDistanceOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckDistanceOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckDistanceOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckDistanceOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTruckDistanceOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = GetTruckDistanceOutputFormatCriteriaEnum::FASTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-02T17:10:32.894Z');
    $request->disable = 'mollitia';
    $request->distanceUnit = GetTruckDistanceOutputFormatDistanceUnitEnum::MI;
    $request->outputFormat = GetTruckDistanceOutputFormatOutputFormatEnum::JSON;
    $request->outputSRS = GetTruckDistanceOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_SEVEN;
    $request->points = 'quam';
    $request->roundTrip = false;
    $request->routeDescription = 'molestiae';
    $request->truckRouteMultiplier = 244425;

    $response = $sdk->distance->getTruckDistanceOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTruckDistanceBetweenPairsOutputFormat

Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints for a commercial vehicle. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckDistanceBetweenPairsOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTruckDistanceBetweenPairsOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTruckDistanceBetweenPairsOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum::FASTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-30T15:03:11.112Z');
    $request->disable = 'vitae';
    $request->distanceUnit = GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum::MI;
    $request->fromPoints = 'animi';
    $request->maxPairs = 317202;
    $request->outputFormat = GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum::JSON;
    $request->outputSRS = GetTruckDistanceBetweenPairsOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_TEN;
    $request->routeDescription = 'sequi';
    $request->toPoints = 'tenetur';

    $response = $sdk->distance->getTruckDistanceBetweenPairsOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDistanceOutputFormat

Represents the distance and time of the shortest or fastest path between given start and end points.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostDistanceOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostDistanceOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostDistanceOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostDistanceOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostDistanceOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostDistanceOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = PostDistanceOutputFormatCriteriaEnum::SHORTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-11T16:11:54.761Z');
    $request->disable = 'aut';
    $request->distanceUnit = PostDistanceOutputFormatDistanceUnitEnum::KM;
    $request->outputFormat = PostDistanceOutputFormatOutputFormatEnum::KML;
    $request->outputSRS = PostDistanceOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_TEN;
    $request->points = 'laborum';
    $request->roundTrip = false;
    $request->routeDescription = 'quasi';

    $response = $sdk->distance->postDistanceOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDistanceBetweenPairsOutputFormat

Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostDistanceBetweenPairsOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostDistanceBetweenPairsOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostDistanceBetweenPairsOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostDistanceBetweenPairsOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostDistanceBetweenPairsOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostDistanceBetweenPairsOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = PostDistanceBetweenPairsOutputFormatCriteriaEnum::FASTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-14T09:04:32.205Z');
    $request->disable = 'nihil';
    $request->distanceUnit = PostDistanceBetweenPairsOutputFormatDistanceUnitEnum::MI;
    $request->fromPoints = 'voluptatibus';
    $request->maxPairs = 55714;
    $request->outputFormat = PostDistanceBetweenPairsOutputFormatOutputFormatEnum::HTML;
    $request->outputSRS = PostDistanceBetweenPairsOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_SEVEN;
    $request->routeDescription = 'cum';
    $request->toPoints = 'perferendis';

    $response = $sdk->distance->postDistanceBetweenPairsOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTruckDistanceOutputFormat

Represents the distance and time of the shortest or fastest path between given start and end points.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckDistanceOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckDistanceOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckDistanceOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckDistanceOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckDistanceOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTruckDistanceOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = PostTruckDistanceOutputFormatCriteriaEnum::SHORTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-19T18:36:39.009Z');
    $request->disable = 'maiores';
    $request->distanceUnit = PostTruckDistanceOutputFormatDistanceUnitEnum::KM;
    $request->outputFormat = PostTruckDistanceOutputFormatOutputFormatEnum::KML;
    $request->outputSRS = PostTruckDistanceOutputFormatOutputSrsEnum::THREE_THOUSAND_AND_FIVE;
    $request->points = 'iusto';
    $request->roundTrip = false;
    $request->routeDescription = 'dicta';

    $response = $sdk->distance->postTruckDistanceOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTruckDistanceBetweenPairsOutputFormat

Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckDistanceBetweenPairsOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTruckDistanceBetweenPairsOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTruckDistanceBetweenPairsOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum::FASTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-13T15:01:52.114Z');
    $request->disable = 'commodi';
    $request->distanceUnit = PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum::MI;
    $request->fromPoints = 'quae';
    $request->maxPairs = 216822;
    $request->outputFormat = PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum::HTML;
    $request->outputSRS = PostTruckDistanceBetweenPairsOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;
    $request->routeDescription = 'excepturi';
    $request->toPoints = 'pariatur';

    $response = $sdk->distance->postTruckDistanceBetweenPairsOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
