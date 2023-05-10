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
use \OpenAPI\OpenAPI\Models\Shared\NumberDetails;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NumberDetails();
    $request->country = 'GB';
    $request->msisdn = '447700900000';
    $request->targetApiKey = '1a2345b7';

    $response = $sdk->buyANumber($request);

    if ($response->response !== null) {
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

* [buyANumber](docs/sdk/README.md#buyanumber) - Buy a number
* [cancelANumber](docs/sdk/README.md#cancelanumber) - Cancel a number
* [getAvailableNumbers](docs/sdk/README.md#getavailablenumbers) - Search available numbers
* [getOwnedNumbers](docs/sdk/README.md#getownednumbers) - List the numbers you own
* [updateANumber](docs/sdk/README.md#updateanumber) - Update a number
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
