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
use \OpenAPI\OpenAPI\Models\Operations\GetAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssetRequest();
    $request->aliases = false;
    $request->assetId = 'corrupti';

    $requestSecurity = new GetAssetSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->asset->getAsset($request, $requestSecurity);

    if ($response->getAsset200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [asset](docs/asset/README.md)

* [getAsset](docs/asset/README.md#getasset) - Asset Detail
* [getAssetContributors](docs/asset/README.md#getassetcontributors) - Asset Contributors
* [listAssets](docs/asset/README.md#listassets) - Asset Collection

### [catalogue](docs/catalogue/README.md)

* [getCatalogue](docs/catalogue/README.md#getcatalogue) - Catalogue Detail
* [getCatalogueAsset](docs/catalogue/README.md#getcatalogueasset) - Catalogue Asset Collection
* [getCatalogueAssetDetail](docs/catalogue/README.md#getcatalogueassetdetail) - Catalogue Asset Detail
* [listCatalogues](docs/catalogue/README.md#listcatalogues) - Catalogue Collection

### [channel](docs/channel/README.md)

* [getChannel](docs/channel/README.md#getchannel) - Channel Detail
* [listChannels](docs/channel/README.md#listchannels) - Channel Collection

### [contributor](docs/contributor/README.md)

* [getContributor](docs/contributor/README.md#getcontributor) - Contributor Detail
* [listContributor](docs/contributor/README.md#listcontributor) - Contributor Collection

### [feature](docs/feature/README.md)

* [getFeature](docs/feature/README.md#getfeature) - Feature Detail
* [listFeatureTypes](docs/feature/README.md#listfeaturetypes) - Feature Type Collection
* [listFeatures](docs/feature/README.md#listfeatures) - Feature Collection

### [platform](docs/platform/README.md)

* [getPlatform](docs/platform/README.md#getplatform) - Platform Detail
* [listPlatformRegions](docs/platform/README.md#listplatformregions) - Platform Region Collection
* [listPlatforms](docs/platform/README.md#listplatforms) - Platform Collection

### [schedule](docs/schedule/README.md)

* [listSchedule](docs/schedule/README.md#listschedule) - Schedule Collection
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
