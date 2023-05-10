# sites

### Available Operations

* [getAddressesOutputFormat](#getaddressesoutputformat) - Geocode an address
* [getSitesNearOutputFormat](#getsitesnearoutputformat) - Find sites near to a geographic point
* [getSitesNearestOutputFormat](#getsitesnearestoutputformat) - Find the site nearest to a geographic point
* [getSitesWithinOutputFormat](#getsiteswithinoutputformat) - Find sites in a geographic area
* [getSitesSiteIDOutputFormat](#getsitessiteidoutputformat) - Get a site by its unique ID
* [getSitesSiteIDSubsitesOutputFormat](#getsitessiteidsubsitesoutputformat) - Represents all subsites of a given site

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
    $request->addressString = 'temporibus';
    $request->autoComplete = false;
    $request->bbox = 'laborum';
    $request->brief = false;
    $request->centre = 'quasi';
    $request->civicNumber = 'reiciendis';
    $request->civicNumberSuffix = 'voluptatibus';
    $request->echo = false;
    $request->extrapolate = false;
    $request->interpolation = GetAddressesOutputFormatInterpolationEnum::NONE;
    $request->localities = 'nihil';
    $request->localityName = 'praesentium';
    $request->locationDescriptor = GetAddressesOutputFormatLocationDescriptorEnum::ROUTING_POINT;
    $request->matchPrecision = 'ipsa';
    $request->matchPrecisionNot = 'omnis';
    $request->maxDistance = 4511.59;
    $request->maxResults = 739264;
    $request->minScore = 19987;
    $request->notLocalities = 'doloremque';
    $request->outputFormat = GetAddressesOutputFormatOutputFormatEnum::KML;
    $request->outputSRS = GetAddressesOutputFormatOutputSrsEnum::THREE_THOUSAND_AND_FIVE;
    $request->parcelPoint = 'maiores';
    $request->provinceCode = 'dicta';
    $request->setBack = 359444;
    $request->siteName = 'dolore';
    $request->streetDirection = GetAddressesOutputFormatStreetDirectionEnum::NE;
    $request->streetName = 'dicta';
    $request->streetQualifier = 'harum';
    $request->streetType = 'enim';
    $request->unitDesignator = GetAddressesOutputFormatUnitDesignatorEnum::UNIT;
    $request->unitNumber = 'commodi';
    $request->unitNumberSuffix = 'repudiandae';

    $response = $sdk->sites->getAddressesOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSitesNearOutputFormat

Represents sites near a given point in the order of closest to farthest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesNearOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesNearOutputFormatLocationDescriptorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesNearOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesNearOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSitesNearOutputFormatRequest();
    $request->brief = false;
    $request->excludeUnits = false;
    $request->locationDescriptor = GetSitesNearOutputFormatLocationDescriptorEnum::ANY;
    $request->maxDistance = 216822;
    $request->maxResults = 692472;
    $request->onlyCivic = false;
    $request->outputFormat = GetSitesNearOutputFormatOutputFormatEnum::KML;
    $request->outputSRS = GetSitesNearOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;
    $request->point = 'pariatur';
    $request->setBack = 265389;

    $response = $sdk->sites->getSitesNearOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSitesNearestOutputFormat

Represents the site nearest a given point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesNearestOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesNearestOutputFormatLocationDescriptorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesNearestOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesNearestOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSitesNearestOutputFormatRequest();
    $request->brief = false;
    $request->excludeUnits = false;
    $request->locationDescriptor = GetSitesNearestOutputFormatLocationDescriptorEnum::PARCEL_POINT;
    $request->maxDistance = 523248;
    $request->onlyCivic = false;
    $request->outputFormat = GetSitesNearestOutputFormatOutputFormatEnum::SHPZ;
    $request->outputSRS = GetSitesNearestOutputFormatOutputSrsEnum::FOUR_THOUSAND_THREE_HUNDRED_AND_TWENTY_SIX;
    $request->point = 'repudiandae';
    $request->setBack = 575947;

    $response = $sdk->sites->getSitesNearestOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSitesWithinOutputFormat

Represents sites within a given area

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesWithinOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesWithinOutputFormatLocationDescriptorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesWithinOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesWithinOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSitesWithinOutputFormatRequest();
    $request->bbox = 'veritatis';
    $request->brief = false;
    $request->excludeUnits = false;
    $request->locationDescriptor = GetSitesWithinOutputFormatLocationDescriptorEnum::ROUTING_POINT;
    $request->maxResults = 277718;
    $request->onlyCivic = false;
    $request->outputFormat = GetSitesWithinOutputFormatOutputFormatEnum::XHTML;
    $request->outputSRS = GetSitesWithinOutputFormatOutputSrsEnum::FOUR_THOUSAND_THREE_HUNDRED_AND_TWENTY_SIX;
    $request->setBack = 667411;

    $response = $sdk->sites->getSitesWithinOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSitesSiteIDOutputFormat

Represents an individual site

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesSiteIDOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesSiteIDOutputFormatLocationDescriptorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesSiteIDOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesSiteIDOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSitesSiteIDOutputFormatRequest();
    $request->brief = false;
    $request->locationDescriptor = GetSitesSiteIDOutputFormatLocationDescriptorEnum::ROUTING_POINT;
    $request->outputFormat = GetSitesSiteIDOutputFormatOutputFormatEnum::JSON;
    $request->outputSRS = GetSitesSiteIDOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_NINE;
    $request->setBack = 716327;
    $request->siteID = 'quibusdam';

    $response = $sdk->sites->getSitesSiteIDOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSitesSiteIDSubsitesOutputFormat

Represents all subsites of a given site

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesSiteIDSubsitesOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesSiteIDSubsitesOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesSiteIDSubsitesOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSitesSiteIDSubsitesOutputFormatRequest();
    $request->brief = false;
    $request->locationDescriptor = GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnum::ACCESS_POINT;
    $request->outputFormat = GetSitesSiteIDSubsitesOutputFormatOutputFormatEnum::GEOJSON;
    $request->outputSRS = GetSitesSiteIDSubsitesOutputFormatOutputSrsEnum::FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
    $request->setBack = 397821;
    $request->siteID = 'cupiditate';

    $response = $sdk->sites->getSitesSiteIDSubsitesOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
