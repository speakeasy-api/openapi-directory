import { SpeakeasyBase } from "../../../internal/utils";
import { CreateAssignedTargetingOptionsRequestInput } from "./createassignedtargetingoptionsrequest";
import { DeleteAssignedTargetingOptionsRequest } from "./deleteassignedtargetingoptionsrequest";
/**
 * Request message for BulkEditPartnerAssignedTargetingOptions.
 */
export declare class BulkEditPartnerAssignedTargetingOptionsRequestInput extends SpeakeasyBase {
    /**
     * The assigned targeting options to create in batch, specified as a list of `CreateAssignedTargetingOptionsRequest`. Supported targeting types: * `TARGETING_TYPE_CHANNEL`
     */
    createRequests?: CreateAssignedTargetingOptionsRequestInput[];
    /**
     * The assigned targeting options to delete in batch, specified as a list of `DeleteAssignedTargetingOptionsRequest`. Supported targeting types: * `TARGETING_TYPE_CHANNEL`
     */
    deleteRequests?: DeleteAssignedTargetingOptionsRequest[];
}
