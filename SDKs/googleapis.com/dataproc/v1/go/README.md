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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DataprocProjectsLocationsBatchesCreate(ctx, operations.DataprocProjectsLocationsBatchesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchInput: &shared.BatchInput{
            EnvironmentConfig: &shared.EnvironmentConfig{
                ExecutionConfig: &shared.ExecutionConfig{
                    IdleTTL: sdk.String("provident"),
                    KmsKey: sdk.String("distinctio"),
                    NetworkTags: []string{
                        "unde",
                        "nulla",
                        "corrupti",
                        "illum",
                    },
                    NetworkURI: sdk.String("vel"),
                    ServiceAccount: sdk.String("error"),
                    StagingBucket: sdk.String("deserunt"),
                    SubnetworkURI: sdk.String("suscipit"),
                    TTL: sdk.String("iure"),
                },
                PeripheralsConfig: &shared.PeripheralsConfig{
                    MetastoreService: sdk.String("magnam"),
                    SparkHistoryServerConfig: &shared.SparkHistoryServerConfig{
                        DataprocCluster: sdk.String("debitis"),
                    },
                },
            },
            Labels: map[string]string{
                "delectus": "tempora",
            },
            PysparkBatch: &shared.PySparkBatch{
                ArchiveUris: []string{
                    "molestiae",
                    "minus",
                },
                Args: []string{
                    "voluptatum",
                    "iusto",
                    "excepturi",
                    "nisi",
                },
                FileUris: []string{
                    "temporibus",
                    "ab",
                    "quis",
                    "veritatis",
                },
                JarFileUris: []string{
                    "perferendis",
                    "ipsam",
                    "repellendus",
                },
                MainPythonFileURI: sdk.String("sapiente"),
                PythonFileUris: []string{
                    "odit",
                    "at",
                    "at",
                    "maiores",
                },
            },
            RuntimeConfig: &shared.RuntimeConfig{
                ContainerImage: sdk.String("molestiae"),
                Properties: map[string]string{
                    "quod": "esse",
                    "totam": "porro",
                    "dolorum": "dicta",
                    "nam": "officia",
                },
                Version: sdk.String("occaecati"),
            },
            RuntimeInfo: &shared.RuntimeInfoInput{
                ApproximateUsage: &shared.UsageMetrics{
                    MilliDcuSeconds: sdk.String("fugit"),
                    ShuffleStorageGbSeconds: sdk.String("deleniti"),
                },
                CurrentUsage: &shared.UsageSnapshot{
                    MilliDcu: sdk.String("hic"),
                    ShuffleStorageGb: sdk.String("optio"),
                    SnapshotTime: sdk.String("totam"),
                },
            },
            SparkBatch: &shared.SparkBatch{
                ArchiveUris: []string{
                    "commodi",
                },
                Args: []string{
                    "modi",
                    "qui",
                },
                FileUris: []string{
                    "cum",
                    "esse",
                    "ipsum",
                    "excepturi",
                },
                JarFileUris: []string{
                    "perferendis",
                },
                MainClass: sdk.String("ad"),
                MainJarFileURI: sdk.String("natus"),
            },
            SparkRBatch: &shared.SparkRBatch{
                ArchiveUris: []string{
                    "iste",
                },
                Args: []string{
                    "natus",
                },
                FileUris: []string{
                    "hic",
                    "saepe",
                },
                MainRFileURI: sdk.String("fuga"),
            },
            SparkSQLBatch: &shared.SparkSQLBatch{
                JarFileUris: []string{
                    "corporis",
                    "iste",
                },
                QueryFileURI: sdk.String("iure"),
                QueryVariables: map[string]string{
                    "quidem": "architecto",
                    "ipsa": "reiciendis",
                    "est": "mollitia",
                    "laborum": "dolores",
                },
            },
        },
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BatchID: sdk.String("explicabo"),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("enim"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("nemo"),
        Parent: "minima",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        RequestID: sdk.String("accusantium"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.DataprocProjectsLocationsBatchesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
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
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [DataprocProjectsLocationsBatchesCreate](docs/projects/README.md#dataprocprojectslocationsbatchescreate) - Creates a batch workload that executes asynchronously.
* [DataprocProjectsLocationsBatchesList](docs/projects/README.md#dataprocprojectslocationsbatcheslist) - Lists batch workloads.
* [DataprocProjectsRegionsAutoscalingPoliciesCreate](docs/projects/README.md#dataprocprojectsregionsautoscalingpoliciescreate) - Creates new autoscaling policy.
* [DataprocProjectsRegionsAutoscalingPoliciesList](docs/projects/README.md#dataprocprojectsregionsautoscalingpolicieslist) - Lists autoscaling policies in the project.
* [DataprocProjectsRegionsClustersCreate](docs/projects/README.md#dataprocprojectsregionsclusterscreate) - Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
* [DataprocProjectsRegionsClustersDelete](docs/projects/README.md#dataprocprojectsregionsclustersdelete) - Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
* [DataprocProjectsRegionsClustersDiagnose](docs/projects/README.md#dataprocprojectsregionsclustersdiagnose) - Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).
* [DataprocProjectsRegionsClustersGet](docs/projects/README.md#dataprocprojectsregionsclustersget) - Gets the resource representation for a cluster in a project.
* [DataprocProjectsRegionsClustersInjectCredentials](docs/projects/README.md#dataprocprojectsregionsclustersinjectcredentials) - Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.
* [DataprocProjectsRegionsClustersList](docs/projects/README.md#dataprocprojectsregionsclusterslist) - Lists all regions/{region}/clusters in a project alphabetically.
* [DataprocProjectsRegionsClustersNodeGroupsCreate](docs/projects/README.md#dataprocprojectsregionsclustersnodegroupscreate) - Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
* [DataprocProjectsRegionsClustersNodeGroupsResize](docs/projects/README.md#dataprocprojectsregionsclustersnodegroupsresize) - Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
* [DataprocProjectsRegionsClustersPatch](docs/projects/README.md#dataprocprojectsregionsclusterspatch) - Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.
* [DataprocProjectsRegionsClustersRepair](docs/projects/README.md#dataprocprojectsregionsclustersrepair) - Repairs a cluster.
* [DataprocProjectsRegionsClustersStart](docs/projects/README.md#dataprocprojectsregionsclustersstart) - Starts a cluster in a project.
* [DataprocProjectsRegionsClustersStop](docs/projects/README.md#dataprocprojectsregionsclustersstop) - Stops a cluster in a project.
* [DataprocProjectsRegionsJobsCancel](docs/projects/README.md#dataprocprojectsregionsjobscancel) - Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).
* [DataprocProjectsRegionsJobsDelete](docs/projects/README.md#dataprocprojectsregionsjobsdelete) - Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
* [DataprocProjectsRegionsJobsGet](docs/projects/README.md#dataprocprojectsregionsjobsget) - Gets the resource representation for a job in a project.
* [DataprocProjectsRegionsJobsList](docs/projects/README.md#dataprocprojectsregionsjobslist) - Lists regions/{region}/jobs in a project.
* [DataprocProjectsRegionsJobsPatch](docs/projects/README.md#dataprocprojectsregionsjobspatch) - Updates a job in a project.
* [DataprocProjectsRegionsJobsSubmit](docs/projects/README.md#dataprocprojectsregionsjobssubmit) - Submits a job to a cluster.
* [DataprocProjectsRegionsJobsSubmitAsOperation](docs/projects/README.md#dataprocprojectsregionsjobssubmitasoperation) - Submits job to a cluster.
* [DataprocProjectsRegionsOperationsCancel](docs/projects/README.md#dataprocprojectsregionsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* [DataprocProjectsRegionsWorkflowTemplatesCreate](docs/projects/README.md#dataprocprojectsregionsworkflowtemplatescreate) - Creates new workflow template.
* [DataprocProjectsRegionsWorkflowTemplatesDelete](docs/projects/README.md#dataprocprojectsregionsworkflowtemplatesdelete) - Deletes a workflow template. It does not cancel in-progress workflows.
* [DataprocProjectsRegionsWorkflowTemplatesGet](docs/projects/README.md#dataprocprojectsregionsworkflowtemplatesget) - Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.
* [DataprocProjectsRegionsWorkflowTemplatesGetIamPolicy](docs/projects/README.md#dataprocprojectsregionsworkflowtemplatesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [DataprocProjectsRegionsWorkflowTemplatesInstantiate](docs/projects/README.md#dataprocprojectsregionsworkflowtemplatesinstantiate) - Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
* [DataprocProjectsRegionsWorkflowTemplatesInstantiateInline](docs/projects/README.md#dataprocprojectsregionsworkflowtemplatesinstantiateinline) - Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
* [DataprocProjectsRegionsWorkflowTemplatesList](docs/projects/README.md#dataprocprojectsregionsworkflowtemplateslist) - Lists workflows that match the specified filter in the request.
* [DataprocProjectsRegionsWorkflowTemplatesSetIamPolicy](docs/projects/README.md#dataprocprojectsregionsworkflowtemplatessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* [DataprocProjectsRegionsWorkflowTemplatesTestIamPermissions](docs/projects/README.md#dataprocprojectsregionsworkflowtemplatestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [DataprocProjectsRegionsWorkflowTemplatesUpdate](docs/projects/README.md#dataprocprojectsregionsworkflowtemplatesupdate) - Updates (replaces) workflow template. The updated template must contain version that matches the current server version.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
