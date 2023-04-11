import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * CRM Activity Management
 */
export declare class CRMActivities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List crm activities
     *
     * @remarks
     * Fetches multiple crm activity records. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     */
    getV2CrmActivitiesJson(req: operations.GetV2CrmActivitiesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CrmActivitiesJsonResponse>;
    /**
     * Fetch a crm activity
     *
     * @remarks
     * Fetches a crm activity, by ID only.
     *
     */
    getV2CrmActivitiesIdJson(req: operations.GetV2CrmActivitiesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CrmActivitiesIdJsonResponse>;
}
