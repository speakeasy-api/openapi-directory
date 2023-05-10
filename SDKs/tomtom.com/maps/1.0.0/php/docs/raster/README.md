# raster

### Available Operations

* [getMapVersionNumberStaticimage](#getmapversionnumberstaticimage) - Static Image
* [getMapVersionNumberTileLayerStyleZoomXYFormat](#getmapversionnumbertilelayerstylezoomxyformat) - Tile

## getMapVersionNumberStaticimage

The Static Image service renders a rectangular raster image
in the style, size, and zoom level specified. The image can be requested
using either a center point plus width and height or a bounding box.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberStaticimageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberStaticimageFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberStaticimageLayerEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberStaticimageStyleEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberStaticimageVersionNumberEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberStaticimageViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberStaticimageZoomEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMapVersionNumberStaticimageRequest();
    $request->bbox = 'tempora';
    $request->center = 'suscipit';
    $request->format = GetMapVersionNumberStaticimageFormatEnum::JPG;
    $request->height = 791725;
    $request->layer = GetMapVersionNumberStaticimageLayerEnum::LABELS;
    $request->style = GetMapVersionNumberStaticimageStyleEnum::NIGHT;
    $request->versionNumber = GetMapVersionNumberStaticimageVersionNumberEnum::ONE;
    $request->view = GetMapVersionNumberStaticimageViewEnum::UNIFIED;
    $request->width = 568045;
    $request->zoom = GetMapVersionNumberStaticimageZoomEnum::NINE;

    $response = $sdk->raster->getMapVersionNumberStaticimage($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMapVersionNumberTileLayerStyleZoomXYFormat

The Maps API Raster Service delivers raster tiles, which are representations of square sections of map data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberTileLayerStyleZoomXYFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberTileLayerStyleZoomXYFormatTileSizeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberTileLayerStyleZoomXYFormatVersionNumberEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberTileLayerStyleZoomXYFormatZoomEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMapVersionNumberTileLayerStyleZoomXYFormatRequest();
    $request->x = 925597;
    $request->y = 836079;
    $request->format = GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum::JPG;
    $request->layer = GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum::HYBRID;
    $request->style = GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum::MAIN;
    $request->tileSize = GetMapVersionNumberTileLayerStyleZoomXYFormatTileSizeEnum::FIVE_HUNDRED_AND_TWELVE;
    $request->versionNumber = GetMapVersionNumberTileLayerStyleZoomXYFormatVersionNumberEnum::ONE;
    $request->view = GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum::UNIFIED;
    $request->zoom = GetMapVersionNumberTileLayerStyleZoomXYFormatZoomEnum::EIGHT;

    $response = $sdk->raster->getMapVersionNumberTileLayerStyleZoomXYFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
