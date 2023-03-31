# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/motaword.com/1.0/go
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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    req := operations.DeleteCacheRequest{
        Key: "corrupti",
    }

    ctx := context.Background()
    res, err := s.DeleteCache(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `DeleteCache` - Clear cache by key

### Activity

* `GetActivities` - Monitor project activities
* `GetActivity` - View an activity
* `GetActivityComments` - View activity comments
* `GetComments` - View all project comments
* `GetSalesActivities` - Get sales activities for a project
* `InsertSalesActivity` - Insert sales activity for a project
* `SubmitCommentJSON` - Submit comment to an activity
* `SubmitCommentMultipart` - Submit comment to an activity

### Async

* `DownloadAsync` - Download result of an async operation

### Auth

* `GetAccessToken` - Retrieve an access token

### Blog

* `GetBlogPosts` - Get blog posts - ordered by created desc by default

### Commission

* `GetCommissions` - Returns a commission list of current client.
* `GetCommissionsByFilter` - Returns a commission list of current client.

### ContinuousProject

* `AddDocument` - Add a new document to your continuous project
* `CollectAnalytics` - Save/collect analytics data from Active widget
* `Complete` - Complete continuous project
* `CompleteContinuousDocument` - Complete a continuous project document
* `CompleteLanguage` - Complete continuous project language
* `CreateActiveWidget` - Create a new Active widget
* `CreateContinuousProject` - Create a continuous project
* `CreateSubscription` - Create subscription for continuous project
* `DeleteActiveWidget` - Delete a single widget for this Active project
* `DeleteContinuousProject` - Delete a continuous project
* `DeleteSubscription` - Delete subscription for continuous project
* `GetActiveWidget` - View an Active widget
* `GetActiveWidgets` - View Active widgets
* `GetAnalyticsToken` - Get JWT token to be used in analytics dashboards
* `GetContinuousProject` - View a continuous project
* `GetContinuousProjectDocument` - View a continuous document
* `GetContinuousProjectDocumentProgress` - Monitor progress of a continuous document
* `GetContinuousProjectDocuments` - View continuous documents
* `GetContinuousProjectInvoices` - Invoices of a continuous project
* `GetContinuousProjectProgress` - Monitor progress and status of a continous project
* `GetContinuousProjects` - View continuous projects
* `GetQuoteForDocument` - Get a quote for a continuous project document
* `GetQuoteForDocuments` - Get quote for documents
* `GetQuoteForLanguage` - Get quote for language
* `GetQuoteForLanguages` - Get quote for languages
* `GetSubscription` - Get subscription for continuous project
* `PostContinuousProjectDocumentProgress` - Get continuous project document progress for multiple IDs
* `ResetActiveWidgetToken` - Reset Active widget token
* `Translate` - Instantly translate your content
* `UpdateActiveWidget` - Update Active widget settings.
* `UpdateContinuousProject` - Update a continuous project
* `UpdateDocument` - Update the document
* `UpdateSubscription` - Update subscription for continuous project
* `UpdateSubscriptionPaymentMethod` - Update subscription payment method for continuous project

### Corporate

* `GetAvailableCorporatePermissions` - View available permissions
* `GetAvailableCorporatePermissionsByID` - Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
* `GetCorporate` - View your corporate account
* `GetCorporateByID` - Get details of this corporate account
* `GetCorporateUserGroups` - View user groups
* `GetCorporateUserGroupsByID` - Get a list of user groups for this corporate account
* `GetCorporateUsers` - View users
* `GetCorporateUsersByID` - Get a list of users for this corporate account
* `GetCorporatesList` - Get a list of corporate accounts
* `SaveCorporateUser` - Create or update a user
* `SaveCorporateUserGroup` - Create or update a corporate user group
* `SaveCorporateUserGroupByID` - Create or update a corporate user group for this corporate account

### Document

* `GetAllDocumentSubjects` - Get a list of subjects of projects
* `GetDocument` - View a single document
* `GetDocumentProgress` - View a document translation progress
* `GetDocuments` - View your documents
* `GetSimilarDocuments` - Find documents similar to this document.
* `GetUserDocuments` - Get a list of your documents
* `RegeneratePreview` - Regenerate preview and return preview URL for given file
* `UseAsDraft` - Use the translation of given source manual document as manual draft source for the given target document.
* `UseAsRegular` - Use the translation of the given manual document as a regular file.

### Glossary

* `CreateGlossaryJSON` - Upload a glossary file
* `CreateGlossaryMultipart` - Upload a glossary file
* `DeleteGlossary` - Delete a glossary
* `DownloadGlobalGlossary` - Download account glossary.
* `DownloadGlossary` - Download a glossary
* `GetGlossaries` - View glossaries
* `GetGlossary` - View a glossary
* `UpdateGlobalGlossaryJSON` - Create or update the account glossary
* `UpdateGlobalGlossaryMultipart` - Create or update the account glossary
* `UpdateGlossaryJSON` - Update a glossary
* `UpdateGlossaryMultipart` - Update a glossary

### Integrations

* `GetIntegrationsToken` - Generate a new access token for MotaWord's integrations service

### Invitation

* `GetInvitationVendors` - Get vendor list for compiled invitation needs

### MachineLearning

* `GetDeliveryPrediction` - Get a delivery prediction for a project

### Pam

* `GetClientProfileForPam` - Get the Pam profile of a client for this client ID
* `GetProjectCompletionReportForPam` - Get completion report data of a project
* `PostMessage` - Sends a message to chat

### Payment

* `DeleteCreditCard` - Delete credit card
* `GetCreditCard` - View saved credit card
* `ResetCardPaymentCode` - Reset credit card payment code
* `ResetCorporatePaymentCode` - Reset payment code
* `ToggleCorporateAutoCharge` - Manage automatic charges on your credit card

### Project

* `AssignCM` - Assign a CM to the project
* `CancelProject` - Cancel your translation project
* `CreateProjectJSON` - Create a new project
* `CreateProjectMultipart` - Create a new project
* `DeleteProject` - Delete your translation project
* `DeliverProject` - Deliver project
* `Download` - Download your translated project
* `DownloadHTMLInvoice` - Download project invoice (HTML)
* `DownloadLanguage` - Download your translated project language
* `DownloadPdfInvoice` - Download project invoice (PDF)
* `GetInvoice` - View project invoice
* `GetProgress` - View progress of a project
* `GetProject` - View a translation project
* `GetProjectVendors` - Get a list of vendors.
* `GetProjects` - View your translation projects
* `GetQuoteIDFromInternalID` - Get Quote Id
* `GetVendorProjects` - List projects as a vendor
* `GetVendorProjectsByUserID` - Get a list of user/vendor projects
* `LaunchProject` - Launch your translation project
* `Package` - Package your translated project
* `PackageLanguage` - Package your translated project language
* `RecreateProject` - Recreate your translation project from scratch. This is a risky action, you will lose current translations.
* `SendQuoteEmail` - Send a quote email
* `SubmitProjectReports` - Submit feedback report for a project
* `TrackPackage` - Track translation packaging status
* `TriggerCallback` - Trigger a call to your callback URL related to this project.
* `UpdateProject` - Update project info and settings

### ProjectDocument

* `CreateProjectDocument` - Upload a new document
* `DeleteProjectDocument` - Delete the document
* `DownloadProjectDocument` - Download a project source document
* `DownloadTranslatedDocumentForLanguage` - Download translated document
* `GetProjectDocument` - View a project source document
* `GetProjectDocuments` - View project source documents
* `UpdateProjectDocumentJSON` - Update the document.
* `UpdateProjectDocumentMultipart` - Update the document.

### ProjectWebhooks

* `DeleteProjectWebhook` - Delete project webhooks
* `GetProjectWebhooks` - View project webhooks
* `PostProjectWebhook` - Update project webhook
* `UpdateProjectWebhook` - Update project webhook

### Report

* `GenerateQAReport` - Generate a QA report for given filter
* `GetFilterContents` - Returns available options for selected timeframe.
* `GetLanguagePairsReport` - Language pairs report
* `GetProjectsReport` - Projects report
* `GetUsersReport` - Company users report

### Search

* `CheckDocumentsReindex` - Check reindex status of the client source and translation documents.
* `ReindexDocuments` - Reindex for search all of the client source and translation documents.
* `SearchEverywhere` - Search everything in your account

### Static

* `GetEndpoints` - Available endpoints
* `GetFormats` - List of supported file formats
* `GetLanguages` - List of supported languages
* `GetSwaggerYaml` - OpenAPI YAML representation of our API

### Stats

* `GetCommissionStats` - Returns the total commissions stats.
* `GetCommissionStatsByFilter` - Returns the total commissions stats by report filter.
* `GetPopularPairs` - View your popular language pairs
* `GetProjectStats` - View your project statistics
* `GetStringStats` - View your translation statistics

### Strings

* `ClearTranslationCache` - Clear translation cache
* `GetContinuousProjectFileStrings` - View strings their translations in a continuous document
* `GetContinuousProjectStrings` - View strings and translations in continuous project
* `GetDocumentTranslations` - View strings and translations of a document
* `GetDocumentTranslationsForLanguage` - View strings and translations of a document for target language
* `GetProjectStrings` - View project strings and translations
* `GetProjectStringsForLanguage` - View strings and translations for target language
* `GetProjectTranslations` - Deprecated. Use /projects/{projectId}/strings instead.
* `GetProjectTranslationsForLanguage` - Deprecated. use /projects/{projectId}/strings/{language} instead.
* `GetStrings` - View account strings (translation memory)
* `GetTranslationCache` - View cached strings translations in continuous project
* `PackageProjectTranslationMemory` - Download project translation memory
* `PackageProjectTranslationMemoryForLanguage` - Download language-specific project translation memory
* `PackageProjectTranslationMemoryForLanguageStatus` - Check language-specific translation memory packaging status
* `PackageProjectTranslationMemoryStatus` - Check translation memory packaging status
* `PackageUserTranslationMemory` - Download account translation memory
* `PackageUserTranslationMemoryForLanguageStatus` - Check account translation memory packaging status
* `PostContinuousProjectFileStrings` - Get a list of strings and its translations in the project.
* `PostStrings` - Translate Strings with MT
* `RecacheTranslations` - Recache translations
* `UpdateTranslationMemoryUnit` - Update string translation

### StyleGuide

* `CreateStyleGuideJSON` - Upload a new style guide
* `CreateStyleGuideMultipart` - Upload a new style guide
* `DeleteStyleGuide` - Delete a style guide
* `DownloadGlobalStyleGuide` - Download account style guide
* `DownloadStyleGuide` - Download a style guide
* `GetStyleGuide` - View a style guide
* `GetStyleGuides` - View style guides
* `UpdateGlobalStyleGuideJSON` - Create or update the account style guide
* `UpdateGlobalStyleGuideMultipart` - Create or update the account style guide
* `UpdateStyleGuideJSON` - Update a style guide
* `UpdateStyleGuideMultipart` - Update a style guide

### Surveys

* `GetQuestions` - Get survey questions in given scope and type
* `SubmitAnswers` - Post survey answers for scope and type

### User

* `ApproveVendorApplication`
* `CreateUser` - Create a new user
* `DeleteAccount` - Delete your account
* `DeleteUserAccount` - Delete requester account
* `DowngradeProofreader`
* `DowngradeUserProofreader`
* `FreezeAccount` - Freeze account
* `FreezeUserAccount` - Freeze requester account for project notifications
* `GetAllVendorTags` - Returns all vendor tags for vendors filter
* `GetEarnings` - View your vendor earnings
* `GetFilteredVendors` - Filter vendors based on provided parameters
* `GetMe` - View your account info
* `GetPaymentInfo` - View your payment and billing info
* `GetPermissions` - View your permissions
* `GetResponsivity` - View your vendor responsiveness
* `GetStats` - View your account statistics
* `GetThisUserGroups` - Returns a list of user groups that this user belongs to.
* `GetUser` - Get user information, including client or vendor specific info.
* `GetUserEarnings` - Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.
* `GetUserGroups` - View your user groups
* `GetUserPaymentInfo` - View user's payment and billing info
* `GetUserPermissions` - Returns a list of permissions that this user is authorized for.
* `GetUserPopularPairs` - Returns the language pairs that the user has ordered most.
* `GetUserProjectStats` - Returns a user's project statistics.
* `GetUserResponsivity` - Returns a user's vendor responsivity stats
* `GetUserStats` - Returns a user's client and vendor statistics. This used to be called "summary" (\@deprecated).
* `GetUsers` - Get a list of platform users
* `LogLocation` - Log user's current location. This data is used in our Intelligent Project Manager for various data analysis, including project prioritization for vendors and account validation.
* `MakeProofreader`
* `MakeUserProofreader`
* `RejectVendorApplication`
* `SendEmailConfirmation` - Sends email confirmation email for current user
* `SendPasswordReminder` - Sends password reset email to the user's registered email address
* `SendUserEmailConfirmation` - Sends email confirmation email for a user
* `SubscribeNotification` - Subscribe to push notifications
* `SubscribeUserNotification`
* `SuspendUser`
* `UnfreezeAccount` - Defreeze your account
* `UnfreezeUserAccount` - Unfreeze requester account for project notifications
* `UnsubscribeNotification`
* `UnsubscribeUserNotification`
* `UpdateMe` - Update your account info
* `UpdatePassword` - Update your account password
* `UpdatePaymentInfo` - Update payment info
* `UpdateUser`
* `UpdateUserGroup`
* `UpdateUserPaymentInfo` - Update user payment info
* `UploadProfilePictureJSON` - Upload profile picture
* `UploadProfilePictureMultipart` - Upload profile picture
* `UploadUserProfilePictureJSON`
* `UploadUserProfilePictureMultipart`

### Vendor

* `GetAvailableVendors` - Get a list of vendors available for the criteria given
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
