# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                MwoAuth: shared.SchemeMwoAuth{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.DeleteCacheRequest{
        PathParams: operations.DeleteCachePathParams{
            Key: "enim",
        },
    }
    
    res, err := s.DeleteCache(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `DeleteCache` - Clear cache by key

### Activity

* `GetActivities` - Get a list of realtime activities.
* `GetActivity` - Get a single realtime activity.
* `GetActivityComments` - Get a list of comments belonging to this activity.
* `GetComments` - Get a list of activity comments throughout the whole project.
* `GetSalesActivities` - Get sales activities for a project
* `InsertSalesActivity` - Insert sales activity for a project
* `SubmitComment` - Submit a comment to an activity.

### Async

* `DownloadAsync` - Download async request files

### Auth

* `GetAccessToken` - Retrieve an access token to interact with the API.

### Blog

* `GetBlogPosts` - Get blog posts - ordered by created desc by default

### Commission

* `GetCommissions` - Returns a commission list of current client.
* `GetCommissionsByFilter` - Returns a commission list of current client.

### ContinuousProject

* `CollectAnalytics` - Save/collect analytics data from Active widget
* `CreateActiveWidget` - Create a new Active widget. This does not create a new Active project, just a separate widget.
* `CreateContinuousProject` - Create a new continuous project
* `DeleteActiveWidget` - Delete a single widget for this Active project
* `DeleteContinuousProject` - Delete single continuous project
* `GetActiveWidget` - Get a single widget for this Active project
* `GetActiveWidgets` - Get widgets for this Active project
* `GetAnalyticsToken` - Get JWT token to be used in analytics dashboards
* `GetContinuousProject` - Get single continuous project
* `GetContinuousProjects` - Get a list of continuous projects
* `ResetActiveWidgetToken` - Resets the access token of the Active widget.
* `Translate` - Instantly translate your content with your existing TM and MT resources.
* `UpdateActiveWidget` - Update Active widget settings.
* `UpdateContinuousProject` - Update continuous project

### Corporate

* `GetAvailableCorporatePermissions` - Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
* `GetAvailableCorporatePermissionsByID` - Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
* `GetCorporate` - Get details of my corporate account
* `GetCorporateByID` - Get details of this corporate account
* `GetCorporateUserGroups` - Get a list of user groups for my corporate account
* `GetCorporateUserGroupsByID` - Get a list of user groups for this corporate account
* `GetCorporateUsers` - Get a list of users for my corporate account
* `GetCorporateUsersByID` - Get a list of users for this corporate account
* `SaveCorporateUser` - Create or update a corporate user
* `SaveCorporateUserGroup` - Create or update a corporate user group
* `SaveCorporateUserGroupByID` - Create or update a corporate user group for this corporate account

### Document

* `GetDocuments` - Get a list of your documents
* `GetSimilarDocuments` - Find documents similar to this document.
* `GetUserDocuments` - Get a list of your documents
* `RegeneratePreview` - Regenerate preview and return preview URL for given file
* `UseAsDraft` - Use the translation of given source manual document as manual draft source for the given target document.
* `UseAsRegular` - Use the translation of the given manual document as a regular file.

### Glossary

* `CreateGlossary` - Upload a new glossary
* `DeleteGlossary` - Delete the glossary
* `DownloadGlobalGlossary` - Download the global glossary.
* `DownloadGlossary` - Download a glossary
* `GetGlossaries` - Get a list of glossaries
* `GetGlossary` - Get single glossary
* `UpdateGlobalGlossary` - Create or update the global glossary.
* `UpdateGlossary` - Update the glossary.

### Invitation

* `GetInvitationVendors` - Get vendor list for compiled invitation needs

### Pam

* `GetClientProfileForPam` - Get the Pam profile of a client for this client ID

### Payment

* `DeleteCreditCard` - Delete credit card.
* `GetCreditCard` - Get credit card by cardId
* `ResetCardPaymentCode` - Reset credit card payment code.
* `ResetCorporatePaymentCode` - Reset corporate credit card payment code.
* `ToggleCorporateAutoCharge` - Toggle corporate auto charge option.

### Project

* `CancelProject` - Cancel your translation project
* `CreateProject` - Get a new quote
* `DeleteProject` - Delete a project
* `DeliverProject` - Deliver project
* `Download` - Download the latest translation package.
* `DownloadHTMLInvoice` - Download invoice as hmtl
* `DownloadLanguage` - Download the latest translation package.
* `DownloadPdfInvoice` - Download invoice as pdf
* `GetInvoice` - Get invoice details
* `GetProgress` - Get project progress
* `GetProject` - Get single project
* `GetProjectVendors` - Get a list of vendors.
* `GetProjects` - Get a list of your projects
* `GetQuoteIDFromInternalID` - Get Quote Id
* `GetVendorProjects` - Get a list of your vendor projects
* `GetVendorProjectsByUserID` - Get a list of user/vendor projects
* `LaunchProject` - Launch your translation project
* `Package` - Package the translation of all languages to be downloaded.
* `PackageLanguage` - Package the translation of a specific target language to be downloaded.
* `RecreateProject` - Recreate your translation project from scratch. This is a risky action, you will lose current translations.
* `SubmitProjectReports` - Submit reports for a project
* `TrackPackage` - Track the status of translation packaging.
* `TriggerCallback` - Trigger a call to your callback URL related to this project.
* `UpdateProject` - Update project language pairs

### Project Document

* `CreateProjectDocument` - Upload a new document
* `DeleteProjectDocument` - Delete the document
* `DownloadProjectDocument` - Download a document
* `DownloadTranslatedDocumentForLanguage` - Download single translated file
* `GetProjectDocument` - Get single document
* `GetProjectDocuments` - Get a list of documents
* `UpdateProjectDocument` - Update the document.

### Project Webhooks

* `DeleteProjectWebhook` - Delete project webhooks
* `GetProjectWebhooks` - Get project information (includes callback_url for webhook)
* `PostProjectWebhook` - Update project webhook URL
* `UpdateProjectWebhook` - Update project webhook URL

### Report

* `GetLanguagePairsReport` - Returns a report of language pairs.
* `GetProjectsReport` - Returns a report of corporate account users.
* `GetUsersReport` - Returns a report of corporate account users.

### Search

* `CheckDocumentsReindex` - Check reindex status of the client source and translation documents.
* `ReindexDocuments` - Reindex for search all of the client source and translation documents.
* `SearchEverywhere` - Search everywhere! Including projects, documents, translations...

### Static

* `GetEndpoints` - Available endpoints
* `GetFormats` - Get a list of supported formats
* `GetLanguages` - Get a list of supported languages
* `GetSwaggerJSON` - Get Swagger JSON

### Stats

* `GetCommissionStats` - Returns the total commissions stats.
* `GetCommissionStatsByFilter` - Returns the total commissions stats by report filter.
* `GetPopularPairs` - Returns the language pairs that you have ordered most.
* `GetProjectStats` - Returns your project statistics.
* `GetStringStats` - Returns your string statistics.

### Strings

* `GetProjectStrings` - Get a list of strings and its translations in the project.
* `GetProjectStringsForLanguage` - Get a list of strings and its translations in the project for this target language in the project.
* `GetStrings` - Get a list of client/corporate strings (20 per page)
* `PackageProjectTranslationMemory` - Get the translation memory of a project in TMX format
* `PackageProjectTranslationMemoryForLanguage` - Get the translation memory of a project in TMX format
* `PackageProjectTranslationMemoryForLanguageStatus` - If package call was async, check the status of the request
* `PackageProjectTranslationMemoryStatus` - If package call was async, check the status of the request
* `PackageUserTranslationMemory` - Get the translation memory of a client or corporate in TMX format
* `PackageUserTranslationMemoryForLanguageStatus` - If package call was async, check the status of the request
* `PostStrings` - Translate Strings with MT
* `UpdateTranslationMemoryUnit` - Update translation

### Style Guide

* `CreateStyleGuide` - Upload a new style guide
* `DeleteStyleGuide` - Delete the style guide
* `DownloadGlobalStyleGuide` - Download the global style guide.
* `DownloadStyleGuide` - Download a style guide
* `GetStyleGuide` - Get single style guide
* `GetStyleGuides` - Get a list of style guides
* `UpdateGlobalStyleGuide` - Create or update the global style guide.
* `UpdateStyleGuide` - Update the style guide.

### Translations

* `GetDocumentTranslations` - Get a list of strings and its translations in the document.
* `GetDocumentTranslationsForLanguage` - Get a list of strings and its translations in the document for this target language of the project.
* `GetProjectTranslations` - Deprecated. Use /projects/{projectId}/strings instead.
* `GetProjectTranslationsForLanguage` - Deprecated. use /projects/{projectId}/strings/{language} instead.

### User

* `ApproveVendorApplication`
* `DeleteAccount` - Delete requester account
* `DeleteUserAccount` - Delete requester account
* `DowngradeProofreader`
* `DowngradeUserProofreader`
* `FreezeAccount` - Freeze requester account for project notifications
* `FreezeUserAccount` - Freeze requester account for project notifications
* `GetEarnings` - Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.
* `GetMe` - Get your user information, including client or vendor specific info.
* `GetPaymentInfo` - Get your payment Info
* `GetPermissions` - Returns a list of permissions that this user is authorized for.
* `GetResponsivity` - Returns your vendor responsivity stats
* `GetStats` - Returns your client and vendor statistics. This used to be called "summary" (\@deprecated).
* `GetThisUserGroups` - Returns a list of user groups that this user belongs to.
* `GetUser` - Get user information, including client or vendor specific info.
* `GetUserEarnings` - Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.
* `GetUserGroups` - Returns a list of user groups that this user belongs to.
* `GetUserPaymentInfo` - Get user payment Info
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
* `SubscribeNotification`
* `SubscribeUserNotification`
* `SuspendUser`
* `UnfreezeAccount` - Unfreeze requester account for project notifications
* `UnfreezeUserAccount` - Unfreeze requester account for project notifications
* `UnsubscribeNotification`
* `UnsubscribeUserNotification`
* `UpdateMe` - Update your user information.
* `UpdatePassword` - Update user password. Password should contain at least one uppercase, lowercase character and one number
* `UpdatePaymentInfo` - Update payment info
* `UpdateUser`
* `UpdateUserPaymentInfo` - Update user payment info
* `UploadProfilePicture`
* `UploadUserProfilePicture`

### Vendor

* `GetAvailableVendors` - Get a list of vendors available for the criteria given

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
