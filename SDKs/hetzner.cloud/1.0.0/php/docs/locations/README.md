# locations

## Overview

Datacenters are organized by Locations. Datacenters in the same Location are connected with very low latency links.

### Available Operations

* [getLocations](#getlocations) - Get all Locations
* [getLocationsId](#getlocationsid) - Get a Location

## getLocations

Returns all Location objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLocationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLocationsRequest();
    $request->name = 'Jean Buckridge';

    $response = $sdk->locations->getLocations($request);

    if ($response->getLocations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLocationsId

Returns a specific Location object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLocationsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLocationsIdRequest();
    $request->id = 813798;

    $response = $sdk->locations->getLocationsId($request);

    if ($response->getLocationsId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
