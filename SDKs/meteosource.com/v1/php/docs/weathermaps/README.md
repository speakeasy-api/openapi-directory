# weatherMaps

### Available Operations

* [mapMapGet](#mapmapget) - Returns PNG weather map for given area and variable

## mapMapGet

## PNG weather forecast maps for given area and variable

### Area specification
There are two ways to specify geographical area you need for your map:
1. Specify `X` and `Y` coordinates and zoom level `Z` of desired tile in <a href="https://www.maptiler.com/google-maps-coordinates-tile-bounds-projection/" rel="nofollow" target="_blank">Google Maps Tile notation</a>.
2. Specify latitude and longitude bounds of the area you want to cover.

### Notes
* The resulting PNG maps are **always** in <a href="https://epsg.io/3857" rel="nofollow" target="_blank">Google Mercator projection (EPSG:3857)</a>.
* As Meteosource only covers areas between latitudes 80° and -80°, you can only request maps within these bounds, when specifying the latitude and longitude boundaries. When specifying the area using Google Maps Tile notation, the regions outside our supported latitudes will be fully transparent.
* The finest resolution is not available for maps covering very large regions. The resulting map will be automatically downscaled in this case, to guarantee high-speed responses.
* Weather maps are only supported for forecasts, not for archive data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MapMapGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\MapMapGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MapMapGetRequest();
    $request->datetime = 'repellendus';
    $request->key = 'sapiente';
    $request->maxLat = 'quo';
    $request->maxLon = 'odit';
    $request->minLat = 'at';
    $request->minLon = 'at';
    $request->tileX = 978619;
    $request->tileY = 473608;
    $request->tileZoom = 799159;
    $request->variable = 'quod';

    $requestSecurity = new MapMapGetSecurity();
    $requestSecurity->apiKeyHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->weatherMaps->mapMapGet($request, $requestSecurity);

    if ($response->mapMapGet200ImagePngString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
