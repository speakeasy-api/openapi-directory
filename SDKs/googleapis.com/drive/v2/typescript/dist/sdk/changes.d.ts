import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Changes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes.
     */
    driveChangesGet(req: operations.DriveChangesGetRequest, security: operations.DriveChangesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DriveChangesGetResponse>;
    /**
     * Gets the starting pageToken for listing future changes.
     */
    driveChangesGetStartPageToken(req: operations.DriveChangesGetStartPageTokenRequest, security: operations.DriveChangesGetStartPageTokenSecurity, config?: AxiosRequestConfig): Promise<operations.DriveChangesGetStartPageTokenResponse>;
    /**
     * Lists the changes for a user or shared drive.
     */
    driveChangesList(req: operations.DriveChangesListRequest, security: operations.DriveChangesListSecurity, config?: AxiosRequestConfig): Promise<operations.DriveChangesListResponse>;
    /**
     * Subscribe to changes for a user.
     */
    driveChangesWatch(req: operations.DriveChangesWatchRequest, security: operations.DriveChangesWatchSecurity, config?: AxiosRequestConfig): Promise<operations.DriveChangesWatchResponse>;
}
