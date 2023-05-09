# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/pocketsmith.com/2.0/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Accounts.DeleteAccountsID(ctx, operations.DeleteAccountsIDRequest{
        ID: 548814,
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


### [Accounts](docs/accounts/README.md)

* [DeleteAccountsID](docs/accounts/README.md#deleteaccountsid) - Delete account
* [GetAccountsID](docs/accounts/README.md#getaccountsid) - Get account
* [GetInstitutionsIDAccounts](docs/accounts/README.md#getinstitutionsidaccounts) - List accounts in institution
* [GetUsersIDAccounts](docs/accounts/README.md#getusersidaccounts) - List accounts in user
* [PostUsersIDAccounts](docs/accounts/README.md#postusersidaccounts) - Create an account in user
* [PutAccountsID](docs/accounts/README.md#putaccountsid) - Update account
* [PutUsersIDAccounts](docs/accounts/README.md#putusersidaccounts) - Update the display order of accounts in user

### [Attachments](docs/attachments/README.md)

* [DeleteAttachmentsID](docs/attachments/README.md#deleteattachmentsid) - Delete attachment
* [DeleteTransactionsTransactionIDAttachmentsAttachmentID](docs/attachments/README.md#deletetransactionstransactionidattachmentsattachmentid) - Unassigns attachment in transaction
* [GetAttachmentsID](docs/attachments/README.md#getattachmentsid) - Get attachment
* [GetTransactionsIDAttachments](docs/attachments/README.md#gettransactionsidattachments) - List attachments in transaction
* [GetUsersIDAttachments](docs/attachments/README.md#getusersidattachments) - Lists attachments in user
* [PostTransactionsIDAttachments](docs/attachments/README.md#posttransactionsidattachments) - Assigns attachment to transaction
* [PostUsersIDAttachments](docs/attachments/README.md#postusersidattachments) - Create attachment in user
* [PutAttachmentsID](docs/attachments/README.md#putattachmentsid) - Update attachment

### [Budgeting](docs/budgeting/README.md)

* [DeleteUsersIDForecastCache](docs/budgeting/README.md#deleteusersidforecastcache) - Delete forecast cache for user
* [GetUsersIDBudget](docs/budgeting/README.md#getusersidbudget) - List budget for user
* [GetUsersIDBudgetSummary](docs/budgeting/README.md#getusersidbudgetsummary) - Get budget summary for user
* [GetUsersIDTrendAnalysis](docs/budgeting/README.md#getusersidtrendanalysis) - Get trend analysis for user

### [Categories](docs/categories/README.md)

* [DeleteCategoriesID](docs/categories/README.md#deletecategoriesid) - Delete category
* [GetCategoriesID](docs/categories/README.md#getcategoriesid) - Get category
* [GetUsersIDCategories](docs/categories/README.md#getusersidcategories) - List categories in user
* [PostUsersIDCategories](docs/categories/README.md#postusersidcategories) - Create category in user
* [PutCategoriesID](docs/categories/README.md#putcategoriesid) - Update category

### [CategoryRules](docs/categoryrules/README.md)

* [GetUsersIDCategoryRules](docs/categoryrules/README.md#getusersidcategoryrules) - List category rules in user
* [PostCategoriesIDCategoryRules](docs/categoryrules/README.md#postcategoriesidcategoryrules) - Create category rule in category

### [Currencies](docs/currencies/README.md)

* [GetCurrencies](docs/currencies/README.md#getcurrencies) - List currencies
* [GetCurrenciesID](docs/currencies/README.md#getcurrenciesid) - Get currency

### [Events](docs/events/README.md)

* [DeleteEventsID](docs/events/README.md#deleteeventsid) - Delete event
* [GetEventsID](docs/events/README.md#geteventsid) - Get event
* [GetScenariosIDEvents](docs/events/README.md#getscenariosidevents) - List events in scenario.
* [GetUsersIDEvents](docs/events/README.md#getusersidevents) - List events in user.
* [PostScenariosIDEvents](docs/events/README.md#postscenariosidevents) - Create event in scenario
* [PutEventsID](docs/events/README.md#puteventsid) - Update event

### [Institutions](docs/institutions/README.md)

* [DeleteInstitutionsID](docs/institutions/README.md#deleteinstitutionsid) - Delete institution
* [GetInstitutionsID](docs/institutions/README.md#getinstitutionsid) - Get institution
* [GetUsersIDInstitutions](docs/institutions/README.md#getusersidinstitutions) - List institutions in user
* [PostUsersIDInstitutions](docs/institutions/README.md#postusersidinstitutions) - Create institution in user
* [PutInstitutionsID](docs/institutions/README.md#putinstitutionsid) - Update institution

### [Labels](docs/labels/README.md)

* [GetUsersIDLabels](docs/labels/README.md#getusersidlabels) - List labels in user

### [SavedSearches](docs/savedsearches/README.md)

* [GetUsersIDSavedSearches](docs/savedsearches/README.md#getusersidsavedsearches) - List saved searches in user

### [TimeZones](docs/timezones/README.md)

* [GetTimeZones](docs/timezones/README.md#gettimezones) - List time zones

### [TransactionAccounts](docs/transactionaccounts/README.md)

* [GetTransactionAccountsID](docs/transactionaccounts/README.md#gettransactionaccountsid) - Get transaction account
* [GetUsersIDTransactionAccounts](docs/transactionaccounts/README.md#getusersidtransactionaccounts) - List transaction accounts in user
* [PutTransactionAccountsID](docs/transactionaccounts/README.md#puttransactionaccountsid) - Update transaction account

### [Transactions](docs/transactions/README.md)

* [DeleteTransactionsID](docs/transactions/README.md#deletetransactionsid) - Delete transaction
* [GetAccountsIDTransactions](docs/transactions/README.md#getaccountsidtransactions) - List transactions in account
* [GetCategoriesIDTransactions](docs/transactions/README.md#getcategoriesidtransactions) - List transactions in categories
* [GetTransactionAccountsIDTransactions](docs/transactions/README.md#gettransactionaccountsidtransactions) - List transactions in transaction account
* [GetTransactionsID](docs/transactions/README.md#gettransactionsid) - Get a transaction
* [GetUsersIDTransactions](docs/transactions/README.md#getusersidtransactions) - List transactions in user
* [PostTransactionAccountsIDTransactions](docs/transactions/README.md#posttransactionaccountsidtransactions) - Create a transaction in transaction account
* [PutTransactionsID](docs/transactions/README.md#puttransactionsid) - Update a transaction

### [Users](docs/users/README.md)

* [GetMe](docs/users/README.md#getme) - Get the authorised user
* [GetUsersID](docs/users/README.md#getusersid) - Get user
* [PutUsersID](docs/users/README.md#putusersid) - Update user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
