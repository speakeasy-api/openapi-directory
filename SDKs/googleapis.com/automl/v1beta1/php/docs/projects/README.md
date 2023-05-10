# projects

### Available Operations

* [automlProjectsLocationsDatasetsCreate](#automlprojectslocationsdatasetscreate) - Creates a dataset.
* [automlProjectsLocationsDatasetsExportData](#automlprojectslocationsdatasetsexportdata) - Exports dataset's data to the provided output location. Returns an empty response in the response field when it completes.
* [automlProjectsLocationsDatasetsImportData](#automlprojectslocationsdatasetsimportdata) - Imports data into a dataset. For Tables this method can only be called on an empty Dataset. For Tables: * A schema_inference_version parameter must be explicitly set. Returns an empty response in the response field when it completes.
* [automlProjectsLocationsDatasetsList](#automlprojectslocationsdatasetslist) - Lists datasets in a project.
* [automlProjectsLocationsDatasetsTableSpecsColumnSpecsList](#automlprojectslocationsdatasetstablespecscolumnspecslist) - Lists column specs in a table spec.
* [automlProjectsLocationsDatasetsTableSpecsColumnSpecsPatch](#automlprojectslocationsdatasetstablespecscolumnspecspatch) - Updates a column spec.
* [automlProjectsLocationsDatasetsTableSpecsList](#automlprojectslocationsdatasetstablespecslist) - Lists table specs in a dataset.
* [automlProjectsLocationsList](#automlprojectslocationslist) - Lists information about the supported locations for this service.
* [automlProjectsLocationsModelsBatchPredict](#automlprojectslocationsmodelsbatchpredict) - Perform a batch prediction. Unlike the online Predict, batch prediction result won't be immediately available in the response. Instead, a long running operation object is returned. User can poll the operation result via GetOperation method. Once the operation is done, BatchPredictResult is returned in the response field. Available for following ML problems: * Image Classification * Image Object Detection * Video Classification * Video Object Tracking * Text Extraction * Tables
* [automlProjectsLocationsModelsCreate](#automlprojectslocationsmodelscreate) - Creates a model. Returns a Model in the response field when it completes. When you create a model, several model evaluations are created for it: a global evaluation, and one evaluation for each annotation spec.
* [automlProjectsLocationsModelsDeploy](#automlprojectslocationsmodelsdeploy) - Deploys a model. If a model is already deployed, deploying it with the same parameters has no effect. Deploying with different parametrs (as e.g. changing node_number) will reset the deployment state without pausing the model's availability. Only applicable for Text Classification, Image Object Detection , Tables, and Image Segmentation; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.
* [automlProjectsLocationsModelsExport](#automlprojectslocationsmodelsexport) - Exports a trained, "export-able", model to a user specified Google Cloud Storage location. A model is considered export-able if and only if it has an export format defined for it in ModelExportOutputConfig. Returns an empty response in the response field when it completes.
* [automlProjectsLocationsModelsExportEvaluatedExamples](#automlprojectslocationsmodelsexportevaluatedexamples) - Exports examples on which the model was evaluated (i.e. which were in the TEST set of the dataset the model was created from), together with their ground truth annotations and the annotations created (predicted) by the model. The examples, ground truth and predictions are exported in the state they were at the moment the model was evaluated. This export is available only for 30 days since the model evaluation is created. Currently only available for Tables. Returns an empty response in the response field when it completes.
* [automlProjectsLocationsModelsGetIamPolicy](#automlprojectslocationsmodelsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [automlProjectsLocationsModelsList](#automlprojectslocationsmodelslist) - Lists models.
* [automlProjectsLocationsModelsModelEvaluationsList](#automlprojectslocationsmodelsmodelevaluationslist) - Lists model evaluations.
* [automlProjectsLocationsModelsPredict](#automlprojectslocationsmodelspredict) - Perform an online prediction. The prediction result will be directly returned in the response. Available for following ML problems, and their expected request payloads: * Image Classification - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Image Object Detection - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Text Classification - TextSnippet, content up to 60,000 characters, UTF-8 encoded. * Text Extraction - TextSnippet, content up to 30,000 characters, UTF-8 NFC encoded. * Translation - TextSnippet, content up to 25,000 characters, UTF-8 encoded. * Tables - Row, with column values matching the columns of the model, up to 5MB. Not available for FORECASTING prediction_type. * Text Sentiment - TextSnippet, content up 500 characters, UTF-8 encoded.
* [automlProjectsLocationsModelsSetIamPolicy](#automlprojectslocationsmodelssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [automlProjectsLocationsModelsUndeploy](#automlprojectslocationsmodelsundeploy) - Undeploys a model. If the model is not deployed this method has no effect. Only applicable for Text Classification, Image Object Detection and Tables; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.
* [automlProjectsLocationsOperationsCancel](#automlprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [automlProjectsLocationsOperationsDelete](#automlprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [automlProjectsLocationsOperationsGet](#automlprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [automlProjectsLocationsOperationsList](#automlprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [automlProjectsLocationsOperationsWait](#automlprojectslocationsoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [automlProjectsLocationsTestIamPermissions](#automlprojectslocationstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## automlProjectsLocationsDatasetsCreate

Creates a dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsDatasetsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Dataset;
use \OpenAPI\OpenAPI\Models\Shared\ImageClassificationDatasetMetadata;
use \OpenAPI\OpenAPI\Models\Shared\ImageClassificationDatasetMetadataClassificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TablesDatasetMetadata;
use \OpenAPI\OpenAPI\Models\Shared\CorrelationStats;
use \OpenAPI\OpenAPI\Models\Shared\TextClassificationDatasetMetadata;
use \OpenAPI\OpenAPI\Models\Shared\TextClassificationDatasetMetadataClassificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TextSentimentDatasetMetadata;
use \OpenAPI\OpenAPI\Models\Shared\TranslationDatasetMetadata;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsDatasetsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsDatasetsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->dataset = new Dataset();
    $request->dataset->createTime = 'excepturi';
    $request->dataset->description = 'aspernatur';
    $request->dataset->displayName = 'perferendis';
    $request->dataset->etag = 'ad';
    $request->dataset->exampleCount = 617636;
    $request->dataset->imageClassificationDatasetMetadata = new ImageClassificationDatasetMetadata();
    $request->dataset->imageClassificationDatasetMetadata->classificationType = ImageClassificationDatasetMetadataClassificationTypeEnum::CLASSIFICATION_TYPE_UNSPECIFIED;
    $request->dataset->imageObjectDetectionDatasetMetadata = [
        'dolor' => 'natus',
        'laboriosam' => 'hic',
        'saepe' => 'fuga',
    ];
    $request->dataset->name = 'Stacy Moore';
    $request->dataset->tablesDatasetMetadata = new TablesDatasetMetadata();
    $request->dataset->tablesDatasetMetadata->mlUseColumnSpecId = 'quidem';
    $request->dataset->tablesDatasetMetadata->primaryTableSpecId = 'architecto';
    $request->dataset->tablesDatasetMetadata->statsUpdateTime = 'ipsa';
    $request->dataset->tablesDatasetMetadata->targetColumnCorrelations = [
        'est' => new CorrelationStats(),
        'mollitia' => new CorrelationStats(),
        'laborum' => new CorrelationStats(),
        'dolores' => new CorrelationStats(),
    ];
    $request->dataset->tablesDatasetMetadata->targetColumnSpecId = 'dolorem';
    $request->dataset->tablesDatasetMetadata->weightColumnSpecId = 'corporis';
    $request->dataset->textClassificationDatasetMetadata = new TextClassificationDatasetMetadata();
    $request->dataset->textClassificationDatasetMetadata->classificationType = TextClassificationDatasetMetadataClassificationTypeEnum::CLASSIFICATION_TYPE_UNSPECIFIED;
    $request->dataset->textExtractionDatasetMetadata = [
        'enim' => 'omnis',
        'nemo' => 'minima',
        'excepturi' => 'accusantium',
        'iure' => 'culpa',
    ];
    $request->dataset->textSentimentDatasetMetadata = new TextSentimentDatasetMetadata();
    $request->dataset->textSentimentDatasetMetadata->sentimentMax = 988374;
    $request->dataset->translationDatasetMetadata = new TranslationDatasetMetadata();
    $request->dataset->translationDatasetMetadata->sourceLanguageCode = 'sapiente';
    $request->dataset->translationDatasetMetadata->targetLanguageCode = 'architecto';
    $request->dataset->videoClassificationDatasetMetadata = [
        'dolorem' => 'culpa',
        'consequuntur' => 'repellat',
        'mollitia' => 'occaecati',
    ];
    $request->dataset->videoObjectTrackingDatasetMetadata = [
        'commodi' => 'quam',
        'molestiae' => 'velit',
    ];
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'vitae';
    $request->key = 'laborum';
    $request->oauthToken = 'animi';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'sequi';

    $requestSecurity = new AutomlProjectsLocationsDatasetsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsDatasetsCreate($request, $requestSecurity);

    if ($response->dataset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsDatasetsExportData

Exports dataset's data to the provided output location. Returns an empty response in the response field when it completes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsDatasetsExportDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExportDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\OutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryDestination;
use \OpenAPI\OpenAPI\Models\Shared\GcsDestination;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsDatasetsExportDataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsDatasetsExportDataRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->exportDataRequest = new ExportDataRequest();
    $request->exportDataRequest->outputConfig = new OutputConfig();
    $request->exportDataRequest->outputConfig->bigqueryDestination = new BigQueryDestination();
    $request->exportDataRequest->outputConfig->bigqueryDestination->outputUri = 'ipsam';
    $request->exportDataRequest->outputConfig->gcsDestination = new GcsDestination();
    $request->exportDataRequest->outputConfig->gcsDestination->outputUriPrefix = 'id';
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->fields = 'error';
    $request->key = 'temporibus';
    $request->name = 'Ryan Witting';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new AutomlProjectsLocationsDatasetsExportDataSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsDatasetsExportData($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsDatasetsImportData

Imports data into a dataset. For Tables this method can only be called on an empty Dataset. For Tables: * A schema_inference_version parameter must be explicitly set. Returns an empty response in the response field when it completes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsDatasetsImportDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImportDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputConfig;
use \OpenAPI\OpenAPI\Models\Shared\BigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsDatasetsImportDataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsDatasetsImportDataRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->importDataRequest = new ImportDataRequest();
    $request->importDataRequest->inputConfig = new InputConfig();
    $request->importDataRequest->inputConfig->bigquerySource = new BigQuerySource();
    $request->importDataRequest->inputConfig->bigquerySource->inputUri = 'voluptate';
    $request->importDataRequest->inputConfig->gcsSource = new GcsSource();
    $request->importDataRequest->inputConfig->gcsSource->inputUris = [
        'perferendis',
        'doloremque',
        'reprehenderit',
    ];
    $request->importDataRequest->inputConfig->params = [
        'maiores' => 'dicta',
        'corporis' => 'dolore',
    ];
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->name = 'Elvira Bergnaum';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new AutomlProjectsLocationsDatasetsImportDataSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsDatasetsImportData($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsDatasetsList

Lists datasets in a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsDatasetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsDatasetsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsDatasetsListRequest();
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

    $requestSecurity = new AutomlProjectsLocationsDatasetsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsDatasetsList($request, $requestSecurity);

    if ($response->listDatasetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsDatasetsTableSpecsColumnSpecsList

Lists column specs in a table spec.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fieldMask = 'modi';
    $request->fields = 'qui';
    $request->filter = 'aliquid';
    $request->key = 'cupiditate';
    $request->oauthToken = 'quos';
    $request->pageSize = 20107;
    $request->pageToken = 'magni';
    $request->parent = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsDatasetsTableSpecsColumnSpecsList($request, $requestSecurity);

    if ($response->listColumnSpecsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsDatasetsTableSpecsColumnSpecsPatch

Updates a column spec.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ColumnSpec;
use \OpenAPI\OpenAPI\Models\Shared\DataStats;
use \OpenAPI\OpenAPI\Models\Shared\ArrayStats;
use \OpenAPI\OpenAPI\Models\Shared\CategoryStats;
use \OpenAPI\OpenAPI\Models\Shared\SingleCategoryStats;
use \OpenAPI\OpenAPI\Models\Shared\Float64Stats;
use \OpenAPI\OpenAPI\Models\Shared\HistogramBucket;
use \OpenAPI\OpenAPI\Models\Shared\StringStats;
use \OpenAPI\OpenAPI\Models\Shared\UnigramStats;
use \OpenAPI\OpenAPI\Models\Shared\StructStats;
use \OpenAPI\OpenAPI\Models\Shared\TimestampStats;
use \OpenAPI\OpenAPI\Models\Shared\GranularStats;
use \OpenAPI\OpenAPI\Models\Shared\DataType;
use \OpenAPI\OpenAPI\Models\Shared\StructType;
use \OpenAPI\OpenAPI\Models\Shared\DataTypeTypeCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CorrelatedColumn;
use \OpenAPI\OpenAPI\Models\Shared\CorrelationStats;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->columnSpec = new ColumnSpec();
    $request->columnSpec->dataStats = new DataStats();
    $request->columnSpec->dataStats->arrayStats = new ArrayStats();
    $request->columnSpec->dataStats->arrayStats->memberStats = new DataStats();
    $request->columnSpec->dataStats->categoryStats = new CategoryStats();
    $request->columnSpec->dataStats->categoryStats->topCategoryStats = [
        new SingleCategoryStats(),
        new SingleCategoryStats(),
        new SingleCategoryStats(),
    ];
    $request->columnSpec->dataStats->distinctValueCount = 'tempora';
    $request->columnSpec->dataStats->float64Stats = new Float64Stats();
    $request->columnSpec->dataStats->float64Stats->histogramBuckets = [
        new HistogramBucket(),
        new HistogramBucket(),
        new HistogramBucket(),
    ];
    $request->columnSpec->dataStats->float64Stats->mean = 7351.94;
    $request->columnSpec->dataStats->float64Stats->quantiles = [
        9621.89,
        4332.88,
    ];
    $request->columnSpec->dataStats->float64Stats->standardDeviation = 2487.53;
    $request->columnSpec->dataStats->nullValueCount = 'eligendi';
    $request->columnSpec->dataStats->stringStats = new StringStats();
    $request->columnSpec->dataStats->stringStats->topUnigramStats = [
        new UnigramStats(),
        new UnigramStats(),
        new UnigramStats(),
    ];
    $request->columnSpec->dataStats->structStats = new StructStats();
    $request->columnSpec->dataStats->structStats->fieldStats = [
        'provident' => new DataStats(),
        'necessitatibus' => new DataStats(),
    ];
    $request->columnSpec->dataStats->timestampStats = new TimestampStats();
    $request->columnSpec->dataStats->timestampStats->granularStats = [
        'officia' => new GranularStats(),
        'dolor' => new GranularStats(),
        'debitis' => new GranularStats(),
    ];
    $request->columnSpec->dataStats->validValueCount = 'a';
    $request->columnSpec->dataType = new DataType();
    $request->columnSpec->dataType->listElementType = new DataType();
    $request->columnSpec->dataType->nullable = false;
    $request->columnSpec->dataType->structType = new StructType();
    $request->columnSpec->dataType->structType->fields = [
        'in' => new DataType(),
        'in' => new DataType(),
        'illum' => new DataType(),
    ];
    $request->columnSpec->dataType->timeFormat = 'maiores';
    $request->columnSpec->dataType->typeCode = DataTypeTypeCodeEnum::ARRAY;
    $request->columnSpec->displayName = 'dicta';
    $request->columnSpec->etag = 'magnam';
    $request->columnSpec->name = 'Irving Jenkins';
    $request->columnSpec->topCorrelatedColumns = [
        new CorrelatedColumn(),
        new CorrelatedColumn(),
        new CorrelatedColumn(),
        new CorrelatedColumn(),
    ];
    $request->accessToken = 'non';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->key = 'delectus';
    $request->name = 'Rene Reinger';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->updateMask = 'amet';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsDatasetsTableSpecsColumnSpecsPatch($request, $requestSecurity);

    if ($response->columnSpec !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsDatasetsTableSpecsList

Lists table specs in a dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsDatasetsTableSpecsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsDatasetsTableSpecsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsDatasetsTableSpecsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fieldMask = 'perferendis';
    $request->fields = 'nihil';
    $request->filter = 'magnam';
    $request->key = 'distinctio';
    $request->oauthToken = 'id';
    $request->pageSize = 287991;
    $request->pageToken = 'labore';
    $request->parent = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new AutomlProjectsLocationsDatasetsTableSpecsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsDatasetsTableSpecsList($request, $requestSecurity);

    if ($response->listTableSpecsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magnam';
    $request->fields = 'et';
    $request->filter = 'excepturi';
    $request->key = 'ullam';
    $request->name = 'Miss Julian Marvin';
    $request->oauthToken = 'mollitia';
    $request->pageSize = 320997;
    $request->pageToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new AutomlProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsModelsBatchPredict

Perform a batch prediction. Unlike the online Predict, batch prediction result won't be immediately available in the response. Instead, a long running operation object is returned. User can poll the operation result via GetOperation method. Once the operation is done, BatchPredictResult is returned in the response field. Available for following ML problems: * Image Classification * Image Object Detection * Video Classification * Video Object Tracking * Text Extraction * Tables

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsBatchPredictRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchPredictRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchPredictInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\BigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\BatchPredictOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryDestination;
use \OpenAPI\OpenAPI\Models\Shared\GcsDestination;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsBatchPredictSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsModelsBatchPredictRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->batchPredictRequest = new BatchPredictRequest();
    $request->batchPredictRequest->inputConfig = new BatchPredictInputConfig();
    $request->batchPredictRequest->inputConfig->bigquerySource = new BigQuerySource();
    $request->batchPredictRequest->inputConfig->bigquerySource->inputUri = 'quasi';
    $request->batchPredictRequest->inputConfig->gcsSource = new GcsSource();
    $request->batchPredictRequest->inputConfig->gcsSource->inputUris = [
        'doloribus',
        'debitis',
    ];
    $request->batchPredictRequest->outputConfig = new BatchPredictOutputConfig();
    $request->batchPredictRequest->outputConfig->bigqueryDestination = new BigQueryDestination();
    $request->batchPredictRequest->outputConfig->bigqueryDestination->outputUri = 'eius';
    $request->batchPredictRequest->outputConfig->gcsDestination = new GcsDestination();
    $request->batchPredictRequest->outputConfig->gcsDestination->outputUriPrefix = 'maxime';
    $request->batchPredictRequest->params = [
        'facilis' => 'in',
        'architecto' => 'architecto',
        'repudiandae' => 'ullam',
    ];
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellat';
    $request->fields = 'quibusdam';
    $request->key = 'sed';
    $request->name = 'Al Bashirian';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new AutomlProjectsLocationsModelsBatchPredictSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsModelsBatchPredict($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsModelsCreate

Creates a model. Returns a Model in the response field when it completes. When you create a model, several model evaluations are created for it: a global evaluation, and one evaluation for each annotation spec.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelInput;
use \OpenAPI\OpenAPI\Models\Shared\ModelDeploymentStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageClassificationModelMetadata;
use \OpenAPI\OpenAPI\Models\Shared\ImageObjectDetectionModelMetadata;
use \OpenAPI\OpenAPI\Models\Shared\TablesModelMetadata;
use \OpenAPI\OpenAPI\Models\Shared\ColumnSpec;
use \OpenAPI\OpenAPI\Models\Shared\DataStats;
use \OpenAPI\OpenAPI\Models\Shared\ArrayStats;
use \OpenAPI\OpenAPI\Models\Shared\CategoryStats;
use \OpenAPI\OpenAPI\Models\Shared\SingleCategoryStats;
use \OpenAPI\OpenAPI\Models\Shared\Float64Stats;
use \OpenAPI\OpenAPI\Models\Shared\HistogramBucket;
use \OpenAPI\OpenAPI\Models\Shared\StringStats;
use \OpenAPI\OpenAPI\Models\Shared\UnigramStats;
use \OpenAPI\OpenAPI\Models\Shared\StructStats;
use \OpenAPI\OpenAPI\Models\Shared\TimestampStats;
use \OpenAPI\OpenAPI\Models\Shared\GranularStats;
use \OpenAPI\OpenAPI\Models\Shared\DataType;
use \OpenAPI\OpenAPI\Models\Shared\StructType;
use \OpenAPI\OpenAPI\Models\Shared\DataTypeTypeCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CorrelatedColumn;
use \OpenAPI\OpenAPI\Models\Shared\CorrelationStats;
use \OpenAPI\OpenAPI\Models\Shared\TablesModelColumnInfo;
use \OpenAPI\OpenAPI\Models\Shared\TextClassificationModelMetadata;
use \OpenAPI\OpenAPI\Models\Shared\TextClassificationModelMetadataClassificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TextExtractionModelMetadata;
use \OpenAPI\OpenAPI\Models\Shared\TranslationModelMetadata;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsModelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->modelInput = new ModelInput();
    $request->modelInput->createTime = 'pariatur';
    $request->modelInput->datasetId = 'maxime';
    $request->modelInput->deploymentState = ModelDeploymentStateEnum::DEPLOYED;
    $request->modelInput->displayName = 'excepturi';
    $request->modelInput->imageClassificationModelMetadata = new ImageClassificationModelMetadata();
    $request->modelInput->imageClassificationModelMetadata->baseModelId = 'odit';
    $request->modelInput->imageClassificationModelMetadata->modelType = 'ea';
    $request->modelInput->imageClassificationModelMetadata->nodeCount = 'accusantium';
    $request->modelInput->imageClassificationModelMetadata->nodeQps = 691.67;
    $request->modelInput->imageClassificationModelMetadata->stopReason = 'maiores';
    $request->modelInput->imageClassificationModelMetadata->trainBudget = 'quidem';
    $request->modelInput->imageClassificationModelMetadata->trainCost = 'ipsam';
    $request->modelInput->imageObjectDetectionModelMetadata = new ImageObjectDetectionModelMetadata();
    $request->modelInput->imageObjectDetectionModelMetadata->modelType = 'voluptate';
    $request->modelInput->imageObjectDetectionModelMetadata->nodeCount = 'autem';
    $request->modelInput->imageObjectDetectionModelMetadata->nodeQps = 7220.56;
    $request->modelInput->imageObjectDetectionModelMetadata->stopReason = 'eaque';
    $request->modelInput->imageObjectDetectionModelMetadata->trainBudgetMilliNodeHours = 'pariatur';
    $request->modelInput->imageObjectDetectionModelMetadata->trainCostMilliNodeHours = 'nemo';
    $request->modelInput->name = 'Joseph Steuber DDS';
    $request->modelInput->tablesModelMetadata = new TablesModelMetadata();
    $request->modelInput->tablesModelMetadata->disableEarlyStopping = false;
    $request->modelInput->tablesModelMetadata->inputFeatureColumnSpecs = [
        new ColumnSpec(),
        new ColumnSpec(),
    ];
    $request->modelInput->tablesModelMetadata->optimizationObjective = 'hic';
    $request->modelInput->tablesModelMetadata->optimizationObjectivePrecisionValue = 7299.91;
    $request->modelInput->tablesModelMetadata->optimizationObjectiveRecallValue = 7499.99;
    $request->modelInput->tablesModelMetadata->tablesModelColumnInfo = [
        new TablesModelColumnInfo(),
    ];
    $request->modelInput->tablesModelMetadata->targetColumnSpec = new ColumnSpec();
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataStats = new DataStats();
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataStats->arrayStats = new ArrayStats();
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataStats->arrayStats->memberStats = new DataStats();
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataStats->categoryStats = new CategoryStats();
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataStats->categoryStats->topCategoryStats = [
        new SingleCategoryStats(),
        new SingleCategoryStats(),
    ];
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataStats->distinctValueCount = 'totam';
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataStats->float64Stats = new Float64Stats();
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataStats->float64Stats->histogramBuckets = [
        new HistogramBucket(),
        new HistogramBucket(),
    ];
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataStats->float64Stats->mean = 543.38;
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataStats->float64Stats->quantiles = [
        1999.96,
        1794.9,
    ];
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataStats->float64Stats->standardDeviation = 185.21;
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataStats->nullValueCount = 'dolores';
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataStats->stringStats = new StringStats();
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataStats->stringStats->topUnigramStats = [
        new UnigramStats(),
        new UnigramStats(),
        new UnigramStats(),
        new UnigramStats(),
    ];
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataStats->structStats = new StructStats();
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataStats->structStats->fieldStats = [
        'dolor' => new DataStats(),
        'vero' => new DataStats(),
    ];
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataStats->timestampStats = new TimestampStats();
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataStats->timestampStats->granularStats = [
        'hic' => new GranularStats(),
        'recusandae' => new GranularStats(),
    ];
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataStats->validValueCount = 'omnis';
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataType = new DataType();
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataType->listElementType = new DataType();
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataType->nullable = false;
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataType->structType = new StructType();
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataType->structType->fields = [
        'perspiciatis' => new DataType(),
        'voluptatem' => new DataType(),
        'porro' => new DataType(),
    ];
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataType->timeFormat = 'consequuntur';
    $request->modelInput->tablesModelMetadata->targetColumnSpec->dataType->typeCode = DataTypeTypeCodeEnum::STRING;
    $request->modelInput->tablesModelMetadata->targetColumnSpec->displayName = 'error';
    $request->modelInput->tablesModelMetadata->targetColumnSpec->etag = 'eaque';
    $request->modelInput->tablesModelMetadata->targetColumnSpec->name = 'Jean Ferry';
    $request->modelInput->tablesModelMetadata->targetColumnSpec->topCorrelatedColumns = [
        new CorrelatedColumn(),
        new CorrelatedColumn(),
    ];
    $request->modelInput->tablesModelMetadata->trainBudgetMilliNodeHours = 'iste';
    $request->modelInput->tablesModelMetadata->trainCostMilliNodeHours = 'dolorum';
    $request->modelInput->textClassificationModelMetadata = new TextClassificationModelMetadata();
    $request->modelInput->textClassificationModelMetadata->classificationType = TextClassificationModelMetadataClassificationTypeEnum::MULTICLASS;
    $request->modelInput->textExtractionModelMetadata = new TextExtractionModelMetadata();
    $request->modelInput->textExtractionModelMetadata->modelHint = 'pariatur';
    $request->modelInput->textSentimentModelMetadata = [
        'nobis' => 'libero',
        'delectus' => 'quaerat',
        'quos' => 'aliquid',
    ];
    $request->modelInput->translationModelMetadata = new TranslationModelMetadata();
    $request->modelInput->translationModelMetadata->baseModel = 'dolorem';
    $request->modelInput->translationModelMetadata->sourceLanguageCode = 'dolorem';
    $request->modelInput->translationModelMetadata->targetLanguageCode = 'dolor';
    $request->modelInput->updateTime = 'qui';
    $request->modelInput->videoClassificationModelMetadata = [
        'hic' => 'excepturi',
    ];
    $request->modelInput->videoObjectTrackingModelMetadata = [
        'voluptate' => 'dignissimos',
        'reiciendis' => 'amet',
        'dolorum' => 'numquam',
    ];
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'iure';
    $request->key = 'odio';
    $request->oauthToken = 'quaerat';
    $request->parent = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new AutomlProjectsLocationsModelsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsModelsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsModelsDeploy

Deploys a model. If a model is already deployed, deploying it with the same parameters has no effect. Deploying with different parametrs (as e.g. changing node_number) will reset the deployment state without pausing the model's availability. Only applicable for Text Classification, Image Object Detection , Tables, and Image Segmentation; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsDeployRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeployModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageClassificationModelDeploymentMetadata;
use \OpenAPI\OpenAPI\Models\Shared\ImageObjectDetectionModelDeploymentMetadata;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsDeploySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsModelsDeployRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->deployModelRequest = new DeployModelRequest();
    $request->deployModelRequest->imageClassificationModelDeploymentMetadata = new ImageClassificationModelDeploymentMetadata();
    $request->deployModelRequest->imageClassificationModelDeploymentMetadata->nodeCount = 'eos';
    $request->deployModelRequest->imageObjectDetectionModelDeploymentMetadata = new ImageObjectDetectionModelDeploymentMetadata();
    $request->deployModelRequest->imageObjectDetectionModelDeploymentMetadata->nodeCount = 'atque';
    $request->accessToken = 'sit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ab';
    $request->fields = 'soluta';
    $request->key = 'dolorum';
    $request->name = 'Colleen Pagac';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new AutomlProjectsLocationsModelsDeploySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsModelsDeploy($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsModelsExport

Exports a trained, "export-able", model to a user specified Google Cloud Storage location. A model is considered export-able if and only if it has an export format defined for it in ModelExportOutputConfig. Returns an empty response in the response field when it completes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExportModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModelExportOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcrDestination;
use \OpenAPI\OpenAPI\Models\Shared\GcsDestination;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsExportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsModelsExportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->exportModelRequest = new ExportModelRequest();
    $request->exportModelRequest->outputConfig = new ModelExportOutputConfig();
    $request->exportModelRequest->outputConfig->gcrDestination = new GcrDestination();
    $request->exportModelRequest->outputConfig->gcrDestination->outputUri = 'voluptate';
    $request->exportModelRequest->outputConfig->gcsDestination = new GcsDestination();
    $request->exportModelRequest->outputConfig->gcsDestination->outputUriPrefix = 'id';
    $request->exportModelRequest->outputConfig->modelFormat = 'saepe';
    $request->exportModelRequest->outputConfig->params = [
        'aspernatur' => 'perferendis',
        'amet' => 'optio',
    ];
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'suscipit';
    $request->key = 'deserunt';
    $request->name = 'Derek Sipes';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new AutomlProjectsLocationsModelsExportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsModelsExport($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsModelsExportEvaluatedExamples

Exports examples on which the model was evaluated (i.e. which were in the TEST set of the dataset the model was created from), together with their ground truth annotations and the annotations created (predicted) by the model. The examples, ground truth and predictions are exported in the state they were at the moment the model was evaluated. This export is available only for 30 days since the model evaluation is created. Currently only available for Tables. Returns an empty response in the response field when it completes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsExportEvaluatedExamplesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExportEvaluatedExamplesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportEvaluatedExamplesOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryDestination;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsExportEvaluatedExamplesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsModelsExportEvaluatedExamplesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->exportEvaluatedExamplesRequest = new ExportEvaluatedExamplesRequest();
    $request->exportEvaluatedExamplesRequest->outputConfig = new ExportEvaluatedExamplesOutputConfig();
    $request->exportEvaluatedExamplesRequest->outputConfig->bigqueryDestination = new BigQueryDestination();
    $request->exportEvaluatedExamplesRequest->outputConfig->bigqueryDestination->outputUri = 'quod';
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'a';
    $request->key = 'esse';
    $request->name = 'Tyrone Emard';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new AutomlProjectsLocationsModelsExportEvaluatedExamplesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsModelsExportEvaluatedExamples($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsModelsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsModelsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'nihil';
    $request->key = 'sit';
    $request->oauthToken = 'expedita';
    $request->optionsRequestedPolicyVersion = 207470;
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->resource = 'vel';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new AutomlProjectsLocationsModelsGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsModelsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsModelsList

Lists models.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsModelsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'qui';
    $request->filter = 'cupiditate';
    $request->key = 'maxime';
    $request->oauthToken = 'pariatur';
    $request->pageSize = 747080;
    $request->pageToken = 'dicta';
    $request->parent = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new AutomlProjectsLocationsModelsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsModelsList($request, $requestSecurity);

    if ($response->listModelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsModelsModelEvaluationsList

Lists model evaluations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsModelEvaluationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsModelEvaluationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsModelsModelEvaluationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquid';
    $request->fields = 'quam';
    $request->filter = 'molestias';
    $request->key = 'temporibus';
    $request->oauthToken = 'qui';
    $request->pageSize = 204865;
    $request->pageToken = 'fugit';
    $request->parent = 'magni';
    $request->prettyPrint = false;
    $request->quotaUser = 'odio';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'ullam';

    $requestSecurity = new AutomlProjectsLocationsModelsModelEvaluationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsModelsModelEvaluationsList($request, $requestSecurity);

    if ($response->listModelEvaluationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsModelsPredict

Perform an online prediction. The prediction result will be directly returned in the response. Available for following ML problems, and their expected request payloads: * Image Classification - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Image Object Detection - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Text Classification - TextSnippet, content up to 60,000 characters, UTF-8 encoded. * Text Extraction - TextSnippet, content up to 30,000 characters, UTF-8 NFC encoded. * Translation - TextSnippet, content up to 25,000 characters, UTF-8 encoded. * Tables - Row, with column values matching the columns of the model, up to 5MB. Not available for FORECASTING prediction_type. * Text Sentiment - TextSnippet, content up 500 characters, UTF-8 encoded.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsPredictRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PredictRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExamplePayload;
use \OpenAPI\OpenAPI\Models\Shared\Document;
use \OpenAPI\OpenAPI\Models\Shared\DocumentDimensions;
use \OpenAPI\OpenAPI\Models\Shared\DocumentDimensionsUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\TextSnippet;
use \OpenAPI\OpenAPI\Models\Shared\DocumentInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\Layout;
use \OpenAPI\OpenAPI\Models\Shared\BoundingPoly;
use \OpenAPI\OpenAPI\Models\Shared\NormalizedVertex;
use \OpenAPI\OpenAPI\Models\Shared\TextSegment;
use \OpenAPI\OpenAPI\Models\Shared\LayoutTextSegmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Image;
use \OpenAPI\OpenAPI\Models\Shared\InputConfig;
use \OpenAPI\OpenAPI\Models\Shared\BigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\Row;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsPredictSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsModelsPredictRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->predictRequest = new PredictRequest();
    $request->predictRequest->params = [
        'voluptatem' => 'cumque',
        'soluta' => 'nobis',
        'et' => 'saepe',
        'ipsum' => 'veritatis',
    ];
    $request->predictRequest->payload = new ExamplePayload();
    $request->predictRequest->payload->document = new Document();
    $request->predictRequest->payload->document->documentDimensions = new DocumentDimensions();
    $request->predictRequest->payload->document->documentDimensions->height = 7492.55;
    $request->predictRequest->payload->document->documentDimensions->unit = DocumentDimensionsUnitEnum::CENTIMETER;
    $request->predictRequest->payload->document->documentDimensions->width = 7316.94;
    $request->predictRequest->payload->document->documentText = new TextSnippet();
    $request->predictRequest->payload->document->documentText->content = 'cupiditate';
    $request->predictRequest->payload->document->documentText->contentUri = 'aperiam';
    $request->predictRequest->payload->document->documentText->mimeType = 'delectus';
    $request->predictRequest->payload->document->inputConfig = new DocumentInputConfig();
    $request->predictRequest->payload->document->inputConfig->gcsSource = new GcsSource();
    $request->predictRequest->payload->document->inputConfig->gcsSource->inputUris = [
        'dolore',
    ];
    $request->predictRequest->payload->document->layout = [
        new Layout(),
        new Layout(),
    ];
    $request->predictRequest->payload->document->pageCount = 240829;
    $request->predictRequest->payload->image = new Image();
    $request->predictRequest->payload->image->imageBytes = 'dolorum';
    $request->predictRequest->payload->image->inputConfig = new InputConfig();
    $request->predictRequest->payload->image->inputConfig->bigquerySource = new BigQuerySource();
    $request->predictRequest->payload->image->inputConfig->bigquerySource->inputUri = 'architecto';
    $request->predictRequest->payload->image->inputConfig->gcsSource = new GcsSource();
    $request->predictRequest->payload->image->inputConfig->gcsSource->inputUris = [
        'aut',
    ];
    $request->predictRequest->payload->image->inputConfig->params = [
        'itaque' => 'consequatur',
        'est' => 'repellendus',
        'porro' => 'doloribus',
    ];
    $request->predictRequest->payload->image->thumbnailUri = 'ut';
    $request->predictRequest->payload->row = new Row();
    $request->predictRequest->payload->row->columnSpecIds = [
        'cupiditate',
        'qui',
        'quae',
    ];
    $request->predictRequest->payload->row->values = [
        'odio',
        'occaecati',
        'voluptatibus',
    ];
    $request->predictRequest->payload->textSnippet = new TextSnippet();
    $request->predictRequest->payload->textSnippet->content = 'quisquam';
    $request->predictRequest->payload->textSnippet->contentUri = 'vero';
    $request->predictRequest->payload->textSnippet->mimeType = 'omnis';
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'voluptate';
    $request->key = 'consectetur';
    $request->name = 'Roman Kulas';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'odio';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new AutomlProjectsLocationsModelsPredictSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsModelsPredict($request, $requestSecurity);

    if ($response->predictResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsModelsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsModelsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'dolore';
    $request->setIamPolicyRequest->policy->version = 844550;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'impedit';
    $request->key = 'aut';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'exercitationem';
    $request->resource = 'nulla';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new AutomlProjectsLocationsModelsSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsModelsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsModelsUndeploy

Undeploys a model. If the model is not deployed this method has no effect. Only applicable for Text Classification, Image Object Detection and Tables; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsUndeployRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsModelsUndeploySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsModelsUndeployRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'iusto' => 'eligendi',
        'ducimus' => 'alias',
        'officia' => 'tempora',
        'ipsam' => 'ea',
    ];
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'possimus';
    $request->fields = 'magnam';
    $request->key = 'ratione';
    $request->name = 'Mabel Cartwright';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'ex';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new AutomlProjectsLocationsModelsUndeploySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsModelsUndeploy($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'sapiente' => 'quisquam',
        'saepe' => 'ea',
    ];
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veniam';
    $request->fields = 'aliquid';
    $request->key = 'inventore';
    $request->name = 'Rosemary Ryan';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'a';

    $requestSecurity = new AutomlProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'impedit';
    $request->key = 'aliquam';
    $request->name = 'Eloise Block MD';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new AutomlProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'assumenda';
    $request->fieldMask = 'nulla';
    $request->fields = 'voluptas';
    $request->key = 'libero';
    $request->name = 'Anita Gerhold';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'odio';

    $requestSecurity = new AutomlProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'fuga';
    $request->filter = 'reprehenderit';
    $request->key = 'quidem';
    $request->name = 'Bernard Kerluke';
    $request->oauthToken = 'eos';
    $request->pageSize = 509342;
    $request->pageToken = 'quisquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'id';

    $requestSecurity = new AutomlProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsOperationsWait

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsOperationsWaitRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WaitOperationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsOperationsWaitSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsOperationsWaitRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->waitOperationRequest = new WaitOperationRequest();
    $request->waitOperationRequest->timeout = 'neque';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quo';
    $request->fields = 'fuga';
    $request->key = 'eius';
    $request->name = 'Brittany Bernier II';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'sequi';

    $requestSecurity = new AutomlProjectsLocationsOperationsWaitSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsOperationsWait($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automlProjectsLocationsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'recusandae',
        'aperiam',
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->fields = 'inventore';
    $request->key = 'nihil';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->resource = 'aliquam';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new AutomlProjectsLocationsTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
