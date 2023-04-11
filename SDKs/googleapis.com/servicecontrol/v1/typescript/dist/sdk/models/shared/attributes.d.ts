import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
/**
 * A set of attributes, each in the format `[KEY]:[VALUE]`.
 */
export declare class Attributes extends SpeakeasyBase {
    /**
     * The set of attributes. Each attribute's key can be up to 128 bytes long. The value can be a string up to 256 bytes, a signed 64-bit integer, or the Boolean values `true` and `false`. For example: "/instance_id": "my-instance" "/http/user_agent": "" "/http/request_bytes": 300 "abc.com/myattribute": true
     */
    attributeMap?: Record<string, AttributeValue>;
    /**
     * The number of attributes that were discarded. Attributes can be discarded because their keys are too long or because there are too many attributes. If this value is 0 then all attributes are valid.
     */
    droppedAttributesCount?: number;
}
