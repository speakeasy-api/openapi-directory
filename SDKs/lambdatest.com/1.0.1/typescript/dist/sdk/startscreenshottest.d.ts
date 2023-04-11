import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class StartScreenshotTest {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Start Screenshot Test
     *
     * @remarks
     * Start Screenshot Test
     */
    startScreenshotTest(req: shared.ScreenshotPayload, security: operations.StartScreenshotTestSecurity, config?: AxiosRequestConfig): Promise<operations.StartScreenshotTestResponse>;
}
