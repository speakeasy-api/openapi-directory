import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A reward allocates a portion of the budget from the reward program activation for achieving a particular goal and sets a target date.
 */
export declare class Reward {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a reward
     *
     * @remarks
     * Create a reward for a patient.
     */
    createReward(req: shared.CreateRewardRequestInput, config?: AxiosRequestConfig): Promise<operations.CreateRewardResponse>;
    /**
     * Get a reward
     *
     * @remarks
     * Get a reward record by id.
     */
    fetchReward(req: operations.FetchRewardRequest, config?: AxiosRequestConfig): Promise<operations.FetchRewardResponse>;
    /**
     * List rewards
     *
     * @remarks
     * Get a list of rewards matching the specified filters.
     */
    fetchRewards(req: operations.FetchRewardsRequest, config?: AxiosRequestConfig): Promise<operations.FetchRewardsResponse>;
}
