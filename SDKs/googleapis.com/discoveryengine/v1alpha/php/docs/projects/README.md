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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaDocument;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDiscoveryengineV1alphaDocument = new GoogleCloudDiscoveryengineV1alphaDocument();
    $request->googleCloudDiscoveryengineV1alphaDocument->id = '2cb73920-5929-4396-bea7-596eb10faaa2';
    $request->googleCloudDiscoveryengineV1alphaDocument->jsonData = 'dolorem';
    $request->googleCloudDiscoveryengineV1alphaDocument->name = 'Rose Rolfson';
    $request->googleCloudDiscoveryengineV1alphaDocument->parentDocumentId = 'nemo';
    $request->googleCloudDiscoveryengineV1alphaDocument->schemaId = 'minima';
    $request->googleCloudDiscoveryengineV1alphaDocument->structData = [
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

    if ($response->googleCloudDiscoveryengineV1alphaDocument !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaBigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaImportErrorConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaGcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaDocument;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDiscoveryengineV1alphaImportDocumentsRequest = new GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest();
    $request->googleCloudDiscoveryengineV1alphaImportDocumentsRequest->bigquerySource = new GoogleCloudDiscoveryengineV1alphaBigQuerySource();
    $request->googleCloudDiscoveryengineV1alphaImportDocumentsRequest->bigquerySource->dataSchema = 'quasi';
    $request->googleCloudDiscoveryengineV1alphaImportDocumentsRequest->bigquerySource->datasetId = 'error';
    $request->googleCloudDiscoveryengineV1alphaImportDocumentsRequest->bigquerySource->gcsStagingDir = 'temporibus';
    $request->googleCloudDiscoveryengineV1alphaImportDocumentsRequest->bigquerySource->partitionDate = new GoogleTypeDate();
    $request->googleCloudDiscoveryengineV1alphaImportDocumentsRequest->bigquerySource->partitionDate->day = 673660;
    $request->googleCloudDiscoveryengineV1alphaImportDocumentsRequest->bigquerySource->partitionDate->month = 96098;
    $request->googleCloudDiscoveryengineV1alphaImportDocumentsRequest->bigquerySource->partitionDate->year = 971945;
    $request->googleCloudDiscoveryengineV1alphaImportDocumentsRequest->bigquerySource->projectId = 'voluptatibus';
    $request->googleCloudDiscoveryengineV1alphaImportDocumentsRequest->bigquerySource->tableId = 'vero';
    $request->googleCloudDiscoveryengineV1alphaImportDocumentsRequest->errorConfig = new GoogleCloudDiscoveryengineV1alphaImportErrorConfig();
    $request->googleCloudDiscoveryengineV1alphaImportDocumentsRequest->errorConfig->gcsPrefix = 'nihil';
    $request->googleCloudDiscoveryengineV1alphaImportDocumentsRequest->gcsSource = new GoogleCloudDiscoveryengineV1alphaGcsSource();
    $request->googleCloudDiscoveryengineV1alphaImportDocumentsRequest->gcsSource->dataSchema = 'praesentium';
    $request->googleCloudDiscoveryengineV1alphaImportDocumentsRequest->gcsSource->inputUris = [
        'ipsa',
        'omnis',
        'voluptate',
        'cum',
    ];
    $request->googleCloudDiscoveryengineV1alphaImportDocumentsRequest->inlineSource = new GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource();
    $request->googleCloudDiscoveryengineV1alphaImportDocumentsRequest->inlineSource->documents = [
        new GoogleCloudDiscoveryengineV1alphaDocument(),
    ];
    $request->googleCloudDiscoveryengineV1alphaImportDocumentsRequest->reconciliationMode = GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum::RECONCILIATION_MODE_UNSPECIFIED;
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

    if ($response->googleCloudDiscoveryengineV1alphaListDocumentsResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaDocument;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDiscoveryengineV1alphaDocument = new GoogleCloudDiscoveryengineV1alphaDocument();
    $request->googleCloudDiscoveryengineV1alphaDocument->id = 'e91e450a-d2ab-4d44-a698-02d502a94bb4';
    $request->googleCloudDiscoveryengineV1alphaDocument->jsonData = 'delectus';
    $request->googleCloudDiscoveryengineV1alphaDocument->name = 'Ethel Roob';
    $request->googleCloudDiscoveryengineV1alphaDocument->parentDocumentId = 'provident';
    $request->googleCloudDiscoveryengineV1alphaDocument->schemaId = 'necessitatibus';
    $request->googleCloudDiscoveryengineV1alphaDocument->structData = [
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

    if ($response->googleCloudDiscoveryengineV1alphaDocument !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaPurgeDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPurgeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPurgeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDiscoveryengineV1alphaPurgeDocumentsRequest = new GoogleCloudDiscoveryengineV1alphaPurgeDocumentsRequest();
    $request->googleCloudDiscoveryengineV1alphaPurgeDocumentsRequest->filter = 'accusamus';
    $request->googleCloudDiscoveryengineV1alphaPurgeDocumentsRequest->force = false;
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaRecommendRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaUserEvent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaCustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaCompletionInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaDocumentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaMediaInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaPageInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaPanelInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaSearchInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaTransactionInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaUserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest = new GoogleCloudDiscoveryengineV1alphaRecommendRequest();
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->filter = 'vel';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->pageSize = 618809;
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->params = [
        'molestiae' => 'perferendis',
        'nihil' => 'magnam',
        'distinctio' => 'id',
    ];
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent = new GoogleCloudDiscoveryengineV1alphaUserEvent();
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->attributes = [
        'labore' => new GoogleCloudDiscoveryengineV1alphaCustomAttribute(),
        'suscipit' => new GoogleCloudDiscoveryengineV1alphaCustomAttribute(),
    ];
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->attributionToken = 'natus';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->completionInfo = new GoogleCloudDiscoveryengineV1alphaCompletionInfo();
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->completionInfo->selectedPosition = 749170;
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->completionInfo->selectedSuggestion = 'eum';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->directUserRequest = false;
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->documents = [
        new GoogleCloudDiscoveryengineV1alphaDocumentInfo(),
        new GoogleCloudDiscoveryengineV1alphaDocumentInfo(),
        new GoogleCloudDiscoveryengineV1alphaDocumentInfo(),
        new GoogleCloudDiscoveryengineV1alphaDocumentInfo(),
    ];
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->eventTime = 'aspernatur';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->eventType = 'architecto';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->filter = 'magnam';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->mediaInfo = new GoogleCloudDiscoveryengineV1alphaMediaInfo();
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->mediaInfo->mediaProgressDuration = 'et';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->mediaInfo->mediaProgressPercentage = 5699.65;
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->pageInfo = new GoogleCloudDiscoveryengineV1alphaPageInfo();
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->pageInfo->pageCategory = 'ullam';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->pageInfo->pageviewId = 'provident';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->pageInfo->referrerUri = 'quos';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->pageInfo->uri = 'https://angelic-pharmacist.org';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->panel = new GoogleCloudDiscoveryengineV1alphaPanelInfo();
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->panel->displayName = 'mollitia';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->panel->panelId = 'ad';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->panel->panelPosition = 431418;
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->panel->totalPanels = 221262;
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->promotionIds = [
        'odit',
        'nemo',
        'quasi',
        'iure',
    ];
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->searchInfo = new GoogleCloudDiscoveryengineV1alphaSearchInfo();
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->searchInfo->offset = 984043;
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->searchInfo->orderBy = 'debitis';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->searchInfo->searchQuery = 'eius';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->sessionId = 'maxime';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->tagIds = [
        'facilis',
        'in',
        'architecto',
    ];
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->transactionInfo = new GoogleCloudDiscoveryengineV1alphaTransactionInfo();
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->transactionInfo->cost = 995.69;
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->transactionInfo->currency = 'repudiandae';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->transactionInfo->discountValue = 3523.12;
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->transactionInfo->tax = 7142.42;
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->transactionInfo->transactionId = 'nihil';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->transactionInfo->value = 9988.48;
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->userInfo = new GoogleCloudDiscoveryengineV1alphaUserInfo();
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->userInfo->userAgent = 'quibusdam';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->userInfo->userId = 'sed';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userEvent->userPseudoId = 'saepe';
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->userLabels = [
        'accusantium' => 'consequuntur',
        'praesentium' => 'natus',
        'magni' => 'sunt',
        'quo' => 'illum',
    ];
    $request->googleCloudDiscoveryengineV1alphaRecommendRequest->validateOnly = false;
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

    if ($response->googleCloudDiscoveryengineV1alphaRecommendResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaBigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaImportErrorConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaGcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaUserEvent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaCustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaCompletionInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaDocumentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaMediaInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaPageInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaPanelInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaSearchInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaTransactionInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaUserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresUserEventsImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDiscoveryengineV1alphaImportUserEventsRequest = new GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest();
    $request->googleCloudDiscoveryengineV1alphaImportUserEventsRequest->bigquerySource = new GoogleCloudDiscoveryengineV1alphaBigQuerySource();
    $request->googleCloudDiscoveryengineV1alphaImportUserEventsRequest->bigquerySource->dataSchema = 'quis';
    $request->googleCloudDiscoveryengineV1alphaImportUserEventsRequest->bigquerySource->datasetId = 'totam';
    $request->googleCloudDiscoveryengineV1alphaImportUserEventsRequest->bigquerySource->gcsStagingDir = 'dignissimos';
    $request->googleCloudDiscoveryengineV1alphaImportUserEventsRequest->bigquerySource->partitionDate = new GoogleTypeDate();
    $request->googleCloudDiscoveryengineV1alphaImportUserEventsRequest->bigquerySource->partitionDate->day = 54338;
    $request->googleCloudDiscoveryengineV1alphaImportUserEventsRequest->bigquerySource->partitionDate->month = 338985;
    $request->googleCloudDiscoveryengineV1alphaImportUserEventsRequest->bigquerySource->partitionDate->year = 199996;
    $request->googleCloudDiscoveryengineV1alphaImportUserEventsRequest->bigquerySource->projectId = 'eos';
    $request->googleCloudDiscoveryengineV1alphaImportUserEventsRequest->bigquerySource->tableId = 'perferendis';
    $request->googleCloudDiscoveryengineV1alphaImportUserEventsRequest->errorConfig = new GoogleCloudDiscoveryengineV1alphaImportErrorConfig();
    $request->googleCloudDiscoveryengineV1alphaImportUserEventsRequest->errorConfig->gcsPrefix = 'dolores';
    $request->googleCloudDiscoveryengineV1alphaImportUserEventsRequest->gcsSource = new GoogleCloudDiscoveryengineV1alphaGcsSource();
    $request->googleCloudDiscoveryengineV1alphaImportUserEventsRequest->gcsSource->dataSchema = 'minus';
    $request->googleCloudDiscoveryengineV1alphaImportUserEventsRequest->gcsSource->inputUris = [
        'dolor',
        'vero',
    ];
    $request->googleCloudDiscoveryengineV1alphaImportUserEventsRequest->inlineSource = new GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource();
    $request->googleCloudDiscoveryengineV1alphaImportUserEventsRequest->inlineSource->userEvents = [
        new GoogleCloudDiscoveryengineV1alphaUserEvent(),
        new GoogleCloudDiscoveryengineV1alphaUserEvent(),
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaUserEvent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaCustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaCompletionInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaDocumentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaMediaInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaPageInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaPanelInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaSearchInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaTransactionInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1alphaUserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDiscoveryengineV1alphaUserEvent = new GoogleCloudDiscoveryengineV1alphaUserEvent();
    $request->googleCloudDiscoveryengineV1alphaUserEvent->attributes = [
        'rerum' => new GoogleCloudDiscoveryengineV1alphaCustomAttribute(),
        'adipisci' => new GoogleCloudDiscoveryengineV1alphaCustomAttribute(),
        'asperiores' => new GoogleCloudDiscoveryengineV1alphaCustomAttribute(),
    ];
    $request->googleCloudDiscoveryengineV1alphaUserEvent->attributionToken = 'earum';
    $request->googleCloudDiscoveryengineV1alphaUserEvent->completionInfo = new GoogleCloudDiscoveryengineV1alphaCompletionInfo();
    $request->googleCloudDiscoveryengineV1alphaUserEvent->completionInfo->selectedPosition = 267262;
    $request->googleCloudDiscoveryengineV1alphaUserEvent->completionInfo->selectedSuggestion = 'iste';
    $request->googleCloudDiscoveryengineV1alphaUserEvent->directUserRequest = false;
    $request->googleCloudDiscoveryengineV1alphaUserEvent->documents = [
        new GoogleCloudDiscoveryengineV1alphaDocumentInfo(),
        new GoogleCloudDiscoveryengineV1alphaDocumentInfo(),
        new GoogleCloudDiscoveryengineV1alphaDocumentInfo(),
    ];
    $request->googleCloudDiscoveryengineV1alphaUserEvent->eventTime = 'deleniti';
    $request->googleCloudDiscoveryengineV1alphaUserEvent->eventType = 'pariatur';
    $request->googleCloudDiscoveryengineV1alphaUserEvent->filter = 'provident';
    $request->googleCloudDiscoveryengineV1alphaUserEvent->mediaInfo = new GoogleCloudDiscoveryengineV1alphaMediaInfo();
    $request->googleCloudDiscoveryengineV1alphaUserEvent->mediaInfo->mediaProgressDuration = 'nobis';
    $request->googleCloudDiscoveryengineV1alphaUserEvent->mediaInfo->mediaProgressPercentage = 7301.22;
    $request->googleCloudDiscoveryengineV1alphaUserEvent->pageInfo = new GoogleCloudDiscoveryengineV1alphaPageInfo();
    $request->googleCloudDiscoveryengineV1alphaUserEvent->pageInfo->pageCategory = 'delectus';
    $request->googleCloudDiscoveryengineV1alphaUserEvent->pageInfo->pageviewId = 'quaerat';
    $request->googleCloudDiscoveryengineV1alphaUserEvent->pageInfo->referrerUri = 'quos';
    $request->googleCloudDiscoveryengineV1alphaUserEvent->pageInfo->uri = 'http://drafty-correspondent.biz';
    $request->googleCloudDiscoveryengineV1alphaUserEvent->panel = new GoogleCloudDiscoveryengineV1alphaPanelInfo();
    $request->googleCloudDiscoveryengineV1alphaUserEvent->panel->displayName = 'qui';
    $request->googleCloudDiscoveryengineV1alphaUserEvent->panel->panelId = 'ipsum';
    $request->googleCloudDiscoveryengineV1alphaUserEvent->panel->panelPosition = 944373;
    $request->googleCloudDiscoveryengineV1alphaUserEvent->panel->totalPanels = 569574;
    $request->googleCloudDiscoveryengineV1alphaUserEvent->promotionIds = [
        'voluptate',
        'dignissimos',
        'reiciendis',
    ];
    $request->googleCloudDiscoveryengineV1alphaUserEvent->searchInfo = new GoogleCloudDiscoveryengineV1alphaSearchInfo();
    $request->googleCloudDiscoveryengineV1alphaUserEvent->searchInfo->offset = 227414;
    $request->googleCloudDiscoveryengineV1alphaUserEvent->searchInfo->orderBy = 'dolorum';
    $request->googleCloudDiscoveryengineV1alphaUserEvent->searchInfo->searchQuery = 'numquam';
    $request->googleCloudDiscoveryengineV1alphaUserEvent->sessionId = 'veritatis';
    $request->googleCloudDiscoveryengineV1alphaUserEvent->tagIds = [
        'ipsa',
    ];
    $request->googleCloudDiscoveryengineV1alphaUserEvent->transactionInfo = new GoogleCloudDiscoveryengineV1alphaTransactionInfo();
    $request->googleCloudDiscoveryengineV1alphaUserEvent->transactionInfo->cost = 4344.17;
    $request->googleCloudDiscoveryengineV1alphaUserEvent->transactionInfo->currency = 'odio';
    $request->googleCloudDiscoveryengineV1alphaUserEvent->transactionInfo->discountValue = 3117.96;
    $request->googleCloudDiscoveryengineV1alphaUserEvent->transactionInfo->tax = 8810.05;
    $request->googleCloudDiscoveryengineV1alphaUserEvent->transactionInfo->transactionId = 'quidem';
    $request->googleCloudDiscoveryengineV1alphaUserEvent->transactionInfo->value = 9764.05;
    $request->googleCloudDiscoveryengineV1alphaUserEvent->userInfo = new GoogleCloudDiscoveryengineV1alphaUserInfo();
    $request->googleCloudDiscoveryengineV1alphaUserEvent->userInfo->userAgent = 'voluptas';
    $request->googleCloudDiscoveryengineV1alphaUserEvent->userInfo->userId = 'natus';
    $request->googleCloudDiscoveryengineV1alphaUserEvent->userPseudoId = 'eos';
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

    if ($response->googleCloudDiscoveryengineV1alphaUserEvent !== null) {
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
