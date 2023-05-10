# projects

### Available Operations

* [toolresultsProjectsGetSettings](#toolresultsprojectsgetsettings) - Gets the Tool Results settings for a project. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from project
* [toolresultsProjectsHistoriesCreate](#toolresultsprojectshistoriescreate) - Creates a History. The returned History will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist
* [toolresultsProjectsHistoriesExecutionsClustersGet](#toolresultsprojectshistoriesexecutionsclustersget) - Retrieves a single screenshot cluster by its ID
* [toolresultsProjectsHistoriesExecutionsClustersList](#toolresultsprojectshistoriesexecutionsclusterslist) - Lists Screenshot Clusters Returns the list of screenshot clusters corresponding to an execution. Screenshot clusters are created after the execution is finished. Clusters are created from a set of screenshots. Between any two screenshots, a matching score is calculated based off their metadata that determines how similar they are. Screenshots are placed in the cluster that has screens which have the highest matching scores.
* [toolresultsProjectsHistoriesExecutionsCreate](#toolresultsprojectshistoriesexecutionscreate) - Creates an Execution. The returned Execution will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
* [toolresultsProjectsHistoriesExecutionsEnvironmentsGet](#toolresultsprojectshistoriesexecutionsenvironmentsget) - Gets an Environment. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Environment does not exist
* [toolresultsProjectsHistoriesExecutionsEnvironmentsList](#toolresultsprojectshistoriesexecutionsenvironmentslist) - Lists Environments for a given Execution. The Environments are sorted by display name. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Execution does not exist
* [toolresultsProjectsHistoriesExecutionsGet](#toolresultsprojectshistoriesexecutionsget) - Gets an Execution. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist
* [toolresultsProjectsHistoriesExecutionsList](#toolresultsprojectshistoriesexecutionslist) - Lists Executions for a given History. The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
* [toolresultsProjectsHistoriesExecutionsPatch](#toolresultsprojectshistoriesexecutionspatch) - Updates an existing Execution with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist
* [toolresultsProjectsHistoriesExecutionsStepsAccessibilityClusters](#toolresultsprojectshistoriesexecutionsstepsaccessibilityclusters) - Lists accessibility clusters for a given Step May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if the locale format is incorrect - NOT_FOUND - if the containing Step does not exist
* [toolresultsProjectsHistoriesExecutionsStepsCreate](#toolresultsprojectshistoriesexecutionsstepscreate) - Creates a Step. The returned Step will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
* [toolresultsProjectsHistoriesExecutionsStepsGet](#toolresultsprojectshistoriesexecutionsstepsget) - Gets a Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist
* [toolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummary](#toolresultsprojectshistoriesexecutionsstepsgetperfmetricssummary) - Retrieves a PerfMetricsSummary. May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist
* [toolresultsProjectsHistoriesExecutionsStepsList](#toolresultsprojectshistoriesexecutionsstepslist) - Lists Steps for a given Execution. The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist
* [toolresultsProjectsHistoriesExecutionsStepsPatch](#toolresultsprojectshistoriesexecutionsstepspatch) - Updates an existing Step with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
* [toolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreate](#toolresultsprojectshistoriesexecutionsstepsperfmetricssummarycreate) - Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created. May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist
* [toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreate](#toolresultsprojectshistoriesexecutionsstepsperfsampleseriescreate) - Creates a PerfSampleSeries. May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist
* [toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGet](#toolresultsprojectshistoriesexecutionsstepsperfsampleseriesget) - Gets a PerfSampleSeries. May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist
* [toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesList](#toolresultsprojectshistoriesexecutionsstepsperfsampleserieslist) - Lists PerfSampleSeries for a given Step. The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids. May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist
* [toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreate](#toolresultsprojectshistoriesexecutionsstepsperfsampleseriessamplesbatchcreate) - Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database). May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist
* [toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesList](#toolresultsprojectshistoriesexecutionsstepsperfsampleseriessampleslist) - Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist
* [toolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFiles](#toolresultsprojectshistoriesexecutionsstepspublishxunitxmlfiles) - Publish xml files to an existing Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g. try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist
* [toolresultsProjectsHistoriesExecutionsStepsTestCasesGet](#toolresultsprojectshistoriesexecutionsstepstestcasesget) - Gets details of a Test Case for a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Test Case does not exist
* [toolresultsProjectsHistoriesExecutionsStepsTestCasesList](#toolresultsprojectshistoriesexecutionsstepstestcaseslist) - Lists Test Cases attached to a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Step does not exist
* [toolresultsProjectsHistoriesExecutionsStepsThumbnailsList](#toolresultsprojectshistoriesexecutionsstepsthumbnailslist) - Lists thumbnails of images attached to a step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist
* [toolresultsProjectsHistoriesGet](#toolresultsprojectshistoriesget) - Gets a History. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
* [toolresultsProjectsHistoriesList](#toolresultsprojectshistorieslist) - Lists Histories for a given Project. The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
* [toolresultsProjectsInitializeSettings](#toolresultsprojectsinitializesettings) - Creates resources for settings which have not yet been set. Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days. The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details. If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created. May return any canonical error codes, including the following: - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage

## toolresultsProjectsGetSettings

Gets the Tool Results settings for a project. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsGetSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsGetSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsGetSettingsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'ipsa';
    $request->key = 'delectus';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->projectId = 'suscipit';
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new ToolresultsProjectsGetSettingsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsGetSettings($request, $requestSecurity);

    if ($response->projectSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesCreate

Creates a History. The returned History will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\History;
use \OpenAPI\OpenAPI\Models\Shared\HistoryTestPlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->history = new History();
    $request->history->displayName = 'iusto';
    $request->history->historyId = 'excepturi';
    $request->history->name = 'Mrs. Sophie Smith MD';
    $request->history->testPlatform = HistoryTestPlatformEnum::UNKNOWN_PLATFORM;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'quo';
    $request->key = 'odit';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->projectId = 'at';
    $request->quotaUser = 'maiores';
    $request->requestId = 'molestiae';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new ToolresultsProjectsHistoriesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesCreate($request, $requestSecurity);

    if ($response->history !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsClustersGet

Retrieves a single screenshot cluster by its ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsClustersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsClustersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsClustersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->clusterId = 'dicta';
    $request->executionId = 'nam';
    $request->fields = 'officia';
    $request->historyId = 'occaecati';
    $request->key = 'fugit';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->projectId = 'hic';
    $request->quotaUser = 'optio';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'beatae';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsClustersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsClustersGet($request, $requestSecurity);

    if ($response->screenshotCluster !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsClustersList

Lists Screenshot Clusters Returns the list of screenshot clusters corresponding to an execution. Screenshot clusters are created after the execution is finished. Clusters are created from a set of screenshots. Between any two screenshots, a matching score is calculated based off their metadata that determines how similar they are. Screenshots are placed in the cluster that has screens which have the highest matching scores.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsClustersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsClustersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsClustersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->executionId = 'impedit';
    $request->fields = 'cum';
    $request->historyId = 'esse';
    $request->key = 'ipsum';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->projectId = 'aspernatur';
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsClustersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsClustersList($request, $requestSecurity);

    if ($response->listScreenshotClustersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsCreate

Creates an Execution. The returned Execution will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Execution;
use \OpenAPI\OpenAPI\Models\Shared\Timestamp;
use \OpenAPI\OpenAPI\Models\Shared\Outcome;
use \OpenAPI\OpenAPI\Models\Shared\FailureDetail;
use \OpenAPI\OpenAPI\Models\Shared\InconclusiveDetail;
use \OpenAPI\OpenAPI\Models\Shared\SkippedDetail;
use \OpenAPI\OpenAPI\Models\Shared\SuccessDetail;
use \OpenAPI\OpenAPI\Models\Shared\OutcomeSummaryEnum;
use \OpenAPI\OpenAPI\Models\Shared\Specification;
use \OpenAPI\OpenAPI\Models\Shared\AndroidTest;
use \OpenAPI\OpenAPI\Models\Shared\AndroidAppInfo;
use \OpenAPI\OpenAPI\Models\Shared\AndroidInstrumentationTest;
use \OpenAPI\OpenAPI\Models\Shared\AndroidRoboTest;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\IosTest;
use \OpenAPI\OpenAPI\Models\Shared\IosAppInfo;
use \OpenAPI\OpenAPI\Models\Shared\IosTestLoop;
use \OpenAPI\OpenAPI\Models\Shared\IosXcTest;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->execution = new Execution();
    $request->execution->completionTime = new Timestamp();
    $request->execution->completionTime->nanos = 612096;
    $request->execution->completionTime->seconds = 'dolor';
    $request->execution->creationTime = new Timestamp();
    $request->execution->creationTime->nanos = 616934;
    $request->execution->creationTime->seconds = 'laboriosam';
    $request->execution->dimensionDefinitions = [
        [
            'fuga' => 'in',
            'corporis' => 'iste',
            'iure' => 'saepe',
            'quidem' => 'architecto',
        ],
        [
            'reiciendis' => 'est',
        ],
        [
            'laborum' => 'dolores',
            'dolorem' => 'corporis',
            'explicabo' => 'nobis',
        ],
        [
            'omnis' => 'nemo',
            'minima' => 'excepturi',
        ],
    ];
    $request->execution->executionId = 'accusantium';
    $request->execution->outcome = new Outcome();
    $request->execution->outcome->failureDetail = new FailureDetail();
    $request->execution->outcome->failureDetail->crashed = false;
    $request->execution->outcome->failureDetail->deviceOutOfMemory = false;
    $request->execution->outcome->failureDetail->failedRoboscript = false;
    $request->execution->outcome->failureDetail->notInstalled = false;
    $request->execution->outcome->failureDetail->otherNativeCrash = false;
    $request->execution->outcome->failureDetail->timedOut = false;
    $request->execution->outcome->failureDetail->unableToCrawl = false;
    $request->execution->outcome->inconclusiveDetail = new InconclusiveDetail();
    $request->execution->outcome->inconclusiveDetail->abortedByUser = false;
    $request->execution->outcome->inconclusiveDetail->hasErrorLogs = false;
    $request->execution->outcome->inconclusiveDetail->infrastructureFailure = false;
    $request->execution->outcome->skippedDetail = new SkippedDetail();
    $request->execution->outcome->skippedDetail->incompatibleAppVersion = false;
    $request->execution->outcome->skippedDetail->incompatibleArchitecture = false;
    $request->execution->outcome->skippedDetail->incompatibleDevice = false;
    $request->execution->outcome->successDetail = new SuccessDetail();
    $request->execution->outcome->successDetail->otherNativeCrash = false;
    $request->execution->outcome->summary = OutcomeSummaryEnum::FAILURE;
    $request->execution->specification = new Specification();
    $request->execution->specification->androidTest = new AndroidTest();
    $request->execution->specification->androidTest->androidAppInfo = new AndroidAppInfo();
    $request->execution->specification->androidTest->androidAppInfo->name = 'Miss Aubrey Williamson';
    $request->execution->specification->androidTest->androidAppInfo->packageName = 'culpa';
    $request->execution->specification->androidTest->androidAppInfo->versionCode = 'consequuntur';
    $request->execution->specification->androidTest->androidAppInfo->versionName = 'repellat';
    $request->execution->specification->androidTest->androidInstrumentationTest = new AndroidInstrumentationTest();
    $request->execution->specification->androidTest->androidInstrumentationTest->testPackageId = 'mollitia';
    $request->execution->specification->androidTest->androidInstrumentationTest->testRunnerClass = 'occaecati';
    $request->execution->specification->androidTest->androidInstrumentationTest->testTargets = [
        'commodi',
        'quam',
    ];
    $request->execution->specification->androidTest->androidInstrumentationTest->useOrchestrator = false;
    $request->execution->specification->androidTest->androidRoboTest = new AndroidRoboTest();
    $request->execution->specification->androidTest->androidRoboTest->appInitialActivity = 'molestiae';
    $request->execution->specification->androidTest->androidRoboTest->bootstrapPackageId = 'velit';
    $request->execution->specification->androidTest->androidRoboTest->bootstrapRunnerClass = 'error';
    $request->execution->specification->androidTest->androidRoboTest->maxDepth = 158969;
    $request->execution->specification->androidTest->androidRoboTest->maxSteps = 338007;
    $request->execution->specification->androidTest->androidTestLoop = [
        'laborum' => 'animi',
    ];
    $request->execution->specification->androidTest->testTimeout = new Duration();
    $request->execution->specification->androidTest->testTimeout->nanos = 317202;
    $request->execution->specification->androidTest->testTimeout->seconds = 'odit';
    $request->execution->specification->iosTest = new IosTest();
    $request->execution->specification->iosTest->iosAppInfo = new IosAppInfo();
    $request->execution->specification->iosTest->iosAppInfo->name = 'Jimmy Wiegand';
    $request->execution->specification->iosTest->iosRoboTest = [
        'aut' => 'quasi',
        'error' => 'temporibus',
        'laborum' => 'quasi',
        'reiciendis' => 'voluptatibus',
    ];
    $request->execution->specification->iosTest->iosTestLoop = new IosTestLoop();
    $request->execution->specification->iosTest->iosTestLoop->bundleId = 'vero';
    $request->execution->specification->iosTest->iosXcTest = new IosXcTest();
    $request->execution->specification->iosTest->iosXcTest->bundleId = 'nihil';
    $request->execution->specification->iosTest->iosXcTest->xcodeVersion = 'praesentium';
    $request->execution->specification->iosTest->testTimeout = new Duration();
    $request->execution->specification->iosTest->testTimeout->nanos = 976762;
    $request->execution->specification->iosTest->testTimeout->seconds = 'ipsa';
    $request->execution->state = ExecutionStateEnum::IN_PROGRESS;
    $request->execution->testExecutionMatrixId = 'voluptate';
    $request->accessToken = 'cum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloremque';
    $request->fields = 'reprehenderit';
    $request->historyId = 'ut';
    $request->key = 'maiores';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->projectId = 'corporis';
    $request->quotaUser = 'dolore';
    $request->requestId = 'iusto';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'harum';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsCreate($request, $requestSecurity);

    if ($response->execution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsEnvironmentsGet

Gets an Environment. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Environment does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsEnvironmentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsEnvironmentsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsEnvironmentsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repudiandae';
    $request->environmentId = 'quae';
    $request->executionId = 'ipsum';
    $request->fields = 'quidem';
    $request->historyId = 'molestias';
    $request->key = 'excepturi';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->projectId = 'modi';
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'voluptates';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsEnvironmentsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsEnvironmentsGet($request, $requestSecurity);

    if ($response->environment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsEnvironmentsList

Lists Environments for a given Execution. The Environments are sorted by display name. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Execution does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsEnvironmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsEnvironmentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsEnvironmentsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->executionId = 'itaque';
    $request->fields = 'incidunt';
    $request->historyId = 'enim';
    $request->key = 'consequatur';
    $request->oauthToken = 'est';
    $request->pageSize = 842342;
    $request->pageToken = 'explicabo';
    $request->prettyPrint = false;
    $request->projectId = 'deserunt';
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsEnvironmentsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsEnvironmentsList($request, $requestSecurity);

    if ($response->listEnvironmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsGet

Gets an Execution. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cupiditate';
    $request->executionId = 'quos';
    $request->fields = 'perferendis';
    $request->historyId = 'magni';
    $request->key = 'assumenda';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->projectId = 'alias';
    $request->quotaUser = 'fugit';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsGet($request, $requestSecurity);

    if ($response->execution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsList

Lists Executions for a given History. The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fields = 'delectus';
    $request->historyId = 'eum';
    $request->key = 'non';
    $request->oauthToken = 'eligendi';
    $request->pageSize = 576157;
    $request->pageToken = 'aliquid';
    $request->prettyPrint = false;
    $request->projectId = 'provident';
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsList($request, $requestSecurity);

    if ($response->listExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsPatch

Updates an existing Execution with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Execution;
use \OpenAPI\OpenAPI\Models\Shared\Timestamp;
use \OpenAPI\OpenAPI\Models\Shared\Outcome;
use \OpenAPI\OpenAPI\Models\Shared\FailureDetail;
use \OpenAPI\OpenAPI\Models\Shared\InconclusiveDetail;
use \OpenAPI\OpenAPI\Models\Shared\SkippedDetail;
use \OpenAPI\OpenAPI\Models\Shared\SuccessDetail;
use \OpenAPI\OpenAPI\Models\Shared\OutcomeSummaryEnum;
use \OpenAPI\OpenAPI\Models\Shared\Specification;
use \OpenAPI\OpenAPI\Models\Shared\AndroidTest;
use \OpenAPI\OpenAPI\Models\Shared\AndroidAppInfo;
use \OpenAPI\OpenAPI\Models\Shared\AndroidInstrumentationTest;
use \OpenAPI\OpenAPI\Models\Shared\AndroidRoboTest;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\IosTest;
use \OpenAPI\OpenAPI\Models\Shared\IosAppInfo;
use \OpenAPI\OpenAPI\Models\Shared\IosTestLoop;
use \OpenAPI\OpenAPI\Models\Shared\IosXcTest;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->execution = new Execution();
    $request->execution->completionTime = new Timestamp();
    $request->execution->completionTime->nanos = 891555;
    $request->execution->completionTime->seconds = 'a';
    $request->execution->creationTime = new Timestamp();
    $request->execution->creationTime->nanos = 680056;
    $request->execution->creationTime->seconds = 'in';
    $request->execution->dimensionDefinitions = [
        [
            'maiores' => 'rerum',
            'dicta' => 'magnam',
            'cumque' => 'facere',
            'ea' => 'aliquid',
        ],
        [
            'accusamus' => 'non',
            'occaecati' => 'enim',
            'accusamus' => 'delectus',
        ],
    ];
    $request->execution->executionId = 'quidem';
    $request->execution->outcome = new Outcome();
    $request->execution->outcome->failureDetail = new FailureDetail();
    $request->execution->outcome->failureDetail->crashed = false;
    $request->execution->outcome->failureDetail->deviceOutOfMemory = false;
    $request->execution->outcome->failureDetail->failedRoboscript = false;
    $request->execution->outcome->failureDetail->notInstalled = false;
    $request->execution->outcome->failureDetail->otherNativeCrash = false;
    $request->execution->outcome->failureDetail->timedOut = false;
    $request->execution->outcome->failureDetail->unableToCrawl = false;
    $request->execution->outcome->inconclusiveDetail = new InconclusiveDetail();
    $request->execution->outcome->inconclusiveDetail->abortedByUser = false;
    $request->execution->outcome->inconclusiveDetail->hasErrorLogs = false;
    $request->execution->outcome->inconclusiveDetail->infrastructureFailure = false;
    $request->execution->outcome->skippedDetail = new SkippedDetail();
    $request->execution->outcome->skippedDetail->incompatibleAppVersion = false;
    $request->execution->outcome->skippedDetail->incompatibleArchitecture = false;
    $request->execution->outcome->skippedDetail->incompatibleDevice = false;
    $request->execution->outcome->successDetail = new SuccessDetail();
    $request->execution->outcome->successDetail->otherNativeCrash = false;
    $request->execution->outcome->summary = OutcomeSummaryEnum::INCONCLUSIVE;
    $request->execution->specification = new Specification();
    $request->execution->specification->androidTest = new AndroidTest();
    $request->execution->specification->androidTest->androidAppInfo = new AndroidAppInfo();
    $request->execution->specification->androidTest->androidAppInfo->name = 'Lynn Kuvalis';
    $request->execution->specification->androidTest->androidAppInfo->packageName = 'amet';
    $request->execution->specification->androidTest->androidAppInfo->versionCode = 'deserunt';
    $request->execution->specification->androidTest->androidAppInfo->versionName = 'nisi';
    $request->execution->specification->androidTest->androidInstrumentationTest = new AndroidInstrumentationTest();
    $request->execution->specification->androidTest->androidInstrumentationTest->testPackageId = 'vel';
    $request->execution->specification->androidTest->androidInstrumentationTest->testRunnerClass = 'natus';
    $request->execution->specification->androidTest->androidInstrumentationTest->testTargets = [
        'molestiae',
        'perferendis',
        'nihil',
    ];
    $request->execution->specification->androidTest->androidInstrumentationTest->useOrchestrator = false;
    $request->execution->specification->androidTest->androidRoboTest = new AndroidRoboTest();
    $request->execution->specification->androidTest->androidRoboTest->appInitialActivity = 'magnam';
    $request->execution->specification->androidTest->androidRoboTest->bootstrapPackageId = 'distinctio';
    $request->execution->specification->androidTest->androidRoboTest->bootstrapRunnerClass = 'id';
    $request->execution->specification->androidTest->androidRoboTest->maxDepth = 287991;
    $request->execution->specification->androidTest->androidRoboTest->maxSteps = 290077;
    $request->execution->specification->androidTest->androidTestLoop = [
        'natus' => 'nobis',
        'eum' => 'vero',
    ];
    $request->execution->specification->androidTest->testTimeout = new Duration();
    $request->execution->specification->androidTest->testTimeout->nanos = 135474;
    $request->execution->specification->androidTest->testTimeout->seconds = 'architecto';
    $request->execution->specification->iosTest = new IosTest();
    $request->execution->specification->iosTest->iosAppInfo = new IosAppInfo();
    $request->execution->specification->iosTest->iosAppInfo->name = 'Frances Marks';
    $request->execution->specification->iosTest->iosRoboTest = [
        'sint' => 'accusantium',
        'mollitia' => 'reiciendis',
        'mollitia' => 'ad',
    ];
    $request->execution->specification->iosTest->iosTestLoop = new IosTestLoop();
    $request->execution->specification->iosTest->iosTestLoop->bundleId = 'eum';
    $request->execution->specification->iosTest->iosXcTest = new IosXcTest();
    $request->execution->specification->iosTest->iosXcTest->bundleId = 'dolor';
    $request->execution->specification->iosTest->iosXcTest->xcodeVersion = 'necessitatibus';
    $request->execution->specification->iosTest->testTimeout = new Duration();
    $request->execution->specification->iosTest->testTimeout->nanos = 141264;
    $request->execution->specification->iosTest->testTimeout->seconds = 'nemo';
    $request->execution->state = ExecutionStateEnum::UNKNOWN_STATE;
    $request->execution->testExecutionMatrixId = 'iure';
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eius';
    $request->executionId = 'maxime';
    $request->fields = 'deleniti';
    $request->historyId = 'facilis';
    $request->key = 'in';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->projectId = 'architecto';
    $request->quotaUser = 'repudiandae';
    $request->requestId = 'ullam';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsPatch($request, $requestSecurity);

    if ($response->execution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsStepsAccessibilityClusters

Lists accessibility clusters for a given Step May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if the locale format is incorrect - NOT_FOUND - if the containing Step does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'pariatur';
    $request->key = 'accusantium';
    $request->locale = 'consequuntur';
    $request->name = 'Miss Nick Cummerata';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsStepsAccessibilityClusters($request, $requestSecurity);

    if ($response->listStepAccessibilityClustersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsStepsCreate

Creates a Step. The returned Step will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Step;
use \OpenAPI\OpenAPI\Models\Shared\Timestamp;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\StepDimensionValueEntry;
use \OpenAPI\OpenAPI\Models\Shared\StepLabelsEntry;
use \OpenAPI\OpenAPI\Models\Shared\MultiStep;
use \OpenAPI\OpenAPI\Models\Shared\PrimaryStep;
use \OpenAPI\OpenAPI\Models\Shared\IndividualOutcome;
use \OpenAPI\OpenAPI\Models\Shared\IndividualOutcomeOutcomeSummaryEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrimaryStepRollUpEnum;
use \OpenAPI\OpenAPI\Models\Shared\Outcome;
use \OpenAPI\OpenAPI\Models\Shared\FailureDetail;
use \OpenAPI\OpenAPI\Models\Shared\InconclusiveDetail;
use \OpenAPI\OpenAPI\Models\Shared\SkippedDetail;
use \OpenAPI\OpenAPI\Models\Shared\SuccessDetail;
use \OpenAPI\OpenAPI\Models\Shared\OutcomeSummaryEnum;
use \OpenAPI\OpenAPI\Models\Shared\StepStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestExecutionStep;
use \OpenAPI\OpenAPI\Models\Shared\TestIssue;
use \OpenAPI\OpenAPI\Models\Shared\TestIssueCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIssueSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\StackTrace;
use \OpenAPI\OpenAPI\Models\Shared\TestIssueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Any;
use \OpenAPI\OpenAPI\Models\Shared\TestSuiteOverview;
use \OpenAPI\OpenAPI\Models\Shared\FileReference;
use \OpenAPI\OpenAPI\Models\Shared\TestTiming;
use \OpenAPI\OpenAPI\Models\Shared\ToolExecution;
use \OpenAPI\OpenAPI\Models\Shared\ToolExitCode;
use \OpenAPI\OpenAPI\Models\Shared\ToolOutputReference;
use \OpenAPI\OpenAPI\Models\Shared\TestCaseReference;
use \OpenAPI\OpenAPI\Models\Shared\ToolExecutionStep;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsStepsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->step = new Step();
    $request->step->completionTime = new Timestamp();
    $request->step->completionTime->nanos = 407183;
    $request->step->completionTime->seconds = 'accusantium';
    $request->step->creationTime = new Timestamp();
    $request->step->creationTime->nanos = 69167;
    $request->step->creationTime->seconds = 'maiores';
    $request->step->description = 'quidem';
    $request->step->deviceUsageDuration = new Duration();
    $request->step->deviceUsageDuration->nanos = 373291;
    $request->step->deviceUsageDuration->seconds = 'voluptate';
    $request->step->dimensionValue = [
        new StepDimensionValueEntry(),
        new StepDimensionValueEntry(),
    ];
    $request->step->hasImages = false;
    $request->step->labels = [
        new StepLabelsEntry(),
        new StepLabelsEntry(),
        new StepLabelsEntry(),
    ];
    $request->step->multiStep = new MultiStep();
    $request->step->multiStep->multistepNumber = 50588;
    $request->step->multiStep->primaryStep = new PrimaryStep();
    $request->step->multiStep->primaryStep->individualOutcome = [
        new IndividualOutcome(),
        new IndividualOutcome(),
        new IndividualOutcome(),
        new IndividualOutcome(),
    ];
    $request->step->multiStep->primaryStep->rollUp = PrimaryStepRollUpEnum::FAILURE;
    $request->step->multiStep->primaryStepId = 'voluptatibus';
    $request->step->name = 'Miss Ginger Feeney';
    $request->step->outcome = new Outcome();
    $request->step->outcome->failureDetail = new FailureDetail();
    $request->step->outcome->failureDetail->crashed = false;
    $request->step->outcome->failureDetail->deviceOutOfMemory = false;
    $request->step->outcome->failureDetail->failedRoboscript = false;
    $request->step->outcome->failureDetail->notInstalled = false;
    $request->step->outcome->failureDetail->otherNativeCrash = false;
    $request->step->outcome->failureDetail->timedOut = false;
    $request->step->outcome->failureDetail->unableToCrawl = false;
    $request->step->outcome->inconclusiveDetail = new InconclusiveDetail();
    $request->step->outcome->inconclusiveDetail->abortedByUser = false;
    $request->step->outcome->inconclusiveDetail->hasErrorLogs = false;
    $request->step->outcome->inconclusiveDetail->infrastructureFailure = false;
    $request->step->outcome->skippedDetail = new SkippedDetail();
    $request->step->outcome->skippedDetail->incompatibleAppVersion = false;
    $request->step->outcome->skippedDetail->incompatibleArchitecture = false;
    $request->step->outcome->skippedDetail->incompatibleDevice = false;
    $request->step->outcome->successDetail = new SuccessDetail();
    $request->step->outcome->successDetail->otherNativeCrash = false;
    $request->step->outcome->summary = OutcomeSummaryEnum::FLAKY;
    $request->step->runDuration = new Duration();
    $request->step->runDuration->nanos = 729991;
    $request->step->runDuration->seconds = 'nobis';
    $request->step->state = StepStateEnum::UNKNOWN_STATE;
    $request->step->stepId = 'quis';
    $request->step->testExecutionStep = new TestExecutionStep();
    $request->step->testExecutionStep->testIssues = [
        new TestIssue(),
        new TestIssue(),
        new TestIssue(),
    ];
    $request->step->testExecutionStep->testSuiteOverviews = [
        new TestSuiteOverview(),
        new TestSuiteOverview(),
    ];
    $request->step->testExecutionStep->testTiming = new TestTiming();
    $request->step->testExecutionStep->testTiming->testProcessDuration = new Duration();
    $request->step->testExecutionStep->testTiming->testProcessDuration->nanos = 54338;
    $request->step->testExecutionStep->testTiming->testProcessDuration->seconds = 'quis';
    $request->step->testExecutionStep->toolExecution = new ToolExecution();
    $request->step->testExecutionStep->toolExecution->commandLineArguments = [
        'eos',
    ];
    $request->step->testExecutionStep->toolExecution->exitCode = new ToolExitCode();
    $request->step->testExecutionStep->toolExecution->exitCode->number = 18521;
    $request->step->testExecutionStep->toolExecution->toolLogs = [
        new FileReference(),
    ];
    $request->step->testExecutionStep->toolExecution->toolOutputs = [
        new ToolOutputReference(),
        new ToolOutputReference(),
        new ToolOutputReference(),
        new ToolOutputReference(),
    ];
    $request->step->toolExecutionStep = new ToolExecutionStep();
    $request->step->toolExecutionStep->toolExecution = new ToolExecution();
    $request->step->toolExecutionStep->toolExecution->commandLineArguments = [
        'dolor',
        'vero',
    ];
    $request->step->toolExecutionStep->toolExecution->exitCode = new ToolExitCode();
    $request->step->toolExecutionStep->toolExecution->exitCode->number = 345352;
    $request->step->toolExecutionStep->toolExecution->toolLogs = [
        new FileReference(),
        new FileReference(),
        new FileReference(),
        new FileReference(),
    ];
    $request->step->toolExecutionStep->toolExecution->toolOutputs = [
        new ToolOutputReference(),
        new ToolOutputReference(),
        new ToolOutputReference(),
        new ToolOutputReference(),
    ];
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perspiciatis';
    $request->executionId = 'voluptatem';
    $request->fields = 'porro';
    $request->historyId = 'consequuntur';
    $request->key = 'blanditiis';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->projectId = 'eaque';
    $request->quotaUser = 'occaecati';
    $request->requestId = 'rerum';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'asperiores';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsStepsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsStepsCreate($request, $requestSecurity);

    if ($response->step !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsStepsGet

Gets a Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsStepsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorum';
    $request->executionId = 'deleniti';
    $request->fields = 'pariatur';
    $request->historyId = 'provident';
    $request->key = 'nobis';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->projectId = 'delectus';
    $request->quotaUser = 'quaerat';
    $request->stepId = 'quos';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsStepsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsStepsGet($request, $requestSecurity);

    if ($response->step !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummary

Retrieves a PerfMetricsSummary. May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummarySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->executionId = 'hic';
    $request->fields = 'excepturi';
    $request->historyId = 'cum';
    $request->key = 'voluptate';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->projectId = 'reiciendis';
    $request->quotaUser = 'amet';
    $request->stepId = 'dolorum';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummarySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummary($request, $requestSecurity);

    if ($response->perfMetricsSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsStepsList

Lists Steps for a given Execution. The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsStepsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odio';
    $request->executionId = 'quaerat';
    $request->fields = 'accusamus';
    $request->historyId = 'quidem';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'voluptas';
    $request->pageSize = 617658;
    $request->pageToken = 'eos';
    $request->prettyPrint = false;
    $request->projectId = 'atque';
    $request->quotaUser = 'sit';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsStepsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsStepsList($request, $requestSecurity);

    if ($response->listStepsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsStepsPatch

Updates an existing Step with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Step;
use \OpenAPI\OpenAPI\Models\Shared\Timestamp;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\StepDimensionValueEntry;
use \OpenAPI\OpenAPI\Models\Shared\StepLabelsEntry;
use \OpenAPI\OpenAPI\Models\Shared\MultiStep;
use \OpenAPI\OpenAPI\Models\Shared\PrimaryStep;
use \OpenAPI\OpenAPI\Models\Shared\IndividualOutcome;
use \OpenAPI\OpenAPI\Models\Shared\IndividualOutcomeOutcomeSummaryEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrimaryStepRollUpEnum;
use \OpenAPI\OpenAPI\Models\Shared\Outcome;
use \OpenAPI\OpenAPI\Models\Shared\FailureDetail;
use \OpenAPI\OpenAPI\Models\Shared\InconclusiveDetail;
use \OpenAPI\OpenAPI\Models\Shared\SkippedDetail;
use \OpenAPI\OpenAPI\Models\Shared\SuccessDetail;
use \OpenAPI\OpenAPI\Models\Shared\OutcomeSummaryEnum;
use \OpenAPI\OpenAPI\Models\Shared\StepStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestExecutionStep;
use \OpenAPI\OpenAPI\Models\Shared\TestIssue;
use \OpenAPI\OpenAPI\Models\Shared\TestIssueCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIssueSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\StackTrace;
use \OpenAPI\OpenAPI\Models\Shared\TestIssueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Any;
use \OpenAPI\OpenAPI\Models\Shared\TestSuiteOverview;
use \OpenAPI\OpenAPI\Models\Shared\FileReference;
use \OpenAPI\OpenAPI\Models\Shared\TestTiming;
use \OpenAPI\OpenAPI\Models\Shared\ToolExecution;
use \OpenAPI\OpenAPI\Models\Shared\ToolExitCode;
use \OpenAPI\OpenAPI\Models\Shared\ToolOutputReference;
use \OpenAPI\OpenAPI\Models\Shared\TestCaseReference;
use \OpenAPI\OpenAPI\Models\Shared\ToolExecutionStep;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsStepsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->step = new Step();
    $request->step->completionTime = new Timestamp();
    $request->step->completionTime->nanos = 679393;
    $request->step->completionTime->seconds = 'iusto';
    $request->step->creationTime = new Timestamp();
    $request->step->creationTime->nanos = 453697;
    $request->step->creationTime->seconds = 'dolorum';
    $request->step->description = 'deleniti';
    $request->step->deviceUsageDuration = new Duration();
    $request->step->deviceUsageDuration->nanos = 607045;
    $request->step->deviceUsageDuration->seconds = 'necessitatibus';
    $request->step->dimensionValue = [
        new StepDimensionValueEntry(),
        new StepDimensionValueEntry(),
        new StepDimensionValueEntry(),
    ];
    $request->step->hasImages = false;
    $request->step->labels = [
        new StepLabelsEntry(),
        new StepLabelsEntry(),
        new StepLabelsEntry(),
        new StepLabelsEntry(),
    ];
    $request->step->multiStep = new MultiStep();
    $request->step->multiStep->multistepNumber = 469497;
    $request->step->multiStep->primaryStep = new PrimaryStep();
    $request->step->multiStep->primaryStep->individualOutcome = [
        new IndividualOutcome(),
    ];
    $request->step->multiStep->primaryStep->rollUp = PrimaryStepRollUpEnum::FAILURE;
    $request->step->multiStep->primaryStepId = 'id';
    $request->step->name = 'Mrs. Ray Collins';
    $request->step->outcome = new Outcome();
    $request->step->outcome->failureDetail = new FailureDetail();
    $request->step->outcome->failureDetail->crashed = false;
    $request->step->outcome->failureDetail->deviceOutOfMemory = false;
    $request->step->outcome->failureDetail->failedRoboscript = false;
    $request->step->outcome->failureDetail->notInstalled = false;
    $request->step->outcome->failureDetail->otherNativeCrash = false;
    $request->step->outcome->failureDetail->timedOut = false;
    $request->step->outcome->failureDetail->unableToCrawl = false;
    $request->step->outcome->inconclusiveDetail = new InconclusiveDetail();
    $request->step->outcome->inconclusiveDetail->abortedByUser = false;
    $request->step->outcome->inconclusiveDetail->hasErrorLogs = false;
    $request->step->outcome->inconclusiveDetail->infrastructureFailure = false;
    $request->step->outcome->skippedDetail = new SkippedDetail();
    $request->step->outcome->skippedDetail->incompatibleAppVersion = false;
    $request->step->outcome->skippedDetail->incompatibleArchitecture = false;
    $request->step->outcome->skippedDetail->incompatibleDevice = false;
    $request->step->outcome->successDetail = new SuccessDetail();
    $request->step->outcome->successDetail->otherNativeCrash = false;
    $request->step->outcome->summary = OutcomeSummaryEnum::FLAKY;
    $request->step->runDuration = new Duration();
    $request->step->runDuration->nanos = 320017;
    $request->step->runDuration->seconds = 'saepe';
    $request->step->state = StepStateEnum::PENDING;
    $request->step->stepId = 'deserunt';
    $request->step->testExecutionStep = new TestExecutionStep();
    $request->step->testExecutionStep->testIssues = [
        new TestIssue(),
        new TestIssue(),
        new TestIssue(),
    ];
    $request->step->testExecutionStep->testSuiteOverviews = [
        new TestSuiteOverview(),
        new TestSuiteOverview(),
    ];
    $request->step->testExecutionStep->testTiming = new TestTiming();
    $request->step->testExecutionStep->testTiming->testProcessDuration = new Duration();
    $request->step->testExecutionStep->testTiming->testProcessDuration->nanos = 831049;
    $request->step->testExecutionStep->testTiming->testProcessDuration->seconds = 'totam';
    $request->step->testExecutionStep->toolExecution = new ToolExecution();
    $request->step->testExecutionStep->toolExecution->commandLineArguments = [
        'alias',
        'at',
        'quaerat',
    ];
    $request->step->testExecutionStep->toolExecution->exitCode = new ToolExitCode();
    $request->step->testExecutionStep->toolExecution->exitCode->number = 273542;
    $request->step->testExecutionStep->toolExecution->toolLogs = [
        new FileReference(),
        new FileReference(),
    ];
    $request->step->testExecutionStep->toolExecution->toolOutputs = [
        new ToolOutputReference(),
        new ToolOutputReference(),
        new ToolOutputReference(),
        new ToolOutputReference(),
    ];
    $request->step->toolExecutionStep = new ToolExecutionStep();
    $request->step->toolExecutionStep->toolExecution = new ToolExecution();
    $request->step->toolExecutionStep->toolExecution->commandLineArguments = [
        'qui',
        'dolorum',
        'a',
        'esse',
    ];
    $request->step->toolExecutionStep->toolExecution->exitCode = new ToolExitCode();
    $request->step->toolExecutionStep->toolExecution->exitCode->number = 687488;
    $request->step->toolExecutionStep->toolExecution->toolLogs = [
        new FileReference(),
        new FileReference(),
    ];
    $request->step->toolExecutionStep->toolExecution->toolOutputs = [
        new ToolOutputReference(),
    ];
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->executionId = 'tempore';
    $request->fields = 'accusamus';
    $request->historyId = 'numquam';
    $request->key = 'enim';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->projectId = 'sapiente';
    $request->quotaUser = 'totam';
    $request->requestId = 'nihil';
    $request->stepId = 'sit';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'neque';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsStepsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsStepsPatch($request, $requestSecurity);

    if ($response->step !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreate

Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created. May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerfMetricsSummary;
use \OpenAPI\OpenAPI\Models\Shared\AppStartTime;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\GraphicsStats;
use \OpenAPI\OpenAPI\Models\Shared\GraphicsStatsBucket;
use \OpenAPI\OpenAPI\Models\Shared\PerfEnvironment;
use \OpenAPI\OpenAPI\Models\Shared\CPUInfo;
use \OpenAPI\OpenAPI\Models\Shared\MemoryInfo;
use \OpenAPI\OpenAPI\Models\Shared\PerfMetricsSummaryPerfMetricsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->perfMetricsSummary = new PerfMetricsSummary();
    $request->perfMetricsSummary->appStartTime = new AppStartTime();
    $request->perfMetricsSummary->appStartTime->fullyDrawnTime = new Duration();
    $request->perfMetricsSummary->appStartTime->fullyDrawnTime->nanos = 424685;
    $request->perfMetricsSummary->appStartTime->fullyDrawnTime->seconds = 'libero';
    $request->perfMetricsSummary->appStartTime->initialDisplayTime = new Duration();
    $request->perfMetricsSummary->appStartTime->initialDisplayTime->nanos = 374170;
    $request->perfMetricsSummary->appStartTime->initialDisplayTime->seconds = 'deserunt';
    $request->perfMetricsSummary->executionId = 'quam';
    $request->perfMetricsSummary->graphicsStats = new GraphicsStats();
    $request->perfMetricsSummary->graphicsStats->buckets = [
        new GraphicsStatsBucket(),
    ];
    $request->perfMetricsSummary->graphicsStats->highInputLatencyCount = 'incidunt';
    $request->perfMetricsSummary->graphicsStats->jankyFrames = 'qui';
    $request->perfMetricsSummary->graphicsStats->missedVsyncCount = 'cupiditate';
    $request->perfMetricsSummary->graphicsStats->p50Millis = 'maxime';
    $request->perfMetricsSummary->graphicsStats->p90Millis = 'pariatur';
    $request->perfMetricsSummary->graphicsStats->p95Millis = 'soluta';
    $request->perfMetricsSummary->graphicsStats->p99Millis = 'dicta';
    $request->perfMetricsSummary->graphicsStats->slowBitmapUploadCount = 'laborum';
    $request->perfMetricsSummary->graphicsStats->slowDrawCount = 'totam';
    $request->perfMetricsSummary->graphicsStats->slowUiThreadCount = 'incidunt';
    $request->perfMetricsSummary->graphicsStats->totalFrames = 'aspernatur';
    $request->perfMetricsSummary->historyId = 'dolores';
    $request->perfMetricsSummary->perfEnvironment = new PerfEnvironment();
    $request->perfMetricsSummary->perfEnvironment->cpuInfo = new CPUInfo();
    $request->perfMetricsSummary->perfEnvironment->cpuInfo->cpuProcessor = 'distinctio';
    $request->perfMetricsSummary->perfEnvironment->cpuInfo->cpuSpeedInGhz = 7044.74;
    $request->perfMetricsSummary->perfEnvironment->cpuInfo->numberOfCores = 396060;
    $request->perfMetricsSummary->perfEnvironment->memoryInfo = new MemoryInfo();
    $request->perfMetricsSummary->perfEnvironment->memoryInfo->memoryCapInKibibyte = 'quam';
    $request->perfMetricsSummary->perfEnvironment->memoryInfo->memoryTotalInKibibyte = 'molestias';
    $request->perfMetricsSummary->perfMetrics = [
        PerfMetricsSummaryPerfMetricsEnum::PERF_METRIC_TYPE_UNSPECIFIED,
        PerfMetricsSummaryPerfMetricsEnum::MEMORY,
        PerfMetricsSummaryPerfMetricsEnum::PERF_METRIC_TYPE_UNSPECIFIED,
        PerfMetricsSummaryPerfMetricsEnum::PERF_METRIC_TYPE_UNSPECIFIED,
    ];
    $request->perfMetricsSummary->projectId = 'odio';
    $request->perfMetricsSummary->stepId = 'sunt';
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'hic';
    $request->executionId = 'voluptatem';
    $request->fields = 'cumque';
    $request->historyId = 'soluta';
    $request->key = 'nobis';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->projectId = 'saepe';
    $request->quotaUser = 'ipsum';
    $request->stepId = 'veritatis';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreate($request, $requestSecurity);

    if ($response->perfMetricsSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreate

Creates a PerfSampleSeries. May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerfSampleSeries;
use \OpenAPI\OpenAPI\Models\Shared\BasicPerfSampleSeries;
use \OpenAPI\OpenAPI\Models\Shared\BasicPerfSampleSeriesPerfMetricTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BasicPerfSampleSeriesPerfUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\BasicPerfSampleSeriesSampleSeriesLabelEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->perfSampleSeries = new PerfSampleSeries();
    $request->perfSampleSeries->basicPerfSampleSeries = new BasicPerfSampleSeries();
    $request->perfSampleSeries->basicPerfSampleSeries->perfMetricType = BasicPerfSampleSeriesPerfMetricTypeEnum::CPU;
    $request->perfSampleSeries->basicPerfSampleSeries->perfUnit = BasicPerfSampleSeriesPerfUnitEnum::PERF_UNIT_UNSPECIFIED;
    $request->perfSampleSeries->basicPerfSampleSeries->sampleSeriesLabel = BasicPerfSampleSeriesSampleSeriesLabelEnum::GRAPHICS_FRAME_RATE;
    $request->perfSampleSeries->executionId = 'dolorem';
    $request->perfSampleSeries->historyId = 'dolore';
    $request->perfSampleSeries->projectId = 'labore';
    $request->perfSampleSeries->sampleSeriesId = 'adipisci';
    $request->perfSampleSeries->stepId = 'dolorum';
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aut';
    $request->executionId = 'quas';
    $request->fields = 'itaque';
    $request->historyId = 'consequatur';
    $request->key = 'est';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->projectId = 'porro';
    $request->quotaUser = 'doloribus';
    $request->stepId = 'ut';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreate($request, $requestSecurity);

    if ($response->perfSampleSeries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGet

Gets a PerfSampleSeries. May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odio';
    $request->executionId = 'occaecati';
    $request->fields = 'voluptatibus';
    $request->historyId = 'quisquam';
    $request->key = 'vero';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->projectId = 'quis';
    $request->quotaUser = 'ipsum';
    $request->sampleSeriesId = 'delectus';
    $request->stepId = 'voluptate';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGet($request, $requestSecurity);

    if ($response->perfSampleSeries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesList

Lists PerfSampleSeries for a given Step. The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids. May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'distinctio';
    $request->executionId = 'quod';
    $request->fields = 'odio';
    $request->filter = [
        ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum::NETWORK,
        ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum::GRAPHICS,
        ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum::CPU,
    ];
    $request->historyId = 'dolore';
    $request->key = 'quibusdam';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->projectId = 'sequi';
    $request->quotaUser = 'natus';
    $request->stepId = 'impedit';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesList($request, $requestSecurity);

    if ($response->listPerfSampleSeriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreate

Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database). May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchCreatePerfSamplesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PerfSample;
use \OpenAPI\OpenAPI\Models\Shared\Timestamp;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->batchCreatePerfSamplesRequest = new BatchCreatePerfSamplesRequest();
    $request->batchCreatePerfSamplesRequest->perfSamples = [
        new PerfSample(),
        new PerfSample(),
        new PerfSample(),
        new PerfSample(),
    ];
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->executionId = 'doloribus';
    $request->fields = 'iusto';
    $request->historyId = 'eligendi';
    $request->key = 'ducimus';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->projectId = 'officia';
    $request->quotaUser = 'tempora';
    $request->sampleSeriesId = 'ipsam';
    $request->stepId = 'ea';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'vel';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreate($request, $requestSecurity);

    if ($response->batchCreatePerfSamplesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesList

Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ex';
    $request->executionId = 'laudantium';
    $request->fields = 'dicta';
    $request->historyId = 'dolor';
    $request->key = 'maiores';
    $request->oauthToken = 'quasi';
    $request->pageSize = 406120;
    $request->pageToken = 'nulla';
    $request->prettyPrint = false;
    $request->projectId = 'excepturi';
    $request->quotaUser = 'voluptatibus';
    $request->sampleSeriesId = 'nostrum';
    $request->stepId = 'sapiente';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesList($request, $requestSecurity);

    if ($response->listPerfSamplesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFiles

Publish xml files to an existing Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g. try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PublishXunitXmlFilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\FileReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->publishXunitXmlFilesRequest = new PublishXunitXmlFilesRequest();
    $request->publishXunitXmlFilesRequest->xunitXmlFiles = [
        new FileReference(),
        new FileReference(),
        new FileReference(),
        new FileReference(),
    ];
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquid';
    $request->executionId = 'inventore';
    $request->fields = 'magnam';
    $request->historyId = 'ea';
    $request->key = 'quo';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->projectId = 'recusandae';
    $request->quotaUser = 'aspernatur';
    $request->stepId = 'minima';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'a';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFiles($request, $requestSecurity);

    if ($response->step !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsStepsTestCasesGet

Gets details of a Test Case for a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Test Case does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->executionId = 'impedit';
    $request->fields = 'aliquam';
    $request->historyId = 'fugit';
    $request->key = 'accusamus';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->projectId = 'non';
    $request->quotaUser = 'et';
    $request->stepId = 'dolorum';
    $request->testCaseId = 'laborum';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsStepsTestCasesGet($request, $requestSecurity);

    if ($response->testCase !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsStepsTestCasesList

Lists Test Cases attached to a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Step does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsTestCasesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsTestCasesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsStepsTestCasesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'autem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quas';
    $request->executionId = 'assumenda';
    $request->fields = 'nulla';
    $request->historyId = 'voluptas';
    $request->key = 'libero';
    $request->oauthToken = 'quasi';
    $request->pageSize = 270328;
    $request->pageToken = 'numquam';
    $request->prettyPrint = false;
    $request->projectId = 'explicabo';
    $request->quotaUser = 'provident';
    $request->stepId = 'ipsa';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsStepsTestCasesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsStepsTestCasesList($request, $requestSecurity);

    if ($response->listTestCasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesExecutionsStepsThumbnailsList

Lists thumbnails of images attached to a step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eius';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'esse';
    $request->executionId = 'rem';
    $request->fields = 'fuga';
    $request->historyId = 'reprehenderit';
    $request->key = 'quidem';
    $request->oauthToken = 'fugiat';
    $request->pageSize = 283519;
    $request->pageToken = 'eum';
    $request->prettyPrint = false;
    $request->projectId = 'suscipit';
    $request->quotaUser = 'assumenda';
    $request->stepId = 'eos';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'quisquam';

    $requestSecurity = new ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesExecutionsStepsThumbnailsList($request, $requestSecurity);

    if ($response->listStepThumbnailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesGet

Gets a History. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quidem';
    $request->fields = 'neque';
    $request->historyId = 'quo';
    $request->key = 'illum';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->projectId = 'fuga';
    $request->quotaUser = 'eius';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new ToolresultsProjectsHistoriesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesGet($request, $requestSecurity);

    if ($response->history !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsHistoriesList

Lists Histories for a given Project. The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsHistoriesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsHistoriesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'debitis';
    $request->filterByName = 'ipsam';
    $request->key = 'aspernatur';
    $request->oauthToken = 'sequi';
    $request->pageSize = 779192;
    $request->pageToken = 'esse';
    $request->prettyPrint = false;
    $request->projectId = 'recusandae';
    $request->quotaUser = 'aperiam';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new ToolresultsProjectsHistoriesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsHistoriesList($request, $requestSecurity);

    if ($response->listHistoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolresultsProjectsInitializeSettings

Creates resources for settings which have not yet been set. Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days. The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details. If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created. May return any canonical error codes, including the following: - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsInitializeSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ToolresultsProjectsInitializeSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolresultsProjectsInitializeSettingsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'accusamus';
    $request->key = 'aliquam';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->projectId = 'occaecati';
    $request->quotaUser = 'commodi';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new ToolresultsProjectsInitializeSettingsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->toolresultsProjectsInitializeSettings($request, $requestSecurity);

    if ($response->projectSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
