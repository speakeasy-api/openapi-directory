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
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsAnnotationSpecSetsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1AnnotationSpecSet;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1AnnotationSpec;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsAnnotationSpecSetsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsAnnotationSpecSetsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest = new GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest();
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest->annotationSpecSet = new GoogleCloudDatalabelingV1beta1AnnotationSpecSet();
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest->annotationSpecSet->annotationSpecs = [
        new GoogleCloudDatalabelingV1beta1AnnotationSpec(),
        new GoogleCloudDatalabelingV1beta1AnnotationSpec(),
        new GoogleCloudDatalabelingV1beta1AnnotationSpec(),
    ];
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest->annotationSpecSet->blockingResources = [
        'quibusdam',
        'unde',
        'nulla',
    ];
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest->annotationSpecSet->description = 'corrupti';
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest->annotationSpecSet->displayName = 'illum';
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest->annotationSpecSet->name = 'Sabrina Oberbrunner';
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'delectus';
    $request->key = 'tempora';
    $request->oauthToken = 'suscipit';
    $request->parent = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'minus';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'voluptatum';

    $requestSecurity = new DatalabelingProjectsAnnotationSpecSetsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsAnnotationSpecSetsCreate($request, $requestSecurity);

    if ($response->googleCloudDatalabelingV1beta1AnnotationSpecSet !== null) {
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

* [datalabelingProjectsAnnotationSpecSetsCreate](docs/projects/README.md#datalabelingprojectsannotationspecsetscreate) - Creates an annotation spec set by providing a set of labels.
* [datalabelingProjectsAnnotationSpecSetsList](docs/projects/README.md#datalabelingprojectsannotationspecsetslist) - Lists annotation spec sets for a project. Pagination is supported.
* [datalabelingProjectsDatasetsAnnotatedDatasetsExamplesList](docs/projects/README.md#datalabelingprojectsdatasetsannotateddatasetsexampleslist) - Lists examples in an annotated dataset. Pagination is supported.
* [datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreate](docs/projects/README.md#datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadsfeedbackmessagescreate) - Create a FeedbackMessage object.
* [datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesList](docs/projects/README.md#datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadsfeedbackmessageslist) - List FeedbackMessages with pagination.
* [datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsList](docs/projects/README.md#datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadslist) - List FeedbackThreads with pagination.
* [datalabelingProjectsDatasetsAnnotatedDatasetsList](docs/projects/README.md#datalabelingprojectsdatasetsannotateddatasetslist) - Lists annotated datasets for a dataset. Pagination is supported.
* [datalabelingProjectsDatasetsCreate](docs/projects/README.md#datalabelingprojectsdatasetscreate) - Creates dataset. If success return a Dataset resource.
* [datalabelingProjectsDatasetsDataItemsList](docs/projects/README.md#datalabelingprojectsdatasetsdataitemslist) - Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.
* [datalabelingProjectsDatasetsEvaluationsExampleComparisonsSearch](docs/projects/README.md#datalabelingprojectsdatasetsevaluationsexamplecomparisonssearch) - Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.
* [datalabelingProjectsDatasetsExportData](docs/projects/README.md#datalabelingprojectsdatasetsexportdata) - Exports data and annotations from dataset.
* [datalabelingProjectsDatasetsImageLabel](docs/projects/README.md#datalabelingprojectsdatasetsimagelabel) - Starts a labeling task for image. The type of image labeling task is configured by feature in the request.
* [datalabelingProjectsDatasetsImportData](docs/projects/README.md#datalabelingprojectsdatasetsimportdata) - Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.
* [datalabelingProjectsDatasetsList](docs/projects/README.md#datalabelingprojectsdatasetslist) - Lists datasets under a project. Pagination is supported.
* [datalabelingProjectsDatasetsTextLabel](docs/projects/README.md#datalabelingprojectsdatasetstextlabel) - Starts a labeling task for text. The type of text labeling task is configured by feature in the request.
* [datalabelingProjectsDatasetsVideoLabel](docs/projects/README.md#datalabelingprojectsdatasetsvideolabel) - Starts a labeling task for video. The type of video labeling task is configured by feature in the request.
* [datalabelingProjectsEvaluationJobsCreate](docs/projects/README.md#datalabelingprojectsevaluationjobscreate) - Creates an evaluation job.
* [datalabelingProjectsEvaluationJobsList](docs/projects/README.md#datalabelingprojectsevaluationjobslist) - Lists all evaluation jobs within a project with possible filters. Pagination is supported.
* [datalabelingProjectsEvaluationJobsPatch](docs/projects/README.md#datalabelingprojectsevaluationjobspatch) - Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.
* [datalabelingProjectsEvaluationJobsPause](docs/projects/README.md#datalabelingprojectsevaluationjobspause) - Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.
* [datalabelingProjectsEvaluationJobsResume](docs/projects/README.md#datalabelingprojectsevaluationjobsresume) - Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.
* [datalabelingProjectsEvaluationsSearch](docs/projects/README.md#datalabelingprojectsevaluationssearch) - Searches evaluations within a project.
* [datalabelingProjectsInstructionsCreate](docs/projects/README.md#datalabelingprojectsinstructionscreate) - Creates an instruction for how data should be labeled.
* [datalabelingProjectsInstructionsList](docs/projects/README.md#datalabelingprojectsinstructionslist) - Lists instructions for a project. Pagination is supported.
* [datalabelingProjectsOperationsCancel](docs/projects/README.md#datalabelingprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datalabelingProjectsOperationsDelete](docs/projects/README.md#datalabelingprojectsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [datalabelingProjectsOperationsGet](docs/projects/README.md#datalabelingprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [datalabelingProjectsOperationsList](docs/projects/README.md#datalabelingprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
