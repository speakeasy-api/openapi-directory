# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsLocationsBatchesCreateRequest;
import org.openapis.openapi.models.operations.DataprocProjectsLocationsBatchesCreateResponse;
import org.openapis.openapi.models.operations.DataprocProjectsLocationsBatchesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchInput;
import org.openapis.openapi.models.shared.EnvironmentConfig;
import org.openapis.openapi.models.shared.ExecutionConfig;
import org.openapis.openapi.models.shared.PeripheralsConfig;
import org.openapis.openapi.models.shared.PySparkBatch;
import org.openapis.openapi.models.shared.RuntimeConfig;
import org.openapis.openapi.models.shared.RuntimeInfoInput;
import org.openapis.openapi.models.shared.SparkBatch;
import org.openapis.openapi.models.shared.SparkHistoryServerConfig;
import org.openapis.openapi.models.shared.SparkRBatch;
import org.openapis.openapi.models.shared.SparkSqlBatch;
import org.openapis.openapi.models.shared.UsageMetrics;
import org.openapis.openapi.models.shared.UsageSnapshot;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsLocationsBatchesCreateRequest req = new DataprocProjectsLocationsBatchesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                batchInput = new BatchInput() {{
                    environmentConfig = new EnvironmentConfig() {{
                        executionConfig = new ExecutionConfig() {{
                            idleTtl = "distinctio";
                            kmsKey = "quibusdam";
                            networkTags = new String[]{{
                                add("nulla"),
                                add("corrupti"),
                                add("illum"),
                            }};
                            networkUri = "vel";
                            serviceAccount = "error";
                            stagingBucket = "deserunt";
                            subnetworkUri = "suscipit";
                            ttl = "iure";
                        }};;
                        peripheralsConfig = new PeripheralsConfig() {{
                            metastoreService = "magnam";
                            sparkHistoryServerConfig = new SparkHistoryServerConfig() {{
                                dataprocCluster = "debitis";
                            }};;
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("delectus", "tempora");
                    }};
                    pysparkBatch = new PySparkBatch() {{
                        archiveUris = new String[]{{
                            add("molestiae"),
                            add("minus"),
                        }};
                        args = new String[]{{
                            add("voluptatum"),
                            add("iusto"),
                            add("excepturi"),
                            add("nisi"),
                        }};
                        fileUris = new String[]{{
                            add("temporibus"),
                            add("ab"),
                            add("quis"),
                            add("veritatis"),
                        }};
                        jarFileUris = new String[]{{
                            add("perferendis"),
                            add("ipsam"),
                            add("repellendus"),
                        }};
                        mainPythonFileUri = "sapiente";
                        pythonFileUris = new String[]{{
                            add("odit"),
                            add("at"),
                            add("at"),
                            add("maiores"),
                        }};
                    }};;
                    runtimeConfig = new RuntimeConfig() {{
                        containerImage = "molestiae";
                        properties = new java.util.HashMap<String, String>() {{
                            put("quod", "esse");
                            put("totam", "porro");
                            put("dolorum", "dicta");
                            put("nam", "officia");
                        }};
                        version = "occaecati";
                    }};;
                    runtimeInfo = new RuntimeInfoInput() {{
                        approximateUsage = new UsageMetrics() {{
                            milliDcuSeconds = "fugit";
                            shuffleStorageGbSeconds = "deleniti";
                        }};;
                        currentUsage = new UsageSnapshot() {{
                            milliDcu = "hic";
                            shuffleStorageGb = "optio";
                            snapshotTime = "totam";
                        }};;
                    }};;
                    sparkBatch = new SparkBatch() {{
                        archiveUris = new String[]{{
                            add("commodi"),
                        }};
                        args = new String[]{{
                            add("modi"),
                            add("qui"),
                        }};
                        fileUris = new String[]{{
                            add("cum"),
                            add("esse"),
                            add("ipsum"),
                            add("excepturi"),
                        }};
                        jarFileUris = new String[]{{
                            add("perferendis"),
                        }};
                        mainClass = "ad";
                        mainJarFileUri = "natus";
                    }};;
                    sparkRBatch = new SparkRBatch() {{
                        archiveUris = new String[]{{
                            add("iste"),
                        }};
                        args = new String[]{{
                            add("natus"),
                        }};
                        fileUris = new String[]{{
                            add("hic"),
                            add("saepe"),
                        }};
                        mainRFileUri = "fuga";
                    }};;
                    sparkSqlBatch = new SparkSqlBatch() {{
                        jarFileUris = new String[]{{
                            add("corporis"),
                            add("iste"),
                        }};
                        queryFileUri = "iure";
                        queryVariables = new java.util.HashMap<String, String>() {{
                            put("quidem", "architecto");
                            put("ipsa", "reiciendis");
                            put("est", "mollitia");
                            put("laborum", "dolores");
                        }};
                    }};;
                }};;
                accessToken = "dolorem";
                alt = AltEnum.MEDIA;
                batchId = "explicabo";
                callback = "nobis";
                fields = "enim";
                key = "omnis";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "minima";
                requestId = "excepturi";
                uploadType = "accusantium";
                uploadProtocol = "iure";
            }};            

            DataprocProjectsLocationsBatchesCreateResponse res = sdk.projects.dataprocProjectsLocationsBatchesCreate(req, new DataprocProjectsLocationsBatchesCreateSecurity("culpa", "doloribus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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
