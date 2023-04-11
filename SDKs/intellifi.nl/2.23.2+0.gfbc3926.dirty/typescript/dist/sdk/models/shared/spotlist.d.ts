import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A JSON object containing spot list information
 */
export declare class SpotListInput extends SpeakeasyBase {
    /**
     * The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...
     */
    custom?: any;
    /**
     * A name or a label for this resource. This is used in the user interface, may be empty.
     */
    label?: string;
    /**
     * Object of searchable metadata for this resource. Can be freely used to store metadata properties.
     */
    metadata?: Record<string, any>;
}
/**
 * A JSON object containing the spot list
 */
export declare class SpotList extends SpeakeasyBase {
    /**
     * The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...
     */
    custom?: any;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * A name or a label for this resource. This is used in the user interface, may be empty.
     */
    label?: string;
    /**
     * Url to the individual resource.
     */
    list?: string;
    /**
     * Object of searchable metadata for this resource. Can be freely used to store metadata properties.
     */
    metadata?: Record<string, any>;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    timeUpdated?: string;
    /**
     * Total amount of spots in this set
     */
    total?: number;
}
