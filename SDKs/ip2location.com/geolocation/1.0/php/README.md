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
use \OpenAPI\OpenAPI\Models\Operations\GetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAddonEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetLangEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPackageEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->addon = [
        GetAddonEnum::GEOTARGETING,
        GetAddonEnum::COUNTRY_GROUPINGS,
        GetAddonEnum::COUNTRY_GROUPINGS,
    ];
    $request->format = GetFormatEnum::XML;
    $request->ip = '8.8.8.8';
    $request->key = 'nulla';
    $request->lang = GetLangEnum::JA;
    $request->package = GetPackageEnum::WS22;

    $response = $sdk->get($request);

    if ($response->get200ApplicationJSONString !== null) {
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

* [get](docs/sdk/README.md#get) - Get geolocation information via IP address
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
