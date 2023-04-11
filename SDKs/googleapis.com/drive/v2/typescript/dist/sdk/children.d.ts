import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Children {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes a child from a folder.
     */
    driveChildrenDelete(req: operations.DriveChildrenDeleteRequest, security: operations.DriveChildrenDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DriveChildrenDeleteResponse>;
    /**
     * Gets a specific child reference.
     */
    driveChildrenGet(req: operations.DriveChildrenGetRequest, security: operations.DriveChildrenGetSecurity, config?: AxiosRequestConfig): Promise<operations.DriveChildrenGetResponse>;
    /**
     * Inserts a file into a folder.
     */
    driveChildrenInsert(req: operations.DriveChildrenInsertRequest, security: operations.DriveChildrenInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DriveChildrenInsertResponse>;
    /**
     * Lists a folder's children.
     */
    driveChildrenList(req: operations.DriveChildrenListRequest, security: operations.DriveChildrenListSecurity, config?: AxiosRequestConfig): Promise<operations.DriveChildrenListResponse>;
}
