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
import org.openapis.openapi.models.operations.DeleteAppsAppIdRequest;
import org.openapis.openapi.models.operations.DeleteAppsAppIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "provident") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteAppsAppIdRequest req = new DeleteAppsAppIdRequest("distinctio", "quibusdam");            

            DeleteAppsAppIdResponse res = sdk.appsFindAndModifyApps.deleteAppsAppId(req);

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


### [appsFindAndModifyApps](docs/appsfindandmodifyapps/README.md)

* [deleteAppsAppId](docs/appsfindandmodifyapps/README.md#deleteappsappid) - Removes app and all versions
* [deleteAppsAppIdVersionsVersion](docs/appsfindandmodifyapps/README.md#deleteappsappidversionsversion) - Removes AppVersion
* [getApps](docs/appsfindandmodifyapps/README.md#getapps) - Returns a paginated list of APPROVED or SUSPENDED apps
* [getAppsBySafeNameSafeName](docs/appsfindandmodifyapps/README.md#getappsbysafenamesafename) - Returns a single APPROVED or SUSPENDED app
* [getAppsTextSearch](docs/appsfindandmodifyapps/README.md#getappstextsearch) - Searches through the text of fields to find APPROVED or SUSPENDED apps
* [getAppsVersions](docs/appsfindandmodifyapps/README.md#getappsversions) - Returns a paginated list of AppVersions
* [getAppsAppId](docs/appsfindandmodifyapps/README.md#getappsappid) - Returns a single APPROVED or SUSPENDED app
* [getAppsAppIdVersionsVersion](docs/appsfindandmodifyapps/README.md#getappsappidversionsversion) - Returns a single AppVersion
* [patchAppsAppIdVersionsVersion](docs/appsfindandmodifyapps/README.md#patchappsappidversionsversion) - Updates the app fields or creates a new version
* [postApps](docs/appsfindandmodifyapps/README.md#postapps) - Adds a new app for this developer
* [postAppsAppIdLive](docs/appsfindandmodifyapps/README.md#postappsappidlive) - Change the live app to another, previously approved version
* [postAppsAppIdPublish](docs/appsfindandmodifyapps/README.md#postappsappidpublish) - Publishes the current working version of the app to the marketplace
* [postAppsAppIdVersionsVersion](docs/appsfindandmodifyapps/README.md#postappsappidversionsversion) - Updates the app or creates a new version
* [postAppsAppIdVersionsVersionStatus](docs/appsfindandmodifyapps/README.md#postappsappidversionsversionstatus) - Allows a developer or administrator to change the status of apps

### [customGatewayProcessPaymentsAndRefunds](docs/customgatewayprocesspaymentsandrefunds/README.md)

* [postCustomGatewayPaymentOwnershipId](docs/customgatewayprocesspaymentsandrefunds/README.md#postcustomgatewaypaymentownershipid) - Adds a payment for an app on behalf of a user
* [postCustomGatewayRefundOwnershipId](docs/customgatewayprocesspaymentsandrefunds/README.md#postcustomgatewayrefundownershipid) - Fully or partially refund payment for an app on behalf of a user

### [developerAccountsFindAndModifyDeveloperAccounts](docs/developeraccountsfindandmodifydeveloperaccounts/README.md)

* [deleteDeveloperAccountsDeveloperAccountId](docs/developeraccountsfindandmodifydeveloperaccounts/README.md#deletedeveloperaccountsdeveloperaccountid) - Removes the developer account
* [getDeveloperAccounts](docs/developeraccountsfindandmodifydeveloperaccounts/README.md#getdeveloperaccounts) - Returns a paginated list of developerAccounts
* [getDeveloperAccountsDeveloperAccountId](docs/developeraccountsfindandmodifydeveloperaccounts/README.md#getdeveloperaccountsdeveloperaccountid) - Returns a single developer account
* [patchDeveloperAccountsDeveloperAccountId](docs/developeraccountsfindandmodifydeveloperaccounts/README.md#patchdeveloperaccountsdeveloperaccountid) - Updates the developer account fields
* [postDeveloperAccountsDeveloperAccountId](docs/developeraccountsfindandmodifydeveloperaccounts/README.md#postdeveloperaccountsdeveloperaccountid) - Updates the developer account or adds the developer account if it doesn't exist

### [developersFindAndModifyDevelopers](docs/developersfindandmodifydevelopers/README.md)

* [deleteDevelopersDeveloperId](docs/developersfindandmodifydevelopers/README.md#deletedevelopersdeveloperid) - Removes a single developer
* [getDevelopers](docs/developersfindandmodifydevelopers/README.md#getdevelopers) - Returns a paginated list of developers
* [getDevelopersDeveloperId](docs/developersfindandmodifydevelopers/README.md#getdevelopersdeveloperid) - Returns a single developer
* [patchDevelopersDeveloperId](docs/developersfindandmodifydevelopers/README.md#patchdevelopersdeveloperid) - Updates the developer fields
* [postDevelopersDeveloperId](docs/developersfindandmodifydevelopers/README.md#postdevelopersdeveloperid) - Updates the developer record or adds the developer if it doesn't exist

### [eventsFindEvents](docs/eventsfindevents/README.md)

* [getEventsEventId](docs/eventsfindevents/README.md#geteventseventid) - Returns an event

### [filesUploadFiles](docs/filesuploadfiles/README.md)

* [getFiles](docs/filesuploadfiles/README.md#getfiles) - Returns a paginated list of files
* [getFilesByIdOrUrl](docs/filesuploadfiles/README.md#getfilesbyidorurl) - Get the details for a file.
* [getFilesDownload](docs/filesuploadfiles/README.md#getfilesdownload) - A signed URL for downloading a private file can be returned by providing the fileId.
* [postFiles](docs/filesuploadfiles/README.md#postfiles) - Uploads a file.
* [postFilesUrl](docs/filesuploadfiles/README.md#postfilesurl) - Uploads a file from a URL

### [marketsThisMarketplace](docs/marketsthismarketplace/README.md)

* [getMarketsThis](docs/marketsthismarketplace/README.md#getmarketsthis) - Returns the current marketplace

### [ownershipFindOwnership](docs/ownershipfindownership/README.md)

* [getOwnership](docs/ownershipfindownership/README.md#getownership) - Returns a paginated list of app licenses
* [getOwnershipOwnershipId](docs/ownershipfindownership/README.md#getownershipownershipid) - Returns an ownership record
* [patchOwnershipOwnershipId](docs/ownershipfindownership/README.md#patchownershipownershipid) - Updates ownership fields
* [postOwnershipInstall](docs/ownershipfindownership/README.md#postownershipinstall) - Aquires an app license for a user (installs app)
* [postOwnershipUninstallOwnershipId](docs/ownershipfindownership/README.md#postownershipuninstallownershipid) - Uninstalls a license for a particular user and app (uninstalls app)
* [postOwnershipOwnershipId](docs/ownershipfindownership/README.md#postownershipownershipid) - Updates an ownership record

### [permissionAddAndRemovePermissions](docs/permissionaddandremovepermissions/README.md)

* [deletePermissionAppsAppId](docs/permissionaddandremovepermissions/README.md#deletepermissionappsappid) - Removes permission that allows the app to access this user's data
* [getPermissionAppsAppId](docs/permissionaddandremovepermissions/README.md#getpermissionappsappid) - Returns permission that allows the app to access this user's data
* [postPermissionAppsAppId](docs/permissionaddandremovepermissions/README.md#postpermissionappsappid) - Adds permission to allow the app to access this user's data

### [reviewsFindAndModifyReviews](docs/reviewsfindandmodifyreviews/README.md)

* [deleteReviewsReviewId](docs/reviewsfindandmodifyreviews/README.md#deletereviewsreviewid) - Remove a review
* [getReviews](docs/reviewsfindandmodifyreviews/README.md#getreviews) - Find reviews for a particular App and marketplace. Results are automatically paginated when limit is set
* [getReviewsReviewId](docs/reviewsfindandmodifyreviews/README.md#getreviewsreviewid) - Find a Review within a particular App and marketplace
* [patchReviewsReviewId](docs/reviewsfindandmodifyreviews/README.md#patchreviewsreviewid) - Update a review fields
* [postReviews](docs/reviewsfindandmodifyreviews/README.md#postreviews) - Post a review from a User and returns the new post
* [postReviewsReviewId](docs/reviewsfindandmodifyreviews/README.md#postreviewsreviewid) - Update a review from a User and returns the new post

### [statsFindMarketplaceStatistics](docs/statsfindmarketplacestatistics/README.md)

* [getStatsSeriesPeriodFields](docs/statsfindmarketplacestatistics/README.md#getstatsseriesperiodfields) - Return a timeseries for a particular field
* [getStatsTotal](docs/statsfindmarketplacestatistics/README.md#getstatstotal) - Returns the total number of events for a particular field.
* [postStatsIncrementField](docs/statsfindmarketplacestatistics/README.md#poststatsincrementfield) - Increments a statistics field

### [stripeGatewayProcessPaymentsAndRefunds](docs/stripegatewayprocesspaymentsandrefunds/README.md)

* [deleteStripeGatewayDeveloperDeveloperIdAccountsStripeId](docs/stripegatewayprocesspaymentsandrefunds/README.md#deletestripegatewaydeveloperdeveloperidaccountsstripeid) - Disconnects a developer's Stripe account
* [deleteStripeGatewayUserUserIdCardsCardId](docs/stripegatewayprocesspaymentsandrefunds/README.md#deletestripegatewayuseruseridcardscardid) - Removes a credit card for a user
* [getStripeGatewayDeveloperDeveloperIdAccounts](docs/stripegatewayprocesspaymentsandrefunds/README.md#getstripegatewaydeveloperdeveloperidaccounts) - Returns a developers connected Stripe accounts
* [getStripeGatewayUserUserIdCards](docs/stripegatewayprocesspaymentsandrefunds/README.md#getstripegatewayuseruseridcards) - Returns credit cards for this user
* [postStripeGatewayDeveloperDeveloperIdAccounts](docs/stripegatewayprocesspaymentsandrefunds/README.md#poststripegatewaydeveloperdeveloperidaccounts) - Generate a temporary URL to allow a developer to connect their Stripe account
* [postStripeGatewayUserUserIdCards](docs/stripegatewayprocesspaymentsandrefunds/README.md#poststripegatewayuseruseridcards) - Adds credit card for this user
* [postStripeGatewayUserUserIdCardsCardId](docs/stripegatewayprocesspaymentsandrefunds/README.md#poststripegatewayuseruseridcardscardid) - Updates a credit card for this user

### [transactionsFindPaymentsAndRefunds](docs/transactionsfindpaymentsandrefunds/README.md)

* [deleteTransactionsTransactionId](docs/transactionsfindpaymentsandrefunds/README.md#deletetransactionstransactionid) - Deleted a transaction
* [getTransactions](docs/transactionsfindpaymentsandrefunds/README.md#gettransactions) - Returns a paginated list of transactions
* [getTransactionsTransactionId](docs/transactionsfindpaymentsandrefunds/README.md#gettransactionstransactionid) - Returns a transaction
* [postTransactionsTransactionId](docs/transactionsfindpaymentsandrefunds/README.md#posttransactionstransactionid) - Updates a transaction

### [userAccountsFindAndModifyUserAccounts](docs/useraccountsfindandmodifyuseraccounts/README.md)

* [deleteUserAccountsUserAccountId](docs/useraccountsfindandmodifyuseraccounts/README.md#deleteuseraccountsuseraccountid) - Removes the user account
* [getUserAccounts](docs/useraccountsfindandmodifyuseraccounts/README.md#getuseraccounts) - Returns a paginated list of userAccounts
* [getUserAccountsUserAccountId](docs/useraccountsfindandmodifyuseraccounts/README.md#getuseraccountsuseraccountid) - Returns a single user account
* [patchUserAccountsUserAccountId](docs/useraccountsfindandmodifyuseraccounts/README.md#patchuseraccountsuseraccountid) - Updates the user account fields
* [postUserAccountsUserAccountId](docs/useraccountsfindandmodifyuseraccounts/README.md#postuseraccountsuseraccountid) - Updates the user account or adds the user account if it doesn't exist

### [usersFindAndModifyUsers](docs/usersfindandmodifyusers/README.md)

* [deleteUsersUserId](docs/usersfindandmodifyusers/README.md#deleteusersuserid) - Removes a single user
* [getUsers](docs/usersfindandmodifyusers/README.md#getusers) - Returns a paginated list of users
* [getUsersUserId](docs/usersfindandmodifyusers/README.md#getusersuserid) - Return a single user
* [patchUsersUserId](docs/usersfindandmodifyusers/README.md#patchusersuserid) - Updates user fields
* [postUsersUserId](docs/usersfindandmodifyusers/README.md#postusersuserid) - Updates a single user or adds the user if they don't exist
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
