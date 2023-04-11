import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogObject } from "./catalogobject";
/**
 * A list of modifiers applicable to items at the time of sale.
 *
 * @remarks
 *
 * For example, a "Condiments" modifier list applicable to a "Hot Dog" item
 * may contain "Ketchup", "Mustard", and "Relish" modifiers.
 * Use the `selection_type` field to specify whether or not multiple selections from
 * the modifier list are allowed.
 */
export declare class CatalogModifierList extends SpeakeasyBase {
    /**
     * The options included in the `CatalogModifierList`.
     *
     * @remarks
     * You must include at least one `CatalogModifier`.
     * Each CatalogObject must have type `MODIFIER` and contain
     * `CatalogModifier` data.
     */
    modifiers?: CatalogObject[];
    /**
     * The name for the `CatalogModifierList` instance. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
     */
    name?: string;
    /**
     * Determines where this modifier list appears in a list of `CatalogModifierList` values.
     */
    ordinal?: number;
    /**
     * Indicates whether multiple options from the modifier list
     *
     * @remarks
     * can be applied to a single `CatalogItem`.
     */
    selectionType?: string;
}
