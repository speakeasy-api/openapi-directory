import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Marketplacedeals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete the specified deals from the proposal
     */
    adexchangebuyerMarketplacedealsDelete(req: operations.AdexchangebuyerMarketplacedealsDeleteRequest, security: operations.AdexchangebuyerMarketplacedealsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerMarketplacedealsDeleteResponse>;
    /**
     * Add new deals for the specified proposal
     */
    adexchangebuyerMarketplacedealsInsert(req: operations.AdexchangebuyerMarketplacedealsInsertRequest, security: operations.AdexchangebuyerMarketplacedealsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerMarketplacedealsInsertResponse>;
    /**
     * List all the deals for a given proposal
     */
    adexchangebuyerMarketplacedealsList(req: operations.AdexchangebuyerMarketplacedealsListRequest, security: operations.AdexchangebuyerMarketplacedealsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerMarketplacedealsListResponse>;
    /**
     * Replaces all the deals in the proposal with the passed in deals
     */
    adexchangebuyerMarketplacedealsUpdate(req: operations.AdexchangebuyerMarketplacedealsUpdateRequest, security: operations.AdexchangebuyerMarketplacedealsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerMarketplacedealsUpdateResponse>;
}
