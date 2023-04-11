import { SpeakeasyBase } from "../../../internal/utils";
import { InventorySoftwarePackage } from "./inventorysoftwarepackage";
/**
 * The origin of this inventory item.
 */
export declare enum InventoryItemOriginTypeEnum {
    OriginTypeUnspecified = "ORIGIN_TYPE_UNSPECIFIED",
    InventoryReport = "INVENTORY_REPORT"
}
/**
 * The specific type of inventory, correlating to its specific details.
 */
export declare enum InventoryItemTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    InstalledPackage = "INSTALLED_PACKAGE",
    AvailablePackage = "AVAILABLE_PACKAGE"
}
/**
 * A single piece of inventory on a VM.
 */
export declare class InventoryItem extends SpeakeasyBase {
    /**
     * Software package information of the operating system.
     */
    availablePackage?: InventorySoftwarePackage;
    /**
     * When this inventory item was first detected.
     */
    createTime?: string;
    /**
     * Identifier for this item, unique across items for this VM.
     */
    id?: string;
    /**
     * Software package information of the operating system.
     */
    installedPackage?: InventorySoftwarePackage;
    /**
     * The origin of this inventory item.
     */
    originType?: InventoryItemOriginTypeEnum;
    /**
     * The specific type of inventory, correlating to its specific details.
     */
    type?: InventoryItemTypeEnum;
    /**
     * When this inventory item was last modified.
     */
    updateTime?: string;
}
