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
use \OpenAPI\OpenAPI\Models\Shared\Queue;
use \OpenAPI\OpenAPI\Models\Shared\AppEngineRouting;
use \OpenAPI\OpenAPI\Models\Shared\RateLimits;
use \OpenAPI\OpenAPI\Models\Shared\RetryConfig;
use \OpenAPI\OpenAPI\Models\Shared\StackdriverLoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\QueueStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->queue = new Queue();
    $request->queue->appEngineRoutingOverride = new AppEngineRouting();
    $request->queue->appEngineRoutingOverride->host = 'at';
    $request->queue->appEngineRoutingOverride->instance = 'maiores';
    $request->queue->appEngineRoutingOverride->service = 'molestiae';
    $request->queue->appEngineRoutingOverride->version = 'quod';
    $request->queue->name = 'Erik Lebsack';
    $request->queue->purgeTime = 'dicta';
    $request->queue->rateLimits = new RateLimits();
    $request->queue->rateLimits->maxBurstSize = 720633;
    $request->queue->rateLimits->maxConcurrentDispatches = 639921;
    $request->queue->rateLimits->maxDispatchesPerSecond = 5820.2;
    $request->queue->retryConfig = new RetryConfig();
    $request->queue->retryConfig->maxAttempts = 143353;
    $request->queue->retryConfig->maxBackoff = 'deleniti';
    $request->queue->retryConfig->maxDoublings = 944669;
    $request->queue->retryConfig->maxRetryDuration = 'optio';
    $request->queue->retryConfig->minBackoff = 'totam';
    $request->queue->stackdriverLoggingConfig = new StackdriverLoggingConfig();
    $request->queue->stackdriverLoggingConfig->samplingRatio = 1059.07;
    $request->queue->state = QueueStateEnum::RUNNING;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'impedit';
    $request->key = 'cum';
    $request->oauthToken = 'esse';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'perferendis';

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
    $request->getIamPolicyRequest->options->requestedPolicyVersion = 617636;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'natus';
    $request->key = 'laboriosam';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->resource = 'fuga';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'corporis';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'architecto';
    $request->filter = 'ipsa';
    $request->key = 'reiciendis';
    $request->oauthToken = 'est';
    $request->pageSize = 653140;
    $request->pageToken = 'laborum';
    $request->parent = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'explicabo';

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
use \OpenAPI\OpenAPI\Models\Shared\Queue;
use \OpenAPI\OpenAPI\Models\Shared\AppEngineRouting;
use \OpenAPI\OpenAPI\Models\Shared\RateLimits;
use \OpenAPI\OpenAPI\Models\Shared\RetryConfig;
use \OpenAPI\OpenAPI\Models\Shared\StackdriverLoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\QueueStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->queue = new Queue();
    $request->queue->appEngineRoutingOverride = new AppEngineRouting();
    $request->queue->appEngineRoutingOverride->host = 'enim';
    $request->queue->appEngineRoutingOverride->instance = 'omnis';
    $request->queue->appEngineRoutingOverride->service = 'nemo';
    $request->queue->appEngineRoutingOverride->version = 'minima';
    $request->queue->name = 'Brian Kessler';
    $request->queue->purgeTime = 'sapiente';
    $request->queue->rateLimits = new RateLimits();
    $request->queue->rateLimits->maxBurstSize = 102044;
    $request->queue->rateLimits->maxConcurrentDispatches = 652790;
    $request->queue->rateLimits->maxDispatchesPerSecond = 2088.76;
    $request->queue->retryConfig = new RetryConfig();
    $request->queue->retryConfig->maxAttempts = 635059;
    $request->queue->retryConfig->maxBackoff = 'consequuntur';
    $request->queue->retryConfig->maxDoublings = 995300;
    $request->queue->retryConfig->maxRetryDuration = 'mollitia';
    $request->queue->retryConfig->minBackoff = 'occaecati';
    $request->queue->stackdriverLoggingConfig = new StackdriverLoggingConfig();
    $request->queue->stackdriverLoggingConfig->samplingRatio = 2532.91;
    $request->queue->state = QueueStateEnum::RUNNING;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->fields = 'error';
    $request->key = 'quia';
    $request->name = 'Gloria Padberg';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->updateMask = 'sequi';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'ipsam';

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
        'aut' => 'quasi',
        'error' => 'temporibus',
        'laborum' => 'quasi',
        'reiciendis' => 'voluptatibus',
    ];
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'praesentium';
    $request->fields = 'voluptatibus';
    $request->key = 'ipsa';
    $request->name = 'Mr. Jared Ritchie';
    $request->oauthToken = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'corporis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'dicta' => 'harum',
        'enim' => 'accusamus',
    ];
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->fields = 'ipsum';
    $request->key = 'quidem';
    $request->name = 'Andy Streich';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptates';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'repudiandae';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'itaque' => 'incidunt',
    ];
    $request->accessToken = 'enim';
    $request->alt = AltEnum::JSON;
    $request->callback = 'est';
    $request->fields = 'quibusdam';
    $request->key = 'explicabo';
    $request->name = 'Rudy Spencer';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'quos';

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
    $request->setIamPolicyRequest->policy->etag = 'assumenda';
    $request->setIamPolicyRequest->policy->version = 369808;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'excepturi';
    $request->key = 'tempora';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->resource = 'labore';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'eum';

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
use \OpenAPI\OpenAPI\Models\Shared\TaskViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksProjectsLocationsQueuesTasksCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksProjectsLocationsQueuesTasksCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->createTaskRequest = new CreateTaskRequest();
    $request->createTaskRequest->responseView = CreateTaskRequestResponseViewEnum::FULL;
    $request->createTaskRequest->task = new Task();
    $request->createTaskRequest->task->appEngineHttpRequest = new AppEngineHttpRequest();
    $request->createTaskRequest->task->appEngineHttpRequest->appEngineRouting = new AppEngineRouting();
    $request->createTaskRequest->task->appEngineHttpRequest->appEngineRouting->host = 'sint';
    $request->createTaskRequest->task->appEngineHttpRequest->appEngineRouting->instance = 'aliquid';
    $request->createTaskRequest->task->appEngineHttpRequest->appEngineRouting->service = 'provident';
    $request->createTaskRequest->task->appEngineHttpRequest->appEngineRouting->version = 'necessitatibus';
    $request->createTaskRequest->task->appEngineHttpRequest->body = 'sint';
    $request->createTaskRequest->task->appEngineHttpRequest->headers = [
        'dolor' => 'debitis',
        'a' => 'dolorum',
        'in' => 'in',
    ];
    $request->createTaskRequest->task->appEngineHttpRequest->httpMethod = AppEngineHttpRequestHttpMethodEnum::PATCH;
    $request->createTaskRequest->task->appEngineHttpRequest->relativeUri = 'maiores';
    $request->createTaskRequest->task->createTime = 'rerum';
    $request->createTaskRequest->task->dispatchCount = 116202;
    $request->createTaskRequest->task->dispatchDeadline = 'magnam';
    $request->createTaskRequest->task->firstAttempt = new Attempt();
    $request->createTaskRequest->task->firstAttempt->dispatchTime = 'cumque';
    $request->createTaskRequest->task->firstAttempt->responseStatus = new Status();
    $request->createTaskRequest->task->firstAttempt->responseStatus->code = 813798;
    $request->createTaskRequest->task->firstAttempt->responseStatus->details = [
        [
            'laborum' => 'accusamus',
            'non' => 'occaecati',
        ],
        [
            'accusamus' => 'delectus',
            'quidem' => 'provident',
        ],
    ];
    $request->createTaskRequest->task->firstAttempt->responseStatus->message = 'nam';
    $request->createTaskRequest->task->firstAttempt->responseTime = 'id';
    $request->createTaskRequest->task->firstAttempt->scheduleTime = 'blanditiis';
    $request->createTaskRequest->task->httpRequest = new HttpRequest();
    $request->createTaskRequest->task->httpRequest->body = 'deleniti';
    $request->createTaskRequest->task->httpRequest->headers = [
        'amet' => 'deserunt',
        'nisi' => 'vel',
        'natus' => 'omnis',
        'molestiae' => 'perferendis',
    ];
    $request->createTaskRequest->task->httpRequest->httpMethod = HttpRequestHttpMethodEnum::HEAD;
    $request->createTaskRequest->task->httpRequest->oauthToken = new OAuthToken();
    $request->createTaskRequest->task->httpRequest->oauthToken->scope = 'magnam';
    $request->createTaskRequest->task->httpRequest->oauthToken->serviceAccountEmail = 'distinctio';
    $request->createTaskRequest->task->httpRequest->oidcToken = new OidcToken();
    $request->createTaskRequest->task->httpRequest->oidcToken->audience = 'id';
    $request->createTaskRequest->task->httpRequest->oidcToken->serviceAccountEmail = 'labore';
    $request->createTaskRequest->task->httpRequest->url = 'labore';
    $request->createTaskRequest->task->lastAttempt = new Attempt();
    $request->createTaskRequest->task->lastAttempt->dispatchTime = 'suscipit';
    $request->createTaskRequest->task->lastAttempt->responseStatus = new Status();
    $request->createTaskRequest->task->lastAttempt->responseStatus->code = 618016;
    $request->createTaskRequest->task->lastAttempt->responseStatus->details = [
        [
            'vero' => 'aspernatur',
            'architecto' => 'magnam',
        ],
        [
            'excepturi' => 'ullam',
        ],
        [
            'quos' => 'sint',
            'accusantium' => 'mollitia',
            'reiciendis' => 'mollitia',
        ],
    ];
    $request->createTaskRequest->task->lastAttempt->responseStatus->message = 'ad';
    $request->createTaskRequest->task->lastAttempt->responseTime = 'eum';
    $request->createTaskRequest->task->lastAttempt->scheduleTime = 'dolor';
    $request->createTaskRequest->task->name = 'Ms. Fred Hilll';
    $request->createTaskRequest->task->responseCount = 891924;
    $request->createTaskRequest->task->scheduleTime = 'eius';
    $request->createTaskRequest->task->view = TaskViewEnum::FULL;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'architecto';
    $request->key = 'architecto';
    $request->oauthToken = 'repudiandae';
    $request->parent = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'repellat';

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
    $request->accessToken = 'sed';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'pariatur';
    $request->fields = 'accusantium';
    $request->key = 'consequuntur';
    $request->name = 'Miss Nick Cummerata';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'ea';
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ab';
    $request->fields = 'maiores';
    $request->key = 'quidem';
    $request->name = 'Colleen Johnston PhD';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->responseView = CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum::VIEW_UNSPECIFIED;
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'amet';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'libero';
    $request->key = 'nobis';
    $request->oauthToken = 'dolores';
    $request->pageSize = 339404;
    $request->pageToken = 'totam';
    $request->parent = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->responseView = CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum::BASIC;
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'eos';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->runTaskRequest = new RunTaskRequest();
    $request->runTaskRequest->responseView = RunTaskRequestResponseViewEnum::VIEW_UNSPECIFIED;
    $request->accessToken = 'minus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'vero';
    $request->key = 'nostrum';
    $request->name = 'Percy Mohr';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'blanditiis';

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
        'occaecati',
    ];
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'asperiores';
    $request->fields = 'earum';
    $request->key = 'modi';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->resource = 'deleniti';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'provident';

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
