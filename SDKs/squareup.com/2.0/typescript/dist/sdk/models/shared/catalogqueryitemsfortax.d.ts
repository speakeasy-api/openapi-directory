import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The query filter to return the items containing the specified tax IDs.
 */
export declare class CatalogQueryItemsForTax extends SpeakeasyBase {
    /**
     * A set of `CatalogTax` IDs to be used to find associated `CatalogItem`s.
     */
    taxIds: string[];
}
