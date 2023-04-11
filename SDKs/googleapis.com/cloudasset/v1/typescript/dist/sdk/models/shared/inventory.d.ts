import { SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";
import { OsInfo } from "./osinfo";
/**
 * This API resource represents the available inventory data for a Compute Engine virtual machine (VM) instance at a given point in time. You can use this API resource to determine the inventory data of your VM. For more information, see [Information provided by OS inventory management](https://cloud.google.com/compute/docs/instances/os-inventory-management#data-collected).
 */
export declare class Inventory extends SpeakeasyBase {
    /**
     * Inventory items related to the VM keyed by an opaque unique identifier for each inventory item. The identifier is unique to each distinct and addressable inventory item and will change, when there is a new package version.
     */
    items?: Record<string, Item>;
    /**
     * Output only. The `Inventory` API resource name. Format: `projects/{project_number}/locations/{location}/instances/{instance_id}/inventory`
     */
    name?: string;
    /**
     * Operating system information for the VM.
     */
    osInfo?: OsInfo;
    /**
     * Output only. Timestamp of the last reported inventory for the VM.
     */
    updateTime?: string;
}
