# projects

### Available Operations

* [contactcenterinsightsProjectsLocationsConversationsAnalysesCreate](#contactcenterinsightsprojectslocationsconversationsanalysescreate) - Creates an analysis. The long running operation is done when the analysis has completed.
* [contactcenterinsightsProjectsLocationsConversationsAnalysesList](#contactcenterinsightsprojectslocationsconversationsanalyseslist) - Lists analyses.
* [contactcenterinsightsProjectsLocationsConversationsBulkAnalyze](#contactcenterinsightsprojectslocationsconversationsbulkanalyze) - Analyzes multiple conversations in a single request.
* [contactcenterinsightsProjectsLocationsConversationsCalculateStats](#contactcenterinsightsprojectslocationsconversationscalculatestats) - Gets conversation statistics.
* [contactcenterinsightsProjectsLocationsConversationsCreate](#contactcenterinsightsprojectslocationsconversationscreate) - Creates a conversation.
* [contactcenterinsightsProjectsLocationsConversationsIngest](#contactcenterinsightsprojectslocationsconversationsingest) - Imports conversations and processes them according to the user's configuration.
* [contactcenterinsightsProjectsLocationsConversationsList](#contactcenterinsightsprojectslocationsconversationslist) - Lists conversations.
* [contactcenterinsightsProjectsLocationsConversationsUpload](#contactcenterinsightsprojectslocationsconversationsupload) - Create a longrunning conversation upload operation. This method differs from CreateConversation by allowing audio transcription and optional DLP redaction.
* [contactcenterinsightsProjectsLocationsInsightsdataExport](#contactcenterinsightsprojectslocationsinsightsdataexport) - Export insights data to a destination defined in the request body.
* [contactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStats](#contactcenterinsightsprojectslocationsissuemodelscalculateissuemodelstats) - Gets an issue model's statistics.
* [contactcenterinsightsProjectsLocationsIssueModelsCreate](#contactcenterinsightsprojectslocationsissuemodelscreate) - Creates an issue model.
* [contactcenterinsightsProjectsLocationsIssueModelsDeploy](#contactcenterinsightsprojectslocationsissuemodelsdeploy) - Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.
* [contactcenterinsightsProjectsLocationsIssueModelsIssuesList](#contactcenterinsightsprojectslocationsissuemodelsissueslist) - Lists issues.
* [contactcenterinsightsProjectsLocationsIssueModelsList](#contactcenterinsightsprojectslocationsissuemodelslist) - Lists issue models.
* [contactcenterinsightsProjectsLocationsIssueModelsUndeploy](#contactcenterinsightsprojectslocationsissuemodelsundeploy) - Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.
* [contactcenterinsightsProjectsLocationsOperationsCancel](#contactcenterinsightsprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [contactcenterinsightsProjectsLocationsOperationsList](#contactcenterinsightsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [contactcenterinsightsProjectsLocationsPhraseMatchersCreate](#contactcenterinsightsprojectslocationsphrasematcherscreate) - Creates a phrase matcher.
* [contactcenterinsightsProjectsLocationsPhraseMatchersList](#contactcenterinsightsprojectslocationsphrasematcherslist) - Lists phrase matchers.
* [contactcenterinsightsProjectsLocationsViewsCreate](#contactcenterinsightsprojectslocationsviewscreate) - Creates a view.
* [contactcenterinsightsProjectsLocationsViewsDelete](#contactcenterinsightsprojectslocationsviewsdelete) - Deletes a view.
* [contactcenterinsightsProjectsLocationsViewsGet](#contactcenterinsightsprojectslocationsviewsget) - Gets a view.
* [contactcenterinsightsProjectsLocationsViewsList](#contactcenterinsightsprojectslocationsviewslist) - Lists views.
* [contactcenterinsightsProjectsLocationsViewsPatch](#contactcenterinsightsprojectslocationsviewspatch) - Updates a view.

## contactcenterinsightsProjectsLocationsConversationsAnalysesCreate

Creates an analysis. The long running operation is done when the analysis has completed.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudContactcenterinsightsV1AnalysisInput = new GoogleCloudContactcenterinsightsV1AnalysisInput();
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult = new GoogleCloudContactcenterinsightsV1AnalysisResult();
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult->callAnalysisMetadata = new GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata();
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult->callAnalysisMetadata->annotations = [
        new GoogleCloudContactcenterinsightsV1CallAnnotation(),
        new GoogleCloudContactcenterinsightsV1CallAnnotation(),
        new GoogleCloudContactcenterinsightsV1CallAnnotation(),
    ];
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult->callAnalysisMetadata->entities = [
        'dolorum' => new GoogleCloudContactcenterinsightsV1Entity(),
        'dicta' => new GoogleCloudContactcenterinsightsV1Entity(),
        'nam' => new GoogleCloudContactcenterinsightsV1Entity(),
        'officia' => new GoogleCloudContactcenterinsightsV1Entity(),
    ];
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult->callAnalysisMetadata->intents = [
        'fugit' => new GoogleCloudContactcenterinsightsV1Intent(),
        'deleniti' => new GoogleCloudContactcenterinsightsV1Intent(),
        'hic' => new GoogleCloudContactcenterinsightsV1Intent(),
    ];
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult->callAnalysisMetadata->issueModelResult = new GoogleCloudContactcenterinsightsV1IssueModelResult();
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult->callAnalysisMetadata->issueModelResult->issueModel = 'optio';
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult->callAnalysisMetadata->issueModelResult->issues = [
        new GoogleCloudContactcenterinsightsV1IssueAssignment(),
        new GoogleCloudContactcenterinsightsV1IssueAssignment(),
        new GoogleCloudContactcenterinsightsV1IssueAssignment(),
    ];
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult->callAnalysisMetadata->phraseMatchers = [
        'commodi' => new GoogleCloudContactcenterinsightsV1PhraseMatchData(),
    ];
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult->callAnalysisMetadata->sentiments = [
        new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment(),
        new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment(),
    ];
    $request->googleCloudContactcenterinsightsV1AnalysisInput->analysisResult->endTime = 'modi';
    $request->googleCloudContactcenterinsightsV1AnalysisInput->annotatorSelector = new GoogleCloudContactcenterinsightsV1AnnotatorSelector();
    $request->googleCloudContactcenterinsightsV1AnalysisInput->annotatorSelector->issueModels = [
        'impedit',
    ];
    $request->googleCloudContactcenterinsightsV1AnalysisInput->annotatorSelector->phraseMatchers = [
        'esse',
        'ipsum',
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
    $request->googleCloudContactcenterinsightsV1AnalysisInput->annotatorSelector->summarizationConfig->conversationProfile = 'aspernatur';
    $request->googleCloudContactcenterinsightsV1AnalysisInput->annotatorSelector->summarizationConfig->summarizationModel = GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnum::SUMMARIZATION_MODEL_UNSPECIFIED;
    $request->googleCloudContactcenterinsightsV1AnalysisInput->name = 'Faye Cormier';
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'saepe';
    $request->key = 'fuga';
    $request->oauthToken = 'in';
    $request->parent = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'saepe';

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

## contactcenterinsightsProjectsLocationsConversationsAnalysesList

Lists analyses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsConversationsAnalysesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsConversationsAnalysesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsConversationsAnalysesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'est';
    $request->filter = 'mollitia';
    $request->key = 'laborum';
    $request->oauthToken = 'dolores';
    $request->pageSize = 210382;
    $request->pageToken = 'corporis';
    $request->parent = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsConversationsAnalysesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsConversationsAnalysesList($request, $requestSecurity);

    if ($response->googleCloudContactcenterinsightsV1ListAnalysesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsConversationsBulkAnalyze

Analyzes multiple conversations in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1AnnotatorSelector;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest = new GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest();
    $request->googleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest->analysisPercentage = 3250.47;
    $request->googleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest->annotatorSelector = new GoogleCloudContactcenterinsightsV1AnnotatorSelector();
    $request->googleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest->annotatorSelector->issueModels = [
        'accusantium',
        'iure',
        'culpa',
    ];
    $request->googleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest->annotatorSelector->phraseMatchers = [
        'sapiente',
        'architecto',
        'mollitia',
        'dolorem',
    ];
    $request->googleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest->annotatorSelector->runEntityAnnotator = false;
    $request->googleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest->annotatorSelector->runIntentAnnotator = false;
    $request->googleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest->annotatorSelector->runInterruptionAnnotator = false;
    $request->googleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest->annotatorSelector->runIssueModelAnnotator = false;
    $request->googleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest->annotatorSelector->runPhraseMatcherAnnotator = false;
    $request->googleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest->annotatorSelector->runSentimentAnnotator = false;
    $request->googleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest->annotatorSelector->runSilenceAnnotator = false;
    $request->googleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest->annotatorSelector->runSummarizationAnnotator = false;
    $request->googleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest->annotatorSelector->summarizationConfig = new GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfig();
    $request->googleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest->annotatorSelector->summarizationConfig->conversationProfile = 'culpa';
    $request->googleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest->annotatorSelector->summarizationConfig->summarizationModel = GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnum::SUMMARIZATION_MODEL_UNSPECIFIED;
    $request->googleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest->filter = 'repellat';
    $request->googleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest->parent = 'mollitia';
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'quam';
    $request->key = 'molestiae';
    $request->oauthToken = 'velit';
    $request->parent = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'quia';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'vitae';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsConversationsBulkAnalyze($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsConversationsCalculateStats

Gets conversation statistics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsConversationsCalculateStatsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'animi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odit';
    $request->fields = 'quo';
    $request->filter = 'sequi';
    $request->key = 'tenetur';
    $request->location = 'ipsam';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'possimus';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsConversationsCalculateStatsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsConversationsCalculateStats($request, $requestSecurity);

    if ($response->googleCloudContactcenterinsightsV1CalculateStatsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsConversationsCreate

Creates a conversation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsConversationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationCallMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationDataSourceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1DialogflowSourceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1GcsSource;
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationSummarizationSuggestionData;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationMediumEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationTranscript;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationParticipant;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsConversationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsConversationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudContactcenterinsightsV1ConversationInput = new GoogleCloudContactcenterinsightsV1ConversationInput();
    $request->googleCloudContactcenterinsightsV1ConversationInput->agentId = 'temporibus';
    $request->googleCloudContactcenterinsightsV1ConversationInput->callMetadata = new GoogleCloudContactcenterinsightsV1ConversationCallMetadata();
    $request->googleCloudContactcenterinsightsV1ConversationInput->callMetadata->agentChannel = 673660;
    $request->googleCloudContactcenterinsightsV1ConversationInput->callMetadata->customerChannel = 96098;
    $request->googleCloudContactcenterinsightsV1ConversationInput->dataSource = new GoogleCloudContactcenterinsightsV1ConversationDataSourceInput();
    $request->googleCloudContactcenterinsightsV1ConversationInput->dataSource->dialogflowSource = new GoogleCloudContactcenterinsightsV1DialogflowSourceInput();
    $request->googleCloudContactcenterinsightsV1ConversationInput->dataSource->dialogflowSource->audioUri = 'reiciendis';
    $request->googleCloudContactcenterinsightsV1ConversationInput->dataSource->gcsSource = new GoogleCloudContactcenterinsightsV1GcsSource();
    $request->googleCloudContactcenterinsightsV1ConversationInput->dataSource->gcsSource->audioUri = 'voluptatibus';
    $request->googleCloudContactcenterinsightsV1ConversationInput->dataSource->gcsSource->transcriptUri = 'vero';
    $request->googleCloudContactcenterinsightsV1ConversationInput->expireTime = 'nihil';
    $request->googleCloudContactcenterinsightsV1ConversationInput->labels = [
        'voluptatibus' => 'ipsa',
        'omnis' => 'voluptate',
        'cum' => 'perferendis',
    ];
    $request->googleCloudContactcenterinsightsV1ConversationInput->languageCode = 'doloremque';
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis = new GoogleCloudContactcenterinsightsV1AnalysisInput();
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->analysisResult = new GoogleCloudContactcenterinsightsV1AnalysisResult();
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->analysisResult->callAnalysisMetadata = new GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata();
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->analysisResult->callAnalysisMetadata->annotations = [
        new GoogleCloudContactcenterinsightsV1CallAnnotation(),
        new GoogleCloudContactcenterinsightsV1CallAnnotation(),
    ];
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->analysisResult->callAnalysisMetadata->entities = [
        'maiores' => new GoogleCloudContactcenterinsightsV1Entity(),
        'dicta' => new GoogleCloudContactcenterinsightsV1Entity(),
    ];
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->analysisResult->callAnalysisMetadata->intents = [
        'dolore' => new GoogleCloudContactcenterinsightsV1Intent(),
        'iusto' => new GoogleCloudContactcenterinsightsV1Intent(),
    ];
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->analysisResult->callAnalysisMetadata->issueModelResult = new GoogleCloudContactcenterinsightsV1IssueModelResult();
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->analysisResult->callAnalysisMetadata->issueModelResult->issueModel = 'dicta';
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->analysisResult->callAnalysisMetadata->issueModelResult->issues = [
        new GoogleCloudContactcenterinsightsV1IssueAssignment(),
        new GoogleCloudContactcenterinsightsV1IssueAssignment(),
        new GoogleCloudContactcenterinsightsV1IssueAssignment(),
    ];
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->analysisResult->callAnalysisMetadata->phraseMatchers = [
        'accusamus' => new GoogleCloudContactcenterinsightsV1PhraseMatchData(),
        'commodi' => new GoogleCloudContactcenterinsightsV1PhraseMatchData(),
    ];
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->analysisResult->callAnalysisMetadata->sentiments = [
        new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment(),
        new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment(),
        new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment(),
        new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment(),
    ];
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->analysisResult->endTime = 'quae';
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->annotatorSelector = new GoogleCloudContactcenterinsightsV1AnnotatorSelector();
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->annotatorSelector->issueModels = [
        'quidem',
    ];
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->annotatorSelector->phraseMatchers = [
        'excepturi',
        'pariatur',
        'modi',
    ];
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->annotatorSelector->runEntityAnnotator = false;
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->annotatorSelector->runIntentAnnotator = false;
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->annotatorSelector->runInterruptionAnnotator = false;
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->annotatorSelector->runIssueModelAnnotator = false;
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->annotatorSelector->runPhraseMatcherAnnotator = false;
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->annotatorSelector->runSentimentAnnotator = false;
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->annotatorSelector->runSilenceAnnotator = false;
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->annotatorSelector->runSummarizationAnnotator = false;
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->annotatorSelector->summarizationConfig = new GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfig();
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->annotatorSelector->summarizationConfig->conversationProfile = 'praesentium';
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->annotatorSelector->summarizationConfig->summarizationModel = GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnum::BASELINE_MODEL;
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestAnalysis->name = 'Carl Waelchi DVM';
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestSummary = new GoogleCloudContactcenterinsightsV1ConversationSummarizationSuggestionData();
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestSummary->answerRecord = 'incidunt';
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestSummary->confidence = 3185.69;
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestSummary->conversationModel = 'consequatur';
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestSummary->metadata = [
        'quibusdam' => 'explicabo',
        'deserunt' => 'distinctio',
        'quibusdam' => 'labore',
    ];
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestSummary->text = 'modi';
    $request->googleCloudContactcenterinsightsV1ConversationInput->latestSummary->textSections = [
        'aliquid' => 'cupiditate',
    ];
    $request->googleCloudContactcenterinsightsV1ConversationInput->medium = GoogleCloudContactcenterinsightsV1ConversationMediumEnum::PHONE_CALL;
    $request->googleCloudContactcenterinsightsV1ConversationInput->name = 'Louise Simonis Sr.';
    $request->googleCloudContactcenterinsightsV1ConversationInput->obfuscatedUserId = 'dolorum';
    $request->googleCloudContactcenterinsightsV1ConversationInput->startTime = 'excepturi';
    $request->googleCloudContactcenterinsightsV1ConversationInput->transcript = new GoogleCloudContactcenterinsightsV1ConversationTranscript();
    $request->googleCloudContactcenterinsightsV1ConversationInput->transcript->transcriptSegments = [
        new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment(),
        new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment(),
    ];
    $request->googleCloudContactcenterinsightsV1ConversationInput->ttl = 'facilis';
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->conversationId = 'eum';
    $request->fields = 'non';
    $request->key = 'eligendi';
    $request->oauthToken = 'sint';
    $request->parent = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsConversationsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsConversationsCreate($request, $requestSecurity);

    if ($response->googleCloudContactcenterinsightsV1Conversation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsConversationsIngest

Imports conversations and processes them according to the user's configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsConversationsIngestRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1IngestConversationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfigMediumEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsConversationsIngestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsConversationsIngestRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudContactcenterinsightsV1IngestConversationsRequest = new GoogleCloudContactcenterinsightsV1IngestConversationsRequest();
    $request->googleCloudContactcenterinsightsV1IngestConversationsRequest->conversationConfig = new GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig();
    $request->googleCloudContactcenterinsightsV1IngestConversationsRequest->conversationConfig->agentId = 'dolor';
    $request->googleCloudContactcenterinsightsV1IngestConversationsRequest->gcsSource = new GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource();
    $request->googleCloudContactcenterinsightsV1IngestConversationsRequest->gcsSource->bucketUri = 'debitis';
    $request->googleCloudContactcenterinsightsV1IngestConversationsRequest->parent = 'a';
    $request->googleCloudContactcenterinsightsV1IngestConversationsRequest->transcriptObjectConfig = new GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig();
    $request->googleCloudContactcenterinsightsV1IngestConversationsRequest->transcriptObjectConfig->medium = GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfigMediumEnum::CHAT;
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illum';
    $request->fields = 'maiores';
    $request->key = 'rerum';
    $request->oauthToken = 'dicta';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsConversationsIngestSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsConversationsIngest($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsConversationsList

Lists conversations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsConversationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsConversationsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsConversationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsConversationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'non';
    $request->fields = 'occaecati';
    $request->filter = 'enim';
    $request->key = 'accusamus';
    $request->oauthToken = 'delectus';
    $request->pageSize = 692532;
    $request->pageToken = 'provident';
    $request->parent = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'deleniti';
    $request->view = ContactcenterinsightsProjectsLocationsConversationsListViewEnum::BASIC;

    $requestSecurity = new ContactcenterinsightsProjectsLocationsConversationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsConversationsList($request, $requestSecurity);

    if ($response->googleCloudContactcenterinsightsV1ListConversationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsConversationsUpload

Create a longrunning conversation upload operation. This method differs from CreateConversation by allowing audio transcription and optional DLP redaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsConversationsUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1UploadConversationRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationCallMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationDataSourceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1DialogflowSourceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1GcsSource;
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationSummarizationSuggestionData;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationMediumEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationTranscript;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationParticipant;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1RedactionConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsConversationsUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsConversationsUploadRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput = new GoogleCloudContactcenterinsightsV1UploadConversationRequestInput();
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation = new GoogleCloudContactcenterinsightsV1ConversationInput();
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->agentId = 'deserunt';
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->callMetadata = new GoogleCloudContactcenterinsightsV1ConversationCallMetadata();
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->callMetadata->agentChannel = 394869;
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->callMetadata->customerChannel = 423855;
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->dataSource = new GoogleCloudContactcenterinsightsV1ConversationDataSourceInput();
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->dataSource->dialogflowSource = new GoogleCloudContactcenterinsightsV1DialogflowSourceInput();
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->dataSource->dialogflowSource->audioUri = 'natus';
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->dataSource->gcsSource = new GoogleCloudContactcenterinsightsV1GcsSource();
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->dataSource->gcsSource->audioUri = 'omnis';
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->dataSource->gcsSource->transcriptUri = 'molestiae';
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->expireTime = 'perferendis';
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->labels = [
        'magnam' => 'distinctio',
        'id' => 'labore',
    ];
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->languageCode = 'labore';
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis = new GoogleCloudContactcenterinsightsV1AnalysisInput();
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->analysisResult = new GoogleCloudContactcenterinsightsV1AnalysisResult();
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->analysisResult->callAnalysisMetadata = new GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata();
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->analysisResult->callAnalysisMetadata->annotations = [
        new GoogleCloudContactcenterinsightsV1CallAnnotation(),
        new GoogleCloudContactcenterinsightsV1CallAnnotation(),
    ];
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->analysisResult->callAnalysisMetadata->entities = [
        'nobis' => new GoogleCloudContactcenterinsightsV1Entity(),
        'eum' => new GoogleCloudContactcenterinsightsV1Entity(),
        'vero' => new GoogleCloudContactcenterinsightsV1Entity(),
    ];
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->analysisResult->callAnalysisMetadata->intents = [
        'architecto' => new GoogleCloudContactcenterinsightsV1Intent(),
    ];
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->analysisResult->callAnalysisMetadata->issueModelResult = new GoogleCloudContactcenterinsightsV1IssueModelResult();
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->analysisResult->callAnalysisMetadata->issueModelResult->issueModel = 'magnam';
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->analysisResult->callAnalysisMetadata->issueModelResult->issues = [
        new GoogleCloudContactcenterinsightsV1IssueAssignment(),
    ];
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->analysisResult->callAnalysisMetadata->phraseMatchers = [
        'ullam' => new GoogleCloudContactcenterinsightsV1PhraseMatchData(),
        'provident' => new GoogleCloudContactcenterinsightsV1PhraseMatchData(),
        'quos' => new GoogleCloudContactcenterinsightsV1PhraseMatchData(),
    ];
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->analysisResult->callAnalysisMetadata->sentiments = [
        new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment(),
        new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment(),
        new GoogleCloudContactcenterinsightsV1ConversationLevelSentiment(),
    ];
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->analysisResult->endTime = 'accusantium';
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->annotatorSelector = new GoogleCloudContactcenterinsightsV1AnnotatorSelector();
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->annotatorSelector->issueModels = [
        'reiciendis',
        'mollitia',
        'ad',
    ];
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->annotatorSelector->phraseMatchers = [
        'dolor',
        'necessitatibus',
    ];
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->annotatorSelector->runEntityAnnotator = false;
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->annotatorSelector->runIntentAnnotator = false;
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->annotatorSelector->runInterruptionAnnotator = false;
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->annotatorSelector->runIssueModelAnnotator = false;
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->annotatorSelector->runPhraseMatcherAnnotator = false;
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->annotatorSelector->runSentimentAnnotator = false;
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->annotatorSelector->runSilenceAnnotator = false;
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->annotatorSelector->runSummarizationAnnotator = false;
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->annotatorSelector->summarizationConfig = new GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfig();
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->annotatorSelector->summarizationConfig->conversationProfile = 'odit';
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->annotatorSelector->summarizationConfig->summarizationModel = GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModelEnum::SUMMARIZATION_MODEL_UNSPECIFIED;
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestAnalysis->name = 'Vera Wyman';
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestSummary = new GoogleCloudContactcenterinsightsV1ConversationSummarizationSuggestionData();
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestSummary->answerRecord = 'maxime';
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestSummary->confidence = 5370.23;
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestSummary->conversationModel = 'facilis';
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestSummary->metadata = [
        'architecto' => 'architecto',
        'repudiandae' => 'ullam',
    ];
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestSummary->text = 'expedita';
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->latestSummary->textSections = [
        'repellat' => 'quibusdam',
        'sed' => 'saepe',
    ];
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->medium = GoogleCloudContactcenterinsightsV1ConversationMediumEnum::CHAT;
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->name = 'Kathryn Lang';
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->obfuscatedUserId = 'sunt';
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->startTime = 'quo';
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->transcript = new GoogleCloudContactcenterinsightsV1ConversationTranscript();
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->transcript->transcriptSegments = [
        new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment(),
        new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment(),
        new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment(),
        new GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment(),
    ];
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversation->ttl = 'pariatur';
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->conversationId = 'maxime';
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->parent = 'ea';
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->redactionConfig = new GoogleCloudContactcenterinsightsV1RedactionConfig();
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->redactionConfig->deidentifyTemplate = 'excepturi';
    $request->googleCloudContactcenterinsightsV1UploadConversationRequestInput->redactionConfig->inspectTemplate = 'odit';
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ab';
    $request->fields = 'maiores';
    $request->key = 'quidem';
    $request->oauthToken = 'ipsam';
    $request->parent = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'autem';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'eaque';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsConversationsUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsConversationsUpload($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsInsightsdataExport

Export insights data to a destination defined in the request body.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsInsightsdataExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsInsightsdataExportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsInsightsdataExportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudContactcenterinsightsV1ExportInsightsDataRequest = new GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest();
    $request->googleCloudContactcenterinsightsV1ExportInsightsDataRequest->bigQueryDestination = new GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination();
    $request->googleCloudContactcenterinsightsV1ExportInsightsDataRequest->bigQueryDestination->dataset = 'nemo';
    $request->googleCloudContactcenterinsightsV1ExportInsightsDataRequest->bigQueryDestination->projectId = 'voluptatibus';
    $request->googleCloudContactcenterinsightsV1ExportInsightsDataRequest->bigQueryDestination->table = 'perferendis';
    $request->googleCloudContactcenterinsightsV1ExportInsightsDataRequest->filter = 'fugiat';
    $request->googleCloudContactcenterinsightsV1ExportInsightsDataRequest->kmsKey = 'amet';
    $request->googleCloudContactcenterinsightsV1ExportInsightsDataRequest->parent = 'aut';
    $request->googleCloudContactcenterinsightsV1ExportInsightsDataRequest->writeDisposition = GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum::WRITE_APPEND;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->fields = 'nobis';
    $request->key = 'dolores';
    $request->oauthToken = 'quis';
    $request->parent = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'dignissimos';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsInsightsdataExportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsInsightsdataExport($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStats

Gets an issue model's statistics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolores';
    $request->fields = 'minus';
    $request->issueModel = 'quam';
    $request->key = 'dolor';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nostrum';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'recusandae';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStats($request, $requestSecurity);

    if ($response->googleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsIssueModelsCreate

Creates an issue model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1IssueModelInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1IssueModelLabelStats;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsIssueModelsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudContactcenterinsightsV1IssueModelInput = new GoogleCloudContactcenterinsightsV1IssueModelInput();
    $request->googleCloudContactcenterinsightsV1IssueModelInput->displayName = 'facilis';
    $request->googleCloudContactcenterinsightsV1IssueModelInput->inputDataConfig = new GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput();
    $request->googleCloudContactcenterinsightsV1IssueModelInput->inputDataConfig->filter = 'perspiciatis';
    $request->googleCloudContactcenterinsightsV1IssueModelInput->inputDataConfig->medium = GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum::MEDIUM_UNSPECIFIED;
    $request->googleCloudContactcenterinsightsV1IssueModelInput->name = 'Bobby Kutch V';
    $request->googleCloudContactcenterinsightsV1IssueModelInput->trainingStats = new GoogleCloudContactcenterinsightsV1IssueModelLabelStats();
    $request->googleCloudContactcenterinsightsV1IssueModelInput->trainingStats->analyzedConversationsCount = 'rerum';
    $request->googleCloudContactcenterinsightsV1IssueModelInput->trainingStats->issueStats = [
        'asperiores' => new GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats(),
    ];
    $request->googleCloudContactcenterinsightsV1IssueModelInput->trainingStats->unclassifiedConversationsCount = 'earum';
    $request->accessToken = 'modi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorum';
    $request->fields = 'deleniti';
    $request->key = 'pariatur';
    $request->oauthToken = 'provident';
    $request->parent = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'quaerat';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsIssueModelsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsIssueModelsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsIssueModelsDeploy

Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1DeployIssueModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsIssueModelsDeploySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudContactcenterinsightsV1DeployIssueModelRequest = new GoogleCloudContactcenterinsightsV1DeployIssueModelRequest();
    $request->googleCloudContactcenterinsightsV1DeployIssueModelRequest->name = 'Florence Ebert';
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->fields = 'cum';
    $request->key = 'voluptate';
    $request->name = 'Johanna Farrell';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsIssueModelsDeploySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsIssueModelsDeploy($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsIssueModelsIssuesList

Lists issues.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsIssueModelsIssuesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsIssueModelsIssuesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsIssueModelsIssuesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'voluptatibus';
    $request->key = 'voluptas';
    $request->oauthToken = 'natus';
    $request->parent = 'eos';
    $request->prettyPrint = false;
    $request->quotaUser = 'atque';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'fugiat';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsIssueModelsIssuesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsIssueModelsIssuesList($request, $requestSecurity);

    if ($response->googleCloudContactcenterinsightsV1ListIssuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsIssueModelsList

Lists issue models.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsIssueModelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsIssueModelsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsIssueModelsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iusto';
    $request->fields = 'voluptate';
    $request->key = 'dolorum';
    $request->oauthToken = 'deleniti';
    $request->parent = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'asperiores';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsIssueModelsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsIssueModelsList($request, $requestSecurity);

    if ($response->googleCloudContactcenterinsightsV1ListIssueModelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsIssueModelsUndeploy

Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsIssueModelsUndeploySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudContactcenterinsightsV1UndeployIssueModelRequest = new GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest();
    $request->googleCloudContactcenterinsightsV1UndeployIssueModelRequest->name = 'Tamara Ondricka';
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'amet';
    $request->fields = 'optio';
    $request->key = 'accusamus';
    $request->name = 'Jenna Hoppe';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'similique';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsIssueModelsUndeploySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsIssueModelsUndeploy($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'at';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'vel';
    $request->key = 'quod';
    $request->name = 'Clarence Parisian';
    $request->oauthToken = 'harum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quisquam';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'numquam';
    $request->filter = 'enim';
    $request->key = 'dolorem';
    $request->name = 'Miss Jimmie Kozey';
    $request->oauthToken = 'sed';
    $request->pageSize = 424685;
    $request->pageToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'quam';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsPhraseMatchersCreate

Creates a phrase matcher.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsPhraseMatchersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1PhraseMatcherInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1PhraseMatchRule;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ExactMatchConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsPhraseMatchersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsPhraseMatchersCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudContactcenterinsightsV1PhraseMatcherInput = new GoogleCloudContactcenterinsightsV1PhraseMatcherInput();
    $request->googleCloudContactcenterinsightsV1PhraseMatcherInput->active = false;
    $request->googleCloudContactcenterinsightsV1PhraseMatcherInput->displayName = 'incidunt';
    $request->googleCloudContactcenterinsightsV1PhraseMatcherInput->name = 'Shelly Schoen';
    $request->googleCloudContactcenterinsightsV1PhraseMatcherInput->phraseMatchRuleGroups = [
        new GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup(),
    ];
    $request->googleCloudContactcenterinsightsV1PhraseMatcherInput->roleMatch = GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum::END_USER;
    $request->googleCloudContactcenterinsightsV1PhraseMatcherInput->type = GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum::ALL_OF;
    $request->googleCloudContactcenterinsightsV1PhraseMatcherInput->versionTag = 'incidunt';
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'distinctio';
    $request->fields = 'facilis';
    $request->key = 'aliquid';
    $request->oauthToken = 'quam';
    $request->parent = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'neque';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsPhraseMatchersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsPhraseMatchersCreate($request, $requestSecurity);

    if ($response->googleCloudContactcenterinsightsV1PhraseMatcher !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsPhraseMatchersList

Lists phrase matchers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsPhraseMatchersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsPhraseMatchersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsPhraseMatchersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magni';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sunt';
    $request->fields = 'ullam';
    $request->filter = 'nam';
    $request->key = 'hic';
    $request->oauthToken = 'voluptatem';
    $request->pageSize = 765326;
    $request->pageToken = 'soluta';
    $request->parent = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'et';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsPhraseMatchersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsPhraseMatchersList($request, $requestSecurity);

    if ($response->googleCloudContactcenterinsightsV1ListPhraseMatchersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsViewsCreate

Creates a view.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsViewsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ViewInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsViewsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsViewsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudContactcenterinsightsV1ViewInput = new GoogleCloudContactcenterinsightsV1ViewInput();
    $request->googleCloudContactcenterinsightsV1ViewInput->displayName = 'nobis';
    $request->googleCloudContactcenterinsightsV1ViewInput->name = 'Dr. Randolph McDermott';
    $request->googleCloudContactcenterinsightsV1ViewInput->value = 'dolore';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'architecto';
    $request->key = 'quae';
    $request->oauthToken = 'aut';
    $request->parent = 'quas';
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'est';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsViewsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsViewsCreate($request, $requestSecurity);

    if ($response->googleCloudContactcenterinsightsV1View !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsViewsDelete

Deletes a view.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsViewsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsViewsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsViewsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ut';
    $request->fields = 'facilis';
    $request->force = false;
    $request->key = 'cupiditate';
    $request->name = 'Amy Langworth';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsViewsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsViewsDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsViewsGet

Gets a view.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsViewsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsViewsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsViewsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsViewsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptate';
    $request->fields = 'consectetur';
    $request->key = 'vero';
    $request->name = 'Julio Weissnat';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'similique';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'vero';
    $request->view = ContactcenterinsightsProjectsLocationsViewsGetViewEnum::FULL;

    $requestSecurity = new ContactcenterinsightsProjectsLocationsViewsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsViewsGet($request, $requestSecurity);

    if ($response->googleCloudContactcenterinsightsV1View !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsViewsList

Lists views.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsViewsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsViewsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsViewsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sequi';
    $request->fields = 'natus';
    $request->key = 'impedit';
    $request->oauthToken = 'aut';
    $request->pageSize = 974259;
    $request->pageToken = 'exercitationem';
    $request->parent = 'nulla';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsViewsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsViewsList($request, $requestSecurity);

    if ($response->googleCloudContactcenterinsightsV1ListViewsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenterinsightsProjectsLocationsViewsPatch

Updates a view.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsViewsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudContactcenterinsightsV1ViewInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenterinsightsProjectsLocationsViewsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenterinsightsProjectsLocationsViewsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudContactcenterinsightsV1ViewInput = new GoogleCloudContactcenterinsightsV1ViewInput();
    $request->googleCloudContactcenterinsightsV1ViewInput->displayName = 'iusto';
    $request->googleCloudContactcenterinsightsV1ViewInput->name = 'Kurt Abernathy';
    $request->googleCloudContactcenterinsightsV1ViewInput->value = 'ipsam';
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'possimus';
    $request->key = 'magnam';
    $request->name = 'Mrs. Vicki Langosh';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'ex';
    $request->updateMask = 'nulla';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new ContactcenterinsightsProjectsLocationsViewsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenterinsightsProjectsLocationsViewsPatch($request, $requestSecurity);

    if ($response->googleCloudContactcenterinsightsV1View !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
