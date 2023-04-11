import { SpeakeasyBase } from "../../../internal/utils";
import { Inventory } from "./inventory";
/**
 * A response message for listing inventory data for all VMs in a specified location.
 */
export declare class ListInventoriesResponse extends SpeakeasyBase {
    /**
     * List of inventory objects.
     */
    inventories?: Inventory[];
    /**
     * The pagination token to retrieve the next page of inventory objects.
     */
    nextPageToken?: string;
}
