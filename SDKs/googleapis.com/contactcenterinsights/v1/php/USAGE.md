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