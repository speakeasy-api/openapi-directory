# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/firestore/v1beta1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.FirestoreProjectsDatabasesDocumentsBatchGetRequest{
        DollarXgafv: "2",
        BatchGetDocumentsRequest: &shared.BatchGetDocumentsRequest{
            Documents: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            Mask: &shared.DocumentMask{
                FieldPaths: []string{
                    "corrupti",
                    "illum",
                    "vel",
                    "error",
                },
            },
            NewTransaction: &shared.TransactionOptions{
                ReadOnly: &shared.ReadOnly{
                    ReadTime: "deserunt",
                },
                ReadWrite: &shared.ReadWrite{
                    RetryTransaction: "suscipit",
                },
            },
            ReadTime: "iure",
            Transaction: "magnam",
        },
        AccessToken: "debitis",
        Alt: "json",
        Callback: "delectus",
        Database: "tempora",
        Fields: "suscipit",
        Key: "molestiae",
        OauthToken: "minus",
        PrettyPrint: false,
        QuotaUser: "placeat",
        UploadType: "voluptatum",
        UploadProtocol: "iusto",
    }

    ctx := context.Background()
    res, err := s.Projects.FirestoreProjectsDatabasesDocumentsBatchGet(ctx, req, operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurity{
        Option1: &operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetDocumentsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `FirestoreProjectsDatabasesDocumentsBatchGet` - Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested.
* `FirestoreProjectsDatabasesDocumentsBatchWrite` - Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.
* `FirestoreProjectsDatabasesDocumentsBeginTransaction` - Starts a new transaction.
* `FirestoreProjectsDatabasesDocumentsCommit` - Commits a transaction, while optionally updating documents.
* `FirestoreProjectsDatabasesDocumentsCreateDocument` - Creates a new document.
* `FirestoreProjectsDatabasesDocumentsListCollectionIds` - Lists all the collection IDs underneath a document.
* `FirestoreProjectsDatabasesDocumentsListDocuments` - Lists documents.
* `FirestoreProjectsDatabasesDocumentsListen` - Listens to changes. This method is only available via gRPC or WebChannel (not REST).
* `FirestoreProjectsDatabasesDocumentsPartitionQuery` - Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.
* `FirestoreProjectsDatabasesDocumentsPatch` - Updates or inserts a document.
* `FirestoreProjectsDatabasesDocumentsRollback` - Rolls back a transaction.
* `FirestoreProjectsDatabasesDocumentsRunAggregationQuery` - Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ```
* `FirestoreProjectsDatabasesDocumentsRunQuery` - Runs a query.
* `FirestoreProjectsDatabasesDocumentsWrite` - Streams batches of document updates and deletes, in order. This method is only available via gRPC or WebChannel (not REST).
* `FirestoreProjectsDatabasesExportDocuments` - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* `FirestoreProjectsDatabasesImportDocuments` - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
* `FirestoreProjectsDatabasesIndexesCreate` - Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single field cannot be created.
* `FirestoreProjectsDatabasesIndexesDelete` - Deletes an index.
* `FirestoreProjectsDatabasesIndexesGet` - Gets an index.
* `FirestoreProjectsDatabasesIndexesList` - Lists the indexes that match the specified filters.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
