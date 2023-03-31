# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption2;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurity;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesDocumentsBatchGetPathParams;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesDocumentsBatchGetQueryParams;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesDocumentsBatchGetRequest;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesDocumentsBatchGetResponse;
import org.openapis.openapi.models.shared.BatchGetDocumentsRequest;
import org.openapis.openapi.models.shared.TransactionOptions;
import org.openapis.openapi.models.shared.ReadWrite;
import org.openapis.openapi.models.shared.ReadOnly;
import org.openapis.openapi.models.shared.DocumentMask;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirestoreProjectsDatabasesDocumentsBatchGetRequest req = new FirestoreProjectsDatabasesDocumentsBatchGetRequest() {{
                security = new FirestoreProjectsDatabasesDocumentsBatchGetSecurity() {{
                    option1 = new FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new FirestoreProjectsDatabasesDocumentsBatchGetPathParams() {{
                    database = "corrupti";
                }};
                queryParams = new FirestoreProjectsDatabasesDocumentsBatchGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new BatchGetDocumentsRequest() {{
                    documents = new String[]{{
                        add("iure"),
                        add("magnam"),
                    }};
                    mask = new DocumentMask() {{
                        fieldPaths = new String[]{{
                            add("ipsa"),
                            add("delectus"),
                            add("tempora"),
                            add("suscipit"),
                        }};
                    }};
                    newTransaction = new TransactionOptions() {{
                        readOnly = new ReadOnly() {{
                            readTime = "molestiae";
                        }};
                        readWrite = new ReadWrite() {{
                            retryTransaction = "minus";
                        }};
                    }};
                    readTime = "placeat";
                    transaction = "voluptatum";
                }};
            }};            

            FirestoreProjectsDatabasesDocumentsBatchGetResponse res = sdk.projects.firestoreProjectsDatabasesDocumentsBatchGet(req);

            if (res.batchGetDocumentsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `firestoreProjectsDatabasesDocumentsBatchGet` - Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested.
* `firestoreProjectsDatabasesDocumentsBatchWrite` - Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.
* `firestoreProjectsDatabasesDocumentsBeginTransaction` - Starts a new transaction.
* `firestoreProjectsDatabasesDocumentsCommit` - Commits a transaction, while optionally updating documents.
* `firestoreProjectsDatabasesDocumentsCreateDocument` - Creates a new document.
* `firestoreProjectsDatabasesDocumentsListCollectionIds` - Lists all the collection IDs underneath a document.
* `firestoreProjectsDatabasesDocumentsListDocuments` - Lists documents.
* `firestoreProjectsDatabasesDocumentsListen` - Listens to changes. This method is only available via gRPC or WebChannel (not REST).
* `firestoreProjectsDatabasesDocumentsPartitionQuery` - Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.
* `firestoreProjectsDatabasesDocumentsPatch` - Updates or inserts a document.
* `firestoreProjectsDatabasesDocumentsRollback` - Rolls back a transaction.
* `firestoreProjectsDatabasesDocumentsRunAggregationQuery` - Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ```
* `firestoreProjectsDatabasesDocumentsRunQuery` - Runs a query.
* `firestoreProjectsDatabasesDocumentsWrite` - Streams batches of document updates and deletes, in order. This method is only available via gRPC or WebChannel (not REST).
* `firestoreProjectsDatabasesExportDocuments` - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* `firestoreProjectsDatabasesImportDocuments` - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
* `firestoreProjectsDatabasesIndexesCreate` - Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single field cannot be created.
* `firestoreProjectsDatabasesIndexesDelete` - Deletes an index.
* `firestoreProjectsDatabasesIndexesGet` - Gets an index.
* `firestoreProjectsDatabasesIndexesList` - Lists the indexes that match the specified filters.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
