import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Parents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes a parent from a file.
     */
    driveParentsDelete(req: operations.DriveParentsDeleteRequest, security: operations.DriveParentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DriveParentsDeleteResponse>;
    /**
     * Gets a specific parent reference.
     */
    driveParentsGet(req: operations.DriveParentsGetRequest, security: operations.DriveParentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DriveParentsGetResponse>;
    /**
     * Adds a parent folder for a file.
     */
    driveParentsInsert(req: operations.DriveParentsInsertRequest, security: operations.DriveParentsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DriveParentsInsertResponse>;
    /**
     * Lists a file's parents.
     */
    driveParentsList(req: operations.DriveParentsListRequest, security: operations.DriveParentsListSecurity, config?: AxiosRequestConfig): Promise<operations.DriveParentsListResponse>;
}
