# projects

### Available Operations

* [mlProjectsExplain](#mlprojectsexplain) - Performs explanation on the data in the request. {% dynamic include "/ai-platform/includes/___explain-request" %} 
* [mlProjectsGetConfig](#mlprojectsgetconfig) - Get the service account information associated with your project. You need this information in order to grant the service account permissions for the Google Cloud Storage location where you put your model training code for training the model with Google Cloud Machine Learning.
* [mlProjectsJobsCreate](#mlprojectsjobscreate) - Creates a training or a batch prediction job.
* [mlProjectsJobsList](#mlprojectsjobslist) - Lists the jobs in the project. If there are no jobs that match the request parameters, the list request returns an empty response body: {}.
* [mlProjectsLocationsList](#mlprojectslocationslist) - List all locations that provides at least one type of CMLE capability.
* [mlProjectsLocationsStudiesCreate](#mlprojectslocationsstudiescreate) - Creates a study.
* [mlProjectsLocationsStudiesList](#mlprojectslocationsstudieslist) - Lists all the studies in a region for an associated project.
* [mlProjectsLocationsStudiesTrialsAddMeasurement](#mlprojectslocationsstudiestrialsaddmeasurement) - Adds a measurement of the objective metrics to a trial. This measurement is assumed to have been taken before the trial is complete.
* [mlProjectsLocationsStudiesTrialsCheckEarlyStoppingState](#mlprojectslocationsstudiestrialscheckearlystoppingstate) - Checks whether a trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.
* [mlProjectsLocationsStudiesTrialsComplete](#mlprojectslocationsstudiestrialscomplete) - Marks a trial as complete.
* [mlProjectsLocationsStudiesTrialsCreate](#mlprojectslocationsstudiestrialscreate) - Adds a user provided trial to a study.
* [mlProjectsLocationsStudiesTrialsList](#mlprojectslocationsstudiestrialslist) - Lists the trials associated with a study.
* [mlProjectsLocationsStudiesTrialsListOptimalTrials](#mlprojectslocationsstudiestrialslistoptimaltrials) - Lists the pareto-optimal trials for multi-objective study or the optimal trials for single-objective study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency
* [mlProjectsLocationsStudiesTrialsStop](#mlprojectslocationsstudiestrialsstop) - Stops a trial.
* [mlProjectsLocationsStudiesTrialsSuggest](#mlprojectslocationsstudiestrialssuggest) - Adds one or more trials to a study, with parameter values suggested by AI Platform Vizier. Returns a long-running operation associated with the generation of trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.
* [mlProjectsModelsCreate](#mlprojectsmodelscreate) - Creates a model which will later contain one or more versions. You must add at least one version before you can request predictions from the model. Add versions by calling projects.models.versions.create.
* [mlProjectsModelsGetIamPolicy](#mlprojectsmodelsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [mlProjectsModelsList](#mlprojectsmodelslist) - Lists the models in a project. Each project can contain multiple models, and each model can have multiple versions. If there are no models that match the request parameters, the list request returns an empty response body: {}.
* [mlProjectsModelsSetIamPolicy](#mlprojectsmodelssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [mlProjectsModelsTestIamPermissions](#mlprojectsmodelstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [mlProjectsModelsVersionsCreate](#mlprojectsmodelsversionscreate) - Creates a new version of a model from a trained TensorFlow model. If the version created in the cloud by this call is the first deployed version of the specified model, it will be made the default version of the model. When you add a version to a model that already has one or more versions, the default version does not automatically change. If you want a new version to be the default, you must call projects.models.versions.setDefault.
* [mlProjectsModelsVersionsDelete](#mlprojectsmodelsversionsdelete) - Deletes a model version. Each model can have multiple versions deployed and in use at any given time. Use this method to remove a single version. Note: You cannot delete the version that is set as the default version of the model unless it is the only remaining version.
* [mlProjectsModelsVersionsList](#mlprojectsmodelsversionslist) - Gets basic information about all the versions of a model. If you expect that a model has many versions, or if you need to handle only a limited number of results at a time, you can request that the list be retrieved in batches (called pages). If there are no versions that match the request parameters, the list request returns an empty response body: {}.
* [mlProjectsModelsVersionsPatch](#mlprojectsmodelsversionspatch) - Updates the specified Version resource. Currently the only update-able fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`.
* [mlProjectsModelsVersionsSetDefault](#mlprojectsmodelsversionssetdefault) - Designates a version to be the default for the model. The default version is used for prediction requests made against the model that don't specify a version. The first version to be created for a model is automatically set as the default. You must make any subsequent changes to the default version setting manually using this method.
* [mlProjectsOperationsCancel](#mlprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [mlProjectsOperationsGet](#mlprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [mlProjectsOperationsList](#mlprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [mlProjectsPredict](#mlprojectspredict) - Performs online prediction on the data in the request. {% dynamic include "/ai-platform/includes/___predict-request" %} 

## mlProjectsExplain

Performs explanation on the data in the request. {% dynamic include "/ai-platform/includes/___explain-request" %} 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsExplainRequest;
import org.openapis.openapi.models.operations.MlProjectsExplainResponse;
import org.openapis.openapi.models.operations.MlProjectsExplainSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleApiHttpBody;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ExplainRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsExplainRequest req = new MlProjectsExplainRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudMlV1ExplainRequest = new GoogleCloudMlV1ExplainRequest() {{
                    httpBody = new GoogleApiHttpBody() {{
                        contentType = "molestiae";
                        data = "quod";
                        extensions = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("totam", "porro");
                                put("dolorum", "dicta");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("officia", "occaecati");
                                put("fugit", "deleniti");
                                put("hic", "optio");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("beatae", "commodi");
                                put("molestiae", "modi");
                                put("qui", "impedit");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("esse", "ipsum");
                                put("excepturi", "aspernatur");
                                put("perferendis", "ad");
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "dolor";
                key = "natus";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "saepe";
                uploadProtocol = "fuga";
            }};            

            MlProjectsExplainResponse res = sdk.projects.mlProjectsExplain(req, new MlProjectsExplainSecurity("in", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleApiHttpBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsGetConfig

Get the service account information associated with your project. You need this information in order to grant the service account permissions for the Google Cloud Storage location where you put your model training code for training the model with Google Cloud Machine Learning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsGetConfigRequest;
import org.openapis.openapi.models.operations.MlProjectsGetConfigResponse;
import org.openapis.openapi.models.operations.MlProjectsGetConfigSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsGetConfigRequest req = new MlProjectsGetConfigRequest("iste") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "ipsa";
                key = "reiciendis";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "laborum";
                uploadProtocol = "dolores";
            }};            

            MlProjectsGetConfigResponse res = sdk.projects.mlProjectsGetConfig(req, new MlProjectsGetConfigSecurity("dolorem", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudMlV1GetConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsJobsCreate

Creates a training or a batch prediction job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsJobsCreateRequest;
import org.openapis.openapi.models.operations.MlProjectsJobsCreateResponse;
import org.openapis.openapi.models.operations.MlProjectsJobsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1AcceleratorConfig;
import org.openapis.openapi.models.shared.GoogleCloudMlV1AcceleratorConfigTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1BuiltInAlgorithmOutput;
import org.openapis.openapi.models.shared.GoogleCloudMlV1DiskConfig;
import org.openapis.openapi.models.shared.GoogleCloudMlV1EncryptionConfig;
import org.openapis.openapi.models.shared.GoogleCloudMlV1HyperparameterOutput;
import org.openapis.openapi.models.shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric;
import org.openapis.openapi.models.shared.GoogleCloudMlV1HyperparameterOutputStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1HyperparameterSpec;
import org.openapis.openapi.models.shared.GoogleCloudMlV1HyperparameterSpecAlgorithmEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1HyperparameterSpecGoalEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1JobInput;
import org.openapis.openapi.models.shared.GoogleCloudMlV1JobStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ParameterSpec;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ParameterSpecScaleTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ParameterSpecTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1PredictionInput;
import org.openapis.openapi.models.shared.GoogleCloudMlV1PredictionInputDataFormatEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1PredictionInputOutputDataFormatEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1PredictionOutput;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ReplicaConfig;
import org.openapis.openapi.models.shared.GoogleCloudMlV1Scheduling;
import org.openapis.openapi.models.shared.GoogleCloudMlV1TrainingInput;
import org.openapis.openapi.models.shared.GoogleCloudMlV1TrainingInputScaleTierEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1TrainingOutputInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsJobsCreateRequest req = new MlProjectsJobsCreateRequest("explicabo") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudMlV1JobInput = new GoogleCloudMlV1JobInput() {{
                    createTime = "enim";
                    endTime = "omnis";
                    errorMessage = "nemo";
                    etag = "minima";
                    jobId = "excepturi";
                    labels = new java.util.HashMap<String, String>() {{
                        put("iure", "culpa");
                    }};
                    predictionInput = new GoogleCloudMlV1PredictionInput() {{
                        batchSize = "doloribus";
                        dataFormat = GoogleCloudMlV1PredictionInputDataFormatEnum.CSV;
                        inputPaths = new String[]{{
                            add("mollitia"),
                        }};
                        maxWorkerCount = "dolorem";
                        modelName = "culpa";
                        outputDataFormat = GoogleCloudMlV1PredictionInputOutputDataFormatEnum.DATA_FORMAT_UNSPECIFIED;
                        outputPath = "repellat";
                        region = "mollitia";
                        runtimeVersion = "occaecati";
                        signatureName = "numquam";
                        uri = "http://kind-ironclad.biz";
                        versionName = "error";
                    }};;
                    predictionOutput = new GoogleCloudMlV1PredictionOutput() {{
                        errorCount = "quia";
                        nodeHours = 3380.07;
                        outputPath = "vitae";
                        predictionCount = "laborum";
                    }};;
                    startTime = "animi";
                    state = GoogleCloudMlV1JobStateEnum.PREPARING;
                    trainingInput = new GoogleCloudMlV1TrainingInput() {{
                        args = new String[]{{
                            add("quo"),
                        }};
                        enableWebAccess = false;
                        encryptionConfig = new GoogleCloudMlV1EncryptionConfig() {{
                            kmsKeyName = "sequi";
                        }};;
                        evaluatorConfig = new GoogleCloudMlV1ReplicaConfig() {{
                            acceleratorConfig = new GoogleCloudMlV1AcceleratorConfig() {{
                                count = "tenetur";
                                type = GoogleCloudMlV1AcceleratorConfigTypeEnum.NVIDIA_TESLA_P4;
                            }};;
                            containerArgs = new String[]{{
                                add("possimus"),
                                add("aut"),
                                add("quasi"),
                            }};
                            containerCommand = new String[]{{
                                add("temporibus"),
                                add("laborum"),
                                add("quasi"),
                            }};
                            diskConfig = new GoogleCloudMlV1DiskConfig() {{
                                bootDiskSizeGb = 971945;
                                bootDiskType = "voluptatibus";
                            }};;
                            imageUri = "vero";
                            tpuTfVersion = "nihil";
                        }};;
                        evaluatorCount = "praesentium";
                        evaluatorType = "voluptatibus";
                        hyperparameters = new GoogleCloudMlV1HyperparameterSpec() {{
                            algorithm = GoogleCloudMlV1HyperparameterSpecAlgorithmEnum.ALGORITHM_UNSPECIFIED;
                            enableTrialEarlyStopping = false;
                            goal = GoogleCloudMlV1HyperparameterSpecGoalEnum.MAXIMIZE;
                            hyperparameterMetricTag = "voluptate";
                            maxFailedTrials = 739264;
                            maxParallelTrials = 19987;
                            maxTrials = 39187;
                            params = new org.openapis.openapi.models.shared.GoogleCloudMlV1ParameterSpec[]{{
                                add(new GoogleCloudMlV1ParameterSpec() {{
                                    categoricalValues = new String[]{{
                                        add("maiores"),
                                        add("dicta"),
                                    }};
                                    discreteValues = new Double[]{{
                                        add(2961.4),
                                        add(4808.94),
                                    }};
                                    maxValue = 1187.27;
                                    minValue = 6886.61;
                                    parameterName = "enim";
                                    scaleType = GoogleCloudMlV1ParameterSpecScaleTypeEnum.UNIT_REVERSE_LOG_SCALE;
                                    type = GoogleCloudMlV1ParameterSpecTypeEnum.INTEGER;
                                }}),
                                add(new GoogleCloudMlV1ParameterSpec() {{
                                    categoricalValues = new String[]{{
                                        add("quae"),
                                        add("ipsum"),
                                        add("quidem"),
                                        add("molestias"),
                                    }};
                                    discreteValues = new Double[]{{
                                        add(8651.03),
                                        add(2653.89),
                                        add(5089.69),
                                    }};
                                    maxValue = 5232.48;
                                    minValue = 9167.23;
                                    parameterName = "quasi";
                                    scaleType = GoogleCloudMlV1ParameterSpecScaleTypeEnum.UNIT_REVERSE_LOG_SCALE;
                                    type = GoogleCloudMlV1ParameterSpecTypeEnum.INTEGER;
                                }}),
                            }};
                            resumePreviousJobId = "veritatis";
                        }};;
                        jobDir = "itaque";
                        masterConfig = new GoogleCloudMlV1ReplicaConfig() {{
                            acceleratorConfig = new GoogleCloudMlV1AcceleratorConfig() {{
                                count = "incidunt";
                                type = GoogleCloudMlV1AcceleratorConfigTypeEnum.NVIDIA_TESLA_V100;
                            }};;
                            containerArgs = new String[]{{
                                add("est"),
                            }};
                            containerCommand = new String[]{{
                                add("explicabo"),
                                add("deserunt"),
                                add("distinctio"),
                                add("quibusdam"),
                            }};
                            diskConfig = new GoogleCloudMlV1DiskConfig() {{
                                bootDiskSizeGb = 289406;
                                bootDiskType = "modi";
                            }};;
                            imageUri = "qui";
                            tpuTfVersion = "aliquid";
                        }};;
                        masterType = "cupiditate";
                        network = "quos";
                        packageUris = new String[]{{
                            add("magni"),
                        }};
                        parameterServerConfig = new GoogleCloudMlV1ReplicaConfig() {{
                            acceleratorConfig = new GoogleCloudMlV1AcceleratorConfig() {{
                                count = "assumenda";
                                type = GoogleCloudMlV1AcceleratorConfigTypeEnum.NVIDIA_TESLA_P4;
                            }};;
                            containerArgs = new String[]{{
                                add("fugit"),
                            }};
                            containerCommand = new String[]{{
                                add("excepturi"),
                                add("tempora"),
                                add("facilis"),
                            }};
                            diskConfig = new GoogleCloudMlV1DiskConfig() {{
                                bootDiskSizeGb = 735194;
                                bootDiskType = "labore";
                            }};;
                            imageUri = "delectus";
                            tpuTfVersion = "eum";
                        }};;
                        parameterServerCount = "non";
                        parameterServerType = "eligendi";
                        pythonModule = "sint";
                        pythonVersion = "aliquid";
                        region = "provident";
                        runtimeVersion = "necessitatibus";
                        scaleTier = GoogleCloudMlV1TrainingInputScaleTierEnum.BASIC_GPU;
                        scheduling = new GoogleCloudMlV1Scheduling() {{
                            maxRunningTime = "officia";
                            maxWaitTime = "dolor";
                            priority = 891555;
                        }};;
                        serviceAccount = "a";
                        useChiefInTfConfig = false;
                        workerConfig = new GoogleCloudMlV1ReplicaConfig() {{
                            acceleratorConfig = new GoogleCloudMlV1AcceleratorConfig() {{
                                count = "dolorum";
                                type = GoogleCloudMlV1AcceleratorConfigTypeEnum.NVIDIA_TESLA_T4;
                            }};;
                            containerArgs = new String[]{{
                                add("illum"),
                                add("maiores"),
                            }};
                            containerCommand = new String[]{{
                                add("dicta"),
                                add("magnam"),
                                add("cumque"),
                            }};
                            diskConfig = new GoogleCloudMlV1DiskConfig() {{
                                bootDiskSizeGb = 813798;
                                bootDiskType = "ea";
                            }};;
                            imageUri = "aliquid";
                            tpuTfVersion = "laborum";
                        }};;
                        workerCount = "accusamus";
                        workerType = "non";
                    }};;
                    trainingOutput = new GoogleCloudMlV1TrainingOutputInput() {{
                        builtInAlgorithmOutput = new GoogleCloudMlV1BuiltInAlgorithmOutput() {{
                            framework = "occaecati";
                            modelPath = "enim";
                            pythonVersion = "accusamus";
                            runtimeVersion = "delectus";
                        }};;
                        completedTrialCount = "quidem";
                        consumedMLUnits = 5884.65;
                        hyperparameterMetricTag = "nam";
                        isBuiltInAlgorithmJob = false;
                        isHyperparameterTuningJob = false;
                        trials = new org.openapis.openapi.models.shared.GoogleCloudMlV1HyperparameterOutput[]{{
                            add(new GoogleCloudMlV1HyperparameterOutput() {{
                                allMetrics = new org.openapis.openapi.models.shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric[]{{
                                    add(new GoogleCloudMlV1HyperparameterOutputHyperparameterMetric() {{
                                        objectiveValue = 5332.06;
                                        trainingStep = "sapiente";
                                    }}),
                                    add(new GoogleCloudMlV1HyperparameterOutputHyperparameterMetric() {{
                                        objectiveValue = 2305.33;
                                        trainingStep = "deserunt";
                                    }}),
                                    add(new GoogleCloudMlV1HyperparameterOutputHyperparameterMetric() {{
                                        objectiveValue = 3948.69;
                                        trainingStep = "vel";
                                    }}),
                                }};
                                builtInAlgorithmOutput = new GoogleCloudMlV1BuiltInAlgorithmOutput() {{
                                    framework = "natus";
                                    modelPath = "omnis";
                                    pythonVersion = "molestiae";
                                    runtimeVersion = "perferendis";
                                }};
                                endTime = "nihil";
                                finalMetric = new GoogleCloudMlV1HyperparameterOutputHyperparameterMetric() {{
                                    objectiveValue = 3015.75;
                                    trainingStep = "distinctio";
                                }};
                                hyperparameters = new java.util.HashMap<String, String>() {{
                                    put("labore", "labore");
                                    put("suscipit", "natus");
                                    put("nobis", "eum");
                                }};
                                isTrialStoppedEarly = false;
                                startTime = "vero";
                                state = GoogleCloudMlV1HyperparameterOutputStateEnum.QUEUED;
                                trialId = "architecto";
                                webAccessUris = new java.util.HashMap<String, String>() {{
                                    put("et", "excepturi");
                                    put("ullam", "provident");
                                }};
                            }}),
                            add(new GoogleCloudMlV1HyperparameterOutput() {{
                                allMetrics = new org.openapis.openapi.models.shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric[]{{
                                    add(new GoogleCloudMlV1HyperparameterOutputHyperparameterMetric() {{
                                        objectiveValue = 5743.25;
                                        trainingStep = "accusantium";
                                    }}),
                                    add(new GoogleCloudMlV1HyperparameterOutputHyperparameterMetric() {{
                                        objectiveValue = 6532.01;
                                        trainingStep = "reiciendis";
                                    }}),
                                    add(new GoogleCloudMlV1HyperparameterOutputHyperparameterMetric() {{
                                        objectiveValue = 6521.03;
                                        trainingStep = "ad";
                                    }}),
                                }};
                                builtInAlgorithmOutput = new GoogleCloudMlV1BuiltInAlgorithmOutput() {{
                                    framework = "eum";
                                    modelPath = "dolor";
                                    pythonVersion = "necessitatibus";
                                    runtimeVersion = "odit";
                                }};
                                endTime = "nemo";
                                finalMetric = new GoogleCloudMlV1HyperparameterOutputHyperparameterMetric() {{
                                    objectiveValue = 972.6;
                                    trainingStep = "iure";
                                }};
                                hyperparameters = new java.util.HashMap<String, String>() {{
                                    put("debitis", "eius");
                                    put("maxime", "deleniti");
                                    put("facilis", "in");
                                    put("architecto", "architecto");
                                }};
                                isTrialStoppedEarly = false;
                                startTime = "repudiandae";
                                state = GoogleCloudMlV1HyperparameterOutputStateEnum.PREPARING;
                                trialId = "expedita";
                                webAccessUris = new java.util.HashMap<String, String>() {{
                                    put("repellat", "quibusdam");
                                    put("sed", "saepe");
                                }};
                            }}),
                            add(new GoogleCloudMlV1HyperparameterOutput() {{
                                allMetrics = new org.openapis.openapi.models.shared.GoogleCloudMlV1HyperparameterOutputHyperparameterMetric[]{{
                                    add(new GoogleCloudMlV1HyperparameterOutputHyperparameterMetric() {{
                                        objectiveValue = 375.59;
                                        trainingStep = "consequuntur";
                                    }}),
                                    add(new GoogleCloudMlV1HyperparameterOutputHyperparameterMetric() {{
                                        objectiveValue = 5083.15;
                                        trainingStep = "natus";
                                    }}),
                                    add(new GoogleCloudMlV1HyperparameterOutputHyperparameterMetric() {{
                                        objectiveValue = 1668.47;
                                        trainingStep = "sunt";
                                    }}),
                                    add(new GoogleCloudMlV1HyperparameterOutputHyperparameterMetric() {{
                                        objectiveValue = 7790.51;
                                        trainingStep = "illum";
                                    }}),
                                }};
                                builtInAlgorithmOutput = new GoogleCloudMlV1BuiltInAlgorithmOutput() {{
                                    framework = "pariatur";
                                    modelPath = "maxime";
                                    pythonVersion = "ea";
                                    runtimeVersion = "excepturi";
                                }};
                                endTime = "odit";
                                finalMetric = new GoogleCloudMlV1HyperparameterOutputHyperparameterMetric() {{
                                    objectiveValue = 4071.83;
                                    trainingStep = "accusantium";
                                }};
                                hyperparameters = new java.util.HashMap<String, String>() {{
                                    put("maiores", "quidem");
                                }};
                                isTrialStoppedEarly = false;
                                startTime = "ipsam";
                                state = GoogleCloudMlV1HyperparameterOutputStateEnum.RUNNING;
                                trialId = "autem";
                                webAccessUris = new java.util.HashMap<String, String>() {{
                                    put("eaque", "pariatur");
                                    put("nemo", "voluptatibus");
                                    put("perferendis", "fugiat");
                                }};
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "amet";
                alt = AltEnum.JSON;
                callback = "cumque";
                fields = "corporis";
                key = "hic";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "dolores";
                uploadProtocol = "quis";
            }};            

            MlProjectsJobsCreateResponse res = sdk.projects.mlProjectsJobsCreate(req, new MlProjectsJobsCreateSecurity("totam", "dignissimos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudMlV1Job != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsJobsList

Lists the jobs in the project. If there are no jobs that match the request parameters, the list request returns an empty response body: {}.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsJobsListRequest;
import org.openapis.openapi.models.operations.MlProjectsJobsListResponse;
import org.openapis.openapi.models.operations.MlProjectsJobsListSecurity;
import org.openapis.openapi.models.operations.MlProjectsJobsListSecurityOption1;
import org.openapis.openapi.models.operations.MlProjectsJobsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsJobsListRequest req = new MlProjectsJobsListRequest("eaque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nesciunt";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "dolores";
                filter = "minus";
                key = "quam";
                oauthToken = "dolor";
                pageSize = 874573L;
                pageToken = "nostrum";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "recusandae";
                uploadProtocol = "omnis";
            }};            

            MlProjectsJobsListResponse res = sdk.projects.mlProjectsJobsList(req, new MlProjectsJobsListSecurity() {{
                option1 = new MlProjectsJobsListSecurityOption1("facilis", "perspiciatis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudMlV1ListJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsLocationsList

List all locations that provides at least one type of CMLE capability.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.MlProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.MlProjectsLocationsListSecurity;
import org.openapis.openapi.models.operations.MlProjectsLocationsListSecurityOption1;
import org.openapis.openapi.models.operations.MlProjectsLocationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsLocationsListRequest req = new MlProjectsLocationsListRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.MEDIA;
                callback = "error";
                fields = "eaque";
                key = "occaecati";
                oauthToken = "rerum";
                pageSize = 237893L;
                pageToken = "asperiores";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "modi";
                uploadProtocol = "iste";
            }};            

            MlProjectsLocationsListResponse res = sdk.projects.mlProjectsLocationsList(req, new MlProjectsLocationsListSecurity() {{
                option1 = new MlProjectsLocationsListSecurityOption1("dolorum", "deleniti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudMlV1ListLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsLocationsStudiesCreate

Creates a study.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesCreateRequest;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesCreateResponse;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1AutomatedStoppingConfig;
import org.openapis.openapi.models.shared.GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig;
import org.openapis.openapi.models.shared.GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig;
import org.openapis.openapi.models.shared.GoogleCloudMlV1StudyConfig;
import org.openapis.openapi.models.shared.GoogleCloudMlV1StudyConfigAlgorithmEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1StudyConfigMetricSpec;
import org.openapis.openapi.models.shared.GoogleCloudMlV1StudyConfigMetricSpecGoalEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1StudyConfigParameterSpec;
import org.openapis.openapi.models.shared.GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec;
import org.openapis.openapi.models.shared.GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec;
import org.openapis.openapi.models.shared.GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec;
import org.openapis.openapi.models.shared.GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec;
import org.openapis.openapi.models.shared.GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec;
import org.openapis.openapi.models.shared.GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec;
import org.openapis.openapi.models.shared.GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec;
import org.openapis.openapi.models.shared.GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1StudyConfigParameterSpecTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1StudyInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsLocationsStudiesCreateRequest req = new MlProjectsLocationsStudiesCreateRequest("pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudMlV1StudyInput = new GoogleCloudMlV1StudyInput() {{
                    studyConfig = new GoogleCloudMlV1StudyConfig() {{
                        algorithm = GoogleCloudMlV1StudyConfigAlgorithmEnum.RANDOM_SEARCH;
                        automatedStoppingConfig = new GoogleCloudMlV1AutomatedStoppingConfig() {{
                            decayCurveStoppingConfig = new GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig() {{
                                useElapsedTime = false;
                            }};;
                            medianAutomatedStoppingConfig = new GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig() {{
                                useElapsedTime = false;
                            }};;
                        }};;
                        metrics = new org.openapis.openapi.models.shared.GoogleCloudMlV1StudyConfigMetricSpec[]{{
                            add(new GoogleCloudMlV1StudyConfigMetricSpec() {{
                                goal = GoogleCloudMlV1StudyConfigMetricSpecGoalEnum.MINIMIZE;
                                metric = "quaerat";
                            }}),
                            add(new GoogleCloudMlV1StudyConfigMetricSpec() {{
                                goal = GoogleCloudMlV1StudyConfigMetricSpecGoalEnum.MAXIMIZE;
                                metric = "aliquid";
                            }}),
                            add(new GoogleCloudMlV1StudyConfigMetricSpec() {{
                                goal = GoogleCloudMlV1StudyConfigMetricSpecGoalEnum.GOAL_TYPE_UNSPECIFIED;
                                metric = "dolorem";
                            }}),
                        }};
                        parameters = new org.openapis.openapi.models.shared.GoogleCloudMlV1StudyConfigParameterSpec[]{{
                            add(new GoogleCloudMlV1StudyConfigParameterSpec() {{
                                categoricalValueSpec = new GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec() {{
                                    values = new String[]{{
                                        add("ipsum"),
                                    }};
                                }};
                                childParameterSpecs = new org.openapis.openapi.models.shared.GoogleCloudMlV1StudyConfigParameterSpec[]{{
                                    add(new GoogleCloudMlV1StudyConfigParameterSpec() {{}}),
                                    add(new GoogleCloudMlV1StudyConfigParameterSpec() {{}}),
                                    add(new GoogleCloudMlV1StudyConfigParameterSpec() {{}}),
                                    add(new GoogleCloudMlV1StudyConfigParameterSpec() {{}}),
                                }};
                                discreteValueSpec = new GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec() {{
                                    values = new Double[]{{
                                        add(7395.51),
                                        add(4521.09),
                                        add(4904.59),
                                    }};
                                }};
                                doubleValueSpec = new GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec() {{
                                    maxValue = 9702.37;
                                    minValue = 2274.14;
                                }};
                                integerValueSpec = new GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec() {{
                                    maxValue = "dolorum";
                                    minValue = "numquam";
                                }};
                                parameter = "veritatis";
                                parentCategoricalValues = new GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec() {{
                                    values = new String[]{{
                                        add("ipsa"),
                                    }};
                                }};
                                parentDiscreteValues = new GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec() {{
                                    values = new Double[]{{
                                        add(4878.38),
                                        add(3117.96),
                                    }};
                                }};
                                parentIntValues = new GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec() {{
                                    values = new String[]{{
                                        add("quidem"),
                                        add("voluptatibus"),
                                        add("voluptas"),
                                        add("natus"),
                                    }};
                                }};
                                scaleType = GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum.SCALE_TYPE_UNSPECIFIED;
                                type = GoogleCloudMlV1StudyConfigParameterSpecTypeEnum.INTEGER;
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "sit";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "soluta";
                key = "dolorum";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "voluptate";
                studyId = "dolorum";
                uploadType = "deleniti";
                uploadProtocol = "omnis";
            }};            

            MlProjectsLocationsStudiesCreateResponse res = sdk.projects.mlProjectsLocationsStudiesCreate(req, new MlProjectsLocationsStudiesCreateSecurity("necessitatibus", "distinctio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudMlV1Study != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsLocationsStudiesList

Lists all the studies in a region for an associated project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesListRequest;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesListResponse;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsLocationsStudiesListRequest req = new MlProjectsLocationsStudiesListRequest("asperiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsum";
                alt = AltEnum.MEDIA;
                callback = "id";
                fields = "saepe";
                key = "eius";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "amet";
                uploadProtocol = "optio";
            }};            

            MlProjectsLocationsStudiesListResponse res = sdk.projects.mlProjectsLocationsStudiesList(req, new MlProjectsLocationsStudiesListSecurity("accusamus", "ad") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudMlV1ListStudiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsLocationsStudiesTrialsAddMeasurement

Adds a measurement of the objective metrics to a trial. This measurement is assumed to have been taken before the trial is complete.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsAddMeasurementRequest;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsAddMeasurementResponse;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsAddMeasurementSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1AddTrialMeasurementRequest;
import org.openapis.openapi.models.shared.GoogleCloudMlV1Measurement;
import org.openapis.openapi.models.shared.GoogleCloudMlV1MeasurementMetric;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsLocationsStudiesTrialsAddMeasurementRequest req = new MlProjectsLocationsStudiesTrialsAddMeasurementRequest("saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudMlV1AddTrialMeasurementRequest = new GoogleCloudMlV1AddTrialMeasurementRequest() {{
                    measurement = new GoogleCloudMlV1Measurement() {{
                        elapsedTime = "deserunt";
                        metrics = new org.openapis.openapi.models.shared.GoogleCloudMlV1MeasurementMetric[]{{
                            add(new GoogleCloudMlV1MeasurementMetric() {{
                                metric = "minima";
                                value = 8310.49;
                            }}),
                            add(new GoogleCloudMlV1MeasurementMetric() {{
                                metric = "totam";
                                value = 6289.82;
                            }}),
                            add(new GoogleCloudMlV1MeasurementMetric() {{
                                metric = "alias";
                                value = 8726.51;
                            }}),
                        }};
                        stepCount = "quaerat";
                    }};;
                }};;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "officiis";
                key = "qui";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "esse";
                uploadProtocol = "harum";
            }};            

            MlProjectsLocationsStudiesTrialsAddMeasurementResponse res = sdk.projects.mlProjectsLocationsStudiesTrialsAddMeasurement(req, new MlProjectsLocationsStudiesTrialsAddMeasurementSecurity("iusto", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudMlV1Trial != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsLocationsStudiesTrialsCheckEarlyStoppingState

Checks whether a trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateRequest;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateResponse;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateRequest req = new MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateRequest("quisquam") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("tempore", "accusamus");
                }};
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "sapiente";
                key = "totam";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "expedita";
                uploadProtocol = "neque";
            }};            

            MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateResponse res = sdk.projects.mlProjectsLocationsStudiesTrialsCheckEarlyStoppingState(req, new MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateSecurity("sed", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsLocationsStudiesTrialsComplete

Marks a trial as complete.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsCompleteRequest;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsCompleteResponse;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsCompleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1CompleteTrialRequest;
import org.openapis.openapi.models.shared.GoogleCloudMlV1Measurement;
import org.openapis.openapi.models.shared.GoogleCloudMlV1MeasurementMetric;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsLocationsStudiesTrialsCompleteRequest req = new MlProjectsLocationsStudiesTrialsCompleteRequest("libero") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudMlV1CompleteTrialRequest = new GoogleCloudMlV1CompleteTrialRequest() {{
                    finalMeasurement = new GoogleCloudMlV1Measurement() {{
                        elapsedTime = "deserunt";
                        metrics = new org.openapis.openapi.models.shared.GoogleCloudMlV1MeasurementMetric[]{{
                            add(new GoogleCloudMlV1MeasurementMetric() {{
                                metric = "ipsum";
                                value = 2776.28;
                            }}),
                            add(new GoogleCloudMlV1MeasurementMetric() {{
                                metric = "qui";
                                value = 5867.84;
                            }}),
                        }};
                        stepCount = "maxime";
                    }};;
                    infeasibleReason = "pariatur";
                    trialInfeasible = false;
                }};;
                accessToken = "soluta";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "totam";
                key = "incidunt";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "distinctio";
                uploadProtocol = "facilis";
            }};            

            MlProjectsLocationsStudiesTrialsCompleteResponse res = sdk.projects.mlProjectsLocationsStudiesTrialsComplete(req, new MlProjectsLocationsStudiesTrialsCompleteSecurity("aliquid", "quam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudMlV1Trial != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsLocationsStudiesTrialsCreate

Adds a user provided trial to a study.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsCreateRequest;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsCreateResponse;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1Measurement;
import org.openapis.openapi.models.shared.GoogleCloudMlV1MeasurementMetric;
import org.openapis.openapi.models.shared.GoogleCloudMlV1TrialInput;
import org.openapis.openapi.models.shared.GoogleCloudMlV1TrialParameter;
import org.openapis.openapi.models.shared.GoogleCloudMlV1TrialStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsLocationsStudiesTrialsCreateRequest req = new MlProjectsLocationsStudiesTrialsCreateRequest("molestias") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudMlV1TrialInput = new GoogleCloudMlV1TrialInput() {{
                    finalMeasurement = new GoogleCloudMlV1Measurement() {{
                        elapsedTime = "qui";
                        metrics = new org.openapis.openapi.models.shared.GoogleCloudMlV1MeasurementMetric[]{{
                            add(new GoogleCloudMlV1MeasurementMetric() {{
                                metric = "fugit";
                                value = 1649.59;
                            }}),
                        }};
                        stepCount = "odio";
                    }};;
                    measurements = new org.openapis.openapi.models.shared.GoogleCloudMlV1Measurement[]{{
                        add(new GoogleCloudMlV1Measurement() {{
                            elapsedTime = "ullam";
                            metrics = new org.openapis.openapi.models.shared.GoogleCloudMlV1MeasurementMetric[]{{
                                add(new GoogleCloudMlV1MeasurementMetric() {{
                                    metric = "hic";
                                    value = 304.52;
                                }}),
                                add(new GoogleCloudMlV1MeasurementMetric() {{
                                    metric = "cumque";
                                    value = 7469.94;
                                }}),
                                add(new GoogleCloudMlV1MeasurementMetric() {{
                                    metric = "nobis";
                                    value = 925.96;
                                }}),
                            }};
                            stepCount = "saepe";
                        }}),
                    }};
                    parameters = new org.openapis.openapi.models.shared.GoogleCloudMlV1TrialParameter[]{{
                        add(new GoogleCloudMlV1TrialParameter() {{
                            floatValue = 834.22;
                            intValue = "nobis";
                            parameter = "quos";
                            stringValue = "tempore";
                        }}),
                    }};
                    state = GoogleCloudMlV1TrialStateEnum.ACTIVE;
                }};;
                accessToken = "aperiam";
                alt = AltEnum.PROTO;
                callback = "dolorem";
                fields = "dolore";
                key = "labore";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "architecto";
                uploadProtocol = "quae";
            }};            

            MlProjectsLocationsStudiesTrialsCreateResponse res = sdk.projects.mlProjectsLocationsStudiesTrialsCreate(req, new MlProjectsLocationsStudiesTrialsCreateSecurity("aut", "quas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudMlV1Trial != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsLocationsStudiesTrialsList

Lists the trials associated with a study.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsListRequest;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsListResponse;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsLocationsStudiesTrialsListRequest req = new MlProjectsLocationsStudiesTrialsListRequest("itaque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "porro";
                fields = "doloribus";
                key = "ut";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "qui";
                uploadProtocol = "quae";
            }};            

            MlProjectsLocationsStudiesTrialsListResponse res = sdk.projects.mlProjectsLocationsStudiesTrialsList(req, new MlProjectsLocationsStudiesTrialsListSecurity("laudantium", "odio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudMlV1ListTrialsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsLocationsStudiesTrialsListOptimalTrials

Lists the pareto-optimal trials for multi-objective study or the optimal trials for single-objective study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsListOptimalTrialsRequest;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsListOptimalTrialsResponse;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsListOptimalTrialsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsLocationsStudiesTrialsListOptimalTrialsRequest req = new MlProjectsLocationsStudiesTrialsListOptimalTrialsRequest("occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("vero", "omnis");
                    put("quis", "ipsum");
                    put("delectus", "voluptate");
                    put("consectetur", "vero");
                }};
                accessToken = "tenetur";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "distinctio";
                key = "quod";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "similique";
                uploadType = "facilis";
                uploadProtocol = "vero";
            }};            

            MlProjectsLocationsStudiesTrialsListOptimalTrialsResponse res = sdk.projects.mlProjectsLocationsStudiesTrialsListOptimalTrials(req, new MlProjectsLocationsStudiesTrialsListOptimalTrialsSecurity("ducimus", "dolore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudMlV1ListOptimalTrialsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsLocationsStudiesTrialsStop

Stops a trial.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsStopRequest;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsStopResponse;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsStopSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsLocationsStudiesTrialsStopRequest req = new MlProjectsLocationsStudiesTrialsStopRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("natus", "impedit");
                }};
                accessToken = "aut";
                alt = AltEnum.PROTO;
                callback = "exercitationem";
                fields = "nulla";
                key = "fugit";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "doloribus";
                uploadProtocol = "iusto";
            }};            

            MlProjectsLocationsStudiesTrialsStopResponse res = sdk.projects.mlProjectsLocationsStudiesTrialsStop(req, new MlProjectsLocationsStudiesTrialsStopSecurity("eligendi", "ducimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudMlV1Trial != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsLocationsStudiesTrialsSuggest

Adds one or more trials to a study, with parameter values suggested by AI Platform Vizier. Returns a long-running operation associated with the generation of trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsSuggestRequest;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsSuggestResponse;
import org.openapis.openapi.models.operations.MlProjectsLocationsStudiesTrialsSuggestSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1SuggestTrialsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsLocationsStudiesTrialsSuggestRequest req = new MlProjectsLocationsStudiesTrialsSuggestRequest("alias") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudMlV1SuggestTrialsRequest = new GoogleCloudMlV1SuggestTrialsRequest() {{
                    clientId = "tempora";
                    suggestionCount = 368584;
                }};;
                accessToken = "ea";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "possimus";
                key = "magnam";
                oauthToken = "ratione";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "laudantium";
                uploadProtocol = "dicta";
            }};            

            MlProjectsLocationsStudiesTrialsSuggestResponse res = sdk.projects.mlProjectsLocationsStudiesTrialsSuggest(req, new MlProjectsLocationsStudiesTrialsSuggestSecurity("dolor", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsModelsCreate

Creates a model which will later contain one or more versions. You must add at least one version before you can request predictions from the model. Add versions by calling projects.models.versions.create.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsModelsCreateRequest;
import org.openapis.openapi.models.operations.MlProjectsModelsCreateResponse;
import org.openapis.openapi.models.operations.MlProjectsModelsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1AcceleratorConfig;
import org.openapis.openapi.models.shared.GoogleCloudMlV1AcceleratorConfigTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1AutoScaling;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ContainerPort;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ContainerSpec;
import org.openapis.openapi.models.shared.GoogleCloudMlV1EnvVar;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ExplanationConfig;
import org.openapis.openapi.models.shared.GoogleCloudMlV1IntegratedGradientsAttribution;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ManualScaling;
import org.openapis.openapi.models.shared.GoogleCloudMlV1MetricSpec;
import org.openapis.openapi.models.shared.GoogleCloudMlV1MetricSpecNameEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ModelInput;
import org.openapis.openapi.models.shared.GoogleCloudMlV1RequestLoggingConfig;
import org.openapis.openapi.models.shared.GoogleCloudMlV1RouteMap;
import org.openapis.openapi.models.shared.GoogleCloudMlV1SampledShapleyAttribution;
import org.openapis.openapi.models.shared.GoogleCloudMlV1VersionFrameworkEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1VersionInput;
import org.openapis.openapi.models.shared.GoogleCloudMlV1VersionStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1XraiAttribution;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsModelsCreateRequest req = new MlProjectsModelsCreateRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudMlV1ModelInput = new GoogleCloudMlV1ModelInput() {{
                    defaultVersion = new GoogleCloudMlV1VersionInput() {{
                        acceleratorConfig = new GoogleCloudMlV1AcceleratorConfig() {{
                            count = "nulla";
                            type = GoogleCloudMlV1AcceleratorConfigTypeEnum.NVIDIA_TESLA_A100;
                        }};;
                        autoScaling = new GoogleCloudMlV1AutoScaling() {{
                            maxNodes = 972920;
                            metrics = new org.openapis.openapi.models.shared.GoogleCloudMlV1MetricSpec[]{{
                                add(new GoogleCloudMlV1MetricSpec() {{
                                    name = GoogleCloudMlV1MetricSpecNameEnum.GPU_DUTY_CYCLE;
                                    target = 788873;
                                }}),
                                add(new GoogleCloudMlV1MetricSpec() {{
                                    name = GoogleCloudMlV1MetricSpecNameEnum.GPU_DUTY_CYCLE;
                                    target = 411372;
                                }}),
                            }};
                            minNodes = 774048;
                        }};;
                        container = new GoogleCloudMlV1ContainerSpec() {{
                            args = new String[]{{
                                add("veniam"),
                                add("aliquid"),
                            }};
                            command = new String[]{{
                                add("magnam"),
                            }};
                            env = new org.openapis.openapi.models.shared.GoogleCloudMlV1EnvVar[]{{
                                add(new GoogleCloudMlV1EnvVar() {{
                                    name = "Glenn Walter";
                                    value = "eaque";
                                }}),
                                add(new GoogleCloudMlV1EnvVar() {{
                                    name = "Ms. Marco Ankunding";
                                    value = "aliquam";
                                }}),
                            }};
                            image = "fugit";
                            ports = new org.openapis.openapi.models.shared.GoogleCloudMlV1ContainerPort[]{{
                                add(new GoogleCloudMlV1ContainerPort() {{
                                    containerPort = 79522;
                                }}),
                                add(new GoogleCloudMlV1ContainerPort() {{
                                    containerPort = 250622;
                                }}),
                                add(new GoogleCloudMlV1ContainerPort() {{
                                    containerPort = 89603;
                                }}),
                                add(new GoogleCloudMlV1ContainerPort() {{
                                    containerPort = 677412;
                                }}),
                            }};
                        }};;
                        createTime = "laborum";
                        deploymentUri = "placeat";
                        description = "velit";
                        errorMessage = "eum";
                        etag = "autem";
                        explanationConfig = new GoogleCloudMlV1ExplanationConfig() {{
                            integratedGradientsAttribution = new GoogleCloudMlV1IntegratedGradientsAttribution() {{
                                numIntegralSteps = 752135;
                            }};;
                            sampledShapleyAttribution = new GoogleCloudMlV1SampledShapleyAttribution() {{
                                numPaths = 557369;
                            }};;
                            xraiAttribution = new GoogleCloudMlV1XraiAttribution() {{
                                numIntegralSteps = 829603;
                            }};;
                        }};;
                        framework = GoogleCloudMlV1VersionFrameworkEnum.XGBOOST;
                        isDefault = false;
                        labels = new java.util.HashMap<String, String>() {{
                            put("libero", "quasi");
                            put("tempora", "numquam");
                        }};
                        lastUseTime = "explicabo";
                        machineType = "provident";
                        manualScaling = new GoogleCloudMlV1ManualScaling() {{
                            nodes = 55374;
                        }};;
                        name = "Megan Kuhlman";
                        packageUris = new String[]{{
                            add("rem"),
                            add("fuga"),
                        }};
                        predictionClass = "reprehenderit";
                        pythonVersion = "quidem";
                        requestLoggingConfig = new GoogleCloudMlV1RequestLoggingConfig() {{
                            bigqueryTableName = "fugiat";
                            samplingPercentage = 2835.19;
                        }};;
                        routes = new GoogleCloudMlV1RouteMap() {{
                            health = "eum";
                            predict = "suscipit";
                        }};;
                        runtimeVersion = "assumenda";
                        serviceAccount = "eos";
                        state = GoogleCloudMlV1VersionStateEnum.FAILED;
                    }};;
                    description = "quisquam";
                    etag = "veritatis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("id", "quidem");
                    }};
                    name = "Angelica Stamm";
                    onlinePredictionConsoleLogging = false;
                    onlinePredictionLogging = false;
                    regions = new String[]{{
                        add("eos"),
                        add("voluptas"),
                    }};
                }};;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "consequatur";
                fields = "tempora";
                key = "debitis";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "sequi";
                uploadProtocol = "quo";
            }};            

            MlProjectsModelsCreateResponse res = sdk.projects.mlProjectsModelsCreate(req, new MlProjectsModelsCreateSecurity("esse", "recusandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudMlV1Model != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsModelsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsModelsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.MlProjectsModelsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.MlProjectsModelsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsModelsGetIamPolicyRequest req = new MlProjectsModelsGetIamPolicyRequest("aperiam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "inventore";
                fields = "nihil";
                key = "totam";
                oauthToken = "accusamus";
                optionsRequestedPolicyVersion = 306810L;
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "occaecati";
                uploadProtocol = "commodi";
            }};            

            MlProjectsModelsGetIamPolicyResponse res = sdk.projects.mlProjectsModelsGetIamPolicy(req, new MlProjectsModelsGetIamPolicySecurity("sapiente", "dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleIamV1Policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsModelsList

Lists the models in a project. Each project can contain multiple models, and each model can have multiple versions. If there are no models that match the request parameters, the list request returns an empty response body: {}.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsModelsListRequest;
import org.openapis.openapi.models.operations.MlProjectsModelsListResponse;
import org.openapis.openapi.models.operations.MlProjectsModelsListSecurity;
import org.openapis.openapi.models.operations.MlProjectsModelsListSecurityOption1;
import org.openapis.openapi.models.operations.MlProjectsModelsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsModelsListRequest req = new MlProjectsModelsListRequest("deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusantium";
                alt = AltEnum.PROTO;
                callback = "eum";
                fields = "quas";
                filter = "praesentium";
                key = "consequuntur";
                oauthToken = "deleniti";
                pageSize = 143829L;
                pageToken = "fuga";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "incidunt";
                uploadProtocol = "atque";
            }};            

            MlProjectsModelsListResponse res = sdk.projects.mlProjectsModelsList(req, new MlProjectsModelsListSecurity() {{
                option1 = new MlProjectsModelsListSecurityOption1("explicabo", "minima") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudMlV1ListModelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsModelsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsModelsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.MlProjectsModelsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.MlProjectsModelsSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIamV1AuditConfig;
import org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig;
import org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.GoogleIamV1Binding;
import org.openapis.openapi.models.shared.GoogleIamV1Policy;
import org.openapis.openapi.models.shared.GoogleIamV1SetIamPolicyRequest;
import org.openapis.openapi.models.shared.GoogleTypeExpr;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsModelsSetIamPolicyRequest req = new MlProjectsModelsSetIamPolicyRequest("nisi") {{
                dollarXgafv = XgafvEnum.ONE;
                googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest() {{
                    policy = new GoogleIamV1Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("explicabo"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "occaecati";
                            }}),
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("esse"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("veritatis"),
                                            add("esse"),
                                            add("quod"),
                                            add("nam"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quasi"),
                                            add("saepe"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "harum";
                            }}),
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("occaecati"),
                                            add("minima"),
                                            add("distinctio"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("culpa"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "adipisci";
                            }}),
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("consequatur"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sapiente"),
                                            add("consectetur"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("provident"),
                                            add("a"),
                                            add("nulla"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quasi"),
                                            add("a"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "sint";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                            add(new GoogleIamV1Binding() {{
                                condition = new GoogleTypeExpr() {{
                                    description = "possimus";
                                    expression = "quia";
                                    location = "eveniet";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("veritatis"),
                                    add("consequuntur"),
                                    add("quasi"),
                                    add("similique"),
                                }};
                                role = "culpa";
                            }}),
                            add(new GoogleIamV1Binding() {{
                                condition = new GoogleTypeExpr() {{
                                    description = "aliquid";
                                    expression = "tenetur";
                                    location = "quae";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("in"),
                                    add("eius"),
                                }};
                                role = "libero";
                            }}),
                            add(new GoogleIamV1Binding() {{
                                condition = new GoogleTypeExpr() {{
                                    description = "illum";
                                    expression = "soluta";
                                    location = "accusantium";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("dicta"),
                                    add("ullam"),
                                    add("reprehenderit"),
                                    add("ullam"),
                                }};
                                role = "nisi";
                            }}),
                            add(new GoogleIamV1Binding() {{
                                condition = new GoogleTypeExpr() {{
                                    description = "aut";
                                    expression = "voluptatum";
                                    location = "qui";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("deleniti"),
                                    add("itaque"),
                                }};
                                role = "dolorum";
                            }}),
                        }};
                        etag = "architecto";
                        version = 609178;
                    }};;
                    updateMask = "tenetur";
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

            MlProjectsModelsSetIamPolicyResponse res = sdk.projects.mlProjectsModelsSetIamPolicy(req, new MlProjectsModelsSetIamPolicySecurity("iste", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleIamV1Policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsModelsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsModelsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.MlProjectsModelsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.MlProjectsModelsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIamV1TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsModelsTestIamPermissionsRequest req = new MlProjectsModelsTestIamPermissionsRequest("accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("laudantium"),
                    }};
                }};;
                accessToken = "eum";
                alt = AltEnum.MEDIA;
                callback = "ab";
                fields = "corrupti";
                key = "non";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "occaecati";
                uploadProtocol = "numquam";
            }};            

            MlProjectsModelsTestIamPermissionsResponse res = sdk.projects.mlProjectsModelsTestIamPermissions(req, new MlProjectsModelsTestIamPermissionsSecurity("impedit", "explicabo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleIamV1TestIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsModelsVersionsCreate

Creates a new version of a model from a trained TensorFlow model. If the version created in the cloud by this call is the first deployed version of the specified model, it will be made the default version of the model. When you add a version to a model that already has one or more versions, the default version does not automatically change. If you want a new version to be the default, you must call projects.models.versions.setDefault.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsModelsVersionsCreateRequest;
import org.openapis.openapi.models.operations.MlProjectsModelsVersionsCreateResponse;
import org.openapis.openapi.models.operations.MlProjectsModelsVersionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1AcceleratorConfig;
import org.openapis.openapi.models.shared.GoogleCloudMlV1AcceleratorConfigTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1AutoScaling;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ContainerPort;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ContainerSpec;
import org.openapis.openapi.models.shared.GoogleCloudMlV1EnvVar;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ExplanationConfig;
import org.openapis.openapi.models.shared.GoogleCloudMlV1IntegratedGradientsAttribution;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ManualScaling;
import org.openapis.openapi.models.shared.GoogleCloudMlV1MetricSpec;
import org.openapis.openapi.models.shared.GoogleCloudMlV1MetricSpecNameEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1RequestLoggingConfig;
import org.openapis.openapi.models.shared.GoogleCloudMlV1RouteMap;
import org.openapis.openapi.models.shared.GoogleCloudMlV1SampledShapleyAttribution;
import org.openapis.openapi.models.shared.GoogleCloudMlV1VersionFrameworkEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1VersionInput;
import org.openapis.openapi.models.shared.GoogleCloudMlV1VersionStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1XraiAttribution;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsModelsVersionsCreateRequest req = new MlProjectsModelsVersionsCreateRequest("voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudMlV1VersionInput = new GoogleCloudMlV1VersionInput() {{
                    acceleratorConfig = new GoogleCloudMlV1AcceleratorConfig() {{
                        count = "dignissimos";
                        type = GoogleCloudMlV1AcceleratorConfigTypeEnum.NVIDIA_TESLA_K80;
                    }};;
                    autoScaling = new GoogleCloudMlV1AutoScaling() {{
                        maxNodes = 981640;
                        metrics = new org.openapis.openapi.models.shared.GoogleCloudMlV1MetricSpec[]{{
                            add(new GoogleCloudMlV1MetricSpec() {{
                                name = GoogleCloudMlV1MetricSpecNameEnum.METRIC_NAME_UNSPECIFIED;
                                target = 974257;
                            }}),
                            add(new GoogleCloudMlV1MetricSpec() {{
                                name = GoogleCloudMlV1MetricSpecNameEnum.CPU_USAGE;
                                target = 990345;
                            }}),
                            add(new GoogleCloudMlV1MetricSpec() {{
                                name = GoogleCloudMlV1MetricSpecNameEnum.METRIC_NAME_UNSPECIFIED;
                                target = 409054;
                            }}),
                        }};
                        minNodes = 310067;
                    }};;
                    container = new GoogleCloudMlV1ContainerSpec() {{
                        args = new String[]{{
                            add("repellendus"),
                        }};
                        command = new String[]{{
                            add("maxime"),
                            add("dignissimos"),
                            add("officia"),
                        }};
                        env = new org.openapis.openapi.models.shared.GoogleCloudMlV1EnvVar[]{{
                            add(new GoogleCloudMlV1EnvVar() {{
                                name = "Anna Hahn";
                                value = "labore";
                            }}),
                            add(new GoogleCloudMlV1EnvVar() {{
                                name = "Josephine Paucek";
                                value = "velit";
                            }}),
                            add(new GoogleCloudMlV1EnvVar() {{
                                name = "Rex Walter";
                                value = "vel";
                            }}),
                            add(new GoogleCloudMlV1EnvVar() {{
                                name = "Billie Keebler";
                                value = "facilis";
                            }}),
                        }};
                        image = "cum";
                        ports = new org.openapis.openapi.models.shared.GoogleCloudMlV1ContainerPort[]{{
                            add(new GoogleCloudMlV1ContainerPort() {{
                                containerPort = 447144;
                            }}),
                            add(new GoogleCloudMlV1ContainerPort() {{
                                containerPort = 360545;
                            }}),
                        }};
                    }};;
                    createTime = "reiciendis";
                    deploymentUri = "assumenda";
                    description = "nemo";
                    errorMessage = "recusandae";
                    etag = "aliquid";
                    explanationConfig = new GoogleCloudMlV1ExplanationConfig() {{
                        integratedGradientsAttribution = new GoogleCloudMlV1IntegratedGradientsAttribution() {{
                            numIntegralSteps = 46007;
                        }};;
                        sampledShapleyAttribution = new GoogleCloudMlV1SampledShapleyAttribution() {{
                            numPaths = 738683;
                        }};;
                        xraiAttribution = new GoogleCloudMlV1XraiAttribution() {{
                            numIntegralSteps = 232627;
                        }};;
                    }};;
                    framework = GoogleCloudMlV1VersionFrameworkEnum.TENSORFLOW;
                    isDefault = false;
                    labels = new java.util.HashMap<String, String>() {{
                        put("earum", "facere");
                        put("numquam", "doloribus");
                    }};
                    lastUseTime = "suscipit";
                    machineType = "reiciendis";
                    manualScaling = new GoogleCloudMlV1ManualScaling() {{
                        nodes = 697142;
                    }};;
                    name = "Dr. Terence Gulgowski";
                    packageUris = new String[]{{
                        add("amet"),
                    }};
                    predictionClass = "beatae";
                    pythonVersion = "dignissimos";
                    requestLoggingConfig = new GoogleCloudMlV1RequestLoggingConfig() {{
                        bigqueryTableName = "a";
                        samplingPercentage = 8915.23;
                    }};;
                    routes = new GoogleCloudMlV1RouteMap() {{
                        health = "consectetur";
                        predict = "corporis";
                    }};;
                    runtimeVersion = "harum";
                    serviceAccount = "laboriosam";
                    state = GoogleCloudMlV1VersionStateEnum.UNKNOWN;
                }};;
                accessToken = "voluptates";
                alt = AltEnum.PROTO;
                callback = "vitae";
                fields = "accusamus";
                key = "similique";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "voluptas";
                uploadProtocol = "voluptas";
            }};            

            MlProjectsModelsVersionsCreateResponse res = sdk.projects.mlProjectsModelsVersionsCreate(req, new MlProjectsModelsVersionsCreateSecurity("voluptas", "minima") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsModelsVersionsDelete

Deletes a model version. Each model can have multiple versions deployed and in use at any given time. Use this method to remove a single version. Note: You cannot delete the version that is set as the default version of the model unless it is the only remaining version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsModelsVersionsDeleteRequest;
import org.openapis.openapi.models.operations.MlProjectsModelsVersionsDeleteResponse;
import org.openapis.openapi.models.operations.MlProjectsModelsVersionsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsModelsVersionsDeleteRequest req = new MlProjectsModelsVersionsDeleteRequest("nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "blanditiis";
                key = "in";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "aliquam";
                uploadType = "officiis";
                uploadProtocol = "temporibus";
            }};            

            MlProjectsModelsVersionsDeleteResponse res = sdk.projects.mlProjectsModelsVersionsDelete(req, new MlProjectsModelsVersionsDeleteSecurity("ullam", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsModelsVersionsList

Gets basic information about all the versions of a model. If you expect that a model has many versions, or if you need to handle only a limited number of results at a time, you can request that the list be retrieved in batches (called pages). If there are no versions that match the request parameters, the list request returns an empty response body: {}.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsModelsVersionsListRequest;
import org.openapis.openapi.models.operations.MlProjectsModelsVersionsListResponse;
import org.openapis.openapi.models.operations.MlProjectsModelsVersionsListSecurity;
import org.openapis.openapi.models.operations.MlProjectsModelsVersionsListSecurityOption1;
import org.openapis.openapi.models.operations.MlProjectsModelsVersionsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsModelsVersionsListRequest req = new MlProjectsModelsVersionsListRequest("cum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quas";
                alt = AltEnum.PROTO;
                callback = "nesciunt";
                fields = "culpa";
                filter = "corrupti";
                key = "pariatur";
                oauthToken = "totam";
                pageSize = 940210L;
                pageToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "sit";
                uploadProtocol = "rerum";
            }};            

            MlProjectsModelsVersionsListResponse res = sdk.projects.mlProjectsModelsVersionsList(req, new MlProjectsModelsVersionsListSecurity() {{
                option1 = new MlProjectsModelsVersionsListSecurityOption1("sed", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudMlV1ListVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsModelsVersionsPatch

Updates the specified Version resource. Currently the only update-able fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsModelsVersionsPatchRequest;
import org.openapis.openapi.models.operations.MlProjectsModelsVersionsPatchResponse;
import org.openapis.openapi.models.operations.MlProjectsModelsVersionsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1AcceleratorConfig;
import org.openapis.openapi.models.shared.GoogleCloudMlV1AcceleratorConfigTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1AutoScaling;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ContainerPort;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ContainerSpec;
import org.openapis.openapi.models.shared.GoogleCloudMlV1EnvVar;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ExplanationConfig;
import org.openapis.openapi.models.shared.GoogleCloudMlV1IntegratedGradientsAttribution;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ManualScaling;
import org.openapis.openapi.models.shared.GoogleCloudMlV1MetricSpec;
import org.openapis.openapi.models.shared.GoogleCloudMlV1MetricSpecNameEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1RequestLoggingConfig;
import org.openapis.openapi.models.shared.GoogleCloudMlV1RouteMap;
import org.openapis.openapi.models.shared.GoogleCloudMlV1SampledShapleyAttribution;
import org.openapis.openapi.models.shared.GoogleCloudMlV1VersionFrameworkEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1VersionInput;
import org.openapis.openapi.models.shared.GoogleCloudMlV1VersionStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1XraiAttribution;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsModelsVersionsPatchRequest req = new MlProjectsModelsVersionsPatchRequest("explicabo") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudMlV1VersionInput = new GoogleCloudMlV1VersionInput() {{
                    acceleratorConfig = new GoogleCloudMlV1AcceleratorConfig() {{
                        count = "facilis";
                        type = GoogleCloudMlV1AcceleratorConfigTypeEnum.NVIDIA_TESLA_T4;
                    }};;
                    autoScaling = new GoogleCloudMlV1AutoScaling() {{
                        maxNodes = 709072;
                        metrics = new org.openapis.openapi.models.shared.GoogleCloudMlV1MetricSpec[]{{
                            add(new GoogleCloudMlV1MetricSpec() {{
                                name = GoogleCloudMlV1MetricSpecNameEnum.CPU_USAGE;
                                target = 292794;
                            }}),
                        }};
                        minNodes = 671907;
                    }};;
                    container = new GoogleCloudMlV1ContainerSpec() {{
                        args = new String[]{{
                            add("in"),
                        }};
                        command = new String[]{{
                            add("quidem"),
                            add("explicabo"),
                        }};
                        env = new org.openapis.openapi.models.shared.GoogleCloudMlV1EnvVar[]{{
                            add(new GoogleCloudMlV1EnvVar() {{
                                name = "Joe Hoppe";
                                value = "illo";
                            }}),
                            add(new GoogleCloudMlV1EnvVar() {{
                                name = "Thomas Lockman";
                                value = "sed";
                            }}),
                        }};
                        image = "provident";
                        ports = new org.openapis.openapi.models.shared.GoogleCloudMlV1ContainerPort[]{{
                            add(new GoogleCloudMlV1ContainerPort() {{
                                containerPort = 896762;
                            }}),
                            add(new GoogleCloudMlV1ContainerPort() {{
                                containerPort = 215529;
                            }}),
                        }};
                    }};;
                    createTime = "ea";
                    deploymentUri = "occaecati";
                    description = "quos";
                    errorMessage = "voluptatibus";
                    etag = "tempora";
                    explanationConfig = new GoogleCloudMlV1ExplanationConfig() {{
                        integratedGradientsAttribution = new GoogleCloudMlV1IntegratedGradientsAttribution() {{
                            numIntegralSteps = 273009;
                        }};;
                        sampledShapleyAttribution = new GoogleCloudMlV1SampledShapleyAttribution() {{
                            numPaths = 455444;
                        }};;
                        xraiAttribution = new GoogleCloudMlV1XraiAttribution() {{
                            numIntegralSteps = 970076;
                        }};;
                    }};;
                    framework = GoogleCloudMlV1VersionFrameworkEnum.TENSORFLOW;
                    isDefault = false;
                    labels = new java.util.HashMap<String, String>() {{
                        put("non", "officiis");
                    }};
                    lastUseTime = "praesentium";
                    machineType = "facilis";
                    manualScaling = new GoogleCloudMlV1ManualScaling() {{
                        nodes = 310381;
                    }};;
                    name = "Brittany Tremblay DDS";
                    packageUris = new String[]{{
                        add("veniam"),
                        add("minima"),
                        add("recusandae"),
                    }};
                    predictionClass = "reiciendis";
                    pythonVersion = "nulla";
                    requestLoggingConfig = new GoogleCloudMlV1RequestLoggingConfig() {{
                        bigqueryTableName = "magni";
                        samplingPercentage = 486.9;
                    }};;
                    routes = new GoogleCloudMlV1RouteMap() {{
                        health = "saepe";
                        predict = "numquam";
                    }};;
                    runtimeVersion = "veniam";
                    serviceAccount = "in";
                    state = GoogleCloudMlV1VersionStateEnum.UPDATING;
                }};;
                accessToken = "beatae";
                alt = AltEnum.MEDIA;
                callback = "exercitationem";
                fields = "praesentium";
                key = "cum";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "dolorum";
                updateMask = "voluptatum";
                uploadType = "error";
                uploadProtocol = "hic";
            }};            

            MlProjectsModelsVersionsPatchResponse res = sdk.projects.mlProjectsModelsVersionsPatch(req, new MlProjectsModelsVersionsPatchSecurity("expedita", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsModelsVersionsSetDefault

Designates a version to be the default for the model. The default version is used for prediction requests made against the model that don't specify a version. The first version to be created for a model is automatically set as the default. You must make any subsequent changes to the default version setting manually using this method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsModelsVersionsSetDefaultRequest;
import org.openapis.openapi.models.operations.MlProjectsModelsVersionsSetDefaultResponse;
import org.openapis.openapi.models.operations.MlProjectsModelsVersionsSetDefaultSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsModelsVersionsSetDefaultRequest req = new MlProjectsModelsVersionsSetDefaultRequest("neque") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("officia", "dolorum");
                    put("corrupti", "accusamus");
                }};
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "fugit";
                fields = "ut";
                key = "fugiat";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "expedita";
                uploadProtocol = "magnam";
            }};            

            MlProjectsModelsVersionsSetDefaultResponse res = sdk.projects.mlProjectsModelsVersionsSetDefault(req, new MlProjectsModelsVersionsSetDefaultSecurity("consequatur", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudMlV1Version != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsOperationsCancelRequest;
import org.openapis.openapi.models.operations.MlProjectsOperationsCancelResponse;
import org.openapis.openapi.models.operations.MlProjectsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsOperationsCancelRequest req = new MlProjectsOperationsCancelRequest("ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quas", "repudiandae");
                    put("corporis", "et");
                    put("blanditiis", "ex");
                }};
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "nostrum";
                key = "saepe";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "incidunt";
                uploadProtocol = "reiciendis";
            }};            

            MlProjectsOperationsCancelResponse res = sdk.projects.mlProjectsOperationsCancel(req, new MlProjectsOperationsCancelSecurity("dolorem", "harum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsOperationsGetRequest;
import org.openapis.openapi.models.operations.MlProjectsOperationsGetResponse;
import org.openapis.openapi.models.operations.MlProjectsOperationsGetSecurity;
import org.openapis.openapi.models.operations.MlProjectsOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.MlProjectsOperationsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsOperationsGetRequest req = new MlProjectsOperationsGetRequest("dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "atque";
                key = "laborum";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "laboriosam";
                uploadProtocol = "alias";
            }};            

            MlProjectsOperationsGetResponse res = sdk.projects.mlProjectsOperationsGet(req, new MlProjectsOperationsGetSecurity() {{
                option1 = new MlProjectsOperationsGetSecurityOption1("amet", "deserunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsOperationsListRequest;
import org.openapis.openapi.models.operations.MlProjectsOperationsListResponse;
import org.openapis.openapi.models.operations.MlProjectsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsOperationsListRequest req = new MlProjectsOperationsListRequest("voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reiciendis";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "delectus";
                filter = "voluptates";
                key = "perferendis";
                oauthToken = "est";
                pageSize = 696483L;
                pageToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "fuga";
                uploadProtocol = "praesentium";
            }};            

            MlProjectsOperationsListResponse res = sdk.projects.mlProjectsOperationsList(req, new MlProjectsOperationsListSecurity("mollitia", "veniam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningListOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mlProjectsPredict

Performs online prediction on the data in the request. {% dynamic include "/ai-platform/includes/___predict-request" %} 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsPredictRequest;
import org.openapis.openapi.models.operations.MlProjectsPredictResponse;
import org.openapis.openapi.models.operations.MlProjectsPredictSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleApiHttpBody;
import org.openapis.openapi.models.shared.GoogleCloudMlV1PredictRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsPredictRequest req = new MlProjectsPredictRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudMlV1PredictRequest = new GoogleCloudMlV1PredictRequest() {{
                    httpBody = new GoogleApiHttpBody() {{
                        contentType = "repudiandae";
                        data = "quasi";
                        extensions = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("asperiores", "totam");
                                put("suscipit", "quidem");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("et", "esse");
                                put("amet", "assumenda");
                                put("ea", "atque");
                                put("error", "officiis");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("accusamus", "natus");
                                put("minima", "aspernatur");
                                put("ex", "maiores");
                                put("corrupti", "at");
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "repudiandae";
                key = "atque";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "sunt";
                uploadType = "recusandae";
                uploadProtocol = "dolorum";
            }};            

            MlProjectsPredictResponse res = sdk.projects.mlProjectsPredict(req, new MlProjectsPredictSecurity("repellendus", "labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleApiHttpBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
