import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryItem } from "./inventoryitem";
/**
 * Inventory item List Response
 */
export declare class InventoryItemsListResponse extends SpeakeasyBase {
    /**
     * Inventory item collection
     */
    inventoryItems?: InventoryItem[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItemsListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
