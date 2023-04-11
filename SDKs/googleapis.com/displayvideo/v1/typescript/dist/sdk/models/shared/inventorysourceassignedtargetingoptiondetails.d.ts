import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Targeting details for inventory source. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE`.
 */
export declare class InventorySourceAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Required. ID of the inventory source. Should refer to the inventory_source_id field of an InventorySource resource.
     */
    inventorySourceId?: string;
}
