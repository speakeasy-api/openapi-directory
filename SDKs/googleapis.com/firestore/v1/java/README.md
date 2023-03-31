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

import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption2;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListPathParams;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest req = new FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest() {{
                security = new FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity() {{
                    option1 = new FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new FirestoreProjectsDatabasesCollectionGroupsFieldsListPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    filter = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    pageSize = 623564;
                    pageToken = "deserunt";
                    prettyPrint = false;
                    quotaUser = "suscipit";
                    uploadType = "iure";
                    uploadProtocol = "magnam";
                }};
            }};            

            FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse res = sdk.projects.firestoreProjectsDatabasesCollectionGroupsFieldsList(req);

            if (res.googleFirestoreAdminV1ListFieldsResponse.isPresent()) {
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

* `firestoreProjectsDatabasesCollectionGroupsFieldsList` - Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false` .
* `firestoreProjectsDatabasesCollectionGroupsIndexesCreate` - Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
* `firestoreProjectsDatabasesCollectionGroupsIndexesList` - Lists composite indexes.
* `firestoreProjectsDatabasesCreate` - Create a database.
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
* `firestoreProjectsDatabasesExportDocuments` - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage. For more details on export behavior and output format, refer to: https://cloud.google.com/firestore/docs/manage-data/export-import
* `firestoreProjectsDatabasesImportDocuments` - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
* `firestoreProjectsDatabasesList` - List all the databases in the project.
* `firestoreProjectsDatabasesOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `firestoreProjectsDatabasesOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `firestoreProjectsDatabasesOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `firestoreProjectsLocationsGet` - Gets information about a location.
* `firestoreProjectsLocationsList` - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
