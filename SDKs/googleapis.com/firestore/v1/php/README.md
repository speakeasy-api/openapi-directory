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
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->filter = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->pageSize = 423655;
    $request->pageToken = 'error';
    $request->parent = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'magnam';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [firestoreProjectsDatabasesCollectionGroupsFieldsList](docs/projects/README.md#firestoreprojectsdatabasescollectiongroupsfieldslist) - Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false` .
* [firestoreProjectsDatabasesCollectionGroupsIndexesCreate](docs/projects/README.md#firestoreprojectsdatabasescollectiongroupsindexescreate) - Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
* [firestoreProjectsDatabasesCollectionGroupsIndexesList](docs/projects/README.md#firestoreprojectsdatabasescollectiongroupsindexeslist) - Lists composite indexes.
* [firestoreProjectsDatabasesCreate](docs/projects/README.md#firestoreprojectsdatabasescreate) - Create a database.
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
* [firestoreProjectsDatabasesExportDocuments](docs/projects/README.md#firestoreprojectsdatabasesexportdocuments) - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage. For more details on export behavior and output format, refer to: https://cloud.google.com/firestore/docs/manage-data/export-import
* [firestoreProjectsDatabasesImportDocuments](docs/projects/README.md#firestoreprojectsdatabasesimportdocuments) - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
* [firestoreProjectsDatabasesList](docs/projects/README.md#firestoreprojectsdatabaseslist) - List all the databases in the project.
* [firestoreProjectsDatabasesOperationsCancel](docs/projects/README.md#firestoreprojectsdatabasesoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [firestoreProjectsDatabasesOperationsDelete](docs/projects/README.md#firestoreprojectsdatabasesoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [firestoreProjectsDatabasesOperationsList](docs/projects/README.md#firestoreprojectsdatabasesoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [firestoreProjectsLocationsGet](docs/projects/README.md#firestoreprojectslocationsget) - Gets information about a location.
* [firestoreProjectsLocationsList](docs/projects/README.md#firestoreprojectslocationslist) - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
