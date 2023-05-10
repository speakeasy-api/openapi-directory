# projects

### Available Operations

* [documentaiProjectsLocationsDocumentsBatchProcess](#documentaiprojectslocationsdocumentsbatchprocess) - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
* [documentaiProjectsLocationsDocumentsProcess](#documentaiprojectslocationsdocumentsprocess) - Processes a single document.
* [documentaiProjectsOperationsGet](#documentaiprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

## documentaiProjectsLocationsDocumentsBatchProcess

LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsDocumentsBatchProcessRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2ProcessDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2AutoMlParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2EntityExtractionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2FormExtractionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2KeyValuePairHint;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2InputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2OcrParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2OutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2GcsDestination;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2TableExtractionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2TableBoundHint;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2BoundingPoly;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2NormalizedVertex;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2Vertex;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsDocumentsBatchProcessSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsDocumentsBatchProcessRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDocumentaiV1beta2BatchProcessDocumentsRequest = new GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest();
    $request->googleCloudDocumentaiV1beta2BatchProcessDocumentsRequest->requests = [
        new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest(),
        new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest(),
    ];
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->parent = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new DocumentaiProjectsLocationsDocumentsBatchProcessSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsDocumentsBatchProcess($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsLocationsDocumentsProcess

Processes a single document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsDocumentsProcessRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2ProcessDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2AutoMlParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2EntityExtractionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2FormExtractionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2KeyValuePairHint;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2InputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2OcrParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2OutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2GcsDestination;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2TableExtractionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2TableBoundHint;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2BoundingPoly;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2NormalizedVertex;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2Vertex;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsDocumentsProcessSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsDocumentsProcessRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest = new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest();
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->automlParams = new GoogleCloudDocumentaiV1beta2AutoMlParams();
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->automlParams->model = 'nisi';
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->documentType = 'recusandae';
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->entityExtractionParams = new GoogleCloudDocumentaiV1beta2EntityExtractionParams();
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->entityExtractionParams->enabled = false;
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->entityExtractionParams->modelVersion = 'temporibus';
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->formExtractionParams = new GoogleCloudDocumentaiV1beta2FormExtractionParams();
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->formExtractionParams->enabled = false;
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->formExtractionParams->keyValuePairHints = [
        new GoogleCloudDocumentaiV1beta2KeyValuePairHint(),
    ];
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->formExtractionParams->modelVersion = 'quis';
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->inputConfig = new GoogleCloudDocumentaiV1beta2InputConfig();
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->inputConfig->contents = 'veritatis';
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->inputConfig->gcsSource = new GoogleCloudDocumentaiV1beta2GcsSource();
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->inputConfig->gcsSource->uri = 'https://agitated-friendship.net';
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->inputConfig->mimeType = 'sapiente';
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->ocrParams = new GoogleCloudDocumentaiV1beta2OcrParams();
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->ocrParams->languageHints = [
        'odit',
        'at',
        'at',
        'maiores',
    ];
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->outputConfig = new GoogleCloudDocumentaiV1beta2OutputConfig();
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->outputConfig->gcsDestination = new GoogleCloudDocumentaiV1beta2GcsDestination();
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->outputConfig->gcsDestination->uri = 'http://starchy-shorts.info';
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->outputConfig->pagesPerShard = 520478;
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->parent = 'porro';
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->tableExtractionParams = new GoogleCloudDocumentaiV1beta2TableExtractionParams();
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->tableExtractionParams->enabled = false;
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->tableExtractionParams->headerHints = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->tableExtractionParams->modelVersion = 'occaecati';
    $request->googleCloudDocumentaiV1beta2ProcessDocumentRequest->tableExtractionParams->tableBoundHints = [
        new GoogleCloudDocumentaiV1beta2TableBoundHint(),
    ];
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'optio';
    $request->fields = 'totam';
    $request->key = 'beatae';
    $request->oauthToken = 'commodi';
    $request->parent = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'impedit';

    $requestSecurity = new DocumentaiProjectsLocationsDocumentsProcessSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsDocumentsProcess($request, $requestSecurity);

    if ($response->googleCloudDocumentaiV1beta2Document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'aspernatur';
    $request->key = 'perferendis';
    $request->name = 'Faye Cormier';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'laboriosam';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new DocumentaiProjectsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsOperationsGet($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
