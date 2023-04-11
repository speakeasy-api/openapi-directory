import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 *
 * @see {@link https://www.sms77.io/en/docs/gateway/http-api/webhooks/} - Create, view and delete webhooks
 */
export declare class Hooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    hooksGet(req: operations.HooksGetRequest, config?: AxiosRequestConfig): Promise<operations.HooksGetResponse>;
    hooksPOST(req: operations.HooksPOSTRequest, config?: AxiosRequestConfig): Promise<operations.HooksPOSTResponse>;
}
