import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 *
 * @see {@link https://sms77.io/en/docs/gateway/http-api/contacts} - Retrieve/edit/delete contact(s)
 */
export declare class Contacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    contactsGet(req: operations.ContactsGetRequest, config?: AxiosRequestConfig): Promise<operations.ContactsGetResponse>;
    contactsPOST(req: operations.ContactsPOSTRequest, config?: AxiosRequestConfig): Promise<operations.ContactsPOSTResponse>;
}
