import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class StopScreenshotTest {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Stop specified screenshot test
     *
     * @remarks
     * Stop specified screenshot test
     */
    stopScreenshotsTest(req: operations.StopScreenshotsTestRequest, security: operations.StopScreenshotsTestSecurity, config?: AxiosRequestConfig): Promise<operations.StopScreenshotsTestResponse>;
}
