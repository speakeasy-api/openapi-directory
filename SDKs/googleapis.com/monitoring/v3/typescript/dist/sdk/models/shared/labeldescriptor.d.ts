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
     * The key for this label. The key must meet the following criteria: Does not exceed 100 characters. Matches the following regular expression: [a-zA-Z][a-zA-Z0-9_]* The first character must be an upper- or lower-case letter. The remaining characters must be letters, digits, or underscores.
     */
    key?: string;
    /**
     * The type of data that can be assigned to the label.
     */
    valueType?: LabelDescriptorValueTypeEnum;
}
