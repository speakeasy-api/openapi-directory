# projects

### Available Operations

* [workflowsProjectsLocationsList](#workflowsprojectslocationslist) - Lists information about the supported locations for this service.
* [workflowsProjectsLocationsOperationsList](#workflowsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [workflowsProjectsLocationsWorkflowsCreate](#workflowsprojectslocationsworkflowscreate) - Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation will return ALREADY_EXISTS error.
* [workflowsProjectsLocationsWorkflowsDelete](#workflowsprojectslocationsworkflowsdelete) - Deletes a workflow with the specified name. This method also cancels and deletes all running executions of the workflow.
* [workflowsProjectsLocationsWorkflowsGet](#workflowsprojectslocationsworkflowsget) - Gets details of a single Workflow.
* [workflowsProjectsLocationsWorkflowsList](#workflowsprojectslocationsworkflowslist) - Lists Workflows in a given project and location. The default order is not specified.
* [workflowsProjectsLocationsWorkflowsPatch](#workflowsprojectslocationsworkflowspatch) - Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow may be created as a result of a successful update operation. In that case, such revision will be used in new workflow executions.

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

Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation will return ALREADY_EXISTS error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowsProjectsLocationsWorkflowsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowsProjectsLocationsWorkflowsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkflowsProjectsLocationsWorkflowsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->workflowInput = new WorkflowInput();
    $request->workflowInput->description = 'commodi';
    $request->workflowInput->labels = [
        'modi' => 'qui',
        'impedit' => 'cum',
    ];
    $request->workflowInput->name = 'Edna Mante II';
    $request->workflowInput->serviceAccount = 'natus';
    $request->workflowInput->sourceContents = 'sed';
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'laboriosam';
    $request->key = 'hic';
    $request->oauthToken = 'saepe';
    $request->parent = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'iste';
    $request->workflowId = 'iure';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'reiciendis';
    $request->key = 'est';
    $request->name = 'Cameron Dach';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'omnis';

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

Gets details of a single Workflow.

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minima';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'iure';
    $request->key = 'culpa';
    $request->name = 'Darrin Brakus';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'mollitia';

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

Lists Workflows in a given project and location. The default order is not specified.

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'molestiae';
    $request->filter = 'velit';
    $request->key = 'error';
    $request->oauthToken = 'quia';
    $request->orderBy = 'quis';
    $request->pageSize = 110375;
    $request->pageToken = 'laborum';
    $request->parent = 'animi';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'quo';

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

Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow may be created as a result of a successful update operation. In that case, such revision will be used in new workflow executions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowsProjectsLocationsWorkflowsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkflowsProjectsLocationsWorkflowsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkflowsProjectsLocationsWorkflowsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->workflowInput = new WorkflowInput();
    $request->workflowInput->description = 'tenetur';
    $request->workflowInput->labels = [
        'id' => 'possimus',
        'aut' => 'quasi',
    ];
    $request->workflowInput->name = 'Dr. Jake Pacocha';
    $request->workflowInput->serviceAccount = 'vero';
    $request->workflowInput->sourceContents = 'nihil';
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'omnis';
    $request->key = 'voluptate';
    $request->name = 'Thomas Batz';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->updateMask = 'corporis';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'iusto';

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
