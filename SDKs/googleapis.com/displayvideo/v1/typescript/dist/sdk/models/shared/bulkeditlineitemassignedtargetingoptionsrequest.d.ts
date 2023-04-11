import { SpeakeasyBase } from "../../../internal/utils";
import { CreateAssignedTargetingOptionsRequestInput } from "./createassignedtargetingoptionsrequest";
import { DeleteAssignedTargetingOptionsRequest } from "./deleteassignedtargetingoptionsrequest";
/**
 * Request message for BulkEditLineItemAssignedTargetingOptions.
 */
export declare class BulkEditLineItemAssignedTargetingOptionsRequestInput extends SpeakeasyBase {
    /**
     * The assigned targeting options to create in batch, specified as a list of `CreateAssignedTargetingOptionsRequest`.
     */
    createRequests?: CreateAssignedTargetingOptionsRequestInput[];
    /**
     * The assigned targeting options to delete in batch, specified as a list of `DeleteAssignedTargetingOptionsRequest`.
     */
    deleteRequests?: DeleteAssignedTargetingOptionsRequest[];
}
