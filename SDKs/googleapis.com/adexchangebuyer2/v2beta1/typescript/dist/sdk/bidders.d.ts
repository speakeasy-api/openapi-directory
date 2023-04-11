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
     * Lists all metrics that are measured in terms of number of bids.
     */
    adexchangebuyer2BiddersFilterSetsBidMetricsList(req: operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest, security: operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse>;
    /**
     * List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
     */
    adexchangebuyer2BiddersFilterSetsBidResponseErrorsList(req: operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest, security: operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse>;
    /**
     * List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
     */
    adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList(req: operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest, security: operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse>;
    /**
     * Creates the specified filter set for the account with the given account ID.
     */
    adexchangebuyer2BiddersFilterSetsCreate(req: operations.Adexchangebuyer2BiddersFilterSetsCreateRequest, security: operations.Adexchangebuyer2BiddersFilterSetsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsCreateResponse>;
    /**
     * Deletes the requested filter set from the account with the given account ID.
     */
    adexchangebuyer2BiddersFilterSetsDelete(req: operations.Adexchangebuyer2BiddersFilterSetsDeleteRequest, security: operations.Adexchangebuyer2BiddersFilterSetsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsDeleteResponse>;
    /**
     * List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
     */
    adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList(req: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListRequest, security: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListResponse>;
    /**
     * List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
     */
    adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList(req: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListRequest, security: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse>;
    /**
     * List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
     */
    adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList(req: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest, security: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse>;
    /**
     * List all reasons for which bids were filtered, with the number of bids filtered for each reason.
     */
    adexchangebuyer2BiddersFilterSetsFilteredBidsList(req: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListRequest, security: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListResponse>;
    /**
     * Retrieves the requested filter set for the account with the given account ID.
     */
    adexchangebuyer2BiddersFilterSetsGet(req: operations.Adexchangebuyer2BiddersFilterSetsGetRequest, security: operations.Adexchangebuyer2BiddersFilterSetsGetSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsGetResponse>;
    /**
     * Lists all metrics that are measured in terms of number of impressions.
     */
    adexchangebuyer2BiddersFilterSetsImpressionMetricsList(req: operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListRequest, security: operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListResponse>;
    /**
     * Lists all filter sets for the account with the given account ID.
     */
    adexchangebuyer2BiddersFilterSetsList(req: operations.Adexchangebuyer2BiddersFilterSetsListRequest, security: operations.Adexchangebuyer2BiddersFilterSetsListSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsListResponse>;
    /**
     * List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
     */
    adexchangebuyer2BiddersFilterSetsLosingBidsList(req: operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest, security: operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse>;
    /**
     * List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.
     */
    adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList(req: operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest, security: operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListSecurity, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse>;
}
