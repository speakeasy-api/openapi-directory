import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class StartScreenshotTest {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * startScreenshotTest - Start Screenshot Test
     *
     * Start Screenshot Test
    **/
    startScreenshotTest(req: operations.StartScreenshotTestRequest, config?: AxiosRequestConfig): Promise<operations.StartScreenshotTestResponse>;
}
