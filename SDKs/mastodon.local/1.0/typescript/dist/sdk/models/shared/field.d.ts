import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a profile field as a name-value pair with optional verification.
 *
 * @see {@link https://docs.joinmastodon.org/entities/field/}
 */
export declare class Field extends SpeakeasyBase {
    /**
     * The key of a given field's key-value pair.
     */
    name?: string;
    /**
     * The value associated with the `name` key.
     */
    value?: string;
    /**
     * Timestamp of when the server verified a URL value for a rel="me” link. If `value` is a verified URL. Otherwise, null
     */
    verifiedAt?: Date;
}
