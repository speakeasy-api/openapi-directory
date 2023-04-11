import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class About {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets information about the user, the user's Drive, and system capabilities.
     */
    driveAboutGet(req: operations.DriveAboutGetRequest, security: operations.DriveAboutGetSecurity, config?: AxiosRequestConfig): Promise<operations.DriveAboutGetResponse>;
}
