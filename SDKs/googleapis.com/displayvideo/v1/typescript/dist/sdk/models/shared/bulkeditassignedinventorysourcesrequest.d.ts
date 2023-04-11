import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedInventorySourceInput } from "./assignedinventorysource";
/**
 * Request message for AssignedInventorySourceService.BulkEdit.
 */
export declare class BulkEditAssignedInventorySourcesRequestInput extends SpeakeasyBase {
    /**
     * The ID of the advertiser that owns the parent inventory source group. The parent partner does not have access to these assigned inventory sources.
     */
    advertiserId?: string;
    /**
     * The assigned inventory sources to create in bulk, specified as a list of AssignedInventorySources.
     */
    createdAssignedInventorySources?: AssignedInventorySourceInput[];
    /**
     * The IDs of the assigned inventory sources to delete in bulk, specified as a list of assigned_inventory_source_ids.
     */
    deletedAssignedInventorySources?: string[];
    /**
     * The ID of the partner that owns the inventory source group. Only this partner has write access to these assigned inventory sources.
     */
    partnerId?: string;
}
