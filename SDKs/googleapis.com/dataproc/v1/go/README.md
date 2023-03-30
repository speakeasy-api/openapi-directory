# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/dataproc/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DataprocProjectsLocationsBatchesCreateRequest{
        Security: operations.DataprocProjectsLocationsBatchesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DataprocProjectsLocationsBatchesCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.DataprocProjectsLocationsBatchesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            BatchID: "unde",
            Callback: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            RequestID: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
        },
        Request: &shared.BatchInput{
            EnvironmentConfig: &shared.EnvironmentConfig{
                ExecutionConfig: &shared.ExecutionConfig{
                    IdleTTL: "magnam",
                    KmsKey: "debitis",
                    NetworkTags: []string{
                        "delectus",
                    },
                    NetworkURI: "tempora",
                    ServiceAccount: "suscipit",
                    StagingBucket: "molestiae",
                    SubnetworkURI: "minus",
                    TTL: "placeat",
                },
                PeripheralsConfig: &shared.PeripheralsConfig{
                    MetastoreService: "voluptatum",
                    SparkHistoryServerConfig: &shared.SparkHistoryServerConfig{
                        DataprocCluster: "iusto",
                    },
                },
            },
            Labels: map[string]string{
                "nisi": "recusandae",
                "temporibus": "ab",
                "quis": "veritatis",
            },
            PysparkBatch: &shared.PySparkBatch{
                ArchiveUris: []string{
                    "perferendis",
                    "ipsam",
                    "repellendus",
                },
                Args: []string{
                    "quo",
                    "odit",
                    "at",
                    "at",
                },
                FileUris: []string{
                    "molestiae",
                    "quod",
                    "quod",
                    "esse",
                },
                JarFileUris: []string{
                    "porro",
                    "dolorum",
                    "dicta",
                },
                MainPythonFileURI: "nam",
                PythonFileUris: []string{
                    "occaecati",
                    "fugit",
                    "deleniti",
                },
            },
            RuntimeConfig: &shared.RuntimeConfig{
                ContainerImage: "hic",
                Properties: map[string]string{
                    "totam": "beatae",
                    "commodi": "molestiae",
                    "modi": "qui",
                    "impedit": "cum",
                },
                Version: "esse",
            },
            RuntimeInfo: &shared.RuntimeInfoInput{
                ApproximateUsage: &shared.UsageMetrics{
                    MilliDcuSeconds: "ipsum",
                    ShuffleStorageGbSeconds: "excepturi",
                },
                CurrentUsage: &shared.UsageSnapshot{
                    MilliDcu: "aspernatur",
                    ShuffleStorageGb: "perferendis",
                    SnapshotTime: "ad",
                },
            },
            SparkBatch: &shared.SparkBatch{
                ArchiveUris: []string{
                    "sed",
                    "iste",
                    "dolor",
                },
                Args: []string{
                    "laboriosam",
                    "hic",
                    "saepe",
                },
                FileUris: []string{
                    "in",
                    "corporis",
                    "iste",
                },
                JarFileUris: []string{
                    "saepe",
                    "quidem",
                },
                MainClass: "architecto",
                MainJarFileURI: "ipsa",
            },
            SparkRBatch: &shared.SparkRBatch{
                ArchiveUris: []string{
                    "est",
                    "mollitia",
                    "laborum",
                    "dolores",
                },
                Args: []string{
                    "corporis",
                },
                FileUris: []string{
                    "nobis",
                },
                MainRFileURI: "enim",
            },
            SparkSQLBatch: &shared.SparkSQLBatch{
                JarFileUris: []string{
                    "nemo",
                    "minima",
                    "excepturi",
                },
                QueryFileURI: "accusantium",
                QueryVariables: map[string]string{
                    "culpa": "doloribus",
                    "sapiente": "architecto",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DataprocProjectsLocationsBatchesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Projects

* `DataprocProjectsLocationsBatchesCreate` - Creates a batch workload that executes asynchronously.
* `DataprocProjectsLocationsBatchesList` - Lists batch workloads.
* `DataprocProjectsRegionsAutoscalingPoliciesCreate` - Creates new autoscaling policy.
* `DataprocProjectsRegionsAutoscalingPoliciesList` - Lists autoscaling policies in the project.
* `DataprocProjectsRegionsClustersCreate` - Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
* `DataprocProjectsRegionsClustersDelete` - Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
* `DataprocProjectsRegionsClustersDiagnose` - Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).
* `DataprocProjectsRegionsClustersGet` - Gets the resource representation for a cluster in a project.
* `DataprocProjectsRegionsClustersInjectCredentials` - Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.
* `DataprocProjectsRegionsClustersList` - Lists all regions/{region}/clusters in a project alphabetically.
* `DataprocProjectsRegionsClustersNodeGroupsCreate` - Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
* `DataprocProjectsRegionsClustersNodeGroupsResize` - Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
* `DataprocProjectsRegionsClustersPatch` - Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.
* `DataprocProjectsRegionsClustersRepair` - Repairs a cluster.
* `DataprocProjectsRegionsClustersStart` - Starts a cluster in a project.
* `DataprocProjectsRegionsClustersStop` - Stops a cluster in a project.
* `DataprocProjectsRegionsJobsCancel` - Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).
* `DataprocProjectsRegionsJobsDelete` - Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
* `DataprocProjectsRegionsJobsGet` - Gets the resource representation for a job in a project.
* `DataprocProjectsRegionsJobsList` - Lists regions/{region}/jobs in a project.
* `DataprocProjectsRegionsJobsPatch` - Updates a job in a project.
* `DataprocProjectsRegionsJobsSubmit` - Submits a job to a cluster.
* `DataprocProjectsRegionsJobsSubmitAsOperation` - Submits job to a cluster.
* `DataprocProjectsRegionsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* `DataprocProjectsRegionsWorkflowTemplatesCreate` - Creates new workflow template.
* `DataprocProjectsRegionsWorkflowTemplatesDelete` - Deletes a workflow template. It does not cancel in-progress workflows.
* `DataprocProjectsRegionsWorkflowTemplatesGet` - Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.
* `DataprocProjectsRegionsWorkflowTemplatesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `DataprocProjectsRegionsWorkflowTemplatesInstantiate` - Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
* `DataprocProjectsRegionsWorkflowTemplatesInstantiateInline` - Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
* `DataprocProjectsRegionsWorkflowTemplatesList` - Lists workflows that match the specified filter in the request.
* `DataprocProjectsRegionsWorkflowTemplatesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* `DataprocProjectsRegionsWorkflowTemplatesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `DataprocProjectsRegionsWorkflowTemplatesUpdate` - Updates (replaces) workflow template. The updated template must contain version that matches the current server version.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
