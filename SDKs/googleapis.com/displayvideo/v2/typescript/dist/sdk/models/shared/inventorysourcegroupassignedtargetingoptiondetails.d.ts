import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Targeting details for inventory source group. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE_GROUP`.
 */
export declare class InventorySourceGroupAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Required. ID of the inventory source group. Should refer to the inventory_source_group_id field of an InventorySourceGroup resource.
     */
    inventorySourceGroupId?: string;
}
