# projects

### Available Operations

* [workloadmanagerProjectsLocationsEvaluationsCreate](#workloadmanagerprojectslocationsevaluationscreate) - Creates a new Evaluation in a given project and location.
* [workloadmanagerProjectsLocationsEvaluationsExecutionsList](#workloadmanagerprojectslocationsevaluationsexecutionslist) - Lists Executions in a given project and location.
* [workloadmanagerProjectsLocationsEvaluationsExecutionsResultsList](#workloadmanagerprojectslocationsevaluationsexecutionsresultslist) - List the running result of a single Execution.
* [workloadmanagerProjectsLocationsEvaluationsExecutionsRun](#workloadmanagerprojectslocationsevaluationsexecutionsrun) - Creates a new Execution in a given project and location.
* [workloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesList](#workloadmanagerprojectslocationsevaluationsexecutionsscannedresourceslist) - List all scanned resources for a single Execution.
* [workloadmanagerProjectsLocationsEvaluationsList](#workloadmanagerprojectslocationsevaluationslist) - Lists Evaluations in a given project and location.
* [workloadmanagerProjectsLocationsInsightsWriteInsight](#workloadmanagerprojectslocationsinsightswriteinsight) - Write the data insights to workload manager data warehouse.
* [workloadmanagerProjectsLocationsList](#workloadmanagerprojectslocationslist) - Lists information about the supported locations for this service.
* [workloadmanagerProjectsLocationsOperationsCancel](#workloadmanagerprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [workloadmanagerProjectsLocationsOperationsDelete](#workloadmanagerprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [workloadmanagerProjectsLocationsOperationsGet](#workloadmanagerprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [workloadmanagerProjectsLocationsOperationsList](#workloadmanagerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [workloadmanagerProjectsLocationsRulesList](#workloadmanagerprojectslocationsruleslist) - Lists rules in a given project.

## workloadmanagerProjectsLocationsEvaluationsCreate

Creates a new Evaluation in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsEvaluationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EvaluationInput;
use \OpenAPI\OpenAPI\Models\Shared\ResourceFilter;
use \OpenAPI\OpenAPI\Models\Shared\GceInstanceFilter;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkloadmanagerProjectsLocationsEvaluationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->evaluationInput = new EvaluationInput();
    $request->evaluationInput->description = 'officia';
    $request->evaluationInput->labels = [
        'fugit' => 'deleniti',
        'hic' => 'optio',
        'totam' => 'beatae',
    ];
    $request->evaluationInput->name = 'Tanya Gleason';
    $request->evaluationInput->resourceFilter = new ResourceFilter();
    $request->evaluationInput->resourceFilter->gceInstanceFilter = new GceInstanceFilter();
    $request->evaluationInput->resourceFilter->gceInstanceFilter->serviceAccounts = [
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->evaluationInput->resourceFilter->inclusionLabels = [
        'perferendis' => 'ad',
    ];
    $request->evaluationInput->resourceFilter->resourceIdPatterns = [
        'sed',
        'iste',
        'dolor',
    ];
    $request->evaluationInput->resourceFilter->scopes = [
        'laboriosam',
        'hic',
        'saepe',
    ];
    $request->evaluationInput->resourceStatus = new ResourceStatus();
    $request->evaluationInput->resourceStatus->rulesNewerVersions = [
        'in',
        'corporis',
        'iste',
    ];
    $request->evaluationInput->resourceStatus->state = ResourceStatusStateEnum::CREATING;
    $request->evaluationInput->ruleNames = [
        'quidem',
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->evaluationInput->schedule = 'est';
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolores';
    $request->evaluationId = 'dolorem';
    $request->fields = 'corporis';
    $request->key = 'explicabo';
    $request->oauthToken = 'nobis';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->requestId = 'nemo';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workloadmanagerProjectsLocationsEvaluationsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workloadmanagerProjectsLocationsEvaluationsExecutionsList

Lists Executions in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsEvaluationsExecutionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsEvaluationsExecutionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkloadmanagerProjectsLocationsEvaluationsExecutionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'sapiente';
    $request->filter = 'architecto';
    $request->key = 'mollitia';
    $request->oauthToken = 'dolorem';
    $request->orderBy = 'culpa';
    $request->pageSize = 161309;
    $request->pageToken = 'repellat';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new WorkloadmanagerProjectsLocationsEvaluationsExecutionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workloadmanagerProjectsLocationsEvaluationsExecutionsList($request, $requestSecurity);

    if ($response->listExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workloadmanagerProjectsLocationsEvaluationsExecutionsResultsList

List the running result of a single Execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsEvaluationsExecutionsResultsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsEvaluationsExecutionsResultsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkloadmanagerProjectsLocationsEvaluationsExecutionsResultsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'quia';
    $request->filter = 'quis';
    $request->key = 'vitae';
    $request->oauthToken = 'laborum';
    $request->pageSize = 656330;
    $request->pageToken = 'enim';
    $request->parent = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'tenetur';

    $requestSecurity = new WorkloadmanagerProjectsLocationsEvaluationsExecutionsResultsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workloadmanagerProjectsLocationsEvaluationsExecutionsResultsList($request, $requestSecurity);

    if ($response->listExecutionResultsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workloadmanagerProjectsLocationsEvaluationsExecutionsRun

Creates a new Execution in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsEvaluationsExecutionsRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RunEvaluationRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionInput;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionRunTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsEvaluationsExecutionsRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkloadmanagerProjectsLocationsEvaluationsExecutionsRunRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->runEvaluationRequestInput = new RunEvaluationRequestInput();
    $request->runEvaluationRequestInput->execution = new ExecutionInput();
    $request->runEvaluationRequestInput->execution->labels = [
        'possimus' => 'aut',
        'quasi' => 'error',
        'temporibus' => 'laborum',
    ];
    $request->runEvaluationRequestInput->execution->name = 'Johanna Wolf';
    $request->runEvaluationRequestInput->execution->runType = ExecutionRunTypeEnum::ONE_TIME;
    $request->runEvaluationRequestInput->executionId = 'voluptatibus';
    $request->runEvaluationRequestInput->requestId = 'ipsa';
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->fields = 'perferendis';
    $request->key = 'doloremque';
    $request->name = 'Mrs. April Wuckert';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new WorkloadmanagerProjectsLocationsEvaluationsExecutionsRunSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workloadmanagerProjectsLocationsEvaluationsExecutionsRun($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesList

List all scanned resources for a single Execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->fields = 'ipsum';
    $request->filter = 'quidem';
    $request->key = 'molestias';
    $request->oauthToken = 'excepturi';
    $request->orderBy = 'pariatur';
    $request->pageSize = 265389;
    $request->pageToken = 'praesentium';
    $request->parent = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptates';
    $request->rule = 'quasi';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new WorkloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesList($request, $requestSecurity);

    if ($response->listScannedResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workloadmanagerProjectsLocationsEvaluationsList

Lists Evaluations in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsEvaluationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsEvaluationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkloadmanagerProjectsLocationsEvaluationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->fields = 'consequatur';
    $request->filter = 'est';
    $request->key = 'quibusdam';
    $request->oauthToken = 'explicabo';
    $request->orderBy = 'deserunt';
    $request->pageSize = 716327;
    $request->pageToken = 'quibusdam';
    $request->parent = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new WorkloadmanagerProjectsLocationsEvaluationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workloadmanagerProjectsLocationsEvaluationsList($request, $requestSecurity);

    if ($response->listEvaluationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workloadmanagerProjectsLocationsInsightsWriteInsight

Write the data insights to workload manager data warehouse.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsInsightsWriteInsightRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WriteInsightRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\InsightInput;
use \OpenAPI\OpenAPI\Models\Shared\SapDiscovery;
use \OpenAPI\OpenAPI\Models\Shared\SapDiscoveryComponent;
use \OpenAPI\OpenAPI\Models\Shared\SapDiscoveryResource;
use \OpenAPI\OpenAPI\Models\Shared\SapDiscoveryResourceResourceStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\SapDiscoveryResourceResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SapDiscoveryMetadata;
use \OpenAPI\OpenAPI\Models\Shared\SapValidation;
use \OpenAPI\OpenAPI\Models\Shared\SapValidationValidationDetail;
use \OpenAPI\OpenAPI\Models\Shared\SapValidationValidationDetailSapValidationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsInsightsWriteInsightSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkloadmanagerProjectsLocationsInsightsWriteInsightRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->writeInsightRequestInput = new WriteInsightRequestInput();
    $request->writeInsightRequestInput->insight = new InsightInput();
    $request->writeInsightRequestInput->insight->sapDiscovery = new SapDiscovery();
    $request->writeInsightRequestInput->insight->sapDiscovery->applicationLayer = new SapDiscoveryComponent();
    $request->writeInsightRequestInput->insight->sapDiscovery->applicationLayer->applicationType = 'quos';
    $request->writeInsightRequestInput->insight->sapDiscovery->applicationLayer->databaseType = 'perferendis';
    $request->writeInsightRequestInput->insight->sapDiscovery->applicationLayer->hostProject = 'magni';
    $request->writeInsightRequestInput->insight->sapDiscovery->applicationLayer->resources = [
        new SapDiscoveryResource(),
        new SapDiscoveryResource(),
        new SapDiscoveryResource(),
        new SapDiscoveryResource(),
    ];
    $request->writeInsightRequestInput->insight->sapDiscovery->applicationLayer->sid = 'ipsam';
    $request->writeInsightRequestInput->insight->sapDiscovery->databaseLayer = new SapDiscoveryComponent();
    $request->writeInsightRequestInput->insight->sapDiscovery->databaseLayer->applicationType = 'alias';
    $request->writeInsightRequestInput->insight->sapDiscovery->databaseLayer->databaseType = 'fugit';
    $request->writeInsightRequestInput->insight->sapDiscovery->databaseLayer->hostProject = 'dolorum';
    $request->writeInsightRequestInput->insight->sapDiscovery->databaseLayer->resources = [
        new SapDiscoveryResource(),
        new SapDiscoveryResource(),
        new SapDiscoveryResource(),
    ];
    $request->writeInsightRequestInput->insight->sapDiscovery->databaseLayer->sid = 'tempora';
    $request->writeInsightRequestInput->insight->sapDiscovery->metadata = new SapDiscoveryMetadata();
    $request->writeInsightRequestInput->insight->sapDiscovery->metadata->customerRegion = 'facilis';
    $request->writeInsightRequestInput->insight->sapDiscovery->metadata->definedSystem = 'tempore';
    $request->writeInsightRequestInput->insight->sapDiscovery->metadata->environmentType = 'labore';
    $request->writeInsightRequestInput->insight->sapDiscovery->metadata->sapProduct = 'delectus';
    $request->writeInsightRequestInput->insight->sapDiscovery->systemId = 'eum';
    $request->writeInsightRequestInput->insight->sapDiscovery->updateTime = 'non';
    $request->writeInsightRequestInput->insight->sapValidation = new SapValidation();
    $request->writeInsightRequestInput->insight->sapValidation->validationDetails = [
        new SapValidationValidationDetail(),
        new SapValidationValidationDetail(),
        new SapValidationValidationDetail(),
        new SapValidationValidationDetail(),
    ];
    $request->writeInsightRequestInput->requestId = 'sint';
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'sint';
    $request->key = 'officia';
    $request->location = 'dolor';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'a';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'in';

    $requestSecurity = new WorkloadmanagerProjectsLocationsInsightsWriteInsightSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workloadmanagerProjectsLocationsInsightsWriteInsight($request, $requestSecurity);

    if ($response->writeInsightResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workloadmanagerProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkloadmanagerProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'rerum';
    $request->fields = 'dicta';
    $request->filter = 'magnam';
    $request->key = 'cumque';
    $request->name = 'Nathaniel Hyatt';
    $request->oauthToken = 'non';
    $request->pageSize = 581273;
    $request->pageToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new WorkloadmanagerProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workloadmanagerProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workloadmanagerProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkloadmanagerProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'id' => 'blanditiis',
        'deleniti' => 'sapiente',
        'amet' => 'deserunt',
    ];
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'omnis';
    $request->key = 'molestiae';
    $request->name = 'Marcia Gutkowski';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new WorkloadmanagerProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workloadmanagerProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workloadmanagerProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkloadmanagerProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aspernatur';
    $request->fields = 'architecto';
    $request->key = 'magnam';
    $request->name = 'Miriam Hermann';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new WorkloadmanagerProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workloadmanagerProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workloadmanagerProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkloadmanagerProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'necessitatibus';
    $request->key = 'odit';
    $request->name = 'Joyce Kertzmann';
    $request->oauthToken = 'eius';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new WorkloadmanagerProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workloadmanagerProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workloadmanagerProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkloadmanagerProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repudiandae';
    $request->fields = 'ullam';
    $request->filter = 'expedita';
    $request->key = 'nihil';
    $request->name = 'Marty Cormier';
    $request->oauthToken = 'accusantium';
    $request->pageSize = 162493;
    $request->pageToken = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'sunt';

    $requestSecurity = new WorkloadmanagerProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workloadmanagerProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workloadmanagerProjectsLocationsRulesList

Lists rules in a given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsRulesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkloadmanagerProjectsLocationsRulesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkloadmanagerProjectsLocationsRulesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maxime';
    $request->fields = 'ea';
    $request->filter = 'excepturi';
    $request->key = 'odit';
    $request->oauthToken = 'ea';
    $request->pageSize = 33222;
    $request->pageToken = 'ab';
    $request->parent = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new WorkloadmanagerProjectsLocationsRulesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workloadmanagerProjectsLocationsRulesList($request, $requestSecurity);

    if ($response->listRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
