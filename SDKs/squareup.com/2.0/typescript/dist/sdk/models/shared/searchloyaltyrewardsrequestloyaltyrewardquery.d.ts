import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The set of search requirements.
 */
export declare class SearchLoyaltyRewardsRequestLoyaltyRewardQuery extends SpeakeasyBase {
    /**
     * The ID of the [loyalty account](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyAccount) to which the loyalty reward belongs.
     */
    loyaltyAccountId: string;
    /**
     * The status of the loyalty reward.
     */
    status?: string;
}
