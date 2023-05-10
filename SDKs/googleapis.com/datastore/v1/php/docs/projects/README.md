# projects

### Available Operations

* [datastoreProjectsAllocateIds](#datastoreprojectsallocateids) - Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
* [datastoreProjectsBeginTransaction](#datastoreprojectsbegintransaction) - Begins a new transaction.
* [datastoreProjectsCommit](#datastoreprojectscommit) - Commits a transaction, optionally creating, deleting or modifying some entities.
* [datastoreProjectsExport](#datastoreprojectsexport) - Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* [datastoreProjectsImport](#datastoreprojectsimport) - Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.
* [datastoreProjectsIndexesCreate](#datastoreprojectsindexescreate) - Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During index creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single property cannot be created.
* [datastoreProjectsIndexesDelete](#datastoreprojectsindexesdelete) - Deletes an existing index. An index can only be deleted if it is in a `READY` or `ERROR` state. On successful execution of the request, the index will be in a `DELETING` state. And on completion of the returned google.longrunning.Operation, the index will be removed. During index deletion, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, followed by calling delete again.
* [datastoreProjectsIndexesGet](#datastoreprojectsindexesget) - Gets an index.
* [datastoreProjectsIndexesList](#datastoreprojectsindexeslist) - Lists the indexes that match the specified filters. Datastore uses an eventually consistent query to fetch the list of indexes and may occasionally return stale results.
* [datastoreProjectsLookup](#datastoreprojectslookup) - Looks up entities by key.
* [datastoreProjectsOperationsCancel](#datastoreprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datastoreProjectsOperationsDelete](#datastoreprojectsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [datastoreProjectsOperationsGet](#datastoreprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [datastoreProjectsOperationsList](#datastoreprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datastoreProjectsReserveIds](#datastoreprojectsreserveids) - Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
* [datastoreProjectsRollback](#datastoreprojectsrollback) - Rolls back a transaction.
* [datastoreProjectsRunAggregationQuery](#datastoreprojectsrunaggregationquery) - Runs an aggregation query.
* [datastoreProjectsRunQuery](#datastoreprojectsrunquery) - Queries for entities.

## datastoreProjectsAllocateIds

Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsAllocateIdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AllocateIdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\PartitionId;
use \OpenAPI\OpenAPI\Models\Shared\PathElement;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsAllocateIdsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsAllocateIdsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsAllocateIdsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsAllocateIdsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->allocateIdsRequest = new AllocateIdsRequest();
    $request->allocateIdsRequest->databaseId = 'debitis';
    $request->allocateIdsRequest->keys = [
        new Key(),
    ];
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->prettyPrint = false;
    $request->projectId = 'voluptatum';
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new DatastoreProjectsAllocateIdsSecurity();
    $requestSecurity->option1 = new DatastoreProjectsAllocateIdsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsAllocateIds($request, $requestSecurity);

    if ($response->allocateIdsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsBeginTransaction

Begins a new transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsBeginTransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BeginTransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransactionOptions;
use \OpenAPI\OpenAPI\Models\Shared\ReadOnlyT;
use \OpenAPI\OpenAPI\Models\Shared\ReadWrite;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsBeginTransactionSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsBeginTransactionSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsBeginTransactionSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsBeginTransactionRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->beginTransactionRequest = new BeginTransactionRequest();
    $request->beginTransactionRequest->databaseId = 'temporibus';
    $request->beginTransactionRequest->transactionOptions = new TransactionOptions();
    $request->beginTransactionRequest->transactionOptions->readOnly = new ReadOnlyT();
    $request->beginTransactionRequest->transactionOptions->readOnly->readTime = 'ab';
    $request->beginTransactionRequest->transactionOptions->readWrite = new ReadWrite();
    $request->beginTransactionRequest->transactionOptions->readWrite->previousTransaction = 'quis';
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->fields = 'ipsam';
    $request->key = 'repellendus';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->projectId = 'quo';
    $request->quotaUser = 'odit';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'at';

    $requestSecurity = new DatastoreProjectsBeginTransactionSecurity();
    $requestSecurity->option1 = new DatastoreProjectsBeginTransactionSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsBeginTransaction($request, $requestSecurity);

    if ($response->beginTransactionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsCommit

Commits a transaction, optionally creating, deleting or modifying some entities.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsCommitRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommitRequest;
use \OpenAPI\OpenAPI\Models\Shared\CommitRequestModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Mutation;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\PartitionId;
use \OpenAPI\OpenAPI\Models\Shared\PathElement;
use \OpenAPI\OpenAPI\Models\Shared\Entity;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\ArrayValue;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\ValueNullValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransactionOptions;
use \OpenAPI\OpenAPI\Models\Shared\ReadOnlyT;
use \OpenAPI\OpenAPI\Models\Shared\ReadWrite;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsCommitSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsCommitSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsCommitSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsCommitRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->commitRequest = new CommitRequest();
    $request->commitRequest->databaseId = 'molestiae';
    $request->commitRequest->mode = CommitRequestModeEnum::NON_TRANSACTIONAL;
    $request->commitRequest->mutations = [
        new Mutation(),
        new Mutation(),
        new Mutation(),
        new Mutation(),
    ];
    $request->commitRequest->singleUseTransaction = new TransactionOptions();
    $request->commitRequest->singleUseTransaction->readOnly = new ReadOnlyT();
    $request->commitRequest->singleUseTransaction->readOnly->readTime = 'esse';
    $request->commitRequest->singleUseTransaction->readWrite = new ReadWrite();
    $request->commitRequest->singleUseTransaction->readWrite->previousTransaction = 'totam';
    $request->commitRequest->transaction = 'porro';
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nam';
    $request->fields = 'officia';
    $request->key = 'occaecati';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->projectId = 'deleniti';
    $request->quotaUser = 'hic';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new DatastoreProjectsCommitSecurity();
    $requestSecurity->option1 = new DatastoreProjectsCommitSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsCommit($request, $requestSecurity);

    if ($response->commitResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsExport

Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDatastoreAdminV1ExportEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDatastoreAdminV1EntityFilter;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsExportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsExportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsExportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsExportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleDatastoreAdminV1ExportEntitiesRequest = new GoogleDatastoreAdminV1ExportEntitiesRequest();
    $request->googleDatastoreAdminV1ExportEntitiesRequest->entityFilter = new GoogleDatastoreAdminV1EntityFilter();
    $request->googleDatastoreAdminV1ExportEntitiesRequest->entityFilter->kinds = [
        'molestiae',
        'modi',
    ];
    $request->googleDatastoreAdminV1ExportEntitiesRequest->entityFilter->namespaceIds = [
        'impedit',
    ];
    $request->googleDatastoreAdminV1ExportEntitiesRequest->labels = [
        'esse' => 'ipsum',
        'excepturi' => 'aspernatur',
        'perferendis' => 'ad',
    ];
    $request->googleDatastoreAdminV1ExportEntitiesRequest->outputUrlPrefix = 'natus';
    $request->accessToken = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'natus';
    $request->key = 'laboriosam';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->projectId = 'saepe';
    $request->quotaUser = 'fuga';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new DatastoreProjectsExportSecurity();
    $requestSecurity->option1 = new DatastoreProjectsExportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsExport($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsImport

Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDatastoreAdminV1ImportEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDatastoreAdminV1EntityFilter;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsImportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsImportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsImportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsImportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleDatastoreAdminV1ImportEntitiesRequest = new GoogleDatastoreAdminV1ImportEntitiesRequest();
    $request->googleDatastoreAdminV1ImportEntitiesRequest->entityFilter = new GoogleDatastoreAdminV1EntityFilter();
    $request->googleDatastoreAdminV1ImportEntitiesRequest->entityFilter->kinds = [
        'saepe',
        'quidem',
    ];
    $request->googleDatastoreAdminV1ImportEntitiesRequest->entityFilter->namespaceIds = [
        'ipsa',
    ];
    $request->googleDatastoreAdminV1ImportEntitiesRequest->inputUrl = 'reiciendis';
    $request->googleDatastoreAdminV1ImportEntitiesRequest->labels = [
        'mollitia' => 'laborum',
        'dolores' => 'dolorem',
        'corporis' => 'explicabo',
    ];
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'nemo';
    $request->key = 'minima';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->projectId = 'accusantium';
    $request->quotaUser = 'iure';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'doloribus';

    $requestSecurity = new DatastoreProjectsImportSecurity();
    $requestSecurity->option1 = new DatastoreProjectsImportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsImport($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsIndexesCreate

Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During index creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single property cannot be created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsIndexesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDatastoreAdminV1IndexInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDatastoreAdminV1IndexAncestorEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDatastoreAdminV1IndexedProperty;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDatastoreAdminV1IndexedPropertyDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsIndexesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsIndexesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsIndexesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsIndexesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleDatastoreAdminV1IndexInput = new GoogleDatastoreAdminV1IndexInput();
    $request->googleDatastoreAdminV1IndexInput->ancestor = GoogleDatastoreAdminV1IndexAncestorEnum::ANCESTOR_MODE_UNSPECIFIED;
    $request->googleDatastoreAdminV1IndexInput->kind = 'mollitia';
    $request->googleDatastoreAdminV1IndexInput->properties = [
        new GoogleDatastoreAdminV1IndexedProperty(),
    ];
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellat';
    $request->fields = 'mollitia';
    $request->key = 'occaecati';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->projectId = 'commodi';
    $request->quotaUser = 'quam';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new DatastoreProjectsIndexesCreateSecurity();
    $requestSecurity->option1 = new DatastoreProjectsIndexesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsIndexesCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsIndexesDelete

Deletes an existing index. An index can only be deleted if it is in a `READY` or `ERROR` state. On successful execution of the request, the index will be in a `DELETING` state. And on completion of the returned google.longrunning.Operation, the index will be removed. During index deletion, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, followed by calling delete again.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsIndexesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsIndexesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsIndexesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsIndexesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsIndexesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vitae';
    $request->fields = 'laborum';
    $request->indexId = 'animi';
    $request->key = 'enim';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->projectId = 'quo';
    $request->quotaUser = 'sequi';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new DatastoreProjectsIndexesDeleteSecurity();
    $requestSecurity->option1 = new DatastoreProjectsIndexesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsIndexesDelete($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsIndexesGet

Gets an index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsIndexesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsIndexesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsIndexesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsIndexesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsIndexesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->fields = 'error';
    $request->indexId = 'temporibus';
    $request->key = 'laborum';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->projectId = 'reiciendis';
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new DatastoreProjectsIndexesGetSecurity();
    $requestSecurity->option1 = new DatastoreProjectsIndexesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsIndexesGet($request, $requestSecurity);

    if ($response->googleDatastoreAdminV1Index !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsIndexesList

Lists the indexes that match the specified filters. Datastore uses an eventually consistent query to fetch the list of indexes and may occasionally return stale results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsIndexesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsIndexesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsIndexesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsIndexesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsIndexesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'voluptate';
    $request->filter = 'cum';
    $request->key = 'perferendis';
    $request->oauthToken = 'doloremque';
    $request->pageSize = 441711;
    $request->pageToken = 'ut';
    $request->prettyPrint = false;
    $request->projectId = 'maiores';
    $request->quotaUser = 'dicta';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'dolore';

    $requestSecurity = new DatastoreProjectsIndexesListSecurity();
    $requestSecurity->option1 = new DatastoreProjectsIndexesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsIndexesList($request, $requestSecurity);

    if ($response->googleDatastoreAdminV1ListIndexesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsLookup

Looks up entities by key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsLookupRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LookupRequest;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\PartitionId;
use \OpenAPI\OpenAPI\Models\Shared\PathElement;
use \OpenAPI\OpenAPI\Models\Shared\ReadOptions;
use \OpenAPI\OpenAPI\Models\Shared\TransactionOptions;
use \OpenAPI\OpenAPI\Models\Shared\ReadOnlyT;
use \OpenAPI\OpenAPI\Models\Shared\ReadWrite;
use \OpenAPI\OpenAPI\Models\Shared\ReadOptionsReadConsistencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsLookupSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsLookupSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsLookupSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsLookupRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->lookupRequest = new LookupRequest();
    $request->lookupRequest->databaseId = 'dicta';
    $request->lookupRequest->keys = [
        new Key(),
        new Key(),
        new Key(),
    ];
    $request->lookupRequest->readOptions = new ReadOptions();
    $request->lookupRequest->readOptions->newTransaction = new TransactionOptions();
    $request->lookupRequest->readOptions->newTransaction->readOnly = new ReadOnlyT();
    $request->lookupRequest->readOptions->newTransaction->readOnly->readTime = 'enim';
    $request->lookupRequest->readOptions->newTransaction->readWrite = new ReadWrite();
    $request->lookupRequest->readOptions->newTransaction->readWrite->previousTransaction = 'accusamus';
    $request->lookupRequest->readOptions->readConsistency = ReadOptionsReadConsistencyEnum::STRONG;
    $request->lookupRequest->readOptions->readTime = 'repudiandae';
    $request->lookupRequest->readOptions->transaction = 'quae';
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestias';
    $request->fields = 'excepturi';
    $request->key = 'pariatur';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->projectId = 'praesentium';
    $request->quotaUser = 'rem';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new DatastoreProjectsLookupSecurity();
    $requestSecurity->option1 = new DatastoreProjectsLookupSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsLookup($request, $requestSecurity);

    if ($response->lookupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsOperationsCancelSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsOperationsCancelSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsOperationsCancelSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'itaque';
    $request->fields = 'incidunt';
    $request->key = 'enim';
    $request->name = 'Monique Spinka';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new DatastoreProjectsOperationsCancelSecurity();
    $requestSecurity->option1 = new DatastoreProjectsOperationsCancelSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsOperationsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsOperationsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsOperationsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->fields = 'perferendis';
    $request->key = 'magni';
    $request->name = 'Vernon Abshire';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'tempore';

    $requestSecurity = new DatastoreProjectsOperationsDeleteSecurity();
    $requestSecurity->option1 = new DatastoreProjectsOperationsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsOperationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsOperationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsOperationsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'non';
    $request->fields = 'eligendi';
    $request->key = 'sint';
    $request->name = 'Sherri Tremblay';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new DatastoreProjectsOperationsGetSecurity();
    $requestSecurity->option1 = new DatastoreProjectsOperationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsOperationsGet($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsOperationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsOperationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsOperationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'in';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'rerum';
    $request->filter = 'dicta';
    $request->key = 'magnam';
    $request->name = 'Irving Jenkins';
    $request->oauthToken = 'accusamus';
    $request->pageSize = 249796;
    $request->pageToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new DatastoreProjectsOperationsListSecurity();
    $requestSecurity->option1 = new DatastoreProjectsOperationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsReserveIds

Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsReserveIdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReserveIdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\PartitionId;
use \OpenAPI\OpenAPI\Models\Shared\PathElement;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsReserveIdsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsReserveIdsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsReserveIdsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsReserveIdsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->reserveIdsRequest = new ReserveIdsRequest();
    $request->reserveIdsRequest->databaseId = 'provident';
    $request->reserveIdsRequest->keys = [
        new Key(),
        new Key(),
        new Key(),
    ];
    $request->accessToken = 'id';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deleniti';
    $request->fields = 'sapiente';
    $request->key = 'amet';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->projectId = 'nisi';
    $request->quotaUser = 'vel';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new DatastoreProjectsReserveIdsSecurity();
    $requestSecurity->option1 = new DatastoreProjectsReserveIdsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsReserveIds($request, $requestSecurity);

    if ($response->reserveIdsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsRollback

Rolls back a transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRollbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RollbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRollbackSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRollbackSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRollbackSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsRollbackRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->rollbackRequest = new RollbackRequest();
    $request->rollbackRequest->databaseId = 'perferendis';
    $request->rollbackRequest->transaction = 'nihil';
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'id';
    $request->fields = 'labore';
    $request->key = 'labore';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->projectId = 'natus';
    $request->quotaUser = 'nobis';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new DatastoreProjectsRollbackSecurity();
    $requestSecurity->option1 = new DatastoreProjectsRollbackSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsRollback($request, $requestSecurity);

    if ($response->rollbackResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsRunAggregationQuery

Runs an aggregation query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRunAggregationQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RunAggregationQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\AggregationQuery;
use \OpenAPI\OpenAPI\Models\Shared\Aggregation;
use \OpenAPI\OpenAPI\Models\Shared\Count;
use \OpenAPI\OpenAPI\Models\Shared\Query;
use \OpenAPI\OpenAPI\Models\Shared\PropertyReference;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilterOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropertyFilter;
use \OpenAPI\OpenAPI\Models\Shared\PropertyFilterOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\ArrayValue;
use \OpenAPI\OpenAPI\Models\Shared\Entity;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\PartitionId;
use \OpenAPI\OpenAPI\Models\Shared\PathElement;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\ValueNullValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\KindExpression;
use \OpenAPI\OpenAPI\Models\Shared\PropertyOrder;
use \OpenAPI\OpenAPI\Models\Shared\PropertyOrderDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Projection;
use \OpenAPI\OpenAPI\Models\Shared\GqlQuery;
use \OpenAPI\OpenAPI\Models\Shared\GqlQueryParameter;
use \OpenAPI\OpenAPI\Models\Shared\ReadOptions;
use \OpenAPI\OpenAPI\Models\Shared\TransactionOptions;
use \OpenAPI\OpenAPI\Models\Shared\ReadOnlyT;
use \OpenAPI\OpenAPI\Models\Shared\ReadWrite;
use \OpenAPI\OpenAPI\Models\Shared\ReadOptionsReadConsistencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRunAggregationQuerySecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRunAggregationQuerySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRunAggregationQuerySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsRunAggregationQueryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->runAggregationQueryRequest = new RunAggregationQueryRequest();
    $request->runAggregationQueryRequest->aggregationQuery = new AggregationQuery();
    $request->runAggregationQueryRequest->aggregationQuery->aggregations = [
        new Aggregation(),
    ];
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery = new Query();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->distinctOn = [
        new PropertyReference(),
        new PropertyReference(),
    ];
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->endCursor = 'et';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter = new Filter();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->compositeFilter = new CompositeFilter();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->compositeFilter->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->compositeFilter->op = CompositeFilterOpEnum::AND;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter = new PropertyFilter();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->op = PropertyFilterOpEnum::EQUAL;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->property = new PropertyReference();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->property->name = 'Kirk Bartoletti';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value = new Value();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->arrayValue = new ArrayValue();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->arrayValue->values = [
        new Value(),
        new Value(),
        new Value(),
    ];
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->blobValue = 'ad';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->booleanValue = false;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->doubleValue = 4314.18;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->entityValue = new Entity();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->entityValue->key = new Key();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->entityValue->key->partitionId = new PartitionId();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->entityValue->key->partitionId->databaseId = 'dolor';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->entityValue->key->partitionId->namespaceId = 'necessitatibus';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->entityValue->key->partitionId->projectId = 'odit';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->entityValue->key->path = [
        new PathElement(),
        new PathElement(),
    ];
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->entityValue->properties = [
        'iure' => new Value(),
    ];
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->excludeFromIndexes = false;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->geoPointValue = new LatLng();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->geoPointValue->latitude = 9840.43;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->geoPointValue->longitude = 8919.24;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->integerValue = 'eius';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->keyValue = new Key();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->keyValue->partitionId = new PartitionId();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->keyValue->partitionId->databaseId = 'maxime';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->keyValue->partitionId->namespaceId = 'deleniti';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->keyValue->partitionId->projectId = 'facilis';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->keyValue->path = [
        new PathElement(),
        new PathElement(),
    ];
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->meaning = 100226;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->nullValue = ValueNullValueEnum::NULL_VALUE;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->stringValue = 'architecto';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->timestampValue = 'repudiandae';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->kind = [
        new KindExpression(),
        new KindExpression(),
    ];
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->limit = 714242;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->offset = 469249;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->order = [
        new PropertyOrder(),
        new PropertyOrder(),
        new PropertyOrder(),
        new PropertyOrder(),
    ];
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->projection = [
        new Projection(),
        new Projection(),
        new Projection(),
        new Projection(),
    ];
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->startCursor = 'sed';
    $request->runAggregationQueryRequest->databaseId = 'saepe';
    $request->runAggregationQueryRequest->gqlQuery = new GqlQuery();
    $request->runAggregationQueryRequest->gqlQuery->allowLiterals = false;
    $request->runAggregationQueryRequest->gqlQuery->namedBindings = [
        'accusantium' => new GqlQueryParameter(),
        'consequuntur' => new GqlQueryParameter(),
        'praesentium' => new GqlQueryParameter(),
        'natus' => new GqlQueryParameter(),
    ];
    $request->runAggregationQueryRequest->gqlQuery->positionalBindings = [
        new GqlQueryParameter(),
    ];
    $request->runAggregationQueryRequest->gqlQuery->queryString = 'sunt';
    $request->runAggregationQueryRequest->partitionId = new PartitionId();
    $request->runAggregationQueryRequest->partitionId->databaseId = 'quo';
    $request->runAggregationQueryRequest->partitionId->namespaceId = 'illum';
    $request->runAggregationQueryRequest->partitionId->projectId = 'pariatur';
    $request->runAggregationQueryRequest->readOptions = new ReadOptions();
    $request->runAggregationQueryRequest->readOptions->newTransaction = new TransactionOptions();
    $request->runAggregationQueryRequest->readOptions->newTransaction->readOnly = new ReadOnlyT();
    $request->runAggregationQueryRequest->readOptions->newTransaction->readOnly->readTime = 'maxime';
    $request->runAggregationQueryRequest->readOptions->newTransaction->readWrite = new ReadWrite();
    $request->runAggregationQueryRequest->readOptions->newTransaction->readWrite->previousTransaction = 'ea';
    $request->runAggregationQueryRequest->readOptions->readConsistency = ReadOptionsReadConsistencyEnum::STRONG;
    $request->runAggregationQueryRequest->readOptions->readTime = 'odit';
    $request->runAggregationQueryRequest->readOptions->transaction = 'ea';
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'quidem';
    $request->key = 'ipsam';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->projectId = 'autem';
    $request->quotaUser = 'nam';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new DatastoreProjectsRunAggregationQuerySecurity();
    $requestSecurity->option1 = new DatastoreProjectsRunAggregationQuerySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsRunAggregationQuery($request, $requestSecurity);

    if ($response->runAggregationQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsRunQuery

Queries for entities.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRunQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RunQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GqlQuery;
use \OpenAPI\OpenAPI\Models\Shared\GqlQueryParameter;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\ArrayValue;
use \OpenAPI\OpenAPI\Models\Shared\Entity;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\PartitionId;
use \OpenAPI\OpenAPI\Models\Shared\PathElement;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\ValueNullValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\Query;
use \OpenAPI\OpenAPI\Models\Shared\PropertyReference;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilterOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropertyFilter;
use \OpenAPI\OpenAPI\Models\Shared\PropertyFilterOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\KindExpression;
use \OpenAPI\OpenAPI\Models\Shared\PropertyOrder;
use \OpenAPI\OpenAPI\Models\Shared\PropertyOrderDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Projection;
use \OpenAPI\OpenAPI\Models\Shared\ReadOptions;
use \OpenAPI\OpenAPI\Models\Shared\TransactionOptions;
use \OpenAPI\OpenAPI\Models\Shared\ReadOnlyT;
use \OpenAPI\OpenAPI\Models\Shared\ReadWrite;
use \OpenAPI\OpenAPI\Models\Shared\ReadOptionsReadConsistencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRunQuerySecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRunQuerySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRunQuerySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsRunQueryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->runQueryRequest = new RunQueryRequest();
    $request->runQueryRequest->databaseId = 'voluptatibus';
    $request->runQueryRequest->gqlQuery = new GqlQuery();
    $request->runQueryRequest->gqlQuery->allowLiterals = false;
    $request->runQueryRequest->gqlQuery->namedBindings = [
        'fugiat' => new GqlQueryParameter(),
    ];
    $request->runQueryRequest->gqlQuery->positionalBindings = [
        new GqlQueryParameter(),
    ];
    $request->runQueryRequest->gqlQuery->queryString = 'aut';
    $request->runQueryRequest->partitionId = new PartitionId();
    $request->runQueryRequest->partitionId->databaseId = 'cumque';
    $request->runQueryRequest->partitionId->namespaceId = 'corporis';
    $request->runQueryRequest->partitionId->projectId = 'hic';
    $request->runQueryRequest->query = new Query();
    $request->runQueryRequest->query->distinctOn = [
        new PropertyReference(),
        new PropertyReference(),
        new PropertyReference(),
    ];
    $request->runQueryRequest->query->endCursor = 'nobis';
    $request->runQueryRequest->query->filter = new Filter();
    $request->runQueryRequest->query->filter->compositeFilter = new CompositeFilter();
    $request->runQueryRequest->query->filter->compositeFilter->filters = [
        new Filter(),
    ];
    $request->runQueryRequest->query->filter->compositeFilter->op = CompositeFilterOpEnum::AND;
    $request->runQueryRequest->query->filter->propertyFilter = new PropertyFilter();
    $request->runQueryRequest->query->filter->propertyFilter->op = PropertyFilterOpEnum::EQUAL;
    $request->runQueryRequest->query->filter->propertyFilter->property = new PropertyReference();
    $request->runQueryRequest->query->filter->propertyFilter->property->name = 'Cynthia Hayes';
    $request->runQueryRequest->query->filter->propertyFilter->value = new Value();
    $request->runQueryRequest->query->filter->propertyFilter->value->arrayValue = new ArrayValue();
    $request->runQueryRequest->query->filter->propertyFilter->value->arrayValue->values = [
        new Value(),
    ];
    $request->runQueryRequest->query->filter->propertyFilter->value->blobValue = 'dolores';
    $request->runQueryRequest->query->filter->propertyFilter->value->booleanValue = false;
    $request->runQueryRequest->query->filter->propertyFilter->value->doubleValue = 7936.98;
    $request->runQueryRequest->query->filter->propertyFilter->value->entityValue = new Entity();
    $request->runQueryRequest->query->filter->propertyFilter->value->entityValue->key = new Key();
    $request->runQueryRequest->query->filter->propertyFilter->value->entityValue->key->partitionId = new PartitionId();
    $request->runQueryRequest->query->filter->propertyFilter->value->entityValue->key->partitionId->databaseId = 'quam';
    $request->runQueryRequest->query->filter->propertyFilter->value->entityValue->key->partitionId->namespaceId = 'dolor';
    $request->runQueryRequest->query->filter->propertyFilter->value->entityValue->key->partitionId->projectId = 'vero';
    $request->runQueryRequest->query->filter->propertyFilter->value->entityValue->key->path = [
        new PathElement(),
        new PathElement(),
    ];
    $request->runQueryRequest->query->filter->propertyFilter->value->entityValue->properties = [
        'recusandae' => new Value(),
        'omnis' => new Value(),
        'facilis' => new Value(),
        'perspiciatis' => new Value(),
    ];
    $request->runQueryRequest->query->filter->propertyFilter->value->excludeFromIndexes = false;
    $request->runQueryRequest->query->filter->propertyFilter->value->geoPointValue = new LatLng();
    $request->runQueryRequest->query->filter->propertyFilter->value->geoPointValue->latitude = 318.38;
    $request->runQueryRequest->query->filter->propertyFilter->value->geoPointValue->longitude = 7836.45;
    $request->runQueryRequest->query->filter->propertyFilter->value->integerValue = 'consequuntur';
    $request->runQueryRequest->query->filter->propertyFilter->value->keyValue = new Key();
    $request->runQueryRequest->query->filter->propertyFilter->value->keyValue->partitionId = new PartitionId();
    $request->runQueryRequest->query->filter->propertyFilter->value->keyValue->partitionId->databaseId = 'blanditiis';
    $request->runQueryRequest->query->filter->propertyFilter->value->keyValue->partitionId->namespaceId = 'error';
    $request->runQueryRequest->query->filter->propertyFilter->value->keyValue->partitionId->projectId = 'eaque';
    $request->runQueryRequest->query->filter->propertyFilter->value->keyValue->path = [
        new PathElement(),
        new PathElement(),
        new PathElement(),
    ];
    $request->runQueryRequest->query->filter->propertyFilter->value->meaning = 699098;
    $request->runQueryRequest->query->filter->propertyFilter->value->nullValue = ValueNullValueEnum::NULL_VALUE;
    $request->runQueryRequest->query->filter->propertyFilter->value->stringValue = 'adipisci';
    $request->runQueryRequest->query->filter->propertyFilter->value->timestampValue = 'asperiores';
    $request->runQueryRequest->query->kind = [
        new KindExpression(),
        new KindExpression(),
        new KindExpression(),
        new KindExpression(),
    ];
    $request->runQueryRequest->query->limit = 267262;
    $request->runQueryRequest->query->offset = 613966;
    $request->runQueryRequest->query->order = [
        new PropertyOrder(),
        new PropertyOrder(),
        new PropertyOrder(),
    ];
    $request->runQueryRequest->query->projection = [
        new Projection(),
        new Projection(),
        new Projection(),
    ];
    $request->runQueryRequest->query->startCursor = 'pariatur';
    $request->runQueryRequest->readOptions = new ReadOptions();
    $request->runQueryRequest->readOptions->newTransaction = new TransactionOptions();
    $request->runQueryRequest->readOptions->newTransaction->readOnly = new ReadOnlyT();
    $request->runQueryRequest->readOptions->newTransaction->readOnly->readTime = 'provident';
    $request->runQueryRequest->readOptions->newTransaction->readWrite = new ReadWrite();
    $request->runQueryRequest->readOptions->newTransaction->readWrite->previousTransaction = 'nobis';
    $request->runQueryRequest->readOptions->readConsistency = ReadOptionsReadConsistencyEnum::EVENTUAL;
    $request->runQueryRequest->readOptions->readTime = 'delectus';
    $request->runQueryRequest->readOptions->transaction = 'quaerat';
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'dolorem';
    $request->key = 'dolor';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->projectId = 'ipsum';
    $request->quotaUser = 'hic';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new DatastoreProjectsRunQuerySecurity();
    $requestSecurity->option1 = new DatastoreProjectsRunQuerySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsRunQuery($request, $requestSecurity);

    if ($response->runQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
