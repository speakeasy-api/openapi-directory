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
use \OpenAPI\OpenAPI\Models\Operations\ChangePasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\Secret;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangePasswordRequest();
    $request->secret = new Secret();
    $request->secret->secret = 'P@55w0rd+';
    $request->shopperId = 'corrupti';

    $response = $sdk->v1->changePassword($request);

    if ($response->shopperId !== null) {
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

* [changePassword](docs/v1/README.md#changepassword) - Set subaccount's password
* [createSubaccountJson](docs/v1/README.md#createsubaccountjson) - Create a Subaccount owned by the authenticated Reseller
* [createSubaccountRaw](docs/v1/README.md#createsubaccountraw) - Create a Subaccount owned by the authenticated Reseller
* [delete](docs/v1/README.md#delete) - Request the deletion of a shopper profile
* [get](docs/v1/README.md#get) - Get details for the specified Shopper
* [getStatus](docs/v1/README.md#getstatus) - Get details for the specified Shopper
* [updateJson](docs/v1/README.md#updatejson) - Update details for the specified Shopper
* [updateRaw](docs/v1/README.md#updateraw) - Update details for the specified Shopper
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
