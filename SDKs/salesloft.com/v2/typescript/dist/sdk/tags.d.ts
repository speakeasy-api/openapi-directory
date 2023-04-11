import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Tags
 */
export declare class Tags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List team tags
     *
     * @remarks
     * Fetches a list of the tags used for a team. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     * Tags can be applied to mulitple resource types.
     *
     */
    getV2TagsJson(req: operations.GetV2TagsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2TagsJsonResponse>;
}
