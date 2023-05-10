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
use \OpenAPI\OpenAPI\Models\Operations\KeysApiCurrentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeysApiCurrentRequest();
    $request->serial = 'corrupti';

    $response = $sdk->keysApi->keysApiCurrent($request);

    if ($response->keysApiCurrent200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [keysApi](docs/keysapi/README.md)

* [keysApiCurrent](docs/keysapi/README.md#keysapicurrent)
* [keysApiCustom](docs/keysapi/README.md#keysapicustom)
* [keysApiExpiry](docs/keysapi/README.md#keysapiexpiry)
* [keysApiFind](docs/keysapi/README.md#keysapifind)

### [productsApi](docs/productsapi/README.md)

* [productsApiCount](docs/productsapi/README.md#productsapicount)
* [productsApiDeleteProduct](docs/productsapi/README.md#productsapideleteproduct)
* [productsApiDeleteProduct2](docs/productsapi/README.md#productsapideleteproduct2)
* [productsApiFind](docs/productsapi/README.md#productsapifind)
* [productsApiList](docs/productsapi/README.md#productsapilist)
* [productsApiPatchProduct](docs/productsapi/README.md#productsapipatchproduct)
* [productsApiPatchProduct2](docs/productsapi/README.md#productsapipatchproduct2)
* [productsApiSave](docs/productsapi/README.md#productsapisave)

### [subscriptionsApi](docs/subscriptionsapi/README.md)

* [subscriptionsApiCount](docs/subscriptionsapi/README.md#subscriptionsapicount)
* [subscriptionsApiDeleteSubscription](docs/subscriptionsapi/README.md#subscriptionsapideletesubscription)
* [subscriptionsApiDeleteSubscription2](docs/subscriptionsapi/README.md#subscriptionsapideletesubscription2)
* [subscriptionsApiDisable](docs/subscriptionsapi/README.md#subscriptionsapidisable)
* [subscriptionsApiDisable2](docs/subscriptionsapi/README.md#subscriptionsapidisable2)
* [subscriptionsApiEnable](docs/subscriptionsapi/README.md#subscriptionsapienable)
* [subscriptionsApiEnable2](docs/subscriptionsapi/README.md#subscriptionsapienable2)
* [subscriptionsApiFind](docs/subscriptionsapi/README.md#subscriptionsapifind)
* [subscriptionsApiList](docs/subscriptionsapi/README.md#subscriptionsapilist)
* [subscriptionsApiPutSubscription](docs/subscriptionsapi/README.md#subscriptionsapiputsubscription)
* [subscriptionsApiPutSubscription2](docs/subscriptionsapi/README.md#subscriptionsapiputsubscription2)
* [subscriptionsApiSave](docs/subscriptionsapi/README.md#subscriptionsapisave)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
