import { SpeakeasyBase } from "../../../internal/utils";
import { DealInput } from "./deal";
/**
 * Request message for updating the deal at the given revision number.
 */
export declare class UpdateDealRequestInput extends SpeakeasyBase {
    /**
     * A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals.
     */
    deal?: DealInput;
    /**
     * List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.
     */
    updateMask?: string;
}
