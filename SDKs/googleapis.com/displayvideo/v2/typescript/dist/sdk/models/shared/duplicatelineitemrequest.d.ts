import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for LineItemService.DuplicateLineItem.
 */
export declare class DuplicateLineItemRequest extends SpeakeasyBase {
    /**
     * The display name of the new line item. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    targetDisplayName?: string;
}
