import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of this attribute
 */
export declare enum AttributesTypeEnum {
    Text = "text",
    Select = "select",
    Multi = "multi"
}
/**
 * An app attribute
 */
export declare class Attributes extends SpeakeasyBase {
    /**
     * The name of this attribute
     */
    name: string;
    /**
     * The type of this attribute
     */
    type: AttributesTypeEnum;
    /**
     * A comma seperated list of values allowed for this attribute
     */
    values?: string;
}
