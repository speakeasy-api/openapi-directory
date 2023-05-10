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
use \OpenAPI\OpenAPI\Models\Operations\GroundhogRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroundhogRequest();
    $request->slug = 'corrupti';

    $response = $sdk->groundhogs->groundhog($request);

    if ($response->groundhog200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [groundhogs](docs/groundhogs/README.md)

* [groundhog](docs/groundhogs/README.md#groundhog) - Get a groundhog by slug
* [groundhogs](docs/groundhogs/README.md#groundhogs) - Get all groundhogs

### [info](docs/info/README.md)

* [root](docs/info/README.md#root) - Root
* [spec](docs/info/README.md#spec) - Get JSON schema

### [predictions](docs/predictions/README.md)

* [predictions](docs/predictions/README.md#predictions) - Get predictions for a given year
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
