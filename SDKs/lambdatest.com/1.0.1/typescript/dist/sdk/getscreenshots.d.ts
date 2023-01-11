import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GetScreenshots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * screenshots - Fetch specified screenshot details
     *
     * To fetch specified screenshot details
    **/
    screenshots(req: operations.ScreenshotsRequest, config?: AxiosRequestConfig): Promise<operations.ScreenshotsResponse>;
}
