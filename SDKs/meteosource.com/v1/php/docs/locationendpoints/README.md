# locationEndpoints

### Available Operations

* [findPlacesFindPlacesGet](#findplacesfindplacesget) - Search for places. Complete words required.
* [findPlacesPrefixFindPlacesPrefixGet](#findplacesprefixfindplacesprefixget) - Prefix search for places. Useful for autocomplete forms.
* [nearestPlaceNearestPlaceGet](#nearestplacenearestplaceget) - Returns the nearest named location for a given GPS coordinates.

## findPlacesFindPlacesGet

## Search for places

You can use this endpoint to obtain `place_id` of the location you want, to be used in `point` endpoint.
The response also contains detailed information about the location, such as coordinates, timezone and the country the place belongs to.

Unlike the `/find_place_prefix` endpoint, complete words are required here. You can search for cities,
mountains, lakes, countries, ZIP codes, etc. The response can contain multiple places, sorted by relevance.
You can then identify the one you want by coordinates, country, or the administrative area.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindPlacesFindPlacesGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindPlacesFindPlacesGetLanguageLanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\FindPlacesFindPlacesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindPlacesFindPlacesGetRequest();
    $request->key = 'quibusdam';
    $request->language = FindPlacesFindPlacesGetLanguageLanguageEnum::FR;
    $request->text = 'nulla';

    $requestSecurity = new FindPlacesFindPlacesGetSecurity();
    $requestSecurity->apiKeyHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->locationEndpoints->findPlacesFindPlacesGet($request, $requestSecurity);

    if ($response->findPlacesModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findPlacesPrefixFindPlacesPrefixGet

## Search for places by prefix

You can use this endpoint to obtain `place_id` of the location you want, to be used in `point` endpoint. The response also contains detailed information about the location, such as coordinates, timezone and the country the place belongs to.

Unlike the `/find_places` endpoint, you should only specify the prefix of the place you are looking for. This is particularly useful for autocomplete forms. You can search for cities, mountains, lakes, countries, ZIP codes, etc. The response can contain multiple places, sorted by relevance. You can then identify the one you want by coordinates, country, or the administrative area.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindPlacesPrefixFindPlacesPrefixGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindPlacesPrefixFindPlacesPrefixGetLanguageLanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\FindPlacesPrefixFindPlacesPrefixGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindPlacesPrefixFindPlacesPrefixGetRequest();
    $request->key = 'corrupti';
    $request->language = FindPlacesPrefixFindPlacesPrefixGetLanguageLanguageEnum::PL;
    $request->text = 'vel';

    $requestSecurity = new FindPlacesPrefixFindPlacesPrefixGetSecurity();
    $requestSecurity->apiKeyHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->locationEndpoints->findPlacesPrefixFindPlacesPrefixGet($request, $requestSecurity);

    if ($response->findPlacesModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## nearestPlaceNearestPlaceGet

## Search for nearest place by coordinates

You can use this endpoint to find the nearest place from given coordinates.

*Note: If you specify coordinates of a secluded place (e.g. middle of the ocean), the nearest point can be very far from the coordinates.*

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NearestPlaceNearestPlaceGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\NearestPlaceNearestPlaceGetLanguageLanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\NearestPlaceNearestPlaceGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NearestPlaceNearestPlaceGetRequest();
    $request->key = 'error';
    $request->language = NearestPlaceNearestPlaceGetLanguageLanguageEnum::FR;
    $request->lat = 'suscipit';
    $request->lon = 'iure';

    $requestSecurity = new NearestPlaceNearestPlaceGetSecurity();
    $requestSecurity->apiKeyHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->locationEndpoints->nearestPlaceNearestPlaceGet($request, $requestSecurity);

    if ($response->findPlacesModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
