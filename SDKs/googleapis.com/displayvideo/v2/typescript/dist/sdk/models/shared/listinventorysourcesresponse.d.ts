import { SpeakeasyBase } from "../../../internal/utils";
import { InventorySource } from "./inventorysource";
/**
 * Successful response
 */
export declare class ListInventorySourcesResponse extends SpeakeasyBase {
    /**
     * The list of inventory sources. This list will be absent if empty.
     */
    inventorySources?: InventorySource[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListInventorySources` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
