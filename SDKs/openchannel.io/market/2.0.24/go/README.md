# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/openchannel.io/market/2.0.24/go
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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AppsFindAndModifyApps.DeleteAppsAppID(ctx, operations.DeleteAppsAppIDRequest{
        AppID: "corrupti",
        DeveloperID: "provident",
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


### [AppsFindAndModifyApps](docs/appsfindandmodifyapps/README.md)

* [DeleteAppsAppID](docs/appsfindandmodifyapps/README.md#deleteappsappid) - Removes app and all versions
* [DeleteAppsAppIDVersionsVersion](docs/appsfindandmodifyapps/README.md#deleteappsappidversionsversion) - Removes AppVersion
* [GetApps](docs/appsfindandmodifyapps/README.md#getapps) - Returns a paginated list of APPROVED or SUSPENDED apps
* [GetAppsBySafeNameSafeName](docs/appsfindandmodifyapps/README.md#getappsbysafenamesafename) - Returns a single APPROVED or SUSPENDED app
* [GetAppsTextSearch](docs/appsfindandmodifyapps/README.md#getappstextsearch) - Searches through the text of fields to find APPROVED or SUSPENDED apps
* [GetAppsVersions](docs/appsfindandmodifyapps/README.md#getappsversions) - Returns a paginated list of AppVersions
* [GetAppsAppID](docs/appsfindandmodifyapps/README.md#getappsappid) - Returns a single APPROVED or SUSPENDED app
* [GetAppsAppIDVersionsVersion](docs/appsfindandmodifyapps/README.md#getappsappidversionsversion) - Returns a single AppVersion
* [PatchAppsAppIDVersionsVersion](docs/appsfindandmodifyapps/README.md#patchappsappidversionsversion) - Updates the app fields or creates a new version
* [PostApps](docs/appsfindandmodifyapps/README.md#postapps) - Adds a new app for this developer
* [PostAppsAppIDLive](docs/appsfindandmodifyapps/README.md#postappsappidlive) - Change the live app to another, previously approved version
* [PostAppsAppIDPublish](docs/appsfindandmodifyapps/README.md#postappsappidpublish) - Publishes the current working version of the app to the marketplace
* [PostAppsAppIDVersionsVersion](docs/appsfindandmodifyapps/README.md#postappsappidversionsversion) - Updates the app or creates a new version
* [PostAppsAppIDVersionsVersionStatus](docs/appsfindandmodifyapps/README.md#postappsappidversionsversionstatus) - Allows a developer or administrator to change the status of apps

### [CustomGatewayProcessPaymentsAndRefunds](docs/customgatewayprocesspaymentsandrefunds/README.md)

* [PostCustomGatewayPaymentOwnershipID](docs/customgatewayprocesspaymentsandrefunds/README.md#postcustomgatewaypaymentownershipid) - Adds a payment for an app on behalf of a user
* [PostCustomGatewayRefundOwnershipID](docs/customgatewayprocesspaymentsandrefunds/README.md#postcustomgatewayrefundownershipid) - Fully or partially refund payment for an app on behalf of a user

### [DeveloperAccountsFindAndModifyDeveloperAccounts](docs/developeraccountsfindandmodifydeveloperaccounts/README.md)

* [DeleteDeveloperAccountsDeveloperAccountID](docs/developeraccountsfindandmodifydeveloperaccounts/README.md#deletedeveloperaccountsdeveloperaccountid) - Removes the developer account
* [GetDeveloperAccounts](docs/developeraccountsfindandmodifydeveloperaccounts/README.md#getdeveloperaccounts) - Returns a paginated list of developerAccounts
* [GetDeveloperAccountsDeveloperAccountID](docs/developeraccountsfindandmodifydeveloperaccounts/README.md#getdeveloperaccountsdeveloperaccountid) - Returns a single developer account
* [PatchDeveloperAccountsDeveloperAccountID](docs/developeraccountsfindandmodifydeveloperaccounts/README.md#patchdeveloperaccountsdeveloperaccountid) - Updates the developer account fields
* [PostDeveloperAccountsDeveloperAccountID](docs/developeraccountsfindandmodifydeveloperaccounts/README.md#postdeveloperaccountsdeveloperaccountid) - Updates the developer account or adds the developer account if it doesn't exist

### [DevelopersFindAndModifyDevelopers](docs/developersfindandmodifydevelopers/README.md)

* [DeleteDevelopersDeveloperID](docs/developersfindandmodifydevelopers/README.md#deletedevelopersdeveloperid) - Removes a single developer
* [GetDevelopers](docs/developersfindandmodifydevelopers/README.md#getdevelopers) - Returns a paginated list of developers
* [GetDevelopersDeveloperID](docs/developersfindandmodifydevelopers/README.md#getdevelopersdeveloperid) - Returns a single developer
* [PatchDevelopersDeveloperID](docs/developersfindandmodifydevelopers/README.md#patchdevelopersdeveloperid) - Updates the developer fields
* [PostDevelopersDeveloperID](docs/developersfindandmodifydevelopers/README.md#postdevelopersdeveloperid) - Updates the developer record or adds the developer if it doesn't exist

### [EventsFindEvents](docs/eventsfindevents/README.md)

* [GetEventsEventID](docs/eventsfindevents/README.md#geteventseventid) - Returns an event

### [FilesUploadFiles](docs/filesuploadfiles/README.md)

* [GetFiles](docs/filesuploadfiles/README.md#getfiles) - Returns a paginated list of files
* [GetFilesByIDOrURL](docs/filesuploadfiles/README.md#getfilesbyidorurl) - Get the details for a file.
* [GetFilesDownload](docs/filesuploadfiles/README.md#getfilesdownload) - A signed URL for downloading a private file can be returned by providing the fileId.
* [PostFiles](docs/filesuploadfiles/README.md#postfiles) - Uploads a file.
* [PostFilesURL](docs/filesuploadfiles/README.md#postfilesurl) - Uploads a file from a URL

### [MarketsThisMarketplace](docs/marketsthismarketplace/README.md)

* [GetMarketsThis](docs/marketsthismarketplace/README.md#getmarketsthis) - Returns the current marketplace

### [OwnershipFindOwnership](docs/ownershipfindownership/README.md)

* [GetOwnership](docs/ownershipfindownership/README.md#getownership) - Returns a paginated list of app licenses
* [GetOwnershipOwnershipID](docs/ownershipfindownership/README.md#getownershipownershipid) - Returns an ownership record
* [PatchOwnershipOwnershipID](docs/ownershipfindownership/README.md#patchownershipownershipid) - Updates ownership fields
* [PostOwnershipInstall](docs/ownershipfindownership/README.md#postownershipinstall) - Aquires an app license for a user (installs app)
* [PostOwnershipUninstallOwnershipID](docs/ownershipfindownership/README.md#postownershipuninstallownershipid) - Uninstalls a license for a particular user and app (uninstalls app)
* [PostOwnershipOwnershipID](docs/ownershipfindownership/README.md#postownershipownershipid) - Updates an ownership record

### [PermissionAddAndRemovePermissions](docs/permissionaddandremovepermissions/README.md)

* [DeletePermissionAppsAppID](docs/permissionaddandremovepermissions/README.md#deletepermissionappsappid) - Removes permission that allows the app to access this user's data
* [GetPermissionAppsAppID](docs/permissionaddandremovepermissions/README.md#getpermissionappsappid) - Returns permission that allows the app to access this user's data
* [PostPermissionAppsAppID](docs/permissionaddandremovepermissions/README.md#postpermissionappsappid) - Adds permission to allow the app to access this user's data

### [ReviewsFindAndModifyReviews](docs/reviewsfindandmodifyreviews/README.md)

* [DeleteReviewsReviewID](docs/reviewsfindandmodifyreviews/README.md#deletereviewsreviewid) - Remove a review
* [GetReviews](docs/reviewsfindandmodifyreviews/README.md#getreviews) - Find reviews for a particular App and marketplace. Results are automatically paginated when limit is set
* [GetReviewsReviewID](docs/reviewsfindandmodifyreviews/README.md#getreviewsreviewid) - Find a Review within a particular App and marketplace
* [PatchReviewsReviewID](docs/reviewsfindandmodifyreviews/README.md#patchreviewsreviewid) - Update a review fields
* [PostReviews](docs/reviewsfindandmodifyreviews/README.md#postreviews) - Post a review from a User and returns the new post
* [PostReviewsReviewID](docs/reviewsfindandmodifyreviews/README.md#postreviewsreviewid) - Update a review from a User and returns the new post

### [StatsFindMarketplaceStatistics](docs/statsfindmarketplacestatistics/README.md)

* [GetStatsSeriesPeriodFields](docs/statsfindmarketplacestatistics/README.md#getstatsseriesperiodfields) - Return a timeseries for a particular field
* [GetStatsTotal](docs/statsfindmarketplacestatistics/README.md#getstatstotal) - Returns the total number of events for a particular field.
* [PostStatsIncrementField](docs/statsfindmarketplacestatistics/README.md#poststatsincrementfield) - Increments a statistics field

### [StripeGatewayProcessPaymentsAndRefunds](docs/stripegatewayprocesspaymentsandrefunds/README.md)

* [DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeID](docs/stripegatewayprocesspaymentsandrefunds/README.md#deletestripegatewaydeveloperdeveloperidaccountsstripeid) - Disconnects a developer's Stripe account
* [DeleteStripeGatewayUserUserIDCardsCardID](docs/stripegatewayprocesspaymentsandrefunds/README.md#deletestripegatewayuseruseridcardscardid) - Removes a credit card for a user
* [GetStripeGatewayDeveloperDeveloperIDAccounts](docs/stripegatewayprocesspaymentsandrefunds/README.md#getstripegatewaydeveloperdeveloperidaccounts) - Returns a developers connected Stripe accounts
* [GetStripeGatewayUserUserIDCards](docs/stripegatewayprocesspaymentsandrefunds/README.md#getstripegatewayuseruseridcards) - Returns credit cards for this user
* [PostStripeGatewayDeveloperDeveloperIDAccounts](docs/stripegatewayprocesspaymentsandrefunds/README.md#poststripegatewaydeveloperdeveloperidaccounts) - Generate a temporary URL to allow a developer to connect their Stripe account
* [PostStripeGatewayUserUserIDCards](docs/stripegatewayprocesspaymentsandrefunds/README.md#poststripegatewayuseruseridcards) - Adds credit card for this user
* [PostStripeGatewayUserUserIDCardsCardID](docs/stripegatewayprocesspaymentsandrefunds/README.md#poststripegatewayuseruseridcardscardid) - Updates a credit card for this user

### [TransactionsFindPaymentsAndRefunds](docs/transactionsfindpaymentsandrefunds/README.md)

* [DeleteTransactionsTransactionID](docs/transactionsfindpaymentsandrefunds/README.md#deletetransactionstransactionid) - Deleted a transaction
* [GetTransactions](docs/transactionsfindpaymentsandrefunds/README.md#gettransactions) - Returns a paginated list of transactions
* [GetTransactionsTransactionID](docs/transactionsfindpaymentsandrefunds/README.md#gettransactionstransactionid) - Returns a transaction
* [PostTransactionsTransactionID](docs/transactionsfindpaymentsandrefunds/README.md#posttransactionstransactionid) - Updates a transaction

### [UserAccountsFindAndModifyUserAccounts](docs/useraccountsfindandmodifyuseraccounts/README.md)

* [DeleteUserAccountsUserAccountID](docs/useraccountsfindandmodifyuseraccounts/README.md#deleteuseraccountsuseraccountid) - Removes the user account
* [GetUserAccounts](docs/useraccountsfindandmodifyuseraccounts/README.md#getuseraccounts) - Returns a paginated list of userAccounts
* [GetUserAccountsUserAccountID](docs/useraccountsfindandmodifyuseraccounts/README.md#getuseraccountsuseraccountid) - Returns a single user account
* [PatchUserAccountsUserAccountID](docs/useraccountsfindandmodifyuseraccounts/README.md#patchuseraccountsuseraccountid) - Updates the user account fields
* [PostUserAccountsUserAccountID](docs/useraccountsfindandmodifyuseraccounts/README.md#postuseraccountsuseraccountid) - Updates the user account or adds the user account if it doesn't exist

### [UsersFindAndModifyUsers](docs/usersfindandmodifyusers/README.md)

* [DeleteUsersUserID](docs/usersfindandmodifyusers/README.md#deleteusersuserid) - Removes a single user
* [GetUsers](docs/usersfindandmodifyusers/README.md#getusers) - Returns a paginated list of users
* [GetUsersUserID](docs/usersfindandmodifyusers/README.md#getusersuserid) - Return a single user
* [PatchUsersUserID](docs/usersfindandmodifyusers/README.md#patchusersuserid) - Updates user fields
* [PostUsersUserID](docs/usersfindandmodifyusers/README.md#postusersuserid) - Updates a single user or adds the user if they don't exist
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
