import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Email Management
 */
export declare class Emails {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List emails
     *
     * @remarks
     * Fetches multiple email records. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     */
    getV2ActivitiesEmailsJson(req: operations.GetV2ActivitiesEmailsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2ActivitiesEmailsJsonResponse>;
    /**
     * Fetch an email
     *
     * @remarks
     * Fetches an email, by ID only.
     *
     */
    getV2ActivitiesEmailsIdJson(req: operations.GetV2ActivitiesEmailsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2ActivitiesEmailsIdJsonResponse>;
}
