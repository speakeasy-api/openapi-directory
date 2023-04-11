import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Resellernotify {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns all the details of the watch corresponding to the reseller.
     */
    resellerResellernotifyGetwatchdetails(req: operations.ResellerResellernotifyGetwatchdetailsRequest, security: operations.ResellerResellernotifyGetwatchdetailsSecurity, config?: AxiosRequestConfig): Promise<operations.ResellerResellernotifyGetwatchdetailsResponse>;
    /**
     * Registers a Reseller for receiving notifications.
     */
    resellerResellernotifyRegister(req: operations.ResellerResellernotifyRegisterRequest, security: operations.ResellerResellernotifyRegisterSecurity, config?: AxiosRequestConfig): Promise<operations.ResellerResellernotifyRegisterResponse>;
    /**
     * Unregisters a Reseller for receiving notifications.
     */
    resellerResellernotifyUnregister(req: operations.ResellerResellernotifyUnregisterRequest, security: operations.ResellerResellernotifyUnregisterSecurity, config?: AxiosRequestConfig): Promise<operations.ResellerResellernotifyUnregisterResponse>;
}
