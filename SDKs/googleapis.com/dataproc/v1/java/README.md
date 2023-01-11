# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            DataprocProjectsLocationsBatchesCreateRequest req = new DataprocProjectsLocationsBatchesCreateRequest() {{
                security = new DataprocProjectsLocationsBatchesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DataprocProjectsLocationsBatchesCreatePathParams() {{
                    parent = "eum";
                }};
                queryParams = new DataprocProjectsLocationsBatchesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "laborum";
                    alt = "json";
                    batchId = "illum";
                    callback = "nam";
                    fields = "necessitatibus";
                    key = "aspernatur";
                    oauthToken = "quasi";
                    prettyPrint = false;
                    quotaUser = "consequatur";
                    requestId = "quos";
                    uploadType = "voluptas";
                    uploadProtocol = "quam";
                }};
                request = new BatchInput() {{
                    environmentConfig = new EnvironmentConfig() {{
                        executionConfig = new ExecutionConfig() {{
                            idleTtl = "vero";
                            kmsKey = "nam";
                            networkTags = new String[]() {{
                                add("quia"),
                                add("blanditiis"),
                                add("vel"),
                            }};
                            networkUri = "expedita";
                            serviceAccount = "quo";
                            subnetworkUri = "id";
                        }};
                        peripheralsConfig = new PeripheralsConfig() {{
                            metastoreService = "perferendis";
                            sparkHistoryServerConfig = new SparkHistoryServerConfig() {{
                                dataprocCluster = "impedit";
                            }};
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("dignissimos", "dolor");
                    }};
                    pysparkBatch = new PySparkBatch() {{
                        archiveUris = new String[]() {{
                            add("illo"),
                            add("est"),
                        }};
                        args = new String[]() {{
                            add("facilis"),
                        }};
                        fileUris = new String[]() {{
                            add("iure"),
                            add("est"),
                            add("sequi"),
                        }};
                        jarFileUris = new String[]() {{
                            add("ipsam"),
                            add("nihil"),
                        }};
                        mainPythonFileUri = "sunt";
                        pythonFileUris = new String[]() {{
                            add("vitae"),
                        }};
                    }};
                    runtimeConfig = new RuntimeConfig() {{
                        containerImage = "provident";
                        properties = new java.util.HashMap<String, String>() {{
                            put("laborum", "voluptas");
                            put("veniam", "dolorum");
                        }};
                        version = "id";
                    }};
                    runtimeInfo = new RuntimeInfoInput() {{
                        approximateUsage = new UsageMetrics() {{
                            milliDcuSeconds = "velit";
                            shuffleStorageGbSeconds = "neque";
                        }};
                    }};
                    sparkBatch = new SparkBatch() {{
                        archiveUris = new String[]() {{
                            add("consequatur"),
                        }};
                        args = new String[]() {{
                            add("sit"),
                        }};
                        fileUris = new String[]() {{
                            add("praesentium"),
                            add("sint"),
                        }};
                        jarFileUris = new String[]() {{
                            add("atque"),
                        }};
                        mainClass = "iusto";
                        mainJarFileUri = "rem";
                    }};
                    sparkRBatch = new SparkRBatch() {{
                        archiveUris = new String[]() {{
                            add("ut"),
                        }};
                        args = new String[]() {{
                            add("nulla"),
                        }};
                        fileUris = new String[]() {{
                            add("maiores"),
                            add("ab"),
                            add("amet"),
                        }};
                        mainRFileUri = "fugiat";
                    }};
                    sparkSqlBatch = new SparkSqlBatch() {{
                        jarFileUris = new String[]() {{
                            add("eveniet"),
                            add("consequatur"),
                        }};
                        queryFileUri = "quia";
                        queryVariables = new java.util.HashMap<String, String>() {{
                            put("nesciunt", "necessitatibus");
                            put("ipsa", "id");
                        }};
                    }};
                }};
            }};

            DataprocProjectsLocationsBatchesCreateResponse res = sdk.projects.dataprocProjectsLocationsBatchesCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `dataprocProjectsLocationsBatchesCreate` - Creates a batch workload that executes asynchronously.
* `dataprocProjectsLocationsBatchesList` - Lists batch workloads.
* `dataprocProjectsRegionsAutoscalingPoliciesCreate` - Creates new autoscaling policy.
* `dataprocProjectsRegionsAutoscalingPoliciesList` - Lists autoscaling policies in the project.
* `dataprocProjectsRegionsClustersCreate` - Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
* `dataprocProjectsRegionsClustersDelete` - Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
* `dataprocProjectsRegionsClustersDiagnose` - Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).
* `dataprocProjectsRegionsClustersGet` - Gets the resource representation for a cluster in a project.
* `dataprocProjectsRegionsClustersInjectCredentials` - Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.
* `dataprocProjectsRegionsClustersList` - Lists all regions/{region}/clusters in a project alphabetically.
* `dataprocProjectsRegionsClustersPatch` - Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.
* `dataprocProjectsRegionsClustersRepair` - Repairs a cluster.
* `dataprocProjectsRegionsClustersStart` - Starts a cluster in a project.
* `dataprocProjectsRegionsClustersStop` - Stops a cluster in a project.
* `dataprocProjectsRegionsJobsCancel` - Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).
* `dataprocProjectsRegionsJobsDelete` - Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
* `dataprocProjectsRegionsJobsGet` - Gets the resource representation for a job in a project.
* `dataprocProjectsRegionsJobsList` - Lists regions/{region}/jobs in a project.
* `dataprocProjectsRegionsJobsPatch` - Updates a job in a project.
* `dataprocProjectsRegionsJobsSubmit` - Submits a job to a cluster.
* `dataprocProjectsRegionsJobsSubmitAsOperation` - Submits job to a cluster.
* `dataprocProjectsRegionsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* `dataprocProjectsRegionsWorkflowTemplatesCreate` - Creates new workflow template.
* `dataprocProjectsRegionsWorkflowTemplatesDelete` - Deletes a workflow template. It does not cancel in-progress workflows.
* `dataprocProjectsRegionsWorkflowTemplatesGet` - Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.
* `dataprocProjectsRegionsWorkflowTemplatesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `dataprocProjectsRegionsWorkflowTemplatesInstantiate` - Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
* `dataprocProjectsRegionsWorkflowTemplatesInstantiateInline` - Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
* `dataprocProjectsRegionsWorkflowTemplatesList` - Lists workflows that match the specified filter in the request.
* `dataprocProjectsRegionsWorkflowTemplatesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* `dataprocProjectsRegionsWorkflowTemplatesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `dataprocProjectsRegionsWorkflowTemplatesUpdate` - Updates (replaces) workflow template. The updated template must contain version that matches the current server version.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
