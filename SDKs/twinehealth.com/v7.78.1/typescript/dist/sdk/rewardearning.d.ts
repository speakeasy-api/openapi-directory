import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A reward earning specifies the portion of a reward that was earned and at what date.
 */
export declare class RewardEarning {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a reward earning
     *
     * @remarks
     * Create a reward earning for a reward. There can only be one earning for a reward. It is possilble to create multiple reward earnings simultaneously by providing and array of reward earnings in the data property.
     */
    createRewardEarning(req: shared.CreateRewardEarningRequestInput, config?: AxiosRequestConfig): Promise<operations.CreateRewardEarningResponse>;
    /**
     * Get a reward earning
     *
     * @remarks
     * Get a reward earning record by id.
     */
    fetchRewardEarning(req: operations.FetchRewardEarningRequest, config?: AxiosRequestConfig): Promise<operations.FetchRewardEarningResponse>;
    /**
     * List reward earnings
     *
     * @remarks
     * Get a list of reward earnings matching the specified filters.
     */
    fetchRewardEarnings(req: operations.FetchRewardEarningsRequest, config?: AxiosRequestConfig): Promise<operations.FetchRewardEarningsResponse>;
}
