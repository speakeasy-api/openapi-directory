# Projects

### Available Operations

* [DataprocProjectsLocationsBatchesCreate](#dataprocprojectslocationsbatchescreate) - Creates a batch workload that executes asynchronously.
* [DataprocProjectsLocationsBatchesList](#dataprocprojectslocationsbatcheslist) - Lists batch workloads.
* [DataprocProjectsRegionsAutoscalingPoliciesCreate](#dataprocprojectsregionsautoscalingpoliciescreate) - Creates new autoscaling policy.
* [DataprocProjectsRegionsAutoscalingPoliciesList](#dataprocprojectsregionsautoscalingpolicieslist) - Lists autoscaling policies in the project.
* [DataprocProjectsRegionsClustersCreate](#dataprocprojectsregionsclusterscreate) - Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
* [DataprocProjectsRegionsClustersDelete](#dataprocprojectsregionsclustersdelete) - Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
* [DataprocProjectsRegionsClustersDiagnose](#dataprocprojectsregionsclustersdiagnose) - Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).
* [DataprocProjectsRegionsClustersGet](#dataprocprojectsregionsclustersget) - Gets the resource representation for a cluster in a project.
* [DataprocProjectsRegionsClustersInjectCredentials](#dataprocprojectsregionsclustersinjectcredentials) - Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.
* [DataprocProjectsRegionsClustersList](#dataprocprojectsregionsclusterslist) - Lists all regions/{region}/clusters in a project alphabetically.
* [DataprocProjectsRegionsClustersNodeGroupsCreate](#dataprocprojectsregionsclustersnodegroupscreate) - Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
* [DataprocProjectsRegionsClustersNodeGroupsResize](#dataprocprojectsregionsclustersnodegroupsresize) - Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
* [DataprocProjectsRegionsClustersPatch](#dataprocprojectsregionsclusterspatch) - Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.
* [DataprocProjectsRegionsClustersRepair](#dataprocprojectsregionsclustersrepair) - Repairs a cluster.
* [DataprocProjectsRegionsClustersStart](#dataprocprojectsregionsclustersstart) - Starts a cluster in a project.
* [DataprocProjectsRegionsClustersStop](#dataprocprojectsregionsclustersstop) - Stops a cluster in a project.
* [DataprocProjectsRegionsJobsCancel](#dataprocprojectsregionsjobscancel) - Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).
* [DataprocProjectsRegionsJobsDelete](#dataprocprojectsregionsjobsdelete) - Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
* [DataprocProjectsRegionsJobsGet](#dataprocprojectsregionsjobsget) - Gets the resource representation for a job in a project.
* [DataprocProjectsRegionsJobsList](#dataprocprojectsregionsjobslist) - Lists regions/{region}/jobs in a project.
* [DataprocProjectsRegionsJobsPatch](#dataprocprojectsregionsjobspatch) - Updates a job in a project.
* [DataprocProjectsRegionsJobsSubmit](#dataprocprojectsregionsjobssubmit) - Submits a job to a cluster.
* [DataprocProjectsRegionsJobsSubmitAsOperation](#dataprocprojectsregionsjobssubmitasoperation) - Submits job to a cluster.
* [DataprocProjectsRegionsOperationsCancel](#dataprocprojectsregionsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* [DataprocProjectsRegionsWorkflowTemplatesCreate](#dataprocprojectsregionsworkflowtemplatescreate) - Creates new workflow template.
* [DataprocProjectsRegionsWorkflowTemplatesDelete](#dataprocprojectsregionsworkflowtemplatesdelete) - Deletes a workflow template. It does not cancel in-progress workflows.
* [DataprocProjectsRegionsWorkflowTemplatesGet](#dataprocprojectsregionsworkflowtemplatesget) - Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.
* [DataprocProjectsRegionsWorkflowTemplatesGetIamPolicy](#dataprocprojectsregionsworkflowtemplatesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [DataprocProjectsRegionsWorkflowTemplatesInstantiate](#dataprocprojectsregionsworkflowtemplatesinstantiate) - Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
* [DataprocProjectsRegionsWorkflowTemplatesInstantiateInline](#dataprocprojectsregionsworkflowtemplatesinstantiateinline) - Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
* [DataprocProjectsRegionsWorkflowTemplatesList](#dataprocprojectsregionsworkflowtemplateslist) - Lists workflows that match the specified filter in the request.
* [DataprocProjectsRegionsWorkflowTemplatesSetIamPolicy](#dataprocprojectsregionsworkflowtemplatessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* [DataprocProjectsRegionsWorkflowTemplatesTestIamPermissions](#dataprocprojectsregionsworkflowtemplatestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [DataprocProjectsRegionsWorkflowTemplatesUpdate](#dataprocprojectsregionsworkflowtemplatesupdate) - Updates (replaces) workflow template. The updated template must contain version that matches the current server version.

## DataprocProjectsLocationsBatchesCreate

Creates a batch workload that executes asynchronously.

### Example Usage

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
                    IdleTTL: sdk.String("sapiente"),
                    KmsKey: sdk.String("architecto"),
                    NetworkTags: []string{
                        "dolorem",
                        "culpa",
                        "consequuntur",
                    },
                    NetworkURI: sdk.String("repellat"),
                    ServiceAccount: sdk.String("mollitia"),
                    StagingBucket: sdk.String("occaecati"),
                    SubnetworkURI: sdk.String("numquam"),
                    TTL: sdk.String("commodi"),
                },
                PeripheralsConfig: &shared.PeripheralsConfig{
                    MetastoreService: sdk.String("quam"),
                    SparkHistoryServerConfig: &shared.SparkHistoryServerConfig{
                        DataprocCluster: sdk.String("molestiae"),
                    },
                },
            },
            Labels: map[string]string{
                "error": "quia",
            },
            PysparkBatch: &shared.PySparkBatch{
                ArchiveUris: []string{
                    "vitae",
                    "laborum",
                },
                Args: []string{
                    "enim",
                    "odit",
                    "quo",
                },
                FileUris: []string{
                    "tenetur",
                },
                JarFileUris: []string{
                    "id",
                    "possimus",
                },
                MainPythonFileURI: sdk.String("aut"),
                PythonFileUris: []string{
                    "error",
                },
            },
            RuntimeConfig: &shared.RuntimeConfig{
                ContainerImage: sdk.String("temporibus"),
                Properties: map[string]string{
                    "quasi": "reiciendis",
                    "voluptatibus": "vero",
                    "nihil": "praesentium",
                },
                Version: sdk.String("voluptatibus"),
            },
            RuntimeInfo: &shared.RuntimeInfoInput{
                ApproximateUsage: &shared.UsageMetrics{
                    MilliDcuSeconds: sdk.String("ipsa"),
                    ShuffleStorageGbSeconds: sdk.String("omnis"),
                },
                CurrentUsage: &shared.UsageSnapshot{
                    MilliDcu: sdk.String("voluptate"),
                    ShuffleStorageGb: sdk.String("cum"),
                    SnapshotTime: sdk.String("perferendis"),
                },
            },
            SparkBatch: &shared.SparkBatch{
                ArchiveUris: []string{
                    "reprehenderit",
                },
                Args: []string{
                    "maiores",
                    "dicta",
                },
                FileUris: []string{
                    "dolore",
                    "iusto",
                },
                JarFileUris: []string{
                    "harum",
                },
                MainClass: sdk.String("enim"),
                MainJarFileURI: sdk.String("accusamus"),
            },
            SparkRBatch: &shared.SparkRBatch{
                ArchiveUris: []string{
                    "repudiandae",
                    "quae",
                },
                Args: []string{
                    "quidem",
                },
                FileUris: []string{
                    "excepturi",
                    "pariatur",
                    "modi",
                },
                MainRFileURI: sdk.String("praesentium"),
            },
            SparkSQLBatch: &shared.SparkSQLBatch{
                JarFileUris: []string{
                    "voluptates",
                    "quasi",
                    "repudiandae",
                },
                QueryFileURI: sdk.String("sint"),
                QueryVariables: map[string]string{
                    "itaque": "incidunt",
                },
            },
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BatchID: sdk.String("est"),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("explicabo"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("distinctio"),
        Parent: "quibusdam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        RequestID: sdk.String("modi"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("aliquid"),
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

## DataprocProjectsLocationsBatchesList

Lists batch workloads.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsLocationsBatchesList(ctx, operations.DataprocProjectsLocationsBatchesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("assumenda"),
        Filter: sdk.String("ipsam"),
        Key: sdk.String("alias"),
        OauthToken: sdk.String("fugit"),
        OrderBy: sdk.String("dolorum"),
        PageSize: sdk.Int64(569618),
        PageToken: sdk.String("tempora"),
        Parent: "facilis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.DataprocProjectsLocationsBatchesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBatchesResponse != nil {
        // handle response
    }
}
```

## DataprocProjectsRegionsAutoscalingPoliciesCreate

Creates new autoscaling policy.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsAutoscalingPoliciesCreate(ctx, operations.DataprocProjectsRegionsAutoscalingPoliciesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AutoscalingPolicyInput: &shared.AutoscalingPolicyInput{
            BasicAlgorithm: &shared.BasicAutoscalingAlgorithm{
                CooldownPeriod: sdk.String("non"),
                SparkStandaloneConfig: &shared.SparkStandaloneAutoscalingConfig{
                    GracefulDecommissionTimeout: sdk.String("eligendi"),
                    ScaleDownFactor: sdk.Float64(5761.57),
                    ScaleDownMinWorkerFraction: sdk.Float64(3960.98),
                    ScaleUpFactor: sdk.Float64(5920.42),
                    ScaleUpMinWorkerFraction: sdk.Float64(8960.39),
                },
                YarnConfig: &shared.BasicYarnAutoscalingConfig{
                    GracefulDecommissionTimeout: sdk.String("sint"),
                    ScaleDownFactor: sdk.Float64(6389.21),
                    ScaleDownMinWorkerFraction: sdk.Float64(2230.81),
                    ScaleUpFactor: sdk.Float64(8915.55),
                    ScaleUpMinWorkerFraction: sdk.Float64(9527.49),
                },
            },
            ID: sdk.String("a77dfb14-cd66-4ae3-95ef-b9ba88f3a669"),
            Labels: map[string]string{
                "molestiae": "perferendis",
                "nihil": "magnam",
                "distinctio": "id",
            },
            SecondaryWorkerConfig: &shared.InstanceGroupAutoscalingPolicyConfig{
                MaxInstances: sdk.Int(287991),
                MinInstances: sdk.Int(290077),
                Weight: sdk.Int(383462),
            },
            WorkerConfig: &shared.InstanceGroupAutoscalingPolicyConfig{
                MaxInstances: sdk.Int(618016),
                MinInstances: sdk.Int(749170),
                Weight: sdk.Int(428769),
            },
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("et"),
        OauthToken: sdk.String("excepturi"),
        Parent: "ullam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("sint"),
    }, operations.DataprocProjectsRegionsAutoscalingPoliciesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutoscalingPolicy != nil {
        // handle response
    }
}
```

## DataprocProjectsRegionsAutoscalingPoliciesList

Lists autoscaling policies in the project.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsAutoscalingPoliciesList(ctx, operations.DataprocProjectsRegionsAutoscalingPoliciesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("ad"),
        Key: sdk.String("eum"),
        OauthToken: sdk.String("dolor"),
        PageSize: sdk.Int64(896547),
        PageToken: sdk.String("odit"),
        Parent: "nemo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("doloribus"),
    }, operations.DataprocProjectsRegionsAutoscalingPoliciesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAutoscalingPoliciesResponse != nil {
        // handle response
    }
}
```

## DataprocProjectsRegionsClustersCreate

Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsClustersCreate(ctx, operations.DataprocProjectsRegionsClustersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ClusterInput: &shared.ClusterInput{
            ClusterName: sdk.String("eius"),
            Config: &shared.ClusterConfigInput{
                AutoscalingConfig: &shared.AutoscalingConfig{
                    PolicyURI: sdk.String("maxime"),
                },
                AuxiliaryNodeGroups: []shared.AuxiliaryNodeGroupInput{
                    shared.AuxiliaryNodeGroupInput{
                        NodeGroup: &shared.NodeGroupInput{
                            Labels: map[string]string{
                                "in": "architecto",
                                "architecto": "repudiandae",
                                "ullam": "expedita",
                            },
                            Name: sdk.String("Kristie Spencer"),
                            NodeGroupConfig: &shared.InstanceGroupConfigInput{
                                Accelerators: []shared.AcceleratorConfig{
                                    shared.AcceleratorConfig{
                                        AcceleratorCount: sdk.Int(37559),
                                        AcceleratorTypeURI: sdk.String("consequuntur"),
                                    },
                                    shared.AcceleratorConfig{
                                        AcceleratorCount: sdk.Int(508315),
                                        AcceleratorTypeURI: sdk.String("natus"),
                                    },
                                    shared.AcceleratorConfig{
                                        AcceleratorCount: sdk.Int(166847),
                                        AcceleratorTypeURI: sdk.String("sunt"),
                                    },
                                    shared.AcceleratorConfig{
                                        AcceleratorCount: sdk.Int(779051),
                                        AcceleratorTypeURI: sdk.String("illum"),
                                    },
                                },
                                DiskConfig: &shared.DiskConfig{
                                    BootDiskSizeGb: sdk.Int(864934),
                                    BootDiskType: sdk.String("maxime"),
                                    LocalSsdInterface: sdk.String("ea"),
                                    NumLocalSsds: sdk.Int(569101),
                                },
                                ImageURI: sdk.String("odit"),
                                MachineTypeURI: sdk.String("ea"),
                                MinCPUPlatform: sdk.String("accusantium"),
                                NumInstances: sdk.Int(69167),
                                Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumSpot.ToPointer(),
                            },
                            Roles: []shared.NodeGroupRolesEnum{
                                shared.NodeGroupRolesEnumRoleUnspecified,
                                shared.NodeGroupRolesEnumRoleUnspecified,
                                shared.NodeGroupRolesEnumRoleUnspecified,
                            },
                        },
                        NodeGroupID: sdk.String("nam"),
                    },
                    shared.AuxiliaryNodeGroupInput{
                        NodeGroup: &shared.NodeGroupInput{
                            Labels: map[string]string{
                                "pariatur": "nemo",
                            },
                            Name: sdk.String("Joseph Steuber DDS"),
                            NodeGroupConfig: &shared.InstanceGroupConfigInput{
                                Accelerators: []shared.AcceleratorConfig{
                                    shared.AcceleratorConfig{
                                        AcceleratorCount: sdk.Int(944124),
                                        AcceleratorTypeURI: sdk.String("libero"),
                                    },
                                    shared.AcceleratorConfig{
                                        AcceleratorCount: sdk.Int(749999),
                                        AcceleratorTypeURI: sdk.String("dolores"),
                                    },
                                },
                                DiskConfig: &shared.DiskConfig{
                                    BootDiskSizeGb: sdk.Int(339404),
                                    BootDiskType: sdk.String("totam"),
                                    LocalSsdInterface: sdk.String("dignissimos"),
                                    NumLocalSsds: sdk.Int(54338),
                                },
                                ImageURI: sdk.String("quis"),
                                MachineTypeURI: sdk.String("nesciunt"),
                                MinCPUPlatform: sdk.String("eos"),
                                NumInstances: sdk.Int(18521),
                                Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumPreemptibilityUnspecified.ToPointer(),
                            },
                            Roles: []shared.NodeGroupRolesEnum{
                                shared.NodeGroupRolesEnumRoleUnspecified,
                                shared.NodeGroupRolesEnumRoleUnspecified,
                                shared.NodeGroupRolesEnumDriver,
                                shared.NodeGroupRolesEnumRoleUnspecified,
                            },
                        },
                        NodeGroupID: sdk.String("hic"),
                    },
                    shared.AuxiliaryNodeGroupInput{
                        NodeGroup: &shared.NodeGroupInput{
                            Labels: map[string]string{
                                "omnis": "facilis",
                                "perspiciatis": "voluptatem",
                                "porro": "consequuntur",
                                "blanditiis": "error",
                            },
                            Name: sdk.String("Violet Price"),
                            NodeGroupConfig: &shared.InstanceGroupConfigInput{
                                Accelerators: []shared.AcceleratorConfig{
                                    shared.AcceleratorConfig{
                                        AcceleratorCount: sdk.Int(267262),
                                        AcceleratorTypeURI: sdk.String("iste"),
                                    },
                                    shared.AcceleratorConfig{
                                        AcceleratorCount: sdk.Int(679091),
                                        AcceleratorTypeURI: sdk.String("deleniti"),
                                    },
                                    shared.AcceleratorConfig{
                                        AcceleratorCount: sdk.Int(864282),
                                        AcceleratorTypeURI: sdk.String("provident"),
                                    },
                                    shared.AcceleratorConfig{
                                        AcceleratorCount: sdk.Int(750844),
                                        AcceleratorTypeURI: sdk.String("libero"),
                                    },
                                },
                                DiskConfig: &shared.DiskConfig{
                                    BootDiskSizeGb: sdk.Int(964490),
                                    BootDiskType: sdk.String("quaerat"),
                                    LocalSsdInterface: sdk.String("quos"),
                                    NumLocalSsds: sdk.Int(398221),
                                },
                                ImageURI: sdk.String("dolorem"),
                                MachineTypeURI: sdk.String("dolorem"),
                                MinCPUPlatform: sdk.String("dolor"),
                                NumInstances: sdk.Int(186193),
                                Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumPreemptibilityUnspecified.ToPointer(),
                            },
                            Roles: []shared.NodeGroupRolesEnum{
                                shared.NodeGroupRolesEnumDriver,
                                shared.NodeGroupRolesEnumDriver,
                                shared.NodeGroupRolesEnumRoleUnspecified,
                                shared.NodeGroupRolesEnumRoleUnspecified,
                            },
                        },
                        NodeGroupID: sdk.String("reiciendis"),
                    },
                },
                ConfigBucket: sdk.String("amet"),
                DataprocMetricConfig: &shared.DataprocMetricConfig{
                    Metrics: []shared.Metric{
                        shared.Metric{
                            MetricOverrides: []string{
                                "veritatis",
                                "ipsa",
                            },
                            MetricSource: shared.MetricMetricSourceEnumMetricSourceUnspecified.ToPointer(),
                        },
                        shared.Metric{
                            MetricOverrides: []string{
                                "odio",
                                "quaerat",
                            },
                            MetricSource: shared.MetricMetricSourceEnumHivemetastore.ToPointer(),
                        },
                        shared.Metric{
                            MetricOverrides: []string{
                                "voluptatibus",
                                "voluptas",
                                "natus",
                            },
                            MetricSource: shared.MetricMetricSourceEnumMonitoringAgentDefaults.ToPointer(),
                        },
                    },
                },
                EncryptionConfig: &shared.EncryptionConfig{
                    GcePdKmsKeyName: sdk.String("atque"),
                    KmsKey: sdk.String("sit"),
                },
                EndpointConfig: &shared.EndpointConfigInput{
                    EnableHTTPPortAccess: sdk.Bool(false),
                },
                GceClusterConfig: &shared.GceClusterConfig{
                    ConfidentialInstanceConfig: &shared.ConfidentialInstanceConfig{
                        EnableConfidentialCompute: sdk.Bool(false),
                    },
                    InternalIPOnly: sdk.Bool(false),
                    Metadata: map[string]string{
                        "ab": "soluta",
                        "dolorum": "iusto",
                        "voluptate": "dolorum",
                        "deleniti": "omnis",
                    },
                    NetworkURI: sdk.String("necessitatibus"),
                    NodeGroupAffinity: &shared.NodeGroupAffinity{
                        NodeGroupURI: sdk.String("distinctio"),
                    },
                    PrivateIpv6GoogleAccess: shared.GceClusterConfigPrivateIpv6GoogleAccessEnumBidirectional.ToPointer(),
                    ReservationAffinity: &shared.ReservationAffinity{
                        ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumNoReservation.ToPointer(),
                        Key: sdk.String("ipsum"),
                        Values: []string{
                            "id",
                            "saepe",
                        },
                    },
                    ServiceAccount: sdk.String("eius"),
                    ServiceAccountScopes: []string{
                        "perferendis",
                    },
                    ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                        EnableIntegrityMonitoring: sdk.Bool(false),
                        EnableSecureBoot: sdk.Bool(false),
                        EnableVtpm: sdk.Bool(false),
                    },
                    SubnetworkURI: sdk.String("amet"),
                    Tags: []string{
                        "accusamus",
                        "ad",
                        "saepe",
                        "suscipit",
                    },
                    ZoneURI: sdk.String("deserunt"),
                },
                GkeClusterConfig: &shared.GkeClusterConfig{
                    GkeClusterTarget: sdk.String("provident"),
                    NamespacedGkeDeploymentTarget: &shared.NamespacedGkeDeploymentTarget{
                        ClusterNamespace: sdk.String("minima"),
                        TargetGkeCluster: sdk.String("repellendus"),
                    },
                    NodePoolTarget: []shared.GkeNodePoolTarget{
                        shared.GkeNodePoolTarget{
                            NodePool: sdk.String("similique"),
                            NodePoolConfig: &shared.GkeNodePoolConfig{
                                Autoscaling: &shared.GkeNodePoolAutoscalingConfig{
                                    MaxNodeCount: sdk.Int(55),
                                    MinNodeCount: sdk.Int(872651),
                                },
                                Config: &shared.GkeNodeConfig{
                                    Accelerators: []shared.GkeNodePoolAcceleratorConfig{
                                        shared.GkeNodePoolAcceleratorConfig{
                                            AcceleratorCount: sdk.String("tempora"),
                                            AcceleratorType: sdk.String("vel"),
                                            GpuPartitionSize: sdk.String("quod"),
                                        },
                                        shared.GkeNodePoolAcceleratorConfig{
                                            AcceleratorCount: sdk.String("officiis"),
                                            AcceleratorType: sdk.String("qui"),
                                            GpuPartitionSize: sdk.String("dolorum"),
                                        },
                                    },
                                    BootDiskKmsKey: sdk.String("a"),
                                    LocalSsdCount: sdk.Int(456130),
                                    MachineType: sdk.String("harum"),
                                    MinCPUPlatform: sdk.String("iusto"),
                                    Preemptible: sdk.Bool(false),
                                    Spot: sdk.Bool(false),
                                },
                                Locations: []string{
                                    "quisquam",
                                },
                            },
                            Roles: []shared.GkeNodePoolTargetRolesEnum{
                                shared.GkeNodePoolTargetRolesEnumDefault,
                                shared.GkeNodePoolTargetRolesEnumSparkDriver,
                                shared.GkeNodePoolTargetRolesEnumSparkExecutor,
                                shared.GkeNodePoolTargetRolesEnumDefault,
                            },
                        },
                        shared.GkeNodePoolTarget{
                            NodePool: sdk.String("enim"),
                            NodePoolConfig: &shared.GkeNodePoolConfig{
                                Autoscaling: &shared.GkeNodePoolAutoscalingConfig{
                                    MaxNodeCount: sdk.Int(213312),
                                    MinNodeCount: sdk.Int(957451),
                                },
                                Config: &shared.GkeNodeConfig{
                                    Accelerators: []shared.GkeNodePoolAcceleratorConfig{
                                        shared.GkeNodePoolAcceleratorConfig{
                                            AcceleratorCount: sdk.String("nihil"),
                                            AcceleratorType: sdk.String("sit"),
                                            GpuPartitionSize: sdk.String("expedita"),
                                        },
                                        shared.GkeNodePoolAcceleratorConfig{
                                            AcceleratorCount: sdk.String("neque"),
                                            AcceleratorType: sdk.String("sed"),
                                            GpuPartitionSize: sdk.String("vel"),
                                        },
                                        shared.GkeNodePoolAcceleratorConfig{
                                            AcceleratorCount: sdk.String("libero"),
                                            AcceleratorType: sdk.String("voluptas"),
                                            GpuPartitionSize: sdk.String("deserunt"),
                                        },
                                    },
                                    BootDiskKmsKey: sdk.String("quam"),
                                    LocalSsdCount: sdk.Int(214880),
                                    MachineType: sdk.String("incidunt"),
                                    MinCPUPlatform: sdk.String("qui"),
                                    Preemptible: sdk.Bool(false),
                                    Spot: sdk.Bool(false),
                                },
                                Locations: []string{
                                    "maxime",
                                    "pariatur",
                                    "soluta",
                                },
                            },
                            Roles: []shared.GkeNodePoolTargetRolesEnum{
                                shared.GkeNodePoolTargetRolesEnumSparkDriver,
                            },
                        },
                        shared.GkeNodePoolTarget{
                            NodePool: sdk.String("totam"),
                            NodePoolConfig: &shared.GkeNodePoolConfig{
                                Autoscaling: &shared.GkeNodePoolAutoscalingConfig{
                                    MaxNodeCount: sdk.Int(276894),
                                    MinNodeCount: sdk.Int(132068),
                                },
                                Config: &shared.GkeNodeConfig{
                                    Accelerators: []shared.GkeNodePoolAcceleratorConfig{
                                        shared.GkeNodePoolAcceleratorConfig{
                                            AcceleratorCount: sdk.String("distinctio"),
                                            AcceleratorType: sdk.String("facilis"),
                                            GpuPartitionSize: sdk.String("aliquid"),
                                        },
                                    },
                                    BootDiskKmsKey: sdk.String("quam"),
                                    LocalSsdCount: sdk.Int(565421),
                                    MachineType: sdk.String("temporibus"),
                                    MinCPUPlatform: sdk.String("qui"),
                                    Preemptible: sdk.Bool(false),
                                    Spot: sdk.Bool(false),
                                },
                                Locations: []string{
                                    "fugit",
                                },
                            },
                            Roles: []shared.GkeNodePoolTargetRolesEnum{
                                shared.GkeNodePoolTargetRolesEnumController,
                            },
                        },
                    },
                },
                InitializationActions: []shared.NodeInitializationAction{
                    shared.NodeInitializationAction{
                        ExecutableFile: sdk.String("ullam"),
                        ExecutionTimeout: sdk.String("nam"),
                    },
                },
                LifecycleConfig: &shared.LifecycleConfigInput{
                    AutoDeleteTime: sdk.String("hic"),
                    AutoDeleteTTL: sdk.String("voluptatem"),
                    IdleDeleteTTL: sdk.String("cumque"),
                },
                MasterConfig: &shared.InstanceGroupConfigInput{
                    Accelerators: []shared.AcceleratorConfig{
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.Int(748664),
                            AcceleratorTypeURI: sdk.String("et"),
                        },
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.Int(903720),
                            AcceleratorTypeURI: sdk.String("ipsum"),
                        },
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.Int(83422),
                            AcceleratorTypeURI: sdk.String("nobis"),
                        },
                    },
                    DiskConfig: &shared.DiskConfig{
                        BootDiskSizeGb: sdk.Int(552193),
                        BootDiskType: sdk.String("tempore"),
                        LocalSsdInterface: sdk.String("cupiditate"),
                        NumLocalSsds: sdk.Int(45614),
                    },
                    ImageURI: sdk.String("delectus"),
                    MachineTypeURI: sdk.String("dolorem"),
                    MinCPUPlatform: sdk.String("dolore"),
                    NumInstances: sdk.Int(286915),
                    Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumPreemptibilityUnspecified.ToPointer(),
                },
                MetastoreConfig: &shared.MetastoreConfig{
                    DataprocMetastoreService: sdk.String("dolorum"),
                },
                SecondaryWorkerConfig: &shared.InstanceGroupConfigInput{
                    Accelerators: []shared.AcceleratorConfig{
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.Int(63038),
                            AcceleratorTypeURI: sdk.String("aut"),
                        },
                    },
                    DiskConfig: &shared.DiskConfig{
                        BootDiskSizeGb: sdk.Int(555649),
                        BootDiskType: sdk.String("itaque"),
                        LocalSsdInterface: sdk.String("consequatur"),
                        NumLocalSsds: sdk.Int(669917),
                    },
                    ImageURI: sdk.String("repellendus"),
                    MachineTypeURI: sdk.String("porro"),
                    MinCPUPlatform: sdk.String("doloribus"),
                    NumInstances: sdk.Int(281730),
                    Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumPreemptible.ToPointer(),
                },
                SecurityConfig: &shared.SecurityConfig{
                    IdentityConfig: &shared.IdentityConfig{
                        UserServiceAccountMapping: map[string]string{
                            "qui": "quae",
                            "laudantium": "odio",
                            "occaecati": "voluptatibus",
                        },
                    },
                    KerberosConfig: &shared.KerberosConfig{
                        CrossRealmTrustAdminServer: sdk.String("quisquam"),
                        CrossRealmTrustKdc: sdk.String("vero"),
                        CrossRealmTrustRealm: sdk.String("omnis"),
                        CrossRealmTrustSharedPasswordURI: sdk.String("quis"),
                        EnableKerberos: sdk.Bool(false),
                        KdcDbKeyURI: sdk.String("ipsum"),
                        KeyPasswordURI: sdk.String("delectus"),
                        KeystorePasswordURI: sdk.String("voluptate"),
                        KeystoreURI: sdk.String("consectetur"),
                        KmsKeyURI: sdk.String("vero"),
                        Realm: sdk.String("tenetur"),
                        RootPrincipalPasswordURI: sdk.String("dignissimos"),
                        TgtLifetimeHours: sdk.Int(941378),
                        TruststorePasswordURI: sdk.String("distinctio"),
                        TruststoreURI: sdk.String("quod"),
                    },
                },
                SoftwareConfig: &shared.SoftwareConfig{
                    ImageVersion: sdk.String("odio"),
                    OptionalComponents: []shared.SoftwareConfigOptionalComponentsEnum{
                        shared.SoftwareConfigOptionalComponentsEnumTrino,
                        shared.SoftwareConfigOptionalComponentsEnumZeppelin,
                        shared.SoftwareConfigOptionalComponentsEnumHudi,
                    },
                    Properties: map[string]string{
                        "quibusdam": "illum",
                        "sequi": "natus",
                    },
                },
                TempBucket: sdk.String("impedit"),
                WorkerConfig: &shared.InstanceGroupConfigInput{
                    Accelerators: []shared.AcceleratorConfig{
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.Int(974259),
                            AcceleratorTypeURI: sdk.String("exercitationem"),
                        },
                    },
                    DiskConfig: &shared.DiskConfig{
                        BootDiskSizeGb: sdk.Int(862310),
                        BootDiskType: sdk.String("fugit"),
                        LocalSsdInterface: sdk.String("porro"),
                        NumLocalSsds: sdk.Int(981830),
                    },
                    ImageURI: sdk.String("doloribus"),
                    MachineTypeURI: sdk.String("iusto"),
                    MinCPUPlatform: sdk.String("eligendi"),
                    NumInstances: sdk.Int(497391),
                    Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumPreemptibilityUnspecified.ToPointer(),
                },
            },
            Labels: map[string]string{
                "tempora": "ipsam",
                "ea": "aspernatur",
                "vel": "possimus",
            },
            Metrics: &shared.ClusterMetrics{
                HdfsMetrics: map[string]string{
                    "ratione": "ex",
                    "laudantium": "dicta",
                },
                YarnMetrics: map[string]string{
                    "maiores": "quasi",
                },
            },
            ProjectID: sdk.String("ex"),
            VirtualClusterConfig: &shared.VirtualClusterConfig{
                AuxiliaryServicesConfig: &shared.AuxiliaryServicesConfig{
                    MetastoreConfig: &shared.MetastoreConfig{
                        DataprocMetastoreService: sdk.String("nulla"),
                    },
                    SparkHistoryServerConfig: &shared.SparkHistoryServerConfig{
                        DataprocCluster: sdk.String("excepturi"),
                    },
                },
                KubernetesClusterConfig: &shared.KubernetesClusterConfig{
                    GkeClusterConfig: &shared.GkeClusterConfig{
                        GkeClusterTarget: sdk.String("voluptatibus"),
                        NamespacedGkeDeploymentTarget: &shared.NamespacedGkeDeploymentTarget{
                            ClusterNamespace: sdk.String("nostrum"),
                            TargetGkeCluster: sdk.String("sapiente"),
                        },
                        NodePoolTarget: []shared.GkeNodePoolTarget{
                            shared.GkeNodePoolTarget{
                                NodePool: sdk.String("saepe"),
                                NodePoolConfig: &shared.GkeNodePoolConfig{
                                    Autoscaling: &shared.GkeNodePoolAutoscalingConfig{
                                        MaxNodeCount: sdk.Int(411372),
                                        MinNodeCount: sdk.Int(774048),
                                    },
                                    Config: &shared.GkeNodeConfig{
                                        Accelerators: []shared.GkeNodePoolAcceleratorConfig{
                                            shared.GkeNodePoolAcceleratorConfig{
                                                AcceleratorCount: sdk.String("veniam"),
                                                AcceleratorType: sdk.String("aliquid"),
                                                GpuPartitionSize: sdk.String("inventore"),
                                            },
                                            shared.GkeNodePoolAcceleratorConfig{
                                                AcceleratorCount: sdk.String("magnam"),
                                                AcceleratorType: sdk.String("ea"),
                                                GpuPartitionSize: sdk.String("quo"),
                                            },
                                        },
                                        BootDiskKmsKey: sdk.String("consectetur"),
                                        LocalSsdCount: sdk.Int(926213),
                                        MachineType: sdk.String("aspernatur"),
                                        MinCPUPlatform: sdk.String("minima"),
                                        Preemptible: sdk.Bool(false),
                                        Spot: sdk.Bool(false),
                                    },
                                    Locations: []string{
                                        "a",
                                    },
                                },
                                Roles: []shared.GkeNodePoolTargetRolesEnum{
                                    shared.GkeNodePoolTargetRolesEnumRoleUnspecified,
                                    shared.GkeNodePoolTargetRolesEnumRoleUnspecified,
                                    shared.GkeNodePoolTargetRolesEnumController,
                                },
                            },
                            shared.GkeNodePoolTarget{
                                NodePool: sdk.String("impedit"),
                                NodePoolConfig: &shared.GkeNodePoolConfig{
                                    Autoscaling: &shared.GkeNodePoolAutoscalingConfig{
                                        MaxNodeCount: sdk.Int(304582),
                                        MinNodeCount: sdk.Int(146946),
                                    },
                                    Config: &shared.GkeNodeConfig{
                                        Accelerators: []shared.GkeNodePoolAcceleratorConfig{
                                            shared.GkeNodePoolAcceleratorConfig{
                                                AcceleratorCount: sdk.String("inventore"),
                                                AcceleratorType: sdk.String("non"),
                                                GpuPartitionSize: sdk.String("et"),
                                            },
                                            shared.GkeNodePoolAcceleratorConfig{
                                                AcceleratorCount: sdk.String("dolorum"),
                                                AcceleratorType: sdk.String("laborum"),
                                                GpuPartitionSize: sdk.String("placeat"),
                                            },
                                            shared.GkeNodePoolAcceleratorConfig{
                                                AcceleratorCount: sdk.String("velit"),
                                                AcceleratorType: sdk.String("eum"),
                                                GpuPartitionSize: sdk.String("autem"),
                                            },
                                            shared.GkeNodePoolAcceleratorConfig{
                                                AcceleratorCount: sdk.String("nobis"),
                                                AcceleratorType: sdk.String("quas"),
                                                GpuPartitionSize: sdk.String("assumenda"),
                                            },
                                        },
                                        BootDiskKmsKey: sdk.String("nulla"),
                                        LocalSsdCount: sdk.Int(379034),
                                        MachineType: sdk.String("libero"),
                                        MinCPUPlatform: sdk.String("quasi"),
                                        Preemptible: sdk.Bool(false),
                                        Spot: sdk.Bool(false),
                                    },
                                    Locations: []string{
                                        "numquam",
                                        "explicabo",
                                    },
                                },
                                Roles: []shared.GkeNodePoolTargetRolesEnum{
                                    shared.GkeNodePoolTargetRolesEnumRoleUnspecified,
                                    shared.GkeNodePoolTargetRolesEnumController,
                                    shared.GkeNodePoolTargetRolesEnumDefault,
                                },
                            },
                            shared.GkeNodePoolTarget{
                                NodePool: sdk.String("odio"),
                                NodePoolConfig: &shared.GkeNodePoolConfig{
                                    Autoscaling: &shared.GkeNodePoolAutoscalingConfig{
                                        MaxNodeCount: sdk.Int(262118),
                                        MinNodeCount: sdk.Int(458515),
                                    },
                                    Config: &shared.GkeNodeConfig{
                                        Accelerators: []shared.GkeNodePoolAcceleratorConfig{
                                            shared.GkeNodePoolAcceleratorConfig{
                                                AcceleratorCount: sdk.String("rem"),
                                                AcceleratorType: sdk.String("fuga"),
                                                GpuPartitionSize: sdk.String("reprehenderit"),
                                            },
                                            shared.GkeNodePoolAcceleratorConfig{
                                                AcceleratorCount: sdk.String("quidem"),
                                                AcceleratorType: sdk.String("fugiat"),
                                                GpuPartitionSize: sdk.String("ut"),
                                            },
                                        },
                                        BootDiskKmsKey: sdk.String("eum"),
                                        LocalSsdCount: sdk.Int(379927),
                                        MachineType: sdk.String("assumenda"),
                                        MinCPUPlatform: sdk.String("eos"),
                                        Preemptible: sdk.Bool(false),
                                        Spot: sdk.Bool(false),
                                    },
                                    Locations: []string{
                                        "quisquam",
                                        "veritatis",
                                        "ipsa",
                                    },
                                },
                                Roles: []shared.GkeNodePoolTargetRolesEnum{
                                    shared.GkeNodePoolTargetRolesEnumSparkDriver,
                                    shared.GkeNodePoolTargetRolesEnumDefault,
                                    shared.GkeNodePoolTargetRolesEnumSparkDriver,
                                },
                            },
                            shared.GkeNodePoolTarget{
                                NodePool: sdk.String("illum"),
                                NodePoolConfig: &shared.GkeNodePoolConfig{
                                    Autoscaling: &shared.GkeNodePoolAutoscalingConfig{
                                        MaxNodeCount: sdk.Int(777408),
                                        MinNodeCount: sdk.Int(681359),
                                    },
                                    Config: &shared.GkeNodeConfig{
                                        Accelerators: []shared.GkeNodePoolAcceleratorConfig{
                                            shared.GkeNodePoolAcceleratorConfig{
                                                AcceleratorCount: sdk.String("eos"),
                                                AcceleratorType: sdk.String("voluptas"),
                                                GpuPartitionSize: sdk.String("ab"),
                                            },
                                            shared.GkeNodePoolAcceleratorConfig{
                                                AcceleratorCount: sdk.String("cupiditate"),
                                                AcceleratorType: sdk.String("consequatur"),
                                                GpuPartitionSize: sdk.String("tempora"),
                                            },
                                        },
                                        BootDiskKmsKey: sdk.String("debitis"),
                                        LocalSsdCount: sdk.Int(370853),
                                        MachineType: sdk.String("aspernatur"),
                                        MinCPUPlatform: sdk.String("sequi"),
                                        Preemptible: sdk.Bool(false),
                                        Spot: sdk.Bool(false),
                                    },
                                    Locations: []string{
                                        "esse",
                                        "recusandae",
                                        "aperiam",
                                        "distinctio",
                                    },
                                },
                                Roles: []shared.GkeNodePoolTargetRolesEnum{
                                    shared.GkeNodePoolTargetRolesEnumController,
                                    shared.GkeNodePoolTargetRolesEnumRoleUnspecified,
                                    shared.GkeNodePoolTargetRolesEnumController,
                                    shared.GkeNodePoolTargetRolesEnumController,
                                },
                            },
                        },
                    },
                    KubernetesNamespace: sdk.String("accusamus"),
                    KubernetesSoftwareConfig: &shared.KubernetesSoftwareConfig{
                        ComponentVersion: map[string]string{
                            "odio": "occaecati",
                            "commodi": "sapiente",
                        },
                        Properties: map[string]string{
                            "deserunt": "molestiae",
                        },
                    },
                },
                StagingBucket: sdk.String("accusantium"),
            },
        },
        AccessToken: sdk.String("porro"),
        ActionOnFailedPrimaryWorkers: operations.DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnumNoAction.ToPointer(),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "fuga",
        QuotaUser: sdk.String("mollitia"),
        Region: "incidunt",
        RequestID: sdk.String("atque"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("minima"),
    }, operations.DataprocProjectsRegionsClustersCreateSecurity{
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

## DataprocProjectsRegionsClustersDelete

Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsClustersDelete(ctx, operations.DataprocProjectsRegionsClustersDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequuntur"),
        ClusterName: "ratione",
        ClusterUUID: sdk.String("explicabo"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("atque"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "et",
        QuotaUser: sdk.String("esse"),
        Region: "eveniet",
        RequestID: sdk.String("accusamus"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("esse"),
    }, operations.DataprocProjectsRegionsClustersDeleteSecurity{
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

## DataprocProjectsRegionsClustersDiagnose

Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsClustersDiagnose(ctx, operations.DataprocProjectsRegionsClustersDiagnoseRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DiagnoseClusterRequest: &shared.DiagnoseClusterRequest{
            DiagnosisInterval: &shared.Interval{
                EndTime: sdk.String("nam"),
                StartTime: sdk.String("vero"),
            },
            Job: sdk.String("aliquid"),
            Jobs: []string{
                "saepe",
            },
            YarnApplicationID: sdk.String("vel"),
            YarnApplicationIds: []string{
                "molestiae",
                "rerum",
                "occaecati",
            },
        },
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eligendi"),
        ClusterName: "sit",
        Fields: sdk.String("culpa"),
        Key: sdk.String("tempore"),
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "cumque",
        QuotaUser: sdk.String("consequuntur"),
        Region: "consequatur",
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.DataprocProjectsRegionsClustersDiagnoseSecurity{
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

## DataprocProjectsRegionsClustersGet

Gets the resource representation for a cluster in a project.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsClustersGet(ctx, operations.DataprocProjectsRegionsClustersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consectetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("blanditiis"),
        ClusterName: "provident",
        Fields: sdk.String("a"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("quas"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "esse",
        QuotaUser: sdk.String("quasi"),
        Region: "a",
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("sint"),
    }, operations.DataprocProjectsRegionsClustersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Cluster != nil {
        // handle response
    }
}
```

## DataprocProjectsRegionsClustersInjectCredentials

Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsClustersInjectCredentials(ctx, operations.DataprocProjectsRegionsClustersInjectCredentialsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InjectCredentialsRequest: &shared.InjectCredentialsRequest{
            ClusterUUID: sdk.String("possimus"),
            CredentialsCiphertext: sdk.String("quia"),
        },
        AccessToken: sdk.String("eveniet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facere"),
        Cluster: "veritatis",
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("similique"),
        PrettyPrint: sdk.Bool(false),
        Project: "culpa",
        QuotaUser: sdk.String("aliquid"),
        Region: "tenetur",
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("earum"),
    }, operations.DataprocProjectsRegionsClustersInjectCredentialsSecurity{
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

## DataprocProjectsRegionsClustersList

Lists all regions/{region}/clusters in a project alphabetically.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsClustersList(ctx, operations.DataprocProjectsRegionsClustersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("illum"),
        Filter: sdk.String("soluta"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("aliquam"),
        PageSize: sdk.Int64(958983),
        PageToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "ullam",
        QuotaUser: sdk.String("reprehenderit"),
        Region: "ullam",
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("aut"),
    }, operations.DataprocProjectsRegionsClustersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListClustersResponse != nil {
        // handle response
    }
}
```

## DataprocProjectsRegionsClustersNodeGroupsCreate

Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsClustersNodeGroupsCreate(ctx, operations.DataprocProjectsRegionsClustersNodeGroupsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        NodeGroupInput: &shared.NodeGroupInput{
            Labels: map[string]string{
                "quibusdam": "ex",
            },
            Name: sdk.String("Miss Percy Parisian"),
            NodeGroupConfig: &shared.InstanceGroupConfigInput{
                Accelerators: []shared.AcceleratorConfig{
                    shared.AcceleratorConfig{
                        AcceleratorCount: sdk.Int(869489),
                        AcceleratorTypeURI: sdk.String("et"),
                    },
                },
                DiskConfig: &shared.DiskConfig{
                    BootDiskSizeGb: sdk.Int(454162),
                    BootDiskType: sdk.String("ipsa"),
                    LocalSsdInterface: sdk.String("minima"),
                    NumLocalSsds: sdk.Int(86532),
                },
                ImageURI: sdk.String("consectetur"),
                MachineTypeURI: sdk.String("adipisci"),
                MinCPUPlatform: sdk.String("iste"),
                NumInstances: sdk.Int(839513),
                Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumPreemptibilityUnspecified.ToPointer(),
            },
            Roles: []shared.NodeGroupRolesEnum{
                shared.NodeGroupRolesEnumRoleUnspecified,
                shared.NodeGroupRolesEnumDriver,
                shared.NodeGroupRolesEnumRoleUnspecified,
            },
        },
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corrupti"),
        Fields: sdk.String("non"),
        Key: sdk.String("voluptatem"),
        NodeGroupID: sdk.String("dolor"),
        OauthToken: sdk.String("occaecati"),
        Parent: "numquam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        RequestID: sdk.String("explicabo"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("aut"),
    }, operations.DataprocProjectsRegionsClustersNodeGroupsCreateSecurity{
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

## DataprocProjectsRegionsClustersNodeGroupsResize

Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsClustersNodeGroupsResize(ctx, operations.DataprocProjectsRegionsClustersNodeGroupsResizeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ResizeNodeGroupRequest: &shared.ResizeNodeGroupRequest{
            GracefulDecommissionTimeout: sdk.String("dicta"),
            RequestID: sdk.String("maiores"),
            Size: sdk.Int(618480),
        },
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("asperiores"),
        Key: sdk.String("aperiam"),
        Name: "Bertha Cruickshank",
        OauthToken: sdk.String("maxime"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("asperiores"),
    }, operations.DataprocProjectsRegionsClustersNodeGroupsResizeSecurity{
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

## DataprocProjectsRegionsClustersPatch

Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsClustersPatch(ctx, operations.DataprocProjectsRegionsClustersPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ClusterInput: &shared.ClusterInput{
            ClusterName: sdk.String("quae"),
            Config: &shared.ClusterConfigInput{
                AutoscalingConfig: &shared.AutoscalingConfig{
                    PolicyURI: sdk.String("quaerat"),
                },
                AuxiliaryNodeGroups: []shared.AuxiliaryNodeGroupInput{
                    shared.AuxiliaryNodeGroupInput{
                        NodeGroup: &shared.NodeGroupInput{
                            Labels: map[string]string{
                                "labore": "ab",
                                "adipisci": "fuga",
                                "id": "suscipit",
                                "velit": "culpa",
                            },
                            Name: sdk.String("Clay Larson"),
                            NodeGroupConfig: &shared.InstanceGroupConfigInput{
                                Accelerators: []shared.AcceleratorConfig{
                                    shared.AcceleratorConfig{
                                        AcceleratorCount: sdk.Int(554688),
                                        AcceleratorTypeURI: sdk.String("vel"),
                                    },
                                    shared.AcceleratorConfig{
                                        AcceleratorCount: sdk.Int(287051),
                                        AcceleratorTypeURI: sdk.String("possimus"),
                                    },
                                },
                                DiskConfig: &shared.DiskConfig{
                                    BootDiskSizeGb: sdk.Int(706575),
                                    BootDiskType: sdk.String("cum"),
                                    LocalSsdInterface: sdk.String("commodi"),
                                    NumLocalSsds: sdk.Int(447144),
                                },
                                ImageURI: sdk.String("corporis"),
                                MachineTypeURI: sdk.String("reiciendis"),
                                MinCPUPlatform: sdk.String("assumenda"),
                                NumInstances: sdk.Int(363161),
                                Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumSpot.ToPointer(),
                            },
                            Roles: []shared.NodeGroupRolesEnum{
                                shared.NodeGroupRolesEnumRoleUnspecified,
                                shared.NodeGroupRolesEnumDriver,
                            },
                        },
                        NodeGroupID: sdk.String("consectetur"),
                    },
                    shared.AuxiliaryNodeGroupInput{
                        NodeGroup: &shared.NodeGroupInput{
                            Labels: map[string]string{
                                "exercitationem": "earum",
                                "facere": "numquam",
                            },
                            Name: sdk.String("Ricardo Wisozk"),
                            NodeGroupConfig: &shared.InstanceGroupConfigInput{
                                Accelerators: []shared.AcceleratorConfig{
                                    shared.AcceleratorConfig{
                                        AcceleratorCount: sdk.Int(296556),
                                        AcceleratorTypeURI: sdk.String("sunt"),
                                    },
                                    shared.AcceleratorConfig{
                                        AcceleratorCount: sdk.Int(992012),
                                        AcceleratorTypeURI: sdk.String("adipisci"),
                                    },
                                    shared.AcceleratorConfig{
                                        AcceleratorCount: sdk.Int(249420),
                                        AcceleratorTypeURI: sdk.String("amet"),
                                    },
                                    shared.AcceleratorConfig{
                                        AcceleratorCount: sdk.Int(105906),
                                        AcceleratorTypeURI: sdk.String("dignissimos"),
                                    },
                                },
                                DiskConfig: &shared.DiskConfig{
                                    BootDiskSizeGb: sdk.Int(950953),
                                    BootDiskType: sdk.String("debitis"),
                                    LocalSsdInterface: sdk.String("consectetur"),
                                    NumLocalSsds: sdk.Int(358107),
                                },
                                ImageURI: sdk.String("harum"),
                                MachineTypeURI: sdk.String("laboriosam"),
                                MinCPUPlatform: sdk.String("ipsa"),
                                NumInstances: sdk.Int(916727),
                                Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumPreemptible.ToPointer(),
                            },
                            Roles: []shared.NodeGroupRolesEnum{
                                shared.NodeGroupRolesEnumDriver,
                            },
                        },
                        NodeGroupID: sdk.String("similique"),
                    },
                    shared.AuxiliaryNodeGroupInput{
                        NodeGroup: &shared.NodeGroupInput{
                            Labels: map[string]string{
                                "aspernatur": "voluptas",
                                "voluptas": "voluptas",
                            },
                            Name: sdk.String("Gayle Parisian"),
                            NodeGroupConfig: &shared.InstanceGroupConfigInput{
                                Accelerators: []shared.AcceleratorConfig{
                                    shared.AcceleratorConfig{
                                        AcceleratorCount: sdk.Int(503934),
                                        AcceleratorTypeURI: sdk.String("in"),
                                    },
                                },
                                DiskConfig: &shared.DiskConfig{
                                    BootDiskSizeGb: sdk.Int(296242),
                                    BootDiskType: sdk.String("aliquam"),
                                    LocalSsdInterface: sdk.String("officiis"),
                                    NumLocalSsds: sdk.Int(839189),
                                },
                                ImageURI: sdk.String("ullam"),
                                MachineTypeURI: sdk.String("adipisci"),
                                MinCPUPlatform: sdk.String("cum"),
                                NumInstances: sdk.Int(502389),
                                Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumPreemptible.ToPointer(),
                            },
                            Roles: []shared.NodeGroupRolesEnum{
                                shared.NodeGroupRolesEnumRoleUnspecified,
                                shared.NodeGroupRolesEnumDriver,
                                shared.NodeGroupRolesEnumDriver,
                                shared.NodeGroupRolesEnumDriver,
                            },
                        },
                        NodeGroupID: sdk.String("totam"),
                    },
                    shared.AuxiliaryNodeGroupInput{
                        NodeGroup: &shared.NodeGroupInput{
                            Labels: map[string]string{
                                "exercitationem": "nobis",
                                "sit": "rerum",
                                "sed": "reiciendis",
                                "explicabo": "asperiores",
                            },
                            Name: sdk.String("Miss Jared Quitzon"),
                            NodeGroupConfig: &shared.InstanceGroupConfigInput{
                                Accelerators: []shared.AcceleratorConfig{
                                    shared.AcceleratorConfig{
                                        AcceleratorCount: sdk.Int(152354),
                                        AcceleratorTypeURI: sdk.String("in"),
                                    },
                                    shared.AcceleratorConfig{
                                        AcceleratorCount: sdk.Int(417486),
                                        AcceleratorTypeURI: sdk.String("quidem"),
                                    },
                                    shared.AcceleratorConfig{
                                        AcceleratorCount: sdk.Int(131289),
                                        AcceleratorTypeURI: sdk.String("voluptas"),
                                    },
                                },
                                DiskConfig: &shared.DiskConfig{
                                    BootDiskSizeGb: sdk.Int(604118),
                                    BootDiskType: sdk.String("architecto"),
                                    LocalSsdInterface: sdk.String("suscipit"),
                                    NumLocalSsds: sdk.Int(960257),
                                },
                                ImageURI: sdk.String("debitis"),
                                MachineTypeURI: sdk.String("illo"),
                                MinCPUPlatform: sdk.String("reiciendis"),
                                NumInstances: sdk.Int(19300),
                                Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumPreemptible.ToPointer(),
                            },
                            Roles: []shared.NodeGroupRolesEnum{
                                shared.NodeGroupRolesEnumRoleUnspecified,
                                shared.NodeGroupRolesEnumRoleUnspecified,
                                shared.NodeGroupRolesEnumDriver,
                                shared.NodeGroupRolesEnumRoleUnspecified,
                            },
                        },
                        NodeGroupID: sdk.String("necessitatibus"),
                    },
                },
                ConfigBucket: sdk.String("ipsum"),
                DataprocMetricConfig: &shared.DataprocMetricConfig{
                    Metrics: []shared.Metric{
                        shared.Metric{
                            MetricOverrides: []string{
                                "quos",
                                "voluptatibus",
                                "tempora",
                            },
                            MetricSource: shared.MetricMetricSourceEnumHdfs.ToPointer(),
                        },
                        shared.Metric{
                            MetricOverrides: []string{
                                "reiciendis",
                                "ex",
                            },
                            MetricSource: shared.MetricMetricSourceEnumMetricSourceUnspecified.ToPointer(),
                        },
                    },
                },
                EncryptionConfig: &shared.EncryptionConfig{
                    GcePdKmsKeyName: sdk.String("non"),
                    KmsKey: sdk.String("officiis"),
                },
                EndpointConfig: &shared.EndpointConfigInput{
                    EnableHTTPPortAccess: sdk.Bool(false),
                },
                GceClusterConfig: &shared.GceClusterConfig{
                    ConfidentialInstanceConfig: &shared.ConfidentialInstanceConfig{
                        EnableConfidentialCompute: sdk.Bool(false),
                    },
                    InternalIPOnly: sdk.Bool(false),
                    Metadata: map[string]string{
                        "facilis": "quaerat",
                        "incidunt": "ipsam",
                        "debitis": "rem",
                    },
                    NetworkURI: sdk.String("sit"),
                    NodeGroupAffinity: &shared.NodeGroupAffinity{
                        NodeGroupURI: sdk.String("nobis"),
                    },
                    PrivateIpv6GoogleAccess: shared.GceClusterConfigPrivateIpv6GoogleAccessEnumOutbound.ToPointer(),
                    ReservationAffinity: &shared.ReservationAffinity{
                        ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumNoReservation.ToPointer(),
                        Key: sdk.String("minima"),
                        Values: []string{
                            "reiciendis",
                            "nulla",
                            "magni",
                            "aperiam",
                        },
                    },
                    ServiceAccount: sdk.String("saepe"),
                    ServiceAccountScopes: []string{
                        "veniam",
                        "in",
                    },
                    ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                        EnableIntegrityMonitoring: sdk.Bool(false),
                        EnableSecureBoot: sdk.Bool(false),
                        EnableVtpm: sdk.Bool(false),
                    },
                    SubnetworkURI: sdk.String("officiis"),
                    Tags: []string{
                        "laudantium",
                    },
                    ZoneURI: sdk.String("exercitationem"),
                },
                GkeClusterConfig: &shared.GkeClusterConfig{
                    GkeClusterTarget: sdk.String("praesentium"),
                    NamespacedGkeDeploymentTarget: &shared.NamespacedGkeDeploymentTarget{
                        ClusterNamespace: sdk.String("cum"),
                        TargetGkeCluster: sdk.String("laboriosam"),
                    },
                    NodePoolTarget: []shared.GkeNodePoolTarget{
                        shared.GkeNodePoolTarget{
                            NodePool: sdk.String("voluptatum"),
                            NodePoolConfig: &shared.GkeNodePoolConfig{
                                Autoscaling: &shared.GkeNodePoolAutoscalingConfig{
                                    MaxNodeCount: sdk.Int(622385),
                                    MinNodeCount: sdk.Int(944708),
                                },
                                Config: &shared.GkeNodeConfig{
                                    Accelerators: []shared.GkeNodePoolAcceleratorConfig{
                                        shared.GkeNodePoolAcceleratorConfig{
                                            AcceleratorCount: sdk.String("debitis"),
                                            AcceleratorType: sdk.String("neque"),
                                            GpuPartitionSize: sdk.String("dolorum"),
                                        },
                                        shared.GkeNodePoolAcceleratorConfig{
                                            AcceleratorCount: sdk.String("nostrum"),
                                            AcceleratorType: sdk.String("officia"),
                                            GpuPartitionSize: sdk.String("dolorum"),
                                        },
                                        shared.GkeNodePoolAcceleratorConfig{
                                            AcceleratorCount: sdk.String("corrupti"),
                                            AcceleratorType: sdk.String("accusamus"),
                                            GpuPartitionSize: sdk.String("tempora"),
                                        },
                                    },
                                    BootDiskKmsKey: sdk.String("atque"),
                                    LocalSsdCount: sdk.Int(148268),
                                    MachineType: sdk.String("ut"),
                                    MinCPUPlatform: sdk.String("fugiat"),
                                    Preemptible: sdk.Bool(false),
                                    Spot: sdk.Bool(false),
                                },
                                Locations: []string{
                                    "culpa",
                                },
                            },
                            Roles: []shared.GkeNodePoolTargetRolesEnum{
                                shared.GkeNodePoolTargetRolesEnumDefault,
                                shared.GkeNodePoolTargetRolesEnumRoleUnspecified,
                                shared.GkeNodePoolTargetRolesEnumController,
                            },
                        },
                        shared.GkeNodePoolTarget{
                            NodePool: sdk.String("ipsam"),
                            NodePoolConfig: &shared.GkeNodePoolConfig{
                                Autoscaling: &shared.GkeNodePoolAutoscalingConfig{
                                    MaxNodeCount: sdk.Int(24527),
                                    MinNodeCount: sdk.Int(530537),
                                },
                                Config: &shared.GkeNodeConfig{
                                    Accelerators: []shared.GkeNodePoolAcceleratorConfig{
                                        shared.GkeNodePoolAcceleratorConfig{
                                            AcceleratorCount: sdk.String("repudiandae"),
                                            AcceleratorType: sdk.String("corporis"),
                                            GpuPartitionSize: sdk.String("et"),
                                        },
                                        shared.GkeNodePoolAcceleratorConfig{
                                            AcceleratorCount: sdk.String("blanditiis"),
                                            AcceleratorType: sdk.String("ex"),
                                            GpuPartitionSize: sdk.String("sed"),
                                        },
                                        shared.GkeNodePoolAcceleratorConfig{
                                            AcceleratorCount: sdk.String("sit"),
                                            AcceleratorType: sdk.String("vel"),
                                            GpuPartitionSize: sdk.String("nostrum"),
                                        },
                                    },
                                    BootDiskKmsKey: sdk.String("saepe"),
                                    LocalSsdCount: sdk.Int(622231),
                                    MachineType: sdk.String("consequatur"),
                                    MinCPUPlatform: sdk.String("incidunt"),
                                    Preemptible: sdk.Bool(false),
                                    Spot: sdk.Bool(false),
                                },
                                Locations: []string{
                                    "dolorem",
                                    "harum",
                                    "dicta",
                                    "architecto",
                                },
                            },
                            Roles: []shared.GkeNodePoolTargetRolesEnum{
                                shared.GkeNodePoolTargetRolesEnumDefault,
                                shared.GkeNodePoolTargetRolesEnumSparkDriver,
                                shared.GkeNodePoolTargetRolesEnumController,
                            },
                        },
                        shared.GkeNodePoolTarget{
                            NodePool: sdk.String("laborum"),
                            NodePoolConfig: &shared.GkeNodePoolConfig{
                                Autoscaling: &shared.GkeNodePoolAutoscalingConfig{
                                    MaxNodeCount: sdk.Int(724148),
                                    MinNodeCount: sdk.Int(948861),
                                },
                                Config: &shared.GkeNodeConfig{
                                    Accelerators: []shared.GkeNodePoolAcceleratorConfig{
                                        shared.GkeNodePoolAcceleratorConfig{
                                            AcceleratorCount: sdk.String("alias"),
                                            AcceleratorType: sdk.String("amet"),
                                            GpuPartitionSize: sdk.String("deserunt"),
                                        },
                                        shared.GkeNodePoolAcceleratorConfig{
                                            AcceleratorCount: sdk.String("voluptate"),
                                            AcceleratorType: sdk.String("unde"),
                                            GpuPartitionSize: sdk.String("reiciendis"),
                                        },
                                    },
                                    BootDiskKmsKey: sdk.String("provident"),
                                    LocalSsdCount: sdk.Int(833819),
                                    MachineType: sdk.String("delectus"),
                                    MinCPUPlatform: sdk.String("voluptates"),
                                    Preemptible: sdk.Bool(false),
                                    Spot: sdk.Bool(false),
                                },
                                Locations: []string{
                                    "est",
                                },
                            },
                            Roles: []shared.GkeNodePoolTargetRolesEnum{
                                shared.GkeNodePoolTargetRolesEnumController,
                                shared.GkeNodePoolTargetRolesEnumSparkExecutor,
                                shared.GkeNodePoolTargetRolesEnumSparkDriver,
                            },
                        },
                    },
                },
                InitializationActions: []shared.NodeInitializationAction{
                    shared.NodeInitializationAction{
                        ExecutableFile: sdk.String("mollitia"),
                        ExecutionTimeout: sdk.String("veniam"),
                    },
                    shared.NodeInitializationAction{
                        ExecutableFile: sdk.String("voluptatem"),
                        ExecutionTimeout: sdk.String("quisquam"),
                    },
                    shared.NodeInitializationAction{
                        ExecutableFile: sdk.String("repudiandae"),
                        ExecutionTimeout: sdk.String("quasi"),
                    },
                },
                LifecycleConfig: &shared.LifecycleConfigInput{
                    AutoDeleteTime: sdk.String("atque"),
                    AutoDeleteTTL: sdk.String("reprehenderit"),
                    IdleDeleteTTL: sdk.String("asperiores"),
                },
                MasterConfig: &shared.InstanceGroupConfigInput{
                    Accelerators: []shared.AcceleratorConfig{
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.Int(383103),
                            AcceleratorTypeURI: sdk.String("quidem"),
                        },
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.Int(806670),
                            AcceleratorTypeURI: sdk.String("et"),
                        },
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.Int(461007),
                            AcceleratorTypeURI: sdk.String("amet"),
                        },
                    },
                    DiskConfig: &shared.DiskConfig{
                        BootDiskSizeGb: sdk.Int(826825),
                        BootDiskType: sdk.String("ea"),
                        LocalSsdInterface: sdk.String("atque"),
                        NumLocalSsds: sdk.Int(623295),
                    },
                    ImageURI: sdk.String("officiis"),
                    MachineTypeURI: sdk.String("officiis"),
                    MinCPUPlatform: sdk.String("accusamus"),
                    NumInstances: sdk.Int(618826),
                    Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumNonPreemptible.ToPointer(),
                },
                MetastoreConfig: &shared.MetastoreConfig{
                    DataprocMetastoreService: sdk.String("aspernatur"),
                },
                SecondaryWorkerConfig: &shared.InstanceGroupConfigInput{
                    Accelerators: []shared.AcceleratorConfig{
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.Int(980581),
                            AcceleratorTypeURI: sdk.String("corrupti"),
                        },
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.Int(871786),
                            AcceleratorTypeURI: sdk.String("error"),
                        },
                    },
                    DiskConfig: &shared.DiskConfig{
                        BootDiskSizeGb: sdk.Int(502721),
                        BootDiskType: sdk.String("suscipit"),
                        LocalSsdInterface: sdk.String("repudiandae"),
                        NumLocalSsds: sdk.Int(542129),
                    },
                    ImageURI: sdk.String("atque"),
                    MachineTypeURI: sdk.String("sunt"),
                    MinCPUPlatform: sdk.String("recusandae"),
                    NumInstances: sdk.Int(680697),
                    Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumSpot.ToPointer(),
                },
                SecurityConfig: &shared.SecurityConfig{
                    IdentityConfig: &shared.IdentityConfig{
                        UserServiceAccountMapping: map[string]string{
                            "reiciendis": "doloremque",
                            "repudiandae": "dicta",
                        },
                    },
                    KerberosConfig: &shared.KerberosConfig{
                        CrossRealmTrustAdminServer: sdk.String("accusantium"),
                        CrossRealmTrustKdc: sdk.String("beatae"),
                        CrossRealmTrustRealm: sdk.String("dolores"),
                        CrossRealmTrustSharedPasswordURI: sdk.String("enim"),
                        EnableKerberos: sdk.Bool(false),
                        KdcDbKeyURI: sdk.String("laboriosam"),
                        KeyPasswordURI: sdk.String("velit"),
                        KeystorePasswordURI: sdk.String("a"),
                        KeystoreURI: sdk.String("molestias"),
                        KmsKeyURI: sdk.String("magnam"),
                        Realm: sdk.String("saepe"),
                        RootPrincipalPasswordURI: sdk.String("consequuntur"),
                        TgtLifetimeHours: sdk.Int(580107),
                        TruststorePasswordURI: sdk.String("officiis"),
                        TruststoreURI: sdk.String("perspiciatis"),
                    },
                },
                SoftwareConfig: &shared.SoftwareConfig{
                    ImageVersion: sdk.String("in"),
                    OptionalComponents: []shared.SoftwareConfigOptionalComponentsEnum{
                        shared.SoftwareConfigOptionalComponentsEnumZeppelin,
                    },
                    Properties: map[string]string{
                        "consequuntur": "fugit",
                        "id": "quis",
                        "reprehenderit": "error",
                    },
                },
                TempBucket: sdk.String("illo"),
                WorkerConfig: &shared.InstanceGroupConfigInput{
                    Accelerators: []shared.AcceleratorConfig{
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.Int(696463),
                            AcceleratorTypeURI: sdk.String("eveniet"),
                        },
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.Int(247399),
                            AcceleratorTypeURI: sdk.String("vero"),
                        },
                    },
                    DiskConfig: &shared.DiskConfig{
                        BootDiskSizeGb: sdk.Int(39615),
                        BootDiskType: sdk.String("iure"),
                        LocalSsdInterface: sdk.String("ipsa"),
                        NumLocalSsds: sdk.Int(517612),
                    },
                    ImageURI: sdk.String("quae"),
                    MachineTypeURI: sdk.String("molestiae"),
                    MinCPUPlatform: sdk.String("eveniet"),
                    NumInstances: sdk.Int(184362),
                    Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumPreemptible.ToPointer(),
                },
            },
            Labels: map[string]string{
                "necessitatibus": "ratione",
                "laborum": "distinctio",
            },
            Metrics: &shared.ClusterMetrics{
                HdfsMetrics: map[string]string{
                    "rem": "aliquam",
                    "ad": "repellat",
                    "alias": "corporis",
                },
                YarnMetrics: map[string]string{
                    "nihil": "mollitia",
                    "voluptas": "alias",
                    "maiores": "reiciendis",
                },
            },
            ProjectID: sdk.String("dolores"),
            VirtualClusterConfig: &shared.VirtualClusterConfig{
                AuxiliaryServicesConfig: &shared.AuxiliaryServicesConfig{
                    MetastoreConfig: &shared.MetastoreConfig{
                        DataprocMetastoreService: sdk.String("id"),
                    },
                    SparkHistoryServerConfig: &shared.SparkHistoryServerConfig{
                        DataprocCluster: sdk.String("minima"),
                    },
                },
                KubernetesClusterConfig: &shared.KubernetesClusterConfig{
                    GkeClusterConfig: &shared.GkeClusterConfig{
                        GkeClusterTarget: sdk.String("dolore"),
                        NamespacedGkeDeploymentTarget: &shared.NamespacedGkeDeploymentTarget{
                            ClusterNamespace: sdk.String("dolorum"),
                            TargetGkeCluster: sdk.String("nesciunt"),
                        },
                        NodePoolTarget: []shared.GkeNodePoolTarget{
                            shared.GkeNodePoolTarget{
                                NodePool: sdk.String("recusandae"),
                                NodePoolConfig: &shared.GkeNodePoolConfig{
                                    Autoscaling: &shared.GkeNodePoolAutoscalingConfig{
                                        MaxNodeCount: sdk.Int(607249),
                                        MinNodeCount: sdk.Int(309251),
                                    },
                                    Config: &shared.GkeNodeConfig{
                                        Accelerators: []shared.GkeNodePoolAcceleratorConfig{
                                            shared.GkeNodePoolAcceleratorConfig{
                                                AcceleratorCount: sdk.String("ex"),
                                                AcceleratorType: sdk.String("ut"),
                                                GpuPartitionSize: sdk.String("culpa"),
                                            },
                                            shared.GkeNodePoolAcceleratorConfig{
                                                AcceleratorCount: sdk.String("adipisci"),
                                                AcceleratorType: sdk.String("debitis"),
                                                GpuPartitionSize: sdk.String("laudantium"),
                                            },
                                        },
                                        BootDiskKmsKey: sdk.String("eum"),
                                        LocalSsdCount: sdk.Int(367927),
                                        MachineType: sdk.String("recusandae"),
                                        MinCPUPlatform: sdk.String("esse"),
                                        Preemptible: sdk.Bool(false),
                                        Spot: sdk.Bool(false),
                                    },
                                    Locations: []string{
                                        "quis",
                                        "eum",
                                        "reiciendis",
                                    },
                                },
                                Roles: []shared.GkeNodePoolTargetRolesEnum{
                                    shared.GkeNodePoolTargetRolesEnumRoleUnspecified,
                                    shared.GkeNodePoolTargetRolesEnumDefault,
                                    shared.GkeNodePoolTargetRolesEnumRoleUnspecified,
                                },
                            },
                        },
                    },
                    KubernetesNamespace: sdk.String("animi"),
                    KubernetesSoftwareConfig: &shared.KubernetesSoftwareConfig{
                        ComponentVersion: map[string]string{
                            "mollitia": "provident",
                            "possimus": "animi",
                        },
                        Properties: map[string]string{
                            "aliquid": "accusantium",
                            "repellat": "doloribus",
                        },
                    },
                },
                StagingBucket: sdk.String("ullam"),
            },
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("earum"),
        ClusterName: "officia",
        Fields: sdk.String("laborum"),
        GracefulDecommissionTimeout: sdk.String("placeat"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "molestias",
        QuotaUser: sdk.String("officiis"),
        Region: "sapiente",
        RequestID: sdk.String("cumque"),
        UpdateMask: sdk.String("vitae"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.DataprocProjectsRegionsClustersPatchSecurity{
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

## DataprocProjectsRegionsClustersRepair

Repairs a cluster.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsClustersRepair(ctx, operations.DataprocProjectsRegionsClustersRepairRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RepairClusterRequest: &shared.RepairClusterRequest{
            ClusterUUID: sdk.String("inventore"),
            GracefulDecommissionTimeout: sdk.String("fugit"),
            NodePools: []shared.NodePool{
                shared.NodePool{
                    ID: sdk.String("1032648d-c2f6-4151-99eb-fd0e9fe6c632"),
                    InstanceNames: []string{
                        "fuga",
                        "ratione",
                        "animi",
                        "necessitatibus",
                    },
                    RepairAction: shared.NodePoolRepairActionEnumDelete.ToPointer(),
                },
                shared.NodePool{
                    ID: sdk.String("01179963-12fd-4e04-b717-78ff61d01747"),
                    InstanceNames: []string{
                        "consectetur",
                        "aliquid",
                    },
                    RepairAction: shared.NodePoolRepairActionEnumRepairActionUnspecified.ToPointer(),
                },
                shared.NodePool{
                    ID: sdk.String("a15db6a6-6065-49a1-adea-ab5851d6c645"),
                    InstanceNames: []string{
                        "voluptatem",
                        "molestias",
                        "cum",
                    },
                    RepairAction: shared.NodePoolRepairActionEnumRepairActionUnspecified.ToPointer(),
                },
                shared.NodePool{
                    ID: sdk.String("1891baa0-fe1a-4de0-88e6-f8c5f350d8cd"),
                    InstanceNames: []string{
                        "ipsam",
                        "culpa",
                        "dolor",
                    },
                    RepairAction: shared.NodePoolRepairActionEnumRepairActionUnspecified.ToPointer(),
                },
            },
            ParentOperationID: sdk.String("inventore"),
            RequestID: sdk.String("deleniti"),
        },
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolor"),
        ClusterName: "consequatur",
        Fields: sdk.String("architecto"),
        Key: sdk.String("sit"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "fugit",
        QuotaUser: sdk.String("ab"),
        Region: "laudantium",
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.DataprocProjectsRegionsClustersRepairSecurity{
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

## DataprocProjectsRegionsClustersStart

Starts a cluster in a project.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsClustersStart(ctx, operations.DataprocProjectsRegionsClustersStartRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        StartClusterRequest: &shared.StartClusterRequest{
            ClusterUUID: sdk.String("ipsam"),
            RequestID: sdk.String("consequuntur"),
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eveniet"),
        ClusterName: "impedit",
        Fields: sdk.String("officiis"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "sed",
        QuotaUser: sdk.String("veniam"),
        Region: "nesciunt",
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("eum"),
    }, operations.DataprocProjectsRegionsClustersStartSecurity{
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

## DataprocProjectsRegionsClustersStop

Stops a cluster in a project.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsClustersStop(ctx, operations.DataprocProjectsRegionsClustersStopRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        StopClusterRequest: &shared.StopClusterRequest{
            ClusterUUID: sdk.String("voluptatum"),
            RequestID: sdk.String("magnam"),
        },
        AccessToken: sdk.String("exercitationem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("porro"),
        ClusterName: "autem",
        Fields: sdk.String("nobis"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "consequuntur",
        QuotaUser: sdk.String("voluptatem"),
        Region: "exercitationem",
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.DataprocProjectsRegionsClustersStopSecurity{
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

## DataprocProjectsRegionsJobsCancel

Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsJobsCancel(ctx, operations.DataprocProjectsRegionsJobsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "vero": "est",
            "harum": "sequi",
            "doloribus": "repudiandae",
            "optio": "occaecati",
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("officia"),
        JobID: "voluptas",
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quos",
        QuotaUser: sdk.String("eius"),
        Region: "aspernatur",
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("nesciunt"),
    }, operations.DataprocProjectsRegionsJobsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## DataprocProjectsRegionsJobsDelete

Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsJobsDelete(ctx, operations.DataprocProjectsRegionsJobsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laudantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("rem"),
        JobID: "fugiat",
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "consequuntur",
        QuotaUser: sdk.String("consectetur"),
        Region: "aperiam",
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.DataprocProjectsRegionsJobsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DataprocProjectsRegionsJobsGet

Gets the resource representation for a job in a project.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsJobsGet(ctx, operations.DataprocProjectsRegionsJobsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eos"),
        Fields: sdk.String("occaecati"),
        JobID: "iste",
        Key: sdk.String("magni"),
        OauthToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "fuga",
        QuotaUser: sdk.String("accusamus"),
        Region: "voluptatibus",
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.DataprocProjectsRegionsJobsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## DataprocProjectsRegionsJobsList

Lists regions/{region}/jobs in a project.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsJobsList(ctx, operations.DataprocProjectsRegionsJobsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maxime"),
        ClusterName: sdk.String("magnam"),
        Fields: sdk.String("temporibus"),
        Filter: sdk.String("quos"),
        JobStateMatcher: operations.DataprocProjectsRegionsJobsListJobStateMatcherEnumActive.ToPointer(),
        Key: sdk.String("itaque"),
        OauthToken: sdk.String("commodi"),
        PageSize: sdk.Int64(520761),
        PageToken: sdk.String("earum"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "modi",
        QuotaUser: sdk.String("nam"),
        Region: "vero",
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.DataprocProjectsRegionsJobsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobsResponse != nil {
        // handle response
    }
}
```

## DataprocProjectsRegionsJobsPatch

Updates a job in a project.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsJobsPatch(ctx, operations.DataprocProjectsRegionsJobsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        JobInput: &shared.JobInput{
            DriverSchedulingConfig: &shared.DriverSchedulingConfig{
                MemoryMb: sdk.Int(1383),
                Vcores: sdk.Int(93894),
            },
            HadoopJob: &shared.HadoopJob{
                ArchiveUris: []string{
                    "maiores",
                },
                Args: []string{
                    "sint",
                    "nulla",
                },
                FileUris: []string{
                    "esse",
                    "nemo",
                    "reprehenderit",
                },
                JarFileUris: []string{
                    "quis",
                    "sint",
                    "accusamus",
                },
                LoggingConfig: &shared.LoggingConfig{
                    DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                        "hic": shared.LoggingConfigDriverLogLevelsEnumOff,
                        "asperiores": shared.LoggingConfigDriverLogLevelsEnumDebug,
                        "voluptas": shared.LoggingConfigDriverLogLevelsEnumOff,
                        "delectus": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                    },
                },
                MainClass: sdk.String("minus"),
                MainJarFileURI: sdk.String("fuga"),
                Properties: map[string]string{
                    "consectetur": "velit",
                    "atque": "ipsum",
                    "impedit": "magni",
                },
            },
            HiveJob: &shared.HiveJob{
                ContinueOnFailure: sdk.Bool(false),
                JarFileUris: []string{
                    "repudiandae",
                    "nam",
                    "dolore",
                },
                Properties: map[string]string{
                    "voluptate": "sequi",
                    "dignissimos": "neque",
                },
                QueryFileURI: sdk.String("quo"),
                QueryList: &shared.QueryList{
                    Queries: []string{
                        "quibusdam",
                        "iure",
                        "odit",
                    },
                },
                ScriptVariables: map[string]string{
                    "vel": "magnam",
                    "quibusdam": "inventore",
                    "facere": "libero",
                    "architecto": "voluptatibus",
                },
            },
            Labels: map[string]string{
                "porro": "aliquam",
            },
            PigJob: &shared.PigJob{
                ContinueOnFailure: sdk.Bool(false),
                JarFileUris: []string{
                    "illo",
                },
                LoggingConfig: &shared.LoggingConfig{
                    DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                        "vel": shared.LoggingConfigDriverLogLevelsEnumDebug,
                    },
                },
                Properties: map[string]string{
                    "vero": "excepturi",
                },
                QueryFileURI: sdk.String("eum"),
                QueryList: &shared.QueryList{
                    Queries: []string{
                        "ut",
                    },
                },
                ScriptVariables: map[string]string{
                    "earum": "dicta",
                    "impedit": "voluptatibus",
                    "iste": "itaque",
                },
            },
            Placement: &shared.JobPlacementInput{
                ClusterLabels: map[string]string{
                    "nisi": "itaque",
                },
                ClusterName: sdk.String("velit"),
            },
            PrestoJob: &shared.PrestoJob{
                ClientTags: []string{
                    "non",
                    "dolor",
                    "iusto",
                },
                ContinueOnFailure: sdk.Bool(false),
                LoggingConfig: &shared.LoggingConfig{
                    DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                        "doloremque": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                    },
                },
                OutputFormat: sdk.String("officia"),
                Properties: map[string]string{
                    "ea": "quidem",
                    "voluptas": "facilis",
                    "placeat": "perspiciatis",
                    "expedita": "deleniti",
                },
                QueryFileURI: sdk.String("a"),
                QueryList: &shared.QueryList{
                    Queries: []string{
                        "ullam",
                        "unde",
                    },
                },
            },
            PysparkJob: &shared.PySparkJob{
                ArchiveUris: []string{
                    "animi",
                    "impedit",
                    "ipsam",
                    "corporis",
                },
                Args: []string{
                    "error",
                    "esse",
                    "labore",
                },
                FileUris: []string{
                    "vero",
                },
                JarFileUris: []string{
                    "vitae",
                },
                LoggingConfig: &shared.LoggingConfig{
                    DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                        "dolorem": shared.LoggingConfigDriverLogLevelsEnumTrace,
                    },
                },
                MainPythonFileURI: sdk.String("qui"),
                Properties: map[string]string{
                    "ex": "nemo",
                    "soluta": "libero",
                    "rem": "dolorum",
                },
                PythonFileUris: []string{
                    "fugit",
                    "alias",
                },
            },
            Reference: &shared.JobReference{
                JobID: sdk.String("magni"),
                ProjectID: sdk.String("vel"),
            },
            Scheduling: &shared.JobScheduling{
                MaxFailuresPerHour: sdk.Int(64435),
                MaxFailuresTotal: sdk.Int(63553),
            },
            SparkJob: &shared.SparkJob{
                ArchiveUris: []string{
                    "neque",
                    "exercitationem",
                },
                Args: []string{
                    "et",
                    "ipsum",
                    "unde",
                    "nulla",
                },
                FileUris: []string{
                    "maxime",
                    "quia",
                    "quia",
                },
                JarFileUris: []string{
                    "omnis",
                    "libero",
                },
                LoggingConfig: &shared.LoggingConfig{
                    DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                        "id": shared.LoggingConfigDriverLogLevelsEnumError,
                    },
                },
                MainClass: sdk.String("fugiat"),
                MainJarFileURI: sdk.String("officia"),
                Properties: map[string]string{
                    "placeat": "sit",
                    "iusto": "ipsa",
                    "voluptates": "inventore",
                },
            },
            SparkRJob: &shared.SparkRJob{
                ArchiveUris: []string{
                    "totam",
                },
                Args: []string{
                    "eligendi",
                    "distinctio",
                },
                FileUris: []string{
                    "autem",
                },
                LoggingConfig: &shared.LoggingConfig{
                    DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                        "dolores": shared.LoggingConfigDriverLogLevelsEnumFatal,
                        "beatae": shared.LoggingConfigDriverLogLevelsEnumError,
                    },
                },
                MainRFileURI: sdk.String("facere"),
                Properties: map[string]string{
                    "molestiae": "provident",
                    "accusamus": "necessitatibus",
                    "tempore": "sint",
                },
            },
            SparkSQLJob: &shared.SparkSQLJob{
                JarFileUris: []string{
                    "autem",
                    "ipsam",
                },
                LoggingConfig: &shared.LoggingConfig{
                    DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                        "laudantium": shared.LoggingConfigDriverLogLevelsEnumDebug,
                        "officiis": shared.LoggingConfigDriverLogLevelsEnumOff,
                        "cum": shared.LoggingConfigDriverLogLevelsEnumFatal,
                    },
                },
                Properties: map[string]string{
                    "quia": "quidem",
                },
                QueryFileURI: sdk.String("fuga"),
                QueryList: &shared.QueryList{
                    Queries: []string{
                        "accusantium",
                        "expedita",
                        "officiis",
                        "eos",
                    },
                },
                ScriptVariables: map[string]string{
                    "odio": "praesentium",
                    "odit": "explicabo",
                    "corporis": "error",
                    "earum": "adipisci",
                },
            },
            TrinoJob: &shared.TrinoJob{
                ClientTags: []string{
                    "similique",
                    "ut",
                    "quidem",
                    "quis",
                },
                ContinueOnFailure: sdk.Bool(false),
                LoggingConfig: &shared.LoggingConfig{
                    DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                        "unde": shared.LoggingConfigDriverLogLevelsEnumInfo,
                    },
                },
                OutputFormat: sdk.String("delectus"),
                Properties: map[string]string{
                    "fugit": "numquam",
                    "numquam": "nesciunt",
                    "at": "officia",
                },
                QueryFileURI: sdk.String("dignissimos"),
                QueryList: &shared.QueryList{
                    Queries: []string{
                        "necessitatibus",
                        "corporis",
                        "qui",
                        "expedita",
                    },
                },
            },
        },
        AccessToken: sdk.String("voluptatum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("placeat"),
        JobID: "enim",
        Key: sdk.String("neque"),
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "minus",
        QuotaUser: sdk.String("eum"),
        Region: "modi",
        UpdateMask: sdk.String("corporis"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("voluptates"),
    }, operations.DataprocProjectsRegionsJobsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## DataprocProjectsRegionsJobsSubmit

Submits a job to a cluster.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsJobsSubmit(ctx, operations.DataprocProjectsRegionsJobsSubmitRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SubmitJobRequestInput: &shared.SubmitJobRequestInput{
            Job: &shared.JobInput{
                DriverSchedulingConfig: &shared.DriverSchedulingConfig{
                    MemoryMb: sdk.Int(731744),
                    Vcores: sdk.Int(46013),
                },
                HadoopJob: &shared.HadoopJob{
                    ArchiveUris: []string{
                        "ratione",
                        "labore",
                        "totam",
                    },
                    Args: []string{
                        "voluptas",
                        "quo",
                        "velit",
                    },
                    FileUris: []string{
                        "fuga",
                        "nostrum",
                        "est",
                        "impedit",
                    },
                    JarFileUris: []string{
                        "tempore",
                        "vero",
                        "odit",
                        "repellat",
                    },
                    LoggingConfig: &shared.LoggingConfig{
                        DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                            "nemo": shared.LoggingConfigDriverLogLevelsEnumDebug,
                            "aperiam": shared.LoggingConfigDriverLogLevelsEnumInfo,
                            "minima": shared.LoggingConfigDriverLogLevelsEnumInfo,
                            "ducimus": shared.LoggingConfigDriverLogLevelsEnumWarn,
                        },
                    },
                    MainClass: sdk.String("dolores"),
                    MainJarFileURI: sdk.String("error"),
                    Properties: map[string]string{
                        "ducimus": "voluptate",
                    },
                },
                HiveJob: &shared.HiveJob{
                    ContinueOnFailure: sdk.Bool(false),
                    JarFileUris: []string{
                        "itaque",
                        "similique",
                        "optio",
                        "ex",
                    },
                    Properties: map[string]string{
                        "commodi": "officiis",
                        "placeat": "quidem",
                    },
                    QueryFileURI: sdk.String("exercitationem"),
                    QueryList: &shared.QueryList{
                        Queries: []string{
                            "dolorem",
                            "modi",
                        },
                    },
                    ScriptVariables: map[string]string{
                        "sint": "vero",
                    },
                },
                Labels: map[string]string{
                    "repudiandae": "cum",
                },
                PigJob: &shared.PigJob{
                    ContinueOnFailure: sdk.Bool(false),
                    JarFileUris: []string{
                        "earum",
                    },
                    LoggingConfig: &shared.LoggingConfig{
                        DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                            "animi": shared.LoggingConfigDriverLogLevelsEnumAll,
                            "nam": shared.LoggingConfigDriverLogLevelsEnumAll,
                        },
                    },
                    Properties: map[string]string{
                        "necessitatibus": "nobis",
                    },
                    QueryFileURI: sdk.String("ipsa"),
                    QueryList: &shared.QueryList{
                        Queries: []string{
                            "maiores",
                            "veritatis",
                        },
                    },
                    ScriptVariables: map[string]string{
                        "laboriosam": "pariatur",
                    },
                },
                Placement: &shared.JobPlacementInput{
                    ClusterLabels: map[string]string{
                        "excepturi": "occaecati",
                        "nemo": "aliquam",
                        "nostrum": "doloribus",
                    },
                    ClusterName: sdk.String("eligendi"),
                },
                PrestoJob: &shared.PrestoJob{
                    ClientTags: []string{
                        "enim",
                        "hic",
                        "animi",
                    },
                    ContinueOnFailure: sdk.Bool(false),
                    LoggingConfig: &shared.LoggingConfig{
                        DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                            "totam": shared.LoggingConfigDriverLogLevelsEnumWarn,
                            "odio": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                            "saepe": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                        },
                    },
                    OutputFormat: sdk.String("quos"),
                    Properties: map[string]string{
                        "assumenda": "tempore",
                        "libero": "velit",
                        "doloremque": "delectus",
                    },
                    QueryFileURI: sdk.String("impedit"),
                    QueryList: &shared.QueryList{
                        Queries: []string{
                            "ipsum",
                            "adipisci",
                            "saepe",
                        },
                    },
                },
                PysparkJob: &shared.PySparkJob{
                    ArchiveUris: []string{
                        "doloremque",
                        "quis",
                        "veniam",
                    },
                    Args: []string{
                        "architecto",
                        "cupiditate",
                        "molestiae",
                    },
                    FileUris: []string{
                        "possimus",
                        "non",
                        "magnam",
                        "itaque",
                    },
                    JarFileUris: []string{
                        "asperiores",
                    },
                    LoggingConfig: &shared.LoggingConfig{
                        DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                            "consequuntur": shared.LoggingConfigDriverLogLevelsEnumFatal,
                            "laudantium": shared.LoggingConfigDriverLogLevelsEnumAll,
                        },
                    },
                    MainPythonFileURI: sdk.String("pariatur"),
                    Properties: map[string]string{
                        "exercitationem": "ab",
                    },
                    PythonFileUris: []string{
                        "facilis",
                    },
                },
                Reference: &shared.JobReference{
                    JobID: sdk.String("tempore"),
                    ProjectID: sdk.String("nisi"),
                },
                Scheduling: &shared.JobScheduling{
                    MaxFailuresPerHour: sdk.Int(977518),
                    MaxFailuresTotal: sdk.Int(310840),
                },
                SparkJob: &shared.SparkJob{
                    ArchiveUris: []string{
                        "distinctio",
                        "nisi",
                        "quis",
                    },
                    Args: []string{
                        "libero",
                        "minus",
                    },
                    FileUris: []string{
                        "facilis",
                        "ipsum",
                        "ad",
                        "voluptatibus",
                    },
                    JarFileUris: []string{
                        "consequuntur",
                        "debitis",
                        "labore",
                        "rerum",
                    },
                    LoggingConfig: &shared.LoggingConfig{
                        DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                            "reprehenderit": shared.LoggingConfigDriverLogLevelsEnumDebug,
                        },
                    },
                    MainClass: sdk.String("neque"),
                    MainJarFileURI: sdk.String("iusto"),
                    Properties: map[string]string{
                        "rem": "eligendi",
                        "fugiat": "unde",
                        "officiis": "ducimus",
                    },
                },
                SparkRJob: &shared.SparkRJob{
                    ArchiveUris: []string{
                        "dicta",
                    },
                    Args: []string{
                        "porro",
                        "vitae",
                        "dignissimos",
                    },
                    FileUris: []string{
                        "fugiat",
                        "ad",
                    },
                    LoggingConfig: &shared.LoggingConfig{
                        DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                            "enim": shared.LoggingConfigDriverLogLevelsEnumOff,
                        },
                    },
                    MainRFileURI: sdk.String("iusto"),
                    Properties: map[string]string{
                        "libero": "illo",
                        "ab": "incidunt",
                    },
                },
                SparkSQLJob: &shared.SparkSQLJob{
                    JarFileUris: []string{
                        "saepe",
                        "tempore",
                        "veniam",
                        "eos",
                    },
                    LoggingConfig: &shared.LoggingConfig{
                        DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                            "earum": shared.LoggingConfigDriverLogLevelsEnumDebug,
                            "praesentium": shared.LoggingConfigDriverLogLevelsEnumDebug,
                            "repellat": shared.LoggingConfigDriverLogLevelsEnumFatal,
                            "sequi": shared.LoggingConfigDriverLogLevelsEnumInfo,
                        },
                    },
                    Properties: map[string]string{
                        "illo": "labore",
                        "assumenda": "aliquam",
                        "quisquam": "provident",
                    },
                    QueryFileURI: sdk.String("laudantium"),
                    QueryList: &shared.QueryList{
                        Queries: []string{
                            "consequatur",
                            "maxime",
                            "aspernatur",
                            "nam",
                        },
                    },
                    ScriptVariables: map[string]string{
                        "quas": "provident",
                        "repudiandae": "rerum",
                        "dignissimos": "corporis",
                    },
                },
                TrinoJob: &shared.TrinoJob{
                    ClientTags: []string{
                        "similique",
                        "repellendus",
                        "iure",
                        "dolorem",
                    },
                    ContinueOnFailure: sdk.Bool(false),
                    LoggingConfig: &shared.LoggingConfig{
                        DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                            "impedit": shared.LoggingConfigDriverLogLevelsEnumDebug,
                            "aut": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                        },
                    },
                    OutputFormat: sdk.String("ad"),
                    Properties: map[string]string{
                        "amet": "illum",
                    },
                    QueryFileURI: sdk.String("praesentium"),
                    QueryList: &shared.QueryList{
                        Queries: []string{
                            "cum",
                            "amet",
                            "quasi",
                        },
                    },
                },
            },
            RequestID: sdk.String("dicta"),
        },
        AccessToken: sdk.String("laudantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("earum"),
        Fields: sdk.String("iusto"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "dolorum",
        QuotaUser: sdk.String("necessitatibus"),
        Region: "provident",
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("consequatur"),
    }, operations.DataprocProjectsRegionsJobsSubmitSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## DataprocProjectsRegionsJobsSubmitAsOperation

Submits job to a cluster.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsJobsSubmitAsOperation(ctx, operations.DataprocProjectsRegionsJobsSubmitAsOperationRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SubmitJobRequestInput: &shared.SubmitJobRequestInput{
            Job: &shared.JobInput{
                DriverSchedulingConfig: &shared.DriverSchedulingConfig{
                    MemoryMb: sdk.Int(475826),
                    Vcores: sdk.Int(930840),
                },
                HadoopJob: &shared.HadoopJob{
                    ArchiveUris: []string{
                        "corrupti",
                        "aperiam",
                        "sint",
                    },
                    Args: []string{
                        "eos",
                        "totam",
                        "dicta",
                        "voluptatem",
                    },
                    FileUris: []string{
                        "dolor",
                    },
                    JarFileUris: []string{
                        "a",
                    },
                    LoggingConfig: &shared.LoggingConfig{
                        DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                            "occaecati": shared.LoggingConfigDriverLogLevelsEnumInfo,
                        },
                    },
                    MainClass: sdk.String("beatae"),
                    MainJarFileURI: sdk.String("at"),
                    Properties: map[string]string{
                        "minus": "esse",
                        "voluptatem": "perferendis",
                    },
                },
                HiveJob: &shared.HiveJob{
                    ContinueOnFailure: sdk.Bool(false),
                    JarFileUris: []string{
                        "ea",
                        "aperiam",
                        "dignissimos",
                    },
                    Properties: map[string]string{
                        "velit": "porro",
                        "provident": "consectetur",
                        "eligendi": "dignissimos",
                        "consectetur": "soluta",
                    },
                    QueryFileURI: sdk.String("natus"),
                    QueryList: &shared.QueryList{
                        Queries: []string{
                            "officia",
                            "amet",
                            "tenetur",
                            "aspernatur",
                        },
                    },
                    ScriptVariables: map[string]string{
                        "itaque": "illum",
                        "laborum": "dignissimos",
                        "vero": "qui",
                        "consectetur": "repellat",
                    },
                },
                Labels: map[string]string{
                    "explicabo": "exercitationem",
                },
                PigJob: &shared.PigJob{
                    ContinueOnFailure: sdk.Bool(false),
                    JarFileUris: []string{
                        "non",
                        "ab",
                    },
                    LoggingConfig: &shared.LoggingConfig{
                        DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                            "hic": shared.LoggingConfigDriverLogLevelsEnumWarn,
                        },
                    },
                    Properties: map[string]string{
                        "non": "distinctio",
                        "in": "exercitationem",
                        "labore": "numquam",
                        "repudiandae": "modi",
                    },
                    QueryFileURI: sdk.String("in"),
                    QueryList: &shared.QueryList{
                        Queries: []string{
                            "accusamus",
                        },
                    },
                    ScriptVariables: map[string]string{
                        "aperiam": "odit",
                        "deleniti": "enim",
                        "voluptate": "similique",
                    },
                },
                Placement: &shared.JobPlacementInput{
                    ClusterLabels: map[string]string{
                        "libero": "magnam",
                        "sit": "modi",
                    },
                    ClusterName: sdk.String("eum"),
                },
                PrestoJob: &shared.PrestoJob{
                    ClientTags: []string{
                        "mollitia",
                    },
                    ContinueOnFailure: sdk.Bool(false),
                    LoggingConfig: &shared.LoggingConfig{
                        DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                            "fugiat": shared.LoggingConfigDriverLogLevelsEnumDebug,
                            "molestiae": shared.LoggingConfigDriverLogLevelsEnumTrace,
                        },
                    },
                    OutputFormat: sdk.String("reiciendis"),
                    Properties: map[string]string{
                        "modi": "aut",
                    },
                    QueryFileURI: sdk.String("aut"),
                    QueryList: &shared.QueryList{
                        Queries: []string{
                            "odio",
                            "commodi",
                            "numquam",
                            "dolorum",
                        },
                    },
                },
                PysparkJob: &shared.PySparkJob{
                    ArchiveUris: []string{
                        "voluptate",
                        "consectetur",
                        "nesciunt",
                        "quaerat",
                    },
                    Args: []string{
                        "minus",
                        "sunt",
                        "distinctio",
                        "iusto",
                    },
                    FileUris: []string{
                        "et",
                        "facilis",
                        "amet",
                    },
                    JarFileUris: []string{
                        "fuga",
                        "alias",
                    },
                    LoggingConfig: &shared.LoggingConfig{
                        DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                            "aut": shared.LoggingConfigDriverLogLevelsEnumInfo,
                            "laudantium": shared.LoggingConfigDriverLogLevelsEnumFatal,
                            "veritatis": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                        },
                    },
                    MainPythonFileURI: sdk.String("eaque"),
                    Properties: map[string]string{
                        "delectus": "mollitia",
                        "nulla": "officia",
                        "sed": "voluptatem",
                        "alias": "eveniet",
                    },
                    PythonFileUris: []string{
                        "voluptatem",
                        "incidunt",
                        "qui",
                        "qui",
                    },
                },
                Reference: &shared.JobReference{
                    JobID: sdk.String("necessitatibus"),
                    ProjectID: sdk.String("harum"),
                },
                Scheduling: &shared.JobScheduling{
                    MaxFailuresPerHour: sdk.Int(126727),
                    MaxFailuresTotal: sdk.Int(108903),
                },
                SparkJob: &shared.SparkJob{
                    ArchiveUris: []string{
                        "modi",
                        "optio",
                    },
                    Args: []string{
                        "molestias",
                        "officia",
                        "libero",
                        "totam",
                    },
                    FileUris: []string{
                        "aliquid",
                    },
                    JarFileUris: []string{
                        "impedit",
                        "ducimus",
                    },
                    LoggingConfig: &shared.LoggingConfig{
                        DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                            "velit": shared.LoggingConfigDriverLogLevelsEnumOff,
                        },
                    },
                    MainClass: sdk.String("repellat"),
                    MainJarFileURI: sdk.String("nulla"),
                    Properties: map[string]string{
                        "natus": "accusamus",
                        "doloremque": "nisi",
                        "rerum": "recusandae",
                    },
                },
                SparkRJob: &shared.SparkRJob{
                    ArchiveUris: []string{
                        "non",
                        "rem",
                        "quia",
                        "ullam",
                    },
                    Args: []string{
                        "dicta",
                        "voluptatibus",
                        "eligendi",
                        "quae",
                    },
                    FileUris: []string{
                        "architecto",
                        "architecto",
                        "enim",
                        "optio",
                    },
                    LoggingConfig: &shared.LoggingConfig{
                        DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                            "perferendis": shared.LoggingConfigDriverLogLevelsEnumError,
                            "reiciendis": shared.LoggingConfigDriverLogLevelsEnumOff,
                            "iste": shared.LoggingConfigDriverLogLevelsEnumAll,
                        },
                    },
                    MainRFileURI: sdk.String("quos"),
                    Properties: map[string]string{
                        "dolore": "modi",
                        "itaque": "maxime",
                    },
                },
                SparkSQLJob: &shared.SparkSQLJob{
                    JarFileUris: []string{
                        "consequuntur",
                        "assumenda",
                    },
                    LoggingConfig: &shared.LoggingConfig{
                        DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                            "doloribus": shared.LoggingConfigDriverLogLevelsEnumError,
                            "porro": shared.LoggingConfigDriverLogLevelsEnumFatal,
                            "totam": shared.LoggingConfigDriverLogLevelsEnumOff,
                            "ab": shared.LoggingConfigDriverLogLevelsEnumWarn,
                        },
                    },
                    Properties: map[string]string{
                        "esse": "iure",
                        "odio": "nesciunt",
                    },
                    QueryFileURI: sdk.String("debitis"),
                    QueryList: &shared.QueryList{
                        Queries: []string{
                            "neque",
                            "corporis",
                        },
                    },
                    ScriptVariables: map[string]string{
                        "consequuntur": "officia",
                        "reprehenderit": "distinctio",
                    },
                },
                TrinoJob: &shared.TrinoJob{
                    ClientTags: []string{
                        "ipsa",
                        "rem",
                    },
                    ContinueOnFailure: sdk.Bool(false),
                    LoggingConfig: &shared.LoggingConfig{
                        DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                            "accusantium": shared.LoggingConfigDriverLogLevelsEnumTrace,
                            "saepe": shared.LoggingConfigDriverLogLevelsEnumAll,
                            "facere": shared.LoggingConfigDriverLogLevelsEnumTrace,
                            "quos": shared.LoggingConfigDriverLogLevelsEnumOff,
                        },
                    },
                    OutputFormat: sdk.String("fugiat"),
                    Properties: map[string]string{
                        "delectus": "velit",
                        "vitae": "nesciunt",
                        "similique": "illo",
                    },
                    QueryFileURI: sdk.String("repellat"),
                    QueryList: &shared.QueryList{
                        Queries: []string{
                            "doloribus",
                            "possimus",
                        },
                    },
                },
            },
            RequestID: sdk.String("unde"),
        },
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("optio"),
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quidem",
        QuotaUser: sdk.String("nesciunt"),
        Region: "commodi",
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.DataprocProjectsRegionsJobsSubmitAsOperationSecurity{
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

## DataprocProjectsRegionsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsOperationsCancel(ctx, operations.DataprocProjectsRegionsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("ut"),
        Key: sdk.String("numquam"),
        Name: "Travis Rempel",
        OauthToken: sdk.String("ex"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("beatae"),
    }, operations.DataprocProjectsRegionsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DataprocProjectsRegionsWorkflowTemplatesCreate

Creates new workflow template.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsWorkflowTemplatesCreate(ctx, operations.DataprocProjectsRegionsWorkflowTemplatesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        WorkflowTemplateInput: &shared.WorkflowTemplateInput{
            DagTimeout: sdk.String("nisi"),
            ID: sdk.String("c37a5126-2438-435b-bc05-a23a45cefc5f"),
            Jobs: []shared.OrderedJob{
                shared.OrderedJob{
                    HadoopJob: &shared.HadoopJob{
                        ArchiveUris: []string{
                            "architecto",
                            "alias",
                            "culpa",
                            "ipsa",
                        },
                        Args: []string{
                            "necessitatibus",
                            "quia",
                            "dicta",
                            "vel",
                        },
                        FileUris: []string{
                            "debitis",
                            "ullam",
                            "architecto",
                        },
                        JarFileUris: []string{
                            "perferendis",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "provident": shared.LoggingConfigDriverLogLevelsEnumError,
                            },
                        },
                        MainClass: sdk.String("iure"),
                        MainJarFileURI: sdk.String("quibusdam"),
                        Properties: map[string]string{
                            "nemo": "recusandae",
                            "velit": "magnam",
                            "dignissimos": "laboriosam",
                            "sed": "odio",
                        },
                    },
                    HiveJob: &shared.HiveJob{
                        ContinueOnFailure: sdk.Bool(false),
                        JarFileUris: []string{
                            "provident",
                            "cum",
                            "doloribus",
                        },
                        Properties: map[string]string{
                            "quidem": "itaque",
                            "laboriosam": "unde",
                            "modi": "perspiciatis",
                        },
                        QueryFileURI: sdk.String("hic"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "aspernatur",
                                "libero",
                                "nam",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "recusandae": "quod",
                            "id": "saepe",
                        },
                    },
                    Labels: map[string]string{
                        "quo": "nesciunt",
                        "illum": "nemo",
                    },
                    PigJob: &shared.PigJob{
                        ContinueOnFailure: sdk.Bool(false),
                        JarFileUris: []string{
                            "facilis",
                            "non",
                            "mollitia",
                            "assumenda",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "distinctio": shared.LoggingConfigDriverLogLevelsEnumFatal,
                                "ad": shared.LoggingConfigDriverLogLevelsEnumFatal,
                                "laborum": shared.LoggingConfigDriverLogLevelsEnumOff,
                                "laborum": shared.LoggingConfigDriverLogLevelsEnumTrace,
                            },
                        },
                        Properties: map[string]string{
                            "ipsam": "alias",
                            "suscipit": "deserunt",
                            "molestias": "laborum",
                            "est": "occaecati",
                        },
                        QueryFileURI: sdk.String("labore"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "perferendis",
                                "fugit",
                                "aliquid",
                                "magnam",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "eligendi": "hic",
                            "nostrum": "officiis",
                        },
                    },
                    PrerequisiteStepIds: []string{
                        "nulla",
                        "error",
                        "mollitia",
                    },
                    PrestoJob: &shared.PrestoJob{
                        ClientTags: []string{
                            "nostrum",
                            "esse",
                        },
                        ContinueOnFailure: sdk.Bool(false),
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "fuga": shared.LoggingConfigDriverLogLevelsEnumFatal,
                                "impedit": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                                "deserunt": shared.LoggingConfigDriverLogLevelsEnumFatal,
                            },
                        },
                        OutputFormat: sdk.String("laboriosam"),
                        Properties: map[string]string{
                            "voluptatem": "facere",
                        },
                        QueryFileURI: sdk.String("necessitatibus"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "consequatur",
                                "eaque",
                                "architecto",
                                "similique",
                            },
                        },
                    },
                    PysparkJob: &shared.PySparkJob{
                        ArchiveUris: []string{
                            "blanditiis",
                            "quae",
                            "magni",
                            "officiis",
                        },
                        Args: []string{
                            "necessitatibus",
                        },
                        FileUris: []string{
                            "ipsa",
                            "excepturi",
                            "a",
                            "maiores",
                        },
                        JarFileUris: []string{
                            "maiores",
                            "alias",
                            "asperiores",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "dicta": shared.LoggingConfigDriverLogLevelsEnumDebug,
                                "earum": shared.LoggingConfigDriverLogLevelsEnumOff,
                                "velit": shared.LoggingConfigDriverLogLevelsEnumTrace,
                            },
                        },
                        MainPythonFileURI: sdk.String("esse"),
                        Properties: map[string]string{
                            "eligendi": "quasi",
                            "neque": "vero",
                        },
                        PythonFileUris: []string{
                            "accusantium",
                            "qui",
                            "impedit",
                        },
                    },
                    Scheduling: &shared.JobScheduling{
                        MaxFailuresPerHour: sdk.Int(104736),
                        MaxFailuresTotal: sdk.Int(278329),
                    },
                    SparkJob: &shared.SparkJob{
                        ArchiveUris: []string{
                            "odit",
                        },
                        Args: []string{
                            "rerum",
                            "alias",
                        },
                        FileUris: []string{
                            "vel",
                            "accusantium",
                            "id",
                        },
                        JarFileUris: []string{
                            "ex",
                            "quas",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "ullam": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                            },
                        },
                        MainClass: sdk.String("similique"),
                        MainJarFileURI: sdk.String("incidunt"),
                        Properties: map[string]string{
                            "magni": "deserunt",
                            "delectus": "omnis",
                        },
                    },
                    SparkRJob: &shared.SparkRJob{
                        ArchiveUris: []string{
                            "nesciunt",
                        },
                        Args: []string{
                            "quis",
                            "cupiditate",
                            "aliquam",
                            "excepturi",
                        },
                        FileUris: []string{
                            "laudantium",
                            "velit",
                            "reiciendis",
                            "amet",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "ipsa": shared.LoggingConfigDriverLogLevelsEnumFatal,
                                "tenetur": shared.LoggingConfigDriverLogLevelsEnumInfo,
                            },
                        },
                        MainRFileURI: sdk.String("molestiae"),
                        Properties: map[string]string{
                            "asperiores": "a",
                            "nobis": "perspiciatis",
                        },
                    },
                    SparkSQLJob: &shared.SparkSQLJob{
                        JarFileUris: []string{
                            "dicta",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "commodi": shared.LoggingConfigDriverLogLevelsEnumOff,
                                "porro": shared.LoggingConfigDriverLogLevelsEnumError,
                                "quidem": shared.LoggingConfigDriverLogLevelsEnumTrace,
                                "voluptates": shared.LoggingConfigDriverLogLevelsEnumAll,
                            },
                        },
                        Properties: map[string]string{
                            "sequi": "eligendi",
                            "asperiores": "esse",
                        },
                        QueryFileURI: sdk.String("blanditiis"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "repellat",
                                "a",
                                "animi",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "itaque": "nulla",
                            "deserunt": "corporis",
                            "velit": "officiis",
                            "enim": "officia",
                        },
                    },
                    StepID: sdk.String("saepe"),
                    TrinoJob: &shared.TrinoJob{
                        ClientTags: []string{
                            "repudiandae",
                            "accusantium",
                        },
                        ContinueOnFailure: sdk.Bool(false),
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "impedit": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                                "blanditiis": shared.LoggingConfigDriverLogLevelsEnumTrace,
                                "quisquam": shared.LoggingConfigDriverLogLevelsEnumAll,
                            },
                        },
                        OutputFormat: sdk.String("nobis"),
                        Properties: map[string]string{
                            "minus": "quia",
                            "magnam": "reprehenderit",
                            "quod": "quos",
                        },
                        QueryFileURI: sdk.String("corrupti"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "molestiae",
                            },
                        },
                    },
                },
                shared.OrderedJob{
                    HadoopJob: &shared.HadoopJob{
                        ArchiveUris: []string{
                            "laborum",
                        },
                        Args: []string{
                            "perferendis",
                            "necessitatibus",
                        },
                        FileUris: []string{
                            "molestias",
                        },
                        JarFileUris: []string{
                            "sunt",
                            "maiores",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "odit": shared.LoggingConfigDriverLogLevelsEnumOff,
                            },
                        },
                        MainClass: sdk.String("veniam"),
                        MainJarFileURI: sdk.String("ipsam"),
                        Properties: map[string]string{
                            "exercitationem": "veniam",
                        },
                    },
                    HiveJob: &shared.HiveJob{
                        ContinueOnFailure: sdk.Bool(false),
                        JarFileUris: []string{
                            "ad",
                            "nisi",
                        },
                        Properties: map[string]string{
                            "quis": "quibusdam",
                            "nemo": "suscipit",
                            "pariatur": "sit",
                            "quidem": "repellendus",
                        },
                        QueryFileURI: sdk.String("perferendis"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "sapiente",
                                "sed",
                                "possimus",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "repudiandae": "architecto",
                            "adipisci": "pariatur",
                            "harum": "dolore",
                            "voluptatibus": "iure",
                        },
                    },
                    Labels: map[string]string{
                        "minus": "soluta",
                    },
                    PigJob: &shared.PigJob{
                        ContinueOnFailure: sdk.Bool(false),
                        JarFileUris: []string{
                            "velit",
                            "earum",
                            "praesentium",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "non": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                                "mollitia": shared.LoggingConfigDriverLogLevelsEnumFatal,
                                "harum": shared.LoggingConfigDriverLogLevelsEnumError,
                            },
                        },
                        Properties: map[string]string{
                            "expedita": "corrupti",
                        },
                        QueryFileURI: sdk.String("eaque"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "aliquid",
                                "excepturi",
                                "magni",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "possimus": "dolor",
                            "rerum": "sed",
                        },
                    },
                    PrerequisiteStepIds: []string{
                        "optio",
                        "delectus",
                        "minus",
                        "quo",
                    },
                    PrestoJob: &shared.PrestoJob{
                        ClientTags: []string{
                            "asperiores",
                            "voluptatum",
                            "iste",
                        },
                        ContinueOnFailure: sdk.Bool(false),
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "accusantium": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                                "aut": shared.LoggingConfigDriverLogLevelsEnumOff,
                            },
                        },
                        OutputFormat: sdk.String("nostrum"),
                        Properties: map[string]string{
                            "possimus": "neque",
                            "pariatur": "vel",
                            "sapiente": "mollitia",
                            "quae": "quos",
                        },
                        QueryFileURI: sdk.String("aperiam"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "voluptates",
                                "ad",
                            },
                        },
                    },
                    PysparkJob: &shared.PySparkJob{
                        ArchiveUris: []string{
                            "quisquam",
                            "quas",
                        },
                        Args: []string{
                            "maiores",
                        },
                        FileUris: []string{
                            "aliquid",
                        },
                        JarFileUris: []string{
                            "est",
                            "dolor",
                            "aliquid",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "cumque": shared.LoggingConfigDriverLogLevelsEnumInfo,
                            },
                        },
                        MainPythonFileURI: sdk.String("voluptatum"),
                        Properties: map[string]string{
                            "adipisci": "recusandae",
                            "tempora": "blanditiis",
                        },
                        PythonFileUris: []string{
                            "sequi",
                            "voluptatum",
                        },
                    },
                    Scheduling: &shared.JobScheduling{
                        MaxFailuresPerHour: sdk.Int(27078),
                        MaxFailuresTotal: sdk.Int(703189),
                    },
                    SparkJob: &shared.SparkJob{
                        ArchiveUris: []string{
                            "tenetur",
                        },
                        Args: []string{
                            "quidem",
                            "totam",
                        },
                        FileUris: []string{
                            "deserunt",
                            "magni",
                            "nihil",
                            "voluptas",
                        },
                        JarFileUris: []string{
                            "commodi",
                            "alias",
                            "fuga",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "dolore": shared.LoggingConfigDriverLogLevelsEnumFatal,
                            },
                        },
                        MainClass: sdk.String("aliquam"),
                        MainJarFileURI: sdk.String("iste"),
                        Properties: map[string]string{
                            "eligendi": "placeat",
                            "voluptas": "occaecati",
                        },
                    },
                    SparkRJob: &shared.SparkRJob{
                        ArchiveUris: []string{
                            "illo",
                            "nihil",
                            "inventore",
                        },
                        Args: []string{
                            "ipsam",
                            "quasi",
                            "cumque",
                        },
                        FileUris: []string{
                            "harum",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "facilis": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                                "cumque": shared.LoggingConfigDriverLogLevelsEnumOff,
                                "labore": shared.LoggingConfigDriverLogLevelsEnumError,
                                "corrupti": shared.LoggingConfigDriverLogLevelsEnumInfo,
                            },
                        },
                        MainRFileURI: sdk.String("atque"),
                        Properties: map[string]string{
                            "cum": "pariatur",
                            "sapiente": "quo",
                            "incidunt": "quod",
                            "minus": "porro",
                        },
                    },
                    SparkSQLJob: &shared.SparkSQLJob{
                        JarFileUris: []string{
                            "excepturi",
                            "occaecati",
                            "libero",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "esse": shared.LoggingConfigDriverLogLevelsEnumOff,
                                "maxime": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                                "soluta": shared.LoggingConfigDriverLogLevelsEnumAll,
                                "pariatur": shared.LoggingConfigDriverLogLevelsEnumError,
                            },
                        },
                        Properties: map[string]string{
                            "veritatis": "aut",
                            "laudantium": "iusto",
                            "dolor": "voluptates",
                            "tempora": "magni",
                        },
                        QueryFileURI: sdk.String("rerum"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "voluptatem",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "at": "eum",
                            "reprehenderit": "voluptatum",
                        },
                    },
                    StepID: sdk.String("blanditiis"),
                    TrinoJob: &shared.TrinoJob{
                        ClientTags: []string{
                            "atque",
                            "rerum",
                        },
                        ContinueOnFailure: sdk.Bool(false),
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "atque": shared.LoggingConfigDriverLogLevelsEnumDebug,
                                "atque": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                                "est": shared.LoggingConfigDriverLogLevelsEnumTrace,
                            },
                        },
                        OutputFormat: sdk.String("rem"),
                        Properties: map[string]string{
                            "quae": "quas",
                        },
                        QueryFileURI: sdk.String("placeat"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "labore",
                                "sapiente",
                            },
                        },
                    },
                },
                shared.OrderedJob{
                    HadoopJob: &shared.HadoopJob{
                        ArchiveUris: []string{
                            "delectus",
                            "officia",
                            "natus",
                            "cumque",
                        },
                        Args: []string{
                            "quaerat",
                            "doloribus",
                            "quia",
                        },
                        FileUris: []string{
                            "mollitia",
                            "cumque",
                            "quis",
                            "enim",
                        },
                        JarFileUris: []string{
                            "nemo",
                            "illum",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "sit": shared.LoggingConfigDriverLogLevelsEnumInfo,
                            },
                        },
                        MainClass: sdk.String("minus"),
                        MainJarFileURI: sdk.String("asperiores"),
                        Properties: map[string]string{
                            "voluptates": "praesentium",
                            "dicta": "fugit",
                            "sit": "aliquid",
                            "necessitatibus": "sed",
                        },
                    },
                    HiveJob: &shared.HiveJob{
                        ContinueOnFailure: sdk.Bool(false),
                        JarFileUris: []string{
                            "sunt",
                            "nesciunt",
                            "delectus",
                        },
                        Properties: map[string]string{
                            "aliquam": "deserunt",
                            "modi": "sunt",
                            "impedit": "eius",
                        },
                        QueryFileURI: sdk.String("voluptatum"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "at",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "repellat": "aspernatur",
                        },
                    },
                    Labels: map[string]string{
                        "sequi": "fugit",
                    },
                    PigJob: &shared.PigJob{
                        ContinueOnFailure: sdk.Bool(false),
                        JarFileUris: []string{
                            "hic",
                            "eaque",
                            "dolorem",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "aperiam": shared.LoggingConfigDriverLogLevelsEnumAll,
                            },
                        },
                        Properties: map[string]string{
                            "enim": "illo",
                            "magnam": "delectus",
                            "numquam": "optio",
                            "nobis": "ex",
                        },
                        QueryFileURI: sdk.String("repellat"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "deleniti",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "hic": "excepturi",
                            "aliquid": "sed",
                            "beatae": "similique",
                        },
                    },
                    PrerequisiteStepIds: []string{
                        "animi",
                        "dolore",
                    },
                    PrestoJob: &shared.PrestoJob{
                        ClientTags: []string{
                            "dignissimos",
                            "esse",
                            "animi",
                            "laudantium",
                        },
                        ContinueOnFailure: sdk.Bool(false),
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "eveniet": shared.LoggingConfigDriverLogLevelsEnumOff,
                                "velit": shared.LoggingConfigDriverLogLevelsEnumFatal,
                            },
                        },
                        OutputFormat: sdk.String("eius"),
                        Properties: map[string]string{
                            "itaque": "dignissimos",
                            "ipsam": "explicabo",
                            "impedit": "aliquid",
                        },
                        QueryFileURI: sdk.String("quis"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "ipsum",
                                "ut",
                                "quaerat",
                            },
                        },
                    },
                    PysparkJob: &shared.PySparkJob{
                        ArchiveUris: []string{
                            "praesentium",
                        },
                        Args: []string{
                            "dolor",
                            "expedita",
                            "libero",
                            "iste",
                        },
                        FileUris: []string{
                            "minus",
                        },
                        JarFileUris: []string{
                            "temporibus",
                            "sint",
                            "iusto",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "accusamus": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                                "voluptates": shared.LoggingConfigDriverLogLevelsEnumInfo,
                            },
                        },
                        MainPythonFileURI: sdk.String("tempora"),
                        Properties: map[string]string{
                            "omnis": "illum",
                        },
                        PythonFileUris: []string{
                            "tenetur",
                            "deleniti",
                            "modi",
                        },
                    },
                    Scheduling: &shared.JobScheduling{
                        MaxFailuresPerHour: sdk.Int(937664),
                        MaxFailuresTotal: sdk.Int(101374),
                    },
                    SparkJob: &shared.SparkJob{
                        ArchiveUris: []string{
                            "labore",
                            "maiores",
                        },
                        Args: []string{
                            "saepe",
                        },
                        FileUris: []string{
                            "esse",
                        },
                        JarFileUris: []string{
                            "facere",
                            "quisquam",
                            "cumque",
                            "aliquam",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "deserunt": shared.LoggingConfigDriverLogLevelsEnumTrace,
                                "reiciendis": shared.LoggingConfigDriverLogLevelsEnumAll,
                                "porro": shared.LoggingConfigDriverLogLevelsEnumError,
                            },
                        },
                        MainClass: sdk.String("nobis"),
                        MainJarFileURI: sdk.String("quibusdam"),
                        Properties: map[string]string{
                            "aut": "ipsam",
                            "officia": "cupiditate",
                            "reprehenderit": "quia",
                        },
                    },
                    SparkRJob: &shared.SparkRJob{
                        ArchiveUris: []string{
                            "accusantium",
                            "ad",
                            "nisi",
                            "molestiae",
                        },
                        Args: []string{
                            "laudantium",
                        },
                        FileUris: []string{
                            "odit",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "expedita": shared.LoggingConfigDriverLogLevelsEnumAll,
                                "repellendus": shared.LoggingConfigDriverLogLevelsEnumAll,
                            },
                        },
                        MainRFileURI: sdk.String("ipsa"),
                        Properties: map[string]string{
                            "dolore": "esse",
                            "accusantium": "distinctio",
                            "sapiente": "quam",
                        },
                    },
                    SparkSQLJob: &shared.SparkSQLJob{
                        JarFileUris: []string{
                            "aliquam",
                            "delectus",
                            "culpa",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "iusto": shared.LoggingConfigDriverLogLevelsEnumFatal,
                                "voluptatibus": shared.LoggingConfigDriverLogLevelsEnumDebug,
                                "non": shared.LoggingConfigDriverLogLevelsEnumDebug,
                            },
                        },
                        Properties: map[string]string{
                            "voluptas": "doloribus",
                            "animi": "recusandae",
                            "corporis": "non",
                        },
                        QueryFileURI: sdk.String("necessitatibus"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "maiores",
                                "laboriosam",
                                "voluptatem",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "sequi": "sunt",
                            "vitae": "voluptatibus",
                            "doloremque": "sed",
                            "amet": "rerum",
                        },
                    },
                    StepID: sdk.String("in"),
                    TrinoJob: &shared.TrinoJob{
                        ClientTags: []string{
                            "temporibus",
                            "ratione",
                        },
                        ContinueOnFailure: sdk.Bool(false),
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "nisi": shared.LoggingConfigDriverLogLevelsEnumInfo,
                            },
                        },
                        OutputFormat: sdk.String("reiciendis"),
                        Properties: map[string]string{
                            "vitae": "est",
                            "accusantium": "quod",
                            "minus": "quos",
                            "possimus": "maiores",
                        },
                        QueryFileURI: sdk.String("odio"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "sapiente",
                                "aperiam",
                                "similique",
                            },
                        },
                    },
                },
                shared.OrderedJob{
                    HadoopJob: &shared.HadoopJob{
                        ArchiveUris: []string{
                            "provident",
                        },
                        Args: []string{
                            "repellendus",
                            "unde",
                        },
                        FileUris: []string{
                            "impedit",
                        },
                        JarFileUris: []string{
                            "commodi",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "expedita": shared.LoggingConfigDriverLogLevelsEnumInfo,
                                "quisquam": shared.LoggingConfigDriverLogLevelsEnumAll,
                            },
                        },
                        MainClass: sdk.String("enim"),
                        MainJarFileURI: sdk.String("nulla"),
                        Properties: map[string]string{
                            "distinctio": "mollitia",
                            "impedit": "accusamus",
                            "et": "quas",
                            "blanditiis": "cum",
                        },
                    },
                    HiveJob: &shared.HiveJob{
                        ContinueOnFailure: sdk.Bool(false),
                        JarFileUris: []string{
                            "impedit",
                        },
                        Properties: map[string]string{
                            "eveniet": "repudiandae",
                            "sed": "impedit",
                        },
                        QueryFileURI: sdk.String("quas"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "vel",
                                "eligendi",
                                "recusandae",
                                "ex",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "veritatis": "maiores",
                        },
                    },
                    Labels: map[string]string{
                        "vero": "quidem",
                        "illo": "quo",
                        "dignissimos": "minus",
                        "distinctio": "possimus",
                    },
                    PigJob: &shared.PigJob{
                        ContinueOnFailure: sdk.Bool(false),
                        JarFileUris: []string{
                            "suscipit",
                            "saepe",
                            "earum",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "nihil": shared.LoggingConfigDriverLogLevelsEnumTrace,
                                "ipsum": shared.LoggingConfigDriverLogLevelsEnumInfo,
                                "laudantium": shared.LoggingConfigDriverLogLevelsEnumError,
                                "deserunt": shared.LoggingConfigDriverLogLevelsEnumAll,
                            },
                        },
                        Properties: map[string]string{
                            "sequi": "beatae",
                            "iusto": "esse",
                        },
                        QueryFileURI: sdk.String("magnam"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "nulla",
                                "impedit",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "illo": "exercitationem",
                            "laborum": "illum",
                            "fugit": "maxime",
                        },
                    },
                    PrerequisiteStepIds: []string{
                        "repellat",
                        "nostrum",
                        "illum",
                    },
                    PrestoJob: &shared.PrestoJob{
                        ClientTags: []string{
                            "commodi",
                            "esse",
                            "explicabo",
                            "consectetur",
                        },
                        ContinueOnFailure: sdk.Bool(false),
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "optio": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                                "maiores": shared.LoggingConfigDriverLogLevelsEnumDebug,
                                "culpa": shared.LoggingConfigDriverLogLevelsEnumOff,
                                "aspernatur": shared.LoggingConfigDriverLogLevelsEnumOff,
                            },
                        },
                        OutputFormat: sdk.String("neque"),
                        Properties: map[string]string{
                            "suscipit": "harum",
                            "ducimus": "doloremque",
                            "perferendis": "laudantium",
                        },
                        QueryFileURI: sdk.String("iusto"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "molestiae",
                                "quis",
                                "iure",
                            },
                        },
                    },
                    PysparkJob: &shared.PySparkJob{
                        ArchiveUris: []string{
                            "quaerat",
                        },
                        Args: []string{
                            "sapiente",
                        },
                        FileUris: []string{
                            "est",
                            "iure",
                        },
                        JarFileUris: []string{
                            "provident",
                            "laudantium",
                            "nam",
                            "nemo",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "ipsam": shared.LoggingConfigDriverLogLevelsEnumTrace,
                                "tempora": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                            },
                        },
                        MainPythonFileURI: sdk.String("corrupti"),
                        Properties: map[string]string{
                            "fugiat": "numquam",
                        },
                        PythonFileUris: []string{
                            "cum",
                        },
                    },
                    Scheduling: &shared.JobScheduling{
                        MaxFailuresPerHour: sdk.Int(751298),
                        MaxFailuresTotal: sdk.Int(628314),
                    },
                    SparkJob: &shared.SparkJob{
                        ArchiveUris: []string{
                            "impedit",
                            "nisi",
                            "cumque",
                            "soluta",
                        },
                        Args: []string{
                            "laboriosam",
                            "nam",
                            "enim",
                            "maiores",
                        },
                        FileUris: []string{
                            "necessitatibus",
                        },
                        JarFileUris: []string{
                            "cupiditate",
                            "voluptatem",
                            "provident",
                            "adipisci",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "magnam": shared.LoggingConfigDriverLogLevelsEnumOff,
                            },
                        },
                        MainClass: sdk.String("omnis"),
                        MainJarFileURI: sdk.String("explicabo"),
                        Properties: map[string]string{
                            "cum": "id",
                            "possimus": "fugit",
                        },
                    },
                    SparkRJob: &shared.SparkRJob{
                        ArchiveUris: []string{
                            "nostrum",
                            "sequi",
                        },
                        Args: []string{
                            "quasi",
                            "error",
                            "nobis",
                        },
                        FileUris: []string{
                            "voluptate",
                            "eius",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "aperiam": shared.LoggingConfigDriverLogLevelsEnumOff,
                                "possimus": shared.LoggingConfigDriverLogLevelsEnumAll,
                                "voluptatem": shared.LoggingConfigDriverLogLevelsEnumOff,
                            },
                        },
                        MainRFileURI: sdk.String("corporis"),
                        Properties: map[string]string{
                            "eos": "aliquam",
                            "blanditiis": "hic",
                        },
                    },
                    SparkSQLJob: &shared.SparkSQLJob{
                        JarFileUris: []string{
                            "asperiores",
                            "autem",
                            "nesciunt",
                            "cupiditate",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "provident": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                                "ipsa": shared.LoggingConfigDriverLogLevelsEnumWarn,
                                "nam": shared.LoggingConfigDriverLogLevelsEnumFatal,
                            },
                        },
                        Properties: map[string]string{
                            "fuga": "tempore",
                            "commodi": "fugit",
                            "suscipit": "voluptate",
                            "nisi": "aliquid",
                        },
                        QueryFileURI: sdk.String("provident"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "accusamus",
                                "ab",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "quisquam": "eaque",
                            "alias": "qui",
                            "consequuntur": "vitae",
                            "quidem": "sequi",
                        },
                    },
                    StepID: sdk.String("amet"),
                    TrinoJob: &shared.TrinoJob{
                        ClientTags: []string{
                            "illum",
                            "praesentium",
                        },
                        ContinueOnFailure: sdk.Bool(false),
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "similique": shared.LoggingConfigDriverLogLevelsEnumError,
                                "tempore": shared.LoggingConfigDriverLogLevelsEnumTrace,
                                "debitis": shared.LoggingConfigDriverLogLevelsEnumError,
                            },
                        },
                        OutputFormat: sdk.String("asperiores"),
                        Properties: map[string]string{
                            "id": "atque",
                            "quibusdam": "sit",
                            "quo": "veniam",
                            "aliquam": "provident",
                        },
                        QueryFileURI: sdk.String("vero"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "doloremque",
                                "ipsum",
                                "alias",
                                "doloremque",
                            },
                        },
                    },
                },
            },
            Labels: map[string]string{
                "perspiciatis": "quam",
                "atque": "officia",
            },
            Parameters: []shared.TemplateParameter{
                shared.TemplateParameter{
                    Description: sdk.String("architecto"),
                    Fields: []string{
                        "laborum",
                        "veritatis",
                        "quod",
                        "a",
                    },
                    Name: sdk.String("Carol Johns"),
                    Validation: &shared.ParameterValidation{
                        Regex: &shared.RegexValidation{
                            Regexes: []string{
                                "voluptate",
                                "quam",
                                "quod",
                                "vitae",
                            },
                        },
                        Values: &shared.ValueValidation{
                            Values: []string{
                                "reiciendis",
                                "quod",
                                "voluptate",
                                "inventore",
                            },
                        },
                    },
                },
                shared.TemplateParameter{
                    Description: sdk.String("facere"),
                    Fields: []string{
                        "fuga",
                        "ab",
                        "ex",
                        "consectetur",
                    },
                    Name: sdk.String("Aaron O'Kon"),
                    Validation: &shared.ParameterValidation{
                        Regex: &shared.RegexValidation{
                            Regexes: []string{
                                "perferendis",
                                "laborum",
                                "omnis",
                            },
                        },
                        Values: &shared.ValueValidation{
                            Values: []string{
                                "tenetur",
                                "sapiente",
                            },
                        },
                    },
                },
            },
            Placement: &shared.WorkflowTemplatePlacementInput{
                ClusterSelector: &shared.ClusterSelector{
                    ClusterLabels: map[string]string{
                        "adipisci": "non",
                    },
                    Zone: sdk.String("optio"),
                },
                ManagedCluster: &shared.ManagedClusterInput{
                    ClusterName: sdk.String("illum"),
                    Config: &shared.ClusterConfigInput{
                        AutoscalingConfig: &shared.AutoscalingConfig{
                            PolicyURI: sdk.String("at"),
                        },
                        AuxiliaryNodeGroups: []shared.AuxiliaryNodeGroupInput{
                            shared.AuxiliaryNodeGroupInput{
                                NodeGroup: &shared.NodeGroupInput{
                                    Labels: map[string]string{
                                        "ipsam": "esse",
                                        "laborum": "perspiciatis",
                                        "voluptates": "eum",
                                    },
                                    Name: sdk.String("Billie Kuhic"),
                                    NodeGroupConfig: &shared.InstanceGroupConfigInput{
                                        Accelerators: []shared.AcceleratorConfig{
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(648497),
                                                AcceleratorTypeURI: sdk.String("quidem"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(126512),
                                                AcceleratorTypeURI: sdk.String("et"),
                                            },
                                        },
                                        DiskConfig: &shared.DiskConfig{
                                            BootDiskSizeGb: sdk.Int(860027),
                                            BootDiskType: sdk.String("magni"),
                                            LocalSsdInterface: sdk.String("natus"),
                                            NumLocalSsds: sdk.Int(851199),
                                        },
                                        ImageURI: sdk.String("a"),
                                        MachineTypeURI: sdk.String("impedit"),
                                        MinCPUPlatform: sdk.String("unde"),
                                        NumInstances: sdk.Int(281454),
                                        Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumSpot.ToPointer(),
                                    },
                                    Roles: []shared.NodeGroupRolesEnum{
                                        shared.NodeGroupRolesEnumDriver,
                                        shared.NodeGroupRolesEnumDriver,
                                    },
                                },
                                NodeGroupID: sdk.String("quisquam"),
                            },
                            shared.AuxiliaryNodeGroupInput{
                                NodeGroup: &shared.NodeGroupInput{
                                    Labels: map[string]string{
                                        "dignissimos": "iste",
                                        "provident": "dolor",
                                        "sint": "aperiam",
                                        "eaque": "eum",
                                    },
                                    Name: sdk.String("Maggie Jones"),
                                    NodeGroupConfig: &shared.InstanceGroupConfigInput{
                                        Accelerators: []shared.AcceleratorConfig{
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(41306),
                                                AcceleratorTypeURI: sdk.String("voluptatem"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(4747),
                                                AcceleratorTypeURI: sdk.String("velit"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(356805),
                                                AcceleratorTypeURI: sdk.String("quis"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(242532),
                                                AcceleratorTypeURI: sdk.String("ratione"),
                                            },
                                        },
                                        DiskConfig: &shared.DiskConfig{
                                            BootDiskSizeGb: sdk.Int(555386),
                                            BootDiskType: sdk.String("maxime"),
                                            LocalSsdInterface: sdk.String("recusandae"),
                                            NumLocalSsds: sdk.Int(767466),
                                        },
                                        ImageURI: sdk.String("doloremque"),
                                        MachineTypeURI: sdk.String("totam"),
                                        MinCPUPlatform: sdk.String("iure"),
                                        NumInstances: sdk.Int(982927),
                                        Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumPreemptible.ToPointer(),
                                    },
                                    Roles: []shared.NodeGroupRolesEnum{
                                        shared.NodeGroupRolesEnumRoleUnspecified,
                                    },
                                },
                                NodeGroupID: sdk.String("necessitatibus"),
                            },
                            shared.AuxiliaryNodeGroupInput{
                                NodeGroup: &shared.NodeGroupInput{
                                    Labels: map[string]string{
                                        "dicta": "ipsam",
                                        "consequuntur": "cumque",
                                        "quidem": "non",
                                    },
                                    Name: sdk.String("Ms. Joan Mann"),
                                    NodeGroupConfig: &shared.InstanceGroupConfigInput{
                                        Accelerators: []shared.AcceleratorConfig{
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(562065),
                                                AcceleratorTypeURI: sdk.String("necessitatibus"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(218783),
                                                AcceleratorTypeURI: sdk.String("impedit"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(550799),
                                                AcceleratorTypeURI: sdk.String("illum"),
                                            },
                                        },
                                        DiskConfig: &shared.DiskConfig{
                                            BootDiskSizeGb: sdk.Int(717853),
                                            BootDiskType: sdk.String("voluptatem"),
                                            LocalSsdInterface: sdk.String("non"),
                                            NumLocalSsds: sdk.Int(310195),
                                        },
                                        ImageURI: sdk.String("consequatur"),
                                        MachineTypeURI: sdk.String("laudantium"),
                                        MinCPUPlatform: sdk.String("repellendus"),
                                        NumInstances: sdk.Int(415953),
                                        Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumSpot.ToPointer(),
                                    },
                                    Roles: []shared.NodeGroupRolesEnum{
                                        shared.NodeGroupRolesEnumRoleUnspecified,
                                    },
                                },
                                NodeGroupID: sdk.String("quaerat"),
                            },
                            shared.AuxiliaryNodeGroupInput{
                                NodeGroup: &shared.NodeGroupInput{
                                    Labels: map[string]string{
                                        "tenetur": "assumenda",
                                        "dolore": "enim",
                                        "ullam": "perspiciatis",
                                        "alias": "ex",
                                    },
                                    Name: sdk.String("Keith Crist"),
                                    NodeGroupConfig: &shared.InstanceGroupConfigInput{
                                        Accelerators: []shared.AcceleratorConfig{
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(255264),
                                                AcceleratorTypeURI: sdk.String("rem"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(884622),
                                                AcceleratorTypeURI: sdk.String("omnis"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(206451),
                                                AcceleratorTypeURI: sdk.String("corporis"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(797527),
                                                AcceleratorTypeURI: sdk.String("dolores"),
                                            },
                                        },
                                        DiskConfig: &shared.DiskConfig{
                                            BootDiskSizeGb: sdk.Int(808050),
                                            BootDiskType: sdk.String("excepturi"),
                                            LocalSsdInterface: sdk.String("recusandae"),
                                            NumLocalSsds: sdk.Int(551778),
                                        },
                                        ImageURI: sdk.String("dicta"),
                                        MachineTypeURI: sdk.String("sapiente"),
                                        MinCPUPlatform: sdk.String("ipsum"),
                                        NumInstances: sdk.Int(9358),
                                        Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumPreemptible.ToPointer(),
                                    },
                                    Roles: []shared.NodeGroupRolesEnum{
                                        shared.NodeGroupRolesEnumRoleUnspecified,
                                        shared.NodeGroupRolesEnumDriver,
                                        shared.NodeGroupRolesEnumRoleUnspecified,
                                        shared.NodeGroupRolesEnumRoleUnspecified,
                                    },
                                },
                                NodeGroupID: sdk.String("magni"),
                            },
                        },
                        ConfigBucket: sdk.String("aperiam"),
                        DataprocMetricConfig: &shared.DataprocMetricConfig{
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    MetricOverrides: []string{
                                        "iusto",
                                        "magni",
                                        "beatae",
                                        "aliquid",
                                    },
                                    MetricSource: shared.MetricMetricSourceEnumHdfs.ToPointer(),
                                },
                            },
                        },
                        EncryptionConfig: &shared.EncryptionConfig{
                            GcePdKmsKeyName: sdk.String("voluptate"),
                            KmsKey: sdk.String("vel"),
                        },
                        EndpointConfig: &shared.EndpointConfigInput{
                            EnableHTTPPortAccess: sdk.Bool(false),
                        },
                        GceClusterConfig: &shared.GceClusterConfig{
                            ConfidentialInstanceConfig: &shared.ConfidentialInstanceConfig{
                                EnableConfidentialCompute: sdk.Bool(false),
                            },
                            InternalIPOnly: sdk.Bool(false),
                            Metadata: map[string]string{
                                "sit": "vel",
                                "laboriosam": "quaerat",
                            },
                            NetworkURI: sdk.String("quasi"),
                            NodeGroupAffinity: &shared.NodeGroupAffinity{
                                NodeGroupURI: sdk.String("rem"),
                            },
                            PrivateIpv6GoogleAccess: shared.GceClusterConfigPrivateIpv6GoogleAccessEnumInheritFromSubnetwork.ToPointer(),
                            ReservationAffinity: &shared.ReservationAffinity{
                                ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumTypeUnspecified.ToPointer(),
                                Key: sdk.String("assumenda"),
                                Values: []string{
                                    "facere",
                                    "sed",
                                    "inventore",
                                },
                            },
                            ServiceAccount: sdk.String("voluptatibus"),
                            ServiceAccountScopes: []string{
                                "deserunt",
                                "repellendus",
                                "consequatur",
                            },
                            ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                                EnableIntegrityMonitoring: sdk.Bool(false),
                                EnableSecureBoot: sdk.Bool(false),
                                EnableVtpm: sdk.Bool(false),
                            },
                            SubnetworkURI: sdk.String("adipisci"),
                            Tags: []string{
                                "optio",
                            },
                            ZoneURI: sdk.String("tempora"),
                        },
                        GkeClusterConfig: &shared.GkeClusterConfig{
                            GkeClusterTarget: sdk.String("debitis"),
                            NamespacedGkeDeploymentTarget: &shared.NamespacedGkeDeploymentTarget{
                                ClusterNamespace: sdk.String("cumque"),
                                TargetGkeCluster: sdk.String("maxime"),
                            },
                            NodePoolTarget: []shared.GkeNodePoolTarget{
                                shared.GkeNodePoolTarget{
                                    NodePool: sdk.String("beatae"),
                                    NodePoolConfig: &shared.GkeNodePoolConfig{
                                        Autoscaling: &shared.GkeNodePoolAutoscalingConfig{
                                            MaxNodeCount: sdk.Int(662068),
                                            MinNodeCount: sdk.Int(9060),
                                        },
                                        Config: &shared.GkeNodeConfig{
                                            Accelerators: []shared.GkeNodePoolAcceleratorConfig{
                                                shared.GkeNodePoolAcceleratorConfig{
                                                    AcceleratorCount: sdk.String("ratione"),
                                                    AcceleratorType: sdk.String("iure"),
                                                    GpuPartitionSize: sdk.String("tempora"),
                                                },
                                                shared.GkeNodePoolAcceleratorConfig{
                                                    AcceleratorCount: sdk.String("eos"),
                                                    AcceleratorType: sdk.String("natus"),
                                                    GpuPartitionSize: sdk.String("voluptatem"),
                                                },
                                                shared.GkeNodePoolAcceleratorConfig{
                                                    AcceleratorCount: sdk.String("suscipit"),
                                                    AcceleratorType: sdk.String("laudantium"),
                                                    GpuPartitionSize: sdk.String("facilis"),
                                                },
                                            },
                                            BootDiskKmsKey: sdk.String("laudantium"),
                                            LocalSsdCount: sdk.Int(353075),
                                            MachineType: sdk.String("aut"),
                                            MinCPUPlatform: sdk.String("quia"),
                                            Preemptible: sdk.Bool(false),
                                            Spot: sdk.Bool(false),
                                        },
                                        Locations: []string{
                                            "quaerat",
                                            "corporis",
                                            "accusamus",
                                        },
                                    },
                                    Roles: []shared.GkeNodePoolTargetRolesEnum{
                                        shared.GkeNodePoolTargetRolesEnumSparkExecutor,
                                        shared.GkeNodePoolTargetRolesEnumController,
                                    },
                                },
                            },
                        },
                        InitializationActions: []shared.NodeInitializationAction{
                            shared.NodeInitializationAction{
                                ExecutableFile: sdk.String("quidem"),
                                ExecutionTimeout: sdk.String("quisquam"),
                            },
                        },
                        LifecycleConfig: &shared.LifecycleConfigInput{
                            AutoDeleteTime: sdk.String("praesentium"),
                            AutoDeleteTTL: sdk.String("tempora"),
                            IdleDeleteTTL: sdk.String("ipsam"),
                        },
                        MasterConfig: &shared.InstanceGroupConfigInput{
                            Accelerators: []shared.AcceleratorConfig{
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(196497),
                                    AcceleratorTypeURI: sdk.String("magni"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(29881),
                                    AcceleratorTypeURI: sdk.String("est"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(226181),
                                    AcceleratorTypeURI: sdk.String("veritatis"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(621810),
                                    AcceleratorTypeURI: sdk.String("voluptatibus"),
                                },
                            },
                            DiskConfig: &shared.DiskConfig{
                                BootDiskSizeGb: sdk.Int(258140),
                                BootDiskType: sdk.String("rerum"),
                                LocalSsdInterface: sdk.String("dolorum"),
                                NumLocalSsds: sdk.Int(841816),
                            },
                            ImageURI: sdk.String("earum"),
                            MachineTypeURI: sdk.String("excepturi"),
                            MinCPUPlatform: sdk.String("numquam"),
                            NumInstances: sdk.Int(476801),
                            Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumSpot.ToPointer(),
                        },
                        MetastoreConfig: &shared.MetastoreConfig{
                            DataprocMetastoreService: sdk.String("error"),
                        },
                        SecondaryWorkerConfig: &shared.InstanceGroupConfigInput{
                            Accelerators: []shared.AcceleratorConfig{
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(528742),
                                    AcceleratorTypeURI: sdk.String("aliquid"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(469384),
                                    AcceleratorTypeURI: sdk.String("facilis"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(759451),
                                    AcceleratorTypeURI: sdk.String("incidunt"),
                                },
                            },
                            DiskConfig: &shared.DiskConfig{
                                BootDiskSizeGb: sdk.Int(178201),
                                BootDiskType: sdk.String("magnam"),
                                LocalSsdInterface: sdk.String("dolores"),
                                NumLocalSsds: sdk.Int(400492),
                            },
                            ImageURI: sdk.String("eum"),
                            MachineTypeURI: sdk.String("vel"),
                            MinCPUPlatform: sdk.String("ad"),
                            NumInstances: sdk.Int(552287),
                            Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumPreemptibilityUnspecified.ToPointer(),
                        },
                        SecurityConfig: &shared.SecurityConfig{
                            IdentityConfig: &shared.IdentityConfig{
                                UserServiceAccountMapping: map[string]string{
                                    "quibusdam": "fugiat",
                                    "impedit": "culpa",
                                },
                            },
                            KerberosConfig: &shared.KerberosConfig{
                                CrossRealmTrustAdminServer: sdk.String("atque"),
                                CrossRealmTrustKdc: sdk.String("voluptates"),
                                CrossRealmTrustRealm: sdk.String("maiores"),
                                CrossRealmTrustSharedPasswordURI: sdk.String("nemo"),
                                EnableKerberos: sdk.Bool(false),
                                KdcDbKeyURI: sdk.String("illo"),
                                KeyPasswordURI: sdk.String("doloribus"),
                                KeystorePasswordURI: sdk.String("cumque"),
                                KeystoreURI: sdk.String("expedita"),
                                KmsKeyURI: sdk.String("modi"),
                                Realm: sdk.String("cumque"),
                                RootPrincipalPasswordURI: sdk.String("ipsam"),
                                TgtLifetimeHours: sdk.Int(578081),
                                TruststorePasswordURI: sdk.String("ipsum"),
                                TruststoreURI: sdk.String("accusamus"),
                            },
                        },
                        SoftwareConfig: &shared.SoftwareConfig{
                            ImageVersion: sdk.String("quisquam"),
                            OptionalComponents: []shared.SoftwareConfigOptionalComponentsEnum{
                                shared.SoftwareConfigOptionalComponentsEnumDocker,
                            },
                            Properties: map[string]string{
                                "temporibus": "mollitia",
                                "id": "quibusdam",
                                "ipsa": "accusamus",
                                "placeat": "quam",
                            },
                        },
                        TempBucket: sdk.String("similique"),
                        WorkerConfig: &shared.InstanceGroupConfigInput{
                            Accelerators: []shared.AcceleratorConfig{
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(904983),
                                    AcceleratorTypeURI: sdk.String("facere"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(748723),
                                    AcceleratorTypeURI: sdk.String("at"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(561121),
                                    AcceleratorTypeURI: sdk.String("aut"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(836548),
                                    AcceleratorTypeURI: sdk.String("tenetur"),
                                },
                            },
                            DiskConfig: &shared.DiskConfig{
                                BootDiskSizeGb: sdk.Int(278050),
                                BootDiskType: sdk.String("numquam"),
                                LocalSsdInterface: sdk.String("corrupti"),
                                NumLocalSsds: sdk.Int(630237),
                            },
                            ImageURI: sdk.String("dolore"),
                            MachineTypeURI: sdk.String("esse"),
                            MinCPUPlatform: sdk.String("reiciendis"),
                            NumInstances: sdk.Int(611792),
                            Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumPreemptibilityUnspecified.ToPointer(),
                        },
                    },
                    Labels: map[string]string{
                        "aut": "impedit",
                        "minima": "quos",
                        "blanditiis": "quas",
                    },
                },
            },
            Version: sdk.Int(28362),
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("vero"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("facilis"),
        Parent: "maiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("a"),
    }, operations.DataprocProjectsRegionsWorkflowTemplatesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkflowTemplate != nil {
        // handle response
    }
}
```

## DataprocProjectsRegionsWorkflowTemplatesDelete

Deletes a workflow template. It does not cancel in-progress workflows.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsWorkflowTemplatesDelete(ctx, operations.DataprocProjectsRegionsWorkflowTemplatesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("omnis"),
        Name: "Ms. Lonnie Wolf",
        OauthToken: sdk.String("similique"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("facere"),
        Version: sdk.Int64(208639),
    }, operations.DataprocProjectsRegionsWorkflowTemplatesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DataprocProjectsRegionsWorkflowTemplatesGet

Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsWorkflowTemplatesGet(ctx, operations.DataprocProjectsRegionsWorkflowTemplatesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("porro"),
        Key: sdk.String("fugiat"),
        Name: "Jeffrey Wisoky",
        OauthToken: sdk.String("eos"),
        PageSize: sdk.Int64(555663),
        PageToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("iusto"),
        Version: sdk.Int64(854800),
    }, operations.DataprocProjectsRegionsWorkflowTemplatesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkflowTemplate != nil {
        // handle response
    }
}
```

## DataprocProjectsRegionsWorkflowTemplatesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicy(ctx, operations.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GetIamPolicyRequest: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(435713),
            },
        },
        AccessToken: sdk.String("laudantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        Resource: "praesentium",
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("animi"),
    }, operations.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## DataprocProjectsRegionsWorkflowTemplatesInstantiate

Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsWorkflowTemplatesInstantiate(ctx, operations.DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InstantiateWorkflowTemplateRequest: &shared.InstantiateWorkflowTemplateRequest{
            Parameters: map[string]string{
                "eum": "nostrum",
            },
            RequestID: sdk.String("eveniet"),
            Version: sdk.Int(389630),
        },
        AccessToken: sdk.String("ratione"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("illum"),
        Key: sdk.String("reiciendis"),
        Name: "Todd Altenwerth",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("laudantium"),
    }, operations.DataprocProjectsRegionsWorkflowTemplatesInstantiateSecurity{
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

## DataprocProjectsRegionsWorkflowTemplatesInstantiateInline

Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsWorkflowTemplatesInstantiateInline(ctx, operations.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        WorkflowTemplateInput: &shared.WorkflowTemplateInput{
            DagTimeout: sdk.String("omnis"),
            ID: sdk.String("923b7e13-584f-47ae-92c6-891f82ce1157"),
            Jobs: []shared.OrderedJob{
                shared.OrderedJob{
                    HadoopJob: &shared.HadoopJob{
                        ArchiveUris: []string{
                            "sed",
                            "dolorem",
                        },
                        Args: []string{
                            "exercitationem",
                        },
                        FileUris: []string{
                            "voluptate",
                        },
                        JarFileUris: []string{
                            "pariatur",
                            "minus",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "fuga": shared.LoggingConfigDriverLogLevelsEnumInfo,
                                "cupiditate": shared.LoggingConfigDriverLogLevelsEnumFatal,
                                "doloribus": shared.LoggingConfigDriverLogLevelsEnumWarn,
                                "quam": shared.LoggingConfigDriverLogLevelsEnumDebug,
                            },
                        },
                        MainClass: sdk.String("voluptates"),
                        MainJarFileURI: sdk.String("sequi"),
                        Properties: map[string]string{
                            "commodi": "vel",
                            "rem": "aliquid",
                        },
                    },
                    HiveJob: &shared.HiveJob{
                        ContinueOnFailure: sdk.Bool(false),
                        JarFileUris: []string{
                            "perspiciatis",
                        },
                        Properties: map[string]string{
                            "itaque": "unde",
                        },
                        QueryFileURI: sdk.String("cumque"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "repellendus",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "minus": "minima",
                            "a": "beatae",
                            "vitae": "veritatis",
                            "facere": "earum",
                        },
                    },
                    Labels: map[string]string{
                        "dicta": "voluptatem",
                        "odit": "aliquid",
                        "pariatur": "enim",
                    },
                    PigJob: &shared.PigJob{
                        ContinueOnFailure: sdk.Bool(false),
                        JarFileUris: []string{
                            "architecto",
                            "est",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "facere": shared.LoggingConfigDriverLogLevelsEnumAll,
                                "omnis": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                            },
                        },
                        Properties: map[string]string{
                            "officiis": "expedita",
                            "quia": "vitae",
                            "odio": "quas",
                            "ipsa": "distinctio",
                        },
                        QueryFileURI: sdk.String("placeat"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "eligendi",
                                "sit",
                                "possimus",
                                "distinctio",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "assumenda": "illum",
                            "soluta": "magnam",
                            "laudantium": "tempora",
                        },
                    },
                    PrerequisiteStepIds: []string{
                        "doloremque",
                        "corrupti",
                    },
                    PrestoJob: &shared.PrestoJob{
                        ClientTags: []string{
                            "facilis",
                            "aliquam",
                            "repudiandae",
                            "amet",
                        },
                        ContinueOnFailure: sdk.Bool(false),
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "ab": shared.LoggingConfigDriverLogLevelsEnumFatal,
                                "eum": shared.LoggingConfigDriverLogLevelsEnumError,
                                "placeat": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                            },
                        },
                        OutputFormat: sdk.String("ad"),
                        Properties: map[string]string{
                            "porro": "labore",
                            "impedit": "ut",
                            "earum": "ullam",
                        },
                        QueryFileURI: sdk.String("numquam"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "cupiditate",
                                "occaecati",
                            },
                        },
                    },
                    PysparkJob: &shared.PySparkJob{
                        ArchiveUris: []string{
                            "fuga",
                            "consectetur",
                            "modi",
                            "aspernatur",
                        },
                        Args: []string{
                            "suscipit",
                        },
                        FileUris: []string{
                            "eveniet",
                        },
                        JarFileUris: []string{
                            "nobis",
                            "qui",
                            "accusantium",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "impedit": shared.LoggingConfigDriverLogLevelsEnumOff,
                            },
                        },
                        MainPythonFileURI: sdk.String("voluptate"),
                        Properties: map[string]string{
                            "est": "et",
                            "expedita": "quibusdam",
                            "quos": "maiores",
                        },
                        PythonFileUris: []string{
                            "in",
                            "culpa",
                            "doloremque",
                        },
                    },
                    Scheduling: &shared.JobScheduling{
                        MaxFailuresPerHour: sdk.Int(681336),
                        MaxFailuresTotal: sdk.Int(117546),
                    },
                    SparkJob: &shared.SparkJob{
                        ArchiveUris: []string{
                            "suscipit",
                        },
                        Args: []string{
                            "officiis",
                            "dignissimos",
                            "fugit",
                            "ratione",
                        },
                        FileUris: []string{
                            "quaerat",
                            "aut",
                            "natus",
                            "esse",
                        },
                        JarFileUris: []string{
                            "deserunt",
                            "ratione",
                            "ipsa",
                            "debitis",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "deserunt": shared.LoggingConfigDriverLogLevelsEnumOff,
                                "ducimus": shared.LoggingConfigDriverLogLevelsEnumAll,
                                "ipsam": shared.LoggingConfigDriverLogLevelsEnumError,
                            },
                        },
                        MainClass: sdk.String("quia"),
                        MainJarFileURI: sdk.String("omnis"),
                        Properties: map[string]string{
                            "qui": "explicabo",
                        },
                    },
                    SparkRJob: &shared.SparkRJob{
                        ArchiveUris: []string{
                            "amet",
                        },
                        Args: []string{
                            "fugiat",
                        },
                        FileUris: []string{
                            "velit",
                            "hic",
                            "ullam",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "itaque": shared.LoggingConfigDriverLogLevelsEnumError,
                                "iusto": shared.LoggingConfigDriverLogLevelsEnumInfo,
                                "provident": shared.LoggingConfigDriverLogLevelsEnumWarn,
                            },
                        },
                        MainRFileURI: sdk.String("assumenda"),
                        Properties: map[string]string{
                            "odit": "vero",
                        },
                    },
                    SparkSQLJob: &shared.SparkSQLJob{
                        JarFileUris: []string{
                            "optio",
                            "quasi",
                            "repellat",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "magnam": shared.LoggingConfigDriverLogLevelsEnumWarn,
                                "amet": shared.LoggingConfigDriverLogLevelsEnumInfo,
                                "sunt": shared.LoggingConfigDriverLogLevelsEnumDebug,
                            },
                        },
                        Properties: map[string]string{
                            "illum": "porro",
                            "quaerat": "magni",
                            "cumque": "quos",
                            "in": "commodi",
                        },
                        QueryFileURI: sdk.String("maxime"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "minus",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "possimus": "delectus",
                        },
                    },
                    StepID: sdk.String("harum"),
                    TrinoJob: &shared.TrinoJob{
                        ClientTags: []string{
                            "eligendi",
                            "hic",
                        },
                        ContinueOnFailure: sdk.Bool(false),
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "illo": shared.LoggingConfigDriverLogLevelsEnumError,
                                "esse": shared.LoggingConfigDriverLogLevelsEnumDebug,
                                "explicabo": shared.LoggingConfigDriverLogLevelsEnumAll,
                                "alias": shared.LoggingConfigDriverLogLevelsEnumOff,
                            },
                        },
                        OutputFormat: sdk.String("quos"),
                        Properties: map[string]string{
                            "vitae": "maiores",
                            "nam": "architecto",
                        },
                        QueryFileURI: sdk.String("rerum"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "eos",
                                "dolorem",
                                "hic",
                                "repellendus",
                            },
                        },
                    },
                },
            },
            Labels: map[string]string{
                "ab": "magnam",
                "pariatur": "expedita",
                "autem": "tempore",
            },
            Parameters: []shared.TemplateParameter{
                shared.TemplateParameter{
                    Description: sdk.String("nostrum"),
                    Fields: []string{
                        "voluptas",
                        "laudantium",
                        "corporis",
                    },
                    Name: sdk.String("Luther Leuschke"),
                    Validation: &shared.ParameterValidation{
                        Regex: &shared.RegexValidation{
                            Regexes: []string{
                                "laborum",
                            },
                        },
                        Values: &shared.ValueValidation{
                            Values: []string{
                                "eos",
                                "voluptatem",
                                "temporibus",
                                "id",
                            },
                        },
                    },
                },
                shared.TemplateParameter{
                    Description: sdk.String("quae"),
                    Fields: []string{
                        "a",
                        "minus",
                    },
                    Name: sdk.String("Antoinette Crist MD"),
                    Validation: &shared.ParameterValidation{
                        Regex: &shared.RegexValidation{
                            Regexes: []string{
                                "blanditiis",
                            },
                        },
                        Values: &shared.ValueValidation{
                            Values: []string{
                                "placeat",
                                "ullam",
                                "molestiae",
                            },
                        },
                    },
                },
                shared.TemplateParameter{
                    Description: sdk.String("itaque"),
                    Fields: []string{
                        "nemo",
                        "non",
                        "recusandae",
                    },
                    Name: sdk.String("Jeffrey Gutmann"),
                    Validation: &shared.ParameterValidation{
                        Regex: &shared.RegexValidation{
                            Regexes: []string{
                                "magni",
                                "consequuntur",
                                "consequuntur",
                                "eius",
                            },
                        },
                        Values: &shared.ValueValidation{
                            Values: []string{
                                "ipsam",
                                "vel",
                            },
                        },
                    },
                },
                shared.TemplateParameter{
                    Description: sdk.String("cupiditate"),
                    Fields: []string{
                        "nisi",
                        "explicabo",
                    },
                    Name: sdk.String("Ms. Sharon Kuhlman"),
                    Validation: &shared.ParameterValidation{
                        Regex: &shared.RegexValidation{
                            Regexes: []string{
                                "quam",
                                "dolorum",
                                "libero",
                                "ratione",
                            },
                        },
                        Values: &shared.ValueValidation{
                            Values: []string{
                                "optio",
                                "saepe",
                            },
                        },
                    },
                },
            },
            Placement: &shared.WorkflowTemplatePlacementInput{
                ClusterSelector: &shared.ClusterSelector{
                    ClusterLabels: map[string]string{
                        "accusantium": "sed",
                        "eos": "consequuntur",
                        "quis": "vitae",
                        "occaecati": "labore",
                    },
                    Zone: sdk.String("fugiat"),
                },
                ManagedCluster: &shared.ManagedClusterInput{
                    ClusterName: sdk.String("quidem"),
                    Config: &shared.ClusterConfigInput{
                        AutoscalingConfig: &shared.AutoscalingConfig{
                            PolicyURI: sdk.String("exercitationem"),
                        },
                        AuxiliaryNodeGroups: []shared.AuxiliaryNodeGroupInput{
                            shared.AuxiliaryNodeGroupInput{
                                NodeGroup: &shared.NodeGroupInput{
                                    Labels: map[string]string{
                                        "quasi": "quae",
                                        "similique": "possimus",
                                    },
                                    Name: sdk.String("Shane Jakubowski"),
                                    NodeGroupConfig: &shared.InstanceGroupConfigInput{
                                        Accelerators: []shared.AcceleratorConfig{
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(589031),
                                                AcceleratorTypeURI: sdk.String("alias"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(643644),
                                                AcceleratorTypeURI: sdk.String("fugit"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(421882),
                                                AcceleratorTypeURI: sdk.String("quo"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(477099),
                                                AcceleratorTypeURI: sdk.String("maxime"),
                                            },
                                        },
                                        DiskConfig: &shared.DiskConfig{
                                            BootDiskSizeGb: sdk.Int(814950),
                                            BootDiskType: sdk.String("impedit"),
                                            LocalSsdInterface: sdk.String("cupiditate"),
                                            NumLocalSsds: sdk.Int(536999),
                                        },
                                        ImageURI: sdk.String("quasi"),
                                        MachineTypeURI: sdk.String("maiores"),
                                        MinCPUPlatform: sdk.String("voluptatem"),
                                        NumInstances: sdk.Int(396184),
                                        Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumPreemptible.ToPointer(),
                                    },
                                    Roles: []shared.NodeGroupRolesEnum{
                                        shared.NodeGroupRolesEnumDriver,
                                        shared.NodeGroupRolesEnumRoleUnspecified,
                                        shared.NodeGroupRolesEnumDriver,
                                    },
                                },
                                NodeGroupID: sdk.String("ea"),
                            },
                            shared.AuxiliaryNodeGroupInput{
                                NodeGroup: &shared.NodeGroupInput{
                                    Labels: map[string]string{
                                        "nam": "amet",
                                        "adipisci": "minus",
                                        "hic": "similique",
                                    },
                                    Name: sdk.String("Glenn Green"),
                                    NodeGroupConfig: &shared.InstanceGroupConfigInput{
                                        Accelerators: []shared.AcceleratorConfig{
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(83164),
                                                AcceleratorTypeURI: sdk.String("nam"),
                                            },
                                        },
                                        DiskConfig: &shared.DiskConfig{
                                            BootDiskSizeGb: sdk.Int(974775),
                                            BootDiskType: sdk.String("magnam"),
                                            LocalSsdInterface: sdk.String("aperiam"),
                                            NumLocalSsds: sdk.Int(496744),
                                        },
                                        ImageURI: sdk.String("itaque"),
                                        MachineTypeURI: sdk.String("necessitatibus"),
                                        MinCPUPlatform: sdk.String("numquam"),
                                        NumInstances: sdk.Int(987362),
                                        Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumSpot.ToPointer(),
                                    },
                                    Roles: []shared.NodeGroupRolesEnum{
                                        shared.NodeGroupRolesEnumRoleUnspecified,
                                        shared.NodeGroupRolesEnumDriver,
                                        shared.NodeGroupRolesEnumRoleUnspecified,
                                        shared.NodeGroupRolesEnumRoleUnspecified,
                                    },
                                },
                                NodeGroupID: sdk.String("nobis"),
                            },
                        },
                        ConfigBucket: sdk.String("nihil"),
                        DataprocMetricConfig: &shared.DataprocMetricConfig{
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    MetricOverrides: []string{
                                        "vitae",
                                        "ullam",
                                        "nisi",
                                        "consequuntur",
                                    },
                                    MetricSource: shared.MetricMetricSourceEnumSpark.ToPointer(),
                                },
                                shared.Metric{
                                    MetricOverrides: []string{
                                        "excepturi",
                                    },
                                    MetricSource: shared.MetricMetricSourceEnumYarn.ToPointer(),
                                },
                                shared.Metric{
                                    MetricOverrides: []string{
                                        "perferendis",
                                        "quibusdam",
                                        "impedit",
                                    },
                                    MetricSource: shared.MetricMetricSourceEnumSpark.ToPointer(),
                                },
                            },
                        },
                        EncryptionConfig: &shared.EncryptionConfig{
                            GcePdKmsKeyName: sdk.String("nisi"),
                            KmsKey: sdk.String("nisi"),
                        },
                        EndpointConfig: &shared.EndpointConfigInput{
                            EnableHTTPPortAccess: sdk.Bool(false),
                        },
                        GceClusterConfig: &shared.GceClusterConfig{
                            ConfidentialInstanceConfig: &shared.ConfidentialInstanceConfig{
                                EnableConfidentialCompute: sdk.Bool(false),
                            },
                            InternalIPOnly: sdk.Bool(false),
                            Metadata: map[string]string{
                                "fugit": "dolore",
                            },
                            NetworkURI: sdk.String("maxime"),
                            NodeGroupAffinity: &shared.NodeGroupAffinity{
                                NodeGroupURI: sdk.String("maxime"),
                            },
                            PrivateIpv6GoogleAccess: shared.GceClusterConfigPrivateIpv6GoogleAccessEnumOutbound.ToPointer(),
                            ReservationAffinity: &shared.ReservationAffinity{
                                ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumTypeUnspecified.ToPointer(),
                                Key: sdk.String("ea"),
                                Values: []string{
                                    "totam",
                                    "optio",
                                    "est",
                                    "inventore",
                                },
                            },
                            ServiceAccount: sdk.String("consequuntur"),
                            ServiceAccountScopes: []string{
                                "sit",
                                "dolores",
                                "enim",
                                "aspernatur",
                            },
                            ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                                EnableIntegrityMonitoring: sdk.Bool(false),
                                EnableSecureBoot: sdk.Bool(false),
                                EnableVtpm: sdk.Bool(false),
                            },
                            SubnetworkURI: sdk.String("perspiciatis"),
                            Tags: []string{
                                "odio",
                            },
                            ZoneURI: sdk.String("alias"),
                        },
                        GkeClusterConfig: &shared.GkeClusterConfig{
                            GkeClusterTarget: sdk.String("quidem"),
                            NamespacedGkeDeploymentTarget: &shared.NamespacedGkeDeploymentTarget{
                                ClusterNamespace: sdk.String("deleniti"),
                                TargetGkeCluster: sdk.String("possimus"),
                            },
                            NodePoolTarget: []shared.GkeNodePoolTarget{
                                shared.GkeNodePoolTarget{
                                    NodePool: sdk.String("odio"),
                                    NodePoolConfig: &shared.GkeNodePoolConfig{
                                        Autoscaling: &shared.GkeNodePoolAutoscalingConfig{
                                            MaxNodeCount: sdk.Int(143253),
                                            MinNodeCount: sdk.Int(134267),
                                        },
                                        Config: &shared.GkeNodeConfig{
                                            Accelerators: []shared.GkeNodePoolAcceleratorConfig{
                                                shared.GkeNodePoolAcceleratorConfig{
                                                    AcceleratorCount: sdk.String("illum"),
                                                    AcceleratorType: sdk.String("praesentium"),
                                                    GpuPartitionSize: sdk.String("sint"),
                                                },
                                                shared.GkeNodePoolAcceleratorConfig{
                                                    AcceleratorCount: sdk.String("exercitationem"),
                                                    AcceleratorType: sdk.String("cum"),
                                                    GpuPartitionSize: sdk.String("voluptatum"),
                                                },
                                                shared.GkeNodePoolAcceleratorConfig{
                                                    AcceleratorCount: sdk.String("facilis"),
                                                    AcceleratorType: sdk.String("placeat"),
                                                    GpuPartitionSize: sdk.String("reiciendis"),
                                                },
                                                shared.GkeNodePoolAcceleratorConfig{
                                                    AcceleratorCount: sdk.String("dolores"),
                                                    AcceleratorType: sdk.String("dolore"),
                                                    GpuPartitionSize: sdk.String("pariatur"),
                                                },
                                            },
                                            BootDiskKmsKey: sdk.String("facilis"),
                                            LocalSsdCount: sdk.Int(585445),
                                            MachineType: sdk.String("nemo"),
                                            MinCPUPlatform: sdk.String("natus"),
                                            Preemptible: sdk.Bool(false),
                                            Spot: sdk.Bool(false),
                                        },
                                        Locations: []string{
                                            "provident",
                                            "amet",
                                        },
                                    },
                                    Roles: []shared.GkeNodePoolTargetRolesEnum{
                                        shared.GkeNodePoolTargetRolesEnumDefault,
                                    },
                                },
                                shared.GkeNodePoolTarget{
                                    NodePool: sdk.String("qui"),
                                    NodePoolConfig: &shared.GkeNodePoolConfig{
                                        Autoscaling: &shared.GkeNodePoolAutoscalingConfig{
                                            MaxNodeCount: sdk.Int(948297),
                                            MinNodeCount: sdk.Int(477352),
                                        },
                                        Config: &shared.GkeNodeConfig{
                                            Accelerators: []shared.GkeNodePoolAcceleratorConfig{
                                                shared.GkeNodePoolAcceleratorConfig{
                                                    AcceleratorCount: sdk.String("ullam"),
                                                    AcceleratorType: sdk.String("velit"),
                                                    GpuPartitionSize: sdk.String("adipisci"),
                                                },
                                                shared.GkeNodePoolAcceleratorConfig{
                                                    AcceleratorCount: sdk.String("cupiditate"),
                                                    AcceleratorType: sdk.String("occaecati"),
                                                    GpuPartitionSize: sdk.String("numquam"),
                                                },
                                            },
                                            BootDiskKmsKey: sdk.String("fugiat"),
                                            LocalSsdCount: sdk.Int(473386),
                                            MachineType: sdk.String("quas"),
                                            MinCPUPlatform: sdk.String("repellendus"),
                                            Preemptible: sdk.Bool(false),
                                            Spot: sdk.Bool(false),
                                        },
                                        Locations: []string{
                                            "amet",
                                            "distinctio",
                                            "vel",
                                            "necessitatibus",
                                        },
                                    },
                                    Roles: []shared.GkeNodePoolTargetRolesEnum{
                                        shared.GkeNodePoolTargetRolesEnumDefault,
                                        shared.GkeNodePoolTargetRolesEnumController,
                                        shared.GkeNodePoolTargetRolesEnumController,
                                    },
                                },
                            },
                        },
                        InitializationActions: []shared.NodeInitializationAction{
                            shared.NodeInitializationAction{
                                ExecutableFile: sdk.String("ullam"),
                                ExecutionTimeout: sdk.String("dolorum"),
                            },
                            shared.NodeInitializationAction{
                                ExecutableFile: sdk.String("soluta"),
                                ExecutionTimeout: sdk.String("cum"),
                            },
                            shared.NodeInitializationAction{
                                ExecutableFile: sdk.String("in"),
                                ExecutionTimeout: sdk.String("delectus"),
                            },
                            shared.NodeInitializationAction{
                                ExecutableFile: sdk.String("commodi"),
                                ExecutionTimeout: sdk.String("commodi"),
                            },
                        },
                        LifecycleConfig: &shared.LifecycleConfigInput{
                            AutoDeleteTime: sdk.String("fugit"),
                            AutoDeleteTTL: sdk.String("ullam"),
                            IdleDeleteTTL: sdk.String("ullam"),
                        },
                        MasterConfig: &shared.InstanceGroupConfigInput{
                            Accelerators: []shared.AcceleratorConfig{
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(667804),
                                    AcceleratorTypeURI: sdk.String("qui"),
                                },
                            },
                            DiskConfig: &shared.DiskConfig{
                                BootDiskSizeGb: sdk.Int(508773),
                                BootDiskType: sdk.String("adipisci"),
                                LocalSsdInterface: sdk.String("totam"),
                                NumLocalSsds: sdk.Int(183504),
                            },
                            ImageURI: sdk.String("deserunt"),
                            MachineTypeURI: sdk.String("eligendi"),
                            MinCPUPlatform: sdk.String("incidunt"),
                            NumInstances: sdk.Int(535883),
                            Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumPreemptibilityUnspecified.ToPointer(),
                        },
                        MetastoreConfig: &shared.MetastoreConfig{
                            DataprocMetastoreService: sdk.String("est"),
                        },
                        SecondaryWorkerConfig: &shared.InstanceGroupConfigInput{
                            Accelerators: []shared.AcceleratorConfig{
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(820462),
                                    AcceleratorTypeURI: sdk.String("odit"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(230774),
                                    AcceleratorTypeURI: sdk.String("inventore"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(325924),
                                    AcceleratorTypeURI: sdk.String("facilis"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(708360),
                                    AcceleratorTypeURI: sdk.String("deserunt"),
                                },
                            },
                            DiskConfig: &shared.DiskConfig{
                                BootDiskSizeGb: sdk.Int(392759),
                                BootDiskType: sdk.String("ipsam"),
                                LocalSsdInterface: sdk.String("voluptatem"),
                                NumLocalSsds: sdk.Int(76786),
                            },
                            ImageURI: sdk.String("iure"),
                            MachineTypeURI: sdk.String("incidunt"),
                            MinCPUPlatform: sdk.String("eveniet"),
                            NumInstances: sdk.Int(62224),
                            Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumNonPreemptible.ToPointer(),
                        },
                        SecurityConfig: &shared.SecurityConfig{
                            IdentityConfig: &shared.IdentityConfig{
                                UserServiceAccountMapping: map[string]string{
                                    "veniam": "quidem",
                                    "asperiores": "eum",
                                    "deserunt": "repudiandae",
                                    "nemo": "molestias",
                                },
                            },
                            KerberosConfig: &shared.KerberosConfig{
                                CrossRealmTrustAdminServer: sdk.String("architecto"),
                                CrossRealmTrustKdc: sdk.String("expedita"),
                                CrossRealmTrustRealm: sdk.String("quisquam"),
                                CrossRealmTrustSharedPasswordURI: sdk.String("praesentium"),
                                EnableKerberos: sdk.Bool(false),
                                KdcDbKeyURI: sdk.String("facilis"),
                                KeyPasswordURI: sdk.String("assumenda"),
                                KeystorePasswordURI: sdk.String("repudiandae"),
                                KeystoreURI: sdk.String("maiores"),
                                KmsKeyURI: sdk.String("ipsum"),
                                Realm: sdk.String("commodi"),
                                RootPrincipalPasswordURI: sdk.String("vitae"),
                                TgtLifetimeHours: sdk.Int(147297),
                                TruststorePasswordURI: sdk.String("nam"),
                                TruststoreURI: sdk.String("ex"),
                            },
                        },
                        SoftwareConfig: &shared.SoftwareConfig{
                            ImageVersion: sdk.String("neque"),
                            OptionalComponents: []shared.SoftwareConfigOptionalComponentsEnum{
                                shared.SoftwareConfigOptionalComponentsEnumDocker,
                                shared.SoftwareConfigOptionalComponentsEnumComponentUnspecified,
                                shared.SoftwareConfigOptionalComponentsEnumFlink,
                                shared.SoftwareConfigOptionalComponentsEnumZookeeper,
                            },
                            Properties: map[string]string{
                                "id": "atque",
                                "quaerat": "aperiam",
                                "dignissimos": "quam",
                                "modi": "fuga",
                            },
                        },
                        TempBucket: sdk.String("iure"),
                        WorkerConfig: &shared.InstanceGroupConfigInput{
                            Accelerators: []shared.AcceleratorConfig{
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(638219),
                                    AcceleratorTypeURI: sdk.String("sint"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(674077),
                                    AcceleratorTypeURI: sdk.String("dolor"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(322773),
                                    AcceleratorTypeURI: sdk.String("illum"),
                                },
                            },
                            DiskConfig: &shared.DiskConfig{
                                BootDiskSizeGb: sdk.Int(22966),
                                BootDiskType: sdk.String("molestias"),
                                LocalSsdInterface: sdk.String("voluptas"),
                                NumLocalSsds: sdk.Int(713246),
                            },
                            ImageURI: sdk.String("voluptas"),
                            MachineTypeURI: sdk.String("maiores"),
                            MinCPUPlatform: sdk.String("ea"),
                            NumInstances: sdk.Int(428199),
                            Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumSpot.ToPointer(),
                        },
                    },
                    Labels: map[string]string{
                        "reiciendis": "consequatur",
                        "sed": "accusantium",
                        "voluptates": "provident",
                        "maiores": "quaerat",
                    },
                },
            },
            Version: sdk.Int(256647),
        },
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("dolores"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("nihil"),
        Parent: "libero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        RequestID: sdk.String("excepturi"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineSecurity{
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

## DataprocProjectsRegionsWorkflowTemplatesList

Lists workflows that match the specified filter in the request.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsWorkflowTemplatesList(ctx, operations.DataprocProjectsRegionsWorkflowTemplatesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("repellendus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("est"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("similique"),
        PageSize: sdk.Int64(421273),
        PageToken: sdk.String("dicta"),
        Parent: "recusandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("odit"),
    }, operations.DataprocProjectsRegionsWorkflowTemplatesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkflowTemplatesResponse != nil {
        // handle response
    }
}
```

## DataprocProjectsRegionsWorkflowTemplatesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicy(ctx, operations.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("atque"),
                            Expression: sdk.String("explicabo"),
                            Location: sdk.String("ullam"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "pariatur",
                            "aut",
                            "similique",
                            "iste",
                        },
                        Role: sdk.String("eveniet"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("nam"),
                            Expression: sdk.String("animi"),
                            Location: sdk.String("labore"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "quam",
                            "nulla",
                            "dolorem",
                            "voluptates",
                        },
                        Role: sdk.String("a"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("perferendis"),
                            Expression: sdk.String("quaerat"),
                            Location: sdk.String("excepturi"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "voluptatem",
                            "illum",
                        },
                        Role: sdk.String("laboriosam"),
                    },
                },
                Etag: sdk.String("culpa"),
                Version: sdk.Int(116705),
            },
        },
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("quisquam"),
        Key: sdk.String("atque"),
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        Resource: "temporibus",
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("ad"),
    }, operations.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## DataprocProjectsRegionsWorkflowTemplatesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissions(ctx, operations.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "reiciendis",
                "repellendus",
            },
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("possimus"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("neque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        Resource: "animi",
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("voluptatum"),
    }, operations.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## DataprocProjectsRegionsWorkflowTemplatesUpdate

Updates (replaces) workflow template. The updated template must contain version that matches the current server version.

### Example Usage

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
    res, err := s.Projects.DataprocProjectsRegionsWorkflowTemplatesUpdate(ctx, operations.DataprocProjectsRegionsWorkflowTemplatesUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        WorkflowTemplateInput: &shared.WorkflowTemplateInput{
            DagTimeout: sdk.String("quisquam"),
            ID: sdk.String("1c19c95b-a998-4678-ba3f-696991af388c"),
            Jobs: []shared.OrderedJob{
                shared.OrderedJob{
                    HadoopJob: &shared.HadoopJob{
                        ArchiveUris: []string{
                            "consectetur",
                        },
                        Args: []string{
                            "vitae",
                            "numquam",
                        },
                        FileUris: []string{
                            "modi",
                            "quos",
                        },
                        JarFileUris: []string{
                            "voluptate",
                            "error",
                            "reprehenderit",
                            "reprehenderit",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "consequatur": shared.LoggingConfigDriverLogLevelsEnumOff,
                                "delectus": shared.LoggingConfigDriverLogLevelsEnumAll,
                                "delectus": shared.LoggingConfigDriverLogLevelsEnumDebug,
                            },
                        },
                        MainClass: sdk.String("ipsum"),
                        MainJarFileURI: sdk.String("laboriosam"),
                        Properties: map[string]string{
                            "sed": "voluptatum",
                        },
                    },
                    HiveJob: &shared.HiveJob{
                        ContinueOnFailure: sdk.Bool(false),
                        JarFileUris: []string{
                            "a",
                            "itaque",
                            "eveniet",
                            "repellat",
                        },
                        Properties: map[string]string{
                            "adipisci": "aliquam",
                            "illo": "veniam",
                            "sed": "necessitatibus",
                        },
                        QueryFileURI: sdk.String("possimus"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "itaque",
                                "explicabo",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "non": "delectus",
                            "incidunt": "quod",
                        },
                    },
                    Labels: map[string]string{
                        "ullam": "quam",
                    },
                    PigJob: &shared.PigJob{
                        ContinueOnFailure: sdk.Bool(false),
                        JarFileUris: []string{
                            "voluptates",
                            "officia",
                            "est",
                            "in",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "voluptate": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                            },
                        },
                        Properties: map[string]string{
                            "incidunt": "dolore",
                            "nemo": "est",
                            "quo": "maxime",
                            "delectus": "laboriosam",
                        },
                        QueryFileURI: sdk.String("laboriosam"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "fuga",
                                "officia",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "cupiditate": "soluta",
                            "tempore": "culpa",
                            "fugiat": "inventore",
                            "atque": "ad",
                        },
                    },
                    PrerequisiteStepIds: []string{
                        "voluptates",
                        "ut",
                        "nesciunt",
                        "ab",
                    },
                    PrestoJob: &shared.PrestoJob{
                        ClientTags: []string{
                            "suscipit",
                            "quidem",
                            "delectus",
                            "nemo",
                        },
                        ContinueOnFailure: sdk.Bool(false),
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "voluptatum": shared.LoggingConfigDriverLogLevelsEnumAll,
                                "atque": shared.LoggingConfigDriverLogLevelsEnumOff,
                                "expedita": shared.LoggingConfigDriverLogLevelsEnumError,
                                "totam": shared.LoggingConfigDriverLogLevelsEnumFatal,
                            },
                        },
                        OutputFormat: sdk.String("aspernatur"),
                        Properties: map[string]string{
                            "impedit": "nam",
                        },
                        QueryFileURI: sdk.String("ex"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "delectus",
                                "minus",
                            },
                        },
                    },
                    PysparkJob: &shared.PySparkJob{
                        ArchiveUris: []string{
                            "distinctio",
                            "eius",
                        },
                        Args: []string{
                            "veniam",
                        },
                        FileUris: []string{
                            "sint",
                            "occaecati",
                            "debitis",
                            "laboriosam",
                        },
                        JarFileUris: []string{
                            "amet",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "porro": shared.LoggingConfigDriverLogLevelsEnumWarn,
                                "reiciendis": shared.LoggingConfigDriverLogLevelsEnumInfo,
                            },
                        },
                        MainPythonFileURI: sdk.String("tempore"),
                        Properties: map[string]string{
                            "omnis": "possimus",
                            "tenetur": "recusandae",
                        },
                        PythonFileUris: []string{
                            "iusto",
                            "esse",
                            "harum",
                        },
                    },
                    Scheduling: &shared.JobScheduling{
                        MaxFailuresPerHour: sdk.Int(321654),
                        MaxFailuresTotal: sdk.Int(801059),
                    },
                    SparkJob: &shared.SparkJob{
                        ArchiveUris: []string{
                            "totam",
                        },
                        Args: []string{
                            "dolore",
                            "nam",
                            "officia",
                            "maiores",
                        },
                        FileUris: []string{
                            "illo",
                            "saepe",
                            "enim",
                        },
                        JarFileUris: []string{
                            "ex",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "delectus": shared.LoggingConfigDriverLogLevelsEnumInfo,
                                "provident": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                                "dolorum": shared.LoggingConfigDriverLogLevelsEnumDebug,
                                "tempora": shared.LoggingConfigDriverLogLevelsEnumError,
                            },
                        },
                        MainClass: sdk.String("numquam"),
                        MainJarFileURI: sdk.String("odio"),
                        Properties: map[string]string{
                            "maiores": "veritatis",
                            "autem": "earum",
                        },
                    },
                    SparkRJob: &shared.SparkRJob{
                        ArchiveUris: []string{
                            "ex",
                            "possimus",
                        },
                        Args: []string{
                            "corrupti",
                        },
                        FileUris: []string{
                            "fuga",
                            "sequi",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "numquam": shared.LoggingConfigDriverLogLevelsEnumError,
                                "eligendi": shared.LoggingConfigDriverLogLevelsEnumDebug,
                                "adipisci": shared.LoggingConfigDriverLogLevelsEnumAll,
                                "rerum": shared.LoggingConfigDriverLogLevelsEnumWarn,
                            },
                        },
                        MainRFileURI: sdk.String("provident"),
                        Properties: map[string]string{
                            "fugit": "autem",
                            "optio": "eveniet",
                            "fugiat": "blanditiis",
                            "a": "natus",
                        },
                    },
                    SparkSQLJob: &shared.SparkSQLJob{
                        JarFileUris: []string{
                            "repellendus",
                            "facilis",
                            "molestias",
                            "dolore",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "accusantium": shared.LoggingConfigDriverLogLevelsEnumOff,
                            },
                        },
                        Properties: map[string]string{
                            "velit": "tempore",
                            "expedita": "hic",
                        },
                        QueryFileURI: sdk.String("blanditiis"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "iusto",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "velit": "molestiae",
                            "nam": "aperiam",
                            "vitae": "mollitia",
                        },
                    },
                    StepID: sdk.String("asperiores"),
                    TrinoJob: &shared.TrinoJob{
                        ClientTags: []string{
                            "quibusdam",
                            "quam",
                            "deleniti",
                            "rem",
                        },
                        ContinueOnFailure: sdk.Bool(false),
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "eos": shared.LoggingConfigDriverLogLevelsEnumTrace,
                                "sunt": shared.LoggingConfigDriverLogLevelsEnumInfo,
                            },
                        },
                        OutputFormat: sdk.String("iste"),
                        Properties: map[string]string{
                            "distinctio": "incidunt",
                            "labore": "blanditiis",
                            "ducimus": "consectetur",
                            "sapiente": "quis",
                        },
                        QueryFileURI: sdk.String("accusantium"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "consectetur",
                            },
                        },
                    },
                },
                shared.OrderedJob{
                    HadoopJob: &shared.HadoopJob{
                        ArchiveUris: []string{
                            "architecto",
                            "sint",
                            "possimus",
                            "tempore",
                        },
                        Args: []string{
                            "quasi",
                            "consequuntur",
                            "nemo",
                            "nobis",
                        },
                        FileUris: []string{
                            "labore",
                            "veritatis",
                            "minima",
                            "magni",
                        },
                        JarFileUris: []string{
                            "error",
                            "expedita",
                            "error",
                            "placeat",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "voluptate": shared.LoggingConfigDriverLogLevelsEnumOff,
                                "minima": shared.LoggingConfigDriverLogLevelsEnumAll,
                                "odit": shared.LoggingConfigDriverLogLevelsEnumTrace,
                                "error": shared.LoggingConfigDriverLogLevelsEnumDebug,
                            },
                        },
                        MainClass: sdk.String("dolorum"),
                        MainJarFileURI: sdk.String("alias"),
                        Properties: map[string]string{
                            "ab": "sunt",
                            "amet": "cum",
                            "iusto": "corrupti",
                            "non": "esse",
                        },
                    },
                    HiveJob: &shared.HiveJob{
                        ContinueOnFailure: sdk.Bool(false),
                        JarFileUris: []string{
                            "eligendi",
                            "minima",
                            "omnis",
                            "recusandae",
                        },
                        Properties: map[string]string{
                            "voluptatibus": "autem",
                        },
                        QueryFileURI: sdk.String("in"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "amet",
                                "cumque",
                                "dolore",
                                "optio",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "repudiandae": "tempora",
                            "libero": "suscipit",
                            "illum": "iusto",
                            "aliquid": "sint",
                        },
                    },
                    Labels: map[string]string{
                        "repellat": "sapiente",
                        "consectetur": "eligendi",
                    },
                    PigJob: &shared.PigJob{
                        ContinueOnFailure: sdk.Bool(false),
                        JarFileUris: []string{
                            "nihil",
                            "eius",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "corporis": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                                "architecto": shared.LoggingConfigDriverLogLevelsEnumTrace,
                            },
                        },
                        Properties: map[string]string{
                            "nihil": "officiis",
                            "dolore": "magnam",
                        },
                        QueryFileURI: sdk.String("maiores"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "dicta",
                                "hic",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "libero": "consequatur",
                            "totam": "tempora",
                            "quo": "dolor",
                        },
                    },
                    PrerequisiteStepIds: []string{
                        "omnis",
                    },
                    PrestoJob: &shared.PrestoJob{
                        ClientTags: []string{
                            "officiis",
                            "dicta",
                        },
                        ContinueOnFailure: sdk.Bool(false),
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "consectetur": shared.LoggingConfigDriverLogLevelsEnumWarn,
                                "odit": shared.LoggingConfigDriverLogLevelsEnumTrace,
                                "corporis": shared.LoggingConfigDriverLogLevelsEnumTrace,
                            },
                        },
                        OutputFormat: sdk.String("suscipit"),
                        Properties: map[string]string{
                            "tenetur": "excepturi",
                            "modi": "corrupti",
                        },
                        QueryFileURI: sdk.String("nihil"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "placeat",
                                "fugit",
                            },
                        },
                    },
                    PysparkJob: &shared.PySparkJob{
                        ArchiveUris: []string{
                            "ipsam",
                            "nobis",
                            "porro",
                            "labore",
                        },
                        Args: []string{
                            "ducimus",
                            "qui",
                            "qui",
                        },
                        FileUris: []string{
                            "ratione",
                        },
                        JarFileUris: []string{
                            "iure",
                            "aliquid",
                            "cum",
                            "fugiat",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "voluptatibus": shared.LoggingConfigDriverLogLevelsEnumFatal,
                                "corporis": shared.LoggingConfigDriverLogLevelsEnumFatal,
                                "aut": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                            },
                        },
                        MainPythonFileURI: sdk.String("libero"),
                        Properties: map[string]string{
                            "odio": "omnis",
                            "officiis": "delectus",
                            "magni": "sit",
                        },
                        PythonFileUris: []string{
                            "voluptatum",
                        },
                    },
                    Scheduling: &shared.JobScheduling{
                        MaxFailuresPerHour: sdk.Int(471642),
                        MaxFailuresTotal: sdk.Int(204781),
                    },
                    SparkJob: &shared.SparkJob{
                        ArchiveUris: []string{
                            "eaque",
                        },
                        Args: []string{
                            "cupiditate",
                            "aut",
                        },
                        FileUris: []string{
                            "quod",
                            "quo",
                            "architecto",
                            "voluptatem",
                        },
                        JarFileUris: []string{
                            "ea",
                            "eius",
                            "aperiam",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "non": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                            },
                        },
                        MainClass: sdk.String("sequi"),
                        MainJarFileURI: sdk.String("rerum"),
                        Properties: map[string]string{
                            "debitis": "quis",
                        },
                    },
                    SparkRJob: &shared.SparkRJob{
                        ArchiveUris: []string{
                            "incidunt",
                        },
                        Args: []string{
                            "delectus",
                            "aliquid",
                        },
                        FileUris: []string{
                            "maiores",
                            "debitis",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "eos": shared.LoggingConfigDriverLogLevelsEnumFatal,
                                "cumque": shared.LoggingConfigDriverLogLevelsEnumTrace,
                            },
                        },
                        MainRFileURI: sdk.String("quae"),
                        Properties: map[string]string{
                            "quam": "assumenda",
                            "consequatur": "cumque",
                        },
                    },
                    SparkSQLJob: &shared.SparkSQLJob{
                        JarFileUris: []string{
                            "adipisci",
                            "tenetur",
                            "non",
                            "accusantium",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "itaque": shared.LoggingConfigDriverLogLevelsEnumOff,
                                "impedit": shared.LoggingConfigDriverLogLevelsEnumAll,
                                "corporis": shared.LoggingConfigDriverLogLevelsEnumError,
                            },
                        },
                        Properties: map[string]string{
                            "cum": "dolore",
                            "illum": "ea",
                            "officiis": "quasi",
                            "accusamus": "animi",
                        },
                        QueryFileURI: sdk.String("necessitatibus"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "maiores",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "veniam": "fuga",
                            "itaque": "possimus",
                        },
                    },
                    StepID: sdk.String("tenetur"),
                    TrinoJob: &shared.TrinoJob{
                        ClientTags: []string{
                            "deserunt",
                        },
                        ContinueOnFailure: sdk.Bool(false),
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "id": shared.LoggingConfigDriverLogLevelsEnumError,
                                "corporis": shared.LoggingConfigDriverLogLevelsEnumWarn,
                                "soluta": shared.LoggingConfigDriverLogLevelsEnumWarn,
                                "unde": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                            },
                        },
                        OutputFormat: sdk.String("quisquam"),
                        Properties: map[string]string{
                            "sed": "suscipit",
                            "facere": "pariatur",
                            "nam": "quaerat",
                        },
                        QueryFileURI: sdk.String("corrupti"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "eius",
                                "vel",
                                "quasi",
                            },
                        },
                    },
                },
                shared.OrderedJob{
                    HadoopJob: &shared.HadoopJob{
                        ArchiveUris: []string{
                            "odio",
                            "numquam",
                            "fugit",
                            "inventore",
                        },
                        Args: []string{
                            "nobis",
                            "recusandae",
                            "commodi",
                            "possimus",
                        },
                        FileUris: []string{
                            "veniam",
                            "sit",
                            "fugit",
                        },
                        JarFileUris: []string{
                            "consequatur",
                            "vero",
                            "id",
                            "error",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "perferendis": shared.LoggingConfigDriverLogLevelsEnumError,
                            },
                        },
                        MainClass: sdk.String("voluptas"),
                        MainJarFileURI: sdk.String("sint"),
                        Properties: map[string]string{
                            "nihil": "fuga",
                            "cumque": "consequuntur",
                            "maiores": "esse",
                            "explicabo": "delectus",
                        },
                    },
                    HiveJob: &shared.HiveJob{
                        ContinueOnFailure: sdk.Bool(false),
                        JarFileUris: []string{
                            "deleniti",
                            "enim",
                            "sit",
                        },
                        Properties: map[string]string{
                            "natus": "voluptatem",
                        },
                        QueryFileURI: sdk.String("tempora"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "quasi",
                                "veritatis",
                                "ex",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "quas": "dolores",
                        },
                    },
                    Labels: map[string]string{
                        "esse": "quas",
                    },
                    PigJob: &shared.PigJob{
                        ContinueOnFailure: sdk.Bool(false),
                        JarFileUris: []string{
                            "laudantium",
                            "voluptates",
                            "minus",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "vel": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                                "quos": shared.LoggingConfigDriverLogLevelsEnumTrace,
                            },
                        },
                        Properties: map[string]string{
                            "tenetur": "necessitatibus",
                            "perspiciatis": "suscipit",
                            "ullam": "unde",
                        },
                        QueryFileURI: sdk.String("debitis"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "magnam",
                                "doloremque",
                                "accusamus",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "sunt": "voluptas",
                            "earum": "est",
                            "earum": "nihil",
                            "nostrum": "rerum",
                        },
                    },
                    PrerequisiteStepIds: []string{
                        "nam",
                    },
                    PrestoJob: &shared.PrestoJob{
                        ClientTags: []string{
                            "ratione",
                            "eos",
                        },
                        ContinueOnFailure: sdk.Bool(false),
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "modi": shared.LoggingConfigDriverLogLevelsEnumFatal,
                                "error": shared.LoggingConfigDriverLogLevelsEnumTrace,
                                "reprehenderit": shared.LoggingConfigDriverLogLevelsEnumError,
                            },
                        },
                        OutputFormat: sdk.String("cum"),
                        Properties: map[string]string{
                            "culpa": "a",
                            "magnam": "eius",
                            "ad": "quia",
                        },
                        QueryFileURI: sdk.String("quod"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "voluptatum",
                                "numquam",
                            },
                        },
                    },
                    PysparkJob: &shared.PySparkJob{
                        ArchiveUris: []string{
                            "eligendi",
                        },
                        Args: []string{
                            "tempore",
                            "odit",
                            "est",
                        },
                        FileUris: []string{
                            "ipsum",
                            "explicabo",
                            "nulla",
                            "est",
                        },
                        JarFileUris: []string{
                            "necessitatibus",
                            "voluptatum",
                            "quasi",
                            "mollitia",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "blanditiis": shared.LoggingConfigDriverLogLevelsEnumOff,
                                "ut": shared.LoggingConfigDriverLogLevelsEnumTrace,
                                "labore": shared.LoggingConfigDriverLogLevelsEnumTrace,
                            },
                        },
                        MainPythonFileURI: sdk.String("enim"),
                        Properties: map[string]string{
                            "ratione": "tenetur",
                            "saepe": "quod",
                        },
                        PythonFileUris: []string{
                            "tempora",
                            "quam",
                            "consectetur",
                            "nemo",
                        },
                    },
                    Scheduling: &shared.JobScheduling{
                        MaxFailuresPerHour: sdk.Int(198616),
                        MaxFailuresTotal: sdk.Int(939079),
                    },
                    SparkJob: &shared.SparkJob{
                        ArchiveUris: []string{
                            "dolor",
                            "placeat",
                        },
                        Args: []string{
                            "sed",
                            "eaque",
                            "natus",
                        },
                        FileUris: []string{
                            "nihil",
                        },
                        JarFileUris: []string{
                            "deserunt",
                            "id",
                            "ex",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "optio": shared.LoggingConfigDriverLogLevelsEnumFatal,
                                "ad": shared.LoggingConfigDriverLogLevelsEnumOff,
                                "nam": shared.LoggingConfigDriverLogLevelsEnumError,
                            },
                        },
                        MainClass: sdk.String("sapiente"),
                        MainJarFileURI: sdk.String("quam"),
                        Properties: map[string]string{
                            "repellendus": "culpa",
                            "dicta": "rem",
                            "fuga": "odio",
                        },
                    },
                    SparkRJob: &shared.SparkRJob{
                        ArchiveUris: []string{
                            "magni",
                            "eos",
                            "harum",
                        },
                        Args: []string{
                            "omnis",
                            "quis",
                            "quos",
                            "natus",
                        },
                        FileUris: []string{
                            "vero",
                            "nisi",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "eum": shared.LoggingConfigDriverLogLevelsEnumAll,
                                "animi": shared.LoggingConfigDriverLogLevelsEnumFatal,
                                "libero": shared.LoggingConfigDriverLogLevelsEnumDebug,
                            },
                        },
                        MainRFileURI: sdk.String("quaerat"),
                        Properties: map[string]string{
                            "iste": "accusamus",
                            "ipsam": "fugiat",
                            "odio": "ullam",
                            "inventore": "eligendi",
                        },
                    },
                    SparkSQLJob: &shared.SparkSQLJob{
                        JarFileUris: []string{
                            "doloribus",
                            "necessitatibus",
                            "rem",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "nihil": shared.LoggingConfigDriverLogLevelsEnumDebug,
                                "aut": shared.LoggingConfigDriverLogLevelsEnumAll,
                                "rerum": shared.LoggingConfigDriverLogLevelsEnumOff,
                                "nulla": shared.LoggingConfigDriverLogLevelsEnumFatal,
                            },
                        },
                        Properties: map[string]string{
                            "dolore": "enim",
                        },
                        QueryFileURI: sdk.String("alias"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "modi",
                                "illo",
                                "a",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "molestiae": "autem",
                        },
                    },
                    StepID: sdk.String("dolore"),
                    TrinoJob: &shared.TrinoJob{
                        ClientTags: []string{
                            "nostrum",
                            "ex",
                        },
                        ContinueOnFailure: sdk.Bool(false),
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "voluptate": shared.LoggingConfigDriverLogLevelsEnumWarn,
                            },
                        },
                        OutputFormat: sdk.String("voluptatibus"),
                        Properties: map[string]string{
                            "hic": "quidem",
                        },
                        QueryFileURI: sdk.String("odit"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "accusamus",
                                "quia",
                            },
                        },
                    },
                },
                shared.OrderedJob{
                    HadoopJob: &shared.HadoopJob{
                        ArchiveUris: []string{
                            "doloribus",
                        },
                        Args: []string{
                            "aliquid",
                            "consequuntur",
                            "laboriosam",
                        },
                        FileUris: []string{
                            "reprehenderit",
                            "soluta",
                        },
                        JarFileUris: []string{
                            "vel",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "maxime": shared.LoggingConfigDriverLogLevelsEnumDebug,
                                "distinctio": shared.LoggingConfigDriverLogLevelsEnumWarn,
                                "hic": shared.LoggingConfigDriverLogLevelsEnumDebug,
                                "deleniti": shared.LoggingConfigDriverLogLevelsEnumInfo,
                            },
                        },
                        MainClass: sdk.String("quod"),
                        MainJarFileURI: sdk.String("saepe"),
                        Properties: map[string]string{
                            "magni": "nostrum",
                            "minus": "aliquid",
                        },
                    },
                    HiveJob: &shared.HiveJob{
                        ContinueOnFailure: sdk.Bool(false),
                        JarFileUris: []string{
                            "ea",
                            "numquam",
                        },
                        Properties: map[string]string{
                            "fuga": "totam",
                        },
                        QueryFileURI: sdk.String("velit"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "sed",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "veniam": "quae",
                            "dolore": "in",
                            "libero": "ut",
                            "cumque": "quia",
                        },
                    },
                    Labels: map[string]string{
                        "porro": "cumque",
                    },
                    PigJob: &shared.PigJob{
                        ContinueOnFailure: sdk.Bool(false),
                        JarFileUris: []string{
                            "numquam",
                            "fugit",
                            "amet",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "facilis": shared.LoggingConfigDriverLogLevelsEnumFatal,
                                "vero": shared.LoggingConfigDriverLogLevelsEnumError,
                                "omnis": shared.LoggingConfigDriverLogLevelsEnumLevelUnspecified,
                            },
                        },
                        Properties: map[string]string{
                            "fuga": "est",
                            "distinctio": "fugiat",
                            "nulla": "totam",
                            "praesentium": "officiis",
                        },
                        QueryFileURI: sdk.String("esse"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "delectus",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "minus": "labore",
                            "quas": "sed",
                        },
                    },
                    PrerequisiteStepIds: []string{
                        "sed",
                        "quibusdam",
                    },
                    PrestoJob: &shared.PrestoJob{
                        ClientTags: []string{
                            "voluptate",
                            "reprehenderit",
                        },
                        ContinueOnFailure: sdk.Bool(false),
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "eveniet": shared.LoggingConfigDriverLogLevelsEnumInfo,
                            },
                        },
                        OutputFormat: sdk.String("hic"),
                        Properties: map[string]string{
                            "perferendis": "in",
                            "eius": "aut",
                            "consequatur": "iste",
                            "accusamus": "repellat",
                        },
                        QueryFileURI: sdk.String("voluptatum"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "consequuntur",
                                "natus",
                                "repellendus",
                                "voluptates",
                            },
                        },
                    },
                    PysparkJob: &shared.PySparkJob{
                        ArchiveUris: []string{
                            "facere",
                        },
                        Args: []string{
                            "ducimus",
                            "aut",
                            "provident",
                            "voluptate",
                        },
                        FileUris: []string{
                            "ullam",
                            "illum",
                            "mollitia",
                        },
                        JarFileUris: []string{
                            "quos",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "ullam": shared.LoggingConfigDriverLogLevelsEnumInfo,
                                "doloribus": shared.LoggingConfigDriverLogLevelsEnumWarn,
                                "eum": shared.LoggingConfigDriverLogLevelsEnumError,
                                "odio": shared.LoggingConfigDriverLogLevelsEnumInfo,
                            },
                        },
                        MainPythonFileURI: sdk.String("similique"),
                        Properties: map[string]string{
                            "architecto": "ea",
                        },
                        PythonFileUris: []string{
                            "illo",
                            "excepturi",
                            "harum",
                            "laborum",
                        },
                    },
                    Scheduling: &shared.JobScheduling{
                        MaxFailuresPerHour: sdk.Int(953707),
                        MaxFailuresTotal: sdk.Int(922640),
                    },
                    SparkJob: &shared.SparkJob{
                        ArchiveUris: []string{
                            "officia",
                            "laboriosam",
                            "illo",
                            "cupiditate",
                        },
                        Args: []string{
                            "aliquam",
                        },
                        FileUris: []string{
                            "atque",
                            "dicta",
                            "magnam",
                        },
                        JarFileUris: []string{
                            "cum",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "eius": shared.LoggingConfigDriverLogLevelsEnumOff,
                                "delectus": shared.LoggingConfigDriverLogLevelsEnumInfo,
                            },
                        },
                        MainClass: sdk.String("id"),
                        MainJarFileURI: sdk.String("officiis"),
                        Properties: map[string]string{
                            "voluptate": "consequatur",
                        },
                    },
                    SparkRJob: &shared.SparkRJob{
                        ArchiveUris: []string{
                            "repellat",
                            "voluptatem",
                            "dolor",
                            "distinctio",
                        },
                        Args: []string{
                            "a",
                            "neque",
                        },
                        FileUris: []string{
                            "recusandae",
                            "numquam",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "mollitia": shared.LoggingConfigDriverLogLevelsEnumInfo,
                                "suscipit": shared.LoggingConfigDriverLogLevelsEnumWarn,
                                "quis": shared.LoggingConfigDriverLogLevelsEnumTrace,
                            },
                        },
                        MainRFileURI: sdk.String("corporis"),
                        Properties: map[string]string{
                            "ea": "autem",
                            "voluptate": "nesciunt",
                            "magni": "animi",
                        },
                    },
                    SparkSQLJob: &shared.SparkSQLJob{
                        JarFileUris: []string{
                            "voluptas",
                            "temporibus",
                            "porro",
                        },
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "commodi": shared.LoggingConfigDriverLogLevelsEnumDebug,
                                "praesentium": shared.LoggingConfigDriverLogLevelsEnumAll,
                                "quisquam": shared.LoggingConfigDriverLogLevelsEnumError,
                            },
                        },
                        Properties: map[string]string{
                            "eaque": "delectus",
                            "blanditiis": "minus",
                        },
                        QueryFileURI: sdk.String("tenetur"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "exercitationem",
                                "a",
                                "tempore",
                                "laboriosam",
                            },
                        },
                        ScriptVariables: map[string]string{
                            "occaecati": "dicta",
                            "quidem": "omnis",
                            "laborum": "molestias",
                            "a": "dignissimos",
                        },
                    },
                    StepID: sdk.String("labore"),
                    TrinoJob: &shared.TrinoJob{
                        ClientTags: []string{
                            "dolore",
                            "aliquid",
                            "repudiandae",
                        },
                        ContinueOnFailure: sdk.Bool(false),
                        LoggingConfig: &shared.LoggingConfig{
                            DriverLogLevels: map[string]shared.LoggingConfigDriverLogLevelsEnum{
                                "quod": shared.LoggingConfigDriverLogLevelsEnumAll,
                            },
                        },
                        OutputFormat: sdk.String("neque"),
                        Properties: map[string]string{
                            "excepturi": "repellendus",
                        },
                        QueryFileURI: sdk.String("soluta"),
                        QueryList: &shared.QueryList{
                            Queries: []string{
                                "ullam",
                            },
                        },
                    },
                },
            },
            Labels: map[string]string{
                "iure": "quibusdam",
            },
            Parameters: []shared.TemplateParameter{
                shared.TemplateParameter{
                    Description: sdk.String("voluptates"),
                    Fields: []string{
                        "ad",
                        "eligendi",
                    },
                    Name: sdk.String("Robert Balistreri"),
                    Validation: &shared.ParameterValidation{
                        Regex: &shared.RegexValidation{
                            Regexes: []string{
                                "dolorem",
                                "omnis",
                            },
                        },
                        Values: &shared.ValueValidation{
                            Values: []string{
                                "quo",
                            },
                        },
                    },
                },
                shared.TemplateParameter{
                    Description: sdk.String("et"),
                    Fields: []string{
                        "est",
                    },
                    Name: sdk.String("Sally O'Reilly"),
                    Validation: &shared.ParameterValidation{
                        Regex: &shared.RegexValidation{
                            Regexes: []string{
                                "provident",
                                "sunt",
                                "maiores",
                                "excepturi",
                            },
                        },
                        Values: &shared.ValueValidation{
                            Values: []string{
                                "dolore",
                                "aspernatur",
                            },
                        },
                    },
                },
                shared.TemplateParameter{
                    Description: sdk.String("molestias"),
                    Fields: []string{
                        "at",
                        "unde",
                        "laborum",
                    },
                    Name: sdk.String("Terrell Lockman"),
                    Validation: &shared.ParameterValidation{
                        Regex: &shared.RegexValidation{
                            Regexes: []string{
                                "explicabo",
                                "odit",
                                "illo",
                            },
                        },
                        Values: &shared.ValueValidation{
                            Values: []string{
                                "quia",
                            },
                        },
                    },
                },
            },
            Placement: &shared.WorkflowTemplatePlacementInput{
                ClusterSelector: &shared.ClusterSelector{
                    ClusterLabels: map[string]string{
                        "velit": "ullam",
                        "provident": "possimus",
                    },
                    Zone: sdk.String("iste"),
                },
                ManagedCluster: &shared.ManagedClusterInput{
                    ClusterName: sdk.String("blanditiis"),
                    Config: &shared.ClusterConfigInput{
                        AutoscalingConfig: &shared.AutoscalingConfig{
                            PolicyURI: sdk.String("consectetur"),
                        },
                        AuxiliaryNodeGroups: []shared.AuxiliaryNodeGroupInput{
                            shared.AuxiliaryNodeGroupInput{
                                NodeGroup: &shared.NodeGroupInput{
                                    Labels: map[string]string{
                                        "repellat": "iusto",
                                        "culpa": "voluptate",
                                    },
                                    Name: sdk.String("Wilbert Shields"),
                                    NodeGroupConfig: &shared.InstanceGroupConfigInput{
                                        Accelerators: []shared.AcceleratorConfig{
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(860830),
                                                AcceleratorTypeURI: sdk.String("magni"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(265708),
                                                AcceleratorTypeURI: sdk.String("voluptatum"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(291695),
                                                AcceleratorTypeURI: sdk.String("possimus"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(677151),
                                                AcceleratorTypeURI: sdk.String("eos"),
                                            },
                                        },
                                        DiskConfig: &shared.DiskConfig{
                                            BootDiskSizeGb: sdk.Int(121161),
                                            BootDiskType: sdk.String("quam"),
                                            LocalSsdInterface: sdk.String("eos"),
                                            NumLocalSsds: sdk.Int(609079),
                                        },
                                        ImageURI: sdk.String("reiciendis"),
                                        MachineTypeURI: sdk.String("qui"),
                                        MinCPUPlatform: sdk.String("similique"),
                                        NumInstances: sdk.Int(756766),
                                        Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumNonPreemptible.ToPointer(),
                                    },
                                    Roles: []shared.NodeGroupRolesEnum{
                                        shared.NodeGroupRolesEnumDriver,
                                    },
                                },
                                NodeGroupID: sdk.String("tenetur"),
                            },
                            shared.AuxiliaryNodeGroupInput{
                                NodeGroup: &shared.NodeGroupInput{
                                    Labels: map[string]string{
                                        "nihil": "quia",
                                        "quis": "maiores",
                                    },
                                    Name: sdk.String("Jean Kemmer"),
                                    NodeGroupConfig: &shared.InstanceGroupConfigInput{
                                        Accelerators: []shared.AcceleratorConfig{
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(94487),
                                                AcceleratorTypeURI: sdk.String("itaque"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(306269),
                                                AcceleratorTypeURI: sdk.String("vitae"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(836018),
                                                AcceleratorTypeURI: sdk.String("voluptatum"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(646181),
                                                AcceleratorTypeURI: sdk.String("aspernatur"),
                                            },
                                        },
                                        DiskConfig: &shared.DiskConfig{
                                            BootDiskSizeGb: sdk.Int(206373),
                                            BootDiskType: sdk.String("impedit"),
                                            LocalSsdInterface: sdk.String("consequuntur"),
                                            NumLocalSsds: sdk.Int(204292),
                                        },
                                        ImageURI: sdk.String("saepe"),
                                        MachineTypeURI: sdk.String("amet"),
                                        MinCPUPlatform: sdk.String("labore"),
                                        NumInstances: sdk.Int(998445),
                                        Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumPreemptibilityUnspecified.ToPointer(),
                                    },
                                    Roles: []shared.NodeGroupRolesEnum{
                                        shared.NodeGroupRolesEnumDriver,
                                        shared.NodeGroupRolesEnumDriver,
                                        shared.NodeGroupRolesEnumRoleUnspecified,
                                        shared.NodeGroupRolesEnumDriver,
                                    },
                                },
                                NodeGroupID: sdk.String("sunt"),
                            },
                            shared.AuxiliaryNodeGroupInput{
                                NodeGroup: &shared.NodeGroupInput{
                                    Labels: map[string]string{
                                        "quam": "a",
                                        "iure": "nulla",
                                        "recusandae": "iste",
                                    },
                                    Name: sdk.String("Judy Bosco DVM"),
                                    NodeGroupConfig: &shared.InstanceGroupConfigInput{
                                        Accelerators: []shared.AcceleratorConfig{
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(121538),
                                                AcceleratorTypeURI: sdk.String("in"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(99163),
                                                AcceleratorTypeURI: sdk.String("sed"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(30962),
                                                AcceleratorTypeURI: sdk.String("perspiciatis"),
                                            },
                                            shared.AcceleratorConfig{
                                                AcceleratorCount: sdk.Int(622485),
                                                AcceleratorTypeURI: sdk.String("deleniti"),
                                            },
                                        },
                                        DiskConfig: &shared.DiskConfig{
                                            BootDiskSizeGb: sdk.Int(315190),
                                            BootDiskType: sdk.String("nesciunt"),
                                            LocalSsdInterface: sdk.String("saepe"),
                                            NumLocalSsds: sdk.Int(603038),
                                        },
                                        ImageURI: sdk.String("reiciendis"),
                                        MachineTypeURI: sdk.String("quis"),
                                        MinCPUPlatform: sdk.String("modi"),
                                        NumInstances: sdk.Int(238371),
                                        Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumSpot.ToPointer(),
                                    },
                                    Roles: []shared.NodeGroupRolesEnum{
                                        shared.NodeGroupRolesEnumRoleUnspecified,
                                        shared.NodeGroupRolesEnumRoleUnspecified,
                                        shared.NodeGroupRolesEnumRoleUnspecified,
                                    },
                                },
                                NodeGroupID: sdk.String("dolor"),
                            },
                        },
                        ConfigBucket: sdk.String("perspiciatis"),
                        DataprocMetricConfig: &shared.DataprocMetricConfig{
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    MetricOverrides: []string{
                                        "quia",
                                        "aspernatur",
                                        "ut",
                                        "non",
                                    },
                                    MetricSource: shared.MetricMetricSourceEnumSpark.ToPointer(),
                                },
                                shared.Metric{
                                    MetricOverrides: []string{
                                        "tempora",
                                    },
                                    MetricSource: shared.MetricMetricSourceEnumHdfs.ToPointer(),
                                },
                                shared.Metric{
                                    MetricOverrides: []string{
                                        "expedita",
                                    },
                                    MetricSource: shared.MetricMetricSourceEnumHiveserver2.ToPointer(),
                                },
                                shared.Metric{
                                    MetricOverrides: []string{
                                        "minima",
                                    },
                                    MetricSource: shared.MetricMetricSourceEnumHdfs.ToPointer(),
                                },
                            },
                        },
                        EncryptionConfig: &shared.EncryptionConfig{
                            GcePdKmsKeyName: sdk.String("vitae"),
                            KmsKey: sdk.String("quos"),
                        },
                        EndpointConfig: &shared.EndpointConfigInput{
                            EnableHTTPPortAccess: sdk.Bool(false),
                        },
                        GceClusterConfig: &shared.GceClusterConfig{
                            ConfidentialInstanceConfig: &shared.ConfidentialInstanceConfig{
                                EnableConfidentialCompute: sdk.Bool(false),
                            },
                            InternalIPOnly: sdk.Bool(false),
                            Metadata: map[string]string{
                                "quisquam": "sunt",
                                "asperiores": "corporis",
                                "vel": "accusamus",
                            },
                            NetworkURI: sdk.String("totam"),
                            NodeGroupAffinity: &shared.NodeGroupAffinity{
                                NodeGroupURI: sdk.String("ipsam"),
                            },
                            PrivateIpv6GoogleAccess: shared.GceClusterConfigPrivateIpv6GoogleAccessEnumBidirectional.ToPointer(),
                            ReservationAffinity: &shared.ReservationAffinity{
                                ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumAnyReservation.ToPointer(),
                                Key: sdk.String("nihil"),
                                Values: []string{
                                    "dolorem",
                                    "odit",
                                    "officiis",
                                },
                            },
                            ServiceAccount: sdk.String("mollitia"),
                            ServiceAccountScopes: []string{
                                "fugiat",
                                "voluptas",
                                "et",
                            },
                            ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                                EnableIntegrityMonitoring: sdk.Bool(false),
                                EnableSecureBoot: sdk.Bool(false),
                                EnableVtpm: sdk.Bool(false),
                            },
                            SubnetworkURI: sdk.String("odio"),
                            Tags: []string{
                                "nesciunt",
                                "harum",
                                "aperiam",
                                "pariatur",
                            },
                            ZoneURI: sdk.String("ad"),
                        },
                        GkeClusterConfig: &shared.GkeClusterConfig{
                            GkeClusterTarget: sdk.String("architecto"),
                            NamespacedGkeDeploymentTarget: &shared.NamespacedGkeDeploymentTarget{
                                ClusterNamespace: sdk.String("culpa"),
                                TargetGkeCluster: sdk.String("aliquam"),
                            },
                            NodePoolTarget: []shared.GkeNodePoolTarget{
                                shared.GkeNodePoolTarget{
                                    NodePool: sdk.String("quidem"),
                                    NodePoolConfig: &shared.GkeNodePoolConfig{
                                        Autoscaling: &shared.GkeNodePoolAutoscalingConfig{
                                            MaxNodeCount: sdk.Int(985265),
                                            MinNodeCount: sdk.Int(22018),
                                        },
                                        Config: &shared.GkeNodeConfig{
                                            Accelerators: []shared.GkeNodePoolAcceleratorConfig{
                                                shared.GkeNodePoolAcceleratorConfig{
                                                    AcceleratorCount: sdk.String("tempore"),
                                                    AcceleratorType: sdk.String("deserunt"),
                                                    GpuPartitionSize: sdk.String("nulla"),
                                                },
                                            },
                                            BootDiskKmsKey: sdk.String("corrupti"),
                                            LocalSsdCount: sdk.Int(453304),
                                            MachineType: sdk.String("alias"),
                                            MinCPUPlatform: sdk.String("iure"),
                                            Preemptible: sdk.Bool(false),
                                            Spot: sdk.Bool(false),
                                        },
                                        Locations: []string{
                                            "incidunt",
                                            "ea",
                                            "alias",
                                            "laudantium",
                                        },
                                    },
                                    Roles: []shared.GkeNodePoolTargetRolesEnum{
                                        shared.GkeNodePoolTargetRolesEnumSparkDriver,
                                    },
                                },
                                shared.GkeNodePoolTarget{
                                    NodePool: sdk.String("maiores"),
                                    NodePoolConfig: &shared.GkeNodePoolConfig{
                                        Autoscaling: &shared.GkeNodePoolAutoscalingConfig{
                                            MaxNodeCount: sdk.Int(723374),
                                            MinNodeCount: sdk.Int(867286),
                                        },
                                        Config: &shared.GkeNodeConfig{
                                            Accelerators: []shared.GkeNodePoolAcceleratorConfig{
                                                shared.GkeNodePoolAcceleratorConfig{
                                                    AcceleratorCount: sdk.String("modi"),
                                                    AcceleratorType: sdk.String("vitae"),
                                                    GpuPartitionSize: sdk.String("delectus"),
                                                },
                                                shared.GkeNodePoolAcceleratorConfig{
                                                    AcceleratorCount: sdk.String("delectus"),
                                                    AcceleratorType: sdk.String("nemo"),
                                                    GpuPartitionSize: sdk.String("at"),
                                                },
                                                shared.GkeNodePoolAcceleratorConfig{
                                                    AcceleratorCount: sdk.String("magnam"),
                                                    AcceleratorType: sdk.String("officiis"),
                                                    GpuPartitionSize: sdk.String("sed"),
                                                },
                                                shared.GkeNodePoolAcceleratorConfig{
                                                    AcceleratorCount: sdk.String("mollitia"),
                                                    AcceleratorType: sdk.String("saepe"),
                                                    GpuPartitionSize: sdk.String("labore"),
                                                },
                                            },
                                            BootDiskKmsKey: sdk.String("doloribus"),
                                            LocalSsdCount: sdk.Int(704054),
                                            MachineType: sdk.String("minima"),
                                            MinCPUPlatform: sdk.String("impedit"),
                                            Preemptible: sdk.Bool(false),
                                            Spot: sdk.Bool(false),
                                        },
                                        Locations: []string{
                                            "amet",
                                            "quis",
                                            "fugiat",
                                        },
                                    },
                                    Roles: []shared.GkeNodePoolTargetRolesEnum{
                                        shared.GkeNodePoolTargetRolesEnumController,
                                    },
                                },
                            },
                        },
                        InitializationActions: []shared.NodeInitializationAction{
                            shared.NodeInitializationAction{
                                ExecutableFile: sdk.String("consectetur"),
                                ExecutionTimeout: sdk.String("quos"),
                            },
                            shared.NodeInitializationAction{
                                ExecutableFile: sdk.String("delectus"),
                                ExecutionTimeout: sdk.String("sunt"),
                            },
                        },
                        LifecycleConfig: &shared.LifecycleConfigInput{
                            AutoDeleteTime: sdk.String("repudiandae"),
                            AutoDeleteTTL: sdk.String("facere"),
                            IdleDeleteTTL: sdk.String("distinctio"),
                        },
                        MasterConfig: &shared.InstanceGroupConfigInput{
                            Accelerators: []shared.AcceleratorConfig{
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(540416),
                                    AcceleratorTypeURI: sdk.String("consectetur"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(367096),
                                    AcceleratorTypeURI: sdk.String("provident"),
                                },
                            },
                            DiskConfig: &shared.DiskConfig{
                                BootDiskSizeGb: sdk.Int(882272),
                                BootDiskType: sdk.String("minus"),
                                LocalSsdInterface: sdk.String("impedit"),
                                NumLocalSsds: sdk.Int(327624),
                            },
                            ImageURI: sdk.String("cumque"),
                            MachineTypeURI: sdk.String("rerum"),
                            MinCPUPlatform: sdk.String("praesentium"),
                            NumInstances: sdk.Int(427859),
                            Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumPreemptibilityUnspecified.ToPointer(),
                        },
                        MetastoreConfig: &shared.MetastoreConfig{
                            DataprocMetastoreService: sdk.String("delectus"),
                        },
                        SecondaryWorkerConfig: &shared.InstanceGroupConfigInput{
                            Accelerators: []shared.AcceleratorConfig{
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(770940),
                                    AcceleratorTypeURI: sdk.String("illum"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(356351),
                                    AcceleratorTypeURI: sdk.String("praesentium"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(17747),
                                    AcceleratorTypeURI: sdk.String("soluta"),
                                },
                            },
                            DiskConfig: &shared.DiskConfig{
                                BootDiskSizeGb: sdk.Int(657520),
                                BootDiskType: sdk.String("molestiae"),
                                LocalSsdInterface: sdk.String("nesciunt"),
                                NumLocalSsds: sdk.Int(559715),
                            },
                            ImageURI: sdk.String("sunt"),
                            MachineTypeURI: sdk.String("aperiam"),
                            MinCPUPlatform: sdk.String("itaque"),
                            NumInstances: sdk.Int(310380),
                            Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumSpot.ToPointer(),
                        },
                        SecurityConfig: &shared.SecurityConfig{
                            IdentityConfig: &shared.IdentityConfig{
                                UserServiceAccountMapping: map[string]string{
                                    "tempora": "quaerat",
                                    "magnam": "voluptate",
                                    "magni": "excepturi",
                                    "esse": "cumque",
                                },
                            },
                            KerberosConfig: &shared.KerberosConfig{
                                CrossRealmTrustAdminServer: sdk.String("pariatur"),
                                CrossRealmTrustKdc: sdk.String("non"),
                                CrossRealmTrustRealm: sdk.String("rerum"),
                                CrossRealmTrustSharedPasswordURI: sdk.String("illo"),
                                EnableKerberos: sdk.Bool(false),
                                KdcDbKeyURI: sdk.String("illum"),
                                KeyPasswordURI: sdk.String("nulla"),
                                KeystorePasswordURI: sdk.String("amet"),
                                KeystoreURI: sdk.String("expedita"),
                                KmsKeyURI: sdk.String("libero"),
                                Realm: sdk.String("impedit"),
                                RootPrincipalPasswordURI: sdk.String("repudiandae"),
                                TgtLifetimeHours: sdk.Int(170819),
                                TruststorePasswordURI: sdk.String("ut"),
                                TruststoreURI: sdk.String("nihil"),
                            },
                        },
                        SoftwareConfig: &shared.SoftwareConfig{
                            ImageVersion: sdk.String("harum"),
                            OptionalComponents: []shared.SoftwareConfigOptionalComponentsEnum{
                                shared.SoftwareConfigOptionalComponentsEnumHiveWebhcat,
                                shared.SoftwareConfigOptionalComponentsEnumHudi,
                            },
                            Properties: map[string]string{
                                "repudiandae": "reiciendis",
                                "asperiores": "exercitationem",
                            },
                        },
                        TempBucket: sdk.String("voluptatem"),
                        WorkerConfig: &shared.InstanceGroupConfigInput{
                            Accelerators: []shared.AcceleratorConfig{
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.Int(184333),
                                    AcceleratorTypeURI: sdk.String("laboriosam"),
                                },
                            },
                            DiskConfig: &shared.DiskConfig{
                                BootDiskSizeGb: sdk.Int(840558),
                                BootDiskType: sdk.String("in"),
                                LocalSsdInterface: sdk.String("veritatis"),
                                NumLocalSsds: sdk.Int(752211),
                            },
                            ImageURI: sdk.String("voluptatibus"),
                            MachineTypeURI: sdk.String("tenetur"),
                            MinCPUPlatform: sdk.String("facilis"),
                            NumInstances: sdk.Int(817057),
                            Preemptibility: shared.InstanceGroupConfigPreemptibilityEnumPreemptibilityUnspecified.ToPointer(),
                        },
                    },
                    Labels: map[string]string{
                        "rerum": "molestiae",
                        "quaerat": "distinctio",
                        "blanditiis": "quaerat",
                        "odit": "ab",
                    },
                },
            },
            Version: sdk.Int(603512),
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("ut"),
        Key: sdk.String("tempora"),
        Name: "Drew Dooley",
        OauthToken: sdk.String("sequi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("veniam"),
        UploadProtocol: sdk.String("unde"),
    }, operations.DataprocProjectsRegionsWorkflowTemplatesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkflowTemplate != nil {
        // handle response
    }
}
```
