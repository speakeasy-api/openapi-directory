import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Testing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Check push
     *
     * @remarks
     * Sends a test message via push, this is a test endpoint to verify your push settings
     */
    checkPush(req: shared.CheckPushRequest, config?: AxiosRequestConfig): Promise<operations.CheckPushResponse>;
    /**
     * Check SQS
     *
     * @remarks
     * Validates Amazon SQS credentials
     */
    checkSQS(req: shared.CheckSQSRequest, config?: AxiosRequestConfig): Promise<operations.CheckSQSResponse>;
}
