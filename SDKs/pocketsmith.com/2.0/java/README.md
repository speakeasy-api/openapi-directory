# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccountsIdRequest;
import org.openapis.openapi.models.operations.DeleteAccountsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAccountsIdRequest req = new DeleteAccountsIdRequest(592845L);            

            DeleteAccountsIdResponse res = sdk.accounts.deleteAccountsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/accounts/README.md)

* [deleteAccountsId](docs/accounts/README.md#deleteaccountsid) - Delete account
* [getAccountsId](docs/accounts/README.md#getaccountsid) - Get account
* [getInstitutionsIdAccounts](docs/accounts/README.md#getinstitutionsidaccounts) - List accounts in institution
* [getUsersIdAccounts](docs/accounts/README.md#getusersidaccounts) - List accounts in user
* [postUsersIdAccounts](docs/accounts/README.md#postusersidaccounts) - Create an account in user
* [putAccountsId](docs/accounts/README.md#putaccountsid) - Update account
* [putUsersIdAccounts](docs/accounts/README.md#putusersidaccounts) - Update the display order of accounts in user

### [attachments](docs/attachments/README.md)

* [deleteAttachmentsId](docs/attachments/README.md#deleteattachmentsid) - Delete attachment
* [deleteTransactionsTransactionIdAttachmentsAttachmentId](docs/attachments/README.md#deletetransactionstransactionidattachmentsattachmentid) - Unassigns attachment in transaction
* [getAttachmentsId](docs/attachments/README.md#getattachmentsid) - Get attachment
* [getTransactionsIdAttachments](docs/attachments/README.md#gettransactionsidattachments) - List attachments in transaction
* [getUsersIdAttachments](docs/attachments/README.md#getusersidattachments) - Lists attachments in user
* [postTransactionsIdAttachments](docs/attachments/README.md#posttransactionsidattachments) - Assigns attachment to transaction
* [postUsersIdAttachments](docs/attachments/README.md#postusersidattachments) - Create attachment in user
* [putAttachmentsId](docs/attachments/README.md#putattachmentsid) - Update attachment

### [budgeting](docs/budgeting/README.md)

* [deleteUsersIdForecastCache](docs/budgeting/README.md#deleteusersidforecastcache) - Delete forecast cache for user
* [getUsersIdBudget](docs/budgeting/README.md#getusersidbudget) - List budget for user
* [getUsersIdBudgetSummary](docs/budgeting/README.md#getusersidbudgetsummary) - Get budget summary for user
* [getUsersIdTrendAnalysis](docs/budgeting/README.md#getusersidtrendanalysis) - Get trend analysis for user

### [categories](docs/categories/README.md)

* [deleteCategoriesId](docs/categories/README.md#deletecategoriesid) - Delete category
* [getCategoriesId](docs/categories/README.md#getcategoriesid) - Get category
* [getUsersIdCategories](docs/categories/README.md#getusersidcategories) - List categories in user
* [postUsersIdCategories](docs/categories/README.md#postusersidcategories) - Create category in user
* [putCategoriesId](docs/categories/README.md#putcategoriesid) - Update category

### [categoryRules](docs/categoryrules/README.md)

* [getUsersIdCategoryRules](docs/categoryrules/README.md#getusersidcategoryrules) - List category rules in user
* [postCategoriesIdCategoryRules](docs/categoryrules/README.md#postcategoriesidcategoryrules) - Create category rule in category

### [currencies](docs/currencies/README.md)

* [getCurrencies](docs/currencies/README.md#getcurrencies) - List currencies
* [getCurrenciesId](docs/currencies/README.md#getcurrenciesid) - Get currency

### [events](docs/events/README.md)

* [deleteEventsId](docs/events/README.md#deleteeventsid) - Delete event
* [getEventsId](docs/events/README.md#geteventsid) - Get event
* [getScenariosIdEvents](docs/events/README.md#getscenariosidevents) - List events in scenario.
* [getUsersIdEvents](docs/events/README.md#getusersidevents) - List events in user.
* [postScenariosIdEvents](docs/events/README.md#postscenariosidevents) - Create event in scenario
* [putEventsId](docs/events/README.md#puteventsid) - Update event

### [institutions](docs/institutions/README.md)

* [deleteInstitutionsId](docs/institutions/README.md#deleteinstitutionsid) - Delete institution
* [getInstitutionsId](docs/institutions/README.md#getinstitutionsid) - Get institution
* [getUsersIdInstitutions](docs/institutions/README.md#getusersidinstitutions) - List institutions in user
* [postUsersIdInstitutions](docs/institutions/README.md#postusersidinstitutions) - Create institution in user
* [putInstitutionsId](docs/institutions/README.md#putinstitutionsid) - Update institution

### [labels](docs/labels/README.md)

* [getUsersIdLabels](docs/labels/README.md#getusersidlabels) - List labels in user

### [savedSearches](docs/savedsearches/README.md)

* [getUsersIdSavedSearches](docs/savedsearches/README.md#getusersidsavedsearches) - List saved searches in user

### [timeZones](docs/timezones/README.md)

* [getTimeZones](docs/timezones/README.md#gettimezones) - List time zones

### [transactionAccounts](docs/transactionaccounts/README.md)

* [getTransactionAccountsId](docs/transactionaccounts/README.md#gettransactionaccountsid) - Get transaction account
* [getUsersIdTransactionAccounts](docs/transactionaccounts/README.md#getusersidtransactionaccounts) - List transaction accounts in user
* [putTransactionAccountsId](docs/transactionaccounts/README.md#puttransactionaccountsid) - Update transaction account

### [transactions](docs/transactions/README.md)

* [deleteTransactionsId](docs/transactions/README.md#deletetransactionsid) - Delete transaction
* [getAccountsIdTransactions](docs/transactions/README.md#getaccountsidtransactions) - List transactions in account
* [getCategoriesIdTransactions](docs/transactions/README.md#getcategoriesidtransactions) - List transactions in categories
* [getTransactionAccountsIdTransactions](docs/transactions/README.md#gettransactionaccountsidtransactions) - List transactions in transaction account
* [getTransactionsId](docs/transactions/README.md#gettransactionsid) - Get a transaction
* [getUsersIdTransactions](docs/transactions/README.md#getusersidtransactions) - List transactions in user
* [postTransactionAccountsIdTransactions](docs/transactions/README.md#posttransactionaccountsidtransactions) - Create a transaction in transaction account
* [putTransactionsId](docs/transactions/README.md#puttransactionsid) - Update a transaction

### [users](docs/users/README.md)

* [getMe](docs/users/README.md#getme) - Get the authorised user
* [getUsersId](docs/users/README.md#getusersid) - Get user
* [putUsersId](docs/users/README.md#putusersid) - Update user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
