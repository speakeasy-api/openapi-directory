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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accounts

* `deleteAccountsId` - Delete account
* `getAccountsId` - Get account
* `getInstitutionsIdAccounts` - List accounts in institution
* `getUsersIdAccounts` - List accounts in user
* `postUsersIdAccounts` - Create an account in user
* `putAccountsId` - Update account
* `putUsersIdAccounts` - Update the display order of accounts in user

### attachments

* `deleteAttachmentsId` - Delete attachment
* `deleteTransactionsTransactionIdAttachmentsAttachmentId` - Unassigns attachment in transaction
* `getAttachmentsId` - Get attachment
* `getTransactionsIdAttachments` - List attachments in transaction
* `getUsersIdAttachments` - Lists attachments in user
* `postTransactionsIdAttachments` - Assigns attachment to transaction
* `postUsersIdAttachments` - Create attachment in user
* `putAttachmentsId` - Update attachment

### budgeting

* `deleteUsersIdForecastCache` - Delete forecast cache for user
* `getUsersIdBudget` - List budget for user
* `getUsersIdBudgetSummary` - Get budget summary for user
* `getUsersIdTrendAnalysis` - Get trend analysis for user

### categories

* `deleteCategoriesId` - Delete category
* `getCategoriesId` - Get category
* `getUsersIdCategories` - List categories in user
* `postUsersIdCategories` - Create category in user
* `putCategoriesId` - Update category

### categoryRules

* `getUsersIdCategoryRules` - List category rules in user
* `postCategoriesIdCategoryRules` - Create category rule in category

### currencies

* `getCurrencies` - List currencies
* `getCurrenciesId` - Get currency

### events

* `deleteEventsId` - Delete event
* `getEventsId` - Get event
* `getScenariosIdEvents` - List events in scenario.
* `getUsersIdEvents` - List events in user.
* `postScenariosIdEvents` - Create event in scenario
* `putEventsId` - Update event

### institutions

* `deleteInstitutionsId` - Delete institution
* `getInstitutionsId` - Get institution
* `getUsersIdInstitutions` - List institutions in user
* `postUsersIdInstitutions` - Create institution in user
* `putInstitutionsId` - Update institution

### labels

* `getUsersIdLabels` - List labels in user

### savedSearches

* `getUsersIdSavedSearches` - List saved searches in user

### timeZones

* `getTimeZones` - List time zones

### transactionAccounts

* `getTransactionAccountsId` - Get transaction account
* `getUsersIdTransactionAccounts` - List transaction accounts in user
* `putTransactionAccountsId` - Update transaction account

### transactions

* `deleteTransactionsId` - Delete transaction
* `getAccountsIdTransactions` - List transactions in account
* `getCategoriesIdTransactions` - List transactions in categories
* `getTransactionAccountsIdTransactions` - List transactions in transaction account
* `getTransactionsId` - Get a transaction
* `getUsersIdTransactions` - List transactions in user
* `postTransactionAccountsIdTransactions` - Create a transaction in transaction account
* `putTransactionsId` - Update a transaction

### users

* `getMe` - Get the authorised user
* `getUsersId` - Get user
* `putUsersId` - Update user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
