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
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2ListFederationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2ListFederationsRequest();
    $request->xRapidApiKey = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';

    $response = $sdk->getApiV2ListFederations($request);

    if ($response->getApiV2ListFederations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [getApiV2ListFederations](docs/sdk/README.md#getapiv2listfederations) - Returns an array of all the available federations.
* [getApiV2ListMarkets](docs/sdk/README.md#getapiv2listmarkets) - Returns an array of all the supported prediction markets
* [getApiV2PerformanceStats](docs/sdk/README.md#getapiv2performancestats) - Returns predictions accuracy in the last 1, 7, 14, 30 days.
* [getApiV2Predictions](docs/sdk/README.md#getapiv2predictions) - This endpoint returns by default the next non-expired football predictions. URL parameters can be specified to show specific date in the past or future or to filter by federation and prediction market name.
* [getApiV2PredictionsId](docs/sdk/README.md#getapiv2predictionsid) - Returns all predictions available for a match id.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
