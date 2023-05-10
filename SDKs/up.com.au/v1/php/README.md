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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\OwnershipTypeEnumEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsRequest();
    $request->filterAccountType = AccountTypeEnumEnum::TRANSACTIONAL;
    $request->filterOwnershipType = OwnershipTypeEnumEnum::JOINT;
    $request->pageSize = 715190;

    $response = $sdk->accounts->getAccounts($request);

    if ($response->listAccountsResponse !== null) {
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

* [getAccounts](docs/accounts/README.md#getaccounts) - List accounts
* [getAccountsId](docs/accounts/README.md#getaccountsid) - Retrieve account

### [categories](docs/categories/README.md)

* [getCategories](docs/categories/README.md#getcategories) - List categories
* [getCategoriesId](docs/categories/README.md#getcategoriesid) - Retrieve category
* [patchTransactionsTransactionIdRelationshipsCategory](docs/categories/README.md#patchtransactionstransactionidrelationshipscategory) - Categorize transaction

### [tags](docs/tags/README.md)

* [deleteTransactionsTransactionIdRelationshipsTags](docs/tags/README.md#deletetransactionstransactionidrelationshipstags) - Remove tags from transaction
* [getTags](docs/tags/README.md#gettags) - List tags
* [postTransactionsTransactionIdRelationshipsTags](docs/tags/README.md#posttransactionstransactionidrelationshipstags) - Add tags to transaction

### [transactions](docs/transactions/README.md)

* [getAccountsAccountIdTransactions](docs/transactions/README.md#getaccountsaccountidtransactions) - List transactions by account
* [getTransactions](docs/transactions/README.md#gettransactions) - List transactions
* [getTransactionsId](docs/transactions/README.md#gettransactionsid) - Retrieve transaction

### [utilityEndpoints](docs/utilityendpoints/README.md)

* [getUtilPing](docs/utilityendpoints/README.md#getutilping) - Ping

### [webhooks](docs/webhooks/README.md)

* [deleteWebhooksId](docs/webhooks/README.md#deletewebhooksid) - Delete webhook
* [getWebhooks](docs/webhooks/README.md#getwebhooks) - List webhooks
* [getWebhooksId](docs/webhooks/README.md#getwebhooksid) - Retrieve webhook
* [getWebhooksWebhookIdLogs](docs/webhooks/README.md#getwebhookswebhookidlogs) - List webhook logs
* [postWebhooks](docs/webhooks/README.md#postwebhooks) - Create webhook
* [postWebhooksWebhookIdPing](docs/webhooks/README.md#postwebhookswebhookidping) - Ping webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
