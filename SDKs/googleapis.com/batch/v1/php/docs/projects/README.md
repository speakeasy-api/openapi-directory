# projects

### Available Operations

* [batchProjectsLocationsJobsCreate](#batchprojectslocationsjobscreate) - Create a Job.
* [batchProjectsLocationsJobsList](#batchprojectslocationsjobslist) - List all Jobs for a project within a region.
* [batchProjectsLocationsJobsTaskGroupsTasksList](#batchprojectslocationsjobstaskgroupstaskslist) - List Tasks associated with a job.
* [batchProjectsLocationsList](#batchprojectslocationslist) - Lists information about the supported locations for this service.
* [batchProjectsLocationsOperationsCancel](#batchprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [batchProjectsLocationsOperationsDelete](#batchprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [batchProjectsLocationsOperationsGet](#batchprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [batchProjectsLocationsOperationsList](#batchprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [batchProjectsLocationsStateReport](#batchprojectslocationsstatereport) - Report agent's state, e.g. agent status and tasks information

## batchProjectsLocationsJobsCreate

Create a Job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BatchProjectsLocationsJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobInput;
use \OpenAPI\OpenAPI\Models\Shared\AllocationPolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstancePolicyOrTemplate;
use \OpenAPI\OpenAPI\Models\Shared\InstancePolicy;
use \OpenAPI\OpenAPI\Models\Shared\Accelerator;
use \OpenAPI\OpenAPI\Models\Shared\Disk;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDisk;
use \OpenAPI\OpenAPI\Models\Shared\InstancePolicyProvisioningModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocationPolicy;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPolicy;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterface;
use \OpenAPI\OpenAPI\Models\Shared\PlacementPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccount;
use \OpenAPI\OpenAPI\Models\Shared\LogsPolicy;
use \OpenAPI\OpenAPI\Models\Shared\LogsPolicyDestinationEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobNotification;
use \OpenAPI\OpenAPI\Models\Shared\Message;
use \OpenAPI\OpenAPI\Models\Shared\MessageNewJobStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\MessageNewTaskStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\MessageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobStatus;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatusEvent;
use \OpenAPI\OpenAPI\Models\Shared\TaskExecution;
use \OpenAPI\OpenAPI\Models\Shared\StatusEventTaskStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskGroupStatus;
use \OpenAPI\OpenAPI\Models\Shared\InstanceStatus;
use \OpenAPI\OpenAPI\Models\Shared\InstanceStatusProvisioningModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\Environment;
use \OpenAPI\OpenAPI\Models\Shared\KMSEnvMap;
use \OpenAPI\OpenAPI\Models\Shared\TaskSpec;
use \OpenAPI\OpenAPI\Models\Shared\ComputeResource;
use \OpenAPI\OpenAPI\Models\Shared\LifecyclePolicy;
use \OpenAPI\OpenAPI\Models\Shared\LifecyclePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActionCondition;
use \OpenAPI\OpenAPI\Models\Shared\Runnable;
use \OpenAPI\OpenAPI\Models\Shared\Barrier;
use \OpenAPI\OpenAPI\Models\Shared\Container;
use \OpenAPI\OpenAPI\Models\Shared\Script;
use \OpenAPI\OpenAPI\Models\Shared\Volume;
use \OpenAPI\OpenAPI\Models\Shared\Gcs;
use \OpenAPI\OpenAPI\Models\Shared\Nfs;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchProjectsLocationsJobsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchProjectsLocationsJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->jobInput = new JobInput();
    $request->jobInput->allocationPolicy = new AllocationPolicy();
    $request->jobInput->allocationPolicy->instances = [
        new InstancePolicyOrTemplate(),
    ];
    $request->jobInput->allocationPolicy->labels = [
        'cum' => 'esse',
        'ipsum' => 'excepturi',
        'aspernatur' => 'perferendis',
        'ad' => 'natus',
    ];
    $request->jobInput->allocationPolicy->location = new LocationPolicy();
    $request->jobInput->allocationPolicy->location->allowedLocations = [
        'iste',
    ];
    $request->jobInput->allocationPolicy->network = new NetworkPolicy();
    $request->jobInput->allocationPolicy->network->networkInterfaces = [
        new NetworkInterface(),
    ];
    $request->jobInput->allocationPolicy->placement = new PlacementPolicy();
    $request->jobInput->allocationPolicy->placement->collocation = 'natus';
    $request->jobInput->allocationPolicy->placement->maxDistance = 'laboriosam';
    $request->jobInput->allocationPolicy->serviceAccount = new ServiceAccount();
    $request->jobInput->allocationPolicy->serviceAccount->email = 'Steve.Parker@hotmail.com';
    $request->jobInput->allocationPolicy->serviceAccount->scopes = [
        'iure',
        'saepe',
        'quidem',
    ];
    $request->jobInput->labels = [
        'ipsa' => 'reiciendis',
    ];
    $request->jobInput->logsPolicy = new LogsPolicy();
    $request->jobInput->logsPolicy->destination = LogsPolicyDestinationEnum::PATH;
    $request->jobInput->logsPolicy->logsPath = 'mollitia';
    $request->jobInput->notifications = [
        new JobNotification(),
        new JobNotification(),
        new JobNotification(),
    ];
    $request->jobInput->priority = 'dolores';
    $request->jobInput->status = new JobStatus();
    $request->jobInput->status->runDuration = 'dolorem';
    $request->jobInput->status->state = JobStatusStateEnum::SCHEDULED;
    $request->jobInput->status->statusEvents = [
        new StatusEvent(),
    ];
    $request->jobInput->status->taskGroups = [
        'enim' => new TaskGroupStatus(),
        'omnis' => new TaskGroupStatus(),
        'nemo' => new TaskGroupStatus(),
        'minima' => new TaskGroupStatus(),
    ];
    $request->jobInput->taskGroups = [
        new TaskGroupInput(),
        new TaskGroupInput(),
        new TaskGroupInput(),
    ];
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->fields = 'doloribus';
    $request->jobId = 'sapiente';
    $request->key = 'architecto';
    $request->oauthToken = 'mollitia';
    $request->parent = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->requestId = 'consequuntur';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new BatchProjectsLocationsJobsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->batchProjectsLocationsJobsCreate($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchProjectsLocationsJobsList

List all Jobs for a project within a region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BatchProjectsLocationsJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchProjectsLocationsJobsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchProjectsLocationsJobsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'molestiae';
    $request->filter = 'velit';
    $request->key = 'error';
    $request->oauthToken = 'quia';
    $request->pageSize = 338007;
    $request->pageToken = 'vitae';
    $request->parent = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'animi';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new BatchProjectsLocationsJobsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->batchProjectsLocationsJobsList($request, $requestSecurity);

    if ($response->listJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchProjectsLocationsJobsTaskGroupsTasksList

List Tasks associated with a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BatchProjectsLocationsJobsTaskGroupsTasksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchProjectsLocationsJobsTaskGroupsTasksListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchProjectsLocationsJobsTaskGroupsTasksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'id';
    $request->filter = 'possimus';
    $request->key = 'aut';
    $request->oauthToken = 'quasi';
    $request->pageSize = 622846;
    $request->pageToken = 'temporibus';
    $request->parent = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new BatchProjectsLocationsJobsTaskGroupsTasksListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->batchProjectsLocationsJobsTaskGroupsTasksList($request, $requestSecurity);

    if ($response->listTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BatchProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'ipsa';
    $request->filter = 'omnis';
    $request->key = 'voluptate';
    $request->name = 'Thomas Batz';
    $request->oauthToken = 'maiores';
    $request->pageSize = 120196;
    $request->pageToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolore';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new BatchProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->batchProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BatchProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'accusamus' => 'commodi',
        'repudiandae' => 'quae',
    ];
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestias';
    $request->fields = 'excepturi';
    $request->key = 'pariatur';
    $request->name = 'Irma Ledner DVM';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'incidunt';

    $requestSecurity = new BatchProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->batchProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BatchProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchProjectsLocationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'explicabo';
    $request->key = 'deserunt';
    $request->name = 'Marty Green';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->reason = 'quos';
    $request->requestId = 'perferendis';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'assumenda';

    $requestSecurity = new BatchProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->batchProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BatchProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'excepturi';
    $request->key = 'tempora';
    $request->name = 'Geoffrey Green';
    $request->oauthToken = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'eligendi';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new BatchProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->batchProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BatchProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officia';
    $request->fields = 'dolor';
    $request->filter = 'debitis';
    $request->key = 'a';
    $request->name = 'Arnold Kirlin';
    $request->oauthToken = 'rerum';
    $request->pageSize = 116202;
    $request->pageToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new BatchProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->batchProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchProjectsLocationsStateReport

Report agent's state, e.g. agent status and tasks information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BatchProjectsLocationsStateReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportAgentStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AgentInfo;
use \OpenAPI\OpenAPI\Models\Shared\AgentInfoStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AgentTaskInfo;
use \OpenAPI\OpenAPI\Models\Shared\TaskStatus;
use \OpenAPI\OpenAPI\Models\Shared\TaskStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatusEvent;
use \OpenAPI\OpenAPI\Models\Shared\TaskExecution;
use \OpenAPI\OpenAPI\Models\Shared\StatusEventTaskStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AgentTimingInfo;
use \OpenAPI\OpenAPI\Models\Shared\AgentMetadata;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchProjectsLocationsStateReportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchProjectsLocationsStateReportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->reportAgentStateRequest = new ReportAgentStateRequest();
    $request->reportAgentStateRequest->agentInfo = new AgentInfo();
    $request->reportAgentStateRequest->agentInfo->jobId = 'laborum';
    $request->reportAgentStateRequest->agentInfo->reportTime = 'accusamus';
    $request->reportAgentStateRequest->agentInfo->state = AgentInfoStateEnum::AGENT_STATE_UNSPECIFIED;
    $request->reportAgentStateRequest->agentInfo->taskGroupId = 'occaecati';
    $request->reportAgentStateRequest->agentInfo->tasks = [
        new AgentTaskInfo(),
        new AgentTaskInfo(),
    ];
    $request->reportAgentStateRequest->agentTimingInfo = new AgentTimingInfo();
    $request->reportAgentStateRequest->agentTimingInfo->agentStartupTime = 'accusamus';
    $request->reportAgentStateRequest->agentTimingInfo->bootTime = 'delectus';
    $request->reportAgentStateRequest->agentTimingInfo->scriptStartupTime = 'quidem';
    $request->reportAgentStateRequest->metadata = new AgentMetadata();
    $request->reportAgentStateRequest->metadata->creationTime = 'provident';
    $request->reportAgentStateRequest->metadata->creator = 'nam';
    $request->reportAgentStateRequest->metadata->imageVersion = 'id';
    $request->reportAgentStateRequest->metadata->instance = 'blanditiis';
    $request->reportAgentStateRequest->metadata->instanceId = 'deleniti';
    $request->reportAgentStateRequest->metadata->instancePreemptionNoticeReceived = false;
    $request->reportAgentStateRequest->metadata->osRelease = [
        'amet' => 'deserunt',
        'nisi' => 'vel',
        'natus' => 'omnis',
        'molestiae' => 'perferendis',
    ];
    $request->reportAgentStateRequest->metadata->version = 'nihil';
    $request->reportAgentStateRequest->metadata->zone = 'magnam';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'labore';
    $request->fields = 'labore';
    $request->key = 'suscipit';
    $request->oauthToken = 'natus';
    $request->parent = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new BatchProjectsLocationsStateReportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->batchProjectsLocationsStateReport($request, $requestSecurity);

    if ($response->reportAgentStateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
