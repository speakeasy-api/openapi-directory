import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Databases {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a database from a Cloud SQL instance.
     */
    sqlDatabasesDelete(req: operations.SqlDatabasesDeleteRequest, security: operations.SqlDatabasesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.SqlDatabasesDeleteResponse>;
    /**
     * Retrieves a resource containing information about a database inside a Cloud SQL instance.
     */
    sqlDatabasesGet(req: operations.SqlDatabasesGetRequest, security: operations.SqlDatabasesGetSecurity, config?: AxiosRequestConfig): Promise<operations.SqlDatabasesGetResponse>;
    /**
     * Inserts a resource containing information about a database inside a Cloud SQL instance.
     */
    sqlDatabasesInsert(req: operations.SqlDatabasesInsertRequest, security: operations.SqlDatabasesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.SqlDatabasesInsertResponse>;
    /**
     * Lists databases in the specified Cloud SQL instance.
     */
    sqlDatabasesList(req: operations.SqlDatabasesListRequest, security: operations.SqlDatabasesListSecurity, config?: AxiosRequestConfig): Promise<operations.SqlDatabasesListResponse>;
    /**
     * Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.
     */
    sqlDatabasesPatch(req: operations.SqlDatabasesPatchRequest, security: operations.SqlDatabasesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.SqlDatabasesPatchResponse>;
    /**
     * Updates a resource containing information about a database inside a Cloud SQL instance.
     */
    sqlDatabasesUpdate(req: operations.SqlDatabasesUpdateRequest, security: operations.SqlDatabasesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.SqlDatabasesUpdateResponse>;
}
