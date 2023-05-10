# terraintiles

### Available Operations

* [vectortileTerraintilesGet](#vectortileterraintilesget) - Gets a terrain tile by its tile resource name.

## vectortileTerraintilesGet

Gets a terrain tile by its tile resource name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VectortileTerraintilesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VectortileTerraintilesGetClientInfoPlatformEnum;
use \OpenAPI\OpenAPI\Models\Operations\VectortileTerraintilesGetTerrainFormatsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VectortileTerraintilesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->altitudePrecisionCentimeters = 368241;
    $request->callback = 'repellendus';
    $request->clientInfoApiClient = 'sapiente';
    $request->clientInfoApplicationId = 'quo';
    $request->clientInfoApplicationVersion = 'odit';
    $request->clientInfoDeviceModel = 'at';
    $request->clientInfoOperatingSystem = 'at';
    $request->clientInfoPlatform = VectortileTerraintilesGetClientInfoPlatformEnum::WEB_GL;
    $request->clientInfoUserId = 'molestiae';
    $request->enableModeledVolumes = false;
    $request->enablePoliticalFeatures = false;
    $request->enablePrivateRoads = false;
    $request->enableUnclippedBuildings = false;
    $request->fields = 'quod';
    $request->key = 'quod';
    $request->languageCode = 'esse';
    $request->maxElevationResolutionCells = 520478;
    $request->minElevationResolutionCells = 780529;
    $request->name = 'Samuel Reichel';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->regionCode = 'hic';
    $request->terrainFormats = [
        VectortileTerraintilesGetTerrainFormatsEnum::FIRST_DERIVATIVE,
        VectortileTerraintilesGetTerrainFormatsEnum::TERRAIN_FORMAT_UNKNOWN,
        VectortileTerraintilesGetTerrainFormatsEnum::FIRST_DERIVATIVE,
        VectortileTerraintilesGetTerrainFormatsEnum::FIRST_DERIVATIVE,
    ];
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'qui';

    $response = $sdk->terraintiles->vectortileTerraintilesGet($request);

    if ($response->terrainTile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
