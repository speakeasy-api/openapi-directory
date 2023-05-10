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
use \OpenAPI\OpenAPI\Models\Operations\CreateSubAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\NewSubaccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSubAccountRequest();
    $request->newSubaccountRequest = new NewSubaccountRequest();
    $request->newSubaccountRequest->name = 'Subaccount department A';
    $request->newSubaccountRequest->secret = 'Password123';
    $request->newSubaccountRequest->usePrimaryAccountBalance = false;
    $request->apiKey = 'corrupti';

    $requestSecurity = new CreateSubAccountSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->subaccountManagement->createSubAccount($request, $requestSecurity);

    if ($response->subaccountCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [subaccountManagement](docs/subaccountmanagement/README.md)

* [createSubAccount](docs/subaccountmanagement/README.md#createsubaccount) - Create subaccount
* [modifySubaccount](docs/subaccountmanagement/README.md#modifysubaccount) - Modify a subaccount
* [retrieveSubaccount](docs/subaccountmanagement/README.md#retrievesubaccount) - Retrieve a subaccount
* [retrieveSubaccountsList](docs/subaccountmanagement/README.md#retrievesubaccountslist) - Retrieve list of subaccounts

### [transfers](docs/transfers/README.md)

* [retrieveBalanceTransfers](docs/transfers/README.md#retrievebalancetransfers) - Retrieve list of balance transfers
* [retrieveCreditTransfers](docs/transfers/README.md#retrievecredittransfers) - Retrieve list of credit transfers
* [transferBalance](docs/transfers/README.md#transferbalance) - Transfer balance
* [transferCredit](docs/transfers/README.md#transfercredit) - Transfer credit
* [transferNumber](docs/transfers/README.md#transfernumber) - Transfer number
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
