import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Email Template Attachments
 */
export declare class EmailTemplateAttachments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List email template attachments
     *
     * @remarks
     * Fetches multiple email template attachment records. The records can be filtered and paged according to
     * the respective parameters.
     *
     */
    getV2EmailTemplateAttachmentsJson(req: operations.GetV2EmailTemplateAttachmentsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2EmailTemplateAttachmentsJsonResponse>;
}
