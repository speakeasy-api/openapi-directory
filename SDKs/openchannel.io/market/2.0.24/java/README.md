# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            DeleteAppsAppIdRequest req = new DeleteAppsAppIdRequest() {{
                pathParams = new DeleteAppsAppIdPathParams() {{
                    appId = "voluptas";
                }};
                queryParams = new DeleteAppsAppIdQueryParams() {{
                    developerId = "voluptatem";
                }};
            }};

            DeleteAppsAppIdResponse res = sdk.appsFindAndModifyApps.deleteAppsAppId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### apps : Find and modify apps

* `deleteAppsAppId` - Removes app and all versions
* `deleteAppsAppIdVersionsVersion` - Removes AppVersion
* `getApps` - Returns a paginated list of APPROVED or SUSPENDED apps
* `getAppsBySafeNameSafeName` - Returns a single APPROVED or SUSPENDED app
* `getAppsTextSearch` - Searches through the text of fields to find APPROVED or SUSPENDED apps
* `getAppsVersions` - Returns a paginated list of AppVersions
* `getAppsAppId` - Returns a single APPROVED or SUSPENDED app
* `getAppsAppIdVersionsVersion` - Returns a single AppVersion
* `patchAppsAppIdVersionsVersion` - Updates the app fields or creates a new version
* `postApps` - Adds a new app for this developer
* `postAppsAppIdLive` - Change the live app to another, previously approved version
* `postAppsAppIdPublish` - Publishes the current working version of the app to the marketplace
* `postAppsAppIdVersionsVersion` - Updates the app or creates a new version
* `postAppsAppIdVersionsVersionStatus` - Allows a developer or administrator to change the status of apps

### custom-gateway : Process payments and refunds

* `postCustomGatewayPaymentOwnershipId` - Adds a payment for an app on behalf of a user
* `postCustomGatewayRefundOwnershipId` - Fully or partially refund payment for an app on behalf of a user

### developerAccounts : Find and modify developer accounts

* `deleteDeveloperAccountsDeveloperAccountId` - Removes the developer account
* `getDeveloperAccounts` - Returns a paginated list of developerAccounts
* `getDeveloperAccountsDeveloperAccountId` - Returns a single developer account
* `patchDeveloperAccountsDeveloperAccountId` - Updates the developer account fields
* `postDeveloperAccountsDeveloperAccountId` - Updates the developer account or adds the developer account if it doesn't exist

### developers : Find and modify developers

* `deleteDevelopersDeveloperId` - Removes a single developer
* `getDevelopers` - Returns a paginated list of developers
* `getDevelopersDeveloperId` - Returns a single developer
* `patchDevelopersDeveloperId` - Updates the developer fields
* `postDevelopersDeveloperId` - Updates the developer record or adds the developer if it doesn't exist

### events : Find events

* `getEventsEventId` - Returns an event

### files : Upload files 

* `getFiles` - Returns a paginated list of files
* `getFilesByIdOrUrl` - Get the details for a file.
* `getFilesDownload` - A signed URL for downloading a private file can be returned by providing the fileId.
* `postFiles` - Uploads a file.
* `postFilesUrl` - Uploads a file from a URL

### markets : This marketplace

* `getMarketsThis` - Returns the current marketplace

### ownership : Find ownership

* `getOwnership` - Returns a paginated list of app licenses
* `getOwnershipOwnershipId` - Returns an ownership record
* `patchOwnershipOwnershipId` - Updates ownership fields
* `postOwnershipInstall` - Aquires an app license for a user (installs app)
* `postOwnershipUninstallOwnershipId` - Uninstalls a license for a particular user and app (uninstalls app)
* `postOwnershipOwnershipId` - Updates an ownership record

### permission : Add and remove permissions 

* `deletePermissionAppsAppId` - Removes permission that allows the app to access this user's data
* `getPermissionAppsAppId` - Returns permission that allows the app to access this user's data
* `postPermissionAppsAppId` - Adds permission to allow the app to access this user's data

### reviews : Find and modify reviews 

* `deleteReviewsReviewId` - Remove a review
* `getReviews` - Find reviews for a particular App and marketplace. Results are automatically paginated when limit is set
* `getReviewsReviewId` - Find a Review within a particular App and marketplace
* `patchReviewsReviewId` - Update a review fields
* `postReviews` - Post a review from a User and returns the new post
* `postReviewsReviewId` - Update a review from a User and returns the new post

### stats: Find marketplace statistics

* `getStatsSeriesPeriodFields` - Return a timeseries for a particular field
* `getStatsTotal` - Returns the total number of events for a particular field.
* `postStatsIncrementField` - Increments a statistics field

### stripe-gateway : Process payments and refunds 

* `deleteStripeGatewayDeveloperDeveloperIdAccountsStripeId` - Disconnects a developer's Stripe account
* `deleteStripeGatewayUserUserIdCardsCardId` - Removes a credit card for a user
* `getStripeGatewayDeveloperDeveloperIdAccounts` - Returns a developers connected Stripe accounts
* `getStripeGatewayUserUserIdCards` - Returns credit cards for this user
* `postStripeGatewayDeveloperDeveloperIdAccounts` - Generate a temporary URL to allow a developer to connect their Stripe account
* `postStripeGatewayUserUserIdCards` - Adds credit card for this user
* `postStripeGatewayUserUserIdCardsCardId` - Updates a credit card for this user

### transactions : Find payments and refunds 

* `deleteTransactionsTransactionId` - Deleted a transaction
* `getTransactions` - Returns a paginated list of transactions
* `getTransactionsTransactionId` - Returns a transaction
* `postTransactionsTransactionId` - Updates a transaction

### userAccounts : Find and modify user accounts 

* `deleteUserAccountsUserAccountId` - Removes the user account
* `getUserAccounts` - Returns a paginated list of userAccounts
* `getUserAccountsUserAccountId` - Returns a single user account
* `patchUserAccountsUserAccountId` - Updates the user account fields
* `postUserAccountsUserAccountId` - Updates the user account or adds the user account if it doesn't exist

### users : Find and modify users 

* `deleteUsersUserId` - Removes a single user
* `getUsers` - Returns a paginated list of users
* `getUsersUserId` - Return a single user
* `patchUsersUserId` - Updates user fields
* `postUsersUserId` - Updates a single user or adds the user if they don't exist

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
