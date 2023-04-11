import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An entity is a single piece of data that was recognized in unstructured text.  For example, a city, a postal code, package dimensions, insured value, etc.  Each entity includes the original text and the parsed value.
 *
 * @remarks
 *
 */
export declare class RecognizedEntity extends SpeakeasyBase {
    /**
     * The index of the last character of this entity within the original text
     */
    endIndex: number;
    /**
     * The normalized value of the entity.
     *
     * @remarks
     *
     * Most entity results have a `value` field, which is the normalized value of the entity.  For example, if the substring "john doe" was recognized as a "person" entity, then the value might be normalized to have proper capitalization (e.g. "John Doe").  Or if the substring "ft worth" was recognized as a "city" entity, then the value might be normalized to "Fort Worth".
     *
     * Some entities have other information in addition to, or instead of a `value`.  For example, a "dimensions" entity will have separate fields for `length`, `width`, `height`, and `unit`.
     *
     */
    result?: Record<string, any>;
    /**
     * A confidence score between zero and one that indicates how certain the API is that it correctly recognized this entity
     *
     * @remarks
     *
     */
    score: number;
    /**
     * The index of the first character of this entity within the original text
     */
    startIndex: number;
    /**
     * The substring from the original text that was recognized as this entity
     */
    text: string;
    /**
     * The Entity type (e.g. "weight", "person", "address_line1", etc.)
     */
    type: string;
}
