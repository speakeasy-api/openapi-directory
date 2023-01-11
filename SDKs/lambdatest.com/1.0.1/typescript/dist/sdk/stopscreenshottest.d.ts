import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class StopScreenshotTest {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * stopScreenshotsTest - Stop specified screenshot test
     *
     * Stop specified screenshot test
    **/
    stopScreenshotsTest(req: operations.StopScreenshotsTestRequest, config?: AxiosRequestConfig): Promise<operations.StopScreenshotsTestResponse>;
}
