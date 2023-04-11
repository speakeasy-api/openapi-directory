import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Bidders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Activates an existing bidding function. An activated function is available for invocation for the server-side TURTLEDOVE simulations.
     */
    realtimebiddingBiddersBiddingFunctionsActivate(req: operations.RealtimebiddingBiddersBiddingFunctionsActivateRequest, security: operations.RealtimebiddingBiddersBiddingFunctionsActivateSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersBiddingFunctionsActivateResponse>;
    /**
     * Archives an existing bidding function. An archived function will not be available for function invocation for the server-side TURTLEDOVE simulations unless it is activated.
     */
    realtimebiddingBiddersBiddingFunctionsArchive(req: operations.RealtimebiddingBiddersBiddingFunctionsArchiveRequest, security: operations.RealtimebiddingBiddersBiddingFunctionsArchiveSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersBiddingFunctionsArchiveResponse>;
    /**
     * Creates a new bidding function.
     */
    realtimebiddingBiddersBiddingFunctionsCreate(req: operations.RealtimebiddingBiddersBiddingFunctionsCreateRequest, security: operations.RealtimebiddingBiddersBiddingFunctionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersBiddingFunctionsCreateResponse>;
    /**
     * Lists the bidding functions that a bidder currently has registered.
     */
    realtimebiddingBiddersBiddingFunctionsList(req: operations.RealtimebiddingBiddersBiddingFunctionsListRequest, security: operations.RealtimebiddingBiddersBiddingFunctionsListSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersBiddingFunctionsListResponse>;
}
