import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Email Templates Management
 */
export declare class EmailTemplates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List email templates
     *
     * @remarks
     * Fetches multiple email template records. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     */
    getV2EmailTemplatesJson(req: operations.GetV2EmailTemplatesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2EmailTemplatesJsonResponse>;
    /**
     * Fetch an email template
     *
     * @remarks
     * Fetches an email template, by ID only.
     *
     */
    getV2EmailTemplatesIdJson(req: operations.GetV2EmailTemplatesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2EmailTemplatesIdJsonResponse>;
}
