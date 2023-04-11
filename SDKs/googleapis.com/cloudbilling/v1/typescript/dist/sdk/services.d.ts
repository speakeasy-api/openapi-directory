import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Services {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists all public cloud services.
     */
    cloudbillingServicesList(req: operations.CloudbillingServicesListRequest, security: operations.CloudbillingServicesListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudbillingServicesListResponse>;
    /**
     * Lists all publicly available SKUs for a given cloud service.
     */
    cloudbillingServicesSkusList(req: operations.CloudbillingServicesSkusListRequest, security: operations.CloudbillingServicesSkusListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudbillingServicesSkusListResponse>;
}
