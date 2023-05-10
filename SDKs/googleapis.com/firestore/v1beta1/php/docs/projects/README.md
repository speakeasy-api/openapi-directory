# projects

### Available Operations

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
* [firestoreProjectsDatabasesExportDocuments](#firestoreprojectsdatabasesexportdocuments) - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* [firestoreProjectsDatabasesImportDocuments](#firestoreprojectsdatabasesimportdocuments) - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
* [firestoreProjectsDatabasesIndexesCreate](#firestoreprojectsdatabasesindexescreate) - Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single field cannot be created.
* [firestoreProjectsDatabasesIndexesDelete](#firestoreprojectsdatabasesindexesdelete) - Deletes an index.
* [firestoreProjectsDatabasesIndexesGet](#firestoreprojectsdatabasesindexesget) - Gets an index.
* [firestoreProjectsDatabasesIndexesList](#firestoreprojectsdatabasesindexeslist) - Lists the indexes that match the specified filters.

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchGetDocumentsRequest = new BatchGetDocumentsRequest();
    $request->batchGetDocumentsRequest->documents = [
        'recusandae',
        'temporibus',
    ];
    $request->batchGetDocumentsRequest->mask = new DocumentMask();
    $request->batchGetDocumentsRequest->mask->fieldPaths = [
        'quis',
    ];
    $request->batchGetDocumentsRequest->newTransaction = new TransactionOptions();
    $request->batchGetDocumentsRequest->newTransaction->readOnly = new ReadOnlyT();
    $request->batchGetDocumentsRequest->newTransaction->readOnly->readTime = 'veritatis';
    $request->batchGetDocumentsRequest->newTransaction->readWrite = new ReadWrite();
    $request->batchGetDocumentsRequest->newTransaction->readWrite->retryTransaction = 'deserunt';
    $request->batchGetDocumentsRequest->readTime = 'perferendis';
    $request->batchGetDocumentsRequest->transaction = 'ipsam';
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quo';
    $request->database = 'odit';
    $request->fields = 'at';
    $request->key = 'at';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'quod';

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
        'porro' => 'dolorum',
        'dicta' => 'nam',
        'officia' => 'occaecati',
    ];
    $request->batchWriteRequest->writes = [
        new Write(),
    ];
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'optio';
    $request->database = 'totam';
    $request->fields = 'beatae';
    $request->key = 'commodi';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'impedit';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->beginTransactionRequest = new BeginTransactionRequest();
    $request->beginTransactionRequest->options = new TransactionOptions();
    $request->beginTransactionRequest->options->readOnly = new ReadOnlyT();
    $request->beginTransactionRequest->options->readOnly->readTime = 'esse';
    $request->beginTransactionRequest->options->readWrite = new ReadWrite();
    $request->beginTransactionRequest->options->readWrite->retryTransaction = 'ipsum';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->database = 'ad';
    $request->fields = 'natus';
    $request->key = 'sed';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'laboriosam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->commitRequest = new CommitRequest();
    $request->commitRequest->transaction = 'saepe';
    $request->commitRequest->writes = [
        new Write(),
        new Write(),
        new Write(),
    ];
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->database = 'iure';
    $request->fields = 'saepe';
    $request->key = 'quidem';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'est';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->document = new Document();
    $request->document->createTime = 'laborum';
    $request->document->fields = [
        'dolorem' => new Value(),
    ];
    $request->document->name = 'Rose Rolfson';
    $request->document->updateTime = 'nemo';
    $request->accessToken = 'minima';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->collectionId = 'iure';
    $request->documentId = 'culpa';
    $request->fields = 'doloribus';
    $request->key = 'sapiente';
    $request->maskFieldPaths = [
        'mollitia',
    ];
    $request->oauthToken = 'dolorem';
    $request->parent = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'mollitia';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->listCollectionIdsRequest = new ListCollectionIdsRequest();
    $request->listCollectionIdsRequest->pageSize = 253291;
    $request->listCollectionIdsRequest->pageToken = 'commodi';
    $request->listCollectionIdsRequest->readTime = 'quam';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'quia';
    $request->key = 'quis';
    $request->oauthToken = 'vitae';
    $request->parent = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'animi';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'odit';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->collectionId = 'id';
    $request->fields = 'possimus';
    $request->key = 'aut';
    $request->maskFieldPaths = [
        'error',
    ];
    $request->oauthToken = 'temporibus';
    $request->orderBy = 'laborum';
    $request->pageSize = 96098;
    $request->pageToken = 'reiciendis';
    $request->parent = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->readTime = 'nihil';
    $request->showMissing = false;
    $request->transaction = 'praesentium';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'ipsa';

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
        'cum',
        'perferendis',
    ];
    $request->listenRequest->addTarget->once = false;
    $request->listenRequest->addTarget->query = new QueryTarget();
    $request->listenRequest->addTarget->query->parent = 'doloremque';
    $request->listenRequest->addTarget->query->structuredQuery = new StructuredQuery();
    $request->listenRequest->addTarget->query->structuredQuery->endAt = new Cursor();
    $request->listenRequest->addTarget->query->structuredQuery->endAt->before = false;
    $request->listenRequest->addTarget->query->structuredQuery->endAt->values = [
        new Value(),
        new Value(),
    ];
    $request->listenRequest->addTarget->query->structuredQuery->from = [
        new CollectionSelector(),
        new CollectionSelector(),
    ];
    $request->listenRequest->addTarget->query->structuredQuery->limit = 979587;
    $request->listenRequest->addTarget->query->structuredQuery->offset = 120196;
    $request->listenRequest->addTarget->query->structuredQuery->orderBy = [
        new Order(),
        new Order(),
    ];
    $request->listenRequest->addTarget->query->structuredQuery->select = new Projection();
    $request->listenRequest->addTarget->query->structuredQuery->select->fields = [
        new FieldReference(),
        new FieldReference(),
    ];
    $request->listenRequest->addTarget->query->structuredQuery->startAt = new Cursor();
    $request->listenRequest->addTarget->query->structuredQuery->startAt->before = false;
    $request->listenRequest->addTarget->query->structuredQuery->startAt->values = [
        new Value(),
        new Value(),
    ];
    $request->listenRequest->addTarget->query->structuredQuery->where = new Filter();
    $request->listenRequest->addTarget->query->structuredQuery->where->compositeFilter = new CompositeFilter();
    $request->listenRequest->addTarget->query->structuredQuery->where->compositeFilter->filters = [
        new Filter(),
    ];
    $request->listenRequest->addTarget->query->structuredQuery->where->compositeFilter->op = CompositeFilterOpEnum::OR;
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter = new FieldFilter();
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->field = new FieldReference();
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->field->fieldPath = 'enim';
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->op = FieldFilterOpEnum::ARRAY_CONTAINS_ANY;
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value = new Value();
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->arrayValue = new ArrayValue();
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->arrayValue->values = [
        new Value(),
        new Value(),
    ];
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->booleanValue = false;
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->bytesValue = 'repudiandae';
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->doubleValue = 641.47;
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->geoPointValue = new LatLng();
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->geoPointValue->latitude = 2168.22;
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->geoPointValue->longitude = 6924.72;
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->integerValue = 'molestias';
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->mapValue = new MapValue();
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->mapValue->fields = [
        'pariatur' => new Value(),
        'modi' => new Value(),
        'praesentium' => new Value(),
    ];
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->nullValue = ValueNullValueEnum::NULL_VALUE;
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->referenceValue = 'rem';
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->stringValue = 'voluptates';
    $request->listenRequest->addTarget->query->structuredQuery->where->fieldFilter->value->timestampValue = 'quasi';
    $request->listenRequest->addTarget->query->structuredQuery->where->unaryFilter = new UnaryFilter();
    $request->listenRequest->addTarget->query->structuredQuery->where->unaryFilter->field = new FieldReference();
    $request->listenRequest->addTarget->query->structuredQuery->where->unaryFilter->field->fieldPath = 'repudiandae';
    $request->listenRequest->addTarget->query->structuredQuery->where->unaryFilter->op = UnaryFilterOpEnum::IS_NULL;
    $request->listenRequest->addTarget->readTime = 'veritatis';
    $request->listenRequest->addTarget->resumeToken = 'itaque';
    $request->listenRequest->addTarget->targetId = 277718;
    $request->listenRequest->labels = [
        'consequatur' => 'est',
        'quibusdam' => 'explicabo',
    ];
    $request->listenRequest->removeTarget = 647174;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->database = 'modi';
    $request->fields = 'qui';
    $request->key = 'aliquid';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'magni';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->partitionQueryRequest = new PartitionQueryRequest();
    $request->partitionQueryRequest->pageSize = 369808;
    $request->partitionQueryRequest->pageToken = 'alias';
    $request->partitionQueryRequest->partitionCount = 'fugit';
    $request->partitionQueryRequest->readTime = 'dolorum';
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
        new CollectionSelector(),
    ];
    $request->partitionQueryRequest->structuredQuery->limit = 703737;
    $request->partitionQueryRequest->structuredQuery->offset = 735194;
    $request->partitionQueryRequest->structuredQuery->orderBy = [
        new Order(),
        new Order(),
    ];
    $request->partitionQueryRequest->structuredQuery->select = new Projection();
    $request->partitionQueryRequest->structuredQuery->select->fields = [
        new FieldReference(),
        new FieldReference(),
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
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->field->fieldPath = 'sint';
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->op = FieldFilterOpEnum::GREATER_THAN_OR_EQUAL;
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value = new Value();
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->arrayValue = new ArrayValue();
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->arrayValue->values = [
        new Value(),
        new Value(),
        new Value(),
    ];
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->booleanValue = false;
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->bytesValue = 'necessitatibus';
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->doubleValue = 5722.52;
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->geoPointValue = new LatLng();
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->geoPointValue->latitude = 6389.21;
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->geoPointValue->longitude = 2230.81;
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->integerValue = 'debitis';
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->mapValue = new MapValue();
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->mapValue->fields = [
        'dolorum' => new Value(),
        'in' => new Value(),
        'in' => new Value(),
        'illum' => new Value(),
    ];
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->nullValue = ValueNullValueEnum::NULL_VALUE;
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->referenceValue = 'maiores';
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->stringValue = 'rerum';
    $request->partitionQueryRequest->structuredQuery->where->fieldFilter->value->timestampValue = 'dicta';
    $request->partitionQueryRequest->structuredQuery->where->unaryFilter = new UnaryFilter();
    $request->partitionQueryRequest->structuredQuery->where->unaryFilter->field = new FieldReference();
    $request->partitionQueryRequest->structuredQuery->where->unaryFilter->field->fieldPath = 'magnam';
    $request->partitionQueryRequest->structuredQuery->where->unaryFilter->op = UnaryFilterOpEnum::IS_NOT_NAN;
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'laborum';
    $request->key = 'accusamus';
    $request->oauthToken = 'non';
    $request->parent = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'delectus';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->document = new Document();
    $request->document->createTime = 'provident';
    $request->document->fields = [
        'id' => new Value(),
        'blanditiis' => new Value(),
        'deleniti' => new Value(),
    ];
    $request->document->name = 'Vincent Nolan';
    $request->document->updateTime = 'natus';
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->currentDocumentExists = false;
    $request->currentDocumentUpdateTime = 'nihil';
    $request->fields = 'magnam';
    $request->key = 'distinctio';
    $request->maskFieldPaths = [
        'labore',
        'labore',
        'suscipit',
    ];
    $request->name = 'Robin Keebler';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->updateMaskFieldPaths = [
        'excepturi',
    ];
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'provident';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->rollbackRequest = new RollbackRequest();
    $request->rollbackRequest->transaction = 'sint';
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->database = 'mollitia';
    $request->fields = 'ad';
    $request->key = 'eum';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'nemo';

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
    $request->runAggregationQueryRequest->newTransaction->readOnly->readTime = 'iure';
    $request->runAggregationQueryRequest->newTransaction->readWrite = new ReadWrite();
    $request->runAggregationQueryRequest->newTransaction->readWrite->retryTransaction = 'doloribus';
    $request->runAggregationQueryRequest->readTime = 'debitis';
    $request->runAggregationQueryRequest->structuredAggregationQuery = new StructuredAggregationQuery();
    $request->runAggregationQueryRequest->structuredAggregationQuery->aggregations = [
        new Aggregation(),
        new Aggregation(),
    ];
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery = new StructuredQuery();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->endAt = new Cursor();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->endAt->before = false;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->endAt->values = [
        new Value(),
        new Value(),
        new Value(),
        new Value(),
    ];
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->from = [
        new CollectionSelector(),
        new CollectionSelector(),
        new CollectionSelector(),
    ];
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->limit = 703889;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->offset = 447926;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->orderBy = [
        new Order(),
    ];
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->select = new Projection();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->select->fields = [
        new FieldReference(),
    ];
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->startAt = new Cursor();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->startAt->before = false;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->startAt->values = [
        new Value(),
        new Value(),
        new Value(),
        new Value(),
    ];
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where = new Filter();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->compositeFilter = new CompositeFilter();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->compositeFilter->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->compositeFilter->op = CompositeFilterOpEnum::OR;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter = new FieldFilter();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->field = new FieldReference();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->field->fieldPath = 'nihil';
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->op = FieldFilterOpEnum::NOT_IN;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value = new Value();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->arrayValue = new ArrayValue();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->arrayValue->values = [
        new Value(),
        new Value(),
        new Value(),
        new Value(),
    ];
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->booleanValue = false;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->bytesValue = 'sed';
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->doubleValue = 9046.48;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->geoPointValue = new LatLng();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->geoPointValue->latitude = 8681.26;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->geoPointValue->longitude = 375.59;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->integerValue = 'consequuntur';
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->mapValue = new MapValue();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->mapValue->fields = [
        'natus' => new Value(),
        'magni' => new Value(),
        'sunt' => new Value(),
    ];
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->nullValue = ValueNullValueEnum::NULL_VALUE;
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->referenceValue = 'quo';
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->stringValue = 'illum';
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->fieldFilter->value->timestampValue = 'pariatur';
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->unaryFilter = new UnaryFilter();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->unaryFilter->field = new FieldReference();
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->unaryFilter->field->fieldPath = 'maxime';
    $request->runAggregationQueryRequest->structuredAggregationQuery->structuredQuery->where->unaryFilter->op = UnaryFilterOpEnum::IS_NULL;
    $request->runAggregationQueryRequest->transaction = 'excepturi';
    $request->accessToken = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'ab';
    $request->key = 'maiores';
    $request->oauthToken = 'quidem';
    $request->parent = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'nam';

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
    $request->runQueryRequest->newTransaction->readOnly->readTime = 'pariatur';
    $request->runQueryRequest->newTransaction->readWrite = new ReadWrite();
    $request->runQueryRequest->newTransaction->readWrite->retryTransaction = 'nemo';
    $request->runQueryRequest->readTime = 'voluptatibus';
    $request->runQueryRequest->structuredQuery = new StructuredQuery();
    $request->runQueryRequest->structuredQuery->endAt = new Cursor();
    $request->runQueryRequest->structuredQuery->endAt->before = false;
    $request->runQueryRequest->structuredQuery->endAt->values = [
        new Value(),
    ];
    $request->runQueryRequest->structuredQuery->from = [
        new CollectionSelector(),
        new CollectionSelector(),
        new CollectionSelector(),
        new CollectionSelector(),
    ];
    $request->runQueryRequest->structuredQuery->limit = 230742;
    $request->runQueryRequest->structuredQuery->offset = 11714;
    $request->runQueryRequest->structuredQuery->orderBy = [
        new Order(),
        new Order(),
        new Order(),
        new Order(),
    ];
    $request->runQueryRequest->structuredQuery->select = new Projection();
    $request->runQueryRequest->structuredQuery->select->fields = [
        new FieldReference(),
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
        new Filter(),
        new Filter(),
    ];
    $request->runQueryRequest->structuredQuery->where->compositeFilter->op = CompositeFilterOpEnum::OR;
    $request->runQueryRequest->structuredQuery->where->fieldFilter = new FieldFilter();
    $request->runQueryRequest->structuredQuery->where->fieldFilter->field = new FieldReference();
    $request->runQueryRequest->structuredQuery->where->fieldFilter->field->fieldPath = 'dolores';
    $request->runQueryRequest->structuredQuery->where->fieldFilter->op = FieldFilterOpEnum::GREATER_THAN;
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value = new Value();
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->arrayValue = new ArrayValue();
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->arrayValue->values = [
        new Value(),
        new Value(),
        new Value(),
    ];
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->booleanValue = false;
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->bytesValue = 'dignissimos';
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->doubleValue = 543.38;
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->geoPointValue = new LatLng();
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->geoPointValue->latitude = 3389.85;
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->geoPointValue->longitude = 1999.96;
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->integerValue = 'eos';
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->mapValue = new MapValue();
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->mapValue->fields = [
        'dolores' => new Value(),
    ];
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->nullValue = ValueNullValueEnum::NULL_VALUE;
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->referenceValue = 'minus';
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->stringValue = 'quam';
    $request->runQueryRequest->structuredQuery->where->fieldFilter->value->timestampValue = 'dolor';
    $request->runQueryRequest->structuredQuery->where->unaryFilter = new UnaryFilter();
    $request->runQueryRequest->structuredQuery->where->unaryFilter->field = new FieldReference();
    $request->runQueryRequest->structuredQuery->where->unaryFilter->field->fieldPath = 'vero';
    $request->runQueryRequest->structuredQuery->where->unaryFilter->op = UnaryFilterOpEnum::IS_NAN;
    $request->runQueryRequest->transaction = 'hic';
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->fields = 'perspiciatis';
    $request->key = 'voluptatem';
    $request->oauthToken = 'porro';
    $request->parent = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'blanditiis';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'eaque';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->writeRequest = new WriteRequest();
    $request->writeRequest->labels = [
        'adipisci' => 'asperiores',
        'earum' => 'modi',
        'iste' => 'dolorum',
    ];
    $request->writeRequest->streamId = 'deleniti';
    $request->writeRequest->streamToken = 'pariatur';
    $request->writeRequest->writes = [
        new Write(),
        new Write(),
        new Write(),
    ];
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'delectus';
    $request->database = 'quaerat';
    $request->fields = 'quos';
    $request->key = 'aliquid';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'qui';

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

Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesExportDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta1ExportDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesExportDocumentsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesExportDocumentsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesExportDocumentsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesExportDocumentsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirestoreAdminV1beta1ExportDocumentsRequest = new GoogleFirestoreAdminV1beta1ExportDocumentsRequest();
    $request->googleFirestoreAdminV1beta1ExportDocumentsRequest->collectionIds = [
        'excepturi',
        'cum',
        'voluptate',
        'dignissimos',
    ];
    $request->googleFirestoreAdminV1beta1ExportDocumentsRequest->outputUriPrefix = 'reiciendis';
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'veritatis';
    $request->key = 'ipsa';
    $request->name = 'Vera Kuhlman';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'natus';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta1ImportDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesImportDocumentsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesImportDocumentsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesImportDocumentsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesImportDocumentsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirestoreAdminV1beta1ImportDocumentsRequest = new GoogleFirestoreAdminV1beta1ImportDocumentsRequest();
    $request->googleFirestoreAdminV1beta1ImportDocumentsRequest->collectionIds = [
        'sit',
        'fugiat',
        'ab',
    ];
    $request->googleFirestoreAdminV1beta1ImportDocumentsRequest->inputUriPrefix = 'soluta';
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->fields = 'dolorum';
    $request->key = 'deleniti';
    $request->name = 'Terence Rau';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'saepe';

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

## firestoreProjectsDatabasesIndexesCreate

Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single field cannot be created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesIndexesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta1Index;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta1IndexField;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta1IndexFieldModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta1IndexStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesIndexesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesIndexesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesIndexesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesIndexesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirestoreAdminV1beta1Index = new GoogleFirestoreAdminV1beta1Index();
    $request->googleFirestoreAdminV1beta1Index->collectionId = 'aspernatur';
    $request->googleFirestoreAdminV1beta1Index->fields = [
        new GoogleFirestoreAdminV1beta1IndexField(),
    ];
    $request->googleFirestoreAdminV1beta1Index->name = 'Marianne Thompson';
    $request->googleFirestoreAdminV1beta1Index->state = GoogleFirestoreAdminV1beta1IndexStateEnum::CREATING;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->fields = 'repellendus';
    $request->key = 'totam';
    $request->oauthToken = 'similique';
    $request->parent = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new FirestoreProjectsDatabasesIndexesCreateSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesIndexesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesIndexesCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesIndexesDelete

Deletes an index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesIndexesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesIndexesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesIndexesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesIndexesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesIndexesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'qui';
    $request->currentDocumentExists = false;
    $request->currentDocumentUpdateTime = 'dolorum';
    $request->fields = 'a';
    $request->key = 'esse';
    $request->name = 'Tyrone Emard';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new FirestoreProjectsDatabasesIndexesDeleteSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesIndexesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesIndexesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesIndexesGet

Gets an index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesIndexesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesIndexesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesIndexesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesIndexesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesIndexesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'nihil';
    $request->key = 'sit';
    $request->maskFieldPaths = [
        'neque',
        'sed',
        'vel',
    ];
    $request->name = 'Glen Oberbrunner';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->readTime = 'cupiditate';
    $request->transaction = 'maxime';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'soluta';

    $requestSecurity = new FirestoreProjectsDatabasesIndexesGetSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesIndexesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesIndexesGet($request, $requestSecurity);

    if ($response->googleFirestoreAdminV1beta1Index !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesIndexesList

Lists the indexes that match the specified filters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesIndexesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesIndexesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesIndexesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesIndexesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesIndexesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'incidunt';
    $request->fields = 'aspernatur';
    $request->filter = 'dolores';
    $request->key = 'distinctio';
    $request->oauthToken = 'facilis';
    $request->pageSize = 396060;
    $request->pageToken = 'quam';
    $request->parent = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'neque';

    $requestSecurity = new FirestoreProjectsDatabasesIndexesListSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesIndexesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesIndexesList($request, $requestSecurity);

    if ($response->googleFirestoreAdminV1beta1ListIndexesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
