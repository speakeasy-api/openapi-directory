import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a contract to redeem loyalty points for a [reward tier](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyProgramRewardTier) discount. Loyalty rewards can be in an ISSUED, REDEEMED, or DELETED state. For more information, see [Redeem loyalty rewards](https://developer.squareup.com/docs/loyalty-api/overview#redeem-loyalty-rewards).
 */
export declare class LoyaltyReward extends SpeakeasyBase {
    /**
     * The timestamp when the reward was created, in RFC 3339 format.
     */
    createdAt?: string;
    /**
     * The Square-assigned ID of the loyalty reward.
     */
    id?: string;
    /**
     * The Square-assigned ID of the [loyalty account](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyAccount) to which the reward belongs.
     */
    loyaltyAccountId: string;
    /**
     * The Square-assigned ID of the [order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) to which the reward is attached.
     */
    orderId?: string;
    /**
     * The number of loyalty points used for the reward.
     */
    points?: number;
    /**
     * The timestamp when the reward was redeemed, in RFC 3339 format.
     */
    redeemedAt?: string;
    /**
     * The Square-assigned ID of the [reward tier](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyProgramRewardTier) used to create the reward.
     */
    rewardTierId: string;
    /**
     * The status of a loyalty reward.
     */
    status?: string;
    /**
     * The timestamp when the reward was last updated, in RFC 3339 format.
     */
    updatedAt?: string;
}
