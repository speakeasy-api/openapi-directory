import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A collection of targetable inventory sources.
 */
export declare class InventorySourceGroup extends SpeakeasyBase {
    /**
     * Required. The display name of the inventory source group. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Output only. The unique ID of the inventory source group. Assigned by the system.
     */
    inventorySourceGroupId?: string;
    /**
     * Output only. The resource name of the inventory source group.
     */
    name?: string;
}
/**
 * A collection of targetable inventory sources.
 */
export declare class InventorySourceGroupInput extends SpeakeasyBase {
    /**
     * Required. The display name of the inventory source group. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
}
