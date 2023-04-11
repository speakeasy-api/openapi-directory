import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A JSON object containing key information
 */
export declare class KeyInput extends SpeakeasyBase {
    /**
     * Whether or not this key can only read and not write.
     */
    isReadOnly?: boolean;
    /**
     * Custom label for this API key.
     */
    label?: string;
}
/**
 * A JSON object containing the key
 */
export declare class Key extends SpeakeasyBase {
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Whether or not this key can only read and not write.
     */
    isReadOnly?: boolean;
    /**
     * Custom label for this API key.
     */
    label?: string;
    /**
     * The secret token for authentication.
     */
    secret?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    timeUpdated?: string;
    /**
     * Url to the individual resource.
     */
    url?: string;
}
