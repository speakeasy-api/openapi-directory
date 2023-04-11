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
     * Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
     */
    datastoreProjectsAllocateIds(req: operations.DatastoreProjectsAllocateIdsRequest, security: operations.DatastoreProjectsAllocateIdsSecurity, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsAllocateIdsResponse>;
    /**
     * Begins a new transaction.
     */
    datastoreProjectsBeginTransaction(req: operations.DatastoreProjectsBeginTransactionRequest, security: operations.DatastoreProjectsBeginTransactionSecurity, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsBeginTransactionResponse>;
    /**
     * Commits a transaction, optionally creating, deleting or modifying some entities.
     */
    datastoreProjectsCommit(req: operations.DatastoreProjectsCommitRequest, security: operations.DatastoreProjectsCommitSecurity, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsCommitResponse>;
    /**
     * Looks up entities by key.
     */
    datastoreProjectsLookup(req: operations.DatastoreProjectsLookupRequest, security: operations.DatastoreProjectsLookupSecurity, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsLookupResponse>;
    /**
     * Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
     */
    datastoreProjectsReserveIds(req: operations.DatastoreProjectsReserveIdsRequest, security: operations.DatastoreProjectsReserveIdsSecurity, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsReserveIdsResponse>;
    /**
     * Rolls back a transaction.
     */
    datastoreProjectsRollback(req: operations.DatastoreProjectsRollbackRequest, security: operations.DatastoreProjectsRollbackSecurity, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsRollbackResponse>;
    /**
     * Runs an aggregation query.
     */
    datastoreProjectsRunAggregationQuery(req: operations.DatastoreProjectsRunAggregationQueryRequest, security: operations.DatastoreProjectsRunAggregationQuerySecurity, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsRunAggregationQueryResponse>;
    /**
     * Queries for entities.
     */
    datastoreProjectsRunQuery(req: operations.DatastoreProjectsRunQueryRequest, security: operations.DatastoreProjectsRunQuerySecurity, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsRunQueryResponse>;
}
