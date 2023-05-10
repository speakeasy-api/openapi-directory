# projects

### Available Operations

* [cloudtasksProjectsLocationsList](#cloudtasksprojectslocationslist) - Lists information about the supported locations for this service.
* [cloudtasksProjectsLocationsQueuesCreate](#cloudtasksprojectslocationsqueuescreate) - Creates a queue. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.
* [cloudtasksProjectsLocationsQueuesGetIamPolicy](#cloudtasksprojectslocationsqueuesgetiampolicy) - Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent: * `cloudtasks.queues.getIamPolicy`
* [cloudtasksProjectsLocationsQueuesList](#cloudtasksprojectslocationsqueueslist) - Lists queues. Queues are returned in lexicographical order.
* [cloudtasksProjectsLocationsQueuesPatch](#cloudtasksprojectslocationsqueuespatch) - Updates a queue. This method creates the queue if it does not exist and updates the queue if it does exist. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.
* [cloudtasksProjectsLocationsQueuesPause](#cloudtasksprojectslocationsqueuespause) - Pauses the queue. If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.
* [cloudtasksProjectsLocationsQueuesPurge](#cloudtasksprojectslocationsqueuespurge) - Purges a queue by deleting all of its tasks. All tasks created before this method is called are permanently deleted. Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.
* [cloudtasksProjectsLocationsQueuesResume](#cloudtasksprojectslocationsqueuesresume) - Resume a queue. This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is stored in the queue's state; after calling this method it will be set to RUNNING. WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).
* [cloudtasksProjectsLocationsQueuesSetIamPolicy](#cloudtasksprojectslocationsqueuessetiampolicy) - Sets the access control policy for a Queue. Replaces any existing policy. Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent: * `cloudtasks.queues.setIamPolicy`
* [cloudtasksProjectsLocationsQueuesTasksAcknowledge](#cloudtasksprojectslocationsqueuestasksacknowledge) - Acknowledges a pull task. The worker, that is, the entity that leased this task must call this method to indicate that the work associated with the task has finished. The worker must acknowledge a task within the lease_duration or the lease will expire and the task will become available to be leased again. After the task is acknowledged, it will not be returned by a later LeaseTasks, GetTask, or ListTasks.
* [cloudtasksProjectsLocationsQueuesTasksBuffer](#cloudtasksprojectslocationsqueuestasksbuffer) - Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP target. To create the task with a custom ID, use the following format and set TASK_ID to your desired ID: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the task with an automatically generated ID, use the following format: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer. Note: This feature is in its experimental stage. You must request access to the API through the [Cloud Tasks BufferTask Experiment Signup form](https://forms.gle/X8Zr5hiXH5tTGFqh8).
* [cloudtasksProjectsLocationsQueuesTasksCancelLease](#cloudtasksprojectslocationsqueuestaskscancellease) - Cancel a pull task's lease. The worker can use this method to cancel a task's lease by setting its schedule_time to now. This will make the task available to be leased to the next caller of LeaseTasks.
* [cloudtasksProjectsLocationsQueuesTasksCreate](#cloudtasksprojectslocationsqueuestaskscreate) - Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * For App Engine queues, the maximum task size is 100KB. * For pull queues, the maximum task size is 1MB.
* [cloudtasksProjectsLocationsQueuesTasksDelete](#cloudtasksprojectslocationsqueuestasksdelete) - Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has completed successfully or permanently failed.
* [cloudtasksProjectsLocationsQueuesTasksGet](#cloudtasksprojectslocationsqueuestasksget) - Gets a task.
* [cloudtasksProjectsLocationsQueuesTasksLease](#cloudtasksprojectslocationsqueuestaskslease) - Leases tasks from a pull queue for lease_duration. This method is invoked by the worker to obtain a lease. The worker must acknowledge the task via AcknowledgeTask after they have performed the work associated with the task. The payload is intended to store data that the worker needs to perform the work associated with the task. To return the payloads in the response, set response_view to FULL. A maximum of 10 qps of LeaseTasks requests are allowed per queue. RESOURCE_EXHAUSTED is returned when this limit is exceeded. RESOURCE_EXHAUSTED is also returned when max_tasks_dispatched_per_second is exceeded.
* [cloudtasksProjectsLocationsQueuesTasksList](#cloudtasksprojectslocationsqueuestaskslist) - Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.
* [cloudtasksProjectsLocationsQueuesTasksRenewLease](#cloudtasksprojectslocationsqueuestasksrenewlease) - Renew the current lease of a pull task. The worker can use this method to extend the lease by a new duration, starting from now. The new task lease will be returned in the task's schedule_time.
* [cloudtasksProjectsLocationsQueuesTasksRun](#cloudtasksprojectslocationsqueuestasksrun) - Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed. RunTask cannot be called on a pull task.
* [cloudtasksProjectsLocationsQueuesTestIamPermissions](#cloudtasksprojectslocationsqueuestestiampermissions) - Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## cloudtasksProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'quidem';
    $request->filter = 'architecto';
    $request->key = 'ipsa';
    $request->name = 'Carlton O'Hara';
    $request->oauthToken = 'dolorem';
    $request->pageSize = 358152;
    $request->pageToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new CloudtasksProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtasksProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtasksProjectsLocationsQueuesCreate

Creates a queue. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueueInput;
use \OpenAPI\OpenAPI\Models\Shared\AppEngineHttpTarget;
use \OpenAPI\OpenAPI\Models\Shared\AppEngineRouting;
use \OpenAPI\OpenAPI\Models\Shared\HttpTarget;
use \OpenAPI\OpenAPI\Models\Shared\HeaderOverride;
use \OpenAPI\OpenAPI\Models\Shared\Header;
use \OpenAPI\OpenAPI\Models\Shared\HttpTargetHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\OAuthToken;
use \OpenAPI\OpenAPI\Models\Shared\OidcToken;
use \OpenAPI\OpenAPI\Models\Shared\UriOverride;
use \OpenAPI\OpenAPI\Models\Shared\PathOverride;
use \OpenAPI\OpenAPI\Models\Shared\QueryOverride;
use \OpenAPI\OpenAPI\Models\Shared\UriOverrideSchemeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UriOverrideUriOverrideEnforceModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RateLimits;
use \OpenAPI\OpenAPI\Models\Shared\RetryConfig;
use \OpenAPI\OpenAPI\Models\Shared\QueueStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->queueInput = new QueueInput();
    $request->queueInput->appEngineHttpTarget = new AppEngineHttpTarget();
    $request->queueInput->appEngineHttpTarget->appEngineRoutingOverride = new AppEngineRouting();
    $request->queueInput->appEngineHttpTarget->appEngineRoutingOverride->host = 'minima';
    $request->queueInput->appEngineHttpTarget->appEngineRoutingOverride->instance = 'excepturi';
    $request->queueInput->appEngineHttpTarget->appEngineRoutingOverride->service = 'accusantium';
    $request->queueInput->appEngineHttpTarget->appEngineRoutingOverride->version = 'iure';
    $request->queueInput->httpTarget = new HttpTarget();
    $request->queueInput->httpTarget->headerOverrides = [
        new HeaderOverride(),
        new HeaderOverride(),
        new HeaderOverride(),
    ];
    $request->queueInput->httpTarget->httpMethod = HttpTargetHttpMethodEnum::OPTIONS;
    $request->queueInput->httpTarget->oauthToken = new OAuthToken();
    $request->queueInput->httpTarget->oauthToken->scope = 'sapiente';
    $request->queueInput->httpTarget->oauthToken->serviceAccountEmail = 'architecto';
    $request->queueInput->httpTarget->oidcToken = new OidcToken();
    $request->queueInput->httpTarget->oidcToken->audience = 'mollitia';
    $request->queueInput->httpTarget->oidcToken->serviceAccountEmail = 'dolorem';
    $request->queueInput->httpTarget->uriOverride = new UriOverride();
    $request->queueInput->httpTarget->uriOverride->host = 'culpa';
    $request->queueInput->httpTarget->uriOverride->pathOverride = new PathOverride();
    $request->queueInput->httpTarget->uriOverride->pathOverride->path = 'consequuntur';
    $request->queueInput->httpTarget->uriOverride->port = 'repellat';
    $request->queueInput->httpTarget->uriOverride->queryOverride = new QueryOverride();
    $request->queueInput->httpTarget->uriOverride->queryOverride->queryParams = 'mollitia';
    $request->queueInput->httpTarget->uriOverride->scheme = UriOverrideSchemeEnum::HTTP;
    $request->queueInput->httpTarget->uriOverride->uriOverrideEnforceMode = UriOverrideUriOverrideEnforceModeEnum::URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED;
    $request->queueInput->name = 'Claudia Krajcik';
    $request->queueInput->pullTarget = [
        'quis' => 'vitae',
    ];
    $request->queueInput->purgeTime = 'laborum';
    $request->queueInput->rateLimits = new RateLimits();
    $request->queueInput->rateLimits->maxBurstSize = 656330;
    $request->queueInput->rateLimits->maxConcurrentTasks = 317202;
    $request->queueInput->rateLimits->maxTasksDispatchedPerSecond = 1381.83;
    $request->queueInput->retryConfig = new RetryConfig();
    $request->queueInput->retryConfig->maxAttempts = 778346;
    $request->queueInput->retryConfig->maxBackoff = 'sequi';
    $request->queueInput->retryConfig->maxDoublings = 949572;
    $request->queueInput->retryConfig->maxRetryDuration = 'ipsam';
    $request->queueInput->retryConfig->minBackoff = 'id';
    $request->queueInput->retryConfig->unlimitedAttempts = false;
    $request->queueInput->state = QueueStateEnum::DISABLED;
    $request->queueInput->taskTtl = 'aut';
    $request->queueInput->tombstoneTtl = 'quasi';
    $request->accessToken = 'error';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laborum';
    $request->fields = 'quasi';
    $request->key = 'reiciendis';
    $request->oauthToken = 'voluptatibus';
    $request->parent = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new CloudtasksProjectsLocationsQueuesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtasksProjectsLocationsQueuesCreate($request, $requestSecurity);

    if ($response->queue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtasksProjectsLocationsQueuesGetIamPolicy

Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent: * `cloudtasks.queues.getIamPolicy`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPolicyOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->getIamPolicyRequest = new GetIamPolicyRequest();
    $request->getIamPolicyRequest->options = new GetPolicyOptions();
    $request->getIamPolicyRequest->options->requestedPolicyVersion = 604846;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'doloremque';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->resource = 'dicta';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'dolore';

    $requestSecurity = new CloudtasksProjectsLocationsQueuesGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtasksProjectsLocationsQueuesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtasksProjectsLocationsQueuesList

Lists queues. Queues are returned in lexicographical order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->filter = 'commodi';
    $request->key = 'repudiandae';
    $request->oauthToken = 'quae';
    $request->pageSize = 216822;
    $request->pageToken = 'quidem';
    $request->parent = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->readMask = 'pariatur';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new CloudtasksProjectsLocationsQueuesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtasksProjectsLocationsQueuesList($request, $requestSecurity);

    if ($response->listQueuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtasksProjectsLocationsQueuesPatch

Updates a queue. This method creates the queue if it does not exist and updates the queue if it does exist. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueueInput;
use \OpenAPI\OpenAPI\Models\Shared\AppEngineHttpTarget;
use \OpenAPI\OpenAPI\Models\Shared\AppEngineRouting;
use \OpenAPI\OpenAPI\Models\Shared\HttpTarget;
use \OpenAPI\OpenAPI\Models\Shared\HeaderOverride;
use \OpenAPI\OpenAPI\Models\Shared\Header;
use \OpenAPI\OpenAPI\Models\Shared\HttpTargetHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\OAuthToken;
use \OpenAPI\OpenAPI\Models\Shared\OidcToken;
use \OpenAPI\OpenAPI\Models\Shared\UriOverride;
use \OpenAPI\OpenAPI\Models\Shared\PathOverride;
use \OpenAPI\OpenAPI\Models\Shared\QueryOverride;
use \OpenAPI\OpenAPI\Models\Shared\UriOverrideSchemeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UriOverrideUriOverrideEnforceModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RateLimits;
use \OpenAPI\OpenAPI\Models\Shared\RetryConfig;
use \OpenAPI\OpenAPI\Models\Shared\QueueStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->queueInput = new QueueInput();
    $request->queueInput->appEngineHttpTarget = new AppEngineHttpTarget();
    $request->queueInput->appEngineHttpTarget->appEngineRoutingOverride = new AppEngineRouting();
    $request->queueInput->appEngineHttpTarget->appEngineRoutingOverride->host = 'voluptates';
    $request->queueInput->appEngineHttpTarget->appEngineRoutingOverride->instance = 'quasi';
    $request->queueInput->appEngineHttpTarget->appEngineRoutingOverride->service = 'repudiandae';
    $request->queueInput->appEngineHttpTarget->appEngineRoutingOverride->version = 'sint';
    $request->queueInput->httpTarget = new HttpTarget();
    $request->queueInput->httpTarget->headerOverrides = [
        new HeaderOverride(),
    ];
    $request->queueInput->httpTarget->httpMethod = HttpTargetHttpMethodEnum::OPTIONS;
    $request->queueInput->httpTarget->oauthToken = new OAuthToken();
    $request->queueInput->httpTarget->oauthToken->scope = 'incidunt';
    $request->queueInput->httpTarget->oauthToken->serviceAccountEmail = 'enim';
    $request->queueInput->httpTarget->oidcToken = new OidcToken();
    $request->queueInput->httpTarget->oidcToken->audience = 'consequatur';
    $request->queueInput->httpTarget->oidcToken->serviceAccountEmail = 'est';
    $request->queueInput->httpTarget->uriOverride = new UriOverride();
    $request->queueInput->httpTarget->uriOverride->host = 'quibusdam';
    $request->queueInput->httpTarget->uriOverride->pathOverride = new PathOverride();
    $request->queueInput->httpTarget->uriOverride->pathOverride->path = 'explicabo';
    $request->queueInput->httpTarget->uriOverride->port = 'deserunt';
    $request->queueInput->httpTarget->uriOverride->queryOverride = new QueryOverride();
    $request->queueInput->httpTarget->uriOverride->queryOverride->queryParams = 'distinctio';
    $request->queueInput->httpTarget->uriOverride->scheme = UriOverrideSchemeEnum::HTTPS;
    $request->queueInput->httpTarget->uriOverride->uriOverrideEnforceMode = UriOverrideUriOverrideEnforceModeEnum::URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED;
    $request->queueInput->name = 'Tina Jacobi';
    $request->queueInput->pullTarget = [
        'magni' => 'assumenda',
    ];
    $request->queueInput->purgeTime = 'ipsam';
    $request->queueInput->rateLimits = new RateLimits();
    $request->queueInput->rateLimits->maxBurstSize = 4695;
    $request->queueInput->rateLimits->maxConcurrentTasks = 146441;
    $request->queueInput->rateLimits->maxTasksDispatchedPerSecond = 6778.17;
    $request->queueInput->retryConfig = new RetryConfig();
    $request->queueInput->retryConfig->maxAttempts = 569618;
    $request->queueInput->retryConfig->maxBackoff = 'tempora';
    $request->queueInput->retryConfig->maxDoublings = 703737;
    $request->queueInput->retryConfig->maxRetryDuration = 'tempore';
    $request->queueInput->retryConfig->minBackoff = 'labore';
    $request->queueInput->retryConfig->unlimitedAttempts = false;
    $request->queueInput->state = QueueStateEnum::DISABLED;
    $request->queueInput->taskTtl = 'eum';
    $request->queueInput->tombstoneTtl = 'non';
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'provident';
    $request->key = 'necessitatibus';
    $request->name = 'Luke Fadel';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->updateMask = 'in';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new CloudtasksProjectsLocationsQueuesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtasksProjectsLocationsQueuesPatch($request, $requestSecurity);

    if ($response->queue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtasksProjectsLocationsQueuesPause

Pauses the queue. If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesPauseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesPauseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesPauseRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'magnam' => 'cumque',
    ];
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'laborum';
    $request->key = 'accusamus';
    $request->name = 'Toni Haley';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'id';

    $requestSecurity = new CloudtasksProjectsLocationsQueuesPauseSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtasksProjectsLocationsQueuesPause($request, $requestSecurity);

    if ($response->queue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtasksProjectsLocationsQueuesPurge

Purges a queue by deleting all of its tasks. All tasks created before this method is called are permanently deleted. Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesPurgeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesPurgeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesPurgeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'sapiente' => 'amet',
        'deserunt' => 'nisi',
        'vel' => 'natus',
    ];
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->fields = 'nihil';
    $request->key = 'magnam';
    $request->name = 'Alfonso Green';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new CloudtasksProjectsLocationsQueuesPurgeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtasksProjectsLocationsQueuesPurge($request, $requestSecurity);

    if ($response->queue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtasksProjectsLocationsQueuesResume

Resume a queue. This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is stored in the queue's state; after calling this method it will be set to RUNNING. WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesResumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesResumeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesResumeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'magnam' => 'et',
    ];
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'quos';
    $request->key = 'sint';
    $request->name = 'Angie Wisozk';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new CloudtasksProjectsLocationsQueuesResumeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtasksProjectsLocationsQueuesResume($request, $requestSecurity);

    if ($response->queue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtasksProjectsLocationsQueuesSetIamPolicy

Sets the access control policy for a Queue. Replaces any existing policy. Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent: * `cloudtasks.queues.setIamPolicy`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'iure';
    $request->setIamPolicyRequest->policy->version = 984043;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maxime';
    $request->fields = 'deleniti';
    $request->key = 'facilis';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->resource = 'architecto';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'ullam';

    $requestSecurity = new CloudtasksProjectsLocationsQueuesSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtasksProjectsLocationsQueuesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtasksProjectsLocationsQueuesTasksAcknowledge

Acknowledges a pull task. The worker, that is, the entity that leased this task must call this method to indicate that the work associated with the task has finished. The worker must acknowledge a task within the lease_duration or the lease will expire and the task will become available to be leased again. After the task is acknowledged, it will not be returned by a later LeaseTasks, GetTask, or ListTasks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksAcknowledgeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AcknowledgeTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksAcknowledgeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesTasksAcknowledgeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->acknowledgeTaskRequest = new AcknowledgeTaskRequest();
    $request->acknowledgeTaskRequest->scheduleTime = 'nihil';
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->fields = 'saepe';
    $request->key = 'pariatur';
    $request->name = 'Kathryn Lang';
    $request->oauthToken = 'sunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new CloudtasksProjectsLocationsQueuesTasksAcknowledgeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtasksProjectsLocationsQueuesTasksAcknowledge($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtasksProjectsLocationsQueuesTasksBuffer

Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP target. To create the task with a custom ID, use the following format and set TASK_ID to your desired ID: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the task with an automatically generated ID, use the following format: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer. Note: This feature is in its experimental stage. You must request access to the API through the [Cloud Tasks BufferTask Experiment Signup form](https://forms.gle/X8Zr5hiXH5tTGFqh8).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksBufferRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BufferTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\HttpBody;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksBufferSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesTasksBufferRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->bufferTaskRequest = new BufferTaskRequest();
    $request->bufferTaskRequest->body = new HttpBody();
    $request->bufferTaskRequest->body->contentType = 'ea';
    $request->bufferTaskRequest->body->data = 'excepturi';
    $request->bufferTaskRequest->body->extensions = [
        [
            'accusantium' => 'ab',
            'maiores' => 'quidem',
        ],
    ];
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'autem';
    $request->fields = 'nam';
    $request->key = 'eaque';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->queue = 'nemo';
    $request->quotaUser = 'voluptatibus';
    $request->taskId = 'perferendis';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new CloudtasksProjectsLocationsQueuesTasksBufferSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtasksProjectsLocationsQueuesTasksBuffer($request, $requestSecurity);

    if ($response->bufferTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtasksProjectsLocationsQueuesTasksCancelLease

Cancel a pull task's lease. The worker can use this method to cancel a task's lease by setting its schedule_time to now. This will make the task available to be leased to the next caller of LeaseTasks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksCancelLeaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CancelLeaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelLeaseRequestResponseViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksCancelLeaseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesTasksCancelLeaseRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->cancelLeaseRequest = new CancelLeaseRequest();
    $request->cancelLeaseRequest->responseView = CancelLeaseRequestResponseViewEnum::FULL;
    $request->cancelLeaseRequest->scheduleTime = 'corporis';
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nobis';
    $request->fields = 'dolores';
    $request->key = 'quis';
    $request->name = 'Lance Becker';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'minus';

    $requestSecurity = new CloudtasksProjectsLocationsQueuesTasksCancelLeaseSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtasksProjectsLocationsQueuesTasksCancelLease($request, $requestSecurity);

    if ($response->task !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtasksProjectsLocationsQueuesTasksCreate

Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * For App Engine queues, the maximum task size is 100KB. * For pull queues, the maximum task size is 1MB.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTaskRequestResponseViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\Task;
use \OpenAPI\OpenAPI\Models\Shared\AppEngineHttpRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppEngineRouting;
use \OpenAPI\OpenAPI\Models\Shared\AppEngineHttpRequestHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpRequest;
use \OpenAPI\OpenAPI\Models\Shared\HttpRequestHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\OAuthToken;
use \OpenAPI\OpenAPI\Models\Shared\OidcToken;
use \OpenAPI\OpenAPI\Models\Shared\PullMessage;
use \OpenAPI\OpenAPI\Models\Shared\TaskStatus;
use \OpenAPI\OpenAPI\Models\Shared\AttemptStatus;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\TaskViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesTasksCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->createTaskRequest = new CreateTaskRequest();
    $request->createTaskRequest->responseView = CreateTaskRequestResponseViewEnum::VIEW_UNSPECIFIED;
    $request->createTaskRequest->task = new Task();
    $request->createTaskRequest->task->appEngineHttpRequest = new AppEngineHttpRequest();
    $request->createTaskRequest->task->appEngineHttpRequest->appEngineRouting = new AppEngineRouting();
    $request->createTaskRequest->task->appEngineHttpRequest->appEngineRouting->host = 'vero';
    $request->createTaskRequest->task->appEngineHttpRequest->appEngineRouting->instance = 'nostrum';
    $request->createTaskRequest->task->appEngineHttpRequest->appEngineRouting->service = 'hic';
    $request->createTaskRequest->task->appEngineHttpRequest->appEngineRouting->version = 'recusandae';
    $request->createTaskRequest->task->appEngineHttpRequest->headers = [
        'facilis' => 'perspiciatis',
        'voluptatem' => 'porro',
        'consequuntur' => 'blanditiis',
    ];
    $request->createTaskRequest->task->appEngineHttpRequest->httpMethod = AppEngineHttpRequestHttpMethodEnum::PUT;
    $request->createTaskRequest->task->appEngineHttpRequest->payload = 'eaque';
    $request->createTaskRequest->task->appEngineHttpRequest->relativeUrl = 'occaecati';
    $request->createTaskRequest->task->createTime = 'rerum';
    $request->createTaskRequest->task->httpRequest = new HttpRequest();
    $request->createTaskRequest->task->httpRequest->body = 'adipisci';
    $request->createTaskRequest->task->httpRequest->headers = [
        'earum' => 'modi',
        'iste' => 'dolorum',
        'deleniti' => 'pariatur',
        'provident' => 'nobis',
    ];
    $request->createTaskRequest->task->httpRequest->httpMethod = HttpRequestHttpMethodEnum::DELETE;
    $request->createTaskRequest->task->httpRequest->oauthToken = new OAuthToken();
    $request->createTaskRequest->task->httpRequest->oauthToken->scope = 'delectus';
    $request->createTaskRequest->task->httpRequest->oauthToken->serviceAccountEmail = 'quaerat';
    $request->createTaskRequest->task->httpRequest->oidcToken = new OidcToken();
    $request->createTaskRequest->task->httpRequest->oidcToken->audience = 'quos';
    $request->createTaskRequest->task->httpRequest->oidcToken->serviceAccountEmail = 'aliquid';
    $request->createTaskRequest->task->httpRequest->url = 'dolorem';
    $request->createTaskRequest->task->name = 'Rosa Dibbert';
    $request->createTaskRequest->task->pullMessage = new PullMessage();
    $request->createTaskRequest->task->pullMessage->payload = 'excepturi';
    $request->createTaskRequest->task->pullMessage->tag = 'cum';
    $request->createTaskRequest->task->scheduleTime = 'voluptate';
    $request->createTaskRequest->task->status = new TaskStatus();
    $request->createTaskRequest->task->status->attemptDispatchCount = 490459;
    $request->createTaskRequest->task->status->attemptResponseCount = 970237;
    $request->createTaskRequest->task->status->firstAttemptStatus = new AttemptStatus();
    $request->createTaskRequest->task->status->firstAttemptStatus->dispatchTime = 'amet';
    $request->createTaskRequest->task->status->firstAttemptStatus->responseStatus = new Status();
    $request->createTaskRequest->task->status->firstAttemptStatus->responseStatus->code = 680545;
    $request->createTaskRequest->task->status->firstAttemptStatus->responseStatus->details = [
        [
            'ipsa' => 'ipsa',
        ],
        [
            'odio' => 'quaerat',
            'accusamus' => 'quidem',
        ],
    ];
    $request->createTaskRequest->task->status->firstAttemptStatus->responseStatus->message = 'voluptatibus';
    $request->createTaskRequest->task->status->firstAttemptStatus->responseTime = 'voluptas';
    $request->createTaskRequest->task->status->firstAttemptStatus->scheduleTime = 'natus';
    $request->createTaskRequest->task->status->lastAttemptStatus = new AttemptStatus();
    $request->createTaskRequest->task->status->lastAttemptStatus->dispatchTime = 'eos';
    $request->createTaskRequest->task->status->lastAttemptStatus->responseStatus = new Status();
    $request->createTaskRequest->task->status->lastAttemptStatus->responseStatus->code = 542499;
    $request->createTaskRequest->task->status->lastAttemptStatus->responseStatus->details = [
        [
            'ab' => 'soluta',
            'dolorum' => 'iusto',
            'voluptate' => 'dolorum',
            'deleniti' => 'omnis',
        ],
    ];
    $request->createTaskRequest->task->status->lastAttemptStatus->responseStatus->message = 'necessitatibus';
    $request->createTaskRequest->task->status->lastAttemptStatus->responseTime = 'distinctio';
    $request->createTaskRequest->task->status->lastAttemptStatus->scheduleTime = 'asperiores';
    $request->createTaskRequest->task->view = TaskViewEnum::BASIC;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'id';
    $request->fields = 'saepe';
    $request->key = 'eius';
    $request->oauthToken = 'aspernatur';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new CloudtasksProjectsLocationsQueuesTasksCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtasksProjectsLocationsQueuesTasksCreate($request, $requestSecurity);

    if ($response->task !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtasksProjectsLocationsQueuesTasksDelete

Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has completed successfully or permanently failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesTasksDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'provident';
    $request->key = 'minima';
    $request->name = 'Dr. Jimmie Murphy';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'officiis';

    $requestSecurity = new CloudtasksProjectsLocationsQueuesTasksDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtasksProjectsLocationsQueuesTasksDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtasksProjectsLocationsQueuesTasksGet

Gets a task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesTasksGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'harum';
    $request->key = 'iusto';
    $request->name = 'Rosalie White';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->responseView = CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum::VIEW_UNSPECIFIED;
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new CloudtasksProjectsLocationsQueuesTasksGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtasksProjectsLocationsQueuesTasksGet($request, $requestSecurity);

    if ($response->task !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtasksProjectsLocationsQueuesTasksLease

Leases tasks from a pull queue for lease_duration. This method is invoked by the worker to obtain a lease. The worker must acknowledge the task via AcknowledgeTask after they have performed the work associated with the task. The payload is intended to store data that the worker needs to perform the work associated with the task. To return the payloads in the response, set response_view to FULL. A maximum of 10 qps of LeaseTasks requests are allowed per queue. RESOURCE_EXHAUSTED is returned when this limit is exceeded. RESOURCE_EXHAUSTED is also returned when max_tasks_dispatched_per_second is exceeded.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksLeaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LeaseTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\LeaseTasksRequestResponseViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksLeaseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesTasksLeaseRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->leaseTasksRequest = new LeaseTasksRequest();
    $request->leaseTasksRequest->filter = 'nihil';
    $request->leaseTasksRequest->leaseDuration = 'sit';
    $request->leaseTasksRequest->maxTasks = 711584;
    $request->leaseTasksRequest->responseView = LeaseTasksRequestResponseViewEnum::VIEW_UNSPECIFIED;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'libero';
    $request->fields = 'voluptas';
    $request->key = 'deserunt';
    $request->oauthToken = 'quam';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new CloudtasksProjectsLocationsQueuesTasksLeaseSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtasksProjectsLocationsQueuesTasksLease($request, $requestSecurity);

    if ($response->leaseTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtasksProjectsLocationsQueuesTasksList

Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesTasksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'laborum';
    $request->key = 'totam';
    $request->oauthToken = 'incidunt';
    $request->pageSize = 132068;
    $request->pageToken = 'dolores';
    $request->parent = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->responseView = CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum::BASIC;
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestias';

    $requestSecurity = new CloudtasksProjectsLocationsQueuesTasksListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtasksProjectsLocationsQueuesTasksList($request, $requestSecurity);

    if ($response->listTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtasksProjectsLocationsQueuesTasksRenewLease

Renew the current lease of a pull task. The worker can use this method to extend the lease by a new duration, starting from now. The new task lease will be returned in the task's schedule_time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksRenewLeaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RenewLeaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\RenewLeaseRequestResponseViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksRenewLeaseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesTasksRenewLeaseRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->renewLeaseRequest = new RenewLeaseRequest();
    $request->renewLeaseRequest->leaseDuration = 'qui';
    $request->renewLeaseRequest->responseView = RenewLeaseRequestResponseViewEnum::VIEW_UNSPECIFIED;
    $request->renewLeaseRequest->scheduleTime = 'fugit';
    $request->accessToken = 'magni';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sunt';
    $request->fields = 'ullam';
    $request->key = 'nam';
    $request->name = 'George Runolfsdottir';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new CloudtasksProjectsLocationsQueuesTasksRenewLeaseSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtasksProjectsLocationsQueuesTasksRenewLease($request, $requestSecurity);

    if ($response->task !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtasksProjectsLocationsQueuesTasksRun

Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed. RunTask cannot be called on a pull task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RunTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\RunTaskRequestResponseViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesTasksRunRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->runTaskRequest = new RunTaskRequest();
    $request->runTaskRequest->responseView = RunTaskRequestResponseViewEnum::BASIC;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aperiam';
    $request->fields = 'delectus';
    $request->key = 'dolorem';
    $request->name = 'Clara Fisher Jr.';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quas';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'consequatur';

    $requestSecurity = new CloudtasksProjectsLocationsQueuesTasksRunSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtasksProjectsLocationsQueuesTasksRun($request, $requestSecurity);

    if ($response->task !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtasksProjectsLocationsQueuesTestIamPermissions

Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'porro',
        'doloribus',
        'ut',
        'facilis',
    ];
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quae';
    $request->fields = 'laudantium';
    $request->key = 'odio';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->resource = 'quisquam';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new CloudtasksProjectsLocationsQueuesTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtasksProjectsLocationsQueuesTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
