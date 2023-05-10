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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGlobalwinescoresLatestRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGlobalwinescoresLatestColorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetGlobalwinescoresLatestOrderingEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGlobalwinescoresLatestRequest();
    $request->authorization = 'corrupti';
    $request->color = GetGlobalwinescoresLatestColorEnum::WHITE;
    $request->isPrimeurs = false;
    $request->limit = 715190;
    $request->lwin = 'quibusdam';
    $request->lwin11 = 'unde';
    $request->offset = 857946;
    $request->ordering = GetGlobalwinescoresLatestOrderingEnum::SCORE;
    $request->vintage = 'illum';
    $request->wineId = [
        623564,
        645894,
    ];

    $response = $sdk->globalWineScore->getGlobalwinescoresLatest($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [globalWineScore](docs/globalwinescore/README.md)

* [getGlobalwinescoresLatest](docs/globalwinescore/README.md#getglobalwinescoreslatest) - List all latest GWS
* [listHistoricalGWS](docs/globalwinescore/README.md#listhistoricalgws) - List all historical GWS
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
