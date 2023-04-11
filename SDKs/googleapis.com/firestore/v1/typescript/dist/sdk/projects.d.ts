import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false` .
     */
    firestoreProjectsDatabasesCollectionGroupsFieldsList(req: operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest, security: operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse>;
    /**
     * Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
     */
    firestoreProjectsDatabasesCollectionGroupsIndexesCreate(req: operations.FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest, security: operations.FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse>;
    /**
     * Lists composite indexes.
     */
    firestoreProjectsDatabasesCollectionGroupsIndexesList(req: operations.FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest, security: operations.FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse>;
    /**
     * Create a database.
     */
    firestoreProjectsDatabasesCreate(req: operations.FirestoreProjectsDatabasesCreateRequest, security: operations.FirestoreProjectsDatabasesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesCreateResponse>;
    /**
     * Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested.
     */
    firestoreProjectsDatabasesDocumentsBatchGet(req: operations.FirestoreProjectsDatabasesDocumentsBatchGetRequest, security: operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsBatchGetResponse>;
    /**
     * Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.
     */
    firestoreProjectsDatabasesDocumentsBatchWrite(req: operations.FirestoreProjectsDatabasesDocumentsBatchWriteRequest, security: operations.FirestoreProjectsDatabasesDocumentsBatchWriteSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsBatchWriteResponse>;
    /**
     * Starts a new transaction.
     */
    firestoreProjectsDatabasesDocumentsBeginTransaction(req: operations.FirestoreProjectsDatabasesDocumentsBeginTransactionRequest, security: operations.FirestoreProjectsDatabasesDocumentsBeginTransactionSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsBeginTransactionResponse>;
    /**
     * Commits a transaction, while optionally updating documents.
     */
    firestoreProjectsDatabasesDocumentsCommit(req: operations.FirestoreProjectsDatabasesDocumentsCommitRequest, security: operations.FirestoreProjectsDatabasesDocumentsCommitSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsCommitResponse>;
    /**
     * Creates a new document.
     */
    firestoreProjectsDatabasesDocumentsCreateDocument(req: operations.FirestoreProjectsDatabasesDocumentsCreateDocumentRequest, security: operations.FirestoreProjectsDatabasesDocumentsCreateDocumentSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsCreateDocumentResponse>;
    /**
     * Lists all the collection IDs underneath a document.
     */
    firestoreProjectsDatabasesDocumentsListCollectionIds(req: operations.FirestoreProjectsDatabasesDocumentsListCollectionIdsRequest, security: operations.FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsListCollectionIdsResponse>;
    /**
     * Lists documents.
     */
    firestoreProjectsDatabasesDocumentsListDocuments(req: operations.FirestoreProjectsDatabasesDocumentsListDocumentsRequest, security: operations.FirestoreProjectsDatabasesDocumentsListDocumentsSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsListDocumentsResponse>;
    /**
     * Listens to changes. This method is only available via gRPC or WebChannel (not REST).
     */
    firestoreProjectsDatabasesDocumentsListen(req: operations.FirestoreProjectsDatabasesDocumentsListenRequest, security: operations.FirestoreProjectsDatabasesDocumentsListenSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsListenResponse>;
    /**
     * Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.
     */
    firestoreProjectsDatabasesDocumentsPartitionQuery(req: operations.FirestoreProjectsDatabasesDocumentsPartitionQueryRequest, security: operations.FirestoreProjectsDatabasesDocumentsPartitionQuerySecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsPartitionQueryResponse>;
    /**
     * Updates or inserts a document.
     */
    firestoreProjectsDatabasesDocumentsPatch(req: operations.FirestoreProjectsDatabasesDocumentsPatchRequest, security: operations.FirestoreProjectsDatabasesDocumentsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsPatchResponse>;
    /**
     * Rolls back a transaction.
     */
    firestoreProjectsDatabasesDocumentsRollback(req: operations.FirestoreProjectsDatabasesDocumentsRollbackRequest, security: operations.FirestoreProjectsDatabasesDocumentsRollbackSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsRollbackResponse>;
    /**
     * Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ```
     */
    firestoreProjectsDatabasesDocumentsRunAggregationQuery(req: operations.FirestoreProjectsDatabasesDocumentsRunAggregationQueryRequest, security: operations.FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsRunAggregationQueryResponse>;
    /**
     * Runs a query.
     */
    firestoreProjectsDatabasesDocumentsRunQuery(req: operations.FirestoreProjectsDatabasesDocumentsRunQueryRequest, security: operations.FirestoreProjectsDatabasesDocumentsRunQuerySecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsRunQueryResponse>;
    /**
     * Streams batches of document updates and deletes, in order. This method is only available via gRPC or WebChannel (not REST).
     */
    firestoreProjectsDatabasesDocumentsWrite(req: operations.FirestoreProjectsDatabasesDocumentsWriteRequest, security: operations.FirestoreProjectsDatabasesDocumentsWriteSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsWriteResponse>;
    /**
     * Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage. For more details on export behavior and output format, refer to: https://cloud.google.com/firestore/docs/manage-data/export-import
     */
    firestoreProjectsDatabasesExportDocuments(req: operations.FirestoreProjectsDatabasesExportDocumentsRequest, security: operations.FirestoreProjectsDatabasesExportDocumentsSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesExportDocumentsResponse>;
    /**
     * Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
     */
    firestoreProjectsDatabasesImportDocuments(req: operations.FirestoreProjectsDatabasesImportDocumentsRequest, security: operations.FirestoreProjectsDatabasesImportDocumentsSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesImportDocumentsResponse>;
    /**
     * List all the databases in the project.
     */
    firestoreProjectsDatabasesList(req: operations.FirestoreProjectsDatabasesListRequest, security: operations.FirestoreProjectsDatabasesListSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    firestoreProjectsDatabasesOperationsCancel(req: operations.FirestoreProjectsDatabasesOperationsCancelRequest, security: operations.FirestoreProjectsDatabasesOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    firestoreProjectsDatabasesOperationsDelete(req: operations.FirestoreProjectsDatabasesOperationsDeleteRequest, security: operations.FirestoreProjectsDatabasesOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesOperationsDeleteResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    firestoreProjectsDatabasesOperationsList(req: operations.FirestoreProjectsDatabasesOperationsListRequest, security: operations.FirestoreProjectsDatabasesOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesOperationsListResponse>;
    /**
     * Gets information about a location.
     */
    firestoreProjectsLocationsGet(req: operations.FirestoreProjectsLocationsGetRequest, security: operations.FirestoreProjectsLocationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsLocationsGetResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    firestoreProjectsLocationsList(req: operations.FirestoreProjectsLocationsListRequest, security: operations.FirestoreProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsLocationsListResponse>;
}
