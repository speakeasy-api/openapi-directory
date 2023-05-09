# Projects

### Available Operations

* [TestingProjectsTestMatricesCancel](#testingprojectstestmatricescancel) - Cancels unfinished test executions in a test matrix. This call returns immediately and cancellation proceeds asynchronously. If the matrix is already final, this operation will have no effect. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist
* [TestingProjectsTestMatricesCreate](#testingprojectstestmatricescreate) - Creates and runs a matrix of tests according to the given specifications. Unsupported environments will be returned in the state UNSUPPORTED. A test matrix is limited to use at most 2000 devices in parallel. The returned matrix will not yet contain the executions that will be created for this matrix. That happens later on and will require a call to GetTestMatrix. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed or if the matrix tries to use too many simultaneous devices.
* [TestingProjectsTestMatricesGet](#testingprojectstestmatricesget) - Checks the status of a test matrix and the executions once they are created. The test matrix will contain the list of test executions to run if and only if the resultStorage.toolResultsExecution fields have been populated. Note: Flaky test executions may still be added to the matrix at a later stage. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist

## TestingProjectsTestMatricesCancel

Cancels unfinished test executions in a test matrix. This call returns immediately and cancellation proceeds asynchronously. If the matrix is already final, this operation will have no effect. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist

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
    res, err := s.Projects.TestingProjectsTestMatricesCancel(ctx, operations.TestingProjectsTestMatricesCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quis",
        QuotaUser: sdk.String("veritatis"),
        TestMatrixID: "deserunt",
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.TestingProjectsTestMatricesCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelTestMatrixResponse != nil {
        // handle response
    }
}
```

## TestingProjectsTestMatricesCreate

Creates and runs a matrix of tests according to the given specifications. Unsupported environments will be returned in the state UNSUPPORTED. A test matrix is limited to use at most 2000 devices in parallel. The returned matrix will not yet contain the executions that will be created for this matrix. That happens later on and will require a call to GetTestMatrix. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed or if the matrix tries to use too many simultaneous devices.

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
    res, err := s.Projects.TestingProjectsTestMatricesCreate(ctx, operations.TestingProjectsTestMatricesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestMatrix: &shared.TestMatrix{
            ClientInfo: &shared.ClientInfo{
                ClientInfoDetails: []shared.ClientInfoDetail{
                    shared.ClientInfoDetail{
                        Key: sdk.String("quo"),
                        Value: sdk.String("odit"),
                    },
                    shared.ClientInfoDetail{
                        Key: sdk.String("at"),
                        Value: sdk.String("at"),
                    },
                    shared.ClientInfoDetail{
                        Key: sdk.String("maiores"),
                        Value: sdk.String("molestiae"),
                    },
                    shared.ClientInfoDetail{
                        Key: sdk.String("quod"),
                        Value: sdk.String("quod"),
                    },
                },
                Name: sdk.String("Deanna Sauer MD"),
            },
            EnvironmentMatrix: &shared.EnvironmentMatrix{
                AndroidDeviceList: &shared.AndroidDeviceList{
                    AndroidDevices: []shared.AndroidDevice{
                        shared.AndroidDevice{
                            AndroidModelID: sdk.String("occaecati"),
                            AndroidVersionID: sdk.String("fugit"),
                            Locale: sdk.String("deleniti"),
                            Orientation: sdk.String("hic"),
                        },
                        shared.AndroidDevice{
                            AndroidModelID: sdk.String("optio"),
                            AndroidVersionID: sdk.String("totam"),
                            Locale: sdk.String("beatae"),
                            Orientation: sdk.String("commodi"),
                        },
                        shared.AndroidDevice{
                            AndroidModelID: sdk.String("molestiae"),
                            AndroidVersionID: sdk.String("modi"),
                            Locale: sdk.String("qui"),
                            Orientation: sdk.String("impedit"),
                        },
                    },
                },
                AndroidMatrix: &shared.AndroidMatrix{
                    AndroidModelIds: []string{
                        "esse",
                        "ipsum",
                        "excepturi",
                    },
                    AndroidVersionIds: []string{
                        "perferendis",
                    },
                    Locales: []string{
                        "natus",
                        "sed",
                    },
                    Orientations: []string{
                        "dolor",
                        "natus",
                        "laboriosam",
                    },
                },
                IosDeviceList: &shared.IosDeviceList{
                    IosDevices: []shared.IosDevice{
                        shared.IosDevice{
                            IosModelID: sdk.String("saepe"),
                            IosVersionID: sdk.String("fuga"),
                            Locale: sdk.String("in"),
                            Orientation: sdk.String("corporis"),
                        },
                        shared.IosDevice{
                            IosModelID: sdk.String("iste"),
                            IosVersionID: sdk.String("iure"),
                            Locale: sdk.String("saepe"),
                            Orientation: sdk.String("quidem"),
                        },
                        shared.IosDevice{
                            IosModelID: sdk.String("architecto"),
                            IosVersionID: sdk.String("ipsa"),
                            Locale: sdk.String("reiciendis"),
                            Orientation: sdk.String("est"),
                        },
                        shared.IosDevice{
                            IosModelID: sdk.String("mollitia"),
                            IosVersionID: sdk.String("laborum"),
                            Locale: sdk.String("dolores"),
                            Orientation: sdk.String("dolorem"),
                        },
                    },
                },
            },
            FailFast: sdk.Bool(false),
            FlakyTestAttempts: sdk.Int(358152),
            InvalidMatrixDetails: shared.TestMatrixInvalidMatrixDetailsEnumNoPackageName.ToPointer(),
            OutcomeSummary: shared.TestMatrixOutcomeSummaryEnumInconclusive.ToPointer(),
            ProjectID: sdk.String("enim"),
            ResultStorage: &shared.ResultStorage{
                GoogleCloudStorage: &shared.GoogleCloudStorage{
                    GcsPath: sdk.String("omnis"),
                },
                ResultsURL: sdk.String("nemo"),
                ToolResultsExecution: &shared.ToolResultsExecution{
                    ExecutionID: sdk.String("minima"),
                    HistoryID: sdk.String("excepturi"),
                    ProjectID: sdk.String("accusantium"),
                },
                ToolResultsHistory: &shared.ToolResultsHistory{
                    HistoryID: sdk.String("iure"),
                    ProjectID: sdk.String("culpa"),
                },
            },
            State: shared.TestMatrixStateEnumInvalid.ToPointer(),
            TestExecutions: []shared.TestExecution{
                shared.TestExecution{
                    Environment: &shared.Environment{
                        AndroidDevice: &shared.AndroidDevice{
                            AndroidModelID: sdk.String("architecto"),
                            AndroidVersionID: sdk.String("mollitia"),
                            Locale: sdk.String("dolorem"),
                            Orientation: sdk.String("culpa"),
                        },
                        IosDevice: &shared.IosDevice{
                            IosModelID: sdk.String("consequuntur"),
                            IosVersionID: sdk.String("repellat"),
                            Locale: sdk.String("mollitia"),
                            Orientation: sdk.String("occaecati"),
                        },
                    },
                    ID: sdk.String("46773925-1aa5-42c3-b5ad-019da1ffe78f"),
                    MatrixID: sdk.String("ipsa"),
                    ProjectID: sdk.String("omnis"),
                    Shard: &shared.Shard{
                        NumShards: sdk.Int(451159),
                        ShardIndex: sdk.Int(739264),
                        TestTargetsForShard: &shared.TestTargetsForShard{
                            TestTargets: []string{
                                "doloremque",
                            },
                        },
                    },
                    State: shared.TestExecutionStateEnumFinished.ToPointer(),
                    TestDetails: &shared.TestDetails{
                        ErrorMessage: sdk.String("ut"),
                        ProgressMessages: []string{
                            "dicta",
                            "corporis",
                            "dolore",
                            "iusto",
                        },
                    },
                    TestSpecification: &shared.TestSpecification{
                        AndroidInstrumentationTest: &shared.AndroidInstrumentationTest{
                            AppApk: &shared.FileReference{
                                GcsPath: sdk.String("dicta"),
                            },
                            AppBundle: &shared.AppBundle{
                                BundleLocation: &shared.FileReference{
                                    GcsPath: sdk.String("harum"),
                                },
                            },
                            AppPackageID: sdk.String("enim"),
                            OrchestratorOption: shared.AndroidInstrumentationTestOrchestratorOptionEnumDoNotUseOrchestrator.ToPointer(),
                            ShardingOption: &shared.ShardingOption{
                                ManualSharding: &shared.ManualSharding{
                                    TestTargetsForShard: []shared.TestTargetsForShard{
                                        shared.TestTargetsForShard{
                                            TestTargets: []string{
                                                "quae",
                                                "ipsum",
                                                "quidem",
                                                "molestias",
                                            },
                                        },
                                        shared.TestTargetsForShard{
                                            TestTargets: []string{
                                                "pariatur",
                                                "modi",
                                                "praesentium",
                                            },
                                        },
                                    },
                                },
                                SmartSharding: &shared.SmartSharding{
                                    TargetedShardDuration: sdk.String("rem"),
                                },
                                UniformSharding: &shared.UniformSharding{
                                    NumShards: sdk.Int(916723),
                                },
                            },
                            TestApk: &shared.FileReference{
                                GcsPath: sdk.String("quasi"),
                            },
                            TestPackageID: sdk.String("repudiandae"),
                            TestRunnerClass: sdk.String("sint"),
                            TestTargets: []string{
                                "itaque",
                            },
                        },
                        AndroidRoboTest: &shared.AndroidRoboTest{
                            AppApk: &shared.FileReference{
                                GcsPath: sdk.String("incidunt"),
                            },
                            AppBundle: &shared.AppBundle{
                                BundleLocation: &shared.FileReference{
                                    GcsPath: sdk.String("enim"),
                                },
                            },
                            AppInitialActivity: sdk.String("consequatur"),
                            AppPackageID: sdk.String("est"),
                            MaxDepth: sdk.Int(842342),
                            MaxSteps: sdk.Int(131797),
                            RoboDirectives: []shared.RoboDirective{
                                shared.RoboDirective{
                                    ActionType: shared.RoboDirectiveActionTypeEnumEnterText.ToPointer(),
                                    InputText: sdk.String("quibusdam"),
                                    ResourceName: sdk.String("labore"),
                                },
                                shared.RoboDirective{
                                    ActionType: shared.RoboDirectiveActionTypeEnumSingleClick.ToPointer(),
                                    InputText: sdk.String("qui"),
                                    ResourceName: sdk.String("aliquid"),
                                },
                                shared.RoboDirective{
                                    ActionType: shared.RoboDirectiveActionTypeEnumEnterText.ToPointer(),
                                    InputText: sdk.String("quos"),
                                    ResourceName: sdk.String("perferendis"),
                                },
                            },
                            RoboMode: shared.AndroidRoboTestRoboModeEnumRoboModeUnspecified.ToPointer(),
                            RoboScript: &shared.FileReference{
                                GcsPath: sdk.String("assumenda"),
                            },
                            StartingIntents: []shared.RoboStartingIntent{
                                shared.RoboStartingIntent{
                                    LauncherActivity: map[string]interface{}{
                                        "fugit": "dolorum",
                                    },
                                    StartActivity: &shared.StartActivityIntent{
                                        Action: sdk.String("excepturi"),
                                        Categories: []string{
                                            "facilis",
                                            "tempore",
                                        },
                                        URI: sdk.String("http://which-honor.biz"),
                                    },
                                    Timeout: sdk.String("eligendi"),
                                },
                                shared.RoboStartingIntent{
                                    LauncherActivity: map[string]interface{}{
                                        "aliquid": "provident",
                                        "necessitatibus": "sint",
                                        "officia": "dolor",
                                    },
                                    StartActivity: &shared.StartActivityIntent{
                                        Action: sdk.String("debitis"),
                                        Categories: []string{
                                            "dolorum",
                                            "in",
                                            "in",
                                            "illum",
                                        },
                                        URI: sdk.String("https://right-burn.biz"),
                                    },
                                    Timeout: sdk.String("cumque"),
                                },
                            },
                        },
                        AndroidTestLoop: &shared.AndroidTestLoop{
                            AppApk: &shared.FileReference{
                                GcsPath: sdk.String("facere"),
                            },
                            AppBundle: &shared.AppBundle{
                                BundleLocation: &shared.FileReference{
                                    GcsPath: sdk.String("ea"),
                                },
                            },
                            AppPackageID: sdk.String("aliquid"),
                            ScenarioLabels: []string{
                                "accusamus",
                                "non",
                                "occaecati",
                            },
                            Scenarios: []int{
                                881736,
                                965417,
                            },
                        },
                        DisablePerformanceMetrics: sdk.Bool(false),
                        DisableVideoRecording: sdk.Bool(false),
                        IosTestLoop: &shared.IosTestLoop{
                            AppBundleID: sdk.String("quidem"),
                            AppIpa: &shared.FileReference{
                                GcsPath: sdk.String("provident"),
                            },
                            Scenarios: []int{
                                659669,
                                501324,
                                533206,
                            },
                        },
                        IosTestSetup: &shared.IosTestSetup{
                            AdditionalIpas: []shared.FileReference{
                                shared.FileReference{
                                    GcsPath: sdk.String("amet"),
                                },
                                shared.FileReference{
                                    GcsPath: sdk.String("deserunt"),
                                },
                                shared.FileReference{
                                    GcsPath: sdk.String("nisi"),
                                },
                                shared.FileReference{
                                    GcsPath: sdk.String("vel"),
                                },
                            },
                            NetworkProfile: sdk.String("natus"),
                            PullDirectories: []shared.IosDeviceFile{
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("molestiae"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("perferendis"),
                                    },
                                    DevicePath: sdk.String("nihil"),
                                },
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("magnam"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("distinctio"),
                                    },
                                    DevicePath: sdk.String("id"),
                                },
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("labore"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("labore"),
                                    },
                                    DevicePath: sdk.String("suscipit"),
                                },
                            },
                            PushFiles: []shared.IosDeviceFile{
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("nobis"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("eum"),
                                    },
                                    DevicePath: sdk.String("vero"),
                                },
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("aspernatur"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("architecto"),
                                    },
                                    DevicePath: sdk.String("magnam"),
                                },
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("et"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("excepturi"),
                                    },
                                    DevicePath: sdk.String("ullam"),
                                },
                            },
                        },
                        IosXcTest: &shared.IosXcTest{
                            AppBundleID: sdk.String("provident"),
                            TestSpecialEntitlements: sdk.Bool(false),
                            TestsZip: &shared.FileReference{
                                GcsPath: sdk.String("quos"),
                            },
                            XcodeVersion: sdk.String("sint"),
                            Xctestrun: &shared.FileReference{
                                GcsPath: sdk.String("accusantium"),
                            },
                        },
                        TestSetup: &shared.TestSetup{
                            Account: &shared.Account{
                                GoogleAuto: map[string]interface{}{
                                    "reiciendis": "mollitia",
                                    "ad": "eum",
                                    "dolor": "necessitatibus",
                                },
                            },
                            AdditionalApks: []shared.Apk{
                                shared.Apk{
                                    Location: &shared.FileReference{
                                        GcsPath: sdk.String("nemo"),
                                    },
                                    PackageName: sdk.String("quasi"),
                                },
                            },
                            DirectoriesToPull: []string{
                                "doloribus",
                                "debitis",
                            },
                            DontAutograntPermissions: sdk.Bool(false),
                            EnvironmentVariables: []shared.EnvironmentVariable{
                                shared.EnvironmentVariable{
                                    Key: sdk.String("maxime"),
                                    Value: sdk.String("deleniti"),
                                },
                                shared.EnvironmentVariable{
                                    Key: sdk.String("facilis"),
                                    Value: sdk.String("in"),
                                },
                            },
                            FilesToPush: []shared.DeviceFile{
                                shared.DeviceFile{
                                    ObbFile: &shared.ObbFile{
                                        Obb: &shared.FileReference{
                                            GcsPath: sdk.String("architecto"),
                                        },
                                        ObbFileName: sdk.String("repudiandae"),
                                    },
                                    RegularFile: &shared.RegularFile{
                                        Content: &shared.FileReference{
                                            GcsPath: sdk.String("ullam"),
                                        },
                                        DevicePath: sdk.String("expedita"),
                                    },
                                },
                            },
                            NetworkProfile: sdk.String("nihil"),
                            Systrace: &shared.SystraceSetup{
                                DurationSeconds: sdk.Int(998848),
                            },
                        },
                        TestTimeout: sdk.String("quibusdam"),
                    },
                    Timestamp: sdk.String("sed"),
                    ToolResultsStep: &shared.ToolResultsStep{
                        ExecutionID: sdk.String("saepe"),
                        HistoryID: sdk.String("pariatur"),
                        ProjectID: sdk.String("accusantium"),
                        StepID: sdk.String("consequuntur"),
                    },
                },
                shared.TestExecution{
                    Environment: &shared.Environment{
                        AndroidDevice: &shared.AndroidDevice{
                            AndroidModelID: sdk.String("praesentium"),
                            AndroidVersionID: sdk.String("natus"),
                            Locale: sdk.String("magni"),
                            Orientation: sdk.String("sunt"),
                        },
                        IosDevice: &shared.IosDevice{
                            IosModelID: sdk.String("quo"),
                            IosVersionID: sdk.String("illum"),
                            Locale: sdk.String("pariatur"),
                            Orientation: sdk.String("maxime"),
                        },
                    },
                    ID: sdk.String("692601fb-576b-40d5-b0d3-0c5fbb258705"),
                    MatrixID: sdk.String("nesciunt"),
                    ProjectID: sdk.String("eos"),
                    Shard: &shared.Shard{
                        NumShards: sdk.Int(18521),
                        ShardIndex: sdk.Int(170986),
                        TestTargetsForShard: &shared.TestTargetsForShard{
                            TestTargets: []string{
                                "quam",
                                "dolor",
                                "vero",
                                "nostrum",
                            },
                        },
                    },
                    State: shared.TestExecutionStateEnumInvalid.ToPointer(),
                    TestDetails: &shared.TestDetails{
                        ErrorMessage: sdk.String("recusandae"),
                        ProgressMessages: []string{
                            "facilis",
                            "perspiciatis",
                            "voluptatem",
                        },
                    },
                    TestSpecification: &shared.TestSpecification{
                        AndroidInstrumentationTest: &shared.AndroidInstrumentationTest{
                            AppApk: &shared.FileReference{
                                GcsPath: sdk.String("porro"),
                            },
                            AppBundle: &shared.AppBundle{
                                BundleLocation: &shared.FileReference{
                                    GcsPath: sdk.String("consequuntur"),
                                },
                            },
                            AppPackageID: sdk.String("blanditiis"),
                            OrchestratorOption: shared.AndroidInstrumentationTestOrchestratorOptionEnumUseOrchestrator.ToPointer(),
                            ShardingOption: &shared.ShardingOption{
                                ManualSharding: &shared.ManualSharding{
                                    TestTargetsForShard: []shared.TestTargetsForShard{
                                        shared.TestTargetsForShard{
                                            TestTargets: []string{
                                                "rerum",
                                                "adipisci",
                                                "asperiores",
                                            },
                                        },
                                    },
                                },
                                SmartSharding: &shared.SmartSharding{
                                    TargetedShardDuration: sdk.String("earum"),
                                },
                                UniformSharding: &shared.UniformSharding{
                                    NumShards: sdk.Int(267262),
                                },
                            },
                            TestApk: &shared.FileReference{
                                GcsPath: sdk.String("iste"),
                            },
                            TestPackageID: sdk.String("dolorum"),
                            TestRunnerClass: sdk.String("deleniti"),
                            TestTargets: []string{
                                "provident",
                                "nobis",
                                "libero",
                                "delectus",
                            },
                        },
                        AndroidRoboTest: &shared.AndroidRoboTest{
                            AppApk: &shared.FileReference{
                                GcsPath: sdk.String("quaerat"),
                            },
                            AppBundle: &shared.AppBundle{
                                BundleLocation: &shared.FileReference{
                                    GcsPath: sdk.String("quos"),
                                },
                            },
                            AppInitialActivity: sdk.String("aliquid"),
                            AppPackageID: sdk.String("dolorem"),
                            MaxDepth: sdk.Int(209843),
                            MaxSteps: sdk.Int(222443),
                            RoboDirectives: []shared.RoboDirective{
                                shared.RoboDirective{
                                    ActionType: shared.RoboDirectiveActionTypeEnumActionTypeUnspecified.ToPointer(),
                                    InputText: sdk.String("hic"),
                                    ResourceName: sdk.String("excepturi"),
                                },
                            },
                            RoboMode: shared.AndroidRoboTestRoboModeEnumRoboVersion2.ToPointer(),
                            RoboScript: &shared.FileReference{
                                GcsPath: sdk.String("voluptate"),
                            },
                            StartingIntents: []shared.RoboStartingIntent{
                                shared.RoboStartingIntent{
                                    LauncherActivity: map[string]interface{}{
                                        "amet": "dolorum",
                                        "numquam": "veritatis",
                                        "ipsa": "ipsa",
                                        "iure": "odio",
                                    },
                                    StartActivity: &shared.StartActivityIntent{
                                        Action: sdk.String("quaerat"),
                                        Categories: []string{
                                            "quidem",
                                            "voluptatibus",
                                            "voluptas",
                                            "natus",
                                        },
                                        URI: sdk.String("http://monstrous-ambassador.org"),
                                    },
                                    Timeout: sdk.String("ab"),
                                },
                                shared.RoboStartingIntent{
                                    LauncherActivity: map[string]interface{}{
                                        "dolorum": "iusto",
                                        "voluptate": "dolorum",
                                        "deleniti": "omnis",
                                    },
                                    StartActivity: &shared.StartActivityIntent{
                                        Action: sdk.String("necessitatibus"),
                                        Categories: []string{
                                            "asperiores",
                                            "nihil",
                                            "ipsum",
                                        },
                                        URI: sdk.String("http://pushy-ticket.biz"),
                                    },
                                    Timeout: sdk.String("aspernatur"),
                                },
                            },
                        },
                        AndroidTestLoop: &shared.AndroidTestLoop{
                            AppApk: &shared.FileReference{
                                GcsPath: sdk.String("perferendis"),
                            },
                            AppBundle: &shared.AppBundle{
                                BundleLocation: &shared.FileReference{
                                    GcsPath: sdk.String("amet"),
                                },
                            },
                            AppPackageID: sdk.String("optio"),
                            ScenarioLabels: []string{
                                "ad",
                                "saepe",
                                "suscipit",
                                "deserunt",
                            },
                            Scenarios: []int{
                                324683,
                                831049,
                                519711,
                            },
                        },
                        DisablePerformanceMetrics: sdk.Bool(false),
                        DisableVideoRecording: sdk.Bool(false),
                        IosTestLoop: &shared.IosTestLoop{
                            AppBundleID: sdk.String("similique"),
                            AppIpa: &shared.FileReference{
                                GcsPath: sdk.String("alias"),
                            },
                            Scenarios: []int{
                                311860,
                                273542,
                                425451,
                                798047,
                            },
                        },
                        IosTestSetup: &shared.IosTestSetup{
                            AdditionalIpas: []shared.FileReference{
                                shared.FileReference{
                                    GcsPath: sdk.String("qui"),
                                },
                                shared.FileReference{
                                    GcsPath: sdk.String("dolorum"),
                                },
                                shared.FileReference{
                                    GcsPath: sdk.String("a"),
                                },
                                shared.FileReference{
                                    GcsPath: sdk.String("esse"),
                                },
                            },
                            NetworkProfile: sdk.String("harum"),
                            PullDirectories: []shared.IosDeviceFile{
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("ipsum"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("quisquam"),
                                    },
                                    DevicePath: sdk.String("tenetur"),
                                },
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("amet"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("tempore"),
                                    },
                                    DevicePath: sdk.String("accusamus"),
                                },
                            },
                            PushFiles: []shared.IosDeviceFile{
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("enim"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("dolorem"),
                                    },
                                    DevicePath: sdk.String("sapiente"),
                                },
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("totam"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("nihil"),
                                    },
                                    DevicePath: sdk.String("sit"),
                                },
                            },
                        },
                        IosXcTest: &shared.IosXcTest{
                            AppBundleID: sdk.String("expedita"),
                            TestSpecialEntitlements: sdk.Bool(false),
                            TestsZip: &shared.FileReference{
                                GcsPath: sdk.String("neque"),
                            },
                            XcodeVersion: sdk.String("sed"),
                            Xctestrun: &shared.FileReference{
                                GcsPath: sdk.String("vel"),
                            },
                        },
                        TestSetup: &shared.TestSetup{
                            Account: &shared.Account{
                                GoogleAuto: map[string]interface{}{
                                    "voluptas": "deserunt",
                                    "quam": "ipsum",
                                    "incidunt": "qui",
                                },
                            },
                            AdditionalApks: []shared.Apk{
                                shared.Apk{
                                    Location: &shared.FileReference{
                                        GcsPath: sdk.String("maxime"),
                                    },
                                    PackageName: sdk.String("pariatur"),
                                },
                                shared.Apk{
                                    Location: &shared.FileReference{
                                        GcsPath: sdk.String("soluta"),
                                    },
                                    PackageName: sdk.String("dicta"),
                                },
                                shared.Apk{
                                    Location: &shared.FileReference{
                                        GcsPath: sdk.String("laborum"),
                                    },
                                    PackageName: sdk.String("totam"),
                                },
                            },
                            DirectoriesToPull: []string{
                                "aspernatur",
                                "dolores",
                            },
                            DontAutograntPermissions: sdk.Bool(false),
                            EnvironmentVariables: []shared.EnvironmentVariable{
                                shared.EnvironmentVariable{
                                    Key: sdk.String("facilis"),
                                    Value: sdk.String("aliquid"),
                                },
                                shared.EnvironmentVariable{
                                    Key: sdk.String("quam"),
                                    Value: sdk.String("molestias"),
                                },
                                shared.EnvironmentVariable{
                                    Key: sdk.String("temporibus"),
                                    Value: sdk.String("qui"),
                                },
                            },
                            FilesToPush: []shared.DeviceFile{
                                shared.DeviceFile{
                                    ObbFile: &shared.ObbFile{
                                        Obb: &shared.FileReference{
                                            GcsPath: sdk.String("fugit"),
                                        },
                                        ObbFileName: sdk.String("magni"),
                                    },
                                    RegularFile: &shared.RegularFile{
                                        Content: &shared.FileReference{
                                            GcsPath: sdk.String("odio"),
                                        },
                                        DevicePath: sdk.String("sunt"),
                                    },
                                },
                            },
                            NetworkProfile: sdk.String("ullam"),
                            Systrace: &shared.SystraceSetup{
                                DurationSeconds: sdk.Int(722081),
                            },
                        },
                        TestTimeout: sdk.String("hic"),
                    },
                    Timestamp: sdk.String("voluptatem"),
                    ToolResultsStep: &shared.ToolResultsStep{
                        ExecutionID: sdk.String("cumque"),
                        HistoryID: sdk.String("soluta"),
                        ProjectID: sdk.String("nobis"),
                        StepID: sdk.String("et"),
                    },
                },
                shared.TestExecution{
                    Environment: &shared.Environment{
                        AndroidDevice: &shared.AndroidDevice{
                            AndroidModelID: sdk.String("saepe"),
                            AndroidVersionID: sdk.String("ipsum"),
                            Locale: sdk.String("veritatis"),
                            Orientation: sdk.String("nobis"),
                        },
                        IosDevice: &shared.IosDevice{
                            IosModelID: sdk.String("quos"),
                            IosVersionID: sdk.String("tempore"),
                            Locale: sdk.String("cupiditate"),
                            Orientation: sdk.String("aperiam"),
                        },
                    },
                    ID: sdk.String("f3443a11-08e0-4adc-b4b9-21879fce953f"),
                    MatrixID: sdk.String("voluptate"),
                    ProjectID: sdk.String("consectetur"),
                    Shard: &shared.Shard{
                        NumShards: sdk.Int(878870),
                        ShardIndex: sdk.Int(949319),
                        TestTargetsForShard: &shared.TestTargetsForShard{
                            TestTargets: []string{
                                "hic",
                                "distinctio",
                            },
                        },
                    },
                    State: shared.TestExecutionStateEnumIncompatibleArchitecture.ToPointer(),
                    TestDetails: &shared.TestDetails{
                        ErrorMessage: sdk.String("odio"),
                        ProgressMessages: []string{
                            "facilis",
                            "vero",
                            "ducimus",
                        },
                    },
                    TestSpecification: &shared.TestSpecification{
                        AndroidInstrumentationTest: &shared.AndroidInstrumentationTest{
                            AppApk: &shared.FileReference{
                                GcsPath: sdk.String("dolore"),
                            },
                            AppBundle: &shared.AppBundle{
                                BundleLocation: &shared.FileReference{
                                    GcsPath: sdk.String("quibusdam"),
                                },
                            },
                            AppPackageID: sdk.String("illum"),
                            OrchestratorOption: shared.AndroidInstrumentationTestOrchestratorOptionEnumOrchestratorOptionUnspecified.ToPointer(),
                            ShardingOption: &shared.ShardingOption{
                                ManualSharding: &shared.ManualSharding{
                                    TestTargetsForShard: []shared.TestTargetsForShard{
                                        shared.TestTargetsForShard{
                                            TestTargets: []string{
                                                "aut",
                                                "voluptatibus",
                                                "exercitationem",
                                                "nulla",
                                            },
                                        },
                                        shared.TestTargetsForShard{
                                            TestTargets: []string{
                                                "porro",
                                            },
                                        },
                                        shared.TestTargetsForShard{
                                            TestTargets: []string{
                                                "doloribus",
                                                "iusto",
                                                "eligendi",
                                                "ducimus",
                                            },
                                        },
                                    },
                                },
                                SmartSharding: &shared.SmartSharding{
                                    TargetedShardDuration: sdk.String("alias"),
                                },
                                UniformSharding: &shared.UniformSharding{
                                    NumShards: sdk.Int(639473),
                                },
                            },
                            TestApk: &shared.FileReference{
                                GcsPath: sdk.String("tempora"),
                            },
                            TestPackageID: sdk.String("ipsam"),
                            TestRunnerClass: sdk.String("ea"),
                            TestTargets: []string{
                                "vel",
                            },
                        },
                        AndroidRoboTest: &shared.AndroidRoboTest{
                            AppApk: &shared.FileReference{
                                GcsPath: sdk.String("possimus"),
                            },
                            AppBundle: &shared.AppBundle{
                                BundleLocation: &shared.FileReference{
                                    GcsPath: sdk.String("magnam"),
                                },
                            },
                            AppInitialActivity: sdk.String("ratione"),
                            AppPackageID: sdk.String("ex"),
                            MaxDepth: sdk.Int(511319),
                            MaxSteps: sdk.Int(120657),
                            RoboDirectives: []shared.RoboDirective{
                                shared.RoboDirective{
                                    ActionType: shared.RoboDirectiveActionTypeEnumIgnore.ToPointer(),
                                    InputText: sdk.String("quasi"),
                                    ResourceName: sdk.String("ex"),
                                },
                            },
                            RoboMode: shared.AndroidRoboTestRoboModeEnumRoboVersion2.ToPointer(),
                            RoboScript: &shared.FileReference{
                                GcsPath: sdk.String("excepturi"),
                            },
                            StartingIntents: []shared.RoboStartingIntent{
                                shared.RoboStartingIntent{
                                    LauncherActivity: map[string]interface{}{
                                        "sapiente": "quisquam",
                                        "saepe": "ea",
                                    },
                                    StartActivity: &shared.StartActivityIntent{
                                        Action: sdk.String("impedit"),
                                        Categories: []string{
                                            "veniam",
                                            "aliquid",
                                        },
                                        URI: sdk.String("http://forsaken-gyro.net"),
                                    },
                                    Timeout: sdk.String("consectetur"),
                                },
                                shared.RoboStartingIntent{
                                    LauncherActivity: map[string]interface{}{
                                        "aspernatur": "minima",
                                        "eaque": "a",
                                        "libero": "aut",
                                        "aut": "deleniti",
                                    },
                                    StartActivity: &shared.StartActivityIntent{
                                        Action: sdk.String("impedit"),
                                        Categories: []string{
                                            "fugit",
                                            "accusamus",
                                        },
                                        URI: sdk.String("http://exhausted-bloom.net"),
                                    },
                                    Timeout: sdk.String("laborum"),
                                },
                                shared.RoboStartingIntent{
                                    LauncherActivity: map[string]interface{}{
                                        "velit": "eum",
                                        "autem": "nobis",
                                        "quas": "assumenda",
                                        "nulla": "voluptas",
                                    },
                                    StartActivity: &shared.StartActivityIntent{
                                        Action: sdk.String("libero"),
                                        Categories: []string{
                                            "tempora",
                                        },
                                        URI: sdk.String("http://compassionate-network.com"),
                                    },
                                    Timeout: sdk.String("molestiae"),
                                },
                                shared.RoboStartingIntent{
                                    LauncherActivity: map[string]interface{}{
                                        "odio": "eius",
                                        "esse": "esse",
                                    },
                                    StartActivity: &shared.StartActivityIntent{
                                        Action: sdk.String("rem"),
                                        Categories: []string{
                                            "reprehenderit",
                                            "quidem",
                                            "fugiat",
                                        },
                                        URI: sdk.String("http://infantile-geek.net"),
                                    },
                                    Timeout: sdk.String("eos"),
                                },
                            },
                        },
                        AndroidTestLoop: &shared.AndroidTestLoop{
                            AppApk: &shared.FileReference{
                                GcsPath: sdk.String("praesentium"),
                            },
                            AppBundle: &shared.AppBundle{
                                BundleLocation: &shared.FileReference{
                                    GcsPath: sdk.String("quisquam"),
                                },
                            },
                            AppPackageID: sdk.String("veritatis"),
                            ScenarioLabels: []string{
                                "id",
                            },
                            Scenarios: []int{
                                206594,
                                778696,
                                847276,
                            },
                        },
                        DisablePerformanceMetrics: sdk.Bool(false),
                        DisableVideoRecording: sdk.Bool(false),
                        IosTestLoop: &shared.IosTestLoop{
                            AppBundleID: sdk.String("quo"),
                            AppIpa: &shared.FileReference{
                                GcsPath: sdk.String("fuga"),
                            },
                            Scenarios: []int{
                                178367,
                                373813,
                            },
                        },
                        IosTestSetup: &shared.IosTestSetup{
                            AdditionalIpas: []shared.FileReference{
                                shared.FileReference{
                                    GcsPath: sdk.String("cupiditate"),
                                },
                            },
                            NetworkProfile: sdk.String("consequatur"),
                            PullDirectories: []shared.IosDeviceFile{
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("debitis"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("ipsam"),
                                    },
                                    DevicePath: sdk.String("aspernatur"),
                                },
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("sequi"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("quo"),
                                    },
                                    DevicePath: sdk.String("esse"),
                                },
                            },
                            PushFiles: []shared.IosDeviceFile{
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("aperiam"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("distinctio"),
                                    },
                                    DevicePath: sdk.String("quod"),
                                },
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("dignissimos"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("inventore"),
                                    },
                                    DevicePath: sdk.String("nihil"),
                                },
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("totam"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("accusamus"),
                                    },
                                    DevicePath: sdk.String("aliquam"),
                                },
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("odio"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("occaecati"),
                                    },
                                    DevicePath: sdk.String("commodi"),
                                },
                            },
                        },
                        IosXcTest: &shared.IosXcTest{
                            AppBundleID: sdk.String("sapiente"),
                            TestSpecialEntitlements: sdk.Bool(false),
                            TestsZip: &shared.FileReference{
                                GcsPath: sdk.String("dolores"),
                            },
                            XcodeVersion: sdk.String("deserunt"),
                            Xctestrun: &shared.FileReference{
                                GcsPath: sdk.String("molestiae"),
                            },
                        },
                        TestSetup: &shared.TestSetup{
                            Account: &shared.Account{
                                GoogleAuto: map[string]interface{}{
                                    "porro": "eum",
                                },
                            },
                            AdditionalApks: []shared.Apk{
                                shared.Apk{
                                    Location: &shared.FileReference{
                                        GcsPath: sdk.String("praesentium"),
                                    },
                                    PackageName: sdk.String("consequuntur"),
                                },
                                shared.Apk{
                                    Location: &shared.FileReference{
                                        GcsPath: sdk.String("deleniti"),
                                    },
                                    PackageName: sdk.String("fugit"),
                                },
                                shared.Apk{
                                    Location: &shared.FileReference{
                                        GcsPath: sdk.String("fuga"),
                                    },
                                    PackageName: sdk.String("mollitia"),
                                },
                            },
                            DirectoriesToPull: []string{
                                "atque",
                                "explicabo",
                            },
                            DontAutograntPermissions: sdk.Bool(false),
                            EnvironmentVariables: []shared.EnvironmentVariable{
                                shared.EnvironmentVariable{
                                    Key: sdk.String("nisi"),
                                    Value: sdk.String("fugit"),
                                },
                                shared.EnvironmentVariable{
                                    Key: sdk.String("sapiente"),
                                    Value: sdk.String("consequuntur"),
                                },
                            },
                            FilesToPush: []shared.DeviceFile{
                                shared.DeviceFile{
                                    ObbFile: &shared.ObbFile{
                                        Obb: &shared.FileReference{
                                            GcsPath: sdk.String("explicabo"),
                                        },
                                        ObbFileName: sdk.String("saepe"),
                                    },
                                    RegularFile: &shared.RegularFile{
                                        Content: &shared.FileReference{
                                            GcsPath: sdk.String("occaecati"),
                                        },
                                        DevicePath: sdk.String("atque"),
                                    },
                                },
                            },
                            NetworkProfile: sdk.String("et"),
                            Systrace: &shared.SystraceSetup{
                                DurationSeconds: sdk.Int(456911),
                            },
                        },
                        TestTimeout: sdk.String("eveniet"),
                    },
                    Timestamp: sdk.String("accusamus"),
                    ToolResultsStep: &shared.ToolResultsStep{
                        ExecutionID: sdk.String("veritatis"),
                        HistoryID: sdk.String("esse"),
                        ProjectID: sdk.String("quod"),
                        StepID: sdk.String("nam"),
                    },
                },
                shared.TestExecution{
                    Environment: &shared.Environment{
                        AndroidDevice: &shared.AndroidDevice{
                            AndroidModelID: sdk.String("vero"),
                            AndroidVersionID: sdk.String("aliquid"),
                            Locale: sdk.String("quasi"),
                            Orientation: sdk.String("saepe"),
                        },
                        IosDevice: &shared.IosDevice{
                            IosModelID: sdk.String("vel"),
                            IosVersionID: sdk.String("harum"),
                            Locale: sdk.String("molestiae"),
                            Orientation: sdk.String("rerum"),
                        },
                    },
                    ID: sdk.String("95bc0ab3-c20c-44f3-b89f-d871f99dd2ef"),
                    MatrixID: sdk.String("facere"),
                    ProjectID: sdk.String("veritatis"),
                    Shard: &shared.Shard{
                        NumShards: sdk.Int(159414),
                        ShardIndex: sdk.Int(94458),
                        TestTargetsForShard: &shared.TestTargetsForShard{
                            TestTargets: []string{
                                "culpa",
                                "aliquid",
                                "tenetur",
                            },
                        },
                    },
                    State: shared.TestExecutionStateEnumTestStateUnspecified.ToPointer(),
                    TestDetails: &shared.TestDetails{
                        ErrorMessage: sdk.String("earum"),
                        ProgressMessages: []string{
                            "in",
                            "eius",
                        },
                    },
                    TestSpecification: &shared.TestSpecification{
                        AndroidInstrumentationTest: &shared.AndroidInstrumentationTest{
                            AppApk: &shared.FileReference{
                                GcsPath: sdk.String("libero"),
                            },
                            AppBundle: &shared.AppBundle{
                                BundleLocation: &shared.FileReference{
                                    GcsPath: sdk.String("illum"),
                                },
                            },
                            AppPackageID: sdk.String("soluta"),
                            OrchestratorOption: shared.AndroidInstrumentationTestOrchestratorOptionEnumOrchestratorOptionUnspecified.ToPointer(),
                            ShardingOption: &shared.ShardingOption{
                                ManualSharding: &shared.ManualSharding{
                                    TestTargetsForShard: []shared.TestTargetsForShard{
                                        shared.TestTargetsForShard{
                                            TestTargets: []string{
                                                "dicta",
                                                "ullam",
                                                "reprehenderit",
                                                "ullam",
                                            },
                                        },
                                        shared.TestTargetsForShard{
                                            TestTargets: []string{
                                                "aut",
                                                "voluptatum",
                                            },
                                        },
                                    },
                                },
                                SmartSharding: &shared.SmartSharding{
                                    TargetedShardDuration: sdk.String("qui"),
                                },
                                UniformSharding: &shared.UniformSharding{
                                    NumShards: sdk.Int(845358),
                                },
                            },
                            TestApk: &shared.FileReference{
                                GcsPath: sdk.String("ex"),
                            },
                            TestPackageID: sdk.String("deleniti"),
                            TestRunnerClass: sdk.String("itaque"),
                            TestTargets: []string{
                                "architecto",
                                "omnis",
                                "tenetur",
                            },
                        },
                        AndroidRoboTest: &shared.AndroidRoboTest{
                            AppApk: &shared.FileReference{
                                GcsPath: sdk.String("quasi"),
                            },
                            AppBundle: &shared.AppBundle{
                                BundleLocation: &shared.FileReference{
                                    GcsPath: sdk.String("at"),
                                },
                            },
                            AppInitialActivity: sdk.String("et"),
                            AppPackageID: sdk.String("voluptate"),
                            MaxDepth: sdk.Int(55965),
                            MaxSteps: sdk.Int(326701),
                            RoboDirectives: []shared.RoboDirective{
                                shared.RoboDirective{
                                    ActionType: shared.RoboDirectiveActionTypeEnumActionTypeUnspecified.ToPointer(),
                                    InputText: sdk.String("adipisci"),
                                    ResourceName: sdk.String("iste"),
                                },
                            },
                            RoboMode: shared.AndroidRoboTestRoboModeEnumRoboVersion2.ToPointer(),
                            RoboScript: &shared.FileReference{
                                GcsPath: sdk.String("accusantium"),
                            },
                            StartingIntents: []shared.RoboStartingIntent{
                                shared.RoboStartingIntent{
                                    LauncherActivity: map[string]interface{}{
                                        "laudantium": "eum",
                                    },
                                    StartActivity: &shared.StartActivityIntent{
                                        Action: sdk.String("mollitia"),
                                        Categories: []string{
                                            "corrupti",
                                        },
                                        URI: sdk.String("http://anchored-credibility.name"),
                                    },
                                    Timeout: sdk.String("numquam"),
                                },
                                shared.RoboStartingIntent{
                                    LauncherActivity: map[string]interface{}{
                                        "explicabo": "voluptas",
                                        "aut": "dignissimos",
                                        "dicta": "maiores",
                                        "natus": "velit",
                                    },
                                    StartActivity: &shared.StartActivityIntent{
                                        Action: sdk.String("voluptatibus"),
                                        Categories: []string{
                                            "asperiores",
                                            "aperiam",
                                        },
                                        URI: sdk.String("http://friendly-circumstance.net"),
                                    },
                                    Timeout: sdk.String("officia"),
                                },
                                shared.RoboStartingIntent{
                                    LauncherActivity: map[string]interface{}{
                                        "dignissimos": "officia",
                                        "asperiores": "nemo",
                                        "quae": "quaerat",
                                        "porro": "quod",
                                    },
                                    StartActivity: &shared.StartActivityIntent{
                                        Action: sdk.String("labore"),
                                        Categories: []string{
                                            "adipisci",
                                        },
                                        URI: sdk.String("https://pushy-gender.biz"),
                                    },
                                    Timeout: sdk.String("culpa"),
                                },
                            },
                        },
                        AndroidTestLoop: &shared.AndroidTestLoop{
                            AppApk: &shared.FileReference{
                                GcsPath: sdk.String("est"),
                            },
                            AppBundle: &shared.AppBundle{
                                BundleLocation: &shared.FileReference{
                                    GcsPath: sdk.String("recusandae"),
                                },
                            },
                            AppPackageID: sdk.String("totam"),
                            ScenarioLabels: []string{
                                "vel",
                                "ducimus",
                                "quos",
                                "vel",
                            },
                            Scenarios: []int{
                                822560,
                                706575,
                            },
                        },
                        DisablePerformanceMetrics: sdk.Bool(false),
                        DisableVideoRecording: sdk.Bool(false),
                        IosTestLoop: &shared.IosTestLoop{
                            AppBundleID: sdk.String("cum"),
                            AppIpa: &shared.FileReference{
                                GcsPath: sdk.String("commodi"),
                            },
                            Scenarios: []int{
                                360545,
                                968904,
                            },
                        },
                        IosTestSetup: &shared.IosTestSetup{
                            AdditionalIpas: []shared.FileReference{
                                shared.FileReference{
                                    GcsPath: sdk.String("nemo"),
                                },
                                shared.FileReference{
                                    GcsPath: sdk.String("recusandae"),
                                },
                                shared.FileReference{
                                    GcsPath: sdk.String("aliquid"),
                                },
                                shared.FileReference{
                                    GcsPath: sdk.String("aperiam"),
                                },
                            },
                            NetworkProfile: sdk.String("cum"),
                            PullDirectories: []shared.IosDeviceFile{
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("in"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("exercitationem"),
                                    },
                                    DevicePath: sdk.String("earum"),
                                },
                            },
                            PushFiles: []shared.IosDeviceFile{
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("numquam"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("doloribus"),
                                    },
                                    DevicePath: sdk.String("suscipit"),
                                },
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("reiciendis"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("quidem"),
                                    },
                                    DevicePath: sdk.String("saepe"),
                                },
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("necessitatibus"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("dolore"),
                                    },
                                    DevicePath: sdk.String("sunt"),
                                },
                                shared.IosDeviceFile{
                                    BundleID: sdk.String("asperiores"),
                                    Content: &shared.FileReference{
                                        GcsPath: sdk.String("adipisci"),
                                    },
                                    DevicePath: sdk.String("non"),
                                },
                            },
                        },
                        IosXcTest: &shared.IosXcTest{
                            AppBundleID: sdk.String("amet"),
                            TestSpecialEntitlements: sdk.Bool(false),
                            TestsZip: &shared.FileReference{
                                GcsPath: sdk.String("beatae"),
                            },
                            XcodeVersion: sdk.String("dignissimos"),
                            Xctestrun: &shared.FileReference{
                                GcsPath: sdk.String("a"),
                            },
                        },
                        TestSetup: &shared.TestSetup{
                            Account: &shared.Account{
                                GoogleAuto: map[string]interface{}{
                                    "consectetur": "corporis",
                                    "harum": "laboriosam",
                                    "ipsa": "voluptates",
                                    "libero": "vitae",
                                },
                            },
                            AdditionalApks: []shared.Apk{
                                shared.Apk{
                                    Location: &shared.FileReference{
                                        GcsPath: sdk.String("similique"),
                                    },
                                    PackageName: sdk.String("tempora"),
                                },
                                shared.Apk{
                                    Location: &shared.FileReference{
                                        GcsPath: sdk.String("aspernatur"),
                                    },
                                    PackageName: sdk.String("voluptas"),
                                },
                                shared.Apk{
                                    Location: &shared.FileReference{
                                        GcsPath: sdk.String("voluptas"),
                                    },
                                    PackageName: sdk.String("voluptas"),
                                },
                                shared.Apk{
                                    Location: &shared.FileReference{
                                        GcsPath: sdk.String("minima"),
                                    },
                                    PackageName: sdk.String("nobis"),
                                },
                            },
                            DirectoriesToPull: []string{
                                "adipisci",
                                "minus",
                                "dolores",
                            },
                            DontAutograntPermissions: sdk.Bool(false),
                            EnvironmentVariables: []shared.EnvironmentVariable{
                                shared.EnvironmentVariable{
                                    Key: sdk.String("in"),
                                    Value: sdk.String("dolore"),
                                },
                                shared.EnvironmentVariable{
                                    Key: sdk.String("aliquam"),
                                    Value: sdk.String("officiis"),
                                },
                                shared.EnvironmentVariable{
                                    Key: sdk.String("temporibus"),
                                    Value: sdk.String("ullam"),
                                },
                            },
                            FilesToPush: []shared.DeviceFile{
                                shared.DeviceFile{
                                    ObbFile: &shared.ObbFile{
                                        Obb: &shared.FileReference{
                                            GcsPath: sdk.String("cum"),
                                        },
                                        ObbFileName: sdk.String("blanditiis"),
                                    },
                                    RegularFile: &shared.RegularFile{
                                        Content: &shared.FileReference{
                                            GcsPath: sdk.String("quas"),
                                        },
                                        DevicePath: sdk.String("hic"),
                                    },
                                },
                            },
                            NetworkProfile: sdk.String("nesciunt"),
                            Systrace: &shared.SystraceSetup{
                                DurationSeconds: sdk.Int(633998),
                            },
                        },
                        TestTimeout: sdk.String("corrupti"),
                    },
                    Timestamp: sdk.String("pariatur"),
                    ToolResultsStep: &shared.ToolResultsStep{
                        ExecutionID: sdk.String("totam"),
                        HistoryID: sdk.String("hic"),
                        ProjectID: sdk.String("exercitationem"),
                        StepID: sdk.String("nobis"),
                    },
                },
            },
            TestMatrixID: sdk.String("sit"),
            TestSpecification: &shared.TestSpecification{
                AndroidInstrumentationTest: &shared.AndroidInstrumentationTest{
                    AppApk: &shared.FileReference{
                        GcsPath: sdk.String("rerum"),
                    },
                    AppBundle: &shared.AppBundle{
                        BundleLocation: &shared.FileReference{
                            GcsPath: sdk.String("sed"),
                        },
                    },
                    AppPackageID: sdk.String("reiciendis"),
                    OrchestratorOption: shared.AndroidInstrumentationTestOrchestratorOptionEnumOrchestratorOptionUnspecified.ToPointer(),
                    ShardingOption: &shared.ShardingOption{
                        ManualSharding: &shared.ManualSharding{
                            TestTargetsForShard: []shared.TestTargetsForShard{
                                shared.TestTargetsForShard{
                                    TestTargets: []string{
                                        "voluptate",
                                        "expedita",
                                        "ab",
                                    },
                                },
                                shared.TestTargetsForShard{
                                    TestTargets: []string{
                                        "dolore",
                                        "laborum",
                                        "sed",
                                    },
                                },
                                shared.TestTargetsForShard{
                                    TestTargets: []string{
                                        "commodi",
                                        "quidem",
                                    },
                                },
                                shared.TestTargetsForShard{
                                    TestTargets: []string{
                                        "voluptas",
                                    },
                                },
                            },
                        },
                        SmartSharding: &shared.SmartSharding{
                            TargetedShardDuration: sdk.String("unde"),
                        },
                        UniformSharding: &shared.UniformSharding{
                            NumShards: sdk.Int(100032),
                        },
                    },
                    TestApk: &shared.FileReference{
                        GcsPath: sdk.String("suscipit"),
                    },
                    TestPackageID: sdk.String("sapiente"),
                    TestRunnerClass: sdk.String("debitis"),
                    TestTargets: []string{
                        "reiciendis",
                    },
                },
                AndroidRoboTest: &shared.AndroidRoboTest{
                    AppApk: &shared.FileReference{
                        GcsPath: sdk.String("perferendis"),
                    },
                    AppBundle: &shared.AppBundle{
                        BundleLocation: &shared.FileReference{
                            GcsPath: sdk.String("corrupti"),
                        },
                    },
                    AppInitialActivity: sdk.String("maiores"),
                    AppPackageID: sdk.String("incidunt"),
                    MaxDepth: sdk.Int(148478),
                    MaxSteps: sdk.Int(592231),
                    RoboDirectives: []shared.RoboDirective{
                        shared.RoboDirective{
                            ActionType: shared.RoboDirectiveActionTypeEnumIgnore.ToPointer(),
                            InputText: sdk.String("ipsum"),
                            ResourceName: sdk.String("ea"),
                        },
                        shared.RoboDirective{
                            ActionType: shared.RoboDirectiveActionTypeEnumEnterText.ToPointer(),
                            InputText: sdk.String("quos"),
                            ResourceName: sdk.String("voluptatibus"),
                        },
                    },
                    RoboMode: shared.AndroidRoboTestRoboModeEnumRoboModeUnspecified.ToPointer(),
                    RoboScript: &shared.FileReference{
                        GcsPath: sdk.String("tempora"),
                    },
                    StartingIntents: []shared.RoboStartingIntent{
                        shared.RoboStartingIntent{
                            LauncherActivity: map[string]interface{}{
                                "ex": "sit",
                                "non": "officiis",
                                "praesentium": "facilis",
                                "quaerat": "incidunt",
                            },
                            StartActivity: &shared.StartActivityIntent{
                                Action: sdk.String("ipsam"),
                                Categories: []string{
                                    "rem",
                                    "sit",
                                    "nobis",
                                    "error",
                                },
                                URI: sdk.String("http://gigantic-transom.org"),
                            },
                            Timeout: sdk.String("nulla"),
                        },
                        shared.RoboStartingIntent{
                            LauncherActivity: map[string]interface{}{
                                "aperiam": "saepe",
                            },
                            StartActivity: &shared.StartActivityIntent{
                                Action: sdk.String("numquam"),
                                Categories: []string{
                                    "in",
                                    "officiis",
                                },
                                URI: sdk.String("http://magnificent-fishbone.name"),
                            },
                            Timeout: sdk.String("cum"),
                        },
                    },
                },
                AndroidTestLoop: &shared.AndroidTestLoop{
                    AppApk: &shared.FileReference{
                        GcsPath: sdk.String("laboriosam"),
                    },
                    AppBundle: &shared.AppBundle{
                        BundleLocation: &shared.FileReference{
                            GcsPath: sdk.String("dolorum"),
                        },
                    },
                    AppPackageID: sdk.String("voluptatum"),
                    ScenarioLabels: []string{
                        "hic",
                        "expedita",
                        "debitis",
                    },
                    Scenarios: []int{
                        677115,
                    },
                },
                DisablePerformanceMetrics: sdk.Bool(false),
                DisableVideoRecording: sdk.Bool(false),
                IosTestLoop: &shared.IosTestLoop{
                    AppBundleID: sdk.String("nostrum"),
                    AppIpa: &shared.FileReference{
                        GcsPath: sdk.String("officia"),
                    },
                    Scenarios: []int{
                        548361,
                        879235,
                        272683,
                    },
                },
                IosTestSetup: &shared.IosTestSetup{
                    AdditionalIpas: []shared.FileReference{
                        shared.FileReference{
                            GcsPath: sdk.String("fugit"),
                        },
                        shared.FileReference{
                            GcsPath: sdk.String("ut"),
                        },
                        shared.FileReference{
                            GcsPath: sdk.String("fugiat"),
                        },
                    },
                    NetworkProfile: sdk.String("voluptatem"),
                    PullDirectories: []shared.IosDeviceFile{
                        shared.IosDeviceFile{
                            BundleID: sdk.String("expedita"),
                            Content: &shared.FileReference{
                                GcsPath: sdk.String("magnam"),
                            },
                            DevicePath: sdk.String("consequatur"),
                        },
                        shared.IosDeviceFile{
                            BundleID: sdk.String("esse"),
                            Content: &shared.FileReference{
                                GcsPath: sdk.String("ipsam"),
                            },
                            DevicePath: sdk.String("sit"),
                        },
                        shared.IosDeviceFile{
                            BundleID: sdk.String("voluptatum"),
                            Content: &shared.FileReference{
                                GcsPath: sdk.String("quas"),
                            },
                            DevicePath: sdk.String("repudiandae"),
                        },
                    },
                    PushFiles: []shared.IosDeviceFile{
                        shared.IosDeviceFile{
                            BundleID: sdk.String("et"),
                            Content: &shared.FileReference{
                                GcsPath: sdk.String("blanditiis"),
                            },
                            DevicePath: sdk.String("ex"),
                        },
                        shared.IosDeviceFile{
                            BundleID: sdk.String("sed"),
                            Content: &shared.FileReference{
                                GcsPath: sdk.String("sit"),
                            },
                            DevicePath: sdk.String("vel"),
                        },
                    },
                },
                IosXcTest: &shared.IosXcTest{
                    AppBundleID: sdk.String("nostrum"),
                    TestSpecialEntitlements: sdk.Bool(false),
                    TestsZip: &shared.FileReference{
                        GcsPath: sdk.String("saepe"),
                    },
                    XcodeVersion: sdk.String("error"),
                    Xctestrun: &shared.FileReference{
                        GcsPath: sdk.String("consequatur"),
                    },
                },
                TestSetup: &shared.TestSetup{
                    Account: &shared.Account{
                        GoogleAuto: map[string]interface{}{
                            "reiciendis": "dolorem",
                            "harum": "dicta",
                        },
                    },
                    AdditionalApks: []shared.Apk{
                        shared.Apk{
                            Location: &shared.FileReference{
                                GcsPath: sdk.String("occaecati"),
                            },
                            PackageName: sdk.String("labore"),
                        },
                    },
                    DirectoriesToPull: []string{
                        "atque",
                        "laborum",
                        "nam",
                    },
                    DontAutograntPermissions: sdk.Bool(false),
                    EnvironmentVariables: []shared.EnvironmentVariable{
                        shared.EnvironmentVariable{
                            Key: sdk.String("laboriosam"),
                            Value: sdk.String("alias"),
                        },
                        shared.EnvironmentVariable{
                            Key: sdk.String("amet"),
                            Value: sdk.String("deserunt"),
                        },
                        shared.EnvironmentVariable{
                            Key: sdk.String("voluptate"),
                            Value: sdk.String("unde"),
                        },
                        shared.EnvironmentVariable{
                            Key: sdk.String("reiciendis"),
                            Value: sdk.String("provident"),
                        },
                    },
                    FilesToPush: []shared.DeviceFile{
                        shared.DeviceFile{
                            ObbFile: &shared.ObbFile{
                                Obb: &shared.FileReference{
                                    GcsPath: sdk.String("delectus"),
                                },
                                ObbFileName: sdk.String("voluptates"),
                            },
                            RegularFile: &shared.RegularFile{
                                Content: &shared.FileReference{
                                    GcsPath: sdk.String("perferendis"),
                                },
                                DevicePath: sdk.String("est"),
                            },
                        },
                        shared.DeviceFile{
                            ObbFile: &shared.ObbFile{
                                Obb: &shared.FileReference{
                                    GcsPath: sdk.String("quidem"),
                                },
                                ObbFileName: sdk.String("reprehenderit"),
                            },
                            RegularFile: &shared.RegularFile{
                                Content: &shared.FileReference{
                                    GcsPath: sdk.String("facere"),
                                },
                                DevicePath: sdk.String("fuga"),
                            },
                        },
                        shared.DeviceFile{
                            ObbFile: &shared.ObbFile{
                                Obb: &shared.FileReference{
                                    GcsPath: sdk.String("praesentium"),
                                },
                                ObbFileName: sdk.String("mollitia"),
                            },
                            RegularFile: &shared.RegularFile{
                                Content: &shared.FileReference{
                                    GcsPath: sdk.String("veniam"),
                                },
                                DevicePath: sdk.String("voluptatem"),
                            },
                        },
                        shared.DeviceFile{
                            ObbFile: &shared.ObbFile{
                                Obb: &shared.FileReference{
                                    GcsPath: sdk.String("quisquam"),
                                },
                                ObbFileName: sdk.String("repudiandae"),
                            },
                            RegularFile: &shared.RegularFile{
                                Content: &shared.FileReference{
                                    GcsPath: sdk.String("quasi"),
                                },
                                DevicePath: sdk.String("atque"),
                            },
                        },
                    },
                    NetworkProfile: sdk.String("reprehenderit"),
                    Systrace: &shared.SystraceSetup{
                        DurationSeconds: sdk.Int(991142),
                    },
                },
                TestTimeout: sdk.String("totam"),
            },
            Timestamp: sdk.String("suscipit"),
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("et"),
        Fields: sdk.String("esse"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "ea",
        QuotaUser: sdk.String("atque"),
        RequestID: sdk.String("error"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("officiis"),
    }, operations.TestingProjectsTestMatricesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestMatrix != nil {
        // handle response
    }
}
```

## TestingProjectsTestMatricesGet

Checks the status of a test matrix and the executions once they are created. The test matrix will contain the list of test executions to run if and only if the resultStorage.toolResultsExecution fields have been populated. Note: Flaky test executions may still be added to the matrix at a later stage. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist

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
    res, err := s.Projects.TestingProjectsTestMatricesGet(ctx, operations.TestingProjectsTestMatricesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("ex"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("corrupti"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "at",
        QuotaUser: sdk.String("error"),
        TestMatrixID: "blanditiis",
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.TestingProjectsTestMatricesGetSecurity{
        Option1: &operations.TestingProjectsTestMatricesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestMatrix != nil {
        // handle response
    }
}
```
