import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Managing your [Viber Service Message](https://developer.nexmo.com/messages/concepts/viber) account
 */
export declare class ViberServiceMessage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a Viber Service Message account
     */
    getVSMAccount(req: operations.GetVSMAccountRequest, security: operations.GetVSMAccountSecurity, config?: AxiosRequestConfig): Promise<operations.GetVSMAccountResponse>;
}
