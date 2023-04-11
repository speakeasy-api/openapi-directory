import { SpeakeasyBase } from "../../../internal/utils";
import { TruncatableString } from "./truncatablestring";
/**
 * The allowed types for `[VALUE]` in a `[KEY]:[VALUE]` attribute.
 */
export declare class AttributeValue extends SpeakeasyBase {
    /**
     * A Boolean value represented by `true` or `false`.
     */
    boolValue?: boolean;
    /**
     * A 64-bit signed integer.
     */
    intValue?: string;
    /**
     * Represents a string that might be shortened to a specified length.
     */
    stringValue?: TruncatableString;
}
