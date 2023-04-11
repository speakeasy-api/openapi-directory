import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * CRM Activity Fields
 */
export declare class CRMActivityFields {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List crm activity fields
     *
     * @remarks
     * Fetches multiple crm activity field records. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     */
    getV2CrmActivityFieldsJson(req: operations.GetV2CrmActivityFieldsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CrmActivityFieldsJsonResponse>;
}
