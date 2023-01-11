# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteCacheRequest, DeleteCacheResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    mwoAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));
    
const req: DeleteCacheRequest = {
  pathParams: {
    key: "sit",
  },
};

sdk.deleteCache(req).then((res: DeleteCacheResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `deleteCache` - Clear cache by key

### Activity

* `getActivities` - Get a list of realtime activities.
* `getActivity` - Get a single realtime activity.
* `getActivityComments` - Get a list of comments belonging to this activity.
* `getComments` - Get a list of activity comments throughout the whole project.
* `getSalesActivities` - Get sales activities for a project
* `insertSalesActivity` - Insert sales activity for a project
* `submitComment` - Submit a comment to an activity.

### Async

* `downloadAsync` - Download async request files

### Auth

* `getAccessToken` - Retrieve an access token to interact with the API.

### Blog

* `getBlogPosts` - Get blog posts - ordered by created desc by default

### Commission

* `getCommissions` - Returns a commission list of current client.
* `getCommissionsByFilter` - Returns a commission list of current client.

### ContinuousProject

* `collectAnalytics` - Save/collect analytics data from Active widget
* `createActiveWidget` - Create a new Active widget. This does not create a new Active project, just a separate widget.
* `createContinuousProject` - Create a new continuous project
* `deleteActiveWidget` - Delete a single widget for this Active project
* `deleteContinuousProject` - Delete single continuous project
* `getActiveWidget` - Get a single widget for this Active project
* `getActiveWidgets` - Get widgets for this Active project
* `getAnalyticsToken` - Get JWT token to be used in analytics dashboards
* `getContinuousProject` - Get single continuous project
* `getContinuousProjects` - Get a list of continuous projects
* `resetActiveWidgetToken` - Resets the access token of the Active widget.
* `translate` - Instantly translate your content with your existing TM and MT resources.
* `updateActiveWidget` - Update Active widget settings.
* `updateContinuousProject` - Update continuous project

### Corporate

* `getAvailableCorporatePermissions` - Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
* `getAvailableCorporatePermissionsById` - Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
* `getCorporate` - Get details of my corporate account
* `getCorporateById` - Get details of this corporate account
* `getCorporateUserGroups` - Get a list of user groups for my corporate account
* `getCorporateUserGroupsById` - Get a list of user groups for this corporate account
* `getCorporateUsers` - Get a list of users for my corporate account
* `getCorporateUsersById` - Get a list of users for this corporate account
* `saveCorporateUser` - Create or update a corporate user
* `saveCorporateUserGroup` - Create or update a corporate user group
* `saveCorporateUserGroupById` - Create or update a corporate user group for this corporate account

### Document

* `getDocuments` - Get a list of your documents
* `getSimilarDocuments` - Find documents similar to this document.
* `getUserDocuments` - Get a list of your documents
* `regeneratePreview` - Regenerate preview and return preview URL for given file
* `useAsDraft` - Use the translation of given source manual document as manual draft source for the given target document.
* `useAsRegular` - Use the translation of the given manual document as a regular file.

### Glossary

* `createGlossary` - Upload a new glossary
* `deleteGlossary` - Delete the glossary
* `downloadGlobalGlossary` - Download the global glossary.
* `downloadGlossary` - Download a glossary
* `getGlossaries` - Get a list of glossaries
* `getGlossary` - Get single glossary
* `updateGlobalGlossary` - Create or update the global glossary.
* `updateGlossary` - Update the glossary.

### Invitation

* `getInvitationVendors` - Get vendor list for compiled invitation needs

### Pam

* `getClientProfileForPam` - Get the Pam profile of a client for this client ID

### Payment

* `deleteCreditCard` - Delete credit card.
* `getCreditCard` - Get credit card by cardId
* `resetCardPaymentCode` - Reset credit card payment code.
* `resetCorporatePaymentCode` - Reset corporate credit card payment code.
* `toggleCorporateAutoCharge` - Toggle corporate auto charge option.

### Project

* `cancelProject` - Cancel your translation project
* `createProject` - Get a new quote
* `deleteProject` - Delete a project
* `deliverProject` - Deliver project
* `download` - Download the latest translation package.
* `downloadHtmlInvoice` - Download invoice as hmtl
* `downloadLanguage` - Download the latest translation package.
* `downloadPdfInvoice` - Download invoice as pdf
* `getInvoice` - Get invoice details
* `getProgress` - Get project progress
* `getProject` - Get single project
* `getProjectVendors` - Get a list of vendors.
* `getProjects` - Get a list of your projects
* `getQuoteIdFromInternalId` - Get Quote Id
* `getVendorProjects` - Get a list of your vendor projects
* `getVendorProjectsByUserId` - Get a list of user/vendor projects
* `launchProject` - Launch your translation project
* `package` - Package the translation of all languages to be downloaded.
* `packageLanguage` - Package the translation of a specific target language to be downloaded.
* `recreateProject` - Recreate your translation project from scratch. This is a risky action, you will lose current translations.
* `submitProjectReports` - Submit reports for a project
* `trackPackage` - Track the status of translation packaging.
* `triggerCallback` - Trigger a call to your callback URL related to this project.
* `updateProject` - Update project language pairs

### Project Document

* `createProjectDocument` - Upload a new document
* `deleteProjectDocument` - Delete the document
* `downloadProjectDocument` - Download a document
* `downloadTranslatedDocumentForLanguage` - Download single translated file
* `getProjectDocument` - Get single document
* `getProjectDocuments` - Get a list of documents
* `updateProjectDocument` - Update the document.

### Project Webhooks

* `deleteProjectWebhook` - Delete project webhooks
* `getProjectWebhooks` - Get project information (includes callback_url for webhook)
* `postProjectWebhook` - Update project webhook URL
* `updateProjectWebhook` - Update project webhook URL

### Report

* `getLanguagePairsReport` - Returns a report of language pairs.
* `getProjectsReport` - Returns a report of corporate account users.
* `getUsersReport` - Returns a report of corporate account users.

### Search

* `checkDocumentsReindex` - Check reindex status of the client source and translation documents.
* `reindexDocuments` - Reindex for search all of the client source and translation documents.
* `searchEverywhere` - Search everywhere! Including projects, documents, translations...

### Static

* `getEndpoints` - Available endpoints
* `getFormats` - Get a list of supported formats
* `getLanguages` - Get a list of supported languages
* `getSwaggerJson` - Get Swagger JSON

### Stats

* `getCommissionStats` - Returns the total commissions stats.
* `getCommissionStatsByFilter` - Returns the total commissions stats by report filter.
* `getPopularPairs` - Returns the language pairs that you have ordered most.
* `getProjectStats` - Returns your project statistics.
* `getStringStats` - Returns your string statistics.

### Strings

* `getProjectStrings` - Get a list of strings and its translations in the project.
* `getProjectStringsForLanguage` - Get a list of strings and its translations in the project for this target language in the project.
* `getStrings` - Get a list of client/corporate strings (20 per page)
* `packageProjectTranslationMemory` - Get the translation memory of a project in TMX format
* `packageProjectTranslationMemoryForLanguage` - Get the translation memory of a project in TMX format
* `packageProjectTranslationMemoryForLanguageStatus` - If package call was async, check the status of the request
* `packageProjectTranslationMemoryStatus` - If package call was async, check the status of the request
* `packageUserTranslationMemory` - Get the translation memory of a client or corporate in TMX format
* `packageUserTranslationMemoryForLanguageStatus` - If package call was async, check the status of the request
* `postStrings` - Translate Strings with MT
* `updateTranslationMemoryUnit` - Update translation

### Style Guide

* `createStyleGuide` - Upload a new style guide
* `deleteStyleGuide` - Delete the style guide
* `downloadGlobalStyleGuide` - Download the global style guide.
* `downloadStyleGuide` - Download a style guide
* `getStyleGuide` - Get single style guide
* `getStyleGuides` - Get a list of style guides
* `updateGlobalStyleGuide` - Create or update the global style guide.
* `updateStyleGuide` - Update the style guide.

### Translations

* `getDocumentTranslations` - Get a list of strings and its translations in the document.
* `getDocumentTranslationsForLanguage` - Get a list of strings and its translations in the document for this target language of the project.
* `getProjectTranslations` - Deprecated. Use /projects/{projectId}/strings instead.
* `getProjectTranslationsForLanguage` - Deprecated. use /projects/{projectId}/strings/{language} instead.

### User

* `approveVendorApplication`
* `deleteAccount` - Delete requester account
* `deleteUserAccount` - Delete requester account
* `downgradeProofreader`
* `downgradeUserProofreader`
* `freezeAccount` - Freeze requester account for project notifications
* `freezeUserAccount` - Freeze requester account for project notifications
* `getEarnings` - Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.
* `getMe` - Get your user information, including client or vendor specific info.
* `getPaymentInfo` - Get your payment Info
* `getPermissions` - Returns a list of permissions that this user is authorized for.
* `getResponsivity` - Returns your vendor responsivity stats
* `getStats` - Returns your client and vendor statistics. This used to be called "summary" (\@deprecated).
* `getThisUserGroups` - Returns a list of user groups that this user belongs to.
* `getUser` - Get user information, including client or vendor specific info.
* `getUserEarnings` - Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.
* `getUserGroups` - Returns a list of user groups that this user belongs to.
* `getUserPaymentInfo` - Get user payment Info
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
* `subscribeNotification`
* `subscribeUserNotification`
* `suspendUser`
* `unfreezeAccount` - Unfreeze requester account for project notifications
* `unfreezeUserAccount` - Unfreeze requester account for project notifications
* `unsubscribeNotification`
* `unsubscribeUserNotification`
* `updateMe` - Update your user information.
* `updatePassword` - Update user password. Password should contain at least one uppercase, lowercase character and one number
* `updatePaymentInfo` - Update payment info
* `updateUser`
* `updateUserPaymentInfo` - Update user payment info
* `uploadProfilePicture`
* `uploadUserProfilePicture`

### Vendor

* `getAvailableVendors` - Get a list of vendors available for the criteria given

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
