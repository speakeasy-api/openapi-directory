import { SpeakeasyBase } from "../../../internal/utils";
import { InventorySourceGroup } from "./inventorysourcegroup";
/**
 * Response message for InventorySourceGroupService.ListInventorySourceGroups.
 */
export declare class ListInventorySourceGroupsResponse extends SpeakeasyBase {
    /**
     * The list of inventory source groups. This list will be absent if empty.
     */
    inventorySourceGroups?: InventorySourceGroup[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListInventorySourceGroups` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
