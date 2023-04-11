import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogObject } from "./catalogobject";
/**
 * A group of variations for a `CatalogItem`.
 */
export declare class CatalogItemOption extends SpeakeasyBase {
    /**
     * The item option's human-readable description. Displayed in the Square
     *
     * @remarks
     * Point of Sale app for the seller and in the Online Store or on receipts for
     * the buyer. This is a searchable attribute for use in applicable query filters.
     */
    description?: string;
    /**
     * The item option's display name for the customer. This is a searchable attribute for use in applicable query filters.
     */
    displayName?: string;
    /**
     * The item option's display name for the seller. Must be unique across
     *
     * @remarks
     * all item options. This is a searchable attribute for use in applicable query filters.
     */
    name?: string;
    /**
     * If true, display colors for entries in `values` when present.
     */
    showColors?: boolean;
    /**
     * A list of CatalogObjects containing the
     *
     * @remarks
     * `CatalogItemOptionValue`s for this item.
     */
    values?: CatalogObject[];
}
