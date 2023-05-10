# copyrights

### Available Operations

* [getMapVersionNumberCopyrightsFormat](#getmapversionnumbercopyrightsformat) - Copyrights whole world
* [getMapVersionNumberCopyrightsCaptionFormat](#getmapversionnumbercopyrightscaptionformat) - Captions
* [getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat](#getmapversionnumbercopyrightsminlonminlatmaxlonmaxlatformat) - Copyrights bounding box
* [getMapVersionNumberCopyrightsZoomXYFormat](#getmapversionnumbercopyrightszoomxyformat) - Copyrights tile

## getMapVersionNumberCopyrightsFormat

The Copyrights API returns copyright information for
the Maps API Raster Tile Service in JSON, JSONP, or XML format.
This call returns copyright information for the whole world.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberCopyrightsFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberCopyrightsFormatFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberCopyrightsFormatVersionNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMapVersionNumberCopyrightsFormatRequest();
    $request->callback = 'distinctio';
    $request->format = GetMapVersionNumberCopyrightsFormatFormatEnum::XML;
    $request->versionNumber = GetMapVersionNumberCopyrightsFormatVersionNumberEnum::ONE;

    $response = $sdk->copyrights->getMapVersionNumberCopyrightsFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMapVersionNumberCopyrightsCaptionFormat

This API returns copyright captions for the map service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberCopyrightsCaptionFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberCopyrightsCaptionFormatFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberCopyrightsCaptionFormatVersionNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMapVersionNumberCopyrightsCaptionFormatRequest();
    $request->callback = 'unde';
    $request->format = GetMapVersionNumberCopyrightsCaptionFormatFormatEnum::XML;
    $request->versionNumber = GetMapVersionNumberCopyrightsCaptionFormatVersionNumberEnum::ONE;

    $response = $sdk->copyrights->getMapVersionNumberCopyrightsCaptionFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat

The Copyrights API returns copyright information for
the Maps API Raster Tile Service in JSON, JSONP, or XML format.
This call returns copyright information for a specific bounding box.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatVersionNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest();
    $request->callback = 'corrupti';
    $request->format = GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum::XML;
    $request->maxLat = 4236.55;
    $request->maxLon = 6235.64;
    $request->minLat = 6458.94;
    $request->minLon = 3843.82;
    $request->versionNumber = GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatVersionNumberEnum::ONE;

    $response = $sdk->copyrights->getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMapVersionNumberCopyrightsZoomXYFormat

The Copyrights API returns copyright information for
the Maps API Raster Tile Service in JSON, JSONP, or XML format.
This call returns copyright information for the a specific map tile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberCopyrightsZoomXYFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberCopyrightsZoomXYFormatVersionNumberEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberCopyrightsZoomXYFormatZoomEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMapVersionNumberCopyrightsZoomXYFormatRequest();
    $request->x = 437587;
    $request->y = 297534;
    $request->callback = 'debitis';
    $request->format = GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum::JSON;
    $request->versionNumber = GetMapVersionNumberCopyrightsZoomXYFormatVersionNumberEnum::ONE;
    $request->zoom = GetMapVersionNumberCopyrightsZoomXYFormatZoomEnum::EIGHTEEN;

    $response = $sdk->copyrights->getMapVersionNumberCopyrightsZoomXYFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
