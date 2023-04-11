import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { LoyaltyReward } from "./loyaltyreward";
/**
 * A response that includes the loyalty reward.
 */
export declare class RetrieveLoyaltyRewardResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Represents a contract to redeem loyalty points for a [reward tier](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyProgramRewardTier) discount. Loyalty rewards can be in an ISSUED, REDEEMED, or DELETED state. For more information, see [Redeem loyalty rewards](https://developer.squareup.com/docs/loyalty-api/overview#redeem-loyalty-rewards).
     */
    reward?: LoyaltyReward;
}
