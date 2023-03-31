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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DeleteAccountAccessConsentsConsentIDRequest{
        ConsentID: "corrupti",
        SandboxID: "provident",
        XCustomerUserAgent: "distinctio",
        XFapiAuthDate: "quibusdam",
        XFapiCustomerIPAddress: "unde",
        XFapiInteractionID: "nulla",
    }

    ctx := context.Background()
    res, err := s.AccountAccess.DeleteAccountAccessConsentsConsentID(ctx, req, operations.DeleteAccountAccessConsentsConsentIDSecurity{
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


### AccountAccess

* `DeleteAccountAccessConsentsConsentID` - Delete Account Access Consents
* `GetAccountAccessConsentsConsentID` - Get Account Access Consents
* `PostAccountAccessConsents` - Create Account Access Consents

### Accounts

* `GetAccounts` - Get Accounts
* `GetAccountsAccountID` - Get Accounts

### Balances

* `GetAccountsAccountIDBalances` - Get Balances

### Beneficiaries

* `GetAccountsAccountIDBeneficiaries` - Get Beneficiaries

### Parties

* `GetAccountsAccountIDParties` - Get Parties
* `GetAccountsAccountIDParty` - Get Party
* `GetParty` - Get Party

### Sandbox

* `DeleteSandboxSandboxID` - Delete Sandbox
* `GetSandboxSandboxID` - Export Sandbox
* `PostSandbox` - Create Sandbox
* `PutSandbox` - Import Sandbox

### ScheduledPayments

* `GetAccountsAccountIDScheduledPayments` - Get Scheduled Payments

### StandingOrders

* `GetAccountsAccountIDStandingOrders` - Get Standing Orders

### Statements

* `GetAccountsAccountIDStatements` - Get Statements
* `GetAccountsAccountIDStatementsStatementID` - Get Statements
* `GetAccountsAccountIDStatementsStatementIDFile` - Get Statements

### Transactions

* `GetAccountsAccountIDStatementsStatementIDTransactions` - Get Transactions
* `GetAccountsAccountIDTransactions` - Get Transactions
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
