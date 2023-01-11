import { SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { AttributeInput } from "./attribute";
/**
 * A container for all the attributes for a given location.
**/
export declare class Attributes extends SpeakeasyBase {
    attributes?: Attribute[];
    name?: string;
}
/**
 * A container for all the attributes for a given location.
**/
export declare class AttributesInput extends SpeakeasyBase {
    attributes?: AttributeInput[];
    name?: string;
}
