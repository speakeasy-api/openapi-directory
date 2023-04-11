import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Cadence Management
 */
export declare class Cadences {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List cadences
     *
     * @remarks
     * Fetches multiple cadence records. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     */
    getV2CadencesJson(req: operations.GetV2CadencesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CadencesJsonResponse>;
    /**
     * Fetch a cadence
     *
     * @remarks
     * Fetches a cadence, by ID only.
     *
     */
    getV2CadencesIdJson(req: operations.GetV2CadencesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CadencesIdJsonResponse>;
}
