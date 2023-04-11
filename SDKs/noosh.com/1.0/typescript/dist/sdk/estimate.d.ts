import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Estimate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a specific estimate of project
     *
     * @remarks
     * Get a specific estimate of project
     */
    getEstimate(req: operations.GetEstimateRequest, config?: AxiosRequestConfig): Promise<operations.GetEstimateResponse>;
    /**
     * List the Estimates
     *
     * @remarks
     * List the Estimates
     */
    getEstimateList(req: operations.GetEstimateListRequest, config?: AxiosRequestConfig): Promise<operations.GetEstimateListResponse>;
    /**
     * Create a Estimate
     *
     * @remarks
     * Create a Estimate
     */
    postEstimateJson(req: operations.PostEstimateJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostEstimateJsonResponse>;
    /**
     * Create a Estimate
     *
     * @remarks
     * Create a Estimate
     */
    postEstimateRaw(req: operations.PostEstimateRawRequest, config?: AxiosRequestConfig): Promise<operations.PostEstimateRawResponse>;
}
