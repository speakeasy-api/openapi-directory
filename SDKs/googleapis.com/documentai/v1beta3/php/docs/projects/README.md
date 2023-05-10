# projects

### Available Operations

* [documentaiProjectsLocationsFetchProcessorTypes](#documentaiprojectslocationsfetchprocessortypes) - Fetches processor types. Note that we don't use ListProcessorTypes here, because it isn't paginated.
* [documentaiProjectsLocationsList](#documentaiprojectslocationslist) - Lists information about the supported locations for this service.
* [documentaiProjectsLocationsOperationsCancel](#documentaiprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [documentaiProjectsLocationsProcessorTypesGet](#documentaiprojectslocationsprocessortypesget) - Gets a processor type detail.
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
* [documentaiProjectsLocationsProcessorsProcessorVersionsImportProcessorVersion](#documentaiprojectslocationsprocessorsprocessorversionsimportprocessorversion) - Imports a processor version from source processor version.
* [documentaiProjectsLocationsProcessorsProcessorVersionsList](#documentaiprojectslocationsprocessorsprocessorversionslist) - Lists all versions of a processor.
* [documentaiProjectsLocationsProcessorsProcessorVersionsProcess](#documentaiprojectslocationsprocessorsprocessorversionsprocess) - Processes a single document.
* [documentaiProjectsLocationsProcessorsProcessorVersionsTrain](#documentaiprojectslocationsprocessorsprocessorversionstrain) - Trains a new processor version. Operation metadata is returned as TrainProcessorVersionMetadata.
* [documentaiProjectsLocationsProcessorsProcessorVersionsUndeploy](#documentaiprojectslocationsprocessorsprocessorversionsundeploy) - Undeploys the processor version.
* [documentaiProjectsLocationsProcessorsSetDefaultProcessorVersion](#documentaiprojectslocationsprocessorssetdefaultprocessorversion) - Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.

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

    if ($response->googleCloudDocumentaiV1beta3FetchProcessorTypesResponse !== null) {
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

## documentaiProjectsLocationsProcessorTypesGet

Gets a processor type detail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorTypesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorTypesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorTypesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'modi';
    $request->filter = 'qui';
    $request->key = 'impedit';
    $request->name = 'Cory Emmerich';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 324141;
    $request->pageToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorTypesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorTypesGet($request, $requestSecurity);

    if ($response->googleCloudDocumentaiV1beta3ProcessorType !== null) {
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
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'fuga';
    $request->key = 'in';
    $request->oauthToken = 'corporis';
    $request->pageSize = 613064;
    $request->pageToken = 'iure';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorTypesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorTypesList($request, $requestSecurity);

    if ($response->googleCloudDocumentaiV1beta3ListProcessorTypesResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3ProcessorInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDocumentaiV1beta3ProcessorInput = new GoogleCloudDocumentaiV1beta3ProcessorInput();
    $request->googleCloudDocumentaiV1beta3ProcessorInput->createTime = 'est';
    $request->googleCloudDocumentaiV1beta3ProcessorInput->defaultProcessorVersion = 'mollitia';
    $request->googleCloudDocumentaiV1beta3ProcessorInput->displayName = 'laborum';
    $request->googleCloudDocumentaiV1beta3ProcessorInput->kmsKeyName = 'dolores';
    $request->googleCloudDocumentaiV1beta3ProcessorInput->type = 'dolorem';
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nobis';
    $request->fields = 'enim';
    $request->key = 'omnis';
    $request->oauthToken = 'nemo';
    $request->parent = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsCreate($request, $requestSecurity);

    if ($response->googleCloudDocumentaiV1beta3Processor !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'ipsam' => 'id',
        'possimus' => 'aut',
        'quasi' => 'error',
        'temporibus' => 'laborum',
    ];
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->fields = 'vero';
    $request->key = 'nihil';
    $request->name = 'Jan Bednar';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'reprehenderit';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3ReviewDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3Document;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentEntity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypePostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDateTime;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeTimeZone;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeMoney;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageAnchor;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3BoundingPoly;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3NormalizedVertex;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3Vertex;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentProvenance;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentProvenanceParent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentTextAnchor;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentEntityRelation;
use \OpenAPI\OpenAPI\Models\Shared\GoogleRpcStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageBlock;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageLayout;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3Barcode;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageDimension;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageFormField;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageLine;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageParagraph;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageSymbol;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageTable;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageToken;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreakTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageTokenStyleInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeColor;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageMatrix;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageVisualElement;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentRevision;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentShardInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentTextChange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentStyle;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentStyleFontSize;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentSchema;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertyOccurrenceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3ReviewDocumentRequestPriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest = new GoogleCloudDocumentaiV1beta3ReviewDocumentRequest();
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->document = new GoogleCloudDocumentaiV1beta3Document();
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->document->content = 'maiores';
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->document->entities = [
        new GoogleCloudDocumentaiV1beta3DocumentEntity(),
    ];
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->document->entityRelations = [
        new GoogleCloudDocumentaiV1beta3DocumentEntityRelation(),
        new GoogleCloudDocumentaiV1beta3DocumentEntityRelation(),
    ];
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->document->error = new GoogleRpcStatus();
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->document->error->code = 296140;
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->document->error->details = [
        [
            'harum' => 'enim',
        ],
        [
            'commodi' => 'repudiandae',
            'quae' => 'ipsum',
            'quidem' => 'molestias',
            'excepturi' => 'pariatur',
        ],
    ];
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->document->error->message = 'modi';
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->document->mimeType = 'praesentium';
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->document->pages = [
        new GoogleCloudDocumentaiV1beta3DocumentPage(),
        new GoogleCloudDocumentaiV1beta3DocumentPage(),
        new GoogleCloudDocumentaiV1beta3DocumentPage(),
    ];
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->document->revisions = [
        new GoogleCloudDocumentaiV1beta3DocumentRevision(),
        new GoogleCloudDocumentaiV1beta3DocumentRevision(),
        new GoogleCloudDocumentaiV1beta3DocumentRevision(),
        new GoogleCloudDocumentaiV1beta3DocumentRevision(),
    ];
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->document->shardInfo = new GoogleCloudDocumentaiV1beta3DocumentShardInfo();
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->document->shardInfo->shardCount = 'quasi';
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->document->shardInfo->shardIndex = 'repudiandae';
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->document->shardInfo->textOffset = 'sint';
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->document->text = 'veritatis';
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->document->textChanges = [
        new GoogleCloudDocumentaiV1beta3DocumentTextChange(),
        new GoogleCloudDocumentaiV1beta3DocumentTextChange(),
        new GoogleCloudDocumentaiV1beta3DocumentTextChange(),
        new GoogleCloudDocumentaiV1beta3DocumentTextChange(),
    ];
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->document->textStyles = [
        new GoogleCloudDocumentaiV1beta3DocumentStyle(),
        new GoogleCloudDocumentaiV1beta3DocumentStyle(),
    ];
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->document->uri = 'http://acrobatic-plantation.org';
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->documentSchema = new GoogleCloudDocumentaiV1beta3DocumentSchema();
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->documentSchema->description = 'explicabo';
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->documentSchema->displayName = 'deserunt';
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->documentSchema->entityTypes = [
        new GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType(),
        new GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType(),
        new GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType(),
    ];
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->documentSchema->metadata = new GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata();
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->documentSchema->metadata->documentAllowMultipleLabels = false;
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->documentSchema->metadata->documentSplitter = false;
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->documentSchema->metadata->prefixedNamingOnProperties = false;
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->documentSchema->metadata->skipNamingValidation = false;
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->enableSchemaValidation = false;
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->inlineDocument = new GoogleCloudDocumentaiV1beta3Document();
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->inlineDocument->content = 'quibusdam';
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->inlineDocument->entities = [
        new GoogleCloudDocumentaiV1beta3DocumentEntity(),
        new GoogleCloudDocumentaiV1beta3DocumentEntity(),
    ];
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->inlineDocument->entityRelations = [
        new GoogleCloudDocumentaiV1beta3DocumentEntityRelation(),
        new GoogleCloudDocumentaiV1beta3DocumentEntityRelation(),
    ];
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->inlineDocument->error = new GoogleRpcStatus();
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->inlineDocument->error->code = 183191;
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->inlineDocument->error->details = [
        [
            'quos' => 'perferendis',
            'magni' => 'assumenda',
            'ipsam' => 'alias',
        ],
        [
            'dolorum' => 'excepturi',
        ],
    ];
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->inlineDocument->error->message = 'tempora';
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->inlineDocument->mimeType = 'facilis';
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->inlineDocument->pages = [
        new GoogleCloudDocumentaiV1beta3DocumentPage(),
        new GoogleCloudDocumentaiV1beta3DocumentPage(),
        new GoogleCloudDocumentaiV1beta3DocumentPage(),
    ];
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->inlineDocument->revisions = [
        new GoogleCloudDocumentaiV1beta3DocumentRevision(),
        new GoogleCloudDocumentaiV1beta3DocumentRevision(),
    ];
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->inlineDocument->shardInfo = new GoogleCloudDocumentaiV1beta3DocumentShardInfo();
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->inlineDocument->shardInfo->shardCount = 'delectus';
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->inlineDocument->shardInfo->shardIndex = 'eum';
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->inlineDocument->shardInfo->textOffset = 'non';
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->inlineDocument->text = 'eligendi';
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->inlineDocument->textChanges = [
        new GoogleCloudDocumentaiV1beta3DocumentTextChange(),
        new GoogleCloudDocumentaiV1beta3DocumentTextChange(),
        new GoogleCloudDocumentaiV1beta3DocumentTextChange(),
    ];
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->inlineDocument->textStyles = [
        new GoogleCloudDocumentaiV1beta3DocumentStyle(),
        new GoogleCloudDocumentaiV1beta3DocumentStyle(),
    ];
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->inlineDocument->uri = 'https://unlined-mole.name';
    $request->googleCloudDocumentaiV1beta3ReviewDocumentRequest->priority = GoogleCloudDocumentaiV1beta3ReviewDocumentRequestPriorityEnum::DEFAULT;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'in';
    $request->humanReviewConfig = 'in';
    $request->key = 'illum';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'rerum';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'magnam';

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
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'laborum';
    $request->key = 'accusamus';
    $request->oauthToken = 'non';
    $request->pageSize = 581273;
    $request->pageToken = 'enim';
    $request->parent = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsList($request, $requestSecurity);

    if ($response->googleCloudDocumentaiV1beta3ListProcessorsResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3BatchProcessRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfigShardingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3GcsDocuments;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3GcsDocument;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3GcsPrefix;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3ProcessOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3OcrConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3OcrConfigHints;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest = new GoogleCloudDocumentaiV1beta3BatchProcessRequest();
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->documentOutputConfig = new GoogleCloudDocumentaiV1beta3DocumentOutputConfig();
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->documentOutputConfig->gcsOutputConfig = new GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig();
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->documentOutputConfig->gcsOutputConfig->fieldMask = 'id';
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->documentOutputConfig->gcsOutputConfig->gcsUri = 'blanditiis';
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->documentOutputConfig->gcsOutputConfig->shardingConfig = new GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfigShardingConfig();
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->documentOutputConfig->gcsOutputConfig->shardingConfig->pagesOverlap = 533206;
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->documentOutputConfig->gcsOutputConfig->shardingConfig->pagesPerShard = 956084;
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->inputConfigs = [
        new GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig(),
    ];
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->inputDocuments = new GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig();
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->inputDocuments->gcsDocuments = new GoogleCloudDocumentaiV1beta3GcsDocuments();
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->inputDocuments->gcsDocuments->documents = [
        new GoogleCloudDocumentaiV1beta3GcsDocument(),
        new GoogleCloudDocumentaiV1beta3GcsDocument(),
        new GoogleCloudDocumentaiV1beta3GcsDocument(),
    ];
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->inputDocuments->gcsPrefix = new GoogleCloudDocumentaiV1beta3GcsPrefix();
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->inputDocuments->gcsPrefix->gcsUriPrefix = 'nisi';
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->outputConfig = new GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig();
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->outputConfig->gcsDestination = 'vel';
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->processOptions = new GoogleCloudDocumentaiV1beta3ProcessOptions();
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->processOptions->ocrConfig = new GoogleCloudDocumentaiV1beta3OcrConfig();
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->processOptions->ocrConfig->advancedOcrOptions = [
        'omnis',
        'molestiae',
        'perferendis',
    ];
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->processOptions->ocrConfig->computeStyleInfo = false;
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->processOptions->ocrConfig->enableImageQualityScores = false;
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->processOptions->ocrConfig->enableNativePdfParsing = false;
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->processOptions->ocrConfig->enableSymbol = false;
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->processOptions->ocrConfig->hints = new GoogleCloudDocumentaiV1beta3OcrConfigHints();
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->processOptions->ocrConfig->hints->languageHints = [
        'magnam',
        'distinctio',
    ];
    $request->googleCloudDocumentaiV1beta3BatchProcessRequest->skipHumanReview = false;
    $request->accessToken = 'id';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'suscipit';
    $request->key = 'natus';
    $request->name = 'Duane Thiel II';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'provident';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'reiciendis';
    $request->key = 'mollitia';
    $request->name = 'Natalie Ernser';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'doloribus';

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
        'maxime' => 'deleniti',
        'facilis' => 'in',
    ];
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repudiandae';
    $request->fields = 'ullam';
    $request->key = 'expedita';
    $request->name = 'Kristie Spencer';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'praesentium';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3GcsDocuments;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3GcsDocument;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3GcsPrefix;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest = new GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest();
    $request->googleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest->evaluationDocuments = new GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig();
    $request->googleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest->evaluationDocuments->gcsDocuments = new GoogleCloudDocumentaiV1beta3GcsDocuments();
    $request->googleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest->evaluationDocuments->gcsDocuments->documents = [
        new GoogleCloudDocumentaiV1beta3GcsDocument(),
    ];
    $request->googleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest->evaluationDocuments->gcsPrefix = new GoogleCloudDocumentaiV1beta3GcsPrefix();
    $request->googleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest->evaluationDocuments->gcsPrefix->gcsUriPrefix = 'sunt';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'pariatur';
    $request->fields = 'maxime';
    $request->key = 'ea';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->processorVersion = 'odit';
    $request->quotaUser = 'ea';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'ab';

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
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->fields = 'autem';
    $request->key = 'nam';
    $request->oauthToken = 'eaque';
    $request->pageSize = 866383;
    $request->pageToken = 'nemo';
    $request->parent = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsList($request, $requestSecurity);

    if ($response->googleCloudDocumentaiV1beta3ListEvaluationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## documentaiProjectsLocationsProcessorsProcessorVersionsImportProcessorVersion

Imports a processor version from source processor version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsImportProcessorVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsImportProcessorVersionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsProcessorVersionsImportProcessorVersionRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDocumentaiV1beta3ImportProcessorVersionRequest = new GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequest();
    $request->googleCloudDocumentaiV1beta3ImportProcessorVersionRequest->processorVersionSource = 'cumque';
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->fields = 'nobis';
    $request->key = 'dolores';
    $request->oauthToken = 'quis';
    $request->parent = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'dignissimos';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsProcessorVersionsImportProcessorVersionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsProcessorVersionsImportProcessorVersion($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolores';
    $request->fields = 'minus';
    $request->key = 'quam';
    $request->oauthToken = 'dolor';
    $request->pageSize = 874573;
    $request->pageToken = 'nostrum';
    $request->parent = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsProcessorVersionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsProcessorVersionsList($request, $requestSecurity);

    if ($response->googleCloudDocumentaiV1beta3ListProcessorVersionsResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3ProcessRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3Document;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentEntity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypePostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDateTime;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeTimeZone;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeMoney;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageAnchor;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3BoundingPoly;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3NormalizedVertex;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3Vertex;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentProvenance;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentProvenanceParent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentTextAnchor;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentEntityRelation;
use \OpenAPI\OpenAPI\Models\Shared\GoogleRpcStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageBlock;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageLayout;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3Barcode;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageDimension;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageFormField;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageLine;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageParagraph;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageSymbol;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageTable;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageToken;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreakTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageTokenStyleInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeColor;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageMatrix;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentPageVisualElement;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentRevision;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentShardInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentTextChange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentStyle;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentStyleFontSize;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3ProcessOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3OcrConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3OcrConfigHints;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3RawDocument;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDocumentaiV1beta3ProcessRequest = new GoogleCloudDocumentaiV1beta3ProcessRequest();
    $request->googleCloudDocumentaiV1beta3ProcessRequest->document = new GoogleCloudDocumentaiV1beta3Document();
    $request->googleCloudDocumentaiV1beta3ProcessRequest->document->content = 'voluptatem';
    $request->googleCloudDocumentaiV1beta3ProcessRequest->document->entities = [
        new GoogleCloudDocumentaiV1beta3DocumentEntity(),
        new GoogleCloudDocumentaiV1beta3DocumentEntity(),
        new GoogleCloudDocumentaiV1beta3DocumentEntity(),
        new GoogleCloudDocumentaiV1beta3DocumentEntity(),
    ];
    $request->googleCloudDocumentaiV1beta3ProcessRequest->document->entityRelations = [
        new GoogleCloudDocumentaiV1beta3DocumentEntityRelation(),
    ];
    $request->googleCloudDocumentaiV1beta3ProcessRequest->document->error = new GoogleRpcStatus();
    $request->googleCloudDocumentaiV1beta3ProcessRequest->document->error->code = 500026;
    $request->googleCloudDocumentaiV1beta3ProcessRequest->document->error->details = [
        [
            'occaecati' => 'rerum',
        ],
        [
            'asperiores' => 'earum',
        ],
        [
            'iste' => 'dolorum',
            'deleniti' => 'pariatur',
        ],
    ];
    $request->googleCloudDocumentaiV1beta3ProcessRequest->document->error->message = 'provident';
    $request->googleCloudDocumentaiV1beta3ProcessRequest->document->mimeType = 'nobis';
    $request->googleCloudDocumentaiV1beta3ProcessRequest->document->pages = [
        new GoogleCloudDocumentaiV1beta3DocumentPage(),
        new GoogleCloudDocumentaiV1beta3DocumentPage(),
        new GoogleCloudDocumentaiV1beta3DocumentPage(),
    ];
    $request->googleCloudDocumentaiV1beta3ProcessRequest->document->revisions = [
        new GoogleCloudDocumentaiV1beta3DocumentRevision(),
        new GoogleCloudDocumentaiV1beta3DocumentRevision(),
        new GoogleCloudDocumentaiV1beta3DocumentRevision(),
        new GoogleCloudDocumentaiV1beta3DocumentRevision(),
    ];
    $request->googleCloudDocumentaiV1beta3ProcessRequest->document->shardInfo = new GoogleCloudDocumentaiV1beta3DocumentShardInfo();
    $request->googleCloudDocumentaiV1beta3ProcessRequest->document->shardInfo->shardCount = 'quaerat';
    $request->googleCloudDocumentaiV1beta3ProcessRequest->document->shardInfo->shardIndex = 'quos';
    $request->googleCloudDocumentaiV1beta3ProcessRequest->document->shardInfo->textOffset = 'aliquid';
    $request->googleCloudDocumentaiV1beta3ProcessRequest->document->text = 'dolorem';
    $request->googleCloudDocumentaiV1beta3ProcessRequest->document->textChanges = [
        new GoogleCloudDocumentaiV1beta3DocumentTextChange(),
    ];
    $request->googleCloudDocumentaiV1beta3ProcessRequest->document->textStyles = [
        new GoogleCloudDocumentaiV1beta3DocumentStyle(),
    ];
    $request->googleCloudDocumentaiV1beta3ProcessRequest->document->uri = 'http://eager-urgency.name';
    $request->googleCloudDocumentaiV1beta3ProcessRequest->fieldMask = 'cum';
    $request->googleCloudDocumentaiV1beta3ProcessRequest->inlineDocument = new GoogleCloudDocumentaiV1beta3Document();
    $request->googleCloudDocumentaiV1beta3ProcessRequest->inlineDocument->content = 'voluptate';
    $request->googleCloudDocumentaiV1beta3ProcessRequest->inlineDocument->entities = [
        new GoogleCloudDocumentaiV1beta3DocumentEntity(),
        new GoogleCloudDocumentaiV1beta3DocumentEntity(),
    ];
    $request->googleCloudDocumentaiV1beta3ProcessRequest->inlineDocument->entityRelations = [
        new GoogleCloudDocumentaiV1beta3DocumentEntityRelation(),
        new GoogleCloudDocumentaiV1beta3DocumentEntityRelation(),
        new GoogleCloudDocumentaiV1beta3DocumentEntityRelation(),
        new GoogleCloudDocumentaiV1beta3DocumentEntityRelation(),
    ];
    $request->googleCloudDocumentaiV1beta3ProcessRequest->inlineDocument->error = new GoogleRpcStatus();
    $request->googleCloudDocumentaiV1beta3ProcessRequest->inlineDocument->error->code = 227414;
    $request->googleCloudDocumentaiV1beta3ProcessRequest->inlineDocument->error->details = [
        [
            'veritatis' => 'ipsa',
            'ipsa' => 'iure',
        ],
        [
            'quaerat' => 'accusamus',
            'quidem' => 'voluptatibus',
        ],
        [
            'natus' => 'eos',
            'atque' => 'sit',
        ],
    ];
    $request->googleCloudDocumentaiV1beta3ProcessRequest->inlineDocument->error->message = 'fugiat';
    $request->googleCloudDocumentaiV1beta3ProcessRequest->inlineDocument->mimeType = 'ab';
    $request->googleCloudDocumentaiV1beta3ProcessRequest->inlineDocument->pages = [
        new GoogleCloudDocumentaiV1beta3DocumentPage(),
        new GoogleCloudDocumentaiV1beta3DocumentPage(),
        new GoogleCloudDocumentaiV1beta3DocumentPage(),
    ];
    $request->googleCloudDocumentaiV1beta3ProcessRequest->inlineDocument->revisions = [
        new GoogleCloudDocumentaiV1beta3DocumentRevision(),
        new GoogleCloudDocumentaiV1beta3DocumentRevision(),
        new GoogleCloudDocumentaiV1beta3DocumentRevision(),
    ];
    $request->googleCloudDocumentaiV1beta3ProcessRequest->inlineDocument->shardInfo = new GoogleCloudDocumentaiV1beta3DocumentShardInfo();
    $request->googleCloudDocumentaiV1beta3ProcessRequest->inlineDocument->shardInfo->shardCount = 'iusto';
    $request->googleCloudDocumentaiV1beta3ProcessRequest->inlineDocument->shardInfo->shardIndex = 'voluptate';
    $request->googleCloudDocumentaiV1beta3ProcessRequest->inlineDocument->shardInfo->textOffset = 'dolorum';
    $request->googleCloudDocumentaiV1beta3ProcessRequest->inlineDocument->text = 'deleniti';
    $request->googleCloudDocumentaiV1beta3ProcessRequest->inlineDocument->textChanges = [
        new GoogleCloudDocumentaiV1beta3DocumentTextChange(),
        new GoogleCloudDocumentaiV1beta3DocumentTextChange(),
        new GoogleCloudDocumentaiV1beta3DocumentTextChange(),
    ];
    $request->googleCloudDocumentaiV1beta3ProcessRequest->inlineDocument->textStyles = [
        new GoogleCloudDocumentaiV1beta3DocumentStyle(),
        new GoogleCloudDocumentaiV1beta3DocumentStyle(),
        new GoogleCloudDocumentaiV1beta3DocumentStyle(),
        new GoogleCloudDocumentaiV1beta3DocumentStyle(),
    ];
    $request->googleCloudDocumentaiV1beta3ProcessRequest->inlineDocument->uri = 'https://wrong-intercourse.biz';
    $request->googleCloudDocumentaiV1beta3ProcessRequest->processOptions = new GoogleCloudDocumentaiV1beta3ProcessOptions();
    $request->googleCloudDocumentaiV1beta3ProcessRequest->processOptions->ocrConfig = new GoogleCloudDocumentaiV1beta3OcrConfig();
    $request->googleCloudDocumentaiV1beta3ProcessRequest->processOptions->ocrConfig->advancedOcrOptions = [
        'id',
        'saepe',
    ];
    $request->googleCloudDocumentaiV1beta3ProcessRequest->processOptions->ocrConfig->computeStyleInfo = false;
    $request->googleCloudDocumentaiV1beta3ProcessRequest->processOptions->ocrConfig->enableImageQualityScores = false;
    $request->googleCloudDocumentaiV1beta3ProcessRequest->processOptions->ocrConfig->enableNativePdfParsing = false;
    $request->googleCloudDocumentaiV1beta3ProcessRequest->processOptions->ocrConfig->enableSymbol = false;
    $request->googleCloudDocumentaiV1beta3ProcessRequest->processOptions->ocrConfig->hints = new GoogleCloudDocumentaiV1beta3OcrConfigHints();
    $request->googleCloudDocumentaiV1beta3ProcessRequest->processOptions->ocrConfig->hints->languageHints = [
        'aspernatur',
        'perferendis',
    ];
    $request->googleCloudDocumentaiV1beta3ProcessRequest->rawDocument = new GoogleCloudDocumentaiV1beta3RawDocument();
    $request->googleCloudDocumentaiV1beta3ProcessRequest->rawDocument->content = 'amet';
    $request->googleCloudDocumentaiV1beta3ProcessRequest->rawDocument->mimeType = 'optio';
    $request->googleCloudDocumentaiV1beta3ProcessRequest->skipHumanReview = false;
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

    $requestSecurity = new DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsProcessorsProcessorVersionsProcess($request, $requestSecurity);

    if ($response->googleCloudDocumentaiV1beta3ProcessResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentSchema;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertyOccurrenceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3GcsDocuments;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3GcsDocument;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3GcsPrefix;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3ProcessorVersion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3EvaluationReference;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3EvaluationMetrics;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsProcessorVersionsTrainSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsProcessorVersionsTrainRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest = new GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest();
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->baseProcessorVersion = 'quod';
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->documentSchema = new GoogleCloudDocumentaiV1beta3DocumentSchema();
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->documentSchema->description = 'officiis';
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->documentSchema->displayName = 'qui';
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->documentSchema->entityTypes = [
        new GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType(),
        new GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType(),
        new GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType(),
    ];
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->documentSchema->metadata = new GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata();
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->documentSchema->metadata->documentAllowMultipleLabels = false;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->documentSchema->metadata->documentSplitter = false;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->documentSchema->metadata->prefixedNamingOnProperties = false;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->documentSchema->metadata->skipNamingValidation = false;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->inputData = new GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData();
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->inputData->testDocuments = new GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig();
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->inputData->testDocuments->gcsDocuments = new GoogleCloudDocumentaiV1beta3GcsDocuments();
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->inputData->testDocuments->gcsDocuments->documents = [
        new GoogleCloudDocumentaiV1beta3GcsDocument(),
        new GoogleCloudDocumentaiV1beta3GcsDocument(),
        new GoogleCloudDocumentaiV1beta3GcsDocument(),
        new GoogleCloudDocumentaiV1beta3GcsDocument(),
    ];
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->inputData->testDocuments->gcsPrefix = new GoogleCloudDocumentaiV1beta3GcsPrefix();
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->inputData->testDocuments->gcsPrefix->gcsUriPrefix = 'esse';
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->inputData->trainingDocuments = new GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig();
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->inputData->trainingDocuments->gcsDocuments = new GoogleCloudDocumentaiV1beta3GcsDocuments();
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->inputData->trainingDocuments->gcsDocuments->documents = [
        new GoogleCloudDocumentaiV1beta3GcsDocument(),
        new GoogleCloudDocumentaiV1beta3GcsDocument(),
        new GoogleCloudDocumentaiV1beta3GcsDocument(),
    ];
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->inputData->trainingDocuments->gcsPrefix = new GoogleCloudDocumentaiV1beta3GcsPrefix();
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->inputData->trainingDocuments->gcsPrefix->gcsUriPrefix = 'iusto';
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion = new GoogleCloudDocumentaiV1beta3ProcessorVersion();
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->createTime = 'ipsum';
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->deprecationInfo = new GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo();
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->deprecationInfo->deprecationTime = 'quisquam';
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->deprecationInfo->replacementProcessorVersion = 'tenetur';
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->displayName = 'amet';
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->documentSchema = new GoogleCloudDocumentaiV1beta3DocumentSchema();
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->documentSchema->description = 'tempore';
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->documentSchema->displayName = 'accusamus';
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->documentSchema->entityTypes = [
        new GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType(),
        new GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType(),
    ];
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->documentSchema->metadata = new GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata();
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->documentSchema->metadata->documentAllowMultipleLabels = false;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->documentSchema->metadata->documentSplitter = false;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->documentSchema->metadata->prefixedNamingOnProperties = false;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->documentSchema->metadata->skipNamingValidation = false;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->googleManaged = false;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->kmsKeyName = 'enim';
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->kmsKeyVersionName = 'dolorem';
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation = new GoogleCloudDocumentaiV1beta3EvaluationReference();
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics = new GoogleCloudDocumentaiV1beta3EvaluationMetrics();
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->f1Score = 9574.51;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->falseNegativesCount = 518201;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->falsePositivesCount = 471752;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->groundTruthDocumentCount = 25662;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->groundTruthOccurrencesCount = 711584;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->precision = 2074.7;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->predictedDocumentCount = 153694;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->predictedOccurrencesCount = 424685;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->recall = 7304.42;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->totalDocumentsCount = 374170;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetrics->truePositivesCount = 646265;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact = new GoogleCloudDocumentaiV1beta3EvaluationMetrics();
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->f1Score = 4635.75;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->falseNegativesCount = 214880;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->falsePositivesCount = 277628;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->groundTruthDocumentCount = 186458;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->groundTruthOccurrencesCount = 586784;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->precision = 8075.81;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->predictedDocumentCount = 863856;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->predictedOccurrencesCount = 747080;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->recall = 1175.31;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->totalDocumentsCount = 674848;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->aggregateMetricsExact->truePositivesCount = 517379;
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->evaluation = 'incidunt';
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->latestEvaluation->operation = 'aspernatur';
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->name = 'Verna Purdy';
    $request->googleCloudDocumentaiV1beta3TrainProcessorVersionRequest->processorVersion->state = GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum::CREATING;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'neque';
    $request->fields = 'fugit';
    $request->key = 'magni';
    $request->oauthToken = 'odio';
    $request->parent = 'sunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'hic';

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
        'soluta' => 'nobis',
        'et' => 'saepe',
        'ipsum' => 'veritatis',
        'nobis' => 'quos',
    ];
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aperiam';
    $request->fields = 'delectus';
    $request->key = 'dolorem';
    $request->name = 'Clara Fisher Jr.';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quas';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'consequatur';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest = new GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest();
    $request->googleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest->defaultProcessorVersion = 'repellendus';
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ut';
    $request->fields = 'facilis';
    $request->key = 'cupiditate';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->processor = 'quae';
    $request->quotaUser = 'laudantium';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'occaecati';

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
