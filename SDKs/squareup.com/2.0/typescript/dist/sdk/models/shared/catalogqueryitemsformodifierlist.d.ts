import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The query filter to return the items containing the specified modifier list IDs.
 */
export declare class CatalogQueryItemsForModifierList extends SpeakeasyBase {
    /**
     * A set of `CatalogModifierList` IDs to be used to find associated `CatalogItem`s.
     */
    modifierListIds: string[];
}
