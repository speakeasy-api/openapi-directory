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
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountAccessConsentsConsentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountAccessConsentsConsentIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccountAccessConsentsConsentIdRequest();
    $request->consentId = 'corrupti';
    $request->sandboxId = 'provident';
    $request->xCustomerUserAgent = 'distinctio';
    $request->xFapiAuthDate = 'quibusdam';
    $request->xFapiCustomerIpAddress = 'unde';
    $request->xFapiInteractionId = 'nulla';

    $requestSecurity = new DeleteAccountAccessConsentsConsentIdSecurity();
    $requestSecurity->clientCredentialsToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountAccess->deleteAccountAccessConsentsConsentId($request, $requestSecurity);

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


### [accountAccess](docs/accountaccess/README.md)

* [deleteAccountAccessConsentsConsentId](docs/accountaccess/README.md#deleteaccountaccessconsentsconsentid) - Delete Account Access Consents
* [getAccountAccessConsentsConsentId](docs/accountaccess/README.md#getaccountaccessconsentsconsentid) - Get Account Access Consents
* [postAccountAccessConsents](docs/accountaccess/README.md#postaccountaccessconsents) - Create Account Access Consents

### [accounts](docs/accounts/README.md)

* [getAccounts](docs/accounts/README.md#getaccounts) - Get Accounts
* [getAccountsAccountId](docs/accounts/README.md#getaccountsaccountid) - Get Accounts

### [balances](docs/balances/README.md)

* [getAccountsAccountIdBalances](docs/balances/README.md#getaccountsaccountidbalances) - Get Balances

### [beneficiaries](docs/beneficiaries/README.md)

* [getAccountsAccountIdBeneficiaries](docs/beneficiaries/README.md#getaccountsaccountidbeneficiaries) - Get Beneficiaries

### [parties](docs/parties/README.md)

* [getAccountsAccountIdParties](docs/parties/README.md#getaccountsaccountidparties) - Get Parties
* [getAccountsAccountIdParty](docs/parties/README.md#getaccountsaccountidparty) - Get Party
* [getParty](docs/parties/README.md#getparty) - Get Party

### [sandbox](docs/sandbox/README.md)

* [deleteSandboxSandboxId](docs/sandbox/README.md#deletesandboxsandboxid) - Delete Sandbox
* [getSandboxSandboxId](docs/sandbox/README.md#getsandboxsandboxid) - Export Sandbox
* [postSandbox](docs/sandbox/README.md#postsandbox) - Create Sandbox
* [putSandbox](docs/sandbox/README.md#putsandbox) - Import Sandbox

### [scheduledPayments](docs/scheduledpayments/README.md)

* [getAccountsAccountIdScheduledPayments](docs/scheduledpayments/README.md#getaccountsaccountidscheduledpayments) - Get Scheduled Payments

### [standingOrders](docs/standingorders/README.md)

* [getAccountsAccountIdStandingOrders](docs/standingorders/README.md#getaccountsaccountidstandingorders) - Get Standing Orders

### [statements](docs/statements/README.md)

* [getAccountsAccountIdStatements](docs/statements/README.md#getaccountsaccountidstatements) - Get Statements
* [getAccountsAccountIdStatementsStatementId](docs/statements/README.md#getaccountsaccountidstatementsstatementid) - Get Statements
* [getAccountsAccountIdStatementsStatementIdFile](docs/statements/README.md#getaccountsaccountidstatementsstatementidfile) - Get Statements

### [transactions](docs/transactions/README.md)

* [getAccountsAccountIdStatementsStatementIdTransactions](docs/transactions/README.md#getaccountsaccountidstatementsstatementidtransactions) - Get Transactions
* [getAccountsAccountIdTransactions](docs/transactions/README.md#getaccountsaccountidtransactions) - Get Transactions
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
