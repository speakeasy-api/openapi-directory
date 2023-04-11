import { SpeakeasyBase } from "../../../internal/utils";
import { VmResourceBasedCud } from "./vmresourcebasedcud";
/**
 * Commitments give you the ability to pay a recurring fee in exchange for a benefit, such as a discount for your use. For example, this object might contain details of a [spend-based committed use discount (CUD)](https://cloud.google.com/docs/cuds#spend_based_commitments). Within a CostScenario, adding a commitment includes the cost of the commitment and any discounts.
 */
export declare class Commitment extends SpeakeasyBase {
    /**
     * Required. A name for this commitment. All commitments in a CostScenario must have unique names. Each name may be at most 128 characters long.
     */
    name?: string;
    /**
     * Specifies a resource-based committed use discount (CUD).
     */
    vmResourceBasedCud?: VmResourceBasedCud;
}
