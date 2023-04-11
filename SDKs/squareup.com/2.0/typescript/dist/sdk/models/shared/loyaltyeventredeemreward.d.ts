import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides metadata when the event `type` is `REDEEM_REWARD`.
 */
export declare class LoyaltyEventRedeemReward extends SpeakeasyBase {
    /**
     * The ID of the [loyalty program](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyProgram).
     */
    loyaltyProgramId: string;
    /**
     * The ID of the [order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) that redeemed the reward.
     *
     * @remarks
     * This field is returned only if the Orders API is used to process orders.
     */
    orderId?: string;
    /**
     * The ID of the redeemed [loyalty reward](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyReward).
     *
     * @remarks
     * This field is returned only if the event source is `LOYALTY_API`.
     */
    rewardId?: string;
}
