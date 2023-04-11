import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A JSON object containing item information
 */
export declare class ItemUpdate extends SpeakeasyBase {
    /**
     * Object containing the new configuration. This will be applied automatically when the values are valid.
     */
    configRequest?: Record<string, any>;
    /**
     * The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...
     */
    custom?: any;
    /**
     * A name or a label for this resource. This is used in the user interface, may be empty.
     */
    label?: string;
    /**
     * Instruction for the location engine to forcibly localize the item at the specified location id as soon as possible. Cleared automatically.
     */
    locationRequest?: string;
    /**
     * Object of searchable metadata for this resource. Can be freely used to store metadata properties.
     */
    metadata?: Record<string, any>;
}
