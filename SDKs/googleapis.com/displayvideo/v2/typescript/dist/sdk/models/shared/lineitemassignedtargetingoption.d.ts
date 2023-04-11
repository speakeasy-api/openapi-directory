import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedTargetingOption } from "./assignedtargetingoption";
/**
 * Wrapper object associating an assigned_targeting_option resource and the line item it is assigned to.
 */
export declare class LineItemAssignedTargetingOption extends SpeakeasyBase {
    /**
     * A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings.
     */
    assignedTargetingOption?: AssignedTargetingOption;
    /**
     * The ID of the line item the assigned targeting option is assigned to.
     */
    lineItemId?: string;
}
