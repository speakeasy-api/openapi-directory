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
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsLocationsBatchesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchInput;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentConfig;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionConfig;
use \OpenAPI\OpenAPI\Models\Shared\PeripheralsConfig;
use \OpenAPI\OpenAPI\Models\Shared\SparkHistoryServerConfig;
use \OpenAPI\OpenAPI\Models\Shared\PySparkBatch;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeConfig;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeInfoInput;
use \OpenAPI\OpenAPI\Models\Shared\UsageMetrics;
use \OpenAPI\OpenAPI\Models\Shared\UsageSnapshot;
use \OpenAPI\OpenAPI\Models\Shared\SparkBatch;
use \OpenAPI\OpenAPI\Models\Shared\SparkRBatch;
use \OpenAPI\OpenAPI\Models\Shared\SparkSqlBatch;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsLocationsBatchesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsLocationsBatchesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchInput = new BatchInput();
    $request->batchInput->environmentConfig = new EnvironmentConfig();
    $request->batchInput->environmentConfig->executionConfig = new ExecutionConfig();
    $request->batchInput->environmentConfig->executionConfig->idleTtl = 'provident';
    $request->batchInput->environmentConfig->executionConfig->kmsKey = 'distinctio';
    $request->batchInput->environmentConfig->executionConfig->networkTags = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->batchInput->environmentConfig->executionConfig->networkUri = 'vel';
    $request->batchInput->environmentConfig->executionConfig->serviceAccount = 'error';
    $request->batchInput->environmentConfig->executionConfig->stagingBucket = 'deserunt';
    $request->batchInput->environmentConfig->executionConfig->subnetworkUri = 'suscipit';
    $request->batchInput->environmentConfig->executionConfig->ttl = 'iure';
    $request->batchInput->environmentConfig->peripheralsConfig = new PeripheralsConfig();
    $request->batchInput->environmentConfig->peripheralsConfig->metastoreService = 'magnam';
    $request->batchInput->environmentConfig->peripheralsConfig->sparkHistoryServerConfig = new SparkHistoryServerConfig();
    $request->batchInput->environmentConfig->peripheralsConfig->sparkHistoryServerConfig->dataprocCluster = 'debitis';
    $request->batchInput->labels = [
        'delectus' => 'tempora',
    ];
    $request->batchInput->pysparkBatch = new PySparkBatch();
    $request->batchInput->pysparkBatch->archiveUris = [
        'molestiae',
        'minus',
    ];
    $request->batchInput->pysparkBatch->args = [
        'voluptatum',
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->batchInput->pysparkBatch->fileUris = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->batchInput->pysparkBatch->jarFileUris = [
        'perferendis',
        'ipsam',
        'repellendus',
    ];
    $request->batchInput->pysparkBatch->mainPythonFileUri = 'sapiente';
    $request->batchInput->pysparkBatch->pythonFileUris = [
        'odit',
        'at',
        'at',
        'maiores',
    ];
    $request->batchInput->runtimeConfig = new RuntimeConfig();
    $request->batchInput->runtimeConfig->containerImage = 'molestiae';
    $request->batchInput->runtimeConfig->properties = [
        'quod' => 'esse',
        'totam' => 'porro',
        'dolorum' => 'dicta',
        'nam' => 'officia',
    ];
    $request->batchInput->runtimeConfig->version = 'occaecati';
    $request->batchInput->runtimeInfo = new RuntimeInfoInput();
    $request->batchInput->runtimeInfo->approximateUsage = new UsageMetrics();
    $request->batchInput->runtimeInfo->approximateUsage->milliDcuSeconds = 'fugit';
    $request->batchInput->runtimeInfo->approximateUsage->shuffleStorageGbSeconds = 'deleniti';
    $request->batchInput->runtimeInfo->currentUsage = new UsageSnapshot();
    $request->batchInput->runtimeInfo->currentUsage->milliDcu = 'hic';
    $request->batchInput->runtimeInfo->currentUsage->shuffleStorageGb = 'optio';
    $request->batchInput->runtimeInfo->currentUsage->snapshotTime = 'totam';
    $request->batchInput->sparkBatch = new SparkBatch();
    $request->batchInput->sparkBatch->archiveUris = [
        'commodi',
    ];
    $request->batchInput->sparkBatch->args = [
        'modi',
        'qui',
    ];
    $request->batchInput->sparkBatch->fileUris = [
        'cum',
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->batchInput->sparkBatch->jarFileUris = [
        'perferendis',
    ];
    $request->batchInput->sparkBatch->mainClass = 'ad';
    $request->batchInput->sparkBatch->mainJarFileUri = 'natus';
    $request->batchInput->sparkRBatch = new SparkRBatch();
    $request->batchInput->sparkRBatch->archiveUris = [
        'iste',
    ];
    $request->batchInput->sparkRBatch->args = [
        'natus',
    ];
    $request->batchInput->sparkRBatch->fileUris = [
        'hic',
        'saepe',
    ];
    $request->batchInput->sparkRBatch->mainRFileUri = 'fuga';
    $request->batchInput->sparkSqlBatch = new SparkSqlBatch();
    $request->batchInput->sparkSqlBatch->jarFileUris = [
        'corporis',
        'iste',
    ];
    $request->batchInput->sparkSqlBatch->queryFileUri = 'iure';
    $request->batchInput->sparkSqlBatch->queryVariables = [
        'quidem' => 'architecto',
        'ipsa' => 'reiciendis',
        'est' => 'mollitia',
        'laborum' => 'dolores',
    ];
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->batchId = 'explicabo';
    $request->callback = 'nobis';
    $request->fields = 'enim';
    $request->key = 'omnis';
    $request->oauthToken = 'nemo';
    $request->parent = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->requestId = 'accusantium';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new DataprocProjectsLocationsBatchesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsLocationsBatchesCreate($request, $requestSecurity);

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

* [dataprocProjectsLocationsBatchesCreate](docs/projects/README.md#dataprocprojectslocationsbatchescreate) - Creates a batch workload that executes asynchronously.
* [dataprocProjectsLocationsBatchesList](docs/projects/README.md#dataprocprojectslocationsbatcheslist) - Lists batch workloads.
* [dataprocProjectsRegionsAutoscalingPoliciesCreate](docs/projects/README.md#dataprocprojectsregionsautoscalingpoliciescreate) - Creates new autoscaling policy.
* [dataprocProjectsRegionsAutoscalingPoliciesList](docs/projects/README.md#dataprocprojectsregionsautoscalingpolicieslist) - Lists autoscaling policies in the project.
* [dataprocProjectsRegionsClustersCreate](docs/projects/README.md#dataprocprojectsregionsclusterscreate) - Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
* [dataprocProjectsRegionsClustersDelete](docs/projects/README.md#dataprocprojectsregionsclustersdelete) - Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
* [dataprocProjectsRegionsClustersDiagnose](docs/projects/README.md#dataprocprojectsregionsclustersdiagnose) - Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).
* [dataprocProjectsRegionsClustersGet](docs/projects/README.md#dataprocprojectsregionsclustersget) - Gets the resource representation for a cluster in a project.
* [dataprocProjectsRegionsClustersInjectCredentials](docs/projects/README.md#dataprocprojectsregionsclustersinjectcredentials) - Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.
* [dataprocProjectsRegionsClustersList](docs/projects/README.md#dataprocprojectsregionsclusterslist) - Lists all regions/{region}/clusters in a project alphabetically.
* [dataprocProjectsRegionsClustersNodeGroupsCreate](docs/projects/README.md#dataprocprojectsregionsclustersnodegroupscreate) - Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
* [dataprocProjectsRegionsClustersNodeGroupsResize](docs/projects/README.md#dataprocprojectsregionsclustersnodegroupsresize) - Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
* [dataprocProjectsRegionsClustersPatch](docs/projects/README.md#dataprocprojectsregionsclusterspatch) - Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.
* [dataprocProjectsRegionsClustersRepair](docs/projects/README.md#dataprocprojectsregionsclustersrepair) - Repairs a cluster.
* [dataprocProjectsRegionsClustersStart](docs/projects/README.md#dataprocprojectsregionsclustersstart) - Starts a cluster in a project.
* [dataprocProjectsRegionsClustersStop](docs/projects/README.md#dataprocprojectsregionsclustersstop) - Stops a cluster in a project.
* [dataprocProjectsRegionsJobsCancel](docs/projects/README.md#dataprocprojectsregionsjobscancel) - Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).
* [dataprocProjectsRegionsJobsDelete](docs/projects/README.md#dataprocprojectsregionsjobsdelete) - Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
* [dataprocProjectsRegionsJobsGet](docs/projects/README.md#dataprocprojectsregionsjobsget) - Gets the resource representation for a job in a project.
* [dataprocProjectsRegionsJobsList](docs/projects/README.md#dataprocprojectsregionsjobslist) - Lists regions/{region}/jobs in a project.
* [dataprocProjectsRegionsJobsPatch](docs/projects/README.md#dataprocprojectsregionsjobspatch) - Updates a job in a project.
* [dataprocProjectsRegionsJobsSubmit](docs/projects/README.md#dataprocprojectsregionsjobssubmit) - Submits a job to a cluster.
* [dataprocProjectsRegionsJobsSubmitAsOperation](docs/projects/README.md#dataprocprojectsregionsjobssubmitasoperation) - Submits job to a cluster.
* [dataprocProjectsRegionsOperationsCancel](docs/projects/README.md#dataprocprojectsregionsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* [dataprocProjectsRegionsWorkflowTemplatesCreate](docs/projects/README.md#dataprocprojectsregionsworkflowtemplatescreate) - Creates new workflow template.
* [dataprocProjectsRegionsWorkflowTemplatesDelete](docs/projects/README.md#dataprocprojectsregionsworkflowtemplatesdelete) - Deletes a workflow template. It does not cancel in-progress workflows.
* [dataprocProjectsRegionsWorkflowTemplatesGet](docs/projects/README.md#dataprocprojectsregionsworkflowtemplatesget) - Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.
* [dataprocProjectsRegionsWorkflowTemplatesGetIamPolicy](docs/projects/README.md#dataprocprojectsregionsworkflowtemplatesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [dataprocProjectsRegionsWorkflowTemplatesInstantiate](docs/projects/README.md#dataprocprojectsregionsworkflowtemplatesinstantiate) - Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
* [dataprocProjectsRegionsWorkflowTemplatesInstantiateInline](docs/projects/README.md#dataprocprojectsregionsworkflowtemplatesinstantiateinline) - Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
* [dataprocProjectsRegionsWorkflowTemplatesList](docs/projects/README.md#dataprocprojectsregionsworkflowtemplateslist) - Lists workflows that match the specified filter in the request.
* [dataprocProjectsRegionsWorkflowTemplatesSetIamPolicy](docs/projects/README.md#dataprocprojectsregionsworkflowtemplatessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* [dataprocProjectsRegionsWorkflowTemplatesTestIamPermissions](docs/projects/README.md#dataprocprojectsregionsworkflowtemplatestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [dataprocProjectsRegionsWorkflowTemplatesUpdate](docs/projects/README.md#dataprocprojectsregionsworkflowtemplatesupdate) - Updates (replaces) workflow template. The updated template must contain version that matches the current server version.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
