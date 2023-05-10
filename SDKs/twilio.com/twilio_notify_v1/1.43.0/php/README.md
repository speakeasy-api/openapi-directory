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
use \OpenAPI\OpenAPI\Models\Operations\CreateBindingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBindingCreateBindingRequest;
use \OpenAPI\OpenAPI\Models\Shared\BindingEnumBindingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBindingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBindingRequest();
    $request->requestBody = new CreateBindingCreateBindingRequest();
    $request->requestBody->address = '5786 Little Streets';
    $request->requestBody->bindingType = BindingEnumBindingTypeEnum::SMS;
    $request->requestBody->credentialSid = 'error';
    $request->requestBody->endpoint = 'deserunt';
    $request->requestBody->identity = 'suscipit';
    $request->requestBody->notificationProtocolVersion = 'iure';
    $request->requestBody->tag = [
        'debitis',
        'ipsa',
    ];
    $request->serviceSid = 'delectus';

    $requestSecurity = new CreateBindingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createBinding($request, $requestSecurity);

    if ($response->notifyV1ServiceBinding !== null) {
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

* [createBinding](docs/sdk/README.md#createbinding)
* [createCredential](docs/sdk/README.md#createcredential)
* [createNotification](docs/sdk/README.md#createnotification)
* [createService](docs/sdk/README.md#createservice)
* [deleteBinding](docs/sdk/README.md#deletebinding)
* [deleteCredential](docs/sdk/README.md#deletecredential)
* [deleteService](docs/sdk/README.md#deleteservice)
* [fetchBinding](docs/sdk/README.md#fetchbinding)
* [fetchCredential](docs/sdk/README.md#fetchcredential)
* [fetchService](docs/sdk/README.md#fetchservice)
* [listBinding](docs/sdk/README.md#listbinding)
* [listCredential](docs/sdk/README.md#listcredential)
* [listService](docs/sdk/README.md#listservice)
* [updateCredential](docs/sdk/README.md#updatecredential)
* [updateService](docs/sdk/README.md#updateservice)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
