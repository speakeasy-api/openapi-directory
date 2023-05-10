# geocodingAPI

## Overview

Everything about geocoding

### Available Operations

* [getGeocode](#getgeocode) - Geocoding Endpoint

## getGeocode


### Introduction

![Geocoding Example](./img/geocoding-example.png)

_Geocoding_ describes the process of transforming an textual address representation to a coordinate (`latitude,longitude`).
For example the conversion from `Berlin` to `52.5170365,13.3888599`.

_Reverse geocoding_ converts a coordinate to a textual address representation or place name. Find out more about Geocoding itself on [Wikipedia](http://en.wikipedia.org/wiki/Geocoding).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGeocodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGeocodeRequest();
    $request->debug = false;
    $request->limit = 847252;
    $request->locale = 'vel';
    $request->point = 'error';
    $request->provider = 'deserunt';
    $request->q = 'suscipit';
    $request->reverse = false;

    $response = $sdk->geocodingAPI->getGeocode($request);

    if ($response->geocodingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
