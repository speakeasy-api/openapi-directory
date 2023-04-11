import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a user from a Cloud SQL instance.
     */
    sqlUsersDelete(req: operations.SqlUsersDeleteRequest, security: operations.SqlUsersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.SqlUsersDeleteResponse>;
    /**
     * Retrieves a resource containing information about a user.
     */
    sqlUsersGet(req: operations.SqlUsersGetRequest, security: operations.SqlUsersGetSecurity, config?: AxiosRequestConfig): Promise<operations.SqlUsersGetResponse>;
    /**
     * Creates a new user in a Cloud SQL instance.
     */
    sqlUsersInsert(req: operations.SqlUsersInsertRequest, security: operations.SqlUsersInsertSecurity, config?: AxiosRequestConfig): Promise<operations.SqlUsersInsertResponse>;
    /**
     * Lists users in the specified Cloud SQL instance.
     */
    sqlUsersList(req: operations.SqlUsersListRequest, security: operations.SqlUsersListSecurity, config?: AxiosRequestConfig): Promise<operations.SqlUsersListResponse>;
    /**
     * Updates an existing user in a Cloud SQL instance.
     */
    sqlUsersUpdate(req: operations.SqlUsersUpdateRequest, security: operations.SqlUsersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.SqlUsersUpdateResponse>;
}
