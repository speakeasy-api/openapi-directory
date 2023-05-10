# projects

### Available Operations

* [documentaiProjectsLocationsFetchProcessorTypes](#documentaiprojectslocationsfetchprocessortypes) - Fetches processor types. Note that we don't use ListProcessorTypes here, because it isn't paginated.
* [documentaiProjectsLocationsList](#documentaiprojectslocationslist) - Lists information about the supported locations for this service.
* [documentaiProjectsLocationsOperationsCancel](#documentaiprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [documentaiProjectsLocationsProcessorTypesList](#documentaiprojectslocationsprocessortypeslist) - Lists the processor types that exist.
* [documentaiProjectsLocationsProcessorsCreate](#documentaiprojectslocationsprocessorscreate) - Creates a processor from the ProcessorType provided. The processor will be at `ENABLED` state by default after its creation.
* [documentaiProjectsLocationsProcessorsDisable](#documentaiprojectslocationsprocessorsdisable) - Disables a processor
* [documentaiProjectsLocationsProcessorsEnable](#documentaiprojectslocationsprocessorsenable) - Enables a processor
* [documentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocument](#documentaiprojectslocationsprocessorshumanreviewconfigreviewdocument) - Send a document for Human Review. The input document should be processed by the specified processor.
* [documentaiProjectsLocationsProcessorsList](#documentaiprojectslocationsprocessorslist) - Lists all processors which belong to this project.
* [documentaiProjectsLocationsProcessorsProcessorVersionsBatchProcess](#documentaiprojectslocationsprocessorsprocessorversionsbatchprocess) - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
* [documentaiProjectsLocationsProcessorsProcessorVersionsDelete](#documentaiprojectslocationsprocessorsprocessorversionsdelete) - Deletes the processor version, all artifacts under the processor version will be deleted.
* [documentaiProjectsLocationsProcessorsProcessorVersionsDeploy](#documentaiprojectslocationsprocessorsprocessorversionsdeploy) - Deploys the processor version.
* [documentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersion](#documentaiprojectslocationsprocessorsprocessorversionsevaluateprocessorversion) - Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.
* [documentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsList](#documentaiprojectslocationsprocessorsprocessorversionsevaluationslist) - Retrieves a set of evaluations for a given processor version.
* [documentaiProjectsLocationsProcessorsProcessorVersionsList](#documentaiprojectslocationsprocessorsprocessorversionslist) - Lists all versions of a processor.
* [documentaiProjectsLocationsProcessorsProcessorVersionsProcess](#documentaiprojectslocationsprocessorsprocessorversionsprocess) - Processes a single document.
* [documentaiProjectsLocationsProcessorsProcessorVersionsTrain](#documentaiprojectslocationsprocessorsprocessorversionstrain) - Trains a new processor version. Operation metadata is returned as TrainProcessorVersionMetadata.
* [documentaiProjectsLocationsProcessorsProcessorVersionsUndeploy](#documentaiprojectslocationsprocessorsprocessorversionsundeploy) - Undeploys the processor version.
* [documentaiProjectsLocationsProcessorsSetDefaultProcessorVersion](#documentaiprojectslocationsprocessorssetdefaultprocessorversion) - Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.
* [documentaiProjectsOperationsGet](#documentaiprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

## documentaiProjectsLocationsFetchProcessorTypes

Fetches processor types. Note that we don't use ListProcessorTypes here, because it isn't paginated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsFetchProcessorTypesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsFetchProcessorTypesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsFetchProcessorTypesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'ipsa';
    $request->key = 'delectus';
    $request->oauthToken = 'tempora';
    $request->parent = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new DocumentaiProjectsLocationsFetchProcessorTypesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsFetchProcessorTypes($request, $requestSecurity);

    if ($response->googleCloudDocumentaiV1FetchProcessorTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'recusandae';
    $request->filter = 'temporibus';
    $request->key = 'ab';
    $request->name = 'Mrs. Marie O'Connell';
    $request->oauthToken = 'sapiente';
    $request->pageSize = 778157;
    $request->pageToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new DocumentaiProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsList($request, $requestSecurity);

    if ($response->googleCloudLocationListLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'totam';
    $request->key = 'porro';
    $request->name = 'Samuel Reichel';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'optio';

    $requestSecurity = new DocumentaiProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsLocationsProcessorTypesList

Lists the processor types that exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorTypesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorTypesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorTypesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'modi';
    $request->key = 'qui';
    $request->oauthToken = 'impedit';
    $request->pageSize = 736918;
    $request->pageToken = 'esse';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorTypesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorTypesList($request, $requestSecurity);

    if ($response->googleCloudDocumentaiV1ListProcessorTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsLocationsProcessorsCreate

Creates a processor from the ProcessorType provided. The processor will be at `ENABLED` state by default after its creation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1ProcessorInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDocumentaiV1ProcessorInput = new GoogleCloudDocumentaiV1ProcessorInput();
    $request->googleCloudDocumentaiV1ProcessorInput->createTime = 'natus';
    $request->googleCloudDocumentaiV1ProcessorInput->defaultProcessorVersion = 'sed';
    $request->googleCloudDocumentaiV1ProcessorInput->displayName = 'iste';
    $request->googleCloudDocumentaiV1ProcessorInput->kmsKeyName = 'dolor';
    $request->googleCloudDocumentaiV1ProcessorInput->type = 'natus';
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'fuga';
    $request->key = 'in';
    $request->oauthToken = 'corporis';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsCreate($request, $requestSecurity);

    if ($response->googleCloudDocumentaiV1Processor !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsLocationsProcessorsDisable

Disables a processor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsDisableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsDisableSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsDisableRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'reiciendis' => 'est',
    ];
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolores';
    $request->fields = 'dolorem';
    $request->key = 'corporis';
    $request->name = 'Della Halvorson';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsDisableSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsDisable($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsLocationsProcessorsEnable

Enables a processor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsEnableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsEnableSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsEnableRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'sapiente' => 'architecto',
        'mollitia' => 'dolorem',
        'culpa' => 'consequuntur',
        'repellat' => 'mollitia',
    ];
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'quam';
    $request->key = 'molestiae';
    $request->name = 'Sabrina Cronin MD';
    $request->oauthToken = 'animi';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsEnableSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsEnable($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocument

Send a document for Human Review. The input document should be processed by the specified processor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1ReviewDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentSchema;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentSchemaEntityType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentSchemaEntityTypeEnumValues;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentSchemaEntityTypePropertyOccurrenceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentSchemaMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1Document;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentEntity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentEntityNormalizedValue;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypePostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDateTime;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeTimeZone;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeMoney;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageAnchor;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageAnchorPageRef;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1BoundingPoly;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1NormalizedVertex;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1Vertex;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentProvenance;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentProvenanceParent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentTextAnchor;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentTextAnchorTextSegment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentEntityRelation;
use \OpenAPI\OpenAPI\Models\Shared\GoogleRpcStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageBlock;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageDetectedLanguage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageLayout;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageDetectedBarcode;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1Barcode;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageDimension;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageFormField;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageImageQualityScores;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageImageQualityScoresDetectedDefect;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageLine;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageParagraph;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageSymbol;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageTable;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageTableTableRow;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageTableTableCell;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageToken;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreak;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreakTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageTokenStyleInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeColor;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageMatrix;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageVisualElement;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentRevision;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentRevisionHumanReview;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentShardInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentTextChange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentStyle;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentStyleFontSize;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDocumentaiV1ReviewDocumentRequest = new GoogleCloudDocumentaiV1ReviewDocumentRequest();
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->documentSchema = new GoogleCloudDocumentaiV1DocumentSchema();
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->documentSchema->description = 'tenetur';
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->documentSchema->displayName = 'ipsam';
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->documentSchema->entityTypes = [
        new GoogleCloudDocumentaiV1DocumentSchemaEntityType(),
        new GoogleCloudDocumentaiV1DocumentSchemaEntityType(),
        new GoogleCloudDocumentaiV1DocumentSchemaEntityType(),
    ];
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->documentSchema->metadata = new GoogleCloudDocumentaiV1DocumentSchemaMetadata();
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->documentSchema->metadata->documentAllowMultipleLabels = false;
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->documentSchema->metadata->documentSplitter = false;
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->documentSchema->metadata->prefixedNamingOnProperties = false;
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->documentSchema->metadata->skipNamingValidation = false;
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->enableSchemaValidation = false;
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->inlineDocument = new GoogleCloudDocumentaiV1Document();
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->inlineDocument->content = 'possimus';
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->inlineDocument->entities = [
        new GoogleCloudDocumentaiV1DocumentEntity(),
    ];
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->inlineDocument->entityRelations = [
        new GoogleCloudDocumentaiV1DocumentEntityRelation(),
    ];
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->inlineDocument->error = new GoogleRpcStatus();
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->inlineDocument->error->code = 622846;
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->inlineDocument->error->details = [
        [
            'quasi' => 'reiciendis',
            'voluptatibus' => 'vero',
            'nihil' => 'praesentium',
        ],
        [
            'ipsa' => 'omnis',
            'voluptate' => 'cum',
            'perferendis' => 'doloremque',
            'reprehenderit' => 'ut',
        ],
        [
            'dicta' => 'corporis',
            'dolore' => 'iusto',
            'dicta' => 'harum',
            'enim' => 'accusamus',
        ],
        [
            'repudiandae' => 'quae',
            'ipsum' => 'quidem',
        ],
    ];
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->inlineDocument->error->message = 'molestias';
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->inlineDocument->mimeType = 'excepturi';
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->inlineDocument->pages = [
        new GoogleCloudDocumentaiV1DocumentPage(),
        new GoogleCloudDocumentaiV1DocumentPage(),
        new GoogleCloudDocumentaiV1DocumentPage(),
        new GoogleCloudDocumentaiV1DocumentPage(),
    ];
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->inlineDocument->revisions = [
        new GoogleCloudDocumentaiV1DocumentRevision(),
        new GoogleCloudDocumentaiV1DocumentRevision(),
    ];
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->inlineDocument->shardInfo = new GoogleCloudDocumentaiV1DocumentShardInfo();
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->inlineDocument->shardInfo->shardCount = 'praesentium';
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->inlineDocument->shardInfo->shardIndex = 'rem';
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->inlineDocument->shardInfo->textOffset = 'voluptates';
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->inlineDocument->text = 'quasi';
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->inlineDocument->textChanges = [
        new GoogleCloudDocumentaiV1DocumentTextChange(),
        new GoogleCloudDocumentaiV1DocumentTextChange(),
        new GoogleCloudDocumentaiV1DocumentTextChange(),
        new GoogleCloudDocumentaiV1DocumentTextChange(),
    ];
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->inlineDocument->textStyles = [
        new GoogleCloudDocumentaiV1DocumentStyle(),
        new GoogleCloudDocumentaiV1DocumentStyle(),
        new GoogleCloudDocumentaiV1DocumentStyle(),
    ];
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->inlineDocument->uri = 'http://vicious-donut.biz';
    $request->googleCloudDocumentaiV1ReviewDocumentRequest->priority = GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum::DEFAULT;
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->fields = 'deserunt';
    $request->humanReviewConfig = 'distinctio';
    $request->key = 'quibusdam';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocument($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsLocationsProcessorsList

Lists all processors which belong to this project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magni';
    $request->fields = 'assumenda';
    $request->key = 'ipsam';
    $request->oauthToken = 'alias';
    $request->pageSize = 146441;
    $request->pageToken = 'dolorum';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'tempore';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsList($request, $requestSecurity);

    if ($response->googleCloudDocumentaiV1ListProcessorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsLocationsProcessorsProcessorVersionsBatchProcess

LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1BatchProcessRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfigShardingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1BatchDocumentsInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1GcsDocuments;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1GcsDocument;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1GcsPrefix;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDocumentaiV1BatchProcessRequest = new GoogleCloudDocumentaiV1BatchProcessRequest();
    $request->googleCloudDocumentaiV1BatchProcessRequest->documentOutputConfig = new GoogleCloudDocumentaiV1DocumentOutputConfig();
    $request->googleCloudDocumentaiV1BatchProcessRequest->documentOutputConfig->gcsOutputConfig = new GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfig();
    $request->googleCloudDocumentaiV1BatchProcessRequest->documentOutputConfig->gcsOutputConfig->fieldMask = 'delectus';
    $request->googleCloudDocumentaiV1BatchProcessRequest->documentOutputConfig->gcsOutputConfig->gcsUri = 'eum';
    $request->googleCloudDocumentaiV1BatchProcessRequest->documentOutputConfig->gcsOutputConfig->shardingConfig = new GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfigShardingConfig();
    $request->googleCloudDocumentaiV1BatchProcessRequest->documentOutputConfig->gcsOutputConfig->shardingConfig->pagesOverlap = 248753;
    $request->googleCloudDocumentaiV1BatchProcessRequest->documentOutputConfig->gcsOutputConfig->shardingConfig->pagesPerShard = 756107;
    $request->googleCloudDocumentaiV1BatchProcessRequest->inputDocuments = new GoogleCloudDocumentaiV1BatchDocumentsInputConfig();
    $request->googleCloudDocumentaiV1BatchProcessRequest->inputDocuments->gcsDocuments = new GoogleCloudDocumentaiV1GcsDocuments();
    $request->googleCloudDocumentaiV1BatchProcessRequest->inputDocuments->gcsDocuments->documents = [
        new GoogleCloudDocumentaiV1GcsDocument(),
        new GoogleCloudDocumentaiV1GcsDocument(),
        new GoogleCloudDocumentaiV1GcsDocument(),
    ];
    $request->googleCloudDocumentaiV1BatchProcessRequest->inputDocuments->gcsPrefix = new GoogleCloudDocumentaiV1GcsPrefix();
    $request->googleCloudDocumentaiV1BatchProcessRequest->inputDocuments->gcsPrefix->gcsUriPrefix = 'aliquid';
    $request->googleCloudDocumentaiV1BatchProcessRequest->skipHumanReview = false;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'officia';
    $request->key = 'dolor';
    $request->name = 'Randal Parisian';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsProcessorVersionsBatchProcess($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsLocationsProcessorsProcessorVersionsDelete

Deletes the processor version, all artifacts under the processor version will be deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsProcessorVersionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'aliquid';
    $request->key = 'laborum';
    $request->name = 'Alfred McClure';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsProcessorVersionsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsProcessorVersionsDelete($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsLocationsProcessorsProcessorVersionsDeploy

Deploys the processor version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsDeploySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'deleniti' => 'sapiente',
        'amet' => 'deserunt',
        'nisi' => 'vel',
    ];
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'perferendis';
    $request->key = 'nihil';
    $request->name = 'Verna Olson';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsProcessorVersionsDeploySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsProcessorVersionsDeploy($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersion

Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1EvaluateProcessorVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1BatchDocumentsInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1GcsDocuments;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1GcsDocument;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1GcsPrefix;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDocumentaiV1EvaluateProcessorVersionRequest = new GoogleCloudDocumentaiV1EvaluateProcessorVersionRequest();
    $request->googleCloudDocumentaiV1EvaluateProcessorVersionRequest->evaluationDocuments = new GoogleCloudDocumentaiV1BatchDocumentsInputConfig();
    $request->googleCloudDocumentaiV1EvaluateProcessorVersionRequest->evaluationDocuments->gcsDocuments = new GoogleCloudDocumentaiV1GcsDocuments();
    $request->googleCloudDocumentaiV1EvaluateProcessorVersionRequest->evaluationDocuments->gcsDocuments->documents = [
        new GoogleCloudDocumentaiV1GcsDocument(),
    ];
    $request->googleCloudDocumentaiV1EvaluateProcessorVersionRequest->evaluationDocuments->gcsPrefix = new GoogleCloudDocumentaiV1GcsPrefix();
    $request->googleCloudDocumentaiV1EvaluateProcessorVersionRequest->evaluationDocuments->gcsPrefix->gcsUriPrefix = 'architecto';
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'ullam';
    $request->key = 'provident';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->processorVersion = 'sint';
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersion($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsList

Retrieves a set of evaluations for a given processor version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'necessitatibus';
    $request->key = 'odit';
    $request->oauthToken = 'nemo';
    $request->pageSize = 97260;
    $request->pageToken = 'iure';
    $request->parent = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'maxime';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsList($request, $requestSecurity);

    if ($response->googleCloudDocumentaiV1ListEvaluationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsLocationsProcessorsProcessorVersionsList

Lists all versions of a processor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsProcessorVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'architecto';
    $request->fields = 'architecto';
    $request->key = 'repudiandae';
    $request->oauthToken = 'ullam';
    $request->pageSize = 714242;
    $request->pageToken = 'nihil';
    $request->parent = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsProcessorVersionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsProcessorVersionsList($request, $requestSecurity);

    if ($response->googleCloudDocumentaiV1ListProcessorVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsLocationsProcessorsProcessorVersionsProcess

Processes a single document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1ProcessRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1Document;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentEntity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentEntityNormalizedValue;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypePostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDateTime;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeTimeZone;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeMoney;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageAnchor;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageAnchorPageRef;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1BoundingPoly;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1NormalizedVertex;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1Vertex;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentProvenance;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentProvenanceParent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentTextAnchor;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentTextAnchorTextSegment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentEntityRelation;
use \OpenAPI\OpenAPI\Models\Shared\GoogleRpcStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageBlock;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageDetectedLanguage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageLayout;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageDetectedBarcode;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1Barcode;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageDimension;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageFormField;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageImageQualityScores;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageImageQualityScoresDetectedDefect;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageLine;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageParagraph;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageSymbol;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageTable;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageTableTableRow;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageTableTableCell;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageToken;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreak;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreakTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageTokenStyleInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeColor;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageMatrix;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentPageVisualElement;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentRevision;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentRevisionHumanReview;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentShardInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentTextChange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentStyle;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentStyleFontSize;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1RawDocument;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDocumentaiV1ProcessRequest = new GoogleCloudDocumentaiV1ProcessRequest();
    $request->googleCloudDocumentaiV1ProcessRequest->fieldMask = 'accusantium';
    $request->googleCloudDocumentaiV1ProcessRequest->inlineDocument = new GoogleCloudDocumentaiV1Document();
    $request->googleCloudDocumentaiV1ProcessRequest->inlineDocument->content = 'consequuntur';
    $request->googleCloudDocumentaiV1ProcessRequest->inlineDocument->entities = [
        new GoogleCloudDocumentaiV1DocumentEntity(),
        new GoogleCloudDocumentaiV1DocumentEntity(),
        new GoogleCloudDocumentaiV1DocumentEntity(),
    ];
    $request->googleCloudDocumentaiV1ProcessRequest->inlineDocument->entityRelations = [
        new GoogleCloudDocumentaiV1DocumentEntityRelation(),
        new GoogleCloudDocumentaiV1DocumentEntityRelation(),
        new GoogleCloudDocumentaiV1DocumentEntityRelation(),
    ];
    $request->googleCloudDocumentaiV1ProcessRequest->inlineDocument->error = new GoogleRpcStatus();
    $request->googleCloudDocumentaiV1ProcessRequest->inlineDocument->error->code = 166847;
    $request->googleCloudDocumentaiV1ProcessRequest->inlineDocument->error->details = [
        [
            'illum' => 'pariatur',
            'maxime' => 'ea',
            'excepturi' => 'odit',
            'ea' => 'accusantium',
        ],
    ];
    $request->googleCloudDocumentaiV1ProcessRequest->inlineDocument->error->message = 'ab';
    $request->googleCloudDocumentaiV1ProcessRequest->inlineDocument->mimeType = 'maiores';
    $request->googleCloudDocumentaiV1ProcessRequest->inlineDocument->pages = [
        new GoogleCloudDocumentaiV1DocumentPage(),
        new GoogleCloudDocumentaiV1DocumentPage(),
        new GoogleCloudDocumentaiV1DocumentPage(),
    ];
    $request->googleCloudDocumentaiV1ProcessRequest->inlineDocument->revisions = [
        new GoogleCloudDocumentaiV1DocumentRevision(),
        new GoogleCloudDocumentaiV1DocumentRevision(),
    ];
    $request->googleCloudDocumentaiV1ProcessRequest->inlineDocument->shardInfo = new GoogleCloudDocumentaiV1DocumentShardInfo();
    $request->googleCloudDocumentaiV1ProcessRequest->inlineDocument->shardInfo->shardCount = 'voluptate';
    $request->googleCloudDocumentaiV1ProcessRequest->inlineDocument->shardInfo->shardIndex = 'autem';
    $request->googleCloudDocumentaiV1ProcessRequest->inlineDocument->shardInfo->textOffset = 'nam';
    $request->googleCloudDocumentaiV1ProcessRequest->inlineDocument->text = 'eaque';
    $request->googleCloudDocumentaiV1ProcessRequest->inlineDocument->textChanges = [
        new GoogleCloudDocumentaiV1DocumentTextChange(),
        new GoogleCloudDocumentaiV1DocumentTextChange(),
        new GoogleCloudDocumentaiV1DocumentTextChange(),
        new GoogleCloudDocumentaiV1DocumentTextChange(),
    ];
    $request->googleCloudDocumentaiV1ProcessRequest->inlineDocument->textStyles = [
        new GoogleCloudDocumentaiV1DocumentStyle(),
        new GoogleCloudDocumentaiV1DocumentStyle(),
    ];
    $request->googleCloudDocumentaiV1ProcessRequest->inlineDocument->uri = 'https://affectionate-stonework.biz';
    $request->googleCloudDocumentaiV1ProcessRequest->rawDocument = new GoogleCloudDocumentaiV1RawDocument();
    $request->googleCloudDocumentaiV1ProcessRequest->rawDocument->content = 'aut';
    $request->googleCloudDocumentaiV1ProcessRequest->rawDocument->mimeType = 'cumque';
    $request->googleCloudDocumentaiV1ProcessRequest->skipHumanReview = false;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->fields = 'nobis';
    $request->key = 'dolores';
    $request->name = 'Mrs. Deanna Kuhn';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'minus';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsProcessorVersionsProcess($request, $requestSecurity);

    if ($response->googleCloudDocumentaiV1ProcessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsLocationsProcessorsProcessorVersionsTrain

Trains a new processor version. Operation metadata is returned as TrainProcessorVersionMetadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsTrainRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1TrainProcessorVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentSchema;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentSchemaEntityType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentSchemaEntityTypeEnumValues;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentSchemaEntityTypePropertyOccurrenceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1DocumentSchemaMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1TrainProcessorVersionRequestInputData;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1BatchDocumentsInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1GcsDocuments;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1GcsDocument;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1GcsPrefix;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1ProcessorVersion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1EvaluationReference;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1EvaluationMetrics;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1ProcessorVersionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsTrainSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsProcessorVersionsTrainRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest = new GoogleCloudDocumentaiV1TrainProcessorVersionRequest();
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->baseProcessorVersion = 'dolor';
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->documentSchema = new GoogleCloudDocumentaiV1DocumentSchema();
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->documentSchema->description = 'vero';
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->documentSchema->displayName = 'nostrum';
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->documentSchema->entityTypes = [
        new GoogleCloudDocumentaiV1DocumentSchemaEntityType(),
        new GoogleCloudDocumentaiV1DocumentSchemaEntityType(),
        new GoogleCloudDocumentaiV1DocumentSchemaEntityType(),
        new GoogleCloudDocumentaiV1DocumentSchemaEntityType(),
    ];
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->documentSchema->metadata = new GoogleCloudDocumentaiV1DocumentSchemaMetadata();
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->documentSchema->metadata->documentAllowMultipleLabels = false;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->documentSchema->metadata->documentSplitter = false;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->documentSchema->metadata->prefixedNamingOnProperties = false;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->documentSchema->metadata->skipNamingValidation = false;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->inputData = new GoogleCloudDocumentaiV1TrainProcessorVersionRequestInputData();
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->inputData->testDocuments = new GoogleCloudDocumentaiV1BatchDocumentsInputConfig();
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->inputData->testDocuments->gcsDocuments = new GoogleCloudDocumentaiV1GcsDocuments();
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->inputData->testDocuments->gcsDocuments->documents = [
        new GoogleCloudDocumentaiV1GcsDocument(),
        new GoogleCloudDocumentaiV1GcsDocument(),
        new GoogleCloudDocumentaiV1GcsDocument(),
        new GoogleCloudDocumentaiV1GcsDocument(),
    ];
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->inputData->testDocuments->gcsPrefix = new GoogleCloudDocumentaiV1GcsPrefix();
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->inputData->testDocuments->gcsPrefix->gcsUriPrefix = 'omnis';
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->inputData->trainingDocuments = new GoogleCloudDocumentaiV1BatchDocumentsInputConfig();
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->inputData->trainingDocuments->gcsDocuments = new GoogleCloudDocumentaiV1GcsDocuments();
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->inputData->trainingDocuments->gcsDocuments->documents = [
        new GoogleCloudDocumentaiV1GcsDocument(),
        new GoogleCloudDocumentaiV1GcsDocument(),
        new GoogleCloudDocumentaiV1GcsDocument(),
    ];
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->inputData->trainingDocuments->gcsPrefix = new GoogleCloudDocumentaiV1GcsPrefix();
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->inputData->trainingDocuments->gcsPrefix->gcsUriPrefix = 'perspiciatis';
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion = new GoogleCloudDocumentaiV1ProcessorVersion();
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->createTime = 'voluptatem';
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->deprecationInfo = new GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo();
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->deprecationInfo->deprecationTime = 'porro';
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->deprecationInfo->replacementProcessorVersion = 'consequuntur';
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->displayName = 'blanditiis';
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->documentSchema = new GoogleCloudDocumentaiV1DocumentSchema();
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->documentSchema->description = 'error';
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->documentSchema->displayName = 'eaque';
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->documentSchema->entityTypes = [
        new GoogleCloudDocumentaiV1DocumentSchemaEntityType(),
        new GoogleCloudDocumentaiV1DocumentSchemaEntityType(),
        new GoogleCloudDocumentaiV1DocumentSchemaEntityType(),
    ];
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->documentSchema->metadata = new GoogleCloudDocumentaiV1DocumentSchemaMetadata();
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->documentSchema->metadata->documentAllowMultipleLabels = false;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->documentSchema->metadata->documentSplitter = false;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->documentSchema->metadata->prefixedNamingOnProperties = false;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->documentSchema->metadata->skipNamingValidation = false;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->googleManaged = false;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->kmsKeyName = 'rerum';
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->kmsKeyVersionName = 'adipisci';
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation = new GoogleCloudDocumentaiV1EvaluationReference();
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics = new GoogleCloudDocumentaiV1EvaluationMetrics();
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->f1Score = 9923.97;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->falseNegativesCount = 934214;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->falsePositivesCount = 267262;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->groundTruthDocumentCount = 613966;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->groundTruthOccurrencesCount = 679091;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->precision = 5356.33;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->predictedDocumentCount = 864282;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->predictedOccurrencesCount = 589910;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->recall = 7508.44;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->totalDocumentsCount = 730122;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->truePositivesCount = 964490;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact = new GoogleCloudDocumentaiV1EvaluationMetrics();
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->f1Score = 3119.45;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->falseNegativesCount = 554242;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->falsePositivesCount = 398221;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->groundTruthDocumentCount = 212390;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->groundTruthOccurrencesCount = 209843;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->precision = 2224.43;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->predictedDocumentCount = 186193;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->predictedOccurrencesCount = 218749;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->recall = 9443.73;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->totalDocumentsCount = 569574;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->truePositivesCount = 739551;
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->evaluation = 'voluptate';
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->latestEvaluation->operation = 'dignissimos';
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->name = 'Allen Parisian Jr.';
    $request->googleCloudDocumentaiV1TrainProcessorVersionRequest->processorVersion->state = GoogleCloudDocumentaiV1ProcessorVersionStateEnum::STATE_UNSPECIFIED;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quaerat';
    $request->fields = 'accusamus';
    $request->key = 'quidem';
    $request->oauthToken = 'voluptatibus';
    $request->parent = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'atque';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsProcessorVersionsTrainSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsProcessorVersionsTrain($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsLocationsProcessorsProcessorVersionsUndeploy

Undeploys the processor version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeployRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeploySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeployRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'ab' => 'soluta',
        'dolorum' => 'iusto',
        'voluptate' => 'dolorum',
        'deleniti' => 'omnis',
    ];
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'asperiores';
    $request->fields = 'nihil';
    $request->key = 'ipsum';
    $request->name = 'Alberta Ullrich';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeploySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsProcessorVersionsUndeploy($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsLocationsProcessorsSetDefaultProcessorVersion

Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1SetDefaultProcessorVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDocumentaiV1SetDefaultProcessorVersionRequest = new GoogleCloudDocumentaiV1SetDefaultProcessorVersionRequest();
    $request->googleCloudDocumentaiV1SetDefaultProcessorVersionRequest->defaultProcessorVersion = 'saepe';
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'minima';
    $request->key = 'repellendus';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->processor = 'similique';
    $request->quotaUser = 'alias';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'quaerat';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsSetDefaultProcessorVersion($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officiis';
    $request->fields = 'qui';
    $request->filter = 'dolorum';
    $request->key = 'a';
    $request->name = 'Fannie Kub';
    $request->oauthToken = 'tenetur';
    $request->pageSize = 229442;
    $request->pageToken = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'enim';

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
