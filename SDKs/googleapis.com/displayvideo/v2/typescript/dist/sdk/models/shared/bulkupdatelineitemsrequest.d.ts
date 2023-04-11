import { SpeakeasyBase } from "../../../internal/utils";
import { LineItemInput } from "./lineitem";
/**
 * Request message for LineItemService.BulkUpdateLineItems.
 */
export declare class BulkUpdateLineItemsRequestInput extends SpeakeasyBase {
    /**
     * Required. IDs of line items to update.
     */
    lineItemIds?: string[];
    /**
     * A single line item.
     */
    targetLineItem?: LineItemInput;
    /**
     * Required. A field mask identifying which fields to update. Only the following fields are currently supported: * entityStatus
     */
    updateMask?: string;
}
