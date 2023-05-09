# Projects

### Available Operations

* [MlProjectsExplain](#mlprojectsexplain) - Performs explanation on the data in the request. {% dynamic include "/ai-platform/includes/___explain-request" %} 
* [MlProjectsGetConfig](#mlprojectsgetconfig) - Get the service account information associated with your project. You need this information in order to grant the service account permissions for the Google Cloud Storage location where you put your model training code for training the model with Google Cloud Machine Learning.
* [MlProjectsJobsCreate](#mlprojectsjobscreate) - Creates a training or a batch prediction job.
* [MlProjectsJobsList](#mlprojectsjobslist) - Lists the jobs in the project. If there are no jobs that match the request parameters, the list request returns an empty response body: {}.
* [MlProjectsLocationsList](#mlprojectslocationslist) - List all locations that provides at least one type of CMLE capability.
* [MlProjectsLocationsStudiesCreate](#mlprojectslocationsstudiescreate) - Creates a study.
* [MlProjectsLocationsStudiesList](#mlprojectslocationsstudieslist) - Lists all the studies in a region for an associated project.
* [MlProjectsLocationsStudiesTrialsAddMeasurement](#mlprojectslocationsstudiestrialsaddmeasurement) - Adds a measurement of the objective metrics to a trial. This measurement is assumed to have been taken before the trial is complete.
* [MlProjectsLocationsStudiesTrialsCheckEarlyStoppingState](#mlprojectslocationsstudiestrialscheckearlystoppingstate) - Checks whether a trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.
* [MlProjectsLocationsStudiesTrialsComplete](#mlprojectslocationsstudiestrialscomplete) - Marks a trial as complete.
* [MlProjectsLocationsStudiesTrialsCreate](#mlprojectslocationsstudiestrialscreate) - Adds a user provided trial to a study.
* [MlProjectsLocationsStudiesTrialsList](#mlprojectslocationsstudiestrialslist) - Lists the trials associated with a study.
* [MlProjectsLocationsStudiesTrialsListOptimalTrials](#mlprojectslocationsstudiestrialslistoptimaltrials) - Lists the pareto-optimal trials for multi-objective study or the optimal trials for single-objective study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency
* [MlProjectsLocationsStudiesTrialsStop](#mlprojectslocationsstudiestrialsstop) - Stops a trial.
* [MlProjectsLocationsStudiesTrialsSuggest](#mlprojectslocationsstudiestrialssuggest) - Adds one or more trials to a study, with parameter values suggested by AI Platform Vizier. Returns a long-running operation associated with the generation of trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.
* [MlProjectsModelsCreate](#mlprojectsmodelscreate) - Creates a model which will later contain one or more versions. You must add at least one version before you can request predictions from the model. Add versions by calling projects.models.versions.create.
* [MlProjectsModelsGetIamPolicy](#mlprojectsmodelsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [MlProjectsModelsList](#mlprojectsmodelslist) - Lists the models in a project. Each project can contain multiple models, and each model can have multiple versions. If there are no models that match the request parameters, the list request returns an empty response body: {}.
* [MlProjectsModelsSetIamPolicy](#mlprojectsmodelssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [MlProjectsModelsTestIamPermissions](#mlprojectsmodelstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [MlProjectsModelsVersionsCreate](#mlprojectsmodelsversionscreate) - Creates a new version of a model from a trained TensorFlow model. If the version created in the cloud by this call is the first deployed version of the specified model, it will be made the default version of the model. When you add a version to a model that already has one or more versions, the default version does not automatically change. If you want a new version to be the default, you must call projects.models.versions.setDefault.
* [MlProjectsModelsVersionsDelete](#mlprojectsmodelsversionsdelete) - Deletes a model version. Each model can have multiple versions deployed and in use at any given time. Use this method to remove a single version. Note: You cannot delete the version that is set as the default version of the model unless it is the only remaining version.
* [MlProjectsModelsVersionsList](#mlprojectsmodelsversionslist) - Gets basic information about all the versions of a model. If you expect that a model has many versions, or if you need to handle only a limited number of results at a time, you can request that the list be retrieved in batches (called pages). If there are no versions that match the request parameters, the list request returns an empty response body: {}.
* [MlProjectsModelsVersionsPatch](#mlprojectsmodelsversionspatch) - Updates the specified Version resource. Currently the only update-able fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`.
* [MlProjectsModelsVersionsSetDefault](#mlprojectsmodelsversionssetdefault) - Designates a version to be the default for the model. The default version is used for prediction requests made against the model that don't specify a version. The first version to be created for a model is automatically set as the default. You must make any subsequent changes to the default version setting manually using this method.
* [MlProjectsOperationsCancel](#mlprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [MlProjectsOperationsGet](#mlprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [MlProjectsOperationsList](#mlprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [MlProjectsPredict](#mlprojectspredict) - Performs online prediction on the data in the request. {% dynamic include "/ai-platform/includes/___predict-request" %} 

## MlProjectsExplain

Performs explanation on the data in the request. {% dynamic include "/ai-platform/includes/___explain-request" %} 

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
    res, err := s.Projects.MlProjectsExplain(ctx, operations.MlProjectsExplainRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudMlV1ExplainRequest: &shared.GoogleCloudMlV1ExplainRequest{
            HTTPBody: &shared.GoogleAPIHTTPBody{
                ContentType: sdk.String("totam"),
                Data: sdk.String("porro"),
                Extensions: []map[string]interface{}{
                    map[string]interface{}{
                        "nam": "officia",
                    },
                    map[string]interface{}{
                        "fugit": "deleniti",
                        "hic": "optio",
                        "totam": "beatae",
                    },
                    map[string]interface{}{
                        "molestiae": "modi",
                        "qui": "impedit",
                    },
                },
            },
        },
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("aspernatur"),
        Name: "Cathy Mosciski",
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("hic"),
    }, operations.MlProjectsExplainSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAPIHTTPBody != nil {
        // handle response
    }
}
```

## MlProjectsGetConfig

Get the service account information associated with your project. You need this information in order to grant the service account permissions for the Google Cloud Storage location where you put your model training code for training the model with Google Cloud Machine Learning.

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
    res, err := s.Projects.MlProjectsGetConfig(ctx, operations.MlProjectsGetConfigRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("iste"),
        Key: sdk.String("iure"),
        Name: "Dr. Rickey Boyle",
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.MlProjectsGetConfigSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudMlV1GetConfigResponse != nil {
        // handle response
    }
}
```

## MlProjectsJobsCreate

Creates a training or a batch prediction job.

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
    res, err := s.Projects.MlProjectsJobsCreate(ctx, operations.MlProjectsJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudMlV1JobInput: &shared.GoogleCloudMlV1JobInput{
            CreateTime: sdk.String("explicabo"),
            EndTime: sdk.String("nobis"),
            ErrorMessage: sdk.String("enim"),
            Etag: sdk.String("omnis"),
            JobID: sdk.String("nemo"),
            Labels: map[string]string{
                "excepturi": "accusantium",
                "iure": "culpa",
            },
            PredictionInput: &shared.GoogleCloudMlV1PredictionInput{
                BatchSize: sdk.String("doloribus"),
                DataFormat: shared.GoogleCloudMlV1PredictionInputDataFormatEnumCsv.ToPointer(),
                InputPaths: []string{
                    "mollitia",
                },
                MaxWorkerCount: sdk.String("dolorem"),
                ModelName: sdk.String("culpa"),
                OutputDataFormat: shared.GoogleCloudMlV1PredictionInputOutputDataFormatEnumDataFormatUnspecified.ToPointer(),
                OutputPath: sdk.String("repellat"),
                Region: sdk.String("mollitia"),
                RuntimeVersion: sdk.String("occaecati"),
                SignatureName: sdk.String("numquam"),
                URI: sdk.String("http://kind-ironclad.biz"),
                VersionName: sdk.String("error"),
            },
            PredictionOutput: &shared.GoogleCloudMlV1PredictionOutput{
                ErrorCount: sdk.String("quia"),
                NodeHours: sdk.Float64(3380.07),
                OutputPath: sdk.String("vitae"),
                PredictionCount: sdk.String("laborum"),
            },
            StartTime: sdk.String("animi"),
            State: shared.GoogleCloudMlV1JobStateEnumPreparing.ToPointer(),
            TrainingInput: &shared.GoogleCloudMlV1TrainingInput{
                Args: []string{
                    "quo",
                },
                EnableWebAccess: sdk.Bool(false),
                EncryptionConfig: &shared.GoogleCloudMlV1EncryptionConfig{
                    KmsKeyName: sdk.String("sequi"),
                },
                EvaluatorConfig: &shared.GoogleCloudMlV1ReplicaConfig{
                    AcceleratorConfig: &shared.GoogleCloudMlV1AcceleratorConfig{
                        Count: sdk.String("tenetur"),
                        Type: shared.GoogleCloudMlV1AcceleratorConfigTypeEnumNvidiaTeslaP4.ToPointer(),
                    },
                    ContainerArgs: []string{
                        "possimus",
                        "aut",
                        "quasi",
                    },
                    ContainerCommand: []string{
                        "temporibus",
                        "laborum",
                        "quasi",
                    },
                    DiskConfig: &shared.GoogleCloudMlV1DiskConfig{
                        BootDiskSizeGb: sdk.Int(971945),
                        BootDiskType: sdk.String("voluptatibus"),
                    },
                    ImageURI: sdk.String("vero"),
                    TpuTfVersion: sdk.String("nihil"),
                },
                EvaluatorCount: sdk.String("praesentium"),
                EvaluatorType: sdk.String("voluptatibus"),
                Hyperparameters: &shared.GoogleCloudMlV1HyperparameterSpec{
                    Algorithm: shared.GoogleCloudMlV1HyperparameterSpecAlgorithmEnumAlgorithmUnspecified.ToPointer(),
                    EnableTrialEarlyStopping: sdk.Bool(false),
                    Goal: shared.GoogleCloudMlV1HyperparameterSpecGoalEnumMaximize.ToPointer(),
                    HyperparameterMetricTag: sdk.String("voluptate"),
                    MaxFailedTrials: sdk.Int(739264),
                    MaxParallelTrials: sdk.Int(19987),
                    MaxTrials: sdk.Int(39187),
                    Params: []shared.GoogleCloudMlV1ParameterSpec{
                        shared.GoogleCloudMlV1ParameterSpec{
                            CategoricalValues: []string{
                                "maiores",
                                "dicta",
                            },
                            DiscreteValues: []float64{
                                2961.4,
                                4808.94,
                            },
                            MaxValue: sdk.Float64(1187.27),
                            MinValue: sdk.Float64(6886.61),
                            ParameterName: sdk.String("enim"),
                            ScaleType: shared.GoogleCloudMlV1ParameterSpecScaleTypeEnumUnitReverseLogScale.ToPointer(),
                            Type: shared.GoogleCloudMlV1ParameterSpecTypeEnumInteger.ToPointer(),
                        },
                        shared.GoogleCloudMlV1ParameterSpec{
                            CategoricalValues: []string{
                                "quae",
                                "ipsum",
                                "quidem",
                                "molestias",
                            },
                            DiscreteValues: []float64{
                                8651.03,
                                2653.89,
                                5089.69,
                            },
                            MaxValue: sdk.Float64(5232.48),
                            MinValue: sdk.Float64(9167.23),
                            ParameterName: sdk.String("quasi"),
                            ScaleType: shared.GoogleCloudMlV1ParameterSpecScaleTypeEnumUnitReverseLogScale.ToPointer(),
                            Type: shared.GoogleCloudMlV1ParameterSpecTypeEnumInteger.ToPointer(),
                        },
                    },
                    ResumePreviousJobID: sdk.String("veritatis"),
                },
                JobDir: sdk.String("itaque"),
                MasterConfig: &shared.GoogleCloudMlV1ReplicaConfig{
                    AcceleratorConfig: &shared.GoogleCloudMlV1AcceleratorConfig{
                        Count: sdk.String("incidunt"),
                        Type: shared.GoogleCloudMlV1AcceleratorConfigTypeEnumNvidiaTeslaV100.ToPointer(),
                    },
                    ContainerArgs: []string{
                        "est",
                    },
                    ContainerCommand: []string{
                        "explicabo",
                        "deserunt",
                        "distinctio",
                        "quibusdam",
                    },
                    DiskConfig: &shared.GoogleCloudMlV1DiskConfig{
                        BootDiskSizeGb: sdk.Int(289406),
                        BootDiskType: sdk.String("modi"),
                    },
                    ImageURI: sdk.String("qui"),
                    TpuTfVersion: sdk.String("aliquid"),
                },
                MasterType: sdk.String("cupiditate"),
                Network: sdk.String("quos"),
                PackageUris: []string{
                    "magni",
                },
                ParameterServerConfig: &shared.GoogleCloudMlV1ReplicaConfig{
                    AcceleratorConfig: &shared.GoogleCloudMlV1AcceleratorConfig{
                        Count: sdk.String("assumenda"),
                        Type: shared.GoogleCloudMlV1AcceleratorConfigTypeEnumNvidiaTeslaP4.ToPointer(),
                    },
                    ContainerArgs: []string{
                        "fugit",
                    },
                    ContainerCommand: []string{
                        "excepturi",
                        "tempora",
                        "facilis",
                    },
                    DiskConfig: &shared.GoogleCloudMlV1DiskConfig{
                        BootDiskSizeGb: sdk.Int(735194),
                        BootDiskType: sdk.String("labore"),
                    },
                    ImageURI: sdk.String("delectus"),
                    TpuTfVersion: sdk.String("eum"),
                },
                ParameterServerCount: sdk.String("non"),
                ParameterServerType: sdk.String("eligendi"),
                PythonModule: sdk.String("sint"),
                PythonVersion: sdk.String("aliquid"),
                Region: sdk.String("provident"),
                RuntimeVersion: sdk.String("necessitatibus"),
                ScaleTier: shared.GoogleCloudMlV1TrainingInputScaleTierEnumBasicGpu.ToPointer(),
                Scheduling: &shared.GoogleCloudMlV1Scheduling{
                    MaxRunningTime: sdk.String("officia"),
                    MaxWaitTime: sdk.String("dolor"),
                    Priority: sdk.Int(891555),
                },
                ServiceAccount: sdk.String("a"),
                UseChiefInTfConfig: sdk.Bool(false),
                WorkerConfig: &shared.GoogleCloudMlV1ReplicaConfig{
                    AcceleratorConfig: &shared.GoogleCloudMlV1AcceleratorConfig{
                        Count: sdk.String("dolorum"),
                        Type: shared.GoogleCloudMlV1AcceleratorConfigTypeEnumNvidiaTeslaT4.ToPointer(),
                    },
                    ContainerArgs: []string{
                        "illum",
                        "maiores",
                    },
                    ContainerCommand: []string{
                        "dicta",
                        "magnam",
                        "cumque",
                    },
                    DiskConfig: &shared.GoogleCloudMlV1DiskConfig{
                        BootDiskSizeGb: sdk.Int(813798),
                        BootDiskType: sdk.String("ea"),
                    },
                    ImageURI: sdk.String("aliquid"),
                    TpuTfVersion: sdk.String("laborum"),
                },
                WorkerCount: sdk.String("accusamus"),
                WorkerType: sdk.String("non"),
            },
            TrainingOutput: &shared.GoogleCloudMlV1TrainingOutputInput{
                BuiltInAlgorithmOutput: &shared.GoogleCloudMlV1BuiltInAlgorithmOutput{
                    Framework: sdk.String("occaecati"),
                    ModelPath: sdk.String("enim"),
                    PythonVersion: sdk.String("accusamus"),
                    RuntimeVersion: sdk.String("delectus"),
                },
                CompletedTrialCount: sdk.String("quidem"),
                ConsumedMLUnits: sdk.Float64(5884.65),
                HyperparameterMetricTag: sdk.String("nam"),
                IsBuiltInAlgorithmJob: sdk.Bool(false),
                IsHyperparameterTuningJob: sdk.Bool(false),
                Trials: []shared.GoogleCloudMlV1HyperparameterOutput{
                    shared.GoogleCloudMlV1HyperparameterOutput{
                        AllMetrics: []shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric{
                            shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric{
                                ObjectiveValue: sdk.Float64(5332.06),
                                TrainingStep: sdk.String("sapiente"),
                            },
                            shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric{
                                ObjectiveValue: sdk.Float64(2305.33),
                                TrainingStep: sdk.String("deserunt"),
                            },
                            shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric{
                                ObjectiveValue: sdk.Float64(3948.69),
                                TrainingStep: sdk.String("vel"),
                            },
                        },
                        BuiltInAlgorithmOutput: &shared.GoogleCloudMlV1BuiltInAlgorithmOutput{
                            Framework: sdk.String("natus"),
                            ModelPath: sdk.String("omnis"),
                            PythonVersion: sdk.String("molestiae"),
                            RuntimeVersion: sdk.String("perferendis"),
                        },
                        EndTime: sdk.String("nihil"),
                        FinalMetric: &shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric{
                            ObjectiveValue: sdk.Float64(3015.75),
                            TrainingStep: sdk.String("distinctio"),
                        },
                        Hyperparameters: map[string]string{
                            "labore": "labore",
                            "suscipit": "natus",
                            "nobis": "eum",
                        },
                        IsTrialStoppedEarly: sdk.Bool(false),
                        StartTime: sdk.String("vero"),
                        State: shared.GoogleCloudMlV1HyperparameterOutputStateEnumQueued.ToPointer(),
                        TrialID: sdk.String("architecto"),
                        WebAccessUris: map[string]string{
                            "et": "excepturi",
                            "ullam": "provident",
                        },
                    },
                    shared.GoogleCloudMlV1HyperparameterOutput{
                        AllMetrics: []shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric{
                            shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric{
                                ObjectiveValue: sdk.Float64(5743.25),
                                TrainingStep: sdk.String("accusantium"),
                            },
                            shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric{
                                ObjectiveValue: sdk.Float64(6532.01),
                                TrainingStep: sdk.String("reiciendis"),
                            },
                            shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric{
                                ObjectiveValue: sdk.Float64(6521.03),
                                TrainingStep: sdk.String("ad"),
                            },
                        },
                        BuiltInAlgorithmOutput: &shared.GoogleCloudMlV1BuiltInAlgorithmOutput{
                            Framework: sdk.String("eum"),
                            ModelPath: sdk.String("dolor"),
                            PythonVersion: sdk.String("necessitatibus"),
                            RuntimeVersion: sdk.String("odit"),
                        },
                        EndTime: sdk.String("nemo"),
                        FinalMetric: &shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric{
                            ObjectiveValue: sdk.Float64(972.6),
                            TrainingStep: sdk.String("iure"),
                        },
                        Hyperparameters: map[string]string{
                            "debitis": "eius",
                            "maxime": "deleniti",
                            "facilis": "in",
                            "architecto": "architecto",
                        },
                        IsTrialStoppedEarly: sdk.Bool(false),
                        StartTime: sdk.String("repudiandae"),
                        State: shared.GoogleCloudMlV1HyperparameterOutputStateEnumPreparing.ToPointer(),
                        TrialID: sdk.String("expedita"),
                        WebAccessUris: map[string]string{
                            "repellat": "quibusdam",
                            "sed": "saepe",
                        },
                    },
                    shared.GoogleCloudMlV1HyperparameterOutput{
                        AllMetrics: []shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric{
                            shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric{
                                ObjectiveValue: sdk.Float64(375.59),
                                TrainingStep: sdk.String("consequuntur"),
                            },
                            shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric{
                                ObjectiveValue: sdk.Float64(5083.15),
                                TrainingStep: sdk.String("natus"),
                            },
                            shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric{
                                ObjectiveValue: sdk.Float64(1668.47),
                                TrainingStep: sdk.String("sunt"),
                            },
                            shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric{
                                ObjectiveValue: sdk.Float64(7790.51),
                                TrainingStep: sdk.String("illum"),
                            },
                        },
                        BuiltInAlgorithmOutput: &shared.GoogleCloudMlV1BuiltInAlgorithmOutput{
                            Framework: sdk.String("pariatur"),
                            ModelPath: sdk.String("maxime"),
                            PythonVersion: sdk.String("ea"),
                            RuntimeVersion: sdk.String("excepturi"),
                        },
                        EndTime: sdk.String("odit"),
                        FinalMetric: &shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric{
                            ObjectiveValue: sdk.Float64(4071.83),
                            TrainingStep: sdk.String("accusantium"),
                        },
                        Hyperparameters: map[string]string{
                            "maiores": "quidem",
                        },
                        IsTrialStoppedEarly: sdk.Bool(false),
                        StartTime: sdk.String("ipsam"),
                        State: shared.GoogleCloudMlV1HyperparameterOutputStateEnumRunning.ToPointer(),
                        TrialID: sdk.String("autem"),
                        WebAccessUris: map[string]string{
                            "eaque": "pariatur",
                            "nemo": "voluptatibus",
                            "perferendis": "fugiat",
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("libero"),
        Parent: "nobis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("totam"),
    }, operations.MlProjectsJobsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudMlV1Job != nil {
        // handle response
    }
}
```

## MlProjectsJobsList

Lists the jobs in the project. If there are no jobs that match the request parameters, the list request returns an empty response body: {}.

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
    res, err := s.Projects.MlProjectsJobsList(ctx, operations.MlProjectsJobsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("eos"),
        Filter: sdk.String("perferendis"),
        Key: sdk.String("dolores"),
        OauthToken: sdk.String("minus"),
        PageSize: sdk.Int64(463451),
        PageToken: sdk.String("dolor"),
        Parent: "vero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.MlProjectsJobsListSecurity{
        Option1: &operations.MlProjectsJobsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudMlV1ListJobsResponse != nil {
        // handle response
    }
}
```

## MlProjectsLocationsList

List all locations that provides at least one type of CMLE capability.

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
    res, err := s.Projects.MlProjectsLocationsList(ctx, operations.MlProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("porro"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("blanditiis"),
        PageSize: sdk.Int64(621479),
        PageToken: sdk.String("eaque"),
        Parent: "occaecati",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("asperiores"),
    }, operations.MlProjectsLocationsListSecurity{
        Option1: &operations.MlProjectsLocationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudMlV1ListLocationsResponse != nil {
        // handle response
    }
}
```

## MlProjectsLocationsStudiesCreate

Creates a study.

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
    res, err := s.Projects.MlProjectsLocationsStudiesCreate(ctx, operations.MlProjectsLocationsStudiesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudMlV1StudyInput: &shared.GoogleCloudMlV1StudyInput{
            StudyConfig: &shared.GoogleCloudMlV1StudyConfig{
                Algorithm: shared.GoogleCloudMlV1StudyConfigAlgorithmEnumGaussianProcessBandit.ToPointer(),
                AutomatedStoppingConfig: &shared.GoogleCloudMlV1AutomatedStoppingConfig{
                    DecayCurveStoppingConfig: &shared.GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig{
                        UseElapsedTime: sdk.Bool(false),
                    },
                    MedianAutomatedStoppingConfig: &shared.GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig{
                        UseElapsedTime: sdk.Bool(false),
                    },
                },
                Metrics: []shared.GoogleCloudMlV1StudyConfigMetricSpec{
                    shared.GoogleCloudMlV1StudyConfigMetricSpec{
                        Goal: shared.GoogleCloudMlV1StudyConfigMetricSpecGoalEnumMinimize.ToPointer(),
                        Metric: sdk.String("deleniti"),
                    },
                    shared.GoogleCloudMlV1StudyConfigMetricSpec{
                        Goal: shared.GoogleCloudMlV1StudyConfigMetricSpecGoalEnumMinimize.ToPointer(),
                        Metric: sdk.String("provident"),
                    },
                    shared.GoogleCloudMlV1StudyConfigMetricSpec{
                        Goal: shared.GoogleCloudMlV1StudyConfigMetricSpecGoalEnumMinimize.ToPointer(),
                        Metric: sdk.String("libero"),
                    },
                },
                Parameters: []shared.GoogleCloudMlV1StudyConfigParameterSpec{
                    shared.GoogleCloudMlV1StudyConfigParameterSpec{
                        CategoricalValueSpec: &shared.GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec{
                            Values: []string{
                                "quos",
                                "aliquid",
                            },
                        },
                        ChildParameterSpecs: []shared.GoogleCloudMlV1StudyConfigParameterSpec{
                            shared.GoogleCloudMlV1StudyConfigParameterSpec{},
                        },
                        DiscreteValueSpec: &shared.GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec{
                            Values: []float64{
                                2224.43,
                            },
                        },
                        DoubleValueSpec: &shared.GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec{
                            MaxValue: sdk.Float64(1861.93),
                            MinValue: sdk.Float64(2187.49),
                        },
                        IntegerValueSpec: &shared.GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec{
                            MaxValue: sdk.String("hic"),
                            MinValue: sdk.String("excepturi"),
                        },
                        Parameter: sdk.String("cum"),
                        ParentCategoricalValues: &shared.GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec{
                            Values: []string{
                                "dignissimos",
                                "reiciendis",
                            },
                        },
                        ParentDiscreteValues: &shared.GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec{
                            Values: []float64{
                                6805.45,
                            },
                        },
                        ParentIntValues: &shared.GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec{
                            Values: []string{
                                "veritatis",
                                "ipsa",
                            },
                        },
                        ScaleType: shared.GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnumScaleTypeUnspecified.ToPointer(),
                        Type: shared.GoogleCloudMlV1StudyConfigParameterSpecTypeEnumInteger.ToPointer(),
                    },
                    shared.GoogleCloudMlV1StudyConfigParameterSpec{
                        CategoricalValueSpec: &shared.GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec{
                            Values: []string{
                                "quaerat",
                                "accusamus",
                            },
                        },
                        ChildParameterSpecs: []shared.GoogleCloudMlV1StudyConfigParameterSpec{
                            shared.GoogleCloudMlV1StudyConfigParameterSpec{},
                            shared.GoogleCloudMlV1StudyConfigParameterSpec{},
                            shared.GoogleCloudMlV1StudyConfigParameterSpec{},
                        },
                        DiscreteValueSpec: &shared.GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec{
                            Values: []float64{
                                3777.52,
                                6176.58,
                                1796.03,
                                5424.99,
                            },
                        },
                        DoubleValueSpec: &shared.GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec{
                            MaxValue: sdk.Float64(246.78),
                            MinValue: sdk.Float64(8546.14),
                        },
                        IntegerValueSpec: &shared.GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec{
                            MaxValue: sdk.String("ab"),
                            MinValue: sdk.String("soluta"),
                        },
                        Parameter: sdk.String("dolorum"),
                        ParentCategoricalValues: &shared.GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec{
                            Values: []string{
                                "voluptate",
                                "dolorum",
                            },
                        },
                        ParentDiscreteValues: &shared.GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec{
                            Values: []float64{
                                6070.45,
                                8966.72,
                                7146.97,
                            },
                        },
                        ParentIntValues: &shared.GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec{
                            Values: []string{
                                "nihil",
                                "ipsum",
                                "voluptate",
                                "id",
                            },
                        },
                        ScaleType: shared.GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnumUnitReverseLogScale.ToPointer(),
                        Type: shared.GoogleCloudMlV1StudyConfigParameterSpecTypeEnumDouble.ToPointer(),
                    },
                    shared.GoogleCloudMlV1StudyConfigParameterSpec{
                        CategoricalValueSpec: &shared.GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec{
                            Values: []string{
                                "perferendis",
                            },
                        },
                        ChildParameterSpecs: []shared.GoogleCloudMlV1StudyConfigParameterSpec{
                            shared.GoogleCloudMlV1StudyConfigParameterSpec{},
                        },
                        DiscreteValueSpec: &shared.GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec{
                            Values: []float64{
                                8815.86,
                                3200.17,
                                9044.25,
                                3834.64,
                            },
                        },
                        DoubleValueSpec: &shared.GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec{
                            MaxValue: sdk.Float64(6457.85),
                            MinValue: sdk.Float64(5883.17),
                        },
                        IntegerValueSpec: &shared.GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec{
                            MaxValue: sdk.String("minima"),
                            MinValue: sdk.String("repellendus"),
                        },
                        Parameter: sdk.String("totam"),
                        ParentCategoricalValues: &shared.GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec{
                            Values: []string{
                                "alias",
                                "at",
                                "quaerat",
                            },
                        },
                        ParentDiscreteValues: &shared.GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec{
                            Values: []float64{
                                4254.51,
                                7980.47,
                            },
                        },
                        ParentIntValues: &shared.GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec{
                            Values: []string{
                                "qui",
                                "dolorum",
                                "a",
                                "esse",
                            },
                        },
                        ScaleType: shared.GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnumUnitLogScale.ToPointer(),
                        Type: shared.GoogleCloudMlV1StudyConfigParameterSpecTypeEnumInteger.ToPointer(),
                    },
                    shared.GoogleCloudMlV1StudyConfigParameterSpec{
                        CategoricalValueSpec: &shared.GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec{
                            Values: []string{
                                "quisquam",
                            },
                        },
                        ChildParameterSpecs: []shared.GoogleCloudMlV1StudyConfigParameterSpec{
                            shared.GoogleCloudMlV1StudyConfigParameterSpec{},
                            shared.GoogleCloudMlV1StudyConfigParameterSpec{},
                            shared.GoogleCloudMlV1StudyConfigParameterSpec{},
                            shared.GoogleCloudMlV1StudyConfigParameterSpec{},
                        },
                        DiscreteValueSpec: &shared.GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec{
                            Values: []float64{
                                7308.56,
                            },
                        },
                        DoubleValueSpec: &shared.GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec{
                            MaxValue: sdk.Float64(8802.98),
                            MinValue: sdk.Float64(2539.41),
                        },
                        IntegerValueSpec: &shared.GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec{
                            MaxValue: sdk.String("enim"),
                            MinValue: sdk.String("dolorem"),
                        },
                        Parameter: sdk.String("sapiente"),
                        ParentCategoricalValues: &shared.GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec{
                            Values: []string{
                                "nihil",
                                "sit",
                                "expedita",
                            },
                        },
                        ParentDiscreteValues: &shared.GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec{
                            Values: []float64{
                                1536.94,
                            },
                        },
                        ParentIntValues: &shared.GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec{
                            Values: []string{
                                "libero",
                                "voluptas",
                            },
                        },
                        ScaleType: shared.GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnumUnitLogScale.ToPointer(),
                        Type: shared.GoogleCloudMlV1StudyConfigParameterSpecTypeEnumInteger.ToPointer(),
                    },
                },
            },
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("pariatur"),
        Parent: "soluta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        StudyID: sdk.String("laborum"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("incidunt"),
    }, operations.MlProjectsLocationsStudiesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudMlV1Study != nil {
        // handle response
    }
}
```

## MlProjectsLocationsStudiesList

Lists all the studies in a region for an associated project.

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
    res, err := s.Projects.MlProjectsLocationsStudiesList(ctx, operations.MlProjectsLocationsStudiesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("quam"),
        OauthToken: sdk.String("molestias"),
        Parent: "temporibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.MlProjectsLocationsStudiesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudMlV1ListStudiesResponse != nil {
        // handle response
    }
}
```

## MlProjectsLocationsStudiesTrialsAddMeasurement

Adds a measurement of the objective metrics to a trial. This measurement is assumed to have been taken before the trial is complete.

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
    res, err := s.Projects.MlProjectsLocationsStudiesTrialsAddMeasurement(ctx, operations.MlProjectsLocationsStudiesTrialsAddMeasurementRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudMlV1AddTrialMeasurementRequest: &shared.GoogleCloudMlV1AddTrialMeasurementRequest{
            Measurement: &shared.GoogleCloudMlV1Measurement{
                ElapsedTime: sdk.String("odio"),
                Metrics: []shared.GoogleCloudMlV1MeasurementMetric{
                    shared.GoogleCloudMlV1MeasurementMetric{
                        Metric: sdk.String("ullam"),
                        Value: sdk.Float64(7220.81),
                    },
                },
                StepCount: sdk.String("hic"),
            },
        },
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("et"),
        Name: "Dale Boehm",
        OauthToken: sdk.String("tempore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.MlProjectsLocationsStudiesTrialsAddMeasurementSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudMlV1Trial != nil {
        // handle response
    }
}
```

## MlProjectsLocationsStudiesTrialsCheckEarlyStoppingState

Checks whether a trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.

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
    res, err := s.Projects.MlProjectsLocationsStudiesTrialsCheckEarlyStoppingState(ctx, operations.MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "labore": "adipisci",
            "dolorum": "architecto",
        },
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("consequatur"),
        Name: "Marcos Schaden",
        OauthToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("quae"),
    }, operations.MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## MlProjectsLocationsStudiesTrialsComplete

Marks a trial as complete.

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
    res, err := s.Projects.MlProjectsLocationsStudiesTrialsComplete(ctx, operations.MlProjectsLocationsStudiesTrialsCompleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudMlV1CompleteTrialRequest: &shared.GoogleCloudMlV1CompleteTrialRequest{
            FinalMeasurement: &shared.GoogleCloudMlV1Measurement{
                ElapsedTime: sdk.String("odio"),
                Metrics: []shared.GoogleCloudMlV1MeasurementMetric{
                    shared.GoogleCloudMlV1MeasurementMetric{
                        Metric: sdk.String("voluptatibus"),
                        Value: sdk.Float64(7875.42),
                    },
                    shared.GoogleCloudMlV1MeasurementMetric{
                        Metric: sdk.String("vero"),
                        Value: sdk.Float64(6064.76),
                    },
                    shared.GoogleCloudMlV1MeasurementMetric{
                        Metric: sdk.String("quis"),
                        Value: sdk.Float64(2184.03),
                    },
                },
                StepCount: sdk.String("delectus"),
            },
            InfeasibleReason: sdk.String("voluptate"),
            TrialInfeasible: sdk.Bool(false),
        },
        AccessToken: sdk.String("consectetur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("dignissimos"),
        Key: sdk.String("hic"),
        Name: "Jermaine Kuhic",
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ducimus"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.MlProjectsLocationsStudiesTrialsCompleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudMlV1Trial != nil {
        // handle response
    }
}
```

## MlProjectsLocationsStudiesTrialsCreate

Adds a user provided trial to a study.

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
    res, err := s.Projects.MlProjectsLocationsStudiesTrialsCreate(ctx, operations.MlProjectsLocationsStudiesTrialsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudMlV1TrialInput: &shared.GoogleCloudMlV1TrialInput{
            FinalMeasurement: &shared.GoogleCloudMlV1Measurement{
                ElapsedTime: sdk.String("sequi"),
                Metrics: []shared.GoogleCloudMlV1MeasurementMetric{
                    shared.GoogleCloudMlV1MeasurementMetric{
                        Metric: sdk.String("impedit"),
                        Value: sdk.Float64(132.36),
                    },
                    shared.GoogleCloudMlV1MeasurementMetric{
                        Metric: sdk.String("voluptatibus"),
                        Value: sdk.Float64(3472.33),
                    },
                    shared.GoogleCloudMlV1MeasurementMetric{
                        Metric: sdk.String("nulla"),
                        Value: sdk.Float64(1481.41),
                    },
                },
                StepCount: sdk.String("porro"),
            },
            Measurements: []shared.GoogleCloudMlV1Measurement{
                shared.GoogleCloudMlV1Measurement{
                    ElapsedTime: sdk.String("doloribus"),
                    Metrics: []shared.GoogleCloudMlV1MeasurementMetric{
                        shared.GoogleCloudMlV1MeasurementMetric{
                            Metric: sdk.String("eligendi"),
                            Value: sdk.Float64(4973.91),
                        },
                        shared.GoogleCloudMlV1MeasurementMetric{
                            Metric: sdk.String("alias"),
                            Value: sdk.Float64(6394.73),
                        },
                    },
                    StepCount: sdk.String("tempora"),
                },
                shared.GoogleCloudMlV1Measurement{
                    ElapsedTime: sdk.String("ipsam"),
                    Metrics: []shared.GoogleCloudMlV1MeasurementMetric{
                        shared.GoogleCloudMlV1MeasurementMetric{
                            Metric: sdk.String("aspernatur"),
                            Value: sdk.Float64(4282.24),
                        },
                        shared.GoogleCloudMlV1MeasurementMetric{
                            Metric: sdk.String("possimus"),
                            Value: sdk.Float64(2978.42),
                        },
                    },
                    StepCount: sdk.String("ratione"),
                },
                shared.GoogleCloudMlV1Measurement{
                    ElapsedTime: sdk.String("ex"),
                    Metrics: []shared.GoogleCloudMlV1MeasurementMetric{
                        shared.GoogleCloudMlV1MeasurementMetric{
                            Metric: sdk.String("dicta"),
                            Value: sdk.Float64(2243.17),
                        },
                        shared.GoogleCloudMlV1MeasurementMetric{
                            Metric: sdk.String("maiores"),
                            Value: sdk.Float64(978.44),
                        },
                        shared.GoogleCloudMlV1MeasurementMetric{
                            Metric: sdk.String("ex"),
                            Value: sdk.Float64(8621.92),
                        },
                    },
                    StepCount: sdk.String("excepturi"),
                },
                shared.GoogleCloudMlV1Measurement{
                    ElapsedTime: sdk.String("voluptatibus"),
                    Metrics: []shared.GoogleCloudMlV1MeasurementMetric{
                        shared.GoogleCloudMlV1MeasurementMetric{
                            Metric: sdk.String("sapiente"),
                            Value: sdk.Float64(7888.73),
                        },
                        shared.GoogleCloudMlV1MeasurementMetric{
                            Metric: sdk.String("saepe"),
                            Value: sdk.Float64(4113.72),
                        },
                    },
                    StepCount: sdk.String("impedit"),
                },
            },
            Parameters: []shared.GoogleCloudMlV1TrialParameter{
                shared.GoogleCloudMlV1TrialParameter{
                    FloatValue: sdk.Float64(3331.45),
                    IntValue: sdk.String("aliquid"),
                    Parameter: sdk.String("inventore"),
                    StringValue: sdk.String("magnam"),
                },
                shared.GoogleCloudMlV1TrialParameter{
                    FloatValue: sdk.Float64(4072.41),
                    IntValue: sdk.String("quo"),
                    Parameter: sdk.String("consectetur"),
                    StringValue: sdk.String("recusandae"),
                },
            },
            State: shared.GoogleCloudMlV1TrialStateEnumStateUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("libero"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("aut"),
        Parent: "deleniti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.MlProjectsLocationsStudiesTrialsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudMlV1Trial != nil {
        // handle response
    }
}
```

## MlProjectsLocationsStudiesTrialsList

Lists the trials associated with a study.

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
    res, err := s.Projects.MlProjectsLocationsStudiesTrialsList(ctx, operations.MlProjectsLocationsStudiesTrialsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("inventore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("et"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("placeat"),
        Parent: "velit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("autem"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.MlProjectsLocationsStudiesTrialsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudMlV1ListTrialsResponse != nil {
        // handle response
    }
}
```

## MlProjectsLocationsStudiesTrialsListOptimalTrials

Lists the pareto-optimal trials for multi-objective study or the optimal trials for single-objective study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency

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
    res, err := s.Projects.MlProjectsLocationsStudiesTrialsListOptimalTrials(ctx, operations.MlProjectsLocationsStudiesTrialsListOptimalTrialsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "nulla": "voluptas",
            "libero": "quasi",
            "tempora": "numquam",
            "explicabo": "provident",
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("odio"),
        Key: sdk.String("eius"),
        OauthToken: sdk.String("esse"),
        Parent: "esse",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("reprehenderit"),
    }, operations.MlProjectsLocationsStudiesTrialsListOptimalTrialsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudMlV1ListOptimalTrialsResponse != nil {
        // handle response
    }
}
```

## MlProjectsLocationsStudiesTrialsStop

Stops a trial.

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
    res, err := s.Projects.MlProjectsLocationsStudiesTrialsStop(ctx, operations.MlProjectsLocationsStudiesTrialsStopRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "ut": "eum",
            "suscipit": "assumenda",
            "eos": "praesentium",
            "quisquam": "veritatis",
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("neque"),
        Key: sdk.String("quo"),
        Name: "Salvatore Parker",
        OauthToken: sdk.String("voluptas"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("consequatur"),
    }, operations.MlProjectsLocationsStudiesTrialsStopSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudMlV1Trial != nil {
        // handle response
    }
}
```

## MlProjectsLocationsStudiesTrialsSuggest

Adds one or more trials to a study, with parameter values suggested by AI Platform Vizier. Returns a long-running operation associated with the generation of trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.

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
    res, err := s.Projects.MlProjectsLocationsStudiesTrialsSuggest(ctx, operations.MlProjectsLocationsStudiesTrialsSuggestRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudMlV1SuggestTrialsRequest: &shared.GoogleCloudMlV1SuggestTrialsRequest{
            ClientID: sdk.String("debitis"),
            SuggestionCount: sdk.Int(370853),
        },
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("esse"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("aperiam"),
        Parent: "distinctio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("inventore"),
    }, operations.MlProjectsLocationsStudiesTrialsSuggestSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## MlProjectsModelsCreate

Creates a model which will later contain one or more versions. You must add at least one version before you can request predictions from the model. Add versions by calling projects.models.versions.create.

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
    res, err := s.Projects.MlProjectsModelsCreate(ctx, operations.MlProjectsModelsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudMlV1ModelInput: &shared.GoogleCloudMlV1ModelInput{
            DefaultVersion: &shared.GoogleCloudMlV1VersionInput{
                AcceleratorConfig: &shared.GoogleCloudMlV1AcceleratorConfig{
                    Count: sdk.String("totam"),
                    Type: shared.GoogleCloudMlV1AcceleratorConfigTypeEnumTpuV3Pod.ToPointer(),
                },
                AutoScaling: &shared.GoogleCloudMlV1AutoScaling{
                    MaxNodes: sdk.Int(306810),
                    Metrics: []shared.GoogleCloudMlV1MetricSpec{
                        shared.GoogleCloudMlV1MetricSpec{
                            Name: shared.GoogleCloudMlV1MetricSpecNameEnumCPUUsage.ToPointer(),
                            Target: sdk.Int(414567),
                        },
                        shared.GoogleCloudMlV1MetricSpec{
                            Name: shared.GoogleCloudMlV1MetricSpecNameEnumGpuDutyCycle.ToPointer(),
                            Target: sdk.Int(174112),
                        },
                    },
                    MinNodes: sdk.Int(645570),
                },
                Container: &shared.GoogleCloudMlV1ContainerSpec{
                    Args: []string{
                        "accusantium",
                        "porro",
                    },
                    Command: []string{
                        "quas",
                        "praesentium",
                    },
                    Env: []shared.GoogleCloudMlV1EnvVar{
                        shared.GoogleCloudMlV1EnvVar{
                            Name: sdk.String("Wayne Parker"),
                            Value: sdk.String("atque"),
                        },
                    },
                    Image: sdk.String("explicabo"),
                    Ports: []shared.GoogleCloudMlV1ContainerPort{
                        shared.GoogleCloudMlV1ContainerPort{
                            ContainerPort: sdk.Int(392676),
                        },
                        shared.GoogleCloudMlV1ContainerPort{
                            ContainerPort: sdk.Int(147014),
                        },
                    },
                },
                CreateTime: sdk.String("sapiente"),
                DeploymentURI: sdk.String("consequuntur"),
                Description: sdk.String("ratione"),
                ErrorMessage: sdk.String("explicabo"),
                Etag: sdk.String("saepe"),
                ExplanationConfig: &shared.GoogleCloudMlV1ExplanationConfig{
                    IntegratedGradientsAttribution: &shared.GoogleCloudMlV1IntegratedGradientsAttribution{
                        NumIntegralSteps: sdk.Int(578922),
                    },
                    SampledShapleyAttribution: &shared.GoogleCloudMlV1SampledShapleyAttribution{
                        NumPaths: sdk.Int(543806),
                    },
                    XraiAttribution: &shared.GoogleCloudMlV1XraiAttribution{
                        NumIntegralSteps: sdk.Int(92260),
                    },
                },
                Framework: shared.GoogleCloudMlV1VersionFrameworkEnumTensorflow.ToPointer(),
                IsDefault: sdk.Bool(false),
                Labels: map[string]string{
                    "accusamus": "veritatis",
                    "esse": "quod",
                    "nam": "vero",
                    "aliquid": "quasi",
                },
                LastUseTime: sdk.String("saepe"),
                MachineType: sdk.String("vel"),
                ManualScaling: &shared.GoogleCloudMlV1ManualScaling{
                    Nodes: sdk.Int(690025),
                },
                Name: sdk.String("Luz McClure"),
                PackageUris: []string{
                    "sit",
                    "culpa",
                    "tempore",
                    "adipisci",
                },
                PredictionClass: sdk.String("cumque"),
                PythonVersion: sdk.String("consequuntur"),
                RequestLoggingConfig: &shared.GoogleCloudMlV1RequestLoggingConfig{
                    BigqueryTableName: sdk.String("consequatur"),
                    SamplingPercentage: sdk.Float64(7963.92),
                },
                Routes: &shared.GoogleCloudMlV1RouteMap{
                    Health: sdk.String("quaerat"),
                    Predict: sdk.String("sapiente"),
                },
                RuntimeVersion: sdk.String("consectetur"),
                ServiceAccount: sdk.String("esse"),
                State: shared.GoogleCloudMlV1VersionStateEnumFailed.ToPointer(),
            },
            Description: sdk.String("provident"),
            Etag: sdk.String("a"),
            Labels: map[string]string{
                "quas": "esse",
                "quasi": "a",
                "error": "sint",
                "pariatur": "possimus",
            },
            Name: sdk.String("Laverne Zemlak Sr."),
            OnlinePredictionConsoleLogging: sdk.Bool(false),
            OnlinePredictionLogging: sdk.Bool(false),
            Regions: []string{
                "similique",
            },
        },
        AccessToken: sdk.String("culpa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("quae"),
        Key: sdk.String("earum"),
        OauthToken: sdk.String("vel"),
        Parent: "in",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("illum"),
    }, operations.MlProjectsModelsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudMlV1Model != nil {
        // handle response
    }
}
```

## MlProjectsModelsGetIamPolicy

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
    res, err := s.Projects.MlProjectsModelsGetIamPolicy(ctx, operations.MlProjectsModelsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("ullam"),
        OauthToken: sdk.String("reprehenderit"),
        OptionsRequestedPolicyVersion: sdk.Int64(356707),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        Resource: "aut",
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("qui"),
    }, operations.MlProjectsModelsGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1Policy != nil {
        // handle response
    }
}
```

## MlProjectsModelsList

Lists the models in a project. Each project can contain multiple models, and each model can have multiple versions. If there are no models that match the request parameters, the list request returns an empty response body: {}.

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
    res, err := s.Projects.MlProjectsModelsList(ctx, operations.MlProjectsModelsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ex"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("itaque"),
        Fields: sdk.String("dolorum"),
        Filter: sdk.String("architecto"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("tenetur"),
        PageSize: sdk.Int64(98478),
        PageToken: sdk.String("at"),
        Parent: "et",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("minima"),
    }, operations.MlProjectsModelsListSecurity{
        Option1: &operations.MlProjectsModelsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudMlV1ListModelsResponse != nil {
        // handle response
    }
}
```

## MlProjectsModelsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

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
    res, err := s.Projects.MlProjectsModelsSetIamPolicy(ctx, operations.MlProjectsModelsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleIamV1SetIamPolicyRequest: &shared.GoogleIamV1SetIamPolicyRequest{
            Policy: &shared.GoogleIamV1Policy{
                AuditConfigs: []shared.GoogleIamV1AuditConfig{
                    shared.GoogleIamV1AuditConfig{
                        AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "temporibus",
                                    "accusantium",
                                    "rem",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("laudantium"),
                    },
                },
                Bindings: []shared.GoogleIamV1Binding{
                    shared.GoogleIamV1Binding{
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("mollitia"),
                            Expression: sdk.String("ab"),
                            Location: sdk.String("corrupti"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "dolor",
                        },
                        Role: sdk.String("occaecati"),
                    },
                    shared.GoogleIamV1Binding{
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("numquam"),
                            Expression: sdk.String("impedit"),
                            Location: sdk.String("explicabo"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "dignissimos",
                        },
                        Role: sdk.String("dicta"),
                    },
                },
                Etag: sdk.String("maiores"),
                Version: sdk.Int(618480),
            },
            UpdateMask: sdk.String("velit"),
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("asperiores"),
        Fields: sdk.String("aperiam"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        Resource: "repellendus",
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("maxime"),
    }, operations.MlProjectsModelsSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1Policy != nil {
        // handle response
    }
}
```

## MlProjectsModelsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

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
    res, err := s.Projects.MlProjectsModelsTestIamPermissions(ctx, operations.MlProjectsModelsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleIamV1TestIamPermissionsRequest: &shared.GoogleIamV1TestIamPermissionsRequest{
            Permissions: []string{
                "asperiores",
                "nemo",
                "quae",
            },
        },
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("labore"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        Resource: "id",
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("velit"),
    }, operations.MlProjectsModelsTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## MlProjectsModelsVersionsCreate

Creates a new version of a model from a trained TensorFlow model. If the version created in the cloud by this call is the first deployed version of the specified model, it will be made the default version of the model. When you add a version to a model that already has one or more versions, the default version does not automatically change. If you want a new version to be the default, you must call projects.models.versions.setDefault.

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
    res, err := s.Projects.MlProjectsModelsVersionsCreate(ctx, operations.MlProjectsModelsVersionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudMlV1VersionInput: &shared.GoogleCloudMlV1VersionInput{
            AcceleratorConfig: &shared.GoogleCloudMlV1AcceleratorConfig{
                Count: sdk.String("est"),
                Type: shared.GoogleCloudMlV1AcceleratorConfigTypeEnumTpuV4Pod.ToPointer(),
            },
            AutoScaling: &shared.GoogleCloudMlV1AutoScaling{
                MaxNodes: sdk.Int(517309),
                Metrics: []shared.GoogleCloudMlV1MetricSpec{
                    shared.GoogleCloudMlV1MetricSpec{
                        Name: shared.GoogleCloudMlV1MetricSpecNameEnumCPUUsage.ToPointer(),
                        Target: sdk.Int(497678),
                    },
                    shared.GoogleCloudMlV1MetricSpec{
                        Name: shared.GoogleCloudMlV1MetricSpecNameEnumCPUUsage.ToPointer(),
                        Target: sdk.Int(427834),
                    },
                    shared.GoogleCloudMlV1MetricSpec{
                        Name: shared.GoogleCloudMlV1MetricSpecNameEnumMetricNameUnspecified.ToPointer(),
                        Target: sdk.Int(822560),
                    },
                    shared.GoogleCloudMlV1MetricSpec{
                        Name: shared.GoogleCloudMlV1MetricSpecNameEnumGpuDutyCycle.ToPointer(),
                        Target: sdk.Int(738227),
                    },
                },
                MinNodes: sdk.Int(414857),
            },
            Container: &shared.GoogleCloudMlV1ContainerSpec{
                Args: []string{
                    "corporis",
                    "reiciendis",
                },
                Command: []string{
                    "nemo",
                    "recusandae",
                    "aliquid",
                    "aperiam",
                },
                Env: []shared.GoogleCloudMlV1EnvVar{
                    shared.GoogleCloudMlV1EnvVar{
                        Name: sdk.String("Arlene Heidenreich"),
                        Value: sdk.String("numquam"),
                    },
                    shared.GoogleCloudMlV1EnvVar{
                        Name: sdk.String("Ricardo Wisozk"),
                        Value: sdk.String("necessitatibus"),
                    },
                    shared.GoogleCloudMlV1EnvVar{
                        Name: sdk.String("Katherine Zemlak"),
                        Value: sdk.String("amet"),
                    },
                },
                Image: sdk.String("beatae"),
                Ports: []shared.GoogleCloudMlV1ContainerPort{
                    shared.GoogleCloudMlV1ContainerPort{
                        ContainerPort: sdk.Int(950953),
                    },
                    shared.GoogleCloudMlV1ContainerPort{
                        ContainerPort: sdk.Int(891523),
                    },
                },
            },
            CreateTime: sdk.String("consectetur"),
            DeploymentURI: sdk.String("corporis"),
            Description: sdk.String("harum"),
            ErrorMessage: sdk.String("laboriosam"),
            Etag: sdk.String("ipsa"),
            ExplanationConfig: &shared.GoogleCloudMlV1ExplanationConfig{
                IntegratedGradientsAttribution: &shared.GoogleCloudMlV1IntegratedGradientsAttribution{
                    NumIntegralSteps: sdk.Int(916727),
                },
                SampledShapleyAttribution: &shared.GoogleCloudMlV1SampledShapleyAttribution{
                    NumPaths: sdk.Int(730709),
                },
                XraiAttribution: &shared.GoogleCloudMlV1XraiAttribution{
                    NumIntegralSteps: sdk.Int(113816),
                },
            },
            Framework: shared.GoogleCloudMlV1VersionFrameworkEnumXgboost.ToPointer(),
            IsDefault: sdk.Bool(false),
            Labels: map[string]string{
                "tempora": "aspernatur",
                "voluptas": "voluptas",
                "voluptas": "minima",
            },
            LastUseTime: sdk.String("nobis"),
            MachineType: sdk.String("dolorum"),
            ManualScaling: &shared.GoogleCloudMlV1ManualScaling{
                Nodes: sdk.Int(237807),
            },
            Name: sdk.String("Ernest Labadie"),
            PackageUris: []string{
                "officiis",
                "temporibus",
            },
            PredictionClass: sdk.String("ullam"),
            PythonVersion: sdk.String("adipisci"),
            RequestLoggingConfig: &shared.GoogleCloudMlV1RequestLoggingConfig{
                BigqueryTableName: sdk.String("cum"),
                SamplingPercentage: sdk.Float64(5023.89),
            },
            Routes: &shared.GoogleCloudMlV1RouteMap{
                Health: sdk.String("quas"),
                Predict: sdk.String("hic"),
            },
            RuntimeVersion: sdk.String("nesciunt"),
            ServiceAccount: sdk.String("culpa"),
            State: shared.GoogleCloudMlV1VersionStateEnumFailed.ToPointer(),
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("exercitationem"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("sit"),
        Parent: "rerum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.MlProjectsModelsVersionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## MlProjectsModelsVersionsDelete

Deletes a model version. Each model can have multiple versions deployed and in use at any given time. Use this method to remove a single version. Note: You cannot delete the version that is set as the default version of the model unless it is the only remaining version.

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
    res, err := s.Projects.MlProjectsModelsVersionsDelete(ctx, operations.MlProjectsModelsVersionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("ab"),
        Key: sdk.String("iste"),
        Name: "Janie Cremin",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("unde"),
    }, operations.MlProjectsModelsVersionsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## MlProjectsModelsVersionsList

Gets basic information about all the versions of a model. If you expect that a model has many versions, or if you need to handle only a limited number of results at a time, you can request that the list be retrieved in batches (called pages). If there are no versions that match the request parameters, the list request returns an empty response body: {}.

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
    res, err := s.Projects.MlProjectsModelsVersionsList(ctx, operations.MlProjectsModelsVersionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("illo"),
        Filter: sdk.String("reiciendis"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("corrupti"),
        PageSize: sdk.Int64(979574),
        PageToken: sdk.String("incidunt"),
        Parent: "sed",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.MlProjectsModelsVersionsListSecurity{
        Option1: &operations.MlProjectsModelsVersionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudMlV1ListVersionsResponse != nil {
        // handle response
    }
}
```

## MlProjectsModelsVersionsPatch

Updates the specified Version resource. Currently the only update-able fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`.

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
    res, err := s.Projects.MlProjectsModelsVersionsPatch(ctx, operations.MlProjectsModelsVersionsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudMlV1VersionInput: &shared.GoogleCloudMlV1VersionInput{
            AcceleratorConfig: &shared.GoogleCloudMlV1AcceleratorConfig{
                Count: sdk.String("ea"),
                Type: shared.GoogleCloudMlV1AcceleratorConfigTypeEnumNvidiaTeslaA100.ToPointer(),
            },
            AutoScaling: &shared.GoogleCloudMlV1AutoScaling{
                MaxNodes: sdk.Int(552078),
                Metrics: []shared.GoogleCloudMlV1MetricSpec{
                    shared.GoogleCloudMlV1MetricSpec{
                        Name: shared.GoogleCloudMlV1MetricSpecNameEnumMetricNameUnspecified.ToPointer(),
                        Target: sdk.Int(273009),
                    },
                    shared.GoogleCloudMlV1MetricSpec{
                        Name: shared.GoogleCloudMlV1MetricSpecNameEnumCPUUsage.ToPointer(),
                        Target: sdk.Int(970076),
                    },
                    shared.GoogleCloudMlV1MetricSpec{
                        Name: shared.GoogleCloudMlV1MetricSpecNameEnumCPUUsage.ToPointer(),
                        Target: sdk.Int(25497),
                    },
                    shared.GoogleCloudMlV1MetricSpec{
                        Name: shared.GoogleCloudMlV1MetricSpecNameEnumMetricNameUnspecified.ToPointer(),
                        Target: sdk.Int(888044),
                    },
                },
                MinNodes: sdk.Int(505866),
            },
            Container: &shared.GoogleCloudMlV1ContainerSpec{
                Args: []string{
                    "quaerat",
                    "incidunt",
                    "ipsam",
                },
                Command: []string{
                    "rem",
                    "sit",
                    "nobis",
                    "error",
                },
                Env: []shared.GoogleCloudMlV1EnvVar{
                    shared.GoogleCloudMlV1EnvVar{
                        Name: sdk.String("Sophie Wisoky"),
                        Value: sdk.String("aperiam"),
                    },
                    shared.GoogleCloudMlV1EnvVar{
                        Name: sdk.String("Francis Harris"),
                        Value: sdk.String("beatae"),
                    },
                },
                Image: sdk.String("laudantium"),
                Ports: []shared.GoogleCloudMlV1ContainerPort{
                    shared.GoogleCloudMlV1ContainerPort{
                        ContainerPort: sdk.Int(510629),
                    },
                    shared.GoogleCloudMlV1ContainerPort{
                        ContainerPort: sdk.Int(740098),
                    },
                },
            },
            CreateTime: sdk.String("laboriosam"),
            DeploymentURI: sdk.String("dolorum"),
            Description: sdk.String("voluptatum"),
            ErrorMessage: sdk.String("error"),
            Etag: sdk.String("hic"),
            ExplanationConfig: &shared.GoogleCloudMlV1ExplanationConfig{
                IntegratedGradientsAttribution: &shared.GoogleCloudMlV1IntegratedGradientsAttribution{
                    NumIntegralSteps: sdk.Int(710529),
                },
                SampledShapleyAttribution: &shared.GoogleCloudMlV1SampledShapleyAttribution{
                    NumPaths: sdk.Int(892863),
                },
                XraiAttribution: &shared.GoogleCloudMlV1XraiAttribution{
                    NumIntegralSteps: sdk.Int(204923),
                },
            },
            Framework: shared.GoogleCloudMlV1VersionFrameworkEnumScikitLearn.ToPointer(),
            IsDefault: sdk.Bool(false),
            Labels: map[string]string{
                "officia": "dolorum",
                "corrupti": "accusamus",
            },
            LastUseTime: sdk.String("tempora"),
            MachineType: sdk.String("atque"),
            ManualScaling: &shared.GoogleCloudMlV1ManualScaling{
                Nodes: sdk.Int(148268),
            },
            Name: sdk.String("Janis Bartell"),
            PackageUris: []string{
                "consequatur",
                "esse",
            },
            PredictionClass: sdk.String("ipsam"),
            PythonVersion: sdk.String("sit"),
            RequestLoggingConfig: &shared.GoogleCloudMlV1RequestLoggingConfig{
                BigqueryTableName: sdk.String("voluptatum"),
                SamplingPercentage: sdk.Float64(5580.65),
            },
            Routes: &shared.GoogleCloudMlV1RouteMap{
                Health: sdk.String("repudiandae"),
                Predict: sdk.String("corporis"),
            },
            RuntimeVersion: sdk.String("et"),
            ServiceAccount: sdk.String("blanditiis"),
            State: shared.GoogleCloudMlV1VersionStateEnumCreating.ToPointer(),
        },
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("nostrum"),
        Key: sdk.String("saepe"),
        Name: "William Gottlieb",
        OauthToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UpdateMask: sdk.String("architecto"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("labore"),
    }, operations.MlProjectsModelsVersionsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## MlProjectsModelsVersionsSetDefault

Designates a version to be the default for the model. The default version is used for prediction requests made against the model that don't specify a version. The first version to be created for a model is automatically set as the default. You must make any subsequent changes to the default version setting manually using this method.

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
    res, err := s.Projects.MlProjectsModelsVersionsSetDefault(ctx, operations.MlProjectsModelsVersionsSetDefaultRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "laborum": "nam",
            "tenetur": "laboriosam",
            "alias": "amet",
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("unde"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("provident"),
        Name: "Miss Brendan Volkman",
        OauthToken: sdk.String("reprehenderit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.MlProjectsModelsVersionsSetDefaultSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudMlV1Version != nil {
        // handle response
    }
}
```

## MlProjectsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

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
    res, err := s.Projects.MlProjectsOperationsCancel(ctx, operations.MlProjectsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "voluptatem": "quisquam",
            "repudiandae": "quasi",
        },
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("asperiores"),
        Fields: sdk.String("totam"),
        Key: sdk.String("suscipit"),
        Name: "Simon Borer",
        OauthToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("error"),
    }, operations.MlProjectsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## MlProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

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
    res, err := s.Projects.MlProjectsOperationsGet(ctx, operations.MlProjectsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("minima"),
        Key: sdk.String("aspernatur"),
        Name: "Elisa Little",
        OauthToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("atque"),
    }, operations.MlProjectsOperationsGetSecurity{
        Option1: &operations.MlProjectsOperationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## MlProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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
    res, err := s.Projects.MlProjectsOperationsList(ctx, operations.MlProjectsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("repellendus"),
        Filter: sdk.String("labore"),
        Key: sdk.String("reiciendis"),
        Name: "Mr. Elvira Buckridge",
        OauthToken: sdk.String("enim"),
        PageSize: sdk.Int64(389135),
        PageToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("molestias"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.MlProjectsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
}
```

## MlProjectsPredict

Performs online prediction on the data in the request. {% dynamic include "/ai-platform/includes/___predict-request" %} 

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
    res, err := s.Projects.MlProjectsPredict(ctx, operations.MlProjectsPredictRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudMlV1PredictRequest: &shared.GoogleCloudMlV1PredictRequest{
            HTTPBody: &shared.GoogleAPIHTTPBody{
                ContentType: sdk.String("consequuntur"),
                Data: sdk.String("occaecati"),
                Extensions: []map[string]interface{}{
                    map[string]interface{}{
                        "in": "adipisci",
                        "eveniet": "occaecati",
                        "consequuntur": "fugit",
                    },
                    map[string]interface{}{
                        "quis": "reprehenderit",
                        "error": "illo",
                        "corporis": "quidem",
                    },
                    map[string]interface{}{
                        "non": "vero",
                        "doloremque": "iure",
                        "ipsa": "totam",
                        "quae": "molestiae",
                    },
                    map[string]interface{}{
                        "qui": "cum",
                        "iure": "necessitatibus",
                        "ratione": "laborum",
                        "distinctio": "voluptatum",
                    },
                },
            },
        },
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("repellat"),
        Key: sdk.String("alias"),
        Name: "Katrina Kovacek",
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.MlProjectsPredictSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAPIHTTPBody != nil {
        // handle response
    }
}
```
