import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An enumerated value that can link a
 *
 * @remarks
 * `CatalogItemVariation` to an item option as one of
 * its item option values.
 */
export declare class CatalogItemOptionValue extends SpeakeasyBase {
    /**
     * The HTML-supported hex color for the item option (e.g., "#ff8d4e85").
     *
     * @remarks
     * Only displayed if `show_colors` is enabled on the parent `ItemOption`. When
     * left unset, `color` defaults to white ("#ffffff") when `show_colors` is
     * enabled on the parent `ItemOption`.
     */
    color?: string;
    /**
     * A human-readable description for the option value. This is a searchable attribute for use in applicable query filters.
     */
    description?: string;
    /**
     * Unique ID of the associated item option.
     */
    itemOptionId?: string;
    /**
     * Name of this item option value. This is a searchable attribute for use in applicable query filters.
     */
    name?: string;
    /**
     * Determines where this option value appears in a list of option values.
     */
    ordinal?: number;
}
