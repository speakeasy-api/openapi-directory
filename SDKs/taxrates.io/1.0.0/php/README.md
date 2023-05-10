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
use \OpenAPI\OpenAPI\Models\Operations\TaxRatesByCountryCodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxRatesByCountryCodeRequest();
    $request->countryCode = 'US';
    $request->date = '2020-09-02';
    $request->domain = 'api.taxrates.io';
    $request->filter = 'corrupti';
    $request->productCodes = 'C010';
    $request->province = 'provident';
    $request->zip = '71642';

    $response = $sdk->v1Tax->taxRatesByCountryCode($request);

    if ($response->taxRatesByCountryCode200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [v1Tax](docs/v1tax/README.md)

* [taxRatesByCountryCode](docs/v1tax/README.md#taxratesbycountrycode) - Tax rates by Country Code
* [taxRatesByIpAddress](docs/v1tax/README.md#taxratesbyipaddress) - Tax rates by IP address

### [v3Tax](docs/v3tax/README.md)

* [allTaxRates](docs/v3tax/README.md#alltaxrates) - All tax rates
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
