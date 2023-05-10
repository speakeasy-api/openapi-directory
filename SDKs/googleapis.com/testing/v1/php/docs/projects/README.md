# projects

### Available Operations

* [testingProjectsTestMatricesCancel](#testingprojectstestmatricescancel) - Cancels unfinished test executions in a test matrix. This call returns immediately and cancellation proceeds asynchronously. If the matrix is already final, this operation will have no effect. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist
* [testingProjectsTestMatricesCreate](#testingprojectstestmatricescreate) - Creates and runs a matrix of tests according to the given specifications. Unsupported environments will be returned in the state UNSUPPORTED. A test matrix is limited to use at most 2000 devices in parallel. The returned matrix will not yet contain the executions that will be created for this matrix. That happens later on and will require a call to GetTestMatrix. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed or if the matrix tries to use too many simultaneous devices.
* [testingProjectsTestMatricesGet](#testingprojectstestmatricesget) - Checks the status of a test matrix and the executions once they are created. The test matrix will contain the list of test executions to run if and only if the resultStorage.toolResultsExecution fields have been populated. Note: Flaky test executions may still be added to the matrix at a later stage. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist

## testingProjectsTestMatricesCancel

Cancels unfinished test executions in a test matrix. This call returns immediately and cancellation proceeds asynchronously. If the matrix is already final, this operation will have no effect. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestingProjectsTestMatricesCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'recusandae';
    $request->key = 'temporibus';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->projectId = 'quis';
    $request->quotaUser = 'veritatis';
    $request->testMatrixId = 'deserunt';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new TestingProjectsTestMatricesCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->testingProjectsTestMatricesCancel($request, $requestSecurity);

    if ($response->cancelTestMatrixResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testingProjectsTestMatricesCreate

Creates and runs a matrix of tests according to the given specifications. Unsupported environments will be returned in the state UNSUPPORTED. A test matrix is limited to use at most 2000 devices in parallel. The returned matrix will not yet contain the executions that will be created for this matrix. That happens later on and will require a call to GetTestMatrix. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed or if the matrix tries to use too many simultaneous devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestMatrix;
use \OpenAPI\OpenAPI\Models\Shared\ClientInfo;
use \OpenAPI\OpenAPI\Models\Shared\ClientInfoDetail;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentMatrix;
use \OpenAPI\OpenAPI\Models\Shared\AndroidDeviceList;
use \OpenAPI\OpenAPI\Models\Shared\AndroidDevice;
use \OpenAPI\OpenAPI\Models\Shared\AndroidMatrix;
use \OpenAPI\OpenAPI\Models\Shared\IosDeviceList;
use \OpenAPI\OpenAPI\Models\Shared\IosDevice;
use \OpenAPI\OpenAPI\Models\Shared\TestMatrixInvalidMatrixDetailsEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestMatrixOutcomeSummaryEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResultStorage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudStorage;
use \OpenAPI\OpenAPI\Models\Shared\ToolResultsExecution;
use \OpenAPI\OpenAPI\Models\Shared\ToolResultsHistory;
use \OpenAPI\OpenAPI\Models\Shared\TestMatrixStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestExecution;
use \OpenAPI\OpenAPI\Models\Shared\Environment;
use \OpenAPI\OpenAPI\Models\Shared\Shard;
use \OpenAPI\OpenAPI\Models\Shared\TestTargetsForShard;
use \OpenAPI\OpenAPI\Models\Shared\TestExecutionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestDetails;
use \OpenAPI\OpenAPI\Models\Shared\TestSpecification;
use \OpenAPI\OpenAPI\Models\Shared\AndroidInstrumentationTest;
use \OpenAPI\OpenAPI\Models\Shared\FileReference;
use \OpenAPI\OpenAPI\Models\Shared\AppBundle;
use \OpenAPI\OpenAPI\Models\Shared\AndroidInstrumentationTestOrchestratorOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShardingOption;
use \OpenAPI\OpenAPI\Models\Shared\ManualSharding;
use \OpenAPI\OpenAPI\Models\Shared\SmartSharding;
use \OpenAPI\OpenAPI\Models\Shared\UniformSharding;
use \OpenAPI\OpenAPI\Models\Shared\AndroidRoboTest;
use \OpenAPI\OpenAPI\Models\Shared\RoboDirective;
use \OpenAPI\OpenAPI\Models\Shared\RoboDirectiveActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AndroidRoboTestRoboModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RoboStartingIntent;
use \OpenAPI\OpenAPI\Models\Shared\StartActivityIntent;
use \OpenAPI\OpenAPI\Models\Shared\AndroidTestLoop;
use \OpenAPI\OpenAPI\Models\Shared\IosTestLoop;
use \OpenAPI\OpenAPI\Models\Shared\IosTestSetup;
use \OpenAPI\OpenAPI\Models\Shared\IosDeviceFile;
use \OpenAPI\OpenAPI\Models\Shared\IosXcTest;
use \OpenAPI\OpenAPI\Models\Shared\TestSetup;
use \OpenAPI\OpenAPI\Models\Shared\Account;
use \OpenAPI\OpenAPI\Models\Shared\Apk;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentVariable;
use \OpenAPI\OpenAPI\Models\Shared\DeviceFile;
use \OpenAPI\OpenAPI\Models\Shared\ObbFile;
use \OpenAPI\OpenAPI\Models\Shared\RegularFile;
use \OpenAPI\OpenAPI\Models\Shared\SystraceSetup;
use \OpenAPI\OpenAPI\Models\Shared\ToolResultsStep;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestingProjectsTestMatricesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testMatrix = new TestMatrix();
    $request->testMatrix->clientInfo = new ClientInfo();
    $request->testMatrix->clientInfo->clientInfoDetails = [
        new ClientInfoDetail(),
        new ClientInfoDetail(),
        new ClientInfoDetail(),
        new ClientInfoDetail(),
    ];
    $request->testMatrix->clientInfo->name = 'Fred Strosin';
    $request->testMatrix->environmentMatrix = new EnvironmentMatrix();
    $request->testMatrix->environmentMatrix->androidDeviceList = new AndroidDeviceList();
    $request->testMatrix->environmentMatrix->androidDeviceList->androidDevices = [
        new AndroidDevice(),
        new AndroidDevice(),
    ];
    $request->testMatrix->environmentMatrix->androidMatrix = new AndroidMatrix();
    $request->testMatrix->environmentMatrix->androidMatrix->androidModelIds = [
        'quod',
        'esse',
        'totam',
        'porro',
    ];
    $request->testMatrix->environmentMatrix->androidMatrix->androidVersionIds = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->testMatrix->environmentMatrix->androidMatrix->locales = [
        'fugit',
        'deleniti',
        'hic',
    ];
    $request->testMatrix->environmentMatrix->androidMatrix->orientations = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->testMatrix->environmentMatrix->iosDeviceList = new IosDeviceList();
    $request->testMatrix->environmentMatrix->iosDeviceList->iosDevices = [
        new IosDevice(),
        new IosDevice(),
    ];
    $request->testMatrix->failFast = false;
    $request->testMatrix->flakyTestAttempts = 186332;
    $request->testMatrix->invalidMatrixDetails = TestMatrixInvalidMatrixDetailsEnum::MISSING_URL_SCHEME;
    $request->testMatrix->outcomeSummary = TestMatrixOutcomeSummaryEnum::INCONCLUSIVE;
    $request->testMatrix->projectId = 'esse';
    $request->testMatrix->resultStorage = new ResultStorage();
    $request->testMatrix->resultStorage->googleCloudStorage = new GoogleCloudStorage();
    $request->testMatrix->resultStorage->googleCloudStorage->gcsPath = 'ipsum';
    $request->testMatrix->resultStorage->resultsUrl = 'excepturi';
    $request->testMatrix->resultStorage->toolResultsExecution = new ToolResultsExecution();
    $request->testMatrix->resultStorage->toolResultsExecution->executionId = 'aspernatur';
    $request->testMatrix->resultStorage->toolResultsExecution->historyId = 'perferendis';
    $request->testMatrix->resultStorage->toolResultsExecution->projectId = 'ad';
    $request->testMatrix->resultStorage->toolResultsHistory = new ToolResultsHistory();
    $request->testMatrix->resultStorage->toolResultsHistory->historyId = 'natus';
    $request->testMatrix->resultStorage->toolResultsHistory->projectId = 'sed';
    $request->testMatrix->state = TestMatrixStateEnum::UNSUPPORTED_ENVIRONMENT;
    $request->testMatrix->testExecutions = [
        new TestExecution(),
    ];
    $request->testMatrix->testMatrixId = 'natus';
    $request->testMatrix->testSpecification = new TestSpecification();
    $request->testMatrix->testSpecification->androidInstrumentationTest = new AndroidInstrumentationTest();
    $request->testMatrix->testSpecification->androidInstrumentationTest->appApk = new FileReference();
    $request->testMatrix->testSpecification->androidInstrumentationTest->appApk->gcsPath = 'laboriosam';
    $request->testMatrix->testSpecification->androidInstrumentationTest->appBundle = new AppBundle();
    $request->testMatrix->testSpecification->androidInstrumentationTest->appBundle->bundleLocation = new FileReference();
    $request->testMatrix->testSpecification->androidInstrumentationTest->appBundle->bundleLocation->gcsPath = 'hic';
    $request->testMatrix->testSpecification->androidInstrumentationTest->appPackageId = 'saepe';
    $request->testMatrix->testSpecification->androidInstrumentationTest->orchestratorOption = AndroidInstrumentationTestOrchestratorOptionEnum::DO_NOT_USE_ORCHESTRATOR;
    $request->testMatrix->testSpecification->androidInstrumentationTest->shardingOption = new ShardingOption();
    $request->testMatrix->testSpecification->androidInstrumentationTest->shardingOption->manualSharding = new ManualSharding();
    $request->testMatrix->testSpecification->androidInstrumentationTest->shardingOption->manualSharding->testTargetsForShard = [
        new TestTargetsForShard(),
        new TestTargetsForShard(),
    ];
    $request->testMatrix->testSpecification->androidInstrumentationTest->shardingOption->smartSharding = new SmartSharding();
    $request->testMatrix->testSpecification->androidInstrumentationTest->shardingOption->smartSharding->targetedShardDuration = 'corporis';
    $request->testMatrix->testSpecification->androidInstrumentationTest->shardingOption->uniformSharding = new UniformSharding();
    $request->testMatrix->testSpecification->androidInstrumentationTest->shardingOption->uniformSharding->numShards = 613064;
    $request->testMatrix->testSpecification->androidInstrumentationTest->testApk = new FileReference();
    $request->testMatrix->testSpecification->androidInstrumentationTest->testApk->gcsPath = 'iure';
    $request->testMatrix->testSpecification->androidInstrumentationTest->testPackageId = 'saepe';
    $request->testMatrix->testSpecification->androidInstrumentationTest->testRunnerClass = 'quidem';
    $request->testMatrix->testSpecification->androidInstrumentationTest->testTargets = [
        'ipsa',
    ];
    $request->testMatrix->testSpecification->androidRoboTest = new AndroidRoboTest();
    $request->testMatrix->testSpecification->androidRoboTest->appApk = new FileReference();
    $request->testMatrix->testSpecification->androidRoboTest->appApk->gcsPath = 'reiciendis';
    $request->testMatrix->testSpecification->androidRoboTest->appBundle = new AppBundle();
    $request->testMatrix->testSpecification->androidRoboTest->appBundle->bundleLocation = new FileReference();
    $request->testMatrix->testSpecification->androidRoboTest->appBundle->bundleLocation->gcsPath = 'est';
    $request->testMatrix->testSpecification->androidRoboTest->appInitialActivity = 'mollitia';
    $request->testMatrix->testSpecification->androidRoboTest->appPackageId = 'laborum';
    $request->testMatrix->testSpecification->androidRoboTest->maxDepth = 170909;
    $request->testMatrix->testSpecification->androidRoboTest->maxSteps = 210382;
    $request->testMatrix->testSpecification->androidRoboTest->roboDirectives = [
        new RoboDirective(),
        new RoboDirective(),
    ];
    $request->testMatrix->testSpecification->androidRoboTest->roboMode = AndroidRoboTestRoboModeEnum::ROBO_MODE_UNSPECIFIED;
    $request->testMatrix->testSpecification->androidRoboTest->roboScript = new FileReference();
    $request->testMatrix->testSpecification->androidRoboTest->roboScript->gcsPath = 'nobis';
    $request->testMatrix->testSpecification->androidRoboTest->startingIntents = [
        new RoboStartingIntent(),
        new RoboStartingIntent(),
    ];
    $request->testMatrix->testSpecification->androidTestLoop = new AndroidTestLoop();
    $request->testMatrix->testSpecification->androidTestLoop->appApk = new FileReference();
    $request->testMatrix->testSpecification->androidTestLoop->appApk->gcsPath = 'omnis';
    $request->testMatrix->testSpecification->androidTestLoop->appBundle = new AppBundle();
    $request->testMatrix->testSpecification->androidTestLoop->appBundle->bundleLocation = new FileReference();
    $request->testMatrix->testSpecification->androidTestLoop->appBundle->bundleLocation->gcsPath = 'nemo';
    $request->testMatrix->testSpecification->androidTestLoop->appPackageId = 'minima';
    $request->testMatrix->testSpecification->androidTestLoop->scenarioLabels = [
        'accusantium',
        'iure',
        'culpa',
    ];
    $request->testMatrix->testSpecification->androidTestLoop->scenarios = [
        958950,
        102044,
        652790,
        208876,
    ];
    $request->testMatrix->testSpecification->disablePerformanceMetrics = false;
    $request->testMatrix->testSpecification->disableVideoRecording = false;
    $request->testMatrix->testSpecification->iosTestLoop = new IosTestLoop();
    $request->testMatrix->testSpecification->iosTestLoop->appBundleId = 'culpa';
    $request->testMatrix->testSpecification->iosTestLoop->appIpa = new FileReference();
    $request->testMatrix->testSpecification->iosTestLoop->appIpa->gcsPath = 'consequuntur';
    $request->testMatrix->testSpecification->iosTestLoop->scenarios = [
        653108,
        581850,
        253291,
        414369,
    ];
    $request->testMatrix->testSpecification->iosTestSetup = new IosTestSetup();
    $request->testMatrix->testSpecification->iosTestSetup->additionalIpas = [
        new FileReference(),
        new FileReference(),
    ];
    $request->testMatrix->testSpecification->iosTestSetup->networkProfile = 'molestiae';
    $request->testMatrix->testSpecification->iosTestSetup->pullDirectories = [
        new IosDeviceFile(),
    ];
    $request->testMatrix->testSpecification->iosTestSetup->pushFiles = [
        new IosDeviceFile(),
        new IosDeviceFile(),
        new IosDeviceFile(),
    ];
    $request->testMatrix->testSpecification->iosXcTest = new IosXcTest();
    $request->testMatrix->testSpecification->iosXcTest->appBundleId = 'quia';
    $request->testMatrix->testSpecification->iosXcTest->testSpecialEntitlements = false;
    $request->testMatrix->testSpecification->iosXcTest->testsZip = new FileReference();
    $request->testMatrix->testSpecification->iosXcTest->testsZip->gcsPath = 'quis';
    $request->testMatrix->testSpecification->iosXcTest->xcodeVersion = 'vitae';
    $request->testMatrix->testSpecification->iosXcTest->xctestrun = new FileReference();
    $request->testMatrix->testSpecification->iosXcTest->xctestrun->gcsPath = 'laborum';
    $request->testMatrix->testSpecification->testSetup = new TestSetup();
    $request->testMatrix->testSpecification->testSetup->account = new Account();
    $request->testMatrix->testSpecification->testSetup->account->googleAuto = [
        'enim' => 'odit',
        'quo' => 'sequi',
        'tenetur' => 'ipsam',
    ];
    $request->testMatrix->testSpecification->testSetup->additionalApks = [
        new Apk(),
        new Apk(),
        new Apk(),
    ];
    $request->testMatrix->testSpecification->testSetup->directoriesToPull = [
        'aut',
        'quasi',
        'error',
        'temporibus',
    ];
    $request->testMatrix->testSpecification->testSetup->dontAutograntPermissions = false;
    $request->testMatrix->testSpecification->testSetup->environmentVariables = [
        new EnvironmentVariable(),
        new EnvironmentVariable(),
        new EnvironmentVariable(),
    ];
    $request->testMatrix->testSpecification->testSetup->filesToPush = [
        new DeviceFile(),
    ];
    $request->testMatrix->testSpecification->testSetup->networkProfile = 'reiciendis';
    $request->testMatrix->testSpecification->testSetup->systrace = new SystraceSetup();
    $request->testMatrix->testSpecification->testSetup->systrace->durationSeconds = 976460;
    $request->testMatrix->testSpecification->testTimeout = 'vero';
    $request->testMatrix->timestamp = 'nihil';
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'omnis';
    $request->key = 'voluptate';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->projectId = 'perferendis';
    $request->quotaUser = 'doloremque';
    $request->requestId = 'reprehenderit';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new TestingProjectsTestMatricesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->testingProjectsTestMatricesCreate($request, $requestSecurity);

    if ($response->testMatrix !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testingProjectsTestMatricesGet

Checks the status of a test matrix and the executions once they are created. The test matrix will contain the list of test executions to run if and only if the resultStorage.toolResultsExecution fields have been populated. Note: Flaky test executions may still be added to the matrix at a later stage. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestingProjectsTestMatricesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iusto';
    $request->fields = 'dicta';
    $request->key = 'harum';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->projectId = 'accusamus';
    $request->quotaUser = 'commodi';
    $request->testMatrixId = 'repudiandae';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new TestingProjectsTestMatricesGetSecurity();
    $requestSecurity->option1 = new TestingProjectsTestMatricesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->testingProjectsTestMatricesGet($request, $requestSecurity);

    if ($response->testMatrix !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
