# vector

### Available Operations

* [getMapVersionNumberTileLayerStyleZoomXYPbf](#getmapversionnumbertilelayerstylezoomxypbf) - Tile

## getMapVersionNumberTileLayerStyleZoomXYPbf

The Maps API Vector Service delivers vector tiles, which are representations of square sections of map data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberTileLayerStyleZoomXYPbfRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberTileLayerStyleZoomXYPbfVersionNumberEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberTileLayerStyleZoomXYPbfZoomEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMapVersionNumberTileLayerStyleZoomXYPbfRequest();
    $request->x = 832620;
    $request->y = 957156;
    $request->language = 'quo';
    $request->layer = GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum::BASIC;
    $request->style = GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum::MAIN;
    $request->versionNumber = GetMapVersionNumberTileLayerStyleZoomXYPbfVersionNumberEnum::ONE;
    $request->view = GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum::IN;
    $request->zoom = GetMapVersionNumberTileLayerStyleZoomXYPbfZoomEnum::TWENTY;

    $response = $sdk->vector->getMapVersionNumberTileLayerStyleZoomXYPbf($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
