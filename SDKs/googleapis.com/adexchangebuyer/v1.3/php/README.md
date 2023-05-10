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
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerAccountsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerAccountsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerAccountsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'corrupti';
    $request->id = 592845;
    $request->key = 'distinctio';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'unde';
    $request->userIp = 'nulla';

    $requestSecurity = new AdexchangebuyerAccountsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyerAccountsGet($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/accounts/README.md)

* [adexchangebuyerAccountsGet](docs/accounts/README.md#adexchangebuyeraccountsget) - Gets one account by ID.
* [adexchangebuyerAccountsList](docs/accounts/README.md#adexchangebuyeraccountslist) - Retrieves the authenticated user's list of accounts.
* [adexchangebuyerAccountsPatch](docs/accounts/README.md#adexchangebuyeraccountspatch) - Updates an existing account. This method supports patch semantics.
* [adexchangebuyerAccountsUpdate](docs/accounts/README.md#adexchangebuyeraccountsupdate) - Updates an existing account.

### [billingInfo](docs/billinginfo/README.md)

* [adexchangebuyerBillingInfoGet](docs/billinginfo/README.md#adexchangebuyerbillinginfoget) - Returns the billing information for one account specified by account ID.
* [adexchangebuyerBillingInfoList](docs/billinginfo/README.md#adexchangebuyerbillinginfolist) - Retrieves a list of billing information for all accounts of the authenticated user.

### [budget](docs/budget/README.md)

* [adexchangebuyerBudgetGet](docs/budget/README.md#adexchangebuyerbudgetget) - Returns the budget information for the adgroup specified by the accountId and billingId.
* [adexchangebuyerBudgetPatch](docs/budget/README.md#adexchangebuyerbudgetpatch) - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
* [adexchangebuyerBudgetUpdate](docs/budget/README.md#adexchangebuyerbudgetupdate) - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.

### [creatives](docs/creatives/README.md)

* [adexchangebuyerCreativesGet](docs/creatives/README.md#adexchangebuyercreativesget) - Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
* [adexchangebuyerCreativesInsert](docs/creatives/README.md#adexchangebuyercreativesinsert) - Submit a new creative.
* [adexchangebuyerCreativesList](docs/creatives/README.md#adexchangebuyercreativeslist) - Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.

### [directDeals](docs/directdeals/README.md)

* [adexchangebuyerDirectDealsGet](docs/directdeals/README.md#adexchangebuyerdirectdealsget) - Gets one direct deal by ID.
* [adexchangebuyerDirectDealsList](docs/directdeals/README.md#adexchangebuyerdirectdealslist) - Retrieves the authenticated user's list of direct deals.

### [performanceReport](docs/performancereport/README.md)

* [adexchangebuyerPerformanceReportList](docs/performancereport/README.md#adexchangebuyerperformancereportlist) - Retrieves the authenticated user's list of performance metrics.

### [pretargetingConfig](docs/pretargetingconfig/README.md)

* [adexchangebuyerPretargetingConfigDelete](docs/pretargetingconfig/README.md#adexchangebuyerpretargetingconfigdelete) - Deletes an existing pretargeting config.
* [adexchangebuyerPretargetingConfigGet](docs/pretargetingconfig/README.md#adexchangebuyerpretargetingconfigget) - Gets a specific pretargeting configuration
* [adexchangebuyerPretargetingConfigInsert](docs/pretargetingconfig/README.md#adexchangebuyerpretargetingconfiginsert) - Inserts a new pretargeting configuration.
* [adexchangebuyerPretargetingConfigList](docs/pretargetingconfig/README.md#adexchangebuyerpretargetingconfiglist) - Retrieves a list of the authenticated user's pretargeting configurations.
* [adexchangebuyerPretargetingConfigPatch](docs/pretargetingconfig/README.md#adexchangebuyerpretargetingconfigpatch) - Updates an existing pretargeting config. This method supports patch semantics.
* [adexchangebuyerPretargetingConfigUpdate](docs/pretargetingconfig/README.md#adexchangebuyerpretargetingconfigupdate) - Updates an existing pretargeting config.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
