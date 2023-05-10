# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->batchGetDocumentsRequest->mask = new DocumentMask();
    $request->batchGetDocumentsRequest->mask->fieldPaths = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->batchGetDocumentsRequest->newTransaction = new TransactionOptions();
    $request->batchGetDocumentsRequest->newTransaction->readOnly = new ReadOnlyT();
    $request->batchGetDocumentsRequest->newTransaction->readOnly->readTime = 'deserunt';
    $request->batchGetDocumentsRequest->newTransaction->readWrite = new ReadWrite();
    $request->batchGetDocumentsRequest->newTransaction->readWrite->retryTransaction = 'suscipit';
    $request->batchGetDocumentsRequest->readTime = 'iure';
    $request->batchGetDocumentsRequest->transaction = 'magnam';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->database = 'tempora';
    $request->fields = 'suscipit';
    $request->key = 'molestiae';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [firestoreProjectsDatabasesDocumentsBatchGet](docs/projects/README.md#firestoreprojectsdatabasesdocumentsbatchget) - Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested.
* [firestoreProjectsDatabasesDocumentsBatchWrite](docs/projects/README.md#firestoreprojectsdatabasesdocumentsbatchwrite) - Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.
* [firestoreProjectsDatabasesDocumentsBeginTransaction](docs/projects/README.md#firestoreprojectsdatabasesdocumentsbegintransaction) - Starts a new transaction.
* [firestoreProjectsDatabasesDocumentsCommit](docs/projects/README.md#firestoreprojectsdatabasesdocumentscommit) - Commits a transaction, while optionally updating documents.
* [firestoreProjectsDatabasesDocumentsCreateDocument](docs/projects/README.md#firestoreprojectsdatabasesdocumentscreatedocument) - Creates a new document.
* [firestoreProjectsDatabasesDocumentsListCollectionIds](docs/projects/README.md#firestoreprojectsdatabasesdocumentslistcollectionids) - Lists all the collection IDs underneath a document.
* [firestoreProjectsDatabasesDocumentsListDocuments](docs/projects/README.md#firestoreprojectsdatabasesdocumentslistdocuments) - Lists documents.
* [firestoreProjectsDatabasesDocumentsListen](docs/projects/README.md#firestoreprojectsdatabasesdocumentslisten) - Listens to changes. This method is only available via gRPC or WebChannel (not REST).
* [firestoreProjectsDatabasesDocumentsPartitionQuery](docs/projects/README.md#firestoreprojectsdatabasesdocumentspartitionquery) - Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.
* [firestoreProjectsDatabasesDocumentsPatch](docs/projects/README.md#firestoreprojectsdatabasesdocumentspatch) - Updates or inserts a document.
* [firestoreProjectsDatabasesDocumentsRollback](docs/projects/README.md#firestoreprojectsdatabasesdocumentsrollback) - Rolls back a transaction.
* [firestoreProjectsDatabasesDocumentsRunAggregationQuery](docs/projects/README.md#firestoreprojectsdatabasesdocumentsrunaggregationquery) - Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ```
* [firestoreProjectsDatabasesDocumentsRunQuery](docs/projects/README.md#firestoreprojectsdatabasesdocumentsrunquery) - Runs a query.
* [firestoreProjectsDatabasesDocumentsWrite](docs/projects/README.md#firestoreprojectsdatabasesdocumentswrite) - Streams batches of document updates and deletes, in order. This method is only available via gRPC or WebChannel (not REST).
* [firestoreProjectsDatabasesExportDocuments](docs/projects/README.md#firestoreprojectsdatabasesexportdocuments) - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* [firestoreProjectsDatabasesImportDocuments](docs/projects/README.md#firestoreprojectsdatabasesimportdocuments) - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
* [firestoreProjectsDatabasesIndexesCreate](docs/projects/README.md#firestoreprojectsdatabasesindexescreate) - Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single field cannot be created.
* [firestoreProjectsDatabasesIndexesDelete](docs/projects/README.md#firestoreprojectsdatabasesindexesdelete) - Deletes an index.
* [firestoreProjectsDatabasesIndexesGet](docs/projects/README.md#firestoreprojectsdatabasesindexesget) - Gets an index.
* [firestoreProjectsDatabasesIndexesList](docs/projects/README.md#firestoreprojectsdatabasesindexeslist) - Lists the indexes that match the specified filters.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
