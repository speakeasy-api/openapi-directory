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
use \OpenAPI\OpenAPI\Models\Shared\AftermarketListingExpiryCreate;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new AftermarketListingExpiryCreate(),
        new AftermarketListingExpiryCreate(),
        new AftermarketListingExpiryCreate(),
    ]

    $response = $sdk->v1->addExpiryListingsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [v1](docs/v1/README.md)

* [addExpiryListingsJson](docs/v1/README.md#addexpirylistingsjson) - Add expiry listings into GoDaddy Auction
* [addExpiryListingsRaw](docs/v1/README.md#addexpirylistingsraw) - Add expiry listings into GoDaddy Auction
* [deleteListings](docs/v1/README.md#deletelistings) - Remove listings from GoDaddy Auction
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
