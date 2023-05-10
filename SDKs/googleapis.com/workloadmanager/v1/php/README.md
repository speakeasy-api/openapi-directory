# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->evaluationInput->description = 'provident';
    $request->evaluationInput->labels = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->evaluationInput->name = 'Doug Hoppe';
    $request->evaluationInput->resourceFilter = new ResourceFilter();
    $request->evaluationInput->resourceFilter->gceInstanceFilter = new GceInstanceFilter();
    $request->evaluationInput->resourceFilter->gceInstanceFilter->serviceAccounts = [
        'ipsa',
        'delectus',
        'tempora',
        'suscipit',
    ];
    $request->evaluationInput->resourceFilter->inclusionLabels = [
        'minus' => 'placeat',
        'voluptatum' => 'iusto',
    ];
    $request->evaluationInput->resourceFilter->resourceIdPatterns = [
        'nisi',
        'recusandae',
        'temporibus',
    ];
    $request->evaluationInput->resourceFilter->scopes = [
        'quis',
    ];
    $request->evaluationInput->resourceStatus = new ResourceStatus();
    $request->evaluationInput->resourceStatus->rulesNewerVersions = [
        'deserunt',
    ];
    $request->evaluationInput->resourceStatus->state = ResourceStatusStateEnum::STATE_UNSPECIFIED;
    $request->evaluationInput->ruleNames = [
        'repellendus',
        'sapiente',
    ];
    $request->evaluationInput->schedule = 'quo';
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->evaluationId = 'maiores';
    $request->fields = 'molestiae';
    $request->key = 'quod';
    $request->oauthToken = 'quod';
    $request->parent = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->requestId = 'porro';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'dicta';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [workloadmanagerProjectsLocationsEvaluationsCreate](docs/projects/README.md#workloadmanagerprojectslocationsevaluationscreate) - Creates a new Evaluation in a given project and location.
* [workloadmanagerProjectsLocationsEvaluationsExecutionsList](docs/projects/README.md#workloadmanagerprojectslocationsevaluationsexecutionslist) - Lists Executions in a given project and location.
* [workloadmanagerProjectsLocationsEvaluationsExecutionsResultsList](docs/projects/README.md#workloadmanagerprojectslocationsevaluationsexecutionsresultslist) - List the running result of a single Execution.
* [workloadmanagerProjectsLocationsEvaluationsExecutionsRun](docs/projects/README.md#workloadmanagerprojectslocationsevaluationsexecutionsrun) - Creates a new Execution in a given project and location.
* [workloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesList](docs/projects/README.md#workloadmanagerprojectslocationsevaluationsexecutionsscannedresourceslist) - List all scanned resources for a single Execution.
* [workloadmanagerProjectsLocationsEvaluationsList](docs/projects/README.md#workloadmanagerprojectslocationsevaluationslist) - Lists Evaluations in a given project and location.
* [workloadmanagerProjectsLocationsInsightsWriteInsight](docs/projects/README.md#workloadmanagerprojectslocationsinsightswriteinsight) - Write the data insights to workload manager data warehouse.
* [workloadmanagerProjectsLocationsList](docs/projects/README.md#workloadmanagerprojectslocationslist) - Lists information about the supported locations for this service.
* [workloadmanagerProjectsLocationsOperationsCancel](docs/projects/README.md#workloadmanagerprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [workloadmanagerProjectsLocationsOperationsDelete](docs/projects/README.md#workloadmanagerprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [workloadmanagerProjectsLocationsOperationsGet](docs/projects/README.md#workloadmanagerprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [workloadmanagerProjectsLocationsOperationsList](docs/projects/README.md#workloadmanagerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [workloadmanagerProjectsLocationsRulesList](docs/projects/README.md#workloadmanagerprojectslocationsruleslist) - Lists rules in a given project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
