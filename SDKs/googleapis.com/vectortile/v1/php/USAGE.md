<!-- Start SDK Example Usage -->
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->altitudePrecisionCentimeters = 844266;
    $request->callback = 'unde';
    $request->clientInfoApiClient = 'nulla';
    $request->clientInfoApplicationId = 'corrupti';
    $request->clientInfoApplicationVersion = 'illum';
    $request->clientInfoDeviceModel = 'vel';
    $request->clientInfoOperatingSystem = 'error';
    $request->clientInfoPlatform = VectortileTerraintilesGetClientInfoPlatformEnum::ANDROID;
    $request->clientInfoUserId = 'suscipit';
    $request->enableModeledVolumes = false;
    $request->enablePoliticalFeatures = false;
    $request->enablePrivateRoads = false;
    $request->enableUnclippedBuildings = false;
    $request->fields = 'iure';
    $request->key = 'magnam';
    $request->languageCode = 'debitis';
    $request->maxElevationResolutionCells = 56713;
    $request->minElevationResolutionCells = 963663;
    $request->name = 'Laurie Kreiger';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->regionCode = 'excepturi';
    $request->terrainFormats = [
        VectortileTerraintilesGetTerrainFormatsEnum::SECOND_DERIVATIVE,
        VectortileTerraintilesGetTerrainFormatsEnum::SECOND_DERIVATIVE,
    ];
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

    $response = $sdk->terraintiles->vectortileTerraintilesGet($request);

    if ($response->terrainTile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->