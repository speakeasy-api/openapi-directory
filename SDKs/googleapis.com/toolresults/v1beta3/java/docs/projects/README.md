# projects

### Available Operations

* [toolresultsProjectsGetSettings](#toolresultsprojectsgetsettings) - Gets the Tool Results settings for a project. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from project
* [toolresultsProjectsHistoriesCreate](#toolresultsprojectshistoriescreate) - Creates a History. The returned History will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist
* [toolresultsProjectsHistoriesExecutionsClustersGet](#toolresultsprojectshistoriesexecutionsclustersget) - Retrieves a single screenshot cluster by its ID
* [toolresultsProjectsHistoriesExecutionsClustersList](#toolresultsprojectshistoriesexecutionsclusterslist) - Lists Screenshot Clusters Returns the list of screenshot clusters corresponding to an execution. Screenshot clusters are created after the execution is finished. Clusters are created from a set of screenshots. Between any two screenshots, a matching score is calculated based off their metadata that determines how similar they are. Screenshots are placed in the cluster that has screens which have the highest matching scores.
* [toolresultsProjectsHistoriesExecutionsCreate](#toolresultsprojectshistoriesexecutionscreate) - Creates an Execution. The returned Execution will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
* [toolresultsProjectsHistoriesExecutionsEnvironmentsGet](#toolresultsprojectshistoriesexecutionsenvironmentsget) - Gets an Environment. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Environment does not exist
* [toolresultsProjectsHistoriesExecutionsEnvironmentsList](#toolresultsprojectshistoriesexecutionsenvironmentslist) - Lists Environments for a given Execution. The Environments are sorted by display name. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Execution does not exist
* [toolresultsProjectsHistoriesExecutionsGet](#toolresultsprojectshistoriesexecutionsget) - Gets an Execution. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist
* [toolresultsProjectsHistoriesExecutionsList](#toolresultsprojectshistoriesexecutionslist) - Lists Executions for a given History. The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
* [toolresultsProjectsHistoriesExecutionsPatch](#toolresultsprojectshistoriesexecutionspatch) - Updates an existing Execution with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist
* [toolresultsProjectsHistoriesExecutionsStepsAccessibilityClusters](#toolresultsprojectshistoriesexecutionsstepsaccessibilityclusters) - Lists accessibility clusters for a given Step May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if the locale format is incorrect - NOT_FOUND - if the containing Step does not exist
* [toolresultsProjectsHistoriesExecutionsStepsCreate](#toolresultsprojectshistoriesexecutionsstepscreate) - Creates a Step. The returned Step will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
* [toolresultsProjectsHistoriesExecutionsStepsGet](#toolresultsprojectshistoriesexecutionsstepsget) - Gets a Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist
* [toolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummary](#toolresultsprojectshistoriesexecutionsstepsgetperfmetricssummary) - Retrieves a PerfMetricsSummary. May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist
* [toolresultsProjectsHistoriesExecutionsStepsList](#toolresultsprojectshistoriesexecutionsstepslist) - Lists Steps for a given Execution. The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist
* [toolresultsProjectsHistoriesExecutionsStepsPatch](#toolresultsprojectshistoriesexecutionsstepspatch) - Updates an existing Step with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
* [toolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreate](#toolresultsprojectshistoriesexecutionsstepsperfmetricssummarycreate) - Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created. May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist
* [toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreate](#toolresultsprojectshistoriesexecutionsstepsperfsampleseriescreate) - Creates a PerfSampleSeries. May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist
* [toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGet](#toolresultsprojectshistoriesexecutionsstepsperfsampleseriesget) - Gets a PerfSampleSeries. May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist
* [toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesList](#toolresultsprojectshistoriesexecutionsstepsperfsampleserieslist) - Lists PerfSampleSeries for a given Step. The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids. May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist
* [toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreate](#toolresultsprojectshistoriesexecutionsstepsperfsampleseriessamplesbatchcreate) - Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database). May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist
* [toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesList](#toolresultsprojectshistoriesexecutionsstepsperfsampleseriessampleslist) - Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist
* [toolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFiles](#toolresultsprojectshistoriesexecutionsstepspublishxunitxmlfiles) - Publish xml files to an existing Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g. try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist
* [toolresultsProjectsHistoriesExecutionsStepsTestCasesGet](#toolresultsprojectshistoriesexecutionsstepstestcasesget) - Gets details of a Test Case for a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Test Case does not exist
* [toolresultsProjectsHistoriesExecutionsStepsTestCasesList](#toolresultsprojectshistoriesexecutionsstepstestcaseslist) - Lists Test Cases attached to a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Step does not exist
* [toolresultsProjectsHistoriesExecutionsStepsThumbnailsList](#toolresultsprojectshistoriesexecutionsstepsthumbnailslist) - Lists thumbnails of images attached to a step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist
* [toolresultsProjectsHistoriesGet](#toolresultsprojectshistoriesget) - Gets a History. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
* [toolresultsProjectsHistoriesList](#toolresultsprojectshistorieslist) - Lists Histories for a given Project. The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
* [toolresultsProjectsInitializeSettings](#toolresultsprojectsinitializesettings) - Creates resources for settings which have not yet been set. Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days. The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details. If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created. May return any canonical error codes, including the following: - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage

## toolresultsProjectsGetSettings

Gets the Tool Results settings for a project. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsGetSettingsRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsGetSettingsResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsGetSettingsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsGetSettingsRequest req = new ToolresultsProjectsGetSettingsRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            ToolresultsProjectsGetSettingsResponse res = sdk.projects.toolresultsProjectsGetSettings(req, new ToolresultsProjectsGetSettingsSecurity("excepturi", "nisi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.projectSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesCreate

Creates a History. The returned History will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesCreateRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesCreateResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.History;
import org.openapis.openapi.models.shared.HistoryTestPlatformEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesCreateRequest req = new ToolresultsProjectsHistoriesCreateRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                history = new History() {{
                    displayName = "ab";
                    historyId = "quis";
                    name = "Iris Aufderhar";
                    testPlatform = HistoryTestPlatformEnum.IOS;
                }};;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "at";
                fields = "at";
                key = "maiores";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "quod";
                requestId = "quod";
                uploadType = "esse";
                uploadProtocol = "totam";
            }};            

            ToolresultsProjectsHistoriesCreateResponse res = sdk.projects.toolresultsProjectsHistoriesCreate(req, new ToolresultsProjectsHistoriesCreateSecurity("porro", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.history != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsClustersGet

Retrieves a single screenshot cluster by its ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsClustersGetRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsClustersGetResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsClustersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsClustersGetRequest req = new ToolresultsProjectsHistoriesExecutionsClustersGetRequest("dicta", "nam", "officia", "occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "optio";
                fields = "totam";
                key = "beatae";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            ToolresultsProjectsHistoriesExecutionsClustersGetResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsClustersGet(req, new ToolresultsProjectsHistoriesExecutionsClustersGetSecurity("impedit", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.screenshotCluster != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsClustersList

Lists Screenshot Clusters Returns the list of screenshot clusters corresponding to an execution. Screenshot clusters are created after the execution is finished. Clusters are created from a set of screenshots. Between any two screenshots, a matching score is calculated based off their metadata that determines how similar they are. Screenshots are placed in the cluster that has screens which have the highest matching scores.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsClustersListRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsClustersListResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsClustersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsClustersListRequest req = new ToolresultsProjectsHistoriesExecutionsClustersListRequest("esse", "ipsum", "excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "sed";
                key = "iste";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "laboriosam";
                uploadProtocol = "hic";
            }};            

            ToolresultsProjectsHistoriesExecutionsClustersListResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsClustersList(req, new ToolresultsProjectsHistoriesExecutionsClustersListSecurity("saepe", "fuga") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listScreenshotClustersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsCreate

Creates an Execution. The returned Execution will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsCreateRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsCreateResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AndroidAppInfo;
import org.openapis.openapi.models.shared.AndroidInstrumentationTest;
import org.openapis.openapi.models.shared.AndroidRoboTest;
import org.openapis.openapi.models.shared.AndroidTest;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.Execution;
import org.openapis.openapi.models.shared.ExecutionStateEnum;
import org.openapis.openapi.models.shared.FailureDetail;
import org.openapis.openapi.models.shared.InconclusiveDetail;
import org.openapis.openapi.models.shared.IosAppInfo;
import org.openapis.openapi.models.shared.IosTest;
import org.openapis.openapi.models.shared.IosTestLoop;
import org.openapis.openapi.models.shared.IosXcTest;
import org.openapis.openapi.models.shared.Outcome;
import org.openapis.openapi.models.shared.OutcomeSummaryEnum;
import org.openapis.openapi.models.shared.SkippedDetail;
import org.openapis.openapi.models.shared.Specification;
import org.openapis.openapi.models.shared.SuccessDetail;
import org.openapis.openapi.models.shared.Timestamp;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsCreateRequest req = new ToolresultsProjectsHistoriesExecutionsCreateRequest("in", "corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                execution = new Execution() {{
                    completionTime = new Timestamp() {{
                        nanos = 437032;
                        seconds = "saepe";
                    }};;
                    creationTime = new Timestamp() {{
                        nanos = 697631;
                        seconds = "architecto";
                    }};;
                    dimensionDefinitions = new java.util.HashMap<String, Object>[]{{
                        add(new java.util.HashMap<String, Object>() {{
                            put("est", "mollitia");
                            put("laborum", "dolores");
                            put("dolorem", "corporis");
                            put("explicabo", "nobis");
                        }}),
                    }};
                    executionId = "enim";
                    outcome = new Outcome() {{
                        failureDetail = new FailureDetail() {{
                            crashed = false;
                            deviceOutOfMemory = false;
                            failedRoboscript = false;
                            notInstalled = false;
                            otherNativeCrash = false;
                            timedOut = false;
                            unableToCrawl = false;
                        }};;
                        inconclusiveDetail = new InconclusiveDetail() {{
                            abortedByUser = false;
                            hasErrorLogs = false;
                            infrastructureFailure = false;
                        }};;
                        skippedDetail = new SkippedDetail() {{
                            incompatibleAppVersion = false;
                            incompatibleArchitecture = false;
                            incompatibleDevice = false;
                        }};;
                        successDetail = new SuccessDetail() {{
                            otherNativeCrash = false;
                        }};;
                        summary = OutcomeSummaryEnum.INCONCLUSIVE;
                    }};;
                    specification = new Specification() {{
                        androidTest = new AndroidTest() {{
                            androidAppInfo = new AndroidAppInfo() {{
                                name = "Ms. Cathy Marks";
                                packageName = "doloribus";
                                versionCode = "sapiente";
                                versionName = "architecto";
                            }};;
                            androidInstrumentationTest = new AndroidInstrumentationTest() {{
                                testPackageId = "mollitia";
                                testRunnerClass = "dolorem";
                                testTargets = new String[]{{
                                    add("consequuntur"),
                                    add("repellat"),
                                    add("mollitia"),
                                }};
                                useOrchestrator = false;
                            }};;
                            androidRoboTest = new AndroidRoboTest() {{
                                appInitialActivity = "occaecati";
                                bootstrapPackageId = "numquam";
                                bootstrapRunnerClass = "commodi";
                                maxDepth = 466311;
                                maxSteps = 474697;
                            }};;
                            androidTestLoop = new java.util.HashMap<String, Object>() {{
                                put("error", "quia");
                            }};
                            testTimeout = new Duration() {{
                                nanos = 338007;
                                seconds = "vitae";
                            }};;
                        }};;
                        iosTest = new IosTest() {{
                            iosAppInfo = new IosAppInfo() {{
                                name = "Matt Hamill";
                            }};;
                            iosRoboTest = new java.util.HashMap<String, Object>() {{
                                put("tenetur", "ipsam");
                            }};
                            iosTestLoop = new IosTestLoop() {{
                                bundleId = "id";
                            }};;
                            iosXcTest = new IosXcTest() {{
                                bundleId = "possimus";
                                xcodeVersion = "aut";
                            }};;
                            testTimeout = new Duration() {{
                                nanos = 97101;
                                seconds = "error";
                            }};;
                        }};;
                    }};;
                    state = ExecutionStateEnum.COMPLETE;
                    testExecutionMatrixId = "laborum";
                }};;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "vero";
                key = "nihil";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                requestId = "ipsa";
                uploadType = "omnis";
                uploadProtocol = "voluptate";
            }};            

            ToolresultsProjectsHistoriesExecutionsCreateResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsCreate(req, new ToolresultsProjectsHistoriesExecutionsCreateSecurity("cum", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.execution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsEnvironmentsGet

Gets an Environment. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Environment does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsGetRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsGetResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsEnvironmentsGetRequest req = new ToolresultsProjectsHistoriesExecutionsEnvironmentsGetRequest("doloremque", "reprehenderit", "ut", "maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "iusto";
                fields = "dicta";
                key = "harum";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "commodi";
                uploadProtocol = "repudiandae";
            }};            

            ToolresultsProjectsHistoriesExecutionsEnvironmentsGetResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsEnvironmentsGet(req, new ToolresultsProjectsHistoriesExecutionsEnvironmentsGetSecurity("quae", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.environment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsEnvironmentsList

Lists Environments for a given Execution. The Environments are sorted by display name. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Execution does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsListRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsListResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsEnvironmentsListRequest req = new ToolresultsProjectsHistoriesExecutionsEnvironmentsListRequest("quidem", "molestias", "excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "rem";
                fields = "voluptates";
                key = "quasi";
                oauthToken = "repudiandae";
                pageSize = 575947L;
                pageToken = "veritatis";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "incidunt";
                uploadProtocol = "enim";
            }};            

            ToolresultsProjectsHistoriesExecutionsEnvironmentsListResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsEnvironmentsList(req, new ToolresultsProjectsHistoriesExecutionsEnvironmentsListSecurity("consequatur", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listEnvironmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsGet

Gets an Execution. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsGetRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsGetResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsGetRequest req = new ToolresultsProjectsHistoriesExecutionsGetRequest("quibusdam", "explicabo", "deserunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "modi";
                fields = "qui";
                key = "aliquid";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "perferendis";
                uploadProtocol = "magni";
            }};            

            ToolresultsProjectsHistoriesExecutionsGetResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsGet(req, new ToolresultsProjectsHistoriesExecutionsGetSecurity("assumenda", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.execution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsList

Lists Executions for a given History. The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsListRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsListResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsListRequest req = new ToolresultsProjectsHistoriesExecutionsListRequest("alias", "fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "facilis";
                fields = "tempore";
                key = "labore";
                oauthToken = "delectus";
                pageSize = 433288L;
                pageToken = "non";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "sint";
                uploadProtocol = "aliquid";
            }};            

            ToolresultsProjectsHistoriesExecutionsListResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsList(req, new ToolresultsProjectsHistoriesExecutionsListSecurity("provident", "necessitatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listExecutionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsPatch

Updates an existing Execution with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsPatchRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsPatchResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AndroidAppInfo;
import org.openapis.openapi.models.shared.AndroidInstrumentationTest;
import org.openapis.openapi.models.shared.AndroidRoboTest;
import org.openapis.openapi.models.shared.AndroidTest;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.Execution;
import org.openapis.openapi.models.shared.ExecutionStateEnum;
import org.openapis.openapi.models.shared.FailureDetail;
import org.openapis.openapi.models.shared.InconclusiveDetail;
import org.openapis.openapi.models.shared.IosAppInfo;
import org.openapis.openapi.models.shared.IosTest;
import org.openapis.openapi.models.shared.IosTestLoop;
import org.openapis.openapi.models.shared.IosXcTest;
import org.openapis.openapi.models.shared.Outcome;
import org.openapis.openapi.models.shared.OutcomeSummaryEnum;
import org.openapis.openapi.models.shared.SkippedDetail;
import org.openapis.openapi.models.shared.Specification;
import org.openapis.openapi.models.shared.SuccessDetail;
import org.openapis.openapi.models.shared.Timestamp;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsPatchRequest req = new ToolresultsProjectsHistoriesExecutionsPatchRequest("sint", "officia", "dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                execution = new Execution() {{
                    completionTime = new Timestamp() {{
                        nanos = 952749;
                        seconds = "dolorum";
                    }};;
                    creationTime = new Timestamp() {{
                        nanos = 447125;
                        seconds = "in";
                    }};;
                    dimensionDefinitions = new java.util.HashMap<String, Object>[]{{
                        add(new java.util.HashMap<String, Object>() {{
                            put("rerum", "dicta");
                            put("magnam", "cumque");
                            put("facere", "ea");
                            put("aliquid", "laborum");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("non", "occaecati");
                            put("enim", "accusamus");
                            put("delectus", "quidem");
                            put("provident", "nam");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("blanditiis", "deleniti");
                            put("sapiente", "amet");
                            put("deserunt", "nisi");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("natus", "omnis");
                            put("molestiae", "perferendis");
                        }}),
                    }};
                    executionId = "nihil";
                    outcome = new Outcome() {{
                        failureDetail = new FailureDetail() {{
                            crashed = false;
                            deviceOutOfMemory = false;
                            failedRoboscript = false;
                            notInstalled = false;
                            otherNativeCrash = false;
                            timedOut = false;
                            unableToCrawl = false;
                        }};;
                        inconclusiveDetail = new InconclusiveDetail() {{
                            abortedByUser = false;
                            hasErrorLogs = false;
                            infrastructureFailure = false;
                        }};;
                        skippedDetail = new SkippedDetail() {{
                            incompatibleAppVersion = false;
                            incompatibleArchitecture = false;
                            incompatibleDevice = false;
                        }};;
                        successDetail = new SuccessDetail() {{
                            otherNativeCrash = false;
                        }};;
                        summary = OutcomeSummaryEnum.SUCCESS;
                    }};;
                    specification = new Specification() {{
                        androidTest = new AndroidTest() {{
                            androidAppInfo = new AndroidAppInfo() {{
                                name = "Alfonso Green";
                                packageName = "natus";
                                versionCode = "nobis";
                                versionName = "eum";
                            }};;
                            androidInstrumentationTest = new AndroidInstrumentationTest() {{
                                testPackageId = "vero";
                                testRunnerClass = "aspernatur";
                                testTargets = new String[]{{
                                    add("magnam"),
                                }};
                                useOrchestrator = false;
                            }};;
                            androidRoboTest = new AndroidRoboTest() {{
                                appInitialActivity = "et";
                                bootstrapPackageId = "excepturi";
                                bootstrapRunnerClass = "ullam";
                                maxDepth = 590873;
                                maxSteps = 551816;
                            }};;
                            androidTestLoop = new java.util.HashMap<String, Object>() {{
                                put("accusantium", "mollitia");
                                put("reiciendis", "mollitia");
                                put("ad", "eum");
                            }};
                            testTimeout = new Duration() {{
                                nanos = 221262;
                                seconds = "necessitatibus";
                            }};;
                        }};;
                        iosTest = new IosTest() {{
                            iosAppInfo = new IosAppInfo() {{
                                name = "Vivian Boyle";
                            }};;
                            iosRoboTest = new java.util.HashMap<String, Object>() {{
                                put("eius", "maxime");
                                put("deleniti", "facilis");
                                put("in", "architecto");
                                put("architecto", "repudiandae");
                            }};
                            iosTestLoop = new IosTestLoop() {{
                                bundleId = "ullam";
                            }};;
                            iosXcTest = new IosXcTest() {{
                                bundleId = "expedita";
                                xcodeVersion = "nihil";
                            }};;
                            testTimeout = new Duration() {{
                                nanos = 998848;
                                seconds = "quibusdam";
                            }};;
                        }};;
                    }};;
                    state = ExecutionStateEnum.UNKNOWN_STATE;
                    testExecutionMatrixId = "saepe";
                }};;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "consequuntur";
                fields = "praesentium";
                key = "natus";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "sunt";
                requestId = "quo";
                uploadType = "illum";
                uploadProtocol = "pariatur";
            }};            

            ToolresultsProjectsHistoriesExecutionsPatchResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsPatch(req, new ToolresultsProjectsHistoriesExecutionsPatchSecurity("maxime", "ea") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.execution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsStepsAccessibilityClusters

Lists accessibility clusters for a given Step May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if the locale format is incorrect - NOT_FOUND - if the containing Step does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersRequest req = new ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ea";
                alt = AltEnum.JSON;
                callback = "ab";
                fields = "maiores";
                key = "quidem";
                locale = "ipsam";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "autem";
                uploadType = "nam";
                uploadProtocol = "eaque";
            }};            

            ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsStepsAccessibilityClusters(req, new ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersSecurity("pariatur", "nemo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listStepAccessibilityClustersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsStepsCreate

Creates a Step. The returned Step will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsCreateRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsCreateResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Any;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.FailureDetail;
import org.openapis.openapi.models.shared.FileReference;
import org.openapis.openapi.models.shared.InconclusiveDetail;
import org.openapis.openapi.models.shared.IndividualOutcome;
import org.openapis.openapi.models.shared.IndividualOutcomeOutcomeSummaryEnum;
import org.openapis.openapi.models.shared.MultiStep;
import org.openapis.openapi.models.shared.Outcome;
import org.openapis.openapi.models.shared.OutcomeSummaryEnum;
import org.openapis.openapi.models.shared.PrimaryStep;
import org.openapis.openapi.models.shared.PrimaryStepRollUpEnum;
import org.openapis.openapi.models.shared.SkippedDetail;
import org.openapis.openapi.models.shared.StackTrace;
import org.openapis.openapi.models.shared.Step;
import org.openapis.openapi.models.shared.StepDimensionValueEntry;
import org.openapis.openapi.models.shared.StepLabelsEntry;
import org.openapis.openapi.models.shared.StepStateEnum;
import org.openapis.openapi.models.shared.SuccessDetail;
import org.openapis.openapi.models.shared.TestCaseReference;
import org.openapis.openapi.models.shared.TestExecutionStep;
import org.openapis.openapi.models.shared.TestIssue;
import org.openapis.openapi.models.shared.TestIssueCategoryEnum;
import org.openapis.openapi.models.shared.TestIssueSeverityEnum;
import org.openapis.openapi.models.shared.TestIssueTypeEnum;
import org.openapis.openapi.models.shared.TestSuiteOverview;
import org.openapis.openapi.models.shared.TestTiming;
import org.openapis.openapi.models.shared.Timestamp;
import org.openapis.openapi.models.shared.ToolExecution;
import org.openapis.openapi.models.shared.ToolExecutionStep;
import org.openapis.openapi.models.shared.ToolExitCode;
import org.openapis.openapi.models.shared.ToolOutputReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsStepsCreateRequest req = new ToolresultsProjectsHistoriesExecutionsStepsCreateRequest("voluptatibus", "perferendis", "fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                step = new Step() {{
                    completionTime = new Timestamp() {{
                        nanos = 11714;
                        seconds = "cumque";
                    }};;
                    creationTime = new Timestamp() {{
                        nanos = 359978;
                        seconds = "hic";
                    }};;
                    description = "libero";
                    deviceUsageDuration = new Duration() {{
                        nanos = 749999;
                        seconds = "dolores";
                    }};;
                    dimensionValue = new org.openapis.openapi.models.shared.StepDimensionValueEntry[]{{
                        add(new StepDimensionValueEntry() {{
                            key = "totam";
                            value = "dignissimos";
                        }}),
                        add(new StepDimensionValueEntry() {{
                            key = "eaque";
                            value = "quis";
                        }}),
                    }};
                    hasImages = false;
                    labels = new org.openapis.openapi.models.shared.StepLabelsEntry[]{{
                        add(new StepLabelsEntry() {{
                            key = "eos";
                            value = "perferendis";
                        }}),
                    }};
                    multiStep = new MultiStep() {{
                        multistepNumber = 170986;
                        primaryStep = new PrimaryStep() {{
                            individualOutcome = new org.openapis.openapi.models.shared.IndividualOutcome[]{{
                                add(new IndividualOutcome() {{
                                    multistepNumber = 463451;
                                    outcomeSummary = IndividualOutcomeOutcomeSummaryEnum.SUCCESS;
                                    runDuration = new Duration() {{
                                        nanos = 874573;
                                        seconds = "nostrum";
                                    }};
                                    stepId = "hic";
                                }}),
                                add(new IndividualOutcome() {{
                                    multistepNumber = 928082;
                                    outcomeSummary = IndividualOutcomeOutcomeSummaryEnum.INCONCLUSIVE;
                                    runDuration = new Duration() {{
                                        nanos = 704415;
                                        seconds = "perspiciatis";
                                    }};
                                    stepId = "voluptatem";
                                }}),
                                add(new IndividualOutcome() {{
                                    multistepNumber = 783645;
                                    outcomeSummary = IndividualOutcomeOutcomeSummaryEnum.UNSET;
                                    runDuration = new Duration() {{
                                        nanos = 500026;
                                        seconds = "error";
                                    }};
                                    stepId = "eaque";
                                }}),
                                add(new IndividualOutcome() {{
                                    multistepNumber = 577229;
                                    outcomeSummary = IndividualOutcomeOutcomeSummaryEnum.SKIPPED;
                                    runDuration = new Duration() {{
                                        nanos = 237893;
                                        seconds = "asperiores";
                                    }};
                                    stepId = "earum";
                                }}),
                            }};
                            rollUp = PrimaryStepRollUpEnum.SUCCESS;
                        }};;
                        primaryStepId = "iste";
                    }};;
                    name = "Casey Stracke";
                    outcome = new Outcome() {{
                        failureDetail = new FailureDetail() {{
                            crashed = false;
                            deviceOutOfMemory = false;
                            failedRoboscript = false;
                            notInstalled = false;
                            otherNativeCrash = false;
                            timedOut = false;
                            unableToCrawl = false;
                        }};;
                        inconclusiveDetail = new InconclusiveDetail() {{
                            abortedByUser = false;
                            hasErrorLogs = false;
                            infrastructureFailure = false;
                        }};;
                        skippedDetail = new SkippedDetail() {{
                            incompatibleAppVersion = false;
                            incompatibleArchitecture = false;
                            incompatibleDevice = false;
                        }};;
                        successDetail = new SuccessDetail() {{
                            otherNativeCrash = false;
                        }};;
                        summary = OutcomeSummaryEnum.SKIPPED;
                    }};;
                    runDuration = new Duration() {{
                        nanos = 964490;
                        seconds = "quaerat";
                    }};;
                    state = StepStateEnum.IN_PROGRESS;
                    stepId = "aliquid";
                    testExecutionStep = new TestExecutionStep() {{
                        testIssues = new org.openapis.openapi.models.shared.TestIssue[]{{
                            add(new TestIssue() {{
                                category = TestIssueCategoryEnum.UNSPECIFIED_CATEGORY;
                                errorMessage = "dolor";
                                severity = TestIssueSeverityEnum.UNSPECIFIED_SEVERITY;
                                stackTrace = new StackTrace() {{
                                    exception = "ipsum";
                                }};
                                type = TestIssueTypeEnum.LOGCAT_COLLECTION_ERROR;
                                warning = new Any() {{
                                    typeUrl = "excepturi";
                                    value = "cum";
                                }};
                            }}),
                        }};
                        testSuiteOverviews = new org.openapis.openapi.models.shared.TestSuiteOverview[]{{
                            add(new TestSuiteOverview() {{
                                elapsedTime = new Duration() {{
                                    nanos = 490459;
                                    seconds = "reiciendis";
                                }};
                                errorCount = 227414;
                                failureCount = 680545;
                                flakyCount = 254356;
                                name = "Melissa Bednar";
                                skippedCount = 311796;
                                totalCount = 881005;
                                xmlSource = new FileReference() {{
                                    fileUri = "quidem";
                                }};
                            }}),
                            add(new TestSuiteOverview() {{
                                elapsedTime = new Duration() {{
                                    nanos = 976405;
                                    seconds = "voluptas";
                                }};
                                errorCount = 617658;
                                failureCount = 179603;
                                flakyCount = 542499;
                                name = "Ginger Bergstrom";
                                skippedCount = 478596;
                                totalCount = 453697;
                                xmlSource = new FileReference() {{
                                    fileUri = "dolorum";
                                }};
                            }}),
                        }};
                        testTiming = new TestTiming() {{
                            testProcessDuration = new Duration() {{
                                nanos = 536579;
                                seconds = "omnis";
                            }};;
                        }};;
                        toolExecution = new ToolExecution() {{
                            commandLineArguments = new String[]{{
                                add("distinctio"),
                                add("asperiores"),
                                add("nihil"),
                                add("ipsum"),
                            }};
                            exitCode = new ToolExitCode() {{
                                number = 456015;
                            }};;
                            toolLogs = new org.openapis.openapi.models.shared.FileReference[]{{
                                add(new FileReference() {{
                                    fileUri = "saepe";
                                }}),
                                add(new FileReference() {{
                                    fileUri = "eius";
                                }}),
                                add(new FileReference() {{
                                    fileUri = "aspernatur";
                                }}),
                            }};
                            toolOutputs = new org.openapis.openapi.models.shared.ToolOutputReference[]{{
                                add(new ToolOutputReference() {{
                                    creationTime = new Timestamp() {{
                                        nanos = 229219;
                                        seconds = "optio";
                                    }};
                                    output = new FileReference() {{
                                        fileUri = "accusamus";
                                    }};
                                    testCase = new TestCaseReference() {{
                                        className = "ad";
                                        name = "Sam Oberbrunner";
                                        testSuiteName = "repellendus";
                                    }};
                                }}),
                            }};
                        }};;
                    }};;
                    toolExecutionStep = new ToolExecutionStep() {{
                        toolExecution = new ToolExecution() {{
                            commandLineArguments = new String[]{{
                                add("similique"),
                                add("alias"),
                                add("at"),
                            }};
                            exitCode = new ToolExitCode() {{
                                number = 311860;
                            }};;
                            toolLogs = new org.openapis.openapi.models.shared.FileReference[]{{
                                add(new FileReference() {{
                                    fileUri = "vel";
                                }}),
                                add(new FileReference() {{
                                    fileUri = "quod";
                                }}),
                            }};
                            toolOutputs = new org.openapis.openapi.models.shared.ToolOutputReference[]{{
                                add(new ToolOutputReference() {{
                                    creationTime = new Timestamp() {{
                                        nanos = 185636;
                                        seconds = "dolorum";
                                    }};
                                    output = new FileReference() {{
                                        fileUri = "a";
                                    }};
                                    testCase = new TestCaseReference() {{
                                        className = "esse";
                                        name = "Tyrone Emard";
                                        testSuiteName = "amet";
                                    }};
                                }}),
                                add(new ToolOutputReference() {{
                                    creationTime = new Timestamp() {{
                                        nanos = 730856;
                                        seconds = "accusamus";
                                    }};
                                    output = new FileReference() {{
                                        fileUri = "numquam";
                                    }};
                                    testCase = new TestCaseReference() {{
                                        className = "enim";
                                        name = "Jeannie Leannon MD";
                                        testSuiteName = "neque";
                                    }};
                                }}),
                                add(new ToolOutputReference() {{
                                    creationTime = new Timestamp() {{
                                        nanos = 153694;
                                        seconds = "vel";
                                    }};
                                    output = new FileReference() {{
                                        fileUri = "libero";
                                    }};
                                    testCase = new TestCaseReference() {{
                                        className = "voluptas";
                                        name = "Darryl Emard";
                                        testSuiteName = "cupiditate";
                                    }};
                                }}),
                                add(new ToolOutputReference() {{
                                    creationTime = new Timestamp() {{
                                        nanos = 807581;
                                        seconds = "pariatur";
                                    }};
                                    output = new FileReference() {{
                                        fileUri = "soluta";
                                    }};
                                    testCase = new TestCaseReference() {{
                                        className = "dicta";
                                        name = "Felix Gorczany";
                                        testSuiteName = "distinctio";
                                    }};
                                }}),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "facilis";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "molestias";
                key = "temporibus";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "neque";
                requestId = "fugit";
                uploadType = "magni";
                uploadProtocol = "odio";
            }};            

            ToolresultsProjectsHistoriesExecutionsStepsCreateResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsStepsCreate(req, new ToolresultsProjectsHistoriesExecutionsStepsCreateSecurity("sunt", "ullam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.step != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsStepsGet

Gets a Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsGetRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsGetResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsStepsGetRequest req = new ToolresultsProjectsHistoriesExecutionsStepsGetRequest("nam", "hic", "voluptatem", "cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nobis";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "ipsum";
                key = "veritatis";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "tempore";
                uploadProtocol = "cupiditate";
            }};            

            ToolresultsProjectsHistoriesExecutionsStepsGetResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsStepsGet(req, new ToolresultsProjectsHistoriesExecutionsStepsGetSecurity("aperiam", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.step != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummary

Retrieves a PerfMetricsSummary. May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummarySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryRequest req = new ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryRequest("dolorem", "dolore", "labore", "adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "aut";
                fields = "quas";
                key = "itaque";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "repellendus";
                uploadProtocol = "porro";
            }};            

            ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummary(req, new ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummarySecurity("doloribus", "ut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.perfMetricsSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsStepsList

Lists Steps for a given Execution. The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsListRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsListResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsStepsListRequest req = new ToolresultsProjectsHistoriesExecutionsStepsListRequest("facilis", "cupiditate", "qui") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laudantium";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "voluptatibus";
                key = "quisquam";
                oauthToken = "vero";
                pageSize = 606476L;
                pageToken = "quis";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "delectus";
                uploadProtocol = "voluptate";
            }};            

            ToolresultsProjectsHistoriesExecutionsStepsListResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsStepsList(req, new ToolresultsProjectsHistoriesExecutionsStepsListSecurity("consectetur", "vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listStepsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsStepsPatch

Updates an existing Step with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPatchRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPatchResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Any;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.FailureDetail;
import org.openapis.openapi.models.shared.FileReference;
import org.openapis.openapi.models.shared.InconclusiveDetail;
import org.openapis.openapi.models.shared.IndividualOutcome;
import org.openapis.openapi.models.shared.IndividualOutcomeOutcomeSummaryEnum;
import org.openapis.openapi.models.shared.MultiStep;
import org.openapis.openapi.models.shared.Outcome;
import org.openapis.openapi.models.shared.OutcomeSummaryEnum;
import org.openapis.openapi.models.shared.PrimaryStep;
import org.openapis.openapi.models.shared.PrimaryStepRollUpEnum;
import org.openapis.openapi.models.shared.SkippedDetail;
import org.openapis.openapi.models.shared.StackTrace;
import org.openapis.openapi.models.shared.Step;
import org.openapis.openapi.models.shared.StepDimensionValueEntry;
import org.openapis.openapi.models.shared.StepLabelsEntry;
import org.openapis.openapi.models.shared.StepStateEnum;
import org.openapis.openapi.models.shared.SuccessDetail;
import org.openapis.openapi.models.shared.TestCaseReference;
import org.openapis.openapi.models.shared.TestExecutionStep;
import org.openapis.openapi.models.shared.TestIssue;
import org.openapis.openapi.models.shared.TestIssueCategoryEnum;
import org.openapis.openapi.models.shared.TestIssueSeverityEnum;
import org.openapis.openapi.models.shared.TestIssueTypeEnum;
import org.openapis.openapi.models.shared.TestSuiteOverview;
import org.openapis.openapi.models.shared.TestTiming;
import org.openapis.openapi.models.shared.Timestamp;
import org.openapis.openapi.models.shared.ToolExecution;
import org.openapis.openapi.models.shared.ToolExecutionStep;
import org.openapis.openapi.models.shared.ToolExitCode;
import org.openapis.openapi.models.shared.ToolOutputReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsStepsPatchRequest req = new ToolresultsProjectsHistoriesExecutionsStepsPatchRequest("tenetur", "dignissimos", "hic", "distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                step = new Step() {{
                    completionTime = new Timestamp() {{
                        nanos = 486160;
                        seconds = "similique";
                    }};;
                    creationTime = new Timestamp() {{
                        nanos = 708548;
                        seconds = "vero";
                    }};;
                    description = "ducimus";
                    deviceUsageDuration = new Duration() {{
                        nanos = 293020;
                        seconds = "quibusdam";
                    }};;
                    dimensionValue = new org.openapis.openapi.models.shared.StepDimensionValueEntry[]{{
                        add(new StepDimensionValueEntry() {{
                            key = "sequi";
                            value = "natus";
                        }}),
                        add(new StepDimensionValueEntry() {{
                            key = "impedit";
                            value = "aut";
                        }}),
                        add(new StepDimensionValueEntry() {{
                            key = "voluptatibus";
                            value = "exercitationem";
                        }}),
                        add(new StepDimensionValueEntry() {{
                            key = "nulla";
                            value = "fugit";
                        }}),
                    }};
                    hasImages = false;
                    labels = new org.openapis.openapi.models.shared.StepLabelsEntry[]{{
                        add(new StepLabelsEntry() {{
                            key = "maiores";
                            value = "doloribus";
                        }}),
                        add(new StepLabelsEntry() {{
                            key = "iusto";
                            value = "eligendi";
                        }}),
                        add(new StepLabelsEntry() {{
                            key = "ducimus";
                            value = "alias";
                        }}),
                        add(new StepLabelsEntry() {{
                            key = "officia";
                            value = "tempora";
                        }}),
                    }};
                    multiStep = new MultiStep() {{
                        multistepNumber = 368584;
                        primaryStep = new PrimaryStep() {{
                            individualOutcome = new org.openapis.openapi.models.shared.IndividualOutcome[]{{
                                add(new IndividualOutcome() {{
                                    multistepNumber = 136900;
                                    outcomeSummary = IndividualOutcomeOutcomeSummaryEnum.FAILURE;
                                    runDuration = new Duration() {{
                                        nanos = 822118;
                                        seconds = "magnam";
                                    }};
                                    stepId = "ratione";
                                }}),
                                add(new IndividualOutcome() {{
                                    multistepNumber = 401132;
                                    outcomeSummary = IndividualOutcomeOutcomeSummaryEnum.INCONCLUSIVE;
                                    runDuration = new Duration() {{
                                        nanos = 120657;
                                        seconds = "dolor";
                                    }};
                                    stepId = "maiores";
                                }}),
                            }};
                            rollUp = PrimaryStepRollUpEnum.UNSET;
                        }};;
                        primaryStepId = "ex";
                    }};;
                    name = "Marshall Wiza";
                    outcome = new Outcome() {{
                        failureDetail = new FailureDetail() {{
                            crashed = false;
                            deviceOutOfMemory = false;
                            failedRoboscript = false;
                            notInstalled = false;
                            otherNativeCrash = false;
                            timedOut = false;
                            unableToCrawl = false;
                        }};;
                        inconclusiveDetail = new InconclusiveDetail() {{
                            abortedByUser = false;
                            hasErrorLogs = false;
                            infrastructureFailure = false;
                        }};;
                        skippedDetail = new SkippedDetail() {{
                            incompatibleAppVersion = false;
                            incompatibleArchitecture = false;
                            incompatibleDevice = false;
                        }};;
                        successDetail = new SuccessDetail() {{
                            otherNativeCrash = false;
                        }};;
                        summary = OutcomeSummaryEnum.SKIPPED;
                    }};;
                    runDuration = new Duration() {{
                        nanos = 906556;
                        seconds = "ea";
                    }};;
                    state = StepStateEnum.COMPLETE;
                    stepId = "corporis";
                    testExecutionStep = new TestExecutionStep() {{
                        testIssues = new org.openapis.openapi.models.shared.TestIssue[]{{
                            add(new TestIssue() {{
                                category = TestIssueCategoryEnum.COMMON;
                                errorMessage = "inventore";
                                severity = TestIssueSeverityEnum.INFO;
                                stackTrace = new StackTrace() {{
                                    exception = "ea";
                                }};
                                type = TestIssueTypeEnum.CRASH_DIALOG_ERROR;
                                warning = new Any() {{
                                    typeUrl = "consectetur";
                                    value = "recusandae";
                                }};
                            }}),
                            add(new TestIssue() {{
                                category = TestIssueCategoryEnum.UNSPECIFIED_CATEGORY;
                                errorMessage = "minima";
                                severity = TestIssueSeverityEnum.UNSPECIFIED_SEVERITY;
                                stackTrace = new StackTrace() {{
                                    exception = "a";
                                }};
                                type = TestIssueTypeEnum.IN_APP_PURCHASES;
                                warning = new Any() {{
                                    typeUrl = "aut";
                                    value = "aut";
                                }};
                            }}),
                        }};
                        testSuiteOverviews = new org.openapis.openapi.models.shared.TestSuiteOverview[]{{
                            add(new TestSuiteOverview() {{
                                elapsedTime = new Duration() {{
                                    nanos = 770581;
                                    seconds = "aliquam";
                                }};
                                errorCount = 146946;
                                failureCount = 882860;
                                flakyCount = 79522;
                                name = "Janet Pagac";
                                skippedCount = 245367;
                                totalCount = 432148;
                                xmlSource = new FileReference() {{
                                    fileUri = "autem";
                                }};
                            }}),
                            add(new TestSuiteOverview() {{
                                elapsedTime = new Duration() {{
                                    nanos = 752135;
                                    seconds = "quas";
                                }};
                                errorCount = 829603;
                                failureCount = 860552;
                                flakyCount = 379034;
                                name = "Ryan Glover";
                                skippedCount = 591935;
                                totalCount = 55374;
                                xmlSource = new FileReference() {{
                                    fileUri = "molestiae";
                                }};
                            }}),
                            add(new TestSuiteOverview() {{
                                elapsedTime = new Duration() {{
                                    nanos = 301598;
                                    seconds = "odio";
                                }};
                                errorCount = 262118;
                                failureCount = 458515;
                                flakyCount = 456141;
                                name = "Blake Kihn";
                                skippedCount = 283519;
                                totalCount = 433439;
                                xmlSource = new FileReference() {{
                                    fileUri = "suscipit";
                                }};
                            }}),
                        }};
                        testTiming = new TestTiming() {{
                            testProcessDuration = new Duration() {{
                                nanos = 826871;
                                seconds = "eos";
                            }};;
                        }};;
                        toolExecution = new ToolExecution() {{
                            commandLineArguments = new String[]{{
                                add("quisquam"),
                                add("veritatis"),
                                add("ipsa"),
                            }};
                            exitCode = new ToolExitCode() {{
                                number = 660040;
                            }};;
                            toolLogs = new org.openapis.openapi.models.shared.FileReference[]{{
                                add(new FileReference() {{
                                    fileUri = "neque";
                                }}),
                                add(new FileReference() {{
                                    fileUri = "quo";
                                }}),
                                add(new FileReference() {{
                                    fileUri = "illum";
                                }}),
                            }};
                            toolOutputs = new org.openapis.openapi.models.shared.ToolOutputReference[]{{
                                add(new ToolOutputReference() {{
                                    creationTime = new Timestamp() {{
                                        nanos = 681359;
                                        seconds = "eius";
                                    }};
                                    output = new FileReference() {{
                                        fileUri = "eos";
                                    }};
                                    testCase = new TestCaseReference() {{
                                        className = "voluptas";
                                        name = "Shelly Altenwerth";
                                        testSuiteName = "ipsam";
                                    }};
                                }}),
                                add(new ToolOutputReference() {{
                                    creationTime = new Timestamp() {{
                                        nanos = 133465;
                                        seconds = "sequi";
                                    }};
                                    output = new FileReference() {{
                                        fileUri = "quo";
                                    }};
                                    testCase = new TestCaseReference() {{
                                        className = "esse";
                                        name = "Kevin Rau";
                                        testSuiteName = "inventore";
                                    }};
                                }}),
                                add(new ToolOutputReference() {{
                                    creationTime = new Timestamp() {{
                                        nanos = 469498;
                                        seconds = "totam";
                                    }};
                                    output = new FileReference() {{
                                        fileUri = "accusamus";
                                    }};
                                    testCase = new TestCaseReference() {{
                                        className = "aliquam";
                                        name = "Violet Johns";
                                        testSuiteName = "deserunt";
                                    }};
                                }}),
                                add(new ToolOutputReference() {{
                                    creationTime = new Timestamp() {{
                                        nanos = 475289;
                                        seconds = "accusantium";
                                    }};
                                    output = new FileReference() {{
                                        fileUri = "porro";
                                    }};
                                    testCase = new TestCaseReference() {{
                                        className = "eum";
                                        name = "Dwayne Cronin";
                                        testSuiteName = "fuga";
                                    }};
                                }}),
                            }};
                        }};;
                    }};;
                    toolExecutionStep = new ToolExecutionStep() {{
                        toolExecution = new ToolExecution() {{
                            commandLineArguments = new String[]{{
                                add("incidunt"),
                                add("atque"),
                                add("explicabo"),
                            }};
                            exitCode = new ToolExitCode() {{
                                number = 325685;
                            }};;
                            toolLogs = new org.openapis.openapi.models.shared.FileReference[]{{
                                add(new FileReference() {{
                                    fileUri = "fugit";
                                }}),
                                add(new FileReference() {{
                                    fileUri = "sapiente";
                                }}),
                            }};
                            toolOutputs = new org.openapis.openapi.models.shared.ToolOutputReference[]{{
                                add(new ToolOutputReference() {{
                                    creationTime = new Timestamp() {{
                                        nanos = 187131;
                                        seconds = "explicabo";
                                    }};
                                    output = new FileReference() {{
                                        fileUri = "saepe";
                                    }};
                                    testCase = new TestCaseReference() {{
                                        className = "occaecati";
                                        name = "Carl Koch";
                                        testSuiteName = "veritatis";
                                    }};
                                }}),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "esse";
                alt = AltEnum.PROTO;
                callback = "nam";
                fields = "vero";
                key = "aliquid";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "saepe";
                requestId = "vel";
                uploadType = "harum";
                uploadProtocol = "molestiae";
            }};            

            ToolresultsProjectsHistoriesExecutionsStepsPatchResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsStepsPatch(req, new ToolresultsProjectsHistoriesExecutionsStepsPatchSecurity("rerum", "occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.step != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreate

Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created. May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppStartTime;
import org.openapis.openapi.models.shared.CPUInfo;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.GraphicsStats;
import org.openapis.openapi.models.shared.GraphicsStatsBucket;
import org.openapis.openapi.models.shared.MemoryInfo;
import org.openapis.openapi.models.shared.PerfEnvironment;
import org.openapis.openapi.models.shared.PerfMetricsSummary;
import org.openapis.openapi.models.shared.PerfMetricsSummaryPerfMetricsEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest req = new ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest("minima", "distinctio", "eligendi", "sit") {{
                dollarXgafv = XgafvEnum.TWO;
                perfMetricsSummary = new PerfMetricsSummary() {{
                    appStartTime = new AppStartTime() {{
                        fullyDrawnTime = new Duration() {{
                            nanos = 731398;
                            seconds = "adipisci";
                        }};;
                        initialDisplayTime = new Duration() {{
                            nanos = 766964;
                            seconds = "consequuntur";
                        }};;
                    }};;
                    executionId = "consequatur";
                    graphicsStats = new GraphicsStats() {{
                        buckets = new org.openapis.openapi.models.shared.GraphicsStatsBucket[]{{
                            add(new GraphicsStatsBucket() {{
                                frameCount = "quaerat";
                                renderMillis = "sapiente";
                            }}),
                            add(new GraphicsStatsBucket() {{
                                frameCount = "consectetur";
                                renderMillis = "esse";
                            }}),
                            add(new GraphicsStatsBucket() {{
                                frameCount = "blanditiis";
                                renderMillis = "provident";
                            }}),
                            add(new GraphicsStatsBucket() {{
                                frameCount = "a";
                                renderMillis = "nulla";
                            }}),
                        }};
                        highInputLatencyCount = "quas";
                        jankyFrames = "esse";
                        missedVsyncCount = "quasi";
                        p50Millis = "a";
                        p90Millis = "error";
                        p95Millis = "sint";
                        p99Millis = "pariatur";
                        slowBitmapUploadCount = "possimus";
                        slowDrawCount = "quia";
                        slowUiThreadCount = "eveniet";
                        totalFrames = "asperiores";
                    }};;
                    historyId = "facere";
                    perfEnvironment = new PerfEnvironment() {{
                        cpuInfo = new CPUInfo() {{
                            cpuProcessor = "veritatis";
                            cpuSpeedInGhz = 1594.14;
                            numberOfCores = 94458;
                        }};;
                        memoryInfo = new MemoryInfo() {{
                            memoryCapInKibibyte = "similique";
                            memoryTotalInKibibyte = "culpa";
                        }};;
                    }};;
                    perfMetrics = new org.openapis.openapi.models.shared.PerfMetricsSummaryPerfMetricsEnum[]{{
                        add(PerfMetricsSummaryPerfMetricsEnum.GRAPHICS),
                        add(PerfMetricsSummaryPerfMetricsEnum.PERF_METRIC_TYPE_UNSPECIFIED),
                    }};
                    projectId = "earum";
                    stepId = "vel";
                }};;
                accessToken = "in";
                alt = AltEnum.JSON;
                callback = "libero";
                fields = "illum";
                key = "soluta";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "aliquam";
                uploadType = "sapiente";
                uploadProtocol = "dicta";
            }};            

            ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreate(req, new ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateSecurity("ullam", "reprehenderit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.perfMetricsSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreate

Creates a PerfSampleSeries. May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BasicPerfSampleSeries;
import org.openapis.openapi.models.shared.BasicPerfSampleSeriesPerfMetricTypeEnum;
import org.openapis.openapi.models.shared.BasicPerfSampleSeriesPerfUnitEnum;
import org.openapis.openapi.models.shared.BasicPerfSampleSeriesSampleSeriesLabelEnum;
import org.openapis.openapi.models.shared.PerfSampleSeries;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateRequest req = new ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateRequest("ullam", "nisi", "aut", "voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                perfSampleSeries = new PerfSampleSeries() {{
                    basicPerfSampleSeries = new BasicPerfSampleSeries() {{
                        perfMetricType = BasicPerfSampleSeriesPerfMetricTypeEnum.GRAPHICS;
                        perfUnit = BasicPerfSampleSeriesPerfUnitEnum.PERCENT;
                        sampleSeriesLabel = BasicPerfSampleSeriesSampleSeriesLabelEnum.CPU_KERNEL;
                    }};;
                    executionId = "itaque";
                    historyId = "dolorum";
                    projectId = "architecto";
                    sampleSeriesId = "omnis";
                    stepId = "tenetur";
                }};;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "et";
                fields = "voluptate";
                key = "ipsa";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "consectetur";
                uploadProtocol = "adipisci";
            }};            

            ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreate(req, new ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateSecurity("iste", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.perfSampleSeries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGet

Gets a PerfSampleSeries. May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetRequest req = new ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetRequest("accusantium", "rem", "aut", "laudantium", "eum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "non";
                fields = "voluptatem";
                key = "dolor";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "impedit";
                uploadProtocol = "explicabo";
            }};            

            ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGet(req, new ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetSecurity("voluptas", "aut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.perfSampleSeries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesList

Lists PerfSampleSeries for a given Step. The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids. May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest req = new ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest("dignissimos", "dicta", "maiores", "natus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "asperiores";
                fields = "aperiam";
                filter = new org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum[]{{
                    add(ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum.MEMORY),
                    add(ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum.PERF_METRIC_TYPE_UNSPECIFIED),
                }};
                key = "repellendus";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "dignissimos";
                uploadProtocol = "officia";
            }};            

            ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesList(req, new ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity("asperiores", "nemo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPerfSampleSeriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreate

Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database). May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchCreatePerfSamplesRequest;
import org.openapis.openapi.models.shared.PerfSample;
import org.openapis.openapi.models.shared.Timestamp;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateRequest req = new ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateRequest("quae", "quaerat", "porro", "quod", "labore") {{
                dollarXgafv = XgafvEnum.ONE;
                batchCreatePerfSamplesRequest = new BatchCreatePerfSamplesRequest() {{
                    perfSamples = new org.openapis.openapi.models.shared.PerfSample[]{{
                        add(new PerfSample() {{
                            sampleTime = new Timestamp() {{
                                nanos = 683573;
                                seconds = "id";
                            }};
                            value = 3807.29;
                        }}),
                    }};
                }};;
                accessToken = "velit";
                alt = AltEnum.MEDIA;
                callback = "est";
                fields = "recusandae";
                key = "totam";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "ducimus";
                uploadProtocol = "quos";
            }};            

            ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreate(req, new ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateSecurity("vel", "labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchCreatePerfSamplesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesList

Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListRequest req = new ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListRequest("possimus", "facilis", "cum", "commodi", "in") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "nemo";
                fields = "recusandae";
                key = "aliquid";
                oauthToken = "aperiam";
                pageSize = 738683L;
                pageToken = "consectetur";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "exercitationem";
                uploadProtocol = "earum";
            }};            

            ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesList(req, new ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListSecurity("facere", "numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPerfSamplesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFiles

Publish xml files to an existing Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g. try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FileReference;
import org.openapis.openapi.models.shared.PublishXunitXmlFilesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesRequest req = new ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesRequest("doloribus", "suscipit", "reiciendis", "quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                publishXunitXmlFilesRequest = new PublishXunitXmlFilesRequest() {{
                    xunitXmlFiles = new org.openapis.openapi.models.shared.FileReference[]{{
                        add(new FileReference() {{
                            fileUri = "dolore";
                        }}),
                        add(new FileReference() {{
                            fileUri = "sunt";
                        }}),
                        add(new FileReference() {{
                            fileUri = "asperiores";
                        }}),
                        add(new FileReference() {{
                            fileUri = "adipisci";
                        }}),
                    }};
                }};;
                accessToken = "non";
                alt = AltEnum.JSON;
                callback = "beatae";
                fields = "dignissimos";
                key = "a";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "corporis";
                uploadProtocol = "harum";
            }};            

            ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFiles(req, new ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesSecurity("laboriosam", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.step != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsStepsTestCasesGet

Gets details of a Test Case for a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Test Case does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetRequest req = new ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetRequest("voluptates", "libero", "vitae", "accusamus", "similique") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aspernatur";
                alt = AltEnum.MEDIA;
                callback = "voluptas";
                fields = "voluptas";
                key = "minima";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "adipisci";
                uploadProtocol = "minus";
            }};            

            ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsStepsTestCasesGet(req, new ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetSecurity("dolores", "blanditiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testCase != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsStepsTestCasesList

Lists Test Cases attached to a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Step does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesListRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesListResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsStepsTestCasesListRequest req = new ToolresultsProjectsHistoriesExecutionsStepsTestCasesListRequest("in", "dolore", "aliquam", "officiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ullam";
                alt = AltEnum.JSON;
                callback = "cum";
                fields = "blanditiis";
                key = "quas";
                oauthToken = "hic";
                pageSize = 201517L;
                pageToken = "culpa";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "pariatur";
                uploadProtocol = "totam";
            }};            

            ToolresultsProjectsHistoriesExecutionsStepsTestCasesListResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsStepsTestCasesList(req, new ToolresultsProjectsHistoriesExecutionsStepsTestCasesListSecurity("hic", "exercitationem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTestCasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesExecutionsStepsThumbnailsList

Lists thumbnails of images attached to a step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListRequest req = new ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListRequest("nobis", "sit", "rerum", "sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "facilis";
                fields = "voluptate";
                key = "expedita";
                oauthToken = "ab";
                pageSize = 611749L;
                pageToken = "dolore";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "sed";
                uploadProtocol = "in";
            }};            

            ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListResponse res = sdk.projects.toolresultsProjectsHistoriesExecutionsStepsThumbnailsList(req, new ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListSecurity("commodi", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listStepThumbnailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesGet

Gets a History. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesGetRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesGetResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesGetRequest req = new ToolresultsProjectsHistoriesGetRequest("explicabo", "voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "sapiente";
                fields = "debitis";
                key = "illo";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "corrupti";
                uploadProtocol = "maiores";
            }};            

            ToolresultsProjectsHistoriesGetResponse res = sdk.projects.toolresultsProjectsHistoriesGet(req, new ToolresultsProjectsHistoriesGetSecurity("incidunt", "sed") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.history != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsHistoriesList

Lists Histories for a given Project. The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesListRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesListResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsHistoriesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsHistoriesListRequest req = new ToolresultsProjectsHistoriesListRequest("provident") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "necessitatibus";
                alt = AltEnum.JSON;
                callback = "ea";
                fields = "occaecati";
                filterByName = "quos";
                key = "voluptatibus";
                oauthToken = "tempora";
                pageSize = 273009L;
                pageToken = "voluptate";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "ex";
                uploadProtocol = "sit";
            }};            

            ToolresultsProjectsHistoriesListResponse res = sdk.projects.toolresultsProjectsHistoriesList(req, new ToolresultsProjectsHistoriesListSecurity("non", "officiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listHistoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolresultsProjectsInitializeSettings

Creates resources for settings which have not yet been set. Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days. The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details. If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created. May return any canonical error codes, including the following: - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolresultsProjectsInitializeSettingsRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsInitializeSettingsResponse;
import org.openapis.openapi.models.operations.ToolresultsProjectsInitializeSettingsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsInitializeSettingsRequest req = new ToolresultsProjectsInitializeSettingsRequest("praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quaerat";
                alt = AltEnum.JSON;
                callback = "ipsam";
                fields = "debitis";
                key = "rem";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "error";
                uploadProtocol = "veniam";
            }};            

            ToolresultsProjectsInitializeSettingsResponse res = sdk.projects.toolresultsProjectsInitializeSettings(req, new ToolresultsProjectsInitializeSettingsSecurity("minima", "recusandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.projectSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
