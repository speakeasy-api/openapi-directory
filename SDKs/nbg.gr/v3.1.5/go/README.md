# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/nbg.gr/v3.1.5/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountAccess.DeleteAccountAccessConsentsConsentID(ctx, operations.DeleteAccountAccessConsentsConsentIDRequest{
        ConsentID: "corrupti",
        SandboxID: "provident",
        XCustomerUserAgent: sdk.String("distinctio"),
        XFapiAuthDate: sdk.String("quibusdam"),
        XFapiCustomerIPAddress: sdk.String("unde"),
        XFapiInteractionID: sdk.String("nulla"),
    }, operations.DeleteAccountAccessConsentsConsentIDSecurity{
        ClientCredentialsToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AccountAccess](docs/accountaccess/README.md)

* [DeleteAccountAccessConsentsConsentID](docs/accountaccess/README.md#deleteaccountaccessconsentsconsentid) - Delete Account Access Consents
* [GetAccountAccessConsentsConsentID](docs/accountaccess/README.md#getaccountaccessconsentsconsentid) - Get Account Access Consents
* [PostAccountAccessConsents](docs/accountaccess/README.md#postaccountaccessconsents) - Create Account Access Consents

### [Accounts](docs/accounts/README.md)

* [GetAccounts](docs/accounts/README.md#getaccounts) - Get Accounts
* [GetAccountsAccountID](docs/accounts/README.md#getaccountsaccountid) - Get Accounts

### [Balances](docs/balances/README.md)

* [GetAccountsAccountIDBalances](docs/balances/README.md#getaccountsaccountidbalances) - Get Balances

### [Beneficiaries](docs/beneficiaries/README.md)

* [GetAccountsAccountIDBeneficiaries](docs/beneficiaries/README.md#getaccountsaccountidbeneficiaries) - Get Beneficiaries

### [Parties](docs/parties/README.md)

* [GetAccountsAccountIDParties](docs/parties/README.md#getaccountsaccountidparties) - Get Parties
* [GetAccountsAccountIDParty](docs/parties/README.md#getaccountsaccountidparty) - Get Party
* [GetParty](docs/parties/README.md#getparty) - Get Party

### [Sandbox](docs/sandbox/README.md)

* [DeleteSandboxSandboxID](docs/sandbox/README.md#deletesandboxsandboxid) - Delete Sandbox
* [GetSandboxSandboxID](docs/sandbox/README.md#getsandboxsandboxid) - Export Sandbox
* [PostSandbox](docs/sandbox/README.md#postsandbox) - Create Sandbox
* [PutSandbox](docs/sandbox/README.md#putsandbox) - Import Sandbox

### [ScheduledPayments](docs/scheduledpayments/README.md)

* [GetAccountsAccountIDScheduledPayments](docs/scheduledpayments/README.md#getaccountsaccountidscheduledpayments) - Get Scheduled Payments

### [StandingOrders](docs/standingorders/README.md)

* [GetAccountsAccountIDStandingOrders](docs/standingorders/README.md#getaccountsaccountidstandingorders) - Get Standing Orders

### [Statements](docs/statements/README.md)

* [GetAccountsAccountIDStatements](docs/statements/README.md#getaccountsaccountidstatements) - Get Statements
* [GetAccountsAccountIDStatementsStatementID](docs/statements/README.md#getaccountsaccountidstatementsstatementid) - Get Statements
* [GetAccountsAccountIDStatementsStatementIDFile](docs/statements/README.md#getaccountsaccountidstatementsstatementidfile) - Get Statements

### [Transactions](docs/transactions/README.md)

* [GetAccountsAccountIDStatementsStatementIDTransactions](docs/transactions/README.md#getaccountsaccountidstatementsstatementidtransactions) - Get Transactions
* [GetAccountsAccountIDTransactions](docs/transactions/README.md#getaccountsaccountidtransactions) - Get Transactions
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
