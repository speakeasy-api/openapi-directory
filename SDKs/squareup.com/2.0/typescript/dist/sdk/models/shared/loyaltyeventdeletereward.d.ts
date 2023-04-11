import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides metadata when the event `type` is `DELETE_REWARD`.
 */
export declare class LoyaltyEventDeleteReward extends SpeakeasyBase {
    /**
     * The ID of the [loyalty program](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyProgram).
     */
    loyaltyProgramId: string;
    /**
     * The number of points returned to the loyalty account.
     */
    points: number;
    /**
     * The ID of the deleted [loyalty reward](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyReward).
     *
     * @remarks
     * This field is returned only if the event source is `LOYALTY_API`.
     */
    rewardId?: string;
}
