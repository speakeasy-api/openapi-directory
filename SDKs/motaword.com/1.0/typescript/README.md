# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/motaword.com/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/motaword.com/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteCacheRequest,
  DeleteCacheResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    mwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: DeleteCacheRequest = {
  key: "corrupti",
};

sdk.deleteCache(req).then((res: DeleteCacheResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `deleteCache` - Clear cache by key

### activity

* `getActivities` - Monitor project activities
* `getActivity` - View an activity
* `getActivityComments` - View activity comments
* `getComments` - View all project comments
* `getSalesActivities` - Get sales activities for a project
* `insertSalesActivity` - Insert sales activity for a project
* `submitCommentJson` - Submit comment to an activity
* `submitCommentMultipart` - Submit comment to an activity

### async

* `downloadAsync` - Download result of an async operation

### auth

* `getAccessToken` - Retrieve an access token

### blog

* `getBlogPosts` - Get blog posts - ordered by created desc by default

### commission

* `getCommissions` - Returns a commission list of current client.
* `getCommissionsByFilter` - Returns a commission list of current client.

### continuousProject

* `addDocument` - Add a new document to your continuous project
* `collectAnalytics` - Save/collect analytics data from Active widget
* `complete` - Complete continuous project
* `completeContinuousDocument` - Complete a continuous project document
* `completeLanguage` - Complete continuous project language
* `createActiveWidget` - Create a new Active widget
* `createContinuousProject` - Create a continuous project
* `createSubscription` - Create subscription for continuous project
* `deleteActiveWidget` - Delete a single widget for this Active project
* `deleteContinuousProject` - Delete a continuous project
* `deleteSubscription` - Delete subscription for continuous project
* `getActiveWidget` - View an Active widget
* `getActiveWidgets` - View Active widgets
* `getAnalyticsToken` - Get JWT token to be used in analytics dashboards
* `getContinuousProject` - View a continuous project
* `getContinuousProjectDocument` - View a continuous document
* `getContinuousProjectDocumentProgress` - Monitor progress of a continuous document
* `getContinuousProjectDocuments` - View continuous documents
* `getContinuousProjectInvoices` - Invoices of a continuous project
* `getContinuousProjectProgress` - Monitor progress and status of a continous project
* `getContinuousProjects` - View continuous projects
* `getQuoteForDocument` - Get a quote for a continuous project document
* `getQuoteForDocuments` - Get quote for documents
* `getQuoteForLanguage` - Get quote for language
* `getQuoteForLanguages` - Get quote for languages
* `getSubscription` - Get subscription for continuous project
* `postContinuousProjectDocumentProgress` - Get continuous project document progress for multiple IDs
* `resetActiveWidgetToken` - Reset Active widget token
* `translate` - Instantly translate your content
* `updateActiveWidget` - Update Active widget settings.
* `updateContinuousProject` - Update a continuous project
* `updateDocument` - Update the document
* `updateSubscription` - Update subscription for continuous project
* `updateSubscriptionPaymentMethod` - Update subscription payment method for continuous project

### corporate

* `getAvailableCorporatePermissions` - View available permissions
* `getAvailableCorporatePermissionsById` - Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
* `getCorporate` - View your corporate account
* `getCorporateById` - Get details of this corporate account
* `getCorporateUserGroups` - View user groups
* `getCorporateUserGroupsById` - Get a list of user groups for this corporate account
* `getCorporateUsers` - View users
* `getCorporateUsersById` - Get a list of users for this corporate account
* `getCorporatesList` - Get a list of corporate accounts
* `saveCorporateUser` - Create or update a user
* `saveCorporateUserGroup` - Create or update a corporate user group
* `saveCorporateUserGroupById` - Create or update a corporate user group for this corporate account

### document

* `getAllDocumentSubjects` - Get a list of subjects of projects
* `getDocument` - View a single document
* `getDocumentProgress` - View a document translation progress
* `getDocuments` - View your documents
* `getSimilarDocuments` - Find documents similar to this document.
* `getUserDocuments` - Get a list of your documents
* `regeneratePreview` - Regenerate preview and return preview URL for given file
* `useAsDraft` - Use the translation of given source manual document as manual draft source for the given target document.
* `useAsRegular` - Use the translation of the given manual document as a regular file.

### glossary

* `createGlossaryJson` - Upload a glossary file
* `createGlossaryMultipart` - Upload a glossary file
* `deleteGlossary` - Delete a glossary
* `downloadGlobalGlossary` - Download account glossary.
* `downloadGlossary` - Download a glossary
* `getGlossaries` - View glossaries
* `getGlossary` - View a glossary
* `updateGlobalGlossaryJson` - Create or update the account glossary
* `updateGlobalGlossaryMultipart` - Create or update the account glossary
* `updateGlossaryJson` - Update a glossary
* `updateGlossaryMultipart` - Update a glossary

### integrations

* `getIntegrationsToken` - Generate a new access token for MotaWord's integrations service

### invitation

* `getInvitationVendors` - Get vendor list for compiled invitation needs

### machineLearning

* `getDeliveryPrediction` - Get a delivery prediction for a project

### pam

* `getClientProfileForPam` - Get the Pam profile of a client for this client ID
* `getProjectCompletionReportForPam` - Get completion report data of a project
* `postMessage` - Sends a message to chat

### payment

* `deleteCreditCard` - Delete credit card
* `getCreditCard` - View saved credit card
* `resetCardPaymentCode` - Reset credit card payment code
* `resetCorporatePaymentCode` - Reset payment code
* `toggleCorporateAutoCharge` - Manage automatic charges on your credit card

### project

* `assignCM` - Assign a CM to the project
* `cancelProject` - Cancel your translation project
* `createProjectJson` - Create a new project
* `createProjectMultipart` - Create a new project
* `deleteProject` - Delete your translation project
* `deliverProject` - Deliver project
* `download` - Download your translated project
* `downloadHtmlInvoice` - Download project invoice (HTML)
* `downloadLanguage` - Download your translated project language
* `downloadPdfInvoice` - Download project invoice (PDF)
* `getInvoice` - View project invoice
* `getProgress` - View progress of a project
* `getProject` - View a translation project
* `getProjectVendors` - Get a list of vendors.
* `getProjects` - View your translation projects
* `getQuoteIdFromInternalId` - Get Quote Id
* `getVendorProjects` - List projects as a vendor
* `getVendorProjectsByUserId` - Get a list of user/vendor projects
* `launchProject` - Launch your translation project
* `package` - Package your translated project
* `packageLanguage` - Package your translated project language
* `recreateProject` - Recreate your translation project from scratch. This is a risky action, you will lose current translations.
* `sendQuoteEmail` - Send a quote email
* `submitProjectReports` - Submit feedback report for a project
* `trackPackage` - Track translation packaging status
* `triggerCallback` - Trigger a call to your callback URL related to this project.
* `updateProject` - Update project info and settings

### projectDocument

* `createProjectDocument` - Upload a new document
* `deleteProjectDocument` - Delete the document
* `downloadProjectDocument` - Download a project source document
* `downloadTranslatedDocumentForLanguage` - Download translated document
* `getProjectDocument` - View a project source document
* `getProjectDocuments` - View project source documents
* `updateProjectDocumentJson` - Update the document.
* `updateProjectDocumentMultipart` - Update the document.

### projectWebhooks

* `deleteProjectWebhook` - Delete project webhooks
* `getProjectWebhooks` - View project webhooks
* `postProjectWebhook` - Update project webhook
* `updateProjectWebhook` - Update project webhook

### report

* `generateQAReport` - Generate a QA report for given filter
* `getFilterContents` - Returns available options for selected timeframe.
* `getLanguagePairsReport` - Language pairs report
* `getProjectsReport` - Projects report
* `getUsersReport` - Company users report

### search

* `checkDocumentsReindex` - Check reindex status of the client source and translation documents.
* `reindexDocuments` - Reindex for search all of the client source and translation documents.
* `searchEverywhere` - Search everything in your account

### static

* `getEndpoints` - Available endpoints
* `getFormats` - List of supported file formats
* `getLanguages` - List of supported languages
* `getSwaggerYaml` - OpenAPI YAML representation of our API

### stats

* `getCommissionStats` - Returns the total commissions stats.
* `getCommissionStatsByFilter` - Returns the total commissions stats by report filter.
* `getPopularPairs` - View your popular language pairs
* `getProjectStats` - View your project statistics
* `getStringStats` - View your translation statistics

### strings

* `clearTranslationCache` - Clear translation cache
* `getContinuousProjectFileStrings` - View strings their translations in a continuous document
* `getContinuousProjectStrings` - View strings and translations in continuous project
* `getDocumentTranslations` - View strings and translations of a document
* `getDocumentTranslationsForLanguage` - View strings and translations of a document for target language
* `getProjectStrings` - View project strings and translations
* `getProjectStringsForLanguage` - View strings and translations for target language
* `getProjectTranslations` - Deprecated. Use /projects/{projectId}/strings instead.
* `getProjectTranslationsForLanguage` - Deprecated. use /projects/{projectId}/strings/{language} instead.
* `getStrings` - View account strings (translation memory)
* `getTranslationCache` - View cached strings translations in continuous project
* `packageProjectTranslationMemory` - Download project translation memory
* `packageProjectTranslationMemoryForLanguage` - Download language-specific project translation memory
* `packageProjectTranslationMemoryForLanguageStatus` - Check language-specific translation memory packaging status
* `packageProjectTranslationMemoryStatus` - Check translation memory packaging status
* `packageUserTranslationMemory` - Download account translation memory
* `packageUserTranslationMemoryForLanguageStatus` - Check account translation memory packaging status
* `postContinuousProjectFileStrings` - Get a list of strings and its translations in the project.
* `postStrings` - Translate Strings with MT
* `recacheTranslations` - Recache translations
* `updateTranslationMemoryUnit` - Update string translation

### styleGuide

* `createStyleGuideJson` - Upload a new style guide
* `createStyleGuideMultipart` - Upload a new style guide
* `deleteStyleGuide` - Delete a style guide
* `downloadGlobalStyleGuide` - Download account style guide
* `downloadStyleGuide` - Download a style guide
* `getStyleGuide` - View a style guide
* `getStyleGuides` - View style guides
* `updateGlobalStyleGuideJson` - Create or update the account style guide
* `updateGlobalStyleGuideMultipart` - Create or update the account style guide
* `updateStyleGuideJson` - Update a style guide
* `updateStyleGuideMultipart` - Update a style guide

### surveys

* `getQuestions` - Get survey questions in given scope and type
* `submitAnswers` - Post survey answers for scope and type

### user

* `approveVendorApplication`
* `createUser` - Create a new user
* `deleteAccount` - Delete your account
* `deleteUserAccount` - Delete requester account
* `downgradeProofreader`
* `downgradeUserProofreader`
* `freezeAccount` - Freeze account
* `freezeUserAccount` - Freeze requester account for project notifications
* `getAllVendorTags` - Returns all vendor tags for vendors filter
* `getEarnings` - View your vendor earnings
* `getFilteredVendors` - Filter vendors based on provided parameters
* `getMe` - View your account info
* `getPaymentInfo` - View your payment and billing info
* `getPermissions` - View your permissions
* `getResponsivity` - View your vendor responsiveness
* `getStats` - View your account statistics
* `getThisUserGroups` - Returns a list of user groups that this user belongs to.
* `getUser` - Get user information, including client or vendor specific info.
* `getUserEarnings` - Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.
* `getUserGroups` - View your user groups
* `getUserPaymentInfo` - View user's payment and billing info
* `getUserPermissions` - Returns a list of permissions that this user is authorized for.
* `getUserPopularPairs` - Returns the language pairs that the user has ordered most.
* `getUserProjectStats` - Returns a user's project statistics.
* `getUserResponsivity` - Returns a user's vendor responsivity stats
* `getUserStats` - Returns a user's client and vendor statistics. This used to be called "summary" (\@deprecated).
* `getUsers` - Get a list of platform users
* `logLocation` - Log user's current location. This data is used in our Intelligent Project Manager for various data analysis, including project prioritization for vendors and account validation.
* `makeProofreader`
* `makeUserProofreader`
* `rejectVendorApplication`
* `sendEmailConfirmation` - Sends email confirmation email for current user
* `sendPasswordReminder` - Sends password reset email to the user's registered email address
* `sendUserEmailConfirmation` - Sends email confirmation email for a user
* `subscribeNotification` - Subscribe to push notifications
* `subscribeUserNotification`
* `suspendUser`
* `unfreezeAccount` - Defreeze your account
* `unfreezeUserAccount` - Unfreeze requester account for project notifications
* `unsubscribeNotification`
* `unsubscribeUserNotification`
* `updateMe` - Update your account info
* `updatePassword` - Update your account password
* `updatePaymentInfo` - Update payment info
* `updateUser`
* `updateUserGroup`
* `updateUserPaymentInfo` - Update user payment info
* `uploadProfilePictureJson` - Upload profile picture
* `uploadProfilePictureMultipart` - Upload profile picture
* `uploadUserProfilePictureJson`
* `uploadUserProfilePictureMultipart`

### vendor

* `getAvailableVendors` - Get a list of vendors available for the criteria given
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

