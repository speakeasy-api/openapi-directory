# projects

### Available Operations

* [workflowsProjectsLocationsList](#workflowsprojectslocationslist) - Lists information about the supported locations for this service.
* [workflowsProjectsLocationsOperationsList](#workflowsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [workflowsProjectsLocationsWorkflowsCreate](#workflowsprojectslocationsworkflowscreate) - Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation returns a ALREADY_EXISTS error.
* [workflowsProjectsLocationsWorkflowsDelete](#workflowsprojectslocationsworkflowsdelete) - Deletes a workflow with the specified name. This method also cancels and deletes all running executions of the workflow.
* [workflowsProjectsLocationsWorkflowsGet](#workflowsprojectslocationsworkflowsget) - Gets details of a single workflow.
* [workflowsProjectsLocationsWorkflowsList](#workflowsprojectslocationsworkflowslist) - Lists workflows in a given project and location. The default order is not specified.
* [workflowsProjectsLocationsWorkflowsPatch](#workflowsprojectslocationsworkflowspatch) - Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow might be created as a result of a successful update operation. In that case, the new revision is used in new workflow executions.

## workflowsProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowsProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowsProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkflowsProjectsLocationsListRequest();
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

    $requestSecurity = new WorkflowsProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workflowsProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workflowsProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowsProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowsProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkflowsProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestiae';
    $request->fields = 'quod';
    $request->filter = 'quod';
    $request->key = 'esse';
    $request->name = 'Miss Lowell Parisian';
    $request->oauthToken = 'occaecati';
    $request->pageSize = 143353;
    $request->pageToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new WorkflowsProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workflowsProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workflowsProjectsLocationsWorkflowsCreate

Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation returns a ALREADY_EXISTS error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowsProjectsLocationsWorkflowsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowInput;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowCallLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\StateError;
use \OpenAPI\OpenAPI\Models\Shared\StateErrorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowsProjectsLocationsWorkflowsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkflowsProjectsLocationsWorkflowsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->workflowInput = new WorkflowInput();
    $request->workflowInput->callLogLevel = WorkflowCallLogLevelEnum::LOG_ALL_CALLS;
    $request->workflowInput->cryptoKeyName = 'molestiae';
    $request->workflowInput->description = 'modi';
    $request->workflowInput->labels = [
        'impedit' => 'cum',
    ];
    $request->workflowInput->name = 'Edna Mante II';
    $request->workflowInput->serviceAccount = 'natus';
    $request->workflowInput->sourceContents = 'sed';
    $request->workflowInput->stateError = new StateError();
    $request->workflowInput->stateError->details = 'iste';
    $request->workflowInput->stateError->type = StateErrorTypeEnum::TYPE_UNSPECIFIED;
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
    $request->workflowId = 'quidem';

    $requestSecurity = new WorkflowsProjectsLocationsWorkflowsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workflowsProjectsLocationsWorkflowsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workflowsProjectsLocationsWorkflowsDelete

Deletes a workflow with the specified name. This method also cancels and deletes all running executions of the workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowsProjectsLocationsWorkflowsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowsProjectsLocationsWorkflowsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkflowsProjectsLocationsWorkflowsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'mollitia';
    $request->key = 'laborum';
    $request->name = 'Connie Herzog';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new WorkflowsProjectsLocationsWorkflowsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workflowsProjectsLocationsWorkflowsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workflowsProjectsLocationsWorkflowsGet

Gets details of a single workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowsProjectsLocationsWorkflowsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowsProjectsLocationsWorkflowsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkflowsProjectsLocationsWorkflowsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->fields = 'doloribus';
    $request->key = 'sapiente';
    $request->name = 'Angie Durgan';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->revisionId = 'occaecati';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new WorkflowsProjectsLocationsWorkflowsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workflowsProjectsLocationsWorkflowsGet($request, $requestSecurity);

    if ($response->workflow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workflowsProjectsLocationsWorkflowsList

Lists workflows in a given project and location. The default order is not specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowsProjectsLocationsWorkflowsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowsProjectsLocationsWorkflowsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkflowsProjectsLocationsWorkflowsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'quia';
    $request->filter = 'quis';
    $request->key = 'vitae';
    $request->oauthToken = 'laborum';
    $request->orderBy = 'animi';
    $request->pageSize = 317202;
    $request->pageToken = 'odit';
    $request->parent = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new WorkflowsProjectsLocationsWorkflowsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workflowsProjectsLocationsWorkflowsList($request, $requestSecurity);

    if ($response->listWorkflowsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workflowsProjectsLocationsWorkflowsPatch

Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow might be created as a result of a successful update operation. In that case, the new revision is used in new workflow executions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowsProjectsLocationsWorkflowsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowInput;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowCallLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\StateError;
use \OpenAPI\OpenAPI\Models\Shared\StateErrorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowsProjectsLocationsWorkflowsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkflowsProjectsLocationsWorkflowsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->workflowInput = new WorkflowInput();
    $request->workflowInput->callLogLevel = WorkflowCallLogLevelEnum::LOG_NONE;
    $request->workflowInput->cryptoKeyName = 'aut';
    $request->workflowInput->description = 'quasi';
    $request->workflowInput->labels = [
        'temporibus' => 'laborum',
        'quasi' => 'reiciendis',
        'voluptatibus' => 'vero',
    ];
    $request->workflowInput->name = 'Miss Irma Wolff';
    $request->workflowInput->serviceAccount = 'cum';
    $request->workflowInput->sourceContents = 'perferendis';
    $request->workflowInput->stateError = new StateError();
    $request->workflowInput->stateError->details = 'doloremque';
    $request->workflowInput->stateError->type = StateErrorTypeEnum::TYPE_UNSPECIFIED;
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'corporis';
    $request->key = 'dolore';
    $request->name = 'Mildred Pfeffer';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->updateMask = 'quae';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new WorkflowsProjectsLocationsWorkflowsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workflowsProjectsLocationsWorkflowsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
