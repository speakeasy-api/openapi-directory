import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogObjectReference } from "./catalogobjectreference";
import { LoyaltyProgramRewardDefinition } from "./loyaltyprogramrewarddefinition";
/**
 * Represents a reward tier in a loyalty program. A reward tier defines how buyers can redeem points for a reward, such as the number of points required and the value and scope of the discount. A loyalty program can offer multiple reward tiers.
 */
export declare class LoyaltyProgramRewardTier extends SpeakeasyBase {
    /**
     * The timestamp when the reward tier was created, in RFC 3339 format.
     */
    createdAt: string;
    /**
     * Provides details about the reward tier discount. DEPRECATED at version 2020-12-16. Discount details
     *
     * @remarks
     * are now defined using a catalog pricing rule and other catalog objects. For more information, see
     * [Get discount details for the reward](https://developer.squareup.com/docs/loyalty-api/overview#get-discount-details).
     */
    definition: LoyaltyProgramRewardDefinition;
    /**
     * The Square-assigned ID of the reward tier.
     */
    id: string;
    /**
     * The name of the reward tier.
     */
    name: string;
    /**
     * The points exchanged for the reward tier.
     */
    points: number;
    /**
     * A reference to a Catalog object at a specific version. In general this is
     *
     * @remarks
     * used as an entry point into a graph of catalog objects, where the objects exist
     * at a specific version.
     */
    pricingRuleReference?: CatalogObjectReference;
}
