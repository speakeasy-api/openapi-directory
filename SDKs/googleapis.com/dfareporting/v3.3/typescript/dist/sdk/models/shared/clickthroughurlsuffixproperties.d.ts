import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Click Through URL Suffix settings.
 */
export declare class ClickThroughUrlSuffixProperties extends SpeakeasyBase {
    /**
     * Click-through URL suffix to apply to all ads in this entity's scope. Must be less than 128 characters long.
     */
    clickThroughUrlSuffix?: string;
    /**
     * Whether this entity should override the inherited click-through URL suffix with its own defined value.
     */
    overrideInheritedSuffix?: boolean;
}
