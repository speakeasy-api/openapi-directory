import { SpeakeasyBase } from "../../../internal/utils";
import { Attribute, AttributeInput } from "./attribute";
/**
 * A container for all the attributes for a given location.
 */
export declare class AttributesInput extends SpeakeasyBase {
    /**
     * A collection of attributes that need to be updated.
     */
    attributes?: AttributeInput[];
    /**
     * Required. Google identifier for this location in the form of `locations/{location_id}/attributes`.
     */
    name?: string;
}
/**
 * A container for all the attributes for a given location.
 */
export declare class Attributes extends SpeakeasyBase {
    /**
     * A collection of attributes that need to be updated.
     */
    attributes?: Attribute[];
    /**
     * Required. Google identifier for this location in the form of `locations/{location_id}/attributes`.
     */
    name?: string;
}
