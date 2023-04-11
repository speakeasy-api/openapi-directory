import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A reward earning fulfillment specifies the portion of a reward earning that was fulfilled and at what date.
 */
export declare class RewardEarningFulfillment {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a reward earning fulfillment
     *
     * @remarks
     * Create a reward earning fulfillment for a reward earning. There can only be one fulfillment for each earning.
     */
    createRewardEarningFulfillment(req: shared.CreateRewardEarningFulfillmentRequestInput, config?: AxiosRequestConfig): Promise<operations.CreateRewardEarningFulfillmentResponse>;
    /**
     * Get a reward earning fulfillment
     *
     * @remarks
     * Get a reward earning fulfillment record by id.
     */
    fetchRewardEarningFulfillment(req: operations.FetchRewardEarningFulfillmentRequest, config?: AxiosRequestConfig): Promise<operations.FetchRewardEarningFulfillmentResponse>;
    /**
     * List reward earning fulfillments
     *
     * @remarks
     * Get a list of reward earning fulfillments matching the specified filters.
     */
    fetchRewardEarningFulfillments(req: operations.FetchRewardEarningFulfillmentsRequest, config?: AxiosRequestConfig): Promise<operations.FetchRewardEarningFulfillmentsResponse>;
}
