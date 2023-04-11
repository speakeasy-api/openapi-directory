import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Teamdrives {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deprecated use drives.delete instead.
     */
    driveTeamdrivesDelete(req: operations.DriveTeamdrivesDeleteRequest, security: operations.DriveTeamdrivesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DriveTeamdrivesDeleteResponse>;
    /**
     * Deprecated use drives.get instead.
     */
    driveTeamdrivesGet(req: operations.DriveTeamdrivesGetRequest, security: operations.DriveTeamdrivesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DriveTeamdrivesGetResponse>;
    /**
     * Deprecated use drives.insert instead.
     */
    driveTeamdrivesInsert(req: operations.DriveTeamdrivesInsertRequest, security: operations.DriveTeamdrivesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DriveTeamdrivesInsertResponse>;
    /**
     * Deprecated use drives.list instead.
     */
    driveTeamdrivesList(req: operations.DriveTeamdrivesListRequest, security: operations.DriveTeamdrivesListSecurity, config?: AxiosRequestConfig): Promise<operations.DriveTeamdrivesListResponse>;
    /**
     * Deprecated use drives.update instead.
     */
    driveTeamdrivesUpdate(req: operations.DriveTeamdrivesUpdateRequest, security: operations.DriveTeamdrivesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DriveTeamdrivesUpdateResponse>;
}
