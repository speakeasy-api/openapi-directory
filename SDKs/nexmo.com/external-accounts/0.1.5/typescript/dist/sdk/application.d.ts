import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Application {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * linkApplication - Link application to an account
    **/
    linkApplication(req: operations.LinkApplicationRequest, config?: AxiosRequestConfig): Promise<operations.LinkApplicationResponse>;
    /**
     * unliWithoutApplicationnkApplication - Unlink application from an account
    **/
    unliWithoutApplicationnkApplication(req: operations.UnliWithoutApplicationnkApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UnliWithoutApplicationnkApplicationResponse>;
}
