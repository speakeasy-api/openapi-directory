import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The query filter to return the item variations containing the specified item option value IDs.
 */
export declare class CatalogQueryItemVariationsForItemOptionValues extends SpeakeasyBase {
    /**
     * A set of `CatalogItemOptionValue` IDs to be used to find associated
     *
     * @remarks
     * `CatalogItemVariation`s. All ItemVariations that contain all of the given
     * Item Option Values (in any order) will be returned.
     */
    itemOptionValueIds?: string[];
}
