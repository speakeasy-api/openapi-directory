# neo

## Overview

Operations with NearEarthObjects

### Available Operations

* [browseNearEarthObjects](#browsenearearthobjects) - Browse the Near Earth Objects service
* [retrieveNearEarthObjectById](#retrievenearearthobjectbyid) - Find Near Earth Objects by id

## browseNearEarthObjects

Retieve a paginated list of Near Earth Objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BrowseNearEarthObjectsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BrowseNearEarthObjectsRequest();
    $request->page = 715190;
    $request->size = 844266;

    $response = $sdk->neo->browseNearEarthObjects($request);

    if ($response->nearEarthObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveNearEarthObjectById

Retrieve a Near Earth Objects with a given id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveNearEarthObjectByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveNearEarthObjectByIdRequest();
    $request->asteroidId = 'unde';

    $response = $sdk->neo->retrieveNearEarthObjectById($request);

    if ($response->nearEarthObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
