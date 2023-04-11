import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Marketplacenotes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add notes to the proposal
     */
    adexchangebuyerMarketplacenotesInsert(req: operations.AdexchangebuyerMarketplacenotesInsertRequest, security: operations.AdexchangebuyerMarketplacenotesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerMarketplacenotesInsertResponse>;
    /**
     * Get all the notes associated with a proposal
     */
    adexchangebuyerMarketplacenotesList(req: operations.AdexchangebuyerMarketplacenotesListRequest, security: operations.AdexchangebuyerMarketplacenotesListSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerMarketplacenotesListResponse>;
}
