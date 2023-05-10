# projects

### Available Operations

* [workflowexecutionsProjectsLocationsWorkflowsExecutionsCancel](#workflowexecutionsprojectslocationsworkflowsexecutionscancel) - Cancels an execution of the given name.
* [workflowexecutionsProjectsLocationsWorkflowsExecutionsCreate](#workflowexecutionsprojectslocationsworkflowsexecutionscreate) - Creates a new execution using the latest revision of the given workflow.
* [workflowexecutionsProjectsLocationsWorkflowsExecutionsGet](#workflowexecutionsprojectslocationsworkflowsexecutionsget) - Returns an execution of the given name.
* [workflowexecutionsProjectsLocationsWorkflowsExecutionsList](#workflowexecutionsprojectslocationsworkflowsexecutionslist) - Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).

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
    $request->executionInput->status = new Status();
    $request->executionInput->status->currentSteps = [
        new Step(),
    ];
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'fugit';
    $request->key = 'deleniti';
    $request->oauthToken = 'hic';
    $request->parent = 'optio';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'commodi';

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
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->fields = 'cum';
    $request->key = 'esse';
    $request->name = 'Mrs. Miriam Collier';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'natus';
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'corporis';
    $request->key = 'iste';
    $request->oauthToken = 'iure';
    $request->pageSize = 902349;
    $request->pageToken = 'quidem';
    $request->parent = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'est';
    $request->view = WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListViewEnum::BASIC;

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
