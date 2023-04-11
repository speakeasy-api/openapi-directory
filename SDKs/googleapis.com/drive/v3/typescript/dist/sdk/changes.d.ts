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
     * Gets the starting pageToken for listing future changes.
     */
    driveChangesGetStartPageToken(req: operations.DriveChangesGetStartPageTokenRequest, security: operations.DriveChangesGetStartPageTokenSecurity, config?: AxiosRequestConfig): Promise<operations.DriveChangesGetStartPageTokenResponse>;
    /**
     * Lists the changes for a user or shared drive.
     */
    driveChangesList(req: operations.DriveChangesListRequest, security: operations.DriveChangesListSecurity, config?: AxiosRequestConfig): Promise<operations.DriveChangesListResponse>;
    /**
     * Subscribes to changes for a user. To use this method, you must include the pageToken query parameter.
     */
    driveChangesWatch(req: operations.DriveChangesWatchRequest, security: operations.DriveChangesWatchSecurity, config?: AxiosRequestConfig): Promise<operations.DriveChangesWatchResponse>;
}
