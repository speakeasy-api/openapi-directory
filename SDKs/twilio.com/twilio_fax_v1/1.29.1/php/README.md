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
use \OpenAPI\OpenAPI\Models\Operations\DeleteFaxRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFaxSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFaxRequest();
    $request->sid = 'corrupti';

    $requestSecurity = new DeleteFaxSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->deleteFax($request, $requestSecurity);

    if ($response->statusCode === 200) {
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

* [deleteFax](docs/sdk/README.md#deletefax) - Delete a specific fax and its associated media.
* [deleteFaxMedia](docs/sdk/README.md#deletefaxmedia) - Delete a specific fax media instance.
* [fetchFax](docs/sdk/README.md#fetchfax) - Fetch a specific fax.
* [fetchFaxMedia](docs/sdk/README.md#fetchfaxmedia) - Fetch a specific fax media instance.
* [listFax](docs/sdk/README.md#listfax) - Retrieve a list of all faxes.
* [listFaxMedia](docs/sdk/README.md#listfaxmedia) - Retrieve a list of all fax media instances for the specified fax.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
