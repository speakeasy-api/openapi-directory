import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of data that can be assigned to the label.
 */
export declare enum LabelDescriptorValueTypeEnum {
    String = "STRING",
    Bool = "BOOL",
    Int64 = "INT64"
}
/**
 * A description of a label.
 */
export declare class LabelDescriptor extends SpeakeasyBase {
    /**
     * A human-readable description for the label.
     */
    description?: string;
    /**
     * The label key.
     */
    key?: string;
    /**
     * The type of data that can be assigned to the label.
     */
    valueType?: LabelDescriptorValueTypeEnum;
}
