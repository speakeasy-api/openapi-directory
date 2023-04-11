import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * User permissions and other object linking
 */
export declare class Permissions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Unlink an Object from another Object
     */
    deletePermissions(req: shared.Permission, config?: AxiosRequestConfig): Promise<operations.DeletePermissionsResponse>;
    /**
     * Link an Object to another Object
     */
    postPermissions(req: shared.Permission, config?: AxiosRequestConfig): Promise<operations.PostPermissionsResponse>;
}
