# weather

## Overview

#### Hourly forecast values for the following flight-impacting weather elements:
* Cloud Ceiling (CIG)
* Dewpoint Temperature (DEWPT)
* Cloud Cover (SKY)
* Air Temperature (TEMP)
* Visibility (VIS)
* Wind Direction (WINDDIR)
* Wind Speed (WINDSPEED)
* Wind Gust Speed (WINDGUST)

### Available Operations

* [wxByDistanceUsV1WxForecastDistanceQueryPost](#wxbydistanceusv1wxforecastdistancequerypost) - Retrieve forecast values within given distance of location for all requested weather elements and time periods.
* [wxByPolyUsV1WxForecastPolygonQueryPost](#wxbypolyusv1wxforecastpolygonquerypost) - Retrieve forecast values within given GeoJSON polygon for all requested weather elements and time periods.
* [wxByRouteUsV1WxForecastRouteQueryPost](#wxbyrouteusv1wxforecastroutequerypost) - Retrieve forecast values along a route for all requested weather elements and time periods.

## wxByDistanceUsV1WxForecastDistanceQueryPost

Retrieve forecast values for selected weather elements and time period. Request body parameters are:
* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
* distance:  distance in meters (max allowed value is 25000)
* wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are "CIG", "DEWPT", "SKY", "TEMP", "VIS", "WINDDIR", "WINDGUST", "WINDSPEED".
* hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.


The response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area,
properties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows:
* CIG: meters AGL
* DEWPT: degrees Celsius
* SKY: % cloud cover
* TEMP: degrees Celsius
* VIS: meters
* WINDDIR: degrees true
* WINDGUST: meters/sec
* WINDSPEED: meters/sec

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WxByDistanceUsV1WxForecastDistanceQueryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\WxByDistance;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WxByDistanceUsV1WxForecastDistanceQueryPostRequest();
    $request->wxByDistance = new WxByDistance();
    $request->wxByDistance->distance = 93940;
    $request->wxByDistance->hours = 921158;
    $request->wxByDistance->latitude = 83112;
    $request->wxByDistance->longitude = 277718;
    $request->wxByDistance->wxtypes = [
        'consequatur',
        'est',
    ];
    $request->xApiKey = 'quibusdam';

    $response = $sdk->weather->wxByDistanceUsV1WxForecastDistanceQueryPost($request);

    if ($response->wxDistanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## wxByPolyUsV1WxForecastPolygonQueryPost

Retrieve forecast values located within given area for requested weather elements and time period. Request body parameters are:
* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.
* wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are "CIG", "DEWPT", "SKY", "TEMP", "VIS", "WINDDIR", "WINDGUST", "WINDSPEED".
* hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.


The response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area,
properties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows:
* CIG: meters AGL
* DEWPT: degrees Celsius
* SKY: % cloud cover
* TEMP: degrees Celsius
* VIS: meters
* WINDDIR: degrees true
* WINDGUST: meters/sec
* WINDSPEED: meters/sec

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WxByPolyUsV1WxForecastPolygonQueryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\WxByPolygon;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WxByPolyUsV1WxForecastPolygonQueryPostRequest();
    $request->wxByPolygon = new WxByPolygon();
    $request->wxByPolygon->hours = 131797;
    $request->wxByPolygon->poly = [
        'distinctio' => 'quibusdam',
        'labore' => 'modi',
        'qui' => 'aliquid',
    ];
    $request->wxByPolygon->wxtypes = [
        'quos',
        'perferendis',
        'magni',
    ];
    $request->xApiKey = 'assumenda';

    $response = $sdk->weather->wxByPolyUsV1WxForecastPolygonQueryPost($request);

    if ($response->wxPolyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## wxByRouteUsV1WxForecastRouteQueryPost

Retrieve forecast values along route for requested weather elements and time period. Request body parameters are:
* route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.
* wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are "CIG", "DEWPT", "SKY", "TEMP", "VIS", "WINDDIR", "WINDGUST", "WINDSPEED".
* hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.


The response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area,
properties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows:
* CIG: meters AGL
* DEWPT: degrees Celsius
* SKY: % cloud cover
* TEMP: degrees Celsius
* VIS: meters
* WINDDIR: degrees true
* WINDGUST: meters/sec
* WINDSPEED: meters/sec

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WxByRouteUsV1WxForecastRouteQueryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\WxByRoute;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WxByRouteUsV1WxForecastRouteQueryPostRequest();
    $request->wxByRoute = new WxByRoute();
    $request->wxByRoute->hours = 369808;
    $request->wxByRoute->route = [
        'fugit' => 'dolorum',
    ];
    $request->wxByRoute->wxtypes = [
        'tempora',
        'facilis',
        'tempore',
    ];
    $request->xApiKey = 'labore';

    $response = $sdk->weather->wxByRouteUsV1WxForecastRouteQueryPost($request);

    if ($response->wxRouteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
