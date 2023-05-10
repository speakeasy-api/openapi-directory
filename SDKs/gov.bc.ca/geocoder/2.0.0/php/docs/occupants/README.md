# occupants

### Available Operations

* [getOccupantsAddressesOutputFormat](#getoccupantsaddressesoutputformat) - Geocode an address and identify site occupants
* [getOccupantsNearOutputFormat](#getoccupantsnearoutputformat) - Find occupants of sites near to a geographic point
* [getOccupantsNearestOutputFormat](#getoccupantsnearestoutputformat) - Find occupants of the site nearest to a geographic point
* [getOccupantsWithinOutputFormat](#getoccupantswithinoutputformat) - Find occupants of sites in a geographic area
* [getOccupantsOccupantIDOutputFormat](#getoccupantsoccupantidoutputformat) - Get an occupant (of a site) by its unique ID

## getOccupantsAddressesOutputFormat

Represents the set of occupants whose addresses best match a given query address. Every occupant has an associated site which has a standardized address and a coordinate location on the Earth.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsAddressesOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsAddressesOutputFormatInterpolationEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsAddressesOutputFormatLocationDescriptorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsAddressesOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsAddressesOutputFormatOutputSrsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsAddressesOutputFormatStreetDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsAddressesOutputFormatUnitDesignatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOccupantsAddressesOutputFormatRequest();
    $request->addressString = 'fuga';
    $request->autoComplete = false;
    $request->bbox = 'in';
    $request->brief = false;
    $request->centre = 'corporis';
    $request->civicNumber = 'iste';
    $request->civicNumberSuffix = 'iure';
    $request->echo = false;
    $request->extrapolate = false;
    $request->interpolation = GetOccupantsAddressesOutputFormatInterpolationEnum::NONE;
    $request->localities = 'quidem';
    $request->localityName = 'architecto';
    $request->locationDescriptor = GetOccupantsAddressesOutputFormatLocationDescriptorEnum::ANY;
    $request->matchPrecision = 'reiciendis';
    $request->matchPrecisionNot = 'est';
    $request->maxDistance = 6531.4;
    $request->maxResults = 670638;
    $request->minScore = 170909;
    $request->notLocalities = 'dolorem';
    $request->outputFormat = GetOccupantsAddressesOutputFormatOutputFormatEnum::XHTML;
    $request->outputSRS = GetOccupantsAddressesOutputFormatOutputSrsEnum::FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
    $request->parcelPoint = 'nobis';
    $request->provinceCode = 'enim';
    $request->setBack = 607831;
    $request->siteName = 'nemo';
    $request->streetDirection = GetOccupantsAddressesOutputFormatStreetDirectionEnum::W;
    $request->streetName = 'excepturi';
    $request->streetQualifier = 'accusantium';
    $request->streetType = 'iure';
    $request->tags = 'culpa';
    $request->unitDesignator = GetOccupantsAddressesOutputFormatUnitDesignatorEnum::UPPR;
    $request->unitNumber = 'sapiente';
    $request->unitNumberSuffix = 'architecto';

    $response = $sdk->occupants->getOccupantsAddressesOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOccupantsNearOutputFormat

Represents occupants near a given point in order of closest to farthest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsNearOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsNearOutputFormatLocationDescriptorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsNearOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsNearOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOccupantsNearOutputFormatRequest();
    $request->brief = false;
    $request->locationDescriptor = GetOccupantsNearOutputFormatLocationDescriptorEnum::PARCEL_POINT;
    $request->maxDistance = 208876;
    $request->maxResults = 635059;
    $request->outputFormat = GetOccupantsNearOutputFormatOutputFormatEnum::GEOJSON;
    $request->outputSRS = GetOccupantsNearOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_ELEVEN;
    $request->point = 'mollitia';
    $request->setBack = 581850;
    $request->tags = 'numquam';

    $response = $sdk->occupants->getOccupantsNearOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOccupantsNearestOutputFormat

Represents the closest occupant to a given point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsNearestOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsNearestOutputFormatLocationDescriptorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsNearestOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsNearestOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOccupantsNearestOutputFormatRequest();
    $request->brief = false;
    $request->locationDescriptor = GetOccupantsNearestOutputFormatLocationDescriptorEnum::FRONT_DOOR_POINT;
    $request->maxDistance = 466311;
    $request->outputFormat = GetOccupantsNearestOutputFormatOutputFormatEnum::KML;
    $request->outputSRS = GetOccupantsNearestOutputFormatOutputSrsEnum::FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
    $request->point = 'error';
    $request->setBack = 158969;
    $request->tags = 'quis';

    $response = $sdk->occupants->getOccupantsNearestOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOccupantsWithinOutputFormat

Represents all occupants within a given area

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsWithinOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsWithinOutputFormatLocationDescriptorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsWithinOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsWithinOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOccupantsWithinOutputFormatRequest();
    $request->bbox = 'vitae';
    $request->brief = false;
    $request->locationDescriptor = GetOccupantsWithinOutputFormatLocationDescriptorEnum::ROOFTOP_POINT;
    $request->maxResults = 656330;
    $request->outputFormat = GetOccupantsWithinOutputFormatOutputFormatEnum::XHTML;
    $request->outputSRS = GetOccupantsWithinOutputFormatOutputSrsEnum::FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
    $request->setBack = 778346;
    $request->tags = 'sequi';

    $response = $sdk->occupants->getOccupantsWithinOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOccupantsOccupantIDOutputFormat

Represents an individual occupant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsOccupantIDOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsOccupantIDOutputFormatLocationDescriptorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsOccupantIDOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOccupantsOccupantIDOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOccupantsOccupantIDOutputFormatRequest();
    $request->brief = false;
    $request->locationDescriptor = GetOccupantsOccupantIDOutputFormatLocationDescriptorEnum::ROUTING_POINT;
    $request->occupantID = 'ipsam';
    $request->outputFormat = GetOccupantsOccupantIDOutputFormatOutputFormatEnum::GML;
    $request->outputSRS = GetOccupantsOccupantIDOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_TEN;
    $request->setBack = 13571;

    $response = $sdk->occupants->getOccupantsOccupantIDOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
