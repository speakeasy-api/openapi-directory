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
use \OpenAPI\OpenAPI\Models\Operations\GetRenderRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRenderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRenderRequest();
    $request->id = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';

    $requestSecurity = new GetRenderSecurity();
    $requestSecurity->developerKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->edit->getRender($request, $requestSecurity);

    if ($response->renderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [edit](docs/edit/README.md)

* [getRender](docs/edit/README.md#getrender) - Get Render Status
* [postRender](docs/edit/README.md#postrender) - Render Asset

### [serve](docs/serve/README.md)

* [deleteAsset](docs/serve/README.md#deleteasset) - Delete Asset
* [getAsset](docs/serve/README.md#getasset) - Get Asset
* [getAssetByRenderId](docs/serve/README.md#getassetbyrenderid) - Get Asset by Render ID
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
