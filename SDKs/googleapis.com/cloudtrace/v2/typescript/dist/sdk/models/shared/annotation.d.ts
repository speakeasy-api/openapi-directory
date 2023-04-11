import { SpeakeasyBase } from "../../../internal/utils";
import { Attributes } from "./attributes";
import { TruncatableString } from "./truncatablestring";
/**
 * Text annotation with a set of attributes.
 */
export declare class Annotation extends SpeakeasyBase {
    /**
     * A set of attributes as key-value pairs.
     */
    attributes?: Attributes;
    /**
     * Represents a string that might be shortened to a specified length.
     */
    description?: TruncatableString;
}
