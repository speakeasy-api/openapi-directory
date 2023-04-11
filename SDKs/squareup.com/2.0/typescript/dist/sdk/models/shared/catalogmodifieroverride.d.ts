import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options to control how to override the default behavior of the specified modifier.
 */
export declare class CatalogModifierOverride extends SpeakeasyBase {
    /**
     * The ID of the `CatalogModifier` whose default behavior is being overridden.
     */
    modifierId: string;
    /**
     * If `true`, this `CatalogModifier` should be selected by default for this `CatalogItem`.
     */
    onByDefault?: boolean;
}
