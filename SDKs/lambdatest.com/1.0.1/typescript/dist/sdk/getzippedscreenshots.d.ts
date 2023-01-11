import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GetZippedScreenshots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * zippedScreenshots - Fetch Zipped Screenshots
     *
     * Fetch Zipped Screenshots
    **/
    zippedScreenshots(req: operations.ZippedScreenshotsRequest, config?: AxiosRequestConfig): Promise<operations.ZippedScreenshotsResponse>;
}
