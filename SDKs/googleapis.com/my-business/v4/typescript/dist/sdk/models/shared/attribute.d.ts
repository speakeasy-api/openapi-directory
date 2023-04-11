import { SpeakeasyBase } from "../../../internal/utils";
import { RepeatedEnumAttributeValue } from "./repeatedenumattributevalue";
import { UrlAttributeValue } from "./urlattributevalue";
/**
 * Output only. The type of value that this attribute contains. This should be used to determine how to interpret the value.
 */
export declare enum AttributeValueTypeEnum {
    AttributeValueTypeUnspecified = "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
    Bool = "BOOL",
    Enum = "ENUM",
    Url = "URL",
    RepeatedEnum = "REPEATED_ENUM"
}
/**
 * A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes.
 */
export declare class Attribute extends SpeakeasyBase {
    /**
     * The ID of the attribute. Attribute IDs are provided by Google.
     */
    attributeId?: string;
    /**
     * Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified.
     */
    repeatedEnumValue?: RepeatedEnumAttributeValue;
    /**
     * When the attribute value type is URL, this field contains the value(s) for this attribute, and the other values fields must be empty.
     */
    urlValues?: UrlAttributeValue[];
    /**
     * Output only. The type of value that this attribute contains. This should be used to determine how to interpret the value.
     */
    valueType?: AttributeValueTypeEnum;
    /**
     * The values for this attribute. The type of the values supplied must match that expected for that attribute; see [AttributeValueType](/my-business/reference/rest/v4/AttributeValueType). This is a repeated field where multiple attribute values may be provided. Attribute types only support one value.
     */
    values?: any[];
}
