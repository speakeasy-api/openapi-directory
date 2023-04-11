import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Team Template Attachments
 */
export declare class TeamTemplateAttachments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List team template attachments
     *
     * @remarks
     * Fetches multiple team template attachment records. The records can be filtered and paged according to
     * the respective parameters.
     *
     */
    getV2TeamTemplateAttachmentsJson(req: operations.GetV2TeamTemplateAttachmentsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2TeamTemplateAttachmentsJsonResponse>;
}
