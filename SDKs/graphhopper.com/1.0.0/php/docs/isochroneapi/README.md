# isochroneAPI

## Overview

Everything about isochrones

### Available Operations

* [getIsochrone](#getisochrone) - Isochrone Endpoint

## getIsochrone

### Example
You can get an example response via:

```
curl "https://graphhopper.com/api/1/isochrone?point=51.131108,12.414551&key=[YOUR_KEY]"
```

Don't forget to replace the placeholder with your own key.

### Introduction
![Isochrone screenshot](./img/isochrone-example.png)

An isochrone of a location is ''a line connecting points at which a vehicle arrives at the same time'', see Wikipedia.
With the same API you can also calculate isodistances, just use the parameter distance_limit instead of time_limit`.

### Use Cases
Some possible areas in which this API may be useful to you:

- real estate analysis
- realtors
- vehicle scheduling
- geomarketing
- reach of electric vehicles
- transport planning
- logistics (distribution and retail network planning)

### API Clients and Examples
See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#isochrone).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIsochroneRequest;
use \OpenAPI\OpenAPI\Models\Shared\VehicleProfileIdEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetIsochroneWeightingEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIsochroneRequest();
    $request->buckets = 437587;
    $request->distanceLimit = 297534;
    $request->point = 'debitis';
    $request->reverseFlow = false;
    $request->timeLimit = 56713;
    $request->vehicle = VehicleProfileIdEnum::SMALL_TRUCK;
    $request->weighting = GetIsochroneWeightingEnum::FASTEST;

    $response = $sdk->isochroneAPI->getIsochrone($request);

    if ($response->isochroneResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
