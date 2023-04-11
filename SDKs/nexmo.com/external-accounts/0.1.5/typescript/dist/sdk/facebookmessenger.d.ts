import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Managing your [Facebook Messenger](https://developer.nexmo.com/messages/concepts/facebook) account
 */
export declare class FacebookMessenger {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a Messenger account
     */
    createMessengerAccount(req: operations.CreateMessengerAccountRequestBody, security: operations.CreateMessengerAccountSecurity, config?: AxiosRequestConfig): Promise<operations.CreateMessengerAccountResponse>;
    /**
     * Delete a Messenger account
     */
    deleteMessengerAccount(req: operations.DeleteMessengerAccountRequest, security: operations.DeleteMessengerAccountSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteMessengerAccountResponse>;
    /**
     * Retrieve a Messenger account
     */
    getMessengerAccount(req: operations.GetMessengerAccountRequest, security: operations.GetMessengerAccountSecurity, config?: AxiosRequestConfig): Promise<operations.GetMessengerAccountResponse>;
    /**
     * Update a Messenger account
     */
    updateMessengerAccount(req: operations.UpdateMessengerAccountRequest, security: operations.UpdateMessengerAccountSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateMessengerAccountResponse>;
}
