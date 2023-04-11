import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedTargetingOption } from "./assignedtargetingoption";
/**
 * Successful response
 */
export declare class BulkEditAdvertiserAssignedTargetingOptionsResponse extends SpeakeasyBase {
    /**
     * The list of assigned targeting options that have been successfully created. This list will be absent if empty.
     */
    createdAssignedTargetingOptions?: AssignedTargetingOption[];
}
