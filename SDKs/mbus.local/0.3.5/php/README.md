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
use \OpenAPI\OpenAPI\Models\Shared\BaudrateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->address = '48';
    $request->baudrate = BaudrateEnum::TWO_THOUSAND_FOUR_HUNDRED;
    $request->device = 'ttyAMA0';

    $response = $sdk->get($request);

    if ($response->mbusData !== null) {
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

* [get](docs/sdk/README.md#get) - Gets data from the slave identified by {address}
* [getMulti](docs/sdk/README.md#getmulti) - Gets data from the slave identified by {address}, and supports multiple responses from the slave
* [hat](docs/sdk/README.md#hat) - Gets Raspberry Pi Hat information
* [hatOff](docs/sdk/README.md#hatoff) - Turns off power to the M-Bus
* [hatOn](docs/sdk/README.md#haton) - Turns on power to the M-Bus
* [mbusApi](docs/sdk/README.md#mbusapi) - Returns this API specification
* [scan](docs/sdk/README.md#scan) - Scan the specified device for slaves
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
