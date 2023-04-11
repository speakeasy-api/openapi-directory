import { SpeakeasyBase } from "../../../internal/utils";
export declare class CustomFieldDefinitionValues extends SpeakeasyBase {
    /**
     * The custom field code.
     */
    code?: string;
    /**
     * The custom field description.
     */
    description?: string;
}
export declare class CustomFieldDefinition extends SpeakeasyBase {
    /**
     * The custom field category.
     */
    category?: string;
    /**
     * Specifies the default value of the custom field.
     */
    defaultValue?: string;
    /**
     * Indicates whether the custom field is required.
     */
    isRequired?: boolean;
    /**
     * The custom field label.
     */
    label?: string;
    /**
     * The custom field type.
     */
    type?: string;
    /**
     * A set of values that are applicable to the custom field.
     */
    values?: CustomFieldDefinitionValues[];
}
