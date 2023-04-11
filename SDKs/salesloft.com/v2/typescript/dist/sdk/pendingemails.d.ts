import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Pending Emails
 */
export declare class PendingEmails {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetches a list of emails ready to be sent by an external email service. Only emails sent with an External Email Client will appear here.
     *
     * @remarks
     * Fetches a list of emails ready to be sent by an external email service.
     *
     */
    getV2PendingEmailsJson(req: operations.GetV2PendingEmailsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2PendingEmailsJsonResponse>;
    /**
     * Updates the status of an email sent by an External Email Client
     *
     * @remarks
     * Updates the status of an email sent by an External Email Client. Does not affect lofted emails.
     *
     */
    putV2PendingEmailsIdJson(req: operations.PutV2PendingEmailsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutV2PendingEmailsIdJsonResponse>;
}
