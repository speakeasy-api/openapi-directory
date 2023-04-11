import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Apps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a specific app.
     */
    driveAppsGet(req: operations.DriveAppsGetRequest, security: operations.DriveAppsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DriveAppsGetResponse>;
    /**
     * Lists a user's installed apps.
     */
    driveAppsList(req: operations.DriveAppsListRequest, security: operations.DriveAppsListSecurity, config?: AxiosRequestConfig): Promise<operations.DriveAppsListResponse>;
}
