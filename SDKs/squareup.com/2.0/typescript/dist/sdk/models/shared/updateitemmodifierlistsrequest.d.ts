import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object containing the fields to POST for the request.
 *
 * @remarks
 *
 * See the corresponding object definition for field details.
 */
export declare class UpdateItemModifierListsRequest extends SpeakeasyBase {
    /**
     * The IDs of the catalog items associated with the CatalogModifierList objects being updated.
     */
    itemIds: string[];
    /**
     * The IDs of the CatalogModifierList objects to disable for the CatalogItem.
     */
    modifierListsToDisable?: string[];
    /**
     * The IDs of the CatalogModifierList objects to enable for the CatalogItem.
     */
    modifierListsToEnable?: string[];
}
