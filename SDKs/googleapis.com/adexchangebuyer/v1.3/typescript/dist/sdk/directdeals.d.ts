import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DirectDeals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one direct deal by ID.
     */
    adexchangebuyerDirectDealsGet(req: operations.AdexchangebuyerDirectDealsGetRequest, security: operations.AdexchangebuyerDirectDealsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerDirectDealsGetResponse>;
    /**
     * Retrieves the authenticated user's list of direct deals.
     */
    adexchangebuyerDirectDealsList(req: operations.AdexchangebuyerDirectDealsListRequest, security: operations.AdexchangebuyerDirectDealsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerDirectDealsListResponse>;
}
