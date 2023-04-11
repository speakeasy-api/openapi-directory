import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedInventorySource } from "./assignedinventorysource";
/**
 * Response message for AssignedInventorySourceService.BulkEdit.
 */
export declare class BulkEditAssignedInventorySourcesResponse extends SpeakeasyBase {
    /**
     * The list of assigned inventory sources that have been successfully created. This list will be absent if empty.
     */
    assignedInventorySources?: AssignedInventorySource[];
}
