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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsExplainRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1ExplainRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleApiHttpBody;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsExplainSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsExplainRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudMlV1ExplainRequest = new GoogleCloudMlV1ExplainRequest();
    $request->googleCloudMlV1ExplainRequest->httpBody = new GoogleApiHttpBody();
    $request->googleCloudMlV1ExplainRequest->httpBody->contentType = 'totam';
    $request->googleCloudMlV1ExplainRequest->httpBody->data = 'porro';
    $request->googleCloudMlV1ExplainRequest->httpBody->extensions = [
        [
            'nam' => 'officia',
        ],
        [
            'fugit' => 'deleniti',
            'hic' => 'optio',
            'totam' => 'beatae',
        ],
        [
            'molestiae' => 'modi',
            'qui' => 'impedit',
        ],
    ];
    $request->accessToken = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'excepturi';
    $request->key = 'aspernatur';
    $request->name = 'Cathy Mosciski';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new MlProjectsExplainSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsExplain($request, $requestSecurity);

    if ($response->googleApiHttpBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsGetConfig

Get the service account information associated with your project. You need this information in order to grant the service account permissions for the Google Cloud Storage location where you put your model training code for training the model with Google Cloud Machine Learning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsGetConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsGetConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsGetConfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corporis';
    $request->fields = 'iste';
    $request->key = 'iure';
    $request->name = 'Dr. Rickey Boyle';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new MlProjectsGetConfigSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsGetConfig($request, $requestSecurity);

    if ($response->googleCloudMlV1GetConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsJobsCreate

Creates a training or a batch prediction job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1JobInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1PredictionInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1PredictionInputDataFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1PredictionInputOutputDataFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1PredictionOutput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1JobStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1TrainingInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1ReplicaConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1AcceleratorConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1DiskConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1HyperparameterSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1HyperparameterSpecAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1HyperparameterSpecGoalEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1ParameterSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1ParameterSpecScaleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1ParameterSpecTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1TrainingInputScaleTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1Scheduling;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1TrainingOutputInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1BuiltInAlgorithmOutput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1HyperparameterOutput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1HyperparameterOutputHyperparameterMetric;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1HyperparameterOutputStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsJobsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudMlV1JobInput = new GoogleCloudMlV1JobInput();
    $request->googleCloudMlV1JobInput->createTime = 'explicabo';
    $request->googleCloudMlV1JobInput->endTime = 'nobis';
    $request->googleCloudMlV1JobInput->errorMessage = 'enim';
    $request->googleCloudMlV1JobInput->etag = 'omnis';
    $request->googleCloudMlV1JobInput->jobId = 'nemo';
    $request->googleCloudMlV1JobInput->labels = [
        'excepturi' => 'accusantium',
        'iure' => 'culpa',
    ];
    $request->googleCloudMlV1JobInput->predictionInput = new GoogleCloudMlV1PredictionInput();
    $request->googleCloudMlV1JobInput->predictionInput->batchSize = 'doloribus';
    $request->googleCloudMlV1JobInput->predictionInput->dataFormat = GoogleCloudMlV1PredictionInputDataFormatEnum::CSV;
    $request->googleCloudMlV1JobInput->predictionInput->inputPaths = [
        'mollitia',
    ];
    $request->googleCloudMlV1JobInput->predictionInput->maxWorkerCount = 'dolorem';
    $request->googleCloudMlV1JobInput->predictionInput->modelName = 'culpa';
    $request->googleCloudMlV1JobInput->predictionInput->outputDataFormat = GoogleCloudMlV1PredictionInputOutputDataFormatEnum::DATA_FORMAT_UNSPECIFIED;
    $request->googleCloudMlV1JobInput->predictionInput->outputPath = 'repellat';
    $request->googleCloudMlV1JobInput->predictionInput->region = 'mollitia';
    $request->googleCloudMlV1JobInput->predictionInput->runtimeVersion = 'occaecati';
    $request->googleCloudMlV1JobInput->predictionInput->signatureName = 'numquam';
    $request->googleCloudMlV1JobInput->predictionInput->uri = 'http://kind-ironclad.biz';
    $request->googleCloudMlV1JobInput->predictionInput->versionName = 'error';
    $request->googleCloudMlV1JobInput->predictionOutput = new GoogleCloudMlV1PredictionOutput();
    $request->googleCloudMlV1JobInput->predictionOutput->errorCount = 'quia';
    $request->googleCloudMlV1JobInput->predictionOutput->nodeHours = 3380.07;
    $request->googleCloudMlV1JobInput->predictionOutput->outputPath = 'vitae';
    $request->googleCloudMlV1JobInput->predictionOutput->predictionCount = 'laborum';
    $request->googleCloudMlV1JobInput->startTime = 'animi';
    $request->googleCloudMlV1JobInput->state = GoogleCloudMlV1JobStateEnum::PREPARING;
    $request->googleCloudMlV1JobInput->trainingInput = new GoogleCloudMlV1TrainingInput();
    $request->googleCloudMlV1JobInput->trainingInput->args = [
        'quo',
    ];
    $request->googleCloudMlV1JobInput->trainingInput->enableWebAccess = false;
    $request->googleCloudMlV1JobInput->trainingInput->encryptionConfig = new GoogleCloudMlV1EncryptionConfig();
    $request->googleCloudMlV1JobInput->trainingInput->encryptionConfig->kmsKeyName = 'sequi';
    $request->googleCloudMlV1JobInput->trainingInput->evaluatorConfig = new GoogleCloudMlV1ReplicaConfig();
    $request->googleCloudMlV1JobInput->trainingInput->evaluatorConfig->acceleratorConfig = new GoogleCloudMlV1AcceleratorConfig();
    $request->googleCloudMlV1JobInput->trainingInput->evaluatorConfig->acceleratorConfig->count = 'tenetur';
    $request->googleCloudMlV1JobInput->trainingInput->evaluatorConfig->acceleratorConfig->type = GoogleCloudMlV1AcceleratorConfigTypeEnum::NVIDIA_TESLA_P4;
    $request->googleCloudMlV1JobInput->trainingInput->evaluatorConfig->containerArgs = [
        'possimus',
        'aut',
        'quasi',
    ];
    $request->googleCloudMlV1JobInput->trainingInput->evaluatorConfig->containerCommand = [
        'temporibus',
        'laborum',
        'quasi',
    ];
    $request->googleCloudMlV1JobInput->trainingInput->evaluatorConfig->diskConfig = new GoogleCloudMlV1DiskConfig();
    $request->googleCloudMlV1JobInput->trainingInput->evaluatorConfig->diskConfig->bootDiskSizeGb = 971945;
    $request->googleCloudMlV1JobInput->trainingInput->evaluatorConfig->diskConfig->bootDiskType = 'voluptatibus';
    $request->googleCloudMlV1JobInput->trainingInput->evaluatorConfig->imageUri = 'vero';
    $request->googleCloudMlV1JobInput->trainingInput->evaluatorConfig->tpuTfVersion = 'nihil';
    $request->googleCloudMlV1JobInput->trainingInput->evaluatorCount = 'praesentium';
    $request->googleCloudMlV1JobInput->trainingInput->evaluatorType = 'voluptatibus';
    $request->googleCloudMlV1JobInput->trainingInput->hyperparameters = new GoogleCloudMlV1HyperparameterSpec();
    $request->googleCloudMlV1JobInput->trainingInput->hyperparameters->algorithm = GoogleCloudMlV1HyperparameterSpecAlgorithmEnum::ALGORITHM_UNSPECIFIED;
    $request->googleCloudMlV1JobInput->trainingInput->hyperparameters->enableTrialEarlyStopping = false;
    $request->googleCloudMlV1JobInput->trainingInput->hyperparameters->goal = GoogleCloudMlV1HyperparameterSpecGoalEnum::MAXIMIZE;
    $request->googleCloudMlV1JobInput->trainingInput->hyperparameters->hyperparameterMetricTag = 'voluptate';
    $request->googleCloudMlV1JobInput->trainingInput->hyperparameters->maxFailedTrials = 739264;
    $request->googleCloudMlV1JobInput->trainingInput->hyperparameters->maxParallelTrials = 19987;
    $request->googleCloudMlV1JobInput->trainingInput->hyperparameters->maxTrials = 39187;
    $request->googleCloudMlV1JobInput->trainingInput->hyperparameters->params = [
        new GoogleCloudMlV1ParameterSpec(),
        new GoogleCloudMlV1ParameterSpec(),
    ];
    $request->googleCloudMlV1JobInput->trainingInput->hyperparameters->resumePreviousJobId = 'ut';
    $request->googleCloudMlV1JobInput->trainingInput->jobDir = 'maiores';
    $request->googleCloudMlV1JobInput->trainingInput->masterConfig = new GoogleCloudMlV1ReplicaConfig();
    $request->googleCloudMlV1JobInput->trainingInput->masterConfig->acceleratorConfig = new GoogleCloudMlV1AcceleratorConfig();
    $request->googleCloudMlV1JobInput->trainingInput->masterConfig->acceleratorConfig->count = 'dicta';
    $request->googleCloudMlV1JobInput->trainingInput->masterConfig->acceleratorConfig->type = GoogleCloudMlV1AcceleratorConfigTypeEnum::NVIDIA_TESLA_P4;
    $request->googleCloudMlV1JobInput->trainingInput->masterConfig->containerArgs = [
        'iusto',
        'dicta',
    ];
    $request->googleCloudMlV1JobInput->trainingInput->masterConfig->containerCommand = [
        'enim',
        'accusamus',
        'commodi',
    ];
    $request->googleCloudMlV1JobInput->trainingInput->masterConfig->diskConfig = new GoogleCloudMlV1DiskConfig();
    $request->googleCloudMlV1JobInput->trainingInput->masterConfig->diskConfig->bootDiskSizeGb = 918236;
    $request->googleCloudMlV1JobInput->trainingInput->masterConfig->diskConfig->bootDiskType = 'quae';
    $request->googleCloudMlV1JobInput->trainingInput->masterConfig->imageUri = 'ipsum';
    $request->googleCloudMlV1JobInput->trainingInput->masterConfig->tpuTfVersion = 'quidem';
    $request->googleCloudMlV1JobInput->trainingInput->masterType = 'molestias';
    $request->googleCloudMlV1JobInput->trainingInput->network = 'excepturi';
    $request->googleCloudMlV1JobInput->trainingInput->packageUris = [
        'modi',
        'praesentium',
        'rem',
        'voluptates',
    ];
    $request->googleCloudMlV1JobInput->trainingInput->parameterServerConfig = new GoogleCloudMlV1ReplicaConfig();
    $request->googleCloudMlV1JobInput->trainingInput->parameterServerConfig->acceleratorConfig = new GoogleCloudMlV1AcceleratorConfig();
    $request->googleCloudMlV1JobInput->trainingInput->parameterServerConfig->acceleratorConfig->count = 'quasi';
    $request->googleCloudMlV1JobInput->trainingInput->parameterServerConfig->acceleratorConfig->type = GoogleCloudMlV1AcceleratorConfigTypeEnum::TPU_V4_POD;
    $request->googleCloudMlV1JobInput->trainingInput->parameterServerConfig->containerArgs = [
        'veritatis',
        'itaque',
        'incidunt',
    ];
    $request->googleCloudMlV1JobInput->trainingInput->parameterServerConfig->containerCommand = [
        'consequatur',
        'est',
    ];
    $request->googleCloudMlV1JobInput->trainingInput->parameterServerConfig->diskConfig = new GoogleCloudMlV1DiskConfig();
    $request->googleCloudMlV1JobInput->trainingInput->parameterServerConfig->diskConfig->bootDiskSizeGb = 842342;
    $request->googleCloudMlV1JobInput->trainingInput->parameterServerConfig->diskConfig->bootDiskType = 'explicabo';
    $request->googleCloudMlV1JobInput->trainingInput->parameterServerConfig->imageUri = 'deserunt';
    $request->googleCloudMlV1JobInput->trainingInput->parameterServerConfig->tpuTfVersion = 'distinctio';
    $request->googleCloudMlV1JobInput->trainingInput->parameterServerCount = 'quibusdam';
    $request->googleCloudMlV1JobInput->trainingInput->parameterServerType = 'labore';
    $request->googleCloudMlV1JobInput->trainingInput->pythonModule = 'modi';
    $request->googleCloudMlV1JobInput->trainingInput->pythonVersion = 'qui';
    $request->googleCloudMlV1JobInput->trainingInput->region = 'aliquid';
    $request->googleCloudMlV1JobInput->trainingInput->runtimeVersion = 'cupiditate';
    $request->googleCloudMlV1JobInput->trainingInput->scaleTier = GoogleCloudMlV1TrainingInputScaleTierEnum::BASIC_GPU;
    $request->googleCloudMlV1JobInput->trainingInput->scheduling = new GoogleCloudMlV1Scheduling();
    $request->googleCloudMlV1JobInput->trainingInput->scheduling->maxRunningTime = 'perferendis';
    $request->googleCloudMlV1JobInput->trainingInput->scheduling->maxWaitTime = 'magni';
    $request->googleCloudMlV1JobInput->trainingInput->scheduling->priority = 828940;
    $request->googleCloudMlV1JobInput->trainingInput->serviceAccount = 'ipsam';
    $request->googleCloudMlV1JobInput->trainingInput->useChiefInTfConfig = false;
    $request->googleCloudMlV1JobInput->trainingInput->workerConfig = new GoogleCloudMlV1ReplicaConfig();
    $request->googleCloudMlV1JobInput->trainingInput->workerConfig->acceleratorConfig = new GoogleCloudMlV1AcceleratorConfig();
    $request->googleCloudMlV1JobInput->trainingInput->workerConfig->acceleratorConfig->count = 'alias';
    $request->googleCloudMlV1JobInput->trainingInput->workerConfig->acceleratorConfig->type = GoogleCloudMlV1AcceleratorConfigTypeEnum::NVIDIA_TESLA_K80;
    $request->googleCloudMlV1JobInput->trainingInput->workerConfig->containerArgs = [
        'excepturi',
        'tempora',
        'facilis',
    ];
    $request->googleCloudMlV1JobInput->trainingInput->workerConfig->containerCommand = [
        'labore',
        'delectus',
        'eum',
    ];
    $request->googleCloudMlV1JobInput->trainingInput->workerConfig->diskConfig = new GoogleCloudMlV1DiskConfig();
    $request->googleCloudMlV1JobInput->trainingInput->workerConfig->diskConfig->bootDiskSizeGb = 248753;
    $request->googleCloudMlV1JobInput->trainingInput->workerConfig->diskConfig->bootDiskType = 'eligendi';
    $request->googleCloudMlV1JobInput->trainingInput->workerConfig->imageUri = 'sint';
    $request->googleCloudMlV1JobInput->trainingInput->workerConfig->tpuTfVersion = 'aliquid';
    $request->googleCloudMlV1JobInput->trainingInput->workerCount = 'provident';
    $request->googleCloudMlV1JobInput->trainingInput->workerType = 'necessitatibus';
    $request->googleCloudMlV1JobInput->trainingOutput = new GoogleCloudMlV1TrainingOutputInput();
    $request->googleCloudMlV1JobInput->trainingOutput->builtInAlgorithmOutput = new GoogleCloudMlV1BuiltInAlgorithmOutput();
    $request->googleCloudMlV1JobInput->trainingOutput->builtInAlgorithmOutput->framework = 'sint';
    $request->googleCloudMlV1JobInput->trainingOutput->builtInAlgorithmOutput->modelPath = 'officia';
    $request->googleCloudMlV1JobInput->trainingOutput->builtInAlgorithmOutput->pythonVersion = 'dolor';
    $request->googleCloudMlV1JobInput->trainingOutput->builtInAlgorithmOutput->runtimeVersion = 'debitis';
    $request->googleCloudMlV1JobInput->trainingOutput->completedTrialCount = 'a';
    $request->googleCloudMlV1JobInput->trainingOutput->consumedMLUnits = 6800.56;
    $request->googleCloudMlV1JobInput->trainingOutput->hyperparameterMetricTag = 'in';
    $request->googleCloudMlV1JobInput->trainingOutput->isBuiltInAlgorithmJob = false;
    $request->googleCloudMlV1JobInput->trainingOutput->isHyperparameterTuningJob = false;
    $request->googleCloudMlV1JobInput->trainingOutput->trials = [
        new GoogleCloudMlV1HyperparameterOutput(),
        new GoogleCloudMlV1HyperparameterOutput(),
    ];
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'rerum';
    $request->fields = 'dicta';
    $request->key = 'magnam';
    $request->oauthToken = 'cumque';
    $request->parent = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new MlProjectsJobsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsJobsCreate($request, $requestSecurity);

    if ($response->googleCloudMlV1Job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsJobsList

Lists the jobs in the project. If there are no jobs that match the request parameters, the list request returns an empty response body: {}.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsJobsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsJobsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsJobsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsJobsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'non';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->filter = 'delectus';
    $request->key = 'quidem';
    $request->oauthToken = 'provident';
    $request->pageSize = 725255;
    $request->pageToken = 'id';
    $request->parent = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new MlProjectsJobsListSecurity();
    $requestSecurity->option1 = new MlProjectsJobsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsJobsList($request, $requestSecurity);

    if ($response->googleCloudMlV1ListJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsLocationsList

List all locations that provides at least one type of CMLE capability.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'omnis';
    $request->key = 'molestiae';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 470132;
    $request->pageToken = 'magnam';
    $request->parent = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new MlProjectsLocationsListSecurity();
    $requestSecurity->option1 = new MlProjectsLocationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsLocationsList($request, $requestSecurity);

    if ($response->googleCloudMlV1ListLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsLocationsStudiesCreate

Creates a study.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsStudiesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1StudyInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1StudyConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1StudyConfigAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1AutomatedStoppingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1StudyConfigMetricSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1StudyConfigMetricSpecGoalEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1StudyConfigParameterSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1StudyConfigParameterSpecTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsStudiesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsLocationsStudiesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudMlV1StudyInput = new GoogleCloudMlV1StudyInput();
    $request->googleCloudMlV1StudyInput->studyConfig = new GoogleCloudMlV1StudyConfig();
    $request->googleCloudMlV1StudyInput->studyConfig->algorithm = GoogleCloudMlV1StudyConfigAlgorithmEnum::GRID_SEARCH;
    $request->googleCloudMlV1StudyInput->studyConfig->automatedStoppingConfig = new GoogleCloudMlV1AutomatedStoppingConfig();
    $request->googleCloudMlV1StudyInput->studyConfig->automatedStoppingConfig->decayCurveStoppingConfig = new GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig();
    $request->googleCloudMlV1StudyInput->studyConfig->automatedStoppingConfig->decayCurveStoppingConfig->useElapsedTime = false;
    $request->googleCloudMlV1StudyInput->studyConfig->automatedStoppingConfig->medianAutomatedStoppingConfig = new GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig();
    $request->googleCloudMlV1StudyInput->studyConfig->automatedStoppingConfig->medianAutomatedStoppingConfig->useElapsedTime = false;
    $request->googleCloudMlV1StudyInput->studyConfig->metrics = [
        new GoogleCloudMlV1StudyConfigMetricSpec(),
        new GoogleCloudMlV1StudyConfigMetricSpec(),
        new GoogleCloudMlV1StudyConfigMetricSpec(),
    ];
    $request->googleCloudMlV1StudyInput->studyConfig->parameters = [
        new GoogleCloudMlV1StudyConfigParameterSpec(),
        new GoogleCloudMlV1StudyConfigParameterSpec(),
    ];
    $request->accessToken = 'vero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'architecto';
    $request->fields = 'magnam';
    $request->key = 'et';
    $request->oauthToken = 'excepturi';
    $request->parent = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->studyId = 'quos';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new MlProjectsLocationsStudiesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsLocationsStudiesCreate($request, $requestSecurity);

    if ($response->googleCloudMlV1Study !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsLocationsStudiesList

Lists all the studies in a region for an associated project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsStudiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsStudiesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsLocationsStudiesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ad';
    $request->fields = 'eum';
    $request->key = 'dolor';
    $request->oauthToken = 'necessitatibus';
    $request->parent = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new MlProjectsLocationsStudiesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsLocationsStudiesList($request, $requestSecurity);

    if ($response->googleCloudMlV1ListStudiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsLocationsStudiesTrialsAddMeasurement

Adds a measurement of the objective metrics to a trial. This measurement is assumed to have been taken before the trial is complete.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsStudiesTrialsAddMeasurementRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1AddTrialMeasurementRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1Measurement;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1MeasurementMetric;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsStudiesTrialsAddMeasurementSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsLocationsStudiesTrialsAddMeasurementRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudMlV1AddTrialMeasurementRequest = new GoogleCloudMlV1AddTrialMeasurementRequest();
    $request->googleCloudMlV1AddTrialMeasurementRequest->measurement = new GoogleCloudMlV1Measurement();
    $request->googleCloudMlV1AddTrialMeasurementRequest->measurement->elapsedTime = 'debitis';
    $request->googleCloudMlV1AddTrialMeasurementRequest->measurement->metrics = [
        new GoogleCloudMlV1MeasurementMetric(),
        new GoogleCloudMlV1MeasurementMetric(),
    ];
    $request->googleCloudMlV1AddTrialMeasurementRequest->measurement->stepCount = 'maxime';
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'architecto';
    $request->key = 'architecto';
    $request->name = 'Pedro Ratke';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new MlProjectsLocationsStudiesTrialsAddMeasurementSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsLocationsStudiesTrialsAddMeasurement($request, $requestSecurity);

    if ($response->googleCloudMlV1Trial !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsLocationsStudiesTrialsCheckEarlyStoppingState

Checks whether a trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'praesentium' => 'natus',
    ];
    $request->accessToken = 'magni';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->fields = 'illum';
    $request->key = 'pariatur';
    $request->name = 'Nathaniel Marks';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsLocationsStudiesTrialsCheckEarlyStoppingState($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsLocationsStudiesTrialsComplete

Marks a trial as complete.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsStudiesTrialsCompleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1CompleteTrialRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1Measurement;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1MeasurementMetric;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsStudiesTrialsCompleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsLocationsStudiesTrialsCompleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudMlV1CompleteTrialRequest = new GoogleCloudMlV1CompleteTrialRequest();
    $request->googleCloudMlV1CompleteTrialRequest->finalMeasurement = new GoogleCloudMlV1Measurement();
    $request->googleCloudMlV1CompleteTrialRequest->finalMeasurement->elapsedTime = 'voluptate';
    $request->googleCloudMlV1CompleteTrialRequest->finalMeasurement->metrics = [
        new GoogleCloudMlV1MeasurementMetric(),
        new GoogleCloudMlV1MeasurementMetric(),
    ];
    $request->googleCloudMlV1CompleteTrialRequest->finalMeasurement->stepCount = 'nam';
    $request->googleCloudMlV1CompleteTrialRequest->infeasibleReason = 'eaque';
    $request->googleCloudMlV1CompleteTrialRequest->trialInfeasible = false;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'perferendis';
    $request->key = 'fugiat';
    $request->name = 'Jennifer Runolfsdottir';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new MlProjectsLocationsStudiesTrialsCompleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsLocationsStudiesTrialsComplete($request, $requestSecurity);

    if ($response->googleCloudMlV1Trial !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsLocationsStudiesTrialsCreate

Adds a user provided trial to a study.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsStudiesTrialsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1TrialInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1Measurement;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1MeasurementMetric;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1TrialParameter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1TrialStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsStudiesTrialsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsLocationsStudiesTrialsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudMlV1TrialInput = new GoogleCloudMlV1TrialInput();
    $request->googleCloudMlV1TrialInput->finalMeasurement = new GoogleCloudMlV1Measurement();
    $request->googleCloudMlV1TrialInput->finalMeasurement->elapsedTime = 'dignissimos';
    $request->googleCloudMlV1TrialInput->finalMeasurement->metrics = [
        new GoogleCloudMlV1MeasurementMetric(),
    ];
    $request->googleCloudMlV1TrialInput->finalMeasurement->stepCount = 'quis';
    $request->googleCloudMlV1TrialInput->measurements = [
        new GoogleCloudMlV1Measurement(),
    ];
    $request->googleCloudMlV1TrialInput->parameters = [
        new GoogleCloudMlV1TrialParameter(),
    ];
    $request->googleCloudMlV1TrialInput->state = GoogleCloudMlV1TrialStateEnum::STATE_UNSPECIFIED;
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quam';
    $request->fields = 'dolor';
    $request->key = 'vero';
    $request->oauthToken = 'nostrum';
    $request->parent = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new MlProjectsLocationsStudiesTrialsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsLocationsStudiesTrialsCreate($request, $requestSecurity);

    if ($response->googleCloudMlV1Trial !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsLocationsStudiesTrialsList

Lists the trials associated with a study.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsStudiesTrialsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsStudiesTrialsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsLocationsStudiesTrialsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consequuntur';
    $request->fields = 'blanditiis';
    $request->key = 'error';
    $request->oauthToken = 'eaque';
    $request->parent = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'rerum';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'asperiores';

    $requestSecurity = new MlProjectsLocationsStudiesTrialsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsLocationsStudiesTrialsList($request, $requestSecurity);

    if ($response->googleCloudMlV1ListTrialsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsLocationsStudiesTrialsListOptimalTrials

Lists the pareto-optimal trials for multi-objective study or the optimal trials for single-objective study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsStudiesTrialsListOptimalTrialsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsStudiesTrialsListOptimalTrialsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsLocationsStudiesTrialsListOptimalTrialsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'iste' => 'dolorum',
        'deleniti' => 'pariatur',
    ];
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->fields = 'delectus';
    $request->key = 'quaerat';
    $request->oauthToken = 'quos';
    $request->parent = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new MlProjectsLocationsStudiesTrialsListOptimalTrialsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsLocationsStudiesTrialsListOptimalTrials($request, $requestSecurity);

    if ($response->googleCloudMlV1ListOptimalTrialsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsLocationsStudiesTrialsStop

Stops a trial.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsStudiesTrialsStopRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsStudiesTrialsStopSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsLocationsStudiesTrialsStopRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'hic' => 'excepturi',
    ];
    $request->accessToken = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dignissimos';
    $request->fields = 'reiciendis';
    $request->key = 'amet';
    $request->name = 'Mr. Bradley Bogan';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new MlProjectsLocationsStudiesTrialsStopSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsLocationsStudiesTrialsStop($request, $requestSecurity);

    if ($response->googleCloudMlV1Trial !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsLocationsStudiesTrialsSuggest

Adds one or more trials to a study, with parameter values suggested by AI Platform Vizier. Returns a long-running operation associated with the generation of trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsStudiesTrialsSuggestRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1SuggestTrialsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsLocationsStudiesTrialsSuggestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsLocationsStudiesTrialsSuggestRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudMlV1SuggestTrialsRequest = new GoogleCloudMlV1SuggestTrialsRequest();
    $request->googleCloudMlV1SuggestTrialsRequest->clientId = 'voluptas';
    $request->googleCloudMlV1SuggestTrialsRequest->suggestionCount = 617658;
    $request->accessToken = 'eos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sit';
    $request->fields = 'fugiat';
    $request->key = 'ab';
    $request->oauthToken = 'soluta';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new MlProjectsLocationsStudiesTrialsSuggestSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsLocationsStudiesTrialsSuggest($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsModelsCreate

Creates a model which will later contain one or more versions. You must add at least one version before you can request predictions from the model. Add versions by calling projects.models.versions.create.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1ModelInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1VersionInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1AcceleratorConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1AutoScaling;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1MetricSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1MetricSpecNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1ContainerSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1EnvVar;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1ContainerPort;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1ExplanationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1IntegratedGradientsAttribution;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1SampledShapleyAttribution;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1XraiAttribution;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1VersionFrameworkEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1ManualScaling;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1RequestLoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1RouteMap;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1VersionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsModelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudMlV1ModelInput = new GoogleCloudMlV1ModelInput();
    $request->googleCloudMlV1ModelInput->defaultVersion = new GoogleCloudMlV1VersionInput();
    $request->googleCloudMlV1ModelInput->defaultVersion->acceleratorConfig = new GoogleCloudMlV1AcceleratorConfig();
    $request->googleCloudMlV1ModelInput->defaultVersion->acceleratorConfig->count = 'omnis';
    $request->googleCloudMlV1ModelInput->defaultVersion->acceleratorConfig->type = GoogleCloudMlV1AcceleratorConfigTypeEnum::TPU_V3_POD;
    $request->googleCloudMlV1ModelInput->defaultVersion->autoScaling = new GoogleCloudMlV1AutoScaling();
    $request->googleCloudMlV1ModelInput->defaultVersion->autoScaling->maxNodes = 714697;
    $request->googleCloudMlV1ModelInput->defaultVersion->autoScaling->metrics = [
        new GoogleCloudMlV1MetricSpec(),
        new GoogleCloudMlV1MetricSpec(),
        new GoogleCloudMlV1MetricSpec(),
        new GoogleCloudMlV1MetricSpec(),
    ];
    $request->googleCloudMlV1ModelInput->defaultVersion->autoScaling->minNodes = 469497;
    $request->googleCloudMlV1ModelInput->defaultVersion->container = new GoogleCloudMlV1ContainerSpec();
    $request->googleCloudMlV1ModelInput->defaultVersion->container->args = [
        'voluptate',
    ];
    $request->googleCloudMlV1ModelInput->defaultVersion->container->command = [
        'saepe',
        'eius',
        'aspernatur',
    ];
    $request->googleCloudMlV1ModelInput->defaultVersion->container->env = [
        new GoogleCloudMlV1EnvVar(),
    ];
    $request->googleCloudMlV1ModelInput->defaultVersion->container->image = 'amet';
    $request->googleCloudMlV1ModelInput->defaultVersion->container->ports = [
        new GoogleCloudMlV1ContainerPort(),
        new GoogleCloudMlV1ContainerPort(),
        new GoogleCloudMlV1ContainerPort(),
        new GoogleCloudMlV1ContainerPort(),
    ];
    $request->googleCloudMlV1ModelInput->defaultVersion->createTime = 'accusamus';
    $request->googleCloudMlV1ModelInput->defaultVersion->deploymentUri = 'ad';
    $request->googleCloudMlV1ModelInput->defaultVersion->description = 'saepe';
    $request->googleCloudMlV1ModelInput->defaultVersion->errorMessage = 'suscipit';
    $request->googleCloudMlV1ModelInput->defaultVersion->etag = 'deserunt';
    $request->googleCloudMlV1ModelInput->defaultVersion->explanationConfig = new GoogleCloudMlV1ExplanationConfig();
    $request->googleCloudMlV1ModelInput->defaultVersion->explanationConfig->integratedGradientsAttribution = new GoogleCloudMlV1IntegratedGradientsAttribution();
    $request->googleCloudMlV1ModelInput->defaultVersion->explanationConfig->integratedGradientsAttribution->numIntegralSteps = 588317;
    $request->googleCloudMlV1ModelInput->defaultVersion->explanationConfig->sampledShapleyAttribution = new GoogleCloudMlV1SampledShapleyAttribution();
    $request->googleCloudMlV1ModelInput->defaultVersion->explanationConfig->sampledShapleyAttribution->numPaths = 324683;
    $request->googleCloudMlV1ModelInput->defaultVersion->explanationConfig->xraiAttribution = new GoogleCloudMlV1XraiAttribution();
    $request->googleCloudMlV1ModelInput->defaultVersion->explanationConfig->xraiAttribution->numIntegralSteps = 831049;
    $request->googleCloudMlV1ModelInput->defaultVersion->framework = GoogleCloudMlV1VersionFrameworkEnum::SCIKIT_LEARN;
    $request->googleCloudMlV1ModelInput->defaultVersion->isDefault = false;
    $request->googleCloudMlV1ModelInput->defaultVersion->labels = [
        'alias' => 'at',
        'quaerat' => 'tempora',
        'vel' => 'quod',
    ];
    $request->googleCloudMlV1ModelInput->defaultVersion->lastUseTime = 'officiis';
    $request->googleCloudMlV1ModelInput->defaultVersion->machineType = 'qui';
    $request->googleCloudMlV1ModelInput->defaultVersion->manualScaling = new GoogleCloudMlV1ManualScaling();
    $request->googleCloudMlV1ModelInput->defaultVersion->manualScaling->nodes = 679880;
    $request->googleCloudMlV1ModelInput->defaultVersion->name = 'Cory Pfeffer';
    $request->googleCloudMlV1ModelInput->defaultVersion->packageUris = [
        'tenetur',
        'amet',
        'tempore',
        'accusamus',
    ];
    $request->googleCloudMlV1ModelInput->defaultVersion->predictionClass = 'numquam';
    $request->googleCloudMlV1ModelInput->defaultVersion->pythonVersion = 'enim';
    $request->googleCloudMlV1ModelInput->defaultVersion->requestLoggingConfig = new GoogleCloudMlV1RequestLoggingConfig();
    $request->googleCloudMlV1ModelInput->defaultVersion->requestLoggingConfig->bigqueryTableName = 'dolorem';
    $request->googleCloudMlV1ModelInput->defaultVersion->requestLoggingConfig->samplingPercentage = 9574.51;
    $request->googleCloudMlV1ModelInput->defaultVersion->routes = new GoogleCloudMlV1RouteMap();
    $request->googleCloudMlV1ModelInput->defaultVersion->routes->health = 'totam';
    $request->googleCloudMlV1ModelInput->defaultVersion->routes->predict = 'nihil';
    $request->googleCloudMlV1ModelInput->defaultVersion->runtimeVersion = 'sit';
    $request->googleCloudMlV1ModelInput->defaultVersion->serviceAccount = 'expedita';
    $request->googleCloudMlV1ModelInput->defaultVersion->state = GoogleCloudMlV1VersionStateEnum::READY;
    $request->googleCloudMlV1ModelInput->description = 'sed';
    $request->googleCloudMlV1ModelInput->etag = 'vel';
    $request->googleCloudMlV1ModelInput->labels = [
        'voluptas' => 'deserunt',
        'quam' => 'ipsum',
        'incidunt' => 'qui',
    ];
    $request->googleCloudMlV1ModelInput->name = 'Simon Stracke MD';
    $request->googleCloudMlV1ModelInput->onlinePredictionConsoleLogging = false;
    $request->googleCloudMlV1ModelInput->onlinePredictionLogging = false;
    $request->googleCloudMlV1ModelInput->regions = [
        'incidunt',
        'aspernatur',
        'dolores',
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquid';
    $request->fields = 'quam';
    $request->key = 'molestias';
    $request->oauthToken = 'temporibus';
    $request->parent = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'neque';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new MlProjectsModelsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsModelsCreate($request, $requestSecurity);

    if ($response->googleCloudMlV1Model !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsModelsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsModelsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nam';
    $request->fields = 'hic';
    $request->key = 'voluptatem';
    $request->oauthToken = 'cumque';
    $request->optionsRequestedPolicyVersion = 746994;
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->resource = 'et';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new MlProjectsModelsGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsModelsGetIamPolicy($request, $requestSecurity);

    if ($response->googleIamV1Policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsModelsList

Lists the models in a project. Each project can contain multiple models, and each model can have multiple versions. If there are no models that match the request parameters, the list request returns an empty response body: {}.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsModelsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempore';
    $request->fields = 'cupiditate';
    $request->filter = 'aperiam';
    $request->key = 'delectus';
    $request->oauthToken = 'dolorem';
    $request->pageSize = 292147;
    $request->pageToken = 'labore';
    $request->parent = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new MlProjectsModelsListSecurity();
    $requestSecurity->option1 = new MlProjectsModelsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsModelsList($request, $requestSecurity);

    if ($response->googleCloudMlV1ListModelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsModelsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1Policy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1Binding;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeExpr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsModelsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest();
    $request->googleIamV1SetIamPolicyRequest->policy = new GoogleIamV1Policy();
    $request->googleIamV1SetIamPolicyRequest->policy->auditConfigs = [
        new GoogleIamV1AuditConfig(),
        new GoogleIamV1AuditConfig(),
        new GoogleIamV1AuditConfig(),
    ];
    $request->googleIamV1SetIamPolicyRequest->policy->bindings = [
        new GoogleIamV1Binding(),
        new GoogleIamV1Binding(),
        new GoogleIamV1Binding(),
        new GoogleIamV1Binding(),
    ];
    $request->googleIamV1SetIamPolicyRequest->policy->etag = 'consequatur';
    $request->googleIamV1SetIamPolicyRequest->policy->version = 669917;
    $request->googleIamV1SetIamPolicyRequest->updateMask = 'repellendus';
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ut';
    $request->fields = 'facilis';
    $request->key = 'cupiditate';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->resource = 'laudantium';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new MlProjectsModelsSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsModelsSetIamPolicy($request, $requestSecurity);

    if ($response->googleIamV1Policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsModelsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsModelsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest();
    $request->googleIamV1TestIamPermissionsRequest->permissions = [
        'vero',
        'omnis',
        'quis',
        'ipsum',
    ];
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consectetur';
    $request->fields = 'vero';
    $request->key = 'tenetur';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->resource = 'distinctio';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'odio';

    $requestSecurity = new MlProjectsModelsTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsModelsTestIamPermissions($request, $requestSecurity);

    if ($response->googleIamV1TestIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsModelsVersionsCreate

Creates a new version of a model from a trained TensorFlow model. If the version created in the cloud by this call is the first deployed version of the specified model, it will be made the default version of the model. When you add a version to a model that already has one or more versions, the default version does not automatically change. If you want a new version to be the default, you must call projects.models.versions.setDefault.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsVersionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1VersionInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1AcceleratorConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1AutoScaling;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1MetricSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1MetricSpecNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1ContainerSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1EnvVar;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1ContainerPort;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1ExplanationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1IntegratedGradientsAttribution;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1SampledShapleyAttribution;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1XraiAttribution;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1VersionFrameworkEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1ManualScaling;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1RequestLoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1RouteMap;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1VersionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsVersionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsModelsVersionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudMlV1VersionInput = new GoogleCloudMlV1VersionInput();
    $request->googleCloudMlV1VersionInput->acceleratorConfig = new GoogleCloudMlV1AcceleratorConfig();
    $request->googleCloudMlV1VersionInput->acceleratorConfig->count = 'facilis';
    $request->googleCloudMlV1VersionInput->acceleratorConfig->type = GoogleCloudMlV1AcceleratorConfigTypeEnum::TPU_V3_POD;
    $request->googleCloudMlV1VersionInput->autoScaling = new GoogleCloudMlV1AutoScaling();
    $request->googleCloudMlV1VersionInput->autoScaling->maxNodes = 498140;
    $request->googleCloudMlV1VersionInput->autoScaling->metrics = [
        new GoogleCloudMlV1MetricSpec(),
        new GoogleCloudMlV1MetricSpec(),
    ];
    $request->googleCloudMlV1VersionInput->autoScaling->minNodes = 844550;
    $request->googleCloudMlV1VersionInput->container = new GoogleCloudMlV1ContainerSpec();
    $request->googleCloudMlV1VersionInput->container->args = [
        'sequi',
        'natus',
        'impedit',
        'aut',
    ];
    $request->googleCloudMlV1VersionInput->container->command = [
        'exercitationem',
        'nulla',
        'fugit',
        'porro',
    ];
    $request->googleCloudMlV1VersionInput->container->env = [
        new GoogleCloudMlV1EnvVar(),
        new GoogleCloudMlV1EnvVar(),
        new GoogleCloudMlV1EnvVar(),
        new GoogleCloudMlV1EnvVar(),
    ];
    $request->googleCloudMlV1VersionInput->container->image = 'doloribus';
    $request->googleCloudMlV1VersionInput->container->ports = [
        new GoogleCloudMlV1ContainerPort(),
        new GoogleCloudMlV1ContainerPort(),
    ];
    $request->googleCloudMlV1VersionInput->createTime = 'eligendi';
    $request->googleCloudMlV1VersionInput->deploymentUri = 'ducimus';
    $request->googleCloudMlV1VersionInput->description = 'alias';
    $request->googleCloudMlV1VersionInput->errorMessage = 'officia';
    $request->googleCloudMlV1VersionInput->etag = 'tempora';
    $request->googleCloudMlV1VersionInput->explanationConfig = new GoogleCloudMlV1ExplanationConfig();
    $request->googleCloudMlV1VersionInput->explanationConfig->integratedGradientsAttribution = new GoogleCloudMlV1IntegratedGradientsAttribution();
    $request->googleCloudMlV1VersionInput->explanationConfig->integratedGradientsAttribution->numIntegralSteps = 368584;
    $request->googleCloudMlV1VersionInput->explanationConfig->sampledShapleyAttribution = new GoogleCloudMlV1SampledShapleyAttribution();
    $request->googleCloudMlV1VersionInput->explanationConfig->sampledShapleyAttribution->numPaths = 410492;
    $request->googleCloudMlV1VersionInput->explanationConfig->xraiAttribution = new GoogleCloudMlV1XraiAttribution();
    $request->googleCloudMlV1VersionInput->explanationConfig->xraiAttribution->numIntegralSteps = 136900;
    $request->googleCloudMlV1VersionInput->framework = GoogleCloudMlV1VersionFrameworkEnum::TENSORFLOW;
    $request->googleCloudMlV1VersionInput->isDefault = false;
    $request->googleCloudMlV1VersionInput->labels = [
        'magnam' => 'ratione',
        'ex' => 'laudantium',
        'dicta' => 'dolor',
        'maiores' => 'quasi',
    ];
    $request->googleCloudMlV1VersionInput->lastUseTime = 'ex';
    $request->googleCloudMlV1VersionInput->machineType = 'nulla';
    $request->googleCloudMlV1VersionInput->manualScaling = new GoogleCloudMlV1ManualScaling();
    $request->googleCloudMlV1VersionInput->manualScaling->nodes = 569211;
    $request->googleCloudMlV1VersionInput->name = 'Gordon Willms';
    $request->googleCloudMlV1VersionInput->packageUris = [
        'impedit',
        'corporis',
    ];
    $request->googleCloudMlV1VersionInput->predictionClass = 'veniam';
    $request->googleCloudMlV1VersionInput->pythonVersion = 'aliquid';
    $request->googleCloudMlV1VersionInput->requestLoggingConfig = new GoogleCloudMlV1RequestLoggingConfig();
    $request->googleCloudMlV1VersionInput->requestLoggingConfig->bigqueryTableName = 'inventore';
    $request->googleCloudMlV1VersionInput->requestLoggingConfig->samplingPercentage = 3018.31;
    $request->googleCloudMlV1VersionInput->routes = new GoogleCloudMlV1RouteMap();
    $request->googleCloudMlV1VersionInput->routes->health = 'ea';
    $request->googleCloudMlV1VersionInput->routes->predict = 'quo';
    $request->googleCloudMlV1VersionInput->runtimeVersion = 'consectetur';
    $request->googleCloudMlV1VersionInput->serviceAccount = 'recusandae';
    $request->googleCloudMlV1VersionInput->state = GoogleCloudMlV1VersionStateEnum::UNKNOWN;
    $request->accessToken = 'minima';
    $request->alt = AltEnum::JSON;
    $request->callback = 'a';
    $request->fields = 'libero';
    $request->key = 'aut';
    $request->oauthToken = 'aut';
    $request->parent = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new MlProjectsModelsVersionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsModelsVersionsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsModelsVersionsDelete

Deletes a model version. Each model can have multiple versions deployed and in use at any given time. Use this method to remove a single version. Note: You cannot delete the version that is set as the default version of the model unless it is the only remaining version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsVersionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsVersionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsModelsVersionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'et';
    $request->fields = 'dolorum';
    $request->key = 'laborum';
    $request->name = 'Lee Kemmer';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->quotaUser = 'assumenda';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new MlProjectsModelsVersionsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsModelsVersionsDelete($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsModelsVersionsList

Gets basic information about all the versions of a model. If you expect that a model has many versions, or if you need to handle only a limited number of results at a time, you can request that the list be retrieved in batches (called pages). If there are no versions that match the request parameters, the list request returns an empty response body: {}.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsVersionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsVersionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsVersionsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsModelsVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'numquam';
    $request->fields = 'explicabo';
    $request->filter = 'provident';
    $request->key = 'ipsa';
    $request->oauthToken = 'molestiae';
    $request->pageSize = 301598;
    $request->pageToken = 'odio';
    $request->parent = 'eius';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'rem';

    $requestSecurity = new MlProjectsModelsVersionsListSecurity();
    $requestSecurity->option1 = new MlProjectsModelsVersionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsModelsVersionsList($request, $requestSecurity);

    if ($response->googleCloudMlV1ListVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsModelsVersionsPatch

Updates the specified Version resource. Currently the only update-able fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsVersionsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1VersionInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1AcceleratorConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1AutoScaling;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1MetricSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1MetricSpecNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1ContainerSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1EnvVar;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1ContainerPort;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1ExplanationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1IntegratedGradientsAttribution;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1SampledShapleyAttribution;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1XraiAttribution;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1VersionFrameworkEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1ManualScaling;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1RequestLoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1RouteMap;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1VersionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsVersionsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsModelsVersionsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudMlV1VersionInput = new GoogleCloudMlV1VersionInput();
    $request->googleCloudMlV1VersionInput->acceleratorConfig = new GoogleCloudMlV1AcceleratorConfig();
    $request->googleCloudMlV1VersionInput->acceleratorConfig->count = 'reprehenderit';
    $request->googleCloudMlV1VersionInput->acceleratorConfig->type = GoogleCloudMlV1AcceleratorConfigTypeEnum::TPU_V3;
    $request->googleCloudMlV1VersionInput->autoScaling = new GoogleCloudMlV1AutoScaling();
    $request->googleCloudMlV1VersionInput->autoScaling->maxNodes = 852635;
    $request->googleCloudMlV1VersionInput->autoScaling->metrics = [
        new GoogleCloudMlV1MetricSpec(),
        new GoogleCloudMlV1MetricSpec(),
    ];
    $request->googleCloudMlV1VersionInput->autoScaling->minNodes = 433439;
    $request->googleCloudMlV1VersionInput->container = new GoogleCloudMlV1ContainerSpec();
    $request->googleCloudMlV1VersionInput->container->args = [
        'assumenda',
        'eos',
    ];
    $request->googleCloudMlV1VersionInput->container->command = [
        'quisquam',
        'veritatis',
        'ipsa',
    ];
    $request->googleCloudMlV1VersionInput->container->env = [
        new GoogleCloudMlV1EnvVar(),
        new GoogleCloudMlV1EnvVar(),
        new GoogleCloudMlV1EnvVar(),
    ];
    $request->googleCloudMlV1VersionInput->container->image = 'quidem';
    $request->googleCloudMlV1VersionInput->container->ports = [
        new GoogleCloudMlV1ContainerPort(),
    ];
    $request->googleCloudMlV1VersionInput->createTime = 'quo';
    $request->googleCloudMlV1VersionInput->deploymentUri = 'illum';
    $request->googleCloudMlV1VersionInput->description = 'quo';
    $request->googleCloudMlV1VersionInput->errorMessage = 'fuga';
    $request->googleCloudMlV1VersionInput->etag = 'eius';
    $request->googleCloudMlV1VersionInput->explanationConfig = new GoogleCloudMlV1ExplanationConfig();
    $request->googleCloudMlV1VersionInput->explanationConfig->integratedGradientsAttribution = new GoogleCloudMlV1IntegratedGradientsAttribution();
    $request->googleCloudMlV1VersionInput->explanationConfig->integratedGradientsAttribution->numIntegralSteps = 178367;
    $request->googleCloudMlV1VersionInput->explanationConfig->sampledShapleyAttribution = new GoogleCloudMlV1SampledShapleyAttribution();
    $request->googleCloudMlV1VersionInput->explanationConfig->sampledShapleyAttribution->numPaths = 373813;
    $request->googleCloudMlV1VersionInput->explanationConfig->xraiAttribution = new GoogleCloudMlV1XraiAttribution();
    $request->googleCloudMlV1VersionInput->explanationConfig->xraiAttribution->numIntegralSteps = 69859;
    $request->googleCloudMlV1VersionInput->framework = GoogleCloudMlV1VersionFrameworkEnum::SCIKIT_LEARN;
    $request->googleCloudMlV1VersionInput->isDefault = false;
    $request->googleCloudMlV1VersionInput->labels = [
        'tempora' => 'debitis',
    ];
    $request->googleCloudMlV1VersionInput->lastUseTime = 'ipsam';
    $request->googleCloudMlV1VersionInput->machineType = 'aspernatur';
    $request->googleCloudMlV1VersionInput->manualScaling = new GoogleCloudMlV1ManualScaling();
    $request->googleCloudMlV1VersionInput->manualScaling->nodes = 197054;
    $request->googleCloudMlV1VersionInput->name = 'Miss Claude Walsh';
    $request->googleCloudMlV1VersionInput->packageUris = [
        'inventore',
        'nihil',
    ];
    $request->googleCloudMlV1VersionInput->predictionClass = 'totam';
    $request->googleCloudMlV1VersionInput->pythonVersion = 'accusamus';
    $request->googleCloudMlV1VersionInput->requestLoggingConfig = new GoogleCloudMlV1RequestLoggingConfig();
    $request->googleCloudMlV1VersionInput->requestLoggingConfig->bigqueryTableName = 'aliquam';
    $request->googleCloudMlV1VersionInput->requestLoggingConfig->samplingPercentage = 4884.1;
    $request->googleCloudMlV1VersionInput->routes = new GoogleCloudMlV1RouteMap();
    $request->googleCloudMlV1VersionInput->routes->health = 'occaecati';
    $request->googleCloudMlV1VersionInput->routes->predict = 'commodi';
    $request->googleCloudMlV1VersionInput->runtimeVersion = 'sapiente';
    $request->googleCloudMlV1VersionInput->serviceAccount = 'dolores';
    $request->googleCloudMlV1VersionInput->state = GoogleCloudMlV1VersionStateEnum::FAILED;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'porro';
    $request->fields = 'eum';
    $request->key = 'quas';
    $request->name = 'Eugene Leuschke';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->updateMask = 'atque';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new MlProjectsModelsVersionsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsModelsVersionsPatch($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsModelsVersionsSetDefault

Designates a version to be the default for the model. The default version is used for prediction requests made against the model that don't specify a version. The first version to be created for a model is automatically set as the default. You must make any subsequent changes to the default version setting manually using this method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsVersionsSetDefaultRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsModelsVersionsSetDefaultSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsModelsVersionsSetDefaultRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'sapiente' => 'consequuntur',
    ];
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'occaecati';
    $request->key = 'atque';
    $request->name = 'Tamara Vandervort IV';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new MlProjectsModelsVersionsSetDefaultSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsModelsVersionsSetDefault($request, $requestSecurity);

    if ($response->googleCloudMlV1Version !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'vel' => 'harum',
        'molestiae' => 'rerum',
        'occaecati' => 'minima',
        'distinctio' => 'eligendi',
    ];
    $request->accessToken = 'sit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempore';
    $request->fields = 'adipisci';
    $request->key = 'cumque';
    $request->name = 'Elizabeth Schinner';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new MlProjectsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsOperationsCancel($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsOperationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsOperationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsOperationsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'esse';
    $request->fields = 'quasi';
    $request->key = 'a';
    $request->name = 'Kirk Stracke';
    $request->oauthToken = 'eveniet';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new MlProjectsOperationsGetSecurity();
    $requestSecurity->option1 = new MlProjectsOperationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsOperationsGet($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->fields = 'aliquid';
    $request->filter = 'tenetur';
    $request->key = 'quae';
    $request->name = 'Chester King';
    $request->oauthToken = 'illum';
    $request->pageSize = 742238;
    $request->pageToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquam';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new MlProjectsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mlProjectsPredict

Performs online prediction on the data in the request. {% dynamic include "/ai-platform/includes/___predict-request" %} 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsPredictRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1PredictRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleApiHttpBody;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsPredictSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsPredictRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudMlV1PredictRequest = new GoogleCloudMlV1PredictRequest();
    $request->googleCloudMlV1PredictRequest->httpBody = new GoogleApiHttpBody();
    $request->googleCloudMlV1PredictRequest->httpBody->contentType = 'reprehenderit';
    $request->googleCloudMlV1PredictRequest->httpBody->data = 'ullam';
    $request->googleCloudMlV1PredictRequest->httpBody->extensions = [
        [
            'voluptatum' => 'qui',
        ],
        [
            'ex' => 'deleniti',
            'itaque' => 'dolorum',
            'architecto' => 'omnis',
            'tenetur' => 'quasi',
        ],
    ];
    $request->accessToken = 'at';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptate';
    $request->fields = 'ipsa';
    $request->key = 'minima';
    $request->name = 'Edith Ferry';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'rem';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'laudantium';

    $requestSecurity = new MlProjectsPredictSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsPredict($request, $requestSecurity);

    if ($response->googleApiHttpBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
