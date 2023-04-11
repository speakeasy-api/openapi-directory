import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A filtering option for filtering on Inventory Source entities.
 */
export declare class InventorySourceFilter extends SpeakeasyBase {
    /**
     * Inventory Sources to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest. Leave empty to download all Inventory Sources for the selected Advertiser or Partner.
     */
    inventorySourceIds?: string[];
}
