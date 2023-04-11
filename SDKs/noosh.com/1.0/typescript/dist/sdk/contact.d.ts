import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Contact {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Billing Recipients
     *
     * @remarks
     * List Billing Recipients
     */
    getBillingRecipients(req: operations.GetBillingRecipientsRequest, config?: AxiosRequestConfig): Promise<operations.GetBillingRecipientsResponse>;
    /**
     * List the contacts
     *
     * @remarks
     * List the contacts
     */
    getContactList(req: operations.GetContactListRequest, config?: AxiosRequestConfig): Promise<operations.GetContactListResponse>;
    /**
     * Contact Info
     *
     * @remarks
     * Contact Info
     */
    getContactUserInfo(req: operations.GetContactUserInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetContactUserInfoResponse>;
}
