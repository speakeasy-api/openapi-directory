import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogModifierOverride } from "./catalogmodifieroverride";
/**
 * Options to control the properties of a `CatalogModifierList` applied to a `CatalogItem` instance.
 */
export declare class CatalogItemModifierListInfo extends SpeakeasyBase {
    /**
     * If `true`, enable this `CatalogModifierList`. The default value is `true`.
     */
    enabled?: boolean;
    /**
     * If 0 or larger, the largest number of `CatalogModifier`s that can be selected from this `CatalogModifierList`.
     */
    maxSelectedModifiers?: number;
    /**
     * If 0 or larger, the smallest number of `CatalogModifier`s that must be selected from this `CatalogModifierList`.
     */
    minSelectedModifiers?: number;
    /**
     * The ID of the `CatalogModifierList` controlled by this `CatalogModifierListInfo`.
     */
    modifierListId: string;
    /**
     * A set of `CatalogModifierOverride` objects that override whether a given `CatalogModifier` is enabled by default.
     */
    modifierOverrides?: CatalogModifierOverride[];
}
