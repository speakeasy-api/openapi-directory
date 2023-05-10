# projects

### Available Operations

* [discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate](#discoveryengineprojectslocationsdatastoresbranchesdocumentscreate) - Creates a Document.
* [discoveryengineProjectsLocationsDataStoresBranchesDocumentsDelete](#discoveryengineprojectslocationsdatastoresbranchesdocumentsdelete) - Deletes a Document.
* [discoveryengineProjectsLocationsDataStoresBranchesDocumentsImport](#discoveryengineprojectslocationsdatastoresbranchesdocumentsimport) - Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.
* [discoveryengineProjectsLocationsDataStoresBranchesDocumentsList](#discoveryengineprojectslocationsdatastoresbranchesdocumentslist) - Gets a list of Documents.
* [discoveryengineProjectsLocationsDataStoresBranchesDocumentsPatch](#discoveryengineprojectslocationsdatastoresbranchesdocumentspatch) - Updates a Document.
* [discoveryengineProjectsLocationsDataStoresBranchesDocumentsPurge](#discoveryengineprojectslocationsdatastoresbranchesdocumentspurge) - Permanently deletes all selected Documents under a branch. This process is asynchronous. If the request is valid, the removal will be enquired and processed offlines. Depending on the number of Documents, this operation could take hours to complete. Before the operation completes, some Documents may still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a sample of Documents that would be deleted, set PurgeDocumentsRequest.force to false.
* [discoveryengineProjectsLocationsDataStoresServingConfigsRecommend](#discoveryengineprojectslocationsdatastoresservingconfigsrecommend) - Makes a recommendation, which requires a contextual user event.
* [discoveryengineProjectsLocationsDataStoresUserEventsCollect](#discoveryengineprojectslocationsdatastoresusereventscollect) - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
* [discoveryengineProjectsLocationsDataStoresUserEventsImport](#discoveryengineprojectslocationsdatastoresusereventsimport) - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* [discoveryengineProjectsLocationsDataStoresUserEventsWrite](#discoveryengineprojectslocationsdatastoresusereventswrite) - Writes a single user event.
* [discoveryengineProjectsOperationsGet](#discoveryengineprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [discoveryengineProjectsOperationsList](#discoveryengineprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate

Creates a Document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaDocument;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDiscoveryengineV1betaDocument = new GoogleCloudDiscoveryengineV1betaDocument();
    $request->googleCloudDiscoveryengineV1betaDocument->id = '2cb73920-5929-4396-bea7-596eb10faaa2';
    $request->googleCloudDiscoveryengineV1betaDocument->jsonData = 'dolorem';
    $request->googleCloudDiscoveryengineV1betaDocument->name = 'Rose Rolfson';
    $request->googleCloudDiscoveryengineV1betaDocument->parentDocumentId = 'nemo';
    $request->googleCloudDiscoveryengineV1betaDocument->schemaId = 'minima';
    $request->googleCloudDiscoveryengineV1betaDocument->structData = [
        'accusantium' => 'iure',
        'culpa' => 'doloribus',
        'sapiente' => 'architecto',
    ];
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'culpa';
    $request->documentId = 'consequuntur';
    $request->fields = 'repellat';
    $request->key = 'mollitia';
    $request->oauthToken = 'occaecati';
    $request->parent = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate($request, $requestSecurity);

    if ($response->googleCloudDiscoveryengineV1betaDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## discoveryengineProjectsLocationsDataStoresBranchesDocumentsDelete

Deletes a Document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'vitae';
    $request->key = 'laborum';
    $request->name = 'Bill Conn';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'possimus';

    $requestSecurity = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->discoveryengineProjectsLocationsDataStoresBranchesDocumentsDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## discoveryengineProjectsLocationsDataStoresBranchesDocumentsImport

Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaImportDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaBigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaImportErrorConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaGcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaDocument;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDiscoveryengineV1betaImportDocumentsRequest = new GoogleCloudDiscoveryengineV1betaImportDocumentsRequest();
    $request->googleCloudDiscoveryengineV1betaImportDocumentsRequest->bigquerySource = new GoogleCloudDiscoveryengineV1betaBigQuerySource();
    $request->googleCloudDiscoveryengineV1betaImportDocumentsRequest->bigquerySource->dataSchema = 'quasi';
    $request->googleCloudDiscoveryengineV1betaImportDocumentsRequest->bigquerySource->datasetId = 'error';
    $request->googleCloudDiscoveryengineV1betaImportDocumentsRequest->bigquerySource->gcsStagingDir = 'temporibus';
    $request->googleCloudDiscoveryengineV1betaImportDocumentsRequest->bigquerySource->partitionDate = new GoogleTypeDate();
    $request->googleCloudDiscoveryengineV1betaImportDocumentsRequest->bigquerySource->partitionDate->day = 673660;
    $request->googleCloudDiscoveryengineV1betaImportDocumentsRequest->bigquerySource->partitionDate->month = 96098;
    $request->googleCloudDiscoveryengineV1betaImportDocumentsRequest->bigquerySource->partitionDate->year = 971945;
    $request->googleCloudDiscoveryengineV1betaImportDocumentsRequest->bigquerySource->projectId = 'voluptatibus';
    $request->googleCloudDiscoveryengineV1betaImportDocumentsRequest->bigquerySource->tableId = 'vero';
    $request->googleCloudDiscoveryengineV1betaImportDocumentsRequest->errorConfig = new GoogleCloudDiscoveryengineV1betaImportErrorConfig();
    $request->googleCloudDiscoveryengineV1betaImportDocumentsRequest->errorConfig->gcsPrefix = 'nihil';
    $request->googleCloudDiscoveryengineV1betaImportDocumentsRequest->gcsSource = new GoogleCloudDiscoveryengineV1betaGcsSource();
    $request->googleCloudDiscoveryengineV1betaImportDocumentsRequest->gcsSource->dataSchema = 'praesentium';
    $request->googleCloudDiscoveryengineV1betaImportDocumentsRequest->gcsSource->inputUris = [
        'ipsa',
        'omnis',
        'voluptate',
        'cum',
    ];
    $request->googleCloudDiscoveryengineV1betaImportDocumentsRequest->inlineSource = new GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource();
    $request->googleCloudDiscoveryengineV1betaImportDocumentsRequest->inlineSource->documents = [
        new GoogleCloudDiscoveryengineV1betaDocument(),
    ];
    $request->googleCloudDiscoveryengineV1betaImportDocumentsRequest->reconciliationMode = GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnum::RECONCILIATION_MODE_UNSPECIFIED;
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'dicta';
    $request->key = 'corporis';
    $request->oauthToken = 'dolore';
    $request->parent = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->discoveryengineProjectsLocationsDataStoresBranchesDocumentsImport($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## discoveryengineProjectsLocationsDataStoresBranchesDocumentsList

Gets a list of Documents.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->fields = 'ipsum';
    $request->key = 'quidem';
    $request->oauthToken = 'molestias';
    $request->pageSize = 566602;
    $request->pageToken = 'pariatur';
    $request->parent = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'voluptates';

    $requestSecurity = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->discoveryengineProjectsLocationsDataStoresBranchesDocumentsList($request, $requestSecurity);

    if ($response->googleCloudDiscoveryengineV1betaListDocumentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## discoveryengineProjectsLocationsDataStoresBranchesDocumentsPatch

Updates a Document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaDocument;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDiscoveryengineV1betaDocument = new GoogleCloudDiscoveryengineV1betaDocument();
    $request->googleCloudDiscoveryengineV1betaDocument->id = 'e91e450a-d2ab-4d44-a698-02d502a94bb4';
    $request->googleCloudDiscoveryengineV1betaDocument->jsonData = 'delectus';
    $request->googleCloudDiscoveryengineV1betaDocument->name = 'Ethel Roob';
    $request->googleCloudDiscoveryengineV1betaDocument->parentDocumentId = 'provident';
    $request->googleCloudDiscoveryengineV1betaDocument->schemaId = 'necessitatibus';
    $request->googleCloudDiscoveryengineV1betaDocument->structData = [
        'officia' => 'dolor',
        'debitis' => 'a',
        'dolorum' => 'in',
    ];
    $request->accessToken = 'in';
    $request->allowMissing = false;
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'rerum';
    $request->key = 'dicta';
    $request->name = 'Blanca Schulist';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->discoveryengineProjectsLocationsDataStoresBranchesDocumentsPatch($request, $requestSecurity);

    if ($response->googleCloudDiscoveryengineV1betaDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## discoveryengineProjectsLocationsDataStoresBranchesDocumentsPurge

Permanently deletes all selected Documents under a branch. This process is asynchronous. If the request is valid, the removal will be enquired and processed offlines. Depending on the number of Documents, this operation could take hours to complete. Before the operation completes, some Documents may still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a sample of Documents that would be deleted, set PurgeDocumentsRequest.force to false.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPurgeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaPurgeDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPurgeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPurgeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDiscoveryengineV1betaPurgeDocumentsRequest = new GoogleCloudDiscoveryengineV1betaPurgeDocumentsRequest();
    $request->googleCloudDiscoveryengineV1betaPurgeDocumentsRequest->filter = 'accusamus';
    $request->googleCloudDiscoveryengineV1betaPurgeDocumentsRequest->force = false;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'provident';
    $request->fields = 'nam';
    $request->key = 'id';
    $request->oauthToken = 'blanditiis';
    $request->parent = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPurgeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->discoveryengineProjectsLocationsDataStoresBranchesDocumentsPurge($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## discoveryengineProjectsLocationsDataStoresServingConfigsRecommend

Makes a recommendation, which requires a contextual user event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaRecommendRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaUserEvent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaCustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaCompletionInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaDocumentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaMediaInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaPageInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaPanelInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaSearchInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaTransactionInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaUserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDiscoveryengineV1betaRecommendRequest = new GoogleCloudDiscoveryengineV1betaRecommendRequest();
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->filter = 'vel';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->pageSize = 618809;
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->params = [
        'molestiae' => 'perferendis',
        'nihil' => 'magnam',
        'distinctio' => 'id',
    ];
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent = new GoogleCloudDiscoveryengineV1betaUserEvent();
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->attributes = [
        'labore' => new GoogleCloudDiscoveryengineV1betaCustomAttribute(),
        'suscipit' => new GoogleCloudDiscoveryengineV1betaCustomAttribute(),
    ];
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->attributionToken = 'natus';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->completionInfo = new GoogleCloudDiscoveryengineV1betaCompletionInfo();
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->completionInfo->selectedPosition = 749170;
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->completionInfo->selectedSuggestion = 'eum';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->directUserRequest = false;
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->documents = [
        new GoogleCloudDiscoveryengineV1betaDocumentInfo(),
        new GoogleCloudDiscoveryengineV1betaDocumentInfo(),
        new GoogleCloudDiscoveryengineV1betaDocumentInfo(),
        new GoogleCloudDiscoveryengineV1betaDocumentInfo(),
    ];
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->eventTime = 'aspernatur';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->eventType = 'architecto';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->filter = 'magnam';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->mediaInfo = new GoogleCloudDiscoveryengineV1betaMediaInfo();
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->mediaInfo->mediaProgressDuration = 'et';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->mediaInfo->mediaProgressPercentage = 5699.65;
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->pageInfo = new GoogleCloudDiscoveryengineV1betaPageInfo();
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->pageInfo->pageCategory = 'ullam';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->pageInfo->pageviewId = 'provident';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->pageInfo->referrerUri = 'quos';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->pageInfo->uri = 'https://angelic-pharmacist.org';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->panel = new GoogleCloudDiscoveryengineV1betaPanelInfo();
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->panel->displayName = 'mollitia';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->panel->panelId = 'ad';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->panel->panelPosition = 431418;
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->panel->totalPanels = 221262;
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->promotionIds = [
        'odit',
        'nemo',
        'quasi',
        'iure',
    ];
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->searchInfo = new GoogleCloudDiscoveryengineV1betaSearchInfo();
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->searchInfo->offset = 984043;
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->searchInfo->orderBy = 'debitis';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->searchInfo->searchQuery = 'eius';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->sessionId = 'maxime';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->tagIds = [
        'facilis',
        'in',
        'architecto',
    ];
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->transactionInfo = new GoogleCloudDiscoveryengineV1betaTransactionInfo();
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->transactionInfo->cost = 995.69;
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->transactionInfo->currency = 'repudiandae';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->transactionInfo->discountValue = 3523.12;
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->transactionInfo->tax = 7142.42;
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->transactionInfo->transactionId = 'nihil';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->transactionInfo->value = 9988.48;
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->userInfo = new GoogleCloudDiscoveryengineV1betaUserInfo();
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->userInfo->userAgent = 'quibusdam';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->userInfo->userId = 'sed';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userEvent->userPseudoId = 'saepe';
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->userLabels = [
        'accusantium' => 'consequuntur',
        'praesentium' => 'natus',
        'magni' => 'sunt',
        'quo' => 'illum',
    ];
    $request->googleCloudDiscoveryengineV1betaRecommendRequest->validateOnly = false;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'excepturi';
    $request->key = 'odit';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->servingConfig = 'ab';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->discoveryengineProjectsLocationsDataStoresServingConfigsRecommend($request, $requestSecurity);

    if ($response->googleCloudDiscoveryengineV1betaRecommendResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## discoveryengineProjectsLocationsDataStoresUserEventsCollect

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresUserEventsCollectRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresUserEventsCollectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoveryengineProjectsLocationsDataStoresUserEventsCollectRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nam';
    $request->ets = 'eaque';
    $request->fields = 'pariatur';
    $request->key = 'nemo';
    $request->oauthToken = 'voluptatibus';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'aut';
    $request->uri = 'https://grubby-urge.net';
    $request->userEvent = 'nobis';

    $requestSecurity = new DiscoveryengineProjectsLocationsDataStoresUserEventsCollectSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->discoveryengineProjectsLocationsDataStoresUserEventsCollect($request, $requestSecurity);

    if ($response->googleApiHttpBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## discoveryengineProjectsLocationsDataStoresUserEventsImport

Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaImportUserEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaBigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaImportErrorConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaGcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaUserEvent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaCustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaCompletionInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaDocumentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaMediaInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaPageInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaPanelInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaSearchInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaTransactionInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaUserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresUserEventsImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDiscoveryengineV1betaImportUserEventsRequest = new GoogleCloudDiscoveryengineV1betaImportUserEventsRequest();
    $request->googleCloudDiscoveryengineV1betaImportUserEventsRequest->bigquerySource = new GoogleCloudDiscoveryengineV1betaBigQuerySource();
    $request->googleCloudDiscoveryengineV1betaImportUserEventsRequest->bigquerySource->dataSchema = 'quis';
    $request->googleCloudDiscoveryengineV1betaImportUserEventsRequest->bigquerySource->datasetId = 'totam';
    $request->googleCloudDiscoveryengineV1betaImportUserEventsRequest->bigquerySource->gcsStagingDir = 'dignissimos';
    $request->googleCloudDiscoveryengineV1betaImportUserEventsRequest->bigquerySource->partitionDate = new GoogleTypeDate();
    $request->googleCloudDiscoveryengineV1betaImportUserEventsRequest->bigquerySource->partitionDate->day = 54338;
    $request->googleCloudDiscoveryengineV1betaImportUserEventsRequest->bigquerySource->partitionDate->month = 338985;
    $request->googleCloudDiscoveryengineV1betaImportUserEventsRequest->bigquerySource->partitionDate->year = 199996;
    $request->googleCloudDiscoveryengineV1betaImportUserEventsRequest->bigquerySource->projectId = 'eos';
    $request->googleCloudDiscoveryengineV1betaImportUserEventsRequest->bigquerySource->tableId = 'perferendis';
    $request->googleCloudDiscoveryengineV1betaImportUserEventsRequest->errorConfig = new GoogleCloudDiscoveryengineV1betaImportErrorConfig();
    $request->googleCloudDiscoveryengineV1betaImportUserEventsRequest->errorConfig->gcsPrefix = 'dolores';
    $request->googleCloudDiscoveryengineV1betaImportUserEventsRequest->gcsSource = new GoogleCloudDiscoveryengineV1betaGcsSource();
    $request->googleCloudDiscoveryengineV1betaImportUserEventsRequest->gcsSource->dataSchema = 'minus';
    $request->googleCloudDiscoveryengineV1betaImportUserEventsRequest->gcsSource->inputUris = [
        'dolor',
        'vero',
    ];
    $request->googleCloudDiscoveryengineV1betaImportUserEventsRequest->inlineSource = new GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource();
    $request->googleCloudDiscoveryengineV1betaImportUserEventsRequest->inlineSource->userEvents = [
        new GoogleCloudDiscoveryengineV1betaUserEvent(),
        new GoogleCloudDiscoveryengineV1betaUserEvent(),
    ];
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'omnis';
    $request->fields = 'facilis';
    $request->key = 'perspiciatis';
    $request->oauthToken = 'voluptatem';
    $request->parent = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'error';

    $requestSecurity = new DiscoveryengineProjectsLocationsDataStoresUserEventsImportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->discoveryengineProjectsLocationsDataStoresUserEventsImport($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## discoveryengineProjectsLocationsDataStoresUserEventsWrite

Writes a single user event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaUserEvent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaCustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaCompletionInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaDocumentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaMediaInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaPageInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaPanelInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaSearchInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaTransactionInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaUserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDiscoveryengineV1betaUserEvent = new GoogleCloudDiscoveryengineV1betaUserEvent();
    $request->googleCloudDiscoveryengineV1betaUserEvent->attributes = [
        'rerum' => new GoogleCloudDiscoveryengineV1betaCustomAttribute(),
        'adipisci' => new GoogleCloudDiscoveryengineV1betaCustomAttribute(),
        'asperiores' => new GoogleCloudDiscoveryengineV1betaCustomAttribute(),
    ];
    $request->googleCloudDiscoveryengineV1betaUserEvent->attributionToken = 'earum';
    $request->googleCloudDiscoveryengineV1betaUserEvent->completionInfo = new GoogleCloudDiscoveryengineV1betaCompletionInfo();
    $request->googleCloudDiscoveryengineV1betaUserEvent->completionInfo->selectedPosition = 267262;
    $request->googleCloudDiscoveryengineV1betaUserEvent->completionInfo->selectedSuggestion = 'iste';
    $request->googleCloudDiscoveryengineV1betaUserEvent->directUserRequest = false;
    $request->googleCloudDiscoveryengineV1betaUserEvent->documents = [
        new GoogleCloudDiscoveryengineV1betaDocumentInfo(),
        new GoogleCloudDiscoveryengineV1betaDocumentInfo(),
        new GoogleCloudDiscoveryengineV1betaDocumentInfo(),
    ];
    $request->googleCloudDiscoveryengineV1betaUserEvent->eventTime = 'deleniti';
    $request->googleCloudDiscoveryengineV1betaUserEvent->eventType = 'pariatur';
    $request->googleCloudDiscoveryengineV1betaUserEvent->filter = 'provident';
    $request->googleCloudDiscoveryengineV1betaUserEvent->mediaInfo = new GoogleCloudDiscoveryengineV1betaMediaInfo();
    $request->googleCloudDiscoveryengineV1betaUserEvent->mediaInfo->mediaProgressDuration = 'nobis';
    $request->googleCloudDiscoveryengineV1betaUserEvent->mediaInfo->mediaProgressPercentage = 7301.22;
    $request->googleCloudDiscoveryengineV1betaUserEvent->pageInfo = new GoogleCloudDiscoveryengineV1betaPageInfo();
    $request->googleCloudDiscoveryengineV1betaUserEvent->pageInfo->pageCategory = 'delectus';
    $request->googleCloudDiscoveryengineV1betaUserEvent->pageInfo->pageviewId = 'quaerat';
    $request->googleCloudDiscoveryengineV1betaUserEvent->pageInfo->referrerUri = 'quos';
    $request->googleCloudDiscoveryengineV1betaUserEvent->pageInfo->uri = 'http://drafty-correspondent.biz';
    $request->googleCloudDiscoveryengineV1betaUserEvent->panel = new GoogleCloudDiscoveryengineV1betaPanelInfo();
    $request->googleCloudDiscoveryengineV1betaUserEvent->panel->displayName = 'qui';
    $request->googleCloudDiscoveryengineV1betaUserEvent->panel->panelId = 'ipsum';
    $request->googleCloudDiscoveryengineV1betaUserEvent->panel->panelPosition = 944373;
    $request->googleCloudDiscoveryengineV1betaUserEvent->panel->totalPanels = 569574;
    $request->googleCloudDiscoveryengineV1betaUserEvent->promotionIds = [
        'voluptate',
        'dignissimos',
        'reiciendis',
    ];
    $request->googleCloudDiscoveryengineV1betaUserEvent->searchInfo = new GoogleCloudDiscoveryengineV1betaSearchInfo();
    $request->googleCloudDiscoveryengineV1betaUserEvent->searchInfo->offset = 227414;
    $request->googleCloudDiscoveryengineV1betaUserEvent->searchInfo->orderBy = 'dolorum';
    $request->googleCloudDiscoveryengineV1betaUserEvent->searchInfo->searchQuery = 'numquam';
    $request->googleCloudDiscoveryengineV1betaUserEvent->sessionId = 'veritatis';
    $request->googleCloudDiscoveryengineV1betaUserEvent->tagIds = [
        'ipsa',
    ];
    $request->googleCloudDiscoveryengineV1betaUserEvent->transactionInfo = new GoogleCloudDiscoveryengineV1betaTransactionInfo();
    $request->googleCloudDiscoveryengineV1betaUserEvent->transactionInfo->cost = 4344.17;
    $request->googleCloudDiscoveryengineV1betaUserEvent->transactionInfo->currency = 'odio';
    $request->googleCloudDiscoveryengineV1betaUserEvent->transactionInfo->discountValue = 3117.96;
    $request->googleCloudDiscoveryengineV1betaUserEvent->transactionInfo->tax = 8810.05;
    $request->googleCloudDiscoveryengineV1betaUserEvent->transactionInfo->transactionId = 'quidem';
    $request->googleCloudDiscoveryengineV1betaUserEvent->transactionInfo->value = 9764.05;
    $request->googleCloudDiscoveryengineV1betaUserEvent->userInfo = new GoogleCloudDiscoveryengineV1betaUserInfo();
    $request->googleCloudDiscoveryengineV1betaUserEvent->userInfo->userAgent = 'voluptas';
    $request->googleCloudDiscoveryengineV1betaUserEvent->userInfo->userId = 'natus';
    $request->googleCloudDiscoveryengineV1betaUserEvent->userPseudoId = 'eos';
    $request->accessToken = 'atque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'ab';
    $request->key = 'soluta';
    $request->oauthToken = 'dolorum';
    $request->parent = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->discoveryengineProjectsLocationsDataStoresUserEventsWrite($request, $requestSecurity);

    if ($response->googleCloudDiscoveryengineV1betaUserEvent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## discoveryengineProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoveryengineProjectsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
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

    $requestSecurity = new DiscoveryengineProjectsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->discoveryengineProjectsOperationsGet($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## discoveryengineProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoveryengineProjectsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'provident';
    $request->filter = 'minima';
    $request->key = 'repellendus';
    $request->name = 'Donnie Abbott';
    $request->oauthToken = 'tempora';
    $request->pageSize = 425451;
    $request->pageToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'officiis';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new DiscoveryengineProjectsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->discoveryengineProjectsOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
