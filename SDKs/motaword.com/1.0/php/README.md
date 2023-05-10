# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCacheRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCacheRequest();
    $request->key = 'corrupti';

    $response = $sdk->deleteCache($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [deleteCache](docs/sdk/README.md#deletecache) - Clear cache by key

### [activity](docs/activity/README.md)

* [getActivities](docs/activity/README.md#getactivities) - Monitor project activities
* [getActivity](docs/activity/README.md#getactivity) - View an activity
* [getActivityComments](docs/activity/README.md#getactivitycomments) - View activity comments
* [getComments](docs/activity/README.md#getcomments) - View all project comments
* [getSalesActivities](docs/activity/README.md#getsalesactivities) - Get sales activities for a project
* [insertSalesActivity](docs/activity/README.md#insertsalesactivity) - Insert sales activity for a project
* [submitCommentJson](docs/activity/README.md#submitcommentjson) - Submit comment to an activity
* [submitCommentMultipart](docs/activity/README.md#submitcommentmultipart) - Submit comment to an activity

### [async](docs/async/README.md)

* [downloadAsync](docs/async/README.md#downloadasync) - Download result of an async operation

### [auth](docs/auth/README.md)

* [getAccessToken](docs/auth/README.md#getaccesstoken) - Retrieve an access token

### [blog](docs/blog/README.md)

* [getBlogPosts](docs/blog/README.md#getblogposts) - Get blog posts - ordered by created desc by default

### [commission](docs/commission/README.md)

* [getCommissions](docs/commission/README.md#getcommissions) - Returns a commission list of current client.
* [getCommissionsByFilter](docs/commission/README.md#getcommissionsbyfilter) - Returns a commission list of current client.

### [continuousProject](docs/continuousproject/README.md)

* [addDocument](docs/continuousproject/README.md#adddocument) - Add a new document to your continuous project
* [collectAnalytics](docs/continuousproject/README.md#collectanalytics) - Save/collect analytics data from Active widget
* [complete](docs/continuousproject/README.md#complete) - Complete continuous project
* [completeContinuousDocument](docs/continuousproject/README.md#completecontinuousdocument) - Complete a continuous project document
* [completeLanguage](docs/continuousproject/README.md#completelanguage) - Complete continuous project language
* [createActiveWidget](docs/continuousproject/README.md#createactivewidget) - Create a new Active widget
* [createContinuousProject](docs/continuousproject/README.md#createcontinuousproject) - Create a continuous project
* [createSubscription](docs/continuousproject/README.md#createsubscription) - Create subscription for continuous project
* [deleteActiveWidget](docs/continuousproject/README.md#deleteactivewidget) - Delete a single widget for this Active project
* [deleteContinuousProject](docs/continuousproject/README.md#deletecontinuousproject) - Delete a continuous project
* [deleteSubscription](docs/continuousproject/README.md#deletesubscription) - Delete subscription for continuous project
* [getActiveWidget](docs/continuousproject/README.md#getactivewidget) - View an Active widget
* [getActiveWidgets](docs/continuousproject/README.md#getactivewidgets) - View Active widgets
* [getAnalyticsToken](docs/continuousproject/README.md#getanalyticstoken) - Get JWT token to be used in analytics dashboards
* [getContinuousProject](docs/continuousproject/README.md#getcontinuousproject) - View a continuous project
* [getContinuousProjectDocument](docs/continuousproject/README.md#getcontinuousprojectdocument) - View a continuous document
* [getContinuousProjectDocumentProgress](docs/continuousproject/README.md#getcontinuousprojectdocumentprogress) - Monitor progress of a continuous document
* [getContinuousProjectDocuments](docs/continuousproject/README.md#getcontinuousprojectdocuments) - View continuous documents
* [getContinuousProjectInvoices](docs/continuousproject/README.md#getcontinuousprojectinvoices) - Invoices of a continuous project
* [getContinuousProjectProgress](docs/continuousproject/README.md#getcontinuousprojectprogress) - Monitor progress and status of a continous project
* [getContinuousProjects](docs/continuousproject/README.md#getcontinuousprojects) - View continuous projects
* [getQuoteForDocument](docs/continuousproject/README.md#getquotefordocument) - Get a quote for a continuous project document
* [getQuoteForDocuments](docs/continuousproject/README.md#getquotefordocuments) - Get quote for documents
* [getQuoteForLanguage](docs/continuousproject/README.md#getquoteforlanguage) - Get quote for language
* [getQuoteForLanguages](docs/continuousproject/README.md#getquoteforlanguages) - Get quote for languages
* [getSubscription](docs/continuousproject/README.md#getsubscription) - Get subscription for continuous project
* [postContinuousProjectDocumentProgress](docs/continuousproject/README.md#postcontinuousprojectdocumentprogress) - Get continuous project document progress for multiple IDs
* [resetActiveWidgetToken](docs/continuousproject/README.md#resetactivewidgettoken) - Reset Active widget token
* [translate](docs/continuousproject/README.md#translate) - Instantly translate your content
* [updateActiveWidget](docs/continuousproject/README.md#updateactivewidget) - Update Active widget settings.
* [updateContinuousProject](docs/continuousproject/README.md#updatecontinuousproject) - Update a continuous project
* [updateDocument](docs/continuousproject/README.md#updatedocument) - Update the document
* [updateSubscription](docs/continuousproject/README.md#updatesubscription) - Update subscription for continuous project
* [updateSubscriptionPaymentMethod](docs/continuousproject/README.md#updatesubscriptionpaymentmethod) - Update subscription payment method for continuous project

### [corporate](docs/corporate/README.md)

* [getAvailableCorporatePermissions](docs/corporate/README.md#getavailablecorporatepermissions) - View available permissions
* [getAvailableCorporatePermissionsById](docs/corporate/README.md#getavailablecorporatepermissionsbyid) - Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
* [getCorporate](docs/corporate/README.md#getcorporate) - View your corporate account
* [getCorporateById](docs/corporate/README.md#getcorporatebyid) - Get details of this corporate account
* [getCorporateUserGroups](docs/corporate/README.md#getcorporateusergroups) - View user groups
* [getCorporateUserGroupsById](docs/corporate/README.md#getcorporateusergroupsbyid) - Get a list of user groups for this corporate account
* [getCorporateUsers](docs/corporate/README.md#getcorporateusers) - View users
* [getCorporateUsersById](docs/corporate/README.md#getcorporateusersbyid) - Get a list of users for this corporate account
* [getCorporatesList](docs/corporate/README.md#getcorporateslist) - Get a list of corporate accounts
* [saveCorporateUser](docs/corporate/README.md#savecorporateuser) - Create or update a user
* [saveCorporateUserGroup](docs/corporate/README.md#savecorporateusergroup) - Create or update a corporate user group
* [saveCorporateUserGroupById](docs/corporate/README.md#savecorporateusergroupbyid) - Create or update a corporate user group for this corporate account

### [document](docs/document/README.md)

* [getAllDocumentSubjects](docs/document/README.md#getalldocumentsubjects) - Get a list of subjects of projects
* [getDocument](docs/document/README.md#getdocument) - View a single document
* [getDocumentProgress](docs/document/README.md#getdocumentprogress) - View a document translation progress
* [getDocuments](docs/document/README.md#getdocuments) - View your documents
* [getSimilarDocuments](docs/document/README.md#getsimilardocuments) - Find documents similar to this document.
* [getUserDocuments](docs/document/README.md#getuserdocuments) - Get a list of your documents
* [regeneratePreview](docs/document/README.md#regeneratepreview) - Regenerate preview and return preview URL for given file
* [useAsDraft](docs/document/README.md#useasdraft) - Use the translation of given source manual document as manual draft source for the given target document.
* [useAsRegular](docs/document/README.md#useasregular) - Use the translation of the given manual document as a regular file.

### [glossary](docs/glossary/README.md)

* [createGlossaryJson](docs/glossary/README.md#createglossaryjson) - Upload a glossary file
* [createGlossaryMultipart](docs/glossary/README.md#createglossarymultipart) - Upload a glossary file
* [deleteGlossary](docs/glossary/README.md#deleteglossary) - Delete a glossary
* [downloadGlobalGlossary](docs/glossary/README.md#downloadglobalglossary) - Download account glossary.
* [downloadGlossary](docs/glossary/README.md#downloadglossary) - Download a glossary
* [getGlossaries](docs/glossary/README.md#getglossaries) - View glossaries
* [getGlossary](docs/glossary/README.md#getglossary) - View a glossary
* [updateGlobalGlossaryJson](docs/glossary/README.md#updateglobalglossaryjson) - Create or update the account glossary
* [updateGlobalGlossaryMultipart](docs/glossary/README.md#updateglobalglossarymultipart) - Create or update the account glossary
* [updateGlossaryJson](docs/glossary/README.md#updateglossaryjson) - Update a glossary
* [updateGlossaryMultipart](docs/glossary/README.md#updateglossarymultipart) - Update a glossary

### [integrations](docs/integrations/README.md)

* [getIntegrationsToken](docs/integrations/README.md#getintegrationstoken) - Generate a new access token for MotaWord's integrations service

### [invitation](docs/invitation/README.md)

* [getInvitationVendors](docs/invitation/README.md#getinvitationvendors) - Get vendor list for compiled invitation needs

### [machineLearning](docs/machinelearning/README.md)

* [getDeliveryPrediction](docs/machinelearning/README.md#getdeliveryprediction) - Get a delivery prediction for a project

### [pam](docs/pam/README.md)

* [getClientProfileForPam](docs/pam/README.md#getclientprofileforpam) - Get the Pam profile of a client for this client ID
* [getProjectCompletionReportForPam](docs/pam/README.md#getprojectcompletionreportforpam) - Get completion report data of a project
* [postMessage](docs/pam/README.md#postmessage) - Sends a message to chat

### [payment](docs/payment/README.md)

* [deleteCreditCard](docs/payment/README.md#deletecreditcard) - Delete credit card
* [getCreditCard](docs/payment/README.md#getcreditcard) - View saved credit card
* [resetCardPaymentCode](docs/payment/README.md#resetcardpaymentcode) - Reset credit card payment code
* [resetCorporatePaymentCode](docs/payment/README.md#resetcorporatepaymentcode) - Reset payment code
* [toggleCorporateAutoCharge](docs/payment/README.md#togglecorporateautocharge) - Manage automatic charges on your credit card

### [project](docs/project/README.md)

* [assignCM](docs/project/README.md#assigncm) - Assign a CM to the project
* [cancelProject](docs/project/README.md#cancelproject) - Cancel your translation project
* [createProjectJson](docs/project/README.md#createprojectjson) - Create a new project
* [createProjectMultipart](docs/project/README.md#createprojectmultipart) - Create a new project
* [deleteProject](docs/project/README.md#deleteproject) - Delete your translation project
* [deliverProject](docs/project/README.md#deliverproject) - Deliver project
* [download](docs/project/README.md#download) - Download your translated project
* [downloadHtmlInvoice](docs/project/README.md#downloadhtmlinvoice) - Download project invoice (HTML)
* [downloadLanguage](docs/project/README.md#downloadlanguage) - Download your translated project language
* [downloadPdfInvoice](docs/project/README.md#downloadpdfinvoice) - Download project invoice (PDF)
* [getInvoice](docs/project/README.md#getinvoice) - View project invoice
* [getProgress](docs/project/README.md#getprogress) - View progress of a project
* [getProject](docs/project/README.md#getproject) - View a translation project
* [getProjectVendors](docs/project/README.md#getprojectvendors) - Get a list of vendors.
* [getProjects](docs/project/README.md#getprojects) - View your translation projects
* [getQuoteIdFromInternalId](docs/project/README.md#getquoteidfrominternalid) - Get Quote Id
* [getVendorProjects](docs/project/README.md#getvendorprojects) - List projects as a vendor
* [getVendorProjectsByUserId](docs/project/README.md#getvendorprojectsbyuserid) - Get a list of user/vendor projects
* [launchProject](docs/project/README.md#launchproject) - Launch your translation project
* [package](docs/project/README.md#package) - Package your translated project
* [packageLanguage](docs/project/README.md#packagelanguage) - Package your translated project language
* [recreateProject](docs/project/README.md#recreateproject) - Recreate your translation project from scratch. This is a risky action, you will lose current translations.
* [sendQuoteEmail](docs/project/README.md#sendquoteemail) - Send a quote email
* [submitProjectReports](docs/project/README.md#submitprojectreports) - Submit feedback report for a project
* [trackPackage](docs/project/README.md#trackpackage) - Track translation packaging status
* [triggerCallback](docs/project/README.md#triggercallback) - Trigger a call to your callback URL related to this project.
* [updateProject](docs/project/README.md#updateproject) - Update project info and settings

### [projectDocument](docs/projectdocument/README.md)

* [createProjectDocument](docs/projectdocument/README.md#createprojectdocument) - Upload a new document
* [deleteProjectDocument](docs/projectdocument/README.md#deleteprojectdocument) - Delete the document
* [downloadProjectDocument](docs/projectdocument/README.md#downloadprojectdocument) - Download a project source document
* [downloadTranslatedDocumentForLanguage](docs/projectdocument/README.md#downloadtranslateddocumentforlanguage) - Download translated document
* [getProjectDocument](docs/projectdocument/README.md#getprojectdocument) - View a project source document
* [getProjectDocuments](docs/projectdocument/README.md#getprojectdocuments) - View project source documents
* [updateProjectDocumentJson](docs/projectdocument/README.md#updateprojectdocumentjson) - Update the document.
* [updateProjectDocumentMultipart](docs/projectdocument/README.md#updateprojectdocumentmultipart) - Update the document.

### [projectWebhooks](docs/projectwebhooks/README.md)

* [deleteProjectWebhook](docs/projectwebhooks/README.md#deleteprojectwebhook) - Delete project webhooks
* [getProjectWebhooks](docs/projectwebhooks/README.md#getprojectwebhooks) - View project webhooks
* [postProjectWebhook](docs/projectwebhooks/README.md#postprojectwebhook) - Update project webhook
* [updateProjectWebhook](docs/projectwebhooks/README.md#updateprojectwebhook) - Update project webhook

### [report](docs/report/README.md)

* [generateQAReport](docs/report/README.md#generateqareport) - Generate a QA report for given filter
* [getFilterContents](docs/report/README.md#getfiltercontents) - Returns available options for selected timeframe.
* [getLanguagePairsReport](docs/report/README.md#getlanguagepairsreport) - Language pairs report
* [getProjectsReport](docs/report/README.md#getprojectsreport) - Projects report
* [getUsersReport](docs/report/README.md#getusersreport) - Company users report

### [search](docs/search/README.md)

* [checkDocumentsReindex](docs/search/README.md#checkdocumentsreindex) - Check reindex status of the client source and translation documents.
* [reindexDocuments](docs/search/README.md#reindexdocuments) - Reindex for search all of the client source and translation documents.
* [searchEverywhere](docs/search/README.md#searcheverywhere) - Search everything in your account

### [static](docs/static/README.md)

* [getEndpoints](docs/static/README.md#getendpoints) - Available endpoints
* [getFormats](docs/static/README.md#getformats) - List of supported file formats
* [getLanguages](docs/static/README.md#getlanguages) - List of supported languages
* [getSwaggerYaml](docs/static/README.md#getswaggeryaml) - OpenAPI YAML representation of our API

### [stats](docs/stats/README.md)

* [getCommissionStats](docs/stats/README.md#getcommissionstats) - Returns the total commissions stats.
* [getCommissionStatsByFilter](docs/stats/README.md#getcommissionstatsbyfilter) - Returns the total commissions stats by report filter.
* [getPopularPairs](docs/stats/README.md#getpopularpairs) - View your popular language pairs
* [getProjectStats](docs/stats/README.md#getprojectstats) - View your project statistics
* [getStringStats](docs/stats/README.md#getstringstats) - View your translation statistics

### [strings](docs/strings/README.md)

* [clearTranslationCache](docs/strings/README.md#cleartranslationcache) - Clear translation cache
* [getContinuousProjectFileStrings](docs/strings/README.md#getcontinuousprojectfilestrings) - View strings their translations in a continuous document
* [getContinuousProjectStrings](docs/strings/README.md#getcontinuousprojectstrings) - View strings and translations in continuous project
* [getDocumentTranslations](docs/strings/README.md#getdocumenttranslations) - View strings and translations of a document
* [getDocumentTranslationsForLanguage](docs/strings/README.md#getdocumenttranslationsforlanguage) - View strings and translations of a document for target language
* [getProjectStrings](docs/strings/README.md#getprojectstrings) - View project strings and translations
* [getProjectStringsForLanguage](docs/strings/README.md#getprojectstringsforlanguage) - View strings and translations for target language
* [~~getProjectTranslations~~](docs/strings/README.md#getprojecttranslations) - Deprecated. Use /projects/{projectId}/strings instead. :warning: **Deprecated**
* [~~getProjectTranslationsForLanguage~~](docs/strings/README.md#getprojecttranslationsforlanguage) - Deprecated. use /projects/{projectId}/strings/{language} instead. :warning: **Deprecated**
* [getStrings](docs/strings/README.md#getstrings) - View account strings (translation memory)
* [getTranslationCache](docs/strings/README.md#gettranslationcache) - View cached strings translations in continuous project
* [packageProjectTranslationMemory](docs/strings/README.md#packageprojecttranslationmemory) - Download project translation memory
* [packageProjectTranslationMemoryForLanguage](docs/strings/README.md#packageprojecttranslationmemoryforlanguage) - Download language-specific project translation memory
* [packageProjectTranslationMemoryForLanguageStatus](docs/strings/README.md#packageprojecttranslationmemoryforlanguagestatus) - Check language-specific translation memory packaging status
* [packageProjectTranslationMemoryStatus](docs/strings/README.md#packageprojecttranslationmemorystatus) - Check translation memory packaging status
* [packageUserTranslationMemory](docs/strings/README.md#packageusertranslationmemory) - Download account translation memory
* [packageUserTranslationMemoryForLanguageStatus](docs/strings/README.md#packageusertranslationmemoryforlanguagestatus) - Check account translation memory packaging status
* [postContinuousProjectFileStrings](docs/strings/README.md#postcontinuousprojectfilestrings) - Get a list of strings and its translations in the project.
* [~~postStrings~~](docs/strings/README.md#poststrings) - Translate Strings with MT :warning: **Deprecated**
* [recacheTranslations](docs/strings/README.md#recachetranslations) - Recache translations
* [updateTranslationMemoryUnit](docs/strings/README.md#updatetranslationmemoryunit) - Update string translation

### [styleGuide](docs/styleguide/README.md)

* [createStyleGuideJson](docs/styleguide/README.md#createstyleguidejson) - Upload a new style guide
* [createStyleGuideMultipart](docs/styleguide/README.md#createstyleguidemultipart) - Upload a new style guide
* [deleteStyleGuide](docs/styleguide/README.md#deletestyleguide) - Delete a style guide
* [downloadGlobalStyleGuide](docs/styleguide/README.md#downloadglobalstyleguide) - Download account style guide
* [downloadStyleGuide](docs/styleguide/README.md#downloadstyleguide) - Download a style guide
* [getStyleGuide](docs/styleguide/README.md#getstyleguide) - View a style guide
* [getStyleGuides](docs/styleguide/README.md#getstyleguides) - View style guides
* [updateGlobalStyleGuideJson](docs/styleguide/README.md#updateglobalstyleguidejson) - Create or update the account style guide
* [updateGlobalStyleGuideMultipart](docs/styleguide/README.md#updateglobalstyleguidemultipart) - Create or update the account style guide
* [updateStyleGuideJson](docs/styleguide/README.md#updatestyleguidejson) - Update a style guide
* [updateStyleGuideMultipart](docs/styleguide/README.md#updatestyleguidemultipart) - Update a style guide

### [surveys](docs/surveys/README.md)

* [getQuestions](docs/surveys/README.md#getquestions) - Get survey questions in given scope and type
* [submitAnswers](docs/surveys/README.md#submitanswers) - Post survey answers for scope and type

### [user](docs/user/README.md)

* [approveVendorApplication](docs/user/README.md#approvevendorapplication)
* [createUser](docs/user/README.md#createuser) - Create a new user
* [deleteAccount](docs/user/README.md#deleteaccount) - Delete your account
* [deleteUserAccount](docs/user/README.md#deleteuseraccount) - Delete requester account
* [downgradeProofreader](docs/user/README.md#downgradeproofreader)
* [downgradeUserProofreader](docs/user/README.md#downgradeuserproofreader)
* [freezeAccount](docs/user/README.md#freezeaccount) - Freeze account
* [freezeUserAccount](docs/user/README.md#freezeuseraccount) - Freeze requester account for project notifications
* [getAllVendorTags](docs/user/README.md#getallvendortags) - Returns all vendor tags for vendors filter
* [getEarnings](docs/user/README.md#getearnings) - View your vendor earnings
* [getFilteredVendors](docs/user/README.md#getfilteredvendors) - Filter vendors based on provided parameters
* [getMe](docs/user/README.md#getme) - View your account info
* [getPaymentInfo](docs/user/README.md#getpaymentinfo) - View your payment and billing info
* [getPermissions](docs/user/README.md#getpermissions) - View your permissions
* [getResponsivity](docs/user/README.md#getresponsivity) - View your vendor responsiveness
* [getStats](docs/user/README.md#getstats) - View your account statistics
* [getThisUserGroups](docs/user/README.md#getthisusergroups) - Returns a list of user groups that this user belongs to.
* [getUser](docs/user/README.md#getuser) - Get user information, including client or vendor specific info.
* [getUserEarnings](docs/user/README.md#getuserearnings) - Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.
* [getUserGroups](docs/user/README.md#getusergroups) - View your user groups
* [getUserPaymentInfo](docs/user/README.md#getuserpaymentinfo) - View user's payment and billing info
* [getUserPermissions](docs/user/README.md#getuserpermissions) - Returns a list of permissions that this user is authorized for.
* [getUserPopularPairs](docs/user/README.md#getuserpopularpairs) - Returns the language pairs that the user has ordered most.
* [getUserProjectStats](docs/user/README.md#getuserprojectstats) - Returns a user's project statistics.
* [getUserResponsivity](docs/user/README.md#getuserresponsivity) - Returns a user's vendor responsivity stats
* [getUserStats](docs/user/README.md#getuserstats) - Returns a user's client and vendor statistics. This used to be called "summary" (\@deprecated).
* [getUsers](docs/user/README.md#getusers) - Get a list of platform users
* [logLocation](docs/user/README.md#loglocation) - Log user's current location. This data is used in our Intelligent Project Manager for various data analysis, including project prioritization for vendors and account validation.
* [makeProofreader](docs/user/README.md#makeproofreader)
* [makeUserProofreader](docs/user/README.md#makeuserproofreader)
* [rejectVendorApplication](docs/user/README.md#rejectvendorapplication)
* [sendEmailConfirmation](docs/user/README.md#sendemailconfirmation) - Sends email confirmation email for current user
* [sendPasswordReminder](docs/user/README.md#sendpasswordreminder) - Sends password reset email to the user's registered email address
* [sendUserEmailConfirmation](docs/user/README.md#senduseremailconfirmation) - Sends email confirmation email for a user
* [subscribeNotification](docs/user/README.md#subscribenotification) - Subscribe to push notifications
* [subscribeUserNotification](docs/user/README.md#subscribeusernotification)
* [suspendUser](docs/user/README.md#suspenduser)
* [unfreezeAccount](docs/user/README.md#unfreezeaccount) - Defreeze your account
* [unfreezeUserAccount](docs/user/README.md#unfreezeuseraccount) - Unfreeze requester account for project notifications
* [unsubscribeNotification](docs/user/README.md#unsubscribenotification)
* [unsubscribeUserNotification](docs/user/README.md#unsubscribeusernotification)
* [updateMe](docs/user/README.md#updateme) - Update your account info
* [updatePassword](docs/user/README.md#updatepassword) - Update your account password
* [updatePaymentInfo](docs/user/README.md#updatepaymentinfo) - Update payment info
* [updateUser](docs/user/README.md#updateuser)
* [updateUserGroup](docs/user/README.md#updateusergroup)
* [updateUserPaymentInfo](docs/user/README.md#updateuserpaymentinfo) - Update user payment info
* [uploadProfilePictureJson](docs/user/README.md#uploadprofilepicturejson) - Upload profile picture
* [uploadProfilePictureMultipart](docs/user/README.md#uploadprofilepicturemultipart) - Upload profile picture
* [uploadUserProfilePictureJson](docs/user/README.md#uploaduserprofilepicturejson)
* [uploadUserProfilePictureMultipart](docs/user/README.md#uploaduserprofilepicturemultipart)

### [vendor](docs/vendor/README.md)

* [getAvailableVendors](docs/vendor/README.md#getavailablevendors) - Get a list of vendors available for the criteria given
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
