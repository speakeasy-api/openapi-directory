# Projects

### Available Operations

* [ToolresultsProjectsGetSettings](#toolresultsprojectsgetsettings) - Gets the Tool Results settings for a project. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from project
* [ToolresultsProjectsHistoriesCreate](#toolresultsprojectshistoriescreate) - Creates a History. The returned History will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist
* [ToolresultsProjectsHistoriesExecutionsClustersGet](#toolresultsprojectshistoriesexecutionsclustersget) - Retrieves a single screenshot cluster by its ID
* [ToolresultsProjectsHistoriesExecutionsClustersList](#toolresultsprojectshistoriesexecutionsclusterslist) - Lists Screenshot Clusters Returns the list of screenshot clusters corresponding to an execution. Screenshot clusters are created after the execution is finished. Clusters are created from a set of screenshots. Between any two screenshots, a matching score is calculated based off their metadata that determines how similar they are. Screenshots are placed in the cluster that has screens which have the highest matching scores.
* [ToolresultsProjectsHistoriesExecutionsCreate](#toolresultsprojectshistoriesexecutionscreate) - Creates an Execution. The returned Execution will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
* [ToolresultsProjectsHistoriesExecutionsEnvironmentsGet](#toolresultsprojectshistoriesexecutionsenvironmentsget) - Gets an Environment. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Environment does not exist
* [ToolresultsProjectsHistoriesExecutionsEnvironmentsList](#toolresultsprojectshistoriesexecutionsenvironmentslist) - Lists Environments for a given Execution. The Environments are sorted by display name. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Execution does not exist
* [ToolresultsProjectsHistoriesExecutionsGet](#toolresultsprojectshistoriesexecutionsget) - Gets an Execution. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist
* [ToolresultsProjectsHistoriesExecutionsList](#toolresultsprojectshistoriesexecutionslist) - Lists Executions for a given History. The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
* [ToolresultsProjectsHistoriesExecutionsPatch](#toolresultsprojectshistoriesexecutionspatch) - Updates an existing Execution with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist
* [ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClusters](#toolresultsprojectshistoriesexecutionsstepsaccessibilityclusters) - Lists accessibility clusters for a given Step May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if the locale format is incorrect - NOT_FOUND - if the containing Step does not exist
* [ToolresultsProjectsHistoriesExecutionsStepsCreate](#toolresultsprojectshistoriesexecutionsstepscreate) - Creates a Step. The returned Step will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
* [ToolresultsProjectsHistoriesExecutionsStepsGet](#toolresultsprojectshistoriesexecutionsstepsget) - Gets a Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist
* [ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummary](#toolresultsprojectshistoriesexecutionsstepsgetperfmetricssummary) - Retrieves a PerfMetricsSummary. May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist
* [ToolresultsProjectsHistoriesExecutionsStepsList](#toolresultsprojectshistoriesexecutionsstepslist) - Lists Steps for a given Execution. The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist
* [ToolresultsProjectsHistoriesExecutionsStepsPatch](#toolresultsprojectshistoriesexecutionsstepspatch) - Updates an existing Step with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
* [ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreate](#toolresultsprojectshistoriesexecutionsstepsperfmetricssummarycreate) - Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created. May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist
* [ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreate](#toolresultsprojectshistoriesexecutionsstepsperfsampleseriescreate) - Creates a PerfSampleSeries. May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist
* [ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGet](#toolresultsprojectshistoriesexecutionsstepsperfsampleseriesget) - Gets a PerfSampleSeries. May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist
* [ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesList](#toolresultsprojectshistoriesexecutionsstepsperfsampleserieslist) - Lists PerfSampleSeries for a given Step. The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids. May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist
* [ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreate](#toolresultsprojectshistoriesexecutionsstepsperfsampleseriessamplesbatchcreate) - Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database). May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist
* [ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesList](#toolresultsprojectshistoriesexecutionsstepsperfsampleseriessampleslist) - Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist
* [ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXMLFiles](#toolresultsprojectshistoriesexecutionsstepspublishxunitxmlfiles) - Publish xml files to an existing Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g. try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist
* [ToolresultsProjectsHistoriesExecutionsStepsTestCasesGet](#toolresultsprojectshistoriesexecutionsstepstestcasesget) - Gets details of a Test Case for a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Test Case does not exist
* [ToolresultsProjectsHistoriesExecutionsStepsTestCasesList](#toolresultsprojectshistoriesexecutionsstepstestcaseslist) - Lists Test Cases attached to a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Step does not exist
* [ToolresultsProjectsHistoriesExecutionsStepsThumbnailsList](#toolresultsprojectshistoriesexecutionsstepsthumbnailslist) - Lists thumbnails of images attached to a step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist
* [ToolresultsProjectsHistoriesGet](#toolresultsprojectshistoriesget) - Gets a History. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
* [ToolresultsProjectsHistoriesList](#toolresultsprojectshistorieslist) - Lists Histories for a given Project. The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
* [ToolresultsProjectsInitializeSettings](#toolresultsprojectsinitializesettings) - Creates resources for settings which have not yet been set. Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days. The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details. If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created. May return any canonical error codes, including the following: - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage

## ToolresultsProjectsGetSettings

Gets the Tool Results settings for a project. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from project

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
    res, err := s.Projects.ToolresultsProjectsGetSettings(ctx, operations.ToolresultsProjectsGetSettingsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "suscipit",
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.ToolresultsProjectsGetSettingsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectSettings != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesCreate

Creates a History. The returned History will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesCreate(ctx, operations.ToolresultsProjectsHistoriesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        History: &shared.History{
            DisplayName: sdk.String("iusto"),
            HistoryID: sdk.String("excepturi"),
            Name: sdk.String("Mrs. Sophie Smith MD"),
            TestPlatform: shared.HistoryTestPlatformEnumUnknownPlatform.ToPointer(),
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("quo"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "at",
        QuotaUser: sdk.String("maiores"),
        RequestID: sdk.String("molestiae"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("quod"),
    }, operations.ToolresultsProjectsHistoriesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.History != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsClustersGet

Retrieves a single screenshot cluster by its ID

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsClustersGet(ctx, operations.ToolresultsProjectsHistoriesExecutionsClustersGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorum"),
        ClusterID: "dicta",
        ExecutionID: "nam",
        Fields: sdk.String("officia"),
        HistoryID: "occaecati",
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "hic",
        QuotaUser: sdk.String("optio"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("beatae"),
    }, operations.ToolresultsProjectsHistoriesExecutionsClustersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScreenshotCluster != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsClustersList

Lists Screenshot Clusters Returns the list of screenshot clusters corresponding to an execution. Screenshot clusters are created after the execution is finished. Clusters are created from a set of screenshots. Between any two screenshots, a matching score is calculated based off their metadata that determines how similar they are. Screenshots are placed in the cluster that has screens which have the highest matching scores.

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsClustersList(ctx, operations.ToolresultsProjectsHistoriesExecutionsClustersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        ExecutionID: "impedit",
        Fields: sdk.String("cum"),
        HistoryID: "esse",
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "aspernatur",
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("natus"),
    }, operations.ToolresultsProjectsHistoriesExecutionsClustersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListScreenshotClustersResponse != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsCreate

Creates an Execution. The returned Execution will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsCreate(ctx, operations.ToolresultsProjectsHistoriesExecutionsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Execution: &shared.Execution{
            CompletionTime: &shared.Timestamp{
                Nanos: sdk.Int(612096),
                Seconds: sdk.String("dolor"),
            },
            CreationTime: &shared.Timestamp{
                Nanos: sdk.Int(616934),
                Seconds: sdk.String("laboriosam"),
            },
            DimensionDefinitions: []map[string]interface{}{
                map[string]interface{}{
                    "fuga": "in",
                    "corporis": "iste",
                    "iure": "saepe",
                    "quidem": "architecto",
                },
                map[string]interface{}{
                    "reiciendis": "est",
                },
                map[string]interface{}{
                    "laborum": "dolores",
                    "dolorem": "corporis",
                    "explicabo": "nobis",
                },
                map[string]interface{}{
                    "omnis": "nemo",
                    "minima": "excepturi",
                },
            },
            ExecutionID: sdk.String("accusantium"),
            Outcome: &shared.Outcome{
                FailureDetail: &shared.FailureDetail{
                    Crashed: sdk.Bool(false),
                    DeviceOutOfMemory: sdk.Bool(false),
                    FailedRoboscript: sdk.Bool(false),
                    NotInstalled: sdk.Bool(false),
                    OtherNativeCrash: sdk.Bool(false),
                    TimedOut: sdk.Bool(false),
                    UnableToCrawl: sdk.Bool(false),
                },
                InconclusiveDetail: &shared.InconclusiveDetail{
                    AbortedByUser: sdk.Bool(false),
                    HasErrorLogs: sdk.Bool(false),
                    InfrastructureFailure: sdk.Bool(false),
                },
                SkippedDetail: &shared.SkippedDetail{
                    IncompatibleAppVersion: sdk.Bool(false),
                    IncompatibleArchitecture: sdk.Bool(false),
                    IncompatibleDevice: sdk.Bool(false),
                },
                SuccessDetail: &shared.SuccessDetail{
                    OtherNativeCrash: sdk.Bool(false),
                },
                Summary: shared.OutcomeSummaryEnumFailure.ToPointer(),
            },
            Specification: &shared.Specification{
                AndroidTest: &shared.AndroidTest{
                    AndroidAppInfo: &shared.AndroidAppInfo{
                        Name: sdk.String("Miss Aubrey Williamson"),
                        PackageName: sdk.String("culpa"),
                        VersionCode: sdk.String("consequuntur"),
                        VersionName: sdk.String("repellat"),
                    },
                    AndroidInstrumentationTest: &shared.AndroidInstrumentationTest{
                        TestPackageID: sdk.String("mollitia"),
                        TestRunnerClass: sdk.String("occaecati"),
                        TestTargets: []string{
                            "commodi",
                            "quam",
                        },
                        UseOrchestrator: sdk.Bool(false),
                    },
                    AndroidRoboTest: &shared.AndroidRoboTest{
                        AppInitialActivity: sdk.String("molestiae"),
                        BootstrapPackageID: sdk.String("velit"),
                        BootstrapRunnerClass: sdk.String("error"),
                        MaxDepth: sdk.Int(158969),
                        MaxSteps: sdk.Int(338007),
                    },
                    AndroidTestLoop: map[string]interface{}{
                        "laborum": "animi",
                    },
                    TestTimeout: &shared.Duration{
                        Nanos: sdk.Int(317202),
                        Seconds: sdk.String("odit"),
                    },
                },
                IosTest: &shared.IosTest{
                    IosAppInfo: &shared.IosAppInfo{
                        Name: sdk.String("Jimmy Wiegand"),
                    },
                    IosRoboTest: map[string]interface{}{
                        "aut": "quasi",
                        "error": "temporibus",
                        "laborum": "quasi",
                        "reiciendis": "voluptatibus",
                    },
                    IosTestLoop: &shared.IosTestLoop{
                        BundleID: sdk.String("vero"),
                    },
                    IosXcTest: &shared.IosXcTest{
                        BundleID: sdk.String("nihil"),
                        XcodeVersion: sdk.String("praesentium"),
                    },
                    TestTimeout: &shared.Duration{
                        Nanos: sdk.Int(976762),
                        Seconds: sdk.String("ipsa"),
                    },
                },
            },
            State: shared.ExecutionStateEnumInProgress.ToPointer(),
            TestExecutionMatrixID: sdk.String("voluptate"),
        },
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloremque"),
        Fields: sdk.String("reprehenderit"),
        HistoryID: "ut",
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "corporis",
        QuotaUser: sdk.String("dolore"),
        RequestID: sdk.String("iusto"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("harum"),
    }, operations.ToolresultsProjectsHistoriesExecutionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Execution != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsEnvironmentsGet

Gets an Environment. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Environment does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsEnvironmentsGet(ctx, operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repudiandae"),
        EnvironmentID: "quae",
        ExecutionID: "ipsum",
        Fields: sdk.String("quidem"),
        HistoryID: "molestias",
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "modi",
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("voluptates"),
    }, operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Environment != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsEnvironmentsList

Lists Environments for a given Execution. The Environments are sorted by display name. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Execution does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsEnvironmentsList(ctx, operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        ExecutionID: "itaque",
        Fields: sdk.String("incidunt"),
        HistoryID: "enim",
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("est"),
        PageSize: sdk.Int64(842342),
        PageToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "deserunt",
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("labore"),
    }, operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEnvironmentsResponse != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsGet

Gets an Execution. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsGet(ctx, operations.ToolresultsProjectsHistoriesExecutionsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cupiditate"),
        ExecutionID: "quos",
        Fields: sdk.String("perferendis"),
        HistoryID: "magni",
        Key: sdk.String("assumenda"),
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "alias",
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.ToolresultsProjectsHistoriesExecutionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Execution != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsList

Lists Executions for a given History. The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsList(ctx, operations.ToolresultsProjectsHistoriesExecutionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("delectus"),
        HistoryID: "eum",
        Key: sdk.String("non"),
        OauthToken: sdk.String("eligendi"),
        PageSize: sdk.Int64(576157),
        PageToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "provident",
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("officia"),
    }, operations.ToolresultsProjectsHistoriesExecutionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExecutionsResponse != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsPatch

Updates an existing Execution with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsPatch(ctx, operations.ToolresultsProjectsHistoriesExecutionsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Execution: &shared.Execution{
            CompletionTime: &shared.Timestamp{
                Nanos: sdk.Int(891555),
                Seconds: sdk.String("a"),
            },
            CreationTime: &shared.Timestamp{
                Nanos: sdk.Int(680056),
                Seconds: sdk.String("in"),
            },
            DimensionDefinitions: []map[string]interface{}{
                map[string]interface{}{
                    "maiores": "rerum",
                    "dicta": "magnam",
                    "cumque": "facere",
                    "ea": "aliquid",
                },
                map[string]interface{}{
                    "accusamus": "non",
                    "occaecati": "enim",
                    "accusamus": "delectus",
                },
            },
            ExecutionID: sdk.String("quidem"),
            Outcome: &shared.Outcome{
                FailureDetail: &shared.FailureDetail{
                    Crashed: sdk.Bool(false),
                    DeviceOutOfMemory: sdk.Bool(false),
                    FailedRoboscript: sdk.Bool(false),
                    NotInstalled: sdk.Bool(false),
                    OtherNativeCrash: sdk.Bool(false),
                    TimedOut: sdk.Bool(false),
                    UnableToCrawl: sdk.Bool(false),
                },
                InconclusiveDetail: &shared.InconclusiveDetail{
                    AbortedByUser: sdk.Bool(false),
                    HasErrorLogs: sdk.Bool(false),
                    InfrastructureFailure: sdk.Bool(false),
                },
                SkippedDetail: &shared.SkippedDetail{
                    IncompatibleAppVersion: sdk.Bool(false),
                    IncompatibleArchitecture: sdk.Bool(false),
                    IncompatibleDevice: sdk.Bool(false),
                },
                SuccessDetail: &shared.SuccessDetail{
                    OtherNativeCrash: sdk.Bool(false),
                },
                Summary: shared.OutcomeSummaryEnumInconclusive.ToPointer(),
            },
            Specification: &shared.Specification{
                AndroidTest: &shared.AndroidTest{
                    AndroidAppInfo: &shared.AndroidAppInfo{
                        Name: sdk.String("Lynn Kuvalis"),
                        PackageName: sdk.String("amet"),
                        VersionCode: sdk.String("deserunt"),
                        VersionName: sdk.String("nisi"),
                    },
                    AndroidInstrumentationTest: &shared.AndroidInstrumentationTest{
                        TestPackageID: sdk.String("vel"),
                        TestRunnerClass: sdk.String("natus"),
                        TestTargets: []string{
                            "molestiae",
                            "perferendis",
                            "nihil",
                        },
                        UseOrchestrator: sdk.Bool(false),
                    },
                    AndroidRoboTest: &shared.AndroidRoboTest{
                        AppInitialActivity: sdk.String("magnam"),
                        BootstrapPackageID: sdk.String("distinctio"),
                        BootstrapRunnerClass: sdk.String("id"),
                        MaxDepth: sdk.Int(287991),
                        MaxSteps: sdk.Int(290077),
                    },
                    AndroidTestLoop: map[string]interface{}{
                        "natus": "nobis",
                        "eum": "vero",
                    },
                    TestTimeout: &shared.Duration{
                        Nanos: sdk.Int(135474),
                        Seconds: sdk.String("architecto"),
                    },
                },
                IosTest: &shared.IosTest{
                    IosAppInfo: &shared.IosAppInfo{
                        Name: sdk.String("Frances Marks"),
                    },
                    IosRoboTest: map[string]interface{}{
                        "sint": "accusantium",
                        "mollitia": "reiciendis",
                        "mollitia": "ad",
                    },
                    IosTestLoop: &shared.IosTestLoop{
                        BundleID: sdk.String("eum"),
                    },
                    IosXcTest: &shared.IosXcTest{
                        BundleID: sdk.String("dolor"),
                        XcodeVersion: sdk.String("necessitatibus"),
                    },
                    TestTimeout: &shared.Duration{
                        Nanos: sdk.Int(141264),
                        Seconds: sdk.String("nemo"),
                    },
                },
            },
            State: shared.ExecutionStateEnumUnknownState.ToPointer(),
            TestExecutionMatrixID: sdk.String("iure"),
        },
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eius"),
        ExecutionID: "maxime",
        Fields: sdk.String("deleniti"),
        HistoryID: "facilis",
        Key: sdk.String("in"),
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "architecto",
        QuotaUser: sdk.String("repudiandae"),
        RequestID: sdk.String("ullam"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.ToolresultsProjectsHistoriesExecutionsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Execution != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClusters

Lists accessibility clusters for a given Step May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if the locale format is incorrect - NOT_FOUND - if the containing Step does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClusters(ctx, operations.ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("accusantium"),
        Locale: sdk.String("consequuntur"),
        Name: "Miss Nick Cummerata",
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStepAccessibilityClustersResponse != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsStepsCreate

Creates a Step. The returned Step will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsStepsCreate(ctx, operations.ToolresultsProjectsHistoriesExecutionsStepsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Step: &shared.Step{
            CompletionTime: &shared.Timestamp{
                Nanos: sdk.Int(407183),
                Seconds: sdk.String("accusantium"),
            },
            CreationTime: &shared.Timestamp{
                Nanos: sdk.Int(69167),
                Seconds: sdk.String("maiores"),
            },
            Description: sdk.String("quidem"),
            DeviceUsageDuration: &shared.Duration{
                Nanos: sdk.Int(373291),
                Seconds: sdk.String("voluptate"),
            },
            DimensionValue: []shared.StepDimensionValueEntry{
                shared.StepDimensionValueEntry{
                    Key: sdk.String("nam"),
                    Value: sdk.String("eaque"),
                },
                shared.StepDimensionValueEntry{
                    Key: sdk.String("pariatur"),
                    Value: sdk.String("nemo"),
                },
            },
            HasImages: sdk.Bool(false),
            Labels: []shared.StepLabelsEntry{
                shared.StepLabelsEntry{
                    Key: sdk.String("perferendis"),
                    Value: sdk.String("fugiat"),
                },
                shared.StepLabelsEntry{
                    Key: sdk.String("amet"),
                    Value: sdk.String("aut"),
                },
                shared.StepLabelsEntry{
                    Key: sdk.String("cumque"),
                    Value: sdk.String("corporis"),
                },
                shared.StepLabelsEntry{
                    Key: sdk.String("hic"),
                    Value: sdk.String("libero"),
                },
            },
            MultiStep: &shared.MultiStep{
                MultistepNumber: sdk.Int(749999),
                PrimaryStep: &shared.PrimaryStep{
                    IndividualOutcome: []shared.IndividualOutcome{
                        shared.IndividualOutcome{
                            MultistepNumber: sdk.Int(339404),
                            OutcomeSummary: shared.IndividualOutcomeOutcomeSummaryEnumInconclusive.ToPointer(),
                            RunDuration: &shared.Duration{
                                Nanos: sdk.Int(489549),
                                Seconds: sdk.String("eaque"),
                            },
                            StepID: sdk.String("quis"),
                        },
                    },
                    RollUp: shared.PrimaryStepRollUpEnumSuccess.ToPointer(),
                },
                PrimaryStepID: sdk.String("eos"),
            },
            Name: sdk.String("Jacqueline Schimmel"),
            Outcome: &shared.Outcome{
                FailureDetail: &shared.FailureDetail{
                    Crashed: sdk.Bool(false),
                    DeviceOutOfMemory: sdk.Bool(false),
                    FailedRoboscript: sdk.Bool(false),
                    NotInstalled: sdk.Bool(false),
                    OtherNativeCrash: sdk.Bool(false),
                    TimedOut: sdk.Bool(false),
                    UnableToCrawl: sdk.Bool(false),
                },
                InconclusiveDetail: &shared.InconclusiveDetail{
                    AbortedByUser: sdk.Bool(false),
                    HasErrorLogs: sdk.Bool(false),
                    InfrastructureFailure: sdk.Bool(false),
                },
                SkippedDetail: &shared.SkippedDetail{
                    IncompatibleAppVersion: sdk.Bool(false),
                    IncompatibleArchitecture: sdk.Bool(false),
                    IncompatibleDevice: sdk.Bool(false),
                },
                SuccessDetail: &shared.SuccessDetail{
                    OtherNativeCrash: sdk.Bool(false),
                },
                Summary: shared.OutcomeSummaryEnumFlaky.ToPointer(),
            },
            RunDuration: &shared.Duration{
                Nanos: sdk.Int(345352),
                Seconds: sdk.String("hic"),
            },
            State: shared.StepStateEnumComplete.ToPointer(),
            StepID: sdk.String("omnis"),
            TestExecutionStep: &shared.TestExecutionStep{
                TestIssues: []shared.TestIssue{
                    shared.TestIssue{
                        Category: shared.TestIssueCategoryEnumCommon.ToPointer(),
                        ErrorMessage: sdk.String("voluptatem"),
                        Severity: shared.TestIssueSeverityEnumWarning.ToPointer(),
                        StackTrace: &shared.StackTrace{
                            Exception: sdk.String("consequuntur"),
                        },
                        Type: shared.TestIssueTypeEnumPerformedGoogleLogin.ToPointer(),
                        Warning: &shared.Any{
                            TypeURL: sdk.String("error"),
                            Value: sdk.String("eaque"),
                        },
                    },
                    shared.TestIssue{
                        Category: shared.TestIssueCategoryEnumCommon.ToPointer(),
                        ErrorMessage: sdk.String("rerum"),
                        Severity: shared.TestIssueSeverityEnumInfo.ToPointer(),
                        StackTrace: &shared.StackTrace{
                            Exception: sdk.String("asperiores"),
                        },
                        Type: shared.TestIssueTypeEnumDeviceOutOfMemory.ToPointer(),
                        Warning: &shared.Any{
                            TypeURL: sdk.String("modi"),
                            Value: sdk.String("iste"),
                        },
                    },
                    shared.TestIssue{
                        Category: shared.TestIssueCategoryEnumRobo.ToPointer(),
                        ErrorMessage: sdk.String("deleniti"),
                        Severity: shared.TestIssueSeverityEnumSevere.ToPointer(),
                        StackTrace: &shared.StackTrace{
                            Exception: sdk.String("provident"),
                        },
                        Type: shared.TestIssueTypeEnumCrashDialogError.ToPointer(),
                        Warning: &shared.Any{
                            TypeURL: sdk.String("libero"),
                            Value: sdk.String("delectus"),
                        },
                    },
                },
                TestSuiteOverviews: []shared.TestSuiteOverview{
                    shared.TestSuiteOverview{
                        ElapsedTime: &shared.Duration{
                            Nanos: sdk.Int(554242),
                            Seconds: sdk.String("aliquid"),
                        },
                        ErrorCount: sdk.Int(212390),
                        FailureCount: sdk.Int(209843),
                        FlakyCount: sdk.Int(222443),
                        Name: sdk.String("Tiffany Welch"),
                        SkippedCount: sdk.Int(452109),
                        TotalCount: sdk.Int(490459),
                        XMLSource: &shared.FileReference{
                            FileURI: sdk.String("reiciendis"),
                        },
                    },
                    shared.TestSuiteOverview{
                        ElapsedTime: &shared.Duration{
                            Nanos: sdk.Int(227414),
                            Seconds: sdk.String("dolorum"),
                        },
                        ErrorCount: sdk.Int(254356),
                        FailureCount: sdk.Int(85295),
                        FlakyCount: sdk.Int(58029),
                        Name: sdk.String("Vera Kuhlman"),
                        SkippedCount: sdk.Int(696344),
                        TotalCount: sdk.Int(976405),
                        XMLSource: &shared.FileReference{
                            FileURI: sdk.String("voluptas"),
                        },
                    },
                },
                TestTiming: &shared.TestTiming{
                    TestProcessDuration: &shared.Duration{
                        Nanos: sdk.Int(617658),
                        Seconds: sdk.String("eos"),
                    },
                },
                ToolExecution: &shared.ToolExecution{
                    CommandLineArguments: []string{
                        "sit",
                        "fugiat",
                        "ab",
                    },
                    ExitCode: &shared.ToolExitCode{
                        Number: sdk.Int(743835),
                    },
                    ToolLogs: []shared.FileReference{
                        shared.FileReference{
                            FileURI: sdk.String("iusto"),
                        },
                        shared.FileReference{
                            FileURI: sdk.String("voluptate"),
                        },
                        shared.FileReference{
                            FileURI: sdk.String("dolorum"),
                        },
                    },
                    ToolOutputs: []shared.ToolOutputReference{
                        shared.ToolOutputReference{
                            CreationTime: &shared.Timestamp{
                                Nanos: sdk.Int(607045),
                                Seconds: sdk.String("necessitatibus"),
                            },
                            Output: &shared.FileReference{
                                FileURI: sdk.String("distinctio"),
                            },
                            TestCase: &shared.TestCaseReference{
                                ClassName: sdk.String("asperiores"),
                                Name: sdk.String("Edna Klocko"),
                                TestSuiteName: sdk.String("eius"),
                            },
                        },
                        shared.ToolOutputReference{
                            CreationTime: &shared.Timestamp{
                                Nanos: sdk.Int(137220),
                                Seconds: sdk.String("perferendis"),
                            },
                            Output: &shared.FileReference{
                                FileURI: sdk.String("amet"),
                            },
                            TestCase: &shared.TestCaseReference{
                                ClassName: sdk.String("optio"),
                                Name: sdk.String("Tommy Turner"),
                                TestSuiteName: sdk.String("provident"),
                            },
                        },
                        shared.ToolOutputReference{
                            CreationTime: &shared.Timestamp{
                                Nanos: sdk.Int(324683),
                                Seconds: sdk.String("repellendus"),
                            },
                            Output: &shared.FileReference{
                                FileURI: sdk.String("totam"),
                            },
                            TestCase: &shared.TestCaseReference{
                                ClassName: sdk.String("similique"),
                                Name: sdk.String("Cristina Hahn"),
                                TestSuiteName: sdk.String("quod"),
                            },
                        },
                    },
                },
            },
            ToolExecutionStep: &shared.ToolExecutionStep{
                ToolExecution: &shared.ToolExecution{
                    CommandLineArguments: []string{
                        "qui",
                        "dolorum",
                        "a",
                        "esse",
                    },
                    ExitCode: &shared.ToolExitCode{
                        Number: sdk.Int(687488),
                    },
                    ToolLogs: []shared.FileReference{
                        shared.FileReference{
                            FileURI: sdk.String("ipsum"),
                        },
                        shared.FileReference{
                            FileURI: sdk.String("quisquam"),
                        },
                    },
                    ToolOutputs: []shared.ToolOutputReference{
                        shared.ToolOutputReference{
                            CreationTime: &shared.Timestamp{
                                Nanos: sdk.Int(229442),
                                Seconds: sdk.String("tempore"),
                            },
                            Output: &shared.FileReference{
                                FileURI: sdk.String("accusamus"),
                            },
                            TestCase: &shared.TestCaseReference{
                                ClassName: sdk.String("numquam"),
                                Name: sdk.String("Florence Will"),
                                TestSuiteName: sdk.String("sit"),
                            },
                        },
                        shared.ToolOutputReference{
                            CreationTime: &shared.Timestamp{
                                Nanos: sdk.Int(711584),
                                Seconds: sdk.String("neque"),
                            },
                            Output: &shared.FileReference{
                                FileURI: sdk.String("sed"),
                            },
                            TestCase: &shared.TestCaseReference{
                                ClassName: sdk.String("vel"),
                                Name: sdk.String("Glen Oberbrunner"),
                                TestSuiteName: sdk.String("incidunt"),
                            },
                        },
                        shared.ToolOutputReference{
                            CreationTime: &shared.Timestamp{
                                Nanos: sdk.Int(186458),
                                Seconds: sdk.String("cupiditate"),
                            },
                            Output: &shared.FileReference{
                                FileURI: sdk.String("maxime"),
                            },
                            TestCase: &shared.TestCaseReference{
                                ClassName: sdk.String("pariatur"),
                                Name: sdk.String("Keith Padberg"),
                                TestSuiteName: sdk.String("aspernatur"),
                            },
                        },
                        shared.ToolOutputReference{
                            CreationTime: &shared.Timestamp{
                                Nanos: sdk.Int(174909),
                                Seconds: sdk.String("distinctio"),
                            },
                            Output: &shared.FileReference{
                                FileURI: sdk.String("facilis"),
                            },
                            TestCase: &shared.TestCaseReference{
                                ClassName: sdk.String("aliquid"),
                                Name: sdk.String("Felicia Spencer"),
                                TestSuiteName: sdk.String("fugit"),
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sunt"),
        ExecutionID: "ullam",
        Fields: sdk.String("nam"),
        HistoryID: "hic",
        Key: sdk.String("voluptatem"),
        OauthToken: sdk.String("cumque"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "soluta",
        QuotaUser: sdk.String("nobis"),
        RequestID: sdk.String("et"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.ToolresultsProjectsHistoriesExecutionsStepsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Step != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsStepsGet

Gets a Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsStepsGet(ctx, operations.ToolresultsProjectsHistoriesExecutionsStepsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempore"),
        ExecutionID: "cupiditate",
        Fields: sdk.String("aperiam"),
        HistoryID: "delectus",
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "labore",
        QuotaUser: sdk.String("adipisci"),
        StepID: "dolorum",
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("quae"),
    }, operations.ToolresultsProjectsHistoriesExecutionsStepsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Step != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummary

Retrieves a PerfMetricsSummary. May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummary(ctx, operations.ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quas"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequatur"),
        ExecutionID: "est",
        Fields: sdk.String("repellendus"),
        HistoryID: "porro",
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "facilis",
        QuotaUser: sdk.String("cupiditate"),
        StepID: "qui",
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("laudantium"),
    }, operations.ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummarySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PerfMetricsSummary != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsStepsList

Lists Steps for a given Execution. The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsStepsList(ctx, operations.ToolresultsProjectsHistoriesExecutionsStepsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quisquam"),
        ExecutionID: "vero",
        Fields: sdk.String("omnis"),
        HistoryID: "quis",
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("delectus"),
        PageSize: sdk.Int64(455169),
        PageToken: sdk.String("consectetur"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "vero",
        QuotaUser: sdk.String("tenetur"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("hic"),
    }, operations.ToolresultsProjectsHistoriesExecutionsStepsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStepsResponse != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsStepsPatch

Updates an existing Step with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsStepsPatch(ctx, operations.ToolresultsProjectsHistoriesExecutionsStepsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Step: &shared.Step{
            CompletionTime: &shared.Timestamp{
                Nanos: sdk.Int(799203),
                Seconds: sdk.String("odio"),
            },
            CreationTime: &shared.Timestamp{
                Nanos: sdk.Int(630448),
                Seconds: sdk.String("facilis"),
            },
            Description: sdk.String("vero"),
            DeviceUsageDuration: &shared.Duration{
                Nanos: sdk.Int(498140),
                Seconds: sdk.String("dolore"),
            },
            DimensionValue: []shared.StepDimensionValueEntry{
                shared.StepDimensionValueEntry{
                    Key: sdk.String("illum"),
                    Value: sdk.String("sequi"),
                },
                shared.StepDimensionValueEntry{
                    Key: sdk.String("natus"),
                    Value: sdk.String("impedit"),
                },
                shared.StepDimensionValueEntry{
                    Key: sdk.String("aut"),
                    Value: sdk.String("voluptatibus"),
                },
                shared.StepDimensionValueEntry{
                    Key: sdk.String("exercitationem"),
                    Value: sdk.String("nulla"),
                },
            },
            HasImages: sdk.Bool(false),
            Labels: []shared.StepLabelsEntry{
                shared.StepLabelsEntry{
                    Key: sdk.String("porro"),
                    Value: sdk.String("maiores"),
                },
            },
            MultiStep: &shared.MultiStep{
                MultistepNumber: sdk.Int(985033),
                PrimaryStep: &shared.PrimaryStep{
                    IndividualOutcome: []shared.IndividualOutcome{
                        shared.IndividualOutcome{
                            MultistepNumber: sdk.Int(753570),
                            OutcomeSummary: shared.IndividualOutcomeOutcomeSummaryEnumFailure.ToPointer(),
                            RunDuration: &shared.Duration{
                                Nanos: sdk.Int(4048),
                                Seconds: sdk.String("officia"),
                            },
                            StepID: sdk.String("tempora"),
                        },
                        shared.IndividualOutcome{
                            MultistepNumber: sdk.Int(368584),
                            OutcomeSummary: shared.IndividualOutcomeOutcomeSummaryEnumFailure.ToPointer(),
                            RunDuration: &shared.Duration{
                                Nanos: sdk.Int(136900),
                                Seconds: sdk.String("vel"),
                            },
                            StepID: sdk.String("possimus"),
                        },
                    },
                    RollUp: shared.PrimaryStepRollUpEnumSuccess.ToPointer(),
                },
                PrimaryStepID: sdk.String("ratione"),
            },
            Name: sdk.String("Mabel Cartwright"),
            Outcome: &shared.Outcome{
                FailureDetail: &shared.FailureDetail{
                    Crashed: sdk.Bool(false),
                    DeviceOutOfMemory: sdk.Bool(false),
                    FailedRoboscript: sdk.Bool(false),
                    NotInstalled: sdk.Bool(false),
                    OtherNativeCrash: sdk.Bool(false),
                    TimedOut: sdk.Bool(false),
                    UnableToCrawl: sdk.Bool(false),
                },
                InconclusiveDetail: &shared.InconclusiveDetail{
                    AbortedByUser: sdk.Bool(false),
                    HasErrorLogs: sdk.Bool(false),
                    InfrastructureFailure: sdk.Bool(false),
                },
                SkippedDetail: &shared.SkippedDetail{
                    IncompatibleAppVersion: sdk.Bool(false),
                    IncompatibleArchitecture: sdk.Bool(false),
                    IncompatibleDevice: sdk.Bool(false),
                },
                SuccessDetail: &shared.SuccessDetail{
                    OtherNativeCrash: sdk.Bool(false),
                },
                Summary: shared.OutcomeSummaryEnumUnset.ToPointer(),
            },
            RunDuration: &shared.Duration{
                Nanos: sdk.Int(406120),
                Seconds: sdk.String("nulla"),
            },
            State: shared.StepStateEnumInProgress.ToPointer(),
            StepID: sdk.String("voluptatibus"),
            TestExecutionStep: &shared.TestExecutionStep{
                TestIssues: []shared.TestIssue{
                    shared.TestIssue{
                        Category: shared.TestIssueCategoryEnumRobo.ToPointer(),
                        ErrorMessage: sdk.String("quisquam"),
                        Severity: shared.TestIssueSeverityEnumSevere.ToPointer(),
                        StackTrace: &shared.StackTrace{
                            Exception: sdk.String("ea"),
                        },
                        Type: shared.TestIssueTypeEnumCrashDialogError.ToPointer(),
                        Warning: &shared.Any{
                            TypeURL: sdk.String("corporis"),
                            Value: sdk.String("veniam"),
                        },
                    },
                    shared.TestIssue{
                        Category: shared.TestIssueCategoryEnumCommon.ToPointer(),
                        ErrorMessage: sdk.String("inventore"),
                        Severity: shared.TestIssueSeverityEnumInfo.ToPointer(),
                        StackTrace: &shared.StackTrace{
                            Exception: sdk.String("ea"),
                        },
                        Type: shared.TestIssueTypeEnumCrashDialogError.ToPointer(),
                        Warning: &shared.Any{
                            TypeURL: sdk.String("consectetur"),
                            Value: sdk.String("recusandae"),
                        },
                    },
                },
                TestSuiteOverviews: []shared.TestSuiteOverview{
                    shared.TestSuiteOverview{
                        ElapsedTime: &shared.Duration{
                            Nanos: sdk.Int(325310),
                            Seconds: sdk.String("eaque"),
                        },
                        ErrorCount: sdk.Int(952871),
                        FailureCount: sdk.Int(725595),
                        FlakyCount: sdk.Int(13948),
                        Name: sdk.String("Margie Russel"),
                        SkippedCount: sdk.Int(882860),
                        TotalCount: sdk.Int(79522),
                        XMLSource: &shared.FileReference{
                            FileURI: sdk.String("non"),
                        },
                    },
                },
                TestTiming: &shared.TestTiming{
                    TestProcessDuration: &shared.Duration{
                        Nanos: sdk.Int(89603),
                        Seconds: sdk.String("dolorum"),
                    },
                },
                ToolExecution: &shared.ToolExecution{
                    CommandLineArguments: []string{
                        "placeat",
                        "velit",
                        "eum",
                    },
                    ExitCode: &shared.ToolExitCode{
                        Number: sdk.Int(420539),
                    },
                    ToolLogs: []shared.FileReference{
                        shared.FileReference{
                            FileURI: sdk.String("quas"),
                        },
                        shared.FileReference{
                            FileURI: sdk.String("assumenda"),
                        },
                        shared.FileReference{
                            FileURI: sdk.String("nulla"),
                        },
                        shared.FileReference{
                            FileURI: sdk.String("voluptas"),
                        },
                    },
                    ToolOutputs: []shared.ToolOutputReference{
                        shared.ToolOutputReference{
                            CreationTime: &shared.Timestamp{
                                Nanos: sdk.Int(96549),
                                Seconds: sdk.String("tempora"),
                            },
                            Output: &shared.FileReference{
                                FileURI: sdk.String("numquam"),
                            },
                            TestCase: &shared.TestCaseReference{
                                ClassName: sdk.String("explicabo"),
                                Name: sdk.String("Jose Kreiger"),
                                TestSuiteName: sdk.String("eius"),
                            },
                        },
                        shared.ToolOutputReference{
                            CreationTime: &shared.Timestamp{
                                Nanos: sdk.Int(458515),
                                Seconds: sdk.String("esse"),
                            },
                            Output: &shared.FileReference{
                                FileURI: sdk.String("rem"),
                            },
                            TestCase: &shared.TestCaseReference{
                                ClassName: sdk.String("fuga"),
                                Name: sdk.String("Yvette Stehr"),
                                TestSuiteName: sdk.String("suscipit"),
                            },
                        },
                        shared.ToolOutputReference{
                            CreationTime: &shared.Timestamp{
                                Nanos: sdk.Int(826871),
                                Seconds: sdk.String("eos"),
                            },
                            Output: &shared.FileReference{
                                FileURI: sdk.String("praesentium"),
                            },
                            TestCase: &shared.TestCaseReference{
                                ClassName: sdk.String("quisquam"),
                                Name: sdk.String("Angela Olson"),
                                TestSuiteName: sdk.String("quo"),
                            },
                        },
                    },
                },
            },
            ToolExecutionStep: &shared.ToolExecutionStep{
                ToolExecution: &shared.ToolExecution{
                    CommandLineArguments: []string{
                        "quo",
                        "fuga",
                        "eius",
                        "eos",
                    },
                    ExitCode: &shared.ToolExitCode{
                        Number: sdk.Int(373813),
                    },
                    ToolLogs: []shared.FileReference{
                        shared.FileReference{
                            FileURI: sdk.String("cupiditate"),
                        },
                    },
                    ToolOutputs: []shared.ToolOutputReference{
                        shared.ToolOutputReference{
                            CreationTime: &shared.Timestamp{
                                Nanos: sdk.Int(272822),
                                Seconds: sdk.String("debitis"),
                            },
                            Output: &shared.FileReference{
                                FileURI: sdk.String("ipsam"),
                            },
                            TestCase: &shared.TestCaseReference{
                                ClassName: sdk.String("aspernatur"),
                                Name: sdk.String("Angelica Koelpin MD"),
                                TestSuiteName: sdk.String("quod"),
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nihil"),
        ExecutionID: "totam",
        Fields: sdk.String("accusamus"),
        HistoryID: "aliquam",
        Key: sdk.String("odio"),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "commodi",
        QuotaUser: sdk.String("sapiente"),
        RequestID: sdk.String("dolores"),
        StepID: "deserunt",
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.ToolresultsProjectsHistoriesExecutionsStepsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Step != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreate

Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created. May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreate(ctx, operations.ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PerfMetricsSummary: &shared.PerfMetricsSummary{
            AppStartTime: &shared.AppStartTime{
                FullyDrawnTime: &shared.Duration{
                    Nanos: sdk.Int(430402),
                    Seconds: sdk.String("quas"),
                },
                InitialDisplayTime: &shared.Duration{
                    Nanos: sdk.Int(510017),
                    Seconds: sdk.String("consequuntur"),
                },
            },
            ExecutionID: sdk.String("deleniti"),
            GraphicsStats: &shared.GraphicsStats{
                Buckets: []shared.GraphicsStatsBucket{
                    shared.GraphicsStatsBucket{
                        FrameCount: sdk.String("fuga"),
                        RenderMillis: sdk.String("mollitia"),
                    },
                },
                HighInputLatencyCount: sdk.String("incidunt"),
                JankyFrames: sdk.String("atque"),
                MissedVsyncCount: sdk.String("explicabo"),
                P50Millis: sdk.String("minima"),
                P90Millis: sdk.String("nisi"),
                P95Millis: sdk.String("fugit"),
                P99Millis: sdk.String("sapiente"),
                SlowBitmapUploadCount: sdk.String("consequuntur"),
                SlowDrawCount: sdk.String("ratione"),
                SlowUIThreadCount: sdk.String("explicabo"),
                TotalFrames: sdk.String("saepe"),
            },
            HistoryID: sdk.String("occaecati"),
            PerfEnvironment: &shared.PerfEnvironment{
                CPUInfo: &shared.CPUInfo{
                    CPUProcessor: sdk.String("atque"),
                    CPUSpeedInGhz: sdk.Float32(922.6),
                    NumberOfCores: sdk.Int(456911),
                },
                MemoryInfo: &shared.MemoryInfo{
                    MemoryCapInKibibyte: sdk.String("eveniet"),
                    MemoryTotalInKibibyte: sdk.String("accusamus"),
                },
            },
            PerfMetrics: []shared.PerfMetricsSummaryPerfMetricsEnum{
                shared.PerfMetricsSummaryPerfMetricsEnumCPU,
            },
            ProjectID: sdk.String("quod"),
            StepID: sdk.String("nam"),
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quasi"),
        ExecutionID: "saepe",
        Fields: sdk.String("vel"),
        HistoryID: "harum",
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("rerum"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "occaecati",
        QuotaUser: sdk.String("minima"),
        StepID: "distinctio",
        UploadType: sdk.String("eligendi"),
        UploadProtocol: sdk.String("sit"),
    }, operations.ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PerfMetricsSummary != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreate

Creates a PerfSampleSeries. May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreate(ctx, operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PerfSampleSeries: &shared.PerfSampleSeries{
            BasicPerfSampleSeries: &shared.BasicPerfSampleSeries{
                PerfMetricType: shared.BasicPerfSampleSeriesPerfMetricTypeEnumNetwork.ToPointer(),
                PerfUnit: shared.BasicPerfSampleSeriesPerfUnitEnumKibibyte.ToPointer(),
                SampleSeriesLabel: shared.BasicPerfSampleSeriesSampleSeriesLabelEnumNtBytesReceived.ToPointer(),
            },
            ExecutionID: sdk.String("consequuntur"),
            HistoryID: sdk.String("consequatur"),
            ProjectID: sdk.String("minus"),
            SampleSeriesID: sdk.String("quaerat"),
            StepID: sdk.String("sapiente"),
        },
        AccessToken: sdk.String("consectetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("blanditiis"),
        ExecutionID: "provident",
        Fields: sdk.String("a"),
        HistoryID: "nulla",
        Key: sdk.String("quas"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quasi",
        QuotaUser: sdk.String("a"),
        StepID: "error",
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PerfSampleSeries != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGet

Gets a PerfSampleSeries. May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGet(ctx, operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("asperiores"),
        ExecutionID: "facere",
        Fields: sdk.String("veritatis"),
        HistoryID: "consequuntur",
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("similique"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "culpa",
        QuotaUser: sdk.String("aliquid"),
        SampleSeriesID: "tenetur",
        StepID: "quae",
        UploadType: sdk.String("earum"),
        UploadProtocol: sdk.String("vel"),
    }, operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PerfSampleSeries != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesList

Lists PerfSampleSeries for a given Step. The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids. May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesList(ctx, operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("illum"),
        ExecutionID: "soluta",
        Fields: sdk.String("accusantium"),
        Filter: []ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum{
            operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnumGraphics,
            operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnumPerfMetricTypeUnspecified,
        },
        HistoryID: "ullam",
        Key: sdk.String("reprehenderit"),
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "nisi",
        QuotaUser: sdk.String("aut"),
        StepID: "voluptatum",
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPerfSampleSeriesResponse != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreate

Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database). May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreate(ctx, operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BatchCreatePerfSamplesRequest: &shared.BatchCreatePerfSamplesRequest{
            PerfSamples: []shared.PerfSample{
                shared.PerfSample{
                    SampleTime: &shared.Timestamp{
                        Nanos: sdk.Int(929292),
                        Seconds: sdk.String("dolorum"),
                    },
                    Value: sdk.Float64(996.15),
                },
                shared.PerfSample{
                    SampleTime: &shared.Timestamp{
                        Nanos: sdk.Int(609178),
                        Seconds: sdk.String("tenetur"),
                    },
                    Value: sdk.Float64(984.78),
                },
                shared.PerfSample{
                    SampleTime: &shared.Timestamp{
                        Nanos: sdk.Int(869489),
                        Seconds: sdk.String("et"),
                    },
                    Value: sdk.Float64(4541.62),
                },
            },
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("veritatis"),
        ExecutionID: "consectetur",
        Fields: sdk.String("adipisci"),
        HistoryID: "iste",
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "rem",
        QuotaUser: sdk.String("aut"),
        SampleSeriesID: "laudantium",
        StepID: "eum",
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("ab"),
    }, operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCreatePerfSamplesResponse != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesList

Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesList(ctx, operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolor"),
        ExecutionID: "occaecati",
        Fields: sdk.String("numquam"),
        HistoryID: "impedit",
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("voluptas"),
        PageSize: sdk.Int64(12036),
        PageToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "dicta",
        QuotaUser: sdk.String("maiores"),
        SampleSeriesID: "natus",
        StepID: "velit",
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPerfSamplesResponse != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXMLFiles

Publish xml files to an existing Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g. try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXMLFiles(ctx, operations.ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXMLFilesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PublishXunitXMLFilesRequest: &shared.PublishXunitXMLFilesRequest{
            XunitXMLFiles: []shared.FileReference{
                shared.FileReference{
                    FileURI: sdk.String("ea"),
                },
            },
        },
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellendus"),
        ExecutionID: "officia",
        Fields: sdk.String("maxime"),
        HistoryID: "dignissimos",
        Key: sdk.String("officia"),
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "nemo",
        QuotaUser: sdk.String("quae"),
        StepID: "quaerat",
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("quod"),
    }, operations.ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXMLFilesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Step != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsStepsTestCasesGet

Gets details of a Test Case for a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Test Case does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsStepsTestCasesGet(ctx, operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fuga"),
        ExecutionID: "id",
        Fields: sdk.String("suscipit"),
        HistoryID: "velit",
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "recusandae",
        QuotaUser: sdk.String("totam"),
        StepID: "fugiat",
        TestCaseID: "vel",
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("quos"),
    }, operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestCase != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsStepsTestCasesList

Lists Test Cases attached to a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Step does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsStepsTestCasesList(ctx, operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facilis"),
        ExecutionID: "cum",
        Fields: sdk.String("commodi"),
        HistoryID: "in",
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("reiciendis"),
        PageSize: sdk.Int64(828657),
        PageToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "recusandae",
        QuotaUser: sdk.String("aliquid"),
        StepID: "aperiam",
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("consectetur"),
    }, operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTestCasesResponse != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesExecutionsStepsThumbnailsList

Lists thumbnails of images attached to a step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesExecutionsStepsThumbnailsList(ctx, operations.ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("exercitationem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facere"),
        ExecutionID: "numquam",
        Fields: sdk.String("doloribus"),
        HistoryID: "suscipit",
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("quidem"),
        PageSize: sdk.Int64(904949),
        PageToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "dolore",
        QuotaUser: sdk.String("sunt"),
        StepID: "asperiores",
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("non"),
    }, operations.ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStepThumbnailsResponse != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesGet

Gets a History. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesGet(ctx, operations.ToolresultsProjectsHistoriesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("beatae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("debitis"),
        HistoryID: "consectetur",
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "laboriosam",
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("libero"),
    }, operations.ToolresultsProjectsHistoriesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.History != nil {
        // handle response
    }
}
```

## ToolresultsProjectsHistoriesList

Lists Histories for a given Project. The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist

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
    res, err := s.Projects.ToolresultsProjectsHistoriesList(ctx, operations.ToolresultsProjectsHistoriesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("aspernatur"),
        FilterByName: sdk.String("voluptas"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("voluptas"),
        PageSize: sdk.Int64(324405),
        PageToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "dolorum",
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.ToolresultsProjectsHistoriesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHistoriesResponse != nil {
        // handle response
    }
}
```

## ToolresultsProjectsInitializeSettings

Creates resources for settings which have not yet been set. Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days. The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details. If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created. May return any canonical error codes, including the following: - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage

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
    res, err := s.Projects.ToolresultsProjectsInitializeSettings(ctx, operations.ToolresultsProjectsInitializeSettingsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("officiis"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "adipisci",
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("quas"),
    }, operations.ToolresultsProjectsInitializeSettingsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectSettings != nil {
        // handle response
    }
}
```
