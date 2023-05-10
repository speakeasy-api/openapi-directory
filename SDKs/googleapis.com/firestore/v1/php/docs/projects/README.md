# projects

### Available Operations

* [firestoreProjectsDatabasesCollectionGroupsFieldsList](#firestoreprojectsdatabasescollectiongroupsfieldslist) - Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false` .
* [firestoreProjectsDatabasesCollectionGroupsIndexesCreate](#firestoreprojectsdatabasescollectiongroupsindexescreate) - Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
* [firestoreProjectsDatabasesCollectionGroupsIndexesList](#firestoreprojectsdatabasescollectiongroupsindexeslist) - Lists composite indexes.
* [firestoreProjectsDatabasesCreate](#firestoreprojectsdatabasescreate) - Create a database.
* [firestoreProjectsDatabasesDocumentsBatchGet](#firestoreprojectsdatabasesdocumentsbatchget) - Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested.
* [firestoreProjectsDatabasesDocumentsBatchWrite](#firestoreprojectsdatabasesdocumentsbatchwrite) - Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.
* [firestoreProjectsDatabasesDocumentsBeginTransaction](#firestoreprojectsdatabasesdocumentsbegintransaction) - Starts a new transaction.
* [firestoreProjectsDatabasesDocumentsCommit](#firestoreprojectsdatabasesdocumentscommit) - Commits a transaction, while optionally updating documents.
* [firestoreProjectsDatabasesDocumentsCreateDocument](#firestoreprojectsdatabasesdocumentscreatedocument) - Creates a new document.
* [firestoreProjectsDatabasesDocumentsListCollectionIds](#firestoreprojectsdatabasesdocumentslistcollectionids) - Lists all the collection IDs underneath a document.
* [firestoreProjectsDatabasesDocumentsListDocuments](#firestoreprojectsdatabasesdocumentslistdocuments) - Lists documents.
* [firestoreProjectsDatabasesDocumentsListen](#firestoreprojectsdatabasesdocumentslisten) - Listens to changes. This method is only available via gRPC or WebChannel (not REST).
* [firestoreProjectsDatabasesDocumentsPartitionQuery](#firestoreprojectsdatabasesdocumentspartitionquery) - Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.
* [firestoreProjectsDatabasesDocumentsPatch](#firestoreprojectsdatabasesdocumentspatch) - Updates or inserts a document.
* [firestoreProjectsDatabasesDocumentsRollback](#firestoreprojectsdatabasesdocumentsrollback) - Rolls back a transaction.
* [firestoreProjectsDatabasesDocumentsRunAggregationQuery](#firestoreprojectsdatabasesdocumentsrunaggregationquery) - Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ```
* [firestoreProjectsDatabasesDocumentsRunQuery](#firestoreprojectsdatabasesdocumentsrunquery) - Runs a query.
* [firestoreProjectsDatabasesDocumentsWrite](#firestoreprojectsdatabasesdocumentswrite) - Streams batches of document updates and deletes, in order. This method is only available via gRPC or WebChannel (not REST).
* [firestoreProjectsDatabasesExportDocuments](#firestoreprojectsdatabasesexportdocuments) - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage. For more details on export behavior and output format, refer to: https://cloud.google.com/firestore/docs/manage-data/export-import
* [firestoreProjectsDatabasesImportDocuments](#firestoreprojectsdatabasesimportdocuments) - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
* [firestoreProjectsDatabasesList](#firestoreprojectsdatabaseslist) - List all the databases in the project.
* [firestoreProjectsDatabasesOperationsCancel](#firestoreprojectsdatabasesoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [firestoreProjectsDatabasesOperationsDelete](#firestoreprojectsdatabasesoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [firestoreProjectsDatabasesOperationsList](#firestoreprojectsdatabasesoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [firestoreProjectsLocationsGet](#firestoreprojectslocationsget) - Gets information about a location.
* [firestoreProjectsLocationsList](#firestoreprojectslocationslist) - Lists information about the supported locations for this service.

## firestoreProjectsDatabasesCollectionGroupsFieldsList

Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false` .

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->filter = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->pageSize = 528895;
    $request->pageToken = 'iusto';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesCollectionGroupsFieldsList($request, $requestSecurity);

    if ($response->googleFirestoreAdminV1ListFieldsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesCollectionGroupsIndexesCreate

Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1Index;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1IndexApiScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1IndexField;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1IndexFieldArrayConfigEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1IndexFieldOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1IndexQueryScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1IndexStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirestoreAdminV1Index = new GoogleFirestoreAdminV1Index();
    $request->googleFirestoreAdminV1Index->apiScope = GoogleFirestoreAdminV1IndexApiScopeEnum::ANY_API;
    $request->googleFirestoreAdminV1Index->fields = [
        new GoogleFirestoreAdminV1IndexField(),
    ];
    $request->googleFirestoreAdminV1Index->name = 'Christopher Hills';
    $request->googleFirestoreAdminV1Index->queryScope = GoogleFirestoreAdminV1IndexQueryScopeEnum::COLLECTION_RECURSIVE;
    $request->googleFirestoreAdminV1Index->state = GoogleFirestoreAdminV1IndexStateEnum::STATE_UNSPECIFIED;
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'molestiae';
    $request->key = 'quod';
    $request->oauthToken = 'quod';
    $request->parent = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesCollectionGroupsIndexesCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesCollectionGroupsIndexesList

Lists composite indexes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'fugit';
    $request->filter = 'deleniti';
    $request->key = 'hic';
    $request->oauthToken = 'optio';
    $request->pageSize = 521848;
    $request->pageToken = 'beatae';
    $request->parent = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesCollectionGroupsIndexesList($request, $requestSecurity);

    if ($response->googleFirestoreAdminV1ListIndexesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesCreate

Create a database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1DatabaseInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1DatabaseDeleteProtectionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1DatabaseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleFirestoreAdminV1DatabaseInput = new GoogleFirestoreAdminV1DatabaseInput();
    $request->googleFirestoreAdminV1DatabaseInput->appEngineIntegrationMode = GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum::DISABLED;
    $request->googleFirestoreAdminV1DatabaseInput->concurrencyMode = GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum::OPTIMISTIC;
    $request->googleFirestoreAdminV1DatabaseInput->deleteProtectionState = GoogleFirestoreAdminV1DatabaseDeleteProtectionStateEnum::DELETE_PROTECTION_STATE_UNSPECIFIED;
    $request->googleFirestoreAdminV1DatabaseInput->etag = 'excepturi';
    $request->googleFirestoreAdminV1DatabaseInput->locationId = 'aspernatur';
    $request->googleFirestoreAdminV1DatabaseInput->name = 'Cathy Mosciski';
    $request->googleFirestoreAdminV1DatabaseInput->type = GoogleFirestoreAdminV1DatabaseTypeEnum::DATABASE_TYPE_UNSPECIFIED;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->databaseId = 'saepe';
    $request->fields = 'fuga';
    $request->key = 'in';
    $request->oauthToken = 'corporis';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new FirestoreProjectsDatabasesCreateSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesDocumentsBatchGet

Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentMask;
use \OpenAPI\OpenAPI\Models\Shared\TransactionOptions;
use \OpenAPI\OpenAPI\Models\Shared\ReadOnlyT;
use \OpenAPI\OpenAPI\Models\Shared\ReadWrite;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsBatchGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesDocumentsBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->batchGetDocumentsRequest = new BatchGetDocumentsRequest();
    $request->batchGetDocumentsRequest->documents = [
        'reiciendis',
    ];
    $request->batchGetDocumentsRequest->mask = new DocumentMask();
    $request->batchGetDocumentsRequest->mask->fieldPaths = [
        'mollitia',
        'laborum',
        'dolores',
    ];
    $request->batchGetDocumentsRequest->newTransaction = new TransactionOptions();
    $request->batchGetDocumentsRequest->newTransaction->readOnly = new ReadOnlyT();
    $request->batchGetDocumentsRequest->newTransaction->readOnly->readTime = 'dolorem';
    $request->batchGetDocumentsRequest->newTransaction->readWrite = new ReadWrite();
    $request->batchGetDocumentsRequest->newTransaction->readWrite->retryTransaction = 'corporis';
    $request->batchGetDocumentsRequest->readTime = 'explicabo';
    $request->batchGetDocumentsRequest->transaction = 'nobis';
    $request->accessToken = 'enim';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nemo';
    $request->database = 'minima';
    $request->fields = 'excepturi';
    $request->key = 'accusantium';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new FirestoreProjectsDatabasesDocumentsBatchGetSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesDocumentsBatchGet($request, $requestSecurity);

    if ($response->batchGetDocumentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesDocumentsBatchWrite

Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsBatchWriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchWriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\Write;
use \OpenAPI\OpenAPI\Models\Shared\Precondition;
use \OpenAPI\OpenAPI\Models\Shared\DocumentTransform;
use \OpenAPI\OpenAPI\Models\Shared\FieldTransform;
use \OpenAPI\OpenAPI\Models\Shared\ArrayValue;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\MapValue;
use \OpenAPI\OpenAPI\Models\Shared\ValueNullValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldTransformSetToServerValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\Document;
use \OpenAPI\OpenAPI\Models\Shared\DocumentMask;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsBatchWriteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesDocumentsBatchWriteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->batchWriteRequest = new BatchWriteRequest();
    $request->batchWriteRequest->labels = [
        'dolorem' => 'culpa',
        'consequuntur' => 'repellat',
        'mollitia' => 'occaecati',
    ];
    $request->batchWriteRequest->writes = [
        new Write(),
        new Write(),
    ];
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->database = 'velit';
    $request->fields = 'error';
    $request->key = 'quia';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'vitae';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'animi';

    $requestSecurity = new FirestoreProjectsDatabasesDocumentsBatchWriteSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesDocumentsBatchWrite($request, $requestSecurity);

    if ($response->batchWriteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesDocumentsBeginTransaction

Starts a new transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsBeginTransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BeginTransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransactionOptions;
use \OpenAPI\OpenAPI\Models\Shared\ReadOnlyT;
use \OpenAPI\OpenAPI\Models\Shared\ReadWrite;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsBeginTransactionSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesDocumentsBeginTransactionRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->beginTransactionRequest = new BeginTransactionRequest();
    $request->beginTransactionRequest->options = new TransactionOptions();
    $request->beginTransactionRequest->options->readOnly = new ReadOnlyT();
    $request->beginTransactionRequest->options->readOnly->readTime = 'odit';
    $request->beginTransactionRequest->options->readWrite = new ReadWrite();
    $request->beginTransactionRequest->options->readWrite->retryTransaction = 'quo';
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->database = 'id';
    $request->fields = 'possimus';
    $request->key = 'aut';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new FirestoreProjectsDatabasesDocumentsBeginTransactionSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesDocumentsBeginTransaction($request, $requestSecurity);

    if ($response->beginTransactionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesDocumentsCommit

Commits a transaction, while optionally updating documents.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsCommitRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommitRequest;
use \OpenAPI\OpenAPI\Models\Shared\Write;
use \OpenAPI\OpenAPI\Models\Shared\Precondition;
use \OpenAPI\OpenAPI\Models\Shared\DocumentTransform;
use \OpenAPI\OpenAPI\Models\Shared\FieldTransform;
use \OpenAPI\OpenAPI\Models\Shared\ArrayValue;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\MapValue;
use \OpenAPI\OpenAPI\Models\Shared\ValueNullValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldTransformSetToServerValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\Document;
use \OpenAPI\OpenAPI\Models\Shared\DocumentMask;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsCommitSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsCommitSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsCommitSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesDocumentsCommitRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->commitRequest = new CommitRequest();
    $request->commitRequest->transaction = 'reiciendis';
    $request->commitRequest->writes = [
        new Write(),
        new Write(),
        new Write(),
        new Write(),
    ];
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'praesentium';
    $request->database = 'voluptatibus';
    $request->fields = 'ipsa';
    $request->key = 'omnis';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'doloremque';

    $requestSecurity = new FirestoreProjectsDatabasesDocumentsCommitSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesDocumentsCommitSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesDocumentsCommit($request, $requestSecurity);

    if ($response->commitResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesDocumentsCreateDocument

Creates a new document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsCreateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Document;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\ArrayValue;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\MapValue;
use \OpenAPI\OpenAPI\Models\Shared\ValueNullValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsCreateDocumentSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesDocumentsCreateDocumentRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->document = new Document();
    $request->document->createTime = 'ut';
    $request->document->fields = [
        'dicta' => new Value(),
        'corporis' => new Value(),
        'dolore' => new Value(),
        'iusto' => new Value(),
    ];
    $request->document->name = 'Maryann Hamill';
    $request->document->updateTime = 'repudiandae';
    $request->accessToken = 'quae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quidem';
    $request->collectionId = 'molestias';
    $request->documentId = 'excepturi';
    $request->fields = 'pariatur';
    $request->key = 'modi';
    $request->maskFieldPaths = [
        'rem',
        'voluptates',
        'quasi',
    ];
    $request->oauthToken = 'repudiandae';
    $request->parent = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'incidunt';

    $requestSecurity = new FirestoreProjectsDatabasesDocumentsCreateDocumentSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesDocumentsCreateDocument($request, $requestSecurity);

    if ($response->document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesDocumentsListCollectionIds

Lists all the collection IDs underneath a document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsListCollectionIdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListCollectionIdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesDocumentsListCollectionIdsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->listCollectionIdsRequest = new ListCollectionIdsRequest();
    $request->listCollectionIdsRequest->pageSize = 9356;
    $request->listCollectionIdsRequest->pageToken = 'est';
    $request->listCollectionIdsRequest->readTime = 'quibusdam';
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'distinctio';
    $request->fields = 'quibusdam';
    $request->key = 'labore';
    $request->oauthToken = 'modi';
    $request->parent = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesDocumentsListCollectionIds($request, $requestSecurity);

    if ($response->listCollectionIdsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesDocumentsListDocuments

Lists documents.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsListDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsListDocumentsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesDocumentsListDocumentsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magni';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->collectionId = 'alias';
    $request->fields = 'fugit';
    $request->key = 'dolorum';
    $request->maskFieldPaths = [
        'tempora',
        'facilis',
        'tempore',
    ];
    $request->oauthToken = 'labore';
    $request->orderBy = 'delectus';
    $request->pageSize = 433288;
    $request->pageToken = 'non';
    $request->parent = 'eligendi';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->readTime = 'aliquid';
    $request->showMissing = false;
    $request->transaction = 'provident';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new FirestoreProjectsDatabasesDocumentsListDocumentsSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesDocumentsListDocuments($request, $requestSecurity);

    if ($response->listDocumentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesDocumentsListen

Listens to changes. This method is only available via gRPC or WebChannel (not REST).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsListenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListenRequest;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Shared\DocumentsTarget;
use \OpenAPI\OpenAPI\Models\Shared\QueryTarget;
use \OpenAPI\OpenAPI\Models\Shared\StructuredQuery;
use \OpenAPI\OpenAPI\Models\Shared\Cursor;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\ArrayValue;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\MapValue;
use \OpenAPI\OpenAPI\Models\Shared\ValueNullValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\CollectionSelector;
use \OpenAPI\OpenAPI\Models\Shared\Order;
use \OpenAPI\OpenAPI\Models\Shared\OrderDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldReference;
use \OpenAPI\OpenAPI\Models\Shared\Projection;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilterOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldFilter;
use \OpenAPI\OpenAPI\Models\Shared\FieldFilterOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\UnaryFilter;
use \OpenAPI\OpenAPI\Models\Shared\UnaryFilterOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsListenSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsListenSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsListenSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesDocumentsListenRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->listenRequest = new ListenRequest();
    $request->listenRequest->addTarget = new Target();
    $request->listenRequest->addTarget->documents = new DocumentsTarget();
    $request->listenRequest->addTarget->documents->documents = [
        'debitis',
    ];
    $request->listenRequest->addTarget->once = false;
    $request->listenRequest->addTarget->query = new QueryTarget();
    $request->listenRequest->addTarget->query->parent = 'a';
    $request->listenRequest->addTarget->query->structuredQuery = new StructuredQuery();
    $request->listenRequest->addTarget->query->structuredQuery->endAt = new Cursor();
    $request->listenRequest->addTarget->query->structuredQuery->endAt->before = false;
    $request->listenRequest->addTarget->query->structuredQuery->endAt->values = [
        new Value(),
        new Value(),
        new Value(),
    ];
    $request->listenRequest->addTarget->query->structuredQuery->from = [
        new CollectionSelector(),
        new CollectionSelector(),
    ];
    $request->listenRequest->addTarget->query->structuredQuery->limit = 449198;
    $request->listenRequest->addTarget->query->structuredQuery->offset = 846409;
    $request->listenRequest->addTarget->query->structuredQuery->orderBy = [
        new Order(),
        new Order(),
        new Order(),
        new Order(),
    ];
    $request->listenRequest->addTarget->query->structuredQuery->select = new Projection();
    $request->listenRequest->addTarget->query->structuredQuery->select->fields = [
        new FieldReference(),
        new FieldReference(),
        new FieldReference(),
    ];
    $request->listenRequest->addTarget->query->structuredQuery->startAt = new Cursor();
    $request->listenRequest->addTarget->query->structuredQuery->startAt->before = false;
    $request->listenRequest->addTarget->query->structuredQuery->startAt->values = [
        new Value(),
    ];
    $request->listenRequest->addTarget->query->structuredQuery->where = new Filter();
    $request->listenRequest->addTarget->query->structuredQuery->where->compositeFilter = new CompositeFilter();
    $request->listenRequest->addTarget->query->structuredQuery->where->compositeFilter->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->listenRequest->addTarget->query->structuredQuery->where->compositeFilter->op = CompositeFilterOpEnum::OR;
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter = new FieldFilter();
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->field = new FieldReference();
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->field->fieldPath = 'facere';
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->op = FieldFilterOpEnum::GREATER_THAN_OR_EQUAL;
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value = new Value();
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->arrayValue = new ArrayValue();
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->arrayValue->values = [
        new Value(),
        new Value(),
    ];
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->booleanValue = false;
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->bytesValue = 'laborum';
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->doubleValue = 8811.04;
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->geoPointValue = new LatLng();
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->geoPointValue->latitude = 2497.96;
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->geoPointValue->longitude = 5812.73;
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->integerValue = 'enim';
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->mapValue = new MapValue();
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->mapValue->fields = [
        'delectus' => new Value(),
        'quidem' => new Value(),
        'provident' => new Value(),
        'nam' => new Value(),
    ];
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->nullValue = ValueNullValueEnum::NULL_VALUE;
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->referenceValue = 'id';
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->stringValue = 'blanditiis';
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->timestampValue = 'deleniti';
    $request->listenRequest->addTarget->query->structuredQuery->where->unaryFilter = new UnaryFilter();
    $request->listenRequest->addTarget->query->structuredQuery->where->unaryFilter->field = new FieldReference();
    $request->listenRequest->addTarget->query->structuredQuery->where->unaryFilter->field->fieldPath = 'sapiente';
    $request->listenRequest->addTarget->query->structuredQuery->where->unaryFilter->op = UnaryFilterOpEnum::IS_NAN;
    $request->listenRequest->addTarget->readTime = 'deserunt';
    $request->listenRequest->addTarget->resumeToken = 'nisi';
    $request->listenRequest->addTarget->targetId = 423855;
    $request->listenRequest->labels = [
        'omnis' => 'molestiae',
        'perferendis' => 'nihil',
        'magnam' => 'distinctio',
    ];
    $request->listenRequest->removeTarget = 660174;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->database = 'natus';
    $request->fields = 'nobis';
    $request->key = 'eum';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new FirestoreProjectsDatabasesDocumentsListenSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesDocumentsListenSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesDocumentsListen($request, $requestSecurity);

    if ($response->listenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesDocumentsPartitionQuery

Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsPartitionQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartitionQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\StructuredQuery;
use \OpenAPI\OpenAPI\Models\Shared\Cursor;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\ArrayValue;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\MapValue;
use \OpenAPI\OpenAPI\Models\Shared\ValueNullValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\CollectionSelector;
use \OpenAPI\OpenAPI\Models\Shared\Order;
use \OpenAPI\OpenAPI\Models\Shared\OrderDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldReference;
use \OpenAPI\OpenAPI\Models\Shared\Projection;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilterOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldFilter;
use \OpenAPI\OpenAPI\Models\Shared\FieldFilterOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\UnaryFilter;
use \OpenAPI\OpenAPI\Models\Shared\UnaryFilterOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsPartitionQuerySecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesDocumentsPartitionQueryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->partitionQueryRequest = new PartitionQueryRequest();
    $request->partitionQueryRequest->pageSize = 569965;
    $request->partitionQueryRequest->pageToken = 'ullam';
    $request->partitionQueryRequest->partitionCount = 'provident';
    $request->partitionQueryRequest->readTime = 'quos';
    $request->partitionQueryRequest->structuredQuery = new StructuredQuery();
    $request->partitionQueryRequest->structuredQuery->endAt = new Cursor();
    $request->partitionQueryRequest->structuredQuery->endAt->before = false;
    $request->partitionQueryRequest->structuredQuery->endAt->values = [
        new Value(),
        new Value(),
        new Value(),
    ];
    $request->partitionQueryRequest->structuredQuery->from = [
        new CollectionSelector(),
    ];
    $request->partitionQueryRequest->structuredQuery->limit = 653201;
    $request->partitionQueryRequest->structuredQuery->offset = 968962;
    $request->partitionQueryRequest->structuredQuery->orderBy = [
        new Order(),
        new Order(),
        new Order(),
    ];
    $request->partitionQueryRequest->structuredQuery->select = new Projection();
    $request->partitionQueryRequest->structuredQuery->select->fields = [
        new FieldReference(),
        new FieldReference(),
    ];
    $request->partitionQueryRequest->structuredQuery->startAt = new Cursor();
    $request->partitionQueryRequest->structuredQuery->startAt->before = false;
    $request->partitionQueryRequest->structuredQuery->startAt->values = [
        new Value(),
        new Value(),
    ];
    $request->partitionQueryRequest->structuredQuery->where = new Filter();
    $request->partitionQueryRequest->structuredQuery->where->compositeFilter = new CompositeFilter();
    $request->partitionQueryRequest->structuredQuery->where->compositeFilter->filters = [
        new Filter(),
    ];
    $request->partitionQueryRequest->structuredQuery->where->compositeFilter->op = CompositeFilterOpEnum::OR;
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter = new FieldFilter();
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->field = new FieldReference();
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->field->fieldPath = 'odit';
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->op = FieldFilterOpEnum::GREATER_THAN_OR_EQUAL;
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value = new Value();
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->arrayValue = new ArrayValue();
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->arrayValue->values = [
        new Value(),
    ];
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->booleanValue = false;
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->bytesValue = 'iure';
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->doubleValue = 9840.43;
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->geoPointValue = new LatLng();
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->geoPointValue->latitude = 8919.24;
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->geoPointValue->longitude = 2603.41;
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->integerValue = 'maxime';
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->mapValue = new MapValue();
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->mapValue->fields = [
        'facilis' => new Value(),
        'in' => new Value(),
        'architecto' => new Value(),
    ];
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->nullValue = ValueNullValueEnum::NULL_VALUE;
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->referenceValue = 'architecto';
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->stringValue = 'repudiandae';
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->timestampValue = 'ullam';
    $request->partitionQueryRequest->structuredQuery->where->unaryFilter = new UnaryFilter();
    $request->partitionQueryRequest->structuredQuery->where->unaryFilter->field = new FieldReference();
    $request->partitionQueryRequest->structuredQuery->where->unaryFilter->field->fieldPath = 'expedita';
    $request->partitionQueryRequest->structuredQuery->where->unaryFilter->op = UnaryFilterOpEnum::IS_NULL;
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->fields = 'saepe';
    $request->key = 'pariatur';
    $request->oauthToken = 'accusantium';
    $request->parent = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new FirestoreProjectsDatabasesDocumentsPartitionQuerySecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesDocumentsPartitionQuery($request, $requestSecurity);

    if ($response->partitionQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesDocumentsPatch

Updates or inserts a document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Document;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\ArrayValue;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\MapValue;
use \OpenAPI\OpenAPI\Models\Shared\ValueNullValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesDocumentsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->document = new Document();
    $request->document->createTime = 'quo';
    $request->document->fields = [
        'pariatur' => new Value(),
        'maxime' => new Value(),
        'ea' => new Value(),
        'excepturi' => new Value(),
    ];
    $request->document->name = 'Dr. Rosemary Bartoletti';
    $request->document->updateTime = 'ipsam';
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nam';
    $request->currentDocumentExists = false;
    $request->currentDocumentUpdateTime = 'eaque';
    $request->fields = 'pariatur';
    $request->key = 'nemo';
    $request->maskFieldPaths = [
        'perferendis',
        'fugiat',
        'amet',
        'aut',
    ];
    $request->name = 'Lewis Welch';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->updateMaskFieldPaths = [
        'dignissimos',
        'eaque',
        'quis',
    ];
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'eos';

    $requestSecurity = new FirestoreProjectsDatabasesDocumentsPatchSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesDocumentsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesDocumentsPatch($request, $requestSecurity);

    if ($response->document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesDocumentsRollback

Rolls back a transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsRollbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RollbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsRollbackSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsRollbackSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsRollbackSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesDocumentsRollbackRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->rollbackRequest = new RollbackRequest();
    $request->rollbackRequest->transaction = 'dolores';
    $request->accessToken = 'minus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->database = 'vero';
    $request->fields = 'nostrum';
    $request->key = 'hic';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'perspiciatis';

    $requestSecurity = new FirestoreProjectsDatabasesDocumentsRollbackSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesDocumentsRollbackSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesDocumentsRollback($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesDocumentsRunAggregationQuery

Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsRunAggregationQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RunAggregationQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransactionOptions;
use \OpenAPI\OpenAPI\Models\Shared\ReadOnlyT;
use \OpenAPI\OpenAPI\Models\Shared\ReadWrite;
use \OpenAPI\OpenAPI\Models\Shared\StructuredAggregationQuery;
use \OpenAPI\OpenAPI\Models\Shared\Aggregation;
use \OpenAPI\OpenAPI\Models\Shared\Count;
use \OpenAPI\OpenAPI\Models\Shared\StructuredQuery;
use \OpenAPI\OpenAPI\Models\Shared\Cursor;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\ArrayValue;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\MapValue;
use \OpenAPI\OpenAPI\Models\Shared\ValueNullValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\CollectionSelector;
use \OpenAPI\OpenAPI\Models\Shared\Order;
use \OpenAPI\OpenAPI\Models\Shared\OrderDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldReference;
use \OpenAPI\OpenAPI\Models\Shared\Projection;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilterOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldFilter;
use \OpenAPI\OpenAPI\Models\Shared\FieldFilterOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\UnaryFilter;
use \OpenAPI\OpenAPI\Models\Shared\UnaryFilterOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesDocumentsRunAggregationQueryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->runAggregationQueryRequest = new RunAggregationQueryRequest();
    $request->runAggregationQueryRequest->newTransaction = new TransactionOptions();
    $request->runAggregationQueryRequest->newTransaction->readOnly = new ReadOnlyT();
    $request->runAggregationQueryRequest->newTransaction->readOnly->readTime = 'porro';
    $request->runAggregationQueryRequest->newTransaction->readWrite = new ReadWrite();
    $request->runAggregationQueryRequest->newTransaction->readWrite->retryTransaction = 'consequuntur';
    $request->runAggregationQueryRequest->readTime = 'blanditiis';
    $request->runAggregationQueryRequest->structuredAggregationQuery = new StructuredAggregationQuery();
    $request->runAggregationQueryRequest->structuredAggregationQuery->aggregations = [
        new Aggregation(),
        new Aggregation(),
        new Aggregation(),
    ];
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery = new StructuredQuery();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->endAt = new Cursor();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->endAt->before = false;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->endAt->values = [
        new Value(),
    ];
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->from = [
        new CollectionSelector(),
        new CollectionSelector(),
        new CollectionSelector(),
    ];
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->limit = 699098;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->offset = 237893;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->orderBy = [
        new Order(),
        new Order(),
        new Order(),
        new Order(),
    ];
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->select = new Projection();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->select->fields = [
        new FieldReference(),
        new FieldReference(),
        new FieldReference(),
        new FieldReference(),
    ];
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->startAt = new Cursor();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->startAt->before = false;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->startAt->values = [
        new Value(),
        new Value(),
    ];
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where = new Filter();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->compositeFilter = new CompositeFilter();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->compositeFilter->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->compositeFilter->op = CompositeFilterOpEnum::OR;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter = new FieldFilter();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->field = new FieldReference();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->field->fieldPath = 'deleniti';
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->op = FieldFilterOpEnum::ARRAY_CONTAINS_ANY;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value = new Value();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->arrayValue = new ArrayValue();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->arrayValue->values = [
        new Value(),
        new Value(),
        new Value(),
    ];
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->booleanValue = false;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->bytesValue = 'nobis';
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->doubleValue = 7301.22;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->geoPointValue = new LatLng();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->geoPointValue->latitude = 9644.9;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->geoPointValue->longitude = 3119.45;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->integerValue = 'quos';
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->mapValue = new MapValue();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->mapValue->fields = [
        'dolorem' => new Value(),
        'dolorem' => new Value(),
    ];
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->nullValue = ValueNullValueEnum::NULL_VALUE;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->referenceValue = 'dolor';
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->stringValue = 'qui';
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->timestampValue = 'ipsum';
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->unaryFilter = new UnaryFilter();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->unaryFilter->field = new FieldReference();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->unaryFilter->field->fieldPath = 'hic';
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->unaryFilter->op = UnaryFilterOpEnum::IS_NULL;
    $request->runAggregationQueryRequest->transaction = 'cum';
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'amet';
    $request->key = 'dolorum';
    $request->oauthToken = 'numquam';
    $request->parent = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesDocumentsRunAggregationQuery($request, $requestSecurity);

    if ($response->runAggregationQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesDocumentsRunQuery

Runs a query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsRunQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RunQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransactionOptions;
use \OpenAPI\OpenAPI\Models\Shared\ReadOnlyT;
use \OpenAPI\OpenAPI\Models\Shared\ReadWrite;
use \OpenAPI\OpenAPI\Models\Shared\StructuredQuery;
use \OpenAPI\OpenAPI\Models\Shared\Cursor;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\ArrayValue;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\MapValue;
use \OpenAPI\OpenAPI\Models\Shared\ValueNullValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\CollectionSelector;
use \OpenAPI\OpenAPI\Models\Shared\Order;
use \OpenAPI\OpenAPI\Models\Shared\OrderDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldReference;
use \OpenAPI\OpenAPI\Models\Shared\Projection;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilterOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldFilter;
use \OpenAPI\OpenAPI\Models\Shared\FieldFilterOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\UnaryFilter;
use \OpenAPI\OpenAPI\Models\Shared\UnaryFilterOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsRunQuerySecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesDocumentsRunQueryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->runQueryRequest = new RunQueryRequest();
    $request->runQueryRequest->newTransaction = new TransactionOptions();
    $request->runQueryRequest->newTransaction->readOnly = new ReadOnlyT();
    $request->runQueryRequest->newTransaction->readOnly->readTime = 'quaerat';
    $request->runQueryRequest->newTransaction->readWrite = new ReadWrite();
    $request->runQueryRequest->newTransaction->readWrite->retryTransaction = 'accusamus';
    $request->runQueryRequest->readTime = 'quidem';
    $request->runQueryRequest->structuredQuery = new StructuredQuery();
    $request->runQueryRequest->structuredQuery->endAt = new Cursor();
    $request->runQueryRequest->structuredQuery->endAt->before = false;
    $request->runQueryRequest->structuredQuery->endAt->values = [
        new Value(),
        new Value(),
        new Value(),
        new Value(),
    ];
    $request->runQueryRequest->structuredQuery->from = [
        new CollectionSelector(),
        new CollectionSelector(),
    ];
    $request->runQueryRequest->structuredQuery->limit = 617658;
    $request->runQueryRequest->structuredQuery->offset = 179603;
    $request->runQueryRequest->structuredQuery->orderBy = [
        new Order(),
        new Order(),
        new Order(),
    ];
    $request->runQueryRequest->structuredQuery->select = new Projection();
    $request->runQueryRequest->structuredQuery->select->fields = [
        new FieldReference(),
    ];
    $request->runQueryRequest->structuredQuery->startAt = new Cursor();
    $request->runQueryRequest->structuredQuery->startAt->before = false;
    $request->runQueryRequest->structuredQuery->startAt->values = [
        new Value(),
        new Value(),
        new Value(),
        new Value(),
    ];
    $request->runQueryRequest->structuredQuery->where = new Filter();
    $request->runQueryRequest->structuredQuery->where->compositeFilter = new CompositeFilter();
    $request->runQueryRequest->structuredQuery->where->compositeFilter->filters = [
        new Filter(),
    ];
    $request->runQueryRequest->structuredQuery->where->compositeFilter->op = CompositeFilterOpEnum::OR;
    $request->runQueryRequest->structuredQuery->where->fieldFilter = new FieldFilter();
    $request->runQueryRequest->structuredQuery->where->fieldFilter->field = new FieldReference();
    $request->runQueryRequest->structuredQuery->where->fieldFilter->field->fieldPath = 'dolorum';
    $request->runQueryRequest->structuredQuery->where->fieldFilter->op = FieldFilterOpEnum::EQUAL;
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value = new Value();
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->arrayValue = new ArrayValue();
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->arrayValue->values = [
        new Value(),
        new Value(),
    ];
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->booleanValue = false;
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->bytesValue = 'dolorum';
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->doubleValue = 5365.79;
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->geoPointValue = new LatLng();
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->geoPointValue->latitude = 6070.45;
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->geoPointValue->longitude = 8966.72;
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->integerValue = 'distinctio';
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->mapValue = new MapValue();
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->mapValue->fields = [
        'nihil' => new Value(),
        'ipsum' => new Value(),
        'voluptate' => new Value(),
        'id' => new Value(),
    ];
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->nullValue = ValueNullValueEnum::NULL_VALUE;
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->referenceValue = 'saepe';
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->stringValue = 'eius';
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->timestampValue = 'aspernatur';
    $request->runQueryRequest->structuredQuery->where->unaryFilter = new UnaryFilter();
    $request->runQueryRequest->structuredQuery->where->unaryFilter->field = new FieldReference();
    $request->runQueryRequest->structuredQuery->where->unaryFilter->field->fieldPath = 'perferendis';
    $request->runQueryRequest->structuredQuery->where->unaryFilter->op = UnaryFilterOpEnum::IS_NAN;
    $request->runQueryRequest->transaction = 'optio';
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'suscipit';
    $request->key = 'deserunt';
    $request->oauthToken = 'provident';
    $request->parent = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'similique';

    $requestSecurity = new FirestoreProjectsDatabasesDocumentsRunQuerySecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesDocumentsRunQuery($request, $requestSecurity);

    if ($response->runQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesDocumentsWrite

Streams batches of document updates and deletes, in order. This method is only available via gRPC or WebChannel (not REST).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsWriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\Write;
use \OpenAPI\OpenAPI\Models\Shared\Precondition;
use \OpenAPI\OpenAPI\Models\Shared\DocumentTransform;
use \OpenAPI\OpenAPI\Models\Shared\FieldTransform;
use \OpenAPI\OpenAPI\Models\Shared\ArrayValue;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\MapValue;
use \OpenAPI\OpenAPI\Models\Shared\ValueNullValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldTransformSetToServerValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\Document;
use \OpenAPI\OpenAPI\Models\Shared\DocumentMask;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsWriteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsWriteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesDocumentsWriteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesDocumentsWriteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->writeRequest = new WriteRequest();
    $request->writeRequest->labels = [
        'quaerat' => 'tempora',
        'vel' => 'quod',
        'officiis' => 'qui',
        'dolorum' => 'a',
    ];
    $request->writeRequest->streamId = 'esse';
    $request->writeRequest->streamToken = 'harum';
    $request->writeRequest->writes = [
        new Write(),
        new Write(),
    ];
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tenetur';
    $request->database = 'amet';
    $request->fields = 'tempore';
    $request->key = 'accusamus';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new FirestoreProjectsDatabasesDocumentsWriteSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesDocumentsWriteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesDocumentsWrite($request, $requestSecurity);

    if ($response->writeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesExportDocuments

Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage. For more details on export behavior and output format, refer to: https://cloud.google.com/firestore/docs/manage-data/export-import

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesExportDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1ExportDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesExportDocumentsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesExportDocumentsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesExportDocumentsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesExportDocumentsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleFirestoreAdminV1ExportDocumentsRequest = new GoogleFirestoreAdminV1ExportDocumentsRequest();
    $request->googleFirestoreAdminV1ExportDocumentsRequest->collectionIds = [
        'sit',
        'expedita',
    ];
    $request->googleFirestoreAdminV1ExportDocumentsRequest->namespaceIds = [
        'sed',
    ];
    $request->googleFirestoreAdminV1ExportDocumentsRequest->outputUriPrefix = 'vel';
    $request->accessToken = 'libero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'quam';
    $request->key = 'ipsum';
    $request->name = 'Norma McGlynn';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new FirestoreProjectsDatabasesExportDocumentsSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesExportDocumentsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesExportDocuments($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesImportDocuments

Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesImportDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1ImportDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesImportDocumentsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesImportDocumentsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesImportDocumentsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesImportDocumentsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirestoreAdminV1ImportDocumentsRequest = new GoogleFirestoreAdminV1ImportDocumentsRequest();
    $request->googleFirestoreAdminV1ImportDocumentsRequest->collectionIds = [
        'dolores',
    ];
    $request->googleFirestoreAdminV1ImportDocumentsRequest->inputUriPrefix = 'distinctio';
    $request->googleFirestoreAdminV1ImportDocumentsRequest->namespaceIds = [
        'aliquid',
        'quam',
        'molestias',
    ];
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'neque';
    $request->fields = 'fugit';
    $request->key = 'magni';
    $request->name = 'Ashley Hermiston';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new FirestoreProjectsDatabasesImportDocumentsSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesImportDocumentsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesImportDocuments($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesList

List all the databases in the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->callback = 'veritatis';
    $request->fields = 'nobis';
    $request->key = 'quos';
    $request->oauthToken = 'tempore';
    $request->parent = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'aperiam';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new FirestoreProjectsDatabasesListSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesList($request, $requestSecurity);

    if ($response->googleFirestoreAdminV1ListDatabasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesOperationsCancelSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesOperationsCancelSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesOperationsCancelSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'adipisci' => 'dolorum',
        'architecto' => 'quae',
    ];
    $request->accessToken = 'aut';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'itaque';
    $request->fields = 'consequatur';
    $request->key = 'est';
    $request->name = 'Sherman Wyman';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'laudantium';

    $requestSecurity = new FirestoreProjectsDatabasesOperationsCancelSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesOperationsCancelSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesOperationsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesOperationsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesOperationsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quisquam';
    $request->currentDocumentExists = false;
    $request->currentDocumentUpdateTime = 'vero';
    $request->fields = 'omnis';
    $request->key = 'quis';
    $request->name = 'Dixie Klocko';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'dignissimos';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'distinctio';
    $request->validateOnly = false;

    $requestSecurity = new FirestoreProjectsDatabasesOperationsDeleteSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesOperationsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesOperationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesOperationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesOperationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->fields = 'vero';
    $request->filter = 'ducimus';
    $request->key = 'dolore';
    $request->name = 'Gilberto Dickinson';
    $request->oauthToken = 'aut';
    $request->pageSize = 974259;
    $request->pageToken = 'exercitationem';
    $request->prettyPrint = false;
    $request->quotaUser = 'nulla';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new FirestoreProjectsDatabasesOperationsListSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesOperationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsLocationsGet

Gets information about a location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsLocationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsLocationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsLocationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsLocationsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsLocationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eligendi';
    $request->fields = 'ducimus';
    $request->key = 'alias';
    $request->maskFieldPaths = [
        'tempora',
        'ipsam',
        'ea',
    ];
    $request->name = 'Jessie Schuster';
    $request->oauthToken = 'ex';
    $request->prettyPrint = false;
    $request->quotaUser = 'laudantium';
    $request->readTime = 'dicta';
    $request->transaction = 'dolor';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new FirestoreProjectsLocationsGetSecurity();
    $requestSecurity->option1 = new FirestoreProjectsLocationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsLocationsGet($request, $requestSecurity);

    if ($response->location !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsLocationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsLocationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsLocationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'nostrum';
    $request->filter = 'sapiente';
    $request->key = 'quisquam';
    $request->name = 'Nathaniel Ryan';
    $request->oauthToken = 'aliquid';
    $request->pageSize = 81101;
    $request->pageToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'consectetur';

    $requestSecurity = new FirestoreProjectsLocationsListSecurity();
    $requestSecurity->option1 = new FirestoreProjectsLocationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
