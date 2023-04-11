import { SpeakeasyBase } from "../../../internal/utils";
import { SoftwarePackage } from "./softwarepackage";
/**
 * The origin of this inventory item.
 */
export declare enum ItemOriginTypeEnum {
    OriginTypeUnspecified = "ORIGIN_TYPE_UNSPECIFIED",
    InventoryReport = "INVENTORY_REPORT"
}
/**
 * The specific type of inventory, correlating to its specific details.
 */
export declare enum ItemTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    InstalledPackage = "INSTALLED_PACKAGE",
    AvailablePackage = "AVAILABLE_PACKAGE"
}
/**
 * A single piece of inventory on a VM.
 */
export declare class Item extends SpeakeasyBase {
    /**
     * Software package information of the operating system.
     */
    availablePackage?: SoftwarePackage;
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
    installedPackage?: SoftwarePackage;
    /**
     * The origin of this inventory item.
     */
    originType?: ItemOriginTypeEnum;
    /**
     * The specific type of inventory, correlating to its specific details.
     */
    type?: ItemTypeEnum;
    /**
     * When this inventory item was last modified.
     */
    updateTime?: string;
}
