# projects

### Available Operations

* [dataprocProjectsLocationsBatchesCreate](#dataprocprojectslocationsbatchescreate) - Creates a batch workload that executes asynchronously.
* [dataprocProjectsLocationsBatchesList](#dataprocprojectslocationsbatcheslist) - Lists batch workloads.
* [dataprocProjectsRegionsAutoscalingPoliciesCreate](#dataprocprojectsregionsautoscalingpoliciescreate) - Creates new autoscaling policy.
* [dataprocProjectsRegionsAutoscalingPoliciesList](#dataprocprojectsregionsautoscalingpolicieslist) - Lists autoscaling policies in the project.
* [dataprocProjectsRegionsClustersCreate](#dataprocprojectsregionsclusterscreate) - Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
* [dataprocProjectsRegionsClustersDelete](#dataprocprojectsregionsclustersdelete) - Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
* [dataprocProjectsRegionsClustersDiagnose](#dataprocprojectsregionsclustersdiagnose) - Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).
* [dataprocProjectsRegionsClustersGet](#dataprocprojectsregionsclustersget) - Gets the resource representation for a cluster in a project.
* [dataprocProjectsRegionsClustersInjectCredentials](#dataprocprojectsregionsclustersinjectcredentials) - Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.
* [dataprocProjectsRegionsClustersList](#dataprocprojectsregionsclusterslist) - Lists all regions/{region}/clusters in a project alphabetically.
* [dataprocProjectsRegionsClustersNodeGroupsCreate](#dataprocprojectsregionsclustersnodegroupscreate) - Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
* [dataprocProjectsRegionsClustersNodeGroupsResize](#dataprocprojectsregionsclustersnodegroupsresize) - Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
* [dataprocProjectsRegionsClustersPatch](#dataprocprojectsregionsclusterspatch) - Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.
* [dataprocProjectsRegionsClustersRepair](#dataprocprojectsregionsclustersrepair) - Repairs a cluster.
* [dataprocProjectsRegionsClustersStart](#dataprocprojectsregionsclustersstart) - Starts a cluster in a project.
* [dataprocProjectsRegionsClustersStop](#dataprocprojectsregionsclustersstop) - Stops a cluster in a project.
* [dataprocProjectsRegionsJobsCancel](#dataprocprojectsregionsjobscancel) - Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).
* [dataprocProjectsRegionsJobsDelete](#dataprocprojectsregionsjobsdelete) - Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
* [dataprocProjectsRegionsJobsGet](#dataprocprojectsregionsjobsget) - Gets the resource representation for a job in a project.
* [dataprocProjectsRegionsJobsList](#dataprocprojectsregionsjobslist) - Lists regions/{region}/jobs in a project.
* [dataprocProjectsRegionsJobsPatch](#dataprocprojectsregionsjobspatch) - Updates a job in a project.
* [dataprocProjectsRegionsJobsSubmit](#dataprocprojectsregionsjobssubmit) - Submits a job to a cluster.
* [dataprocProjectsRegionsJobsSubmitAsOperation](#dataprocprojectsregionsjobssubmitasoperation) - Submits job to a cluster.
* [dataprocProjectsRegionsOperationsCancel](#dataprocprojectsregionsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* [dataprocProjectsRegionsWorkflowTemplatesCreate](#dataprocprojectsregionsworkflowtemplatescreate) - Creates new workflow template.
* [dataprocProjectsRegionsWorkflowTemplatesDelete](#dataprocprojectsregionsworkflowtemplatesdelete) - Deletes a workflow template. It does not cancel in-progress workflows.
* [dataprocProjectsRegionsWorkflowTemplatesGet](#dataprocprojectsregionsworkflowtemplatesget) - Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.
* [dataprocProjectsRegionsWorkflowTemplatesGetIamPolicy](#dataprocprojectsregionsworkflowtemplatesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [dataprocProjectsRegionsWorkflowTemplatesInstantiate](#dataprocprojectsregionsworkflowtemplatesinstantiate) - Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
* [dataprocProjectsRegionsWorkflowTemplatesInstantiateInline](#dataprocprojectsregionsworkflowtemplatesinstantiateinline) - Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
* [dataprocProjectsRegionsWorkflowTemplatesList](#dataprocprojectsregionsworkflowtemplateslist) - Lists workflows that match the specified filter in the request.
* [dataprocProjectsRegionsWorkflowTemplatesSetIamPolicy](#dataprocprojectsregionsworkflowtemplatessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* [dataprocProjectsRegionsWorkflowTemplatesTestIamPermissions](#dataprocprojectsregionsworkflowtemplatestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [dataprocProjectsRegionsWorkflowTemplatesUpdate](#dataprocprojectsregionsworkflowtemplatesupdate) - Updates (replaces) workflow template. The updated template must contain version that matches the current server version.

## dataprocProjectsLocationsBatchesCreate

Creates a batch workload that executes asynchronously.

### Example Usage

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
    $request->batchInput->environmentConfig->executionConfig->idleTtl = 'sapiente';
    $request->batchInput->environmentConfig->executionConfig->kmsKey = 'architecto';
    $request->batchInput->environmentConfig->executionConfig->networkTags = [
        'dolorem',
        'culpa',
        'consequuntur',
    ];
    $request->batchInput->environmentConfig->executionConfig->networkUri = 'repellat';
    $request->batchInput->environmentConfig->executionConfig->serviceAccount = 'mollitia';
    $request->batchInput->environmentConfig->executionConfig->stagingBucket = 'occaecati';
    $request->batchInput->environmentConfig->executionConfig->subnetworkUri = 'numquam';
    $request->batchInput->environmentConfig->executionConfig->ttl = 'commodi';
    $request->batchInput->environmentConfig->peripheralsConfig = new PeripheralsConfig();
    $request->batchInput->environmentConfig->peripheralsConfig->metastoreService = 'quam';
    $request->batchInput->environmentConfig->peripheralsConfig->sparkHistoryServerConfig = new SparkHistoryServerConfig();
    $request->batchInput->environmentConfig->peripheralsConfig->sparkHistoryServerConfig->dataprocCluster = 'molestiae';
    $request->batchInput->labels = [
        'error' => 'quia',
    ];
    $request->batchInput->pysparkBatch = new PySparkBatch();
    $request->batchInput->pysparkBatch->archiveUris = [
        'vitae',
        'laborum',
    ];
    $request->batchInput->pysparkBatch->args = [
        'enim',
        'odit',
        'quo',
    ];
    $request->batchInput->pysparkBatch->fileUris = [
        'tenetur',
    ];
    $request->batchInput->pysparkBatch->jarFileUris = [
        'id',
        'possimus',
    ];
    $request->batchInput->pysparkBatch->mainPythonFileUri = 'aut';
    $request->batchInput->pysparkBatch->pythonFileUris = [
        'error',
    ];
    $request->batchInput->runtimeConfig = new RuntimeConfig();
    $request->batchInput->runtimeConfig->containerImage = 'temporibus';
    $request->batchInput->runtimeConfig->properties = [
        'quasi' => 'reiciendis',
        'voluptatibus' => 'vero',
        'nihil' => 'praesentium',
    ];
    $request->batchInput->runtimeConfig->version = 'voluptatibus';
    $request->batchInput->runtimeInfo = new RuntimeInfoInput();
    $request->batchInput->runtimeInfo->approximateUsage = new UsageMetrics();
    $request->batchInput->runtimeInfo->approximateUsage->milliDcuSeconds = 'ipsa';
    $request->batchInput->runtimeInfo->approximateUsage->shuffleStorageGbSeconds = 'omnis';
    $request->batchInput->runtimeInfo->currentUsage = new UsageSnapshot();
    $request->batchInput->runtimeInfo->currentUsage->milliDcu = 'voluptate';
    $request->batchInput->runtimeInfo->currentUsage->shuffleStorageGb = 'cum';
    $request->batchInput->runtimeInfo->currentUsage->snapshotTime = 'perferendis';
    $request->batchInput->sparkBatch = new SparkBatch();
    $request->batchInput->sparkBatch->archiveUris = [
        'reprehenderit',
    ];
    $request->batchInput->sparkBatch->args = [
        'maiores',
        'dicta',
    ];
    $request->batchInput->sparkBatch->fileUris = [
        'dolore',
        'iusto',
    ];
    $request->batchInput->sparkBatch->jarFileUris = [
        'harum',
    ];
    $request->batchInput->sparkBatch->mainClass = 'enim';
    $request->batchInput->sparkBatch->mainJarFileUri = 'accusamus';
    $request->batchInput->sparkRBatch = new SparkRBatch();
    $request->batchInput->sparkRBatch->archiveUris = [
        'repudiandae',
        'quae',
    ];
    $request->batchInput->sparkRBatch->args = [
        'quidem',
    ];
    $request->batchInput->sparkRBatch->fileUris = [
        'excepturi',
        'pariatur',
        'modi',
    ];
    $request->batchInput->sparkRBatch->mainRFileUri = 'praesentium';
    $request->batchInput->sparkSqlBatch = new SparkSqlBatch();
    $request->batchInput->sparkSqlBatch->jarFileUris = [
        'voluptates',
        'quasi',
        'repudiandae',
    ];
    $request->batchInput->sparkSqlBatch->queryFileUri = 'sint';
    $request->batchInput->sparkSqlBatch->queryVariables = [
        'itaque' => 'incidunt',
    ];
    $request->accessToken = 'enim';
    $request->alt = AltEnum::JSON;
    $request->batchId = 'est';
    $request->callback = 'quibusdam';
    $request->fields = 'explicabo';
    $request->key = 'deserunt';
    $request->oauthToken = 'distinctio';
    $request->parent = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->requestId = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'aliquid';

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

## dataprocProjectsLocationsBatchesList

Lists batch workloads.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsLocationsBatchesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsLocationsBatchesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsLocationsBatchesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magni';
    $request->fields = 'assumenda';
    $request->filter = 'ipsam';
    $request->key = 'alias';
    $request->oauthToken = 'fugit';
    $request->orderBy = 'dolorum';
    $request->pageSize = 569618;
    $request->pageToken = 'tempora';
    $request->parent = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new DataprocProjectsLocationsBatchesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsLocationsBatchesList($request, $requestSecurity);

    if ($response->listBatchesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsAutoscalingPoliciesCreate

Creates new autoscaling policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsAutoscalingPoliciesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingPolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\BasicAutoscalingAlgorithm;
use \OpenAPI\OpenAPI\Models\Shared\SparkStandaloneAutoscalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\BasicYarnAutoscalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupAutoscalingPolicyConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsAutoscalingPoliciesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsAutoscalingPoliciesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->autoscalingPolicyInput = new AutoscalingPolicyInput();
    $request->autoscalingPolicyInput->basicAlgorithm = new BasicAutoscalingAlgorithm();
    $request->autoscalingPolicyInput->basicAlgorithm->cooldownPeriod = 'non';
    $request->autoscalingPolicyInput->basicAlgorithm->sparkStandaloneConfig = new SparkStandaloneAutoscalingConfig();
    $request->autoscalingPolicyInput->basicAlgorithm->sparkStandaloneConfig->gracefulDecommissionTimeout = 'eligendi';
    $request->autoscalingPolicyInput->basicAlgorithm->sparkStandaloneConfig->scaleDownFactor = 5761.57;
    $request->autoscalingPolicyInput->basicAlgorithm->sparkStandaloneConfig->scaleDownMinWorkerFraction = 3960.98;
    $request->autoscalingPolicyInput->basicAlgorithm->sparkStandaloneConfig->scaleUpFactor = 5920.42;
    $request->autoscalingPolicyInput->basicAlgorithm->sparkStandaloneConfig->scaleUpMinWorkerFraction = 8960.39;
    $request->autoscalingPolicyInput->basicAlgorithm->yarnConfig = new BasicYarnAutoscalingConfig();
    $request->autoscalingPolicyInput->basicAlgorithm->yarnConfig->gracefulDecommissionTimeout = 'sint';
    $request->autoscalingPolicyInput->basicAlgorithm->yarnConfig->scaleDownFactor = 6389.21;
    $request->autoscalingPolicyInput->basicAlgorithm->yarnConfig->scaleDownMinWorkerFraction = 2230.81;
    $request->autoscalingPolicyInput->basicAlgorithm->yarnConfig->scaleUpFactor = 8915.55;
    $request->autoscalingPolicyInput->basicAlgorithm->yarnConfig->scaleUpMinWorkerFraction = 9527.49;
    $request->autoscalingPolicyInput->id = 'a77dfb14-cd66-4ae3-95ef-b9ba88f3a669';
    $request->autoscalingPolicyInput->labels = [
        'molestiae' => 'perferendis',
        'nihil' => 'magnam',
        'distinctio' => 'id',
    ];
    $request->autoscalingPolicyInput->secondaryWorkerConfig = new InstanceGroupAutoscalingPolicyConfig();
    $request->autoscalingPolicyInput->secondaryWorkerConfig->maxInstances = 287991;
    $request->autoscalingPolicyInput->secondaryWorkerConfig->minInstances = 290077;
    $request->autoscalingPolicyInput->secondaryWorkerConfig->weight = 383462;
    $request->autoscalingPolicyInput->workerConfig = new InstanceGroupAutoscalingPolicyConfig();
    $request->autoscalingPolicyInput->workerConfig->maxInstances = 618016;
    $request->autoscalingPolicyInput->workerConfig->minInstances = 749170;
    $request->autoscalingPolicyInput->workerConfig->weight = 428769;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'architecto';
    $request->fields = 'magnam';
    $request->key = 'et';
    $request->oauthToken = 'excepturi';
    $request->parent = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new DataprocProjectsRegionsAutoscalingPoliciesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsAutoscalingPoliciesCreate($request, $requestSecurity);

    if ($response->autoscalingPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsAutoscalingPoliciesList

Lists autoscaling policies in the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsAutoscalingPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsAutoscalingPoliciesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsAutoscalingPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'ad';
    $request->key = 'eum';
    $request->oauthToken = 'dolor';
    $request->pageSize = 896547;
    $request->pageToken = 'odit';
    $request->parent = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'doloribus';

    $requestSecurity = new DataprocProjectsRegionsAutoscalingPoliciesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsAutoscalingPoliciesList($request, $requestSecurity);

    if ($response->listAutoscalingPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsClustersCreate

Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClusterInput;
use \OpenAPI\OpenAPI\Models\Shared\ClusterConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuxiliaryNodeGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\DiskConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupConfigPreemptibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupRolesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataprocMetricConfig;
use \OpenAPI\OpenAPI\Models\Shared\Metric;
use \OpenAPI\OpenAPI\Models\Shared\MetricMetricSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\EndpointConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GceClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConfidentialInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupAffinity;
use \OpenAPI\OpenAPI\Models\Shared\GceClusterConfigPrivateIpv6GoogleAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinity;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinityConsumeReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\NamespacedGkeDeploymentTarget;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolTarget;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolAutoscalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolAcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolTargetRolesEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeInitializationAction;
use \OpenAPI\OpenAPI\Models\Shared\LifecycleConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\MetastoreConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityConfig;
use \OpenAPI\OpenAPI\Models\Shared\IdentityConfig;
use \OpenAPI\OpenAPI\Models\Shared\KerberosConfig;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareConfig;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareConfigOptionalComponentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClusterMetrics;
use \OpenAPI\OpenAPI\Models\Shared\VirtualClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuxiliaryServicesConfig;
use \OpenAPI\OpenAPI\Models\Shared\SparkHistoryServerConfig;
use \OpenAPI\OpenAPI\Models\Shared\KubernetesClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\KubernetesSoftwareConfig;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsClustersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->clusterInput = new ClusterInput();
    $request->clusterInput->clusterName = 'eius';
    $request->clusterInput->config = new ClusterConfigInput();
    $request->clusterInput->config->autoscalingConfig = new AutoscalingConfig();
    $request->clusterInput->config->autoscalingConfig->policyUri = 'maxime';
    $request->clusterInput->config->auxiliaryNodeGroups = [
        new AuxiliaryNodeGroupInput(),
        new AuxiliaryNodeGroupInput(),
        new AuxiliaryNodeGroupInput(),
    ];
    $request->clusterInput->config->configBucket = 'facilis';
    $request->clusterInput->config->dataprocMetricConfig = new DataprocMetricConfig();
    $request->clusterInput->config->dataprocMetricConfig->metrics = [
        new Metric(),
        new Metric(),
    ];
    $request->clusterInput->config->encryptionConfig = new EncryptionConfig();
    $request->clusterInput->config->encryptionConfig->gcePdKmsKeyName = 'architecto';
    $request->clusterInput->config->encryptionConfig->kmsKey = 'architecto';
    $request->clusterInput->config->endpointConfig = new EndpointConfigInput();
    $request->clusterInput->config->endpointConfig->enableHttpPortAccess = false;
    $request->clusterInput->config->gceClusterConfig = new GceClusterConfig();
    $request->clusterInput->config->gceClusterConfig->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->clusterInput->config->gceClusterConfig->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->clusterInput->config->gceClusterConfig->internalIpOnly = false;
    $request->clusterInput->config->gceClusterConfig->metadata = [
        'ullam' => 'expedita',
        'nihil' => 'repellat',
        'quibusdam' => 'sed',
        'saepe' => 'pariatur',
    ];
    $request->clusterInput->config->gceClusterConfig->networkUri = 'accusantium';
    $request->clusterInput->config->gceClusterConfig->nodeGroupAffinity = new NodeGroupAffinity();
    $request->clusterInput->config->gceClusterConfig->nodeGroupAffinity->nodeGroupUri = 'consequuntur';
    $request->clusterInput->config->gceClusterConfig->privateIpv6GoogleAccess = GceClusterConfigPrivateIpv6GoogleAccessEnum::OUTBOUND;
    $request->clusterInput->config->gceClusterConfig->reservationAffinity = new ReservationAffinity();
    $request->clusterInput->config->gceClusterConfig->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::ANY_RESERVATION;
    $request->clusterInput->config->gceClusterConfig->reservationAffinity->key = 'magni';
    $request->clusterInput->config->gceClusterConfig->reservationAffinity->values = [
        'quo',
    ];
    $request->clusterInput->config->gceClusterConfig->serviceAccount = 'illum';
    $request->clusterInput->config->gceClusterConfig->serviceAccountScopes = [
        'maxime',
        'ea',
        'excepturi',
        'odit',
    ];
    $request->clusterInput->config->gceClusterConfig->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->clusterInput->config->gceClusterConfig->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->clusterInput->config->gceClusterConfig->shieldedInstanceConfig->enableSecureBoot = false;
    $request->clusterInput->config->gceClusterConfig->shieldedInstanceConfig->enableVtpm = false;
    $request->clusterInput->config->gceClusterConfig->subnetworkUri = 'ea';
    $request->clusterInput->config->gceClusterConfig->tags = [
        'ab',
    ];
    $request->clusterInput->config->gceClusterConfig->zoneUri = 'maiores';
    $request->clusterInput->config->gkeClusterConfig = new GkeClusterConfig();
    $request->clusterInput->config->gkeClusterConfig->gkeClusterTarget = 'quidem';
    $request->clusterInput->config->gkeClusterConfig->namespacedGkeDeploymentTarget = new NamespacedGkeDeploymentTarget();
    $request->clusterInput->config->gkeClusterConfig->namespacedGkeDeploymentTarget->clusterNamespace = 'ipsam';
    $request->clusterInput->config->gkeClusterConfig->namespacedGkeDeploymentTarget->targetGkeCluster = 'voluptate';
    $request->clusterInput->config->gkeClusterConfig->nodePoolTarget = [
        new GkeNodePoolTarget(),
        new GkeNodePoolTarget(),
    ];
    $request->clusterInput->config->initializationActions = [
        new NodeInitializationAction(),
        new NodeInitializationAction(),
        new NodeInitializationAction(),
    ];
    $request->clusterInput->config->lifecycleConfig = new LifecycleConfigInput();
    $request->clusterInput->config->lifecycleConfig->autoDeleteTime = 'eaque';
    $request->clusterInput->config->lifecycleConfig->autoDeleteTtl = 'pariatur';
    $request->clusterInput->config->lifecycleConfig->idleDeleteTtl = 'nemo';
    $request->clusterInput->config->masterConfig = new InstanceGroupConfigInput();
    $request->clusterInput->config->masterConfig->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->clusterInput->config->masterConfig->diskConfig = new DiskConfig();
    $request->clusterInput->config->masterConfig->diskConfig->bootDiskSizeGb = 16627;
    $request->clusterInput->config->masterConfig->diskConfig->bootDiskType = 'fugiat';
    $request->clusterInput->config->masterConfig->diskConfig->localSsdInterface = 'amet';
    $request->clusterInput->config->masterConfig->diskConfig->numLocalSsds = 11714;
    $request->clusterInput->config->masterConfig->imageUri = 'cumque';
    $request->clusterInput->config->masterConfig->machineTypeUri = 'corporis';
    $request->clusterInput->config->masterConfig->minCpuPlatform = 'hic';
    $request->clusterInput->config->masterConfig->numInstances = 729991;
    $request->clusterInput->config->masterConfig->preemptibility = InstanceGroupConfigPreemptibilityEnum::PREEMPTIBLE;
    $request->clusterInput->config->metastoreConfig = new MetastoreConfig();
    $request->clusterInput->config->metastoreConfig->dataprocMetastoreService = 'dolores';
    $request->clusterInput->config->secondaryWorkerConfig = new InstanceGroupConfigInput();
    $request->clusterInput->config->secondaryWorkerConfig->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->clusterInput->config->secondaryWorkerConfig->diskConfig = new DiskConfig();
    $request->clusterInput->config->secondaryWorkerConfig->diskConfig->bootDiskSizeGb = 521037;
    $request->clusterInput->config->secondaryWorkerConfig->diskConfig->bootDiskType = 'dignissimos';
    $request->clusterInput->config->secondaryWorkerConfig->diskConfig->localSsdInterface = 'eaque';
    $request->clusterInput->config->secondaryWorkerConfig->diskConfig->numLocalSsds = 338985;
    $request->clusterInput->config->secondaryWorkerConfig->imageUri = 'nesciunt';
    $request->clusterInput->config->secondaryWorkerConfig->machineTypeUri = 'eos';
    $request->clusterInput->config->secondaryWorkerConfig->minCpuPlatform = 'perferendis';
    $request->clusterInput->config->secondaryWorkerConfig->numInstances = 170986;
    $request->clusterInput->config->secondaryWorkerConfig->preemptibility = InstanceGroupConfigPreemptibilityEnum::SPOT;
    $request->clusterInput->config->securityConfig = new SecurityConfig();
    $request->clusterInput->config->securityConfig->identityConfig = new IdentityConfig();
    $request->clusterInput->config->securityConfig->identityConfig->userServiceAccountMapping = [
        'dolor' => 'vero',
        'nostrum' => 'hic',
    ];
    $request->clusterInput->config->securityConfig->kerberosConfig = new KerberosConfig();
    $request->clusterInput->config->securityConfig->kerberosConfig->crossRealmTrustAdminServer = 'recusandae';
    $request->clusterInput->config->securityConfig->kerberosConfig->crossRealmTrustKdc = 'omnis';
    $request->clusterInput->config->securityConfig->kerberosConfig->crossRealmTrustRealm = 'facilis';
    $request->clusterInput->config->securityConfig->kerberosConfig->crossRealmTrustSharedPasswordUri = 'perspiciatis';
    $request->clusterInput->config->securityConfig->kerberosConfig->enableKerberos = false;
    $request->clusterInput->config->securityConfig->kerberosConfig->kdcDbKeyUri = 'voluptatem';
    $request->clusterInput->config->securityConfig->kerberosConfig->keyPasswordUri = 'porro';
    $request->clusterInput->config->securityConfig->kerberosConfig->keystorePasswordUri = 'consequuntur';
    $request->clusterInput->config->securityConfig->kerberosConfig->keystoreUri = 'blanditiis';
    $request->clusterInput->config->securityConfig->kerberosConfig->kmsKeyUri = 'error';
    $request->clusterInput->config->securityConfig->kerberosConfig->realm = 'eaque';
    $request->clusterInput->config->securityConfig->kerberosConfig->rootPrincipalPasswordUri = 'occaecati';
    $request->clusterInput->config->securityConfig->kerberosConfig->tgtLifetimeHours = 699098;
    $request->clusterInput->config->securityConfig->kerberosConfig->truststorePasswordUri = 'adipisci';
    $request->clusterInput->config->securityConfig->kerberosConfig->truststoreUri = 'asperiores';
    $request->clusterInput->config->softwareConfig = new SoftwareConfig();
    $request->clusterInput->config->softwareConfig->imageVersion = 'earum';
    $request->clusterInput->config->softwareConfig->optionalComponents = [
        SoftwareConfigOptionalComponentsEnum::PRESTO,
        SoftwareConfigOptionalComponentsEnum::TRINO,
    ];
    $request->clusterInput->config->softwareConfig->properties = [
        'pariatur' => 'provident',
        'nobis' => 'libero',
        'delectus' => 'quaerat',
    ];
    $request->clusterInput->config->tempBucket = 'quos';
    $request->clusterInput->config->workerConfig = new InstanceGroupConfigInput();
    $request->clusterInput->config->workerConfig->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->clusterInput->config->workerConfig->diskConfig = new DiskConfig();
    $request->clusterInput->config->workerConfig->diskConfig->bootDiskSizeGb = 212390;
    $request->clusterInput->config->workerConfig->diskConfig->bootDiskType = 'dolorem';
    $request->clusterInput->config->workerConfig->diskConfig->localSsdInterface = 'dolor';
    $request->clusterInput->config->workerConfig->diskConfig->numLocalSsds = 186193;
    $request->clusterInput->config->workerConfig->imageUri = 'ipsum';
    $request->clusterInput->config->workerConfig->machineTypeUri = 'hic';
    $request->clusterInput->config->workerConfig->minCpuPlatform = 'excepturi';
    $request->clusterInput->config->workerConfig->numInstances = 739551;
    $request->clusterInput->config->workerConfig->preemptibility = InstanceGroupConfigPreemptibilityEnum::NON_PREEMPTIBLE;
    $request->clusterInput->labels = [
        'reiciendis' => 'amet',
        'dolorum' => 'numquam',
    ];
    $request->clusterInput->metrics = new ClusterMetrics();
    $request->clusterInput->metrics->hdfsMetrics = [
        'ipsa' => 'ipsa',
    ];
    $request->clusterInput->metrics->yarnMetrics = [
        'odio' => 'quaerat',
        'accusamus' => 'quidem',
    ];
    $request->clusterInput->projectId = 'voluptatibus';
    $request->clusterInput->virtualClusterConfig = new VirtualClusterConfig();
    $request->clusterInput->virtualClusterConfig->auxiliaryServicesConfig = new AuxiliaryServicesConfig();
    $request->clusterInput->virtualClusterConfig->auxiliaryServicesConfig->metastoreConfig = new MetastoreConfig();
    $request->clusterInput->virtualClusterConfig->auxiliaryServicesConfig->metastoreConfig->dataprocMetastoreService = 'voluptas';
    $request->clusterInput->virtualClusterConfig->auxiliaryServicesConfig->sparkHistoryServerConfig = new SparkHistoryServerConfig();
    $request->clusterInput->virtualClusterConfig->auxiliaryServicesConfig->sparkHistoryServerConfig->dataprocCluster = 'natus';
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig = new KubernetesClusterConfig();
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig->gkeClusterConfig = new GkeClusterConfig();
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig->gkeClusterConfig->gkeClusterTarget = 'eos';
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig->gkeClusterConfig->namespacedGkeDeploymentTarget = new NamespacedGkeDeploymentTarget();
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig->gkeClusterConfig->namespacedGkeDeploymentTarget->clusterNamespace = 'atque';
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig->gkeClusterConfig->namespacedGkeDeploymentTarget->targetGkeCluster = 'sit';
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig->gkeClusterConfig->nodePoolTarget = [
        new GkeNodePoolTarget(),
        new GkeNodePoolTarget(),
        new GkeNodePoolTarget(),
        new GkeNodePoolTarget(),
    ];
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig->kubernetesNamespace = 'ab';
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig->kubernetesSoftwareConfig = new KubernetesSoftwareConfig();
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig->kubernetesSoftwareConfig->componentVersion = [
        'dolorum' => 'iusto',
        'voluptate' => 'dolorum',
        'deleniti' => 'omnis',
    ];
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig->kubernetesSoftwareConfig->properties = [
        'distinctio' => 'asperiores',
        'nihil' => 'ipsum',
        'voluptate' => 'id',
        'saepe' => 'eius',
    ];
    $request->clusterInput->virtualClusterConfig->stagingBucket = 'aspernatur';
    $request->accessToken = 'perferendis';
    $request->actionOnFailedPrimaryWorkers = DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnum::FAILURE_ACTION_UNSPECIFIED;
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'ad';
    $request->key = 'saepe';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->projectId = 'deserunt';
    $request->quotaUser = 'provident';
    $request->region = 'minima';
    $request->requestId = 'repellendus';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'similique';

    $requestSecurity = new DataprocProjectsRegionsClustersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsClustersCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsClustersDelete

Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsClustersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'at';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->clusterName = 'vel';
    $request->clusterUuid = 'quod';
    $request->fields = 'officiis';
    $request->key = 'qui';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->projectId = 'a';
    $request->quotaUser = 'esse';
    $request->region = 'harum';
    $request->requestId = 'iusto';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quisquam';

    $requestSecurity = new DataprocProjectsRegionsClustersDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsClustersDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsClustersDiagnose

Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersDiagnoseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiagnoseClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\Interval;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersDiagnoseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsClustersDiagnoseRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->diagnoseClusterRequest = new DiagnoseClusterRequest();
    $request->diagnoseClusterRequest->diagnosisInterval = new Interval();
    $request->diagnoseClusterRequest->diagnosisInterval->endTime = 'amet';
    $request->diagnoseClusterRequest->diagnosisInterval->startTime = 'tempore';
    $request->diagnoseClusterRequest->job = 'accusamus';
    $request->diagnoseClusterRequest->jobs = [
        'enim',
        'dolorem',
    ];
    $request->diagnoseClusterRequest->yarnApplicationId = 'sapiente';
    $request->diagnoseClusterRequest->yarnApplicationIds = [
        'nihil',
        'sit',
        'expedita',
    ];
    $request->accessToken = 'neque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->clusterName = 'libero';
    $request->fields = 'voluptas';
    $request->key = 'deserunt';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->projectId = 'ipsum';
    $request->quotaUser = 'incidunt';
    $request->region = 'qui';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'maxime';

    $requestSecurity = new DataprocProjectsRegionsClustersDiagnoseSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsClustersDiagnose($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsClustersGet

Gets the resource representation for a cluster in a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsClustersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->clusterName = 'totam';
    $request->fields = 'incidunt';
    $request->key = 'aspernatur';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->projectId = 'distinctio';
    $request->quotaUser = 'facilis';
    $request->region = 'aliquid';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestias';

    $requestSecurity = new DataprocProjectsRegionsClustersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsClustersGet($request, $requestSecurity);

    if ($response->cluster !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsClustersInjectCredentials

Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersInjectCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InjectCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersInjectCredentialsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsClustersInjectCredentialsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->injectCredentialsRequest = new InjectCredentialsRequest();
    $request->injectCredentialsRequest->clusterUuid = 'qui';
    $request->injectCredentialsRequest->credentialsCiphertext = 'neque';
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odio';
    $request->cluster = 'sunt';
    $request->fields = 'ullam';
    $request->key = 'nam';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->project = 'voluptatem';
    $request->quotaUser = 'cumque';
    $request->region = 'soluta';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'et';

    $requestSecurity = new DataprocProjectsRegionsClustersInjectCredentialsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsClustersInjectCredentials($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsClustersList

Lists all regions/{region}/clusters in a project alphabetically.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsClustersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nobis';
    $request->fields = 'quos';
    $request->filter = 'tempore';
    $request->key = 'cupiditate';
    $request->oauthToken = 'aperiam';
    $request->pageSize = 961937;
    $request->pageToken = 'dolorem';
    $request->prettyPrint = false;
    $request->projectId = 'dolore';
    $request->quotaUser = 'labore';
    $request->region = 'adipisci';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new DataprocProjectsRegionsClustersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsClustersList($request, $requestSecurity);

    if ($response->listClustersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsClustersNodeGroupsCreate

Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersNodeGroupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\DiskConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupConfigPreemptibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupRolesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersNodeGroupsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsClustersNodeGroupsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->nodeGroupInput = new NodeGroupInput();
    $request->nodeGroupInput->labels = [
        'quas' => 'itaque',
    ];
    $request->nodeGroupInput->name = 'Jodi Skiles';
    $request->nodeGroupInput->nodeGroupConfig = new InstanceGroupConfigInput();
    $request->nodeGroupInput->nodeGroupConfig->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->nodeGroupInput->nodeGroupConfig->diskConfig = new DiskConfig();
    $request->nodeGroupInput->nodeGroupConfig->diskConfig->bootDiskSizeGb = 703495;
    $request->nodeGroupInput->nodeGroupConfig->diskConfig->bootDiskType = 'cupiditate';
    $request->nodeGroupInput->nodeGroupConfig->diskConfig->localSsdInterface = 'qui';
    $request->nodeGroupInput->nodeGroupConfig->diskConfig->numLocalSsds = 63955;
    $request->nodeGroupInput->nodeGroupConfig->imageUri = 'laudantium';
    $request->nodeGroupInput->nodeGroupConfig->machineTypeUri = 'odio';
    $request->nodeGroupInput->nodeGroupConfig->minCpuPlatform = 'occaecati';
    $request->nodeGroupInput->nodeGroupConfig->numInstances = 977496;
    $request->nodeGroupInput->nodeGroupConfig->preemptibility = InstanceGroupConfigPreemptibilityEnum::SPOT;
    $request->nodeGroupInput->roles = [
        NodeGroupRolesEnum::DRIVER,
        NodeGroupRolesEnum::ROLE_UNSPECIFIED,
        NodeGroupRolesEnum::ROLE_UNSPECIFIED,
        NodeGroupRolesEnum::DRIVER,
    ];
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vero';
    $request->fields = 'tenetur';
    $request->key = 'dignissimos';
    $request->nodeGroupId = 'hic';
    $request->oauthToken = 'distinctio';
    $request->parent = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'odio';
    $request->requestId = 'similique';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new DataprocProjectsRegionsClustersNodeGroupsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsClustersNodeGroupsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsClustersNodeGroupsResize

Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersNodeGroupsResizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResizeNodeGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersNodeGroupsResizeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsClustersNodeGroupsResizeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->resizeNodeGroupRequest = new ResizeNodeGroupRequest();
    $request->resizeNodeGroupRequest->gracefulDecommissionTimeout = 'dolore';
    $request->resizeNodeGroupRequest->requestId = 'quibusdam';
    $request->resizeNodeGroupRequest->size = 848944;
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'impedit';
    $request->fields = 'aut';
    $request->key = 'voluptatibus';
    $request->name = 'Freda Cormier';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'ducimus';

    $requestSecurity = new DataprocProjectsRegionsClustersNodeGroupsResizeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsClustersNodeGroupsResize($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsClustersPatch

Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClusterInput;
use \OpenAPI\OpenAPI\Models\Shared\ClusterConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuxiliaryNodeGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\DiskConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupConfigPreemptibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupRolesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataprocMetricConfig;
use \OpenAPI\OpenAPI\Models\Shared\Metric;
use \OpenAPI\OpenAPI\Models\Shared\MetricMetricSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\EndpointConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GceClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConfidentialInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupAffinity;
use \OpenAPI\OpenAPI\Models\Shared\GceClusterConfigPrivateIpv6GoogleAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinity;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinityConsumeReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\NamespacedGkeDeploymentTarget;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolTarget;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolAutoscalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolAcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolTargetRolesEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeInitializationAction;
use \OpenAPI\OpenAPI\Models\Shared\LifecycleConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\MetastoreConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityConfig;
use \OpenAPI\OpenAPI\Models\Shared\IdentityConfig;
use \OpenAPI\OpenAPI\Models\Shared\KerberosConfig;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareConfig;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareConfigOptionalComponentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClusterMetrics;
use \OpenAPI\OpenAPI\Models\Shared\VirtualClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuxiliaryServicesConfig;
use \OpenAPI\OpenAPI\Models\Shared\SparkHistoryServerConfig;
use \OpenAPI\OpenAPI\Models\Shared\KubernetesClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\KubernetesSoftwareConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsClustersPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->clusterInput = new ClusterInput();
    $request->clusterInput->clusterName = 'officia';
    $request->clusterInput->config = new ClusterConfigInput();
    $request->clusterInput->config->autoscalingConfig = new AutoscalingConfig();
    $request->clusterInput->config->autoscalingConfig->policyUri = 'tempora';
    $request->clusterInput->config->auxiliaryNodeGroups = [
        new AuxiliaryNodeGroupInput(),
        new AuxiliaryNodeGroupInput(),
    ];
    $request->clusterInput->config->configBucket = 'ea';
    $request->clusterInput->config->dataprocMetricConfig = new DataprocMetricConfig();
    $request->clusterInput->config->dataprocMetricConfig->metrics = [
        new Metric(),
    ];
    $request->clusterInput->config->encryptionConfig = new EncryptionConfig();
    $request->clusterInput->config->encryptionConfig->gcePdKmsKeyName = 'vel';
    $request->clusterInput->config->encryptionConfig->kmsKey = 'possimus';
    $request->clusterInput->config->endpointConfig = new EndpointConfigInput();
    $request->clusterInput->config->endpointConfig->enableHttpPortAccess = false;
    $request->clusterInput->config->gceClusterConfig = new GceClusterConfig();
    $request->clusterInput->config->gceClusterConfig->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->clusterInput->config->gceClusterConfig->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->clusterInput->config->gceClusterConfig->internalIpOnly = false;
    $request->clusterInput->config->gceClusterConfig->metadata = [
        'ratione' => 'ex',
        'laudantium' => 'dicta',
    ];
    $request->clusterInput->config->gceClusterConfig->networkUri = 'dolor';
    $request->clusterInput->config->gceClusterConfig->nodeGroupAffinity = new NodeGroupAffinity();
    $request->clusterInput->config->gceClusterConfig->nodeGroupAffinity->nodeGroupUri = 'maiores';
    $request->clusterInput->config->gceClusterConfig->privateIpv6GoogleAccess = GceClusterConfigPrivateIpv6GoogleAccessEnum::PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED;
    $request->clusterInput->config->gceClusterConfig->reservationAffinity = new ReservationAffinity();
    $request->clusterInput->config->gceClusterConfig->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::NO_RESERVATION;
    $request->clusterInput->config->gceClusterConfig->reservationAffinity->key = 'nulla';
    $request->clusterInput->config->gceClusterConfig->reservationAffinity->values = [
        'voluptatibus',
        'nostrum',
        'sapiente',
    ];
    $request->clusterInput->config->gceClusterConfig->serviceAccount = 'quisquam';
    $request->clusterInput->config->gceClusterConfig->serviceAccountScopes = [
        'ea',
        'impedit',
        'corporis',
        'veniam',
    ];
    $request->clusterInput->config->gceClusterConfig->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->clusterInput->config->gceClusterConfig->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->clusterInput->config->gceClusterConfig->shieldedInstanceConfig->enableSecureBoot = false;
    $request->clusterInput->config->gceClusterConfig->shieldedInstanceConfig->enableVtpm = false;
    $request->clusterInput->config->gceClusterConfig->subnetworkUri = 'aliquid';
    $request->clusterInput->config->gceClusterConfig->tags = [
        'magnam',
    ];
    $request->clusterInput->config->gceClusterConfig->zoneUri = 'ea';
    $request->clusterInput->config->gkeClusterConfig = new GkeClusterConfig();
    $request->clusterInput->config->gkeClusterConfig->gkeClusterTarget = 'quo';
    $request->clusterInput->config->gkeClusterConfig->namespacedGkeDeploymentTarget = new NamespacedGkeDeploymentTarget();
    $request->clusterInput->config->gkeClusterConfig->namespacedGkeDeploymentTarget->clusterNamespace = 'consectetur';
    $request->clusterInput->config->gkeClusterConfig->namespacedGkeDeploymentTarget->targetGkeCluster = 'recusandae';
    $request->clusterInput->config->gkeClusterConfig->nodePoolTarget = [
        new GkeNodePoolTarget(),
    ];
    $request->clusterInput->config->initializationActions = [
        new NodeInitializationAction(),
        new NodeInitializationAction(),
    ];
    $request->clusterInput->config->lifecycleConfig = new LifecycleConfigInput();
    $request->clusterInput->config->lifecycleConfig->autoDeleteTime = 'eaque';
    $request->clusterInput->config->lifecycleConfig->autoDeleteTtl = 'a';
    $request->clusterInput->config->lifecycleConfig->idleDeleteTtl = 'libero';
    $request->clusterInput->config->masterConfig = new InstanceGroupConfigInput();
    $request->clusterInput->config->masterConfig->accelerators = [
        new AcceleratorConfig(),
    ];
    $request->clusterInput->config->masterConfig->diskConfig = new DiskConfig();
    $request->clusterInput->config->masterConfig->diskConfig->bootDiskSizeGb = 11427;
    $request->clusterInput->config->masterConfig->diskConfig->bootDiskType = 'deleniti';
    $request->clusterInput->config->masterConfig->diskConfig->localSsdInterface = 'impedit';
    $request->clusterInput->config->masterConfig->diskConfig->numLocalSsds = 304582;
    $request->clusterInput->config->masterConfig->imageUri = 'fugit';
    $request->clusterInput->config->masterConfig->machineTypeUri = 'accusamus';
    $request->clusterInput->config->masterConfig->minCpuPlatform = 'inventore';
    $request->clusterInput->config->masterConfig->numInstances = 250622;
    $request->clusterInput->config->masterConfig->preemptibility = InstanceGroupConfigPreemptibilityEnum::PREEMPTIBILITY_UNSPECIFIED;
    $request->clusterInput->config->metastoreConfig = new MetastoreConfig();
    $request->clusterInput->config->metastoreConfig->dataprocMetastoreService = 'dolorum';
    $request->clusterInput->config->secondaryWorkerConfig = new InstanceGroupConfigInput();
    $request->clusterInput->config->secondaryWorkerConfig->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->clusterInput->config->secondaryWorkerConfig->diskConfig = new DiskConfig();
    $request->clusterInput->config->secondaryWorkerConfig->diskConfig->bootDiskSizeGb = 810424;
    $request->clusterInput->config->secondaryWorkerConfig->diskConfig->bootDiskType = 'velit';
    $request->clusterInput->config->secondaryWorkerConfig->diskConfig->localSsdInterface = 'eum';
    $request->clusterInput->config->secondaryWorkerConfig->diskConfig->numLocalSsds = 420539;
    $request->clusterInput->config->secondaryWorkerConfig->imageUri = 'nobis';
    $request->clusterInput->config->secondaryWorkerConfig->machineTypeUri = 'quas';
    $request->clusterInput->config->secondaryWorkerConfig->minCpuPlatform = 'assumenda';
    $request->clusterInput->config->secondaryWorkerConfig->numInstances = 860552;
    $request->clusterInput->config->secondaryWorkerConfig->preemptibility = InstanceGroupConfigPreemptibilityEnum::NON_PREEMPTIBLE;
    $request->clusterInput->config->securityConfig = new SecurityConfig();
    $request->clusterInput->config->securityConfig->identityConfig = new IdentityConfig();
    $request->clusterInput->config->securityConfig->identityConfig->userServiceAccountMapping = [
        'quasi' => 'tempora',
        'numquam' => 'explicabo',
        'provident' => 'ipsa',
    ];
    $request->clusterInput->config->securityConfig->kerberosConfig = new KerberosConfig();
    $request->clusterInput->config->securityConfig->kerberosConfig->crossRealmTrustAdminServer = 'molestiae';
    $request->clusterInput->config->securityConfig->kerberosConfig->crossRealmTrustKdc = 'magnam';
    $request->clusterInput->config->securityConfig->kerberosConfig->crossRealmTrustRealm = 'odio';
    $request->clusterInput->config->securityConfig->kerberosConfig->crossRealmTrustSharedPasswordUri = 'eius';
    $request->clusterInput->config->securityConfig->kerberosConfig->enableKerberos = false;
    $request->clusterInput->config->securityConfig->kerberosConfig->kdcDbKeyUri = 'esse';
    $request->clusterInput->config->securityConfig->kerberosConfig->keyPasswordUri = 'esse';
    $request->clusterInput->config->securityConfig->kerberosConfig->keystorePasswordUri = 'rem';
    $request->clusterInput->config->securityConfig->kerberosConfig->keystoreUri = 'fuga';
    $request->clusterInput->config->securityConfig->kerberosConfig->kmsKeyUri = 'reprehenderit';
    $request->clusterInput->config->securityConfig->kerberosConfig->realm = 'quidem';
    $request->clusterInput->config->securityConfig->kerberosConfig->rootPrincipalPasswordUri = 'fugiat';
    $request->clusterInput->config->securityConfig->kerberosConfig->tgtLifetimeHours = 283519;
    $request->clusterInput->config->securityConfig->kerberosConfig->truststorePasswordUri = 'eum';
    $request->clusterInput->config->securityConfig->kerberosConfig->truststoreUri = 'suscipit';
    $request->clusterInput->config->softwareConfig = new SoftwareConfig();
    $request->clusterInput->config->softwareConfig->imageVersion = 'assumenda';
    $request->clusterInput->config->softwareConfig->optionalComponents = [
        SoftwareConfigOptionalComponentsEnum::HUDI,
    ];
    $request->clusterInput->config->softwareConfig->properties = [
        'veritatis' => 'ipsa',
        'id' => 'quidem',
        'neque' => 'quo',
        'illum' => 'quo',
    ];
    $request->clusterInput->config->tempBucket = 'fuga';
    $request->clusterInput->config->workerConfig = new InstanceGroupConfigInput();
    $request->clusterInput->config->workerConfig->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->clusterInput->config->workerConfig->diskConfig = new DiskConfig();
    $request->clusterInput->config->workerConfig->diskConfig->bootDiskSizeGb = 178367;
    $request->clusterInput->config->workerConfig->diskConfig->bootDiskType = 'voluptas';
    $request->clusterInput->config->workerConfig->diskConfig->localSsdInterface = 'ab';
    $request->clusterInput->config->workerConfig->diskConfig->numLocalSsds = 587600;
    $request->clusterInput->config->workerConfig->imageUri = 'consequatur';
    $request->clusterInput->config->workerConfig->machineTypeUri = 'tempora';
    $request->clusterInput->config->workerConfig->minCpuPlatform = 'debitis';
    $request->clusterInput->config->workerConfig->numInstances = 370853;
    $request->clusterInput->config->workerConfig->preemptibility = InstanceGroupConfigPreemptibilityEnum::PREEMPTIBILITY_UNSPECIFIED;
    $request->clusterInput->labels = [
        'quo' => 'esse',
    ];
    $request->clusterInput->metrics = new ClusterMetrics();
    $request->clusterInput->metrics->hdfsMetrics = [
        'aperiam' => 'distinctio',
        'quod' => 'dignissimos',
        'inventore' => 'nihil',
        'totam' => 'accusamus',
    ];
    $request->clusterInput->metrics->yarnMetrics = [
        'odio' => 'occaecati',
        'commodi' => 'sapiente',
    ];
    $request->clusterInput->projectId = 'dolores';
    $request->clusterInput->virtualClusterConfig = new VirtualClusterConfig();
    $request->clusterInput->virtualClusterConfig->auxiliaryServicesConfig = new AuxiliaryServicesConfig();
    $request->clusterInput->virtualClusterConfig->auxiliaryServicesConfig->metastoreConfig = new MetastoreConfig();
    $request->clusterInput->virtualClusterConfig->auxiliaryServicesConfig->metastoreConfig->dataprocMetastoreService = 'deserunt';
    $request->clusterInput->virtualClusterConfig->auxiliaryServicesConfig->sparkHistoryServerConfig = new SparkHistoryServerConfig();
    $request->clusterInput->virtualClusterConfig->auxiliaryServicesConfig->sparkHistoryServerConfig->dataprocCluster = 'molestiae';
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig = new KubernetesClusterConfig();
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig->gkeClusterConfig = new GkeClusterConfig();
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig->gkeClusterConfig->gkeClusterTarget = 'accusantium';
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig->gkeClusterConfig->namespacedGkeDeploymentTarget = new NamespacedGkeDeploymentTarget();
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig->gkeClusterConfig->namespacedGkeDeploymentTarget->clusterNamespace = 'porro';
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig->gkeClusterConfig->namespacedGkeDeploymentTarget->targetGkeCluster = 'eum';
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig->gkeClusterConfig->nodePoolTarget = [
        new GkeNodePoolTarget(),
        new GkeNodePoolTarget(),
        new GkeNodePoolTarget(),
    ];
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig->kubernetesNamespace = 'praesentium';
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig->kubernetesSoftwareConfig = new KubernetesSoftwareConfig();
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig->kubernetesSoftwareConfig->componentVersion = [
        'deleniti' => 'fugit',
    ];
    $request->clusterInput->virtualClusterConfig->kubernetesClusterConfig->kubernetesSoftwareConfig->properties = [
        'mollitia' => 'incidunt',
        'atque' => 'explicabo',
        'minima' => 'nisi',
    ];
    $request->clusterInput->virtualClusterConfig->stagingBucket = 'fugit';
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ratione';
    $request->clusterName = 'explicabo';
    $request->fields = 'saepe';
    $request->gracefulDecommissionTimeout = 'occaecati';
    $request->key = 'atque';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->projectId = 'esse';
    $request->quotaUser = 'eveniet';
    $request->region = 'accusamus';
    $request->requestId = 'veritatis';
    $request->updateMask = 'esse';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new DataprocProjectsRegionsClustersPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsClustersPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsClustersRepair

Repairs a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersRepairRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RepairClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\NodePool;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolRepairActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersRepairSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsClustersRepairRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->repairClusterRequest = new RepairClusterRequest();
    $request->repairClusterRequest->clusterUuid = 'aliquid';
    $request->repairClusterRequest->gracefulDecommissionTimeout = 'quasi';
    $request->repairClusterRequest->nodePools = [
        new NodePool(),
        new NodePool(),
        new NodePool(),
        new NodePool(),
    ];
    $request->repairClusterRequest->parentOperationId = 'vel';
    $request->repairClusterRequest->requestId = 'harum';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'occaecati';
    $request->clusterName = 'minima';
    $request->fields = 'distinctio';
    $request->key = 'eligendi';
    $request->oauthToken = 'sit';
    $request->prettyPrint = false;
    $request->projectId = 'culpa';
    $request->quotaUser = 'tempore';
    $request->region = 'adipisci';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new DataprocProjectsRegionsClustersRepairSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsClustersRepair($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsClustersStart

Starts a cluster in a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersStartRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StartClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersStartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsClustersStartRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->startClusterRequest = new StartClusterRequest();
    $request->startClusterRequest->clusterUuid = 'minus';
    $request->startClusterRequest->requestId = 'quaerat';
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->clusterName = 'blanditiis';
    $request->fields = 'provident';
    $request->key = 'a';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->projectId = 'quas';
    $request->quotaUser = 'esse';
    $request->region = 'quasi';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'error';

    $requestSecurity = new DataprocProjectsRegionsClustersStartSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsClustersStart($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsClustersStop

Stops a cluster in a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersStopRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StopClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsClustersStopSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsClustersStopRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->stopClusterRequest = new StopClusterRequest();
    $request->stopClusterRequest->clusterUuid = 'pariatur';
    $request->stopClusterRequest->requestId = 'possimus';
    $request->accessToken = 'quia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'asperiores';
    $request->clusterName = 'facere';
    $request->fields = 'veritatis';
    $request->key = 'consequuntur';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->projectId = 'similique';
    $request->quotaUser = 'culpa';
    $request->region = 'aliquid';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new DataprocProjectsRegionsClustersStopSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsClustersStop($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsJobsCancel

Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsJobsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsJobsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsJobsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'in' => 'eius',
        'libero' => 'illum',
    ];
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquam';
    $request->fields = 'sapiente';
    $request->jobId = 'dicta';
    $request->key = 'ullam';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->projectId = 'ullam';
    $request->quotaUser = 'nisi';
    $request->region = 'aut';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new DataprocProjectsRegionsJobsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsJobsCancel($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsJobsDelete

Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsJobsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsJobsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsJobsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ex';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'itaque';
    $request->fields = 'dolorum';
    $request->jobId = 'architecto';
    $request->key = 'omnis';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->projectId = 'quasi';
    $request->quotaUser = 'at';
    $request->region = 'et';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new DataprocProjectsRegionsJobsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsJobsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsJobsGet

Gets the resource representation for a job in a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsJobsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsJobsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsJobsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'adipisci';
    $request->fields = 'iste';
    $request->jobId = 'temporibus';
    $request->key = 'accusantium';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->projectId = 'aut';
    $request->quotaUser = 'laudantium';
    $request->region = 'eum';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new DataprocProjectsRegionsJobsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsJobsGet($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsJobsList

Lists regions/{region}/jobs in a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsJobsListJobStateMatcherEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsJobsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsJobsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'non';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->clusterName = 'occaecati';
    $request->fields = 'numquam';
    $request->filter = 'impedit';
    $request->jobStateMatcher = DataprocProjectsRegionsJobsListJobStateMatcherEnum::ALL;
    $request->key = 'voluptas';
    $request->oauthToken = 'aut';
    $request->pageSize = 491025;
    $request->pageToken = 'dicta';
    $request->prettyPrint = false;
    $request->projectId = 'maiores';
    $request->quotaUser = 'natus';
    $request->region = 'velit';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new DataprocProjectsRegionsJobsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsJobsList($request, $requestSecurity);

    if ($response->listJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsJobsPatch

Updates a job in a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsJobsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobInput;
use \OpenAPI\OpenAPI\Models\Shared\DriverSchedulingConfig;
use \OpenAPI\OpenAPI\Models\Shared\HadoopJob;
use \OpenAPI\OpenAPI\Models\Shared\LoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingConfigDriverLogLevelsEnum;
use \OpenAPI\OpenAPI\Models\Shared\HiveJob;
use \OpenAPI\OpenAPI\Models\Shared\QueryList;
use \OpenAPI\OpenAPI\Models\Shared\PigJob;
use \OpenAPI\OpenAPI\Models\Shared\JobPlacementInput;
use \OpenAPI\OpenAPI\Models\Shared\PrestoJob;
use \OpenAPI\OpenAPI\Models\Shared\PySparkJob;
use \OpenAPI\OpenAPI\Models\Shared\JobReference;
use \OpenAPI\OpenAPI\Models\Shared\JobScheduling;
use \OpenAPI\OpenAPI\Models\Shared\SparkJob;
use \OpenAPI\OpenAPI\Models\Shared\SparkRJob;
use \OpenAPI\OpenAPI\Models\Shared\SparkSqlJob;
use \OpenAPI\OpenAPI\Models\Shared\TrinoJob;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsJobsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsJobsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->jobInput = new JobInput();
    $request->jobInput->driverSchedulingConfig = new DriverSchedulingConfig();
    $request->jobInput->driverSchedulingConfig->memoryMb = 45659;
    $request->jobInput->driverSchedulingConfig->vcores = 409054;
    $request->jobInput->hadoopJob = new HadoopJob();
    $request->jobInput->hadoopJob->archiveUris = [
        'consequuntur',
        'repellendus',
    ];
    $request->jobInput->hadoopJob->args = [
        'maxime',
        'dignissimos',
        'officia',
    ];
    $request->jobInput->hadoopJob->fileUris = [
        'nemo',
        'quae',
        'quaerat',
        'porro',
    ];
    $request->jobInput->hadoopJob->jarFileUris = [
        'labore',
        'ab',
        'adipisci',
        'fuga',
    ];
    $request->jobInput->hadoopJob->loggingConfig = new LoggingConfig();
    $request->jobInput->hadoopJob->loggingConfig->driverLogLevels = [
        'suscipit' => LoggingConfigDriverLogLevelsEnum::TRACE,
        'culpa' => LoggingConfigDriverLogLevelsEnum::WARN,
        'recusandae' => LoggingConfigDriverLogLevelsEnum::INFO,
    ];
    $request->jobInput->hadoopJob->mainClass = 'fugiat';
    $request->jobInput->hadoopJob->mainJarFileUri = 'vel';
    $request->jobInput->hadoopJob->properties = [
        'quos' => 'vel',
        'labore' => 'possimus',
    ];
    $request->jobInput->hiveJob = new HiveJob();
    $request->jobInput->hiveJob->continueOnFailure = false;
    $request->jobInput->hiveJob->jarFileUris = [
        'cum',
        'commodi',
        'in',
    ];
    $request->jobInput->hiveJob->properties = [
        'reiciendis' => 'assumenda',
        'nemo' => 'recusandae',
    ];
    $request->jobInput->hiveJob->queryFileUri = 'aliquid';
    $request->jobInput->hiveJob->queryList = new QueryList();
    $request->jobInput->hiveJob->queryList->queries = [
        'cum',
    ];
    $request->jobInput->hiveJob->scriptVariables = [
        'in' => 'exercitationem',
    ];
    $request->jobInput->labels = [
        'facere' => 'numquam',
        'doloribus' => 'suscipit',
        'reiciendis' => 'quidem',
        'saepe' => 'necessitatibus',
    ];
    $request->jobInput->pigJob = new PigJob();
    $request->jobInput->pigJob->continueOnFailure = false;
    $request->jobInput->pigJob->jarFileUris = [
        'sunt',
        'asperiores',
    ];
    $request->jobInput->pigJob->loggingConfig = new LoggingConfig();
    $request->jobInput->pigJob->loggingConfig->driverLogLevels = [
        'non' => LoggingConfigDriverLogLevelsEnum::TRACE,
    ];
    $request->jobInput->pigJob->properties = [
        'dignissimos' => 'a',
    ];
    $request->jobInput->pigJob->queryFileUri = 'debitis';
    $request->jobInput->pigJob->queryList = new QueryList();
    $request->jobInput->pigJob->queryList->queries = [
        'corporis',
    ];
    $request->jobInput->pigJob->scriptVariables = [
        'laboriosam' => 'ipsa',
        'voluptates' => 'libero',
        'vitae' => 'accusamus',
    ];
    $request->jobInput->placement = new JobPlacementInput();
    $request->jobInput->placement->clusterLabels = [
        'tempora' => 'aspernatur',
        'voluptas' => 'voluptas',
        'voluptas' => 'minima',
    ];
    $request->jobInput->placement->clusterName = 'nobis';
    $request->jobInput->prestoJob = new PrestoJob();
    $request->jobInput->prestoJob->clientTags = [
        'adipisci',
        'minus',
        'dolores',
    ];
    $request->jobInput->prestoJob->continueOnFailure = false;
    $request->jobInput->prestoJob->loggingConfig = new LoggingConfig();
    $request->jobInput->prestoJob->loggingConfig->driverLogLevels = [
        'in' => LoggingConfigDriverLogLevelsEnum::TRACE,
        'aliquam' => LoggingConfigDriverLogLevelsEnum::FATAL,
        'temporibus' => LoggingConfigDriverLogLevelsEnum::DEBUG,
    ];
    $request->jobInput->prestoJob->outputFormat = 'adipisci';
    $request->jobInput->prestoJob->properties = [
        'blanditiis' => 'quas',
        'hic' => 'nesciunt',
        'culpa' => 'corrupti',
    ];
    $request->jobInput->prestoJob->queryFileUri = 'pariatur';
    $request->jobInput->prestoJob->queryList = new QueryList();
    $request->jobInput->prestoJob->queryList->queries = [
        'hic',
        'exercitationem',
        'nobis',
    ];
    $request->jobInput->pysparkJob = new PySparkJob();
    $request->jobInput->pysparkJob->archiveUris = [
        'rerum',
    ];
    $request->jobInput->pysparkJob->args = [
        'reiciendis',
    ];
    $request->jobInput->pysparkJob->fileUris = [
        'asperiores',
    ];
    $request->jobInput->pysparkJob->jarFileUris = [
        'voluptate',
        'expedita',
        'ab',
    ];
    $request->jobInput->pysparkJob->loggingConfig = new LoggingConfig();
    $request->jobInput->pysparkJob->loggingConfig->driverLogLevels = [
        'dolore' => LoggingConfigDriverLogLevelsEnum::ERROR,
        'sed' => LoggingConfigDriverLogLevelsEnum::INFO,
        'commodi' => LoggingConfigDriverLogLevelsEnum::ERROR,
    ];
    $request->jobInput->pysparkJob->mainPythonFileUri = 'explicabo';
    $request->jobInput->pysparkJob->properties = [
        'unde' => 'architecto',
        'suscipit' => 'sapiente',
    ];
    $request->jobInput->pysparkJob->pythonFileUris = [
        'illo',
        'reiciendis',
        'perferendis',
        'corrupti',
    ];
    $request->jobInput->reference = new JobReference();
    $request->jobInput->reference->jobId = 'maiores';
    $request->jobInput->reference->projectId = 'incidunt';
    $request->jobInput->scheduling = new JobScheduling();
    $request->jobInput->scheduling->maxFailuresPerHour = 148478;
    $request->jobInput->scheduling->maxFailuresTotal = 592231;
    $request->jobInput->sparkJob = new SparkJob();
    $request->jobInput->sparkJob->archiveUris = [
        'necessitatibus',
        'ipsum',
    ];
    $request->jobInput->sparkJob->args = [
        'occaecati',
        'quos',
    ];
    $request->jobInput->sparkJob->fileUris = [
        'tempora',
        'tempora',
        'voluptate',
        'reiciendis',
    ];
    $request->jobInput->sparkJob->jarFileUris = [
        'sit',
        'non',
    ];
    $request->jobInput->sparkJob->loggingConfig = new LoggingConfig();
    $request->jobInput->sparkJob->loggingConfig->driverLogLevels = [
        'praesentium' => LoggingConfigDriverLogLevelsEnum::ERROR,
        'quaerat' => LoggingConfigDriverLogLevelsEnum::TRACE,
        'ipsam' => LoggingConfigDriverLogLevelsEnum::OFF,
        'rem' => LoggingConfigDriverLogLevelsEnum::LEVEL_UNSPECIFIED,
    ];
    $request->jobInput->sparkJob->mainClass = 'nobis';
    $request->jobInput->sparkJob->mainJarFileUri = 'error';
    $request->jobInput->sparkJob->properties = [
        'minima' => 'recusandae',
        'reiciendis' => 'nulla',
    ];
    $request->jobInput->sparkRJob = new SparkRJob();
    $request->jobInput->sparkRJob->archiveUris = [
        'aperiam',
    ];
    $request->jobInput->sparkRJob->args = [
        'numquam',
        'veniam',
        'in',
        'officiis',
    ];
    $request->jobInput->sparkRJob->fileUris = [
        'laudantium',
    ];
    $request->jobInput->sparkRJob->loggingConfig = new LoggingConfig();
    $request->jobInput->sparkRJob->loggingConfig->driverLogLevels = [
        'praesentium' => LoggingConfigDriverLogLevelsEnum::ERROR,
        'laboriosam' => LoggingConfigDriverLogLevelsEnum::ERROR,
    ];
    $request->jobInput->sparkRJob->mainRFileUri = 'voluptatum';
    $request->jobInput->sparkRJob->properties = [
        'hic' => 'expedita',
        'debitis' => 'neque',
        'dolorum' => 'nostrum',
    ];
    $request->jobInput->sparkSqlJob = new SparkSqlJob();
    $request->jobInput->sparkSqlJob->jarFileUris = [
        'dolorum',
        'corrupti',
        'accusamus',
    ];
    $request->jobInput->sparkSqlJob->loggingConfig = new LoggingConfig();
    $request->jobInput->sparkSqlJob->loggingConfig->driverLogLevels = [
        'atque' => LoggingConfigDriverLogLevelsEnum::ALL,
        'ut' => LoggingConfigDriverLogLevelsEnum::FATAL,
    ];
    $request->jobInput->sparkSqlJob->properties = [
        'culpa' => 'expedita',
    ];
    $request->jobInput->sparkSqlJob->queryFileUri = 'magnam';
    $request->jobInput->sparkSqlJob->queryList = new QueryList();
    $request->jobInput->sparkSqlJob->queryList->queries = [
        'esse',
    ];
    $request->jobInput->sparkSqlJob->scriptVariables = [
        'sit' => 'voluptatum',
        'quas' => 'repudiandae',
    ];
    $request->jobInput->trinoJob = new TrinoJob();
    $request->jobInput->trinoJob->clientTags = [
        'et',
        'blanditiis',
    ];
    $request->jobInput->trinoJob->continueOnFailure = false;
    $request->jobInput->trinoJob->loggingConfig = new LoggingConfig();
    $request->jobInput->trinoJob->loggingConfig->driverLogLevels = [
        'sed' => LoggingConfigDriverLogLevelsEnum::LEVEL_UNSPECIFIED,
        'vel' => LoggingConfigDriverLogLevelsEnum::DEBUG,
    ];
    $request->jobInput->trinoJob->outputFormat = 'saepe';
    $request->jobInput->trinoJob->properties = [
        'consequatur' => 'incidunt',
        'reiciendis' => 'dolorem',
        'harum' => 'dicta',
    ];
    $request->jobInput->trinoJob->queryFileUri = 'architecto';
    $request->jobInput->trinoJob->queryList = new QueryList();
    $request->jobInput->trinoJob->queryList->queries = [
        'labore',
        'quidem',
        'atque',
    ];
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tenetur';
    $request->fields = 'laboriosam';
    $request->jobId = 'alias';
    $request->key = 'amet';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->projectId = 'voluptate';
    $request->quotaUser = 'unde';
    $request->region = 'reiciendis';
    $request->updateMask = 'provident';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new DataprocProjectsRegionsJobsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsJobsPatch($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsJobsSubmit

Submits a job to a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsJobsSubmitRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubmitJobRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\JobInput;
use \OpenAPI\OpenAPI\Models\Shared\DriverSchedulingConfig;
use \OpenAPI\OpenAPI\Models\Shared\HadoopJob;
use \OpenAPI\OpenAPI\Models\Shared\LoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingConfigDriverLogLevelsEnum;
use \OpenAPI\OpenAPI\Models\Shared\HiveJob;
use \OpenAPI\OpenAPI\Models\Shared\QueryList;
use \OpenAPI\OpenAPI\Models\Shared\PigJob;
use \OpenAPI\OpenAPI\Models\Shared\JobPlacementInput;
use \OpenAPI\OpenAPI\Models\Shared\PrestoJob;
use \OpenAPI\OpenAPI\Models\Shared\PySparkJob;
use \OpenAPI\OpenAPI\Models\Shared\JobReference;
use \OpenAPI\OpenAPI\Models\Shared\JobScheduling;
use \OpenAPI\OpenAPI\Models\Shared\SparkJob;
use \OpenAPI\OpenAPI\Models\Shared\SparkRJob;
use \OpenAPI\OpenAPI\Models\Shared\SparkSqlJob;
use \OpenAPI\OpenAPI\Models\Shared\TrinoJob;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsJobsSubmitSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsJobsSubmitRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->submitJobRequestInput = new SubmitJobRequestInput();
    $request->submitJobRequestInput->job = new JobInput();
    $request->submitJobRequestInput->job->driverSchedulingConfig = new DriverSchedulingConfig();
    $request->submitJobRequestInput->job->driverSchedulingConfig->memoryMb = 16871;
    $request->submitJobRequestInput->job->driverSchedulingConfig->vcores = 667285;
    $request->submitJobRequestInput->job->hadoopJob = new HadoopJob();
    $request->submitJobRequestInput->job->hadoopJob->archiveUris = [
        'reprehenderit',
        'facere',
        'fuga',
    ];
    $request->submitJobRequestInput->job->hadoopJob->args = [
        'mollitia',
        'veniam',
        'voluptatem',
    ];
    $request->submitJobRequestInput->job->hadoopJob->fileUris = [
        'repudiandae',
        'quasi',
        'atque',
        'reprehenderit',
    ];
    $request->submitJobRequestInput->job->hadoopJob->jarFileUris = [
        'totam',
        'suscipit',
        'quidem',
        'maxime',
    ];
    $request->submitJobRequestInput->job->hadoopJob->loggingConfig = new LoggingConfig();
    $request->submitJobRequestInput->job->hadoopJob->loggingConfig->driverLogLevels = [
        'esse' => LoggingConfigDriverLogLevelsEnum::TRACE,
    ];
    $request->submitJobRequestInput->job->hadoopJob->mainClass = 'assumenda';
    $request->submitJobRequestInput->job->hadoopJob->mainJarFileUri = 'ea';
    $request->submitJobRequestInput->job->hadoopJob->properties = [
        'error' => 'officiis',
        'officiis' => 'accusamus',
        'natus' => 'minima',
    ];
    $request->submitJobRequestInput->job->hiveJob = new HiveJob();
    $request->submitJobRequestInput->job->hiveJob->continueOnFailure = false;
    $request->submitJobRequestInput->job->hiveJob->jarFileUris = [
        'ex',
    ];
    $request->submitJobRequestInput->job->hiveJob->properties = [
        'corrupti' => 'at',
        'error' => 'blanditiis',
        'suscipit' => 'repudiandae',
        'atque' => 'atque',
    ];
    $request->submitJobRequestInput->job->hiveJob->queryFileUri = 'sunt';
    $request->submitJobRequestInput->job->hiveJob->queryList = new QueryList();
    $request->submitJobRequestInput->job->hiveJob->queryList->queries = [
        'dolorum',
        'repellendus',
        'labore',
        'reiciendis',
    ];
    $request->submitJobRequestInput->job->hiveJob->scriptVariables = [
        'repudiandae' => 'dicta',
    ];
    $request->submitJobRequestInput->job->labels = [
        'beatae' => 'dolores',
    ];
    $request->submitJobRequestInput->job->pigJob = new PigJob();
    $request->submitJobRequestInput->job->pigJob->continueOnFailure = false;
    $request->submitJobRequestInput->job->pigJob->jarFileUris = [
        'laboriosam',
        'velit',
    ];
    $request->submitJobRequestInput->job->pigJob->loggingConfig = new LoggingConfig();
    $request->submitJobRequestInput->job->pigJob->loggingConfig->driverLogLevels = [
        'molestias' => LoggingConfigDriverLogLevelsEnum::TRACE,
        'saepe' => LoggingConfigDriverLogLevelsEnum::ALL,
        'occaecati' => LoggingConfigDriverLogLevelsEnum::FATAL,
        'perspiciatis' => LoggingConfigDriverLogLevelsEnum::INFO,
    ];
    $request->submitJobRequestInput->job->pigJob->properties = [
        'eveniet' => 'occaecati',
    ];
    $request->submitJobRequestInput->job->pigJob->queryFileUri = 'consequuntur';
    $request->submitJobRequestInput->job->pigJob->queryList = new QueryList();
    $request->submitJobRequestInput->job->pigJob->queryList->queries = [
        'id',
    ];
    $request->submitJobRequestInput->job->pigJob->scriptVariables = [
        'reprehenderit' => 'error',
        'illo' => 'corporis',
    ];
    $request->submitJobRequestInput->job->placement = new JobPlacementInput();
    $request->submitJobRequestInput->job->placement->clusterLabels = [
        'eveniet' => 'non',
        'vero' => 'doloremque',
        'iure' => 'ipsa',
    ];
    $request->submitJobRequestInput->job->placement->clusterName = 'totam';
    $request->submitJobRequestInput->job->prestoJob = new PrestoJob();
    $request->submitJobRequestInput->job->prestoJob->clientTags = [
        'molestiae',
    ];
    $request->submitJobRequestInput->job->prestoJob->continueOnFailure = false;
    $request->submitJobRequestInput->job->prestoJob->loggingConfig = new LoggingConfig();
    $request->submitJobRequestInput->job->prestoJob->loggingConfig->driverLogLevels = [
        'qui' => LoggingConfigDriverLogLevelsEnum::ERROR,
        'iure' => LoggingConfigDriverLogLevelsEnum::OFF,
        'ratione' => LoggingConfigDriverLogLevelsEnum::ERROR,
        'distinctio' => LoggingConfigDriverLogLevelsEnum::INFO,
    ];
    $request->submitJobRequestInput->job->prestoJob->outputFormat = 'rem';
    $request->submitJobRequestInput->job->prestoJob->properties = [
        'ad' => 'repellat',
        'alias' => 'corporis',
    ];
    $request->submitJobRequestInput->job->prestoJob->queryFileUri = 'perspiciatis';
    $request->submitJobRequestInput->job->prestoJob->queryList = new QueryList();
    $request->submitJobRequestInput->job->prestoJob->queryList->queries = [
        'mollitia',
        'voluptas',
    ];
    $request->submitJobRequestInput->job->pysparkJob = new PySparkJob();
    $request->submitJobRequestInput->job->pysparkJob->archiveUris = [
        'maiores',
    ];
    $request->submitJobRequestInput->job->pysparkJob->args = [
        'dolores',
        'id',
        'minima',
        'dolore',
    ];
    $request->submitJobRequestInput->job->pysparkJob->fileUris = [
        'nesciunt',
        'quae',
        'recusandae',
    ];
    $request->submitJobRequestInput->job->pysparkJob->jarFileUris = [
        'quaerat',
        'molestiae',
        'ex',
    ];
    $request->submitJobRequestInput->job->pysparkJob->loggingConfig = new LoggingConfig();
    $request->submitJobRequestInput->job->pysparkJob->loggingConfig->driverLogLevels = [
        'culpa' => LoggingConfigDriverLogLevelsEnum::TRACE,
        'debitis' => LoggingConfigDriverLogLevelsEnum::INFO,
    ];
    $request->submitJobRequestInput->job->pysparkJob->mainPythonFileUri = 'eum';
    $request->submitJobRequestInput->job->pysparkJob->properties = [
        'recusandae' => 'esse',
        'provident' => 'quis',
    ];
    $request->submitJobRequestInput->job->pysparkJob->pythonFileUris = [
        'reiciendis',
        'provident',
    ];
    $request->submitJobRequestInput->job->reference = new JobReference();
    $request->submitJobRequestInput->job->reference->jobId = 'aspernatur';
    $request->submitJobRequestInput->job->reference->projectId = 'ullam';
    $request->submitJobRequestInput->job->scheduling = new JobScheduling();
    $request->submitJobRequestInput->job->scheduling->maxFailuresPerHour = 96804;
    $request->submitJobRequestInput->job->scheduling->maxFailuresTotal = 657020;
    $request->submitJobRequestInput->job->sparkJob = new SparkJob();
    $request->submitJobRequestInput->job->sparkJob->archiveUris = [
        'mollitia',
        'provident',
    ];
    $request->submitJobRequestInput->job->sparkJob->args = [
        'animi',
        'ex',
        'aliquid',
        'accusantium',
    ];
    $request->submitJobRequestInput->job->sparkJob->fileUris = [
        'doloribus',
        'ullam',
        'in',
        'nam',
    ];
    $request->submitJobRequestInput->job->sparkJob->jarFileUris = [
        'officia',
        'laborum',
        'placeat',
        'modi',
    ];
    $request->submitJobRequestInput->job->sparkJob->loggingConfig = new LoggingConfig();
    $request->submitJobRequestInput->job->sparkJob->loggingConfig->driverLogLevels = [
        'molestias' => LoggingConfigDriverLogLevelsEnum::OFF,
        'sapiente' => LoggingConfigDriverLogLevelsEnum::ERROR,
        'vitae' => LoggingConfigDriverLogLevelsEnum::ERROR,
        'tempora' => LoggingConfigDriverLogLevelsEnum::DEBUG,
    ];
    $request->submitJobRequestInput->job->sparkJob->mainClass = 'inventore';
    $request->submitJobRequestInput->job->sparkJob->mainJarFileUri = 'fugit';
    $request->submitJobRequestInput->job->sparkJob->properties = [
        'quae' => 'perferendis',
        'velit' => 'aspernatur',
        'eum' => 'eius',
        'rem' => 'at',
    ];
    $request->submitJobRequestInput->job->sparkRJob = new SparkRJob();
    $request->submitJobRequestInput->job->sparkRJob->archiveUris = [
        'eos',
        'sapiente',
        'eum',
        'dicta',
    ];
    $request->submitJobRequestInput->job->sparkRJob->args = [
        'beatae',
        'cupiditate',
    ];
    $request->submitJobRequestInput->job->sparkRJob->fileUris = [
        'earum',
        'soluta',
        'hic',
    ];
    $request->submitJobRequestInput->job->sparkRJob->loggingConfig = new LoggingConfig();
    $request->submitJobRequestInput->job->sparkRJob->loggingConfig->driverLogLevels = [
        'eaque' => LoggingConfigDriverLogLevelsEnum::OFF,
        'perspiciatis' => LoggingConfigDriverLogLevelsEnum::OFF,
        'debitis' => LoggingConfigDriverLogLevelsEnum::DEBUG,
        'porro' => LoggingConfigDriverLogLevelsEnum::DEBUG,
    ];
    $request->submitJobRequestInput->job->sparkRJob->mainRFileUri = 'dolorem';
    $request->submitJobRequestInput->job->sparkRJob->properties = [
        'cumque' => 'fuga',
    ];
    $request->submitJobRequestInput->job->sparkSqlJob = new SparkSqlJob();
    $request->submitJobRequestInput->job->sparkSqlJob->jarFileUris = [
        'animi',
    ];
    $request->submitJobRequestInput->job->sparkSqlJob->loggingConfig = new LoggingConfig();
    $request->submitJobRequestInput->job->sparkSqlJob->loggingConfig->driverLogLevels = [
        'nulla' => LoggingConfigDriverLogLevelsEnum::LEVEL_UNSPECIFIED,
        'quasi' => LoggingConfigDriverLogLevelsEnum::LEVEL_UNSPECIFIED,
        'ducimus' => LoggingConfigDriverLogLevelsEnum::WARN,
        'occaecati' => LoggingConfigDriverLogLevelsEnum::DEBUG,
    ];
    $request->submitJobRequestInput->job->sparkSqlJob->properties = [
        'quasi' => 'magni',
    ];
    $request->submitJobRequestInput->job->sparkSqlJob->queryFileUri = 'doloribus';
    $request->submitJobRequestInput->job->sparkSqlJob->queryList = new QueryList();
    $request->submitJobRequestInput->job->sparkSqlJob->queryList->queries = [
        'necessitatibus',
        'ipsa',
        'tempora',
        'nihil',
    ];
    $request->submitJobRequestInput->job->sparkSqlJob->scriptVariables = [
        'dicta' => 'iusto',
        'esse' => 'praesentium',
    ];
    $request->submitJobRequestInput->job->trinoJob = new TrinoJob();
    $request->submitJobRequestInput->job->trinoJob->clientTags = [
        'reiciendis',
        'vel',
        'architecto',
        'fugiat',
    ];
    $request->submitJobRequestInput->job->trinoJob->continueOnFailure = false;
    $request->submitJobRequestInput->job->trinoJob->loggingConfig = new LoggingConfig();
    $request->submitJobRequestInput->job->trinoJob->loggingConfig->driverLogLevels = [
        'dicta' => LoggingConfigDriverLogLevelsEnum::INFO,
    ];
    $request->submitJobRequestInput->job->trinoJob->outputFormat = 'tempora';
    $request->submitJobRequestInput->job->trinoJob->properties = [
        'ex' => 'consectetur',
        'aliquid' => 'ipsa',
    ];
    $request->submitJobRequestInput->job->trinoJob->queryFileUri = 'laborum';
    $request->submitJobRequestInput->job->trinoJob->queryList = new QueryList();
    $request->submitJobRequestInput->job->trinoJob->queryList->queries = [
        'nostrum',
    ];
    $request->submitJobRequestInput->requestId = 'fugiat';
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officia';
    $request->fields = 'suscipit';
    $request->key = 'aliquid';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->projectId = 'eum';
    $request->quotaUser = 'voluptas';
    $request->region = 'iste';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new DataprocProjectsRegionsJobsSubmitSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsJobsSubmit($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsJobsSubmitAsOperation

Submits job to a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsJobsSubmitAsOperationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubmitJobRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\JobInput;
use \OpenAPI\OpenAPI\Models\Shared\DriverSchedulingConfig;
use \OpenAPI\OpenAPI\Models\Shared\HadoopJob;
use \OpenAPI\OpenAPI\Models\Shared\LoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingConfigDriverLogLevelsEnum;
use \OpenAPI\OpenAPI\Models\Shared\HiveJob;
use \OpenAPI\OpenAPI\Models\Shared\QueryList;
use \OpenAPI\OpenAPI\Models\Shared\PigJob;
use \OpenAPI\OpenAPI\Models\Shared\JobPlacementInput;
use \OpenAPI\OpenAPI\Models\Shared\PrestoJob;
use \OpenAPI\OpenAPI\Models\Shared\PySparkJob;
use \OpenAPI\OpenAPI\Models\Shared\JobReference;
use \OpenAPI\OpenAPI\Models\Shared\JobScheduling;
use \OpenAPI\OpenAPI\Models\Shared\SparkJob;
use \OpenAPI\OpenAPI\Models\Shared\SparkRJob;
use \OpenAPI\OpenAPI\Models\Shared\SparkSqlJob;
use \OpenAPI\OpenAPI\Models\Shared\TrinoJob;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsJobsSubmitAsOperationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsJobsSubmitAsOperationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->submitJobRequestInput = new SubmitJobRequestInput();
    $request->submitJobRequestInput->job = new JobInput();
    $request->submitJobRequestInput->job->driverSchedulingConfig = new DriverSchedulingConfig();
    $request->submitJobRequestInput->job->driverSchedulingConfig->memoryMb = 822407;
    $request->submitJobRequestInput->job->driverSchedulingConfig->vcores = 913992;
    $request->submitJobRequestInput->job->hadoopJob = new HadoopJob();
    $request->submitJobRequestInput->job->hadoopJob->archiveUris = [
        'laborum',
        'libero',
        'ad',
    ];
    $request->submitJobRequestInput->job->hadoopJob->args = [
        'enim',
        'vitae',
        'repellendus',
    ];
    $request->submitJobRequestInput->job->hadoopJob->fileUris = [
        'quo',
        'ex',
    ];
    $request->submitJobRequestInput->job->hadoopJob->jarFileUris = [
        'ad',
        'expedita',
    ];
    $request->submitJobRequestInput->job->hadoopJob->loggingConfig = new LoggingConfig();
    $request->submitJobRequestInput->job->hadoopJob->loggingConfig->driverLogLevels = [
        'molestias' => LoggingConfigDriverLogLevelsEnum::ERROR,
    ];
    $request->submitJobRequestInput->job->hadoopJob->mainClass = 'aliquid';
    $request->submitJobRequestInput->job->hadoopJob->mainJarFileUri = 'beatae';
    $request->submitJobRequestInput->job->hadoopJob->properties = [
        'omnis' => 'veritatis',
        'rerum' => 'est',
        'culpa' => 'voluptatem',
    ];
    $request->submitJobRequestInput->job->hiveJob = new HiveJob();
    $request->submitJobRequestInput->job->hiveJob->continueOnFailure = false;
    $request->submitJobRequestInput->job->hiveJob->jarFileUris = [
        'officiis',
        'architecto',
        'fuga',
        'pariatur',
    ];
    $request->submitJobRequestInput->job->hiveJob->properties = [
        'voluptatem' => 'alias',
        'deleniti' => 'earum',
        'ex' => 'sapiente',
        'rem' => 'minus',
    ];
    $request->submitJobRequestInput->job->hiveJob->queryFileUri = 'nemo';
    $request->submitJobRequestInput->job->hiveJob->queryList = new QueryList();
    $request->submitJobRequestInput->job->hiveJob->queryList->queries = [
        'ratione',
        'ullam',
        'perferendis',
        'illum',
    ];
    $request->submitJobRequestInput->job->hiveJob->scriptVariables = [
        'impedit' => 'quibusdam',
        'nam' => 'ipsam',
        'culpa' => 'dolor',
    ];
    $request->submitJobRequestInput->job->labels = [
        'inventore' => 'deleniti',
        'veritatis' => 'tempora',
    ];
    $request->submitJobRequestInput->job->pigJob = new PigJob();
    $request->submitJobRequestInput->job->pigJob->continueOnFailure = false;
    $request->submitJobRequestInput->job->pigJob->jarFileUris = [
        'consequatur',
    ];
    $request->submitJobRequestInput->job->pigJob->loggingConfig = new LoggingConfig();
    $request->submitJobRequestInput->job->pigJob->loggingConfig->driverLogLevels = [
        'sit' => LoggingConfigDriverLogLevelsEnum::TRACE,
    ];
    $request->submitJobRequestInput->job->pigJob->properties = [
        'ab' => 'laudantium',
    ];
    $request->submitJobRequestInput->job->pigJob->queryFileUri = 'quae';
    $request->submitJobRequestInput->job->pigJob->queryList = new QueryList();
    $request->submitJobRequestInput->job->pigJob->queryList->queries = [
        'fugiat',
    ];
    $request->submitJobRequestInput->job->pigJob->scriptVariables = [
        'consequuntur' => 'ipsa',
        'quas' => 'eveniet',
    ];
    $request->submitJobRequestInput->job->placement = new JobPlacementInput();
    $request->submitJobRequestInput->job->placement->clusterLabels = [
        'officiis' => 'esse',
        'necessitatibus' => 'sed',
        'veniam' => 'nesciunt',
        'expedita' => 'eum',
    ];
    $request->submitJobRequestInput->job->placement->clusterName = 'vel';
    $request->submitJobRequestInput->job->prestoJob = new PrestoJob();
    $request->submitJobRequestInput->job->prestoJob->clientTags = [
        'magnam',
        'exercitationem',
        'ab',
    ];
    $request->submitJobRequestInput->job->prestoJob->continueOnFailure = false;
    $request->submitJobRequestInput->job->prestoJob->loggingConfig = new LoggingConfig();
    $request->submitJobRequestInput->job->prestoJob->loggingConfig->driverLogLevels = [
        'autem' => LoggingConfigDriverLogLevelsEnum::ERROR,
        'laboriosam' => LoggingConfigDriverLogLevelsEnum::OFF,
        'consequuntur' => LoggingConfigDriverLogLevelsEnum::LEVEL_UNSPECIFIED,
        'exercitationem' => LoggingConfigDriverLogLevelsEnum::OFF,
    ];
    $request->submitJobRequestInput->job->prestoJob->outputFormat = 'quasi';
    $request->submitJobRequestInput->job->prestoJob->properties = [
        'at' => 'vero',
        'est' => 'harum',
    ];
    $request->submitJobRequestInput->job->prestoJob->queryFileUri = 'sequi';
    $request->submitJobRequestInput->job->prestoJob->queryList = new QueryList();
    $request->submitJobRequestInput->job->prestoJob->queryList->queries = [
        'repudiandae',
        'optio',
        'occaecati',
        'nemo',
    ];
    $request->submitJobRequestInput->job->pysparkJob = new PySparkJob();
    $request->submitJobRequestInput->job->pysparkJob->archiveUris = [
        'blanditiis',
        'officia',
    ];
    $request->submitJobRequestInput->job->pysparkJob->args = [
        'numquam',
        'nemo',
    ];
    $request->submitJobRequestInput->job->pysparkJob->fileUris = [
        'eius',
        'aspernatur',
        'ducimus',
    ];
    $request->submitJobRequestInput->job->pysparkJob->jarFileUris = [
        'fuga',
    ];
    $request->submitJobRequestInput->job->pysparkJob->loggingConfig = new LoggingConfig();
    $request->submitJobRequestInput->job->pysparkJob->loggingConfig->driverLogLevels = [
        'incidunt' => LoggingConfigDriverLogLevelsEnum::LEVEL_UNSPECIFIED,
        'rem' => LoggingConfigDriverLogLevelsEnum::FATAL,
        'dicta' => LoggingConfigDriverLogLevelsEnum::DEBUG,
    ];
    $request->submitJobRequestInput->job->pysparkJob->mainPythonFileUri = 'consequuntur';
    $request->submitJobRequestInput->job->pysparkJob->properties = [
        'aperiam' => 'cupiditate',
    ];
    $request->submitJobRequestInput->job->pysparkJob->pythonFileUris = [
        'soluta',
        'alias',
        'omnis',
        'eos',
    ];
    $request->submitJobRequestInput->job->reference = new JobReference();
    $request->submitJobRequestInput->job->reference->jobId = 'occaecati';
    $request->submitJobRequestInput->job->reference->projectId = 'iste';
    $request->submitJobRequestInput->job->scheduling = new JobScheduling();
    $request->submitJobRequestInput->job->scheduling->maxFailuresPerHour = 170099;
    $request->submitJobRequestInput->job->scheduling->maxFailuresTotal = 81369;
    $request->submitJobRequestInput->job->sparkJob = new SparkJob();
    $request->submitJobRequestInput->job->sparkJob->archiveUris = [
        'accusamus',
        'voluptatibus',
        'distinctio',
    ];
    $request->submitJobRequestInput->job->sparkJob->args = [
        'delectus',
        'minima',
        'praesentium',
    ];
    $request->submitJobRequestInput->job->sparkJob->fileUris = [
        'magnam',
        'temporibus',
        'quos',
        'commodi',
    ];
    $request->submitJobRequestInput->job->sparkJob->jarFileUris = [
        'commodi',
        'totam',
        'earum',
        'modi',
    ];
    $request->submitJobRequestInput->job->sparkJob->loggingConfig = new LoggingConfig();
    $request->submitJobRequestInput->job->sparkJob->loggingConfig->driverLogLevels = [
        'vero' => LoggingConfigDriverLogLevelsEnum::LEVEL_UNSPECIFIED,
        'ipsam' => LoggingConfigDriverLogLevelsEnum::DEBUG,
        'alias' => LoggingConfigDriverLogLevelsEnum::LEVEL_UNSPECIFIED,
    ];
    $request->submitJobRequestInput->job->sparkJob->mainClass = 'non';
    $request->submitJobRequestInput->job->sparkJob->mainJarFileUri = 'maiores';
    $request->submitJobRequestInput->job->sparkJob->properties = [
        'sint' => 'nulla',
        'deserunt' => 'esse',
    ];
    $request->submitJobRequestInput->job->sparkRJob = new SparkRJob();
    $request->submitJobRequestInput->job->sparkRJob->archiveUris = [
        'reprehenderit',
        'est',
    ];
    $request->submitJobRequestInput->job->sparkRJob->args = [
        'sint',
        'accusamus',
    ];
    $request->submitJobRequestInput->job->sparkRJob->fileUris = [
        'hic',
        'necessitatibus',
        'asperiores',
        'ex',
    ];
    $request->submitJobRequestInput->job->sparkRJob->loggingConfig = new LoggingConfig();
    $request->submitJobRequestInput->job->sparkRJob->loggingConfig->driverLogLevels = [
        'debitis' => LoggingConfigDriverLogLevelsEnum::OFF,
        'quae' => LoggingConfigDriverLogLevelsEnum::FATAL,
    ];
    $request->submitJobRequestInput->job->sparkRJob->mainRFileUri = 'fuga';
    $request->submitJobRequestInput->job->sparkRJob->properties = [
        'consectetur' => 'velit',
        'atque' => 'ipsum',
        'impedit' => 'magni',
    ];
    $request->submitJobRequestInput->job->sparkSqlJob = new SparkSqlJob();
    $request->submitJobRequestInput->job->sparkSqlJob->jarFileUris = [
        'repudiandae',
        'nam',
        'dolore',
    ];
    $request->submitJobRequestInput->job->sparkSqlJob->loggingConfig = new LoggingConfig();
    $request->submitJobRequestInput->job->sparkSqlJob->loggingConfig->driverLogLevels = [
        'voluptate' => LoggingConfigDriverLogLevelsEnum::ALL,
        'dignissimos' => LoggingConfigDriverLogLevelsEnum::ALL,
    ];
    $request->submitJobRequestInput->job->sparkSqlJob->properties = [
        'deleniti' => 'quibusdam',
        'iure' => 'odit',
        'voluptatibus' => 'vel',
        'magnam' => 'quibusdam',
    ];
    $request->submitJobRequestInput->job->sparkSqlJob->queryFileUri = 'inventore';
    $request->submitJobRequestInput->job->sparkSqlJob->queryList = new QueryList();
    $request->submitJobRequestInput->job->sparkSqlJob->queryList->queries = [
        'libero',
        'architecto',
        'voluptatibus',
        'quia',
    ];
    $request->submitJobRequestInput->job->sparkSqlJob->scriptVariables = [
        'aliquam' => 'velit',
        'illo' => 'accusantium',
        'vel' => 'ea',
        'beatae' => 'vero',
    ];
    $request->submitJobRequestInput->job->trinoJob = new TrinoJob();
    $request->submitJobRequestInput->job->trinoJob->clientTags = [
        'eum',
        'velit',
        'ut',
    ];
    $request->submitJobRequestInput->job->trinoJob->continueOnFailure = false;
    $request->submitJobRequestInput->job->trinoJob->loggingConfig = new LoggingConfig();
    $request->submitJobRequestInput->job->trinoJob->loggingConfig->driverLogLevels = [
        'earum' => LoggingConfigDriverLogLevelsEnum::ALL,
        'impedit' => LoggingConfigDriverLogLevelsEnum::OFF,
        'iste' => LoggingConfigDriverLogLevelsEnum::OFF,
    ];
    $request->submitJobRequestInput->job->trinoJob->outputFormat = 'alias';
    $request->submitJobRequestInput->job->trinoJob->properties = [
        'itaque' => 'velit',
        'laborum' => 'non',
    ];
    $request->submitJobRequestInput->job->trinoJob->queryFileUri = 'dolor';
    $request->submitJobRequestInput->job->trinoJob->queryList = new QueryList();
    $request->submitJobRequestInput->job->trinoJob->queryList->queries = [
        'sit',
        'doloremque',
    ];
    $request->submitJobRequestInput->requestId = 'consequatur';
    $request->accessToken = 'officia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'quidem';
    $request->key = 'voluptas';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->projectId = 'placeat';
    $request->quotaUser = 'perspiciatis';
    $request->region = 'expedita';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'a';

    $requestSecurity = new DataprocProjectsRegionsJobsSubmitAsOperationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsJobsSubmitAsOperation($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'animi';
    $request->key = 'impedit';
    $request->name = 'Dana Ortiz';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'consectetur';

    $requestSecurity = new DataprocProjectsRegionsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsWorkflowTemplatesCreate

Creates new workflow template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsWorkflowTemplatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowTemplateInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderedJob;
use \OpenAPI\OpenAPI\Models\Shared\HadoopJob;
use \OpenAPI\OpenAPI\Models\Shared\LoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingConfigDriverLogLevelsEnum;
use \OpenAPI\OpenAPI\Models\Shared\HiveJob;
use \OpenAPI\OpenAPI\Models\Shared\QueryList;
use \OpenAPI\OpenAPI\Models\Shared\PigJob;
use \OpenAPI\OpenAPI\Models\Shared\PrestoJob;
use \OpenAPI\OpenAPI\Models\Shared\PySparkJob;
use \OpenAPI\OpenAPI\Models\Shared\JobScheduling;
use \OpenAPI\OpenAPI\Models\Shared\SparkJob;
use \OpenAPI\OpenAPI\Models\Shared\SparkRJob;
use \OpenAPI\OpenAPI\Models\Shared\SparkSqlJob;
use \OpenAPI\OpenAPI\Models\Shared\TrinoJob;
use \OpenAPI\OpenAPI\Models\Shared\TemplateParameter;
use \OpenAPI\OpenAPI\Models\Shared\ParameterValidation;
use \OpenAPI\OpenAPI\Models\Shared\RegexValidation;
use \OpenAPI\OpenAPI\Models\Shared\ValueValidation;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowTemplatePlacementInput;
use \OpenAPI\OpenAPI\Models\Shared\ClusterSelector;
use \OpenAPI\OpenAPI\Models\Shared\ManagedClusterInput;
use \OpenAPI\OpenAPI\Models\Shared\ClusterConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuxiliaryNodeGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\DiskConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupConfigPreemptibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupRolesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataprocMetricConfig;
use \OpenAPI\OpenAPI\Models\Shared\Metric;
use \OpenAPI\OpenAPI\Models\Shared\MetricMetricSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\EndpointConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GceClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConfidentialInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupAffinity;
use \OpenAPI\OpenAPI\Models\Shared\GceClusterConfigPrivateIpv6GoogleAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinity;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinityConsumeReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\NamespacedGkeDeploymentTarget;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolTarget;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolAutoscalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolAcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolTargetRolesEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeInitializationAction;
use \OpenAPI\OpenAPI\Models\Shared\LifecycleConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\MetastoreConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityConfig;
use \OpenAPI\OpenAPI\Models\Shared\IdentityConfig;
use \OpenAPI\OpenAPI\Models\Shared\KerberosConfig;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareConfig;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareConfigOptionalComponentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsWorkflowTemplatesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsWorkflowTemplatesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->workflowTemplateInput = new WorkflowTemplateInput();
    $request->workflowTemplateInput->dagTimeout = 'inventore';
    $request->workflowTemplateInput->id = '352965bb-8a72-4026-9143-5e139dbc2259';
    $request->workflowTemplateInput->jobs = [
        new OrderedJob(),
        new OrderedJob(),
        new OrderedJob(),
    ];
    $request->workflowTemplateInput->labels = [
        'id' => 'libero',
    ];
    $request->workflowTemplateInput->parameters = [
        new TemplateParameter(),
        new TemplateParameter(),
        new TemplateParameter(),
        new TemplateParameter(),
    ];
    $request->workflowTemplateInput->placement = new WorkflowTemplatePlacementInput();
    $request->workflowTemplateInput->placement->clusterSelector = new ClusterSelector();
    $request->workflowTemplateInput->placement->clusterSelector->clusterLabels = [
        'quos' => 'placeat',
        'sit' => 'iusto',
        'ipsa' => 'voluptates',
    ];
    $request->workflowTemplateInput->placement->clusterSelector->zone = 'inventore';
    $request->workflowTemplateInput->placement->managedCluster = new ManagedClusterInput();
    $request->workflowTemplateInput->placement->managedCluster->clusterName = 'aperiam';
    $request->workflowTemplateInput->placement->managedCluster->config = new ClusterConfigInput();
    $request->workflowTemplateInput->placement->managedCluster->config->autoscalingConfig = new AutoscalingConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->autoscalingConfig->policyUri = 'totam';
    $request->workflowTemplateInput->placement->managedCluster->config->auxiliaryNodeGroups = [
        new AuxiliaryNodeGroupInput(),
        new AuxiliaryNodeGroupInput(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->configBucket = 'eligendi';
    $request->workflowTemplateInput->placement->managedCluster->config->dataprocMetricConfig = new DataprocMetricConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->dataprocMetricConfig->metrics = [
        new Metric(),
        new Metric(),
        new Metric(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->encryptionConfig = new EncryptionConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->encryptionConfig->gcePdKmsKeyName = 'voluptatem';
    $request->workflowTemplateInput->placement->managedCluster->config->encryptionConfig->kmsKey = 'autem';
    $request->workflowTemplateInput->placement->managedCluster->config->endpointConfig = new EndpointConfigInput();
    $request->workflowTemplateInput->placement->managedCluster->config->endpointConfig->enableHttpPortAccess = false;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig = new GceClusterConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->internalIpOnly = false;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->metadata = [
        'dolores' => 'assumenda',
        'beatae' => 'est',
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->networkUri = 'facere';
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->nodeGroupAffinity = new NodeGroupAffinity();
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->nodeGroupAffinity->nodeGroupUri = 'corrupti';
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->privateIpv6GoogleAccess = GceClusterConfigPrivateIpv6GoogleAccessEnum::INHERIT_FROM_SUBNETWORK;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->reservationAffinity = new ReservationAffinity();
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::ANY_RESERVATION;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->reservationAffinity->key = 'accusamus';
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->reservationAffinity->values = [
        'tempore',
        'sint',
        'ea',
        'autem',
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->serviceAccount = 'ipsam';
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->serviceAccountScopes = [
        'laudantium',
        'corporis',
        'officiis',
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->shieldedInstanceConfig->enableSecureBoot = false;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->shieldedInstanceConfig->enableVtpm = false;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->subnetworkUri = 'voluptatibus';
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->tags = [
        'at',
        'alias',
        'quia',
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->zoneUri = 'quidem';
    $request->workflowTemplateInput->placement->managedCluster->config->gkeClusterConfig = new GkeClusterConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->gkeClusterConfig->gkeClusterTarget = 'fuga';
    $request->workflowTemplateInput->placement->managedCluster->config->gkeClusterConfig->namespacedGkeDeploymentTarget = new NamespacedGkeDeploymentTarget();
    $request->workflowTemplateInput->placement->managedCluster->config->gkeClusterConfig->namespacedGkeDeploymentTarget->clusterNamespace = 'repudiandae';
    $request->workflowTemplateInput->placement->managedCluster->config->gkeClusterConfig->namespacedGkeDeploymentTarget->targetGkeCluster = 'accusantium';
    $request->workflowTemplateInput->placement->managedCluster->config->gkeClusterConfig->nodePoolTarget = [
        new GkeNodePoolTarget(),
        new GkeNodePoolTarget(),
        new GkeNodePoolTarget(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->initializationActions = [
        new NodeInitializationAction(),
        new NodeInitializationAction(),
        new NodeInitializationAction(),
        new NodeInitializationAction(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->lifecycleConfig = new LifecycleConfigInput();
    $request->workflowTemplateInput->placement->managedCluster->config->lifecycleConfig->autoDeleteTime = 'eos';
    $request->workflowTemplateInput->placement->managedCluster->config->lifecycleConfig->autoDeleteTtl = 'quibusdam';
    $request->workflowTemplateInput->placement->managedCluster->config->lifecycleConfig->idleDeleteTtl = 'odio';
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig = new InstanceGroupConfigInput();
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->diskConfig = new DiskConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->diskConfig->bootDiskSizeGb = 140316;
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->diskConfig->bootDiskType = 'explicabo';
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->diskConfig->localSsdInterface = 'corporis';
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->diskConfig->numLocalSsds = 621473;
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->imageUri = 'earum';
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->machineTypeUri = 'adipisci';
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->minCpuPlatform = 'recusandae';
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->numInstances = 630871;
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->preemptibility = InstanceGroupConfigPreemptibilityEnum::NON_PREEMPTIBLE;
    $request->workflowTemplateInput->placement->managedCluster->config->metastoreConfig = new MetastoreConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->metastoreConfig->dataprocMetastoreService = 'quidem';
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig = new InstanceGroupConfigInput();
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->diskConfig = new DiskConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->diskConfig->bootDiskSizeGb = 106255;
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->diskConfig->bootDiskType = 'unde';
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->diskConfig->localSsdInterface = 'molestiae';
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->diskConfig->numLocalSsds = 963198;
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->imageUri = 'cupiditate';
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->machineTypeUri = 'fugit';
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->minCpuPlatform = 'numquam';
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->numInstances = 256916;
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->preemptibility = InstanceGroupConfigPreemptibilityEnum::PREEMPTIBILITY_UNSPECIFIED;
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig = new SecurityConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->identityConfig = new IdentityConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->identityConfig->userServiceAccountMapping = [
        'officia' => 'dignissimos',
        'optio' => 'necessitatibus',
        'corporis' => 'qui',
        'expedita' => 'voluptatum',
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig = new KerberosConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->crossRealmTrustAdminServer = 'cupiditate';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->crossRealmTrustKdc = 'minima';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->crossRealmTrustRealm = 'placeat';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->crossRealmTrustSharedPasswordUri = 'enim';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->enableKerberos = false;
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->kdcDbKeyUri = 'neque';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->keyPasswordUri = 'in';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->keystorePasswordUri = 'minus';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->keystoreUri = 'eum';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->kmsKeyUri = 'modi';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->realm = 'corporis';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->rootPrincipalPasswordUri = 'magnam';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->tgtLifetimeHours = 914971;
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->truststorePasswordUri = 'maiores';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->truststoreUri = 'tempore';
    $request->workflowTemplateInput->placement->managedCluster->config->softwareConfig = new SoftwareConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->softwareConfig->imageVersion = 'aperiam';
    $request->workflowTemplateInput->placement->managedCluster->config->softwareConfig->optionalComponents = [
        SoftwareConfigOptionalComponentsEnum::DOCKER,
        SoftwareConfigOptionalComponentsEnum::FLINK,
        SoftwareConfigOptionalComponentsEnum::HUDI,
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->softwareConfig->properties = [
        'voluptas' => 'quo',
        'velit' => 'minus',
        'fuga' => 'nostrum',
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->tempBucket = 'est';
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig = new InstanceGroupConfigInput();
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->diskConfig = new DiskConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->diskConfig->bootDiskSizeGb = 963741;
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->diskConfig->bootDiskType = 'tempore';
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->diskConfig->localSsdInterface = 'vero';
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->diskConfig->numLocalSsds = 141506;
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->imageUri = 'repellat';
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->machineTypeUri = 'pariatur';
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->minCpuPlatform = 'nemo';
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->numInstances = 441321;
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->preemptibility = InstanceGroupConfigPreemptibilityEnum::PREEMPTIBILITY_UNSPECIFIED;
    $request->workflowTemplateInput->placement->managedCluster->labels = [
        'minima' => 'in',
        'ducimus' => 'excepturi',
    ];
    $request->workflowTemplateInput->version = 172195;
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ducimus';
    $request->fields = 'voluptate';
    $request->key = 'pariatur';
    $request->oauthToken = 'itaque';
    $request->parent = 'similique';
    $request->prettyPrint = false;
    $request->quotaUser = 'optio';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'quaerat';

    $requestSecurity = new DataprocProjectsRegionsWorkflowTemplatesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsWorkflowTemplatesCreate($request, $requestSecurity);

    if ($response->workflowTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsWorkflowTemplatesDelete

Deletes a workflow template. It does not cancel in-progress workflows.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsWorkflowTemplatesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsWorkflowTemplatesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsWorkflowTemplatesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'exercitationem';
    $request->key = 'quam';
    $request->name = 'Pauline Beier';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'dicta';
    $request->version = 936928;

    $requestSecurity = new DataprocProjectsRegionsWorkflowTemplatesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsWorkflowTemplatesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsWorkflowTemplatesGet

Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsWorkflowTemplatesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsWorkflowTemplatesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsWorkflowTemplatesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'animi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nam';
    $request->fields = 'dicta';
    $request->key = 'consequuntur';
    $request->name = 'Robin Bednar';
    $request->oauthToken = 'veritatis';
    $request->pageSize = 96450;
    $request->pageToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'excepturi';
    $request->version = 578210;

    $requestSecurity = new DataprocProjectsRegionsWorkflowTemplatesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsWorkflowTemplatesGet($request, $requestSecurity);

    if ($response->workflowTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsWorkflowTemplatesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPolicyOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsWorkflowTemplatesGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->getIamPolicyRequest = new GetIamPolicyRequest();
    $request->getIamPolicyRequest->options = new GetPolicyOptions();
    $request->getIamPolicyRequest->options->requestedPolicyVersion = 306382;
    $request->accessToken = 'nostrum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eligendi';
    $request->fields = 'sint';
    $request->key = 'enim';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'animi';
    $request->resource = 'quas';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'molestias';

    $requestSecurity = new DataprocProjectsRegionsWorkflowTemplatesGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsWorkflowTemplatesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsWorkflowTemplatesInstantiate

Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstantiateWorkflowTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsWorkflowTemplatesInstantiateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instantiateWorkflowTemplateRequest = new InstantiateWorkflowTemplateRequest();
    $request->instantiateWorkflowTemplateRequest->parameters = [
        'saepe' => 'architecto',
    ];
    $request->instantiateWorkflowTemplateRequest->requestId = 'quos';
    $request->instantiateWorkflowTemplateRequest->version = 614438;
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->fields = 'velit';
    $request->key = 'doloremque';
    $request->name = 'Edmund Robel';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new DataprocProjectsRegionsWorkflowTemplatesInstantiateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsWorkflowTemplatesInstantiate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsWorkflowTemplatesInstantiateInline

Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowTemplateInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderedJob;
use \OpenAPI\OpenAPI\Models\Shared\HadoopJob;
use \OpenAPI\OpenAPI\Models\Shared\LoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingConfigDriverLogLevelsEnum;
use \OpenAPI\OpenAPI\Models\Shared\HiveJob;
use \OpenAPI\OpenAPI\Models\Shared\QueryList;
use \OpenAPI\OpenAPI\Models\Shared\PigJob;
use \OpenAPI\OpenAPI\Models\Shared\PrestoJob;
use \OpenAPI\OpenAPI\Models\Shared\PySparkJob;
use \OpenAPI\OpenAPI\Models\Shared\JobScheduling;
use \OpenAPI\OpenAPI\Models\Shared\SparkJob;
use \OpenAPI\OpenAPI\Models\Shared\SparkRJob;
use \OpenAPI\OpenAPI\Models\Shared\SparkSqlJob;
use \OpenAPI\OpenAPI\Models\Shared\TrinoJob;
use \OpenAPI\OpenAPI\Models\Shared\TemplateParameter;
use \OpenAPI\OpenAPI\Models\Shared\ParameterValidation;
use \OpenAPI\OpenAPI\Models\Shared\RegexValidation;
use \OpenAPI\OpenAPI\Models\Shared\ValueValidation;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowTemplatePlacementInput;
use \OpenAPI\OpenAPI\Models\Shared\ClusterSelector;
use \OpenAPI\OpenAPI\Models\Shared\ManagedClusterInput;
use \OpenAPI\OpenAPI\Models\Shared\ClusterConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuxiliaryNodeGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\DiskConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupConfigPreemptibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupRolesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataprocMetricConfig;
use \OpenAPI\OpenAPI\Models\Shared\Metric;
use \OpenAPI\OpenAPI\Models\Shared\MetricMetricSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\EndpointConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GceClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConfidentialInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupAffinity;
use \OpenAPI\OpenAPI\Models\Shared\GceClusterConfigPrivateIpv6GoogleAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinity;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinityConsumeReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\NamespacedGkeDeploymentTarget;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolTarget;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolAutoscalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolAcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolTargetRolesEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeInitializationAction;
use \OpenAPI\OpenAPI\Models\Shared\LifecycleConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\MetastoreConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityConfig;
use \OpenAPI\OpenAPI\Models\Shared\IdentityConfig;
use \OpenAPI\OpenAPI\Models\Shared\KerberosConfig;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareConfig;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareConfigOptionalComponentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->workflowTemplateInput = new WorkflowTemplateInput();
    $request->workflowTemplateInput->dagTimeout = 'libero';
    $request->workflowTemplateInput->id = '197cd44e-2f52-4d82-9351-3bb6f48b656b';
    $request->workflowTemplateInput->jobs = [
        new OrderedJob(),
        new OrderedJob(),
        new OrderedJob(),
        new OrderedJob(),
    ];
    $request->workflowTemplateInput->labels = [
        'facilis' => 'ipsum',
        'ad' => 'voluptatibus',
        'voluptatibus' => 'consequuntur',
        'debitis' => 'labore',
    ];
    $request->workflowTemplateInput->parameters = [
        new TemplateParameter(),
        new TemplateParameter(),
        new TemplateParameter(),
    ];
    $request->workflowTemplateInput->placement = new WorkflowTemplatePlacementInput();
    $request->workflowTemplateInput->placement->clusterSelector = new ClusterSelector();
    $request->workflowTemplateInput->placement->clusterSelector->clusterLabels = [
        'reprehenderit' => 'nostrum',
    ];
    $request->workflowTemplateInput->placement->clusterSelector->zone = 'neque';
    $request->workflowTemplateInput->placement->managedCluster = new ManagedClusterInput();
    $request->workflowTemplateInput->placement->managedCluster->clusterName = 'iusto';
    $request->workflowTemplateInput->placement->managedCluster->config = new ClusterConfigInput();
    $request->workflowTemplateInput->placement->managedCluster->config->autoscalingConfig = new AutoscalingConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->autoscalingConfig->policyUri = 'est';
    $request->workflowTemplateInput->placement->managedCluster->config->auxiliaryNodeGroups = [
        new AuxiliaryNodeGroupInput(),
        new AuxiliaryNodeGroupInput(),
        new AuxiliaryNodeGroupInput(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->configBucket = 'eligendi';
    $request->workflowTemplateInput->placement->managedCluster->config->dataprocMetricConfig = new DataprocMetricConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->dataprocMetricConfig->metrics = [
        new Metric(),
        new Metric(),
        new Metric(),
        new Metric(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->encryptionConfig = new EncryptionConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->encryptionConfig->gcePdKmsKeyName = 'unde';
    $request->workflowTemplateInput->placement->managedCluster->config->encryptionConfig->kmsKey = 'officiis';
    $request->workflowTemplateInput->placement->managedCluster->config->endpointConfig = new EndpointConfigInput();
    $request->workflowTemplateInput->placement->managedCluster->config->endpointConfig->enableHttpPortAccess = false;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig = new GceClusterConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->internalIpOnly = false;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->metadata = [
        'dolor' => 'dicta',
        'error' => 'porro',
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->networkUri = 'vitae';
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->nodeGroupAffinity = new NodeGroupAffinity();
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->nodeGroupAffinity->nodeGroupUri = 'dignissimos';
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->privateIpv6GoogleAccess = GceClusterConfigPrivateIpv6GoogleAccessEnum::INHERIT_FROM_SUBNETWORK;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->reservationAffinity = new ReservationAffinity();
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::SPECIFIC_RESERVATION;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->reservationAffinity->key = 'ad';
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->reservationAffinity->values = [
        'enim',
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->serviceAccount = 'delectus';
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->serviceAccountScopes = [
        'dignissimos',
        'libero',
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->shieldedInstanceConfig->enableSecureBoot = false;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->shieldedInstanceConfig->enableVtpm = false;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->subnetworkUri = 'illo';
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->tags = [
        'incidunt',
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->zoneUri = 'accusamus';
    $request->workflowTemplateInput->placement->managedCluster->config->gkeClusterConfig = new GkeClusterConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->gkeClusterConfig->gkeClusterTarget = 'saepe';
    $request->workflowTemplateInput->placement->managedCluster->config->gkeClusterConfig->namespacedGkeDeploymentTarget = new NamespacedGkeDeploymentTarget();
    $request->workflowTemplateInput->placement->managedCluster->config->gkeClusterConfig->namespacedGkeDeploymentTarget->clusterNamespace = 'tempore';
    $request->workflowTemplateInput->placement->managedCluster->config->gkeClusterConfig->namespacedGkeDeploymentTarget->targetGkeCluster = 'veniam';
    $request->workflowTemplateInput->placement->managedCluster->config->gkeClusterConfig->nodePoolTarget = [
        new GkeNodePoolTarget(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->initializationActions = [
        new NodeInitializationAction(),
        new NodeInitializationAction(),
        new NodeInitializationAction(),
        new NodeInitializationAction(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->lifecycleConfig = new LifecycleConfigInput();
    $request->workflowTemplateInput->placement->managedCluster->config->lifecycleConfig->autoDeleteTime = 'earum';
    $request->workflowTemplateInput->placement->managedCluster->config->lifecycleConfig->autoDeleteTtl = 'reprehenderit';
    $request->workflowTemplateInput->placement->managedCluster->config->lifecycleConfig->idleDeleteTtl = 'praesentium';
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig = new InstanceGroupConfigInput();
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->diskConfig = new DiskConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->diskConfig->bootDiskSizeGb = 999809;
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->diskConfig->bootDiskType = 'quisquam';
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->diskConfig->localSsdInterface = 'sequi';
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->diskConfig->numLocalSsds = 467119;
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->imageUri = 'deleniti';
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->machineTypeUri = 'illo';
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->minCpuPlatform = 'labore';
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->numInstances = 828841;
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->preemptibility = InstanceGroupConfigPreemptibilityEnum::NON_PREEMPTIBLE;
    $request->workflowTemplateInput->placement->managedCluster->config->metastoreConfig = new MetastoreConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->metastoreConfig->dataprocMetastoreService = 'quisquam';
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig = new InstanceGroupConfigInput();
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->diskConfig = new DiskConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->diskConfig->bootDiskSizeGb = 514993;
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->diskConfig->bootDiskType = 'repudiandae';
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->diskConfig->localSsdInterface = 'consequatur';
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->diskConfig->numLocalSsds = 805264;
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->imageUri = 'aspernatur';
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->machineTypeUri = 'nam';
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->minCpuPlatform = 'expedita';
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->numInstances = 559174;
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->preemptibility = InstanceGroupConfigPreemptibilityEnum::PREEMPTIBLE;
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig = new SecurityConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->identityConfig = new IdentityConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->identityConfig->userServiceAccountMapping = [
        'rerum' => 'dignissimos',
        'corporis' => 'vero',
        'similique' => 'repellendus',
        'iure' => 'dolorem',
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig = new KerberosConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->crossRealmTrustAdminServer = 'commodi';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->crossRealmTrustKdc = 'impedit';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->crossRealmTrustRealm = 'commodi';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->crossRealmTrustSharedPasswordUri = 'aut';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->enableKerberos = false;
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->kdcDbKeyUri = 'voluptatem';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->keyPasswordUri = 'ad';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->keystorePasswordUri = 'quae';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->keystoreUri = 'amet';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->kmsKeyUri = 'illum';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->realm = 'praesentium';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->rootPrincipalPasswordUri = 'quidem';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->tgtLifetimeHours = 736853;
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->truststorePasswordUri = 'amet';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->truststoreUri = 'quasi';
    $request->workflowTemplateInput->placement->managedCluster->config->softwareConfig = new SoftwareConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->softwareConfig->imageVersion = 'dicta';
    $request->workflowTemplateInput->placement->managedCluster->config->softwareConfig->optionalComponents = [
        SoftwareConfigOptionalComponentsEnum::COMPONENT_UNSPECIFIED,
        SoftwareConfigOptionalComponentsEnum::ZOOKEEPER,
        SoftwareConfigOptionalComponentsEnum::HUDI,
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->softwareConfig->properties = [
        'provident' => 'dolorum',
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->tempBucket = 'necessitatibus';
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig = new InstanceGroupConfigInput();
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->diskConfig = new DiskConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->diskConfig->bootDiskSizeGb = 920272;
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->diskConfig->bootDiskType = 'consequatur';
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->diskConfig->localSsdInterface = 'nemo';
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->diskConfig->numLocalSsds = 475826;
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->imageUri = 'itaque';
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->machineTypeUri = 'facilis';
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->minCpuPlatform = 'corrupti';
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->numInstances = 43975;
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->preemptibility = InstanceGroupConfigPreemptibilityEnum::PREEMPTIBLE;
    $request->workflowTemplateInput->placement->managedCluster->labels = [
        'eos' => 'totam',
        'dicta' => 'voluptatem',
        'velit' => 'dolor',
        'sunt' => 'a',
    ];
    $request->workflowTemplateInput->version = 223291;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'beatae';
    $request->fields = 'at';
    $request->key = 'labore';
    $request->oauthToken = 'minus';
    $request->parent = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatem';
    $request->requestId = 'perferendis';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsWorkflowTemplatesInstantiateInline($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsWorkflowTemplatesList

Lists workflows that match the specified filter in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsWorkflowTemplatesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsWorkflowTemplatesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsWorkflowTemplatesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'velit';
    $request->fields = 'porro';
    $request->key = 'provident';
    $request->oauthToken = 'consectetur';
    $request->pageSize = 753240;
    $request->pageToken = 'dignissimos';
    $request->parent = 'consectetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'soluta';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new DataprocProjectsRegionsWorkflowTemplatesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsWorkflowTemplatesList($request, $requestSecurity);

    if ($response->listWorkflowTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsWorkflowTemplatesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsWorkflowTemplatesSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'tenetur';
    $request->setIamPolicyRequest->policy->version = 133949;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illum';
    $request->fields = 'laborum';
    $request->key = 'dignissimos';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->resource = 'consectetur';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new DataprocProjectsRegionsWorkflowTemplatesSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsWorkflowTemplatesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsWorkflowTemplatesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'nihil',
        'non',
    ];
    $request->accessToken = 'ab';
    $request->alt = AltEnum::JSON;
    $request->callback = 'hic';
    $request->fields = 'deserunt';
    $request->key = 'delectus';
    $request->oauthToken = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->resource = 'in';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsWorkflowTemplatesTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataprocProjectsRegionsWorkflowTemplatesUpdate

Updates (replaces) workflow template. The updated template must contain version that matches the current server version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsWorkflowTemplatesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowTemplateInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderedJob;
use \OpenAPI\OpenAPI\Models\Shared\HadoopJob;
use \OpenAPI\OpenAPI\Models\Shared\LoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingConfigDriverLogLevelsEnum;
use \OpenAPI\OpenAPI\Models\Shared\HiveJob;
use \OpenAPI\OpenAPI\Models\Shared\QueryList;
use \OpenAPI\OpenAPI\Models\Shared\PigJob;
use \OpenAPI\OpenAPI\Models\Shared\PrestoJob;
use \OpenAPI\OpenAPI\Models\Shared\PySparkJob;
use \OpenAPI\OpenAPI\Models\Shared\JobScheduling;
use \OpenAPI\OpenAPI\Models\Shared\SparkJob;
use \OpenAPI\OpenAPI\Models\Shared\SparkRJob;
use \OpenAPI\OpenAPI\Models\Shared\SparkSqlJob;
use \OpenAPI\OpenAPI\Models\Shared\TrinoJob;
use \OpenAPI\OpenAPI\Models\Shared\TemplateParameter;
use \OpenAPI\OpenAPI\Models\Shared\ParameterValidation;
use \OpenAPI\OpenAPI\Models\Shared\RegexValidation;
use \OpenAPI\OpenAPI\Models\Shared\ValueValidation;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowTemplatePlacementInput;
use \OpenAPI\OpenAPI\Models\Shared\ClusterSelector;
use \OpenAPI\OpenAPI\Models\Shared\ManagedClusterInput;
use \OpenAPI\OpenAPI\Models\Shared\ClusterConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuxiliaryNodeGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\DiskConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupConfigPreemptibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupRolesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataprocMetricConfig;
use \OpenAPI\OpenAPI\Models\Shared\Metric;
use \OpenAPI\OpenAPI\Models\Shared\MetricMetricSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\EndpointConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GceClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConfidentialInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupAffinity;
use \OpenAPI\OpenAPI\Models\Shared\GceClusterConfigPrivateIpv6GoogleAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinity;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinityConsumeReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\NamespacedGkeDeploymentTarget;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolTarget;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolAutoscalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolAcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeNodePoolTargetRolesEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeInitializationAction;
use \OpenAPI\OpenAPI\Models\Shared\LifecycleConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\MetastoreConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityConfig;
use \OpenAPI\OpenAPI\Models\Shared\IdentityConfig;
use \OpenAPI\OpenAPI\Models\Shared\KerberosConfig;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareConfig;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareConfigOptionalComponentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataprocProjectsRegionsWorkflowTemplatesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataprocProjectsRegionsWorkflowTemplatesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->workflowTemplateInput = new WorkflowTemplateInput();
    $request->workflowTemplateInput->dagTimeout = 'repudiandae';
    $request->workflowTemplateInput->id = '472e8028-57a5-4b40-863a-7d575f1400e7';
    $request->workflowTemplateInput->jobs = [
        new OrderedJob(),
        new OrderedJob(),
    ];
    $request->workflowTemplateInput->labels = [
        'dolorum' => 'possimus',
        'voluptate' => 'consectetur',
    ];
    $request->workflowTemplateInput->parameters = [
        new TemplateParameter(),
    ];
    $request->workflowTemplateInput->placement = new WorkflowTemplatePlacementInput();
    $request->workflowTemplateInput->placement->clusterSelector = new ClusterSelector();
    $request->workflowTemplateInput->placement->clusterSelector->clusterLabels = [
        'itaque' => 'minus',
        'sunt' => 'distinctio',
    ];
    $request->workflowTemplateInput->placement->clusterSelector->zone = 'iusto';
    $request->workflowTemplateInput->placement->managedCluster = new ManagedClusterInput();
    $request->workflowTemplateInput->placement->managedCluster->clusterName = 'quas';
    $request->workflowTemplateInput->placement->managedCluster->config = new ClusterConfigInput();
    $request->workflowTemplateInput->placement->managedCluster->config->autoscalingConfig = new AutoscalingConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->autoscalingConfig->policyUri = 'et';
    $request->workflowTemplateInput->placement->managedCluster->config->auxiliaryNodeGroups = [
        new AuxiliaryNodeGroupInput(),
        new AuxiliaryNodeGroupInput(),
        new AuxiliaryNodeGroupInput(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->configBucket = 'amet';
    $request->workflowTemplateInput->placement->managedCluster->config->dataprocMetricConfig = new DataprocMetricConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->dataprocMetricConfig->metrics = [
        new Metric(),
        new Metric(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->encryptionConfig = new EncryptionConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->encryptionConfig->gcePdKmsKeyName = 'fuga';
    $request->workflowTemplateInput->placement->managedCluster->config->encryptionConfig->kmsKey = 'alias';
    $request->workflowTemplateInput->placement->managedCluster->config->endpointConfig = new EndpointConfigInput();
    $request->workflowTemplateInput->placement->managedCluster->config->endpointConfig->enableHttpPortAccess = false;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig = new GceClusterConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->internalIpOnly = false;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->metadata = [
        'aut' => 'quos',
        'laudantium' => 'repellendus',
        'veritatis' => 'quae',
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->networkUri = 'eaque';
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->nodeGroupAffinity = new NodeGroupAffinity();
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->nodeGroupAffinity->nodeGroupUri = 'saepe';
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->privateIpv6GoogleAccess = GceClusterConfigPrivateIpv6GoogleAccessEnum::BIDIRECTIONAL;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->reservationAffinity = new ReservationAffinity();
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::ANY_RESERVATION;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->reservationAffinity->key = 'nulla';
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->reservationAffinity->values = [
        'sed',
        'voluptatem',
        'alias',
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->serviceAccount = 'eveniet';
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->serviceAccountScopes = [
        'voluptatem',
        'incidunt',
        'qui',
        'qui',
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->shieldedInstanceConfig->enableSecureBoot = false;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->shieldedInstanceConfig->enableVtpm = false;
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->subnetworkUri = 'necessitatibus';
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->tags = [
        'explicabo',
        'beatae',
        'aliquid',
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->gceClusterConfig->zoneUri = 'modi';
    $request->workflowTemplateInput->placement->managedCluster->config->gkeClusterConfig = new GkeClusterConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->gkeClusterConfig->gkeClusterTarget = 'optio';
    $request->workflowTemplateInput->placement->managedCluster->config->gkeClusterConfig->namespacedGkeDeploymentTarget = new NamespacedGkeDeploymentTarget();
    $request->workflowTemplateInput->placement->managedCluster->config->gkeClusterConfig->namespacedGkeDeploymentTarget->clusterNamespace = 'voluptatibus';
    $request->workflowTemplateInput->placement->managedCluster->config->gkeClusterConfig->namespacedGkeDeploymentTarget->targetGkeCluster = 'molestias';
    $request->workflowTemplateInput->placement->managedCluster->config->gkeClusterConfig->nodePoolTarget = [
        new GkeNodePoolTarget(),
        new GkeNodePoolTarget(),
        new GkeNodePoolTarget(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->initializationActions = [
        new NodeInitializationAction(),
        new NodeInitializationAction(),
        new NodeInitializationAction(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->lifecycleConfig = new LifecycleConfigInput();
    $request->workflowTemplateInput->placement->managedCluster->config->lifecycleConfig->autoDeleteTime = 'totam';
    $request->workflowTemplateInput->placement->managedCluster->config->lifecycleConfig->autoDeleteTtl = 'sequi';
    $request->workflowTemplateInput->placement->managedCluster->config->lifecycleConfig->idleDeleteTtl = 'aliquid';
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig = new InstanceGroupConfigInput();
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->diskConfig = new DiskConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->diskConfig->bootDiskSizeGb = 774501;
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->diskConfig->bootDiskType = 'ducimus';
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->diskConfig->localSsdInterface = 'odit';
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->diskConfig->numLocalSsds = 243623;
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->imageUri = 'reiciendis';
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->machineTypeUri = 'repellat';
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->minCpuPlatform = 'nulla';
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->numInstances = 671116;
    $request->workflowTemplateInput->placement->managedCluster->config->masterConfig->preemptibility = InstanceGroupConfigPreemptibilityEnum::PREEMPTIBLE;
    $request->workflowTemplateInput->placement->managedCluster->config->metastoreConfig = new MetastoreConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->metastoreConfig->dataprocMetastoreService = 'accusamus';
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig = new InstanceGroupConfigInput();
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->accelerators = [
        new AcceleratorConfig(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->diskConfig = new DiskConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->diskConfig->bootDiskSizeGb = 392967;
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->diskConfig->bootDiskType = 'rerum';
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->diskConfig->localSsdInterface = 'recusandae';
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->diskConfig->numLocalSsds = 913285;
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->imageUri = 'non';
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->machineTypeUri = 'rem';
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->minCpuPlatform = 'quia';
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->numInstances = 354225;
    $request->workflowTemplateInput->placement->managedCluster->config->secondaryWorkerConfig->preemptibility = InstanceGroupConfigPreemptibilityEnum::SPOT;
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig = new SecurityConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->identityConfig = new IdentityConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->identityConfig->userServiceAccountMapping = [
        'voluptatibus' => 'eligendi',
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig = new KerberosConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->crossRealmTrustAdminServer = 'quae';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->crossRealmTrustKdc = 'officiis';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->crossRealmTrustRealm = 'architecto';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->crossRealmTrustSharedPasswordUri = 'architecto';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->enableKerberos = false;
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->kdcDbKeyUri = 'enim';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->keyPasswordUri = 'optio';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->keystorePasswordUri = 'rem';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->keystoreUri = 'perferendis';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->kmsKeyUri = 'facilis';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->realm = 'reiciendis';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->rootPrincipalPasswordUri = 'a';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->tgtLifetimeHours = 615058;
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->truststorePasswordUri = 'dicta';
    $request->workflowTemplateInput->placement->managedCluster->config->securityConfig->kerberosConfig->truststoreUri = 'quos';
    $request->workflowTemplateInput->placement->managedCluster->config->softwareConfig = new SoftwareConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->softwareConfig->imageVersion = 'ullam';
    $request->workflowTemplateInput->placement->managedCluster->config->softwareConfig->optionalComponents = [
        SoftwareConfigOptionalComponentsEnum::DRUID,
        SoftwareConfigOptionalComponentsEnum::ZEPPELIN,
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->softwareConfig->properties = [
        'modi' => 'consequuntur',
        'assumenda' => 'vero',
        'doloribus' => 'impedit',
        'porro' => 'accusamus',
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->tempBucket = 'totam';
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig = new InstanceGroupConfigInput();
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->diskConfig = new DiskConfig();
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->diskConfig->bootDiskSizeGb = 66074;
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->diskConfig->bootDiskType = 'sint';
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->diskConfig->localSsdInterface = 'nihil';
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->diskConfig->numLocalSsds = 458412;
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->imageUri = 'iure';
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->machineTypeUri = 'odio';
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->minCpuPlatform = 'nesciunt';
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->numInstances = 895513;
    $request->workflowTemplateInput->placement->managedCluster->config->workerConfig->preemptibility = InstanceGroupConfigPreemptibilityEnum::NON_PREEMPTIBLE;
    $request->workflowTemplateInput->placement->managedCluster->labels = [
        'corporis' => 'voluptas',
    ];
    $request->workflowTemplateInput->version = 163684;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'distinctio';
    $request->fields = 'eius';
    $request->key = 'ipsa';
    $request->name = 'Emilio Barton';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->quotaUser = 'facere';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new DataprocProjectsRegionsWorkflowTemplatesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataprocProjectsRegionsWorkflowTemplatesUpdate($request, $requestSecurity);

    if ($response->workflowTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
