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

            DataprocProjectsLocationsBatchesCreateRequest req = new DataprocProjectsLocationsBatchesCreateRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                batchInput = new BatchInput() {{
                    environmentConfig = new EnvironmentConfig() {{
                        executionConfig = new ExecutionConfig() {{
                            idleTtl = "mollitia";
                            kmsKey = "dolorem";
                            networkTags = new String[]{{
                                add("consequuntur"),
                                add("repellat"),
                                add("mollitia"),
                            }};
                            networkUri = "occaecati";
                            serviceAccount = "numquam";
                            stagingBucket = "commodi";
                            subnetworkUri = "quam";
                            ttl = "molestiae";
                        }};;
                        peripheralsConfig = new PeripheralsConfig() {{
                            metastoreService = "velit";
                            sparkHistoryServerConfig = new SparkHistoryServerConfig() {{
                                dataprocCluster = "error";
                            }};;
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("quis", "vitae");
                    }};
                    pysparkBatch = new PySparkBatch() {{
                        archiveUris = new String[]{{
                            add("animi"),
                            add("enim"),
                            add("odit"),
                        }};
                        args = new String[]{{
                            add("sequi"),
                            add("tenetur"),
                            add("ipsam"),
                            add("id"),
                        }};
                        fileUris = new String[]{{
                            add("aut"),
                            add("quasi"),
                            add("error"),
                            add("temporibus"),
                        }};
                        jarFileUris = new String[]{{
                            add("quasi"),
                            add("reiciendis"),
                            add("voluptatibus"),
                        }};
                        mainPythonFileUri = "vero";
                        pythonFileUris = new String[]{{
                            add("praesentium"),
                            add("voluptatibus"),
                        }};
                    }};;
                    runtimeConfig = new RuntimeConfig() {{
                        containerImage = "ipsa";
                        properties = new java.util.HashMap<String, String>() {{
                            put("voluptate", "cum");
                            put("perferendis", "doloremque");
                            put("reprehenderit", "ut");
                        }};
                        version = "maiores";
                    }};;
                    runtimeInfo = new RuntimeInfoInput() {{
                        approximateUsage = new UsageMetrics() {{
                            milliDcuSeconds = "dicta";
                            shuffleStorageGbSeconds = "corporis";
                        }};;
                        currentUsage = new UsageSnapshot() {{
                            milliDcu = "dolore";
                            shuffleStorageGb = "iusto";
                            snapshotTime = "dicta";
                        }};;
                    }};;
                    sparkBatch = new SparkBatch() {{
                        archiveUris = new String[]{{
                            add("enim"),
                            add("accusamus"),
                            add("commodi"),
                        }};
                        args = new String[]{{
                            add("quae"),
                            add("ipsum"),
                            add("quidem"),
                            add("molestias"),
                        }};
                        fileUris = new String[]{{
                            add("pariatur"),
                            add("modi"),
                            add("praesentium"),
                        }};
                        jarFileUris = new String[]{{
                            add("voluptates"),
                            add("quasi"),
                            add("repudiandae"),
                        }};
                        mainClass = "sint";
                        mainJarFileUri = "veritatis";
                    }};;
                    sparkRBatch = new SparkRBatch() {{
                        archiveUris = new String[]{{
                            add("incidunt"),
                            add("enim"),
                            add("consequatur"),
                            add("est"),
                        }};
                        args = new String[]{{
                            add("explicabo"),
                            add("deserunt"),
                            add("distinctio"),
                            add("quibusdam"),
                        }};
                        fileUris = new String[]{{
                            add("modi"),
                            add("qui"),
                        }};
                        mainRFileUri = "aliquid";
                    }};;
                    sparkSqlBatch = new SparkSqlBatch() {{
                        jarFileUris = new String[]{{
                            add("quos"),
                            add("perferendis"),
                            add("magni"),
                        }};
                        queryFileUri = "assumenda";
                        queryVariables = new java.util.HashMap<String, String>() {{
                            put("alias", "fugit");
                            put("dolorum", "excepturi");
                        }};
                    }};;
                }};;
                accessToken = "tempora";
                alt = AltEnum.PROTO;
                batchId = "tempore";
                callback = "labore";
                fields = "delectus";
                key = "eum";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "eligendi";
                requestId = "sint";
                uploadType = "aliquid";
                uploadProtocol = "provident";
            }};            

            DataprocProjectsLocationsBatchesCreateResponse res = sdk.projects.dataprocProjectsLocationsBatchesCreate(req, new DataprocProjectsLocationsBatchesCreateSecurity("necessitatibus", "sint") {{
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

## dataprocProjectsLocationsBatchesList

Lists batch workloads.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsLocationsBatchesListRequest;
import org.openapis.openapi.models.operations.DataprocProjectsLocationsBatchesListResponse;
import org.openapis.openapi.models.operations.DataprocProjectsLocationsBatchesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsLocationsBatchesListRequest req = new DataprocProjectsLocationsBatchesListRequest("officia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "in";
                filter = "in";
                key = "illum";
                oauthToken = "maiores";
                orderBy = "rerum";
                pageSize = 116202L;
                pageToken = "magnam";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "facere";
                uploadProtocol = "ea";
            }};            

            DataprocProjectsLocationsBatchesListResponse res = sdk.projects.dataprocProjectsLocationsBatchesList(req, new DataprocProjectsLocationsBatchesListSecurity("aliquid", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listBatchesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataprocProjectsRegionsAutoscalingPoliciesCreate

Creates new autoscaling policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsAutoscalingPoliciesCreateRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsAutoscalingPoliciesCreateResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsAutoscalingPoliciesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AutoscalingPolicyInput;
import org.openapis.openapi.models.shared.BasicAutoscalingAlgorithm;
import org.openapis.openapi.models.shared.BasicYarnAutoscalingConfig;
import org.openapis.openapi.models.shared.InstanceGroupAutoscalingPolicyConfig;
import org.openapis.openapi.models.shared.SparkStandaloneAutoscalingConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsAutoscalingPoliciesCreateRequest req = new DataprocProjectsRegionsAutoscalingPoliciesCreateRequest("accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                autoscalingPolicyInput = new AutoscalingPolicyInput() {{
                    basicAlgorithm = new BasicAutoscalingAlgorithm() {{
                        cooldownPeriod = "occaecati";
                        sparkStandaloneConfig = new SparkStandaloneAutoscalingConfig() {{
                            gracefulDecommissionTimeout = "enim";
                            scaleDownFactor = 8817.36;
                            scaleDownMinWorkerFraction = 9654.17;
                            scaleUpFactor = 6925.32;
                            scaleUpMinWorkerFraction = 5884.65;
                        }};;
                        yarnConfig = new BasicYarnAutoscalingConfig() {{
                            gracefulDecommissionTimeout = "nam";
                            scaleDownFactor = 6596.69;
                            scaleDownMinWorkerFraction = 5013.24;
                            scaleUpFactor = 5332.06;
                            scaleUpMinWorkerFraction = 9560.84;
                        }};;
                    }};;
                    id = "3a669970-74ba-4446-9b6e-2141959890af";
                    labels = new java.util.HashMap<String, String>() {{
                        put("ad", "eum");
                        put("dolor", "necessitatibus");
                        put("odit", "nemo");
                    }};
                    secondaryWorkerConfig = new InstanceGroupAutoscalingPolicyConfig() {{
                        maxInstances = 97260;
                        minInstances = 435865;
                        weight = 984043;
                    }};;
                    workerConfig = new InstanceGroupAutoscalingPolicyConfig() {{
                        maxInstances = 891924;
                        minInstances = 260341;
                        weight = 806194;
                    }};;
                }};;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "architecto";
                key = "architecto";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "expedita";
                uploadProtocol = "nihil";
            }};            

            DataprocProjectsRegionsAutoscalingPoliciesCreateResponse res = sdk.projects.dataprocProjectsRegionsAutoscalingPoliciesCreate(req, new DataprocProjectsRegionsAutoscalingPoliciesCreateSecurity("repellat", "quibusdam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.autoscalingPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataprocProjectsRegionsAutoscalingPoliciesList

Lists autoscaling policies in the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsAutoscalingPoliciesListRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsAutoscalingPoliciesListResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsAutoscalingPoliciesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsAutoscalingPoliciesListRequest req = new DataprocProjectsRegionsAutoscalingPoliciesListRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "consequuntur";
                fields = "praesentium";
                key = "natus";
                oauthToken = "magni";
                pageSize = 123820L;
                pageToken = "quo";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "pariatur";
                uploadProtocol = "maxime";
            }};            

            DataprocProjectsRegionsAutoscalingPoliciesListResponse res = sdk.projects.dataprocProjectsRegionsAutoscalingPoliciesList(req, new DataprocProjectsRegionsAutoscalingPoliciesListSecurity("ea", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAutoscalingPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataprocProjectsRegionsClustersCreate

Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnum;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersCreateRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersCreateResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersCreateSecurity;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AutoscalingConfig;
import org.openapis.openapi.models.shared.AuxiliaryNodeGroupInput;
import org.openapis.openapi.models.shared.AuxiliaryServicesConfig;
import org.openapis.openapi.models.shared.ClusterConfigInput;
import org.openapis.openapi.models.shared.ClusterInput;
import org.openapis.openapi.models.shared.ClusterMetrics;
import org.openapis.openapi.models.shared.ConfidentialInstanceConfig;
import org.openapis.openapi.models.shared.DataprocMetricConfig;
import org.openapis.openapi.models.shared.DiskConfig;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.EndpointConfigInput;
import org.openapis.openapi.models.shared.GceClusterConfig;
import org.openapis.openapi.models.shared.GceClusterConfigPrivateIpv6GoogleAccessEnum;
import org.openapis.openapi.models.shared.GkeClusterConfig;
import org.openapis.openapi.models.shared.GkeNodeConfig;
import org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig;
import org.openapis.openapi.models.shared.GkeNodePoolAutoscalingConfig;
import org.openapis.openapi.models.shared.GkeNodePoolConfig;
import org.openapis.openapi.models.shared.GkeNodePoolTarget;
import org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum;
import org.openapis.openapi.models.shared.IdentityConfig;
import org.openapis.openapi.models.shared.InstanceGroupConfigInput;
import org.openapis.openapi.models.shared.InstanceGroupConfigPreemptibilityEnum;
import org.openapis.openapi.models.shared.KerberosConfig;
import org.openapis.openapi.models.shared.KubernetesClusterConfig;
import org.openapis.openapi.models.shared.KubernetesSoftwareConfig;
import org.openapis.openapi.models.shared.LifecycleConfigInput;
import org.openapis.openapi.models.shared.MetastoreConfig;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.MetricMetricSourceEnum;
import org.openapis.openapi.models.shared.NamespacedGkeDeploymentTarget;
import org.openapis.openapi.models.shared.NodeGroupAffinity;
import org.openapis.openapi.models.shared.NodeGroupInput;
import org.openapis.openapi.models.shared.NodeGroupRolesEnum;
import org.openapis.openapi.models.shared.NodeInitializationAction;
import org.openapis.openapi.models.shared.ReservationAffinity;
import org.openapis.openapi.models.shared.ReservationAffinityConsumeReservationTypeEnum;
import org.openapis.openapi.models.shared.SecurityConfig;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.SoftwareConfig;
import org.openapis.openapi.models.shared.SoftwareConfigOptionalComponentsEnum;
import org.openapis.openapi.models.shared.SparkHistoryServerConfig;
import org.openapis.openapi.models.shared.VirtualClusterConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsClustersCreateRequest req = new DataprocProjectsRegionsClustersCreateRequest("odit", "ea") {{
                dollarXgafv = XgafvEnum.ONE;
                clusterInput = new ClusterInput() {{
                    clusterName = "ab";
                    config = new ClusterConfigInput() {{
                        autoscalingConfig = new AutoscalingConfig() {{
                            policyUri = "maiores";
                        }};;
                        auxiliaryNodeGroups = new org.openapis.openapi.models.shared.AuxiliaryNodeGroupInput[]{{
                            add(new AuxiliaryNodeGroupInput() {{
                                nodeGroup = new NodeGroupInput() {{
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("voluptate", "autem");
                                        put("nam", "eaque");
                                    }};
                                    name = "Dr. Herman Wolf";
                                    nodeGroupConfig = new InstanceGroupConfigInput() {{
                                        accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                            add(new AcceleratorConfig() {{
                                                acceleratorCount = 764912;
                                                acceleratorTypeUri = "corporis";
                                            }}),
                                        }};
                                        diskConfig = new DiskConfig() {{
                                            bootDiskSizeGb = 944124;
                                            bootDiskType = "libero";
                                            localSsdInterface = "nobis";
                                            numLocalSsds = 171629;
                                        }};
                                        imageUri = "quis";
                                        machineTypeUri = "totam";
                                        minCpuPlatform = "dignissimos";
                                        numInstances = 54338;
                                        preemptibility = InstanceGroupConfigPreemptibilityEnum.NON_PREEMPTIBLE;
                                    }};
                                    roles = new org.openapis.openapi.models.shared.NodeGroupRolesEnum[]{{
                                        add(NodeGroupRolesEnum.ROLE_UNSPECIFIED),
                                    }};
                                }};
                                nodeGroupId = "perferendis";
                            }}),
                            add(new AuxiliaryNodeGroupInput() {{
                                nodeGroup = new NodeGroupInput() {{
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("minus", "quam");
                                    }};
                                    name = "Eula Hegmann";
                                    nodeGroupConfig = new InstanceGroupConfigInput() {{
                                        accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                            add(new AcceleratorConfig() {{
                                                acceleratorCount = 704415;
                                                acceleratorTypeUri = "perspiciatis";
                                            }}),
                                            add(new AcceleratorConfig() {{
                                                acceleratorCount = 31838;
                                                acceleratorTypeUri = "porro";
                                            }}),
                                            add(new AcceleratorConfig() {{
                                                acceleratorCount = 164694;
                                                acceleratorTypeUri = "blanditiis";
                                            }}),
                                        }};
                                        diskConfig = new DiskConfig() {{
                                            bootDiskSizeGb = 621479;
                                            bootDiskType = "eaque";
                                            localSsdInterface = "occaecati";
                                            numLocalSsds = 699098;
                                        }};
                                        imageUri = "adipisci";
                                        machineTypeUri = "asperiores";
                                        minCpuPlatform = "earum";
                                        numInstances = 267262;
                                        preemptibility = InstanceGroupConfigPreemptibilityEnum.PREEMPTIBLE;
                                    }};
                                    roles = new org.openapis.openapi.models.shared.NodeGroupRolesEnum[]{{
                                        add(NodeGroupRolesEnum.DRIVER),
                                        add(NodeGroupRolesEnum.DRIVER),
                                        add(NodeGroupRolesEnum.DRIVER),
                                    }};
                                }};
                                nodeGroupId = "nobis";
                            }}),
                            add(new AuxiliaryNodeGroupInput() {{
                                nodeGroup = new NodeGroupInput() {{
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("delectus", "quaerat");
                                        put("quos", "aliquid");
                                        put("dolorem", "dolorem");
                                    }};
                                    name = "Norma Erdman";
                                    nodeGroupConfig = new InstanceGroupConfigInput() {{
                                        accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                            add(new AcceleratorConfig() {{
                                                acceleratorCount = 452109;
                                                acceleratorTypeUri = "dignissimos";
                                            }}),
                                            add(new AcceleratorConfig() {{
                                                acceleratorCount = 970237;
                                                acceleratorTypeUri = "amet";
                                            }}),
                                            add(new AcceleratorConfig() {{
                                                acceleratorCount = 680545;
                                                acceleratorTypeUri = "numquam";
                                            }}),
                                        }};
                                        diskConfig = new DiskConfig() {{
                                            bootDiskSizeGb = 85295;
                                            bootDiskType = "ipsa";
                                            localSsdInterface = "ipsa";
                                            numLocalSsds = 434417;
                                        }};
                                        imageUri = "odio";
                                        machineTypeUri = "quaerat";
                                        minCpuPlatform = "accusamus";
                                        numInstances = 696344;
                                        preemptibility = InstanceGroupConfigPreemptibilityEnum.SPOT;
                                    }};
                                    roles = new org.openapis.openapi.models.shared.NodeGroupRolesEnum[]{{
                                        add(NodeGroupRolesEnum.DRIVER),
                                        add(NodeGroupRolesEnum.ROLE_UNSPECIFIED),
                                    }};
                                }};
                                nodeGroupId = "atque";
                            }}),
                        }};
                        configBucket = "sit";
                        dataprocMetricConfig = new DataprocMetricConfig() {{
                            metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                add(new Metric() {{
                                    metricOverrides = new String[]{{
                                        add("soluta"),
                                    }};
                                    metricSource = MetricMetricSourceEnum.SPARK_HISTORY_SERVER;
                                }}),
                                add(new Metric() {{
                                    metricOverrides = new String[]{{
                                        add("voluptate"),
                                        add("dolorum"),
                                    }};
                                    metricSource = MetricMetricSourceEnum.YARN;
                                }}),
                                add(new Metric() {{
                                    metricOverrides = new String[]{{
                                        add("necessitatibus"),
                                        add("distinctio"),
                                        add("asperiores"),
                                    }};
                                    metricSource = MetricMetricSourceEnum.SPARK;
                                }}),
                                add(new Metric() {{
                                    metricOverrides = new String[]{{
                                        add("voluptate"),
                                    }};
                                    metricSource = MetricMetricSourceEnum.SPARK_HISTORY_SERVER;
                                }}),
                            }};
                        }};;
                        encryptionConfig = new EncryptionConfig() {{
                            gcePdKmsKeyName = "saepe";
                            kmsKey = "eius";
                        }};;
                        endpointConfig = new EndpointConfigInput() {{
                            enableHttpPortAccess = false;
                        }};;
                        gceClusterConfig = new GceClusterConfig() {{
                            confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                                enableConfidentialCompute = false;
                            }};;
                            internalIpOnly = false;
                            metadata = new java.util.HashMap<String, String>() {{
                                put("perferendis", "amet");
                            }};
                            networkUri = "optio";
                            nodeGroupAffinity = new NodeGroupAffinity() {{
                                nodeGroupUri = "accusamus";
                            }};;
                            privateIpv6GoogleAccess = GceClusterConfigPrivateIpv6GoogleAccessEnum.INHERIT_FROM_SUBNETWORK;
                            reservationAffinity = new ReservationAffinity() {{
                                consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.SPECIFIC_RESERVATION;
                                key = "suscipit";
                                values = new String[]{{
                                    add("provident"),
                                    add("minima"),
                                    add("repellendus"),
                                }};
                            }};;
                            serviceAccount = "totam";
                            serviceAccountScopes = new String[]{{
                                add("alias"),
                                add("at"),
                                add("quaerat"),
                            }};
                            shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                enableIntegrityMonitoring = false;
                                enableSecureBoot = false;
                                enableVtpm = false;
                            }};;
                            subnetworkUri = "tempora";
                            tags = new String[]{{
                                add("quod"),
                                add("officiis"),
                            }};
                            zoneUri = "qui";
                        }};;
                        gkeClusterConfig = new GkeClusterConfig() {{
                            gkeClusterTarget = "dolorum";
                            namespacedGkeDeploymentTarget = new NamespacedGkeDeploymentTarget() {{
                                clusterNamespace = "a";
                                targetGkeCluster = "esse";
                            }};;
                            nodePoolTarget = new org.openapis.openapi.models.shared.GkeNodePoolTarget[]{{
                                add(new GkeNodePoolTarget() {{
                                    nodePool = "iusto";
                                    nodePoolConfig = new GkeNodePoolConfig() {{
                                        autoscaling = new GkeNodePoolAutoscalingConfig() {{
                                            maxNodeCount = 215507;
                                            minNodeCount = 788740;
                                        }};
                                        config = new GkeNodeConfig() {{
                                            accelerators = new org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig[]{{
                                                add(new GkeNodePoolAcceleratorConfig() {{
                                                    acceleratorCount = "amet";
                                                    acceleratorType = "tempore";
                                                    gpuPartitionSize = "accusamus";
                                                }}),
                                                add(new GkeNodePoolAcceleratorConfig() {{
                                                    acceleratorCount = "numquam";
                                                    acceleratorType = "enim";
                                                    gpuPartitionSize = "dolorem";
                                                }}),
                                                add(new GkeNodePoolAcceleratorConfig() {{
                                                    acceleratorCount = "sapiente";
                                                    acceleratorType = "totam";
                                                    gpuPartitionSize = "nihil";
                                                }}),
                                                add(new GkeNodePoolAcceleratorConfig() {{
                                                    acceleratorCount = "sit";
                                                    acceleratorType = "expedita";
                                                    gpuPartitionSize = "neque";
                                                }}),
                                            }};
                                            bootDiskKmsKey = "sed";
                                            localSsdCount = 424685;
                                            machineType = "libero";
                                            minCpuPlatform = "voluptas";
                                            preemptible = false;
                                            spot = false;
                                        }};
                                        locations = new String[]{{
                                            add("quam"),
                                            add("ipsum"),
                                            add("incidunt"),
                                        }};
                                    }};
                                    roles = new org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum[]{{
                                        add(GkeNodePoolTargetRolesEnum.CONTROLLER),
                                    }};
                                }}),
                                add(new GkeNodePoolTarget() {{
                                    nodePool = "maxime";
                                    nodePoolConfig = new GkeNodePoolConfig() {{
                                        autoscaling = new GkeNodePoolAutoscalingConfig() {{
                                            maxNodeCount = 863856;
                                            minNodeCount = 747080;
                                        }};
                                        config = new GkeNodeConfig() {{
                                            accelerators = new org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig[]{{
                                                add(new GkeNodePoolAcceleratorConfig() {{
                                                    acceleratorCount = "laborum";
                                                    acceleratorType = "totam";
                                                    gpuPartitionSize = "incidunt";
                                                }}),
                                            }};
                                            bootDiskKmsKey = "aspernatur";
                                            localSsdCount = 174909;
                                            machineType = "distinctio";
                                            minCpuPlatform = "facilis";
                                            preemptible = false;
                                            spot = false;
                                        }};
                                        locations = new String[]{{
                                            add("quam"),
                                            add("molestias"),
                                        }};
                                    }};
                                    roles = new org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum[]{{
                                        add(GkeNodePoolTargetRolesEnum.ROLE_UNSPECIFIED),
                                        add(GkeNodePoolTargetRolesEnum.DEFAULT_),
                                        add(GkeNodePoolTargetRolesEnum.ROLE_UNSPECIFIED),
                                        add(GkeNodePoolTargetRolesEnum.ROLE_UNSPECIFIED),
                                    }};
                                }}),
                                add(new GkeNodePoolTarget() {{
                                    nodePool = "odio";
                                    nodePoolConfig = new GkeNodePoolConfig() {{
                                        autoscaling = new GkeNodePoolAutoscalingConfig() {{
                                            maxNodeCount = 124833;
                                            minNodeCount = 355613;
                                        }};
                                        config = new GkeNodeConfig() {{
                                            accelerators = new org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig[]{{
                                                add(new GkeNodePoolAcceleratorConfig() {{
                                                    acceleratorCount = "hic";
                                                    acceleratorType = "voluptatem";
                                                    gpuPartitionSize = "cumque";
                                                }}),
                                                add(new GkeNodePoolAcceleratorConfig() {{
                                                    acceleratorCount = "soluta";
                                                    acceleratorType = "nobis";
                                                    gpuPartitionSize = "et";
                                                }}),
                                                add(new GkeNodePoolAcceleratorConfig() {{
                                                    acceleratorCount = "saepe";
                                                    acceleratorType = "ipsum";
                                                    gpuPartitionSize = "veritatis";
                                                }}),
                                            }};
                                            bootDiskKmsKey = "nobis";
                                            localSsdCount = 552193;
                                            machineType = "tempore";
                                            minCpuPlatform = "cupiditate";
                                            preemptible = false;
                                            spot = false;
                                        }};
                                        locations = new String[]{{
                                            add("delectus"),
                                        }};
                                    }};
                                    roles = new org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum[]{{
                                        add(GkeNodePoolTargetRolesEnum.DEFAULT_),
                                    }};
                                }}),
                            }};
                        }};;
                        initializationActions = new org.openapis.openapi.models.shared.NodeInitializationAction[]{{
                            add(new NodeInitializationAction() {{
                                executableFile = "adipisci";
                                executionTimeout = "dolorum";
                            }}),
                            add(new NodeInitializationAction() {{
                                executableFile = "architecto";
                                executionTimeout = "quae";
                            }}),
                        }};
                        lifecycleConfig = new LifecycleConfigInput() {{
                            autoDeleteTime = "aut";
                            autoDeleteTtl = "quas";
                            idleDeleteTtl = "itaque";
                        }};;
                        masterConfig = new InstanceGroupConfigInput() {{
                            accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 669917;
                                    acceleratorTypeUri = "repellendus";
                                }}),
                            }};
                            diskConfig = new DiskConfig() {{
                                bootDiskSizeGb = 785153;
                                bootDiskType = "doloribus";
                                localSsdInterface = "ut";
                                numLocalSsds = 703495;
                            }};;
                            imageUri = "cupiditate";
                            machineTypeUri = "qui";
                            minCpuPlatform = "quae";
                            numInstances = 512393;
                            preemptibility = InstanceGroupConfigPreemptibilityEnum.NON_PREEMPTIBLE;
                        }};;
                        metastoreConfig = new MetastoreConfig() {{
                            dataprocMetastoreService = "occaecati";
                        }};;
                        secondaryWorkerConfig = new InstanceGroupConfigInput() {{
                            accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 787542;
                                    acceleratorTypeUri = "vero";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 606476;
                                    acceleratorTypeUri = "quis";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 218403;
                                    acceleratorTypeUri = "delectus";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 455169;
                                    acceleratorTypeUri = "consectetur";
                                }}),
                            }};
                            diskConfig = new DiskConfig() {{
                                bootDiskSizeGb = 878870;
                                bootDiskType = "tenetur";
                                localSsdInterface = "dignissimos";
                                numLocalSsds = 941378;
                            }};;
                            imageUri = "distinctio";
                            machineTypeUri = "quod";
                            minCpuPlatform = "odio";
                            numInstances = 630448;
                            preemptibility = InstanceGroupConfigPreemptibilityEnum.PREEMPTIBLE;
                        }};;
                        securityConfig = new SecurityConfig() {{
                            identityConfig = new IdentityConfig() {{
                                userServiceAccountMapping = new java.util.HashMap<String, String>() {{
                                    put("ducimus", "dolore");
                                    put("quibusdam", "illum");
                                    put("sequi", "natus");
                                    put("impedit", "aut");
                                }};
                            }};;
                            kerberosConfig = new KerberosConfig() {{
                                crossRealmTrustAdminServer = "voluptatibus";
                                crossRealmTrustKdc = "exercitationem";
                                crossRealmTrustRealm = "nulla";
                                crossRealmTrustSharedPasswordUri = "fugit";
                                enableKerberos = false;
                                kdcDbKeyUri = "porro";
                                keyPasswordUri = "maiores";
                                keystorePasswordUri = "doloribus";
                                keystoreUri = "iusto";
                                kmsKeyUri = "eligendi";
                                realm = "ducimus";
                                rootPrincipalPasswordUri = "alias";
                                tgtLifetimeHours = 639473;
                                truststorePasswordUri = "tempora";
                                truststoreUri = "ipsam";
                            }};;
                        }};;
                        softwareConfig = new SoftwareConfig() {{
                            imageVersion = "ea";
                            optionalComponents = new org.openapis.openapi.models.shared.SoftwareConfigOptionalComponentsEnum[]{{
                                add(SoftwareConfigOptionalComponentsEnum.HIVE_WEBHCAT),
                            }};
                            properties = new java.util.HashMap<String, String>() {{
                                put("magnam", "ratione");
                                put("ex", "laudantium");
                                put("dicta", "dolor");
                                put("maiores", "quasi");
                            }};
                        }};;
                        tempBucket = "ex";
                        workerConfig = new InstanceGroupConfigInput() {{
                            accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 569211;
                                    acceleratorTypeUri = "voluptatibus";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 343605;
                                    acceleratorTypeUri = "sapiente";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 788873;
                                    acceleratorTypeUri = "saepe";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 411372;
                                    acceleratorTypeUri = "impedit";
                                }}),
                            }};
                            diskConfig = new DiskConfig() {{
                                bootDiskSizeGb = 359271;
                                bootDiskType = "veniam";
                                localSsdInterface = "aliquid";
                                numLocalSsds = 81101;
                            }};;
                            imageUri = "magnam";
                            machineTypeUri = "ea";
                            minCpuPlatform = "quo";
                            numInstances = 232234;
                            preemptibility = InstanceGroupConfigPreemptibilityEnum.SPOT;
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("minima", "eaque");
                    }};
                    metrics = new ClusterMetrics() {{
                        hdfsMetrics = new java.util.HashMap<String, String>() {{
                            put("libero", "aut");
                            put("aut", "deleniti");
                            put("impedit", "aliquam");
                            put("fugit", "accusamus");
                        }};
                        yarnMetrics = new java.util.HashMap<String, String>() {{
                            put("non", "et");
                        }};
                    }};;
                    projectId = "dolorum";
                    virtualClusterConfig = new VirtualClusterConfig() {{
                        auxiliaryServicesConfig = new AuxiliaryServicesConfig() {{
                            metastoreConfig = new MetastoreConfig() {{
                                dataprocMetastoreService = "laborum";
                            }};;
                            sparkHistoryServerConfig = new SparkHistoryServerConfig() {{
                                dataprocCluster = "placeat";
                            }};;
                        }};;
                        kubernetesClusterConfig = new KubernetesClusterConfig() {{
                            gkeClusterConfig = new GkeClusterConfig() {{
                                gkeClusterTarget = "velit";
                                namespacedGkeDeploymentTarget = new NamespacedGkeDeploymentTarget() {{
                                    clusterNamespace = "eum";
                                    targetGkeCluster = "autem";
                                }};;
                                nodePoolTarget = new org.openapis.openapi.models.shared.GkeNodePoolTarget[]{{
                                    add(new GkeNodePoolTarget() {{
                                        nodePool = "quas";
                                        nodePoolConfig = new GkeNodePoolConfig() {{
                                            autoscaling = new GkeNodePoolAutoscalingConfig() {{
                                                maxNodeCount = 829603;
                                                minNodeCount = 860552;
                                            }};
                                            config = new GkeNodeConfig() {{
                                                accelerators = new org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig[]{{
                                                    add(new GkeNodePoolAcceleratorConfig() {{
                                                        acceleratorCount = "libero";
                                                        acceleratorType = "quasi";
                                                        gpuPartitionSize = "tempora";
                                                    }}),
                                                    add(new GkeNodePoolAcceleratorConfig() {{
                                                        acceleratorCount = "numquam";
                                                        acceleratorType = "explicabo";
                                                        gpuPartitionSize = "provident";
                                                    }}),
                                                }};
                                                bootDiskKmsKey = "ipsa";
                                                localSsdCount = 476477;
                                                machineType = "magnam";
                                                minCpuPlatform = "odio";
                                                preemptible = false;
                                                spot = false;
                                            }};
                                            locations = new String[]{{
                                                add("esse"),
                                                add("esse"),
                                            }};
                                        }};
                                        roles = new org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum[]{{
                                            add(GkeNodePoolTargetRolesEnum.SPARK_DRIVER),
                                            add(GkeNodePoolTargetRolesEnum.CONTROLLER),
                                            add(GkeNodePoolTargetRolesEnum.SPARK_DRIVER),
                                        }};
                                    }}),
                                    add(new GkeNodePoolTarget() {{
                                        nodePool = "fugiat";
                                        nodePoolConfig = new GkeNodePoolConfig() {{
                                            autoscaling = new GkeNodePoolAutoscalingConfig() {{
                                                maxNodeCount = 283519;
                                                minNodeCount = 433439;
                                            }};
                                            config = new GkeNodeConfig() {{
                                                accelerators = new org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig[]{{
                                                    add(new GkeNodePoolAcceleratorConfig() {{
                                                        acceleratorCount = "assumenda";
                                                        acceleratorType = "eos";
                                                        gpuPartitionSize = "praesentium";
                                                    }}),
                                                    add(new GkeNodePoolAcceleratorConfig() {{
                                                        acceleratorCount = "quisquam";
                                                        acceleratorType = "veritatis";
                                                        gpuPartitionSize = "ipsa";
                                                    }}),
                                                }};
                                                bootDiskKmsKey = "id";
                                                localSsdCount = 696997;
                                                machineType = "neque";
                                                minCpuPlatform = "quo";
                                                preemptible = false;
                                                spot = false;
                                            }};
                                            locations = new String[]{{
                                                add("quo"),
                                                add("fuga"),
                                                add("eius"),
                                                add("eos"),
                                            }};
                                        }};
                                        roles = new org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum[]{{
                                            add(GkeNodePoolTargetRolesEnum.ROLE_UNSPECIFIED),
                                            add(GkeNodePoolTargetRolesEnum.CONTROLLER),
                                        }};
                                    }}),
                                    add(new GkeNodePoolTarget() {{
                                        nodePool = "consequatur";
                                        nodePoolConfig = new GkeNodePoolConfig() {{
                                            autoscaling = new GkeNodePoolAutoscalingConfig() {{
                                                maxNodeCount = 272822;
                                                minNodeCount = 892050;
                                            }};
                                            config = new GkeNodeConfig() {{
                                                accelerators = new org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig[]{{
                                                    add(new GkeNodePoolAcceleratorConfig() {{
                                                        acceleratorCount = "aspernatur";
                                                        acceleratorType = "sequi";
                                                        gpuPartitionSize = "quo";
                                                    }}),
                                                    add(new GkeNodePoolAcceleratorConfig() {{
                                                        acceleratorCount = "esse";
                                                        acceleratorType = "recusandae";
                                                        gpuPartitionSize = "aperiam";
                                                    }}),
                                                }};
                                                bootDiskKmsKey = "distinctio";
                                                localSsdCount = 799796;
                                                machineType = "dignissimos";
                                                minCpuPlatform = "inventore";
                                                preemptible = false;
                                                spot = false;
                                            }};
                                            locations = new String[]{{
                                                add("totam"),
                                                add("accusamus"),
                                            }};
                                        }};
                                        roles = new org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum[]{{
                                            add(GkeNodePoolTargetRolesEnum.CONTROLLER),
                                            add(GkeNodePoolTargetRolesEnum.CONTROLLER),
                                        }};
                                    }}),
                                    add(new GkeNodePoolTarget() {{
                                        nodePool = "commodi";
                                        nodePoolConfig = new GkeNodePoolConfig() {{
                                            autoscaling = new GkeNodePoolAutoscalingConfig() {{
                                                maxNodeCount = 959434;
                                                minNodeCount = 174112;
                                            }};
                                            config = new GkeNodeConfig() {{
                                                accelerators = new org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig[]{{
                                                    add(new GkeNodePoolAcceleratorConfig() {{
                                                        acceleratorCount = "molestiae";
                                                        acceleratorType = "accusantium";
                                                        gpuPartitionSize = "porro";
                                                    }}),
                                                    add(new GkeNodePoolAcceleratorConfig() {{
                                                        acceleratorCount = "eum";
                                                        acceleratorType = "quas";
                                                        gpuPartitionSize = "praesentium";
                                                    }}),
                                                    add(new GkeNodePoolAcceleratorConfig() {{
                                                        acceleratorCount = "consequuntur";
                                                        acceleratorType = "deleniti";
                                                        gpuPartitionSize = "fugit";
                                                    }}),
                                                }};
                                                bootDiskKmsKey = "fuga";
                                                localSsdCount = 649463;
                                                machineType = "incidunt";
                                                minCpuPlatform = "atque";
                                                preemptible = false;
                                                spot = false;
                                            }};
                                            locations = new String[]{{
                                                add("minima"),
                                            }};
                                        }};
                                        roles = new org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum[]{{
                                            add(GkeNodePoolTargetRolesEnum.ROLE_UNSPECIFIED),
                                            add(GkeNodePoolTargetRolesEnum.SPARK_EXECUTOR),
                                        }};
                                    }}),
                                }};
                            }};;
                            kubernetesNamespace = "consequuntur";
                            kubernetesSoftwareConfig = new KubernetesSoftwareConfig() {{
                                componentVersion = new java.util.HashMap<String, String>() {{
                                    put("explicabo", "saepe");
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("atque", "et");
                                    put("esse", "eveniet");
                                    put("accusamus", "veritatis");
                                }};
                            }};;
                        }};;
                        stagingBucket = "esse";
                    }};;
                }};;
                accessToken = "quod";
                actionOnFailedPrimaryWorkers = DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnum.DELETE;
                alt = AltEnum.PROTO;
                callback = "aliquid";
                fields = "quasi";
                key = "saepe";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "harum";
                requestId = "molestiae";
                uploadType = "rerum";
                uploadProtocol = "occaecati";
            }};            

            DataprocProjectsRegionsClustersCreateResponse res = sdk.projects.dataprocProjectsRegionsClustersCreate(req, new DataprocProjectsRegionsClustersCreateSecurity("minima", "distinctio") {{
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

## dataprocProjectsRegionsClustersDelete

Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersDeleteRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersDeleteResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsClustersDeleteRequest req = new DataprocProjectsRegionsClustersDeleteRequest("eligendi", "sit", "culpa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "consequuntur";
                clusterUuid = "consequatur";
                fields = "minus";
                key = "quaerat";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "consectetur";
                requestId = "esse";
                uploadType = "blanditiis";
                uploadProtocol = "provident";
            }};            

            DataprocProjectsRegionsClustersDeleteResponse res = sdk.projects.dataprocProjectsRegionsClustersDelete(req, new DataprocProjectsRegionsClustersDeleteSecurity("a", "nulla") {{
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

## dataprocProjectsRegionsClustersDiagnose

Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersDiagnoseRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersDiagnoseResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersDiagnoseSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DiagnoseClusterRequest;
import org.openapis.openapi.models.shared.Interval;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsClustersDiagnoseRequest req = new DataprocProjectsRegionsClustersDiagnoseRequest("quas", "esse", "quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                diagnoseClusterRequest = new DiagnoseClusterRequest() {{
                    diagnosisInterval = new Interval() {{
                        endTime = "error";
                        startTime = "sint";
                    }};;
                    job = "pariatur";
                    jobs = new String[]{{
                        add("quia"),
                        add("eveniet"),
                        add("asperiores"),
                        add("facere"),
                    }};
                    yarnApplicationId = "veritatis";
                    yarnApplicationIds = new String[]{{
                        add("quasi"),
                    }};
                }};;
                accessToken = "similique";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "tenetur";
                key = "quae";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "in";
                uploadProtocol = "eius";
            }};            

            DataprocProjectsRegionsClustersDiagnoseResponse res = sdk.projects.dataprocProjectsRegionsClustersDiagnose(req, new DataprocProjectsRegionsClustersDiagnoseSecurity("libero", "illum") {{
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

## dataprocProjectsRegionsClustersGet

Gets the resource representation for a cluster in a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersGetRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersGetResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsClustersGetRequest req = new DataprocProjectsRegionsClustersGetRequest("soluta", "accusantium", "aliquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dicta";
                alt = AltEnum.MEDIA;
                callback = "reprehenderit";
                fields = "ullam";
                key = "nisi";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "qui";
                uploadProtocol = "quibusdam";
            }};            

            DataprocProjectsRegionsClustersGetResponse res = sdk.projects.dataprocProjectsRegionsClustersGet(req, new DataprocProjectsRegionsClustersGetSecurity("ex", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cluster != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataprocProjectsRegionsClustersInjectCredentials

Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersInjectCredentialsRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersInjectCredentialsResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersInjectCredentialsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InjectCredentialsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsClustersInjectCredentialsRequest req = new DataprocProjectsRegionsClustersInjectCredentialsRequest("itaque", "dolorum", "architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                injectCredentialsRequest = new InjectCredentialsRequest() {{
                    clusterUuid = "tenetur";
                    credentialsCiphertext = "quasi";
                }};;
                accessToken = "at";
                alt = AltEnum.JSON;
                callback = "voluptate";
                fields = "ipsa";
                key = "minima";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "adipisci";
                uploadProtocol = "iste";
            }};            

            DataprocProjectsRegionsClustersInjectCredentialsResponse res = sdk.projects.dataprocProjectsRegionsClustersInjectCredentials(req, new DataprocProjectsRegionsClustersInjectCredentialsSecurity("temporibus", "accusantium") {{
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

## dataprocProjectsRegionsClustersList

Lists all regions/{region}/clusters in a project alphabetically.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersListRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersListResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsClustersListRequest req = new DataprocProjectsRegionsClustersListRequest("rem", "aut") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eum";
                alt = AltEnum.MEDIA;
                callback = "ab";
                fields = "corrupti";
                filter = "non";
                key = "voluptatem";
                oauthToken = "dolor";
                pageSize = 580152L;
                pageToken = "numquam";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "explicabo";
                uploadProtocol = "voluptas";
            }};            

            DataprocProjectsRegionsClustersListResponse res = sdk.projects.dataprocProjectsRegionsClustersList(req, new DataprocProjectsRegionsClustersListSecurity("aut", "dignissimos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listClustersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataprocProjectsRegionsClustersNodeGroupsCreate

Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersNodeGroupsCreateRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersNodeGroupsCreateResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersNodeGroupsCreateSecurity;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DiskConfig;
import org.openapis.openapi.models.shared.InstanceGroupConfigInput;
import org.openapis.openapi.models.shared.InstanceGroupConfigPreemptibilityEnum;
import org.openapis.openapi.models.shared.NodeGroupInput;
import org.openapis.openapi.models.shared.NodeGroupRolesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsClustersNodeGroupsCreateRequest req = new DataprocProjectsRegionsClustersNodeGroupsCreateRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                nodeGroupInput = new NodeGroupInput() {{
                    labels = new java.util.HashMap<String, String>() {{
                        put("velit", "voluptatibus");
                        put("voluptas", "asperiores");
                        put("aperiam", "ea");
                    }};
                    name = "Kathryn Sipes";
                    nodeGroupConfig = new InstanceGroupConfigInput() {{
                        accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 640024;
                                acceleratorTypeUri = "asperiores";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 368102;
                                acceleratorTypeUri = "quae";
                            }}),
                        }};
                        diskConfig = new DiskConfig() {{
                            bootDiskSizeGb = 312753;
                            bootDiskType = "porro";
                            localSsdInterface = "quod";
                            numLocalSsds = 288398;
                        }};;
                        imageUri = "ab";
                        machineTypeUri = "adipisci";
                        minCpuPlatform = "fuga";
                        numInstances = 662505;
                        preemptibility = InstanceGroupConfigPreemptibilityEnum.NON_PREEMPTIBLE;
                    }};;
                    roles = new org.openapis.openapi.models.shared.NodeGroupRolesEnum[]{{
                        add(NodeGroupRolesEnum.DRIVER),
                    }};
                }};;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "fugiat";
                key = "vel";
                nodeGroupId = "ducimus";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "vel";
                requestId = "labore";
                uploadType = "possimus";
                uploadProtocol = "facilis";
            }};            

            DataprocProjectsRegionsClustersNodeGroupsCreateResponse res = sdk.projects.dataprocProjectsRegionsClustersNodeGroupsCreate(req, new DataprocProjectsRegionsClustersNodeGroupsCreateSecurity("cum", "commodi") {{
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

## dataprocProjectsRegionsClustersNodeGroupsResize

Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersNodeGroupsResizeRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersNodeGroupsResizeResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersNodeGroupsResizeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ResizeNodeGroupRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsClustersNodeGroupsResizeRequest req = new DataprocProjectsRegionsClustersNodeGroupsResizeRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                resizeNodeGroupRequest = new ResizeNodeGroupRequest() {{
                    gracefulDecommissionTimeout = "reiciendis";
                    requestId = "assumenda";
                    size = 363161;
                }};;
                accessToken = "recusandae";
                alt = AltEnum.MEDIA;
                callback = "aperiam";
                fields = "cum";
                key = "consectetur";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "earum";
                uploadProtocol = "facere";
            }};            

            DataprocProjectsRegionsClustersNodeGroupsResizeResponse res = sdk.projects.dataprocProjectsRegionsClustersNodeGroupsResize(req, new DataprocProjectsRegionsClustersNodeGroupsResizeSecurity("numquam", "doloribus") {{
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

## dataprocProjectsRegionsClustersPatch

Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersPatchRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersPatchResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersPatchSecurity;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AutoscalingConfig;
import org.openapis.openapi.models.shared.AuxiliaryNodeGroupInput;
import org.openapis.openapi.models.shared.AuxiliaryServicesConfig;
import org.openapis.openapi.models.shared.ClusterConfigInput;
import org.openapis.openapi.models.shared.ClusterInput;
import org.openapis.openapi.models.shared.ClusterMetrics;
import org.openapis.openapi.models.shared.ConfidentialInstanceConfig;
import org.openapis.openapi.models.shared.DataprocMetricConfig;
import org.openapis.openapi.models.shared.DiskConfig;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.EndpointConfigInput;
import org.openapis.openapi.models.shared.GceClusterConfig;
import org.openapis.openapi.models.shared.GceClusterConfigPrivateIpv6GoogleAccessEnum;
import org.openapis.openapi.models.shared.GkeClusterConfig;
import org.openapis.openapi.models.shared.GkeNodeConfig;
import org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig;
import org.openapis.openapi.models.shared.GkeNodePoolAutoscalingConfig;
import org.openapis.openapi.models.shared.GkeNodePoolConfig;
import org.openapis.openapi.models.shared.GkeNodePoolTarget;
import org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum;
import org.openapis.openapi.models.shared.IdentityConfig;
import org.openapis.openapi.models.shared.InstanceGroupConfigInput;
import org.openapis.openapi.models.shared.InstanceGroupConfigPreemptibilityEnum;
import org.openapis.openapi.models.shared.KerberosConfig;
import org.openapis.openapi.models.shared.KubernetesClusterConfig;
import org.openapis.openapi.models.shared.KubernetesSoftwareConfig;
import org.openapis.openapi.models.shared.LifecycleConfigInput;
import org.openapis.openapi.models.shared.MetastoreConfig;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.MetricMetricSourceEnum;
import org.openapis.openapi.models.shared.NamespacedGkeDeploymentTarget;
import org.openapis.openapi.models.shared.NodeGroupAffinity;
import org.openapis.openapi.models.shared.NodeGroupInput;
import org.openapis.openapi.models.shared.NodeGroupRolesEnum;
import org.openapis.openapi.models.shared.NodeInitializationAction;
import org.openapis.openapi.models.shared.ReservationAffinity;
import org.openapis.openapi.models.shared.ReservationAffinityConsumeReservationTypeEnum;
import org.openapis.openapi.models.shared.SecurityConfig;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.SoftwareConfig;
import org.openapis.openapi.models.shared.SoftwareConfigOptionalComponentsEnum;
import org.openapis.openapi.models.shared.SparkHistoryServerConfig;
import org.openapis.openapi.models.shared.VirtualClusterConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsClustersPatchRequest req = new DataprocProjectsRegionsClustersPatchRequest("suscipit", "reiciendis", "quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                clusterInput = new ClusterInput() {{
                    clusterName = "necessitatibus";
                    config = new ClusterConfigInput() {{
                        autoscalingConfig = new AutoscalingConfig() {{
                            policyUri = "dolore";
                        }};;
                        auxiliaryNodeGroups = new org.openapis.openapi.models.shared.AuxiliaryNodeGroupInput[]{{
                            add(new AuxiliaryNodeGroupInput() {{
                                nodeGroup = new NodeGroupInput() {{
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("adipisci", "non");
                                        put("amet", "beatae");
                                        put("dignissimos", "a");
                                        put("debitis", "consectetur");
                                    }};
                                    name = "Dr. Maryann Howe";
                                    nodeGroupConfig = new InstanceGroupConfigInput() {{
                                        accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                            add(new AcceleratorConfig() {{
                                                acceleratorCount = 881721;
                                                acceleratorTypeUri = "similique";
                                            }}),
                                        }};
                                        diskConfig = new DiskConfig() {{
                                            bootDiskSizeGb = 272437;
                                            bootDiskType = "aspernatur";
                                            localSsdInterface = "voluptas";
                                            numLocalSsds = 374244;
                                        }};
                                        imageUri = "voluptas";
                                        machineTypeUri = "minima";
                                        minCpuPlatform = "nobis";
                                        numInstances = 680116;
                                        preemptibility = InstanceGroupConfigPreemptibilityEnum.PREEMPTIBILITY_UNSPECIFIED;
                                    }};
                                    roles = new org.openapis.openapi.models.shared.NodeGroupRolesEnum[]{{
                                        add(NodeGroupRolesEnum.ROLE_UNSPECIFIED),
                                        add(NodeGroupRolesEnum.DRIVER),
                                        add(NodeGroupRolesEnum.ROLE_UNSPECIFIED),
                                        add(NodeGroupRolesEnum.ROLE_UNSPECIFIED),
                                    }};
                                }};
                                nodeGroupId = "aliquam";
                            }}),
                        }};
                        configBucket = "officiis";
                        dataprocMetricConfig = new DataprocMetricConfig() {{
                            metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                add(new Metric() {{
                                    metricOverrides = new String[]{{
                                        add("adipisci"),
                                        add("cum"),
                                    }};
                                    metricSource = MetricMetricSourceEnum.YARN;
                                }}),
                                add(new Metric() {{
                                    metricOverrides = new String[]{{
                                        add("hic"),
                                        add("nesciunt"),
                                        add("culpa"),
                                    }};
                                    metricSource = MetricMetricSourceEnum.YARN;
                                }}),
                                add(new Metric() {{
                                    metricOverrides = new String[]{{
                                        add("totam"),
                                        add("hic"),
                                        add("exercitationem"),
                                        add("nobis"),
                                    }};
                                    metricSource = MetricMetricSourceEnum.METRIC_SOURCE_UNSPECIFIED;
                                }}),
                                add(new Metric() {{
                                    metricOverrides = new String[]{{
                                        add("sed"),
                                        add("reiciendis"),
                                        add("explicabo"),
                                    }};
                                    metricSource = MetricMetricSourceEnum.HIVEMETASTORE;
                                }}),
                            }};
                        }};;
                        encryptionConfig = new EncryptionConfig() {{
                            gcePdKmsKeyName = "facilis";
                            kmsKey = "voluptate";
                        }};;
                        endpointConfig = new EndpointConfigInput() {{
                            enableHttpPortAccess = false;
                        }};;
                        gceClusterConfig = new GceClusterConfig() {{
                            confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                                enableConfidentialCompute = false;
                            }};;
                            internalIpOnly = false;
                            metadata = new java.util.HashMap<String, String>() {{
                                put("ab", "iste");
                                put("dolore", "laborum");
                                put("sed", "in");
                            }};
                            networkUri = "commodi";
                            nodeGroupAffinity = new NodeGroupAffinity() {{
                                nodeGroupUri = "quidem";
                            }};;
                            privateIpv6GoogleAccess = GceClusterConfigPrivateIpv6GoogleAccessEnum.PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED;
                            reservationAffinity = new ReservationAffinity() {{
                                consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.NO_RESERVATION;
                                key = "unde";
                                values = new String[]{{
                                    add("suscipit"),
                                }};
                            }};;
                            serviceAccount = "sapiente";
                            serviceAccountScopes = new String[]{{
                                add("illo"),
                                add("reiciendis"),
                                add("perferendis"),
                                add("corrupti"),
                            }};
                            shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                enableIntegrityMonitoring = false;
                                enableSecureBoot = false;
                                enableVtpm = false;
                            }};;
                            subnetworkUri = "maiores";
                            tags = new String[]{{
                                add("sed"),
                                add("provident"),
                            }};
                            zoneUri = "eius";
                        }};;
                        gkeClusterConfig = new GkeClusterConfig() {{
                            gkeClusterTarget = "necessitatibus";
                            namespacedGkeDeploymentTarget = new NamespacedGkeDeploymentTarget() {{
                                clusterNamespace = "ipsum";
                                targetGkeCluster = "ea";
                            }};;
                            nodePoolTarget = new org.openapis.openapi.models.shared.GkeNodePoolTarget[]{{
                                add(new GkeNodePoolTarget() {{
                                    nodePool = "quos";
                                    nodePoolConfig = new GkeNodePoolConfig() {{
                                        autoscaling = new GkeNodePoolAutoscalingConfig() {{
                                            maxNodeCount = 975752;
                                            minNodeCount = 271653;
                                        }};
                                        config = new GkeNodeConfig() {{
                                            accelerators = new org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig[]{{
                                                add(new GkeNodePoolAcceleratorConfig() {{
                                                    acceleratorCount = "voluptate";
                                                    acceleratorType = "reiciendis";
                                                    gpuPartitionSize = "ex";
                                                }}),
                                                add(new GkeNodePoolAcceleratorConfig() {{
                                                    acceleratorCount = "sit";
                                                    acceleratorType = "non";
                                                    gpuPartitionSize = "officiis";
                                                }}),
                                            }};
                                            bootDiskKmsKey = "praesentium";
                                            localSsdCount = 708609;
                                            machineType = "quaerat";
                                            minCpuPlatform = "incidunt";
                                            preemptible = false;
                                            spot = false;
                                        }};
                                        locations = new String[]{{
                                            add("debitis"),
                                            add("rem"),
                                        }};
                                    }};
                                    roles = new org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum[]{{
                                        add(GkeNodePoolTargetRolesEnum.SPARK_DRIVER),
                                    }};
                                }}),
                                add(new GkeNodePoolTarget() {{
                                    nodePool = "error";
                                    nodePoolConfig = new GkeNodePoolConfig() {{
                                        autoscaling = new GkeNodePoolAutoscalingConfig() {{
                                            maxNodeCount = 333507;
                                            minNodeCount = 329543;
                                        }};
                                        config = new GkeNodeConfig() {{
                                            accelerators = new org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig[]{{
                                                add(new GkeNodePoolAcceleratorConfig() {{
                                                    acceleratorCount = "reiciendis";
                                                    acceleratorType = "nulla";
                                                    gpuPartitionSize = "magni";
                                                }}),
                                                add(new GkeNodePoolAcceleratorConfig() {{
                                                    acceleratorCount = "aperiam";
                                                    acceleratorType = "saepe";
                                                    gpuPartitionSize = "numquam";
                                                }}),
                                                add(new GkeNodePoolAcceleratorConfig() {{
                                                    acceleratorCount = "veniam";
                                                    acceleratorType = "in";
                                                    gpuPartitionSize = "officiis";
                                                }}),
                                                add(new GkeNodePoolAcceleratorConfig() {{
                                                    acceleratorCount = "beatae";
                                                    acceleratorType = "laudantium";
                                                    gpuPartitionSize = "exercitationem";
                                                }}),
                                            }};
                                            bootDiskKmsKey = "praesentium";
                                            localSsdCount = 740098;
                                            machineType = "laboriosam";
                                            minCpuPlatform = "dolorum";
                                            preemptible = false;
                                            spot = false;
                                        }};
                                        locations = new String[]{{
                                            add("error"),
                                            add("hic"),
                                            add("expedita"),
                                        }};
                                    }};
                                    roles = new org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum[]{{
                                        add(GkeNodePoolTargetRolesEnum.DEFAULT_),
                                        add(GkeNodePoolTargetRolesEnum.SPARK_DRIVER),
                                        add(GkeNodePoolTargetRolesEnum.DEFAULT_),
                                        add(GkeNodePoolTargetRolesEnum.SPARK_DRIVER),
                                    }};
                                }}),
                                add(new GkeNodePoolTarget() {{
                                    nodePool = "dolorum";
                                    nodePoolConfig = new GkeNodePoolConfig() {{
                                        autoscaling = new GkeNodePoolAutoscalingConfig() {{
                                            maxNodeCount = 548361;
                                            minNodeCount = 879235;
                                        }};
                                        config = new GkeNodeConfig() {{
                                            accelerators = new org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig[]{{
                                                add(new GkeNodePoolAcceleratorConfig() {{
                                                    acceleratorCount = "atque";
                                                    acceleratorType = "fugit";
                                                    gpuPartitionSize = "ut";
                                                }}),
                                                add(new GkeNodePoolAcceleratorConfig() {{
                                                    acceleratorCount = "fugiat";
                                                    acceleratorType = "voluptatem";
                                                    gpuPartitionSize = "culpa";
                                                }}),
                                            }};
                                            bootDiskKmsKey = "expedita";
                                            localSsdCount = 299643;
                                            machineType = "consequatur";
                                            minCpuPlatform = "esse";
                                            preemptible = false;
                                            spot = false;
                                        }};
                                        locations = new String[]{{
                                            add("sit"),
                                            add("voluptatum"),
                                        }};
                                    }};
                                    roles = new org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum[]{{
                                        add(GkeNodePoolTargetRolesEnum.SPARK_EXECUTOR),
                                        add(GkeNodePoolTargetRolesEnum.DEFAULT_),
                                        add(GkeNodePoolTargetRolesEnum.ROLE_UNSPECIFIED),
                                    }};
                                }}),
                            }};
                        }};;
                        initializationActions = new org.openapis.openapi.models.shared.NodeInitializationAction[]{{
                            add(new NodeInitializationAction() {{
                                executableFile = "ex";
                                executionTimeout = "sed";
                            }}),
                            add(new NodeInitializationAction() {{
                                executableFile = "sit";
                                executionTimeout = "vel";
                            }}),
                            add(new NodeInitializationAction() {{
                                executableFile = "nostrum";
                                executionTimeout = "saepe";
                            }}),
                        }};
                        lifecycleConfig = new LifecycleConfigInput() {{
                            autoDeleteTime = "error";
                            autoDeleteTtl = "consequatur";
                            idleDeleteTtl = "incidunt";
                        }};;
                        masterConfig = new InstanceGroupConfigInput() {{
                            accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 209750;
                                    acceleratorTypeUri = "harum";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 115703;
                                    acceleratorTypeUri = "architecto";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 577140;
                                    acceleratorTypeUri = "labore";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 695270;
                                    acceleratorTypeUri = "atque";
                                }}),
                            }};
                            diskConfig = new DiskConfig() {{
                                bootDiskSizeGb = 671957;
                                bootDiskType = "nam";
                                localSsdInterface = "tenetur";
                                numLocalSsds = 388867;
                            }};;
                            imageUri = "alias";
                            machineTypeUri = "amet";
                            minCpuPlatform = "deserunt";
                            numInstances = 454860;
                            preemptibility = InstanceGroupConfigPreemptibilityEnum.PREEMPTIBLE;
                        }};;
                        metastoreConfig = new MetastoreConfig() {{
                            dataprocMetastoreService = "reiciendis";
                        }};;
                        secondaryWorkerConfig = new InstanceGroupConfigInput() {{
                            accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 833819;
                                    acceleratorTypeUri = "delectus";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 914791;
                                    acceleratorTypeUri = "perferendis";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 667285;
                                    acceleratorTypeUri = "quidem";
                                }}),
                            }};
                            diskConfig = new DiskConfig() {{
                                bootDiskSizeGb = 440666;
                                bootDiskType = "facere";
                                localSsdInterface = "fuga";
                                numLocalSsds = 509807;
                            }};;
                            imageUri = "mollitia";
                            machineTypeUri = "veniam";
                            minCpuPlatform = "voluptatem";
                            numInstances = 790840;
                            preemptibility = InstanceGroupConfigPreemptibilityEnum.SPOT;
                        }};;
                        securityConfig = new SecurityConfig() {{
                            identityConfig = new IdentityConfig() {{
                                userServiceAccountMapping = new java.util.HashMap<String, String>() {{
                                    put("atque", "reprehenderit");
                                }};
                            }};;
                            kerberosConfig = new KerberosConfig() {{
                                crossRealmTrustAdminServer = "asperiores";
                                crossRealmTrustKdc = "totam";
                                crossRealmTrustRealm = "suscipit";
                                crossRealmTrustSharedPasswordUri = "quidem";
                                enableKerberos = false;
                                kdcDbKeyUri = "maxime";
                                keyPasswordUri = "et";
                                keystorePasswordUri = "esse";
                                keystoreUri = "amet";
                                kmsKeyUri = "assumenda";
                                realm = "ea";
                                rootPrincipalPasswordUri = "atque";
                                tgtLifetimeHours = 623295;
                                truststorePasswordUri = "officiis";
                                truststoreUri = "officiis";
                            }};;
                        }};;
                        softwareConfig = new SoftwareConfig() {{
                            imageVersion = "accusamus";
                            optionalComponents = new org.openapis.openapi.models.shared.SoftwareConfigOptionalComponentsEnum[]{{
                                add(SoftwareConfigOptionalComponentsEnum.FLINK),
                                add(SoftwareConfigOptionalComponentsEnum.DOCKER),
                                add(SoftwareConfigOptionalComponentsEnum.HIVE_WEBHCAT),
                            }};
                            properties = new java.util.HashMap<String, String>() {{
                                put("corrupti", "at");
                                put("error", "blanditiis");
                                put("suscipit", "repudiandae");
                                put("atque", "atque");
                            }};
                        }};;
                        tempBucket = "sunt";
                        workerConfig = new InstanceGroupConfigInput() {{
                            accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 680697;
                                    acceleratorTypeUri = "repellendus";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 287119;
                                    acceleratorTypeUri = "reiciendis";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 42976;
                                    acceleratorTypeUri = "repudiandae";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 116098;
                                    acceleratorTypeUri = "accusantium";
                                }}),
                            }};
                            diskConfig = new DiskConfig() {{
                                bootDiskSizeGb = 106429;
                                bootDiskType = "dolores";
                                localSsdInterface = "enim";
                                numLocalSsds = 389135;
                            }};;
                            imageUri = "velit";
                            machineTypeUri = "a";
                            minCpuPlatform = "molestias";
                            numInstances = 300029;
                            preemptibility = InstanceGroupConfigPreemptibilityEnum.SPOT;
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("occaecati", "officiis");
                    }};
                    metrics = new ClusterMetrics() {{
                        hdfsMetrics = new java.util.HashMap<String, String>() {{
                            put("in", "adipisci");
                            put("eveniet", "occaecati");
                            put("consequuntur", "fugit");
                        }};
                        yarnMetrics = new java.util.HashMap<String, String>() {{
                            put("quis", "reprehenderit");
                            put("error", "illo");
                            put("corporis", "quidem");
                        }};
                    }};;
                    projectId = "eveniet";
                    virtualClusterConfig = new VirtualClusterConfig() {{
                        auxiliaryServicesConfig = new AuxiliaryServicesConfig() {{
                            metastoreConfig = new MetastoreConfig() {{
                                dataprocMetastoreService = "non";
                            }};;
                            sparkHistoryServerConfig = new SparkHistoryServerConfig() {{
                                dataprocCluster = "vero";
                            }};;
                        }};;
                        kubernetesClusterConfig = new KubernetesClusterConfig() {{
                            gkeClusterConfig = new GkeClusterConfig() {{
                                gkeClusterTarget = "doloremque";
                                namespacedGkeDeploymentTarget = new NamespacedGkeDeploymentTarget() {{
                                    clusterNamespace = "iure";
                                    targetGkeCluster = "ipsa";
                                }};;
                                nodePoolTarget = new org.openapis.openapi.models.shared.GkeNodePoolTarget[]{{
                                    add(new GkeNodePoolTarget() {{
                                        nodePool = "quae";
                                        nodePoolConfig = new GkeNodePoolConfig() {{
                                            autoscaling = new GkeNodePoolAutoscalingConfig() {{
                                                maxNodeCount = 474668;
                                                minNodeCount = 907733;
                                            }};
                                            config = new GkeNodeConfig() {{
                                                accelerators = new org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig[]{{
                                                    add(new GkeNodePoolAcceleratorConfig() {{
                                                        acceleratorCount = "cum";
                                                        acceleratorType = "iure";
                                                        gpuPartitionSize = "necessitatibus";
                                                    }}),
                                                }};
                                                bootDiskKmsKey = "ratione";
                                                localSsdCount = 672582;
                                                machineType = "distinctio";
                                                minCpuPlatform = "voluptatum";
                                                preemptible = false;
                                                spot = false;
                                            }};
                                            locations = new String[]{{
                                                add("aliquam"),
                                                add("ad"),
                                                add("repellat"),
                                            }};
                                        }};
                                        roles = new org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum[]{{
                                            add(GkeNodePoolTargetRolesEnum.DEFAULT_),
                                        }};
                                    }}),
                                    add(new GkeNodePoolTarget() {{
                                        nodePool = "perspiciatis";
                                        nodePoolConfig = new GkeNodePoolConfig() {{
                                            autoscaling = new GkeNodePoolAutoscalingConfig() {{
                                                maxNodeCount = 470649;
                                                minNodeCount = 649078;
                                            }};
                                            config = new GkeNodeConfig() {{
                                                accelerators = new org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig[]{{
                                                    add(new GkeNodePoolAcceleratorConfig() {{
                                                        acceleratorCount = "alias";
                                                        acceleratorType = "maiores";
                                                        gpuPartitionSize = "reiciendis";
                                                    }}),
                                                    add(new GkeNodePoolAcceleratorConfig() {{
                                                        acceleratorCount = "dolores";
                                                        acceleratorType = "id";
                                                        gpuPartitionSize = "minima";
                                                    }}),
                                                }};
                                                bootDiskKmsKey = "dolore";
                                                localSsdCount = 680349;
                                                machineType = "nesciunt";
                                                minCpuPlatform = "quae";
                                                preemptible = false;
                                                spot = false;
                                            }};
                                            locations = new String[]{{
                                                add("omnis"),
                                                add("quaerat"),
                                                add("molestiae"),
                                                add("ex"),
                                            }};
                                        }};
                                        roles = new org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum[]{{
                                            add(GkeNodePoolTargetRolesEnum.SPARK_DRIVER),
                                            add(GkeNodePoolTargetRolesEnum.DEFAULT_),
                                        }};
                                    }}),
                                    add(new GkeNodePoolTarget() {{
                                        nodePool = "debitis";
                                        nodePoolConfig = new GkeNodePoolConfig() {{
                                            autoscaling = new GkeNodePoolAutoscalingConfig() {{
                                                maxNodeCount = 514513;
                                                minNodeCount = 432606;
                                            }};
                                            config = new GkeNodeConfig() {{
                                                accelerators = new org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig[]{{
                                                    add(new GkeNodePoolAcceleratorConfig() {{
                                                        acceleratorCount = "recusandae";
                                                        acceleratorType = "esse";
                                                        gpuPartitionSize = "provident";
                                                    }}),
                                                    add(new GkeNodePoolAcceleratorConfig() {{
                                                        acceleratorCount = "quis";
                                                        acceleratorType = "eum";
                                                        gpuPartitionSize = "reiciendis";
                                                    }}),
                                                }};
                                                bootDiskKmsKey = "provident";
                                                localSsdCount = 133439;
                                                machineType = "ullam";
                                                minCpuPlatform = "quasi";
                                                preemptible = false;
                                                spot = false;
                                            }};
                                            locations = new String[]{{
                                                add("nostrum"),
                                                add("mollitia"),
                                                add("provident"),
                                            }};
                                        }};
                                        roles = new org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum[]{{
                                            add(GkeNodePoolTargetRolesEnum.SPARK_DRIVER),
                                            add(GkeNodePoolTargetRolesEnum.CONTROLLER),
                                            add(GkeNodePoolTargetRolesEnum.DEFAULT_),
                                            add(GkeNodePoolTargetRolesEnum.ROLE_UNSPECIFIED),
                                        }};
                                    }}),
                                }};
                            }};;
                            kubernetesNamespace = "repellat";
                            kubernetesSoftwareConfig = new KubernetesSoftwareConfig() {{
                                componentVersion = new java.util.HashMap<String, String>() {{
                                    put("ullam", "in");
                                    put("nam", "earum");
                                    put("officia", "laborum");
                                    put("placeat", "modi");
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("molestias", "officiis");
                                    put("sapiente", "cumque");
                                    put("vitae", "rerum");
                                    put("tempora", "quis");
                                }};
                            }};;
                        }};;
                        stagingBucket = "inventore";
                    }};;
                }};;
                accessToken = "fugit";
                alt = AltEnum.PROTO;
                callback = "quae";
                fields = "perferendis";
                gracefulDecommissionTimeout = "velit";
                key = "aspernatur";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "eius";
                requestId = "rem";
                updateMask = "at";
                uploadType = "impedit";
                uploadProtocol = "eos";
            }};            

            DataprocProjectsRegionsClustersPatchResponse res = sdk.projects.dataprocProjectsRegionsClustersPatch(req, new DataprocProjectsRegionsClustersPatchSecurity("sapiente", "eum") {{
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

## dataprocProjectsRegionsClustersRepair

Repairs a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersRepairRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersRepairResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersRepairSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NodePool;
import org.openapis.openapi.models.shared.NodePoolRepairActionEnum;
import org.openapis.openapi.models.shared.RepairClusterRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsClustersRepairRequest req = new DataprocProjectsRegionsClustersRepairRequest("dicta", "minima", "beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                repairClusterRequest = new RepairClusterRequest() {{
                    clusterUuid = "provident";
                    gracefulDecommissionTimeout = "earum";
                    nodePools = new org.openapis.openapi.models.shared.NodePool[]{{
                        add(new NodePool() {{
                            id = "fd0e9fe6-c632-4ca3-aed0-117996312fde";
                            instanceNames = new String[]{{
                                add("tempora"),
                            }};
                            repairAction = NodePoolRepairActionEnum.REPAIR_ACTION_UNSPECIFIED;
                        }}),
                        add(new NodePool() {{
                            id = "71778ff6-1d01-4747-a360-a15db6a66065";
                            instanceNames = new String[]{{
                                add("id"),
                                add("ab"),
                                add("error"),
                            }};
                            repairAction = NodePoolRepairActionEnum.DELETE;
                        }}),
                        add(new NodePool() {{
                            id = "eaab5851-d6c6-445b-88b6-1891baa0fe1a";
                            instanceNames = new String[]{{
                                add("debitis"),
                                add("voluptatem"),
                                add("alias"),
                                add("deleniti"),
                            }};
                            repairAction = NodePoolRepairActionEnum.DELETE;
                        }}),
                    }};
                    parentOperationId = "ex";
                    requestId = "sapiente";
                }};;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "nemo";
                fields = "asperiores";
                key = "ratione";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "illum";
                uploadProtocol = "totam";
            }};            

            DataprocProjectsRegionsClustersRepairResponse res = sdk.projects.dataprocProjectsRegionsClustersRepair(req, new DataprocProjectsRegionsClustersRepairSecurity("impedit", "quibusdam") {{
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

## dataprocProjectsRegionsClustersStart

Starts a cluster in a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersStartRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersStartResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersStartSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.StartClusterRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsClustersStartRequest req = new DataprocProjectsRegionsClustersStartRequest("nam", "ipsam", "culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                startClusterRequest = new StartClusterRequest() {{
                    clusterUuid = "aliquam";
                    requestId = "inventore";
                }};;
                accessToken = "deleniti";
                alt = AltEnum.JSON;
                callback = "tempora";
                fields = "dolor";
                key = "consequatur";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "modi";
                uploadProtocol = "fugit";
            }};            

            DataprocProjectsRegionsClustersStartResponse res = sdk.projects.dataprocProjectsRegionsClustersStart(req, new DataprocProjectsRegionsClustersStartSecurity("ab", "laudantium") {{
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

## dataprocProjectsRegionsClustersStop

Stops a cluster in a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersStopRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersStopResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsClustersStopSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.StopClusterRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsClustersStopRequest req = new DataprocProjectsRegionsClustersStopRequest("quae", "dolor", "fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                stopClusterRequest = new StopClusterRequest() {{
                    clusterUuid = "consequuntur";
                    requestId = "ipsa";
                }};;
                accessToken = "quas";
                alt = AltEnum.PROTO;
                callback = "impedit";
                fields = "officiis";
                key = "esse";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "veniam";
                uploadProtocol = "nesciunt";
            }};            

            DataprocProjectsRegionsClustersStopResponse res = sdk.projects.dataprocProjectsRegionsClustersStop(req, new DataprocProjectsRegionsClustersStopSecurity("expedita", "eum") {{
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

## dataprocProjectsRegionsJobsCancel

Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsCancelRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsCancelResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsJobsCancelRequest req = new DataprocProjectsRegionsJobsCancelRequest("vel", "voluptatum", "magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("porro", "autem");
                }};
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                fields = "consequuntur";
                key = "voluptatem";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "quasi";
                uploadProtocol = "nisi";
            }};            

            DataprocProjectsRegionsJobsCancelResponse res = sdk.projects.dataprocProjectsRegionsJobsCancel(req, new DataprocProjectsRegionsJobsCancelSecurity("at", "vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.job != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataprocProjectsRegionsJobsDelete

Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsDeleteRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsDeleteResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsJobsDeleteRequest req = new DataprocProjectsRegionsJobsDeleteRequest("est", "harum", "sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repudiandae";
                alt = AltEnum.PROTO;
                callback = "occaecati";
                fields = "nemo";
                key = "voluptate";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "voluptas";
                uploadProtocol = "numquam";
            }};            

            DataprocProjectsRegionsJobsDeleteResponse res = sdk.projects.dataprocProjectsRegionsJobsDelete(req, new DataprocProjectsRegionsJobsDeleteSecurity("nemo", "quos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataprocProjectsRegionsJobsGet

Gets the resource representation for a job in a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsGetRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsGetResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsJobsGetRequest req = new DataprocProjectsRegionsJobsGetRequest("eius", "aspernatur", "ducimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "incidunt";
                fields = "quasi";
                key = "rem";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "nisi";
                uploadProtocol = "consequuntur";
            }};            

            DataprocProjectsRegionsJobsGetResponse res = sdk.projects.dataprocProjectsRegionsJobsGet(req, new DataprocProjectsRegionsJobsGetSecurity("consectetur", "aperiam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.job != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataprocProjectsRegionsJobsList

Lists regions/{region}/jobs in a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsListJobStateMatcherEnum;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsListRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsListResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsJobsListRequest req = new DataprocProjectsRegionsJobsListRequest("cupiditate", "reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "alias";
                alt = AltEnum.MEDIA;
                callback = "eos";
                clusterName = "occaecati";
                fields = "iste";
                filter = "magni";
                jobStateMatcher = DataprocProjectsRegionsJobsListJobStateMatcherEnum.ALL;
                key = "fuga";
                oauthToken = "accusamus";
                pageSize = 976802L;
                pageToken = "distinctio";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "delectus";
                uploadProtocol = "minima";
            }};            

            DataprocProjectsRegionsJobsListResponse res = sdk.projects.dataprocProjectsRegionsJobsList(req, new DataprocProjectsRegionsJobsListSecurity("praesentium", "maxime") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataprocProjectsRegionsJobsPatch

Updates a job in a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsPatchRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsPatchResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DriverSchedulingConfig;
import org.openapis.openapi.models.shared.HadoopJob;
import org.openapis.openapi.models.shared.HiveJob;
import org.openapis.openapi.models.shared.JobInput;
import org.openapis.openapi.models.shared.JobPlacementInput;
import org.openapis.openapi.models.shared.JobReference;
import org.openapis.openapi.models.shared.JobScheduling;
import org.openapis.openapi.models.shared.LoggingConfig;
import org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum;
import org.openapis.openapi.models.shared.PigJob;
import org.openapis.openapi.models.shared.PrestoJob;
import org.openapis.openapi.models.shared.PySparkJob;
import org.openapis.openapi.models.shared.QueryList;
import org.openapis.openapi.models.shared.SparkJob;
import org.openapis.openapi.models.shared.SparkRJob;
import org.openapis.openapi.models.shared.SparkSqlJob;
import org.openapis.openapi.models.shared.TrinoJob;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsJobsPatchRequest req = new DataprocProjectsRegionsJobsPatchRequest("magnam", "temporibus", "quos") {{
                dollarXgafv = XgafvEnum.ONE;
                jobInput = new JobInput() {{
                    driverSchedulingConfig = new DriverSchedulingConfig() {{
                        memoryMb = 930819;
                        vcores = 415608;
                    }};;
                    hadoopJob = new HadoopJob() {{
                        archiveUris = new String[]{{
                            add("earum"),
                            add("modi"),
                            add("nam"),
                        }};
                        args = new String[]{{
                            add("voluptatem"),
                            add("ipsam"),
                            add("vel"),
                            add("alias"),
                        }};
                        fileUris = new String[]{{
                            add("non"),
                        }};
                        jarFileUris = new String[]{{
                            add("enim"),
                            add("sint"),
                            add("nulla"),
                            add("deserunt"),
                        }};
                        loggingConfig = new LoggingConfig() {{
                            driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                put("nemo", LoggingConfigDriverLogLevelsEnum.INFO);
                                put("est", LoggingConfigDriverLogLevelsEnum.DEBUG);
                            }};
                        }};;
                        mainClass = "sint";
                        mainJarFileUri = "accusamus";
                        properties = new java.util.HashMap<String, String>() {{
                            put("hic", "necessitatibus");
                            put("asperiores", "ex");
                            put("voluptas", "debitis");
                            put("delectus", "quae");
                        }};
                    }};;
                    hiveJob = new HiveJob() {{
                        continueOnFailure = false;
                        jarFileUris = new String[]{{
                            add("fuga"),
                            add("laborum"),
                            add("consectetur"),
                            add("velit"),
                        }};
                        properties = new java.util.HashMap<String, String>() {{
                            put("ipsum", "impedit");
                            put("magni", "soluta");
                            put("repudiandae", "nam");
                        }};
                        queryFileUri = "dolore";
                        queryList = new QueryList() {{
                            queries = new String[]{{
                                add("voluptate"),
                                add("sequi"),
                            }};
                        }};;
                        scriptVariables = new java.util.HashMap<String, String>() {{
                            put("neque", "quo");
                            put("deleniti", "quibusdam");
                        }};
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("odit", "voluptatibus");
                        put("vel", "magnam");
                    }};
                    pigJob = new PigJob() {{
                        continueOnFailure = false;
                        jarFileUris = new String[]{{
                            add("inventore"),
                            add("facere"),
                            add("libero"),
                            add("architecto"),
                        }};
                        loggingConfig = new LoggingConfig() {{
                            driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                put("quia", LoggingConfigDriverLogLevelsEnum.FATAL);
                                put("aliquam", LoggingConfigDriverLogLevelsEnum.TRACE);
                                put("illo", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                put("vel", LoggingConfigDriverLogLevelsEnum.DEBUG);
                            }};
                        }};;
                        properties = new java.util.HashMap<String, String>() {{
                            put("vero", "excepturi");
                        }};
                        queryFileUri = "eum";
                        queryList = new QueryList() {{
                            queries = new String[]{{
                                add("ut"),
                            }};
                        }};;
                        scriptVariables = new java.util.HashMap<String, String>() {{
                            put("earum", "dicta");
                            put("impedit", "voluptatibus");
                            put("iste", "itaque");
                        }};
                    }};;
                    placement = new JobPlacementInput() {{
                        clusterLabels = new java.util.HashMap<String, String>() {{
                            put("nisi", "itaque");
                        }};
                        clusterName = "velit";
                    }};;
                    prestoJob = new PrestoJob() {{
                        clientTags = new String[]{{
                            add("non"),
                            add("dolor"),
                            add("iusto"),
                        }};
                        continueOnFailure = false;
                        loggingConfig = new LoggingConfig() {{
                            driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                put("doloremque", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                            }};
                        }};;
                        outputFormat = "officia";
                        properties = new java.util.HashMap<String, String>() {{
                            put("ea", "quidem");
                            put("voluptas", "facilis");
                            put("placeat", "perspiciatis");
                            put("expedita", "deleniti");
                        }};
                        queryFileUri = "a";
                        queryList = new QueryList() {{
                            queries = new String[]{{
                                add("ullam"),
                                add("unde"),
                            }};
                        }};;
                    }};;
                    pysparkJob = new PySparkJob() {{
                        archiveUris = new String[]{{
                            add("animi"),
                            add("impedit"),
                            add("ipsam"),
                            add("corporis"),
                        }};
                        args = new String[]{{
                            add("error"),
                            add("esse"),
                            add("labore"),
                        }};
                        fileUris = new String[]{{
                            add("vero"),
                        }};
                        jarFileUris = new String[]{{
                            add("vitae"),
                        }};
                        loggingConfig = new LoggingConfig() {{
                            driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                put("dolorem", LoggingConfigDriverLogLevelsEnum.TRACE);
                            }};
                        }};;
                        mainPythonFileUri = "qui";
                        properties = new java.util.HashMap<String, String>() {{
                            put("ex", "nemo");
                            put("soluta", "libero");
                            put("rem", "dolorum");
                        }};
                        pythonFileUris = new String[]{{
                            add("fugit"),
                            add("alias"),
                        }};
                    }};;
                    reference = new JobReference() {{
                        jobId = "magni";
                        projectId = "vel";
                    }};;
                    scheduling = new JobScheduling() {{
                        maxFailuresPerHour = 64435;
                        maxFailuresTotal = 63553;
                    }};;
                    sparkJob = new SparkJob() {{
                        archiveUris = new String[]{{
                            add("neque"),
                            add("exercitationem"),
                        }};
                        args = new String[]{{
                            add("et"),
                            add("ipsum"),
                            add("unde"),
                            add("nulla"),
                        }};
                        fileUris = new String[]{{
                            add("maxime"),
                            add("quia"),
                            add("quia"),
                        }};
                        jarFileUris = new String[]{{
                            add("omnis"),
                            add("libero"),
                        }};
                        loggingConfig = new LoggingConfig() {{
                            driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                put("id", LoggingConfigDriverLogLevelsEnum.ERROR);
                            }};
                        }};;
                        mainClass = "fugiat";
                        mainJarFileUri = "officia";
                        properties = new java.util.HashMap<String, String>() {{
                            put("placeat", "sit");
                            put("iusto", "ipsa");
                            put("voluptates", "inventore");
                        }};
                    }};;
                    sparkRJob = new SparkRJob() {{
                        archiveUris = new String[]{{
                            add("totam"),
                        }};
                        args = new String[]{{
                            add("eligendi"),
                            add("distinctio"),
                        }};
                        fileUris = new String[]{{
                            add("autem"),
                        }};
                        loggingConfig = new LoggingConfig() {{
                            driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                put("dolores", LoggingConfigDriverLogLevelsEnum.FATAL);
                                put("beatae", LoggingConfigDriverLogLevelsEnum.ERROR);
                            }};
                        }};;
                        mainRFileUri = "facere";
                        properties = new java.util.HashMap<String, String>() {{
                            put("molestiae", "provident");
                            put("accusamus", "necessitatibus");
                            put("tempore", "sint");
                        }};
                    }};;
                    sparkSqlJob = new SparkSqlJob() {{
                        jarFileUris = new String[]{{
                            add("autem"),
                            add("ipsam"),
                        }};
                        loggingConfig = new LoggingConfig() {{
                            driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                put("laudantium", LoggingConfigDriverLogLevelsEnum.DEBUG);
                                put("officiis", LoggingConfigDriverLogLevelsEnum.OFF);
                                put("cum", LoggingConfigDriverLogLevelsEnum.FATAL);
                            }};
                        }};;
                        properties = new java.util.HashMap<String, String>() {{
                            put("quia", "quidem");
                        }};
                        queryFileUri = "fuga";
                        queryList = new QueryList() {{
                            queries = new String[]{{
                                add("accusantium"),
                                add("expedita"),
                                add("officiis"),
                                add("eos"),
                            }};
                        }};;
                        scriptVariables = new java.util.HashMap<String, String>() {{
                            put("odio", "praesentium");
                            put("odit", "explicabo");
                            put("corporis", "error");
                            put("earum", "adipisci");
                        }};
                    }};;
                    trinoJob = new TrinoJob() {{
                        clientTags = new String[]{{
                            add("similique"),
                            add("ut"),
                            add("quidem"),
                            add("quis"),
                        }};
                        continueOnFailure = false;
                        loggingConfig = new LoggingConfig() {{
                            driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                put("unde", LoggingConfigDriverLogLevelsEnum.INFO);
                            }};
                        }};;
                        outputFormat = "delectus";
                        properties = new java.util.HashMap<String, String>() {{
                            put("fugit", "numquam");
                            put("numquam", "nesciunt");
                            put("at", "officia");
                        }};
                        queryFileUri = "dignissimos";
                        queryList = new QueryList() {{
                            queries = new String[]{{
                                add("necessitatibus"),
                                add("corporis"),
                                add("qui"),
                                add("expedita"),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                callback = "minima";
                fields = "placeat";
                key = "enim";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "in";
                updateMask = "minus";
                uploadType = "eum";
                uploadProtocol = "modi";
            }};            

            DataprocProjectsRegionsJobsPatchResponse res = sdk.projects.dataprocProjectsRegionsJobsPatch(req, new DataprocProjectsRegionsJobsPatchSecurity("corporis", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.job != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataprocProjectsRegionsJobsSubmit

Submits a job to a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsSubmitRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsSubmitResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsSubmitSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DriverSchedulingConfig;
import org.openapis.openapi.models.shared.HadoopJob;
import org.openapis.openapi.models.shared.HiveJob;
import org.openapis.openapi.models.shared.JobInput;
import org.openapis.openapi.models.shared.JobPlacementInput;
import org.openapis.openapi.models.shared.JobReference;
import org.openapis.openapi.models.shared.JobScheduling;
import org.openapis.openapi.models.shared.LoggingConfig;
import org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum;
import org.openapis.openapi.models.shared.PigJob;
import org.openapis.openapi.models.shared.PrestoJob;
import org.openapis.openapi.models.shared.PySparkJob;
import org.openapis.openapi.models.shared.QueryList;
import org.openapis.openapi.models.shared.SparkJob;
import org.openapis.openapi.models.shared.SparkRJob;
import org.openapis.openapi.models.shared.SparkSqlJob;
import org.openapis.openapi.models.shared.SubmitJobRequestInput;
import org.openapis.openapi.models.shared.TrinoJob;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsJobsSubmitRequest req = new DataprocProjectsRegionsJobsSubmitRequest("voluptates", "maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                submitJobRequestInput = new SubmitJobRequestInput() {{
                    job = new JobInput() {{
                        driverSchedulingConfig = new DriverSchedulingConfig() {{
                            memoryMb = 46013;
                            vcores = 727547;
                        }};;
                        hadoopJob = new HadoopJob() {{
                            archiveUris = new String[]{{
                                add("labore"),
                            }};
                            args = new String[]{{
                                add("occaecati"),
                                add("voluptas"),
                                add("quo"),
                            }};
                            fileUris = new String[]{{
                                add("minus"),
                            }};
                            jarFileUris = new String[]{{
                                add("nostrum"),
                                add("est"),
                                add("impedit"),
                            }};
                            loggingConfig = new LoggingConfig() {{
                                driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                    put("tempore", LoggingConfigDriverLogLevelsEnum.FATAL);
                                    put("odit", LoggingConfigDriverLogLevelsEnum.OFF);
                                    put("pariatur", LoggingConfigDriverLogLevelsEnum.DEBUG);
                                    put("reprehenderit", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                }};
                            }};;
                            mainClass = "odio";
                            mainJarFileUri = "minima";
                            properties = new java.util.HashMap<String, String>() {{
                                put("ducimus", "excepturi");
                                put("dolores", "error");
                            }};
                        }};;
                        hiveJob = new HiveJob() {{
                            continueOnFailure = false;
                            jarFileUris = new String[]{{
                                add("ducimus"),
                            }};
                            properties = new java.util.HashMap<String, String>() {{
                                put("pariatur", "itaque");
                                put("similique", "optio");
                            }};
                            queryFileUri = "ex";
                            queryList = new QueryList() {{
                                queries = new String[]{{
                                    add("commodi"),
                                    add("officiis"),
                                }};
                            }};;
                            scriptVariables = new java.util.HashMap<String, String>() {{
                                put("quidem", "exercitationem");
                                put("quam", "dolorem");
                                put("modi", "ipsa");
                                put("sint", "vero");
                            }};
                        }};;
                        labels = new java.util.HashMap<String, String>() {{
                            put("repudiandae", "cum");
                        }};
                        pigJob = new PigJob() {{
                            continueOnFailure = false;
                            jarFileUris = new String[]{{
                                add("earum"),
                            }};
                            loggingConfig = new LoggingConfig() {{
                                driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                    put("animi", LoggingConfigDriverLogLevelsEnum.ALL);
                                    put("nam", LoggingConfigDriverLogLevelsEnum.ALL);
                                }};
                            }};;
                            properties = new java.util.HashMap<String, String>() {{
                                put("necessitatibus", "nobis");
                            }};
                            queryFileUri = "ipsa";
                            queryList = new QueryList() {{
                                queries = new String[]{{
                                    add("maiores"),
                                    add("veritatis"),
                                }};
                            }};;
                            scriptVariables = new java.util.HashMap<String, String>() {{
                                put("laboriosam", "pariatur");
                            }};
                        }};;
                        placement = new JobPlacementInput() {{
                            clusterLabels = new java.util.HashMap<String, String>() {{
                                put("excepturi", "occaecati");
                                put("nemo", "aliquam");
                                put("nostrum", "doloribus");
                            }};
                            clusterName = "eligendi";
                        }};;
                        prestoJob = new PrestoJob() {{
                            clientTags = new String[]{{
                                add("enim"),
                                add("hic"),
                                add("animi"),
                            }};
                            continueOnFailure = false;
                            loggingConfig = new LoggingConfig() {{
                                driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                    put("totam", LoggingConfigDriverLogLevelsEnum.WARN);
                                    put("odio", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                    put("saepe", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                }};
                            }};;
                            outputFormat = "quos";
                            properties = new java.util.HashMap<String, String>() {{
                                put("assumenda", "tempore");
                                put("libero", "velit");
                                put("doloremque", "delectus");
                            }};
                            queryFileUri = "impedit";
                            queryList = new QueryList() {{
                                queries = new String[]{{
                                    add("ipsum"),
                                    add("adipisci"),
                                    add("saepe"),
                                }};
                            }};;
                        }};;
                        pysparkJob = new PySparkJob() {{
                            archiveUris = new String[]{{
                                add("doloremque"),
                                add("quis"),
                                add("veniam"),
                            }};
                            args = new String[]{{
                                add("architecto"),
                                add("cupiditate"),
                                add("molestiae"),
                            }};
                            fileUris = new String[]{{
                                add("possimus"),
                                add("non"),
                                add("magnam"),
                                add("itaque"),
                            }};
                            jarFileUris = new String[]{{
                                add("asperiores"),
                            }};
                            loggingConfig = new LoggingConfig() {{
                                driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                    put("consequuntur", LoggingConfigDriverLogLevelsEnum.FATAL);
                                    put("laudantium", LoggingConfigDriverLogLevelsEnum.ALL);
                                }};
                            }};;
                            mainPythonFileUri = "pariatur";
                            properties = new java.util.HashMap<String, String>() {{
                                put("exercitationem", "ab");
                            }};
                            pythonFileUris = new String[]{{
                                add("facilis"),
                            }};
                        }};;
                        reference = new JobReference() {{
                            jobId = "tempore";
                            projectId = "nisi";
                        }};;
                        scheduling = new JobScheduling() {{
                            maxFailuresPerHour = 977518;
                            maxFailuresTotal = 310840;
                        }};;
                        sparkJob = new SparkJob() {{
                            archiveUris = new String[]{{
                                add("distinctio"),
                                add("nisi"),
                                add("quis"),
                            }};
                            args = new String[]{{
                                add("libero"),
                                add("minus"),
                            }};
                            fileUris = new String[]{{
                                add("facilis"),
                                add("ipsum"),
                                add("ad"),
                                add("voluptatibus"),
                            }};
                            jarFileUris = new String[]{{
                                add("consequuntur"),
                                add("debitis"),
                                add("labore"),
                                add("rerum"),
                            }};
                            loggingConfig = new LoggingConfig() {{
                                driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                    put("reprehenderit", LoggingConfigDriverLogLevelsEnum.DEBUG);
                                }};
                            }};;
                            mainClass = "neque";
                            mainJarFileUri = "iusto";
                            properties = new java.util.HashMap<String, String>() {{
                                put("rem", "eligendi");
                                put("fugiat", "unde");
                                put("officiis", "ducimus");
                            }};
                        }};;
                        sparkRJob = new SparkRJob() {{
                            archiveUris = new String[]{{
                                add("dicta"),
                            }};
                            args = new String[]{{
                                add("porro"),
                                add("vitae"),
                                add("dignissimos"),
                            }};
                            fileUris = new String[]{{
                                add("fugiat"),
                                add("ad"),
                            }};
                            loggingConfig = new LoggingConfig() {{
                                driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                    put("enim", LoggingConfigDriverLogLevelsEnum.OFF);
                                }};
                            }};;
                            mainRFileUri = "iusto";
                            properties = new java.util.HashMap<String, String>() {{
                                put("libero", "illo");
                                put("ab", "incidunt");
                            }};
                        }};;
                        sparkSqlJob = new SparkSqlJob() {{
                            jarFileUris = new String[]{{
                                add("saepe"),
                                add("tempore"),
                                add("veniam"),
                                add("eos"),
                            }};
                            loggingConfig = new LoggingConfig() {{
                                driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                    put("earum", LoggingConfigDriverLogLevelsEnum.DEBUG);
                                    put("praesentium", LoggingConfigDriverLogLevelsEnum.DEBUG);
                                    put("repellat", LoggingConfigDriverLogLevelsEnum.FATAL);
                                    put("sequi", LoggingConfigDriverLogLevelsEnum.INFO);
                                }};
                            }};;
                            properties = new java.util.HashMap<String, String>() {{
                                put("illo", "labore");
                                put("assumenda", "aliquam");
                                put("quisquam", "provident");
                            }};
                            queryFileUri = "laudantium";
                            queryList = new QueryList() {{
                                queries = new String[]{{
                                    add("consequatur"),
                                    add("maxime"),
                                    add("aspernatur"),
                                    add("nam"),
                                }};
                            }};;
                            scriptVariables = new java.util.HashMap<String, String>() {{
                                put("quas", "provident");
                                put("repudiandae", "rerum");
                                put("dignissimos", "corporis");
                            }};
                        }};;
                        trinoJob = new TrinoJob() {{
                            clientTags = new String[]{{
                                add("similique"),
                                add("repellendus"),
                                add("iure"),
                                add("dolorem"),
                            }};
                            continueOnFailure = false;
                            loggingConfig = new LoggingConfig() {{
                                driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                    put("impedit", LoggingConfigDriverLogLevelsEnum.DEBUG);
                                    put("aut", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                }};
                            }};;
                            outputFormat = "ad";
                            properties = new java.util.HashMap<String, String>() {{
                                put("amet", "illum");
                            }};
                            queryFileUri = "praesentium";
                            queryList = new QueryList() {{
                                queries = new String[]{{
                                    add("cum"),
                                    add("amet"),
                                    add("quasi"),
                                }};
                            }};;
                        }};;
                    }};;
                    requestId = "dicta";
                }};;
                accessToken = "laudantium";
                alt = AltEnum.JSON;
                callback = "earum";
                fields = "iusto";
                key = "amet";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "necessitatibus";
                uploadProtocol = "provident";
            }};            

            DataprocProjectsRegionsJobsSubmitResponse res = sdk.projects.dataprocProjectsRegionsJobsSubmit(req, new DataprocProjectsRegionsJobsSubmitSecurity("repudiandae", "consequatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.job != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataprocProjectsRegionsJobsSubmitAsOperation

Submits job to a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsSubmitAsOperationRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsSubmitAsOperationResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsJobsSubmitAsOperationSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DriverSchedulingConfig;
import org.openapis.openapi.models.shared.HadoopJob;
import org.openapis.openapi.models.shared.HiveJob;
import org.openapis.openapi.models.shared.JobInput;
import org.openapis.openapi.models.shared.JobPlacementInput;
import org.openapis.openapi.models.shared.JobReference;
import org.openapis.openapi.models.shared.JobScheduling;
import org.openapis.openapi.models.shared.LoggingConfig;
import org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum;
import org.openapis.openapi.models.shared.PigJob;
import org.openapis.openapi.models.shared.PrestoJob;
import org.openapis.openapi.models.shared.PySparkJob;
import org.openapis.openapi.models.shared.QueryList;
import org.openapis.openapi.models.shared.SparkJob;
import org.openapis.openapi.models.shared.SparkRJob;
import org.openapis.openapi.models.shared.SparkSqlJob;
import org.openapis.openapi.models.shared.SubmitJobRequestInput;
import org.openapis.openapi.models.shared.TrinoJob;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsJobsSubmitAsOperationRequest req = new DataprocProjectsRegionsJobsSubmitAsOperationRequest("nemo", "molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                submitJobRequestInput = new SubmitJobRequestInput() {{
                    job = new JobInput() {{
                        driverSchedulingConfig = new DriverSchedulingConfig() {{
                            memoryMb = 708771;
                            vcores = 545779;
                        }};;
                        hadoopJob = new HadoopJob() {{
                            archiveUris = new String[]{{
                                add("sint"),
                            }};
                            args = new String[]{{
                                add("eos"),
                                add("totam"),
                                add("dicta"),
                                add("voluptatem"),
                            }};
                            fileUris = new String[]{{
                                add("dolor"),
                            }};
                            jarFileUris = new String[]{{
                                add("a"),
                            }};
                            loggingConfig = new LoggingConfig() {{
                                driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                    put("occaecati", LoggingConfigDriverLogLevelsEnum.INFO);
                                }};
                            }};;
                            mainClass = "beatae";
                            mainJarFileUri = "at";
                            properties = new java.util.HashMap<String, String>() {{
                                put("minus", "esse");
                                put("voluptatem", "perferendis");
                            }};
                        }};;
                        hiveJob = new HiveJob() {{
                            continueOnFailure = false;
                            jarFileUris = new String[]{{
                                add("ea"),
                                add("aperiam"),
                                add("dignissimos"),
                            }};
                            properties = new java.util.HashMap<String, String>() {{
                                put("velit", "porro");
                                put("provident", "consectetur");
                                put("eligendi", "dignissimos");
                                put("consectetur", "soluta");
                            }};
                            queryFileUri = "natus";
                            queryList = new QueryList() {{
                                queries = new String[]{{
                                    add("officia"),
                                    add("amet"),
                                    add("tenetur"),
                                    add("aspernatur"),
                                }};
                            }};;
                            scriptVariables = new java.util.HashMap<String, String>() {{
                                put("itaque", "illum");
                                put("laborum", "dignissimos");
                                put("vero", "qui");
                                put("consectetur", "repellat");
                            }};
                        }};;
                        labels = new java.util.HashMap<String, String>() {{
                            put("explicabo", "exercitationem");
                        }};
                        pigJob = new PigJob() {{
                            continueOnFailure = false;
                            jarFileUris = new String[]{{
                                add("non"),
                                add("ab"),
                            }};
                            loggingConfig = new LoggingConfig() {{
                                driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                    put("hic", LoggingConfigDriverLogLevelsEnum.WARN);
                                }};
                            }};;
                            properties = new java.util.HashMap<String, String>() {{
                                put("non", "distinctio");
                                put("in", "exercitationem");
                                put("labore", "numquam");
                                put("repudiandae", "modi");
                            }};
                            queryFileUri = "in";
                            queryList = new QueryList() {{
                                queries = new String[]{{
                                    add("accusamus"),
                                }};
                            }};;
                            scriptVariables = new java.util.HashMap<String, String>() {{
                                put("aperiam", "odit");
                                put("deleniti", "enim");
                                put("voluptate", "similique");
                            }};
                        }};;
                        placement = new JobPlacementInput() {{
                            clusterLabels = new java.util.HashMap<String, String>() {{
                                put("libero", "magnam");
                                put("sit", "modi");
                            }};
                            clusterName = "eum";
                        }};;
                        prestoJob = new PrestoJob() {{
                            clientTags = new String[]{{
                                add("mollitia"),
                            }};
                            continueOnFailure = false;
                            loggingConfig = new LoggingConfig() {{
                                driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                    put("fugiat", LoggingConfigDriverLogLevelsEnum.DEBUG);
                                    put("molestiae", LoggingConfigDriverLogLevelsEnum.TRACE);
                                }};
                            }};;
                            outputFormat = "reiciendis";
                            properties = new java.util.HashMap<String, String>() {{
                                put("modi", "aut");
                            }};
                            queryFileUri = "aut";
                            queryList = new QueryList() {{
                                queries = new String[]{{
                                    add("odio"),
                                    add("commodi"),
                                    add("numquam"),
                                    add("dolorum"),
                                }};
                            }};;
                        }};;
                        pysparkJob = new PySparkJob() {{
                            archiveUris = new String[]{{
                                add("voluptate"),
                                add("consectetur"),
                                add("nesciunt"),
                                add("quaerat"),
                            }};
                            args = new String[]{{
                                add("minus"),
                                add("sunt"),
                                add("distinctio"),
                                add("iusto"),
                            }};
                            fileUris = new String[]{{
                                add("et"),
                                add("facilis"),
                                add("amet"),
                            }};
                            jarFileUris = new String[]{{
                                add("fuga"),
                                add("alias"),
                            }};
                            loggingConfig = new LoggingConfig() {{
                                driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                    put("aut", LoggingConfigDriverLogLevelsEnum.INFO);
                                    put("laudantium", LoggingConfigDriverLogLevelsEnum.FATAL);
                                    put("veritatis", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                }};
                            }};;
                            mainPythonFileUri = "eaque";
                            properties = new java.util.HashMap<String, String>() {{
                                put("delectus", "mollitia");
                                put("nulla", "officia");
                                put("sed", "voluptatem");
                                put("alias", "eveniet");
                            }};
                            pythonFileUris = new String[]{{
                                add("voluptatem"),
                                add("incidunt"),
                                add("qui"),
                                add("qui"),
                            }};
                        }};;
                        reference = new JobReference() {{
                            jobId = "necessitatibus";
                            projectId = "harum";
                        }};;
                        scheduling = new JobScheduling() {{
                            maxFailuresPerHour = 126727;
                            maxFailuresTotal = 108903;
                        }};;
                        sparkJob = new SparkJob() {{
                            archiveUris = new String[]{{
                                add("modi"),
                                add("optio"),
                            }};
                            args = new String[]{{
                                add("molestias"),
                                add("officia"),
                                add("libero"),
                                add("totam"),
                            }};
                            fileUris = new String[]{{
                                add("aliquid"),
                            }};
                            jarFileUris = new String[]{{
                                add("impedit"),
                                add("ducimus"),
                            }};
                            loggingConfig = new LoggingConfig() {{
                                driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                    put("velit", LoggingConfigDriverLogLevelsEnum.OFF);
                                }};
                            }};;
                            mainClass = "repellat";
                            mainJarFileUri = "nulla";
                            properties = new java.util.HashMap<String, String>() {{
                                put("natus", "accusamus");
                                put("doloremque", "nisi");
                                put("rerum", "recusandae");
                            }};
                        }};;
                        sparkRJob = new SparkRJob() {{
                            archiveUris = new String[]{{
                                add("non"),
                                add("rem"),
                                add("quia"),
                                add("ullam"),
                            }};
                            args = new String[]{{
                                add("dicta"),
                                add("voluptatibus"),
                                add("eligendi"),
                                add("quae"),
                            }};
                            fileUris = new String[]{{
                                add("architecto"),
                                add("architecto"),
                                add("enim"),
                                add("optio"),
                            }};
                            loggingConfig = new LoggingConfig() {{
                                driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                    put("perferendis", LoggingConfigDriverLogLevelsEnum.ERROR);
                                    put("reiciendis", LoggingConfigDriverLogLevelsEnum.OFF);
                                    put("iste", LoggingConfigDriverLogLevelsEnum.ALL);
                                }};
                            }};;
                            mainRFileUri = "quos";
                            properties = new java.util.HashMap<String, String>() {{
                                put("dolore", "modi");
                                put("itaque", "maxime");
                            }};
                        }};;
                        sparkSqlJob = new SparkSqlJob() {{
                            jarFileUris = new String[]{{
                                add("consequuntur"),
                                add("assumenda"),
                            }};
                            loggingConfig = new LoggingConfig() {{
                                driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                    put("doloribus", LoggingConfigDriverLogLevelsEnum.ERROR);
                                    put("porro", LoggingConfigDriverLogLevelsEnum.FATAL);
                                    put("totam", LoggingConfigDriverLogLevelsEnum.OFF);
                                    put("ab", LoggingConfigDriverLogLevelsEnum.WARN);
                                }};
                            }};;
                            properties = new java.util.HashMap<String, String>() {{
                                put("esse", "iure");
                                put("odio", "nesciunt");
                            }};
                            queryFileUri = "debitis";
                            queryList = new QueryList() {{
                                queries = new String[]{{
                                    add("neque"),
                                    add("corporis"),
                                }};
                            }};;
                            scriptVariables = new java.util.HashMap<String, String>() {{
                                put("consequuntur", "officia");
                                put("reprehenderit", "distinctio");
                            }};
                        }};;
                        trinoJob = new TrinoJob() {{
                            clientTags = new String[]{{
                                add("ipsa"),
                                add("rem"),
                            }};
                            continueOnFailure = false;
                            loggingConfig = new LoggingConfig() {{
                                driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                    put("accusantium", LoggingConfigDriverLogLevelsEnum.TRACE);
                                    put("saepe", LoggingConfigDriverLogLevelsEnum.ALL);
                                    put("facere", LoggingConfigDriverLogLevelsEnum.TRACE);
                                    put("quos", LoggingConfigDriverLogLevelsEnum.OFF);
                                }};
                            }};;
                            outputFormat = "fugiat";
                            properties = new java.util.HashMap<String, String>() {{
                                put("delectus", "velit");
                                put("vitae", "nesciunt");
                                put("similique", "illo");
                            }};
                            queryFileUri = "repellat";
                            queryList = new QueryList() {{
                                queries = new String[]{{
                                    add("doloribus"),
                                    add("possimus"),
                                }};
                            }};;
                        }};;
                    }};;
                    requestId = "unde";
                }};;
                accessToken = "incidunt";
                alt = AltEnum.JSON;
                callback = "ipsam";
                fields = "cupiditate";
                key = "optio";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "nesciunt";
                uploadProtocol = "commodi";
            }};            

            DataprocProjectsRegionsJobsSubmitAsOperationResponse res = sdk.projects.dataprocProjectsRegionsJobsSubmitAsOperation(req, new DataprocProjectsRegionsJobsSubmitAsOperationSecurity("sapiente", "consequuntur") {{
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

## dataprocProjectsRegionsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsOperationsCancelRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsOperationsCancelResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsOperationsCancelRequest req = new DataprocProjectsRegionsOperationsCancelRequest("veniam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "ut";
                fields = "numquam";
                key = "tenetur";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "in";
                uploadProtocol = "minima";
            }};            

            DataprocProjectsRegionsOperationsCancelResponse res = sdk.projects.dataprocProjectsRegionsOperationsCancel(req, new DataprocProjectsRegionsOperationsCancelSecurity("ex", "minus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataprocProjectsRegionsWorkflowTemplatesCreate

Creates new workflow template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesCreateRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesCreateResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesCreateSecurity;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AutoscalingConfig;
import org.openapis.openapi.models.shared.AuxiliaryNodeGroupInput;
import org.openapis.openapi.models.shared.ClusterConfigInput;
import org.openapis.openapi.models.shared.ClusterSelector;
import org.openapis.openapi.models.shared.ConfidentialInstanceConfig;
import org.openapis.openapi.models.shared.DataprocMetricConfig;
import org.openapis.openapi.models.shared.DiskConfig;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.EndpointConfigInput;
import org.openapis.openapi.models.shared.GceClusterConfig;
import org.openapis.openapi.models.shared.GceClusterConfigPrivateIpv6GoogleAccessEnum;
import org.openapis.openapi.models.shared.GkeClusterConfig;
import org.openapis.openapi.models.shared.GkeNodeConfig;
import org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig;
import org.openapis.openapi.models.shared.GkeNodePoolAutoscalingConfig;
import org.openapis.openapi.models.shared.GkeNodePoolConfig;
import org.openapis.openapi.models.shared.GkeNodePoolTarget;
import org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum;
import org.openapis.openapi.models.shared.HadoopJob;
import org.openapis.openapi.models.shared.HiveJob;
import org.openapis.openapi.models.shared.IdentityConfig;
import org.openapis.openapi.models.shared.InstanceGroupConfigInput;
import org.openapis.openapi.models.shared.InstanceGroupConfigPreemptibilityEnum;
import org.openapis.openapi.models.shared.JobScheduling;
import org.openapis.openapi.models.shared.KerberosConfig;
import org.openapis.openapi.models.shared.LifecycleConfigInput;
import org.openapis.openapi.models.shared.LoggingConfig;
import org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum;
import org.openapis.openapi.models.shared.ManagedClusterInput;
import org.openapis.openapi.models.shared.MetastoreConfig;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.MetricMetricSourceEnum;
import org.openapis.openapi.models.shared.NamespacedGkeDeploymentTarget;
import org.openapis.openapi.models.shared.NodeGroupAffinity;
import org.openapis.openapi.models.shared.NodeGroupInput;
import org.openapis.openapi.models.shared.NodeGroupRolesEnum;
import org.openapis.openapi.models.shared.NodeInitializationAction;
import org.openapis.openapi.models.shared.OrderedJob;
import org.openapis.openapi.models.shared.ParameterValidation;
import org.openapis.openapi.models.shared.PigJob;
import org.openapis.openapi.models.shared.PrestoJob;
import org.openapis.openapi.models.shared.PySparkJob;
import org.openapis.openapi.models.shared.QueryList;
import org.openapis.openapi.models.shared.RegexValidation;
import org.openapis.openapi.models.shared.ReservationAffinity;
import org.openapis.openapi.models.shared.ReservationAffinityConsumeReservationTypeEnum;
import org.openapis.openapi.models.shared.SecurityConfig;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.SoftwareConfig;
import org.openapis.openapi.models.shared.SoftwareConfigOptionalComponentsEnum;
import org.openapis.openapi.models.shared.SparkJob;
import org.openapis.openapi.models.shared.SparkRJob;
import org.openapis.openapi.models.shared.SparkSqlJob;
import org.openapis.openapi.models.shared.TemplateParameter;
import org.openapis.openapi.models.shared.TrinoJob;
import org.openapis.openapi.models.shared.ValueValidation;
import org.openapis.openapi.models.shared.WorkflowTemplateInput;
import org.openapis.openapi.models.shared.WorkflowTemplatePlacementInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsWorkflowTemplatesCreateRequest req = new DataprocProjectsRegionsWorkflowTemplatesCreateRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                workflowTemplateInput = new WorkflowTemplateInput() {{
                    dagTimeout = "hic";
                    id = "6c37a512-6243-4835-bbc0-5a23a45cefc5";
                    jobs = new org.openapis.openapi.models.shared.OrderedJob[]{{
                        add(new OrderedJob() {{
                            hadoopJob = new HadoopJob() {{
                                archiveUris = new String[]{{
                                    add("officiis"),
                                    add("architecto"),
                                    add("alias"),
                                    add("culpa"),
                                }};
                                args = new String[]{{
                                    add("nobis"),
                                }};
                                fileUris = new String[]{{
                                    add("quia"),
                                    add("dicta"),
                                    add("vel"),
                                    add("perspiciatis"),
                                }};
                                jarFileUris = new String[]{{
                                    add("ullam"),
                                    add("architecto"),
                                    add("accusantium"),
                                    add("perferendis"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("provident", LoggingConfigDriverLogLevelsEnum.ERROR);
                                    }};
                                }};
                                mainClass = "iure";
                                mainJarFileUri = "quibusdam";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("nemo", "recusandae");
                                    put("velit", "magnam");
                                    put("dignissimos", "laboriosam");
                                    put("sed", "odio");
                                }};
                            }};
                            hiveJob = new HiveJob() {{
                                continueOnFailure = false;
                                jarFileUris = new String[]{{
                                    add("provident"),
                                    add("cum"),
                                    add("doloribus"),
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("quidem", "itaque");
                                    put("laboriosam", "unde");
                                    put("modi", "perspiciatis");
                                }};
                                queryFileUri = "hic";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("aspernatur"),
                                        add("libero"),
                                        add("nam"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("recusandae", "quod");
                                    put("id", "saepe");
                                }};
                            }};
                            labels = new java.util.HashMap<String, String>() {{
                                put("quo", "nesciunt");
                                put("illum", "nemo");
                            }};
                            pigJob = new PigJob() {{
                                continueOnFailure = false;
                                jarFileUris = new String[]{{
                                    add("facilis"),
                                    add("non"),
                                    add("mollitia"),
                                    add("assumenda"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("distinctio", LoggingConfigDriverLogLevelsEnum.FATAL);
                                        put("ad", LoggingConfigDriverLogLevelsEnum.FATAL);
                                        put("laborum", LoggingConfigDriverLogLevelsEnum.OFF);
                                        put("laborum", LoggingConfigDriverLogLevelsEnum.TRACE);
                                    }};
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("ipsam", "alias");
                                    put("suscipit", "deserunt");
                                    put("molestias", "laborum");
                                    put("est", "occaecati");
                                }};
                                queryFileUri = "labore";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("perferendis"),
                                        add("fugit"),
                                        add("aliquid"),
                                        add("magnam"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("eligendi", "hic");
                                    put("nostrum", "officiis");
                                }};
                            }};
                            prerequisiteStepIds = new String[]{{
                                add("nulla"),
                                add("error"),
                                add("mollitia"),
                            }};
                            prestoJob = new PrestoJob() {{
                                clientTags = new String[]{{
                                    add("nostrum"),
                                    add("esse"),
                                }};
                                continueOnFailure = false;
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("fuga", LoggingConfigDriverLogLevelsEnum.FATAL);
                                        put("impedit", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                        put("deserunt", LoggingConfigDriverLogLevelsEnum.FATAL);
                                    }};
                                }};
                                outputFormat = "laboriosam";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("voluptatem", "facere");
                                }};
                                queryFileUri = "necessitatibus";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("consequatur"),
                                        add("eaque"),
                                        add("architecto"),
                                        add("similique"),
                                    }};
                                }};
                            }};
                            pysparkJob = new PySparkJob() {{
                                archiveUris = new String[]{{
                                    add("blanditiis"),
                                    add("quae"),
                                    add("magni"),
                                    add("officiis"),
                                }};
                                args = new String[]{{
                                    add("necessitatibus"),
                                }};
                                fileUris = new String[]{{
                                    add("ipsa"),
                                    add("excepturi"),
                                    add("a"),
                                    add("maiores"),
                                }};
                                jarFileUris = new String[]{{
                                    add("maiores"),
                                    add("alias"),
                                    add("asperiores"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("dicta", LoggingConfigDriverLogLevelsEnum.DEBUG);
                                        put("earum", LoggingConfigDriverLogLevelsEnum.OFF);
                                        put("velit", LoggingConfigDriverLogLevelsEnum.TRACE);
                                    }};
                                }};
                                mainPythonFileUri = "esse";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("eligendi", "quasi");
                                    put("neque", "vero");
                                }};
                                pythonFileUris = new String[]{{
                                    add("accusantium"),
                                    add("qui"),
                                    add("impedit"),
                                }};
                            }};
                            scheduling = new JobScheduling() {{
                                maxFailuresPerHour = 104736;
                                maxFailuresTotal = 278329;
                            }};
                            sparkJob = new SparkJob() {{
                                archiveUris = new String[]{{
                                    add("odit"),
                                }};
                                args = new String[]{{
                                    add("rerum"),
                                    add("alias"),
                                }};
                                fileUris = new String[]{{
                                    add("vel"),
                                    add("accusantium"),
                                    add("id"),
                                }};
                                jarFileUris = new String[]{{
                                    add("ex"),
                                    add("quas"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("ullam", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                    }};
                                }};
                                mainClass = "similique";
                                mainJarFileUri = "incidunt";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("magni", "deserunt");
                                    put("delectus", "omnis");
                                }};
                            }};
                            sparkRJob = new SparkRJob() {{
                                archiveUris = new String[]{{
                                    add("nesciunt"),
                                }};
                                args = new String[]{{
                                    add("quis"),
                                    add("cupiditate"),
                                    add("aliquam"),
                                    add("excepturi"),
                                }};
                                fileUris = new String[]{{
                                    add("laudantium"),
                                    add("velit"),
                                    add("reiciendis"),
                                    add("amet"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("ipsa", LoggingConfigDriverLogLevelsEnum.FATAL);
                                        put("tenetur", LoggingConfigDriverLogLevelsEnum.INFO);
                                    }};
                                }};
                                mainRFileUri = "molestiae";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("asperiores", "a");
                                    put("nobis", "perspiciatis");
                                }};
                            }};
                            sparkSqlJob = new SparkSqlJob() {{
                                jarFileUris = new String[]{{
                                    add("dicta"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("commodi", LoggingConfigDriverLogLevelsEnum.OFF);
                                        put("porro", LoggingConfigDriverLogLevelsEnum.ERROR);
                                        put("quidem", LoggingConfigDriverLogLevelsEnum.TRACE);
                                        put("voluptates", LoggingConfigDriverLogLevelsEnum.ALL);
                                    }};
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("sequi", "eligendi");
                                    put("asperiores", "esse");
                                }};
                                queryFileUri = "blanditiis";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("repellat"),
                                        add("a"),
                                        add("animi"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("itaque", "nulla");
                                    put("deserunt", "corporis");
                                    put("velit", "officiis");
                                    put("enim", "officia");
                                }};
                            }};
                            stepId = "saepe";
                            trinoJob = new TrinoJob() {{
                                clientTags = new String[]{{
                                    add("repudiandae"),
                                    add("accusantium"),
                                }};
                                continueOnFailure = false;
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("impedit", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                        put("blanditiis", LoggingConfigDriverLogLevelsEnum.TRACE);
                                        put("quisquam", LoggingConfigDriverLogLevelsEnum.ALL);
                                    }};
                                }};
                                outputFormat = "nobis";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("minus", "quia");
                                    put("magnam", "reprehenderit");
                                    put("quod", "quos");
                                }};
                                queryFileUri = "corrupti";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("molestiae"),
                                    }};
                                }};
                            }};
                        }}),
                        add(new OrderedJob() {{
                            hadoopJob = new HadoopJob() {{
                                archiveUris = new String[]{{
                                    add("laborum"),
                                }};
                                args = new String[]{{
                                    add("perferendis"),
                                    add("necessitatibus"),
                                }};
                                fileUris = new String[]{{
                                    add("molestias"),
                                }};
                                jarFileUris = new String[]{{
                                    add("sunt"),
                                    add("maiores"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("odit", LoggingConfigDriverLogLevelsEnum.OFF);
                                    }};
                                }};
                                mainClass = "veniam";
                                mainJarFileUri = "ipsam";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("exercitationem", "veniam");
                                }};
                            }};
                            hiveJob = new HiveJob() {{
                                continueOnFailure = false;
                                jarFileUris = new String[]{{
                                    add("ad"),
                                    add("nisi"),
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("quis", "quibusdam");
                                    put("nemo", "suscipit");
                                    put("pariatur", "sit");
                                    put("quidem", "repellendus");
                                }};
                                queryFileUri = "perferendis";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("sapiente"),
                                        add("sed"),
                                        add("possimus"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("repudiandae", "architecto");
                                    put("adipisci", "pariatur");
                                    put("harum", "dolore");
                                    put("voluptatibus", "iure");
                                }};
                            }};
                            labels = new java.util.HashMap<String, String>() {{
                                put("minus", "soluta");
                            }};
                            pigJob = new PigJob() {{
                                continueOnFailure = false;
                                jarFileUris = new String[]{{
                                    add("velit"),
                                    add("earum"),
                                    add("praesentium"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("non", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                        put("mollitia", LoggingConfigDriverLogLevelsEnum.FATAL);
                                        put("harum", LoggingConfigDriverLogLevelsEnum.ERROR);
                                    }};
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("expedita", "corrupti");
                                }};
                                queryFileUri = "eaque";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("aliquid"),
                                        add("excepturi"),
                                        add("magni"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("possimus", "dolor");
                                    put("rerum", "sed");
                                }};
                            }};
                            prerequisiteStepIds = new String[]{{
                                add("optio"),
                                add("delectus"),
                                add("minus"),
                                add("quo"),
                            }};
                            prestoJob = new PrestoJob() {{
                                clientTags = new String[]{{
                                    add("asperiores"),
                                    add("voluptatum"),
                                    add("iste"),
                                }};
                                continueOnFailure = false;
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("accusantium", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                        put("aut", LoggingConfigDriverLogLevelsEnum.OFF);
                                    }};
                                }};
                                outputFormat = "nostrum";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("possimus", "neque");
                                    put("pariatur", "vel");
                                    put("sapiente", "mollitia");
                                    put("quae", "quos");
                                }};
                                queryFileUri = "aperiam";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("voluptates"),
                                        add("ad"),
                                    }};
                                }};
                            }};
                            pysparkJob = new PySparkJob() {{
                                archiveUris = new String[]{{
                                    add("quisquam"),
                                    add("quas"),
                                }};
                                args = new String[]{{
                                    add("maiores"),
                                }};
                                fileUris = new String[]{{
                                    add("aliquid"),
                                }};
                                jarFileUris = new String[]{{
                                    add("est"),
                                    add("dolor"),
                                    add("aliquid"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("cumque", LoggingConfigDriverLogLevelsEnum.INFO);
                                    }};
                                }};
                                mainPythonFileUri = "voluptatum";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("adipisci", "recusandae");
                                    put("tempora", "blanditiis");
                                }};
                                pythonFileUris = new String[]{{
                                    add("sequi"),
                                    add("voluptatum"),
                                }};
                            }};
                            scheduling = new JobScheduling() {{
                                maxFailuresPerHour = 27078;
                                maxFailuresTotal = 703189;
                            }};
                            sparkJob = new SparkJob() {{
                                archiveUris = new String[]{{
                                    add("tenetur"),
                                }};
                                args = new String[]{{
                                    add("quidem"),
                                    add("totam"),
                                }};
                                fileUris = new String[]{{
                                    add("deserunt"),
                                    add("magni"),
                                    add("nihil"),
                                    add("voluptas"),
                                }};
                                jarFileUris = new String[]{{
                                    add("commodi"),
                                    add("alias"),
                                    add("fuga"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("dolore", LoggingConfigDriverLogLevelsEnum.FATAL);
                                    }};
                                }};
                                mainClass = "aliquam";
                                mainJarFileUri = "iste";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("eligendi", "placeat");
                                    put("voluptas", "occaecati");
                                }};
                            }};
                            sparkRJob = new SparkRJob() {{
                                archiveUris = new String[]{{
                                    add("illo"),
                                    add("nihil"),
                                    add("inventore"),
                                }};
                                args = new String[]{{
                                    add("ipsam"),
                                    add("quasi"),
                                    add("cumque"),
                                }};
                                fileUris = new String[]{{
                                    add("harum"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("facilis", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                        put("cumque", LoggingConfigDriverLogLevelsEnum.OFF);
                                        put("labore", LoggingConfigDriverLogLevelsEnum.ERROR);
                                        put("corrupti", LoggingConfigDriverLogLevelsEnum.INFO);
                                    }};
                                }};
                                mainRFileUri = "atque";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("cum", "pariatur");
                                    put("sapiente", "quo");
                                    put("incidunt", "quod");
                                    put("minus", "porro");
                                }};
                            }};
                            sparkSqlJob = new SparkSqlJob() {{
                                jarFileUris = new String[]{{
                                    add("excepturi"),
                                    add("occaecati"),
                                    add("libero"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("esse", LoggingConfigDriverLogLevelsEnum.OFF);
                                        put("maxime", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                        put("soluta", LoggingConfigDriverLogLevelsEnum.ALL);
                                        put("pariatur", LoggingConfigDriverLogLevelsEnum.ERROR);
                                    }};
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("veritatis", "aut");
                                    put("laudantium", "iusto");
                                    put("dolor", "voluptates");
                                    put("tempora", "magni");
                                }};
                                queryFileUri = "rerum";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("voluptatem"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("at", "eum");
                                    put("reprehenderit", "voluptatum");
                                }};
                            }};
                            stepId = "blanditiis";
                            trinoJob = new TrinoJob() {{
                                clientTags = new String[]{{
                                    add("atque"),
                                    add("rerum"),
                                }};
                                continueOnFailure = false;
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("atque", LoggingConfigDriverLogLevelsEnum.DEBUG);
                                        put("atque", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                        put("est", LoggingConfigDriverLogLevelsEnum.TRACE);
                                    }};
                                }};
                                outputFormat = "rem";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("quae", "quas");
                                }};
                                queryFileUri = "placeat";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("labore"),
                                        add("sapiente"),
                                    }};
                                }};
                            }};
                        }}),
                        add(new OrderedJob() {{
                            hadoopJob = new HadoopJob() {{
                                archiveUris = new String[]{{
                                    add("delectus"),
                                    add("officia"),
                                    add("natus"),
                                    add("cumque"),
                                }};
                                args = new String[]{{
                                    add("quaerat"),
                                    add("doloribus"),
                                    add("quia"),
                                }};
                                fileUris = new String[]{{
                                    add("mollitia"),
                                    add("cumque"),
                                    add("quis"),
                                    add("enim"),
                                }};
                                jarFileUris = new String[]{{
                                    add("nemo"),
                                    add("illum"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("sit", LoggingConfigDriverLogLevelsEnum.INFO);
                                    }};
                                }};
                                mainClass = "minus";
                                mainJarFileUri = "asperiores";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("voluptates", "praesentium");
                                    put("dicta", "fugit");
                                    put("sit", "aliquid");
                                    put("necessitatibus", "sed");
                                }};
                            }};
                            hiveJob = new HiveJob() {{
                                continueOnFailure = false;
                                jarFileUris = new String[]{{
                                    add("sunt"),
                                    add("nesciunt"),
                                    add("delectus"),
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("aliquam", "deserunt");
                                    put("modi", "sunt");
                                    put("impedit", "eius");
                                }};
                                queryFileUri = "voluptatum";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("at"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("repellat", "aspernatur");
                                }};
                            }};
                            labels = new java.util.HashMap<String, String>() {{
                                put("sequi", "fugit");
                            }};
                            pigJob = new PigJob() {{
                                continueOnFailure = false;
                                jarFileUris = new String[]{{
                                    add("hic"),
                                    add("eaque"),
                                    add("dolorem"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("aperiam", LoggingConfigDriverLogLevelsEnum.ALL);
                                    }};
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("enim", "illo");
                                    put("magnam", "delectus");
                                    put("numquam", "optio");
                                    put("nobis", "ex");
                                }};
                                queryFileUri = "repellat";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("deleniti"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("hic", "excepturi");
                                    put("aliquid", "sed");
                                    put("beatae", "similique");
                                }};
                            }};
                            prerequisiteStepIds = new String[]{{
                                add("animi"),
                                add("dolore"),
                            }};
                            prestoJob = new PrestoJob() {{
                                clientTags = new String[]{{
                                    add("dignissimos"),
                                    add("esse"),
                                    add("animi"),
                                    add("laudantium"),
                                }};
                                continueOnFailure = false;
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("eveniet", LoggingConfigDriverLogLevelsEnum.OFF);
                                        put("velit", LoggingConfigDriverLogLevelsEnum.FATAL);
                                    }};
                                }};
                                outputFormat = "eius";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("itaque", "dignissimos");
                                    put("ipsam", "explicabo");
                                    put("impedit", "aliquid");
                                }};
                                queryFileUri = "quis";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("ipsum"),
                                        add("ut"),
                                        add("quaerat"),
                                    }};
                                }};
                            }};
                            pysparkJob = new PySparkJob() {{
                                archiveUris = new String[]{{
                                    add("praesentium"),
                                }};
                                args = new String[]{{
                                    add("dolor"),
                                    add("expedita"),
                                    add("libero"),
                                    add("iste"),
                                }};
                                fileUris = new String[]{{
                                    add("minus"),
                                }};
                                jarFileUris = new String[]{{
                                    add("temporibus"),
                                    add("sint"),
                                    add("iusto"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("accusamus", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                        put("voluptates", LoggingConfigDriverLogLevelsEnum.INFO);
                                    }};
                                }};
                                mainPythonFileUri = "tempora";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("omnis", "illum");
                                }};
                                pythonFileUris = new String[]{{
                                    add("tenetur"),
                                    add("deleniti"),
                                    add("modi"),
                                }};
                            }};
                            scheduling = new JobScheduling() {{
                                maxFailuresPerHour = 937664;
                                maxFailuresTotal = 101374;
                            }};
                            sparkJob = new SparkJob() {{
                                archiveUris = new String[]{{
                                    add("labore"),
                                    add("maiores"),
                                }};
                                args = new String[]{{
                                    add("saepe"),
                                }};
                                fileUris = new String[]{{
                                    add("esse"),
                                }};
                                jarFileUris = new String[]{{
                                    add("facere"),
                                    add("quisquam"),
                                    add("cumque"),
                                    add("aliquam"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("deserunt", LoggingConfigDriverLogLevelsEnum.TRACE);
                                        put("reiciendis", LoggingConfigDriverLogLevelsEnum.ALL);
                                        put("porro", LoggingConfigDriverLogLevelsEnum.ERROR);
                                    }};
                                }};
                                mainClass = "nobis";
                                mainJarFileUri = "quibusdam";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("aut", "ipsam");
                                    put("officia", "cupiditate");
                                    put("reprehenderit", "quia");
                                }};
                            }};
                            sparkRJob = new SparkRJob() {{
                                archiveUris = new String[]{{
                                    add("accusantium"),
                                    add("ad"),
                                    add("nisi"),
                                    add("molestiae"),
                                }};
                                args = new String[]{{
                                    add("laudantium"),
                                }};
                                fileUris = new String[]{{
                                    add("odit"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("expedita", LoggingConfigDriverLogLevelsEnum.ALL);
                                        put("repellendus", LoggingConfigDriverLogLevelsEnum.ALL);
                                    }};
                                }};
                                mainRFileUri = "ipsa";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("dolore", "esse");
                                    put("accusantium", "distinctio");
                                    put("sapiente", "quam");
                                }};
                            }};
                            sparkSqlJob = new SparkSqlJob() {{
                                jarFileUris = new String[]{{
                                    add("aliquam"),
                                    add("delectus"),
                                    add("culpa"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("iusto", LoggingConfigDriverLogLevelsEnum.FATAL);
                                        put("voluptatibus", LoggingConfigDriverLogLevelsEnum.DEBUG);
                                        put("non", LoggingConfigDriverLogLevelsEnum.DEBUG);
                                    }};
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("voluptas", "doloribus");
                                    put("animi", "recusandae");
                                    put("corporis", "non");
                                }};
                                queryFileUri = "necessitatibus";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("maiores"),
                                        add("laboriosam"),
                                        add("voluptatem"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("sequi", "sunt");
                                    put("vitae", "voluptatibus");
                                    put("doloremque", "sed");
                                    put("amet", "rerum");
                                }};
                            }};
                            stepId = "in";
                            trinoJob = new TrinoJob() {{
                                clientTags = new String[]{{
                                    add("temporibus"),
                                    add("ratione"),
                                }};
                                continueOnFailure = false;
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("nisi", LoggingConfigDriverLogLevelsEnum.INFO);
                                    }};
                                }};
                                outputFormat = "reiciendis";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("vitae", "est");
                                    put("accusantium", "quod");
                                    put("minus", "quos");
                                    put("possimus", "maiores");
                                }};
                                queryFileUri = "odio";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("sapiente"),
                                        add("aperiam"),
                                        add("similique"),
                                    }};
                                }};
                            }};
                        }}),
                        add(new OrderedJob() {{
                            hadoopJob = new HadoopJob() {{
                                archiveUris = new String[]{{
                                    add("provident"),
                                }};
                                args = new String[]{{
                                    add("repellendus"),
                                    add("unde"),
                                }};
                                fileUris = new String[]{{
                                    add("impedit"),
                                }};
                                jarFileUris = new String[]{{
                                    add("commodi"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("expedita", LoggingConfigDriverLogLevelsEnum.INFO);
                                        put("quisquam", LoggingConfigDriverLogLevelsEnum.ALL);
                                    }};
                                }};
                                mainClass = "enim";
                                mainJarFileUri = "nulla";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("distinctio", "mollitia");
                                    put("impedit", "accusamus");
                                    put("et", "quas");
                                    put("blanditiis", "cum");
                                }};
                            }};
                            hiveJob = new HiveJob() {{
                                continueOnFailure = false;
                                jarFileUris = new String[]{{
                                    add("impedit"),
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("eveniet", "repudiandae");
                                    put("sed", "impedit");
                                }};
                                queryFileUri = "quas";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("vel"),
                                        add("eligendi"),
                                        add("recusandae"),
                                        add("ex"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("veritatis", "maiores");
                                }};
                            }};
                            labels = new java.util.HashMap<String, String>() {{
                                put("vero", "quidem");
                                put("illo", "quo");
                                put("dignissimos", "minus");
                                put("distinctio", "possimus");
                            }};
                            pigJob = new PigJob() {{
                                continueOnFailure = false;
                                jarFileUris = new String[]{{
                                    add("suscipit"),
                                    add("saepe"),
                                    add("earum"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("nihil", LoggingConfigDriverLogLevelsEnum.TRACE);
                                        put("ipsum", LoggingConfigDriverLogLevelsEnum.INFO);
                                        put("laudantium", LoggingConfigDriverLogLevelsEnum.ERROR);
                                        put("deserunt", LoggingConfigDriverLogLevelsEnum.ALL);
                                    }};
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("sequi", "beatae");
                                    put("iusto", "esse");
                                }};
                                queryFileUri = "magnam";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("nulla"),
                                        add("impedit"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("illo", "exercitationem");
                                    put("laborum", "illum");
                                    put("fugit", "maxime");
                                }};
                            }};
                            prerequisiteStepIds = new String[]{{
                                add("repellat"),
                                add("nostrum"),
                                add("illum"),
                            }};
                            prestoJob = new PrestoJob() {{
                                clientTags = new String[]{{
                                    add("commodi"),
                                    add("esse"),
                                    add("explicabo"),
                                    add("consectetur"),
                                }};
                                continueOnFailure = false;
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("optio", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                        put("maiores", LoggingConfigDriverLogLevelsEnum.DEBUG);
                                        put("culpa", LoggingConfigDriverLogLevelsEnum.OFF);
                                        put("aspernatur", LoggingConfigDriverLogLevelsEnum.OFF);
                                    }};
                                }};
                                outputFormat = "neque";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("suscipit", "harum");
                                    put("ducimus", "doloremque");
                                    put("perferendis", "laudantium");
                                }};
                                queryFileUri = "iusto";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("molestiae"),
                                        add("quis"),
                                        add("iure"),
                                    }};
                                }};
                            }};
                            pysparkJob = new PySparkJob() {{
                                archiveUris = new String[]{{
                                    add("quaerat"),
                                }};
                                args = new String[]{{
                                    add("sapiente"),
                                }};
                                fileUris = new String[]{{
                                    add("est"),
                                    add("iure"),
                                }};
                                jarFileUris = new String[]{{
                                    add("provident"),
                                    add("laudantium"),
                                    add("nam"),
                                    add("nemo"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("ipsam", LoggingConfigDriverLogLevelsEnum.TRACE);
                                        put("tempora", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                    }};
                                }};
                                mainPythonFileUri = "corrupti";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("fugiat", "numquam");
                                }};
                                pythonFileUris = new String[]{{
                                    add("cum"),
                                }};
                            }};
                            scheduling = new JobScheduling() {{
                                maxFailuresPerHour = 751298;
                                maxFailuresTotal = 628314;
                            }};
                            sparkJob = new SparkJob() {{
                                archiveUris = new String[]{{
                                    add("impedit"),
                                    add("nisi"),
                                    add("cumque"),
                                    add("soluta"),
                                }};
                                args = new String[]{{
                                    add("laboriosam"),
                                    add("nam"),
                                    add("enim"),
                                    add("maiores"),
                                }};
                                fileUris = new String[]{{
                                    add("necessitatibus"),
                                }};
                                jarFileUris = new String[]{{
                                    add("cupiditate"),
                                    add("voluptatem"),
                                    add("provident"),
                                    add("adipisci"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("magnam", LoggingConfigDriverLogLevelsEnum.OFF);
                                    }};
                                }};
                                mainClass = "omnis";
                                mainJarFileUri = "explicabo";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("cum", "id");
                                    put("possimus", "fugit");
                                }};
                            }};
                            sparkRJob = new SparkRJob() {{
                                archiveUris = new String[]{{
                                    add("nostrum"),
                                    add("sequi"),
                                }};
                                args = new String[]{{
                                    add("quasi"),
                                    add("error"),
                                    add("nobis"),
                                }};
                                fileUris = new String[]{{
                                    add("voluptate"),
                                    add("eius"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("aperiam", LoggingConfigDriverLogLevelsEnum.OFF);
                                        put("possimus", LoggingConfigDriverLogLevelsEnum.ALL);
                                        put("voluptatem", LoggingConfigDriverLogLevelsEnum.OFF);
                                    }};
                                }};
                                mainRFileUri = "corporis";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("eos", "aliquam");
                                    put("blanditiis", "hic");
                                }};
                            }};
                            sparkSqlJob = new SparkSqlJob() {{
                                jarFileUris = new String[]{{
                                    add("asperiores"),
                                    add("autem"),
                                    add("nesciunt"),
                                    add("cupiditate"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("provident", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                        put("ipsa", LoggingConfigDriverLogLevelsEnum.WARN);
                                        put("nam", LoggingConfigDriverLogLevelsEnum.FATAL);
                                    }};
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("fuga", "tempore");
                                    put("commodi", "fugit");
                                    put("suscipit", "voluptate");
                                    put("nisi", "aliquid");
                                }};
                                queryFileUri = "provident";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("accusamus"),
                                        add("ab"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("quisquam", "eaque");
                                    put("alias", "qui");
                                    put("consequuntur", "vitae");
                                    put("quidem", "sequi");
                                }};
                            }};
                            stepId = "amet";
                            trinoJob = new TrinoJob() {{
                                clientTags = new String[]{{
                                    add("illum"),
                                    add("praesentium"),
                                }};
                                continueOnFailure = false;
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("similique", LoggingConfigDriverLogLevelsEnum.ERROR);
                                        put("tempore", LoggingConfigDriverLogLevelsEnum.TRACE);
                                        put("debitis", LoggingConfigDriverLogLevelsEnum.ERROR);
                                    }};
                                }};
                                outputFormat = "asperiores";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("id", "atque");
                                    put("quibusdam", "sit");
                                    put("quo", "veniam");
                                    put("aliquam", "provident");
                                }};
                                queryFileUri = "vero";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("doloremque"),
                                        add("ipsum"),
                                        add("alias"),
                                        add("doloremque"),
                                    }};
                                }};
                            }};
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("perspiciatis", "quam");
                        put("atque", "officia");
                    }};
                    parameters = new org.openapis.openapi.models.shared.TemplateParameter[]{{
                        add(new TemplateParameter() {{
                            description = "architecto";
                            fields = new String[]{{
                                add("laborum"),
                                add("veritatis"),
                                add("quod"),
                                add("a"),
                            }};
                            name = "Carol Johns";
                            validation = new ParameterValidation() {{
                                regex = new RegexValidation() {{
                                    regexes = new String[]{{
                                        add("voluptate"),
                                        add("quam"),
                                        add("quod"),
                                        add("vitae"),
                                    }};
                                }};
                                values = new ValueValidation() {{
                                    values = new String[]{{
                                        add("reiciendis"),
                                        add("quod"),
                                        add("voluptate"),
                                        add("inventore"),
                                    }};
                                }};
                            }};
                        }}),
                        add(new TemplateParameter() {{
                            description = "facere";
                            fields = new String[]{{
                                add("fuga"),
                                add("ab"),
                                add("ex"),
                                add("consectetur"),
                            }};
                            name = "Aaron O'Kon";
                            validation = new ParameterValidation() {{
                                regex = new RegexValidation() {{
                                    regexes = new String[]{{
                                        add("perferendis"),
                                        add("laborum"),
                                        add("omnis"),
                                    }};
                                }};
                                values = new ValueValidation() {{
                                    values = new String[]{{
                                        add("tenetur"),
                                        add("sapiente"),
                                    }};
                                }};
                            }};
                        }}),
                    }};
                    placement = new WorkflowTemplatePlacementInput() {{
                        clusterSelector = new ClusterSelector() {{
                            clusterLabels = new java.util.HashMap<String, String>() {{
                                put("adipisci", "non");
                            }};
                            zone = "optio";
                        }};;
                        managedCluster = new ManagedClusterInput() {{
                            clusterName = "illum";
                            config = new ClusterConfigInput() {{
                                autoscalingConfig = new AutoscalingConfig() {{
                                    policyUri = "at";
                                }};;
                                auxiliaryNodeGroups = new org.openapis.openapi.models.shared.AuxiliaryNodeGroupInput[]{{
                                    add(new AuxiliaryNodeGroupInput() {{
                                        nodeGroup = new NodeGroupInput() {{
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("ipsam", "esse");
                                                put("laborum", "perspiciatis");
                                                put("voluptates", "eum");
                                            }};
                                            name = "Billie Kuhic";
                                            nodeGroupConfig = new InstanceGroupConfigInput() {{
                                                accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 648497;
                                                        acceleratorTypeUri = "quidem";
                                                    }}),
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 126512;
                                                        acceleratorTypeUri = "et";
                                                    }}),
                                                }};
                                                diskConfig = new DiskConfig() {{
                                                    bootDiskSizeGb = 860027;
                                                    bootDiskType = "magni";
                                                    localSsdInterface = "natus";
                                                    numLocalSsds = 851199;
                                                }};
                                                imageUri = "a";
                                                machineTypeUri = "impedit";
                                                minCpuPlatform = "unde";
                                                numInstances = 281454;
                                                preemptibility = InstanceGroupConfigPreemptibilityEnum.SPOT;
                                            }};
                                            roles = new org.openapis.openapi.models.shared.NodeGroupRolesEnum[]{{
                                                add(NodeGroupRolesEnum.DRIVER),
                                                add(NodeGroupRolesEnum.DRIVER),
                                            }};
                                        }};
                                        nodeGroupId = "quisquam";
                                    }}),
                                    add(new AuxiliaryNodeGroupInput() {{
                                        nodeGroup = new NodeGroupInput() {{
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("dignissimos", "iste");
                                                put("provident", "dolor");
                                                put("sint", "aperiam");
                                                put("eaque", "eum");
                                            }};
                                            name = "Maggie Jones";
                                            nodeGroupConfig = new InstanceGroupConfigInput() {{
                                                accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 41306;
                                                        acceleratorTypeUri = "voluptatem";
                                                    }}),
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 4747;
                                                        acceleratorTypeUri = "velit";
                                                    }}),
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 356805;
                                                        acceleratorTypeUri = "quis";
                                                    }}),
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 242532;
                                                        acceleratorTypeUri = "ratione";
                                                    }}),
                                                }};
                                                diskConfig = new DiskConfig() {{
                                                    bootDiskSizeGb = 555386;
                                                    bootDiskType = "maxime";
                                                    localSsdInterface = "recusandae";
                                                    numLocalSsds = 767466;
                                                }};
                                                imageUri = "doloremque";
                                                machineTypeUri = "totam";
                                                minCpuPlatform = "iure";
                                                numInstances = 982927;
                                                preemptibility = InstanceGroupConfigPreemptibilityEnum.PREEMPTIBLE;
                                            }};
                                            roles = new org.openapis.openapi.models.shared.NodeGroupRolesEnum[]{{
                                                add(NodeGroupRolesEnum.ROLE_UNSPECIFIED),
                                            }};
                                        }};
                                        nodeGroupId = "necessitatibus";
                                    }}),
                                    add(new AuxiliaryNodeGroupInput() {{
                                        nodeGroup = new NodeGroupInput() {{
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("dicta", "ipsam");
                                                put("consequuntur", "cumque");
                                                put("quidem", "non");
                                            }};
                                            name = "Ms. Joan Mann";
                                            nodeGroupConfig = new InstanceGroupConfigInput() {{
                                                accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 562065;
                                                        acceleratorTypeUri = "necessitatibus";
                                                    }}),
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 218783;
                                                        acceleratorTypeUri = "impedit";
                                                    }}),
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 550799;
                                                        acceleratorTypeUri = "illum";
                                                    }}),
                                                }};
                                                diskConfig = new DiskConfig() {{
                                                    bootDiskSizeGb = 717853;
                                                    bootDiskType = "voluptatem";
                                                    localSsdInterface = "non";
                                                    numLocalSsds = 310195;
                                                }};
                                                imageUri = "consequatur";
                                                machineTypeUri = "laudantium";
                                                minCpuPlatform = "repellendus";
                                                numInstances = 415953;
                                                preemptibility = InstanceGroupConfigPreemptibilityEnum.SPOT;
                                            }};
                                            roles = new org.openapis.openapi.models.shared.NodeGroupRolesEnum[]{{
                                                add(NodeGroupRolesEnum.ROLE_UNSPECIFIED),
                                            }};
                                        }};
                                        nodeGroupId = "quaerat";
                                    }}),
                                    add(new AuxiliaryNodeGroupInput() {{
                                        nodeGroup = new NodeGroupInput() {{
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("tenetur", "assumenda");
                                                put("dolore", "enim");
                                                put("ullam", "perspiciatis");
                                                put("alias", "ex");
                                            }};
                                            name = "Keith Crist";
                                            nodeGroupConfig = new InstanceGroupConfigInput() {{
                                                accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 255264;
                                                        acceleratorTypeUri = "rem";
                                                    }}),
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 884622;
                                                        acceleratorTypeUri = "omnis";
                                                    }}),
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 206451;
                                                        acceleratorTypeUri = "corporis";
                                                    }}),
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 797527;
                                                        acceleratorTypeUri = "dolores";
                                                    }}),
                                                }};
                                                diskConfig = new DiskConfig() {{
                                                    bootDiskSizeGb = 808050;
                                                    bootDiskType = "excepturi";
                                                    localSsdInterface = "recusandae";
                                                    numLocalSsds = 551778;
                                                }};
                                                imageUri = "dicta";
                                                machineTypeUri = "sapiente";
                                                minCpuPlatform = "ipsum";
                                                numInstances = 9358;
                                                preemptibility = InstanceGroupConfigPreemptibilityEnum.PREEMPTIBLE;
                                            }};
                                            roles = new org.openapis.openapi.models.shared.NodeGroupRolesEnum[]{{
                                                add(NodeGroupRolesEnum.ROLE_UNSPECIFIED),
                                                add(NodeGroupRolesEnum.DRIVER),
                                                add(NodeGroupRolesEnum.ROLE_UNSPECIFIED),
                                                add(NodeGroupRolesEnum.ROLE_UNSPECIFIED),
                                            }};
                                        }};
                                        nodeGroupId = "magni";
                                    }}),
                                }};
                                configBucket = "aperiam";
                                dataprocMetricConfig = new DataprocMetricConfig() {{
                                    metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                        add(new Metric() {{
                                            metricOverrides = new String[]{{
                                                add("iusto"),
                                                add("magni"),
                                                add("beatae"),
                                                add("aliquid"),
                                            }};
                                            metricSource = MetricMetricSourceEnum.HDFS;
                                        }}),
                                    }};
                                }};;
                                encryptionConfig = new EncryptionConfig() {{
                                    gcePdKmsKeyName = "voluptate";
                                    kmsKey = "vel";
                                }};;
                                endpointConfig = new EndpointConfigInput() {{
                                    enableHttpPortAccess = false;
                                }};;
                                gceClusterConfig = new GceClusterConfig() {{
                                    confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                                        enableConfidentialCompute = false;
                                    }};;
                                    internalIpOnly = false;
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("sit", "vel");
                                        put("laboriosam", "quaerat");
                                    }};
                                    networkUri = "quasi";
                                    nodeGroupAffinity = new NodeGroupAffinity() {{
                                        nodeGroupUri = "rem";
                                    }};;
                                    privateIpv6GoogleAccess = GceClusterConfigPrivateIpv6GoogleAccessEnum.INHERIT_FROM_SUBNETWORK;
                                    reservationAffinity = new ReservationAffinity() {{
                                        consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.TYPE_UNSPECIFIED;
                                        key = "assumenda";
                                        values = new String[]{{
                                            add("facere"),
                                            add("sed"),
                                            add("inventore"),
                                        }};
                                    }};;
                                    serviceAccount = "voluptatibus";
                                    serviceAccountScopes = new String[]{{
                                        add("deserunt"),
                                        add("repellendus"),
                                        add("consequatur"),
                                    }};
                                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                        enableIntegrityMonitoring = false;
                                        enableSecureBoot = false;
                                        enableVtpm = false;
                                    }};;
                                    subnetworkUri = "adipisci";
                                    tags = new String[]{{
                                        add("optio"),
                                    }};
                                    zoneUri = "tempora";
                                }};;
                                gkeClusterConfig = new GkeClusterConfig() {{
                                    gkeClusterTarget = "debitis";
                                    namespacedGkeDeploymentTarget = new NamespacedGkeDeploymentTarget() {{
                                        clusterNamespace = "cumque";
                                        targetGkeCluster = "maxime";
                                    }};;
                                    nodePoolTarget = new org.openapis.openapi.models.shared.GkeNodePoolTarget[]{{
                                        add(new GkeNodePoolTarget() {{
                                            nodePool = "beatae";
                                            nodePoolConfig = new GkeNodePoolConfig() {{
                                                autoscaling = new GkeNodePoolAutoscalingConfig() {{
                                                    maxNodeCount = 662068;
                                                    minNodeCount = 9060;
                                                }};
                                                config = new GkeNodeConfig() {{
                                                    accelerators = new org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig[]{{
                                                        add(new GkeNodePoolAcceleratorConfig() {{
                                                            acceleratorCount = "ratione";
                                                            acceleratorType = "iure";
                                                            gpuPartitionSize = "tempora";
                                                        }}),
                                                        add(new GkeNodePoolAcceleratorConfig() {{
                                                            acceleratorCount = "eos";
                                                            acceleratorType = "natus";
                                                            gpuPartitionSize = "voluptatem";
                                                        }}),
                                                        add(new GkeNodePoolAcceleratorConfig() {{
                                                            acceleratorCount = "suscipit";
                                                            acceleratorType = "laudantium";
                                                            gpuPartitionSize = "facilis";
                                                        }}),
                                                    }};
                                                    bootDiskKmsKey = "laudantium";
                                                    localSsdCount = 353075;
                                                    machineType = "aut";
                                                    minCpuPlatform = "quia";
                                                    preemptible = false;
                                                    spot = false;
                                                }};
                                                locations = new String[]{{
                                                    add("quaerat"),
                                                    add("corporis"),
                                                    add("accusamus"),
                                                }};
                                            }};
                                            roles = new org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum[]{{
                                                add(GkeNodePoolTargetRolesEnum.SPARK_EXECUTOR),
                                                add(GkeNodePoolTargetRolesEnum.CONTROLLER),
                                            }};
                                        }}),
                                    }};
                                }};;
                                initializationActions = new org.openapis.openapi.models.shared.NodeInitializationAction[]{{
                                    add(new NodeInitializationAction() {{
                                        executableFile = "quidem";
                                        executionTimeout = "quisquam";
                                    }}),
                                }};
                                lifecycleConfig = new LifecycleConfigInput() {{
                                    autoDeleteTime = "praesentium";
                                    autoDeleteTtl = "tempora";
                                    idleDeleteTtl = "ipsam";
                                }};;
                                masterConfig = new InstanceGroupConfigInput() {{
                                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 196497;
                                            acceleratorTypeUri = "magni";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 29881;
                                            acceleratorTypeUri = "est";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 226181;
                                            acceleratorTypeUri = "veritatis";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 621810;
                                            acceleratorTypeUri = "voluptatibus";
                                        }}),
                                    }};
                                    diskConfig = new DiskConfig() {{
                                        bootDiskSizeGb = 258140;
                                        bootDiskType = "rerum";
                                        localSsdInterface = "dolorum";
                                        numLocalSsds = 841816;
                                    }};;
                                    imageUri = "earum";
                                    machineTypeUri = "excepturi";
                                    minCpuPlatform = "numquam";
                                    numInstances = 476801;
                                    preemptibility = InstanceGroupConfigPreemptibilityEnum.SPOT;
                                }};;
                                metastoreConfig = new MetastoreConfig() {{
                                    dataprocMetastoreService = "error";
                                }};;
                                secondaryWorkerConfig = new InstanceGroupConfigInput() {{
                                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 528742;
                                            acceleratorTypeUri = "aliquid";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 469384;
                                            acceleratorTypeUri = "facilis";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 759451;
                                            acceleratorTypeUri = "incidunt";
                                        }}),
                                    }};
                                    diskConfig = new DiskConfig() {{
                                        bootDiskSizeGb = 178201;
                                        bootDiskType = "magnam";
                                        localSsdInterface = "dolores";
                                        numLocalSsds = 400492;
                                    }};;
                                    imageUri = "eum";
                                    machineTypeUri = "vel";
                                    minCpuPlatform = "ad";
                                    numInstances = 552287;
                                    preemptibility = InstanceGroupConfigPreemptibilityEnum.PREEMPTIBILITY_UNSPECIFIED;
                                }};;
                                securityConfig = new SecurityConfig() {{
                                    identityConfig = new IdentityConfig() {{
                                        userServiceAccountMapping = new java.util.HashMap<String, String>() {{
                                            put("quibusdam", "fugiat");
                                            put("impedit", "culpa");
                                        }};
                                    }};;
                                    kerberosConfig = new KerberosConfig() {{
                                        crossRealmTrustAdminServer = "atque";
                                        crossRealmTrustKdc = "voluptates";
                                        crossRealmTrustRealm = "maiores";
                                        crossRealmTrustSharedPasswordUri = "nemo";
                                        enableKerberos = false;
                                        kdcDbKeyUri = "illo";
                                        keyPasswordUri = "doloribus";
                                        keystorePasswordUri = "cumque";
                                        keystoreUri = "expedita";
                                        kmsKeyUri = "modi";
                                        realm = "cumque";
                                        rootPrincipalPasswordUri = "ipsam";
                                        tgtLifetimeHours = 578081;
                                        truststorePasswordUri = "ipsum";
                                        truststoreUri = "accusamus";
                                    }};;
                                }};;
                                softwareConfig = new SoftwareConfig() {{
                                    imageVersion = "quisquam";
                                    optionalComponents = new org.openapis.openapi.models.shared.SoftwareConfigOptionalComponentsEnum[]{{
                                        add(SoftwareConfigOptionalComponentsEnum.DOCKER),
                                    }};
                                    properties = new java.util.HashMap<String, String>() {{
                                        put("temporibus", "mollitia");
                                        put("id", "quibusdam");
                                        put("ipsa", "accusamus");
                                        put("placeat", "quam");
                                    }};
                                }};;
                                tempBucket = "similique";
                                workerConfig = new InstanceGroupConfigInput() {{
                                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 904983;
                                            acceleratorTypeUri = "facere";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 748723;
                                            acceleratorTypeUri = "at";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 561121;
                                            acceleratorTypeUri = "aut";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 836548;
                                            acceleratorTypeUri = "tenetur";
                                        }}),
                                    }};
                                    diskConfig = new DiskConfig() {{
                                        bootDiskSizeGb = 278050;
                                        bootDiskType = "numquam";
                                        localSsdInterface = "corrupti";
                                        numLocalSsds = 630237;
                                    }};;
                                    imageUri = "dolore";
                                    machineTypeUri = "esse";
                                    minCpuPlatform = "reiciendis";
                                    numInstances = 611792;
                                    preemptibility = InstanceGroupConfigPreemptibilityEnum.PREEMPTIBILITY_UNSPECIFIED;
                                }};;
                            }};;
                            labels = new java.util.HashMap<String, String>() {{
                                put("aut", "impedit");
                                put("minima", "quos");
                                put("blanditiis", "quas");
                            }};
                        }};;
                    }};;
                    version = 28362;
                }};;
                accessToken = "provident";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "vero";
                key = "fuga";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "error";
                uploadProtocol = "recusandae";
            }};            

            DataprocProjectsRegionsWorkflowTemplatesCreateResponse res = sdk.projects.dataprocProjectsRegionsWorkflowTemplatesCreate(req, new DataprocProjectsRegionsWorkflowTemplatesCreateSecurity("a", "consectetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.workflowTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataprocProjectsRegionsWorkflowTemplatesDelete

Deletes a workflow template. It does not cancel in-progress workflows.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesDeleteRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesDeleteResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsWorkflowTemplatesDeleteRequest req = new DataprocProjectsRegionsWorkflowTemplatesDeleteRequest("sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "assumenda";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "delectus";
                key = "odio";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "quam";
                uploadProtocol = "omnis";
                version = 626676L;
            }};            

            DataprocProjectsRegionsWorkflowTemplatesDeleteResponse res = sdk.projects.dataprocProjectsRegionsWorkflowTemplatesDelete(req, new DataprocProjectsRegionsWorkflowTemplatesDeleteSecurity("asperiores", "modi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataprocProjectsRegionsWorkflowTemplatesGet

Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesGetRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesGetResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsWorkflowTemplatesGetRequest req = new DataprocProjectsRegionsWorkflowTemplatesGetRequest("facere") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quis";
                alt = AltEnum.MEDIA;
                callback = "sed";
                fields = "non";
                key = "porro";
                oauthToken = "fugiat";
                pageSize = 743938L;
                pageToken = "ipsa";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "labore";
                uploadProtocol = "vero";
                version = 177651L;
            }};            

            DataprocProjectsRegionsWorkflowTemplatesGetResponse res = sdk.projects.dataprocProjectsRegionsWorkflowTemplatesGet(req, new DataprocProjectsRegionsWorkflowTemplatesGetSecurity("quas", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.workflowTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataprocProjectsRegionsWorkflowTemplatesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetIamPolicyRequest;
import org.openapis.openapi.models.shared.GetPolicyOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest req = new DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest("architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 483501;
                    }};;
                }};;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "laudantium";
                key = "modi";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "nulla";
                uploadProtocol = "repudiandae";
            }};            

            DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyResponse res = sdk.projects.dataprocProjectsRegionsWorkflowTemplatesGetIamPolicy(req, new DataprocProjectsRegionsWorkflowTemplatesGetIamPolicySecurity("quibusdam", "praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataprocProjectsRegionsWorkflowTemplatesInstantiate

Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesInstantiateResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesInstantiateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstantiateWorkflowTemplateRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest req = new DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                instantiateWorkflowTemplateRequest = new InstantiateWorkflowTemplateRequest() {{
                    parameters = new java.util.HashMap<String, String>() {{
                        put("quae", "eum");
                        put("nostrum", "eveniet");
                        put("laboriosam", "ratione");
                    }};
                    requestId = "blanditiis";
                    version = 697729;
                }};;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "dolores";
                key = "consequatur";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "quia";
                uploadType = "quidem";
                uploadProtocol = "voluptas";
            }};            

            DataprocProjectsRegionsWorkflowTemplatesInstantiateResponse res = sdk.projects.dataprocProjectsRegionsWorkflowTemplatesInstantiate(req, new DataprocProjectsRegionsWorkflowTemplatesInstantiateSecurity("quo", "laudantium") {{
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

## dataprocProjectsRegionsWorkflowTemplatesInstantiateInline

Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineSecurity;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AutoscalingConfig;
import org.openapis.openapi.models.shared.AuxiliaryNodeGroupInput;
import org.openapis.openapi.models.shared.ClusterConfigInput;
import org.openapis.openapi.models.shared.ClusterSelector;
import org.openapis.openapi.models.shared.ConfidentialInstanceConfig;
import org.openapis.openapi.models.shared.DataprocMetricConfig;
import org.openapis.openapi.models.shared.DiskConfig;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.EndpointConfigInput;
import org.openapis.openapi.models.shared.GceClusterConfig;
import org.openapis.openapi.models.shared.GceClusterConfigPrivateIpv6GoogleAccessEnum;
import org.openapis.openapi.models.shared.GkeClusterConfig;
import org.openapis.openapi.models.shared.GkeNodeConfig;
import org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig;
import org.openapis.openapi.models.shared.GkeNodePoolAutoscalingConfig;
import org.openapis.openapi.models.shared.GkeNodePoolConfig;
import org.openapis.openapi.models.shared.GkeNodePoolTarget;
import org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum;
import org.openapis.openapi.models.shared.HadoopJob;
import org.openapis.openapi.models.shared.HiveJob;
import org.openapis.openapi.models.shared.IdentityConfig;
import org.openapis.openapi.models.shared.InstanceGroupConfigInput;
import org.openapis.openapi.models.shared.InstanceGroupConfigPreemptibilityEnum;
import org.openapis.openapi.models.shared.JobScheduling;
import org.openapis.openapi.models.shared.KerberosConfig;
import org.openapis.openapi.models.shared.LifecycleConfigInput;
import org.openapis.openapi.models.shared.LoggingConfig;
import org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum;
import org.openapis.openapi.models.shared.ManagedClusterInput;
import org.openapis.openapi.models.shared.MetastoreConfig;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.MetricMetricSourceEnum;
import org.openapis.openapi.models.shared.NamespacedGkeDeploymentTarget;
import org.openapis.openapi.models.shared.NodeGroupAffinity;
import org.openapis.openapi.models.shared.NodeGroupInput;
import org.openapis.openapi.models.shared.NodeGroupRolesEnum;
import org.openapis.openapi.models.shared.NodeInitializationAction;
import org.openapis.openapi.models.shared.OrderedJob;
import org.openapis.openapi.models.shared.ParameterValidation;
import org.openapis.openapi.models.shared.PigJob;
import org.openapis.openapi.models.shared.PrestoJob;
import org.openapis.openapi.models.shared.PySparkJob;
import org.openapis.openapi.models.shared.QueryList;
import org.openapis.openapi.models.shared.RegexValidation;
import org.openapis.openapi.models.shared.ReservationAffinity;
import org.openapis.openapi.models.shared.ReservationAffinityConsumeReservationTypeEnum;
import org.openapis.openapi.models.shared.SecurityConfig;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.SoftwareConfig;
import org.openapis.openapi.models.shared.SoftwareConfigOptionalComponentsEnum;
import org.openapis.openapi.models.shared.SparkJob;
import org.openapis.openapi.models.shared.SparkRJob;
import org.openapis.openapi.models.shared.SparkSqlJob;
import org.openapis.openapi.models.shared.TemplateParameter;
import org.openapis.openapi.models.shared.TrinoJob;
import org.openapis.openapi.models.shared.ValueValidation;
import org.openapis.openapi.models.shared.WorkflowTemplateInput;
import org.openapis.openapi.models.shared.WorkflowTemplatePlacementInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest req = new DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                workflowTemplateInput = new WorkflowTemplateInput() {{
                    dagTimeout = "omnis";
                    id = "23b7e135-84f7-4ae1-ac68-91f82ce11571";
                    jobs = new org.openapis.openapi.models.shared.OrderedJob[]{{
                        add(new OrderedJob() {{
                            hadoopJob = new HadoopJob() {{
                                archiveUris = new String[]{{
                                    add("dolorem"),
                                }};
                                args = new String[]{{
                                    add("exercitationem"),
                                }};
                                fileUris = new String[]{{
                                    add("voluptate"),
                                }};
                                jarFileUris = new String[]{{
                                    add("pariatur"),
                                    add("minus"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("fuga", LoggingConfigDriverLogLevelsEnum.INFO);
                                        put("cupiditate", LoggingConfigDriverLogLevelsEnum.FATAL);
                                        put("doloribus", LoggingConfigDriverLogLevelsEnum.WARN);
                                        put("quam", LoggingConfigDriverLogLevelsEnum.DEBUG);
                                    }};
                                }};
                                mainClass = "voluptates";
                                mainJarFileUri = "sequi";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("commodi", "vel");
                                    put("rem", "aliquid");
                                }};
                            }};
                            hiveJob = new HiveJob() {{
                                continueOnFailure = false;
                                jarFileUris = new String[]{{
                                    add("perspiciatis"),
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("itaque", "unde");
                                }};
                                queryFileUri = "cumque";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("repellendus"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("minus", "minima");
                                    put("a", "beatae");
                                    put("vitae", "veritatis");
                                    put("facere", "earum");
                                }};
                            }};
                            labels = new java.util.HashMap<String, String>() {{
                                put("dicta", "voluptatem");
                                put("odit", "aliquid");
                                put("pariatur", "enim");
                            }};
                            pigJob = new PigJob() {{
                                continueOnFailure = false;
                                jarFileUris = new String[]{{
                                    add("architecto"),
                                    add("est"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("facere", LoggingConfigDriverLogLevelsEnum.ALL);
                                        put("omnis", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                    }};
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("officiis", "expedita");
                                    put("quia", "vitae");
                                    put("odio", "quas");
                                    put("ipsa", "distinctio");
                                }};
                                queryFileUri = "placeat";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("eligendi"),
                                        add("sit"),
                                        add("possimus"),
                                        add("distinctio"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("assumenda", "illum");
                                    put("soluta", "magnam");
                                    put("laudantium", "tempora");
                                }};
                            }};
                            prerequisiteStepIds = new String[]{{
                                add("doloremque"),
                                add("corrupti"),
                            }};
                            prestoJob = new PrestoJob() {{
                                clientTags = new String[]{{
                                    add("facilis"),
                                    add("aliquam"),
                                    add("repudiandae"),
                                    add("amet"),
                                }};
                                continueOnFailure = false;
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("ab", LoggingConfigDriverLogLevelsEnum.FATAL);
                                        put("eum", LoggingConfigDriverLogLevelsEnum.ERROR);
                                        put("placeat", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                    }};
                                }};
                                outputFormat = "ad";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("porro", "labore");
                                    put("impedit", "ut");
                                    put("earum", "ullam");
                                }};
                                queryFileUri = "numquam";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("cupiditate"),
                                        add("occaecati"),
                                    }};
                                }};
                            }};
                            pysparkJob = new PySparkJob() {{
                                archiveUris = new String[]{{
                                    add("fuga"),
                                    add("consectetur"),
                                    add("modi"),
                                    add("aspernatur"),
                                }};
                                args = new String[]{{
                                    add("suscipit"),
                                }};
                                fileUris = new String[]{{
                                    add("eveniet"),
                                }};
                                jarFileUris = new String[]{{
                                    add("nobis"),
                                    add("qui"),
                                    add("accusantium"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("impedit", LoggingConfigDriverLogLevelsEnum.OFF);
                                    }};
                                }};
                                mainPythonFileUri = "voluptate";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("est", "et");
                                    put("expedita", "quibusdam");
                                    put("quos", "maiores");
                                }};
                                pythonFileUris = new String[]{{
                                    add("in"),
                                    add("culpa"),
                                    add("doloremque"),
                                }};
                            }};
                            scheduling = new JobScheduling() {{
                                maxFailuresPerHour = 681336;
                                maxFailuresTotal = 117546;
                            }};
                            sparkJob = new SparkJob() {{
                                archiveUris = new String[]{{
                                    add("suscipit"),
                                }};
                                args = new String[]{{
                                    add("officiis"),
                                    add("dignissimos"),
                                    add("fugit"),
                                    add("ratione"),
                                }};
                                fileUris = new String[]{{
                                    add("quaerat"),
                                    add("aut"),
                                    add("natus"),
                                    add("esse"),
                                }};
                                jarFileUris = new String[]{{
                                    add("deserunt"),
                                    add("ratione"),
                                    add("ipsa"),
                                    add("debitis"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("deserunt", LoggingConfigDriverLogLevelsEnum.OFF);
                                        put("ducimus", LoggingConfigDriverLogLevelsEnum.ALL);
                                        put("ipsam", LoggingConfigDriverLogLevelsEnum.ERROR);
                                    }};
                                }};
                                mainClass = "quia";
                                mainJarFileUri = "omnis";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("qui", "explicabo");
                                }};
                            }};
                            sparkRJob = new SparkRJob() {{
                                archiveUris = new String[]{{
                                    add("amet"),
                                }};
                                args = new String[]{{
                                    add("fugiat"),
                                }};
                                fileUris = new String[]{{
                                    add("velit"),
                                    add("hic"),
                                    add("ullam"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("itaque", LoggingConfigDriverLogLevelsEnum.ERROR);
                                        put("iusto", LoggingConfigDriverLogLevelsEnum.INFO);
                                        put("provident", LoggingConfigDriverLogLevelsEnum.WARN);
                                    }};
                                }};
                                mainRFileUri = "assumenda";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("odit", "vero");
                                }};
                            }};
                            sparkSqlJob = new SparkSqlJob() {{
                                jarFileUris = new String[]{{
                                    add("optio"),
                                    add("quasi"),
                                    add("repellat"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("magnam", LoggingConfigDriverLogLevelsEnum.WARN);
                                        put("amet", LoggingConfigDriverLogLevelsEnum.INFO);
                                        put("sunt", LoggingConfigDriverLogLevelsEnum.DEBUG);
                                    }};
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("illum", "porro");
                                    put("quaerat", "magni");
                                    put("cumque", "quos");
                                    put("in", "commodi");
                                }};
                                queryFileUri = "maxime";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("minus"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("possimus", "delectus");
                                }};
                            }};
                            stepId = "harum";
                            trinoJob = new TrinoJob() {{
                                clientTags = new String[]{{
                                    add("eligendi"),
                                    add("hic"),
                                }};
                                continueOnFailure = false;
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("illo", LoggingConfigDriverLogLevelsEnum.ERROR);
                                        put("esse", LoggingConfigDriverLogLevelsEnum.DEBUG);
                                        put("explicabo", LoggingConfigDriverLogLevelsEnum.ALL);
                                        put("alias", LoggingConfigDriverLogLevelsEnum.OFF);
                                    }};
                                }};
                                outputFormat = "quos";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("vitae", "maiores");
                                    put("nam", "architecto");
                                }};
                                queryFileUri = "rerum";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("eos"),
                                        add("dolorem"),
                                        add("hic"),
                                        add("repellendus"),
                                    }};
                                }};
                            }};
                        }}),
                        add(new OrderedJob() {{
                            hadoopJob = new HadoopJob() {{
                                archiveUris = new String[]{{
                                    add("ab"),
                                    add("magnam"),
                                    add("pariatur"),
                                }};
                                args = new String[]{{
                                    add("autem"),
                                    add("tempore"),
                                    add("recusandae"),
                                }};
                                fileUris = new String[]{{
                                    add("officia"),
                                    add("voluptas"),
                                }};
                                jarFileUris = new String[]{{
                                    add("corporis"),
                                    add("excepturi"),
                                    add("natus"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("necessitatibus", LoggingConfigDriverLogLevelsEnum.ALL);
                                        put("dolores", LoggingConfigDriverLogLevelsEnum.ERROR);
                                        put("vero", LoggingConfigDriverLogLevelsEnum.ALL);
                                    }};
                                }};
                                mainClass = "voluptatem";
                                mainJarFileUri = "temporibus";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("quae", "commodi");
                                    put("a", "minus");
                                    put("sed", "nam");
                                }};
                            }};
                            hiveJob = new HiveJob() {{
                                continueOnFailure = false;
                                jarFileUris = new String[]{{
                                    add("iusto"),
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("deserunt", "sed");
                                }};
                                queryFileUri = "blanditiis";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("placeat"),
                                        add("ullam"),
                                        add("molestiae"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("rem", "nemo");
                                    put("non", "recusandae");
                                    put("omnis", "ipsa");
                                    put("aliquam", "dolor");
                                }};
                            }};
                            labels = new java.util.HashMap<String, String>() {{
                                put("quibusdam", "magni");
                                put("consequuntur", "consequuntur");
                                put("eius", "commodi");
                            }};
                            pigJob = new PigJob() {{
                                continueOnFailure = false;
                                jarFileUris = new String[]{{
                                    add("vel"),
                                    add("cupiditate"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("nisi", LoggingConfigDriverLogLevelsEnum.ALL);
                                        put("modi", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                    }};
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("sit", "voluptatum");
                                    put("tempora", "delectus");
                                }};
                                queryFileUri = "quam";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("libero"),
                                        add("ratione"),
                                        add("molestiae"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("saepe", "maiores");
                                    put("accusantium", "sed");
                                    put("eos", "consequuntur");
                                    put("quis", "vitae");
                                }};
                            }};
                            prerequisiteStepIds = new String[]{{
                                add("labore"),
                                add("fugiat"),
                                add("quidem"),
                            }};
                            prestoJob = new PrestoJob() {{
                                clientTags = new String[]{{
                                    add("veniam"),
                                    add("modi"),
                                }};
                                continueOnFailure = false;
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("quae", LoggingConfigDriverLogLevelsEnum.WARN);
                                    }};
                                }};
                                outputFormat = "possimus";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("suscipit", "ex");
                                    put("sint", "est");
                                    put("doloribus", "provident");
                                    put("alias", "deserunt");
                                }};
                                queryFileUri = "fugit";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("quo"),
                                        add("molestiae"),
                                    }};
                                }};
                            }};
                            pysparkJob = new PySparkJob() {{
                                archiveUris = new String[]{{
                                    add("facere"),
                                    add("impedit"),
                                    add("cupiditate"),
                                    add("deleniti"),
                                }};
                                args = new String[]{{
                                    add("maiores"),
                                }};
                                fileUris = new String[]{{
                                    add("aliquid"),
                                }};
                                jarFileUris = new String[]{{
                                    add("unde"),
                                    add("corrupti"),
                                    add("quae"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("ea", LoggingConfigDriverLogLevelsEnum.ERROR);
                                        put("nam", LoggingConfigDriverLogLevelsEnum.TRACE);
                                        put("adipisci", LoggingConfigDriverLogLevelsEnum.FATAL);
                                        put("hic", LoggingConfigDriverLogLevelsEnum.WARN);
                                    }};
                                }};
                                mainPythonFileUri = "fuga";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("labore", "laudantium");
                                }};
                                pythonFileUris = new String[]{{
                                    add("adipisci"),
                                    add("veritatis"),
                                    add("nam"),
                                    add("voluptatibus"),
                                }};
                            }};
                            scheduling = new JobScheduling() {{
                                maxFailuresPerHour = 301865;
                                maxFailuresTotal = 49285;
                            }};
                            sparkJob = new SparkJob() {{
                                archiveUris = new String[]{{
                                    add("itaque"),
                                    add("necessitatibus"),
                                }};
                                args = new String[]{{
                                    add("doloribus"),
                                    add("eligendi"),
                                }};
                                fileUris = new String[]{{
                                    add("alias"),
                                    add("impedit"),
                                    add("numquam"),
                                    add("aspernatur"),
                                }};
                                jarFileUris = new String[]{{
                                    add("nihil"),
                                    add("voluptatum"),
                                    add("reiciendis"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("ullam", LoggingConfigDriverLogLevelsEnum.DEBUG);
                                    }};
                                }};
                                mainClass = "consequuntur";
                                mainJarFileUri = "voluptas";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("excepturi", "corrupti");
                                }};
                            }};
                            sparkRJob = new SparkRJob() {{
                                archiveUris = new String[]{{
                                    add("perferendis"),
                                    add("quibusdam"),
                                    add("impedit"),
                                }};
                                args = new String[]{{
                                    add("nisi"),
                                    add("nisi"),
                                }};
                                fileUris = new String[]{{
                                    add("fugit"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("maxime", LoggingConfigDriverLogLevelsEnum.FATAL);
                                        put("expedita", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                    }};
                                }};
                                mainRFileUri = "ea";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("totam", "optio");
                                    put("est", "inventore");
                                    put("consequuntur", "repellendus");
                                    put("sit", "dolores");
                                }};
                            }};
                            sparkSqlJob = new SparkSqlJob() {{
                                jarFileUris = new String[]{{
                                    add("aspernatur"),
                                    add("perspiciatis"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("odio", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                    }};
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("deleniti", "possimus");
                                    put("ipsam", "odio");
                                    put("fugit", "aspernatur");
                                }};
                                queryFileUri = "at";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("praesentium"),
                                        add("sint"),
                                        add("exercitationem"),
                                        add("cum"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("facilis", "placeat");
                                    put("reiciendis", "dolores");
                                    put("dolore", "pariatur");
                                }};
                            }};
                            stepId = "facilis";
                            trinoJob = new TrinoJob() {{
                                clientTags = new String[]{{
                                    add("nemo"),
                                    add("natus"),
                                    add("nisi"),
                                }};
                                continueOnFailure = false;
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("amet", LoggingConfigDriverLogLevelsEnum.ALL);
                                        put("nostrum", LoggingConfigDriverLogLevelsEnum.ALL);
                                        put("tenetur", LoggingConfigDriverLogLevelsEnum.INFO);
                                    }};
                                }};
                                outputFormat = "dolore";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("velit", "adipisci");
                                    put("cupiditate", "occaecati");
                                }};
                                queryFileUri = "numquam";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("molestiae"),
                                        add("quas"),
                                        add("repellendus"),
                                        add("saepe"),
                                    }};
                                }};
                            }};
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("distinctio", "vel");
                    }};
                    parameters = new org.openapis.openapi.models.shared.TemplateParameter[]{{
                        add(new TemplateParameter() {{
                            description = "iste";
                            fields = new String[]{{
                                add("corrupti"),
                            }};
                            name = "Courtney Hermann";
                            validation = new ParameterValidation() {{
                                regex = new RegexValidation() {{
                                    regexes = new String[]{{
                                        add("in"),
                                        add("delectus"),
                                        add("commodi"),
                                    }};
                                }};
                                values = new ValueValidation() {{
                                    values = new String[]{{
                                        add("fugit"),
                                        add("ullam"),
                                    }};
                                }};
                            }};
                        }}),
                        add(new TemplateParameter() {{
                            description = "ullam";
                            fields = new String[]{{
                                add("est"),
                            }};
                            name = "Irma Ferry";
                            validation = new ParameterValidation() {{
                                regex = new RegexValidation() {{
                                    regexes = new String[]{{
                                        add("eligendi"),
                                        add("incidunt"),
                                        add("deleniti"),
                                    }};
                                }};
                                values = new ValueValidation() {{
                                    values = new String[]{{
                                        add("est"),
                                    }};
                                }};
                            }};
                        }}),
                        add(new TemplateParameter() {{
                            description = "reiciendis";
                            fields = new String[]{{
                                add("odit"),
                                add("consectetur"),
                                add("inventore"),
                                add("minima"),
                            }};
                            name = "Malcolm O'Connell";
                            validation = new ParameterValidation() {{
                                regex = new RegexValidation() {{
                                    regexes = new String[]{{
                                        add("illo"),
                                    }};
                                }};
                                values = new ValueValidation() {{
                                    values = new String[]{{
                                        add("incidunt"),
                                        add("eveniet"),
                                    }};
                                }};
                            }};
                        }}),
                        add(new TemplateParameter() {{
                            description = "quae";
                            fields = new String[]{{
                                add("asperiores"),
                                add("veniam"),
                            }};
                            name = "Aubrey Kemmer";
                            validation = new ParameterValidation() {{
                                regex = new RegexValidation() {{
                                    regexes = new String[]{{
                                        add("molestias"),
                                        add("architecto"),
                                    }};
                                }};
                                values = new ValueValidation() {{
                                    values = new String[]{{
                                        add("quisquam"),
                                        add("praesentium"),
                                        add("facilis"),
                                    }};
                                }};
                            }};
                        }}),
                    }};
                    placement = new WorkflowTemplatePlacementInput() {{
                        clusterSelector = new ClusterSelector() {{
                            clusterLabels = new java.util.HashMap<String, String>() {{
                                put("repudiandae", "maiores");
                                put("ipsum", "commodi");
                                put("vitae", "fugit");
                                put("nam", "ex");
                            }};
                            zone = "neque";
                        }};;
                        managedCluster = new ManagedClusterInput() {{
                            clusterName = "quod";
                            config = new ClusterConfigInput() {{
                                autoscalingConfig = new AutoscalingConfig() {{
                                    policyUri = "eos";
                                }};;
                                auxiliaryNodeGroups = new org.openapis.openapi.models.shared.AuxiliaryNodeGroupInput[]{{
                                    add(new AuxiliaryNodeGroupInput() {{
                                        nodeGroup = new NodeGroupInput() {{
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("a", "facere");
                                                put("id", "atque");
                                            }};
                                            name = "Sarah Kuhn";
                                            nodeGroupConfig = new InstanceGroupConfigInput() {{
                                                accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 435931;
                                                        acceleratorTypeUri = "deleniti";
                                                    }}),
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 638219;
                                                        acceleratorTypeUri = "sint";
                                                    }}),
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 674077;
                                                        acceleratorTypeUri = "dolor";
                                                    }}),
                                                }};
                                                diskConfig = new DiskConfig() {{
                                                    bootDiskSizeGb = 322773;
                                                    bootDiskType = "illum";
                                                    localSsdInterface = "sit";
                                                    numLocalSsds = 561399;
                                                }};
                                                imageUri = "voluptas";
                                                machineTypeUri = "expedita";
                                                minCpuPlatform = "voluptas";
                                                numInstances = 981865;
                                                preemptibility = InstanceGroupConfigPreemptibilityEnum.NON_PREEMPTIBLE;
                                            }};
                                            roles = new org.openapis.openapi.models.shared.NodeGroupRolesEnum[]{{
                                                add(NodeGroupRolesEnum.DRIVER),
                                                add(NodeGroupRolesEnum.DRIVER),
                                            }};
                                        }};
                                        nodeGroupId = "reiciendis";
                                    }}),
                                }};
                                configBucket = "consequatur";
                                dataprocMetricConfig = new DataprocMetricConfig() {{
                                    metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                        add(new Metric() {{
                                            metricOverrides = new String[]{{
                                                add("voluptates"),
                                            }};
                                            metricSource = MetricMetricSourceEnum.YARN;
                                        }}),
                                    }};
                                }};;
                                encryptionConfig = new EncryptionConfig() {{
                                    gcePdKmsKeyName = "maiores";
                                    kmsKey = "quaerat";
                                }};;
                                endpointConfig = new EndpointConfigInput() {{
                                    enableHttpPortAccess = false;
                                }};;
                                gceClusterConfig = new GceClusterConfig() {{
                                    confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                                        enableConfidentialCompute = false;
                                    }};;
                                    internalIpOnly = false;
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("non", "cum");
                                        put("incidunt", "dolores");
                                    }};
                                    networkUri = "enim";
                                    nodeGroupAffinity = new NodeGroupAffinity() {{
                                        nodeGroupUri = "nihil";
                                    }};;
                                    privateIpv6GoogleAccess = GceClusterConfigPrivateIpv6GoogleAccessEnum.OUTBOUND;
                                    reservationAffinity = new ReservationAffinity() {{
                                        consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.ANY_RESERVATION;
                                        key = "excepturi";
                                        values = new String[]{{
                                            add("quisquam"),
                                        }};
                                    }};;
                                    serviceAccount = "corrupti";
                                    serviceAccountScopes = new String[]{{
                                        add("cum"),
                                        add("quibusdam"),
                                        add("est"),
                                        add("commodi"),
                                    }};
                                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                        enableIntegrityMonitoring = false;
                                        enableSecureBoot = false;
                                        enableVtpm = false;
                                    }};;
                                    subnetworkUri = "similique";
                                    tags = new String[]{{
                                        add("dicta"),
                                        add("recusandae"),
                                    }};
                                    zoneUri = "sapiente";
                                }};;
                                gkeClusterConfig = new GkeClusterConfig() {{
                                    gkeClusterTarget = "id";
                                    namespacedGkeDeploymentTarget = new NamespacedGkeDeploymentTarget() {{
                                        clusterNamespace = "odit";
                                        targetGkeCluster = "inventore";
                                    }};;
                                    nodePoolTarget = new org.openapis.openapi.models.shared.GkeNodePoolTarget[]{{
                                        add(new GkeNodePoolTarget() {{
                                            nodePool = "atque";
                                            nodePoolConfig = new GkeNodePoolConfig() {{
                                                autoscaling = new GkeNodePoolAutoscalingConfig() {{
                                                    maxNodeCount = 129531;
                                                    minNodeCount = 356007;
                                                }};
                                                config = new GkeNodeConfig() {{
                                                    accelerators = new org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig[]{{
                                                        add(new GkeNodePoolAcceleratorConfig() {{
                                                            acceleratorCount = "doloribus";
                                                            acceleratorType = "pariatur";
                                                            gpuPartitionSize = "aut";
                                                        }}),
                                                        add(new GkeNodePoolAcceleratorConfig() {{
                                                            acceleratorCount = "similique";
                                                            acceleratorType = "iste";
                                                            gpuPartitionSize = "eveniet";
                                                        }}),
                                                        add(new GkeNodePoolAcceleratorConfig() {{
                                                            acceleratorCount = "nam";
                                                            acceleratorType = "animi";
                                                            gpuPartitionSize = "labore";
                                                        }}),
                                                    }};
                                                    bootDiskKmsKey = "voluptate";
                                                    localSsdCount = 973642;
                                                    machineType = "quam";
                                                    minCpuPlatform = "nulla";
                                                    preemptible = false;
                                                    spot = false;
                                                }};
                                                locations = new String[]{{
                                                    add("voluptates"),
                                                }};
                                            }};
                                            roles = new org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum[]{{
                                                add(GkeNodePoolTargetRolesEnum.ROLE_UNSPECIFIED),
                                                add(GkeNodePoolTargetRolesEnum.DEFAULT_),
                                                add(GkeNodePoolTargetRolesEnum.CONTROLLER),
                                                add(GkeNodePoolTargetRolesEnum.DEFAULT_),
                                            }};
                                        }}),
                                        add(new GkeNodePoolTarget() {{
                                            nodePool = "dolore";
                                            nodePoolConfig = new GkeNodePoolConfig() {{
                                                autoscaling = new GkeNodePoolAutoscalingConfig() {{
                                                    maxNodeCount = 29789;
                                                    minNodeCount = 849029;
                                                }};
                                                config = new GkeNodeConfig() {{
                                                    accelerators = new org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig[]{{
                                                        add(new GkeNodePoolAcceleratorConfig() {{
                                                            acceleratorCount = "culpa";
                                                            acceleratorType = "dicta";
                                                            gpuPartitionSize = "atque";
                                                        }}),
                                                        add(new GkeNodePoolAcceleratorConfig() {{
                                                            acceleratorCount = "ratione";
                                                            acceleratorType = "vitae";
                                                            gpuPartitionSize = "quisquam";
                                                        }}),
                                                    }};
                                                    bootDiskKmsKey = "atque";
                                                    localSsdCount = 472190;
                                                    machineType = "culpa";
                                                    minCpuPlatform = "temporibus";
                                                    preemptible = false;
                                                    spot = false;
                                                }};
                                                locations = new String[]{{
                                                    add("ad"),
                                                    add("cupiditate"),
                                                    add("suscipit"),
                                                    add("reiciendis"),
                                                }};
                                            }};
                                            roles = new org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum[]{{
                                                add(GkeNodePoolTargetRolesEnum.SPARK_EXECUTOR),
                                                add(GkeNodePoolTargetRolesEnum.ROLE_UNSPECIFIED),
                                                add(GkeNodePoolTargetRolesEnum.SPARK_DRIVER),
                                                add(GkeNodePoolTargetRolesEnum.SPARK_EXECUTOR),
                                            }};
                                        }}),
                                        add(new GkeNodePoolTarget() {{
                                            nodePool = "praesentium";
                                            nodePoolConfig = new GkeNodePoolConfig() {{
                                                autoscaling = new GkeNodePoolAutoscalingConfig() {{
                                                    maxNodeCount = 205390;
                                                    minNodeCount = 466022;
                                                }};
                                                config = new GkeNodeConfig() {{
                                                    accelerators = new org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig[]{{
                                                        add(new GkeNodePoolAcceleratorConfig() {{
                                                            acceleratorCount = "debitis";
                                                            acceleratorType = "voluptatum";
                                                            gpuPartitionSize = "voluptatem";
                                                        }}),
                                                        add(new GkeNodePoolAcceleratorConfig() {{
                                                            acceleratorCount = "quisquam";
                                                            acceleratorType = "vitae";
                                                            gpuPartitionSize = "cumque";
                                                        }}),
                                                        add(new GkeNodePoolAcceleratorConfig() {{
                                                            acceleratorCount = "architecto";
                                                            acceleratorType = "sint";
                                                            gpuPartitionSize = "eligendi";
                                                        }}),
                                                    }};
                                                    bootDiskKmsKey = "occaecati";
                                                    localSsdCount = 339651;
                                                    machineType = "tempore";
                                                    minCpuPlatform = "officia";
                                                    preemptible = false;
                                                    spot = false;
                                                }};
                                                locations = new String[]{{
                                                    add("unde"),
                                                    add("quas"),
                                                    add("laboriosam"),
                                                }};
                                            }};
                                            roles = new org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum[]{{
                                                add(GkeNodePoolTargetRolesEnum.CONTROLLER),
                                                add(GkeNodePoolTargetRolesEnum.SPARK_EXECUTOR),
                                            }};
                                        }}),
                                    }};
                                }};;
                                initializationActions = new org.openapis.openapi.models.shared.NodeInitializationAction[]{{
                                    add(new NodeInitializationAction() {{
                                        executableFile = "dolor";
                                        executionTimeout = "hic";
                                    }}),
                                    add(new NodeInitializationAction() {{
                                        executableFile = "iure";
                                        executionTimeout = "sint";
                                    }}),
                                    add(new NodeInitializationAction() {{
                                        executableFile = "autem";
                                        executionTimeout = "iste";
                                    }}),
                                }};
                                lifecycleConfig = new LifecycleConfigInput() {{
                                    autoDeleteTime = "cupiditate";
                                    autoDeleteTtl = "ab";
                                    idleDeleteTtl = "fuga";
                                }};;
                                masterConfig = new InstanceGroupConfigInput() {{
                                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 222771;
                                            acceleratorTypeUri = "voluptatum";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 561858;
                                            acceleratorTypeUri = "quod";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 920389;
                                            acceleratorTypeUri = "eaque";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 234347;
                                            acceleratorTypeUri = "autem";
                                        }}),
                                    }};
                                    diskConfig = new DiskConfig() {{
                                        bootDiskSizeGb = 110804;
                                        bootDiskType = "numquam";
                                        localSsdInterface = "incidunt";
                                        numLocalSsds = 266976;
                                    }};;
                                    imageUri = "quos";
                                    machineTypeUri = "minus";
                                    minCpuPlatform = "voluptate";
                                    numInstances = 623867;
                                    preemptibility = InstanceGroupConfigPreemptibilityEnum.NON_PREEMPTIBLE;
                                }};;
                                metastoreConfig = new MetastoreConfig() {{
                                    dataprocMetastoreService = "reprehenderit";
                                }};;
                                secondaryWorkerConfig = new InstanceGroupConfigInput() {{
                                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 10585;
                                            acceleratorTypeUri = "voluptates";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 964928;
                                            acceleratorTypeUri = "qui";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 962024;
                                            acceleratorTypeUri = "exercitationem";
                                        }}),
                                    }};
                                    diskConfig = new DiskConfig() {{
                                        bootDiskSizeGb = 217552;
                                        bootDiskType = "laboriosam";
                                        localSsdInterface = "doloremque";
                                        numLocalSsds = 153370;
                                    }};;
                                    imageUri = "voluptatum";
                                    machineTypeUri = "debitis";
                                    minCpuPlatform = "a";
                                    numInstances = 932444;
                                    preemptibility = InstanceGroupConfigPreemptibilityEnum.SPOT;
                                }};;
                                securityConfig = new SecurityConfig() {{
                                    identityConfig = new IdentityConfig() {{
                                        userServiceAccountMapping = new java.util.HashMap<String, String>() {{
                                            put("cupiditate", "adipisci");
                                            put("aliquam", "illo");
                                            put("veniam", "sed");
                                            put("necessitatibus", "possimus");
                                        }};
                                    }};;
                                    kerberosConfig = new KerberosConfig() {{
                                        crossRealmTrustAdminServer = "dignissimos";
                                        crossRealmTrustKdc = "itaque";
                                        crossRealmTrustRealm = "explicabo";
                                        crossRealmTrustSharedPasswordUri = "ullam";
                                        enableKerberos = false;
                                        kdcDbKeyUri = "non";
                                        keyPasswordUri = "delectus";
                                        keystorePasswordUri = "incidunt";
                                        keystoreUri = "quod";
                                        kmsKeyUri = "sunt";
                                        realm = "ullam";
                                        rootPrincipalPasswordUri = "quam";
                                        tgtLifetimeHours = 850953;
                                        truststorePasswordUri = "voluptates";
                                        truststoreUri = "officia";
                                    }};;
                                }};;
                                softwareConfig = new SoftwareConfig() {{
                                    imageVersion = "est";
                                    optionalComponents = new org.openapis.openapi.models.shared.SoftwareConfigOptionalComponentsEnum[]{{
                                        add(SoftwareConfigOptionalComponentsEnum.ANACONDA),
                                        add(SoftwareConfigOptionalComponentsEnum.HIVE_WEBHCAT),
                                    }};
                                    properties = new java.util.HashMap<String, String>() {{
                                        put("delectus", "incidunt");
                                    }};
                                }};;
                                tempBucket = "dolore";
                                workerConfig = new InstanceGroupConfigInput() {{
                                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 669695;
                                            acceleratorTypeUri = "quo";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 804210;
                                            acceleratorTypeUri = "delectus";
                                        }}),
                                    }};
                                    diskConfig = new DiskConfig() {{
                                        bootDiskSizeGb = 385383;
                                        bootDiskType = "laboriosam";
                                        localSsdInterface = "quam";
                                        numLocalSsds = 686690;
                                    }};;
                                    imageUri = "officia";
                                    machineTypeUri = "repellat";
                                    minCpuPlatform = "cupiditate";
                                    numInstances = 745667;
                                    preemptibility = InstanceGroupConfigPreemptibilityEnum.PREEMPTIBLE;
                                }};;
                            }};;
                            labels = new java.util.HashMap<String, String>() {{
                                put("fugiat", "inventore");
                                put("atque", "ad");
                                put("sapiente", "voluptates");
                            }};
                        }};;
                    }};;
                    version = 281135;
                }};;
                accessToken = "nesciunt";
                alt = AltEnum.JSON;
                callback = "quibusdam";
                fields = "suscipit";
                key = "quidem";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "nemo";
                requestId = "cumque";
                uploadType = "voluptatum";
                uploadProtocol = "sequi";
            }};            

            DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineResponse res = sdk.projects.dataprocProjectsRegionsWorkflowTemplatesInstantiateInline(req, new DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineSecurity("atque", "maiores") {{
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

## dataprocProjectsRegionsWorkflowTemplatesList

Lists workflows that match the specified filter in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesListRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesListResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsWorkflowTemplatesListRequest req = new DataprocProjectsRegionsWorkflowTemplatesListRequest("expedita") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "eaque";
                key = "impedit";
                oauthToken = "nam";
                pageSize = 406272L;
                pageToken = "odio";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "minus";
                uploadProtocol = "ut";
            }};            

            DataprocProjectsRegionsWorkflowTemplatesListResponse res = sdk.projects.dataprocProjectsRegionsWorkflowTemplatesList(req, new DataprocProjectsRegionsWorkflowTemplatesListSecurity("distinctio", "eius") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listWorkflowTemplatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataprocProjectsRegionsWorkflowTemplatesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest req = new DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest("eos") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "sint";
                                    expression = "occaecati";
                                    location = "debitis";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("amet"),
                                }};
                                role = "incidunt";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "porro";
                                    expression = "occaecati";
                                    location = "reiciendis";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("in"),
                                    add("omnis"),
                                    add("possimus"),
                                }};
                                role = "tenetur";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "recusandae";
                                    expression = "expedita";
                                    location = "iusto";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("ad"),
                                    add("quod"),
                                    add("ratione"),
                                }};
                                role = "totam";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "vero";
                                    expression = "dolore";
                                    location = "nam";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("cupiditate"),
                                    add("illo"),
                                    add("saepe"),
                                    add("enim"),
                                }};
                                role = "eaque";
                            }}),
                        }};
                        etag = "ex";
                        version = 910132;
                    }};;
                }};;
                accessToken = "delectus";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "aut";
                key = "dolorum";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "nam";
                uploadProtocol = "numquam";
            }};            

            DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyResponse res = sdk.projects.dataprocProjectsRegionsWorkflowTemplatesSetIamPolicy(req, new DataprocProjectsRegionsWorkflowTemplatesSetIamPolicySecurity("odio", "nostrum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataprocProjectsRegionsWorkflowTemplatesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest req = new DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("earum"),
                        add("minima"),
                    }};
                }};;
                accessToken = "ex";
                alt = AltEnum.PROTO;
                callback = "nesciunt";
                fields = "corrupti";
                key = "nostrum";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "maxime";
                uploadProtocol = "numquam";
            }};            

            DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsResponse res = sdk.projects.dataprocProjectsRegionsWorkflowTemplatesTestIamPermissions(req, new DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsSecurity("laborum", "eligendi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataprocProjectsRegionsWorkflowTemplatesUpdate

Updates (replaces) workflow template. The updated template must contain version that matches the current server version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesUpdateRequest;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesUpdateResponse;
import org.openapis.openapi.models.operations.DataprocProjectsRegionsWorkflowTemplatesUpdateSecurity;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AutoscalingConfig;
import org.openapis.openapi.models.shared.AuxiliaryNodeGroupInput;
import org.openapis.openapi.models.shared.ClusterConfigInput;
import org.openapis.openapi.models.shared.ClusterSelector;
import org.openapis.openapi.models.shared.ConfidentialInstanceConfig;
import org.openapis.openapi.models.shared.DataprocMetricConfig;
import org.openapis.openapi.models.shared.DiskConfig;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.EndpointConfigInput;
import org.openapis.openapi.models.shared.GceClusterConfig;
import org.openapis.openapi.models.shared.GceClusterConfigPrivateIpv6GoogleAccessEnum;
import org.openapis.openapi.models.shared.GkeClusterConfig;
import org.openapis.openapi.models.shared.GkeNodeConfig;
import org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig;
import org.openapis.openapi.models.shared.GkeNodePoolAutoscalingConfig;
import org.openapis.openapi.models.shared.GkeNodePoolConfig;
import org.openapis.openapi.models.shared.GkeNodePoolTarget;
import org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum;
import org.openapis.openapi.models.shared.HadoopJob;
import org.openapis.openapi.models.shared.HiveJob;
import org.openapis.openapi.models.shared.IdentityConfig;
import org.openapis.openapi.models.shared.InstanceGroupConfigInput;
import org.openapis.openapi.models.shared.InstanceGroupConfigPreemptibilityEnum;
import org.openapis.openapi.models.shared.JobScheduling;
import org.openapis.openapi.models.shared.KerberosConfig;
import org.openapis.openapi.models.shared.LifecycleConfigInput;
import org.openapis.openapi.models.shared.LoggingConfig;
import org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum;
import org.openapis.openapi.models.shared.ManagedClusterInput;
import org.openapis.openapi.models.shared.MetastoreConfig;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.MetricMetricSourceEnum;
import org.openapis.openapi.models.shared.NamespacedGkeDeploymentTarget;
import org.openapis.openapi.models.shared.NodeGroupAffinity;
import org.openapis.openapi.models.shared.NodeGroupInput;
import org.openapis.openapi.models.shared.NodeGroupRolesEnum;
import org.openapis.openapi.models.shared.NodeInitializationAction;
import org.openapis.openapi.models.shared.OrderedJob;
import org.openapis.openapi.models.shared.ParameterValidation;
import org.openapis.openapi.models.shared.PigJob;
import org.openapis.openapi.models.shared.PrestoJob;
import org.openapis.openapi.models.shared.PySparkJob;
import org.openapis.openapi.models.shared.QueryList;
import org.openapis.openapi.models.shared.RegexValidation;
import org.openapis.openapi.models.shared.ReservationAffinity;
import org.openapis.openapi.models.shared.ReservationAffinityConsumeReservationTypeEnum;
import org.openapis.openapi.models.shared.SecurityConfig;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.SoftwareConfig;
import org.openapis.openapi.models.shared.SoftwareConfigOptionalComponentsEnum;
import org.openapis.openapi.models.shared.SparkJob;
import org.openapis.openapi.models.shared.SparkRJob;
import org.openapis.openapi.models.shared.SparkSqlJob;
import org.openapis.openapi.models.shared.TemplateParameter;
import org.openapis.openapi.models.shared.TrinoJob;
import org.openapis.openapi.models.shared.ValueValidation;
import org.openapis.openapi.models.shared.WorkflowTemplateInput;
import org.openapis.openapi.models.shared.WorkflowTemplatePlacementInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsRegionsWorkflowTemplatesUpdateRequest req = new DataprocProjectsRegionsWorkflowTemplatesUpdateRequest("autem") {{
                dollarXgafv = XgafvEnum.ONE;
                workflowTemplateInput = new WorkflowTemplateInput() {{
                    dagTimeout = "sunt";
                    id = "b99e26ce-d8f9-4fdb-9410-f63bbf817837";
                    jobs = new org.openapis.openapi.models.shared.OrderedJob[]{{
                        add(new OrderedJob() {{
                            hadoopJob = new HadoopJob() {{
                                archiveUris = new String[]{{
                                    add("vitae"),
                                }};
                                args = new String[]{{
                                    add("asperiores"),
                                    add("at"),
                                    add("quibusdam"),
                                }};
                                fileUris = new String[]{{
                                    add("deleniti"),
                                    add("rem"),
                                }};
                                jarFileUris = new String[]{{
                                    add("eos"),
                                    add("labore"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("blanditiis", LoggingConfigDriverLogLevelsEnum.WARN);
                                    }};
                                }};
                                mainClass = "accusamus";
                                mainJarFileUri = "distinctio";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("labore", "blanditiis");
                                    put("ducimus", "consectetur");
                                }};
                            }};
                            hiveJob = new HiveJob() {{
                                continueOnFailure = false;
                                jarFileUris = new String[]{{
                                    add("quis"),
                                    add("accusantium"),
                                    add("ratione"),
                                    add("consectetur"),
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("architecto", "sint");
                                    put("possimus", "tempore");
                                    put("asperiores", "quasi");
                                    put("consequuntur", "nemo");
                                }};
                                queryFileUri = "nobis";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("labore"),
                                        add("veritatis"),
                                        add("minima"),
                                        add("magni"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("error", "expedita");
                                    put("error", "placeat");
                                    put("temporibus", "voluptate");
                                    put("earum", "minima");
                                }};
                            }};
                            labels = new java.util.HashMap<String, String>() {{
                                put("odit", "eius");
                            }};
                            pigJob = new PigJob() {{
                                continueOnFailure = false;
                                jarFileUris = new String[]{{
                                    add("vel"),
                                    add("dolorum"),
                                    add("alias"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("ab", LoggingConfigDriverLogLevelsEnum.ALL);
                                        put("amet", LoggingConfigDriverLogLevelsEnum.ERROR);
                                        put("iusto", LoggingConfigDriverLogLevelsEnum.INFO);
                                        put("non", LoggingConfigDriverLogLevelsEnum.INFO);
                                    }};
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("eligendi", "minima");
                                    put("omnis", "recusandae");
                                    put("architecto", "voluptatibus");
                                    put("autem", "in");
                                }};
                                queryFileUri = "repellat";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("cumque"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("optio", "quo");
                                    put("repudiandae", "tempora");
                                }};
                            }};
                            prerequisiteStepIds = new String[]{{
                                add("suscipit"),
                                add("illum"),
                                add("iusto"),
                            }};
                            prestoJob = new PrestoJob() {{
                                clientTags = new String[]{{
                                    add("sint"),
                                    add("aliquid"),
                                }};
                                continueOnFailure = false;
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("sapiente", LoggingConfigDriverLogLevelsEnum.TRACE);
                                        put("eligendi", LoggingConfigDriverLogLevelsEnum.DEBUG);
                                        put("nihil", LoggingConfigDriverLogLevelsEnum.TRACE);
                                        put("dignissimos", LoggingConfigDriverLogLevelsEnum.DEBUG);
                                    }};
                                }};
                                outputFormat = "perferendis";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("amet", "corporis");
                                }};
                                queryFileUri = "nihil";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("dolore"),
                                        add("magnam"),
                                        add("maiores"),
                                        add("ipsam"),
                                    }};
                                }};
                            }};
                            pysparkJob = new PySparkJob() {{
                                archiveUris = new String[]{{
                                    add("hic"),
                                }};
                                args = new String[]{{
                                    add("libero"),
                                    add("consequatur"),
                                    add("totam"),
                                }};
                                fileUris = new String[]{{
                                    add("quo"),
                                    add("dolor"),
                                }};
                                jarFileUris = new String[]{{
                                    add("omnis"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("officiis", LoggingConfigDriverLogLevelsEnum.ALL);
                                        put("excepturi", LoggingConfigDriverLogLevelsEnum.TRACE);
                                    }};
                                }};
                                mainPythonFileUri = "deserunt";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("incidunt", "corporis");
                                }};
                                pythonFileUris = new String[]{{
                                    add("suscipit"),
                                    add("ducimus"),
                                }};
                            }};
                            scheduling = new JobScheduling() {{
                                maxFailuresPerHour = 947309;
                                maxFailuresTotal = 568560;
                            }};
                            sparkJob = new SparkJob() {{
                                archiveUris = new String[]{{
                                    add("corrupti"),
                                    add("nihil"),
                                }};
                                args = new String[]{{
                                    add("placeat"),
                                    add("fugit"),
                                }};
                                fileUris = new String[]{{
                                    add("ipsam"),
                                    add("nobis"),
                                    add("porro"),
                                    add("labore"),
                                }};
                                jarFileUris = new String[]{{
                                    add("ducimus"),
                                    add("qui"),
                                    add("qui"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("ratione", LoggingConfigDriverLogLevelsEnum.OFF);
                                    }};
                                }};
                                mainClass = "iure";
                                mainJarFileUri = "aliquid";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("fugiat", "rem");
                                    put("voluptatibus", "officiis");
                                    put("corporis", "repellendus");
                                }};
                            }};
                            sparkRJob = new SparkRJob() {{
                                archiveUris = new String[]{{
                                    add("voluptatem"),
                                }};
                                args = new String[]{{
                                    add("excepturi"),
                                    add("odio"),
                                    add("omnis"),
                                }};
                                fileUris = new String[]{{
                                    add("delectus"),
                                    add("magni"),
                                    add("sit"),
                                    add("velit"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("nihil", LoggingConfigDriverLogLevelsEnum.ALL);
                                        put("aspernatur", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                        put("corporis", LoggingConfigDriverLogLevelsEnum.WARN);
                                    }};
                                }};
                                mainRFileUri = "aut";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("quod", "quo");
                                    put("architecto", "voluptatem");
                                    put("perspiciatis", "ea");
                                    put("eius", "aperiam");
                                }};
                            }};
                            sparkSqlJob = new SparkSqlJob() {{
                                jarFileUris = new String[]{{
                                    add("non"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("sequi", LoggingConfigDriverLogLevelsEnum.ERROR);
                                    }};
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("debitis", "quis");
                                }};
                                queryFileUri = "eaque";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("ut"),
                                        add("delectus"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("ullam", "maiores");
                                    put("debitis", "reprehenderit");
                                }};
                            }};
                            stepId = "eos";
                            trinoJob = new TrinoJob() {{
                                clientTags = new String[]{{
                                    add("cumque"),
                                    add("ut"),
                                    add("quae"),
                                    add("nihil"),
                                }};
                                continueOnFailure = false;
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("assumenda", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                        put("cumque", LoggingConfigDriverLogLevelsEnum.FATAL);
                                    }};
                                }};
                                outputFormat = "adipisci";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("non", "accusantium");
                                    put("corrupti", "itaque");
                                    put("earum", "impedit");
                                    put("dicta", "corporis");
                                }};
                                queryFileUri = "impedit";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("cum"),
                                        add("dolore"),
                                        add("illum"),
                                        add("ea"),
                                    }};
                                }};
                            }};
                        }}),
                        add(new OrderedJob() {{
                            hadoopJob = new HadoopJob() {{
                                archiveUris = new String[]{{
                                    add("quasi"),
                                    add("accusamus"),
                                    add("animi"),
                                    add("necessitatibus"),
                                }};
                                args = new String[]{{
                                    add("maiores"),
                                }};
                                fileUris = new String[]{{
                                    add("veniam"),
                                    add("fuga"),
                                }};
                                jarFileUris = new String[]{{
                                    add("possimus"),
                                    add("tenetur"),
                                    add("sed"),
                                    add("deserunt"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("id", LoggingConfigDriverLogLevelsEnum.ERROR);
                                        put("corporis", LoggingConfigDriverLogLevelsEnum.WARN);
                                        put("soluta", LoggingConfigDriverLogLevelsEnum.WARN);
                                        put("unde", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                    }};
                                }};
                                mainClass = "quisquam";
                                mainJarFileUri = "unde";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("suscipit", "facere");
                                }};
                            }};
                            hiveJob = new HiveJob() {{
                                continueOnFailure = false;
                                jarFileUris = new String[]{{
                                    add("nam"),
                                    add("quaerat"),
                                    add("corrupti"),
                                    add("sint"),
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("vel", "quasi");
                                    put("vero", "odio");
                                }};
                                queryFileUri = "numquam";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("inventore"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("nobis", "recusandae");
                                    put("commodi", "possimus");
                                    put("provident", "veniam");
                                    put("sit", "fugit");
                                }};
                            }};
                            labels = new java.util.HashMap<String, String>() {{
                                put("consequatur", "vero");
                                put("id", "error");
                                put("ratione", "perferendis");
                                put("distinctio", "voluptas");
                            }};
                            pigJob = new PigJob() {{
                                continueOnFailure = false;
                                jarFileUris = new String[]{{
                                    add("maiores"),
                                    add("nihil"),
                                    add("fuga"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("consequuntur", LoggingConfigDriverLogLevelsEnum.OFF);
                                        put("esse", LoggingConfigDriverLogLevelsEnum.ALL);
                                        put("delectus", LoggingConfigDriverLogLevelsEnum.INFO);
                                        put("deleniti", LoggingConfigDriverLogLevelsEnum.TRACE);
                                    }};
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("voluptatem", "natus");
                                }};
                                queryFileUri = "voluptatem";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("occaecati"),
                                        add("quasi"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("ex", "doloremque");
                                }};
                            }};
                            prerequisiteStepIds = new String[]{{
                                add("dolores"),
                                add("perferendis"),
                                add("esse"),
                            }};
                            prestoJob = new PrestoJob() {{
                                clientTags = new String[]{{
                                    add("blanditiis"),
                                    add("laudantium"),
                                    add("voluptates"),
                                }};
                                continueOnFailure = false;
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("autem", LoggingConfigDriverLogLevelsEnum.DEBUG);
                                        put("beatae", LoggingConfigDriverLogLevelsEnum.INFO);
                                        put("consectetur", LoggingConfigDriverLogLevelsEnum.ERROR);
                                        put("tenetur", LoggingConfigDriverLogLevelsEnum.OFF);
                                    }};
                                }};
                                outputFormat = "perspiciatis";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("ullam", "unde");
                                    put("debitis", "quidem");
                                }};
                                queryFileUri = "magnam";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("accusamus"),
                                    }};
                                }};
                            }};
                            pysparkJob = new PySparkJob() {{
                                archiveUris = new String[]{{
                                    add("sunt"),
                                    add("voluptas"),
                                    add("earum"),
                                    add("est"),
                                }};
                                args = new String[]{{
                                    add("nihil"),
                                    add("nostrum"),
                                    add("rerum"),
                                    add("perferendis"),
                                }};
                                fileUris = new String[]{{
                                    add("ullam"),
                                    add("ratione"),
                                    add("eos"),
                                }};
                                jarFileUris = new String[]{{
                                    add("modi"),
                                    add("illum"),
                                    add("error"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("reprehenderit", LoggingConfigDriverLogLevelsEnum.ERROR);
                                    }};
                                }};
                                mainPythonFileUri = "cum";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("culpa", "a");
                                    put("magnam", "eius");
                                    put("ad", "quia");
                                }};
                                pythonFileUris = new String[]{{
                                    add("quaerat"),
                                    add("voluptatum"),
                                    add("numquam"),
                                    add("explicabo"),
                                }};
                            }};
                            scheduling = new JobScheduling() {{
                                maxFailuresPerHour = 756833;
                                maxFailuresTotal = 586723;
                            }};
                            sparkJob = new SparkJob() {{
                                archiveUris = new String[]{{
                                    add("odit"),
                                    add("est"),
                                    add("at"),
                                }};
                                args = new String[]{{
                                    add("explicabo"),
                                }};
                                fileUris = new String[]{{
                                    add("est"),
                                    add("sapiente"),
                                    add("necessitatibus"),
                                    add("voluptatum"),
                                }};
                                jarFileUris = new String[]{{
                                    add("mollitia"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("blanditiis", LoggingConfigDriverLogLevelsEnum.OFF);
                                        put("ut", LoggingConfigDriverLogLevelsEnum.TRACE);
                                        put("labore", LoggingConfigDriverLogLevelsEnum.TRACE);
                                    }};
                                }};
                                mainClass = "enim";
                                mainJarFileUri = "nihil";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("tenetur", "saepe");
                                }};
                            }};
                            sparkRJob = new SparkRJob() {{
                                archiveUris = new String[]{{
                                    add("nulla"),
                                    add("tempora"),
                                    add("quam"),
                                    add("consectetur"),
                                }};
                                args = new String[]{{
                                    add("nesciunt"),
                                    add("earum"),
                                }};
                                fileUris = new String[]{{
                                    add("dolor"),
                                    add("placeat"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("sed", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                        put("natus", LoggingConfigDriverLogLevelsEnum.ALL);
                                        put("nihil", LoggingConfigDriverLogLevelsEnum.WARN);
                                    }};
                                }};
                                mainRFileUri = "deserunt";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("ex", "occaecati");
                                    put("optio", "at");
                                    put("ad", "asperiores");
                                }};
                            }};
                            sparkSqlJob = new SparkSqlJob() {{
                                jarFileUris = new String[]{{
                                    add("cumque"),
                                    add("sapiente"),
                                    add("quam"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("repellendus", LoggingConfigDriverLogLevelsEnum.WARN);
                                        put("dicta", LoggingConfigDriverLogLevelsEnum.INFO);
                                        put("fuga", LoggingConfigDriverLogLevelsEnum.INFO);
                                    }};
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("magni", "eos");
                                    put("harum", "voluptatibus");
                                    put("omnis", "quis");
                                }};
                                queryFileUri = "quos";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("aliquam"),
                                        add("vero"),
                                        add("nisi"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("eum", "vitae");
                                    put("animi", "possimus");
                                    put("libero", "ullam");
                                }};
                            }};
                            stepId = "quaerat";
                            trinoJob = new TrinoJob() {{
                                clientTags = new String[]{{
                                    add("iste"),
                                    add("accusamus"),
                                    add("ipsam"),
                                    add("fugiat"),
                                }};
                                continueOnFailure = false;
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("ullam", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                        put("eligendi", LoggingConfigDriverLogLevelsEnum.WARN);
                                    }};
                                }};
                                outputFormat = "doloribus";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("rem", "a");
                                    put("nihil", "veniam");
                                    put("aut", "magni");
                                    put("rerum", "voluptatibus");
                                }};
                                queryFileUri = "nulla";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("non"),
                                        add("dolore"),
                                        add("enim"),
                                        add("alias"),
                                    }};
                                }};
                            }};
                        }}),
                        add(new OrderedJob() {{
                            hadoopJob = new HadoopJob() {{
                                archiveUris = new String[]{{
                                    add("modi"),
                                    add("illo"),
                                    add("a"),
                                }};
                                args = new String[]{{
                                    add("molestiae"),
                                }};
                                fileUris = new String[]{{
                                    add("dolore"),
                                    add("eius"),
                                }};
                                jarFileUris = new String[]{{
                                    add("ex"),
                                    add("amet"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("molestias", LoggingConfigDriverLogLevelsEnum.OFF);
                                        put("ipsum", LoggingConfigDriverLogLevelsEnum.OFF);
                                    }};
                                }};
                                mainClass = "quidem";
                                mainJarFileUri = "odit";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("accusamus", "quia");
                                    put("inventore", "doloribus");
                                }};
                            }};
                            hiveJob = new HiveJob() {{
                                continueOnFailure = false;
                                jarFileUris = new String[]{{
                                    add("aliquid"),
                                    add("consequuntur"),
                                    add("laboriosam"),
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("reprehenderit", "soluta");
                                    put("ipsum", "vel");
                                }};
                                queryFileUri = "delectus";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("vel"),
                                        add("distinctio"),
                                        add("cupiditate"),
                                        add("hic"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("deleniti", "iusto");
                                    put("quod", "saepe");
                                }};
                            }};
                            labels = new java.util.HashMap<String, String>() {{
                                put("magni", "nostrum");
                                put("minus", "aliquid");
                            }};
                            pigJob = new PigJob() {{
                                continueOnFailure = false;
                                jarFileUris = new String[]{{
                                    add("ea"),
                                    add("numquam"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("fuga", LoggingConfigDriverLogLevelsEnum.INFO);
                                    }};
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("quasi", "sed");
                                }};
                                queryFileUri = "officiis";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("quae"),
                                        add("dolore"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("libero", "ut");
                                    put("cumque", "quia");
                                }};
                            }};
                            prerequisiteStepIds = new String[]{{
                                add("porro"),
                            }};
                            prestoJob = new PrestoJob() {{
                                clientTags = new String[]{{
                                    add("distinctio"),
                                    add("numquam"),
                                    add("fugit"),
                                    add("amet"),
                                }};
                                continueOnFailure = false;
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("facilis", LoggingConfigDriverLogLevelsEnum.FATAL);
                                        put("vero", LoggingConfigDriverLogLevelsEnum.ERROR);
                                        put("omnis", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                    }};
                                }};
                                outputFormat = "earum";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("est", "distinctio");
                                    put("fugiat", "nulla");
                                    put("totam", "praesentium");
                                }};
                                queryFileUri = "officiis";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("vitae"),
                                        add("delectus"),
                                    }};
                                }};
                            }};
                            pysparkJob = new PySparkJob() {{
                                archiveUris = new String[]{{
                                    add("minus"),
                                    add("labore"),
                                }};
                                args = new String[]{{
                                    add("sed"),
                                    add("veniam"),
                                    add("sed"),
                                }};
                                fileUris = new String[]{{
                                    add("reprehenderit"),
                                    add("voluptate"),
                                    add("reprehenderit"),
                                    add("et"),
                                }};
                                jarFileUris = new String[]{{
                                    add("voluptate"),
                                    add("hic"),
                                    add("at"),
                                    add("perferendis"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("eius", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                        put("consequatur", LoggingConfigDriverLogLevelsEnum.WARN);
                                    }};
                                }};
                                mainPythonFileUri = "accusamus";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("voluptatum", "facere");
                                    put("consequuntur", "natus");
                                    put("repellendus", "voluptates");
                                    put("illo", "facere");
                                }};
                                pythonFileUris = new String[]{{
                                    add("ducimus"),
                                    add("aut"),
                                    add("provident"),
                                    add("voluptate"),
                                }};
                            }};
                            scheduling = new JobScheduling() {{
                                maxFailuresPerHour = 731293;
                                maxFailuresTotal = 353967;
                            }};
                            sparkJob = new SparkJob() {{
                                archiveUris = new String[]{{
                                    add("mollitia"),
                                    add("ipsa"),
                                    add("quos"),
                                    add("quo"),
                                }};
                                args = new String[]{{
                                    add("in"),
                                    add("doloribus"),
                                }};
                                fileUris = new String[]{{
                                    add("eum"),
                                    add("cumque"),
                                    add("odio"),
                                }};
                                jarFileUris = new String[]{{
                                    add("similique"),
                                    add("quia"),
                                    add("architecto"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("accusamus", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                        put("excepturi", LoggingConfigDriverLogLevelsEnum.ERROR);
                                    }};
                                }};
                                mainClass = "laborum";
                                mainJarFileUri = "a";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("minus", "officia");
                                    put("laboriosam", "illo");
                                    put("cupiditate", "veritatis");
                                    put("aliquam", "excepturi");
                                }};
                            }};
                            sparkRJob = new SparkRJob() {{
                                archiveUris = new String[]{{
                                    add("dicta"),
                                    add("magnam"),
                                    add("doloremque"),
                                }};
                                args = new String[]{{
                                    add("suscipit"),
                                    add("eius"),
                                    add("maiores"),
                                }};
                                fileUris = new String[]{{
                                    add("quos"),
                                    add("id"),
                                    add("officiis"),
                                    add("ab"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("consequatur", LoggingConfigDriverLogLevelsEnum.OFF);
                                        put("repellat", LoggingConfigDriverLogLevelsEnum.LEVEL_UNSPECIFIED);
                                    }};
                                }};
                                mainRFileUri = "dolor";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("quaerat", "a");
                                    put("neque", "nihil");
                                    put("recusandae", "numquam");
                                }};
                            }};
                            sparkSqlJob = new SparkSqlJob() {{
                                jarFileUris = new String[]{{
                                    add("mollitia"),
                                    add("blanditiis"),
                                    add("suscipit"),
                                }};
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("quis", LoggingConfigDriverLogLevelsEnum.TRACE);
                                        put("corporis", LoggingConfigDriverLogLevelsEnum.WARN);
                                        put("ea", LoggingConfigDriverLogLevelsEnum.DEBUG);
                                    }};
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("nesciunt", "magni");
                                    put("animi", "dolorum");
                                }};
                                queryFileUri = "voluptas";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("porro"),
                                        add("tempore"),
                                        add("commodi"),
                                        add("autem"),
                                    }};
                                }};
                                scriptVariables = new java.util.HashMap<String, String>() {{
                                    put("magni", "quisquam");
                                    put("expedita", "in");
                                    put("eaque", "delectus");
                                }};
                            }};
                            stepId = "blanditiis";
                            trinoJob = new TrinoJob() {{
                                clientTags = new String[]{{
                                    add("tenetur"),
                                    add("assumenda"),
                                    add("exercitationem"),
                                    add("a"),
                                }};
                                continueOnFailure = false;
                                loggingConfig = new LoggingConfig() {{
                                    driverLogLevels = new java.util.HashMap<String, org.openapis.openapi.models.shared.LoggingConfigDriverLogLevelsEnum>() {{
                                        put("laboriosam", LoggingConfigDriverLogLevelsEnum.OFF);
                                        put("occaecati", LoggingConfigDriverLogLevelsEnum.ALL);
                                        put("quidem", LoggingConfigDriverLogLevelsEnum.WARN);
                                    }};
                                }};
                                outputFormat = "laborum";
                                properties = new java.util.HashMap<String, String>() {{
                                    put("a", "dignissimos");
                                    put("labore", "laudantium");
                                    put("dolore", "aliquid");
                                }};
                                queryFileUri = "repudiandae";
                                queryList = new QueryList() {{
                                    queries = new String[]{{
                                        add("quod"),
                                    }};
                                }};
                            }};
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("neque", "ipsa");
                    }};
                    parameters = new org.openapis.openapi.models.shared.TemplateParameter[]{{
                        add(new TemplateParameter() {{
                            description = "repellendus";
                            fields = new String[]{{
                                add("aut"),
                                add("ullam"),
                                add("amet"),
                            }};
                            name = "Doreen Mayer";
                            validation = new ParameterValidation() {{
                                regex = new RegexValidation() {{
                                    regexes = new String[]{{
                                        add("eligendi"),
                                        add("fuga"),
                                    }};
                                }};
                                values = new ValueValidation() {{
                                    values = new String[]{{
                                        add("sit"),
                                    }};
                                }};
                            }};
                        }}),
                        add(new TemplateParameter() {{
                            description = "iure";
                            fields = new String[]{{
                                add("quis"),
                                add("dolorem"),
                                add("omnis"),
                                add("sed"),
                            }};
                            name = "Henry Blick";
                            validation = new ParameterValidation() {{
                                regex = new RegexValidation() {{
                                    regexes = new String[]{{
                                        add("est"),
                                        add("rem"),
                                    }};
                                }};
                                values = new ValueValidation() {{
                                    values = new String[]{{
                                        add("maiores"),
                                        add("provident"),
                                        add("sunt"),
                                    }};
                                }};
                            }};
                        }}),
                        add(new TemplateParameter() {{
                            description = "maiores";
                            fields = new String[]{{
                                add("ducimus"),
                                add("dolore"),
                                add("aspernatur"),
                            }};
                            name = "Horace Strosin";
                            validation = new ParameterValidation() {{
                                regex = new RegexValidation() {{
                                    regexes = new String[]{{
                                        add("hic"),
                                        add("corrupti"),
                                        add("soluta"),
                                    }};
                                }};
                                values = new ValueValidation() {{
                                    values = new String[]{{
                                        add("praesentium"),
                                        add("explicabo"),
                                        add("odit"),
                                        add("illo"),
                                    }};
                                }};
                            }};
                        }}),
                    }};
                    placement = new WorkflowTemplatePlacementInput() {{
                        clusterSelector = new ClusterSelector() {{
                            clusterLabels = new java.util.HashMap<String, String>() {{
                                put("quia", "ad");
                            }};
                            zone = "velit";
                        }};;
                        managedCluster = new ManagedClusterInput() {{
                            clusterName = "ullam";
                            config = new ClusterConfigInput() {{
                                autoscalingConfig = new AutoscalingConfig() {{
                                    policyUri = "provident";
                                }};;
                                auxiliaryNodeGroups = new org.openapis.openapi.models.shared.AuxiliaryNodeGroupInput[]{{
                                    add(new AuxiliaryNodeGroupInput() {{
                                        nodeGroup = new NodeGroupInput() {{
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("blanditiis", "consectetur");
                                                put("totam", "dignissimos");
                                                put("repellat", "iusto");
                                            }};
                                            name = "Adrian McCullough";
                                            nodeGroupConfig = new InstanceGroupConfigInput() {{
                                                accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 152052;
                                                        acceleratorTypeUri = "optio";
                                                    }}),
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 860830;
                                                        acceleratorTypeUri = "magni";
                                                    }}),
                                                }};
                                                diskConfig = new DiskConfig() {{
                                                    bootDiskSizeGb = 265708;
                                                    bootDiskType = "voluptatum";
                                                    localSsdInterface = "dolore";
                                                    numLocalSsds = 824105;
                                                }};
                                                imageUri = "dolorum";
                                                machineTypeUri = "eos";
                                                minCpuPlatform = "sunt";
                                                numInstances = 464922;
                                                preemptibility = InstanceGroupConfigPreemptibilityEnum.PREEMPTIBILITY_UNSPECIFIED;
                                            }};
                                            roles = new org.openapis.openapi.models.shared.NodeGroupRolesEnum[]{{
                                                add(NodeGroupRolesEnum.DRIVER),
                                                add(NodeGroupRolesEnum.ROLE_UNSPECIFIED),
                                                add(NodeGroupRolesEnum.DRIVER),
                                            }};
                                        }};
                                        nodeGroupId = "eligendi";
                                    }}),
                                    add(new AuxiliaryNodeGroupInput() {{
                                        nodeGroup = new NodeGroupInput() {{
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("inventore", "necessitatibus");
                                                put("tenetur", "exercitationem");
                                            }};
                                            name = "Lori Harvey Sr.";
                                            nodeGroupConfig = new InstanceGroupConfigInput() {{
                                                accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 572996;
                                                        acceleratorTypeUri = "id";
                                                    }}),
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 750075;
                                                        acceleratorTypeUri = "quasi";
                                                    }}),
                                                }};
                                                diskConfig = new DiskConfig() {{
                                                    bootDiskSizeGb = 931393;
                                                    bootDiskType = "aliquam";
                                                    localSsdInterface = "vitae";
                                                    numLocalSsds = 836018;
                                                }};
                                                imageUri = "voluptatum";
                                                machineTypeUri = "deserunt";
                                                minCpuPlatform = "aspernatur";
                                                numInstances = 206373;
                                                preemptibility = InstanceGroupConfigPreemptibilityEnum.SPOT;
                                            }};
                                            roles = new org.openapis.openapi.models.shared.NodeGroupRolesEnum[]{{
                                                add(NodeGroupRolesEnum.ROLE_UNSPECIFIED),
                                            }};
                                        }};
                                        nodeGroupId = "saepe";
                                    }}),
                                    add(new AuxiliaryNodeGroupInput() {{
                                        nodeGroup = new NodeGroupInput() {{
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("labore", "repellat");
                                            }};
                                            name = "Rosemarie Zulauf";
                                            nodeGroupConfig = new InstanceGroupConfigInput() {{
                                                accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 124740;
                                                        acceleratorTypeUri = "perspiciatis";
                                                    }}),
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 461758;
                                                        acceleratorTypeUri = "a";
                                                    }}),
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 434345;
                                                        acceleratorTypeUri = "nulla";
                                                    }}),
                                                }};
                                                diskConfig = new DiskConfig() {{
                                                    bootDiskSizeGb = 926803;
                                                    bootDiskType = "iste";
                                                    localSsdInterface = "aspernatur";
                                                    numLocalSsds = 136629;
                                                }};
                                                imageUri = "et";
                                                machineTypeUri = "ipsam";
                                                minCpuPlatform = "et";
                                                numInstances = 961555;
                                                preemptibility = InstanceGroupConfigPreemptibilityEnum.SPOT;
                                            }};
                                            roles = new org.openapis.openapi.models.shared.NodeGroupRolesEnum[]{{
                                                add(NodeGroupRolesEnum.ROLE_UNSPECIFIED),
                                            }};
                                        }};
                                        nodeGroupId = "architecto";
                                    }}),
                                    add(new AuxiliaryNodeGroupInput() {{
                                        nodeGroup = new NodeGroupInput() {{
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("voluptatem", "perspiciatis");
                                            }};
                                            name = "Alfredo Halvorson";
                                            nodeGroupConfig = new InstanceGroupConfigInput() {{
                                                accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 971155;
                                                        acceleratorTypeUri = "quis";
                                                    }}),
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 264656;
                                                        acceleratorTypeUri = "adipisci";
                                                    }}),
                                                    add(new AcceleratorConfig() {{
                                                        acceleratorCount = 866453;
                                                        acceleratorTypeUri = "praesentium";
                                                    }}),
                                                }};
                                                diskConfig = new DiskConfig() {{
                                                    bootDiskSizeGb = 364679;
                                                    bootDiskType = "dolore";
                                                    localSsdInterface = "numquam";
                                                    numLocalSsds = 222140;
                                                }};
                                                imageUri = "perspiciatis";
                                                machineTypeUri = "accusamus";
                                                minCpuPlatform = "voluptates";
                                                numInstances = 155762;
                                                preemptibility = InstanceGroupConfigPreemptibilityEnum.PREEMPTIBILITY_UNSPECIFIED;
                                            }};
                                            roles = new org.openapis.openapi.models.shared.NodeGroupRolesEnum[]{{
                                                add(NodeGroupRolesEnum.ROLE_UNSPECIFIED),
                                                add(NodeGroupRolesEnum.ROLE_UNSPECIFIED),
                                            }};
                                        }};
                                        nodeGroupId = "accusantium";
                                    }}),
                                }};
                                configBucket = "tempora";
                                dataprocMetricConfig = new DataprocMetricConfig() {{
                                    metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                        add(new Metric() {{
                                            metricOverrides = new String[]{{
                                                add("expedita"),
                                            }};
                                            metricSource = MetricMetricSourceEnum.HIVESERVER2;
                                        }}),
                                        add(new Metric() {{
                                            metricOverrides = new String[]{{
                                                add("minima"),
                                            }};
                                            metricSource = MetricMetricSourceEnum.HDFS;
                                        }}),
                                    }};
                                }};;
                                encryptionConfig = new EncryptionConfig() {{
                                    gcePdKmsKeyName = "vitae";
                                    kmsKey = "quos";
                                }};;
                                endpointConfig = new EndpointConfigInput() {{
                                    enableHttpPortAccess = false;
                                }};;
                                gceClusterConfig = new GceClusterConfig() {{
                                    confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                                        enableConfidentialCompute = false;
                                    }};;
                                    internalIpOnly = false;
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("quisquam", "sunt");
                                        put("asperiores", "corporis");
                                        put("vel", "accusamus");
                                    }};
                                    networkUri = "totam";
                                    nodeGroupAffinity = new NodeGroupAffinity() {{
                                        nodeGroupUri = "ipsam";
                                    }};;
                                    privateIpv6GoogleAccess = GceClusterConfigPrivateIpv6GoogleAccessEnum.BIDIRECTIONAL;
                                    reservationAffinity = new ReservationAffinity() {{
                                        consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.ANY_RESERVATION;
                                        key = "nihil";
                                        values = new String[]{{
                                            add("dolorem"),
                                            add("odit"),
                                            add("officiis"),
                                        }};
                                    }};;
                                    serviceAccount = "mollitia";
                                    serviceAccountScopes = new String[]{{
                                        add("fugiat"),
                                        add("voluptas"),
                                        add("et"),
                                    }};
                                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                        enableIntegrityMonitoring = false;
                                        enableSecureBoot = false;
                                        enableVtpm = false;
                                    }};;
                                    subnetworkUri = "odio";
                                    tags = new String[]{{
                                        add("nesciunt"),
                                        add("harum"),
                                        add("aperiam"),
                                        add("pariatur"),
                                    }};
                                    zoneUri = "ad";
                                }};;
                                gkeClusterConfig = new GkeClusterConfig() {{
                                    gkeClusterTarget = "architecto";
                                    namespacedGkeDeploymentTarget = new NamespacedGkeDeploymentTarget() {{
                                        clusterNamespace = "culpa";
                                        targetGkeCluster = "aliquam";
                                    }};;
                                    nodePoolTarget = new org.openapis.openapi.models.shared.GkeNodePoolTarget[]{{
                                        add(new GkeNodePoolTarget() {{
                                            nodePool = "quidem";
                                            nodePoolConfig = new GkeNodePoolConfig() {{
                                                autoscaling = new GkeNodePoolAutoscalingConfig() {{
                                                    maxNodeCount = 985265;
                                                    minNodeCount = 22018;
                                                }};
                                                config = new GkeNodeConfig() {{
                                                    accelerators = new org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig[]{{
                                                        add(new GkeNodePoolAcceleratorConfig() {{
                                                            acceleratorCount = "tempore";
                                                            acceleratorType = "deserunt";
                                                            gpuPartitionSize = "nulla";
                                                        }}),
                                                    }};
                                                    bootDiskKmsKey = "corrupti";
                                                    localSsdCount = 453304;
                                                    machineType = "alias";
                                                    minCpuPlatform = "iure";
                                                    preemptible = false;
                                                    spot = false;
                                                }};
                                                locations = new String[]{{
                                                    add("incidunt"),
                                                    add("ea"),
                                                    add("alias"),
                                                    add("laudantium"),
                                                }};
                                            }};
                                            roles = new org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum[]{{
                                                add(GkeNodePoolTargetRolesEnum.SPARK_DRIVER),
                                            }};
                                        }}),
                                        add(new GkeNodePoolTarget() {{
                                            nodePool = "maiores";
                                            nodePoolConfig = new GkeNodePoolConfig() {{
                                                autoscaling = new GkeNodePoolAutoscalingConfig() {{
                                                    maxNodeCount = 723374;
                                                    minNodeCount = 867286;
                                                }};
                                                config = new GkeNodeConfig() {{
                                                    accelerators = new org.openapis.openapi.models.shared.GkeNodePoolAcceleratorConfig[]{{
                                                        add(new GkeNodePoolAcceleratorConfig() {{
                                                            acceleratorCount = "modi";
                                                            acceleratorType = "vitae";
                                                            gpuPartitionSize = "delectus";
                                                        }}),
                                                        add(new GkeNodePoolAcceleratorConfig() {{
                                                            acceleratorCount = "delectus";
                                                            acceleratorType = "nemo";
                                                            gpuPartitionSize = "at";
                                                        }}),
                                                        add(new GkeNodePoolAcceleratorConfig() {{
                                                            acceleratorCount = "magnam";
                                                            acceleratorType = "officiis";
                                                            gpuPartitionSize = "sed";
                                                        }}),
                                                        add(new GkeNodePoolAcceleratorConfig() {{
                                                            acceleratorCount = "mollitia";
                                                            acceleratorType = "saepe";
                                                            gpuPartitionSize = "labore";
                                                        }}),
                                                    }};
                                                    bootDiskKmsKey = "doloribus";
                                                    localSsdCount = 704054;
                                                    machineType = "minima";
                                                    minCpuPlatform = "impedit";
                                                    preemptible = false;
                                                    spot = false;
                                                }};
                                                locations = new String[]{{
                                                    add("amet"),
                                                    add("quis"),
                                                    add("fugiat"),
                                                }};
                                            }};
                                            roles = new org.openapis.openapi.models.shared.GkeNodePoolTargetRolesEnum[]{{
                                                add(GkeNodePoolTargetRolesEnum.CONTROLLER),
                                            }};
                                        }}),
                                    }};
                                }};;
                                initializationActions = new org.openapis.openapi.models.shared.NodeInitializationAction[]{{
                                    add(new NodeInitializationAction() {{
                                        executableFile = "consectetur";
                                        executionTimeout = "quos";
                                    }}),
                                    add(new NodeInitializationAction() {{
                                        executableFile = "delectus";
                                        executionTimeout = "sunt";
                                    }}),
                                }};
                                lifecycleConfig = new LifecycleConfigInput() {{
                                    autoDeleteTime = "repudiandae";
                                    autoDeleteTtl = "facere";
                                    idleDeleteTtl = "distinctio";
                                }};;
                                masterConfig = new InstanceGroupConfigInput() {{
                                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 540416;
                                            acceleratorTypeUri = "consectetur";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 367096;
                                            acceleratorTypeUri = "provident";
                                        }}),
                                    }};
                                    diskConfig = new DiskConfig() {{
                                        bootDiskSizeGb = 882272;
                                        bootDiskType = "minus";
                                        localSsdInterface = "impedit";
                                        numLocalSsds = 327624;
                                    }};;
                                    imageUri = "cumque";
                                    machineTypeUri = "rerum";
                                    minCpuPlatform = "praesentium";
                                    numInstances = 427859;
                                    preemptibility = InstanceGroupConfigPreemptibilityEnum.PREEMPTIBILITY_UNSPECIFIED;
                                }};;
                                metastoreConfig = new MetastoreConfig() {{
                                    dataprocMetastoreService = "delectus";
                                }};;
                                secondaryWorkerConfig = new InstanceGroupConfigInput() {{
                                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 770940;
                                            acceleratorTypeUri = "illum";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 356351;
                                            acceleratorTypeUri = "praesentium";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 17747;
                                            acceleratorTypeUri = "soluta";
                                        }}),
                                    }};
                                    diskConfig = new DiskConfig() {{
                                        bootDiskSizeGb = 657520;
                                        bootDiskType = "molestiae";
                                        localSsdInterface = "nesciunt";
                                        numLocalSsds = 559715;
                                    }};;
                                    imageUri = "sunt";
                                    machineTypeUri = "aperiam";
                                    minCpuPlatform = "itaque";
                                    numInstances = 310380;
                                    preemptibility = InstanceGroupConfigPreemptibilityEnum.SPOT;
                                }};;
                                securityConfig = new SecurityConfig() {{
                                    identityConfig = new IdentityConfig() {{
                                        userServiceAccountMapping = new java.util.HashMap<String, String>() {{
                                            put("tempora", "quaerat");
                                            put("magnam", "voluptate");
                                            put("magni", "excepturi");
                                            put("esse", "cumque");
                                        }};
                                    }};;
                                    kerberosConfig = new KerberosConfig() {{
                                        crossRealmTrustAdminServer = "pariatur";
                                        crossRealmTrustKdc = "non";
                                        crossRealmTrustRealm = "rerum";
                                        crossRealmTrustSharedPasswordUri = "illo";
                                        enableKerberos = false;
                                        kdcDbKeyUri = "illum";
                                        keyPasswordUri = "nulla";
                                        keystorePasswordUri = "amet";
                                        keystoreUri = "expedita";
                                        kmsKeyUri = "libero";
                                        realm = "impedit";
                                        rootPrincipalPasswordUri = "repudiandae";
                                        tgtLifetimeHours = 170819;
                                        truststorePasswordUri = "ut";
                                        truststoreUri = "nihil";
                                    }};;
                                }};;
                                softwareConfig = new SoftwareConfig() {{
                                    imageVersion = "harum";
                                    optionalComponents = new org.openapis.openapi.models.shared.SoftwareConfigOptionalComponentsEnum[]{{
                                        add(SoftwareConfigOptionalComponentsEnum.HIVE_WEBHCAT),
                                        add(SoftwareConfigOptionalComponentsEnum.HUDI),
                                    }};
                                    properties = new java.util.HashMap<String, String>() {{
                                        put("repudiandae", "reiciendis");
                                        put("asperiores", "exercitationem");
                                    }};
                                }};;
                                tempBucket = "voluptatem";
                                workerConfig = new InstanceGroupConfigInput() {{
                                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 184333;
                                            acceleratorTypeUri = "laboriosam";
                                        }}),
                                    }};
                                    diskConfig = new DiskConfig() {{
                                        bootDiskSizeGb = 840558;
                                        bootDiskType = "in";
                                        localSsdInterface = "veritatis";
                                        numLocalSsds = 752211;
                                    }};;
                                    imageUri = "voluptatibus";
                                    machineTypeUri = "tenetur";
                                    minCpuPlatform = "facilis";
                                    numInstances = 817057;
                                    preemptibility = InstanceGroupConfigPreemptibilityEnum.PREEMPTIBILITY_UNSPECIFIED;
                                }};;
                            }};;
                            labels = new java.util.HashMap<String, String>() {{
                                put("rerum", "molestiae");
                                put("quaerat", "distinctio");
                                put("blanditiis", "quaerat");
                                put("odit", "ab");
                            }};
                        }};;
                    }};;
                    version = 603512;
                }};;
                accessToken = "nemo";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "ut";
                key = "tempora";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "nesciunt";
                uploadProtocol = "quisquam";
            }};            

            DataprocProjectsRegionsWorkflowTemplatesUpdateResponse res = sdk.projects.dataprocProjectsRegionsWorkflowTemplatesUpdate(req, new DataprocProjectsRegionsWorkflowTemplatesUpdateSecurity("labore", "sequi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.workflowTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
