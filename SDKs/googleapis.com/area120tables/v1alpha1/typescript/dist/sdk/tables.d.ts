import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Tables {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists tables for the user.
     */
    area120tablesTablesList(req: operations.Area120tablesTablesListRequest, security: operations.Area120tablesTablesListSecurity, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesListResponse>;
    /**
     * Creates multiple rows.
     */
    area120tablesTablesRowsBatchCreate(req: operations.Area120tablesTablesRowsBatchCreateRequest, security: operations.Area120tablesTablesRowsBatchCreateSecurity, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsBatchCreateResponse>;
    /**
     * Deletes multiple rows.
     */
    area120tablesTablesRowsBatchDelete(req: operations.Area120tablesTablesRowsBatchDeleteRequest, security: operations.Area120tablesTablesRowsBatchDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsBatchDeleteResponse>;
    /**
     * Updates multiple rows.
     */
    area120tablesTablesRowsBatchUpdate(req: operations.Area120tablesTablesRowsBatchUpdateRequest, security: operations.Area120tablesTablesRowsBatchUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsBatchUpdateResponse>;
    /**
     * Creates a row.
     */
    area120tablesTablesRowsCreate(req: operations.Area120tablesTablesRowsCreateRequest, security: operations.Area120tablesTablesRowsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsCreateResponse>;
    /**
     * Deletes a row.
     */
    area120tablesTablesRowsDelete(req: operations.Area120tablesTablesRowsDeleteRequest, security: operations.Area120tablesTablesRowsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsDeleteResponse>;
    /**
     * Lists rows in a table. Returns NOT_FOUND if the table does not exist.
     */
    area120tablesTablesRowsList(req: operations.Area120tablesTablesRowsListRequest, security: operations.Area120tablesTablesRowsListSecurity, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsListResponse>;
    /**
     * Updates a row.
     */
    area120tablesTablesRowsPatch(req: operations.Area120tablesTablesRowsPatchRequest, security: operations.Area120tablesTablesRowsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsPatchResponse>;
}
