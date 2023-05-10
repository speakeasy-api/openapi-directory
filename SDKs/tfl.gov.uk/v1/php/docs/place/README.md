# place

### Available Operations

* [placeGet](#placeget) - Gets the place with the given id.
* [placeGetAt](#placegetat) - Gets any places of the given type whose geography intersects the given latitude and longitude. In practice this means the Place
            must be polygonal e.g. a BoroughBoundary.
* [placeGetByGeo](#placegetbygeo) - Gets the places that lie within a geographic region. The geographic region of interest can either be specified
            by using a lat/lon geo-point and a radius in metres to return places within the locus defined by the lat/lon of
            its centre or alternatively, by the use of a bounding box defined by the lat/lon of its north-west and south-east corners.
            Optionally filters on type and can strip properties for a smaller payload.
* [placeGetByType](#placegetbytype) - Gets all places of a given type
* [placeGetOverlay](#placegetoverlay) - Gets the place overlay for a given set of co-ordinates and a given width/height.
* [placeGetStreetsByPostCode](#placegetstreetsbypostcode) - Gets the set of streets associated with a post code.
* [placeMetaCategories](#placemetacategories) - Gets a list of all of the available place property categories and keys.
* [placeMetaPlaceTypes](#placemetaplacetypes) - Gets a list of the available types of Place.
* [placeSearch](#placesearch) - Gets all places that matches the given query

## placeGet

Gets the place with the given id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlaceGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlaceGetRequest();
    $request->id = 'ddc69260-1fb5-476b-8d5f-0d30c5fbb258';
    $request->includeChildren = false;

    $response = $sdk->place->placeGet($request);

    if ($response->tflApiPresentationEntitiesPlaces !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## placeGetAt

Gets any places of the given type whose geography intersects the given latitude and longitude. In practice this means the Place
            must be polygonal e.g. a BoroughBoundary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlaceGetAtRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlaceGetAtRequest();
    $request->latPathParameter = 'dignissimos';
    $request->lonPathParameter = 'eaque';
    $request->latQueryParameter = 'quis';
    $request->locationLat = 1999.96;
    $request->locationLon = 1794.9;
    $request->lonQueryParameter = 'perferendis';
    $request->type = [
        'minus',
    ];

    $response = $sdk->place->placeGetAt($request);

    if ($response->systemObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## placeGetByGeo

Gets the places that lie within a geographic region. The geographic region of interest can either be specified
            by using a lat/lon geo-point and a radius in metres to return places within the locus defined by the lat/lon of
            its centre or alternatively, by the use of a bounding box defined by the lat/lon of its north-west and south-east corners.
            Optionally filters on type and can strip properties for a smaller payload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlaceGetByGeoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlaceGetByGeoRequest();
    $request->activeOnly = false;
    $request->categories = [
        'dolor',
        'vero',
    ];
    $request->includeChildren = false;
    $request->numberOfPlacesToReturn = 345352;
    $request->placeGeoLat = 9441.2;
    $request->placeGeoLon = 9280.82;
    $request->placeGeoNeLat = 6082.53;
    $request->placeGeoNeLon = 7044.15;
    $request->placeGeoSwLat = 5966.56;
    $request->placeGeoSwLon = 318.38;
    $request->radius = 7836.45;
    $request->type = [
        'blanditiis',
    ];

    $response = $sdk->place->placeGetByGeo($request);

    if ($response->tflApiPresentationEntitiesStopPoints !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## placeGetByType

Gets all places of a given type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlaceGetByTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlaceGetByTypeRequest();
    $request->activeOnly = false;
    $request->types = [
        'eaque',
        'occaecati',
        'rerum',
    ];

    $response = $sdk->place->placeGetByType($request);

    if ($response->tflApiPresentationEntitiesPlaces !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## placeGetOverlay

Gets the place overlay for a given set of co-ordinates and a given width/height.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlaceGetOverlayRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlaceGetOverlayRequest();
    $request->latPathParameter = 'adipisci';
    $request->lonPathParameter = 'asperiores';
    $request->height = 934214;
    $request->latQueryParameter = 'modi';
    $request->locationLat = 6139.66;
    $request->locationLon = 6790.91;
    $request->lonQueryParameter = 'deleniti';
    $request->type = [
        'provident',
        'nobis',
        'libero',
        'delectus',
    ];
    $request->width = 311945;
    $request->z = 554242;

    $response = $sdk->place->placeGetOverlay($request);

    if ($response->systemObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## placeGetStreetsByPostCode

Gets the set of streets associated with a post code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlaceGetStreetsByPostCodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlaceGetStreetsByPostCodeRequest();
    $request->postcodePathParameter = 'aliquid';
    $request->postcodeInputPostcode = 'dolorem';
    $request->postcodeQueryParameter = 'dolorem';

    $response = $sdk->place->placeGetStreetsByPostCode($request);

    if ($response->systemObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## placeMetaCategories

Gets a list of all of the available place property categories and keys.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->place->placeMetaCategories();

    if ($response->tflApiPresentationEntitiesPlaceCategories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## placeMetaPlaceTypes

Gets a list of the available types of Place.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->place->placeMetaPlaceTypes();

    if ($response->tflApiPresentationEntitiesPlaceCategories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## placeSearch

Gets all places that matches the given query

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlaceSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlaceSearchRequest();
    $request->name = 'Norma Erdman';
    $request->types = [
        'voluptate',
        'dignissimos',
        'reiciendis',
    ];

    $response = $sdk->place->placeSearch($request);

    if ($response->tflApiPresentationEntitiesPlaces !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
