# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [terraintiles](docs/terraintiles/README.md)

* [vectortileTerraintilesGet](docs/terraintiles/README.md#vectortileterraintilesget) - Gets a terrain tile by its tile resource name.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
