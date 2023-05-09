# Projects

### Available Operations

* [DataflowProjectsDeleteSnapshots](#dataflowprojectsdeletesnapshots) - Deletes a snapshot.
* [DataflowProjectsJobsAggregated](#dataflowprojectsjobsaggregated) - List the jobs of a project across all regions.
* [DataflowProjectsJobsCreate](#dataflowprojectsjobscreate) - Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
* [DataflowProjectsJobsDebugGetConfig](#dataflowprojectsjobsdebuggetconfig) - Get encoded debug configuration for component. Not cacheable.
* [DataflowProjectsJobsDebugSendCapture](#dataflowprojectsjobsdebugsendcapture) - Send encoded debug capture data for component.
* [DataflowProjectsJobsGet](#dataflowprojectsjobsget) - Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
* [DataflowProjectsJobsGetMetrics](#dataflowprojectsjobsgetmetrics) - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* [DataflowProjectsJobsList](#dataflowprojectsjobslist) - List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
* [DataflowProjectsJobsMessagesList](#dataflowprojectsjobsmessageslist) - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* [DataflowProjectsJobsSnapshot](#dataflowprojectsjobssnapshot) - Snapshot the state of a streaming job.
* [DataflowProjectsJobsUpdate](#dataflowprojectsjobsupdate) - Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
* [DataflowProjectsJobsWorkItemsLease](#dataflowprojectsjobsworkitemslease) - Leases a dataflow WorkItem to run.
* [DataflowProjectsJobsWorkItemsReportStatus](#dataflowprojectsjobsworkitemsreportstatus) - Reports the status of dataflow WorkItems leased by a worker.
* [DataflowProjectsLocationsFlexTemplatesLaunch](#dataflowprojectslocationsflextemplateslaunch) - Launch a job with a FlexTemplate.
* [DataflowProjectsLocationsJobsCreate](#dataflowprojectslocationsjobscreate) - Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
* [DataflowProjectsLocationsJobsDebugGetConfig](#dataflowprojectslocationsjobsdebuggetconfig) - Get encoded debug configuration for component. Not cacheable.
* [DataflowProjectsLocationsJobsDebugSendCapture](#dataflowprojectslocationsjobsdebugsendcapture) - Send encoded debug capture data for component.
* [DataflowProjectsLocationsJobsGet](#dataflowprojectslocationsjobsget) - Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
* [DataflowProjectsLocationsJobsGetExecutionDetails](#dataflowprojectslocationsjobsgetexecutiondetails) - Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
* [DataflowProjectsLocationsJobsGetMetrics](#dataflowprojectslocationsjobsgetmetrics) - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* [DataflowProjectsLocationsJobsList](#dataflowprojectslocationsjobslist) - List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
* [DataflowProjectsLocationsJobsMessagesList](#dataflowprojectslocationsjobsmessageslist) - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* [DataflowProjectsLocationsJobsSnapshot](#dataflowprojectslocationsjobssnapshot) - Snapshot the state of a streaming job.
* [DataflowProjectsLocationsJobsSnapshotsList](#dataflowprojectslocationsjobssnapshotslist) - Lists snapshots.
* [DataflowProjectsLocationsJobsStagesGetExecutionDetails](#dataflowprojectslocationsjobsstagesgetexecutiondetails) - Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
* [DataflowProjectsLocationsJobsUpdate](#dataflowprojectslocationsjobsupdate) - Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
* [DataflowProjectsLocationsJobsWorkItemsLease](#dataflowprojectslocationsjobsworkitemslease) - Leases a dataflow WorkItem to run.
* [DataflowProjectsLocationsJobsWorkItemsReportStatus](#dataflowprojectslocationsjobsworkitemsreportstatus) - Reports the status of dataflow WorkItems leased by a worker.
* [DataflowProjectsLocationsSnapshotsDelete](#dataflowprojectslocationssnapshotsdelete) - Deletes a snapshot.
* [DataflowProjectsLocationsSnapshotsGet](#dataflowprojectslocationssnapshotsget) - Gets information about a snapshot.
* [DataflowProjectsLocationsSnapshotsList](#dataflowprojectslocationssnapshotslist) - Lists snapshots.
* [DataflowProjectsLocationsTemplatesCreate](#dataflowprojectslocationstemplatescreate) - Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
* [DataflowProjectsLocationsTemplatesGet](#dataflowprojectslocationstemplatesget) - Get the template associated with a template.
* [DataflowProjectsLocationsTemplatesLaunch](#dataflowprojectslocationstemplateslaunch) - Launch a template.
* [DataflowProjectsLocationsWorkerMessages](#dataflowprojectslocationsworkermessages) - Send a worker_message to the service.
* [DataflowProjectsSnapshotsGet](#dataflowprojectssnapshotsget) - Gets information about a snapshot.
* [DataflowProjectsSnapshotsList](#dataflowprojectssnapshotslist) - Lists snapshots.
* [DataflowProjectsTemplatesCreate](#dataflowprojectstemplatescreate) - Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
* [DataflowProjectsTemplatesGet](#dataflowprojectstemplatesget) - Get the template associated with a template.
* [DataflowProjectsTemplatesLaunch](#dataflowprojectstemplateslaunch) - Launch a template.
* [DataflowProjectsWorkerMessages](#dataflowprojectsworkermessages) - Send a worker_message to the service.

## DataflowProjectsDeleteSnapshots

Deletes a snapshot.

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
    res, err := s.Projects.DataflowProjectsDeleteSnapshots(ctx, operations.DataflowProjectsDeleteSnapshotsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("suscipit"),
        Location: sdk.String("molestiae"),
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "placeat",
        QuotaUser: sdk.String("voluptatum"),
        SnapshotID: sdk.String("iusto"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.DataflowProjectsDeleteSnapshotsSecurity{
        Option1: &operations.DataflowProjectsDeleteSnapshotsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSnapshotResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsJobsAggregated

List the jobs of a project across all regions.

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
    res, err := s.Projects.DataflowProjectsJobsAggregated(ctx, operations.DataflowProjectsJobsAggregatedRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("veritatis"),
        Filter: operations.DataflowProjectsJobsAggregatedFilterEnumTerminated.ToPointer(),
        Key: sdk.String("perferendis"),
        Location: sdk.String("ipsam"),
        Name: sdk.String("Timmy Satterfield"),
        OauthToken: sdk.String("at"),
        PageSize: sdk.Int64(978619),
        PageToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quod",
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("totam"),
        View: operations.DataflowProjectsJobsAggregatedViewEnumJobViewDescription.ToPointer(),
    }, operations.DataflowProjectsJobsAggregatedSecurity{
        Option1: &operations.DataflowProjectsJobsAggregatedSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobsResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsJobsCreate

Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.

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
    res, err := s.Projects.DataflowProjectsJobsCreate(ctx, operations.DataflowProjectsJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        JobInput: &shared.JobInput{
            ClientRequestID: sdk.String("dicta"),
            CreateTime: sdk.String("nam"),
            CreatedFromSnapshotID: sdk.String("officia"),
            CurrentState: shared.JobCurrentStateEnumJobStateDraining.ToPointer(),
            CurrentStateTime: sdk.String("fugit"),
            Environment: &shared.EnvironmentInput{
                ClusterManagerAPIService: sdk.String("deleniti"),
                Dataset: sdk.String("hic"),
                DebugOptions: &shared.DebugOptions{
                    EnableHotKeyLogging: sdk.Bool(false),
                },
                Experiments: []string{
                    "totam",
                    "beatae",
                    "commodi",
                    "molestiae",
                },
                FlexResourceSchedulingGoal: shared.EnvironmentFlexResourceSchedulingGoalEnumFlexrsUnspecified.ToPointer(),
                InternalExperiments: map[string]interface{}{
                    "impedit": "cum",
                },
                SDKPipelineOptions: map[string]interface{}{
                    "ipsum": "excepturi",
                    "aspernatur": "perferendis",
                },
                ServiceAccountEmail: sdk.String("ad"),
                ServiceKmsKeyName: sdk.String("natus"),
                ServiceOptions: []string{
                    "iste",
                },
                TempStoragePrefix: sdk.String("dolor"),
                UserAgent: map[string]interface{}{
                    "laboriosam": "hic",
                    "saepe": "fuga",
                    "in": "corporis",
                },
                Version: map[string]interface{}{
                    "iure": "saepe",
                    "quidem": "architecto",
                    "ipsa": "reiciendis",
                },
                WorkerPools: []shared.WorkerPool{
                    shared.WorkerPool{
                        AutoscalingSettings: &shared.AutoscalingSettings{
                            Algorithm: shared.AutoscalingSettingsAlgorithmEnumAutoscalingAlgorithmNone.ToPointer(),
                            MaxNumWorkers: sdk.Int(670638),
                        },
                        DataDisks: []shared.Disk{
                            shared.Disk{
                                DiskType: sdk.String("dolorem"),
                                MountPoint: sdk.String("corporis"),
                                SizeGb: sdk.Int(128926),
                            },
                        },
                        DefaultPackageSet: shared.WorkerPoolDefaultPackageSetEnumDefaultPackageSetPython.ToPointer(),
                        DiskSizeGb: sdk.Int(315428),
                        DiskSourceImage: sdk.String("omnis"),
                        DiskType: sdk.String("nemo"),
                        IPConfiguration: shared.WorkerPoolIPConfigurationEnumWorkerIPUnspecified.ToPointer(),
                        Kind: sdk.String("excepturi"),
                        MachineType: sdk.String("accusantium"),
                        Metadata: map[string]string{
                            "culpa": "doloribus",
                            "sapiente": "architecto",
                        },
                        Network: sdk.String("mollitia"),
                        NumThreadsPerWorker: sdk.Int(208876),
                        NumWorkers: sdk.Int(635059),
                        OnHostMaintenance: sdk.String("consequuntur"),
                        Packages: []shared.Package{
                            shared.Package{
                                Location: sdk.String("mollitia"),
                                Name: sdk.String("Francis Jerde"),
                            },
                            shared.Package{
                                Location: sdk.String("velit"),
                                Name: sdk.String("Miss Eugene Hauck"),
                            },
                            shared.Package{
                                Location: sdk.String("enim"),
                                Name: sdk.String("Angelica Dietrich"),
                            },
                            shared.Package{
                                Location: sdk.String("id"),
                                Name: sdk.String("Richard Boyer"),
                            },
                        },
                        PoolArgs: map[string]interface{}{
                            "quasi": "reiciendis",
                            "voluptatibus": "vero",
                            "nihil": "praesentium",
                        },
                        SDKHarnessContainerImages: []shared.SDKHarnessContainerImage{
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "omnis",
                                },
                                ContainerImage: sdk.String("voluptate"),
                                EnvironmentID: sdk.String("cum"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "doloremque",
                                },
                                ContainerImage: sdk.String("reprehenderit"),
                                EnvironmentID: sdk.String("ut"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "dicta",
                                    "corporis",
                                    "dolore",
                                    "iusto",
                                },
                                ContainerImage: sdk.String("dicta"),
                                EnvironmentID: sdk.String("harum"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "accusamus",
                                    "commodi",
                                },
                                ContainerImage: sdk.String("repudiandae"),
                                EnvironmentID: sdk.String("quae"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                        },
                        Subnetwork: sdk.String("ipsum"),
                        TaskrunnerSettings: &shared.TaskRunnerSettings{
                            Alsologtostderr: sdk.Bool(false),
                            BaseTaskDir: sdk.String("quidem"),
                            BaseURL: sdk.String("molestias"),
                            CommandlinesFileName: sdk.String("excepturi"),
                            ContinueOnException: sdk.Bool(false),
                            DataflowAPIVersion: sdk.String("pariatur"),
                            HarnessCommand: sdk.String("modi"),
                            LanguageHint: sdk.String("praesentium"),
                            LogDir: sdk.String("rem"),
                            LogToSerialconsole: sdk.Bool(false),
                            LogUploadLocation: sdk.String("voluptates"),
                            OauthScopes: []string{
                                "repudiandae",
                            },
                            ParallelWorkerSettings: &shared.WorkerSettings{
                                BaseURL: sdk.String("sint"),
                                ReportingEnabled: sdk.Bool(false),
                                ServicePath: sdk.String("veritatis"),
                                ShuffleServicePath: sdk.String("itaque"),
                                TempStoragePrefix: sdk.String("incidunt"),
                                WorkerID: sdk.String("enim"),
                            },
                            StreamingWorkerMainClass: sdk.String("consequatur"),
                            TaskGroup: sdk.String("est"),
                            TaskUser: sdk.String("quibusdam"),
                            TempStoragePrefix: sdk.String("explicabo"),
                            VMID: sdk.String("deserunt"),
                            WorkflowFileName: sdk.String("distinctio"),
                        },
                        TeardownPolicy: shared.WorkerPoolTeardownPolicyEnumTeardownNever.ToPointer(),
                        WorkerHarnessContainerImage: sdk.String("labore"),
                        Zone: sdk.String("modi"),
                    },
                    shared.WorkerPool{
                        AutoscalingSettings: &shared.AutoscalingSettings{
                            Algorithm: shared.AutoscalingSettingsAlgorithmEnumAutoscalingAlgorithmUnknown.ToPointer(),
                            MaxNumWorkers: sdk.Int(397821),
                        },
                        DataDisks: []shared.Disk{
                            shared.Disk{
                                DiskType: sdk.String("quos"),
                                MountPoint: sdk.String("perferendis"),
                                SizeGb: sdk.Int(164940),
                            },
                            shared.Disk{
                                DiskType: sdk.String("assumenda"),
                                MountPoint: sdk.String("ipsam"),
                                SizeGb: sdk.Int(4695),
                            },
                            shared.Disk{
                                DiskType: sdk.String("fugit"),
                                MountPoint: sdk.String("dolorum"),
                                SizeGb: sdk.Int(569618),
                            },
                        },
                        DefaultPackageSet: shared.WorkerPoolDefaultPackageSetEnumDefaultPackageSetNone.ToPointer(),
                        DiskSizeGb: sdk.Int(703737),
                        DiskSourceImage: sdk.String("tempore"),
                        DiskType: sdk.String("labore"),
                        IPConfiguration: shared.WorkerPoolIPConfigurationEnumWorkerIPPrivate.ToPointer(),
                        Kind: sdk.String("eum"),
                        MachineType: sdk.String("non"),
                        Metadata: map[string]string{
                            "sint": "aliquid",
                            "provident": "necessitatibus",
                            "sint": "officia",
                            "dolor": "debitis",
                        },
                        Network: sdk.String("a"),
                        NumThreadsPerWorker: sdk.Int(680056),
                        NumWorkers: sdk.Int(447125),
                        OnHostMaintenance: sdk.String("in"),
                        Packages: []shared.Package{
                            shared.Package{
                                Location: sdk.String("maiores"),
                                Name: sdk.String("Keith Gulgowski"),
                            },
                            shared.Package{
                                Location: sdk.String("ea"),
                                Name: sdk.String("Kayla Thompson"),
                            },
                            shared.Package{
                                Location: sdk.String("enim"),
                                Name: sdk.String("Toby Pouros"),
                            },
                            shared.Package{
                                Location: sdk.String("id"),
                                Name: sdk.String("Jaime Will"),
                            },
                        },
                        PoolArgs: map[string]interface{}{
                            "vel": "natus",
                            "omnis": "molestiae",
                        },
                        SDKHarnessContainerImages: []shared.SDKHarnessContainerImage{
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "magnam",
                                    "distinctio",
                                },
                                ContainerImage: sdk.String("id"),
                                EnvironmentID: sdk.String("labore"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                        },
                        Subnetwork: sdk.String("labore"),
                        TaskrunnerSettings: &shared.TaskRunnerSettings{
                            Alsologtostderr: sdk.Bool(false),
                            BaseTaskDir: sdk.String("suscipit"),
                            BaseURL: sdk.String("natus"),
                            CommandlinesFileName: sdk.String("nobis"),
                            ContinueOnException: sdk.Bool(false),
                            DataflowAPIVersion: sdk.String("eum"),
                            HarnessCommand: sdk.String("vero"),
                            LanguageHint: sdk.String("aspernatur"),
                            LogDir: sdk.String("architecto"),
                            LogToSerialconsole: sdk.Bool(false),
                            LogUploadLocation: sdk.String("magnam"),
                            OauthScopes: []string{
                                "excepturi",
                            },
                            ParallelWorkerSettings: &shared.WorkerSettings{
                                BaseURL: sdk.String("ullam"),
                                ReportingEnabled: sdk.Bool(false),
                                ServicePath: sdk.String("provident"),
                                ShuffleServicePath: sdk.String("quos"),
                                TempStoragePrefix: sdk.String("sint"),
                                WorkerID: sdk.String("accusantium"),
                            },
                            StreamingWorkerMainClass: sdk.String("mollitia"),
                            TaskGroup: sdk.String("reiciendis"),
                            TaskUser: sdk.String("mollitia"),
                            TempStoragePrefix: sdk.String("ad"),
                            VMID: sdk.String("eum"),
                            WorkflowFileName: sdk.String("dolor"),
                        },
                        TeardownPolicy: shared.WorkerPoolTeardownPolicyEnumTeardownNever.ToPointer(),
                        WorkerHarnessContainerImage: sdk.String("odit"),
                        Zone: sdk.String("nemo"),
                    },
                    shared.WorkerPool{
                        AutoscalingSettings: &shared.AutoscalingSettings{
                            Algorithm: shared.AutoscalingSettingsAlgorithmEnumAutoscalingAlgorithmUnknown.ToPointer(),
                            MaxNumWorkers: sdk.Int(435865),
                        },
                        DataDisks: []shared.Disk{
                            shared.Disk{
                                DiskType: sdk.String("debitis"),
                                MountPoint: sdk.String("eius"),
                                SizeGb: sdk.Int(806194),
                            },
                            shared.Disk{
                                DiskType: sdk.String("deleniti"),
                                MountPoint: sdk.String("facilis"),
                                SizeGb: sdk.Int(447926),
                            },
                            shared.Disk{
                                DiskType: sdk.String("architecto"),
                                MountPoint: sdk.String("architecto"),
                                SizeGb: sdk.Int(919483),
                            },
                            shared.Disk{
                                DiskType: sdk.String("ullam"),
                                MountPoint: sdk.String("expedita"),
                                SizeGb: sdk.Int(469249),
                            },
                        },
                        DefaultPackageSet: shared.WorkerPoolDefaultPackageSetEnumDefaultPackageSetPython.ToPointer(),
                        DiskSizeGb: sdk.Int(841140),
                        DiskSourceImage: sdk.String("sed"),
                        DiskType: sdk.String("saepe"),
                        IPConfiguration: shared.WorkerPoolIPConfigurationEnumWorkerIPPrivate.ToPointer(),
                        Kind: sdk.String("accusantium"),
                        MachineType: sdk.String("consequuntur"),
                        Metadata: map[string]string{
                            "natus": "magni",
                            "sunt": "quo",
                            "illum": "pariatur",
                        },
                        Network: sdk.String("maxime"),
                        NumThreadsPerWorker: sdk.Int(411397),
                        NumWorkers: sdk.Int(569101),
                        OnHostMaintenance: sdk.String("odit"),
                        Packages: []shared.Package{
                            shared.Package{
                                Location: sdk.String("accusantium"),
                                Name: sdk.String("Ebony Predovic"),
                            },
                            shared.Package{
                                Location: sdk.String("autem"),
                                Name: sdk.String("Gary Streich"),
                            },
                        },
                        PoolArgs: map[string]interface{}{
                            "fugiat": "amet",
                        },
                        SDKHarnessContainerImages: []shared.SDKHarnessContainerImage{
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "corporis",
                                    "hic",
                                    "libero",
                                    "nobis",
                                },
                                ContainerImage: sdk.String("dolores"),
                                EnvironmentID: sdk.String("quis"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                        },
                        Subnetwork: sdk.String("totam"),
                        TaskrunnerSettings: &shared.TaskRunnerSettings{
                            Alsologtostderr: sdk.Bool(false),
                            BaseTaskDir: sdk.String("dignissimos"),
                            BaseURL: sdk.String("eaque"),
                            CommandlinesFileName: sdk.String("quis"),
                            ContinueOnException: sdk.Bool(false),
                            DataflowAPIVersion: sdk.String("nesciunt"),
                            HarnessCommand: sdk.String("eos"),
                            LanguageHint: sdk.String("perferendis"),
                            LogDir: sdk.String("dolores"),
                            LogToSerialconsole: sdk.Bool(false),
                            LogUploadLocation: sdk.String("minus"),
                            OauthScopes: []string{
                                "dolor",
                                "vero",
                            },
                            ParallelWorkerSettings: &shared.WorkerSettings{
                                BaseURL: sdk.String("nostrum"),
                                ReportingEnabled: sdk.Bool(false),
                                ServicePath: sdk.String("hic"),
                                ShuffleServicePath: sdk.String("recusandae"),
                                TempStoragePrefix: sdk.String("omnis"),
                                WorkerID: sdk.String("facilis"),
                            },
                            StreamingWorkerMainClass: sdk.String("perspiciatis"),
                            TaskGroup: sdk.String("voluptatem"),
                            TaskUser: sdk.String("porro"),
                            TempStoragePrefix: sdk.String("consequuntur"),
                            VMID: sdk.String("blanditiis"),
                            WorkflowFileName: sdk.String("error"),
                        },
                        TeardownPolicy: shared.WorkerPoolTeardownPolicyEnumTeardownPolicyUnknown.ToPointer(),
                        WorkerHarnessContainerImage: sdk.String("occaecati"),
                        Zone: sdk.String("rerum"),
                    },
                },
                WorkerRegion: sdk.String("adipisci"),
                WorkerZone: sdk.String("asperiores"),
            },
            ExecutionInfo: &shared.JobExecutionInfo{
                Stages: map[string]shared.JobExecutionStageInfo{
                    "modi": shared.JobExecutionStageInfo{
                        StepName: []string{
                            "dolorum",
                            "deleniti",
                            "pariatur",
                        },
                    },
                    "provident": shared.JobExecutionStageInfo{
                        StepName: []string{
                            "libero",
                            "delectus",
                            "quaerat",
                            "quos",
                        },
                    },
                    "aliquid": shared.JobExecutionStageInfo{
                        StepName: []string{
                            "dolorem",
                        },
                    },
                    "dolor": shared.JobExecutionStageInfo{
                        StepName: []string{
                            "ipsum",
                        },
                    },
                },
            },
            ID: sdk.String("f9b77f3a-4100-4674-abf6-9280d1ba77a8"),
            JobMetadata: &shared.JobMetadata{
                BigTableDetails: []shared.BigTableIODetails{
                    shared.BigTableIODetails{
                        InstanceID: sdk.String("necessitatibus"),
                        ProjectID: sdk.String("distinctio"),
                        TableID: sdk.String("asperiores"),
                    },
                    shared.BigTableIODetails{
                        InstanceID: sdk.String("nihil"),
                        ProjectID: sdk.String("ipsum"),
                        TableID: sdk.String("voluptate"),
                    },
                    shared.BigTableIODetails{
                        InstanceID: sdk.String("id"),
                        ProjectID: sdk.String("saepe"),
                        TableID: sdk.String("eius"),
                    },
                },
                BigqueryDetails: []shared.BigQueryIODetails{
                    shared.BigQueryIODetails{
                        Dataset: sdk.String("perferendis"),
                        ProjectID: sdk.String("amet"),
                        Query: sdk.String("optio"),
                        Table: sdk.String("accusamus"),
                    },
                },
                DatastoreDetails: []shared.DatastoreIODetails{
                    shared.DatastoreIODetails{
                        Namespace: sdk.String("saepe"),
                        ProjectID: sdk.String("suscipit"),
                    },
                    shared.DatastoreIODetails{
                        Namespace: sdk.String("deserunt"),
                        ProjectID: sdk.String("provident"),
                    },
                },
                FileDetails: []shared.FileIODetails{
                    shared.FileIODetails{
                        FilePattern: sdk.String("repellendus"),
                    },
                    shared.FileIODetails{
                        FilePattern: sdk.String("totam"),
                    },
                },
                PubsubDetails: []shared.PubSubIODetails{
                    shared.PubSubIODetails{
                        Subscription: sdk.String("alias"),
                        Topic: sdk.String("at"),
                    },
                    shared.PubSubIODetails{
                        Subscription: sdk.String("quaerat"),
                        Topic: sdk.String("tempora"),
                    },
                    shared.PubSubIODetails{
                        Subscription: sdk.String("vel"),
                        Topic: sdk.String("quod"),
                    },
                },
                SDKVersion: &shared.SDKVersion{
                    SDKSupportStatus: shared.SDKVersionSDKSupportStatusEnumUnsupported.ToPointer(),
                    Version: sdk.String("qui"),
                    VersionDisplayName: sdk.String("dolorum"),
                },
                SpannerDetails: []shared.SpannerIODetails{
                    shared.SpannerIODetails{
                        DatabaseID: sdk.String("esse"),
                        InstanceID: sdk.String("harum"),
                        ProjectID: sdk.String("iusto"),
                    },
                    shared.SpannerIODetails{
                        DatabaseID: sdk.String("ipsum"),
                        InstanceID: sdk.String("quisquam"),
                        ProjectID: sdk.String("tenetur"),
                    },
                    shared.SpannerIODetails{
                        DatabaseID: sdk.String("amet"),
                        InstanceID: sdk.String("tempore"),
                        ProjectID: sdk.String("accusamus"),
                    },
                    shared.SpannerIODetails{
                        DatabaseID: sdk.String("numquam"),
                        InstanceID: sdk.String("enim"),
                        ProjectID: sdk.String("dolorem"),
                    },
                },
                UserDisplayProperties: map[string]string{
                    "totam": "nihil",
                    "sit": "expedita",
                    "neque": "sed",
                    "vel": "libero",
                },
            },
            Labels: map[string]string{
                "deserunt": "quam",
                "ipsum": "incidunt",
            },
            Location: sdk.String("qui"),
            Name: sdk.String("Simon Stracke MD"),
            PipelineDescription: &shared.PipelineDescription{
                DisplayData: []shared.DisplayData{
                    shared.DisplayData{
                        BoolValue: sdk.Bool(false),
                        DurationValue: sdk.String("incidunt"),
                        FloatValue: sdk.Float32(1320.68),
                        Int64Value: sdk.String("dolores"),
                        JavaClassValue: sdk.String("distinctio"),
                        Key: sdk.String("facilis"),
                        Label: sdk.String("aliquid"),
                        Namespace: sdk.String("quam"),
                        ShortStrValue: sdk.String("molestias"),
                        StrValue: sdk.String("temporibus"),
                        TimestampValue: sdk.String("qui"),
                        URL: sdk.String("neque"),
                    },
                    shared.DisplayData{
                        BoolValue: sdk.Bool(false),
                        DurationValue: sdk.String("fugit"),
                        FloatValue: sdk.Float32(1649.59),
                        Int64Value: sdk.String("odio"),
                        JavaClassValue: sdk.String("sunt"),
                        Key: sdk.String("ullam"),
                        Label: sdk.String("nam"),
                        Namespace: sdk.String("hic"),
                        ShortStrValue: sdk.String("voluptatem"),
                        StrValue: sdk.String("cumque"),
                        TimestampValue: sdk.String("soluta"),
                        URL: sdk.String("nobis"),
                    },
                    shared.DisplayData{
                        BoolValue: sdk.Bool(false),
                        DurationValue: sdk.String("et"),
                        FloatValue: sdk.Float32(9037.2),
                        Int64Value: sdk.String("ipsum"),
                        JavaClassValue: sdk.String("veritatis"),
                        Key: sdk.String("nobis"),
                        Label: sdk.String("quos"),
                        Namespace: sdk.String("tempore"),
                        ShortStrValue: sdk.String("cupiditate"),
                        StrValue: sdk.String("aperiam"),
                        TimestampValue: sdk.String("delectus"),
                        URL: sdk.String("dolorem"),
                    },
                },
                ExecutionPipelineStage: []shared.ExecutionStageSummary{
                    shared.ExecutionStageSummary{
                        ComponentSource: []shared.ComponentSource{
                            shared.ComponentSource{
                                Name: sdk.String("Mr. Sonya Bradtke"),
                                OriginalTransformOrCollection: sdk.String("itaque"),
                                UserName: sdk.String("Adelbert_Ortiz98"),
                            },
                            shared.ComponentSource{
                                Name: sdk.String("Olivia McGlynn IV"),
                                OriginalTransformOrCollection: sdk.String("odio"),
                                UserName: sdk.String("Kris_Wolff60"),
                            },
                        },
                        ComponentTransform: []shared.ComponentTransform{
                            shared.ComponentTransform{
                                Name: sdk.String("Dixie Klocko"),
                                OriginalTransform: sdk.String("tenetur"),
                                UserName: sdk.String("Jeramie_Weissnat48"),
                            },
                            shared.ComponentTransform{
                                Name: sdk.String("Malcolm Swift"),
                                OriginalTransform: sdk.String("quibusdam"),
                                UserName: sdk.String("Rosina_Dickinson"),
                            },
                        },
                        ID: sdk.String("0f5d2cff-7c70-4a45-a26d-436813f16d9f"),
                        InputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Devin Ullrich"),
                                OriginalTransformOrCollection: sdk.String("corporis"),
                                SizeBytes: sdk.String("veniam"),
                                UserName: sdk.String("Greg40"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Glenn Walter"),
                                OriginalTransformOrCollection: sdk.String("eaque"),
                                SizeBytes: sdk.String("a"),
                                UserName: sdk.String("Mohammed53"),
                            },
                        },
                        Kind: shared.ExecutionStageSummaryKindEnumConstantKind.ToPointer(),
                        Name: sdk.String("Mrs. Denise Tillman MD"),
                        OutputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Lee Kemmer"),
                                OriginalTransformOrCollection: sdk.String("quas"),
                                SizeBytes: sdk.String("assumenda"),
                                UserName: sdk.String("Sabina.Hoeger27"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Ms. Janice McLaughlin"),
                                OriginalTransformOrCollection: sdk.String("odio"),
                                SizeBytes: sdk.String("eius"),
                                UserName: sdk.String("Jaden_Klocko"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Yvette Stehr"),
                                OriginalTransformOrCollection: sdk.String("suscipit"),
                                SizeBytes: sdk.String("assumenda"),
                                UserName: sdk.String("Chet.Lang5"),
                            },
                        },
                        PrerequisiteStage: []string{
                            "quidem",
                            "neque",
                            "quo",
                        },
                    },
                    shared.ExecutionStageSummary{
                        ComponentSource: []shared.ComponentSource{
                            shared.ComponentSource{
                                Name: sdk.String("Wilbur Gerlach"),
                                OriginalTransformOrCollection: sdk.String("ab"),
                                UserName: sdk.String("Lacey89"),
                            },
                            shared.ComponentSource{
                                Name: sdk.String("Kelly Donnelly"),
                                OriginalTransformOrCollection: sdk.String("recusandae"),
                                UserName: sdk.String("Alvena.Rau7"),
                            },
                            shared.ComponentSource{
                                Name: sdk.String("Christy Tillman"),
                                OriginalTransformOrCollection: sdk.String("occaecati"),
                                UserName: sdk.String("Harvey64"),
                            },
                            shared.ComponentSource{
                                Name: sdk.String("Carol Sawayn"),
                                OriginalTransformOrCollection: sdk.String("praesentium"),
                                UserName: sdk.String("Carol68"),
                            },
                        },
                        ComponentTransform: []shared.ComponentTransform{
                            shared.ComponentTransform{
                                Name: sdk.String("Leah Champlin"),
                                OriginalTransform: sdk.String("fugit"),
                                UserName: sdk.String("Verlie12"),
                            },
                            shared.ComponentTransform{
                                Name: sdk.String("Ms. Marion Little"),
                                OriginalTransform: sdk.String("accusamus"),
                                UserName: sdk.String("Arnoldo_Koch87"),
                            },
                            shared.ComponentTransform{
                                Name: sdk.String("Frances Turner"),
                                OriginalTransform: sdk.String("molestiae"),
                                UserName: sdk.String("Maximus71"),
                            },
                        },
                        ID: sdk.String("c0ab3c20-c4f3-4789-bd87-1f99dd2efd12"),
                        InputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Shannon Jacobi DVM"),
                                OriginalTransformOrCollection: sdk.String("vel"),
                                SizeBytes: sdk.String("in"),
                                UserName: sdk.String("Destinee_Rempel3"),
                            },
                        },
                        Kind: shared.ExecutionStageSummaryKindEnumGroupByKeyKind.ToPointer(),
                        Name: sdk.String("Samuel Hermiston"),
                        OutputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Nora Denesik"),
                                OriginalTransformOrCollection: sdk.String("deleniti"),
                                SizeBytes: sdk.String("itaque"),
                                UserName: sdk.String("Marilyne_Bradtke"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Lynette Bosco II"),
                                OriginalTransformOrCollection: sdk.String("veritatis"),
                                SizeBytes: sdk.String("consectetur"),
                                UserName: sdk.String("Dasia.Morar52"),
                            },
                        },
                        PrerequisiteStage: []string{
                            "laudantium",
                        },
                    },
                },
                OriginalPipelineTransform: []shared.TransformSummary{
                    shared.TransformSummary{
                        DisplayData: []shared.DisplayData{
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("ab"),
                                FloatValue: sdk.Float32(5445.91),
                                Int64Value: sdk.String("non"),
                                JavaClassValue: sdk.String("voluptatem"),
                                Key: sdk.String("dolor"),
                                Label: sdk.String("occaecati"),
                                Namespace: sdk.String("numquam"),
                                ShortStrValue: sdk.String("impedit"),
                                StrValue: sdk.String("explicabo"),
                                TimestampValue: sdk.String("voluptas"),
                                URL: sdk.String("aut"),
                            },
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("dignissimos"),
                                FloatValue: sdk.Float32(1154.84),
                                Int64Value: sdk.String("maiores"),
                                JavaClassValue: sdk.String("natus"),
                                Key: sdk.String("velit"),
                                Label: sdk.String("voluptatibus"),
                                Namespace: sdk.String("voluptas"),
                                ShortStrValue: sdk.String("asperiores"),
                                StrValue: sdk.String("aperiam"),
                                TimestampValue: sdk.String("ea"),
                                URL: sdk.String("quaerat"),
                            },
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("consequuntur"),
                                FloatValue: sdk.Float32(8315.2),
                                Int64Value: sdk.String("officia"),
                                JavaClassValue: sdk.String("maxime"),
                                Key: sdk.String("dignissimos"),
                                Label: sdk.String("officia"),
                                Namespace: sdk.String("asperiores"),
                                ShortStrValue: sdk.String("nemo"),
                                StrValue: sdk.String("quae"),
                                TimestampValue: sdk.String("quaerat"),
                                URL: sdk.String("porro"),
                            },
                        },
                        ID: sdk.String("c413aa63-aae8-4d67-864d-bb675fd5e60b"),
                        InputCollectionName: []string{
                            "in",
                        },
                        Kind: shared.TransformSummaryKindEnumFlattenKind.ToPointer(),
                        Name: sdk.String("Carroll Gerhold"),
                        OutputCollectionName: []string{
                            "quidem",
                            "saepe",
                            "necessitatibus",
                            "dolore",
                        },
                    },
                    shared.TransformSummary{
                        DisplayData: []shared.DisplayData{
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("asperiores"),
                                FloatValue: sdk.Float32(2415.45),
                                Int64Value: sdk.String("non"),
                                JavaClassValue: sdk.String("amet"),
                                Key: sdk.String("beatae"),
                                Label: sdk.String("dignissimos"),
                                Namespace: sdk.String("a"),
                                ShortStrValue: sdk.String("debitis"),
                                StrValue: sdk.String("consectetur"),
                                TimestampValue: sdk.String("corporis"),
                                URL: sdk.String("harum"),
                            },
                        },
                        ID: sdk.String("60eb1ea4-2655-45ba-bc28-744ed53b88f3"),
                        InputCollectionName: []string{
                            "corrupti",
                            "pariatur",
                            "totam",
                        },
                        Kind: shared.TransformSummaryKindEnumShuffleKind.ToPointer(),
                        Name: sdk.String("Della Bailey"),
                        OutputCollectionName: []string{
                            "explicabo",
                            "asperiores",
                            "facilis",
                            "voluptate",
                        },
                    },
                },
                StepNamesHash: sdk.String("expedita"),
            },
            ProjectID: sdk.String("ab"),
            ReplaceJobID: sdk.String("iste"),
            ReplacedByJobID: sdk.String("dolore"),
            RequestedState: shared.JobRequestedStateEnumJobStateDrained.ToPointer(),
            RuntimeUpdatableParams: &shared.RuntimeUpdatableParams{
                MaxNumWorkers: sdk.Int(152354),
                MinNumWorkers: sdk.Int(447516),
            },
            SatisfiesPzs: sdk.Bool(false),
            StageStates: []shared.ExecutionStageState{
                shared.ExecutionStageState{
                    CurrentStateTime: sdk.String("quidem"),
                    ExecutionStageName: sdk.String("explicabo"),
                    ExecutionStageState: shared.ExecutionStageStateExecutionStageStateEnumJobStateFailed.ToPointer(),
                },
                shared.ExecutionStageState{
                    CurrentStateTime: sdk.String("unde"),
                    ExecutionStageName: sdk.String("architecto"),
                    ExecutionStageState: shared.ExecutionStageStateExecutionStageStateEnumJobStateFailed.ToPointer(),
                },
            },
            StartTime: sdk.String("sapiente"),
            Steps: []shared.Step{
                shared.Step{
                    Kind: sdk.String("illo"),
                    Name: sdk.String("Thomas Lockman"),
                    Properties: map[string]interface{}{
                        "provident": "eius",
                    },
                },
                shared.Step{
                    Kind: sdk.String("necessitatibus"),
                    Name: sdk.String("Rosemary McClure"),
                    Properties: map[string]interface{}{
                        "tempora": "voluptate",
                        "reiciendis": "ex",
                    },
                },
                shared.Step{
                    Kind: sdk.String("sit"),
                    Name: sdk.String("Cecelia Lakin"),
                    Properties: map[string]interface{}{
                        "ipsam": "debitis",
                        "rem": "sit",
                    },
                },
                shared.Step{
                    Kind: sdk.String("nobis"),
                    Name: sdk.String("Floyd Harber"),
                    Properties: map[string]interface{}{
                        "magni": "aperiam",
                        "saepe": "numquam",
                        "veniam": "in",
                        "officiis": "beatae",
                    },
                },
            },
            StepsLocation: sdk.String("laudantium"),
            TempFiles: []string{
                "praesentium",
                "cum",
            },
            TransformNameMapping: map[string]string{
                "dolorum": "voluptatum",
                "error": "hic",
            },
            Type: shared.JobTypeEnumJobTypeStreaming.ToPointer(),
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("nostrum"),
        Key: sdk.String("officia"),
        Location: sdk.String("dolorum"),
        OauthToken: sdk.String("corrupti"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "accusamus",
        QuotaUser: sdk.String("tempora"),
        ReplaceJobID: sdk.String("atque"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("ut"),
        View: operations.DataflowProjectsJobsCreateViewEnumJobViewDescription.ToPointer(),
    }, operations.DataflowProjectsJobsCreateSecurity{
        Option1: &operations.DataflowProjectsJobsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## DataflowProjectsJobsDebugGetConfig

Get encoded debug configuration for component. Not cacheable.

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
    res, err := s.Projects.DataflowProjectsJobsDebugGetConfig(ctx, operations.DataflowProjectsJobsDebugGetConfigRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GetDebugConfigRequest: &shared.GetDebugConfigRequest{
            ComponentID: sdk.String("culpa"),
            Location: sdk.String("expedita"),
            WorkerID: sdk.String("magnam"),
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("sit"),
        JobID: "voluptatum",
        Key: sdk.String("quas"),
        OauthToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "corporis",
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("ex"),
    }, operations.DataflowProjectsJobsDebugGetConfigSecurity{
        Option1: &operations.DataflowProjectsJobsDebugGetConfigSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDebugConfigResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsJobsDebugSendCapture

Send encoded debug capture data for component.

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
    res, err := s.Projects.DataflowProjectsJobsDebugSendCapture(ctx, operations.DataflowProjectsJobsDebugSendCaptureRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SendDebugCaptureRequest: &shared.SendDebugCaptureRequest{
            ComponentID: sdk.String("sit"),
            Data: sdk.String("vel"),
            DataFormat: shared.SendDebugCaptureRequestDataFormatEnumRaw.ToPointer(),
            Location: sdk.String("saepe"),
            WorkerID: sdk.String("error"),
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("dolorem"),
        JobID: "harum",
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "occaecati",
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("atque"),
    }, operations.DataflowProjectsJobsDebugSendCaptureSecurity{
        Option1: &operations.DataflowProjectsJobsDebugSendCaptureSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendDebugCaptureResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsJobsGet

Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.

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
    res, err := s.Projects.DataflowProjectsJobsGet(ctx, operations.DataflowProjectsJobsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("alias"),
        JobID: "amet",
        Key: sdk.String("deserunt"),
        Location: sdk.String("voluptate"),
        OauthToken: sdk.String("unde"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "reiciendis",
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("delectus"),
        View: operations.DataflowProjectsJobsGetViewEnumJobViewDescription.ToPointer(),
    }, operations.DataflowProjectsJobsGetSecurity{
        Option1: &operations.DataflowProjectsJobsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## DataflowProjectsJobsGetMetrics

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

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
    res, err := s.Projects.DataflowProjectsJobsGetMetrics(ctx, operations.DataflowProjectsJobsGetMetricsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        Fields: sdk.String("facere"),
        JobID: "fuga",
        Key: sdk.String("praesentium"),
        Location: sdk.String("mollitia"),
        OauthToken: sdk.String("veniam"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "voluptatem",
        QuotaUser: sdk.String("quisquam"),
        StartTime: sdk.String("repudiandae"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("atque"),
    }, operations.DataflowProjectsJobsGetMetricsSecurity{
        Option1: &operations.DataflowProjectsJobsGetMetricsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobMetrics != nil {
        // handle response
    }
}
```

## DataflowProjectsJobsList

List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.

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
    res, err := s.Projects.DataflowProjectsJobsList(ctx, operations.DataflowProjectsJobsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("quidem"),
        Filter: operations.DataflowProjectsJobsListFilterEnumActive.ToPointer(),
        Key: sdk.String("et"),
        Location: sdk.String("esse"),
        Name: sdk.String("Angelina Jenkins"),
        OauthToken: sdk.String("officiis"),
        PageSize: sdk.Int64(886961),
        PageToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "natus",
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("ex"),
        View: operations.DataflowProjectsJobsListViewEnumJobViewDescription.ToPointer(),
    }, operations.DataflowProjectsJobsListSecurity{
        Option1: &operations.DataflowProjectsJobsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobsResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsJobsMessagesList

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

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
    res, err := s.Projects.DataflowProjectsJobsMessagesList(ctx, operations.DataflowProjectsJobsMessagesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("blanditiis"),
        EndTime: sdk.String("suscipit"),
        Fields: sdk.String("repudiandae"),
        JobID: "atque",
        Key: sdk.String("atque"),
        Location: sdk.String("sunt"),
        MinimumImportance: operations.DataflowProjectsJobsMessagesListMinimumImportanceEnumJobMessageError.ToPointer(),
        OauthToken: sdk.String("dolorum"),
        PageSize: sdk.Int64(829898),
        PageToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "reiciendis",
        QuotaUser: sdk.String("doloremque"),
        StartTime: sdk.String("repudiandae"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.DataflowProjectsJobsMessagesListSecurity{
        Option1: &operations.DataflowProjectsJobsMessagesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobMessagesResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsJobsSnapshot

Snapshot the state of a streaming job.

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
    res, err := s.Projects.DataflowProjectsJobsSnapshot(ctx, operations.DataflowProjectsJobsSnapshotRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SnapshotJobRequest: &shared.SnapshotJobRequest{
            Description: sdk.String("dolores"),
            Location: sdk.String("enim"),
            SnapshotSources: sdk.Bool(false),
            TTL: sdk.String("laboriosam"),
        },
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("molestias"),
        Fields: sdk.String("magnam"),
        JobID: "saepe",
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "officiis",
        QuotaUser: sdk.String("perspiciatis"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("adipisci"),
    }, operations.DataflowProjectsJobsSnapshotSecurity{
        Option1: &operations.DataflowProjectsJobsSnapshotSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Snapshot != nil {
        // handle response
    }
}
```

## DataflowProjectsJobsUpdate

Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.

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
    res, err := s.Projects.DataflowProjectsJobsUpdate(ctx, operations.DataflowProjectsJobsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        JobInput: &shared.JobInput{
            ClientRequestID: sdk.String("occaecati"),
            CreateTime: sdk.String("consequuntur"),
            CreatedFromSnapshotID: sdk.String("fugit"),
            CurrentState: shared.JobCurrentStateEnumJobStateDrained.ToPointer(),
            CurrentStateTime: sdk.String("quis"),
            Environment: &shared.EnvironmentInput{
                ClusterManagerAPIService: sdk.String("reprehenderit"),
                Dataset: sdk.String("error"),
                DebugOptions: &shared.DebugOptions{
                    EnableHotKeyLogging: sdk.Bool(false),
                },
                Experiments: []string{
                    "corporis",
                },
                FlexResourceSchedulingGoal: shared.EnvironmentFlexResourceSchedulingGoalEnumFlexrsCostOptimized.ToPointer(),
                InternalExperiments: map[string]interface{}{
                    "non": "vero",
                    "doloremque": "iure",
                    "ipsa": "totam",
                    "quae": "molestiae",
                },
                SDKPipelineOptions: map[string]interface{}{
                    "qui": "cum",
                    "iure": "necessitatibus",
                    "ratione": "laborum",
                    "distinctio": "voluptatum",
                },
                ServiceAccountEmail: sdk.String("rem"),
                ServiceKmsKeyName: sdk.String("aliquam"),
                ServiceOptions: []string{
                    "repellat",
                    "alias",
                },
                TempStoragePrefix: sdk.String("corporis"),
                UserAgent: map[string]interface{}{
                    "nihil": "mollitia",
                    "voluptas": "alias",
                    "maiores": "reiciendis",
                },
                Version: map[string]interface{}{
                    "id": "minima",
                },
                WorkerPools: []shared.WorkerPool{
                    shared.WorkerPool{
                        AutoscalingSettings: &shared.AutoscalingSettings{
                            Algorithm: shared.AutoscalingSettingsAlgorithmEnumAutoscalingAlgorithmBasic.ToPointer(),
                            MaxNumWorkers: sdk.Int(200364),
                        },
                        DataDisks: []shared.Disk{
                            shared.Disk{
                                DiskType: sdk.String("recusandae"),
                                MountPoint: sdk.String("omnis"),
                                SizeGb: sdk.Int(309251),
                            },
                        },
                        DefaultPackageSet: shared.WorkerPoolDefaultPackageSetEnumDefaultPackageSetNone.ToPointer(),
                        DiskSizeGb: sdk.Int(403218),
                        DiskSourceImage: sdk.String("ut"),
                        DiskType: sdk.String("culpa"),
                        IPConfiguration: shared.WorkerPoolIPConfigurationEnumWorkerIPUnspecified.ToPointer(),
                        Kind: sdk.String("debitis"),
                        MachineType: sdk.String("laudantium"),
                        Metadata: map[string]string{
                            "nemo": "recusandae",
                            "esse": "provident",
                        },
                        Network: sdk.String("quis"),
                        NumThreadsPerWorker: sdk.Int(431785),
                        NumWorkers: sdk.Int(970494),
                        OnHostMaintenance: sdk.String("provident"),
                        Packages: []shared.Package{
                            shared.Package{
                                Location: sdk.String("ullam"),
                                Name: sdk.String("Lynda Heathcote"),
                            },
                        },
                        PoolArgs: map[string]interface{}{
                            "animi": "ex",
                            "aliquid": "accusantium",
                            "repellat": "doloribus",
                            "ullam": "in",
                        },
                        SDKHarnessContainerImages: []shared.SDKHarnessContainerImage{
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "officia",
                                    "laborum",
                                    "placeat",
                                    "modi",
                                },
                                ContainerImage: sdk.String("voluptatibus"),
                                EnvironmentID: sdk.String("molestias"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "sapiente",
                                    "cumque",
                                    "vitae",
                                    "rerum",
                                },
                                ContainerImage: sdk.String("tempora"),
                                EnvironmentID: sdk.String("quis"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "fugit",
                                },
                                ContainerImage: sdk.String("cumque"),
                                EnvironmentID: sdk.String("quae"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                        },
                        Subnetwork: sdk.String("perferendis"),
                        TaskrunnerSettings: &shared.TaskRunnerSettings{
                            Alsologtostderr: sdk.Bool(false),
                            BaseTaskDir: sdk.String("velit"),
                            BaseURL: sdk.String("aspernatur"),
                            CommandlinesFileName: sdk.String("eum"),
                            ContinueOnException: sdk.Bool(false),
                            DataflowAPIVersion: sdk.String("eius"),
                            HarnessCommand: sdk.String("rem"),
                            LanguageHint: sdk.String("at"),
                            LogDir: sdk.String("impedit"),
                            LogToSerialconsole: sdk.Bool(false),
                            LogUploadLocation: sdk.String("eos"),
                            OauthScopes: []string{
                                "eum",
                                "dicta",
                                "minima",
                                "beatae",
                            },
                            ParallelWorkerSettings: &shared.WorkerSettings{
                                BaseURL: sdk.String("cupiditate"),
                                ReportingEnabled: sdk.Bool(false),
                                ServicePath: sdk.String("provident"),
                                ShuffleServicePath: sdk.String("earum"),
                                TempStoragePrefix: sdk.String("soluta"),
                                WorkerID: sdk.String("hic"),
                            },
                            StreamingWorkerMainClass: sdk.String("illum"),
                            TaskGroup: sdk.String("eaque"),
                            TaskUser: sdk.String("earum"),
                            TempStoragePrefix: sdk.String("perspiciatis"),
                            VMID: sdk.String("maiores"),
                            WorkflowFileName: sdk.String("debitis"),
                        },
                        TeardownPolicy: shared.WorkerPoolTeardownPolicyEnumTeardownAlways.ToPointer(),
                        WorkerHarnessContainerImage: sdk.String("porro"),
                        Zone: sdk.String("suscipit"),
                    },
                    shared.WorkerPool{
                        AutoscalingSettings: &shared.AutoscalingSettings{
                            Algorithm: shared.AutoscalingSettingsAlgorithmEnumAutoscalingAlgorithmUnknown.ToPointer(),
                            MaxNumWorkers: sdk.Int(147808),
                        },
                        DataDisks: []shared.Disk{
                            shared.Disk{
                                DiskType: sdk.String("fuga"),
                                MountPoint: sdk.String("ratione"),
                                SizeGb: sdk.Int(656762),
                            },
                            shared.Disk{
                                DiskType: sdk.String("necessitatibus"),
                                MountPoint: sdk.String("nulla"),
                                SizeGb: sdk.Int(8931),
                            },
                            shared.Disk{
                                DiskType: sdk.String("quasi"),
                                MountPoint: sdk.String("et"),
                                SizeGb: sdk.Int(497777),
                            },
                            shared.Disk{
                                DiskType: sdk.String("natus"),
                                MountPoint: sdk.String("occaecati"),
                                SizeGb: sdk.Int(382440),
                            },
                        },
                        DefaultPackageSet: shared.WorkerPoolDefaultPackageSetEnumDefaultPackageSetUnknown.ToPointer(),
                        DiskSizeGb: sdk.Int(96562),
                        DiskSourceImage: sdk.String("magni"),
                        DiskType: sdk.String("doloribus"),
                        IPConfiguration: shared.WorkerPoolIPConfigurationEnumWorkerIPPrivate.ToPointer(),
                        Kind: sdk.String("necessitatibus"),
                        MachineType: sdk.String("ipsa"),
                        Metadata: map[string]string{
                            "nihil": "molestiae",
                            "dicta": "iusto",
                        },
                        Network: sdk.String("esse"),
                        NumThreadsPerWorker: sdk.Int(508390),
                        NumWorkers: sdk.Int(979963),
                        OnHostMaintenance: sdk.String("reiciendis"),
                        Packages: []shared.Package{
                            shared.Package{
                                Location: sdk.String("architecto"),
                                Name: sdk.String("Brian Carroll"),
                            },
                            shared.Package{
                                Location: sdk.String("esse"),
                                Name: sdk.String("Miss Kim Jacobs II"),
                            },
                        },
                        PoolArgs: map[string]interface{}{
                            "expedita": "aliquid",
                            "officia": "suscipit",
                            "aliquid": "perferendis",
                            "eum": "voluptas",
                        },
                        SDKHarnessContainerImages: []shared.SDKHarnessContainerImage{
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "ab",
                                    "error",
                                    "possimus",
                                },
                                ContainerImage: sdk.String("voluptates"),
                                EnvironmentID: sdk.String("mollitia"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "libero",
                                    "ad",
                                    "deleniti",
                                },
                                ContainerImage: sdk.String("enim"),
                                EnvironmentID: sdk.String("vitae"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "ex",
                                    "quo",
                                    "ex",
                                    "ut",
                                },
                                ContainerImage: sdk.String("ad"),
                                EnvironmentID: sdk.String("expedita"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                        },
                        Subnetwork: sdk.String("voluptatem"),
                        TaskrunnerSettings: &shared.TaskRunnerSettings{
                            Alsologtostderr: sdk.Bool(false),
                            BaseTaskDir: sdk.String("molestias"),
                            BaseURL: sdk.String("cum"),
                            CommandlinesFileName: sdk.String("aliquid"),
                            ContinueOnException: sdk.Bool(false),
                            DataflowAPIVersion: sdk.String("beatae"),
                            HarnessCommand: sdk.String("voluptatum"),
                            LanguageHint: sdk.String("omnis"),
                            LogDir: sdk.String("veritatis"),
                            LogToSerialconsole: sdk.Bool(false),
                            LogUploadLocation: sdk.String("rerum"),
                            OauthScopes: []string{
                                "culpa",
                                "voluptatem",
                                "sapiente",
                            },
                            ParallelWorkerSettings: &shared.WorkerSettings{
                                BaseURL: sdk.String("officiis"),
                                ReportingEnabled: sdk.Bool(false),
                                ServicePath: sdk.String("architecto"),
                                ShuffleServicePath: sdk.String("fuga"),
                                TempStoragePrefix: sdk.String("pariatur"),
                                WorkerID: sdk.String("debitis"),
                            },
                            StreamingWorkerMainClass: sdk.String("voluptatem"),
                            TaskGroup: sdk.String("alias"),
                            TaskUser: sdk.String("deleniti"),
                            TempStoragePrefix: sdk.String("earum"),
                            VMID: sdk.String("ex"),
                            WorkflowFileName: sdk.String("sapiente"),
                        },
                        TeardownPolicy: shared.WorkerPoolTeardownPolicyEnumTeardownOnSuccess.ToPointer(),
                        WorkerHarnessContainerImage: sdk.String("minus"),
                        Zone: sdk.String("nemo"),
                    },
                },
                WorkerRegion: sdk.String("asperiores"),
                WorkerZone: sdk.String("ratione"),
            },
            ExecutionInfo: &shared.JobExecutionInfo{
                Stages: map[string]shared.JobExecutionStageInfo{
                    "perferendis": shared.JobExecutionStageInfo{
                        StepName: []string{
                            "totam",
                            "impedit",
                            "quibusdam",
                            "nam",
                        },
                    },
                    "ipsam": shared.JobExecutionStageInfo{
                        StepName: []string{
                            "dolor",
                            "aliquam",
                            "inventore",
                        },
                    },
                },
            },
            ID: sdk.String("81430104-2181-43d5-a08e-ce7e253b6684"),
            JobMetadata: &shared.JobMetadata{
                BigTableDetails: []shared.BigTableIODetails{
                    shared.BigTableIODetails{
                        InstanceID: sdk.String("ab"),
                        ProjectID: sdk.String("porro"),
                        TableID: sdk.String("autem"),
                    },
                    shared.BigTableIODetails{
                        InstanceID: sdk.String("nobis"),
                        ProjectID: sdk.String("laboriosam"),
                        TableID: sdk.String("recusandae"),
                    },
                },
                BigqueryDetails: []shared.BigQueryIODetails{
                    shared.BigQueryIODetails{
                        Dataset: sdk.String("voluptatem"),
                        ProjectID: sdk.String("exercitationem"),
                        Query: sdk.String("necessitatibus"),
                        Table: sdk.String("quasi"),
                    },
                },
                DatastoreDetails: []shared.DatastoreIODetails{
                    shared.DatastoreIODetails{
                        Namespace: sdk.String("at"),
                        ProjectID: sdk.String("vero"),
                    },
                    shared.DatastoreIODetails{
                        Namespace: sdk.String("est"),
                        ProjectID: sdk.String("harum"),
                    },
                },
                FileDetails: []shared.FileIODetails{
                    shared.FileIODetails{
                        FilePattern: sdk.String("doloribus"),
                    },
                },
                PubsubDetails: []shared.PubSubIODetails{
                    shared.PubSubIODetails{
                        Subscription: sdk.String("optio"),
                        Topic: sdk.String("occaecati"),
                    },
                    shared.PubSubIODetails{
                        Subscription: sdk.String("nemo"),
                        Topic: sdk.String("voluptate"),
                    },
                    shared.PubSubIODetails{
                        Subscription: sdk.String("blanditiis"),
                        Topic: sdk.String("officia"),
                    },
                    shared.PubSubIODetails{
                        Subscription: sdk.String("voluptas"),
                        Topic: sdk.String("numquam"),
                    },
                },
                SDKVersion: &shared.SDKVersion{
                    SDKSupportStatus: shared.SDKVersionSDKSupportStatusEnumSupported.ToPointer(),
                    Version: sdk.String("quos"),
                    VersionDisplayName: sdk.String("eius"),
                },
                SpannerDetails: []shared.SpannerIODetails{
                    shared.SpannerIODetails{
                        DatabaseID: sdk.String("ducimus"),
                        InstanceID: sdk.String("nesciunt"),
                        ProjectID: sdk.String("fuga"),
                    },
                },
                UserDisplayProperties: map[string]string{
                    "incidunt": "quasi",
                    "rem": "fugiat",
                    "dicta": "nisi",
                },
            },
            Labels: map[string]string{
                "consectetur": "aperiam",
            },
            Location: sdk.String("cupiditate"),
            Name: sdk.String("Dominic Abernathy"),
            PipelineDescription: &shared.PipelineDescription{
                DisplayData: []shared.DisplayData{
                    shared.DisplayData{
                        BoolValue: sdk.Bool(false),
                        DurationValue: sdk.String("iste"),
                        FloatValue: sdk.Float32(1700.99),
                        Int64Value: sdk.String("inventore"),
                        JavaClassValue: sdk.String("fuga"),
                        Key: sdk.String("accusamus"),
                        Label: sdk.String("voluptatibus"),
                        Namespace: sdk.String("distinctio"),
                        ShortStrValue: sdk.String("omnis"),
                        StrValue: sdk.String("delectus"),
                        TimestampValue: sdk.String("minima"),
                        URL: sdk.String("praesentium"),
                    },
                    shared.DisplayData{
                        BoolValue: sdk.Bool(false),
                        DurationValue: sdk.String("maxime"),
                        FloatValue: sdk.Float32(3004.03),
                        Int64Value: sdk.String("temporibus"),
                        JavaClassValue: sdk.String("quos"),
                        Key: sdk.String("commodi"),
                        Label: sdk.String("itaque"),
                        Namespace: sdk.String("commodi"),
                        ShortStrValue: sdk.String("totam"),
                        StrValue: sdk.String("earum"),
                        TimestampValue: sdk.String("modi"),
                        URL: sdk.String("nam"),
                    },
                    shared.DisplayData{
                        BoolValue: sdk.Bool(false),
                        DurationValue: sdk.String("vero"),
                        FloatValue: sdk.Float32(329.01),
                        Int64Value: sdk.String("ipsam"),
                        JavaClassValue: sdk.String("vel"),
                        Key: sdk.String("alias"),
                        Label: sdk.String("quasi"),
                        Namespace: sdk.String("non"),
                        ShortStrValue: sdk.String("maiores"),
                        StrValue: sdk.String("enim"),
                        TimestampValue: sdk.String("sint"),
                        URL: sdk.String("nulla"),
                    },
                },
                ExecutionPipelineStage: []shared.ExecutionStageSummary{
                    shared.ExecutionStageSummary{
                        ComponentSource: []shared.ComponentSource{
                            shared.ComponentSource{
                                Name: sdk.String("Melinda Orn"),
                                OriginalTransformOrCollection: sdk.String("accusamus"),
                                UserName: sdk.String("Onie_Welch40"),
                            },
                            shared.ComponentSource{
                                Name: sdk.String("Miss Alyssa Wintheiser"),
                                OriginalTransformOrCollection: sdk.String("laborum"),
                                UserName: sdk.String("Dariana.Frami"),
                            },
                        },
                        ComponentTransform: []shared.ComponentTransform{
                            shared.ComponentTransform{
                                Name: sdk.String("Shelia Walker"),
                                OriginalTransform: sdk.String("iusto"),
                                UserName: sdk.String("Jace.Dickinson"),
                            },
                            shared.ComponentTransform{
                                Name: sdk.String("Casey Sporer"),
                                OriginalTransform: sdk.String("voluptatibus"),
                                UserName: sdk.String("Hertha.Gutkowski81"),
                            },
                            shared.ComponentTransform{
                                Name: sdk.String("Juan Wolf"),
                                OriginalTransform: sdk.String("aliquam"),
                                UserName: sdk.String("Delia42"),
                            },
                            shared.ComponentTransform{
                                Name: sdk.String("Teresa Thiel"),
                                OriginalTransform: sdk.String("velit"),
                                UserName: sdk.String("Ed.Metz77"),
                            },
                        },
                        ID: sdk.String("f9e06e3a-4370-400a-a6b6-bc9b8f759eac"),
                        InputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Jodi Mueller"),
                                OriginalTransformOrCollection: sdk.String("veritatis"),
                                SizeBytes: sdk.String("vero"),
                                UserName: sdk.String("Daron21"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Tina Moore"),
                                OriginalTransformOrCollection: sdk.String("soluta"),
                                SizeBytes: sdk.String("libero"),
                                UserName: sdk.String("Julie.Pagac"),
                            },
                        },
                        Kind: shared.ExecutionStageSummaryKindEnumUnknownKind.ToPointer(),
                        Name: sdk.String("Mrs. Gina Bergnaum"),
                        OutputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Douglas Emard"),
                                OriginalTransformOrCollection: sdk.String("distinctio"),
                                SizeBytes: sdk.String("maxime"),
                                UserName: sdk.String("Carlos_Cronin"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Gerald Ondricka"),
                                OriginalTransformOrCollection: sdk.String("officia"),
                                SizeBytes: sdk.String("quos"),
                                UserName: sdk.String("Randi.Balistreri"),
                            },
                        },
                        PrerequisiteStage: []string{
                            "inventore",
                            "aperiam",
                            "totam",
                            "dolore",
                        },
                    },
                    shared.ExecutionStageSummary{
                        ComponentSource: []shared.ComponentSource{
                            shared.ComponentSource{
                                Name: sdk.String("Kenneth Johnson"),
                                OriginalTransformOrCollection: sdk.String("assumenda"),
                                UserName: sdk.String("Benton_Ortiz47"),
                            },
                            shared.ComponentSource{
                                Name: sdk.String("Sheldon Treutel"),
                                OriginalTransformOrCollection: sdk.String("ea"),
                                UserName: sdk.String("Hellen_Hintz35"),
                            },
                            shared.ComponentSource{
                                Name: sdk.String("Boyd Rippin Sr."),
                                OriginalTransformOrCollection: sdk.String("quidem"),
                                UserName: sdk.String("Markus71"),
                            },
                            shared.ComponentSource{
                                Name: sdk.String("Jesse Sporer"),
                                OriginalTransformOrCollection: sdk.String("odit"),
                                UserName: sdk.String("Brandyn_Herzog"),
                            },
                        },
                        ComponentTransform: []shared.ComponentTransform{
                            shared.ComponentTransform{
                                Name: sdk.String("Otis Grady"),
                                OriginalTransform: sdk.String("beatae"),
                                UserName: sdk.String("Layla_Kreiger14"),
                            },
                        },
                        ID: sdk.String("443da7ce-52b8-495c-937c-6454efb0b348"),
                        InputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Angelica Flatley"),
                                OriginalTransformOrCollection: sdk.String("nostrum"),
                                SizeBytes: sdk.String("est"),
                                UserName: sdk.String("Ole_Windler14"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Ervin Hettinger IV"),
                                OriginalTransformOrCollection: sdk.String("minima"),
                                SizeBytes: sdk.String("in"),
                                UserName: sdk.String("Jerry62"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Jo Kling"),
                                OriginalTransformOrCollection: sdk.String("similique"),
                                SizeBytes: sdk.String("optio"),
                                UserName: sdk.String("Gretchen_Hahn"),
                            },
                        },
                        Kind: shared.ExecutionStageSummaryKindEnumSingletonKind.ToPointer(),
                        Name: sdk.String("Jorge Kohler"),
                        OutputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Ignacio Dietrich"),
                                OriginalTransformOrCollection: sdk.String("dicta"),
                                SizeBytes: sdk.String("earum"),
                                UserName: sdk.String("Estevan72"),
                            },
                        },
                        PrerequisiteStage: []string{
                            "consequuntur",
                        },
                    },
                    shared.ExecutionStageSummary{
                        ComponentSource: []shared.ComponentSource{
                            shared.ComponentSource{
                                Name: sdk.String("Larry Kuphal Sr."),
                                OriginalTransformOrCollection: sdk.String("laboriosam"),
                                UserName: sdk.String("Salma_Renner"),
                            },
                            shared.ComponentSource{
                                Name: sdk.String("Michele Heaney"),
                                OriginalTransformOrCollection: sdk.String("sint"),
                                UserName: sdk.String("Emelie_Welch"),
                            },
                            shared.ComponentSource{
                                Name: sdk.String("Dr. Virgil Kuhic V"),
                                OriginalTransformOrCollection: sdk.String("iste"),
                                UserName: sdk.String("Reyna.Reynolds3"),
                            },
                            shared.ComponentSource{
                                Name: sdk.String("Edmund Robel"),
                                OriginalTransformOrCollection: sdk.String("saepe"),
                                UserName: sdk.String("Luisa.Baumbach"),
                            },
                        },
                        ComponentTransform: []shared.ComponentTransform{
                            shared.ComponentTransform{
                                Name: sdk.String("Mae Krajcik"),
                                OriginalTransform: sdk.String("non"),
                                UserName: sdk.String("Eliane99"),
                            },
                            shared.ComponentTransform{
                                Name: sdk.String("Louise Schulist"),
                                OriginalTransform: sdk.String("pariatur"),
                                UserName: sdk.String("Danika24"),
                            },
                            shared.ComponentTransform{
                                Name: sdk.String("Randolph Huels"),
                                OriginalTransform: sdk.String("blanditiis"),
                                UserName: sdk.String("Milford.Huel"),
                            },
                        },
                        ID: sdk.String("bcdb35ff-2e4b-4275-b7a8-cd9e7319c177"),
                        InputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Nicole Halvorson"),
                                OriginalTransformOrCollection: sdk.String("dignissimos"),
                                SizeBytes: sdk.String("libero"),
                                UserName: sdk.String("Antonina87"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Geoffrey Hartmann"),
                                OriginalTransformOrCollection: sdk.String("earum"),
                                SizeBytes: sdk.String("reprehenderit"),
                                UserName: sdk.String("Jody_Hilll19"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Nina Blanda"),
                                OriginalTransformOrCollection: sdk.String("aliquam"),
                                SizeBytes: sdk.String("quisquam"),
                                UserName: sdk.String("Lane.Larkin80"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Candice Rath"),
                                OriginalTransformOrCollection: sdk.String("repudiandae"),
                                SizeBytes: sdk.String("rerum"),
                                UserName: sdk.String("Jeramie_Hessel83"),
                            },
                        },
                        Kind: shared.ExecutionStageSummaryKindEnumFlattenKind.ToPointer(),
                        Name: sdk.String("Gertrude Russel Jr."),
                        OutputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Wendy Stanton"),
                                OriginalTransformOrCollection: sdk.String("cum"),
                                SizeBytes: sdk.String("amet"),
                                UserName: sdk.String("Axel.Carroll"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Ted Fay"),
                                OriginalTransformOrCollection: sdk.String("necessitatibus"),
                                SizeBytes: sdk.String("provident"),
                                UserName: sdk.String("Thaddeus.Altenwerth"),
                            },
                        },
                        PrerequisiteStage: []string{
                            "facilis",
                            "corrupti",
                            "aperiam",
                            "sint",
                        },
                    },
                },
                OriginalPipelineTransform: []shared.TransformSummary{
                    shared.TransformSummary{
                        DisplayData: []shared.DisplayData{
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("totam"),
                                FloatValue: sdk.Float32(1158.61),
                                Int64Value: sdk.String("voluptatem"),
                                JavaClassValue: sdk.String("velit"),
                                Key: sdk.String("dolor"),
                                Label: sdk.String("sunt"),
                                Namespace: sdk.String("a"),
                                ShortStrValue: sdk.String("dolor"),
                                StrValue: sdk.String("occaecati"),
                                TimestampValue: sdk.String("atque"),
                                URL: sdk.String("beatae"),
                            },
                        },
                        ID: sdk.String("d4c700b6-07f3-4c93-873b-9da3f2ceda7e"),
                        InputCollectionName: []string{
                            "consectetur",
                        },
                        Kind: shared.TransformSummaryKindEnumShuffleKind.ToPointer(),
                        Name: sdk.String("Rose Heller"),
                        OutputCollectionName: []string{
                            "illo",
                        },
                    },
                    shared.TransformSummary{
                        DisplayData: []shared.DisplayData{
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("deserunt"),
                                FloatValue: sdk.Float32(9649.25),
                                Int64Value: sdk.String("non"),
                                JavaClassValue: sdk.String("distinctio"),
                                Key: sdk.String("in"),
                                Label: sdk.String("exercitationem"),
                                Namespace: sdk.String("labore"),
                                ShortStrValue: sdk.String("numquam"),
                                StrValue: sdk.String("repudiandae"),
                                TimestampValue: sdk.String("modi"),
                                URL: sdk.String("in"),
                            },
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("explicabo"),
                                FloatValue: sdk.Float32(8798.57),
                                Int64Value: sdk.String("rem"),
                                JavaClassValue: sdk.String("aperiam"),
                                Key: sdk.String("odit"),
                                Label: sdk.String("deleniti"),
                                Namespace: sdk.String("enim"),
                                ShortStrValue: sdk.String("voluptate"),
                                StrValue: sdk.String("similique"),
                                TimestampValue: sdk.String("minima"),
                                URL: sdk.String("libero"),
                            },
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("magnam"),
                                FloatValue: sdk.Float32(242.72),
                                Int64Value: sdk.String("modi"),
                                JavaClassValue: sdk.String("eum"),
                                Key: sdk.String("nesciunt"),
                                Label: sdk.String("mollitia"),
                                Namespace: sdk.String("dignissimos"),
                                ShortStrValue: sdk.String("fugiat"),
                                StrValue: sdk.String("nostrum"),
                                TimestampValue: sdk.String("molestiae"),
                                URL: sdk.String("veniam"),
                            },
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("reiciendis"),
                                FloatValue: sdk.Float32(662.07),
                                Int64Value: sdk.String("modi"),
                                JavaClassValue: sdk.String("aut"),
                                Key: sdk.String("aut"),
                                Label: sdk.String("eveniet"),
                                Namespace: sdk.String("odio"),
                                ShortStrValue: sdk.String("commodi"),
                                StrValue: sdk.String("numquam"),
                                TimestampValue: sdk.String("dolorum"),
                                URL: sdk.String("possimus"),
                            },
                        },
                        ID: sdk.String("7334ec1b-781b-436a-8808-8d100efada20"),
                        InputCollectionName: []string{
                            "eveniet",
                        },
                        Kind: shared.TransformSummaryKindEnumShuffleKind.ToPointer(),
                        Name: sdk.String("Eva Denesik"),
                        OutputCollectionName: []string{
                            "explicabo",
                            "beatae",
                            "aliquid",
                        },
                    },
                    shared.TransformSummary{
                        DisplayData: []shared.DisplayData{
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("optio"),
                                FloatValue: sdk.Float32(9750.95),
                                Int64Value: sdk.String("molestias"),
                                JavaClassValue: sdk.String("officia"),
                                Key: sdk.String("libero"),
                                Label: sdk.String("totam"),
                                Namespace: sdk.String("sequi"),
                                ShortStrValue: sdk.String("aliquid"),
                                StrValue: sdk.String("ea"),
                                TimestampValue: sdk.String("impedit"),
                                URL: sdk.String("ducimus"),
                            },
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("odit"),
                                FloatValue: sdk.Float32(2436.23),
                                Int64Value: sdk.String("reiciendis"),
                                JavaClassValue: sdk.String("repellat"),
                                Key: sdk.String("nulla"),
                                Label: sdk.String("laborum"),
                                Namespace: sdk.String("natus"),
                                ShortStrValue: sdk.String("accusamus"),
                                StrValue: sdk.String("doloremque"),
                                TimestampValue: sdk.String("nisi"),
                                URL: sdk.String("rerum"),
                            },
                        },
                        ID: sdk.String("ee4825c1-fc0e-4115-880b-ff918544ec42"),
                        InputCollectionName: []string{
                            "vero",
                            "doloribus",
                            "impedit",
                            "porro",
                        },
                        Kind: shared.TransformSummaryKindEnumSingletonKind.ToPointer(),
                        Name: sdk.String("Abel Bergstrom"),
                        OutputCollectionName: []string{
                            "iure",
                            "odio",
                        },
                    },
                    shared.TransformSummary{
                        DisplayData: []shared.DisplayData{
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("debitis"),
                                FloatValue: sdk.Float32(4235.88),
                                Int64Value: sdk.String("neque"),
                                JavaClassValue: sdk.String("corporis"),
                                Key: sdk.String("voluptas"),
                                Label: sdk.String("consequuntur"),
                                Namespace: sdk.String("officia"),
                                ShortStrValue: sdk.String("reprehenderit"),
                                StrValue: sdk.String("distinctio"),
                                TimestampValue: sdk.String("eius"),
                                URL: sdk.String("ipsa"),
                            },
                        },
                        ID: sdk.String("8f05e3d4-8fda-4f31-ba1f-5fd94259c0b3"),
                        InputCollectionName: []string{
                            "sapiente",
                            "consequuntur",
                        },
                        Kind: shared.TransformSummaryKindEnumGroupByKeyKind.ToPointer(),
                        Name: sdk.String("Luke Mayer"),
                        OutputCollectionName: []string{
                            "adipisci",
                            "libero",
                            "in",
                            "minima",
                        },
                    },
                },
                StepNamesHash: sdk.String("ex"),
            },
            ProjectID: sdk.String("minus"),
            ReplaceJobID: sdk.String("ab"),
            ReplacedByJobID: sdk.String("beatae"),
            RequestedState: shared.JobRequestedStateEnumJobStateResourceCleaningUp.ToPointer(),
            RuntimeUpdatableParams: &shared.RuntimeUpdatableParams{
                MaxNumWorkers: sdk.Int(392319),
                MinNumWorkers: sdk.Int(786954),
            },
            SatisfiesPzs: sdk.Bool(false),
            StageStates: []shared.ExecutionStageState{
                shared.ExecutionStageState{
                    CurrentStateTime: sdk.String("ducimus"),
                    ExecutionStageName: sdk.String("fuga"),
                    ExecutionStageState: shared.ExecutionStageStateExecutionStageStateEnumJobStateFailed.ToPointer(),
                },
            },
            StartTime: sdk.String("architecto"),
            Steps: []shared.Step{
                shared.Step{
                    Kind: sdk.String("aliquid"),
                    Name: sdk.String("Amber Fisher"),
                    Properties: map[string]interface{}{
                        "expedita": "facilis",
                        "impedit": "sit",
                    },
                },
            },
            StepsLocation: sdk.String("nemo"),
            TempFiles: []string{
                "consequuntur",
                "amet",
                "deserunt",
            },
            TransformNameMapping: map[string]string{
                "veniam": "quod",
                "itaque": "a",
            },
            Type: shared.JobTypeEnumJobTypeStreaming.ToPointer(),
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("officiis"),
        JobID: "architecto",
        Key: sdk.String("alias"),
        Location: sdk.String("culpa"),
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "nobis",
        QuotaUser: sdk.String("necessitatibus"),
        UpdateMask: sdk.String("quia"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("vel"),
    }, operations.DataflowProjectsJobsUpdateSecurity{
        Option1: &operations.DataflowProjectsJobsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## DataflowProjectsJobsWorkItemsLease

Leases a dataflow WorkItem to run.

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
    res, err := s.Projects.DataflowProjectsJobsWorkItemsLease(ctx, operations.DataflowProjectsJobsWorkItemsLeaseRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LeaseWorkItemRequest: &shared.LeaseWorkItemRequest{
            CurrentWorkerTime: sdk.String("debitis"),
            Location: sdk.String("ullam"),
            RequestedLeaseDuration: sdk.String("architecto"),
            UnifiedWorkerRequest: map[string]interface{}{
                "perferendis": "veritatis",
            },
            WorkItemTypes: []string{
                "cumque",
                "iure",
                "quibusdam",
            },
            WorkerCapabilities: []string{
                "nemo",
                "recusandae",
                "velit",
                "magnam",
            },
            WorkerID: sdk.String("dignissimos"),
        },
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("natus"),
        JobID: "provident",
        Key: sdk.String("cum"),
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "facilis",
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("laboriosam"),
    }, operations.DataflowProjectsJobsWorkItemsLeaseSecurity{
        Option1: &operations.DataflowProjectsJobsWorkItemsLeaseSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LeaseWorkItemResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsJobsWorkItemsReportStatus

Reports the status of dataflow WorkItems leased by a worker.

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
    res, err := s.Projects.DataflowProjectsJobsWorkItemsReportStatus(ctx, operations.DataflowProjectsJobsWorkItemsReportStatusRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReportWorkItemStatusRequest: &shared.ReportWorkItemStatusRequest{
            CurrentWorkerTime: sdk.String("modi"),
            Location: sdk.String("perspiciatis"),
            UnifiedWorkerRequest: map[string]interface{}{
                "cum": "aspernatur",
                "libero": "nam",
                "incidunt": "recusandae",
                "quod": "id",
            },
            WorkItemStatuses: []shared.WorkItemStatus{
                shared.WorkItemStatus{
                    Completed: sdk.Bool(false),
                    CounterUpdates: []shared.CounterUpdate{
                        shared.CounterUpdate{
                            Boolean: sdk.Bool(false),
                            Cumulative: sdk.Bool(false),
                            Distribution: &shared.DistributionUpdate{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(779409),
                                    LowBits: sdk.Int64(198991),
                                },
                                Histogram: &shared.Histogram{
                                    BucketCounts: []string{
                                        "nemo",
                                        "illum",
                                        "facilis",
                                        "non",
                                    },
                                    FirstBucketOffset: sdk.Int(649534),
                                },
                                Max: &shared.SplitInt64{
                                    HighBits: sdk.Int(827051),
                                    LowBits: sdk.Int64(927977),
                                },
                                Min: &shared.SplitInt64{
                                    HighBits: sdk.Int(718981),
                                    LowBits: sdk.Int64(866861),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(323365),
                                    LowBits: sdk.Int64(816151),
                                },
                                SumOfSquares: sdk.Float64(6746.83),
                            },
                            FloatingPoint: sdk.Float64(9114.51),
                            FloatingPointList: &shared.FloatingPointList{
                                Elements: []float64{
                                    2763.37,
                                    8023.56,
                                    3695.23,
                                },
                            },
                            FloatingPointMean: &shared.FloatingPointMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(60),
                                    LowBits: sdk.Int64(379894),
                                },
                                Sum: sdk.Float64(6472.1),
                            },
                            Integer: &shared.SplitInt64{
                                HighBits: sdk.Int(560451),
                                LowBits: sdk.Int64(672889),
                            },
                            IntegerGauge: &shared.IntegerGauge{
                                Timestamp: sdk.String("est"),
                                Value: &shared.SplitInt64{
                                    HighBits: sdk.Int(577413),
                                    LowBits: sdk.Int64(286716),
                                },
                            },
                            IntegerList: &shared.IntegerList{
                                Elements: []shared.SplitInt64{
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(19462),
                                        LowBits: sdk.Int64(143528),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(399222),
                                        LowBits: sdk.Int64(301309),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(308528),
                                        LowBits: sdk.Int64(755868),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(942185),
                                        LowBits: sdk.Int64(342921),
                                    },
                                },
                            },
                            IntegerMean: &shared.IntegerMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(888265),
                                    LowBits: sdk.Int64(603650),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(860311),
                                    LowBits: sdk.Int64(621393),
                                },
                            },
                            Internal: sdk.String("mollitia"),
                            NameAndKind: &shared.NameAndKind{
                                Kind: shared.NameAndKindKindEnumMax.ToPointer(),
                                Name: sdk.String("Georgia Lowe"),
                            },
                            ShortID: sdk.String("impedit"),
                            StringList: &shared.StringList{
                                Elements: []string{
                                    "deserunt",
                                },
                            },
                            StructuredNameAndMetadata: &shared.CounterStructuredNameAndMetadata{
                                Metadata: &shared.CounterMetadata{
                                    Description: sdk.String("quod"),
                                    Kind: shared.CounterMetadataKindEnumMin.ToPointer(),
                                    OtherUnits: sdk.String("doloremque"),
                                    StandardUnits: shared.CounterMetadataStandardUnitsEnumBytes.ToPointer(),
                                },
                                Name: &shared.CounterStructuredName{
                                    ComponentStepName: sdk.String("facere"),
                                    ExecutionStepName: sdk.String("necessitatibus"),
                                    InputIndex: sdk.Int(807564),
                                    Name: sdk.String("Jessica Brakus"),
                                    Origin: shared.CounterStructuredNameOriginEnumUser.ToPointer(),
                                    OriginNamespace: sdk.String("quae"),
                                    OriginalRequestingStepName: sdk.String("magni"),
                                    OriginalStepName: sdk.String("officiis"),
                                    Portion: shared.CounterStructuredNamePortionEnumAll.ToPointer(),
                                    WorkerID: sdk.String("necessitatibus"),
                                },
                            },
                        },
                        shared.CounterUpdate{
                            Boolean: sdk.Bool(false),
                            Cumulative: sdk.Bool(false),
                            Distribution: &shared.DistributionUpdate{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(773259),
                                    LowBits: sdk.Int64(55981),
                                },
                                Histogram: &shared.Histogram{
                                    BucketCounts: []string{
                                        "a",
                                        "maiores",
                                        "laudantium",
                                    },
                                    FirstBucketOffset: sdk.Int(982248),
                                },
                                Max: &shared.SplitInt64{
                                    HighBits: sdk.Int(691),
                                    LowBits: sdk.Int64(992667),
                                },
                                Min: &shared.SplitInt64{
                                    HighBits: sdk.Int(523365),
                                    LowBits: sdk.Int64(118615),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(380595),
                                    LowBits: sdk.Int64(938257),
                                },
                                SumOfSquares: sdk.Float64(9853.6),
                            },
                            FloatingPoint: sdk.Float64(2445.69),
                            FloatingPointList: &shared.FloatingPointList{
                                Elements: []float64{
                                    4582.12,
                                    4465.47,
                                },
                            },
                            FloatingPointMean: &shared.FloatingPointMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(757407),
                                    LowBits: sdk.Int64(94697),
                                },
                                Sum: sdk.Float64(2036.21),
                            },
                            Integer: &shared.SplitInt64{
                                HighBits: sdk.Int(876649),
                                LowBits: sdk.Int64(566312),
                            },
                            IntegerGauge: &shared.IntegerGauge{
                                Timestamp: sdk.String("accusantium"),
                                Value: &shared.SplitInt64{
                                    HighBits: sdk.Int(185816),
                                    LowBits: sdk.Int64(771241),
                                },
                            },
                            IntegerList: &shared.IntegerList{
                                Elements: []shared.SplitInt64{
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(278329),
                                        LowBits: sdk.Int64(116558),
                                    },
                                },
                            },
                            IntegerMean: &shared.IntegerMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(139133),
                                    LowBits: sdk.Int64(357639),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(701441),
                                    LowBits: sdk.Int64(4654),
                                },
                            },
                            Internal: sdk.String("error"),
                            NameAndKind: &shared.NameAndKind{
                                Kind: shared.NameAndKindKindEnumMean.ToPointer(),
                                Name: sdk.String("Genevieve Howell"),
                            },
                            ShortID: sdk.String("veritatis"),
                            StringList: &shared.StringList{
                                Elements: []string{
                                    "quae",
                                    "similique",
                                },
                            },
                            StructuredNameAndMetadata: &shared.CounterStructuredNameAndMetadata{
                                Metadata: &shared.CounterMetadata{
                                    Description: sdk.String("incidunt"),
                                    Kind: shared.CounterMetadataKindEnumMean.ToPointer(),
                                    OtherUnits: sdk.String("magni"),
                                    StandardUnits: shared.CounterMetadataStandardUnitsEnumTimestampMsec.ToPointer(),
                                },
                                Name: &shared.CounterStructuredName{
                                    ComponentStepName: sdk.String("delectus"),
                                    ExecutionStepName: sdk.String("omnis"),
                                    InputIndex: sdk.Int(151230),
                                    Name: sdk.String("Kendra Hauck"),
                                    Origin: shared.CounterStructuredNameOriginEnumUser.ToPointer(),
                                    OriginNamespace: sdk.String("maiores"),
                                    OriginalRequestingStepName: sdk.String("laudantium"),
                                    OriginalStepName: sdk.String("velit"),
                                    Portion: shared.CounterStructuredNamePortionEnumValue.ToPointer(),
                                    WorkerID: sdk.String("amet"),
                                },
                            },
                        },
                    },
                    DynamicSourceSplit: &shared.DynamicSourceSplit{
                        Primary: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeIndependent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "tenetur": "quas",
                                        "molestiae": "aliquid",
                                        "asperiores": "a",
                                        "nobis": "perspiciatis",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "dicta": "minus",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("commodi"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "porro": "tempore",
                                    "quidem": "modi",
                                    "voluptates": "fugit",
                                    "eius": "sequi",
                                },
                            },
                        },
                        Residual: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeSiblingOfCurrent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "blanditiis": "sint",
                                        "repellat": "a",
                                    },
                                    map[string]interface{}{
                                        "maiores": "itaque",
                                        "nulla": "deserunt",
                                        "corporis": "velit",
                                    },
                                    map[string]interface{}{
                                        "enim": "officia",
                                        "saepe": "eum",
                                        "repudiandae": "accusantium",
                                        "officia": "impedit",
                                    },
                                    map[string]interface{}{
                                        "blanditiis": "eius",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "eos": "nobis",
                                    "natus": "minus",
                                    "quia": "magnam",
                                    "reprehenderit": "quod",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("quos"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "amet": "molestiae",
                                    "amet": "laborum",
                                    "modi": "perferendis",
                                },
                            },
                        },
                    },
                    Errors: []shared.Status{
                        shared.Status{
                            Code: sdk.Int(102316),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "sunt": "maiores",
                                    "neque": "odit",
                                },
                                map[string]interface{}{
                                    "veniam": "ipsam",
                                    "eaque": "exercitationem",
                                    "veniam": "nihil",
                                    "ad": "nisi",
                                },
                                map[string]interface{}{
                                    "quis": "quibusdam",
                                    "nemo": "suscipit",
                                    "pariatur": "sit",
                                    "quidem": "repellendus",
                                },
                            },
                            Message: sdk.String("perferendis"),
                        },
                        shared.Status{
                            Code: sdk.Int(660536),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "possimus": "repellat",
                                },
                                map[string]interface{}{
                                    "architecto": "adipisci",
                                    "pariatur": "harum",
                                    "dolore": "voluptatibus",
                                    "iure": "explicabo",
                                },
                                map[string]interface{}{
                                    "soluta": "dolorum",
                                    "velit": "earum",
                                    "praesentium": "error",
                                    "non": "quasi",
                                },
                                map[string]interface{}{
                                    "accusamus": "harum",
                                    "cumque": "doloremque",
                                    "expedita": "corrupti",
                                },
                            },
                            Message: sdk.String("eaque"),
                        },
                        shared.Status{
                            Code: sdk.Int(643199),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "magni": "tempora",
                                    "possimus": "dolor",
                                    "rerum": "sed",
                                },
                                map[string]interface{}{
                                    "optio": "delectus",
                                    "minus": "quo",
                                    "quos": "asperiores",
                                    "voluptatum": "iste",
                                },
                            },
                            Message: sdk.String("corporis"),
                        },
                        shared.Status{
                            Code: sdk.Int(37129),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "doloribus": "nostrum",
                                },
                            },
                            Message: sdk.String("at"),
                        },
                    },
                    MetricUpdates: []shared.MetricUpdate{
                        shared.MetricUpdate{
                            Cumulative: sdk.Bool(false),
                            Distribution: sdk.String("neque"),
                            Gauge: sdk.String("pariatur"),
                            Internal: sdk.String("vel"),
                            Kind: sdk.String("sapiente"),
                            MeanCount: sdk.String("mollitia"),
                            MeanSum: sdk.String("quae"),
                            Name: &shared.MetricStructuredName{
                                Context: map[string]string{
                                    "aperiam": "non",
                                    "voluptates": "ad",
                                    "aliquam": "quisquam",
                                },
                                Name: sdk.String("Ms. Russell Wunsch"),
                                Origin: sdk.String("est"),
                            },
                            Scalar: sdk.String("dolor"),
                            Set: sdk.String("aliquid"),
                            UpdateTime: sdk.String("consectetur"),
                        },
                        shared.MetricUpdate{
                            Cumulative: sdk.Bool(false),
                            Distribution: sdk.String("cumque"),
                            Gauge: sdk.String("rem"),
                            Internal: sdk.String("voluptatum"),
                            Kind: sdk.String("ducimus"),
                            MeanCount: sdk.String("adipisci"),
                            MeanSum: sdk.String("recusandae"),
                            Name: &shared.MetricStructuredName{
                                Context: map[string]string{
                                    "blanditiis": "numquam",
                                    "sequi": "voluptatum",
                                },
                                Name: sdk.String("Olivia Boehm"),
                                Origin: sdk.String("quidem"),
                            },
                            Scalar: sdk.String("totam"),
                            Set: sdk.String("porro"),
                            UpdateTime: sdk.String("deserunt"),
                        },
                        shared.MetricUpdate{
                            Cumulative: sdk.Bool(false),
                            Distribution: sdk.String("magni"),
                            Gauge: sdk.String("nihil"),
                            Internal: sdk.String("voluptas"),
                            Kind: sdk.String("animi"),
                            MeanCount: sdk.String("commodi"),
                            MeanSum: sdk.String("alias"),
                            Name: &shared.MetricStructuredName{
                                Context: map[string]string{
                                    "aut": "dolore",
                                    "maxime": "aliquam",
                                    "iste": "ullam",
                                },
                                Name: sdk.String("Clark Hodkiewicz"),
                                Origin: sdk.String("illo"),
                            },
                            Scalar: sdk.String("nihil"),
                            Set: sdk.String("inventore"),
                            UpdateTime: sdk.String("libero"),
                        },
                        shared.MetricUpdate{
                            Cumulative: sdk.Bool(false),
                            Distribution: sdk.String("ipsam"),
                            Gauge: sdk.String("quasi"),
                            Internal: sdk.String("cumque"),
                            Kind: sdk.String("dicta"),
                            MeanCount: sdk.String("harum"),
                            MeanSum: sdk.String("facere"),
                            Name: &shared.MetricStructuredName{
                                Context: map[string]string{
                                    "beatae": "cumque",
                                    "delectus": "labore",
                                    "expedita": "corrupti",
                                },
                                Name: sdk.String("Ivan Torphy"),
                                Origin: sdk.String("sapiente"),
                            },
                            Scalar: sdk.String("quo"),
                            Set: sdk.String("incidunt"),
                            UpdateTime: sdk.String("quod"),
                        },
                    },
                    Progress: &shared.ApproximateProgress{
                        PercentComplete: sdk.Float32(7932.82),
                        Position: &shared.Position{
                            ByteOffset: sdk.String("porro"),
                            ConcatPosition: &shared.ConcatPosition{
                                Index: sdk.Int(659971),
                                Position: &shared.Position{},
                            },
                            End: sdk.Bool(false),
                            Key: sdk.String("excepturi"),
                            RecordIndex: sdk.String("occaecati"),
                            ShufflePosition: sdk.String("libero"),
                        },
                        RemainingTime: sdk.String("quo"),
                    },
                    ReportIndex: sdk.String("esse"),
                    ReportedProgress: &shared.ApproximateReportedProgress{
                        ConsumedParallelism: &shared.ReportedParallelism{
                            IsInfinite: sdk.Bool(false),
                            Value: sdk.Float64(9440.33),
                        },
                        FractionConsumed: sdk.Float64(8022.16),
                        Position: &shared.Position{
                            ByteOffset: sdk.String("accusantium"),
                            ConcatPosition: &shared.ConcatPosition{
                                Index: sdk.Int(743531),
                                Position: &shared.Position{},
                            },
                            End: sdk.Bool(false),
                            Key: sdk.String("fugit"),
                            RecordIndex: sdk.String("pariatur"),
                            ShufflePosition: sdk.String("eligendi"),
                        },
                        RemainingParallelism: &shared.ReportedParallelism{
                            IsInfinite: sdk.Bool(false),
                            Value: sdk.Float64(9274.9),
                        },
                    },
                    RequestedLeaseDuration: sdk.String("veritatis"),
                    SourceFork: &shared.SourceFork{
                        Primary: &shared.SourceSplitShard{
                            DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "dolor": "voluptates",
                                        "tempora": "magni",
                                    },
                                    map[string]interface{}{
                                        "doloremque": "voluptatem",
                                        "eum": "at",
                                        "eum": "reprehenderit",
                                    },
                                    map[string]interface{}{
                                        "blanditiis": "nihil",
                                        "atque": "rerum",
                                        "deserunt": "atque",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "atque": "architecto",
                                    "est": "enim",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("rem"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "quae": "quas",
                                },
                            },
                        },
                        PrimarySource: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeSiblingOfCurrent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "sapiente": "saepe",
                                        "delectus": "officia",
                                    },
                                    map[string]interface{}{
                                        "cumque": "natus",
                                        "quaerat": "doloribus",
                                        "quia": "officiis",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "cumque": "quis",
                                    "enim": "eum",
                                    "nemo": "illum",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("nesciunt"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "odio": "minus",
                                },
                            },
                        },
                        Residual: &shared.SourceSplitShard{
                            DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeSiblingOfCurrent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "praesentium": "dicta",
                                        "fugit": "sit",
                                        "aliquid": "necessitatibus",
                                        "sed": "deleniti",
                                    },
                                    map[string]interface{}{
                                        "nesciunt": "delectus",
                                    },
                                    map[string]interface{}{
                                        "aliquam": "deserunt",
                                        "modi": "sunt",
                                        "impedit": "eius",
                                    },
                                    map[string]interface{}{
                                        "ipsa": "at",
                                        "dolorem": "repellat",
                                        "aspernatur": "inventore",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "fugit": "fuga",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("hic"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "dolorem": "architecto",
                                },
                            },
                        },
                        ResidualSource: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "enim": "illo",
                                        "magnam": "delectus",
                                        "numquam": "optio",
                                        "nobis": "ex",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "quae": "deleniti",
                                    "expedita": "hic",
                                    "excepturi": "aliquid",
                                    "sed": "beatae",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("similique"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "animi": "dolore",
                                    "tenetur": "dignissimos",
                                },
                            },
                        },
                    },
                    SourceOperationResponse: &shared.SourceOperationResponse{
                        GetMetadata: &shared.SourceGetMetadataResponse{
                            Metadata: &shared.SourceMetadata{
                                EstimatedSizeBytes: sdk.String("esse"),
                                Infinite: sdk.Bool(false),
                                ProducesSortedKeys: sdk.Bool(false),
                            },
                        },
                        Split: &shared.SourceSplitResponse{
                            Bundles: []shared.DerivedSource{
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "earum": "velit",
                                                "officiis": "eius",
                                                "rerum": "itaque",
                                                "dignissimos": "ipsam",
                                            },
                                            map[string]interface{}{
                                                "impedit": "aliquid",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "facilis": "ipsum",
                                            "ut": "quaerat",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("architecto"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "eveniet": "dolor",
                                            "expedita": "libero",
                                            "iste": "illo",
                                        },
                                    },
                                },
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeSiblingOfCurrent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "sint": "iusto",
                                                "enim": "accusamus",
                                                "aperiam": "voluptates",
                                                "laudantium": "tempora",
                                            },
                                            map[string]interface{}{
                                                "omnis": "illum",
                                            },
                                            map[string]interface{}{
                                                "tenetur": "deleniti",
                                                "modi": "earum",
                                                "architecto": "aliquam",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "maiores": "sequi",
                                            "saepe": "consequatur",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("esse"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "facere": "quisquam",
                                            "cumque": "aliquam",
                                            "dolorum": "deserunt",
                                            "ad": "reiciendis",
                                        },
                                    },
                                },
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "nobis": "quibusdam",
                                                "omnis": "aut",
                                                "ipsam": "officia",
                                            },
                                            map[string]interface{}{
                                                "reprehenderit": "quia",
                                                "necessitatibus": "accusantium",
                                                "ad": "nisi",
                                            },
                                            map[string]interface{}{
                                                "quia": "laudantium",
                                                "sed": "odit",
                                            },
                                            map[string]interface{}{
                                                "expedita": "eos",
                                                "repellendus": "nesciunt",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "sint": "dolore",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("esse"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "distinctio": "sapiente",
                                        },
                                    },
                                },
                            },
                            Outcome: shared.SourceSplitResponseOutcomeEnumSourceSplitOutcomeUseCurrent.ToPointer(),
                            Shards: []shared.SourceSplitShard{
                                shared.SourceSplitShard{
                                    DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeIndependent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "voluptatum": "iusto",
                                                "quod": "voluptatibus",
                                                "voluptas": "non",
                                            },
                                            map[string]interface{}{
                                                "laborum": "voluptas",
                                                "doloribus": "animi",
                                            },
                                            map[string]interface{}{
                                                "corporis": "non",
                                                "necessitatibus": "distinctio",
                                                "maiores": "laboriosam",
                                                "voluptatem": "optio",
                                            },
                                            map[string]interface{}{
                                                "sunt": "vitae",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "doloremque": "sed",
                                            "amet": "rerum",
                                            "in": "nostrum",
                                            "temporibus": "ratione",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("dolor"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "dignissimos": "reiciendis",
                                            "itaque": "vitae",
                                        },
                                    },
                                },
                                shared.SourceSplitShard{
                                    DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "minus": "quos",
                                                "possimus": "maiores",
                                                "odio": "provident",
                                                "sapiente": "aperiam",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "nesciunt": "provident",
                                            "ex": "repellendus",
                                            "unde": "alias",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("impedit"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "commodi": "labore",
                                        },
                                    },
                                },
                                shared.SourceSplitShard{
                                    DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "sunt": "enim",
                                                "nulla": "maiores",
                                                "distinctio": "mollitia",
                                                "impedit": "accusamus",
                                            },
                                            map[string]interface{}{
                                                "quas": "blanditiis",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "dicta": "impedit",
                                            "tempora": "eveniet",
                                            "repudiandae": "sed",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("impedit"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "impedit": "vel",
                                            "eligendi": "recusandae",
                                            "ex": "beatae",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    StopPosition: &shared.Position{
                        ByteOffset: sdk.String("veritatis"),
                        ConcatPosition: &shared.ConcatPosition{
                            Index: sdk.Int(982574),
                            Position: &shared.Position{},
                        },
                        End: sdk.Bool(false),
                        Key: sdk.String("itaque"),
                        RecordIndex: sdk.String("vero"),
                        ShufflePosition: sdk.String("quidem"),
                    },
                    TotalThrottlerWaitTimeSeconds: sdk.Float64(738.26),
                    WorkItemID: sdk.String("quo"),
                },
                shared.WorkItemStatus{
                    Completed: sdk.Bool(false),
                    CounterUpdates: []shared.CounterUpdate{
                        shared.CounterUpdate{
                            Boolean: sdk.Bool(false),
                            Cumulative: sdk.Bool(false),
                            Distribution: &shared.DistributionUpdate{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(791615),
                                    LowBits: sdk.Int64(717560),
                                },
                                Histogram: &shared.Histogram{
                                    BucketCounts: []string{
                                        "cum",
                                        "suscipit",
                                        "saepe",
                                        "earum",
                                    },
                                    FirstBucketOffset: sdk.Int(799866),
                                },
                                Max: &shared.SplitInt64{
                                    HighBits: sdk.Int(469588),
                                    LowBits: sdk.Int64(310930),
                                },
                                Min: &shared.SplitInt64{
                                    HighBits: sdk.Int(215959),
                                    LowBits: sdk.Int64(498435),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(514625),
                                    LowBits: sdk.Int64(701786),
                                },
                                SumOfSquares: sdk.Float64(6439.97),
                            },
                            FloatingPoint: sdk.Float64(1384.36),
                            FloatingPointList: &shared.FloatingPointList{
                                Elements: []float64{
                                    1939.9,
                                    1068.06,
                                },
                            },
                            FloatingPointMean: &shared.FloatingPointMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(481042),
                                    LowBits: sdk.Int64(456865),
                                },
                                Sum: sdk.Float64(2982.46),
                            },
                            Integer: &shared.SplitInt64{
                                HighBits: sdk.Int(487799),
                                LowBits: sdk.Int64(862560),
                            },
                            IntegerGauge: &shared.IntegerGauge{
                                Timestamp: sdk.String("impedit"),
                                Value: &shared.SplitInt64{
                                    HighBits: sdk.Int(586277),
                                    LowBits: sdk.Int64(72422),
                                },
                            },
                            IntegerList: &shared.IntegerList{
                                Elements: []shared.SplitInt64{
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(670430),
                                        LowBits: sdk.Int64(848833),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(147989),
                                        LowBits: sdk.Int64(804879),
                                    },
                                },
                            },
                            IntegerMean: &shared.IntegerMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(681115),
                                    LowBits: sdk.Int64(998355),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(341983),
                                    LowBits: sdk.Int64(847308),
                                },
                            },
                            Internal: sdk.String("quibusdam"),
                            NameAndKind: &shared.NameAndKind{
                                Kind: shared.NameAndKindKindEnumMean.ToPointer(),
                                Name: sdk.String("Judith Feest"),
                            },
                            ShortID: sdk.String("ipsa"),
                            StringList: &shared.StringList{
                                Elements: []string{
                                    "exercitationem",
                                    "culpa",
                                    "repudiandae",
                                    "aspernatur",
                                },
                            },
                            StructuredNameAndMetadata: &shared.CounterStructuredNameAndMetadata{
                                Metadata: &shared.CounterMetadata{
                                    Description: sdk.String("sapiente"),
                                    Kind: shared.CounterMetadataKindEnumMax.ToPointer(),
                                    OtherUnits: sdk.String("officia"),
                                    StandardUnits: shared.CounterMetadataStandardUnitsEnumMicroseconds.ToPointer(),
                                },
                                Name: &shared.CounterStructuredName{
                                    ComponentStepName: sdk.String("harum"),
                                    ExecutionStepName: sdk.String("ducimus"),
                                    InputIndex: sdk.Int(42454),
                                    Name: sdk.String("Myrtle Kshlerin"),
                                    Origin: shared.CounterStructuredNameOriginEnumSystem.ToPointer(),
                                    OriginNamespace: sdk.String("iure"),
                                    OriginalRequestingStepName: sdk.String("ab"),
                                    OriginalStepName: sdk.String("quaerat"),
                                    Portion: shared.CounterStructuredNamePortionEnumAll.ToPointer(),
                                    WorkerID: sdk.String("sapiente"),
                                },
                            },
                        },
                        shared.CounterUpdate{
                            Boolean: sdk.Bool(false),
                            Cumulative: sdk.Bool(false),
                            Distribution: &shared.DistributionUpdate{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(357984),
                                    LowBits: sdk.Int64(666005),
                                },
                                Histogram: &shared.Histogram{
                                    BucketCounts: []string{
                                        "quisquam",
                                        "provident",
                                    },
                                    FirstBucketOffset: sdk.Int(515595),
                                },
                                Max: &shared.SplitInt64{
                                    HighBits: sdk.Int(722392),
                                    LowBits: sdk.Int64(366147),
                                },
                                Min: &shared.SplitInt64{
                                    HighBits: sdk.Int(317632),
                                    LowBits: sdk.Int64(371213),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(328954),
                                    LowBits: sdk.Int64(273383),
                                },
                                SumOfSquares: sdk.Float64(196.91),
                            },
                            FloatingPoint: sdk.Float64(5469.63),
                            FloatingPointList: &shared.FloatingPointList{
                                Elements: []float64{
                                    8541.37,
                                },
                            },
                            FloatingPointMean: &shared.FloatingPointMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(257821),
                                    LowBits: sdk.Int64(39202),
                                },
                                Sum: sdk.Float64(7402.45),
                            },
                            Integer: &shared.SplitInt64{
                                HighBits: sdk.Int(751298),
                                LowBits: sdk.Int64(628314),
                            },
                            IntegerGauge: &shared.IntegerGauge{
                                Timestamp: sdk.String("porro"),
                                Value: &shared.SplitInt64{
                                    HighBits: sdk.Int(769789),
                                    LowBits: sdk.Int64(394724),
                                },
                            },
                            IntegerList: &shared.IntegerList{
                                Elements: []shared.SplitInt64{
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(743795),
                                        LowBits: sdk.Int64(856568),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(389287),
                                        LowBits: sdk.Int64(720319),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(315387),
                                        LowBits: sdk.Int64(979011),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(235482),
                                        LowBits: sdk.Int64(898826),
                                    },
                                },
                            },
                            IntegerMean: &shared.IntegerMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(803792),
                                    LowBits: sdk.Int64(586717),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(29080),
                                    LowBits: sdk.Int64(588158),
                                },
                            },
                            Internal: sdk.String("adipisci"),
                            NameAndKind: &shared.NameAndKind{
                                Kind: shared.NameAndKindKindEnumInvalid.ToPointer(),
                                Name: sdk.String("Kristie Mohr"),
                            },
                            ShortID: sdk.String("cum"),
                            StringList: &shared.StringList{
                                Elements: []string{
                                    "possimus",
                                    "fugit",
                                    "ipsam",
                                },
                            },
                            StructuredNameAndMetadata: &shared.CounterStructuredNameAndMetadata{
                                Metadata: &shared.CounterMetadata{
                                    Description: sdk.String("nostrum"),
                                    Kind: shared.CounterMetadataKindEnumSum.ToPointer(),
                                    OtherUnits: sdk.String("voluptatum"),
                                    StandardUnits: shared.CounterMetadataStandardUnitsEnumBytes.ToPointer(),
                                },
                                Name: &shared.CounterStructuredName{
                                    ComponentStepName: sdk.String("error"),
                                    ExecutionStepName: sdk.String("nobis"),
                                    InputIndex: sdk.Int(269600),
                                    Name: sdk.String("Dr. Monica Ratke"),
                                    Origin: shared.CounterStructuredNameOriginEnumSystem.ToPointer(),
                                    OriginNamespace: sdk.String("voluptatem"),
                                    OriginalRequestingStepName: sdk.String("repudiandae"),
                                    OriginalStepName: sdk.String("corporis"),
                                    Portion: shared.CounterStructuredNamePortionEnumKey.ToPointer(),
                                    WorkerID: sdk.String("eos"),
                                },
                            },
                        },
                    },
                    DynamicSourceSplit: &shared.DynamicSourceSplit{
                        Primary: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeIndependent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "maiores": "asperiores",
                                        "autem": "nesciunt",
                                        "cupiditate": "animi",
                                        "provident": "beatae",
                                    },
                                    map[string]interface{}{
                                        "mollitia": "nam",
                                    },
                                    map[string]interface{}{
                                        "quo": "fuga",
                                        "tempore": "commodi",
                                        "fugit": "suscipit",
                                        "voluptate": "nisi",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "provident": "laboriosam",
                                    "accusamus": "ab",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("itaque"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "eaque": "alias",
                                    "qui": "consequuntur",
                                    "vitae": "quidem",
                                    "sequi": "amet",
                                },
                            },
                        },
                        Residual: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeIndependent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "unde": "similique",
                                        "eligendi": "tempore",
                                        "amet": "debitis",
                                    },
                                    map[string]interface{}{
                                        "asperiores": "temporibus",
                                        "id": "atque",
                                        "quibusdam": "sit",
                                        "quo": "veniam",
                                    },
                                    map[string]interface{}{
                                        "provident": "vero",
                                        "earum": "doloremque",
                                    },
                                    map[string]interface{}{
                                        "alias": "doloremque",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "perspiciatis": "quam",
                                    "atque": "officia",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("ex"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "a": "laborum",
                                },
                            },
                        },
                    },
                    Errors: []shared.Status{
                        shared.Status{
                            Code: sdk.Int(801816),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "accusantium": "commodi",
                                },
                                map[string]interface{}{
                                    "totam": "tenetur",
                                    "voluptate": "quam",
                                    "quod": "vitae",
                                },
                                map[string]interface{}{
                                    "reiciendis": "quod",
                                    "voluptate": "inventore",
                                    "facere": "maxime",
                                    "fuga": "ab",
                                },
                                map[string]interface{}{
                                    "consectetur": "maiores",
                                    "sed": "animi",
                                },
                            },
                            Message: sdk.String("sequi"),
                        },
                    },
                    MetricUpdates: []shared.MetricUpdate{
                        shared.MetricUpdate{
                            Cumulative: sdk.Bool(false),
                            Distribution: sdk.String("voluptatum"),
                            Gauge: sdk.String("perferendis"),
                            Internal: sdk.String("laborum"),
                            Kind: sdk.String("omnis"),
                            MeanCount: sdk.String("nihil"),
                            MeanSum: sdk.String("tenetur"),
                            Name: &shared.MetricStructuredName{
                                Context: map[string]string{
                                    "velit": "adipisci",
                                    "non": "optio",
                                    "illum": "at",
                                    "tenetur": "molestias",
                                },
                                Name: sdk.String("Tamara Padberg"),
                                Origin: sdk.String("eum"),
                            },
                            Scalar: sdk.String("quasi"),
                            Set: sdk.String("quas"),
                            UpdateTime: sdk.String("odio"),
                        },
                        shared.MetricUpdate{
                            Cumulative: sdk.Bool(false),
                            Distribution: sdk.String("commodi"),
                            Gauge: sdk.String("porro"),
                            Internal: sdk.String("aliquid"),
                            Kind: sdk.String("mollitia"),
                            MeanCount: sdk.String("quidem"),
                            MeanSum: sdk.String("explicabo"),
                            Name: &shared.MetricStructuredName{
                                Context: map[string]string{
                                    "nulla": "magni",
                                },
                                Name: sdk.String("Clint Wiegand"),
                                Origin: sdk.String("ut"),
                            },
                            Scalar: sdk.String("facere"),
                            Set: sdk.String("voluptas"),
                            UpdateTime: sdk.String("doloribus"),
                        },
                        shared.MetricUpdate{
                            Cumulative: sdk.Bool(false),
                            Distribution: sdk.String("recusandae"),
                            Gauge: sdk.String("quisquam"),
                            Internal: sdk.String("facere"),
                            Kind: sdk.String("dignissimos"),
                            MeanCount: sdk.String("iste"),
                            MeanSum: sdk.String("provident"),
                            Name: &shared.MetricStructuredName{
                                Context: map[string]string{
                                    "sint": "aperiam",
                                },
                                Name: sdk.String("Natalie Howe"),
                                Origin: sdk.String("assumenda"),
                            },
                            Scalar: sdk.String("explicabo"),
                            Set: sdk.String("fugiat"),
                            UpdateTime: sdk.String("doloremque"),
                        },
                        shared.MetricUpdate{
                            Cumulative: sdk.Bool(false),
                            Distribution: sdk.String("voluptatem"),
                            Gauge: sdk.String("alias"),
                            Internal: sdk.String("velit"),
                            Kind: sdk.String("ullam"),
                            MeanCount: sdk.String("quis"),
                            MeanSum: sdk.String("velit"),
                            Name: &shared.MetricStructuredName{
                                Context: map[string]string{
                                    "quas": "maxime",
                                },
                                Name: sdk.String("Spencer Batz"),
                                Origin: sdk.String("maiores"),
                            },
                            Scalar: sdk.String("est"),
                            Set: sdk.String("fugit"),
                            UpdateTime: sdk.String("veritatis"),
                        },
                    },
                    Progress: &shared.ApproximateProgress{
                        PercentComplete: sdk.Float32(8996.52),
                        Position: &shared.Position{
                            ByteOffset: sdk.String("iste"),
                            ConcatPosition: &shared.ConcatPosition{
                                Index: sdk.Int(116463),
                                Position: &shared.Position{},
                            },
                            End: sdk.Bool(false),
                            Key: sdk.String("ipsam"),
                            RecordIndex: sdk.String("consequuntur"),
                            ShufflePosition: sdk.String("cumque"),
                        },
                        RemainingTime: sdk.String("quidem"),
                    },
                    ReportIndex: sdk.String("non"),
                    ReportedProgress: &shared.ApproximateReportedProgress{
                        ConsumedParallelism: &shared.ReportedParallelism{
                            IsInfinite: sdk.Bool(false),
                            Value: sdk.Float64(1095.69),
                        },
                        FractionConsumed: sdk.Float64(1234.95),
                        Position: &shared.Position{
                            ByteOffset: sdk.String("molestias"),
                            ConcatPosition: &shared.ConcatPosition{
                                Index: sdk.Int(107042),
                                Position: &shared.Position{},
                            },
                            End: sdk.Bool(false),
                            Key: sdk.String("autem"),
                            RecordIndex: sdk.String("ducimus"),
                            ShufflePosition: sdk.String("libero"),
                        },
                        RemainingParallelism: &shared.ReportedParallelism{
                            IsInfinite: sdk.Bool(false),
                            Value: sdk.Float64(5620.65),
                        },
                    },
                    RequestedLeaseDuration: sdk.String("necessitatibus"),
                    SourceFork: &shared.SourceFork{
                        Primary: &shared.SourceSplitShard{
                            DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "illum": "distinctio",
                                        "voluptatem": "non",
                                        "quaerat": "consequatur",
                                    },
                                    map[string]interface{}{
                                        "repellendus": "commodi",
                                        "quibusdam": "consectetur",
                                        "voluptas": "quaerat",
                                    },
                                    map[string]interface{}{
                                        "tenetur": "assumenda",
                                        "dolore": "enim",
                                        "ullam": "perspiciatis",
                                        "alias": "ex",
                                    },
                                    map[string]interface{}{
                                        "dicta": "quia",
                                        "commodi": "neque",
                                        "quibusdam": "numquam",
                                        "rem": "officiis",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "neque": "corporis",
                                    "quod": "dolores",
                                    "placeat": "excepturi",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("recusandae"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "dicta": "sapiente",
                                    "ipsum": "consequatur",
                                    "soluta": "necessitatibus",
                                },
                            },
                        },
                        PrimarySource: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "adipisci": "magni",
                                        "aperiam": "dolores",
                                    },
                                    map[string]interface{}{
                                        "iusto": "magni",
                                        "beatae": "aliquid",
                                        "ad": "voluptate",
                                        "vel": "minima",
                                    },
                                    map[string]interface{}{
                                        "vel": "laboriosam",
                                    },
                                    map[string]interface{}{
                                        "quasi": "rem",
                                        "dignissimos": "doloremque",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "provident": "facere",
                                    "sed": "inventore",
                                    "voluptatibus": "unde",
                                    "deserunt": "repellendus",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("consequatur"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "doloremque": "optio",
                                },
                            },
                        },
                        Residual: &shared.SourceSplitShard{
                            DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeIndependent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "maxime": "et",
                                        "beatae": "id",
                                        "consequatur": "quos",
                                        "ratione": "iure",
                                    },
                                    map[string]interface{}{
                                        "eos": "natus",
                                        "voluptatem": "suscipit",
                                    },
                                    map[string]interface{}{
                                        "facilis": "laudantium",
                                        "ullam": "aut",
                                        "quia": "officia",
                                    },
                                    map[string]interface{}{
                                        "corporis": "accusamus",
                                        "iusto": "sapiente",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "neque": "quidem",
                                    "quisquam": "praesentium",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("tempora"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "officiis": "sequi",
                                    "magni": "voluptatem",
                                },
                            },
                        },
                        ResidualSource: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "error": "voluptatibus",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "rerum": "dolorum",
                                    "quibusdam": "earum",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("excepturi"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "molestiae": "impedit",
                                    "error": "animi",
                                },
                            },
                        },
                    },
                    SourceOperationResponse: &shared.SourceOperationResponse{
                        GetMetadata: &shared.SourceGetMetadataResponse{
                            Metadata: &shared.SourceMetadata{
                                EstimatedSizeBytes: sdk.String("voluptatum"),
                                Infinite: sdk.Bool(false),
                                ProducesSortedKeys: sdk.Bool(false),
                            },
                        },
                        Split: &shared.SourceSplitResponse{
                            Bundles: []shared.DerivedSource{
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeIndependent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "incidunt": "eos",
                                                "magnam": "dolores",
                                                "aliquid": "eum",
                                                "vel": "ad",
                                            },
                                            map[string]interface{}{
                                                "illo": "suscipit",
                                                "quibusdam": "fugiat",
                                                "impedit": "culpa",
                                            },
                                            map[string]interface{}{
                                                "voluptates": "maiores",
                                                "nemo": "illo",
                                                "doloribus": "cumque",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "modi": "cumque",
                                            "ipsam": "occaecati",
                                            "ipsum": "accusamus",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("quisquam"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "fugit": "quo",
                                        },
                                    },
                                },
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeSiblingOfCurrent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "quibusdam": "ipsa",
                                                "accusamus": "placeat",
                                                "quam": "similique",
                                            },
                                            map[string]interface{}{
                                                "saepe": "facere",
                                                "nobis": "at",
                                                "molestias": "aut",
                                                "temporibus": "tenetur",
                                            },
                                            map[string]interface{}{
                                                "numquam": "corrupti",
                                                "similique": "dolore",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "reiciendis": "iste",
                                            "amet": "occaecati",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("aut"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "minima": "quos",
                                            "blanditiis": "quas",
                                            "voluptatem": "provident",
                                            "quas": "ipsum",
                                        },
                                    },
                                },
                            },
                            Outcome: shared.SourceSplitResponseOutcomeEnumSourceSplitOutcomeSplittingHappened.ToPointer(),
                            Shards: []shared.SourceSplitShard{
                                shared.SourceSplitShard{
                                    DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "recusandae": "a",
                                                "consectetur": "sapiente",
                                                "voluptatibus": "assumenda",
                                            },
                                            map[string]interface{}{
                                                "omnis": "delectus",
                                                "odio": "voluptatibus",
                                                "aut": "quam",
                                                "omnis": "similique",
                                            },
                                            map[string]interface{}{
                                                "modi": "facere",
                                                "neque": "quis",
                                                "in": "sed",
                                                "non": "porro",
                                            },
                                            map[string]interface{}{
                                                "soluta": "ipsa",
                                                "reiciendis": "labore",
                                                "vero": "eos",
                                                "quas": "quasi",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "praesentium": "iusto",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("fugiat"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "iure": "laudantium",
                                            "modi": "magnam",
                                        },
                                    },
                                },
                                shared.SourceSplitShard{
                                    DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeSiblingOfCurrent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "quibusdam": "praesentium",
                                                "enim": "animi",
                                                "unde": "quae",
                                                "eum": "nostrum",
                                            },
                                            map[string]interface{}{
                                                "laboriosam": "ratione",
                                                "blanditiis": "quidem",
                                                "illum": "reiciendis",
                                                "placeat": "dolores",
                                            },
                                            map[string]interface{}{
                                                "nesciunt": "quia",
                                            },
                                            map[string]interface{}{
                                                "voluptas": "quo",
                                                "laudantium": "dignissimos",
                                                "omnis": "omnis",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "dolorem": "quidem",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("molestiae"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "vitae": "dolor",
                                            "ad": "atque",
                                            "ut": "asperiores",
                                            "reprehenderit": "deserunt",
                                        },
                                    },
                                },
                                shared.SourceSplitShard{
                                    DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeSiblingOfCurrent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "impedit": "ex",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "natus": "vitae",
                                            "tenetur": "laudantium",
                                            "aspernatur": "eligendi",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("repudiandae"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "inventore": "ullam",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    StopPosition: &shared.Position{
                        ByteOffset: sdk.String("iusto"),
                        ConcatPosition: &shared.ConcatPosition{
                            Index: sdk.Int(82396),
                            Position: &shared.Position{},
                        },
                        End: sdk.Bool(false),
                        Key: sdk.String("voluptate"),
                        RecordIndex: sdk.String("sed"),
                        ShufflePosition: sdk.String("dolorem"),
                    },
                    TotalThrottlerWaitTimeSeconds: sdk.Float64(524.97),
                    WorkItemID: sdk.String("exercitationem"),
                },
                shared.WorkItemStatus{
                    Completed: sdk.Bool(false),
                    CounterUpdates: []shared.CounterUpdate{
                        shared.CounterUpdate{
                            Boolean: sdk.Bool(false),
                            Cumulative: sdk.Bool(false),
                            Distribution: &shared.DistributionUpdate{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(454165),
                                    LowBits: sdk.Int64(454232),
                                },
                                Histogram: &shared.Histogram{
                                    BucketCounts: []string{
                                        "minus",
                                        "a",
                                        "fuga",
                                        "totam",
                                    },
                                    FirstBucketOffset: sdk.Int(587539),
                                },
                                Max: &shared.SplitInt64{
                                    HighBits: sdk.Int(870100),
                                    LowBits: sdk.Int64(986594),
                                },
                                Min: &shared.SplitInt64{
                                    HighBits: sdk.Int(608172),
                                    LowBits: sdk.Int64(463695),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(349087),
                                    LowBits: sdk.Int64(915145),
                                },
                                SumOfSquares: sdk.Float64(1941.94),
                            },
                            FloatingPoint: sdk.Float64(3366.4),
                            FloatingPointList: &shared.FloatingPointList{
                                Elements: []float64{
                                    4264.81,
                                    5228.24,
                                },
                            },
                            FloatingPointMean: &shared.FloatingPointMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(397268),
                                    LowBits: sdk.Int64(44443),
                                },
                                Sum: sdk.Float64(5968.2),
                            },
                            Integer: &shared.SplitInt64{
                                HighBits: sdk.Int(145841),
                                LowBits: sdk.Int64(932057),
                            },
                            IntegerGauge: &shared.IntegerGauge{
                                Timestamp: sdk.String("unde"),
                                Value: &shared.SplitInt64{
                                    HighBits: sdk.Int(767778),
                                    LowBits: sdk.Int64(225001),
                                },
                            },
                            IntegerList: &shared.IntegerList{
                                Elements: []shared.SplitInt64{
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(837327),
                                        LowBits: sdk.Int64(792106),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(326942),
                                        LowBits: sdk.Int64(951901),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(104834),
                                        LowBits: sdk.Int64(114212),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(83530),
                                        LowBits: sdk.Int64(814398),
                                    },
                                },
                            },
                            IntegerMean: &shared.IntegerMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(937123),
                                    LowBits: sdk.Int64(672273),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(118020),
                                    LowBits: sdk.Int64(32737),
                                },
                            },
                            Internal: sdk.String("odit"),
                            NameAndKind: &shared.NameAndKind{
                                Kind: shared.NameAndKindKindEnumMin.ToPointer(),
                                Name: sdk.String("Miss Lloyd Funk"),
                            },
                            ShortID: sdk.String("facere"),
                            StringList: &shared.StringList{
                                Elements: []string{
                                    "omnis",
                                },
                            },
                            StructuredNameAndMetadata: &shared.CounterStructuredNameAndMetadata{
                                Metadata: &shared.CounterMetadata{
                                    Description: sdk.String("alias"),
                                    Kind: shared.CounterMetadataKindEnumLatestValue.ToPointer(),
                                    OtherUnits: sdk.String("officiis"),
                                    StandardUnits: shared.CounterMetadataStandardUnitsEnumTimestampMsec.ToPointer(),
                                },
                                Name: &shared.CounterStructuredName{
                                    ComponentStepName: sdk.String("quia"),
                                    ExecutionStepName: sdk.String("vitae"),
                                    InputIndex: sdk.Int(487839),
                                    Name: sdk.String("Jose Raynor"),
                                    Origin: shared.CounterStructuredNameOriginEnumUser.ToPointer(),
                                    OriginNamespace: sdk.String("sit"),
                                    OriginalRequestingStepName: sdk.String("possimus"),
                                    OriginalStepName: sdk.String("distinctio"),
                                    Portion: shared.CounterStructuredNamePortionEnumValue.ToPointer(),
                                    WorkerID: sdk.String("assumenda"),
                                },
                            },
                        },
                    },
                    DynamicSourceSplit: &shared.DynamicSourceSplit{
                        Primary: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeSiblingOfCurrent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "laudantium": "tempora",
                                        "esse": "doloremque",
                                    },
                                    map[string]interface{}{
                                        "reiciendis": "facilis",
                                        "aliquam": "repudiandae",
                                        "amet": "natus",
                                    },
                                    map[string]interface{}{
                                        "officiis": "eum",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "placeat": "ab",
                                    "ad": "blanditiis",
                                    "porro": "labore",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("impedit"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "earum": "ullam",
                                    "numquam": "enim",
                                },
                            },
                        },
                        Residual: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "fuga": "consectetur",
                                        "modi": "aspernatur",
                                        "explicabo": "suscipit",
                                        "ipsa": "eveniet",
                                    },
                                    map[string]interface{}{
                                        "nobis": "qui",
                                        "accusantium": "consequatur",
                                        "impedit": "recusandae",
                                    },
                                    map[string]interface{}{
                                        "deleniti": "est",
                                        "et": "expedita",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "quos": "maiores",
                                    "quidem": "in",
                                    "culpa": "doloremque",
                                    "fuga": "dicta",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("architecto"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "eligendi": "officiis",
                                    "dignissimos": "fugit",
                                },
                            },
                        },
                    },
                    Errors: []shared.Status{
                        shared.Status{
                            Code: sdk.Int(823990),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "natus": "esse",
                                },
                                map[string]interface{}{
                                    "deserunt": "ratione",
                                    "ipsa": "debitis",
                                    "iste": "deserunt",
                                    "hic": "ducimus",
                                },
                            },
                            Message: sdk.String("consequuntur"),
                        },
                    },
                    MetricUpdates: []shared.MetricUpdate{
                        shared.MetricUpdate{
                            Cumulative: sdk.Bool(false),
                            Distribution: sdk.String("libero"),
                            Gauge: sdk.String("quia"),
                            Internal: sdk.String("omnis"),
                            Kind: sdk.String("dicta"),
                            MeanCount: sdk.String("qui"),
                            MeanSum: sdk.String("explicabo"),
                            Name: &shared.MetricStructuredName{
                                Context: map[string]string{
                                    "amet": "consequatur",
                                },
                                Name: sdk.String("Jaime Frami"),
                                Origin: sdk.String("deserunt"),
                            },
                            Scalar: sdk.String("itaque"),
                            Set: sdk.String("distinctio"),
                            UpdateTime: sdk.String("iusto"),
                        },
                        shared.MetricUpdate{
                            Cumulative: sdk.Bool(false),
                            Distribution: sdk.String("dignissimos"),
                            Gauge: sdk.String("provident"),
                            Internal: sdk.String("occaecati"),
                            Kind: sdk.String("assumenda"),
                            MeanCount: sdk.String("sunt"),
                            MeanSum: sdk.String("odit"),
                            Name: &shared.MetricStructuredName{
                                Context: map[string]string{
                                    "deleniti": "optio",
                                    "quasi": "repellat",
                                    "atque": "magnam",
                                    "perspiciatis": "amet",
                                },
                                Name: sdk.String("Lawrence Hickle"),
                                Origin: sdk.String("porro"),
                            },
                            Scalar: sdk.String("quaerat"),
                            Set: sdk.String("magni"),
                            UpdateTime: sdk.String("cumque"),
                        },
                    },
                    Progress: &shared.ApproximateProgress{
                        PercentComplete: sdk.Float32(5526.87),
                        Position: &shared.Position{
                            ByteOffset: sdk.String("in"),
                            ConcatPosition: &shared.ConcatPosition{
                                Index: sdk.Int(413768),
                                Position: &shared.Position{},
                            },
                            End: sdk.Bool(false),
                            Key: sdk.String("maxime"),
                            RecordIndex: sdk.String("sed"),
                            ShufflePosition: sdk.String("minus"),
                        },
                        RemainingTime: sdk.String("consequuntur"),
                    },
                    ReportIndex: sdk.String("possimus"),
                    ReportedProgress: &shared.ApproximateReportedProgress{
                        ConsumedParallelism: &shared.ReportedParallelism{
                            IsInfinite: sdk.Bool(false),
                            Value: sdk.Float64(9634.7),
                        },
                        FractionConsumed: sdk.Float64(6908.71),
                        Position: &shared.Position{
                            ByteOffset: sdk.String("aliquam"),
                            ConcatPosition: &shared.ConcatPosition{
                                Index: sdk.Int(757962),
                                Position: &shared.Position{},
                            },
                            End: sdk.Bool(false),
                            Key: sdk.String("hic"),
                            RecordIndex: sdk.String("quo"),
                            ShufflePosition: sdk.String("illo"),
                        },
                        RemainingParallelism: &shared.ReportedParallelism{
                            IsInfinite: sdk.Bool(false),
                            Value: sdk.Float64(7513.47),
                        },
                    },
                    RequestedLeaseDuration: sdk.String("esse"),
                    SourceFork: &shared.SourceFork{
                        Primary: &shared.SourceSplitShard{
                            DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeIndependent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "alias": "reiciendis",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "numquam": "vitae",
                                    "maiores": "nam",
                                    "architecto": "rerum",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("assumenda"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "dolorem": "hic",
                                },
                            },
                        },
                        PrimarySource: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeSiblingOfCurrent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "magnam": "pariatur",
                                    },
                                    map[string]interface{}{
                                        "autem": "tempore",
                                        "recusandae": "nostrum",
                                        "officia": "voluptas",
                                    },
                                    map[string]interface{}{
                                        "corporis": "excepturi",
                                        "natus": "deleniti",
                                        "necessitatibus": "aspernatur",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "laborum": "vero",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("eos"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "temporibus": "id",
                                },
                            },
                        },
                        Residual: &shared.SourceSplitShard{
                            DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "minus": "sed",
                                        "nam": "quia",
                                        "iusto": "ab",
                                        "deserunt": "sed",
                                    },
                                    map[string]interface{}{
                                        "sint": "placeat",
                                        "ullam": "molestiae",
                                        "itaque": "rem",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "non": "recusandae",
                                    "omnis": "ipsa",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("aliquam"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "occaecati": "quibusdam",
                                },
                            },
                        },
                        ResidualSource: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "eius": "commodi",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "vel": "cupiditate",
                                    "modi": "nisi",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("explicabo"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "doloremque": "odio",
                                    "sit": "voluptatum",
                                },
                            },
                        },
                    },
                    SourceOperationResponse: &shared.SourceOperationResponse{
                        GetMetadata: &shared.SourceGetMetadataResponse{
                            Metadata: &shared.SourceMetadata{
                                EstimatedSizeBytes: sdk.String("tempora"),
                                Infinite: sdk.Bool(false),
                                ProducesSortedKeys: sdk.Bool(false),
                            },
                        },
                        Split: &shared.SourceSplitResponse{
                            Bundles: []shared.DerivedSource{
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeIndependent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "ratione": "molestiae",
                                                "optio": "saepe",
                                                "maiores": "accusantium",
                                            },
                                            map[string]interface{}{
                                                "eos": "consequuntur",
                                            },
                                            map[string]interface{}{
                                                "vitae": "occaecati",
                                                "labore": "fugiat",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "exercitationem": "veniam",
                                            "modi": "quasi",
                                            "quae": "similique",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("possimus"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "suscipit": "ex",
                                            "sint": "est",
                                            "doloribus": "provident",
                                            "alias": "deserunt",
                                        },
                                    },
                                },
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "molestiae": "maxime",
                                                "facere": "impedit",
                                                "cupiditate": "deleniti",
                                                "quasi": "maiores",
                                            },
                                            map[string]interface{}{
                                                "aliquid": "laudantium",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "corrupti": "quae",
                                            "facere": "ea",
                                            "libero": "nam",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("amet"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "minus": "hic",
                                        },
                                    },
                                },
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "labore": "laudantium",
                                            },
                                            map[string]interface{}{
                                                "adipisci": "veritatis",
                                                "nam": "voluptatibus",
                                                "magnam": "aperiam",
                                                "ducimus": "itaque",
                                            },
                                            map[string]interface{}{
                                                "numquam": "doloribus",
                                                "eligendi": "sapiente",
                                                "alias": "impedit",
                                                "numquam": "aspernatur",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "nihil": "voluptatum",
                                            "reiciendis": "vitae",
                                            "ullam": "nisi",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("consequuntur"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "ratione": "excepturi",
                                            "corrupti": "est",
                                        },
                                    },
                                },
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "ducimus": "nisi",
                                                "nisi": "dolor",
                                                "fugit": "dolore",
                                                "maxime": "maxime",
                                            },
                                            map[string]interface{}{
                                                "accusantium": "ea",
                                                "impedit": "totam",
                                                "optio": "est",
                                            },
                                            map[string]interface{}{
                                                "consequuntur": "repellendus",
                                            },
                                            map[string]interface{}{
                                                "dolores": "enim",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "perspiciatis": "magni",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("odio"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "quidem": "deleniti",
                                        },
                                    },
                                },
                            },
                            Outcome: shared.SourceSplitResponseOutcomeEnumSourceSplitOutcomeSplittingHappened.ToPointer(),
                            Shards: []shared.SourceSplitShard{
                                shared.SourceSplitShard{
                                    DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeIndependent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "at": "illum",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "sint": "exercitationem",
                                            "cum": "voluptatum",
                                            "facilis": "placeat",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("reiciendis"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "dolore": "pariatur",
                                        },
                                    },
                                },
                                shared.SourceSplitShard{
                                    DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "natus": "nisi",
                                                "provident": "amet",
                                            },
                                            map[string]interface{}{
                                                "nostrum": "qui",
                                            },
                                            map[string]interface{}{
                                                "molestiae": "dolore",
                                                "ullam": "velit",
                                                "adipisci": "cupiditate",
                                                "occaecati": "numquam",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "molestiae": "quas",
                                            "repellendus": "saepe",
                                            "amet": "distinctio",
                                            "vel": "necessitatibus",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("iste"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "corrupti": "cupiditate",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    StopPosition: &shared.Position{
                        ByteOffset: sdk.String("voluptatibus"),
                        ConcatPosition: &shared.ConcatPosition{
                            Index: sdk.Int(354678),
                            Position: &shared.Position{},
                        },
                        End: sdk.Bool(false),
                        Key: sdk.String("dolorum"),
                        RecordIndex: sdk.String("soluta"),
                        ShufflePosition: sdk.String("cum"),
                    },
                    TotalThrottlerWaitTimeSeconds: sdk.Float64(4498.8),
                    WorkItemID: sdk.String("delectus"),
                },
                shared.WorkItemStatus{
                    Completed: sdk.Bool(false),
                    CounterUpdates: []shared.CounterUpdate{
                        shared.CounterUpdate{
                            Boolean: sdk.Bool(false),
                            Cumulative: sdk.Bool(false),
                            Distribution: &shared.DistributionUpdate{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(414438),
                                    LowBits: sdk.Int64(142978),
                                },
                                Histogram: &shared.Histogram{
                                    BucketCounts: []string{
                                        "ullam",
                                        "doloremque",
                                    },
                                    FirstBucketOffset: sdk.Int(667804),
                                },
                                Max: &shared.SplitInt64{
                                    HighBits: sdk.Int(184204),
                                    LowBits: sdk.Int64(508773),
                                },
                                Min: &shared.SplitInt64{
                                    HighBits: sdk.Int(237189),
                                    LowBits: sdk.Int64(519132),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(183504),
                                    LowBits: sdk.Int64(648166),
                                },
                                SumOfSquares: sdk.Float64(7547.84),
                            },
                            FloatingPoint: sdk.Float64(2758.37),
                            FloatingPointList: &shared.FloatingPointList{
                                Elements: []float64{
                                    2207.46,
                                    6676.34,
                                    9677.59,
                                },
                            },
                            FloatingPointMean: &shared.FloatingPointMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(820462),
                                    LowBits: sdk.Int64(137831),
                                },
                                Sum: sdk.Float64(2307.74),
                            },
                            Integer: &shared.SplitInt64{
                                HighBits: sdk.Int(80998),
                                LowBits: sdk.Int64(325924),
                            },
                            IntegerGauge: &shared.IntegerGauge{
                                Timestamp: sdk.String("facilis"),
                                Value: &shared.SplitInt64{
                                    HighBits: sdk.Int(708360),
                                    LowBits: sdk.Int64(647125),
                                },
                            },
                            IntegerList: &shared.IntegerList{
                                Elements: []shared.SplitInt64{
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(370973),
                                        LowBits: sdk.Int64(29270),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(76786),
                                        LowBits: sdk.Int64(434955),
                                    },
                                },
                            },
                            IntegerMean: &shared.IntegerMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(279530),
                                    LowBits: sdk.Int64(908274),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(62224),
                                    LowBits: sdk.Int64(409021),
                                },
                            },
                            Internal: sdk.String("asperiores"),
                            NameAndKind: &shared.NameAndKind{
                                Kind: shared.NameAndKindKindEnumMin.ToPointer(),
                                Name: sdk.String("Aubrey Kemmer"),
                            },
                            ShortID: sdk.String("nemo"),
                            StringList: &shared.StringList{
                                Elements: []string{
                                    "architecto",
                                    "expedita",
                                    "quisquam",
                                },
                            },
                            StructuredNameAndMetadata: &shared.CounterStructuredNameAndMetadata{
                                Metadata: &shared.CounterMetadata{
                                    Description: sdk.String("praesentium"),
                                    Kind: shared.CounterMetadataKindEnumSet.ToPointer(),
                                    OtherUnits: sdk.String("assumenda"),
                                    StandardUnits: shared.CounterMetadataStandardUnitsEnumTimestampNsec.ToPointer(),
                                },
                                Name: &shared.CounterStructuredName{
                                    ComponentStepName: sdk.String("maiores"),
                                    ExecutionStepName: sdk.String("ipsum"),
                                    InputIndex: sdk.Int(412128),
                                    Name: sdk.String("Denise Reilly"),
                                    Origin: shared.CounterStructuredNameOriginEnumUser.ToPointer(),
                                    OriginNamespace: sdk.String("eos"),
                                    OriginalRequestingStepName: sdk.String("alias"),
                                    OriginalStepName: sdk.String("ad"),
                                    Portion: shared.CounterStructuredNamePortionEnumValue.ToPointer(),
                                    WorkerID: sdk.String("facere"),
                                },
                            },
                        },
                        shared.CounterUpdate{
                            Boolean: sdk.Bool(false),
                            Cumulative: sdk.Bool(false),
                            Distribution: &shared.DistributionUpdate{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(662515),
                                    LowBits: sdk.Int64(539537),
                                },
                                Histogram: &shared.Histogram{
                                    BucketCounts: []string{
                                        "aperiam",
                                        "dignissimos",
                                    },
                                    FirstBucketOffset: sdk.Int(463895),
                                },
                                Max: &shared.SplitInt64{
                                    HighBits: sdk.Int(264073),
                                    LowBits: sdk.Int64(683980),
                                },
                                Min: &shared.SplitInt64{
                                    HighBits: sdk.Int(435931),
                                    LowBits: sdk.Int64(538368),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(638219),
                                    LowBits: sdk.Int64(572450),
                                },
                                SumOfSquares: sdk.Float64(6740.77),
                            },
                            FloatingPoint: sdk.Float64(2247.77),
                            FloatingPointList: &shared.FloatingPointList{
                                Elements: []float64{
                                    8477.4,
                                    229.66,
                                },
                            },
                            FloatingPointMean: &shared.FloatingPointMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(561399),
                                    LowBits: sdk.Int64(377194),
                                },
                                Sum: sdk.Float64(7132.46),
                            },
                            Integer: &shared.SplitInt64{
                                HighBits: sdk.Int(375378),
                                LowBits: sdk.Int64(981865),
                            },
                            IntegerGauge: &shared.IntegerGauge{
                                Timestamp: sdk.String("ea"),
                                Value: &shared.SplitInt64{
                                    HighBits: sdk.Int(428199),
                                    LowBits: sdk.Int64(965726),
                                },
                            },
                            IntegerList: &shared.IntegerList{
                                Elements: []shared.SplitInt64{
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(970097),
                                        LowBits: sdk.Int64(7281),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(148714),
                                        LowBits: sdk.Int64(33407),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(913433),
                                        LowBits: sdk.Int64(590280),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(978460),
                                        LowBits: sdk.Int64(311449),
                                    },
                                },
                            },
                            IntegerMean: &shared.IntegerMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(256647),
                                    LowBits: sdk.Int64(248276),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(741024),
                                    LowBits: sdk.Int64(277935),
                                },
                            },
                            Internal: sdk.String("dolores"),
                            NameAndKind: &shared.NameAndKind{
                                Kind: shared.NameAndKindKindEnumMin.ToPointer(),
                                Name: sdk.String("Pam Mohr"),
                            },
                            ShortID: sdk.String("quisquam"),
                            StringList: &shared.StringList{
                                Elements: []string{
                                    "repellendus",
                                    "cum",
                                    "quibusdam",
                                },
                            },
                            StructuredNameAndMetadata: &shared.CounterStructuredNameAndMetadata{
                                Metadata: &shared.CounterMetadata{
                                    Description: sdk.String("est"),
                                    Kind: shared.CounterMetadataKindEnumMean.ToPointer(),
                                    OtherUnits: sdk.String("similique"),
                                    StandardUnits: shared.CounterMetadataStandardUnitsEnumMicroseconds.ToPointer(),
                                },
                                Name: &shared.CounterStructuredName{
                                    ComponentStepName: sdk.String("dicta"),
                                    ExecutionStepName: sdk.String("recusandae"),
                                    InputIndex: sdk.Int(956390),
                                    Name: sdk.String("Fred Bode"),
                                    Origin: shared.CounterStructuredNameOriginEnumSystem.ToPointer(),
                                    OriginNamespace: sdk.String("ullam"),
                                    OriginalRequestingStepName: sdk.String("atque"),
                                    OriginalStepName: sdk.String("doloribus"),
                                    Portion: shared.CounterStructuredNamePortionEnumValue.ToPointer(),
                                    WorkerID: sdk.String("aut"),
                                },
                            },
                        },
                    },
                    DynamicSourceSplit: &shared.DynamicSourceSplit{
                        Primary: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "nam": "animi",
                                        "labore": "voluptate",
                                        "voluptatibus": "quam",
                                        "nulla": "dolorem",
                                    },
                                    map[string]interface{}{
                                        "a": "perferendis",
                                        "quaerat": "excepturi",
                                        "aliquid": "dolore",
                                        "voluptatem": "illum",
                                    },
                                    map[string]interface{}{
                                        "culpa": "dicta",
                                        "atque": "ratione",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "quisquam": "atque",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("nihil"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "temporibus": "a",
                                    "ad": "cupiditate",
                                    "suscipit": "reiciendis",
                                },
                            },
                        },
                        Residual: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeSiblingOfCurrent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "mollitia": "possimus",
                                    },
                                    map[string]interface{}{
                                        "neque": "quam",
                                        "animi": "debitis",
                                        "voluptatum": "voluptatem",
                                    },
                                    map[string]interface{}{
                                        "vitae": "cumque",
                                        "architecto": "sint",
                                        "eligendi": "occaecati",
                                        "quis": "tempore",
                                    },
                                    map[string]interface{}{
                                        "iste": "unde",
                                        "quas": "laboriosam",
                                        "ducimus": "voluptatum",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "deserunt": "dolor",
                                    "hic": "iure",
                                    "sint": "autem",
                                    "iste": "cupiditate",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("ab"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "a": "dolor",
                                    "voluptatum": "molestias",
                                    "quod": "repudiandae",
                                },
                            },
                        },
                    },
                    Errors: []shared.Status{
                        shared.Status{
                            Code: sdk.Int(234347),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "numquam": "incidunt",
                                },
                                map[string]interface{}{
                                    "quos": "minus",
                                    "voluptate": "error",
                                },
                            },
                            Message: sdk.String("reprehenderit"),
                        },
                    },
                    MetricUpdates: []shared.MetricUpdate{
                        shared.MetricUpdate{
                            Cumulative: sdk.Bool(false),
                            Distribution: sdk.String("animi"),
                            Gauge: sdk.String("consequatur"),
                            Internal: sdk.String("voluptates"),
                            Kind: sdk.String("delectus"),
                            MeanCount: sdk.String("qui"),
                            MeanSum: sdk.String("delectus"),
                            Name: &shared.MetricStructuredName{
                                Context: map[string]string{
                                    "ipsum": "laboriosam",
                                    "doloremque": "sed",
                                },
                                Name: sdk.String("Doyle Wilderman"),
                                Origin: sdk.String("repellat"),
                            },
                            Scalar: sdk.String("cupiditate"),
                            Set: sdk.String("adipisci"),
                            UpdateTime: sdk.String("aliquam"),
                        },
                        shared.MetricUpdate{
                            Cumulative: sdk.Bool(false),
                            Distribution: sdk.String("illo"),
                            Gauge: sdk.String("veniam"),
                            Internal: sdk.String("sed"),
                            Kind: sdk.String("necessitatibus"),
                            MeanCount: sdk.String("possimus"),
                            MeanSum: sdk.String("dignissimos"),
                            Name: &shared.MetricStructuredName{
                                Context: map[string]string{
                                    "explicabo": "ullam",
                                    "non": "delectus",
                                    "incidunt": "quod",
                                    "sunt": "ullam",
                                },
                                Name: sdk.String("Antonia Von"),
                                Origin: sdk.String("in"),
                            },
                            Scalar: sdk.String("illo"),
                            Set: sdk.String("voluptate"),
                            UpdateTime: sdk.String("consequatur"),
                        },
                    },
                    Progress: &shared.ApproximateProgress{
                        PercentComplete: sdk.Float32(9621.2),
                        Position: &shared.Position{
                            ByteOffset: sdk.String("incidunt"),
                            ConcatPosition: &shared.ConcatPosition{
                                Index: sdk.Int(293023),
                                Position: &shared.Position{},
                            },
                            End: sdk.Bool(false),
                            Key: sdk.String("nemo"),
                            RecordIndex: sdk.String("est"),
                            ShufflePosition: sdk.String("quo"),
                        },
                        RemainingTime: sdk.String("maxime"),
                    },
                    ReportIndex: sdk.String("delectus"),
                    ReportedProgress: &shared.ApproximateReportedProgress{
                        ConsumedParallelism: &shared.ReportedParallelism{
                            IsInfinite: sdk.Bool(false),
                            Value: sdk.Float64(3853.83),
                        },
                        FractionConsumed: sdk.Float64(3875.67),
                        Position: &shared.Position{
                            ByteOffset: sdk.String("quam"),
                            ConcatPosition: &shared.ConcatPosition{
                                Index: sdk.Int(686690),
                                Position: &shared.Position{},
                            },
                            End: sdk.Bool(false),
                            Key: sdk.String("officia"),
                            RecordIndex: sdk.String("repellat"),
                            ShufflePosition: sdk.String("cupiditate"),
                        },
                        RemainingParallelism: &shared.ReportedParallelism{
                            IsInfinite: sdk.Bool(false),
                            Value: sdk.Float64(7456.67),
                        },
                    },
                    RequestedLeaseDuration: sdk.String("tempore"),
                    SourceFork: &shared.SourceFork{
                        Primary: &shared.SourceSplitShard{
                            DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "atque": "ad",
                                    },
                                    map[string]interface{}{
                                        "voluptates": "ut",
                                        "nesciunt": "ab",
                                        "quibusdam": "suscipit",
                                        "quidem": "delectus",
                                    },
                                    map[string]interface{}{
                                        "cumque": "voluptatum",
                                        "sequi": "atque",
                                    },
                                    map[string]interface{}{
                                        "expedita": "rerum",
                                        "totam": "quod",
                                        "aspernatur": "eaque",
                                        "impedit": "nam",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "odio": "delectus",
                                    "minus": "ut",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("distinctio"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "eos": "veniam",
                                    "repudiandae": "sint",
                                },
                            },
                        },
                        PrimarySource: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "eos": "amet",
                                        "incidunt": "porro",
                                    },
                                    map[string]interface{}{
                                        "reiciendis": "voluptate",
                                        "tempore": "in",
                                        "omnis": "possimus",
                                    },
                                    map[string]interface{}{
                                        "recusandae": "expedita",
                                        "iusto": "esse",
                                        "harum": "ad",
                                        "quod": "ratione",
                                    },
                                    map[string]interface{}{
                                        "vero": "dolore",
                                        "nam": "officia",
                                        "maiores": "cupiditate",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "saepe": "enim",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("eaque"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "eveniet": "delectus",
                                    "deleniti": "provident",
                                },
                            },
                        },
                        Residual: &shared.SourceSplitShard{
                            DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "tempora": "nam",
                                        "numquam": "odio",
                                    },
                                    map[string]interface{}{
                                        "maiores": "veritatis",
                                        "autem": "earum",
                                    },
                                    map[string]interface{}{
                                        "ex": "possimus",
                                        "nesciunt": "corrupti",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "fuga": "sequi",
                                    "maxime": "numquam",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("laborum"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "autem": "adipisci",
                                    "sunt": "rerum",
                                    "occaecati": "provident",
                                    "necessitatibus": "fugit",
                                },
                            },
                        },
                        ResidualSource: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeIndependent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "fugiat": "blanditiis",
                                        "a": "natus",
                                        "sapiente": "repellendus",
                                        "facilis": "molestias",
                                    },
                                    map[string]interface{}{
                                        "et": "accusantium",
                                        "maiores": "nisi",
                                    },
                                    map[string]interface{}{
                                        "tempore": "expedita",
                                    },
                                    map[string]interface{}{
                                        "blanditiis": "vitae",
                                        "iusto": "atque",
                                        "velit": "molestiae",
                                        "nam": "aperiam",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "mollitia": "asperiores",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("at"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "quam": "deleniti",
                                    "rem": "vel",
                                    "eos": "labore",
                                    "sunt": "blanditiis",
                                },
                            },
                        },
                    },
                    SourceOperationResponse: &shared.SourceOperationResponse{
                        GetMetadata: &shared.SourceGetMetadataResponse{
                            Metadata: &shared.SourceMetadata{
                                EstimatedSizeBytes: sdk.String("iste"),
                                Infinite: sdk.Bool(false),
                                ProducesSortedKeys: sdk.Bool(false),
                            },
                        },
                        Split: &shared.SourceSplitResponse{
                            Bundles: []shared.DerivedSource{
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "blanditiis": "ducimus",
                                                "consectetur": "sapiente",
                                            },
                                            map[string]interface{}{
                                                "accusantium": "ratione",
                                                "consectetur": "asperiores",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "sint": "possimus",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("tempore"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "quasi": "consequuntur",
                                            "nemo": "nobis",
                                            "debitis": "labore",
                                            "veritatis": "minima",
                                        },
                                    },
                                },
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "expedita": "error",
                                                "placeat": "temporibus",
                                                "voluptate": "earum",
                                            },
                                            map[string]interface{}{
                                                "odit": "odit",
                                                "eius": "error",
                                            },
                                            map[string]interface{}{
                                                "dolorum": "alias",
                                                "itaque": "ab",
                                            },
                                            map[string]interface{}{
                                                "amet": "cum",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "corrupti": "non",
                                            "esse": "vero",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("eligendi"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "omnis": "recusandae",
                                            "architecto": "voluptatibus",
                                        },
                                    },
                                },
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeIndependent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "amet": "cumque",
                                                "dolore": "optio",
                                                "quo": "repudiandae",
                                                "tempora": "libero",
                                            },
                                            map[string]interface{}{
                                                "illum": "iusto",
                                                "aliquid": "sint",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "repellat": "sapiente",
                                            "consectetur": "eligendi",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("ullam"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "eius": "dignissimos",
                                            "corporis": "perferendis",
                                        },
                                    },
                                },
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "nihil": "officiis",
                                                "dolore": "magnam",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "ipsam": "dicta",
                                            "hic": "praesentium",
                                            "libero": "consequatur",
                                            "totam": "tempora",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("quo"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "sunt": "omnis",
                                        },
                                    },
                                },
                            },
                            Outcome: shared.SourceSplitResponseOutcomeEnumSourceSplitOutcomeUseCurrent.ToPointer(),
                            Shards: []shared.SourceSplitShard{
                                shared.SourceSplitShard{
                                    DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "deserunt": "odit",
                                            },
                                            map[string]interface{}{
                                                "corporis": "quaerat",
                                                "suscipit": "ducimus",
                                            },
                                            map[string]interface{}{
                                                "excepturi": "modi",
                                                "corrupti": "nihil",
                                                "eius": "placeat",
                                                "fugit": "facere",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "nobis": "porro",
                                            "labore": "perspiciatis",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("ducimus"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "qui": "consectetur",
                                        },
                                    },
                                },
                                shared.SourceSplitShard{
                                    DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "aliquid": "cum",
                                                "fugiat": "rem",
                                            },
                                            map[string]interface{}{
                                                "officiis": "corporis",
                                                "repellendus": "aut",
                                                "voluptatem": "libero",
                                                "excepturi": "odio",
                                            },
                                            map[string]interface{}{
                                                "officiis": "delectus",
                                                "magni": "sit",
                                                "velit": "voluptatum",
                                            },
                                            map[string]interface{}{
                                                "neque": "aspernatur",
                                                "eaque": "corporis",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "aut": "impedit",
                                            "quod": "quo",
                                            "architecto": "voluptatem",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("perspiciatis"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "eius": "aperiam",
                                            "voluptatem": "non",
                                        },
                                    },
                                },
                                shared.SourceSplitShard{
                                    DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "ipsum": "debitis",
                                                "quis": "eaque",
                                                "incidunt": "ut",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "aliquid": "ullam",
                                            "maiores": "debitis",
                                            "reprehenderit": "eos",
                                            "assumenda": "cumque",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("ut"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "nihil": "quam",
                                        },
                                    },
                                },
                                shared.SourceSplitShard{
                                    DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeSiblingOfCurrent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "placeat": "adipisci",
                                                "tenetur": "non",
                                                "accusantium": "corrupti",
                                                "itaque": "earum",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "dicta": "corporis",
                                            "impedit": "eveniet",
                                            "cum": "dolore",
                                            "illum": "ea",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("officiis"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "accusamus": "animi",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    StopPosition: &shared.Position{
                        ByteOffset: sdk.String("necessitatibus"),
                        ConcatPosition: &shared.ConcatPosition{
                            Index: sdk.Int(29600),
                            Position: &shared.Position{},
                        },
                        End: sdk.Bool(false),
                        Key: sdk.String("maiores"),
                        RecordIndex: sdk.String("odio"),
                        ShufflePosition: sdk.String("veniam"),
                    },
                    TotalThrottlerWaitTimeSeconds: sdk.Float64(6831.92),
                    WorkItemID: sdk.String("itaque"),
                },
            },
            WorkerID: sdk.String("possimus"),
        },
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("eligendi"),
        JobID: "id",
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quas",
        QuotaUser: sdk.String("soluta"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("unde"),
    }, operations.DataflowProjectsJobsWorkItemsReportStatusSecurity{
        Option1: &operations.DataflowProjectsJobsWorkItemsReportStatusSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportWorkItemStatusResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsFlexTemplatesLaunch

Launch a job with a FlexTemplate.

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
    res, err := s.Projects.DataflowProjectsLocationsFlexTemplatesLaunch(ctx, operations.DataflowProjectsLocationsFlexTemplatesLaunchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LaunchFlexTemplateRequest: &shared.LaunchFlexTemplateRequest{
            LaunchParameter: &shared.LaunchFlexTemplateParameter{
                ContainerSpec: &shared.ContainerSpec{
                    DefaultEnvironment: &shared.FlexTemplateRuntimeEnvironment{
                        AdditionalExperiments: []string{
                            "unde",
                            "sed",
                            "suscipit",
                            "facere",
                        },
                        AdditionalUserLabels: map[string]string{
                            "nam": "quaerat",
                            "corrupti": "sint",
                            "eius": "vel",
                            "quasi": "vero",
                        },
                        AutoscalingAlgorithm: shared.FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnumAutoscalingAlgorithmNone.ToPointer(),
                        DiskSizeGb: sdk.Int(253916),
                        DumpHeapOnOom: sdk.Bool(false),
                        EnableLauncherVMSerialPortLogging: sdk.Bool(false),
                        EnableStreamingEngine: sdk.Bool(false),
                        FlexrsGoal: shared.FlexTemplateRuntimeEnvironmentFlexrsGoalEnumFlexrsUnspecified.ToPointer(),
                        IPConfiguration: shared.FlexTemplateRuntimeEnvironmentIPConfigurationEnumWorkerIPUnspecified.ToPointer(),
                        KmsKeyName: sdk.String("optio"),
                        LauncherMachineType: sdk.String("nobis"),
                        MachineType: sdk.String("recusandae"),
                        MaxWorkers: sdk.Int(412897),
                        Network: sdk.String("possimus"),
                        NumWorkers: sdk.Int(589098),
                        SaveHeapDumpsToGcsPath: sdk.String("veniam"),
                        SDKContainerImage: sdk.String("sit"),
                        ServiceAccountEmail: sdk.String("fugit"),
                        StagingLocation: sdk.String("a"),
                        Subnetwork: sdk.String("consequatur"),
                        TempLocation: sdk.String("vero"),
                        WorkerRegion: sdk.String("id"),
                        WorkerZone: sdk.String("error"),
                        Zone: sdk.String("ratione"),
                    },
                    Image: sdk.String("perferendis"),
                    ImageRepositoryCertPath: sdk.String("distinctio"),
                    ImageRepositoryPasswordSecretID: sdk.String("voluptas"),
                    ImageRepositoryUsernameSecretID: sdk.String("sint"),
                    Metadata: &shared.TemplateMetadata{
                        Description: sdk.String("maiores"),
                        Name: sdk.String("Lee Runte"),
                        Parameters: []shared.ParameterMetadata{
                            shared.ParameterMetadata{
                                CustomMetadata: map[string]string{
                                    "delectus": "quos",
                                },
                                GroupName: sdk.String("deleniti"),
                                HelpText: sdk.String("enim"),
                                IsOptional: sdk.Bool(false),
                                Label: sdk.String("sit"),
                                Name: sdk.String("Ada Barrows"),
                                ParamType: shared.ParameterMetadataParamTypeEnumText.ToPointer(),
                                ParentName: sdk.String("veritatis"),
                                ParentTriggerValues: []string{
                                    "doloremque",
                                    "quas",
                                },
                                Regexes: []string{
                                    "perferendis",
                                },
                            },
                            shared.ParameterMetadata{
                                CustomMetadata: map[string]string{
                                    "quas": "blanditiis",
                                    "laudantium": "voluptates",
                                },
                                GroupName: sdk.String("minus"),
                                HelpText: sdk.String("autem"),
                                IsOptional: sdk.Bool(false),
                                Label: sdk.String("vel"),
                                Name: sdk.String("Olga Feeney"),
                                ParamType: shared.ParameterMetadataParamTypeEnumMachineType.ToPointer(),
                                ParentName: sdk.String("perspiciatis"),
                                ParentTriggerValues: []string{
                                    "ullam",
                                    "unde",
                                },
                                Regexes: []string{
                                    "quidem",
                                    "magnam",
                                    "doloremque",
                                    "accusamus",
                                },
                            },
                        },
                    },
                    SDKInfo: &shared.SDKInfo{
                        Language: shared.SDKInfoLanguageEnumGo.ToPointer(),
                        Version: sdk.String("sunt"),
                    },
                },
                ContainerSpecGcsPath: sdk.String("voluptas"),
                Environment: &shared.FlexTemplateRuntimeEnvironment{
                    AdditionalExperiments: []string{
                        "est",
                        "earum",
                        "nihil",
                        "nostrum",
                    },
                    AdditionalUserLabels: map[string]string{
                        "perferendis": "nam",
                        "ullam": "ratione",
                        "eos": "id",
                    },
                    AutoscalingAlgorithm: shared.FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnumAutoscalingAlgorithmUnknown.ToPointer(),
                    DiskSizeGb: sdk.Int(851324),
                    DumpHeapOnOom: sdk.Bool(false),
                    EnableLauncherVMSerialPortLogging: sdk.Bool(false),
                    EnableStreamingEngine: sdk.Bool(false),
                    FlexrsGoal: shared.FlexTemplateRuntimeEnvironmentFlexrsGoalEnumFlexrsSpeedOptimized.ToPointer(),
                    IPConfiguration: shared.FlexTemplateRuntimeEnvironmentIPConfigurationEnumWorkerIPUnspecified.ToPointer(),
                    KmsKeyName: sdk.String("reprehenderit"),
                    LauncherMachineType: sdk.String("eligendi"),
                    MachineType: sdk.String("cum"),
                    MaxWorkers: sdk.Int(633825),
                    Network: sdk.String("culpa"),
                    NumWorkers: sdk.Int(955126),
                    SaveHeapDumpsToGcsPath: sdk.String("magnam"),
                    SDKContainerImage: sdk.String("eius"),
                    ServiceAccountEmail: sdk.String("ad"),
                    StagingLocation: sdk.String("quia"),
                    Subnetwork: sdk.String("quod"),
                    TempLocation: sdk.String("quaerat"),
                    WorkerRegion: sdk.String("voluptatum"),
                    WorkerZone: sdk.String("numquam"),
                    Zone: sdk.String("explicabo"),
                },
                JobName: sdk.String("eligendi"),
                LaunchOptions: map[string]string{
                    "tempore": "odit",
                    "est": "at",
                    "ipsum": "explicabo",
                },
                Parameters: map[string]string{
                    "est": "sapiente",
                    "necessitatibus": "voluptatum",
                    "quasi": "mollitia",
                    "voluptatum": "blanditiis",
                },
                TransformNameMappings: map[string]string{
                    "ut": "incidunt",
                    "labore": "ut",
                    "enim": "nihil",
                    "ratione": "tenetur",
                },
                Update: sdk.Bool(false),
            },
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("quam"),
        Location: "consectetur",
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "nesciunt",
        QuotaUser: sdk.String("earum"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.DataflowProjectsLocationsFlexTemplatesLaunchSecurity{
        Option1: &operations.DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LaunchFlexTemplateResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsJobsCreate

Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.

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
    res, err := s.Projects.DataflowProjectsLocationsJobsCreate(ctx, operations.DataflowProjectsLocationsJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        JobInput: &shared.JobInput{
            ClientRequestID: sdk.String("quos"),
            CreateTime: sdk.String("sed"),
            CreatedFromSnapshotID: sdk.String("eaque"),
            CurrentState: shared.JobCurrentStateEnumJobStateDrained.ToPointer(),
            CurrentStateTime: sdk.String("ratione"),
            Environment: &shared.EnvironmentInput{
                ClusterManagerAPIService: sdk.String("nihil"),
                Dataset: sdk.String("unde"),
                DebugOptions: &shared.DebugOptions{
                    EnableHotKeyLogging: sdk.Bool(false),
                },
                Experiments: []string{
                    "id",
                    "ex",
                    "occaecati",
                },
                FlexResourceSchedulingGoal: shared.EnvironmentFlexResourceSchedulingGoalEnumFlexrsCostOptimized.ToPointer(),
                InternalExperiments: map[string]interface{}{
                    "ad": "asperiores",
                    "nam": "cumque",
                    "sapiente": "quam",
                    "occaecati": "repellendus",
                },
                SDKPipelineOptions: map[string]interface{}{
                    "dicta": "rem",
                    "fuga": "odio",
                    "totam": "magni",
                },
                ServiceAccountEmail: sdk.String("eos"),
                ServiceKmsKeyName: sdk.String("harum"),
                ServiceOptions: []string{
                    "omnis",
                    "quis",
                    "quos",
                    "natus",
                },
                TempStoragePrefix: sdk.String("aliquam"),
                UserAgent: map[string]interface{}{
                    "nisi": "praesentium",
                    "eum": "vitae",
                    "animi": "possimus",
                    "libero": "ullam",
                },
                Version: map[string]interface{}{
                    "maiores": "iste",
                    "accusamus": "ipsam",
                },
                WorkerPools: []shared.WorkerPool{
                    shared.WorkerPool{
                        AutoscalingSettings: &shared.AutoscalingSettings{
                            Algorithm: shared.AutoscalingSettingsAlgorithmEnumAutoscalingAlgorithmNone.ToPointer(),
                            MaxNumWorkers: sdk.Int(356253),
                        },
                        DataDisks: []shared.Disk{
                            shared.Disk{
                                DiskType: sdk.String("eligendi"),
                                MountPoint: sdk.String("occaecati"),
                                SizeGb: sdk.Int(986330),
                            },
                        },
                        DefaultPackageSet: shared.WorkerPoolDefaultPackageSetEnumDefaultPackageSetPython.ToPointer(),
                        DiskSizeGb: sdk.Int(526322),
                        DiskSourceImage: sdk.String("a"),
                        DiskType: sdk.String("nihil"),
                        IPConfiguration: shared.WorkerPoolIPConfigurationEnumWorkerIPPublic.ToPointer(),
                        Kind: sdk.String("aut"),
                        MachineType: sdk.String("magni"),
                        Metadata: map[string]string{
                            "voluptatibus": "nulla",
                            "quod": "non",
                            "dolore": "enim",
                        },
                        Network: sdk.String("alias"),
                        NumThreadsPerWorker: sdk.Int(500677),
                        NumWorkers: sdk.Int(264204),
                        OnHostMaintenance: sdk.String("illo"),
                        Packages: []shared.Package{
                            shared.Package{
                                Location: sdk.String("et"),
                                Name: sdk.String("Stacey Grimes"),
                            },
                            shared.Package{
                                Location: sdk.String("ex"),
                                Name: sdk.String("Allison Mann"),
                            },
                            shared.Package{
                                Location: sdk.String("hic"),
                                Name: sdk.String("Harry Kozey"),
                            },
                            shared.Package{
                                Location: sdk.String("inventore"),
                                Name: sdk.String("Hugh Jacobi"),
                            },
                        },
                        PoolArgs: map[string]interface{}{
                            "reprehenderit": "soluta",
                            "ipsum": "vel",
                        },
                        SDKHarnessContainerImages: []shared.SDKHarnessContainerImage{
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "vel",
                                    "distinctio",
                                    "cupiditate",
                                    "hic",
                                },
                                ContainerImage: sdk.String("quis"),
                                EnvironmentID: sdk.String("deleniti"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "quod",
                                    "saepe",
                                },
                                ContainerImage: sdk.String("ad"),
                                EnvironmentID: sdk.String("magni"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "minus",
                                    "aliquid",
                                },
                                ContainerImage: sdk.String("quam"),
                                EnvironmentID: sdk.String("ea"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "architecto",
                                    "fuga",
                                },
                                ContainerImage: sdk.String("totam"),
                                EnvironmentID: sdk.String("velit"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                        },
                        Subnetwork: sdk.String("quasi"),
                        TaskrunnerSettings: &shared.TaskRunnerSettings{
                            Alsologtostderr: sdk.Bool(false),
                            BaseTaskDir: sdk.String("sed"),
                            BaseURL: sdk.String("officiis"),
                            CommandlinesFileName: sdk.String("veniam"),
                            ContinueOnException: sdk.Bool(false),
                            DataflowAPIVersion: sdk.String("quae"),
                            HarnessCommand: sdk.String("dolore"),
                            LanguageHint: sdk.String("in"),
                            LogDir: sdk.String("libero"),
                            LogToSerialconsole: sdk.Bool(false),
                            LogUploadLocation: sdk.String("ut"),
                            OauthScopes: []string{
                                "quia",
                                "beatae",
                                "porro",
                                "cumque",
                            },
                            ParallelWorkerSettings: &shared.WorkerSettings{
                                BaseURL: sdk.String("distinctio"),
                                ReportingEnabled: sdk.Bool(false),
                                ServicePath: sdk.String("numquam"),
                                ShuffleServicePath: sdk.String("fugit"),
                                TempStoragePrefix: sdk.String("amet"),
                                WorkerID: sdk.String("culpa"),
                            },
                            StreamingWorkerMainClass: sdk.String("facilis"),
                            TaskGroup: sdk.String("minus"),
                            TaskUser: sdk.String("vero"),
                            TempStoragePrefix: sdk.String("impedit"),
                            VMID: sdk.String("omnis"),
                            WorkflowFileName: sdk.String("et"),
                        },
                        TeardownPolicy: shared.WorkerPoolTeardownPolicyEnumTeardownNever.ToPointer(),
                        WorkerHarnessContainerImage: sdk.String("fuga"),
                        Zone: sdk.String("est"),
                    },
                    shared.WorkerPool{
                        AutoscalingSettings: &shared.AutoscalingSettings{
                            Algorithm: shared.AutoscalingSettingsAlgorithmEnumAutoscalingAlgorithmBasic.ToPointer(),
                            MaxNumWorkers: sdk.Int(854646),
                        },
                        DataDisks: []shared.Disk{
                            shared.Disk{
                                DiskType: sdk.String("totam"),
                                MountPoint: sdk.String("praesentium"),
                                SizeGb: sdk.Int(885721),
                            },
                            shared.Disk{
                                DiskType: sdk.String("esse"),
                                MountPoint: sdk.String("vitae"),
                                SizeGb: sdk.Int(965117),
                            },
                            shared.Disk{
                                DiskType: sdk.String("laboriosam"),
                                MountPoint: sdk.String("minus"),
                                SizeGb: sdk.Int(289410),
                            },
                            shared.Disk{
                                DiskType: sdk.String("quas"),
                                MountPoint: sdk.String("sed"),
                                SizeGb: sdk.Int(330617),
                            },
                        },
                        DefaultPackageSet: shared.WorkerPoolDefaultPackageSetEnumDefaultPackageSetUnknown.ToPointer(),
                        DiskSizeGb: sdk.Int(845238),
                        DiskSourceImage: sdk.String("reprehenderit"),
                        DiskType: sdk.String("voluptate"),
                        IPConfiguration: shared.WorkerPoolIPConfigurationEnumWorkerIPPublic.ToPointer(),
                        Kind: sdk.String("et"),
                        MachineType: sdk.String("eveniet"),
                        Metadata: map[string]string{
                            "hic": "at",
                            "perferendis": "in",
                        },
                        Network: sdk.String("eius"),
                        NumThreadsPerWorker: sdk.Int(14349),
                        NumWorkers: sdk.Int(8446),
                        OnHostMaintenance: sdk.String("iste"),
                        Packages: []shared.Package{
                            shared.Package{
                                Location: sdk.String("repellat"),
                                Name: sdk.String("Bryant Crooks"),
                            },
                            shared.Package{
                                Location: sdk.String("voluptates"),
                                Name: sdk.String("Chelsea Stehr V"),
                            },
                            shared.Package{
                                Location: sdk.String("voluptate"),
                                Name: sdk.String("Pedro Stamm V"),
                            },
                            shared.Package{
                                Location: sdk.String("quo"),
                                Name: sdk.String("Pearl Yost"),
                            },
                        },
                        PoolArgs: map[string]interface{}{
                            "odio": "atque",
                            "similique": "quia",
                            "architecto": "ea",
                            "accusamus": "illo",
                        },
                        SDKHarnessContainerImages: []shared.SDKHarnessContainerImage{
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "laborum",
                                    "a",
                                    "repudiandae",
                                },
                                ContainerImage: sdk.String("minus"),
                                EnvironmentID: sdk.String("officia"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "illo",
                                    "cupiditate",
                                },
                                ContainerImage: sdk.String("veritatis"),
                                EnvironmentID: sdk.String("aliquam"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "atque",
                                    "dicta",
                                    "magnam",
                                },
                                ContainerImage: sdk.String("doloremque"),
                                EnvironmentID: sdk.String("cum"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                        },
                        Subnetwork: sdk.String("suscipit"),
                        TaskrunnerSettings: &shared.TaskRunnerSettings{
                            Alsologtostderr: sdk.Bool(false),
                            BaseTaskDir: sdk.String("eius"),
                            BaseURL: sdk.String("maiores"),
                            CommandlinesFileName: sdk.String("delectus"),
                            ContinueOnException: sdk.Bool(false),
                            DataflowAPIVersion: sdk.String("quos"),
                            HarnessCommand: sdk.String("id"),
                            LanguageHint: sdk.String("officiis"),
                            LogDir: sdk.String("ab"),
                            LogToSerialconsole: sdk.Bool(false),
                            LogUploadLocation: sdk.String("voluptate"),
                            OauthScopes: []string{
                                "itaque",
                            },
                            ParallelWorkerSettings: &shared.WorkerSettings{
                                BaseURL: sdk.String("repellat"),
                                ReportingEnabled: sdk.Bool(false),
                                ServicePath: sdk.String("voluptatem"),
                                ShuffleServicePath: sdk.String("dolor"),
                                TempStoragePrefix: sdk.String("distinctio"),
                                WorkerID: sdk.String("quaerat"),
                            },
                            StreamingWorkerMainClass: sdk.String("a"),
                            TaskGroup: sdk.String("neque"),
                            TaskUser: sdk.String("nihil"),
                            TempStoragePrefix: sdk.String("recusandae"),
                            VMID: sdk.String("numquam"),
                            WorkflowFileName: sdk.String("mollitia"),
                        },
                        TeardownPolicy: shared.WorkerPoolTeardownPolicyEnumTeardownOnSuccess.ToPointer(),
                        WorkerHarnessContainerImage: sdk.String("blanditiis"),
                        Zone: sdk.String("suscipit"),
                    },
                    shared.WorkerPool{
                        AutoscalingSettings: &shared.AutoscalingSettings{
                            Algorithm: shared.AutoscalingSettingsAlgorithmEnumAutoscalingAlgorithmNone.ToPointer(),
                            MaxNumWorkers: sdk.Int(338542),
                        },
                        DataDisks: []shared.Disk{
                            shared.Disk{
                                DiskType: sdk.String("corporis"),
                                MountPoint: sdk.String("iste"),
                                SizeGb: sdk.Int(411669),
                            },
                            shared.Disk{
                                DiskType: sdk.String("autem"),
                                MountPoint: sdk.String("voluptate"),
                                SizeGb: sdk.Int(199228),
                            },
                        },
                        DefaultPackageSet: shared.WorkerPoolDefaultPackageSetEnumDefaultPackageSetUnknown.ToPointer(),
                        DiskSizeGb: sdk.Int(656605),
                        DiskSourceImage: sdk.String("dolorum"),
                        DiskType: sdk.String("voluptas"),
                        IPConfiguration: shared.WorkerPoolIPConfigurationEnumWorkerIPPrivate.ToPointer(),
                        Kind: sdk.String("porro"),
                        MachineType: sdk.String("tempore"),
                        Metadata: map[string]string{
                            "autem": "praesentium",
                            "magni": "quisquam",
                        },
                        Network: sdk.String("expedita"),
                        NumThreadsPerWorker: sdk.Int(447878),
                        NumWorkers: sdk.Int(52659),
                        OnHostMaintenance: sdk.String("delectus"),
                        Packages: []shared.Package{
                            shared.Package{
                                Location: sdk.String("minus"),
                                Name: sdk.String("Kristopher Herman"),
                            },
                            shared.Package{
                                Location: sdk.String("laboriosam"),
                                Name: sdk.String("Tracy Buckridge"),
                            },
                            shared.Package{
                                Location: sdk.String("laborum"),
                                Name: sdk.String("Randal Kunde"),
                            },
                        },
                        PoolArgs: map[string]interface{}{
                            "aliquid": "repudiandae",
                            "aspernatur": "quod",
                        },
                        SDKHarnessContainerImages: []shared.SDKHarnessContainerImage{
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "ipsa",
                                },
                                ContainerImage: sdk.String("excepturi"),
                                EnvironmentID: sdk.String("repellendus"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                        },
                        Subnetwork: sdk.String("soluta"),
                        TaskrunnerSettings: &shared.TaskRunnerSettings{
                            Alsologtostderr: sdk.Bool(false),
                            BaseTaskDir: sdk.String("aut"),
                            BaseURL: sdk.String("ullam"),
                            CommandlinesFileName: sdk.String("amet"),
                            ContinueOnException: sdk.Bool(false),
                            DataflowAPIVersion: sdk.String("iure"),
                            HarnessCommand: sdk.String("quibusdam"),
                            LanguageHint: sdk.String("sint"),
                            LogDir: sdk.String("voluptates"),
                            LogToSerialconsole: sdk.Bool(false),
                            LogUploadLocation: sdk.String("nihil"),
                            OauthScopes: []string{
                                "eligendi",
                                "fuga",
                            },
                            ParallelWorkerSettings: &shared.WorkerSettings{
                                BaseURL: sdk.String("consequatur"),
                                ReportingEnabled: sdk.Bool(false),
                                ServicePath: sdk.String("sit"),
                                ShuffleServicePath: sdk.String("iure"),
                                TempStoragePrefix: sdk.String("earum"),
                                WorkerID: sdk.String("quis"),
                            },
                            StreamingWorkerMainClass: sdk.String("dolorem"),
                            TaskGroup: sdk.String("omnis"),
                            TaskUser: sdk.String("sed"),
                            TempStoragePrefix: sdk.String("quo"),
                            VMID: sdk.String("et"),
                            WorkflowFileName: sdk.String("illo"),
                        },
                        TeardownPolicy: shared.WorkerPoolTeardownPolicyEnumTeardownOnSuccess.ToPointer(),
                        WorkerHarnessContainerImage: sdk.String("quia"),
                        Zone: sdk.String("veniam"),
                    },
                    shared.WorkerPool{
                        AutoscalingSettings: &shared.AutoscalingSettings{
                            Algorithm: shared.AutoscalingSettingsAlgorithmEnumAutoscalingAlgorithmNone.ToPointer(),
                            MaxNumWorkers: sdk.Int(526894),
                        },
                        DataDisks: []shared.Disk{
                            shared.Disk{
                                DiskType: sdk.String("maiores"),
                                MountPoint: sdk.String("provident"),
                                SizeGb: sdk.Int(125083),
                            },
                            shared.Disk{
                                DiskType: sdk.String("maiores"),
                                MountPoint: sdk.String("excepturi"),
                                SizeGb: sdk.Int(499461),
                            },
                            shared.Disk{
                                DiskType: sdk.String("dolore"),
                                MountPoint: sdk.String("aspernatur"),
                                SizeGb: sdk.Int(560620),
                            },
                        },
                        DefaultPackageSet: shared.WorkerPoolDefaultPackageSetEnumDefaultPackageSetJava.ToPointer(),
                        DiskSizeGb: sdk.Int(869718),
                        DiskSourceImage: sdk.String("unde"),
                        DiskType: sdk.String("laborum"),
                        IPConfiguration: shared.WorkerPoolIPConfigurationEnumWorkerIPPublic.ToPointer(),
                        Kind: sdk.String("hic"),
                        MachineType: sdk.String("corrupti"),
                        Metadata: map[string]string{
                            "earum": "praesentium",
                            "explicabo": "odit",
                            "illo": "architecto",
                        },
                        Network: sdk.String("quia"),
                        NumThreadsPerWorker: sdk.Int(319615),
                        NumWorkers: sdk.Int(244990),
                        OnHostMaintenance: sdk.String("ullam"),
                        Packages: []shared.Package{
                            shared.Package{
                                Location: sdk.String("possimus"),
                                Name: sdk.String("Guy Feest"),
                            },
                            shared.Package{
                                Location: sdk.String("repellat"),
                                Name: sdk.String("Molly Kling"),
                            },
                            shared.Package{
                                Location: sdk.String("assumenda"),
                                Name: sdk.String("Jane Rosenbaum"),
                            },
                        },
                        PoolArgs: map[string]interface{}{
                            "voluptatum": "dolore",
                            "possimus": "dolorum",
                        },
                        SDKHarnessContainerImages: []shared.SDKHarnessContainerImage{
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "quam",
                                },
                                ContainerImage: sdk.String("eos"),
                                EnvironmentID: sdk.String("omnis"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                        },
                        Subnetwork: sdk.String("reiciendis"),
                        TaskrunnerSettings: &shared.TaskRunnerSettings{
                            Alsologtostderr: sdk.Bool(false),
                            BaseTaskDir: sdk.String("qui"),
                            BaseURL: sdk.String("similique"),
                            CommandlinesFileName: sdk.String("eligendi"),
                            ContinueOnException: sdk.Bool(false),
                            DataflowAPIVersion: sdk.String("numquam"),
                            HarnessCommand: sdk.String("inventore"),
                            LanguageHint: sdk.String("necessitatibus"),
                            LogDir: sdk.String("tenetur"),
                            LogToSerialconsole: sdk.Bool(false),
                            LogUploadLocation: sdk.String("exercitationem"),
                            OauthScopes: []string{
                                "quia",
                                "quis",
                            },
                            ParallelWorkerSettings: &shared.WorkerSettings{
                                BaseURL: sdk.String("maiores"),
                                ReportingEnabled: sdk.Bool(false),
                                ServicePath: sdk.String("dicta"),
                                ShuffleServicePath: sdk.String("dicta"),
                                TempStoragePrefix: sdk.String("eum"),
                                WorkerID: sdk.String("sint"),
                            },
                            StreamingWorkerMainClass: sdk.String("id"),
                            TaskGroup: sdk.String("nobis"),
                            TaskUser: sdk.String("quasi"),
                            TempStoragePrefix: sdk.String("itaque"),
                            VMID: sdk.String("aliquam"),
                            WorkflowFileName: sdk.String("vitae"),
                        },
                        TeardownPolicy: shared.WorkerPoolTeardownPolicyEnumTeardownNever.ToPointer(),
                        WorkerHarnessContainerImage: sdk.String("voluptatum"),
                        Zone: sdk.String("deserunt"),
                    },
                },
                WorkerRegion: sdk.String("aspernatur"),
                WorkerZone: sdk.String("neque"),
            },
            ExecutionInfo: &shared.JobExecutionInfo{
                Stages: map[string]shared.JobExecutionStageInfo{
                    "consequuntur": shared.JobExecutionStageInfo{
                        StepName: []string{
                            "saepe",
                        },
                    },
                    "amet": shared.JobExecutionStageInfo{
                        StepName: []string{
                            "repellat",
                            "eos",
                        },
                    },
                    "quibusdam": shared.JobExecutionStageInfo{
                        StepName: []string{
                            "mollitia",
                            "quaerat",
                            "officia",
                            "sunt",
                        },
                    },
                    "perspiciatis": shared.JobExecutionStageInfo{
                        StepName: []string{
                            "a",
                            "iure",
                        },
                    },
                },
            },
            ID: sdk.String("de922151-fe17-4120-9985-3e9f543d8544"),
            JobMetadata: &shared.JobMetadata{
                BigTableDetails: []shared.BigTableIODetails{
                    shared.BigTableIODetails{
                        InstanceID: sdk.String("perspiciatis"),
                        ProjectID: sdk.String("accusamus"),
                        TableID: sdk.String("voluptates"),
                    },
                },
                BigqueryDetails: []shared.BigQueryIODetails{
                    shared.BigQueryIODetails{
                        Dataset: sdk.String("aspernatur"),
                        ProjectID: sdk.String("ut"),
                        Query: sdk.String("non"),
                        Table: sdk.String("laboriosam"),
                    },
                },
                DatastoreDetails: []shared.DatastoreIODetails{
                    shared.DatastoreIODetails{
                        Namespace: sdk.String("tempora"),
                        ProjectID: sdk.String("aliquam"),
                    },
                },
                FileDetails: []shared.FileIODetails{
                    shared.FileIODetails{
                        FilePattern: sdk.String("expedita"),
                    },
                },
                PubsubDetails: []shared.PubSubIODetails{
                    shared.PubSubIODetails{
                        Subscription: sdk.String("architecto"),
                        Topic: sdk.String("minima"),
                    },
                    shared.PubSubIODetails{
                        Subscription: sdk.String("magnam"),
                        Topic: sdk.String("vitae"),
                    },
                    shared.PubSubIODetails{
                        Subscription: sdk.String("quos"),
                        Topic: sdk.String("atque"),
                    },
                    shared.PubSubIODetails{
                        Subscription: sdk.String("quisquam"),
                        Topic: sdk.String("sunt"),
                    },
                },
                SDKVersion: &shared.SDKVersion{
                    SDKSupportStatus: shared.SDKVersionSDKSupportStatusEnumUnsupported.ToPointer(),
                    Version: sdk.String("corporis"),
                    VersionDisplayName: sdk.String("vel"),
                },
                SpannerDetails: []shared.SpannerIODetails{
                    shared.SpannerIODetails{
                        DatabaseID: sdk.String("totam"),
                        InstanceID: sdk.String("ipsam"),
                        ProjectID: sdk.String("at"),
                    },
                    shared.SpannerIODetails{
                        DatabaseID: sdk.String("culpa"),
                        InstanceID: sdk.String("nihil"),
                        ProjectID: sdk.String("laudantium"),
                    },
                    shared.SpannerIODetails{
                        DatabaseID: sdk.String("dolorem"),
                        InstanceID: sdk.String("odit"),
                        ProjectID: sdk.String("officiis"),
                    },
                    shared.SpannerIODetails{
                        DatabaseID: sdk.String("mollitia"),
                        InstanceID: sdk.String("libero"),
                        ProjectID: sdk.String("fugiat"),
                    },
                },
                UserDisplayProperties: map[string]string{
                    "et": "odio",
                    "eligendi": "nesciunt",
                },
            },
            Labels: map[string]string{
                "aperiam": "pariatur",
                "ad": "architecto",
                "culpa": "aliquam",
            },
            Location: sdk.String("ut"),
            Name: sdk.String("Miss Domingo Bahringer"),
            PipelineDescription: &shared.PipelineDescription{
                DisplayData: []shared.DisplayData{
                    shared.DisplayData{
                        BoolValue: sdk.Bool(false),
                        DurationValue: sdk.String("corrupti"),
                        FloatValue: sdk.Float32(4533.04),
                        Int64Value: sdk.String("alias"),
                        JavaClassValue: sdk.String("iure"),
                        Key: sdk.String("temporibus"),
                        Label: sdk.String("incidunt"),
                        Namespace: sdk.String("ea"),
                        ShortStrValue: sdk.String("alias"),
                        StrValue: sdk.String("laudantium"),
                        TimestampValue: sdk.String("qui"),
                        URL: sdk.String("libero"),
                    },
                    shared.DisplayData{
                        BoolValue: sdk.Bool(false),
                        DurationValue: sdk.String("maiores"),
                        FloatValue: sdk.Float32(7233.74),
                        Int64Value: sdk.String("pariatur"),
                        JavaClassValue: sdk.String("quod"),
                        Key: sdk.String("modi"),
                        Label: sdk.String("vitae"),
                        Namespace: sdk.String("delectus"),
                        ShortStrValue: sdk.String("delectus"),
                        StrValue: sdk.String("nemo"),
                        TimestampValue: sdk.String("at"),
                        URL: sdk.String("magnam"),
                    },
                    shared.DisplayData{
                        BoolValue: sdk.Bool(false),
                        DurationValue: sdk.String("officiis"),
                        FloatValue: sdk.Float32(1528.07),
                        Int64Value: sdk.String("mollitia"),
                        JavaClassValue: sdk.String("saepe"),
                        Key: sdk.String("labore"),
                        Label: sdk.String("doloribus"),
                        Namespace: sdk.String("facilis"),
                        ShortStrValue: sdk.String("minima"),
                        StrValue: sdk.String("impedit"),
                        TimestampValue: sdk.String("facilis"),
                        URL: sdk.String("amet"),
                    },
                    shared.DisplayData{
                        BoolValue: sdk.Bool(false),
                        DurationValue: sdk.String("quis"),
                        FloatValue: sdk.Float32(8552.92),
                        Int64Value: sdk.String("beatae"),
                        JavaClassValue: sdk.String("dignissimos"),
                        Key: sdk.String("nisi"),
                        Label: sdk.String("consectetur"),
                        Namespace: sdk.String("quos"),
                        ShortStrValue: sdk.String("delectus"),
                        StrValue: sdk.String("sunt"),
                        TimestampValue: sdk.String("repudiandae"),
                        URL: sdk.String("facere"),
                    },
                },
                ExecutionPipelineStage: []shared.ExecutionStageSummary{
                    shared.ExecutionStageSummary{
                        ComponentSource: []shared.ComponentSource{
                            shared.ComponentSource{
                                Name: sdk.String("Jeffery Hilll"),
                                OriginalTransformOrCollection: sdk.String("minus"),
                                UserName: sdk.String("Omari_Hansen50"),
                            },
                            shared.ComponentSource{
                                Name: sdk.String("Michelle Windler"),
                                OriginalTransformOrCollection: sdk.String("illum"),
                                UserName: sdk.String("Flavio74"),
                            },
                        },
                        ComponentTransform: []shared.ComponentTransform{
                            shared.ComponentTransform{
                                Name: sdk.String("Mr. Emily Macejkovic"),
                                OriginalTransform: sdk.String("quaerat"),
                                UserName: sdk.String("Zula30"),
                            },
                            shared.ComponentTransform{
                                Name: sdk.String("Colleen Cummerata"),
                                OriginalTransform: sdk.String("cumque"),
                                UserName: sdk.String("Samir.Franey84"),
                            },
                            shared.ComponentTransform{
                                Name: sdk.String("Marvin Ratke"),
                                OriginalTransform: sdk.String("repudiandae"),
                                UserName: sdk.String("Cecilia_Grady"),
                            },
                        },
                        ID: sdk.String("7684eff5-0126-4d71-8ffb-d0eb74b84219"),
                        InputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Melody Grady"),
                                OriginalTransformOrCollection: sdk.String("nulla"),
                                SizeBytes: sdk.String("nesciunt"),
                                UserName: sdk.String("Paul8"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Lindsey Shanahan"),
                                OriginalTransformOrCollection: sdk.String("accusamus"),
                                SizeBytes: sdk.String("veniam"),
                                UserName: sdk.String("Laney80"),
                            },
                        },
                        Kind: shared.ExecutionStageSummaryKindEnumUnknownKind.ToPointer(),
                        Name: sdk.String("Cheryl Bins"),
                        OutputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Annie Nader"),
                                OriginalTransformOrCollection: sdk.String("et"),
                                SizeBytes: sdk.String("eveniet"),
                                UserName: sdk.String("Gregg6"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Gregg Champlin DVM"),
                                OriginalTransformOrCollection: sdk.String("porro"),
                                SizeBytes: sdk.String("tempore"),
                                UserName: sdk.String("Felipe_Casper66"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Janet Wisozk"),
                                OriginalTransformOrCollection: sdk.String("itaque"),
                                SizeBytes: sdk.String("iste"),
                                UserName: sdk.String("Prince.Powlowski62"),
                            },
                        },
                        PrerequisiteStage: []string{
                            "repudiandae",
                            "earum",
                        },
                    },
                    shared.ExecutionStageSummary{
                        ComponentSource: []shared.ComponentSource{
                            shared.ComponentSource{
                                Name: sdk.String("Henrietta Bauch"),
                                OriginalTransformOrCollection: sdk.String("porro"),
                                UserName: sdk.String("Patsy_Krajcik"),
                            },
                            shared.ComponentSource{
                                Name: sdk.String("Andre Breitenberg"),
                                OriginalTransformOrCollection: sdk.String("mollitia"),
                                UserName: sdk.String("Freida.Sauer"),
                            },
                        },
                        ComponentTransform: []shared.ComponentTransform{
                            shared.ComponentTransform{
                                Name: sdk.String("Cheryl McKenzie"),
                                OriginalTransform: sdk.String("soluta"),
                                UserName: sdk.String("Krista.Bahringer88"),
                            },
                            shared.ComponentTransform{
                                Name: sdk.String("Miss Violet Stiedemann"),
                                OriginalTransform: sdk.String("magni"),
                                UserName: sdk.String("Van96"),
                            },
                        },
                        ID: sdk.String("9e2e1059-44b9-435d-a37a-72f90849d6ae"),
                        InputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Amelia Upton"),
                                OriginalTransformOrCollection: sdk.String("dignissimos"),
                                SizeBytes: sdk.String("nemo"),
                                UserName: sdk.String("Conor_Koch56"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Christina Cremin"),
                                OriginalTransformOrCollection: sdk.String("sapiente"),
                                SizeBytes: sdk.String("maiores"),
                                UserName: sdk.String("Ezra61"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Isabel O'Reilly"),
                                OriginalTransformOrCollection: sdk.String("laborum"),
                                SizeBytes: sdk.String("aspernatur"),
                                UserName: sdk.String("Sebastian.Kuhic"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Steven Satterfield"),
                                OriginalTransformOrCollection: sdk.String("pariatur"),
                                SizeBytes: sdk.String("labore"),
                                UserName: sdk.String("Eudora_Jacobi11"),
                            },
                        },
                        Kind: shared.ExecutionStageSummaryKindEnumUnknownKind.ToPointer(),
                        Name: sdk.String("Stephanie Turcotte"),
                        OutputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Terrell Bashirian Jr."),
                                OriginalTransformOrCollection: sdk.String("ipsa"),
                                SizeBytes: sdk.String("quasi"),
                                UserName: sdk.String("Susan79"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Jerome Herman"),
                                OriginalTransformOrCollection: sdk.String("alias"),
                                SizeBytes: sdk.String("nemo"),
                                UserName: sdk.String("Kellen.Gleichner"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Alexander Schuster"),
                                OriginalTransformOrCollection: sdk.String("facere"),
                                SizeBytes: sdk.String("omnis"),
                                UserName: sdk.String("Izaiah_Buckridge54"),
                            },
                        },
                        PrerequisiteStage: []string{
                            "sit",
                        },
                    },
                    shared.ExecutionStageSummary{
                        ComponentSource: []shared.ComponentSource{
                            shared.ComponentSource{
                                Name: sdk.String("Mrs. Jill Pfeffer"),
                                OriginalTransformOrCollection: sdk.String("rerum"),
                                UserName: sdk.String("Michel.Labadie76"),
                            },
                            shared.ComponentSource{
                                Name: sdk.String("Byron MacGyver V"),
                                OriginalTransformOrCollection: sdk.String("molestiae"),
                                UserName: sdk.String("Shayne_Grant0"),
                            },
                            shared.ComponentSource{
                                Name: sdk.String("Maggie Weissnat"),
                                OriginalTransformOrCollection: sdk.String("maxime"),
                                UserName: sdk.String("Enos_Sporer69"),
                            },
                            shared.ComponentSource{
                                Name: sdk.String("Gertrude O'Conner DDS"),
                                OriginalTransformOrCollection: sdk.String("voluptatibus"),
                                UserName: sdk.String("Roxane_Jast16"),
                            },
                        },
                        ComponentTransform: []shared.ComponentTransform{
                            shared.ComponentTransform{
                                Name: sdk.String("Mrs. Trevor Beer V"),
                                OriginalTransform: sdk.String("inventore"),
                                UserName: sdk.String("Bethel.Denesik"),
                            },
                            shared.ComponentTransform{
                                Name: sdk.String("Beth Keeling"),
                                OriginalTransform: sdk.String("cumque"),
                                UserName: sdk.String("Anthony.Sporer"),
                            },
                            shared.ComponentTransform{
                                Name: sdk.String("Mrs. Roy Moore"),
                                OriginalTransform: sdk.String("sapiente"),
                                UserName: sdk.String("Franco_Hudson"),
                            },
                        },
                        ID: sdk.String("7aff0ea2-216c-4be0-b1bc-163e279a3b08"),
                        InputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Lorenzo Monahan"),
                                OriginalTransformOrCollection: sdk.String("veniam"),
                                SizeBytes: sdk.String("quam"),
                                UserName: sdk.String("Robb99"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Angela Macejkovic"),
                                OriginalTransformOrCollection: sdk.String("laborum"),
                                SizeBytes: sdk.String("in"),
                                UserName: sdk.String("Deron_Crist28"),
                            },
                        },
                        Kind: shared.ExecutionStageSummaryKindEnumGroupByKeyKind.ToPointer(),
                        Name: sdk.String("Charlie Schulist"),
                        OutputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Edmund Witting"),
                                OriginalTransformOrCollection: sdk.String("provident"),
                                SizeBytes: sdk.String("provident"),
                                UserName: sdk.String("Neal.Schneider"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Alma Collier"),
                                OriginalTransformOrCollection: sdk.String("asperiores"),
                                SizeBytes: sdk.String("temporibus"),
                                UserName: sdk.String("Vita_Halvorson"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Margarita Grant III"),
                                OriginalTransformOrCollection: sdk.String("consequatur"),
                                SizeBytes: sdk.String("nobis"),
                                UserName: sdk.String("Alfonzo.Jast14"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Clinton Kling"),
                                OriginalTransformOrCollection: sdk.String("voluptates"),
                                SizeBytes: sdk.String("debitis"),
                                UserName: sdk.String("Tressie.Hoppe78"),
                            },
                        },
                        PrerequisiteStage: []string{
                            "temporibus",
                            "vel",
                        },
                    },
                },
                OriginalPipelineTransform: []shared.TransformSummary{
                    shared.TransformSummary{
                        DisplayData: []shared.DisplayData{
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("excepturi"),
                                FloatValue: sdk.Float32(7991.84),
                                Int64Value: sdk.String("in"),
                                JavaClassValue: sdk.String("nesciunt"),
                                Key: sdk.String("temporibus"),
                                Label: sdk.String("temporibus"),
                                Namespace: sdk.String("eum"),
                                ShortStrValue: sdk.String("non"),
                                StrValue: sdk.String("ut"),
                                TimestampValue: sdk.String("nostrum"),
                                URL: sdk.String("dignissimos"),
                            },
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("illo"),
                                FloatValue: sdk.Float32(3613.31),
                                Int64Value: sdk.String("ipsa"),
                                JavaClassValue: sdk.String("occaecati"),
                                Key: sdk.String("dolorum"),
                                Label: sdk.String("blanditiis"),
                                Namespace: sdk.String("recusandae"),
                                ShortStrValue: sdk.String("deleniti"),
                                StrValue: sdk.String("dignissimos"),
                                TimestampValue: sdk.String("doloremque"),
                                URL: sdk.String("quibusdam"),
                            },
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("adipisci"),
                                FloatValue: sdk.Float32(7937.52),
                                Int64Value: sdk.String("veniam"),
                                JavaClassValue: sdk.String("id"),
                                Key: sdk.String("architecto"),
                                Label: sdk.String("maiores"),
                                Namespace: sdk.String("perspiciatis"),
                                ShortStrValue: sdk.String("quod"),
                                StrValue: sdk.String("magni"),
                                TimestampValue: sdk.String("incidunt"),
                                URL: sdk.String("fugit"),
                            },
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("quisquam"),
                                FloatValue: sdk.Float32(4874.3),
                                Int64Value: sdk.String("quidem"),
                                JavaClassValue: sdk.String("iure"),
                                Key: sdk.String("aliquid"),
                                Label: sdk.String("culpa"),
                                Namespace: sdk.String("illo"),
                                ShortStrValue: sdk.String("reiciendis"),
                                StrValue: sdk.String("ipsum"),
                                TimestampValue: sdk.String("doloremque"),
                                URL: sdk.String("quod"),
                            },
                        },
                        ID: sdk.String("73df5b67-1989-40f4-aa4b-b438d85b2605"),
                        InputCollectionName: []string{
                            "dicta",
                            "assumenda",
                            "reprehenderit",
                        },
                        Kind: shared.TransformSummaryKindEnumGroupByKeyKind.ToPointer(),
                        Name: sdk.String("Silvia Dietrich"),
                        OutputCollectionName: []string{
                            "veniam",
                        },
                    },
                    shared.TransformSummary{
                        DisplayData: []shared.DisplayData{
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("minus"),
                                FloatValue: sdk.Float32(5674.41),
                                Int64Value: sdk.String("porro"),
                                JavaClassValue: sdk.String("nesciunt"),
                                Key: sdk.String("maiores"),
                                Label: sdk.String("veniam"),
                                Namespace: sdk.String("autem"),
                                ShortStrValue: sdk.String("esse"),
                                StrValue: sdk.String("officiis"),
                                TimestampValue: sdk.String("aperiam"),
                                URL: sdk.String("itaque"),
                            },
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("sed"),
                                FloatValue: sdk.Float32(3623.5),
                                Int64Value: sdk.String("consequuntur"),
                                JavaClassValue: sdk.String("odio"),
                                Key: sdk.String("suscipit"),
                                Label: sdk.String("quis"),
                                Namespace: sdk.String("nobis"),
                                ShortStrValue: sdk.String("beatae"),
                                StrValue: sdk.String("repellendus"),
                                TimestampValue: sdk.String("ex"),
                                URL: sdk.String("consequuntur"),
                            },
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("delectus"),
                                FloatValue: sdk.Float32(7519.06),
                                Int64Value: sdk.String("possimus"),
                                JavaClassValue: sdk.String("laborum"),
                                Key: sdk.String("optio"),
                                Label: sdk.String("debitis"),
                                Namespace: sdk.String("architecto"),
                                ShortStrValue: sdk.String("reiciendis"),
                                StrValue: sdk.String("consequatur"),
                                TimestampValue: sdk.String("sunt"),
                                URL: sdk.String("odit"),
                            },
                        },
                        ID: sdk.String("16ce2239-e8f2-45cd-8d19-d959f439e392"),
                        InputCollectionName: []string{
                            "commodi",
                            "impedit",
                        },
                        Kind: shared.TransformSummaryKindEnumConstantKind.ToPointer(),
                        Name: sdk.String("Jeremiah Hahn"),
                        OutputCollectionName: []string{
                            "laborum",
                            "odit",
                            "rerum",
                        },
                    },
                    shared.TransformSummary{
                        DisplayData: []shared.DisplayData{
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("magnam"),
                                FloatValue: sdk.Float32(930.67),
                                Int64Value: sdk.String("et"),
                                JavaClassValue: sdk.String("ratione"),
                                Key: sdk.String("nisi"),
                                Label: sdk.String("perspiciatis"),
                                Namespace: sdk.String("nostrum"),
                                ShortStrValue: sdk.String("temporibus"),
                                StrValue: sdk.String("et"),
                                TimestampValue: sdk.String("debitis"),
                                URL: sdk.String("nisi"),
                            },
                        },
                        ID: sdk.String("698fcc45-9621-47c2-9776-76334254038b"),
                        InputCollectionName: []string{
                            "distinctio",
                            "minima",
                            "cupiditate",
                            "molestiae",
                        },
                        Kind: shared.TransformSummaryKindEnumUnknownKind.ToPointer(),
                        Name: sdk.String("Ms. Andy Lesch II"),
                        OutputCollectionName: []string{
                            "molestiae",
                            "adipisci",
                        },
                    },
                    shared.TransformSummary{
                        DisplayData: []shared.DisplayData{
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("perspiciatis"),
                                FloatValue: sdk.Float32(7624.11),
                                Int64Value: sdk.String("itaque"),
                                JavaClassValue: sdk.String("at"),
                                Key: sdk.String("nam"),
                                Label: sdk.String("id"),
                                Namespace: sdk.String("cumque"),
                                ShortStrValue: sdk.String("in"),
                                StrValue: sdk.String("a"),
                                TimestampValue: sdk.String("quibusdam"),
                                URL: sdk.String("culpa"),
                            },
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("dolor"),
                                FloatValue: sdk.Float32(5777.31),
                                Int64Value: sdk.String("exercitationem"),
                                JavaClassValue: sdk.String("unde"),
                                Key: sdk.String("labore"),
                                Label: sdk.String("pariatur"),
                                Namespace: sdk.String("vel"),
                                ShortStrValue: sdk.String("laboriosam"),
                                StrValue: sdk.String("soluta"),
                                TimestampValue: sdk.String("minus"),
                                URL: sdk.String("magni"),
                            },
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("mollitia"),
                                FloatValue: sdk.Float32(8848.79),
                                Int64Value: sdk.String("aliquam"),
                                JavaClassValue: sdk.String("quas"),
                                Key: sdk.String("aut"),
                                Label: sdk.String("autem"),
                                Namespace: sdk.String("dolorem"),
                                ShortStrValue: sdk.String("explicabo"),
                                StrValue: sdk.String("rerum"),
                                TimestampValue: sdk.String("iste"),
                                URL: sdk.String("occaecati"),
                            },
                        },
                        ID: sdk.String("54b6fa22-0636-4982-8553-cb10006bef49"),
                        InputCollectionName: []string{
                            "illo",
                        },
                        Kind: shared.TransformSummaryKindEnumShuffleKind.ToPointer(),
                        Name: sdk.String("Martin Balistreri"),
                        OutputCollectionName: []string{
                            "molestiae",
                            "eius",
                            "perspiciatis",
                        },
                    },
                },
                StepNamesHash: sdk.String("amet"),
            },
            ProjectID: sdk.String("ex"),
            ReplaceJobID: sdk.String("aliquid"),
            ReplacedByJobID: sdk.String("officia"),
            RequestedState: shared.JobRequestedStateEnumJobStateCancelling.ToPointer(),
            RuntimeUpdatableParams: &shared.RuntimeUpdatableParams{
                MaxNumWorkers: sdk.Int(522327),
                MinNumWorkers: sdk.Int(910984),
            },
            SatisfiesPzs: sdk.Bool(false),
            StageStates: []shared.ExecutionStageState{
                shared.ExecutionStageState{
                    CurrentStateTime: sdk.String("voluptatem"),
                    ExecutionStageName: sdk.String("repellat"),
                    ExecutionStageState: shared.ExecutionStageStateExecutionStageStateEnumJobStateRunning.ToPointer(),
                },
                shared.ExecutionStageState{
                    CurrentStateTime: sdk.String("libero"),
                    ExecutionStageName: sdk.String("sapiente"),
                    ExecutionStageState: shared.ExecutionStageStateExecutionStageStateEnumJobStateStopped.ToPointer(),
                },
                shared.ExecutionStageState{
                    CurrentStateTime: sdk.String("provident"),
                    ExecutionStageName: sdk.String("veniam"),
                    ExecutionStageState: shared.ExecutionStageStateExecutionStageStateEnumJobStateDraining.ToPointer(),
                },
                shared.ExecutionStageState{
                    CurrentStateTime: sdk.String("totam"),
                    ExecutionStageName: sdk.String("facere"),
                    ExecutionStageState: shared.ExecutionStageStateExecutionStageStateEnumJobStateDone.ToPointer(),
                },
            },
            StartTime: sdk.String("doloremque"),
            Steps: []shared.Step{
                shared.Step{
                    Kind: sdk.String("aut"),
                    Name: sdk.String("Faith Doyle"),
                    Properties: map[string]interface{}{
                        "est": "quia",
                        "natus": "molestiae",
                        "facilis": "earum",
                    },
                },
                shared.Step{
                    Kind: sdk.String("ipsum"),
                    Name: sdk.String("Terrance Altenwerth"),
                    Properties: map[string]interface{}{
                        "consequatur": "temporibus",
                        "doloribus": "quos",
                    },
                },
                shared.Step{
                    Kind: sdk.String("commodi"),
                    Name: sdk.String("Boyd Stoltenberg"),
                    Properties: map[string]interface{}{
                        "perferendis": "enim",
                        "impedit": "libero",
                    },
                },
                shared.Step{
                    Kind: sdk.String("dolor"),
                    Name: sdk.String("Evelyn Stracke"),
                    Properties: map[string]interface{}{
                        "reiciendis": "modi",
                    },
                },
            },
            StepsLocation: sdk.String("doloribus"),
            TempFiles: []string{
                "qui",
            },
            TransformNameMapping: map[string]string{
                "a": "quidem",
                "aperiam": "saepe",
            },
            Type: shared.JobTypeEnumJobTypeUnknown.ToPointer(),
        },
        AccessToken: sdk.String("soluta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("deleniti"),
        Location: "fugit",
        OauthToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "reprehenderit",
        QuotaUser: sdk.String("sint"),
        ReplaceJobID: sdk.String("dignissimos"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("nulla"),
        View: operations.DataflowProjectsLocationsJobsCreateViewEnumJobViewUnknown.ToPointer(),
    }, operations.DataflowProjectsLocationsJobsCreateSecurity{
        Option1: &operations.DataflowProjectsLocationsJobsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsJobsDebugGetConfig

Get encoded debug configuration for component. Not cacheable.

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
    res, err := s.Projects.DataflowProjectsLocationsJobsDebugGetConfig(ctx, operations.DataflowProjectsLocationsJobsDebugGetConfigRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GetDebugConfigRequest: &shared.GetDebugConfigRequest{
            ComponentID: sdk.String("eligendi"),
            Location: sdk.String("impedit"),
            WorkerID: sdk.String("officia"),
        },
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("repudiandae"),
        JobID: "tempore",
        Key: sdk.String("voluptate"),
        Location: "cum",
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "alias",
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("est"),
    }, operations.DataflowProjectsLocationsJobsDebugGetConfigSecurity{
        Option1: &operations.DataflowProjectsLocationsJobsDebugGetConfigSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDebugConfigResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsJobsDebugSendCapture

Send encoded debug capture data for component.

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
    res, err := s.Projects.DataflowProjectsLocationsJobsDebugSendCapture(ctx, operations.DataflowProjectsLocationsJobsDebugSendCaptureRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SendDebugCaptureRequest: &shared.SendDebugCaptureRequest{
            ComponentID: sdk.String("magni"),
            Data: sdk.String("quae"),
            DataFormat: shared.SendDebugCaptureRequestDataFormatEnumRaw.ToPointer(),
            Location: sdk.String("suscipit"),
            WorkerID: sdk.String("rerum"),
        },
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("unde"),
        JobID: "excepturi",
        Key: sdk.String("voluptatibus"),
        Location: "facilis",
        OauthToken: sdk.String("doloremque"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "officiis",
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("reprehenderit"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.DataflowProjectsLocationsJobsDebugSendCaptureSecurity{
        Option1: &operations.DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendDebugCaptureResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsJobsGet

Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.

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
    res, err := s.Projects.DataflowProjectsLocationsJobsGet(ctx, operations.DataflowProjectsLocationsJobsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("facere"),
        JobID: "tenetur",
        Key: sdk.String("saepe"),
        Location: "assumenda",
        OauthToken: sdk.String("exercitationem"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "exercitationem",
        QuotaUser: sdk.String("dolore"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("recusandae"),
        View: operations.DataflowProjectsLocationsJobsGetViewEnumJobViewDescription.ToPointer(),
    }, operations.DataflowProjectsLocationsJobsGetSecurity{
        Option1: &operations.DataflowProjectsLocationsJobsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsJobsGetExecutionDetails

Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.

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
    res, err := s.Projects.DataflowProjectsLocationsJobsGetExecutionDetails(ctx, operations.DataflowProjectsLocationsJobsGetExecutionDetailsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("neque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("ut"),
        JobID: "est",
        Key: sdk.String("quasi"),
        Location: "rerum",
        OauthToken: sdk.String("blanditiis"),
        PageSize: sdk.Int64(959019),
        PageToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "perspiciatis",
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("reprehenderit"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.DataflowProjectsLocationsJobsGetExecutionDetailsSecurity{
        Option1: &operations.DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobExecutionDetails != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsJobsGetMetrics

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

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
    res, err := s.Projects.DataflowProjectsLocationsJobsGetMetrics(ctx, operations.DataflowProjectsLocationsJobsGetMetricsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("aperiam"),
        JobID: "ad",
        Key: sdk.String("fugiat"),
        Location: "quas",
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "fuga",
        QuotaUser: sdk.String("eveniet"),
        StartTime: sdk.String("consequuntur"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.DataflowProjectsLocationsJobsGetMetricsSecurity{
        Option1: &operations.DataflowProjectsLocationsJobsGetMetricsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobMetrics != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsJobsList

List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.

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
    res, err := s.Projects.DataflowProjectsLocationsJobsList(ctx, operations.DataflowProjectsLocationsJobsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("harum"),
        Filter: operations.DataflowProjectsLocationsJobsListFilterEnumUnknown.ToPointer(),
        Key: sdk.String("molestias"),
        Location: "odio",
        Name: sdk.String("Dr. Louise Mayer"),
        OauthToken: sdk.String("dolorem"),
        PageSize: sdk.Int64(403187),
        PageToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "eum",
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("quo"),
        View: operations.DataflowProjectsLocationsJobsListViewEnumJobViewAll.ToPointer(),
    }, operations.DataflowProjectsLocationsJobsListSecurity{
        Option1: &operations.DataflowProjectsLocationsJobsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobsResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsJobsMessagesList

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

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
    res, err := s.Projects.DataflowProjectsLocationsJobsMessagesList(ctx, operations.DataflowProjectsLocationsJobsMessagesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("doloribus"),
        EndTime: sdk.String("praesentium"),
        Fields: sdk.String("iste"),
        JobID: "tempora",
        Key: sdk.String("ad"),
        Location: "ab",
        MinimumImportance: operations.DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnumJobMessageWarning.ToPointer(),
        OauthToken: sdk.String("facere"),
        PageSize: sdk.Int64(495700),
        PageToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "accusamus",
        QuotaUser: sdk.String("officiis"),
        StartTime: sdk.String("necessitatibus"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.DataflowProjectsLocationsJobsMessagesListSecurity{
        Option1: &operations.DataflowProjectsLocationsJobsMessagesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobMessagesResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsJobsSnapshot

Snapshot the state of a streaming job.

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
    res, err := s.Projects.DataflowProjectsLocationsJobsSnapshot(ctx, operations.DataflowProjectsLocationsJobsSnapshotRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SnapshotJobRequest: &shared.SnapshotJobRequest{
            Description: sdk.String("molestias"),
            Location: sdk.String("impedit"),
            SnapshotSources: sdk.Bool(false),
            TTL: sdk.String("modi"),
        },
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("asperiores"),
        JobID: "est",
        Key: sdk.String("repellendus"),
        Location: "dolor",
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quis",
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.DataflowProjectsLocationsJobsSnapshotSecurity{
        Option1: &operations.DataflowProjectsLocationsJobsSnapshotSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Snapshot != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsJobsSnapshotsList

Lists snapshots.

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
    res, err := s.Projects.DataflowProjectsLocationsJobsSnapshotsList(ctx, operations.DataflowProjectsLocationsJobsSnapshotsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("itaque"),
        JobID: "enim",
        Key: sdk.String("nam"),
        Location: "dignissimos",
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "sapiente",
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.DataflowProjectsLocationsJobsSnapshotsListSecurity{
        Option1: &operations.DataflowProjectsLocationsJobsSnapshotsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSnapshotsResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsJobsStagesGetExecutionDetails

Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.

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
    res, err := s.Projects.DataflowProjectsLocationsJobsStagesGetExecutionDetails(ctx, operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("commodi"),
        EndTime: sdk.String("laudantium"),
        Fields: sdk.String("est"),
        JobID: "consequatur",
        Key: sdk.String("incidunt"),
        Location: "dolores",
        OauthToken: sdk.String("labore"),
        PageSize: sdk.Int64(936059),
        PageToken: sdk.String("consequatur"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "voluptatem",
        QuotaUser: sdk.String("officia"),
        StageID: "architecto",
        StartTime: sdk.String("quibusdam"),
        UploadType: sdk.String("autem"),
        UploadProtocol: sdk.String("voluptates"),
    }, operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity{
        Option1: &operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StageExecutionDetails != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsJobsUpdate

Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.

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
    res, err := s.Projects.DataflowProjectsLocationsJobsUpdate(ctx, operations.DataflowProjectsLocationsJobsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        JobInput: &shared.JobInput{
            ClientRequestID: sdk.String("cupiditate"),
            CreateTime: sdk.String("modi"),
            CreatedFromSnapshotID: sdk.String("ratione"),
            CurrentState: shared.JobCurrentStateEnumJobStateDone.ToPointer(),
            CurrentStateTime: sdk.String("ea"),
            Environment: &shared.EnvironmentInput{
                ClusterManagerAPIService: sdk.String("aliquam"),
                Dataset: sdk.String("corporis"),
                DebugOptions: &shared.DebugOptions{
                    EnableHotKeyLogging: sdk.Bool(false),
                },
                Experiments: []string{
                    "ipsa",
                    "amet",
                    "aut",
                    "molestias",
                },
                FlexResourceSchedulingGoal: shared.EnvironmentFlexResourceSchedulingGoalEnumFlexrsUnspecified.ToPointer(),
                InternalExperiments: map[string]interface{}{
                    "expedita": "libero",
                    "mollitia": "quis",
                    "cumque": "cumque",
                    "vero": "a",
                },
                SDKPipelineOptions: map[string]interface{}{
                    "ipsam": "quod",
                    "facilis": "doloremque",
                    "illo": "reiciendis",
                    "debitis": "enim",
                },
                ServiceAccountEmail: sdk.String("quasi"),
                ServiceKmsKeyName: sdk.String("accusamus"),
                ServiceOptions: []string{
                    "aspernatur",
                    "atque",
                },
                TempStoragePrefix: sdk.String("animi"),
                UserAgent: map[string]interface{}{
                    "ad": "mollitia",
                    "minus": "quos",
                },
                Version: map[string]interface{}{
                    "distinctio": "praesentium",
                },
                WorkerPools: []shared.WorkerPool{
                    shared.WorkerPool{
                        AutoscalingSettings: &shared.AutoscalingSettings{
                            Algorithm: shared.AutoscalingSettingsAlgorithmEnumAutoscalingAlgorithmBasic.ToPointer(),
                            MaxNumWorkers: sdk.Int(546014),
                        },
                        DataDisks: []shared.Disk{
                            shared.Disk{
                                DiskType: sdk.String("placeat"),
                                MountPoint: sdk.String("explicabo"),
                                SizeGb: sdk.Int(810697),
                            },
                            shared.Disk{
                                DiskType: sdk.String("animi"),
                                MountPoint: sdk.String("expedita"),
                                SizeGb: sdk.Int(671397),
                            },
                            shared.Disk{
                                DiskType: sdk.String("atque"),
                                MountPoint: sdk.String("assumenda"),
                                SizeGb: sdk.Int(673261),
                            },
                        },
                        DefaultPackageSet: shared.WorkerPoolDefaultPackageSetEnumDefaultPackageSetNone.ToPointer(),
                        DiskSizeGb: sdk.Int(86880),
                        DiskSourceImage: sdk.String("fugit"),
                        DiskType: sdk.String("nihil"),
                        IPConfiguration: shared.WorkerPoolIPConfigurationEnumWorkerIPPrivate.ToPointer(),
                        Kind: sdk.String("nulla"),
                        MachineType: sdk.String("nemo"),
                        Metadata: map[string]string{
                            "iure": "hic",
                            "sapiente": "eius",
                            "esse": "quasi",
                        },
                        Network: sdk.String("inventore"),
                        NumThreadsPerWorker: sdk.Int(626614),
                        NumWorkers: sdk.Int(661028),
                        OnHostMaintenance: sdk.String("et"),
                        Packages: []shared.Package{
                            shared.Package{
                                Location: sdk.String("porro"),
                                Name: sdk.String("Carrie Prosacco"),
                            },
                            shared.Package{
                                Location: sdk.String("placeat"),
                                Name: sdk.String("Devin Russel"),
                            },
                            shared.Package{
                                Location: sdk.String("voluptatibus"),
                                Name: sdk.String("Dora Reichert"),
                            },
                        },
                        PoolArgs: map[string]interface{}{
                            "totam": "soluta",
                            "quibusdam": "iure",
                        },
                        SDKHarnessContainerImages: []shared.SDKHarnessContainerImage{
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "hic",
                                    "perferendis",
                                },
                                ContainerImage: sdk.String("tempora"),
                                EnvironmentID: sdk.String("aliquam"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "nulla",
                                },
                                ContainerImage: sdk.String("qui"),
                                EnvironmentID: sdk.String("maxime"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "soluta",
                                },
                                ContainerImage: sdk.String("quos"),
                                EnvironmentID: sdk.String("sit"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                        },
                        Subnetwork: sdk.String("laudantium"),
                        TaskrunnerSettings: &shared.TaskRunnerSettings{
                            Alsologtostderr: sdk.Bool(false),
                            BaseTaskDir: sdk.String("sit"),
                            BaseURL: sdk.String("perspiciatis"),
                            CommandlinesFileName: sdk.String("quaerat"),
                            ContinueOnException: sdk.Bool(false),
                            DataflowAPIVersion: sdk.String("nesciunt"),
                            HarnessCommand: sdk.String("molestiae"),
                            LanguageHint: sdk.String("adipisci"),
                            LogDir: sdk.String("eveniet"),
                            LogToSerialconsole: sdk.Bool(false),
                            LogUploadLocation: sdk.String("ipsa"),
                            OauthScopes: []string{
                                "sit",
                                "labore",
                            },
                            ParallelWorkerSettings: &shared.WorkerSettings{
                                BaseURL: sdk.String("ullam"),
                                ReportingEnabled: sdk.Bool(false),
                                ServicePath: sdk.String("excepturi"),
                                ShuffleServicePath: sdk.String("soluta"),
                                TempStoragePrefix: sdk.String("voluptates"),
                                WorkerID: sdk.String("rerum"),
                            },
                            StreamingWorkerMainClass: sdk.String("cum"),
                            TaskGroup: sdk.String("est"),
                            TaskUser: sdk.String("fugiat"),
                            TempStoragePrefix: sdk.String("perferendis"),
                            VMID: sdk.String("qui"),
                            WorkflowFileName: sdk.String("tenetur"),
                        },
                        TeardownPolicy: shared.WorkerPoolTeardownPolicyEnumTeardownPolicyUnknown.ToPointer(),
                        WorkerHarnessContainerImage: sdk.String("quis"),
                        Zone: sdk.String("corrupti"),
                    },
                    shared.WorkerPool{
                        AutoscalingSettings: &shared.AutoscalingSettings{
                            Algorithm: shared.AutoscalingSettingsAlgorithmEnumAutoscalingAlgorithmNone.ToPointer(),
                            MaxNumWorkers: sdk.Int(697371),
                        },
                        DataDisks: []shared.Disk{
                            shared.Disk{
                                DiskType: sdk.String("a"),
                                MountPoint: sdk.String("et"),
                                SizeGb: sdk.Int(371534),
                            },
                            shared.Disk{
                                DiskType: sdk.String("eos"),
                                MountPoint: sdk.String("exercitationem"),
                                SizeGb: sdk.Int(325612),
                            },
                            shared.Disk{
                                DiskType: sdk.String("laudantium"),
                                MountPoint: sdk.String("quibusdam"),
                                SizeGb: sdk.Int(684938),
                            },
                            shared.Disk{
                                DiskType: sdk.String("fuga"),
                                MountPoint: sdk.String("excepturi"),
                                SizeGb: sdk.Int(358394),
                            },
                        },
                        DefaultPackageSet: shared.WorkerPoolDefaultPackageSetEnumDefaultPackageSetJava.ToPointer(),
                        DiskSizeGb: sdk.Int(933366),
                        DiskSourceImage: sdk.String("suscipit"),
                        DiskType: sdk.String("porro"),
                        IPConfiguration: shared.WorkerPoolIPConfigurationEnumWorkerIPPrivate.ToPointer(),
                        Kind: sdk.String("consequatur"),
                        MachineType: sdk.String("qui"),
                        Metadata: map[string]string{
                            "enim": "vel",
                            "impedit": "consectetur",
                        },
                        Network: sdk.String("quis"),
                        NumThreadsPerWorker: sdk.Int(281753),
                        NumWorkers: sdk.Int(668155),
                        OnHostMaintenance: sdk.String("fuga"),
                        Packages: []shared.Package{
                            shared.Package{
                                Location: sdk.String("adipisci"),
                                Name: sdk.String("Celia Gutkowski"),
                            },
                            shared.Package{
                                Location: sdk.String("inventore"),
                                Name: sdk.String("Rosemary Fahey"),
                            },
                        },
                        PoolArgs: map[string]interface{}{
                            "alias": "blanditiis",
                        },
                        SDKHarnessContainerImages: []shared.SDKHarnessContainerImage{
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "amet",
                                },
                                ContainerImage: sdk.String("recusandae"),
                                EnvironmentID: sdk.String("perspiciatis"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "sit",
                                    "magni",
                                    "repellendus",
                                },
                                ContainerImage: sdk.String("quas"),
                                EnvironmentID: sdk.String("ratione"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "alias",
                                    "repellendus",
                                    "magnam",
                                    "quis",
                                },
                                ContainerImage: sdk.String("repudiandae"),
                                EnvironmentID: sdk.String("soluta"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                            shared.SDKHarnessContainerImage{
                                Capabilities: []string{
                                    "fuga",
                                    "blanditiis",
                                },
                                ContainerImage: sdk.String("nobis"),
                                EnvironmentID: sdk.String("ea"),
                                UseSingleCorePerContainer: sdk.Bool(false),
                            },
                        },
                        Subnetwork: sdk.String("iusto"),
                        TaskrunnerSettings: &shared.TaskRunnerSettings{
                            Alsologtostderr: sdk.Bool(false),
                            BaseTaskDir: sdk.String("dolore"),
                            BaseURL: sdk.String("repudiandae"),
                            CommandlinesFileName: sdk.String("recusandae"),
                            ContinueOnException: sdk.Bool(false),
                            DataflowAPIVersion: sdk.String("ipsam"),
                            HarnessCommand: sdk.String("quisquam"),
                            LanguageHint: sdk.String("delectus"),
                            LogDir: sdk.String("optio"),
                            LogToSerialconsole: sdk.Bool(false),
                            LogUploadLocation: sdk.String("sunt"),
                            OauthScopes: []string{
                                "itaque",
                                "assumenda",
                                "optio",
                            },
                            ParallelWorkerSettings: &shared.WorkerSettings{
                                BaseURL: sdk.String("esse"),
                                ReportingEnabled: sdk.Bool(false),
                                ServicePath: sdk.String("a"),
                                ShuffleServicePath: sdk.String("quam"),
                                TempStoragePrefix: sdk.String("quos"),
                                WorkerID: sdk.String("dignissimos"),
                            },
                            StreamingWorkerMainClass: sdk.String("earum"),
                            TaskGroup: sdk.String("adipisci"),
                            TaskUser: sdk.String("magni"),
                            TempStoragePrefix: sdk.String("recusandae"),
                            VMID: sdk.String("voluptatem"),
                            WorkflowFileName: sdk.String("eius"),
                        },
                        TeardownPolicy: shared.WorkerPoolTeardownPolicyEnumTeardownOnSuccess.ToPointer(),
                        WorkerHarnessContainerImage: sdk.String("nesciunt"),
                        Zone: sdk.String("pariatur"),
                    },
                },
                WorkerRegion: sdk.String("velit"),
                WorkerZone: sdk.String("necessitatibus"),
            },
            ExecutionInfo: &shared.JobExecutionInfo{
                Stages: map[string]shared.JobExecutionStageInfo{
                    "quae": shared.JobExecutionStageInfo{
                        StepName: []string{
                            "ullam",
                            "vel",
                            "reprehenderit",
                            "aut",
                        },
                    },
                    "recusandae": shared.JobExecutionStageInfo{
                        StepName: []string{
                            "dolore",
                            "aspernatur",
                            "harum",
                            "illum",
                        },
                    },
                    "dolor": shared.JobExecutionStageInfo{
                        StepName: []string{
                            "iste",
                            "earum",
                            "vitae",
                            "impedit",
                        },
                    },
                    "eligendi": shared.JobExecutionStageInfo{
                        StepName: []string{
                            "aperiam",
                            "consectetur",
                        },
                    },
                },
            },
            ID: sdk.String("f6c39bcd-0a62-490f-957f-385189ad7ef8"),
            JobMetadata: &shared.JobMetadata{
                BigTableDetails: []shared.BigTableIODetails{
                    shared.BigTableIODetails{
                        InstanceID: sdk.String("reprehenderit"),
                        ProjectID: sdk.String("animi"),
                        TableID: sdk.String("officia"),
                    },
                },
                BigqueryDetails: []shared.BigQueryIODetails{
                    shared.BigQueryIODetails{
                        Dataset: sdk.String("quae"),
                        ProjectID: sdk.String("adipisci"),
                        Query: sdk.String("hic"),
                        Table: sdk.String("dolorem"),
                    },
                    shared.BigQueryIODetails{
                        Dataset: sdk.String("adipisci"),
                        ProjectID: sdk.String("optio"),
                        Query: sdk.String("similique"),
                        Table: sdk.String("odio"),
                    },
                    shared.BigQueryIODetails{
                        Dataset: sdk.String("unde"),
                        ProjectID: sdk.String("asperiores"),
                        Query: sdk.String("nam"),
                        Table: sdk.String("provident"),
                    },
                    shared.BigQueryIODetails{
                        Dataset: sdk.String("fugiat"),
                        ProjectID: sdk.String("recusandae"),
                        Query: sdk.String("non"),
                        Table: sdk.String("aut"),
                    },
                },
                DatastoreDetails: []shared.DatastoreIODetails{
                    shared.DatastoreIODetails{
                        Namespace: sdk.String("quia"),
                        ProjectID: sdk.String("soluta"),
                    },
                },
                FileDetails: []shared.FileIODetails{
                    shared.FileIODetails{
                        FilePattern: sdk.String("qui"),
                    },
                    shared.FileIODetails{
                        FilePattern: sdk.String("commodi"),
                    },
                    shared.FileIODetails{
                        FilePattern: sdk.String("a"),
                    },
                },
                PubsubDetails: []shared.PubSubIODetails{
                    shared.PubSubIODetails{
                        Subscription: sdk.String("sequi"),
                        Topic: sdk.String("eum"),
                    },
                    shared.PubSubIODetails{
                        Subscription: sdk.String("rem"),
                        Topic: sdk.String("expedita"),
                    },
                    shared.PubSubIODetails{
                        Subscription: sdk.String("animi"),
                        Topic: sdk.String("excepturi"),
                    },
                    shared.PubSubIODetails{
                        Subscription: sdk.String("dolores"),
                        Topic: sdk.String("dicta"),
                    },
                },
                SDKVersion: &shared.SDKVersion{
                    SDKSupportStatus: shared.SDKVersionSDKSupportStatusEnumSupported.ToPointer(),
                    Version: sdk.String("distinctio"),
                    VersionDisplayName: sdk.String("quo"),
                },
                SpannerDetails: []shared.SpannerIODetails{
                    shared.SpannerIODetails{
                        DatabaseID: sdk.String("magnam"),
                        InstanceID: sdk.String("dicta"),
                        ProjectID: sdk.String("nostrum"),
                    },
                    shared.SpannerIODetails{
                        DatabaseID: sdk.String("molestias"),
                        InstanceID: sdk.String("neque"),
                        ProjectID: sdk.String("quis"),
                    },
                    shared.SpannerIODetails{
                        DatabaseID: sdk.String("optio"),
                        InstanceID: sdk.String("esse"),
                        ProjectID: sdk.String("adipisci"),
                    },
                },
                UserDisplayProperties: map[string]string{
                    "tempora": "beatae",
                    "dignissimos": "quia",
                },
            },
            Labels: map[string]string{
                "veritatis": "amet",
            },
            Location: sdk.String("sequi"),
            Name: sdk.String("Mrs. Nicolas Schmitt"),
            PipelineDescription: &shared.PipelineDescription{
                DisplayData: []shared.DisplayData{
                    shared.DisplayData{
                        BoolValue: sdk.Bool(false),
                        DurationValue: sdk.String("quod"),
                        FloatValue: sdk.Float32(3642.54),
                        Int64Value: sdk.String("architecto"),
                        JavaClassValue: sdk.String("vel"),
                        Key: sdk.String("amet"),
                        Label: sdk.String("facilis"),
                        Namespace: sdk.String("libero"),
                        ShortStrValue: sdk.String("maxime"),
                        StrValue: sdk.String("deserunt"),
                        TimestampValue: sdk.String("eius"),
                        URL: sdk.String("molestias"),
                    },
                    shared.DisplayData{
                        BoolValue: sdk.Bool(false),
                        DurationValue: sdk.String("dolores"),
                        FloatValue: sdk.Float32(1716.4),
                        Int64Value: sdk.String("reprehenderit"),
                        JavaClassValue: sdk.String("minus"),
                        Key: sdk.String("non"),
                        Label: sdk.String("odit"),
                        Namespace: sdk.String("maxime"),
                        ShortStrValue: sdk.String("aspernatur"),
                        StrValue: sdk.String("magni"),
                        TimestampValue: sdk.String("minus"),
                        URL: sdk.String("minima"),
                    },
                    shared.DisplayData{
                        BoolValue: sdk.Bool(false),
                        DurationValue: sdk.String("ipsam"),
                        FloatValue: sdk.Float32(1931.99),
                        Int64Value: sdk.String("quaerat"),
                        JavaClassValue: sdk.String("accusantium"),
                        Key: sdk.String("incidunt"),
                        Label: sdk.String("cupiditate"),
                        Namespace: sdk.String("minima"),
                        ShortStrValue: sdk.String("quo"),
                        StrValue: sdk.String("quis"),
                        TimestampValue: sdk.String("facere"),
                        URL: sdk.String("quidem"),
                    },
                },
                ExecutionPipelineStage: []shared.ExecutionStageSummary{
                    shared.ExecutionStageSummary{
                        ComponentSource: []shared.ComponentSource{
                            shared.ComponentSource{
                                Name: sdk.String("Derek Kihn DVM"),
                                OriginalTransformOrCollection: sdk.String("tempora"),
                                UserName: sdk.String("Lesley92"),
                            },
                        },
                        ComponentTransform: []shared.ComponentTransform{
                            shared.ComponentTransform{
                                Name: sdk.String("Dana Denesik"),
                                OriginalTransform: sdk.String("assumenda"),
                                UserName: sdk.String("Rodolfo57"),
                            },
                            shared.ComponentTransform{
                                Name: sdk.String("Beverly Wehner"),
                                OriginalTransform: sdk.String("debitis"),
                                UserName: sdk.String("Hildegard_Friesen78"),
                            },
                            shared.ComponentTransform{
                                Name: sdk.String("Jerome Gutkowski"),
                                OriginalTransform: sdk.String("nulla"),
                                UserName: sdk.String("Eloise33"),
                            },
                        },
                        ID: sdk.String("dfa79620-6bef-42b0-a3e4-2c1aa010e9aa"),
                        InputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Mrs. Jana Monahan"),
                                OriginalTransformOrCollection: sdk.String("quis"),
                                SizeBytes: sdk.String("quos"),
                                UserName: sdk.String("Hal55"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Kirk Wiza"),
                                OriginalTransformOrCollection: sdk.String("est"),
                                SizeBytes: sdk.String("numquam"),
                                UserName: sdk.String("Mittie_Williamson13"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Emmett Koepp"),
                                OriginalTransformOrCollection: sdk.String("molestiae"),
                                SizeBytes: sdk.String("quo"),
                                UserName: sdk.String("Luella66"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Andy Mills"),
                                OriginalTransformOrCollection: sdk.String("quasi"),
                                SizeBytes: sdk.String("quibusdam"),
                                UserName: sdk.String("Gavin25"),
                            },
                        },
                        Kind: shared.ExecutionStageSummaryKindEnumGroupByKeyKind.ToPointer(),
                        Name: sdk.String("Peggy Casper"),
                        OutputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Brendan Jaskolski"),
                                OriginalTransformOrCollection: sdk.String("eaque"),
                                SizeBytes: sdk.String("sequi"),
                                UserName: sdk.String("Marisol17"),
                            },
                        },
                        PrerequisiteStage: []string{
                            "rerum",
                        },
                    },
                    shared.ExecutionStageSummary{
                        ComponentSource: []shared.ComponentSource{
                            shared.ComponentSource{
                                Name: sdk.String("Dr. Emily Schumm DDS"),
                                OriginalTransformOrCollection: sdk.String("libero"),
                                UserName: sdk.String("Amiya0"),
                            },
                            shared.ComponentSource{
                                Name: sdk.String("Carmen Weber"),
                                OriginalTransformOrCollection: sdk.String("sed"),
                                UserName: sdk.String("Rubye.Mayer67"),
                            },
                            shared.ComponentSource{
                                Name: sdk.String("Kimberly Stroman"),
                                OriginalTransformOrCollection: sdk.String("voluptatibus"),
                                UserName: sdk.String("Marlon.Oberbrunner"),
                            },
                            shared.ComponentSource{
                                Name: sdk.String("Blanca Hessel"),
                                OriginalTransformOrCollection: sdk.String("dicta"),
                                UserName: sdk.String("Wava_Terry16"),
                            },
                        },
                        ComponentTransform: []shared.ComponentTransform{
                            shared.ComponentTransform{
                                Name: sdk.String("Michelle Sipes"),
                                OriginalTransform: sdk.String("pariatur"),
                                UserName: sdk.String("Oran_Dietrich7"),
                            },
                        },
                        ID: sdk.String("85472f9e-e691-466a-8be3-444eac8b3a28"),
                        InputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Angelica Huel DVM"),
                                OriginalTransformOrCollection: sdk.String("officiis"),
                                SizeBytes: sdk.String("suscipit"),
                                UserName: sdk.String("Alaina.Huel45"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Clarence Oberbrunner"),
                                OriginalTransformOrCollection: sdk.String("laudantium"),
                                SizeBytes: sdk.String("nihil"),
                                UserName: sdk.String("Lucinda.Waelchi"),
                            },
                        },
                        Kind: shared.ExecutionStageSummaryKindEnumSingletonKind.ToPointer(),
                        Name: sdk.String("Jessie Hirthe V"),
                        OutputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Andy Bogisich"),
                                OriginalTransformOrCollection: sdk.String("similique"),
                                SizeBytes: sdk.String("molestiae"),
                                UserName: sdk.String("Tobin.Lemke24"),
                            },
                        },
                        PrerequisiteStage: []string{
                            "et",
                        },
                    },
                    shared.ExecutionStageSummary{
                        ComponentSource: []shared.ComponentSource{
                            shared.ComponentSource{
                                Name: sdk.String("Melvin Ziemann"),
                                OriginalTransformOrCollection: sdk.String("quos"),
                                UserName: sdk.String("Jaime82"),
                            },
                        },
                        ComponentTransform: []shared.ComponentTransform{
                            shared.ComponentTransform{
                                Name: sdk.String("Stacey Haag"),
                                OriginalTransform: sdk.String("occaecati"),
                                UserName: sdk.String("Yasmine.Baumbach"),
                            },
                            shared.ComponentTransform{
                                Name: sdk.String("Nichole Treutel"),
                                OriginalTransform: sdk.String("culpa"),
                                UserName: sdk.String("Samanta60"),
                            },
                            shared.ComponentTransform{
                                Name: sdk.String("Homer Kshlerin IV"),
                                OriginalTransform: sdk.String("et"),
                                UserName: sdk.String("Nikolas.Marvin"),
                            },
                        },
                        ID: sdk.String("71663c53-0b56-4651-a3a3-638512ab2521"),
                        InputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Emmett Daugherty IV"),
                                OriginalTransformOrCollection: sdk.String("consequuntur"),
                                SizeBytes: sdk.String("aliquam"),
                                UserName: sdk.String("Heidi_Kilback64"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Linda Reichert II"),
                                OriginalTransformOrCollection: sdk.String("hic"),
                                SizeBytes: sdk.String("dolorum"),
                                UserName: sdk.String("Moises.Bartoletti33"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Lorena Schumm"),
                                OriginalTransformOrCollection: sdk.String("eos"),
                                SizeBytes: sdk.String("laborum"),
                                UserName: sdk.String("Kiley.Gottlieb4"),
                            },
                        },
                        Kind: shared.ExecutionStageSummaryKindEnumShuffleKind.ToPointer(),
                        Name: sdk.String("Enrique Barton"),
                        OutputSource: []shared.StageSource{
                            shared.StageSource{
                                Name: sdk.String("Nadine Bradtke"),
                                OriginalTransformOrCollection: sdk.String("nisi"),
                                SizeBytes: sdk.String("voluptas"),
                                UserName: sdk.String("Stuart.Lakin"),
                            },
                            shared.StageSource{
                                Name: sdk.String("Alma Ziemann"),
                                OriginalTransformOrCollection: sdk.String("molestiae"),
                                SizeBytes: sdk.String("amet"),
                                UserName: sdk.String("Wendy.Smith27"),
                            },
                        },
                        PrerequisiteStage: []string{
                            "facere",
                            "illum",
                            "exercitationem",
                            "saepe",
                        },
                    },
                },
                OriginalPipelineTransform: []shared.TransformSummary{
                    shared.TransformSummary{
                        DisplayData: []shared.DisplayData{
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("minima"),
                                FloatValue: sdk.Float32(2941.51),
                                Int64Value: sdk.String("sequi"),
                                JavaClassValue: sdk.String("sequi"),
                                Key: sdk.String("occaecati"),
                                Label: sdk.String("voluptatum"),
                                Namespace: sdk.String("illum"),
                                ShortStrValue: sdk.String("laborum"),
                                StrValue: sdk.String("sapiente"),
                                TimestampValue: sdk.String("soluta"),
                                URL: sdk.String("eius"),
                            },
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("dolores"),
                                FloatValue: sdk.Float32(6795.42),
                                Int64Value: sdk.String("deleniti"),
                                JavaClassValue: sdk.String("assumenda"),
                                Key: sdk.String("iure"),
                                Label: sdk.String("dolorem"),
                                Namespace: sdk.String("neque"),
                                ShortStrValue: sdk.String("laudantium"),
                                StrValue: sdk.String("quos"),
                                TimestampValue: sdk.String("saepe"),
                                URL: sdk.String("incidunt"),
                            },
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("pariatur"),
                                FloatValue: sdk.Float32(5350.55),
                                Int64Value: sdk.String("aut"),
                                JavaClassValue: sdk.String("nesciunt"),
                                Key: sdk.String("error"),
                                Label: sdk.String("necessitatibus"),
                                Namespace: sdk.String("culpa"),
                                ShortStrValue: sdk.String("quis"),
                                StrValue: sdk.String("asperiores"),
                                TimestampValue: sdk.String("iste"),
                                URL: sdk.String("harum"),
                            },
                        },
                        ID: sdk.String("18a244fd-6190-439d-acd3-8ed0dc671dc7"),
                        InputCollectionName: []string{
                            "quae",
                            "vero",
                            "amet",
                            "culpa",
                        },
                        Kind: shared.TransformSummaryKindEnumShuffleKind.ToPointer(),
                        Name: sdk.String("Regina Medhurst DDS"),
                        OutputCollectionName: []string{
                            "aperiam",
                            "repellendus",
                            "ab",
                        },
                    },
                    shared.TransformSummary{
                        DisplayData: []shared.DisplayData{
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("magnam"),
                                FloatValue: sdk.Float32(6156.98),
                                Int64Value: sdk.String("aperiam"),
                                JavaClassValue: sdk.String("dicta"),
                                Key: sdk.String("repellat"),
                                Label: sdk.String("dolores"),
                                Namespace: sdk.String("harum"),
                                ShortStrValue: sdk.String("quibusdam"),
                                StrValue: sdk.String("totam"),
                                TimestampValue: sdk.String("provident"),
                                URL: sdk.String("maxime"),
                            },
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("totam"),
                                FloatValue: sdk.Float32(6624.87),
                                Int64Value: sdk.String("neque"),
                                JavaClassValue: sdk.String("dolores"),
                                Key: sdk.String("vel"),
                                Label: sdk.String("ipsum"),
                                Namespace: sdk.String("occaecati"),
                                ShortStrValue: sdk.String("pariatur"),
                                StrValue: sdk.String("similique"),
                                TimestampValue: sdk.String("quis"),
                                URL: sdk.String("facilis"),
                            },
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("in"),
                                FloatValue: sdk.Float32(7482.53),
                                Int64Value: sdk.String("nisi"),
                                JavaClassValue: sdk.String("natus"),
                                Key: sdk.String("eaque"),
                                Label: sdk.String("quia"),
                                Namespace: sdk.String("facilis"),
                                ShortStrValue: sdk.String("atque"),
                                StrValue: sdk.String("atque"),
                                TimestampValue: sdk.String("illo"),
                                URL: sdk.String("dolorum"),
                            },
                        },
                        ID: sdk.String("94f64366-4a8f-40af-8c69-1d732d9fbaf9"),
                        InputCollectionName: []string{
                            "voluptate",
                            "aliquid",
                        },
                        Kind: shared.TransformSummaryKindEnumWriteKind.ToPointer(),
                        Name: sdk.String("Lynda Thiel"),
                        OutputCollectionName: []string{
                            "quo",
                            "ullam",
                            "ipsa",
                            "placeat",
                        },
                    },
                    shared.TransformSummary{
                        DisplayData: []shared.DisplayData{
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("culpa"),
                                FloatValue: sdk.Float32(2350.13),
                                Int64Value: sdk.String("nostrum"),
                                JavaClassValue: sdk.String("dicta"),
                                Key: sdk.String("eos"),
                                Label: sdk.String("porro"),
                                Namespace: sdk.String("iusto"),
                                ShortStrValue: sdk.String("dolorem"),
                                StrValue: sdk.String("voluptate"),
                                TimestampValue: sdk.String("blanditiis"),
                                URL: sdk.String("dolore"),
                            },
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("rem"),
                                FloatValue: sdk.Float32(5914.17),
                                Int64Value: sdk.String("dolorem"),
                                JavaClassValue: sdk.String("alias"),
                                Key: sdk.String("dignissimos"),
                                Label: sdk.String("minima"),
                                Namespace: sdk.String("eaque"),
                                ShortStrValue: sdk.String("mollitia"),
                                StrValue: sdk.String("alias"),
                                TimestampValue: sdk.String("sit"),
                                URL: sdk.String("accusamus"),
                            },
                            shared.DisplayData{
                                BoolValue: sdk.Bool(false),
                                DurationValue: sdk.String("sint"),
                                FloatValue: sdk.Float32(4155.89),
                                Int64Value: sdk.String("voluptas"),
                                JavaClassValue: sdk.String("eveniet"),
                                Key: sdk.String("eligendi"),
                                Label: sdk.String("ducimus"),
                                Namespace: sdk.String("dolorem"),
                                ShortStrValue: sdk.String("eum"),
                                StrValue: sdk.String("possimus"),
                                TimestampValue: sdk.String("dolore"),
                                URL: sdk.String("neque"),
                            },
                        },
                        ID: sdk.String("194398c7-83c9-4239-8ed3-d3ab7ca3c5ca"),
                        InputCollectionName: []string{
                            "aliquid",
                            "aliquam",
                            "error",
                        },
                        Kind: shared.TransformSummaryKindEnumWriteKind.ToPointer(),
                        Name: sdk.String("Dorothy Rutherford"),
                        OutputCollectionName: []string{
                            "pariatur",
                            "commodi",
                        },
                    },
                },
                StepNamesHash: sdk.String("iste"),
            },
            ProjectID: sdk.String("corrupti"),
            ReplaceJobID: sdk.String("iste"),
            ReplacedByJobID: sdk.String("distinctio"),
            RequestedState: shared.JobRequestedStateEnumJobStateCancelled.ToPointer(),
            RuntimeUpdatableParams: &shared.RuntimeUpdatableParams{
                MaxNumWorkers: sdk.Int(161786),
                MinNumWorkers: sdk.Int(27614),
            },
            SatisfiesPzs: sdk.Bool(false),
            StageStates: []shared.ExecutionStageState{
                shared.ExecutionStageState{
                    CurrentStateTime: sdk.String("magnam"),
                    ExecutionStageName: sdk.String("ad"),
                    ExecutionStageState: shared.ExecutionStageStateExecutionStageStateEnumJobStateUnknown.ToPointer(),
                },
                shared.ExecutionStageState{
                    CurrentStateTime: sdk.String("ipsa"),
                    ExecutionStageName: sdk.String("iure"),
                    ExecutionStageState: shared.ExecutionStageStateExecutionStageStateEnumJobStateCancelled.ToPointer(),
                },
            },
            StartTime: sdk.String("illum"),
            Steps: []shared.Step{
                shared.Step{
                    Kind: sdk.String("perspiciatis"),
                    Name: sdk.String("Pablo Lehner"),
                    Properties: map[string]interface{}{
                        "perspiciatis": "consequuntur",
                        "earum": "quibusdam",
                    },
                },
            },
            StepsLocation: sdk.String("inventore"),
            TempFiles: []string{
                "tempore",
                "molestias",
            },
            TransformNameMapping: map[string]string{
                "odit": "minus",
                "sunt": "sint",
                "exercitationem": "magnam",
            },
            Type: shared.JobTypeEnumJobTypeUnknown.ToPointer(),
        },
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("officiis"),
        Fields: sdk.String("unde"),
        JobID: "ullam",
        Key: sdk.String("enim"),
        Location: "facere",
        OauthToken: sdk.String("cumque"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "cumque",
        QuotaUser: sdk.String("et"),
        UpdateMask: sdk.String("praesentium"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("eveniet"),
    }, operations.DataflowProjectsLocationsJobsUpdateSecurity{
        Option1: &operations.DataflowProjectsLocationsJobsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsJobsWorkItemsLease

Leases a dataflow WorkItem to run.

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
    res, err := s.Projects.DataflowProjectsLocationsJobsWorkItemsLease(ctx, operations.DataflowProjectsLocationsJobsWorkItemsLeaseRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LeaseWorkItemRequest: &shared.LeaseWorkItemRequest{
            CurrentWorkerTime: sdk.String("magnam"),
            Location: sdk.String("unde"),
            RequestedLeaseDuration: sdk.String("consequatur"),
            UnifiedWorkerRequest: map[string]interface{}{
                "eligendi": "iure",
            },
            WorkItemTypes: []string{
                "quaerat",
                "sequi",
                "culpa",
                "facere",
            },
            WorkerCapabilities: []string{
                "nulla",
            },
            WorkerID: sdk.String("laborum"),
        },
        AccessToken: sdk.String("animi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("incidunt"),
        JobID: "similique",
        Key: sdk.String("nobis"),
        Location: "culpa",
        OauthToken: sdk.String("ratione"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "illum",
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("aut"),
    }, operations.DataflowProjectsLocationsJobsWorkItemsLeaseSecurity{
        Option1: &operations.DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LeaseWorkItemResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsJobsWorkItemsReportStatus

Reports the status of dataflow WorkItems leased by a worker.

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
    res, err := s.Projects.DataflowProjectsLocationsJobsWorkItemsReportStatus(ctx, operations.DataflowProjectsLocationsJobsWorkItemsReportStatusRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReportWorkItemStatusRequest: &shared.ReportWorkItemStatusRequest{
            CurrentWorkerTime: sdk.String("nulla"),
            Location: sdk.String("tenetur"),
            UnifiedWorkerRequest: map[string]interface{}{
                "dolor": "totam",
                "beatae": "vitae",
            },
            WorkItemStatuses: []shared.WorkItemStatus{
                shared.WorkItemStatus{
                    Completed: sdk.Bool(false),
                    CounterUpdates: []shared.CounterUpdate{
                        shared.CounterUpdate{
                            Boolean: sdk.Bool(false),
                            Cumulative: sdk.Bool(false),
                            Distribution: &shared.DistributionUpdate{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(112931),
                                    LowBits: sdk.Int64(333783),
                                },
                                Histogram: &shared.Histogram{
                                    BucketCounts: []string{
                                        "laudantium",
                                    },
                                    FirstBucketOffset: sdk.Int(164154),
                                },
                                Max: &shared.SplitInt64{
                                    HighBits: sdk.Int(700872),
                                    LowBits: sdk.Int64(858317),
                                },
                                Min: &shared.SplitInt64{
                                    HighBits: sdk.Int(499270),
                                    LowBits: sdk.Int64(908916),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(831559),
                                    LowBits: sdk.Int64(313305),
                                },
                                SumOfSquares: sdk.Float64(3773.92),
                            },
                            FloatingPoint: sdk.Float64(3317.03),
                            FloatingPointList: &shared.FloatingPointList{
                                Elements: []float64{
                                    4642.42,
                                },
                            },
                            FloatingPointMean: &shared.FloatingPointMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(426152),
                                    LowBits: sdk.Int64(136036),
                                },
                                Sum: sdk.Float64(850.02),
                            },
                            Integer: &shared.SplitInt64{
                                HighBits: sdk.Int(781003),
                                LowBits: sdk.Int64(322054),
                            },
                            IntegerGauge: &shared.IntegerGauge{
                                Timestamp: sdk.String("deleniti"),
                                Value: &shared.SplitInt64{
                                    HighBits: sdk.Int(985155),
                                    LowBits: sdk.Int64(296712),
                                },
                            },
                            IntegerList: &shared.IntegerList{
                                Elements: []shared.SplitInt64{
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(481914),
                                        LowBits: sdk.Int64(236455),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(592813),
                                        LowBits: sdk.Int64(375962),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(344148),
                                        LowBits: sdk.Int64(431165),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(268168),
                                        LowBits: sdk.Int64(763869),
                                    },
                                },
                            },
                            IntegerMean: &shared.IntegerMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(145964),
                                    LowBits: sdk.Int64(33457),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(681482),
                                    LowBits: sdk.Int64(38622),
                                },
                            },
                            Internal: sdk.String("reprehenderit"),
                            NameAndKind: &shared.NameAndKind{
                                Kind: shared.NameAndKindKindEnumSum.ToPointer(),
                                Name: sdk.String("Hattie Mohr PhD"),
                            },
                            ShortID: sdk.String("aspernatur"),
                            StringList: &shared.StringList{
                                Elements: []string{
                                    "deserunt",
                                    "dignissimos",
                                },
                            },
                            StructuredNameAndMetadata: &shared.CounterStructuredNameAndMetadata{
                                Metadata: &shared.CounterMetadata{
                                    Description: sdk.String("nulla"),
                                    Kind: shared.CounterMetadataKindEnumSet.ToPointer(),
                                    OtherUnits: sdk.String("libero"),
                                    StandardUnits: shared.CounterMetadataStandardUnitsEnumNanoseconds.ToPointer(),
                                },
                                Name: &shared.CounterStructuredName{
                                    ComponentStepName: sdk.String("doloribus"),
                                    ExecutionStepName: sdk.String("enim"),
                                    InputIndex: sdk.Int(244989),
                                    Name: sdk.String("Angelina Lindgren"),
                                    Origin: shared.CounterStructuredNameOriginEnumUser.ToPointer(),
                                    OriginNamespace: sdk.String("earum"),
                                    OriginalRequestingStepName: sdk.String("iusto"),
                                    OriginalStepName: sdk.String("atque"),
                                    Portion: shared.CounterStructuredNamePortionEnumAll.ToPointer(),
                                    WorkerID: sdk.String("dolores"),
                                },
                            },
                        },
                    },
                    DynamicSourceSplit: &shared.DynamicSourceSplit{
                        Primary: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeSiblingOfCurrent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "architecto": "consequuntur",
                                        "impedit": "deleniti",
                                    },
                                    map[string]interface{}{
                                        "voluptatum": "aspernatur",
                                        "eius": "accusantium",
                                    },
                                    map[string]interface{}{
                                        "asperiores": "corporis",
                                        "tempora": "voluptatum",
                                        "a": "corrupti",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "hic": "blanditiis",
                                    "maiores": "et",
                                    "harum": "a",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("alias"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "quod": "totam",
                                    "officiis": "dicta",
                                    "maiores": "dolores",
                                },
                            },
                        },
                        Residual: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "corporis": "pariatur",
                                        "quas": "sequi",
                                        "illo": "temporibus",
                                        "doloremque": "aperiam",
                                    },
                                    map[string]interface{}{
                                        "ab": "voluptatem",
                                        "provident": "ipsa",
                                        "delectus": "voluptas",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "quae": "voluptas",
                                    "laboriosam": "ducimus",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("adipisci"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "ratione": "id",
                                    "ex": "quos",
                                    "dicta": "minus",
                                    "exercitationem": "molestiae",
                                },
                            },
                        },
                    },
                    Errors: []shared.Status{
                        shared.Status{
                            Code: sdk.Int(500700),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "itaque": "molestiae",
                                    "quaerat": "explicabo",
                                    "dolore": "accusantium",
                                    "excepturi": "deserunt",
                                },
                                map[string]interface{}{
                                    "beatae": "exercitationem",
                                },
                                map[string]interface{}{
                                    "eaque": "blanditiis",
                                    "voluptas": "aut",
                                    "vitae": "tempora",
                                    "molestias": "cupiditate",
                                },
                                map[string]interface{}{
                                    "minima": "doloribus",
                                    "suscipit": "sequi",
                                    "debitis": "neque",
                                },
                            },
                            Message: sdk.String("mollitia"),
                        },
                        shared.Status{
                            Code: sdk.Int(947420),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "vero": "natus",
                                    "quibusdam": "quibusdam",
                                    "officia": "dolorem",
                                    "velit": "vero",
                                },
                            },
                            Message: sdk.String("placeat"),
                        },
                    },
                    MetricUpdates: []shared.MetricUpdate{
                        shared.MetricUpdate{
                            Cumulative: sdk.Bool(false),
                            Distribution: sdk.String("vel"),
                            Gauge: sdk.String("non"),
                            Internal: sdk.String("incidunt"),
                            Kind: sdk.String("praesentium"),
                            MeanCount: sdk.String("ipsum"),
                            MeanSum: sdk.String("itaque"),
                            Name: &shared.MetricStructuredName{
                                Context: map[string]string{
                                    "dolorum": "esse",
                                    "id": "natus",
                                },
                                Name: sdk.String("Elias Glover"),
                                Origin: sdk.String("neque"),
                            },
                            Scalar: sdk.String("in"),
                            Set: sdk.String("debitis"),
                            UpdateTime: sdk.String("quaerat"),
                        },
                        shared.MetricUpdate{
                            Cumulative: sdk.Bool(false),
                            Distribution: sdk.String("nostrum"),
                            Gauge: sdk.String("libero"),
                            Internal: sdk.String("totam"),
                            Kind: sdk.String("omnis"),
                            MeanCount: sdk.String("veniam"),
                            MeanSum: sdk.String("nostrum"),
                            Name: &shared.MetricStructuredName{
                                Context: map[string]string{
                                    "aliquam": "vitae",
                                    "ipsum": "recusandae",
                                    "inventore": "ipsum",
                                    "error": "numquam",
                                },
                                Name: sdk.String("Mr. Todd Feil"),
                                Origin: sdk.String("perferendis"),
                            },
                            Scalar: sdk.String("iure"),
                            Set: sdk.String("cum"),
                            UpdateTime: sdk.String("facere"),
                        },
                        shared.MetricUpdate{
                            Cumulative: sdk.Bool(false),
                            Distribution: sdk.String("ratione"),
                            Gauge: sdk.String("quis"),
                            Internal: sdk.String("modi"),
                            Kind: sdk.String("quo"),
                            MeanCount: sdk.String("aut"),
                            MeanSum: sdk.String("cupiditate"),
                            Name: &shared.MetricStructuredName{
                                Context: map[string]string{
                                    "harum": "vero",
                                },
                                Name: sdk.String("Thelma Gorczany Sr."),
                                Origin: sdk.String("numquam"),
                            },
                            Scalar: sdk.String("numquam"),
                            Set: sdk.String("excepturi"),
                            UpdateTime: sdk.String("pariatur"),
                        },
                        shared.MetricUpdate{
                            Cumulative: sdk.Bool(false),
                            Distribution: sdk.String("voluptatum"),
                            Gauge: sdk.String("vel"),
                            Internal: sdk.String("delectus"),
                            Kind: sdk.String("modi"),
                            MeanCount: sdk.String("expedita"),
                            MeanSum: sdk.String("quidem"),
                            Name: &shared.MetricStructuredName{
                                Context: map[string]string{
                                    "eaque": "asperiores",
                                },
                                Name: sdk.String("Dean Spinka Sr."),
                                Origin: sdk.String("quod"),
                            },
                            Scalar: sdk.String("expedita"),
                            Set: sdk.String("sapiente"),
                            UpdateTime: sdk.String("itaque"),
                        },
                    },
                    Progress: &shared.ApproximateProgress{
                        PercentComplete: sdk.Float32(4920.7),
                        Position: &shared.Position{
                            ByteOffset: sdk.String("magnam"),
                            ConcatPosition: &shared.ConcatPosition{
                                Index: sdk.Int(568153),
                                Position: &shared.Position{},
                            },
                            End: sdk.Bool(false),
                            Key: sdk.String("placeat"),
                            RecordIndex: sdk.String("dolorum"),
                            ShufflePosition: sdk.String("voluptatibus"),
                        },
                        RemainingTime: sdk.String("modi"),
                    },
                    ReportIndex: sdk.String("enim"),
                    ReportedProgress: &shared.ApproximateReportedProgress{
                        ConsumedParallelism: &shared.ReportedParallelism{
                            IsInfinite: sdk.Bool(false),
                            Value: sdk.Float64(6496.61),
                        },
                        FractionConsumed: sdk.Float64(1510.39),
                        Position: &shared.Position{
                            ByteOffset: sdk.String("molestiae"),
                            ConcatPosition: &shared.ConcatPosition{
                                Index: sdk.Int(964857),
                                Position: &shared.Position{},
                            },
                            End: sdk.Bool(false),
                            Key: sdk.String("ex"),
                            RecordIndex: sdk.String("error"),
                            ShufflePosition: sdk.String("saepe"),
                        },
                        RemainingParallelism: &shared.ReportedParallelism{
                            IsInfinite: sdk.Bool(false),
                            Value: sdk.Float64(1626.91),
                        },
                    },
                    RequestedLeaseDuration: sdk.String("quod"),
                    SourceFork: &shared.SourceFork{
                        Primary: &shared.SourceSplitShard{
                            DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "temporibus": "quae",
                                        "doloremque": "debitis",
                                    },
                                    map[string]interface{}{
                                        "temporibus": "quidem",
                                        "neque": "est",
                                        "repellendus": "tempora",
                                    },
                                    map[string]interface{}{
                                        "vel": "cum",
                                        "doloremque": "adipisci",
                                        "quasi": "accusantium",
                                        "molestias": "facere",
                                    },
                                    map[string]interface{}{
                                        "quisquam": "nesciunt",
                                        "sequi": "in",
                                        "modi": "nihil",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "aut": "rem",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("odit"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "error": "incidunt",
                                    "asperiores": "eos",
                                    "mollitia": "distinctio",
                                },
                            },
                        },
                        PrimarySource: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "nemo": "eum",
                                        "iusto": "veritatis",
                                        "voluptates": "unde",
                                        "impedit": "amet",
                                    },
                                    map[string]interface{}{
                                        "commodi": "neque",
                                    },
                                    map[string]interface{}{
                                        "eaque": "officia",
                                        "tempora": "eum",
                                    },
                                    map[string]interface{}{
                                        "architecto": "aliquam",
                                        "ipsum": "nihil",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "natus": "quisquam",
                                    "itaque": "consequatur",
                                    "recusandae": "iste",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("error"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "nemo": "unde",
                                },
                            },
                        },
                        Residual: &shared.SourceSplitShard{
                            DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeIndependent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "amet": "deserunt",
                                        "ducimus": "modi",
                                        "impedit": "ipsa",
                                    },
                                    map[string]interface{}{
                                        "ullam": "sed",
                                    },
                                    map[string]interface{}{
                                        "saepe": "dolor",
                                        "quidem": "quaerat",
                                        "cum": "dolore",
                                        "quibusdam": "rerum",
                                    },
                                    map[string]interface{}{
                                        "tempore": "odio",
                                        "reprehenderit": "quas",
                                        "voluptates": "distinctio",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "nisi": "officiis",
                                    "quasi": "fugiat",
                                    "aspernatur": "impedit",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("voluptatibus"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "eaque": "aspernatur",
                                    "expedita": "laborum",
                                },
                            },
                        },
                        ResidualSource: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeSiblingOfCurrent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "eligendi": "nam",
                                    },
                                    map[string]interface{}{
                                        "aliquam": "aliquid",
                                        "adipisci": "ipsam",
                                        "fugiat": "enim",
                                        "eveniet": "eum",
                                    },
                                    map[string]interface{}{
                                        "at": "culpa",
                                        "alias": "eos",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "quisquam": "dolor",
                                    "accusamus": "sint",
                                    "enim": "veritatis",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("mollitia"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "vero": "ratione",
                                },
                            },
                        },
                    },
                    SourceOperationResponse: &shared.SourceOperationResponse{
                        GetMetadata: &shared.SourceGetMetadataResponse{
                            Metadata: &shared.SourceMetadata{
                                EstimatedSizeBytes: sdk.String("aut"),
                                Infinite: sdk.Bool(false),
                                ProducesSortedKeys: sdk.Bool(false),
                            },
                        },
                        Split: &shared.SourceSplitResponse{
                            Bundles: []shared.DerivedSource{
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeSiblingOfCurrent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "eum": "commodi",
                                                "magnam": "rem",
                                                "occaecati": "possimus",
                                            },
                                            map[string]interface{}{
                                                "nam": "quam",
                                                "blanditiis": "laboriosam",
                                            },
                                            map[string]interface{}{
                                                "adipisci": "necessitatibus",
                                                "veritatis": "consectetur",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "quasi": "eos",
                                            "dolorum": "vel",
                                            "rerum": "cupiditate",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("excepturi"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "eius": "perspiciatis",
                                        },
                                    },
                                },
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeIndependent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "numquam": "tempora",
                                                "corrupti": "ducimus",
                                                "asperiores": "veniam",
                                            },
                                            map[string]interface{}{
                                                "praesentium": "ut",
                                                "amet": "blanditiis",
                                                "nesciunt": "ex",
                                                "tempore": "rem",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "harum": "consectetur",
                                            "quisquam": "nulla",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("a"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "dolore": "dicta",
                                            "minima": "facilis",
                                        },
                                    },
                                },
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "molestias": "hic",
                                                "error": "repellendus",
                                            },
                                            map[string]interface{}{
                                                "dicta": "ratione",
                                                "delectus": "ut",
                                                "officiis": "itaque",
                                                "nulla": "distinctio",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "in": "deleniti",
                                            "tempore": "reiciendis",
                                            "commodi": "sit",
                                            "ea": "molestias",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("quia"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "rem": "molestias",
                                            "eius": "necessitatibus",
                                        },
                                    },
                                },
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "amet": "fugiat",
                                                "corporis": "impedit",
                                            },
                                            map[string]interface{}{
                                                "fugit": "voluptate",
                                                "provident": "quis",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "quam": "laudantium",
                                            "exercitationem": "vitae",
                                            "magnam": "blanditiis",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("nulla"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "quibusdam": "minima",
                                            "ut": "cupiditate",
                                        },
                                    },
                                },
                            },
                            Outcome: shared.SourceSplitResponseOutcomeEnumSourceSplitOutcomeSplittingHappened.ToPointer(),
                            Shards: []shared.SourceSplitShard{
                                shared.SourceSplitShard{
                                    DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeIndependent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "tempore": "ipsum",
                                                "dolorem": "expedita",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "voluptatem": "maiores",
                                            "unde": "reprehenderit",
                                            "voluptatem": "placeat",
                                            "dolore": "magni",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("voluptatibus"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "provident": "delectus",
                                            "dolore": "totam",
                                            "labore": "numquam",
                                            "sunt": "consequuntur",
                                        },
                                    },
                                },
                                shared.SourceSplitShard{
                                    DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeIndependent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "minima": "expedita",
                                                "ducimus": "excepturi",
                                            },
                                            map[string]interface{}{
                                                "doloremque": "iure",
                                                "nostrum": "cumque",
                                            },
                                            map[string]interface{}{
                                                "earum": "earum",
                                            },
                                            map[string]interface{}{
                                                "vel": "sapiente",
                                                "perspiciatis": "ratione",
                                                "libero": "molestias",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "fuga": "beatae",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("distinctio"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "eligendi": "unde",
                                            "veniam": "nam",
                                            "accusamus": "vitae",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    StopPosition: &shared.Position{
                        ByteOffset: sdk.String("explicabo"),
                        ConcatPosition: &shared.ConcatPosition{
                            Index: sdk.Int(357256),
                            Position: &shared.Position{},
                        },
                        End: sdk.Bool(false),
                        Key: sdk.String("incidunt"),
                        RecordIndex: sdk.String("soluta"),
                        ShufflePosition: sdk.String("nihil"),
                    },
                    TotalThrottlerWaitTimeSeconds: sdk.Float64(2391.85),
                    WorkItemID: sdk.String("provident"),
                },
                shared.WorkItemStatus{
                    Completed: sdk.Bool(false),
                    CounterUpdates: []shared.CounterUpdate{
                        shared.CounterUpdate{
                            Boolean: sdk.Bool(false),
                            Cumulative: sdk.Bool(false),
                            Distribution: &shared.DistributionUpdate{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(295284),
                                    LowBits: sdk.Int64(974452),
                                },
                                Histogram: &shared.Histogram{
                                    BucketCounts: []string{
                                        "odio",
                                        "voluptate",
                                        "explicabo",
                                        "architecto",
                                    },
                                    FirstBucketOffset: sdk.Int(18584),
                                },
                                Max: &shared.SplitInt64{
                                    HighBits: sdk.Int(819052),
                                    LowBits: sdk.Int64(118221),
                                },
                                Min: &shared.SplitInt64{
                                    HighBits: sdk.Int(965454),
                                    LowBits: sdk.Int64(376419),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(346328),
                                    LowBits: sdk.Int64(338101),
                                },
                                SumOfSquares: sdk.Float64(5546.44),
                            },
                            FloatingPoint: sdk.Float64(7728.04),
                            FloatingPointList: &shared.FloatingPointList{
                                Elements: []float64{
                                    5697.63,
                                    8016.21,
                                    4387.94,
                                },
                            },
                            FloatingPointMean: &shared.FloatingPointMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(151838),
                                    LowBits: sdk.Int64(141142),
                                },
                                Sum: sdk.Float64(8412.54),
                            },
                            Integer: &shared.SplitInt64{
                                HighBits: sdk.Int(144879),
                                LowBits: sdk.Int64(721610),
                            },
                            IntegerGauge: &shared.IntegerGauge{
                                Timestamp: sdk.String("optio"),
                                Value: &shared.SplitInt64{
                                    HighBits: sdk.Int(34920),
                                    LowBits: sdk.Int64(938773),
                                },
                            },
                            IntegerList: &shared.IntegerList{
                                Elements: []shared.SplitInt64{
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(256890),
                                        LowBits: sdk.Int64(28033),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(528646),
                                        LowBits: sdk.Int64(496440),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(819883),
                                        LowBits: sdk.Int64(599413),
                                    },
                                },
                            },
                            IntegerMean: &shared.IntegerMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(806901),
                                    LowBits: sdk.Int64(634880),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(642858),
                                    LowBits: sdk.Int64(926879),
                                },
                            },
                            Internal: sdk.String("doloremque"),
                            NameAndKind: &shared.NameAndKind{
                                Kind: shared.NameAndKindKindEnumMax.ToPointer(),
                                Name: sdk.String("Rosemarie Spencer"),
                            },
                            ShortID: sdk.String("est"),
                            StringList: &shared.StringList{
                                Elements: []string{
                                    "placeat",
                                    "occaecati",
                                    "nam",
                                },
                            },
                            StructuredNameAndMetadata: &shared.CounterStructuredNameAndMetadata{
                                Metadata: &shared.CounterMetadata{
                                    Description: sdk.String("modi"),
                                    Kind: shared.CounterMetadataKindEnumSet.ToPointer(),
                                    OtherUnits: sdk.String("id"),
                                    StandardUnits: shared.CounterMetadataStandardUnitsEnumTimestampMsec.ToPointer(),
                                },
                                Name: &shared.CounterStructuredName{
                                    ComponentStepName: sdk.String("beatae"),
                                    ExecutionStepName: sdk.String("quod"),
                                    InputIndex: sdk.Int(953677),
                                    Name: sdk.String("Mrs. Perry Turner"),
                                    Origin: shared.CounterStructuredNameOriginEnumUser.ToPointer(),
                                    OriginNamespace: sdk.String("molestias"),
                                    OriginalRequestingStepName: sdk.String("ipsa"),
                                    OriginalStepName: sdk.String("amet"),
                                    Portion: shared.CounterStructuredNamePortionEnumKey.ToPointer(),
                                    WorkerID: sdk.String("aperiam"),
                                },
                            },
                        },
                        shared.CounterUpdate{
                            Boolean: sdk.Bool(false),
                            Cumulative: sdk.Bool(false),
                            Distribution: &shared.DistributionUpdate{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(495225),
                                    LowBits: sdk.Int64(984557),
                                },
                                Histogram: &shared.Histogram{
                                    BucketCounts: []string{
                                        "ducimus",
                                    },
                                    FirstBucketOffset: sdk.Int(535148),
                                },
                                Max: &shared.SplitInt64{
                                    HighBits: sdk.Int(224026),
                                    LowBits: sdk.Int64(65954),
                                },
                                Min: &shared.SplitInt64{
                                    HighBits: sdk.Int(575959),
                                    LowBits: sdk.Int64(553714),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(193200),
                                    LowBits: sdk.Int64(854466),
                                },
                                SumOfSquares: sdk.Float64(2628.24),
                            },
                            FloatingPoint: sdk.Float64(1409.72),
                            FloatingPointList: &shared.FloatingPointList{
                                Elements: []float64{
                                    3253.52,
                                    3041.91,
                                    6311.23,
                                    5285.01,
                                },
                            },
                            FloatingPointMean: &shared.FloatingPointMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(359301),
                                    LowBits: sdk.Int64(292881),
                                },
                                Sum: sdk.Float64(4150.03),
                            },
                            Integer: &shared.SplitInt64{
                                HighBits: sdk.Int(416884),
                                LowBits: sdk.Int64(338451),
                            },
                            IntegerGauge: &shared.IntegerGauge{
                                Timestamp: sdk.String("provident"),
                                Value: &shared.SplitInt64{
                                    HighBits: sdk.Int(482670),
                                    LowBits: sdk.Int64(761961),
                                },
                            },
                            IntegerList: &shared.IntegerList{
                                Elements: []shared.SplitInt64{
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(8072),
                                        LowBits: sdk.Int64(144248),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(213871),
                                        LowBits: sdk.Int64(198812),
                                    },
                                },
                            },
                            IntegerMean: &shared.IntegerMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(803113),
                                    LowBits: sdk.Int64(79246),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(264670),
                                    LowBits: sdk.Int64(467657),
                                },
                            },
                            Internal: sdk.String("vitae"),
                            NameAndKind: &shared.NameAndKind{
                                Kind: shared.NameAndKindKindEnumDistribution.ToPointer(),
                                Name: sdk.String("Catherine Parisian"),
                            },
                            ShortID: sdk.String("autem"),
                            StringList: &shared.StringList{
                                Elements: []string{
                                    "at",
                                    "hic",
                                    "nemo",
                                    "laborum",
                                },
                            },
                            StructuredNameAndMetadata: &shared.CounterStructuredNameAndMetadata{
                                Metadata: &shared.CounterMetadata{
                                    Description: sdk.String("quidem"),
                                    Kind: shared.CounterMetadataKindEnumDistribution.ToPointer(),
                                    OtherUnits: sdk.String("aliquid"),
                                    StandardUnits: shared.CounterMetadataStandardUnitsEnumMilliseconds.ToPointer(),
                                },
                                Name: &shared.CounterStructuredName{
                                    ComponentStepName: sdk.String("atque"),
                                    ExecutionStepName: sdk.String("reprehenderit"),
                                    InputIndex: sdk.Int(774946),
                                    Name: sdk.String("Faith Runte"),
                                    Origin: shared.CounterStructuredNameOriginEnumUser.ToPointer(),
                                    OriginNamespace: sdk.String("ex"),
                                    OriginalRequestingStepName: sdk.String("aspernatur"),
                                    OriginalStepName: sdk.String("est"),
                                    Portion: shared.CounterStructuredNamePortionEnumAll.ToPointer(),
                                    WorkerID: sdk.String("aut"),
                                },
                            },
                        },
                        shared.CounterUpdate{
                            Boolean: sdk.Bool(false),
                            Cumulative: sdk.Bool(false),
                            Distribution: &shared.DistributionUpdate{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(747951),
                                    LowBits: sdk.Int64(906577),
                                },
                                Histogram: &shared.Histogram{
                                    BucketCounts: []string{
                                        "autem",
                                        "perspiciatis",
                                        "saepe",
                                        "illo",
                                    },
                                    FirstBucketOffset: sdk.Int(45536),
                                },
                                Max: &shared.SplitInt64{
                                    HighBits: sdk.Int(61728),
                                    LowBits: sdk.Int64(83554),
                                },
                                Min: &shared.SplitInt64{
                                    HighBits: sdk.Int(314547),
                                    LowBits: sdk.Int64(499883),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(380884),
                                    LowBits: sdk.Int64(222109),
                                },
                                SumOfSquares: sdk.Float64(38.66),
                            },
                            FloatingPoint: sdk.Float64(7301.78),
                            FloatingPointList: &shared.FloatingPointList{
                                Elements: []float64{
                                    6828.88,
                                    4685.8,
                                    6306.68,
                                    9957.08,
                                },
                            },
                            FloatingPointMean: &shared.FloatingPointMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(840994),
                                    LowBits: sdk.Int64(884147),
                                },
                                Sum: sdk.Float64(8465.81),
                            },
                            Integer: &shared.SplitInt64{
                                HighBits: sdk.Int(500776),
                                LowBits: sdk.Int64(270736),
                            },
                            IntegerGauge: &shared.IntegerGauge{
                                Timestamp: sdk.String("similique"),
                                Value: &shared.SplitInt64{
                                    HighBits: sdk.Int(220864),
                                    LowBits: sdk.Int64(314552),
                                },
                            },
                            IntegerList: &shared.IntegerList{
                                Elements: []shared.SplitInt64{
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(303356),
                                        LowBits: sdk.Int64(109308),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(130205),
                                        LowBits: sdk.Int64(202246),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(545400),
                                        LowBits: sdk.Int64(889908),
                                    },
                                },
                            },
                            IntegerMean: &shared.IntegerMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(81671),
                                    LowBits: sdk.Int64(642391),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(446860),
                                    LowBits: sdk.Int64(196495),
                                },
                            },
                            Internal: sdk.String("ad"),
                            NameAndKind: &shared.NameAndKind{
                                Kind: shared.NameAndKindKindEnumAnd.ToPointer(),
                                Name: sdk.String("Sean Homenick"),
                            },
                            ShortID: sdk.String("ipsum"),
                            StringList: &shared.StringList{
                                Elements: []string{
                                    "expedita",
                                },
                            },
                            StructuredNameAndMetadata: &shared.CounterStructuredNameAndMetadata{
                                Metadata: &shared.CounterMetadata{
                                    Description: sdk.String("itaque"),
                                    Kind: shared.CounterMetadataKindEnumLatestValue.ToPointer(),
                                    OtherUnits: sdk.String("provident"),
                                    StandardUnits: shared.CounterMetadataStandardUnitsEnumMicroseconds.ToPointer(),
                                },
                                Name: &shared.CounterStructuredName{
                                    ComponentStepName: sdk.String("dicta"),
                                    ExecutionStepName: sdk.String("id"),
                                    InputIndex: sdk.Int(502150),
                                    Name: sdk.String("Edwin Jacobs"),
                                    Origin: shared.CounterStructuredNameOriginEnumUser.ToPointer(),
                                    OriginNamespace: sdk.String("architecto"),
                                    OriginalRequestingStepName: sdk.String("quae"),
                                    OriginalStepName: sdk.String("aut"),
                                    Portion: shared.CounterStructuredNamePortionEnumKey.ToPointer(),
                                    WorkerID: sdk.String("delectus"),
                                },
                            },
                        },
                        shared.CounterUpdate{
                            Boolean: sdk.Bool(false),
                            Cumulative: sdk.Bool(false),
                            Distribution: &shared.DistributionUpdate{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(887137),
                                    LowBits: sdk.Int64(607672),
                                },
                                Histogram: &shared.Histogram{
                                    BucketCounts: []string{
                                        "ipsam",
                                        "soluta",
                                    },
                                    FirstBucketOffset: sdk.Int(456591),
                                },
                                Max: &shared.SplitInt64{
                                    HighBits: sdk.Int(113382),
                                    LowBits: sdk.Int64(105497),
                                },
                                Min: &shared.SplitInt64{
                                    HighBits: sdk.Int(866917),
                                    LowBits: sdk.Int64(28449),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(502432),
                                    LowBits: sdk.Int64(756571),
                                },
                                SumOfSquares: sdk.Float64(9475.73),
                            },
                            FloatingPoint: sdk.Float64(5358.76),
                            FloatingPointList: &shared.FloatingPointList{
                                Elements: []float64{
                                    8991.12,
                                    7692.26,
                                    6116.3,
                                },
                            },
                            FloatingPointMean: &shared.FloatingPointMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(972114),
                                    LowBits: sdk.Int64(468177),
                                },
                                Sum: sdk.Float64(7293.47),
                            },
                            Integer: &shared.SplitInt64{
                                HighBits: sdk.Int(596393),
                                LowBits: sdk.Int64(577273),
                            },
                            IntegerGauge: &shared.IntegerGauge{
                                Timestamp: sdk.String("officia"),
                                Value: &shared.SplitInt64{
                                    HighBits: sdk.Int(366708),
                                    LowBits: sdk.Int64(337471),
                                },
                            },
                            IntegerList: &shared.IntegerList{
                                Elements: []shared.SplitInt64{
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(630729),
                                        LowBits: sdk.Int64(432546),
                                    },
                                },
                            },
                            IntegerMean: &shared.IntegerMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(339333),
                                    LowBits: sdk.Int64(412480),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(907825),
                                    LowBits: sdk.Int64(823063),
                                },
                            },
                            Internal: sdk.String("dolor"),
                            NameAndKind: &shared.NameAndKind{
                                Kind: shared.NameAndKindKindEnumSum.ToPointer(),
                                Name: sdk.String("Miss Latoya Robel"),
                            },
                            ShortID: sdk.String("laudantium"),
                            StringList: &shared.StringList{
                                Elements: []string{
                                    "fuga",
                                    "autem",
                                    "quis",
                                },
                            },
                            StructuredNameAndMetadata: &shared.CounterStructuredNameAndMetadata{
                                Metadata: &shared.CounterMetadata{
                                    Description: sdk.String("modi"),
                                    Kind: shared.CounterMetadataKindEnumMax.ToPointer(),
                                    OtherUnits: sdk.String("qui"),
                                    StandardUnits: shared.CounterMetadataStandardUnitsEnumTimestampMsec.ToPointer(),
                                },
                                Name: &shared.CounterStructuredName{
                                    ComponentStepName: sdk.String("cupiditate"),
                                    ExecutionStepName: sdk.String("rem"),
                                    InputIndex: sdk.Int(410239),
                                    Name: sdk.String("Gerardo Kuhlman II"),
                                    Origin: shared.CounterStructuredNameOriginEnumUser.ToPointer(),
                                    OriginNamespace: sdk.String("mollitia"),
                                    OriginalRequestingStepName: sdk.String("ipsam"),
                                    OriginalStepName: sdk.String("autem"),
                                    Portion: shared.CounterStructuredNamePortionEnumAll.ToPointer(),
                                    WorkerID: sdk.String("doloremque"),
                                },
                            },
                        },
                    },
                    DynamicSourceSplit: &shared.DynamicSourceSplit{
                        Primary: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "nemo": "eaque",
                                    },
                                    map[string]interface{}{
                                        "natus": "nihil",
                                    },
                                    map[string]interface{}{
                                        "et": "unde",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "eius": "rem",
                                    "delectus": "blanditiis",
                                    "laudantium": "earum",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("impedit"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "reprehenderit": "expedita",
                                    "hic": "occaecati",
                                    "perferendis": "non",
                                    "saepe": "consequatur",
                                },
                            },
                        },
                        Residual: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "ad": "temporibus",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "laudantium": "excepturi",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("alias"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "quasi": "laboriosam",
                                    "aspernatur": "quod",
                                    "suscipit": "tempore",
                                },
                            },
                        },
                    },
                    Errors: []shared.Status{
                        shared.Status{
                            Code: sdk.Int(687883),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "culpa": "doloremque",
                                    "doloribus": "vel",
                                    "enim": "ducimus",
                                },
                                map[string]interface{}{
                                    "in": "at",
                                    "alias": "consectetur",
                                    "mollitia": "beatae",
                                },
                            },
                            Message: sdk.String("numquam"),
                        },
                        shared.Status{
                            Code: sdk.Int(508520),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "blanditiis": "at",
                                    "repudiandae": "ipsum",
                                    "voluptatem": "tenetur",
                                    "aut": "ex",
                                },
                            },
                            Message: sdk.String("cupiditate"),
                        },
                        shared.Status{
                            Code: sdk.Int(855063),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "aut": "commodi",
                                },
                                map[string]interface{}{
                                    "atque": "temporibus",
                                },
                                map[string]interface{}{
                                    "voluptate": "debitis",
                                    "sunt": "ad",
                                    "quia": "aspernatur",
                                },
                            },
                            Message: sdk.String("iste"),
                        },
                        shared.Status{
                            Code: sdk.Int(472734),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "sit": "quibusdam",
                                },
                                map[string]interface{}{
                                    "voluptatum": "voluptatem",
                                    "amet": "vitae",
                                    "explicabo": "quia",
                                },
                            },
                            Message: sdk.String("provident"),
                        },
                    },
                    MetricUpdates: []shared.MetricUpdate{
                        shared.MetricUpdate{
                            Cumulative: sdk.Bool(false),
                            Distribution: sdk.String("nobis"),
                            Gauge: sdk.String("optio"),
                            Internal: sdk.String("laboriosam"),
                            Kind: sdk.String("quasi"),
                            MeanCount: sdk.String("porro"),
                            MeanSum: sdk.String("sed"),
                            Name: &shared.MetricStructuredName{
                                Context: map[string]string{
                                    "in": "eaque",
                                    "odit": "distinctio",
                                    "soluta": "sint",
                                },
                                Name: sdk.String("Mr. Elvira Thompson"),
                                Origin: sdk.String("fugiat"),
                            },
                            Scalar: sdk.String("id"),
                            Set: sdk.String("sed"),
                            UpdateTime: sdk.String("fugiat"),
                        },
                    },
                    Progress: &shared.ApproximateProgress{
                        PercentComplete: sdk.Float32(9256.35),
                        Position: &shared.Position{
                            ByteOffset: sdk.String("neque"),
                            ConcatPosition: &shared.ConcatPosition{
                                Index: sdk.Int(326041),
                                Position: &shared.Position{},
                            },
                            End: sdk.Bool(false),
                            Key: sdk.String("tenetur"),
                            RecordIndex: sdk.String("praesentium"),
                            ShufflePosition: sdk.String("officiis"),
                        },
                        RemainingTime: sdk.String("sit"),
                    },
                    ReportIndex: sdk.String("quasi"),
                    ReportedProgress: &shared.ApproximateReportedProgress{
                        ConsumedParallelism: &shared.ReportedParallelism{
                            IsInfinite: sdk.Bool(false),
                            Value: sdk.Float64(7291.39),
                        },
                        FractionConsumed: sdk.Float64(9452.18),
                        Position: &shared.Position{
                            ByteOffset: sdk.String("dolorem"),
                            ConcatPosition: &shared.ConcatPosition{
                                Index: sdk.Int(241364),
                                Position: &shared.Position{},
                            },
                            End: sdk.Bool(false),
                            Key: sdk.String("voluptates"),
                            RecordIndex: sdk.String("similique"),
                            ShufflePosition: sdk.String("id"),
                        },
                        RemainingParallelism: &shared.ReportedParallelism{
                            IsInfinite: sdk.Bool(false),
                            Value: sdk.Float64(6950.02),
                        },
                    },
                    RequestedLeaseDuration: sdk.String("ut"),
                    SourceFork: &shared.SourceFork{
                        Primary: &shared.SourceSplitShard{
                            DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeIndependent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "dolores": "dolorum",
                                    },
                                    map[string]interface{}{
                                        "sunt": "iure",
                                        "voluptatem": "incidunt",
                                        "soluta": "a",
                                        "vitae": "maxime",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "cupiditate": "asperiores",
                                    "maxime": "ex",
                                    "dicta": "deserunt",
                                    "laborum": "itaque",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("ad"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "harum": "quaerat",
                                    "delectus": "sit",
                                    "porro": "labore",
                                    "molestias": "qui",
                                },
                            },
                        },
                        PrimarySource: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "ut": "incidunt",
                                        "quibusdam": "doloremque",
                                    },
                                    map[string]interface{}{
                                        "dolorum": "explicabo",
                                        "odit": "laboriosam",
                                        "esse": "est",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "accusamus": "debitis",
                                    "esse": "omnis",
                                    "repudiandae": "ipsum",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("minus"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "illo": "est",
                                    "placeat": "sequi",
                                },
                            },
                        },
                        Residual: &shared.SourceSplitShard{
                            DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "cumque": "distinctio",
                                        "rem": "consectetur",
                                        "nulla": "magni",
                                        "dolor": "esse",
                                    },
                                    map[string]interface{}{
                                        "mollitia": "debitis",
                                        "neque": "facilis",
                                        "sapiente": "maxime",
                                    },
                                    map[string]interface{}{
                                        "dolor": "nulla",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "eius": "ad",
                                    "aperiam": "animi",
                                    "unde": "rem",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("iure"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "aliquam": "natus",
                                    "ad": "cum",
                                    "dolorum": "quod",
                                },
                            },
                        },
                        ResidualSource: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeIndependent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "tenetur": "eaque",
                                        "ex": "rerum",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "laudantium": "repudiandae",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("minus"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "atque": "autem",
                                    "eius": "unde",
                                    "sunt": "amet",
                                    "laudantium": "commodi",
                                },
                            },
                        },
                    },
                    SourceOperationResponse: &shared.SourceOperationResponse{
                        GetMetadata: &shared.SourceGetMetadataResponse{
                            Metadata: &shared.SourceMetadata{
                                EstimatedSizeBytes: sdk.String("a"),
                                Infinite: sdk.Bool(false),
                                ProducesSortedKeys: sdk.Bool(false),
                            },
                        },
                        Split: &shared.SourceSplitResponse{
                            Bundles: []shared.DerivedSource{
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "eum": "sint",
                                                "eligendi": "incidunt",
                                                "quisquam": "quod",
                                            },
                                            map[string]interface{}{
                                                "quidem": "reprehenderit",
                                                "praesentium": "totam",
                                            },
                                            map[string]interface{}{
                                                "alias": "deserunt",
                                                "sequi": "sapiente",
                                                "illum": "nesciunt",
                                            },
                                            map[string]interface{}{
                                                "corrupti": "inventore",
                                                "quibusdam": "culpa",
                                                "dicta": "perferendis",
                                                "asperiores": "deleniti",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "consequuntur": "non",
                                            "fugiat": "voluptatibus",
                                            "iste": "amet",
                                            "quae": "pariatur",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("officia"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "debitis": "facere",
                                        },
                                    },
                                },
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "repellat": "est",
                                            },
                                            map[string]interface{}{
                                                "iste": "numquam",
                                                "similique": "optio",
                                                "minus": "sint",
                                                "aliquam": "consectetur",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "dicta": "nesciunt",
                                            "reprehenderit": "esse",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("magni"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "quibusdam": "veritatis",
                                            "ad": "velit",
                                        },
                                    },
                                },
                            },
                            Outcome: shared.SourceSplitResponseOutcomeEnumSourceSplitOutcomeUnknown.ToPointer(),
                            Shards: []shared.SourceSplitShard{
                                shared.SourceSplitShard{
                                    DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "ratione": "fuga",
                                            },
                                            map[string]interface{}{
                                                "aliquid": "facere",
                                                "laboriosam": "sint",
                                            },
                                            map[string]interface{}{
                                                "totam": "alias",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "tenetur": "iure",
                                            "consequatur": "accusamus",
                                            "cum": "occaecati",
                                            "fuga": "ex",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("autem"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "atque": "saepe",
                                            "eum": "molestias",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    StopPosition: &shared.Position{
                        ByteOffset: sdk.String("fuga"),
                        ConcatPosition: &shared.ConcatPosition{
                            Index: sdk.Int(251713),
                            Position: &shared.Position{},
                        },
                        End: sdk.Bool(false),
                        Key: sdk.String("nam"),
                        RecordIndex: sdk.String("totam"),
                        ShufflePosition: sdk.String("ut"),
                    },
                    TotalThrottlerWaitTimeSeconds: sdk.Float64(2497.71),
                    WorkItemID: sdk.String("illum"),
                },
                shared.WorkItemStatus{
                    Completed: sdk.Bool(false),
                    CounterUpdates: []shared.CounterUpdate{
                        shared.CounterUpdate{
                            Boolean: sdk.Bool(false),
                            Cumulative: sdk.Bool(false),
                            Distribution: &shared.DistributionUpdate{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(519799),
                                    LowBits: sdk.Int64(129141),
                                },
                                Histogram: &shared.Histogram{
                                    BucketCounts: []string{
                                        "harum",
                                        "itaque",
                                        "porro",
                                        "ducimus",
                                    },
                                    FirstBucketOffset: sdk.Int(323612),
                                },
                                Max: &shared.SplitInt64{
                                    HighBits: sdk.Int(762034),
                                    LowBits: sdk.Int64(409297),
                                },
                                Min: &shared.SplitInt64{
                                    HighBits: sdk.Int(547140),
                                    LowBits: sdk.Int64(793068),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(421094),
                                    LowBits: sdk.Int64(16303),
                                },
                                SumOfSquares: sdk.Float64(3914.99),
                            },
                            FloatingPoint: sdk.Float64(3328.31),
                            FloatingPointList: &shared.FloatingPointList{
                                Elements: []float64{
                                    3075.94,
                                    3818.37,
                                    5434.52,
                                },
                            },
                            FloatingPointMean: &shared.FloatingPointMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(795080),
                                    LowBits: sdk.Int64(894870),
                                },
                                Sum: sdk.Float64(2073.26),
                            },
                            Integer: &shared.SplitInt64{
                                HighBits: sdk.Int(40516),
                                LowBits: sdk.Int64(271316),
                            },
                            IntegerGauge: &shared.IntegerGauge{
                                Timestamp: sdk.String("quibusdam"),
                                Value: &shared.SplitInt64{
                                    HighBits: sdk.Int(537957),
                                    LowBits: sdk.Int64(557128),
                                },
                            },
                            IntegerList: &shared.IntegerList{
                                Elements: []shared.SplitInt64{
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(587667),
                                        LowBits: sdk.Int64(708811),
                                    },
                                    shared.SplitInt64{
                                        HighBits: sdk.Int(956966),
                                        LowBits: sdk.Int64(533337),
                                    },
                                },
                            },
                            IntegerMean: &shared.IntegerMean{
                                Count: &shared.SplitInt64{
                                    HighBits: sdk.Int(128283),
                                    LowBits: sdk.Int64(86917),
                                },
                                Sum: &shared.SplitInt64{
                                    HighBits: sdk.Int(276643),
                                    LowBits: sdk.Int64(757027),
                                },
                            },
                            Internal: sdk.String("amet"),
                            NameAndKind: &shared.NameAndKind{
                                Kind: shared.NameAndKindKindEnumMax.ToPointer(),
                                Name: sdk.String("May McClure"),
                            },
                            ShortID: sdk.String("cum"),
                            StringList: &shared.StringList{
                                Elements: []string{
                                    "porro",
                                },
                            },
                            StructuredNameAndMetadata: &shared.CounterStructuredNameAndMetadata{
                                Metadata: &shared.CounterMetadata{
                                    Description: sdk.String("vel"),
                                    Kind: shared.CounterMetadataKindEnumAnd.ToPointer(),
                                    OtherUnits: sdk.String("recusandae"),
                                    StandardUnits: shared.CounterMetadataStandardUnitsEnumBytesPerSec.ToPointer(),
                                },
                                Name: &shared.CounterStructuredName{
                                    ComponentStepName: sdk.String("quam"),
                                    ExecutionStepName: sdk.String("fugit"),
                                    InputIndex: sdk.Int(817623),
                                    Name: sdk.String("Justin Franey"),
                                    Origin: shared.CounterStructuredNameOriginEnumUser.ToPointer(),
                                    OriginNamespace: sdk.String("deserunt"),
                                    OriginalRequestingStepName: sdk.String("error"),
                                    OriginalStepName: sdk.String("doloribus"),
                                    Portion: shared.CounterStructuredNamePortionEnumKey.ToPointer(),
                                    WorkerID: sdk.String("rem"),
                                },
                            },
                        },
                    },
                    DynamicSourceSplit: &shared.DynamicSourceSplit{
                        Primary: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "accusantium": "necessitatibus",
                                        "facere": "reprehenderit",
                                        "laborum": "officia",
                                        "soluta": "suscipit",
                                    },
                                    map[string]interface{}{
                                        "recusandae": "unde",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "aspernatur": "ea",
                                    "architecto": "earum",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("cum"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "quod": "veniam",
                                },
                            },
                        },
                        Residual: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "voluptate": "nobis",
                                    },
                                    map[string]interface{}{
                                        "beatae": "cupiditate",
                                        "cupiditate": "ex",
                                    },
                                    map[string]interface{}{
                                        "minima": "expedita",
                                        "modi": "expedita",
                                        "quaerat": "accusantium",
                                    },
                                    map[string]interface{}{
                                        "saepe": "sapiente",
                                        "iusto": "quasi",
                                        "odit": "tempore",
                                        "ducimus": "animi",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "similique": "expedita",
                                    "voluptatem": "adipisci",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("tempora"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "soluta": "inventore",
                                    "ducimus": "vitae",
                                },
                            },
                        },
                    },
                    Errors: []shared.Status{
                        shared.Status{
                            Code: sdk.Int(418265),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "illum": "necessitatibus",
                                    "vero": "facilis",
                                    "necessitatibus": "asperiores",
                                },
                                map[string]interface{}{
                                    "perspiciatis": "quam",
                                    "earum": "velit",
                                    "fugiat": "pariatur",
                                },
                                map[string]interface{}{
                                    "quod": "minus",
                                },
                            },
                            Message: sdk.String("pariatur"),
                        },
                    },
                    MetricUpdates: []shared.MetricUpdate{
                        shared.MetricUpdate{
                            Cumulative: sdk.Bool(false),
                            Distribution: sdk.String("amet"),
                            Gauge: sdk.String("tenetur"),
                            Internal: sdk.String("quasi"),
                            Kind: sdk.String("dicta"),
                            MeanCount: sdk.String("rerum"),
                            MeanSum: sdk.String("neque"),
                            Name: &shared.MetricStructuredName{
                                Context: map[string]string{
                                    "aliquam": "voluptates",
                                    "alias": "voluptatum",
                                    "aut": "officia",
                                    "officia": "vitae",
                                },
                                Name: sdk.String("Hazel Bradtke"),
                                Origin: sdk.String("accusamus"),
                            },
                            Scalar: sdk.String("optio"),
                            Set: sdk.String("odio"),
                            UpdateTime: sdk.String("ullam"),
                        },
                    },
                    Progress: &shared.ApproximateProgress{
                        PercentComplete: sdk.Float32(5927.08),
                        Position: &shared.Position{
                            ByteOffset: sdk.String("officiis"),
                            ConcatPosition: &shared.ConcatPosition{
                                Index: sdk.Int(55536),
                                Position: &shared.Position{},
                            },
                            End: sdk.Bool(false),
                            Key: sdk.String("eos"),
                            RecordIndex: sdk.String("delectus"),
                            ShufflePosition: sdk.String("dolor"),
                        },
                        RemainingTime: sdk.String("dignissimos"),
                    },
                    ReportIndex: sdk.String("doloremque"),
                    ReportedProgress: &shared.ApproximateReportedProgress{
                        ConsumedParallelism: &shared.ReportedParallelism{
                            IsInfinite: sdk.Bool(false),
                            Value: sdk.Float64(1602.7),
                        },
                        FractionConsumed: sdk.Float64(8062.61),
                        Position: &shared.Position{
                            ByteOffset: sdk.String("quis"),
                            ConcatPosition: &shared.ConcatPosition{
                                Index: sdk.Int(767317),
                                Position: &shared.Position{},
                            },
                            End: sdk.Bool(false),
                            Key: sdk.String("laudantium"),
                            RecordIndex: sdk.String("recusandae"),
                            ShufflePosition: sdk.String("odit"),
                        },
                        RemainingParallelism: &shared.ReportedParallelism{
                            IsInfinite: sdk.Bool(false),
                            Value: sdk.Float64(8570.75),
                        },
                    },
                    RequestedLeaseDuration: sdk.String("sequi"),
                    SourceFork: &shared.SourceFork{
                        Primary: &shared.SourceSplitShard{
                            DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "at": "dolorem",
                                        "sunt": "ipsa",
                                        "incidunt": "maiores",
                                    },
                                    map[string]interface{}{
                                        "dolore": "eius",
                                        "iure": "alias",
                                        "molestiae": "rerum",
                                    },
                                    map[string]interface{}{
                                        "sequi": "ducimus",
                                        "minima": "libero",
                                        "ut": "tempora",
                                        "sed": "quas",
                                    },
                                    map[string]interface{}{
                                        "laudantium": "fugit",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "reiciendis": "nulla",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("libero"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "hic": "eum",
                                },
                            },
                        },
                        PrimarySource: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "unde": "consequuntur",
                                        "laboriosam": "iusto",
                                    },
                                    map[string]interface{}{
                                        "dignissimos": "ab",
                                        "quo": "optio",
                                        "voluptatum": "pariatur",
                                        "sequi": "quo",
                                    },
                                    map[string]interface{}{
                                        "labore": "fugit",
                                        "quis": "voluptatum",
                                        "temporibus": "doloremque",
                                        "amet": "ipsam",
                                    },
                                    map[string]interface{}{
                                        "laborum": "quas",
                                        "odit": "placeat",
                                        "rem": "aut",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "repellat": "eveniet",
                                    "odit": "quam",
                                    "ullam": "inventore",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("laborum"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "perferendis": "incidunt",
                                },
                            },
                        },
                        Residual: &shared.SourceSplitShard{
                            DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeIndependent.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "numquam": "numquam",
                                    },
                                    map[string]interface{}{
                                        "repudiandae": "inventore",
                                        "quaerat": "nesciunt",
                                        "hic": "natus",
                                    },
                                    map[string]interface{}{
                                        "quasi": "excepturi",
                                        "distinctio": "cum",
                                    },
                                    map[string]interface{}{
                                        "repellendus": "incidunt",
                                        "aperiam": "vero",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "laborum": "quae",
                                    "quae": "voluptatibus",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("est"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "nesciunt": "autem",
                                    "repudiandae": "commodi",
                                },
                            },
                        },
                        ResidualSource: &shared.DerivedSource{
                            DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                            Source: &shared.Source{
                                BaseSpecs: []map[string]interface{}{
                                    map[string]interface{}{
                                        "explicabo": "velit",
                                        "adipisci": "hic",
                                        "natus": "minima",
                                    },
                                    map[string]interface{}{
                                        "provident": "quibusdam",
                                        "explicabo": "adipisci",
                                        "iusto": "ratione",
                                        "omnis": "quam",
                                    },
                                },
                                Codec: map[string]interface{}{
                                    "iusto": "quas",
                                    "nemo": "facilis",
                                    "exercitationem": "nulla",
                                    "tempore": "magnam",
                                },
                                DoesNotNeedSplitting: sdk.Bool(false),
                                Metadata: &shared.SourceMetadata{
                                    EstimatedSizeBytes: sdk.String("maiores"),
                                    Infinite: sdk.Bool(false),
                                    ProducesSortedKeys: sdk.Bool(false),
                                },
                                Spec: map[string]interface{}{
                                    "aut": "voluptatem",
                                    "vitae": "quos",
                                },
                            },
                        },
                    },
                    SourceOperationResponse: &shared.SourceOperationResponse{
                        GetMetadata: &shared.SourceGetMetadataResponse{
                            Metadata: &shared.SourceMetadata{
                                EstimatedSizeBytes: sdk.String("adipisci"),
                                Infinite: sdk.Bool(false),
                                ProducesSortedKeys: sdk.Bool(false),
                            },
                        },
                        Split: &shared.SourceSplitResponse{
                            Bundles: []shared.DerivedSource{
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeSiblingOfCurrent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "asperiores": "ea",
                                                "voluptate": "aliquid",
                                                "nobis": "reprehenderit",
                                                "consequuntur": "accusantium",
                                            },
                                            map[string]interface{}{
                                                "pariatur": "deserunt",
                                                "facilis": "in",
                                            },
                                            map[string]interface{}{
                                                "voluptatem": "sit",
                                                "enim": "qui",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "ad": "nisi",
                                            "dolore": "in",
                                            "officiis": "fugiat",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("minus"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "sequi": "natus",
                                            "saepe": "quibusdam",
                                        },
                                    },
                                },
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "adipisci": "explicabo",
                                                "eaque": "hic",
                                            },
                                            map[string]interface{}{
                                                "quae": "eos",
                                                "eius": "voluptatem",
                                            },
                                            map[string]interface{}{
                                                "aliquam": "incidunt",
                                                "totam": "iusto",
                                                "mollitia": "porro",
                                                "voluptas": "provident",
                                            },
                                            map[string]interface{}{
                                                "expedita": "excepturi",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "nobis": "nesciunt",
                                            "quidem": "unde",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("fugiat"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "modi": "atque",
                                        },
                                    },
                                },
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "unde": "ad",
                                                "officia": "fuga",
                                            },
                                            map[string]interface{}{
                                                "aspernatur": "asperiores",
                                                "maxime": "dolore",
                                            },
                                            map[string]interface{}{
                                                "corporis": "laboriosam",
                                            },
                                            map[string]interface{}{
                                                "omnis": "tenetur",
                                                "vel": "iste",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "quae": "doloremque",
                                            "voluptas": "pariatur",
                                            "fugit": "inventore",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("odit"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "perspiciatis": "dolore",
                                            "ullam": "aut",
                                        },
                                    },
                                },
                                shared.DerivedSource{
                                    DerivationMode: shared.DerivedSourceDerivationModeEnumSourceDerivationModeChildOfCurrent.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "fugiat": "odio",
                                                "quo": "ipsum",
                                                "cum": "et",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "magnam": "illo",
                                            "atque": "magnam",
                                            "incidunt": "consequatur",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("nisi"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "saepe": "accusantium",
                                        },
                                    },
                                },
                            },
                            Outcome: shared.SourceSplitResponseOutcomeEnumSourceSplitOutcomeUnknown.ToPointer(),
                            Shards: []shared.SourceSplitShard{
                                shared.SourceSplitShard{
                                    DerivationMode: shared.SourceSplitShardDerivationModeEnumSourceDerivationModeUnknown.ToPointer(),
                                    Source: &shared.Source{
                                        BaseSpecs: []map[string]interface{}{
                                            map[string]interface{}{
                                                "perferendis": "qui",
                                                "velit": "repellendus",
                                                "quod": "error",
                                                "ipsa": "beatae",
                                            },
                                        },
                                        Codec: map[string]interface{}{
                                            "veniam": "animi",
                                            "delectus": "pariatur",
                                            "eos": "id",
                                            "commodi": "quo",
                                        },
                                        DoesNotNeedSplitting: sdk.Bool(false),
                                        Metadata: &shared.SourceMetadata{
                                            EstimatedSizeBytes: sdk.String("aliquam"),
                                            Infinite: sdk.Bool(false),
                                            ProducesSortedKeys: sdk.Bool(false),
                                        },
                                        Spec: map[string]interface{}{
                                            "praesentium": "numquam",
                                            "iure": "id",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    StopPosition: &shared.Position{
                        ByteOffset: sdk.String("itaque"),
                        ConcatPosition: &shared.ConcatPosition{
                            Index: sdk.Int(563154),
                            Position: &shared.Position{},
                        },
                        End: sdk.Bool(false),
                        Key: sdk.String("assumenda"),
                        RecordIndex: sdk.String("praesentium"),
                        ShufflePosition: sdk.String("occaecati"),
                    },
                    TotalThrottlerWaitTimeSeconds: sdk.Float64(1772.55),
                    WorkItemID: sdk.String("veniam"),
                },
            },
            WorkerID: sdk.String("amet"),
        },
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("ea"),
        JobID: "consequuntur",
        Key: sdk.String("delectus"),
        Location: "quaerat",
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "excepturi",
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("a"),
    }, operations.DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity{
        Option1: &operations.DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportWorkItemStatusResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsSnapshotsDelete

Deletes a snapshot.

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
    res, err := s.Projects.DataflowProjectsLocationsSnapshotsDelete(ctx, operations.DataflowProjectsLocationsSnapshotsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("ea"),
        Key: sdk.String("exercitationem"),
        Location: "sed",
        OauthToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "dolorem",
        QuotaUser: sdk.String("cumque"),
        SnapshotID: "nesciunt",
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("consectetur"),
    }, operations.DataflowProjectsLocationsSnapshotsDeleteSecurity{
        Option1: &operations.DataflowProjectsLocationsSnapshotsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSnapshotResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsSnapshotsGet

Gets information about a snapshot.

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
    res, err := s.Projects.DataflowProjectsLocationsSnapshotsGet(ctx, operations.DataflowProjectsLocationsSnapshotsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quam"),
        Fields: sdk.String("dignissimos"),
        Key: sdk.String("atque"),
        Location: "animi",
        OauthToken: sdk.String("earum"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quaerat",
        QuotaUser: sdk.String("excepturi"),
        SnapshotID: "ab",
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.DataflowProjectsLocationsSnapshotsGetSecurity{
        Option1: &operations.DataflowProjectsLocationsSnapshotsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Snapshot != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsSnapshotsList

Lists snapshots.

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
    res, err := s.Projects.DataflowProjectsLocationsSnapshotsList(ctx, operations.DataflowProjectsLocationsSnapshotsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("eveniet"),
        JobID: sdk.String("commodi"),
        Key: sdk.String("magni"),
        Location: "et",
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "aut",
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("error"),
    }, operations.DataflowProjectsLocationsSnapshotsListSecurity{
        Option1: &operations.DataflowProjectsLocationsSnapshotsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSnapshotsResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsTemplatesCreate

Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.

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
    res, err := s.Projects.DataflowProjectsLocationsTemplatesCreate(ctx, operations.DataflowProjectsLocationsTemplatesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreateJobFromTemplateRequest: &shared.CreateJobFromTemplateRequest{
            Environment: &shared.RuntimeEnvironment{
                AdditionalExperiments: []string{
                    "dolore",
                },
                AdditionalUserLabels: map[string]string{
                    "id": "ullam",
                    "quibusdam": "recusandae",
                },
                BypassTempDirValidation: sdk.Bool(false),
                EnableStreamingEngine: sdk.Bool(false),
                IPConfiguration: shared.RuntimeEnvironmentIPConfigurationEnumWorkerIPUnspecified.ToPointer(),
                KmsKeyName: sdk.String("omnis"),
                MachineType: sdk.String("mollitia"),
                MaxWorkers: sdk.Int(807822),
                Network: sdk.String("nihil"),
                NumWorkers: sdk.Int(496024),
                ServiceAccountEmail: sdk.String("eaque"),
                Subnetwork: sdk.String("aliquid"),
                TempLocation: sdk.String("ea"),
                WorkerRegion: sdk.String("odio"),
                WorkerZone: sdk.String("voluptatem"),
                Zone: sdk.String("quisquam"),
            },
            GcsPath: sdk.String("delectus"),
            JobName: sdk.String("et"),
            Location: sdk.String("optio"),
            Parameters: map[string]string{
                "quis": "unde",
                "consectetur": "qui",
                "aliquid": "doloremque",
                "enim": "explicabo",
            },
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("ex"),
        Key: sdk.String("ex"),
        Location: "harum",
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "non",
        QuotaUser: sdk.String("quia"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.DataflowProjectsLocationsTemplatesCreateSecurity{
        Option1: &operations.DataflowProjectsLocationsTemplatesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsTemplatesGet

Get the template associated with a template.

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
    res, err := s.Projects.DataflowProjectsLocationsTemplatesGet(ctx, operations.DataflowProjectsLocationsTemplatesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("omnis"),
        GcsPath: sdk.String("dolorum"),
        Key: sdk.String("qui"),
        Location: "nulla",
        OauthToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "amet",
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("odio"),
        View: operations.DataflowProjectsLocationsTemplatesGetViewEnumMetadataOnly.ToPointer(),
    }, operations.DataflowProjectsLocationsTemplatesGetSecurity{
        Option1: &operations.DataflowProjectsLocationsTemplatesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTemplateResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsTemplatesLaunch

Launch a template.

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
    res, err := s.Projects.DataflowProjectsLocationsTemplatesLaunch(ctx, operations.DataflowProjectsLocationsTemplatesLaunchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LaunchTemplateParameters: &shared.LaunchTemplateParameters{
            Environment: &shared.RuntimeEnvironment{
                AdditionalExperiments: []string{
                    "error",
                    "velit",
                    "earum",
                    "recusandae",
                },
                AdditionalUserLabels: map[string]string{
                    "impedit": "reiciendis",
                    "ad": "perspiciatis",
                },
                BypassTempDirValidation: sdk.Bool(false),
                EnableStreamingEngine: sdk.Bool(false),
                IPConfiguration: shared.RuntimeEnvironmentIPConfigurationEnumWorkerIPPrivate.ToPointer(),
                KmsKeyName: sdk.String("dolorem"),
                MachineType: sdk.String("ipsam"),
                MaxWorkers: sdk.Int(529529),
                Network: sdk.String("dolorum"),
                NumWorkers: sdk.Int(640046),
                ServiceAccountEmail: sdk.String("earum"),
                Subnetwork: sdk.String("est"),
                TempLocation: sdk.String("quisquam"),
                WorkerRegion: sdk.String("officia"),
                WorkerZone: sdk.String("officiis"),
                Zone: sdk.String("ratione"),
            },
            JobName: sdk.String("consequuntur"),
            Parameters: map[string]string{
                "deserunt": "adipisci",
            },
            TransformNameMapping: map[string]string{
                "tempore": "maiores",
            },
            Update: sdk.Bool(false),
        },
        AccessToken: sdk.String("ducimus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laborum"),
        DynamicTemplateGcsPath: sdk.String("architecto"),
        DynamicTemplateStagingLocation: sdk.String("quod"),
        Fields: sdk.String("minus"),
        GcsPath: sdk.String("molestias"),
        Key: sdk.String("quam"),
        Location: "nihil",
        OauthToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "ex",
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("accusantium"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DataflowProjectsLocationsTemplatesLaunchSecurity{
        Option1: &operations.DataflowProjectsLocationsTemplatesLaunchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LaunchTemplateResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsLocationsWorkerMessages

Send a worker_message to the service.

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
    res, err := s.Projects.DataflowProjectsLocationsWorkerMessages(ctx, operations.DataflowProjectsLocationsWorkerMessagesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SendWorkerMessagesRequest: &shared.SendWorkerMessagesRequest{
            Location: sdk.String("minus"),
            WorkerMessages: []shared.WorkerMessage{
                shared.WorkerMessage{
                    Labels: map[string]string{
                        "voluptates": "alias",
                        "placeat": "in",
                        "possimus": "iste",
                    },
                    Time: sdk.String("assumenda"),
                    WorkerHealthReport: &shared.WorkerHealthReport{
                        Msg: sdk.String("neque"),
                        Pods: []map[string]interface{}{
                            map[string]interface{}{
                                "repellat": "quae",
                            },
                        },
                        ReportInterval: sdk.String("animi"),
                        VMBrokenCode: sdk.String("est"),
                        VMIsBroken: sdk.Bool(false),
                        VMIsHealthy: sdk.Bool(false),
                        VMStartupTime: sdk.String("autem"),
                    },
                    WorkerLifecycleEvent: &shared.WorkerLifecycleEvent{
                        ContainerStartTime: sdk.String("sequi"),
                        Event: shared.WorkerLifecycleEventEventEnumSDKInstallFinish.ToPointer(),
                        Metadata: map[string]string{
                            "occaecati": "optio",
                            "asperiores": "et",
                            "nobis": "quas",
                            "nemo": "commodi",
                        },
                    },
                    WorkerMessageCode: &shared.WorkerMessageCode{
                        Code: sdk.String("soluta"),
                        Parameters: map[string]interface{}{
                            "libero": "id",
                            "quaerat": "inventore",
                            "accusamus": "maiores",
                            "odit": "numquam",
                        },
                    },
                    WorkerMetrics: &shared.ResourceUtilizationReport{
                        Containers: map[string]shared.ResourceUtilizationReport{
                            "numquam": shared.ResourceUtilizationReport{},
                            "culpa": shared.ResourceUtilizationReport{},
                        },
                        CPUTime: []shared.CPUTime{
                            shared.CPUTime{
                                Rate: sdk.Float64(4791.39),
                                Timestamp: sdk.String("voluptatibus"),
                                TotalMs: sdk.String("dolorum"),
                            },
                            shared.CPUTime{
                                Rate: sdk.Float64(8037.82),
                                Timestamp: sdk.String("repellat"),
                                TotalMs: sdk.String("veritatis"),
                            },
                        },
                        MemoryInfo: []shared.MemInfo{
                            shared.MemInfo{
                                CurrentLimitBytes: sdk.String("autem"),
                                CurrentOoms: sdk.String("optio"),
                                CurrentRssBytes: sdk.String("fugiat"),
                                Timestamp: sdk.String("facere"),
                                TotalGbMs: sdk.String("exercitationem"),
                            },
                        },
                    },
                    WorkerShutdownNotice: &shared.WorkerShutdownNotice{
                        Reason: sdk.String("ut"),
                    },
                    WorkerThreadScalingReport: &shared.WorkerThreadScalingReport{
                        CurrentThreadCount: sdk.Int(291414),
                    },
                },
                shared.WorkerMessage{
                    Labels: map[string]string{
                        "officia": "reprehenderit",
                        "nemo": "nisi",
                    },
                    Time: sdk.String("consequuntur"),
                    WorkerHealthReport: &shared.WorkerHealthReport{
                        Msg: sdk.String("praesentium"),
                        Pods: []map[string]interface{}{
                            map[string]interface{}{
                                "placeat": "dignissimos",
                            },
                            map[string]interface{}{
                                "placeat": "natus",
                                "accusamus": "repellat",
                                "est": "doloribus",
                                "labore": "adipisci",
                            },
                        },
                        ReportInterval: sdk.String("at"),
                        VMBrokenCode: sdk.String("impedit"),
                        VMIsBroken: sdk.Bool(false),
                        VMIsHealthy: sdk.Bool(false),
                        VMStartupTime: sdk.String("autem"),
                    },
                    WorkerLifecycleEvent: &shared.WorkerLifecycleEvent{
                        ContainerStartTime: sdk.String("qui"),
                        Event: shared.WorkerLifecycleEventEventEnumOsStart.ToPointer(),
                        Metadata: map[string]string{
                            "aspernatur": "consequatur",
                            "delectus": "nesciunt",
                        },
                    },
                    WorkerMessageCode: &shared.WorkerMessageCode{
                        Code: sdk.String("et"),
                        Parameters: map[string]interface{}{
                            "voluptatum": "doloribus",
                        },
                    },
                    WorkerMetrics: &shared.ResourceUtilizationReport{
                        Containers: map[string]shared.ResourceUtilizationReport{
                            "doloremque": shared.ResourceUtilizationReport{},
                        },
                        CPUTime: []shared.CPUTime{
                            shared.CPUTime{
                                Rate: sdk.Float64(9458.52),
                                Timestamp: sdk.String("sequi"),
                                TotalMs: sdk.String("temporibus"),
                            },
                            shared.CPUTime{
                                Rate: sdk.Float64(7364.8),
                                Timestamp: sdk.String("sit"),
                                TotalMs: sdk.String("magni"),
                            },
                            shared.CPUTime{
                                Rate: sdk.Float64(1367.32),
                                Timestamp: sdk.String("earum"),
                                TotalMs: sdk.String("similique"),
                            },
                            shared.CPUTime{
                                Rate: sdk.Float64(6633.25),
                                Timestamp: sdk.String("exercitationem"),
                                TotalMs: sdk.String("commodi"),
                            },
                        },
                        MemoryInfo: []shared.MemInfo{
                            shared.MemInfo{
                                CurrentLimitBytes: sdk.String("delectus"),
                                CurrentOoms: sdk.String("quidem"),
                                CurrentRssBytes: sdk.String("rem"),
                                Timestamp: sdk.String("repellat"),
                                TotalGbMs: sdk.String("suscipit"),
                            },
                            shared.MemInfo{
                                CurrentLimitBytes: sdk.String("veniam"),
                                CurrentOoms: sdk.String("consequuntur"),
                                CurrentRssBytes: sdk.String("repudiandae"),
                                Timestamp: sdk.String("nam"),
                                TotalGbMs: sdk.String("libero"),
                            },
                        },
                    },
                    WorkerShutdownNotice: &shared.WorkerShutdownNotice{
                        Reason: sdk.String("perspiciatis"),
                    },
                    WorkerThreadScalingReport: &shared.WorkerThreadScalingReport{
                        CurrentThreadCount: sdk.Int(846990),
                    },
                },
                shared.WorkerMessage{
                    Labels: map[string]string{
                        "praesentium": "non",
                    },
                    Time: sdk.String("deleniti"),
                    WorkerHealthReport: &shared.WorkerHealthReport{
                        Msg: sdk.String("dolor"),
                        Pods: []map[string]interface{}{
                            map[string]interface{}{
                                "molestias": "aperiam",
                                "fugit": "labore",
                            },
                            map[string]interface{}{
                                "cum": "sed",
                            },
                            map[string]interface{}{
                                "ratione": "facere",
                                "est": "soluta",
                                "neque": "perferendis",
                            },
                        },
                        ReportInterval: sdk.String("vero"),
                        VMBrokenCode: sdk.String("excepturi"),
                        VMIsBroken: sdk.Bool(false),
                        VMIsHealthy: sdk.Bool(false),
                        VMStartupTime: sdk.String("dicta"),
                    },
                    WorkerLifecycleEvent: &shared.WorkerLifecycleEvent{
                        ContainerStartTime: sdk.String("iure"),
                        Event: shared.WorkerLifecycleEventEventEnumSDKInstallFinish.ToPointer(),
                        Metadata: map[string]string{
                            "alias": "asperiores",
                            "quibusdam": "animi",
                        },
                    },
                    WorkerMessageCode: &shared.WorkerMessageCode{
                        Code: sdk.String("alias"),
                        Parameters: map[string]interface{}{
                            "porro": "voluptatum",
                            "libero": "quasi",
                        },
                    },
                    WorkerMetrics: &shared.ResourceUtilizationReport{
                        Containers: map[string]shared.ResourceUtilizationReport{
                            "soluta": shared.ResourceUtilizationReport{},
                            "exercitationem": shared.ResourceUtilizationReport{},
                            "exercitationem": shared.ResourceUtilizationReport{},
                        },
                        CPUTime: []shared.CPUTime{
                            shared.CPUTime{
                                Rate: sdk.Float64(1688.83),
                                Timestamp: sdk.String("unde"),
                                TotalMs: sdk.String("consequuntur"),
                            },
                            shared.CPUTime{
                                Rate: sdk.Float64(7395.38),
                                Timestamp: sdk.String("aut"),
                                TotalMs: sdk.String("expedita"),
                            },
                            shared.CPUTime{
                                Rate: sdk.Float64(7778.81),
                                Timestamp: sdk.String("non"),
                                TotalMs: sdk.String("libero"),
                            },
                        },
                        MemoryInfo: []shared.MemInfo{
                            shared.MemInfo{
                                CurrentLimitBytes: sdk.String("odio"),
                                CurrentOoms: sdk.String("quaerat"),
                                CurrentRssBytes: sdk.String("aliquam"),
                                Timestamp: sdk.String("laboriosam"),
                                TotalGbMs: sdk.String("nisi"),
                            },
                            shared.MemInfo{
                                CurrentLimitBytes: sdk.String("labore"),
                                CurrentOoms: sdk.String("accusamus"),
                                CurrentRssBytes: sdk.String("cum"),
                                Timestamp: sdk.String("sunt"),
                                TotalGbMs: sdk.String("repellendus"),
                            },
                            shared.MemInfo{
                                CurrentLimitBytes: sdk.String("voluptatem"),
                                CurrentOoms: sdk.String("non"),
                                CurrentRssBytes: sdk.String("ipsum"),
                                Timestamp: sdk.String("laudantium"),
                                TotalGbMs: sdk.String("totam"),
                            },
                        },
                    },
                    WorkerShutdownNotice: &shared.WorkerShutdownNotice{
                        Reason: sdk.String("facilis"),
                    },
                    WorkerThreadScalingReport: &shared.WorkerThreadScalingReport{
                        CurrentThreadCount: sdk.Int(7682),
                    },
                },
                shared.WorkerMessage{
                    Labels: map[string]string{
                        "architecto": "libero",
                        "rerum": "architecto",
                        "in": "fuga",
                        "tenetur": "saepe",
                    },
                    Time: sdk.String("eveniet"),
                    WorkerHealthReport: &shared.WorkerHealthReport{
                        Msg: sdk.String("reprehenderit"),
                        Pods: []map[string]interface{}{
                            map[string]interface{}{
                                "voluptas": "delectus",
                                "repudiandae": "quidem",
                                "occaecati": "labore",
                            },
                            map[string]interface{}{
                                "voluptate": "quod",
                                "nihil": "recusandae",
                            },
                        },
                        ReportInterval: sdk.String("illum"),
                        VMBrokenCode: sdk.String("laborum"),
                        VMIsBroken: sdk.Bool(false),
                        VMIsHealthy: sdk.Bool(false),
                        VMStartupTime: sdk.String("reiciendis"),
                    },
                    WorkerLifecycleEvent: &shared.WorkerLifecycleEvent{
                        ContainerStartTime: sdk.String("consectetur"),
                        Event: shared.WorkerLifecycleEventEventEnumStagingFilesDownloadStart.ToPointer(),
                        Metadata: map[string]string{
                            "illo": "autem",
                            "tenetur": "rerum",
                            "asperiores": "odio",
                            "nisi": "hic",
                        },
                    },
                    WorkerMessageCode: &shared.WorkerMessageCode{
                        Code: sdk.String("assumenda"),
                        Parameters: map[string]interface{}{
                            "eum": "quia",
                        },
                    },
                    WorkerMetrics: &shared.ResourceUtilizationReport{
                        Containers: map[string]shared.ResourceUtilizationReport{
                            "sequi": shared.ResourceUtilizationReport{},
                            "doloremque": shared.ResourceUtilizationReport{},
                            "dolor": shared.ResourceUtilizationReport{},
                        },
                        CPUTime: []shared.CPUTime{
                            shared.CPUTime{
                                Rate: sdk.Float64(2354.27),
                                Timestamp: sdk.String("aperiam"),
                                TotalMs: sdk.String("sed"),
                            },
                            shared.CPUTime{
                                Rate: sdk.Float64(2200.71),
                                Timestamp: sdk.String("quidem"),
                                TotalMs: sdk.String("excepturi"),
                            },
                            shared.CPUTime{
                                Rate: sdk.Float64(2181.55),
                                Timestamp: sdk.String("accusamus"),
                                TotalMs: sdk.String("consectetur"),
                            },
                            shared.CPUTime{
                                Rate: sdk.Float64(2724.93),
                                Timestamp: sdk.String("sequi"),
                                TotalMs: sdk.String("et"),
                            },
                        },
                        MemoryInfo: []shared.MemInfo{
                            shared.MemInfo{
                                CurrentLimitBytes: sdk.String("placeat"),
                                CurrentOoms: sdk.String("sapiente"),
                                CurrentRssBytes: sdk.String("corporis"),
                                Timestamp: sdk.String("nemo"),
                                TotalGbMs: sdk.String("soluta"),
                            },
                            shared.MemInfo{
                                CurrentLimitBytes: sdk.String("magnam"),
                                CurrentOoms: sdk.String("sequi"),
                                CurrentRssBytes: sdk.String("ab"),
                                Timestamp: sdk.String("consectetur"),
                                TotalGbMs: sdk.String("ullam"),
                            },
                        },
                    },
                    WorkerShutdownNotice: &shared.WorkerShutdownNotice{
                        Reason: sdk.String("ullam"),
                    },
                    WorkerThreadScalingReport: &shared.WorkerThreadScalingReport{
                        CurrentThreadCount: sdk.Int(232196),
                    },
                },
            },
        },
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("earum"),
        Fields: sdk.String("vitae"),
        Key: sdk.String("quisquam"),
        Location: "fugit",
        OauthToken: sdk.String("consequatur"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "incidunt",
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.DataflowProjectsLocationsWorkerMessagesSecurity{
        Option1: &operations.DataflowProjectsLocationsWorkerMessagesSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendWorkerMessagesResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsSnapshotsGet

Gets information about a snapshot.

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
    res, err := s.Projects.DataflowProjectsSnapshotsGet(ctx, operations.DataflowProjectsSnapshotsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("voluptatem"),
        Location: sdk.String("labore"),
        OauthToken: sdk.String("maxime"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "ad",
        QuotaUser: sdk.String("illo"),
        SnapshotID: "provident",
        UploadType: sdk.String("exercitationem"),
        UploadProtocol: sdk.String("cum"),
    }, operations.DataflowProjectsSnapshotsGetSecurity{
        Option1: &operations.DataflowProjectsSnapshotsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Snapshot != nil {
        // handle response
    }
}
```

## DataflowProjectsSnapshotsList

Lists snapshots.

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
    res, err := s.Projects.DataflowProjectsSnapshotsList(ctx, operations.DataflowProjectsSnapshotsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("optio"),
        JobID: sdk.String("officiis"),
        Key: sdk.String("voluptatibus"),
        Location: sdk.String("mollitia"),
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "deleniti",
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("voluptates"),
    }, operations.DataflowProjectsSnapshotsListSecurity{
        Option1: &operations.DataflowProjectsSnapshotsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSnapshotsResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsTemplatesCreate

Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.

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
    res, err := s.Projects.DataflowProjectsTemplatesCreate(ctx, operations.DataflowProjectsTemplatesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreateJobFromTemplateRequest: &shared.CreateJobFromTemplateRequest{
            Environment: &shared.RuntimeEnvironment{
                AdditionalExperiments: []string{
                    "nesciunt",
                    "libero",
                    "error",
                    "perferendis",
                },
                AdditionalUserLabels: map[string]string{
                    "saepe": "voluptatem",
                },
                BypassTempDirValidation: sdk.Bool(false),
                EnableStreamingEngine: sdk.Bool(false),
                IPConfiguration: shared.RuntimeEnvironmentIPConfigurationEnumWorkerIPPublic.ToPointer(),
                KmsKeyName: sdk.String("corporis"),
                MachineType: sdk.String("explicabo"),
                MaxWorkers: sdk.Int(718859),
                Network: sdk.String("harum"),
                NumWorkers: sdk.Int(693250),
                ServiceAccountEmail: sdk.String("tempora"),
                Subnetwork: sdk.String("minus"),
                TempLocation: sdk.String("harum"),
                WorkerRegion: sdk.String("quidem"),
                WorkerZone: sdk.String("inventore"),
                Zone: sdk.String("iste"),
            },
            GcsPath: sdk.String("voluptatibus"),
            JobName: sdk.String("odio"),
            Location: sdk.String("ab"),
            Parameters: map[string]string{
                "pariatur": "excepturi",
            },
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("sunt"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "impedit",
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("corrupti"),
    }, operations.DataflowProjectsTemplatesCreateSecurity{
        Option1: &operations.DataflowProjectsTemplatesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## DataflowProjectsTemplatesGet

Get the template associated with a template.

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
    res, err := s.Projects.DataflowProjectsTemplatesGet(ctx, operations.DataflowProjectsTemplatesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("eveniet"),
        GcsPath: sdk.String("vitae"),
        Key: sdk.String("quos"),
        Location: sdk.String("eveniet"),
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "perspiciatis",
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("veniam"),
        View: operations.DataflowProjectsTemplatesGetViewEnumMetadataOnly.ToPointer(),
    }, operations.DataflowProjectsTemplatesGetSecurity{
        Option1: &operations.DataflowProjectsTemplatesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTemplateResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsTemplatesLaunch

Launch a template.

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
    res, err := s.Projects.DataflowProjectsTemplatesLaunch(ctx, operations.DataflowProjectsTemplatesLaunchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LaunchTemplateParameters: &shared.LaunchTemplateParameters{
            Environment: &shared.RuntimeEnvironment{
                AdditionalExperiments: []string{
                    "deleniti",
                },
                AdditionalUserLabels: map[string]string{
                    "fugit": "optio",
                    "quo": "minima",
                    "ducimus": "tenetur",
                    "libero": "repellendus",
                },
                BypassTempDirValidation: sdk.Bool(false),
                EnableStreamingEngine: sdk.Bool(false),
                IPConfiguration: shared.RuntimeEnvironmentIPConfigurationEnumWorkerIPPublic.ToPointer(),
                KmsKeyName: sdk.String("alias"),
                MachineType: sdk.String("rerum"),
                MaxWorkers: sdk.Int(105669),
                Network: sdk.String("fuga"),
                NumWorkers: sdk.Int(464541),
                ServiceAccountEmail: sdk.String("molestias"),
                Subnetwork: sdk.String("eveniet"),
                TempLocation: sdk.String("quibusdam"),
                WorkerRegion: sdk.String("eos"),
                WorkerZone: sdk.String("cupiditate"),
                Zone: sdk.String("est"),
            },
            JobName: sdk.String("occaecati"),
            Parameters: map[string]string{
                "quaerat": "itaque",
                "itaque": "animi",
                "totam": "ullam",
                "nisi": "nemo",
            },
            TransformNameMapping: map[string]string{
                "optio": "fugit",
                "at": "modi",
                "delectus": "aliquam",
            },
            Update: sdk.Bool(false),
        },
        AccessToken: sdk.String("optio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quas"),
        DynamicTemplateGcsPath: sdk.String("quidem"),
        DynamicTemplateStagingLocation: sdk.String("voluptates"),
        Fields: sdk.String("labore"),
        GcsPath: sdk.String("hic"),
        Key: sdk.String("aspernatur"),
        Location: sdk.String("nihil"),
        OauthToken: sdk.String("quas"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "tenetur",
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("unde"),
        UploadProtocol: sdk.String("autem"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DataflowProjectsTemplatesLaunchSecurity{
        Option1: &operations.DataflowProjectsTemplatesLaunchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LaunchTemplateResponse != nil {
        // handle response
    }
}
```

## DataflowProjectsWorkerMessages

Send a worker_message to the service.

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
    res, err := s.Projects.DataflowProjectsWorkerMessages(ctx, operations.DataflowProjectsWorkerMessagesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SendWorkerMessagesRequest: &shared.SendWorkerMessagesRequest{
            Location: sdk.String("molestiae"),
            WorkerMessages: []shared.WorkerMessage{
                shared.WorkerMessage{
                    Labels: map[string]string{
                        "autem": "placeat",
                        "corporis": "dicta",
                    },
                    Time: sdk.String("possimus"),
                    WorkerHealthReport: &shared.WorkerHealthReport{
                        Msg: sdk.String("dolores"),
                        Pods: []map[string]interface{}{
                            map[string]interface{}{
                                "id": "fuga",
                                "ad": "corrupti",
                                "temporibus": "minus",
                                "voluptates": "repellat",
                            },
                            map[string]interface{}{
                                "ratione": "quaerat",
                            },
                            map[string]interface{}{
                                "natus": "nostrum",
                                "veniam": "tempore",
                                "natus": "facilis",
                                "assumenda": "repellat",
                            },
                            map[string]interface{}{
                                "vitae": "error",
                            },
                        },
                        ReportInterval: sdk.String("alias"),
                        VMBrokenCode: sdk.String("id"),
                        VMIsBroken: sdk.Bool(false),
                        VMIsHealthy: sdk.Bool(false),
                        VMStartupTime: sdk.String("nobis"),
                    },
                    WorkerLifecycleEvent: &shared.WorkerLifecycleEvent{
                        ContainerStartTime: sdk.String("vero"),
                        Event: shared.WorkerLifecycleEventEventEnumStagingFilesDownloadStart.ToPointer(),
                        Metadata: map[string]string{
                            "harum": "quisquam",
                            "eligendi": "magni",
                            "dignissimos": "aspernatur",
                        },
                    },
                    WorkerMessageCode: &shared.WorkerMessageCode{
                        Code: sdk.String("ullam"),
                        Parameters: map[string]interface{}{
                            "impedit": "magni",
                            "suscipit": "ipsam",
                            "error": "quisquam",
                            "debitis": "ipsa",
                        },
                    },
                    WorkerMetrics: &shared.ResourceUtilizationReport{
                        Containers: map[string]shared.ResourceUtilizationReport{
                            "totam": shared.ResourceUtilizationReport{},
                        },
                        CPUTime: []shared.CPUTime{
                            shared.CPUTime{
                                Rate: sdk.Float64(5459.03),
                                Timestamp: sdk.String("numquam"),
                                TotalMs: sdk.String("alias"),
                            },
                        },
                        MemoryInfo: []shared.MemInfo{
                            shared.MemInfo{
                                CurrentLimitBytes: sdk.String("nisi"),
                                CurrentOoms: sdk.String("excepturi"),
                                CurrentRssBytes: sdk.String("eveniet"),
                                Timestamp: sdk.String("tenetur"),
                                TotalGbMs: sdk.String("vel"),
                            },
                            shared.MemInfo{
                                CurrentLimitBytes: sdk.String("corrupti"),
                                CurrentOoms: sdk.String("voluptates"),
                                CurrentRssBytes: sdk.String("modi"),
                                Timestamp: sdk.String("enim"),
                                TotalGbMs: sdk.String("cumque"),
                            },
                            shared.MemInfo{
                                CurrentLimitBytes: sdk.String("blanditiis"),
                                CurrentOoms: sdk.String("animi"),
                                CurrentRssBytes: sdk.String("quibusdam"),
                                Timestamp: sdk.String("possimus"),
                                TotalGbMs: sdk.String("maiores"),
                            },
                            shared.MemInfo{
                                CurrentLimitBytes: sdk.String("est"),
                                CurrentOoms: sdk.String("optio"),
                                CurrentRssBytes: sdk.String("voluptate"),
                                Timestamp: sdk.String("nostrum"),
                                TotalGbMs: sdk.String("incidunt"),
                            },
                        },
                    },
                    WorkerShutdownNotice: &shared.WorkerShutdownNotice{
                        Reason: sdk.String("enim"),
                    },
                    WorkerThreadScalingReport: &shared.WorkerThreadScalingReport{
                        CurrentThreadCount: sdk.Int(55600),
                    },
                },
                shared.WorkerMessage{
                    Labels: map[string]string{
                        "quaerat": "nesciunt",
                    },
                    Time: sdk.String("aperiam"),
                    WorkerHealthReport: &shared.WorkerHealthReport{
                        Msg: sdk.String("optio"),
                        Pods: []map[string]interface{}{
                            map[string]interface{}{
                                "amet": "quia",
                                "facilis": "magnam",
                            },
                            map[string]interface{}{
                                "provident": "inventore",
                            },
                        },
                        ReportInterval: sdk.String("sapiente"),
                        VMBrokenCode: sdk.String("temporibus"),
                        VMIsBroken: sdk.Bool(false),
                        VMIsHealthy: sdk.Bool(false),
                        VMStartupTime: sdk.String("sapiente"),
                    },
                    WorkerLifecycleEvent: &shared.WorkerLifecycleEvent{
                        ContainerStartTime: sdk.String("ipsa"),
                        Event: shared.WorkerLifecycleEventEventEnumUnknownEvent.ToPointer(),
                        Metadata: map[string]string{
                            "adipisci": "itaque",
                            "unde": "beatae",
                            "eveniet": "quas",
                            "maiores": "voluptate",
                        },
                    },
                    WorkerMessageCode: &shared.WorkerMessageCode{
                        Code: sdk.String("libero"),
                        Parameters: map[string]interface{}{
                            "ea": "error",
                            "at": "incidunt",
                            "autem": "alias",
                            "est": "iusto",
                        },
                    },
                    WorkerMetrics: &shared.ResourceUtilizationReport{
                        Containers: map[string]shared.ResourceUtilizationReport{
                            "debitis": shared.ResourceUtilizationReport{},
                            "quo": shared.ResourceUtilizationReport{},
                        },
                        CPUTime: []shared.CPUTime{
                            shared.CPUTime{
                                Rate: sdk.Float64(7355.86),
                                Timestamp: sdk.String("sunt"),
                                TotalMs: sdk.String("nisi"),
                            },
                            shared.CPUTime{
                                Rate: sdk.Float64(8606.77),
                                Timestamp: sdk.String("architecto"),
                                TotalMs: sdk.String("accusantium"),
                            },
                            shared.CPUTime{
                                Rate: sdk.Float64(9517.68),
                                Timestamp: sdk.String("et"),
                                TotalMs: sdk.String("repudiandae"),
                            },
                            shared.CPUTime{
                                Rate: sdk.Float64(9662.21),
                                Timestamp: sdk.String("qui"),
                                TotalMs: sdk.String("laboriosam"),
                            },
                        },
                        MemoryInfo: []shared.MemInfo{
                            shared.MemInfo{
                                CurrentLimitBytes: sdk.String("ab"),
                                CurrentOoms: sdk.String("quisquam"),
                                CurrentRssBytes: sdk.String("nihil"),
                                Timestamp: sdk.String("quisquam"),
                                TotalGbMs: sdk.String("aperiam"),
                            },
                        },
                    },
                    WorkerShutdownNotice: &shared.WorkerShutdownNotice{
                        Reason: sdk.String("delectus"),
                    },
                    WorkerThreadScalingReport: &shared.WorkerThreadScalingReport{
                        CurrentThreadCount: sdk.Int(16370),
                    },
                },
                shared.WorkerMessage{
                    Labels: map[string]string{
                        "molestias": "ducimus",
                        "dolorem": "sapiente",
                        "error": "facere",
                        "veniam": "eligendi",
                    },
                    Time: sdk.String("aspernatur"),
                    WorkerHealthReport: &shared.WorkerHealthReport{
                        Msg: sdk.String("nemo"),
                        Pods: []map[string]interface{}{
                            map[string]interface{}{
                                "non": "repudiandae",
                                "quae": "tempore",
                                "incidunt": "deserunt",
                                "non": "officia",
                            },
                            map[string]interface{}{
                                "quia": "ullam",
                                "dolor": "maxime",
                            },
                            map[string]interface{}{
                                "ipsa": "consequuntur",
                            },
                            map[string]interface{}{
                                "molestiae": "architecto",
                                "ab": "maiores",
                            },
                        },
                        ReportInterval: sdk.String("labore"),
                        VMBrokenCode: sdk.String("fugit"),
                        VMIsBroken: sdk.Bool(false),
                        VMIsHealthy: sdk.Bool(false),
                        VMStartupTime: sdk.String("maxime"),
                    },
                    WorkerLifecycleEvent: &shared.WorkerLifecycleEvent{
                        ContainerStartTime: sdk.String("iusto"),
                        Event: shared.WorkerLifecycleEventEventEnumSDKInstallFinish.ToPointer(),
                        Metadata: map[string]string{
                            "pariatur": "porro",
                            "enim": "tempora",
                        },
                    },
                    WorkerMessageCode: &shared.WorkerMessageCode{
                        Code: sdk.String("voluptatum"),
                        Parameters: map[string]interface{}{
                            "itaque": "sit",
                            "excepturi": "recusandae",
                            "numquam": "architecto",
                        },
                    },
                    WorkerMetrics: &shared.ResourceUtilizationReport{
                        Containers: map[string]shared.ResourceUtilizationReport{
                            "iusto": shared.ResourceUtilizationReport{},
                            "culpa": shared.ResourceUtilizationReport{},
                            "dolores": shared.ResourceUtilizationReport{},
                        },
                        CPUTime: []shared.CPUTime{
                            shared.CPUTime{
                                Rate: sdk.Float64(3686.17),
                                Timestamp: sdk.String("impedit"),
                                TotalMs: sdk.String("officia"),
                            },
                        },
                        MemoryInfo: []shared.MemInfo{
                            shared.MemInfo{
                                CurrentLimitBytes: sdk.String("odit"),
                                CurrentOoms: sdk.String("similique"),
                                CurrentRssBytes: sdk.String("labore"),
                                Timestamp: sdk.String("harum"),
                                TotalGbMs: sdk.String("dolorum"),
                            },
                        },
                    },
                    WorkerShutdownNotice: &shared.WorkerShutdownNotice{
                        Reason: sdk.String("provident"),
                    },
                    WorkerThreadScalingReport: &shared.WorkerThreadScalingReport{
                        CurrentThreadCount: sdk.Int(844545),
                    },
                },
                shared.WorkerMessage{
                    Labels: map[string]string{
                        "provident": "omnis",
                        "rem": "quos",
                    },
                    Time: sdk.String("beatae"),
                    WorkerHealthReport: &shared.WorkerHealthReport{
                        Msg: sdk.String("perspiciatis"),
                        Pods: []map[string]interface{}{
                            map[string]interface{}{
                                "sapiente": "assumenda",
                                "alias": "eligendi",
                                "odio": "iusto",
                                "eligendi": "ullam",
                            },
                        },
                        ReportInterval: sdk.String("dolorem"),
                        VMBrokenCode: sdk.String("vero"),
                        VMIsBroken: sdk.Bool(false),
                        VMIsHealthy: sdk.Bool(false),
                        VMStartupTime: sdk.String("esse"),
                    },
                    WorkerLifecycleEvent: &shared.WorkerLifecycleEvent{
                        ContainerStartTime: sdk.String("vero"),
                        Event: shared.WorkerLifecycleEventEventEnumNetworkUp.ToPointer(),
                        Metadata: map[string]string{
                            "eius": "accusamus",
                            "vero": "nisi",
                            "recusandae": "deleniti",
                            "nobis": "excepturi",
                        },
                    },
                    WorkerMessageCode: &shared.WorkerMessageCode{
                        Code: sdk.String("consequatur"),
                        Parameters: map[string]interface{}{
                            "similique": "porro",
                            "consectetur": "molestias",
                            "modi": "saepe",
                        },
                    },
                    WorkerMetrics: &shared.ResourceUtilizationReport{
                        Containers: map[string]shared.ResourceUtilizationReport{
                            "dolor": shared.ResourceUtilizationReport{},
                        },
                        CPUTime: []shared.CPUTime{
                            shared.CPUTime{
                                Rate: sdk.Float64(4086.78),
                                Timestamp: sdk.String("in"),
                                TotalMs: sdk.String("ipsa"),
                            },
                            shared.CPUTime{
                                Rate: sdk.Float64(1935.64),
                                Timestamp: sdk.String("maiores"),
                                TotalMs: sdk.String("itaque"),
                            },
                            shared.CPUTime{
                                Rate: sdk.Float64(8013.25),
                                Timestamp: sdk.String("adipisci"),
                                TotalMs: sdk.String("sunt"),
                            },
                        },
                        MemoryInfo: []shared.MemInfo{
                            shared.MemInfo{
                                CurrentLimitBytes: sdk.String("veniam"),
                                CurrentOoms: sdk.String("sit"),
                                CurrentRssBytes: sdk.String("deleniti"),
                                Timestamp: sdk.String("qui"),
                                TotalGbMs: sdk.String("dolore"),
                            },
                            shared.MemInfo{
                                CurrentLimitBytes: sdk.String("possimus"),
                                CurrentOoms: sdk.String("dicta"),
                                CurrentRssBytes: sdk.String("deleniti"),
                                Timestamp: sdk.String("perspiciatis"),
                                TotalGbMs: sdk.String("deserunt"),
                            },
                            shared.MemInfo{
                                CurrentLimitBytes: sdk.String("dolor"),
                                CurrentOoms: sdk.String("eum"),
                                CurrentRssBytes: sdk.String("culpa"),
                                Timestamp: sdk.String("iure"),
                                TotalGbMs: sdk.String("harum"),
                            },
                            shared.MemInfo{
                                CurrentLimitBytes: sdk.String("sunt"),
                                CurrentOoms: sdk.String("facere"),
                                CurrentRssBytes: sdk.String("dolores"),
                                Timestamp: sdk.String("in"),
                                TotalGbMs: sdk.String("repudiandae"),
                            },
                        },
                    },
                    WorkerShutdownNotice: &shared.WorkerShutdownNotice{
                        Reason: sdk.String("rerum"),
                    },
                    WorkerThreadScalingReport: &shared.WorkerThreadScalingReport{
                        CurrentThreadCount: sdk.Int(457632),
                    },
                },
            },
        },
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("similique"),
        Fields: sdk.String("est"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "placeat",
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("officiis"),
    }, operations.DataflowProjectsWorkerMessagesSecurity{
        Option1: &operations.DataflowProjectsWorkerMessagesSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendWorkerMessagesResponse != nil {
        // handle response
    }
}
```
