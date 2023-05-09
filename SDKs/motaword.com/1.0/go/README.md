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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DeleteCache(ctx, operations.DeleteCacheRequest{
        Key: "corrupti",
    })
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

### [SDK](docs/sdk/README.md)

* [DeleteCache](docs/sdk/README.md#deletecache) - Clear cache by key

### [Activity](docs/activity/README.md)

* [GetActivities](docs/activity/README.md#getactivities) - Monitor project activities
* [GetActivity](docs/activity/README.md#getactivity) - View an activity
* [GetActivityComments](docs/activity/README.md#getactivitycomments) - View activity comments
* [GetComments](docs/activity/README.md#getcomments) - View all project comments
* [GetSalesActivities](docs/activity/README.md#getsalesactivities) - Get sales activities for a project
* [InsertSalesActivity](docs/activity/README.md#insertsalesactivity) - Insert sales activity for a project
* [SubmitCommentJSON](docs/activity/README.md#submitcommentjson) - Submit comment to an activity
* [SubmitCommentMultipart](docs/activity/README.md#submitcommentmultipart) - Submit comment to an activity

### [Async](docs/async/README.md)

* [DownloadAsync](docs/async/README.md#downloadasync) - Download result of an async operation

### [Auth](docs/auth/README.md)

* [GetAccessToken](docs/auth/README.md#getaccesstoken) - Retrieve an access token

### [Blog](docs/blog/README.md)

* [GetBlogPosts](docs/blog/README.md#getblogposts) - Get blog posts - ordered by created desc by default

### [Commission](docs/commission/README.md)

* [GetCommissions](docs/commission/README.md#getcommissions) - Returns a commission list of current client.
* [GetCommissionsByFilter](docs/commission/README.md#getcommissionsbyfilter) - Returns a commission list of current client.

### [ContinuousProject](docs/continuousproject/README.md)

* [AddDocument](docs/continuousproject/README.md#adddocument) - Add a new document to your continuous project
* [CollectAnalytics](docs/continuousproject/README.md#collectanalytics) - Save/collect analytics data from Active widget
* [Complete](docs/continuousproject/README.md#complete) - Complete continuous project
* [CompleteContinuousDocument](docs/continuousproject/README.md#completecontinuousdocument) - Complete a continuous project document
* [CompleteLanguage](docs/continuousproject/README.md#completelanguage) - Complete continuous project language
* [CreateActiveWidget](docs/continuousproject/README.md#createactivewidget) - Create a new Active widget
* [CreateContinuousProject](docs/continuousproject/README.md#createcontinuousproject) - Create a continuous project
* [CreateSubscription](docs/continuousproject/README.md#createsubscription) - Create subscription for continuous project
* [DeleteActiveWidget](docs/continuousproject/README.md#deleteactivewidget) - Delete a single widget for this Active project
* [DeleteContinuousProject](docs/continuousproject/README.md#deletecontinuousproject) - Delete a continuous project
* [DeleteSubscription](docs/continuousproject/README.md#deletesubscription) - Delete subscription for continuous project
* [GetActiveWidget](docs/continuousproject/README.md#getactivewidget) - View an Active widget
* [GetActiveWidgets](docs/continuousproject/README.md#getactivewidgets) - View Active widgets
* [GetAnalyticsToken](docs/continuousproject/README.md#getanalyticstoken) - Get JWT token to be used in analytics dashboards
* [GetContinuousProject](docs/continuousproject/README.md#getcontinuousproject) - View a continuous project
* [GetContinuousProjectDocument](docs/continuousproject/README.md#getcontinuousprojectdocument) - View a continuous document
* [GetContinuousProjectDocumentProgress](docs/continuousproject/README.md#getcontinuousprojectdocumentprogress) - Monitor progress of a continuous document
* [GetContinuousProjectDocuments](docs/continuousproject/README.md#getcontinuousprojectdocuments) - View continuous documents
* [GetContinuousProjectInvoices](docs/continuousproject/README.md#getcontinuousprojectinvoices) - Invoices of a continuous project
* [GetContinuousProjectProgress](docs/continuousproject/README.md#getcontinuousprojectprogress) - Monitor progress and status of a continous project
* [GetContinuousProjects](docs/continuousproject/README.md#getcontinuousprojects) - View continuous projects
* [GetQuoteForDocument](docs/continuousproject/README.md#getquotefordocument) - Get a quote for a continuous project document
* [GetQuoteForDocuments](docs/continuousproject/README.md#getquotefordocuments) - Get quote for documents
* [GetQuoteForLanguage](docs/continuousproject/README.md#getquoteforlanguage) - Get quote for language
* [GetQuoteForLanguages](docs/continuousproject/README.md#getquoteforlanguages) - Get quote for languages
* [GetSubscription](docs/continuousproject/README.md#getsubscription) - Get subscription for continuous project
* [PostContinuousProjectDocumentProgress](docs/continuousproject/README.md#postcontinuousprojectdocumentprogress) - Get continuous project document progress for multiple IDs
* [ResetActiveWidgetToken](docs/continuousproject/README.md#resetactivewidgettoken) - Reset Active widget token
* [Translate](docs/continuousproject/README.md#translate) - Instantly translate your content
* [UpdateActiveWidget](docs/continuousproject/README.md#updateactivewidget) - Update Active widget settings.
* [UpdateContinuousProject](docs/continuousproject/README.md#updatecontinuousproject) - Update a continuous project
* [UpdateDocument](docs/continuousproject/README.md#updatedocument) - Update the document
* [UpdateSubscription](docs/continuousproject/README.md#updatesubscription) - Update subscription for continuous project
* [UpdateSubscriptionPaymentMethod](docs/continuousproject/README.md#updatesubscriptionpaymentmethod) - Update subscription payment method for continuous project

### [Corporate](docs/corporate/README.md)

* [GetAvailableCorporatePermissions](docs/corporate/README.md#getavailablecorporatepermissions) - View available permissions
* [GetAvailableCorporatePermissionsByID](docs/corporate/README.md#getavailablecorporatepermissionsbyid) - Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
* [GetCorporate](docs/corporate/README.md#getcorporate) - View your corporate account
* [GetCorporateByID](docs/corporate/README.md#getcorporatebyid) - Get details of this corporate account
* [GetCorporateUserGroups](docs/corporate/README.md#getcorporateusergroups) - View user groups
* [GetCorporateUserGroupsByID](docs/corporate/README.md#getcorporateusergroupsbyid) - Get a list of user groups for this corporate account
* [GetCorporateUsers](docs/corporate/README.md#getcorporateusers) - View users
* [GetCorporateUsersByID](docs/corporate/README.md#getcorporateusersbyid) - Get a list of users for this corporate account
* [GetCorporatesList](docs/corporate/README.md#getcorporateslist) - Get a list of corporate accounts
* [SaveCorporateUser](docs/corporate/README.md#savecorporateuser) - Create or update a user
* [SaveCorporateUserGroup](docs/corporate/README.md#savecorporateusergroup) - Create or update a corporate user group
* [SaveCorporateUserGroupByID](docs/corporate/README.md#savecorporateusergroupbyid) - Create or update a corporate user group for this corporate account

### [Document](docs/document/README.md)

* [GetAllDocumentSubjects](docs/document/README.md#getalldocumentsubjects) - Get a list of subjects of projects
* [GetDocument](docs/document/README.md#getdocument) - View a single document
* [GetDocumentProgress](docs/document/README.md#getdocumentprogress) - View a document translation progress
* [GetDocuments](docs/document/README.md#getdocuments) - View your documents
* [GetSimilarDocuments](docs/document/README.md#getsimilardocuments) - Find documents similar to this document.
* [GetUserDocuments](docs/document/README.md#getuserdocuments) - Get a list of your documents
* [RegeneratePreview](docs/document/README.md#regeneratepreview) - Regenerate preview and return preview URL for given file
* [UseAsDraft](docs/document/README.md#useasdraft) - Use the translation of given source manual document as manual draft source for the given target document.
* [UseAsRegular](docs/document/README.md#useasregular) - Use the translation of the given manual document as a regular file.

### [Glossary](docs/glossary/README.md)

* [CreateGlossaryJSON](docs/glossary/README.md#createglossaryjson) - Upload a glossary file
* [CreateGlossaryMultipart](docs/glossary/README.md#createglossarymultipart) - Upload a glossary file
* [DeleteGlossary](docs/glossary/README.md#deleteglossary) - Delete a glossary
* [DownloadGlobalGlossary](docs/glossary/README.md#downloadglobalglossary) - Download account glossary.
* [DownloadGlossary](docs/glossary/README.md#downloadglossary) - Download a glossary
* [GetGlossaries](docs/glossary/README.md#getglossaries) - View glossaries
* [GetGlossary](docs/glossary/README.md#getglossary) - View a glossary
* [UpdateGlobalGlossaryJSON](docs/glossary/README.md#updateglobalglossaryjson) - Create or update the account glossary
* [UpdateGlobalGlossaryMultipart](docs/glossary/README.md#updateglobalglossarymultipart) - Create or update the account glossary
* [UpdateGlossaryJSON](docs/glossary/README.md#updateglossaryjson) - Update a glossary
* [UpdateGlossaryMultipart](docs/glossary/README.md#updateglossarymultipart) - Update a glossary

### [Integrations](docs/integrations/README.md)

* [GetIntegrationsToken](docs/integrations/README.md#getintegrationstoken) - Generate a new access token for MotaWord's integrations service

### [Invitation](docs/invitation/README.md)

* [GetInvitationVendors](docs/invitation/README.md#getinvitationvendors) - Get vendor list for compiled invitation needs

### [MachineLearning](docs/machinelearning/README.md)

* [GetDeliveryPrediction](docs/machinelearning/README.md#getdeliveryprediction) - Get a delivery prediction for a project

### [Pam](docs/pam/README.md)

* [GetClientProfileForPam](docs/pam/README.md#getclientprofileforpam) - Get the Pam profile of a client for this client ID
* [GetProjectCompletionReportForPam](docs/pam/README.md#getprojectcompletionreportforpam) - Get completion report data of a project
* [PostMessage](docs/pam/README.md#postmessage) - Sends a message to chat

### [Payment](docs/payment/README.md)

* [DeleteCreditCard](docs/payment/README.md#deletecreditcard) - Delete credit card
* [GetCreditCard](docs/payment/README.md#getcreditcard) - View saved credit card
* [ResetCardPaymentCode](docs/payment/README.md#resetcardpaymentcode) - Reset credit card payment code
* [ResetCorporatePaymentCode](docs/payment/README.md#resetcorporatepaymentcode) - Reset payment code
* [ToggleCorporateAutoCharge](docs/payment/README.md#togglecorporateautocharge) - Manage automatic charges on your credit card

### [Project](docs/project/README.md)

* [AssignCM](docs/project/README.md#assigncm) - Assign a CM to the project
* [CancelProject](docs/project/README.md#cancelproject) - Cancel your translation project
* [CreateProjectJSON](docs/project/README.md#createprojectjson) - Create a new project
* [CreateProjectMultipart](docs/project/README.md#createprojectmultipart) - Create a new project
* [DeleteProject](docs/project/README.md#deleteproject) - Delete your translation project
* [DeliverProject](docs/project/README.md#deliverproject) - Deliver project
* [Download](docs/project/README.md#download) - Download your translated project
* [DownloadHTMLInvoice](docs/project/README.md#downloadhtmlinvoice) - Download project invoice (HTML)
* [DownloadLanguage](docs/project/README.md#downloadlanguage) - Download your translated project language
* [DownloadPdfInvoice](docs/project/README.md#downloadpdfinvoice) - Download project invoice (PDF)
* [GetInvoice](docs/project/README.md#getinvoice) - View project invoice
* [GetProgress](docs/project/README.md#getprogress) - View progress of a project
* [GetProject](docs/project/README.md#getproject) - View a translation project
* [GetProjectVendors](docs/project/README.md#getprojectvendors) - Get a list of vendors.
* [GetProjects](docs/project/README.md#getprojects) - View your translation projects
* [GetQuoteIDFromInternalID](docs/project/README.md#getquoteidfrominternalid) - Get Quote Id
* [GetVendorProjects](docs/project/README.md#getvendorprojects) - List projects as a vendor
* [GetVendorProjectsByUserID](docs/project/README.md#getvendorprojectsbyuserid) - Get a list of user/vendor projects
* [LaunchProject](docs/project/README.md#launchproject) - Launch your translation project
* [Package](docs/project/README.md#package) - Package your translated project
* [PackageLanguage](docs/project/README.md#packagelanguage) - Package your translated project language
* [RecreateProject](docs/project/README.md#recreateproject) - Recreate your translation project from scratch. This is a risky action, you will lose current translations.
* [SendQuoteEmail](docs/project/README.md#sendquoteemail) - Send a quote email
* [SubmitProjectReports](docs/project/README.md#submitprojectreports) - Submit feedback report for a project
* [TrackPackage](docs/project/README.md#trackpackage) - Track translation packaging status
* [TriggerCallback](docs/project/README.md#triggercallback) - Trigger a call to your callback URL related to this project.
* [UpdateProject](docs/project/README.md#updateproject) - Update project info and settings

### [ProjectDocument](docs/projectdocument/README.md)

* [CreateProjectDocument](docs/projectdocument/README.md#createprojectdocument) - Upload a new document
* [DeleteProjectDocument](docs/projectdocument/README.md#deleteprojectdocument) - Delete the document
* [DownloadProjectDocument](docs/projectdocument/README.md#downloadprojectdocument) - Download a project source document
* [DownloadTranslatedDocumentForLanguage](docs/projectdocument/README.md#downloadtranslateddocumentforlanguage) - Download translated document
* [GetProjectDocument](docs/projectdocument/README.md#getprojectdocument) - View a project source document
* [GetProjectDocuments](docs/projectdocument/README.md#getprojectdocuments) - View project source documents
* [UpdateProjectDocumentJSON](docs/projectdocument/README.md#updateprojectdocumentjson) - Update the document.
* [UpdateProjectDocumentMultipart](docs/projectdocument/README.md#updateprojectdocumentmultipart) - Update the document.

### [ProjectWebhooks](docs/projectwebhooks/README.md)

* [DeleteProjectWebhook](docs/projectwebhooks/README.md#deleteprojectwebhook) - Delete project webhooks
* [GetProjectWebhooks](docs/projectwebhooks/README.md#getprojectwebhooks) - View project webhooks
* [PostProjectWebhook](docs/projectwebhooks/README.md#postprojectwebhook) - Update project webhook
* [UpdateProjectWebhook](docs/projectwebhooks/README.md#updateprojectwebhook) - Update project webhook

### [Report](docs/report/README.md)

* [GenerateQAReport](docs/report/README.md#generateqareport) - Generate a QA report for given filter
* [GetFilterContents](docs/report/README.md#getfiltercontents) - Returns available options for selected timeframe.
* [GetLanguagePairsReport](docs/report/README.md#getlanguagepairsreport) - Language pairs report
* [GetProjectsReport](docs/report/README.md#getprojectsreport) - Projects report
* [GetUsersReport](docs/report/README.md#getusersreport) - Company users report

### [Search](docs/search/README.md)

* [CheckDocumentsReindex](docs/search/README.md#checkdocumentsreindex) - Check reindex status of the client source and translation documents.
* [ReindexDocuments](docs/search/README.md#reindexdocuments) - Reindex for search all of the client source and translation documents.
* [SearchEverywhere](docs/search/README.md#searcheverywhere) - Search everything in your account

### [Static](docs/static/README.md)

* [GetEndpoints](docs/static/README.md#getendpoints) - Available endpoints
* [GetFormats](docs/static/README.md#getformats) - List of supported file formats
* [GetLanguages](docs/static/README.md#getlanguages) - List of supported languages
* [GetSwaggerYaml](docs/static/README.md#getswaggeryaml) - OpenAPI YAML representation of our API

### [Stats](docs/stats/README.md)

* [GetCommissionStats](docs/stats/README.md#getcommissionstats) - Returns the total commissions stats.
* [GetCommissionStatsByFilter](docs/stats/README.md#getcommissionstatsbyfilter) - Returns the total commissions stats by report filter.
* [GetPopularPairs](docs/stats/README.md#getpopularpairs) - View your popular language pairs
* [GetProjectStats](docs/stats/README.md#getprojectstats) - View your project statistics
* [GetStringStats](docs/stats/README.md#getstringstats) - View your translation statistics

### [Strings](docs/strings/README.md)

* [ClearTranslationCache](docs/strings/README.md#cleartranslationcache) - Clear translation cache
* [GetContinuousProjectFileStrings](docs/strings/README.md#getcontinuousprojectfilestrings) - View strings their translations in a continuous document
* [GetContinuousProjectStrings](docs/strings/README.md#getcontinuousprojectstrings) - View strings and translations in continuous project
* [GetDocumentTranslations](docs/strings/README.md#getdocumenttranslations) - View strings and translations of a document
* [GetDocumentTranslationsForLanguage](docs/strings/README.md#getdocumenttranslationsforlanguage) - View strings and translations of a document for target language
* [GetProjectStrings](docs/strings/README.md#getprojectstrings) - View project strings and translations
* [GetProjectStringsForLanguage](docs/strings/README.md#getprojectstringsforlanguage) - View strings and translations for target language
* [~~GetProjectTranslations~~](docs/strings/README.md#getprojecttranslations) - Deprecated. Use /projects/{projectId}/strings instead. :warning: **Deprecated**
* [~~GetProjectTranslationsForLanguage~~](docs/strings/README.md#getprojecttranslationsforlanguage) - Deprecated. use /projects/{projectId}/strings/{language} instead. :warning: **Deprecated**
* [GetStrings](docs/strings/README.md#getstrings) - View account strings (translation memory)
* [GetTranslationCache](docs/strings/README.md#gettranslationcache) - View cached strings translations in continuous project
* [PackageProjectTranslationMemory](docs/strings/README.md#packageprojecttranslationmemory) - Download project translation memory
* [PackageProjectTranslationMemoryForLanguage](docs/strings/README.md#packageprojecttranslationmemoryforlanguage) - Download language-specific project translation memory
* [PackageProjectTranslationMemoryForLanguageStatus](docs/strings/README.md#packageprojecttranslationmemoryforlanguagestatus) - Check language-specific translation memory packaging status
* [PackageProjectTranslationMemoryStatus](docs/strings/README.md#packageprojecttranslationmemorystatus) - Check translation memory packaging status
* [PackageUserTranslationMemory](docs/strings/README.md#packageusertranslationmemory) - Download account translation memory
* [PackageUserTranslationMemoryForLanguageStatus](docs/strings/README.md#packageusertranslationmemoryforlanguagestatus) - Check account translation memory packaging status
* [PostContinuousProjectFileStrings](docs/strings/README.md#postcontinuousprojectfilestrings) - Get a list of strings and its translations in the project.
* [~~PostStrings~~](docs/strings/README.md#poststrings) - Translate Strings with MT :warning: **Deprecated**
* [RecacheTranslations](docs/strings/README.md#recachetranslations) - Recache translations
* [UpdateTranslationMemoryUnit](docs/strings/README.md#updatetranslationmemoryunit) - Update string translation

### [StyleGuide](docs/styleguide/README.md)

* [CreateStyleGuideJSON](docs/styleguide/README.md#createstyleguidejson) - Upload a new style guide
* [CreateStyleGuideMultipart](docs/styleguide/README.md#createstyleguidemultipart) - Upload a new style guide
* [DeleteStyleGuide](docs/styleguide/README.md#deletestyleguide) - Delete a style guide
* [DownloadGlobalStyleGuide](docs/styleguide/README.md#downloadglobalstyleguide) - Download account style guide
* [DownloadStyleGuide](docs/styleguide/README.md#downloadstyleguide) - Download a style guide
* [GetStyleGuide](docs/styleguide/README.md#getstyleguide) - View a style guide
* [GetStyleGuides](docs/styleguide/README.md#getstyleguides) - View style guides
* [UpdateGlobalStyleGuideJSON](docs/styleguide/README.md#updateglobalstyleguidejson) - Create or update the account style guide
* [UpdateGlobalStyleGuideMultipart](docs/styleguide/README.md#updateglobalstyleguidemultipart) - Create or update the account style guide
* [UpdateStyleGuideJSON](docs/styleguide/README.md#updatestyleguidejson) - Update a style guide
* [UpdateStyleGuideMultipart](docs/styleguide/README.md#updatestyleguidemultipart) - Update a style guide

### [Surveys](docs/surveys/README.md)

* [GetQuestions](docs/surveys/README.md#getquestions) - Get survey questions in given scope and type
* [SubmitAnswers](docs/surveys/README.md#submitanswers) - Post survey answers for scope and type

### [User](docs/user/README.md)

* [ApproveVendorApplication](docs/user/README.md#approvevendorapplication)
* [CreateUser](docs/user/README.md#createuser) - Create a new user
* [DeleteAccount](docs/user/README.md#deleteaccount) - Delete your account
* [DeleteUserAccount](docs/user/README.md#deleteuseraccount) - Delete requester account
* [DowngradeProofreader](docs/user/README.md#downgradeproofreader)
* [DowngradeUserProofreader](docs/user/README.md#downgradeuserproofreader)
* [FreezeAccount](docs/user/README.md#freezeaccount) - Freeze account
* [FreezeUserAccount](docs/user/README.md#freezeuseraccount) - Freeze requester account for project notifications
* [GetAllVendorTags](docs/user/README.md#getallvendortags) - Returns all vendor tags for vendors filter
* [GetEarnings](docs/user/README.md#getearnings) - View your vendor earnings
* [GetFilteredVendors](docs/user/README.md#getfilteredvendors) - Filter vendors based on provided parameters
* [GetMe](docs/user/README.md#getme) - View your account info
* [GetPaymentInfo](docs/user/README.md#getpaymentinfo) - View your payment and billing info
* [GetPermissions](docs/user/README.md#getpermissions) - View your permissions
* [GetResponsivity](docs/user/README.md#getresponsivity) - View your vendor responsiveness
* [GetStats](docs/user/README.md#getstats) - View your account statistics
* [GetThisUserGroups](docs/user/README.md#getthisusergroups) - Returns a list of user groups that this user belongs to.
* [GetUser](docs/user/README.md#getuser) - Get user information, including client or vendor specific info.
* [GetUserEarnings](docs/user/README.md#getuserearnings) - Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.
* [GetUserGroups](docs/user/README.md#getusergroups) - View your user groups
* [GetUserPaymentInfo](docs/user/README.md#getuserpaymentinfo) - View user's payment and billing info
* [GetUserPermissions](docs/user/README.md#getuserpermissions) - Returns a list of permissions that this user is authorized for.
* [GetUserPopularPairs](docs/user/README.md#getuserpopularpairs) - Returns the language pairs that the user has ordered most.
* [GetUserProjectStats](docs/user/README.md#getuserprojectstats) - Returns a user's project statistics.
* [GetUserResponsivity](docs/user/README.md#getuserresponsivity) - Returns a user's vendor responsivity stats
* [GetUserStats](docs/user/README.md#getuserstats) - Returns a user's client and vendor statistics. This used to be called "summary" (\@deprecated).
* [GetUsers](docs/user/README.md#getusers) - Get a list of platform users
* [LogLocation](docs/user/README.md#loglocation) - Log user's current location. This data is used in our Intelligent Project Manager for various data analysis, including project prioritization for vendors and account validation.
* [MakeProofreader](docs/user/README.md#makeproofreader)
* [MakeUserProofreader](docs/user/README.md#makeuserproofreader)
* [RejectVendorApplication](docs/user/README.md#rejectvendorapplication)
* [SendEmailConfirmation](docs/user/README.md#sendemailconfirmation) - Sends email confirmation email for current user
* [SendPasswordReminder](docs/user/README.md#sendpasswordreminder) - Sends password reset email to the user's registered email address
* [SendUserEmailConfirmation](docs/user/README.md#senduseremailconfirmation) - Sends email confirmation email for a user
* [SubscribeNotification](docs/user/README.md#subscribenotification) - Subscribe to push notifications
* [SubscribeUserNotification](docs/user/README.md#subscribeusernotification)
* [SuspendUser](docs/user/README.md#suspenduser)
* [UnfreezeAccount](docs/user/README.md#unfreezeaccount) - Defreeze your account
* [UnfreezeUserAccount](docs/user/README.md#unfreezeuseraccount) - Unfreeze requester account for project notifications
* [UnsubscribeNotification](docs/user/README.md#unsubscribenotification)
* [UnsubscribeUserNotification](docs/user/README.md#unsubscribeusernotification)
* [UpdateMe](docs/user/README.md#updateme) - Update your account info
* [UpdatePassword](docs/user/README.md#updatepassword) - Update your account password
* [UpdatePaymentInfo](docs/user/README.md#updatepaymentinfo) - Update payment info
* [UpdateUser](docs/user/README.md#updateuser)
* [UpdateUserGroup](docs/user/README.md#updateusergroup)
* [UpdateUserPaymentInfo](docs/user/README.md#updateuserpaymentinfo) - Update user payment info
* [UploadProfilePictureJSON](docs/user/README.md#uploadprofilepicturejson) - Upload profile picture
* [UploadProfilePictureMultipart](docs/user/README.md#uploadprofilepicturemultipart) - Upload profile picture
* [UploadUserProfilePictureJSON](docs/user/README.md#uploaduserprofilepicturejson)
* [UploadUserProfilePictureMultipart](docs/user/README.md#uploaduserprofilepicturemultipart)

### [Vendor](docs/vendor/README.md)

* [GetAvailableVendors](docs/vendor/README.md#getavailablevendors) - Get a list of vendors available for the criteria given
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
