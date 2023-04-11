import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GetZippedScreenshots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetch Zipped Screenshots
     *
     * @remarks
     * Fetch Zipped Screenshots
     */
    zippedScreenshots(req: operations.ZippedScreenshotsRequest, security: operations.ZippedScreenshotsSecurity, config?: AxiosRequestConfig): Promise<operations.ZippedScreenshotsResponse>;
}
