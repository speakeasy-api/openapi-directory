# projects

### Available Operations

* [dialogflowProjectsLocationsAgentsChangelogsList](#dialogflowprojectslocationsagentschangelogslist) - Returns the list of Changelogs.
* [dialogflowProjectsLocationsAgentsCreate](#dialogflowprojectslocationsagentscreate) - Creates an agent in the specified location. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* [dialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsList](#dialogflowprojectslocationsagentsenvironmentscontinuoustestresultslist) - Fetches a list of continuous test results for a given environment.
* [dialogflowProjectsLocationsAgentsEnvironmentsCreate](#dialogflowprojectslocationsagentsenvironmentscreate) - Creates an Environment in the specified Agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment
* [dialogflowProjectsLocationsAgentsEnvironmentsDeployFlow](#dialogflowprojectslocationsagentsenvironmentsdeployflow) - Deploys a flow to the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployFlowMetadata - `response`: DeployFlowResponse
* [dialogflowProjectsLocationsAgentsEnvironmentsDeploymentsList](#dialogflowprojectslocationsagentsenvironmentsdeploymentslist) - Returns the list of all deployments in the specified Environment.
* [dialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreate](#dialogflowprojectslocationsagentsenvironmentsexperimentscreate) - Creates an Experiment in the specified Environment.
* [dialogflowProjectsLocationsAgentsEnvironmentsExperimentsList](#dialogflowprojectslocationsagentsenvironmentsexperimentslist) - Returns the list of all experiments in the specified Environment.
* [dialogflowProjectsLocationsAgentsEnvironmentsExperimentsStart](#dialogflowprojectslocationsagentsenvironmentsexperimentsstart) - Starts the specified Experiment. This rpc only changes the state of experiment from PENDING to RUNNING.
* [dialogflowProjectsLocationsAgentsEnvironmentsExperimentsStop](#dialogflowprojectslocationsagentsenvironmentsexperimentsstop) - Stops the specified Experiment. This rpc only changes the state of experiment from RUNNING to DONE.
* [dialogflowProjectsLocationsAgentsEnvironmentsList](#dialogflowprojectslocationsagentsenvironmentslist) - Returns the list of all environments in the specified Agent.
* [dialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistory](#dialogflowprojectslocationsagentsenvironmentslookupenvironmenthistory) - Looks up the history of the specified Environment.
* [dialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTest](#dialogflowprojectslocationsagentsenvironmentsruncontinuoustest) - Kicks off a continuous test under the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunContinuousTestMetadata - `response`: RunContinuousTestResponse
* [dialogflowProjectsLocationsAgentsFlowsCreate](#dialogflowprojectslocationsagentsflowscreate) - Creates a flow in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* [dialogflowProjectsLocationsAgentsFlowsExport](#dialogflowprojectslocationsagentsflowsexport) - Exports the specified flow to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportFlowResponse Note that resources (e.g. intents, entities, webhooks) that the flow references will also be exported.
* [dialogflowProjectsLocationsAgentsFlowsImport](#dialogflowprojectslocationsagentsflowsimport) - Imports the specified flow to the specified agent from a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ImportFlowResponse Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* [dialogflowProjectsLocationsAgentsFlowsList](#dialogflowprojectslocationsagentsflowslist) - Returns the list of all flows in the specified agent.
* [dialogflowProjectsLocationsAgentsFlowsPagesCreate](#dialogflowprojectslocationsagentsflowspagescreate) - Creates a page in the specified flow.
* [dialogflowProjectsLocationsAgentsFlowsPagesList](#dialogflowprojectslocationsagentsflowspageslist) - Returns the list of all pages in the specified flow.
* [dialogflowProjectsLocationsAgentsFlowsTrain](#dialogflowprojectslocationsagentsflowstrain) - Trains the specified flow. Note that only the flow in 'draft' environment is trained. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* [dialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreate](#dialogflowprojectslocationsagentsflowstransitionroutegroupscreate) - Creates an TransitionRouteGroup in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* [dialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsList](#dialogflowprojectslocationsagentsflowstransitionroutegroupslist) - Returns the list of all transition route groups in the specified flow.
* [dialogflowProjectsLocationsAgentsFlowsValidate](#dialogflowprojectslocationsagentsflowsvalidate) - Validates the specified flow and creates or updates validation results. Please call this API after the training is completed to get the complete validation results.
* [dialogflowProjectsLocationsAgentsFlowsVersionsCompareVersions](#dialogflowprojectslocationsagentsflowsversionscompareversions) - Compares the specified base version with target version.
* [dialogflowProjectsLocationsAgentsFlowsVersionsCreate](#dialogflowprojectslocationsagentsflowsversionscreate) - Creates a Version in the specified Flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateVersionOperationMetadata - `response`: Version
* [dialogflowProjectsLocationsAgentsFlowsVersionsList](#dialogflowprojectslocationsagentsflowsversionslist) - Returns the list of all versions in the specified Flow.
* [dialogflowProjectsLocationsAgentsFlowsVersionsLoad](#dialogflowprojectslocationsagentsflowsversionsload) - Loads resources in the specified version to the draft flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
* [dialogflowProjectsLocationsAgentsIntentsCreate](#dialogflowprojectslocationsagentsintentscreate) - Creates an intent in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* [dialogflowProjectsLocationsAgentsIntentsList](#dialogflowprojectslocationsagentsintentslist) - Returns the list of all intents in the specified agent.
* [dialogflowProjectsLocationsAgentsList](#dialogflowprojectslocationsagentslist) - Returns the list of all agents in the specified location.
* [dialogflowProjectsLocationsAgentsRestore](#dialogflowprojectslocationsagentsrestore) - Restores the specified agent from a binary file. Replaces the current agent with a new one. Note that all existing resources in agent (e.g. intents, entity types, flows) will be removed. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* [dialogflowProjectsLocationsAgentsSessionsDetectIntent](#dialogflowprojectslocationsagentssessionsdetectintent) - Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
* [dialogflowProjectsLocationsAgentsSessionsEntityTypesCreate](#dialogflowprojectslocationsagentssessionsentitytypescreate) - Creates a session entity type.
* [dialogflowProjectsLocationsAgentsSessionsEntityTypesList](#dialogflowprojectslocationsagentssessionsentitytypeslist) - Returns the list of all session entity types in the specified session.
* [dialogflowProjectsLocationsAgentsSessionsFulfillIntent](#dialogflowprojectslocationsagentssessionsfulfillintent) - Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.
* [dialogflowProjectsLocationsAgentsSessionsMatchIntent](#dialogflowprojectslocationsagentssessionsmatchintent) - Returns preliminary intent match results, doesn't change the session status.
* [dialogflowProjectsLocationsAgentsTestCasesBatchDelete](#dialogflowprojectslocationsagentstestcasesbatchdelete) - Batch deletes test cases.
* [dialogflowProjectsLocationsAgentsTestCasesBatchRun](#dialogflowprojectslocationsagentstestcasesbatchrun) - Kicks off a batch run of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: BatchRunTestCasesMetadata - `response`: BatchRunTestCasesResponse
* [dialogflowProjectsLocationsAgentsTestCasesCalculateCoverage](#dialogflowprojectslocationsagentstestcasescalculatecoverage) - Calculates the test coverage for an agent.
* [dialogflowProjectsLocationsAgentsTestCasesCreate](#dialogflowprojectslocationsagentstestcasescreate) - Creates a test case for the given agent.
* [dialogflowProjectsLocationsAgentsTestCasesExport](#dialogflowprojectslocationsagentstestcasesexport) - Exports the test cases under the agent to a Cloud Storage bucket or a local file. Filter can be applied to export a subset of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportTestCasesMetadata - `response`: ExportTestCasesResponse
* [dialogflowProjectsLocationsAgentsTestCasesImport](#dialogflowprojectslocationsagentstestcasesimport) - Imports the test cases from a Cloud Storage bucket or a local file. It always creates new test cases and won't overwrite any existing ones. The provided ID in the imported test case is neglected. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportTestCasesMetadata - `response`: ImportTestCasesResponse
* [dialogflowProjectsLocationsAgentsTestCasesList](#dialogflowprojectslocationsagentstestcaseslist) - Fetches a list of test cases for a given agent.
* [dialogflowProjectsLocationsAgentsTestCasesResultsList](#dialogflowprojectslocationsagentstestcasesresultslist) - Fetches a list of results for a given test case.
* [dialogflowProjectsLocationsAgentsTestCasesRun](#dialogflowprojectslocationsagentstestcasesrun) - Kicks off a test case run. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunTestCaseMetadata - `response`: RunTestCaseResponse
* [dialogflowProjectsLocationsAgentsWebhooksCreate](#dialogflowprojectslocationsagentswebhookscreate) - Creates a webhook in the specified agent.
* [dialogflowProjectsLocationsAgentsWebhooksList](#dialogflowprojectslocationsagentswebhookslist) - Returns the list of all webhooks in the specified agent.
* [dialogflowProjectsLocationsList](#dialogflowprojectslocationslist) - Lists information about the supported locations for this service.
* [dialogflowProjectsLocationsSecuritySettingsCreate](#dialogflowprojectslocationssecuritysettingscreate) - Create security settings in the specified location.
* [dialogflowProjectsLocationsSecuritySettingsDelete](#dialogflowprojectslocationssecuritysettingsdelete) - Deletes the specified SecuritySettings.
* [dialogflowProjectsLocationsSecuritySettingsList](#dialogflowprojectslocationssecuritysettingslist) - Returns the list of all security settings in the specified location.
* [dialogflowProjectsLocationsSecuritySettingsPatch](#dialogflowprojectslocationssecuritysettingspatch) - Updates the specified SecuritySettings.
* [dialogflowProjectsOperationsCancel](#dialogflowprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [dialogflowProjectsOperationsGet](#dialogflowprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [dialogflowProjectsOperationsList](#dialogflowprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## dialogflowProjectsLocationsAgentsChangelogsList

Returns the list of Changelogs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsChangelogsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsChangelogsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsChangelogsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsChangelogsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsChangelogsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->filter = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->pageSize = 528895;
    $request->pageToken = 'iusto';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new DialogflowProjectsLocationsAgentsChangelogsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsChangelogsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsChangelogsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1ListChangelogsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsCreate

Creates an agent in the specified location. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1Agent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1AdvancedSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1GcsDestination;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SpeechToTextSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1TextToSpeechSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1VoiceSelectionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowCxV3beta1Agent = new GoogleCloudDialogflowCxV3beta1Agent();
    $request->googleCloudDialogflowCxV3beta1Agent->advancedSettings = new GoogleCloudDialogflowCxV3beta1AdvancedSettings();
    $request->googleCloudDialogflowCxV3beta1Agent->advancedSettings->audioExportGcsDestination = new GoogleCloudDialogflowCxV3beta1GcsDestination();
    $request->googleCloudDialogflowCxV3beta1Agent->advancedSettings->audioExportGcsDestination->uri = 'http://bountiful-pension.com';
    $request->googleCloudDialogflowCxV3beta1Agent->advancedSettings->loggingSettings = new GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings();
    $request->googleCloudDialogflowCxV3beta1Agent->advancedSettings->loggingSettings->enableInteractionLogging = false;
    $request->googleCloudDialogflowCxV3beta1Agent->advancedSettings->loggingSettings->enableStackdriverLogging = false;
    $request->googleCloudDialogflowCxV3beta1Agent->avatarUri = 'ipsam';
    $request->googleCloudDialogflowCxV3beta1Agent->defaultLanguageCode = 'repellendus';
    $request->googleCloudDialogflowCxV3beta1Agent->description = 'sapiente';
    $request->googleCloudDialogflowCxV3beta1Agent->displayName = 'quo';
    $request->googleCloudDialogflowCxV3beta1Agent->enableSpellCorrection = false;
    $request->googleCloudDialogflowCxV3beta1Agent->enableStackdriverLogging = false;
    $request->googleCloudDialogflowCxV3beta1Agent->locked = false;
    $request->googleCloudDialogflowCxV3beta1Agent->name = 'Teri Strosin';
    $request->googleCloudDialogflowCxV3beta1Agent->securitySettings = 'quod';
    $request->googleCloudDialogflowCxV3beta1Agent->speechToTextSettings = new GoogleCloudDialogflowCxV3beta1SpeechToTextSettings();
    $request->googleCloudDialogflowCxV3beta1Agent->speechToTextSettings->enableSpeechAdaptation = false;
    $request->googleCloudDialogflowCxV3beta1Agent->startFlow = 'quod';
    $request->googleCloudDialogflowCxV3beta1Agent->supportedLanguageCodes = [
        'totam',
        'porro',
    ];
    $request->googleCloudDialogflowCxV3beta1Agent->textToSpeechSettings = new GoogleCloudDialogflowCxV3beta1TextToSpeechSettings();
    $request->googleCloudDialogflowCxV3beta1Agent->textToSpeechSettings->synthesizeSpeechConfigs = [
        'dicta' => new GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig(),
        'nam' => new GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig(),
        'officia' => new GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig(),
    ];
    $request->googleCloudDialogflowCxV3beta1Agent->timeZone = 'occaecati';
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'optio';
    $request->key = 'totam';
    $request->oauthToken = 'beatae';
    $request->parent = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new DialogflowProjectsLocationsAgentsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1Agent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsList

Fetches a list of continuous test results for a given environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'excepturi';
    $request->key = 'aspernatur';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 324141;
    $request->pageToken = 'natus';
    $request->parent = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsEnvironmentsCreate

Creates an Environment in the specified Agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1EnvironmentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1Webhook;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsEnvironmentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowCxV3beta1EnvironmentInput = new GoogleCloudDialogflowCxV3beta1EnvironmentInput();
    $request->googleCloudDialogflowCxV3beta1EnvironmentInput->description = 'hic';
    $request->googleCloudDialogflowCxV3beta1EnvironmentInput->displayName = 'saepe';
    $request->googleCloudDialogflowCxV3beta1EnvironmentInput->name = 'Harvey Hessel';
    $request->googleCloudDialogflowCxV3beta1EnvironmentInput->testCasesConfig = new GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig();
    $request->googleCloudDialogflowCxV3beta1EnvironmentInput->testCasesConfig->enableContinuousRun = false;
    $request->googleCloudDialogflowCxV3beta1EnvironmentInput->testCasesConfig->enablePredeploymentRun = false;
    $request->googleCloudDialogflowCxV3beta1EnvironmentInput->testCasesConfig->testCases = [
        'quidem',
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->googleCloudDialogflowCxV3beta1EnvironmentInput->versionConfigs = [
        new GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig(),
        new GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig(),
        new GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig(),
    ];
    $request->googleCloudDialogflowCxV3beta1EnvironmentInput->webhookConfig = new GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig();
    $request->googleCloudDialogflowCxV3beta1EnvironmentInput->webhookConfig->webhookOverrides = [
        new GoogleCloudDialogflowCxV3beta1Webhook(),
        new GoogleCloudDialogflowCxV3beta1Webhook(),
        new GoogleCloudDialogflowCxV3beta1Webhook(),
    ];
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'corporis';
    $request->key = 'explicabo';
    $request->oauthToken = 'nobis';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsEnvironmentsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsEnvironmentsDeployFlow

Deploys a flow to the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployFlowMetadata - `response`: DeployFlowResponse

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1DeployFlowRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowCxV3beta1DeployFlowRequest = new GoogleCloudDialogflowCxV3beta1DeployFlowRequest();
    $request->googleCloudDialogflowCxV3beta1DeployFlowRequest->flowVersion = 'accusantium';
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->environment = 'sapiente';
    $request->fields = 'architecto';
    $request->key = 'mollitia';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'repellat';

    $requestSecurity = new DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsEnvironmentsDeployFlow($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsEnvironmentsDeploymentsList

Returns the list of all deployments in the specified Environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'quam';
    $request->key = 'molestiae';
    $request->oauthToken = 'velit';
    $request->pageSize = 623510;
    $request->pageToken = 'quia';
    $request->parent = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'vitae';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'animi';

    $requestSecurity = new DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsEnvironmentsDeploymentsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1ListDeploymentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreate

Creates an Experiment in the specified Environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1Experiment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ExperimentDefinition;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1VersionVariants;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1VersionVariantsVariant;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ExperimentResult;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ExperimentResultMetric;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1RolloutConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1RolloutState;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ExperimentStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1VariantsHistory;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowCxV3beta1Experiment = new GoogleCloudDialogflowCxV3beta1Experiment();
    $request->googleCloudDialogflowCxV3beta1Experiment->createTime = 'odit';
    $request->googleCloudDialogflowCxV3beta1Experiment->definition = new GoogleCloudDialogflowCxV3beta1ExperimentDefinition();
    $request->googleCloudDialogflowCxV3beta1Experiment->definition->condition = 'quo';
    $request->googleCloudDialogflowCxV3beta1Experiment->definition->versionVariants = new GoogleCloudDialogflowCxV3beta1VersionVariants();
    $request->googleCloudDialogflowCxV3beta1Experiment->definition->versionVariants->variants = [
        new GoogleCloudDialogflowCxV3beta1VersionVariantsVariant(),
    ];
    $request->googleCloudDialogflowCxV3beta1Experiment->description = 'tenetur';
    $request->googleCloudDialogflowCxV3beta1Experiment->displayName = 'ipsam';
    $request->googleCloudDialogflowCxV3beta1Experiment->endTime = 'id';
    $request->googleCloudDialogflowCxV3beta1Experiment->experimentLength = 'possimus';
    $request->googleCloudDialogflowCxV3beta1Experiment->lastUpdateTime = 'aut';
    $request->googleCloudDialogflowCxV3beta1Experiment->name = 'Sabrina Smitham DVM';
    $request->googleCloudDialogflowCxV3beta1Experiment->result = new GoogleCloudDialogflowCxV3beta1ExperimentResult();
    $request->googleCloudDialogflowCxV3beta1Experiment->result->lastUpdateTime = 'voluptatibus';
    $request->googleCloudDialogflowCxV3beta1Experiment->result->versionMetrics = [
        new GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics(),
        new GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics(),
        new GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics(),
        new GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics(),
    ];
    $request->googleCloudDialogflowCxV3beta1Experiment->rolloutConfig = new GoogleCloudDialogflowCxV3beta1RolloutConfig();
    $request->googleCloudDialogflowCxV3beta1Experiment->rolloutConfig->failureCondition = 'nihil';
    $request->googleCloudDialogflowCxV3beta1Experiment->rolloutConfig->rolloutCondition = 'praesentium';
    $request->googleCloudDialogflowCxV3beta1Experiment->rolloutConfig->rolloutSteps = [
        new GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep(),
        new GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep(),
        new GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep(),
        new GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep(),
    ];
    $request->googleCloudDialogflowCxV3beta1Experiment->rolloutFailureReason = 'ipsa';
    $request->googleCloudDialogflowCxV3beta1Experiment->rolloutState = new GoogleCloudDialogflowCxV3beta1RolloutState();
    $request->googleCloudDialogflowCxV3beta1Experiment->rolloutState->startTime = 'omnis';
    $request->googleCloudDialogflowCxV3beta1Experiment->rolloutState->step = 'voluptate';
    $request->googleCloudDialogflowCxV3beta1Experiment->rolloutState->stepIndex = 739264;
    $request->googleCloudDialogflowCxV3beta1Experiment->startTime = 'perferendis';
    $request->googleCloudDialogflowCxV3beta1Experiment->state = GoogleCloudDialogflowCxV3beta1ExperimentStateEnum::STATE_UNSPECIFIED;
    $request->googleCloudDialogflowCxV3beta1Experiment->variantsHistory = [
        new GoogleCloudDialogflowCxV3beta1VariantsHistory(),
        new GoogleCloudDialogflowCxV3beta1VariantsHistory(),
    ];
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'corporis';
    $request->key = 'dolore';
    $request->oauthToken = 'iusto';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'harum';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1Experiment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsEnvironmentsExperimentsList

Returns the list of all experiments in the specified Environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'quidem';
    $request->key = 'molestias';
    $request->oauthToken = 'excepturi';
    $request->pageSize = 865103;
    $request->pageToken = 'modi';
    $request->parent = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'rem';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsEnvironmentsExperimentsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1ListExperimentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsEnvironmentsExperimentsStart

Starts the specified Experiment. This rpc only changes the state of experiment from PENDING to RUNNING.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'veritatis' => 'itaque',
        'incidunt' => 'enim',
        'consequatur' => 'est',
    ];
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'distinctio';
    $request->key = 'quibusdam';
    $request->name = 'Pauline Deckow';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'assumenda';

    $requestSecurity = new DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsEnvironmentsExperimentsStart($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1Experiment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsEnvironmentsExperimentsStop

Stops the specified Experiment. This rpc only changes the state of experiment from RUNNING to DONE.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'fugit' => 'dolorum',
    ];
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'facilis';
    $request->fields = 'tempore';
    $request->key = 'labore';
    $request->name = 'Andre Franey';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsEnvironmentsExperimentsStop($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1Experiment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsEnvironmentsList

Returns the list of all environments in the specified Agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsEnvironmentsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'dolorum';
    $request->key = 'in';
    $request->oauthToken = 'in';
    $request->pageSize = 846409;
    $request->pageToken = 'maiores';
    $request->parent = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new DialogflowProjectsLocationsAgentsEnvironmentsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsEnvironmentsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1ListEnvironmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistory

Looks up the history of the specified Environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'accusamus';
    $request->key = 'non';
    $request->name = 'Jon Tillman';
    $request->oauthToken = 'provident';
    $request->pageSize = 725255;
    $request->pageToken = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'blanditiis';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistory($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTest

Kicks off a continuous test under the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunContinuousTestMetadata - `response`: RunContinuousTestResponse

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'nisi' => 'vel',
        'natus' => 'omnis',
        'molestiae' => 'perferendis',
    ];
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->callback = 'distinctio';
    $request->environment = 'id';
    $request->fields = 'labore';
    $request->key = 'labore';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTest($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsFlowsCreate

Creates a flow in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FlowInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1EventHandlerInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegmentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioTextInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1NluSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1NluSettingsModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1TransitionRouteInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsFlowsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowCxV3beta1FlowInput = new GoogleCloudDialogflowCxV3beta1FlowInput();
    $request->googleCloudDialogflowCxV3beta1FlowInput->description = 'aspernatur';
    $request->googleCloudDialogflowCxV3beta1FlowInput->displayName = 'architecto';
    $request->googleCloudDialogflowCxV3beta1FlowInput->eventHandlers = [
        new GoogleCloudDialogflowCxV3beta1EventHandlerInput(),
        new GoogleCloudDialogflowCxV3beta1EventHandlerInput(),
    ];
    $request->googleCloudDialogflowCxV3beta1FlowInput->name = 'Miriam Hermann';
    $request->googleCloudDialogflowCxV3beta1FlowInput->nluSettings = new GoogleCloudDialogflowCxV3beta1NluSettings();
    $request->googleCloudDialogflowCxV3beta1FlowInput->nluSettings->classificationThreshold = 5743.25;
    $request->googleCloudDialogflowCxV3beta1FlowInput->nluSettings->modelTrainingMode = GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingModeEnum::MODEL_TRAINING_MODE_UNSPECIFIED;
    $request->googleCloudDialogflowCxV3beta1FlowInput->nluSettings->modelType = GoogleCloudDialogflowCxV3beta1NluSettingsModelTypeEnum::MODEL_TYPE_STANDARD;
    $request->googleCloudDialogflowCxV3beta1FlowInput->transitionRouteGroups = [
        'mollitia',
        'ad',
        'eum',
        'dolor',
    ];
    $request->googleCloudDialogflowCxV3beta1FlowInput->transitionRoutes = [
        new GoogleCloudDialogflowCxV3beta1TransitionRouteInput(),
        new GoogleCloudDialogflowCxV3beta1TransitionRouteInput(),
        new GoogleCloudDialogflowCxV3beta1TransitionRouteInput(),
        new GoogleCloudDialogflowCxV3beta1TransitionRouteInput(),
    ];
    $request->accessToken = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quasi';
    $request->fields = 'iure';
    $request->key = 'doloribus';
    $request->languageCode = 'debitis';
    $request->oauthToken = 'eius';
    $request->parent = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'in';

    $requestSecurity = new DialogflowProjectsLocationsAgentsFlowsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsFlowsCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1Flow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsFlowsExport

Exports the specified flow to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportFlowResponse Note that resources (e.g. intents, entities, webhooks) that the flow references will also be exported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ExportFlowRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsExportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsExportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsExportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsFlowsExportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowCxV3beta1ExportFlowRequest = new GoogleCloudDialogflowCxV3beta1ExportFlowRequest();
    $request->googleCloudDialogflowCxV3beta1ExportFlowRequest->flowUri = 'architecto';
    $request->googleCloudDialogflowCxV3beta1ExportFlowRequest->includeReferencedFlows = false;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'expedita';
    $request->fields = 'nihil';
    $request->key = 'repellat';
    $request->name = 'Louis Turner Sr.';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'sunt';

    $requestSecurity = new DialogflowProjectsLocationsAgentsFlowsExportSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsFlowsExportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsFlowsExport($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsFlowsImport

Imports the specified flow to the specified agent from a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ImportFlowResponse Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ImportFlowRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsImportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsImportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsImportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsFlowsImportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowCxV3beta1ImportFlowRequest = new GoogleCloudDialogflowCxV3beta1ImportFlowRequest();
    $request->googleCloudDialogflowCxV3beta1ImportFlowRequest->flowContent = 'illum';
    $request->googleCloudDialogflowCxV3beta1ImportFlowRequest->flowUri = 'pariatur';
    $request->googleCloudDialogflowCxV3beta1ImportFlowRequest->importOption = GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnum::FALLBACK;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odit';
    $request->fields = 'ea';
    $request->key = 'accusantium';
    $request->oauthToken = 'ab';
    $request->parent = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new DialogflowProjectsLocationsAgentsFlowsImportSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsFlowsImportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsFlowsImport($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsFlowsList

Returns the list of all flows in the specified agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsFlowsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'pariatur';
    $request->fields = 'nemo';
    $request->key = 'voluptatibus';
    $request->languageCode = 'perferendis';
    $request->oauthToken = 'fugiat';
    $request->pageSize = 230742;
    $request->pageToken = 'aut';
    $request->parent = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'libero';

    $requestSecurity = new DialogflowProjectsLocationsAgentsFlowsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsFlowsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsFlowsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1ListFlowsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsFlowsPagesCreate

Creates a page in the specified flow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsPagesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1PageInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegmentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioTextInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1EventHandlerInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FormInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FormParameterInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1TransitionRouteInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsPagesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsPagesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsPagesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsFlowsPagesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowCxV3beta1PageInput = new GoogleCloudDialogflowCxV3beta1PageInput();
    $request->googleCloudDialogflowCxV3beta1PageInput->displayName = 'dolores';
    $request->googleCloudDialogflowCxV3beta1PageInput->entryFulfillment = new GoogleCloudDialogflowCxV3beta1FulfillmentInput();
    $request->googleCloudDialogflowCxV3beta1PageInput->entryFulfillment->conditionalCases = [
        new GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput(),
        new GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput(),
    ];
    $request->googleCloudDialogflowCxV3beta1PageInput->entryFulfillment->messages = [
        new GoogleCloudDialogflowCxV3beta1ResponseMessageInput(),
        new GoogleCloudDialogflowCxV3beta1ResponseMessageInput(),
        new GoogleCloudDialogflowCxV3beta1ResponseMessageInput(),
    ];
    $request->googleCloudDialogflowCxV3beta1PageInput->entryFulfillment->returnPartialResponses = false;
    $request->googleCloudDialogflowCxV3beta1PageInput->entryFulfillment->setParameterActions = [
        new GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction(),
        new GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction(),
    ];
    $request->googleCloudDialogflowCxV3beta1PageInput->entryFulfillment->tag = 'eaque';
    $request->googleCloudDialogflowCxV3beta1PageInput->entryFulfillment->webhook = 'quis';
    $request->googleCloudDialogflowCxV3beta1PageInput->eventHandlers = [
        new GoogleCloudDialogflowCxV3beta1EventHandlerInput(),
    ];
    $request->googleCloudDialogflowCxV3beta1PageInput->form = new GoogleCloudDialogflowCxV3beta1FormInput();
    $request->googleCloudDialogflowCxV3beta1PageInput->form->parameters = [
        new GoogleCloudDialogflowCxV3beta1FormParameterInput(),
    ];
    $request->googleCloudDialogflowCxV3beta1PageInput->name = 'Jacqueline Schimmel';
    $request->googleCloudDialogflowCxV3beta1PageInput->transitionRouteGroups = [
        'nostrum',
        'hic',
        'recusandae',
        'omnis',
    ];
    $request->googleCloudDialogflowCxV3beta1PageInput->transitionRoutes = [
        new GoogleCloudDialogflowCxV3beta1TransitionRouteInput(),
        new GoogleCloudDialogflowCxV3beta1TransitionRouteInput(),
        new GoogleCloudDialogflowCxV3beta1TransitionRouteInput(),
    ];
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'porro';
    $request->fields = 'consequuntur';
    $request->key = 'blanditiis';
    $request->languageCode = 'error';
    $request->oauthToken = 'eaque';
    $request->parent = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'rerum';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'asperiores';

    $requestSecurity = new DialogflowProjectsLocationsAgentsFlowsPagesCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsFlowsPagesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsFlowsPagesCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1Page !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsFlowsPagesList

Returns the list of all pages in the specified flow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsPagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsPagesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsPagesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsPagesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsFlowsPagesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorum';
    $request->fields = 'deleniti';
    $request->key = 'pariatur';
    $request->languageCode = 'provident';
    $request->oauthToken = 'nobis';
    $request->pageSize = 730122;
    $request->pageToken = 'delectus';
    $request->parent = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new DialogflowProjectsLocationsAgentsFlowsPagesListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsFlowsPagesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsFlowsPagesList($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1ListPagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsFlowsTrain

Trains the specified flow. Note that only the flow in 'draft' environment is trained. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsTrainRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsTrainSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsFlowsTrainRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'qui' => 'ipsum',
    ];
    $request->accessToken = 'hic';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->fields = 'voluptate';
    $request->key = 'dignissimos';
    $request->name = 'Allen Parisian Jr.';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'quaerat';

    $requestSecurity = new DialogflowProjectsLocationsAgentsFlowsTrainSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsFlowsTrain($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreate

Creates an TransitionRouteGroup in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1TransitionRouteGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1TransitionRouteInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegmentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioTextInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowCxV3beta1TransitionRouteGroupInput = new GoogleCloudDialogflowCxV3beta1TransitionRouteGroupInput();
    $request->googleCloudDialogflowCxV3beta1TransitionRouteGroupInput->displayName = 'quidem';
    $request->googleCloudDialogflowCxV3beta1TransitionRouteGroupInput->name = 'Hector Mosciski';
    $request->googleCloudDialogflowCxV3beta1TransitionRouteGroupInput->transitionRoutes = [
        new GoogleCloudDialogflowCxV3beta1TransitionRouteInput(),
    ];
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'soluta';
    $request->fields = 'dolorum';
    $request->key = 'iusto';
    $request->languageCode = 'voluptate';
    $request->oauthToken = 'dolorum';
    $request->parent = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1TransitionRouteGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsList

Returns the list of all transition route groups in the specified flow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptate';
    $request->fields = 'id';
    $request->key = 'saepe';
    $request->languageCode = 'eius';
    $request->oauthToken = 'aspernatur';
    $request->pageSize = 20651;
    $request->pageToken = 'amet';
    $request->parent = 'optio';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsFlowsValidate

Validates the specified flow and creates or updates validation results. Please call this API after the training is completed to get the complete validation results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsValidateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ValidateFlowRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsValidateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsValidateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsValidateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsFlowsValidateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowCxV3beta1ValidateFlowRequest = new GoogleCloudDialogflowCxV3beta1ValidateFlowRequest();
    $request->googleCloudDialogflowCxV3beta1ValidateFlowRequest->languageCode = 'deserunt';
    $request->accessToken = 'provident';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellendus';
    $request->fields = 'totam';
    $request->key = 'similique';
    $request->name = 'Cristina Hahn';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'officiis';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new DialogflowProjectsLocationsAgentsFlowsValidateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsFlowsValidateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsFlowsValidate($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1FlowValidationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsFlowsVersionsCompareVersions

Compares the specified base version with target version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1CompareVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowCxV3beta1CompareVersionsRequest = new GoogleCloudDialogflowCxV3beta1CompareVersionsRequest();
    $request->googleCloudDialogflowCxV3beta1CompareVersionsRequest->languageCode = 'esse';
    $request->googleCloudDialogflowCxV3beta1CompareVersionsRequest->targetVersion = 'harum';
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->baseVersion = 'quisquam';
    $request->callback = 'tenetur';
    $request->fields = 'amet';
    $request->key = 'tempore';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsFlowsVersionsCompareVersions($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1CompareVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsFlowsVersionsCreate

Creates a Version in the specified Flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateVersionOperationMetadata - `response`: Version

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsVersionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1VersionInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1NluSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1NluSettingsModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsFlowsVersionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowCxV3beta1VersionInput = new GoogleCloudDialogflowCxV3beta1VersionInput();
    $request->googleCloudDialogflowCxV3beta1VersionInput->description = 'totam';
    $request->googleCloudDialogflowCxV3beta1VersionInput->displayName = 'nihil';
    $request->googleCloudDialogflowCxV3beta1VersionInput->name = 'Mamie Durgan';
    $request->googleCloudDialogflowCxV3beta1VersionInput->nluSettings = new GoogleCloudDialogflowCxV3beta1NluSettings();
    $request->googleCloudDialogflowCxV3beta1VersionInput->nluSettings->classificationThreshold = 7304.42;
    $request->googleCloudDialogflowCxV3beta1VersionInput->nluSettings->modelTrainingMode = GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingModeEnum::MODEL_TRAINING_MODE_AUTOMATIC;
    $request->googleCloudDialogflowCxV3beta1VersionInput->nluSettings->modelType = GoogleCloudDialogflowCxV3beta1NluSettingsModelTypeEnum::MODEL_TYPE_STANDARD;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'qui';
    $request->key = 'cupiditate';
    $request->oauthToken = 'maxime';
    $request->parent = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'soluta';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsFlowsVersionsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsFlowsVersionsList

Returns the list of all versions in the specified Flow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsVersionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsVersionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsVersionsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsFlowsVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolores';
    $request->fields = 'distinctio';
    $request->key = 'facilis';
    $request->oauthToken = 'aliquid';
    $request->pageSize = 463150;
    $request->pageToken = 'molestias';
    $request->parent = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new DialogflowProjectsLocationsAgentsFlowsVersionsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsFlowsVersionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsFlowsVersionsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1ListVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsFlowsVersionsLoad

Loads resources in the specified version to the draft flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsVersionsLoadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1LoadVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsFlowsVersionsLoadRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowCxV3beta1LoadVersionRequest = new GoogleCloudDialogflowCxV3beta1LoadVersionRequest();
    $request->googleCloudDialogflowCxV3beta1LoadVersionRequest->allowOverrideAgentResources = false;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ullam';
    $request->fields = 'nam';
    $request->key = 'hic';
    $request->name = 'Erma Rogahn PhD';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsFlowsVersionsLoad($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsIntentsCreate

Creates an intent in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsIntentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1Intent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1IntentParameter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsIntentsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsIntentsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsIntentsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsIntentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowCxV3beta1Intent = new GoogleCloudDialogflowCxV3beta1Intent();
    $request->googleCloudDialogflowCxV3beta1Intent->description = 'cupiditate';
    $request->googleCloudDialogflowCxV3beta1Intent->displayName = 'aperiam';
    $request->googleCloudDialogflowCxV3beta1Intent->isFallback = false;
    $request->googleCloudDialogflowCxV3beta1Intent->labels = [
        'dolorem' => 'dolore',
        'labore' => 'adipisci',
        'dolorum' => 'architecto',
        'quae' => 'aut',
    ];
    $request->googleCloudDialogflowCxV3beta1Intent->name = 'Percy Altenwerth';
    $request->googleCloudDialogflowCxV3beta1Intent->parameters = [
        new GoogleCloudDialogflowCxV3beta1IntentParameter(),
        new GoogleCloudDialogflowCxV3beta1IntentParameter(),
        new GoogleCloudDialogflowCxV3beta1IntentParameter(),
        new GoogleCloudDialogflowCxV3beta1IntentParameter(),
    ];
    $request->googleCloudDialogflowCxV3beta1Intent->priority = 984330;
    $request->googleCloudDialogflowCxV3beta1Intent->trainingPhrases = [
        new GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase(),
        new GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase(),
    ];
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'qui';
    $request->fields = 'quae';
    $request->key = 'laudantium';
    $request->languageCode = 'odio';
    $request->oauthToken = 'occaecati';
    $request->parent = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new DialogflowProjectsLocationsAgentsIntentsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsIntentsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsIntentsCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1Intent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsIntentsList

Returns the list of all intents in the specified agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsIntentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsIntentsListIntentViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsIntentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsIntentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsIntentsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsIntentsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptate';
    $request->fields = 'consectetur';
    $request->intentView = DialogflowProjectsLocationsAgentsIntentsListIntentViewEnum::INTENT_VIEW_FULL;
    $request->key = 'tenetur';
    $request->languageCode = 'dignissimos';
    $request->oauthToken = 'hic';
    $request->pageSize = 715561;
    $request->pageToken = 'quod';
    $request->parent = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'similique';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new DialogflowProjectsLocationsAgentsIntentsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsIntentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsIntentsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1ListIntentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsList

Returns the list of all agents in the specified location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illum';
    $request->fields = 'sequi';
    $request->key = 'natus';
    $request->oauthToken = 'impedit';
    $request->pageSize = 13236;
    $request->pageToken = 'voluptatibus';
    $request->parent = 'exercitationem';
    $request->prettyPrint = false;
    $request->quotaUser = 'nulla';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new DialogflowProjectsLocationsAgentsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1ListAgentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsRestore

Restores the specified agent from a binary file. Replaces the current agent with a new one. Note that all existing resources in agent (e.g. intents, entity types, flows) will be removed. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsRestoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1RestoreAgentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1RestoreAgentRequestRestoreOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsRestoreSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsRestoreSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsRestoreSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsRestoreRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowCxV3beta1RestoreAgentRequest = new GoogleCloudDialogflowCxV3beta1RestoreAgentRequest();
    $request->googleCloudDialogflowCxV3beta1RestoreAgentRequest->agentContent = 'doloribus';
    $request->googleCloudDialogflowCxV3beta1RestoreAgentRequest->agentUri = 'iusto';
    $request->googleCloudDialogflowCxV3beta1RestoreAgentRequest->restoreOption = GoogleCloudDialogflowCxV3beta1RestoreAgentRequestRestoreOptionEnum::FALLBACK;
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'officia';
    $request->fields = 'tempora';
    $request->key = 'ipsam';
    $request->name = 'Judy Keebler';
    $request->oauthToken = 'ratione';
    $request->prettyPrint = false;
    $request->quotaUser = 'ex';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DialogflowProjectsLocationsAgentsRestoreSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsRestoreSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsRestore($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsSessionsDetectIntent

Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsSessionsDetectIntentRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1DetectIntentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1OutputAudioConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1VoiceSelectionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1QueryInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1AudioInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1InputAudioConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1DtmfInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1EventInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1IntentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1TextInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1QueryParameters;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeLatLng;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SessionEntityType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1EntityTypeEntity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsSessionsDetectIntentRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest = new GoogleCloudDialogflowCxV3beta1DetectIntentRequest();
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->outputAudioConfig = new GoogleCloudDialogflowCxV3beta1OutputAudioConfig();
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->outputAudioConfig->audioEncoding = GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum::OUTPUT_AUDIO_ENCODING_MULAW;
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->outputAudioConfig->sampleRateHertz = 97844;
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig = new GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig();
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->effectsProfileId = [
        'nulla',
        'excepturi',
    ];
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->pitch = 9729.2;
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->speakingRate = 3436.05;
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->voice = new GoogleCloudDialogflowCxV3beta1VoiceSelectionParams();
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->voice->name = 'Devin Ullrich';
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->voice->ssmlGender = GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGenderEnum::SSML_VOICE_GENDER_MALE;
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->volumeGainDb = 3331.45;
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput = new GoogleCloudDialogflowCxV3beta1QueryInput();
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput->audio = new GoogleCloudDialogflowCxV3beta1AudioInput();
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput->audio->audio = 'aliquid';
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput->audio->config = new GoogleCloudDialogflowCxV3beta1InputAudioConfig();
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput->audio->config->audioEncoding = GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum::AUDIO_ENCODING_UNSPECIFIED;
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput->audio->config->enableWordInfo = false;
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput->audio->config->model = 'magnam';
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput->audio->config->modelVariant = GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum::USE_BEST_AVAILABLE;
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput->audio->config->phraseHints = [
        'consectetur',
        'recusandae',
        'aspernatur',
        'minima',
    ];
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput->audio->config->sampleRateHertz = 53427;
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput->audio->config->singleUtterance = false;
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput->dtmf = new GoogleCloudDialogflowCxV3beta1DtmfInput();
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput->dtmf->digits = 'a';
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput->dtmf->finishDigit = 'libero';
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput->event = new GoogleCloudDialogflowCxV3beta1EventInput();
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput->event->event = 'aut';
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput->intent = new GoogleCloudDialogflowCxV3beta1IntentInput();
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput->intent->intent = 'aut';
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput->languageCode = 'deleniti';
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput->text = new GoogleCloudDialogflowCxV3beta1TextInput();
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryInput->text->text = 'impedit';
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryParams = new GoogleCloudDialogflowCxV3beta1QueryParameters();
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryParams->analyzeQueryTextSentiment = false;
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryParams->channel = 'aliquam';
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryParams->currentPage = 'fugit';
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryParams->disableWebhook = false;
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryParams->flowVersions = [
        'inventore',
        'non',
        'et',
        'dolorum',
    ];
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryParams->geoLocation = new GoogleTypeLatLng();
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryParams->geoLocation->latitude = 6720.48;
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryParams->geoLocation->longitude = 8104.24;
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryParams->parameters = [
        'eum' => 'autem',
    ];
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryParams->payload = [
        'quas' => 'assumenda',
        'nulla' => 'voluptas',
        'libero' => 'quasi',
        'tempora' => 'numquam',
    ];
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryParams->sessionEntityTypes = [
        new GoogleCloudDialogflowCxV3beta1SessionEntityType(),
    ];
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryParams->timeZone = 'provident';
    $request->googleCloudDialogflowCxV3beta1DetectIntentRequest->queryParams->webhookHeaders = [
        'molestiae' => 'magnam',
    ];
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->fields = 'esse';
    $request->key = 'rem';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'reprehenderit';
    $request->session = 'quidem';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'ut';

    $requestSecurity = new DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsSessionsDetectIntent($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1DetectIntentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsSessionsEntityTypesCreate

Creates a session entity type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SessionEntityType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1EntityTypeEntity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowCxV3beta1SessionEntityType = new GoogleCloudDialogflowCxV3beta1SessionEntityType();
    $request->googleCloudDialogflowCxV3beta1SessionEntityType->entities = [
        new GoogleCloudDialogflowCxV3beta1EntityTypeEntity(),
        new GoogleCloudDialogflowCxV3beta1EntityTypeEntity(),
    ];
    $request->googleCloudDialogflowCxV3beta1SessionEntityType->entityOverrideMode = GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum::ENTITY_OVERRIDE_MODE_SUPPLEMENT;
    $request->googleCloudDialogflowCxV3beta1SessionEntityType->name = 'Mr. Irma Schaefer';
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->fields = 'illum';
    $request->key = 'quo';
    $request->languageCode = 'fuga';
    $request->oauthToken = 'eius';
    $request->parent = 'eos';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsSessionsEntityTypesCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1SessionEntityType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsSessionsEntityTypesList

Returns the list of all session entity types in the specified session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsSessionsEntityTypesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsSessionsEntityTypesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'aspernatur';
    $request->key = 'sequi';
    $request->oauthToken = 'quo';
    $request->pageSize = 459856;
    $request->pageToken = 'recusandae';
    $request->parent = 'aperiam';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsSessionsEntityTypesList($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsSessionsFulfillIntent

Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsSessionsFulfillIntentRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillIntentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1Match;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1Intent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1IntentParameter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1MatchIntentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1QueryInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1AudioInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1InputAudioConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1DtmfInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1EventInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1IntentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1TextInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1QueryParameters;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeLatLng;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SessionEntityType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1EntityTypeEntity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1OutputAudioConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1VoiceSelectionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsSessionsFulfillIntentRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest = new GoogleCloudDialogflowCxV3beta1FulfillIntentRequest();
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->match = new GoogleCloudDialogflowCxV3beta1Match();
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->match->confidence = 4694.98;
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->match->event = 'totam';
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->match->intent = new GoogleCloudDialogflowCxV3beta1Intent();
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->match->intent->description = 'accusamus';
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->match->intent->displayName = 'aliquam';
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->match->intent->isFallback = false;
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->match->intent->labels = [
        'occaecati' => 'commodi',
        'sapiente' => 'dolores',
    ];
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->match->intent->name = 'Fernando Barton';
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->match->intent->parameters = [
        new GoogleCloudDialogflowCxV3beta1IntentParameter(),
        new GoogleCloudDialogflowCxV3beta1IntentParameter(),
        new GoogleCloudDialogflowCxV3beta1IntentParameter(),
    ];
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->match->intent->priority = 510017;
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->match->intent->trainingPhrases = [
        new GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase(),
    ];
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->match->matchType = GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum::PARAMETER_FILLING;
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->match->parameters = [
        'fuga' => 'mollitia',
    ];
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->match->resolvedInput = 'incidunt';
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest = new GoogleCloudDialogflowCxV3beta1MatchIntentRequest();
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->persistParameterChanges = false;
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput = new GoogleCloudDialogflowCxV3beta1QueryInput();
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput->audio = new GoogleCloudDialogflowCxV3beta1AudioInput();
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput->audio->audio = 'atque';
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput->audio->config = new GoogleCloudDialogflowCxV3beta1InputAudioConfig();
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput->audio->config->audioEncoding = GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum::AUDIO_ENCODING_LINEAR16;
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput->audio->config->enableWordInfo = false;
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput->audio->config->model = 'minima';
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput->audio->config->modelVariant = GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum::USE_BEST_AVAILABLE;
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput->audio->config->phraseHints = [
        'sapiente',
    ];
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput->audio->config->sampleRateHertz = 159870;
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput->audio->config->singleUtterance = false;
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput->dtmf = new GoogleCloudDialogflowCxV3beta1DtmfInput();
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput->dtmf->digits = 'ratione';
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput->dtmf->finishDigit = 'explicabo';
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput->event = new GoogleCloudDialogflowCxV3beta1EventInput();
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput->event->event = 'saepe';
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput->intent = new GoogleCloudDialogflowCxV3beta1IntentInput();
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput->intent->intent = 'occaecati';
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput->languageCode = 'atque';
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput->text = new GoogleCloudDialogflowCxV3beta1TextInput();
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryInput->text->text = 'et';
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryParams = new GoogleCloudDialogflowCxV3beta1QueryParameters();
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryParams->analyzeQueryTextSentiment = false;
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryParams->channel = 'esse';
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryParams->currentPage = 'eveniet';
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryParams->disableWebhook = false;
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryParams->flowVersions = [
        'veritatis',
        'esse',
        'quod',
        'nam',
    ];
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryParams->geoLocation = new GoogleTypeLatLng();
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryParams->geoLocation->latitude = 8771.31;
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryParams->geoLocation->longitude = 3990.25;
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryParams->parameters = [
        'saepe' => 'vel',
    ];
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryParams->payload = [
        'molestiae' => 'rerum',
        'occaecati' => 'minima',
        'distinctio' => 'eligendi',
    ];
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryParams->sessionEntityTypes = [
        new GoogleCloudDialogflowCxV3beta1SessionEntityType(),
    ];
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryParams->timeZone = 'culpa';
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->matchIntentRequest->queryParams->webhookHeaders = [
        'adipisci' => 'cumque',
        'consequuntur' => 'consequatur',
        'minus' => 'quaerat',
    ];
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->outputAudioConfig = new GoogleCloudDialogflowCxV3beta1OutputAudioConfig();
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->outputAudioConfig->audioEncoding = GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum::OUTPUT_AUDIO_ENCODING_MULAW;
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->outputAudioConfig->sampleRateHertz = 232865;
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->outputAudioConfig->synthesizeSpeechConfig = new GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig();
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->outputAudioConfig->synthesizeSpeechConfig->effectsProfileId = [
        'blanditiis',
        'provident',
    ];
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->outputAudioConfig->synthesizeSpeechConfig->pitch = 9537.22;
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->outputAudioConfig->synthesizeSpeechConfig->speakingRate = 8577.23;
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->outputAudioConfig->synthesizeSpeechConfig->voice = new GoogleCloudDialogflowCxV3beta1VoiceSelectionParams();
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->outputAudioConfig->synthesizeSpeechConfig->voice->name = 'Cory Boyle';
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->outputAudioConfig->synthesizeSpeechConfig->voice->ssmlGender = GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGenderEnum::SSML_VOICE_GENDER_FEMALE;
    $request->googleCloudDialogflowCxV3beta1FulfillIntentRequest->outputAudioConfig->synthesizeSpeechConfig->volumeGainDb = 8630.23;
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eveniet';
    $request->fields = 'asperiores';
    $request->key = 'facere';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->session = 'quasi';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsSessionsFulfillIntent($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1FulfillIntentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsSessionsMatchIntent

Returns preliminary intent match results, doesn't change the session status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsSessionsMatchIntentRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1MatchIntentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1QueryInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1AudioInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1InputAudioConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1DtmfInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1EventInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1IntentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1TextInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1QueryParameters;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeLatLng;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SessionEntityType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1EntityTypeEntity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsSessionsMatchIntentRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest = new GoogleCloudDialogflowCxV3beta1MatchIntentRequest();
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->persistParameterChanges = false;
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput = new GoogleCloudDialogflowCxV3beta1QueryInput();
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput->audio = new GoogleCloudDialogflowCxV3beta1AudioInput();
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput->audio->audio = 'tenetur';
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput->audio->config = new GoogleCloudDialogflowCxV3beta1InputAudioConfig();
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput->audio->config->audioEncoding = GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum::AUDIO_ENCODING_UNSPECIFIED;
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput->audio->config->enableWordInfo = false;
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput->audio->config->model = 'earum';
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput->audio->config->modelVariant = GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum::USE_BEST_AVAILABLE;
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput->audio->config->phraseHints = [
        'eius',
        'libero',
    ];
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput->audio->config->sampleRateHertz = 849039;
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput->audio->config->singleUtterance = false;
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput->dtmf = new GoogleCloudDialogflowCxV3beta1DtmfInput();
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput->dtmf->digits = 'soluta';
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput->dtmf->finishDigit = 'accusantium';
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput->event = new GoogleCloudDialogflowCxV3beta1EventInput();
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput->event->event = 'aliquam';
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput->intent = new GoogleCloudDialogflowCxV3beta1IntentInput();
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput->intent->intent = 'sapiente';
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput->languageCode = 'dicta';
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput->text = new GoogleCloudDialogflowCxV3beta1TextInput();
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryInput->text->text = 'ullam';
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryParams = new GoogleCloudDialogflowCxV3beta1QueryParameters();
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryParams->analyzeQueryTextSentiment = false;
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryParams->channel = 'reprehenderit';
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryParams->currentPage = 'ullam';
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryParams->disableWebhook = false;
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryParams->flowVersions = [
        'aut',
        'voluptatum',
    ];
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryParams->geoLocation = new GoogleTypeLatLng();
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryParams->geoLocation->latitude = 1852.32;
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryParams->geoLocation->longitude = 8453.58;
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryParams->parameters = [
        'deleniti' => 'itaque',
        'dolorum' => 'architecto',
    ];
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryParams->payload = [
        'tenetur' => 'quasi',
        'at' => 'et',
        'voluptate' => 'ipsa',
    ];
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryParams->sessionEntityTypes = [
        new GoogleCloudDialogflowCxV3beta1SessionEntityType(),
        new GoogleCloudDialogflowCxV3beta1SessionEntityType(),
    ];
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryParams->timeZone = 'veritatis';
    $request->googleCloudDialogflowCxV3beta1MatchIntentRequest->queryParams->webhookHeaders = [
        'adipisci' => 'iste',
    ];
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'rem';
    $request->fields = 'aut';
    $request->key = 'laudantium';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->session = 'ab';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'non';

    $requestSecurity = new DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsSessionsMatchIntent($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1MatchIntentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsTestCasesBatchDelete

Batch deletes test cases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesBatchDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsTestCasesBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest = new GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest();
    $request->googleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest->names = [
        'occaecati',
    ];
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->fields = 'voluptas';
    $request->key = 'aut';
    $request->oauthToken = 'dignissimos';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsTestCasesBatchDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsTestCasesBatchRun

Kicks off a batch run of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: BatchRunTestCasesMetadata - `response`: BatchRunTestCasesResponse

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesBatchRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsTestCasesBatchRunRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowCxV3beta1BatchRunTestCasesRequest = new GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest();
    $request->googleCloudDialogflowCxV3beta1BatchRunTestCasesRequest->environment = 'voluptas';
    $request->googleCloudDialogflowCxV3beta1BatchRunTestCasesRequest->testCases = [
        'aperiam',
        'ea',
        'quaerat',
        'consequuntur',
    ];
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'maxime';
    $request->fields = 'dignissimos';
    $request->key = 'officia';
    $request->oauthToken = 'asperiores';
    $request->parent = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsTestCasesBatchRun($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsTestCasesCalculateCoverage

Calculates the test coverage for an agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'labore';
    $request->agent = 'ab';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fuga';
    $request->fields = 'id';
    $request->key = 'suscipit';
    $request->oauthToken = 'velit';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->type = DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum::PAGE_TRANSITION;
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsTestCasesCalculateCoverage($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1CalculateCoverageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsTestCasesCreate

Creates a test case for the given agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1TestCaseInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1TestCaseResultInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ConversationTurnInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1QueryInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1AudioInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1InputAudioConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1DtmfInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1EventInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1IntentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1TextInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1PageInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegmentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioTextInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1EventHandlerInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FormInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FormParameterInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1TransitionRouteInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleRpcStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1Intent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1IntentParameter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1TestConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsTestCasesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowCxV3beta1TestCaseInput = new GoogleCloudDialogflowCxV3beta1TestCaseInput();
    $request->googleCloudDialogflowCxV3beta1TestCaseInput->displayName = 'vel';
    $request->googleCloudDialogflowCxV3beta1TestCaseInput->lastTestResult = new GoogleCloudDialogflowCxV3beta1TestCaseResultInput();
    $request->googleCloudDialogflowCxV3beta1TestCaseInput->lastTestResult->conversationTurns = [
        new GoogleCloudDialogflowCxV3beta1ConversationTurnInput(),
        new GoogleCloudDialogflowCxV3beta1ConversationTurnInput(),
    ];
    $request->googleCloudDialogflowCxV3beta1TestCaseInput->lastTestResult->environment = 'quos';
    $request->googleCloudDialogflowCxV3beta1TestCaseInput->lastTestResult->name = 'Clara Senger';
    $request->googleCloudDialogflowCxV3beta1TestCaseInput->lastTestResult->testResult = GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum::PASSED;
    $request->googleCloudDialogflowCxV3beta1TestCaseInput->lastTestResult->testTime = 'in';
    $request->googleCloudDialogflowCxV3beta1TestCaseInput->name = 'Lela Shields';
    $request->googleCloudDialogflowCxV3beta1TestCaseInput->notes = 'aliquid';
    $request->googleCloudDialogflowCxV3beta1TestCaseInput->tags = [
        'cum',
    ];
    $request->googleCloudDialogflowCxV3beta1TestCaseInput->testCaseConversationTurns = [
        new GoogleCloudDialogflowCxV3beta1ConversationTurnInput(),
    ];
    $request->googleCloudDialogflowCxV3beta1TestCaseInput->testConfig = new GoogleCloudDialogflowCxV3beta1TestConfig();
    $request->googleCloudDialogflowCxV3beta1TestCaseInput->testConfig->flow = 'in';
    $request->googleCloudDialogflowCxV3beta1TestCaseInput->testConfig->page = 'exercitationem';
    $request->googleCloudDialogflowCxV3beta1TestCaseInput->testConfig->trackingParameters = [
        'facere',
        'numquam',
        'doloribus',
        'suscipit',
    ];
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'necessitatibus';
    $request->key = 'dolore';
    $request->oauthToken = 'sunt';
    $request->parent = 'asperiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new DialogflowProjectsLocationsAgentsTestCasesCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsTestCasesCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1TestCase !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsTestCasesExport

Exports the test cases under the agent to a Cloud Storage bucket or a local file. Filter can be applied to export a subset of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportTestCasesMetadata - `response`: ExportTestCasesResponse

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesExportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesExportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesExportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsTestCasesExportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowCxV3beta1ExportTestCasesRequest = new GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest();
    $request->googleCloudDialogflowCxV3beta1ExportTestCasesRequest->dataFormat = GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnum::BLOB;
    $request->googleCloudDialogflowCxV3beta1ExportTestCasesRequest->filter = 'a';
    $request->googleCloudDialogflowCxV3beta1ExportTestCasesRequest->gcsUri = 'debitis';
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'harum';
    $request->fields = 'laboriosam';
    $request->key = 'ipsa';
    $request->oauthToken = 'voluptates';
    $request->parent = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'vitae';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'similique';

    $requestSecurity = new DialogflowProjectsLocationsAgentsTestCasesExportSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsTestCasesExportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsTestCasesExport($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsTestCasesImport

Imports the test cases from a Cloud Storage bucket or a local file. It always creates new test cases and won't overwrite any existing ones. The provided ID in the imported test case is neglected. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportTestCasesMetadata - `response`: ImportTestCasesResponse

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesImportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsTestCasesImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowCxV3beta1ImportTestCasesRequest = new GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest();
    $request->googleCloudDialogflowCxV3beta1ImportTestCasesRequest->content = 'aspernatur';
    $request->googleCloudDialogflowCxV3beta1ImportTestCasesRequest->gcsUri = 'voluptas';
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->fields = 'nobis';
    $request->key = 'dolorum';
    $request->oauthToken = 'adipisci';
    $request->parent = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'in';

    $requestSecurity = new DialogflowProjectsLocationsAgentsTestCasesImportSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsTestCasesImport($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsTestCasesList

Fetches a list of test cases for a given agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsTestCasesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'temporibus';
    $request->fields = 'ullam';
    $request->key = 'adipisci';
    $request->oauthToken = 'cum';
    $request->pageSize = 502389;
    $request->pageToken = 'quas';
    $request->parent = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'nesciunt';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'corrupti';
    $request->view = DialogflowProjectsLocationsAgentsTestCasesListViewEnum::FULL;

    $requestSecurity = new DialogflowProjectsLocationsAgentsTestCasesListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsTestCasesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsTestCasesList($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1ListTestCasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsTestCasesResultsList

Fetches a list of results for a given test case.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesResultsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesResultsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesResultsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesResultsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsTestCasesResultsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->fields = 'sit';
    $request->filter = 'rerum';
    $request->key = 'sed';
    $request->oauthToken = 'reiciendis';
    $request->pageSize = 131852;
    $request->pageToken = 'asperiores';
    $request->parent = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new DialogflowProjectsLocationsAgentsTestCasesResultsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsTestCasesResultsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsTestCasesResultsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1ListTestCaseResultsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsTestCasesRun

Kicks off a test case run. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunTestCaseMetadata - `response`: RunTestCaseResponse

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1RunTestCaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesRunSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesRunSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsTestCasesRunSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsTestCasesRunRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowCxV3beta1RunTestCaseRequest = new GoogleCloudDialogflowCxV3beta1RunTestCaseRequest();
    $request->googleCloudDialogflowCxV3beta1RunTestCaseRequest->environment = 'dolore';
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'in';
    $request->fields = 'commodi';
    $request->key = 'quidem';
    $request->name = 'Mrs. Yolanda Mitchell';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'illo';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new DialogflowProjectsLocationsAgentsTestCasesRunSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsTestCasesRunSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsTestCasesRun($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsWebhooksCreate

Creates a webhook in the specified agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsWebhooksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1Webhook;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsWebhooksCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsWebhooksCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowCxV3beta1Webhook = new GoogleCloudDialogflowCxV3beta1Webhook();
    $request->googleCloudDialogflowCxV3beta1Webhook->disabled = false;
    $request->googleCloudDialogflowCxV3beta1Webhook->displayName = 'maiores';
    $request->googleCloudDialogflowCxV3beta1Webhook->genericWebService = new GoogleCloudDialogflowCxV3beta1WebhookGenericWebService();
    $request->googleCloudDialogflowCxV3beta1Webhook->genericWebService->allowedCaCerts = [
        'sed',
        'provident',
    ];
    $request->googleCloudDialogflowCxV3beta1Webhook->genericWebService->password = 'eius';
    $request->googleCloudDialogflowCxV3beta1Webhook->genericWebService->requestHeaders = [
        'ipsum' => 'ea',
        'occaecati' => 'quos',
        'voluptatibus' => 'tempora',
        'tempora' => 'voluptate',
    ];
    $request->googleCloudDialogflowCxV3beta1Webhook->genericWebService->uri = 'https://ideal-amendment.biz';
    $request->googleCloudDialogflowCxV3beta1Webhook->genericWebService->username = 'Shyann.Lakin27';
    $request->googleCloudDialogflowCxV3beta1Webhook->name = 'Miss Alyssa Leffler';
    $request->googleCloudDialogflowCxV3beta1Webhook->serviceDirectory = new GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig();
    $request->googleCloudDialogflowCxV3beta1Webhook->serviceDirectory->genericWebService = new GoogleCloudDialogflowCxV3beta1WebhookGenericWebService();
    $request->googleCloudDialogflowCxV3beta1Webhook->serviceDirectory->genericWebService->allowedCaCerts = [
        'minima',
        'recusandae',
    ];
    $request->googleCloudDialogflowCxV3beta1Webhook->serviceDirectory->genericWebService->password = 'reiciendis';
    $request->googleCloudDialogflowCxV3beta1Webhook->serviceDirectory->genericWebService->requestHeaders = [
        'magni' => 'aperiam',
        'saepe' => 'numquam',
        'veniam' => 'in',
        'officiis' => 'beatae',
    ];
    $request->googleCloudDialogflowCxV3beta1Webhook->serviceDirectory->genericWebService->uri = 'https://gray-libido.net';
    $request->googleCloudDialogflowCxV3beta1Webhook->serviceDirectory->genericWebService->username = 'Gia_Parisian';
    $request->googleCloudDialogflowCxV3beta1Webhook->serviceDirectory->service = 'hic';
    $request->googleCloudDialogflowCxV3beta1Webhook->timeout = 'expedita';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'nostrum';
    $request->key = 'officia';
    $request->oauthToken = 'dolorum';
    $request->parent = 'corrupti';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'atque';

    $requestSecurity = new DialogflowProjectsLocationsAgentsWebhooksCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsWebhooksCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1Webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentsWebhooksList

Returns the list of all webhooks in the specified agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsWebhooksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsWebhooksListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsWebhooksListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentsWebhooksListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentsWebhooksListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatem';
    $request->fields = 'culpa';
    $request->key = 'expedita';
    $request->oauthToken = 'magnam';
    $request->pageSize = 7884;
    $request->pageToken = 'esse';
    $request->parent = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'sit';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'quas';

    $requestSecurity = new DialogflowProjectsLocationsAgentsWebhooksListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentsWebhooksListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentsWebhooksList($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1ListWebhooksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'blanditiis';
    $request->fields = 'ex';
    $request->filter = 'sed';
    $request->key = 'sit';
    $request->name = 'Bernice Ullrich II';
    $request->oauthToken = 'reiciendis';
    $request->pageSize = 209750;
    $request->pageToken = 'harum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new DialogflowProjectsLocationsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsList($request, $requestSecurity);

    if ($response->googleCloudLocationListLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsSecuritySettingsCreate

Create security settings in the specified location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSecuritySettingsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SecuritySettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SecuritySettingsPurgeDataTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSecuritySettingsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsSecuritySettingsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowCxV3beta1SecuritySettings = new GoogleCloudDialogflowCxV3beta1SecuritySettings();
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->audioExportSettings = new GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings();
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->audioExportSettings->audioExportPattern = 'quidem';
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->audioExportSettings->audioFormat = GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum::MP3;
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->audioExportSettings->enableAudioRedaction = false;
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->audioExportSettings->gcsBucket = 'laborum';
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->deidentifyTemplate = 'nam';
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->displayName = 'tenetur';
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->insightsExportSettings = new GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings();
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->insightsExportSettings->enableInsightsExport = false;
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->inspectTemplate = 'laboriosam';
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->name = 'Grace O'Connell';
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->purgeDataTypes = [
        GoogleCloudDialogflowCxV3beta1SecuritySettingsPurgeDataTypesEnum::DIALOGFLOW_HISTORY,
        GoogleCloudDialogflowCxV3beta1SecuritySettingsPurgeDataTypesEnum::DIALOGFLOW_HISTORY,
        GoogleCloudDialogflowCxV3beta1SecuritySettingsPurgeDataTypesEnum::DIALOGFLOW_HISTORY,
        GoogleCloudDialogflowCxV3beta1SecuritySettingsPurgeDataTypesEnum::DIALOGFLOW_HISTORY,
    ];
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->redactionScope = GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionScopeEnum::REDACTION_SCOPE_UNSPECIFIED;
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->redactionStrategy = GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionStrategyEnum::REDACT_WITH_SERVICE;
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->retentionWindowDays = 696483;
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fuga';
    $request->fields = 'praesentium';
    $request->key = 'mollitia';
    $request->oauthToken = 'veniam';
    $request->parent = 'voluptatem';
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new DialogflowProjectsLocationsSecuritySettingsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsSecuritySettingsCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1SecuritySettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsSecuritySettingsDelete

Deletes the specified SecuritySettings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSecuritySettingsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSecuritySettingsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsSecuritySettingsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'suscipit';
    $request->force = false;
    $request->key = 'quidem';
    $request->name = 'Henry Koepp';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'atque';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'officiis';

    $requestSecurity = new DialogflowProjectsLocationsSecuritySettingsDeleteSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsSecuritySettingsDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsSecuritySettingsList

Returns the list of all security settings in the specified location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSecuritySettingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSecuritySettingsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSecuritySettingsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSecuritySettingsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsSecuritySettingsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->fields = 'aspernatur';
    $request->key = 'ex';
    $request->oauthToken = 'maiores';
    $request->pageSize = 544647;
    $request->pageToken = 'at';
    $request->parent = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'blanditiis';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new DialogflowProjectsLocationsSecuritySettingsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsSecuritySettingsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsSecuritySettingsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1ListSecuritySettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsSecuritySettingsPatch

Updates the specified SecuritySettings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSecuritySettingsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SecuritySettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SecuritySettingsPurgeDataTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSecuritySettingsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSecuritySettingsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSecuritySettingsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsSecuritySettingsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowCxV3beta1SecuritySettings = new GoogleCloudDialogflowCxV3beta1SecuritySettings();
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->audioExportSettings = new GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings();
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->audioExportSettings->audioExportPattern = 'atque';
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->audioExportSettings->audioFormat = GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum::AUDIO_FORMAT_UNSPECIFIED;
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->audioExportSettings->enableAudioRedaction = false;
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->audioExportSettings->gcsBucket = 'recusandae';
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->deidentifyTemplate = 'dolorum';
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->displayName = 'repellendus';
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->insightsExportSettings = new GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings();
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->insightsExportSettings->enableInsightsExport = false;
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->inspectTemplate = 'labore';
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->name = 'Mr. Anthony Waelchi Sr.';
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->purgeDataTypes = [
        GoogleCloudDialogflowCxV3beta1SecuritySettingsPurgeDataTypesEnum::PURGE_DATA_TYPE_UNSPECIFIED,
        GoogleCloudDialogflowCxV3beta1SecuritySettingsPurgeDataTypesEnum::PURGE_DATA_TYPE_UNSPECIFIED,
    ];
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->redactionScope = GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionScopeEnum::REDACT_DISK_STORAGE;
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->redactionStrategy = GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionStrategyEnum::REDACT_WITH_SERVICE;
    $request->googleCloudDialogflowCxV3beta1SecuritySettings->retentionWindowDays = 300029;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'officiis';
    $request->key = 'perspiciatis';
    $request->name = 'Sylvia Upton';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->updateMask = 'quis';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'error';

    $requestSecurity = new DialogflowProjectsLocationsSecuritySettingsPatchSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsSecuritySettingsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsSecuritySettingsPatch($request, $requestSecurity);

    if ($response->googleCloudDialogflowCxV3beta1SecuritySettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsCancelSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsCancelSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsCancelSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eveniet';
    $request->fields = 'non';
    $request->key = 'vero';
    $request->name = 'Vera Beier IV';
    $request->oauthToken = 'eveniet';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new DialogflowProjectsOperationsCancelSecurity();
    $requestSecurity->option1 = new DialogflowProjectsOperationsCancelSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsOperationsCancel($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'distinctio';
    $request->fields = 'voluptatum';
    $request->key = 'rem';
    $request->languageCode = 'aliquam';
    $request->name = 'Winifred Abernathy';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new DialogflowProjectsOperationsGetSecurity();
    $requestSecurity->option1 = new DialogflowProjectsOperationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsOperationsGet($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'id';
    $request->fields = 'minima';
    $request->filter = 'dolore';
    $request->key = 'dolorum';
    $request->name = 'Amy Walsh';
    $request->oauthToken = 'molestiae';
    $request->pageSize = 403218;
    $request->pageToken = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new DialogflowProjectsOperationsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsOperationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
