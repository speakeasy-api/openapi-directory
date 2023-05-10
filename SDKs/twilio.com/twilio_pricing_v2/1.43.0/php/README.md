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
use \OpenAPI\OpenAPI\Models\Operations\FetchTrunkingCountryRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTrunkingCountrySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTrunkingCountryRequest();
    $request->isoCountry = 'corrupti';

    $requestSecurity = new FetchTrunkingCountrySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->fetchTrunkingCountry($request, $requestSecurity);

    if ($response->pricingV2TrunkingCountryInstance !== null) {
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

* [fetchTrunkingCountry](docs/sdk/README.md#fetchtrunkingcountry) - Fetch a specific Country.
* [fetchTrunkingNumber](docs/sdk/README.md#fetchtrunkingnumber) - Fetch pricing information for a specific destination and, optionally, origination phone number.
* [fetchVoiceCountry](docs/sdk/README.md#fetchvoicecountry) - Fetch a specific Country.
* [fetchVoiceNumber](docs/sdk/README.md#fetchvoicenumber) - Fetch pricing information for a specific destination and, optionally, origination phone number.
* [listTrunkingCountry](docs/sdk/README.md#listtrunkingcountry)
* [listVoiceCountry](docs/sdk/README.md#listvoicecountry)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
