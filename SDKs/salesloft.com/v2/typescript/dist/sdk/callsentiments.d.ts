import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Call Sentiments
 */
export declare class CallSentiments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List call sentiments
     *
     * @remarks
     * Fetches multiple call sentiment records. The records can be sorted according to
     * the respective parameters. Call sentiments must be configured in application. This will
     * change in the future, but please contact us if you have a pressing use case.
     *
     */
    getV2CallSentimentsJson(req: operations.GetV2CallSentimentsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CallSentimentsJsonResponse>;
}
