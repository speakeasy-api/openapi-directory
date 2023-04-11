import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An assignment between a targetable inventory source and an inventory source group.
 */
export declare class AssignedInventorySource extends SpeakeasyBase {
    /**
     * Output only. The unique ID of the assigned inventory source. The ID is only unique within a given inventory source group. It may be reused in other contexts.
     */
    assignedInventorySourceId?: string;
    /**
     * Required. The ID of the inventory source entity being targeted.
     */
    inventorySourceId?: string;
    /**
     * Output only. The resource name of the assigned inventory source.
     */
    name?: string;
}
/**
 * An assignment between a targetable inventory source and an inventory source group.
 */
export declare class AssignedInventorySourceInput extends SpeakeasyBase {
    /**
     * Required. The ID of the inventory source entity being targeted.
     */
    inventorySourceId?: string;
}
