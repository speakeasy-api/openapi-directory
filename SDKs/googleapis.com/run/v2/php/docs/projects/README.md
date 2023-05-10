# projects

### Available Operations

* [runProjectsLocationsJobsCreate](#runprojectslocationsjobscreate) - Creates a Job.
* [runProjectsLocationsJobsExecutionsList](#runprojectslocationsjobsexecutionslist) - Lists Executions from a Job.
* [runProjectsLocationsJobsExecutionsTasksList](#runprojectslocationsjobsexecutionstaskslist) - Lists Tasks from an Execution of a Job.
* [runProjectsLocationsJobsList](#runprojectslocationsjobslist) - Lists Jobs.
* [runProjectsLocationsJobsRun](#runprojectslocationsjobsrun) - Triggers creation of a new Execution of this Job.
* [runProjectsLocationsOperationsList](#runprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [runProjectsLocationsOperationsWait](#runprojectslocationsoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [runProjectsLocationsServicesCreate](#runprojectslocationsservicescreate) - Creates a new Service in a given project and location.
* [runProjectsLocationsServicesGetIamPolicy](#runprojectslocationsservicesgetiampolicy) - Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.
* [runProjectsLocationsServicesList](#runprojectslocationsserviceslist) - Lists Services.
* [runProjectsLocationsServicesPatch](#runprojectslocationsservicespatch) - Updates a Service.
* [runProjectsLocationsServicesRevisionsDelete](#runprojectslocationsservicesrevisionsdelete) - Deletes a Revision.
* [runProjectsLocationsServicesRevisionsGet](#runprojectslocationsservicesrevisionsget) - Gets information about a Revision.
* [runProjectsLocationsServicesRevisionsList](#runprojectslocationsservicesrevisionslist) - Lists Revisions from a given Service, or from a given location.
* [runProjectsLocationsServicesSetIamPolicy](#runprojectslocationsservicessetiampolicy) - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* [runProjectsLocationsServicesTestIamPermissions](#runprojectslocationsservicestestiampermissions) - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

## runProjectsLocationsJobsCreate

Creates a Job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2JobInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2BinaryAuthorization;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ExecutionReference;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2JobLaunchStageEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ExecutionTemplate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2TaskTemplate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2Container;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2EnvVar;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2EnvVarSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2SecretKeySelector;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2Probe;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2GRPCAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2HTTPGetAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2HTTPHeader;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2TCPSocketAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ContainerPort;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ResourceRequirements;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2VolumeMount;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2Volume;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2CloudSqlInstance;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2EmptyDirVolumeSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2EmptyDirVolumeSourceMediumEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2SecretVolumeSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2VersionToPath;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2VpcAccess;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2VpcAccessEgressEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2Condition;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionExecutionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionRevisionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsJobsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRunV2JobInput = new GoogleCloudRunV2JobInput();
    $request->googleCloudRunV2JobInput->annotations = [
        'natus' => 'sed',
        'iste' => 'dolor',
    ];
    $request->googleCloudRunV2JobInput->binaryAuthorization = new GoogleCloudRunV2BinaryAuthorization();
    $request->googleCloudRunV2JobInput->binaryAuthorization->breakglassJustification = 'natus';
    $request->googleCloudRunV2JobInput->binaryAuthorization->useDefault = false;
    $request->googleCloudRunV2JobInput->client = 'laboriosam';
    $request->googleCloudRunV2JobInput->clientVersion = 'hic';
    $request->googleCloudRunV2JobInput->labels = [
        'fuga' => 'in',
        'corporis' => 'iste',
        'iure' => 'saepe',
        'quidem' => 'architecto',
    ];
    $request->googleCloudRunV2JobInput->latestCreatedExecution = new GoogleCloudRunV2ExecutionReference();
    $request->googleCloudRunV2JobInput->latestCreatedExecution->completionTime = 'ipsa';
    $request->googleCloudRunV2JobInput->latestCreatedExecution->createTime = 'reiciendis';
    $request->googleCloudRunV2JobInput->latestCreatedExecution->name = 'Shaun Osinski';
    $request->googleCloudRunV2JobInput->launchStage = GoogleCloudRunV2JobLaunchStageEnum::PRELAUNCH;
    $request->googleCloudRunV2JobInput->name = 'Della Halvorson';
    $request->googleCloudRunV2JobInput->template = new GoogleCloudRunV2ExecutionTemplate();
    $request->googleCloudRunV2JobInput->template->annotations = [
        'excepturi' => 'accusantium',
        'iure' => 'culpa',
    ];
    $request->googleCloudRunV2JobInput->template->labels = [
        'sapiente' => 'architecto',
        'mollitia' => 'dolorem',
        'culpa' => 'consequuntur',
        'repellat' => 'mollitia',
    ];
    $request->googleCloudRunV2JobInput->template->parallelism = 581850;
    $request->googleCloudRunV2JobInput->template->taskCount = 253291;
    $request->googleCloudRunV2JobInput->template->template = new GoogleCloudRunV2TaskTemplate();
    $request->googleCloudRunV2JobInput->template->template->containers = [
        new GoogleCloudRunV2Container(),
        new GoogleCloudRunV2Container(),
    ];
    $request->googleCloudRunV2JobInput->template->template->encryptionKey = 'quam';
    $request->googleCloudRunV2JobInput->template->template->executionEnvironment = GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum::EXECUTION_ENVIRONMENT_GEN1;
    $request->googleCloudRunV2JobInput->template->template->maxRetries = 244425;
    $request->googleCloudRunV2JobInput->template->template->serviceAccount = 'error';
    $request->googleCloudRunV2JobInput->template->template->timeout = 'quia';
    $request->googleCloudRunV2JobInput->template->template->volumes = [
        new GoogleCloudRunV2Volume(),
        new GoogleCloudRunV2Volume(),
    ];
    $request->googleCloudRunV2JobInput->template->template->vpcAccess = new GoogleCloudRunV2VpcAccess();
    $request->googleCloudRunV2JobInput->template->template->vpcAccess->connector = 'vitae';
    $request->googleCloudRunV2JobInput->template->template->vpcAccess->egress = GoogleCloudRunV2VpcAccessEgressEnum::PRIVATE_RANGES_ONLY;
    $request->googleCloudRunV2JobInput->terminalCondition = new GoogleCloudRunV2Condition();
    $request->googleCloudRunV2JobInput->terminalCondition->executionReason = GoogleCloudRunV2ConditionExecutionReasonEnum::CANCELLED;
    $request->googleCloudRunV2JobInput->terminalCondition->lastTransitionTime = 'enim';
    $request->googleCloudRunV2JobInput->terminalCondition->message = 'odit';
    $request->googleCloudRunV2JobInput->terminalCondition->reason = GoogleCloudRunV2ConditionReasonEnum::WAITING_FOR_OPERATION;
    $request->googleCloudRunV2JobInput->terminalCondition->revisionReason = GoogleCloudRunV2ConditionRevisionReasonEnum::RESERVE;
    $request->googleCloudRunV2JobInput->terminalCondition->severity = GoogleCloudRunV2ConditionSeverityEnum::INFO;
    $request->googleCloudRunV2JobInput->terminalCondition->state = GoogleCloudRunV2ConditionStateEnum::CONDITION_PENDING;
    $request->googleCloudRunV2JobInput->terminalCondition->type = 'id';
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->fields = 'error';
    $request->jobId = 'temporibus';
    $request->key = 'laborum';
    $request->oauthToken = 'quasi';
    $request->parent = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'nihil';
    $request->validateOnly = false;

    $requestSecurity = new RunProjectsLocationsJobsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsJobsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsJobsExecutionsList

Lists Executions from a Job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsJobsExecutionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsJobsExecutionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsJobsExecutionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'voluptate';
    $request->key = 'cum';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 39187;
    $request->pageToken = 'reprehenderit';
    $request->parent = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->showDeleted = false;
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new RunProjectsLocationsJobsExecutionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsJobsExecutionsList($request, $requestSecurity);

    if ($response->googleCloudRunV2ListExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsJobsExecutionsTasksList

Lists Tasks from an Execution of a Job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsJobsExecutionsTasksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsJobsExecutionsTasksListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsJobsExecutionsTasksListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->oauthToken = 'commodi';
    $request->pageSize = 918236;
    $request->pageToken = 'quae';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->showDeleted = false;
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new RunProjectsLocationsJobsExecutionsTasksListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsJobsExecutionsTasksList($request, $requestSecurity);

    if ($response->googleCloudRunV2ListTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsJobsList

Lists Jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsJobsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsJobsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'voluptates';
    $request->key = 'quasi';
    $request->oauthToken = 'repudiandae';
    $request->pageSize = 575947;
    $request->pageToken = 'veritatis';
    $request->parent = 'itaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->showDeleted = false;
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'consequatur';

    $requestSecurity = new RunProjectsLocationsJobsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsJobsList($request, $requestSecurity);

    if ($response->googleCloudRunV2ListJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsJobsRun

Triggers creation of a new Execution of this Job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsJobsRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2RunJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsJobsRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsJobsRunRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRunV2RunJobRequest = new GoogleCloudRunV2RunJobRequest();
    $request->googleCloudRunV2RunJobRequest->etag = 'quibusdam';
    $request->googleCloudRunV2RunJobRequest->validateOnly = false;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'distinctio';
    $request->fields = 'quibusdam';
    $request->key = 'labore';
    $request->name = 'Tina Jacobi';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new RunProjectsLocationsJobsRunSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsJobsRun($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->fields = 'tempora';
    $request->filter = 'facilis';
    $request->key = 'tempore';
    $request->name = 'Lucia Kemmer';
    $request->oauthToken = 'sint';
    $request->pageSize = 396098;
    $request->pageToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new RunProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsOperationsWait

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsOperationsWaitRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleLongrunningWaitOperationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsOperationsWaitSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsOperationsWaitRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleLongrunningWaitOperationRequest = new GoogleLongrunningWaitOperationRequest();
    $request->googleLongrunningWaitOperationRequest->timeout = 'debitis';
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'in';
    $request->key = 'illum';
    $request->name = 'Jean Buckridge';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new RunProjectsLocationsOperationsWaitSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsOperationsWait($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsServicesCreate

Creates a new Service in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ServiceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2BinaryAuthorization;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ServiceIngressEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ServiceLaunchStageEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2RevisionTemplate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2Container;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2EnvVar;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2EnvVarSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2SecretKeySelector;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2Probe;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2GRPCAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2HTTPGetAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2HTTPHeader;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2TCPSocketAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ContainerPort;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ResourceRequirements;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2VolumeMount;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2RevisionScaling;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2Volume;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2CloudSqlInstance;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2EmptyDirVolumeSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2EmptyDirVolumeSourceMediumEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2SecretVolumeSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2VersionToPath;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2VpcAccess;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2VpcAccessEgressEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2Condition;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionExecutionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionRevisionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2TrafficTarget;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2TrafficTargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsServicesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRunV2ServiceInput = new GoogleCloudRunV2ServiceInput();
    $request->googleCloudRunV2ServiceInput->annotations = [
        'occaecati' => 'enim',
    ];
    $request->googleCloudRunV2ServiceInput->binaryAuthorization = new GoogleCloudRunV2BinaryAuthorization();
    $request->googleCloudRunV2ServiceInput->binaryAuthorization->breakglassJustification = 'accusamus';
    $request->googleCloudRunV2ServiceInput->binaryAuthorization->useDefault = false;
    $request->googleCloudRunV2ServiceInput->client = 'delectus';
    $request->googleCloudRunV2ServiceInput->clientVersion = 'quidem';
    $request->googleCloudRunV2ServiceInput->description = 'provident';
    $request->googleCloudRunV2ServiceInput->ingress = GoogleCloudRunV2ServiceIngressEnum::INGRESS_TRAFFIC_INTERNAL_ONLY;
    $request->googleCloudRunV2ServiceInput->labels = [
        'blanditiis' => 'deleniti',
        'sapiente' => 'amet',
        'deserunt' => 'nisi',
    ];
    $request->googleCloudRunV2ServiceInput->launchStage = GoogleCloudRunV2ServiceLaunchStageEnum::EARLY_ACCESS;
    $request->googleCloudRunV2ServiceInput->name = 'Ms. Arturo Krajcik';
    $request->googleCloudRunV2ServiceInput->template = new GoogleCloudRunV2RevisionTemplate();
    $request->googleCloudRunV2ServiceInput->template->annotations = [
        'id' => 'labore',
        'labore' => 'suscipit',
        'natus' => 'nobis',
    ];
    $request->googleCloudRunV2ServiceInput->template->containers = [
        new GoogleCloudRunV2Container(),
        new GoogleCloudRunV2Container(),
    ];
    $request->googleCloudRunV2ServiceInput->template->encryptionKey = 'vero';
    $request->googleCloudRunV2ServiceInput->template->executionEnvironment = GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum::EXECUTION_ENVIRONMENT_UNSPECIFIED;
    $request->googleCloudRunV2ServiceInput->template->labels = [
        'magnam' => 'et',
    ];
    $request->googleCloudRunV2ServiceInput->template->maxInstanceRequestConcurrency = 569965;
    $request->googleCloudRunV2ServiceInput->template->revision = 'ullam';
    $request->googleCloudRunV2ServiceInput->template->scaling = new GoogleCloudRunV2RevisionScaling();
    $request->googleCloudRunV2ServiceInput->template->scaling->maxInstanceCount = 590873;
    $request->googleCloudRunV2ServiceInput->template->scaling->minInstanceCount = 551816;
    $request->googleCloudRunV2ServiceInput->template->serviceAccount = 'sint';
    $request->googleCloudRunV2ServiceInput->template->sessionAffinity = false;
    $request->googleCloudRunV2ServiceInput->template->timeout = 'accusantium';
    $request->googleCloudRunV2ServiceInput->template->volumes = [
        new GoogleCloudRunV2Volume(),
        new GoogleCloudRunV2Volume(),
        new GoogleCloudRunV2Volume(),
    ];
    $request->googleCloudRunV2ServiceInput->template->vpcAccess = new GoogleCloudRunV2VpcAccess();
    $request->googleCloudRunV2ServiceInput->template->vpcAccess->connector = 'reiciendis';
    $request->googleCloudRunV2ServiceInput->template->vpcAccess->egress = GoogleCloudRunV2VpcAccessEgressEnum::ALL_TRAFFIC;
    $request->googleCloudRunV2ServiceInput->terminalCondition = new GoogleCloudRunV2Condition();
    $request->googleCloudRunV2ServiceInput->terminalCondition->executionReason = GoogleCloudRunV2ConditionExecutionReasonEnum::JOB_STATUS_SERVICE_POLLING_ERROR;
    $request->googleCloudRunV2ServiceInput->terminalCondition->lastTransitionTime = 'eum';
    $request->googleCloudRunV2ServiceInput->terminalCondition->message = 'dolor';
    $request->googleCloudRunV2ServiceInput->terminalCondition->reason = GoogleCloudRunV2ConditionReasonEnum::POSTPONED_RETRY;
    $request->googleCloudRunV2ServiceInput->terminalCondition->revisionReason = GoogleCloudRunV2ConditionRevisionReasonEnum::PENDING;
    $request->googleCloudRunV2ServiceInput->terminalCondition->severity = GoogleCloudRunV2ConditionSeverityEnum::ERROR;
    $request->googleCloudRunV2ServiceInput->terminalCondition->state = GoogleCloudRunV2ConditionStateEnum::STATE_UNSPECIFIED;
    $request->googleCloudRunV2ServiceInput->terminalCondition->type = 'iure';
    $request->googleCloudRunV2ServiceInput->traffic = [
        new GoogleCloudRunV2TrafficTarget(),
        new GoogleCloudRunV2TrafficTarget(),
        new GoogleCloudRunV2TrafficTarget(),
        new GoogleCloudRunV2TrafficTarget(),
    ];
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maxime';
    $request->fields = 'deleniti';
    $request->key = 'facilis';
    $request->oauthToken = 'in';
    $request->parent = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->serviceId = 'repudiandae';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'expedita';
    $request->validateOnly = false;

    $requestSecurity = new RunProjectsLocationsServicesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsServicesCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsServicesGetIamPolicy

Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsServicesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->fields = 'saepe';
    $request->key = 'pariatur';
    $request->oauthToken = 'accusantium';
    $request->optionsRequestedPolicyVersion = 162493;
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->resource = 'natus';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'sunt';

    $requestSecurity = new RunProjectsLocationsServicesGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsServicesGetIamPolicy($request, $requestSecurity);

    if ($response->googleIamV1Policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsServicesList

Lists Services.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsServicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maxime';
    $request->fields = 'ea';
    $request->key = 'excepturi';
    $request->oauthToken = 'odit';
    $request->pageSize = 407183;
    $request->pageToken = 'accusantium';
    $request->parent = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->showDeleted = false;
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new RunProjectsLocationsServicesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsServicesList($request, $requestSecurity);

    if ($response->googleCloudRunV2ListServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsServicesPatch

Updates a Service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ServiceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2BinaryAuthorization;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ServiceIngressEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ServiceLaunchStageEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2RevisionTemplate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2Container;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2EnvVar;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2EnvVarSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2SecretKeySelector;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2Probe;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2GRPCAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2HTTPGetAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2HTTPHeader;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2TCPSocketAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ContainerPort;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ResourceRequirements;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2VolumeMount;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2RevisionScaling;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2Volume;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2CloudSqlInstance;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2EmptyDirVolumeSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2EmptyDirVolumeSourceMediumEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2SecretVolumeSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2VersionToPath;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2VpcAccess;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2VpcAccessEgressEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2Condition;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionExecutionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionRevisionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2TrafficTarget;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2TrafficTargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsServicesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRunV2ServiceInput = new GoogleCloudRunV2ServiceInput();
    $request->googleCloudRunV2ServiceInput->annotations = [
        'nam' => 'eaque',
        'pariatur' => 'nemo',
    ];
    $request->googleCloudRunV2ServiceInput->binaryAuthorization = new GoogleCloudRunV2BinaryAuthorization();
    $request->googleCloudRunV2ServiceInput->binaryAuthorization->breakglassJustification = 'voluptatibus';
    $request->googleCloudRunV2ServiceInput->binaryAuthorization->useDefault = false;
    $request->googleCloudRunV2ServiceInput->client = 'perferendis';
    $request->googleCloudRunV2ServiceInput->clientVersion = 'fugiat';
    $request->googleCloudRunV2ServiceInput->description = 'amet';
    $request->googleCloudRunV2ServiceInput->ingress = GoogleCloudRunV2ServiceIngressEnum::INGRESS_TRAFFIC_UNSPECIFIED;
    $request->googleCloudRunV2ServiceInput->labels = [
        'corporis' => 'hic',
        'libero' => 'nobis',
        'dolores' => 'quis',
        'totam' => 'dignissimos',
    ];
    $request->googleCloudRunV2ServiceInput->launchStage = GoogleCloudRunV2ServiceLaunchStageEnum::LAUNCH_STAGE_UNSPECIFIED;
    $request->googleCloudRunV2ServiceInput->name = 'Mr. Robin Daugherty';
    $request->googleCloudRunV2ServiceInput->template = new GoogleCloudRunV2RevisionTemplate();
    $request->googleCloudRunV2ServiceInput->template->annotations = [
        'dolor' => 'vero',
        'nostrum' => 'hic',
    ];
    $request->googleCloudRunV2ServiceInput->template->containers = [
        new GoogleCloudRunV2Container(),
        new GoogleCloudRunV2Container(),
        new GoogleCloudRunV2Container(),
        new GoogleCloudRunV2Container(),
    ];
    $request->googleCloudRunV2ServiceInput->template->encryptionKey = 'omnis';
    $request->googleCloudRunV2ServiceInput->template->executionEnvironment = GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum::EXECUTION_ENVIRONMENT_GEN2;
    $request->googleCloudRunV2ServiceInput->template->labels = [
        'voluptatem' => 'porro',
        'consequuntur' => 'blanditiis',
        'error' => 'eaque',
    ];
    $request->googleCloudRunV2ServiceInput->template->maxInstanceRequestConcurrency = 577229;
    $request->googleCloudRunV2ServiceInput->template->revision = 'rerum';
    $request->googleCloudRunV2ServiceInput->template->scaling = new GoogleCloudRunV2RevisionScaling();
    $request->googleCloudRunV2ServiceInput->template->scaling->maxInstanceCount = 237893;
    $request->googleCloudRunV2ServiceInput->template->scaling->minInstanceCount = 992397;
    $request->googleCloudRunV2ServiceInput->template->serviceAccount = 'earum';
    $request->googleCloudRunV2ServiceInput->template->sessionAffinity = false;
    $request->googleCloudRunV2ServiceInput->template->timeout = 'modi';
    $request->googleCloudRunV2ServiceInput->template->volumes = [
        new GoogleCloudRunV2Volume(),
        new GoogleCloudRunV2Volume(),
        new GoogleCloudRunV2Volume(),
    ];
    $request->googleCloudRunV2ServiceInput->template->vpcAccess = new GoogleCloudRunV2VpcAccess();
    $request->googleCloudRunV2ServiceInput->template->vpcAccess->connector = 'dolorum';
    $request->googleCloudRunV2ServiceInput->template->vpcAccess->egress = GoogleCloudRunV2VpcAccessEgressEnum::ALL_TRAFFIC;
    $request->googleCloudRunV2ServiceInput->terminalCondition = new GoogleCloudRunV2Condition();
    $request->googleCloudRunV2ServiceInput->terminalCondition->executionReason = GoogleCloudRunV2ConditionExecutionReasonEnum::CANCELLING;
    $request->googleCloudRunV2ServiceInput->terminalCondition->lastTransitionTime = 'provident';
    $request->googleCloudRunV2ServiceInput->terminalCondition->message = 'nobis';
    $request->googleCloudRunV2ServiceInput->terminalCondition->reason = GoogleCloudRunV2ConditionReasonEnum::SECRETS_ACCESS_CHECK_FAILED;
    $request->googleCloudRunV2ServiceInput->terminalCondition->revisionReason = GoogleCloudRunV2ConditionRevisionReasonEnum::MIN_INSTANCES_WARMING;
    $request->googleCloudRunV2ServiceInput->terminalCondition->severity = GoogleCloudRunV2ConditionSeverityEnum::ERROR;
    $request->googleCloudRunV2ServiceInput->terminalCondition->state = GoogleCloudRunV2ConditionStateEnum::CONDITION_RECONCILING;
    $request->googleCloudRunV2ServiceInput->terminalCondition->type = 'aliquid';
    $request->googleCloudRunV2ServiceInput->traffic = [
        new GoogleCloudRunV2TrafficTarget(),
    ];
    $request->accessToken = 'dolorem';
    $request->allowMissing = false;
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'ipsum';
    $request->key = 'hic';
    $request->name = 'Felipe Klein';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'veritatis';
    $request->validateOnly = false;

    $requestSecurity = new RunProjectsLocationsServicesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsServicesPatch($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsServicesRevisionsDelete

Deletes a Revision.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesRevisionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesRevisionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsServicesRevisionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odio';
    $request->etag = 'quaerat';
    $request->fields = 'accusamus';
    $request->key = 'quidem';
    $request->name = 'Hector Mosciski';
    $request->oauthToken = 'sit';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'soluta';
    $request->validateOnly = false;

    $requestSecurity = new RunProjectsLocationsServicesRevisionsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsServicesRevisionsDelete($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsServicesRevisionsGet

Gets information about a Revision.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesRevisionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesRevisionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsServicesRevisionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorum';
    $request->fields = 'deleniti';
    $request->key = 'omnis';
    $request->name = 'Kelvin Zboncak';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'eius';

    $requestSecurity = new RunProjectsLocationsServicesRevisionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsServicesRevisionsGet($request, $requestSecurity);

    if ($response->googleCloudRunV2Revision !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsServicesRevisionsList

Lists Revisions from a given Service, or from a given location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesRevisionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesRevisionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsServicesRevisionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'optio';
    $request->fields = 'accusamus';
    $request->key = 'ad';
    $request->oauthToken = 'saepe';
    $request->pageSize = 383464;
    $request->pageToken = 'deserunt';
    $request->parent = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->showDeleted = false;
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new RunProjectsLocationsServicesRevisionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsServicesRevisionsList($request, $requestSecurity);

    if ($response->googleCloudRunV2ListRevisionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsServicesSetIamPolicy

Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1Policy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1Binding;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeExpr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsServicesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest();
    $request->googleIamV1SetIamPolicyRequest->policy = new GoogleIamV1Policy();
    $request->googleIamV1SetIamPolicyRequest->policy->auditConfigs = [
        new GoogleIamV1AuditConfig(),
    ];
    $request->googleIamV1SetIamPolicyRequest->policy->bindings = [
        new GoogleIamV1Binding(),
        new GoogleIamV1Binding(),
        new GoogleIamV1Binding(),
        new GoogleIamV1Binding(),
    ];
    $request->googleIamV1SetIamPolicyRequest->policy->etag = 'quaerat';
    $request->googleIamV1SetIamPolicyRequest->policy->version = 273542;
    $request->googleIamV1SetIamPolicyRequest->updateMask = 'vel';
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'qui';
    $request->fields = 'dolorum';
    $request->key = 'a';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'harum';
    $request->resource = 'iusto';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quisquam';

    $requestSecurity = new RunProjectsLocationsServicesSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsServicesSetIamPolicy($request, $requestSecurity);

    if ($response->googleIamV1Policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runProjectsLocationsServicesTestIamPermissions

Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsServicesTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsServicesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest();
    $request->googleIamV1TestIamPermissionsRequest->permissions = [
        'tempore',
    ];
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->fields = 'dolorem';
    $request->key = 'sapiente';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->resource = 'sit';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'neque';

    $requestSecurity = new RunProjectsLocationsServicesTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsServicesTestIamPermissions($request, $requestSecurity);

    if ($response->googleIamV1TestIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
