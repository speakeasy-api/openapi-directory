import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BillingInfo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the billing information for one account specified by account ID.
     */
    adexchangebuyerBillingInfoGet(req: operations.AdexchangebuyerBillingInfoGetRequest, security: operations.AdexchangebuyerBillingInfoGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerBillingInfoGetResponse>;
    /**
     * Retrieves a list of billing information for all accounts of the authenticated user.
     */
    adexchangebuyerBillingInfoList(req: operations.AdexchangebuyerBillingInfoListRequest, security: operations.AdexchangebuyerBillingInfoListSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerBillingInfoListResponse>;
}
