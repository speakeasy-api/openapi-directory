import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Inbound messages to an external account which is linked to an application will be delivered to the application's inbound URL.
 */
export declare class Application {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Link application to an account
     */
    linkApplication(req: operations.LinkApplicationRequest, security: operations.LinkApplicationSecurity, config?: AxiosRequestConfig): Promise<operations.LinkApplicationResponse>;
    /**
     * Unlink application from an account
     */
    unliWithoutApplicationnkApplication(req: operations.UnliWithoutApplicationnkApplicationRequest, security: operations.UnliWithoutApplicationnkApplicationSecurity, config?: AxiosRequestConfig): Promise<operations.UnliWithoutApplicationnkApplicationResponse>;
}
