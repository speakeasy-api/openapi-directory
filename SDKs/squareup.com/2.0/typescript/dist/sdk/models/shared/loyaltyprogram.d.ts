import { SpeakeasyBase } from "../../../internal/utils";
import { LoyaltyProgramAccrualRule } from "./loyaltyprogramaccrualrule";
import { LoyaltyProgramExpirationPolicy } from "./loyaltyprogramexpirationpolicy";
import { LoyaltyProgramRewardTier } from "./loyaltyprogramrewardtier";
import { LoyaltyProgramTerminology } from "./loyaltyprogramterminology";
/**
 * Represents a Square loyalty program. Loyalty programs define how buyers can earn points and redeem points for rewards.
 *
 * @remarks
 * Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard.
 * For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).
 */
export declare class LoyaltyProgram extends SpeakeasyBase {
    /**
     * Defines how buyers can earn loyalty points.
     */
    accrualRules: LoyaltyProgramAccrualRule[];
    /**
     * The timestamp when the program was created, in RFC 3339 format.
     */
    createdAt: string;
    /**
     * Describes when the loyalty program expires.
     */
    expirationPolicy?: LoyaltyProgramExpirationPolicy;
    /**
     * The Square-assigned ID of the loyalty program. Updates to
     *
     * @remarks
     * the loyalty program do not modify the identifier.
     */
    id: string;
    /**
     * The [locations](https://developer.squareup.com/reference/square_2021-08-18/objects/Location) at which the program is active.
     */
    locationIds: string[];
    /**
     * The list of rewards for buyers, sorted by ascending points.
     */
    rewardTiers: LoyaltyProgramRewardTier[];
    /**
     * Whether the program is currently active.
     */
    status: string;
    /**
     * Represents the naming used for loyalty points.
     */
    terminology: LoyaltyProgramTerminology;
    /**
     * The timestamp when the reward was last updated, in RFC 3339 format.
     */
    updatedAt: string;
}
