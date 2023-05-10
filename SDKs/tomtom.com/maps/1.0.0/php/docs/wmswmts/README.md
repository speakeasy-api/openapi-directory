# wmsWmts

### Available Operations

* [getCapabilities](#getcapabilities) - GetCapabilities
* [getMap](#getmap) - GetMap
* [getMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXml](#getmapversionnumberwmtskeywmtsversionwmtscapabilitiesxml) - WMTS

## getCapabilities

The GetCapabilities call is part of TomTom's implementation of version 1.1.1
the Web Map Service (WMS). It provides descriptions of the other calls
that are available in the implementation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCapabilitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCapabilitiesRequestEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCapabilitiesServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCapabilitiesVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCapabilitiesVersionNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCapabilitiesRequest();
    $request->request = GetCapabilitiesRequestEnum::GET_CAPABILITIES;
    $request->service = GetCapabilitiesServiceEnum::WMS;
    $request->version = GetCapabilitiesVersionEnum::ONE11;
    $request->versionNumber = GetCapabilitiesVersionNumberEnum::ONE;

    $response = $sdk->wmsWmts->getCapabilities($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMap

The GetMap call implements the Web Map Service 1.1.1 standard
to access TomTom raster map tiles. This service is described
in the response to the GetCapabilities API call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMapRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMapFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapLayersEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapRequestEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapSrsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapStylesEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMapRequest();
    $request->bbox = 'maiores';
    $request->format = GetMapFormatEnum::IMAGE_JPEG;
    $request->height = 799159;
    $request->layers = GetMapLayersEnum::BASIC;
    $request->request = GetMapRequestEnum::GET_MAP;
    $request->service = GetMapServiceEnum::WMS;
    $request->srs = GetMapSrsEnum::EPSG4326;
    $request->styles = GetMapStylesEnum::UNKNOWN;
    $request->version = GetMapVersionEnum::ONE11;
    $request->versionNumber = GetMapVersionNumberEnum::ONE;
    $request->width = 461479;

    $response = $sdk->wmsWmts->getMap($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXml

The WMTS GetCapabilities call implements version 1.0.0 of
the <a href="http://www.opengeospatial.org/standards/wmts">Web Map Tile Service</a>
(WMTS) standard. It returns metadata that allows compatible calling systems to construct
calls to TomTom's raster map tile service. See the
<a href="/maps-api/maps-api-documentation-raster/wmts">documentation</a>
for more information on WMTS.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlVersionNumberEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlWMTSVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlRequest();
    $request->key = 'totam';
    $request->versionNumber = GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlVersionNumberEnum::ONE;
    $request->wmtsVersion = GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlWMTSVersionEnum::ONE00;

    $response = $sdk->wmsWmts->getMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXml($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
