import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Steps
 */
export declare class Steps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List steps
     *
     * @remarks
     * Fetches multiple step records. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     */
    getV2StepsJson(req: operations.GetV2StepsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2StepsJsonResponse>;
    /**
     * Fetch a step
     *
     * @remarks
     * Fetches a step, by ID only.
     *
     */
    getV2StepsIdJson(req: operations.GetV2StepsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2StepsIdJsonResponse>;
}
