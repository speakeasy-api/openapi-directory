import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Permissions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a permission from a file or shared drive.
     */
    drivePermissionsDelete(req: operations.DrivePermissionsDeleteRequest, security: operations.DrivePermissionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsDeleteResponse>;
    /**
     * Gets a permission by ID.
     */
    drivePermissionsGet(req: operations.DrivePermissionsGetRequest, security: operations.DrivePermissionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsGetResponse>;
    /**
     * Returns the permission ID for an email address.
     */
    drivePermissionsGetIdForEmail(req: operations.DrivePermissionsGetIdForEmailRequest, security: operations.DrivePermissionsGetIdForEmailSecurity, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsGetIdForEmailResponse>;
    /**
     * Inserts a permission for a file or shared drive.
     */
    drivePermissionsInsert(req: operations.DrivePermissionsInsertRequest, security: operations.DrivePermissionsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsInsertResponse>;
    /**
     * Lists a file's or shared drive's permissions.
     */
    drivePermissionsList(req: operations.DrivePermissionsListRequest, security: operations.DrivePermissionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsListResponse>;
    /**
     * Updates a permission using patch semantics.
     */
    drivePermissionsPatch(req: operations.DrivePermissionsPatchRequest, security: operations.DrivePermissionsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsPatchResponse>;
    /**
     * Updates a permission.
     */
    drivePermissionsUpdate(req: operations.DrivePermissionsUpdateRequest, security: operations.DrivePermissionsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsUpdateResponse>;
}
