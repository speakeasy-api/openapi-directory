/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { InventorySoftwarePackage } from "./inventorysoftwarepackage";
import { Expose, Type } from "class-transformer";

/**
 * The origin of this inventory item.
 */
export enum InventoryItemOriginTypeEnum {
  OriginTypeUnspecified = "ORIGIN_TYPE_UNSPECIFIED",
  InventoryReport = "INVENTORY_REPORT",
}

/**
 * The specific type of inventory, correlating to its specific details.
 */
export enum InventoryItemTypeEnum {
  TypeUnspecified = "TYPE_UNSPECIFIED",
  InstalledPackage = "INSTALLED_PACKAGE",
  AvailablePackage = "AVAILABLE_PACKAGE",
}

/**
 * A single piece of inventory on a VM.
 */
export class InventoryItem extends SpeakeasyBase {
  /**
   * Software package information of the operating system.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "availablePackage" })
  @Type(() => InventorySoftwarePackage)
  availablePackage?: InventorySoftwarePackage;

  /**
   * When this inventory item was first detected.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createTime" })
  createTime?: string;

  /**
   * Identifier for this item, unique across items for this VM.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Software package information of the operating system.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "installedPackage" })
  @Type(() => InventorySoftwarePackage)
  installedPackage?: InventorySoftwarePackage;

  /**
   * The origin of this inventory item.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "originType" })
  originType?: InventoryItemOriginTypeEnum;

  /**
   * The specific type of inventory, correlating to its specific details.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: InventoryItemTypeEnum;

  /**
   * When this inventory item was last modified.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updateTime" })
  updateTime?: string;
}
