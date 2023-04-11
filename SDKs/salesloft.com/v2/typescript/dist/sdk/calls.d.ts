import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Call Management
 */
export declare class Calls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List calls
     *
     * @remarks
     * Fetches multiple call records. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     */
    getV2ActivitiesCallsJson(req: operations.GetV2ActivitiesCallsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2ActivitiesCallsJsonResponse>;
    /**
     * Fetch a call
     *
     * @remarks
     * Fetches a call, by ID only.
     *
     */
    getV2ActivitiesCallsIdJson(req: operations.GetV2ActivitiesCallsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2ActivitiesCallsIdJsonResponse>;
    /**
     * Create a call
     *
     * @remarks
     * Creates a call. The parameters of this endpoint can be used to create an action
     * and ensure that the CRM Task is mapped correctly.
     *
     */
    postV2ActivitiesCallsJson(req: operations.PostV2ActivitiesCallsJsonRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2ActivitiesCallsJsonResponse>;
}
