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
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1AnalysisInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1AnalysisResult;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1CallAnnotation;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1AnnotationBoundary;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1EntityMentionData;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1SentimentData;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1IntentMatchData;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1IssueMatchData;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1IssueAssignment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1PhraseMatchData;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1Entity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1EntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1Intent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1IssueModelResult;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationLevelSentiment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1AnnotatorSelector;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudContactcenterinsightsV1AnalysisInput = new GoogleCloudContactcenterinsightsV1AnalysisInput();
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult = new GoogleCloudContactcenterinsightsV1AnalysisResult();
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult->callAnalysisMetadata = new GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata();
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult->callAnalysisMetadata->annotations = [
        new GoogleCloudContactcenterinsightsV1CallAnnotation(),
        new GoogleCloudContactcenterinsightsV1CallAnnotation(),
        new GoogleCloudContactcenterinsightsV1CallAnnotation(),
    ];
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult->callAnalysisMetadata->entities = [
        'quibusdam' => new GoogleCloudContactcenterinsightsV1Entity(),
        'unde' => new GoogleCloudContactcenterinsightsV1Entity(),
        'nulla' => new GoogleCloudContactcenterinsightsV1Entity(),
    ];
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult->callAnalysisMetadata->intents = [
        'illum' => new GoogleCloudContactcenterinsightsV1Intent(),
        'vel' => new GoogleCloudContactcenterinsightsV1Intent(),
        'error' => new GoogleCloudContactcenterinsightsV1Intent(),
    ];
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult->callAnalysisMetadata->issueModelResult = new GoogleCloudContactcenterinsightsV1IssueModelResult();
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult->callAnalysisMetadata->issueModelResult->issueModel = 'deserunt';
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult->callAnalysisMetadata->issueModelResult->issues = [
        new GoogleCloudContactcenterinsightsV1IssueAssignment(),
        new GoogleCloudContactcenterinsightsV1IssueAssignment(),
    ];
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult->callAnalysisMetadata->phraseMatchers = [
        'magnam' => new GoogleCloudContactcenterinsightsV1PhraseMatchData(),
        'debitis' => new GoogleCloudContactcenterinsightsV1PhraseMatchData(),
    ];
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult->callAnalysisMetadata->sentiments = [
        new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment(),
    ];
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult->endTime = 'delectus';
    $request->googleCloudContactcenterinsightsV1AnalysisInput->annotatorSelector = new GoogleCloudContactcenterinsightsV1AnnotatorSelector();
    $request->googleCloudContactcenterinsightsV1AnalysisInput->annotatorSelector->issueModels = [
        'suscipit',
        'molestiae',
    ];
    $request->googleCloudContactcenterinsightsV1AnalysisInput->annotatorSelector->phraseMatchers = [
        'placeat',
        'voluptatum',
        'iusto',
        'excepturi',
    ];
    $request->googleCloudContactcenterinsightsV1AnalysisInput->annotatorSelector->runEntityAnnotator = false;
    $request->googleCloudContactcenterinsightsV1AnalysisInput->annotatorSelector->runIntentAnnotator = false;
    $request->googleCloudContactcenterinsightsV1AnalysisInput->annotatorSelector->runInterruptionAnnotator = false;
    $request->googleCloudContactcenterinsightsV1AnalysisInput->annotatorSelector->runIssueModelAnnotator = false;
    $request->googleCloudContactcenterinsightsV1AnalysisInput->annotatorSelector->runPhraseMatcherAnnotator = false;
    $request->googleCloudContactcenterinsightsV1AnalysisInput->annotatorSelector->runSentimentAnnotator = false;
    $request->googleCloudContactcenterinsightsV1AnalysisInput->annotatorSelector->runSilenceAnnotator = false;
    $request->googleCloudContactcenterinsightsV1AnalysisInput->annotatorSelector->runSummarizationAnnotator = false;
    $request->googleCloudContactcenterinsightsV1AnalysisInput->annotatorSelector->summarizationConfig = new GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfig();
    $request->googleCloudContactcenterinsightsV1AnalysisInput->annotatorSelector->summarizationConfig->conversationProfile = 'nisi';
    $request->googleCloudContactcenterinsightsV1AnalysisInput->annotatorSelector->summarizationConfig->summarizationModel = GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnum::BASELINE_MODEL;
    $request->googleCloudContactcenterinsightsV1AnalysisInput->name = 'Miss Raymond Hauck III';
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quo';
    $request->fields = 'odit';
    $request->key = 'at';
    $request->oauthToken = 'at';
    $request->parent = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsConversationsAnalysesCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [contactcenterinsightsProjectsLocationsConversationsAnalysesCreate](docs/projects/README.md#contactcenterinsightsprojectslocationsconversationsanalysescreate) - Creates an analysis. The long running operation is done when the analysis has completed.
* [contactcenterinsightsProjectsLocationsConversationsAnalysesList](docs/projects/README.md#contactcenterinsightsprojectslocationsconversationsanalyseslist) - Lists analyses.
* [contactcenterinsightsProjectsLocationsConversationsBulkAnalyze](docs/projects/README.md#contactcenterinsightsprojectslocationsconversationsbulkanalyze) - Analyzes multiple conversations in a single request.
* [contactcenterinsightsProjectsLocationsConversationsCalculateStats](docs/projects/README.md#contactcenterinsightsprojectslocationsconversationscalculatestats) - Gets conversation statistics.
* [contactcenterinsightsProjectsLocationsConversationsCreate](docs/projects/README.md#contactcenterinsightsprojectslocationsconversationscreate) - Creates a conversation.
* [contactcenterinsightsProjectsLocationsConversationsIngest](docs/projects/README.md#contactcenterinsightsprojectslocationsconversationsingest) - Imports conversations and processes them according to the user's configuration.
* [contactcenterinsightsProjectsLocationsConversationsList](docs/projects/README.md#contactcenterinsightsprojectslocationsconversationslist) - Lists conversations.
* [contactcenterinsightsProjectsLocationsConversationsUpload](docs/projects/README.md#contactcenterinsightsprojectslocationsconversationsupload) - Create a longrunning conversation upload operation. This method differs from CreateConversation by allowing audio transcription and optional DLP redaction.
* [contactcenterinsightsProjectsLocationsInsightsdataExport](docs/projects/README.md#contactcenterinsightsprojectslocationsinsightsdataexport) - Export insights data to a destination defined in the request body.
* [contactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStats](docs/projects/README.md#contactcenterinsightsprojectslocationsissuemodelscalculateissuemodelstats) - Gets an issue model's statistics.
* [contactcenterinsightsProjectsLocationsIssueModelsCreate](docs/projects/README.md#contactcenterinsightsprojectslocationsissuemodelscreate) - Creates an issue model.
* [contactcenterinsightsProjectsLocationsIssueModelsDeploy](docs/projects/README.md#contactcenterinsightsprojectslocationsissuemodelsdeploy) - Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.
* [contactcenterinsightsProjectsLocationsIssueModelsIssuesList](docs/projects/README.md#contactcenterinsightsprojectslocationsissuemodelsissueslist) - Lists issues.
* [contactcenterinsightsProjectsLocationsIssueModelsList](docs/projects/README.md#contactcenterinsightsprojectslocationsissuemodelslist) - Lists issue models.
* [contactcenterinsightsProjectsLocationsIssueModelsUndeploy](docs/projects/README.md#contactcenterinsightsprojectslocationsissuemodelsundeploy) - Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.
* [contactcenterinsightsProjectsLocationsOperationsCancel](docs/projects/README.md#contactcenterinsightsprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [contactcenterinsightsProjectsLocationsOperationsList](docs/projects/README.md#contactcenterinsightsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [contactcenterinsightsProjectsLocationsPhraseMatchersCreate](docs/projects/README.md#contactcenterinsightsprojectslocationsphrasematcherscreate) - Creates a phrase matcher.
* [contactcenterinsightsProjectsLocationsPhraseMatchersList](docs/projects/README.md#contactcenterinsightsprojectslocationsphrasematcherslist) - Lists phrase matchers.
* [contactcenterinsightsProjectsLocationsViewsCreate](docs/projects/README.md#contactcenterinsightsprojectslocationsviewscreate) - Creates a view.
* [contactcenterinsightsProjectsLocationsViewsDelete](docs/projects/README.md#contactcenterinsightsprojectslocationsviewsdelete) - Deletes a view.
* [contactcenterinsightsProjectsLocationsViewsGet](docs/projects/README.md#contactcenterinsightsprojectslocationsviewsget) - Gets a view.
* [contactcenterinsightsProjectsLocationsViewsList](docs/projects/README.md#contactcenterinsightsprojectslocationsviewslist) - Lists views.
* [contactcenterinsightsProjectsLocationsViewsPatch](docs/projects/README.md#contactcenterinsightsprojectslocationsviewspatch) - Updates a view.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
