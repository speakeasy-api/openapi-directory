import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A JSON object containing the subscription
 */
export declare class KeyValuePair extends SpeakeasyBase {
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Unique identifier for the value.
     */
    kvKey?: string;
    /**
     * The value of the key value pair.
     */
    kvValue?: any;
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
/**
 * A JSON object containing Key-value information
 */
export declare class KeyValuePairInput extends SpeakeasyBase {
    /**
     * Unique identifier for the value.
     */
    kvKey?: string;
    /**
     * The value of the key value pair.
     */
    kvValue?: any;
}
