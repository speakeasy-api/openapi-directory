# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/firestore/v1beta1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FirestoreProjectsDatabasesDocumentsBatchGetRequest(
    dollar_xgafv="2",
    batch_get_documents_request=shared.BatchGetDocumentsRequest(
        documents=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
        mask=shared.DocumentMask(
            field_paths=[
                "corrupti",
                "illum",
                "vel",
                "error",
            ],
        ),
        new_transaction=shared.TransactionOptions(
            read_only=shared.ReadOnly(
                read_time="deserunt",
            ),
            read_write=shared.ReadWrite(
                retry_transaction="suscipit",
            ),
        ),
        read_time="iure",
        transaction="magnam",
    ),
    access_token="debitis",
    alt="json",
    callback="delectus",
    database="tempora",
    fields_="suscipit",
    key="molestiae",
    oauth_token="minus",
    pretty_print=False,
    quota_user="placeat",
    upload_type="voluptatum",
    upload_protocol="iusto",
)
    
res = s.projects.firestore_projects_databases_documents_batch_get(req, operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurity(
    option1=operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.batch_get_documents_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `firestore_projects_databases_documents_batch_get` - Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested.
* `firestore_projects_databases_documents_batch_write` - Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.
* `firestore_projects_databases_documents_begin_transaction` - Starts a new transaction.
* `firestore_projects_databases_documents_commit` - Commits a transaction, while optionally updating documents.
* `firestore_projects_databases_documents_create_document` - Creates a new document.
* `firestore_projects_databases_documents_list_collection_ids` - Lists all the collection IDs underneath a document.
* `firestore_projects_databases_documents_list_documents` - Lists documents.
* `firestore_projects_databases_documents_listen` - Listens to changes. This method is only available via gRPC or WebChannel (not REST).
* `firestore_projects_databases_documents_partition_query` - Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.
* `firestore_projects_databases_documents_patch` - Updates or inserts a document.
* `firestore_projects_databases_documents_rollback` - Rolls back a transaction.
* `firestore_projects_databases_documents_run_aggregation_query` - Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ```
* `firestore_projects_databases_documents_run_query` - Runs a query.
* `firestore_projects_databases_documents_write` - Streams batches of document updates and deletes, in order. This method is only available via gRPC or WebChannel (not REST).
* `firestore_projects_databases_export_documents` - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* `firestore_projects_databases_import_documents` - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
* `firestore_projects_databases_indexes_create` - Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single field cannot be created.
* `firestore_projects_databases_indexes_delete` - Deletes an index.
* `firestore_projects_databases_indexes_get` - Gets an index.
* `firestore_projects_databases_indexes_list` - Lists the indexes that match the specified filters.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
