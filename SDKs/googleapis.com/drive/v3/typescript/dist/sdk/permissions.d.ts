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
     * Creates a permission for a file or shared drive. For more information on creating permissions, see Share files, folders & drives.
     */
    drivePermissionsCreate(req: operations.DrivePermissionsCreateRequest, security: operations.DrivePermissionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsCreateResponse>;
    /**
     * Deletes a permission.
     */
    drivePermissionsDelete(req: operations.DrivePermissionsDeleteRequest, security: operations.DrivePermissionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsDeleteResponse>;
    /**
     * Gets a permission by ID.
     */
    drivePermissionsGet(req: operations.DrivePermissionsGetRequest, security: operations.DrivePermissionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsGetResponse>;
    /**
     * Lists a file's or shared drive's permissions.
     */
    drivePermissionsList(req: operations.DrivePermissionsListRequest, security: operations.DrivePermissionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsListResponse>;
    /**
     * Updates a permission with patch semantics.
     */
    drivePermissionsUpdate(req: operations.DrivePermissionsUpdateRequest, security: operations.DrivePermissionsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsUpdateResponse>;
}
