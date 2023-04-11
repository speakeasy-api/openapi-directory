import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedInventorySource } from "./assignedinventorysource";
/**
 * Response message for AssignedInventorySourceService.ListAssignedInventorySources.
 */
export declare class ListAssignedInventorySourcesResponse extends SpeakeasyBase {
    /**
     * The list of assigned inventory sources. This list will be absent if empty.
     */
    assignedInventorySources?: AssignedInventorySource[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListAssignedInventorySources` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
