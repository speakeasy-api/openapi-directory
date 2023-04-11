import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a reward that can be applied to an order if the necessary
 *
 * @remarks
 * reward tier criteria are met. Rewards are created through the Loyalty API.
 */
export declare class OrderReward extends SpeakeasyBase {
    /**
     * The identifier of the reward.
     */
    id: string;
    /**
     * The identifier of the reward tier corresponding to this reward.
     */
    rewardTierId: string;
}
