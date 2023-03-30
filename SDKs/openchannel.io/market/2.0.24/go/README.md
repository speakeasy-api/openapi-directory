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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    req := operations.DeleteAppsAppIDRequest{
        PathParams: operations.DeleteAppsAppIDPathParams{
            AppID: "corrupti",
        },
        QueryParams: operations.DeleteAppsAppIDQueryParams{
            DeveloperID: "provident",
        },
    }

    ctx := context.Background()
    res, err := s.AppsFindAndModifyApps.DeleteAppsAppID(ctx, req)
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
## SDK Available Operations


### AppsFindAndModifyApps

* `DeleteAppsAppID` - Removes app and all versions
* `DeleteAppsAppIDVersionsVersion` - Removes AppVersion
* `GetApps` - Returns a paginated list of APPROVED or SUSPENDED apps
* `GetAppsBySafeNameSafeName` - Returns a single APPROVED or SUSPENDED app
* `GetAppsTextSearch` - Searches through the text of fields to find APPROVED or SUSPENDED apps
* `GetAppsVersions` - Returns a paginated list of AppVersions
* `GetAppsAppID` - Returns a single APPROVED or SUSPENDED app
* `GetAppsAppIDVersionsVersion` - Returns a single AppVersion
* `PatchAppsAppIDVersionsVersion` - Updates the app fields or creates a new version
* `PostApps` - Adds a new app for this developer
* `PostAppsAppIDLive` - Change the live app to another, previously approved version
* `PostAppsAppIDPublish` - Publishes the current working version of the app to the marketplace
* `PostAppsAppIDVersionsVersion` - Updates the app or creates a new version
* `PostAppsAppIDVersionsVersionStatus` - Allows a developer or administrator to change the status of apps

### CustomGatewayProcessPaymentsAndRefunds

* `PostCustomGatewayPaymentOwnershipID` - Adds a payment for an app on behalf of a user
* `PostCustomGatewayRefundOwnershipID` - Fully or partially refund payment for an app on behalf of a user

### DeveloperAccountsFindAndModifyDeveloperAccounts

* `DeleteDeveloperAccountsDeveloperAccountID` - Removes the developer account
* `GetDeveloperAccounts` - Returns a paginated list of developerAccounts
* `GetDeveloperAccountsDeveloperAccountID` - Returns a single developer account
* `PatchDeveloperAccountsDeveloperAccountID` - Updates the developer account fields
* `PostDeveloperAccountsDeveloperAccountID` - Updates the developer account or adds the developer account if it doesn't exist

### DevelopersFindAndModifyDevelopers

* `DeleteDevelopersDeveloperID` - Removes a single developer
* `GetDevelopers` - Returns a paginated list of developers
* `GetDevelopersDeveloperID` - Returns a single developer
* `PatchDevelopersDeveloperID` - Updates the developer fields
* `PostDevelopersDeveloperID` - Updates the developer record or adds the developer if it doesn't exist

### EventsFindEvents

* `GetEventsEventID` - Returns an event

### FilesUploadFiles

* `GetFiles` - Returns a paginated list of files
* `GetFilesByIDOrURL` - Get the details for a file.
* `GetFilesDownload` - A signed URL for downloading a private file can be returned by providing the fileId.
* `PostFiles` - Uploads a file.
* `PostFilesURL` - Uploads a file from a URL

### MarketsThisMarketplace

* `GetMarketsThis` - Returns the current marketplace

### OwnershipFindOwnership

* `GetOwnership` - Returns a paginated list of app licenses
* `GetOwnershipOwnershipID` - Returns an ownership record
* `PatchOwnershipOwnershipID` - Updates ownership fields
* `PostOwnershipInstall` - Aquires an app license for a user (installs app)
* `PostOwnershipUninstallOwnershipID` - Uninstalls a license for a particular user and app (uninstalls app)
* `PostOwnershipOwnershipID` - Updates an ownership record

### PermissionAddAndRemovePermissions

* `DeletePermissionAppsAppID` - Removes permission that allows the app to access this user's data
* `GetPermissionAppsAppID` - Returns permission that allows the app to access this user's data
* `PostPermissionAppsAppID` - Adds permission to allow the app to access this user's data

### ReviewsFindAndModifyReviews

* `DeleteReviewsReviewID` - Remove a review
* `GetReviews` - Find reviews for a particular App and marketplace. Results are automatically paginated when limit is set
* `GetReviewsReviewID` - Find a Review within a particular App and marketplace
* `PatchReviewsReviewID` - Update a review fields
* `PostReviews` - Post a review from a User and returns the new post
* `PostReviewsReviewID` - Update a review from a User and returns the new post

### StatsFindMarketplaceStatistics

* `GetStatsSeriesPeriodFields` - Return a timeseries for a particular field
* `GetStatsTotal` - Returns the total number of events for a particular field.
* `PostStatsIncrementField` - Increments a statistics field

### StripeGatewayProcessPaymentsAndRefunds

* `DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeID` - Disconnects a developer's Stripe account
* `DeleteStripeGatewayUserUserIDCardsCardID` - Removes a credit card for a user
* `GetStripeGatewayDeveloperDeveloperIDAccounts` - Returns a developers connected Stripe accounts
* `GetStripeGatewayUserUserIDCards` - Returns credit cards for this user
* `PostStripeGatewayDeveloperDeveloperIDAccounts` - Generate a temporary URL to allow a developer to connect their Stripe account
* `PostStripeGatewayUserUserIDCards` - Adds credit card for this user
* `PostStripeGatewayUserUserIDCardsCardID` - Updates a credit card for this user

### TransactionsFindPaymentsAndRefunds

* `DeleteTransactionsTransactionID` - Deleted a transaction
* `GetTransactions` - Returns a paginated list of transactions
* `GetTransactionsTransactionID` - Returns a transaction
* `PostTransactionsTransactionID` - Updates a transaction

### UserAccountsFindAndModifyUserAccounts

* `DeleteUserAccountsUserAccountID` - Removes the user account
* `GetUserAccounts` - Returns a paginated list of userAccounts
* `GetUserAccountsUserAccountID` - Returns a single user account
* `PatchUserAccountsUserAccountID` - Updates the user account fields
* `PostUserAccountsUserAccountID` - Updates the user account or adds the user account if it doesn't exist

### UsersFindAndModifyUsers

* `DeleteUsersUserID` - Removes a single user
* `GetUsers` - Returns a paginated list of users
* `GetUsersUserID` - Return a single user
* `PatchUsersUserID` - Updates user fields
* `PostUsersUserID` - Updates a single user or adds the user if they don't exist
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
