# bikePoint

### Available Operations

* [bikePointGet](#bikepointget) - Gets the bike point with the given id.
* [bikePointGetAll](#bikepointgetall) - Gets all bike point locations. The Place object has an addtionalProperties array which contains the nbBikes, nbDocks and nbSpaces
            numbers which give the status of the BikePoint. A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.
* [bikePointSearch](#bikepointsearch) - Search for bike stations by their name, a bike point's name often contains information about the name of the street
            or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status
            or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on /BikePoint/id.

## bikePointGet

Gets the bike point with the given id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BikePointGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BikePointGetRequest();
    $request->id = 'bd9d8d69-a674-4e0f-867c-c8796ed151a0';

    $response = $sdk->bikePoint->bikePointGet($request);

    if ($response->tflApiPresentationEntitiesPlace !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bikePointGetAll

Gets all bike point locations. The Place object has an addtionalProperties array which contains the nbBikes, nbDocks and nbSpaces
            numbers which give the status of the BikePoint. A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->bikePoint->bikePointGetAll();

    if ($response->tflApiPresentationEntitiesPlaces !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bikePointSearch

Search for bike stations by their name, a bike point's name often contains information about the name of the street
            or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status
            or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on /BikePoint/id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BikePointSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BikePointSearchRequest();
    $request->query = 'ipsam';

    $response = $sdk->bikePoint->bikePointSearch($request);

    if ($response->tflApiPresentationEntitiesPlaces !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
