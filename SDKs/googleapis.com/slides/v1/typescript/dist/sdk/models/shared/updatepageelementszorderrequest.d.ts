import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Z-order operation to apply on the page elements. When applying the operation on multiple page elements, the relative Z-orders within these page elements before the operation is maintained.
 */
export declare enum UpdatePageElementsZOrderRequestOperationEnum {
    ZOrderOperationUnspecified = "Z_ORDER_OPERATION_UNSPECIFIED",
    BringToFront = "BRING_TO_FRONT",
    BringForward = "BRING_FORWARD",
    SendBackward = "SEND_BACKWARD",
    SendToBack = "SEND_TO_BACK"
}
/**
 * Updates the Z-order of page elements. Z-order is an ordering of the elements on the page from back to front. The page element in the front may cover the elements that are behind it.
 */
export declare class UpdatePageElementsZOrderRequest extends SpeakeasyBase {
    /**
     * The Z-order operation to apply on the page elements. When applying the operation on multiple page elements, the relative Z-orders within these page elements before the operation is maintained.
     */
    operation?: UpdatePageElementsZOrderRequestOperationEnum;
    /**
     * The object IDs of the page elements to update. All the page elements must be on the same page and must not be grouped.
     */
    pageElementObjectIds?: string[];
}
