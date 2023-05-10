# intersections

### Available Operations

* [getAddressesOutputFormat](#getaddressesoutputformat) - Geocode an address
* [getIntersectionsNearOutputFormat](#getintersectionsnearoutputformat) - Find intersections near to a geographic point
* [getIntersectionsNearestOutputFormat](#getintersectionsnearestoutputformat) - Find nearest intersection to a geographic point
* [getIntersectionsWithinOutputFormat](#getintersectionswithinoutputformat) - Find intersections in a geographic area
* [getIntersectionsIntersectionIDOutputFormat](#getintersectionsintersectionidoutputformat) - Get an intersection by its unique ID

## getAddressesOutputFormat

Represents the set of geocoded and standardized sites and intersections whose address best matches a given query address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatInterpolationEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatLocationDescriptorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatOutputSrsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatStreetDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatUnitDesignatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddressesOutputFormatRequest();
    $request->addressString = 'ab';
    $request->autoComplete = false;
    $request->bbox = 'quis';
    $request->brief = false;
    $request->centre = 'veritatis';
    $request->civicNumber = 'deserunt';
    $request->civicNumberSuffix = 'perferendis';
    $request->echo = false;
    $request->extrapolate = false;
    $request->interpolation = GetAddressesOutputFormatInterpolationEnum::LINEAR;
    $request->localities = 'repellendus';
    $request->localityName = 'sapiente';
    $request->locationDescriptor = GetAddressesOutputFormatLocationDescriptorEnum::ROOFTOP_POINT;
    $request->matchPrecision = 'odit';
    $request->matchPrecisionNot = 'at';
    $request->maxDistance = 8700.88;
    $request->maxResults = 978619;
    $request->minScore = 473608;
    $request->notLocalities = 'quod';
    $request->outputFormat = GetAddressesOutputFormatOutputFormatEnum::CSV;
    $request->outputSRS = GetAddressesOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_SEVEN;
    $request->parcelPoint = 'totam';
    $request->provinceCode = 'porro';
    $request->setBack = 678880;
    $request->siteName = 'dicta';
    $request->streetDirection = GetAddressesOutputFormatStreetDirectionEnum::NW;
    $request->streetName = 'officia';
    $request->streetQualifier = 'occaecati';
    $request->streetType = 'fugit';
    $request->unitDesignator = GetAddressesOutputFormatUnitDesignatorEnum::REAR;
    $request->unitNumber = 'hic';
    $request->unitNumberSuffix = 'optio';

    $response = $sdk->intersections->getAddressesOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIntersectionsNearOutputFormat

Represents intersections near a given point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIntersectionsNearOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetIntersectionsNearOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetIntersectionsNearOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIntersectionsNearOutputFormatRequest();
    $request->maxDegree = 521848;
    $request->maxDistance = 105907;
    $request->maxResults = 414662;
    $request->minDegree = 473600;
    $request->outputFormat = GetIntersectionsNearOutputFormatOutputFormatEnum::GEOJSON;
    $request->outputSRS = GetIntersectionsNearOutputFormatOutputSrsEnum::FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
    $request->point = 'impedit';

    $response = $sdk->intersections->getIntersectionsNearOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIntersectionsNearestOutputFormat

Represents the closest intersection to a given point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIntersectionsNearestOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetIntersectionsNearestOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetIntersectionsNearestOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIntersectionsNearestOutputFormatRequest();
    $request->maxDegree = 736918;
    $request->maxDistance = 456150;
    $request->minDegree = 216550;
    $request->outputFormat = GetIntersectionsNearestOutputFormatOutputFormatEnum::KML;
    $request->outputSRS = GetIntersectionsNearestOutputFormatOutputSrsEnum::FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
    $request->point = 'perferendis';

    $response = $sdk->intersections->getIntersectionsNearestOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIntersectionsWithinOutputFormat

Represents all intersections within a given area

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIntersectionsWithinOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetIntersectionsWithinOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetIntersectionsWithinOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIntersectionsWithinOutputFormatRequest();
    $request->bbox = 'ad';
    $request->maxDegree = 617636;
    $request->maxResults = 149675;
    $request->minDegree = 612096;
    $request->outputFormat = GetIntersectionsWithinOutputFormatOutputFormatEnum::GEOJSON;
    $request->outputSRS = GetIntersectionsWithinOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;

    $response = $sdk->intersections->getIntersectionsWithinOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIntersectionsIntersectionIDOutputFormat

Represents a individual intersection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIntersectionsIntersectionIDOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetIntersectionsIntersectionIDOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetIntersectionsIntersectionIDOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIntersectionsIntersectionIDOutputFormatRequest();
    $request->intersectionID = 'laboriosam';
    $request->outputFormat = GetIntersectionsIntersectionIDOutputFormatOutputFormatEnum::SHPZ;
    $request->outputSRS = GetIntersectionsIntersectionIDOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_ELEVEN;

    $response = $sdk->intersections->getIntersectionsIntersectionIDOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
