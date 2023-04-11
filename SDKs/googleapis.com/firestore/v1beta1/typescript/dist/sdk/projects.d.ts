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
     * Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
     */
    firestoreProjectsDatabasesExportDocuments(req: operations.FirestoreProjectsDatabasesExportDocumentsRequest, security: operations.FirestoreProjectsDatabasesExportDocumentsSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesExportDocumentsResponse>;
    /**
     * Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
     */
    firestoreProjectsDatabasesImportDocuments(req: operations.FirestoreProjectsDatabasesImportDocumentsRequest, security: operations.FirestoreProjectsDatabasesImportDocumentsSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesImportDocumentsResponse>;
    /**
     * Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single field cannot be created.
     */
    firestoreProjectsDatabasesIndexesCreate(req: operations.FirestoreProjectsDatabasesIndexesCreateRequest, security: operations.FirestoreProjectsDatabasesIndexesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesIndexesCreateResponse>;
    /**
     * Deletes an index.
     */
    firestoreProjectsDatabasesIndexesDelete(req: operations.FirestoreProjectsDatabasesIndexesDeleteRequest, security: operations.FirestoreProjectsDatabasesIndexesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesIndexesDeleteResponse>;
    /**
     * Gets an index.
     */
    firestoreProjectsDatabasesIndexesGet(req: operations.FirestoreProjectsDatabasesIndexesGetRequest, security: operations.FirestoreProjectsDatabasesIndexesGetSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesIndexesGetResponse>;
    /**
     * Lists the indexes that match the specified filters.
     */
    firestoreProjectsDatabasesIndexesList(req: operations.FirestoreProjectsDatabasesIndexesListRequest, security: operations.FirestoreProjectsDatabasesIndexesListSecurity, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesIndexesListResponse>;
}
