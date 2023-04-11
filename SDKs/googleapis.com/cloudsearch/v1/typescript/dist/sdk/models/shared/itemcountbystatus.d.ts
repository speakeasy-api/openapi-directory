import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the items.
 */
export declare enum ItemCountByStatusStatusCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Error = "ERROR",
    Modified = "MODIFIED",
    NewItem = "NEW_ITEM",
    Accepted = "ACCEPTED"
}
export declare class ItemCountByStatus extends SpeakeasyBase {
    /**
     * Number of items matching the status code.
     */
    count?: string;
    /**
     * Number of items matching the status code for which billing is done. This excludes virtual container items from the total count. This count would not be applicable for items with ERROR or NEW_ITEM status code.
     */
    indexedItemsCount?: string;
    /**
     * Status of the items.
     */
    statusCode?: ItemCountByStatusStatusCodeEnum;
}
