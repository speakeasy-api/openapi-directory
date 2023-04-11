import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Account Stage Management
 */
export declare class AccountStages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List account stages
     *
     * @remarks
     * Fetches multiple account stage records. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     */
    getV2AccountStagesJson(req: operations.GetV2AccountStagesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2AccountStagesJsonResponse>;
    /**
     * Fetch an account stage
     *
     * @remarks
     * Fetches an account stage, by ID only.
     *
     */
    getV2AccountStagesIdJson(req: operations.GetV2AccountStagesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2AccountStagesIdJsonResponse>;
}
