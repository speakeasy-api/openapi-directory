# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudMlV1ExplainRequest = new GoogleCloudMlV1ExplainRequest();
    $request->googleCloudMlV1ExplainRequest->httpBody = new GoogleApiHttpBody();
    $request->googleCloudMlV1ExplainRequest->httpBody->contentType = 'provident';
    $request->googleCloudMlV1ExplainRequest->httpBody->data = 'distinctio';
    $request->googleCloudMlV1ExplainRequest->httpBody->extensions = [
        [
            'nulla' => 'corrupti',
            'illum' => 'vel',
            'error' => 'deserunt',
        ],
        [
            'iure' => 'magnam',
            'debitis' => 'ipsa',
        ],
        [
            'tempora' => 'suscipit',
            'molestiae' => 'minus',
            'placeat' => 'voluptatum',
            'iusto' => 'excepturi',
        ],
        [
            'recusandae' => 'temporibus',
            'ab' => 'quis',
        ],
    ];
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->fields = 'ipsam';
    $request->key = 'repellendus';
    $request->name = 'Cedric Connelly';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'quod';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [mlProjectsExplain](docs/projects/README.md#mlprojectsexplain) - Performs explanation on the data in the request. {% dynamic include "/ai-platform/includes/___explain-request" %} 
* [mlProjectsGetConfig](docs/projects/README.md#mlprojectsgetconfig) - Get the service account information associated with your project. You need this information in order to grant the service account permissions for the Google Cloud Storage location where you put your model training code for training the model with Google Cloud Machine Learning.
* [mlProjectsJobsCreate](docs/projects/README.md#mlprojectsjobscreate) - Creates a training or a batch prediction job.
* [mlProjectsJobsList](docs/projects/README.md#mlprojectsjobslist) - Lists the jobs in the project. If there are no jobs that match the request parameters, the list request returns an empty response body: {}.
* [mlProjectsLocationsList](docs/projects/README.md#mlprojectslocationslist) - List all locations that provides at least one type of CMLE capability.
* [mlProjectsLocationsStudiesCreate](docs/projects/README.md#mlprojectslocationsstudiescreate) - Creates a study.
* [mlProjectsLocationsStudiesList](docs/projects/README.md#mlprojectslocationsstudieslist) - Lists all the studies in a region for an associated project.
* [mlProjectsLocationsStudiesTrialsAddMeasurement](docs/projects/README.md#mlprojectslocationsstudiestrialsaddmeasurement) - Adds a measurement of the objective metrics to a trial. This measurement is assumed to have been taken before the trial is complete.
* [mlProjectsLocationsStudiesTrialsCheckEarlyStoppingState](docs/projects/README.md#mlprojectslocationsstudiestrialscheckearlystoppingstate) - Checks whether a trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.
* [mlProjectsLocationsStudiesTrialsComplete](docs/projects/README.md#mlprojectslocationsstudiestrialscomplete) - Marks a trial as complete.
* [mlProjectsLocationsStudiesTrialsCreate](docs/projects/README.md#mlprojectslocationsstudiestrialscreate) - Adds a user provided trial to a study.
* [mlProjectsLocationsStudiesTrialsList](docs/projects/README.md#mlprojectslocationsstudiestrialslist) - Lists the trials associated with a study.
* [mlProjectsLocationsStudiesTrialsListOptimalTrials](docs/projects/README.md#mlprojectslocationsstudiestrialslistoptimaltrials) - Lists the pareto-optimal trials for multi-objective study or the optimal trials for single-objective study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency
* [mlProjectsLocationsStudiesTrialsStop](docs/projects/README.md#mlprojectslocationsstudiestrialsstop) - Stops a trial.
* [mlProjectsLocationsStudiesTrialsSuggest](docs/projects/README.md#mlprojectslocationsstudiestrialssuggest) - Adds one or more trials to a study, with parameter values suggested by AI Platform Vizier. Returns a long-running operation associated with the generation of trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.
* [mlProjectsModelsCreate](docs/projects/README.md#mlprojectsmodelscreate) - Creates a model which will later contain one or more versions. You must add at least one version before you can request predictions from the model. Add versions by calling projects.models.versions.create.
* [mlProjectsModelsGetIamPolicy](docs/projects/README.md#mlprojectsmodelsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [mlProjectsModelsList](docs/projects/README.md#mlprojectsmodelslist) - Lists the models in a project. Each project can contain multiple models, and each model can have multiple versions. If there are no models that match the request parameters, the list request returns an empty response body: {}.
* [mlProjectsModelsSetIamPolicy](docs/projects/README.md#mlprojectsmodelssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [mlProjectsModelsTestIamPermissions](docs/projects/README.md#mlprojectsmodelstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [mlProjectsModelsVersionsCreate](docs/projects/README.md#mlprojectsmodelsversionscreate) - Creates a new version of a model from a trained TensorFlow model. If the version created in the cloud by this call is the first deployed version of the specified model, it will be made the default version of the model. When you add a version to a model that already has one or more versions, the default version does not automatically change. If you want a new version to be the default, you must call projects.models.versions.setDefault.
* [mlProjectsModelsVersionsDelete](docs/projects/README.md#mlprojectsmodelsversionsdelete) - Deletes a model version. Each model can have multiple versions deployed and in use at any given time. Use this method to remove a single version. Note: You cannot delete the version that is set as the default version of the model unless it is the only remaining version.
* [mlProjectsModelsVersionsList](docs/projects/README.md#mlprojectsmodelsversionslist) - Gets basic information about all the versions of a model. If you expect that a model has many versions, or if you need to handle only a limited number of results at a time, you can request that the list be retrieved in batches (called pages). If there are no versions that match the request parameters, the list request returns an empty response body: {}.
* [mlProjectsModelsVersionsPatch](docs/projects/README.md#mlprojectsmodelsversionspatch) - Updates the specified Version resource. Currently the only update-able fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`.
* [mlProjectsModelsVersionsSetDefault](docs/projects/README.md#mlprojectsmodelsversionssetdefault) - Designates a version to be the default for the model. The default version is used for prediction requests made against the model that don't specify a version. The first version to be created for a model is automatically set as the default. You must make any subsequent changes to the default version setting manually using this method.
* [mlProjectsOperationsCancel](docs/projects/README.md#mlprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [mlProjectsOperationsGet](docs/projects/README.md#mlprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [mlProjectsOperationsList](docs/projects/README.md#mlprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [mlProjectsPredict](docs/projects/README.md#mlprojectspredict) - Performs online prediction on the data in the request. {% dynamic include "/ai-platform/includes/___predict-request" %} 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
