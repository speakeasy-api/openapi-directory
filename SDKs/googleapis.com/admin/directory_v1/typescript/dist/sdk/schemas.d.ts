import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Schemas {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a schema.
     */
    directorySchemasDelete(req: operations.DirectorySchemasDeleteRequest, security: operations.DirectorySchemasDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DirectorySchemasDeleteResponse>;
    /**
     * Retrieves a schema.
     */
    directorySchemasGet(req: operations.DirectorySchemasGetRequest, security: operations.DirectorySchemasGetSecurity, config?: AxiosRequestConfig): Promise<operations.DirectorySchemasGetResponse>;
    /**
     * Creates a schema.
     */
    directorySchemasInsert(req: operations.DirectorySchemasInsertRequest, security: operations.DirectorySchemasInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DirectorySchemasInsertResponse>;
    /**
     * Retrieves all schemas for a customer.
     */
    directorySchemasList(req: operations.DirectorySchemasListRequest, security: operations.DirectorySchemasListSecurity, config?: AxiosRequestConfig): Promise<operations.DirectorySchemasListResponse>;
    /**
     * Patches a schema.
     */
    directorySchemasPatch(req: operations.DirectorySchemasPatchRequest, security: operations.DirectorySchemasPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DirectorySchemasPatchResponse>;
    /**
     * Updates a schema.
     */
    directorySchemasUpdate(req: operations.DirectorySchemasUpdateRequest, security: operations.DirectorySchemasUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DirectorySchemasUpdateResponse>;
}
