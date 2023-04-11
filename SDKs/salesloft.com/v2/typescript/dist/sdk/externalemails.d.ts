import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * External Emails
 */
export declare class ExternalEmails {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an External Email
     *
     * @remarks
     * Creates an external email object.
     *
     */
    postV2ExternalEmailsJson(req: operations.PostV2ExternalEmailsJsonRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2ExternalEmailsJsonResponse>;
}
