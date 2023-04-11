import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The query filter to return the items containing the specified item option IDs.
 */
export declare class CatalogQueryItemsForItemOptions extends SpeakeasyBase {
    /**
     * A set of `CatalogItemOption` IDs to be used to find associated
     *
     * @remarks
     * `CatalogItem`s. All Items that contain all of the given Item Options (in any order)
     * will be returned.
     */
    itemOptionIds?: string[];
}
