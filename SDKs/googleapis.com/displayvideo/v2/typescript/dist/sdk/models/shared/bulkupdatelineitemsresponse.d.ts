import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * Response message for LineItemService.BulkUpdateLineItems.
 */
export declare class BulkUpdateLineItemsResponse extends SpeakeasyBase {
    /**
     * Errors returned by line items that failed to update.
     */
    errors?: Status[];
    /**
     * The IDs of line items that failed to update.
     */
    failedLineItemIds?: string[];
    /**
     * The IDs of line items that are skipped for updates. For example, unnecessary mutates that will result in effectively no changes to line items will be skipped and corresponding line item IDs can be tracked here.
     */
    skippedLineItemIds?: string[];
    /**
     * The IDs of successfully updated line items.
     */
    updatedLineItemIds?: string[];
}
