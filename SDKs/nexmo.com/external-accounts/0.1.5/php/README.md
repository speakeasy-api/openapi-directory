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
use \OpenAPI\OpenAPI\Models\Operations\GetAllAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAllAccountsProviderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAllAccountsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllAccountsRequest();
    $request->pageNumber = 1;
    $request->pageSize = 1;
    $request->provider = GetAllAccountsProviderEnum::VIBER_SERVICE_MSG;

    $requestSecurity = new GetAllAccountsSecurity();
    $requestSecurity->basicAuth->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basicAuth->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->account->getAllAccounts($request, $requestSecurity);

    if ($response->getAllAccounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [account](docs/account/README.md)

* [getAllAccounts](docs/account/README.md#getallaccounts) - Retrieve all accounts you own

### [application](docs/application/README.md)

* [linkApplication](docs/application/README.md#linkapplication) - Link application to an account
* [unliWithoutApplicationnkApplication](docs/application/README.md#unliwithoutapplicationnkapplication) - Unlink application from an account

### [facebookMessenger](docs/facebookmessenger/README.md)

* [createMessengerAccount](docs/facebookmessenger/README.md#createmessengeraccount) - Create a Messenger account
* [deleteMessengerAccount](docs/facebookmessenger/README.md#deletemessengeraccount) - Delete a Messenger account
* [getMessengerAccount](docs/facebookmessenger/README.md#getmessengeraccount) - Retrieve a Messenger account
* [updateMessengerAccount](docs/facebookmessenger/README.md#updatemessengeraccount) - Update a Messenger account

### [viberServiceMessage](docs/viberservicemessage/README.md)

* [getVSMAccount](docs/viberservicemessage/README.md#getvsmaccount) - Retrieve a Viber Service Message account

### [whatsApp](docs/whatsapp/README.md)

* [getWAAccount](docs/whatsapp/README.md#getwaaccount) - Retrieve a Whatsapp account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
