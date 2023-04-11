# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/openchannel.io/market/2.0.24/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/openchannel.io/market/2.0.24/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteAppsAppIdRequest,
  DeleteAppsAppIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    password: "YOUR_PASSWORD_HERE",
    username: "YOUR_USERNAME_HERE",
  },
});

const req: DeleteAppsAppIdRequest = {
  appId: "corrupti",
  developerId: "provident",
};

sdk.appsFindAndModifyApps.deleteAppsAppId(req).then((res: DeleteAppsAppIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### appsFindAndModifyApps

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

### customGatewayProcessPaymentsAndRefunds

* `postCustomGatewayPaymentOwnershipId` - Adds a payment for an app on behalf of a user
* `postCustomGatewayRefundOwnershipId` - Fully or partially refund payment for an app on behalf of a user

### developerAccountsFindAndModifyDeveloperAccounts

* `deleteDeveloperAccountsDeveloperAccountId` - Removes the developer account
* `getDeveloperAccounts` - Returns a paginated list of developerAccounts
* `getDeveloperAccountsDeveloperAccountId` - Returns a single developer account
* `patchDeveloperAccountsDeveloperAccountId` - Updates the developer account fields
* `postDeveloperAccountsDeveloperAccountId` - Updates the developer account or adds the developer account if it doesn't exist

### developersFindAndModifyDevelopers

* `deleteDevelopersDeveloperId` - Removes a single developer
* `getDevelopers` - Returns a paginated list of developers
* `getDevelopersDeveloperId` - Returns a single developer
* `patchDevelopersDeveloperId` - Updates the developer fields
* `postDevelopersDeveloperId` - Updates the developer record or adds the developer if it doesn't exist

### eventsFindEvents

* `getEventsEventId` - Returns an event

### filesUploadFiles

* `getFiles` - Returns a paginated list of files
* `getFilesByIdOrUrl` - Get the details for a file.
* `getFilesDownload` - A signed URL for downloading a private file can be returned by providing the fileId.
* `postFiles` - Uploads a file.
* `postFilesUrl` - Uploads a file from a URL

### marketsThisMarketplace

* `getMarketsThis` - Returns the current marketplace

### ownershipFindOwnership

* `getOwnership` - Returns a paginated list of app licenses
* `getOwnershipOwnershipId` - Returns an ownership record
* `patchOwnershipOwnershipId` - Updates ownership fields
* `postOwnershipInstall` - Aquires an app license for a user (installs app)
* `postOwnershipUninstallOwnershipId` - Uninstalls a license for a particular user and app (uninstalls app)
* `postOwnershipOwnershipId` - Updates an ownership record

### permissionAddAndRemovePermissions

* `deletePermissionAppsAppId` - Removes permission that allows the app to access this user's data
* `getPermissionAppsAppId` - Returns permission that allows the app to access this user's data
* `postPermissionAppsAppId` - Adds permission to allow the app to access this user's data

### reviewsFindAndModifyReviews

* `deleteReviewsReviewId` - Remove a review
* `getReviews` - Find reviews for a particular App and marketplace. Results are automatically paginated when limit is set
* `getReviewsReviewId` - Find a Review within a particular App and marketplace
* `patchReviewsReviewId` - Update a review fields
* `postReviews` - Post a review from a User and returns the new post
* `postReviewsReviewId` - Update a review from a User and returns the new post

### statsFindMarketplaceStatistics

* `getStatsSeriesPeriodFields` - Return a timeseries for a particular field
* `getStatsTotal` - Returns the total number of events for a particular field.
* `postStatsIncrementField` - Increments a statistics field

### stripeGatewayProcessPaymentsAndRefunds

* `deleteStripeGatewayDeveloperDeveloperIdAccountsStripeId` - Disconnects a developer's Stripe account
* `deleteStripeGatewayUserUserIdCardsCardId` - Removes a credit card for a user
* `getStripeGatewayDeveloperDeveloperIdAccounts` - Returns a developers connected Stripe accounts
* `getStripeGatewayUserUserIdCards` - Returns credit cards for this user
* `postStripeGatewayDeveloperDeveloperIdAccounts` - Generate a temporary URL to allow a developer to connect their Stripe account
* `postStripeGatewayUserUserIdCards` - Adds credit card for this user
* `postStripeGatewayUserUserIdCardsCardId` - Updates a credit card for this user

### transactionsFindPaymentsAndRefunds

* `deleteTransactionsTransactionId` - Deleted a transaction
* `getTransactions` - Returns a paginated list of transactions
* `getTransactionsTransactionId` - Returns a transaction
* `postTransactionsTransactionId` - Updates a transaction

### userAccountsFindAndModifyUserAccounts

* `deleteUserAccountsUserAccountId` - Removes the user account
* `getUserAccounts` - Returns a paginated list of userAccounts
* `getUserAccountsUserAccountId` - Returns a single user account
* `patchUserAccountsUserAccountId` - Updates the user account fields
* `postUserAccountsUserAccountId` - Updates the user account or adds the user account if it doesn't exist

### usersFindAndModifyUsers

* `deleteUsersUserId` - Removes a single user
* `getUsers` - Returns a paginated list of users
* `getUsersUserId` - Return a single user
* `patchUsersUserId` - Updates user fields
* `postUsersUserId` - Updates a single user or adds the user if they don't exist
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

