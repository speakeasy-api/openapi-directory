import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Marketplaceprivateauction {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Update a given private auction proposal
     */
    adexchangebuyerMarketplaceprivateauctionUpdateproposal(req: operations.AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest, security: operations.AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerMarketplaceprivateauctionUpdateproposalResponse>;
}
