import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Loyalty {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * AccumulateLoyaltyPoints
     *
     * @remarks
     * Adds points to a loyalty account.
     *
     * - If you are using the Orders API to manage orders, you only provide the `order_id`.
     * The endpoint reads the order to compute points to add to the buyer's account.
     * - If you are not using the Orders API to manage orders,
     * you first perform a client-side computation to compute the points.
     * For spend-based and visit-based programs, you can first call
     * [CalculateLoyaltyPoints](https://developer.squareup.com/reference/square_2021-08-18/loyalty-api/calculate-loyalty-points) to compute the points
     * that you provide to this endpoint.
     *
     * __Note:__ The country of the seller's Square account determines whether tax is included in the purchase amount when accruing points for spend-based and visit-based programs.
     * For more information, see [Availability of Square Loyalty](https://developer.squareup.com/docs/loyalty-api/overview#loyalty-market-availability).
     */
    accumulateLoyaltyPoints(req: operations.AccumulateLoyaltyPointsRequest, security: operations.AccumulateLoyaltyPointsSecurity, config?: AxiosRequestConfig): Promise<operations.AccumulateLoyaltyPointsResponse>;
    /**
     * AdjustLoyaltyPoints
     *
     * @remarks
     * Adds points to or subtracts points from a buyer's account.
     *
     * Use this endpoint only when you need to manually adjust points. Otherwise, in your application flow, you call
     * [AccumulateLoyaltyPoints](https://developer.squareup.com/reference/square_2021-08-18/loyalty-api/accumulate-loyalty-points)
     * to add points when a buyer pays for the purchase.
     */
    adjustLoyaltyPoints(req: operations.AdjustLoyaltyPointsRequest, security: operations.AdjustLoyaltyPointsSecurity, config?: AxiosRequestConfig): Promise<operations.AdjustLoyaltyPointsResponse>;
    /**
     * CalculateLoyaltyPoints
     *
     * @remarks
     * Calculates the points a purchase earns.
     *
     * - If you are using the Orders API to manage orders, you provide `order_id` in the request. The
     * endpoint calculates the points by reading the order.
     * - If you are not using the Orders API to manage orders, you provide the purchase amount in
     * the request for the endpoint to calculate the points.
     *
     * An application might call this endpoint to show the points that a buyer can earn with the
     * specific purchase.
     *
     * __Note:__ The country of the seller's Square account determines whether tax is included in the purchase amount when accruing points for spend-based and visit-based programs.
     * For more information, see [Availability of Square Loyalty](https://developer.squareup.com/docs/loyalty-api/overview#loyalty-market-availability).
     */
    calculateLoyaltyPoints(req: operations.CalculateLoyaltyPointsRequest, security: operations.CalculateLoyaltyPointsSecurity, config?: AxiosRequestConfig): Promise<operations.CalculateLoyaltyPointsResponse>;
    /**
     * CreateLoyaltyAccount
     *
     * @remarks
     * Creates a loyalty account. To create a loyalty account, you must provide the `program_id` and a `mapping` with the `phone_number` of the buyer.
     */
    createLoyaltyAccount(req: shared.CreateLoyaltyAccountRequest, security: operations.CreateLoyaltyAccountSecurity, config?: AxiosRequestConfig): Promise<operations.CreateLoyaltyAccountResponse>;
    /**
     * CreateLoyaltyReward
     *
     * @remarks
     * Creates a loyalty reward. In the process, the endpoint does following:
     *
     * - Uses the `reward_tier_id` in the request to determine the number of points
     * to lock for this reward.
     * - If the request includes `order_id`, it adds the reward and related discount to the order.
     *
     * After a reward is created, the points are locked and
     * not available for the buyer to redeem another reward.
     */
    createLoyaltyReward(req: shared.CreateLoyaltyRewardRequest, security: operations.CreateLoyaltyRewardSecurity, config?: AxiosRequestConfig): Promise<operations.CreateLoyaltyRewardResponse>;
    /**
     * DeleteLoyaltyReward
     *
     * @remarks
     * Deletes a loyalty reward by doing the following:
     *
     * - Returns the loyalty points back to the loyalty account.
     * - If an order ID was specified when the reward was created
     * (see [CreateLoyaltyReward](https://developer.squareup.com/reference/square_2021-08-18/loyalty-api/create-loyalty-reward)),
     * it updates the order by removing the reward and related
     * discounts.
     *
     * You cannot delete a reward that has reached the terminal state (REDEEMED).
     */
    deleteLoyaltyReward(req: operations.DeleteLoyaltyRewardRequest, security: operations.DeleteLoyaltyRewardSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteLoyaltyRewardResponse>;
    /**
     * ListLoyaltyPrograms
     *
     * @remarks
     * Returns a list of loyalty programs in the seller's account.
     * Loyalty programs define how buyers can earn points and redeem points for rewards. Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard. For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).
     *
     *
     * Replaced with [RetrieveLoyaltyProgram](https://developer.squareup.com/reference/square_2021-08-18/loyalty-api/retrieve-loyalty-program) when used with the keyword `main`.
     */
    listLoyaltyPrograms(config?: AxiosRequestConfig): Promise<operations.ListLoyaltyProgramsResponse>;
    /**
     * RedeemLoyaltyReward
     *
     * @remarks
     * Redeems a loyalty reward.
     *
     * The endpoint sets the reward to the `REDEEMED` terminal state.
     *
     * If you are using your own order processing system (not using the
     * Orders API), you call this endpoint after the buyer paid for the
     * purchase.
     *
     * After the reward reaches the terminal state, it cannot be deleted.
     * In other words, points used for the reward cannot be returned
     * to the account.
     */
    redeemLoyaltyReward(req: operations.RedeemLoyaltyRewardRequest, security: operations.RedeemLoyaltyRewardSecurity, config?: AxiosRequestConfig): Promise<operations.RedeemLoyaltyRewardResponse>;
    /**
     * RetrieveLoyaltyAccount
     *
     * @remarks
     * Retrieves a loyalty account.
     */
    retrieveLoyaltyAccount(req: operations.RetrieveLoyaltyAccountRequest, security: operations.RetrieveLoyaltyAccountSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveLoyaltyAccountResponse>;
    /**
     * RetrieveLoyaltyProgram
     *
     * @remarks
     * Retrieves the loyalty program in a seller's account, specified by the program ID or the keyword `main`.
     *
     * Loyalty programs define how buyers can earn points and redeem points for rewards. Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard. For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).
     */
    retrieveLoyaltyProgram(req: operations.RetrieveLoyaltyProgramRequest, security: operations.RetrieveLoyaltyProgramSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveLoyaltyProgramResponse>;
    /**
     * RetrieveLoyaltyReward
     *
     * @remarks
     * Retrieves a loyalty reward.
     */
    retrieveLoyaltyReward(req: operations.RetrieveLoyaltyRewardRequest, security: operations.RetrieveLoyaltyRewardSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveLoyaltyRewardResponse>;
    /**
     * SearchLoyaltyAccounts
     *
     * @remarks
     * Searches for loyalty accounts in a loyalty program.
     *
     * You can search for a loyalty account using the phone number or customer ID associated with the account. To return all loyalty accounts, specify an empty `query` object or omit it entirely.
     *
     * Search results are sorted by `created_at` in ascending order.
     */
    searchLoyaltyAccounts(req: shared.SearchLoyaltyAccountsRequest, security: operations.SearchLoyaltyAccountsSecurity, config?: AxiosRequestConfig): Promise<operations.SearchLoyaltyAccountsResponse>;
    /**
     * SearchLoyaltyEvents
     *
     * @remarks
     * Searches for loyalty events.
     *
     * A Square loyalty program maintains a ledger of events that occur during the lifetime of a
     * buyer's loyalty account. Each change in the point balance
     * (for example, points earned, points redeemed, and points expired) is
     * recorded in the ledger. Using this endpoint, you can search the ledger for events.
     *
     * Search results are sorted by `created_at` in descending order.
     */
    searchLoyaltyEvents(req: shared.SearchLoyaltyEventsRequest, security: operations.SearchLoyaltyEventsSecurity, config?: AxiosRequestConfig): Promise<operations.SearchLoyaltyEventsResponse>;
    /**
     * SearchLoyaltyRewards
     *
     * @remarks
     * Searches for loyalty rewards in a loyalty account.
     *
     * In the current implementation, the endpoint supports search by the reward `status`.
     *
     * If you know a reward ID, use the
     * [RetrieveLoyaltyReward](https://developer.squareup.com/reference/square_2021-08-18/loyalty-api/retrieve-loyalty-reward) endpoint.
     *
     * Search results are sorted by `updated_at` in descending order.
     */
    searchLoyaltyRewards(req: shared.SearchLoyaltyRewardsRequest, security: operations.SearchLoyaltyRewardsSecurity, config?: AxiosRequestConfig): Promise<operations.SearchLoyaltyRewardsResponse>;
}
