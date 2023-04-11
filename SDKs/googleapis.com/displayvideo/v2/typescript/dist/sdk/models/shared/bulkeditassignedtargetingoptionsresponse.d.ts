import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * Successful response
 */
export declare class BulkEditAssignedTargetingOptionsResponse extends SpeakeasyBase {
    /**
     * The error information for each line item that failed to update.
     */
    errors?: Status[];
    /**
     * Output only. The IDs of the line items which failed.
     */
    failedLineItemIds?: string[];
    /**
     * Output only. The IDs of the line items which successfully updated.
     */
    updatedLineItemIds?: string[];
}
