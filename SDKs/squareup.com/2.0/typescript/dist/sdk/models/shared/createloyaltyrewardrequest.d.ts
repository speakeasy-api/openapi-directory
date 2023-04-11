import { SpeakeasyBase } from "../../../internal/utils";
import { LoyaltyReward } from "./loyaltyreward";
/**
 * A request to create a loyalty reward.
 */
export declare class CreateLoyaltyRewardRequest extends SpeakeasyBase {
    /**
     * A unique string that identifies this `CreateLoyaltyReward` request.
     *
     * @remarks
     * Keys can be any valid string, but must be unique for every request.
     */
    idempotencyKey: string;
    /**
     * Represents a contract to redeem loyalty points for a [reward tier](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyProgramRewardTier) discount. Loyalty rewards can be in an ISSUED, REDEEMED, or DELETED state. For more information, see [Redeem loyalty rewards](https://developer.squareup.com/docs/loyalty-api/overview#redeem-loyalty-rewards).
     */
    reward: LoyaltyReward;
}
