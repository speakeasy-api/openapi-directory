# projects

### Available Operations

* [dataflowProjectsDeleteSnapshots](#dataflowprojectsdeletesnapshots) - Deletes a snapshot.
* [dataflowProjectsJobsAggregated](#dataflowprojectsjobsaggregated) - List the jobs of a project across all regions.
* [dataflowProjectsJobsCreate](#dataflowprojectsjobscreate) - Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
* [dataflowProjectsJobsDebugGetConfig](#dataflowprojectsjobsdebuggetconfig) - Get encoded debug configuration for component. Not cacheable.
* [dataflowProjectsJobsDebugSendCapture](#dataflowprojectsjobsdebugsendcapture) - Send encoded debug capture data for component.
* [dataflowProjectsJobsGet](#dataflowprojectsjobsget) - Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
* [dataflowProjectsJobsGetMetrics](#dataflowprojectsjobsgetmetrics) - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* [dataflowProjectsJobsList](#dataflowprojectsjobslist) - List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
* [dataflowProjectsJobsMessagesList](#dataflowprojectsjobsmessageslist) - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* [dataflowProjectsJobsSnapshot](#dataflowprojectsjobssnapshot) - Snapshot the state of a streaming job.
* [dataflowProjectsJobsUpdate](#dataflowprojectsjobsupdate) - Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
* [dataflowProjectsJobsWorkItemsLease](#dataflowprojectsjobsworkitemslease) - Leases a dataflow WorkItem to run.
* [dataflowProjectsJobsWorkItemsReportStatus](#dataflowprojectsjobsworkitemsreportstatus) - Reports the status of dataflow WorkItems leased by a worker.
* [dataflowProjectsLocationsFlexTemplatesLaunch](#dataflowprojectslocationsflextemplateslaunch) - Launch a job with a FlexTemplate.
* [dataflowProjectsLocationsJobsCreate](#dataflowprojectslocationsjobscreate) - Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
* [dataflowProjectsLocationsJobsDebugGetConfig](#dataflowprojectslocationsjobsdebuggetconfig) - Get encoded debug configuration for component. Not cacheable.
* [dataflowProjectsLocationsJobsDebugSendCapture](#dataflowprojectslocationsjobsdebugsendcapture) - Send encoded debug capture data for component.
* [dataflowProjectsLocationsJobsGet](#dataflowprojectslocationsjobsget) - Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
* [dataflowProjectsLocationsJobsGetExecutionDetails](#dataflowprojectslocationsjobsgetexecutiondetails) - Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
* [dataflowProjectsLocationsJobsGetMetrics](#dataflowprojectslocationsjobsgetmetrics) - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* [dataflowProjectsLocationsJobsList](#dataflowprojectslocationsjobslist) - List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
* [dataflowProjectsLocationsJobsMessagesList](#dataflowprojectslocationsjobsmessageslist) - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* [dataflowProjectsLocationsJobsSnapshot](#dataflowprojectslocationsjobssnapshot) - Snapshot the state of a streaming job.
* [dataflowProjectsLocationsJobsSnapshotsList](#dataflowprojectslocationsjobssnapshotslist) - Lists snapshots.
* [dataflowProjectsLocationsJobsStagesGetExecutionDetails](#dataflowprojectslocationsjobsstagesgetexecutiondetails) - Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
* [dataflowProjectsLocationsJobsUpdate](#dataflowprojectslocationsjobsupdate) - Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
* [dataflowProjectsLocationsJobsWorkItemsLease](#dataflowprojectslocationsjobsworkitemslease) - Leases a dataflow WorkItem to run.
* [dataflowProjectsLocationsJobsWorkItemsReportStatus](#dataflowprojectslocationsjobsworkitemsreportstatus) - Reports the status of dataflow WorkItems leased by a worker.
* [dataflowProjectsLocationsSnapshotsDelete](#dataflowprojectslocationssnapshotsdelete) - Deletes a snapshot.
* [dataflowProjectsLocationsSnapshotsGet](#dataflowprojectslocationssnapshotsget) - Gets information about a snapshot.
* [dataflowProjectsLocationsSnapshotsList](#dataflowprojectslocationssnapshotslist) - Lists snapshots.
* [dataflowProjectsLocationsTemplatesCreate](#dataflowprojectslocationstemplatescreate) - Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
* [dataflowProjectsLocationsTemplatesGet](#dataflowprojectslocationstemplatesget) - Get the template associated with a template.
* [dataflowProjectsLocationsTemplatesLaunch](#dataflowprojectslocationstemplateslaunch) - Launch a template.
* [dataflowProjectsLocationsWorkerMessages](#dataflowprojectslocationsworkermessages) - Send a worker_message to the service.
* [dataflowProjectsSnapshotsGet](#dataflowprojectssnapshotsget) - Gets information about a snapshot.
* [dataflowProjectsSnapshotsList](#dataflowprojectssnapshotslist) - Lists snapshots.
* [dataflowProjectsTemplatesCreate](#dataflowprojectstemplatescreate) - Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
* [dataflowProjectsTemplatesGet](#dataflowprojectstemplatesget) - Get the template associated with a template.
* [dataflowProjectsTemplatesLaunch](#dataflowprojectstemplateslaunch) - Launch a template.
* [dataflowProjectsWorkerMessages](#dataflowprojectsworkermessages) - Send a worker_message to the service.

## dataflowProjectsDeleteSnapshots

Deletes a snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsRequest;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsResponse;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsDeleteSnapshotsRequest req = new DataflowProjectsDeleteSnapshotsRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "minus";
                key = "placeat";
                location = "voluptatum";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "excepturi";
                snapshotId = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            DataflowProjectsDeleteSnapshotsResponse res = sdk.projects.dataflowProjectsDeleteSnapshots(req, new DataflowProjectsDeleteSnapshotsSecurity() {{
                option1 = new DataflowProjectsDeleteSnapshotsSecurityOption1("ab", "quis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.deleteSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsJobsAggregated

List the jobs of a project across all regions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsJobsAggregatedFilterEnum;
import org.openapis.openapi.models.operations.DataflowProjectsJobsAggregatedRequest;
import org.openapis.openapi.models.operations.DataflowProjectsJobsAggregatedResponse;
import org.openapis.openapi.models.operations.DataflowProjectsJobsAggregatedSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsJobsAggregatedSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsJobsAggregatedSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsJobsAggregatedSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsJobsAggregatedSecurityOption4;
import org.openapis.openapi.models.operations.DataflowProjectsJobsAggregatedViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsJobsAggregatedRequest req = new DataflowProjectsJobsAggregatedRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "sapiente";
                filter = DataflowProjectsJobsAggregatedFilterEnum.ACTIVE;
                key = "odit";
                location = "at";
                name = "Emilio Krajcik";
                oauthToken = "esse";
                pageSize = 520478L;
                pageToken = "porro";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "dicta";
                uploadProtocol = "nam";
                view = DataflowProjectsJobsAggregatedViewEnum.JOB_VIEW_ALL;
            }};            

            DataflowProjectsJobsAggregatedResponse res = sdk.projects.dataflowProjectsJobsAggregated(req, new DataflowProjectsJobsAggregatedSecurity() {{
                option1 = new DataflowProjectsJobsAggregatedSecurityOption1("occaecati", "fugit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## dataflowProjectsJobsCreate

Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsJobsCreateRequest;
import org.openapis.openapi.models.operations.DataflowProjectsJobsCreateResponse;
import org.openapis.openapi.models.operations.DataflowProjectsJobsCreateSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsJobsCreateSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsJobsCreateSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsJobsCreateSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsJobsCreateSecurityOption4;
import org.openapis.openapi.models.operations.DataflowProjectsJobsCreateViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AutoscalingSettings;
import org.openapis.openapi.models.shared.AutoscalingSettingsAlgorithmEnum;
import org.openapis.openapi.models.shared.BigQueryIODetails;
import org.openapis.openapi.models.shared.BigTableIODetails;
import org.openapis.openapi.models.shared.ComponentSource;
import org.openapis.openapi.models.shared.ComponentTransform;
import org.openapis.openapi.models.shared.DatastoreIODetails;
import org.openapis.openapi.models.shared.DebugOptions;
import org.openapis.openapi.models.shared.Disk;
import org.openapis.openapi.models.shared.DisplayData;
import org.openapis.openapi.models.shared.EnvironmentFlexResourceSchedulingGoalEnum;
import org.openapis.openapi.models.shared.EnvironmentInput;
import org.openapis.openapi.models.shared.ExecutionStageState;
import org.openapis.openapi.models.shared.ExecutionStageStateExecutionStageStateEnum;
import org.openapis.openapi.models.shared.ExecutionStageSummary;
import org.openapis.openapi.models.shared.ExecutionStageSummaryKindEnum;
import org.openapis.openapi.models.shared.FileIODetails;
import org.openapis.openapi.models.shared.JobCurrentStateEnum;
import org.openapis.openapi.models.shared.JobExecutionInfo;
import org.openapis.openapi.models.shared.JobExecutionStageInfo;
import org.openapis.openapi.models.shared.JobInput;
import org.openapis.openapi.models.shared.JobMetadata;
import org.openapis.openapi.models.shared.JobRequestedStateEnum;
import org.openapis.openapi.models.shared.JobTypeEnum;
import org.openapis.openapi.models.shared.Package;
import org.openapis.openapi.models.shared.PipelineDescription;
import org.openapis.openapi.models.shared.PubSubIODetails;
import org.openapis.openapi.models.shared.RuntimeUpdatableParams;
import org.openapis.openapi.models.shared.SDKHarnessContainerImage;
import org.openapis.openapi.models.shared.SDKVersion;
import org.openapis.openapi.models.shared.SDKVersionSDKSupportStatusEnum;
import org.openapis.openapi.models.shared.SpannerIODetails;
import org.openapis.openapi.models.shared.StageSource;
import org.openapis.openapi.models.shared.Step;
import org.openapis.openapi.models.shared.TaskRunnerSettings;
import org.openapis.openapi.models.shared.TransformSummary;
import org.openapis.openapi.models.shared.TransformSummaryKindEnum;
import org.openapis.openapi.models.shared.WorkerPool;
import org.openapis.openapi.models.shared.WorkerPoolDefaultPackageSetEnum;
import org.openapis.openapi.models.shared.WorkerPoolIpConfigurationEnum;
import org.openapis.openapi.models.shared.WorkerPoolTeardownPolicyEnum;
import org.openapis.openapi.models.shared.WorkerSettings;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsJobsCreateRequest req = new DataflowProjectsJobsCreateRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                jobInput = new JobInput() {{
                    clientRequestId = "optio";
                    createTime = "totam";
                    createdFromSnapshotId = "beatae";
                    currentState = JobCurrentStateEnum.JOB_STATE_CANCELLED;
                    currentStateTime = "molestiae";
                    environment = new EnvironmentInput() {{
                        clusterManagerApiService = "modi";
                        dataset = "qui";
                        debugOptions = new DebugOptions() {{
                            enableHotKeyLogging = false;
                        }};;
                        experiments = new String[]{{
                            add("cum"),
                            add("esse"),
                            add("ipsum"),
                            add("excepturi"),
                        }};
                        flexResourceSchedulingGoal = EnvironmentFlexResourceSchedulingGoalEnum.FLEXRS_UNSPECIFIED;
                        internalExperiments = new java.util.HashMap<String, Object>() {{
                            put("ad", "natus");
                        }};
                        sdkPipelineOptions = new java.util.HashMap<String, Object>() {{
                            put("iste", "dolor");
                        }};
                        serviceAccountEmail = "natus";
                        serviceKmsKeyName = "laboriosam";
                        serviceOptions = new String[]{{
                            add("saepe"),
                            add("fuga"),
                            add("in"),
                            add("corporis"),
                        }};
                        tempStoragePrefix = "iste";
                        userAgent = new java.util.HashMap<String, Object>() {{
                            put("saepe", "quidem");
                            put("architecto", "ipsa");
                        }};
                        version = new java.util.HashMap<String, Object>() {{
                            put("est", "mollitia");
                            put("laborum", "dolores");
                            put("dolorem", "corporis");
                            put("explicabo", "nobis");
                        }};
                        workerPools = new org.openapis.openapi.models.shared.WorkerPool[]{{
                            add(new WorkerPool() {{
                                autoscalingSettings = new AutoscalingSettings() {{
                                    algorithm = AutoscalingSettingsAlgorithmEnum.AUTOSCALING_ALGORITHM_NONE;
                                    maxNumWorkers = 363711;
                                }};
                                dataDisks = new org.openapis.openapi.models.shared.Disk[]{{
                                    add(new Disk() {{
                                        diskType = "excepturi";
                                        mountPoint = "accusantium";
                                        sizeGb = 438601;
                                    }}),
                                    add(new Disk() {{
                                        diskType = "culpa";
                                        mountPoint = "doloribus";
                                        sizeGb = 958950;
                                    }}),
                                }};
                                defaultPackageSet = WorkerPoolDefaultPackageSetEnum.DEFAULT_PACKAGE_SET_UNKNOWN;
                                diskSizeGb = 652790;
                                diskSourceImage = "dolorem";
                                diskType = "culpa";
                                ipConfiguration = WorkerPoolIpConfigurationEnum.WORKER_IP_UNSPECIFIED;
                                kind = "repellat";
                                machineType = "mollitia";
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("numquam", "commodi");
                                    put("quam", "molestiae");
                                    put("velit", "error");
                                }};
                                network = "quia";
                                numThreadsPerWorker = 338007;
                                numWorkers = 110375;
                                onHostMaintenance = "laborum";
                                packages = new org.openapis.openapi.models.shared.Package[]{{
                                    add(new Package() {{
                                        location = "enim";
                                        name = "Angelica Dietrich";
                                    }}),
                                    add(new Package() {{
                                        location = "id";
                                        name = "Richard Boyer";
                                    }}),
                                    add(new Package() {{
                                        location = "laborum";
                                        name = "Johanna Wolf";
                                    }}),
                                }};
                                poolArgs = new java.util.HashMap<String, Object>() {{
                                    put("voluptatibus", "ipsa");
                                    put("omnis", "voluptate");
                                    put("cum", "perferendis");
                                }};
                                sdkHarnessContainerImages = new org.openapis.openapi.models.shared.SDKHarnessContainerImage[]{{
                                    add(new SDKHarnessContainerImage() {{
                                        capabilities = new String[]{{
                                            add("ut"),
                                            add("maiores"),
                                        }};
                                        containerImage = "dicta";
                                        environmentId = "corporis";
                                        useSingleCorePerContainer = false;
                                    }}),
                                }};
                                subnetwork = "dolore";
                                taskrunnerSettings = new TaskRunnerSettings() {{
                                    alsologtostderr = false;
                                    baseTaskDir = "iusto";
                                    baseUrl = "dicta";
                                    commandlinesFileName = "harum";
                                    continueOnException = false;
                                    dataflowApiVersion = "enim";
                                    harnessCommand = "accusamus";
                                    languageHint = "commodi";
                                    logDir = "repudiandae";
                                    logToSerialconsole = false;
                                    logUploadLocation = "quae";
                                    oauthScopes = new String[]{{
                                        add("quidem"),
                                    }};
                                    parallelWorkerSettings = new WorkerSettings() {{
                                        baseUrl = "molestias";
                                        reportingEnabled = false;
                                        servicePath = "excepturi";
                                        shuffleServicePath = "pariatur";
                                        tempStoragePrefix = "modi";
                                        workerId = "praesentium";
                                    }};
                                    streamingWorkerMainClass = "rem";
                                    taskGroup = "voluptates";
                                    taskUser = "quasi";
                                    tempStoragePrefix = "repudiandae";
                                    vmId = "sint";
                                    workflowFileName = "veritatis";
                                }};
                                teardownPolicy = WorkerPoolTeardownPolicyEnum.TEARDOWN_NEVER;
                                workerHarnessContainerImage = "incidunt";
                                zone = "enim";
                            }}),
                            add(new WorkerPool() {{
                                autoscalingSettings = new AutoscalingSettings() {{
                                    algorithm = AutoscalingSettingsAlgorithmEnum.AUTOSCALING_ALGORITHM_UNKNOWN;
                                    maxNumWorkers = 667411;
                                }};
                                dataDisks = new org.openapis.openapi.models.shared.Disk[]{{
                                    add(new Disk() {{
                                        diskType = "explicabo";
                                        mountPoint = "deserunt";
                                        sizeGb = 716327;
                                    }}),
                                    add(new Disk() {{
                                        diskType = "quibusdam";
                                        mountPoint = "labore";
                                        sizeGb = 264730;
                                    }}),
                                    add(new Disk() {{
                                        diskType = "qui";
                                        mountPoint = "aliquid";
                                        sizeGb = 586513;
                                    }}),
                                    add(new Disk() {{
                                        diskType = "quos";
                                        mountPoint = "perferendis";
                                        sizeGb = 164940;
                                    }}),
                                }};
                                defaultPackageSet = WorkerPoolDefaultPackageSetEnum.DEFAULT_PACKAGE_SET_PYTHON;
                                diskSizeGb = 369808;
                                diskSourceImage = "alias";
                                diskType = "fugit";
                                ipConfiguration = WorkerPoolIpConfigurationEnum.WORKER_IP_PRIVATE;
                                kind = "excepturi";
                                machineType = "tempora";
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("tempore", "labore");
                                    put("delectus", "eum");
                                    put("non", "eligendi");
                                }};
                                network = "sint";
                                numThreadsPerWorker = 396098;
                                numWorkers = 592042;
                                onHostMaintenance = "necessitatibus";
                                packages = new org.openapis.openapi.models.shared.Package[]{{
                                    add(new Package() {{
                                        location = "officia";
                                        name = "Raquel Wilderman";
                                    }}),
                                    add(new Package() {{
                                        location = "in";
                                        name = "Mrs. Emilio Price";
                                    }}),
                                    add(new Package() {{
                                        location = "facere";
                                        name = "Beth Padberg";
                                    }}),
                                }};
                                poolArgs = new java.util.HashMap<String, Object>() {{
                                    put("enim", "accusamus");
                                    put("delectus", "quidem");
                                    put("provident", "nam");
                                }};
                                sdkHarnessContainerImages = new org.openapis.openapi.models.shared.SDKHarnessContainerImage[]{{
                                    add(new SDKHarnessContainerImage() {{
                                        capabilities = new String[]{{
                                            add("deleniti"),
                                            add("sapiente"),
                                            add("amet"),
                                        }};
                                        containerImage = "deserunt";
                                        environmentId = "nisi";
                                        useSingleCorePerContainer = false;
                                    }}),
                                    add(new SDKHarnessContainerImage() {{
                                        capabilities = new String[]{{
                                            add("natus"),
                                            add("omnis"),
                                        }};
                                        containerImage = "molestiae";
                                        environmentId = "perferendis";
                                        useSingleCorePerContainer = false;
                                    }}),
                                    add(new SDKHarnessContainerImage() {{
                                        capabilities = new String[]{{
                                            add("magnam"),
                                            add("distinctio"),
                                        }};
                                        containerImage = "id";
                                        environmentId = "labore";
                                        useSingleCorePerContainer = false;
                                    }}),
                                }};
                                subnetwork = "labore";
                                taskrunnerSettings = new TaskRunnerSettings() {{
                                    alsologtostderr = false;
                                    baseTaskDir = "suscipit";
                                    baseUrl = "natus";
                                    commandlinesFileName = "nobis";
                                    continueOnException = false;
                                    dataflowApiVersion = "eum";
                                    harnessCommand = "vero";
                                    languageHint = "aspernatur";
                                    logDir = "architecto";
                                    logToSerialconsole = false;
                                    logUploadLocation = "magnam";
                                    oauthScopes = new String[]{{
                                        add("excepturi"),
                                    }};
                                    parallelWorkerSettings = new WorkerSettings() {{
                                        baseUrl = "ullam";
                                        reportingEnabled = false;
                                        servicePath = "provident";
                                        shuffleServicePath = "quos";
                                        tempStoragePrefix = "sint";
                                        workerId = "accusantium";
                                    }};
                                    streamingWorkerMainClass = "mollitia";
                                    taskGroup = "reiciendis";
                                    taskUser = "mollitia";
                                    tempStoragePrefix = "ad";
                                    vmId = "eum";
                                    workflowFileName = "dolor";
                                }};
                                teardownPolicy = WorkerPoolTeardownPolicyEnum.TEARDOWN_NEVER;
                                workerHarnessContainerImage = "odit";
                                zone = "nemo";
                            }}),
                        }};
                        workerRegion = "quasi";
                        workerZone = "iure";
                    }};;
                    executionInfo = new JobExecutionInfo() {{
                        stages = new java.util.HashMap<String, org.openapis.openapi.models.shared.JobExecutionStageInfo>() {{
                            put("debitis", new JobExecutionStageInfo() {{
                                stepName = new String[]{{
                                    add("maxime"),
                                    add("deleniti"),
                                }};
                            }});
                            put("facilis", new JobExecutionStageInfo() {{
                                stepName = new String[]{{
                                    add("architecto"),
                                    add("architecto"),
                                }};
                            }});
                            put("repudiandae", new JobExecutionStageInfo() {{
                                stepName = new String[]{{
                                    add("expedita"),
                                    add("nihil"),
                                }};
                            }});
                            put("repellat", new JobExecutionStageInfo() {{
                                stepName = new String[]{{
                                    add("sed"),
                                    add("saepe"),
                                    add("pariatur"),
                                    add("accusantium"),
                                }};
                            }});
                        }};
                    }};;
                    id = "28921cdd-c692-4601-bb57-6b0d5f0d30c5";
                    jobMetadata = new JobMetadata() {{
                        bigTableDetails = new org.openapis.openapi.models.shared.BigTableIODetails[]{{
                            add(new BigTableIODetails() {{
                                instanceId = "libero";
                                projectId = "nobis";
                                tableId = "dolores";
                            }}),
                            add(new BigTableIODetails() {{
                                instanceId = "quis";
                                projectId = "totam";
                                tableId = "dignissimos";
                            }}),
                            add(new BigTableIODetails() {{
                                instanceId = "eaque";
                                projectId = "quis";
                                tableId = "nesciunt";
                            }}),
                            add(new BigTableIODetails() {{
                                instanceId = "eos";
                                projectId = "perferendis";
                                tableId = "dolores";
                            }}),
                        }};
                        bigqueryDetails = new org.openapis.openapi.models.shared.BigQueryIODetails[]{{
                            add(new BigQueryIODetails() {{
                                dataset = "quam";
                                projectId = "dolor";
                                query = "vero";
                                table = "nostrum";
                            }}),
                            add(new BigQueryIODetails() {{
                                dataset = "hic";
                                projectId = "recusandae";
                                query = "omnis";
                                table = "facilis";
                            }}),
                            add(new BigQueryIODetails() {{
                                dataset = "perspiciatis";
                                projectId = "voluptatem";
                                query = "porro";
                                table = "consequuntur";
                            }}),
                            add(new BigQueryIODetails() {{
                                dataset = "blanditiis";
                                projectId = "error";
                                query = "eaque";
                                table = "occaecati";
                            }}),
                        }};
                        datastoreDetails = new org.openapis.openapi.models.shared.DatastoreIODetails[]{{
                            add(new DatastoreIODetails() {{
                                namespace = "adipisci";
                                projectId = "asperiores";
                            }}),
                            add(new DatastoreIODetails() {{
                                namespace = "earum";
                                projectId = "modi";
                            }}),
                            add(new DatastoreIODetails() {{
                                namespace = "iste";
                                projectId = "dolorum";
                            }}),
                        }};
                        fileDetails = new org.openapis.openapi.models.shared.FileIODetails[]{{
                            add(new FileIODetails() {{
                                filePattern = "pariatur";
                            }}),
                            add(new FileIODetails() {{
                                filePattern = "provident";
                            }}),
                            add(new FileIODetails() {{
                                filePattern = "nobis";
                            }}),
                        }};
                        pubsubDetails = new org.openapis.openapi.models.shared.PubSubIODetails[]{{
                            add(new PubSubIODetails() {{
                                subscription = "delectus";
                                topic = "quaerat";
                            }}),
                            add(new PubSubIODetails() {{
                                subscription = "quos";
                                topic = "aliquid";
                            }}),
                            add(new PubSubIODetails() {{
                                subscription = "dolorem";
                                topic = "dolorem";
                            }}),
                        }};
                        sdkVersion = new SDKVersion() {{
                            sdkSupportStatus = SDKVersionSDKSupportStatusEnum.SUPPORTED;
                            version = "qui";
                            versionDisplayName = "ipsum";
                        }};;
                        spannerDetails = new org.openapis.openapi.models.shared.SpannerIODetails[]{{
                            add(new SpannerIODetails() {{
                                databaseId = "excepturi";
                                instanceId = "cum";
                                projectId = "voluptate";
                            }}),
                            add(new SpannerIODetails() {{
                                databaseId = "dignissimos";
                                instanceId = "reiciendis";
                                projectId = "amet";
                            }}),
                            add(new SpannerIODetails() {{
                                databaseId = "dolorum";
                                instanceId = "numquam";
                                projectId = "veritatis";
                            }}),
                            add(new SpannerIODetails() {{
                                databaseId = "ipsa";
                                instanceId = "ipsa";
                                projectId = "iure";
                            }}),
                        }};
                        userDisplayProperties = new java.util.HashMap<String, String>() {{
                            put("quaerat", "accusamus");
                            put("quidem", "voluptatibus");
                        }};
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("natus", "eos");
                        put("atque", "sit");
                    }};
                    location = "fugiat";
                    name = "Latoya Parisian";
                    pipelineDescription = new PipelineDescription() {{
                        displayData = new org.openapis.openapi.models.shared.DisplayData[]{{
                            add(new DisplayData() {{
                                boolValue = false;
                                durationValue = "deleniti";
                                floatValue = 6070.45;
                                int64Value = "necessitatibus";
                                javaClassValue = "distinctio";
                                key = "asperiores";
                                label = "nihil";
                                namespace = "ipsum";
                                shortStrValue = "voluptate";
                                strValue = "id";
                                timestampValue = "saepe";
                                url = "eius";
                            }}),
                            add(new DisplayData() {{
                                boolValue = false;
                                durationValue = "aspernatur";
                                floatValue = 206.51;
                                int64Value = "amet";
                                javaClassValue = "optio";
                                key = "accusamus";
                                label = "ad";
                                namespace = "saepe";
                                shortStrValue = "suscipit";
                                strValue = "deserunt";
                                timestampValue = "provident";
                                url = "minima";
                            }}),
                            add(new DisplayData() {{
                                boolValue = false;
                                durationValue = "repellendus";
                                floatValue = 5197.11;
                                int64Value = "similique";
                                javaClassValue = "alias";
                                key = "at";
                                label = "quaerat";
                                namespace = "tempora";
                                shortStrValue = "vel";
                                strValue = "quod";
                                timestampValue = "officiis";
                                url = "qui";
                            }}),
                        }};
                        executionPipelineStage = new org.openapis.openapi.models.shared.ExecutionStageSummary[]{{
                            add(new ExecutionStageSummary() {{
                                componentSource = new org.openapis.openapi.models.shared.ComponentSource[]{{
                                    add(new ComponentSource() {{
                                        name = "Fannie Kub";
                                        originalTransformOrCollection = "tenetur";
                                        userName = "Daphnee.Renner31";
                                    }}),
                                    add(new ComponentSource() {{
                                        name = "Jeannie Leannon MD";
                                        originalTransformOrCollection = "neque";
                                        userName = "Candida.Kassulke64";
                                    }}),
                                    add(new ComponentSource() {{
                                        name = "Tracy Gottlieb";
                                        originalTransformOrCollection = "maxime";
                                        userName = "Salvador67";
                                    }}),
                                    add(new ComponentSource() {{
                                        name = "Randall Cole";
                                        originalTransformOrCollection = "facilis";
                                        userName = "Grace_Kohler";
                                    }}),
                                }};
                                componentTransform = new org.openapis.openapi.models.shared.ComponentTransform[]{{
                                    add(new ComponentTransform() {{
                                        name = "Beverly Cummerata II";
                                        originalTransform = "nam";
                                        userName = "Tristian_Bartell74";
                                    }}),
                                }};
                                id = "1e31b8b9-0f34-443a-9108-e0adcf4b9218";
                                inputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Jan Schaefer";
                                        originalTransformOrCollection = "quis";
                                        sizeBytes = "ipsum";
                                        userName = "Vida87";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Julio Weissnat";
                                        originalTransformOrCollection = "odio";
                                        sizeBytes = "similique";
                                        userName = "Melody.Swift";
                                    }}),
                                }};
                                kind = ExecutionStageSummaryKindEnum.SINGLETON_KIND;
                                name = "Earl Mosciski DVM";
                                outputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Louis Sauer";
                                        originalTransformOrCollection = "iusto";
                                        sizeBytes = "eligendi";
                                        userName = "Jess.Abernathy";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Terri Collins";
                                        originalTransformOrCollection = "magnam";
                                        sizeBytes = "ratione";
                                        userName = "Greta22";
                                    }}),
                                }};
                                prerequisiteStage = new String[]{{
                                    add("quasi"),
                                    add("ex"),
                                    add("nulla"),
                                    add("excepturi"),
                                }};
                            }}),
                            add(new ExecutionStageSummary() {{
                                componentSource = new org.openapis.openapi.models.shared.ComponentSource[]{{
                                    add(new ComponentSource() {{
                                        name = "Dixie Schamberger";
                                        originalTransformOrCollection = "impedit";
                                        userName = "Flossie.Hartmann";
                                    }}),
                                    add(new ComponentSource() {{
                                        name = "Rosemary Ryan";
                                        originalTransformOrCollection = "aspernatur";
                                        userName = "Eriberto_Becker1";
                                    }}),
                                    add(new ComponentSource() {{
                                        name = "Margie Russel";
                                        originalTransformOrCollection = "accusamus";
                                        userName = "Arjun67";
                                    }}),
                                    add(new ComponentSource() {{
                                        name = "Clark Franecki";
                                        originalTransformOrCollection = "nobis";
                                        userName = "Keagan.Simonis72";
                                    }}),
                                }};
                                componentTransform = new org.openapis.openapi.models.shared.ComponentTransform[]{{
                                    add(new ComponentTransform() {{
                                        name = "Carrie Cole IV";
                                        originalTransform = "magnam";
                                        userName = "Jefferey.Gibson";
                                    }}),
                                }};
                                id = "8a7bd466-d28c-410a-b3cd-ca4251904e52";
                                inputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Miss Claude Walsh";
                                        originalTransformOrCollection = "dignissimos";
                                        sizeBytes = "inventore";
                                        userName = "Janessa.Leannon48";
                                    }}),
                                }};
                                kind = ExecutionStageSummaryKindEnum.WRITE_KIND;
                                name = "Miranda Daniel";
                                outputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Franklin Lynch";
                                        originalTransformOrCollection = "deleniti";
                                        sizeBytes = "fugit";
                                        userName = "Marion53";
                                    }}),
                                }};
                                prerequisiteStage = new String[]{{
                                    add("minima"),
                                }};
                            }}),
                            add(new ExecutionStageSummary() {{
                                componentSource = new org.openapis.openapi.models.shared.ComponentSource[]{{
                                    add(new ComponentSource() {{
                                        name = "Jeannie Cronin";
                                        originalTransformOrCollection = "saepe";
                                        userName = "Kole45";
                                    }}),
                                    add(new ComponentSource() {{
                                        name = "Sheldon Boehm";
                                        originalTransformOrCollection = "nam";
                                        userName = "Serena90";
                                    }}),
                                }};
                                componentTransform = new org.openapis.openapi.models.shared.ComponentTransform[]{{
                                    add(new ComponentTransform() {{
                                        name = "Javier Price";
                                        originalTransform = "distinctio";
                                        userName = "Nikki_Balistreri";
                                    }}),
                                    add(new ComponentTransform() {{
                                        name = "Miss Blanca Cronin";
                                        originalTransform = "sapiente";
                                        userName = "Darlene_Koch";
                                    }}),
                                }};
                                id = "fd871f99-dd2e-4fd1-a1aa-6f1e674bdb04";
                                inputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Marion Kihn";
                                        originalTransformOrCollection = "aut";
                                        sizeBytes = "voluptatum";
                                        userName = "Christop_Sporer";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Wilbur Bradtke";
                                        originalTransformOrCollection = "quasi";
                                        sizeBytes = "at";
                                        userName = "Audreanne32";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Edith Ferry";
                                        originalTransformOrCollection = "accusantium";
                                        sizeBytes = "rem";
                                        userName = "Adrienne_Langworth";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Mrs. Priscilla Fritsch";
                                        originalTransformOrCollection = "numquam";
                                        sizeBytes = "impedit";
                                        userName = "Brenda49";
                                    }}),
                                }};
                                kind = ExecutionStageSummaryKindEnum.PAR_DO_KIND;
                                name = "Wendell Frami";
                                outputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Eileen Hagenes";
                                        originalTransformOrCollection = "officia";
                                        sizeBytes = "maxime";
                                        userName = "Jennifer.Nikolaus6";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Robyn Schmitt I";
                                        originalTransformOrCollection = "fuga";
                                        sizeBytes = "id";
                                        userName = "George_Franecki";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Felix Stehr";
                                        originalTransformOrCollection = "quos";
                                        sizeBytes = "vel";
                                        userName = "Edmund_Senger41";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Ana Wisozk";
                                        originalTransformOrCollection = "recusandae";
                                        sizeBytes = "aliquid";
                                        userName = "Alvis44";
                                    }}),
                                }};
                                prerequisiteStage = new String[]{{
                                    add("earum"),
                                    add("facere"),
                                }};
                            }}),
                        }};
                        originalPipelineTransform = new org.openapis.openapi.models.shared.TransformSummary[]{{
                            add(new TransformSummary() {{
                                displayData = new org.openapis.openapi.models.shared.DisplayData[]{{
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "suscipit";
                                        floatValue = 9689.72;
                                        int64Value = "quidem";
                                        javaClassValue = "saepe";
                                        key = "necessitatibus";
                                        label = "dolore";
                                        namespace = "sunt";
                                        shortStrValue = "asperiores";
                                        strValue = "adipisci";
                                        timestampValue = "non";
                                        url = "amet";
                                    }}),
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "beatae";
                                        floatValue = 4895.09;
                                        int64Value = "a";
                                        javaClassValue = "debitis";
                                        key = "consectetur";
                                        label = "corporis";
                                        namespace = "harum";
                                        shortStrValue = "laboriosam";
                                        strValue = "ipsa";
                                        timestampValue = "voluptates";
                                        url = "libero";
                                    }}),
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "vitae";
                                        floatValue = 8817.21;
                                        int64Value = "similique";
                                        javaClassValue = "tempora";
                                        key = "aspernatur";
                                        label = "voluptas";
                                        namespace = "voluptas";
                                        shortStrValue = "voluptas";
                                        strValue = "minima";
                                        timestampValue = "nobis";
                                        url = "dolorum";
                                    }}),
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "adipisci";
                                        floatValue = 7955.35;
                                        int64Value = "dolores";
                                        javaClassValue = "blanditiis";
                                        key = "in";
                                        label = "dolore";
                                        namespace = "aliquam";
                                        shortStrValue = "officiis";
                                        strValue = "temporibus";
                                        timestampValue = "ullam";
                                        url = "adipisci";
                                    }}),
                                }};
                                id = "b88f3a8d-8f5c-40b2-b2fb-7b194a276b26";
                                inputCollectionName = new String[]{{
                                    add("architecto"),
                                    add("suscipit"),
                                    add("sapiente"),
                                }};
                                kind = TransformSummaryKindEnum.SHUFFLE_KIND;
                                name = "Faith Aufderhar";
                                outputCollectionName = new String[]{{
                                    add("sed"),
                                    add("provident"),
                                }};
                            }}),
                            add(new TransformSummary() {{
                                displayData = new org.openapis.openapi.models.shared.DisplayData[]{{
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "necessitatibus";
                                        floatValue = 2155.29;
                                        int64Value = "ea";
                                        javaClassValue = "occaecati";
                                        key = "quos";
                                        label = "voluptatibus";
                                        namespace = "tempora";
                                        shortStrValue = "tempora";
                                        strValue = "voluptate";
                                        timestampValue = "reiciendis";
                                        url = "ex";
                                    }}),
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "sit";
                                        floatValue = 2484.13;
                                        int64Value = "officiis";
                                        javaClassValue = "praesentium";
                                        key = "facilis";
                                        label = "quaerat";
                                        namespace = "incidunt";
                                        shortStrValue = "ipsam";
                                        strValue = "debitis";
                                        timestampValue = "rem";
                                        url = "sit";
                                    }}),
                                }};
                                id = "ca55efd2-0e45-47e1-858b-6a89fbe3a5aa";
                                inputCollectionName = new String[]{{
                                    add("accusamus"),
                                    add("tempora"),
                                    add("atque"),
                                }};
                                kind = TransformSummaryKindEnum.PAR_DO_KIND;
                                name = "Janis Bartell";
                                outputCollectionName = new String[]{{
                                    add("consequatur"),
                                    add("esse"),
                                }};
                            }}),
                        }};
                        stepNamesHash = "ipsam";
                    }};;
                    projectId = "sit";
                    replaceJobId = "voluptatum";
                    replacedByJobId = "quas";
                    requestedState = JobRequestedStateEnum.JOB_STATE_QUEUED;
                    runtimeUpdatableParams = new RuntimeUpdatableParams() {{
                        maxNumWorkers = 361151;
                        minNumWorkers = 89494;
                    }};;
                    satisfiesPzs = false;
                    stageStates = new org.openapis.openapi.models.shared.ExecutionStageState[]{{
                        add(new ExecutionStageState() {{
                            currentStateTime = "ex";
                            executionStageName = "sed";
                            executionStageState = ExecutionStageStateExecutionStageStateEnum.JOB_STATE_UNKNOWN;
                        }}),
                        add(new ExecutionStageState() {{
                            currentStateTime = "vel";
                            executionStageName = "nostrum";
                            executionStageState = ExecutionStageStateExecutionStageStateEnum.JOB_STATE_QUEUED;
                        }}),
                        add(new ExecutionStageState() {{
                            currentStateTime = "error";
                            executionStageName = "consequatur";
                            executionStageState = ExecutionStageStateExecutionStageStateEnum.JOB_STATE_DONE;
                        }}),
                    }};
                    startTime = "reiciendis";
                    steps = new org.openapis.openapi.models.shared.Step[]{{
                        add(new Step() {{
                            kind = "harum";
                            name = "Diane Mayer";
                            properties = new java.util.HashMap<String, Object>() {{
                                put("laborum", "nam");
                                put("tenetur", "laboriosam");
                                put("alias", "amet");
                            }};
                        }}),
                    }};
                    stepsLocation = "deserunt";
                    tempFiles = new String[]{{
                        add("unde"),
                        add("reiciendis"),
                    }};
                    transformNameMapping = new java.util.HashMap<String, String>() {{
                        put("repellendus", "delectus");
                        put("voluptates", "perferendis");
                        put("est", "quidem");
                    }};
                    type = JobTypeEnum.JOB_TYPE_BATCH;
                }};;
                accessToken = "facere";
                alt = AltEnum.PROTO;
                callback = "praesentium";
                fields = "mollitia";
                key = "veniam";
                location = "voluptatem";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "repudiandae";
                replaceJobId = "quasi";
                uploadType = "atque";
                uploadProtocol = "reprehenderit";
                view = DataflowProjectsJobsCreateViewEnum.JOB_VIEW_DESCRIPTION;
            }};            

            DataflowProjectsJobsCreateResponse res = sdk.projects.dataflowProjectsJobsCreate(req, new DataflowProjectsJobsCreateSecurity() {{
                option1 = new DataflowProjectsJobsCreateSecurityOption1("totam", "suscipit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## dataflowProjectsJobsDebugGetConfig

Get encoded debug configuration for component. Not cacheable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsJobsDebugGetConfigRequest;
import org.openapis.openapi.models.operations.DataflowProjectsJobsDebugGetConfigResponse;
import org.openapis.openapi.models.operations.DataflowProjectsJobsDebugGetConfigSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsJobsDebugGetConfigSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsJobsDebugGetConfigSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsJobsDebugGetConfigSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsJobsDebugGetConfigSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetDebugConfigRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsJobsDebugGetConfigRequest req = new DataflowProjectsJobsDebugGetConfigRequest("quidem", "maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                getDebugConfigRequest = new GetDebugConfigRequest() {{
                    componentId = "esse";
                    location = "amet";
                    workerId = "assumenda";
                }};;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "error";
                fields = "officiis";
                key = "officiis";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "minima";
                uploadProtocol = "aspernatur";
            }};            

            DataflowProjectsJobsDebugGetConfigResponse res = sdk.projects.dataflowProjectsJobsDebugGetConfig(req, new DataflowProjectsJobsDebugGetConfigSecurity() {{
                option1 = new DataflowProjectsJobsDebugGetConfigSecurityOption1("ex", "maiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getDebugConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsJobsDebugSendCapture

Send encoded debug capture data for component.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsJobsDebugSendCaptureRequest;
import org.openapis.openapi.models.operations.DataflowProjectsJobsDebugSendCaptureResponse;
import org.openapis.openapi.models.operations.DataflowProjectsJobsDebugSendCaptureSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsJobsDebugSendCaptureSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsJobsDebugSendCaptureSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsJobsDebugSendCaptureSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsJobsDebugSendCaptureSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SendDebugCaptureRequest;
import org.openapis.openapi.models.shared.SendDebugCaptureRequestDataFormatEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsJobsDebugSendCaptureRequest req = new DataflowProjectsJobsDebugSendCaptureRequest("corrupti", "at") {{
                dollarXgafv = XgafvEnum.TWO;
                sendDebugCaptureRequest = new SendDebugCaptureRequest() {{
                    componentId = "blanditiis";
                    data = "suscipit";
                    dataFormat = SendDebugCaptureRequestDataFormatEnum.BROTLI;
                    location = "atque";
                    workerId = "atque";
                }};;
                accessToken = "sunt";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "repellendus";
                key = "labore";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "repudiandae";
                uploadProtocol = "dicta";
            }};            

            DataflowProjectsJobsDebugSendCaptureResponse res = sdk.projects.dataflowProjectsJobsDebugSendCapture(req, new DataflowProjectsJobsDebugSendCaptureSecurity() {{
                option1 = new DataflowProjectsJobsDebugSendCaptureSecurityOption1("accusantium", "beatae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sendDebugCaptureResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsJobsGet

Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsJobsGetRequest;
import org.openapis.openapi.models.operations.DataflowProjectsJobsGetResponse;
import org.openapis.openapi.models.operations.DataflowProjectsJobsGetSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsJobsGetSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsJobsGetSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsJobsGetSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsJobsGetSecurityOption4;
import org.openapis.openapi.models.operations.DataflowProjectsJobsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsJobsGetRequest req = new DataflowProjectsJobsGetRequest("dolores", "enim") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "velit";
                alt = AltEnum.PROTO;
                callback = "molestias";
                fields = "magnam";
                key = "saepe";
                location = "consequuntur";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "perspiciatis";
                uploadProtocol = "in";
                view = DataflowProjectsJobsGetViewEnum.JOB_VIEW_UNKNOWN;
            }};            

            DataflowProjectsJobsGetResponse res = sdk.projects.dataflowProjectsJobsGet(req, new DataflowProjectsJobsGetSecurity() {{
                option1 = new DataflowProjectsJobsGetSecurityOption1("eveniet", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## dataflowProjectsJobsGetMetrics

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsJobsGetMetricsRequest;
import org.openapis.openapi.models.operations.DataflowProjectsJobsGetMetricsResponse;
import org.openapis.openapi.models.operations.DataflowProjectsJobsGetMetricsSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsJobsGetMetricsSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsJobsGetMetricsSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsJobsGetMetricsSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsJobsGetMetricsSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsJobsGetMetricsRequest req = new DataflowProjectsJobsGetMetricsRequest("consequuntur", "fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quis";
                alt = AltEnum.MEDIA;
                callback = "error";
                fields = "illo";
                key = "corporis";
                location = "quidem";
                oauthToken = "eveniet";
                prettyPrint = false;
                quotaUser = "non";
                startTime = "vero";
                uploadType = "doloremque";
                uploadProtocol = "iure";
            }};            

            DataflowProjectsJobsGetMetricsResponse res = sdk.projects.dataflowProjectsJobsGetMetrics(req, new DataflowProjectsJobsGetMetricsSecurity() {{
                option1 = new DataflowProjectsJobsGetMetricsSecurityOption1("ipsa", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.jobMetrics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsJobsList

List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsJobsListFilterEnum;
import org.openapis.openapi.models.operations.DataflowProjectsJobsListRequest;
import org.openapis.openapi.models.operations.DataflowProjectsJobsListResponse;
import org.openapis.openapi.models.operations.DataflowProjectsJobsListSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsJobsListSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsJobsListSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsJobsListSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsJobsListSecurityOption4;
import org.openapis.openapi.models.operations.DataflowProjectsJobsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsJobsListRequest req = new DataflowProjectsJobsListRequest("quae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eveniet";
                alt = AltEnum.JSON;
                callback = "cum";
                fields = "iure";
                filter = DataflowProjectsJobsListFilterEnum.ACTIVE;
                key = "ratione";
                location = "laborum";
                name = "Ken Ledner";
                oauthToken = "repellat";
                pageSize = 3099L;
                pageToken = "corporis";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                uploadType = "nihil";
                uploadProtocol = "mollitia";
                view = DataflowProjectsJobsListViewEnum.JOB_VIEW_SUMMARY;
            }};            

            DataflowProjectsJobsListResponse res = sdk.projects.dataflowProjectsJobsList(req, new DataflowProjectsJobsListSecurity() {{
                option1 = new DataflowProjectsJobsListSecurityOption1("alias", "maiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## dataflowProjectsJobsMessagesList

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsJobsMessagesListMinimumImportanceEnum;
import org.openapis.openapi.models.operations.DataflowProjectsJobsMessagesListRequest;
import org.openapis.openapi.models.operations.DataflowProjectsJobsMessagesListResponse;
import org.openapis.openapi.models.operations.DataflowProjectsJobsMessagesListSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsJobsMessagesListSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsJobsMessagesListSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsJobsMessagesListSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsJobsMessagesListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsJobsMessagesListRequest req = new DataflowProjectsJobsMessagesListRequest("reiciendis", "dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "minima";
                alt = AltEnum.JSON;
                callback = "dolorum";
                endTime = "nesciunt";
                fields = "quae";
                key = "recusandae";
                location = "omnis";
                minimumImportance = DataflowProjectsJobsMessagesListMinimumImportanceEnum.JOB_MESSAGE_DEBUG;
                oauthToken = "molestiae";
                pageSize = 403218L;
                pageToken = "ut";
                prettyPrint = false;
                quotaUser = "culpa";
                startTime = "adipisci";
                uploadType = "debitis";
                uploadProtocol = "laudantium";
            }};            

            DataflowProjectsJobsMessagesListResponse res = sdk.projects.dataflowProjectsJobsMessagesList(req, new DataflowProjectsJobsMessagesListSecurity() {{
                option1 = new DataflowProjectsJobsMessagesListSecurityOption1("eum", "nemo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listJobMessagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsJobsSnapshot

Snapshot the state of a streaming job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsJobsSnapshotRequest;
import org.openapis.openapi.models.operations.DataflowProjectsJobsSnapshotResponse;
import org.openapis.openapi.models.operations.DataflowProjectsJobsSnapshotSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsJobsSnapshotSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsJobsSnapshotSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsJobsSnapshotSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsJobsSnapshotSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SnapshotJobRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsJobsSnapshotRequest req = new DataflowProjectsJobsSnapshotRequest("recusandae", "esse") {{
                dollarXgafv = XgafvEnum.TWO;
                snapshotJobRequest = new SnapshotJobRequest() {{
                    description = "quis";
                    location = "eum";
                    snapshotSources = false;
                    ttl = "reiciendis";
                }};;
                accessToken = "provident";
                alt = AltEnum.JSON;
                callback = "ullam";
                fields = "quasi";
                key = "animi";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "provident";
                uploadProtocol = "possimus";
            }};            

            DataflowProjectsJobsSnapshotResponse res = sdk.projects.dataflowProjectsJobsSnapshot(req, new DataflowProjectsJobsSnapshotSecurity() {{
                option1 = new DataflowProjectsJobsSnapshotSecurityOption1("animi", "ex") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.snapshot != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsJobsUpdate

Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsJobsUpdateRequest;
import org.openapis.openapi.models.operations.DataflowProjectsJobsUpdateResponse;
import org.openapis.openapi.models.operations.DataflowProjectsJobsUpdateSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsJobsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsJobsUpdateSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsJobsUpdateSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsJobsUpdateSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AutoscalingSettings;
import org.openapis.openapi.models.shared.AutoscalingSettingsAlgorithmEnum;
import org.openapis.openapi.models.shared.BigQueryIODetails;
import org.openapis.openapi.models.shared.BigTableIODetails;
import org.openapis.openapi.models.shared.ComponentSource;
import org.openapis.openapi.models.shared.ComponentTransform;
import org.openapis.openapi.models.shared.DatastoreIODetails;
import org.openapis.openapi.models.shared.DebugOptions;
import org.openapis.openapi.models.shared.Disk;
import org.openapis.openapi.models.shared.DisplayData;
import org.openapis.openapi.models.shared.EnvironmentFlexResourceSchedulingGoalEnum;
import org.openapis.openapi.models.shared.EnvironmentInput;
import org.openapis.openapi.models.shared.ExecutionStageState;
import org.openapis.openapi.models.shared.ExecutionStageStateExecutionStageStateEnum;
import org.openapis.openapi.models.shared.ExecutionStageSummary;
import org.openapis.openapi.models.shared.ExecutionStageSummaryKindEnum;
import org.openapis.openapi.models.shared.FileIODetails;
import org.openapis.openapi.models.shared.JobCurrentStateEnum;
import org.openapis.openapi.models.shared.JobExecutionInfo;
import org.openapis.openapi.models.shared.JobExecutionStageInfo;
import org.openapis.openapi.models.shared.JobInput;
import org.openapis.openapi.models.shared.JobMetadata;
import org.openapis.openapi.models.shared.JobRequestedStateEnum;
import org.openapis.openapi.models.shared.JobTypeEnum;
import org.openapis.openapi.models.shared.Package;
import org.openapis.openapi.models.shared.PipelineDescription;
import org.openapis.openapi.models.shared.PubSubIODetails;
import org.openapis.openapi.models.shared.RuntimeUpdatableParams;
import org.openapis.openapi.models.shared.SDKHarnessContainerImage;
import org.openapis.openapi.models.shared.SDKVersion;
import org.openapis.openapi.models.shared.SDKVersionSDKSupportStatusEnum;
import org.openapis.openapi.models.shared.SpannerIODetails;
import org.openapis.openapi.models.shared.StageSource;
import org.openapis.openapi.models.shared.Step;
import org.openapis.openapi.models.shared.TaskRunnerSettings;
import org.openapis.openapi.models.shared.TransformSummary;
import org.openapis.openapi.models.shared.TransformSummaryKindEnum;
import org.openapis.openapi.models.shared.WorkerPool;
import org.openapis.openapi.models.shared.WorkerPoolDefaultPackageSetEnum;
import org.openapis.openapi.models.shared.WorkerPoolIpConfigurationEnum;
import org.openapis.openapi.models.shared.WorkerPoolTeardownPolicyEnum;
import org.openapis.openapi.models.shared.WorkerSettings;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsJobsUpdateRequest req = new DataflowProjectsJobsUpdateRequest("aliquid", "accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                jobInput = new JobInput() {{
                    clientRequestId = "doloribus";
                    createTime = "ullam";
                    createdFromSnapshotId = "in";
                    currentState = JobCurrentStateEnum.JOB_STATE_PENDING;
                    currentStateTime = "earum";
                    environment = new EnvironmentInput() {{
                        clusterManagerApiService = "officia";
                        dataset = "laborum";
                        debugOptions = new DebugOptions() {{
                            enableHotKeyLogging = false;
                        }};;
                        experiments = new String[]{{
                            add("modi"),
                            add("voluptatibus"),
                            add("molestias"),
                            add("officiis"),
                        }};
                        flexResourceSchedulingGoal = EnvironmentFlexResourceSchedulingGoalEnum.FLEXRS_COST_OPTIMIZED;
                        internalExperiments = new java.util.HashMap<String, Object>() {{
                            put("vitae", "rerum");
                            put("tempora", "quis");
                            put("inventore", "fugit");
                            put("cumque", "quae");
                        }};
                        sdkPipelineOptions = new java.util.HashMap<String, Object>() {{
                            put("velit", "aspernatur");
                        }};
                        serviceAccountEmail = "eum";
                        serviceKmsKeyName = "eius";
                        serviceOptions = new String[]{{
                            add("at"),
                            add("impedit"),
                            add("eos"),
                        }};
                        tempStoragePrefix = "sapiente";
                        userAgent = new java.util.HashMap<String, Object>() {{
                            put("dicta", "minima");
                            put("beatae", "cupiditate");
                        }};
                        version = new java.util.HashMap<String, Object>() {{
                            put("earum", "soluta");
                            put("hic", "illum");
                            put("eaque", "earum");
                        }};
                        workerPools = new org.openapis.openapi.models.shared.WorkerPool[]{{
                            add(new WorkerPool() {{
                                autoscalingSettings = new AutoscalingSettings() {{
                                    algorithm = AutoscalingSettingsAlgorithmEnum.AUTOSCALING_ALGORITHM_BASIC;
                                    maxNumWorkers = 891801;
                                }};
                                dataDisks = new org.openapis.openapi.models.shared.Disk[]{{
                                    add(new Disk() {{
                                        diskType = "porro";
                                        mountPoint = "suscipit";
                                        sizeGb = 211534;
                                    }}),
                                    add(new Disk() {{
                                        diskType = "fugit";
                                        mountPoint = "cumque";
                                        sizeGb = 684935;
                                    }}),
                                }};
                                defaultPackageSet = WorkerPoolDefaultPackageSetEnum.DEFAULT_PACKAGE_SET_UNKNOWN;
                                diskSizeGb = 656762;
                                diskSourceImage = "necessitatibus";
                                diskType = "nulla";
                                ipConfiguration = WorkerPoolIpConfigurationEnum.WORKER_IP_UNSPECIFIED;
                                kind = "quasi";
                                machineType = "et";
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("natus", "occaecati");
                                    put("suscipit", "adipisci");
                                }};
                                network = "quasi";
                                numThreadsPerWorker = 169025;
                                numWorkers = 984934;
                                onHostMaintenance = "nulla";
                                packages = new org.openapis.openapi.models.shared.Package[]{{
                                    add(new Package() {{
                                        location = "ipsa";
                                        name = "Ms. Marcia Kozey";
                                    }}),
                                    add(new Package() {{
                                        location = "praesentium";
                                        name = "Dr. Van Kassulke Sr.";
                                    }}),
                                    add(new Package() {{
                                        location = "odio";
                                        name = "Joy Jacobson";
                                    }}),
                                    add(new Package() {{
                                        location = "ipsa";
                                        name = "Ralph Hegmann";
                                    }}),
                                }};
                                poolArgs = new java.util.HashMap<String, Object>() {{
                                    put("officia", "suscipit");
                                    put("aliquid", "perferendis");
                                }};
                                sdkHarnessContainerImages = new org.openapis.openapi.models.shared.SDKHarnessContainerImage[]{{
                                    add(new SDKHarnessContainerImage() {{
                                        capabilities = new String[]{{
                                            add("iste"),
                                            add("id"),
                                        }};
                                        containerImage = "ab";
                                        environmentId = "error";
                                        useSingleCorePerContainer = false;
                                    }}),
                                    add(new SDKHarnessContainerImage() {{
                                        capabilities = new String[]{{
                                            add("voluptates"),
                                            add("mollitia"),
                                            add("laborum"),
                                            add("libero"),
                                        }};
                                        containerImage = "ad";
                                        environmentId = "deleniti";
                                        useSingleCorePerContainer = false;
                                    }}),
                                }};
                                subnetwork = "enim";
                                taskrunnerSettings = new TaskRunnerSettings() {{
                                    alsologtostderr = false;
                                    baseTaskDir = "vitae";
                                    baseUrl = "repellendus";
                                    commandlinesFileName = "ex";
                                    continueOnException = false;
                                    dataflowApiVersion = "quo";
                                    harnessCommand = "ex";
                                    languageHint = "ut";
                                    logDir = "ad";
                                    logToSerialconsole = false;
                                    logUploadLocation = "expedita";
                                    oauthScopes = new String[]{{
                                        add("molestias"),
                                    }};
                                    parallelWorkerSettings = new WorkerSettings() {{
                                        baseUrl = "cum";
                                        reportingEnabled = false;
                                        servicePath = "aliquid";
                                        shuffleServicePath = "beatae";
                                        tempStoragePrefix = "voluptatum";
                                        workerId = "omnis";
                                    }};
                                    streamingWorkerMainClass = "veritatis";
                                    taskGroup = "rerum";
                                    taskUser = "est";
                                    tempStoragePrefix = "culpa";
                                    vmId = "voluptatem";
                                    workflowFileName = "sapiente";
                                }};
                                teardownPolicy = WorkerPoolTeardownPolicyEnum.TEARDOWN_NEVER;
                                workerHarnessContainerImage = "architecto";
                                zone = "fuga";
                            }}),
                            add(new WorkerPool() {{
                                autoscalingSettings = new AutoscalingSettings() {{
                                    algorithm = AutoscalingSettingsAlgorithmEnum.AUTOSCALING_ALGORITHM_BASIC;
                                    maxNumWorkers = 891315;
                                }};
                                dataDisks = new org.openapis.openapi.models.shared.Disk[]{{
                                    add(new Disk() {{
                                        diskType = "alias";
                                        mountPoint = "deleniti";
                                        sizeGb = 937219;
                                    }}),
                                }};
                                defaultPackageSet = WorkerPoolDefaultPackageSetEnum.DEFAULT_PACKAGE_SET_NONE;
                                diskSizeGb = 958308;
                                diskSourceImage = "rem";
                                diskType = "minus";
                                ipConfiguration = WorkerPoolIpConfigurationEnum.WORKER_IP_PUBLIC;
                                kind = "asperiores";
                                machineType = "ratione";
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("perferendis", "illum");
                                    put("totam", "impedit");
                                }};
                                network = "quibusdam";
                                numThreadsPerWorker = 720528;
                                numWorkers = 373216;
                                onHostMaintenance = "culpa";
                                packages = new org.openapis.openapi.models.shared.Package[]{{
                                    add(new Package() {{
                                        location = "aliquam";
                                        name = "Cassandra Bogan";
                                    }}),
                                }};
                                poolArgs = new java.util.HashMap<String, Object>() {{
                                    put("architecto", "sit");
                                }};
                                sdkHarnessContainerImages = new org.openapis.openapi.models.shared.SDKHarnessContainerImage[]{{
                                    add(new SDKHarnessContainerImage() {{
                                        capabilities = new String[]{{
                                            add("ab"),
                                        }};
                                        containerImage = "laudantium";
                                        environmentId = "quae";
                                        useSingleCorePerContainer = false;
                                    }}),
                                    add(new SDKHarnessContainerImage() {{
                                        capabilities = new String[]{{
                                            add("fugiat"),
                                        }};
                                        containerImage = "ipsam";
                                        environmentId = "consequuntur";
                                        useSingleCorePerContainer = false;
                                    }}),
                                }};
                                subnetwork = "ipsa";
                                taskrunnerSettings = new TaskRunnerSettings() {{
                                    alsologtostderr = false;
                                    baseTaskDir = "quas";
                                    baseUrl = "eveniet";
                                    commandlinesFileName = "impedit";
                                    continueOnException = false;
                                    dataflowApiVersion = "officiis";
                                    harnessCommand = "esse";
                                    languageHint = "necessitatibus";
                                    logDir = "sed";
                                    logToSerialconsole = false;
                                    logUploadLocation = "veniam";
                                    oauthScopes = new String[]{{
                                        add("expedita"),
                                    }};
                                    parallelWorkerSettings = new WorkerSettings() {{
                                        baseUrl = "eum";
                                        reportingEnabled = false;
                                        servicePath = "vel";
                                        shuffleServicePath = "voluptatum";
                                        tempStoragePrefix = "magnam";
                                        workerId = "exercitationem";
                                    }};
                                    streamingWorkerMainClass = "ab";
                                    taskGroup = "porro";
                                    taskUser = "autem";
                                    tempStoragePrefix = "nobis";
                                    vmId = "laboriosam";
                                    workflowFileName = "recusandae";
                                }};
                                teardownPolicy = WorkerPoolTeardownPolicyEnum.TEARDOWN_POLICY_UNKNOWN;
                                workerHarnessContainerImage = "voluptatem";
                                zone = "exercitationem";
                            }}),
                            add(new WorkerPool() {{
                                autoscalingSettings = new AutoscalingSettings() {{
                                    algorithm = AutoscalingSettingsAlgorithmEnum.AUTOSCALING_ALGORITHM_BASIC;
                                    maxNumWorkers = 95619;
                                }};
                                dataDisks = new org.openapis.openapi.models.shared.Disk[]{{
                                    add(new Disk() {{
                                        diskType = "at";
                                        mountPoint = "vero";
                                        sizeGb = 667593;
                                    }}),
                                    add(new Disk() {{
                                        diskType = "harum";
                                        mountPoint = "sequi";
                                        sizeGb = 987349;
                                    }}),
                                }};
                                defaultPackageSet = WorkerPoolDefaultPackageSetEnum.DEFAULT_PACKAGE_SET_PYTHON;
                                diskSizeGb = 759283;
                                diskSourceImage = "occaecati";
                                diskType = "nemo";
                                ipConfiguration = WorkerPoolIpConfigurationEnum.WORKER_IP_PUBLIC;
                                kind = "blanditiis";
                                machineType = "officia";
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("numquam", "nemo");
                                    put("quos", "eius");
                                }};
                                network = "aspernatur";
                                numThreadsPerWorker = 495970;
                                numWorkers = 200516;
                                onHostMaintenance = "fuga";
                                packages = new org.openapis.openapi.models.shared.Package[]{{
                                    add(new Package() {{
                                        location = "incidunt";
                                        name = "Mrs. Hilda Stark";
                                    }}),
                                    add(new Package() {{
                                        location = "consectetur";
                                        name = "Mae Witting V";
                                    }}),
                                    add(new Package() {{
                                        location = "eos";
                                        name = "Miss Joey Dach";
                                    }}),
                                }};
                                poolArgs = new java.util.HashMap<String, Object>() {{
                                    put("distinctio", "omnis");
                                    put("delectus", "minima");
                                    put("praesentium", "maxime");
                                    put("magnam", "temporibus");
                                }};
                                sdkHarnessContainerImages = new org.openapis.openapi.models.shared.SDKHarnessContainerImage[]{{
                                    add(new SDKHarnessContainerImage() {{
                                        capabilities = new String[]{{
                                            add("itaque"),
                                            add("commodi"),
                                        }};
                                        containerImage = "totam";
                                        environmentId = "earum";
                                        useSingleCorePerContainer = false;
                                    }}),
                                    add(new SDKHarnessContainerImage() {{
                                        capabilities = new String[]{{
                                            add("nam"),
                                            add("vero"),
                                        }};
                                        containerImage = "voluptatem";
                                        environmentId = "ipsam";
                                        useSingleCorePerContainer = false;
                                    }}),
                                    add(new SDKHarnessContainerImage() {{
                                        capabilities = new String[]{{
                                            add("alias"),
                                            add("quasi"),
                                        }};
                                        containerImage = "non";
                                        environmentId = "maiores";
                                        useSingleCorePerContainer = false;
                                    }}),
                                }};
                                subnetwork = "enim";
                                taskrunnerSettings = new TaskRunnerSettings() {{
                                    alsologtostderr = false;
                                    baseTaskDir = "sint";
                                    baseUrl = "nulla";
                                    commandlinesFileName = "deserunt";
                                    continueOnException = false;
                                    dataflowApiVersion = "esse";
                                    harnessCommand = "nemo";
                                    languageHint = "reprehenderit";
                                    logDir = "est";
                                    logToSerialconsole = false;
                                    logUploadLocation = "quis";
                                    oauthScopes = new String[]{{
                                        add("accusamus"),
                                        add("impedit"),
                                        add("hic"),
                                    }};
                                    parallelWorkerSettings = new WorkerSettings() {{
                                        baseUrl = "necessitatibus";
                                        reportingEnabled = false;
                                        servicePath = "asperiores";
                                        shuffleServicePath = "ex";
                                        tempStoragePrefix = "voluptas";
                                        workerId = "debitis";
                                    }};
                                    streamingWorkerMainClass = "delectus";
                                    taskGroup = "quae";
                                    taskUser = "minus";
                                    tempStoragePrefix = "fuga";
                                    vmId = "laborum";
                                    workflowFileName = "consectetur";
                                }};
                                teardownPolicy = WorkerPoolTeardownPolicyEnum.TEARDOWN_POLICY_UNKNOWN;
                                workerHarnessContainerImage = "atque";
                                zone = "ipsum";
                            }}),
                        }};
                        workerRegion = "impedit";
                        workerZone = "magni";
                    }};;
                    executionInfo = new JobExecutionInfo() {{
                        stages = new java.util.HashMap<String, org.openapis.openapi.models.shared.JobExecutionStageInfo>() {{
                            put("repudiandae", new JobExecutionStageInfo() {{
                                stepName = new String[]{{
                                    add("dolore"),
                                    add("iusto"),
                                    add("voluptate"),
                                }};
                            }});
                            put("sequi", new JobExecutionStageInfo() {{
                                stepName = new String[]{{
                                    add("neque"),
                                    add("quo"),
                                }};
                            }});
                            put("deleniti", new JobExecutionStageInfo() {{
                                stepName = new String[]{{
                                    add("iure"),
                                    add("odit"),
                                    add("voluptatibus"),
                                    add("vel"),
                                }};
                            }});
                        }};
                    }};;
                    id = "4d1db1f2-c431-4066-9e96-349e1cf9e06e";
                    jobMetadata = new JobMetadata() {{
                        bigTableDetails = new org.openapis.openapi.models.shared.BigTableIODetails[]{{
                            add(new BigTableIODetails() {{
                                instanceId = "laborum";
                                projectId = "non";
                                tableId = "dolor";
                            }}),
                        }};
                        bigqueryDetails = new org.openapis.openapi.models.shared.BigQueryIODetails[]{{
                            add(new BigQueryIODetails() {{
                                dataset = "sit";
                                projectId = "doloremque";
                                query = "consequatur";
                                table = "officia";
                            }}),
                            add(new BigQueryIODetails() {{
                                dataset = "recusandae";
                                projectId = "ea";
                                query = "quidem";
                                table = "voluptas";
                            }}),
                        }};
                        datastoreDetails = new org.openapis.openapi.models.shared.DatastoreIODetails[]{{
                            add(new DatastoreIODetails() {{
                                namespace = "placeat";
                                projectId = "perspiciatis";
                            }}),
                            add(new DatastoreIODetails() {{
                                namespace = "expedita";
                                projectId = "deleniti";
                            }}),
                            add(new DatastoreIODetails() {{
                                namespace = "a";
                                projectId = "voluptate";
                            }}),
                        }};
                        fileDetails = new org.openapis.openapi.models.shared.FileIODetails[]{{
                            add(new FileIODetails() {{
                                filePattern = "unde";
                            }}),
                            add(new FileIODetails() {{
                                filePattern = "necessitatibus";
                            }}),
                        }};
                        pubsubDetails = new org.openapis.openapi.models.shared.PubSubIODetails[]{{
                            add(new PubSubIODetails() {{
                                subscription = "impedit";
                                topic = "ipsam";
                            }}),
                            add(new PubSubIODetails() {{
                                subscription = "corporis";
                                topic = "est";
                            }}),
                            add(new PubSubIODetails() {{
                                subscription = "error";
                                topic = "esse";
                            }}),
                        }};
                        sdkVersion = new SDKVersion() {{
                            sdkSupportStatus = SDKVersionSDKSupportStatusEnum.SUPPORTED;
                            version = "veritatis";
                            versionDisplayName = "vero";
                        }};;
                        spannerDetails = new org.openapis.openapi.models.shared.SpannerIODetails[]{{
                            add(new SpannerIODetails() {{
                                databaseId = "vitae";
                                instanceId = "inventore";
                                projectId = "dolorem";
                            }}),
                        }};
                        userDisplayProperties = new java.util.HashMap<String, String>() {{
                            put("qui", "iste");
                            put("ex", "nemo");
                        }};
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("libero", "rem");
                        put("dolorum", "odio");
                        put("fugit", "alias");
                    }};
                    location = "magni";
                    name = "Anna Bergnaum";
                    pipelineDescription = new PipelineDescription() {{
                        displayData = new org.openapis.openapi.models.shared.DisplayData[]{{
                            add(new DisplayData() {{
                                boolValue = false;
                                durationValue = "itaque";
                                floatValue = 882.48;
                                int64Value = "ipsum";
                                javaClassValue = "unde";
                                key = "nulla";
                                label = "distinctio";
                                namespace = "maxime";
                                shortStrValue = "quia";
                                strValue = "quia";
                                timestampValue = "nostrum";
                                url = "omnis";
                            }}),
                            add(new DisplayData() {{
                                boolValue = false;
                                durationValue = "libero";
                                floatValue = 1156.61;
                                int64Value = "id";
                                javaClassValue = "libero";
                                key = "fugiat";
                                label = "officia";
                                namespace = "quos";
                                shortStrValue = "placeat";
                                strValue = "sit";
                                timestampValue = "iusto";
                                url = "ipsa";
                            }}),
                        }};
                        executionPipelineStage = new org.openapis.openapi.models.shared.ExecutionStageSummary[]{{
                            add(new ExecutionStageSummary() {{
                                componentSource = new org.openapis.openapi.models.shared.ComponentSource[]{{
                                    add(new ComponentSource() {{
                                        name = "Lena Greenholt";
                                        originalTransformOrCollection = "voluptatem";
                                        userName = "Hazle82";
                                    }}),
                                }};
                                componentTransform = new org.openapis.openapi.models.shared.ComponentTransform[]{{
                                    add(new ComponentTransform() {{
                                        name = "Bryant Lockman";
                                        originalTransform = "accusamus";
                                        userName = "Sophia.Reynolds";
                                    }}),
                                }};
                                id = "65b85efb-d02b-4ae0-be2d-782259e3ea4b";
                                inputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Lindsey Kreiger";
                                        originalTransformOrCollection = "fugit";
                                        sizeBytes = "numquam";
                                        userName = "Desiree_Douglas49";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Santiago Herzog";
                                        originalTransformOrCollection = "voluptatum";
                                        sizeBytes = "cupiditate";
                                        userName = "Erich20";
                                    }}),
                                }};
                                kind = ExecutionStageSummaryKindEnum.READ_KIND;
                                name = "Andre Gleichner";
                                outputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Randolph Bayer";
                                        originalTransformOrCollection = "labore";
                                        sizeBytes = "totam";
                                        userName = "Koby.Hirthe79";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Dean Ortiz";
                                        originalTransformOrCollection = "tempore";
                                        sizeBytes = "vero";
                                        userName = "Bruce.Zieme44";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Viola Hane";
                                        originalTransformOrCollection = "excepturi";
                                        sizeBytes = "dolores";
                                        userName = "Lilliana.Bogan";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Bradford Murazik";
                                        originalTransformOrCollection = "quaerat";
                                        sizeBytes = "commodi";
                                        userName = "Sibyl.Schroeder46";
                                    }}),
                                }};
                                prerequisiteStage = new String[]{{
                                    add("modi"),
                                }};
                            }}),
                            add(new ExecutionStageSummary() {{
                                componentSource = new org.openapis.openapi.models.shared.ComponentSource[]{{
                                    add(new ComponentSource() {{
                                        name = "Ignacio Dietrich";
                                        originalTransformOrCollection = "dicta";
                                        userName = "Trenton.Harvey";
                                    }}),
                                }};
                                componentTransform = new org.openapis.openapi.models.shared.ComponentTransform[]{{
                                    add(new ComponentTransform() {{
                                        name = "Louise Tromp IV";
                                        originalTransform = "maiores";
                                        userName = "Ashleigh_Boyer";
                                    }}),
                                    add(new ComponentTransform() {{
                                        name = "Andy Mayert";
                                        originalTransform = "nostrum";
                                        userName = "Yasmin.Rosenbaum";
                                    }}),
                                    add(new ComponentTransform() {{
                                        name = "Matt Macejkovic";
                                        originalTransform = "odio";
                                        userName = "Amelia55";
                                    }}),
                                }};
                                id = "9dbb30fc-b33e-4a05-9b19-7cd44e2f52d8";
                                inputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Mrs. Allen Heidenreich";
                                        originalTransformOrCollection = "tempore";
                                        sizeBytes = "nisi";
                                        userName = "Wilbert_Hahn";
                                    }}),
                                }};
                                kind = ExecutionStageSummaryKindEnum.FLATTEN_KIND;
                                name = "Alma Rempel";
                                outputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Erin Wiza";
                                        originalTransformOrCollection = "debitis";
                                        sizeBytes = "labore";
                                        userName = "Maya.Davis";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Heidi O'Reilly";
                                        originalTransformOrCollection = "fugiat";
                                        sizeBytes = "unde";
                                        userName = "Sidney11";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Sherman Brown";
                                        originalTransformOrCollection = "fugiat";
                                        sizeBytes = "ad";
                                        userName = "Briana.Halvorson49";
                                    }}),
                                }};
                                prerequisiteStage = new String[]{{
                                    add("illo"),
                                    add("ab"),
                                    add("incidunt"),
                                }};
                            }}),
                            add(new ExecutionStageSummary() {{
                                componentSource = new org.openapis.openapi.models.shared.ComponentSource[]{{
                                    add(new ComponentSource() {{
                                        name = "Geoffrey Hartmann";
                                        originalTransformOrCollection = "earum";
                                        userName = "Irma_Lakin";
                                    }}),
                                    add(new ComponentSource() {{
                                        name = "Jimmy Konopelski II";
                                        originalTransformOrCollection = "assumenda";
                                        userName = "Elliott_Schamberger";
                                    }}),
                                    add(new ComponentSource() {{
                                        name = "William Schneider";
                                        originalTransformOrCollection = "expedita";
                                        userName = "Keely_McLaughlin49";
                                    }}),
                                    add(new ComponentSource() {{
                                        name = "Cristina Murphy";
                                        originalTransformOrCollection = "dolorem";
                                        userName = "Harrison.Russel";
                                    }}),
                                }};
                                componentTransform = new org.openapis.openapi.models.shared.ComponentTransform[]{{
                                    add(new ComponentTransform() {{
                                        name = "Brenda Fay";
                                        originalTransform = "quidem";
                                        userName = "Myra11";
                                    }}),
                                }};
                                id = "80f739ae-9e05-47eb-809e-2810331f3981";
                                inputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Mr. Bethany Koch";
                                        originalTransformOrCollection = "ea";
                                        sizeBytes = "aperiam";
                                        userName = "Jena78";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Vincent Romaguera";
                                        originalTransformOrCollection = "soluta";
                                        sizeBytes = "natus";
                                        userName = "Rolando94";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Angelica Waters";
                                        originalTransformOrCollection = "dignissimos";
                                        sizeBytes = "vero";
                                        userName = "Christop.Feeney12";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Mr. Marcia Fritsch";
                                        originalTransformOrCollection = "deserunt";
                                        sizeBytes = "delectus";
                                        userName = "Demario.Reichel";
                                    }}),
                                }};
                                kind = ExecutionStageSummaryKindEnum.GROUP_BY_KEY_KIND;
                                name = "Casey Gleason PhD";
                                outputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Kathy Leuschke";
                                        originalTransformOrCollection = "similique";
                                        sizeBytes = "minima";
                                        userName = "Monique26";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Robin O'Hara";
                                        originalTransformOrCollection = "nostrum";
                                        sizeBytes = "molestiae";
                                        userName = "Ervin26";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Maria Veum";
                                        originalTransformOrCollection = "numquam";
                                        sizeBytes = "dolorum";
                                        userName = "Reta20";
                                    }}),
                                }};
                                prerequisiteStage = new String[]{{
                                    add("itaque"),
                                    add("minus"),
                                }};
                            }}),
                            add(new ExecutionStageSummary() {{
                                componentSource = new org.openapis.openapi.models.shared.ComponentSource[]{{
                                    add(new ComponentSource() {{
                                        name = "Miss Mathew Lynch";
                                        originalTransformOrCollection = "autem";
                                        userName = "Marley.Abshire";
                                    }}),
                                }};
                                componentTransform = new org.openapis.openapi.models.shared.ComponentTransform[]{{
                                    add(new ComponentTransform() {{
                                        name = "Mr. Marcos Boehm";
                                        originalTransform = "delectus";
                                        userName = "Macey.Stokes";
                                    }}),
                                    add(new ComponentTransform() {{
                                        name = "Mary Vandervort II";
                                        originalTransform = "qui";
                                        userName = "Christopher.Tremblay10";
                                    }}),
                                    add(new ComponentTransform() {{
                                        name = "Pauline Rowe";
                                        originalTransform = "officia";
                                        userName = "Morris39";
                                    }}),
                                }};
                                id = "6c723ffd-a9e0-46be-a482-5c1fc0e115c8";
                                inputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Van Wilkinson V";
                                        originalTransformOrCollection = "ullam";
                                        sizeBytes = "dolore";
                                        userName = "Dion.Ward16";
                                    }}),
                                }};
                                kind = ExecutionStageSummaryKindEnum.SINGLETON_KIND;
                                name = "Domingo Rutherford";
                                outputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Stephen Marvin";
                                        originalTransformOrCollection = "iure";
                                        sizeBytes = "odio";
                                        userName = "Colton.Tremblay";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Melanie Cruickshank";
                                        originalTransformOrCollection = "distinctio";
                                        sizeBytes = "eius";
                                        userName = "Anabelle.Lebsack33";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Luis Schumm";
                                        originalTransformOrCollection = "doloribus";
                                        sizeBytes = "fugiat";
                                        userName = "Marcella11";
                                    }}),
                                }};
                                prerequisiteStage = new String[]{{
                                    add("similique"),
                                }};
                            }}),
                        }};
                        originalPipelineTransform = new org.openapis.openapi.models.shared.TransformSummary[]{{
                            add(new TransformSummary() {{
                                displayData = new org.openapis.openapi.models.shared.DisplayData[]{{
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "nemo";
                                        floatValue = 9878.9;
                                        int64Value = "possimus";
                                        javaClassValue = "unde";
                                        key = "incidunt";
                                        label = "explicabo";
                                        namespace = "ipsam";
                                        shortStrValue = "cupiditate";
                                        strValue = "optio";
                                        timestampValue = "alias";
                                        url = "quidem";
                                    }}),
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "nesciunt";
                                        floatValue = 4124.33;
                                        int64Value = "sapiente";
                                        javaClassValue = "consequuntur";
                                        key = "veniam";
                                        label = "debitis";
                                        namespace = "officia";
                                        shortStrValue = "sint";
                                        strValue = "ut";
                                        timestampValue = "numquam";
                                        url = "tenetur";
                                    }}),
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "adipisci";
                                        floatValue = 7285.59;
                                        int64Value = "in";
                                        javaClassValue = "minima";
                                        key = "ex";
                                        label = "minus";
                                        namespace = "ab";
                                        shortStrValue = "beatae";
                                        strValue = "hic";
                                        timestampValue = "nisi";
                                        url = "quisquam";
                                    }}),
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "dolor";
                                        floatValue = 4965.48;
                                        int64Value = "fuga";
                                        javaClassValue = "minima";
                                        key = "architecto";
                                        label = "qui";
                                        namespace = "aliquid";
                                        shortStrValue = "magni";
                                        strValue = "incidunt";
                                        timestampValue = "adipisci";
                                        url = "praesentium";
                                    }}),
                                }};
                                id = "35bbc05a-23a4-45ce-bc5f-de10a0ce2169";
                                inputCollectionName = new String[]{{
                                    add("ullam"),
                                    add("architecto"),
                                    add("accusantium"),
                                    add("perferendis"),
                                }};
                                kind = TransformSummaryKindEnum.UNKNOWN_KIND;
                                name = "Noel Kertzmann";
                                outputCollectionName = new String[]{{
                                    add("recusandae"),
                                    add("velit"),
                                }};
                            }}),
                        }};
                        stepNamesHash = "magnam";
                    }};;
                    projectId = "dignissimos";
                    replaceJobId = "laboriosam";
                    replacedByJobId = "sed";
                    requestedState = JobRequestedStateEnum.JOB_STATE_UPDATED;
                    runtimeUpdatableParams = new RuntimeUpdatableParams() {{
                        maxNumWorkers = 616941;
                        minNumWorkers = 588152;
                    }};;
                    satisfiesPzs = false;
                    stageStates = new org.openapis.openapi.models.shared.ExecutionStageState[]{{
                        add(new ExecutionStageState() {{
                            currentStateTime = "doloribus";
                            executionStageName = "facilis";
                            executionStageState = ExecutionStageStateExecutionStageStateEnum.JOB_STATE_PENDING;
                        }}),
                        add(new ExecutionStageState() {{
                            currentStateTime = "itaque";
                            executionStageName = "laboriosam";
                            executionStageState = ExecutionStageStateExecutionStageStateEnum.JOB_STATE_DRAINING;
                        }}),
                        add(new ExecutionStageState() {{
                            currentStateTime = "modi";
                            executionStageName = "perspiciatis";
                            executionStageState = ExecutionStageStateExecutionStageStateEnum.JOB_STATE_RESOURCE_CLEANING_UP;
                        }}),
                    }};
                    startTime = "cum";
                    steps = new org.openapis.openapi.models.shared.Step[]{{
                        add(new Step() {{
                            kind = "libero";
                            name = "Barry Walsh";
                            properties = new java.util.HashMap<String, Object>() {{
                                put("autem", "quo");
                                put("nesciunt", "illum");
                                put("nemo", "illum");
                                put("facilis", "non");
                            }};
                        }}),
                    }};
                    stepsLocation = "mollitia";
                    tempFiles = new String[]{{
                        add("recusandae"),
                        add("distinctio"),
                        add("pariatur"),
                        add("ad"),
                    }};
                    transformNameMapping = new java.util.HashMap<String, String>() {{
                        put("laborum", "eveniet");
                        put("laborum", "incidunt");
                        put("maxime", "ipsam");
                        put("alias", "suscipit");
                    }};
                    type = JobTypeEnum.JOB_TYPE_BATCH;
                }};;
                accessToken = "molestias";
                alt = AltEnum.PROTO;
                callback = "est";
                fields = "occaecati";
                key = "labore";
                location = "quo";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "fugit";
                updateMask = "aliquid";
                uploadType = "magnam";
                uploadProtocol = "quaerat";
            }};            

            DataflowProjectsJobsUpdateResponse res = sdk.projects.dataflowProjectsJobsUpdate(req, new DataflowProjectsJobsUpdateSecurity() {{
                option1 = new DataflowProjectsJobsUpdateSecurityOption1("eligendi", "hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## dataflowProjectsJobsWorkItemsLease

Leases a dataflow WorkItem to run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsJobsWorkItemsLeaseRequest;
import org.openapis.openapi.models.operations.DataflowProjectsJobsWorkItemsLeaseResponse;
import org.openapis.openapi.models.operations.DataflowProjectsJobsWorkItemsLeaseSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsJobsWorkItemsLeaseSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsJobsWorkItemsLeaseSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsJobsWorkItemsLeaseSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsJobsWorkItemsLeaseSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LeaseWorkItemRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsJobsWorkItemsLeaseRequest req = new DataflowProjectsJobsWorkItemsLeaseRequest("nostrum", "officiis") {{
                dollarXgafv = XgafvEnum.TWO;
                leaseWorkItemRequest = new LeaseWorkItemRequest() {{
                    currentWorkerTime = "nulla";
                    location = "error";
                    requestedLeaseDuration = "mollitia";
                    unifiedWorkerRequest = new java.util.HashMap<String, Object>() {{
                        put("nostrum", "esse");
                        put("corrupti", "fuga");
                    }};
                    workItemTypes = new String[]{{
                        add("impedit"),
                        add("quasi"),
                        add("deserunt"),
                        add("quod"),
                    }};
                    workerCapabilities = new String[]{{
                        add("doloremque"),
                        add("voluptatem"),
                    }};
                    workerId = "facere";
                }};;
                accessToken = "necessitatibus";
                alt = AltEnum.PROTO;
                callback = "consequatur";
                fields = "eaque";
                key = "architecto";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "blanditiis";
                uploadProtocol = "quae";
            }};            

            DataflowProjectsJobsWorkItemsLeaseResponse res = sdk.projects.dataflowProjectsJobsWorkItemsLease(req, new DataflowProjectsJobsWorkItemsLeaseSecurity() {{
                option1 = new DataflowProjectsJobsWorkItemsLeaseSecurityOption1("magni", "officiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.leaseWorkItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsJobsWorkItemsReportStatus

Reports the status of dataflow WorkItems leased by a worker.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsJobsWorkItemsReportStatusRequest;
import org.openapis.openapi.models.operations.DataflowProjectsJobsWorkItemsReportStatusResponse;
import org.openapis.openapi.models.operations.DataflowProjectsJobsWorkItemsReportStatusSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsJobsWorkItemsReportStatusSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsJobsWorkItemsReportStatusSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsJobsWorkItemsReportStatusSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsJobsWorkItemsReportStatusSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApproximateProgress;
import org.openapis.openapi.models.shared.ApproximateReportedProgress;
import org.openapis.openapi.models.shared.ConcatPosition;
import org.openapis.openapi.models.shared.CounterMetadata;
import org.openapis.openapi.models.shared.CounterMetadataKindEnum;
import org.openapis.openapi.models.shared.CounterMetadataStandardUnitsEnum;
import org.openapis.openapi.models.shared.CounterStructuredName;
import org.openapis.openapi.models.shared.CounterStructuredNameAndMetadata;
import org.openapis.openapi.models.shared.CounterStructuredNameOriginEnum;
import org.openapis.openapi.models.shared.CounterStructuredNamePortionEnum;
import org.openapis.openapi.models.shared.CounterUpdate;
import org.openapis.openapi.models.shared.DerivedSource;
import org.openapis.openapi.models.shared.DerivedSourceDerivationModeEnum;
import org.openapis.openapi.models.shared.DistributionUpdate;
import org.openapis.openapi.models.shared.DynamicSourceSplit;
import org.openapis.openapi.models.shared.FloatingPointList;
import org.openapis.openapi.models.shared.FloatingPointMean;
import org.openapis.openapi.models.shared.Histogram;
import org.openapis.openapi.models.shared.IntegerGauge;
import org.openapis.openapi.models.shared.IntegerList;
import org.openapis.openapi.models.shared.IntegerMean;
import org.openapis.openapi.models.shared.MetricStructuredName;
import org.openapis.openapi.models.shared.MetricUpdate;
import org.openapis.openapi.models.shared.NameAndKind;
import org.openapis.openapi.models.shared.NameAndKindKindEnum;
import org.openapis.openapi.models.shared.Position;
import org.openapis.openapi.models.shared.ReportWorkItemStatusRequest;
import org.openapis.openapi.models.shared.ReportedParallelism;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.SourceFork;
import org.openapis.openapi.models.shared.SourceGetMetadataResponse;
import org.openapis.openapi.models.shared.SourceMetadata;
import org.openapis.openapi.models.shared.SourceOperationResponse;
import org.openapis.openapi.models.shared.SourceSplitResponse;
import org.openapis.openapi.models.shared.SourceSplitResponseOutcomeEnum;
import org.openapis.openapi.models.shared.SourceSplitShard;
import org.openapis.openapi.models.shared.SourceSplitShardDerivationModeEnum;
import org.openapis.openapi.models.shared.SplitInt64;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.StringList;
import org.openapis.openapi.models.shared.WorkItemStatus;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsJobsWorkItemsReportStatusRequest req = new DataflowProjectsJobsWorkItemsReportStatusRequest("sed", "necessitatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                reportWorkItemStatusRequest = new ReportWorkItemStatusRequest() {{
                    currentWorkerTime = "ipsa";
                    location = "excepturi";
                    unifiedWorkerRequest = new java.util.HashMap<String, Object>() {{
                        put("maiores", "laudantium");
                        put("maiores", "alias");
                        put("asperiores", "rem");
                        put("dicta", "suscipit");
                    }};
                    workItemStatuses = new org.openapis.openapi.models.shared.WorkItemStatus[]{{
                        add(new WorkItemStatus() {{
                            completed = false;
                            counterUpdates = new org.openapis.openapi.models.shared.CounterUpdate[]{{
                                add(new CounterUpdate() {{
                                    boolean_ = false;
                                    cumulative = false;
                                    distribution = new DistributionUpdate() {{
                                        count = new SplitInt64() {{
                                            highBits = 244569;
                                            lowBits = 260588L;
                                        }};
                                        histogram = new Histogram() {{
                                            bucketCounts = new String[]{{
                                                add("in"),
                                                add("eligendi"),
                                            }};
                                            firstBucketOffset = 94697;
                                        }};
                                        max = new SplitInt64() {{
                                            highBits = 203621;
                                            lowBits = 876649L;
                                        }};
                                        min = new SplitInt64() {{
                                            highBits = 566312;
                                            lowBits = 37534L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 185816;
                                            lowBits = 771241L;
                                        }};
                                        sumOfSquares = 1047.36;
                                    }};
                                    floatingPoint = 2783.29;
                                    floatingPointList = new FloatingPointList() {{
                                        elements = new Double[]{{
                                            add(1391.33),
                                        }};
                                    }};
                                    floatingPointMean = new FloatingPointMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 357639;
                                            lowBits = 701441L;
                                        }};
                                        sum = 46.54;
                                    }};
                                    integer = new SplitInt64() {{
                                        highBits = 624498;
                                        lowBits = 424854L;
                                    }};
                                    integerGauge = new IntegerGauge() {{
                                        timestamp = "accusantium";
                                        value = new SplitInt64() {{
                                            highBits = 664197;
                                            lowBits = 388169L;
                                        }};
                                    }};
                                    integerList = new IntegerList() {{
                                        elements = new org.openapis.openapi.models.shared.SplitInt64[]{{
                                            add(new SplitInt64() {{
                                                highBits = 555679;
                                                lowBits = 85794L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 356440;
                                                lowBits = 62688L;
                                            }}),
                                        }};
                                    }};
                                    integerMean = new IntegerMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 631719;
                                            lowBits = 278116L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 462583;
                                            lowBits = 169312L;
                                        }};
                                    }};
                                    internal = "deserunt";
                                    nameAndKind = new NameAndKind() {{
                                        kind = NameAndKindKindEnum.LATEST_VALUE;
                                        name = "Jeremy Douglas";
                                    }};
                                    shortId = "cupiditate";
                                    stringList = new StringList() {{
                                        elements = new String[]{{
                                            add("excepturi"),
                                            add("maiores"),
                                        }};
                                    }};
                                    structuredNameAndMetadata = new CounterStructuredNameAndMetadata() {{
                                        metadata = new CounterMetadata() {{
                                            description = "laudantium";
                                            kind = CounterMetadataKindEnum.MAX;
                                            otherUnits = "reiciendis";
                                            standardUnits = CounterMetadataStandardUnitsEnum.BYTES_PER_SEC;
                                        }};
                                        name = new CounterStructuredName() {{
                                            componentStepName = "nemo";
                                            executionStepName = "ipsa";
                                            inputIndex = 787916;
                                            name = "Morris Kreiger";
                                            origin = CounterStructuredNameOriginEnum.USER;
                                            originNamespace = "nobis";
                                            originalRequestingStepName = "perspiciatis";
                                            originalStepName = "accusantium";
                                            portion = CounterStructuredNamePortionEnum.ALL;
                                            workerId = "minus";
                                        }};
                                    }};
                                }}),
                                add(new CounterUpdate() {{
                                    boolean_ = false;
                                    cumulative = false;
                                    distribution = new DistributionUpdate() {{
                                        count = new SplitInt64() {{
                                            highBits = 417539;
                                            lowBits = 908734L;
                                        }};
                                        histogram = new Histogram() {{
                                            bucketCounts = new String[]{{
                                                add("tempore"),
                                                add("quidem"),
                                                add("modi"),
                                                add("voluptates"),
                                            }};
                                            firstBucketOffset = 145435;
                                        }};
                                        max = new SplitInt64() {{
                                            highBits = 259377;
                                            lowBits = 194058L;
                                        }};
                                        min = new SplitInt64() {{
                                            highBits = 758194;
                                            lowBits = 992887L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 459875;
                                            lowBits = 500021L;
                                        }};
                                        sumOfSquares = 5736.1;
                                    }};
                                    floatingPoint = 9965.41;
                                    floatingPointList = new FloatingPointList() {{
                                        elements = new Double[]{{
                                            add(6586.04),
                                            add(9792.87),
                                            add(9304.29),
                                            add(8615.91),
                                        }};
                                    }};
                                    floatingPointMean = new FloatingPointMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 643419;
                                            lowBits = 359097L;
                                        }};
                                        sum = 2465.77;
                                    }};
                                    integer = new SplitInt64() {{
                                        highBits = 887701;
                                        lowBits = 315022L;
                                    }};
                                    integerGauge = new IntegerGauge() {{
                                        timestamp = "officia";
                                        value = new SplitInt64() {{
                                            highBits = 902979;
                                            lowBits = 429997L;
                                        }};
                                    }};
                                    integerList = new IntegerList() {{
                                        elements = new org.openapis.openapi.models.shared.SplitInt64[]{{
                                            add(new SplitInt64() {{
                                                highBits = 35742;
                                                lowBits = 637840L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 770128;
                                                lowBits = 97896L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 502106;
                                                lowBits = 260911L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 786189;
                                                lowBits = 177929L;
                                            }}),
                                        }};
                                    }};
                                    integerMean = new IntegerMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 748023;
                                            lowBits = 620054L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 793568;
                                            lowBits = 154389L;
                                        }};
                                    }};
                                    internal = "magnam";
                                    nameAndKind = new NameAndKind() {{
                                        kind = NameAndKindKindEnum.MEAN;
                                        name = "Isaac Lowe";
                                    }};
                                    shortId = "amet";
                                    stringList = new StringList() {{
                                        elements = new String[]{{
                                            add("modi"),
                                            add("perferendis"),
                                            add("necessitatibus"),
                                        }};
                                    }};
                                    structuredNameAndMetadata = new CounterStructuredNameAndMetadata() {{
                                        metadata = new CounterMetadata() {{
                                            description = "architecto";
                                            kind = CounterMetadataKindEnum.OR;
                                            otherUnits = "dolore";
                                            standardUnits = CounterMetadataStandardUnitsEnum.BYTES_PER_SEC;
                                        }};
                                        name = new CounterStructuredName() {{
                                            componentStepName = "maiores";
                                            executionStepName = "neque";
                                            inputIndex = 139745;
                                            name = "Mrs. Jerome Hintz";
                                            origin = CounterStructuredNameOriginEnum.SYSTEM;
                                            originNamespace = "ad";
                                            originalRequestingStepName = "nisi";
                                            originalStepName = "tenetur";
                                            portion = CounterStructuredNamePortionEnum.KEY;
                                            workerId = "quibusdam";
                                        }};
                                    }};
                                }}),
                                add(new CounterUpdate() {{
                                    boolean_ = false;
                                    cumulative = false;
                                    distribution = new DistributionUpdate() {{
                                        count = new SplitInt64() {{
                                            highBits = 366480;
                                            lowBits = 382764L;
                                        }};
                                        histogram = new Histogram() {{
                                            bucketCounts = new String[]{{
                                                add("sit"),
                                                add("quidem"),
                                                add("repellendus"),
                                                add("perferendis"),
                                            }};
                                            firstBucketOffset = 660536;
                                        }};
                                        max = new SplitInt64() {{
                                            highBits = 958146;
                                            lowBits = 152364L;
                                        }};
                                        min = new SplitInt64() {{
                                            highBits = 823572;
                                            lowBits = 996072L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 921060;
                                            lowBits = 100233L;
                                        }};
                                        sumOfSquares = 2406.96;
                                    }};
                                    floatingPoint = 8671.15;
                                    floatingPointList = new FloatingPointList() {{
                                        elements = new Double[]{{
                                            add(2942.66),
                                            add(9767.62),
                                            add(4353.53),
                                        }};
                                    }};
                                    floatingPointMean = new FloatingPointMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 127087;
                                            lowBits = 795457L;
                                        }};
                                        sum = 7466.88;
                                    }};
                                    integer = new SplitInt64() {{
                                        highBits = 677509;
                                        lowBits = 242531L;
                                    }};
                                    integerGauge = new IntegerGauge() {{
                                        timestamp = "earum";
                                        value = new SplitInt64() {{
                                            highBits = 510020;
                                            lowBits = 621140L;
                                        }};
                                    }};
                                    integerList = new IntegerList() {{
                                        elements = new org.openapis.openapi.models.shared.SplitInt64[]{{
                                            add(new SplitInt64() {{
                                                highBits = 97810;
                                                lowBits = 649032L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 884361;
                                                lowBits = 687589L;
                                            }}),
                                        }};
                                    }};
                                    integerMean = new IntegerMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 769156;
                                            lowBits = 42615L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 711871;
                                            lowBits = 549237L;
                                        }};
                                    }};
                                    internal = "eaque";
                                    nameAndKind = new NameAndKind() {{
                                        kind = NameAndKindKindEnum.AND;
                                        name = "Velma Cummings";
                                    }};
                                    shortId = "dolor";
                                    stringList = new StringList() {{
                                        elements = new String[]{{
                                            add("sed"),
                                            add("accusamus"),
                                            add("optio"),
                                        }};
                                    }};
                                    structuredNameAndMetadata = new CounterStructuredNameAndMetadata() {{
                                        metadata = new CounterMetadata() {{
                                            description = "delectus";
                                            kind = CounterMetadataKindEnum.SET;
                                            otherUnits = "quo";
                                            standardUnits = CounterMetadataStandardUnitsEnum.NANOSECONDS;
                                        }};
                                        name = new CounterStructuredName() {{
                                            componentStepName = "asperiores";
                                            executionStepName = "voluptatum";
                                            inputIndex = 614770;
                                            name = "Dr. Ruth Blanda";
                                            origin = CounterStructuredNameOriginEnum.USER;
                                            originNamespace = "possimus";
                                            originalRequestingStepName = "neque";
                                            originalStepName = "pariatur";
                                            portion = CounterStructuredNamePortionEnum.KEY;
                                            workerId = "sapiente";
                                        }};
                                    }};
                                }}),
                                add(new CounterUpdate() {{
                                    boolean_ = false;
                                    cumulative = false;
                                    distribution = new DistributionUpdate() {{
                                        count = new SplitInt64() {{
                                            highBits = 652515;
                                            lowBits = 65121L;
                                        }};
                                        histogram = new Histogram() {{
                                            bucketCounts = new String[]{{
                                                add("aperiam"),
                                                add("non"),
                                                add("voluptates"),
                                            }};
                                            firstBucketOffset = 324052;
                                        }};
                                        max = new SplitInt64() {{
                                            highBits = 305047;
                                            lowBits = 788165L;
                                        }};
                                        min = new SplitInt64() {{
                                            highBits = 557987;
                                            lowBits = 162450L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 982445;
                                            lowBits = 81581L;
                                        }};
                                        sumOfSquares = 4004.48;
                                    }};
                                    floatingPoint = 5131.85;
                                    floatingPointList = new FloatingPointList() {{
                                        elements = new Double[]{{
                                            add(2213.29),
                                            add(4008.79),
                                            add(2323.16),
                                        }};
                                    }};
                                    floatingPointMean = new FloatingPointMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 768195;
                                            lowBits = 525917L;
                                        }};
                                        sum = 5277.15;
                                    }};
                                    integer = new SplitInt64() {{
                                        highBits = 498534;
                                        lowBits = 237523L;
                                    }};
                                    integerGauge = new IntegerGauge() {{
                                        timestamp = "recusandae";
                                        value = new SplitInt64() {{
                                            highBits = 271306;
                                            lowBits = 503449L;
                                        }};
                                    }};
                                    integerList = new IntegerList() {{
                                        elements = new org.openapis.openapi.models.shared.SplitInt64[]{{
                                            add(new SplitInt64() {{
                                                highBits = 196374;
                                                lowBits = 532320L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 27078;
                                                lowBits = 703189L;
                                            }}),
                                        }};
                                    }};
                                    integerMean = new IntegerMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 84178;
                                            lowBits = 949280L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 419858;
                                            lowBits = 694088L;
                                        }};
                                    }};
                                    internal = "totam";
                                    nameAndKind = new NameAndKind() {{
                                        kind = NameAndKindKindEnum.SET;
                                        name = "Martin Kovacek";
                                    }};
                                    shortId = "commodi";
                                    stringList = new StringList() {{
                                        elements = new String[]{{
                                            add("fuga"),
                                        }};
                                    }};
                                    structuredNameAndMetadata = new CounterStructuredNameAndMetadata() {{
                                        metadata = new CounterMetadata() {{
                                            description = "aut";
                                            kind = CounterMetadataKindEnum.MAX;
                                            otherUnits = "maxime";
                                            standardUnits = CounterMetadataStandardUnitsEnum.MILLISECONDS;
                                        }};
                                        name = new CounterStructuredName() {{
                                            componentStepName = "iste";
                                            executionStepName = "ullam";
                                            inputIndex = 755738;
                                            name = "Shane Mayert IV";
                                            origin = CounterStructuredNameOriginEnum.SYSTEM;
                                            originNamespace = "libero";
                                            originalRequestingStepName = "ipsam";
                                            originalStepName = "quasi";
                                            portion = CounterStructuredNamePortionEnum.VALUE;
                                            workerId = "dicta";
                                        }};
                                    }};
                                }}),
                            }};
                            dynamicSourceSplit = new DynamicSourceSplit() {{
                                primary = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("beatae", "cumque");
                                                put("delectus", "labore");
                                                put("expedita", "corrupti");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("atque", "officiis");
                                                put("cum", "pariatur");
                                                put("sapiente", "quo");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("quod", "minus");
                                                put("porro", "id");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("occaecati", "libero");
                                                put("quo", "esse");
                                                put("hic", "maxime");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("soluta", "fugit");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "pariatur";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("recusandae", "veritatis");
                                            put("aut", "laudantium");
                                            put("iusto", "dolor");
                                            put("voluptates", "tempora");
                                        }};
                                    }};
                                }};
                                residual = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_UNKNOWN;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("voluptatem", "eum");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("eum", "reprehenderit");
                                                put("voluptatum", "blanditiis");
                                                put("nihil", "atque");
                                                put("rerum", "deserunt");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("nostrum", "atque");
                                                put("architecto", "est");
                                                put("enim", "rem");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("quae", "quas");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "placeat";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("labore", "sapiente");
                                            put("saepe", "delectus");
                                        }};
                                    }};
                                }};
                            }};
                            errors = new org.openapis.openapi.models.shared.Status[]{{
                                add(new Status() {{
                                    code = 620126;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("quaerat", "doloribus");
                                            put("quia", "officiis");
                                            put("mollitia", "cumque");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("enim", "eum");
                                            put("nemo", "illum");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("sit", "odio");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("asperiores", "recusandae");
                                            put("voluptates", "praesentium");
                                            put("dicta", "fugit");
                                            put("sit", "aliquid");
                                        }}),
                                    }};
                                    message = "necessitatibus";
                                }}),
                                add(new Status() {{
                                    code = 148975;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("nesciunt", "delectus");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("aliquam", "deserunt");
                                            put("modi", "sunt");
                                            put("impedit", "eius");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("ipsa", "at");
                                            put("dolorem", "repellat");
                                            put("aspernatur", "inventore");
                                        }}),
                                    }};
                                    message = "sequi";
                                }}),
                                add(new Status() {{
                                    code = 143078;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("eaque", "dolorem");
                                            put("architecto", "aperiam");
                                            put("aspernatur", "nulla");
                                            put("enim", "illo");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("delectus", "numquam");
                                            put("optio", "nobis");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("repellat", "quae");
                                            put("deleniti", "expedita");
                                        }}),
                                    }};
                                    message = "hic";
                                }}),
                            }};
                            metricUpdates = new org.openapis.openapi.models.shared.MetricUpdate[]{{
                                add(new MetricUpdate() {{
                                    cumulative = false;
                                    distribution = "aliquid";
                                    gauge = "sed";
                                    internal = "beatae";
                                    kind = "similique";
                                    meanCount = "ea";
                                    meanSum = "animi";
                                    name = new MetricStructuredName() {{
                                        context = new java.util.HashMap<String, String>() {{
                                            put("tenetur", "dignissimos");
                                            put("esse", "animi");
                                        }};
                                        name = "Erik Upton";
                                        origin = "officiis";
                                    }};
                                    scalar = "eius";
                                    set = "rerum";
                                    updateTime = "itaque";
                                }}),
                                add(new MetricUpdate() {{
                                    cumulative = false;
                                    distribution = "dignissimos";
                                    gauge = "ipsam";
                                    internal = "explicabo";
                                    kind = "impedit";
                                    meanCount = "aliquid";
                                    meanSum = "quis";
                                    name = new MetricStructuredName() {{
                                        context = new java.util.HashMap<String, String>() {{
                                            put("ipsum", "ut");
                                            put("quaerat", "architecto");
                                            put("praesentium", "eveniet");
                                        }};
                                        name = "Kristy Renner DDS";
                                        origin = "quos";
                                    }};
                                    scalar = "temporibus";
                                    set = "sint";
                                    updateTime = "iusto";
                                }}),
                                add(new MetricUpdate() {{
                                    cumulative = false;
                                    distribution = "enim";
                                    gauge = "accusamus";
                                    internal = "aperiam";
                                    kind = "voluptates";
                                    meanCount = "laudantium";
                                    meanSum = "tempora";
                                    name = new MetricStructuredName() {{
                                        context = new java.util.HashMap<String, String>() {{
                                            put("omnis", "illum");
                                        }};
                                        name = "Roman Lind";
                                        origin = "architecto";
                                    }};
                                    scalar = "aliquam";
                                    set = "labore";
                                    updateTime = "maiores";
                                }}),
                            }};
                            progress = new ApproximateProgress() {{
                                percentComplete = 1966.46;
                                position = new Position() {{
                                    byteOffset = "saepe";
                                    concatPosition = new ConcatPosition() {{
                                        index = 8904;
                                        position = new Position() {{}};
                                    }};
                                    end = false;
                                    key = "esse";
                                    recordIndex = "debitis";
                                    shufflePosition = "facere";
                                }};
                                remainingTime = "quisquam";
                            }};
                            reportIndex = "cumque";
                            reportedProgress = new ApproximateReportedProgress() {{
                                consumedParallelism = new ReportedParallelism() {{
                                    isInfinite = false;
                                    value = 3028.78;
                                }};
                                fractionConsumed = 6778.95;
                                position = new Position() {{
                                    byteOffset = "deserunt";
                                    concatPosition = new ConcatPosition() {{
                                        index = 319834;
                                        position = new Position() {{}};
                                    }};
                                    end = false;
                                    key = "reiciendis";
                                    recordIndex = "sequi";
                                    shufflePosition = "porro";
                                }};
                                remainingParallelism = new ReportedParallelism() {{
                                    isInfinite = false;
                                    value = 6715.28;
                                }};
                            }};
                            requestedLeaseDuration = "nobis";
                            sourceFork = new SourceFork() {{
                                primary = new SourceSplitShard() {{
                                    derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("ipsam", "officia");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("reprehenderit", "quia");
                                                put("necessitatibus", "accusantium");
                                                put("ad", "nisi");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("quia", "laudantium");
                                                put("sed", "odit");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("expedita", "eos");
                                            put("repellendus", "nesciunt");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "ipsa";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("dolore", "esse");
                                            put("accusantium", "distinctio");
                                            put("sapiente", "quam");
                                        }};
                                    }};
                                }};
                                primarySource = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("culpa", "voluptatum");
                                                put("iusto", "quod");
                                                put("voluptatibus", "voluptas");
                                                put("non", "ullam");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("voluptas", "doloribus");
                                                put("animi", "recusandae");
                                                put("corporis", "non");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("distinctio", "maiores");
                                            put("laboriosam", "voluptatem");
                                            put("optio", "sequi");
                                            put("sunt", "vitae");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "voluptatibus";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("sed", "amet");
                                        }};
                                    }};
                                }};
                                residual = new SourceSplitShard() {{
                                    derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("temporibus", "ratione");
                                                put("dolor", "nisi");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("reiciendis", "itaque");
                                                put("vitae", "est");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("quod", "minus");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "quos";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("maiores", "odio");
                                            put("provident", "sapiente");
                                            put("aperiam", "similique");
                                            put("nesciunt", "provident");
                                        }};
                                    }};
                                }};
                                residualSource = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_INDEPENDENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("alias", "impedit");
                                                put("sequi", "commodi");
                                                put("labore", "expedita");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("quisquam", "sunt");
                                                put("enim", "nulla");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("distinctio", "mollitia");
                                                put("impedit", "accusamus");
                                                put("et", "quas");
                                                put("blanditiis", "cum");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("impedit", "tempora");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("repudiandae", "sed");
                                            put("impedit", "quas");
                                            put("impedit", "vel");
                                            put("eligendi", "recusandae");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "ex";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("veritatis", "maiores");
                                        }};
                                    }};
                                }};
                            }};
                            sourceOperationResponse = new SourceOperationResponse() {{
                                getMetadata = new SourceGetMetadataResponse() {{
                                    metadata = new SourceMetadata() {{
                                        estimatedSizeBytes = "itaque";
                                        infinite = false;
                                        producesSortedKeys = false;
                                    }};
                                }};
                                split = new SourceSplitResponse() {{
                                    bundles = new org.openapis.openapi.models.shared.DerivedSource[]{{
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("dignissimos", "minus");
                                                        put("distinctio", "possimus");
                                                        put("cum", "suscipit");
                                                        put("saepe", "earum");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("nihil", "quaerat");
                                                    put("ipsum", "ducimus");
                                                    put("laudantium", "rerum");
                                                    put("deserunt", "odit");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "ad";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("beatae", "iusto");
                                                }};
                                            }};
                                        }}),
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_INDEPENDENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("nulla", "impedit");
                                                        put("cupiditate", "illo");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("laborum", "illum");
                                                        put("fugit", "maxime");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("repellat", "nostrum");
                                                    put("illum", "quibusdam");
                                                    put("commodi", "esse");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "explicabo";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("temporibus", "optio");
                                                }};
                                            }};
                                        }}),
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_UNKNOWN;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("culpa", "repudiandae");
                                                        put("aspernatur", "sapiente");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("officia", "suscipit");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("ducimus", "doloremque");
                                                        put("perferendis", "laudantium");
                                                        put("iusto", "corrupti");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("quis", "iure");
                                                        put("ab", "quaerat");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("sapiente", "corporis");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "est";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("quisquam", "provident");
                                                    put("laudantium", "nam");
                                                }};
                                            }};
                                        }}),
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_INDEPENDENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("minima", "tempora");
                                                        put("perferendis", "corrupti");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("fugiat", "numquam");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("cum", "nobis");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "similique";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("impedit", "nisi");
                                                    put("cumque", "soluta");
                                                    put("fugiat", "laboriosam");
                                                    put("nam", "enim");
                                                }};
                                            }};
                                        }}),
                                    }};
                                    outcome = SourceSplitResponseOutcomeEnum.SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED;
                                    shards = new org.openapis.openapi.models.shared.SourceSplitShard[]{{
                                        add(new SourceSplitShard() {{
                                            derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("voluptatem", "provident");
                                                        put("adipisci", "accusantium");
                                                        put("magnam", "repellat");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("explicabo", "vel");
                                                        put("cum", "id");
                                                        put("possimus", "fugit");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("nostrum", "sequi");
                                                        put("voluptatum", "quasi");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("nobis", "tempora");
                                                        put("voluptate", "eius");
                                                        put("expedita", "aperiam");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("possimus", "fugit");
                                                    put("voluptatem", "repudiandae");
                                                    put("corporis", "ea");
                                                    put("eos", "aliquam");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "blanditiis";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("maiores", "asperiores");
                                                    put("autem", "nesciunt");
                                                    put("cupiditate", "animi");
                                                    put("provident", "beatae");
                                                }};
                                            }};
                                        }}),
                                    }};
                                }};
                            }};
                            stopPosition = new Position() {{
                                byteOffset = "ipsa";
                                concatPosition = new ConcatPosition() {{
                                    index = 650914;
                                    position = new Position() {{}};
                                }};
                                end = false;
                                key = "nam";
                                recordIndex = "assumenda";
                                shufflePosition = "quo";
                            }};
                            totalThrottlerWaitTimeSeconds = 6844.99;
                            workItemId = "tempore";
                        }}),
                        add(new WorkItemStatus() {{
                            completed = false;
                            counterUpdates = new org.openapis.openapi.models.shared.CounterUpdate[]{{
                                add(new CounterUpdate() {{
                                    boolean_ = false;
                                    cumulative = false;
                                    distribution = new DistributionUpdate() {{
                                        count = new SplitInt64() {{
                                            highBits = 146742;
                                            lowBits = 383066L;
                                        }};
                                        histogram = new Histogram() {{
                                            bucketCounts = new String[]{{
                                                add("nisi"),
                                                add("aliquid"),
                                            }};
                                            firstBucketOffset = 589712;
                                        }};
                                        max = new SplitInt64() {{
                                            highBits = 385760;
                                            lowBits = 881568L;
                                        }};
                                        min = new SplitInt64() {{
                                            highBits = 68292;
                                            lowBits = 929067L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 790305;
                                            lowBits = 53529L;
                                        }};
                                        sumOfSquares = 49.29;
                                    }};
                                    floatingPoint = 1816.22;
                                    floatingPointList = new FloatingPointList() {{
                                        elements = new Double[]{{
                                            add(1122.24),
                                        }};
                                    }};
                                    floatingPointMean = new FloatingPointMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 696828;
                                            lowBits = 193334L;
                                        }};
                                        sum = 2274.31;
                                    }};
                                    integer = new SplitInt64() {{
                                        highBits = 346608;
                                        lowBits = 847018L;
                                    }};
                                    integerGauge = new IntegerGauge() {{
                                        timestamp = "praesentium";
                                        value = new SplitInt64() {{
                                            highBits = 601626;
                                            lowBits = 629461L;
                                        }};
                                    }};
                                    integerList = new IntegerList() {{
                                        elements = new org.openapis.openapi.models.shared.SplitInt64[]{{
                                            add(new SplitInt64() {{
                                                highBits = 732142;
                                                lowBits = 225809L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 890112;
                                                lowBits = 751381L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 989089;
                                                lowBits = 836053L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 662857;
                                                lowBits = 542017L;
                                            }}),
                                        }};
                                    }};
                                    integerMean = new IntegerMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 845365;
                                            lowBits = 27400L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 778039;
                                            lowBits = 329973L;
                                        }};
                                    }};
                                    internal = "aliquam";
                                    nameAndKind = new NameAndKind() {{
                                        kind = NameAndKindKindEnum.OR;
                                        name = "Amos Baumbach Jr.";
                                    }};
                                    shortId = "tempora";
                                    stringList = new StringList() {{
                                        elements = new String[]{{
                                            add("quam"),
                                            add("atque"),
                                            add("officia"),
                                        }};
                                    }};
                                    structuredNameAndMetadata = new CounterStructuredNameAndMetadata() {{
                                        metadata = new CounterMetadata() {{
                                            description = "ex";
                                            kind = CounterMetadataKindEnum.SUM;
                                            otherUnits = "a";
                                            standardUnits = CounterMetadataStandardUnitsEnum.TIMESTAMP_MSEC;
                                        }};
                                        name = new CounterStructuredName() {{
                                            componentStepName = "veritatis";
                                            executionStepName = "quod";
                                            inputIndex = 951103;
                                            name = "Carol Johns";
                                            origin = CounterStructuredNameOriginEnum.USER;
                                            originNamespace = "voluptate";
                                            originalRequestingStepName = "quam";
                                            originalStepName = "quod";
                                            portion = CounterStructuredNamePortionEnum.ALL;
                                            workerId = "sapiente";
                                        }};
                                    }};
                                }}),
                                add(new CounterUpdate() {{
                                    boolean_ = false;
                                    cumulative = false;
                                    distribution = new DistributionUpdate() {{
                                        count = new SplitInt64() {{
                                            highBits = 968689;
                                            lowBits = 798953L;
                                        }};
                                        histogram = new Histogram() {{
                                            bucketCounts = new String[]{{
                                                add("inventore"),
                                                add("facere"),
                                            }};
                                            firstBucketOffset = 804936;
                                        }};
                                        max = new SplitInt64() {{
                                            highBits = 681578;
                                            lowBits = 66596L;
                                        }};
                                        min = new SplitInt64() {{
                                            highBits = 405789;
                                            lowBits = 235970L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 982409;
                                            lowBits = 153097L;
                                        }};
                                        sumOfSquares = 6571.41;
                                    }};
                                    floatingPoint = 1975.19;
                                    floatingPointList = new FloatingPointList() {{
                                        elements = new Double[]{{
                                            add(5283.15),
                                            add(216.68),
                                            add(6716.9),
                                            add(6091.72),
                                        }};
                                    }};
                                    floatingPointMean = new FloatingPointMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 470321;
                                            lowBits = 945190L;
                                        }};
                                        sum = 9596.96;
                                    }};
                                    integer = new SplitInt64() {{
                                        highBits = 242013;
                                        lowBits = 240292L;
                                    }};
                                    integerGauge = new IntegerGauge() {{
                                        timestamp = "non";
                                        value = new SplitInt64() {{
                                            highBits = 763140;
                                            lowBits = 850196L;
                                        }};
                                    }};
                                    integerList = new IntegerList() {{
                                        elements = new org.openapis.openapi.models.shared.SplitInt64[]{{
                                            add(new SplitInt64() {{
                                                highBits = 945320;
                                                lowBits = 562066L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 371295;
                                                lowBits = 456222L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 675755;
                                                lowBits = 596185L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 915647;
                                                lowBits = 428810L;
                                            }}),
                                        }};
                                    }};
                                    integerMean = new IntegerMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 95123;
                                            lowBits = 555194L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 484942;
                                            lowBits = 416934L;
                                        }};
                                    }};
                                    internal = "porro";
                                    nameAndKind = new NameAndKind() {{
                                        kind = NameAndKindKindEnum.MEAN;
                                        name = "Dr. Willis Cassin";
                                    }};
                                    shortId = "natus";
                                    stringList = new StringList() {{
                                        elements = new String[]{{
                                            add("a"),
                                            add("impedit"),
                                            add("unde"),
                                            add("ut"),
                                        }};
                                    }};
                                    structuredNameAndMetadata = new CounterStructuredNameAndMetadata() {{
                                        metadata = new CounterMetadata() {{
                                            description = "facere";
                                            kind = CounterMetadataKindEnum.MIN;
                                            otherUnits = "doloribus";
                                            standardUnits = CounterMetadataStandardUnitsEnum.TIMESTAMP_NSEC;
                                        }};
                                        name = new CounterStructuredName() {{
                                            componentStepName = "quisquam";
                                            executionStepName = "facere";
                                            inputIndex = 491380;
                                            name = "Rene Ernser Jr.";
                                            origin = CounterStructuredNameOriginEnum.SYSTEM;
                                            originNamespace = "laboriosam";
                                            originalRequestingStepName = "laborum";
                                            originalStepName = "autem";
                                            portion = CounterStructuredNamePortionEnum.VALUE;
                                            workerId = "explicabo";
                                        }};
                                    }};
                                }}),
                            }};
                            dynamicSourceSplit = new DynamicSourceSplit() {{
                                primary = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("alias", "velit");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("quis", "velit");
                                            put("ratione", "quas");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "maxime";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("cumque", "doloremque");
                                            put("totam", "iure");
                                            put("maiores", "est");
                                            put("fugit", "veritatis");
                                        }};
                                    }};
                                }};
                                residual = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("ipsam", "consequuntur");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("quidem", "non");
                                                put("beatae", "sunt");
                                                put("molestias", "beatae");
                                                put("autem", "ducimus");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("molestias", "necessitatibus");
                                                put("ipsum", "impedit");
                                                put("quos", "illum");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("voluptatem", "non");
                                            put("quaerat", "consequatur");
                                            put("laudantium", "repellendus");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "commodi";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("consectetur", "voluptas");
                                            put("quaerat", "earum");
                                            put("tenetur", "assumenda");
                                            put("dolore", "enim");
                                        }};
                                    }};
                                }};
                            }};
                            errors = new org.openapis.openapi.models.shared.Status[]{{
                                add(new Status() {{
                                    code = 598193;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("quibusdam", "dicta");
                                            put("quia", "commodi");
                                        }}),
                                    }};
                                    message = "neque";
                                }}),
                                add(new Status() {{
                                    code = 843659;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("officiis", "omnis");
                                            put("neque", "corporis");
                                            put("quod", "dolores");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("excepturi", "recusandae");
                                            put("quos", "dicta");
                                            put("sapiente", "ipsum");
                                            put("consequatur", "soluta");
                                        }}),
                                    }};
                                    message = "necessitatibus";
                                }}),
                            }};
                            metricUpdates = new org.openapis.openapi.models.shared.MetricUpdate[]{{
                                add(new MetricUpdate() {{
                                    cumulative = false;
                                    distribution = "recusandae";
                                    gauge = "labore";
                                    internal = "adipisci";
                                    kind = "magni";
                                    meanCount = "aperiam";
                                    meanSum = "dolores";
                                    name = new MetricStructuredName() {{
                                        context = new java.util.HashMap<String, String>() {{
                                            put("iusto", "magni");
                                            put("beatae", "aliquid");
                                            put("ad", "voluptate");
                                            put("vel", "minima");
                                        }};
                                        name = "Kristin Howell IV";
                                        origin = "dignissimos";
                                    }};
                                    scalar = "doloremque";
                                    set = "assumenda";
                                    updateTime = "provident";
                                }}),
                            }};
                            progress = new ApproximateProgress() {{
                                percentComplete = 8184.22;
                                position = new Position() {{
                                    byteOffset = "sed";
                                    concatPosition = new ConcatPosition() {{
                                        index = 80448;
                                        position = new Position() {{}};
                                    }};
                                    end = false;
                                    key = "voluptatibus";
                                    recordIndex = "unde";
                                    shufflePosition = "deserunt";
                                }};
                                remainingTime = "repellendus";
                            }};
                            reportIndex = "consequatur";
                            reportedProgress = new ApproximateReportedProgress() {{
                                consumedParallelism = new ReportedParallelism() {{
                                    isInfinite = false;
                                    value = 2379.72;
                                }};
                                fractionConsumed = 390.69;
                                position = new Position() {{
                                    byteOffset = "optio";
                                    concatPosition = new ConcatPosition() {{
                                        index = 269731;
                                        position = new Position() {{}};
                                    }};
                                    end = false;
                                    key = "debitis";
                                    recordIndex = "cumque";
                                    shufflePosition = "maxime";
                                }};
                                remainingParallelism = new ReportedParallelism() {{
                                    isInfinite = false;
                                    value = 922.64;
                                }};
                            }};
                            requestedLeaseDuration = "beatae";
                            sourceFork = new SourceFork() {{
                                primary = new SourceSplitShard() {{
                                    derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("ratione", "iure");
                                                put("tempora", "eos");
                                                put("natus", "voluptatem");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("laudantium", "facilis");
                                            put("laudantium", "ullam");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "aut";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("officia", "quaerat");
                                        }};
                                    }};
                                }};
                                primarySource = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_INDEPENDENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("sapiente", "esse");
                                                put("neque", "quidem");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("praesentium", "tempora");
                                                put("ipsam", "officiis");
                                                put("sequi", "magni");
                                                put("voluptatem", "est");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("veritatis", "error");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("numquam", "rerum");
                                                put("dolorum", "quibusdam");
                                                put("earum", "excepturi");
                                                put("numquam", "molestiae");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("error", "animi");
                                            put("voluptatum", "aliquid");
                                            put("nihil", "facilis");
                                            put("optio", "incidunt");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "eos";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("dolores", "aliquid");
                                            put("eum", "vel");
                                        }};
                                    }};
                                }};
                                residual = new SourceSplitShard() {{
                                    derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_INDEPENDENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("suscipit", "quibusdam");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("impedit", "culpa");
                                                put("atque", "voluptates");
                                                put("maiores", "nemo");
                                                put("illo", "doloribus");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("expedita", "modi");
                                                put("cumque", "ipsam");
                                                put("occaecati", "ipsum");
                                                put("accusamus", "quisquam");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("fugit", "quo");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "temporibus";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("id", "quibusdam");
                                            put("ipsa", "accusamus");
                                            put("placeat", "quam");
                                        }};
                                    }};
                                }};
                                residualSource = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("facere", "nobis");
                                                put("at", "molestias");
                                                put("aut", "temporibus");
                                                put("tenetur", "incidunt");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("corrupti", "similique");
                                                put("dolore", "esse");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("iste", "amet");
                                                put("occaecati", "aut");
                                                put("impedit", "minima");
                                                put("quos", "blanditiis");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("voluptatem", "provident");
                                                put("quas", "ipsum");
                                                put("vero", "fuga");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("maiores", "error");
                                            put("recusandae", "a");
                                            put("consectetur", "sapiente");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "voluptatibus";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("repellendus", "omnis");
                                            put("delectus", "odio");
                                            put("voluptatibus", "aut");
                                            put("quam", "omnis");
                                        }};
                                    }};
                                }};
                            }};
                            sourceOperationResponse = new SourceOperationResponse() {{
                                getMetadata = new SourceGetMetadataResponse() {{
                                    metadata = new SourceMetadata() {{
                                        estimatedSizeBytes = "similique";
                                        infinite = false;
                                        producesSortedKeys = false;
                                    }};
                                }};
                                split = new SourceSplitResponse() {{
                                    bundles = new org.openapis.openapi.models.shared.DerivedSource[]{{
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_INDEPENDENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("quis", "in");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("non", "porro");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("soluta", "ipsa");
                                                        put("reiciendis", "labore");
                                                        put("vero", "eos");
                                                        put("quas", "quasi");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("praesentium", "iusto");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("enim", "iure");
                                                    put("laudantium", "modi");
                                                    put("magnam", "accusamus");
                                                    put("nulla", "repudiandae");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "quibusdam";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("enim", "animi");
                                                    put("unde", "quae");
                                                    put("eum", "nostrum");
                                                }};
                                            }};
                                        }}),
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("blanditiis", "quidem");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("reiciendis", "placeat");
                                                        put("dolores", "consequatur");
                                                        put("nesciunt", "quia");
                                                        put("quidem", "voluptas");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("laudantium", "dignissimos");
                                                    put("omnis", "omnis");
                                                    put("fugit", "dolorem");
                                                    put("quidem", "molestiae");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "debitis";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("dolor", "ad");
                                                }};
                                            }};
                                        }}),
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("reprehenderit", "deserunt");
                                                        put("itaque", "et");
                                                        put("eos", "impedit");
                                                        put("ex", "praesentium");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("vitae", "tenetur");
                                                        put("laudantium", "aspernatur");
                                                        put("eligendi", "repudiandae");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("inventore", "ullam");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "iusto";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("voluptate", "sed");
                                                }};
                                            }};
                                        }}),
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_UNKNOWN;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("amet", "voluptate");
                                                        put("voluptate", "pariatur");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("a", "fuga");
                                                    put("totam", "cupiditate");
                                                    put("at", "doloribus");
                                                    put("omnis", "quam");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "exercitationem";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("sequi", "quis");
                                                    put("commodi", "vel");
                                                    put("rem", "aliquid");
                                                    put("aperiam", "perspiciatis");
                                                }};
                                            }};
                                        }}),
                                    }};
                                    outcome = SourceSplitResponseOutcomeEnum.SOURCE_SPLIT_OUTCOME_UNKNOWN;
                                    shards = new org.openapis.openapi.models.shared.SourceSplitShard[]{{
                                        add(new SourceSplitShard() {{
                                            derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("repellendus", "temporibus");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("minima", "a");
                                                        put("beatae", "vitae");
                                                        put("veritatis", "facere");
                                                        put("earum", "laborum");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("voluptatem", "odit");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("pariatur", "enim");
                                                        put("numquam", "architecto");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("quaerat", "facere");
                                                    put("vitae", "omnis");
                                                    put("alias", "sapiente");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "officiis";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("quia", "vitae");
                                                    put("odio", "quas");
                                                    put("ipsa", "distinctio");
                                                }};
                                            }};
                                        }}),
                                        add(new SourceSplitShard() {{
                                            derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("sit", "possimus");
                                                        put("distinctio", "distinctio");
                                                        put("assumenda", "illum");
                                                        put("soluta", "magnam");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("tempora", "esse");
                                                        put("doloremque", "corrupti");
                                                        put("reiciendis", "facilis");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("repudiandae", "amet");
                                                        put("natus", "ab");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("eum", "rerum");
                                                        put("placeat", "ab");
                                                        put("ad", "blanditiis");
                                                        put("porro", "labore");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("ut", "earum");
                                                    put("ullam", "numquam");
                                                    put("enim", "cupiditate");
                                                    put("occaecati", "itaque");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "fuga";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("modi", "aspernatur");
                                                }};
                                            }};
                                        }}),
                                        add(new SourceSplitShard() {{
                                            derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_UNKNOWN;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("eveniet", "sint");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("qui", "accusantium");
                                                        put("consequatur", "impedit");
                                                        put("recusandae", "voluptate");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("est", "et");
                                                    put("expedita", "quibusdam");
                                                    put("quos", "maiores");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "quidem";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("culpa", "doloremque");
                                                    put("fuga", "dicta");
                                                }};
                                            }};
                                        }}),
                                        add(new SourceSplitShard() {{
                                            derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_UNKNOWN;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("officiis", "dignissimos");
                                                        put("fugit", "ratione");
                                                        put("possimus", "quaerat");
                                                        put("aut", "natus");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("delectus", "deserunt");
                                                        put("ratione", "ipsa");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("iste", "deserunt");
                                                    put("hic", "ducimus");
                                                    put("consequuntur", "ipsam");
                                                    put("libero", "quia");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "omnis";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("qui", "explicabo");
                                                }};
                                            }};
                                        }}),
                                    }};
                                }};
                            }};
                            stopPosition = new Position() {{
                                byteOffset = "consequatur";
                                concatPosition = new ConcatPosition() {{
                                    index = 228133;
                                    position = new Position() {{}};
                                }};
                                end = false;
                                key = "consequatur";
                                recordIndex = "fugiat";
                                shufflePosition = "voluptatum";
                            }};
                            totalThrottlerWaitTimeSeconds = 2451.16;
                            workItemId = "hic";
                        }}),
                        add(new WorkItemStatus() {{
                            completed = false;
                            counterUpdates = new org.openapis.openapi.models.shared.CounterUpdate[]{{
                                add(new CounterUpdate() {{
                                    boolean_ = false;
                                    cumulative = false;
                                    distribution = new DistributionUpdate() {{
                                        count = new SplitInt64() {{
                                            highBits = 644299;
                                            lowBits = 931953L;
                                        }};
                                        histogram = new Histogram() {{
                                            bucketCounts = new String[]{{
                                                add("iusto"),
                                                add("dignissimos"),
                                                add("provident"),
                                            }};
                                            firstBucketOffset = 581889;
                                        }};
                                        max = new SplitInt64() {{
                                            highBits = 828735;
                                            lowBits = 126367L;
                                        }};
                                        min = new SplitInt64() {{
                                            highBits = 142856;
                                            lowBits = 876821L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 533723;
                                            lowBits = 760793L;
                                        }};
                                        sumOfSquares = 988.05;
                                    }};
                                    floatingPoint = 9981.99;
                                    floatingPointList = new FloatingPointList() {{
                                        elements = new Double[]{{
                                            add(2977.23),
                                            add(5943.79),
                                            add(2270.17),
                                        }};
                                    }};
                                    floatingPointMean = new FloatingPointMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 546089;
                                            lowBits = 125161L;
                                        }};
                                        sum = 3642.84;
                                    }};
                                    integer = new SplitInt64() {{
                                        highBits = 964210;
                                        lowBits = 848439L;
                                    }};
                                    integerGauge = new IntegerGauge() {{
                                        timestamp = "porro";
                                        value = new SplitInt64() {{
                                            highBits = 309634;
                                            lowBits = 166324L;
                                        }};
                                    }};
                                    integerList = new IntegerList() {{
                                        elements = new org.openapis.openapi.models.shared.SplitInt64[]{{
                                            add(new SplitInt64() {{
                                                highBits = 552687;
                                                lowBits = 448482L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 413768;
                                                lowBits = 805421L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 151486;
                                                lowBits = 791538L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 162073;
                                                lowBits = 820900L;
                                            }}),
                                        }};
                                    }};
                                    integerMean = new IntegerMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 963470;
                                            lowBits = 690871L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 304964;
                                            lowBits = 757962L;
                                        }};
                                    }};
                                    internal = "hic";
                                    nameAndKind = new NameAndKind() {{
                                        kind = NameAndKindKindEnum.SET;
                                        name = "Della Koelpin";
                                    }};
                                    shortId = "sequi";
                                    stringList = new StringList() {{
                                        elements = new String[]{{
                                            add("reiciendis"),
                                        }};
                                    }};
                                    structuredNameAndMetadata = new CounterStructuredNameAndMetadata() {{
                                        metadata = new CounterMetadata() {{
                                            description = "quos";
                                            kind = CounterMetadataKindEnum.MAX;
                                            otherUnits = "vitae";
                                            standardUnits = CounterMetadataStandardUnitsEnum.TIMESTAMP_NSEC;
                                        }};
                                        name = new CounterStructuredName() {{
                                            componentStepName = "nam";
                                            executionStepName = "architecto";
                                            inputIndex = 698117;
                                            name = "Jesse Effertz";
                                            origin = CounterStructuredNameOriginEnum.USER;
                                            originNamespace = "ab";
                                            originalRequestingStepName = "magnam";
                                            originalStepName = "pariatur";
                                            portion = CounterStructuredNamePortionEnum.VALUE;
                                            workerId = "autem";
                                        }};
                                    }};
                                }}),
                                add(new CounterUpdate() {{
                                    boolean_ = false;
                                    cumulative = false;
                                    distribution = new DistributionUpdate() {{
                                        count = new SplitInt64() {{
                                            highBits = 731931;
                                            lowBits = 924825L;
                                        }};
                                        histogram = new Histogram() {{
                                            bucketCounts = new String[]{{
                                                add("officia"),
                                                add("voluptas"),
                                            }};
                                            firstBucketOffset = 516363;
                                        }};
                                        max = new SplitInt64() {{
                                            highBits = 359106;
                                            lowBits = 567241L;
                                        }};
                                        min = new SplitInt64() {{
                                            highBits = 616619;
                                            lowBits = 536456L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 900411;
                                            lowBits = 136770L;
                                        }};
                                        sumOfSquares = 1731.93;
                                    }};
                                    floatingPoint = 6715.68;
                                    floatingPointList = new FloatingPointList() {{
                                        elements = new Double[]{{
                                            add(1787.17),
                                            add(276.53),
                                            add(8381.76),
                                            add(6603.39),
                                        }};
                                    }};
                                    floatingPointMean = new FloatingPointMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 62907;
                                            lowBits = 414439L;
                                        }};
                                        sum = 9544.01;
                                    }};
                                    integer = new SplitInt64() {{
                                        highBits = 791282;
                                        lowBits = 148958L;
                                    }};
                                    integerGauge = new IntegerGauge() {{
                                        timestamp = "nam";
                                        value = new SplitInt64() {{
                                            highBits = 155473;
                                            lowBits = 480108L;
                                        }};
                                    }};
                                    integerList = new IntegerList() {{
                                        elements = new org.openapis.openapi.models.shared.SplitInt64[]{{
                                            add(new SplitInt64() {{
                                                highBits = 643864;
                                                lowBits = 149815L;
                                            }}),
                                        }};
                                    }};
                                    integerMean = new IntegerMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 501773;
                                            lowBits = 573994L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 811519;
                                            lowBits = 356904L;
                                        }};
                                    }};
                                    internal = "molestiae";
                                    nameAndKind = new NameAndKind() {{
                                        kind = NameAndKindKindEnum.LATEST_VALUE;
                                        name = "Maurice Friesen";
                                    }};
                                    shortId = "ipsa";
                                    stringList = new StringList() {{
                                        elements = new String[]{{
                                            add("dolor"),
                                            add("occaecati"),
                                        }};
                                    }};
                                    structuredNameAndMetadata = new CounterStructuredNameAndMetadata() {{
                                        metadata = new CounterMetadata() {{
                                            description = "quibusdam";
                                            kind = CounterMetadataKindEnum.SUM;
                                            otherUnits = "consequuntur";
                                            standardUnits = CounterMetadataStandardUnitsEnum.BYTES_PER_SEC;
                                        }};
                                        name = new CounterStructuredName() {{
                                            componentStepName = "eius";
                                            executionStepName = "commodi";
                                            inputIndex = 371217;
                                            name = "Mae Gleichner";
                                            origin = CounterStructuredNameOriginEnum.SYSTEM;
                                            originNamespace = "doloremque";
                                            originalRequestingStepName = "odio";
                                            originalStepName = "sit";
                                            portion = CounterStructuredNamePortionEnum.KEY;
                                            workerId = "tempora";
                                        }};
                                    }};
                                }}),
                            }};
                            dynamicSourceSplit = new DynamicSourceSplit() {{
                                primary = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("libero", "ratione");
                                                put("molestiae", "optio");
                                                put("saepe", "maiores");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("sed", "eos");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("quis", "vitae");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "occaecati";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("fugiat", "quidem");
                                            put("exercitationem", "veniam");
                                        }};
                                    }};
                                }};
                                residual = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_INDEPENDENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("similique", "possimus");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("suscipit", "ex");
                                            put("sint", "est");
                                            put("doloribus", "provident");
                                            put("alias", "deserunt");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "fugit";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("quo", "molestiae");
                                            put("maxime", "facere");
                                        }};
                                    }};
                                }};
                            }};
                            errors = new org.openapis.openapi.models.shared.Status[]{{
                                add(new Status() {{
                                    code = 587122;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("maiores", "voluptatem");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("laudantium", "unde");
                                            put("corrupti", "quae");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("ea", "libero");
                                            put("nam", "amet");
                                            put("adipisci", "minus");
                                            put("hic", "similique");
                                        }}),
                                    }};
                                    message = "fuga";
                                }}),
                                add(new Status() {{
                                    code = 233271;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("cumque", "adipisci");
                                            put("veritatis", "nam");
                                            put("voluptatibus", "magnam");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("ducimus", "itaque");
                                        }}),
                                    }};
                                    message = "necessitatibus";
                                }}),
                                add(new Status() {{
                                    code = 252854;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("sapiente", "alias");
                                            put("impedit", "numquam");
                                            put("aspernatur", "nobis");
                                            put("nihil", "voluptatum");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("vitae", "ullam");
                                            put("nisi", "consequuntur");
                                            put("voluptas", "ratione");
                                            put("excepturi", "corrupti");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("perferendis", "quibusdam");
                                            put("impedit", "ducimus");
                                            put("nisi", "nisi");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("fugit", "dolore");
                                        }}),
                                    }};
                                    message = "maxime";
                                }}),
                                add(new Status() {{
                                    code = 803144;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("ea", "impedit");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("optio", "est");
                                            put("inventore", "consequuntur");
                                            put("repellendus", "sit");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("enim", "aspernatur");
                                        }}),
                                    }};
                                    message = "perspiciatis";
                                }}),
                            }};
                            metricUpdates = new org.openapis.openapi.models.shared.MetricUpdate[]{{
                                add(new MetricUpdate() {{
                                    cumulative = false;
                                    distribution = "odio";
                                    gauge = "alias";
                                    internal = "quidem";
                                    kind = "deleniti";
                                    meanCount = "possimus";
                                    meanSum = "ipsam";
                                    name = new MetricStructuredName() {{
                                        context = new java.util.HashMap<String, String>() {{
                                            put("fugit", "aspernatur");
                                            put("at", "illum");
                                        }};
                                        name = "Kirk Heidenreich";
                                        origin = "facilis";
                                    }};
                                    scalar = "placeat";
                                    set = "reiciendis";
                                    updateTime = "dolores";
                                }}),
                            }};
                            progress = new ApproximateProgress() {{
                                percentComplete = 2953.07;
                                position = new Position() {{
                                    byteOffset = "pariatur";
                                    concatPosition = new ConcatPosition() {{
                                        index = 705307;
                                        position = new Position() {{}};
                                    }};
                                    end = false;
                                    key = "cupiditate";
                                    recordIndex = "nemo";
                                    shufflePosition = "natus";
                                }};
                                remainingTime = "nisi";
                            }};
                            reportIndex = "provident";
                            reportedProgress = new ApproximateReportedProgress() {{
                                consumedParallelism = new ReportedParallelism() {{
                                    isInfinite = false;
                                    value = 2305.94;
                                }};
                                fractionConsumed = 2213.19;
                                position = new Position() {{
                                    byteOffset = "nostrum";
                                    concatPosition = new ConcatPosition() {{
                                        index = 184738;
                                        position = new Position() {{}};
                                    }};
                                    end = false;
                                    key = "tenetur";
                                    recordIndex = "molestiae";
                                    shufflePosition = "dolore";
                                }};
                                remainingParallelism = new ReportedParallelism() {{
                                    isInfinite = false;
                                    value = 3563.43;
                                }};
                            }};
                            requestedLeaseDuration = "velit";
                            sourceFork = new SourceFork() {{
                                primary = new SourceSplitShard() {{
                                    derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_UNKNOWN;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("numquam", "fugiat");
                                                put("molestiae", "quas");
                                                put("repellendus", "saepe");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("distinctio", "vel");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("iste", "nesciunt");
                                                put("corrupti", "cupiditate");
                                                put("voluptatibus", "ullam");
                                                put("dolorum", "soluta");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("in", "delectus");
                                            put("commodi", "commodi");
                                            put("fugit", "ullam");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "ullam";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("est", "qui");
                                        }};
                                    }};
                                }};
                                primarySource = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("qui", "deserunt");
                                                put("eligendi", "incidunt");
                                                put("deleniti", "dolor");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("reiciendis", "possimus");
                                            put("odit", "consectetur");
                                            put("inventore", "minima");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "facilis";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("deserunt", "nisi");
                                            put("ipsam", "voluptatem");
                                            put("illo", "iure");
                                        }};
                                    }};
                                }};
                                residual = new SourceSplitShard() {{
                                    derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_INDEPENDENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("ea", "asperiores");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("quidem", "asperiores");
                                                put("eum", "deserunt");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("nemo", "molestias");
                                                put("architecto", "expedita");
                                                put("quisquam", "praesentium");
                                                put("facilis", "assumenda");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("maiores", "ipsum");
                                                put("commodi", "vitae");
                                                put("fugit", "nam");
                                                put("ex", "neque");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("eos", "alias");
                                            put("ad", "a");
                                            put("facere", "id");
                                            put("atque", "quaerat");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "aperiam";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("quam", "modi");
                                            put("fuga", "iure");
                                        }};
                                    }};
                                }};
                                residualSource = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("laborum", "dolor");
                                                put("ad", "illum");
                                                put("sit", "molestias");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("expedita", "voluptas");
                                                put("maiores", "ea");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("delectus", "accusamus");
                                                put("reiciendis", "consequatur");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("accusantium", "voluptates");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "provident";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("quaerat", "numquam");
                                            put("non", "cum");
                                            put("incidunt", "dolores");
                                            put("enim", "nihil");
                                        }};
                                    }};
                                }};
                            }};
                            sourceOperationResponse = new SourceOperationResponse() {{
                                getMetadata = new SourceGetMetadataResponse() {{
                                    metadata = new SourceMetadata() {{
                                        estimatedSizeBytes = "libero";
                                        infinite = false;
                                        producesSortedKeys = false;
                                    }};
                                }};
                                split = new SourceSplitResponse() {{
                                    bundles = new org.openapis.openapi.models.shared.DerivedSource[]{{
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("corrupti", "repellendus");
                                                        put("cum", "quibusdam");
                                                        put("est", "commodi");
                                                        put("similique", "autem");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("recusandae", "sapiente");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "id";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("inventore", "iste");
                                                }};
                                            }};
                                        }}),
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("atque", "doloribus");
                                                        put("pariatur", "aut");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("iste", "eveniet");
                                                    put("nam", "animi");
                                                    put("labore", "voluptate");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "voluptatibus";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("nulla", "dolorem");
                                                    put("voluptates", "a");
                                                }};
                                            }};
                                        }}),
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_UNKNOWN;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("aliquid", "dolore");
                                                        put("voluptatem", "illum");
                                                        put("laboriosam", "culpa");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("atque", "ratione");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("quisquam", "atque");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "nihil";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("temporibus", "a");
                                                    put("ad", "cupiditate");
                                                    put("suscipit", "reiciendis");
                                                }};
                                            }};
                                        }}),
                                    }};
                                    outcome = SourceSplitResponseOutcomeEnum.SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED;
                                    shards = new org.openapis.openapi.models.shared.SourceSplitShard[]{{
                                        add(new SourceSplitShard() {{
                                            derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_UNKNOWN;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("praesentium", "neque");
                                                        put("quam", "animi");
                                                        put("debitis", "voluptatum");
                                                        put("voluptatem", "quisquam");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("cumque", "architecto");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("eligendi", "occaecati");
                                                        put("quis", "tempore");
                                                        put("officia", "iste");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("quas", "laboriosam");
                                                    put("ducimus", "voluptatum");
                                                    put("sapiente", "deserunt");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "dolor";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("iure", "sint");
                                                    put("autem", "iste");
                                                    put("cupiditate", "ab");
                                                    put("fuga", "a");
                                                }};
                                            }};
                                        }}),
                                        add(new SourceSplitShard() {{
                                            derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_UNKNOWN;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("quod", "repudiandae");
                                                        put("eaque", "consectetur");
                                                        put("autem", "vitae");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("incidunt", "modi");
                                                        put("quos", "minus");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("error", "reprehenderit");
                                                        put("reprehenderit", "animi");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("voluptates", "delectus");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "qui";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("exercitationem", "ipsum");
                                                    put("laboriosam", "doloremque");
                                                    put("sed", "voluptatum");
                                                    put("debitis", "a");
                                                }};
                                            }};
                                        }}),
                                        add(new SourceSplitShard() {{
                                            derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("cupiditate", "adipisci");
                                                        put("aliquam", "illo");
                                                        put("veniam", "sed");
                                                        put("necessitatibus", "possimus");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("itaque", "explicabo");
                                                        put("ullam", "non");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("incidunt", "quod");
                                                        put("sunt", "ullam");
                                                        put("quam", "illum");
                                                        put("voluptates", "officia");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("in", "illo");
                                                        put("voluptate", "consequatur");
                                                        put("delectus", "incidunt");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("nemo", "est");
                                                    put("quo", "maxime");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "delectus";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("laboriosam", "quam");
                                                    put("fuga", "officia");
                                                }};
                                            }};
                                        }}),
                                        add(new SourceSplitShard() {{
                                            derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("tempore", "culpa");
                                                        put("fugiat", "inventore");
                                                        put("atque", "ad");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("voluptates", "ut");
                                                        put("nesciunt", "ab");
                                                        put("quibusdam", "suscipit");
                                                        put("quidem", "delectus");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("cumque", "voluptatum");
                                                        put("sequi", "atque");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("expedita", "rerum");
                                                    put("totam", "quod");
                                                    put("aspernatur", "eaque");
                                                    put("impedit", "nam");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "ex";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("delectus", "minus");
                                                    put("ut", "distinctio");
                                                }};
                                            }};
                                        }}),
                                    }};
                                }};
                            }};
                            stopPosition = new Position() {{
                                byteOffset = "eius";
                                concatPosition = new ConcatPosition() {{
                                    index = 176418;
                                    position = new Position() {{}};
                                }};
                                end = false;
                                key = "veniam";
                                recordIndex = "repudiandae";
                                shufflePosition = "sint";
                            }};
                            totalThrottlerWaitTimeSeconds = 5777.07;
                            workItemId = "debitis";
                        }}),
                        add(new WorkItemStatus() {{
                            completed = false;
                            counterUpdates = new org.openapis.openapi.models.shared.CounterUpdate[]{{
                                add(new CounterUpdate() {{
                                    boolean_ = false;
                                    cumulative = false;
                                    distribution = new DistributionUpdate() {{
                                        count = new SplitInt64() {{
                                            highBits = 176281;
                                            lowBits = 227706L;
                                        }};
                                        histogram = new Histogram() {{
                                            bucketCounts = new String[]{{
                                                add("porro"),
                                                add("occaecati"),
                                            }};
                                            firstBucketOffset = 970703;
                                        }};
                                        max = new SplitInt64() {{
                                            highBits = 454334;
                                            lowBits = 735521L;
                                        }};
                                        min = new SplitInt64() {{
                                            highBits = 447323;
                                            lowBits = 609864L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 820735;
                                            lowBits = 950337L;
                                        }};
                                        sumOfSquares = 9238.79;
                                    }};
                                    floatingPoint = 7115.72;
                                    floatingPointList = new FloatingPointList() {{
                                        elements = new Double[]{{
                                            add(4564.73),
                                            add(6873.52),
                                        }};
                                    }};
                                    floatingPointMean = new FloatingPointMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 321654;
                                            lowBits = 801059L;
                                        }};
                                        sum = 1887.05;
                                    }};
                                    integer = new SplitInt64() {{
                                        highBits = 518366;
                                        lowBits = 873681L;
                                    }};
                                    integerGauge = new IntegerGauge() {{
                                        timestamp = "dolore";
                                        value = new SplitInt64() {{
                                            highBits = 722889;
                                            lowBits = 638085L;
                                        }};
                                    }};
                                    integerList = new IntegerList() {{
                                        elements = new org.openapis.openapi.models.shared.SplitInt64[]{{
                                            add(new SplitInt64() {{
                                                highBits = 585109;
                                                lowBits = 75203L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 901563;
                                                lowBits = 314724L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 52407;
                                                lowBits = 406462L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 910132;
                                                lowBits = 962543L;
                                            }}),
                                        }};
                                    }};
                                    integerMean = new IntegerMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 534432;
                                            lowBits = 590787L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 15676;
                                            lowBits = 680084L;
                                        }};
                                    }};
                                    internal = "nostrum";
                                    nameAndKind = new NameAndKind() {{
                                        kind = NameAndKindKindEnum.MAX;
                                        name = "Jesus Kuhn";
                                    }};
                                    shortId = "veritatis";
                                    stringList = new StringList() {{
                                        elements = new String[]{{
                                            add("earum"),
                                            add("minima"),
                                        }};
                                    }};
                                    structuredNameAndMetadata = new CounterStructuredNameAndMetadata() {{
                                        metadata = new CounterMetadata() {{
                                            description = "ex";
                                            kind = CounterMetadataKindEnum.DISTRIBUTION;
                                            otherUnits = "nesciunt";
                                            standardUnits = CounterMetadataStandardUnitsEnum.NANOSECONDS;
                                        }};
                                        name = new CounterStructuredName() {{
                                            componentStepName = "nostrum";
                                            executionStepName = "fuga";
                                            inputIndex = 195789;
                                            name = "Bradley Osinski";
                                            origin = CounterStructuredNameOriginEnum.SYSTEM;
                                            originNamespace = "sunt";
                                            originalRequestingStepName = "rerum";
                                            originalStepName = "occaecati";
                                            portion = CounterStructuredNamePortionEnum.KEY;
                                            workerId = "necessitatibus";
                                        }};
                                    }};
                                }}),
                                add(new CounterUpdate() {{
                                    boolean_ = false;
                                    cumulative = false;
                                    distribution = new DistributionUpdate() {{
                                        count = new SplitInt64() {{
                                            highBits = 145083;
                                            lowBits = 418892L;
                                        }};
                                        histogram = new Histogram() {{
                                            bucketCounts = new String[]{{
                                                add("eveniet"),
                                                add("fugiat"),
                                                add("blanditiis"),
                                                add("a"),
                                            }};
                                            firstBucketOffset = 620842;
                                        }};
                                        max = new SplitInt64() {{
                                            highBits = 959000;
                                            lowBits = 832989L;
                                        }};
                                        min = new SplitInt64() {{
                                            highBits = 706371;
                                            lowBits = 564597L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 291344;
                                            lowBits = 90969L;
                                        }};
                                        sumOfSquares = 379.11;
                                    }};
                                    floatingPoint = 9809.8;
                                    floatingPointList = new FloatingPointList() {{
                                        elements = new Double[]{{
                                            add(2458.49),
                                            add(7331.27),
                                        }};
                                    }};
                                    floatingPointMean = new FloatingPointMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 710506;
                                            lowBits = 940639L;
                                        }};
                                        sum = 5051.13;
                                    }};
                                    integer = new SplitInt64() {{
                                        highBits = 113540;
                                        lowBits = 478773L;
                                    }};
                                    integerGauge = new IntegerGauge() {{
                                        timestamp = "atque";
                                        value = new SplitInt64() {{
                                            highBits = 243941;
                                            lowBits = 474774L;
                                        }};
                                    }};
                                    integerList = new IntegerList() {{
                                        elements = new org.openapis.openapi.models.shared.SplitInt64[]{{
                                            add(new SplitInt64() {{
                                                highBits = 45728;
                                                lowBits = 112788L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 650678;
                                                lowBits = 990454L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 872580;
                                                lowBits = 845374L;
                                            }}),
                                        }};
                                    }};
                                    integerMean = new IntegerMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 461853;
                                            lowBits = 534509L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 523266;
                                            lowBits = 424553L;
                                        }};
                                    }};
                                    internal = "eos";
                                    nameAndKind = new NameAndKind() {{
                                        kind = NameAndKindKindEnum.MAX;
                                        name = "Vickie Morar";
                                    }};
                                    shortId = "incidunt";
                                    stringList = new StringList() {{
                                        elements = new String[]{{
                                            add("blanditiis"),
                                            add("ducimus"),
                                        }};
                                    }};
                                    structuredNameAndMetadata = new CounterStructuredNameAndMetadata() {{
                                        metadata = new CounterMetadata() {{
                                            description = "consectetur";
                                            kind = CounterMetadataKindEnum.LATEST_VALUE;
                                            otherUnits = "quis";
                                            standardUnits = CounterMetadataStandardUnitsEnum.BYTES;
                                        }};
                                        name = new CounterStructuredName() {{
                                            componentStepName = "ratione";
                                            executionStepName = "consectetur";
                                            inputIndex = 990540;
                                            name = "Velma Schuster";
                                            origin = CounterStructuredNameOriginEnum.SYSTEM;
                                            originNamespace = "consequuntur";
                                            originalRequestingStepName = "nemo";
                                            originalStepName = "nobis";
                                            portion = CounterStructuredNamePortionEnum.VALUE;
                                            workerId = "labore";
                                        }};
                                    }};
                                }}),
                            }};
                            dynamicSourceSplit = new DynamicSourceSplit() {{
                                primary = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_UNKNOWN;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("itaque", "error");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("error", "placeat");
                                                put("temporibus", "voluptate");
                                                put("earum", "minima");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("odit", "eius");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "error";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("dolorum", "alias");
                                            put("itaque", "ab");
                                        }};
                                    }};
                                }};
                                residual = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_UNKNOWN;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("iusto", "corrupti");
                                                put("non", "esse");
                                                put("vero", "eligendi");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("omnis", "recusandae");
                                            put("architecto", "voluptatibus");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "autem";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("repellat", "amet");
                                            put("cumque", "dolore");
                                        }};
                                    }};
                                }};
                            }};
                            errors = new org.openapis.openapi.models.shared.Status[]{{
                                add(new Status() {{
                                    code = 776334;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("libero", "suscipit");
                                            put("illum", "iusto");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("sint", "aliquid");
                                            put("repellat", "sapiente");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("eligendi", "ullam");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("eius", "dignissimos");
                                            put("corporis", "perferendis");
                                        }}),
                                    }};
                                    message = "architecto";
                                }}),
                                add(new Status() {{
                                    code = 229733;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("officiis", "dolore");
                                            put("magnam", "maiores");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("dicta", "hic");
                                            put("praesentium", "libero");
                                        }}),
                                    }};
                                    message = "consequatur";
                                }}),
                                add(new Status() {{
                                    code = 516739;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("dolor", "sunt");
                                            put("omnis", "quam");
                                            put("officiis", "dicta");
                                            put("excepturi", "consectetur");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("odit", "incidunt");
                                            put("corporis", "quaerat");
                                            put("suscipit", "ducimus");
                                        }}),
                                    }};
                                    message = "tenetur";
                                }}),
                                add(new Status() {{
                                    code = 568560;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("nihil", "eius");
                                            put("placeat", "fugit");
                                            put("facere", "ipsam");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("porro", "labore");
                                            put("perspiciatis", "ducimus");
                                            put("qui", "qui");
                                            put("consectetur", "ratione");
                                        }}),
                                    }};
                                    message = "saepe";
                                }}),
                            }};
                            metricUpdates = new org.openapis.openapi.models.shared.MetricUpdate[]{{
                                add(new MetricUpdate() {{
                                    cumulative = false;
                                    distribution = "aliquid";
                                    gauge = "cum";
                                    internal = "fugiat";
                                    kind = "rem";
                                    meanCount = "voluptatibus";
                                    meanSum = "officiis";
                                    name = new MetricStructuredName() {{
                                        context = new java.util.HashMap<String, String>() {{
                                            put("repellendus", "aut");
                                            put("voluptatem", "libero");
                                        }};
                                        name = "Darren Monahan";
                                        origin = "magni";
                                    }};
                                    scalar = "sit";
                                    set = "velit";
                                    updateTime = "voluptatum";
                                }}),
                                add(new MetricUpdate() {{
                                    cumulative = false;
                                    distribution = "nihil";
                                    gauge = "neque";
                                    internal = "aspernatur";
                                    kind = "eaque";
                                    meanCount = "corporis";
                                    meanSum = "cupiditate";
                                    name = new MetricStructuredName() {{
                                        context = new java.util.HashMap<String, String>() {{
                                            put("impedit", "quod");
                                        }};
                                        name = "Joe Bartell";
                                        origin = "eius";
                                    }};
                                    scalar = "aperiam";
                                    set = "voluptatem";
                                    updateTime = "non";
                                }}),
                            }};
                            progress = new ApproximateProgress() {{
                                percentComplete = 1096.95;
                                position = new Position() {{
                                    byteOffset = "sequi";
                                    concatPosition = new ConcatPosition() {{
                                        index = 699215;
                                        position = new Position() {{}};
                                    }};
                                    end = false;
                                    key = "ipsum";
                                    recordIndex = "debitis";
                                    shufflePosition = "quis";
                                }};
                                remainingTime = "eaque";
                            }};
                            reportIndex = "incidunt";
                            reportedProgress = new ApproximateReportedProgress() {{
                                consumedParallelism = new ReportedParallelism() {{
                                    isInfinite = false;
                                    value = 2814.36;
                                }};
                                fractionConsumed = 9622.8;
                                position = new Position() {{
                                    byteOffset = "aliquid";
                                    concatPosition = new ConcatPosition() {{
                                        index = 352407;
                                        position = new Position() {{}};
                                    }};
                                    end = false;
                                    key = "maiores";
                                    recordIndex = "debitis";
                                    shufflePosition = "reprehenderit";
                                }};
                                remainingParallelism = new ReportedParallelism() {{
                                    isInfinite = false;
                                    value = 1810.41;
                                }};
                            }};
                            requestedLeaseDuration = "assumenda";
                            sourceFork = new SourceFork() {{
                                primary = new SourceSplitShard() {{
                                    derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("nihil", "quam");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("consequatur", "cumque");
                                                put("placeat", "adipisci");
                                                put("tenetur", "non");
                                                put("accusantium", "corrupti");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("earum", "impedit");
                                            put("dicta", "corporis");
                                            put("impedit", "eveniet");
                                            put("cum", "dolore");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "illum";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("officiis", "quasi");
                                            put("accusamus", "animi");
                                        }};
                                    }};
                                }};
                                primarySource = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("odio", "veniam");
                                                put("fuga", "itaque");
                                                put("possimus", "tenetur");
                                                put("sed", "deserunt");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("id", "distinctio");
                                            put("corporis", "quas");
                                            put("soluta", "cupiditate");
                                            put("unde", "et");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "quisquam";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("sed", "suscipit");
                                            put("facere", "pariatur");
                                            put("nam", "quaerat");
                                        }};
                                    }};
                                }};
                                residual = new SourceSplitShard() {{
                                    derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("vel", "quasi");
                                                put("vero", "odio");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("fugit", "inventore");
                                                put("optio", "nobis");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("commodi", "possimus");
                                                put("provident", "veniam");
                                                put("sit", "fugit");
                                                put("a", "consequatur");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("id", "error");
                                            put("ratione", "perferendis");
                                            put("distinctio", "voluptas");
                                            put("sint", "maiores");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "nihil";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("cumque", "consequuntur");
                                            put("maiores", "esse");
                                            put("explicabo", "delectus");
                                        }};
                                    }};
                                }};
                                residualSource = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("sit", "voluptatem");
                                                put("natus", "voluptatem");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("occaecati", "quasi");
                                                put("veritatis", "ex");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("quas", "dolores");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("esse", "quas");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "blanditiis";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("voluptates", "minus");
                                            put("autem", "vel");
                                            put("beatae", "quos");
                                        }};
                                    }};
                                }};
                            }};
                            sourceOperationResponse = new SourceOperationResponse() {{
                                getMetadata = new SourceGetMetadataResponse() {{
                                    metadata = new SourceMetadata() {{
                                        estimatedSizeBytes = "consectetur";
                                        infinite = false;
                                        producesSortedKeys = false;
                                    }};
                                }};
                                split = new SourceSplitResponse() {{
                                    bundles = new org.openapis.openapi.models.shared.DerivedSource[]{{
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("suscipit", "ullam");
                                                        put("unde", "debitis");
                                                        put("quidem", "magnam");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("accusamus", "quod");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("voluptas", "earum");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("earum", "nihil");
                                                        put("nostrum", "rerum");
                                                        put("perferendis", "nam");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("ratione", "eos");
                                                    put("id", "modi");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "illum";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("consectetur", "reprehenderit");
                                                    put("eligendi", "cum");
                                                    put("culpa", "culpa");
                                                }};
                                            }};
                                        }}),
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("ad", "quia");
                                                        put("quod", "quaerat");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("numquam", "explicabo");
                                                        put("eligendi", "cupiditate");
                                                        put("tempore", "odit");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("at", "ipsum");
                                                    put("explicabo", "nulla");
                                                    put("est", "sapiente");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "necessitatibus";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("quasi", "mollitia");
                                                    put("voluptatum", "blanditiis");
                                                    put("sapiente", "ut");
                                                }};
                                            }};
                                        }}),
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_INDEPENDENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("enim", "nihil");
                                                        put("ratione", "tenetur");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("quod", "nulla");
                                                        put("tempora", "quam");
                                                        put("consectetur", "nemo");
                                                        put("nesciunt", "earum");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("dolor", "placeat");
                                                    put("quos", "sed");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "eaque";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("ratione", "nihil");
                                                    put("unde", "deserunt");
                                                    put("id", "ex");
                                                }};
                                            }};
                                        }}),
                                    }};
                                    outcome = SourceSplitResponseOutcomeEnum.SOURCE_SPLIT_OUTCOME_USE_CURRENT;
                                    shards = new org.openapis.openapi.models.shared.SourceSplitShard[]{{
                                        add(new SourceSplitShard() {{
                                            derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("nam", "cumque");
                                                        put("sapiente", "quam");
                                                        put("occaecati", "repellendus");
                                                        put("culpa", "dicta");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("fuga", "odio");
                                                        put("totam", "magni");
                                                        put("eos", "harum");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("omnis", "quis");
                                                    put("quos", "natus");
                                                    put("aliquam", "vero");
                                                    put("nisi", "praesentium");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "eum";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("animi", "possimus");
                                                }};
                                            }};
                                        }}),
                                        add(new SourceSplitShard() {{
                                            derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("maiores", "iste");
                                                        put("accusamus", "ipsam");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("odio", "ullam");
                                                        put("inventore", "eligendi");
                                                        put("occaecati", "doloribus");
                                                        put("necessitatibus", "rem");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("nihil", "veniam");
                                                    put("aut", "magni");
                                                    put("rerum", "voluptatibus");
                                                    put("nulla", "quod");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "non";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("enim", "alias");
                                                    put("blanditiis", "modi");
                                                }};
                                            }};
                                        }}),
                                        add(new SourceSplitShard() {{
                                            derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_UNKNOWN;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("molestiae", "autem");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("eius", "nostrum");
                                                        put("ex", "amet");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("molestias", "voluptatibus");
                                                        put("ipsum", "hic");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("odit", "molestiae");
                                                        put("accusamus", "quia");
                                                        put("inventore", "doloribus");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("aliquid", "consequuntur");
                                                    put("laboriosam", "nemo");
                                                    put("reprehenderit", "soluta");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "ipsum";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("delectus", "maxime");
                                                    put("vel", "distinctio");
                                                }};
                                            }};
                                        }}),
                                        add(new SourceSplitShard() {{
                                            derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("deleniti", "iusto");
                                                        put("quod", "saepe");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("magni", "nostrum");
                                                        put("minus", "aliquid");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("ea", "numquam");
                                                        put("architecto", "fuga");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("velit", "quasi");
                                                        put("sed", "officiis");
                                                        put("veniam", "quae");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("in", "libero");
                                                    put("ut", "cumque");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "quia";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("porro", "cumque");
                                                }};
                                            }};
                                        }}),
                                    }};
                                }};
                            }};
                            stopPosition = new Position() {{
                                byteOffset = "distinctio";
                                concatPosition = new ConcatPosition() {{
                                    index = 256568;
                                    position = new Position() {{}};
                                }};
                                end = false;
                                key = "fugit";
                                recordIndex = "amet";
                                shufflePosition = "culpa";
                            }};
                            totalThrottlerWaitTimeSeconds = 7057.53;
                            workItemId = "minus";
                        }}),
                    }};
                    workerId = "vero";
                }};;
                accessToken = "impedit";
                alt = AltEnum.MEDIA;
                callback = "et";
                fields = "earum";
                key = "fuga";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "fugiat";
                uploadProtocol = "nulla";
            }};            

            DataflowProjectsJobsWorkItemsReportStatusResponse res = sdk.projects.dataflowProjectsJobsWorkItemsReportStatus(req, new DataflowProjectsJobsWorkItemsReportStatusSecurity() {{
                option1 = new DataflowProjectsJobsWorkItemsReportStatusSecurityOption1("totam", "praesentium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.reportWorkItemStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsLocationsFlexTemplatesLaunch

Launch a job with a FlexTemplate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsFlexTemplatesLaunchRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsFlexTemplatesLaunchResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsFlexTemplatesLaunchSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContainerSpec;
import org.openapis.openapi.models.shared.FlexTemplateRuntimeEnvironment;
import org.openapis.openapi.models.shared.FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum;
import org.openapis.openapi.models.shared.FlexTemplateRuntimeEnvironmentFlexrsGoalEnum;
import org.openapis.openapi.models.shared.FlexTemplateRuntimeEnvironmentIpConfigurationEnum;
import org.openapis.openapi.models.shared.LaunchFlexTemplateParameter;
import org.openapis.openapi.models.shared.LaunchFlexTemplateRequest;
import org.openapis.openapi.models.shared.ParameterMetadata;
import org.openapis.openapi.models.shared.ParameterMetadataParamTypeEnum;
import org.openapis.openapi.models.shared.SDKInfo;
import org.openapis.openapi.models.shared.SDKInfoLanguageEnum;
import org.openapis.openapi.models.shared.TemplateMetadata;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsFlexTemplatesLaunchRequest req = new DataflowProjectsLocationsFlexTemplatesLaunchRequest("officiis", "esse") {{
                dollarXgafv = XgafvEnum.ONE;
                launchFlexTemplateRequest = new LaunchFlexTemplateRequest() {{
                    launchParameter = new LaunchFlexTemplateParameter() {{
                        containerSpec = new ContainerSpec() {{
                            defaultEnvironment = new FlexTemplateRuntimeEnvironment() {{
                                additionalExperiments = new String[]{{
                                    add("laboriosam"),
                                    add("minus"),
                                    add("labore"),
                                    add("quas"),
                                }};
                                additionalUserLabels = new java.util.HashMap<String, String>() {{
                                    put("veniam", "sed");
                                }};
                                autoscalingAlgorithm = FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum.AUTOSCALING_ALGORITHM_BASIC;
                                diskSizeGb = 442864;
                                dumpHeapOnOom = false;
                                enableLauncherVmSerialPortLogging = false;
                                enableStreamingEngine = false;
                                flexrsGoal = FlexTemplateRuntimeEnvironmentFlexrsGoalEnum.FLEXRS_SPEED_OPTIMIZED;
                                ipConfiguration = FlexTemplateRuntimeEnvironmentIpConfigurationEnum.WORKER_IP_PUBLIC;
                                kmsKeyName = "et";
                                launcherMachineType = "eveniet";
                                machineType = "voluptate";
                                maxWorkers = 941091;
                                network = "at";
                                numWorkers = 19076;
                                saveHeapDumpsToGcsPath = "in";
                                sdkContainerImage = "eius";
                                serviceAccountEmail = "aut";
                                stagingLocation = "consequatur";
                                subnetwork = "iste";
                                tempLocation = "accusamus";
                                workerRegion = "repellat";
                                workerZone = "voluptatum";
                                zone = "facere";
                            }};;
                            image = "consequuntur";
                            imageRepositoryCertPath = "natus";
                            imageRepositoryPasswordSecretId = "repellendus";
                            imageRepositoryUsernameSecretId = "voluptates";
                            metadata = new TemplateMetadata() {{
                                description = "illo";
                                name = "Ms. Nicolas Kuphal";
                                parameters = new org.openapis.openapi.models.shared.ParameterMetadata[]{{
                                    add(new ParameterMetadata() {{
                                        customMetadata = new java.util.HashMap<String, String>() {{
                                            put("illum", "mollitia");
                                            put("ipsa", "quos");
                                        }};
                                        groupName = "quo";
                                        helpText = "ullam";
                                        isOptional = false;
                                        label = "in";
                                        name = "Alfonso Keeling";
                                        paramType = ParameterMetadataParamTypeEnum.PUBSUB_TOPIC;
                                        parentName = "similique";
                                        parentTriggerValues = new String[]{{
                                            add("architecto"),
                                        }};
                                        regexes = new String[]{{
                                            add("accusamus"),
                                            add("illo"),
                                        }};
                                    }}),
                                    add(new ParameterMetadata() {{
                                        customMetadata = new java.util.HashMap<String, String>() {{
                                            put("harum", "laborum");
                                            put("a", "repudiandae");
                                            put("minus", "officia");
                                        }};
                                        groupName = "laboriosam";
                                        helpText = "illo";
                                        isOptional = false;
                                        label = "cupiditate";
                                        name = "Suzanne Mante II";
                                        paramType = ParameterMetadataParamTypeEnum.DEFAULT_;
                                        parentName = "cum";
                                        parentTriggerValues = new String[]{{
                                            add("eius"),
                                            add("maiores"),
                                        }};
                                        regexes = new String[]{{
                                            add("quos"),
                                            add("id"),
                                            add("officiis"),
                                            add("ab"),
                                        }};
                                    }}),
                                    add(new ParameterMetadata() {{
                                        customMetadata = new java.util.HashMap<String, String>() {{
                                            put("consequatur", "itaque");
                                            put("repellat", "voluptatem");
                                        }};
                                        groupName = "dolor";
                                        helpText = "distinctio";
                                        isOptional = false;
                                        label = "quaerat";
                                        name = "Mike Kovacek";
                                        paramType = ParameterMetadataParamTypeEnum.PUBSUB_SUBSCRIPTION;
                                        parentName = "mollitia";
                                        parentTriggerValues = new String[]{{
                                            add("suscipit"),
                                            add("quas"),
                                            add("quis"),
                                        }};
                                        regexes = new String[]{{
                                            add("corporis"),
                                            add("iste"),
                                        }};
                                    }}),
                                }};
                            }};;
                            sdkInfo = new SDKInfo() {{
                                language = SDKInfoLanguageEnum.JAVA;
                                version = "autem";
                            }};;
                        }};;
                        containerSpecGcsPath = "voluptate";
                        environment = new FlexTemplateRuntimeEnvironment() {{
                            additionalExperiments = new String[]{{
                                add("magni"),
                            }};
                            additionalUserLabels = new java.util.HashMap<String, String>() {{
                                put("dolorum", "voluptas");
                                put("temporibus", "porro");
                                put("tempore", "commodi");
                            }};
                            autoscalingAlgorithm = FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum.AUTOSCALING_ALGORITHM_NONE;
                            diskSizeGb = 508271;
                            dumpHeapOnOom = false;
                            enableLauncherVmSerialPortLogging = false;
                            enableStreamingEngine = false;
                            flexrsGoal = FlexTemplateRuntimeEnvironmentFlexrsGoalEnum.FLEXRS_UNSPECIFIED;
                            ipConfiguration = FlexTemplateRuntimeEnvironmentIpConfigurationEnum.WORKER_IP_PRIVATE;
                            kmsKeyName = "expedita";
                            launcherMachineType = "in";
                            machineType = "eaque";
                            maxWorkers = 966222;
                            network = "blanditiis";
                            numWorkers = 793029;
                            saveHeapDumpsToGcsPath = "tenetur";
                            sdkContainerImage = "assumenda";
                            serviceAccountEmail = "exercitationem";
                            stagingLocation = "a";
                            subnetwork = "tempore";
                            tempLocation = "laboriosam";
                            workerRegion = "earum";
                            workerZone = "occaecati";
                            zone = "dicta";
                        }};;
                        jobName = "quidem";
                        launchOptions = new java.util.HashMap<String, String>() {{
                            put("laborum", "molestias");
                            put("a", "dignissimos");
                            put("labore", "laudantium");
                        }};
                        parameters = new java.util.HashMap<String, String>() {{
                            put("aliquid", "repudiandae");
                            put("aspernatur", "quod");
                        }};
                        transformNameMappings = new java.util.HashMap<String, String>() {{
                            put("neque", "ipsa");
                        }};
                        update = false;
                    }};;
                    validateOnly = false;
                }};;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "soluta";
                fields = "aut";
                key = "ullam";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "quibusdam";
                uploadProtocol = "sint";
            }};            

            DataflowProjectsLocationsFlexTemplatesLaunchResponse res = sdk.projects.dataflowProjectsLocationsFlexTemplatesLaunch(req, new DataflowProjectsLocationsFlexTemplatesLaunchSecurity() {{
                option1 = new DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption1("voluptates", "nihil") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.launchFlexTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsLocationsJobsCreate

Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsCreateRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsCreateResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsCreateSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsCreateSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsCreateSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsCreateSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsCreateSecurityOption4;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsCreateViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AutoscalingSettings;
import org.openapis.openapi.models.shared.AutoscalingSettingsAlgorithmEnum;
import org.openapis.openapi.models.shared.BigQueryIODetails;
import org.openapis.openapi.models.shared.BigTableIODetails;
import org.openapis.openapi.models.shared.ComponentSource;
import org.openapis.openapi.models.shared.ComponentTransform;
import org.openapis.openapi.models.shared.DatastoreIODetails;
import org.openapis.openapi.models.shared.DebugOptions;
import org.openapis.openapi.models.shared.Disk;
import org.openapis.openapi.models.shared.DisplayData;
import org.openapis.openapi.models.shared.EnvironmentFlexResourceSchedulingGoalEnum;
import org.openapis.openapi.models.shared.EnvironmentInput;
import org.openapis.openapi.models.shared.ExecutionStageState;
import org.openapis.openapi.models.shared.ExecutionStageStateExecutionStageStateEnum;
import org.openapis.openapi.models.shared.ExecutionStageSummary;
import org.openapis.openapi.models.shared.ExecutionStageSummaryKindEnum;
import org.openapis.openapi.models.shared.FileIODetails;
import org.openapis.openapi.models.shared.JobCurrentStateEnum;
import org.openapis.openapi.models.shared.JobExecutionInfo;
import org.openapis.openapi.models.shared.JobExecutionStageInfo;
import org.openapis.openapi.models.shared.JobInput;
import org.openapis.openapi.models.shared.JobMetadata;
import org.openapis.openapi.models.shared.JobRequestedStateEnum;
import org.openapis.openapi.models.shared.JobTypeEnum;
import org.openapis.openapi.models.shared.Package;
import org.openapis.openapi.models.shared.PipelineDescription;
import org.openapis.openapi.models.shared.PubSubIODetails;
import org.openapis.openapi.models.shared.RuntimeUpdatableParams;
import org.openapis.openapi.models.shared.SDKHarnessContainerImage;
import org.openapis.openapi.models.shared.SDKVersion;
import org.openapis.openapi.models.shared.SDKVersionSDKSupportStatusEnum;
import org.openapis.openapi.models.shared.SpannerIODetails;
import org.openapis.openapi.models.shared.StageSource;
import org.openapis.openapi.models.shared.Step;
import org.openapis.openapi.models.shared.TaskRunnerSettings;
import org.openapis.openapi.models.shared.TransformSummary;
import org.openapis.openapi.models.shared.TransformSummaryKindEnum;
import org.openapis.openapi.models.shared.WorkerPool;
import org.openapis.openapi.models.shared.WorkerPoolDefaultPackageSetEnum;
import org.openapis.openapi.models.shared.WorkerPoolIpConfigurationEnum;
import org.openapis.openapi.models.shared.WorkerPoolTeardownPolicyEnum;
import org.openapis.openapi.models.shared.WorkerSettings;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsJobsCreateRequest req = new DataflowProjectsLocationsJobsCreateRequest("ad", "eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                jobInput = new JobInput() {{
                    clientRequestId = "consequatur";
                    createTime = "sit";
                    createdFromSnapshotId = "iure";
                    currentState = JobCurrentStateEnum.JOB_STATE_RESOURCE_CLEANING_UP;
                    currentStateTime = "quis";
                    environment = new EnvironmentInput() {{
                        clusterManagerApiService = "dolorem";
                        dataset = "omnis";
                        debugOptions = new DebugOptions() {{
                            enableHotKeyLogging = false;
                        }};;
                        experiments = new String[]{{
                            add("quo"),
                        }};
                        flexResourceSchedulingGoal = EnvironmentFlexResourceSchedulingGoalEnum.FLEXRS_UNSPECIFIED;
                        internalExperiments = new java.util.HashMap<String, Object>() {{
                            put("est", "quia");
                        }};
                        sdkPipelineOptions = new java.util.HashMap<String, Object>() {{
                            put("est", "rem");
                            put("cum", "maiores");
                        }};
                        serviceAccountEmail = "provident";
                        serviceKmsKeyName = "sunt";
                        serviceOptions = new String[]{{
                            add("excepturi"),
                            add("ducimus"),
                            add("dolore"),
                            add("aspernatur"),
                        }};
                        tempStoragePrefix = "molestias";
                        userAgent = new java.util.HashMap<String, Object>() {{
                            put("at", "unde");
                            put("laborum", "provident");
                            put("hic", "corrupti");
                        }};
                        version = new java.util.HashMap<String, Object>() {{
                            put("earum", "praesentium");
                            put("explicabo", "odit");
                            put("illo", "architecto");
                        }};
                        workerPools = new org.openapis.openapi.models.shared.WorkerPool[]{{
                            add(new WorkerPool() {{
                                autoscalingSettings = new AutoscalingSettings() {{
                                    algorithm = AutoscalingSettingsAlgorithmEnum.AUTOSCALING_ALGORITHM_UNKNOWN;
                                    maxNumWorkers = 244990;
                                }};
                                dataDisks = new org.openapis.openapi.models.shared.Disk[]{{
                                    add(new Disk() {{
                                        diskType = "provident";
                                        mountPoint = "possimus";
                                        sizeGb = 612425;
                                    }}),
                                    add(new Disk() {{
                                        diskType = "blanditiis";
                                        mountPoint = "consectetur";
                                        sizeGb = 520824;
                                    }}),
                                }};
                                defaultPackageSet = WorkerPoolDefaultPackageSetEnum.DEFAULT_PACKAGE_SET_NONE;
                                diskSizeGb = 997180;
                                diskSourceImage = "iusto";
                                diskType = "culpa";
                                ipConfiguration = WorkerPoolIpConfigurationEnum.WORKER_IP_PUBLIC;
                                kind = "cupiditate";
                                machineType = "maxime";
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("nihil", "sed");
                                    put("optio", "nulla");
                                    put("magni", "modi");
                                    put("voluptatum", "dolore");
                                }};
                                network = "possimus";
                                numThreadsPerWorker = 677151;
                                numWorkers = 177716;
                                onHostMaintenance = "sunt";
                                packages = new org.openapis.openapi.models.shared.Package[]{{
                                    add(new Package() {{
                                        location = "eos";
                                        name = "Dominick Denesik";
                                    }}),
                                    add(new Package() {{
                                        location = "numquam";
                                        name = "Kelley West";
                                    }}),
                                }};
                                poolArgs = new java.util.HashMap<String, Object>() {{
                                    put("quis", "maiores");
                                }};
                                sdkHarnessContainerImages = new org.openapis.openapi.models.shared.SDKHarnessContainerImage[]{{
                                    add(new SDKHarnessContainerImage() {{
                                        capabilities = new String[]{{
                                            add("eum"),
                                        }};
                                        containerImage = "sint";
                                        environmentId = "id";
                                        useSingleCorePerContainer = false;
                                    }}),
                                }};
                                subnetwork = "nobis";
                                taskrunnerSettings = new TaskRunnerSettings() {{
                                    alsologtostderr = false;
                                    baseTaskDir = "quasi";
                                    baseUrl = "itaque";
                                    commandlinesFileName = "aliquam";
                                    continueOnException = false;
                                    dataflowApiVersion = "vitae";
                                    harnessCommand = "temporibus";
                                    languageHint = "voluptatum";
                                    logDir = "deserunt";
                                    logToSerialconsole = false;
                                    logUploadLocation = "aspernatur";
                                    oauthScopes = new String[]{{
                                        add("impedit"),
                                    }};
                                    parallelWorkerSettings = new WorkerSettings() {{
                                        baseUrl = "consequuntur";
                                        reportingEnabled = false;
                                        servicePath = "neque";
                                        shuffleServicePath = "saepe";
                                        tempStoragePrefix = "amet";
                                        workerId = "labore";
                                    }};
                                    streamingWorkerMainClass = "repellat";
                                    taskGroup = "eos";
                                    taskUser = "quibusdam";
                                    tempStoragePrefix = "repellat";
                                    vmId = "mollitia";
                                    workflowFileName = "quaerat";
                                }};
                                teardownPolicy = WorkerPoolTeardownPolicyEnum.TEARDOWN_ON_SUCCESS;
                                workerHarnessContainerImage = "sunt";
                                zone = "perspiciatis";
                            }}),
                        }};
                        workerRegion = "quam";
                        workerZone = "a";
                    }};;
                    executionInfo = new JobExecutionInfo() {{
                        stages = new java.util.HashMap<String, org.openapis.openapi.models.shared.JobExecutionStageInfo>() {{
                            put("nulla", new JobExecutionStageInfo() {{
                                stepName = new String[]{{
                                    add("iste"),
                                    add("aspernatur"),
                                    add("aspernatur"),
                                    add("et"),
                                }};
                            }});
                            put("ipsam", new JobExecutionStageInfo() {{
                                stepName = new String[]{{
                                    add("delectus"),
                                }};
                            }});
                        }};
                    }};;
                    id = "e1712099-853e-49f5-83d8-54439ee22446";
                    jobMetadata = new JobMetadata() {{
                        bigTableDetails = new org.openapis.openapi.models.shared.BigTableIODetails[]{{
                            add(new BigTableIODetails() {{
                                instanceId = "tempora";
                                projectId = "aliquam";
                                tableId = "dolorem";
                            }}),
                        }};
                        bigqueryDetails = new org.openapis.openapi.models.shared.BigQueryIODetails[]{{
                            add(new BigQueryIODetails() {{
                                dataset = "impedit";
                                projectId = "architecto";
                                query = "minima";
                                table = "magnam";
                            }}),
                            add(new BigQueryIODetails() {{
                                dataset = "vitae";
                                projectId = "quos";
                                query = "atque";
                                table = "quisquam";
                            }}),
                            add(new BigQueryIODetails() {{
                                dataset = "sunt";
                                projectId = "asperiores";
                                query = "corporis";
                                table = "vel";
                            }}),
                        }};
                        datastoreDetails = new org.openapis.openapi.models.shared.DatastoreIODetails[]{{
                            add(new DatastoreIODetails() {{
                                namespace = "totam";
                                projectId = "ipsam";
                            }}),
                            add(new DatastoreIODetails() {{
                                namespace = "at";
                                projectId = "culpa";
                            }}),
                            add(new DatastoreIODetails() {{
                                namespace = "nihil";
                                projectId = "laudantium";
                            }}),
                            add(new DatastoreIODetails() {{
                                namespace = "dolorem";
                                projectId = "odit";
                            }}),
                        }};
                        fileDetails = new org.openapis.openapi.models.shared.FileIODetails[]{{
                            add(new FileIODetails() {{
                                filePattern = "mollitia";
                            }}),
                            add(new FileIODetails() {{
                                filePattern = "libero";
                            }}),
                            add(new FileIODetails() {{
                                filePattern = "fugiat";
                            }}),
                            add(new FileIODetails() {{
                                filePattern = "voluptas";
                            }}),
                        }};
                        pubsubDetails = new org.openapis.openapi.models.shared.PubSubIODetails[]{{
                            add(new PubSubIODetails() {{
                                subscription = "odio";
                                topic = "eligendi";
                            }}),
                        }};
                        sdkVersion = new SDKVersion() {{
                            sdkSupportStatus = SDKVersionSDKSupportStatusEnum.SUPPORTED;
                            version = "harum";
                            versionDisplayName = "aperiam";
                        }};;
                        spannerDetails = new org.openapis.openapi.models.shared.SpannerIODetails[]{{
                            add(new SpannerIODetails() {{
                                databaseId = "ad";
                                instanceId = "architecto";
                                projectId = "culpa";
                            }}),
                            add(new SpannerIODetails() {{
                                databaseId = "aliquam";
                                instanceId = "ut";
                                projectId = "quidem";
                            }}),
                            add(new SpannerIODetails() {{
                                databaseId = "doloribus";
                                instanceId = "sit";
                                projectId = "architecto";
                            }}),
                            add(new SpannerIODetails() {{
                                databaseId = "tempore";
                                instanceId = "deserunt";
                                projectId = "nulla";
                            }}),
                        }};
                        userDisplayProperties = new java.util.HashMap<String, String>() {{
                            put("voluptate", "alias");
                            put("iure", "temporibus");
                            put("incidunt", "ea");
                        }};
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("laudantium", "qui");
                    }};
                    location = "libero";
                    name = "Archie Stroman";
                    pipelineDescription = new PipelineDescription() {{
                        displayData = new org.openapis.openapi.models.shared.DisplayData[]{{
                            add(new DisplayData() {{
                                boolValue = false;
                                durationValue = "delectus";
                                floatValue = 9653.84;
                                int64Value = "nemo";
                                javaClassValue = "at";
                                key = "magnam";
                                label = "officiis";
                                namespace = "sed";
                                shortStrValue = "mollitia";
                                strValue = "saepe";
                                timestampValue = "labore";
                                url = "doloribus";
                            }}),
                        }};
                        executionPipelineStage = new org.openapis.openapi.models.shared.ExecutionStageSummary[]{{
                            add(new ExecutionStageSummary() {{
                                componentSource = new org.openapis.openapi.models.shared.ComponentSource[]{{
                                    add(new ComponentSource() {{
                                        name = "Andres Fay";
                                        originalTransformOrCollection = "beatae";
                                        userName = "Jennings55";
                                    }}),
                                    add(new ComponentSource() {{
                                        name = "Ralph Walker";
                                        originalTransformOrCollection = "ducimus";
                                        userName = "Kamron_Feest";
                                    }}),
                                }};
                                componentTransform = new org.openapis.openapi.models.shared.ComponentTransform[]{{
                                    add(new ComponentTransform() {{
                                        name = "Edmund Hansen";
                                        originalTransform = "praesentium";
                                        userName = "Hilario_Bauch77";
                                    }}),
                                    add(new ComponentTransform() {{
                                        name = "Miss Dan Lakin";
                                        originalTransform = "molestiae";
                                        userName = "Clinton4";
                                    }}),
                                    add(new ComponentTransform() {{
                                        name = "Alex Zulauf";
                                        originalTransform = "quaerat";
                                        userName = "Elisha56";
                                    }}),
                                    add(new ComponentTransform() {{
                                        name = "Erma Streich";
                                        originalTransform = "illo";
                                        userName = "Rose71";
                                    }}),
                                }};
                                id = "bce247b7-684e-4ff5-8126-d71cffbd0eb7";
                                inputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Nelson Hagenes V";
                                        originalTransformOrCollection = "nemo";
                                        sizeBytes = "dolorem";
                                        userName = "Maxime69";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Antonio Schiller";
                                        originalTransformOrCollection = "veritatis";
                                        sizeBytes = "veniam";
                                        userName = "Layne24";
                                    }}),
                                }};
                                kind = ExecutionStageSummaryKindEnum.SINGLETON_KIND;
                                name = "Ramona Heathcote";
                                outputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Cheryl Bins";
                                        originalTransformOrCollection = "quos";
                                        sizeBytes = "aliquid";
                                        userName = "Clemens.Nader8";
                                    }}),
                                }};
                                prerequisiteStage = new String[]{{
                                    add("aliquid"),
                                    add("optio"),
                                    add("adipisci"),
                                    add("ab"),
                                }};
                            }}),
                            add(new ExecutionStageSummary() {{
                                componentSource = new org.openapis.openapi.models.shared.ComponentSource[]{{
                                    add(new ComponentSource() {{
                                        name = "Dr. Nicholas Wisozk";
                                        originalTransformOrCollection = "tempore";
                                        userName = "Felipe_Casper66";
                                    }}),
                                    add(new ComponentSource() {{
                                        name = "Janet Wisozk";
                                        originalTransformOrCollection = "itaque";
                                        userName = "Leonor_Schmitt43";
                                    }}),
                                    add(new ComponentSource() {{
                                        name = "Clyde Waelchi";
                                        originalTransformOrCollection = "veniam";
                                        userName = "Skye.Bauch";
                                    }}),
                                    add(new ComponentSource() {{
                                        name = "Sylvester Krajcik";
                                        originalTransformOrCollection = "delectus";
                                        userName = "Hope_Breitenberg";
                                    }}),
                                }};
                                componentTransform = new org.openapis.openapi.models.shared.ComponentTransform[]{{
                                    add(new ComponentTransform() {{
                                        name = "Ms. Johnnie Krajcik";
                                        originalTransform = "dicta";
                                        userName = "Lafayette74";
                                    }}),
                                    add(new ComponentTransform() {{
                                        name = "Daniel Zemlak";
                                        originalTransform = "sit";
                                        userName = "Kobe61";
                                    }}),
                                    add(new ComponentTransform() {{
                                        name = "Martin Wilderman DVM";
                                        originalTransform = "natus";
                                        userName = "Tracy.Cormier0";
                                    }}),
                                }};
                                id = "5944b935-d237-4a72-b908-49d6aed4aecb";
                                inputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Gladys Koch";
                                        originalTransformOrCollection = "excepturi";
                                        sizeBytes = "eos";
                                        userName = "Brody_Cremin95";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Greg Kutch";
                                        originalTransformOrCollection = "inventore";
                                        sizeBytes = "error";
                                        userName = "Malinda_Pollich13";
                                    }}),
                                }};
                                kind = ExecutionStageSummaryKindEnum.SINGLETON_KIND;
                                name = "Agnes Boyle DDS";
                                outputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Meredith Green";
                                        originalTransformOrCollection = "vero";
                                        sizeBytes = "reiciendis";
                                        userName = "Beverly8";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Elmer Lang";
                                        originalTransformOrCollection = "hic";
                                        sizeBytes = "accusantium";
                                        userName = "Percival5";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Jenna Crist";
                                        originalTransformOrCollection = "illum";
                                        sizeBytes = "veniam";
                                        userName = "Felicita.Schmeler36";
                                    }}),
                                }};
                                prerequisiteStage = new String[]{{
                                    add("modi"),
                                    add("similique"),
                                    add("quasi"),
                                }};
                            }}),
                            add(new ExecutionStageSummary() {{
                                componentSource = new org.openapis.openapi.models.shared.ComponentSource[]{{
                                    add(new ComponentSource() {{
                                        name = "Marcella Kozey";
                                        originalTransformOrCollection = "omnis";
                                        userName = "Izaiah_Buckridge54";
                                    }}),
                                    add(new ComponentSource() {{
                                        name = "Karen Roob";
                                        originalTransformOrCollection = "harum";
                                        userName = "Adriel_Feest";
                                    }}),
                                    add(new ComponentSource() {{
                                        name = "Miss Guy Turcotte";
                                        originalTransformOrCollection = "corrupti";
                                        userName = "Keith55";
                                    }}),
                                }};
                                componentTransform = new org.openapis.openapi.models.shared.ComponentTransform[]{{
                                    add(new ComponentTransform() {{
                                        name = "Leroy Stoltenberg II";
                                        originalTransform = "laborum";
                                        userName = "Trudie_Cremin";
                                    }}),
                                    add(new ComponentTransform() {{
                                        name = "Rosemarie Schulist";
                                        originalTransform = "labore";
                                        userName = "Harrison.OConner";
                                    }}),
                                }};
                                id = "cfd6d828-da01-4319-9129-646645c1d81f";
                                inputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Thomas Gusikowski";
                                        originalTransformOrCollection = "nemo";
                                        sizeBytes = "laboriosam";
                                        userName = "Leonel_Predovic";
                                    }}),
                                }};
                                kind = ExecutionStageSummaryKindEnum.SHUFFLE_KIND;
                                name = "David Volkman";
                                outputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Kristin Schowalter";
                                        originalTransformOrCollection = "ipsa";
                                        sizeBytes = "dignissimos";
                                        userName = "Arno.Pollich40";
                                    }}),
                                }};
                                prerequisiteStage = new String[]{{
                                    add("officiis"),
                                }};
                            }}),
                        }};
                        originalPipelineTransform = new org.openapis.openapi.models.shared.TransformSummary[]{{
                            add(new TransformSummary() {{
                                displayData = new org.openapis.openapi.models.shared.DisplayData[]{{
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "unde";
                                        floatValue = 6872.4;
                                        int64Value = "sequi";
                                        javaClassValue = "libero";
                                        key = "ipsa";
                                        label = "blanditiis";
                                        namespace = "aliquam";
                                        shortStrValue = "vero";
                                        strValue = "dolorum";
                                        timestampValue = "omnis";
                                        url = "occaecati";
                                    }}),
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "consequuntur";
                                        floatValue = 3307.25;
                                        int64Value = "quam";
                                        javaClassValue = "repellendus";
                                        key = "eaque";
                                        label = "incidunt";
                                        namespace = "asperiores";
                                        shortStrValue = "eius";
                                        strValue = "ipsa";
                                        timestampValue = "quas";
                                        url = "incidunt";
                                    }}),
                                }};
                                id = "7a742d84-496c-4bde-acf6-b99bc63562eb";
                                inputCollectionName = new String[]{{
                                    add("temporibus"),
                                    add("delectus"),
                                    add("enim"),
                                    add("ipsam"),
                                }};
                                kind = TransformSummaryKindEnum.SINGLETON_KIND;
                                name = "Margarita Grant III";
                                outputCollectionName = new String[]{{
                                    add("nobis"),
                                }};
                            }}),
                        }};
                        stepNamesHash = "accusantium";
                    }};;
                    projectId = "ea";
                    replaceJobId = "laborum";
                    replacedByJobId = "et";
                    requestedState = JobRequestedStateEnum.JOB_STATE_STOPPED;
                    runtimeUpdatableParams = new RuntimeUpdatableParams() {{
                        maxNumWorkers = 550579;
                        minNumWorkers = 476770;
                    }};;
                    satisfiesPzs = false;
                    stageStates = new org.openapis.openapi.models.shared.ExecutionStageState[]{{
                        add(new ExecutionStageState() {{
                            currentStateTime = "autem";
                            executionStageName = "numquam";
                            executionStageState = ExecutionStageStateExecutionStageStateEnum.JOB_STATE_QUEUED;
                        }}),
                        add(new ExecutionStageState() {{
                            currentStateTime = "debitis";
                            executionStageName = "earum";
                            executionStageState = ExecutionStageStateExecutionStageStateEnum.JOB_STATE_FAILED;
                        }}),
                    }};
                    startTime = "assumenda";
                    steps = new org.openapis.openapi.models.shared.Step[]{{
                        add(new Step() {{
                            kind = "porro";
                            name = "Paulette Kassulke";
                            properties = new java.util.HashMap<String, Object>() {{
                                put("quod", "in");
                                put("nesciunt", "temporibus");
                                put("temporibus", "eum");
                            }};
                        }}),
                    }};
                    stepsLocation = "non";
                    tempFiles = new String[]{{
                        add("nostrum"),
                        add("dignissimos"),
                    }};
                    transformNameMapping = new java.util.HashMap<String, String>() {{
                        put("corporis", "ipsa");
                    }};
                    type = JobTypeEnum.JOB_TYPE_BATCH;
                }};;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                fields = "deleniti";
                key = "dignissimos";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "quibusdam";
                replaceJobId = "adipisci";
                uploadType = "minus";
                uploadProtocol = "veniam";
                view = DataflowProjectsLocationsJobsCreateViewEnum.JOB_VIEW_ALL;
            }};            

            DataflowProjectsLocationsJobsCreateResponse res = sdk.projects.dataflowProjectsLocationsJobsCreate(req, new DataflowProjectsLocationsJobsCreateSecurity() {{
                option1 = new DataflowProjectsLocationsJobsCreateSecurityOption1("architecto", "maiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## dataflowProjectsLocationsJobsDebugGetConfig

Get encoded debug configuration for component. Not cacheable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsDebugGetConfigRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsDebugGetConfigResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsDebugGetConfigSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsDebugGetConfigSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsDebugGetConfigSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsDebugGetConfigSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsDebugGetConfigSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetDebugConfigRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsJobsDebugGetConfigRequest req = new DataflowProjectsLocationsJobsDebugGetConfigRequest("perspiciatis", "quod", "magni") {{
                dollarXgafv = XgafvEnum.ONE;
                getDebugConfigRequest = new GetDebugConfigRequest() {{
                    componentId = "fugit";
                    location = "quisquam";
                    workerId = "odio";
                }};;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "culpa";
                key = "illo";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "doloremque";
                uploadProtocol = "quod";
            }};            

            DataflowProjectsLocationsJobsDebugGetConfigResponse res = sdk.projects.dataflowProjectsLocationsJobsDebugGetConfig(req, new DataflowProjectsLocationsJobsDebugGetConfigSecurity() {{
                option1 = new DataflowProjectsLocationsJobsDebugGetConfigSecurityOption1("dignissimos", "non") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getDebugConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsLocationsJobsDebugSendCapture

Send encoded debug capture data for component.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsDebugSendCaptureRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsDebugSendCaptureResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsDebugSendCaptureSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SendDebugCaptureRequest;
import org.openapis.openapi.models.shared.SendDebugCaptureRequestDataFormatEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsJobsDebugSendCaptureRequest req = new DataflowProjectsLocationsJobsDebugSendCaptureRequest("facere", "repellat", "exercitationem") {{
                dollarXgafv = XgafvEnum.TWO;
                sendDebugCaptureRequest = new SendDebugCaptureRequest() {{
                    componentId = "ea";
                    data = "molestiae";
                    dataFormat = SendDebugCaptureRequestDataFormatEnum.DATA_FORMAT_UNSPECIFIED;
                    location = "excepturi";
                    workerId = "voluptatum";
                }};;
                accessToken = "iste";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "magnam";
                key = "consequuntur";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "nobis";
                uploadProtocol = "expedita";
            }};            

            DataflowProjectsLocationsJobsDebugSendCaptureResponse res = sdk.projects.dataflowProjectsLocationsJobsDebugSendCapture(req, new DataflowProjectsLocationsJobsDebugSendCaptureSecurity() {{
                option1 = new DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption1("modi", "adipisci") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sendDebugCaptureResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsLocationsJobsGet

Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetSecurityOption4;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsJobsGetRequest req = new DataflowProjectsLocationsJobsGetRequest("atque", "at", "rem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "tempore";
                alt = AltEnum.JSON;
                callback = "laboriosam";
                fields = "aperiam";
                key = "minima";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "assumenda";
                uploadProtocol = "reprehenderit";
                view = DataflowProjectsLocationsJobsGetViewEnum.JOB_VIEW_SUMMARY;
            }};            

            DataflowProjectsLocationsJobsGetResponse res = sdk.projects.dataflowProjectsLocationsJobsGet(req, new DataflowProjectsLocationsJobsGetSecurity() {{
                option1 = new DataflowProjectsLocationsJobsGetSecurityOption1("ad", "voluptates") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## dataflowProjectsLocationsJobsGetExecutionDetails

Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetExecutionDetailsRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetExecutionDetailsResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetExecutionDetailsSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsJobsGetExecutionDetailsRequest req = new DataflowProjectsLocationsJobsGetExecutionDetailsRequest("sequi", "eligendi", "consequuntur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veniam";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "excepturi";
                key = "porro";
                oauthToken = "nesciunt";
                pageSize = 978631L;
                pageToken = "veniam";
                prettyPrint = false;
                quotaUser = "autem";
                uploadType = "esse";
                uploadProtocol = "officiis";
            }};            

            DataflowProjectsLocationsJobsGetExecutionDetailsResponse res = sdk.projects.dataflowProjectsLocationsJobsGetExecutionDetails(req, new DataflowProjectsLocationsJobsGetExecutionDetailsSecurity() {{
                option1 = new DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption1("aperiam", "itaque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.jobExecutionDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsLocationsJobsGetMetrics

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetMetricsRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetMetricsResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetMetricsSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetMetricsSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetMetricsSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetMetricsSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsGetMetricsSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsJobsGetMetricsRequest req = new DataflowProjectsLocationsJobsGetMetricsRequest("sed", "corporis", "consequuntur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "nobis";
                fields = "beatae";
                key = "repellendus";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "consequuntur";
                startTime = "delectus";
                uploadType = "nobis";
                uploadProtocol = "possimus";
            }};            

            DataflowProjectsLocationsJobsGetMetricsResponse res = sdk.projects.dataflowProjectsLocationsJobsGetMetrics(req, new DataflowProjectsLocationsJobsGetMetricsSecurity() {{
                option1 = new DataflowProjectsLocationsJobsGetMetricsSecurityOption1("laborum", "optio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.jobMetrics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsLocationsJobsList

List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsListFilterEnum;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsListRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsListResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsListSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsListSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsListSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsListSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsListSecurityOption4;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsJobsListRequest req = new DataflowProjectsLocationsJobsListRequest("debitis", "architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequatur";
                alt = AltEnum.JSON;
                callback = "odit";
                fields = "inventore";
                filter = DataflowProjectsLocationsJobsListFilterEnum.ALL;
                key = "quod";
                name = "Russell Collier";
                oauthToken = "accusamus";
                pageSize = 535801L;
                pageToken = "earum";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "enim";
                uploadProtocol = "minus";
                view = DataflowProjectsLocationsJobsListViewEnum.JOB_VIEW_DESCRIPTION;
            }};            

            DataflowProjectsLocationsJobsListResponse res = sdk.projects.dataflowProjectsLocationsJobsList(req, new DataflowProjectsLocationsJobsListSecurity() {{
                option1 = new DataflowProjectsLocationsJobsListSecurityOption1("accusantium", "nulla") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## dataflowProjectsLocationsJobsMessagesList

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsMessagesListRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsMessagesListResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsMessagesListSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsMessagesListSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsMessagesListSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsMessagesListSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsMessagesListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsJobsMessagesListRequest req = new DataflowProjectsLocationsJobsMessagesListRequest("inventore", "omnis", "quibusdam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nostrum";
                alt = AltEnum.MEDIA;
                callback = "doloribus";
                endTime = "magnam";
                fields = "adipisci";
                key = "natus";
                minimumImportance = DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum.JOB_MESSAGE_ERROR;
                oauthToken = "velit";
                pageSize = 573816L;
                pageToken = "eos";
                prettyPrint = false;
                quotaUser = "nisi";
                startTime = "commodi";
                uploadType = "impedit";
                uploadProtocol = "facilis";
            }};            

            DataflowProjectsLocationsJobsMessagesListResponse res = sdk.projects.dataflowProjectsLocationsJobsMessagesList(req, new DataflowProjectsLocationsJobsMessagesListSecurity() {{
                option1 = new DataflowProjectsLocationsJobsMessagesListSecurityOption1("temporibus", "error") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listJobMessagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsLocationsJobsSnapshot

Snapshot the state of a streaming job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsSnapshotRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsSnapshotResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsSnapshotSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsSnapshotSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsSnapshotSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsSnapshotSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsSnapshotSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SnapshotJobRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsJobsSnapshotRequest req = new DataflowProjectsLocationsJobsSnapshotRequest("quaerat", "delectus", "molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                snapshotJobRequest = new SnapshotJobRequest() {{
                    description = "laborum";
                    location = "odit";
                    snapshotSources = false;
                    ttl = "rerum";
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "et";
                fields = "et";
                key = "ratione";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                uploadType = "nostrum";
                uploadProtocol = "temporibus";
            }};            

            DataflowProjectsLocationsJobsSnapshotResponse res = sdk.projects.dataflowProjectsLocationsJobsSnapshot(req, new DataflowProjectsLocationsJobsSnapshotSecurity() {{
                option1 = new DataflowProjectsLocationsJobsSnapshotSecurityOption1("et", "debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.snapshot != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsLocationsJobsSnapshotsList

Lists snapshots.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsSnapshotsListRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsSnapshotsListResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsSnapshotsListSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsSnapshotsListSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsSnapshotsListSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsSnapshotsListSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsSnapshotsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsJobsSnapshotsListRequest req = new DataflowProjectsLocationsJobsSnapshotsListRequest("nisi", "aliquid", "excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repellat";
                alt = AltEnum.PROTO;
                callback = "eligendi";
                fields = "quaerat";
                key = "veniam";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "dolores";
                uploadProtocol = "dicta";
            }};            

            DataflowProjectsLocationsJobsSnapshotsListResponse res = sdk.projects.dataflowProjectsLocationsJobsSnapshotsList(req, new DataflowProjectsLocationsJobsSnapshotsListSecurity() {{
                option1 = new DataflowProjectsLocationsJobsSnapshotsListSecurityOption1("molestiae", "maxime") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listSnapshotsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsLocationsJobsStagesGetExecutionDetails

Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest req = new DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest("dolores", "molestias", "quam", "molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "consectetur";
                endTime = "velit";
                fields = "tempora";
                key = "aspernatur";
                oauthToken = "ad";
                pageSize = 275665L;
                pageToken = "alias";
                prettyPrint = false;
                quotaUser = "adipisci";
                startTime = "atque";
                uploadType = "tempore";
                uploadProtocol = "asperiores";
            }};            

            DataflowProjectsLocationsJobsStagesGetExecutionDetailsResponse res = sdk.projects.dataflowProjectsLocationsJobsStagesGetExecutionDetails(req, new DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity() {{
                option1 = new DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption1("distinctio", "minima") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.stageExecutionDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsLocationsJobsUpdate

Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsUpdateRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsUpdateResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsUpdateSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsUpdateSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsUpdateSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsUpdateSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AutoscalingSettings;
import org.openapis.openapi.models.shared.AutoscalingSettingsAlgorithmEnum;
import org.openapis.openapi.models.shared.BigQueryIODetails;
import org.openapis.openapi.models.shared.BigTableIODetails;
import org.openapis.openapi.models.shared.ComponentSource;
import org.openapis.openapi.models.shared.ComponentTransform;
import org.openapis.openapi.models.shared.DatastoreIODetails;
import org.openapis.openapi.models.shared.DebugOptions;
import org.openapis.openapi.models.shared.Disk;
import org.openapis.openapi.models.shared.DisplayData;
import org.openapis.openapi.models.shared.EnvironmentFlexResourceSchedulingGoalEnum;
import org.openapis.openapi.models.shared.EnvironmentInput;
import org.openapis.openapi.models.shared.ExecutionStageState;
import org.openapis.openapi.models.shared.ExecutionStageStateExecutionStageStateEnum;
import org.openapis.openapi.models.shared.ExecutionStageSummary;
import org.openapis.openapi.models.shared.ExecutionStageSummaryKindEnum;
import org.openapis.openapi.models.shared.FileIODetails;
import org.openapis.openapi.models.shared.JobCurrentStateEnum;
import org.openapis.openapi.models.shared.JobExecutionInfo;
import org.openapis.openapi.models.shared.JobExecutionStageInfo;
import org.openapis.openapi.models.shared.JobInput;
import org.openapis.openapi.models.shared.JobMetadata;
import org.openapis.openapi.models.shared.JobRequestedStateEnum;
import org.openapis.openapi.models.shared.JobTypeEnum;
import org.openapis.openapi.models.shared.Package;
import org.openapis.openapi.models.shared.PipelineDescription;
import org.openapis.openapi.models.shared.PubSubIODetails;
import org.openapis.openapi.models.shared.RuntimeUpdatableParams;
import org.openapis.openapi.models.shared.SDKHarnessContainerImage;
import org.openapis.openapi.models.shared.SDKVersion;
import org.openapis.openapi.models.shared.SDKVersionSDKSupportStatusEnum;
import org.openapis.openapi.models.shared.SpannerIODetails;
import org.openapis.openapi.models.shared.StageSource;
import org.openapis.openapi.models.shared.Step;
import org.openapis.openapi.models.shared.TaskRunnerSettings;
import org.openapis.openapi.models.shared.TransformSummary;
import org.openapis.openapi.models.shared.TransformSummaryKindEnum;
import org.openapis.openapi.models.shared.WorkerPool;
import org.openapis.openapi.models.shared.WorkerPoolDefaultPackageSetEnum;
import org.openapis.openapi.models.shared.WorkerPoolIpConfigurationEnum;
import org.openapis.openapi.models.shared.WorkerPoolTeardownPolicyEnum;
import org.openapis.openapi.models.shared.WorkerSettings;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsJobsUpdateRequest req = new DataflowProjectsLocationsJobsUpdateRequest("cupiditate", "molestiae", "et") {{
                dollarXgafv = XgafvEnum.TWO;
                jobInput = new JobInput() {{
                    clientRequestId = "excepturi";
                    createTime = "deleniti";
                    createdFromSnapshotId = "inventore";
                    currentState = JobCurrentStateEnum.JOB_STATE_DRAINING;
                    currentStateTime = "perferendis";
                    environment = new EnvironmentInput() {{
                        clusterManagerApiService = "corporis";
                        dataset = "ullam";
                        debugOptions = new DebugOptions() {{
                            enableHotKeyLogging = false;
                        }};;
                        experiments = new String[]{{
                            add("adipisci"),
                            add("totam"),
                        }};
                        flexResourceSchedulingGoal = EnvironmentFlexResourceSchedulingGoalEnum.FLEXRS_SPEED_OPTIMIZED;
                        internalExperiments = new java.util.HashMap<String, Object>() {{
                            put("itaque", "at");
                            put("nam", "id");
                            put("cumque", "in");
                            put("a", "quibusdam");
                        }};
                        sdkPipelineOptions = new java.util.HashMap<String, Object>() {{
                            put("dolor", "occaecati");
                            put("exercitationem", "unde");
                            put("labore", "pariatur");
                        }};
                        serviceAccountEmail = "vel";
                        serviceKmsKeyName = "laboriosam";
                        serviceOptions = new String[]{{
                            add("minus"),
                            add("magni"),
                            add("mollitia"),
                        }};
                        tempStoragePrefix = "officiis";
                        userAgent = new java.util.HashMap<String, Object>() {{
                            put("quas", "aut");
                            put("autem", "dolorem");
                        }};
                        version = new java.util.HashMap<String, Object>() {{
                            put("rerum", "iste");
                        }};
                        workerPools = new org.openapis.openapi.models.shared.WorkerPool[]{{
                            add(new WorkerPool() {{
                                autoscalingSettings = new AutoscalingSettings() {{
                                    algorithm = AutoscalingSettingsAlgorithmEnum.AUTOSCALING_ALGORITHM_UNKNOWN;
                                    maxNumWorkers = 274594;
                                }};
                                dataDisks = new org.openapis.openapi.models.shared.Disk[]{{
                                    add(new Disk() {{
                                        diskType = "iure";
                                        mountPoint = "voluptatibus";
                                        sizeGb = 661149;
                                    }}),
                                    add(new Disk() {{
                                        diskType = "qui";
                                        mountPoint = "explicabo";
                                        sizeGb = 36842;
                                    }}),
                                    add(new Disk() {{
                                        diskType = "eum";
                                        mountPoint = "nesciunt";
                                        sizeGb = 416624;
                                    }}),
                                }};
                                defaultPackageSet = WorkerPoolDefaultPackageSetEnum.DEFAULT_PACKAGE_SET_JAVA;
                                diskSizeGb = 542601;
                                diskSourceImage = "explicabo";
                                diskType = "totam";
                                ipConfiguration = WorkerPoolIpConfigurationEnum.WORKER_IP_PUBLIC;
                                kind = "nemo";
                                machineType = "sequi";
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("libero", "ab");
                                    put("alias", "accusantium");
                                    put("doloremque", "autem");
                                    put("tempore", "necessitatibus");
                                }};
                                network = "reiciendis";
                                numThreadsPerWorker = 277569;
                                numWorkers = 590528;
                                onHostMaintenance = "dolores";
                                packages = new org.openapis.openapi.models.shared.Package[]{{
                                    add(new Package() {{
                                        location = "recusandae";
                                        name = "Martin Balistreri";
                                    }}),
                                }};
                                poolArgs = new java.util.HashMap<String, Object>() {{
                                    put("molestiae", "eius");
                                    put("perspiciatis", "amet");
                                    put("ex", "aliquid");
                                }};
                                sdkHarnessContainerImages = new org.openapis.openapi.models.shared.SDKHarnessContainerImage[]{{
                                    add(new SDKHarnessContainerImage() {{
                                        capabilities = new String[]{{
                                            add("rem"),
                                            add("eveniet"),
                                            add("eveniet"),
                                            add("voluptatem"),
                                        }};
                                        containerImage = "repellat";
                                        environmentId = "magni";
                                        useSingleCorePerContainer = false;
                                    }}),
                                    add(new SDKHarnessContainerImage() {{
                                        capabilities = new String[]{{
                                            add("sapiente"),
                                            add("veritatis"),
                                            add("provident"),
                                        }};
                                        containerImage = "veniam";
                                        environmentId = "quos";
                                        useSingleCorePerContainer = false;
                                    }}),
                                    add(new SDKHarnessContainerImage() {{
                                        capabilities = new String[]{{
                                            add("facere"),
                                            add("eius"),
                                            add("doloremque"),
                                        }};
                                        containerImage = "vero";
                                        environmentId = "aut";
                                        useSingleCorePerContainer = false;
                                    }}),
                                }};
                                subnetwork = "sequi";
                                taskrunnerSettings = new TaskRunnerSettings() {{
                                    alsologtostderr = false;
                                    baseTaskDir = "reiciendis";
                                    baseUrl = "neque";
                                    commandlinesFileName = "assumenda";
                                    continueOnException = false;
                                    dataflowApiVersion = "saepe";
                                    harnessCommand = "nobis";
                                    languageHint = "est";
                                    logDir = "quia";
                                    logToSerialconsole = false;
                                    logUploadLocation = "natus";
                                    oauthScopes = new String[]{{
                                        add("facilis"),
                                        add("earum"),
                                    }};
                                    parallelWorkerSettings = new WorkerSettings() {{
                                        baseUrl = "ipsum";
                                        reportingEnabled = false;
                                        servicePath = "itaque";
                                        shuffleServicePath = "cupiditate";
                                        tempStoragePrefix = "consequatur";
                                        workerId = "harum";
                                    }};
                                    streamingWorkerMainClass = "nobis";
                                    taskGroup = "numquam";
                                    taskUser = "consequatur";
                                    tempStoragePrefix = "temporibus";
                                    vmId = "doloribus";
                                    workflowFileName = "quos";
                                }};
                                teardownPolicy = WorkerPoolTeardownPolicyEnum.TEARDOWN_ALWAYS;
                                workerHarnessContainerImage = "blanditiis";
                                zone = "voluptatibus";
                            }}),
                            add(new WorkerPool() {{
                                autoscalingSettings = new AutoscalingSettings() {{
                                    algorithm = AutoscalingSettingsAlgorithmEnum.AUTOSCALING_ALGORITHM_BASIC;
                                    maxNumWorkers = 367747;
                                }};
                                dataDisks = new org.openapis.openapi.models.shared.Disk[]{{
                                    add(new Disk() {{
                                        diskType = "dolore";
                                        mountPoint = "perferendis";
                                        sizeGb = 316292;
                                    }}),
                                }};
                                defaultPackageSet = WorkerPoolDefaultPackageSetEnum.DEFAULT_PACKAGE_SET_PYTHON;
                                diskSizeGb = 730679;
                                diskSourceImage = "dolor";
                                diskType = "nesciunt";
                                ipConfiguration = WorkerPoolIpConfigurationEnum.WORKER_IP_UNSPECIFIED;
                                kind = "pariatur";
                                machineType = "numquam";
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("quia", "reiciendis");
                                    put("modi", "doloribus");
                                    put("et", "qui");
                                }};
                                network = "iusto";
                                numThreadsPerWorker = 955783;
                                numWorkers = 694148;
                                onHostMaintenance = "aperiam";
                                packages = new org.openapis.openapi.models.shared.Package[]{{
                                    add(new Package() {{
                                        location = "voluptatem";
                                        name = "Moses Brekke";
                                    }}),
                                    add(new Package() {{
                                        location = "fugit";
                                        name = "Delores Marquardt";
                                    }}),
                                    add(new Package() {{
                                        location = "nulla";
                                        name = "Marguerite Romaguera";
                                    }}),
                                    add(new Package() {{
                                        location = "odio";
                                        name = "Iris VonRueden";
                                    }}),
                                }};
                                poolArgs = new java.util.HashMap<String, Object>() {{
                                    put("esse", "alias");
                                    put("consequuntur", "architecto");
                                    put("est", "nemo");
                                }};
                                sdkHarnessContainerImages = new org.openapis.openapi.models.shared.SDKHarnessContainerImage[]{{
                                    add(new SDKHarnessContainerImage() {{
                                        capabilities = new String[]{{
                                            add("quaerat"),
                                        }};
                                        containerImage = "suscipit";
                                        environmentId = "rerum";
                                        useSingleCorePerContainer = false;
                                    }}),
                                }};
                                subnetwork = "laboriosam";
                                taskrunnerSettings = new TaskRunnerSettings() {{
                                    alsologtostderr = false;
                                    baseTaskDir = "aliquam";
                                    baseUrl = "repudiandae";
                                    commandlinesFileName = "unde";
                                    continueOnException = false;
                                    dataflowApiVersion = "excepturi";
                                    harnessCommand = "voluptatibus";
                                    languageHint = "facilis";
                                    logDir = "doloremque";
                                    logToSerialconsole = false;
                                    logUploadLocation = "officiis";
                                    oauthScopes = new String[]{{
                                        add("reprehenderit"),
                                        add("necessitatibus"),
                                    }};
                                    parallelWorkerSettings = new WorkerSettings() {{
                                        baseUrl = "alias";
                                        reportingEnabled = false;
                                        servicePath = "provident";
                                        shuffleServicePath = "ut";
                                        tempStoragePrefix = "hic";
                                        workerId = "facere";
                                    }};
                                    streamingWorkerMainClass = "tenetur";
                                    taskGroup = "saepe";
                                    taskUser = "assumenda";
                                    tempStoragePrefix = "exercitationem";
                                    vmId = "exercitationem";
                                    workflowFileName = "dolore";
                                }};
                                teardownPolicy = WorkerPoolTeardownPolicyEnum.TEARDOWN_POLICY_UNKNOWN;
                                workerHarnessContainerImage = "recusandae";
                                zone = "a";
                            }}),
                            add(new WorkerPool() {{
                                autoscalingSettings = new AutoscalingSettings() {{
                                    algorithm = AutoscalingSettingsAlgorithmEnum.AUTOSCALING_ALGORITHM_NONE;
                                    maxNumWorkers = 204080;
                                }};
                                dataDisks = new org.openapis.openapi.models.shared.Disk[]{{
                                    add(new Disk() {{
                                        diskType = "velit";
                                        mountPoint = "ut";
                                        sizeGb = 665905;
                                    }}),
                                    add(new Disk() {{
                                        diskType = "quasi";
                                        mountPoint = "rerum";
                                        sizeGb = 501236;
                                    }}),
                                    add(new Disk() {{
                                        diskType = "sapiente";
                                        mountPoint = "recusandae";
                                        sizeGb = 595267;
                                    }}),
                                }};
                                defaultPackageSet = WorkerPoolDefaultPackageSetEnum.DEFAULT_PACKAGE_SET_JAVA;
                                diskSizeGb = 440330;
                                diskSourceImage = "dolorem";
                                diskType = "sunt";
                                ipConfiguration = WorkerPoolIpConfigurationEnum.WORKER_IP_PRIVATE;
                                kind = "nulla";
                                machineType = "cumque";
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("ad", "fugiat");
                                }};
                                network = "quas";
                                numThreadsPerWorker = 336314;
                                numWorkers = 681953;
                                onHostMaintenance = "eveniet";
                                packages = new org.openapis.openapi.models.shared.Package[]{{
                                    add(new Package() {{
                                        location = "illum";
                                        name = "Dr. Jean Klein";
                                    }}),
                                }};
                                poolArgs = new java.util.HashMap<String, Object>() {{
                                    put("molestias", "odio");
                                }};
                                sdkHarnessContainerImages = new org.openapis.openapi.models.shared.SDKHarnessContainerImage[]{{
                                    add(new SDKHarnessContainerImage() {{
                                        capabilities = new String[]{{
                                            add("sint"),
                                        }};
                                        containerImage = "consequatur";
                                        environmentId = "illum";
                                        useSingleCorePerContainer = false;
                                    }}),
                                    add(new SDKHarnessContainerImage() {{
                                        capabilities = new String[]{{
                                            add("dolorem"),
                                        }};
                                        containerImage = "ex";
                                        environmentId = "quis";
                                        useSingleCorePerContainer = false;
                                    }}),
                                }};
                                subnetwork = "eum";
                                taskrunnerSettings = new TaskRunnerSettings() {{
                                    alsologtostderr = false;
                                    baseTaskDir = "et";
                                    baseUrl = "officiis";
                                    commandlinesFileName = "quo";
                                    continueOnException = false;
                                    dataflowApiVersion = "culpa";
                                    harnessCommand = "architecto";
                                    languageHint = "iure";
                                    logDir = "eveniet";
                                    logToSerialconsole = false;
                                    logUploadLocation = "doloribus";
                                    oauthScopes = new String[]{{
                                        add("iste"),
                                        add("tempora"),
                                        add("ad"),
                                    }};
                                    parallelWorkerSettings = new WorkerSettings() {{
                                        baseUrl = "ab";
                                        reportingEnabled = false;
                                        servicePath = "harum";
                                        shuffleServicePath = "facere";
                                        tempStoragePrefix = "ducimus";
                                        workerId = "nisi";
                                    }};
                                    streamingWorkerMainClass = "accusamus";
                                    taskGroup = "officiis";
                                    taskUser = "necessitatibus";
                                    tempStoragePrefix = "nam";
                                    vmId = "nemo";
                                    workflowFileName = "veritatis";
                                }};
                                teardownPolicy = WorkerPoolTeardownPolicyEnum.TEARDOWN_ON_SUCCESS;
                                workerHarnessContainerImage = "impedit";
                                zone = "modi";
                            }}),
                        }};
                        workerRegion = "possimus";
                        workerZone = "similique";
                    }};;
                    executionInfo = new JobExecutionInfo() {{
                        stages = new java.util.HashMap<String, org.openapis.openapi.models.shared.JobExecutionStageInfo>() {{
                            put("asperiores", new JobExecutionStageInfo() {{
                                stepName = new String[]{{
                                    add("repellendus"),
                                    add("dolor"),
                                    add("nemo"),
                                }};
                            }});
                        }};
                    }};;
                    id = "512f06d4-e5b7-42f0-b548-568a0424e00a";
                    jobMetadata = new JobMetadata() {{
                        bigTableDetails = new org.openapis.openapi.models.shared.BigTableIODetails[]{{
                            add(new BigTableIODetails() {{
                                instanceId = "quibusdam";
                                projectId = "autem";
                                tableId = "voluptates";
                            }}),
                        }};
                        bigqueryDetails = new org.openapis.openapi.models.shared.BigQueryIODetails[]{{
                            add(new BigQueryIODetails() {{
                                dataset = "cupiditate";
                                projectId = "modi";
                                query = "ratione";
                                table = "aliquam";
                            }}),
                            add(new BigQueryIODetails() {{
                                dataset = "ea";
                                projectId = "aliquam";
                                query = "corporis";
                                table = "at";
                            }}),
                            add(new BigQueryIODetails() {{
                                dataset = "ipsa";
                                projectId = "amet";
                                query = "aut";
                                table = "molestias";
                            }}),
                        }};
                        datastoreDetails = new org.openapis.openapi.models.shared.DatastoreIODetails[]{{
                            add(new DatastoreIODetails() {{
                                namespace = "repellat";
                                projectId = "expedita";
                            }}),
                            add(new DatastoreIODetails() {{
                                namespace = "libero";
                                projectId = "mollitia";
                            }}),
                        }};
                        fileDetails = new org.openapis.openapi.models.shared.FileIODetails[]{{
                            add(new FileIODetails() {{
                                filePattern = "cumque";
                            }}),
                            add(new FileIODetails() {{
                                filePattern = "cumque";
                            }}),
                        }};
                        pubsubDetails = new org.openapis.openapi.models.shared.PubSubIODetails[]{{
                            add(new PubSubIODetails() {{
                                subscription = "a";
                                topic = "tenetur";
                            }}),
                            add(new PubSubIODetails() {{
                                subscription = "ipsam";
                                topic = "quod";
                            }}),
                            add(new PubSubIODetails() {{
                                subscription = "facilis";
                                topic = "doloremque";
                            }}),
                            add(new PubSubIODetails() {{
                                subscription = "illo";
                                topic = "reiciendis";
                            }}),
                        }};
                        sdkVersion = new SDKVersion() {{
                            sdkSupportStatus = SDKVersionSDKSupportStatusEnum.UNSUPPORTED;
                            version = "enim";
                            versionDisplayName = "quasi";
                        }};;
                        spannerDetails = new org.openapis.openapi.models.shared.SpannerIODetails[]{{
                            add(new SpannerIODetails() {{
                                databaseId = "ipsam";
                                instanceId = "aspernatur";
                                projectId = "atque";
                            }}),
                            add(new SpannerIODetails() {{
                                databaseId = "animi";
                                instanceId = "eius";
                                projectId = "ad";
                            }}),
                            add(new SpannerIODetails() {{
                                databaseId = "mollitia";
                                instanceId = "minus";
                                projectId = "quos";
                            }}),
                            add(new SpannerIODetails() {{
                                databaseId = "explicabo";
                                instanceId = "distinctio";
                                projectId = "praesentium";
                            }}),
                        }};
                        userDisplayProperties = new java.util.HashMap<String, String>() {{
                            put("maiores", "corrupti");
                            put("libero", "placeat");
                        }};
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("placeat", "animi");
                    }};
                    location = "expedita";
                    name = "Dave Shanahan";
                    pipelineDescription = new PipelineDescription() {{
                        displayData = new org.openapis.openapi.models.shared.DisplayData[]{{
                            add(new DisplayData() {{
                                boolValue = false;
                                durationValue = "fugit";
                                floatValue = 4713.17;
                                int64Value = "illum";
                                javaClassValue = "nulla";
                                key = "nemo";
                                label = "omnis";
                                namespace = "iure";
                                shortStrValue = "hic";
                                strValue = "sapiente";
                                timestampValue = "eius";
                                url = "esse";
                            }}),
                        }};
                        executionPipelineStage = new org.openapis.openapi.models.shared.ExecutionStageSummary[]{{
                            add(new ExecutionStageSummary() {{
                                componentSource = new org.openapis.openapi.models.shared.ComponentSource[]{{
                                    add(new ComponentSource() {{
                                        name = "Alfonso Bosco";
                                        originalTransformOrCollection = "nihil";
                                        userName = "Deshawn.Prosacco";
                                    }}),
                                }};
                                componentTransform = new org.openapis.openapi.models.shared.ComponentTransform[]{{
                                    add(new ComponentTransform() {{
                                        name = "Devin Russel";
                                        originalTransform = "voluptatibus";
                                        userName = "Jany.Kuphal53";
                                    }}),
                                    add(new ComponentTransform() {{
                                        name = "Christy Roberts";
                                        originalTransform = "mollitia";
                                        userName = "Heather27";
                                    }}),
                                    add(new ComponentTransform() {{
                                        name = "Diane Stokes";
                                        originalTransform = "ratione";
                                        userName = "Neal51";
                                    }}),
                                    add(new ComponentTransform() {{
                                        name = "Erika Hahn";
                                        originalTransform = "adipisci";
                                        userName = "Tabitha.Bednar";
                                    }}),
                                }};
                                id = "459bebba-d02f-4258-abcf-152558daa95b";
                                inputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Mr. Robyn Stoltenberg";
                                        originalTransformOrCollection = "enim";
                                        sizeBytes = "vel";
                                        userName = "Omari.Feil";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Blake Green";
                                        originalTransformOrCollection = "cum";
                                        sizeBytes = "magnam";
                                        userName = "Janessa46";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Cindy Schiller";
                                        originalTransformOrCollection = "alias";
                                        sizeBytes = "blanditiis";
                                        userName = "Nicolette92";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Byron Bailey";
                                        originalTransformOrCollection = "quas";
                                        sizeBytes = "ratione";
                                        userName = "Verona.Abshire34";
                                    }}),
                                }};
                                kind = ExecutionStageSummaryKindEnum.SHUFFLE_KIND;
                                name = "Ray Pfannerstill";
                                outputSource = new org.openapis.openapi.models.shared.StageSource[]{{
                                    add(new StageSource() {{
                                        name = "Eleanor VonRueden";
                                        originalTransformOrCollection = "quisquam";
                                        sizeBytes = "delectus";
                                        userName = "Nolan_Cartwright";
                                    }}),
                                    add(new StageSource() {{
                                        name = "Benny Koch";
                                        originalTransformOrCollection = "quos";
                                        sizeBytes = "dignissimos";
                                        userName = "Trent92";
                                    }}),
                                }};
                                prerequisiteStage = new String[]{{
                                    add("eius"),
                                }};
                            }}),
                        }};
                        originalPipelineTransform = new org.openapis.openapi.models.shared.TransformSummary[]{{
                            add(new TransformSummary() {{
                                displayData = new org.openapis.openapi.models.shared.DisplayData[]{{
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "pariatur";
                                        floatValue = 2437.52;
                                        int64Value = "necessitatibus";
                                        javaClassValue = "facere";
                                        key = "quae";
                                        label = "cumque";
                                        namespace = "ullam";
                                        shortStrValue = "vel";
                                        strValue = "reprehenderit";
                                        timestampValue = "aut";
                                        url = "recusandae";
                                    }}),
                                }};
                                id = "f42bd3c9-f1cc-4503-b6c3-9bcd0a6290f9";
                                inputCollectionName = new String[]{{
                                    add("quam"),
                                    add("reiciendis"),
                                }};
                                kind = TransformSummaryKindEnum.PAR_DO_KIND;
                                name = "Vernon Bernhard";
                                outputCollectionName = new String[]{{
                                    add("possimus"),
                                    add("molestiae"),
                                    add("officiis"),
                                }};
                            }}),
                            add(new TransformSummary() {{
                                displayData = new org.openapis.openapi.models.shared.DisplayData[]{{
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "voluptatum";
                                        floatValue = 462.26;
                                        int64Value = "reprehenderit";
                                        javaClassValue = "animi";
                                        key = "officia";
                                        label = "eveniet";
                                        namespace = "quae";
                                        shortStrValue = "adipisci";
                                        strValue = "hic";
                                        timestampValue = "dolorem";
                                        url = "adipisci";
                                    }}),
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "optio";
                                        floatValue = 6273.74;
                                        int64Value = "odio";
                                        javaClassValue = "unde";
                                        key = "asperiores";
                                        label = "nam";
                                        namespace = "provident";
                                        shortStrValue = "fugiat";
                                        strValue = "recusandae";
                                        timestampValue = "non";
                                        url = "aut";
                                    }}),
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "neque";
                                        floatValue = 1545.39;
                                        int64Value = "soluta";
                                        javaClassValue = "fuga";
                                        key = "qui";
                                        label = "commodi";
                                        namespace = "a";
                                        shortStrValue = "temporibus";
                                        strValue = "sequi";
                                        timestampValue = "eum";
                                        url = "rem";
                                    }}),
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "expedita";
                                        floatValue = 6562.72;
                                        int64Value = "excepturi";
                                        javaClassValue = "dolores";
                                        key = "dicta";
                                        label = "laboriosam";
                                        namespace = "distinctio";
                                        shortStrValue = "quo";
                                        strValue = "facilis";
                                        timestampValue = "magnam";
                                        url = "dicta";
                                    }}),
                                }};
                                id = "5835c736-4172-4313-bedc-046bc5163bbc";
                                inputCollectionName = new String[]{{
                                    add("eius"),
                                    add("molestias"),
                                    add("dolores"),
                                }};
                                kind = TransformSummaryKindEnum.PAR_DO_KIND;
                                name = "Bethany Fritsch";
                                outputCollectionName = new String[]{{
                                    add("magni"),
                                }};
                            }}),
                            add(new TransformSummary() {{
                                displayData = new org.openapis.openapi.models.shared.DisplayData[]{{
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "minima";
                                        floatValue = 3692.23;
                                        int64Value = "sequi";
                                        javaClassValue = "quaerat";
                                        key = "accusantium";
                                        label = "incidunt";
                                        namespace = "cupiditate";
                                        shortStrValue = "minima";
                                        strValue = "quo";
                                        timestampValue = "quis";
                                        url = "facere";
                                    }}),
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "quidem";
                                        floatValue = 6884.7;
                                        int64Value = "adipisci";
                                        javaClassValue = "optio";
                                        key = "minima";
                                        label = "reprehenderit";
                                        namespace = "quo";
                                        shortStrValue = "vitae";
                                        strValue = "voluptates";
                                        timestampValue = "tempora";
                                        url = "iste";
                                    }}),
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "molestias";
                                        floatValue = 1051.18;
                                        int64Value = "itaque";
                                        javaClassValue = "atque";
                                        key = "dolorum";
                                        label = "similique";
                                        namespace = "qui";
                                        shortStrValue = "enim";
                                        strValue = "quam";
                                        timestampValue = "assumenda";
                                        url = "temporibus";
                                    }}),
                                    add(new DisplayData() {{
                                        boolValue = false;
                                        durationValue = "porro";
                                        floatValue = 967.7;
                                        int64Value = "sint";
                                        javaClassValue = "inventore";
                                        key = "fugit";
                                        label = "earum";
                                        namespace = "quidem";
                                        shortStrValue = "at";
                                        strValue = "debitis";
                                        timestampValue = "eum";
                                        url = "non";
                                    }}),
                                }};
                                id = "bfcc5469-d401-45df-a796-206bef2b0a3e";
                                inputCollectionName = new String[]{{
                                    add("quia"),
                                    add("porro"),
                                }};
                                kind = TransformSummaryKindEnum.UNKNOWN_KIND;
                                name = "Mr. Grant Auer";
                                outputCollectionName = new String[]{{
                                    add("fuga"),
                                    add("culpa"),
                                    add("quo"),
                                }};
                            }}),
                        }};
                        stepNamesHash = "sunt";
                    }};;
                    projectId = "necessitatibus";
                    replaceJobId = "iste";
                    replacedByJobId = "veritatis";
                    requestedState = JobRequestedStateEnum.JOB_STATE_DONE;
                    runtimeUpdatableParams = new RuntimeUpdatableParams() {{
                        maxNumWorkers = 336970;
                        minNumWorkers = 336721;
                    }};;
                    satisfiesPzs = false;
                    stageStates = new org.openapis.openapi.models.shared.ExecutionStageState[]{{
                        add(new ExecutionStageState() {{
                            currentStateTime = "ea";
                            executionStageName = "fugiat";
                            executionStageState = ExecutionStageStateExecutionStageStateEnum.JOB_STATE_STOPPED;
                        }}),
                        add(new ExecutionStageState() {{
                            currentStateTime = "quas";
                            executionStageName = "delectus";
                            executionStageState = ExecutionStageStateExecutionStageStateEnum.JOB_STATE_DRAINING;
                        }}),
                        add(new ExecutionStageState() {{
                            currentStateTime = "voluptatibus";
                            executionStageName = "sint";
                            executionStageState = ExecutionStageStateExecutionStageStateEnum.JOB_STATE_CANCELLED;
                        }}),
                    }};
                    startTime = "est";
                    steps = new org.openapis.openapi.models.shared.Step[]{{
                        add(new Step() {{
                            kind = "nam";
                            name = "Horace Schumm";
                            properties = new java.util.HashMap<String, Object>() {{
                                put("quam", "fugiat");
                                put("ea", "molestiae");
                                put("quo", "deserunt");
                                put("totam", "modi");
                            }};
                        }}),
                        add(new Step() {{
                            kind = "id";
                            name = "Andy Mills";
                            properties = new java.util.HashMap<String, Object>() {{
                                put("quibusdam", "voluptas");
                            }};
                        }}),
                    }};
                    stepsLocation = "quasi";
                    tempFiles = new String[]{{
                        add("numquam"),
                    }};
                    transformNameMapping = new java.util.HashMap<String, String>() {{
                        put("quis", "nesciunt");
                    }};
                    type = JobTypeEnum.JOB_TYPE_UNKNOWN;
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "cumque";
                key = "delectus";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "totam";
                updateMask = "quidem";
                uploadType = "eaque";
                uploadProtocol = "sequi";
            }};            

            DataflowProjectsLocationsJobsUpdateResponse res = sdk.projects.dataflowProjectsLocationsJobsUpdate(req, new DataflowProjectsLocationsJobsUpdateSecurity() {{
                option1 = new DataflowProjectsLocationsJobsUpdateSecurityOption1("fuga", "assumenda") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## dataflowProjectsLocationsJobsWorkItemsLease

Leases a dataflow WorkItem to run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsWorkItemsLeaseRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsWorkItemsLeaseResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsWorkItemsLeaseSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LeaseWorkItemRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsJobsWorkItemsLeaseRequest req = new DataflowProjectsLocationsJobsWorkItemsLeaseRequest("modi", "dolores", "beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                leaseWorkItemRequest = new LeaseWorkItemRequest() {{
                    currentWorkerTime = "repellendus";
                    location = "ut";
                    requestedLeaseDuration = "nesciunt";
                    unifiedWorkerRequest = new java.util.HashMap<String, Object>() {{
                        put("beatae", "delectus");
                        put("ipsa", "quo");
                        put("libero", "eaque");
                        put("animi", "doloremque");
                    }};
                    workItemTypes = new String[]{{
                        add("perferendis"),
                    }};
                    workerCapabilities = new String[]{{
                        add("earum"),
                    }};
                    workerId = "facilis";
                }};;
                accessToken = "eos";
                alt = AltEnum.JSON;
                callback = "fugiat";
                fields = "sint";
                key = "tempore";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "in";
                uploadProtocol = "aperiam";
            }};            

            DataflowProjectsLocationsJobsWorkItemsLeaseResponse res = sdk.projects.dataflowProjectsLocationsJobsWorkItemsLease(req, new DataflowProjectsLocationsJobsWorkItemsLeaseSecurity() {{
                option1 = new DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption1("pariatur", "excepturi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.leaseWorkItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsLocationsJobsWorkItemsReportStatus

Reports the status of dataflow WorkItems leased by a worker.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsWorkItemsReportStatusRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsWorkItemsReportStatusResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApproximateProgress;
import org.openapis.openapi.models.shared.ApproximateReportedProgress;
import org.openapis.openapi.models.shared.ConcatPosition;
import org.openapis.openapi.models.shared.CounterMetadata;
import org.openapis.openapi.models.shared.CounterMetadataKindEnum;
import org.openapis.openapi.models.shared.CounterMetadataStandardUnitsEnum;
import org.openapis.openapi.models.shared.CounterStructuredName;
import org.openapis.openapi.models.shared.CounterStructuredNameAndMetadata;
import org.openapis.openapi.models.shared.CounterStructuredNameOriginEnum;
import org.openapis.openapi.models.shared.CounterStructuredNamePortionEnum;
import org.openapis.openapi.models.shared.CounterUpdate;
import org.openapis.openapi.models.shared.DerivedSource;
import org.openapis.openapi.models.shared.DerivedSourceDerivationModeEnum;
import org.openapis.openapi.models.shared.DistributionUpdate;
import org.openapis.openapi.models.shared.DynamicSourceSplit;
import org.openapis.openapi.models.shared.FloatingPointList;
import org.openapis.openapi.models.shared.FloatingPointMean;
import org.openapis.openapi.models.shared.Histogram;
import org.openapis.openapi.models.shared.IntegerGauge;
import org.openapis.openapi.models.shared.IntegerList;
import org.openapis.openapi.models.shared.IntegerMean;
import org.openapis.openapi.models.shared.MetricStructuredName;
import org.openapis.openapi.models.shared.MetricUpdate;
import org.openapis.openapi.models.shared.NameAndKind;
import org.openapis.openapi.models.shared.NameAndKindKindEnum;
import org.openapis.openapi.models.shared.Position;
import org.openapis.openapi.models.shared.ReportWorkItemStatusRequest;
import org.openapis.openapi.models.shared.ReportedParallelism;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.SourceFork;
import org.openapis.openapi.models.shared.SourceGetMetadataResponse;
import org.openapis.openapi.models.shared.SourceMetadata;
import org.openapis.openapi.models.shared.SourceOperationResponse;
import org.openapis.openapi.models.shared.SourceSplitResponse;
import org.openapis.openapi.models.shared.SourceSplitResponseOutcomeEnum;
import org.openapis.openapi.models.shared.SourceSplitShard;
import org.openapis.openapi.models.shared.SourceSplitShardDerivationModeEnum;
import org.openapis.openapi.models.shared.SplitInt64;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.StringList;
import org.openapis.openapi.models.shared.WorkItemStatus;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsJobsWorkItemsReportStatusRequest req = new DataflowProjectsLocationsJobsWorkItemsReportStatusRequest("aliquam", "voluptatibus", "fuga") {{
                dollarXgafv = XgafvEnum.TWO;
                reportWorkItemStatusRequest = new ReportWorkItemStatusRequest() {{
                    currentWorkerTime = "iure";
                    location = "labore";
                    unifiedWorkerRequest = new java.util.HashMap<String, Object>() {{
                        put("cumque", "corporis");
                    }};
                    workItemStatuses = new org.openapis.openapi.models.shared.WorkItemStatus[]{{
                        add(new WorkItemStatus() {{
                            completed = false;
                            counterUpdates = new org.openapis.openapi.models.shared.CounterUpdate[]{{
                                add(new CounterUpdate() {{
                                    boolean_ = false;
                                    cumulative = false;
                                    distribution = new DistributionUpdate() {{
                                        count = new SplitInt64() {{
                                            highBits = 116932;
                                            lowBits = 973047L;
                                        }};
                                        histogram = new Histogram() {{
                                            bucketCounts = new String[]{{
                                                add("quibusdam"),
                                                add("maxime"),
                                                add("consequuntur"),
                                                add("sit"),
                                            }};
                                            firstBucketOffset = 345509;
                                        }};
                                        max = new SplitInt64() {{
                                            highBits = 40710;
                                            lowBits = 831188L;
                                        }};
                                        min = new SplitInt64() {{
                                            highBits = 188701;
                                            lowBits = 553896L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 863037;
                                            lowBits = 776186L;
                                        }};
                                        sumOfSquares = 1945.65;
                                    }};
                                    floatingPoint = 7777.84;
                                    floatingPointList = new FloatingPointList() {{
                                        elements = new Double[]{{
                                            add(710.87),
                                            add(5108.64),
                                            add(3424.06),
                                            add(2872.52),
                                        }};
                                    }};
                                    floatingPointMean = new FloatingPointMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 479021;
                                            lowBits = 125036L;
                                        }};
                                        sum = 9452.25;
                                    }};
                                    integer = new SplitInt64() {{
                                        highBits = 579952;
                                        lowBits = 898229L;
                                    }};
                                    integerGauge = new IntegerGauge() {{
                                        timestamp = "necessitatibus";
                                        value = new SplitInt64() {{
                                            highBits = 423032;
                                            lowBits = 620363L;
                                        }};
                                    }};
                                    integerList = new IntegerList() {{
                                        elements = new org.openapis.openapi.models.shared.SplitInt64[]{{
                                            add(new SplitInt64() {{
                                                highBits = 434306;
                                                lowBits = 404542L;
                                            }}),
                                        }};
                                    }};
                                    integerMean = new IntegerMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 625009;
                                            lowBits = 535903L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 734741;
                                            lowBits = 904398L;
                                        }};
                                    }};
                                    internal = "adipisci";
                                    nameAndKind = new NameAndKind() {{
                                        kind = NameAndKindKindEnum.MAX;
                                        name = "Gail Trantow";
                                    }};
                                    shortId = "blanditiis";
                                    stringList = new StringList() {{
                                        elements = new String[]{{
                                            add("sequi"),
                                            add("laborum"),
                                            add("fugit"),
                                        }};
                                    }};
                                    structuredNameAndMetadata = new CounterStructuredNameAndMetadata() {{
                                        metadata = new CounterMetadata() {{
                                            description = "totam";
                                            kind = CounterMetadataKindEnum.MEAN;
                                            otherUnits = "corporis";
                                            standardUnits = CounterMetadataStandardUnitsEnum.TIMESTAMP_USEC;
                                        }};
                                        name = new CounterStructuredName() {{
                                            componentStepName = "nisi";
                                            executionStepName = "quo";
                                            inputIndex = 79348;
                                            name = "Mrs. Frankie Hoppe";
                                            origin = CounterStructuredNameOriginEnum.SYSTEM;
                                            originNamespace = "voluptate";
                                            originalRequestingStepName = "repellendus";
                                            originalStepName = "qui";
                                            portion = CounterStructuredNamePortionEnum.KEY;
                                            workerId = "error";
                                        }};
                                    }};
                                }}),
                                add(new CounterUpdate() {{
                                    boolean_ = false;
                                    cumulative = false;
                                    distribution = new DistributionUpdate() {{
                                        count = new SplitInt64() {{
                                            highBits = 769922;
                                            lowBits = 513141L;
                                        }};
                                        histogram = new Histogram() {{
                                            bucketCounts = new String[]{{
                                                add("officia"),
                                                add("repudiandae"),
                                            }};
                                            firstBucketOffset = 365771;
                                        }};
                                        max = new SplitInt64() {{
                                            highBits = 29113;
                                            lowBits = 798559L;
                                        }};
                                        min = new SplitInt64() {{
                                            highBits = 115281;
                                            lowBits = 428232L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 376017;
                                            lowBits = 388490L;
                                        }};
                                        sumOfSquares = 851.05;
                                    }};
                                    floatingPoint = 6263.81;
                                    floatingPointList = new FloatingPointList() {{
                                        elements = new Double[]{{
                                            add(8360.84),
                                        }};
                                    }};
                                    floatingPointMean = new FloatingPointMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 566873;
                                            lowBits = 87702L;
                                        }};
                                        sum = 2161.22;
                                    }};
                                    integer = new SplitInt64() {{
                                        highBits = 437446;
                                        lowBits = 626535L;
                                    }};
                                    integerGauge = new IntegerGauge() {{
                                        timestamp = "molestiae";
                                        value = new SplitInt64() {{
                                            highBits = 929400;
                                            lowBits = 531941L;
                                        }};
                                    }};
                                    integerList = new IntegerList() {{
                                        elements = new org.openapis.openapi.models.shared.SplitInt64[]{{
                                            add(new SplitInt64() {{
                                                highBits = 325973;
                                                lowBits = 248430L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 183631;
                                                lowBits = 89663L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 228493;
                                                lowBits = 950193L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 246653;
                                                lowBits = 994496L;
                                            }}),
                                        }};
                                    }};
                                    integerMean = new IntegerMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 414172;
                                            lowBits = 374495L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 553805;
                                            lowBits = 460677L;
                                        }};
                                    }};
                                    internal = "veniam";
                                    nameAndKind = new NameAndKind() {{
                                        kind = NameAndKindKindEnum.SUM;
                                        name = "Rudolph Kreiger";
                                    }};
                                    shortId = "maxime";
                                    stringList = new StringList() {{
                                        elements = new String[]{{
                                            add("occaecati"),
                                            add("asperiores"),
                                        }};
                                    }};
                                    structuredNameAndMetadata = new CounterStructuredNameAndMetadata() {{
                                        metadata = new CounterMetadata() {{
                                            description = "doloremque";
                                            kind = CounterMetadataKindEnum.AND;
                                            otherUnits = "veniam";
                                            standardUnits = CounterMetadataStandardUnitsEnum.MICROSECONDS;
                                        }};
                                        name = new CounterStructuredName() {{
                                            componentStepName = "placeat";
                                            executionStepName = "necessitatibus";
                                            inputIndex = 688114;
                                            name = "Shannon Stracke";
                                            origin = CounterStructuredNameOriginEnum.USER;
                                            originNamespace = "maxime";
                                            originalRequestingStepName = "officia";
                                            originalStepName = "iusto";
                                            portion = CounterStructuredNamePortionEnum.KEY;
                                            workerId = "ab";
                                        }};
                                    }};
                                }}),
                                add(new CounterUpdate() {{
                                    boolean_ = false;
                                    cumulative = false;
                                    distribution = new DistributionUpdate() {{
                                        count = new SplitInt64() {{
                                            highBits = 533428;
                                            lowBits = 92036L;
                                        }};
                                        histogram = new Histogram() {{
                                            bucketCounts = new String[]{{
                                                add("sint"),
                                                add("ipsam"),
                                                add("laboriosam"),
                                                add("molestiae"),
                                            }};
                                            firstBucketOffset = 70822;
                                        }};
                                        max = new SplitInt64() {{
                                            highBits = 401449;
                                            lowBits = 436367L;
                                        }};
                                        min = new SplitInt64() {{
                                            highBits = 209210;
                                            lowBits = 792150L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 321889;
                                            lowBits = 215011L;
                                        }};
                                        sumOfSquares = 550.15;
                                    }};
                                    floatingPoint = 7225.45;
                                    floatingPointList = new FloatingPointList() {{
                                        elements = new Double[]{{
                                            add(4263.08),
                                            add(3905.83),
                                        }};
                                    }};
                                    floatingPointMean = new FloatingPointMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 328697;
                                            lowBits = 93384L;
                                        }};
                                        sum = 4177.55;
                                    }};
                                    integer = new SplitInt64() {{
                                        highBits = 220455;
                                        lowBits = 635903L;
                                    }};
                                    integerGauge = new IntegerGauge() {{
                                        timestamp = "non";
                                        value = new SplitInt64() {{
                                            highBits = 382928;
                                            lowBits = 227470L;
                                        }};
                                    }};
                                    integerList = new IntegerList() {{
                                        elements = new org.openapis.openapi.models.shared.SplitInt64[]{{
                                            add(new SplitInt64() {{
                                                highBits = 350222;
                                                lowBits = 74838L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 144876;
                                                lowBits = 663981L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 731502;
                                                lowBits = 144579L;
                                            }}),
                                        }};
                                    }};
                                    integerMean = new IntegerMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 342655;
                                            lowBits = 168917L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 122365;
                                            lowBits = 696581L;
                                        }};
                                    }};
                                    internal = "perspiciatis";
                                    nameAndKind = new NameAndKind() {{
                                        kind = NameAndKindKindEnum.LATEST_VALUE;
                                        name = "Kerry Beer";
                                    }};
                                    shortId = "aliquam";
                                    stringList = new StringList() {{
                                        elements = new String[]{{
                                            add("reprehenderit"),
                                            add("quidem"),
                                        }};
                                    }};
                                    structuredNameAndMetadata = new CounterStructuredNameAndMetadata() {{
                                        metadata = new CounterMetadata() {{
                                            description = "quas";
                                            kind = CounterMetadataKindEnum.AND;
                                            otherUnits = "modi";
                                            standardUnits = CounterMetadataStandardUnitsEnum.BYTES;
                                        }};
                                        name = new CounterStructuredName() {{
                                            componentStepName = "nam";
                                            executionStepName = "minus";
                                            inputIndex = 24078;
                                            name = "May Parisian PhD";
                                            origin = CounterStructuredNameOriginEnum.SYSTEM;
                                            originNamespace = "quis";
                                            originalRequestingStepName = "perferendis";
                                            originalStepName = "itaque";
                                            portion = CounterStructuredNamePortionEnum.VALUE;
                                            workerId = "asperiores";
                                        }};
                                    }};
                                }}),
                                add(new CounterUpdate() {{
                                    boolean_ = false;
                                    cumulative = false;
                                    distribution = new DistributionUpdate() {{
                                        count = new SplitInt64() {{
                                            highBits = 186967;
                                            lowBits = 179445L;
                                        }};
                                        histogram = new Histogram() {{
                                            bucketCounts = new String[]{{
                                                add("sint"),
                                                add("incidunt"),
                                                add("pariatur"),
                                            }};
                                            firstBucketOffset = 135351;
                                        }};
                                        max = new SplitInt64() {{
                                            highBits = 48667;
                                            lowBits = 930296L;
                                        }};
                                        min = new SplitInt64() {{
                                            highBits = 775821;
                                            lowBits = 595025L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 34953;
                                            lowBits = 890631L;
                                        }};
                                        sumOfSquares = 6547.18;
                                    }};
                                    floatingPoint = 3065.99;
                                    floatingPointList = new FloatingPointList() {{
                                        elements = new Double[]{{
                                            add(8298.36),
                                        }};
                                    }};
                                    floatingPointMean = new FloatingPointMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 100436;
                                            lowBits = 941683L;
                                        }};
                                        sum = 2875.3;
                                    }};
                                    integer = new SplitInt64() {{
                                        highBits = 395184;
                                        lowBits = 373668L;
                                    }};
                                    integerGauge = new IntegerGauge() {{
                                        timestamp = "saepe";
                                        value = new SplitInt64() {{
                                            highBits = 506107;
                                            lowBits = 335086L;
                                        }};
                                    }};
                                    integerList = new IntegerList() {{
                                        elements = new org.openapis.openapi.models.shared.SplitInt64[]{{
                                            add(new SplitInt64() {{
                                                highBits = 324600;
                                                lowBits = 391667L;
                                            }}),
                                        }};
                                    }};
                                    integerMean = new IntegerMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 995733;
                                            lowBits = 957395L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 952411;
                                            lowBits = 477826L;
                                        }};
                                    }};
                                    internal = "amet";
                                    nameAndKind = new NameAndKind() {{
                                        kind = NameAndKindKindEnum.LATEST_VALUE;
                                        name = "Irvin Heaney";
                                    }};
                                    shortId = "facere";
                                    stringList = new StringList() {{
                                        elements = new String[]{{
                                            add("exercitationem"),
                                            add("saepe"),
                                            add("deserunt"),
                                            add("sint"),
                                        }};
                                    }};
                                    structuredNameAndMetadata = new CounterStructuredNameAndMetadata() {{
                                        metadata = new CounterMetadata() {{
                                            description = "minima";
                                            kind = CounterMetadataKindEnum.MAX;
                                            otherUnits = "sequi";
                                            standardUnits = CounterMetadataStandardUnitsEnum.BYTES_PER_SEC;
                                        }};
                                        name = new CounterStructuredName() {{
                                            componentStepName = "occaecati";
                                            executionStepName = "voluptatum";
                                            inputIndex = 850699;
                                            name = "Timmy Robel";
                                            origin = CounterStructuredNameOriginEnum.USER;
                                            originNamespace = "deleniti";
                                            originalRequestingStepName = "assumenda";
                                            originalStepName = "iure";
                                            portion = CounterStructuredNamePortionEnum.ALL;
                                            workerId = "neque";
                                        }};
                                    }};
                                }}),
                            }};
                            dynamicSourceSplit = new DynamicSourceSplit() {{
                                primary = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("incidunt", "pariatur");
                                                put("deleniti", "aut");
                                                put("nesciunt", "error");
                                                put("necessitatibus", "culpa");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("asperiores", "iste");
                                                put("harum", "sunt");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("similique", "qui");
                                                put("tempora", "modi");
                                                put("sapiente", "possimus");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("ab", "omnis");
                                            put("aut", "ipsum");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "iste";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("dolorum", "maxime");
                                            put("assumenda", "velit");
                                            put("voluptatum", "eveniet");
                                            put("quibusdam", "doloremque");
                                        }};
                                    }};
                                }};
                                residual = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("esse", "et");
                                                put("temporibus", "optio");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("delectus", "quae");
                                                put("vero", "amet");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("asperiores", "quasi");
                                                put("veniam", "provident");
                                                put("consequuntur", "aut");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("provident", "aperiam");
                                                put("repellendus", "ab");
                                                put("cum", "magnam");
                                                put("natus", "aperiam");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("repellat", "dolores");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "harum";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("totam", "provident");
                                            put("maxime", "totam");
                                            put("id", "neque");
                                            put("dolores", "vel");
                                        }};
                                    }};
                                }};
                            }};
                            errors = new org.openapis.openapi.models.shared.Status[]{{
                                add(new Status() {{
                                    code = 580881;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("quis", "facilis");
                                            put("in", "nobis");
                                            put("nisi", "natus");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("quia", "facilis");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("atque", "illo");
                                            put("dolorum", "provident");
                                            put("incidunt", "maiores");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("modi", "sequi");
                                            put("nisi", "autem");
                                        }}),
                                    }};
                                    message = "tempora";
                                }}),
                            }};
                            metricUpdates = new org.openapis.openapi.models.shared.MetricUpdate[]{{
                                add(new MetricUpdate() {{
                                    cumulative = false;
                                    distribution = "quas";
                                    gauge = "hic";
                                    internal = "doloremque";
                                    kind = "id";
                                    meanCount = "asperiores";
                                    meanSum = "rem";
                                    name = new MetricStructuredName() {{
                                        context = new java.util.HashMap<String, String>() {{
                                            put("commodi", "natus");
                                            put("beatae", "placeat");
                                            put("molestiae", "dolor");
                                            put("quia", "nulla");
                                        }};
                                        name = "Cary Renner";
                                        origin = "molestias";
                                    }};
                                    scalar = "magnam";
                                    set = "voluptate";
                                    updateTime = "aliquid";
                                }}),
                                add(new MetricUpdate() {{
                                    cumulative = false;
                                    distribution = "officia";
                                    gauge = "qui";
                                    internal = "animi";
                                    kind = "vero";
                                    meanCount = "quas";
                                    meanSum = "possimus";
                                    name = new MetricStructuredName() {{
                                        context = new java.util.HashMap<String, String>() {{
                                            put("quo", "ullam");
                                            put("ipsa", "placeat");
                                            put("quas", "culpa");
                                            put("consectetur", "nostrum");
                                        }};
                                        name = "Ruby Sauer";
                                        origin = "voluptate";
                                    }};
                                    scalar = "blanditiis";
                                    set = "dolore";
                                    updateTime = "rem";
                                }}),
                                add(new MetricUpdate() {{
                                    cumulative = false;
                                    distribution = "provident";
                                    gauge = "dolorem";
                                    internal = "alias";
                                    kind = "dignissimos";
                                    meanCount = "minima";
                                    meanSum = "eaque";
                                    name = new MetricStructuredName() {{
                                        context = new java.util.HashMap<String, String>() {{
                                            put("alias", "sit");
                                            put("accusamus", "sint");
                                            put("commodi", "voluptas");
                                        }};
                                        name = "Guillermo Kunze";
                                        origin = "possimus";
                                    }};
                                    scalar = "dolore";
                                    set = "neque";
                                    updateTime = "inventore";
                                }}),
                            }};
                            progress = new ApproximateProgress() {{
                                percentComplete = 6064.72;
                                position = new Position() {{
                                    byteOffset = "quaerat";
                                    concatPosition = new ConcatPosition() {{
                                        index = 198041;
                                        position = new Position() {{}};
                                    }};
                                    end = false;
                                    key = "omnis";
                                    recordIndex = "corrupti";
                                    shufflePosition = "optio";
                                }};
                                remainingTime = "molestiae";
                            }};
                            reportIndex = "atque";
                            reportedProgress = new ApproximateReportedProgress() {{
                                consumedParallelism = new ReportedParallelism() {{
                                    isInfinite = false;
                                    value = 2239.23;
                                }};
                                fractionConsumed = 7582.56;
                                position = new Position() {{
                                    byteOffset = "cupiditate";
                                    concatPosition = new ConcatPosition() {{
                                        index = 157751;
                                        position = new Position() {{}};
                                    }};
                                    end = false;
                                    key = "dolor";
                                    recordIndex = "cupiditate";
                                    shufflePosition = "praesentium";
                                }};
                                remainingParallelism = new ReportedParallelism() {{
                                    isInfinite = false;
                                    value = 8826.04;
                                }};
                            }};
                            requestedLeaseDuration = "fugiat";
                            sourceFork = new SourceFork() {{
                                primary = new SourceSplitShard() {{
                                    derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_UNKNOWN;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("deserunt", "nobis");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("placeat", "est");
                                                put("non", "placeat");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("minus", "similique");
                                                put("corrupti", "aliquid");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("error", "animi");
                                                put("ducimus", "perferendis");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("reiciendis", "quibusdam");
                                            put("veniam", "pariatur");
                                            put("commodi", "iste");
                                            put("corrupti", "iste");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "distinctio";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("consequuntur", "voluptatem");
                                            put("voluptas", "magnam");
                                        }};
                                    }};
                                }};
                                primarySource = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_INDEPENDENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("iure", "voluptate");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("et", "perspiciatis");
                                            put("accusamus", "laborum");
                                            put("voluptatum", "ratione");
                                            put("facere", "eius");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "perspiciatis";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("earum", "quibusdam");
                                        }};
                                    }};
                                }};
                                residual = new SourceSplitShard() {{
                                    derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_UNKNOWN;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("molestias", "fuga");
                                                put("odit", "minus");
                                                put("sunt", "sint");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("magnam", "veniam");
                                                put("quaerat", "minima");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("unde", "ullam");
                                            put("enim", "facere");
                                            put("cumque", "cumque");
                                            put("et", "praesentium");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "minima";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("est", "magnam");
                                            put("unde", "consequatur");
                                            put("dicta", "eligendi");
                                            put("iure", "cumque");
                                        }};
                                    }};
                                }};
                                residualSource = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_INDEPENDENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("facere", "explicabo");
                                                put("nulla", "laborum");
                                                put("animi", "quam");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("incidunt", "similique");
                                            put("nobis", "culpa");
                                            put("ratione", "illum");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "sed";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("aut", "voluptates");
                                        }};
                                    }};
                                }};
                            }};
                            sourceOperationResponse = new SourceOperationResponse() {{
                                getMetadata = new SourceGetMetadataResponse() {{
                                    metadata = new SourceMetadata() {{
                                        estimatedSizeBytes = "nulla";
                                        infinite = false;
                                        producesSortedKeys = false;
                                    }};
                                }};
                                split = new SourceSplitResponse() {{
                                    bundles = new org.openapis.openapi.models.shared.DerivedSource[]{{
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_INDEPENDENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("beatae", "vitae");
                                                        put("laborum", "beatae");
                                                        put("vitae", "veniam");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("laudantium", "consequuntur");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "rerum";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("ducimus", "eveniet");
                                                    put("repellendus", "enim");
                                                    put("voluptas", "veniam");
                                                    put("voluptatem", "quam");
                                                }};
                                            }};
                                        }}),
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_INDEPENDENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("porro", "ad");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("doloribus", "magnam");
                                                    put("nulla", "iusto");
                                                    put("adipisci", "provident");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "voluptas";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("eum", "modi");
                                                    put("cumque", "fugit");
                                                }};
                                            }};
                                        }}),
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_UNKNOWN;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("reprehenderit", "dicta");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("similique", "omnis");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("dicta", "illum");
                                                        put("aspernatur", "ut");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("dignissimos", "nulla");
                                                    put("facilis", "libero");
                                                    put("corrupti", "doloribus");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "enim";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("sed", "assumenda");
                                                }};
                                            }};
                                        }}),
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("eligendi", "earum");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("atque", "sunt");
                                                        put("dolores", "placeat");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("exercitationem", "architecto");
                                                        put("consequuntur", "impedit");
                                                        put("deleniti", "esse");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("aspernatur", "eius");
                                                    put("accusantium", "nobis");
                                                    put("asperiores", "corporis");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "tempora";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("a", "corrupti");
                                                    put("blanditiis", "hic");
                                                    put("blanditiis", "maiores");
                                                }};
                                            }};
                                        }}),
                                    }};
                                    outcome = SourceSplitResponseOutcomeEnum.SOURCE_SPLIT_OUTCOME_UNKNOWN;
                                    shards = new org.openapis.openapi.models.shared.SourceSplitShard[]{{
                                        add(new SourceSplitShard() {{
                                            derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("quod", "totam");
                                                        put("officiis", "dicta");
                                                        put("maiores", "dolores");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("eum", "nulla");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "corporis";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("quas", "sequi");
                                                    put("illo", "temporibus");
                                                    put("doloremque", "aperiam");
                                                    put("laudantium", "ab");
                                                }};
                                            }};
                                        }}),
                                        add(new SourceSplitShard() {{
                                            derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_UNKNOWN;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("delectus", "voluptas");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("quae", "voluptas");
                                                        put("laboriosam", "ducimus");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("doloribus", "ratione");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("ex", "quos");
                                                    put("dicta", "minus");
                                                    put("exercitationem", "molestiae");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "iure";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("repellendus", "impedit");
                                                    put("itaque", "molestiae");
                                                    put("quaerat", "explicabo");
                                                }};
                                            }};
                                        }}),
                                        add(new SourceSplitShard() {{
                                            derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_INDEPENDENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("deserunt", "odit");
                                                        put("beatae", "exercitationem");
                                                        put("officiis", "eaque");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("voluptas", "aut");
                                                    put("vitae", "tempora");
                                                    put("molestias", "cupiditate");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "officia";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("doloribus", "suscipit");
                                                    put("sequi", "debitis");
                                                }};
                                            }};
                                        }}),
                                    }};
                                }};
                            }};
                            stopPosition = new Position() {{
                                byteOffset = "neque";
                                concatPosition = new ConcatPosition() {{
                                    index = 648985;
                                    position = new Position() {{}};
                                }};
                                end = false;
                                key = "tenetur";
                                recordIndex = "non";
                                shufflePosition = "pariatur";
                            }};
                            totalThrottlerWaitTimeSeconds = 8736.9;
                            workItemId = "natus";
                        }}),
                        add(new WorkItemStatus() {{
                            completed = false;
                            counterUpdates = new org.openapis.openapi.models.shared.CounterUpdate[]{{
                                add(new CounterUpdate() {{
                                    boolean_ = false;
                                    cumulative = false;
                                    distribution = new DistributionUpdate() {{
                                        count = new SplitInt64() {{
                                            highBits = 841408;
                                            lowBits = 639371L;
                                        }};
                                        histogram = new Histogram() {{
                                            bucketCounts = new String[]{{
                                                add("velit"),
                                            }};
                                            firstBucketOffset = 874029;
                                        }};
                                        max = new SplitInt64() {{
                                            highBits = 811245;
                                            lowBits = 867308L;
                                        }};
                                        min = new SplitInt64() {{
                                            highBits = 425868;
                                            lowBits = 248112L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 279965;
                                            lowBits = 508373L;
                                        }};
                                        sumOfSquares = 2157.91;
                                    }};
                                    floatingPoint = 9297.75;
                                    floatingPointList = new FloatingPointList() {{
                                        elements = new Double[]{{
                                            add(6791.5),
                                            add(4568.09),
                                        }};
                                    }};
                                    floatingPointMean = new FloatingPointMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 660519;
                                            lowBits = 616743L;
                                        }};
                                        sum = 5597.65;
                                    }};
                                    integer = new SplitInt64() {{
                                        highBits = 902577;
                                        lowBits = 268831L;
                                    }};
                                    integerGauge = new IntegerGauge() {{
                                        timestamp = "assumenda";
                                        value = new SplitInt64() {{
                                            highBits = 978416;
                                            lowBits = 204517L;
                                        }};
                                    }};
                                    integerList = new IntegerList() {{
                                        elements = new org.openapis.openapi.models.shared.SplitInt64[]{{
                                            add(new SplitInt64() {{
                                                highBits = 893495;
                                                lowBits = 311450L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 344719;
                                                lowBits = 728581L;
                                            }}),
                                        }};
                                    }};
                                    integerMean = new IntegerMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 518116;
                                            lowBits = 607705L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 330484;
                                            lowBits = 342241L;
                                        }};
                                    }};
                                    internal = "facere";
                                    nameAndKind = new NameAndKind() {{
                                        kind = NameAndKindKindEnum.MIN;
                                        name = "Mrs. Tracy Walker";
                                    }};
                                    shortId = "numquam";
                                    stringList = new StringList() {{
                                        elements = new String[]{{
                                            add("dolores"),
                                            add("consectetur"),
                                            add("dicta"),
                                        }};
                                    }};
                                    structuredNameAndMetadata = new CounterStructuredNameAndMetadata() {{
                                        metadata = new CounterMetadata() {{
                                            description = "ipsa";
                                            kind = CounterMetadataKindEnum.OR;
                                            otherUnits = "perferendis";
                                            standardUnits = CounterMetadataStandardUnitsEnum.MICROSECONDS;
                                        }};
                                        name = new CounterStructuredName() {{
                                            componentStepName = "cum";
                                            executionStepName = "facere";
                                            inputIndex = 188253;
                                            name = "Ms. Emma Sauer";
                                            origin = CounterStructuredNameOriginEnum.USER;
                                            originNamespace = "vero";
                                            originalRequestingStepName = "nihil";
                                            originalStepName = "velit";
                                            portion = CounterStructuredNamePortionEnum.ALL;
                                            workerId = "a";
                                        }};
                                    }};
                                }}),
                                add(new CounterUpdate() {{
                                    boolean_ = false;
                                    cumulative = false;
                                    distribution = new DistributionUpdate() {{
                                        count = new SplitInt64() {{
                                            highBits = 7370;
                                            lowBits = 164347L;
                                        }};
                                        histogram = new Histogram() {{
                                            bucketCounts = new String[]{{
                                                add("numquam"),
                                                add("excepturi"),
                                            }};
                                            firstBucketOffset = 867710;
                                        }};
                                        max = new SplitInt64() {{
                                            highBits = 531934;
                                            lowBits = 426608L;
                                        }};
                                        min = new SplitInt64() {{
                                            highBits = 965071;
                                            lowBits = 267829L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 711216;
                                            lowBits = 692814L;
                                        }};
                                        sumOfSquares = 1594.33;
                                    }};
                                    floatingPoint = 512.28;
                                    floatingPointList = new FloatingPointList() {{
                                        elements = new Double[]{{
                                            add(8906.06),
                                            add(3454.06),
                                            add(8415.62),
                                            add(5899.4),
                                        }};
                                    }};
                                    floatingPointMean = new FloatingPointMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 85797;
                                            lowBits = 124611L;
                                        }};
                                        sum = 7986.19;
                                    }};
                                    integer = new SplitInt64() {{
                                        highBits = 710148;
                                        lowBits = 961171L;
                                    }};
                                    integerGauge = new IntegerGauge() {{
                                        timestamp = "itaque";
                                        value = new SplitInt64() {{
                                            highBits = 492070;
                                            lowBits = 300795L;
                                        }};
                                    }};
                                    integerList = new IntegerList() {{
                                        elements = new org.openapis.openapi.models.shared.SplitInt64[]{{
                                            add(new SplitInt64() {{
                                                highBits = 809506;
                                                lowBits = 679797L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 974931;
                                                lowBits = 266727L;
                                            }}),
                                            add(new SplitInt64() {{
                                                highBits = 314838;
                                                lowBits = 649661L;
                                            }}),
                                        }};
                                    }};
                                    integerMean = new IntegerMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 151039;
                                            lowBits = 474867L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 964857;
                                            lowBits = 405542L;
                                        }};
                                    }};
                                    internal = "error";
                                    nameAndKind = new NameAndKind() {{
                                        kind = NameAndKindKindEnum.LATEST_VALUE;
                                        name = "Sadie McCullough";
                                    }};
                                    shortId = "temporibus";
                                    stringList = new StringList() {{
                                        elements = new String[]{{
                                            add("doloremque"),
                                        }};
                                    }};
                                    structuredNameAndMetadata = new CounterStructuredNameAndMetadata() {{
                                        metadata = new CounterMetadata() {{
                                            description = "debitis";
                                            kind = CounterMetadataKindEnum.AND;
                                            otherUnits = "temporibus";
                                            standardUnits = CounterMetadataStandardUnitsEnum.TIMESTAMP_MSEC;
                                        }};
                                        name = new CounterStructuredName() {{
                                            componentStepName = "neque";
                                            executionStepName = "est";
                                            inputIndex = 834457;
                                            name = "Rosalie Kautzer I";
                                            origin = CounterStructuredNameOriginEnum.SYSTEM;
                                            originNamespace = "accusantium";
                                            originalRequestingStepName = "molestias";
                                            originalStepName = "facere";
                                            portion = CounterStructuredNamePortionEnum.KEY;
                                            workerId = "quisquam";
                                        }};
                                    }};
                                }}),
                                add(new CounterUpdate() {{
                                    boolean_ = false;
                                    cumulative = false;
                                    distribution = new DistributionUpdate() {{
                                        count = new SplitInt64() {{
                                            highBits = 201229;
                                            lowBits = 194556L;
                                        }};
                                        histogram = new Histogram() {{
                                            bucketCounts = new String[]{{
                                                add("modi"),
                                                add("nihil"),
                                            }};
                                            firstBucketOffset = 243931;
                                        }};
                                        max = new SplitInt64() {{
                                            highBits = 11336;
                                            lowBits = 523613L;
                                        }};
                                        min = new SplitInt64() {{
                                            highBits = 142520;
                                            lowBits = 727641L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 624300;
                                            lowBits = 278751L;
                                        }};
                                        sumOfSquares = 9928.21;
                                    }};
                                    floatingPoint = 1813.11;
                                    floatingPointList = new FloatingPointList() {{
                                        elements = new Double[]{{
                                            add(7181.12),
                                            add(1202.16),
                                            add(9376.87),
                                        }};
                                    }};
                                    floatingPointMean = new FloatingPointMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 821441;
                                            lowBits = 364287L;
                                        }};
                                        sum = 4315.38;
                                    }};
                                    integer = new SplitInt64() {{
                                        highBits = 483290;
                                        lowBits = 83700L;
                                    }};
                                    integerGauge = new IntegerGauge() {{
                                        timestamp = "voluptates";
                                        value = new SplitInt64() {{
                                            highBits = 599825;
                                            lowBits = 772566L;
                                        }};
                                    }};
                                    integerList = new IntegerList() {{
                                        elements = new org.openapis.openapi.models.shared.SplitInt64[]{{
                                            add(new SplitInt64() {{
                                                highBits = 174960;
                                                lowBits = 416782L;
                                            }}),
                                        }};
                                    }};
                                    integerMean = new IntegerMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 205150;
                                            lowBits = 318294L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 53599;
                                            lowBits = 642854L;
                                        }};
                                    }};
                                    internal = "tempora";
                                    nameAndKind = new NameAndKind() {{
                                        kind = NameAndKindKindEnum.MEAN;
                                        name = "Julie Gutmann";
                                    }};
                                    shortId = "blanditiis";
                                    stringList = new StringList() {{
                                        elements = new String[]{{
                                            add("quisquam"),
                                            add("itaque"),
                                            add("consequatur"),
                                        }};
                                    }};
                                    structuredNameAndMetadata = new CounterStructuredNameAndMetadata() {{
                                        metadata = new CounterMetadata() {{
                                            description = "recusandae";
                                            kind = CounterMetadataKindEnum.AND;
                                            otherUnits = "error";
                                            standardUnits = CounterMetadataStandardUnitsEnum.BYTES;
                                        }};
                                        name = new CounterStructuredName() {{
                                            componentStepName = "nemo";
                                            executionStepName = "unde";
                                            inputIndex = 257873;
                                            name = "Arturo Fay";
                                            origin = CounterStructuredNameOriginEnum.SYSTEM;
                                            originNamespace = "impedit";
                                            originalRequestingStepName = "ipsa";
                                            originalStepName = "dolores";
                                            portion = CounterStructuredNamePortionEnum.KEY;
                                            workerId = "sed";
                                        }};
                                    }};
                                }}),
                                add(new CounterUpdate() {{
                                    boolean_ = false;
                                    cumulative = false;
                                    distribution = new DistributionUpdate() {{
                                        count = new SplitInt64() {{
                                            highBits = 954542;
                                            lowBits = 905046L;
                                        }};
                                        histogram = new Histogram() {{
                                            bucketCounts = new String[]{{
                                                add("quidem"),
                                            }};
                                            firstBucketOffset = 310212;
                                        }};
                                        max = new SplitInt64() {{
                                            highBits = 736574;
                                            lowBits = 292846L;
                                        }};
                                        min = new SplitInt64() {{
                                            highBits = 843969;
                                            lowBits = 701366L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 539426;
                                            lowBits = 735012L;
                                        }};
                                        sumOfSquares = 4884.05;
                                    }};
                                    floatingPoint = 4443.18;
                                    floatingPointList = new FloatingPointList() {{
                                        elements = new Double[]{{
                                            add(9128.19),
                                            add(7170.18),
                                            add(7252.47),
                                        }};
                                    }};
                                    floatingPointMean = new FloatingPointMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 390937;
                                            lowBits = 887980L;
                                        }};
                                        sum = 951.68;
                                    }};
                                    integer = new SplitInt64() {{
                                        highBits = 852097;
                                        lowBits = 135597L;
                                    }};
                                    integerGauge = new IntegerGauge() {{
                                        timestamp = "impedit";
                                        value = new SplitInt64() {{
                                            highBits = 973903;
                                            lowBits = 320931L;
                                        }};
                                    }};
                                    integerList = new IntegerList() {{
                                        elements = new org.openapis.openapi.models.shared.SplitInt64[]{{
                                            add(new SplitInt64() {{
                                                highBits = 136851;
                                                lowBits = 711620L;
                                            }}),
                                        }};
                                    }};
                                    integerMean = new IntegerMean() {{
                                        count = new SplitInt64() {{
                                            highBits = 673290;
                                            lowBits = 943682L;
                                        }};
                                        sum = new SplitInt64() {{
                                            highBits = 700235;
                                            lowBits = 129259L;
                                        }};
                                    }};
                                    internal = "eligendi";
                                    nameAndKind = new NameAndKind() {{
                                        kind = NameAndKindKindEnum.SET;
                                        name = "Jay Jacobi";
                                    }};
                                    shortId = "fugiat";
                                    stringList = new StringList() {{
                                        elements = new String[]{{
                                            add("eveniet"),
                                            add("eum"),
                                        }};
                                    }};
                                    structuredNameAndMetadata = new CounterStructuredNameAndMetadata() {{
                                        metadata = new CounterMetadata() {{
                                            description = "exercitationem";
                                            kind = CounterMetadataKindEnum.DISTRIBUTION;
                                            otherUnits = "culpa";
                                            standardUnits = CounterMetadataStandardUnitsEnum.BYTES;
                                        }};
                                        name = new CounterStructuredName() {{
                                            componentStepName = "eos";
                                            executionStepName = "quos";
                                            inputIndex = 789760;
                                            name = "Sophia Marvin MD";
                                            origin = CounterStructuredNameOriginEnum.SYSTEM;
                                            originNamespace = "vero";
                                            originalRequestingStepName = "ratione";
                                            originalStepName = "aut";
                                            portion = CounterStructuredNamePortionEnum.VALUE;
                                            workerId = "fugiat";
                                        }};
                                    }};
                                }}),
                            }};
                            dynamicSourceSplit = new DynamicSourceSplit() {{
                                primary = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("commodi", "magnam");
                                                put("rem", "occaecati");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("voluptate", "nam");
                                                put("quam", "blanditiis");
                                                put("laboriosam", "odio");
                                                put("adipisci", "necessitatibus");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("consectetur", "fuga");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("eos", "dolorum");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "vel";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("cupiditate", "excepturi");
                                            put("fugit", "eius");
                                            put("perspiciatis", "dolore");
                                        }};
                                    }};
                                }};
                                residual = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_INDEPENDENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("tempora", "corrupti");
                                                put("ducimus", "asperiores");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("cumque", "praesentium");
                                                put("ut", "amet");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("nesciunt", "ex");
                                                put("tempore", "rem");
                                                put("laboriosam", "harum");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("quisquam", "nulla");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "a";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("dolore", "dicta");
                                            put("minima", "facilis");
                                        }};
                                    }};
                                }};
                            }};
                            errors = new org.openapis.openapi.models.shared.Status[]{{
                                add(new Status() {{
                                    code = 279972;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("hic", "error");
                                            put("repellendus", "delectus");
                                            put("dicta", "ratione");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("ut", "officiis");
                                            put("itaque", "nulla");
                                            put("distinctio", "recusandae");
                                            put("in", "deleniti");
                                        }}),
                                    }};
                                    message = "tempore";
                                }}),
                            }};
                            metricUpdates = new org.openapis.openapi.models.shared.MetricUpdate[]{{
                                add(new MetricUpdate() {{
                                    cumulative = false;
                                    distribution = "commodi";
                                    gauge = "sit";
                                    internal = "ea";
                                    kind = "molestias";
                                    meanCount = "quia";
                                    meanSum = "ipsam";
                                    name = new MetricStructuredName() {{
                                        context = new java.util.HashMap<String, String>() {{
                                            put("molestias", "eius");
                                            put("necessitatibus", "culpa");
                                            put("in", "aliquid");
                                        }};
                                        name = "Hope Herzog";
                                        origin = "fugit";
                                    }};
                                    scalar = "voluptate";
                                    set = "provident";
                                    updateTime = "quis";
                                }}),
                                add(new MetricUpdate() {{
                                    cumulative = false;
                                    distribution = "expedita";
                                    gauge = "quam";
                                    internal = "laudantium";
                                    kind = "exercitationem";
                                    meanCount = "vitae";
                                    meanSum = "magnam";
                                    name = new MetricStructuredName() {{
                                        context = new java.util.HashMap<String, String>() {{
                                            put("nulla", "eum");
                                            put("quibusdam", "minima");
                                            put("ut", "cupiditate");
                                        }};
                                        name = "Derek Kassulke";
                                        origin = "tempore";
                                    }};
                                    scalar = "ipsum";
                                    set = "dolorem";
                                    updateTime = "expedita";
                                }}),
                                add(new MetricUpdate() {{
                                    cumulative = false;
                                    distribution = "maxime";
                                    gauge = "voluptatem";
                                    internal = "maiores";
                                    kind = "unde";
                                    meanCount = "reprehenderit";
                                    meanSum = "voluptatem";
                                    name = new MetricStructuredName() {{
                                        context = new java.util.HashMap<String, String>() {{
                                            put("dolore", "magni");
                                            put("voluptatibus", "quod");
                                            put("provident", "delectus");
                                            put("dolore", "totam");
                                        }};
                                        name = "Marjorie Cassin";
                                        origin = "voluptates";
                                    }};
                                    scalar = "in";
                                    set = "minima";
                                    updateTime = "expedita";
                                }}),
                                add(new MetricUpdate() {{
                                    cumulative = false;
                                    distribution = "ducimus";
                                    gauge = "excepturi";
                                    internal = "eum";
                                    kind = "doloremque";
                                    meanCount = "iure";
                                    meanSum = "nostrum";
                                    name = new MetricStructuredName() {{
                                        context = new java.util.HashMap<String, String>() {{
                                            put("eaque", "earum");
                                            put("earum", "culpa");
                                            put("vel", "sapiente");
                                            put("perspiciatis", "ratione");
                                        }};
                                        name = "Ross Abernathy MD";
                                        origin = "deleniti";
                                    }};
                                    scalar = "eligendi";
                                    set = "unde";
                                    updateTime = "veniam";
                                }}),
                            }};
                            progress = new ApproximateProgress() {{
                                percentComplete = 7243.07;
                                position = new Position() {{
                                    byteOffset = "accusamus";
                                    concatPosition = new ConcatPosition() {{
                                        index = 114752;
                                        position = new Position() {{}};
                                    }};
                                    end = false;
                                    key = "explicabo";
                                    recordIndex = "corporis";
                                    shufflePosition = "incidunt";
                                }};
                                remainingTime = "soluta";
                            }};
                            reportIndex = "nihil";
                            reportedProgress = new ApproximateReportedProgress() {{
                                consumedParallelism = new ReportedParallelism() {{
                                    isInfinite = false;
                                    value = 2391.85;
                                }};
                                fractionConsumed = 5919.98;
                                position = new Position() {{
                                    byteOffset = "reiciendis";
                                    concatPosition = new ConcatPosition() {{
                                        index = 295284;
                                        position = new Position() {{}};
                                    }};
                                    end = false;
                                    key = "voluptatibus";
                                    recordIndex = "eveniet";
                                    shufflePosition = "odio";
                                }};
                                remainingParallelism = new ReportedParallelism() {{
                                    isInfinite = false;
                                    value = 4518.47;
                                }};
                            }};
                            requestedLeaseDuration = "explicabo";
                            sourceFork = new SourceFork() {{
                                primary = new SourceSplitShard() {{
                                    derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_UNKNOWN;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("dicta", "delectus");
                                                put("voluptas", "exercitationem");
                                                put("quis", "quos");
                                                put("impedit", "cupiditate");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("quod", "iure");
                                            put("sed", "odit");
                                            put("quibusdam", "fugit");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "nam";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("accusantium", "earum");
                                            put("excepturi", "numquam");
                                            put("voluptatem", "voluptatum");
                                            put("ducimus", "possimus");
                                        }};
                                    }};
                                }};
                                primarySource = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("deserunt", "recusandae");
                                                put("doloremque", "magnam");
                                                put("quia", "quibusdam");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("voluptate", "placeat");
                                                put("est", "est");
                                                put("placeat", "occaecati");
                                                put("nam", "modi");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("id", "culpa");
                                                put("beatae", "quod");
                                                put("a", "eveniet");
                                                put("sint", "saepe");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("minima", "nulla");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("molestias", "ipsa");
                                            put("amet", "natus");
                                            put("aperiam", "ducimus");
                                            put("doloribus", "amet");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "ducimus";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("dolor", "ab");
                                            put("sint", "quos");
                                            put("sequi", "fugiat");
                                        }};
                                    }};
                                }};
                                residual = new SourceSplitShard() {{
                                    derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_INDEPENDENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("minima", "aliquam");
                                                put("similique", "voluptatum");
                                                put("corporis", "dolore");
                                                put("commodi", "commodi");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("provident", "iusto");
                                            put("optio", "ipsam");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "consequatur";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("dolorem", "nesciunt");
                                        }};
                                    }};
                                }};
                                residualSource = new DerivedSource() {{
                                    derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT;
                                    source = new Source() {{
                                        baseSpecs = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("nihil", "vitae");
                                                put("quibusdam", "veniam");
                                            }}),
                                        }};
                                        codec = new java.util.HashMap<String, Object>() {{
                                            put("dolorum", "animi");
                                        }};
                                        doesNotNeedSplitting = false;
                                        metadata = new SourceMetadata() {{
                                            estimatedSizeBytes = "mollitia";
                                            infinite = false;
                                            producesSortedKeys = false;
                                        }};
                                        spec = new java.util.HashMap<String, Object>() {{
                                            put("illum", "at");
                                            put("hic", "nemo");
                                        }};
                                    }};
                                }};
                            }};
                            sourceOperationResponse = new SourceOperationResponse() {{
                                getMetadata = new SourceGetMetadataResponse() {{
                                    metadata = new SourceMetadata() {{
                                        estimatedSizeBytes = "laborum";
                                        infinite = false;
                                        producesSortedKeys = false;
                                    }};
                                }};
                                split = new SourceSplitResponse() {{
                                    bundles = new org.openapis.openapi.models.shared.DerivedSource[]{{
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("atque", "reprehenderit");
                                                        put("quo", "enim");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("impedit", "aspernatur");
                                                        put("nobis", "voluptatum");
                                                        put("ex", "aspernatur");
                                                        put("est", "voluptatem");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("nobis", "saepe");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "maiores";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("perspiciatis", "saepe");
                                                    put("illo", "aperiam");
                                                }};
                                            }};
                                        }}),
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_UNKNOWN;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("ducimus", "suscipit");
                                                        put("dolor", "alias");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("quibusdam", "fuga");
                                                    put("nihil", "similique");
                                                    put("repellat", "quibusdam");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "accusamus";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("blanditiis", "tempora");
                                                    put("similique", "dolor");
                                                    put("enim", "dolorum");
                                                    put("aliquam", "beatae");
                                                }};
                                            }};
                                        }}),
                                        add(new DerivedSource() {{
                                            derivationMode = DerivedSourceDerivationModeEnum.SOURCE_DERIVATION_MODE_UNKNOWN;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("officiis", "inventore");
                                                        put("officia", "in");
                                                        put("sequi", "ad");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("quisquam", "qui");
                                                    put("suscipit", "officia");
                                                    put("saepe", "ipsum");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "ratione";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("itaque", "maiores");
                                                    put("provident", "dignissimos");
                                                    put("dicta", "id");
                                                }};
                                            }};
                                        }}),
                                    }};
                                    outcome = SourceSplitResponseOutcomeEnum.SOURCE_SPLIT_OUTCOME_USE_CURRENT;
                                    shards = new org.openapis.openapi.models.shared.SourceSplitShard[]{{
                                        add(new SourceSplitShard() {{
                                            derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_INDEPENDENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("placeat", "mollitia");
                                                        put("architecto", "quae");
                                                        put("aut", "commodi");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("officiis", "omnis");
                                                        put("ea", "ipsam");
                                                        put("soluta", "esse");
                                                        put("vitae", "beatae");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("voluptatem", "blanditiis");
                                                    put("eligendi", "tenetur");
                                                    put("deleniti", "deleniti");
                                                    put("necessitatibus", "cumque");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "iste";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("nihil", "libero");
                                                    put("perspiciatis", "occaecati");
                                                    put("officia", "nemo");
                                                    put("quis", "doloremque");
                                                }};
                                            }};
                                        }}),
                                        add(new SourceSplitShard() {{
                                            derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("commodi", "eveniet");
                                                        put("possimus", "dolor");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("velit", "soluta");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("accusantium", "quo");
                                                    put("officiis", "laudantium");
                                                    put("est", "fuga");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "autem";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("modi", "consectetur");
                                                    put("qui", "officia");
                                                }};
                                            }};
                                        }}),
                                        add(new SourceSplitShard() {{
                                            derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("debitis", "soluta");
                                                        put("odio", "eveniet");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("dolore", "quisquam");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("ipsam", "autem");
                                                        put("non", "doloremque");
                                                        put("atque", "natus");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("nemo", "eaque");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "aut";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("nihil", "accusantium");
                                                    put("et", "unde");
                                                    put("similique", "eius");
                                                }};
                                            }};
                                        }}),
                                        add(new SourceSplitShard() {{
                                            derivationMode = SourceSplitShardDerivationModeEnum.SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT;
                                            source = new Source() {{
                                                baseSpecs = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("laudantium", "earum");
                                                        put("impedit", "accusamus");
                                                        put("reprehenderit", "expedita");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("occaecati", "perferendis");
                                                        put("non", "saepe");
                                                        put("consequatur", "architecto");
                                                        put("dicta", "sit");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("temporibus", "sequi");
                                                        put("laudantium", "excepturi");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("deleniti", "quasi");
                                                    }}),
                                                }};
                                                codec = new java.util.HashMap<String, Object>() {{
                                                    put("aspernatur", "quod");
                                                    put("suscipit", "tempore");
                                                }};
                                                doesNotNeedSplitting = false;
                                                metadata = new SourceMetadata() {{
                                                    estimatedSizeBytes = "recusandae";
                                                    infinite = false;
                                                    producesSortedKeys = false;
                                                }};
                                                spec = new java.util.HashMap<String, Object>() {{
                                                    put("nisi", "blanditiis");
                                                    put("culpa", "doloremque");
                                                    put("doloribus", "vel");
                                                }};
                                            }};
                                        }}),
                                    }};
                                }};
                            }};
                            stopPosition = new Position() {{
                                byteOffset = "enim";
                                concatPosition = new ConcatPosition() {{
                                    index = 499182;
                                    position = new Position() {{}};
                                }};
                                end = false;
                                key = "quidem";
                                recordIndex = "in";
                                shufflePosition = "at";
                            }};
                            totalThrottlerWaitTimeSeconds = 44.74;
                            workItemId = "consectetur";
                        }}),
                    }};
                    workerId = "mollitia";
                }};;
                accessToken = "beatae";
                alt = AltEnum.JSON;
                callback = "praesentium";
                fields = "aperiam";
                key = "hic";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "repudiandae";
                uploadProtocol = "ipsum";
            }};            

            DataflowProjectsLocationsJobsWorkItemsReportStatusResponse res = sdk.projects.dataflowProjectsLocationsJobsWorkItemsReportStatus(req, new DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity() {{
                option1 = new DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption1("voluptatem", "tenetur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.reportWorkItemStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsLocationsSnapshotsDelete

Deletes a snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsDeleteRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsDeleteResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsDeleteSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsDeleteSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsDeleteSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsSnapshotsDeleteRequest req = new DataflowProjectsLocationsSnapshotsDeleteRequest("aut", "ex", "cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "atque";
                alt = AltEnum.JSON;
                callback = "aut";
                fields = "commodi";
                key = "architecto";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "unde";
                uploadProtocol = "voluptate";
            }};            

            DataflowProjectsLocationsSnapshotsDeleteResponse res = sdk.projects.dataflowProjectsLocationsSnapshotsDelete(req, new DataflowProjectsLocationsSnapshotsDeleteSecurity() {{
                option1 = new DataflowProjectsLocationsSnapshotsDeleteSecurityOption1("debitis", "sunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.deleteSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsLocationsSnapshotsGet

Gets information about a snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsGetRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsGetResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsGetSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsGetSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsGetSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsGetSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsSnapshotsGetRequest req = new DataflowProjectsLocationsSnapshotsGetRequest("ad", "quia", "aspernatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "et";
                fields = "sit";
                key = "quibusdam";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "voluptatem";
                uploadProtocol = "amet";
            }};            

            DataflowProjectsLocationsSnapshotsGetResponse res = sdk.projects.dataflowProjectsLocationsSnapshotsGet(req, new DataflowProjectsLocationsSnapshotsGetSecurity() {{
                option1 = new DataflowProjectsLocationsSnapshotsGetSecurityOption1("vitae", "explicabo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.snapshot != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsLocationsSnapshotsList

Lists snapshots.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsListRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsListResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsListSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsListSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsListSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsListSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsSnapshotsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsSnapshotsListRequest req = new DataflowProjectsLocationsSnapshotsListRequest("quia", "provident") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nobis";
                alt = AltEnum.PROTO;
                callback = "laboriosam";
                fields = "quasi";
                jobId = "porro";
                key = "sed";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "eaque";
                uploadProtocol = "odit";
            }};            

            DataflowProjectsLocationsSnapshotsListResponse res = sdk.projects.dataflowProjectsLocationsSnapshotsList(req, new DataflowProjectsLocationsSnapshotsListSecurity() {{
                option1 = new DataflowProjectsLocationsSnapshotsListSecurityOption1("distinctio", "soluta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listSnapshotsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsLocationsTemplatesCreate

Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesCreateRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesCreateResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesCreateSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesCreateSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesCreateSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesCreateSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesCreateSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreateJobFromTemplateRequest;
import org.openapis.openapi.models.shared.RuntimeEnvironment;
import org.openapis.openapi.models.shared.RuntimeEnvironmentIpConfigurationEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsTemplatesCreateRequest req = new DataflowProjectsLocationsTemplatesCreateRequest("sint", "odio") {{
                dollarXgafv = XgafvEnum.TWO;
                createJobFromTemplateRequest = new CreateJobFromTemplateRequest() {{
                    environment = new RuntimeEnvironment() {{
                        additionalExperiments = new String[]{{
                            add("quasi"),
                            add("accusantium"),
                            add("dolores"),
                            add("fugiat"),
                        }};
                        additionalUserLabels = new java.util.HashMap<String, String>() {{
                            put("sed", "fugiat");
                            put("recusandae", "neque");
                            put("minima", "tenetur");
                        }};
                        bypassTempDirValidation = false;
                        enableStreamingEngine = false;
                        ipConfiguration = RuntimeEnvironmentIpConfigurationEnum.WORKER_IP_PUBLIC;
                        kmsKeyName = "officiis";
                        machineType = "sit";
                        maxWorkers = 98871;
                        network = "libero";
                        numWorkers = 945218;
                        serviceAccountEmail = "dolorem";
                        subnetwork = "adipisci";
                        tempLocation = "voluptates";
                        workerRegion = "similique";
                        workerZone = "id";
                        zone = "quidem";
                    }};;
                    gcsPath = "ut";
                    jobName = "veniam";
                    location = "eius";
                    parameters = new java.util.HashMap<String, String>() {{
                        put("dolores", "dolorum");
                    }};
                }};;
                accessToken = "quod";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "voluptatem";
                key = "incidunt";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "vitae";
                uploadProtocol = "maxime";
            }};            

            DataflowProjectsLocationsTemplatesCreateResponse res = sdk.projects.dataflowProjectsLocationsTemplatesCreate(req, new DataflowProjectsLocationsTemplatesCreateSecurity() {{
                option1 = new DataflowProjectsLocationsTemplatesCreateSecurityOption1("placeat", "cupiditate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## dataflowProjectsLocationsTemplatesGet

Get the template associated with a template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesGetRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesGetResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesGetSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesGetSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesGetSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesGetSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesGetSecurityOption4;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsTemplatesGetRequest req = new DataflowProjectsLocationsTemplatesGetRequest("asperiores", "maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dicta";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "itaque";
                gcsPath = "ad";
                key = "voluptates";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "delectus";
                uploadProtocol = "sit";
                view = DataflowProjectsLocationsTemplatesGetViewEnum.METADATA_ONLY;
            }};            

            DataflowProjectsLocationsTemplatesGetResponse res = sdk.projects.dataflowProjectsLocationsTemplatesGet(req, new DataflowProjectsLocationsTemplatesGetSecurity() {{
                option1 = new DataflowProjectsLocationsTemplatesGetSecurityOption1("porro", "labore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsLocationsTemplatesLaunch

Launch a template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesLaunchRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesLaunchResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesLaunchSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesLaunchSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesLaunchSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesLaunchSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsTemplatesLaunchSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LaunchTemplateParameters;
import org.openapis.openapi.models.shared.RuntimeEnvironment;
import org.openapis.openapi.models.shared.RuntimeEnvironmentIpConfigurationEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsTemplatesLaunchRequest req = new DataflowProjectsLocationsTemplatesLaunchRequest("molestias", "qui") {{
                dollarXgafv = XgafvEnum.TWO;
                launchTemplateParameters = new LaunchTemplateParameters() {{
                    environment = new RuntimeEnvironment() {{
                        additionalExperiments = new String[]{{
                            add("nihil"),
                            add("ut"),
                        }};
                        additionalUserLabels = new java.util.HashMap<String, String>() {{
                            put("quibusdam", "doloremque");
                            put("rem", "dolorum");
                        }};
                        bypassTempDirValidation = false;
                        enableStreamingEngine = false;
                        ipConfiguration = RuntimeEnvironmentIpConfigurationEnum.WORKER_IP_UNSPECIFIED;
                        kmsKeyName = "odit";
                        machineType = "laboriosam";
                        maxWorkers = 459348;
                        network = "est";
                        numWorkers = 666755;
                        serviceAccountEmail = "accusamus";
                        subnetwork = "debitis";
                        tempLocation = "esse";
                        workerRegion = "omnis";
                        workerZone = "repudiandae";
                        zone = "ipsum";
                    }};;
                    jobName = "minus";
                    parameters = new java.util.HashMap<String, String>() {{
                        put("illo", "est");
                        put("placeat", "sequi");
                    }};
                    transformNameMapping = new java.util.HashMap<String, String>() {{
                        put("tempore", "voluptates");
                    }};
                    update = false;
                }};;
                accessToken = "cumque";
                alt = AltEnum.PROTO;
                callback = "rem";
                dynamicTemplateGcsPath = "consectetur";
                dynamicTemplateStagingLocation = "nulla";
                fields = "magni";
                gcsPath = "dolor";
                key = "esse";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "debitis";
                uploadProtocol = "neque";
                validateOnly = false;
            }};            

            DataflowProjectsLocationsTemplatesLaunchResponse res = sdk.projects.dataflowProjectsLocationsTemplatesLaunch(req, new DataflowProjectsLocationsTemplatesLaunchSecurity() {{
                option1 = new DataflowProjectsLocationsTemplatesLaunchSecurityOption1("facilis", "sapiente") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.launchTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsLocationsWorkerMessages

Send a worker_message to the service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsWorkerMessagesRequest;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsWorkerMessagesResponse;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsWorkerMessagesSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsWorkerMessagesSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsWorkerMessagesSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsWorkerMessagesSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsLocationsWorkerMessagesSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CPUTime;
import org.openapis.openapi.models.shared.MemInfo;
import org.openapis.openapi.models.shared.ResourceUtilizationReport;
import org.openapis.openapi.models.shared.SendWorkerMessagesRequest;
import org.openapis.openapi.models.shared.WorkerHealthReport;
import org.openapis.openapi.models.shared.WorkerLifecycleEvent;
import org.openapis.openapi.models.shared.WorkerLifecycleEventEventEnum;
import org.openapis.openapi.models.shared.WorkerMessage;
import org.openapis.openapi.models.shared.WorkerMessageCode;
import org.openapis.openapi.models.shared.WorkerShutdownNotice;
import org.openapis.openapi.models.shared.WorkerThreadScalingReport;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsLocationsWorkerMessagesRequest req = new DataflowProjectsLocationsWorkerMessagesRequest("maxime", "sed") {{
                dollarXgafv = XgafvEnum.ONE;
                sendWorkerMessagesRequest = new SendWorkerMessagesRequest() {{
                    location = "nulla";
                    workerMessages = new org.openapis.openapi.models.shared.WorkerMessage[]{{
                        add(new WorkerMessage() {{
                            labels = new java.util.HashMap<String, String>() {{
                                put("ad", "aperiam");
                                put("animi", "unde");
                            }};
                            time = "rem";
                            workerHealthReport = new WorkerHealthReport() {{
                                msg = "iure";
                                pods = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("natus", "ad");
                                        put("cum", "dolorum");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("nihil", "quae");
                                        put("ducimus", "tenetur");
                                        put("eaque", "ex");
                                        put("rerum", "magni");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("repudiandae", "minus");
                                        put("porro", "atque");
                                        put("autem", "eius");
                                    }}),
                                }};
                                reportInterval = "unde";
                                vmBrokenCode = "sunt";
                                vmIsBroken = false;
                                vmIsHealthy = false;
                                vmStartupTime = "amet";
                            }};
                            workerLifecycleEvent = new WorkerLifecycleEvent() {{
                                containerStartTime = "laudantium";
                                event = WorkerLifecycleEventEventEnum.NETWORK_UP;
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("aliquid", "qui");
                                    put("eligendi", "perspiciatis");
                                    put("eum", "sint");
                                    put("eligendi", "incidunt");
                                }};
                            }};
                            workerMessageCode = new WorkerMessageCode() {{
                                code = "quisquam";
                                parameters = new java.util.HashMap<String, Object>() {{
                                    put("laboriosam", "quidem");
                                    put("reprehenderit", "praesentium");
                                    put("totam", "error");
                                    put("alias", "deserunt");
                                }};
                            }};
                            workerMetrics = new ResourceUtilizationReport() {{
                                containers = new java.util.HashMap<String, org.openapis.openapi.models.shared.ResourceUtilizationReport>() {{
                                    put("sapiente", new ResourceUtilizationReport() {{}});
                                }};
                                cpuTime = new org.openapis.openapi.models.shared.CPUTime[]{{
                                    add(new CPUTime() {{
                                        rate = 2026.93;
                                        timestamp = "optio";
                                        totalMs = "corrupti";
                                    }}),
                                    add(new CPUTime() {{
                                        rate = 771.51;
                                        timestamp = "quibusdam";
                                        totalMs = "culpa";
                                    }}),
                                    add(new CPUTime() {{
                                        rate = 1194.73;
                                        timestamp = "perferendis";
                                        totalMs = "asperiores";
                                    }}),
                                    add(new CPUTime() {{
                                        rate = 5342.04;
                                        timestamp = "optio";
                                        totalMs = "consequuntur";
                                    }}),
                                }};
                                memoryInfo = new org.openapis.openapi.models.shared.MemInfo[]{{
                                    add(new MemInfo() {{
                                        currentLimitBytes = "fugiat";
                                        currentOoms = "voluptatibus";
                                        currentRssBytes = "iste";
                                        timestamp = "amet";
                                        totalGbMs = "quae";
                                    }}),
                                }};
                            }};
                            workerShutdownNotice = new WorkerShutdownNotice() {{
                                reason = "pariatur";
                            }};
                            workerThreadScalingReport = new WorkerThreadScalingReport() {{
                                currentThreadCount = 641254;
                            }};
                        }}),
                        add(new WorkerMessage() {{
                            labels = new java.util.HashMap<String, String>() {{
                                put("debitis", "facere");
                            }};
                            time = "tempore";
                            workerHealthReport = new WorkerHealthReport() {{
                                msg = "minima";
                                pods = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("est", "facere");
                                        put("iste", "numquam");
                                        put("similique", "optio");
                                        put("minus", "sint");
                                    }}),
                                }};
                                reportInterval = "aliquam";
                                vmBrokenCode = "consectetur";
                                vmIsBroken = false;
                                vmIsHealthy = false;
                                vmStartupTime = "ullam";
                            }};
                            workerLifecycleEvent = new WorkerLifecycleEvent() {{
                                containerStartTime = "dicta";
                                event = WorkerLifecycleEventEventEnum.OS_START;
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("esse", "magni");
                                    put("ea", "quibusdam");
                                }};
                            }};
                            workerMessageCode = new WorkerMessageCode() {{
                                code = "veritatis";
                                parameters = new java.util.HashMap<String, Object>() {{
                                    put("velit", "quia");
                                    put("dicta", "nam");
                                }};
                            }};
                            workerMetrics = new ResourceUtilizationReport() {{
                                containers = new java.util.HashMap<String, org.openapis.openapi.models.shared.ResourceUtilizationReport>() {{
                                    put("velit", new ResourceUtilizationReport() {{}});
                                    put("ratione", new ResourceUtilizationReport() {{}});
                                    put("fuga", new ResourceUtilizationReport() {{}});
                                }};
                                cpuTime = new org.openapis.openapi.models.shared.CPUTime[]{{
                                    add(new CPUTime() {{
                                        rate = 3994.03;
                                        timestamp = "facere";
                                        totalMs = "laboriosam";
                                    }}),
                                    add(new CPUTime() {{
                                        rate = 5718.49;
                                        timestamp = "architecto";
                                        totalMs = "totam";
                                    }}),
                                }};
                                memoryInfo = new org.openapis.openapi.models.shared.MemInfo[]{{
                                    add(new MemInfo() {{
                                        currentLimitBytes = "hic";
                                        currentOoms = "tenetur";
                                        currentRssBytes = "iure";
                                        timestamp = "consequatur";
                                        totalGbMs = "accusamus";
                                    }}),
                                }};
                            }};
                            workerShutdownNotice = new WorkerShutdownNotice() {{
                                reason = "cum";
                            }};
                            workerThreadScalingReport = new WorkerThreadScalingReport() {{
                                currentThreadCount = 577854;
                            }};
                        }}),
                        add(new WorkerMessage() {{
                            labels = new java.util.HashMap<String, String>() {{
                                put("ex", "autem");
                                put("nostrum", "atque");
                                put("saepe", "eum");
                            }};
                            time = "molestias";
                            workerHealthReport = new WorkerHealthReport() {{
                                msg = "fuga";
                                pods = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("totam", "ut");
                                        put("non", "illum");
                                        put("adipisci", "totam");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("quibusdam", "harum");
                                    }}),
                                }};
                                reportInterval = "itaque";
                                vmBrokenCode = "porro";
                                vmIsBroken = false;
                                vmIsHealthy = false;
                                vmStartupTime = "ducimus";
                            }};
                            workerLifecycleEvent = new WorkerLifecycleEvent() {{
                                containerStartTime = "ad";
                                event = WorkerLifecycleEventEventEnum.SDK_INSTALL_START;
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("corrupti", "minus");
                                    put("autem", "aut");
                                }};
                            }};
                            workerMessageCode = new WorkerMessageCode() {{
                                code = "nisi";
                                parameters = new java.util.HashMap<String, Object>() {{
                                    put("cupiditate", "aliquam");
                                    put("suscipit", "atque");
                                }};
                            }};
                            workerMetrics = new ResourceUtilizationReport() {{
                                containers = new java.util.HashMap<String, org.openapis.openapi.models.shared.ResourceUtilizationReport>() {{
                                    put("debitis", new ResourceUtilizationReport() {{}});
                                    put("neque", new ResourceUtilizationReport() {{}});
                                    put("doloremque", new ResourceUtilizationReport() {{}});
                                    put("tempora", new ResourceUtilizationReport() {{}});
                                }};
                                cpuTime = new org.openapis.openapi.models.shared.CPUTime[]{{
                                    add(new CPUTime() {{
                                        rate = 5379.57;
                                        timestamp = "quas";
                                        totalMs = "magnam";
                                    }}),
                                    add(new CPUTime() {{
                                        rate = 5876.67;
                                        timestamp = "expedita";
                                        totalMs = "sapiente";
                                    }}),
                                    add(new CPUTime() {{
                                        rate = 5333.37;
                                        timestamp = "explicabo";
                                        totalMs = "veritatis";
                                    }}),
                                    add(new CPUTime() {{
                                        rate = 2766.43;
                                        timestamp = "eligendi";
                                        totalMs = "amet";
                                    }}),
                                }};
                                memoryInfo = new org.openapis.openapi.models.shared.MemInfo[]{{
                                    add(new MemInfo() {{
                                        currentLimitBytes = "nihil";
                                        currentOoms = "hic";
                                        currentRssBytes = "occaecati";
                                        timestamp = "iure";
                                        totalGbMs = "libero";
                                    }}),
                                }};
                            }};
                            workerShutdownNotice = new WorkerShutdownNotice() {{
                                reason = "cum";
                            }};
                            workerThreadScalingReport = new WorkerThreadScalingReport() {{
                                currentThreadCount = 53039;
                            }};
                        }}),
                    }};
                }};;
                accessToken = "porro";
                alt = AltEnum.MEDIA;
                callback = "omnis";
                fields = "recusandae";
                key = "adipisci";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "facere";
                uploadProtocol = "libero";
            }};            

            DataflowProjectsLocationsWorkerMessagesResponse res = sdk.projects.dataflowProjectsLocationsWorkerMessages(req, new DataflowProjectsLocationsWorkerMessagesSecurity() {{
                option1 = new DataflowProjectsLocationsWorkerMessagesSecurityOption1("vitae", "non") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sendWorkerMessagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsSnapshotsGet

Gets information about a snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsSnapshotsGetRequest;
import org.openapis.openapi.models.operations.DataflowProjectsSnapshotsGetResponse;
import org.openapis.openapi.models.operations.DataflowProjectsSnapshotsGetSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsSnapshotsGetSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsSnapshotsGetSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsSnapshotsGetSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsSnapshotsGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsSnapshotsGetRequest req = new DataflowProjectsSnapshotsGetRequest("labore", "incidunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "doloribus";
                fields = "reprehenderit";
                key = "rem";
                location = "est";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "accusantium";
                uploadProtocol = "necessitatibus";
            }};            

            DataflowProjectsSnapshotsGetResponse res = sdk.projects.dataflowProjectsSnapshotsGet(req, new DataflowProjectsSnapshotsGetSecurity() {{
                option1 = new DataflowProjectsSnapshotsGetSecurityOption1("facere", "reprehenderit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.snapshot != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsSnapshotsList

Lists snapshots.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsSnapshotsListRequest;
import org.openapis.openapi.models.operations.DataflowProjectsSnapshotsListResponse;
import org.openapis.openapi.models.operations.DataflowProjectsSnapshotsListSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsSnapshotsListSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsSnapshotsListSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsSnapshotsListSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsSnapshotsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsSnapshotsListRequest req = new DataflowProjectsSnapshotsListRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "soluta";
                alt = AltEnum.MEDIA;
                callback = "explicabo";
                fields = "recusandae";
                jobId = "unde";
                key = "iusto";
                location = "aspernatur";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "earum";
                uploadProtocol = "cum";
            }};            

            DataflowProjectsSnapshotsListResponse res = sdk.projects.dataflowProjectsSnapshotsList(req, new DataflowProjectsSnapshotsListSecurity() {{
                option1 = new DataflowProjectsSnapshotsListSecurityOption1("alias", "quod") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listSnapshotsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsTemplatesCreate

Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesCreateRequest;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesCreateResponse;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesCreateSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesCreateSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesCreateSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesCreateSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesCreateSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreateJobFromTemplateRequest;
import org.openapis.openapi.models.shared.RuntimeEnvironment;
import org.openapis.openapi.models.shared.RuntimeEnvironmentIpConfigurationEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsTemplatesCreateRequest req = new DataflowProjectsTemplatesCreateRequest("veniam") {{
                dollarXgafv = XgafvEnum.TWO;
                createJobFromTemplateRequest = new CreateJobFromTemplateRequest() {{
                    environment = new RuntimeEnvironment() {{
                        additionalExperiments = new String[]{{
                            add("odit"),
                            add("voluptate"),
                            add("nobis"),
                            add("exercitationem"),
                        }};
                        additionalUserLabels = new java.util.HashMap<String, String>() {{
                            put("cupiditate", "cupiditate");
                        }};
                        bypassTempDirValidation = false;
                        enableStreamingEngine = false;
                        ipConfiguration = RuntimeEnvironmentIpConfigurationEnum.WORKER_IP_PUBLIC;
                        kmsKeyName = "tempore";
                        machineType = "minima";
                        maxWorkers = 713538;
                        network = "modi";
                        numWorkers = 711732;
                        serviceAccountEmail = "quaerat";
                        subnetwork = "accusantium";
                        tempLocation = "recusandae";
                        workerRegion = "saepe";
                        workerZone = "sapiente";
                        zone = "iusto";
                    }};;
                    gcsPath = "quasi";
                    jobName = "odit";
                    location = "tempore";
                    parameters = new java.util.HashMap<String, String>() {{
                        put("animi", "ducimus");
                        put("similique", "expedita");
                    }};
                }};;
                accessToken = "voluptatem";
                alt = AltEnum.JSON;
                callback = "tempora";
                fields = "modi";
                key = "soluta";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "ducimus";
                uploadType = "vitae";
                uploadProtocol = "sit";
            }};            

            DataflowProjectsTemplatesCreateResponse res = sdk.projects.dataflowProjectsTemplatesCreate(req, new DataflowProjectsTemplatesCreateSecurity() {{
                option1 = new DataflowProjectsTemplatesCreateSecurityOption1("autem", "rem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## dataflowProjectsTemplatesGet

Get the template associated with a template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesGetRequest;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesGetResponse;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesGetSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesGetSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesGetSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesGetSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesGetSecurityOption4;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsTemplatesGetRequest req = new DataflowProjectsTemplatesGetRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "necessitatibus";
                alt = AltEnum.PROTO;
                callback = "facilis";
                fields = "necessitatibus";
                gcsPath = "asperiores";
                key = "rem";
                location = "perspiciatis";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "velit";
                uploadProtocol = "fugiat";
                view = DataflowProjectsTemplatesGetViewEnum.METADATA_ONLY;
            }};            

            DataflowProjectsTemplatesGetResponse res = sdk.projects.dataflowProjectsTemplatesGet(req, new DataflowProjectsTemplatesGetSecurity() {{
                option1 = new DataflowProjectsTemplatesGetSecurityOption1("pariatur", "voluptatem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsTemplatesLaunch

Launch a template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesLaunchRequest;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesLaunchResponse;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesLaunchSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesLaunchSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesLaunchSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesLaunchSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsTemplatesLaunchSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LaunchTemplateParameters;
import org.openapis.openapi.models.shared.RuntimeEnvironment;
import org.openapis.openapi.models.shared.RuntimeEnvironmentIpConfigurationEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsTemplatesLaunchRequest req = new DataflowProjectsTemplatesLaunchRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                launchTemplateParameters = new LaunchTemplateParameters() {{
                    environment = new RuntimeEnvironment() {{
                        additionalExperiments = new String[]{{
                            add("dolor"),
                            add("amet"),
                            add("tenetur"),
                            add("quasi"),
                        }};
                        additionalUserLabels = new java.util.HashMap<String, String>() {{
                            put("rerum", "neque");
                        }};
                        bypassTempDirValidation = false;
                        enableStreamingEngine = false;
                        ipConfiguration = RuntimeEnvironmentIpConfigurationEnum.WORKER_IP_PRIVATE;
                        kmsKeyName = "aliquam";
                        machineType = "voluptates";
                        maxWorkers = 3091;
                        network = "voluptatum";
                        numWorkers = 13682;
                        serviceAccountEmail = "officia";
                        subnetwork = "officia";
                        tempLocation = "vitae";
                        workerRegion = "ipsa";
                        workerZone = "incidunt";
                        zone = "architecto";
                    }};;
                    jobName = "deleniti";
                    parameters = new java.util.HashMap<String, String>() {{
                        put("accusamus", "optio");
                        put("odio", "ullam");
                    }};
                    transformNameMapping = new java.util.HashMap<String, String>() {{
                        put("officiis", "ipsa");
                        put("eos", "delectus");
                        put("dolor", "dignissimos");
                    }};
                    update = false;
                }};;
                accessToken = "doloremque";
                alt = AltEnum.JSON;
                callback = "maxime";
                dynamicTemplateGcsPath = "quis";
                dynamicTemplateStagingLocation = "cumque";
                fields = "laudantium";
                gcsPath = "recusandae";
                key = "odit";
                location = "fugiat";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "voluptates";
                uploadProtocol = "culpa";
                validateOnly = false;
            }};            

            DataflowProjectsTemplatesLaunchResponse res = sdk.projects.dataflowProjectsTemplatesLaunch(req, new DataflowProjectsTemplatesLaunchSecurity() {{
                option1 = new DataflowProjectsTemplatesLaunchSecurityOption1("at", "dolorem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.launchTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataflowProjectsWorkerMessages

Send a worker_message to the service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsWorkerMessagesRequest;
import org.openapis.openapi.models.operations.DataflowProjectsWorkerMessagesResponse;
import org.openapis.openapi.models.operations.DataflowProjectsWorkerMessagesSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsWorkerMessagesSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsWorkerMessagesSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsWorkerMessagesSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsWorkerMessagesSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CPUTime;
import org.openapis.openapi.models.shared.MemInfo;
import org.openapis.openapi.models.shared.ResourceUtilizationReport;
import org.openapis.openapi.models.shared.SendWorkerMessagesRequest;
import org.openapis.openapi.models.shared.WorkerHealthReport;
import org.openapis.openapi.models.shared.WorkerLifecycleEvent;
import org.openapis.openapi.models.shared.WorkerLifecycleEventEventEnum;
import org.openapis.openapi.models.shared.WorkerMessage;
import org.openapis.openapi.models.shared.WorkerMessageCode;
import org.openapis.openapi.models.shared.WorkerShutdownNotice;
import org.openapis.openapi.models.shared.WorkerThreadScalingReport;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsWorkerMessagesRequest req = new DataflowProjectsWorkerMessagesRequest("sunt") {{
                dollarXgafv = XgafvEnum.ONE;
                sendWorkerMessagesRequest = new SendWorkerMessagesRequest() {{
                    location = "incidunt";
                    workerMessages = new org.openapis.openapi.models.shared.WorkerMessage[]{{
                        add(new WorkerMessage() {{
                            labels = new java.util.HashMap<String, String>() {{
                                put("dolore", "eius");
                                put("iure", "alias");
                                put("molestiae", "rerum");
                            }};
                            time = "voluptatibus";
                            workerHealthReport = new WorkerHealthReport() {{
                                msg = "sequi";
                                pods = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("libero", "ut");
                                        put("tempora", "sed");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("aspernatur", "laudantium");
                                        put("fugit", "et");
                                        put("reiciendis", "nulla");
                                    }}),
                                }};
                                reportInterval = "libero";
                                vmBrokenCode = "sed";
                                vmIsBroken = false;
                                vmIsHealthy = false;
                                vmStartupTime = "hic";
                            }};
                            workerLifecycleEvent = new WorkerLifecycleEvent() {{
                                containerStartTime = "eum";
                                event = WorkerLifecycleEventEventEnum.STAGING_FILES_DOWNLOAD_START;
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("veniam", "unde");
                                    put("consequuntur", "laboriosam");
                                    put("iusto", "quisquam");
                                    put("dignissimos", "ab");
                                }};
                            }};
                            workerMessageCode = new WorkerMessageCode() {{
                                code = "quo";
                                parameters = new java.util.HashMap<String, Object>() {{
                                    put("voluptatum", "pariatur");
                                    put("sequi", "quo");
                                    put("facere", "labore");
                                    put("fugit", "quis");
                                }};
                            }};
                            workerMetrics = new ResourceUtilizationReport() {{
                                containers = new java.util.HashMap<String, org.openapis.openapi.models.shared.ResourceUtilizationReport>() {{
                                    put("temporibus", new ResourceUtilizationReport() {{}});
                                    put("doloremque", new ResourceUtilizationReport() {{}});
                                    put("amet", new ResourceUtilizationReport() {{}});
                                }};
                                cpuTime = new org.openapis.openapi.models.shared.CPUTime[]{{
                                    add(new CPUTime() {{
                                        rate = 5378.94;
                                        timestamp = "laborum";
                                        totalMs = "quas";
                                    }}),
                                    add(new CPUTime() {{
                                        rate = 1387.08;
                                        timestamp = "placeat";
                                        totalMs = "rem";
                                    }}),
                                }};
                                memoryInfo = new org.openapis.openapi.models.shared.MemInfo[]{{
                                    add(new MemInfo() {{
                                        currentLimitBytes = "atque";
                                        currentOoms = "repellat";
                                        currentRssBytes = "eveniet";
                                        timestamp = "odit";
                                        totalGbMs = "quam";
                                    }}),
                                }};
                            }};
                            workerShutdownNotice = new WorkerShutdownNotice() {{
                                reason = "ullam";
                            }};
                            workerThreadScalingReport = new WorkerThreadScalingReport() {{
                                currentThreadCount = 78350;
                            }};
                        }}),
                        add(new WorkerMessage() {{
                            labels = new java.util.HashMap<String, String>() {{
                                put("fugit", "perferendis");
                                put("incidunt", "ducimus");
                                put("quod", "aut");
                            }};
                            time = "numquam";
                            workerHealthReport = new WorkerHealthReport() {{
                                msg = "numquam";
                                pods = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("inventore", "quaerat");
                                        put("nesciunt", "hic");
                                        put("natus", "laboriosam");
                                        put("quasi", "excepturi");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("cum", "in");
                                        put("repellendus", "incidunt");
                                        put("aperiam", "vero");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("laborum", "quae");
                                        put("quae", "voluptatibus");
                                    }}),
                                }};
                                reportInterval = "est";
                                vmBrokenCode = "modi";
                                vmIsBroken = false;
                                vmIsHealthy = false;
                                vmStartupTime = "nesciunt";
                            }};
                            workerLifecycleEvent = new WorkerLifecycleEvent() {{
                                containerStartTime = "autem";
                                event = WorkerLifecycleEventEventEnum.SDK_INSTALL_FINISH;
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("sed", "exercitationem");
                                    put("natus", "explicabo");
                                }};
                            }};
                            workerMessageCode = new WorkerMessageCode() {{
                                code = "velit";
                                parameters = new java.util.HashMap<String, Object>() {{
                                    put("hic", "natus");
                                }};
                            }};
                            workerMetrics = new ResourceUtilizationReport() {{
                                containers = new java.util.HashMap<String, org.openapis.openapi.models.shared.ResourceUtilizationReport>() {{
                                    put("minus", new ResourceUtilizationReport() {{}});
                                    put("provident", new ResourceUtilizationReport() {{}});
                                }};
                                cpuTime = new org.openapis.openapi.models.shared.CPUTime[]{{
                                    add(new CPUTime() {{
                                        rate = 1295.09;
                                        timestamp = "adipisci";
                                        totalMs = "iusto";
                                    }}),
                                    add(new CPUTime() {{
                                        rate = 1905.99;
                                        timestamp = "omnis";
                                        totalMs = "quam";
                                    }}),
                                    add(new CPUTime() {{
                                        rate = 7706.96;
                                        timestamp = "iusto";
                                        totalMs = "quas";
                                    }}),
                                    add(new CPUTime() {{
                                        rate = 3642.27;
                                        timestamp = "facilis";
                                        totalMs = "exercitationem";
                                    }}),
                                }};
                                memoryInfo = new org.openapis.openapi.models.shared.MemInfo[]{{
                                    add(new MemInfo() {{
                                        currentLimitBytes = "tempore";
                                        currentOoms = "magnam";
                                        currentRssBytes = "maiores";
                                        timestamp = "quis";
                                        totalGbMs = "aut";
                                    }}),
                                    add(new MemInfo() {{
                                        currentLimitBytes = "voluptatem";
                                        currentOoms = "vitae";
                                        currentRssBytes = "quos";
                                        timestamp = "adipisci";
                                        totalGbMs = "reiciendis";
                                    }}),
                                    add(new MemInfo() {{
                                        currentLimitBytes = "accusamus";
                                        currentOoms = "tempore";
                                        currentRssBytes = "vero";
                                        timestamp = "asperiores";
                                        totalGbMs = "ea";
                                    }}),
                                    add(new MemInfo() {{
                                        currentLimitBytes = "voluptate";
                                        currentOoms = "aliquid";
                                        currentRssBytes = "nobis";
                                        timestamp = "reprehenderit";
                                        totalGbMs = "consequuntur";
                                    }}),
                                }};
                            }};
                            workerShutdownNotice = new WorkerShutdownNotice() {{
                                reason = "accusantium";
                            }};
                            workerThreadScalingReport = new WorkerThreadScalingReport() {{
                                currentThreadCount = 422006;
                            }};
                        }}),
                        add(new WorkerMessage() {{
                            labels = new java.util.HashMap<String, String>() {{
                                put("deserunt", "facilis");
                                put("in", "ad");
                                put("voluptatem", "sit");
                                put("enim", "qui");
                            }};
                            time = "dolorum";
                            workerHealthReport = new WorkerHealthReport() {{
                                msg = "ad";
                                pods = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("in", "officiis");
                                        put("fugiat", "minus");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("sequi", "natus");
                                        put("saepe", "quibusdam");
                                    }}),
                                }};
                                reportInterval = "corrupti";
                                vmBrokenCode = "maxime";
                                vmIsBroken = false;
                                vmIsHealthy = false;
                                vmStartupTime = "aliquam";
                            }};
                            workerLifecycleEvent = new WorkerLifecycleEvent() {{
                                containerStartTime = "adipisci";
                                event = WorkerLifecycleEventEventEnum.OS_START;
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("hic", "incidunt");
                                }};
                            }};
                            workerMessageCode = new WorkerMessageCode() {{
                                code = "quae";
                                parameters = new java.util.HashMap<String, Object>() {{
                                    put("eius", "voluptatem");
                                }};
                            }};
                            workerMetrics = new ResourceUtilizationReport() {{
                                containers = new java.util.HashMap<String, org.openapis.openapi.models.shared.ResourceUtilizationReport>() {{
                                    put("aliquam", new ResourceUtilizationReport() {{}});
                                    put("incidunt", new ResourceUtilizationReport() {{}});
                                    put("totam", new ResourceUtilizationReport() {{}});
                                    put("iusto", new ResourceUtilizationReport() {{}});
                                }};
                                cpuTime = new org.openapis.openapi.models.shared.CPUTime[]{{
                                    add(new CPUTime() {{
                                        rate = 7842.87;
                                        timestamp = "voluptas";
                                        totalMs = "provident";
                                    }}),
                                    add(new CPUTime() {{
                                        rate = 2042.83;
                                        timestamp = "expedita";
                                        totalMs = "excepturi";
                                    }}),
                                    add(new CPUTime() {{
                                        rate = 3121.46;
                                        timestamp = "nobis";
                                        totalMs = "nesciunt";
                                    }}),
                                }};
                                memoryInfo = new org.openapis.openapi.models.shared.MemInfo[]{{
                                    add(new MemInfo() {{
                                        currentLimitBytes = "unde";
                                        currentOoms = "fugiat";
                                        currentRssBytes = "magni";
                                        timestamp = "modi";
                                        totalGbMs = "atque";
                                    }}),
                                    add(new MemInfo() {{
                                        currentLimitBytes = "blanditiis";
                                        currentOoms = "quibusdam";
                                        currentRssBytes = "odio";
                                        timestamp = "unde";
                                        totalGbMs = "ad";
                                    }}),
                                    add(new MemInfo() {{
                                        currentLimitBytes = "officia";
                                        currentOoms = "fuga";
                                        currentRssBytes = "incidunt";
                                        timestamp = "aspernatur";
                                        totalGbMs = "asperiores";
                                    }}),
                                }};
                            }};
                            workerShutdownNotice = new WorkerShutdownNotice() {{
                                reason = "maxime";
                            }};
                            workerThreadScalingReport = new WorkerThreadScalingReport() {{
                                currentThreadCount = 294102;
                            }};
                        }}),
                        add(new WorkerMessage() {{
                            labels = new java.util.HashMap<String, String>() {{
                                put("corporis", "laboriosam");
                            }};
                            time = "laboriosam";
                            workerHealthReport = new WorkerHealthReport() {{
                                msg = "omnis";
                                pods = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("iste", "animi");
                                        put("quae", "doloremque");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("pariatur", "fugit");
                                        put("inventore", "odit");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("perspiciatis", "dolore");
                                        put("ullam", "aut");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("quasi", "natus");
                                        put("fugiat", "odio");
                                        put("quo", "ipsum");
                                    }}),
                                }};
                                reportInterval = "cum";
                                vmBrokenCode = "et";
                                vmIsBroken = false;
                                vmIsHealthy = false;
                                vmStartupTime = "harum";
                            }};
                            workerLifecycleEvent = new WorkerLifecycleEvent() {{
                                containerStartTime = "magnam";
                                event = WorkerLifecycleEventEventEnum.UNKNOWN_EVENT;
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("magnam", "incidunt");
                                    put("consequatur", "nisi");
                                    put("quae", "saepe");
                                }};
                            }};
                            workerMessageCode = new WorkerMessageCode() {{
                                code = "accusantium";
                                parameters = new java.util.HashMap<String, Object>() {{
                                    put("nesciunt", "veritatis");
                                }};
                            }};
                            workerMetrics = new ResourceUtilizationReport() {{
                                containers = new java.util.HashMap<String, org.openapis.openapi.models.shared.ResourceUtilizationReport>() {{
                                    put("possimus", new ResourceUtilizationReport() {{}});
                                }};
                                cpuTime = new org.openapis.openapi.models.shared.CPUTime[]{{
                                    add(new CPUTime() {{
                                        rate = 1861.03;
                                        timestamp = "velit";
                                        totalMs = "repellendus";
                                    }}),
                                }};
                                memoryInfo = new org.openapis.openapi.models.shared.MemInfo[]{{
                                    add(new MemInfo() {{
                                        currentLimitBytes = "error";
                                        currentOoms = "ipsa";
                                        currentRssBytes = "beatae";
                                        timestamp = "doloribus";
                                        totalGbMs = "veniam";
                                    }}),
                                    add(new MemInfo() {{
                                        currentLimitBytes = "animi";
                                        currentOoms = "delectus";
                                        currentRssBytes = "pariatur";
                                        timestamp = "eos";
                                        totalGbMs = "id";
                                    }}),
                                    add(new MemInfo() {{
                                        currentLimitBytes = "commodi";
                                        currentOoms = "quo";
                                        currentRssBytes = "aliquam";
                                        timestamp = "magnam";
                                        totalGbMs = "praesentium";
                                    }}),
                                    add(new MemInfo() {{
                                        currentLimitBytes = "numquam";
                                        currentOoms = "iure";
                                        currentRssBytes = "id";
                                        timestamp = "itaque";
                                        totalGbMs = "molestias";
                                    }}),
                                }};
                            }};
                            workerShutdownNotice = new WorkerShutdownNotice() {{
                                reason = "assumenda";
                            }};
                            workerThreadScalingReport = new WorkerThreadScalingReport() {{
                                currentThreadCount = 505663;
                            }};
                        }}),
                    }};
                }};;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "veniam";
                fields = "amet";
                key = "nobis";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "ea";
                uploadProtocol = "consequuntur";
            }};            

            DataflowProjectsWorkerMessagesResponse res = sdk.projects.dataflowProjectsWorkerMessages(req, new DataflowProjectsWorkerMessagesSecurity() {{
                option1 = new DataflowProjectsWorkerMessagesSecurityOption1("delectus", "quaerat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sendWorkerMessagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
