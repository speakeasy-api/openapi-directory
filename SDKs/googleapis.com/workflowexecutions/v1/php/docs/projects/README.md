# projects

### Available Operations

* [workflowexecutionsProjectsLocationsWorkflowsExecutionsCancel](#workflowexecutionsprojectslocationsworkflowsexecutionscancel) - Cancels an execution of the given name.
* [workflowexecutionsProjectsLocationsWorkflowsExecutionsCreate](#workflowexecutionsprojectslocationsworkflowsexecutionscreate) - Creates a new execution using the latest revision of the given workflow.
* [workflowexecutionsProjectsLocationsWorkflowsExecutionsGet](#workflowexecutionsprojectslocationsworkflowsexecutionsget) - Returns an execution of the given name.
* [workflowexecutionsProjectsLocationsWorkflowsExecutionsList](#workflowexecutionsprojectslocationsworkflowsexecutionslist) - Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).
* [workflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecution](#workflowexecutionsprojectslocationsworkflowstriggerpubsubexecution) - Triggers a new execution using the latest revision of the given workflow by a Pub/Sub push notification.

## workflowexecutionsProjectsLocationsWorkflowsExecutionsCancel

Cancels an execution of the given name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
    ];
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->name = 'Estelle Will';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workflowexecutionsProjectsLocationsWorkflowsExecutionsCancel($request, $requestSecurity);

    if ($response->execution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workflowexecutionsProjectsLocationsWorkflowsExecutionsCreate

Creates a new execution using the latest revision of the given workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionInput;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionCallLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\StackTrace;
use \OpenAPI\OpenAPI\Models\Shared\StackTraceElement;
use \OpenAPI\OpenAPI\Models\Shared\Position;
use \OpenAPI\OpenAPI\Models\Shared\StateError;
use \OpenAPI\OpenAPI\Models\Shared\StateErrorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\Step;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->executionInput = new ExecutionInput();
    $request->executionInput->argument = 'quod';
    $request->executionInput->callLogLevel = ExecutionCallLogLevelEnum::LOG_ALL_CALLS;
    $request->executionInput->error = new Error();
    $request->executionInput->error->context = 'totam';
    $request->executionInput->error->payload = 'porro';
    $request->executionInput->error->stackTrace = new StackTrace();
    $request->executionInput->error->stackTrace->elements = [
        new StackTraceElement(),
        new StackTraceElement(),
        new StackTraceElement(),
    ];
    $request->executionInput->labels = [
        'nam' => 'officia',
    ];
    $request->executionInput->stateError = new StateError();
    $request->executionInput->stateError->details = 'occaecati';
    $request->executionInput->stateError->type = StateErrorTypeEnum::TYPE_UNSPECIFIED;
    $request->executionInput->status = new Status();
    $request->executionInput->status->currentSteps = [
        new Step(),
        new Step(),
        new Step(),
    ];
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'beatae';
    $request->key = 'commodi';
    $request->oauthToken = 'molestiae';
    $request->parent = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workflowexecutionsProjectsLocationsWorkflowsExecutionsCreate($request, $requestSecurity);

    if ($response->execution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workflowexecutionsProjectsLocationsWorkflowsExecutionsGet

Returns an execution of the given name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'perferendis';
    $request->key = 'ad';
    $request->name = 'Louis Moore';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'fuga';
    $request->view = WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum::BASIC;

    $requestSecurity = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workflowexecutionsProjectsLocationsWorkflowsExecutionsGet($request, $requestSecurity);

    if ($response->execution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workflowexecutionsProjectsLocationsWorkflowsExecutionsList

Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'quidem';
    $request->filter = 'architecto';
    $request->key = 'ipsa';
    $request->oauthToken = 'reiciendis';
    $request->orderBy = 'est';
    $request->pageSize = 653140;
    $request->pageToken = 'laborum';
    $request->parent = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'explicabo';
    $request->view = WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListViewEnum::FULL;

    $requestSecurity = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workflowexecutionsProjectsLocationsWorkflowsExecutionsList($request, $requestSecurity);

    if ($response->listExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecution

Triggers a new execution using the latest revision of the given workflow by a Pub/Sub push notification.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TriggerPubsubExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PubsubMessage;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->triggerPubsubExecutionRequest = new TriggerPubsubExecutionRequest();
    $request->triggerPubsubExecutionRequest->gcpCloudEventsMode = 'omnis';
    $request->triggerPubsubExecutionRequest->message = new PubsubMessage();
    $request->triggerPubsubExecutionRequest->message->attributes = [
        'minima' => 'excepturi',
        'accusantium' => 'iure',
    ];
    $request->triggerPubsubExecutionRequest->message->data = 'culpa';
    $request->triggerPubsubExecutionRequest->message->messageId = 'doloribus';
    $request->triggerPubsubExecutionRequest->message->orderingKey = 'sapiente';
    $request->triggerPubsubExecutionRequest->message->publishTime = 'architecto';
    $request->triggerPubsubExecutionRequest->subscription = 'mollitia';
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequuntur';
    $request->fields = 'repellat';
    $request->key = 'mollitia';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'quam';
    $request->workflow = 'molestiae';

    $requestSecurity = new WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecution($request, $requestSecurity);

    if ($response->execution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
