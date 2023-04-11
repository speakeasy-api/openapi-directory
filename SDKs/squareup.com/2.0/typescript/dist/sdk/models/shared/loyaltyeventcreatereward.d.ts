import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides metadata when the event `type` is `CREATE_REWARD`.
 */
export declare class LoyaltyEventCreateReward extends SpeakeasyBase {
    /**
     * The ID of the [loyalty program](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyProgram).
     */
    loyaltyProgramId: string;
    /**
     * The loyalty points used to create the reward.
     */
    points: number;
    /**
     * The Square-assigned ID of the created [loyalty reward](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyReward).
     *
     * @remarks
     * This field is returned only if the event source is `LOYALTY_API`.
     */
    rewardId?: string;
}
