import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
/**
 * A set of attributes as key-value pairs.
**/
export declare class Attributes extends SpeakeasyBase {
    attributeMap?: Record<string, AttributeValue>;
    droppedAttributesCount?: number;
}
