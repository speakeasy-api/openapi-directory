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
use \OpenAPI\OpenAPI\Models\Operations\CreateFundsConfirmationConsentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\OBFundsConfirmationConsent1;
use \OpenAPI\OpenAPI\Models\Shared\OBFundsConfirmationConsent1Data;
use \OpenAPI\OpenAPI\Models\Shared\OBFundsConfirmationConsent1DataDebtorAccount;
use \OpenAPI\OpenAPI\Models\Operations\CreateFundsConfirmationConsentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFundsConfirmationConsentsRequest();
    $request->authorization = 'corrupti';
    $request->obFundsConfirmationConsent1 = new OBFundsConfirmationConsent1();
    $request->obFundsConfirmationConsent1->data = new OBFundsConfirmationConsent1Data();
    $request->obFundsConfirmationConsent1->data->debtorAccount = new OBFundsConfirmationConsent1DataDebtorAccount();
    $request->obFundsConfirmationConsent1->data->debtorAccount->identification = 'provident';
    $request->obFundsConfirmationConsent1->data->debtorAccount->name = 'Ellis Mitchell';
    $request->obFundsConfirmationConsent1->data->debtorAccount->schemeName = 'illum';
    $request->obFundsConfirmationConsent1->data->debtorAccount->secondaryIdentification = 'vel';
    $request->obFundsConfirmationConsent1->data->expirationDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-16T11:56:06.019Z');
    $request->xCustomerUserAgent = 'suscipit';
    $request->xFapiAuthDate = 'iure';
    $request->xFapiCustomerIpAddress = 'magnam';
    $request->xFapiInteractionId = 'debitis';

    $requestSecurity = new CreateFundsConfirmationConsentsSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->fundsConfirmations->createFundsConfirmationConsents($request, $requestSecurity);

    if ($response->obFundsConfirmationConsentResponse1 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [fundsConfirmations](docs/fundsconfirmations/README.md)

* [createFundsConfirmationConsents](docs/fundsconfirmations/README.md#createfundsconfirmationconsents) - Create Funds Confirmation Consent
* [createFundsConfirmations](docs/fundsconfirmations/README.md#createfundsconfirmations) - Create Funds Confirmation
* [deleteFundsConfirmationConsentsConsentId](docs/fundsconfirmations/README.md#deletefundsconfirmationconsentsconsentid) - Delete Funds Confirmation Consent
* [getFundsConfirmationConsentsConsentId](docs/fundsconfirmations/README.md#getfundsconfirmationconsentsconsentid) - Get Funds Confirmation Consent
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
