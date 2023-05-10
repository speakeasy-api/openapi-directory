# projects

### Available Operations

* [datalabelingProjectsAnnotationSpecSetsCreate](#datalabelingprojectsannotationspecsetscreate) - Creates an annotation spec set by providing a set of labels.
* [datalabelingProjectsAnnotationSpecSetsList](#datalabelingprojectsannotationspecsetslist) - Lists annotation spec sets for a project. Pagination is supported.
* [datalabelingProjectsDatasetsAnnotatedDatasetsExamplesList](#datalabelingprojectsdatasetsannotateddatasetsexampleslist) - Lists examples in an annotated dataset. Pagination is supported.
* [datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreate](#datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadsfeedbackmessagescreate) - Create a FeedbackMessage object.
* [datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesList](#datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadsfeedbackmessageslist) - List FeedbackMessages with pagination.
* [datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsList](#datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadslist) - List FeedbackThreads with pagination.
* [datalabelingProjectsDatasetsAnnotatedDatasetsList](#datalabelingprojectsdatasetsannotateddatasetslist) - Lists annotated datasets for a dataset. Pagination is supported.
* [datalabelingProjectsDatasetsCreate](#datalabelingprojectsdatasetscreate) - Creates dataset. If success return a Dataset resource.
* [datalabelingProjectsDatasetsDataItemsList](#datalabelingprojectsdatasetsdataitemslist) - Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.
* [datalabelingProjectsDatasetsEvaluationsExampleComparisonsSearch](#datalabelingprojectsdatasetsevaluationsexamplecomparisonssearch) - Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.
* [datalabelingProjectsDatasetsExportData](#datalabelingprojectsdatasetsexportdata) - Exports data and annotations from dataset.
* [datalabelingProjectsDatasetsImageLabel](#datalabelingprojectsdatasetsimagelabel) - Starts a labeling task for image. The type of image labeling task is configured by feature in the request.
* [datalabelingProjectsDatasetsImportData](#datalabelingprojectsdatasetsimportdata) - Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.
* [datalabelingProjectsDatasetsList](#datalabelingprojectsdatasetslist) - Lists datasets under a project. Pagination is supported.
* [datalabelingProjectsDatasetsTextLabel](#datalabelingprojectsdatasetstextlabel) - Starts a labeling task for text. The type of text labeling task is configured by feature in the request.
* [datalabelingProjectsDatasetsVideoLabel](#datalabelingprojectsdatasetsvideolabel) - Starts a labeling task for video. The type of video labeling task is configured by feature in the request.
* [datalabelingProjectsEvaluationJobsCreate](#datalabelingprojectsevaluationjobscreate) - Creates an evaluation job.
* [datalabelingProjectsEvaluationJobsList](#datalabelingprojectsevaluationjobslist) - Lists all evaluation jobs within a project with possible filters. Pagination is supported.
* [datalabelingProjectsEvaluationJobsPatch](#datalabelingprojectsevaluationjobspatch) - Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.
* [datalabelingProjectsEvaluationJobsPause](#datalabelingprojectsevaluationjobspause) - Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.
* [datalabelingProjectsEvaluationJobsResume](#datalabelingprojectsevaluationjobsresume) - Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.
* [datalabelingProjectsEvaluationsSearch](#datalabelingprojectsevaluationssearch) - Searches evaluations within a project.
* [datalabelingProjectsInstructionsCreate](#datalabelingprojectsinstructionscreate) - Creates an instruction for how data should be labeled.
* [datalabelingProjectsInstructionsList](#datalabelingprojectsinstructionslist) - Lists instructions for a project. Pagination is supported.
* [datalabelingProjectsOperationsCancel](#datalabelingprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datalabelingProjectsOperationsDelete](#datalabelingprojectsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [datalabelingProjectsOperationsGet](#datalabelingprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [datalabelingProjectsOperationsList](#datalabelingprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## datalabelingProjectsAnnotationSpecSetsCreate

Creates an annotation spec set by providing a set of labels.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest = new GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest();
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest->annotationSpecSet = new GoogleCloudDatalabelingV1beta1AnnotationSpecSet();
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest->annotationSpecSet->annotationSpecs = [
        new GoogleCloudDatalabelingV1beta1AnnotationSpec(),
        new GoogleCloudDatalabelingV1beta1AnnotationSpec(),
        new GoogleCloudDatalabelingV1beta1AnnotationSpec(),
    ];
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest->annotationSpecSet->blockingResources = [
        'recusandae',
        'temporibus',
    ];
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest->annotationSpecSet->description = 'ab';
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest->annotationSpecSet->displayName = 'quis';
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest->annotationSpecSet->name = 'Iris Aufderhar';
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->fields = 'at';
    $request->key = 'at';
    $request->oauthToken = 'maiores';
    $request->parent = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'esse';

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

## datalabelingProjectsAnnotationSpecSetsList

Lists annotation spec sets for a project. Pagination is supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsAnnotationSpecSetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsAnnotationSpecSetsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsAnnotationSpecSetsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'nam';
    $request->filter = 'officia';
    $request->key = 'occaecati';
    $request->oauthToken = 'fugit';
    $request->pageSize = 537373;
    $request->pageToken = 'hic';
    $request->parent = 'optio';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new DatalabelingProjectsAnnotationSpecSetsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsAnnotationSpecSetsList($request, $requestSecurity);

    if ($response->googleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsDatasetsAnnotatedDatasetsExamplesList

Lists examples in an annotated dataset. Pagination is supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->fields = 'cum';
    $request->filter = 'esse';
    $request->key = 'ipsum';
    $request->oauthToken = 'excepturi';
    $request->pageSize = 135218;
    $request->pageToken = 'perferendis';
    $request->parent = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsDatasetsAnnotatedDatasetsExamplesList($request, $requestSecurity);

    if ($response->googleCloudDatalabelingV1beta1ListExamplesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreate

Create a FeedbackMessage object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1FeedbackMessage;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatalabelingV1beta1FeedbackMessage = new GoogleCloudDatalabelingV1beta1FeedbackMessage();
    $request->googleCloudDatalabelingV1beta1FeedbackMessage->body = 'natus';
    $request->googleCloudDatalabelingV1beta1FeedbackMessage->createTime = 'laboriosam';
    $request->googleCloudDatalabelingV1beta1FeedbackMessage->image = 'hic';
    $request->googleCloudDatalabelingV1beta1FeedbackMessage->name = 'Wilbur Kirlin';
    $request->googleCloudDatalabelingV1beta1FeedbackMessage->operatorFeedbackMetadata = [
        'saepe' => 'quidem',
        'architecto' => 'ipsa',
    ];
    $request->googleCloudDatalabelingV1beta1FeedbackMessage->requesterFeedbackMetadata = [
        'est' => 'mollitia',
        'laborum' => 'dolores',
        'dolorem' => 'corporis',
        'explicabo' => 'nobis',
    ];
    $request->accessToken = 'enim';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nemo';
    $request->fields = 'minima';
    $request->key = 'excepturi';
    $request->oauthToken = 'accusantium';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesList

List FeedbackMessages with pagination.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'culpa';
    $request->fields = 'consequuntur';
    $request->key = 'repellat';
    $request->oauthToken = 'mollitia';
    $request->pageSize = 581850;
    $request->pageToken = 'numquam';
    $request->parent = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesList($request, $requestSecurity);

    if ($response->googleCloudDatalabelingV1beta1ListFeedbackMessagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsList

List FeedbackThreads with pagination.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vitae';
    $request->fields = 'laborum';
    $request->key = 'animi';
    $request->oauthToken = 'enim';
    $request->pageSize = 138183;
    $request->pageToken = 'quo';
    $request->parent = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'id';

    $requestSecurity = new DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsList($request, $requestSecurity);

    if ($response->googleCloudDatalabelingV1beta1ListFeedbackThreadsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsDatasetsAnnotatedDatasetsList

Lists annotated datasets for a dataset. Pagination is supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsAnnotatedDatasetsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'temporibus';
    $request->filter = 'laborum';
    $request->key = 'quasi';
    $request->oauthToken = 'reiciendis';
    $request->pageSize = 976460;
    $request->pageToken = 'vero';
    $request->parent = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new DatalabelingProjectsDatasetsAnnotatedDatasetsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsDatasetsAnnotatedDatasetsList($request, $requestSecurity);

    if ($response->googleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsDatasetsCreate

Creates dataset. If success return a Dataset resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1CreateDatasetRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1Dataset;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1InputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1BigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1ClassificationMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1TextMetadata;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsDatasetsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatalabelingV1beta1CreateDatasetRequest = new GoogleCloudDatalabelingV1beta1CreateDatasetRequest();
    $request->googleCloudDatalabelingV1beta1CreateDatasetRequest->dataset = new GoogleCloudDatalabelingV1beta1Dataset();
    $request->googleCloudDatalabelingV1beta1CreateDatasetRequest->dataset->blockingResources = [
        'cum',
        'perferendis',
    ];
    $request->googleCloudDatalabelingV1beta1CreateDatasetRequest->dataset->createTime = 'doloremque';
    $request->googleCloudDatalabelingV1beta1CreateDatasetRequest->dataset->dataItemCount = 'reprehenderit';
    $request->googleCloudDatalabelingV1beta1CreateDatasetRequest->dataset->description = 'ut';
    $request->googleCloudDatalabelingV1beta1CreateDatasetRequest->dataset->displayName = 'maiores';
    $request->googleCloudDatalabelingV1beta1CreateDatasetRequest->dataset->inputConfigs = [
        new GoogleCloudDatalabelingV1beta1InputConfig(),
    ];
    $request->googleCloudDatalabelingV1beta1CreateDatasetRequest->dataset->lastMigrateTime = 'corporis';
    $request->googleCloudDatalabelingV1beta1CreateDatasetRequest->dataset->name = 'Heidi Carter';
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repudiandae';
    $request->fields = 'quae';
    $request->key = 'ipsum';
    $request->oauthToken = 'quidem';
    $request->parent = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new DatalabelingProjectsDatasetsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsDatasetsCreate($request, $requestSecurity);

    if ($response->googleCloudDatalabelingV1beta1Dataset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsDatasetsDataItemsList

Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsDataItemsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsDataItemsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsDatasetsDataItemsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'repudiandae';
    $request->filter = 'sint';
    $request->key = 'veritatis';
    $request->oauthToken = 'itaque';
    $request->pageSize = 277718;
    $request->pageToken = 'enim';
    $request->parent = 'consequatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new DatalabelingProjectsDatasetsDataItemsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsDatasetsDataItemsList($request, $requestSecurity);

    if ($response->googleCloudDatalabelingV1beta1ListDataItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsDatasetsEvaluationsExampleComparisonsSearch

Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatalabelingV1beta1SearchExampleComparisonsRequest = new GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest();
    $request->googleCloudDatalabelingV1beta1SearchExampleComparisonsRequest->pageSize = 716327;
    $request->googleCloudDatalabelingV1beta1SearchExampleComparisonsRequest->pageToken = 'quibusdam';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'aliquid';
    $request->key = 'cupiditate';
    $request->oauthToken = 'quos';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsDatasetsEvaluationsExampleComparisonsSearch($request, $requestSecurity);

    if ($response->googleCloudDatalabelingV1beta1SearchExampleComparisonsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsDatasetsExportData

Exports data and annotations from dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsExportDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1ExportDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1OutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1GcsDestination;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1GcsFolderDestination;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsExportDataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsDatasetsExportDataRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatalabelingV1beta1ExportDataRequest = new GoogleCloudDatalabelingV1beta1ExportDataRequest();
    $request->googleCloudDatalabelingV1beta1ExportDataRequest->annotatedDataset = 'fugit';
    $request->googleCloudDatalabelingV1beta1ExportDataRequest->filter = 'dolorum';
    $request->googleCloudDatalabelingV1beta1ExportDataRequest->outputConfig = new GoogleCloudDatalabelingV1beta1OutputConfig();
    $request->googleCloudDatalabelingV1beta1ExportDataRequest->outputConfig->gcsDestination = new GoogleCloudDatalabelingV1beta1GcsDestination();
    $request->googleCloudDatalabelingV1beta1ExportDataRequest->outputConfig->gcsDestination->mimeType = 'excepturi';
    $request->googleCloudDatalabelingV1beta1ExportDataRequest->outputConfig->gcsDestination->outputUri = 'tempora';
    $request->googleCloudDatalabelingV1beta1ExportDataRequest->outputConfig->gcsFolderDestination = new GoogleCloudDatalabelingV1beta1GcsFolderDestination();
    $request->googleCloudDatalabelingV1beta1ExportDataRequest->outputConfig->gcsFolderDestination->outputFolderUri = 'facilis';
    $request->googleCloudDatalabelingV1beta1ExportDataRequest->userEmailAddress = 'tempore';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'non';
    $request->key = 'eligendi';
    $request->name = 'Gilbert Medhurst';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'a';

    $requestSecurity = new DatalabelingProjectsDatasetsExportDataSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsDatasetsExportData($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsDatasetsImageLabel

Starts a labeling task for image. The type of image labeling task is configured by feature in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsImageLabelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1LabelImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1BoundingPolyConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1ImageClassificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1PolylineConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1SegmentationConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsImageLabelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsDatasetsImageLabelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatalabelingV1beta1LabelImageRequest = new GoogleCloudDatalabelingV1beta1LabelImageRequest();
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->basicConfig = new GoogleCloudDatalabelingV1beta1HumanAnnotationConfig();
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->basicConfig->annotatedDatasetDescription = 'in';
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->basicConfig->annotatedDatasetDisplayName = 'in';
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->basicConfig->contributorEmails = [
        'maiores',
        'rerum',
        'dicta',
        'magnam',
    ];
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->basicConfig->instruction = 'cumque';
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->basicConfig->labelGroup = 'facere';
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->basicConfig->languageCode = 'ea';
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->basicConfig->questionDuration = 'aliquid';
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->basicConfig->replicaCount = 675439;
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->basicConfig->userEmailAddress = 'accusamus';
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->boundingPolyConfig = new GoogleCloudDatalabelingV1beta1BoundingPolyConfig();
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->boundingPolyConfig->annotationSpecSet = 'non';
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->boundingPolyConfig->instructionMessage = 'occaecati';
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->feature = GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum::BOUNDING_BOX;
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->imageClassificationConfig = new GoogleCloudDatalabelingV1beta1ImageClassificationConfig();
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->imageClassificationConfig->allowMultiLabel = false;
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->imageClassificationConfig->annotationSpecSet = 'accusamus';
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->imageClassificationConfig->answerAggregationType = GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum::NO_AGGREGATION;
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->polylineConfig = new GoogleCloudDatalabelingV1beta1PolylineConfig();
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->polylineConfig->annotationSpecSet = 'quidem';
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->polylineConfig->instructionMessage = 'provident';
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->segmentationConfig = new GoogleCloudDatalabelingV1beta1SegmentationConfig();
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->segmentationConfig->annotationSpecSet = 'nam';
    $request->googleCloudDatalabelingV1beta1LabelImageRequest->segmentationConfig->instructionMessage = 'id';
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sapiente';
    $request->fields = 'amet';
    $request->key = 'deserunt';
    $request->oauthToken = 'nisi';
    $request->parent = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new DatalabelingProjectsDatasetsImageLabelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsDatasetsImageLabel($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsDatasetsImportData

Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsImportDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1ImportDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1InputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1BigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1ClassificationMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1TextMetadata;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsImportDataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsDatasetsImportDataRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatalabelingV1beta1ImportDataRequest = new GoogleCloudDatalabelingV1beta1ImportDataRequest();
    $request->googleCloudDatalabelingV1beta1ImportDataRequest->inputConfig = new GoogleCloudDatalabelingV1beta1InputConfig();
    $request->googleCloudDatalabelingV1beta1ImportDataRequest->inputConfig->annotationType = GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum::IMAGE_SEGMENTATION_ANNOTATION;
    $request->googleCloudDatalabelingV1beta1ImportDataRequest->inputConfig->bigquerySource = new GoogleCloudDatalabelingV1beta1BigQuerySource();
    $request->googleCloudDatalabelingV1beta1ImportDataRequest->inputConfig->bigquerySource->inputUri = 'magnam';
    $request->googleCloudDatalabelingV1beta1ImportDataRequest->inputConfig->classificationMetadata = new GoogleCloudDatalabelingV1beta1ClassificationMetadata();
    $request->googleCloudDatalabelingV1beta1ImportDataRequest->inputConfig->classificationMetadata->isMultiLabel = false;
    $request->googleCloudDatalabelingV1beta1ImportDataRequest->inputConfig->dataType = GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum::TEXT;
    $request->googleCloudDatalabelingV1beta1ImportDataRequest->inputConfig->gcsSource = new GoogleCloudDatalabelingV1beta1GcsSource();
    $request->googleCloudDatalabelingV1beta1ImportDataRequest->inputConfig->gcsSource->inputUri = 'id';
    $request->googleCloudDatalabelingV1beta1ImportDataRequest->inputConfig->gcsSource->mimeType = 'labore';
    $request->googleCloudDatalabelingV1beta1ImportDataRequest->inputConfig->textMetadata = new GoogleCloudDatalabelingV1beta1TextMetadata();
    $request->googleCloudDatalabelingV1beta1ImportDataRequest->inputConfig->textMetadata->languageCode = 'labore';
    $request->googleCloudDatalabelingV1beta1ImportDataRequest->userEmailAddress = 'suscipit';
    $request->accessToken = 'natus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'vero';
    $request->key = 'aspernatur';
    $request->name = 'Danielle Bosco';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new DatalabelingProjectsDatasetsImportDataSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsDatasetsImportData($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsDatasetsList

Lists datasets under a project. Pagination is supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsDatasetsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ad';
    $request->fields = 'eum';
    $request->filter = 'dolor';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'odit';
    $request->pageSize = 367562;
    $request->pageToken = 'quasi';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'eius';

    $requestSecurity = new DatalabelingProjectsDatasetsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsDatasetsList($request, $requestSecurity);

    if ($response->googleCloudDatalabelingV1beta1ListDatasetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsDatasetsTextLabel

Starts a labeling task for text. The type of text labeling task is configured by feature in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsTextLabelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1LabelTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1TextClassificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1SentimentConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsTextLabelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsDatasetsTextLabelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatalabelingV1beta1LabelTextRequest = new GoogleCloudDatalabelingV1beta1LabelTextRequest();
    $request->googleCloudDatalabelingV1beta1LabelTextRequest->basicConfig = new GoogleCloudDatalabelingV1beta1HumanAnnotationConfig();
    $request->googleCloudDatalabelingV1beta1LabelTextRequest->basicConfig->annotatedDatasetDescription = 'deleniti';
    $request->googleCloudDatalabelingV1beta1LabelTextRequest->basicConfig->annotatedDatasetDisplayName = 'facilis';
    $request->googleCloudDatalabelingV1beta1LabelTextRequest->basicConfig->contributorEmails = [
        'architecto',
        'architecto',
    ];
    $request->googleCloudDatalabelingV1beta1LabelTextRequest->basicConfig->instruction = 'repudiandae';
    $request->googleCloudDatalabelingV1beta1LabelTextRequest->basicConfig->labelGroup = 'ullam';
    $request->googleCloudDatalabelingV1beta1LabelTextRequest->basicConfig->languageCode = 'expedita';
    $request->googleCloudDatalabelingV1beta1LabelTextRequest->basicConfig->questionDuration = 'nihil';
    $request->googleCloudDatalabelingV1beta1LabelTextRequest->basicConfig->replicaCount = 998848;
    $request->googleCloudDatalabelingV1beta1LabelTextRequest->basicConfig->userEmailAddress = 'quibusdam';
    $request->googleCloudDatalabelingV1beta1LabelTextRequest->feature = GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum::FEATURE_UNSPECIFIED;
    $request->googleCloudDatalabelingV1beta1LabelTextRequest->textClassificationConfig = new GoogleCloudDatalabelingV1beta1TextClassificationConfig();
    $request->googleCloudDatalabelingV1beta1LabelTextRequest->textClassificationConfig->allowMultiLabel = false;
    $request->googleCloudDatalabelingV1beta1LabelTextRequest->textClassificationConfig->annotationSpecSet = 'saepe';
    $request->googleCloudDatalabelingV1beta1LabelTextRequest->textClassificationConfig->sentimentConfig = new GoogleCloudDatalabelingV1beta1SentimentConfig();
    $request->googleCloudDatalabelingV1beta1LabelTextRequest->textClassificationConfig->sentimentConfig->enableLabelSentimentSelection = false;
    $request->googleCloudDatalabelingV1beta1LabelTextRequest->textEntityExtractionConfig = new GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig();
    $request->googleCloudDatalabelingV1beta1LabelTextRequest->textEntityExtractionConfig->annotationSpecSet = 'pariatur';
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->fields = 'natus';
    $request->key = 'magni';
    $request->oauthToken = 'sunt';
    $request->parent = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'maxime';

    $requestSecurity = new DatalabelingProjectsDatasetsTextLabelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsDatasetsTextLabel($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsDatasetsVideoLabel

Starts a labeling task for video. The type of video labeling task is configured by feature in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsVideoLabelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1LabelVideoRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1EventConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1ObjectDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1ObjectTrackingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1VideoClassificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsDatasetsVideoLabelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsDatasetsVideoLabelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest = new GoogleCloudDatalabelingV1beta1LabelVideoRequest();
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->basicConfig = new GoogleCloudDatalabelingV1beta1HumanAnnotationConfig();
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->basicConfig->annotatedDatasetDescription = 'excepturi';
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->basicConfig->annotatedDatasetDisplayName = 'odit';
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->basicConfig->contributorEmails = [
        'accusantium',
        'ab',
    ];
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->basicConfig->instruction = 'maiores';
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->basicConfig->labelGroup = 'quidem';
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->basicConfig->languageCode = 'ipsam';
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->basicConfig->questionDuration = 'voluptate';
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->basicConfig->replicaCount = 420075;
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->basicConfig->userEmailAddress = 'nam';
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->eventConfig = new GoogleCloudDatalabelingV1beta1EventConfig();
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->eventConfig->annotationSpecSets = [
        'pariatur',
    ];
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->eventConfig->clipLength = 365496;
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->eventConfig->overlapLength = 975522;
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->feature = GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum::FEATURE_UNSPECIFIED;
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->objectDetectionConfig = new GoogleCloudDatalabelingV1beta1ObjectDetectionConfig();
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->objectDetectionConfig->annotationSpecSet = 'fugiat';
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->objectDetectionConfig->extractionFrameRate = 2307.42;
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->objectTrackingConfig = new GoogleCloudDatalabelingV1beta1ObjectTrackingConfig();
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->objectTrackingConfig->annotationSpecSet = 'aut';
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->objectTrackingConfig->clipLength = 764912;
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->objectTrackingConfig->overlapLength = 359978;
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->videoClassificationConfig = new GoogleCloudDatalabelingV1beta1VideoClassificationConfig();
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->videoClassificationConfig->annotationSpecSetConfigs = [
        new GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig(),
        new GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig(),
        new GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig(),
        new GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig(),
    ];
    $request->googleCloudDatalabelingV1beta1LabelVideoRequest->videoClassificationConfig->applyShotDetection = false;
    $request->accessToken = 'libero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolores';
    $request->fields = 'quis';
    $request->key = 'totam';
    $request->oauthToken = 'dignissimos';
    $request->parent = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'eos';

    $requestSecurity = new DatalabelingProjectsDatasetsVideoLabelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsDatasetsVideoLabel($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsEvaluationJobsCreate

Creates an evaluation job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsEvaluationJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1EvaluationJob;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1Attempt;
use \OpenAPI\OpenAPI\Models\Shared\GoogleRpcStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1EvaluationJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1BoundingPolyConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1EvaluationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1ImageClassificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1InputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1BigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1ClassificationMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1TextMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1TextClassificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1SentimentConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsEvaluationJobsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsEvaluationJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest = new GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest();
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job = new GoogleCloudDatalabelingV1beta1EvaluationJob();
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->annotationSpecSet = 'dolores';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->attempts = [
        new GoogleCloudDatalabelingV1beta1Attempt(),
        new GoogleCloudDatalabelingV1beta1Attempt(),
        new GoogleCloudDatalabelingV1beta1Attempt(),
        new GoogleCloudDatalabelingV1beta1Attempt(),
    ];
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->createTime = 'quam';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->description = 'dolor';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig = new GoogleCloudDatalabelingV1beta1EvaluationJobConfig();
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->bigqueryImportKeys = [
        'nostrum' => 'hic',
        'recusandae' => 'omnis',
        'facilis' => 'perspiciatis',
        'voluptatem' => 'porro',
    ];
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->boundingPolyConfig = new GoogleCloudDatalabelingV1beta1BoundingPolyConfig();
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->boundingPolyConfig->annotationSpecSet = 'consequuntur';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->boundingPolyConfig->instructionMessage = 'blanditiis';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->evaluationConfig = new GoogleCloudDatalabelingV1beta1EvaluationConfig();
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->evaluationConfig->boundingBoxEvaluationOptions = new GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions();
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->evaluationConfig->boundingBoxEvaluationOptions->iouThreshold = 6214.79;
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->evaluationJobAlertConfig = new GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig();
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->evaluationJobAlertConfig->email = 'Kitty99@gmail.com';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->evaluationJobAlertConfig->minAcceptableMeanAveragePrecision = 9342.14;
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->exampleCount = 267262;
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->exampleSamplePercentage = 6139.66;
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->humanAnnotationConfig = new GoogleCloudDatalabelingV1beta1HumanAnnotationConfig();
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->humanAnnotationConfig->annotatedDatasetDescription = 'dolorum';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->humanAnnotationConfig->annotatedDatasetDisplayName = 'deleniti';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->humanAnnotationConfig->contributorEmails = [
        'provident',
        'nobis',
        'libero',
        'delectus',
    ];
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->humanAnnotationConfig->instruction = 'quaerat';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->humanAnnotationConfig->labelGroup = 'quos';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->humanAnnotationConfig->languageCode = 'aliquid';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->humanAnnotationConfig->questionDuration = 'dolorem';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->humanAnnotationConfig->replicaCount = 209843;
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->humanAnnotationConfig->userEmailAddress = 'dolor';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->imageClassificationConfig = new GoogleCloudDatalabelingV1beta1ImageClassificationConfig();
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->imageClassificationConfig->allowMultiLabel = false;
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->imageClassificationConfig->annotationSpecSet = 'qui';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->imageClassificationConfig->answerAggregationType = GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum::STRING_AGGREGATION_TYPE_UNSPECIFIED;
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->inputConfig = new GoogleCloudDatalabelingV1beta1InputConfig();
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->inputConfig->annotationType = GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum::GENERAL_CLASSIFICATION_ANNOTATION;
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->inputConfig->bigquerySource = new GoogleCloudDatalabelingV1beta1BigQuerySource();
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->inputConfig->bigquerySource->inputUri = 'excepturi';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->inputConfig->classificationMetadata = new GoogleCloudDatalabelingV1beta1ClassificationMetadata();
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->inputConfig->classificationMetadata->isMultiLabel = false;
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->inputConfig->dataType = GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum::TEXT;
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->inputConfig->gcsSource = new GoogleCloudDatalabelingV1beta1GcsSource();
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->inputConfig->gcsSource->inputUri = 'voluptate';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->inputConfig->gcsSource->mimeType = 'dignissimos';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->inputConfig->textMetadata = new GoogleCloudDatalabelingV1beta1TextMetadata();
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->inputConfig->textMetadata->languageCode = 'reiciendis';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->textClassificationConfig = new GoogleCloudDatalabelingV1beta1TextClassificationConfig();
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->textClassificationConfig->allowMultiLabel = false;
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->textClassificationConfig->annotationSpecSet = 'amet';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->textClassificationConfig->sentimentConfig = new GoogleCloudDatalabelingV1beta1SentimentConfig();
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->evaluationJobConfig->textClassificationConfig->sentimentConfig->enableLabelSentimentSelection = false;
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->labelMissingGroundTruth = false;
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->modelVersion = 'dolorum';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->name = 'Ms. Christine Beer';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->schedule = 'quaerat';
    $request->googleCloudDatalabelingV1beta1CreateEvaluationJobRequest->job->state = GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum::STOPPED;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptas';
    $request->fields = 'natus';
    $request->key = 'eos';
    $request->oauthToken = 'atque';
    $request->parent = 'sit';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'soluta';

    $requestSecurity = new DatalabelingProjectsEvaluationJobsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsEvaluationJobsCreate($request, $requestSecurity);

    if ($response->googleCloudDatalabelingV1beta1EvaluationJob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsEvaluationJobsList

Lists all evaluation jobs within a project with possible filters. Pagination is supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsEvaluationJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsEvaluationJobsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsEvaluationJobsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorum';
    $request->fields = 'deleniti';
    $request->filter = 'omnis';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'distinctio';
    $request->pageSize = 990339;
    $request->pageToken = 'nihil';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new DatalabelingProjectsEvaluationJobsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsEvaluationJobsList($request, $requestSecurity);

    if ($response->googleCloudDatalabelingV1beta1ListEvaluationJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsEvaluationJobsPatch

Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsEvaluationJobsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1EvaluationJob;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1Attempt;
use \OpenAPI\OpenAPI\Models\Shared\GoogleRpcStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1EvaluationJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1BoundingPolyConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1EvaluationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1ImageClassificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1InputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1BigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1ClassificationMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1TextMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1TextClassificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1SentimentConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsEvaluationJobsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsEvaluationJobsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatalabelingV1beta1EvaluationJob = new GoogleCloudDatalabelingV1beta1EvaluationJob();
    $request->googleCloudDatalabelingV1beta1EvaluationJob->annotationSpecSet = 'aspernatur';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->attempts = [
        new GoogleCloudDatalabelingV1beta1Attempt(),
    ];
    $request->googleCloudDatalabelingV1beta1EvaluationJob->createTime = 'amet';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->description = 'optio';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig = new GoogleCloudDatalabelingV1beta1EvaluationJobConfig();
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->bigqueryImportKeys = [
        'ad' => 'saepe',
        'suscipit' => 'deserunt',
        'provident' => 'minima',
        'repellendus' => 'totam',
    ];
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->boundingPolyConfig = new GoogleCloudDatalabelingV1beta1BoundingPolyConfig();
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->boundingPolyConfig->annotationSpecSet = 'similique';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->boundingPolyConfig->instructionMessage = 'alias';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->evaluationConfig = new GoogleCloudDatalabelingV1beta1EvaluationConfig();
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->evaluationConfig->boundingBoxEvaluationOptions = new GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions();
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->evaluationConfig->boundingBoxEvaluationOptions->iouThreshold = 8726.51;
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->evaluationJobAlertConfig = new GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig();
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->evaluationJobAlertConfig->email = 'Dorcas_Kautzer18@gmail.com';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->evaluationJobAlertConfig->minAcceptableMeanAveragePrecision = 6798.8;
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->exampleCount = 952792;
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->exampleSamplePercentage = 4561.3;
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->humanAnnotationConfig = new GoogleCloudDatalabelingV1beta1HumanAnnotationConfig();
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->humanAnnotationConfig->annotatedDatasetDescription = 'harum';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->humanAnnotationConfig->annotatedDatasetDisplayName = 'iusto';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->humanAnnotationConfig->contributorEmails = [
        'quisquam',
    ];
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->humanAnnotationConfig->instruction = 'tenetur';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->humanAnnotationConfig->labelGroup = 'amet';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->humanAnnotationConfig->languageCode = 'tempore';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->humanAnnotationConfig->questionDuration = 'accusamus';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->humanAnnotationConfig->replicaCount = 253941;
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->humanAnnotationConfig->userEmailAddress = 'enim';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->imageClassificationConfig = new GoogleCloudDatalabelingV1beta1ImageClassificationConfig();
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->imageClassificationConfig->allowMultiLabel = false;
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->imageClassificationConfig->annotationSpecSet = 'dolorem';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->imageClassificationConfig->answerAggregationType = GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum::NO_AGGREGATION;
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->inputConfig = new GoogleCloudDatalabelingV1beta1InputConfig();
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->inputConfig->annotationType = GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum::VIDEO_SHOTS_CLASSIFICATION_ANNOTATION;
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->inputConfig->bigquerySource = new GoogleCloudDatalabelingV1beta1BigQuerySource();
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->inputConfig->bigquerySource->inputUri = 'nihil';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->inputConfig->classificationMetadata = new GoogleCloudDatalabelingV1beta1ClassificationMetadata();
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->inputConfig->classificationMetadata->isMultiLabel = false;
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->inputConfig->dataType = GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum::DATA_TYPE_UNSPECIFIED;
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->inputConfig->gcsSource = new GoogleCloudDatalabelingV1beta1GcsSource();
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->inputConfig->gcsSource->inputUri = 'expedita';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->inputConfig->gcsSource->mimeType = 'neque';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->inputConfig->textMetadata = new GoogleCloudDatalabelingV1beta1TextMetadata();
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->inputConfig->textMetadata->languageCode = 'sed';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->textClassificationConfig = new GoogleCloudDatalabelingV1beta1TextClassificationConfig();
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->textClassificationConfig->allowMultiLabel = false;
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->textClassificationConfig->annotationSpecSet = 'vel';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->textClassificationConfig->sentimentConfig = new GoogleCloudDatalabelingV1beta1SentimentConfig();
    $request->googleCloudDatalabelingV1beta1EvaluationJob->evaluationJobConfig->textClassificationConfig->sentimentConfig->enableLabelSentimentSelection = false;
    $request->googleCloudDatalabelingV1beta1EvaluationJob->labelMissingGroundTruth = false;
    $request->googleCloudDatalabelingV1beta1EvaluationJob->modelVersion = 'libero';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->name = 'Joanna Kohler';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->schedule = 'qui';
    $request->googleCloudDatalabelingV1beta1EvaluationJob->state = GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum::RUNNING;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'soluta';
    $request->fields = 'dicta';
    $request->key = 'laborum';
    $request->name = 'Randall Cole';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->updateMask = 'quam';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new DatalabelingProjectsEvaluationJobsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsEvaluationJobsPatch($request, $requestSecurity);

    if ($response->googleCloudDatalabelingV1beta1EvaluationJob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsEvaluationJobsPause

Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsEvaluationJobsPauseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsEvaluationJobsPauseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsEvaluationJobsPauseRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'fugit' => 'magni',
    ];
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ullam';
    $request->fields = 'nam';
    $request->key = 'hic';
    $request->name = 'Erma Rogahn PhD';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new DatalabelingProjectsEvaluationJobsPauseSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsEvaluationJobsPause($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsEvaluationJobsResume

Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsEvaluationJobsResumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsEvaluationJobsResumeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsEvaluationJobsResumeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'aperiam' => 'delectus',
        'dolorem' => 'dolore',
        'labore' => 'adipisci',
    ];
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quae';
    $request->fields = 'aut';
    $request->key = 'quas';
    $request->name = 'William Ortiz';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ut';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new DatalabelingProjectsEvaluationJobsResumeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsEvaluationJobsResume($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsEvaluationsSearch

Searches evaluations within a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsEvaluationsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsEvaluationsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsEvaluationsSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odio';
    $request->fields = 'occaecati';
    $request->filter = 'voluptatibus';
    $request->key = 'quisquam';
    $request->oauthToken = 'vero';
    $request->pageSize = 606476;
    $request->pageToken = 'quis';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'consectetur';

    $requestSecurity = new DatalabelingProjectsEvaluationsSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsEvaluationsSearch($request, $requestSecurity);

    if ($response->googleCloudDatalabelingV1beta1SearchEvaluationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsInstructionsCreate

Creates an instruction for how data should be labeled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsInstructionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1CreateInstructionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1Instruction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1CsvInstruction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1PdfInstruction;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsInstructionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsInstructionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatalabelingV1beta1CreateInstructionRequest = new GoogleCloudDatalabelingV1beta1CreateInstructionRequest();
    $request->googleCloudDatalabelingV1beta1CreateInstructionRequest->instruction = new GoogleCloudDatalabelingV1beta1Instruction();
    $request->googleCloudDatalabelingV1beta1CreateInstructionRequest->instruction->blockingResources = [
        'dignissimos',
        'hic',
        'distinctio',
        'quod',
    ];
    $request->googleCloudDatalabelingV1beta1CreateInstructionRequest->instruction->createTime = 'odio';
    $request->googleCloudDatalabelingV1beta1CreateInstructionRequest->instruction->csvInstruction = new GoogleCloudDatalabelingV1beta1CsvInstruction();
    $request->googleCloudDatalabelingV1beta1CreateInstructionRequest->instruction->csvInstruction->gcsFileUri = 'similique';
    $request->googleCloudDatalabelingV1beta1CreateInstructionRequest->instruction->dataType = GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum::TEXT;
    $request->googleCloudDatalabelingV1beta1CreateInstructionRequest->instruction->description = 'vero';
    $request->googleCloudDatalabelingV1beta1CreateInstructionRequest->instruction->displayName = 'ducimus';
    $request->googleCloudDatalabelingV1beta1CreateInstructionRequest->instruction->name = 'Rosemarie Stanton';
    $request->googleCloudDatalabelingV1beta1CreateInstructionRequest->instruction->pdfInstruction = new GoogleCloudDatalabelingV1beta1PdfInstruction();
    $request->googleCloudDatalabelingV1beta1CreateInstructionRequest->instruction->pdfInstruction->gcsFileUri = 'impedit';
    $request->googleCloudDatalabelingV1beta1CreateInstructionRequest->instruction->updateTime = 'aut';
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nulla';
    $request->fields = 'fugit';
    $request->key = 'porro';
    $request->oauthToken = 'maiores';
    $request->parent = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'ducimus';

    $requestSecurity = new DatalabelingProjectsInstructionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsInstructionsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsInstructionsList

Lists instructions for a project. Pagination is supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsInstructionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsInstructionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsInstructionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->fields = 'ea';
    $request->filter = 'aspernatur';
    $request->key = 'vel';
    $request->oauthToken = 'possimus';
    $request->pageSize = 297842;
    $request->pageToken = 'ratione';
    $request->parent = 'ex';
    $request->prettyPrint = false;
    $request->quotaUser = 'laudantium';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new DatalabelingProjectsInstructionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsInstructionsList($request, $requestSecurity);

    if ($response->googleCloudDatalabelingV1beta1ListInstructionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nulla';
    $request->fields = 'excepturi';
    $request->key = 'voluptatibus';
    $request->name = 'Dixie Schamberger';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new DatalabelingProjectsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsOperationsCancel($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quo';
    $request->fields = 'consectetur';
    $request->key = 'recusandae';
    $request->name = 'Cathy Becker';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'impedit';

    $requestSecurity = new DatalabelingProjectsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsOperationsDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'inventore';
    $request->fields = 'non';
    $request->filter = 'et';
    $request->key = 'dolorum';
    $request->name = 'Clark Franecki';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'quas';
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'nulla';

    $requestSecurity = new DatalabelingProjectsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsOperationsGet($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalabelingProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'libero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'numquam';
    $request->filter = 'explicabo';
    $request->key = 'provident';
    $request->name = 'Minnie Gutkowski';
    $request->oauthToken = 'esse';
    $request->pageSize = 456141;
    $request->pageToken = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new DatalabelingProjectsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
