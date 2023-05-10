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
* [cloudtasksProjectsLocationsQueuesTasksBuffer](#cloudtasksprojectslocationsqueuestasksbuffer) - Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP target. To create the task with a custom ID, use the following format and set TASK_ID to your desired ID: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the task with an automatically generated ID, use the following format: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer. Note: This feature is in its experimental stage. You must request access to the API through the [Cloud Tasks BufferTask Experiment Signup form](https://forms.gle/X8Zr5hiXH5tTGFqh8).
* [cloudtasksProjectsLocationsQueuesTasksCreate](#cloudtasksprojectslocationsqueuestaskscreate) - Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * The maximum task size is 100KB.
* [cloudtasksProjectsLocationsQueuesTasksDelete](#cloudtasksprojectslocationsqueuestasksdelete) - Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.
* [cloudtasksProjectsLocationsQueuesTasksGet](#cloudtasksprojectslocationsqueuestasksget) - Gets a task.
* [cloudtasksProjectsLocationsQueuesTasksList](#cloudtasksprojectslocationsqueuestaskslist) - Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.
* [cloudtasksProjectsLocationsQueuesTasksRun](#cloudtasksprojectslocationsqueuestasksrun) - Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed.
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
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'voluptatum';
    $request->filter = 'iusto';
    $request->key = 'excepturi';
    $request->name = 'Mrs. Sophie Smith MD';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 368241;
    $request->pageToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';

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
use \OpenAPI\OpenAPI\Models\Shared\AppEngineHttpQueue;
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
use \OpenAPI\OpenAPI\Models\Shared\StackdriverLoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\QueueStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->queueInput = new QueueInput();
    $request->queueInput->appEngineHttpQueue = new AppEngineHttpQueue();
    $request->queueInput->appEngineHttpQueue->appEngineRoutingOverride = new AppEngineRouting();
    $request->queueInput->appEngineHttpQueue->appEngineRoutingOverride->host = 'at';
    $request->queueInput->appEngineHttpQueue->appEngineRoutingOverride->instance = 'maiores';
    $request->queueInput->appEngineHttpQueue->appEngineRoutingOverride->service = 'molestiae';
    $request->queueInput->appEngineHttpQueue->appEngineRoutingOverride->version = 'quod';
    $request->queueInput->httpTarget = new HttpTarget();
    $request->queueInput->httpTarget->headerOverrides = [
        new HeaderOverride(),
        new HeaderOverride(),
        new HeaderOverride(),
        new HeaderOverride(),
    ];
    $request->queueInput->httpTarget->httpMethod = HttpTargetHttpMethodEnum::HEAD;
    $request->queueInput->httpTarget->oauthToken = new OAuthToken();
    $request->queueInput->httpTarget->oauthToken->scope = 'totam';
    $request->queueInput->httpTarget->oauthToken->serviceAccountEmail = 'porro';
    $request->queueInput->httpTarget->oidcToken = new OidcToken();
    $request->queueInput->httpTarget->oidcToken->audience = 'dolorum';
    $request->queueInput->httpTarget->oidcToken->serviceAccountEmail = 'dicta';
    $request->queueInput->httpTarget->uriOverride = new UriOverride();
    $request->queueInput->httpTarget->uriOverride->host = 'nam';
    $request->queueInput->httpTarget->uriOverride->pathOverride = new PathOverride();
    $request->queueInput->httpTarget->uriOverride->pathOverride->path = 'officia';
    $request->queueInput->httpTarget->uriOverride->port = 'occaecati';
    $request->queueInput->httpTarget->uriOverride->queryOverride = new QueryOverride();
    $request->queueInput->httpTarget->uriOverride->queryOverride->queryParams = 'fugit';
    $request->queueInput->httpTarget->uriOverride->scheme = UriOverrideSchemeEnum::HTTP;
    $request->queueInput->httpTarget->uriOverride->uriOverrideEnforceMode = UriOverrideUriOverrideEnforceModeEnum::ALWAYS;
    $request->queueInput->name = 'Everett Breitenberg';
    $request->queueInput->purgeTime = 'modi';
    $request->queueInput->rateLimits = new RateLimits();
    $request->queueInput->rateLimits->maxBurstSize = 186332;
    $request->queueInput->rateLimits->maxConcurrentDispatches = 774234;
    $request->queueInput->rateLimits->maxDispatchesPerSecond = 7369.18;
    $request->queueInput->retryConfig = new RetryConfig();
    $request->queueInput->retryConfig->maxAttempts = 456150;
    $request->queueInput->retryConfig->maxBackoff = 'ipsum';
    $request->queueInput->retryConfig->maxDoublings = 568434;
    $request->queueInput->retryConfig->maxRetryDuration = 'aspernatur';
    $request->queueInput->retryConfig->minBackoff = 'perferendis';
    $request->queueInput->stackdriverLoggingConfig = new StackdriverLoggingConfig();
    $request->queueInput->stackdriverLoggingConfig->samplingRatio = 3241.41;
    $request->queueInput->state = QueueStateEnum::PAUSED;
    $request->queueInput->taskTtl = 'sed';
    $request->queueInput->tombstoneTtl = 'iste';
    $request->queueInput->type = QueueTypeEnum::TYPE_UNSPECIFIED;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->getIamPolicyRequest = new GetIamPolicyRequest();
    $request->getIamPolicyRequest->options = new GetPolicyOptions();
    $request->getIamPolicyRequest->options->requestedPolicyVersion = 99280;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'mollitia';
    $request->key = 'laborum';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->resource = 'corporis';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'nobis';

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
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->fields = 'excepturi';
    $request->filter = 'accusantium';
    $request->key = 'iure';
    $request->oauthToken = 'culpa';
    $request->pageSize = 988374;
    $request->pageToken = 'sapiente';
    $request->parent = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->readMask = 'dolorem';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'consequuntur';

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
use \OpenAPI\OpenAPI\Models\Shared\AppEngineHttpQueue;
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
use \OpenAPI\OpenAPI\Models\Shared\StackdriverLoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\QueueStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->queueInput = new QueueInput();
    $request->queueInput->appEngineHttpQueue = new AppEngineHttpQueue();
    $request->queueInput->appEngineHttpQueue->appEngineRoutingOverride = new AppEngineRouting();
    $request->queueInput->appEngineHttpQueue->appEngineRoutingOverride->host = 'mollitia';
    $request->queueInput->appEngineHttpQueue->appEngineRoutingOverride->instance = 'occaecati';
    $request->queueInput->appEngineHttpQueue->appEngineRoutingOverride->service = 'numquam';
    $request->queueInput->appEngineHttpQueue->appEngineRoutingOverride->version = 'commodi';
    $request->queueInput->httpTarget = new HttpTarget();
    $request->queueInput->httpTarget->headerOverrides = [
        new HeaderOverride(),
        new HeaderOverride(),
    ];
    $request->queueInput->httpTarget->httpMethod = HttpTargetHttpMethodEnum::HEAD;
    $request->queueInput->httpTarget->oauthToken = new OAuthToken();
    $request->queueInput->httpTarget->oauthToken->scope = 'velit';
    $request->queueInput->httpTarget->oauthToken->serviceAccountEmail = 'error';
    $request->queueInput->httpTarget->oidcToken = new OidcToken();
    $request->queueInput->httpTarget->oidcToken->audience = 'quia';
    $request->queueInput->httpTarget->oidcToken->serviceAccountEmail = 'quis';
    $request->queueInput->httpTarget->uriOverride = new UriOverride();
    $request->queueInput->httpTarget->uriOverride->host = 'vitae';
    $request->queueInput->httpTarget->uriOverride->pathOverride = new PathOverride();
    $request->queueInput->httpTarget->uriOverride->pathOverride->path = 'laborum';
    $request->queueInput->httpTarget->uriOverride->port = 'animi';
    $request->queueInput->httpTarget->uriOverride->queryOverride = new QueryOverride();
    $request->queueInput->httpTarget->uriOverride->queryOverride->queryParams = 'enim';
    $request->queueInput->httpTarget->uriOverride->scheme = UriOverrideSchemeEnum::SCHEME_UNSPECIFIED;
    $request->queueInput->httpTarget->uriOverride->uriOverrideEnforceMode = UriOverrideUriOverrideEnforceModeEnum::ALWAYS;
    $request->queueInput->name = 'Mandy Hills';
    $request->queueInput->purgeTime = 'aut';
    $request->queueInput->rateLimits = new RateLimits();
    $request->queueInput->rateLimits->maxBurstSize = 97101;
    $request->queueInput->rateLimits->maxConcurrentDispatches = 622846;
    $request->queueInput->rateLimits->maxDispatchesPerSecond = 8379.45;
    $request->queueInput->retryConfig = new RetryConfig();
    $request->queueInput->retryConfig->maxAttempts = 673660;
    $request->queueInput->retryConfig->maxBackoff = 'quasi';
    $request->queueInput->retryConfig->maxDoublings = 971945;
    $request->queueInput->retryConfig->maxRetryDuration = 'voluptatibus';
    $request->queueInput->retryConfig->minBackoff = 'vero';
    $request->queueInput->stackdriverLoggingConfig = new StackdriverLoggingConfig();
    $request->queueInput->stackdriverLoggingConfig->samplingRatio = 4686.51;
    $request->queueInput->state = QueueStateEnum::PAUSED;
    $request->queueInput->taskTtl = 'voluptatibus';
    $request->queueInput->tombstoneTtl = 'ipsa';
    $request->queueInput->type = QueueTypeEnum::PULL;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'doloremque';
    $request->key = 'reprehenderit';
    $request->name = 'Shawna Carter';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->updateMask = 'harum';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'accusamus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'quae' => 'ipsum',
        'quidem' => 'molestias',
        'excepturi' => 'pariatur',
        'modi' => 'praesentium',
    ];
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'repudiandae';
    $request->key = 'sint';
    $request->name = 'Patti Gottlieb MD';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'distinctio';

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
        'modi' => 'qui',
        'aliquid' => 'cupiditate',
    ];
    $request->accessToken = 'quos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magni';
    $request->fields = 'assumenda';
    $request->key = 'ipsam';
    $request->name = 'Denise Pagac';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'delectus';

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
        'eligendi' => 'sint',
    ];
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'sint';
    $request->key = 'officia';
    $request->name = 'Raquel Wilderman';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'rerum';

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
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'cumque';
    $request->setIamPolicyRequest->policy->version = 813798;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'accusamus';
    $request->key = 'non';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->resource = 'accusamus';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'quidem';

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
    $request->bufferTaskRequest->body->contentType = 'nam';
    $request->bufferTaskRequest->body->data = 'id';
    $request->bufferTaskRequest->body->extensions = [
        [
            'sapiente' => 'amet',
            'deserunt' => 'nisi',
            'vel' => 'natus',
        ],
        [
            'molestiae' => 'perferendis',
            'nihil' => 'magnam',
            'distinctio' => 'id',
        ],
        [
            'labore' => 'suscipit',
            'natus' => 'nobis',
        ],
    ];
    $request->accessToken = 'eum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aspernatur';
    $request->fields = 'architecto';
    $request->key = 'magnam';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->queue = 'excepturi';
    $request->quotaUser = 'ullam';
    $request->taskId = 'provident';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'sint';

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

## cloudtasksProjectsLocationsQueuesTasksCreate

Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * The maximum task size is 100KB.

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
use \OpenAPI\OpenAPI\Models\Shared\Attempt;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\HttpRequest;
use \OpenAPI\OpenAPI\Models\Shared\HttpRequestHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\OAuthToken;
use \OpenAPI\OpenAPI\Models\Shared\OidcToken;
use \OpenAPI\OpenAPI\Models\Shared\PullMessage;
use \OpenAPI\OpenAPI\Models\Shared\TaskViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesTasksCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->createTaskRequest = new CreateTaskRequest();
    $request->createTaskRequest->responseView = CreateTaskRequestResponseViewEnum::BASIC;
    $request->createTaskRequest->task = new Task();
    $request->createTaskRequest->task->appEngineHttpRequest = new AppEngineHttpRequest();
    $request->createTaskRequest->task->appEngineHttpRequest->appEngineRouting = new AppEngineRouting();
    $request->createTaskRequest->task->appEngineHttpRequest->appEngineRouting->host = 'reiciendis';
    $request->createTaskRequest->task->appEngineHttpRequest->appEngineRouting->instance = 'mollitia';
    $request->createTaskRequest->task->appEngineHttpRequest->appEngineRouting->service = 'ad';
    $request->createTaskRequest->task->appEngineHttpRequest->appEngineRouting->version = 'eum';
    $request->createTaskRequest->task->appEngineHttpRequest->body = 'dolor';
    $request->createTaskRequest->task->appEngineHttpRequest->headers = [
        'odit' => 'nemo',
        'quasi' => 'iure',
        'doloribus' => 'debitis',
        'eius' => 'maxime',
    ];
    $request->createTaskRequest->task->appEngineHttpRequest->httpMethod = AppEngineHttpRequestHttpMethodEnum::PUT;
    $request->createTaskRequest->task->appEngineHttpRequest->relativeUri = 'facilis';
    $request->createTaskRequest->task->createTime = 'in';
    $request->createTaskRequest->task->dispatchCount = 100226;
    $request->createTaskRequest->task->dispatchDeadline = 'architecto';
    $request->createTaskRequest->task->firstAttempt = new Attempt();
    $request->createTaskRequest->task->firstAttempt->dispatchTime = 'repudiandae';
    $request->createTaskRequest->task->firstAttempt->responseStatus = new Status();
    $request->createTaskRequest->task->firstAttempt->responseStatus->code = 352312;
    $request->createTaskRequest->task->firstAttempt->responseStatus->details = [
        [
            'repellat' => 'quibusdam',
            'sed' => 'saepe',
        ],
        [
            'accusantium' => 'consequuntur',
            'praesentium' => 'natus',
            'magni' => 'sunt',
            'quo' => 'illum',
        ],
        [
            'maxime' => 'ea',
            'excepturi' => 'odit',
            'ea' => 'accusantium',
            'ab' => 'maiores',
        ],
    ];
    $request->createTaskRequest->task->firstAttempt->responseStatus->message = 'quidem';
    $request->createTaskRequest->task->firstAttempt->responseTime = 'ipsam';
    $request->createTaskRequest->task->firstAttempt->scheduleTime = 'voluptate';
    $request->createTaskRequest->task->httpRequest = new HttpRequest();
    $request->createTaskRequest->task->httpRequest->body = 'autem';
    $request->createTaskRequest->task->httpRequest->headers = [
        'eaque' => 'pariatur',
        'nemo' => 'voluptatibus',
        'perferendis' => 'fugiat',
    ];
    $request->createTaskRequest->task->httpRequest->httpMethod = HttpRequestHttpMethodEnum::POST;
    $request->createTaskRequest->task->httpRequest->oauthToken = new OAuthToken();
    $request->createTaskRequest->task->httpRequest->oauthToken->scope = 'aut';
    $request->createTaskRequest->task->httpRequest->oauthToken->serviceAccountEmail = 'cumque';
    $request->createTaskRequest->task->httpRequest->oidcToken = new OidcToken();
    $request->createTaskRequest->task->httpRequest->oidcToken->audience = 'corporis';
    $request->createTaskRequest->task->httpRequest->oidcToken->serviceAccountEmail = 'hic';
    $request->createTaskRequest->task->httpRequest->url = 'libero';
    $request->createTaskRequest->task->lastAttempt = new Attempt();
    $request->createTaskRequest->task->lastAttempt->dispatchTime = 'nobis';
    $request->createTaskRequest->task->lastAttempt->responseStatus = new Status();
    $request->createTaskRequest->task->lastAttempt->responseStatus->code = 171629;
    $request->createTaskRequest->task->lastAttempt->responseStatus->details = [
        [
            'dignissimos' => 'eaque',
            'quis' => 'nesciunt',
            'eos' => 'perferendis',
        ],
        [
            'minus' => 'quam',
        ],
    ];
    $request->createTaskRequest->task->lastAttempt->responseStatus->message = 'dolor';
    $request->createTaskRequest->task->lastAttempt->responseTime = 'vero';
    $request->createTaskRequest->task->lastAttempt->scheduleTime = 'nostrum';
    $request->createTaskRequest->task->name = 'Percy Mohr';
    $request->createTaskRequest->task->pullMessage = new PullMessage();
    $request->createTaskRequest->task->pullMessage->payload = 'voluptatem';
    $request->createTaskRequest->task->pullMessage->tag = 'porro';
    $request->createTaskRequest->task->responseCount = 164694;
    $request->createTaskRequest->task->scheduleTime = 'blanditiis';
    $request->createTaskRequest->task->view = TaskViewEnum::BASIC;
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rerum';
    $request->fields = 'adipisci';
    $request->key = 'asperiores';
    $request->oauthToken = 'earum';
    $request->parent = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'deleniti';

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

Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->fields = 'delectus';
    $request->key = 'quaerat';
    $request->name = 'Gene Effertz';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'excepturi';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'amet';
    $request->key = 'dolorum';
    $request->name = 'Ms. Christine Beer';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->responseView = CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum::FULL;
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'voluptas';

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
    $request->accessToken = 'eos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sit';
    $request->fields = 'fugiat';
    $request->key = 'ab';
    $request->oauthToken = 'soluta';
    $request->pageSize = 679393;
    $request->pageToken = 'iusto';
    $request->parent = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->responseView = CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum::BASIC;
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'necessitatibus';

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

## cloudtasksProjectsLocationsQueuesTasksRun

Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed.

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
    $request->runTaskRequest->responseView = RunTaskRequestResponseViewEnum::FULL;
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptate';
    $request->fields = 'id';
    $request->key = 'saepe';
    $request->name = 'Judy Aufderhar';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'suscipit';

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
        'minima',
        'repellendus',
        'totam',
    ];
    $request->accessToken = 'similique';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->fields = 'quaerat';
    $request->key = 'tempora';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->resource = 'officiis';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'dolorum';

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
